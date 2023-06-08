import CardNoticia from "./CardNoticia";
import { Container, Row } from "react-bootstrap";

const ListaNoticias = ({noticias}) => {
    return (
        <Container fluid className="py-3 border border-secondary rounded-2">
        <Row xs={1} md={2} lg={3} xl={4} className="h-100 justify-content-center">
        {noticias.length === 0 ? (
            <p className="lead">No se encontraron noticias en esta categoría</p>
        ) : (
            noticias.map((noticia) => (
                <CardNoticia 
                key={noticia.title}
                imagen={noticia.image_url}
                titulo={noticia.title}
                descripcion={noticia.description}
                link={noticia.link}></CardNoticia>
            ))
        )}
        </Row>
    </Container>
    );
};

export default ListaNoticias;