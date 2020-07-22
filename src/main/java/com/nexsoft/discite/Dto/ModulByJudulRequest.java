package com.nexsoft.discite.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ModulByJudulRequest {
    private String nama_kelas;
    private String nama_mapel;
    private String nama_modul;
}
