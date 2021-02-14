package com.aprendiendo.api.service;

import com.aprendiendo.api.model.TipoDocumento;
import com.aprendiendo.api.repository.tdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TdService {
    @Autowired
    tdRepository td;
    @Autowired
    PersonaService p;
    public List<TipoDocumento> getAll(){
        return td.findAll();
    }
    public TipoDocumento getById(int id){
        return td.findById(id);
    }
    public TipoDocumento update(TipoDocumento documento ){
        TipoDocumento existingTd = td.findById(documento.getId());
        if (existingTd == null){
            return null;
        }else {
            existingTd.setName(documento.getName());
            existingTd.setDescription(documento.getDescription());
            return td.save(existingTd);
        }

    }
    public TipoDocumento save(TipoDocumento documento){ return td.save(documento);}

    //delete

    public Boolean deleteTd(int id){
        TipoDocumento documento = td.findById(id);
        if(p.getFirstPersonByTd(id)==null){
            if (documento != null){
                td.delete(documento);
                return true;
            }
        }
        return false;
    }
}
