package com.hotel.app.hotel_system.service;

import java.util.List;

import com.hotel.app.hotel_system.models.entity.Reservation;

public interface ReservationServiceI {
  List<Reservation> getAllReservation();
  Reservation createReservation();
  Reservation SearchById();
}
