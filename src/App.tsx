import React from 'react';
import styled from 'styled-components';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <StyledHeader>Welcome to the Expenses App</StyledHeader>
    </div>
  );
};

const StyledHeader = styled.h1`
  font-size: 48px;
  color: blueviolet;
`;

export default App;
