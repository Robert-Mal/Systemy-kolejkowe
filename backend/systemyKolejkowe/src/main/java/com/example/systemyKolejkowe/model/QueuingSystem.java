package com.example.systemyKolejkowe.model;

public class QueuingSystem {
    private float lambda, mu, c1, c2;
    private int m;
    private float rho, probability0, averageV, averageN, averageM0, averageTt, averageTs, averageMnz, functionM;

    public QueuingSystem() {
    }

    public QueuingSystem(float lambda, float mu, int m, float c1, float c2) {
        if (m >= 1) {
            if (lambda < (m * mu)) {
                if (((lambda / mu) / m) < 1) {
                    this.lambda = lambda;
                    this.mu = mu;
                    this.c1 = c1;
                    this.c2 = c2;
                    this.m = m;
                    this.rho = calcRho();
                    this.probability0 = calcProbability(0);
                    this.averageV = calcAverageV();
                    this.averageTt = calcAverageTt();
                    this.averageN = calcAverageN();
                    this.averageM0 = calcAverageM0();
                    this.averageTs = calcAverageTs();
                    this.averageMnz = calcAverageMnz();
                    this.functionM = calcFunctionM();
                }
            }
        }
    }

    public float getLambda() { return lambda; }

    public float getMu() { return mu; }

    public float getC1() { return c1; }

    public float getC2() { return c2; }

    public float getM() { return m; }

    public float getRho() { return rho; }

    public float getProbability0() { return probability0; }

    public float getAverageV() { return averageV; }

    public float getAverageN() { return averageN; }

    public float getAverageM0() { return averageM0; }

    public float getAverageTt() { return averageTt; }

    public float getAverageTs() { return averageTs; }

    public float getAverageMnz() { return averageMnz; }

    public float getFunctionM() { return functionM; }

    private int factorial(int n) {
        int j = 1;
        for (int i = 1; i < n; ++i) {
            j *= i;
        }

        return j;
    }

    private float calcRho() { return lambda / mu; }

    public float calcProbability(int j) {
        if (j == 0) {
            float nominal = m - rho;
            float sum = 0;
            for (int i = 0; i <= (m - 1); ++i) {
                sum += (m - j) * Math.pow(rho, j) / factorial(j);
            }

            return nominal / sum;
        } else if (j >= 1 && j <= m) {
            return (float) (Math.pow(rho, j) / factorial(j) * calcProbability(0));
        }
        return 0;
    }

    private float calcAverageV() {
        float numeral = (float) (Math.pow(rho, (m + 1)) / Math.pow((m - rho), 2) * factorial(m - 1));
        float sum = 0;
        for (int i = 0; i <= (m - 1); ++i) {
            sum += Math.pow(rho, i) / factorial(i);
        }
        float nominative = (float) (sum + (Math.pow(rho, m) / (factorial(m - 1) * (m - rho))));

        return numeral / nominative;
    }

    private float calcAverageN() { return averageV + rho; }

    private float calcAverageM0() { return rho; }

    private float calcAverageTt() { return averageV / lambda; }

    private float calcAverageTs() { return averageN / lambda; }

    private float calcAverageMnz() { return m - rho; }

    private float calcFunctionM() { return c1 * averageV + c2 * averageMnz; }
}