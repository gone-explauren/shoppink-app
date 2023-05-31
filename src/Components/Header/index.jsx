import Nav from '../Nav';
import { Container, Typography } from '@mui/material';
import './header.css'

function Header() {

  return (
    <Typography align='center' color='info'>
    <Container id="header-container" color='info'>
      <a href='/'>
        <h1> my Witchy Store </h1>
				<h2> has a look round:) </h2>
      </a>
      <Nav />
    </Container>
      </Typography>
  )
}

export default Header;