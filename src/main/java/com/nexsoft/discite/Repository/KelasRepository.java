package com.nexsoft.discite.Repository;

import com.nexsoft.discite.Entity.Kelas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KelasRepository extends JpaRepository<Kelas, Long> {
}
