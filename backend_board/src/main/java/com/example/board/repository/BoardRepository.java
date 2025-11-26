package com.example.board.repository;

import com.example.board.entity.BoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<BoardEntity, Long> {} //이 구조는 Spring Data JPA의 표준 방식
//entity를 저장할 수 있는 JpaRepository를 만들어야함.
//우리는 코드를 작성하지 않는데 Spring이 대신 구현을 만들어줌.
//Spring이 실행 시점에 BoardRepository의 구현체(클래스)를 자동으로 만들어서 빈으로 등록.
//JpaRepository를 extends 하는 순간 아래 기능이 자동 생성됨. 그래서 save(), findById() 등을 실행가능.
//BoardEntity -> 이 repository가 다룰 엔티티 타입
//Long -> Mission의 PK 타입(id의 타입)
//Repository는 Mission 엔티티를 보고 SQL을 자동 생성
//store는 통째로 저장되는 게 아니라 store_id(FK)만 DB에 들어감
