package com.springapp.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.sql.Date;
import java.util.Iterator;
import java.util.List;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.slf4j.LoggerFactory;
import com.springapp.mvc.mvc.SessionFactoryUtil;
import com.springapp.mvc.mvc.Employer;
import com.springapp.mvc.mvc.Contact;


@Controller
@RequestMapping("/")
public class HelloController {
    private Employer employer;
    private Contact contact;

    private static void createEmployer(Employer employer) {
        Transaction tx = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            tx = session.beginTransaction();
            session.persist(employer);
            tx.commit();
            session.close();
            System.out.println("successfully saved");
        } catch (RuntimeException e) {
            System.out.println("Error" + e);
            if (tx != null && tx.isActive()) {
                try {
                    tx.rollback();
                } catch (HibernateException e1) {}
            }
        }
    }

    private static void createContact(Contact contact) {
        Transaction tx = null;
        Session session = SessionFactoryUtil.getSessionFactory().openSession();
        try {
            tx = session.beginTransaction();
            session.persist(contact);
            tx.commit();
            session.close();
            System.out.println("successfully saved");
        } catch (RuntimeException e) {
            System.out.println("Error" + e);
            if (tx != null && tx.isActive()) {
                try {
                    tx.rollback();
                } catch (HibernateException e1) {}
            }
        }
    }

	@RequestMapping(method = RequestMethod.GET)
	public String printWelcome(ModelMap model) {
        employer = new Employer();
        contact = new Contact();
        contact.setAddress("some address");
        contact.setCity("kiev");
        contact.setPhoneNumber("234567");
        contact.setStage("21");
        contact.setZip("qswe12");
        createContact(contact);

        java.util.Calendar cal = java.util.Calendar.getInstance();
        java.sql.Date date = new Date(cal.getTimeInMillis());
        employer.setName("ruslan");
        employer.setContact(contact);

        createEmployer(employer);
		model.addAttribute("message", "Hello world its work!");
		return "hello";
	}
}