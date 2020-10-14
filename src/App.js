import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact 
        name="Duane Gutierrez"  
        avatar="https://randomuser.me/api/portraits/men/50.jpg" 
        isOnline={false}
      />
    </div>
  );
}

export default App;
