package com.springapp.mvc.controller.api.controller;

import java.util.List;
import com.springapp.mvc.mvc.model.*;
import javax.inject.Inject;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;
import com.springapp.mvc.mvc.model.EmployerRepository;

import javax.inject.Inject;


@Controller @RequestMapping("/api/employer")
public class EmployerController {

    @Inject
    private EmployerRepository employerRepository;

    @RequestMapping(method = RequestMethod.GET, produces = "application/json") @ResponseBody
    public List<Employer> findAll() {
        return employerRepository.findAll();
    }

    @RequestMapping(value = "{query}",method = RequestMethod.GET ) @ResponseBody

    public final List<Employer> get(@PathVariable("query") final String query){
        return this.employerRepository.findByQuery(query);
    }

    @RequestMapping(method = RequestMethod.POST, consumes = "application/json", produces = "application/json") @ResponseStatus(HttpStatus.CREATED) @ResponseBody
    public Employer create(@RequestBody Employer employer) {
        Assert.notNull(employer);
        return employerRepository.create(employer);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT) @ResponseStatus(HttpStatus.OK)
    public void update(@RequestBody Employer employer, @PathVariable String id) {
        employerRepository.update(employer);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE) @ResponseStatus(HttpStatus.OK)
    public void remove(@PathVariable String id) {
        employerRepository.remove(id);
    }
}
