package com.springboot.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.Exception.ResourceNotFoundException;
import com.springboot.Model.Tourist;
import com.springboot.Repository.TouristRepository;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins="http://localhost:4200/tourists")
public class TouristController {
	
	@Autowired
	private TouristRepository touristRepository;
	
	//get all tourists
    
	@GetMapping("/tourists")
	public List<Tourist> getAllTourists(){
		return touristRepository.findAll();
	}

	//create tourist rest api
	@PostMapping("/tourists")
	public Tourist createTourist(@RequestBody Tourist tourist) {
		return touristRepository.save(tourist);
	}
	
	//get tourist by id rest api
	@GetMapping("/tourists/{id}")
	public ResponseEntity<Tourist> getTouristById(@PathVariable Long id){
		Tourist tourist = touristRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Tourist not exist with id:" + id));
		return ResponseEntity.ok(tourist);
	}
	
	//update tourist rest api
	@PutMapping("/tourists/{id}")
	public ResponseEntity<Tourist> updateTourist(@PathVariable Long id, @RequestBody Tourist touristDetails){
		Tourist tourist = touristRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Tourist not exist with id:" + id));
		tourist.setFirstName(touristDetails.getFirstName());
		tourist.setLastName(touristDetails.getLastName());
		tourist.setGender(touristDetails.getGender());
		tourist.setAge(touristDetails.getAge());
		tourist.setFromPlace(touristDetails.getFromPlace());
		tourist.setNumberOfDays(touristDetails.getNumberOfDays());
		
		Tourist updatedTourist = touristRepository.save(tourist);
		return ResponseEntity.ok(updatedTourist);
	}
	
	

}
