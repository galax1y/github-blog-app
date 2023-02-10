import * as Avatar from '@radix-ui/react-avatar'
import styled from 'styled-components'

export const ProfileContainer = styled.div`
	width: 100%;
	height: 212px;
	background: ${(props) => props.theme['base-profile']};

	padding: 2rem;
	border-radius: 10px;

	box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

	display: flex;
	gap: 2rem;

	overflow: hidden;
`

export const ProfileHeader = styled.header`
	display: flex;
	justify-content: space-between;

	a {
		font-size: ${(props) => props.theme.size['xsm']};
		font-weight: 700;
		line-height: 1.6;

		display: flex;
		align-items: center;
		gap: 0.5rem;

		span {
			color: ${(props) => props.theme['blue']};
			text-transform: uppercase;
		}
	}
`

export const ProfileInformation = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`

export const ProfileDescription = styled.div`
	margin-top: 0.5rem;
`

export const ProfileFooter = styled.footer`
	flex: 1;
	display: flex;
	align-items: flex-end;
	gap: 1.5rem;

	p,
	a {
		color: ${(props) => props.theme['base-subtitle']};
	}

	svg {
		color: ${(props) => props.theme['base-label']};
	}

	label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
`

export const AvatarRoot = styled(Avatar.Root)`
	width: 9.25rem;
	aspect-ratio: 1 / 1;
	border-radius: 8px;

	overflow: hidden;
`

export const AvatarImage = styled(Avatar.Image)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: inherit;
`

export const AvatarFallback = styled(Avatar.Fallback)`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme['base-input']};

	svg {
		height: 48px;
	}
`
