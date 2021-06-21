// Quotation overview page

import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Icomoon from '../../../libraries/Icomoon';
import { CustomSelect } from '../../../common/Components';
import Accordion from 'react-bootstrap/Accordion'
import {outerFinishOptions} from '../../../common/DropdownList';

class Overview extends React.Component {
    state={
       tab:'prototype'
    }

    render() {
        return(
            <>
                {this.renderOverviewTabs()}
            </>
        )
    }

    renderOverviewTabs(){
        return(
            <Container>
                <div className="ml-1 d-flex justify-content-start ml-0 pl-0">
                    <button className="btn rounded-top border fontColor ml-0  px-4 mr-1" 
                        style={
                            this.state.tab==="prototype"
                            ? {
                                backgroundColor: "#002173",
                                color: "#fff",
                                }
                            : {
                                backgroundColor: "#ffff",
                                color: "#000",
                                }
                            } 
                            onClick={()=>{this.setState({viewSelection:false, viewSelectionItem:false, tab:'prototype'})}}
                        >
                            Prototype
                            <span className="text-white megaText">&nbsp;&nbsp;|</span> 
                            <Icomoon className="ml-2 fontColor" icon="edit" size={20}/>
                    </button>
                    {this.state.viewSelection ? 
                        <button 
                            className="btn rounded-top border fontColor ml-0 mr-1" 
                            style={
                                this.state.tab==="selection" 
                                ? {
                                    backgroundColor: "#002173",
                                    color: "#fff",
                                    }
                                : {
                                    backgroundColor: "#ffff",
                                    color: "#000",
                                    }
                                } 
                            onClick={()=>{this.setState({viewSelectionItem:false, tab:'selection'})}} 
                        >
                            Selection 
                            <span className="text-white megaText">&nbsp;&nbsp;|</span>
                            <Icomoon className="ml-2 fontColor" icon="edit" size={20}/>
                        </button>
                        :null
                    }
                     {this.state.viewSelectionItem? 
                        <button className="btn rounded-top border fontColor ml-0"
                            style={
                                this.state.tab
                                ? {
                                    backgroundColor: "#002173",
                                    color: "#fff",
                                    }
                                : {
                                    backgroundColor: "#ffff",
                                    color: "#000",
                                    }
                                } 
                            onClick={()=>{this.setState({ tab:'selectedItem'})}}
                        >
                            Foyer, Living 
                            <span className="text-white megaText"> &nbsp;&nbsp;|</span>
                            <Icomoon className="ml-2 fontColor" icon="edit" size={20}/>
                        </button>
                        :null
                        }
                </div>
                <div className="borderStyle bg-white ml-1" style={{height:580}}>
                    {this.renderTabContent()}
                </div>
            </Container>
        )
    }

    // Render prototype function
    renderPrototype() {
        return(
            <div className="justify-content-start">
                <Row>
                    <button className="btn mt-2 py-2 ml-4 ">
                        <span className="text-center normalText activeFontColor mr-4">Commercial</span>
                        <Icomoon className="align-self-center text-white" icon="tick" size={15} />
                    </button>
                </Row>
                <Row>
                    <button className="btn borderStyle mt-2 py-2 ml-4 activeBgColor" onClick={()=>{this.setState({viewSelection:true, tab:'selection'})}}>
                        <span className="text-center normalText text-white mr-4">Residential</span>
                        <Icomoon className="align-self-center text-white" icon="tick" size={15} />
                    </button>
                </Row>
            </div>
        )
    }

    // Render Selection function
    renderSelection() {
        return(
            <div className="justify-content-start">
                <Row>
                    <button className="btn mt-2 py-2 ml-4 activeBgColor">
                        <span className="text-center normalText text-white mr-5">Foyer</span>
                        <Icomoon className="align-self-center text-white ml-5" icon="tick" size={15} />
                    </button>
                </Row>
                <Row>
                    <button className="btn borderStyle mt-2 py-2 ml-4 activeBgColor" onClick={()=>{this.setState({viewSelectionItem:true, tab:'selectedItem'})}}>
                        <span className="text-center normalText text-white mr-5">Living </span>
                        <Icomoon className="align-self-center text-white ml-5" icon="tick" size={15} />
                    </button>
                </Row>
                <Row>
                    <button className="btn mt-2 py-2 ml-4 pr-5">
                        <span className="text-center normalText activeFontColor mr-4">Bed Room</span>
                        <Icomoon className="align-self-center text-white" icon="tick" size={15} />
                    </button>
                </Row>
                <Row>
                    <button className="btn mt-2 py-2 ml-4 ">
                        <span className="text-center normalText activeFontColor mr-5">Kitchen</span>
                        <Icomoon className="align-self-center text-white" icon="tick" size={15} />
                    </button>
                </Row>
            </div>

        )
    }

    // Render Selected Item function
    renderSelectedItem() {
        return(
            <div className="justify-content-start p-3">
                <p className="text-secondary xSmallText text-left">Foyer</p>
                <div className="d-flex justify-content-start">
                    <Accordion className="col-md-3">
                        <Accordion.Toggle  className="text-left bg-white borderStyle borderColor rounded-top pt-3 col-md-12"   eventKey="0">
                            
                            <p className="smallText">Shoe Unit </p>
                    
                        </Accordion.Toggle>
                        <Accordion.Collapse className="bg-white borderStyle borderColor rounded-border p-2" eventKey="0">
                            <CustomSelect
                                placeholder="Outer Finish" 
                                value={this.state.outerFinish}
                                onChange={(e)=> this.setState({outerFinish:e.target.value})}
                                options={outerFinishOptions} 
                            /> 
                            
                            {/* <CustomSelect
                                placeholder="Polish" 
                                // value={this.state.polish}
                                // onChange={(e)=> this.setState({polish:e.target.value})}
                                // options={polishOptions} 
                            />                          */}
                        </Accordion.Collapse>
                    </Accordion>
                </div>
            </div>
            

        )
    }

    // Render tab content
    renderTabContent = () => {
    if (this.state.tab === "selectedItem") {
       return this.renderSelectedItem();
       } else if (this.state.tab === "selection") {
       return this.renderSelection();
       } else{
           return this.renderPrototype()
       }
   };

}

export default Overview