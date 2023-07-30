package com.hotel.app.hotel_system.models.dao;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.hotel.app.hotel_system.models.entity.RoomType;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Repository
public class TypeRoomImp implements ITypeRoom {

  @PersistenceContext
  private EntityManager em;

  @SuppressWarnings("unchecked")
  @Override
  @Transactional(readOnly = true)
  public List<RoomType> findAll() {
    // TODO Auto-generated method stub

    return em.createQuery("from RoomType").getResultList();
  }
    
}