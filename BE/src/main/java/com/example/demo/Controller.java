package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.lang.NumberFormatException;

@RestController
public class Controller {
	
	@GetMapping("/sum/{val1}/{val2}")
	public Integer sum(@PathVariable("val1") final String val1,
					   @PathVariable("val2") final String val2) {
		int first = 0;
		int second = 0;
		
		try {
			first = Integer.parseInt(val1);
			second = Integer.parseInt(val2);
		} catch (NumberFormatException e) {
			return -1;
		}
		
		return first + second;
	}
}
