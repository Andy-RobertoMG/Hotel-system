package com.hotel.app.hotel_system.models.dto;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RoomTypeCreateDTO {
    
    @JsonProperty("title")
    private String descr;
    @JsonProperty("descr")
    private String title;
    @JsonProperty("price")
    private float price;

    /**
     * @return String return the descr
     */
    public String getDescr() {
        return descr;
    }

    /**
     * @param descr the descr to set
     */
    public void setDescr(String descr) {
        this.descr = descr;
    }

    /**
     * @return String return the title
     */
    public String getTitle() {
        return title;
    }

    /**
     * @param title the title to set
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * @return float return the price
     */
    public float getPrice() {
        return price;
    }

    /**
     * @param price the price to set
     */
    public void setPrice(float price) {
        this.price = price;
    }
  
}