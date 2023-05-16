package com.star;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.star.entity.Admin;
import com.star.entity.User;
import com.star.repo.AdminRepository;
import com.star.repo.UserRepository;
import com.star.service.AdminService;
import com.star.service.UserService;

@SpringBootTest (classes = FoodRecipeProjectApplication.class)
class RestfulWebservicesApplicationTests
{
	@Autowired
	private AdminRepository adminRepo;
	
	@Autowired
	private UserRepository userRepo;

	@Test
// @Disabled
	
	
	public void testAdmin()
{
		Admin A=new Admin();
	    A.setId(5);
		A.setUsername("likitha@gmail.com");
	    A.setPassword("likki1234");
	    adminRepo.save(A);
	}
@Test
public void testUser()
{
	User u=new User();
	u.setId(8);
	u.setName("vijay");
	u.setEmail("vijay@gmail.com");
	u.setPassword("vijay123");
	u.setPhone(123456880);
	userRepo.save(u);
	
	}

}
