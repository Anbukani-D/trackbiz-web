import {observable, action, makeObservable} from 'mobx';
import { persistence,  StorageAdapter } from 'mobx-persist-store';
import { readPersist, writePersist } from '../libraries/LocalStorage';

class AppConfig {
	api_key =  '';
	device_encryption_key = '';
	request_id = '';
	authorization = '';
	session_id = '';
	device_key = '';

	setApiData(value) {
		Object.keys(value).map((i) => 
			this[i] = value[i]
		);
	}

	setLocale(value) {
		this.locale = value;
	}

	setInitApiData(value) {
		Object.keys(value).map((i) => 
			this[i] = value[i]
		);
	}

	// clearStore() {
	// 	useClear(this);
	// 	const keys = ['api_key', 'device_encryption_key', 'request_id', 'authorization', 'session_id', 'device_key'];
	// 	keys.map((i) => 
	// 		this[i] = ''
	// 	);
	// }
};

makeObservable(this, {
	api_key: observable,
	device_encryption_key: observable,
	request_id: observable,
	authorization: observable,
	session_id: observable,
	device_key: observable,
	locale: observable,
	setApiData: action,
	setLocale: action,
	setInitApiData: action,
	clearStore: action
});


persistence({
	name: 'app',
	properties: ['api_key', 'device_encryption_key', 'request_id', 'authorization', 'session_id', 'device_key'],
	adapter: new StorageAdapter({
		read: readPersist,
		write: writePersist,
	}),
	reactionOptions: { // optional
		delay: 2000
	},
})(AppConfig);

export default new AppConfig();
