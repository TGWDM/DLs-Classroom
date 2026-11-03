package com.dlsclassroom.api.controller;

import com.dlsclassroom.api.service.DuplicateStudentException;
import com.dlsclassroom.api.service.StudentService;
import com.dlsclassroom.api.model.Student;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/student")
public class StudentController {
    private final StudentService studentService;

    // build the controller using the service
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    // POSTs a student record
    @PostMapping
    public ResponseEntity<Void> createStudent(@RequestBody Student student) {
        try {
            studentService.saveStudent(student);
            return ResponseEntity.status(201).build();
        } catch (DuplicateStudentException e) {
            return ResponseEntity.status(400).build();
        }
    }
}
