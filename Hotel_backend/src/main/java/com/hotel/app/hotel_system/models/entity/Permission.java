package com.hotel.app.hotel_system.models.entity;

import java.util.UUID;

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.UuidGenerator;
import org.hibernate.type.SqlTypes;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="permission")
public class Permission {
  @Id
  @Basic
  @JdbcTypeCode(SqlTypes.CHAR)    
  @UuidGenerator
  private UUID id;

  @Column
  private String name;

  @Column
  private String module;
}