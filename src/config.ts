export const siteConfig = {
  name: "GAMAZ Carpintería",
  description: "Diseño y fabricación de muebles artesanales a medida. Calidad, confianza y tradición familiar en cada proyecto en México.",
  phone: "526624001350", // Replace with actual Mexican WhatsApp number (include country code, no + or spaces)
  whatsappMessage: "Hola, me gustaría solicitar una cotización para un proyecto de carpintería a medida.",
  socials: {
    instagram: "https://instagram.com/gamaz_carpinteria", // Customize with actual handle
    facebook: "https://facebook.com/gamaz_carpinteria",
  },
  location: "Hermosillo, Sonora, México",
  email: "contacto@gamaz.mx",
};

export const getWhatsAppLink = (customMessage?: string) => {
  const message = encodeURIComponent(customMessage || siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.phone}?text=${message}`;
};
