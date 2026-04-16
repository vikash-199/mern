import { useState } from 'react';
import axios from 'axios';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    resume: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'resume') {
      setForm({ ...form, resume: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', form.name);
    data.append('email', form.email);
    data.append('resume', form.resume);

    try {
      const res = await axios.post('http://localhost:5000/api/upload', data);
      alert('Uploaded successfully');
      console.log(res.data);
    } catch (err) {
      alert(err.response?.data?.message || 'Error');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4">Upload Resume</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="file"
          name="resume"
          accept="application/pdf"
          className="w-full mb-3"
          onChange={handleChange}
          required
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Upload
        </button>
      </form>
    </div>
  );
}

export default App;
