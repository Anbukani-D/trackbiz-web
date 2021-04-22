import React, { useState } from 'react';
import Main from './Main';
import './styles/App.scss';
import SideBar from '../Menu/SideBar';
import LoadingBar from 'react-top-loading-bar'

function Leftmenu (props){
	const [collapsed, setCollapsed] = useState(false);
	const [toggled, setToggled] = useState(false);
	const handleCollapsedChange = (collapsed) => {
		setCollapsed(collapsed);
	};
	const handleToggleSidebar = (value) => {
		setToggled(value);
	};
	const [progress,setProgress] = useState(0);
	return (
		<div className={`app ${toggled ? 'toggled' : ''}`} style={{height:790}}>
			<SideBar  collapsed={collapsed} breakPoint="md" toggled={toggled} handleToggleSidebar={handleToggleSidebar} onToggle={handleToggleSidebar} />
			<Main
				breakPoint="md"
				toggled={toggled}
				collapsed={collapsed}
				handleToggleSidebar={handleToggleSidebar}
				handleCollapsedChange={handleCollapsedChange} 
				children={props.children}
			/>
		</div>
	);
}

export default Leftmenu;

