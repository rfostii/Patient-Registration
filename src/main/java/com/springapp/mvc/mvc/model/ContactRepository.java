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
        session.close();
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
        session.close();
        return contact;
    }

    public List<Contact> findByQuery(String query) {
        String isDigit = "\\d+";
        String containDigit = ".*\\d.*";
        List<Contact> contacts = null;
        StringBuilder sql = new StringBuilder();
        Session session = SessionFactoryUtil.getSessionFactory().openSession();

        if (query.matches(isDigit) || query.matches(containDigit)) {
            sql.append("select * from Contact where phoneNumber similar to :searchKey " +
                       " or zip similar to :searchKey" +
                       " or address similar to :searchKey"
            );

            try {
                contacts = session.createSQLQuery(sql.toString())
                        .addEntity(Contact.class)
                        .setParameter("searchKey", "%(" + query.replace(" ", "|") + ")%").list();
            } catch (RuntimeException e) {
                System.out.println("Error " + e);
            }
        }
        else {
            sql.append("select * from Contact where city similar to :searchKey" +
                       " or address similar to :searchKey");

            try {
                contacts = session.createSQLQuery(sql.toString())
                        .addEntity(Contact.class)
                        .setParameter("searchKey", "%(" + query.replace(" ", "|") + ")%").list();
            } catch (RuntimeException e) {
                System.out.println("Error " + e);
            }
        }
        session.close();
        return contacts;
    }

    public List<Contact> findAll() {
        List<Contact> contacts = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            contacts = (List<Contact>) session.createCriteria(Contact.class).list();
        } catch (RuntimeException e) {
            System.out.println("Error" + e);
        }
        session.close();
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
        session.close();
    }
}
