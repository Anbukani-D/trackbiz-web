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
const popoverHeader =(
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

class User extends React.Component {
    state={
        columnDataState:[],
        rowDataState:[],
        userData:[],
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
    render() {
        return(
            <>
                {/* {this.renderCreateUser()} */}
                {this.renderUserDataTable()}
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
                        <input type="search" className="no-outline input-style smallText w-75" 
                            placeholder="Name, Department..."
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
}

export default User