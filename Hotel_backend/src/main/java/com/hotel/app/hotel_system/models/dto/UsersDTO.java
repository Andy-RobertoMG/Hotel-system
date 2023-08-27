package com.hotel.app.hotel_system.models.dto;

import java.util.UUID;

import org.springframework.boot.autoconfigure.security.SecurityProperties.User;

import com.hotel.app.hotel_system.models.entity.Rol;
import com.hotel.app.hotel_system.models.entity.Users;

import jakarta.persistence.Column;
import jakarta.persistence.Id;

public class UsersDTO {
  private UUID id;
  private String name;
  private int phone_number;
  private String email;
  private String pass;
  private UUID rol_id;
  public UsersDTO(){

  }
  public UsersDTO(UUID id,String name,int phone_number,String email,String pass, Rol rol_id){
    this.id = id;
    this.name = name;
    this.email= email;
    this.pass = pass;
    this.phone_number= phone_number;
    this.rol_id = rol_id.getId();
  }
  public UsersDTO(Users user){
    this.id = user.getId();
    this.name = user.getName();
    this.email = user.getEmail();
    this.pass= user.getPass();
    this.phone_number = user.getPhoneNumber();
    this.rol_id = user.getRol_id().getId();
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
     * @return int return the phone_number
     */
    public int getPhone_number() {
        return phone_number;
    }

    /**
     * @param phone_number the phone_number to set
     */
    public void setPhone_number(int phone_number) {
        this.phone_number = phone_number;
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
     * @return UUID return the rol_id
     */
    public UUID getRol_id() {
        return rol_id;
    }

    /**
     * @param rol_id the rol_id to set
     */
    public void setRol_id(UUID rol_id) {
        this.rol_id = rol_id;
    }

}