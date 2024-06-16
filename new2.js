/**
 * @file
 * Global utilities.
 *
 */
/*! Select2 4.0.6-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return v.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o=b&&b.split("/"),p=t.map,q=p&&p["*"]||{};if(a){for(a=a.split("/"),g=a.length-1,t.nodeIdCompat&&x.test(a[g])&&(a[g]=a[g].replace(x,"")),"."===a[0].charAt(0)&&o&&(n=o.slice(0,o.length-1),a=n.concat(a)),k=0;k<a.length;k++)if("."===(m=a[k]))a.splice(k,1),k-=1;else if(".."===m){if(0===k||1===k&&".."===a[2]||".."===a[k-1])continue;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}if((o||q)&&p){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),o)for(l=o.length;l>0;l-=1)if((e=p[o.slice(0,l).join("/")])&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&q&&q[d]&&(i=q[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=w.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),o.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){r[a]=b}}function j(a){if(e(s,a)){var c=s[a];delete s[a],u[a]=!0,n.apply(b,c)}if(!e(r,a)&&!e(u,a))throw new Error("No "+a);return r[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return a?k(a):[]}function m(a){return function(){return t&&t.config&&t.config[a]||{}}}var n,o,p,q,r={},s={},t={},u={},v=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;p=function(a,b){var c,d=k(a),e=d[0],g=b[1];return a=d[1],e&&(e=f(e,g),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(g)):f(a,g):(a=f(a,g),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},q={require:function(a){return g(a)},exports:function(a){var b=r[a];return void 0!==b?b:r[a]={}},module:function(a){return{id:a,uri:"",exports:r[a],config:m(a)}}},n=function(a,c,d,f){var h,k,m,n,o,t,v,w=[],x=typeof d;if(f=f||a,t=l(f),"undefined"===x||"function"===x){for(c=!c.length&&d.length?["require","exports","module"]:c,o=0;o<c.length;o+=1)if(n=p(c[o],t),"require"===(k=n.f))w[o]=q.require(a);else if("exports"===k)w[o]=q.exports(a),v=!0;else if("module"===k)h=w[o]=q.module(a);else if(e(r,k)||e(s,k)||e(u,k))w[o]=j(k);else{if(!n.p)throw new Error(a+" missing "+k);n.p.load(n.n,g(f,!0),i(k),{}),w[o]=r[k]}m=d?d.apply(r[a],w):void 0,a&&(h&&h.exports!==b&&h.exports!==r[a]?r[a]=h.exports:m===b&&v||(r[a]=m))}else a&&(r[a]=d)},a=c=o=function(a,c,d,e,f){if("string"==typeof a)return q[a]?q[a](c):j(p(a,l(c)).f);if(!a.splice){if(t=a,t.deps&&o(t.deps,t.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?n(b,a,c,d):setTimeout(function(){n(b,a,c,d)},4),o},o.config=function(a){return o(a)},a._defined=r,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(r,a)||e(s,a)||(s[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){"function"==typeof b[d]&&("constructor"!==d&&c.push(d))}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){return Array.prototype.unshift.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;c<d;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;c<a;c++){b+=Math.floor(36*Math.random()).toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return(e!==f||"hidden"!==f&&"visible"!==f)&&("scroll"===e||"scroll"===f||(d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth))},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c.__cache={};var e=0;return c.GetUniqueElementId=function(a){var b=a.getAttribute("data-select2-id");return null==b&&(a.id?(b=a.id,a.setAttribute("data-select2-id",b)):(a.setAttribute("data-select2-id",++e),b=e.toString())),b},c.StoreData=function(a,b,d){var e=c.GetUniqueElementId(a);c.__cache[e]||(c.__cache[e]={}),c.__cache[e][b]=d},c.GetData=function(b,d){var e=c.GetUniqueElementId(b);return d?c.__cache[e]&&null!=c.__cache[e][d]?c.__cache[e][d]:a(b).data(d):c.__cache[e]},c.RemoveData=function(a){var b=c.GetUniqueElementId(a);null!=c.__cache[b]&&delete c.__cache[b]},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){b.find(".select2-results").append(a)},c.prototype.sort=function(a){return this.options.get("sorter")(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var c=this;this.data.current(function(d){var e=a.map(d,function(a){return a.id.toString()});c.$results.find(".select2-results__option[aria-selected]").each(function(){var c=a(this),d=b.GetData(this,"data"),f=""+d.id;null!=d.element&&d.element.selected||null==d.element&&a.inArray(f,e)>-1?c.attr("aria-selected","true"):c.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(c){var d=document.createElement("li");d.className="select2-results__option";var e={role:"treeitem","aria-selected":"false"};c.disabled&&(delete e["aria-selected"],e["aria-disabled"]="true"),null==c.id&&delete e["aria-selected"],null!=c._resultId&&(d.id=c._resultId),c.title&&(d.title=c.title),c.children&&(e.role="group",e["aria-label"]=c.text,delete e["aria-selected"]);for(var f in e){var g=e[f];d.setAttribute(f,g)}if(c.children){var h=a(d),i=document.createElement("strong");i.className="select2-results__group";a(i);this.template(c,i);for(var j=[],k=0;k<c.children.length;k++){var l=c.children[k],m=this.option(l);j.push(m)}var n=a("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});n.append(j),h.append(i),h.append(n)}else this.template(c,d);return b.StoreData(d,"data",c),d},c.prototype.bind=function(c,d){var e=this,f=c.id+"-results";this.$results.attr("id",f),c.on("results:all",function(a){e.clear(),e.append(a.data),c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("results:append",function(a){e.append(a.data),c.isOpen()&&e.setClasses()}),c.on("query",function(a){e.hideMessages(),e.showLoading(a)}),c.on("select",function(){c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("unselect",function(){c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("open",function(){e.$results.attr("aria-expanded","true"),e.$results.attr("aria-hidden","false"),e.setClasses(),e.ensureHighlightVisible()}),c.on("close",function(){e.$results.attr("aria-expanded","false"),e.$results.attr("aria-hidden","true"),e.$results.removeAttr("aria-activedescendant")}),c.on("results:toggle",function(){var a=e.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),c.on("results:select",function(){var a=e.getHighlightedResults();if(0!==a.length){var c=b.GetData(a[0],"data");"true"==a.attr("aria-selected")?e.trigger("close",{}):e.trigger("select",{data:c})}}),c.on("results:previous",function(){var a=e.getHighlightedResults(),b=e.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var d=c-1;0===a.length&&(d=0);var f=b.eq(d);f.trigger("mouseenter");var g=e.$results.offset().top,h=f.offset().top,i=e.$results.scrollTop()+(h-g);0===d?e.$results.scrollTop(0):h-g<0&&e.$results.scrollTop(i)}}),c.on("results:next",function(){var a=e.getHighlightedResults(),b=e.$results.find("[aria-selected]"),c=b.index(a),d=c+1;if(!(d>=b.length)){var f=b.eq(d);f.trigger("mouseenter");var g=e.$results.offset().top+e.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=e.$results.scrollTop()+h-g;0===d?e.$results.scrollTop(0):h>g&&e.$results.scrollTop(i)}}),c.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),c.on("results:message",function(a){e.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=e.$results.scrollTop(),c=e.$results.get(0).scrollHeight-b+a.deltaY,d=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=e.$results.height();d?(e.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(e.$results.scrollTop(e.$results.get(0).scrollHeight-e.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(c){var d=a(this),f=b.GetData(this,"data");if("true"===d.attr("aria-selected"))return void(e.options.get("multiple")?e.trigger("unselect",{originalEvent:c,data:f}):e.trigger("close",{}));e.trigger("select",{originalEvent:c,data:f})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(c){var d=b.GetData(this,"data");e.getHighlightedResults().removeClass("select2-results__option--highlighted"),e.trigger("results:focus",{data:d,element:a(this)})})},c.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),c<=2?this.$results.scrollTop(0):(g>this.$results.outerHeight()||g<0)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var c=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=b.GetData(this.$element[0],"old-tabindex")?this._tabindex=b.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),c.attr("title",this.$element.attr("title")),c.attr("tabindex",this._tabindex),this.$selection=c,c},d.prototype.bind=function(a,b){var d=this,e=(a.id,a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(c){a(document.body).on("mousedown.select2."+c.id,function(c){var d=a(c.target),e=d.closest(".select2");a(".select2.select2-container--open").each(function(){a(this),this!=e[0]&&b.GetData(this,"element").select2("close")})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){b.find(".selection").append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()})},e.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},e.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.attr("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,e){var f=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){f.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!f.options.get("disabled")){var d=a(this),e=d.parent(),g=c.GetData(e[0],"data");f.trigger("unselect",{originalEvent:b,data:g})}})},d.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},d.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},d.prototype.selectionContainer=function(){return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.attr("title",e.title||e.text),c.StoreData(f[0],"data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id;if(b.length>1||c)return a.call(this,b);this.clear();var d=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d)},b}),b.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(a,b,c){function d(){}return d.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},d.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var d=this.$selection.find(".select2-selection__clear");if(0!==d.length){b.stopPropagation();var e=c.GetData(d[0],"data"),f=this.$element.val();this.$element.val(this.placeholder.id);var g={data:e};if(this.trigger("clear",g),g.prevented)return void this.$element.val(f);for(var h=0;h<e.length;h++)if(g={data:e[h]},this.trigger("unselect",g),g.prevented)return void this.$element.val(f);this.$element.trigger("change"),this.trigger("toggle",{})}}},d.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||c.which!=b.DELETE&&c.which!=b.BACKSPACE||this._handleClear(c)},d.prototype.update=function(b,d){if(b.call(this,d),!(this.$selection.find(".select2-selection__placeholder").length>0||0===d.length)){var e=a('<span class="select2-selection__clear">&times;</span>');c.StoreData(e[0],"data",d),this.$selection.find(".select2-selection__rendered").prepend(e)}},d}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,d,e){var f=this;a.call(this,d,e),d.on("open",function(){f.$search.trigger("focus")}),d.on("close",function(){f.$search.val(""),f.$search.removeAttr("aria-activedescendant"),f.$search.trigger("focus")}),d.on("enable",function(){f.$search.prop("disabled",!1),f._transferTabIndex()}),d.on("disable",function(){f.$search.prop("disabled",!0)}),d.on("focus",function(a){f.$search.trigger("focus")}),d.on("results:focus",function(a){f.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){f.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){f._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){if(a.stopPropagation(),f.trigger("keypress",a),f._keyUpPrevented=a.isDefaultPrevented(),a.which===c.BACKSPACE&&""===f.$search.val()){var d=f.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var e=b.GetData(d[0],"data");f.searchRemoveChoice(e),a.preventDefault()}}});var g=document.documentMode,h=g&&g<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){if(h)return void f.$selection.off("input.search input.searchcheck");f.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(h&&"input"===a.type)return void f.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&f.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{a=.75*(this.$search.val().length+1)+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],g=["opening","closing","selecting","unselecting","clearing"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"}}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),null!=c.id?d+="-"+c.id.toString():d+="-"+a.generateChars(4),d},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple")){if(a.selected=!1,c(a.element).is("option"))return a.element.selected=!1,void this.$element.trigger("change");this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})}},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){b.RemoveData(this)})},d.prototype.query=function(a,b){var d=[],e=this;this.$element.children().each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var d;a.children?(d=document.createElement("optgroup"),d.label=a.text):(d=document.createElement("option"),void 0!==d.textContent?d.textContent=a.text:d.innerText=a.text),void 0!==a.id&&(d.value=a.id),a.disabled&&(d.disabled=!0),a.selected&&(d.selected=!0),a.title&&(d.title=a.title);var e=c(d),f=this._normalizeItem(a);return f.element=d,b.StoreData(d,"data",f),e},d.prototype.item=function(a){var d={};if(null!=(d=b.GetData(a[0],"data")))return d;if(a.is("option"))d={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){d={text:a.prop("label"),children:[],title:a.prop("title")};for(var e=a.children("option"),f=[],g=0;g<e.length;g++){var h=c(e[g]),i=this.item(h);f.push(i)}d.children=f}return d=this._normalizeItem(d),d.element=a[0],b.StoreData(a[0],"data",d),d},d.prototype._normalizeItem=function(a){a!==Object(a)&&(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){return this.options.get("matcher")(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){"status"in d&&(0===d.status||"0"===d.status)||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0);if((i.text||"").toUpperCase()===(b.term||"").toUpperCase()||j)return!f&&(a.data=g,void c(a))}if(f)return!0;var k=e.createTag(b);if(null!=k){var l=e.option(k);l.attr("data-select2-tag",!0),e.addOptions([l]),e.insertTag(g,k)}a.results=g,c(a)}var e=this;if(this._removeOldTags(),null==b.term||null!=b.page)return void a.call(this,b,c);a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b);if(!g.$element.find("option").filter(function(){return a(this).val()===c.id}).length){var d=g.option(c);d.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([d])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",b.term.length<this.minimumInputLength)return void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength)return void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;if(d.maximumSelectionLength>0&&f>=d.maximumSelectionLength)return void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}});a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val(""),e.$search.blur()}),c.on("focus",function(){c.isOpen()||e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){e.showSearch(a)?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){e.$results.offset().top+e.$results.outerHeight(!1)+50>=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1)&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){b.StoreData(this,"select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(c){var d=b.GetData(this,"select2-scroll-position");a(this).scrollTop(d.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id;this.$container.parents().filter(b.hasScroll).off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return!(a(c.data.results)<this.minimumResultsForSearch)&&b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",["../utils"],function(a){function b(){}return b.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},b.prototype._handleSelectOnClose=function(b,c){if(c&&null!=c.originalSelect2Event){var d=c.originalSelect2Event;if("select"===d._type||"unselect"===d._type)return}var e=this.getHighlightedResults();if(!(e.length<1)){var f=a.GetData(e[0],"data");null!=f.element&&f.element.selected||null==f.element&&f.selected||this.trigger("select",{data:f})}},b}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){return"Please enter "+(a.minimum-a.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}return D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),null==l.tokenSeparators&&null==l.tokenizer||(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(a){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(a){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var O=k.loadPath(this.defaults.amdLanguageBase+"en"),P=new k(l.language);P.extend(O),l.translations=P}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){null==c(d,e.children[g])&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var h=b(e.text).toUpperCase(),i=b(d.term).toUpperCase();return h.indexOf(i)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(!0,this.defaults,f)},new D}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),d.GetData(a[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),d.StoreData(a[0],"data",d.GetData(a[0],"select2Tags")),d.StoreData(a[0],"tags",!0)),d.GetData(a[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",d.GetData(a[0],"ajaxUrl")),d.StoreData(a[0],"ajax-Url",d.GetData(a[0],"ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,d.GetData(a[0])):d.GetData(a[0]);var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,d){null!=c.GetData(a[0],"select2")&&c.GetData(a[0],"select2").destroy(),this.$element=a,this.id=this._generateId(a),d=d||{},this.options=new b(d,a),e.__super__.constructor.call(this);var f=a.attr("tabindex")||0;c.StoreData(a[0],"old-tabindex",f),a.attr("tabindex","-1");var g=this.options.get("dataAdapter");this.dataAdapter=new g(a,this.options);var h=this.render();this._placeContainer(h);var i=this.options.get("selectionAdapter");this.selection=new i(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,h);var j=this.options.get("dropdownAdapter");this.dropdown=new j(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,h);var k=this.options.get("resultsAdapter");this.results=new k(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){l.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),c.StoreData(a[0],"select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return e<=0?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;h<i;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=a&&0!==a.length||(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",c.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),c.RemoveData(this.$element[0]),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),c.StoreData(b[0],"element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(a,b,c,d,e){if(null==a.fn.select2){var f=["open","close","destroy"];a.fn.select2=function(b){if("object"==typeof(b=b||{}))return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,g=Array.prototype.slice.call(arguments,1);return this.each(function(){var a=e.GetData(this,"select2");null==a&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=a[b].apply(a,g)}),a.inArray(b,f)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});;
/*!
	Modaal - accessible modals - v0.4.4
	by Humaan, for all humans.
	http://humaan.com
 */
/**
	Modaal jQuery Plugin : Accessible Modals

	==== General Options ===
	type (string) 					: ajax, inline, image, iframe, confirm. Defaults to 'inline'
	content_source (stribg)			: Accepts a string value for your target element, such as '#my-content'. This allows for when trigger element is
										an `<a href="#">` link. Not to be confused with the already existing `source` event.
	animation (string) 				: Fade, expand, down, up. Defaults to 'fade'
	after_callback_delay (integer)	: Specify a delay value for the after open callbacks. This is necessary because with the bundled animations
										have a set duration in the bundled CSS. Specify a delay of the same amount as the animation duration in so
										more accurately fire the after open/close callbacks. Defaults 350, does not apply if animation is 'none',
										after open callbacks are dispatched immediately

	is_locked (boolean)				: Set this to true to disable closing the modal via keypress or clicking the background. Beware that if
										type != 'confirm' there will be no interface to dismiss the modal if is_locked = true, you'd have to
										programmatically arrange to dismiss the modal. Confirm modals are always locked regardless of this option
										Defaults to false

	hide_close (boolean)			: Set this to true to hide the close modal button. Key press and overlay click will still close the modal.
										This method is best used when you want to put a custom close button inside the modal container space.

	background (string)				: Background overlay style. Defaults to '#000'
	overlay_opacity (float) 		: Background overlay transparency. Defaults to 0.8
	overlay_close (boolean)			: Set this to false if you want to disable click to close on overlay background.

	accessible_title (string)		: Accessible title. Default 'Dialog Window'
	start_open (boolean)			: Set this to true to launch the Modaal window immediately on page open
	fullscreen (boolean)			: Set this to true to make the modaal fill the entire screen, false will default to own width/height attributes.
	custom_class (string)			: Fill in this string with a custom class that will be applied to the outer most modal wrapper.

	width (integer)					: Desired width of the modal. Required for iframe type. Defaults to undefined //TODO
	height (integer)				: Desired height of the modal. Required for iframe type. Defaults to undefined //TODO

	background_scroll (boolean)		: Set this to true to enable the page to scroll behind the open modal.

    should_open (boolean|function)  : Boolean or closure that returns a boolean to determine whether to open the modal or not.

	close_text						: String for close button text. Available for localisation and alternative languages to be used.
	close_aria_label				: String for close button aria-label attribute (value that screen readers will read out). Available for localisation and alternative languages to be used.

	=== Events ===
	before_open (function) 			: Callback function executed before modal is opened
	after_open (function)			: Callback function executed after modal is opened
	before_close (function)			: Callback function executed before modal is closed
	after_close (function)			: Callback function executed after modal is closed
	source (function(element, src))	: Callback function executed on the default source, it is intended to transform the
										source (href in an AJAX modal or iframe). The function passes in the triggering element
										as well as the default source depending of the modal type. The default output of the
										function is an untransformed default source.


	=== Confirm Options & Events ===
	confirm_button_text (string)	: Text on the confirm button. Defaults to 'Confirm'
	confirm_cancel_button_text (string) : Text on the confirm modal cancel button. Defaults to 'Cancel'
	confirm_title (string)			: Title for confirm modal. Default 'Confirm Title'
	confirm_content (string)		: HTML content for confirm message
	confirm_callback (function)		: Callback function for when the confirm button is pressed as opposed to cancel
	confirm_cancel_callback (function) : Callback function for when the cancel button is pressed


	=== Gallery Options & Events ===
	gallery_active_class (string)	: Active class applied to the currently active image or image slide in a gallery 'gallery_active_item'
	outer_controls (boolean)		: Set to true to put the next/prev controls outside the Modaal wrapper, at the edges of the browser window.
	before_image_change (function)	: Callback function executed before the image slide changes in a gallery modal. Default function( current_item, incoming_item )
	after_image_change (function)	: Callback function executed after the image slide changes in a gallery modal. Default function ( current_item )


	=== AJAX Options & Events ===
	loading_content (string)		: HTML content for loading message. Default 'Loading &hellip;'
	loading_class (string)			: Class name to be applied while content is loaded via AJAX. Default 'is_loading'
	ajax_error_class (string)		: Class name to be applied when content has failed to load. Default is 'modaal-error'
	ajax_success (function)		 	: Callback for when AJAX content is loaded in


	=== SOCIAL CONTENT ===
	instagram_id (string)			: Unique photo ID for an Instagram photo.

*/
( function( $ ) {

	var modaal_loading_spinner = '<div class="modaal-loading-spinner"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>'
	
	var Modaal = {
		init : function(options, elem) {
			var self = this;

			self.dom = $('body');

			self.$elem = $(elem);
			self.options = $.extend({}, $.fn.modaal.options, self.$elem.data(), options);
			self.xhr = null;

			// set up the scope
			self.scope = {
				is_open: false,
				id: 'modaal_' + ( new Date().getTime() ) + ( Math.random().toString(16).substring(2) ),
				source: self.options.content_source ? self.options.content_source : self.$elem.attr('href')
			};

			// add scope attribute to trigger element
			self.$elem.attr('data-modaal-scope', self.scope.id);

			// private options
			self.private_options = {
				active_class: 'is_active'
			};

			self.lastFocus = null;
			
			// if is_locked
			if ( self.options.is_locked || self.options.type == 'confirm' || self.options.hide_close ) {
				self.scope.close_btn = '';
			} else {
				self.scope.close_btn = '<button type="button" class="modaal-close" id="modaal-close" aria-label="' + self.options.close_aria_label + '"><span>' + self.options.close_text + '</span></button>';
			}

			// reset animation_speed
			if (self.options.animation === 'none' ){
				self.options.animation_speed = 0;
				self.options.after_callback_delay = 0;
			}

			// On click to open modal
			$(elem).on('click.Modaal', function(e) {
				e.preventDefault();
				self.create_modaal(self, e);
			});

			// Define next/prev buttons
			if (self.options.outer_controls === true) {
				var mod_class = 'outer';
			} else {
				var mod_class = 'inner';
			}
			self.scope.prev_btn = '<button type="button" class="modaal-gallery-control modaal-gallery-prev modaal-gallery-prev-' + mod_class + '" id="modaal-gallery-prev" aria-label="Previous image (use left arrow to change)"><span>Previous Image</span></button>';
			self.scope.next_btn = '<button type="button" class="modaal-gallery-control modaal-gallery-next modaal-gallery-next-' + mod_class + '" id="modaal-gallery-next" aria-label="Next image (use right arrow to change)"><span>Next Image</span></button>';

			// Check for start_open
			if (self.options.start_open === true ){
				self.create_modaal( self );
			}
		},

		// Initial create to determine which content type it requires
		// ----------------------------------------------------------------
		create_modaal : function(self, e) {
			var self = this;
			var source;

			// Save last active state before modal
			self.lastFocus = self.$elem;

			if ( self.options.should_open === false || ( typeof self.options.should_open === 'function' && self.options.should_open() === false ) ) {
				return;
			}

			// CB: before_open
			self.options.before_open.call(self, e);

			switch (self.options.type) {
				case 'inline':
					self.create_basic();
					break;

				case 'ajax':
					source = self.options.source( self.$elem, self.scope.source );
					self.fetch_ajax( source );
					break;

				case 'confirm':
					self.options.is_locked = true;
					self.create_confirm();
					break;

				case 'image':
					self.create_image();
					break;

				case 'iframe':
					source = self.options.source( self.$elem, self.scope.source );
					self.create_iframe( source );
					break;

				case 'video':
					self.create_video(self.scope.source);
					break;

				case 'instagram':
					self.create_instagram();
					break;
			}

			// call events to be watched (click, tab, keyup, keydown etc.)
			self.watch_events();
		},

		// Watching Modal
		// ----------------------------------------------------------------
		watch_events : function() {
			var self = this;

			self.dom.off('click.Modaal keyup.Modaal keydown.Modaal');

			// Body keydown
			self.dom.on('keydown.Modaal', function(e) {
				var key = e.keyCode;
				var target = e.target;

				// look for tab change and reset focus to modal window
				// done in keydown so the check fires repeatedly when you hold the tab key down
				if (key == 9 && self.scope.is_open) {
					if (!$.contains(document.getElementById(self.scope.id), target) ) {
						$('#' + self.scope.id).find('*[tabindex="0"]').focus();
					}
				}
			});

			// Body keyup
			self.dom.on('keyup.Modaal', function(e) {
				var key = e.keyCode;
				var target = e.target;

				if ( (e.shiftKey && e.keyCode == 9) && self.scope.is_open) {
					// Watch for shift + tab key press. if open shift focus to close button.
					if (!$.contains(document.getElementById(self.scope.id), target) ) {
						$('#' + self.scope.id).find('.modaal-close').focus();
					}
				}

				if ( !self.options.is_locked ){
					// On escape key press close modal
					if (key == 27 && self.scope.is_open ) {
						if ( $(document.activeElement).is('input:not(:checkbox):not(:radio)') ) {
							return false;
						}

						self.modaal_close();
						return;
					}
				}

				// is gallery open and images length is > 1
				if ( self.options.type == 'image' ) {
					// arrow left for back
					if (key == 37 && self.scope.is_open && (!$('#' + self.scope.id + ' .modaal-gallery-prev').hasClass('is_hidden')) ) {
						self.gallery_update('prev');
					}
					// arrow right for next
					if (key == 39 && self.scope.is_open && (!$('#' + self.scope.id + ' .modaal-gallery-next').hasClass('is_hidden')) ) {
						self.gallery_update('next');
					}
					return;
				}
			});

			// Body click/touch
			self.dom.on('click.Modaal', function(e) {
				var trigger = $(e.target);

				// General Controls: If it's not locked allow greedy close
				if ( !self.options.is_locked ){
					if ( (self.options.overlay_close && trigger.is('.modaal-inner-wrapper')) || trigger.is('.modaal-close') || trigger.closest('.modaal-close').length ) {
						self.modaal_close();
						return;
					}
				}

				//Confirm Controls
				if ( trigger.is('.modaal-confirm-btn' ) ){
					// if 'OK' button is clicked, run confirm_callback()
					if ( trigger.is('.modaal-ok') ) {
						self.options.confirm_callback.call(self, self.lastFocus);
					}

					if ( trigger.is('.modaal-cancel') ) {
						self.options.confirm_cancel_callback.call(self, self.lastFocus);
					}
					self.modaal_close();
					return;
				}

				// Gallery Controls
				if ( trigger.is( '.modaal-gallery-control' ) ){
					// it not active, don't do nuthin!
					if ( trigger.hasClass('is_hidden') ) {
						return;
					}

					// trigger previous
					if ( trigger.is('.modaal-gallery-prev') ) {
						self.gallery_update('prev');
					}
					// trigger next
					if ( trigger.is('.modaal-gallery-next') ) {
						self.gallery_update('next');
					}
					return;
				}
			});
		},

		// Append markup into DOM
		build_modal : function(content) {
			var self = this;

			// if is instagram
			var igClass = '';
			if ( self.options.type == 'instagram' ) {
				igClass = ' modaal-instagram';
			}

			var wrap_class = (self.options.type == 'video') ? 'modaal-video-wrap' : 'modaal-content';

			/*
				modaal-start_none : fully hidden via display:none;
				modaal-start_fade : hidden via opacity:0
				modaal-start_slidedown : ...

			*/
			var animation_class;
			switch ( self.options.animation ) {
				case 'fade' :
					animation_class = ' modaal-start_fade';
					break;
				case 'slide-down' :
					animation_class = ' modaal-start_slidedown';
					break;
				default :
					animation_class = ' modaal-start_none'
			}

			// fullscreen check
			var fullscreen_class = '';
			if ( self.options.fullscreen ) {
				fullscreen_class = ' modaal-fullscreen';
			}

			// custom class check
			if ( self.options.custom_class !== '' || typeof(self.options.custom_class) !== 'undefined' ) {
				self.options.custom_class = ' ' + self.options.custom_class;
			}

			// if width and heights exists and is typeof number
			var dimensionsStyle = '';
			if ( self.options.width && self.options.height && typeof self.options.width == 'number' && typeof self.options.height == 'number' ) {
				// if width and height exist, and they are both numbers
				dimensionsStyle = ' style="max-width:' + self.options.width + 'px;height:' + self.options.height + 'px;overflow:auto;"';
			} else if ( self.options.width && typeof self.options.width == 'number' ) {
				// if only width
				dimensionsStyle = ' style="max-width:' + self.options.width + 'px;"';
			} else if ( self.options.height && typeof self.options.height == 'number' ) {
				// if only height
				dimensionsStyle = ' style="height:' + self.options.height + 'px;overflow:auto;"';
			}

			// Reset dimensions style (width and height) for certain types
			if ( self.options.type == 'image' || self.options.type == 'video' || self.options.type == 'instagram' || self.options.fullscreen ) {
				dimensionsStyle = '';
			}

			// if is touch
			// this is a bug fix for iOS to allow regular click events on div elements.
			var touchTrigger = '';
			if ( self.is_touch() ) {
				touchTrigger = ' style="cursor:pointer;"'
			}

			var build_markup = '<div class="modaal-wrapper modaal-' + self.options.type + animation_class + igClass + fullscreen_class + self.options.custom_class + '" id="' + self.scope.id + '"><div class="modaal-outer-wrapper"><div class="modaal-inner-wrapper"' + touchTrigger + '>';

					// hide if video
					if (self.options.type != 'video') {
						build_markup += '<div class="modaal-container"' + dimensionsStyle + '>';
					}

					// add the guts of the content
					build_markup +=	'<div class="' + wrap_class + ' modaal-focus" aria-hidden="false" aria-label="' + self.options.accessible_title + ' - ' + self.options.close_aria_label + '" role="dialog">';

							// If it's inline type, we want to clone content instead of dropping it straight in
							if (self.options.type == 'inline') {
								build_markup += '<div class="modaal-content-container" role="document"></div>';
							} else {
								// Drop in the content if it's not inline
								build_markup +=	content;
							}

					// close wrap_class
					build_markup += '</div>' + self.scope.close_btn;

					// hide if video
					if (self.options.type != 'video') {
						build_markup += '</div>';
					}

			// close off modaal-inner-wrapper
			build_markup +=	'</div>';
			
			// If type is image AND outer_controls is true: add gallery next and previous controls.
			if (self.options.type == 'image' && self.options.outer_controls === true) {
				build_markup += self.scope.prev_btn + self.scope.next_btn;
			}

			// close off modaal-wrapper
			build_markup +=	'</div></div>';

			// append ajax modal markup to dom
			if ($('#' + self.scope.id + '_overlay').length < 1) {
				self.dom.append(build_markup);
			}

			// if inline, clone content into space
			if (self.options.type == 'inline') {
				content+='#' + self.scope.id + ' .modaal-content-container' ;
			}

			// Trigger overlay show (which triggers modal show)
			self.modaal_overlay('show');
		},

		// Create Basic Inline Modal
		// ----------------------------------------------------------------
		create_basic : function() {
			var self = this;
			var target = $(self.scope.source);
			var content = '';

			if (target.length) {
				content = target.contents().detach();
				target.empty();
			} else {
				content = 'Content could not be loaded. Please check the source and try again.';
			}

			// now push content into markup
			self.build_modal(content);
		},

		// Create Instagram Modal
		// ----------------------------------------------------------------
		create_instagram : function() {
			var self = this;
			var id = self.options.instagram_id;
			var content = '';

			var error_msg = 'Instagram photo couldn\'t be loaded, please check the embed code and try again.';

			self.build_modal('<div class="modaal-content-container' + ( self.options.loading_class != '' ? ' ' + self.options.loading_class : '' ) + '">' + self.options.loading_content + '</div>' );

			// ID exists, is not empty null or undefined.
			if ( id != '' && id !== null && id !== undefined ) {
				// set up oembed url
				var ig_url = 'https://api.instagram.com/oembed?url=http://instagr.am/p/' + id + '/';

				$.ajax({
					url: ig_url,
					dataType: "jsonp",
					cache: false,
					success: function (data) {
						
						// Create temp dom element from which we'll clone into the modaal instance. This is required to bypass the unusual small thumb issue instagram oembed was serving up
						self.dom.append('<div id="temp-ig" style="width:0;height:0;overflow:hidden;">' + data.html + '</div>');
						
						// Check if it has loaded once before.
						// This is to stop the Embeds.process from throwing and error the first time it's being loaded.
						// private_options are individual to a modaal_scope so will not work across multiple scopes when checking if true, only that one item.
						if ( self.dom.attr('data-igloaded') ) {
							window.instgrm.Embeds.process();
						} else {
							// first time it's loaded, let's set a new private option to use next time it's opened.
							self.dom.attr('data-igloaded', 'true');
						}

						// now set location for new content
						// timeout is required as well to bypass the unusual small thumb issue instagram oembed was serving up
						var target = '#' + self.scope.id + ' .modaal-content-container';
						if ( $(target).length > 0) {
							setTimeout(function() {
								$('#temp-ig').contents().clone().appendTo( target );
								$('#temp-ig').remove();
							}, 1000);
						}
						
					},
					error: function() {
						content = error_msg;

						// now set location for new content
						var target = $('#' + self.scope.id + ' .modaal-content-container');
						if ( target.length > 0) {
							target.removeClass( self.options.loading_class ).addClass( self.options.ajax_error_class );
							target.html(content);
						}
					}
				});

			} else {
				content = error_msg;
			}

			return false;
		},

		// Fetch Ajax Data
		// ----------------------------------------------------------------
		fetch_ajax : function(url) {
			var self = this;
			var content = '';

			// If no accessible title, set it to 'Dialog Window'
			if ( self.options.accessible_title == null ) {
				self.options.accessible_title = 'Dialog Window'
			}

			if ( self.xhr !== null ){
				self.xhr.abort();
				self.xhr = null;
			}

			self.build_modal('<div class="modaal-content-container' + ( self.options.loading_class != '' ? ' ' + self.options.loading_class : '' ) + '">' + self.options.loading_content + '</div>' );

			self.xhr = $.ajax(url, {
				success: function(data) {
					// content fetch is successful so push it into markup
					var target = $('#' + self.scope.id).find('.modaal-content-container');
					if ( target.length > 0){
						target.removeClass( self.options.loading_class );
						target.html( data );

						self.options.ajax_success.call(self, target);
					}
				},
				error: function( xhr ) {
					// There were some errors so return an error message
					if ( xhr.statusText == 'abort' ){
						return;
					}

					var target = $('#' + self.scope.id + ' .modaal-content-container');
					if ( target.length > 0){
						target.removeClass( self.options.loading_class ).addClass( self.options.ajax_error_class );
						target.html( 'Content could not be loaded. Please check the source and try again.' );
					}
				}
			});
		},

		// Create Confirm Modal
		// ----------------------------------------------------------------
		create_confirm : function() {
			var self = this;
			var content;

			content = '<div class="modaal-content-container">' +
					'<h1 id="modaal-title">' + self.options.confirm_title + '</h1>' +
					'<div class="modaal-confirm-content">' + self.options.confirm_content + '</div>' +
						'<div class="modaal-confirm-wrap">' +
							'<button type="button" class="modaal-confirm-btn modaal-ok" aria-label="Confirm">' + self.options.confirm_button_text + '</button>' +
							'<button type="button" class="modaal-confirm-btn modaal-cancel" aria-label="Cancel">' + self.options.confirm_cancel_button_text + '</button>' +
						'</div>' +
					'</div>' +
				'</div>';

			// now push content into markup
			self.build_modal(content);
		},

		// Create Image/Gallery Modal
		// ----------------------------------------------------------------
		create_image : function() {
			var self = this;
			var content;

			var modaal_image_markup = '';
			var gallery_total;
			
			// If has group attribute
			if ( self.$elem.is('[data-group]') || self.$elem.is('[rel]') ) {

				// find gallery groups
				var use_group = self.$elem.is('[data-group]');
				var gallery_group = use_group ? self.$elem.attr('data-group') : self.$elem.attr('rel');
				var gallery_group_items = use_group ? $('[data-group="' + gallery_group + '"]') : $('[rel="' + gallery_group + '"]');

				// remove any previous active attribute to any in the group
				gallery_group_items.removeAttr('data-gallery-active', 'is_active');
				// add active attribute to the item clicked
				self.$elem.attr('data-gallery-active', 'is_active');

				// how many in the grouping are there (-1 to connect with each function starting with 0)
				gallery_total = gallery_group_items.length - 1;

				// prepare array for gallery data
				var gallery = [];

				// start preparing markup
				modaal_image_markup = '<div class="modaal-gallery-item-wrap">';

				// loop each grouping item and push it into our gallery array
				gallery_group_items.each(function(i, item) {
					// setup default content
					var img_src = '';
					var img_alt = '';
					var img_description = '';
					var img_active = false;
					var img_src_error = false;

					var data_modaal_desc = item.getAttribute('data-modaal-desc');
					var data_item_active = item.getAttribute('data-gallery-active');

					// if item has inline custom source, use that instead of href. Fall back to href if available.
					if ( $(item).attr('data-modaal-content-source') ) {
						img_src = $(item).attr('data-modaal-content-source');
					} else if ( $(item).attr('href') ) {
						img_src = $(item).attr('href');
					} else if ( $(item).attr('src') ) {
						img_src = $(item).attr('src');
					} else {
						img_src = 'trigger requires href or data-modaal-content-source attribute';
						img_src_error = true;
					}

					// Does it have a modaal description
					if ( data_modaal_desc != '' && data_modaal_desc !== null && data_modaal_desc !== undefined ) {
						img_alt = data_modaal_desc;
						img_description = '<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image ' + (i+1) + ' - </span>' + data_modaal_desc.replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</div>'
					} else {
						img_description = '<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image ' + (i+1) + '</span></div>';
					}

					// is it the active item
					if ( data_item_active ) {
						img_active = true
					}

					// set new object for values we want
					var gallery_item = {
						'url': img_src,
						'alt': img_alt,
						'rawdesc': data_modaal_desc,
						'desc': img_description,
						'active': img_active,
						'src_error': img_src_error
					};

					// push object into gallery array
					gallery.push( gallery_item );
				});

				// now loop through all items in the gallery and build up the markup
				for (var i = 0; i < gallery.length; i++) {
					// Set default active class, then check if array item active is true and update string for class
					var is_active = '';
					var aria_label = gallery[i].rawdesc ? 'Image: ' + gallery[i].rawdesc : 'Image ' + i + ' no description';

					if ( gallery[i].active ) {
						is_active = ' ' + self.private_options.active_class;
					}

					// if gallery item has source error, output message rather than undefined image
					var image_output = gallery[i].src_error ? gallery[i].url : '<img src="' + gallery[i].url + '" alt=" " style="width:100%">';

					// for each item build up the markup
					modaal_image_markup += '<div class="modaal-gallery-item gallery-item-' + i + is_active + '" aria-label="' + aria_label + '">' +
						image_output + gallery[i].desc +
					'</div>';
				}

				// Close off the markup for the gallery
				modaal_image_markup += '</div>';

				// Add next and previous buttons if outside
				if (self.options.outer_controls != true) {
					modaal_image_markup += self.scope.prev_btn + self.scope.next_btn;
				}
			} else {
				// This is only a single gallery item so let's grab the necessary values

				// define the source, check if content_source option exists, and use that or fall back to href.
				var this_img_src;
				var img_src_error = false;
				if ( self.$elem.attr('data-modaal-content-source') ) {
					this_img_src = self.$elem.attr('data-modaal-content-source');
				} else if ( self.$elem.attr('href') ) {
					this_img_src = self.$elem.attr('href');
				} else if ( self.$elem.attr('src') ) {
					this_img_src = self.$elem.attr('src');
				} else {
					this_img_src = 'trigger requires href or data-modaal-content-source attribute';
					img_src_error = true;
				}

				var this_img_alt_txt = '';
				var this_img_alt = '';
				var aria_label = '';

				if ( self.$elem.attr('data-modaal-desc') ) {
					aria_label = self.$elem.attr('data-modaal-desc');
					this_img_alt_txt = self.$elem.attr('data-modaal-desc');
					this_img_alt = '<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image - </span>' + this_img_alt_txt.replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</div>';
				} else {
					aria_label = "Image with no description";
				}

				// if image item has source error, output message rather than undefined image
				var image_output = img_src_error ? this_img_src : '<img src="' + this_img_src + '" alt=" " style="width:100%">';

				// build up the html
				modaal_image_markup = '<div class="modaal-gallery-item is_active" aria-label="' + aria_label + '">' +
					image_output + this_img_alt +
				'</div>';
			}

			// Update content variable
			content = modaal_image_markup;

			// now push content into markup
			self.build_modal(content);

			// setup next & prev buttons
			if ( $('.modaal-gallery-item.is_active').is('.gallery-item-0') ) {
				$('.modaal-gallery-prev').hide();
			}
			if ( $('.modaal-gallery-item.is_active').is('.gallery-item-' + gallery_total) ) {
				$('.modaal-gallery-next').hide();
			}
		},

		// Gallery Change Image
		// ----------------------------------------------------------------
		gallery_update : function(direction) {
			var self = this;
			var this_gallery = $('#' + self.scope.id);
			var this_gallery_item = this_gallery.find('.modaal-gallery-item');
			var this_gallery_total = this_gallery_item.length - 1;

			// if single item, don't proceed
			if ( this_gallery_total == 0 ) {
				return false;
			}

			var prev_btn = this_gallery.find('.modaal-gallery-prev'),
				next_btn = this_gallery.find('.modaal-gallery-next');

			var duration = 250;

			var new_img_w = 0,
				new_img_h = 0;

			// CB: Before image change
			var current_item = this_gallery.find( '.modaal-gallery-item.' + self.private_options.active_class ),
				incoming_item = ( direction == 'next' ? current_item.next( '.modaal-gallery-item' ) : current_item.prev( '.modaal-gallery-item' ) );
			self.options.before_image_change.call(self, current_item, incoming_item);

			// stop change if at start of end
			if ( direction == 'prev' && this_gallery.find('.gallery-item-0').hasClass('is_active') ) {
				return false;
			} else if ( direction == 'next' && this_gallery.find('.gallery-item-' + this_gallery_total).hasClass('is_active') ) {
				return false;
			}


			// lock dimensions
			current_item.stop().animate({
				opacity: 0
			}, duration, function(){
				// Move to appropriate image
				incoming_item.addClass('is_next').css({
					'position': 'absolute',
					'display': 'block',
					'opacity': 0
				});

				// Collect doc width
				var doc_width = $(document).width();
				var width_threshold = doc_width > 1140 ? 280 : 50;

				// start toggle to 'is_next'
				new_img_w = this_gallery.find('.modaal-gallery-item.is_next').width();
				new_img_h = this_gallery.find('.modaal-gallery-item.is_next').height();

				var new_natural_w = this_gallery.find('.modaal-gallery-item.is_next img').prop('naturalWidth');
				var new_natural_h = this_gallery.find('.modaal-gallery-item.is_next img').prop('naturalHeight');

				// if new image is wider than doc width
				if ( new_natural_w > (doc_width - width_threshold) ) {
					// set new width just below doc width
					new_img_w = doc_width - width_threshold;

					// Set temp widths so we can calulate the correct height;
					this_gallery.find('.modaal-gallery-item.is_next').css({ 'width': new_img_w });
					this_gallery.find('.modaal-gallery-item.is_next img').css({ 'width': new_img_w });

					// Set new height variable
					new_img_h = this_gallery.find('.modaal-gallery-item.is_next').find('img').height();
				} else {
					// new img is not wider than screen, so let's set the new dimensions
					new_img_w = new_natural_w;
					new_img_h = new_natural_h;
				}

				// resize gallery region
				this_gallery.find('.modaal-gallery-item-wrap').stop().animate({
					'width': new_img_w,
					'height': new_img_h
				}, duration, function() {
					// hide old active image
					current_item.removeClass(self.private_options.active_class + ' ' + self.options.gallery_active_class).removeAttr('style');
					current_item.find('img').removeAttr('style');

					// show new image
					incoming_item.addClass(self.private_options.active_class + ' ' + self.options.gallery_active_class).removeClass('is_next').css('position','');

					// animate in new image (now has the normal is_active class
					incoming_item.stop().animate({
						opacity: 1
					}, duration, function(){
						$(this).removeAttr('style').css({
							'width': '100%'
						});
						$(this).find('img').css('width', '100%');

						// remove dimension lock
						this_gallery.find('.modaal-gallery-item-wrap').removeAttr('style');

						// CB: After image change
						self.options.after_image_change.call( self, incoming_item );
					});

					// Focus on the new gallery item
					this_gallery.find('.modaal-gallery-item').removeAttr('tabindex');
					this_gallery.find('.modaal-gallery-item.' + self.private_options.active_class + '').attr('tabindex', '0').focus();

					// hide/show next/prev
					if ( this_gallery.find('.modaal-gallery-item.' + self.private_options.active_class).is('.gallery-item-0') ) {
						prev_btn.stop().animate({
							opacity: 0
						}, 150, function(){
							$(this).hide();
						});
					} else {
						prev_btn.stop().css({
							'display': 'block',
							'opacity': prev_btn.css('opacity')
						}).animate({
							opacity: 1
						}, 150);
					}
					if ( this_gallery.find('.modaal-gallery-item.' + self.private_options.active_class).is('.gallery-item-' + this_gallery_total) ) {
						next_btn.stop().animate({
							opacity: 0
						}, 150, function(){
							$(this).hide();
						});
					} else {
						next_btn.stop().css({
							'display': 'block',
							'opacity': prev_btn.css('opacity')
						}).animate({
							opacity: 1
						}, 150);
					}
				});
			});
		},

		// Create Video Modal
		// ----------------------------------------------------------------
		create_video : function(url) {
			var self = this;
			var content;

			// video markup
			content = '<iframe src="' + url + '" class="modaal-video-frame" frameborder="0" allowfullscreen></iframe>';

			// now push content into markup
			self.build_modal('<div class="modaal-video-container">' + content + '</div>');
		},

		// Create iFrame Modal
		// ----------------------------------------------------------------
		create_iframe : function(url) {
			var self = this;
			var content;

			if ( self.options.width !== null || self.options.width !== undefined || self.options.height !== null || self.options.height !== undefined ) {
				// video markup
				content = '<iframe src="' + url + '" class="modaal-iframe-elem" frameborder="0" allowfullscreen></iframe>';
			} else {
				content = '<div class="modaal-content-container">Please specify a width and height for your iframe</div>';
			}

			// now push content into markup
			self.build_modal(content);
		},

		// Open Modaal
		// ----------------------------------------------------------------
		modaal_open : function() {
			var self = this;
			var modal_wrapper = $( '#' + self.scope.id );
			var animation_type = self.options.animation;

			if (animation_type === 'none' ){
				modal_wrapper.removeClass('modaal-start_none');
				self.options.after_open.call(self, modal_wrapper);
			}

			// Open with fade
			if (animation_type === 'fade') {
				modal_wrapper.removeClass('modaal-start_fade');
			}

			// Open with slide down
			if (animation_type === 'slide-down') {
				modal_wrapper.removeClass('modaal-start_slide_down');
			}

			var focusTarget = modal_wrapper;

			// Switch focusTarget tabindex (switch from other modal if exists)
			$('.modaal-wrapper *[tabindex=0]').removeAttr('tabindex');

			if ( self.options.type == 'image' ) {
				focusTarget = $('#' + self.scope.id).find('.modaal-gallery-item.' + self.private_options.active_class);

			} else if ( modal_wrapper.find('.modaal-iframe-elem').length ) {
				focusTarget = modal_wrapper.find('.modaal-iframe-elem');

			} else if ( modal_wrapper.find('.modaal-video-wrap').length ) {
				focusTarget = modal_wrapper.find('.modaal-video-wrap');

			} else {
				focusTarget = modal_wrapper.find('.modaal-focus');

			}

			// now set the focus
			focusTarget.attr('tabindex', '0').focus();

			// Run after_open
			if (animation_type !== 'none') {
				// CB: after_open
				setTimeout(function() {
					self.options.after_open.call(self, modal_wrapper)
				}, self.options.after_callback_delay);
			}
		},

		// Close Modal
		// ----------------------------------------------------------------
		modaal_close : function() {
			var self = this;
			var modal_wrapper = $( '#' + self.scope.id );

			// CB: before_close
			self.options.before_close.call(self, modal_wrapper);

			if (self.xhr !== null){
				self.xhr.abort();
				self.xhr = null;
			}

			// Now we close the modal
			if (self.options.animation === 'none' ){
				modal_wrapper.addClass('modaal-start_none');
			}

			// Close with fade
			if (self.options.animation === 'fade') {
				modal_wrapper.addClass('modaal-start_fade');
			}

			// Close with slide up (using initial slide down)
			if (self.options.animation === 'slide-down') {
				modal_wrapper.addClass('modaal-start_slide_down');
			}

			// CB: after_close and remove
			setTimeout(function() {
				// clone inline content back to origin place
				if (self.options.type == 'inline') {
					$('#' + self.scope.id + ' .modaal-content-container').contents().detach().appendTo( self.scope.source )
				}
				// remove markup from dom
				modal_wrapper.remove();
				// CB: after_close
				self.options.after_close.call(self);
				// scope is now closed
				self.scope.is_open = false;

			}, self.options.after_callback_delay);

			// Call overlay hide
			self.modaal_overlay('hide');

			// Roll back to last focus state before modal open. If was closed programmatically, this might not be set
			if (self.lastFocus != null) {
				self.lastFocus.focus();
			}
		},

		// Overlay control (accepts action for show or hide)
		// ----------------------------------------------------------------
		modaal_overlay : function(action) {
			var self = this;

			if (action == 'show') {
				// Modal is open so update scope
				self.scope.is_open = true;

				// set body to overflow hidden if background_scroll is false
				if (! self.options.background_scroll) {
					self.dom.addClass('modaal-noscroll');
				}

				// append modaal overlay
				if ($('#' + self.scope.id + '_overlay').length < 1) {
					self.dom.append('<div class="modaal-overlay" id="' + self.scope.id + '_overlay"></div>');
				}

				// now show
				$('#' + self.scope.id + '_overlay').css('background', self.options.background).stop().animate({
					opacity: self.options.overlay_opacity
				}, self.options.animation_speed, function(){
					// now open the modal
					self.modaal_open();
				});

			} else if (action == 'hide') {

				// now hide the overlay
				$('#' + self.scope.id + '_overlay').stop().animate({
					opacity: 0
				}, self.options.animation_speed, function(){
					// remove overlay from dom
					$(this).remove();

					// remove body overflow lock
					self.dom.removeClass('modaal-noscroll');
				});
			}
		},

		// Check if is touch
		// ----------------------------------------------------------------
		is_touch : function() {
			return 'ontouchstart' in window || navigator.maxTouchPoints;
		}
	};

	// Define default object to store
	var modaal_existing_selectors = [];

	// Declare the modaal jQuery method
	// ------------------------------------------------------------
	$.fn.modaal = function(options) {
		return this.each(function (i) {
			var existing_modaal = $(this).data('modaal');

			if ( existing_modaal ){
				// Checking for string value, used for methods
				if (typeof(options) == 'string'){
					switch (options) {
						case 'open':
 							// create the modal
 							existing_modaal.create_modaal(existing_modaal);
							break;
						case 'close':
							existing_modaal.modaal_close();
							break;
					}
				}
			} else {
				// Not a string, so let's setup the modal ready to use
				var modaal = Object.create(Modaal);
				modaal.init(options, this);
				$.data(this, "modaal", modaal);

				// push this select into existing selectors array which is referenced during modaal_dom_observer
				modaal_existing_selectors.push({
					'element': $(this).attr('class'),
					'options': options
				});
			}
		});
	};

	// Default options
	// ------------------------------------------------------------
	$.fn.modaal.options = {

		//General
		type: 'inline',
		content_source: null,
		animation: 'fade',
		animation_speed: 300,
		after_callback_delay: 350,
		is_locked: false,
		hide_close: false,
		background: '#000',
		overlay_opacity: '0.8',
		overlay_close: true,
		accessible_title: 'Dialog Window',
		start_open: false,
		fullscreen: false,
		custom_class: '',
		background_scroll: false,
		should_open: true,
		close_text: 'Close',
		close_aria_label: 'Close (Press escape to close)',
		width: null,
		height: null,

		//Events
		before_open: function(){},
		after_open: function(){},
		before_close: function(){},
		after_close: function(){},
		source: function( element, src ){
			return src;
		},

		//Confirm Modal
		confirm_button_text: 'Confirm', // text on confirm button
		confirm_cancel_button_text: 'Cancel',
		confirm_title: 'Confirm Title', // title for confirm modal
		confirm_content: '<p>This is the default confirm dialog content. Replace me through the options</p>', // html for confirm message
		confirm_callback: function() {},
		confirm_cancel_callback: function() {},


		//Gallery Modal
		gallery_active_class: 'gallery_active_item',
		outer_controls:	false,
		before_image_change: function( current_item, incoming_item ) {},
		after_image_change: function( current_item ) {},

		//Ajax Modal
		loading_content: modaal_loading_spinner,
		loading_class: 'is_loading',
		ajax_error_class: 'modaal-error',
		ajax_success: function(){},

		//Instagram
		instagram_id: null
	};

	// Check and Set Inline Options
	// ------------------------------------------------------------
	function modaal_inline_options(self) {

		// new empty options
		var options = {};
		var inline_options = false;

		// option: type
		if ( self.attr('data-modaal-type') ) {
			inline_options = true;
			options.type = self.attr('data-modaal-type');
		}

		// option: type
		if ( self.attr('data-modaal-content-source') ) {
			inline_options = true;
			options.content_source = self.attr('data-modaal-content-source');
		}

		// option: animation
		if ( self.attr('data-modaal-animation') ) {
			inline_options = true;
			options.animation = self.attr('data-modaal-animation');
		}

		// option: animation_speed
		if ( self.attr('data-modaal-animation-speed') ) {
			inline_options = true;
			options.animation_speed = self.attr('data-modaal-animation-speed');
		}

		// option: after_callback_delay
		if ( self.attr('data-modaal-after-callback-delay') ) {
			inline_options = true;
			options.after_callback_delay = self.attr('data-modaal-after-callback-delay');
		}

		// option: is_locked
		if ( self.attr('data-modaal-is-locked') ) {
			inline_options = true;
			options.is_locked = (self.attr('data-modaal-is-locked') === 'true' ? true : false);
		}

		// option: hide_close
		if ( self.attr('data-modaal-hide-close') ) {
			inline_options = true;
			options.hide_close = (self.attr('data-modaal-hide-close') === 'true' ? true : false);
		}

		// option: background
		if ( self.attr('data-modaal-background') ) {
			inline_options = true;
			options.background = self.attr('data-modaal-background');
		}

		// option: overlay_opacity
		if ( self.attr('data-modaal-overlay-opacity') ) {
			inline_options = true;
			options.overlay_opacity = self.attr('data-modaal-overlay-opacity');
		}

		// option: overlay_close
		if ( self.attr('data-modaal-overlay-close') ) {
			inline_options = true;
			options.overlay_close = (self.attr('data-modaal-overlay-close') === 'false' ? false : true);
		}

		// option: accessible_title
		if ( self.attr('data-modaal-accessible-title') ) {
			inline_options = true;
			options.accessible_title = self.attr('data-modaal-accessible-title');
		}

		// option: start_open
		if ( self.attr('data-modaal-start-open') ) {
			inline_options = true;
			options.start_open = (self.attr('data-modaal-start-open') === 'true' ? true : false);
		}

		// option: fullscreen
		if ( self.attr('data-modaal-fullscreen') ) {
			inline_options = true;
			options.fullscreen = (self.attr('data-modaal-fullscreen') === 'true' ? true : false);
		}

		// option: custom_class
		if ( self.attr('data-modaal-custom-class') ) {
			inline_options = true;
			options.custom_class = self.attr('data-modaal-custom-class');
		}

		// option: close_text
		if ( self.attr('data-modaal-close-text') ) {
			inline_options = true;
			options.close_text = self.attr('data-modaal-close-text');
		}

		// option: close_aria_label
		if ( self.attr('data-modaal-close-aria-label') ) {
			inline_options = true;
			options.close_aria_label = self.attr('data-modaal-close-aria-label');
		}

		// option: background_scroll
		if ( self.attr('data-modaal-background-scroll') ) {
			inline_options = true;
			options.background_scroll = (self.attr('data-modaal-background-scroll') === 'true' ? true : false);
		}

		// option: width
		if ( self.attr('data-modaal-width') ) {
			inline_options = true;
			options.width = parseInt( self.attr('data-modaal-width') );
		}

		// option: height
		if ( self.attr('data-modaal-height') ) {
			inline_options = true;
			options.height = parseInt( self.attr('data-modaal-height') );
		}

		// option: confirm_button_text
		if ( self.attr('data-modaal-confirm-button-text') ) {
			inline_options = true;
			options.confirm_button_text = self.attr('data-modaal-confirm-button-text');
		}

		// option: confirm_cancel_button_text
		if ( self.attr('data-modaal-confirm-cancel-button-text') ) {
			inline_options = true;
			options.confirm_cancel_button_text = self.attr('data-modaal-confirm-cancel-button-text');
		}

		// option: confirm_title
		if ( self.attr('data-modaal-confirm-title') ) {
			inline_options = true;
			options.confirm_title = self.attr('data-modaal-confirm-title');
		}

		// option: confirm_content
		if ( self.attr('data-modaal-confirm-content') ) {
			inline_options = true;
			options.confirm_content = self.attr('data-modaal-confirm-content');
		}

		// option: gallery_active_class
		if ( self.attr('data-modaal-gallery-active-class') ) {
			inline_options = true;
			options.gallery_active_class = self.attr('data-modaal-gallery-active-class');
		}

		// option: loading_content
		if ( self.attr('data-modaal-loading-content') ) {
			inline_options = true;
			options.loading_content = self.attr('data-modaal-loading-content');
		}

		// option: loading_class
		if ( self.attr('data-modaal-loading-class') ) {
			inline_options = true;
			options.loading_class = self.attr('data-modaal-loading-class');
		}

		// option: ajax_error_class
		if ( self.attr('data-modaal-ajax-error-class') ) {
			inline_options = true;
			options.ajax_error_class = self.attr('data-modaal-ajax-error-class');
		}

		// option: start_open
		if ( self.attr('data-modaal-instagram-id') ) {
			inline_options = true;
			options.instagram_id = self.attr('data-modaal-instagram-id');
		}

		// now set it up for the trigger, but only if inline_options is true
		if ( inline_options ) {
			self.modaal(options);
		}
	};

	// On body load (or now, if already loaded), init any modaals defined inline
	// Ensure this is done after $.fn.modaal and default options are declared
	// ----------------------------------------------------------------
	$(function(){

		var single_modaal = $('.modaal');

		// Check for existing modaal elements
		if ( single_modaal.length ) {
			single_modaal.each(function() {
				var self = $(this);
				modaal_inline_options(self);
			});
		}

		// Obvserve DOM mutations for newly added triggers
		var modaal_dom_observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				if (mutation.addedNodes && mutation.addedNodes.length > 0) {
					// element added to DOM
					var findElement = [].some.call(mutation.addedNodes, function(el) {
						var elm = $(el);
						if ( elm.is('a') || elm.is('button') ) {
							
							if ( elm.hasClass('modaal') ) {
								// is inline Modaal, initialise options
								modaal_inline_options(elm);
							} else {
								// is not inline modaal. Check for existing selector
								modaal_existing_selectors.forEach(function(modaalSelector) {
									if ( modaalSelector.element == elm.attr('class') ) {
										$(elm).modaal( modaalSelector.options );
										return false;
									}
								});
							}

						}
					});
				}
			});
		});
		var observer_config = {
			subtree: true,
			attributes: true,
			childList: true,
			characterData: true
		};

		// pass in the target node, as well as the observer options
		setTimeout(function() {
			modaal_dom_observer.observe(document.body, observer_config);
		}, 500);

	});

} ( jQuery, window, document ) );;
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});;

/* Custom JS Functions */
jQuery.noConflict();


(function ($) {

  "use strict";

  $.fn.mobileMenu = function (options) {
    var settings = $.extend({
      targetWrapper: '.navbar-we-mega-menu',
      accordionMenu: 'true',
      toggledClass: 'toggled',
      pageSelector: 'body'
    }, options);

    if ($(window).width() <= 991) {
      $(settings.targetWrapper).addClass('mobile-main-menu');
    }

    var toggleButton = this;

    $(window).resize(function () {
      if ($(window).width() <= 991) {
        $(settings.targetWrapper).addClass('mobile-main-menu');
      } else {
        $(settings.targetWrapper).removeClass('mobile-main-menu');
        $('body').css('overflow', '');
        $('body').css('height', '');
        $('body').css('position', '');
        $(settings.pageSelector).removeClass(settings.toggledClass);
        $(settings.pageSelector).find('.overlay').remove();
        $(settings.pageSelector).css('position', '');
        item.removeClass('open');
        item.find('ul').css('display', '');
      }
    });

    function _weMegaMenuClear() {
      var wrapper = $(settings.pageSelector);
      var overlay = wrapper.find('.overlay');
      overlay.remove();
      wrapper.css({
        'width': '',
        'position': ''
      });
      wrapper.removeClass(settings.toggledClass);
      wrapper.find('div.region-we-mega-menu nav').removeClass('we-mobile-megamenu-active');

      if (overlay.length > 0) {
        wrapper.find('.btn-close').remove();
        overlay.remove();
        $('body').css('overflow', '');
        $('body').css('height', '');
        $('body').css('position', '');
      }
    }

    this.off('click.mobileMenu');
    this.on('click.mobileMenu', function (e) {
      var targetWrapper = $(this).closest('div.region-we-mega-menu').find('nav.navbar-we-mega-menu');
      var wrapper = $(settings.pageSelector);
      if (!wrapper.hasClass(settings.toggledClass)) {
        wrapper.addClass(settings.toggledClass).css('position', 'relative');
        $(settings.targetWrapper).addClass('mobile-main-menu');
        targetWrapper.addClass('we-mobile-megamenu-active');
        if (wrapper.find('.overlay').length == 0) {
          var overlay = $('<div class="overlay"></div>');
          overlay.prependTo(wrapper);
          overlay.click(function () {
            _weMegaMenuClear();
          });
          $('body').css('overflow', 'hidden');
          $('body').css('btn-close', 'hidden');
          $('body').css('height', '100%');
          $('body').css('position', 'relative');
        }
        if (wrapper.find('.btn-close').length == 0) {
          var btnClose = $('<span class="btn-close"></span>');
          btnClose.prependTo(wrapper);

          $('.btn-close').on('click', function (e) {
            _weMegaMenuClear();
            e.preventDefault();
            return false;
          });
        }

      } else {
        _weMegaMenuClear();
      }
      e.preventDefault();
      e.stopPropagation();
    });

    if (settings.accordionMenu == 'true') {
      var targetWrapper = $(this).closest('div.region-we-mega-menu').find('nav.navbar-we-mega-menu');
      var menu = $(targetWrapper).find('ul.we-mega-menu-ul').first();
      var item = menu.find('> li[data-submenu=1]');
      var item_active = menu.find('> li[data-submenu=1].active');
      if ($(window).width() <= 991) {
        item_active.addClass('open');
        item_active.find('> ul').css('display', 'block');
      }
      item.click(function (e) {
        if ($(window).width() <= 991) {
          var $this = $(this);
          var $sub_menu_inner = $this.find('> .we-mega-menu-submenu');
          if (!$this.hasClass('open')) {
            $(item).not($this).removeClass('open');
            item.find('> .we-mega-menu-submenu').slideUp();
            $this.toggleClass('open');
            if ($this.hasClass('open')) {
              $sub_menu_inner.slideDown();
              setTimeout(function () {
                $(targetWrapper).animate({
                  scrollTop: $this.offset().top
                }, 700);
              }, 500);

            } else {
              $sub_menu_inner.slideUp();
            }
            return false;
          }
        }
      });
    }
  }

}(jQuery));;
/*  Prototype JavaScript framework, version 1.5.0_rc0
 *  (c) 2005 Sam Stephenson <sam@conio.net>
 *
 *  Prototype is freely distributable under the terms of an MIT-style license.
 *  For details, see the Prototype web site: http://prototype.conio.net/
 *
/*--------------------------------------------------------------------------*/

var Prototype = {
  Version: '1.5.0_rc0',
  ScriptFragment: '(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)',

  emptyFunction: function() {},
  K: function(x) {return x}
}

var Class = {
  create: function() {
    return function() {
      this.initialize.apply(this, arguments);
    }
  }
}

var Abstract = new Object();

Object.extend = function(destination, source) {
  for (var property in source) {
    destination[property] = source[property];
  }
  return destination;
}

Object.inspect = function(object) {
  try {
    if (object == undefined) return 'undefined';
    if (object == null) return 'null';
    return object.inspect ? object.inspect() : object.toString();
  } catch (e) {
    if (e instanceof RangeError) return '...';
    throw e;
  }
}

Function.prototype.bind = function() {
  var __method = this, args = $A(arguments), object = args.shift();
  return function() {
    return __method.apply(object, args.concat($A(arguments)));
  }
}

Function.prototype.bindAsEventListener = function(object) {
  var __method = this;
  return function(event) {
    return __method.call(object, event || window.event);
  }
}

Object.extend(Number.prototype, {
  toColorPart: function() {
    var digits = this.toString(16);
    if (this < 16) return '0' + digits;
    return digits;
  },

  succ: function() {
    return this + 1;
  },

  times: function(iterator) {
    $R(0, this, true).each(iterator);
    return this;
  }
});

var Try = {
  these: function() {
    var returnValue;

    for (var i = 0; i < arguments.length; i++) {
      var lambda = arguments[i];
      try {
        returnValue = lambda();
        break;
      } catch (e) {}
    }

    return returnValue;
  }
}

/*--------------------------------------------------------------------------*/

var PeriodicalExecuter = Class.create();
PeriodicalExecuter.prototype = {
  initialize: function(callback, frequency) {
    this.callback = callback;
    this.frequency = frequency;
    this.currentlyExecuting = false;

    this.registerCallback();
  },

  registerCallback: function() {
    setInterval(this.onTimerEvent.bind(this), this.frequency * 1000);
  },

  onTimerEvent: function() {
    if (!this.currentlyExecuting) {
      try {
        this.currentlyExecuting = true;
        this.callback();
      } finally {
        this.currentlyExecuting = false;
      }
    }
  }
}
Object.extend(String.prototype, {
  gsub: function(pattern, replacement) {
    var result = '', source = this, match;
    replacement = arguments.callee.prepareReplacement(replacement);

    while (source.length > 0) {
      if (match = source.match(pattern)) {
        result += source.slice(0, match.index);
        result += (replacement(match) || '').toString();
        source  = source.slice(match.index + match[0].length);
      } else {
        result += source, source = '';
      }
    }
    return result;
  },

  sub: function(pattern, replacement, count) {
    replacement = this.gsub.prepareReplacement(replacement);
    count = count === undefined ? 1 : count;

    return this.gsub(pattern, function(match) {
      if (--count < 0) return match[0];
      return replacement(match);
    });
  },

  scan: function(pattern, iterator) {
    this.gsub(pattern, iterator);
    return this;
  },

  truncate: function(length, truncation) {
    length = length || 30;
    truncation = truncation === undefined ? '...' : truncation;
    return this.length > length ?
      this.slice(0, length - truncation.length) + truncation : this;
  },

  strip: function() {
    return this.replace(/^\s+/, '').replace(/\s+$/, '');
  },

  stripTags: function() {
    return this.replace(/<\/?[^>]+>/gi, '');
  },

  stripScripts: function() {
    return this.replace(new RegExp(Prototype.ScriptFragment, 'img'), '');
  },

  extractScripts: function() {
    var matchAll = new RegExp(Prototype.ScriptFragment, 'img');
    var matchOne = new RegExp(Prototype.ScriptFragment, 'im');
    return (this.match(matchAll) || []).map(function(scriptTag) {
      return (scriptTag.match(matchOne) || ['', ''])[1];
    });
  },

  evalScripts: function() {
    return this.extractScripts().map(function(script) { return eval(script) });
  },

  escapeHTML: function() {
    var div = document.createElement('div');
    var text = document.createTextNode(this);
    div.appendChild(text);
    return div.innerHTML;
  },

  unescapeHTML: function() {
    var div = document.createElement('div');
    div.innerHTML = this.stripTags();
    return div.childNodes[0] ? div.childNodes[0].nodeValue : '';
  },

  toQueryParams: function() {
    var pairs = this.match(/^\??(.*)$/)[1].split('&');
    return pairs.inject({}, function(params, pairString) {
      var pair = pairString.split('=');
      params[pair[0]] = pair[1];
      return params;
    });
  },

  toArray: function() {
    return this.split('');
  },

  camelize: function() {
    var oStringList = this.split('-');
    if (oStringList.length == 1) return oStringList[0];

    var camelizedString = this.indexOf('-') == 0
      ? oStringList[0].charAt(0).toUpperCase() + oStringList[0].substring(1)
      : oStringList[0];

    for (var i = 1, len = oStringList.length; i < len; i++) {
      var s = oStringList[i];
      camelizedString += s.charAt(0).toUpperCase() + s.substring(1);
    }

    return camelizedString;
  },

  inspect: function() {
    return "'" + this.replace(/\\/g, '\\\\').replace(/'/g, '\\\'') + "'";
  }
});

String.prototype.gsub.prepareReplacement = function(replacement) {
  if (typeof replacement == 'function') return replacement;
  var template = new Template(replacement);
  return function(match) { return template.evaluate(match) };
}

String.prototype.parseQuery = String.prototype.toQueryParams;

var Template = Class.create();
Template.Pattern = /(^|.|\r|\n)(#\{(.*?)\})/;
Template.prototype = {
  initialize: function(template, pattern) {
    this.template = template.toString();
    this.pattern  = pattern || Template.Pattern;
  },

  evaluate: function(object) {
    return this.template.gsub(this.pattern, function(match) {
      var before = match[1];
      if (before == '\\') return match[2];
      return before + (object[match[3]] || '').toString();
    });
  }
}

var $break    = new Object();
var $continue = new Object();

var Enumerable = {
  each: function(iterator) {
    var index = 0;
    try {
      this._each(function(value) {
        try {
          iterator(value, index++);
        } catch (e) {
          if (e != $continue) throw e;
        }
      });
    } catch (e) {
      if (e != $break) throw e;
    }
  },

  all: function(iterator) {
    var result = true;
    this.each(function(value, index) {
      result = result && !!(iterator || Prototype.K)(value, index);
      if (!result) throw $break;
    });
    return result;
  },

  any: function(iterator) {
    var result = true;
    this.each(function(value, index) {
      if (result = !!(iterator || Prototype.K)(value, index))
        throw $break;
    });
    return result;
  },

  collect: function(iterator) {
    var results = [];
    this.each(function(value, index) {
      results.push(iterator(value, index));
    });
    return results;
  },

  detect: function (iterator) {
    var result;
    this.each(function(value, index) {
      if (iterator(value, index)) {
        result = value;
        throw $break;
      }
    });
    return result;
  },

  findAll: function(iterator) {
    var results = [];
    this.each(function(value, index) {
      if (iterator(value, index))
        results.push(value);
    });
    return results;
  },

  grep: function(pattern, iterator) {
    var results = [];
    this.each(function(value, index) {
      var stringValue = value.toString();
      if (stringValue.match(pattern))
        results.push((iterator || Prototype.K)(value, index));
    })
    return results;
  },

  include: function(object) {
    var found = false;
    this.each(function(value) {
      if (value == object) {
        found = true;
        throw $break;
      }
    });
    return found;
  },

  inject: function(memo, iterator) {
    this.each(function(value, index) {
      memo = iterator(memo, value, index);
    });
    return memo;
  },

  invoke: function(method) {
    var args = $A(arguments).slice(1);
    return this.collect(function(value) {
      return value[method].apply(value, args);
    });
  },

  max: function(iterator) {
    var result;
    this.each(function(value, index) {
      value = (iterator || Prototype.K)(value, index);
      if (result == undefined || value >= result)
        result = value;
    });
    return result;
  },

  min: function(iterator) {
    var result;
    this.each(function(value, index) {
      value = (iterator || Prototype.K)(value, index);
      if (result == undefined || value < result)
        result = value;
    });
    return result;
  },

  partition: function(iterator) {
    var trues = [], falses = [];
    this.each(function(value, index) {
      ((iterator || Prototype.K)(value, index) ?
        trues : falses).push(value);
    });
    return [trues, falses];
  },

  pluck: function(property) {
    var results = [];
    this.each(function(value, index) {
      results.push(value[property]);
    });
    return results;
  },

  reject: function(iterator) {
    var results = [];
    this.each(function(value, index) {
      if (!iterator(value, index))
        results.push(value);
    });
    return results;
  },

  sortBy: function(iterator) {
    return this.collect(function(value, index) {
      return {value: value, criteria: iterator(value, index)};
    }).sort(function(left, right) {
      var a = left.criteria, b = right.criteria;
      return a < b ? -1 : a > b ? 1 : 0;
    }).pluck('value');
  },

  toArray: function() {
    return this.collect(Prototype.K);
  },

  zip: function() {
    var iterator = Prototype.K, args = $A(arguments);
    if (typeof args.last() == 'function')
      iterator = args.pop();

    var collections = [this].concat(args).map($A);
    return this.map(function(value, index) {
      return iterator(collections.pluck(index));
    });
  },

  inspect: function() {
    return '#<Enumerable:' + this.toArray().inspect() + '>';
  }
}

Object.extend(Enumerable, {
  map:     Enumerable.collect,
  find:    Enumerable.detect,
  select:  Enumerable.findAll,
  member:  Enumerable.include,
  entries: Enumerable.toArray
});
var $A = Array.from = function(iterable) {
  if (!iterable) return [];
  if (iterable.toArray) {
    return iterable.toArray();
  } else {
    var results = [];
    for (var i = 0; i < iterable.length; i++)
      results.push(iterable[i]);
    return results;
  }
}

Object.extend(Array.prototype, Enumerable);

if (!Array.prototype._reverse)
  Array.prototype._reverse = Array.prototype.reverse;

Object.extend(Array.prototype, {
  _each: function(iterator) {
    for (var i = 0; i < this.length; i++)
      iterator(this[i]);
  },

  clear: function() {
    this.length = 0;
    return this;
  },

  first: function() {
    return this[0];
  },

  last: function() {
    return this[this.length - 1];
  },

  compact: function() {
    return this.select(function(value) {
      return value != undefined || value != null;
    });
  },

  flatten: function() {
    return this.inject([], function(array, value) {
      return array.concat(value && value.constructor == Array ?
        value.flatten() : [value]);
    });
  },

  without: function() {
    var values = $A(arguments);
    return this.select(function(value) {
      return !values.include(value);
    });
  },

  indexOf: function(object) {
    for (var i = 0; i < this.length; i++)
      if (this[i] == object) return i;
    return -1;
  },

  reverse: function(inline) {
    return (inline !== false ? this : this.toArray())._reverse();
  },

  inspect: function() {
    return '[' + this.map(Object.inspect).join(', ') + ']';
  }
});
var Hash = {
  _each: function(iterator) {
    for (var key in this) {
      var value = this[key];
      if (typeof value == 'function') continue;

      var pair = [key, value];
      pair.key = key;
      pair.value = value;
      iterator(pair);
    }
  },

  keys: function() {
    return this.pluck('key');
  },

  values: function() {
    return this.pluck('value');
  },

  merge: function(hash) {
    return $H(hash).inject($H(this), function(mergedHash, pair) {
      mergedHash[pair.key] = pair.value;
      return mergedHash;
    });
  },

  toQueryString: function() {
    return this.map(function(pair) {
      return pair.map(encodeURIComponent).join('=');
    }).join('&');
  },

  inspect: function() {
    return '#<Hash:{' + this.map(function(pair) {
      return pair.map(Object.inspect).join(': ');
    }).join(', ') + '}>';
  }
}

function $H(object) {
  var hash = Object.extend({}, object || {});
  Object.extend(hash, Enumerable);
  Object.extend(hash, Hash);
  return hash;
}
ObjectRange = Class.create();
Object.extend(ObjectRange.prototype, Enumerable);
Object.extend(ObjectRange.prototype, {
  initialize: function(start, end, exclusive) {
    this.start = start;
    this.end = end;
    this.exclusive = exclusive;
  },

  _each: function(iterator) {
    var value = this.start;
    do {
      iterator(value);
      value = value.succ();
    } while (this.include(value));
  },

  include: function(value) {
    if (value < this.start)
      return false;
    if (this.exclusive)
      return value < this.end;
    return value <= this.end;
  }
});

var $R = function(start, end, exclusive) {
  return new ObjectRange(start, end, exclusive);
}

var Ajax = {
  getTransport: function() {
    return Try.these(
      function() {return new XMLHttpRequest()},
      function() {return new ActiveXObject('Msxml2.XMLHTTP')},
      function() {return new ActiveXObject('Microsoft.XMLHTTP')}
    ) || false;
  },

  activeRequestCount: 0
}

Ajax.Responders = {
  responders: [],

  _each: function(iterator) {
    this.responders._each(iterator);
  },

  register: function(responderToAdd) {
    if (!this.include(responderToAdd))
      this.responders.push(responderToAdd);
  },

  unregister: function(responderToRemove) {
    this.responders = this.responders.without(responderToRemove);
  },

  dispatch: function(callback, request, transport, json) {
    this.each(function(responder) {
      if (responder[callback] && typeof responder[callback] == 'function') {
        try {
          responder[callback].apply(responder, [request, transport, json]);
        } catch (e) {}
      }
    });
  }
};

Object.extend(Ajax.Responders, Enumerable);

Ajax.Responders.register({
  onCreate: function() {
    Ajax.activeRequestCount++;
  },

  onComplete: function() {
    Ajax.activeRequestCount--;
  }
});

Ajax.Base = function() {};
Ajax.Base.prototype = {
  setOptions: function(options) {
    this.options = {
      method:       'post',
      asynchronous: true,
      contentType:  'application/x-www-form-urlencoded',
      parameters:   ''
    }
    Object.extend(this.options, options || {});
  },

  responseIsSuccess: function() {
    return this.transport.status == undefined
        || this.transport.status == 0
        || (this.transport.status >= 200 && this.transport.status < 300);
  },

  responseIsFailure: function() {
    return !this.responseIsSuccess();
  }
}

Ajax.Request = Class.create();
Ajax.Request.Events =
  ['Uninitialized', 'Loading', 'Loaded', 'Interactive', 'Complete'];

Ajax.Request.prototype = Object.extend(new Ajax.Base(), {
  initialize: function(url, options) {
    this.transport = Ajax.getTransport();
    this.setOptions(options);
    this.request(url);
  },

  request: function(url) {
    var parameters = this.options.parameters || '';
    if (parameters.length > 0) parameters += '&_=';

    try {
      this.url = url;
      if (this.options.method == 'get' && parameters.length > 0)
        this.url += (this.url.match(/\?/) ? '&' : '?') + parameters;

      Ajax.Responders.dispatch('onCreate', this, this.transport);

      this.transport.open(this.options.method, this.url,
        this.options.asynchronous);

      if (this.options.asynchronous) {
        this.transport.onreadystatechange = this.onStateChange.bind(this);
        setTimeout((function() {this.respondToReadyState(1)}).bind(this), 10);
      }

      this.setRequestHeaders();

      var body = this.options.postBody ? this.options.postBody : parameters;
      this.transport.send(this.options.method == 'post' ? body : null);

    } catch (e) {
      this.dispatchException(e);
    }
  },

  setRequestHeaders: function() {
    var requestHeaders =
      ['X-Requested-With', 'XMLHttpRequest',
       'X-Prototype-Version', Prototype.Version,
       'Accept', 'text/javascript, text/html, application/xml, text/xml, */*'];

    if (this.options.method == 'post') {
      requestHeaders.push('Content-type', this.options.contentType);

      /* Force "Connection: close" for Mozilla browsers to work around
       * a bug where XMLHttpReqeuest sends an incorrect Content-length
       * header. See Mozilla Bugzilla #246651.
       */
      if (this.transport.overrideMimeType)
        requestHeaders.push('Connection', 'close');
    }

    if (this.options.requestHeaders)
      requestHeaders.push.apply(requestHeaders, this.options.requestHeaders);

    for (var i = 0; i < requestHeaders.length; i += 2)
      this.transport.setRequestHeader(requestHeaders[i], requestHeaders[i+1]);
  },

  onStateChange: function() {
    var readyState = this.transport.readyState;
    if (readyState != 1)
      this.respondToReadyState(this.transport.readyState);
  },

  header: function(name) {
    try {
      return this.transport.getResponseHeader(name);
    } catch (e) {}
  },

  evalJSON: function() {
    try {
      return eval('(' + this.header('X-JSON') + ')');
    } catch (e) {}
  },

  evalResponse: function() {
    try {
      return eval(this.transport.responseText);
    } catch (e) {
      this.dispatchException(e);
    }
  },

  respondToReadyState: function(readyState) {
    var event = Ajax.Request.Events[readyState];
    var transport = this.transport, json = this.evalJSON();

    if (event == 'Complete') {
      try {
        (this.options['on' + this.transport.status]
         || this.options['on' + (this.responseIsSuccess() ? 'Success' : 'Failure')]
         || Prototype.emptyFunction)(transport, json);
      } catch (e) {
        this.dispatchException(e);
      }

      if ((this.header('Content-type') || '').match(/^text\/javascript/i))
        this.evalResponse();
    }

    try {
      (this.options['on' + event] || Prototype.emptyFunction)(transport, json);
      Ajax.Responders.dispatch('on' + event, this, transport, json);
    } catch (e) {
      this.dispatchException(e);
    }

    /* Avoid memory leak in MSIE: clean up the oncomplete event handler */
    if (event == 'Complete')
      this.transport.onreadystatechange = Prototype.emptyFunction;
  },

  dispatchException: function(exception) {
    (this.options.onException || Prototype.emptyFunction)(this, exception);
    Ajax.Responders.dispatch('onException', this, exception);
  }
});

Ajax.Updater = Class.create();

Object.extend(Object.extend(Ajax.Updater.prototype, Ajax.Request.prototype), {
  initialize: function(container, url, options) {
    this.containers = {
      success: container.success ? $(container.success) : $(container),
      failure: container.failure ? $(container.failure) :
        (container.success ? null : $(container))
    }

    this.transport = Ajax.getTransport();
    this.setOptions(options);

    var onComplete = this.options.onComplete || Prototype.emptyFunction;
    this.options.onComplete = (function(transport, object) {
      this.updateContent();
      onComplete(transport, object);
    }).bind(this);

    this.request(url);
  },

  updateContent: function() {
    var receiver = this.responseIsSuccess() ?
      this.containers.success : this.containers.failure;
    var response = this.transport.responseText;

    if (!this.options.evalScripts)
      response = response.stripScripts();

    if (receiver) {
      if (this.options.insertion) {
        new this.options.insertion(receiver, response);
      } else {
        Element.update(receiver, response);
      }
    }

    if (this.responseIsSuccess()) {
      if (this.onComplete)
        setTimeout(this.onComplete.bind(this), 10);
    }
  }
});

Ajax.PeriodicalUpdater = Class.create();
Ajax.PeriodicalUpdater.prototype = Object.extend(new Ajax.Base(), {
  initialize: function(container, url, options) {
    this.setOptions(options);
    this.onComplete = this.options.onComplete;

    this.frequency = (this.options.frequency || 2);
    this.decay = (this.options.decay || 1);

    this.updater = {};
    this.container = container;
    this.url = url;

    this.start();
  },

  start: function() {
    this.options.onComplete = this.updateComplete.bind(this);
    this.onTimerEvent();
  },

  stop: function() {
    this.updater.onComplete = undefined;
    clearTimeout(this.timer);
    (this.onComplete || Prototype.emptyFunction).apply(this, arguments);
  },

  updateComplete: function(request) {
    if (this.options.decay) {
      this.decay = (request.responseText == this.lastText ?
        this.decay * this.options.decay : 1);

      this.lastText = request.responseText;
    }
    this.timer = setTimeout(this.onTimerEvent.bind(this),
      this.decay * this.frequency * 1000);
  },

  onTimerEvent: function() {
    this.updater = new Ajax.Updater(this.container, this.url, this.options);
  }
});
function $() {
  var results = [], element;
  for (var i = 0; i < arguments.length; i++) {
    element = arguments[i];
    if (typeof element == 'string')
      element = document.getElementById(element);
    results.push(Element.extend(element));
  }
  return results.length < 2 ? results[0] : results;
}

document.getElementsByClassName = function(className, parentElement) {
  var children = ($(parentElement) || document.body).getElementsByTagName('*');
  return $A(children).inject([], function(elements, child) {
    if (child.className.match(new RegExp("(^|\\s)" + className + "(\\s|$)")))
      elements.push(Element.extend(child));
    return elements;
  });
}

/*--------------------------------------------------------------------------*/

if (!window.Element)
  var Element = new Object();

Element.extend = function(element) {
  if (!element) return;
  if (_nativeExtensions) return element;

  if (!element._extended && element.tagName && element != window) {
    var methods = Element.Methods, cache = Element.extend.cache;
    for (property in methods) {
      var value = methods[property];
      if (typeof value == 'function')
        element[property] = cache.findOrStore(value);
    }
  }

  element._extended = true;
  return element;
}

Element.extend.cache = {
  findOrStore: function(value) {
    return this[value] = this[value] || function() {
      return value.apply(null, [this].concat($A(arguments)));
    }
  }
}

Element.Methods = {
  visible: function(element) {
    return $(element).style.display != 'none';
  },

  toggle: function() {
    for (var i = 0; i < arguments.length; i++) {
      var element = $(arguments[i]);
      Element[Element.visible(element) ? 'hide' : 'show'](element);
    }
  },

  hide: function() {
    for (var i = 0; i < arguments.length; i++) {
      var element = $(arguments[i]);
      element.style.display = 'none';
    }
  },

  show: function() {
    for (var i = 0; i < arguments.length; i++) {
      var element = $(arguments[i]);
      element.style.display = '';
    }
  },

  remove: function(element) {
    element = $(element);
    element.parentNode.removeChild(element);
  },

  update: function(element, html) {
    $(element).innerHTML = html.stripScripts();
    setTimeout(function() {html.evalScripts()}, 10);
  },

  replace: function(element, html) {
    element = $(element);
    if (element.outerHTML) {
      element.outerHTML = html.stripScripts();
    } else {
      var range = element.ownerDocument.createRange();
      range.selectNodeContents(element);
      element.parentNode.replaceChild(
        range.createContextualFragment(html.stripScripts()), element);
    }
    setTimeout(function() {html.evalScripts()}, 10);
  },

  getHeight: function(element) {
    element = $(element);
    return element.offsetHeight;
  },

  classNames: function(element) {
    return new Element.ClassNames(element);
  },

  hasClassName: function(element, className) {
    if (!(element = $(element))) return;
    return Element.classNames(element).include(className);
  },

  addClassName: function(element, className) {
    if (!(element = $(element))) return;
    return Element.classNames(element).add(className);
  },

  removeClassName: function(element, className) {
    if (!(element = $(element))) return;
    return Element.classNames(element).remove(className);
  },

  // removes whitespace-only text node children
  cleanWhitespace: function(element) {
    element = $(element);
    for (var i = 0; i < element.childNodes.length; i++) {
      var node = element.childNodes[i];
      if (node.nodeType == 3 && !/\S/.test(node.nodeValue))
        Element.remove(node);
    }
  },

  empty: function(element) {
    return $(element).innerHTML.match(/^\s*$/);
  },

  childOf: function(element, ancestor) {
    element = $(element), ancestor = $(ancestor);
    while (element = element.parentNode)
      if (element == ancestor) return true;
    return false;
  },

  scrollTo: function(element) {
    element = $(element);
    var x = element.x ? element.x : element.offsetLeft,
        y = element.y ? element.y : element.offsetTop;
    window.scrollTo(x, y);
  },

  getStyle: function(element, style) {
    element = $(element);
    var value = element.style[style.camelize()];
    if (!value) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        var css = document.defaultView.getComputedStyle(element, null);
        value = css ? css.getPropertyValue(style) : null;
      } else if (element.currentStyle) {
        value = element.currentStyle[style.camelize()];
      }
    }

    if (window.opera && ['left', 'top', 'right', 'bottom'].include(style))
      if (Element.getStyle(element, 'position') == 'static') value = 'auto';

    return value == 'auto' ? null : value;
  },

  setStyle: function(element, style) {
    element = $(element);
    for (var name in style)
      element.style[name.camelize()] = style[name];
  },

  getDimensions: function(element) {
    element = $(element);
    if (Element.getStyle(element, 'display') != 'none')
      return {width: element.offsetWidth, height: element.offsetHeight};

    // All *Width and *Height properties give 0 on elements with display none,
    // so enable the element temporarily
    var els = element.style;
    var originalVisibility = els.visibility;
    var originalPosition = els.position;
    els.visibility = 'hidden';
    els.position = 'absolute';
    els.display = '';
    var originalWidth = element.clientWidth;
    var originalHeight = element.clientHeight;
    els.display = 'none';
    els.position = originalPosition;
    els.visibility = originalVisibility;
    return {width: originalWidth, height: originalHeight};
  },

  makePositioned: function(element) {
    element = $(element);
    var pos = Element.getStyle(element, 'position');
    if (pos == 'static' || !pos) {
      element._madePositioned = true;
      element.style.position = 'relative';
      // Opera returns the offset relative to the positioning context, when an
      // element is position relative but top and left have not been defined
      if (window.opera) {
        element.style.top = 0;
        element.style.left = 0;
      }
    }
  },

  undoPositioned: function(element) {
    element = $(element);
    if (element._madePositioned) {
      element._madePositioned = undefined;
      element.style.position =
        element.style.top =
        element.style.left =
        element.style.bottom =
        element.style.right = '';
    }
  },

  makeClipping: function(element) {
    element = $(element);
    if (element._overflow) return;
    element._overflow = element.style.overflow;
    if ((Element.getStyle(element, 'overflow') || 'visible') != 'hidden')
      element.style.overflow = 'hidden';
  },

  undoClipping: function(element) {
    element = $(element);
    if (element._overflow) return;
    element.style.overflow = element._overflow;
    element._overflow = undefined;
  }
}

Object.extend(Element, Element.Methods);

var _nativeExtensions = false;

if(!HTMLElement && /Konqueror|Safari|KHTML/.test(navigator.userAgent)) {
  var HTMLElement = {}
  HTMLElement.prototype = document.createElement('div').__proto__;
}

Element.addMethods = function(methods) {
  Object.extend(Element.Methods, methods || {});

  if(typeof HTMLElement != 'undefined') {
    var methods = Element.Methods, cache = Element.extend.cache;
    for (property in methods) {
      var value = methods[property];
      if (typeof value == 'function')
        HTMLElement.prototype[property] = cache.findOrStore(value);
    }
    _nativeExtensions = true;
  }
}

Element.addMethods();

var Toggle = new Object();
Toggle.display = Element.toggle;

/*--------------------------------------------------------------------------*/

Abstract.Insertion = function(adjacency) {
  this.adjacency = adjacency;
}

Abstract.Insertion.prototype = {
  initialize: function(element, content) {
    this.element = $(element);
    this.content = content.stripScripts();

    if (this.adjacency && this.element.insertAdjacentHTML) {
      try {
        this.element.insertAdjacentHTML(this.adjacency, this.content);
      } catch (e) {
        var tagName = this.element.tagName.toLowerCase();
        if (tagName == 'tbody' || tagName == 'tr') {
          this.insertContent(this.contentFromAnonymousTable());
        } else {
          throw e;
        }
      }
    } else {
      this.range = this.element.ownerDocument.createRange();
      if (this.initializeRange) this.initializeRange();
      this.insertContent([this.range.createContextualFragment(this.content)]);
    }

    setTimeout(function() {content.evalScripts()}, 10);
  },

  contentFromAnonymousTable: function() {
    var div = document.createElement('div');
    div.innerHTML = '<table><tbody>' + this.content + '</tbody></table>';
    return $A(div.childNodes[0].childNodes[0].childNodes);
  }
}

var Insertion = new Object();

Insertion.Before = Class.create();
Insertion.Before.prototype = Object.extend(new Abstract.Insertion('beforeBegin'), {
  initializeRange: function() {
    this.range.setStartBefore(this.element);
  },

  insertContent: function(fragments) {
    fragments.each((function(fragment) {
      this.element.parentNode.insertBefore(fragment, this.element);
    }).bind(this));
  }
});

Insertion.Top = Class.create();
Insertion.Top.prototype = Object.extend(new Abstract.Insertion('afterBegin'), {
  initializeRange: function() {
    this.range.selectNodeContents(this.element);
    this.range.collapse(true);
  },

  insertContent: function(fragments) {
    fragments.reverse(false).each((function(fragment) {
      this.element.insertBefore(fragment, this.element.firstChild);
    }).bind(this));
  }
});

Insertion.Bottom = Class.create();
Insertion.Bottom.prototype = Object.extend(new Abstract.Insertion('beforeEnd'), {
  initializeRange: function() {
    this.range.selectNodeContents(this.element);
    this.range.collapse(this.element);
  },

  insertContent: function(fragments) {
    fragments.each((function(fragment) {
      this.element.appendChild(fragment);
    }).bind(this));
  }
});

Insertion.After = Class.create();
Insertion.After.prototype = Object.extend(new Abstract.Insertion('afterEnd'), {
  initializeRange: function() {
    this.range.setStartAfter(this.element);
  },

  insertContent: function(fragments) {
    fragments.each((function(fragment) {
      this.element.parentNode.insertBefore(fragment,
        this.element.nextSibling);
    }).bind(this));
  }
});

/*--------------------------------------------------------------------------*/

Element.ClassNames = Class.create();
Element.ClassNames.prototype = {
  initialize: function(element) {
    this.element = $(element);
  },

  _each: function(iterator) {
    this.element.className.split(/\s+/).select(function(name) {
      return name.length > 0;
    })._each(iterator);
  },

  set: function(className) {
    this.element.className = className;
  },

  add: function(classNameToAdd) {
    if (this.include(classNameToAdd)) return;
    this.set(this.toArray().concat(classNameToAdd).join(' '));
  },

  remove: function(classNameToRemove) {
    if (!this.include(classNameToRemove)) return;
    this.set(this.select(function(className) {
      return className != classNameToRemove;
    }).join(' '));
  },

  toString: function() {
    return this.toArray().join(' ');
  }
}

Object.extend(Element.ClassNames.prototype, Enumerable);
var Selector = Class.create();
Selector.prototype = {
  initialize: function(expression) {
    this.params = {classNames: []};
    this.expression = expression.toString().strip();
    this.parseExpression();
    this.compileMatcher();
  },

  parseExpression: function() {
    function abort(message) { throw 'Parse error in selector: ' + message; }

    if (this.expression == '')  abort('empty expression');

    var params = this.params, expr = this.expression, match, modifier, clause, rest;
    while (match = expr.match(/^(.*)\[([a-z0-9_:-]+?)(?:([~\|!]?=)(?:"([^"]*)"|([^\]\s]*)))?\]$/i)) {
      params.attributes = params.attributes || [];
      params.attributes.push({name: match[2], operator: match[3], value: match[4] || match[5] || ''});
      expr = match[1];
    }

    if (expr == '*') return this.params.wildcard = true;

    while (match = expr.match(/^([^a-z0-9_-])?([a-z0-9_-]+)(.*)/i)) {
      modifier = match[1], clause = match[2], rest = match[3];
      switch (modifier) {
        case '#':       params.id = clause; break;
        case '.':       params.classNames.push(clause); break;
        case '':
        case undefined: params.tagName = clause.toUpperCase(); break;
        default:        abort(expr.inspect());
      }
      expr = rest;
    }

    if (expr.length > 0) abort(expr.inspect());
  },

  buildMatchExpression: function() {
    var params = this.params, conditions = [], clause;

    if (params.wildcard)
      conditions.push('true');
    if (clause = params.id)
      conditions.push('element.id == ' + clause.inspect());
    if (clause = params.tagName)
      conditions.push('element.tagName.toUpperCase() == ' + clause.inspect());
    if ((clause = params.classNames).length > 0)
      for (var i = 0; i < clause.length; i++)
        conditions.push('Element.hasClassName(element, ' + clause[i].inspect() + ')');
    if (clause = params.attributes) {
      clause.each(function(attribute) {
        var value = 'element.getAttribute(' + attribute.name.inspect() + ')';
        var splitValueBy = function(delimiter) {
          return value + ' && ' + value + '.split(' + delimiter.inspect() + ')';
        }

        switch (attribute.operator) {
          case '=':       conditions.push(value + ' == ' + attribute.value.inspect()); break;
          case '~=':      conditions.push(splitValueBy(' ') + '.include(' + attribute.value.inspect() + ')'); break;
          case '|=':      conditions.push(
                            splitValueBy('-') + '.first().toUpperCase() == ' + attribute.value.toUpperCase().inspect()
                          ); break;
          case '!=':      conditions.push(value + ' != ' + attribute.value.inspect()); break;
          case '':
          case undefined: conditions.push(value + ' != null'); break;
          default:        throw 'Unknown operator ' + attribute.operator + ' in selector';
        }
      });
    }

    return conditions.join(' && ');
  },

  compileMatcher: function() {
    this.match = new Function('element', 'if (!element.tagName) return false; \
      return ' + this.buildMatchExpression());
  },

  findElements: function(scope) {
    var element;

    if (element = $(this.params.id))
      if (this.match(element))
        if (!scope || Element.childOf(element, scope))
          return [element];

    scope = (scope || document).getElementsByTagName(this.params.tagName || '*');

    var results = [];
    for (var i = 0; i < scope.length; i++)
      if (this.match(element = scope[i]))
        results.push(Element.extend(element));

    return results;
  },

  toString: function() {
    return this.expression;
  }
}

function $$() {
  return $A(arguments).map(function(expression) {
    return expression.strip().split(/\s+/).inject([null], function(results, expr) {
      var selector = new Selector(expr);
      return results.map(selector.findElements.bind(selector)).flatten();
    });
  }).flatten();
}
var Field = {
  clear: function() {
    for (var i = 0; i < arguments.length; i++)
      $(arguments[i]).value = '';
  },

  focus: function(element) {
    $(element).focus();
  },

  present: function() {
    for (var i = 0; i < arguments.length; i++)
      if ($(arguments[i]).value == '') return false;
    return true;
  },

  select: function(element) {
    $(element).select();
  },

  activate: function(element) {
    element = $(element);
    element.focus();
    if (element.select)
      element.select();
  }
}

/*--------------------------------------------------------------------------*/

var Form = {
  serialize: function(form) {
    var elements = Form.getElements($(form));
    var queryComponents = new Array();

    for (var i = 0; i < elements.length; i++) {
      var queryComponent = Form.Element.serialize(elements[i]);
      if (queryComponent)
        queryComponents.push(queryComponent);
    }

    return queryComponents.join('&');
  },

  getElements: function(form) {
    form = $(form);
    var elements = new Array();

    for (var tagName in Form.Element.Serializers) {
      var tagElements = form.getElementsByTagName(tagName);
      for (var j = 0; j < tagElements.length; j++)
        elements.push(tagElements[j]);
    }
    return elements;
  },

  getInputs: function(form, typeName, name) {
    form = $(form);
    var inputs = form.getElementsByTagName('input');

    if (!typeName && !name)
      return inputs;

    var matchingInputs = new Array();
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      if ((typeName && input.type != typeName) ||
          (name && input.name != name))
        continue;
      matchingInputs.push(input);
    }

    return matchingInputs;
  },

  disable: function(form) {
    var elements = Form.getElements(form);
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.blur();
      element.disabled = 'true';
    }
  },

  enable: function(form) {
    var elements = Form.getElements(form);
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.disabled = '';
    }
  },

  findFirstElement: function(form) {
    return Form.getElements(form).find(function(element) {
      return element.type != 'hidden' && !element.disabled &&
        ['input', 'select', 'textarea'].include(element.tagName.toLowerCase());
    });
  },

  focusFirstElement: function(form) {
    Field.activate(Form.findFirstElement(form));
  },

  reset: function(form) {
    $(form).reset();
    b = getElementById("submitButton")
    b.disabled = false
    b.value = "Submit"
  }
}

Form.Element = {
  serialize: function(element) {
    element = $(element);
    var method = element.tagName.toLowerCase();
    var parameter = Form.Element.Serializers[method](element);

    if (parameter) {
      var key = encodeURIComponent(parameter[0]);
      if (key.length == 0) return;

      if (parameter[1].constructor != Array)
        parameter[1] = [parameter[1]];

      return parameter[1].map(function(value) {
        return key + '=' + encodeURIComponent(value);
      }).join('&');
    }
  },

  getValue: function(element) {
    element = $(element);
    var method = element.tagName.toLowerCase();
    var parameter = Form.Element.Serializers[method](element);

    if (parameter)
      return parameter[1];
  }
}

Form.Element.Serializers = {
  input: function(element) {
    switch (element.type.toLowerCase()) {
      case 'submit':
      case 'hidden':
      case 'password':
      case 'text':
        return Form.Element.Serializers.textarea(element);
      case 'checkbox':
      case 'radio':
        return Form.Element.Serializers.inputSelector(element);
    }
    return false;
  },

  inputSelector: function(element) {
    if (element.checked)
      return [element.name, element.value];
  },

  textarea: function(element) {
    return [element.name, element.value];
  },

  select: function(element) {
    return Form.Element.Serializers[element.type == 'select-one' ?
      'selectOne' : 'selectMany'](element);
  },

  selectOne: function(element) {
    var value = '', opt, index = element.selectedIndex;
    if (index >= 0) {
      opt = element.options[index];
      value = opt.value || opt.text;
    }
    return [element.name, value];
  },

  selectMany: function(element) {
    var value = [];
    for (var i = 0; i < element.length; i++) {
      var opt = element.options[i];
      if (opt.selected)
        value.push(opt.value || opt.text);
    }
    return [element.name, value];
  }
}

/*--------------------------------------------------------------------------*/

var $F = Form.Element.getValue;

/*--------------------------------------------------------------------------*/

Abstract.TimedObserver = function() {}
Abstract.TimedObserver.prototype = {
  initialize: function(element, frequency, callback) {
    this.frequency = frequency;
    this.element   = $(element);
    this.callback  = callback;

    this.lastValue = this.getValue();
    this.registerCallback();
  },

  registerCallback: function() {
    setInterval(this.onTimerEvent.bind(this), this.frequency * 1000);
  },

  onTimerEvent: function() {
    var value = this.getValue();
    if (this.lastValue != value) {
      this.callback(this.element, value);
      this.lastValue = value;
    }
  }
}

Form.Element.Observer = Class.create();
Form.Element.Observer.prototype = Object.extend(new Abstract.TimedObserver(), {
  getValue: function() {
    return Form.Element.getValue(this.element);
  }
});

Form.Observer = Class.create();
Form.Observer.prototype = Object.extend(new Abstract.TimedObserver(), {
  getValue: function() {
    return Form.serialize(this.element);
  }
});

/*--------------------------------------------------------------------------*/

Abstract.EventObserver = function() {}
Abstract.EventObserver.prototype = {
  initialize: function(element, callback) {
    this.element  = $(element);
    this.callback = callback;

    this.lastValue = this.getValue();
    if (this.element.tagName.toLowerCase() == 'form')
      this.registerFormCallbacks();
    else
      this.registerCallback(this.element);
  },

  onElementEvent: function() {
    var value = this.getValue();
    if (this.lastValue != value) {
      this.callback(this.element, value);
      this.lastValue = value;
    }
  },

  registerFormCallbacks: function() {
    var elements = Form.getElements(this.element);
    for (var i = 0; i < elements.length; i++)
      this.registerCallback(elements[i]);
  },

  registerCallback: function(element) {
    if (element.type) {
      switch (element.type.toLowerCase()) {
        case 'checkbox':
        case 'radio':
          Event.observe(element, 'click', this.onElementEvent.bind(this));
          break;
        case 'password':
        case 'text':
        case 'textarea':
        case 'select-one':
        case 'select-multiple':
          Event.observe(element, 'change', this.onElementEvent.bind(this));
          break;
      }
    }
  }
}

Form.Element.EventObserver = Class.create();
Form.Element.EventObserver.prototype = Object.extend(new Abstract.EventObserver(), {
  getValue: function() {
    return Form.Element.getValue(this.element);
  }
});

Form.EventObserver = Class.create();
Form.EventObserver.prototype = Object.extend(new Abstract.EventObserver(), {
  getValue: function() {
    return Form.serialize(this.element);
  }
});
if (!window.Event) {
  var Event = new Object();
}

Object.extend(Event, {
  KEY_BACKSPACE: 8,
  KEY_TAB:       9,
  KEY_RETURN:   13,
  KEY_ESC:      27,
  KEY_LEFT:     37,
  KEY_UP:       38,
  KEY_RIGHT:    39,
  KEY_DOWN:     40,
  KEY_DELETE:   46,

  element: function(event) {
    return event.target || event.srcElement;
  },

  isLeftClick: function(event) {
    return (((event.which) && (event.which == 1)) ||
            ((event.button) && (event.button == 1)));
  },

  pointerX: function(event) {
    return event.pageX || (event.clientX +
      (document.documentElement.scrollLeft || document.body.scrollLeft));
  },

  pointerY: function(event) {
    return event.pageY || (event.clientY +
      (document.documentElement.scrollTop || document.body.scrollTop));
  },

  stop: function(event) {
    if (event.preventDefault) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.returnValue = false;
      event.cancelBubble = true;
    }
  },

  // find the first node with the given tagName, starting from the
  // node the event was triggered on; traverses the DOM upwards
  findElement: function(event, tagName) {
    var element = Event.element(event);
    while (element.parentNode && (!element.tagName ||
        (element.tagName.toUpperCase() != tagName.toUpperCase())))
      element = element.parentNode;
    return element;
  },

  observers: false,

  _observeAndCache: function(element, name, observer, useCapture) {
    if (!this.observers) this.observers = [];
    if (element.addEventListener) {
      this.observers.push([element, name, observer, useCapture]);
      element.addEventListener(name, observer, useCapture);
    } else if (element.attachEvent) {
      this.observers.push([element, name, observer, useCapture]);
      element.attachEvent('on' + name, observer);
    }
  },

  unloadCache: function() {
    if (!Event.observers) return;
    for (var i = 0; i < Event.observers.length; i++) {
      Event.stopObserving.apply(this, Event.observers[i]);
      Event.observers[i][0] = null;
    }
    Event.observers = false;
  },

  observe: function(element, name, observer, useCapture) {
    var element = $(element);
    useCapture = useCapture || false;

    if (name == 'keypress' &&
        (navigator.appVersion.match(/Konqueror|Safari|KHTML/)
        || element.attachEvent))
      name = 'keydown';

    this._observeAndCache(element, name, observer, useCapture);
  },

  stopObserving: function(element, name, observer, useCapture) {
    var element = $(element);
    useCapture = useCapture || false;

    if (name == 'keypress' &&
        (navigator.appVersion.match(/Konqueror|Safari|KHTML/)
        || element.detachEvent))
      name = 'keydown';

    if (element.removeEventListener) {
      element.removeEventListener(name, observer, useCapture);
    } else if (element.detachEvent) {
      element.detachEvent('on' + name, observer);
    }
  }
});

/* prevent memory leaks in IE */
if (navigator.appVersion.match(/\bMSIE\b/))
  Event.observe(window, 'unload', Event.unloadCache, false);
var Position = {
  // set to true if needed, warning: firefox performance problems
  // NOT neeeded for page scrolling, only if draggable contained in
  // scrollable elements
  includeScrollOffsets: false,

  // must be called before calling withinIncludingScrolloffset, every time the
  // page is scrolled
  prepare: function() {
    this.deltaX =  window.pageXOffset
                || document.documentElement.scrollLeft
                || document.body.scrollLeft
                || 0;
    this.deltaY =  window.pageYOffset
                || document.documentElement.scrollTop
                || document.body.scrollTop
                || 0;
  },

  realOffset: function(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.scrollTop  || 0;
      valueL += element.scrollLeft || 0;
      element = element.parentNode;
    } while (element);
    return [valueL, valueT];
  },

  cumulativeOffset: function(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      element = element.offsetParent;
    } while (element);
    return [valueL, valueT];
  },

  positionedOffset: function(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      element = element.offsetParent;
      if (element) {
        p = Element.getStyle(element, 'position');
        if (p == 'relative' || p == 'absolute') break;
      }
    } while (element);
    return [valueL, valueT];
  },

  offsetParent: function(element) {
    if (element.offsetParent) return element.offsetParent;
    if (element == document.body) return element;

    while ((element = element.parentNode) && element != document.body)
      if (Element.getStyle(element, 'position') != 'static')
        return element;

    return document.body;
  },

  // caches x/y coordinate pair to use with overlap
  within: function(element, x, y) {
    if (this.includeScrollOffsets)
      return this.withinIncludingScrolloffsets(element, x, y);
    this.xcomp = x;
    this.ycomp = y;
    this.offset = this.cumulativeOffset(element);

    return (y >= this.offset[1] &&
            y <  this.offset[1] + element.offsetHeight &&
            x >= this.offset[0] &&
            x <  this.offset[0] + element.offsetWidth);
  },

  withinIncludingScrolloffsets: function(element, x, y) {
    var offsetcache = this.realOffset(element);

    this.xcomp = x + offsetcache[0] - this.deltaX;
    this.ycomp = y + offsetcache[1] - this.deltaY;
    this.offset = this.cumulativeOffset(element);

    return (this.ycomp >= this.offset[1] &&
            this.ycomp <  this.offset[1] + element.offsetHeight &&
            this.xcomp >= this.offset[0] &&
            this.xcomp <  this.offset[0] + element.offsetWidth);
  },

  // within must be called directly before
  overlap: function(mode, element) {
    if (!mode) return 0;
    if (mode == 'vertical')
      return ((this.offset[1] + element.offsetHeight) - this.ycomp) /
        element.offsetHeight;
    if (mode == 'horizontal')
      return ((this.offset[0] + element.offsetWidth) - this.xcomp) /
        element.offsetWidth;
  },

  clone: function(source, target) {
    source = $(source);
    target = $(target);
    target.style.position = 'absolute';
    var offsets = this.cumulativeOffset(source);
    target.style.top    = offsets[1] + 'px';
    target.style.left   = offsets[0] + 'px';
    target.style.width  = source.offsetWidth + 'px';
    target.style.height = source.offsetHeight + 'px';
  },

  page: function(forElement) {
    var valueT = 0, valueL = 0;

    var element = forElement;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;

      // Safari fix
      if (element.offsetParent==document.body)
        if (Element.getStyle(element,'position')=='absolute') break;

    } while (element = element.offsetParent);

    element = forElement;
    do {
      valueT -= element.scrollTop  || 0;
      valueL -= element.scrollLeft || 0;
    } while (element = element.parentNode);

    return [valueL, valueT];
  },

  clone: function(source, target) {
    var options = Object.extend({
      setLeft:    true,
      setTop:     true,
      setWidth:   true,
      setHeight:  true,
      offsetTop:  0,
      offsetLeft: 0
    }, arguments[2] || {})

    // find page position of source
    source = $(source);
    var p = Position.page(source);

    // find coordinate system to use
    target = $(target);
    var delta = [0, 0];
    var parent = null;
    // delta [0,0] will do fine with position: fixed elements,
    // position:absolute needs offsetParent deltas
    if (Element.getStyle(target,'position') == 'absolute') {
      parent = Position.offsetParent(target);
      delta = Position.page(parent);
    }

    // correct by body offsets (fixes Safari)
    if (parent == document.body) {
      delta[0] -= document.body.offsetLeft;
      delta[1] -= document.body.offsetTop;
    }

    // set position
    if(options.setLeft)   target.style.left  = (p[0] - delta[0] + options.offsetLeft) + 'px';
    if(options.setTop)    target.style.top   = (p[1] - delta[1] + options.offsetTop) + 'px';
    if(options.setWidth)  target.style.width = source.offsetWidth + 'px';
    if(options.setHeight) target.style.height = source.offsetHeight + 'px';
  },

  absolutize: function(element) {
    element = $(element);
    if (element.style.position == 'absolute') return;
    Position.prepare();

    var offsets = Position.positionedOffset(element);
    var top     = offsets[1];
    var left    = offsets[0];
    var width   = element.clientWidth;
    var height  = element.clientHeight;

    element._originalLeft   = left - parseFloat(element.style.left  || 0);
    element._originalTop    = top  - parseFloat(element.style.top || 0);
    element._originalWidth  = element.style.width;
    element._originalHeight = element.style.height;

    element.style.position = 'absolute';
    element.style.top    = top + 'px';;
    element.style.left   = left + 'px';;
    element.style.width  = width + 'px';;
    element.style.height = height + 'px';;
  },

  relativize: function(element) {
    element = $(element);
    if (element.style.position == 'relative') return;
    Position.prepare();

    element.style.position = 'relative';
    var top  = parseFloat(element.style.top  || 0) - (element._originalTop || 0);
    var left = parseFloat(element.style.left || 0) - (element._originalLeft || 0);

    element.style.top    = top + 'px';
    element.style.left   = left + 'px';
    element.style.height = element._originalHeight;
    element.style.width  = element._originalWidth;
  }
}

// Safari returns margins on body which is incorrect if the child is absolutely
// positioned.  For performance reasons, redefine Position.cumulativeOffset for
// KHTML/WebKit only.
if (/Konqueror|Safari|KHTML/.test(navigator.userAgent)) {
  Position.cumulativeOffset = function(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      if (element.offsetParent == document.body)
        if (Element.getStyle(element, 'position') == 'absolute') break;

      element = element.offsetParent;
    } while (element);

    return [valueL, valueT];
  }
};
// Copyright (c) 2005 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
// Contributors:
//  Justin Palmer (http://encytemedia.com/)
//  Mark Pilgrim (http://diveintomark.org/)
//  Martin Bialasinki
// 
// See scriptaculous.js for full license.  

// converts rgb() and #xxx to #xxxxxx format,  
// returns self (or first argument) if not convertable  
String.prototype.parseColor = function() {  
  var color = '#';  
  if(this.slice(0,4) == 'rgb(') {  
    var cols = this.slice(4,this.length-1).split(',');  
    var i=0; do { color += parseInt(cols[i]).toColorPart() } while (++i<3);  
  } else {  
    if(this.slice(0,1) == '#') {  
      if(this.length==4) for(var i=1;i<4;i++) color += (this.charAt(i) + this.charAt(i)).toLowerCase();  
      if(this.length==7) color = this.toLowerCase();  
    }  
  }  
  return(color.length==7 ? color : (arguments[0] || this));  
}

/*--------------------------------------------------------------------------*/

Element.collectTextNodes = function(element) {  
  return $A($(element).childNodes).collect( function(node) {
    return (node.nodeType==3 ? node.nodeValue : 
      (node.hasChildNodes() ? Element.collectTextNodes(node) : ''));
  }).flatten().join('');
}

Element.collectTextNodesIgnoreClass = function(element, className) {  
  return $A($(element).childNodes).collect( function(node) {
    return (node.nodeType==3 ? node.nodeValue : 
      ((node.hasChildNodes() && !Element.hasClassName(node,className)) ? 
        Element.collectTextNodesIgnoreClass(node, className) : ''));
  }).flatten().join('');
}

Element.setContentZoom = function(element, percent) {
  element = $(element);  
  Element.setStyle(element, {fontSize: (percent/100) + 'em'});   
  if(navigator.appVersion.indexOf('AppleWebKit')>0) window.scrollBy(0,0);
}

Element.getOpacity = function(element){  
  var opacity;
  if (opacity = Element.getStyle(element, 'opacity'))  
    return parseFloat(opacity);  
  if (opacity = (Element.getStyle(element, 'filter') || '').match(/alpha\(opacity=(.*)\)/))  
    if(opacity[1]) return parseFloat(opacity[1]) / 100;  
  return 1.0;  
}

Element.setOpacity = function(element, value){  
  element= $(element);  
  if (value == 1){
    Element.setStyle(element, { opacity: 
      (/Gecko/.test(navigator.userAgent) && !/Konqueror|Safari|KHTML/.test(navigator.userAgent)) ? 
      0.999999 : null });
    if(/MSIE/.test(navigator.userAgent))  
      Element.setStyle(element, {filter: Element.getStyle(element,'filter').replace(/alpha\([^\)]*\)/gi,'')});  
  } else {  
    if(value < 0.00001) value = 0;  
    Element.setStyle(element, {opacity: value});
    if(/MSIE/.test(navigator.userAgent))  
     Element.setStyle(element, 
       { filter: Element.getStyle(element,'filter').replace(/alpha\([^\)]*\)/gi,'') +
                 'alpha(opacity='+value*100+')' });  
  }
}  
 
Element.getInlineOpacity = function(element){  
  return $(element).style.opacity || '';
}  

Element.childrenWithClassName = function(element, className, findFirst) {
  var classNameRegExp = new RegExp("(^|\\s)" + className + "(\\s|$)");
  var results = $A($(element).getElementsByTagName('*'))[findFirst ? 'detect' : 'select']( function(c) { 
    return (c.className && c.className.match(classNameRegExp));
  });
  if(!results) results = [];
  return results;
}

Element.forceRerendering = function(element) {
  try {
    element = $(element);
    var n = document.createTextNode(' ');
    element.appendChild(n);
    element.removeChild(n);
  } catch(e) { }
};

/*--------------------------------------------------------------------------*/

Array.prototype.call = function() {
  var args = arguments;
  this.each(function(f){ f.apply(this, args) });
}

/*--------------------------------------------------------------------------*/

var Effect = {
  tagifyText: function(element) {
    var tagifyStyle = 'position:relative';
    if(/MSIE/.test(navigator.userAgent)) tagifyStyle += ';zoom:1';
    element = $(element);
    $A(element.childNodes).each( function(child) {
      if(child.nodeType==3) {
        child.nodeValue.toArray().each( function(character) {
          element.insertBefore(
            Builder.node('span',{style: tagifyStyle},
              character == ' ' ? String.fromCharCode(160) : character), 
              child);
        });
        Element.remove(child);
      }
    });
  },
  multiple: function(element, effect) {
    var elements;
    if(((typeof element == 'object') || 
        (typeof element == 'function')) && 
       (element.length))
      elements = element;
    else
      elements = $(element).childNodes;
      
    var options = Object.extend({
      speed: 0.1,
      delay: 0.0
    }, arguments[2] || {});
    var masterDelay = options.delay;

    $A(elements).each( function(element, index) {
      new effect(element, Object.extend(options, { delay: index * options.speed + masterDelay }));
    });
  },
  PAIRS: {
    'slide':  ['SlideDown','SlideUp'],
    'blind':  ['BlindDown','BlindUp'],
    'appear': ['Appear','Fade']
  },
  toggle: function(element, effect) {
    element = $(element);
    effect = (effect || 'appear').toLowerCase();
    var options = Object.extend({
      queue: { position:'end', scope:(element.id || 'global'), limit: 1 }
    }, arguments[2] || {});
    Effect[element.visible() ? 
      Effect.PAIRS[effect][1] : Effect.PAIRS[effect][0]](element, options);
  }
};

var Effect2 = Effect; // deprecated

/* ------------- transitions ------------- */

Effect.Transitions = {}

Effect.Transitions.linear = function(pos) {
  return pos;
}
Effect.Transitions.sinoidal = function(pos) {
  return (-Math.cos(pos*Math.PI)/2) + 0.5;
}
Effect.Transitions.reverse  = function(pos) {
  return 1-pos;
}
Effect.Transitions.flicker = function(pos) {
  return ((-Math.cos(pos*Math.PI)/4) + 0.75) + Math.random()/4;
}
Effect.Transitions.wobble = function(pos) {
  return (-Math.cos(pos*Math.PI*(9*pos))/2) + 0.5;
}
Effect.Transitions.pulse = function(pos) {
  return (Math.floor(pos*10) % 2 == 0 ? 
    (pos*10-Math.floor(pos*10)) : 1-(pos*10-Math.floor(pos*10)));
}
Effect.Transitions.none = function(pos) {
  return 0;
}
Effect.Transitions.full = function(pos) {
  return 1;
}

/* ------------- core effects ------------- */

Effect.ScopedQueue = Class.create();
Object.extend(Object.extend(Effect.ScopedQueue.prototype, Enumerable), {
  initialize: function() {
    this.effects  = [];
    this.interval = null;
  },
  _each: function(iterator) {
    this.effects._each(iterator);
  },
  add: function(effect) {
    var timestamp = new Date().getTime();
    
    var position = (typeof effect.options.queue == 'string') ? 
      effect.options.queue : effect.options.queue.position;
    
    switch(position) {
      case 'front':
        // move unstarted effects after this effect  
        this.effects.findAll(function(e){ return e.state=='idle' }).each( function(e) {
            e.startOn  += effect.finishOn;
            e.finishOn += effect.finishOn;
          });
        break;
      case 'end':
        // start effect after last queued effect has finished
        timestamp = this.effects.pluck('finishOn').max() || timestamp;
        break;
    }
    
    effect.startOn  += timestamp;
    effect.finishOn += timestamp;

    if(!effect.options.queue.limit || (this.effects.length < effect.options.queue.limit))
      this.effects.push(effect);
    
    if(!this.interval) 
      this.interval = setInterval(this.loop.bind(this), 40);
  },
  remove: function(effect) {
    this.effects = this.effects.reject(function(e) { return e==effect });
    if(this.effects.length == 0) {
      clearInterval(this.interval);
      this.interval = null;
    }
  },
  loop: function() {
    var timePos = new Date().getTime();
    this.effects.invoke('loop', timePos);
  }
});

Effect.Queues = {
  instances: $H(),
  get: function(queueName) {
    if(typeof queueName != 'string') return queueName;
    
    if(!this.instances[queueName])
      this.instances[queueName] = new Effect.ScopedQueue();
      
    return this.instances[queueName];
  }
}
Effect.Queue = Effect.Queues.get('global');

Effect.DefaultOptions = {
  transition: Effect.Transitions.sinoidal,
  duration:   1.0,   // seconds
  fps:        25.0,  // max. 25fps due to Effect.Queue implementation
  sync:       false, // true for combining
  from:       0.0,
  to:         1.0,
  delay:      0.0,
  queue:      'parallel'
}

Effect.Base = function() {};
Effect.Base.prototype = {
  position: null,
  start: function(options) {
    this.options      = Object.extend(Object.extend({},Effect.DefaultOptions), options || {});
    this.currentFrame = 0;
    this.state        = 'idle';
    this.startOn      = this.options.delay*1000;
    this.finishOn     = this.startOn + (this.options.duration*1000);
    this.event('beforeStart');
    if(!this.options.sync)
      Effect.Queues.get(typeof this.options.queue == 'string' ? 
        'global' : this.options.queue.scope).add(this);
  },
  loop: function(timePos) {
    if(timePos >= this.startOn) {
      if(timePos >= this.finishOn) {
        this.render(1.0);
        this.cancel();
        this.event('beforeFinish');
        if(this.finish) this.finish(); 
        this.event('afterFinish');
        return;  
      }
      var pos   = (timePos - this.startOn) / (this.finishOn - this.startOn);
      var frame = Math.round(pos * this.options.fps * this.options.duration);
      if(frame > this.currentFrame) {
        this.render(pos);
        this.currentFrame = frame;
      }
    }
  },
  render: function(pos) {
    if(this.state == 'idle') {
      this.state = 'running';
      this.event('beforeSetup');
      if(this.setup) this.setup();
      this.event('afterSetup');
    }
    if(this.state == 'running') {
      if(this.options.transition) pos = this.options.transition(pos);
      pos *= (this.options.to-this.options.from);
      pos += this.options.from;
      this.position = pos;
      this.event('beforeUpdate');
      if(this.update) this.update(pos);
      this.event('afterUpdate');
    }
  },
  cancel: function() {
    if(!this.options.sync)
      Effect.Queues.get(typeof this.options.queue == 'string' ? 
        'global' : this.options.queue.scope).remove(this);
    this.state = 'finished';
  },
  event: function(eventName) {
    if(this.options[eventName + 'Internal']) this.options[eventName + 'Internal'](this);
    if(this.options[eventName]) this.options[eventName](this);
  },
  inspect: function() {
    return '#<Effect:' + $H(this).inspect() + ',options:' + $H(this.options).inspect() + '>';
  }
}

Effect.Parallel = Class.create();
Object.extend(Object.extend(Effect.Parallel.prototype, Effect.Base.prototype), {
  initialize: function(effects) {
    this.effects = effects || [];
    this.start(arguments[1]);
  },
  update: function(position) {
    this.effects.invoke('render', position);
  },
  finish: function(position) {
    this.effects.each( function(effect) {
      effect.render(1.0);
      effect.cancel();
      effect.event('beforeFinish');
      if(effect.finish) effect.finish(position);
      effect.event('afterFinish');
    });
  }
});

Effect.Opacity = Class.create();
Object.extend(Object.extend(Effect.Opacity.prototype, Effect.Base.prototype), {
  initialize: function(element) {
    this.element = $(element);
    // make this work on IE on elements without 'layout'
    if(/MSIE/.test(navigator.userAgent) && (!this.element.hasLayout))
      this.element.setStyle({zoom: 1});
    var options = Object.extend({
      from: this.element.getOpacity() || 0.0,
      to:   1.0
    }, arguments[1] || {});
    this.start(options);
  },
  update: function(position) {
    this.element.setOpacity(position);
  }
});

Effect.Move = Class.create();
Object.extend(Object.extend(Effect.Move.prototype, Effect.Base.prototype), {
  initialize: function(element) {
    this.element = $(element);
    var options = Object.extend({
      x:    0,
      y:    0,
      mode: 'relative'
    }, arguments[1] || {});
    this.start(options);
  },
  setup: function() {
    // Bug in Opera: Opera returns the "real" position of a static element or
    // relative element that does not have top/left explicitly set.
    // ==> Always set top and left for position relative elements in your stylesheets 
    // (to 0 if you do not need them) 
    this.element.makePositioned();
    this.originalLeft = parseFloat(this.element.getStyle('left') || '0');
    this.originalTop  = parseFloat(this.element.getStyle('top')  || '0');
    if(this.options.mode == 'absolute') {
      // absolute movement, so we need to calc deltaX and deltaY
      this.options.x = this.options.x - this.originalLeft;
      this.options.y = this.options.y - this.originalTop;
    }
  },
  update: function(position) {
    this.element.setStyle({
      left: this.options.x  * position + this.originalLeft + 'px',
      top:  this.options.y  * position + this.originalTop  + 'px'
    });
  }
});

// for backwards compatibility
Effect.MoveBy = function(element, toTop, toLeft) {
  return new Effect.Move(element, 
    Object.extend({ x: toLeft, y: toTop }, arguments[3] || {}));
};

Effect.Scale = Class.create();
Object.extend(Object.extend(Effect.Scale.prototype, Effect.Base.prototype), {
  initialize: function(element, percent) {
    this.element = $(element)
    var options = Object.extend({
      scaleX: true,
      scaleY: true,
      scaleContent: true,
      scaleFromCenter: false,
      scaleMode: 'box',        // 'box' or 'contents' or {} with provided values
      scaleFrom: 100.0,
      scaleTo:   percent
    }, arguments[2] || {});
    this.start(options);
  },
  setup: function() {
    this.restoreAfterFinish = this.options.restoreAfterFinish || false;
    this.elementPositioning = this.element.getStyle('position');
    
    this.originalStyle = {};
    ['top','left','width','height','fontSize'].each( function(k) {
      this.originalStyle[k] = this.element.style[k];
    }.bind(this));
      
    this.originalTop  = this.element.offsetTop;
    this.originalLeft = this.element.offsetLeft;
    
    var fontSize = this.element.getStyle('font-size') || '100%';
    ['em','px','%'].each( function(fontSizeType) {
      if(fontSize.indexOf(fontSizeType)>0) {
        this.fontSize     = parseFloat(fontSize);
        this.fontSizeType = fontSizeType;
      }
    }.bind(this));
    
    this.factor = (this.options.scaleTo - this.options.scaleFrom)/100;
    
    this.dims = null;
    if(this.options.scaleMode=='box')
      this.dims = [this.element.offsetHeight, this.element.offsetWidth];
    if(/^content/.test(this.options.scaleMode))
      this.dims = [this.element.scrollHeight, this.element.scrollWidth];
    if(!this.dims)
      this.dims = [this.options.scaleMode.originalHeight,
                   this.options.scaleMode.originalWidth];
  },
  update: function(position) {
    var currentScale = (this.options.scaleFrom/100.0) + (this.factor * position);
    if(this.options.scaleContent && this.fontSize)
      this.element.setStyle({fontSize: this.fontSize * currentScale + this.fontSizeType });
    this.setDimensions(this.dims[0] * currentScale, this.dims[1] * currentScale);
  },
  finish: function(position) {
    if (this.restoreAfterFinish) this.element.setStyle(this.originalStyle);
  },
  setDimensions: function(height, width) {
    var d = {};
    if(this.options.scaleX) d.width = width + 'px';
    if(this.options.scaleY) d.height = height + 'px';
    if(this.options.scaleFromCenter) {
      var topd  = (height - this.dims[0])/2;
      var leftd = (width  - this.dims[1])/2;
      if(this.elementPositioning == 'absolute') {
        if(this.options.scaleY) d.top = this.originalTop-topd + 'px';
        if(this.options.scaleX) d.left = this.originalLeft-leftd + 'px';
      } else {
        if(this.options.scaleY) d.top = -topd + 'px';
        if(this.options.scaleX) d.left = -leftd + 'px';
      }
    }
    this.element.setStyle(d);
  }
});

Effect.Highlight = Class.create();
Object.extend(Object.extend(Effect.Highlight.prototype, Effect.Base.prototype), {
  initialize: function(element) {
    this.element = $(element);
    var options = Object.extend({ startcolor: '#ffff99' }, arguments[1] || {});
    this.start(options);
  },
  setup: function() {
    // Prevent executing on elements not in the layout flow
    if(this.element.getStyle('display')=='none') { this.cancel(); return; }
    // Disable background image during the effect
    this.oldStyle = {
      backgroundImage: this.element.getStyle('background-image') };
    this.element.setStyle({backgroundImage: 'none'});
    if(!this.options.endcolor)
      this.options.endcolor = this.element.getStyle('background-color').parseColor('#ffffff');
    if(!this.options.restorecolor)
      this.options.restorecolor = this.element.getStyle('background-color');
    // init color calculations
    this._base  = $R(0,2).map(function(i){ return parseInt(this.options.startcolor.slice(i*2+1,i*2+3),16) }.bind(this));
    this._delta = $R(0,2).map(function(i){ return parseInt(this.options.endcolor.slice(i*2+1,i*2+3),16)-this._base[i] }.bind(this));
  },
  update: function(position) {
    this.element.setStyle({backgroundColor: $R(0,2).inject('#',function(m,v,i){
      return m+(Math.round(this._base[i]+(this._delta[i]*position)).toColorPart()); }.bind(this)) });
  },
  finish: function() {
    this.element.setStyle(Object.extend(this.oldStyle, {
      backgroundColor: this.options.restorecolor
    }));
  }
});

Effect.ScrollTo = Class.create();
Object.extend(Object.extend(Effect.ScrollTo.prototype, Effect.Base.prototype), {
  initialize: function(element) {
    this.element = $(element);
    this.start(arguments[1] || {});
  },
  setup: function() {
    Position.prepare();
    var offsets = Position.cumulativeOffset(this.element);
    if(this.options.offset) offsets[1] += this.options.offset;
    var max = window.innerHeight ? 
      window.height - window.innerHeight :
      document.body.scrollHeight - 
        (document.documentElement.clientHeight ? 
          document.documentElement.clientHeight : document.body.clientHeight);
    this.scrollStart = Position.deltaY;
    this.delta = (offsets[1] > max ? max : offsets[1]) - this.scrollStart;
  },
  update: function(position) {
    Position.prepare();
    window.scrollTo(Position.deltaX, 
      this.scrollStart + (position*this.delta));
  }
});

/* ------------- combination effects ------------- */

Effect.Fade = function(element) {
  element = $(element);
  var oldOpacity = element.getInlineOpacity();
  var options = Object.extend({
  from: element.getOpacity() || 1.0,
  to:   0.0,
  afterFinishInternal: function(effect) { 
    if(effect.options.to!=0) return;
    effect.element.hide();
    effect.element.setStyle({opacity: oldOpacity}); 
  }}, arguments[1] || {});
  return new Effect.Opacity(element,options);
}

Effect.Appear = function(element) {
  element = $(element);
  var options = Object.extend({
  from: (element.getStyle('display') == 'none' ? 0.0 : element.getOpacity() || 0.0),
  to:   1.0,
  // force Safari to render floated elements properly
  afterFinishInternal: function(effect) {
    effect.element.forceRerendering();
  },
  beforeSetup: function(effect) {
    effect.element.setOpacity(effect.options.from);
    effect.element.show(); 
  }}, arguments[1] || {});
  return new Effect.Opacity(element,options);
}

Effect.Puff = function(element) {
  element = $(element);
  var oldStyle = { opacity: element.getInlineOpacity(), position: element.getStyle('position') };
  return new Effect.Parallel(
   [ new Effect.Scale(element, 200, 
      { sync: true, scaleFromCenter: true, scaleContent: true, restoreAfterFinish: true }), 
     new Effect.Opacity(element, { sync: true, to: 0.0 } ) ], 
     Object.extend({ duration: 1.0, 
      beforeSetupInternal: function(effect) {
        effect.effects[0].element.setStyle({position: 'absolute'}); },
      afterFinishInternal: function(effect) {
         effect.effects[0].element.hide();
         effect.effects[0].element.setStyle(oldStyle); }
     }, arguments[1] || {})
   );
}

Effect.BlindUp = function(element) {
  element = $(element);
  element.makeClipping();
  return new Effect.Scale(element, 0, 
    Object.extend({ scaleContent: false, 
      scaleX: false, 
      restoreAfterFinish: true,
      afterFinishInternal: function(effect) {
        effect.element.hide();
        effect.element.undoClipping();
      } 
    }, arguments[1] || {})
  );
}

Effect.BlindDown = function(element) {
  element = $(element);
  var elementDimensions = element.getDimensions();
  return new Effect.Scale(element, 100, 
    Object.extend({ scaleContent: false, 
      scaleX: false,
      scaleFrom: 0,
      scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
      restoreAfterFinish: true,
      afterSetup: function(effect) {
        effect.element.makeClipping();
        effect.element.setStyle({height: '0px'});
        effect.element.show(); 
      },  
      afterFinishInternal: function(effect) {
        effect.element.undoClipping();
      }
    }, arguments[1] || {})
  );
}

Effect.SwitchOff = function(element) {
  element = $(element);
  var oldOpacity = element.getInlineOpacity();
  return new Effect.Appear(element, { 
    duration: 0.4,
    from: 0,
    transition: Effect.Transitions.flicker,
    afterFinishInternal: function(effect) {
      new Effect.Scale(effect.element, 1, { 
        duration: 0.3, scaleFromCenter: true,
        scaleX: false, scaleContent: false, restoreAfterFinish: true,
        beforeSetup: function(effect) { 
          effect.element.makePositioned();
          effect.element.makeClipping();
        },
        afterFinishInternal: function(effect) {
          effect.element.hide();
          effect.element.undoClipping();
          effect.element.undoPositioned();
          effect.element.setStyle({opacity: oldOpacity});
        }
      })
    }
  });
}

Effect.DropOut = function(element) {
  element = $(element);
  var oldStyle = {
    top: element.getStyle('top'),
    left: element.getStyle('left'),
    opacity: element.getInlineOpacity() };
  return new Effect.Parallel(
    [ new Effect.Move(element, {x: 0, y: 100, sync: true }), 
      new Effect.Opacity(element, { sync: true, to: 0.0 }) ],
    Object.extend(
      { duration: 0.5,
        beforeSetup: function(effect) {
          effect.effects[0].element.makePositioned(); 
        },
        afterFinishInternal: function(effect) {
          effect.effects[0].element.hide();
          effect.effects[0].element.undoPositioned();
          effect.effects[0].element.setStyle(oldStyle);
        } 
      }, arguments[1] || {}));
}

Effect.Shake = function(element) {
  element = $(element);
  var oldStyle = {
    top: element.getStyle('top'),
    left: element.getStyle('left') };
    return new Effect.Move(element, 
      { x:  20, y: 0, duration: 0.05, afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x: -40, y: 0, duration: 0.1,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x:  40, y: 0, duration: 0.1,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x: -40, y: 0, duration: 0.1,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x:  40, y: 0, duration: 0.1,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x: -20, y: 0, duration: 0.05, afterFinishInternal: function(effect) {
        effect.element.undoPositioned();
        effect.element.setStyle(oldStyle);
  }}) }}) }}) }}) }}) }});
}

Effect.SlideDown = function(element) {
  element = $(element);
  element.cleanWhitespace();
  // SlideDown need to have the content of the element wrapped in a container element with fixed height!
  var oldInnerBottom = $(element.firstChild).getStyle('bottom');
  var elementDimensions = element.getDimensions();
  return new Effect.Scale(element, 100, Object.extend({ 
    scaleContent: false, 
    scaleX: false, 
    scaleFrom: window.opera ? 0 : 1,
    scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
    restoreAfterFinish: true,
    afterSetup: function(effect) {
      effect.element.makePositioned();
      effect.element.firstChild.makePositioned();
      if(window.opera) effect.element.setStyle({top: ''});
      effect.element.makeClipping();
      effect.element.setStyle({height: '0px'});
      effect.element.show(); },
    afterUpdateInternal: function(effect) {
      effect.element.firstChild.setStyle({bottom:
        (effect.dims[0] - effect.element.clientHeight) + 'px' }); 
    },
    afterFinishInternal: function(effect) {
      effect.element.undoClipping(); 
      // IE will crash if child is undoPositioned first
      if(/MSIE/.test(navigator.userAgent)){
        effect.element.undoPositioned();
        effect.element.firstChild.undoPositioned();
      }else{
        effect.element.firstChild.undoPositioned();
        effect.element.undoPositioned();
      }
      effect.element.firstChild.setStyle({bottom: oldInnerBottom}); }
    }, arguments[1] || {})
  );
}
  
Effect.SlideUp = function(element) {
  element = $(element);
  element.cleanWhitespace();
  var oldInnerBottom = $(element.firstChild).getStyle('bottom');
  return new Effect.Scale(element, window.opera ? 0 : 1,
   Object.extend({ scaleContent: false, 
    scaleX: false, 
    scaleMode: 'box',
    scaleFrom: 100,
    restoreAfterFinish: true,
    beforeStartInternal: function(effect) {
      effect.element.makePositioned();
      effect.element.firstChild.makePositioned();
      if(window.opera) effect.element.setStyle({top: ''});
      effect.element.makeClipping();
      effect.element.show(); },  
    afterUpdateInternal: function(effect) {
      effect.element.firstChild.setStyle({bottom:
        (effect.dims[0] - effect.element.clientHeight) + 'px' }); },
    afterFinishInternal: function(effect) {
      effect.element.hide();
      effect.element.undoClipping();
      effect.element.firstChild.undoPositioned();
      effect.element.undoPositioned();
      effect.element.setStyle({bottom: oldInnerBottom}); }
   }, arguments[1] || {})
  );
}

// Bug in opera makes the TD containing this element expand for a instance after finish 
Effect.Squish = function(element) {
  return new Effect.Scale(element, window.opera ? 1 : 0, 
    { restoreAfterFinish: true,
      beforeSetup: function(effect) {
        effect.element.makeClipping(effect.element); },  
      afterFinishInternal: function(effect) {
        effect.element.hide(effect.element); 
        effect.element.undoClipping(effect.element); }
  });
}

Effect.Grow = function(element) {
  element = $(element);
  var options = Object.extend({
    direction: 'center',
    moveTransition: Effect.Transitions.sinoidal,
    scaleTransition: Effect.Transitions.sinoidal,
    opacityTransition: Effect.Transitions.full
  }, arguments[1] || {});
  var oldStyle = {
    top: element.style.top,
    left: element.style.left,
    height: element.style.height,
    width: element.style.width,
    opacity: element.getInlineOpacity() };

  var dims = element.getDimensions();    
  var initialMoveX, initialMoveY;
  var moveX, moveY;
  
  switch (options.direction) {
    case 'top-left':
      initialMoveX = initialMoveY = moveX = moveY = 0; 
      break;
    case 'top-right':
      initialMoveX = dims.width;
      initialMoveY = moveY = 0;
      moveX = -dims.width;
      break;
    case 'bottom-left':
      initialMoveX = moveX = 0;
      initialMoveY = dims.height;
      moveY = -dims.height;
      break;
    case 'bottom-right':
      initialMoveX = dims.width;
      initialMoveY = dims.height;
      moveX = -dims.width;
      moveY = -dims.height;
      break;
    case 'center':
      initialMoveX = dims.width / 2;
      initialMoveY = dims.height / 2;
      moveX = -dims.width / 2;
      moveY = -dims.height / 2;
      break;
  }
  
  return new Effect.Move(element, {
    x: initialMoveX,
    y: initialMoveY,
    duration: 0.01, 
    beforeSetup: function(effect) {
      effect.element.hide();
      effect.element.makeClipping();
      effect.element.makePositioned();
    },
    afterFinishInternal: function(effect) {
      new Effect.Parallel(
        [ new Effect.Opacity(effect.element, { sync: true, to: 1.0, from: 0.0, transition: options.opacityTransition }),
          new Effect.Move(effect.element, { x: moveX, y: moveY, sync: true, transition: options.moveTransition }),
          new Effect.Scale(effect.element, 100, {
            scaleMode: { originalHeight: dims.height, originalWidth: dims.width }, 
            sync: true, scaleFrom: window.opera ? 1 : 0, transition: options.scaleTransition, restoreAfterFinish: true})
        ], Object.extend({
             beforeSetup: function(effect) {
               effect.effects[0].element.setStyle({height: '0px'});
               effect.effects[0].element.show(); 
             },
             afterFinishInternal: function(effect) {
               effect.effects[0].element.undoClipping();
               effect.effects[0].element.undoPositioned();
               effect.effects[0].element.setStyle(oldStyle); 
             }
           }, options)
      )
    }
  });
}

Effect.Shrink = function(element) {
  element = $(element);
  var options = Object.extend({
    direction: 'center',
    moveTransition: Effect.Transitions.sinoidal,
    scaleTransition: Effect.Transitions.sinoidal,
    opacityTransition: Effect.Transitions.none
  }, arguments[1] || {});
  var oldStyle = {
    top: element.style.top,
    left: element.style.left,
    height: element.style.height,
    width: element.style.width,
    opacity: element.getInlineOpacity() };

  var dims = element.getDimensions();
  var moveX, moveY;
  
  switch (options.direction) {
    case 'top-left':
      moveX = moveY = 0;
      break;
    case 'top-right':
      moveX = dims.width;
      moveY = 0;
      break;
    case 'bottom-left':
      moveX = 0;
      moveY = dims.height;
      break;
    case 'bottom-right':
      moveX = dims.width;
      moveY = dims.height;
      break;
    case 'center':  
      moveX = dims.width / 2;
      moveY = dims.height / 2;
      break;
  }
  
  return new Effect.Parallel(
    [ new Effect.Opacity(element, { sync: true, to: 0.0, from: 1.0, transition: options.opacityTransition }),
      new Effect.Scale(element, window.opera ? 1 : 0, { sync: true, transition: options.scaleTransition, restoreAfterFinish: true}),
      new Effect.Move(element, { x: moveX, y: moveY, sync: true, transition: options.moveTransition })
    ], Object.extend({            
         beforeStartInternal: function(effect) {
           effect.effects[0].element.makePositioned();
           effect.effects[0].element.makeClipping(); },
         afterFinishInternal: function(effect) {
           effect.effects[0].element.hide();
           effect.effects[0].element.undoClipping();
           effect.effects[0].element.undoPositioned();
           effect.effects[0].element.setStyle(oldStyle); }
       }, options)
  );
}

Effect.Pulsate = function(element) {
  element = $(element);
  var options    = arguments[1] || {};
  var oldOpacity = element.getInlineOpacity();
  var transition = options.transition || Effect.Transitions.sinoidal;
  var reverser   = function(pos){ return transition(1-Effect.Transitions.pulse(pos)) };
  reverser.bind(transition);
  return new Effect.Opacity(element, 
    Object.extend(Object.extend({  duration: 3.0, from: 0,
      afterFinishInternal: function(effect) { effect.element.setStyle({opacity: oldOpacity}); }
    }, options), {transition: reverser}));
}

Effect.Fold = function(element) {
  element = $(element);
  var oldStyle = {
    top: element.style.top,
    left: element.style.left,
    width: element.style.width,
    height: element.style.height };
  Element.makeClipping(element);
  return new Effect.Scale(element, 5, Object.extend({   
    scaleContent: false,
    scaleX: false,
    afterFinishInternal: function(effect) {
    new Effect.Scale(element, 1, { 
      scaleContent: false, 
      scaleY: false,
      afterFinishInternal: function(effect) {
        effect.element.hide();
        effect.element.undoClipping(); 
        effect.element.setStyle(oldStyle);
      } });
  }}, arguments[1] || {}));
};

['setOpacity','getOpacity','getInlineOpacity','forceRerendering','setContentZoom',
 'collectTextNodes','collectTextNodesIgnoreClass','childrenWithClassName'].each( 
  function(f) { Element.Methods[f] = Element[f]; }
);

Element.Methods.visualEffect = function(element, effect, options) {
  s = effect.gsub(/_/, '-').camelize();
  effect_class = s.charAt(0).toUpperCase() + s.substring(1);
  new Effect[effect_class](element, options);
  return $(element);
};

Element.addMethods();;
/************************************************************************
 * Domino JavaScript Form Validation v3.0
 *  
 * This code is used to validate Domino forms. See the form "Contact" for
 * an example of how it works.
 *    
 * Borrows code from Really easy field validation with Prototype
 * by Andrew Tetlaw. See link below for more details.
 * http://tetlaw.id.au/view/blog/really-easy-field-validation-with-prototype
 * 
 * Author: Jake Howlett, Rockall Design ltd, http://www.rockalldesign.com
 * Date: May 2006
 *************************************************************************/

var Validator = {
	Version: '1.0.0',
	DateFormat: 'dd/mm/yyyy',
	valid: true,
	messages: {
		"text": "This field is required. Please enter a value.",
		"date": "This field is required. Please enter a valid date in the format",
		"radio": "This field is required. Please select a value.",
		"checkbox": "This field is required. Please select at least one option.",
		"number": "This field is required. Please enter a valid number",
		"email": "This field is required. Please enter a valid email addresss",
		"regex": "This field is required. Please enter a properly formatted entry",
		"undefined": "This field is required."
	},

	init: function(f, s, a){
		this.form=document.forms[f];
		this.messages["date"]+=" "+this.DateFormat;
		this.insert_summary_here = $(s);
		this.insert_summary_after = $(a);
	},

	validate: function(b){
		this.valid = true;

		this.fields.each(
			function(fld){
                console.log( fld.name )

				var obj = Validator.form[fld.name];
				var id = 'advice-' + fld.name;
				var prop = '__advice'+fld.name;

				if ( !Validator.test(fld) ){

				    if (!obj[prop]){
						var advice = document.createElement('div');
						var message = ( fld.message ) ? fld.message : Validator.messages[fld.type];
						//advice.appendChild(document.createTextNode(message));
						advice.appendChild(document.createElement('br'));
						advice.className = 'validation-advice';
						advice.id = id;
						advice.style.display = 'none';
						advice.innerHTML = message;
						
						if (fld.type==="radio" || fld.type==="checkbox"){
							if (obj[0]){
								obj[0].parentNode.insertBefore(advice, obj[0].previousSibling);
							} else {
								obj.parentNode.insertBefore(advice, obj.previousSibling);
							}
						} else {
							obj.parentNode.insertBefore(advice, obj.nextSibling);
						}
	
						if(typeof Effect === 'undefined') {
							advice.style.display = 'block';
						} else {
							new Effect.Appear(advice.id, {duration : 1 });
						}
						obj[prop]=true;
					}

					Validator.valid=false;
				
				} else {
					try {
						$(id).remove();
					} catch(e) {
						//nothing
					}
	
					obj[prop] = '';
				}

			}//end .each() function
		); //end .each()

		/*******************************************/
		/* Check the Product Table  */
		if (this.form.id==='samplerequest') {               
			if ((!validateProducts()) && (this.valid)){
				this.valid = false;
			}
		}
		/*******************************************/

		var prop = '__advice' + this.form.name;
		var id = "validation-summary";
		var idafter = "after";

		if (!this.valid){

			if (!this.form[prop]){
				//add an error summary at the top of the form?
				var summary = document.createElement('div');
				summary.appendChild(document.createTextNode("There were problems with this form. Please correct and re-submit"));
				summary.className = 'validation-summary';
				summary.id = id;
				summary.style.display = 'none';
				this.insert_summary_here.parentNode.insertBefore(summary, this.insert_summary_here.nextSibling);
				if(typeof Effect === 'undefined') {
					summary.style.display = 'block';
				} else {
					new Effect.Appear(summary.id, {duration : 1 });
				}

				var after = document.createElement('div');
				after.appendChild(document.createTextNode("There were problems with this form. Please correct and re-submit"));
				after.className = 'validation-summary';
				after.id = idafter;
				after.style.display = 'none';
				this.insert_summary_after.parentNode.insertBefore(after, this.insert_summary_after.nextSibling);
				if(typeof Effect === 'undefined') {
					after.style.display = 'block';
				} else {
					new Effect.Appear(after.id, {duration : 1 });
				}
				
				this.form[prop]=true;
			}
		} else {
			try {
				$(id).remove();
				$(idafter).remove();
			} catch(e) {
				//nothing
			}
			this.form[prop] = '';
		}

		return this.valid;

	}, //end validate()

	test: function(fld){
		var f = Validator.form[ fld.name ];
	
		//If it's an expression we can leap out now
		if (fld.type==="custom") {
			return eval(fld.expression);
		}
		
		//if validation is conditional see if it's required or not
		if (fld.condition && !eval(fld.condition)) return true;
		
		//if a test procedure is passed then simply perform that,
		//passing the field object to the function
		if (fld.test) return fld.test(f);
		
		switch (f.type) {
			case "text":
				switch(fld.type){
					case "undefined":
						return f.value.trim() != "";
						break
					case "email":
						var emailStr = f.value.trim();
						var reg1 = /(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)/; // not valid
						var reg2 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // valid
						if ( reg2.test( emailStr ) ) {
							return true;
						} else {
						 	return false;
						}
						break;

					case "date":
						var results = new Array();
						var datePat = /^(\d{1,2})(\/|-|\.)(\d{1,2})\2(\d{2}|\d{4})$/;
						var matchArray = f.value.match(datePat);

						if (matchArray === null) {
							return false;
						}
						//check for two digit (20th century) years and prepend 19.
						matchArray[4] = (matchArray[4].length === 2) ? '19' + matchArray[4] : matchArray[4];

						// parse date into variables
						if (Validator.DateFormat.charAt(0)==="d"){ //what format does the server use for dates?
							results[0] = matchArray[1];
							results[1] = matchArray[3];
						} else {
							results[1] = matchArray[1];
							results[0] = matchArray[3];
						}
						results[2] = matchArray[4];

						dateBits = results;
						if (dateBits === null) return false;

						//Check it is a valid date first
						day = dateBits[0];
						month = dateBits[1];
						year = dateBits[2];

						if ((month < 1 || month > 12) || (day < 1 || day > 31)) { // check month range
							return false;
						}
						if ((month===4 || month===6 || month===9 || month===11) && day===31) {
							return false;
						}
						if (month === 2) {

							// check for february 29th
							var isleap = (year % 4 === 0 && (year % 100 != 0 || year % 400 === 0));

							if (day>29 || (day===29 && !isleap)) {
								return false;
							}
						}

						//Now check whether a range is specified and if in bounds
						var theDate = new Date(dateBits[2], parseInt(dateBits[1]) - 1, dateBits[0]);

						if ( fld.min ) {
							if ( fld.min.getTime() > theDate.getTime() ) return false;
						}
						if ( fld.max) {
							if ( theDate.getTime() > fld.max.getTime() ) return false;
						}
						return true;

					break;

					case "number":
						if ( isNaN( f.value ) ) return false;
						if ( fld.min && f.value < fld.min ) return false;
						if ( fld.max && f.value > fld.max ) return false;
						return true;
					break;

					case "regex":
						return fld.pattern.test(f.value);
					break;

					default:
						return f.value.trim() != "";
					break;
				}
			break; //end case:text

			case "textarea":
				return f.value.trim() != "";
			break;

			case "select-one":
				return f.selectedIndex != 0
			break;

			case "select-multiple":
				return f.selectedIndex != -1;
			break;

			case "file":
			break;

			default: //must be a checkbox or a radio group if none of above
				if ( !f[0]) {//handle single item group first
					switch (f.type) {
						case "checkbox":
							fld.type="checkbox";
							return f.checked;
						break
						case "radio":
							fld.type="radio";
							return f.checked;
						break
						default:
						break
					}
				} else { //handle multi-item groups
					switch (f[0].type) {
						case "checkbox":
							fld.type="checkbox";
							return Validator.hasSelection( f );
						break
						case "radio":
							fld.type="radio";
							return Validator.hasSelection( f );
							return false;
						break
						default:
						break
					}
				}
			break
		}

	}, //end test()

	hasSelection: function( obj ){
		for (var r=0; r < obj.length; r++){
			if ( obj[r].checked ) return true;
		}
		
		return false;
	}
} //end Validator

//Extend String object and add a trim method
String.prototype.trim = function() {
	a = this.replace(/^\s+/, '');
	return a.replace(/\s+$/, '');
};



function getFirstChild(node) {
	for (x=0;x<node.childNodes.length;x++) {
		if (node.childNodes[x].nodeType === 1) {
			return node.childNodes[x];
		}
	}
	return;
}

function isInteger (s)
   {
      var i;

      if (isEmpty(s))
      if (isInteger.arguments.length === 1) return 0;
      else return (isInteger.arguments[1] === true);

      for (i = 0; i < s.length; i++)
      {
         var c = s.charAt(i);

         if (!isDigit(c)) return false;
      }

      return true;
   }

   function isEmpty(s)
   {
      return ((s === null) || (s.length === 0))
   }

   function isDigit (c)
   {
      return ((c >= "0") && (c <= "9"))
   }

//===================================================================
// Called by the Submit button
//===================================================================
function validateANDsubmit(b, f, u) {
	// Disable the Submit button
	b.disabled=true;
	b.value = "Saving ..."
	// Run the Validtor function
	if(Validator.validate()) {
		doCookies('save', f);
		frm = jQuery('form[name="' + f + '"]');
    console.log( frm )
		frm.submit();
		location.href="/thankyou";
	} else {
		// There are errors.  Re-enable the Submit button
		b.disabled = false
		b.value = "Submit"
	}
}   
   
//===================================================================
// Save or Load cookies
//===================================================================
		function doCookies(mode, f) {
			frm = document.forms[f];
			if (mode === 'save') {
				if (get_check_value('storeInfoYes')) {
					for(x=0;x<flist.length;x++) {
						setCookie(frm, flist[x]);
					}
					for(x=0;x<flistdrop.length;x++) {
						setCookieDropdown(frm, flistdrop[x]);
					}
					
				} else {
					// User selected No.  Delete any cookies
					// that may reside from previous visits
					for(x=0;x<flist.length;x++) {
						deleteCookie(flist[x]);
					}
					for(x=0;x<flistdrop.length;x++) {
						deleteCookie(flistdrop[x]);
					}
				}
			} else {
				for(x=0;x<flist.length;x++) {
					c = getCookie(flist[x]);

					if (c != null) {
						frm[flist[x]].value = c;
					}
				}
				

				for(x=0;x<flistdrop.length;x++) {
					var c = getCookie(flistdrop[x]);
					var v = flistdrop[x];
					for (i=0;i<frm[v].options.length;i++) {
					    if (frm[v].options[i].value === c) {
						frm[v].options[i].selected = true;
					    }
					}
				}
			}
		}
//===================================================================
// Delete a cookie value
//===================================================================
	function deleteCookie(name) {
		document.cookie = name + "=;path=/";
		//;expires=Sun, 01 Jan 2012 12:00:00 UTC
	}		
//===================================================================
// Set a cookie value for a text field
//===================================================================
		function setCookie(frm, name)
		{
			document.cookie =  name + '=' + frm[name].value + '; expires=Wed, 01 Aug 2040 05:28:21 UTC; path=/';
		}
//===================================================================
// Set a cookie value for a dropdown
//===================================================================
		function setCookieDropdown(frm, name)
		{
			v = frm[name];
			document.cookie =  name + '=' + v.options[v.selectedIndex].value + '; expires=Wed, 01 Aug 2040 05:28:21 UTC; path=/';
		}
//===================================================================
// Load a cookie value from the browser cookie
//===================================================================
		function getCookie(name) {
			var ca = document.cookie.split(';');

			for(var i=0;i < ca.length;i++) {
		 		var c = trim(ca[i]);
				if (strLeft(c,'=') === name) {
			 		return strRight(c,'=');
				}
			}
			return null;
		}
//===================================================================
// Determine whether a checkbox has been checked
//===================================================================
		function get_check_value(f)
		{
			var fld = document.getElementById(f);
   			if (fld.checked)
      				return true;
      			else
				return false;
  		
		}
//===================================================================
// Validation radio button function
//===================================================================
	function validateRadio(radio, f) {
	 	var radios = document[f].elements[radio]; 
 		for (var i=0; i <radios.length; i++) { 
  			if (radios[i].checked) { 
   				return true; 
  			} 
 		} 
 		return false; 
	}
//===================================================================
// Utility Functions
//===================================================================
//@Left equivalent
function strLeft(sourceStr, keyStr){
	return (sourceStr.indexOf(keyStr) === -1 | keyStr==='') ? '' : sourceStr.split(keyStr)[0];
}

//@Right equivalent
function strRight(sourceStr, keyStr){
	idx = sourceStr.indexOf(keyStr);
	return (idx === -1 | keyStr==='') ? '' : sourceStr.substr(idx+ keyStr.length);
}
function trim(str, chars) {
	return ltrim(rtrim(str, chars), chars);
}
 
function ltrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}
 
function rtrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
};
//====================================================
// Contains scripts specific to the Sample Request Form
//====================================================


// Global Variables
var flist = ['firstName','lastName','emailAddress','phone','companyName','jobTitle','address1','address2','city','state','zip','shipAcctnum','storeInfoYes'];
var flistdrop = ['regionLocated','carrier','country'];
var rowcount = 1;

/*************************************************************************
 Build an array to pass to the Validator which contains all the fields you
 want to validate. Each item in the array is an associative object that
 details options for each field.

 Format - {name: "fieldname" [, type: "number|email|date|regex|custom",
		message: "display this"]}

 Options - includes things like
 * min/max for date/number fields
 * pattern for regex fields
 * expression for custom field validations
 * condition for fields not to be validated always

 *************************************************************************/


Validator.fields=
	[
		{name: "firstName", message: "First Name is a required field."},
		{name: "lastName", message: "Last Name is a required field."},
		{name: "emailAddress", type: "email", message: "Email address is a required field."},
		{name: "phone", message: "Phone number is a required field."},
		{name: "companyName", message: "Company Name is a required field."},
		{name: "jobTitle", message: "Job Title is a required field."},
		{name: "address1", message: "Address1 is a required field."},
		{name: "city", message: "City is a required field."},

		{name: "country", message: "Country is a required field"},
		{name: "shipAcctnum", type: "custom", expression: "validateShipping()", message: "Shipping Account# is a required field."},
		{name: "carrier", type: "custom", expression: "validateCarrier()", message: "Shipping Carrier is a required field."},

		{name: "regionLocated", message: "Region is a required field"},
		{name: "market", message: "Market is a required field."},

		{name: "storeinfofield", type: "custom", expression: "validateRadio('storeinfo','samplerequest')", message: "Required field"},
		{name: "terms_agree", message: "You must agree to the terms & conditions."}
	]

//{name: "selectedProduct", message: "Product is a required field."},
//{name: "qtyRequested", message: "Quantity Requested is a required field."}
/*
For a "custom" field validation we can pass the name of
a function to run. The function, like the one below, can
do anything you like. All it needs to do is return either
true of false before it ends.
*/
//=============================================
// Validate the selected products
//
// The first product row must be completed.
// If the user adds another row only validate
// that row if the user has selected a value
// in one of the fields.
//
// Called from the Validator.js script
//=============================================
function validateProducts() {

  var errortext = "";
  var errorrow = $('errorrow');
  var valid = true;

  //check the first row
  var prod = document.getElementById("selectedProduct");
  var qty = document.getElementById("qtyRequested");
  var usage = document.getElementById("sample_annual_use");

  if (prod.selectedIndex == 0) {
      errortext = "<div style='opacity:0.9999' class='validation-advice'>Product is required</div>";
  }
  if (qty.value == "") {
      errortext += "<div style='opacity:0.9999'  class='validation-advice'>Quantity is required</div>";
  } else if (!isWhole(qty.value)) {
      errortext += "<div style='opacity:0.9999'  class='validation-advice'>Quantity must be a number</div>";
  } else if (qty.value < 1){
      errortext += "<div style='opacity:0.9999'  class='validation-advice'>Quantity must be greater than zero</div>";
  }

  // IE does not implement the DOM spec correctly
  if (errorrow.childNodes[0].nodeType == '1') {
      // for IE 7 and below
      cell1 = 0;
  } else {
      // FF, Safari, etc.
      cell1 = 1;
  }

  errorrow.childNodes[cell1].innerHTML = errortext;

  if (errortext != "") {
      valid = false;
  }

  // Loop through all of the other product rows
  for (x=2;x<=rowcount;x++) {
      errortext = "";
      errorrow = document.getElementById("errorrow"+x);
      prod = document.getElementById("selectedProduct"+x);
      qty = document.getElementById("qtyRequested"+x);
      usage = document.getElementById("sample_annual_use"+x);
      if (prod) {
          if (prod.selectedIndex) {
              if ((prod.selectedIndex == 0) && (qty.value == "") && (usage.selectedIndex == 0)) { 
                  // No action taken if all conditions are met
              } else {
                  if (prod.selectedIndex == 0) {
                      errortext = "<div style='opacity:0.9999'  class='validation-advice'>Product is required</div>";
                  }
              }
              if (qty.value == "") {
                  errortext += "<div style='opacity:0.9999'  class='validation-advice'>Quantity is required</div>";
              } else if (!isWhole(qty.value)) {
                  errortext += "<div style='opacity:0.9999'  class='validation-advice'>Quantity must be a number</div>";
              } else if (qty.value < 1){
                  errortext += "<div style='opacity:0.9999'  class='validation-advice'>Quantity must be greater than zero</div>";
              }
          }
          errorrow.childNodes[cell1].innerHTML = errortext;
          if (errortext != "") {
              valid = false;
          }
      }
  }
  return valid;
}
// Check if string is a whole number(digits only).
var isWholeRegEx = /^\s*\d+\s*$/;
function isWhole (s) {
	return String(s).search (isWholeRegEx) != -1
}
//=============================================
// Validation function
//=============================================
function validateShipping() {
	exp = document.getElementById('shipExpedite');
	act = document.getElementById('shipAcctnum');
	if ((exp.checked) && (act.value=='')) {
		return false;
	}
	return true;
}

//=============================================
// Validation Carrier function
//=============================================
function validateCarrier() {
	exp = document.getElementById('shipExpedite');
	car = document.getElementById('carrier');
	if ((exp.checked) && (car.selectedIndex==0)){
		return false;
	}
	return true;
}
//=============================================
// Validation End Use Other function
//=============================================
function validateEndUseOther(){
	eu = document.getElementById('enduse');
	euo = document.getElementById('enduseother');

	for (i=0;i<eu.options.length;i++) {

		if ((eu.options[eu.selectedIndex].value == 'Other') && (euo.value=='')) {
			return false;
		}
	}
	return true;
}

//=============================================
// Validation function
//=============================================
function checkFields(id) {
	fld = document.getElementById(id);

	switch(id) {
		case 'enduse':
			if (fld.options[fld.selectedIndex].value == "Other") {
				document.getElementById('enduseotherlabel').style.display = 'inline';
				document.getElementById('enduseotherdiv').style.display = 'inline';
			} else {
				document.getElementById('enduseotherlabel').style.display = 'none';
				document.getElementById('enduseotherdiv').style.display = 'none';
			}
			break;
		case 'shipExpedite':
			if (fld.checked) {
				document.getElementById('shipacctlabel').style.display = 'inline';
				document.getElementById('shipacctdiv').style.display = 'inline';

				document.getElementById('carrierlabel').style.display = 'inline';
				document.getElementById('carrierdiv').style.display = 'inline';
			} else {
				document.getElementById('shipacctlabel').style.setProperty( 'display', 'none', 'important' );
				document.getElementById('shipacctdiv').style.display = 'none';

				document.getElementById('carrierlabel').style.setProperty( 'display', 'none', 'important' );
				document.getElementById('carrierdiv').style.display = 'none';
			}
		default:
			break;
	}
}

//=============================================
// Called by getProds()
//=============================================
function clearProductRows() {
	// Need to clear any additional product rows
	// that have been added
	if($('advice-selectedProduct')) {
		rem = $('advice-selectedProduct')
		rem.parentNode.removeChild(rem);
	}
	for (x=2;x<=10;x++) {
		if ($('addrow'+x)) {
			rem = $('addrow'+x);
			rem.parentNode.removeChild(rem);
		}
		if ($('errorrow'+x)) {
			rem = $('errorrow'+x);
			rem.parentNode.removeChild(rem);
		}
	}
	rowcount = 1;
}
//=============================================
// Called by getProds()
//=============================================
function showResponse(originalRequest) {
	p = document.getElementById('productdiv');
	p.style.backgroundPosition = '-100px 5px';
	p.style.paddingLeft = '0px';
	p.innerHTML = unescape(originalRequest.responseText);
}

//======================================================
// Called by the Add Product button
//
// Adds another row to the product table by manipulating
// the DOM
//======================================================
function addProduct() {

	// Need to make sure that a region has been selected
	reg = document.getElementById('regionLocated');
	if ((reg.selectedIndex == 0) || (rowcount == 10)){
		return;
	}

	rowcount++
	Move.element('firstrow', 'tablebody', 'copy');
	Move.element('errorrowtemp', 'tablebody', 'copy');

	// Cleanup IDs so they are unique
	var newrow = $('firstrow-copy');
	newrow.setAttribute('id','addrow'+rowcount);
	var newerrorrow = $('errorrowtemp-copy');
	newerrorrow.setAttribute('id','errorrow'+rowcount);

	// IE does not implement the DOM spec correctly
	if (newrow.childNodes[0].nodeType == '1') {
		// for IE 7 and below
		cell1 = 0;
		cell2 = 1;
		cell3 = 2;
		cell4 = 3;
		cell5 = 4;

	} else {
		// FF, Safari, etc.
		cell1 = 1;
		cell2 = 3;
		cell3 = 5;
		cell4 = 7;
		cell5 = 9;
	}

	// First cell of the table
	newrow.childNodes[cell1].innerHTML = rowcount + '.'


	// Update the div holding the Product dropdown
	var pd = newrow.childNodes[cell2].childNodes[cell1];
	pd.id = pd.id + rowcount;

	// Update the Product dropdown
	var sel = pd.childNodes[0];
	sel.id = sel.id + rowcount;
	sel.name = sel.name + rowcount;
	sel.selectedIndex = 0;

	//Update the Qty field
	var qty
	qty = newrow.childNodes[cell3].childNodes[cell1].childNodes[cell1];
	qty.id = qty.id + rowcount;
	qty.name = qty.name + rowcount;
	qty.value = ""

	// Update the Annual Usage dropdown
	var sel = newrow.childNodes[cell4].childNodes[cell1].childNodes[cell1];
	sel.id = sel.id + rowcount;

	sel.name = sel.name + rowcount;
	sel.selectedIndex = 0;

	// Update the delete link
	var ahref = newrow.childNodes[cell5].childNodes[cell1];
	ahref.id = "alink_" + rowcount;
	ahref.href = "javascript:deleteProduct('alink_" + rowcount + "');";

	if (rowcount == 10) {
		// We've reached the max samples (10)
		btn = document.getElementById('btn_addproducts');
		//btn.childNodes[0].setAttribute('onclick', '')

	}
}

/*
This script is copyright (c) 2006 Elliot Swan under the
Creative Commons Attribution-ShareAlike 2.5 license:
http://creativecommons.org/licenses/by-sa/2.5/

More information on this script can be found at:
http://www.elliotswan.com/2006/04/12/move-and-copy/
*/

var Move =	{

	copy	:   function(e, target)	{
		var eId      = document.getElementById(e);
		var copyE    = eId.cloneNode(true);
		var cLength  = copyE.childNodes.length -1;
		copyE.id     = e+'-copy';

		for(var i = 0; cLength >= i;  i++)	{
			if(copyE.childNodes[i].id) {
				var cNode   = copyE.childNodes[i];
				var firstId = cNode.id;
				cNode.id    = firstId+'-copy'; }
		}
		document.getElementById(target).appendChild(copyE);
	},
	element:  function(e, target, type)	{
		var eId =  document.getElementById(e);
		if(type == 'move') {
			document.getElementById(target).appendChild(eId);
		}

		else if(type == 'copy')	{
			this.copy(e, target);
		}
	}
}

//======================================================
// Check to see if there are any blank product lines
// if so trim it out.
//======================================================
function trimProducts() {
	var prodArray = new Array();
	var qtyArray = new Array();
	var usageArray = new Array();

	y=0
	for (x=2;x<=10;x++) {
		var row = $("addrow" + x);
		var prod = $("selectedProduct"+x);
		var qty = $("qtyRequested"+x);
		var usage = $("sample_annual_use"+x);

		y++
	}

}

//=============================================
// Used when the region dropdown is changed so
// so the product dropdown has the correct values
// for that region
//=============================================
function getProds() {
    console.log('new getProds')
	clearProductRows();
	p = document.getElementById('productdiv');
	p.style.backgroundPosition = '0 5px';
	p.style.paddingLeft = '25px';
	p.innerHTML = "Loading Products..."
  var r = $F('regionLocated');
  var c = $F('country');
  
	if ((r == '') || (r==' ') || r.selectedIndex == 0) {

	}
	var url = 'https://samples.elementis.com:443/prodsearch?openagent';
	var pars = 'region='+r+'&country='+c;
	var target = 'productdiv';
	var myAjax = new Ajax.Request(url, {method: 'get', parameters: pars, onComplete:showResponse} );

	p.style.visibility = "visible"
}
(function($) {
	$( document ).ready(function() {
		doCookies('','samplerequest');
		Validator.init('samplerequest', 'beforeForm', 'afterForm');
		getProds();
	});
})(jQuery);
;

