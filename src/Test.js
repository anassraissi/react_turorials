import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";

const HomePage = ()=><div>Home</div>
const AboutPage = ()=><div>About</div>

class Test extends Component {
  render() {
    return (
                    <BrowserRouter>
                            <div className="App">
                            <Link to="/">Home</Link> {" "}
                            <Link to="/About">About</Link> 
                            <Routes>
                            <Route path="/" exact  component={HomePage} />
                            <Route path="/About" component={AboutPage} />
                            </Routes>
                            </div>
                        </BrowserRouter>
     
    );
  }
}

export default Test;
