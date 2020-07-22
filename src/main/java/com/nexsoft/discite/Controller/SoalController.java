package com.nexsoft.discite.Controller;

import com.nexsoft.discite.Dto.CountModulRequest;
import com.nexsoft.discite.Entity.Mapel;
import com.nexsoft.discite.Entity.Soal;
import com.nexsoft.discite.Repository.SoalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SoalController {
    @Autowired
    private SoalRepository soalRepository;

    @GetMapping("/soal")
    private List<Soal> getAllSoal() {
        return soalRepository.findAll();
    }

    @GetMapping("/soal/{id}")
    private Soal getSoalById(@PathVariable long id) {
        return soalRepository.findById(id).orElse(null);
    }

    @PostMapping("/addSoal")
    private Soal addSoal(@RequestBody Soal soal) {
        return soalRepository.save(soal);
    }

    @PutMapping("/updateSoal")
    private Soal updateSoal(@RequestBody Soal soal) {
        Soal reqSoal = soalRepository.findById(soal.getId()).orElse(null);
        reqSoal.setQuestion(soal.getQuestion());
        reqSoal.setJawaban(soal.getJawaban());
        reqSoal.setPilihan_1(soal.getPilihan_1());
        reqSoal.setPilihan_2(soal.getPilihan_2());
        reqSoal.setPilihan_3(soal.getPilihan_3());
        reqSoal.setPilihan_4(soal.getPilihan_4());
        return soalRepository.save(reqSoal);
    }

    @DeleteMapping("/deleteSoal/{id}")
    private String deleteSoal(@PathVariable long id) {
        soalRepository.deleteById(id);
        return "Data Berhasil Dihapus";
    }

    @PostMapping("/countSoal")
    public Integer countSoal(@RequestBody CountModulRequest modulRequest) {
        return soalRepository.countSoal(modulRequest.getNama_mapel(), modulRequest.getNama_kelas());
    }

    @PostMapping("/soalByNama")
    public List<Soal> getSoalByNama(@RequestBody CountModulRequest modulRequest) {
        return soalRepository.getSoalByNama(modulRequest.getNama_mapel(), modulRequest.getNama_kelas());
    }

    @GetMapping("/countSoal/{kelas}")
    public Integer countSoalByKelas(@PathVariable String kelas) {
        return soalRepository.countSoalByKelas(kelas);
    }
}
