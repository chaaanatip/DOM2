package sit.int204.classicmodelsservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import sit.int204.classicmodelsservice.entities.Customeras;

public interface CustomeraRepository extends JpaRepository<Customeras,Long> {
}
