package com.aprendiendo.api.model;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="Person")
public class Persona {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String lastName;
    private String document;
    private String phone;
    private String user;
    private String password;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    private String email;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date birthDate;

    @ManyToOne
    @JoinColumn
    private Ciudad city;

    @ManyToOne
    @JoinColumn
    private TipoDocumento documentType;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getDocument() {
        return document;
    }

    public void setDocument(String document) {
        this.document = document;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public Ciudad getCity() {
        return city;
    }

    public void setCity(Ciudad city) {
        this.city = city;
    }

    public TipoDocumento getDocumentType() {
        return documentType;
    }

    public void setDocumentType(TipoDocumento documentType) {
        this.documentType = documentType;
    }
}
