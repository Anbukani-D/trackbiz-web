// Message Modal

import React from 'react';
import "../../css/common.css";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../libraries/Icomoon';
import {CustomInput, ThemeButton} from '../../common/Components';
import Toast from 'react-bootstrap/Toast';

class Message extends React.Component {
    state={
        messageModal:false,
        message:'',
        successMessage:false
    }

    render() {
        return (
            <>
                <div className="mx-3">
                    <Icomoon icon="chat" size={22} className="activeFontColor pointer"  onClick={()=>{this.setState({messageModal:true})}}/>
                    <p className="xSmallText fontColor mb-0 pointer" onClick={()=>{this.setState({messageModal:true})}}>Message</p>
                </div>
                {this.renderMessageModal()}
            </>
        )
    }

    // Render Message modal function

    renderMessageModal() {
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.messageModal}
            >    
                <form onSubmit={this.onSubmitMessage}>
                    <div className="m-3">
                        <div className="d-flex justify-content-end">
                            <Icomoon icon="close" size={20} className="pointer activeFontColor" onClick={()=>{this.setState({messageModal:false})}}/>
                        </div>
                        <Modal.Body>
                            <CustomInput  
                                placeholder="Message*" 
                                fieldStyle="outlined"
                                multiline={6}
                                value={this.state.message}
                                onChange={(e)=>this.setState({message:e.target.value})}
                            />  
                            <div className="d-flex justify-content-center">
                                <Toast onClose={() => this.setState({successMessage:false})} show={this.state.successMessage} delay={3000} autohide>
                                    <Toast.Body className="text-success normalText">Message Sent Successfully!</Toast.Body>
                                </Toast>
                            </div>                        
                            <ThemeButton type="submit" wrapperClass="btn activeBgColor col-md-12 fontStyle mt-3 py-2 megaText fontColor" label="Send" />
                        </Modal.Body>
                    </div>
                </form>
            </Modal>  
        )    
    } 


    // onsubmit function for Message inputs

    onSubmitMessage= (e) =>{
        e.preventDefault();
        this.setState({successMessage:true})
    }
}
export default Message;