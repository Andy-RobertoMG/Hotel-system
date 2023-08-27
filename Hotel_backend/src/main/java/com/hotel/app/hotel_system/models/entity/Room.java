package com.hotel.app.hotel_system.models.entity;

import java.io.Serializable;
import java.util.UUID;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;
import org.hibernate.annotations.Type;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@Table(name="room")
public class Room implements Serializable {
    private static final long serialVersionUID = 1L;
    //https://chat.openai.com/share/7f3d2f5b-5941-410f-a92f-f4ad0164e58b
    @Id
    @Column(name = "id" , nullable = false)
    private Long id;

    @Column(nullable = false)
    private int floor;
    // @Column(nullable = false)
    // @JsonBackReference//Funciona pero no estrae todo el json
    // @JsonIgnore
    // @JsonManagedReference
    // @JsonIgnoreProperties("rooms")
    @ManyToOne(fetch = FetchType.LAZY)
    // @JsonIgnoreProperties("room")
    // @NotFound(action=NotFoundAction.IGNORE)
    @JoinColumn(name="roomtype_id",referencedColumnName = "id")
    private RoomType roomType2; 


    @Override
    public String toString() {
        return "Room [id=" + id + ", floor=" + floor +"]"+"Roomtype"+roomType2.getId()+"]";
    }
    


    /**
     * @return Long return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return int return the floor
     */
    public int getFloor() {
        return floor;
    }

    /**
     * @param floor the floor to set
     */
    public void setFloor(int floor) {
        this.floor = floor;
    }

    /**
     * @return RoomType return the roomType2
     */
    public RoomType getRoomType2() {
        return roomType2;
    }

    /**
     * @param roomType2 the roomType2 to set
     */
    public void setRoomType2(RoomType roomType2) {
        this.roomType2 = roomType2;
    }

}