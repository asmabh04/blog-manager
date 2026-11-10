import { useNavigate } from "react-router-dom";
import { useArticles } from "../context/ArticlesContext";
import ArticleForm from "../components/ArticleForm";

function NewArticle() {
  const { addArticle } = useArticles();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Créer un article</h2>
      <ArticleForm
        submitLabel="Publier"
        onSubmit={(data) => {
          addArticle(data);
          navigate("/articles");
        }}
      />
    </div>
  );
}

export default NewArticle;
