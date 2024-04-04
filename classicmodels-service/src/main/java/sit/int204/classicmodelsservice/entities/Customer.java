package sit.int204.classicmodelsservice.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @Column(name = "customerNumber", nullable = false, length = 50)
    private String customerNumber;
    @Column(name = "customerName", nullable = false, length = 50)
    private String customerName;
    @Column(name = "phone", nullable = false, length = 50)
    private String phone;
    @Column(name = "city", nullable = false, length = 50)
    private String city;
    @Column(name = "contactLastName", nullable = false, length = 50)
    private String contactLastName;
    @Column(name = "contactFirstName", nullable = false, length = 50)
    private String contactFirstName;
    @Column(name = "addressLine1", nullable = false, length = 50)
    private String addressLine1;
    @Column(name = "country", nullable = false, length = 50)
    private String country;

}
