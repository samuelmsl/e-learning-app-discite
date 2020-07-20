package com.nexsoft.discite.Service;

import com.nexsoft.discite.Entity.Mapel;
import com.nexsoft.discite.Exception.FileStorageException;
import com.nexsoft.discite.Repository.MapelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;

@Service
public class MapelService {
    @Autowired
    private MapelRepository mapelRepository;

    public Mapel storeFile(MultipartFile file) {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        try {
            if (fileName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            Mapel mapel = new Mapel(fileName, file.getContentType(), file.getBytes());
            return mapelRepository.save(mapel);
        } catch (IOException e) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", e);
        }
    }

    public Mapel getFile(Long fileId) {
        return mapelRepository.findById(fileId).orElse(null);
    }
}
