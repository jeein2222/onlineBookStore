package com.ecommerce.ecommerce.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.ecommerce.model.BookEntity;
import com.ecommerce.ecommerce.persistence.BookRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class BookService {

	@Autowired
	private BookRepository repository;
	
	public List<BookEntity> create(final BookEntity entity){
		validate(entity);
		
		repository.save(entity);
		
		log.info("Entity Id : {} is saved.", entity.getId());
		
		return repository.findByUserId(entity.getUserId());//모든 제품 리스트 
	}
	
	public List<BookEntity> retrieve(final String title){//title 값으로 제품 검색
		return repository.findByTitle(title);//검색된 제품 리스트
		
	}
	
	public List<BookEntity> update(final BookEntity entity){
		validate(entity);
		final Optional<BookEntity> original=repository.findById(entity.getId());
		original.ifPresent(book -> {
			book.setTitle(entity.getTitle());
			book.setAuthor(entity.getAuthor());
			book.setPublisher(entity.getPublisher());
			
			repository.save(book);
		});
		return retrieve(entity.getTitle());//수정된 제품 정보
	}
	
	public List<BookEntity> delete(final BookEntity entity){
		validate(entity);
		
		try {
			repository.delete(entity);
		}catch(Exception e) {
			log.error("error deleting entity ", entity.getId(),e);
			throw new RuntimeException("error deleting entity "+entity.getId());
		}
		
		return repository.findByUserId(entity.getUserId());
	}
	
	private void validate(final BookEntity entity) {
		if(entity == null) {
			log.warn("Entity cannot be null.");
			throw new RuntimeException("Entity cannot be null.");
		}
		if(entity.getUserId() == null) {
			log.warn("Unknown user.");
			throw new RuntimeException("Unknown user.");
		}
	}
}
