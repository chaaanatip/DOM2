package sit.int204.classicmodelsservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sit.int204.classicmodelsservice.entities.Customer;
import sit.int204.classicmodelsservice.services.CustomerService;


import java.util.List;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {
    @Autowired
    private CustomerService service;
    @GetMapping("")
    public List<Customer> getAllCustomer() {
        return service.getAllCustomer();
    }
    @GetMapping("/{customerNumber}")
    public Customer getCustomerById(@PathVariable String customerNumber) {
        return service.getCustomer(customerNumber);
    }
    @PostMapping("")
    public Customer addNewCustomer(@RequestBody Customer customer) {
        return service.createCustomer(customer);
    }
    @PutMapping("/{customerNumber}")
    public Customer updateCustomer(@RequestBody Customer customer, @PathVariable String customerNumber) {
        return service.updateCustomer(customerNumber, customer);
    }
    @DeleteMapping("/{officeCode}")
    public void removeCustomer(@PathVariable String customerNumber) {
        service.removeCustomer(customerNumber);
    }
}
