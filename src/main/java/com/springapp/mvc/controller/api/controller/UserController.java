package com.springapp.mvc.controller.api.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.util.Assert;
import javax.inject.Inject;
import org.springframework.web.bind.annotation.*;
import com.springapp.mvc.mvc.model.User;
import com.springapp.mvc.mvc.model.UserRepository;


@Controller @RequestMapping("/api/user")
public class UserController {

    @Inject
    private UserRepository userRepository;

    @RequestMapping(method = RequestMethod.GET, produces = "application/json") @ResponseBody
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @RequestMapping(value = "{id}",method = RequestMethod.GET ) @ResponseBody

    public final User get( @PathVariable( "id" ) final String id ){
        return this.userRepository.findById(id);
    }

    @RequestMapping(method = RequestMethod.POST, consumes = "application/json", produces = "application/json") @ResponseStatus(HttpStatus.CREATED) @ResponseBody
    public User create(@RequestBody User user) {
        Assert.notNull(user);
        return userRepository.create(user);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT) @ResponseStatus(HttpStatus.OK)
    public void update(@RequestBody User user, @PathVariable String id) {
        Assert.isTrue(user.getId().equals(id));
        userRepository.update(user);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE) @ResponseStatus(HttpStatus.OK)
    public void remove(@PathVariable String id) {
        userRepository.remove(id);
    }
}
