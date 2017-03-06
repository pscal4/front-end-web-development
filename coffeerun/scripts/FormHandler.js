(function(window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector:' + selector);
        }
    }

    // This is thea ddSubmitHandler with the submit handler as anonymous
    // as shown in the book
    FormHandler.prototype.origaddSubmitHandler = function(fn) {
        console.log('Setting submit handler for form');
        this.$formElement.on('submit', function(event) {
            event.preventDefault();

            var data = {};
            $(this).serializeArray().forEach(function(item) {
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);
            });
            console.log(data);
            fn(data);
            this.reset();
            this.elements[0].focus();
        });
    };

    // I am trying to refactor so that it calls a named function on
    // the FormHandler. The part that is difficult is passing in the "fn"
    // parameter.
    FormHandler.prototype.addSubmitHandler = function(fn) {
        console.log('Setting submit handler for form');
        this.$formElement.on('submit', {createOrder: fn }, this.submitForm);
    };

    FormHandler.prototype.submitForm = function(event, fn) {
        console.log("listener");
        event.preventDefault();

        var data = {};
        $(this).serializeArray().forEach(function(item) {
            data[item.name] = item.value;
            console.log(item.name + ' is ' + item.value);
        });
        console.log(data);
        console.log('fn is ' + event.data.createOrder);
        event.data.createOrder(data);
        this.reset();
        this.elements[0].focus();
    }

    App.FormHandler = FormHandler;
    window.App = App;
})(window);
