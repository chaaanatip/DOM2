package sit.int204.classicmodelsservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.HttpClientErrorException;
import sit.int204.classicmodelsservice.entities.Customer;
import sit.int204.classicmodelsservice.entities.Office;
import sit.int204.classicmodelsservice.repositories.CustomerRepository;

import java.util.List;
@Service

public class CustomerService {
    @Autowired
    private CustomerRepository repository;
    public List<Customer> getAllCustomer() {
        return repository.findAll();
    }
    public Customer getCustomer(String customerNumber) {
        return repository.findById(Integer.valueOf(customerNumber)).orElseThrow(
                () -> new HttpClientErrorException(HttpStatus.NOT_FOUND, "Office Id " + customerNumber + " DOES NOT EXIST !!!") {
                }
        );
    }
    @Transactional
    public Customer createCustomer(Customer customer) {
        return repository.save(customer);
    }
    @Transactional
    public void removeCustomer(String customerNumber) {
        Customer customer = repository.findById(Integer.valueOf(customerNumber)).orElseThrow(
                () -> new HttpClientErrorException(HttpStatus.NOT_FOUND, "Customer Number " + customerNumber + " DOES NOT EXIST !!!")
        );
        repository.delete(customer);
    }
    @Transactional
    public Customer updateCustomer(String customerNumber, Customer customer) {
        if(this.getAllCustomer()!=null && !customer.getCustomerNumber().trim().isEmpty()) {
            if (!customer.getCustomerNumber().equals(customerNumber)) {
                throw new HttpClientErrorException(HttpStatus.BAD_REQUEST,
                        "Conflict Office code !!! (" + customerNumber +
                                " vs " + customer.getCustomerNumber() + ")");
            }
        }
        Customer existingCustomer = repository.findById(Integer.valueOf(customerNumber)).orElseThrow(
                () -> new HttpClientErrorException(HttpStatus.NOT_FOUND,
                        "Office Id " + customerNumber + " DOES NOT EXIST !!!"));
        return repository.save(customer);
    }
}
