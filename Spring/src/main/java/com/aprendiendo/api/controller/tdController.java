package com.aprendiendo.api.controller;

import com.aprendiendo.api.model.TipoDocumento;
import com.aprendiendo.api.service.CiudadService;
import com.aprendiendo.api.service.TdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/Td")
public class tdController {
    @Autowired
    TdService td;

    @GetMapping("/all")
    public List<TipoDocumento> getAll(){ return td.getAll();}

    @GetMapping("porID/{id}")
    public TipoDocumento getById(@PathVariable int id){ return td.getById(id);}

    @PostMapping("/guardar")
    public TipoDocumento saveTd(@RequestBody TipoDocumento documento){return  td.save(documento);}
    @PutMapping("actualizar")
    public TipoDocumento updateTd(@RequestBody TipoDocumento documento){return td.update(documento);}
    @DeleteMapping("/eliminar/{id}")
    public boolean deleteTd(@PathVariable int id){return td.deleteTd(id);}
}
