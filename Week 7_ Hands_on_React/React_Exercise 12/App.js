import React, { useState } from "react";

function GuestPage() {
  return <h1>Please sign up.</h1>;
}

function UserPage() {
  return <h1>Welcome back</h1>;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  let button;
  let page;

  if (isLoggedIn) {
    button = <button onClick={handleLogoutClick}>Logout</button>;
    page = <UserPage />;
  } else {
    button = <button onClick={handleLoginClick}>Login</button>;
    page = <GuestPage />;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {page}
      {button}
    </div>
  );
}

export default App;
