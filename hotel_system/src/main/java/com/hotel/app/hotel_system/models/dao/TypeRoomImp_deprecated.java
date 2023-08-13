// package com.hotel.app.hotel_system.models.dao;

// import java.util.List;

// import org.springframework.stereotype.Repository;
// import org.springframework.transaction.annotation.Transactional;

// import com.hotel.app.hotel_system.models.entity.RoomType;

// import jakarta.persistence.EntityManager;
// import jakarta.persistence.PersistenceContext;

// // @Repository
// public class TypeRoomImp_deprecated implements ITypeRoomDao_deprecated {

//   // @PersistenceContext
//   // private EntityManager em;

//   // @SuppressWarnings("unchecked")
//   // @Override
//   // @Transactional(readOnly = true)
//   // public List<RoomType> findAll() {
//   //   // TODO Auto-generated method stub

//   //   return em.createQuery("from RoomType").getResultList();
//   // }
  
//   // @Override
//   // @Transactional
//   // public void save(RoomType roomtype) {
//   //   // TODO Auto-generated method stub
//   //   if(roomtype.getId()!=null)
//   //   {
//   //     em.merge(roomtype); //Actualiza la posicion de una fila
//   //   }
//   //   else{
//   //     em.persist(roomtype);//Si no existe crea uno nuevo
//   //   }
//   // }

//   // @Override
//   // public RoomType findOne(Long id) {
//   //   // TODO Auto-generated method stub
//   //   return em.find(RoomType.class,id);

//   // }

//   // @Override
//   // public void delete(Long id) {
//   //   em.remove(findOne(id));
//   // }
// }