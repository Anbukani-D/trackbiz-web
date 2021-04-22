// Profile popup

import React, { useState } from 'react';
import Popper from '@material-ui/core/Popper';
import "../../css/common.css";
import Icomoon from "../../libraries/Icomoon";
import {CustomInput, ThemeButton} from "../../common/Components";
import Avtar from "../../assets/images/avtar.png"
import Avatar from '@material-ui/core/Avatar';
import LoadingBar from 'react-top-loading-bar'

export default function Profile() {
    const [name, setName] = useState('Jennifer');
    const [jobTitle, setJobTitle] = useState('Software Tester');
    const [contactNumber, setContactNumber] = useState('+91 9886876440');
    const [mail, setMail] = useState('jeni@gmail.com');
    const [address, setAddress] = useState('#65 1st cross mg road bangalore-560056');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [progress, setProgress] = useState(0)
    const [file, setFile] = useState(0)
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;


    // onsubmit function for profile input
    const onSubmitProfileInfo = (e) =>{
        e.preventDefault();
        setProgress(100)
        
        
    }
     // onclick Profile pic Selected
     const handleFileSelect = (e) => {
        e.preventDefault();
        const fileSelector = document.getElementById('uploadimage');
        fileSelector.click();
    }
    /* 
     Preview Image Profile and call Api
    */
   const  handleImageChange = (e)=> {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
        setFile({
            file: file,
            imagePreviewUrl: reader.result
        });
        }
        reader.readAsDataURL(file)
    }
    let { imagePreviewUrl } = useState();
        let $imagePreview = (<Avatar alt="Avtar" className="rounded m-3" src={Avtar}  onClick={handleFileSelect}  />);
        if (imagePreviewUrl) {
            $imagePreview = (<Avatar alt="Avtar" className="rounded m-3" src={imagePreviewUrl}  />);
        }
       
    return (
        <div>
            <LoadingBar
                color='#002173'
                progress={progress}
                onLoaderFinished={() => setProgress(100)}
            />
            <Avatar className="mt-3" alt="Avtar" src={Avtar}   style={{ alignSelf:'center' }} onClick={handleClick}/>  
                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <div className="d-flex justify-content-end mx-5">
                        <div className="col-md-4  borderStyle borderRadius bg-white p-3">
                            <div className="d-flex justify-content-end">
                                <Icomoon icon="close" className="pointer" size={20} onClick={()=> setAnchorEl(false)}/>
                            </div>
                            <form onSubmit={onSubmitProfileInfo}>
                                <div className="d-flex justify-content-start">
                                    {$imagePreview}
                                    <input
                                        type="file"
                                        // ref={(ref) => upload = ref}
                                        id="uploadimage"
                                        accept=".jpg,.jpeg,.png"
                                        style={{display: 'none'}}
                                        onChange={()=> handleImageChange}
                                    />
                                    <Icomoon icon="edit" className="ml-2"  color="#DF5A14" size={20} type="button" onClick={()=>handleFileSelect}/> 
                                </div>
                                <CustomInput  
                                    placeholder="Name" 
                                    fieldStyle="outlined"
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}  
                                />
                                <CustomInput  
                                    placeholder="Job Title" 
                                    fieldStyle="outlined"
                                    value={jobTitle}
                                    onChange={(e)=>setJobTitle(e.target.value)}
                                />
                                <CustomInput  
                                    placeholder="Contact No." 
                                    fieldStyle="outlined"
                                    value={contactNumber}
                                    onChange={(e)=>setContactNumber(e.target.value)}    
                                />
                                <CustomInput  
                                    placeholder="Mail"
                                    fieldStyle="outlined"
                                    value={mail}
                                    onChange={(e)=>setMail(e.target.value)}   
                                />
                                <CustomInput  
                                    placeholder="Address"
                                    fieldStyle="outlined"
                                    value={address}
                                    onChange={(e)=>setAddress(e.target.value)}   
                                    multiline={4}
                                />
                                <ThemeButton type="submit" wrapperClass="btn activeBgColor col-md-12 text-white fontStyle normalText mt-3 mx-1" label="Save" onClick={onSubmitProfileInfo} /> 
                            </form> 
                        </div> 
                    </div>     
            </Popper>
        </div>
    );
}




  

