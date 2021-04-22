// Create role modal

import React from 'react';
import "../../../css/common.css";
import {ThemeButton, CustomInput, CustomSelect} from "../../../common/Components";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../../libraries/Icomoon';
import {permissionOptions} from '../../../common/DropdownList';
import LoadingBar from 'react-top-loading-bar';

class CreateRole extends React.Component {
    state={
        role:'',
        permission:'',
        createRoleModal:false,
        progress:''
    }

    render() {
        return (
            <>
                <p className="smallText my-0" style={{cursor:'pointer'}} onClick={()=>{this.setState({createRoleModal:true})}}>Create Role </p>    
                {this.renderCreateRoleModal()}
            </>
        )
    }

    // Render create role & permission modal function

    renderCreateRoleModal() {
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.createRoleModal}
            > 
                <LoadingBar
                    color='#002173'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({progress:100})}
                />    
                <div className="m-3">
                    <div className="d-flex justify-content-between">
                        <h3 className="fontStyle fontColor pl-3">Create Role</h3>
                       <Icomoon icon="close" size={20} className="pointer activeFontColor" onClick={()=>{this.setState({createRoleModal:false})}}/>
                    </div>
                    <Modal.Body>
                        <form onSubmit={this.onSubmitCreateRole}>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Role Name*" 
                                    value={this.state.role}
                                    onChange={(e)=>this.setState({role:e.target.value})}
                                />
                            </div>
                            <div className="mt-3">
                                <CustomSelect
                                    placeholder="Permission*" 
                                    value={this.state.permission}
                                    onChange={(e)=>this.setState({permission:e.target.value})} 
                                    options={permissionOptions}
                                />
                            </div>
                            <ThemeButton type="submit" wrapperClass="btn activeBgColor col-md-12 fontStyle mt-3 py-2 megaText fontColor" label="SAVE" />
                        </form> 
                    </Modal.Body>
                </div>
            </Modal>  
        )    
    } 


    // onsubmit function for create Role inputs

    onSubmitCreateRole= (e) =>{
        e.preventDefault();
        this.setState({progress:100})
    }
}
export default CreateRole;