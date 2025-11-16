package com.example.board.repository;

import com.example.board.entity.BoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<BoardEntity, Long> {
    //entity를 저장할 수 있는 JpaRepository를 만들어야함.
}
