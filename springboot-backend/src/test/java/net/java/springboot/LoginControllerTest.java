package net.java.springboot;

import net.java.springboot.controller.LoginController;
import net.java.springboot.repository.ProduktRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@RunWith(SpringRunner.class)
public class LoginControllerTest {

    @Autowired
    ProduktRepository produktRepository;

    @Autowired
    LoginController controller;

    @Test
    public void isUserRegisteredTestShouldReturnTrue() {
        assertThat(controller.isUserRegistered("test1@test.pl")).isTrue();
    }

    @Test
    public void isUserRegisteredTestShouldReturnFalse() {
        assertThat(controller.isUserRegistered("test5@test.pl")).isFalse();
    }
}
