// Account overview page
import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CreateAccountButton from './CreateAccountButton';
import Card from "react-bootstrap/Card";
import Avtar from "../../../assets/images/avtar.png"
import Avatar from '@material-ui/core/Avatar';
import {ThemeButton} from '../../../common/Components';
import addActivities from '../../../assets/images/addLead.svg';
import EditProfile from './EditProfile';
import EditLocation from './EditLocation';
class Overview extends React.Component {
    state={
        companyName:'',
        name:'',
        gstn:'',
        phoneNumber:'',
        email:'',
        address:'',
    }

    render() {
        return(
            <>
                {/* {this.renderAccountOverview()} */}
                {this.renderOverview()}
            </>
        )
    }

    // Render image page
    renderAccountOverview() {
        return(
            <Container>
                <Row className="ml-4">
                    <CreateAccountButton/>
                </Row>
                <div className="d-flex justify-content-center mt-5">
                    <img className="mt-4"  alt="addActivities" src={addActivities} width="100%" height="430" />
                </div>
                <div className="d-flex justify-content-center">
                    <h3 className="fontStyle activeFontColor">Account Overview</h3>
                </div>
            </Container>
        )
    }

    // Render Account overview page
    renderOverview() {
        return(
            <Container>
                <Row className="ml-4">
                    <CreateAccountButton/>
                </Row>
                <Row className="ml-4 my-3">
                    <Card className="col-md-4 m-3">
                        <div className="p-3">
                            <Row className="d-flex justify-content-between">
                                <p className="fontColor normalText font-weight-bold">{this.state.companyName? this.state.companyName:'Abc Technologies'}</p>
                                <p className="activeFontColor smallText">{this.state.gstn ? this.state.gstn:'123456treww'}</p>
                            </Row>
                            <Row>
                                <div className="col-md-12">
                                    <Row>
                                        <Avatar variant="rounded"  alt="Avtar" src={Avtar}   style={{ alignSelf:'center' }} className="w-25 h-50"/>
                                        <div className="col-md-7">
                                            <p className="smallText text-justify mt-2">
                                                <span className="font-weight-bold">{this.state.name? this.state.name:'Jennifer'}</span><br/>
                                                <span>{this.state.phoneNumber ? this.state.phoneNumber:'+91 98878765433'}</span><br/>
                                                <span>{this.state.email? this.state.email:'jeni@gmail.com'}</span>
                                            </p>
                                        </div>
                                        <div className="col-md-2 justify-content-end">
                                           <EditProfile/>
                                        </div>
                                    </Row>
                                </div>
                            </Row>
                            <Row className="d-flex justify-content-center my-3"> 
                                <ThemeButton type="button" wrapperClass="btn themeBorderStyle col-md-5 fontStyle mt-2 py-2 smallText fontColor font-weight-bold" label="Invoice" />
                            </Row>
                        </div>
                    </Card>
                    <Card className="col-md-7 m-3">
                        <Row> 
                            <div className="col-md-4 p-3">
                                <p className="font-weight-bold normalText text-left">Address</p>
                                <p className="smallText text-justify mt-3">{this.state.address? this.state.address:'26, 1 rajaji nagar main road 14th main, bangalore-560034'}</p>  
                            </div>
                            <div className="col-md-8 position-relative pr-0">
                                <iframe className="rounded" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.784315453984!2d77.75704701526998!3d12.985642618082496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0e0fce86ff1d%3A0x9a769d0e3300b8d8!2sMARVEL%20SEQUOIA%20Apartments!5e0!3m2!1sen!2sin!4v1613451372467!5m2!1sen!2sin" width="100%" height="225" frameBorder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabIndex="0"></iframe>
                                <div className="position-absolute mapEditStyle">
                                   <EditLocation/>
                                </div>
                            </div>
                        </Row>
                    </Card>
                </Row>
            </Container>
        )
    }
}

export default Overview