package com.dlsclassroom.api.repository;

import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.boot.jdbc.test.autoconfigure.AutoConfigureTestDatabase;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.test.context.ActiveProfiles;
import com.dlsclassroom.api.model.Student;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@ActiveProfiles("test")
class StudentRepositoryTest {

    @Autowired
    private StudentRepository studentRepo;

    @Test
    void savesAndGetsStudent() {
        Student student = createStudent("John", "Doe", 2000, 1, 1, "/icons/default.svg");
        Student saved = studentRepo.save(student);

        assertNotNull(saved.getId());
        assertEquals("John", saved.getFirstName());
        assertEquals("Doe", saved.getLastName());
        assertEquals(LocalDate.of(2000, 1, 1), saved.getDob());
        assertEquals("/icons/default.svg", saved.getIconUrl());
    }

    @Test
    void blockDuplicateStudents() {
        Student s1 = createStudent("Alice", "Smith", 2001, 5, 10);
        Student s2 = createStudent("Bob", "Andy", 2002, 1, 10);
        Student s3 = createStudent("Alice", "Smith", 2001, 5, 10); // dupliacte s1
        studentRepo.save(s1);
        studentRepo.save(s2);
        // A data integrity error should be thrown blocking the duplicate from being
        // made.
        assertThrows(DataIntegrityViolationException.class, () -> {
            studentRepo.save(s3);
        });
    }

    private Student createStudent(String fName, String lName, int yr, int mon, int day, String iconUrl) {
        Student stud = new Student();
        stud.setFirstName(fName);
        stud.setLastName(lName);
        stud.setDob(LocalDate.of(yr, mon, day));
        stud.setIconUrl(iconUrl);
        return stud;
    }

    private Student createStudent(String fName, String lName, int yr, int mon, int day) {
        Student stud = new Student();
        stud.setFirstName(fName);
        stud.setLastName(lName);
        stud.setDob(LocalDate.of(yr, mon, day));
        return stud;
    }
}