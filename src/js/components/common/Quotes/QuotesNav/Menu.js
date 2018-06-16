import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuStyles from './MenuStyles';

class Menu extends Component {
	render() {
		return (
			<MenuStyles isOpen={this.props.isOpen}>
				<MenuStyles.List>
					{this.props.menuList.map(listItem => (
						<MenuStyles.ListItem onClick={listItem.onClick}>
							{listItem.text}
						</MenuStyles.ListItem>
					))}
				</MenuStyles.List>
			</MenuStyles>
		);
	}
};

Menu.propTypes = {
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
	menuList: PropTypes.arrayOf(PropTypes.shape({
		onClick: PropTypes.func,
		text: PropTypes.string
	})),

};

export default Menu;