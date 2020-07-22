package com.nexsoft.discite.Util;

import com.nexsoft.discite.Dto.LoginResponse;
import com.nexsoft.discite.Entity.Account;
import com.nexsoft.discite.Repository.AccountRepository;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.internal.Function;
import org.springframework.security.core.userdetails.UserDetails;

import javax.xml.crypto.Data;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JWTUtil {
    private final String secretKey = "random_secret_key";
    private final int EXPIRATION_TIME = 1000 * 1000 * 60 * 2;

    @Autowired
    private AccountRepository accountRepository;

    public LoginResponse generateToken(String username) {
        Account account = accountRepository.findByUsername(username);
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", account.getUsername());
        claims.put("password", account.getPassword());
        return createToken(claims, account.getType(), account.getId(), account.getUsername(), account.getKelas(), account.getNama());
    }

    private LoginResponse createToken(Map<String, Object> claims, String type, long id, String username, String kelas, String name) {
        Calendar expr = Calendar.getInstance();
        expr.add(Calendar.SECOND, 300);
        Date now = new Date(System.currentTimeMillis());
        Date expDate = new Date(now.getTime() + EXPIRATION_TIME);

        String token = Jwts
                .builder()
                .setClaims(claims)
                .setId(name)
                .setSubject(username)
                .setIssuer(type)
                .setAudience(kelas)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(expDate)
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();

        LoginResponse response = new LoginResponse();
        response.setToken(token);
        response.setStatus(200);
        response.setError(null);
        response.setMessage("Success");
        return response;
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
    }

    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }
}
