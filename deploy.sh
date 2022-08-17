echo BUILDING APP
cd ./app
npm run build
cd ..
git add .
git commit -m "DEPLOY"
git push