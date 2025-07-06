package com.example.jpa_hibernate_demo.repository;


import com.example.jpa_hibernate_demo.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Integer> {
}

