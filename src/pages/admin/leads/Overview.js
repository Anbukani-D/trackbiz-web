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
import AddField from '../leads/AddField';

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
const popoverHeader = (
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

class Overview extends React.Component {
    state={
        columnDataState:[],
        rowDataState:[],
        lead:[],
        menu: false,
    }
    componentDidMount() {
        const columnDataState = [
            {field: 'icon', headerName:
            <div>
                <OverlayTrigger trigger="click" placement="right" overlay={popoverHeader}>
                    <Icomoon icon="vmore" size={20} />
                </OverlayTrigger>
            </div>,
            width:70,
            renderCell: () => (
                <div>
                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                        <Icomoon  className="pointer"  icon="vmore" size={20} />
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
        
        const rowDataState =[
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

    // Render lead data table
    renderDataTable() {
        return(
            <Container>
                <div className="d-flex mx-4">
                    <div>
                        <CreateLeadButton/>
                    </div>
                    <div className="border col-md-4 bg-white rounded border-secondary d-flex justify-content-between mx-3 my-2">
                        <input type="search" className="no-outline input-style smallText w-75" 
                            placeholder="Lead Name, Company..."
                        />
                        <Icomoon className="align-self-center" icon="search" size={15}/>
                    </div> 
                    <AddField/>
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
                </div>
            </Container>
        )
    }

    // View lead arrow click function
    viewLead=(e)=> {
        e.preventDefault();
        this.props.history.replace('/view-leads');
    }
}


export default Overview