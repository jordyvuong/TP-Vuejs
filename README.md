# TP Machine EFREI - Projet HomeMade

**HomeMade** est une application web conçue pour offrir une expérience utilisateur fluide autour de la découverte de plats et de cuisiniers, avec un système de panier et une gestion utilisateur.

## Fonctionnalités principales

- **Catalogue de cuisiniers :**
  - Affichage des chefs disponibles avec leurs spécialités.
  - Possibilité de consulter les plats proposés par chaque chef.

- **Gestion du panier :**
  - Ajout de plats au panier depuis la page dédiée à un chef.
  - Calcul automatique du total des articles dans le panier.
  - Retrait des articles directement depuis la page panier.
  - Le panier se reset après chaque deconnexion. 

- **Gestion des utilisateurs :**
  - Connexion/déconnexion.
  - Accès conditionnel à certaines fonctionnalités (par exemple, ajout au panier uniquement après connexion).

## Structure du projet

- **Composants Vue :**
  - `NavBar.vue` : Barre de navigation principale, gérant l’affichage conditionnel des boutons de connexion/déconnexion.
  - `ChefCard.vue` : Carte affichant les informations principales d’un chef.
  - `ChefDetails.vue` : Page détaillant les plats d’un chef et permettant leur ajout au panier.
  - `Cart.vue` : Page affichant le contenu du panier, le total des articles, et permettant de retirer des articles.

- **Stores Pinia :**
  - `AuthStore` : Gestion des utilisateurs connectés et de leurs états d’authentification.
  - `CartStore` : Gestion des articles dans le panier et du calcul du total.

- **Pages principales :**
  - `Home.vue` : Page d’accueil avec liens vers les différentes sections.
  - `Chefs.vue` : Liste de tous les chefs.
  - `Login.vue` et `Register.vue` : Pages dédiées à l’authentification et à l’inscription.

## Instructions pour le développement

1. **Cloner le dépôt :**
   ```
   git clone [URL]
   cd HomeMade
   ```

2. **Installation des dépendances :**
   ```
   npm install
   ```

3. **Lancer le serveur de développement :**
   ```
   npm run dev
   ```

## Technologies utilisées

- **Vue.js** 
- **Pinia**
- **Vite** 
- **Tailwind CSS** 


