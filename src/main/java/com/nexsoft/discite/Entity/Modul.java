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

    @OneToOne()
    @JoinColumn(name = "id_mapel", nullable = false)

    private Mapel mapel;

    @Column(nullable = false, length = 30)
    private String nama_kelas;

    @Column(nullable = false, length = 40)
    private String url;

    public Modul() {

    }

    public Modul(String fileName, String fileType, byte[] data, String namaMapel, Mapel mapel, String url) {
        this.fileName = fileName;
        this.fileType = fileType;
        this.data = data;
        this.mapel = mapel;
        this.nama_kelas = namaMapel;
        this.url = url;
    }

    public long getId() {
        return id;
    }

    public Mapel getMapel() {
        return mapel;
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
