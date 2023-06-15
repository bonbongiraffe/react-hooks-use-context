import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user";

function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);
  return (
    <main className={theme}>
      {/* wrap components that need access to context data in the provider
      You'll notice we also removed the `user` prop from these components, since we'll
      be accessing that data via context instead.*/}
      <UserProvider>
        <Header theme={theme} setTheme={setTheme} />
        <Profile theme={theme} />
      </UserProvider>
    </main>
  );
}

export default App;
