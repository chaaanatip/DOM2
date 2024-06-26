package sit.int204.classicmodelsservice.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import sit.int204.classicmodelsservice.dtos.PageDTO;
import sit.int204.classicmodelsservice.dtos.SimpleCustomerDTO;
import sit.int204.classicmodelsservice.entities.Customer;
import sit.int204.classicmodelsservice.entities.Order;
import sit.int204.classicmodelsservice.services.CustomerService;
import sit.int204.classicmodelsservice.services.ListMapper;

import java.util.List;

import static sit.int204.classicmodelsservice.services.ListMapper.listMapper;

@RestController
@RequestMapping("/customers")
public class CustomerController {
    @Autowired
    private CustomerService service;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private ListMapper listMapper;




    @GetMapping("/{id}/orders")
    public List<Order> getCustomerOrder(@PathVariable Integer id){
        return service.findByID(id).getOrderList();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getCustomerById(@PathVariable Integer id){
        Customer customer = service.findByID(id);
        SimpleCustomerDTO simpleCustomer = modelMapper.map(customer,SimpleCustomerDTO.class);
        return ResponseEntity.ok(simpleCustomer);
    }
    @GetMapping("")
    public ResponseEntity<Object> getAllCustomers(
            @RequestParam(defaultValue = "false") Boolean pageable,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "false") int pageSize
    ){
        if (pageable){
            Page<Customer> customerPage =service.getCustomers(page,pageSize);
            return ResponseEntity.ok(listMapper.toPageDTO(customerPage,SimpleCustomerDTO.class,modelMapper));
        }else {
            return ResponseEntity.ok(listMapper.mapList(service.getCustomers(),SimpleCustomerDTO.class,modelMapper));
        }
    }

}
