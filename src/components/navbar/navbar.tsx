import { Container } from "react-bootstrap";
import Navbar1 from "react-bootstrap/Navbar";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <Navbar1>
      <Container>
        <Navbar1.Brand href="#home">Navbar with text</Navbar1.Brand>
        <Navbar1.Toggle />
        <Navbar1.Collapse className="justify-content-end">
          <Navbar1.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar1.Text>
        </Navbar1.Collapse>
      </Container>
    </Navbar1>
  );
};
export default Navbar;
