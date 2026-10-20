package com.dlsclassroom.api.repository;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.boot.jdbc.test.autoconfigure.AutoConfigureTestDatabase;
import org.springframework.test.context.ActiveProfiles;
import java.util.List;
import com.dlsclassroom.api.model.Student;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@ActiveProfiles("test")
class StudentRepositoryTest {

    @Autowired
    private StudentRepository studentRepo;

    @Test
    void savesAndGetsStudent() {
        Student student = new Student();
        student.setFirstName("John");
        student.setLastName("Doe");
        student.setDob(LocalDate.of(2000, 1, 1));
        student.setIconUrl("/icons/default.svg");

        Student saved = studentRepo.save(student);

        assertNotNull(saved.getId());
        assertEquals("John", saved.getFirstName());
        assertEquals("Doe", saved.getLastName());
        assertEquals(LocalDate.of(2000, 1, 1), saved.getDob());
        assertEquals("/icons/default.svg", saved.getIconUrl());
    }

    @Test
    void blockDuplicateStudents() {
        Student s1 = new Student();
        s1.setFirstName("Alice");
        s1.setLastName("Smith");
        s1.setDob(LocalDate.of(2001, 5, 10));

        Student s2 = new Student();
        s2.setFirstName("Bob");
        s2.setLastName("Smith");
        s2.setDob(LocalDate.of(2002, 8, 17));

        Student s3 = new Student(); // dupliacte student
        s3.setFirstName("Alice");
        s3.setLastName("Brown");
        s3.setDob(LocalDate.of(2001, 5, 10));

        studentRepo.save(s1);
        studentRepo.save(s2);
        studentRepo.save(s3);

        List<Student> students = studentRepo.findAll();
        // there should only be two students as the third should have been blocked.
        assertEquals(2, students.size());
    }
}