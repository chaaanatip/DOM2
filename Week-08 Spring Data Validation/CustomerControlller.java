package sit.int204.classicmodelservice.controllers;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sit.int204.classicmodelservice.dtos.NewCustomerDto;
import sit.int204.classicmodelservice.services.CustomerService;

import java.util.List;

@RestController
@RequestMapping("/customers")
public class CustomerControlller {
    @Autowired
    CustomerService service;

    @GetMapping
    public List<NewCustomerDto> getCustomers() {
        return service.getAllCustomers();
    }
    @PostMapping("")
    public NewCustomerDto createCustomer(@Valid @RequestBody NewCustomerDto newCustomer) {
        return service.createCustomer(newCustomer);
    }
}
