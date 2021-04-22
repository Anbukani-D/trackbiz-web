// Add location modal

import React from 'react';
import "../../../css/common.css";
import {ThemeButton, CustomInput} from "../../../common/Components";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../../libraries/Icomoon';
import LoadingBar from 'react-top-loading-bar';

class AddLocation extends React.Component {
    state={
        locationId:'',
        locationName:'',
        locationAddress:'',
        addLocationModal:false,
        progress:''
    }

    render() {
        return (
            <>
                <p className="smallText my-0" style={{cursor:'pointer'}} onClick={()=>{this.setState({addLocationModal:true})}}>Add Location</p>    
                {this.renderAddLocationModal()}
            </>
        )
    }

    // Render add location modal function

    renderAddLocationModal() {
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.addLocationModal}
            >    
                <LoadingBar
                    color='#002173'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({progress:100})}
                /> 
                <div className="m-3">
                    <div className="d-flex justify-content-between">
                        <h3 className="fontStyle fontColor pl-3">Add Location</h3>
                        <Icomoon icon="close" size={20} className="pointer activeFontColor" onClick={()=>{this.setState({addLocationModal:false})}}/>
                    </div>
                    <Modal.Body>
                        <form onSubmit={this.onSubmitAddLocation}>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Location Id*" 
                                    value={this.state.locationId}
                                    onChange={(e)=>this.setState({locationId:e.target.value})}
                                />
                            </div>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Location Name*" 
                                    value={this.state.locationName}
                                    onChange={(e)=>this.setState({locationName:e.target.value})}
                                />
                            </div>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Location Address*" 
                                    value={this.state.locationAddress}
                                    onChange={(e)=>this.setState({locationAddress:e.target.value})}
                                />
                            </div>
                            <ThemeButton type="submit" wrapperClass="btn activeBgColor col-md-12 fontStyle mt-3 py-2 megaText fontColor" label="SAVE" />
                        </form> 
                    </Modal.Body>
                </div>
            </Modal>  
        )    
    } 


    // onsubmit function for add location inputs

    onSubmitAddLocation = (e) =>{
        e.preventDefault();
        this.setState({progress:100})
    }
}
export default AddLocation;