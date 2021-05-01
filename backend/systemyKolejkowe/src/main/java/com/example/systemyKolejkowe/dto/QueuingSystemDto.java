package com.example.systemyKolejkowe.dto;

public class QueuingSystemDto {

    private float probability0, averageV, averageN, averageM0, averageTt, averageTs, averageMnz;
    private String error;

    public QueuingSystemDto() {
    }

    public QueuingSystemDto(float probability0, float averageV, float averageN, float averageM0, float averageTt,
                            float averageTs, float averageMnz, String error) {
        this.probability0 = probability0;
        this.averageV = averageV;
        this.averageN = averageN;
        this.averageM0 = averageM0;
        this.averageTt = averageTt;
        this.averageTs = averageTs;
        this.averageMnz = averageMnz;
        this.error = error;
    }

    public float getProbability0() {
        return probability0;
    }

    public float getAverageV() {
        return averageV;
    }

    public float getAverageN() {
        return averageN;
    }

    public float getAverageM0() {
        return averageM0;
    }

    public float getAverageTt() {
        return averageTt;
    }

    public float getAverageTs() {
        return averageTs;
    }

    public float getAverageMnz() {
        return averageMnz;
    }

    public String getError() { return error;}
}
