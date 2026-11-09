import {
  Refrigerator,
  Snowflake,
  WashingMachine,
  Wind,
  Droplets,
  Flame,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Refrigerator,
  Snowflake,
  WashingMachine,
  Wind,
  Droplets,
  Flame,
};

export function getServiceIcon(name: string): LucideIcon {
  return iconMap[name] || Refrigerator;
}
