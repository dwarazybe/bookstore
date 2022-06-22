package net.java.springboot.controller;

import net.java.springboot.exception.ResourceNotFoundException;
import net.java.springboot.model.Produkt;
import net.java.springboot.repository.ProduktRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/get")
public class ProduktController {

    @Autowired
    private ProduktRepository produktRepository;

    @CrossOrigin("*")
    @GetMapping
    public List<Produkt> getAllProdukty() {
        return produktRepository.findAll();
    }

    @CrossOrigin("*")
    @PostMapping("/produkty")
    public Produkt createProdukt(@RequestBody Produkt produkt) {
        System.out.println("produkt: " + produkt);
        return produktRepository.save(produkt);
    }

    @CrossOrigin("*")
    @GetMapping("{id_produktu}")
    public ResponseEntity<Produkt> getProduktById(@PathVariable long id_produktu) {
        Produkt produkt = produktRepository.findById(id_produktu)
                .orElseThrow(() -> new ResourceNotFoundException("Produkt o podanym id nie istnieje: " + id_produktu));
        return ResponseEntity.ok(produkt);
    }

    @CrossOrigin("*")
    @PutMapping("{id_produktu}")
    public ResponseEntity<Produkt> updateProdukt(@PathVariable long id_produktu,@RequestBody Produkt produktDetails) {
        Produkt updateProdukt = produktRepository.findById(id_produktu)
                .orElseThrow(() -> new ResourceNotFoundException("Produkt o podanym id nie istnieje: " + id_produktu));
        updateProdukt.setNazwa(produktDetails.getNazwa());
        updateProdukt.setCena(produktDetails.getCena());
        updateProdukt.setIlosc(produktDetails.getIlosc());
        updateProdukt.setZdjecie(produktDetails.getZdjecie());
        produktRepository.save(updateProdukt);

        return ResponseEntity.ok(updateProdukt);
    }

    @CrossOrigin("*")
    @DeleteMapping("{id_produktu}")
    public ResponseEntity<HttpStatus> deleteProdukt(@PathVariable long id_produktu) {
        Produkt produkt = produktRepository.findById(id_produktu)
                .orElseThrow(() -> new ResourceNotFoundException("Produkt o podanym id nie istnieje: " + id_produktu));

        produktRepository.delete(produkt);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}


