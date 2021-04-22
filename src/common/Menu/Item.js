
import { Link} from "react-router-dom";
import '../../css/common.css';
import React from 'react';
import Icomoon from "../../libraries/Icomoon";
import{ MenuItem} from "react-pro-sidebar";
import '../../css/common.css';
import Tooltip from '@material-ui/core/Tooltip';
import '../../css/menu.css';


export const  Item = props => {
  const {title, active, link, icon,toolTipLabel } = props;

  return (
        <Tooltip className="bg-white text-warning" title={toolTipLabel} aria-label={toolTipLabel} placement="right" arrow>
            <MenuItem 
                className="bg-white" 
                icon={
                    <Icomoon 
                        icon={icon}  
                        size={20}
                        color={
                            active 
                                ? "#DF5A14"
                                : "#0c0f12"
                        }
                    />
                }
            > 
                <Link
                    className="text-decoration-none"
                    to={link}
                    style={
                        active 
                            ? { color: "#DF5A14" }
                            : { color: "#0c0f12" }    
                    }  
                > 
                    <span 
                        style={
                            active 
                                ? { color: "#DF5A14" }
                                : { color: "#0c0f12" }
                        }> 
                        {title}
                    </span>
                </Link>
            </MenuItem>
        </Tooltip>
    );

}

