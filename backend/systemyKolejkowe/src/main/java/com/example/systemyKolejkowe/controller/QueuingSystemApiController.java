package com.example.systemyKolejkowe.controller;

import com.example.systemyKolejkowe.dto.QueuingSystemDto;
import com.example.systemyKolejkowe.service.QueuingSystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class QueuingSystemApiController {

    @Autowired
    QueuingSystemService queuingSystemService;

    @RequestMapping(value = "/system/get", method = RequestMethod.GET)
    public ResponseEntity<QueuingSystemDto> testDocument(@RequestParam(value = "lambda") float lambda,
                                             @RequestParam(value = "mu") float mu,
                                             @RequestParam(value = "m") int m,
                                             @RequestParam(value = "c1") float c1,
                                             @RequestParam(value = "c2") float c2) {

        QueuingSystemDto queuingSystemDto = queuingSystemService.getQueuingSystem(lambda, mu, m, c1, c2);

        return new ResponseEntity<>(queuingSystemDto, HttpStatus.OK);

    }
}
