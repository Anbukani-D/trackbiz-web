import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import ForgotPassword from './pages/general/ForgotPassword'
import ChangePassword from './pages/general/ChangePassword'
import Dashboard from './pages/dashboard/Dashboard';
// Lead
import Leads from './pages/admin/leads/Leads';
import Overview from './pages/admin/leads/Overview';
import ViewLeads from './pages/admin/leads/ViewLeads';
import Digitalization from './pages/admin/leads/Digitalization';

import Inventory from './pages/admin/inventory/Inventory';
import Account from './pages/admin/account/Account';
import viewActivities from './pages/admin/account/ViewActivities';
import Sales from './pages/admin/sales/Sales';
import DispatchTrack from './pages/admin/dispatch/DispatchTrack';
import Quotation from './pages/admin/Quotation/Quotation';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/login" component={Login} /> 
					<Route path="/forgot-password" component={ForgotPassword} /> 
					<Route path="/change-password" component={ChangePassword} /> 
						{/** Admin Management*/}
					<Route path="/dashboard" component={Dashboard} />
					 {/**Lead */}
					<Route path="/leads" component={Leads} />  
					<Route path="/leads-overview" component={Overview} /> 
					<Route path="/view-leads" component={ViewLeads} /> 
					<Route path="/digitalization" component={Digitalization} />
					<Route path="/inventory" component={Inventory} />
					<Route path="/account" component={Account} />
					<Route path="/view-activities" component={viewActivities} />
					<Route path="/sales" component={Sales} />   
					<Route path="/dispatch" component={DispatchTrack} /> 
					<Route path="/quotation" component={Quotation} /> 
				</Switch>
			</Router>
		</div>
	);
}

export default App;
