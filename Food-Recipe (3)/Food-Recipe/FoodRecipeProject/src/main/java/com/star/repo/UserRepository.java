package com.star.repo;

import org.springframework.data.jpa.repository.JpaRepository;


import com.star.entity.User;


public interface UserRepository extends JpaRepository<User, Integer> {

    User findUserByEmail(String email);

}
