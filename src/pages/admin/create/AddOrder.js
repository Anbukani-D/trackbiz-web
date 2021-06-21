// Add order Modal
import React from 'react';
import "../../../css/common.css";
import {ThemeButton, CustomInput, CustomSelect} from "../../../common/Components";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../../libraries/Icomoon';
import { assignRepresentativeOptions, billingLocationOptions, orderSiteOptions, deliveryLocationOptions } from '../../../common/DropdownList';
import LoadingBar from 'react-top-loading-bar';
import ToastMessage from '../../../common/ToastMessage';

class AddOrder extends React.Component {
    state={
        customerName:'',
        orderSite:'',
        billingLocation:'',
        deliveryLocation:'',
        assignRepresentative:'',
        quantity:'',
        addOrderModal:false,
        productData:[],
        progress:'',
        toastSuccessMessage:false
    }

    componentDidMount() {
		let productData = [
			{
                id: 1,
                productCode:'DR20215',
                productName:'Door',
                qty:'3',	
			},
            {
                id: 2,
                productCode:'DR20211',
                productName:'Door',
                qty:'5',	
			},
            {
                id: 3,
                productCode:'DR20210',
                productName:'Door',
                qty:'4',	
			},
            {
                id: 4,
                productCode:'DR20218',
                productName:'Window',
                qty:'6',
			},
			
		];
		this.setState({productData: productData});
	}

    render() {
        return (
            <>
                <p className="smallText my-0" style={{cursor:'pointer'}} onClick={()=>{this.setState({addOrderModal:true})}}>Add Order</p>    
                {this.renderAddOrderModal()}
            </>
        )
    }

    // Render add Order modal function

    renderAddOrderModal() {
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.addOrderModal}
            >    
                <LoadingBar
                    color='#002173'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({progress:100})}
                /> 
                <div className="m-3">
                    <div className="d-flex justify-content-between">
                        <h3 className="fontStyle fontColor pl-3">Add Order</h3>
                       <Icomoon icon="close" size={20} className="pointer activeFontColor" onClick={()=>{this.setState({addOrderModal:false})}}/>
                    </div>
                    <Modal.Body>
                        <form onSubmit={this.onSubmitAddOrder}>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Customer Name*" 
                                    value={this.state.customerName}
                                    onChange={(e)=>this.setState({customerName:e.target.value})}
                                />
                            </div>
                            <div className="mt-3">
                                <CustomSelect
                                    placeholder="Order Site*" 
                                    value={this.state.orderSite}
                                    onChange={(e)=>this.setState({orderSite:e.target.value})} 
                                    options={orderSiteOptions}
                                />
                            </div>
                            <div className="mt-3">
                                <CustomSelect 
                                    placeholder="Billing Location*" 
                                    value={this.state.billingLocation}
                                    onChange={(e)=>this.setState({billingLocation:e.target.value})}
                                    options={billingLocationOptions}
                                />
                            </div>
                            <div className="mt-3">
                                <CustomSelect
                                    placeholder="Delivery Location*" 
                                    value={this.state.deliveryLocation}
                                    onChange={(e)=>this.setState({deliveryLocation:e.target.value})}
                                    options={deliveryLocationOptions}
                                />
                            </div>
                            <div className="mt-3">
                                <CustomSelect 
                                    placeholder="Assign Representative" 
                                    value={this.state.assignRepresentative}
                                    onChange={(e)=>this.setState({assignRepresentative:e.target.value})}
                                    options={assignRepresentativeOptions}
                                />  
                            </div> 
                            <div className="mt-3">
                            <div className="border col-md-12 bg-white rounded border-secondary d-flex justify-content-between py-2 ml-0">
                                <input 
                                    type="search" 
                                    className="no-outline input-style smallText w-75" 
                                    onChange={this._handleSearchChange}
                                    placeholder="PRODUCT CODE, PRODUCT NAME..."
                                />
                                <Icomoon className="align-self-center" icon="search" size={15}/>
                            </div>  
                                <table className="table-fixed table table-responsive" >
                                    <thead>
                                    <tr>
                                        <th>Product code</th>
                                        <th>Product Name</th>
                                        <th>Qty</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.productData.map((productData) => (
                                        <tr>
                                            <td>{productData.productCode}</td>
                                            <td>{productData.productName}</td>
                                            <td>{productData.qty}</td>
                                        
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div> 
                            <div className="d-flex justify-content-center">
                                <ToastMessage 
                                    toastMessagePop={this.state.toastSuccessMessage}
                                    message="Order created successfully"
                                    handleClose={()=> this.setState({ toastSuccessMessage: false })}
                                />
                            </div>                       
                            <ThemeButton type="submit" wrapperClass="btn activeBgColor col-md-12 fontStyle mt-3 py-2 megaText fontColor" label="Save Order" />
                        </form> 
                    </Modal.Body>
                </div>
            </Modal>  
        )    
    } 
    _handleSearchChange = (e) => {
        const { value } = e.target;
        const lowercasedValue = value.toLowerCase();
        
        this.setState(prevState => {
          const productData = prevState.productData.filter(id =>
            id.productCode.toLowerCase().includes(lowercasedValue) ||  
            id.productName.toLowerCase().includes(lowercasedValue) ||
            id.qty.toLowerCase().includes(lowercasedValue)
            
          );
          return { productData };
        });
       
      };


    // onsubmit function for add order inputs

    onSubmitAddOrder= (e) =>{
        e.preventDefault();
        this.setState({progress:100, toastSuccessMessage:true})
    }
}
export default AddOrder;