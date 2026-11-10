// Un article du blog
export interface Article {
  id: string;
  title: string;
  category: string;
  content: string;
  author: string;
  createdAt: string;
}

// Les champs remplis dans le formulaire
export interface ArticleFormData {
  title: string;
  category: string;
  content: string;
  author: string;
}

// Les erreurs de validation : un message par champ possible
export interface FormErrors {
  title?: string;
  category?: string;
  content?: string;
  author?: string;
}
