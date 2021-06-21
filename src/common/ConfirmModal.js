import React from "react";
import Modal from "react-bootstrap/Modal";
import Icomoon from '../libraries/Icomoon';
import '../css/common.css';
class ConfirmModal extends React.Component {
  render() {
    return (
        <Modal
            show={this.props.visible}
            onHide={() => this.props.handleClose(false)}
            dialogClassName="modal-100w"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    <div className="d-flex justify-content-center text-center">
                        <span className="mediumText themeActiveFont text-center">
                            {this.props.heading}
                        </span>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {this.props.delete && (
                    <div className="d-flex justify-content-center mt-5 mb-4">
                        <Icomoon icon="delete" size="40" color="black"/>
                    </div>
                )}
                <div className="d-flex justify-content-center mt-5 mb-4">
                    <p className="normalText" style={{ textAlign: "center" }}>
                        {this.props.title + "?"}
                    </p>
                </div>
                <div className="d-flex justify-content-center mt-5 mb-4">
                    <button
                        className="btn  activeBgColor text-white px-5"
                        onClick={() => this.props.onsubmitConfirm()}
                    >
                        {this.props.buttonTitle}
                    </button>
                        &nbsp;&nbsp;&nbsp;
                    <button
                        className="btn borderStyle px-5 fontColor"
                        onClick={() => this.props.handleClose(false)}
                    >
                        Cancel
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    );
  }
}

export default ConfirmModal;