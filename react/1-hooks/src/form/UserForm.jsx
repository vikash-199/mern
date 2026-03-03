import { useState } from 'react';

function UserForm() {
  const [formDta, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    country: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDta);
    setFormData({ name: '', email: '', gender: '', country: '' });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  return (
    <div>
      <h2>User Data</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          value={formDta.name}
          onChange={handleChange}
        />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          value={formDta.email}
          onChange={handleChange}
        />
        <label htmlFor="">Gender</label>
        <label htmlFor="">
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
            checked={formDta.gender === 'Male'}
          />
          Male
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
            checked={formDta.gender === 'Female'}
          />
          Female
        </label>
        <label htmlFor="">Country:</label>
        <select
          name="country"
          value={formDta.country}
          onChange={handleChange}
          required
        >
          <option value="">--select country--</option>
          <option value="IND">IND</option>
          <option value="PAK">PAK</option>
          <option value="SL">SL</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;

// import { useState } from 'react';

// function UserForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     gender: '',
//   });
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     setFormData({ name: '', email: '', gender: '' });
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((pre) => ({
//       ...pre,
//       [name]: value,
//     }));
//   };
//   return (
//     <div>
//       <h2>User Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <label>Gender:</label>
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="Male"
//             onChange={handleChange}
//             checked={formData.gender === 'Male'}
//           />
//           Male
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="Female"
//             onChange={handleChange}
//             checked={formData.gender === 'Female'}
//           />
//           Female
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default UserForm;
