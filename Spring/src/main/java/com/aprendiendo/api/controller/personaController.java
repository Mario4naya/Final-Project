package com.aprendiendo.api.controller;

import com.aprendiendo.api.model.Persona;
import com.aprendiendo.api.service.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/Persona")
public class personaController {
    @Autowired
    PersonaService person;
    @GetMapping("/porciudad/{id}")
    public Persona getFirstByCiudad(@PathVariable int id) {
        return person.getFirstByCiudad(id);
    }
    @GetMapping("/portd/{id}")
    public Persona getFirstByTd(@PathVariable int id){
        return  person.getFirstPersonByTd(id);
    }
    @GetMapping("/all")
    public List<Persona> getAll(){
        return person.getAll();
    }
    @GetMapping("/porId/{id}")
    public Persona getById(@PathVariable int id){
        return person.getById(id);
    }

    @PostMapping("/guardar")
        public Persona savePerson(@RequestBody Persona persona){
            return person.savePerson(persona);
        }
    @PutMapping("/actualizar")
    public Persona updatePersona(@RequestBody Persona persona){
        return person.updatePerson(persona);
    }
    @DeleteMapping("/eliminar/{id}")
    public boolean deletePerson(@PathVariable int id){
        return person.deletePerson(id);
    }


}
