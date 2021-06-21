// Vehicle management page

import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Icomoon from '../../../libraries/Icomoon';
import CreateSalesButton from './CreateSalesButton';
import DataTable from '../../../common/DataTable';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import addActivities from '../../../assets/images/addLead.svg';
import modalImg from '../../../assets/images/modal.svg'
import Alert from "react-bootstrap/Alert";
import Modal from 'react-bootstrap/Modal'
import {CustomInput, ThemeButton} from '../../../common/Components';
import ConfirmModal from '../../../common/ConfirmModal';
import ToastMessage from '../../../common/ToastMessage';


class VehicleManagement extends React.Component {
    state={
        columnDataState:[],
        rowDataState:[],
        vehicleManagementData:[],
        
        // Toast message , edit , delete
        toastEditSuccess:false,
        toastDeleteSuccess:false,
        toastMessageSuccess:false,
        
        // Modal edit, delete, msg, view
        editPopup:false,
        deleteModal:false,
        msgModal:false,
    }

    componentDidMount () {
        const columnDataState = [
            {field: 'icon', headerName:
            <div>
                <OverlayTrigger trigger="focus" placement="right" overlay={this.popoverHeader()}>
                    <button className="button-none"><Icomoon icon="vmore" size={20} /></button>
                </OverlayTrigger>
            </div>,
            width:95,
            renderCell: (data) => (
                <div>
                    <OverlayTrigger trigger="focus" placement="right" overlay={this.popover(data.id)}>
                        <button className="button-none"><Icomoon  className="pointer"  icon="vmore" size={20} /></button>
                    </OverlayTrigger>
                </div>
                ),
            },
            {field: 'driverName', headerName:'Driver Name', width: 150 }, 
            {field: 'vehicleName' , headerName:'Vehicle Name', width: 150 }, 
            {field: 'vehicleNo' , headerName:'Vehicle No.', width: 150 },
            {field: 'licenceNo' , headerName:'Licence No.', width: 150 },
            {field: 'insuranceExpiryDate' , headerName:'Insurance Expiry Date', width: 150},
            {field: 'contactNo' , headerName:'Contact No.', width: 150  },  
            {field: 'createDate' , headerName:'Create Date', width: 150},
            {field: 'lastModifiedDate', headerName:'Last Modified Date', width: 200}
        ]
    
        const rowDataState =[
            { 
                id: 1, 
                driverName:'John',
                vehicleName:'Ace Gold',
                vehicleNo:'KA03M101',
                licenceNo:'TN09978675654544',
                insuranceExpiryDate:'20/12/2020 11:50:43 am',
                contactNo:'+91 9887654323',
                createDate:'20/12/2020 11:50:43 am',
                lastModifiedDate:'21/1/2021 11:50:43 am'
            },
            { 
                id: 2, 
                driverName:'Kumar',
                vehicleName:'Ultra MHCQ',
                vehicleNo:'KA03M104',
                licenceNo:'TN09978675654544',
                insuranceExpiryDate:'20/12/2020 11:50:43 am',
                contactNo:'+91 8987654321',
                createDate:'20/12/2020 11:50:43 am',
                lastModifiedDate:'21/1/2021 11:50:43 am'
            }
        ]
        this.setState({columnDataState,rowDataState })
    }

    // Render menu row function for data table data 
    popover = (id)=> {
        return (
            <Popover id="popover-basic" className="border-0 p-3" >
                <p className="my-1 pointer xSmallText" onClick={()=>this.setState({deleteModal:true})}>
                    <Icomoon className="mr-2" icon="delete" size={12} />
                    Delete
                </p>
                <p className="my-1 pointer xSmallText" onClick={()=>this.setState({editPopup:true})}>
                    <Icomoon className="mr-2" icon="edit" size={12}/>
                    Edit
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

    // Render menu header function for data table header
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
                {/* {this.renderCreateVehicle()} */}
                {this.renderVehicleManagementDataTable()}
                {this.renderEditPopup()}
                <ConfirmModal
					visible={this.state.deleteModal}
					heading="Delete Vehicle"
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

    // Render image page
    renderCreateVehicle() {
        return(
            <Container>
                <Row className="ml-4">
                    <CreateSalesButton/>
                </Row>
                <div className="d-flex justify-content-center mt-5">
                    <img className="mt-4"  alt="addActivities" src={addActivities} width="100%" height="430" />
                </div>
                <div className="d-flex justify-content-center">
                    <h3 className="fontStyle activeFontColor">Add Vehicle</h3>
                </div>
            </Container>
        )
    }

    // Render vehicle management data table page
    renderVehicleManagementDataTable(){
        return(
            <Container>
                <div className="ml-4 d-flex">
                    <div>
                        <CreateSalesButton/>
                    </div>
                    <div className="border col-md-4 bg-white rounded border-secondary d-flex justify-content-between py-2 my-2 mx-3">
                        <input 
                            type="search" 
                            className="no-outline input-style smallText w-75" 
                            placeholder="Driver Name..."
                            onChange={this._handleSearchChange}
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
                    <div className="d-flex justify-content-center">
                        <ToastMessage 
                            toastMessagePop={this.state.toastDeleteSuccess}
                            message="Vehicle data Deleted successfully"
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

    // Search handle function
    _handleSearchChange = (e) => {
        const { value } = e.target;
        const lowercasedValue = value.toLowerCase();
        this.setState(prevState => {
            const rowDataState = prevState.rowDataState.filter(id =>
                id.driverName.toLowerCase().includes(lowercasedValue) ||  
                id.vehicleName.toLowerCase().includes(lowercasedValue) ||
                id.vehicleNo.toLowerCase().includes(lowercasedValue) ||
                id.licenceNo.toLowerCase().includes(lowercasedValue) ||
                id.insuranceExpiryDate.toLowerCase().includes(lowercasedValue) ||
                id.contactNo.toLowerCase().includes(lowercasedValue) ||
                id.createDate.toLowerCase().includes(lowercasedValue) ||
                id.lastModifiedDate.toLowerCase().includes(lowercasedValue) 
            );
            return { rowDataState };
        });   
    };

    // Render edit vehicle popup details
    renderEditPopup() {
        return( 
            <div className="position-absolute" style={{top:'1px', right:'1px'}}>
                <div className="d-flex justify-content-end align-items-end mt-5 mr-0">
                    <Alert show={this.state.editPopup} className="col-md-4 shadow border bg-white borderRadius">
                        <div className="d-flex justify-content-between p-2">
                            <div className="col-md-7 row">
                                <p className="my-1 pointer smallText mr-2">
                                    <Icomoon className="mr-2" icon="telephone" size={12}/>
                                    Call
                                </p>
                                <p className="my-1 pointer xSmallText" onClick={()=>{this.setState({msgModal:true})}}>
                                    <Icomoon className="mr-2" icon="chat" size={12}/>
                                    Msg
                                </p> 
                            </div>
                            <div className="col-md-4">
                                <Icomoon icon="delete" className="mr-3 pointer" size={20} color="#F57921" onClick={()=>this.setState({deleteModal:true})}/>
                                <Icomoon icon="close" className="pointer" size={20} color="#F57921" onClick={()=> this.setState({editPopup:false})}/>
                            </div>  
                        </div>
                        <hr></hr>
                        <form onSubmit={this.onSubmitEditVehicle}>
                            <div className="row mt-3 p-2">
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                        Driver Name
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input type="text" 
                                        class="inputField mb-2" 
                                        id="driverName" 
                                        aria-describedby="driverName" 
                                        value={this.state.driverName ? this.state.driverName: 'Arun'}
                                        onChange={(e)=>this.setState({driverName:e.target.value})}
                                    />  
                                </div>
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                        Vehicle Name
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input type="text" 
                                        class="inputField" 
                                        id="vehicleName" 
                                        aria-describedby="vehicleName" 
                                        value={this.state.vehicleName ? this.state.vehicleName: 'Ace gold'}
                                        onChange={(e)=>this.setState({vehicleName:e.target.value})}
                                    />  
                                </div>
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                        Vehicle No.
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input type="text" 
                                        class="inputField" 
                                        id="vehicleNo" 
                                        aria-describedby="vehicleNo" 
                                        value={this.state.vehicleNo ? this.state.vehicleNo: 'KA027556'}
                                        onChange={(e)=>this.setState({vehicleNo:e.target.value})}
                                    />  
                                </div>
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                        Licence No.
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input type="text" 
                                        class="inputField" 
                                        id="licenceNo" 
                                        aria-describedby="licenceNo" 
                                        value={this.state.licenceNo ? this.state.licenceNo: 'KA123455544'}
                                        onChange={(e)=>this.setState({licenceNo:e.target.value})}
                                    />  
                                </div>
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                        Insurance Expiry
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input 
                                        type="date" 
                                        class="inputField" 
                                        id="insuranceExpiryDate" 
                                        aria-describedby="insuranceExpiryDate" 
                                        value={this.state.insuranceExpiryDate ? this.state.insuranceExpiryDate: '24/07/2024'}
                                        onChange={(e)=>this.setState({insuranceExpiryDate:e.target.value})}
                                    />  
                                </div>
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                        phone
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input type="number" 
                                        class="inputField" 
                                        id="contactNo" 
                                        aria-describedby="contactNo" 
                                        value={this.state.contactNo ? this.state.contactNo: '9188765765665'}
                                        onChange={(e)=>this.setState({contactNo:e.target.value})}
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
                                    message="Vehicle data updated successfully"
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

    // On submit delete vehicle function
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

    // On submit edit vehicle function
    onSubmitEditVehicle = async(e) =>{
        e.preventDefault();
        this.setState({ 
            toastEditSuccess:true,
        })
    }

    // On submit message vehicle function
    onSubmitMessage= (e) =>{
        e.preventDefault();
        this.setState({toastMessageSuccess:true})
    }

}

export default VehicleManagement