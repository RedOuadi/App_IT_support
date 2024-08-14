package com.itsolutions.equipment_management.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import java.util.List;

@Getter
@Setter
@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
@Table(name = "utilisateur")
public class User extends Personne {
    private String fonction;
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Ticket> tickets;

    public User() {
        super();
        this.setRole(Role.ROLE_USER);
    }
}
