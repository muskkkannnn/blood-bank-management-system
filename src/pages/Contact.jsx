import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!"); // Replace with backend logic later
  };

  return (
    <div className="contact-container">
      {/* Form Section */}
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>Have any questions? Feel free to reach out!</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Image Section */}
      <div className="contact-image">
        <img src="/src/assets/contact-us.webp" alt="Contact Us" />
      </div>
    </div>
  );
};

export default Contact;


// import React, { useState } from "react";
// import "../styles/Contact.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message Sent!"); // Replace with backend logic later
//   };

//   return (
//     <div className="contact-container">
//       <h2>Contact Us</h2>
//       <p>Have any questions? Feel free to reach out!</p>
      
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
//         <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
//         <textarea name="message" placeholder="Your Message" required onChange={handleChange}></textarea>
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;