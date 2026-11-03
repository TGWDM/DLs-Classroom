package com.dlsclassroom.api.controller;

import com.dlsclassroom.api.service.DuplicateStudentException;
import com.dlsclassroom.api.service.StudentService;
import com.dlsclassroom.api.model.Student;

import org.springframework.http.HttpStatus;
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
    public ResponseEntity<?> createStudent(@RequestBody Student student) {
        try {
            Student postStudent = studentService.saveStudent(student);
            return ResponseEntity.status(HttpStatus.CREATED).body(postStudent);
        } catch (DuplicateStudentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
