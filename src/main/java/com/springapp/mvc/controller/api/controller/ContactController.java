package com.springapp.mvc.controller.api.controller;

import java.util.List;
import javax.inject.Inject;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;
import com.springapp.mvc.mvc.model.Contact;
import com.springapp.mvc.mvc.model.ContactRepository;


@Controller @RequestMapping("/api/contact")
public class ContactController {

    @Inject
    private ContactRepository contactRepository;

    @RequestMapping(method = RequestMethod.GET, produces = "application/json") @ResponseBody
    public List<Contact> findAll() {
        return contactRepository.findAll();
    }

    @RequestMapping(value = "{query}",method = RequestMethod.GET ) @ResponseBody

    public final List<Contact> get(@PathVariable("query") final String query){
        return this.contactRepository.findByQuery(query);
    }

    @RequestMapping(method = RequestMethod.POST, consumes = "application/json", produces = "application/json") @ResponseStatus(HttpStatus.CREATED) @ResponseBody
    public Contact create(@RequestBody Contact contact) {
        Assert.notNull(contact);
        return contactRepository.create(contact);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT) @ResponseStatus(HttpStatus.OK)
    public void update(@RequestBody Contact contact, @PathVariable String id) {
        contactRepository.update(contact);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE) @ResponseStatus(HttpStatus.OK)
    public void remove(@PathVariable String id) {
        contactRepository.remove(id);
    }    
}
