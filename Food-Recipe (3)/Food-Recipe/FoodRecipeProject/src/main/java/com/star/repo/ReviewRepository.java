package com.star.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.star.entity.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, String>{
	

}
