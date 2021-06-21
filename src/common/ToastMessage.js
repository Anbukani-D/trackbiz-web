import React from "react";
import Toast from 'react-bootstrap/Toast';
import '../css/common.css';

class ToastMessage extends React.Component{
    render(){
        return (
            <div className="borderStyle borderColor">
                <Toast onClose={() => this.props.handleClose()}  show={this.props.toastMessagePop} delay={3000} autohide>
                    <Toast.Body className="text-success normalText"> {this.props.message}</Toast.Body>
                </Toast>
            </div>
        );
    }
}
export default ToastMessage