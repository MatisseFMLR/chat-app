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
      <Contact 
        name="Bradley Ruiz"  
        avatar="https://randomuser.me/api/portraits/men/23.jpg" 
        isOnline={true}
      />
      <Contact 
        name="Deanna Ryan"  
        avatar="https://randomuser.me/api/portraits/women/56.jpg" 
        isOnline={false}
      />
    </div>
  );
}

export default App;
