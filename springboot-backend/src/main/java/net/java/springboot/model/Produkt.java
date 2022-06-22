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
@Table(name = "produkt")
public class Produkt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_produktu;

    @Column(name = "nazwa")
    private String nazwa;

    @Column(name = "cena")
    private float cena;

    @Column(name="ilosc")
    private int ilosc;
    @Column(name="zdjecie")
    private String zdjecie;
}
