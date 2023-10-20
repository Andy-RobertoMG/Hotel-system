package com.hotel.app.hotel_system.models.entity;

import java.sql.Date;
import java.util.UUID;

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.UuidGenerator;
import org.hibernate.type.SqlTypes;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="reservation")
public class Reservation {
  @Id
  @Basic
  @JdbcTypeCode(SqlTypes.BINARY)
  @UuidGenerator
  private UUID id;

  @Column
  private int numRooms;

  @Column
  private String numChildren;

  @Column
  private String numAdults;

  @Column
  private Date dateCreated;

  @Column
  private Date check_in;

  @Column
  private Date check_out;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name="room_id",referencedColumnName ="id")
  private Room room_id;
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name="customer_id", referencedColumnName = "id")
  private Customer customer_id;

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
     * @return String return the numChildren
     */
    public String getNumChildren() {
        return numChildren;
    }

    /**
     * @param numChildren the numChildren to set
     */
    public void setNumChildren(String numChildren) {
        this.numChildren = numChildren;
    }

    /**
     * @return String return the numAdults
     */
    public String getNumAdults() {
        return numAdults;
    }

    /**
     * @param numAdults the numAdults to set
     */
    public void setNumAdults(String numAdults) {
        this.numAdults = numAdults;
    }

    /**
     * @return Date return the dateCreated
     */
    public Date getDateCreated() {
        return dateCreated;
    }

    /**
     * @param dateCreated the dateCreated to set
     */
    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    /**
     * @return Date return the check_in
     */
    public Date getCheck_in() {
        return check_in;
    }

    /**
     * @param check_in the check_in to set
     */
    public void setCheck_in(Date check_in) {
        this.check_in = check_in;
    }

    /**
     * @return Date return the check_out
     */
    public Date getCheck_out() {
        return check_out;
    }

    /**
     * @param check_out the check_out to set
     */
    public void setCheck_out(Date check_out) {
        this.check_out = check_out;
    }

    /**
     * @return Customer return the customer_id
     */
    public Customer getCustomer_id() {
        return customer_id;
    }

    /**
     * @param customer_id the customer_id to set
     */
    public void setCustomer_id(Customer customer_id) {
        this.customer_id = customer_id;
    }


    /**
     * @return int return the numRooms
     */
    public int getNumRooms() {
        return numRooms;
    }

    /**
     * @param numRooms the numRooms to set
     */
    public void setNumRooms(int numRooms) {
        this.numRooms = numRooms;
    }

    /**
     * @return Room return the room_id
     */
    public Room getRoom_id() {
        return room_id;
    }

    /**
     * @param room_id the room_id to set
     */
    public void setRoom_id(Room room_id) {
        this.room_id = room_id;
    }

}