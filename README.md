# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Créer une application qui intègre un backend Flask avec une base de données SQLite et un frontend React, avec gestion des CORS, est un projet assez commun mais complexe. Voici un guide complet pour construire ce type de système étape par étape.

Étape 1 : Préparer l'environnement de développement

1. **Installer Python et Flask** :
   - Installez Python depuis [python.org](https://www.python.org/downloads/).
   - Installez Flask en utilisant pip : `pip install flask`.

2. **Installer SQLite** :
   - SQLite est généralement inclus avec Python, mais si nécessaire, vous pouvez le télécharger depuis [sqlite.org](https://www.sqlite.org/download.html).

3. **Installer Node.js et React** :
   - Téléchargez et installez Node.js depuis [nodejs.org](https://nodejs.org/).
   - Créez une nouvelle application React en utilisant `npx create-react-app mon-app`.

4. **Installer les dépendances supplémentaires** :
   - Flask-CORS : `pip install flask-cors` pour gérer les requêtes cross-origin.
   - Autres dépendances React (si nécessaire).


Étape 2 : Exécuter l'application

1. **Démarrer le serveur Flask** :
   - Ouvrez un terminal, naviguez vers le dossier de votre projet Flask, et lancez `python app.py`.

2. **Démarrer l'application React** :
   - Ouvrez un autre terminal, naviguez vers le dossier de votre projet React, et lancez `npm run dev`.
