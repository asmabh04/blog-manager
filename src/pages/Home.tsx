import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Bienvenue sur Blog Manager</h2>
      <p>
        Votre espace personnel pour écrire, organiser et partager ce que vous
        apprenez. Étudiant ou jeune professionnel, gardez une trace de vos
        projets et de vos expériences, article après article.
      </p>
      <p>
        Créez, modifiez et supprimez vos articles quand vous voulez. Tout est
        enregistré dans votre navigateur, sans compte ni serveur.
      </p>
      <Link to="/articles" className="link-button">
        Voir les articles
      </Link>
    </div>
  );
}

export default Home;
