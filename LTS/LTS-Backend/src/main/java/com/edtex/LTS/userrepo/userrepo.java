package com.edtex.LTS.userrepo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//import com.edtex.LTS.LeaveEntity.Leav;
import com.edtex.LTS.UserEntity.User;

@Repository
public interface userrepo extends JpaRepository<User,String> {

	List<User> findAllByEmail(String email);
	

}
