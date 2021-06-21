import React from 'react';
import '../../css/common.css';

const Main =  props   => {
	let {handleToggleSidebar} = props;
	return (
		<main className="bgColor rounded-lg my-4 mx-4" >
			
			<header className="row">
				<div
					className="btn-toggle pointer mx-3"
					onClick={()=> handleToggleSidebar(true)}
				>
					&#9776;
				</div>
			</header>
			<div className="h-100">
				{props.children}
			</div>	
		</main>
	);
};

export default Main;