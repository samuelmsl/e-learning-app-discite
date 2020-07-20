package com.nexsoft.discite.Controller;

import com.nexsoft.discite.Dto.MapelReponse;
import com.nexsoft.discite.Entity.Mapel;
import com.nexsoft.discite.Service.MapelService;
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

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MapelController {

    @Autowired
    private MapelService mapelService;

    @PostMapping("/uploadFile")
    public MapelReponse uploadFile(@RequestParam("files") MultipartFile file) {
        Mapel fileName = mapelService.storeFile(file);

        String fileDownloadUri  = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(fileName.getFileName())
                .toUriString();

        return new MapelReponse(fileName.getFileName(), fileDownloadUri,
                file.getContentType(), file.getSize());
    }

    @GetMapping("/downloadFile/{fileName:.+}")
    public ResponseEntity <Resource> downloadFile(@PathVariable Long fileName, HttpServletRequest request) {
        Mapel mapel = mapelService.getFile(fileName);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(mapel.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + mapel.getFileName() + "\"")
                .body(new ByteArrayResource(mapel.getData()));
    }
}
