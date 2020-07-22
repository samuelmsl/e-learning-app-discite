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

    @Column(nullable = false, length = 40)
    private String nama_siswa;

    @Column(nullable = false, length = 20)
    private String nama_mapel;

    @Column(nullable = false, length = 20)
    private String nama_kelas;

    @Column(nullable = false, name = "nilai", length = 4)
    private int nilai;
}
