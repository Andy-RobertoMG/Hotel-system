package com.hotel.app.hotel_system.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.hotel.app.hotel_system.models.dto.CustomerDTO;
import com.hotel.app.hotel_system.models.entity.Customer;
import com.hotel.app.hotel_system.models.repository.CustomerRepository;

@Service("CustomerService")
public class CustomerService implements CustomerServiceI{
  @Autowired
  @Qualifier("customerRepository")
  private CustomerRepository crud_Customer;
  
  @Override
  public List<Customer> getAllCustomers() {
    return crud_Customer.findAll();
  }
  
  @Override
  public Customer createCustomer(Customer customer) {
    // TODO Auto-generated method stub
    return crud_Customer.save(customer);
  }

  @Override
  public Customer searchCustomer(UUID id) {
    Optional<Customer> object = crud_Customer.findById(id);
    if(object.isPresent()){
      return object.get();
    }
    throw new UnsupportedOperationException("No se ha implementado");
  }

  @Override
  public List<CustomerDTO> gCustomerDTOs() {
    // TODO Auto-generated method stub
    List<CustomerDTO> list_CustomerDTOs=null;
    List<Customer> list_Customers = crud_Customer.findAll();
    for(Customer customer: list_Customers){
      
    }
    throw new UnsupportedOperationException("No se ha implementado");
  }
    
}