import { useState } from 'react';
import Menu from './Menu.js'
import Login from './Login.js'

function App() {
  const [isLogged, setLogged] = useState(localStorage.user || false);

  return (
    <>{ isLogged ? <Menu setLogged={ setLogged } /> : <Login setLogged={ setLogged } /> }</> 
  );
}

export default App;
