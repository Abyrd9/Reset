import React from 'react';
import PropTypes from 'prop-types';

const NavBar = props => {
	return (
		<div className="nav">
			<i className="fas fa-arrow-left nav__arrow" onClick={props.onClick}></i>
			<div className="nav__logo-container">
				<img src={'../../../src/assets/img/Logo.png'} alt={"logo image"} className="nav__logo-container__logo" />
			</div>
		</div>
	);
};

NavBar.propTypes = {
	onClick: PropTypes.func,
};

export default NavBar;