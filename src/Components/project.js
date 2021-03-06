import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button } from 'react-mdl';
import res from '../img/res.png';
import por from '../img/por.png';
import mon from '../img/mon.png';
import Tour from '../img/Tour.png';
import Blog from '../img/Blog.png';
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activetab: 0
    }
  }

  toggleCategary() {
    if (this.state.activetab === 0) {
      return (

        <div className="projects-grid" style={{ width: '100%' }}>


          <Grid style={{ justifyContent: 'center' }}>
            {/* Project 1 */}
            <Cell phone={12} col={3}  >

              <Card shadow={5} >
                <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: `url(${res})`, backgroundSize: 'cover' }} >Confusion Restaurant</CardTitle>
                <CardText>
                  In this project i made a Restaurant single page website in which i create various section like home,menu,about,contact us
                  using routing i route from one page to another also using redux i store the state and update it.using redux thunk i also impliment loading.. Component
                  and client side add comment in dish detail and submit it.
            </CardText>
                <CardActions border>
                  <Button colored rel="noopener noreferrer" target="_blank" href="https://github.com/parthkanani93/react-course">GitHub</Button>
                  <Button colored rel="noopener noreferrer" target="_blank" href="https://confusion-restaurant-react.netlify.app/">Live Demo</Button>
                </CardActions>
                {/* <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu> */}
              </Card>




            </Cell>
            {/* Project 2 */}
            <Cell col={3} phone={12} >
              <Card shadow={5} style={{}}>
                <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: `url(${mon})`, backgroundSize: 'cover' }} >Monster Rolodex</CardTitle>
                <CardText>
                  It is simple project that featch data from api and generate a cards and also i add search feature to search monster in this project
            </CardText>
                <CardActions border>
                  <Button colored rel="noopener noreferrer" target="_blank" href="https://github.com/parthkanani93/monster-rolodex" >GitHub</Button>
                  <Button colored rel="noopener noreferrer" target="_blank" href="https://parthkanani93.github.io/monster-rolodex/">Live Demo</Button>
                </CardActions>
                {/* <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu> */}
              </Card>
            </Cell>


            {/* Project 3 */}
            <Cell col={3} phone={12} >
              <Card shadow={5} style={{}}>
                <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: `url(${por})`, backgroundSize: 'cover' }} >React Portfolio</CardTitle>
                <CardText>
                  In this react portfolio this is not another but currently you show at this time this is made by me.
            </CardText>
                <CardActions border>
                  <Button colored rel="noopener noreferrer" target="_blank" href="https://github.com/parthkanani93/my-portfolio" >GitHub</Button>
                  <Button colored rel="noopener noreferrer"  target="_blank" href="https://parth-portfolio.netlify.app/" >Live Demo</Button>
                </CardActions>
                {/* <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu> */}
              </Card>
            </Cell>

          </Grid>


          <Grid style={{ justifyContent: 'center' }}>
            {/* Project 4 */}
            <Cell phone={12} col={3}  >

              <Card shadow={5} >
                <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: `url(${Tour})`, backgroundSize: 'cover' }} >Tour</CardTitle>
                <CardText>
                A Tour website that tour you to famous places in world just from one click
            </CardText>
                <CardActions border>
                  <Button colored rel="noopener noreferrer" target="_blank" href="https://github.com/parthkanani93/Tour">GitHub</Button>
                  <Button colored rel="noopener noreferrer" target="_blank" href="https://world2r.netlify.app/">Live Demo</Button>
                </CardActions>
                {/* <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu> */}
              </Card>
            </Cell>

              {/* Project 5 */}
              <Cell phone={12} col={3}  >

              <Card shadow={5} >
                <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: `url(${Blog})`, backgroundSize: 'cover' }} >Blogpost</CardTitle>
                <CardText>
                A website using react that contains 1000 users data and his post and post details in react
            </CardText>
                <CardActions border>
                  <Button colored rel="noopener noreferrer" target="_blank" href="https://github.com/parthkanani93/blogpost-reactjs">GitHub</Button>
                  <Button colored rel="noopener noreferrer" target="_blank" href="https://blogpost-reactjs.netlify.app/">Live Demo</Button>
                </CardActions>
                {/* <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu> */}
              </Card>




            </Cell>



          </Grid>

        </div>
      );
    }
    else if (this.state.activetab === 1) {
      // return (<div><h1></h1> </div>);
    }
    else if (this.state.activetab === 2) {
      // return (<div><h1></h1> </div>);
    }

  }

  render() {
    return (

      <div className="categary-tabs">
        <Tabs activeTab={this.state.activetab} onChange={(tabid) => this.setState({ activetab: tabid })} ripple>
          <Tab>React</Tab>
          <Tab>Bootstrap</Tab>
          <Tab>Html/Css</Tab>
        </Tabs>


        <div className="content">
          {this.toggleCategary()}

        </div>






      </div>
    );
  }
}

export default Project;