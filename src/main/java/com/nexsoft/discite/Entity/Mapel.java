package com.nexsoft.discite.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "mapel")
public class Mapel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length =  4)
    private long id;

    @Column(length = 20)
    private String nama_mapel;
}
