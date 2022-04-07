package com.ecommerce.ecommerce.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.ecommerce.dto.BookDTO;
import com.ecommerce.ecommerce.dto.ResponseDTO;
import com.ecommerce.ecommerce.model.BookEntity;
import com.ecommerce.ecommerce.service.BookService;

@RestController
@RequestMapping("book")
public class BookController {
	
	@Autowired
	private BookService service;
	
	@PostMapping
	public ResponseEntity<?> createBook(@RequestBody BookDTO dto){//생성
		try {
//			String temporaryUserId="temporary-user";
			
			BookEntity entity=BookDTO.toEntity(dto);
			entity.setId(null);
			entity.setUserId(dto.getUserId());
			
			List<BookEntity> entities=service.create(entity);
			List<BookDTO> dtos=entities.stream().map(BookDTO::new).collect(Collectors.toList());
			
			ResponseDTO<BookDTO> response=ResponseDTO.<BookDTO>builder().data(dtos).build();
			return ResponseEntity.ok().body(response);
			
		}catch(Exception e) {
			String error=e.getMessage();
			ResponseDTO<BookDTO> response=ResponseDTO.<BookDTO>builder().error(error).build();
			return ResponseEntity.badRequest().body(response);
		}
	}
	
	@GetMapping
	public ResponseEntity<?> retrieveBookList(@RequestBody BookDTO dto){//검색
		
		BookEntity entity=BookDTO.toEntity(dto);
		String title=entity.getTitle();
		
		List<BookEntity> entities=service.retrieve(title);
		List<BookDTO> dtos=entities.stream().map(BookDTO::new).collect(Collectors.toList());
		
		ResponseDTO<BookDTO> response=ResponseDTO.<BookDTO>builder().data(dtos).build();
		return ResponseEntity.ok().body(response);
		
	}
	
	@PutMapping
	public ResponseEntity<?> updateBook(@RequestBody BookDTO dto){ //수정
//		String temporaryUserId="temporary-user";
		
		BookEntity entity=BookDTO.toEntity(dto);
		entity.setUserId(dto.getUserId());
		
		List<BookEntity> entities=service.update(entity);
		List<BookDTO> dtos=entities.stream().map(BookDTO::new).collect(Collectors.toList());
		
		ResponseDTO<BookDTO> response=ResponseDTO.<BookDTO>builder().data(dtos).build();
		return ResponseEntity.ok().body(response);
		
	}
	
	@DeleteMapping
	public ResponseEntity<?> deleteBook(@RequestBody BookDTO dto){
		try {
//			String temporaryUserId="temporary-user";
			BookEntity entity=BookDTO.toEntity(dto);
			entity.setUserId(dto.getUserId());
			
			List<BookEntity> entities=service.delete(entity);
			List<BookDTO> dtos=entities.stream().map(BookDTO::new).collect(Collectors.toList());
			
			ResponseDTO<BookDTO> response=ResponseDTO.<BookDTO>builder().data(dtos).build();
			return ResponseEntity.ok().body(response);
		}catch(Exception e) {
			String error=e.getMessage();
			ResponseDTO<BookDTO> response=ResponseDTO.<BookDTO>builder().error(error).build();
			return ResponseEntity.badRequest().body(response);
			
		}
	}

}
