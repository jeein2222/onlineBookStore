package com.ecommerce.ecommerce.dto;

import com.ecommerce.ecommerce.model.BookEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class BookDTO {
	private String id; //�⺻Ű
	private String title;
	private String author;
	private String publisher;
	private String userId;
	
	public BookDTO(final BookEntity entity) {
		this.id=entity.getId();
		this.title=entity.getTitle();
		this.author=entity.getAuthor();
		this.publisher=entity.getPublisher();
		this.userId=entity.getUserId();
		
	}
	
	public static BookEntity toEntity(final BookDTO dto) {
		return BookEntity.builder()
				.id(dto.getId())
				.title(dto.getTitle())
				.author(dto.getAuthor())
				.publisher(dto.getPublisher())
				.userId(dto.getUserId())
				.build();
	}
}
