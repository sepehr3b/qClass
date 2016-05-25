angular.module('starter.controllers', [])

    .controller('FeedControllerUniversity', function($scope, $http) {
      url = "http://www.aparat.com/etc/api/videobyuser/username/popcornshow";
      $http.get(url).
          success(function (data) { $scope.data = data['videobyuser']; });


    })


    .controller('FeedControllerArc', function($scope, $http) {
      // init a empty scope variable
      $scope.arc_posts = [];

      // set the feed url
      var url = "http://qiau.ac.ir/announce/board/RssBoard.aspx?id=7";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter+ encodeURIComponent(url));
      // after the request is successful
      request.success(function(res){
        // pass the requested entries to the view
        $scope.arc_posts = res.responseData.feed.entries;
      });
    })


    .controller('FeedControllerCom', function($scope, $http) {
      // init a empty scope variable
      $scope.com_posts = [];

      // set the feed url
      var url = "http://qiau.ac.ir/announce/board/RssBoard.aspx?id=0";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter+ encodeURIComponent(url));
      // after the request is successful
      request.success(function(res){
        // pass the requested entries to the view
        $scope.com_posts = res.responseData.feed.entries;
      });
    })

    .controller('FeedControllerCvl', function($scope, $http) {
      // init a empty scope variable
      $scope.cvl_posts = [];

      // set the feed url
      var url = "http://qiau.ac.ir/announce/board/RssBoard.aspx?id=2";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter+ encodeURIComponent(url));
      // after the request is successful
      request.success(function(res){
        // pass the requested entries to the view
        $scope.cvl_posts = res.responseData.feed.entries;
      });
    })

    .controller('FeedControllerFani', function($scope, $http) {
      // init a empty scope variable
      $scope.fani_posts = [];

      // set the feed url
      var url = "http://qiau.ac.ir/announce/board/RssBoard.aspx?id=3";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter+ encodeURIComponent(url));
      // after the request is successful
      request.success(function(res){
        // pass the requested entries to the view
        $scope.fani_posts = res.responseData.feed.entries;
      });
    })


    .controller('FeedControllerInd', function($scope, $http) {
      // init a empty scope variable
      $scope.ind_posts = [];

      // set the feed url
      var url = "http://qiau.ac.ir/announce/board/RssBoard.aspx?id=4";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter+ encodeURIComponent(url));
      // after the request is successful
      request.success(function(res){
        // pass the requested entries to the view
        $scope.ind_posts = res.responseData.feed.entries;
      });
    })


    .controller('FeedControllerOloum', function($scope, $http) {
      // init a empty scope variable
      $scope.olm_posts = [];

      // set the feed url
      var url = "http://qiau.ac.ir/announce/board/RssBoard.aspx?id=8";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter+ encodeURIComponent(url));
      // after the request is successful
      request.success(function(res){
        // pass the requested entries to the view
        $scope.olm_posts = res.responseData.feed.entries;
      });
    })


    .controller('FeedControllerMng', function($scope, $http) {
      // init a empty scope variable
      $scope.mng_posts = [];

      // set the feed url
      var url = "http://qiau.ac.ir/announce/board/RssBoard.aspx?id=1";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter+ encodeURIComponent(url));
      // after the request is successful
      request.success(function(res){
        // pass the requested entries to the view
        $scope.mng_posts = res.responseData.feed.entries;
      });
    })

    .controller('FeedControllerNot', function($scope, $http) {
        url = "https://www.kimonolabs.com/api/aj2nrnmo?apikey=BwdBz38dlalVvIqxZmIMbaGReVjWDPZI&callback=JSON_CALLBACK";
        $http.jsonp(url).
            success(function (data) { $scope.data = data['results']['collection1']; });


    })


    .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})


angular.module('alert',[])
    .controller('PopupCtrl',function($scope, $ionicPopup) {

      $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
          title: '!راهنما',
          templateUrl: 'templates/Pop.html',
          buttons:[{
            text:'بازگشت',
            type: 'button-assertive'

          }]
        });
      }});


angular.module('Up',[])
  .controller('UpCtrl',function($scope, $ionicScrollDelegate) {

      $scope.scrollTop = function() {
    $ionicScrollDelegate.scrollTop();
  };
      $scope.scrollBo = function() {
        $ionicScrollDelegate.scrollBottom();
      };
})

