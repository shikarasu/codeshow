﻿(function () {
    "use strict";

    WinJS.UI.Pages.define("/demos/authentication/wams/wams.html", {
        ready: function (element, options) {
            //microsoft
            var microsoftSection = element.querySelector("#microsoft");
            microsoftSection.querySelector("button").onclick = function (e) {
                app.client.login("microsoftaccount")
                    .done(function (results) {
                        microsoftSection.querySelector("div").innerText += "User ID: " + results.userId;
                    }, function (error) { /* gulp */ });
            };

            ////facebook
            //var facebookSection = element.querySelector("#facebook");
            //q("button", facebookSection).onclick = function (e) {
            //    app.client.login("facebook")
            //        .done(function (results) {
            //                facebookSection.querySelector("div").innerText += "User ID: " + results.userId;
            //        }, function (error) { debugger;  });
            //};

            ////twitter
            //var twitterSection = element.querySelector("#twitter");
            //twitterSection.querySelector("button").onclick = function (e) {
            //    app.client.login("twitter")
            //        .done(function (results) {
            //            twitterSection.querySelector("div").innerText += "User ID: " + results.userId;
            //        }, function (error) { debugger; });
            //};

            ////google
            //var googleSection = element.querySelector("#google");
            //googleSection.querySelector("button").onclick = function (e) {
            //    app.client.login("google")
            //        .done(function (results) {
            //            googleSection.querySelector("div").innerText += "User ID: " + results.userId;
            //        }, function (error) { debugger; });
            //};
        }
    });
})();
