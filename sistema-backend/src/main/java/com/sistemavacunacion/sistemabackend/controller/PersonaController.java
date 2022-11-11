package com.sistemavacunacion.sistemabackend.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sistemavacunacion.sistemabackend.exception.PersonaNotFoundException;
import com.sistemavacunacion.sistemabackend.model.Persona;
import com.sistemavacunacion.sistemabackend.repository.PersonaRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class PersonaController {

    @Autowired
    private PersonaRepository personaRepository;

    @PostMapping("/persona")
    Persona newPersona(@RequestBody Persona newPersona){
        return personaRepository.save(newPersona);

    }
     
    @GetMapping("/personas")
    List<Persona> getAllPersonas(){
        return personaRepository.findAll();
    }

    @GetMapping("/persona/{id}")
    Persona getPersonabyId(@PathVariable Long id){
        return personaRepository.findById(id)
        .orElseThrow(()-> new PersonaNotFoundException(id));
    }

    @PutMapping("/persona/{id}")
    Persona updatePersona(@RequestBody Persona newPersona, @PathVariable Long id ){
        return personaRepository.findById(id)
            .map(persona ->{
                persona.setIdentificacion(newPersona.getIdentificacion());
                persona.setNombre(newPersona.getNombre());
                persona.setApellido(newPersona.getApellido());
                persona.setEmail(newPersona.getEmail());
                return personaRepository.save(persona);
        }).orElseThrow(() -> new PersonaNotFoundException(id));
    }

    @DeleteMapping("/persona/{id}")
    String deletePersona(@PathVariable Long id){
        if(!personaRepository.existsById(id)){
            throw new PersonaNotFoundException(id);
        }
        personaRepository.deleteById(id);
        return "Persona con id "+id+" ha sido eliminada exitosamente.";
    }
 

}
