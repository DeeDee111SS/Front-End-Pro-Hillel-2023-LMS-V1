import React from 'react';
// import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import BaseTemplate from './templates/BaseTemplate';

// import Dashboard from './components/Dashboard';

function App() {  
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <BaseTemplate />
          {/* <Dashboard title={'Dashboard'}/> */}
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;