import React, { createContext, useState } from 'react'
const wishContext = createContext();

function Context({ children }) {
    const [user, setUser] = useState(null);
    const login = (userData) => {
        // Logic to set user data after successful login
        setUser(userData);
      };
      const logout = () => {
        // Logic to clear user data after logout
        setUser(null);
      };
  return (
    <div>
       <wishContext.Provider value={{ user, login, logout }}>
      {children}
    </wishContext.Provider>
    </div>
  )
}
export default Context
