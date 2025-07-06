package com.example.jpa_hibernate_demo;


import com.example.jpa_hibernate_demo.model.Course;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class HibernateCourseManager {

    private static SessionFactory factory;

    static {
        try {
            // Load config from hibernate.cfg.xml
            factory = new Configuration().configure().buildSessionFactory();
        } catch (Throwable ex) {
            System.err.println("Failed to create sessionFactory object." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }

    public Integer addCourse(Course course) {
        Session session = factory.openSession();
        Transaction tx = null;
        Integer courseId = null;

        try {
            tx = session.beginTransaction();
            courseId = (Integer) session.save(course);
            tx.commit();
        } catch (HibernateException e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
        return courseId;
    }

    // Optional: main method for testing
    public static void main(String[] args) {
        HibernateCourseManager manager = new HibernateCourseManager();
        Course c = new Course("Java Backend", "Mr. Das");
        Integer id = manager.addCourse(c);
        System.out.println("Course added with ID: " + id);
    }
}
