//  Edit location modal

import React from 'react';
import "../../../css/common.css";
import Icomoon from "../../../libraries/Icomoon";
import {CustomInput, ThemeButton} from "../../../common/Components";
import Modal from 'react-bootstrap/Modal'
import LoadingBar from 'react-top-loading-bar';
import ToastMessage from '../../../common/ToastMessage';

class EditLocation extends React.Component{
    state={
        location:'26, 1 rajaji nagar main road 14th main, bangalore-560034',
        editLocationModal:false,
        progress:'',
        toastSuccessMessage:false
    }
    render(){
        return (
            <>
                <LoadingBar
                    color='#002173'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({progress:100})}
                />
                <Icomoon className="fontColor pointer" icon="edit" size={20} onClick={()=>this.setState({editLocationModal:true})}/>
                {this.renderEditLocation()}
            </>
        )
    }

    renderEditLocation() {
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.editLocationModal}
            >    
                
                <div className="m-3">
                    <div className="d-flex justify-content-between">
                        <h3 className="fontStyle fontColor pl-3">Edit Location</h3>
                        <Icomoon icon="close" size={20} className="pointer activeFontColor" onClick={()=>{this.setState({editLocationModal:false})}}/>
                    </div>
                    <Modal.Body>
                        <form onSubmit={this.onSubmitEditLocation}>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Location*" 
                                    value={this.state.location}
                                    onChange={(e)=>this.setState({location:e.target.value})}
                                    multiline
                                    rows={4}
                                />
                            </div>
                            <div className="d-flex justify-content-center">
                                <ToastMessage 
                                    toastMessagePop={this.state.toastSuccessMessage}
                                    message="Location updated successfully"
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
    // onsubmit function for edit profile input
    onSubmitEditLocation = (e) =>{
        e.preventDefault();
        this.setState({progress:100, toastSuccessMessage:true})
    }
}


export default EditLocation





  

