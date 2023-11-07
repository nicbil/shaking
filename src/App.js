import React, { useState, useEffect }  from 'react';

export default function App() {
  const [clickCount, setClickCount] = useState(0);


    function requestDeviceMotionAccess() {
        if (typeof DeviceMotionEvent.requestPermission === 'function') {
            DeviceMotionEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        window.addEventListener('devicemotion', handleMotionEvent);
                        // Доступ к данным о движении разрешен, выполните ваш код
                    } else {
                        alert('Доступ к данным о движении не разрешен.');
                    }
                })
                .catch(error => {
                    alert('Ошибка запроса разрешения на доступ к данным о движении:', error);
                });
        } else {
            alert('Браузер не поддерживает метод requestPermission.');
        }
    }

    function handleMotionEvent(event) {
        setClickCount(event.accelerationIncludingGravity.x);
        /*    const x = event.accelerationIncludingGravity.x;
            const y = event.accelerationIncludingGravity.y;
            const z = event.accelerationIncludingGravity.z;*/
    }

    return (<div>
        {clickCount}
        <button onClick={requestDeviceMotionAccess}>Запросить доступ к данным о движении</button>
    </div>);
}
