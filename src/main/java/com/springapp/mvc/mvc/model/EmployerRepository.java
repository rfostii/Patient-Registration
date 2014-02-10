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
                    System.out.println("Error " + e1);
                }
                throw e;
            }
        }
        session.close();
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
                    System.out.println("Error " + e1);
                }
                throw e;
            }
        }
        session.close();
        return employer;
    }

    public List<Employer> findAll() {
        List<Employer> employers = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            employers = (List<Employer>) session.createCriteria(Employer.class).setMaxResults(50).list();
        } catch (RuntimeException e) {
            System.out.println("Error" + e);
        }
        session.close();
        return employers;
    }

    public List<Employer> findByQuery(String query) {
        String isDigit = "\\d+";
        String containDigit = ".*\\d.*";
        StringBuilder sql = new StringBuilder();
        List<Employer> employers = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();

        if (query.matches(isDigit)) {
            sql.append("select * from employer where" +
                    " phoneNumber similar to :searchKey or zip similar to :searchKey");
        } else {
            sql.append("select * from employer where" +
                    " name similar to :searchKey or address similar to :searchKey or city similar to :searchKey");
        }

        try {
            employers = session.createSQLQuery(sql.toString())
                    .addEntity(Employer.class)
                    .setParameter("searchKey", "%(" + query.replace(" ", "|") + ")%").list();
        } catch (RuntimeException e) {
            System.out.println("Error " + e);
        }

        session.close();
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
        session.close();
    }
}
