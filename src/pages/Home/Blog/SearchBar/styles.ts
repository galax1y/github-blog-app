import styled from 'styled-components'

export const SearchContainer = styled.div`
	width: 100%;
	height: 5.75rem;

	input {
		&:-webkit-autofill {
			transition: all 0s 50000s;
		}
	}
`

export const SearchHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	h2 {
		font-size: ${(props) => props.theme.size['l']};
	}

	span {
		font-size: ${(props) => props.theme.size['sm']};
	}
`

export const SearchForm = styled.form`
	margin-top: 0.75rem;
	display: flex;
	flex-direction: column;
`

export const SearchInput = styled.input`
	all: unset;

	background-color: ${(props) => props.theme['base-input']};
	padding: 0.75rem 1rem;
	border-radius: 6px;
	border: 1px solid ${(props) => props.theme['base-border']};

	color: ${(props) => props.theme['base-text']};

	&:focus {
		border-color: ${(props) => props.theme['blue']};
	}
`
