!function(n){try{n=angular.module("convention")}catch(e){n=angular.module("convention",[])}n.run(["$templateCache",function(n){n.put("js/chat/chat-detail.html",'<!--\n  This template loads for the \'tab.friend-detail\' state (app.js)\n  \'friend\' is a $scope variable created in the FriendsCtrl controller (controllers.js)\n  The FriendsCtrl pulls data from the Friends service (service.js)\n  The Friends service returns an array of friend data\n-->\n<ion-view view-title="{{chat.name}}">\n  <ion-content class="padding">\n    <img ng-src="{{chat.face}}" style="width: 64px; height: 64px">\n    <p>\n      {{chat.lastText}}\n    </p>\n  </ion-content>\n</ion-view>')}])}();