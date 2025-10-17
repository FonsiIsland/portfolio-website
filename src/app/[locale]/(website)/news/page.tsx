import NewsCard from "@/components/pages/news-page/news-card";
import NewsDialog from "@/components/pages/news-page/news-dialog";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { ScrollArea } from "@/components/ui/scroll-area";

const NewsPage = () => {
  return (
    <main className="w-screen h-screen">
      <div className="mx-auto w-7xl h-screen pt-20">
        <ScrollArea
          className="w-full h-[calc(100vh-80px)]"
          shadowStyle="radial"
          showScrollbar={false}
        >
          <div className="flex flex-col gap-8 items-center justify-center py-8">
            <NewsDialog
              title="Portfolio Launch"
              description="Schau dir meine neuesten Projekte und Arbeiten an - das Portfolio ist jetzt online!"
              date="18.10.2025"
              imageUrl="/images/news/portfolio-preview.png"
            />
            <NewsDialog
              title="Portfolio Launch"
              description="Schau dir meine neuesten Projekte und Arbeiten an - das Portfolio ist jetzt online!"
              date="18.10.2025"
              imageUrl="/images/news/portfolio-preview.png"
            />{" "}
            <NewsDialog
              title="Portfolio Launch"
              description="Schau dir meine neuesten Projekte und Arbeiten an - das Portfolio ist jetzt online!"
              date="18.10.2025"
              imageUrl="/images/news/portfolio-preview.png"
            />{" "}
            <NewsDialog
              title="Portfolio Launch"
              description="Schau dir meine neuesten Projekte und Arbeiten an - das Portfolio ist jetzt online!"
              date="18.10.2025"
              imageUrl="/images/news/portfolio-preview.png"
            />{" "}
            <NewsDialog
              title="Portfolio Launch"
              description="Schau dir meine neuesten Projekte und Arbeiten an - das Portfolio ist jetzt online!"
              date="18.10.2025"
              imageUrl="/images/news/portfolio-preview.png"
            />
          </div>
        </ScrollArea>
      </div>
    </main>
  );
};
export default NewsPage;
