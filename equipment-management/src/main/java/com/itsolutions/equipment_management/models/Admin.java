package com.itsolutions.equipment_management.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.autoconfigure.domain.EntityScan;


@Getter
@Setter
@Entity
@Table(name = "admin")
public class Admin extends Personne {
    private String departement;

    public Admin() {
        super();
        this.setRole(Role.ROLE_ADMIN);
    }
}
