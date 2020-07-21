package com.nexsoft.discite.Controller;

import com.nexsoft.discite.Entity.Kelas;
import com.nexsoft.discite.Entity.Mapel;
import com.nexsoft.discite.Repository.MapelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MapelController {
    @Autowired
    private MapelRepository mapelRepository;

    @GetMapping("/mapel")
    private List<Mapel> getAllMapel() {
        return mapelRepository.findAll();
    }

    @GetMapping("/mapel/{id}")
    private Mapel getMapelById(@PathVariable long id) {
        return mapelRepository.findById(id).orElse(null);
    }

    @PostMapping("/addMapel")
    private Mapel addMapel(@RequestBody Mapel mapel) {
        return mapelRepository.save(mapel);
    }

    @PutMapping("/updateMapel")
    private Mapel updateMapel(@RequestBody Mapel mapel) {
        Mapel reqMapel = mapelRepository.findById(mapel.getId()).orElse(null);
        reqMapel.setNama_mapel(mapel.getNama_mapel());
        return mapelRepository.save(reqMapel);
    }

    @DeleteMapping("/deleteMapel/{id}")
    private String deleteMapel(@PathVariable long id) {
        mapelRepository.deleteById(id);
        return "Data Berhasil Dihapus";
    }
}
