import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Particles from 'react-particles-js';


const particalopts ={
    
        particles: {
            number :{
                value :200,
                density :{
                    enable :true,
                    value_area :800
                }
            }
           
        }
    
    
}

class Landing extends Component {

    

    render() {
        return (

            <div style={{ width: "100%", margin: 'auto' }}>
                <Grid className="landing-grid">

                    <Cell col={12}>

                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_yhvGXHtP8leB8fhWCAOke-8h5gRG1Wxo6fS814OFjX_g1qOl"
                            alt="avtar"
                            className="avtar-img" 
                            style={{borderTopLeftRadius : "35px"}}/>

                        <Particles
                            className="particles"
                            params={particalopts}
                          
                        />

                        <div className="banner-txt">
                            <h1>FullStack Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | javascript | Bootstrap | React js</p>
                            <div className="social-link">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/parth-kanani-1251a3162/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/parthkanani93" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Freecodecamp */}
                                <a href="https://www.freecodecamp.org/fcca7cbe2ba-2ff2-4526-adb1-ad4af885b3a5" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>

                                {/* Youtube */}
                                <a href="https://www.youtube.com/channel/UCBrDcz0xqq4z1JEtfKRR0BA/featured?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>

                            </div>

                        </div>
                    </Cell>

                </Grid>
                <Particles
                    params={{
                        polygon: {
                            enable: true,
                            type: 'inside',
                            move: {
                                radius: 10
                            },
                            url: 'path/to/svg.svg'
                        }
                    }} />

            </div>

        );
    }
}

export default Landing;