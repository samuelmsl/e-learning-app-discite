package com.nexsoft.discite.Repository;

import com.nexsoft.discite.Entity.Modul;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModulRepository extends JpaRepository<Modul, Long> {

}
