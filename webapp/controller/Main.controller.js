sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("student00.sap.training.helloworld.controller.Main", {
            onInit: function () {
        

            },

            onSayHello: function() {
                alert("Hallo Welt");
            }
        });
    });
