package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
	
	@GetMapping("/sum/{val1}/{val2}")
	public Integer sum(@PathVariable("val1") String val1,
					   @PathVariable("val2") String val2) {
		return 0;
	}
}
