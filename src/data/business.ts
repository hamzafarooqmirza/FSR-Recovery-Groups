const phone = "+447888502989";
const nationalNumber = phone.replace("+44", "");

const address = {
  street: "135 Gladstone St",
  locality: "Darlington",
  postalCode: "DL3 6LB",
  countryCode: "GB",
  country: "United Kingdom",
};

export const business = {
  name: "FSR Recovery Group",
  phone,
  phoneDisplay: `+44 ${nationalNumber.slice(0, 4)} ${nationalNumber.slice(4)}`,
  tel: `tel:${phone}`,
  whatsapp: `https://wa.me/${phone.replace("+", "")}`,
  email: "Fsrbreakdownrecovery@gmail.com",
  address,
  addressFull: `${address.street}, ${address.locality} ${address.postalCode}, ${address.country}`,
} as const;
