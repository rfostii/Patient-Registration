package com.springapp.mvc.mvc;

import javax.persistence.*;
import java.sql.Date;
import com.springapp.mvc.mvc.Contact;


@Entity(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Basic
    private String firstName;

    @Basic
    private String lastName;

    @Basic
    private String ssn;

    @Basic
    private Date dateBirth;

    @Basic
    private String gender;

    @Basic
    private String martitalStatus;

    @Basic
    private String race;

    @Basic
    private String religion;

    @Basic
    private String language;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address")
    private Contact contact;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String name) {
        this.firstName = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getSSN() {
        return ssn;
    }

    public void setSSN(String ssn) {
        this.ssn = ssn;
    }

    public Date getDateBirth() {
        return dateBirth;
    }

    public void setDateBirth(Date dateBirth) {
        this.dateBirth = dateBirth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getMartitalStatus() {
        return martitalStatus;
    }

    public void setMartitalStatus(String martitalStatus) {
        this.martitalStatus = martitalStatus;
    }

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public String getReligion() {
        return religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public Contact getContact() {
        return this.contact;
    }

    public void setContact(Contact contact) {
        this.contact = contact;
    }
}