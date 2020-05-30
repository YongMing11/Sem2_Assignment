package com.meowmeow.dhateapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Random;

@SpringBootApplication
public class DhateappApplication {
	/*
	@Bean
	public Random getRandom(){
		return new Random();
	}*/

	public static void main(String[] args) {
		SpringApplication.run(DhateappApplication.class, args);
	}

}
