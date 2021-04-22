// Login Page

import React from 'react';
import "../css/common.css";
import Logo from "../assets/images/tracbizvLogo.svg";
import LoginImg from "../assets/images/login.svg";
import {CustomInput, ThemeButton} from "../common/Components";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LoadingBar from 'react-top-loading-bar';

class Login extends React.Component {
    state={
        userName:'',
        password:'',
        userNameErr:'',
        showPassword:true,
        progress:''
    }

    render() {
        return (     
            <Container fluid noGutters md>
                <LoadingBar
                    color='#002173'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({progress:100})}
                />  
                <Row>
                    <Col sm={6} md={4}>
                        {this.renderLogin()}
                    </Col>
                    <Col sm={12} md={8} className="activeBgColor position-relative">
                        {/* <div style={{ backgroundImage: `url(${LoginImg})`, height:900} } >
                        </div>    */}
                        {this.renderLoginImage()}
                        <Row  className="d-flex justify-content-end">
                            <Col xs={6} md={4} className="position-absolute loginImgTextOverlap pr-5" >
                                <p className="text-white smallText text-justify">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>             
        )
    }

    // Render login Image function
    renderLoginImage () {
        return(
            <>
                <img className="my-5"  alt="Login" src={LoginImg} width="100%" height="693" />
            </> 
        )
    }

    // Render login function

    renderLogin() {
        return(
            <Container>
                <form onSubmit={this.onSubmitLogin}>
                    <Row className="pt-5 my-5">  
                        <img alt="Logo" src={Logo} width="50%" height="100" />
                    </Row>
                    <Row className="pl-3">
                        <h4 className="fontColor bigText">Welcome</h4>
                    </Row>
                    <Row className="pl-3">
                        <p className="smallText">Please enter your login details.</p>  
                    </Row>
                    <Row className="px-2">
                        <CustomInput  
                            placeholder="Email" 
                            fieldStyle="outlined"
                            value={this.state.userName}
                            onChange={(e)=>this.setState({userName:e.target.value})}
                            iconName="email"
                            iconSize={30}
                            error
                        />
                    </Row>
                    <Row className="px-2">
                        <CustomInput
                            placeholder="Password"
                            fieldStyle="outlined"
                            value={this.state.password}
                            onChange={(e)=>this.setState({password:e.target.value})}
                            type={this.state.showPassword ? 'text' : 'password'}
                            iconName = {this.state.showPassword ? 'eyeslash':"eye"}
                            iconSize={30}
                            onClick={()=>this.setState({
                                showPassword: !this.state
                                    .showPassword
                            })}
                        />
                    </Row>   
                    <Row className="pl-3 py-3">
                        <Link className="text-decoration-none smallText text-dark" to="/forgot-password"> Forgot Password? </Link>
                    </Row>
                    <Row className="pl-3"> 
                        <ThemeButton type="submit" wrapperClass="btn activeBgColor col-md-12 fontStyle font-weight-bold megaText mt-3 fontColor py-3" label="LOGIN"/>
                    </Row>
                    <p className="smallText text-justify pt-5">
                        <span className="font-weight-bold">WARNING:</span> 
                            This application is available only for authorized users of 'TrackBiz'. 
                            If you are not an authorized user, Please disconnect the session by closing the browser immediately. 
                            By accessing this system, you agree that your actions may be monitored if unauthorized user is suspected.  
                    </p>
                </form>
            </Container> 
        )
    }
    
    // onsubmit function for login inputs

    onSubmitLogin = (e) =>{
        e.preventDefault();
        this.setState({progress:100})
        this.props.history.replace("/dashboard");         
    }
}




export default Login