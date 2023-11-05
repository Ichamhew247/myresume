import { useState } from "react";

function Signup() {
  const [mineEmail, setMineEmail] = useState("");
  const [minePassword, setMinePassword] = useState("");

  const signUp = async () => {
    let item = { mineEmail, minePassword };
    console.warn(item);

    let result = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.log("result", result);
  };

  return (
    <div>
      <input
        type="text"
        value={mineEmail}
        onChange={(e) => setMineEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={minePassword}
        onChange={(e) => setMinePassword(e.target.value)}
        placeholder="password"
      />

      <button onClick={signUp}>Sign up</button>
    </div>
  );
}

export default Signup;
