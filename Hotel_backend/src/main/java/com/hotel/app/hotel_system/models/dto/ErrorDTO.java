package com.hotel.app.hotel_system.models.dto;

public class ErrorDTO {
  private String message;
  public ErrorDTO(){


  } 
  public ErrorDTO(String message){
    this.message = message;
  }

    /**
     * @return String return the message
     */
    public String getMessage() {
        return message;
    }

    /**
     * @param message the message to set
     */
    public void setMessage(String message) {
        this.message = message;
    }

}
