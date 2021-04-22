// Create Inventory button menu

import React from 'react';
import "../../../css/common.css";
import Icomoon from "../../../libraries/Icomoon";
import CreateCategory from '../create/CreateCategory';
import AddProduct from '../create/AddProduct';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
    
export default function CreateInventoryButton() {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };
        
      return (
          <>
            <div className="rounded-circle align-self-center activeBgColor px-3 py-3">
                {!anchorEl  ?   <Icomoon icon="plus" className="pointer"  size={25}  color="white" onClick={handleClick}/> :<Icomoon style={{cursor:'pointer'}} icon="cross" color="white" size={25} onClick={handleClick}/>}
            </div>
            <Menu
                className="mt-5"
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><AddProduct/></MenuItem>
                <MenuItem onClick={handleClose}><CreateCategory/></MenuItem> 
            </Menu>
        </>
    );
}


    





  

