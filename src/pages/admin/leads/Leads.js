// Lead tab navigation page

import React from 'react';
import { Layout, NotificationIcon } from '../../../common/Components';
import Overview from './Overview';
import Digitalization from './Digitalization';
import '../../../css/common.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Icomoon from "../../../libraries/Icomoon";
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

class Leads extends React.Component {
    state={   
        menu:''
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
                            <div className="col-md-11">
                                <div className="col-md-12">
                                    <p className="text-left m-0 p-0 activeFontColor smallText">
                                        {this.state.companyName ? this.state.companyName:'Dezign Code'}
                                    </p>
                                </div> 
                                <Tabs 
                                    className="smallText"
                                    defaultActiveKey="overview"
                                    id="controlled-tab-example"
                                    onSelect={(menu) => this.setState({menu})}
                                >
                                    <Tab eventKey="overview" title="Overview"/>
                                    <Tab eventKey= "digitalization" title="Digitalization" />
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
                {this.state.menu=== "digitalization" ? <Digitalization/>: <Overview/> }
            </Layout>
        )
    }
}

export default Leads


