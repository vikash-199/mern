import cloudinary from '../config/cloudinary.js';
import fs from 'fs';

export const uploadResume = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // upload to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'raw', // important for pdf
      folder: 'resumes',
    });

    // delete local file
    fs.unlinkSync(req.file.path);

    res.status(200).json({
      message: 'Uploaded successfully',
      data: {
        name,
        email,
        resumeUrl: result.secure_url,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
