import React from 'react'

export default function Login({ setLogged }) {
  const loginUser = (e) => {
    e.preventDefault();

    if (document.querySelector("#email").value === "diogo" && document.querySelector("#password").value === "123") {
      localStorage.user = true;
      setLogged(true);
    } else {
      alert("Invalid credentials!");
    }
  }

  return (
    <form onSubmit={ loginUser }>
      <div>
        <label htmlFor="email">E-mail:</label>
        <br />
        <input id="email" type="text"/>
      </div>
      <br />
      <div>
        <label htmlFor="password">Password:</label>
        <br />
        <input id="password" type="password"/>
      </div>
      <br />
      <div>
        <button type="submit">Log in</button>
      </div>
    </form>
  )
}
