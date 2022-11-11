package com.sistemavacunacion.sistemabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sistemavacunacion.sistemabackend.model.Persona;

public interface PersonaRepository extends JpaRepository<Persona,Long>{
    
}
