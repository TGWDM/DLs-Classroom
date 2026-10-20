package com.dlsclassroom.api.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.dlsclassroom.api.model.Student;
import com.dlsclassroom.api.repository.StudentRepository;

@ExtendWith(MockitoExtension.class)
class StudentServiceTest {
    @Mock
    private StudentRepository studentRepo; // mock the DB

    @InjectMocks
    private StudentService studentService;

    @Test
    void throwsErrorOnRejectDuplicates() {
        Student dup = new Student();
        dup.setFirstName("Finn");

        // mock repository throws a DB error when save is called
        when(studentRepo.save(any(Student.class)))
                .thenThrow(new org.springframework.dao.DataIntegrityViolationException("Duplicate"));

        // Assert that the service catches the DB error and throws a
        // IllegalArgumentException
        assertThrows(IllegalArgumentException.class, () -> {
            studentService.saveStudent(dup);
        });

    }
}
