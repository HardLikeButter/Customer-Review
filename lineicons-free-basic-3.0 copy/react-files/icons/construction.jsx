import React from 'react';

function Construction(props) {
	const title = props.title || "construction";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.4 23.2c2.4 0 4.4-2 4.4-4.4v-3.3c0-1.9-1.2-3.6-3.1-4.2l-32-9.9c-.4-.1-.9-.2-1.3-.2H13.5c-2.4 0-4.4 2-4.4 4.4v13.2c0 2.4 2 4.4 4.4 4.4H17v20.2H6c-2.6 0-4.8 2.1-4.8 4.8V58c0 2.6 2.1 4.8 4.8 4.8h25.6c2.6 0 4.8-2.1 4.8-4.8v-9.8c0-2.6-2.1-4.8-4.8-4.8h-11V23.2h30.8v11.9c0 1.9 1.3 3.6 3.3 4.1 3.1.8 5.1 3.9 4.5 7.1-.4 2.5-2.5 4.5-4.9 4.9-1.9.3-3.7-.1-5.1-1.3-1.4-1.2-2.2-2.9-2.2-4.7 0-.7.1-1.4.4-2.1.3-.9-.2-1.9-1.1-2.2-.9-.3-1.9.2-2.2 1.1-.4 1-.5 2.1-.5 3.2 0 2.9 1.3 5.6 3.5 7.4 1.8 1.5 4 2.3 6.2 2.3.6 0 1.1 0 1.7-.2 3.9-.7 7.1-3.9 7.8-7.8.9-5-2.2-9.8-7.1-11.1-.3-.1-.7-.3-.7-.7V23.2h3.4zm-25.5 25V58c0 .7-.6 1.3-1.3 1.3H6c-.7 0-1.3-.6-1.3-1.3v-9.8c0-.7.6-1.3 1.3-1.3h25.6c.7 0 1.3.6 1.3 1.3zm26.4-32.7v3.3c0 .5-.4.9-.9.9H28.5V5.4l30.1 9.3c.4.1.7.4.7.8zm-46.6 3.3V5.6c0-.5.4-.9.9-.9H25v15H13.5c-.4 0-.8-.4-.8-.9z"/>
	</g>
</svg>
	);
};

export default Construction;