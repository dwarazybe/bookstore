package net.java.springboot.repository;

import net.java.springboot.model.Produkt;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProduktRepository extends JpaRepository<Produkt , Long> {

}
