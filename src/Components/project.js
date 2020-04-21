import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, CardMenu, Button, IconButton } from 'react-mdl';

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

                <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
            );
        }
        else if (this.state.activetab === 1) {
            return (<div><h1>Currently No Projects</h1> </div>);
        }
        else if (this.state.activetab === 2) {
            return (<div><h1>Currently No Projects</h1> </div>);
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
                
                    <Grid >
                        <Cell col={12} >
                            <div className="content">
                                {this.toggleCategary()}

                            </div>

                        </Cell>
                    </Grid>


                

            </div>
        );
    }
}

export default Project;