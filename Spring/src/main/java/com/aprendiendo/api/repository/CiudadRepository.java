package com.aprendiendo.api.repository;

import com.aprendiendo.api.model.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CiudadRepository extends JpaRepository <Ciudad,Integer> {
    Ciudad findById(int id);
}
