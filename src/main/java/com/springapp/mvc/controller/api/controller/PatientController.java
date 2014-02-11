package com.springapp.mvc.controller.api.controller;

import java.util.List;

import com.springapp.mvc.mvc.model.Patient;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import javax.inject.Inject;
import org.springframework.web.bind.annotation.*;
import com.springapp.mvc.mvc.model.PatientRepository;


@Controller @RequestMapping("/api/patient")
public class PatientController {

    @Inject
    private PatientRepository patientRepository;

    @RequestMapping(method = RequestMethod.GET, produces = "application/json") @ResponseBody
    public List<Patient> findAll() {
        return patientRepository.findAll();
    }

    @RequestMapping(value = "/search/{query}",method = RequestMethod.GET ) @ResponseBody

    public final List<Patient> search(@PathVariable("query") final String query){
        return this.patientRepository.findByQuery(query);
    }

    @RequestMapping(value = "{id}",method = RequestMethod.GET ) @ResponseBody

    public final Patient get(@PathVariable("id") final String id){
        return this.patientRepository.findById(id);
    }

    @RequestMapping(method = RequestMethod.POST, consumes = "application/json", produces = "application/json") @ResponseStatus(HttpStatus.CREATED) @ResponseBody
    public Patient create(@RequestBody Patient patient) {
        return patientRepository.create(patient);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT) @ResponseStatus(HttpStatus.OK) @ResponseBody
    public Patient update(@RequestBody Patient patient, @PathVariable String id) {
        return patientRepository.update(patient);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE) @ResponseStatus(HttpStatus.OK)
    public void remove(@PathVariable String id) {
        patientRepository.remove(id);
    }
}
