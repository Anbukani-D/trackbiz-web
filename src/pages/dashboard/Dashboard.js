// Dashboard page

import React from 'react';
import { Layout, NotificationIcon } from '../../common/Components';
import '../../css/common.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Icomoon from "../../libraries/Icomoon";
import '../../css/common.css'
import CompanyLogo from '../../assets/images/company.svg';
import '../../css/menu.css'
import Profile from '../general/Profile';
import Settings from "../general/Settings";
import Popover from "react-bootstrap/Popover";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import LeadGraph from './LeadGraph';
import LeadStatus from './LeadStatus';
import Row from 'react-bootstrap/Row';
import InventoryGraph from './InventoryGraph';
import { Bar  } from '@reactchartjs/react-chart.js'
import CircularProgressBar from './CircularProgressBar';

const data = {
    labels: ['1w', '2w', '3w', '4w', '5w', '6w', '7w'],
    datasets: [
        {
            title:{
                display:false
            },
            data: [20, 30, 40, 50, 20, 10],
            backgroundColor: '#002173',
        },
    ],
}

const options = {
    scales: {
        yAxes: [
            {
            ticks: {
                beginAtZero: true,
                },
            },
        ],
    },
    legend: {
        display: false,
    }
}

const settingPopover = (
    <Popover id="popover-setting">
        <Settings/>
    </Popover>
);

class Dashboard extends React.Component {  
    state = {
        partialDelivered: "133",
        orderTransit:'73',
        orderProcessing:'33',
        orderDelay:'139',
    };
    
    render() {
        return(
            <Layout>
                <div className="col-md-11 pl-0 mx-0" id="content">
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
                                        <Tab eventKey= "overview" title="Overview" />
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
                {this.renderMainContent()}
            </Layout>
        )
    }

    // Render Main content
    renderMainContent() {
        return(
            <Container>
                <Col className="d-flex justify-content-start">
                    <p>
                        <span className="normalText activeFontColor"><i>i</i></span>
                        <span className="xSmallText ml-3 align-self-center pt-3">Overview for past 30 days</span>
                    </p>
                </Col>
                <Row className="d-flex">
                    <Col md={5} className="btn my-3" onClick={()=>{this.props.history.replace("/leads")}}>
                        <LeadGraph/>
                    </Col>
                    <Col md={4} className="btn my-3" onClick={()=>{this.props.history.replace("/leads")}}>
                        <LeadStatus/>
                    </Col>
                    <Col md={3} className="btn my-3" onClick={()=>{this.props.history.replace("/inventory")}}>
                        <InventoryGraph/>
                    </Col>
                </Row>
                <Row className="d-flex">
                    <Col md={3} className="btn mt-3" onClick={()=>{this.props.history.replace("/inventory")}}>
                        {this.renderOrderDetails()}
                    </Col>
                    <Col md={4} className="btn mt-3" onClick={()=>{this.props.history.replace("/sales")}}>
                        {this.renderCompanySales()}
                    </Col>
                </Row> 
            </Container>
        )
    }

    // Render order details pie chart

    renderOrderDetails() {
        return(
            <div className="col-md-12 bg-white borderRadius p-3">
                <div className="d-flex justify-content-between">
                    <OverlayTrigger
                        placement="bottom"
                        overlay={
                            <Tooltip>
                                <p className="smallText my-0 font-weight-bold text-left">Order Details</p>
                                <p className="xSmallText my-0 text-left">Here it will show the<br/> details of the order <br/>placed from inventory.</p>
                            </Tooltip>
                        }
                    >
                        <p className="smallText fontColor font-weight-bold text-left my-0 hoverStyle pointer">Order Details</p>
                    </OverlayTrigger>
                </div>
                <div className="d-flex justify-content-around mt-2">
                    <CircularProgressBar
                        strokeWidth="6"
                        wrapperClass="circle-background-blue"
                        progressClass="circle-progress-blue"
                        sqSize="90"
                        label="Partial Delivered"
                        data={this.state.partialDelivered}
                    />
                    <CircularProgressBar
                        strokeWidth="6"
                        wrapperClass="circle-background-orange"
                        progressClass="circle-progress-orange"
                        sqSize="90"
                        label="Order Transit"
                        data={this.state.orderTransit}
                    />
                </div>
                <div className="d-flex justify-content-around mt-2">
                    <CircularProgressBar
                        strokeWidth="6"
                        wrapperClass="circle-background-green"
                        progressClass="circle-progress-green"
                        sqSize="90"
                        label="Order Processing"
                        data={this.state.orderProcessing}
                    />
                    <CircularProgressBar
                        strokeWidth="6"
                        wrapperClass="circle-background-red"
                        progressClass="circle-progress-red"
                        sqSize="90"
                        label="Order Delay"
                        data={this.state.orderDelay}
                    />
                </div>
            </div>
        )
    }

    // Render company sales 
    
    renderCompanySales() {
        return(
            <div className="col-md-12 bg-white borderRadius p-3">
                <div className="d-flex justify-content-between">
                    <OverlayTrigger
                        placement="bottom"
                        overlay={
                            <Tooltip>
                                <p className="smallText my-0 font-weight-bold text-left">Company Sale</p>
                                <p className="xSmallText my-0 text-left">Below date are<br/> company sale based <br/>on filter</p>
                            </Tooltip>
                        }
                        >
                        <p className="smallText fontColor font-weight-bold text-left my-0 hoverStyle pointer">Company Sale</p>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="left"
                        overlay={
                            <Tooltip className="bg-white">
                                <p className="smallText my-0 font-weight-bold text-left">Filter</p>
                                <p className="xSmallText my-0 text-left">Weekly</p>
                                <p className="xSmallText my-0 text-left">Monthly</p>
                                <p className="xSmallText my-0 text-left">Yearly</p>
                            </Tooltip>
                        }
                        >
                            <Icomoon icon="gear" color="#F57921" size={25}/> 
                    </OverlayTrigger>
                </div>
                <Bar data={data} options={options} height={60} width={100} />
            </div>
        )
    }
}
  
export default Dashboard

  
  
  