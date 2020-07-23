package com.nexsoft.discite.Controller;

import com.nexsoft.discite.Dto.CountModulRequest;
import com.nexsoft.discite.Dto.CountMuridRequest;
import com.nexsoft.discite.Dto.LoginRequest;
import com.nexsoft.discite.Dto.LoginResponse;
import com.nexsoft.discite.Entity.Account;
import com.nexsoft.discite.Repository.AccountRepository;
import com.nexsoft.discite.Util.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AccountController {
    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private AccountRepository accountRepository;

    @PostMapping("/public/register")
    public Account register(@RequestBody Account account) {
        return accountRepository.save(account);
    }

    @PostMapping("/auth")
    public LoginResponse authenticate(@RequestBody LoginRequest account) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(account.getUsername(), account.getPassword())
            );
        } catch (Exception e) {
            e.printStackTrace();
            LoginResponse failedResponse = new LoginResponse();
            failedResponse.setMessage("Invalid username or password!!");
            failedResponse.setStatus(403);
            failedResponse.setError("Invalid");
            return failedResponse;
        }
        return jwtUtil.generateToken(account.getUsername());
    }

    @GetMapping("/countMurid/{kelas}")
    public Integer countMurid(@PathVariable String kelas) {
        return accountRepository.countMurid(kelas);
    }

    @GetMapping("/account")
    public List<Account> getAllAccount() {
        return accountRepository.findAll();
    }

    @GetMapping("/account/{kelas}")
    public List<Account> getAccountByType(@PathVariable String kelas) {
        return accountRepository.getAccountByType(kelas);
    }
}
