import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Page from "./components/Page/Page";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from 'react-router-dom';



const App = (props) => {

  return (

      <BrowserRouter>
        <div className='appWrapper'>

                <Header />
                <Page addPost={props.addPost} messages={props.state.messages} userData={props.state.userData} postData={props.state.postData}/>
        </div>
          </BrowserRouter>
  );
}


export default App;
