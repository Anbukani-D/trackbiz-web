import React, { useState } from 'react';
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
 
} from 'react-pro-sidebar';
import Logo from '../../assets/images/tracbizvLogo.svg'
import LogoSm from '../../assets/images/smLogo.svg';
import {ThemeButton} from '../Components';
import '../../css/common.css'
import 'react-pro-sidebar/dist/css/styles.css';
import Icomoon from '../../libraries/Icomoon';
import MenuList from '../../common/Menu/MenuList';
import '../../css/menu.css';

function SideBar  ({ toggled, handleToggleSidebar, handleCollapsedChange})  {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<ProSidebar
			className="bg-white" 
			collapsed={collapsed}
			toggled={toggled}
			breakPoint="md"
			onToggle={handleToggleSidebar}
			handleToggleSidebar={handleCollapsedChange} 	
		>
			<SidebarHeader className="d-flex justify-content-center py-3 bg-white">
				{collapsed ? <img src={LogoSm} alt={LogoSm} width="50" height="60"/>:<img src={Logo} alt={Logo} width="160" height="70"/>}
			</SidebarHeader>
			<SidebarContent className="bg-white">
				<div className="d-flex justify-content-center">
					{collapsed? <ThemeButton type="button" wrapperClass="btn activeBgColor fontStyle font-weight-bold xSmallText mx-1 fontColor" label="Check-in"/>:<ThemeButton type="button" wrapperClass="btn activeBgColor col-md-10 fontStyle font-weight-bold megaText fontColor py-2 mx-3" label="Check-in"/>}
				</div>
					<MenuList/>
			</SidebarContent>
			<SidebarFooter className="d-flex justify-content-end bg-white p-3"> 
				{collapsed ? <Icomoon  className="pointer" icon="collpaser" color="#002173"  onClick={() => setCollapsed(false)}  size={30}/> :<Icomoon className="pointer" color="#002173" onClick={() => setCollapsed(true)} icon="collpase" size={30}/> }
			</SidebarFooter>
		</ProSidebar>
	);
};

export default SideBar;