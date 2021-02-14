package com.aprendiendo.api.repository;

import com.aprendiendo.api.model.Ciudad;
import com.aprendiendo.api.model.Persona;
import com.aprendiendo.api.model.TipoDocumento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public interface PersonaRepository extends JpaRepository <Persona, Integer> {
    Persona findFirstByCity(Ciudad city);
    Persona findFirstByDocumentType(TipoDocumento documentType);
}
