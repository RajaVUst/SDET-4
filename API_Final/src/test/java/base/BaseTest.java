package base;

import config.Config;
import io.restassured.RestAssured;
import org.junit.jupiter.api.BeforeEach;

public class BaseTest {
    @BeforeEach
    public void setUp() {
        RestAssured.reset();
        RestAssured.baseURI = Config.BASE_URL;
        RestAssured.basePath = "";
    }
}