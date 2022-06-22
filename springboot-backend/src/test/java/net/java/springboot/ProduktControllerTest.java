package net.java.springboot;

import net.java.springboot.controller.ProduktController;
import net.java.springboot.model.Produkt;
import net.java.springboot.repository.ProduktRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@RunWith(SpringRunner.class)
public class ProduktControllerTest {

    @Autowired
    ProduktRepository produktRepository;

    @Autowired
    ProduktController controller;

    @Test
    public void injectedRepositoryIsNotNull() {
        assertThat(produktRepository).isNotNull();
    }

    @Test
    public void injectedControllerIsNotNull() {
        assertThat(controller).isNotNull();
    }

    @Test
    public void createProductTest() {
        Produkt produkt = new Produkt();
        produkt.setNazwa("Produkt 1");
        produkt.setZdjecie("picture.png");
        produkt.setCena((float)12.99);
        produkt.setIlosc(5);
        assertThat(controller.createProdukt(produkt)).isNotNull();
    }

    @Test
    public void getAllProduktyTest() {
        assertThat(controller.getAllProdukty()).isNotNull();
    }

    @Test
    public void getProduktByIdTest() {
        assertEquals(controller.getProduktById(1).getBody().getId_produktu(), produktRepository.findById(1L).get().getId_produktu());
    }

    @Test
    public void updateProduktTest() {
        Produkt produkt = new Produkt();
        produkt.setNazwa("Produkt 2");
        produkt.setZdjecie("picture2.png");
        produkt.setCena((float)10.99);
        produkt.setIlosc(5);
        assertEquals(controller.updateProdukt(1, produkt).getBody().getNazwa(), produkt.getNazwa());
    }

    @Test
    public void deleteProduktTest() {
        assertEquals(controller.deleteProdukt(57).getStatusCode(), HttpStatus.NO_CONTENT);
    }
}
