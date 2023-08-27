package com.hotel.app.hotel_system.helper;

public class Message {
  private String message;
     
    public Message(String message){
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