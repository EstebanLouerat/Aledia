#!/bin/sh

# sécurité d'exécution des scripts
set -eux

echo "Sélectionner les conf Nginx selon si on veut du TLS ou pas"
if [ "$TLS" = true ]; then
  echo "Supprimer les configuration HTTP Only"
  rm -f /etc/nginx/conf.d/http-only.default.conf
  rm -f /etc/nginx/templates/http-only.conf.template
else
  echo "Supprimer les configuration HTTPS"
  rm -f /etc/nginx/conf.d/https.default.conf
  rm -f /etc/nginx/conf.d/redirect-http-to-https.default.conf
  rm -f /etc/nginx/templates/https.conf.template
  rm -f /etc/nginx/templates/redirect-http-to-https.conf.template
fi

echo "Remplacement du backend sur Azure par celui fourni via la variable BACKEND : $BACKEND"
sed -i "s|http://192.168.0.50:3001|$BACKEND|" /usr/share/nginx/html/static/js/*.js
