import { useState } from "react";
import { Link } from "react-router-dom";

function Register(setIsLoggedIn) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // สร้างออบเจ็กต์ข้อมูลที่จะส่ง
    const data = {
      name: name,
      email: email,
      password: password,
    };

    // ส่งคำขอ POST ไปยัง http://localhost:5000/register
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // ตรวจสอบสถานะคำขอ
        if (response.status === 200) {
          // ดำเนินการเมื่อสำเร็จ
          alert("ลงทะเบียนสำเร็จ");
          setIsLoggedIn(true);
        } else {
          // ดำเนินการเมื่อไม่สำเร็จ
          alert("เกิดข้อผิดพลาดในการลงทะเบียน");
        }
      })
      .catch((error) => {
        console.error("เกิดข้อผิดพลาดในการส่งคำขอ: " + error);
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Register;
