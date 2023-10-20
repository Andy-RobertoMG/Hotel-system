package com.hotel.app.hotel_system.models.entity;

import java.util.List;
import java.util.UUID;

import org.hibernate.annotations.JdbcType;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.UuidGenerator;
import org.hibernate.type.SqlTypes;

import jakarta.persistence.Basic;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;

@Entity
@Table(name="customer")
public class Customer {
  @Id
  @Basic
  @JdbcTypeCode(SqlTypes.BINARY)
  @UuidGenerator
  private UUID id;

  @Column (name="name")
  private String full_name;

  @Column()
  @Email()
  private String email;

  @Column
  private String password;

  @Column
  private String city;
  
  @Column 
  private String colony;

  @Column
  private int postcode;

  @Column
  private String street;

  @OneToMany(targetEntity = Reservation.class,fetch = FetchType.LAZY,cascade= CascadeType.MERGE)
  private List<Reservation> reservations;


  public Customer(){
    
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
     * @return String return the full_name
     */
    public String getFull_name() {
        return full_name;
    }

    /**
     * @param full_name the full_name to set
     */
    public void setFull_name(String full_name) {
        this.full_name = full_name;
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
     * @return String return the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password the password to set
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return String return the city
     */
    public String getCity() {
        return city;
    }

    /**
     * @param city the city to set
     */
    public void setCity(String city) {
        this.city = city;
    }

    /**
     * @return String return the colony
     */
    public String getColony() {
        return colony;
    }

    /**
     * @param colony the colony to set
     */
    public void setColony(String colony) {
        this.colony = colony;
    }

    /**
     * @return int return the postcode
     */
    public int getPostcode() {
        return postcode;
    }

    /**
     * @param postcode the postcode to set
     */
    public void setPostcode(int postcode) {
        this.postcode = postcode;
    }

    /**
     * @return String return the street
     */
    public String getStreet() {
        return street;
    }

    /**
     * @param street the street to set
     */
    public void setStreet(String street) {
        this.street = street;
    }

}