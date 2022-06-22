import axios from "axios";

class AdminContext {

    getAllProdukty() {
        return axios.get("http://localhost:8080/api/get")
    }

    createProdukt(produkt) {
        console.log("createProdukt: ", produkt);
        return axios.post("http://localhost:8080/api/get/produkty", produkt)
    }

    getProduktById(id_produktu) {
        return axios.get("http://localhost:8080/api/get/" + id_produktu);
    }

    updateProdukt(id_produktu, produkt) {
        return axios.put("http://localhost:8080/api/get/" + id_produktu, produkt)
    }

    deleteProdukt(id_produktu) {
        return axios.delete("http://localhost:8080/api/get/" + id_produktu);
    }

}

export default new AdminContext();