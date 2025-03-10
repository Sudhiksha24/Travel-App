import React, { useState, useEffect } from "react";
import "./App.css";
import { useNavigate, useLocation } from "react-router-dom";

const AuthPage = ({ setIsSignedIn }) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const googleSignInUrl = "https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAlAmgQ&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S589427690%3A1741624276668657&ddm=1";

  useEffect(() => {
    const storedEmail = localStorage.getItem("Email");
    const storedPassword = localStorage.getItem("Password");
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleSignIn = (event) => {
    event.preventDefault();
    if (Email === '' || Password === '') {
      setError('Please enter your email and password.');
    } else {
      if (rememberMe) {
        localStorage.setItem("Email", Email);
        localStorage.setItem("Password", Password);
      } else {
        localStorage.removeItem("Email");
        localStorage.removeItem("Password");
      }
      setIsSignedIn(true);
      setError('');
      alert("You logged in successfully");
      const redirectTo = new URLSearchParams(location.search).get('redirectTo');
      navigate(redirectTo || '/Home page');
    }
  };

  return (
    <center>
      <div className="auth-container">
        <div className="auth-box">
          <h1 className="auth-title">{isLogin ? "Login" : "Sign Up"}</h1>
          <form onSubmit={handleSignIn}>
            <table className="auth-table">
              <tbody>
                <tr>
                  <td className="auth-label">
                    <label>Email: </label>
                    <input
                      type="email"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="auth-input"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="auth-label">
                    <label>Password: </label>
                    <input
                      type="password"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="auth-input"
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="auth-options">
              <label className="auth-remember">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                /> Remember me
              </label>
              <p className="auth-forgot" onClick={() => navigate("/password page")}>
                Forgot password?
              </p>
            </div>
            <button type="submit" className="auth-button">
              {isLogin ? "Login" : "Sign Up"}
            </button>

            <button
              type="button"
              className="google-button"
              onClick={() => window.location.href = googleSignInUrl}
            >
              <img
                src="https://img.icons8.com/color/16/000000/google-logo.png"
                alt="Google Logo"
                className="google-icon"
              />
              Sign {isLogin ? "in" : "up"} with Google
            </button>
          </form>

          {error && <p className="auth-error">{error}</p>}

          <p className="auth-footer">
            {isLogin ? "Don't have an account?" : "Already have an account?"} {" "}
            <button onClick={() => setIsLogin(!isLogin)} className="toggle-button">
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </center>
  );
};

export default AuthPage;