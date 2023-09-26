package com.edtex.LTS.UserEntity;

//import jakarta.persistence.Column;

//import jakarta.persistence.Column;

//import java.util.ArrayList;


//import com.edtex.LTS.LeaveEntity.Leave;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="new_user")
public class User {
	private String role;
	private String name;
	private String mobile;
	@Id
	private String email;
	private String password;
	private int number_of_leaves;
	private int remaining_leaves;
//	private ArrayList<Leave> leaves;
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getNumberOfLeaves() {
		return number_of_leaves;
	}
	public void setNumberOfLeaves(int numberOfLeaves) {
		this.number_of_leaves = numberOfLeaves;
	}
	public int getRemaining_leaves() {
		return remaining_leaves;
	}
	public void setRemaining_leaves(int remaining_leaves) {
		this.remaining_leaves = remaining_leaves;
	}
	
	
}
