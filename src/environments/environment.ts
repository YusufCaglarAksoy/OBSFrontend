// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from "firebase";

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyAzke4nXcLOVmNOHerUdjQ8A9jEb1YCy0Q",
    authDomain: "ogrencibilgisistemifirat.firebaseapp.com",
    projectId: "ogrencibilgisistemifirat",
    storageBucket: "ogrencibilgisistemifirat.appspot.com",
    messagingSenderId: "326721811805",
    appId: "1:326721811805:web:ce145de684b0da3495a4b4",
    measurementId: "G-F3L662J6VR"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
