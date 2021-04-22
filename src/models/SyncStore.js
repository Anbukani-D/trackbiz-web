/**
 * This class we are getting session stored value into Mobx value.
 * 12 Mar 2021
 */
import Config from './Config';
import {GetLocalStorage, readPersist} from '../libraries/LocalStorage';

class SyncStore {
    constructor() {
        Config.setReHydrate(true);
        this.init();
    }

    init = async() => {
        let data = await readPersist('app');
        let userData = await readPersist('user');

        if (data) {
            AppConfig.setApiData(JSON.parse(data));
        }
        if (userData) {
            User.setBackValues(JSON.parse(userData))
        }
        Config.setReHydrate(false);
    }
};

export default new SyncStore();