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

    public List<User> findByQuery(String query) {
        String isDigit = "\\d+";
        String containDigit = ".*\\d.*";
        List<User> users = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        StringBuilder sql = new StringBuilder();

        if (query.matches(isDigit)) {
            sql.append("select * from users join Contact as contact on contact.id=users.contact_id" +
                       " and (users.ssn similar to :searchKey" +
                       " or contact.phoneNumber similar to :searchKey" +
                       " or contact.zip similar to :searchKey)"
            );
        } else {
            sql.append("select * from users join Contact as contact on contact.id=users.contact_id and (" +
                    "firstName similar to :searchKey or lastName similar to :searchKey" +
                    " or gender similar to :searchKey or language similar to :searchKey" +
                    " or maritalStatus similar to :searchKey or race similar to :searchKey or religion similar to :searchKey" +
                    " or contact.address similar to :searchKey or contact.city similar to :searchKey)"
            );
        }
        try {
            users = session.createSQLQuery(sql.toString())
                    .addEntity(User.class)
                    .setParameter("searchKey", "%(" + query.replace(" ", "|") + ")%").list();
        } catch (RuntimeException e) {
            System.out.println("Error " + e);
        }
        session.close();
        return users;
    }

    public List<User> findAll() {
        List<User> users = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            users = (List<User>) session.createCriteria(User.class).setMaxResults(50).list();
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
