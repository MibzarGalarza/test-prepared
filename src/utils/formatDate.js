// utils/formatDate.js

/**
 * Formatea una fecha a un formato legible
 * @param {string | Date} date - Fecha en formato string o Date
 * @param {string} locale - Idioma/localización (ej: 'es-MX', 'en-US')
 * @param {Object} options - Opciones de Intl.DateTimeFormat
 * @returns {string} Fecha formateada
 */
export const formatDate = (date, locale = "es-MX", options = {}) => {
  try {
    if (!date) return "";

    const newDate = new Date(date);

    // Opciones por defecto (ejemplo: 19 de agosto de 2025, 9:30 a. m.)
    const defaultOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };

    return new Intl.DateTimeFormat(locale, { ...defaultOptions, ...options }).format(newDate);
  } catch (error) {
    console.error("Error formateando fecha:", error);
    return date;
  }
};
