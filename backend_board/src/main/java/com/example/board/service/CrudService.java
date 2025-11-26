package com.example.board.service;

import com.example.board.dto.BoardRequest;
import com.example.board.dto.BoardResponse;
import com.example.board.dto.BoardUpdateRequest;
import com.example.board.entity.BoardEntity;
import com.example.board.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

public interface CrudService { //미리 기능을 지정
    void create(BoardRequest boardRequest);
    BoardResponse read(Long id);
    List<BoardResponse> reads();
    void update(BoardUpdateRequest boardUpdateRequest);
    void delete(Long id);

    //BoardEntity를 반환해야함. Impl에 save함수가 entity값을 받기에.
    default BoardEntity requestToEntity(BoardRequest boardRequest) {
        return BoardEntity.builder()
                .title(boardRequest.title())
                .content(boardRequest.content())
                .name(boardRequest.name())
                .build();
    }
    default BoardResponse entityToResponse(BoardEntity boardEntity) {
        return BoardResponse.builder() //DTO에서 받은 값을 Entity로 변환하는 순간
                .id(boardEntity.getId())
                .title(boardEntity.getTitle())
                .content(boardEntity.getContent())
                .name(boardEntity.getName())
                .build();
    }
}
//DTO = 외부에서 온 값 -> DB에 저장할 수 없다 / 프론트 ↔ 백엔드 통신용 / Just 데이터 담은 상자 느낌
//Entity = JPA가 관리하는 객체 -> DB에 저장할 수 있다 / 백엔드 ↔ DB 통신용 / Repository가 다루는 유일한 객체
//Service에서는 DTO → Entity 변환
//Repository에서는 Entity를 실제 DB에 저장/조회/변경
//프론트에 돌려줄 값도 Entity를 그대로 주면 안 되고 DTO로 바꿔서 준다
//컨트롤러에서 dto가 아닌 entity로 받으면 db에 바로 접근할 수 있어 위험하니 보낼때나 받을 때는 dto를 통해 사용.
//바로 엔티티에 받는 게 아니라 dto로 받은 다음 entity로 변환을 하는거임.
