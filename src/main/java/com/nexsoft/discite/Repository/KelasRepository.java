package com.nexsoft.discite.Repository;

import com.nexsoft.discite.Entity.Kelas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KelasRepository extends JpaRepository<Kelas, Long> {
    @Query("select k from Kelas k order by k.id asc")
    List<Kelas> findAllAsc();
}
