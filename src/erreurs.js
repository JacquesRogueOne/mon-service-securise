class ErreurModele extends Error {}
class ErreurAvisInvalide extends ErreurModele {}
class ErreurCategorieInconnue extends ErreurModele {}
class ErreurDateRenouvellementInvalide extends ErreurModele {}
class ErreurDonneesStatistiques extends ErreurModele {}
class ErreurEmailManquant extends ErreurModele {}
class ErreurLocalisationDonneesInvalide extends ErreurModele {}
class ErreurMesureInconnue extends ErreurModele {}
class ErreurNomServiceDejaExistant extends ErreurModele {}
class ErreurNomServiceManquant extends ErreurModele {}
class ErreurRisqueInconnu extends ErreurModele {}
class ErreurStatutMesureInvalide extends ErreurModele {}
class ErreurUtilisateurExistant extends ErreurModele {}

module.exports = {
  ErreurAvisInvalide,
  ErreurCategorieInconnue,
  ErreurDateRenouvellementInvalide,
  ErreurDonneesStatistiques,
  ErreurEmailManquant,
  ErreurLocalisationDonneesInvalide,
  ErreurMesureInconnue,
  ErreurModele,
  ErreurNomServiceDejaExistant,
  ErreurNomServiceManquant,
  ErreurRisqueInconnu,
  ErreurStatutMesureInvalide,
  ErreurUtilisateurExistant,
};
