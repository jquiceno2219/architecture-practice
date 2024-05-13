// Módulo para búsqueda de vuelos
const flightSearchModule = {
    searchFlights: (origin, destination, date) => {
      // Lógica para buscar vuelos
      // Retorna una lista de vuelos disponibles
    }
  };
  
  // Módulo para reserva de asientos
  const seatReservationModule = {
    reserveSeat: (flightId, seatNumber) => {
      // Lógica para reservar un asiento en un vuelo específico
      // Retorna un mensaje de confirmación o error
    }
  };
  
  // Módulo para procesamiento de pagos
  const paymentProcessingModule = {
    processPayment: (paymentInfo) => {
      // Lógica para procesar el pago
      // Retorna un mensaje de confirmación o error
    }
  };
  
  // Módulo principal que utiliza los otros módulos
  const flightBookingSystem = {
    bookFlight: (origin, destination, date, seatNumber, paymentInfo) => {
      // Búsqueda de vuelos disponibles
      const availableFlights = flightSearchModule.searchFlights(origin, destination, date);
  
      // Lógica para seleccionar un vuelo (puede ser la más barata, la más rápida, etc.)
  
      // Reserva de asiento en el vuelo seleccionado
      const flightId = '123'; // ID del vuelo seleccionado (por ejemplo)
      const reservationResult = seatReservationModule.reserveSeat(flightId, seatNumber);
  
      if (reservationResult === 'success') {
        // Procesamiento del pago
        const paymentResult = paymentProcessingModule.processPayment(paymentInfo);
  
        if (paymentResult === 'success') {
          return '¡Reserva realizada con éxito!';
        } else {
          return 'Error al procesar el pago. Inténtelo de nuevo.';
        }
      } else {
        return 'Error al reservar el asiento. Inténtelo de nuevo.';
      }
    }
  };
  
  // Ejemplo de uso del sistema de reservas de vuelos
  const origin = 'Ciudad A';
  const destination = 'Ciudad B';
  const date = '2024-05-12';
  const seatNumber = 'A1';
  const paymentInfo = {/* información de pago */};
  
  const bookingResult = flightBookingSystem.bookFlight(origin, destination, date, seatNumber, paymentInfo);
  console.log(bookingResult);
  