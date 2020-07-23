package com.nexsoft.discite.Controller;

import com.nexsoft.discite.Entity.Jawaban;
import com.nexsoft.discite.Repository.JawabanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class JawabanController {
    @Autowired
    private JawabanRepository jawabanRepository;

    @GetMapping("/jawaban")
    private List<Jawaban> getAllJawaban() {
        return jawabanRepository.findAll();
    }

    @GetMapping("/jawabanByKelas/{kelas}")
    private List<Jawaban> getAllJawabanByKelas(@PathVariable String kelas) {
        return jawabanRepository.findAllByKelas(kelas);
    }

    @GetMapping("/jawaban/{id}")
    private Jawaban getJawabanById(@PathVariable long id) {
        return jawabanRepository.findById(id).orElse(null);
    }

    @PostMapping("/addJawaban")
    private Jawaban addJawaban(@RequestBody Jawaban jawaban) {
        return jawabanRepository.save(jawaban);
    }

    @DeleteMapping("/deleteJawaban/{id}")
    private String deleteJawaban(@PathVariable long id) {
        jawabanRepository.deleteById(id);
        return "Data Berhasil Dihapus";
    }
}
