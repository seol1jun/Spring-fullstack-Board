package com.example.board.service;

import com.example.board.dto.BoardRequest;
import com.example.board.dto.BoardResponse;
import com.example.board.entity.BoardEntity;
import com.example.board.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

public interface CrudService { //미리 기능을 지정
    void create(BoardRequest boardRequest);
    BoardResponse read(Long id);
    List<BoardResponse> reads();
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
    default BoardResponse entityToResponse(BoardEntity boardEntity) {
        return BoardResponse.builder()
                .id(boardEntity.getId())
                .title(boardEntity.getTitle())
                .content(boardEntity.getContent())
                .name(boardEntity.getName())
                .build();
    }
}
