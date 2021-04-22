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

class VehicleManagement extends React.Component {
    state={
        columnDataState:[],
        rowDataState:[],
        vehicleManagementData:[],
    }

    componentDidMount () {
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

    render() {
        return(
            <>
                {/* {this.renderCreateVehicle()} */}
                {this.renderVehicleManagementDataTable()}
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
                        <input type="search" className="no-outline input-style smallText w-75" 
                            placeholder="Driver Name..."
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

export default VehicleManagement