"use state";

const axios = require("axios");

async function register(user) {
  const url = "http://127.0.0.1:8000/api/auth/register";
  try {
    const res = await axios.post(url, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    throw err;
  }
}

// Example usage:
const user = {
  username: "example_user",
  password: "example_password",
  // Other user data...
};

register(user)
  .then((response) => {
    console.log("User registered successfully:", response);
  })
  .catch((error) => {
    console.error("Failed to register user:", error);
  });

export default function Register() {
  return (
    <section className="RegisterPage">
      <form>
        <label htmlFor="name">Full Name:</label>
        <input name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input name="email" />
        <br />
        <label htmlFor="username">Username:</label>
        <input name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input name="password" />
        <br />
        <button type="Submit">Submit</button>
      </form>
    </section>
  );
}
