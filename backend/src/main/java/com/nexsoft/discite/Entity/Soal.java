package com.nexsoft.discite.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "soal")
public class Soal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length =  4)
    private long id;

    @Column(length = 50)
    private String question;

    @Column(length = 50)
    private String pilihan_1;

    @Column(length = 50)
    private String pilihan_2;

    @Column(length = 50)
    private String pilihan_3;

    @Column(length = 50)
    private String pilihan_4;

    @Column(length = 10)
    private String jawaban;
}
