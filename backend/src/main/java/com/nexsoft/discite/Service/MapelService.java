package com.nexsoft.discite.Service;

import com.nexsoft.discite.Entity.Mapel;
import com.nexsoft.discite.Entity.Modul;
import com.nexsoft.discite.Exception.FileStorageException;
import com.nexsoft.discite.Repository.ModulRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class MapelService {
    @Autowired
    private ModulRepository modulRepository;

    public Modul storeFile(MultipartFile file, Mapel mapel, String namaKelas, String url) {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        try {
            if (fileName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            Modul modul = new Modul(fileName, file.getContentType(), file.getBytes(), namaKelas, mapel, url);
            return modulRepository.save(modul);
        } catch (IOException e) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", e);
        }
    }

    public Modul getFile(Long fileId) {
        return modulRepository.findById(fileId).orElse(null);
    }
}
