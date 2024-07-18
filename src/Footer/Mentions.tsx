import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/styles";

const Mentions = () => {
  return (
    <StyledMentions>
      <h1>Mentions Légales de SkillXP</h1>
      <div>
        <h2>1. Identité de l'Éditeur du Site</h2>
        <strong>Adresse email : dev.frenchlod@gmail.com</strong>
      </div>
      <div>
        <h2>2. Directeur de la Publication</h2>
        <strong>Adresse email : dev.frenchlod@gmail.com</strong>
      </div>
      <div>
        <h2>3. Hébergeur du site</h2>
        <ul>
          <li>Hébergeur : OVH</li>
          <li>Adresse postale : 2 Rue Kellermann, 59100 Roubaix, France</li>
          <li>Numéro de téléphone : +33 9 72 10 10 07</li>
          <li>Adresse email de contact : support@ovh.com</li>
        </ul>
      </div>
      <div>
        <h2>4. Propriété Intellectuelle</h2>
        <p>
          Tout le contenu du site SkillXP (textes, images, vidéos, etc.) est
          protégé par le droit d'auteur et la propriété intellectuelle. Toute
          reproduction, distribution ou utilisation du contenu est strictement
          interdite sans autorisation préalable.
        </p>
      </div>
      <div>
        <h2>5. Conditions Générales d'Utilisation (CGU)</h2>
        <p>
          Les CGU sont disponibles sur le site et leur acceptation est
          obligatoire pour utiliser le site.
        </p>
      </div>
      <div>
        <h2>6. Politique de Confidentialité</h2>
        <p>
          La politique de confidentialité est disponible sur le site et décrit
          comment les données des utilisateurs sont collectées, utilisées et
          protégées.
        </p>
      </div>
      <div>
        <h2>7. Cookies</h2>
        <p>
          Le site utilise des cookies pour améliorer l'expérience utilisateur.
          Un avis de cookie informe les utilisateurs dès leur première visite.
        </p>
      </div>
      <div>
        <h2>8. Liens Externes</h2>
        <p>
          Le site SkillXP peut contenir des liens vers des sites externes.
          L'éditeur du site n'est pas responsable du contenu de ces sites.
        </p>
      </div>
      <div>
        <h2>9. Modifications des Mentions Légales</h2>
        <p>
          Les mentions légales peuvent être modifiées à tout moment sans
          préavis. Les utilisateurs sont invités à les consulter régulièrement.
        </p>
      </div>
      <div>
        <h2>10. Lois Applicables</h2>
        <p>
          Les présentes mentions légales sont régies par les lois françaises.
          Tout litige relatif à leur interprétation et/ou à leur exécution
          relève des tribunaux français compétents.
        </p>
      </div>
      <div>
        <h2>11. Contact</h2>
        <p>
          Pour toute question ou réclamation concernant les mentions légales,
          veuillez nous contacter à : dev.frenchlod@gmail.com
        </p>
      </div>
    </StyledMentions>
  );
};

export default Mentions;
const StyledMentions = styled.div`
  padding: 10px;
  h1 {
    color: ${COLORS.second};
  }
  > div {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    /* padding: 10px; */
    strong {
      color: ${COLORS.second};
    }
    h2 {
      margin-bottom: 5px;
    }
    h2,
    p {
      color: ${COLORS.light};
    }
  }
`;
