import React from 'react'

export default function Menu({ setLogged }) {
  const logoutUser = () => {
    localStorage.removeItem("user");
    setLogged(false);
  }

  const Article = () => (
    <div style={{ "text-align": "center" }}>
      <img src="https://images.unsplash.com/photo-1665837231761-66ce52c14602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80" alt="Latvia's forest"></img>
      <p>Latvian Forest Company är ett noterat svenskt bolag som förvärvar och förvaltar skogsfastigheter och bedriver skogsbruk i Lettland. Utgångspunkten är tron att skogen är en trygg investering i sig och att skogsbruk är en stabil och värdeskapande verksamhet. </p>
    </div>
  );
  
  return (
    <>
      <ul>
        <li><a href="#a">Home</a></li>
        <li><a href="#b">About us</a></li>
        <li><a href="#c">Products</a></li>
        <li><a href="#d">Contact</a></li>
        <li><a href="#e" onClick={ logoutUser }>Log out</a></li>
      </ul>
      <Article />
    </>
  )
}