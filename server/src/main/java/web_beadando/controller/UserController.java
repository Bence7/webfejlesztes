package web_beadando.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web_beadando.model.Car;
import web_beadando.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import web_beadando.repository.CarRepository;
import web_beadando.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    CarRepository carRepository;

    @GetMapping("/user")
    public List<User> findAll(){
        return userRepository.findAll();
    }

    @PostMapping("/user")
    public ResponseEntity<User> createTutorial(@RequestBody User user) {
        try {
            userRepository.save(user);
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/user")
    public ResponseEntity<HttpStatus> deleteAllTutorials() {
        try {
            userRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
        try {
            userRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/user/{id}")
    public ResponseEntity<User> updateTutorial(@PathVariable("id") long id, @RequestBody User user) {
        Optional<User> optionalUser = userRepository.findById(id);

        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
            existingUser.setFirstname(user.getFirstname());
            existingUser.setLastname(user.getLastname());
            existingUser.setEmail(user.getEmail());
            userRepository.save(existingUser);

            return ResponseEntity.ok(existingUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/user/{userId}/{carId}")
    public ResponseEntity<User> addUserToCar(@PathVariable("userId") long userId, @PathVariable("carId") long carId) {
        // Retrieve user and car from the database

        Optional<User> optionalUser = userRepository.findById(userId);
        Optional<Car> optionalCar = carRepository.findById(carId);

        if (optionalUser.isPresent() && optionalCar.isPresent()) {
            Car car = optionalCar.get();
            User user = optionalUser.get();
            car.setOwner(user);
            carRepository.save(car);
            userRepository.save(user);
            return ResponseEntity.ok(user);
        }
        else {return ResponseEntity.notFound().build();}
    }


}
