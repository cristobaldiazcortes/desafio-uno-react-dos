import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
export default function Navigation() {
  return (
    <>
      <Navbar bg="danger" variant="danger">
        <Container>
          <div className="justify-content-start">

            <Link to="/" className="text-white ms-3 text-decoration-none">
            <img src='https://i.postimg.cc/G983KxJ2/home-1.png' alt='home' className="imagen-casa"/>
              Home
            </Link>
            <Link
              to="/contacto"
              className="text-white ms-3 text-decoration-none"
            >
            <img src='https://i.postimg.cc/ZCYWcdRD/square.png' alt='square' className="imagen-square"/>
              Contacto
            </Link>
          </div>
          <Navbar.Brand className="justify-content-end color-letra">
            Happy Cake
            <img src='https://i.postimg.cc/gj5s1GRD/cake.png' alt='cake'className="imagen-cake-navbar"/>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
