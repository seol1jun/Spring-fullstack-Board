package com.example.board.dto;

import lombok.Builder;

@Builder
public record BoardResponse(
    Long id,
    String title,
    String content,
    String name
    ) {

}
