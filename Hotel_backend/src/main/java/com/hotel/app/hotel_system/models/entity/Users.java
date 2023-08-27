package com.hotel.app.hotel_system.models.entity;

import java.io.Serializable;
import java.util.UUID;

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.UuidGenerator;
import org.hibernate.type.SqlTypes;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.jsonFormatVisitors.JsonFormatTypes;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;

@Entity
@Table(name="users")
public class Users  implements Serializable{
    private static final long serialVersionUID = 2990602998676380780L;

    @Id
    @Basic
    @JdbcTypeCode(SqlTypes.CHAR)
    @UuidGenerator
    private UUID id;
    
    @Column
    private String name;

    @Column(name="phone_number")
    private int phoneNumber;

    @Column
    // @Email
    private String email;

    @Column
    private String pass;

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="rol_id",referencedColumnName = "id")
    private Rol rol_id;

    public Users(){

    }
    public Users(String name,int phoneNumber,String email,String pass,Rol rol_id){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email=email;
        this.pass= pass;
        this.rol_id= rol_id;
    }
    /**
     * @return UUID return the id
     */
    public UUID getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(UUID id) {
        this.id = id;
    }


    /**
     * @return String return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

   
    /**
     * @return String return the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email the email to set
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return String return the pass
     */
    public String getPass() {
        return pass;
    }

    /**
     * @param pass the pass to set
     */
    public void setPass(String pass) {
        this.pass = pass;
    }


    /**
     * @return int return the phoneNumber
     */
    public int getPhoneNumber() {
        return phoneNumber;
    }

    /**
     * @param phoneNumber the phoneNumber to set
     */
    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }


   


    /**
     * @return Rol return the rol_id
     */
    public Rol getRol_id() {
        return rol_id;
    }

    /**
     * @param rol_id the rol_id to set
     */
    public void setRol_id(Rol rol_id) {
        this.rol_id = rol_id;
    }

}