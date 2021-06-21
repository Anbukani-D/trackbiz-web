// Order delivered page

import React from 'react';
import Container from 'react-bootstrap/Container';
import Icomoon from '../../../libraries/Icomoon';
import DataTable from '../../../common/DataTable';
import Modal from 'react-bootstrap/Modal'
import {CustomInput, ThemeButton} from '../../../common/Components';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import modalImg from '../../../assets/images/modal.svg'
import Alert from "react-bootstrap/Alert";
import addActivities from '../../../assets/images/addLead.svg';
import ConfirmModal from '../../../common/ConfirmModal';
import ToastMessage from '../../../common/ToastMessage';


class OrderDelivered extends React.Component {
    state={
        columnDataState:[],
        rowDataState:[],
        orderData:[],
        productData:[],
        // Toast message , edit , delete
        toastDeleteSuccess:false,
        toastMessageSuccess:false,
        // Modal edit, delete, msg, view
        deleteModal:false,
        msgModal:false,
        viewCardDetails:false,
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
            {field: 'orderId', headerName:'Order ID', width: 150 }, 
            {field: 'customerName' , headerName:'Customer Name', width: 150 }, 
            {field: 'contactNo' , headerName:'Contact No.', width: 150  }, 
            {field: 'deliveredBy' , headerName:'Delivered By', width: 150  },
            {field: 'createDate' , headerName:'Create Date', width: 150},
            {field: 'lastModifiedDate', headerName:'Last Modified Date', width: 200},
            {field: 'action', headerName:"Action",
            width:170,
            renderCell: () => (
                <div>
                    <ThemeButton type="button" wrapperClass="btn borderStyle  fontStyle my-2 py-2 smallText" label="View List of Items" onClick={()=>{this.setState({viewCardDetails:true})}} />
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
                deliveredBy:'John',
                createDate:'20/12/2020 11:50:43 am',
                lastModifiedDate:'21/1/2021 11:50:43 am',
            },
            { 
                id: 2, 
                orderId:'WEF656',
                customerName:'Priya',
                contactNo:'+91 8987654321',
                deliveredBy:'Kumar',
                createDate:'20/12/2020 11:50:43 am',
                lastModifiedDate:'21/1/2021 11:50:43 am',
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

    // Render Menu function for data table data 
    popover = (id)=> {
        return (
            <Popover id="popover-basic" className="border-0 p-3" >
                <p className="my-1 pointer xSmallText" onClick={()=>this.setState({deleteModal:true})}>
                    <Icomoon className="mr-2" icon="delete" size={12} />
                    Delete
                </p>
                <p className="my-1 pointer xSmallText"><a className="text-decoration-none text-dark" href="tel:+91 9886876448">
                    <Icomoon className="mr-2" icon="telephone" size={12}/>
                    Call</a>
                </p>
                <p className="my-1 pointer xSmallText" onClick={()=>{this.setState({msgModal:true})}}>
                    <Icomoon className="mr-2" icon="chat" size={12}/>
                    Msg
                </p> 
            </Popover>
        )
    };

    // Render Menu function for data table header
    popoverHeader = () => {
        return(
            <Popover id="popover-basic" className="border-0 p-3" >
                <p className="my-1 pointer xSmallText" onClick={()=>this.setState({deleteModal:true})}>
                    <Icomoon className="mr-2" icon="delete" size={12}/>
                    Delete
                </p>
                <p className="my-1 pointer xSmallText" onClick={()=>{this.setState({msgModal:true})}}>
                    <Icomoon className="mr-2" icon="chat" size={12}/>
                    Msg
                </p>  
            </Popover>
        )
    }

    render() {
        return(
            <>
                {this.renderOrderDataTable()}
                {/* {this.renderOrderDelivered()} */}
                {this.renderViewDetails()}
                <ConfirmModal
					visible={this.state.deleteModal}
					heading="Delete Delivered Order"
                    delete
                    buttonTitle="Delete"
					title="Are you sure you want to Delete"
					onsubmitConfirm={() => this.handleDelete()}
					handleClose={() => this.setState({ deleteModal: false, })}
				/>  
                 {this.renderMsgModal()}  
            </>
        )
    }

    // Render order delivered image page 

    renderOrderDelivered() {
        return(
            <Container>
                <div className="d-flex justify-content-center mt-5">
                    <img className="mt-4"  alt="addActivities" src={addActivities} width="100%" height="430" />
                </div>
                <div className="d-flex justify-content-center">
                    <h3 className="fontStyle activeFontColor">Order Delivered</h3>
                </div>
            </Container>
        )
    }

    // Render order delivered data table

    renderOrderDataTable(){
        return(
            <Container>
                <div className="d-flex">
                    <div className="border col-md-4 bg-white rounded border-secondary d-flex justify-content-between py-2 my-2 mx-3">
                        <input 
                            type="search" 
                            className="no-outline input-style smallText w-75" 
                            placeholder="Customer Name..."
                            onChange={this._handleSearchChange}
                        />
                        <Icomoon className="align-self-center" icon="search" size={15}/>
                    </div> 
                    <div className="d-flex align-items-center">
                        <Icomoon icon="filter" className="align-self-center mr-2 mt-1" size={25} />
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
                            message="Delivered order Deleted successfully"
                            handleClose={()=> this.setState({ toastDeleteSuccess: false })}
                        />
                    </div>
                </div>
            </Container>
        )
    }


    // Render message modal function
    renderMsgModal() {
        return(
            <>
                <Modal
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.msgModal}
                >  
                    <form onSubmit={this.onSubmitMessage}>
                        <div className="m-3">
                            <div className="d-flex justify-content-end">
                                <Icomoon icon="close" size={20} className="pointer activeFontColor" onClick={()=>{this.setState({msgModal:false})}}/>
                            </div>
                            <Modal.Body>
                                <CustomInput  
                                    placeholder="Message*" 
                                    fieldStyle="outlined"
                                    multiline={6}
                                    value={this.state.message}
                                    onChange={(e)=>this.setState({message:e.target.value})}
                                />  
                                <div className="d-flex justify-content-center">
                                    <ToastMessage 
                                        toastMessagePop={this.state.toastMessageSuccess}
                                        message="Message Sent Successfully!"
                                        handleClose={()=> this.setState({ toastMessageSuccess: false })}
                                    />
                                </div>                        
                                <ThemeButton type="submit" wrapperClass="btn activeBgColor col-md-12 fontStyle mt-3 py-2 megaText fontColor" label="Send" />
                            </Modal.Body>
                        </div>
                    </form> 
                </Modal> 
            </>
        )
    }

    // Render view details popup 

    renderViewDetails() {
		const { cardInfo } = this.state;
		return( 
			<div className="position-absolute" style={{top:'1px', right:'1px'}}>
				<div className="d-flex justify-content-end align-item-end mr-0">
					<Alert show={this.state.viewCardDetails} className="col-md-10 px-0 shadow border bg-white borderRadius">
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
	
    // Render popup data 

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

    // Search handle function
    _handleSearchChange = (e) => {
        const { value } = e.target;
        const lowercasedValue = value.toLowerCase();
        this.setState(prevState => {
          const rowDataState = prevState.rowDataState.filter(id =>
            id.orderId.toLowerCase().includes(lowercasedValue) ||  
            id.customerName.toLowerCase().includes(lowercasedValue) ||
            id.contactNo.toLowerCase().includes(lowercasedValue) ||
            id.deliveredBy.toLowerCase().includes(lowercasedValue) ||
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

    // On submit message order function
    onSubmitMessage= (e) =>{
        e.preventDefault();
        this.setState({toastMessageSuccess:true})
    }
}

export default OrderDelivered