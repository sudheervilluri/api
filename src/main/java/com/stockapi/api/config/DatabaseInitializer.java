package com.stockapi.api.config;

import com.stockapi.api.model.User;
import com.stockapi.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseInitializer implements CommandLineRunner {

    private final UserService userService;

    @Autowired
    public DatabaseInitializer(UserService userService) {
        this.userService = userService;
    }

    @Override
    public void run(String... args) throws Exception {
        // Check if users already exist to avoid duplicates
        if (userService.countUsers() == 0) {
            System.out.println("Initializing database with sample users...");
            
            // Create sample users with encoded passwords
            User admin = userService.createUser("admin", "admin123", "admin@stockapi.com");
            System.out.println("Created user: " + admin.getUsername());
            
            User user1 = userService.createUser("john_doe", "password123", "john@example.com");
            System.out.println("Created user: " + user1.getUsername());
            
            User user2 = userService.createUser("jane_smith", "securepass456", "jane@example.com");
            System.out.println("Created user: " + user2.getUsername());
            
            User testUser = userService.createUser("testuser", "test123", "test@example.com");
            System.out.println("Created user: " + testUser.getUsername());
            
            System.out.println("\n=== Database Initialization Complete ===");
            System.out.println("Total users created: " + userService.countUsers());
            System.out.println("\nSample Credentials:");
            System.out.println("  Username: admin      | Password: admin123");
            System.out.println("  Username: john_doe   | Password: password123");
            System.out.println("  Username: jane_smith | Password: securepass456");
            System.out.println("  Username: testuser   | Password: test123");
            System.out.println("\nDatabase Connection:");
            System.out.println("  URL: jdbc:h2:file:./data/stockdb");
            System.out.println("  Username: admin");
            System.out.println("  Password: admin123");
            System.out.println("  H2 Console: http://localhost:8080/h2-console");
            System.out.println("========================================\n");
        } else {
            System.out.println("Database already initialized with " + userService.countUsers() + " users.");
        }
    }
}
