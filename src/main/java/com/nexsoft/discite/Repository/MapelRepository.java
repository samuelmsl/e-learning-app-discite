package com.nexsoft.discite.Repository;

import com.nexsoft.discite.Entity.Mapel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MapelRepository extends JpaRepository<Mapel, Long> {

}
