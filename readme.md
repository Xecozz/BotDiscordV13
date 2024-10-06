# Mon Bot Discord

Ce projet est un bot Discord avec diverses commandes administratives et informatives.

## Installation

1. Clonez le dépôt :
    ```sh
    git clone <url-du-repo>
    ```
2. Installez les dépendances :
    ```sh
    npm install
    ```

## Utilisation

Pour démarrer le bot, exécutez la commande suivante :
```sh
node 

index.js


```

## Commandes

### Commandes Administratives

- `annonce.js` : Gérer les annonces.
- `ban.js` : Bannir un utilisateur.
- `clear.js` : Effacer des messages.
- `bot.js` : Commandes de base pour le bot.
- `help.js` : Afficher l'aide.
- `invite.js` : Gérer les invitations.
- `ticket.js` : Gérer les tickets.

### Commandes Informatives

- `avatar.js` : Afficher l'avatar d'un utilisateur.
- `ping.js` : Vérifier la latence du bot.
- `serverinfo.js` : Afficher les informations du serveur.
- `userinfo.js` : Afficher les informations d'un utilisateur.
- `utilisateur.js` : Commandes utilisateur.

## Événements

- `guildMemberAdd.js` : Gérer l'événement d'ajout d'un membre.
- `guildMemberRemove.js` : Gérer l'événement de suppression d'un membre.
- `ready.js` : Gérer l'événement de démarrage du bot.

## Configuration

Modifiez le fichier [config.js](config.js) pour configurer le bot.

## Émojis

Gérez les émojis dans le fichier [emojis.js](emoji/emojis.js).
