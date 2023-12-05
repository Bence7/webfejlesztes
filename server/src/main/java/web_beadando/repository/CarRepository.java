package web_beadando.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import web_beadando.model.Car;

public interface CarRepository extends JpaRepository<Car, Long> {
}
