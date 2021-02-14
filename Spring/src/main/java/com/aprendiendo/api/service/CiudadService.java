package com.aprendiendo.api.service;

import com.aprendiendo.api.model.Ciudad;
import com.aprendiendo.api.model.Persona;
import com.aprendiendo.api.repository.CiudadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CiudadService {
    @Autowired
    CiudadRepository city;
    @Autowired
    PersonaService person;

    public List<Ciudad> getAll(){
        return city.findAll();
    }

    //Listar 1

    public Ciudad getById(int id) { return city.findById(id); }
    //update
    public Ciudad updateCity(Ciudad ciudad){
        Ciudad existingCity = city.findById(ciudad.getId());
        if (existingCity == null){
            return null;
        }else{
            existingCity.setName(ciudad.getName());
            existingCity.setDescription(ciudad.getDescription());
            return city.save(existingCity);
        }

    }
    //guardar
    public Ciudad save(Ciudad ciudad){ return city.save(ciudad);}

    //delete

    public Boolean deleteCity (int id){
        Ciudad ciudad = city.findById(id);
        if (person.getFirstByCiudad(id)==null){
            if(ciudad!=null) {
                city.delete(ciudad);
                return true;
            }
        }
        return false;
    }

}
