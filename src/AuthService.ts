import {KJUR} from "jsrsasign";
import {useCookies} from "react-cookie";

export class AuthService {
	static instance: AuthService;
	static privateKey = process.env.JWT_PRIVATE_KEY || 'V+AopYCPi68/oZDFLKeZVeRDOHpes/eHrHe1FjOcb45MN/cGL5eEB/Qpt7WbM6EYq3/u0rfuGtfV8qD6ngMGVx1i6Cf2NaD1NgxcGJx8xY1BTxge6ecnIEtZB2Fqj6xH07DDW8joGCxBT9Vtaxutq8j7tGEaLF22GTbyFU2x53h4bXh4IptT0nv+ZVNRC/5joeYTRHurQthtuloBpNi7yL0OrPLSVNAwL4831Zbxh0lOuRVXk40NidbKACwWlCsFSjadaF2KEjv4bS1JU02uwcnWTKOhMUsvap43se15sSSeZSxwmmtWy7OqJz+eBRrqAnf0QzcrwY3O/TIsF70J5A==';
	generateJWTToken = (user: any) => {
		user ??= {
			id: 'Pi5n3teRS6Vp',
			name: 'Ali Aghamiry',
			email: 'aghamirya@gmail.com'
		};
		const userData = {
			sub: 'sub',
			email: user.email,
			name: user.name,
			// tagline: user.tagline, // optional
			iat: Math.round(new Date().getTime() / 1000),
			exp: Math.round(new Date().getTime() / 1000) + 60,
		};
		return KJUR.jws.JWS.sign('HS256', JSON.stringify({alg: 'HS256', typ: 'JWT'}), JSON.stringify(userData), AuthService.privateKey);
	}

	refreshJwtToken(token: string) {
		// decode token and get payload
		const decoded: any = KJUR.jws.JWS.parse(token);
		// console.log(decoded);
		// check if token is expired
		if (decoded.payloadObj.exp < Math.round(new Date().getTime() / 1000)) {
			// refresh token
			return this.generateJWTToken({
				id: decoded.payloadObj.sub,
				name: decoded.payloadObj.name,
				email: decoded.payloadObj.email
			});
		} else {
			return token;
		}
	}

	static getInstance() {
		if (!AuthService.instance) {
			AuthService.instance = new AuthService();
		}
		return AuthService.instance;
	}
}