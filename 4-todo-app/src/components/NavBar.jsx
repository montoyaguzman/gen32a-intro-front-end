import { Container, Navbar } from "react-bootstrap"



const NavBar = ({ title, name }) => {
  return (
    <Navbar className="bg-dark" variant='dark'>
      <Container>
        <Navbar.Brand href="#home">{ title }</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{ name }</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar