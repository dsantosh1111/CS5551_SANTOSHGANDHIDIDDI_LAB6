// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
var app=angular.module('myapp',[]);
app.controller('mycontroller',function ($scope) {
    $scope.onSignIn=function (googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
    }
});


var x=angular.module('mashup',[])
x.controller('mycont',function ($scope,$http) {
    $scope.searchclick=function () {
        var i = $scope.input;
        var z = i.replace(" ", "+");
        var handler = $http.get("https://kgsearch.googleapis.com/v1/entities:search?query=" + z + "&key=AIzaSyAoVY5oQcNNpJo7SPeIC6c88hD7Ugy6ZeQ&limit=1&indent=True")
        handler.success(function (data) {
            if (data != null) {
                // document.getElementById('out').innerHTML="Search Name:"+data.itemListElement[0].result.name+"</br>"+"Description:"+data.itemListElement[0].result.description+"</br>"+"wiki:"+data.itemListElement[0].result.image.url+"</br>"+"DetailedDescription:"+data.itemListElement[0].result.detailedDescription.articleBody+"</br>"+"Source"+data.itemListElement[0].result.url;
                //document.getElementById('ne').innerHTML="negative"+data.negative;

                //    document.getElementById('out').innerHTML =data.itemListElement[0].result.name;
                $scope.test = {
                    "name": data.itemListElement[0].result.name,
                    "disc": data.itemListElement[0].result.description,
                    "link": data.itemListElement[0].result.image.contentUrl,
                    "detailed": data.itemListElement[0].result.detailedDescription.articleBody,
                    "web": data.itemListElement[0].result.url,
                    "wiki": data.itemListElement[0].result.detailedDescription.url
                }
                document.getElementById('se').style.display = 'block';
            }
        })
        handler.error(function (data) {
            alert("There was some error processing your request. Please try after some time.");
        })

        hand.success(function (res) {
            document.getElementById('trans').innerHTML=res.text[0];
        })
    }

    // $scope.translate=function (y) {
    //     var hand=$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170206T054715Z.79fffb75ffe99e6e.ee7075626f5e0a731fc17fee095054467a4c665c&text="+y+"&lang=hi&callback=");
    //     hand.success(function (res)
    //     {
    //         document.getElementById('trans').innerHTML=res.text[0];
    //     })
    //
    // }
    $scope.voice=function (audio) {
        responsiveVoice.speak(audio);
    }
});

function signout() {

    window.location="signout.html"

}

function backtologin() {
    window.location="login.html"
}

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
