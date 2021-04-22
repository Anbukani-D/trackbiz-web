// Dispatch and track tab navigation page

import React from 'react';
import { Layout, NotificationIcon } from '../../../common/Components';
import Overview from './Overview';
import Track from './Track';
import OrderDelivered from './OrderDelivered';
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

const settingPopover = (
    <Popover id="popover-setting">
        <Settings/>
    </Popover>
);

class DispatchTrack extends React.Component {
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
                                    defaultActiveKey="overview"
                                    id="controlled-tab-example"
                                    onSelect={(menu) => this.setState({menu})}>
                                    <Tab eventKey="overview" title="Overview"/>
                                    <Tab eventKey="track" title="Track"/>
                                    <Tab eventKey= "orderDelivered" title="Order Delivered" />
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

    // Render page
    renderPage = () => {
        if (this.state.menu === "track") {
            return <Track />;
        } else if (this.state.menu === "orderDelivered") {
            return <OrderDelivered />;
        } else{
            return<Overview/>
        }
   };
}

export default DispatchTrack