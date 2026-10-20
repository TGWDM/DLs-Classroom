package com.dlsclassroom.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dlsclassroom.api.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

}
