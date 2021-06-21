// View lead page

import React from 'react';
import { Layout } from '../../../common/Components';
import '../../../css/common.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Icomoon from "../../../libraries/Icomoon";
import '../../../css/common.css'
import CompanyLogo from '../../../assets/images/company.svg';
import '../../../css/menu.css'
import Profile from '../../../pages/general/Profile';
import Notification from "../../../pages/general/Notification";
import Settings from "../../../pages/general/Settings";
import Popover from "react-bootstrap/Popover";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Avtar from "../../../assets/images/avtar.png"
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';
import {CustomInput} from '../../../common/Components';
import trackIcon from '../../../assets/images/trackicon.svg';
import CKEditor from 'ckeditor4-react';
import Message from '../../general/Message';
import Call from '../../general/Call';


const notificationPopover = (
    <Popover id="popover-notification">
        <Notification/>
    </Popover>
);

const settingPopover = (
    <Popover id="popover-setting">
        <Settings/>
    </Popover>
);

class ViewLeads extends React.Component {
    state={   
        menu:'',
        viewLeads:[]
    }
    componentDidMount() {
		let viewLeads = [
			{
                id: 1,
                content:'You have initiated transaction of dummy text will dummy text update you soon. You have initiated transaction of dummy text will dummy text update you soon.',
                date:'2020-04-20',
                time:'2.13 pm',
                mail:'Cold mail'
			},
			{
                id: 2,
                content:'You have initiated transaction of dummy text INR will dummy text  update you soon. You have initiated transaction of dummy text will dummy text update you soon.',
                date:'2020-04-20',
                phone:'+91 9887656787',
                time:'2.13 pm',
                mail:'Cold mail'
            },
            {
                id: 3,
                content:'You have initiated transaction of dummy text INR will update you soon. You have initiated transaction of dummy text will dummy text update you soon.',
                date:'2020-04-20',
                phone:'+91 9887656787',
                time:'2.13 pm',
                mail:'Cold mail'
            }
            
		];
		this.setState({viewLeads: viewLeads});
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
                                <p className="normalText fontColor text-left">View Leads</p>
                            </div>
                            <Nav.Link className="mr-2">
                                <OverlayTrigger trigger="click" placement="bottom-end" overlay={notificationPopover} id="popover-notification">
                                    <Icomoon icon="rnotification" size={22} className="align-self-center"/>
                                </OverlayTrigger>
                            </Nav.Link>
                            <Nav.Link className="mr-2">
                                <OverlayTrigger trigger="click" placement="bottom-end" overlay={settingPopover} id="popover-setting">
                                    <Icomoon icon="gear" color="" size={22} className="align-self-center"/>
                                </OverlayTrigger>
                            </Nav.Link>
                            <Nav.Link className="mr-2">
                                <Profile/>
                            </Nav.Link>
                        </Nav>
                    </Navbar>
                </div>
                {this.renderViewLeads()}
            </Layout>
        )
    }

    // Render view lead function
    
    renderViewLeads(){
        return(
            <Container>
                <Row className="ml-4">
                    <div className="rounded bg-white p-2 ml-3 row shadow">
                        <Message/>
                        <Call/>
                    </div>
                </Row>
                <Row>
                    <div className="col-md-6 mt-3 justify-content-start">
                        <div className="col-md-12 borderRadius bg-white py-4" style={{height:550}}>
                            <Row className="px-5">
                                <Avatar variant="rounded"  alt="Avtar" src={Avtar}   style={{ alignSelf:'center', width:55, height:55 }}/>
                                <div className="col-md-10 d-flex justify-content-between">
                                    <p className="smallText text-justify mt-2">
                                        <span className="font-weight-bold">{this.state.name? this.state.name:'Jennifer'}</span><br/>
                                        <span>{this.state.designation ? this.state.designation:'Founder of PeepTeek'}</span><br/>
                                        <span>Contact Date {this.state.date? this.state.date:'Jan 28, 2020'}</span>
                                    </p>
                                    <p className="smallText text-justify mt-2">
                                        <span className="font-weight-bold">{this.state.email? this.state.email:'Jennifer@gmail.com'}</span><br/>
                                        <span>{this.state.contactNo ? this.state.contactNo:'+91 9887676789'}</span><br/>
                                    </p>
                                </div>
                            </Row>
                            <Row className="my-0 py-0 px-5">
                                <div className="border-left borderWidth rounded scrollStyle" style={{height:420}}>
                                    {this.state.viewLeads.map((viewLeads) => (
                                        <div className="mx-0 row"  key={viewLeads.id}>
                                            <div className="col-md-1  border-left leftBorderStyle"> 
                                                <hr className="bg-dark pl-3 mt-4"></hr> 
                                            </div>
                                            <div className="col-md-11">
                                                <p className="smallText my-0 py-0 text-dark text-justify">{viewLeads.content} </p>
                                                <div className='col-md-9 d-flex justify-content-between ml-0 pl-0 mt-2'>
                                                    <p className="xSmallText">{moment(viewLeads.date).format('DD-MM-YYYY HH:mm:ss a')}</p>
                                                    <p className="xSmallText">{viewLeads.time}</p>
                                                    <p className="xSmallText">{viewLeads.mail}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="position-absolute" style={{left:40}} >
                                        <img  className="d-flex justify-content-start" src ={trackIcon} alt="track"/>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </div>
                    <div className="col-md-6 my-3 justify-content-start">
                        <div className="col-md-12 borderRadius bg-white px-0 mx-0" style={{height:550}}>
                            <div className="activeBgColor" style={{borderTopLeftRadius:15,borderTopRightRadius:15}}>
                                <p className="text-white py-2 pl-3 text-left">Send Mail</p>
                           </div>  
                           <div className="px-3">
                                <CustomInput  
                                    placeholder="To"
                                    value={this.state.email}
                                    onChange={(e)=>this.setState({email:e.target.value})}
                                />
                                <CustomInput  
                                    placeholder="Subject"
                                    value={this.state.subject}
                                    onChange={(e)=>this.setState({subject:e.target.value})}
                                />
                                <div className="d-flex justify-content-start bg-success" >
                                    <CKEditor className="border-0" data="Compose mail"  config={{toolbarLocation:'bottom'}}/>
                                </div>
                                {/* <Row className="p-3">
                                    <ThemeButton type="submit" wrapperClass="btn activeBgColor col-md-3 fontStyle font-weight-bold smallText  fontColor py-" label="Send"/>
                                </Row> */}
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        )
    }
}

export default ViewLeads


