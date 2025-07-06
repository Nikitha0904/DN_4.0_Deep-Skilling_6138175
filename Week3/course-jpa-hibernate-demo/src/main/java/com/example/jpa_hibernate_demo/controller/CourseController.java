package com.example.jpa_hibernate_demo.controller;

import com.example.jpa_hibernate_demo.model.Course;
import com.example.jpa_hibernate_demo.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @PostMapping
    public Course create(@RequestBody Course course) {
        return courseService.addCourse(course);
    }

    @GetMapping
    public List<Course> getAll() {
        return courseService.getAllCourses();
    }
}
