// Call mopdal

import React from 'react';
import "../../css/common.css";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../libraries/Icomoon';

class Call extends React.Component {
    state={
        callModal:false
    }

    render() {
        return (
            <>
            <div className="mx-3">
                <Icomoon icon="telephone" size={22} className="activeFontColor pointer"  onClick={()=>{this.setState({callModal:true})}}/>
                <p className="xSmallText fontColor mb-0 pointer" onClick={()=>{this.setState({callModal:true})}}>Call</p>
            </div>
                {this.renderCallModal()}
            </>
        )
    }

    // Render call modal function

    renderCallModal() {
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.callModal}
            >    
                <div className="m-3">
                    <div className="d-flex justify-content-end">
                       <Icomoon icon="close" size={20} className="pointer activeFontColor" onClick={()=>{this.setState({callModal:false})}}/>
                    </div>
                    <Modal.Body>
                        <div className="d-flex justify-content-center my-3">
                            <Icomoon icon="telephone" size={30} className="pointer activeFontColor"/>
                        </div>
                        <p className="normalText text-center">Calling...</p>
                    </Modal.Body>
                </div>
            </Modal>  
        )    
    } 


    // onsubmit function for call inputs

    onSubmitCall= (e) =>{
        e.preventDefault();
    }
}
export default Call;