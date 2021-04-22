import React from "react";
import { useLocation } from "react-router-dom";
import { Item } from "./Item";
import{ Menu} from "react-pro-sidebar";

const MenuList = () => {
	const currentPath = useLocation();
	return (
        <>
            <Menu>
         
			{/* --------------------------------------------
						Dashboard
			---------------------------------------------- */}
			<Item
				title={"Dashboard"}
				link={"/dashboard"}
				icon={'dashboard'}
				toolTipLabel={"Dashboard"}
				active={
					currentPath.pathname === "/dashboard"
						? true
						: false
				}
			>
			</Item>
			<Item
				title={"Lead"}
				link={"/leads"}
				icon={'account'}
				toolTipLabel={"Lead"}
				active={
					currentPath.pathname === "/leads"
						? true
						: false
				}
			>
			</Item>
			<Item
				title={"Sales"}
				link={"/sales"}
				icon={'sales'}
				toolTipLabel={"Sales"}
				active={
					currentPath.pathname === "/sales"
						? true
						: false
				}
			>
			</Item>
			<Item
				title={"Inventory"}
				link={"/inventory"}
				icon={'inventory'}
				toolTipLabel={"Inventory"}
				active={
					currentPath.pathname === "/inventory"
						? true
						: false
				}
			>
			</Item>
			<Item
				title={"Dispatch & Track"}
				link={"/dispatch"}
				icon={'dispatch'}
				toolTipLabel={"Dispatch & Track"}
				active={
					currentPath.pathname === "/dispatch"
						? true
						: false
				}
			>
			</Item>
			
			<hr className="mx-3"></hr>
			<Item
				title={"My Account"}
				link={"/account"}
				icon={'lead'}
				toolTipLabel={"My Account"}
				active={
					currentPath.pathname === "/account"
						? true
						: false
				}
			>
			</Item>
			
			{/* <Item
				title={"Quotation"}
				link={"/quotation"}
				icon={'quotation'}
				toolTipLabel={"Quotation"}
				active={
					currentPath.pathname === "/quotation"
						? true
						: false
				}
			>
			</Item> */}
		</Menu> 		
		</>
	);
};

export default MenuList;