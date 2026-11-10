import { useState } from "react";
import type { FormEvent } from "react";
import type { ArticleFormData, FormErrors } from "../types";

interface ArticleFormProps {
  initialData?: ArticleFormData; // Pour la création on n’en donne pas. Pour la modification, on donne l’article à modifier.
  submitLabel: string;
  onSubmit: (data: ArticleFormData) => void;
  onCancel?: () => void;
}

const emptyForm: ArticleFormData = {
  title: "",
  category: "",
  content: "",
  author: "",
};

function ArticleForm({
  initialData,
  submitLabel,
  onSubmit,
  onCancel,
}: ArticleFormProps) {
  const [form, setForm] = useState<ArticleFormData>(initialData ?? emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});

  // Met à jour le champ modifié
  const handleChange = (field: keyof ArticleFormData, value: string) => {
    setForm({ ...form, [field]: value });
  };

  // Vérifie les champs obligatoires
  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (form.title.trim() === "") newErrors.title = "Le titre est obligatoire";
    if (form.category.trim() === "")
      newErrors.category = "La catégorie est obligatoire";
    if (form.content.trim() === "")
      newErrors.content = "Le contenu est obligatoire";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    // S'il y a des erreurs, on bloque l'envoi
    if (Object.keys(newErrors).length > 0) return;
    onSubmit(form);
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <label>
        Titre *
        <input
          type="text"
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </label>

      <label>
        Catégorie *
        <input
          type="text"
          value={form.category}
          onChange={(e) => handleChange("category", e.target.value)}
        />
        {errors.category && <span className="error">{errors.category}</span>}
      </label>

      <label>
        Auteur
        <input
          type="text"
          value={form.author}
          onChange={(e) => handleChange("author", e.target.value)}
        />
      </label>

      <label>
        Contenu *
        <textarea
          rows={6}
          value={form.content}
          onChange={(e) => handleChange("content", e.target.value)}
        />
        {errors.content && <span className="error">{errors.content}</span>}
      </label>

      <div className="form-buttons">
        <button type="submit">{submitLabel}</button>
        {onCancel && (
          <button type="button" className="secondary" onClick={onCancel}>
            Annuler
          </button>
        )}
      </div>
    </form>
  );
}

export default ArticleForm;
