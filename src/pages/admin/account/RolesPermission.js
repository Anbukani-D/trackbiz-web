// Roles and permission page

import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Icomoon from '../../../libraries/Icomoon';
import CreateAccountButton from './CreateAccountButton';
import DataTable from '../../../common/DataTable';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import modalImg from '../../../assets/images/modal.svg'
import Alert from "react-bootstrap/Alert";
import {ThemeButton, CustomInput} from '../../../common/Components';
import addActivities from '../../../assets/images/addLead.svg';

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

class RolePermission extends React.Component {
    state={
        columnDataState:[],
        rowDataState:[],
        rolesData:[],
        permissionData:[],
        viewCardDetails:false,
        role:'Admin',
        user:'Jeni',
        member:'20'
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
            {field: 'role', headerName:'Role', width: 150 }, 
            {field: 'members' , headerName:'Members', width: 150  }, 
            {field: 'createDate' , headerName:'Create Date', width: 150},
            {field: 'lastModifiedDate', headerName:'Last Modified Date', width: 200},
            {field: 'action', headerName:"Action", width:150,
            renderCell: () => (
                <div>
                    <p className="pointer activeFontColor smallText" onClick={()=> this.setState({viewCardDetails:true})}>Permission</p>
                </div>
              ),
            },
        ]
    
        const rowDataState =[
            { 
                id: 1, 
                role:'Admin',
                members:'20',
                createDate:'20/12/2020',
                lastModifiedDate:'21/1/2021',
                action:<span typ="button" className="btn activeFontColor">Permission</span>
            },
            { 
                id: 2, 
                role:'Developer',
                members:'30',
                createDate:'20/12/2020',
                lastModifiedDate:'21/1/2021',
                action:<span typ="button" className="btn activeFontColor">Permission</span>
            }
        ]
        let permissionData = [
            {
                id: 1,
                permission:'Read Orders',
                system:'Account',
                resource:'orders'	
            },
            {
                id: 2,
                permission:'Read Orders',
                system:'Account',
                resource:'orders'	
            },
            {
                id: 3,
                permission:'Read Orders',
                system:'Account',
                resource:'orders'	
            },
            {
                id: 4,
                permission:'Read Endpoints',
                system:'Account',
                resource:'orders'	
            },	
        ];
        this.setState({columnDataState,rowDataState, permissionData:permissionData })
    }
    render() {
        return(
            <>
            {/* {this.renderCreateRole()} */}
                {this.renderRolePermissionDataTable()}
                {this.renderViewDetails()}
            </>
        )
    }

    // Render Image page
    renderCreateRole() {
        return(
            <Container>
                <Row className="ml-4">
                    <CreateAccountButton/>
                </Row>
                <div className="d-flex justify-content-center mt-5">
                    <img className="mt-4"  alt="addActivities" src={addActivities} width="100%" height="430" />
                </div>
                <div className="d-flex justify-content-center">
                    <h3 className="fontStyle activeFontColor">Create Roles & Permission</h3>
                </div>
            </Container>
        )
    }

    // Render Roles and permission data table
    renderRolePermissionDataTable(){
        return(
            <Container>
                <div className="ml-4 d-flex">
                    <CreateAccountButton/>
                    <div className="border col-md-4 bg-white rounded border-secondary d-flex justify-content-between py-2 my-2 mx-3">
                        <input type="search" className="no-outline input-style smallText w-75" 
                            placeholder="Role..."
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

    // Render view details popup 
    renderViewDetails() {
		return( 
			<div className="position-absolute mt-5 pt-5" style={{top:'1px', right:'1px'}}>
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
                        <div className="d-flex justify-content-around">
                            <p className="smallText align-self-center"> Role</p>
                            <div className="col-md-8">
                                <CustomInput  
                                    fieldStyle="outlined"
                                    value={this.state.role}
                                    onChange={(e)=>this.setState({role:e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-around">
                            <p className="smallText align-self-center"> User</p>
                            <div className="col-md-8">
                                <CustomInput  
                                    fieldStyle="outlined"
                                    value={this.state.user}
                                    onChange={(e)=>this.setState({user:e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-around">
                            <p className="smallText align-self-center"> Member</p>
                            <div className="col-md-8">
                                <CustomInput 
                                    fieldStyle="outlined" 
                                    value={this.state.member}
                                    onChange={(e)=>this.setState({member:e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="d-flex ml-3 text-justify mt-3">
                            <span className="col-md-5 xSmallText">
                                List of Permission
                            </span>
                        </div>
                        <div className="d-flex">
                            <div className="col-md-8">
                                <table className="table-fixed table table-responsive xSmallText">
                                    <thead className="font-weight-bold">
                                    <tr>
                                        <th>Permission</th>
                                        <th>System</th>
                                        <th>Resource</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.permissionData.map((permissionData) => (
                                        <tr>
                                            <td>{permissionData.permission}</td>
                                            <td>{permissionData.system}</td>
                                            <td>{permissionData.resource}</td>
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
	
    // Render view details Pop up data 
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

export default RolePermission