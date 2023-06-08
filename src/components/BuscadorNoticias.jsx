import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import ListaNoticias from './ListaNoticias';

const BuscadorNoticias = () => {

    const [categoria, setCategoria] = useState("");
    const [noticias, setNoticias] = useState([]);

    useEffect(() => { consultarAPI(); }, [categoria]);

    const consultarAPI = async ()=>{
        try {
            const respuesta = await fetch(`https://newsdata.io/api/1/news?apikey=pub_241309c01f186acaab8703dc7f674dc770f52&category=${categoria || "top"}&language=es`);
            const resultadoNoticias = await respuesta.json();
            setNoticias(resultadoNoticias.results);
                console.log(consultarAPI)
            } catch (error) {
                console.log(error);
            }
    };

    return (
        <>
        <Row className='justify-content-md-center'>
            <Col md="auto">
                <h6>Buscar noticias por categoria:</h6>
                <Form.Select className='bg-transparent border-black' categoria= {categoria}  onChange={(e) => {
                    setCategoria(e.target.value);
                }}
                value={categoria}
                >
            <option value="">Seleccionar categoria</option>
            <option value="top">Mas vistas</option>
            <option value="business">Negocios</option>
            <option value="food">Gastronomia</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="environment">Medio Ambiente</option>
            <option value="health">Salud</option>
            <option value="politics">Política</option>
            <option value="sports">Deportes</option>
            <option value="science">Ciencia</option>
            <option value="technology">Tecnología</option>
            <option value="tourism">Turismo</option>
            <option value="world">El Mundo</option>
                </Form.Select>
            </Col>
        </Row>
        <hr />
        <ListaNoticias noticias={noticias}></ListaNoticias>
                </>

    );
};

export default BuscadorNoticias;