// Track page

import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Icomoon from '../../../libraries/Icomoon';
import Col from 'react-bootstrap/Col';
import Avtar from "../../../assets/images/avtar.png"
import Avatar from '@material-ui/core/Avatar';
import {ThemeButton} from '../../../common/Components';
import modalImg from '../../../assets/images/modal.svg'
import Alert from "react-bootstrap/Alert";
import addActivities from '../../../assets/images/addLead.svg'; 

class Track extends React.Component {
    state={
        orderTracking:[],
        viewOrder:false,
        productData:[],
    }

    componentDidMount () {
        let orderTracking = [
			{
                id: 1,
                drivername:'Arun kumar',
                phoneNumber:'+91 9887654567',
                driverImage: Avtar,
                trackingId:'1234567',
                houseName:'Little Heaven',
                street:'Channasandra Maiin Rd,',
                area:'whitefield',
                city:'Bangalore',
                state:'Karnataka',
                pincode:'560023',
                vehicleNo:'KA03M1011',
                distance:'12 Km.'	
			},
			{
                id: 2,
                drivername:'Arun kumar',
                phoneNumber:'+91 9887654567',
                driverImage: Avtar,
                trackingId:'1234567',
                houseName:'Little Heaven',
                street:'Channasandra Maiin Rd,',
                area:'whitefield',
                city:'Bangalore',
                state:'Karnataka',
                pincode:'560023',
                vehicleNo:'KA03M1011',
                distance:'12 Km.'
            },	  
            {
                id: 3,
                drivername:'Arun kumar',
                phoneNumber:'+91 9887654567',
                driverImage: Avtar,
                trackingId:'1234567',
                houseName:'Little Heaven',
                street:'Channasandra Maiin Rd,',
                area:'whitefield',
                city:'Bangalore',
                state:'Karnataka',
                pincode:'560023',
                vehicleNo:'KA03M1011',
                distance:'12 Km.'	
                
            },
            {
                id: 4,
                drivername:'Arun kumar',
                phoneNumber:'+91 9887654567',
                driverImage: Avtar,
                trackingId:'1234567',
                houseName:'Little Heaven',
                street:'Channasandra Maiin Rd,',
                area:'whitefield',
                city:'Bangalore',
                state:'Karnataka',
                pincode:'560023',
                vehicleNo:'KA03M1011',
                distance:'12 Km.'	
                
            },
            {
                id: 5,
                drivername:'Arun kumar',
                phoneNumber:'+91 9887654567',
                driverImage: Avtar,
                trackingId:'1234567',
                houseName:'Little Heaven',
                street:'Channasandra Maiin Rd,',
                area:'whitefield',
                city:'Bangalore',
                state:'Karnataka',
                pincode:'560023',
                vehicleNo:'KA03M1011',
                distance:'12 Km.'	
                
            }
		];
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
		this.setState({orderTracking: orderTracking, productData: productData});
    }
    render() {
        return(
            <>
                {/* {this.renderInitialTrack()} */}
                {this.renderTrack()}
            </>
        )
    }
    renderTrack() {
        return(
            <Container>                  
                <Col md={2} className="py-2 bg-white rounded-top">
                    <Row>
                    {this.state.pageContent==="viewTrack"?
                    <Icomoon icon="larrow" className="pointer align-self-center ml-2" size={15} onClick={()=> this.setState({pageContent:''})}/>:null}
                    <p className="xSmallText activeFontColor mt-3 font-weight-bold text-left ml-2">All Order Tracking</p>
                    </Row>
                </Col>
                <Col md={12} className="bg-white rounded-right rounded-bottom">
                    <Row>
                        <Col md={5}>
                            <Row className="p-2">
                                <div className="border col-md-8 bg-white rounded border-secondary d-flex justify-content-between py-2 ml-2">
                                    <input type="search" className="no-outline input-style smallText w-75" 
                                        placeholder="Location Name..."
                                    />
                                    <Icomoon className="align-self-center" icon="search" size={15}/>
                                </div>
                                <div className="ml-3">
                                    <Icomoon icon="filter" className="align-self-center mr-2 mt-1" size={20} />
                                    <span className="smallText">Filter</span>
                                </div>
                            </Row>
                            {this.state.pageContent ? 
                                  this.renderTrackDetails() 
                                : this.renderAllOrderTracking()
                            }
                        </Col>
                        <Col md={7}>
                            {this.renderTrackingMap()}
                        </Col>
                    </Row>
                </Col>
                {this.renderViewDetails()}
            </Container> 
        )
    }

    // Render image function
    renderInitialTrack() {
        return(
            <Container>
                <div className="d-flex justify-content-center mt-5">
                    <img className="mt-4"  alt="addActivities" src={addActivities} width="100%" height="430" />
                </div>
                <div className="d-flex justify-content-center">
                    <h3 className="fontStyle activeFontColor">Track</h3>
                </div>
            </Container>
        )
    }
    
    // Render All order tracking function

    renderAllOrderTracking() {
        return(
           <Row className="px-2">
                <div className="p-2 scrollStyle" style={{height:520}}>
                    {this.state.orderTracking.map((orderTracking) => (
                        <div className="shadow-sm rounded bg-white p-3 my-3" key={orderTracking.id}>
                            <div className="d-flex justify-content-between">
                                <div className="col-md-8 row">
                                <Avatar variant="rounded"  alt="Avtar" src={orderTracking.driverImage}   style={{ alignSelf:'center' }} className="w-25 h-75"/>
                                    <span className="smallText p-2">{orderTracking.drivername}</span>
                                </div>
                                <p className="fontColor smallText">{orderTracking.trackingId ? orderTracking.trackingId:'-'}</p>
                            </div>
                            <p className="font-weight-bold smallText text-left my-0">{orderTracking.houseName ? orderTracking.houseName:'-'},</p>
                            <p className="smallText text-left my-0">{orderTracking.street ? orderTracking.street:'-'},</p>
                            <p className="smallText text-left my-0">
                                {orderTracking.area ? orderTracking.area:'-'}, &nbsp;
                                {orderTracking.city ? orderTracking.city:'-'}, &nbsp;
                                {orderTracking.state ? orderTracking.state:'-'} &nbsp;
                                {orderTracking.pincode ? orderTracking.pincode:'-'}
                            </p>
                            <div className="d-flex justify-content-between my-2">
                                <p>
                                    <span className="xSmallText">Vehicle No. : </span>
                                    <span className="smallText font-weight-bold">{orderTracking.vehicleNo ? orderTracking.vehicleNo:'-'}</span> 
                                </p>
                                <p>
                                    <span className="xSmallText">Distance : </span>
                                    <span className="smallText font-weight-bold">{orderTracking.distance ? orderTracking.distance:'-'} </span>
                                </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <ThemeButton type="button" wrapperClass="btn activeBgColor col-md-5 mr-2 fontStyle font-weight-bold smallText text-white py-2" iconName="eye" iconColor="white" label="View Order" onClick={()=>this.setState({viewOrder:true})}/>
                                <ThemeButton type="button" wrapperClass="btn borderStyle col-md-5 fontStyle smallText fontColor font-weight-bold" iconName="deliverytruck" label="Track" onClick={()=>this.setState({pageContent:'viewTrack'})} />
                            </div>
                        </div>
                    ))}
                </div>
          </ Row>
        )
    }

    // Render tracking map function
    renderTrackingMap() {
        return(
           <Row>
                <iframe className="rounded" title="trackingMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.784315453984!2d77.75704701526998!3d12.985642618082496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0e0fce86ff1d%3A0x9a769d0e3300b8d8!2sMARVEL%20SEQUOIA%20Apartments!5e0!3m2!1sen!2sin!4v1613451372467!5m2!1sen!2sin" width="98%" height="580" frameBorder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabIndex="0"></iframe>    
           </Row>
        )
    }

    // Render track details function

    renderTrackDetails() {
        return(
            <div className="shadow-sm rounded bg-white p-3 my-3">
                <div className="d-flex justify-content-between">
                    <div className="col-md-9 row">
                        <Avatar variant="rounded"  alt="Avtar" src={Avtar}   style={{ alignSelf:'center' }} className="w-25 h-60"/>
                        <span className="smallText p-2 text-justify">{this.state.driverName? this.state.driverName:'Arun Kumar'}<br/>
                        <Icomoon icon="telephone" className="fontColor" size={12}/>
                        <span className="smallText p-2 fontColor"> {this.state.phoneNumber? this.state.phoneNumber:'+91 98898909978'}</span>
                        </span>
                    </div>
                    <p className="fontColor smallText">{this.state.trackingId ? this.state.trackingId:'12345678'}</p>
                </div>
                <p className="font-weight-bold smallText text-left my-0">{this.state.houseName ? this.state.houseName:'MARVEL HEAVEN'},</p>
                <p className="smallText text-left my-0">{this.state.street ? this.state.street:'Rajaji nagar main road'},</p>
                <p className="smallText text-left my-0">
                    {this.state.area ? this.state.area:'Rajaji Nagar'}, &nbsp;
                    {this.state.city ? this.state.city:'Bangalore'}, &nbsp;
                    {this.state.state ? this.state.state:'Karnataka'} &nbsp;
                    {this.state.pincode ? this.state.pincode:'560023'}
                </p>
                <div className="d-flex justify-content-between my-2">
                    <p>
                        <span className="xSmallText">Vehicle No. : </span>
                        <span className="smallText font-weight-bold">{this.state.vehicleNo ? this.state.vehicleNo:'KA037889'}</span> 
                    </p>
                    <p>
                        <span className="xSmallText">Distance : </span>
                        <span className="smallText font-weight-bold">{this.state.distance ? this.state.distance:'12 km'} </span>
                    </p>
                </div>
                <div className="d-flex justify-content-between">
                    <ThemeButton type="submit" wrapperClass="btn activeBgColor col-md-5 mr-2 fontStyle font-weight-bold smallText text-white py-2" iconName="eye" iconColor="white" label="View Order" onClick={()=>this.setState({viewOrder:true})}/>
                </div>
            </div>
        )
    }

    // Render view popup details
    renderViewDetails() {
		const { cardInfo } = this.state;
		return( 
			<div className="position-absolute mt-5 pt-5" style={{top:'1px', right:'1px'}}>
				<div className="d-flex justify-content-end align-item-end mr-0">
					<Alert show={this.state.viewOrder} className="col-md-10 px-0 shadow border bg-white borderRadius" >
                        <div className="d-flex justify-content-between p-2">
                            <ThemeButton type="button" wrapperClass="btn btn-outline-secondary  ml-2 fontStyle font-weight-bold smallText py-2" iconName="tick" iconSize={15} label="Mark Complete"/>
                            <div className="col-md-4">
                                <Icomoon icon="task" className="mr-3 pointer" size={20} color="#F57921"/>
                                <Icomoon icon="delete" className="mr-3 pointer" size={20} color="#F57921"/>
                                <Icomoon icon="close" className="pointer" size={20} color="#F57921" onClick={()=> this.setState({viewOrder:false})}/>
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
	
    // Render data for popup 
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

export default Track