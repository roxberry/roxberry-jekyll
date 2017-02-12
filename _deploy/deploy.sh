#for pushing to Github and Azure
grunt

cp -R _site/* ../roxberry-deploy/.

cd ../roxberry-deploy
echo $pwd

git add -A && git commit . -m "deployment $(date +"%m_%d_%Y_%H:%M:%S")" && git push

cd ../roxberry
echo $pwd
