package com.example.jpa_hibernate_demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.jpa_hibernate_demo.model.Course;
import com.example.jpa_hibernate_demo.repository.CourseRepository;


@SpringBootApplication
public class CourseJpaHibernateDemoApplication implements CommandLineRunner {

    @Autowired
    private CourseRepository courseRepository;

    public static void main(String[] args) {
        SpringApplication.run(CourseJpaHibernateDemoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Course course = new Course("Spring Boot", "Nikitha");
        courseRepository.save(course);
        System.out.println("Course saved successfully!");
    }
}

