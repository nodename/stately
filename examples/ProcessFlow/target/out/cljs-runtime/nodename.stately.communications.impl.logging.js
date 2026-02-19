goog.provide('nodename.stately.communications.impl.logging');
nodename.stately.communications.impl.logging.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__42251_SHARP_){
return console.log(p1__42251_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__42252_SHARP_){
return console.warn(p1__42252_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__42253_SHARP_){
return console.error(p1__42253_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__42254_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__42254_SHARP_);
} else {
return console.log(p1__42254_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
nodename.stately.communications.impl.logging.loggers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(nodename.stately.communications.impl.logging.default_loggers);
/**
 * Change the set (subset?) of logging functions used by stately.
 *   'new-loggers' should be a map which looks like default-loggers
 */
nodename.stately.communications.impl.logging.set_loggers_BANG_ = (function nodename$stately$communications$impl$logging$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_loggers)),cljs.core.set(cljs.core.keys(nodename.stately.communications.impl.logging.default_loggers))))){
} else {
throw (new Error(["Assert failed: ","Unknown keys in new-loggers","\n","(empty? (difference (set (keys new-loggers)) (set (keys default-loggers))))"].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nodename.stately.communications.impl.logging.loggers,cljs.core.merge,new_loggers);
});
nodename.stately.communications.impl.logging.log = (function nodename$stately$communications$impl$logging$log(var_args){
var args__5732__auto__ = [];
var len__5726__auto___42311 = arguments.length;
var i__5727__auto___42312 = (0);
while(true){
if((i__5727__auto___42312 < len__5726__auto___42311)){
args__5732__auto__.push((arguments[i__5727__auto___42312]));

var G__42314 = (i__5727__auto___42312 + (1));
i__5727__auto___42312 = G__42314;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.communications.impl.logging.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.communications.impl.logging.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__42271 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var fexpr__42269 = new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.communications.impl.logging.loggers));
return (fexpr__42269.cljs$core$IFn$_invoke$arity$1 ? fexpr__42269.cljs$core$IFn$_invoke$arity$1(G__42271) : fexpr__42269.call(null, G__42271));
}));

(nodename.stately.communications.impl.logging.log.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.communications.impl.logging.log.cljs$lang$applyTo = (function (seq42266){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42266));
}));

nodename.stately.communications.impl.logging.warn = (function nodename$stately$communications$impl$logging$warn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___42318 = arguments.length;
var i__5727__auto___42319 = (0);
while(true){
if((i__5727__auto___42319 < len__5726__auto___42318)){
args__5732__auto__.push((arguments[i__5727__auto___42319]));

var G__42320 = (i__5727__auto___42319 + (1));
i__5727__auto___42319 = G__42320;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.communications.impl.logging.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.communications.impl.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__42282 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var fexpr__42281 = new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.communications.impl.logging.loggers));
return (fexpr__42281.cljs$core$IFn$_invoke$arity$1 ? fexpr__42281.cljs$core$IFn$_invoke$arity$1(G__42282) : fexpr__42281.call(null, G__42282));
}));

(nodename.stately.communications.impl.logging.warn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.communications.impl.logging.warn.cljs$lang$applyTo = (function (seq42275){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42275));
}));

nodename.stately.communications.impl.logging.group = (function nodename$stately$communications$impl$logging$group(var_args){
var args__5732__auto__ = [];
var len__5726__auto___42321 = arguments.length;
var i__5727__auto___42322 = (0);
while(true){
if((i__5727__auto___42322 < len__5726__auto___42321)){
args__5732__auto__.push((arguments[i__5727__auto___42322]));

var G__42323 = (i__5727__auto___42322 + (1));
i__5727__auto___42322 = G__42323;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.communications.impl.logging.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.communications.impl.logging.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__42285 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var fexpr__42284 = new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.communications.impl.logging.loggers));
return (fexpr__42284.cljs$core$IFn$_invoke$arity$1 ? fexpr__42284.cljs$core$IFn$_invoke$arity$1(G__42285) : fexpr__42284.call(null, G__42285));
}));

(nodename.stately.communications.impl.logging.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.communications.impl.logging.group.cljs$lang$applyTo = (function (seq42283){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42283));
}));

nodename.stately.communications.impl.logging.groupEnd = (function nodename$stately$communications$impl$logging$groupEnd(var_args){
var args__5732__auto__ = [];
var len__5726__auto___42327 = arguments.length;
var i__5727__auto___42329 = (0);
while(true){
if((i__5727__auto___42329 < len__5726__auto___42327)){
args__5732__auto__.push((arguments[i__5727__auto___42329]));

var G__42330 = (i__5727__auto___42329 + (1));
i__5727__auto___42329 = G__42330;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.communications.impl.logging.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.communications.impl.logging.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__42294 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var fexpr__42293 = new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.communications.impl.logging.loggers));
return (fexpr__42293.cljs$core$IFn$_invoke$arity$1 ? fexpr__42293.cljs$core$IFn$_invoke$arity$1(G__42294) : fexpr__42293.call(null, G__42294));
}));

(nodename.stately.communications.impl.logging.groupEnd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.communications.impl.logging.groupEnd.cljs$lang$applyTo = (function (seq42290){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42290));
}));

nodename.stately.communications.impl.logging.error = (function nodename$stately$communications$impl$logging$error(var_args){
var args__5732__auto__ = [];
var len__5726__auto___42332 = arguments.length;
var i__5727__auto___42333 = (0);
while(true){
if((i__5727__auto___42333 < len__5726__auto___42332)){
args__5732__auto__.push((arguments[i__5727__auto___42333]));

var G__42334 = (i__5727__auto___42333 + (1));
i__5727__auto___42333 = G__42334;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.communications.impl.logging.error.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.communications.impl.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__42302 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var fexpr__42301 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.communications.impl.logging.loggers));
return (fexpr__42301.cljs$core$IFn$_invoke$arity$1 ? fexpr__42301.cljs$core$IFn$_invoke$arity$1(G__42302) : fexpr__42301.call(null, G__42302));
}));

(nodename.stately.communications.impl.logging.error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.communications.impl.logging.error.cljs$lang$applyTo = (function (seq42300){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42300));
}));


//# sourceMappingURL=nodename.stately.communications.impl.logging.js.map
