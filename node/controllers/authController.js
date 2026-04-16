import User from '../models/User';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken';

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'email and password are required.' });
    }
    //check user exist
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    //compare password
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    //generate token
    const token = jwt.sign({ id: user._id }, 'mynameislakhan', {
      expiresIn: '15d',
    });

    //send responce
    return;
  } catch (err) {}
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //verified input
    if (!email || !name || !password) {
      return res.status(400).json({ message: 'All field req' });
    }

    //check user exist in Db
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: 'higy' });
    }

    //hash password
    const hashPassword = await bcrypt.hash(password, 10);

    //create user
    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    //create token
    const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '15d' });

    //send res
    res
      .status(201)
      .json({ _id: user._id, name: user.name, email: user.email, token });
  } catch (err) {
    res.status(500).json({ message: 'server error.' });
  }
};
