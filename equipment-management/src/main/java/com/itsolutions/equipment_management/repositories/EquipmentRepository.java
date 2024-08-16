package com.itsolutions.equipment_management.repositories;

import com.itsolutions.equipment_management.models.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EquipmentRepository extends JpaRepository<Equipment, Long> {
    List<Equipment> findByNom(String nom);

    @Query("SELECT max(count(p)) FROM Panne p JOIN p.equipments e WHERE e.id = :equipmentId")
    public int countmax(@Param("equipmentId")Long id);


}
