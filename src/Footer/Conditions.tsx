import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/styles";

const Conditions = () => {
  return (
    <StyledConditions>
      <h1>Conditions d'Utilisation de SkillXP</h1>
      <div>
        <h2>1. Acceptation des Conditions</h2>
        <p>
          En utilisant les fonctionnalités du site SkillXP, vous acceptez les
          présentes conditions d'utilisation.
        </p>
      </div>
      <div>
        <h2>2. Modifications des Conditions d'Utilisation</h2>
        <p>
          Nous nous réservons le droit de modifier ces conditions d'utilisation
          à tout moment, sans préavis. Les modifications prendront effet dès
          leur publication sur le site.
        </p>
      </div>
      <div>
        <h2>3. Utilisation de l'Application</h2>
        <p>
          SkillXP est destiné à un usage professionnel uniquement, pour aider
          les utilisateurs à chercher un emploi ou à explorer des possibilités
          de reconversion professionnelle.
        </p>
      </div>
      <div>
        <h2>4. Analyse</h2>
        <p>
          Les utilisateurs sont limités à deux tentatives d'analyse de CV pour
          obtenir des suggestions de métiers qu'ils peuvent exercer.
        </p>
      </div>
      <div>
        <h2>5. Responsabilité de l'Utilisateur</h2>
        <p>
          L'utilisateur est responsable de toute action liée à une offre
          d'emploi obtenue via SkillXP, ainsi que de l'exactitude des
          informations contenues dans le CV soumis pour analyse.
        </p>
      </div>
      <div>
        <h2>6. Limitation de Responsabilité</h2>
        <p>
          SkillXP n'est pas responsable des suggestions de métiers incorrectes.
          Les suggestions sont générées par une intelligence artificielle qui
          peut se tromper. Les utilisateurs sont invités à vérifier les
          suggestions par rapport à leur propre profil, parcours, expérience et
          compétences.
        </p>
      </div>
      <div>
        <h2>7. Liens Externes</h2>
        <p>
          SkillXP contient des liens vers des offres d'emploi externes. Une fois
          que l'utilisateur clique sur un lien externe, les conditions
          d'utilisation et les politiques de confidentialité du site externe
          s'appliquent.
        </p>
      </div>
      <div>
        <h2>8. Lois Applicables</h2>
        <p>
          Les présentes conditions d'utilisation sont régies par les lois
          françaises. Tout litige relatif à leur interprétation et/ou à leur
          exécution relève des tribunaux français compétents.
        </p>
      </div>
      <div>
        <h2>9. Contact</h2>
        <p>
          Pour toute question concernant ces conditions d'utilisation, veuillez
          nous contacter à : dev.frenchlod@gmail.com.
        </p>
      </div>
    </StyledConditions>
  );
};

export default Conditions;
const StyledConditions = styled.div`
  padding: 10px;
  h1 {
    color: ${COLORS.second};
  }
  > div {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    /* padding: 10px; */
    h2,
    p {
      color: ${COLORS.light};
    }
  }
`;
