import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import YoutubeForm from "./components/YoutubeForms";

function App() {
  return (
    <div className="App">
      <Container className="mt-5">
        <Row>
          <Col><YoutubeForm/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
