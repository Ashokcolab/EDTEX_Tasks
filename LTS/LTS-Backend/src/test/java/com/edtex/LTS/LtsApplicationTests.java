package com.edtex.LTS;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.edtex.LTS.LeaveEntity.Leav;
//import com.edtex.LTS.LeaveEntity.Leav;
import com.edtex.LTS.UserEntity.User;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@Import(YourConfigClass.class)
public class LtsApplicationTests {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    @Disabled
    public void shouldRegisterUserOnValidDetails() {
        User user = new User();
        user.setRole("employee");
        user.setName("ashok");
        user.setMobile("1234567899");
        user.setEmail("ashok1@edtex.in");
        user.setPassword("ashok12");
        user.setNumberOfLeaves(5);
        user.setRemaining_leaves(2);

        ResponseEntity<Object> response = restTemplate.postForEntity("/register", user, Object.class);

        // You can perform assertions on the response if needed
        // For example, to check if the response status code is OK (200):
        // assertEquals(HttpStatus.OK, response.getStatusCode());
        
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }
    @Test
    @Disabled
    public void ShouldNotRegisterOnInvaildDetails() {
    	  User user = new User();
          user.setRole("employee");
          user.setName("ashok");
          user.setMobile("1234567899");
          user.setEmail("ashok1@edtex.in");
          user.setPassword("ashok12");
          user.setNumberOfLeaves(5);
          user.setRemaining_leaves(2);

          ResponseEntity<Object> response = restTemplate.postForEntity("/register", user, Object.class);

          // You can perform assertions on the response if needed
          // For example, to check if the response status code is OK (200):
          // assertEquals(HttpStatus.OK, response.getStatusCode());
          
          assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
    	
    }
    @Test
    @Disabled
    @DisplayName("user_exists_with_right_pwd and mail")
    public void ShouldLoginOnValidDetails() {
    	User user= new User();
    	user.setEmail("ashok@edtex.in");
    	user.setPassword("ashok12");
    	ResponseEntity<Object>response=restTemplate.postForEntity("/login", user, Object.class);
    	assertEquals(HttpStatus.OK,response.getStatusCode());
    }
    @Test
    @Disabled
    @DisplayName("no user exists")
    public void ShouldNotLoginOnInValidDetails() {
    	User user= new User();
    	user.setEmail("ashok@edtex.i");
    	user.setPassword("ashok12");
    	ResponseEntity<Object>response=restTemplate.postForEntity("/login", user, Object.class);
    	assertEquals(HttpStatus.BAD_REQUEST,response.getStatusCode());
    }
    @Test
    @DisplayName("cantloginwrongpwd")
    @Disabled
    public void ShouldNotLoginOnwrongpwd() {
    	User user= new User();
    	user.setEmail("ashok@edtex.in");
    	user.setPassword("ashokkkk");
    	ResponseEntity<Object>response=restTemplate.postForEntity("/login", user, Object.class);
    	assertEquals(HttpStatus.BAD_REQUEST,response.getStatusCode());
    }
    @Test
    @DisplayName("canapplywhen_not_out of leaves")
    public void shouldapply_on_reamining_leaves() {
    	Leav leave=new Leav();
    	leave.setEmail("ashok@edtex.in");
    	leave.setEndDate("tomorror");
    	leave.setManagerReason("");
    	leave.setName("ashok");
    	leave.setReason("sick");
    	leave.setStartDate("today");
    	leave.setStatus("pending");
    	leave.setType("sick");
    	ResponseEntity<Object>response=restTemplate.postForEntity("/apply-leave", leave,Object.class);
    	assertEquals(HttpStatus.OK,response.getStatusCode());
    	
    }
    
    
}
