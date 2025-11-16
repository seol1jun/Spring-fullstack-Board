package com.example.board.service;

import com.example.board.dto.BoardRequest;
import com.example.board.entity.BoardEntity;
import com.example.board.repository.BoardRepository;
import org.springframework.stereotype.Service;
import lombok.*;

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
    public void read() {

    }

    @Override
    public void update() {

    }

    @Override
    public void delete() {

    }
}
// CrudService라는 인터페이스의 기능을 구현해놓고 자식 클래스인 CrudServiceImpl에 실제 기능을 정의해놓은 걸 구현을 통해
// 안전하고 미리 지정된 거를 구현하기 위해 CrudServiceImpl를 만듦
