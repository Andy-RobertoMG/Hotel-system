package com.hotel.app.hotel_system.models.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hotel.app.hotel_system.models.entity.Rol;

@Repository("rolRepository")
public interface RolRepository extends JpaRepository<Rol,UUID>  {
}