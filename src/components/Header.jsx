import Container from './Container';
import Logo from './Logo';
import Search from './Search';

function Header() {
  return (
    <Container>
      <div className='header'>
        <Logo />
        <Search />
      </div>
    </Container>
  );
}

export default Header;
