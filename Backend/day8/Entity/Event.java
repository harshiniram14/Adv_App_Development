package com.example.event.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name  = "plannerss")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventid;
    
    @Column(name = "eventname",nullable = false)
    private String eventname;
    
    @Column(name = "eventdesc",nullable = false)
    private String eventdesc;
    
    @Column(name = "eventimg",nullable = false)
    private String eventimg;
}
