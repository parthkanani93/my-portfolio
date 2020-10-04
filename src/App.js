import React from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import './App.css';
import Main from './Components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Parth Portfolio" scroll>
            <Navigation className="fixed-top">
                <Link to="/landing"><strong>Home</strong></Link>
                <a rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1CPAH_P5aEMXg0FRPvndkFijn5l8j1HURPMf2_Q9d-G8/edit?usp=sharing"><strong>Resume</strong></a>
                <Link to="/project"><strong>Project</strong></Link>
            
                <Link to="/contact"><strong>Contact</strong></Link>
            </Navigation>
        </Header>
        <Drawer title="Parth Portfolio">
            <Navigation>
                 <Link to="/landing"><strong>Home</strong></Link>
                 <a rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1CPAH_P5aEMXg0FRPvndkFijn5l8j1HURPMf2_Q9d-G8/edit?usp=sharing"><strong>Resume</strong></a>
                <Link to="/project"><strong>Project</strong></Link>
          
                <Link to="/contact"><strong>Contact</strong></Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
           

        </Content>
    </Layout>
</div>
    </div>
  );
}

export default App;
