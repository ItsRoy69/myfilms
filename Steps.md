```
$ npx create-create-react-app client[Frontend]
$ npm i styled-components
$ npm i react-router-dom
$ npm i react-slick [For slider effect in Homepage]
$ npm install slick-carousel [Install slick-carousel for css and font slider effect in Homepage]
$ npm i firebase
$ npm install -g node-firestore-import-export
-------------------------------------------------------------
Go to APIcall Folder
$ firestore-import -a privateKey.json -b MoviesAPI.json [API calling inside firebase]
-------------------------------------------------------------
Client
$ npm i react-redux
$ npm install @reduxjs/toolkit
```

Go to firebase and give project name as "myfilms" -> Continue -> Toggle off the Google Analytics -> Continue -> Project Overview -> Project Settings -> Create new webapp by clicking "</>" icon -> Register with App Nickname 'myfilms' -> Click on checkbox of 'Set up Firebase Hosting for this app' -> Click 'Register App' -> Next -> Continue to console -> Scroll down to messenger Web App -> Click on 'Config Part' and copy the code and paste in 'Firebase.js'


Project settings -> Click 'Service accounts' -> Click 'Generate Private Key' -> Download the json file in "client" -> Rename it as 'privateKey' -> Add another json file 'MoviesAPI'

Authentication -> Sign-in method -> Google -> Enable -> Save.

Hosting -> 
```
$ npm install -g firebase-tools
$ firebase login
$ firebase init
$ firebase deploy

````
