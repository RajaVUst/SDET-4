package base;

import config.ApiConfig;
import io.restassured.RestAssured;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;

public class BaseTest {
    @BeforeEach
    public void setUp() {
        RestAssured.reset();
        RestAssured.baseURI = ApiConfig.BASE_URL;
        RestAssured.basePath = "";
    }
}