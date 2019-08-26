#!/bin/bash
set -x #echo on

echo "Building package"
node_modules/@angular/cli/bin/ng build --prod --aot 
echo "Syncing package"
rm -rf /var/www/groceries/*
rsync -a ./dist/groceries/ /var/www/groceries/
