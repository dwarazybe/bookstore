package net.java.springboot.repository;

import net.java.springboot.model.Uzytkownicy;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<Uzytkownicy, Long> {

}
