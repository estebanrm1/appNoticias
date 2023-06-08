import { Card, Col } from "react-bootstrap";

const CardNoticia = ({ descripcion, titulo, link, imagen }) => {
    return (
        <Card as={Col} style={{ width: "18rem" }} className="me-md-3 mb-3 bg-transparent border-black">
            <Card.Img className="p-1" style={{ height: "10.5rem" }} variant="top" src={imagen || `https://www.grupomisol.com/wp-content/uploads/2014/11/imagen-no-disponible.gif`} />
            <Card.Title>{titulo}</Card.Title>
            <Card.Text className="text-truncate">{descripcion}</Card.Text>
            <a className="btn btn-dark mt-auto mb-3" href={link} target="_blank">
                Ver noticia
            </a>
        </Card>
    );
};

export default CardNoticia;