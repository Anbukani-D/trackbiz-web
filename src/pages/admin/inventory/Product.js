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

// Render Menu function for data table data 
const popover = (
    <Popover id="popover-basic" className="border-0 p-3" >
        <p className="my-1 pointer xSmallText">
            <Icomoon className="mr-2" icon="delete" size={12}/>
            Delete
        </p>
        <p className="my-1 pointer xSmallText">
            <Icomoon className="mr-2" icon="edit" size={12}/>
            Edit
        </p>
    </Popover>
  );

// Render Menu function for data table header
const popoverHeader =(
    <Popover id="popover-basic" className="border-0 p-3" >
        <p className="my-1 pointer xSmallText">
            <Icomoon className="mr-2" icon="delete" size={12}/>
            Delete
        </p>
    </Popover>

)

class Product extends React.Component {
    state={
        columnDataState:[],
        rowDataState:[],
        productData:[],
    }

    componentDidMount () {
        const columnDataState = [
            {field: 'icon', headerName:
            <div>
                <OverlayTrigger trigger="click" placement="right" overlay={popoverHeader}>
                    <Icomoon className="pointer" icon="vmore" size={20} />
            </OverlayTrigger>
            </div>,
            width:70,
            renderCell: () => (
                <div>
                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                        <Icomoon className="pointer" icon="vmore" size={20}  />
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
                productCode:'WER12',
                productName:'Desk', 
                categoryName:'Timber',
                brand:'Hanuman',
                quantity:'3',
                createDate:'20/12/2020',
                lastModifiedDate:'21/1/2021'
            }
        ]
        this.setState({columnDataState,rowDataState })
    }

    render() {
        return(
            <>
                {/* {this.renderProduct()} */}
                {this.renderProductDataTable()}
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
                        <input type="search" className="no-outline input-style smallText w-75" 
                            placeholder="Product Name, Category..."
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
                </div>  
            </Container>
        )
    }
}

export default Product