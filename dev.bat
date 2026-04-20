@echo off
REM 🎀 M&N Cosmetics - Script de développement pour Windows

setlocal enabledelayedexpansion

if "%1"=="" (
  echo.
  echo 🎀 M&N Cosmetics - Commandes disponibles
  echo.
  echo Developpement :
  echo   dev.bat up              - Lancer les services Docker
  echo   dev.bat down            - Arrêter les services
  echo   dev.bat logs            - Voir les logs en direct
  echo   dev.bat build           - Rebuilder les images
  echo   dev.bat restart         - Redémarrer les services
  echo.
  echo Tests et Qualite :
  echo   dev.bat test            - Tester la construction Docker
  echo   dev.bat clean           - Nettoyer les images/conteneurs
  echo.
  echo Git :
  echo   dev.bat push ^<message^ - Ajouter, commiter et pousser
  echo   dev.bat status          - Voir l'etat Git
  echo   dev.bat pull            - Tirer les mises a jour
  echo.
  goto end
)

if "%1"=="up" (
  echo Lancement des services...
  docker compose up -d
  echo ✅ Services lances sur http://localhost:8080
  goto end
)

if "%1"=="down" (
  echo Arret des services...
  docker compose down
  echo ✅ Services arretes
  goto end
)

if "%1"=="logs" (
  docker compose logs -f web
  goto end
)

if "%1"=="build" (
  echo Build en cours...
  docker compose up --build -d
  echo ✅ Build termine
  goto end
)

if "%1"=="restart" (
  echo Redemarrage des services...
  docker compose restart
  echo ✅ Services redémarres
  goto end
)

if "%1"=="test" (
  echo Test de la construction Docker...
  docker build -t mn-cosmetics:test .
  echo ✅ Build Docker reussi
  goto end
)

if "%1"=="clean" (
  echo Nettoyage complet...
  docker compose down -v
  docker image rm mn-cosmetics:test 2>nul
  echo ✅ Nettoyage termine
  goto end
)

if "%1"=="status" (
  git status
  goto end
)

if "%1"=="pull" (
  echo Tirage des mises a jour...
  git pull
  echo ✅ Mises a jour tirees
  goto end
)

if "%1"=="push" (
  if "%2"=="" (
    echo Erreur : veuillez fournir un message de commit
    echo Usage: dev.bat push "votre message"
    goto end
  )
  echo Ajout des fichiers...
  git add -A
  echo Commit en cours...
  git commit -m "%2"
  echo Poussage en cours...
  git push
  echo ✅ Pousse avec succes
  goto end
)

echo Commande inconnue: %1
goto end

:end
endlocal
