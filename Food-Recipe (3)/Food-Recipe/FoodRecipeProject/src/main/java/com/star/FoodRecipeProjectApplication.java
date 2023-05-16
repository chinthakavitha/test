package com.star;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.star")
public class FoodRecipeProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodRecipeProjectApplication.class, args);
	}

}
