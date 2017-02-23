# Installation de l'environnement

## Node JS

A récupérer sur [le site nodeJS](https://nodejs.org). Prendre la version stable (actuellement 7.5).

## Modules Node nodeJS
Une fois nodejs installé, lancer dans une invite de commande :
```
npm i -g ionic typings cordova karma-cli
```
Une fois install de ionic terminer, se mettre dans le projet en invité de cmd
```
npm i 
```
# Installation de l'IDE

Le développement d'Ange Gardien est prévu pour être effectué dans l'outil __Visual Studio Code__

## Extensions à installer

Les extensions suivantes doivent être installés pour faciliter le développement :
* __tslint__ : Affiche les erreurs TypeScript directement dans l'éditeur, pour un code toujours plus propre !
* __Auto-open markdown preview__ : Permet d'ouvrir la preview des fichiers de MarkDown automatiquement.
* __EditorConfig for VS Code__ : Permet de normaliser les indentations et autres configurations générique de l'éditeur.

## Mise à jour des Settings

Allez dans : _Fichier > Préférences > Paramètres_. Dans l'onglet de droite :
```
// Placez vos paramètres dans ce fichier pour remplacer les paramètres par défaut
{

  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/plugins": true,
    "**/platforms": true,
    "**/resources": true
  }
}
```
