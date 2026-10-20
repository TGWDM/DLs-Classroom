package com.dlsclassroom.api.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity // Registers class as table
// adding a name allows for easy id if an error occurs.
@Table(name = "students", uniqueConstraints = @UniqueConstraint(name = "unique_students", columnNames = {
        "first_name",
        "last_name",
        "date_of_birth"
}))

public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;
    @Column(name = "last_name", nullable = false)
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
