import Image from "next/image";

//import components
import Hamburger from "@/components/hamburger_menu/Hamburger";

//import icons
import { LocationIcon } from "@/public/assets/icons";

import Location from "@/public/assets/location.png";

export default function Home() {
  return (
    <main className="home-page">
      <div className="header">
        <Hamburger />
      </div>
      <section>
        <blockquote>
          Je suis un développeur front-end junior passionné par les nouvelles
          technologies et les défis qu&apos;elles apportent. Je suis spécialisé
          dans le développement d&apos;applications React.js, et j&apos;adore
          travailler sur des projets innovants qui améliorent l&apos;expérience
          utilisateur.
        </blockquote>
        <blockquote>
          Je suis également très impliqué dans la communauté de développeurs et
          j&apos;aime partager mes connaissances avec les autres. Je crois que
          la collaboration et l&apos;apprentissage continu sont les clés pour
          progresser dans ce domaine en constante évolution. Je suis toujours à
          la recherche de nouveaux projets excitants et de défis qui me
          permettent de continuer à apprendre et à grandir en tant que
          développeur. En résumé, je suis un développeur front-end junior
          passionné et déterminé, prêt à faire face à tout défi et à travailler
          sur des projets innovants.
        </blockquote>
        <blockquote>
          En dehors du développement, je suis également un passionné de musique
          et de mangas. J&apos;aime découvrir de nouveaux artistes et genres
          musicaux, et je suis un fan inconditionnel de la culture Japonaise.
        </blockquote>

        <div className="formations_container">
          <h4>Formations</h4>
          <div className="formations_wrapper">
            <div className="formation">
              <p>Stage chez Elim Communication</p>
              <span />
              <p>Sep-Dec 22</p>
            </div>
            <div className="formation">
              <p>Conservatoire des Arts et Métiers Multimédias </p>
              <span />
              <p>2019-22</p>
            </div>
            <div className="formation">
              <p>Licence en Philosophie</p>
              <span />
              <p>2016-19</p>
            </div>
            <div className="formation">
              <p>Baccalauréat en Lettres </p>
              <span />
              <p>2014-16</p>
            </div>
          </div>
        </div>

        <div className="location_container">
          <h4>Location</h4>
          <div className="location_wrapper">
            <div className="location">
              <Image
                src={Location}
                alt="location-image"
                height={800}
                width={800}
              />
              <div className="location_icon">
                <LocationIcon />
                <p>Bamako, ML</p>
              </div>
            </div>
          </div>
        </div>

        <div className="languages_container">
          <h4>Languages</h4>
          <div className="languages_wrapper">
            <div className="language">
              <p>Français</p>
              <span />
              <p>Niveau intermédiaire</p>
            </div>
            <div className="language">
              <p>Anglais</p>
              <span />
              <p>Niveau intermédiaire</p>
            </div>
            <div className="language">
              <p>Bambara</p>
              <span />
              <p>Niveau intermédiaire</p>
            </div>
            <div className="language">
              <p>Japanese</p>
              <span />
              <p>Coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
