// User page
import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Icomoon from '../../../libraries/Icomoon';
import CreateAccountButton from './CreateAccountButton';
import DataTable from '../../../common/DataTable';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import addActivities from '../../../assets/images/addLead.svg';
import modalImg from '../../../assets/images/modal.svg'
import Alert from "react-bootstrap/Alert";
import ConfirmModal from '../../../common/ConfirmModal';
import ToastMessage from '../../../common/ToastMessage';
import Modal from 'react-bootstrap/Modal'
import {CustomInput, ThemeButton} from '../../../common/Components';

class User extends React.Component {
    state={
        columnDataState:[],
        rowDataState:[],
        userData:[],
        // Toast message , edit , delete
        toastEditSuccess:false,
        toastDeleteSuccess:false,
        toastMessageSuccess:false,
        // Modal edit, delete msg
        editPopup:false,
        deleteModal:false,
        msgModal:false,
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
                        <button className="button-none"><Icomoon className="pointer" icon="vmore" size={20} /></button>
                    </OverlayTrigger>
                </div>
              ),
            },
            {field: 'name', headerName:'Name', width: 150 }, 
            {field: 'phone' , headerName:'Phone', width: 150  }, 
            {field: 'email' , headerName:'Email', width: 150 }, 
            {field: 'department' , headerName:'Department', width: 150 }, 
            {field: 'company' , headerName:'Company', width: 150 }, 
            {field: 'createDate' , headerName:'Create Date', width: 150},
            {field: 'lastModifiedDate', headerName:'Last Modified Date', width: 200}
        ]
    
        const rowDataState =[
            { 
                id: 1, 
                name:'Jeni',
                phone:'+91 9887654323',
                email:'jeni@gmail.com' ,
                department:'IT',
                company:'IBM',
                createDate:'20/12/2020',
                lastModifiedDate:'21/1/2021'
            },
            { 
                id: 2, 
                name:'Priya',
                phone:'+91 8987654321',
                email:'priya@gmail.com',
                department:'Finance',
                company:'Aiknow',
                createDate:'20/12/2020',
                lastModifiedDate:'21/1/2021'
            }
        ]
        this.setState({columnDataState,rowDataState })
    }
     // Render Menu function for data table data 
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
      )};
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
                {/* {this.renderCreateUser()} */}
                {this.renderUserDataTable()}
                {this.renderEditPopup()}
                <ConfirmModal
					visible={this.state.deleteModal}
					heading="Delete User"
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
    renderCreateUser() {
        return(
            <Container>
                <Row className="ml-4">
                    <CreateAccountButton/>
                </Row>
                <div className="d-flex justify-content-center mt-5">
                    <img className="mt-4"  alt="addActivities" src={addActivities} width="100%" height="430" />
                </div>
                <div className="d-flex justify-content-center">
                    <h3 className="fontStyle activeFontColor">Create User</h3>
                </div>
            </Container>
        )
    }

    // Render User data table
    renderUserDataTable(){
        return(
            <Container>
                <div className="ml-4 d-flex">
                    <CreateAccountButton/>
                    <div className="border col-md-4 bg-white rounded border-secondary d-flex justify-content-between py-2 my-2 mx-3">
                        <input 
                            type="search" 
                            className="no-outline input-style smallText w-75" 
                            placeholder="Name, Department..."
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
                            message="User Deleted successfully"
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
                        <form onSubmit={this.onSubmitEditUser}>
                            <div className="row mt-3 p-2">
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                        First Name
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input 
                                        type="text" 
                                        class="inputField mb-2" 
                                        id="firstName" 
                                        aria-describedby="firstName" 
                                        value={this.state.firstName ? this.state.firstName: 'Jeni'}
                                        onChange={(e)=>this.setState({firstName:e.target.value})}
                                    />  
                                </div>
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                        Last Name
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input 
                                        type="text" 
                                        class="inputField mb-2" 
                                        id="lastName" 
                                        aria-describedby="lastName" 
                                        value={this.state.lastName ? this.state.lastName: 'Priya'}
                                        onChange={(e)=>this.setState({lastName:e.target.value})}
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
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                       Designation
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input 
                                        type="text" 
                                        class="inputField" 
                                        id="designation" 
                                        aria-describedby="designation" 
                                        value={this.state.designation ? this.state.designation: 'Abc'}
                                        onChange={(e)=>this.setState({designation:e.target.value})}
                                    />  
                                </div>
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                       Date of Birth
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input 
                                        type="date" 
                                        class="inputField" 
                                        id="dob" 
                                        aria-describedby="dob" 
                                        value={this.state.dob ? this.state.dob: '01/04/2012'}
                                        onChange={(e)=>this.setState({dob:e.target.value})}
                                    />  
                                </div>
                                <div className="col-md-5">
                                    <p className="my-1 pointer xSmallText text-left">
                                        Date of Joining
                                    </p> 
                                </div>
                                <div className="col-md-7">
                                    <input 
                                        type="date" 
                                        class="inputField" 
                                        id="doj" 
                                        aria-describedby="doj" 
                                        value={this.state.doj ? this.state.doj: 'Abc'}
                                        onChange={(e)=>this.setState({doj:e.target.value})}
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
                                    message="User updated successfully"
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
            id.name.toLowerCase().includes(lowercasedValue) ||  
            id.phone.toLowerCase().includes(lowercasedValue) ||
            id.email.toLowerCase().includes(lowercasedValue) ||
            id.department.toLowerCase().includes(lowercasedValue) ||
            id.company.toLowerCase().includes(lowercasedValue) ||
            id.createDate.toLowerCase().includes(lowercasedValue) ||
            id.lastModifiedDate.toLowerCase().includes(lowercasedValue) 
          );
          console.log('row', rowDataState)
          console.log('prevStat', prevState.rowDataState);
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

     // On submit edit lead function
    onSubmitEditUser = async(e) =>{
        e.preventDefault();
        this.setState({ 
            toastSuccessMessage:true,
        })
    }

    // On submit message lead function
    onSubmitMessage= (e) =>{
        e.preventDefault();
        this.setState({toastMessageSuccess:true})
    }
}

export default User