package sit.int204.classicmodelservice.services;

import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.server.ResponseStatusException;
import sit.int204.classicmodelservice.dtos.NewCustomerDto;
import sit.int204.classicmodelservice.entities.Customer;
import sit.int204.classicmodelservice.repositories.CustomerRepository;

import java.util.List;

@Service
public class CustomerService {
    @Autowired
    CustomerRepository repository;
    @Autowired
    ModelMapper mapper;
    @Autowired
    ListMapper listMapper;
    @Autowired
    EmployeeService employeeService;
    public NewCustomerDto createCustomer(NewCustomerDto newCustomer) {
        if(repository.existsById(newCustomer.getId())){
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Duplicate customer for id "+
                    newCustomer.getId());
        }
        Customer customer = mapper.map(newCustomer, Customer.class);
        //customer.setSales(employeeService.getEmployee(newCustomer.getSalesEmployee()));
        System.out.println(customer.getSales());
        return mapper.map(repository.saveAndFlush(customer), NewCustomerDto.class);
    }

    public List<NewCustomerDto> getAllCustomers() {
        return listMapper.mapList(repository.findAll(), NewCustomerDto.class, mapper);
    }
}