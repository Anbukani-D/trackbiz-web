// Add vehicle modal

import React from 'react';
import "../../../css/common.css";
import {ThemeButton, CustomInput} from "../../../common/Components";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../../libraries/Icomoon';
import LoadingBar from 'react-top-loading-bar';
import ToastMessage from '../../../common/ToastMessage';

class AddVehicle extends React.Component {
    state={
        driverName:'',
        vehicleName:'',
        vehicleNo:'',
        licenceNo:'',
        insuranceExpiryDate:'',
        contactNumber:'',
        addVehicleModal:false,
        progress:'',
        toastSuccessMessage:false

    }

    render() {
        return (
            <>
                <p className="smallText my-0" style={{cursor:'pointer'}} onClick={()=>{this.setState({addVehicleModal:true})}}>Add Vehicle</p>    
                {this.renderAddVehicleModal()}
            </>
        )
    }

    // Render add vehicle modal function

    renderAddVehicleModal() {
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.addVehicleModal}
            >  
                <LoadingBar
                    color='#002173'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({progress:100})}
                />   
                <div className="m-3">
                    <div className="d-flex justify-content-between">
                        <h3 className="fontStyle fontColor pl-3">Add Vehicle</h3>
                       <Icomoon icon="close" size={20} className="pointer activeFontColor" onClick={()=>{this.setState({addVehicleModal:false})}}/>
                    </div>
                    <Modal.Body>
                        <form onSubmit={this.onSubmitAddVehicle}>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Driver Name*" 
                                    value={this.state.driverName}
                                    onChange={(e)=>this.setState({driverName:e.target.value})}
                                />
                            </div>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Vehicle Name*" 
                                    value={this.state.vehicleName}
                                    onChange={(e)=>this.setState({vehicleName:e.target.value})} 
                                />
                            </div>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Vehicle No.*" 
                                    value={this.state.vehicleNo}
                                    onChange={(e)=>this.setState({vehicleNo:e.target.value})}
                                />
                            </div>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Licence No.*" 
                                    value={this.state.licenceNo}
                                    onChange={(e)=>this.setState({licenceNo:e.target.value})}
                                />
                            </div>
                            <div className="mt-3">
                                <p className="pb-0 mb-0 ml-2">Insurance Expiry Date*</p>
                                <CustomInput
                                    value={this.state.insuranceExpiryDate}
                                    onChange={(e)=>this.setState({insuranceExpiryDate:e.target.value})}
                                    type="date"
                                />
                            </div>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Contact Number" 
                                    value={this.state.contactNumber}
                                    onChange={(e)=>this.setState({contactNumber:e.target.value})}
                                />   
                            </div>  
                            <div className="d-flex justify-content-center">
                                <ToastMessage 
                                    toastMessagePop={this.state.toastSuccessMessage}
                                    message="Vehicle data added successfully"
                                    handleClose={()=> this.setState({ toastSuccessMessage: false })}
                                />
                            </div>                        
                            <ThemeButton type="submit" wrapperClass="btn activeBgColor col-md-12 fontStyle mt-3 py-2 megaText fontColor" label="SAVE" />
                        </form> 
                    </Modal.Body>
                </div>
            </Modal>  
        )    
    } 

    // Handle change function for insurance expiry date
    
    insuranceExpiryDateHandleChange = insuranceExpiryDate => {
        this.setState({insuranceExpiryDate, insuranceExpiryDateErr:''});
    };

    // onsubmit function for add vehicle inputs

    onSubmitAddVehicle= (e) =>{
        e.preventDefault();
        this.setState({progress:100, toastSuccessMessage:true})
    }
}
export default AddVehicle;