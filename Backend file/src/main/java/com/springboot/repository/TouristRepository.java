package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.model.Tourist;

@Repository
public interface TouristRepository extends JpaRepository<Tourist, Long> {

}
