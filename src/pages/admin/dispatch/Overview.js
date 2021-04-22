// Dispatch and track overview page

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Icomoon from '../../../libraries/Icomoon';
import '../../../css/common.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Alert from 'react-bootstrap/Alert';
import { ThemeButton } from '../../../common/Components';
import modalImg from '../../../assets/images/modal.svg';
import addActivities from '../../../assets/images/addLead.svg';

// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}`,
        orderId: "WDW230CW",
        customerName: <span className="smallText">Arun kumar</span>,
        contactNo:<span className="smallText">+91 8820989201</span>,
        vehicleDetails:<p><span className="smallText font-weight-bold">Arun kumar<br/></span><span className="xSmallText">KA0376676</span></p>,
    }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, destination1,droppableSource, droppableDestination, droppableDestination1) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const destClone1 = Array.from(destination1);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);
    destClone1.splice(droppableDestination1.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    result[droppableDestination1.droppableId] = destClone1;
    return result;
};

class Overview extends React.Component {
    state = {
        items: getItems(3),
        selected: getItems(3, 3),
        selected1: getItems(3,6),
        viewCardDetails:false,
        productData:[],
    };

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
        droppable: 'items',
        droppable2: 'selected',
        drappable3:'selected1'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination, destination1 } = result;

        // dropped outside the list
        if (!destination || !destination1) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index,
                destination1.index
            );

            let state = { items };

            if (source.droppableId === 'droppable2' ) {
                state = { selected: items, selected1:items };
            }

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                this.getList(destination1.droppableId),
                source,
                destination,
                destination1
            );

            this.setState({
                items: result.droppable,
                selected: result.droppable2,
                selected1:result.drappable3
            });
        }
    };


    componentDidMount () {
        let orderPlaced = [
                {
                  id: 1,
                  orderId: "WDW230CW",
                  customerName: <span className="smallText">Arun kumar</span>,
                  contactNo:<span className="smallText">+91 8820989201</span>,
                  vehicleDetails:<p><span className="xSmallText font-weight-bold">Arun kumar</span><br/><span className="xSmallText">KA0376676</span></p>,
                  statusIcon:<Icomoon icon="status" color="#E24E58" size={20}/>
                },
                {
                  id: 2,
                  orderId: "WDW230CW",
                  customerName: <span className="smallText">Arun kumar</span>,
                  contactNo:<span className="smallText">+91 8820989201</span>,
                  vehicleDetails:<p><span className="smallText font-weight-bold">Arun kumar</span><br/><span className="xSmallText">KA0376676</span></p>,
                  statusIcon:<Icomoon icon="status" color="#E24E58" size={20}/>
                },
                {
                  id: 3,
                  orderId: "WDW230CW",
                  customerName: <span className="smallText">Arun kumar</span>,
                  contactNo:<span className="smallText">+91 8820989201</span>,
                  vehicleDetails:<p><span className="smallText font-weight-bold">Arun kumar<br/></span><span className="xSmallText">KA0376676</span></p>,
                  statusIcon:<Icomoon icon="status" color="#E24E58" size={20}/>
                }
              ]
            
        let orderShipped = [
                {
                    id: 4,
                    orderId: "WDW230CW",
                    customerName: <span className="smallText">Arun kumar</span>,
                    contactNo:<span className="smallText">+91 8820989201</span>,
                    vehicleDetails:<p><span className="xSmallText font-weight-bold">Arun kumar</span><br/><span className="xSmallText">KA0376676</span></p>,
                    statusIcon:<Icomoon icon="status" color="#F57921" size={20}/>
                },
                {
                    id: 5,
                    orderId: "WDW230CW",
                    customerName: <span className="smallText">Arun kumar</span>,
                    contactNo:<span className="smallText">+91 8820989201</span>,
                    vehicleDetails:<p><span className="smallText font-weight-bold">Arun kumar</span><br/><span className="xSmallText">KA0376676</span></p>,
                    statusIcon:<Icomoon icon="status" color="#F57921" size={20}/>
                },
                {
                    id: 6,
                    orderId: "WDW230CW",
                    customerName: <span className="smallText">Arun kumar</span>,
                    contactNo:<span className="smallText">+91 8820989201</span>,
                    vehicleDetails:<p><span className="smallText font-weight-bold">Preethi<br/></span><span className="xSmallText">KA0376676</span></p>,
                    statusIcon:<Icomoon icon="status" color="#F57921" size={20}/>
                }
            ]
        let orderDispatched = [
                {
                    id: 7,
                    orderId: "WDW230CW",
                    customerName: <span className="smallText">Arun kumar</span>,
                    contactNo:<span className="smallText">+91 8820989201</span>,
                    vehicleDetails:<p><span className="smallText font-weight-bold">Arun kumar<br/></span><span className="xSmallText">KA0376676</span></p>,
                    statusIcon:<Icomoon icon="status" color="#7CE14B" size={20}/>
                },
                {
                    id: 8,
                    orderId: "WDW230CW",
                    customerName: <span className="smallText">Arun kumar</span>,
                    contactNo:<span className="smallText">+91 8820989201</span>,
                    vehicleDetails:<p><span className="smallText font-weight-bold">Arun kumar<br/></span><span className="xSmallText">KA0376676</span></p>,
                    statusIcon:<Icomoon icon="status" color="#7CE14B" size={20}/>
                },
                {
                    id: 9,
                    orderId: "WDW230CW",
                    customerName: <span className="smallText">Arun kumar</span>,
                    contactNo:<span className="smallText">+91 8820989201</span>,
                    vehicleDetails:<p><span className="smallText font-weight-bold">Arun kumar<br/></span><span className="xSmallText">KA0376676</span></p>,
                    statusIcon:<Icomoon icon="status" color="#7CE14B" size={20}/>
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
          this.setState({orderPlaced:orderPlaced, orderShipped:orderShipped, orderDispatched:orderDispatched, productData: productData})
    }

	
    render() {
        return (
            <Container>
                {this.renderOverview()}
                {/* {this.renderOverviewDispatchTrack()} */}
                {this.renderViewDetails()}
            </Container>
        );
    }

    // Render dispatch and track overview image page
    renderOverviewDispatchTrack() {
        return(
            <Container>
                <div className="d-flex justify-content-center mt-5">
                    <img className="mt-4"  alt="addActivities" src={addActivities} width="100%" height="430" />
                </div>
                <div className="d-flex justify-content-center">
                    <h3 className="fontStyle activeFontColor">Dispatch & Track Overview</h3>
                </div>
            </Container>
        )
    }
     
    // Render dragb and drop content function
    renderOverview() {
        return (
            <Container>
                <Row className="ml-3 d-flex justify-content-between">                        
                    <div className="ml-3">
                        <Icomoon icon="done" className="align-self-center mr-2 mt-1" size={20} />
                        <span className="smallText">All tasks</span>
                    </div>
                    <div className="ml-3">
                        <Icomoon icon="filter" className="align-self-center mr-2 mt-1" size={25} />
                        <span className="smallText">Filter</span>
                    </div>
                    <div className="col-md-8 d-flex justify-content-end">
                        <div className="ml-3">
                            <span className="xSmallText">Task Status</span>
                        </div>
                        <div className="ml-3">
                            <Icomoon icon="status" className="align-self-center mr-2 mt-1" color="#E24E58"  size={10} />
                            <p className="xSmallText">Order Placed</p>
                        </div>
                        <div className="ml-3">
                            <Icomoon icon="status" className="align-self-center mr-2 mt-1" color="#F57921" size={10} />
                            <p className="xSmallText">Ready to Shipped</p>
                        </div>
                        <div className="ml-3">
                            <Icomoon icon="status" className="align-self-center mr-2 mt-1" color="#7CE14B" size={10} />
                            <p className="xSmallText">Dispatched</p>
                        </div>
                    </div>
                </Row>
                <div className="col-md-12">
                    <Row className="d-flex justify-content-between mt-3 ">
                        <DragDropContext onDragEnd={this.onDragEnd}>
                            <Droppable droppableId="droppable">
                                {(provided) => (
                                    <Col  md={4} className="mt-2">
                                        <div className="col-md-12 p-2 shadow borderRadius" style={{backgroundColor:'#00000029',}}>
                                            <div ref={provided.innerRef} >  
                                                <div className="d-flex justify-content-between">
                                                    <p className="smallText text-left font-weight-bold">Order Placed</p>
                                                    <Icomoon icon="hmore" color="#F57921" size={20}/>
                                                </div>
                                                {this.state.items.map((orderPlaced, index) => (
                                                    <Draggable
                                                        key={orderPlaced.id}
                                                        draggableId={orderPlaced.id}
                                                        index={index}>
                                                            
                                                        {(provided) => (  
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                >
                                                                <div 
                                                                    className="card text-left my-2 pointer" key={orderPlaced.id} onClick={()=>{this.setState({viewCardDetails:true})}} >
                                                                    <span className="text-right p-0 m-0"><Icomoon icon="status" color="#E24E58" size={20}/></span>
                                                                    <div className="p-1">
                                                                        <div className="d-flex">
                                                                            <span className="xSmallText col-md-3">Order Id</span> 
                                                                            <span className="smallText col-md-6 fontColor">{orderPlaced.orderId}</span>	
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <span className="xSmallText col-md-5">Customer Name </span> 
                                                                            <span className="smallText col-md-7 font-weight-bold">{orderPlaced.customerName}</span>
                                                                        </div>   
                                                                        <div className="d-flex">
                                                                            <span className="xSmallText col-md-5">Contact No. </span> 
                                                                            <span className="smallText col-md-7 font-weight-bold">{orderPlaced.contactNo}</span>
                                                                        </div>   
                                                                        <div className="d-flex">
                                                                            <span className="xSmallText col-md-5">Vehicle Details </span>
                                                                            <span className="xSmallText col-md-7">{orderPlaced.vehicleDetails}</span>
                                                                        </div> 
                                                                    </div>  
                                                                </div>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))} 
                                            </div>
                                        </div>
                                    </Col>
                                )}
                            </Droppable>
                            <Droppable droppableId="droppable2">
                                {(provided) => (
                                    <Col md={4} className="mt-2">
                                        <div className="col-md-12 p-2 shadow borderRadius" style={{backgroundColor:'#00000029',}}>
                                            <div ref={provided.innerRef}>
                                                <div className="d-flex justify-content-between">
                                                    <p className="smallText text-left font-weight-bold">Ready to Shipped</p>
                                                    <Icomoon icon="hmore" color="#F57921" size={20}/>
                                                </div>
                                                {this.state.selected.map((orderShipped, index) => (
                                                    <Draggable
                                                        key={orderShipped.id}
                                                        draggableId={orderShipped.id}
                                                        index={index}>
                                                        {(provided) => ( 
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                >
                                                                <div 
                                                                    className="card text-left my-2 pointer" key={orderShipped.id} onClick={()=>{this.setState({viewCardDetails:true})}} >
                                                                    <span className="text-right p-0 m-0"><Icomoon icon="status" color="#F57921" size={20}/></span>
                                                                    <div className="p-1">
                                                                        <div className="d-flex">
                                                                            <span className="xSmallText col-md-3">Order Id</span> 
                                                                            <span className="smallText col-md-6 fontColor">{orderShipped.orderId}</span>	
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <span className="xSmallText col-md-5">Customer Name </span> 
                                                                            <span className="smallText col-md-7 font-weight-bold">{orderShipped.customerName}</span>
                                                                        </div>   
                                                                        <div className="d-flex">
                                                                            <span className="xSmallText col-md-5">Contact No. </span> 
                                                                            <span className="smallText col-md-7 font-weight-bold">{orderShipped.contactNo}</span>
                                                                        </div>   
                                                                        <div className="d-flex">
                                                                            <span className="xSmallText col-md-5">Vehicle Details </span>
                                                                            <span className="xSmallText col-md-7">{orderShipped.vehicleDetails}</span>
                                                                        </div> 
                                                                    </div>  
                                                                </div>
                                                            </div>  
                                                        )}
                                                    </Draggable>
                                                ))}
                                            </div>
                                        </div>
                                    </Col>
                                )}
                            </Droppable>
                            <Droppable droppableId="droppable3">
                                {(provided) => (
                                    <Col md={4} className="my-2">
                                            <div className="col-md-12 p-2 shadow borderRadius" style={{background:'#00000029',}}>
                                            <div className="d-flex justify-content-between">
                                                <p className="smallText text-left font-weight-bold">Dispatched</p>
                                                <Icomoon icon="hmore" color="#F57921" size={20}/>
                                            </div>
                                            <div ref={provided.innerRef}>
                                                {this.state.selected1.map((orderDispatched, index) => (
                                                    <Draggable
                                                        key={orderDispatched.id}
                                                        draggableId={orderDispatched.id}
                                                        index={index}>
                                                        {(provided) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                >
                                                                <div 
                                                                    className="card text-left my-2 pointer" key={orderDispatched.id} onClick={()=>{this.setState({viewCardDetails:true})}} >
                                                                    <span className="text-right p-0 m-0"><Icomoon icon="status" color="#7CE14B" size={20}/></span>
                                                                    <div className="p-1">
                                                                        <div className="d-flex">
                                                                            <span className="xSmallText col-md-3">Order Id</span> 
                                                                            <span className="smallText col-md-6 fontColor">{orderDispatched.orderId}</span>	
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <span className="xSmallText col-md-5">Customer Name </span> 
                                                                            <span className="smallText col-md-7 font-weight-bold">{orderDispatched.customerName}</span>
                                                                        </div>   
                                                                        <div className="d-flex">
                                                                            <span className="xSmallText col-md-5">Contact No. </span> 
                                                                            <span className="smallText col-md-7 font-weight-bold">{orderDispatched.contactNo}</span>
                                                                        </div>   
                                                                        <div className="d-flex">
                                                                            <span className="xSmallText col-md-5">Vehicle Details </span>
                                                                            <span className="xSmallText col-md-7">{orderDispatched.vehicleDetails}</span>
                                                                        </div> 
                                                                    </div>  
                                                                </div>
                                                            </div>  
                                                        )}
                                                    </Draggable>
                                                ))}
                                            </div>
                                        </div>
                                    </Col>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </Row>
                </div>
            </Container>
        );
    }

    // Render view popup details
	renderViewDetails() {
		const { cardInfo } = this.state;
		return( 
			<div className="position-absolute" style={{top:'1px', right:'1px'}}>
				<div className="d-flex justify-content-end align-items-end mr-0">
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
	
    // Render pop up data
	renderDetails = (label, value) => {
		return (
			<div className="d-flex ml-3 text-justify py-2">
				<span className="col-md-5 xSmallText">
				    {label}
				</span>
				<span className="col-md-7 xSmallText">
					{value}
				</span>
			</div>
		);
	};
}

export default Overview