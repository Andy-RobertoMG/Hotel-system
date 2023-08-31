package com.hotel.app.hotel_system.models.entity;

import java.io.Serializable;
import java.util.Collection;
import java.util.UUID;
import java.util.List;

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.UuidGenerator;
import org.hibernate.type.SqlTypes;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

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
public class Users  implements UserDetails{
    private static final long serialVersionUID = 2990602998676380780L;

    @Id
    @Basic
    @JdbcTypeCode(SqlTypes.CHAR)
    @UuidGenerator
    private UUID id;
    
    @Column(name="name")
    private String username;

    @Column(name="phone_number")
    private int phoneNumber;

    @Column()
    // @Email
    private String email;

    @Column(name="pass")
    private String password;

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="rol_id",referencedColumnName = "id")
    private Rol rol_id;

    public Users(){

    }
    public Users(String name,int phoneNumber,String email,String pass,Rol rol_id){
        this.username = name;
        this.phoneNumber = phoneNumber;
        this.email=email;
        this.password= pass;
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
    public String getUsername() {
        return username;
    }

    /**
     * @param name the name to set
     */
    public void setUsername(String name) {
        this.username = name;
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
    public String getPassword() {
        return password;
    }

    /**
     * @param pass the pass to set
     */
    public void setPassword(String pass) {
        this.password = pass;
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
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // TODO Auto-generated method stub
        return List.of(new SimpleGrantedAuthority(rol_id.getName()));
    }
    
    @Override
    public boolean isAccountNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }
    @Override
    public boolean isAccountNonLocked() {
        // TODO Auto-generated method stub
        return true;
    }
    @Override
    public boolean isCredentialsNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }
    @Override
    public boolean isEnabled() {
        // TODO Auto-generated method stub
        return true;
    }
   

}