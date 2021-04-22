// Order page

import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Icomoon from '../../../libraries/Icomoon';
import CreateSalesButton from './CreateSalesButton';
import DataTable from '../../../common/DataTable';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import {ThemeButton} from '../../../common/Components';
import modalImg from '../../../assets/images/modal.svg'
import Alert from "react-bootstrap/Alert";
import addActivities from "../../../assets/images/addLead.svg";

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
        <p className="my-1 pointer xSmallText">
            <Icomoon className="mr-2" icon="telephone" size={12}/>
            Call
        </p>
        <p className="my-1 pointer xSmallText">
            <Icomoon className="mr-2" icon="chat" size={12}/>
            Msg
        </p>
    </Popover>
  );

// Render Menu function for data table header
const popoverHeader = (
    <Popover id="popover-basic" className="border-0 p-3" >
        <p className="my-1 pointer xSmallText">
            <Icomoon className="mr-2" icon="delete" size={12}/>
            Delete
        </p>
        <p className="my-1 pointer xSmallText">
            <Icomoon className="mr-2" icon="chat" size={12}/>
            Msg
        </p>
  </Popover>
)

class Order extends React.Component {
    state={
        columnDataState:[],
        rowDataState:[],
        orderData:[],
        productData:[],
        viewCardDetails:false
    }

    componentDidMount () {
        const columnDataState = [
            {field: 'icon', headerName:
            <div>
                <OverlayTrigger trigger="click" placement="right" overlay={popoverHeader}>
                    <Icomoon icon="vmore" size={20} />
            </OverlayTrigger>
            </div>,
            width:70,
            renderCell: () => (
                <div>
                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                        <Icomoon  className="pointer"  icon="vmore" size={20} />
                    </OverlayTrigger>
                </div>
                ),
            },
            {field: 'orderId', headerName:'Order ID', width: 150 }, 
            {field: 'customerName' , headerName:'Customer Name', width: 150 }, 
            {field: 'contactNo' , headerName:'Contact No.', width: 150  }, 
            {field: 'location' , headerName:'Location', width: 150 }, 
            {field: 'totalItems' , headerName:'Total Items', width: 150 }, 
            {field: 'createDate' , headerName:'Create Date', width: 150},
            {field: 'lastModifiedDate', headerName:'Last Modified Date', width: 200},
            {field: 'action', headerName:"Action",
            width:170,
            renderCell: () => (
                <div>
                    <ThemeButton type="button" wrapperClass="btn borderStyle  fontStyle my-2 py-2 smallText" label="View List of Items" onClick={()=> this.setState({viewCardDetails:true})} />
                </div>
                ),
            },
        ]
    
        const rowDataState =[
            { 
                id: 1, 
                orderId:'WFE242',
                customerName:'Jeni',
                contactNo:'+91 9887654323',
                location:'Bangalore',
                totalItems:'10',
                createDate:'20/12/2020 11:50:43 am',
                lastModifiedDate:'21/1/2021 11:50:43 am',
                action:<span typ="button" className="btn activeFontColor">Permission</span>
            },
            { 
                id: 2, 
                orderId:'WEF656',
                customerName:'Priya',
                contactNo:'+91 8987654321',
                location:'Chennai', 
                totalItems:'20',
                createDate:'20/12/2020 11:50:43 am',
                lastModifiedDate:'21/1/2021 11:50:43 am',
                action:<span typ="button" className="btn activeFontColor">Permission</span>
            }
        ]
        let productData = [
            {
                id: 1,
                productName:'Door',
                quantity:'3',
                orderDate:'Feb 03, 2021'	
            },
            {
                id: 2,
                productName:'Door',
                quantity:'5',
                orderDate:'Feb 03, 2021'	
            },
            {
                id: 3,
                productName:'Door',
                quantity:'4',
                orderDate:'Feb 03, 2021'	
            },
            {
                id: 4,
                productName:'Window',
                quantity:'6',
                orderDate:'Feb 03, 2021'	
            },	
        ];
        this.setState({columnDataState,rowDataState, productData:productData })
    }

    render() {
        return(
            <>
                {this.renderOrderDataTable()}
                {/* {this.renderCreateOrders()} */}
                {this.renderViewDetails()}
            </>
        )
    }

    // Render image page
    renderCreateOrders() {
        return(
            <Container>
                <Row className="ml-4">
                    <CreateSalesButton/>
                </Row>
                <div className="d-flex justify-content-center mt-5">
                    <img className="mt-4"  alt="addActivities" src={addActivities} width="100%" height="430" />
                </div>
                <div className="d-flex justify-content-center">
                    <h3 className="fontStyle activeFontColor">Add Orders</h3>
                </div>
            </Container>
        )
    }

    // Render order data table
    renderOrderDataTable(){
        return(
            <Container>
                <div className="ml-4 d-flex">
                    <div>
                        <CreateSalesButton/>
                    </div>
                    <div className="border col-md-4 bg-white rounded border-secondary d-flex justify-content-between py-2 mx-3 my-2">
                        <input type="search" className="no-outline input-style smallText w-75" 
                            placeholder="Customer Name..."
                        />
                        <Icomoon className="align-self-center" icon="search" size={15}/>
                    </div> 
                    <div className="d-flex align-items-center">
                        <Icomoon icon="filter" className="align-self-center mr-2" size={25} />
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

    // Render view details 
    renderViewDetails() {
		const { cardInfo } = this.state;
		return( 
			<div className="position-absolute mt-5 pt-5" style={{top:'1px', right:'1px'}}>
				<div className="d-flex justify-content-end align-item-end mr-0">
					<Alert show={this.state.viewCardDetails} className="col-md-10 px-0 shadow border bg-white borderRadius" >
                        <div className="d-flex justify-content-between p-2">
                            <ThemeButton type="button" wrapperClass="btn btn-outline-secondary  ml-2 fontStyle font-weight-bold smallText py-2" iconName="tick" iconSize={15} label="Mark Complete"/>
                            <div className="col-md-4">
                                <Icomoon icon="task" className="mr-3 pointer" size={20} color="#F57921"/>
                                <Icomoon icon="delete" className="mr-3 pointer" size={20} color="#F57921"/>
                                <Icomoon icon="close" className="pointer" size={20} color="#F57921" onClick={()=> this.setState({viewCardDetails:false})}/>
                            </div>  
                        </div>
                        <hr className="pl-0"></hr>
                        {this.renderDetails(
                                "Order Id",
                                <span className="activeFontColor smallText">{cardInfo && cardInfo.orderId ? cardInfo.orderId : "WEF00876RR"}</span>
                            )}
                        {this.renderDetails(
                            "Delivered By",
                            cardInfo && cardInfo.deliveredBy ? cardInfo.deliveredBy : "Arun Kumar"
                        )}
                        {this.renderDetails(
                            "Customer Name",
                            cardInfo && cardInfo.customerName ? cardInfo.customerName : "Jeni"
                        )}
                        {this.renderDetails(
                            "Contact No.",
                            cardInfo && cardInfo.contactNo ? cardInfo.contactNo : "+91 9887654345"
                        )}
                        {this.renderDetails(
                            "Total Items",
                            cardInfo && cardInfo.totalItems ? cardInfo.totalItems : "20"
                        )}
                        {this.renderDetails(
                            "Vehicle No.",
                            cardInfo && cardInfo.vehicleNo ? cardInfo.vehicleNo : "KA0346655"
                        )}
                        {this.renderDetails(
                            "Delivery Contact No.",
                            cardInfo && cardInfo.deliveryContactNo ? cardInfo.deliveryContactNo : "+919889876567"
                        )}
                        {this.renderDetails(
                            "Delivery Address",
                            cardInfo && cardInfo.houseName ? cardInfo.houseName : "Little Heaven 5th main road Koramangla Bangalore Karnataka 567788",
                            // cardInfo && cardInfo.street ? cardInfo.street : "5th main road",
                            // cardInfo && cardInfo.area ? cardInfo.area : "Koramangla",
                            // cardInfo && cardInfo.city ? cardInfo.city : "Bangalore",
                            // cardInfo && cardInfo.state ? cardInfo.state : "Karnataka",
                            // cardInfo && cardInfo.pincode ? cardInfo.pincode : "567788",
                        )}
                        <div className="d-flex ml-3 text-justify">
                            <span className="col-md-5 xSmallText">
                            List of Product
                            </span>
                        </div>
                        <div className="d-flex">
                            <div className="col-md-8">
                                <table className="table-fixed table table-responsive xSmallText">
                                    <thead className="font-weight-bold">
                                    <tr>
                                        <th>Product code</th>
                                        <th>Quantity</th>
                                        <th>Order Date</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.productData.map((productData) => (
                                        <tr>
                                            <td>{productData.productName}</td>
                                            <td>{productData.quantity}</td>
                                            <td>{productData.orderDate}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-4">
                                <img src={modalImg} alt="modalImg" width="100%" height="200"/>
                            </div>
                        </div>
					</Alert>
				</div>
			</div>
		)
	}
	
    // Render data for pop up 
	renderDetails = (label, value) => {
		return (
			<div className="d-flex ml-3 text-justify py-2">
				<span className="col-md-5 xSmallText ">
				    {label}
				</span>
				<span className="col-md-7 xSmallText">
					{value}
				</span>
			</div>
		);
	};
}

export default Order