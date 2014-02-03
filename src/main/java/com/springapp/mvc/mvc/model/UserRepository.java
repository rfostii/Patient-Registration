package com.springapp.mvc.mvc.model;

import java.util.List;
import org.springframework.stereotype.Repository;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.type.StandardBasicTypes;
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
        session.close();
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
        session.close();
        return user;
    }

    public List<User> findByQuery(String query1) {
        String isDigit = "\\d+";
        String containDigit = ".*\\d.*";
        List<User> users = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        StringBuilder sql = new StringBuilder();

        //sql.append("select * from users where firstName like :searchKey or lastName like :searchKey");
        sql.append("select * from users where firstName ~* :searchKey");
        String query = "^.\\d+.|5.";
        System.out.println(query);
        try {
            users = session.createSQLQuery(sql.toString())
                    .addEntity(User.class)
                    .setParameter("searchKey", query).list();
        } catch (RuntimeException e) {
            System.out.println("Error" + e);
        }
        session.close();
        return users;
    }

    public List<User> findAll() {
        List<User> users = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            users = (List<User>) session.createCriteria(User.class).list();
        } catch (RuntimeException e) {
            System.out.println("Error" + e);
        }
        session.close();
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
        session.close();
    }
}
