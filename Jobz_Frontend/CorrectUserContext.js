import { createContext, useContext, useState } from "react";

const CorrectUserContext = createContext(null);

export const useUser = () => {
  return useContext(CorrectUserContext);
};

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <CorrectUserContext.Provider value={[user, setUser]}>
      {children}
    </CorrectUserContext.Provider>
  );
}

export default UserProvider;
