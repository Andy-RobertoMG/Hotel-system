package com.hotel.app.hotel_system.service;

import java.util.List;
import java.util.UUID;

import com.hotel.app.hotel_system.models.dto.CustomerDTO;
import com.hotel.app.hotel_system.models.entity.Customer;

public interface CustomerServiceI {
  List<Customer> getAllCustomers();
  List<CustomerDTO> gCustomerDTOs();
  Customer createCustomer(Customer customer);   
  Customer searchCustomer(UUID id);
}