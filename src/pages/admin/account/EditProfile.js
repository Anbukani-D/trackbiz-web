// Profile popup

import React from 'react';
import "../../../css/common.css";
import Icomoon from "../../../libraries/Icomoon";
import {CustomInput, ThemeButton} from "../../../common/Components";
import Avtar from "../../../assets/images/avtar.png"
import Avatar from '@material-ui/core/Avatar';
import Modal from 'react-bootstrap/Modal'
import LoadingBar from 'react-top-loading-bar'
import ToastMessage from '../../../common/ToastMessage';

class EditProfile extends React.Component{
    state={
        name:'Jennifer',
        email:'jeni@gmail.com',
        contactNumber:'+91 9887654321',
        company:'Kp Digiteers',
        editProfileModal:false,
        progress:'',
        imagePreviewUrl:'',
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
                <Icomoon className="fontColor pointer" icon="edit" size={20} onClick={()=>this.setState({editProfileModal:true})}/>
                {this.renderEditProfile()}
            </>
        )
    }

    renderEditProfile() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = (<Avatar alt="Avtar" className="rounded" src={Avtar}  />);
        if (imagePreviewUrl) {
            $imagePreview = (<Avatar alt="Avtar" className="rounded" src={imagePreviewUrl}  />);
        }
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.editProfileModal}
            >    
                <div className="m-3">
                    <div className="d-flex justify-content-between">
                        <h3 className="fontStyle fontColor pl-3">Edit Profile</h3>
                        <Icomoon icon="close" size={20} className="pointer activeFontColor" onClick={()=>{this.setState({editProfileModal:false})}}/>
                    </div>
                    <Modal.Body>
                        <form onSubmit={this.onSubmitEditProfile}>
                            <div className="mt-3">
                                <div className="d-flex justify-content-start">
                                    {$imagePreview}
                                    <input
                                        type="file"
                                        ref={(ref) => this.upload = ref}
                                        id="uploadimage"
                                        accept=".jpg,.jpeg,.png"
                                        style={{display: 'none'}}
                                        onChange={(e)=>this._handleImageChange(e)}
                                    />
                                    <Icomoon icon="edit" className="ml-2"  color="#DF5A14" size={20} type="button" onClick={this.handleFileSelect}/> 
                                </div>
                            </div>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Name*" 
                                    value={this.state.name}
                                    onChange={(e)=>this.setState({name:e.target.value})}
                                />
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
                                    value={this.state.contactNumber}
                                    onChange={(e)=>this.setState({contactNumber:e.target.value})}
                                />
                            </div>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Company*" 
                                    value={this.state.company}
                                    onChange={(e)=>this.setState({company:e.target.value})}
                                />
                            </div>
                            <div className="d-flex justify-content-center">
                                <ToastMessage 
                                    toastMessagePop={this.state.toastSuccessMessage}
                                    message="User Updated successfully"
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
    // onclick Profile pic Selected
    handleFileSelect = (e) => {
        e.preventDefault();
        const fileSelector = document.getElementById('uploadimage');
        fileSelector.click();
    }
    /* 
     Preview Image Profile and call Api
    */
   _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
        this.setState({
            file: file,
            imagePreviewUrl: reader.result
        });
        }
        reader.readAsDataURL(file)
    }
    // onsubmit function for edit profile input
    onSubmitEditProfile = (e) =>{
        e.preventDefault();
        this.setState({progress:100, toastSuccessMessage:true})
    }
}


export default EditProfile





  

