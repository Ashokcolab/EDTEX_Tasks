package com.edtex.LTS.usercontroller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.edtex.LTS.UserEntity.User;
import com.edtex.LTS.userrepo.userrepo;

@RestController
@CrossOrigin
public class Usercontroller {
	Map<String,Object>registro=new HashMap<>();
	@Autowired
	private userrepo urepo;
	@PostMapping("/register")
	public ResponseEntity<Object> register(@RequestBody User user) {
		if(!urepo.existsById(user.getEmail())) {
			user.setNumberOfLeaves(0);
			urepo.save(user);
			registro.put("user", user);
			registro.put("status", HttpStatus.CREATED);
			return ResponseEntity.ok(registro);
		}
		registro.put("user", user);
		registro.put("status",HttpStatus.BAD_REQUEST);
		registro.put("message", "user already exists");
		return ResponseEntity.badRequest().body(registro);
	}
	@PostMapping("/login")
	public ResponseEntity<Object> login(@RequestBody User user) {
		if(urepo.existsById(user.getEmail())) {
			Optional<User> newuser=urepo.findById(user.getEmail());
			if(newuser.isPresent()) {
				User newuser1=newuser.get();
				if(newuser1.getPassword().equals(user.getPassword())) {
					registro.put("status", HttpStatus.CREATED);
					registro.put("user", newuser1);
//					registro.put("message", "created");
					return ResponseEntity.ok(registro);
				}else {
					registro.put("status", HttpStatus.NOT_ACCEPTABLE);
					registro.put("message", "incorrect password");
					return ResponseEntity.badRequest().body(registro);
				}
			}else {
				registro.put("status", HttpStatus.NOT_ACCEPTABLE);
		        registro.put("message", "user not exist");
				return ResponseEntity.badRequest().body(registro);
			}
			
		}else {
			registro.put("status", HttpStatus.NOT_ACCEPTABLE);
	         registro.put("message", "user not exist");
			return ResponseEntity.badRequest().body(registro);
		}
		
	}

}
 
