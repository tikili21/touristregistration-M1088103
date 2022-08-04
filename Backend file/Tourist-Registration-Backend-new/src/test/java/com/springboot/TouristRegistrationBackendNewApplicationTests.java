package com.springboot;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.springboot.Model.Tourist;
import com.springboot.Repository.TouristRepository;

@SpringBootTest
class TouristRegistrationBackendNewApplicationTests {
	@Autowired
	TouristRepository touristRepo;

	@Test
	void contextLoads() {
	}
	@Test
	public void testReadall() {
		List<Tourist> u= touristRepo.findAll();
		assertThat(u).size().isGreaterThan(0);
	}
	@Test
	public void testfind() {
		Tourist tourist=touristRepo.findById(2L).orElse(null);
		assertThat(tourist);
	}

}
