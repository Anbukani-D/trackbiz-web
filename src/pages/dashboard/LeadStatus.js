// Lead status

import React from 'react';
import '../../css/common.css';
import Icomoon from "../../libraries/Icomoon";
import '../../css/menu.css'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Bar  } from '@reactchartjs/react-chart.js'

const data = {
    labels: ['1w', '2w', '3w', '4w', '5w', '6w', '7w'],
    datasets: [
		{
			label: 'Completed',
			data: [20, 30, 40, 50, 20, 10],
			backgroundColor: '#002173',
		},
		{
			label: 'On going',
			data: [20, 30, 20, 50, 10, 40],
			backgroundColor: '#9FF174',
		},
		{
			label: 'Rejected',
			data: [3, 10, 13, 15, 22, 30],
			backgroundColor: '#F57921',
		},
    ],
  }
  
const options = {
	scales: {
		yAxes: [
			{
			type: 'linear',
			display: true,
			id: 'y-axis-1',
			ticks: {
						beginAtZero: true
					}
			},
		],
		xAxes: [
			{
				display: true,
			},
		],
		},
		legend: {
			display: false,
		}
    }

class LeadStatus extends React.Component {
    state={
    }

    render() {
        return(
            <div className="col-md-12 bg-white borderRadius p-3 bg-success text-left">
                <div className="d-flex">
                    <div>
                        <div className="d-flex">
                            <OverlayTrigger
                                placement="bottom"
                                overlay={
                                    <Tooltip>
                                        <p className="smallText my-0 font-weight-bold text-left">Lead Status</p>
                                         <div>
                                        <Icomoon className="pointer" icon="status" color="#002173" size={10}/>
                                        <span className="xSmallText ml-2 pointer">Completed</span>
                                        </div>
                                        <div>
                                        <Icomoon className="pointer" icon="status" color="#9FF174" size={10}/>
                                        <span className="xSmallText ml-2 pointer">On going</span>
                                        </div>
                                        <div>
                                        <Icomoon className="pointer" icon="status" color="#F57921" size={10}/> 
                                        <span className="xSmallText pointer ml-2">Rejected</span>
                                        </div>
                                    </Tooltip>
                                }
                            >
                                <p className="smallText fontColor font-weight-bold text-left my-0 hoverStyle pointer">Lead Status</p>
                            </OverlayTrigger>
                        </div>
						<Icomoon className="pointer" icon="status" color="#002173" size={10}/>
						<span className="xSmallText ml-2 pointer">Completed</span>
						<Icomoon className="pointer ml-3" icon="status" color="#9FF174" size={10}/>
						<span className="xSmallText ml-2 pointer">On going</span>
						<Icomoon className="pointer ml-3" icon="status" color="#F57921" size={10}/> 
						<span className="xSmallText pointer ml-2">Rejected</span>
					</div>
                    <div className="ml-3">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip className="bg-white">
                                    <p className="smallText my-0 font-weight-bold text-left">Filter</p>
                                    <p className="xSmallText my-0 text-left">Weekly</p>
                                    <p className="xSmallText my-0 text-left">Monthly</p>
                                    <p className="xSmallText my-0 text-left">Yearly</p>
                                </Tooltip>
                            }
                            >
                                <Icomoon icon="gear" color="#F57921" size={25}/> 
                        </OverlayTrigger>
                    </div>
                </div>
                <Bar data={data} options={options}  width={100} height={60} />
            </div>
        )
    }
    
}

export default LeadStatus