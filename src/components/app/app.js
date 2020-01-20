import React from 'react';
import vinAPI from '../../api/api'

function App() {
  vinAPI.getVehicleVariableList().then(r => console.log(r))

  return (
    <div className="App">
      
    </div>
  );
}

export default App;