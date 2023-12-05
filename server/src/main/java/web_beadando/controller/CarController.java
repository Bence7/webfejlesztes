package web_beadando.controller;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import web_beadando.model.Car;
import web_beadando.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class CarController {

	@Autowired
	CarRepository carRepository;

	@GetMapping("/car")
	public ResponseEntity<List<Car>> getAllCars() {
		try {
			List<Car> cars=carRepository.findAll();
			return new ResponseEntity<>(cars, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/car/{id}")
	public ResponseEntity<Car> getTutorialById(@PathVariable("id") long id) {
		Optional<Car> car = carRepository.findById(id);
        return car.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

	@GetMapping("/car/available")
	public ResponseEntity<List<Car>> getAvailableCars() {
		try {
			List<Car> cars = carRepository.findAll();
			List<Car> mycars = new ArrayList<>();
			for (Car car : cars){
				if (car.getOwner()== null){
					mycars.add(car);
				}
			}
			return new ResponseEntity<>(mycars, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/car/selected/{id}")
	public ResponseEntity<List<Car>> getSelectedCars(@PathVariable int id) {
		try {
			List<Car> cars = carRepository.findAll();
			List<Car> mycars = new ArrayList<>();
			for (Car car : cars){
				if (car.getOwner() != null){
					if (car.getOwner().getId().equals(id)){
						mycars.add(car);
					}
				}
			}
			return new ResponseEntity<>(mycars, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}


	@PostMapping("/car")
	public ResponseEntity<Car> createTutorial(@RequestBody Car car) {
		try {
			carRepository.save(car);
			return new ResponseEntity<>(car, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/car/{id}")
	public ResponseEntity<Car> updateTutorial(@PathVariable("id") long id, @RequestBody Car car) {
		Optional<Car> optionalCar = carRepository.findById(id);

		if (optionalCar.isPresent()) {
			Car existingCar = optionalCar.get();
			existingCar.setOwner(car.getOwner());
			existingCar.setBrand(car.getBrand());
			existingCar.setModel(car.getModel());
			carRepository.save(existingCar);

			return ResponseEntity.ok(existingCar);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PutMapping("/car/unselect/{id}")
	public ResponseEntity<Car> unSelectCar(@PathVariable("id") long id) {
		Optional<Car> optionalCar = carRepository.findById(id);

		if (optionalCar.isPresent()) {
			Car existingCar = optionalCar.get();
			existingCar.setOwner(null);
			carRepository.save(existingCar);

			return ResponseEntity.ok(existingCar);
		} else {
			return ResponseEntity.notFound().build();
		}
	}



	@DeleteMapping("/car/{id}")
	public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
		try {
			carRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/car")
	public ResponseEntity<HttpStatus> deleteAllTutorials() {
		try {
			carRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
