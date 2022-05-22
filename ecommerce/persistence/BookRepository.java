package com.ecommerce.ecommerce.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.ecommerce.model.BookEntity;

@Repository
public interface BookRepository extends JpaRepository<BookEntity,String>{
	List<BookEntity> findByUserId(String userId);
	BookEntity findByTitle(String title);
}
