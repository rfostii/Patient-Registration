package com.springapp.mvc.mvc.model;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public class EmployerRepository {
    public Employer create(Employer employer) {
        Transaction tx = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            tx = session.beginTransaction();
            session.persist(employer);
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
        return employer;
    }

    public Employer update(Employer employer) {
        Transaction tx = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            tx = session.beginTransaction();
            session.update(employer);
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
        return employer;
    }

    public Employer findById(String id) {
        Employer employer = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            employer = (Employer) session.get(Employer.class, Long.parseLong(id));
        } catch (RuntimeException e) {
            System.out.println("Error" + e);
        }
        return employer;
    }

    public List<Employer> findAll() {
        List<Employer> employers = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            employers = (List<Employer>) session.createCriteria(Employer.class).list();
        } catch (RuntimeException e) {
            System.out.println("Error" + e);
        }
        return employers;
    }

    public void remove(String id) {
        Transaction tx = null;
        Employer employer = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        employer = (Employer) session.get(Employer.class, Long.parseLong(id));
        try {
            tx = session.beginTransaction();
            session.delete(employer);
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
