import React from "react";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface DynamicLucideIconProps {
  name: string;
  size?: number;
  className?: string;
}

const DynamicLucideIcon: React.FC<DynamicLucideIconProps> = ({
  name,
  size = 24,
  className,
}) => {
  // Hole die Icon-Komponente dynamisch aus dem Lucide-Import
  const Icon = (LucideIcons as unknown as Record<string, LucideIcon>)[name];
  if (!Icon) {
    console.warn(`Lucide Icon "${name}" existiert nicht`);
    return null;
  }
  return <Icon size={size} className={className} />;
};

export default DynamicLucideIcon;
