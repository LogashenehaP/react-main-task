import React from "react";

import RouterComponent from './components/common/Router/Router';
import { Context } from './components/hooks/context';
const App: React.FC = () => {
  return (
    <div className="App">
    <Context>
    <RouterComponent/>
    </Context>
    </div>
  );
};

export default App;
