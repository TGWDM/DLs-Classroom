package com.dlsclassroom.api.model;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class StudentTest{
    @Test
    void shouldCreateStudentWithAllFields(){
        Student student = new Student();
        student.setFirstName("John");
        student.setLastName("Stuman");
        student.setDob(LocalDate.of(2001, 9, 1));
        student.setIconUrl("/icons/defStudent.svg");

        assertEquals("John", student.getFirstName());
        assertEquals("Stuman", student.getLastName());
        assertEquals(LocalDate.of(2001, 9, 1), student.getDob());
        assertEquals("/icons/defStudent.svg", student.getIconUrl());
    }
}