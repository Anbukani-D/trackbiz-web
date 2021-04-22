
import Cookies from 'universal-cookie';
import { LocalStoreEncryption, LocalStoreDecryption, PersistEncryptionn, PersistDecryption } from './Secure';


const cookies = new Cookies();

// Create Local storage with Encryption
export const SetLocalStorage = (key, value, expiresTime = 15552000, encrypt = true) => {
	try {
		let encryptValue = value;
		if (encrypt) {
			encryptValue = LocalStoreEncryption(value);
		}
		cookies.set(key, encryptValue, {path: global.baseUrl, maxAge: expiresTime});
		return true;
	}catch (error) {
		return false;
	}
}

// Get Local storage value with Encryption
export const GetLocalStorage = (key, decrypt = true) => {
	try {
		const data = cookies.get(key);
	    if (data) {
			let decryptValue = data;
	    	if (decrypt) {
				decryptValue = LocalStoreDecryption(data);
			}
			return decryptValue;
	    }
	    return false;
	} catch (error) {
		return false;
	}
}

// Write Persist the data
export const writePersist = (name, content) => {
	try {
		return new Promise((resolve) => {
			content = JSON.parse(content);
			let encryptValue = {};
			if(content && typeof content === 'object'){
				for(let i in content) {
					if (content[i]) {
						encryptValue[i] = PersistEncryptionn(content[i]);
					}else {
						encryptValue[i] = '';
					}
				}
			}
			sessionStorage.setItem(name, JSON.stringify(encryptValue));
			resolve();
		});
	} catch (error) {
		return error
	}
}
// Read Persist the data
export const readPersist = (name) => {
	try {
		return new Promise((resolve) => {
			const encryptValue = sessionStorage.getItem(name);
			const encryptObject = JSON.parse(encryptValue)
			let decryptValue = {};
			for(let i in encryptObject) {
				if (encryptObject[i]) {
					decryptValue[i] = PersistDecryption(encryptObject[i]);
				}else {
					decryptValue[i] = '';
				}
			}
			resolve(JSON.stringify(decryptValue));
		});
	} catch (error) {
		return error
	}
}

// Remove Local Storage
export const RemoveLocalStorage = (key) => {
	try {
		cookies.remove(key);
		return true;
	} catch (error) {
		return true;
	}
}
