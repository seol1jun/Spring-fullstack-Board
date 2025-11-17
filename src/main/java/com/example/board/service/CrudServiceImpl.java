package com.example.board.service;

import com.example.board.dto.BoardRequest;
import com.example.board.dto.BoardResponse;
import com.example.board.dto.BoardUpdateRequest;
import com.example.board.entity.BoardEntity;
import com.example.board.repository.BoardRepository;
import org.springframework.stereotype.Service;
import lombok.*;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CrudServiceImpl implements CrudService {

    //repository에 저장해야함 -> DI(의존성 주입)를 받아야함.
    private final BoardRepository boardRepository; //@RequiredArgsConstructor를 통해서 자동으로  DI해줌
    // 그래서 boardRepository로 자동으로 DI됨.

    @Override
    public void create(BoardRequest boardRequest) {
        BoardEntity boardEntity = requestToEntity(boardRequest);
        boardRepository.save(boardEntity); //save함수는 entity값을 받음
    }

    @Override
    public BoardResponse read(Long id) {
        BoardEntity boardEntity = boardRepository.findById(id).get();
        return entityToResponse(boardEntity);
    }

    @Override
    public List<BoardResponse> reads() {
        List<BoardEntity> boardEntityList = (List<BoardEntity>) boardRepository.findAll();
        return boardEntityList.stream() //steam을 돌려서 값을 하나씩 다 바꿔야함
                .map(this::entityToResponse)
                .toList();
    }

    @Override
    public void update(BoardUpdateRequest boardUpdateRequest) {
        BoardEntity boardEntity = boardRepository.findById(boardUpdateRequest.id()).get();//optional이기에 get해줌.
        boardEntity.update(boardUpdateRequest);
        boardRepository.save(boardEntity); //JPA의 영속성 컨텍스트에 의해 자동으로 save되긴 하지만 가독성을 위해 씀.
    }

    @Override
    public void delete() {

    }
}
// CrudService라는 인터페이스의 기능을 구현해놓고 자식 클래스인 CrudServiceImpl에 실제 기능을 정의해놓은 걸 구현을 통해
// 안전하고 미리 지정된 거를 구현하기 위해 CrudServiceImpl를 만듦
