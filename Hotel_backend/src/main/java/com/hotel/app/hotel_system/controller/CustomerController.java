package com.hotel.app.hotel_system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.app.hotel_system.helper.Message;
import com.hotel.app.hotel_system.models.dto.CustomerDTO;
import com.hotel.app.hotel_system.models.entity.Customer;
import com.hotel.app.hotel_system.service.CustomerService;

@RestController
public class CustomerController {
  @Autowired
  @Qualifier("CustomerService") 
  private CustomerService customerService;
  
  @GetMapping("/customers")
  public List<Customer> getCustomers(){
    List<Customer> list_Customer = customerService.getAllCustomers();
    // List<CustomerDTO> list_CustomerDTO = 
    return list_Customer;
    
  }
  @PostMapping("/customers")
  public Message createCustomer(Customer customer){
    customerService.createCustomer(customer);
    return new Message("Se ha creado exitosamente la cuenta.");
  }
}