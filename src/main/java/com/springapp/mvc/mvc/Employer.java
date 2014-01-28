package com.springapp.mvc.mvc;

import javax.persistence.*;
import com.springapp.mvc.mvc.Contact;


@Entity
public class Employer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Basic
    private String name;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address")
    private Contact contact;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Contact getContact() {
        return this.contact;
    }

    public void setContact(Contact contact) {
        this.contact = contact;
    }

}
