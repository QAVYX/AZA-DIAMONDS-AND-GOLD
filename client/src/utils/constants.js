export const BRAND_INFO = {
  name: "AZA Diamonds & Gold",
  tagline: "Timeless Gold & Diamond Elegance, Crafted for Life.",
  address: "Global Village, Kannur, Kerala, India - 670001",
  phone: "+91 98475 55916",
  phoneClean: "+919847555916",
  whatsappNumber: "919562340022",
  whatsappFormatted: "+91 95623 40022",
  email: "concierge@azadiamonds.com",
  workingHours: "Mon - Sun: 10:00 AM - 9:00 PM"
};

export const WHATSAPP_BASE_URL = `https://wa.me/${BRAND_INFO.whatsappNumber}`;

export const BUILD_WHATSAPP_LINK = (message) => {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
};
