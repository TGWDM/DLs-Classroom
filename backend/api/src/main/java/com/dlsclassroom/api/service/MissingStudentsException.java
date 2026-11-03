package com.dlsclassroom.api.service;

public class MissingStudentsException extends RuntimeException {
    public MissingStudentsException(String msg) {
        super(msg);
    }
}