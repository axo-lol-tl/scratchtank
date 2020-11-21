
import React from 'react';
import googlelogin from '../static/googlenormal.png'


function Login() {
  // document.querySelector('canvas').style.width = 0;
  
  return (
    <div className="fishtank">
      <button className="bttn" onClick={() => window.location.href = '/api/auth/google'}>

      </button>
    </div>
  )
}


export default Login;
