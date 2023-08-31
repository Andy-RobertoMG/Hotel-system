package com.hotel.app.hotel_system.models.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hotel.app.hotel_system.models.entity.Users;

@Repository("UsersRepository")
public interface UsersRepository extends JpaRepository<Users,UUID> {
  Optional<Users> findByUsername(String Username);
}