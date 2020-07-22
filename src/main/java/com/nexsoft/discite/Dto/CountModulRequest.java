package com.nexsoft.discite.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CountModulRequest {
    private String nama_kelas;
    private String nama_mapel;
}
