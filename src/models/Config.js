import { observable, action, makeObservable } from 'mobx';
// import { persistence,  StorageAdapter } from 'mobx-persist-store';
// import { readPersist, writePersist } from '../libraries/LocalStorage';

class Config {
    navbarMenu= [];

    setNavMenu(value) {
        console.log("MODUL", value);
        this.navbarMenu = value;
    }
    
    constructor(value) {
        makeObservable(this, {
            navbarMenu: observable,
            setNavMenu: action
        })
    }
}
// persistence({
// 	name: 'navbarMenu',
// 	properties: ['navbarMenu'],
// 	adapter: new StorageAdapter({
// 		read: readPersist,
// 		write: writePersist,
// 	}),
// 	reactionOptions: { // optional
// 		delay: 2000
// 	},
// })(Config);

export default new Config();