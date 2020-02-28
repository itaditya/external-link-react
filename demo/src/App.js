import React from 'react';

import { useExternalLink } from './useExternalLink.js';

import './App.css';

const options = {
  newTab: true,
  debug: true,
};

function App() {
  const { handleLinkOpen, handleConfirm } = useExternalLink(
    handleAskUser,
    options
  );

  function handleAskUser() {
    const userResponse = window.confirm(
      'This link will take you outside of CodeSandbox App'
    );
    handleConfirm(userResponse);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div onClick={handleLinkOpen}>
        <a href="https://hackerrank.com">HackerRank</a>
        <br />
        <a href="https://google.com">Google</a>
        <br />
        <a href="http://localhost:3000/">Our App</a>
      </div>
    </div>
  );
}

export default App;
