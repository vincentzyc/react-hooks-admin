const CryptoJS = require("crypto-js");
const AES = require("crypto-js/aes");
const utf8 = require("crypto-js/enc-utf8");
const md5 = require("crypto-js/md5");

const iv = utf8.parse("qwertyuiop123456");
const ivLogin = utf8.parse("8765432112345678");
const mode = CryptoJS.mode.CBC;
const padding = require("crypto-js/pad-pkcs7");

const default_key = "junbokey12345678";
const beaconSession = "c7e4cd6b91b6437c28015d304b783c4a";

export default {
	encrypt(data, key) {
		let real_key = utf8.parse(md5(key || default_key).toString().slice(0, 16));
		let bytes = AES.encrypt(data, real_key, {
			iv: iv,
			mode: mode,
			padding: padding
		});
		return bytes.toString();
	},
	encryptLogin(data, key) {
		if (typeof data !== "string") {
			data = window.JSON.stringify(data);
		}
		let real_key = utf8.parse(md5(beaconSession + key).toString().slice(0, 16));
		let bytes = AES.encrypt(data, real_key, {
			iv: ivLogin,
			mode: mode,
			padding: padding
		});
		return bytes.ciphertext.toString(); //hex
	},
	decrypt(data, key) {
		if (!data) return null;
		let real_key = utf8.parse(md5(key || default_key).toString().slice(0, 16));
		let bytes = AES.decrypt(data, real_key, {
			iv: iv,
			mode: mode,
			padding: padding
		});
		return bytes.toString(utf8);
	}
}