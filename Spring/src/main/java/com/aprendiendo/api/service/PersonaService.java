package com.aprendiendo.api.service;

import com.aprendiendo.api.model.Persona;
import com.aprendiendo.api.repository.CiudadRepository;
import com.aprendiendo.api.repository.PersonaRepository;
import com.aprendiendo.api.repository.tdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class PersonaService {
    @Autowired
    PersonaRepository person;
    @Autowired
    CiudadRepository city;
    @Autowired
    tdRepository td;

    public Persona getFirstByCiudad(int id){
        return person.findFirstByCity(city.findById(id));
    }

    public Persona getFirstPersonByTd(int id){
        return person.findFirstByDocumentType(td.findById(id));
    }
    public List<Persona> getAll(){
        return person.findAll();
    }

    public Persona getById(int id){
        return person.findById(id).orElse(null);
    }

    public Persona savePerson(Persona persona){
        return person.save(persona);
    }
    public Persona updatePerson(Persona persona){
        Persona existingPerson = person.findById(persona.getId()).orElse(null);
        if (existingPerson == null){
            return null;
        }else{
            existingPerson.setName(persona.getName());
            existingPerson.setLastName(persona.getLastName());
            existingPerson.setCity(persona.getCity());
            existingPerson.setDocument(persona.getDocument());
            existingPerson.setBirthDate(persona.getBirthDate());
            existingPerson.setPassword(persona.getPassword());
            existingPerson.setDocumentType(persona.getDocumentType());
            existingPerson.setUser(persona.getUser());
            existingPerson.setPhone(persona.getPhone());
            existingPerson.setEmail(persona.getEmail());

            return person.save(existingPerson);
        }
    }
    public boolean deletePerson(int id){
        Persona persona = person.findById(id).orElse(null);
        if (persona != null){
            person.delete(persona);
            return true;
        }
        return false;
    }



}
