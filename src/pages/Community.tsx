import './Community.css';
import {useCookies} from "react-cookie";
import {AuthService} from "../AuthService";

const Community = () => {
	const [cookies, setCookies] = useCookies(['user'])
	let jwtToken = cookies?.user?.jwtToken;
	if (jwtToken) {
		jwtToken = AuthService.getInstance().refreshJwtToken(cookies.user.jwtToken);
		if (jwtToken !== cookies.user.jwtToken) {
			setCookies("user", {...cookies.user, jwtToken}, {path: '/'})
			console.log(cookies.user);
		}
	}
	const source = cookies.user ? encodeURI(`https://basic-33j6rm5b.bettermode.io/api/auth/sso?redirect_uri=/&jwt=${cookies.user.jwtToken}`) : 'https://basic-33j6rm5b.bettermode.io';
	return <iframe className='iframe' src={source}></iframe>;
};

export default Community;