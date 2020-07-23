package com.nexsoft.discite.Controller;

import com.nexsoft.discite.Entity.Kelas;
import com.nexsoft.discite.Repository.KelasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class KelasController {
    @Autowired
    private KelasRepository kelasRepository;

    @GetMapping("/public/kelas")
    private List<Kelas> getAllKelas() {
        return kelasRepository.findAllAsc();
    }

    @GetMapping("/kelas/{id}")
    private Kelas getKelasById(@PathVariable long id) {
        return kelasRepository.findById(id).orElse(null);
    }

    @PostMapping("/addKelas")
    private Kelas addKelas(@RequestBody Kelas kelas) {
        return kelasRepository.save(kelas);
    }

    @PutMapping("/updateKelas")
    private Kelas updateKelas(@RequestBody Kelas kelas) {
        Kelas reqKelas = kelasRepository.findById(kelas.getId()).orElse(null);
        reqKelas.setNama_kelas(kelas.getNama_kelas());
        return kelasRepository.save(reqKelas);
    }

    @DeleteMapping("/deleteKelas/{id}")
    private String deleteKelas(@PathVariable long id) {
        kelasRepository.deleteById(id);
        return "Data Berhasil Dihapus";
    }
}
