package net.java.springboot.controller;

import net.java.springboot.model.Uzytkownicy;
import net.java.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@CrossOrigin("*")
@RestController
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user")
    public Map<String, String> user(@AuthenticationPrincipal OAuth2User principal) {
        //System.out.println("PRINCIPAL: " + principal);
        Map<String, String> data = new HashMap<>();
        data.put("displayName", principal.getAttribute("given_name"));
        data.put("imageUri", principal.getAttribute("picture"));
        Uzytkownicy newUser = new Uzytkownicy();
        newUser.setE_mail(principal.getAttribute("email"));
        newUser.setHaslo(principal.getAttribute("at_hash"));
        if (!isUserRegistered(newUser.getE_mail())) {
            userRepository.save(newUser);
        }
        return data;
    }

    public boolean isUserRegistered(String email) {
        for(int i = 0; i < userRepository.findAll().size(); i++) {
            if(userRepository.findAll().get(i).getE_mail().equals(email)) {
                return true;
            }
        }
        return false;
    }
}
