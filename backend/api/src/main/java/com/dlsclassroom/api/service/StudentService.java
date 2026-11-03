package com.dlsclassroom.api.service;

import com.dlsclassroom.api.model.Student;
import com.dlsclassroom.api.repository.StudentRepository;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
    private final StudentRepository studentRepo;

    public StudentService(StudentRepository studentRepo) {
        this.studentRepo = studentRepo;
    }

    public Student saveStudent(Student student) {
        try {
            return studentRepo.save(student);
        } catch (DataIntegrityViolationException e) {
            throw new DuplicateStudentException("Duplicate student record");
        }
    }
}
