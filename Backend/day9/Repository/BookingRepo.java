package com.example.event.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.event.Entity.Booking;



@Repository
public interface BookingRepo extends JpaRepository <Booking, Long> {
    public Optional<Booking> findByCustname(String custname);
    void deleteByCustname (String custname);
}
