package com.dlsclassroom.api.controller;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import com.dlsclassroom.api.model.Student;
import com.dlsclassroom.api.service.DuplicateStudentException;
import com.dlsclassroom.api.service.StudentService;

@WebMvcTest(StudentController.class)
class StudentControllerTest {
    @Autowired
    private MockMvc mockMvc; // Creates fake http requqest

    @MockitoBean
    private StudentService studentService;

    @Test
    void Returns201OnCreateStudent() throws Exception {
        Student student = new Student();
        student.setFirstName("Finns");

        when(studentService.saveStudent(any(Student.class))).thenReturn(student);

        mockMvc.perform(post("/api/students")
                .contentType("application/json")
                .content(
                        "{\"firstName\":\"Finns\",\"lastName\":\"Smith\",\"dob\":\"2001-05-10\"}"))
                .andExpect(status().isCreated());
    }

    @Test
    void Return400OnDuplicateStudent() throws Exception {
        // Simluate the service detecting a duplicate student
        when(studentService.saveStudent(any(Student.class)))
                .thenThrow(new DuplicateStudentException("Duplicate"));

        mockMvc.perform(post("/api/students")
                .contentType("application/json")
                .content("{\"firstName\":\"Finns\",\"lastName\":\"Smith\",\"dob\":\"2001-05-10\"}"))
                .andExpect(status().isBadRequest());
    }

    @Test
    void Returns200OnGetAllStudents() throws Exception {
        Student student = new Student();
        student.setFirstName("Finns");
        List<Student> students = new ArrayList<Student>();
        students.add(student);
        when(studentService.getAll()).thenReturn(students);

        mockMvc.perform(get("/api/students")
                .contentType("application/json"))
                .andExpectAll(
                        status().isOk(),
                        jsonPath("$[0].firstName").value("Finns"));
    }
}
