package com.example.board.controller;

import com.example.board.dto.LoginRequest;
import com.example.board.dto.SignupRequest;
import com.example.board.dto.TokenResponse;
import com.example.board.entity.UserEntity;
import com.example.board.repository.UserRepository;
import com.example.board.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder encoder;
    private final JwtTokenProvider jwtTokenProvider;

    // 🔥 회원가입
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest req) {

        if (userRepository.existsByUsername(req.getUsername())) {
            return ResponseEntity.badRequest().body("이미 존재하는 아이디");
        }

        UserEntity user = new UserEntity();
        user.setUsername(req.getUsername());
        user.setPassword(encoder.encode(req.getPassword()));

        userRepository.save(user);

        return ResponseEntity.ok("회원가입 성공");
    }

    // 🔥 로그인
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {

        UserEntity user = userRepository.findByUsername(req.getUsername())
                .orElse(null);

        if (user == null) {
            return ResponseEntity.badRequest().body("아이디 없음");
        }

        if (!encoder.matches(req.getPassword(), user.getPassword())) {
            return ResponseEntity.badRequest().body("비밀번호 불일치");
        }

        String token = jwtTokenProvider.createToken(user.getUsername());

        return ResponseEntity.ok(new TokenResponse(token));
    }
}
