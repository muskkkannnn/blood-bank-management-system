import { useState } from "react";
import "@/styles/donate.css"; // Import the CSS file

function Donate() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bloodGroup: "",
    contact: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation Form Submitted:", formData);
    // Add backend API call here
  };

  return (
    <div className="donate-container">
      {/* Left Section - Form */}
      <div className="donate-content">
        <h1>Donate Blood</h1>
        <p>Your donation can save lives. Please fill in the details below.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="City/Location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Right Section - Image */}
      <div className="donate-image">
        <img src="src/assets/donate-page.jpg" alt="Blood Donation" />
      </div>
    </div>
  );
}

export default Donate;





// import { useState } from "react";
// import "@/styles/donate.css";

// function Donate() {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     bloodGroup: "",
//     contact: "",
//     location: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Donation Form Submitted:", formData);
//     // Add backend API call here
//   };

//   return (
//     <>
//       <div className="donate-container">
//         <h2>Donate Blood</h2>
//         <p>Your donation can save lives. Please fill in the details below.</p>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="number"
//             name="age"
//             placeholder="Age"
//             value={formData.age}
//             onChange={handleChange}
//             required
//           />

//           <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
//             <option value="">Select Blood Group</option>
//             <option value="A+">A+</option>
//             <option value="A-">A-</option>
//             <option value="B+">B+</option>
//             <option value="B-">B-</option>
//             <option value="O+">O+</option>
//             <option value="O-">O-</option>
//             <option value="AB+">AB+</option>
//             <option value="AB-">AB-</option>
//           </select>

//           <input
//             type="text"
//             name="contact"
//             placeholder="Contact Number"
//             value={formData.contact}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="text"
//             name="location"
//             placeholder="City/Location"
//             value={formData.location}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Donate;
