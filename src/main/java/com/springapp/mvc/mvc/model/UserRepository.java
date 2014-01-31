package com.springapp.mvc.mvc.model;

import java.util.List;
import org.springframework.stereotype.Repository;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;


@Repository
public class UserRepository {

    public User create(User user) {
        Transaction tx = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            tx = session.beginTransaction();
            session.persist(user);
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
        return user;
    }

    public User update(User user) {
        Transaction tx = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            tx = session.beginTransaction();
            session.update(user);
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
        return user;
    }

    public User findById(String id) {
        User user = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            user = (User) session.get(User.class, Long.parseLong(id));
        } catch (RuntimeException e) {
            System.out.println("Error" + e);
        }
        return user;
    }

    public List<User> findAll() {
        List<User> users = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            users = (List<User>) session.createCriteria(User.class).list();
        } catch (RuntimeException e) {
            System.out.println("Error" + e);
        }
        return users;
    }

    public void remove(String id) {
        Transaction tx = null;
        User user = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        user = (User) session.get(User.class, Long.parseLong(id));
        try {
            tx = session.beginTransaction();
            session.delete(user);
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
