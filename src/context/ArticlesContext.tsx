import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Article, ArticleFormData } from "../types";

const STORAGE_KEY = "blog-articles";

interface ArticlesContextType {
  articles: Article[];
  addArticle: (data: ArticleFormData) => void;
  updateArticle: (id: string, data: ArticleFormData) => void;
  deleteArticle: (id: string) => void;
}

const ArticlesContext = createContext<ArticlesContextType>({
  articles: [],
  addArticle: () => {},
  updateArticle: () => {},
  deleteArticle: () => {},
});

// Lit les articles dans le localStorage
function loadArticles(): Article[] {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? (JSON.parse(saved) as Article[]) : [];
}

export function ArticlesProvider({ children }: { children: ReactNode }) {
  const [articles, setArticles] = useState<Article[]>(loadArticles);

  // À chaque changement de la liste, on la sauvegarde
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  }, [articles]);

  const addArticle = (data: ArticleFormData) => {
    const newArticle: Article = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setArticles([newArticle, ...articles]);
  };

  const updateArticle = (id: string, data: ArticleFormData) => {
    //data : les nouvelles informations
    setArticles(articles.map((a) => (a.id === id ? { ...a, ...data } : a)));
  };

  const deleteArticle = (id: string) => {
    setArticles(articles.filter((a) => a.id !== id));
  };

  return (
    <ArticlesContext.Provider
      value={{ articles, addArticle, updateArticle, deleteArticle }}
    >
      {children}
    </ArticlesContext.Provider>
  );
}

export function useArticles(): ArticlesContextType {
  return useContext(ArticlesContext);
}
