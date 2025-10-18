import { BadgeName } from "@/components/pages/projects-page/project-badges";

export const ProjectsJson: {
  id: string;
  titleKey: string;
  descriptionKey: string;
  date: string;
  imageUrl: string;
  category: string;
  badges: BadgeName[];
  component: string;
}[] = [
  {
    id: "portfolio",
    titleKey: "portfolio.title",
    descriptionKey: "portfolio.description",
    date: "18.10.2025",
    imageUrl: "/images/news/portfolio-preview.png",
    category: "frontend",
    badges: [
      "published",
      "openSource",
      "reactTailwind",
      "darkMode",
      "multilingual",
      "deployedVercel",
    ],
    component: "PortfolioArticle",
  },
  {
    id: "react-widget-system",
    titleKey: "react_widget_system.title",
    descriptionKey: "react_widget_system.description",
    date: "26.9.2025",
    imageUrl: "/images/projects/react-widget-system-preview.png",
    category: "frontend",
    badges: [
      "inDevelopment",
      "reactTailwind",
      "framerMotion",
      "dragDrop",
      "dynamicGrid",
      "editorMode",
      "modularComponents",
      "typeScript",
      "responsive",
    ],
    component: "WidgetSystemArticle",
  },
  {
    id: "node-plugin-system",
    titleKey: "node_plugin_system.title",
    descriptionKey: "node_plugin_system.description",
    date: "22.8.2025",
    imageUrl: "/images/projects/nodejs-plugin-system-preview.png",
    category: "backend",
    badges: [
      "securityFirst",
      "nodeJS",
      "rbacMTLS",
      "sandboxedVM",
      "typeScript",
      "dynamicRouting",
      "tamperDetection",
      "productionReady",
    ],
    component: "NodeJsPluginSystemArticle",
  },
  {
    id: "electron-plugin-system",
    titleKey: "electron_plugin_system.title",
    descriptionKey: "electron_plugin_system.description",
    date: "24.7.2025",
    imageUrl: "/images/projects/electron-plugin-system-preview.png",
    category: "desktop",
    badges: [
      "securityFirst",
      "sandboxedWebviews",
      "electron",
      "tamperDetection",
      "dynamicRouting",
      "productionReady",
      "digitalSignatures",
    ],
    component: "ElectronPluginSystemArticle",
  },
  {
    id: "smarthome-system",
    titleKey: "smarthome_system.title",
    descriptionKey: "smarthome_system.description",
    date: "20.7.2025",
    imageUrl: "/images/projects/electron-nodejs-smarthome-preview.png",
    category: "fullstack",
    badges: [
      "smartHome",
      "sandboxedVM",
      "securityFirst",
      "tamperDetection",
      "modularComponents",
      "inDevelopment",
      "rbacMTLS",
    ],
    component: "ElectronNodejsSmarthomeArticle",
  },
  {
    id: "image-cropper",
    titleKey: "image_cropper.title",
    descriptionKey: "image_cropper.description",
    date: "26.11.2024",
    imageUrl: "/images/projects/image-cropper-preview.png",
    category: "frontend",
    badges: [
      "imageCropping",
      "canvasBased",
      "vanillaJS",
      "responsive",
      "webAppReady",
    ],
    component: "ImageCropperArticle",
  },
];
