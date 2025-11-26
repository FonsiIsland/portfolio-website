import VotifyArticleDE from "./comps/votify-article/de";
import VotifyArticleEN from "./comps/votify-article/en";
import PortfolioArticleDE from "./comps/portfolio-article/de";
import PortfolioArticleEN from "./comps/portfolio-article/en";
import WidgetSystemArticleDE from "./comps/widget-system-article/de";
import WidgetSystemArticleEN from "./comps/widget-system-article/en";
import NodeJsPluginSystemArticleDE from "./comps/nodejs-plugin-system-article/de";
import NodeJsPluginSystemArticleEN from "./comps/nodejs-plugin-system-article/en";
import ElectronPluginSystemArticleDE from "./comps/electron-plugin-system-article/de";
import ElectronPluginSystemArticleEN from "./comps/electron-plugin-system-article/en";
import ImageCropperArticleDE from "./comps/image-cropper-article/de";
import ImageCropperArticleEN from "./comps/image-cropper-article/en";
import ElectronNodejsSmarthomeArticleDE from "./comps/electron-nodejs-smarthome-article/de";
import ElectronNodejsSmarthomeArticleEN from "./comps/electron-nodejs-smarthome-article/en";
import VotifyArticle from "./comps/votify-article/de";

export const projectComponents: Record<
  string,
  Record<string, React.ComponentType>
> = {
  VotifyArticle: {
    de: VotifyArticleDE,
    en: VotifyArticleEN,
  },
  PortfolioArticle: {
    de: PortfolioArticleDE,
    en: PortfolioArticleEN,
  },
  WidgetSystemArticle: {
    de: WidgetSystemArticleDE,
    en: WidgetSystemArticleEN,
  },
  NodeJsPluginSystemArticle: {
    de: NodeJsPluginSystemArticleDE,
    en: NodeJsPluginSystemArticleEN,
  },
  ElectronPluginSystemArticle: {
    de: ElectronPluginSystemArticleDE,
    en: ElectronPluginSystemArticleEN,
  },
  ImageCropperArticle: {
    de: ImageCropperArticleDE,
    en: ImageCropperArticleEN,
  },
  ElectronNodejsSmarthomeArticle: {
    de: ElectronNodejsSmarthomeArticleDE,
    en: ElectronNodejsSmarthomeArticleEN,
  },
};
