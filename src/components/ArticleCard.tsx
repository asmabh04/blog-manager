import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Article } from "../types";
import { useArticles } from "../context/ArticlesContext";
import EditModal from "./EditModal";

function ArticleCard({ article }: { article: Article }) {
  const navigate = useNavigate();
  const { updateArticle, deleteArticle } = useArticles();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    // Confirmation avant la suppression
    if (window.confirm("Voulez-vous vraiment supprimer cet article ?")) {
      deleteArticle(article.id);
    }
  };

  return (
    <>
      {/* Cliquer sur la carte ouvre la page de l'article */}
      <div className="card" onClick={() => navigate(`/articles/${article.id}`)}>
        <span className="badge">{article.category}</span>
        <h3>{article.title}</h3>
        <p className="meta">
          Par {article.author || "Anonyme"} –{" "}
          {new Date(article.createdAt).toLocaleDateString("fr-FR")}
        </p>
        <p>{article.content.slice(0, 100)}...</p>

        <div className="card-buttons">
          {/* stopPropagation : évite d'ouvrir l'article en cliquant sur un bouton */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowModal(true);
            }}
          >
            Modifier
          </button>
          <button
            className="danger"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
          >
            Supprimer
          </button>
        </div>
      </div>

      {showModal && (
        <EditModal
          article={article}
          onSave={(data) => {
            updateArticle(article.id, data);
            setShowModal(false);
          }}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default ArticleCard;
