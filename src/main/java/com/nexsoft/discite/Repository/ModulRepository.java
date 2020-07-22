package com.nexsoft.discite.Repository;

import com.nexsoft.discite.Entity.Modul;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ModulRepository extends JpaRepository<Modul, Long> {
    @Query("select count(m) from Modul m where m.nama_kelas = ?1 and m.nama_mapel = ?2")
    Integer countModul(String namaKelas, String namaMapel);

    @Query("select count(m) from Modul m where m.nama_kelas = ?1")
    Integer countModulByKelas(String namaKelas);
}
