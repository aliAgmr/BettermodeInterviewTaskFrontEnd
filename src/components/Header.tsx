import {Link} from "react-router-dom";
import './Header.css';
import {useLocation} from 'react-router-dom'
import {useCookies} from "react-cookie";
import {useState} from "react";
import LoginModal from "./LoginModal";
import LogoutModal from "./LogoutModal";
import {KJUR} from 'jsrsasign'
import {AuthService} from "../AuthService";

const Header = () => {
	const location = useLocation();
	const [cookies, setCookie] = useCookies(['user'])
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [showLogoutModal, setShowLogoutModal] = useState(false);


	const handleLogin = (user: any) => {
		user.jwtToken = AuthService.getInstance().generateJWTToken(user);
		console.log(user);
		setCookie('user', user, {path: '/'})
	}
	const handleLogout = () => {
		setCookie('user', null, {path: '/'})
	}
	return (
		<div>
			<header className="header">
				<div className="logo">
					<img src='./Bettermode-Logo-GB.png' alt={'Logo'} height={80}/>

					<nav className="nav-links">
						<Link
							to="/"
							className={location.pathname === '/' ? 'active' : ''}>
							Home
						</Link>
						<Link
							to="/community"
							className={location.pathname === '/community' ? 'active' : ''}>
							Community
						</Link>
					</nav>
				</div>
				<nav className="nav-links">
					{cookies.user ? (
						<span>{cookies.user.name}</span>
					) : (
						<a onClick={() => setShowLoginModal(true)}>Login</a>
					)}
					{cookies.user ? (
						<a onClick={() => setShowLogoutModal(true)}>Logout</a>
					) : (
						<div></div>
					)}
				</nav>
			</header>
			{showLoginModal && (
				<LoginModal
					onClose={() => setShowLoginModal(false)}
					onLogin={handleLogin}
				/>
			)}
			{showLogoutModal && (
				<LogoutModal
					onClose={() => setShowLogoutModal(false)}
					onLogout={handleLogout}
				/>
			)}
		</div>
	);
};

export default Header;