package com.hotel.app.hotel_system.models.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hotel.app.hotel_system.models.entity.Customer;

@Repository("reservationRepository")
public interface ReservationRepository extends JpaRepository<Customer,UUID> {
  
}