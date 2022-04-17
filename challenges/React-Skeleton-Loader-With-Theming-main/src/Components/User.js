import React, { useEffect, useState } from "react";
import UsersSkeleton from "../Skeleton/UsersSkeleton";

const User = ({ theme }) => {
  const [profile, setProile] = useState(null);

  async function fetchData() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const respData = await resp.json();
    setProile(respData);
  }

  useEffect(() => {
    // delay fetch of data so we can see skeleton
    setTimeout(() => {
      fetchData();
    }, 8000);
  }, []);

  return (
    <>
      <div className="user">
        <h2>Users</h2>
        {profile && (
          <div className="profile">
            <h3>{profile.username}</h3>
            <p>{profile.email}</p>
            <a href={profile.website}>{profile.website}</a>
          </div>
        )}
        {!profile &&
          [1, 2, 3, 4, 5].map((id) => {
            return <UsersSkeleton key={id} theme={theme} />;
          })}
      </div>
    </>
  );
};

export default User;
