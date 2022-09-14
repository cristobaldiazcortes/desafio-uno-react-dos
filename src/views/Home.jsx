import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="contenedor-home">
      <br></br>
      <br></br>
      <h1>Bienvenidos a <b>Happy Cake</b></h1>
      <p>el lugar de los pasteles felices</p>
      <img src='https://i.postimg.cc/PPTWn9RN/pastel.jpg'  alt='pastel' className="imagen-cake"/>

    </Container>
  );
}

export default Home;
