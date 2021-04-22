// Create lead modal

import React from 'react';
import "../../../css/common.css";
import {ThemeButton, CustomInput} from "../../../common/Components";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../../libraries/Icomoon';
import LoadingBar from 'react-top-loading-bar';

class CreateLead extends React.Component {
    state={
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        description:'',
        timeSlot:'',
        createLeadModal:false,
        progress:''
    }

    render() {
        return (
            <>
                <p className="smallText my-0" style={{cursor:'pointer'}} onClick={()=>{this.setState({createLeadModal:true})}}>Create Lead </p>    
                {this.renderCreateLeadModal()}
            </>
        )
    }

    // Render create lead modal function

    renderCreateLeadModal() {
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.createLeadModal}
            > 
                <LoadingBar
                    color='#002173'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({progress:100})}
                />    
                <div className="m-3">
                    <div className="d-flex justify-content-between">
                        <h3 className="fontStyle fontColor pl-3">Create Lead</h3>
                       <Icomoon icon="close" size={20} className="pointer activeFontColor" onClick={()=>{this.setState({createLeadModal:false})}}/>
                    </div>
                    <Modal.Body>
                        <form onSubmit={this.onSubmitCreateLead}>
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
                                    placeholder="Description*" 
                                    value={this.state.description}
                                    onChange={(e)=>this.setState({description:e.target.value})}
                                />
                            </div>
                            <div className="mt-3 row">
                                <p className="ml-3">Select Your Time Slot</p>
                                <div className="col-md-6">
                                    <CustomInput
                                        wapperClass="smallText"
                                        className="smallText"
                                        type="datetime-local"
                                        value={this.state.timeSlot}
                                        onChange={(e)=> this.setState({timeSlot:e.target.value})}
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

    // Handle change function for time slot
    timeSlotHandleChange = timeSlot => {
        this.setState({timeSlot, timeSlotErr:''});
    };


    // onsubmit function for create lead inputs

    onSubmitCreateLead= (e) =>{
        e.preventDefault();
        this.setState({progress:100})
    }
}
export default CreateLead;