package com.nexsoft.discite.Repository;

import com.nexsoft.discite.Entity.Jawaban;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JawabanRepository extends JpaRepository<Jawaban, Long> {
}
