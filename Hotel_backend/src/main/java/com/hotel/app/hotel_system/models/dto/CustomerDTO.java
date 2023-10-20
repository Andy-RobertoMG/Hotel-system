package com.hotel.app.hotel_system.models.dto;

import java.util.List;
import java.util.UUID;

import com.hotel.app.hotel_system.models.entity.Customer;
import com.hotel.app.hotel_system.models.entity.Reservation;

public class CustomerDTO {

  private UUID id;
  private String full_name;
  private String email;
  private String city;
  private String colony;
  private int postcode;
  private String street;
  // private List<

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
    public CustomerDTO(List<Customer> list_Customer){
        for(Customer cus: list_Customer ){
            
        }
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