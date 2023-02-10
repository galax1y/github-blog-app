import styled from 'styled-components'

export const BlogMarginProvider = styled.div`
	width: 100%;
	margin-top: 4.5rem;

	> main {
		margin-top: 3rem;
	}
`

export const NoContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	padding-bottom: 1rem;
	border-bottom: 1px solid ${(props) => props.theme['base-label']};
`

export const BlogContainer = styled.main`
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2rem;
`

export const BlogCard = styled.div`
	height: 16.25rem;
	background-color: ${(props) => props.theme['base-post']};
	border-radius: 10px;
	padding: 2rem;

	display: flex;
	flex-direction: column;

	cursor: pointer;
	border: 2px solid transparent;

	&:hover {
		border: 2px solid ${(props) => props.theme['base-label']};
	}
`

export const BlogCardHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	h2 {
		font-size: ${(props) => props.theme.size['xl']};
	}

	span {
		font-size: ${(props) => props.theme.size['sm']};
	}
`

export const BlogCardContent = styled.div`
	margin-top: 1.25rem;

	white-space: no-wrap;
	text-overflow: ellipsis;
	overflow: hidden;
	color: ${(props) => props.theme['base-text']};

	.MarkdownContent {
		* {
			font-size: ${(props) => props.theme.size.md};
			color: ${(props) => props.theme['base-text']};
			text-overflow: ellipsis;
			overflow: hidden;
		}
	}

	p {
		font-size: ${(props) => props.theme.size['md']};
	}
`
