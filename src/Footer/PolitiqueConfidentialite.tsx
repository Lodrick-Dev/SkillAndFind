import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/styles";

const PolitiqueConfidentialite = () => {
  return (
    <StyledPolitiqueConfidentialite>
      <h1>Politique de Confidentialité de SkillXP</h1>
      <div>
        <h2>1. Collecte de Données Personnelles : </h2>
        <p>
          Nous ne collectons ni ne sauvegardons aucune donnée personnelle. Les
          données présentes dans les CV téléchargés par les utilisateurs sont
          uniquement analysées pour fournir des suggestions de métiers et ne
          sont pas stockées sur nos serveurs.
        </p>
      </div>
      <div>
        <h2>2. Utilisation des Données :</h2>
        <p>
          Les informations contenues dans les CV sont utilisées exclusivement
          pour générer des suggestions de métiers adaptées aux compétences,
          parcours et expériences des utilisateurs. Nous utilisons Google
          Analytics pour suivre les visites sur notre site afin d'améliorer
          l'expérience utilisateur, mais cela n'implique pas la collecte de
          données personnelles.
        </p>
      </div>
      <div>
        <h2>3. Partage des Données :</h2>
        <p>Nous ne partageons aucune donnée personnelle avec des tiers.</p>
      </div>
      <div>
        <h2>4. Stockage et Sécurité :</h2>
        <p>
          Aucune donnée personnelle n'est sauvegardée sur nos serveurs ou dans
          une base de données. Toutes les analyses sont effectuées en temps réel
          et les données sont immédiatement supprimées après l'analyse.
        </p>
      </div>
      <div>
        <h2>5. Droits des Utilisateurs :</h2>
        <p>
          Étant donné que nous ne sauvegardons aucune donnée personnelle, les
          droits d'accès, de modification et de suppression des données ne
          s'appliquent pas.
        </p>
      </div>
      <div>
        <h2>6. Cookies et Technologies Similaires :</h2>
        <p>
          Nous utilisons des cookies pour améliorer l'expérience utilisateur sur
          notre site. Les cookies nous permettent de fournir un service plus
          personnalisé et de faciliter la navigation sur notre site.
        </p>
      </div>
      <div>
        <h2>7. Mineurs :</h2>
        <p>
          Notre application est destinée aux demandeurs d'emploi et n'est pas
          conçue pour les mineurs de moins de 16 ans.
        </p>
      </div>
      <div>
        <h2>8. Modifications de la Politique de Confidentialité :</h2>
        <p>
          Cette politique de confidentialité peut être modifiée à tout moment
          sans préavis. Nous vous encourageons à consulter cette page
          régulièrement pour prendre connaissance des éventuelles modifications.
        </p>
      </div>
      <div>
        <h2>9. Coordonnées de Contact :</h2>
        <p>
          Pour toute question ou préoccupation concernant cette politique de
          confidentialité, vous pouvez nous contacter à l'adresse suivante :
          dev.frenchlod@gmail.com.
        </p>
      </div>
      <div>
        <h2></h2>
      </div>
    </StyledPolitiqueConfidentialite>
  );
};

export default PolitiqueConfidentialite;

const StyledPolitiqueConfidentialite = styled.div`
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
