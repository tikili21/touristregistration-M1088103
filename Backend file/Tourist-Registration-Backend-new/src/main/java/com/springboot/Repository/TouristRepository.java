package com.springboot.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.Model.Tourist;


@Repository

public interface TouristRepository extends JpaRepository<Tourist, Long> {

}
