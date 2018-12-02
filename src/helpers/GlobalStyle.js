import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900');
	* {
		box-sizing: border-box;
	}
	body {
		padding: 0;
		margin: 0;
		font-family: 'Roboto', sans-serif;
		box-sizing: border-box;
	}
	ul {
		list-style-type: none;
	}
	p, h1, h2, h3, h4, h5, h6, ul, li {
		margin: 0;
		padding: 0;
	}
	button {
		outline: none;
		border: none;
		background-color: transparent;
		&:focus, &:active {
			outline: none;
		}
		&:hover {
			cursor: pointer;
		}
	}
	a {
		text-decoration: none;
	}
`;
