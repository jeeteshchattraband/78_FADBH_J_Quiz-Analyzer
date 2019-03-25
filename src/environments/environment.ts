// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  analytics: {
    trackingId: 'UA-255878-12'
  },
  firebase: {
    apiKey: 'AIzaSyCZrOjw3lq928g4IAzKXRS2CT0fzpoIKfQ',
    authDomain: 'math-worksheet-generator-495d6.firebaseapp.com',
    databaseURL: 'https://math-worksheet-generator-495d6.firebaseio.com',
    projectId: 'math-worksheet-generator-495d6',
    storageBucket: 'math-worksheet-generator-495d6.appspot.com',
    messagingSenderId: '14382852324'
  }
};
