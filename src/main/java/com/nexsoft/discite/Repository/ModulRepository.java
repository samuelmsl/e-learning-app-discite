package com.nexsoft.discite.Repository;

import com.nexsoft.discite.Entity.Modul;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ModulRepository extends JpaRepository<Modul, Long> {
    @Query("select count(m) from Modul m where m.nama_kelas = ?1 and m.nama_mapel = ?2")
    Integer countModul(String namaKelas, String namaMapel);

    @Query("select count(m) from Modul m where m.nama_kelas = ?1")
    Integer countModulByKelas(String namaKelas);

    @Query("select m from Modul m where m.nama_kelas = ?1 and m.nama_mapel = ?2")
    List<Modul> getModulByKelas(String nama_kelas, String nama_mapel);

    @Query("select m from Modul m where m.nama_kelas = ?1 and m.nama_mapel = ?2 and m.nama_modul = ?3")
    List<Modul> getModulByJudul(String nama_kelas, String nama_mapel, String nama_modul);
}
