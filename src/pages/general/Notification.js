// Notification popup

import React from 'react';
import '../../css/common.css';
import moment from 'moment';

class Notification extends React.Component{
    state = {
        notifications: [], 
        show:false
    };

    componentDidMount() {
		let notifications = [
			{
                id: 1,
                title:'Wood Block',
                content:'You have initiated transaction of dummy text will dummy text update you soon.',
                name:'Arun Kumar',
                date: '2020-04-20 14:20:35',
                phone:'+91 9887656787'
				
			},
			{
                id: 2,
                title:'Wood Block',
                content:'You have initiated transaction of dummy text INR will dummy text  update you soon.',
                name:'Arun Kumar',
                date: '2020-04-20 14:20:35',
                phone:'+91 9887656787'
            },
            {
                id: 3,
                title:'Wood Block',
                content:'You have initiated transaction of dummy text INR will update you soon.',
                name:'Arun Kumar',
                date: '2020-04-20 14:20:35',
                phone:'+91 9887656787'
            }
		];
		this.setState({notifications: notifications});
	}
    render() {
        return(
            <>
                <div className="p-2 scrollStyle notificationHeight">
                    {this.state.notifications.map((notifications) => (
                        <div className="bg-light my-2 p-2" key={notifications.id}>
                           <span className="activeFontColor my-0">{notifications.title} </span>
                            <p className="smallText my-0 py-0 text-dark">{notifications.content}</p>
                            <p className="smallText activeFontColor text-right my-0 py-0">{notifications.name}</p>
                            <div className='d-flex justify-content-between'>
                                <p className="xSmallText activeFontColor">{moment(notifications.date).format('DD-MM-YYYY HH:mm:ss a')}</p>
                                <p className="xSmallText activeFontColor">{notifications.phone}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-2 d-flex justify-content-between">
                    <p className="smallText activeFontColor font-weight-bold" style={{cursor:'pointer'}}>All Read</p>
                    <p className="smallText activeFontColor font-weight-bold" style={{cursor:'pointer'}}>Clear All</p>
                </div>
            </>
        )
    }
}
export default Notification;

