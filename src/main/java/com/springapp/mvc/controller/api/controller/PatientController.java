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
    private PatientRepository userRepository;

    @RequestMapping(method = RequestMethod.GET, produces = "application/json") @ResponseBody
    public List<Patient> findAll() {
        return userRepository.findAll();
    }

    @RequestMapping(value = "{query}",method = RequestMethod.GET ) @ResponseBody

    public final List<Patient> get(@PathVariable("query") final String query){
        return this.userRepository.findByQuery(query);
    }

    @RequestMapping(method = RequestMethod.POST, consumes = "application/json", produces = "application/json") @ResponseStatus(HttpStatus.CREATED) @ResponseBody
    public Patient create(@RequestBody Patient user) {
        return userRepository.create(user);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT) @ResponseStatus(HttpStatus.OK) @ResponseBody
    public Patient update(@RequestBody Patient user, @PathVariable String id) {
        return userRepository.update(user);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE) @ResponseStatus(HttpStatus.OK)
    public void remove(@PathVariable String id) {
        userRepository.remove(id);
    }
}
