import React from 'react';

export default function App() {
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    DeviceMotionEvent.requestPermission().then((permissionState) => {
      console.log(permissionState);
      if (permissionState === 'granted') {
        window.addEventListener('devicemotion', handleMotionEvent);
      }
    }).catch(console.error);
  } else {
    window.addEventListener('devicemotion', handleMotionEvent);
  }

  function handleMotionEvent(event) {
    const x = event.accelerationIncludingGravity.x;
    const y = event.accelerationIncludingGravity.y;
    const z = event.accelerationIncludingGravity.z;
    return (<div>{x} - {y} - {z}</div>);
  }

  return <div>Test</div>;
}
