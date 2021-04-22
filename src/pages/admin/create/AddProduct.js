// Add product modal
import React from 'react';
import "../../../css/common.css";
import {ThemeButton, CustomInput, CustomSelect} from "../../../common/Components";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../../libraries/Icomoon';
import {brandOptions, categoryOptions,locationOptions } from '../../../common/DropdownList';
import LoadingBar from 'react-top-loading-bar';

class AddProduct extends React.Component {
    state={
        productName:'',
        productCode:'',
        brand:'',
        categoryName:'',
        location:'',
        quantity:'',
        addProductModal:false,
        progress:''
    }

    render() {
        return (
            <>
                <p className="smallText my-0" style={{cursor:'pointer'}} onClick={()=>{this.setState({addProductModal:true})}}>Add Product</p>    
                {this.renderAddProductModal()}
            </>
        )
    }

    // Render add Product modal function

    renderAddProductModal() {
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.addProductModal}
            >   
                <LoadingBar
                    color='#002173'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({progress:100})}
                />  
                <div className="m-3">
                    <div className="d-flex justify-content-between">
                        <h3 className="fontStyle fontColor pl-3">Add Product</h3>
                       <Icomoon icon="close" size={20} className="pointer activeFontColor" onClick={()=>{this.setState({addProductModal:false})}}/>
                    </div>
                    <Modal.Body>
                        <form onSubmit={this.onSubmitAddProduct}>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Product Name*" 
                                    value={this.state.productName}
                                    onChange={(e)=>this.setState({productName:e.target.value})}
                                />
                            </div>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Product Code*" 
                                    value={this.state.productCode}
                                    onChange={(e)=>this.setState({productCode:e.target.value})} 
                                />
                            </div>
                            <div className="mt-3">
                                <CustomSelect  
                                    placeholder="Brand*" 
                                    value={this.state.brand}
                                    onChange={(e)=>this.setState({brand:e.target.value})}
                                    options={brandOptions}
                                />
                            </div>
                            <div className="mt-3">
                                <CustomSelect
                                    placeholder="Category Name*" 
                                    value={this.state.categoryName}
                                    onChange={(e)=>this.setState({categoryName:e.target.value})}
                                    options={categoryOptions}
                                />
                            </div>
                            <div className="mt-3">
                                <CustomSelect 
                                    placeholder="Location" 
                                    value={this.state.location}
                                    onChange={(e)=>this.setState({location:e.target.value})}
                                    options={locationOptions}
                                />  
                            </div>
                            <div className="mt-3">
                                <CustomInput  
                                    type='number'
                                    placeholder="Quantity*" 
                                    value={this.state.quantity}
                                    onChange={(e)=>this.setState({quantity:e.target.value})}
                                />   
                            </div>                      
                            <ThemeButton type="submit" wrapperClass="btn activeBgColor col-md-12 fontStyle mt-3 py-2 megaText fontColor" label="SAVE" />
                        </form> 
                    </Modal.Body>
                </div>
            </Modal>  
        )    
    } 


    // onsubmit function for add product inputs

    onSubmitAddProduct= (e) =>{
        e.preventDefault();
        this.setState({progress:100})
    }
}
export default AddProduct;