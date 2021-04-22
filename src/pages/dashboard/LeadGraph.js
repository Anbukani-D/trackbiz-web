// Lead graph

import React from 'react';
import '../../css/common.css';
import Icomoon from "../../libraries/Icomoon";
import '../../css/menu.css'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Line } from '@reactchartjs/react-chart.js'

const options = {
    scales: {
		yAxes: [
			{
				type: 'linear',
				display: true,
				position: 'left',
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
    },

	elements: {
		line: {
			tension: 0 // disables bezier curves
		}
	}
}

class LeadGraph extends React.Component {
    state = {
        dataLine: {
			labels: ["1w", "2w", "3w", "4w", "5w", "6w", "7w","8w","9w","10w", "11w","12w"],
			
			datasets: [
				{
				label: "Total Lead",
				data: [20, 40, 60, 50, 70, 80, 90,50,60, 10],
				fill: false,
				backgroundColor: '#002173',
				borderColor: '#002173',
				},
				{

				label: 'Digital Lead',
				data: [20, 40, 30, 45, 90, 80 , 30,50,70, 5],
				fill: false,
				backgroundColor: '#9FF174',
				borderColor: '#9FF174',
				},
				{

					label: 'Sales Lead',
					data: [15, 27, 16, 17, 28, 24, 15, 27, 16, 17],
					fill: false,
					backgroundColor: '#F57921',
					borderColor: '#F57921',
				},
			],
			}        
      };
      
    render() {
        return(
			<div className="col-md-12 bg-white borderRadius p-3">
				<div className="d-flex">
					<div className="col-md-10 text-left">
						<Icomoon icon="status" color="#002173" size={10}/>
						<span className="xSmallText ml-2">Total Lead</span>
						<Icomoon icon="status" className="ml-3" color="#9FF174" size={10}/>
						<span className="xSmallText ml-2">Digital Lead</span>
						<Icomoon icon="status" className="ml-3" color="#F57921" size={10}/> 
						<span className="xSmallText ml-2">Sales Lead</span>
					</div>
					<div className="col-md-2 text-right">
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
				<Line data={this.state.dataLine} options={options} />
			</div>
        )
    }
    
}

export default LeadGraph