package com.example.board.controller;

import com.example.board.dto.BoardRequest;
import com.example.board.dto.BoardResponse;
import com.example.board.dto.BoardUpdateRequest;
import com.example.board.service.CrudService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController //RestApi를 통신할 수 있는 컨트롤러, JSON을 자동으로 반환하는 컨트롤러. JSON → DTO 자동 변환은 @RestController가 있기 때문에 가능함
//프론트에서 보내온 JSON 요청(Request Body)을 받을 수 있다
@RequiredArgsConstructor //자동으로 생성자 만들어줌
public class CrudController {

    private final CrudService crudService; //필드만 선언함.

    @PostMapping("/create") //RestApi 메서드를 사용하여 요청을 받음
    public void create(@RequestBody BoardRequest boardRequest) {//body값의 BoardRequest 데이터를 받겠다는 뜻
        //RequestBody -> 프론트(클라이언트)가 보낸 JSON 데이터를 자바 객체(DTO)로 자동 변환해주는 것
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
    //GetMapping에서 쓴 {id} 값이 PathVariable 쓴 id에 들어감.

    @PatchMapping("/board")
    public void update(@RequestBody BoardUpdateRequest boardUpdateRequest) {
        crudService.update(boardUpdateRequest);
    }

    @DeleteMapping("/board/{id}")
    public void delete(@PathVariable Long id) {
        crudService.delete(id);
    }
}
