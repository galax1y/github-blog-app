import styled from 'styled-components'

export const HeaderContainer = styled.header`
	width: 100%;
	height: 296px;
	position: relative;

	@media only screen and (max-width: 928px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-items: center;

		transition: all 0.4s;

		.logo {
			position: absolute;
			width: 10rem;
			justify-content: center;
			transform: scale(120%);
		}

		.decoration:first-child {
			height: 296px;
			left: 50%;
			top: 0;
		}

		.decoration:last-child {
			height: 296px;
			left: 50%;
			top: 0;
		}
	}

	@media only screen and (max-width: 576px) {
		height: min-content;
	}

	background: ${(props) => props.theme['base-profile']};

	background: linear-gradient(
		0deg,
		hsla(210, 77%, 35%, 0.1) 0%,
		hsla(210, 79%, 38%, 0.25) 14%,
		hsla(210, 59%, 11%, 1) 100%
	);

	display: flex;
	justify-content: space-between;
	align-items: center;

	.logo {
		align-self: start;
		padding-top: 4rem;
	}
`
