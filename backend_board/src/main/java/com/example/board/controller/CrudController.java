package com.example.board.controller;

import com.example.board.dto.BoardRequest;
import com.example.board.dto.BoardResponse;
import com.example.board.dto.BoardUpdateRequest;
import com.example.board.service.CrudService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController //RestApi를 통신할 수 있는 컨트롤러
@RequiredArgsConstructor
public class CrudController {

    private final CrudService crudService;

    @PostMapping("/create") //RestApi 메서드를 사용하여 요청을 받음
    public void create(@RequestBody BoardRequest boardRequest) {//body값의 BoardRequest 데이터를 받겠다는 뜻
        crudService.create(boardRequest);  //body값을 통해서 json 파일을 받아와 서버에 저장함.
    }//boardRequest를 받아서 저장하는 작업을 하는 service에 넘겨줌
    //create안에 데이터를 받아야하기에 dto 있어야함.

    @GetMapping("/board") //이 API로 요청했을 때는 전체의 데이터를 다 조회하겠다는 뜻
    public List<BoardResponse> readBoards() {
        return crudService.reads();
    }

    @GetMapping("/board/{id}")
    public BoardResponse read(@PathVariable Long id) {
        return crudService.read(id);
    }

    @PatchMapping
    public void update(@RequestBody BoardUpdateRequest boardUpdateRequest) {
        crudService.update(boardUpdateRequest);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        crudService.delete(id);
    }
}
