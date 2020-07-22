package com.nexsoft.discite.Controller;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nexsoft.discite.Dto.CountModulRequest;
import com.nexsoft.discite.Dto.MapelReponse;
import com.nexsoft.discite.Entity.Mapel;
import com.nexsoft.discite.Entity.Modul;
import com.nexsoft.discite.Repository.ModulRepository;
import com.nexsoft.discite.Service.ModulService;
import org.json.JSONObject;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ModulController {

    @Autowired
    private ModulService modulService;

    @Autowired
    private ModulRepository modulRepository;

    @PostMapping("/uploadFile")
    public MapelReponse uploadFile(@RequestPart("files") MultipartFile file, @RequestPart("mapel") String namaMapel,
                                    @RequestPart("kelas") String namaKelas, @RequestPart("url") String url) {


        Modul fileName = modulService.storeFile(file, namaMapel, namaKelas, url);

        String fileDownloadUri  = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(fileName.getFileName())
                .toUriString();

        return new MapelReponse(fileName.getFileName(), fileDownloadUri,
                file.getContentType(), file.getSize());
    }

    @GetMapping("/downloadFile/{fileName:.+}")
    public ResponseEntity <Resource> downloadFile(@PathVariable Long fileName, HttpServletRequest request) {
        Modul modul = modulService.getFile(fileName);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(modul.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + modul.getFileName() + "\"")
                .body(new ByteArrayResource(modul.getData()));
    }

    @PostMapping("/countModul")
    public Integer countModul(@RequestBody CountModulRequest modulRequest) {
        return modulRepository.countModul(modulRequest.getNama_kelas(), modulRequest.getNama_mapel());
    }

    @GetMapping("/countModul/{kelas}")
    public Integer counModulByKelas(@PathVariable String kelas) {
        return modulRepository.countModulByKelas(kelas);
    }
}
