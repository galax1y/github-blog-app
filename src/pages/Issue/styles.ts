import styled from 'styled-components'

export const IssueContainer = styled.div`
	max-width: 864px;
	height: 100%;
	margin: 0 auto;
	margin-top: -5.75rem;
	margin-bottom: 10rem;

	@media only screen and (max-width: 928px) {
		margin: 0 2rem;
		margin-top: -5.75rem;
	}

	display: flex;
	flex-direction: column;
	align-items: center;
`

export const IssueHeaderContainer = styled.header`
	width: 100%;
	height: 168px;
	background: ${(props) => props.theme['base-profile']};

	padding: 2rem;
	border-radius: 10px;

	box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

	display: flex;
	flex-direction: column;

	overflow: hidden;
`

export const IssueNavigation = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	a {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		font-size: ${(props) => props.theme.size['xsm']};
		font-weight: bold;
		text-transform: uppercase;
	}
`

export const IssueInformation = styled.div`
	margin-top: 1.25rem;
	display: flex;
`

export const IssueFooter = styled.footer`
	margin-top: 0.5rem;
	color: ${(props) => props.theme['base-span']};

	font-size: ${(props) => props.theme.size.md};

	display: flex;
	align-items: baseline;
	justify-content: flex-start;
	gap: 2rem;

	label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	a {
		color: ${(props) => props.theme['base-span']};
	}

	svg {
		color: ${(props) => props.theme['base-label']};
	}
`

export const IssueContentContainer = styled.main`
	padding: 2rem 2.5rem;
	width: 100%;

	color: ${(props) => props.theme['base-text']};

	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`
