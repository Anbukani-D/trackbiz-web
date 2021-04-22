// Inventory graph

import React from 'react';
import '../../css/common.css';
import '../../css/menu.css'
import Row from 'react-bootstrap/Row';
import {ThemeButton} from '../../common/Components';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

class InventoryGraph extends React.Component {
    state={
        productShortage:[]
    }

    componentDidMount() {
        let productShortage = [
            {
                id:1,           
                product:'Wood Window',
                quantity:'3',
                branch:'BLR/HSR Layout'
            },
            {
                id:2,           
                product:'Wood Door',
                quantity:'8',
                branch:'BLR/HSR Layout'
            },
            {
                id:3,           
                product:'Wooden Wardrobe',
                quantity:'2',
                branch:'BLR/HSR Layout'
            },
        ]
        this.setState({productShortage:productShortage})
    }

    render() {
        return(
            <div className="col-md-12 bg-white borderRadius p-3">
                <div className="d-flex">
                    <OverlayTrigger
                        placement="bottom"
                        overlay={
                            <Tooltip>
                                <p className="smallText my-0 font-weight-bold text-left">Inventory</p>
                                <p className="xSmallText my-0 text-left">Here it will show the<br/> inventory min. Data<br/>representation</p>
                            </Tooltip>
                        }
                    >
                        <p className="smallText fontColor font-weight-bold text-left hoverStyle pointer">Inventory</p>
                    </OverlayTrigger>
                </div>
                <p className="xSmallText text-left">Product Shortage</p>
                {this.state.productShortage.map((productShortage) => (
                    <div className="d-flex ml-0 pl-0" key={productShortage.id} >
                        <span className="col-md-5 ml-0 pl-0">
                            <p className="xSmallText font-weight-bold text-left">{productShortage.product}</p>
                        </span>
                        <span className="col-md-1 ml-0 pl-0">
                            <p className="xSmallText text-left">{productShortage.quantity}</p>
                        </span>
                        <span className="col-md-6 ml-0 pl-0">
                            <p className="xSmallText text-left">{productShortage.branch}</p>
                        </span>
                    </div>
                ))}
                <Row className="d-flex justify-content-end"> 
                    <ThemeButton type="submit" wrapperClass="btn activeBgColor col-md-6 fontStyle font-weight-bold smallText mt-1 mx-3 fontColor" label="Shortage"/>
                </Row>    
            </div>
        )
    }   
}

export default InventoryGraph