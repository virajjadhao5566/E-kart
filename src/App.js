import React from 'react';
import Products from './components/products/products';
import SubHeader from './components/layout/SubHeader';
import Header from './components/layout/Header'
function App() {
  return (
    <div className="App">
      <Header/>
      <SubHeader/>
      <Products/>
    </div>
  );
}

export default App;
