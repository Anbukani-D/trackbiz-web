// Add customer modal

import React from 'react';
import "../../../css/common.css";
import {ThemeButton, CustomInput} from "../../../common/Components";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../../libraries/Icomoon';
import LoadingBar from 'react-top-loading-bar';
import ToastMessage from '../../../common/ToastMessage';

class AddCustomer extends React.Component {
    state={
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        company:'',
        gstin:'',
        location:'',
        addCustomerModal:false,
        progress:'',
        toastSuccessMessage:false
    }

    render() {
        return (
            <>
                <p className="smallText my-0 pointer" onClick={()=>{this.setState({addCustomerModal:true})}}>Add Customer</p>    
                {this.renderAddCustomerModal()}
            </>
        )
    }

    // Render Add customer modal function

    renderAddCustomerModal() {
        return(
            <>
                <Modal
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.addCustomerModal}
                >   
                <LoadingBar
                    color='#002173'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({progress:100})}
                /> 
                <div className="m-3">
                    <div className="d-flex justify-content-between">
                        <h3 className="fontStyle fontColor pl-3">Add Customer</h3>
                       <Icomoon icon="close" size={20} className="pointer activeFontColor" onClick={()=>{this.setState({addCustomerModal:false})}}/>
                    </div>
                    <Modal.Body>
                        <form onSubmit={this.onSubmitAddCustomer}>
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
                                    placeholder="Contact No.*" 
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
                                    placeholder="GSTIN" 
                                    value={this.state.gstin}
                                    onChange={(e)=>this.setState({gstin:e.target.value})}
                                />
                            </div>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Location*" 
                                    value={this.state.location}
                                    onChange={(e)=>this.setState({location:e.target.value})}
                                />
                            </div>
                            <div className="d-flex justify-content-center">
                                <ToastMessage 
                                    toastMessagePop={this.state.toastSuccessMessage}
                                    message="Customer added successfully"
                                    handleClose={()=> this.setState({ toastSuccessMessage: false })}
                                />
                            </div>
                            <ThemeButton 
                                type="submit" 
                                wrapperClass="btn activeBgColor col-md-12 fontStyle mt-3 py-2 megaText fontColor" 
                                label="SAVE" 
                            />
                        </form> 
                    </Modal.Body>
                </div>
            </Modal> 
            </> 
        )    
    } 

    // Handle change function for time slot
    timeSlotHandleChange = timeSlot => {
        this.setState({timeSlot, timeSlotErr:''});
    };


    //onsubmit function for add customer inputs
    onSubmitAddCustomer= (e) =>{
        e.preventDefault();
        this.setState({progress:100, toastSuccessMessage:true})
    }
}
export default AddCustomer;
