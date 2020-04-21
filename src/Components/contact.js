import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {

    render() {
        return (

            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Parth Kanani</h2>
                        <img
                            src="https://lh3.googleusercontent.com/XFyO-WsPKejR4rK9BjvED1fCY-YEpyPArgr9JA1F6X5-hHzY-rcJ1OYQU5lzDvIagUDpJcb0Uc1tyKN4UkIsmV0Byw18IdAEj8LAqImDaXoiDu6xEqJ-HjLbvefS78AKXZ5e5Unh_J65sCNUFFUU1DXqNIHDof0k_LfrQ0av9ZZ3uqdH9rdsPnpaBQwNLWWSwBJugKf7WvT77jHXyNYYR1k_7JWhjlXizW4V4cWK0d03ljClA0SmdMHUgV6QSGNJ_volOkaPZ1YOnHzZ11LBOxBA1BQo-LxljMs_thnp4MTe2YoipFBpElqkTIaLeNWjztXVLvnUI8OsVgHpoiRZKjOv9YqXTqeg9GmsFtOFKye-8IAPucEomTXQO3lU4qad9tN53EgEyNu_frM9YIuhTuIOErAqINI_nyDt3HELAmDcThYDXF5zmo0xE5ImlU1wlexaLhjDQya5D070m5864z3-uz7dzxk1ZbWA18X88RBY4oADOgwc4_4dhc6P8XRBmkaFWSvz7TOHMa4AKS19jCrHVK8ZkWwjaoJ_RfAoSk9ppLBn2PNFHQVBu3WL4dJeIRNwsq71F0XLH6ZakDKUcPPZ7wR-2YTPLr7oStcH8UFhyXuH5kMHXA2ojK5sNk6Li6AsZ4s7YFKnhv76J-aWW8TsLyRY_k9y-t7AsErXeHIphsg0MNzgkg6By50bGk8=w698-h657-no"
                            alt="avatar"
                            style={{ height: '250px',borderRadius : "50px" }} />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>hello i am parth kanani currently purching
                        computer science and engineering course at the college of R.N.G.Patel Institute of Technology,Bardoli,surat
                    .Currently I am Working On Full Stack Development in Java Script </p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize : '25px', fontFamily: 'Anton' }}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>  (+91) 70461-13670</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize : '25px', fontFamily: 'Anton' }}>
                                    <i className="fa fa-envelope-square" aria-hidden="true"/>  parthkanani8490@gmail.com</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize : '25px', fontFamily: 'Anton' }}>
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>parth-kanani-1251a3162</ListItemContent>
                                </ListItem>
                            </List>
                        </div>






                    </Cell>

                </Grid>

            </div>
        );
    }
}

export default Contact;