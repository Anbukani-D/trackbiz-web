// Settings popup

import React from 'react';
import '../../css/common.css';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icomoon from '../../libraries/Icomoon';
import {Link} from 'react-router-dom';

class Settings extends React.Component{
    state = {
        notification:false,
        
    };
    render () {
        return(
            <div className="p-3">
                <div className="pl-3">
                    <Link to="/change-password">
                        <p className="smallText activeFontColor font-weight-bold"  style={{cursor:'pointer'}}>Change Password</p>  
                    </Link>       
                </div>
                <FormControlLabel
                    control={
                        <Switch
                            // value={this.state.notification}
                            // checked={this.state.notification}
                            // onChange={(e)=>this.setState({notification:e.target.value})}
                            name="notification"
                            color="primary"
                        />
                    }
                    label="Notification Turn On / Off"
                    labelPlacement="start"
                />
                <div>
                    <Link className="row pl-3 text-decoration-none" to="/login">
                        <Icomoon icon="logout" size={20} color="#DF5A14"/>
                        <p className="smallText activeFontColor font-weight-bold pl-3 pointer">Logout</p>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Settings;