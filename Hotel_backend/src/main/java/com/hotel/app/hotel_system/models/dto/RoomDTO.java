package com.hotel.app.hotel_system.models.dto;

import java.util.UUID;

import com.hotel.app.hotel_system.models.entity.Room;

public class RoomDTO {
    private Long id;
    private int floor;
    private UUID roomtype_id;
    // private RoomTypeDTO roomtype;
    /**
     * @return Long return the id
     */
    public RoomDTO(){
        
    }
    public RoomDTO(Room room){
        this.id=room.getId();
        this.floor=room.getFloor();
        this.roomtype_id=room.getRoomType2().getId();
    }
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
     * @return UUID return the roomtype_id
     */
    public UUID getRoomtype_id() {
        return roomtype_id;
    }

    /**
     * @param roomtype_id the roomtype_id to set
     */
    public void setRoomtype_id(UUID roomtype_id) {
        this.roomtype_id = roomtype_id;
    }


    // /**
    //  * @return RoomTypeDTO return the RoomType
    //  */
    // public RoomTypeDTO getRoomtype() {
    //     return roomtype;
    // }

    // /**
    //  * @param RoomType the RoomType to set
    //  */
    // public void setRoomtype(RoomTypeDTO RoomType) {
    //     this.roomtype = RoomType;
    // }

}