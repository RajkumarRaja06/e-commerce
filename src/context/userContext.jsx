import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  const userInfo =
    localStorage.getItem('user') === 'undefined'
      ? localStorage.clear()
      : JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    setAccessToken(userInfo);
  }, []);

  return (
    <UserContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </UserContext.Provider>
  );
};

const UserConsumer = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider, UserConsumer };
