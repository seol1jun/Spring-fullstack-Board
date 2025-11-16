package com.example.board.service;

import com.example.board.dto.BoardRequest;
import com.example.board.entity.BoardEntity;

public interface CrudService { //미리 기능을 지정
    void create(BoardRequest boardRequest);
    void read();
    void update();
    void delete();

    //BoardEntity를 반환해야함. Impl에 save함수가 entity값을 받기에.
    default BoardEntity requestToEntity(BoardRequest boardRequest) {
        return BoardEntity.builder()
                .title(boardRequest.title())
                .content(boardRequest.content())
                .name(boardRequest.name())
                .build();
    }
}
