// Add more button for lead digitalization

import React from 'react';
import Container from 'react-bootstrap/Container';
import Icomoon from '../../../libraries/Icomoon';
import '../../../css/common.css';
import Modal from 'react-bootstrap/Modal'
import { ThemeButton,CustomInput } from '../../../common/Components';
import Avtar from "../../../assets/images/avtar.png"
import Avatar from '@material-ui/core/Avatar';
import facebook from '../../../assets/images/facebook.svg';
import googlead from '../../../assets/images/googlead.svg';
import instagram from '../../../assets/images/instagram.svg';
import linkedin from '../../../assets/images/linkedin.svg';

class AddMore extends React.Component {

    state={
        socialMediaModal:false,
        socialMediaProfileModal:false,
        socialMedia:[],
        password:'1234567890',
        userName:'jeni@gmail.com'

    }
    componentDidMount() {
		let socialMedia = [
			{
                id: 1,
                socialMediaLogo:facebook,
                socialMediaName:"facebook",
				
			},
			{
                id: 2,
                socialMediaLogo:googlead,
                socialMediaName:'googlead'
                
            },
            {
                id: 3,
                socialMediaLogo:instagram,
                socialMediaName:'instagram'
                
            },
            {
                id: 4,
                socialMediaLogo:linkedin,
                socialMediaName:'linkedin'
            }
		];
		this.setState({socialMedia: socialMedia});
	}

    render() {
        return(
            <>
                {this.renderAddMore()}
                {this.renderSocialMediaModal()}
                {this.renderSocialMediaProfileModal()}
            </>
        )
    }

    // Render add more button
    renderAddMore() {
        return(
            <Container>  
                <div className="d-flex justify-content-start">
                    <button className="btn borderStyle borderRadius px-4 mt-2 ml-4 bg-white" onClick={()=>{this.setState({socialMediaModal:true})}}>
                        <Icomoon className="align-self-center mt-3 activeFontColor" icon="plus" size={30} />
                        <p className="text-center xSmallText activeFontColor mt-1">Add More</p>
                    </button>
                </div>
            </Container>
        )
    }

    // Render social media modal
    renderSocialMediaModal() {
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.socialMediaModal}
                className="borderStyle"
            >    
            <div className="m-3">
                <div className="d-flex justify-content-between">
                   <p className="normalText activeFontColor font-weight-bold">Install the Social Media Platform</p>
                   <Icomoon icon="close" size={20} style={{cursor:'pointer'}} onClick={()=>{this.setState({socialMediaModal:false})}}/>
                </div>
                <Modal.Body>
                    {this.state.socialMedia.map((socialMedia) => (
                        <div className="p-3">
                            <div className="d-flex justify-content-between" key={socialMedia.id}>
                            <img src={socialMedia.socialMediaLogo} alt={socialMedia.socialMediaName} />
                            <ThemeButton type="button" wrapperClass="btn activeBgColor col-md-6 fontStyle mt-3 py-2 normalText text-white" label="Install" onClick={()=>{this.setState({socialMediaProfileModal:true, socialMediaModal:false})}} />
                            </div>
                        </div>
                    ))}   
                </Modal.Body>
            </div>
        </Modal>  
        )
    }

    // Render social media profile modal
    renderSocialMediaProfileModal() {
        return(
            <Modal
                size="sm"
                aria-labelledby="example-modal-sizes-title-sm"
                show={this.state.socialMediaProfileModal}
                className="borderStyle"
                centered
            >    
                <Modal.Body id="example-modal-sizes-title-sm">
                    <div className="d-flex justify-content-center my-2">
                        <Avatar  alt="Avtar" src={Avtar}   style={{ alignSelf:'center' }}/>
                    </div>
                    <p className="smallText">
                        <span className="activeFontColor font-weight-bold">TrackBiz </span>
                        would like to: 
                    </p>
                    <ul className="smallText">
                        <li>Access Token</li>
                        <li>Api Id / Business Id</li>
                    </ul>
                    <CustomInput  
                        fieldStyle="outlined"
                        value={this.state.userName}
                        onChange={(e)=>this.setState({userName:e.target.value})} 
                    />
                    <CustomInput
                        fieldStyle="outlined"
                        value={this.state.password}
                        onChange={(e)=>this.setState({password:e.target.value})}
                        type={this.state.showPassword ? 'text' : 'password'}
                    />   
                    <span className="smallText"> You can stop this sync in your Facebook setting. TrackBiz terms apply. 
                        <span className="activeFontColor font-weight-bold" style={{cursor:'pointer'}}>Learn More</span> 
                    </span>
                    <p className="activeFontColor font-weight-bold text-center smallText mt-2" style={{cursor:'pointer'}}>Not You?</p>
                    <div className="d-flex justify-content-between">
                        <ThemeButton type="button" wrapperClass="btn themeBorderStyle col-md-5 fontStyle mt-2 py-2 normalText fontColor font-weight-bold" label="Cancel" onClick={()=>{this.setState({socialMediaProfileModal:false})}} />
                        <ThemeButton type="button" wrapperClass="btn  activeBgColor col-md-5 fontStyle mt-2 py-2 normalText fontColor font-weight-bold" label="Allow" onClick={()=>{this.setState({socialMediaProfileModal:true})}} />
                    </div>
                    <div className="d-flex justify-content-around mt-3">
                        <p className="xSmallText pointer">Privacy Policy</p>
                        <p className="xSmallText pointer">User Agreement</p>
                    </div>
                </Modal.Body>
        </Modal>  
        )
    }
}

export default AddMore