goog.provide('nodename.stately.communications.impl.logging');
nodename.stately.communications.impl.logging.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__61269_SHARP_){
return console.log(p1__61269_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__61270_SHARP_){
return console.warn(p1__61270_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__61271_SHARP_){
return console.error(p1__61271_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__61272_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__61272_SHARP_);
} else {
return console.log(p1__61272_SHARP_);
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
var len__5726__auto___61317 = arguments.length;
var i__5727__auto___61318 = (0);
while(true){
if((i__5727__auto___61318 < len__5726__auto___61317)){
args__5732__auto__.push((arguments[i__5727__auto___61318]));

var G__61319 = (i__5727__auto___61318 + (1));
i__5727__auto___61318 = G__61319;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.communications.impl.logging.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.communications.impl.logging.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__61280 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var fexpr__61279 = new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.communications.impl.logging.loggers));
return (fexpr__61279.cljs$core$IFn$_invoke$arity$1 ? fexpr__61279.cljs$core$IFn$_invoke$arity$1(G__61280) : fexpr__61279.call(null, G__61280));
}));

(nodename.stately.communications.impl.logging.log.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.communications.impl.logging.log.cljs$lang$applyTo = (function (seq61276){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61276));
}));

nodename.stately.communications.impl.logging.warn = (function nodename$stately$communications$impl$logging$warn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___61320 = arguments.length;
var i__5727__auto___61321 = (0);
while(true){
if((i__5727__auto___61321 < len__5726__auto___61320)){
args__5732__auto__.push((arguments[i__5727__auto___61321]));

var G__61322 = (i__5727__auto___61321 + (1));
i__5727__auto___61321 = G__61322;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.communications.impl.logging.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.communications.impl.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__61287 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var fexpr__61286 = new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.communications.impl.logging.loggers));
return (fexpr__61286.cljs$core$IFn$_invoke$arity$1 ? fexpr__61286.cljs$core$IFn$_invoke$arity$1(G__61287) : fexpr__61286.call(null, G__61287));
}));

(nodename.stately.communications.impl.logging.warn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.communications.impl.logging.warn.cljs$lang$applyTo = (function (seq61282){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61282));
}));

nodename.stately.communications.impl.logging.group = (function nodename$stately$communications$impl$logging$group(var_args){
var args__5732__auto__ = [];
var len__5726__auto___61324 = arguments.length;
var i__5727__auto___61326 = (0);
while(true){
if((i__5727__auto___61326 < len__5726__auto___61324)){
args__5732__auto__.push((arguments[i__5727__auto___61326]));

var G__61327 = (i__5727__auto___61326 + (1));
i__5727__auto___61326 = G__61327;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.communications.impl.logging.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.communications.impl.logging.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__61297 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var fexpr__61296 = new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.communications.impl.logging.loggers));
return (fexpr__61296.cljs$core$IFn$_invoke$arity$1 ? fexpr__61296.cljs$core$IFn$_invoke$arity$1(G__61297) : fexpr__61296.call(null, G__61297));
}));

(nodename.stately.communications.impl.logging.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.communications.impl.logging.group.cljs$lang$applyTo = (function (seq61288){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61288));
}));

nodename.stately.communications.impl.logging.groupEnd = (function nodename$stately$communications$impl$logging$groupEnd(var_args){
var args__5732__auto__ = [];
var len__5726__auto___61328 = arguments.length;
var i__5727__auto___61329 = (0);
while(true){
if((i__5727__auto___61329 < len__5726__auto___61328)){
args__5732__auto__.push((arguments[i__5727__auto___61329]));

var G__61330 = (i__5727__auto___61329 + (1));
i__5727__auto___61329 = G__61330;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.communications.impl.logging.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.communications.impl.logging.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__61304 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var fexpr__61303 = new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.communications.impl.logging.loggers));
return (fexpr__61303.cljs$core$IFn$_invoke$arity$1 ? fexpr__61303.cljs$core$IFn$_invoke$arity$1(G__61304) : fexpr__61303.call(null, G__61304));
}));

(nodename.stately.communications.impl.logging.groupEnd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.communications.impl.logging.groupEnd.cljs$lang$applyTo = (function (seq61302){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61302));
}));

nodename.stately.communications.impl.logging.error = (function nodename$stately$communications$impl$logging$error(var_args){
var args__5732__auto__ = [];
var len__5726__auto___61334 = arguments.length;
var i__5727__auto___61335 = (0);
while(true){
if((i__5727__auto___61335 < len__5726__auto___61334)){
args__5732__auto__.push((arguments[i__5727__auto___61335]));

var G__61336 = (i__5727__auto___61335 + (1));
i__5727__auto___61335 = G__61336;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.communications.impl.logging.error.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.communications.impl.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__61311 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var fexpr__61310 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.communications.impl.logging.loggers));
return (fexpr__61310.cljs$core$IFn$_invoke$arity$1 ? fexpr__61310.cljs$core$IFn$_invoke$arity$1(G__61311) : fexpr__61310.call(null, G__61311));
}));

(nodename.stately.communications.impl.logging.error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.communications.impl.logging.error.cljs$lang$applyTo = (function (seq61308){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61308));
}));


//# sourceMappingURL=nodename.stately.communications.impl.logging.js.map
