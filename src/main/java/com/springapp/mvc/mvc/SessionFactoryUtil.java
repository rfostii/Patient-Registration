package com.springapp.mvc.mvc;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.cfg.AnnotationConfiguration;


public class SessionFactoryUtil {

    private static SessionFactory sessionFactory;

    public static SessionFactory getSessionFactory() {
        try {
            sessionFactory = new Configuration().configure().buildSessionFactory();
        } catch (Throwable ex) {
            System.err.println("Initial SessionFactory creation failed." + ex);
            throw new ExceptionInInitializerError(ex);
        }
        return sessionFactory;
    }
}