import { createContext, useContext, useState } from "react";

const CorrectUserDetailContext = createContext(null);

export const useUserDetail = () => {
  return useContext(CorrectUserDetailContext);
};

function UserDetailProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <CorrectUserDetailContext.Provider value={[user, setUser]}>
      {children}
    </CorrectUserDetailContext.Provider>
  );
}

export default UserDetailProvider;
