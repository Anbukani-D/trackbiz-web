// Add Fields modal

import React from 'react';
import "../../../css/common.css";
import {ThemeButton, CustomInput} from "../../../common/Components";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../../libraries/Icomoon';

class AddField extends React.Component {
    state={
        fieldName:'',
        createAddFieldPopup:false
    }

    render() {
        return (
            <>
                <div className="d-flex align-items-center">
                    <Icomoon icon="addField" className="align-self-center mx-3 pointer" size={25} onClick={()=>{this.setState({createAddFieldPopup:true})}} />
                    <span className="smallText pointer" onClick={()=>{this.setState({createAddFieldPopup:true})}}>Add Field</span>
                </div>
                {this.renderAddFields()}
            </>
        )
    }

    // Render Add Field pop Up function

    renderAddFields() {
        return(
            <Modal
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                show={this.state.createAddFieldPopup}
            >    
                <div className="m-3">
                    <div className="d-flex justify-content-between">
                        <h3 className="fontStyle fontColor pl-3">Add Field</h3>
                       <Icomoon icon="close" size={20} className="pointer activeFontColor" onClick={()=>{this.setState({createAddFieldPopup:false})}}/>
                    </div>
                    <Modal.Body>
                        <form onSubmit={this.onSubmitAddField}>
                            <CustomInput  
                                placeholder="Field Name*" 
                                value={this.state.fieldName}
                                onChange={(e)=>this.setState({fieldName:e.target.value})}
                            />
                            <ThemeButton type="submit" wrapperClass="btn activeBgColor col-md-12 fontStyle mt-3 py-2 megaText fontColor" label="SAVE" />
                        </form> 
                    </Modal.Body>
                </div>
            </Modal>  
        )    
    } 


    // onsubmit function for Add field inputs

    onSubmitAddField= (e) =>{
        e.preventDefault();
    }
}
export default AddField;