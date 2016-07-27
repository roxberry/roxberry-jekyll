grunt && jekyll build

ssh admin@root-roxberries.hopto.org 'rm -rf /volume1/web/site/*'
scp -r _site/* admin@root-roxberries.hopto.org:/volume1/web/site
