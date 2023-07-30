package com.hotel.app.hotel_system.models.entity;

import java.io.Serializable;
import java.util.List;
import java.util.UUID;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.UuidGenerator;
import org.hibernate.type.SqlTypes;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import io.micrometer.common.lang.NonNull;
import jakarta.annotation.Generated;
import jakarta.persistence.Basic;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="roomtype")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class RoomType implements Serializable {
  private static final long serialVersionUID = 2990602998676380780L;
  

  @Id
//   @Column(updatable = false, nullable = false, columnDefinition = "uuid DEFAULT uuid_generate_v4()")
  @Basic
  @JdbcTypeCode(SqlTypes.CHAR)    
//   @GeneratedValue(generator = "UUID")
//   @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
//   @Type(type = "org.hibernate.type.UUIDCharType")
  private UUID id;
  
  @Column
  private String title;

  @Column
  @NonNull
  private float price;
  
  @Column
  private String descr;
  
//   @JsonManagedReference
//   @JsonIgnore
//   @JsonBackReference
  @JsonIgnoreProperties("roomType2")
  @OneToMany(targetEntity = Room.class,fetch= FetchType.LAZY , mappedBy = "roomType2", cascade = CascadeType.MERGE)
  private List<Room> room;
  
  


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
     * @return List<Room> return the room
     */
    public List<Room> getRoom() {
        return room;
    }

    /**
     * @param room the room to set
     */
    public void setRoom(List<Room> room) {
        this.room = room;
    }

}