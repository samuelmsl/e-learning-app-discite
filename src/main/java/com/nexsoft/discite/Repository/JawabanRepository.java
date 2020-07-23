package com.nexsoft.discite.Repository;

import com.nexsoft.discite.Entity.Jawaban;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JawabanRepository extends JpaRepository<Jawaban, Long> {
    @Query("select j from Jawaban j where j.nama_kelas = ?1")
    List<Jawaban> findAllByKelas(String kelas);
}
