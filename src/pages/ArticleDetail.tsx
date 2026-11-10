import { Link, useNavigate, useParams } from "react-router-dom";
import { useArticles } from "../context/ArticlesContext";

function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { articles, deleteArticle } = useArticles();

  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div>
        <p>Article introuvable.</p>
        <Link to="/articles">Retour aux articles</Link>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm("Voulez-vous vraiment supprimer cet article ?")) {
      deleteArticle(article.id);
      navigate("/articles");
    }
  };

  return (
    <div>
      <Link to="/articles">← Retour aux articles</Link>
      <span className="badge">{article.category}</span>
      <h2>{article.title}</h2>
      <p className="meta">
        Par {article.author || "Anonyme"} –{" "}
        {new Date(article.createdAt).toLocaleDateString("fr-FR")}
      </p>
      <p className="content">{article.content}</p>
      <button className="danger" onClick={handleDelete}>
        Supprimer
      </button>
    </div>
  );
}

export default ArticleDetail;
