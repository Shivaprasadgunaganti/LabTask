import React from "react";
import axios from "axios";
import "./Login.css";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useState } from "react";
export const Login = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/recieve", {
        email,
        password,
      });

      const token = response.data.token;
      const decoded = jwtDecode(token);
      setRole(decoded?.role);
      // // console.log(decoded.role, "drole");
console.log(response,'res')
      if (response.data.success) {
        console.log("Login success");
      } else {
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed", error.message);
    }
  };

  const emailHandler = (k) => {
    setEmail(k.target.value);
  };
  const passwordHandler = (k) => {
    setPassword(k.target.value);
  };
  return (
    <div>
      <div className="login-main">
        <form className="form-main1">
          <label>Email :</label>
          <input
            type="email"
            placeholder="Enter your Email"
            onChange={emailHandler}
          />
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter your Password"
            onChange={passwordHandler}
          />
          <button type="submit">Enter</button>
        </form>
      </div>
    </div>
  );
};
