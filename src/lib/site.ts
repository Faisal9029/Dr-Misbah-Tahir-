// Central place for site-wide facts (contact numbers, address, links).
// Update values here instead of editing every component individually.

export const SITE_URL = "https://www.innovativemisbahtahir.com";
export const SITE_NAME = "Dr. Muhammad Misbah Tahir";
export const DOCTOR_NAME = "Dr. Muhammad Misbah Tahir";
export const SITE_DESCRIPTION =
  "Dr. Muhammad Misbah Tahir — Associate Professor of Radiology & Imaging and Interventional Radiologist at Liaquat National Hospital, Karachi. Book an appointment at National Medical Centre (NMC).";

// First number is the primary one used for the floating button / quick actions.
export const WHATSAPP_NUMBERS = [
  "923003455626",
  "923460807283",
  "923082393881",
] as const;

export const PRIMARY_WHATSAPP_NUMBER = WHATSAPP_NUMBERS[0];

export const CONTACT_EMAIL = "misbahtahir1975@yahoo.com";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Assalamualaikum, I would like to book an appointment with Dr. Misbah Tahir.";

export function whatsappLink(number: string, message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

// Single clinic location on purpose — NMC only.
export const CLINIC = {
  name: "National Medical Centre (NMC)",
  address:
    "A-5/A National Highway, near Kala Pull Road, D.H.A. Phase 1, Karachi, Pakistan",
  opdTimings: "Mon, Tue, Fri, Sat — 6 PM to 8 PM",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57925.71556707875!2d67.0568963!3d24.851646199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c2f193bc701%3A0x74df56d087bf03c2!2sNational%20Medical%20Centre%20(NMC)!5e0!3m2!1sen!2s!4v1759585230515!5m2!1sen!2s",
  latitude: 24.8516462,
  longitude: 67.0568963,
};

export const SOCIAL_LINKS = {
  youtube: "https://youtube.com/@misbahtahir-u1k?si=aHocmnlMtrECcGu5",
  tiktok: "https://www.tiktok.com/@dr.mmisbahtahir?_t=ZS-8zzv0Zf01YN&_r=1",
  facebook: "https://www.facebook.com/share/185ZnY9USS/",
  linkedin:
    "https://www.linkedin.com/in/dr-misbah-tahir-72013aa2?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  // TODO: swap this for Dr. Misbah's real Instagram profile URL when available
  instagram: "https://www.instagram.com",
};
