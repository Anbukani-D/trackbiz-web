// Sales tab navigation page

import React from 'react';
import { Layout, NotificationIcon } from '../../../common/Components';
import '../../../css/common.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Icomoon from "../../../libraries/Icomoon";
import '../../../css/common.css'
import CompanyLogo from '../../../assets/images/company.svg';
import '../../../css/menu.css'
import Profile from '../../../pages/general/Profile';
import Settings from "../../../pages/general/Settings";
import Popover from "react-bootstrap/Popover";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import Customer from './Customer';
import Order from './Order';
import VehicleManagement from './VehicleManagement';

const settingPopover = (
    <Popover id="popover-setting">
        <Settings/>
    </Popover>
);

class Sales extends React.Component {
    state={    
    }

    render() {
        return(
            <Layout>
                <div className="col-md-11" id="content">
                    <Navbar expand="lg" className="flex-grow-1 py-0">
                        <Nav className="menuItems flex-row flex-grow-1">
                            <Nav.Link className="mr-2">
                                <img src={CompanyLogo} alt={CompanyLogo} width='40' height='40'/>
                            </Nav.Link>
                            <div className="activeFontColor col-md-11 smallText"><p className="text-left m-0 p-0">{this.state.companyName ? this.state.companyName:'Dezign Code'}</p>
                                <Tabs 
                                    defaultActiveKey="customer"
                                    id="controlled-tab-example"
                                    onSelect={(menu) => this.setState({menu})}>
                                    <Tab eventKey="customer" title="Customer"/>
                                    <Tab eventKey= "order" title="Order" />
                                    <Tab eventKey="vehicleManagement" title="Vehicle Management"/>
                                </Tabs>
                            </div>
                            <Nav.Link className="mr-2">
                                <NotificationIcon/>
                            </Nav.Link>
                            <Nav.Link className="mr-2">
                                <OverlayTrigger trigger="click" placement="bottom-end" overlay={settingPopover} id="popover-setting">
                                    <Icomoon icon="gear" color="#002173" size={22} className="align-self-center"/>
                                </OverlayTrigger>
                            </Nav.Link>
                            <Nav.Link className="mr-2">
                                <Profile/>
                            </Nav.Link>
                        </Nav>
                    </Navbar>
                </div>
                {this.renderPage()}
            </Layout>
        )
    }

    // Render page function

    renderPage = () => {
        if (this.state.menu === "order") {
            return <Order />;
        } else if (this.state.menu === "vehicleManagement") {
            return <VehicleManagement />;
        } else{
            return<Customer/>
        }
    };
}

export default Sales