export const DELIVERY_AREA = 'Anaimalai';
export const DELIVERY_MAX_KM = 3;
export const DELIVERY_CHARGE = 30;

export type AreaOption = {
  label: string;
  withinRange: boolean;
};

export const DELIVERY_AREAS: AreaOption[] = [
  { label: 'Anaimalai Town', withinRange: true },
  { label: 'Anaimalai Bus Stand', withinRange: true },
  { label: 'Anaimalai Market', withinRange: true },
  { label: 'Sethumadai (2 km)', withinRange: true },
  { label: 'Kottur (3 km)', withinRange: true },
  { label: 'Pollachi (8 km)', withinRange: false },
  { label: 'Udumalpet (20 km)', withinRange: false },
  { label: 'Coimbatore (40 km)', withinRange: false },
];
