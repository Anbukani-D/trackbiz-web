// Activities Page

import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Icomoon from '../../../libraries/Icomoon';
import CreateAccountButton from './CreateAccountButton';
import DataTable from '../../../common/DataTable';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import {Link} from 'react-router-dom';
import addActivities from '../../../assets/images/addLead.svg'
import ConfirmModal from '../../../common/ConfirmModal';
import ToastMessage from '../../../common/ToastMessage';

class Activities extends React.Component {
    state={
        columnDataState:[],
        rowDataState:[],
        activitiesData:[],
        // Modal delete
        deleteModal:false,
        // Toast delete
        toastDeleteSuccess:false
    }

    componentDidMount () {
        const columnDataState = [
            {field: 'icon', 
            headerName:
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
            {field: 'name', headerName:'Name', width: 150 }, 
            {field: 'department' , headerName:'Department', width: 150 }, 
            {field: 'activity' , headerName:'Activity', width: 150 }, 
            {field: 'createDate' , headerName:'Create Date', width: 150},
            {field: 'lastModifiedDate', headerName:'Last Modified Date', width: 200},
            {field: 'action', headerName:'Action', width:130,

            renderCell: () => (
                <div>
                    <Link className="text-dark" to ="/view-activities">
                        <Icomoon  className="pointer"  icon="rightarrow" size={20}  />
                    </Link>
                </div>
              ),
            },
        ]
    
        const rowDataState =[
            { 
                id: 1, 
                name:'Jeni',
                department:'IT',
                dateTime:'23-02-2020 12:23:34 am',
                activity:'Lead Created',
                createDate:'20/12/2020 12:23:34 am',
                lastModifiedDate:'21/1/2021 12:23:34 am'
            },
            { 
                id: 2, 
                name:'Priya',
                department:'Finance',
                activity:'Lead Created',
                createDate:'20/12/2020 12:23:34 am',
                lastModifiedDate:'21/1/2021 12:23:34 am'
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
           </Popover>
       )
    }
    
    render() {
        return(
            <>
                {/* {this.renderActivities()} */}
                {this.renderActivitiesDataTable()}
                <ConfirmModal
					visible={this.state.deleteModal}
					heading="Delete Lead"
                    delete
                    buttonTitle="Delete"
					title="Are you sure you want to Delete"
					onsubmitConfirm={() => this.handleDelete()}
					handleClose={() => this.setState({ deleteModal: false, })}
				/>    
            </>
        )
    }

    // Render Activities Image page
    renderActivities() {
        return(
            <Container>
                <Row className="ml-4">
                    <CreateAccountButton/>
                </Row>
                <div className="d-flex justify-content-center mt-5">
                    <img className="mt-4"  alt="addActivities" src={addActivities} width="100%" height="430" />
                </div>
                <div className="d-flex justify-content-center">
                    <h3 className="fontStyle activeFontColor">Activities</h3>
                </div>
            </Container>
        )
    }

    // Render Activities Data table page
    renderActivitiesDataTable(){
        return(
            <Container>
                <div className="d-flex ml-4">
                    <div>
                        <CreateAccountButton/>
                    </div>
                    <div className="border col-md-4 bg-white rounded border-secondary d-flex justify-content-between py-2 mx-3 my-2">
                        <input 
                            type="search" 
                            className="no-outline input-style smallText w-75" 
                            placeholder="User Name, Department..."
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
                            message="Activities Deleted successfully"
                            handleClose={()=> this.setState({ toastDeleteSuccess: false })}
                        />
                    </div>
                </div>
            </Container>
        )
    }

    // Search handle function
    _handleSearchChange = (e) => {
        const { value } = e.target;
        const lowercasedValue = value.toLowerCase();
        
        this.setState(prevState => {
            const rowDataState = prevState.rowDataState.filter(id =>
                id.name.toLowerCase().includes(lowercasedValue) ||  
                id.department.toLowerCase().includes(lowercasedValue) ||
                id.activity.toLowerCase().includes(lowercasedValue) ||
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
}

export default Activities