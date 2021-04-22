// Create User Modal

import React from 'react';
import "../../../css/common.css";
import {ThemeButton, CustomInput} from "../../../common/Components";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../../libraries/Icomoon';
import moment from 'moment'
import LoadingBar from 'react-top-loading-bar';

class CreateUser extends React.Component {
    state={
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        company:'',
        designation:'',
        dob:'',
        doj:'',
        createUserModal:false,
        progress:''
    }

    render() {
        return (
            <>
                <p className="smallText my-0" style={{cursor:'pointer'}} onClick={()=>{this.setState({createUserModal:true})}}>Create User</p>    
                {this.renderCreateUserModal()}
            </>
        )
    }

    // Render user create modal function

    renderCreateUserModal() {
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.createUserModal}
            > 
                <LoadingBar
                    color='#002173'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({progress:100})}
                />    
                <div className="m-3">
                    <div className="d-flex justify-content-between">
                        <h3 className="fontStyle fontColor pl-3">Create User</h3>
                       <Icomoon icon="close" size={20} className="pointer activeFontColor" onClick={()=>{this.setState({createUserModal:false})}}/>
                    </div>
                    <Modal.Body>
                        <form onSubmit={this.onSubmitCreateUser}>
                            <div className="row">
                                <div className="col-md-6">
                                    <CustomInput  
                                        placeholder="First Name*" 
                                        value={this.state.firstName}
                                        onChange={(e)=>this.setState({firstName:e.target.value})}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <CustomInput  
                                        placeholder="Last Name*" 
                                        value={this.state.lastName}
                                        onChange={(e)=>this.setState({lastName:e.target.value})}
                                    
                                    />
                                </div>
                            </div>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Email*" 
                                    value={this.state.email}
                                    onChange={(e)=>this.setState({email:e.target.value})}
                                />
                            </div>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Phone Number*" 
                                    value={this.state.phoneNumber}
                                    onChange={(e)=>this.setState({phoneNumber:e.target.value})}
                                />
                            </div>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Company*" 
                                    value={this.state.company}
                                    onChange={(e)=>this.setState({company:e.target.value})}
                                />
                            </div>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Designation*" 
                                    value={this.state.designation}
                                    onChange={(e)=>this.setState({designation:e.target.value})}
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                <p className="smallText pb-0 mb-0 ml-2">Select Your DOB</p>
                                <CustomInput
                                    selected={this.state.dob}
                                    onChange={(value) => {
                                        this.setState({ dob: value });
                                    }}
                                    type="date"
                                    value={this.state.dob}
                                    // onChange={(e)=>this.setState({dob:e.target.value})}
                                    maxDate={moment("01/08/2020").format("DD/MM/YYYY")}
                                />
                            </div>
                            <div className="col-md-6">
                                <p className="smallText pb-0 mb-0 ml-2">Select Your DOJ</p>
                                <CustomInput
                                    selected={this.state.doj}
                                    onChange={(value) => {
                                        this.setState({ doj: value });
                                    }}
                                    type="date"
                                    value={this.state.doj}
                                    // onChange={(e)=>this.setState({doj:e.target.value})}
                                    maxDate={moment("01/08/2020").format("DD/MM/YYYY")}
                                />
                                </div>
                            </div>
                            <ThemeButton type="submit" wrapperClass="btn activeBgColor col-md-12 fontStyle mt-3 py-2 megaText fontColor" label="SAVE" />
                        </form> 
                    </Modal.Body>
                </div>
            </Modal>  
        )    
    } 

    // Handle change function for dob
    dobHandleChange = dob => {
        this.setState({dob, dobErr:''});
    };


    // onsubmit function for create user inputs

    onSubmitCreateUser= (e) =>{
        e.preventDefault();
        this.setState({progress:100})
    }
}
export default CreateUser;