package com.example.event.Mapper;

import com.example.event.Dto.Bookingdto;
import com.example.event.Entity.Booking;

public class Bookingmapper {
    public static Bookingdto maptoBookingdto(Booking bookingentity){
        return new Bookingdto(
            bookingentity.getBookid(),
            bookingentity.getCustname(),
            bookingentity.getBooktype(),
            bookingentity.getHeadcount(),
            bookingentity.getBookdate(),
            bookingentity.getBooktime(),
            bookingentity.getLocation()
        );
    }

    public static Booking maptoBooking(Bookingdto bookingdto){
        return new Booking(
            bookingdto.getBookid(),
            bookingdto.getCustname(),
            bookingdto.getBooktype(),
            bookingdto.getHeadcount(),
            bookingdto.getBookdate(),
            bookingdto.getBooktime(),
            bookingdto.getLocation()
        );
    }
}
