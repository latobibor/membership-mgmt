import React from 'react';
import './App.css';
import { Header } from './components/header/header';
import { AccessManagerContainer } from './components/access-manager-layout/access-manager-container';
import { createStoreProvider, initialState } from './store/store';
import { reducers } from './store/reducers';

const StoreProvider = createStoreProvider({ initialState, reducers });

function App() {
  return (
    <StoreProvider>
      <div className="App container">
        <Header />
        <AccessManagerContainer />
      </div>
    </StoreProvider>
  );
}

export default App;
