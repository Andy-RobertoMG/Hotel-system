package com.hotel.app.hotel_system.models.entity;

import java.io.Serializable;
import java.util.List;
import java.util.UUID;

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

@Entity
@Table(name="rol")
public class Rol implements Serializable{
  private static final long serialVersionUID = 1L;

  @Id
  @Basic
  @JdbcTypeCode(SqlTypes.CHAR)
  @UuidGenerator
  private UUID id;

  @Column
  private String name;

  @Column
  private String rol_desc;
  
  @OneToMany(targetEntity = Users.class,fetch= FetchType.LAZY , mappedBy = "rol_id", cascade = CascadeType.MERGE)
  private List<Users> users;
  public Rol(){

  }
  public Rol(UUID id,String name,String rol_desc){
    this.id = id;
    this.name = name;
    this.rol_desc = rol_desc;
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
     * @return String return the rol_desc
     */
    public String getRol_desc() {
        return rol_desc;
    }

    /**
     * @param rol_desc the rol_desc to set
     */
    public void setRol_desc(String rol_desc) {
        this.rol_desc = rol_desc;
    }


    /**
     * @return List<Users> return the users
     */
    public List<Users> getUsers() {
        return users;
    }

    /**
     * @param users the users to set
     */
    public void setUsers(List<Users> users) {
        this.users = users;
    }

}