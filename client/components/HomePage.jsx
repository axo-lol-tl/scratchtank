/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import FishTank from './FishTank.jsx';

const HomePage = ({ user }) => {
  const [fishCount, setFishCount] = useState(5);
  // const [userDB, setUserDB] = useState(user)

  useEffect(() => {
    // fetch('api/user').then((user) => setUserDB(user));
    console.log('mounted');
    return () => {
      console.log('unmounted');
    };
  }, []);

  const Header = () => (
    <header className="header1">
      <h1>Welcome to the Aquarium</h1>
      <h2 className="header2">{`Welcome ${user || 'Friend!'}!`}</h2>
    </header>
  );

  const ControlPanel = () => {
    const body = {
      user,
      fishCount,
    };
    const saveUsersFish = () => {
      console.log(fishCount);
      // fetch('/api/userFish', {
      //   method: 'POST',
      //   content-type: 'application/json',
      //   body: JSON.stringify(body),
      // })
    };

    return (
      <div className="control-panel">
        <button
          type="submit"
          className="bttn"
          onClick={() => setFishCount(fishCount + 1)}
        >
          Add
        </button>
        <button
          type="submit"
          className="bttn"
          onClick={() => setFishCount(fishCount - 1)}
        >
          Remove
        </button>
        <button type="submit" className="bttn" onClick={() => saveUsersFish()}>
          Sync
        </button>
      </div>
    );
  };

  return (
    <div className="homepage">
      <Header />
      <ControlPanel />
      <FishTank fishCount={fishCount} />
    </div>
  );
};

export default HomePage;
