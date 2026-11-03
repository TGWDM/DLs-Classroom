package com.dlsclassroom.api.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;

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
    private StudentRepository studentRepo; // mock up fake DB connector

    @InjectMocks
    private StudentService studentService; // Mock the service using fake db connector

    @Test
    void ThrowsDupExceptionOnRejectDuplicates() {
        Student dup = new Student();
        dup.setFirstName("Finns");

        // mock repository throws a DB error when save is called
        when(studentRepo.save(any(Student.class)))
                .thenThrow(new org.springframework.dao.DataIntegrityViolationException("Duplicate"));

        // Assert that the service catches the DB error and throws a
        // DuplicateStudentException
        assertThrows(DuplicateStudentException.class, () -> {
            studentService.saveStudent(dup);
        });

    }

    @Test
    void GetAllReturnsStudentsList() {
        Student student = new Student();
        student.setFirstName("Finns");
        List<Student> students = new ArrayList<Student>();
        students.add(student);
        // mock repo returns list of students
        when(studentRepo.findAll()).thenReturn(students);

        List<Student> result = studentService.getAll();
        // Assert that the a list of students was returned
        assertNotNull(result);
        assertEquals("Finns", result.get(0).getFirstName());
        assertEquals(1, result.size());
    }
}
