  // Lead overview page

import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Icomoon from '../../../libraries/Icomoon';
import CreateLeadButton from './CreateLeadButton';
import addLead from "../../../assets/images/addLead.svg";
import DataTable from '../../../common/DataTable';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Link } from 'react-router-dom';
import modalImg from '../../../assets/images/modal.svg'
import Alert from "react-bootstrap/Alert";
import ConfirmModal from '../../../common/ConfirmModal';
import ToastMessage from '../../../common/ToastMessage';
import Modal from 'react-bootstrap/Modal'
import {CustomInput, ThemeButton} from '../../../common/Components';


class Overview extends React.Component {
    state={
        columnDataState:[],
        rowDataState:[],
        // Toast message , edit , delete
        toastEditSuccess:false,
        toastDeleteSuccess:false,
        toastMessageSuccess:false,
        // Modal edit, delete msg
        editPopup:false,
        deleteModal:false,
        msgModal:false,
    }

    componentDidMount() {
        let columnDataState = [
            {field: 'icon', headerName:
            <div>
                <OverlayTrigger trigger="focus" placement="right" overlay={this.PopoverHeader()}>
                   <button className="button-none"><Icomoon  className="pointer"  icon="vmore" size={20} /></button>
                </OverlayTrigger>
            </div>,
            width:95,
            renderCell: (data, type, row) => (
                <div>
                    <OverlayTrigger trigger='focus' placement="right" overlay={this.popover(data.id)}>
                        <button className="button-none"><Icomoon  className="pointer"  icon="vmore" size={20} /></button>
                    </OverlayTrigger>
                </div>
                ),
            },
            {field: 'name', headerName:'Name', width: 150 }, 
            {field: 'company' , headerName:'Company', width: 150  }, 
            {field: 'type' , headerName:'Type', width: 150 }, 
            {field: 'contactNo' , headerName:'Contact No.', width: 150 }, 
            {field: 'email' , headerName:'Email', width: 150} ,
            {field: 'location' , headerName:'Location', width: 150},
            {field: 'createDate' , headerName:'Create Date', width: 150},
            {field: 'lastModifiedDate', headerName:'Last Modified Date', width: 200},
            {field: 'action', headerName:'Action', width:130,
            renderCell: () => (
                <div>
                    <Link className="text-dark" to ="/view-leads">
                        <Icomoon  className="pointer"  icon="rightarrow" size={20}  />
                    </Link>
                </div>
              ),
            },
        ]
        
        let rowDataState =[
            { 
                id: 1, 
                name: 'Jeni', 
                company:'IBM',
                type:'IT',
                contactNo:'+919887876543', 
                email:'jeni@gmail.com', 
                location:'bangalore' ,
                createDate:'20/12/2020',
                lastModifiedDate:'21/1/2021'
            },
            { 
                id: 2, 
                name: 'Priya', 
                company:'Aiknow',
                type:'Finance',
                contactNo:'+919887878898', 
                email:'jeni@gmail.com' ,
                location:'chennai' ,
                createDate:'20/12/2020',
                lastModifiedDate:'21/1/2021'
            }
        ] 
        this.setState({ rowDataState,  columnDataState }); 
    }
   
    
    render() {
        return(
            <>
                {/* {this.renderCreateOrAddLead()} */}
                {this.renderDataTable()}
                {this.renderEditPopup()}
                <ConfirmModal
					visible={this.state.deleteModal}
					heading="Delete Lead"
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

    renderCreateOrAddLead() {
        return(
            <Container>
                <Row className="ml-4">
                    <CreateLeadButton/>
                </Row>
                <div className="d-flex justify-content-center mt-5">
                    <img className="mt-4"  alt="Login" src={addLead} width="100%" height="430" />
                </div>
                <div className="d-flex justify-content-center">
                    <h3 className="fontStyle activeFontColor">Create or Add Lead</h3>
                </div>
            </Container>
        )
    }
      
    // Render header menu function for data table data 

     PopoverHeader = () => {
        return(
            <Popover id="popover-basic" className="border-0 p-3">
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
      

    // Render lead data table
    renderDataTable() {
        return(
            <Container>
                <div className="d-flex mx-4">
                    <div>
                        <CreateLeadButton/>
                    </div>
                    <div className="border col-md-4 bg-white rounded border-secondary d-flex justify-content-between mx-3 my-2">
                        <input 
                            type="text" 
                            className="no-outline input-style smallText w-75" 
                            placeholder="Lead Name, Company..."
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
                            message="Lead Deleted successfully"
                            handleClose={()=> this.setState({ toastDeleteSuccess: false })}
                        />
                    </div>
                </div>
            </Container>
        )
    }

    
    // Render Edit leads popup details
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
                                <p className="my-1 pointer smallText">
                                    <Icomoon className="mr-2" icon="chat" size={12}/>
                                    Msg
                                </p>
                            </div>
                            <div className="col-md-4">
                                <Icomoon icon="delete" className="mr-3 pointer" size={20} color="#F57921" onClick={()=>this.setState({deleteModal:true})}/>
                                <Icomoon icon="close" className="pointer" size={20} color="#F57921" onClick={()=> this.setState({editPopup:false})}/>
                            </div>  
                        </div>
                        <form onSubmit={this.onSubmitEditLead}>
                            <div className="row mt-3 p-2">
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                        Lead Name
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input type="leadName" 
                                        class="inputField mb-2" 
                                        id="leadName" 
                                        aria-describedby="leadName" 
                                        value={this.state.leadName ? this.state.leadName: 'Jeni'}
                                        onChange={(e)=>this.setState({leadName:e.target.value})}
                                    />  
                                </div>
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                        Email
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input type="email" 
                                        class="inputField" 
                                        id="email" 
                                        aria-describedby="email" 
                                        value={this.state.email ? this.state.email: 'Jeni@gmail.com'}
                                        onChange={(e)=>this.setState({email:e.target.value})}
                                    />  
                                </div>
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                        Phone
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input type="phone" 
                                        class="inputField" 
                                        id="phone" 
                                        aria-describedby="phone" 
                                        value={this.state.phone ? this.state.phone: '98898765434'}
                                        onChange={(e)=>this.setState({phone:e.target.value})}
                                    />  
                                </div>
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                        Lead Source
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input type="leadSource" 
                                        class="inputField" 
                                        id="leadSource" 
                                        aria-describedby="leadSource" 
                                        value={this.state.leadSource ? this.state.leadSource: 'Abc'}
                                        onChange={(e)=>this.setState({leadSource:e.target.value})}
                                    />  
                                </div>
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                        Company
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input type="company" 
                                        class="inputField" 
                                        id="company" 
                                        aria-describedby="company" 
                                        value={this.state.company ? this.state.company: 'Aiknow'}
                                        onChange={(e)=>this.setState({company:e.target.value})}
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
                                    message="Lead updated successfully"
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
            id.company.toLowerCase().includes(lowercasedValue) ||  
            id.name.toLowerCase().includes(lowercasedValue) ||
            id.type.toLowerCase().includes(lowercasedValue) ||
            id.contactNo.toLowerCase().includes(lowercasedValue) ||
            id.email.toLowerCase().includes(lowercasedValue) ||
            id.location.toLowerCase().includes(lowercasedValue) ||
            id.createDate.toLowerCase().includes(lowercasedValue) ||
            id.lastModifiedDate.toLowerCase().includes(lowercasedValue) 
          );
          return { rowDataState };
        });   
    };

    // View lead arrow click function
    viewLead=(e)=> {
        e.preventDefault();
        this.props.history.replace('/view-leads');
    }

    // On submit delete function
    handleDelete = (status) => {
        this.setState({deleteModal:false, toastDeleteSuccess:true})
		// const leadId = this.state.deleteId;
		// deleteLead(leadId).then(response => {
        //     if(response && response.status) {
		// 		console.log(response);
        //         this.setState({deleteModal:false,toastDeleteSuccess:true})
				
        //     }
        // }).catch(error => {
        //     console.log(error);
        // });
    };

    // On submit edit lead function
    onSubmitEditLead = async(e) =>{
        e.preventDefault();
        this.setState({ 
            toastEditSuccess:true,
        })   
    }

    // On submit message lead function
    onSubmitMessage= (e) =>{
        e.preventDefault();
        this.setState({toastMessageSuccess:true})
    }
}

export default Overview
