import CryptoJS from 'crypto-js';
import AppConfig from '../models/AppConfig';
import { GetLocalStorage } from './LocalStorage';

// Encrypt & Decrypt
let AesUtil = function (keySize, iterationCount) {
	this.keySize = keySize / 32;
	this.iterationCount = iterationCount;
};

AesUtil.prototype.generateKey = function (salt, passPhrase) {
	const key = CryptoJS.PBKDF2(passPhrase, CryptoJS.enc.Hex.parse(salt), {
		keySize: this.keySize,
		iterations: this.iterationCount,
	});
	return key;
};
AesUtil.prototype.encrypt = function (plainText) {
	let passPhrase = AppConfig.api_key;
	// console.log(passPhrase);
	if (passPhrase === null) {
		passPhrase = '';
	}
	const iv = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
	const salt = CryptoJS.lib.WordArray.random(128 / 8).toString(
		CryptoJS.enc.Hex,
	);

	const cipher = this.finalEncrypt(salt, iv, passPhrase, plainText);
	const aesPassword = iv + '::' + salt + '::' + cipher;
	return aesPassword;
};

AesUtil.prototype.finalEncrypt = function (salt, iv, passPhrase, plainText) {
	const key = this.generateKey(salt, passPhrase);
	const encrypted = CryptoJS.AES.encrypt(plainText, key, {
		iv: CryptoJS.enc.Hex.parse(iv),
	});
	return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
};

AesUtil.prototype.decrypt = function (aesPassword) {
	const AesObj = aesPassword.split('::');
	let passPhrase = AppConfig.api_key;
	if (passPhrase === null) {
		passPhrase = '';
	}
	const decrypted = this.finalDecrypt(
		AesObj[1],
		AesObj[0],
		passPhrase,
		AesObj[2],
	);
	return decrypted;
};

AesUtil.prototype.finalDecrypt = function (salt, iv, passPhrase, cipherText) {
	const key = this.generateKey(salt, passPhrase);
	const cipherParams = CryptoJS.lib.CipherParams.create({
		ciphertext: CryptoJS.enc.Base64.parse(cipherText),
	});
	const decrypted = CryptoJS.AES.decrypt(cipherParams, key, {
		iv: CryptoJS.enc.Hex.parse(iv),
	});
	return decrypted.toString(CryptoJS.enc.Utf8);
};

// Encrypt User local store
const LocalStoreEncryption = data => {
	let passPhrase = AppConfig.device_encryption_key;
	if (passPhrase === null) {
		passPhrase = '';
	}
	const encryptionData = CryptoJS.AES.encrypt(data, passPhrase).toString();
	return encryptionData;
};

// Decrypt User local store
const LocalStoreDecryption = data => {
	let passPhrase = AppConfig.device_encryption_key;
	if (passPhrase === null) {
		passPhrase = '';
	}
	const decryptionData = CryptoJS.AES.decrypt(data, passPhrase).toString( CryptoJS.enc.Utf8 );
	return decryptionData;
};

const PersistEncryptionn = data => {
	let passPhrase = GetLocalStorage('user');
	if (passPhrase || passPhrase === false) {
		passPhrase = '';
	}
	return CryptoJS.Rabbit.encrypt(data, passPhrase);
}

const PersistDecryption = data => {
	let passPhrase = GetLocalStorage('user');
	if (passPhrase || passPhrase === false) {
		passPhrase = '';
	}
	return CryptoJS.Rabbit.decrypt(data, passPhrase).toString(CryptoJS.enc.Utf8);
}

// Hash value
const hashValue = value => {
	const hash = CryptoJS.RIPEMD160(value, '').toString();
	return hash;
};

export { AesUtil, LocalStoreEncryption, LocalStoreDecryption, PersistEncryptionn, PersistDecryption, hashValue };
