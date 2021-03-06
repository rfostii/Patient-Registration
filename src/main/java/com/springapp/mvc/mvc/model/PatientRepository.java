package com.springapp.mvc.mvc.model;

import java.util.List;
import org.springframework.stereotype.Repository;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;


@Repository
public class PatientRepository {

    public Patient create(Patient patient) {
        Transaction tx = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            tx = session.beginTransaction();
            session.persist(patient);
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
        return patient;
    }

    public Patient update(Patient patient) {
        Transaction tx = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            tx = session.beginTransaction();
            session.update(patient);
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
        return patient;
    }

    public Patient findById(String id) {
        Patient patient = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            patient = (Patient) session.get(Patient.class, Long.parseLong(id));
        } catch (RuntimeException e) {
            System.out.println("Error" + e);
        }
        return patient;
    }

    public List<Patient> findByQuery(String query) {
        String isDigit = "\\d+";
        List<Patient> patients = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        StringBuilder sql = new StringBuilder();

        if (query.matches(isDigit)) {
            sql.append("select * from Patient" +
                       " where ssn similar to :searchKey" +
                       " or phoneNumber similar to :searchKey" +
                       " or zip similar to :searchKey"
            );
        } else {
            sql.append("select * from Patient where" +
                    " firstName similar to :searchKey or lastName similar to :searchKey" +
                    " or gender similar to :searchKey or language similar to :searchKey" +
                    " or maritalStatus similar to :searchKey or race similar to :searchKey or religion similar to :searchKey" +
                    " or address similar to :searchKey or city similar to :searchKey"
            );
        }
        try {
            patients = session.createSQLQuery(sql.toString())
                    .addEntity(Patient.class)
                    .setParameter("searchKey", "%(" + query.replace(" ", "|") + ")%").list();
        } catch (RuntimeException e) {
            System.out.println("Error " + e);
        }
        session.close();
        return patients;
    }

    public List<Patient> findAll() {
        List<Patient> patients = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            patients = (List<Patient>) session.createCriteria(Patient.class).setMaxResults(50).list();
        } catch (RuntimeException e) {
            System.out.println("Error" + e);
        }
        session.close();
        return patients;
    }

    public void remove(String id) {
        Transaction tx = null;
        Patient patient = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        patient = (Patient) session.get(Patient.class, Long.parseLong(id));
        try {
            tx = session.beginTransaction();
            session.delete(patient);
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
