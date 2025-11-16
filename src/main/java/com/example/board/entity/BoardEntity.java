package com.example.board.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BoardEntity { //boardRequest로 받은 데이터를 담을 entity를 만들어야함
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column //이렇게 어노테이션을 달아 놔야 JPA를 통해 생성이 됨
    private String title;

    @Column
    private String content;

    @Column
    private String name;
}
