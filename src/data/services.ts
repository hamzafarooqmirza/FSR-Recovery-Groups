export type ServiceNavigationItem = {
  key: string;
  label: string;
  href: string;
  available: boolean;
};

export const serviceNavigation: ServiceNavigationItem[] = [
  {
    key: "vehicle-breakdown-recovery",
    label: "24/7 Vehicle Breakdown Recovery",
    href: "/services/vehicle-breakdown-recovery",
    available: true,
  },
  {
    key: "roadside-assistance",
    label: "Roadside Assistance",
    href: "/services/roadside-assistance",
    available: true,
  },
  {
    key: "jumpstart-services",
    label: "Jumpstart Services",
    href: "/services/jumpstart-services",
    available: true,
  },
  {
    key: "winch-out",
    label: "Winch Out",
    href: "/services#winch-out",
    available: false,
  },
  {
    key: "accident-emergency-assistance",
    label: "Accident Emergency Assistance",
    href: "/services#accident-emergency-assistance",
    available: false,
  },
  {
    key: "changing-spare-tyre",
    label: "Changing Spare Tyre",
    href: "/services#changing-spare-tyre",
    available: false,
  },
  {
    key: "refueling",
    label: "Refueling",
    href: "/services#refueling",
    available: false,
  },
  {
    key: "vehicle-transporting",
    label: "Vehicle Transporting",
    href: "/services#vehicle-transporting",
    available: false,
  },
];

export function getServiceNavigation(key: string): ServiceNavigationItem {
  const service = serviceNavigation.find((item) => item.key === key);

  if (!service) {
    throw new Error(`Unknown service navigation key: ${key}`);
  }

  return service;
}
