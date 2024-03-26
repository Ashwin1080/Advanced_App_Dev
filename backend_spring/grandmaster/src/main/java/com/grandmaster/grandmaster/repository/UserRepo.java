package com.grandmaster.grandmaster.repository;

import java.util.Optional;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grandmaster.grandmaster.model.User;


@Repository
public interface UserRepo extends JpaRepository<User,Long> {

	Optional<User> findByEmail(String email);
	User findByUid(Long id);

    void deleteByUid(Long Uid);
}
