package com.nexsoft.discite.Repository;

import com.nexsoft.discite.Entity.Soal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SoalRepository extends JpaRepository<Soal, Long> {
    @Query("select count(s) from Soal s where s.nama_mapel = ?1 and s.nama_kelas = ?2")
    Integer countSoal(String namaMapel, String namaKelas);

    @Query("select s from Soal s where s.nama_mapel = ?1 and s.nama_kelas = ?2")
    List<Soal> getSoalByNama(String namaMapel, String namaKelas);

    @Query("select count(s) from Soal s where s.nama_kelas = ?1")
    Integer countSoalByKelas(String namaKelas);
}
