/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/chat/:person">
              <Header backButton="/chat" />
              <ChatScreen />
            </Route>
            <Route path="/">
              <Header />
              <TinderCards />
              <SwipeButtons />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
