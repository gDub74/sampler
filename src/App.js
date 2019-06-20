import React from 'react';
import {Grid} from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <h1>Kick It!</h1>
      </Grid>
    </div>
  );
}

export default App;
