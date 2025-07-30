import { useState } from "react";
import "@/styles/request.css";
import requestImage from '/src/assets/request-page.jpg';

function Request() {
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    contact: "",
    location: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blood Request Submitted:", formData);
    // Add backend API call here
  };

  return (
    <>
      <div className="request-container">
        {/* Form Section */}
        <div className="request-content">
          <h1>Request Blood</h1>
          <p>Fill in the details below to request blood.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
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

            <textarea
              name="reason"
              placeholder="Reason for Request"
              value={formData.reason}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Submit Request</button>
          </form>
        </div>

        {/* Image Section */}
        <div className="request-image">
          <img src={requestImage} alt="Blood Request" />
        </div>
      </div>
    </>
  );
}

export default Request;



// import { useState } from "react";
// import "@/styles/request.css";

// function Request() {
//   const [formData, setFormData] = useState({
//     name: "",
//     bloodGroup: "",
//     contact: "",
//     location: "",
//     reason: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Blood Request Submitted:", formData);
//     // Add backend API call here
//   };

//   return (
//     <>
//       <div className="request-container">
//         <h2>Request Blood</h2>
//         <p>Fill in the details below to request blood.</p>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
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

//           <textarea
//             name="reason"
//             placeholder="Reason for Request"
//             value={formData.reason}
//             onChange={handleChange}
//             required
//           ></textarea>

//           <button type="submit">Submit Request</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Request;