// Create category modal

import React from 'react';
import "../../../css/common.css";
import {ThemeButton, CustomInput, CustomSelect} from "../../../common/Components";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../../libraries/Icomoon';
import {masterCategoryOptions} from '../../../common/DropdownList';
import LoadingBar from 'react-top-loading-bar';

class CreateCategory extends React.Component {
    state={
        categoryName:'',
        masterCategory:'',
        location:'',
        createCategoryModal:false,
        progress:''
    }

    render() {
        return (
            <>
                <p className="smallText my-0 pointer" onClick={()=>{this.setState({createCategoryModal:true})}}>Create Category</p>    
                {this.renderCreateCategoryModal()}
            </>
        )
    }

    // Render create category modal function

    renderCreateCategoryModal() {
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.createCategoryModal}
            >    
                <LoadingBar
                    color='#002173'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({progress:100})}
                /> 
                <div className="m-3">
                    <div className="d-flex justify-content-between">
                        <h3 className="fontStyle fontColor pl-3">Create Category</h3>
                       <Icomoon icon="close" className="pointer activeFontColor" size={20} onClick={()=>{this.setState({createCategoryModal:false})}}/>
                    </div>
                    <Modal.Body>
                        <form onSubmit={this.onSubmitCreateCategory}>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Category Name*" 
                                    value={this.state.categoryName}
                                    onChange={(e)=>this.setState({categoryName:e.target.value})}
                                />
                            </div>
                            <div className="mt-3">
                                <CustomSelect
                                    placeholder="Master Category*" 
                                    value={this.state.masterCategory}
                                    // value={Object.keys(this.state.masterCategory).length === 0 ? '' : this.state.masterCategory, console.log('master log', this.state.masterCategory)}
                                    onChange={this.masterCategoryHandleChange}
                                    options={masterCategoryOptions}
                                />
                            </div>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Loaction*" 
                                    value={this.state.location}
                                    onChange={(e)=>this.setState({location:e.target.value})}
                                />
                            </div>
                            <ThemeButton type="submit" wrapperClass="btn activeBgColor col-md-12 fontStyle mt-3 py-2 megaText fontColor" label="SAVE"/>
                        </form> 
                    </Modal.Body>
                </div>
            </Modal>  
        )    
    } 

    // Handle function for master category handle change
    masterCategoryHandleChange = masterCategory => {
		this.setState({ masterCategory, masterCategoryErr: '' });
    }


    // onsubmit function for create category inputs

    onSubmitCreateCategory= (e) =>{
        e.preventDefault();
        this.setState({progress:100})
    }
}
export default CreateCategory;