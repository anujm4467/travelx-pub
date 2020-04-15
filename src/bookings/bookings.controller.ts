import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Booking } from './bookings.model';

@Controller('bookings')
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}

  @Get()
  async index() {
    return this.bookingsService.getAll();
  }

  @Post()
  async postBooking(@Body() booking: Booking) {
    return await this.bookingsService.insertBooking(booking)
  }
}