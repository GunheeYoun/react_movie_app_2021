import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import Potato from './Potato'

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Potato />   */}
    {/* 이전엔 component 2개이상 rendering하려하면 에러나서
     App안에서 Potato 부르거나하게 선언해서 사용해야했었음 */}
  </React.StrictMode>,
  document.getElementById('root')
);
  

