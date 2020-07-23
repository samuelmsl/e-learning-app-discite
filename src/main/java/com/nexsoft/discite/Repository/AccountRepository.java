package com.nexsoft.discite.Repository;

import com.nexsoft.discite.Entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    Account findByUsername(String username);

    @Query("select count(a) from Account a where a.type = 'murid' and a.kelas = ?1")
    Integer countMurid(String kelas);

    @Query("select a from Account a where a.type = 'murid' and a.kelas = ?1")
    List<Account> getAccountByType(String kelas);
}
