import datos from "./DatosPrueba.json"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../styles/ProductoCard.module.css';
import { Container } from "react-bootstrap";

export function ProductosGrid() {
  return (
    <Container>
    <Row xs={2} md={5} className="g-4">
      {datos.map((dato) =>(
        <Col key={dato.id} dato={dato}>
          <Card>
            <>
            <Card.Img variant="top" src={dato.imagen} width={230} height={345} className={styles.productoImg}/>
            <Card.Body className={styles.cardBodyTam}>
                <Card.Title className={styles.productoCard}>{dato.nombre}</Card.Title>
                <Card.Text className={styles.productoCard}>
                  {dato.estado}: {dato.disponibles}
                  <br/>
                  ${dato.precio}
                </Card.Text>   
                <a href="#" className="btn btn-primary btn-sm">Añandir al carrito</a>                    
            </Card.Body>
            </>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
}

