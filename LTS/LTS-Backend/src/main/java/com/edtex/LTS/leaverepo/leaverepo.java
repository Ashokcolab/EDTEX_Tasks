package com.edtex.LTS.leaverepo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Repository;

//import com.edtex.LTS.LeaveEntity.Leave;
import com.edtex.LTS.LeaveEntity.Leav;
@Repository
public interface leaverepo extends JpaRepository<Leav,String> {

	List<Leav> findAllByEmail(String email);

	Leav findById(int id);

	void deleteById(int id);

	List<Leav> findAllByStatus(String Status);

	boolean existsById(int id);


}
