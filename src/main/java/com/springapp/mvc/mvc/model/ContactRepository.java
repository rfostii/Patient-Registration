package com.springapp.mvc.mvc.model;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class ContactRepository {
    public Contact create(Contact contact) {
        Transaction tx = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            tx = session.beginTransaction();
            session.persist(contact);
            tx.commit();
        } catch (RuntimeException e) {
            if (tx != null && tx.isActive()) {
                try {
                    tx.rollback();
                } catch (HibernateException e1) {
                    System.out.println("Error" + e1);
                }
                throw e;
            }
        }
        return contact;
    }

    public Contact update(Contact contact) {
        Transaction tx = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            tx = session.beginTransaction();
            session.update(contact);
            tx.commit();
        } catch (RuntimeException e) {
            if (tx != null && tx.isActive()) {
                try {
                    tx.rollback();
                } catch (HibernateException e1) {
                    System.out.println("Error" + e1);
                }
                throw e;
            }
        }
        return contact;
    }

    public Contact findById(String id) {
        Contact contact = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            contact = (Contact) session.get(Contact.class, Long.parseLong(id));
        } catch (RuntimeException e) {
            System.out.println("Error" + e);
        }
        return contact;
    }

    public List<Contact> findAll() {
        List<Contact> contacts = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            contacts = (List<Contact>) session.createCriteria(Contact.class).list();
        } catch (RuntimeException e) {
            System.out.println("Error" + e);
        }
        return contacts;
    }

    public void remove(String id) {
        Transaction tx = null;
        Contact contact = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        contact = (Contact) session.get(Contact.class, Long.parseLong(id));
        try {
            tx = session.beginTransaction();
            session.delete(contact);
            tx.commit();
        } catch (RuntimeException e) {
            if (tx != null && tx.isActive()) {
                try {
                    tx.rollback();
                } catch (HibernateException e1) {
                    System.out.println("Error" + e1);
                }
                throw e;
            }
        }
    }
}