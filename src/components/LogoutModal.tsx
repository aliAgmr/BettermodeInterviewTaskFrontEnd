import React from 'react';
import './LogoutModal.css';

const LogoutModal = ({onClose, onLogout}: any) => {

	const handleSubmit = (e: any) => {
		e.preventDefault();
		onLogout();
		onClose();
	};

	return (
		<div className="modal">
			<div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
				<h2>Login</h2>
				<form onSubmit={handleSubmit}>
					<div>
						<h4>
							Are you sure you want to logout?
						</h4>
					</div>
					<button type="submit">Logout</button>
				</form>
			</div>
		</div>
	);
};

export default LogoutModal;
