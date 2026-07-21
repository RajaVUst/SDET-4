package config;

import io.github.cdimascio.dotenv.Dotenv;

public class ApiConfig
{
    public static final String BASE_URL = resolveBaseUrl();

    private ApiConfig() {
    }
    private static String resolveBaseUrl() {
        Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();
        String configuredBaseUrl = dotenv.get("BASE_URL");

        if (configuredBaseUrl != null && !configuredBaseUrl.isBlank()) {
            return configuredBaseUrl;
        }
        String envBaseUrl = System.getenv("API_BASE_URL");
        if (envBaseUrl != null && !envBaseUrl.isBlank()) {
            return envBaseUrl;
        }
        return System.getenv("BASE_URL");
    }
}
