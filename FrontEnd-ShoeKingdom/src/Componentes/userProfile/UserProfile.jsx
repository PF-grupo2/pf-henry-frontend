import { useState, useEffect } from "react";
import { utilsStorage } from '../utils';

function UserProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userSession = utilsStorage.getDataStorage("userSession");

    if (userSession) {
      setUserData(userSession);
    }
  }, []);

  return (
    <div className="user-profile">
      {userData && (
        <>
          {userData.picture && <img src={userData.picture} alt="User" />}
          <h1>{userData.name}</h1>
          <div>{userData.email}</div>
        </>
      )}
      {!userData && <span>No hay información de usuario disponible</span>}
    </div>
  );
}

export default UserProfile;
