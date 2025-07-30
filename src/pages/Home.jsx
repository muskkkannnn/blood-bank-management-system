import React from "react";
import { useNavigate } from "react-router-dom";
import "@/styles/Home.css"; // Import the CSS file
import homepageImage from '/src/assets/homepage.jpg';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="home-container">
      <div className="text-section">
        <h3>Welcome to the </h3>
        <h1>Blood Bank </h1>
        {/* <h4 className="bottom">Management System</h4> */}
        <p>Donate, Request and Manage. Save lives.</p>
        <p>Join us in our mission to save lives by donating blood <br /> and supporting those in need.</p>
        
        <button onClick={() => navigate("/donate")} className="donate-btn">
          Donate Now
        </button>
      </div>
      {/* <div className="image-section" width="500" height="600"> */}
      <div className="home-image">
        <img src={homepageImage} alt="Blood Donation" />
      </div>
      
      {/* </div> */}
    </div>
  );
};

export default Home;





// 📌 Home.js - Home Page Component
// import React from "react";
// import "../styles/Home.css"; // Home page styling

// function Home() {
//   return (
//     <div className="home-container">
//       <div className="text-section">
//         <h1>Welcome to the Blood Bank</h1>
//         <h3>Donate Blood, Save Lives</h3>
//         <p>Join us in our mission to save lives by donating blood and supporting those in need.</p>
//         <button className="donate-btn">Donate Now</button>
//       </div>
//       <div className="image-section">
//         <img src="/images/blood-donation.png" alt="Blood Donation" />
//       </div>
//     </div>
//   );
// }

// export default Home;
