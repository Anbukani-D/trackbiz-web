// Product page

import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Icomoon from '../../../libraries/Icomoon';
import CreateInventoryButton from './CreateInventoryButton';
import addLead from "../../../assets/images/addLead.svg";
import DataTable from '../../../common/DataTable';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import modalImg from '../../../assets/images/modal.svg'
import Alert from "react-bootstrap/Alert";
import  { ThemeButton} from '../../../common/Components';
import ConfirmModal from '../../../common/ConfirmModal';
import ToastMessage from '../../../common/ToastMessage';

class Product extends React.Component {
    state={
        columnDataState:[],
        rowDataState:[],
        productData:[],

        // Toast message , edit , delete
        toastEditSuccess:false,
        toastDeleteSuccess:false,

        // Modal edit, delete msg
        editPopup:false,
        deleteModal:false,
    }

    componentDidMount () {
        const columnDataState = [
            {field: 'icon', headerName:
            <div>
                <OverlayTrigger trigger="focus" placement="right" overlay={this.popoverHeader()}>
                    <button className="button-none"><Icomoon className="pointer" icon="vmore" size={20} /></button>
                </OverlayTrigger>
            </div>,
            width:95,
            renderCell: (data) => (
                <div>
                    <OverlayTrigger trigger="focus" placement="right" overlay={this.popover(data.id)}>
                        <button className="button-none"><Icomoon className="pointer" icon="vmore" size={20}  /></button>
                    </OverlayTrigger>
                </div>
              ),
            },
            {field: 'productCode', headerName:'Product Code', width: 150 },
            {field: 'productName', headerName:'Product Name', width: 150 },
            {field: 'categoryName', headerName:'Category Name', width: 150 }, 
            {field: 'brand', headerName:'Brand', width: 150 }, 
            {field: 'quantity', headerName:'Quantity', width: 150 }, 
            {field: 'createDate' , headerName:'Create Date', width: 150},
            {field: 'lastModifiedDate', headerName:'Last Modified Date', width: 200}
        ]
    
        const rowDataState =[
            { 
                id: 1, 
                productCode:'WER12',
                productName:'Desk',
                categoryName:'Timber',
                brand:'Hanuman',
                quantity:'3',
                createDate:'20/12/2020',
                lastModifiedDate:'21/1/2021'
            },
            { 
                id: 2,
                productCode:'WER13',
                productName:'Chair', 
                categoryName:'Timber',
                brand:'Hanuman',
                quantity:'8',
                createDate:'20/12/2026',
                lastModifiedDate:'21/1/2021'
            }
        ]
        this.setState({columnDataState,rowDataState })
    }
    // Render Menu function for data table data 
    popover = () => {
        return(
            <Popover id="popover-basic" className="border-0 p-3" >
                <p className="my-1 pointer xSmallText" onClick={()=>this.setState({deleteModal:true})}>
                    <Icomoon className="mr-2" icon="delete" size={12} />
                    Delete
                </p>
                <p className="my-1 pointer xSmallText" onClick={()=>this.setState({editPopup:true})}>
                    <Icomoon className="mr-2" icon="edit" size={12}/>
                    Edit
                </p>
            </Popover>
        );
    }

    // Render Menu function for data table header
    popoverHeader = () => {
        return(
        <Popover id="popover-basic" className="border-0 p-3" >
            <p className="my-1 pointer xSmallText" onClick={()=>this.setState({deleteModal:true})}>
                <Icomoon className="mr-2" icon="delete" size={12}/>
                Delete
            </p>
        </Popover>
        )
    }

    render() {
        return(
            <>
                {/* {this.renderProduct()} */}
                {this.renderProductDataTable()}
                {this.renderEditPopup()}
                <ConfirmModal
					visible={this.state.deleteModal}
					heading="Delete Product"
                    delete
                    buttonTitle="Delete"
					title="Are you sure you want to Delete"
					onsubmitConfirm={() => this.handleDelete()}
					handleClose={() => this.setState({ deleteModal: false, })}
				/>    
            </>
        )
    }

    // Render product image page
    renderProduct() {
        return(
            <Container>
                <Row className="ml-4">
                    <CreateInventoryButton/>
                </Row>
                <div className="d-flex justify-content-center mt-5">
                    <img className="mt-4"  alt="Login" src={addLead} width="100%" height="430" />
                </div>
                <div className="d-flex justify-content-center">
                    <h3 className="fontStyle activeFontColor">Create Product</h3>
                </div>
            </Container>
        )
    }

    // Render product data table 

    renderProductDataTable() {
        return(
            <Container>
                <div className="d-flex ml-4">
                    <div>
                        <CreateInventoryButton/>
                    </div>
                    <div className="border col-md-4 bg-white rounded border-secondary d-flex justify-content-between py-2 my-2 ml-3">
                        <input 
                            type="search" 
                            className="no-outline input-style smallText w-75" 
                            placeholder="Product Name, Category..."
                            onChange={this._handleSearchChange}
                        />
                        <Icomoon className="align-self-center" icon="search" size={15}/>
                    </div> 
                    <div className="d-flex align-items-center">
                        <Icomoon icon="filter" className="align-self-center mx-3" size={25} />
                        <span className="smallText">Filter</span>
                    </div>
                </div>
                <div className="bg-white rounded mt-3 mx-3 xSmallText">
                    <DataTable 
                        columnData={this.state.columnDataState}
                        rowData={this.state.rowDataState}  
                        checkboxSelection={true}
                        className="smallText"
                    />
                     <div className="d-flex justify-content-center">
                        <ToastMessage 
                            toastMessagePop={this.state.toastDeleteSuccess}
                            message="Product Deleted successfully"
                            handleClose={()=> this.setState({ toastDeleteSuccess: false })}
                        />
                    </div>
                </div>  
            </Container>
        )
    }

    // Render Edit category popup details
    renderEditPopup() {
        return( 
            <div className="position-absolute" style={{top:'1px', right:'1px'}}>
                <div className="d-flex justify-content-end align-items-end mt-5 mr-0">
                    <Alert show={this.state.editPopup} className="col-md-4 shadow border bg-white borderRadius">
                        <div className="d-flex justify-content-end p-2">
                            <div className="col-md-4">
                                <Icomoon icon="delete" className="mr-3 pointer" size={20} color="#F57921" onClick={()=>this.setState({deleteModal:true})}/>
                                <Icomoon icon="close" className="pointer" size={20} color="#F57921" onClick={()=> this.setState({editPopup:false})}/>
                            </div>  
                        </div>
                        <hr></hr>
                        <form onSubmit={this.onSubmitEditProduct}>
                            <div className="row mt-3 p-2">
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                       Product Code
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input 
                                        type="text" 
                                        class="inputField mb-2" 
                                        id="productCode" 
                                        aria-describedby="productCode" 
                                        value={this.state.productCode ? this.state.productCode: 'WER12'}
                                        onChange={(e)=>this.setState({productCode:e.target.value})}
                                    />  
                                </div>
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                        Product Name
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input 
                                        type="text" 
                                        class="inputField" 
                                        id="productName" 
                                        aria-describedby="productName" 
                                        value={this.state.productName ? this.state.productName: 'Desk'}
                                        onChange={(e)=>this.setState({productName:e.target.value})}
                                    />  
                                </div>
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                        Category
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input 
                                        type="text" 
                                        class="inputField" 
                                        id="categoryName" 
                                        aria-describedby="categoryName" 
                                        value={this.state.categoryName ? this.state.categoryName: 'Timber'}
                                        onChange={(e)=>this.setState({categoryName:e.target.value})}
                                    />  
                                </div>
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                        Brand
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input 
                                        type="text" 
                                        class="inputField" 
                                        id="brand" 
                                        aria-describedby="brand" 
                                        value={this.state.brand ? this.state.brand: 'Hanuman'}
                                        onChange={(e)=>this.setState({brand:e.target.value})}
                                    />  
                                </div>
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                        Quantity
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input 
                                        type="number" 
                                        class="inputField" 
                                        id="quantity" 
                                        aria-describedby="quantity" 
                                        value={this.state.quantity ? this.state.quantity: '9'}
                                        onChange={(e)=>this.setState({quantity:e.target.value})}
                                    />  
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <div className="col-md-4">
                                    <img src={modalImg} alt="modalImg" width="100%" height="200"/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <ToastMessage 
                                    toastMessagePop={this.state.toastEditSuccess}
                                    message="Product updated successfully"
                                    handleClose={()=> this.setState({ toastEditSuccess: false })}
                                />
                            </div>
                            <ThemeButton type="submit" wrapperClass="btn activeBgColor col-md-11 fontStyle mt-3 py-2 ml-3 megaText fontColor" label="SAVE"/>
                        </form>
                    </Alert>
                </div>
            </div>
        )
    }

    // Search handle function
    _handleSearchChange = (e) => {
        const { value } = e.target;
        const lowercasedValue = value.toLowerCase();
        this.setState(prevState => {
            const rowDataState = prevState.rowDataState.filter(id =>
                id.productCode.toLowerCase().includes(lowercasedValue) ||  
                id.productName.toLowerCase().includes(lowercasedValue) ||
                id.categoryName.toLowerCase().includes(lowercasedValue) ||
                id.brand.toLowerCase().includes(lowercasedValue) ||
                id.quantity.toLowerCase().includes(lowercasedValue) ||   
                id.createDate.toLowerCase().includes(lowercasedValue) ||
                id.lastModifiedDate.toLowerCase().includes(lowercasedValue) 
          );
            return { rowDataState };
        });
    };

     // On submit delete function
    handleDelete = (status) => {
        this.setState({deleteModal:false, toastDeleteSuccess:true})
		// const leadId = this.state.deleteId;
		// deleteLead(leadId).then(response => {
        //     if(response && response.status) {
		// 		console.log(response);
        //         this.setState({deleteModal:false,toastSuccessMessage:true})
				
        //     }
        // }).catch(error => {
        //     console.log(error);
        // });     
    };

    // On submit edit product function
    onSubmitEditProduct = async(e) =>{
        e.preventDefault();
        this.setState({ 
            toastEditSuccess:true,
        })
    }
}

export default Product