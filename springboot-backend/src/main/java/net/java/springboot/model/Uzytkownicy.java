package net.java.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "uzytkownicy")
public class Uzytkownicy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_uzytkownika;

    @Column(name = "e_mail")
    private String e_mail;

    @Column(name = "haslo")
    private String haslo;
}

