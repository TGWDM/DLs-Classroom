package com.dlsclassroom.api.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity // Registers class as table
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;
    @Column(name = "last_Name", nullable = false)
    private String lastName;
    @Column(name = "date_of_birth", nullable = false)
    private LocalDate dob;
    @Column(name = "icon_url")
    private String iconUrl;

    // Setters
    public void getId(Long id) {
        this.id = id;
    }

    public void setFirstName(String fName) {
        this.firstName = fName;
    }

    public void setLastName(String lName) {
        this.lastName = lName;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public void setIconUrl(String iconUrl) {
        this.iconUrl = iconUrl;
    }

    // Getters
    public Long getId() {
        return this.id;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public LocalDate getDob() {
        return this.dob;
    }

    public String getIconUrl() {
        return this.iconUrl;
    }
}
