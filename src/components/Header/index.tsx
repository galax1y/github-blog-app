import { HeaderContainer } from './styles';
import logosrc from '../../assets/blog-logo.svg'
import effectleft from '../../assets/effect-left.svg'
import effectright from '../../assets/effect-right.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img className='decoration' src={effectleft} alt="" />
      <img className='logo' src={logosrc} alt="Github Blog" />
      <img className='decoration' src={effectright} alt="" />
    </HeaderContainer>
  )
}