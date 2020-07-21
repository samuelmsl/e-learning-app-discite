package com.nexsoft.discite.Repository;

import com.nexsoft.discite.Entity.Account;
import com.nexsoft.discite.Entity.Mapel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    Account findByUsername(String username);
}
