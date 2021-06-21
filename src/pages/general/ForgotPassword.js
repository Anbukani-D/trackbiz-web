  // Forgot password Page

import React from 'react';
import "../../css/common.css";
import Logo from "../../assets/images/tracbizvLogo.svg";
import ForgotImg from "../../assets/images/forgotPassword.svg";
import {CustomInput, ThemeButton} from "../../common/Components";
import Container from 'react-bootstrap/Container';
import ToastMessage from '../../common/ToastMessage';
import Row from 'react-bootstrap/Row';
import LoadingBar from 'react-top-loading-bar';
import Icomoon from '../../libraries/Icomoon';


class ForgotPassword extends React.Component {
    state={
        userName:'',
        progress:'',
        toastMessage:false
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
                    <div className="col-md-4">
                        {this.renderForgotPassword()}
                    </div>
                    <div className="activeBgColor position-relative col-md-8">
                        {/* <div style={{ backgroundImage: `url(${LoginImg})`, height:900} } >
                        </div>    */}
                        {this.renderForgotPasswordImage()}
                        <Row  className="d-flex justify-content-end">
                        </Row>
                    </div>
                    
                </Row>
            </Container>             
        )
    }

    // Render forgot password Image function

    renderForgotPasswordImage () {
        return(
            <div fluid noGutters md>
                <img className="my-5"  alt="Forgot" src={ForgotImg} width="100%" height="693" />
            </div> 
        )
    }

    // Render forgot password function

    renderForgotPassword() {
        return(
            <div>
                <form onSubmit={this.onSubmitForgotPassword}>
                    <Row className="pt-3 my-3">  
                        <Icomoon className="pointer fontColor"  icon="larrow" size={20} onClick={()=>this.props.history.goBack()}/>
                        <p className="normalText pl-2 font-weight-bold pointer fontColor" onClick={()=>this.props.history.goBack()}>Back</p>
                    </Row>
                    <Row className="pt-5 my-5">  
                        <img alt="Logo" src={Logo} width="50%" height="100" />
                    </Row>
                    <Row className="pl-3">
                        <h4 className="fontColor bigText">Oops!</h4>
                    </Row>
                    <Row className="pl-3">
                        <p className="smallText">Please enter your email id.</p>  
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
                    <div className="d-flex justify-content-center">
                        <ToastMessage 
                            toastMessagePop={this.state.toastMessage}
                            message="Please check your mail."
                            handleClose={()=> this.setState({ toastMessage: false })}
                        />
                    </div>
                    <div> 
                        <ThemeButton type="submit" wrapperClass="btn activeBgColor col-md-12 fontStyle font-weight-bold megaText mt-3 fontColor py-3" label="SEND ME NEW PASSWORD"/>
                    </div>
                    <p className="smallText text-justify pt-5">
                        <span className="font-weight-bold">WARNING:</span> 
                            This application is available only for authorized users of 'TrackBiz'. 
                            If you are not an authorized user, Please disconnect the session by closing the browser immediately. 
                            By accessing this system, you agree that your actions may be monitored if unauthorized user is suspected.  
                    </p>
                </form>
            </div> 
        )
    }
    
    // onsubmit function for forgot password inputs

    onSubmitForgotPassword = (e) =>{
        e.preventDefault();
        this.setState({progress:100, toastMessage:true})
        // this.props.history.replace("/login");         
    }
}

export default ForgotPassword
