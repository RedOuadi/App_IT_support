package com.itsolutions.equipment_management.repositories;

import com.itsolutions.equipment_management.models.PanneEquipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


public interface PanneEquipmentRepository extends JpaRepository<PanneEquipment, Long> {
}
