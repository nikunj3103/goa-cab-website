export const getWhatsAppLink = (message) => {
  const phone = "918007090230";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const getBookingMessage = () => {
  return "Hi. I am interested for cab booking!";
};

export const getFormMessage = (form) => {
  return `Hi. I am interested for cab booking!

Pickup: ${form.pickup}
Drop: ${form.drop}
Pax: ${form.pax}
Vehicle: ${form.vehicle}`;
};

export const getPlaceMessage = (place) => {
  return `Hi. I am interested for cab booking to ${place}!`;
};