import styled from 'styled-components'
import * as Tabs from '@radix-ui/react-tabs'

export const IndexContainer = styled.div`
	max-width: 480px;
	margin: 0 auto;

	margin-top: -5.75rem;

	box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

	display: flex;
	flex-direction: row;
	flex: 1;

	border: 1px solid ${(props) => props.theme['base-border']};
	border-radius: 10px;

	form {
		margin-top: 2rem;
	}

	@keyframes fadeOut {
		from {
			transform: translate(0, -100%);
			opacity: 0;
		}
		to {
			transform: translate(0, 0);
			opacity: 1;
		}
	}

	@keyframes fadeIn {
		from {
			transform: translate(0, 0%);
			opacity: 1;
		}
		to {
			transform: translate(0, -100%);
			opacity: 0;
		}
	}
`

export const TabsRoot = styled(Tabs.Root)`
	width: 100%;
	padding: 1rem;

	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme['base-input']};
	border-radius: 10px;
`

export const TabsList = styled(Tabs.List)`
	display: flex;
	gap: 1rem;
`

export const TabsTrigger = styled(Tabs.Trigger)`
	flex: 1;
	background-color: transparent;

	border: none;
	border-bottom: 2px solid transparent;
	border-color: ${(props) => props.theme['base-border']};

	font-size: ${(props) => props.theme.size.xl};
	font-weight: 700;

	&:hover {
		border-bottom: 2px solid ${(props) => props.theme['base-label']};
	}

	&[data-state='active'] {
		color: ${(props) => props.theme['base-title']};
		border-bottom: 2px solid ${(props) => props.theme['base-label']};
	}

	&[data-state='inactive'] {
		color: ${(props) => props.theme['base-label']};
		border-bottom: 2px solid ${(props) => props.theme['base-label']};
	}
`

export const TabsContent = styled(Tabs.Content)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;

	fieldset {
		all: unset;

		display: flex;
		justify-content: space-evenly;
		align-items: center;
		gap: 1rem;
	}

	label {
		font-weight: 700;
		color: ${(props) => props.theme['base-text']};
		user-select: none;
		display: flex;
		gap: 1rem;

		svg {
			height: 1.25rem;
		}
	}

	input {
		&:-webkit-autofill {
			transition: all 0s 50000s;
		}

		all: unset;
		color: ${(props) => props.theme['base-text']};
		border-bottom: 2px solid ${(props) => props.theme['base-border']};

		cursor: text;
		padding: 0 1rem;

		text-align: justify;

		&::placeholder {
			color: ${(props) => props.theme['base-label']};
		}
	}

	legend,
	button {
		all: unset;

		width: calc(100% * (100% - 1rem));
		padding: 0.5rem;
		background-color: ${(props) => props.theme['base-post']};

		border: 1px solid ${(props) => props.theme['base-border']};
		border-radius: 10px;

		cursor: pointer;
		color: ${(props) => props.theme['base-text']};
		font-size: ${(props) => props.theme.size['l']};
		font-weight: 700;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;

		svg {
			height: 1.75rem;
		}

		.RedirectButton {
			margin-top: 2rem;
		}

		&:disabled {
			color: #f85868;
			border-color: #f85868;
			background-color: ${(props) => props.theme['base-input']};
			cursor: not-allowed;

			a {
				pointer-events: none;
			}
		}

		&:not(:disabled):hover {
			background-color: ${(props) => props.theme['base-border']};
		}

		&.RedirectButton:not(:disabled):hover {
			border: 1px solid #32f343;
			color: #32f343;
		}

		a {
			display: flex;
			align-items: center;
			justify-content: center;

			width: 100%;
			height: 100%;
			color: unset;
		}
	}
`
