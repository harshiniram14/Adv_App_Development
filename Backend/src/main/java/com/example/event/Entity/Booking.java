package com.example.event.Entity;
import java.time.LocalDate;
import java.time.LocalTime;
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
@Table(name  = "book")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookid;

    @Column(name = "custname", nullable = false)
    private String custname;

    @Column(name = "booktype", nullable = false)
    private String booktype;

    @Column(name = "headcount", nullable = false)
    private int headcount;

    @Column(name = "bookdate", nullable = false)
    private LocalDate bookdate;

    @Column(name = "booktime", nullable = false)
    private LocalTime booktime;

    @Column(name = "location", nullable = false)
    private String location;
    
}