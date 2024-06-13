import React from 'react';
import Header from './Header';
import {RoutesProps} from "react-router/dist/lib/components";

const Layout = ({children}: RoutesProps) => {
	return (
		<div>
			<Header/>
			<main>
				{children}
			</main>
		</div>
	);
};

export default Layout;
