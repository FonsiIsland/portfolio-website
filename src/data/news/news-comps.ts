import PortfolioArticleDE from "./comps/portfolio-article/de";
import PortfolioArticleEN from "./comps/portfolio-article/en";

export const newsComponents: Record<
  string,
  Record<string, React.ComponentType>
> = {
  PortfolioArticle: {
    de: PortfolioArticleDE,
    en: PortfolioArticleEN,
  },
};
