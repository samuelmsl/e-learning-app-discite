package com.nexsoft.discite.Entity;

import javax.persistence.*;

@Entity
@Table(name = "modul")
public class Modul {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 4)
    private long id;

    @Column(nullable = false, length = 40)
    private String fileName;

    @Column(nullable = false, length = 40)
    private String fileType;

    @Lob
    private byte[] data;

    @Column(nullable = false, length = 30)
    private String nama_mapel;

    @Column(nullable = false, length = 30)
    private String nama_kelas;

    @Column(nullable = false, length = 40)
    private String url;

    public Modul() {

    }

    public Modul(String fileName, String fileType, byte[] data, String namaKelas, String namaMapel,String url) {
        this.fileName = fileName;
        this.fileType = fileType;
        this.data = data;
        this.nama_mapel = namaMapel;
        this.nama_kelas = namaKelas;
        this.url = url;
    }

    public long getId() {
        return id;
    }

    public String getMapel() {
        return nama_mapel;
    }

    public String getNama_kelas() {
        return nama_kelas;
    }

    public String getUrl() {
        return url;
    }

    public String getFileName() {
        return fileName;
    }

    public String getFileType() {
        return fileType;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }
}
