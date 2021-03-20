package com.example.systemyKolejkowe.service;

import com.example.systemyKolejkowe.dto.QueuingSystemDto;

public interface QueuingSystemService {

    QueuingSystemDto getQueuingSystem(float lambda, float mu, int m, float c1, float c2);
}
