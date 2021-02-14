package com.aprendiendo.api.repository;

import com.aprendiendo.api.model.Ciudad;
import com.aprendiendo.api.model.TipoDocumento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface tdRepository extends JpaRepository<TipoDocumento,Integer> {
    TipoDocumento findById(int id);
}
