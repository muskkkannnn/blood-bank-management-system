import { useState } from "react";
import "@/styles/login.css";
import loginImage from '/src/assets/login-page.webp';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState(""); // Added missing state for userType

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in as:", userType, "with email:", email);
    // Add authentication logic here
  };

  return (
    <div className="login-container">
      {/* Form Section */}
      <div className="login-content">
        <h1>Login</h1>
        <p>Access your account</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* User Type Radio Buttons */}
          <div className="user-type">
            <label>
              <input
                type="radio"
                name="userType"
                value="employee"
                checked={userType === "employee"}
                onChange={(e) => setUserType(e.target.value)}
              />
              Employee
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="donor"
                checked={userType === "donor"}
                onChange={(e) => setUserType(e.target.value)}
              />
              Donor
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="receiver"
                checked={userType === "receiver"}
                onChange={(e) => setUserType(e.target.value)}
              />
              Receiver
            </label>
          </div>
          
          <button type="submit">Login</button>
        </form>
      </div>

      {/* Image Section */}
      <div className="login-image">
        <img src={loginImage} alt="Login" />
      </div>
    </div>
  );
}

export default Login;



// import { useState } from "react";
// import "@/styles/login.css";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log("Logging in with:", email, password);
//     // Add authentication logic here
//   };

//   return (
//     <>
//       <div className="login-container">
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Login;
