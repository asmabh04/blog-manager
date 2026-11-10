import { useState } from "react";
import { useArticles } from "../context/ArticlesContext";
import SearchBar from "../components/SearchBar";
import ArticleList from "../components/ArticleList";

function Articles() {
  const { articles } = useArticles();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("recent");

  // Liste des catégories
  const categories = [...new Set(articles.map((a) => a.category))];

  // 1. Filtre par titre et par catégorie
  const filtered = articles.filter(
    (a) => a.title.toLowerCase().includes(search.toLowerCase()) && // true si le titre contient le texte cherché
      (category === "" || a.category === category),
  );

  // 2. Tri par date
  const sorted = [...filtered].sort((a, b) => {
    const diff = new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    return sort === "recent" ? diff : -diff;
  });

  return (
    <div>
      <h2>Tous les articles</h2>
      <SearchBar
        search={search}
        category={category}
        sort={sort}
        categories={categories}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
        onSortChange={setSort}
      />
      <ArticleList articles={sorted} />
    </div>
  );
}

export default Articles;
