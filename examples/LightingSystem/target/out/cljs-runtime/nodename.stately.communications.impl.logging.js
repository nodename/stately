goog.provide('nodename.stately.communications.impl.logging');
nodename.stately.communications.impl.logging.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__51897_SHARP_){
return console.log(p1__51897_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__51898_SHARP_){
return console.warn(p1__51898_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__51899_SHARP_){
return console.error(p1__51899_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__51900_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__51900_SHARP_);
} else {
return console.log(p1__51900_SHARP_);
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
var len__5726__auto___51945 = arguments.length;
var i__5727__auto___51946 = (0);
while(true){
if((i__5727__auto___51946 < len__5726__auto___51945)){
args__5732__auto__.push((arguments[i__5727__auto___51946]));

var G__51947 = (i__5727__auto___51946 + (1));
i__5727__auto___51946 = G__51947;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.communications.impl.logging.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.communications.impl.logging.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__51917 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var fexpr__51916 = new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.communications.impl.logging.loggers));
return (fexpr__51916.cljs$core$IFn$_invoke$arity$1 ? fexpr__51916.cljs$core$IFn$_invoke$arity$1(G__51917) : fexpr__51916.call(null, G__51917));
}));

(nodename.stately.communications.impl.logging.log.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.communications.impl.logging.log.cljs$lang$applyTo = (function (seq51913){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51913));
}));

nodename.stately.communications.impl.logging.warn = (function nodename$stately$communications$impl$logging$warn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___51949 = arguments.length;
var i__5727__auto___51950 = (0);
while(true){
if((i__5727__auto___51950 < len__5726__auto___51949)){
args__5732__auto__.push((arguments[i__5727__auto___51950]));

var G__51951 = (i__5727__auto___51950 + (1));
i__5727__auto___51950 = G__51951;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.communications.impl.logging.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.communications.impl.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__51925 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var fexpr__51924 = new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.communications.impl.logging.loggers));
return (fexpr__51924.cljs$core$IFn$_invoke$arity$1 ? fexpr__51924.cljs$core$IFn$_invoke$arity$1(G__51925) : fexpr__51924.call(null, G__51925));
}));

(nodename.stately.communications.impl.logging.warn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.communications.impl.logging.warn.cljs$lang$applyTo = (function (seq51919){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51919));
}));

nodename.stately.communications.impl.logging.group = (function nodename$stately$communications$impl$logging$group(var_args){
var args__5732__auto__ = [];
var len__5726__auto___51952 = arguments.length;
var i__5727__auto___51953 = (0);
while(true){
if((i__5727__auto___51953 < len__5726__auto___51952)){
args__5732__auto__.push((arguments[i__5727__auto___51953]));

var G__51954 = (i__5727__auto___51953 + (1));
i__5727__auto___51953 = G__51954;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.communications.impl.logging.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.communications.impl.logging.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__51931 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var fexpr__51930 = new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.communications.impl.logging.loggers));
return (fexpr__51930.cljs$core$IFn$_invoke$arity$1 ? fexpr__51930.cljs$core$IFn$_invoke$arity$1(G__51931) : fexpr__51930.call(null, G__51931));
}));

(nodename.stately.communications.impl.logging.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.communications.impl.logging.group.cljs$lang$applyTo = (function (seq51928){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51928));
}));

nodename.stately.communications.impl.logging.groupEnd = (function nodename$stately$communications$impl$logging$groupEnd(var_args){
var args__5732__auto__ = [];
var len__5726__auto___51955 = arguments.length;
var i__5727__auto___51956 = (0);
while(true){
if((i__5727__auto___51956 < len__5726__auto___51955)){
args__5732__auto__.push((arguments[i__5727__auto___51956]));

var G__51957 = (i__5727__auto___51956 + (1));
i__5727__auto___51956 = G__51957;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.communications.impl.logging.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.communications.impl.logging.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__51935 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var fexpr__51934 = new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.communications.impl.logging.loggers));
return (fexpr__51934.cljs$core$IFn$_invoke$arity$1 ? fexpr__51934.cljs$core$IFn$_invoke$arity$1(G__51935) : fexpr__51934.call(null, G__51935));
}));

(nodename.stately.communications.impl.logging.groupEnd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.communications.impl.logging.groupEnd.cljs$lang$applyTo = (function (seq51933){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51933));
}));

nodename.stately.communications.impl.logging.error = (function nodename$stately$communications$impl$logging$error(var_args){
var args__5732__auto__ = [];
var len__5726__auto___51961 = arguments.length;
var i__5727__auto___51962 = (0);
while(true){
if((i__5727__auto___51962 < len__5726__auto___51961)){
args__5732__auto__.push((arguments[i__5727__auto___51962]));

var G__51963 = (i__5727__auto___51962 + (1));
i__5727__auto___51962 = G__51963;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.communications.impl.logging.error.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.communications.impl.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__51940 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var fexpr__51939 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.communications.impl.logging.loggers));
return (fexpr__51939.cljs$core$IFn$_invoke$arity$1 ? fexpr__51939.cljs$core$IFn$_invoke$arity$1(G__51940) : fexpr__51939.call(null, G__51940));
}));

(nodename.stately.communications.impl.logging.error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.communications.impl.logging.error.cljs$lang$applyTo = (function (seq51936){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51936));
}));


//# sourceMappingURL=nodename.stately.communications.impl.logging.js.map
