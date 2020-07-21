package com.nexsoft.discite.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "jawaban")
public class Jawaban {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 4)
    private long id;

    @OneToOne()
    @JoinColumn(name = "id_account", nullable = false)
    private Account account;

    @OneToOne()
    @JoinColumn(name = "id_mapel", nullable = false)
    private Modul modul;

    @OneToOne()
    @JoinColumn(name = "id_kelas", nullable = false)
    private Kelas kelas;

    @Column(nullable = false, name = "nilai", length = 4)
    private Double nilai;
}
