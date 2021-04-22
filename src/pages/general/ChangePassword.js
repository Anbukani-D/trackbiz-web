// Change password Modal

import React from 'react';
import "../../css/common.css";
import {ThemeButton, CustomInput, Layout, NotificationIcon } from "../../common/Components";
import Modal from 'react-bootstrap/Modal'
import LoadingBar from 'react-top-loading-bar';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Icomoon from "../../libraries/Icomoon";
import CompanyLogo from '../../assets/images/company.svg';
import Profile from '../../pages/general/Profile';
import Settings from "../../pages/general/Settings";
import Popover from "react-bootstrap/Popover";

const settingPopover = (
    <Popover id="popover-setting">
        <Settings/>
    </Popover>
);

class ChangePassword extends React.Component {
    state={
        oldPassword:'',
        password:'',
        confirmPassword:'',
        showOldPassword:true,
        showPassword:true,
        showConfirmPassword:true,
        changePasswordModal:false,
        progress:'',
    }

    render() {
        return (
            <Layout>
                <LoadingBar
                    color='#002173'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({progress:100})}
                /> 
                 <div className="col-md-11" id="content">
                    <Navbar expand="lg" className="flex-grow-1 py-0">
                        <Nav className="menuItems flex-row flex-grow-1">
                            <Nav.Link className="mr-2">
                                <img src={CompanyLogo} alt={CompanyLogo} width='40' height='40'/>
                            </Nav.Link>
                            <div className="activeFontColor col-md-11 smallText"><p className="text-left m-0 p-0">{this.state.companyName ? this.state.companyName:'Dezign Code'}</p>
                            </div>
                            <Nav.Link className="mr-2">
                                <NotificationIcon/>
                            </Nav.Link>
                            <Nav.Link className="mr-2">
                                <OverlayTrigger trigger="click" placement="bottom-end" overlay={settingPopover} id="popover-setting">
                                    <Icomoon icon="gear" color="#002173" size={22} className="align-self-center"/>
                                </OverlayTrigger>
                            </Nav.Link>
                            <Nav.Link className="mr-2">
                                <Profile/>
                            </Nav.Link>
                        </Nav>
                    </Navbar>
                </div>
                {this.renderChangePasswordModal()}
            </Layout>
        )
    }

    // Render change password modal function

    renderChangePasswordModal() {
        return(
            <div className="d-flex justify-content-center mt-5 pt-5">
                <div className="col-md-5 bg-white borderRadius py-3"> 
                    <div className="m-3">
                        <div className="d-flex justify-content-between">
                            <h3 className="fontColor pl-3">Change Password</h3>
                        </div>
                        <Modal.Body>
                            <form onSubmit={this.onSubmitChangePassword}>
                                <div className="mt-3">
                                    <CustomInput  
                                        placeholder="Old Password*"
                                        value={this.state.oldPassword}
                                        onChange={(e)=>this.setState({oldPassword:e.target.value})}
                                        type={this.state.showOldPassword ? 'text' : 'oldPassword'}
                                        iconName = {this.state.showOldPassword ? 'eyeslash':"eye"}
                                        iconSize={30}
                                        onClick={()=>this.setState({
                                            showOldPassword: !this.state
                                                .showOldPassword
                                        })}
                                    />
                                </div>
                                <div className="mt-3">
                                    <CustomInput  
                                        placeholder="Password*"
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
                                </div>
                                <div className="mt-3">
                                    <CustomInput  
                                        placeholder="Confirm Password*"
                                        value={this.state.confirmPassword}
                                        onChange={(e)=>this.setState({confirmPassword:e.target.value})}
                                        type={this.state.showConfirmPassword ? 'text' : 'confirmPassword'}
                                        iconName = {this.state.showConfirmPassword ? 'eyeslash':"eye"}
                                        iconSize={30}
                                        onClick={()=>this.setState({
                                            showConfirmPassword: !this.state
                                                .showConfirmPassword
                                        })}
                                    />
                                </div>
                                <ThemeButton type="submit" wrapperClass="btn activeBgColor col-md-12 fontStyle mt-3 py-2 megaText fontColor" label="SAVE" />
                            </form> 
                        </Modal.Body>
                    </div>
                </div>  
            </div>
        )    
    } 

    
    
    // onsubmit function for change password inputs

    onSubmitChangePassword = (e) =>{
        e.preventDefault();
        this.setState({progress:100})
        // const allValidation = this.ValidateAllInputs()
        // if (allValidation) {
        //     alert('Password Changed Successfully! ')
        // } 
    }
}
export default ChangePassword;
