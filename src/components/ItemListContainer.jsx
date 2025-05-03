import { Container, Row, Col } from 'react-bootstrap';

const ItemListContainer = ({ greeting }) => {
  return (
    <Container className="mt-5 pt-5">
      <Row className="justify-content-center">
        <Col md="auto">
          <h2>{greeting}</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemListContainer;