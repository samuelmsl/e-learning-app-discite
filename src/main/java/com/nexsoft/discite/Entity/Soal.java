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

    @Column(nullable = false, length = 50)
    private String question;

    @Column(nullable = false, length = 50)
    private String pilihan_1;

    @Column(nullable = false, length = 50)
    private String pilihan_2;

    @Column(nullable = false, length = 50)
    private String pilihan_3;

    @Column(nullable = false, length = 50)
    private String pilihan_4;

    @Column(nullable = false, length = 10)
    private String jawaban;

    @Column(nullable = false, length = 10)
    private String nama_kelas;

    @Column(nullable = false, length = 10)
    private String nama_mapel;
}
