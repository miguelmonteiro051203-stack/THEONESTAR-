import React, { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { SuiteSelectionScreen } from './components/SuiteSelectionScreen';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-[#1a1a0b]">
      {isLoggedIn ? (
        <SuiteSelectionScreen />
      ) : (
        <LoginScreen onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
};

export default App;