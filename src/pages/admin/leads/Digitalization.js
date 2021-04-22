// Digitalization page

import React from 'react';
import Container from 'react-bootstrap/Container';
import Icomoon from '../../../libraries/Icomoon';
import sociallink from "../../../assets/images/sociallink.svg";
import '../../../css/common.css';
import AddMore from './AddMore';
import facebook from '../../../assets/images/facebook.svg';
import googlead from '../../../assets/images/googlead.svg';
import instagram from '../../../assets/images/instagram.svg';
import linkedin from '../../../assets/images/linkedin.svg';

class Digitalization extends React.Component {

    state={
        socialMediaModal:false,
        socialMedia:[]
    }
    componentDidMount() {
		let socialMedia = [
			{
                id: 1,
                socialMediaLogo:facebook,
                socialMediaName:"facebook",
                link:'Tap Unlink'
				
			},
			{
                id: 2,
                socialMediaLogo:googlead,
                socialMediaName:'googlead',
                link:'Tap link'
            },
            {
                id: 3,
                socialMediaLogo:instagram,
                socialMediaName:'instagram',
                link:'Tap link'
            },
            {
                id: 4,
                socialMediaLogo:linkedin,
                socialMediaName:'linkedin',
                link:'Tap link'
            }
		];
		this.setState({socialMedia: socialMedia});
	}
    render() {
        return(
            <>
                {/* {this.renderDigitalization()} */}
                {this.renderDigitalizationUpdatedView()}
            </>
        )
    }

    // Render digitalization image page
    renderDigitalization() {
        return(
            <Container> 
                <div className="row">
                    <AddMore/>
                </div>
                <div className="d-flex justify-content-center">
                    <img className="my-4"  alt="sociallink" src={sociallink} width="100%" height="400" />
                </div>
                <div className="d-flex justify-content-center">
                    <h3 className="fontStyle activeFontColor">Add and Link your Social media Platform for Automatic Lead Gen</h3>
                </div>
            </Container>
        )
    }

    // Render digitalization updated view
    renderDigitalizationUpdatedView() {
        return(
            <Container> 
                <div className="d-flex justify-content-start">
                    {this.state.socialMedia.map((socialMedia) => (
                        <button className="btn borderRadius px-4 py-3 mt-2 ml-4 bg-white" onClick={()=>{this.setState({socialMediaModal:true})}}>
                            <img  src={socialMedia.socialMediaLogo} alt={socialMedia.socialMediaName}  height={35} width={35} />
                            <p className="text-center xSmallText activeFontColor mt-1">{socialMedia.link}</p>
                        </button>
                    ))}
                    <button className="btn borderStyle borderRadius px-4 mt-2 ml-4 activeBgColor" onClick={()=>{this.setState({socialMediaModal:true})}}>
                        <Icomoon className="align-self-center mt-3 text-white" icon="plus" size={30} />
                        <p className="text-center xSmallText text-white mt-1">Add More</p>
                    </button>
                </div>
            </Container>
        )
    }
}

export default Digitalization