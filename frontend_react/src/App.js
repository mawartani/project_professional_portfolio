import React from 'react';

import './App.scss';

const App = () => (
  <div className="app">
<small>You are running this application in <b>{process.env.REACT_APP_SANITY_PROJECT_ID}</b> mode.</small>
  </div>
);

export default App;
