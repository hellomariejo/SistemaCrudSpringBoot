package com.sistemavacunacion.sistemabackend.exception;

public class PersonaNotFoundException extends RuntimeException{
    public PersonaNotFoundException(Long id)
{
    super("No se puede encontrar el usuario con id "+ id);
}    
}
