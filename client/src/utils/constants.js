export const BRAND_INFO = {
  name: "AZA Diamonds & Gold",
  tagline: "Timeless Gold & Diamond Elegance, Crafted for Life.",
  address: "Global Village, Kannur, Kerala, India - 670001",
  phone: "+91 9169163234",
  phoneClean: "+919169163234",
  whatsappNumber: "919169163234",
  whatsappFormatted: "+91 9169163234",
  email: "azadiamondsandgold@gmail.com",
  workingHours: "Mon - Sun: 10:00 AM - 8:00 PM"
};

export const WHATSAPP_BASE_URL = `https://wa.me/${BRAND_INFO.whatsappNumber}`;

export const BUILD_WHATSAPP_LINK = (message) => {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
};
