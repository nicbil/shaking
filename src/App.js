import React, { useState }  from 'react';

export default function App() {
  const [clickCount, setClickCount] = useState(0);
  const [namePermission, setPermission] = useState('undefined');
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    DeviceMotionEvent.requestPermission().then((permissionState) => {
      console.log(permissionState);
      setPermission(permissionState)
      if (permissionState === 'granted') {
        window.addEventListener('devicemotion', handleMotionEvent);
      }
    }).catch(console.error);
  } else {
    window.addEventListener('devicemotion', handleMotionEvent);
  }

  function handleMotionEvent(event) {
    setClickCount(event.accelerationIncludingGravity.x);
/*    const x = event.accelerationIncludingGravity.x;
    const y = event.accelerationIncludingGravity.y;
    const z = event.accelerationIncludingGravity.z;*/

  }

  return (<div>{clickCount} - {typeof DeviceMotionEvent.requestPermission} - {namePermission}</div>);
}
