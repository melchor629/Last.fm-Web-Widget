//LastSongs.js
;(function(window, $) {
    if("undefined" == typeof $)
        throw new Error("LastSongs requires jQuery");
    var $this,
    NoIMG = 'data:image/png;base64,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';

    /**
     * Part of melchor629's LastFM JS Api
     */
    function LastFM(options) {
        'use strict';
        //Set default options
        var apiKey    = options.apiKey    || '',
            apiUrl    = options.apiUrl    || 'https://ws.audioscrobbler.com/2.0/',

            internalCall = function (params, callbacks, requestMethod, sync) {
                var ajax = $.ajax({
                    url: apiUrl,
                    data: params,
                    dataType: 'json',
                    async: !sync,
                    success: function (json) {
                        if (callbacks.onError && json.error) {
                            callbacks.onError(json, params);
                        } else if (callbacks.onSuccess && !json.error) {
                            callbacks.onSuccess(json);
                        }
                    },
                    type: requestMethod
                });
                if(sync) return JSON.parse(ajax.responseText);
            },
        
            //Simple and normal call
            call = function (method, params, callbacks, requestMethod) {
                params = params || {};
                callbacks = callbacks || {};
                requestMethod = requestMethod || 'GET';
                params.api_key = apiKey;
                params.method = method;
                params.format = 'json';
        
                internalCall(params, callbacks, requestMethod);
            },

            callSync = function(method, params, callbacks, requestMethod) {
                params = params || {};
                callbacks = callbacks || {};
                requestMethod = requestMethod || 'GET';
                params.api_key = apiKey;
                params.method = method;
                params.format = 'json';
        
                return internalCall(params, callbacks, requestMethod, true);
            };

        this.user = {
            getRecentTracks: function (params, callbacks) {
                call('user.getRecentTracks', params, callbacks);
            },
            getInfo: function(params, callbacks) {
                call('user.getInfo', params, callbacks);
            }
        };

        this.artist = {
            getInfoSync: function(params) {
                return callSync('artist.getInfo', params);
            }
        };
    }

    var color = function(red, green, blue, alpha) {
        this.red = red || 0;
        this.blue = blue || 0;
        this.green = green || 0;
        this.alpha = alpha || 1;

        //Clamp values
        if(this.red < 0) this.red = 0;
        if(this.blue < 0) this.blue = 0;
        if(this.green < 0) this.green = 0;
        if(this.alpha < 0) this.alpha = 0;
        if(this.red > 255) this.red = 255;
        if(this.blue > 255) this.blue = 255;
        if(this.green > 255) this.green = 255;
        if(this.alpha > 1) this.alpha = 1;
    };
    color.prototype.add = function(sr, sg, sb) {
        return new color(this.red+sr, this.green+sg, this.blue+sb, this.alpha);
    };
    color.prototype.toString = function() {
        return "rgba("+this.red+", "+this.green+", "+this.blue+", "+this.alpha+")";
    };


    /**
     * LastSongs class
     */
    var LastSongs = function(user, apiKey, elem, timeoutTime, styleSrc) {
        this.LASTFMUSER = user;
        this.apiKey = apiKey;
        this.elem = elem ? elem : $('div.lastfm');
        this.timeoutTime = timeoutTime ? timeoutTime : 10000;
        this.styleSrc = styleSrc ? styleSrc : 'LastSongs.css';

        //Comprueba falta de cosas
        if(!user) {
            $(elem).find('.maravillosoTitulo').text('Invalid User');
            throw 'Invalid User (undefined / null / \'\')';
        }
        if(!apiKey || apiKey === 'YOUR-LASTFM-API-KEY') {
            $(elem).find('.maravillosoTitulo').text('Invalid last fm api key');
            throw 'Invalid lastfm api key (undefined / null / \'\' / \'YOUR-LASTFM-API-KEY\')';
        }

        //Init
        this._addStuff();
        this._loadData();
        this._userIcon();
        this._shadowsListener();
        this._applyTimeout();window.asd = this;
    };

    LastSongs.prototype = {
        //PUBLIC
        colors: {
            BACKGROUND_COLOR: new color(255, 92, 92),
            BACKGROUND_COLOR_ALPHA: new color(255, 92, 92, 0.9),
            TITULO_COLOR: new color(191, 222, 244),
            TITULO: new color(0,0,0),
            ARTISTA: new color(0,100,0),
            ALBUM: new color(123, 123, 123),
            TRACK: new color(228, 226, 165)
        },

        setTimeoutTime: function(sec) {
            if(sec > 1)
                this.timeoutTime = sec * 1000;
            return this;
        },

        setTimeoutTimeInMillis: function(millis) {
            if(millis > 1000)
                this.timeoutTime = millis;
            return this;
        },

        cosasParaAndiYAleks: function(url) {
            $(this.elem).find('a#aa').attr('href', url);
            return this;
        },

        setWidth: function(width) {
            if(typeof width === 'number')
                $(this.elem).css({width: width+'px'});
            else if(typeof width === 'string')
                $(this.elem).css({width: width});
            return this;
        },

        applyStyle: function() {
            $(this.elem).find('style').remove();
            $(this.elem).append('<style>'+this._getStyleContentsModified()+'</style>');
            return this;
        },

        colorDeFondo: function(r, g, b, a) {
            this.colors.BACKGROUND_COLOR = 'rgb('+r+', '+g+', '+b+')';
            this.colors.BACKGROUND_COLOR_ALPHA = 'rgba('+r+', '+g+', '+b+', '+a+')';
            return this;
        },

        colorDeLaCabecera: function(r, g, b) {
            this.colors.TITULO_COLOR.red = r;
            this.colors.TITULO_COLOR.green = g;
            this.colors.TITULO_COLOR.blue = b;
            return this;
        },

        colorDelTitulo: function(r, g, b) {
            this.colors.TITULO.red = r;
            this.colors.TITULO.green = g;
            this.colors.TITULO.blue = b;
            return this;
        },

        colorDelArtista: function(r, g, b) {
            this.colors.ARTISTA.red = r;
            this.colors.ARTISTA.green = g;
            this.colors.ARTISTA.blue = b;
            return this;
        },

        colorDelAlbum: function(r, g, b) {
            this.colors.ALBUM.red = r;
            this.colors.ALBUM.green = g;
            this.colors.ALBUM.blue = b;
            return this;
        },

        colorDeCancion: function(r, g, b) {
            this.colors.TRACK.red = r;
            this.colors.TRACK.green = g;
            this.colors.TRACK.blue = b;
            return this;
        },

        //PRIVATE
        _getStyleContentsModified: function() {
            var replaceStr = '';
            if($(this.elem).attr('id'))
                replaceStr = '#' + $(this.elem).attr('id');
            else if($(this.elem).attr('class'))
                replaceStr = '.' + $(this.elem).attr('class');

            if(!this.css) {
                this.css = $.ajax({
                    url: this.styleSrc,
                    async: false
                }).responseText.replace(/.lastfm/g, replaceStr)
                .replace(/rgb\(255, 92, 92\)/g, '{BACKGROUND_COLOR}')
                .replace(/rgba\(255, 92, 92, 0.9\)/g, '{BACKGROUND_COLOR_ALPHA}')
                .replace(/rgb\(191, 222, 244\)/g, '{TITULO_COLOR}')
                .replace(/rgb\(201, 232, 254\)/g, '{TITULO_A_COLOR}')
                .replace(/black/g, '{TITULO}')
                .replace(/rgb\(0, 100, 0\)/g, '{ARTISTA}')
                .replace(/rgb\(123, 123, 123\)/g, '{ALBUM}')
                .replace(/rgb\(228, 226, 165\)/g, '{TRACK}')
                .replace(/rgb\(225, 233, 186\)/g, '{NWPLY}');
            }

            var css = this.css;
            css = css.replace(/\{BACKGROUND_COLOR\}/g, this.colors.BACKGROUND_COLOR.toString())
            .replace(/\{BACKGROUND_COLOR_ALPHA\}/g, this.colors.BACKGROUND_COLOR_ALPHA.toString())
            .replace(/\{TITULO_COLOR\}/g, this.colors.TITULO_COLOR.toString())
            .replace(/\{TITULO_A_COLOR\}/g, this.colors.TITULO_COLOR.red ? this.colors.TITULO_COLOR.add(10,10,10).toString() : this.colors.TITULO_COLOR)
            .replace(/\{TITULO\}/g, this.colors.TITULO.toString())
            .replace(/\{ARTISTA\}/g, this.colors.ARTISTA.toString())
            .replace(/\{ALBUM\}/g, this.colors.ALBUM.toString())
            .replace(/\{TRACK\}/g, this.colors.TRACK.toString())
            .replace(/\{NWPLY\}/g, this.colors.TRACK.add(-5, 10, 20).toString());

            return css;
        },

        _addStuff: function() {
            $(this.elem).append(
            '<style>' + this._getStyleContentsModified() + '</style>'+
            '<div class="lfm-container">'+
            '    <img class="lfm-img" src="http://cdn.last.fm/flatness/apple-touch-icon.png">'+
            '    <h3 class="maravillosoTitulo">Cargando...</h3>'+
            '    <div class="scrbls"><b>0</b> scrobblings</div>' +
            '    <div class="shd-cntA"></div>'+
            '    <div class="songsCont">'+
            '        <table></table>'+
            '    </div>'+
            '    <div class="shd-cntB shadow" style="opacity:1"></div>'+
            '    <span style="font-size:8px">Last.FM widget <a id="aa" href="http://blogmelchor.blogspot.com" target="_blank">Hecho por melchor629</a></span>'+
            '</div>');
            $(this.elem).find('.songsCont').slimScroll({
                railVisible: true,
                height: 350,
                color: '#FFF',
                railColor: '#F0F0F0',
                size: '8px',
                wheelStep: 5
            });
        },

        _loadData: function() {
            $(this.elem).find('h3').text('Cargando datos de ' + this.LASTFMUSER + '...');
            if(!this.lastfm)
                this.lastfm = new LastFM({
                    apiKey: this.apiKey
                });

            var elem = this.elem,
            LASTFMUSER = this.LASTFMUSER;
            this.lastfm.user.getRecentTracks({
                limit: 10,
                user: this.LASTFMUSER
            }, {
                onSuccess: function(json) {
                    var tracks = json.recenttracks.track;
                    $(elem).find('h3').html('Canciones recientes de <a href="'+
                        'http://www.lastfm.es/user/' + LASTFMUSER + '" target="_blank">' +
                        LASTFMUSER + '</a>');
                    $(elem).find('.scrbls').find('b').text(String(json.recenttracks['@attr'].total));
                    $(elem).find('table').empty();
                    $.each(tracks, function(i, k) {
                        var image = k.image[1]['#text'];
                        if(!image)
                            image = $this._getArtistImg($this.lastfm, k.artist['#text']);
                        if(!image)
                            image = NoIMG;
                        if(k["@attr"])
                            this.currentSong = k;

                        $($this.elem).find('table').append('<tr>' +
                            '<td class="track '+(k["@attr"] ? 'now' : '')+'">'+
                            $this.marquee('title', k.name, k["@attr"])+
                            $this.marquee('artist', k.artist['#text'])+
                            $this.marquee('album', k.album['#text']) + '</td>'+
                            '<td class="img"><img src="' + image + '"></td>'+
                            '</tr>');

                        var a = $($this.elem).find('table').find('.title').last();
                        if(a.width() > $($this.elem).find('.songsCont').width()-64)
                            $this.marqueeListener(a);
                        a = $($this.elem).find('table').find('.artist').last();
                        if(a.width() > $($this.elem).find('.songsCont').width()-64)
                            $this.marqueeListener(a);
                        a = $($this.elem).find('table').find('.album').last();
                        if(a.width() > $($this.elem).find('.songsCont').width()-64)
                            $this.marqueeListener(a);

                        $(elem).find('tr').last().css({opacity: 0}).delay(i*200).
                            animate({opacity: 1}, 1000);
                    });
                },
                onError: function(json) {
                    $($this.elem).find('.maravillosoTitulo').text(json.message);
                }
            });
        },

        _shadowsListener: function() {
            $(this.elem).find('.songsCont').scroll(function() {
                var offsetDown = $(this).parent().find('table').height() - $(this).height();
                //Sombra de arriba
                if($(this).scrollTop()) {
                    if(!$('.shd-cntA').hasClass('shadow')) {
                        $('.shd-cntA').addClass('shadow').stop().animate({
                            opacity: 1
                        }, 300);
                    }
                } else {
                    if($('.shd-cntA').hasClass('shadow')) {
                        $('.shd-cntA').stop().animate({
                            opacity: 0
                        }, 50, function() {
                            $(this).removeClass('shadow');
                        });
                    }
                }

                //Sombra de abajo
                if($(this).scrollTop() === offsetDown) {
                    if($('.shd-cntB').hasClass('shadow')) {
                        $('.shd-cntB').stop().animate({
                            opacity: 0
                        }, 50, function() {
                            $(this).removeClass('shadow');
                        });
                    }
                } else {
                    if(!$('.shd-cntB').hasClass('shadow')) {
                        $('.shd-cntB').addClass('shadow').stop().animate({
                            opacity: 1
                        }, 300);
                    }
                }
            });
        },

        _timeout: function() {
            var isSameSong = function(a, b) {
                if(a && b)
                return (a.date && b.date) ? a.date.uts == b.date.uts :
                    ((a["@attr"] && b["@attr"]) ? a.name === b.name : false);
            }, thereIsASameSong = false;

            $this.lastfm.user.getRecentTracks({
                limit: 10,
                user: $this.LASTFMUSER
            }, {
                onSuccess: function(json) {
                    var tracks = json.recenttracks.track;
                    $.each(tracks, function(i, k) {
                        if(i === 0 && $this.currentSong && isSameSong($this.currentSong, k)) {
                            thereIsASameSong = true;
                            return;
                        } else if(i !== 0 && thereIsASameSong)
                            return;
                        else if(i === 0 && !isSameSong($this.currentSong, k)) {
                            $this.currentSong = k;
                            $($this.elem).find('table').empty();
                        }
                        var image = k.image[1]['#text'];
                        if(!image)
                            image = $this._getArtistImg($this.lastfm, k.artist['#text']);
                        if(!image)
                            image = NoIMG;

                        $($this.elem).find('table').append('<tr>' +
                            '<td class="track '+(k["@attr"] ? 'now' : '')+'">'+
                            $this.marquee('title', k.name, k["@attr"])+
                            $this.marquee('artist', k.artist['#text'])+
                            $this.marquee('album', k.album['#text']) + '</td>'+
                            '<td class="img"><img src="' + image + '"></td>'+
                            '</tr>');

                        var a = $($this.elem).find('table').find('.title').last(),
                        b = $($this.elem).find('.songsCont').width()-64;
                        if(a.width() >= b)
                            $this.marqueeListener(a);
                        a = $($this.elem).find('table').find('.artist').last();
                        if(a.width() >= b)
                            $this.marqueeListener(a);
                        a = $($this.elem).find('table').find('.album').last();
                        if(a.width() >= b)
                            $this.marqueeListener(a);
                    });
                    setTimeout($this._timeout, $this.timeoutTime);
                }  
            });
        },

        _applyTimeout: function() {
            $this = this;
            setTimeout(this._timeout, this.timeoutTime);
        },

        _getArtistImg: function(lastfm, artista) {
            var json = lastfm.artist.getInfoSync({artist: artista});
            return json.artist.image[1]['#text'];
        },
        marquee: function(Class, content, now) {
            var width = $($this.elem).find('.songsCont').width() - 64 - 10, dwidth = 600;
            if(!!now) width -= 16;
            return '<div style="width: ' + width + 'px; overflow: hidden; '+(!!now?'float:right':'')+'">'+
            '<div style="width: ' + dwidth + 'px;clear:both;position:relative;right:'+(dwidth-width)+'px">'+
            '<span class="'+Class+'">'+content+'</span>'+
            '</div></div>';
        },
        marqueeListener: function(a) {
            var width = $(a).width(), dwidth = 600;
            a.parent().parent().addClass('marquee-song');
            a.parent().css({right: (dwidth-width) - (a.width() - width)}).hover(function(e) {
                if(!$(this).data('mov')) {
                    $(this).data('mov', true);
                    var right = Number($(this).css('right').replace(/px/, '')),
                    newRight = right + $(this).find('span').width();
                    $(this).animate({right: newRight}, (newRight-right) * 20, 'linear', function() {
                        $(this).css({right: right - $($this.elem).find('.songsCont').width() + 64});
                        $(this).animate({right: right}, (newRight-right) * 10, 'linear', function() {
                            $(this).data('mov', null);
                        });
                    });
                }
            });
        },
        _userIcon: function() {
            var $this = this;
            this.lastfm.user.getInfo({user: this.LASTFMUSER}, {
                onSuccess: function(data) {
                    var userIMG = data.user.image[1]['#text'];
                    $($this.elem).find('.lfm-img').attr('src', userIMG);
                }
            });
        }
    };

    //Make this class a jQuery Plugin
    $.fn.lastSongs = function(user, apikey, timeoutTime, styleSrc) {
        if (typeof user === "string" && typeof apikey === "string") {
            if (!$.data($(this[0]), "plugin_lastSongs")) {
                var obj = new LastSongs(user, apikey, $(this[0]), timeoutTime, styleSrc);
                $.data(this, "plugin_lastSongs", obj);
                return obj;
            }
        }
    };
})(window, jQuery);


//build-script.js
var fs = require('fs');
var js = 'æ';

if(fs.existsSync('lastSongs.comp.js'))
    fs.unlinkSync('lastSongs.comp.js');

var files = fs.readdirSync('.');
for(var i = 0; i < files.length; i++) {
    var file = files[i];
    if(file.substr(-2) !== 'js')
        continue;
    js += '//' + file + '\n';
    js += fs.readFileSync(file, { encoding: 'UTF-8' });
    js += '\n\n';
}

fs.writeFile('lastSongs.comp.js', js, {
    encoding: 'UTF-8'
}, function(err) {
    if(err) throw err;
    console.log("Files concatenated correctly");
});

//jquery.slimscroll.min.js
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.0
 *
 */
(function(f){jQuery.fn.extend({slimScroll:function(h){var a=f.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:0.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:0.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},h);this.each(function(){function r(d){if(s){d=d||
window.event;var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);f(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&m(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function m(d,f,h){k=!1;var e=d,g=b.outerHeight()-c.outerHeight();f&&(e=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),e=Math.min(Math.max(e,0),g),e=0<d?Math.ceil(e):Math.floor(e),c.css({top:e+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());
e=l*(b[0].scrollHeight-b.outerHeight());h&&(e=d,d=e/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),g),c.css({top:d+"px"}));b.scrollTop(e);b.trigger("slimscrolling",~~e);v();p()}function C(){window.addEventListener?(this.addEventListener("DOMMouseScroll",r,!1),this.addEventListener("mousewheel",r,!1),this.addEventListener("MozMousePixelScroll",r,!1)):document.attachEvent("onmousewheel",r)}function w(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),D);c.css({height:u+"px"});
var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function v(){w();clearTimeout(A);l==~~l?(k=a.allowPageScroll,B!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;B=l;u>=b.outerHeight()?k=!0:(c.stop(!0,!0).fadeIn("fast"),a.railVisible&&g.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(A=setTimeout(function(){a.disableFadeOut&&s||(x||y)||(c.fadeOut("slow"),g.fadeOut("slow"))},1E3))}var s,x,y,A,z,u,l,B,D=30,k=!1,b=f(this);if(b.parent().hasClass(a.wrapperClass)){var n=b.scrollTop(),
c=b.parent().find("."+a.barClass),g=b.parent().find("."+a.railClass);w();if(f.isPlainObject(h)){if("height"in h&&"auto"==h.height){b.parent().css("height","auto");b.css("height","auto");var q=b.parent().parent().height();b.parent().css("height",q);b.css("height",q)}if("scrollTo"in h)n=parseInt(a.scrollTo);else if("scrollBy"in h)n+=parseInt(a.scrollBy);else if("destroy"in h){c.remove();g.remove();b.unwrap();return}m(n,!1,!0)}}else{a.height="auto"==a.height?b.parent().height():a.height;n=f("<div></div>").addClass(a.wrapperClass).css({position:"relative",
overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",width:a.width,height:a.height});var g=f("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=f("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?
"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),q="right"==a.position?{right:a.distance}:{left:a.distance};g.css(q);c.css(q);b.wrap(n);b.parent().append(c);b.parent().append(g);a.railDraggable&&c.bind("mousedown",function(a){var b=f(document);y=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);m(0,c.position().top,!1)});
b.bind("mouseup.slimscroll",function(a){y=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",function(a){a.stopPropagation();a.preventDefault();return!1});g.hover(function(){v()},function(){p()});c.hover(function(){x=!0},function(){x=!1});b.hover(function(){s=!0;v();p()},function(){s=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(z=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&
(m((z-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),z=b.originalEvent.touches[0].pageY)});w();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),m(0,!0)):"top"!==a.start&&(m(f(a.start).position().top,null,!0),a.alwaysVisible||c.hide());C()}});return this}});jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})})(jQuery);

