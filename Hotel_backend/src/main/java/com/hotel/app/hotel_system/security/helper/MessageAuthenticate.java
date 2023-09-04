package com.hotel.app.hotel_system.security.helper;

public class MessageAuthenticate {
    private String message;
    private boolean authenticated;
    public MessageAuthenticate(String message,boolean authenticated){
      this.message = message;
      this.authenticated = authenticated;
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

    /**
     * @return boolean return the authenticated
     */
    public boolean isAuthenticated() {
        return authenticated;
    }

    /**
     * @param authenticated the authenticated to set
     */
    public void setAuthenticated(boolean authenticated) {
        this.authenticated = authenticated;
    }

}