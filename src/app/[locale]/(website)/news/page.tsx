import NewsDialog from "@/components/pages/news-page/news-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NewsJson } from "@/data/news/news";
import { newsComponents } from "@/data/news/news-comps";
import { useLocale } from "next-intl";

const NewsPage = () => {
  const locale = useLocale();
  return (
    <main className="w-screen h-screen">
      <div className="mx-auto w-7xl h-screen pt-20">
        <ScrollArea
          className="w-full h-[calc(100vh-80px)]"
          shadowStyle="radial"
          showScrollbar={false}
        >
          <div className="flex flex-col gap-8 items-center justify-center py-8">
            {NewsJson.map((news) => {
              const NewsComponent = newsComponents[news.component][locale];
              if (!NewsComponent) return null;

              return (
                <NewsDialog
                  key={news.id}
                  titleKey={news.titleKey}
                  descriptionKey={news.descriptionKey}
                  date={news.date}
                  imageUrl={news.imageUrl}
                  article={<NewsComponent />}
                />
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </main>
  );
};
export default NewsPage;
