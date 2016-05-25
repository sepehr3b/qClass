// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers','alert','Up','ngCordova','ionic-material'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
      Ionic.io();

      var push = new Ionic.Push({});

      push.register(function(token) {
          // Log out your device token (Save this!)
          console.log("Got Token:",token.token);
      });



    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.university', {
    url: "/university",
    views: {
      'menuContent': {
        templateUrl: "templates/university.html"
      }
    }
  })
      .state('app.oloumt', {
        url: "/oloumt",
        views: {
          'menuContent': {
            templateUrl: "templates/oloumt.html"
          }
        }
      })

      .state('app.com', {
        url: "/com",
        views: {
          'menuContent': {
            templateUrl: "templates/com.html"
          }
        }
      })

      .state('app.mng', {
        url: "/mng",
        views: {
          'menuContent': {
            templateUrl: "templates/mng.html"
          }
        }
      })

      .state('app.ind', {
        url: "/ind",
        views: {
          'menuContent': {
            templateUrl: "templates/ind.html"
          }
        }
      })

      .state('app.cvl', {
        url: "/cvl",
        views: {
          'menuContent': {
            templateUrl: "templates/cvl.html"
          }
        }
      })

      .state('app.arc', {
        url: "/arc",
        views: {
          'menuContent': {
            templateUrl: "templates/arc.html"
          }
        }
      })

      .state('app.fani', {
        url: "/fani",
        views: {
          'menuContent': {
            templateUrl: "templates/fani.html"
          }
        }
      })

      .state('app.about', {
        url: "/about",
        views: {
          'menuContent': {
            templateUrl: "templates/about.html"
          }
        }
      })

            .state('app.etela', {
              url: "/etela",
              views: {
                'menuContent': {
                  templateUrl: "templates/etela.html"
                }
              }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/etela');
});
