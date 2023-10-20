package com.hotel.app.hotel_system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.hotel.app.hotel_system.models.entity.Reservation;
import com.hotel.app.hotel_system.models.repository.ReservationRepository;

@Service("ReservationService")
public class ReservationService implements ReservationServiceI {
  @Autowired
  @Qualifier("reservationRepository")
  private ReservationRepository cruRepository;

  @Override
  public List<Reservation> getAllReservation() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getAllReservation'");
  }

  @Override
  public Reservation createReservation() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'createReservation'");
  }

  @Override
  public Reservation SearchById() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'SearchById'");
  }
}
