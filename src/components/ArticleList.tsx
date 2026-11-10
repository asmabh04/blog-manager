import type { Article } from "../types";
import ArticleCard from "./ArticleCard";

function ArticleList({ articles }: { articles: Article[] }) {
  if (articles.length === 0) {
    return <p>Aucun article à afficher.</p>;
  }

  return (
    <div className="list">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}

export default ArticleList;
