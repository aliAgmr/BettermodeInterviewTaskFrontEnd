import React, {useState} from 'react';
import './LoginModal.css';

const LoginModal = ({onClose, onLogin}: any) => {
	const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = (e: any) => {
		e.preventDefault();
		onLogin({
			id,
			name,
			email
		});
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
					{/*<div>*/}
					{/*	<label>Sub ID:</label>*/}
					{/*	<input*/}
					{/*		type="text"*/}
					{/*		value={id}*/}
					{/*		onChange={(e: any) => setId(e.target.value)}*/}
					{/*		required*/}
					{/*	/>*/}
					{/*</div>*/}
					<div>
						<label>Name:</label>
						<input
							type="text"
							value={name}
							onChange={(e: any) => setName(e.target.value)}
							required
						/>
					</div>
					<div>
						<label>E-mail:</label>
						<input
							type="email"
							value={email}
							onChange={(e: any) => setEmail(e.target.value)}
							required
						/>
					</div>
					<button type="submit">Login</button>
				</form>
			</div>
		</div>
	);
};

export default LoginModal;
