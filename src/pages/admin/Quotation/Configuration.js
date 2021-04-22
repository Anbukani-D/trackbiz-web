// Configuration page

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ThemeButton, CustomSelect, CustomInput } from '../../../common/Components';
import {customColumnOptions, categoryOptions} from '../../../common/DropdownList';
import moment from 'moment'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Icomoon from "../../../libraries/Icomoon";

const names = [
    'Item1',
    'Item2',
    'Item3',
];
  

class Configuration extends React.Component {
    state={
        AddCustomColumn:false,
        customColumn:'',
        checkbox:'',
        checkboxLabel:'',
        checkboxValue:[],
        name:'',
        description:'',
        date:'',
        dateTime:'',
        number:'',
        radioButton:'',
        radioBittonLabel:'',
        singleSelectList:'',
        multiSelectList:'',
        names:[],
        
    }

    render() {
        return(
            <>
                <Row className="d-flex justify-content-around">
                    {this.renderCustomField()}
                    {this.renderStructure()}
                </Row>
            </>
        )
    }

    // Render custom field
    renderCustomField(){
        return(
            <Col md={4}  className="bg-white rounded-lg p-3 mt-3">
               <p className="activeFontColor text-left smallText font-weight-bold">Custom Field</p>
               <p className="xSmallText text-justify">
                   For more dynamic type content page.Here you can config and give function to a page
               </p>
               <Col className="d-flex justify-content-start pl-0">
                    <ThemeButton type="button" wrapperClass="btn activeBgColor col-md-10 fontStyle font-weight-bold smallText mt-3 text-white py-2" label="Add Custom Field" onClick={()=>this.setState({addCustomColumn:true})}/>
               </Col>
               { this.state.addCustomColumn ? this.renderCustomComponent(): null}

            </Col>
        )
    }

    // Render structure 

    renderStructure() {
        return(
            <Col md={7}  className="bg-white rounded p-3 mt-3">
               <p className="activeFontColor text-left smallText font-weight-bold">Structure</p>
            </Col>
        )
    }  

    // Render Custom Select Component

    renderCustomComponent() {
        return(
            <div className="my-3">
                <CustomSelect
                    placeholder="Select the Field Type" 
                    value={this.state.customColumn}
                    onChange={(e)=> this.setState({customColumn:e.target.value})}
                    options={customColumnOptions}
                    
                />
                <>
                    {this.state.customColumn==="Labels" ?this.renderLabelComponent():null}
                    {this.state.customColumn==="Checkbox"? this.renderCheckboxComponent():null}
                    {this.state.customColumn==="Date Picker" ?this.renderDatePickerComponent():null}
                    {this.state.customColumn==="Date Time Picker"? this.renderDateTimePickerComponent():null}
                    {this.state.customColumn==="Number Field" ?this.renderNumberFieldComponent():null}
                    {this.state.customColumn==="Radio Button"? this.renderRadioButtonComponent():null}
                    {this.state.customColumn==="Text Field" ?this.renderTextFieldComponent():null}
                    {this.state.customColumn==="Text Area"? this.renderTextAreaComponent():null}
                    {this.state.customColumn==="Single Select List" ?this.renderSingleSelectListComponent():null}
                    {this.state.customColumn==="Multi Select List"? <MultiSelectList/>:null}

                </>        
            </div>
        )
    }
    // Render checbox component

    renderCheckboxComponent = () => {
        return(
            <>
                <Row className="mx-3">
                    {this.renderLabelComponent()}
                    <div className="custom-control custom-checkbox custom-control-inline my-1 mt-3 mx-3">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheckbox"
                            name="customCheckbox"
                            checked={this.state.checkbox}
                            value={this.state.checkbox}
                            onChange={(e)=> this.setState({checkbox:e.target.checkbox})}
                        />
                            <label className="custom-control-label smallText" htmlFor="customCheckbox">
                                <span className="pt-1"></span>
                            </label>
                    </div>
                    <CustomInput
                        type='text'
                        placeholder="Enter label" 
                        className='col-md-8 smallText'
                        value={this.state.checkboxLabel}
                        onChange={(e)=> this.setState({checkboxLabel:e.target.value})}
                        onBlur={() => {
                            this.addCheckboxOption();
                            this.setState({checkboxLabel:''});
                        }}
                    /> 
                    <Icomoon className="mt-3 ml-2 pointer" icon="plus" size={15} onClick={this.addCheckboxOption}/> 
                </Row>
                {this.state.checkboxValue.map((item, index)  =>(
                    <div className="text-center mt-3">
                        <p className="normalText text-dark">{item} <Icomoon icon="cross" size={12} onClick={() => this.deleteCheckboxOption(index)}/> <Icomoon icon="dropdown" size={12}/></p>
                    </div>
                ))}
                <div className="d-flex justify-content-end">
                    <ThemeButton type="button" wrapperClass="btn activeBgColor col-md-4 fontStyle smallText mt-3 fontColor text-white py-1" label="Update"/>
                </div>
            </>
        );
    }

    // Add check box option
    addCheckboxOption = () => {
        let boxValue = this.state.checkboxValue
        boxValue.push(this.state.checkboxLabel)
        this.setState({checkboxValue:boxValue})
    }

    // Delete check box option
    deleteCheckboxOption = (key) => {
        let boxValue = this.state.checkboxValue;
        console.log(boxValue[key]);
        // delete boxValue[key,1];
        boxValue.splice(key, 1);
        this.setState({checkboxValue:boxValue})
    }

    // Render Date Picker Component
    renderDatePickerComponent = () => {
        return(
            <>
                {this.renderLabelComponent()}
                <CustomInput
                    selected={this.state.date}
                    onChange={(value) => {
                        this.setState({ date: value });
                    }}
                    type="date"
                    className="col-md-12 my-2"
                    value={this.state.date}
                    // onChange={(e)=>this.setState({date:e.target.value})}
                    maxDate={moment("01/08/2020").format("DD/MM/YYYY")}
                    fieldStyle="outlined"
                />
                <div className="d-flex justify-content-end">
                    <ThemeButton type="button" wrapperClass="btn activeBgColor col-md-4 fontStyle smallText mt-3 fontColor text-white py-1" label="Update"/>
                </div>
            </>    
        );
    }
    
    // Render Date time Picker Component
    renderDateTimePickerComponent = () => {
        return(
            <>
                {this.renderLabelComponent()}
                <CustomInput
                    selected={this.state.dateTime}
                    onChange={(value) => {
                        this.setState({ dateTime: value });
                    }}
                    type="datetime-local"
                    className="col-md-12 my-2"
                    value={this.state.dateTime}
                    // onChange={(e)=>this.setState({dateTime:e.target.value})}
                    maxDate={moment("01/08/2020").format("DD/MM/YYYY")}
                    fieldStyle="outlined"
                />
                <div className="d-flex justify-content-end">
                    <ThemeButton type="button" wrapperClass="btn activeBgColor col-md-4 fontStyle smallText mt-3 fontColor text-white py-1" label="Update"/>
                </div>
            </>    
        );
    }

    // Render Label Component
    renderLabelComponent = () => {
        return(
            <>
                <CustomInput
                    type='text'
                    placeholder="Name" 
                    className='col-md-12 smallText my-3'
                    value={this.state.name}
                    onChange={(e)=> this.setState({name:e.target.value})}
                    fieldStyle="outlined"
                />
                <CustomInput
                    placeholder="Description" 
                    type='text'
                    className='col-md-12 smallText'
                    multiline
                    rows={6}
                    value={this.state.description}
                    onChange={(e)=> this.setState({description:e.target.value})}
                    fieldStyle="outlined"
                />
                {this.state.customColumn==="Labels" ?
                    <div className="d-flex justify-content-end">
                        <ThemeButton type="button" wrapperClass="btn activeBgColor col-md-4 fontStyle smallText mt-3 fontColor text-white py-1" label="Update"/>
                    </div>: null
                }
            </>
        );
    }
    // Render Number Field Component
    renderNumberFieldComponent = () => {
        return(
            <>
                {this.renderLabelComponent()}
                <CustomInput
                    type='Number'
                    placeholder="Select Number" 
                    className='col-md-12 smallText my-3'
                    value={this.state.number}
                    onChange={(e)=> this.setState({number:e.target.value})}
                    fieldStyle="outlined"
                />
                <div className="d-flex justify-content-end">
                    <ThemeButton type="button" wrapperClass="btn activeBgColor col-md-4 fontStyle smallText mt-3 fontColor text-white py-1" label="Update"/>
                </div>
            </>
        );
    }
    // Render Radio Button Component
    renderRadioButtonComponent = () => {
        return(
            <>
            {this.renderLabelComponent()}
            <Row className="mx-3">
                <div className="custom-control custom-radio custom-control-inline mt-4">
                    <input
                        type="radio"
                        className="custom-control-input"
                        id="customRadioButton"
                        name="radioButton"
                        checked={this.state.radioButton }
                        value={this.state.radioButton}
                        onChange={(e)=> this.setState({radioButton:e.target.radioButton})}
                    />
                    <label className="custom-control-label smallText" htmlFor="customRadioButton">
                        <span className="pt-1">{this.state.radioButtonLabel}</span>
                    </label>
                </div>
                <CustomInput
                    type='text'
                    placeholder="Enter label" 
                    className='col-md-10 smallText'
                    value={this.state.radioButtonLabel}
                    onChange={(e)=> this.setState({radioButtonLabel:e.target.value})}
                    // onBlur={()=>}
                />
                
            </Row>
            <div className="d-flex justify-content-end">
                <ThemeButton type="button" wrapperClass="btn activeBgColor col-md-4 fontStyle smallText mt-3 fontColor text-white py-1" label="Update"/>
            </div>
            </>
        );
    }

    // Render Text Field Component
    renderTextFieldComponent = () => {
        return(
            <>
                {this.renderLabelComponent()}
                <CustomInput
                    type='text'
                    placeholder="Enter Text" 
                    className='col-md-12 smallText my-3'
                    value={this.state.text}
                    onChange={(e)=> this.setState({text:e.target.value})}
                    fieldStyle="outlined"
                />
                <div className="d-flex justify-content-end">
                    <ThemeButton type="button" wrapperClass="btn activeBgColor col-md-4 fontStyle smallText mt-3 fontColor text-white py-1" label="Update"/>
                </div>
            </>
        );
    }
    // Render Text Area Component
    renderTextAreaComponent = () => {
        return(
            <>
                {this.renderLabelComponent()}
                <CustomInput
                    type='text'
                    placeholder="Enter Data" 
                    className='col-md-12 smallText my-3'
                    value={this.state.textArea}
                    onChange={(e)=> this.setState({textArea:e.target.value})}
                    multiline
                    rows={6}
                    fieldStyle="outlined"
                />
                <div className="d-flex justify-content-end">
                    <ThemeButton type="button" wrapperClass="btn activeBgColor col-md-4 fontStyle smallText mt-3 fontColor text-white py-1" label="Update"/>
                </div>
            </>
        );
    }
    // Render Single Select List Component
    renderSingleSelectListComponent = () => {
        return(
            <>
            {this.renderLabelComponent()}
            <Row className="mx-1 my-3">
                <CustomSelect
                    placeholder="Select" 
                    value={this.state.singleSelectList}
                    onChange={(e)=> this.setState({singleSelectList:e.target.value})}
                    options={categoryOptions}
                    
                />
            </Row>
            <div className="d-flex justify-content-end">
                <ThemeButton type="button" wrapperClass="btn activeBgColor col-md-4 fontStyle smallText mt-3 fontColor text-white py-1" label="Update"/>
            </div>
            </>
        );
    }   
}
// Render Multi Select List Component
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
    };

    function MultiSelectList() {
        const [multiSelect, setMultiSelect] = React.useState([]);
        const handleChange = (event) => {
            setMultiSelect(event.target.value);
        };
        return(
            <>
                <Row  className="mx-1 my-3">
                    <FormControl className=  "col-md-12" >
                    <InputLabel id="demo-mutiple-checkbox-label">Multi Select List</InputLabel>
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        multiple
                        value={multiSelect}
                        onChange={handleChange}
                        input={<Input />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                    {names.map((name) => (
                        <MenuItem key={name} value={name}>
                        <Checkbox checked={multiSelect.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </Row>
            <div className="d-flex justify-content-end">
                <ThemeButton type="button" wrapperClass="btn activeBgColor col-md-4 fontStyle smallText mt-3 fontColor text-white py-1" label="Update"/>
            </div>
        </>
        )
    }





export default Configuration