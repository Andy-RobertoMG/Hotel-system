package com.hotel.app.hotel_system.security.helper;

public class MessageAuthenticate {
    private String rol;
    private boolean authenticated;
    public MessageAuthenticate(String message,boolean authenticated){
      this.rol = message;
      this.authenticated = authenticated;
    }
    

    /**
     * @return String return the message
     */
    public String getRol() {
        return rol;
    }

    /**
     * @param message the message to set
     */
    public void setRol(String message) {
        this.rol = message;
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