package com_gestion_clientes.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

    private static  final long serialversionUID = 1;

    public ResourceNotFoundException(String message) {
        super(message);
    }
}
