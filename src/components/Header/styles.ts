import styled from 'styled-components'

export const HeaderContainer = styled.header`
	width: 100%;
	height: 296px;

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
