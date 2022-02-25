# map-interactive_leaflet

Protoype d'une carte interactive sur la thématique des bières de microbrasserie du Québec 

#### Énoncé du travail

1. Votre application doit pouvoir fonctionner (sans bogues);
2. Elle devra avoir minimalement les éléments suivants :
    * Une bande de titre;
    * Une échelle;
    * Une barre de recherche par adresse ou point d’intérêt;
    * Une icône pour changer le fond de carte;
    * 2 couches (une locale et l’autre en service) d’informations (au moins une couche avec
      popup ou tooltip);
    * Un point de géolocalisation de l’usager;
    * Une légende comprenant les différentes couches de la carte (la légende peut-être
      dynamique soit par programmation ou statique, c’est-à-dire une image superposée à la
      carte);
    * Votre nom;
    * Une couche pour la météo (icône et texte météo)1.
    * Une requête pour que l’usage puisse filtrer vos données (voir les vidéos sur les requêtes
      tabulaires et spatiales).
    * Elle devra être réactive2 (vous pouvez utiliser Bootstrap);
    * Avoir au moins un objet JavaScript (littéral ou via une classe)

#### Outils

  - HTML
  - CSS
  - JavaScript
  - Esri
  - Leaflet
  
 #### Sujet
 
 Le sujet de la carte est la présence des bières de microbrasserie au Québec plus
précisément où peut-on se les procurer. On peut donc voir les différentes
microbrasseries qui couvrent la carte, mais aussi identifier les détaillants de bières
spécialisés membres de cette association.
  
 #### Fonctionnalités
 
 La carte a diverses fonctionnalités. Il est possible de voir la météo de Montréal, mais
aussi d’afficher l’adresse physique et web de chacune des microbrasseries présentent
sur la carte et représenté par des chopes de bière. Pour ce qui est des dépanneurs, on
peut voir leur emplacement ainsi que leur nom lorsqu’on clique sur l'icône de canettes.

L’utilisateur est la possibilité de choisir le style de son fond de carte parmis 3 looks
différents soient: crayon de couleur, gris ou navigation. Il peut aussi choisir de retirer les
icônes de météo, de canettes ou de chopes selon ce qu’il désire consulter.

Un bouton lui permet de se géolocaliser afin de vérifier quel commerce se trouve autour
de lui. Les données de latitude et de longitude s'affichent alors en haut de la carte. Il
peut aussi effectuer une recherche afin de trouver les attractions ou une adresse
n’importe où dans le monde.

Il est finalement possible de filtrer les diverses microbrasseries par région administrative
afin de préparer notre prochain road trip sur les routes des bières fait au Québec !
 
  
 #### Sources
 
 Détaillants de bières spécialisés du Québec :
 https://dbsq.ca/detaillants/
 
 Microbrasseries:
 https://data.world/maxclem/microbrasseriesquebec
