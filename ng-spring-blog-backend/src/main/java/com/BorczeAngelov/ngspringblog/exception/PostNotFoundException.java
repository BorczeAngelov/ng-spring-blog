package com.BorczeAngelov.ngspringblog.exception;

public class PostNotFoundException extends RuntimeException{

    public PostNotFoundException(String message) {
        super(message);
    }    
}