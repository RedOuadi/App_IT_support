package com.itsolutions.equipment_management.controllers;

import com.itsolutions.equipment_management.models.Personne;
import com.itsolutions.equipment_management.models.Role;
import com.itsolutions.equipment_management.security.JwtAuth;
import com.itsolutions.equipment_management.services.PersonneService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/users")
public class PersonneController {

    @Autowired
    private PersonneService personneService;
    @Autowired
    private JwtAuth jwtAuth;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody Personne userRequest) {
        Optional<Personne> existingUser = personneService.findByEmail(userRequest.getEmail());
        if (existingUser.isPresent()) {
            return ResponseEntity.status(400).body("Email already registered");
        }

        Personne newUser = personneService.registerPersonne(userRequest);
        return ResponseEntity.ok("User registered successfully");
    }

   /* @PostMapping("/register")
    public ResponseEntity<Map<String, String>> registerUser(@RequestBody Personne userRequest) {
        Optional<Personne> existingUser = personneService.findByEmail(userRequest.getEmail());
        if (existingUser.isPresent()) {
            Map<String, String> response = new HashMap<>();
            response.put("message", "Email already registered");
            return ResponseEntity.status(400).body(response);
        }

        Personne newUser = personneService.registerPersonne(userRequest);
        Map<String, String> response = new HashMap<>();
        response.put("message", "User registered successfully");
        return ResponseEntity.ok(response);
    }  */


    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> userRequest) {
        String email = userRequest.get("email");
        String rawPassword = userRequest.get("motDePasse");

        if (email == null || rawPassword == null) {
            return ResponseEntity.badRequest().body("Email and password are required");
        }

        Optional<Personne> optionalUser = personneService.findByEmail(email);
        if (optionalUser.isPresent()) {
            Personne foundUser = optionalUser.get();
            String encodedPassword = foundUser.getMotDePasse();

            if (passwordEncoder.matches(rawPassword, encodedPassword)) {
                Role role = foundUser.getRole();
                String token = jwtAuth.generateToken(foundUser.getEmail(), String.valueOf(role));

                Map<String, String> response = new HashMap<>();
                response.put("token", token);
                response.put("role", String.valueOf(role));

                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(401).body("Invalid password");
            }
        }
        return ResponseEntity.status(401).body("Invalid email or password");
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updatePersonne(@PathVariable Long id, @RequestBody Personne updatedPersonne) {
        try {
            Personne updated = personneService.updatePersonne(id, updatedPersonne);
            return ResponseEntity.ok("User updated successfully");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(404).body("User not found");
        }
    }
    @GetMapping("/profile")
    public ResponseEntity<?> getUserProfile() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userEmail;
        if (principal instanceof UserDetails) {
            userEmail = ((UserDetails) principal).getUsername();
        } else {
            userEmail = principal.toString();
        }

        Optional<Personne> optionalPersonne = personneService.findByEmail(userEmail);
        if (optionalPersonne.isPresent()) {
            return ResponseEntity.ok(optionalPersonne.get());
        } else {
            return ResponseEntity.status(404).body("User not found");
        }
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        personneService.deletePersonne(id);
        return ResponseEntity.ok("User deleted successfully");
    }

}
