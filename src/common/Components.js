import React , { useState,useRef } from 'react';
import {
	makeStyles
  } from '@material-ui/core/styles';
import Icomoon from "../libraries/Icomoon";
import {  TextField } from "@material-ui/core";
import LeftMenu from './Menu/LeftMenu';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Notification from '../pages/general/Notification';
import Popover from 'react-bootstrap/Popover'
import Overlay from 'react-bootstrap/Overlay';
import LoadingBar from 'react-top-loading-bar';



const useStyles = makeStyles((theme) => ({
        root: {
        display: 'flex',
        flexWrap: 'wrap',
        },
        margin: {
        margin: theme.spacing(1),
        },
        small: {
            width: 25,
            height: 25,
        },
	}));

// Render layout
export const Layout = (props) => {
    return (
       <LeftMenu children={props.children}  /> );
};

export const TopProgressBar = (props) => {
    const [progress, setProgress] = useState(0);
    return( 
        <LoadingBar
            color='#DF5A14'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
        />
    )
}


// Render custom input 

export const CustomInput  = props => {
    const classes = useStyles();
    let {placeholder, id, fieldStyle,wapperClass,fieldClass, customError, rightIcon, iconName, iconSize, iconColor, error,  ...rest } = props;
    wapperClass = wapperClass ? wapperClass : "";
    fieldClass = fieldClass ? fieldClass : "";
        return (
            <TextField 
                className={classes.margin + " col-md-12 fontStyle"}  
                id={id} 
                label={placeholder} 
                variant={fieldStyle} 
                endAdornment={rightIcon}
                error={ error ? customError : null }
                {...rest}
                InputProps={{
                    endAdornment: <Icomoon icon={iconName} size={iconSize} color={iconColor}/>
                    }}
            />
        );
    };

// // Render Custom select 
// export const CustomSelect = props => {
//     const classes = useStyles();
//     let {placeholder, id , name, customError, options, error,...rest} =props;
//     const fillData = () => {
// 		var rows = [];
// 		rows.push(<option aria-label="None" value="" />);
// 		if (options) {
// 			for (const [index, value] of options.entries()) {
// 				rows.push(<option key={index}>{value.label}</option>);
// 			}
// 			return <>{rows}</>;
// 		} else {
// 			return null;
// 		}
// 	};
//     return(
//         <FormControl className={classes.formControl + " col-md-12 fontStyle"}>
//             <InputLabel htmlFor={name}>{placeholder}</InputLabel>
//             <Select
//                 {...rest}
//                 inputProps={{
//                 name: {name},
//                 id: {id},
//                 }}
//             >
//                 {fillData()}
//             </Select>
//         </FormControl>
//     )
// }
/**
 * Custom Select
 */
export const CustomSelect = (props) => {
    let { wapperClass, fieldClass, error, placeholder, id, options, fieldStyle, ...rest } = props;
    wapperClass = wapperClass ? wapperClass : "";
    fieldClass = fieldClass ? fieldClass : "";
    const fillData = () => {
        var rows = [];
        rows.push(<option aria-label="None"  value="" />);
        if (options) {
            for (const [index, value] of options.entries()) {
                rows.push(<option key={index}>{value.label}</option>);
            }
            return <>{rows}</>;
        } else {
            return null;
        }
    };
    return (
        <>
            <FormControl  className={wapperClass + "w-100"}  variant={fieldStyle}>
                <InputLabel  htmlFor={id ? id : null}>{placeholder}</InputLabel>
                <Select native {...rest}>{fillData()}</Select>
            </FormControl>
            {error ? (
                <small className="form-text xSmallText text-danger">
                    {error}
                </small>
            ) : null}
        </>
    );
  };


// Render Theme button
export const ThemeButton = props => {
    let {
		className , 
        wrapperClass,
        fieldClass,
        label,
        iconName,
        iconSize,
        iconColor,
        ...rest
    } = props;
    wrapperClass = wrapperClass ? wrapperClass : "";
    fieldClass = fieldClass ? fieldClass : "";
    if (props.className) {
        className = "py-1 btn" + wrapperClass;
    }
    if (props.loading) {
        return (
            <button
                className={wrapperClass}
                type="button"
                disabled
				{...rest}
            >
                <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                ></span>
				<span className="smallText">Loading</span>
            </button>
        );
    } else {
        return (
            <button
                type="submit"
                className={wrapperClass}
				{...rest}
            >
                <Icomoon className="mr-2" icon={iconName} size={iconSize} color={iconColor}/>
                {label}
            </button>
        );
    }
}

export function NotificationIcon() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };
  
    return (
        <>
            <Icomoon icon="rnotification" size={22} className="align-self-center" onClick={handleClick}/>
            <Overlay
                show={show}
                target={target}
                placement="bottom-end"
                container={ref.current}
                containerPadding={20}
            >
                <Popover>
                    <div ref={ref}>
                        <div className="p-2 d-flex justify-content-between">
                            <span className="xSmallText fontColor">Recent Notifications</span>
                            <Icomoon icon="close" className="pointer" size="15" onClick={handleClick} />
                        </div>
                        <Notification/>
                    </div>
                </Popover>
            </Overlay>
        </>
    );
  }








