package com.example.board.controller;

import com.example.board.dto.BoardRequest;
import com.example.board.service.CrudService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController //RestApi를 통신할 수 있는 컨트롤러
@RequiredArgsConstructor
public class CrudController {

    private final CrudService crudService;

    @PostMapping //RestApi 메서드를 사용하여 요청을 받음
    public void create( //create안에 데이터를 받아야하기에 dto 있어야함.
            @RequestBody BoardRequest boardRequest //body값의 BoardRequest 데이터를 받겠다는 뜻
    ) {                                           //body값을 통해서 json 파일을 받아와 서버에 저장함.

        crudService.create(boardRequest);
    }//boardRequest를 받아서 저장하는 작업을 하는 service에 넘겨줌
}
