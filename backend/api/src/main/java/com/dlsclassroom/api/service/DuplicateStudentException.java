package com.dlsclassroom.api.service;

/*
    A custom exception that throws when a duplicate student is detected
    Extends RuntimeException so that this exception doesn't needed to be added
    to all method signitures.
*/
public class DuplicateStudentException extends RuntimeException {
    public DuplicateStudentException(String msg) {
        super(msg);
    }
}