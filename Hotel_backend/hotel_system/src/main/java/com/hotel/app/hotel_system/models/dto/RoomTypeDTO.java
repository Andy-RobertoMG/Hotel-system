package com.hotel.app.hotel_system.models.dto;

import java.util.UUID;

public class RoomTypeDTO {
    private UUID id;
    private String desc;
    private String title;
    private float price;
    
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
     * @return String return the descr
     */
    public String getDesc() {
        return desc;
    }

    /**
     * @param descr the descr to set
     */
    public void setDesc(String descr) {
        this.desc = descr;
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