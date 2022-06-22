import React, {useEffect, useState} from "react";
import {Button, Card, Container, Form, FormGroup, Row, Table} from "react-bootstrap";
import AdminContext from "../context/AdminContext";
import "./AddProdukt.css";
import {Link} from "react-router-dom";


const AddProdukt = () => {

    const [nazwa, setNazwa] = useState("");
    const [cena, setCena] = useState("");
    const [zdjecie, setZdjecie] = useState("");
    const [ilosc, setIlosc] = useState("");
    const [produkty, setProdukty] =  useState([]);

    useEffect(() => {
        getAllProdukty();
    }, []);

    const getAllProdukty = () => {
        AdminContext.getAllProdukty().then((response) => {
            setProdukty(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const saveProdukt = (e) => {
        e.preventDefault();
        const produkt = {nazwa, cena, zdjecie, ilosc}
        AdminContext.createProdukt(produkt).then((response) => {
            getAllProdukty();
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })
    }

    const deleteProdukt = (id_produktu) => {
        AdminContext.deleteProdukt(id_produktu).then((response) => {
            getAllProdukty();
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="add_produkt">
            <Container className="kontener">
                <Row>
                    <h2> Dodaj produkt</h2>
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
                            <Button style={{marginBottom: "10px"}}variant="success" onClick={(e) => saveProdukt(e)}>
                                Dodaj produkt
                            </Button>
                        </Form>
                    </Card>
                </Row>
                <br />
                <Row>
                    <h2> Wszystkie produkty </h2>
                    <Card>
                        <Table>
                            <thead>
                                <th> Produkt ID </th>
                                <th> Nazwa </th>
                                <th> Cena </th>
                                <th> Zdjęcie </th>
                                <th> Ilość </th>
                                <th> Operacje </th>
                            </thead>
                            <tbody>
                            {
                                produkty.map(
                                    produkty =>
                                        <tr key = {produkty.id_produktu}>
                                            <td>{produkty.id_produktu}</td>
                                            <td>{produkty.nazwa}</td>
                                            <td>{produkty.cena}</td>
                                            <td>{produkty.zdjecie}</td>
                                            <td>{produkty.ilosc}</td>
                                            <td> <Link to={`/edit_produkt/${produkty.id_produktu}`}><Button variant="info"> Edytuj </Button></Link>
                                            <Button style={{marginLeft: "10px"}} variant="danger" onClick={() => deleteProdukt(produkty.id_produktu)}> Usuń </Button></td>
                                        </tr>
                                )
                            }
                            </tbody>
                        </Table>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}

export default AddProdukt;