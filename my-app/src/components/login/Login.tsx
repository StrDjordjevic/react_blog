import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/admin");
  };

  const handleInputs = (e: any) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="form" onSubmit={handleSubmit}>
      <form>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="username"
            value={data.username}
            required
            onChange={handleInputs}
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="password"
            value={data.password}
            required
            onChange={handleInputs}
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
