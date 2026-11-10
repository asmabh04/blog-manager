import type { Article, ArticleFormData } from "../types";
import ArticleForm from "./ArticleForm";

interface EditModalProps {
  article: Article;
  onSave: (data: ArticleFormData) => void;
  onClose: () => void;
}

function EditModal({ article, onSave, onClose }: EditModalProps) {
  return (
    <div className="modal-background">
      <div className="modal">
        <h2>Modifier l'article</h2>
        <ArticleForm
          initialData={{
            title: article.title,
            category: article.category,
            content: article.content,
            author: article.author,
          }}
          submitLabel="Enregistrer"
          onSubmit={onSave}
          onCancel={onClose}
        />
      </div>
    </div>
  );
}

export default EditModal;
