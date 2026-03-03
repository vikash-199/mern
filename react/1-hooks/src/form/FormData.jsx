import { useState } from 'react';

function FormData() {
  const [formdata, setFormdata] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formdata);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };
  return (
    <div>
      <h2>Login form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formdata.email}
          onChange={handleChange}
        />
        <input
          type="password"
          value={formdata.password}
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default FormData;
