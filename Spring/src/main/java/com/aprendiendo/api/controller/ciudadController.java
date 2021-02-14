package com.aprendiendo.api.controller;

import com.aprendiendo.api.model.Ciudad;
import com.aprendiendo.api.model.Persona;
import com.aprendiendo.api.service.CiudadService;
import com.aprendiendo.api.service.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Ciudad")
public class ciudadController {
    @Autowired
    CiudadService city;

    //get all
    @GetMapping("/all")
    public List<Ciudad> getAll(){ return city.getAll(); }
    //list 1
    @GetMapping("/porId/{id}")
    public Ciudad getById(@PathVariable int id) {return city.getById(id);}

    @PostMapping("/guardar")
    public Ciudad saveCity(@RequestBody Ciudad ciudad){
        return city.save(ciudad);
    }

    @PutMapping("/actualizar")
    public Ciudad updateCity(@RequestBody Ciudad ciudad){
        return city.updateCity(ciudad);
    }

    @DeleteMapping("/eliminar/{id}")
    public Boolean deleteCity(@PathVariable int id){
        return city.deleteCity(id);
    }
}
