// Create button Menu
import React from 'react';
import "../../../css/common.css";
import Icomoon from "../../../libraries/Icomoon";
import CreateRole from '../create/CreateRole';
import CreateUser from '../create/CreateUser';
import AddLocation from '../create/AddLocation';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
    
export default function CreateAccountButton() {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };
    
      return (
          <>
            <div className="rounded-circle align-self-center activeBgColor px-3 py-3 pointer">
                {!anchorEl  ?   <Icomoon icon="plus" className="pointer"  size={25}  color="white" onClick={handleClick}/> :<Icomoon  className="pointer" icon="cross" color="white" size={25} onClick={handleClick}/>}
            </div>
            <Menu
                className="mt-5"
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><CreateUser/></MenuItem>
                <MenuItem onClick={handleClose}><CreateRole/></MenuItem>
                <MenuItem onClick={handleClose}><AddLocation/></MenuItem>
            </Menu>
        </>
    );
}


    





  

