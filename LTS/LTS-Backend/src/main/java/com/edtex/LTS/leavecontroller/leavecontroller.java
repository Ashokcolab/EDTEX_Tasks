package com.edtex.LTS.leavecontroller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.edtex.LTS.LeaveEntity.Leav;
import com.edtex.LTS.UserEntity.User;
//import com.edtex.LTS.UserEntity.User;
import com.edtex.LTS.leaverepo.leaverepo;
import com.edtex.LTS.userrepo.userrepo;

import jakarta.transaction.Transactional;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class leavecontroller {
	Map<String,Object>leavetrack=new HashMap<>();
	@Autowired
	private userrepo urepo;
	@Autowired
	private leaverepo lrepo;
	@PostMapping("/apply-leave")//for applying new leave
	public ResponseEntity<Object> applyleave(@RequestBody Leav leave){
		int remainingcount=0;
		List<User>remlist=urepo.findAllByEmail(leave.getEmail());
		for(User entity:remlist){
			remainingcount=entity.getRemaining_leaves();
		}
		leavetrack.put("remsize", remainingcount);
		if(remainingcount>0){
			lrepo.save(leave);
			 return ResponseEntity.ok(leavetrack);
		}else {
			 return ResponseEntity.badRequest().body(leavetrack);
		}
		
		
		
		//authentication
//		System.out.println("hi");
		
//		return "applied successfully";
	}
	@GetMapping("/get-leaves/{email}") //getting all the leaves based on email
	public Map<String,Object> leavs(@PathVariable String email){
		System.out.println(1);
		leavetrack.put("leavelist", lrepo.findAllByEmail(email));
		leavetrack.put("status", HttpStatus.OK);
		leavetrack.put("message", "received");
		System.out.println(email);
		System.out.println(lrepo.findAllByEmail(email));
		return leavetrack;
	}
	@GetMapping("get-leave/{id}")
	public Map<String,Object> getleave(@PathVariable int id){
		leavetrack.put("getleavedata", lrepo.findById(id));
		leavetrack.put("message", "received");
		leavetrack.put("status", HttpStatus.OK);
		return leavetrack;
		
	}
//	@PostMapping("/edit-leave")
//	public String editleave(@RequestBody Leav leave) {
//		
//	}
	@Transactional
	@DeleteMapping("/delete-leave/{id}") //deleting leaves if the status is pending
	public Map<String,Object> deleteleave(@PathVariable int id){
		Leav leaveuser=lrepo.findById(id);
		if(leaveuser.getStatus().equals("pending")) {
			leavetrack.put("delleave",lrepo.findById(id));
			leavetrack.put("status", HttpStatus.OK);
			leavetrack.put("message", "deleted");
			lrepo.deleteById(id);
			
		}
		return leavetrack;
	}
//	@SuppressWarnings("null")
	@GetMapping("/mnewleaves") //to view all the applied leaves by manager whose status is pending
	public Map<String,Object> getnewleaves(){
		leavetrack.put("message", "newrequests");
		leavetrack.put("status", HttpStatus.OK);
		leavetrack.put("newrequestlist", lrepo.findAllByStatus("pending"));
		return leavetrack;
//		return lrepo.findAllByStatus("pending");
	}
	@GetMapping("/mpastleaves")
	public Map<String,Object>getmpastleaves(){
		List<Leav>ar=lrepo.findAll();
		List<Leav>acceptreject=new ArrayList<>();
		for(Leav entity: ar) {
			if(entity.getStatus().equals("accepted") || entity.getStatus().equals("rejected")) {
				acceptreject.add(entity);
			}
			
		}
		leavetrack.put("message", "pastleaves");
		leavetrack.put("status", HttpStatus.OK);
		leavetrack.put("managerpastlist", acceptreject);
		return leavetrack;
	}
	@PutMapping("/react/{id}/{action}")
	public String reactAR(@PathVariable int id,@PathVariable String action) {
		 if(lrepo.existsById(id)) {
			 Leav reactid=lrepo.findById(id);
			 reactid.setStatus(action);
			 lrepo.save(reactid);
			 
			 return "success";
		 }else {
			 return "no user found";
		 }	
	}
	
	@PostMapping("/numberofleaves/{numberofleaves}")
	public Map<String,Object> numberofleaves(@PathVariable int numberofleaves) {
		List<User>ulist=urepo.findAll();
		boolean value=true;
		for(User entity:ulist){
//			value=true;
			if(entity.getRole().equals("employee")) {
			List<Leav> leaves =  lrepo.findAllByEmail(entity.getEmail());
			int count = 0;
			for(Leav l : leaves) {
				if(l.getStatus().equals("accepted")) {
					count +=1;
				}
			}
			if(count<=numberofleaves) {
			entity.setNumberOfLeaves(numberofleaves);
			entity.setRemaining_leaves(entity.getNumberOfLeaves()-count);
			urepo.save(entity);
			}
			else{
				value=false;
			}
			System.out.println(count);
//			urepo.save(entity);
		}
		
	}
		if(value) {
			leavetrack.put("status", HttpStatus.OK);
			return leavetrack;
		}else{
			leavetrack.put("status",HttpStatus.CONFLICT);
			return leavetrack;
		}
		
	}
	@PostMapping("/save")
	public Map<String,Object> save(@RequestBody Leav leave) {
		lrepo.save(leave);
		leavetrack.put("message", "Saved");
		leavetrack.put("status",HttpStatus.NO_CONTENT);
		return leavetrack;
	}
	@PatchMapping("/accept/{id}")
	public Map<String,Object> accept(@PathVariable int id,@RequestBody String message) {
		Leav usernew=lrepo.findById(id);
		usernew.setStatus("accepted");
		usernew.setManagerReason(message);
		lrepo.save(usernew);
		Optional<User> user = urepo.findById(usernew.getEmail());
		if(user.isPresent()) {
			User user1 = user.get();
			user1.setRemaining_leaves(user1.getRemaining_leaves()-1);
			urepo.save(user1);
		}
		leavetrack.put("user", usernew);
		leavetrack.put("message","Manager Accepted");
		leavetrack.put("status", HttpStatus.OK);
		return leavetrack;
	}
	@PatchMapping("/reject/{id}")
	public Map<String,Object>reject(@PathVariable int id,@RequestBody String message){
		Leav newuser=lrepo.findById(id);
		newuser.setStatus("rejected");
		newuser.setManagerReason(message);
		lrepo.save(newuser);
		leavetrack.put("user", newuser);
		leavetrack.put("status", HttpStatus.OK);
		return leavetrack;
	}
	
}
