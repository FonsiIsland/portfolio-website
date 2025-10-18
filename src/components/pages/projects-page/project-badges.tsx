import { Badge } from "@/components/ui/badge";
import DynamicLucideIcon from "@/components/utils/lucide-icon";
import { safeT } from "@/components/utils/safe-translation";
import { useTranslations } from "next-intl";

export const BadgeDefinitions = {
  // STATUS / DEPLOYMENT
  published: {
    icon: "BookOpenCheck",
    labelKey: "published",
    category: "status",
  },
  inDevelopment: {
    icon: "Rocket",
    labelKey: "in_development",
    category: "status",
  },
  productionReady: {
    icon: "Rocket",
    labelKey: "production_ready",
    category: "status",
  },
  webAppReady: {
    icon: "Rocket",
    labelKey: "web_app_ready",
    category: "status",
  },
  deployedVercel: {
    icon: "Rocket",
    labelKey: "deployed_vercel",
    category: "status",
  },

  // TECH
  reactTailwind: {
    icon: "Code2",
    labelKey: "react_tailwind",
    category: "tech",
  },
  typeScript: {
    icon: "Code2",
    labelKey: "typescript_ready",
    category: "tech",
  },
  vanillaJS: { icon: "Code2", labelKey: "vanilla_js", category: "tech" },
  electron: { icon: "Code2", labelKey: "electron", category: "tech" },
  nodeJS: { icon: "Binary", labelKey: "nodejs", category: "tech" },

  // FEATURES
  responsive: {
    icon: "MonitorSmartphone",
    labelKey: "responsive",
    category: "features",
  },
  darkMode: { icon: "Moon", labelKey: "dark_mode", category: "features" },
  multilingual: {
    icon: "Languages",
    labelKey: "multilingual",
    category: "features",
  },
  dragDrop: { icon: "Move", labelKey: "drag_drop", category: "features" },
  modularComponents: {
    icon: "Layers",
    labelKey: "modular_components",
    category: "features",
  },
  dynamicGrid: {
    icon: "Grid",
    labelKey: "dynamic_grid_layout",
    category: "features",
  },
  editorMode: {
    icon: "Wrench",
    labelKey: "editor_mode",
    category: "features",
  },
  canvasBased: {
    icon: "Layers",
    labelKey: "canvas_based",
    category: "features",
  },
  imageCropping: {
    icon: "Scissors",
    labelKey: "image_cropping",
    category: "features",
  },
  framerMotion: {
    icon: "Sparkles",
    labelKey: "framer_motion",
    category: "features",
  },
  openSource: {
    icon: "Github",
    labelKey: "open_source",
    category: "features",
  },
  closedSource: {
    icon: "Github",
    labelKey: "closed_source",
    category: "features",
  },

  // SECURITY
  securityFirst: {
    icon: "ShieldCheck",
    labelKey: "security_first",
    category: "security",
  },
  tamperDetection: {
    icon: "Zap",
    labelKey: "tamper_detection",
    category: "security",
  },
  rbacMTLS: { icon: "Key", labelKey: "rbac_mtls", category: "security" },
  digitalSignatures: {
    icon: "Key",
    labelKey: "digital_signatures",
    category: "security",
  },

  // OTHER / SYSTEM
  smartHome: { icon: "House", labelKey: "smarthome", category: "other" },
  sandboxedVM: {
    icon: "Box",
    labelKey: "sandboxed_vm",
    category: "other",
  },
  sandboxedWebviews: {
    icon: "Box",
    labelKey: "sandboxed_webviews",
    category: "other",
  },
  zIndexControl: {
    icon: "Layers",
    labelKey: "z_index_control",
    category: "other",
  },
  dynamicRouting: {
    icon: "Layers",
    labelKey: "dynamic_routing",
    category: "other",
  },
  ipcCommunication: {
    icon: "Layers",
    labelKey: "ipc_communication",
    category: "other",
  },
};

export type BadgeName = keyof typeof BadgeDefinitions;

export const BadgeRenderer: React.FC<{
  badges: BadgeName[];
}> = ({ badges }) => {
  const t = useTranslations("components.badge.label");

  // Filtere nur die Badges, die für dieses Projekt relevant sind
  const projectBadges = badges
    .map((name) => ({ name, ...BadgeDefinitions[name] }))
    .filter(Boolean);

  // Sortiere nach Kategorie (Status → Tech → Features → Security → Other)
  const categoryOrder = ["status", "tech", "features", "security", "other"];
  const sortedBadges = projectBadges.sort(
    (a, b) =>
      categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)
  );

  return (
    <div className="w-[90%] mt-2 flex flex-wrap gap-2 items-center">
      {sortedBadges.map((badge) => (
        <Badge
          key={badge.name}
          className="text-xs font-light text-text/80 rounded-full flex items-center gap-1.5"
        >
          <DynamicLucideIcon
            name={badge.icon}
            size={16}
            className="text-text/60"
          />
          {safeT(t, badge.labelKey)}
        </Badge>
      ))}
    </div>
  );
};
