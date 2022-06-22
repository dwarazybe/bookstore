import React, {useEffect, useState} from "react";
import {Button, Card, Container, Form, FormGroup, Row, Table} from "react-bootstrap";
import AdminContext from "../context/AdminContext";
import "./AddProdukt.css";
import {Link, useParams, useNavigate} from "react-router-dom";

const EditProdukt = () => {

    const [nazwa, setNazwa] = useState("");
    const [cena, setCena] = useState("");
    const [zdjecie, setZdjecie] = useState("");
    const [ilosc, setIlosc] = useState("");
    const {id_produktu} = useParams();
    const navigate = useNavigate();

    const EditProdukt = (e) => {
        e.preventDefault();
        const produkt = {nazwa, cena, zdjecie, ilosc}
        AdminContext.updateProdukt(id_produktu, produkt).then((response) => {
            navigate("/admin");
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        AdminContext.getProduktById(id_produktu).then((response) =>{
            setNazwa(response.data.nazwa);
            setCena(response.data.cena);
            setZdjecie(response.data.zdjecie);
            setIlosc(response.data.ilosc);
        }).catch(error => {
            console.log(error);
        })
    }, [id_produktu])

    return (
        <div className="add_produkt">
            <Container>
                <Row>
                    <h2> Edytuj produkt</h2>
                    <Card>
                        <Form className="form_add">
                            <FormGroup>
                                <Form.Label>
                                    Nazwa:
                                </Form.Label>
                                <Form.Control className="input_add" type="text" placeholder="Nazwa produktu" name="nazwa" value={nazwa} onChange={(e)=> setNazwa(e.target.value)}/>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>
                                    Cena:
                                </Form.Label>
                                <Form.Control className="input_add" type="text" placeholder="Cena produktu" name="cena" value={cena} onChange={(e)=> setCena(e.target.value)}/>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>
                                    Zdjecie:
                                </Form.Label>
                                <Form.Control className="input_add" type="text" placeholder="Ścieżka do zdjęcia" name="zdjecie" value={zdjecie} onChange={(e)=> setZdjecie(e.target.value)}/>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>
                                    Ilosc:
                                </Form.Label>
                                <Form.Control className="input_add" type="text" placeholder="Ilość produktu" name="ilosc" value={ilosc} onChange={(e)=> setIlosc(e.target.value)}/>
                            </FormGroup>
                            <br/>
                            <Button style={{marginBottom: "10px"}} variant="success" onClick={(e) => EditProdukt(e)}>
                                Edytuj produkt
                            </Button>
                            <Link to="/admin">
                                <Button style={{marginLeft: "10px", marginBottom: "10px"}} variant="danger"> Powrót </Button>
                            </Link>
                        </Form>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}

export default EditProdukt;