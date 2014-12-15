// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .




$(document).ready(function() {


    $("body").iealert({
        support: "ie8",
        text: "Our website has detected that you are using an outdated browser. Using your current browser will prevent you from accessing features on our website. An upgrade is not required, but is strongly recommend to improve your browsing experience on our website.",
        upgradeLink: "https://www.google.com/intl/en/chrome/browser/"
    });


    var time = new Date();
    time = new Date(2015, 10, 15, 0, 0);
    $('#defaultCountdown').countdown({
        until: time
    });

    $('#removeCountdown').toggle(function() {
        $(this).text('Re-attach');
        $('#defaultCountdown').countdown('destroy');
    }, function() {
        $(this).text('Remove');
        $('#defaultCountdown').countdown({
            until: time
        });
    });


    $('.show').fadeIn(600);

    (function() {

        var button = document.getElementById('cn-button'),
            wrapper = document.getElementById('cn-wrapper');

        //open and close menu when the button is clicked
        var open = false;
        button.addEventListener('click', handler, false);

        function handler() {
            if (!open) {
                this.innerHTML = "Close";
                classie.add(wrapper, 'opened-nav');
            } else {
                this.innerHTML = "Menu";
                classie.remove(wrapper, 'opened-nav');
            }
            open = !open;
        }

        function closeWrapper() {
            classie.remove(wrapper, 'opened-nav');
        }

    })();

    $(function() {
        $('.closed').click(function() {
            alert("Registration will be open soon, please check back later.");
        });

    });


    var ModalEffects = (function() {

        function init() {

            var overlay = document.querySelector('.md-overlay');

            [].slice.call(document.querySelectorAll('.md-trigger')).forEach(function(el, i) {

                var modal = document.querySelector('#' + el.getAttribute('data-modal')),
                    close = modal.querySelector('.md-close');

                function removeModal(hasPerspective) {
                    classie.remove(modal, 'md-show');

                    if (hasPerspective) {
                        classie.remove(document.documentElement, 'md-perspective');
                    }
                }

                function removeModalHandler() {
                    removeModal(classie.has(el, 'md-setperspective'));
                }

                el.addEventListener('click', function(ev) {
                    classie.add(modal, 'md-show');
                    overlay.removeEventListener('click', removeModalHandler);
                    overlay.addEventListener('click', removeModalHandler);

                    if (classie.has(el, 'md-setperspective')) {
                        setTimeout(function() {
                            classie.add(document.documentElement, 'md-perspective');
                        }, 25);
                    }
                });

                close.addEventListener('click', function(ev) {
                    ev.stopPropagation();
                    removeModalHandler();
                });

            });

        }

        init();

    })();




    ;
    (function($, window, undefined) {

        'use strict';

        // global
        var Modernizr = window.Modernizr;

        $.CBPContentSlider = function(options, element) {
            this.$el = $(element);
            this._init(options);
        };

        // the options
        $.CBPContentSlider.defaults = {
            // default transition speed (ms)
            speed: 500,
            // default transition easing
            easing: 'ease-in-out',
            // current item's index
            current: 0
        };

        $.CBPContentSlider.prototype = {
            _init: function(options) {

                // options
                this.options = $.extend(true, {}, $.CBPContentSlider.defaults, options);
                // the items
                this.$items = this.$el.find('ul > li').hide();
                // the tabs
                this.$tabs = this.$el.find('nav > a');
                // total tabs
                var tabsCount = this.$tabs.length;
                // set each tab width
                this.$tabs.css('width', 100 / tabsCount + '%');
                // current and old item's index
                this.current = this.options.current;
                this.old = 0;
                // check if the items are currently moving
                this.isAnimating = false;
                // support for CSS Transitions
                this.support = Modernizr.csstransitions;
                // transition end event name
                var transEndEventNames = {
                    'WebkitTransition': 'webkitTransitionEnd',
                    'MozTransition': 'transitionend',
                    'OTransition': 'oTransitionEnd',
                    'msTransition': 'MSTransitionEnd',
                    'transition': 'transitionend'
                };
                this.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')] + '.cbpContentSlider';
                // set the transition to the items
                if (this.support) {
                    this.$items.css('transition', 'left ' + this.options.speed + 'ms ' + this.options.easing);
                }
                // update current tab
                this._updateTabs();
                // show current item
                this.$items.eq(this.current).show();
                // initialize/bind the events to the tabs
                this._initEvents();

            },
            _updateTabs: function() {
                this.$tabs.eq(this.old).removeClass('rc-active').end().eq(this.current).addClass('rc-active');
            },
            _initEvents: function() {

                var self = this;
                this.$tabs.on('click.cbpContentSlider', function(event) {

                    var idx = $(this).index();

                    if (idx !== self.current && !self.isAnimating) {

                        self.isAnimating = true;

                        var direction = idx > self.current ? 'right' : 'left',
                            $oldItem = self.$items.eq(self.current),
                            $newItem = self.$items.eq(idx);

                        // update current and old value
                        self.old = self.current;
                        self.current = idx;

                        // apply initial style..
                        if (self.support) {
                            // translate might be more efficient here. Left out because of a rounding and rendering problem in Chrome (Version 24.0.1312.52)
                            $newItem.css('left', direction === 'right' ? '100%' : '-100%');
                        }
                        $newItem.show();

                        // ..and bind the transitionend event
                        var transitionendfn = function() {
                            $oldItem.off(self.transEndEventName).hide();
                            self.isAnimating = false;
                        };

                        if (self.support) {
                            $oldItem.on(self.transEndEventName, transitionendfn);
                        } else {
                            transitionendfn.call();
                        }

                        // apply final style
                        if (self.support) {
                            setTimeout(function() {
                                // translate might be more efficient here. Left out because of a rounding and rendering problem in Chrome (Version 24.0.1312.52)
                                $oldItem.css('left', direction === 'right' ? '-100%' : '100%');
                                $newItem.css('left', '0%');
                            }, 25);
                        }

                        // update current tab
                        self._updateTabs();

                    }

                    event.preventDefault();

                });

            },
            destroy: function() {
                if (this.support) {
                    this.$items.css('transition', 'none');
                }
                this.$items.css('left', 0).show();
                this.$tabs.off('.cbpContentSlider').removeClass('rc-active');
            }
        };

        var logError = function(message) {
            if (window.console) {
                window.console.error(message);
            }
        };

        $.fn.cbpContentSlider = function(options) {
            if (typeof options === 'string') {
                var args = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var instance = $.data(this, 'cbpContentSlider');
                    if (!instance) {
                        logError("cannot call methods on cbpContentSlider prior to initialization; " +
                            "attempted to call method '" + options + "'");
                        return;
                    }
                    if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                        logError("no such method '" + options + "' for cbpContentSlider instance");
                        return;
                    }
                    instance[options].apply(instance, args);
                });
            } else {
                this.each(function() {
                    var instance = $.data(this, 'cbpContentSlider');
                    if (instance) {
                        instance._init();
                    } else {
                        instance = $.data(this, 'cbpContentSlider', new $.CBPContentSlider(options, this));
                    }
                });
            }
            return this;
        };

    })(jQuery, window);
  $(function() {
                $('#cbp-contentslider').cbpContentSlider();
            });
});