package com.nexsoft.discite.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "kelas")
public class Kelas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length =  4)
    private long id;

    @Column(length = 20)
    private String nama_kelas;

    @JsonIgnore
    @OneToOne(mappedBy = "kelas")
    private Account account;
}
