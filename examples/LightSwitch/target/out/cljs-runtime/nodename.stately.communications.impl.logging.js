goog.provide('nodename.stately.communications.impl.logging');
nodename.stately.communications.impl.logging.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__32742_SHARP_){
return console.log(p1__32742_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__32743_SHARP_){
return console.warn(p1__32743_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__32744_SHARP_){
return console.error(p1__32744_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__32746_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__32746_SHARP_);
} else {
return console.log(p1__32746_SHARP_);
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
var len__5726__auto___32815 = arguments.length;
var i__5727__auto___32816 = (0);
while(true){
if((i__5727__auto___32816 < len__5726__auto___32815)){
args__5732__auto__.push((arguments[i__5727__auto___32816]));

var G__32817 = (i__5727__auto___32816 + (1));
i__5727__auto___32816 = G__32817;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.communications.impl.logging.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.communications.impl.logging.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__32759 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var fexpr__32758 = new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.communications.impl.logging.loggers));
return (fexpr__32758.cljs$core$IFn$_invoke$arity$1 ? fexpr__32758.cljs$core$IFn$_invoke$arity$1(G__32759) : fexpr__32758.call(null, G__32759));
}));

(nodename.stately.communications.impl.logging.log.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.communications.impl.logging.log.cljs$lang$applyTo = (function (seq32752){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32752));
}));

nodename.stately.communications.impl.logging.warn = (function nodename$stately$communications$impl$logging$warn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___32818 = arguments.length;
var i__5727__auto___32819 = (0);
while(true){
if((i__5727__auto___32819 < len__5726__auto___32818)){
args__5732__auto__.push((arguments[i__5727__auto___32819]));

var G__32821 = (i__5727__auto___32819 + (1));
i__5727__auto___32819 = G__32821;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.communications.impl.logging.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.communications.impl.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__32767 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var fexpr__32766 = new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.communications.impl.logging.loggers));
return (fexpr__32766.cljs$core$IFn$_invoke$arity$1 ? fexpr__32766.cljs$core$IFn$_invoke$arity$1(G__32767) : fexpr__32766.call(null, G__32767));
}));

(nodename.stately.communications.impl.logging.warn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.communications.impl.logging.warn.cljs$lang$applyTo = (function (seq32761){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32761));
}));

nodename.stately.communications.impl.logging.group = (function nodename$stately$communications$impl$logging$group(var_args){
var args__5732__auto__ = [];
var len__5726__auto___32822 = arguments.length;
var i__5727__auto___32823 = (0);
while(true){
if((i__5727__auto___32823 < len__5726__auto___32822)){
args__5732__auto__.push((arguments[i__5727__auto___32823]));

var G__32824 = (i__5727__auto___32823 + (1));
i__5727__auto___32823 = G__32824;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.communications.impl.logging.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.communications.impl.logging.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__32780 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var fexpr__32779 = new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.communications.impl.logging.loggers));
return (fexpr__32779.cljs$core$IFn$_invoke$arity$1 ? fexpr__32779.cljs$core$IFn$_invoke$arity$1(G__32780) : fexpr__32779.call(null, G__32780));
}));

(nodename.stately.communications.impl.logging.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.communications.impl.logging.group.cljs$lang$applyTo = (function (seq32774){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32774));
}));

nodename.stately.communications.impl.logging.groupEnd = (function nodename$stately$communications$impl$logging$groupEnd(var_args){
var args__5732__auto__ = [];
var len__5726__auto___32825 = arguments.length;
var i__5727__auto___32826 = (0);
while(true){
if((i__5727__auto___32826 < len__5726__auto___32825)){
args__5732__auto__.push((arguments[i__5727__auto___32826]));

var G__32827 = (i__5727__auto___32826 + (1));
i__5727__auto___32826 = G__32827;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.communications.impl.logging.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.communications.impl.logging.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__32792 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var fexpr__32791 = new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.communications.impl.logging.loggers));
return (fexpr__32791.cljs$core$IFn$_invoke$arity$1 ? fexpr__32791.cljs$core$IFn$_invoke$arity$1(G__32792) : fexpr__32791.call(null, G__32792));
}));

(nodename.stately.communications.impl.logging.groupEnd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.communications.impl.logging.groupEnd.cljs$lang$applyTo = (function (seq32784){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32784));
}));

nodename.stately.communications.impl.logging.error = (function nodename$stately$communications$impl$logging$error(var_args){
var args__5732__auto__ = [];
var len__5726__auto___32828 = arguments.length;
var i__5727__auto___32829 = (0);
while(true){
if((i__5727__auto___32829 < len__5726__auto___32828)){
args__5732__auto__.push((arguments[i__5727__auto___32829]));

var G__32830 = (i__5727__auto___32829 + (1));
i__5727__auto___32829 = G__32830;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.communications.impl.logging.error.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.communications.impl.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__32805 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var fexpr__32804 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.communications.impl.logging.loggers));
return (fexpr__32804.cljs$core$IFn$_invoke$arity$1 ? fexpr__32804.cljs$core$IFn$_invoke$arity$1(G__32805) : fexpr__32804.call(null, G__32805));
}));

(nodename.stately.communications.impl.logging.error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.communications.impl.logging.error.cljs$lang$applyTo = (function (seq32799){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32799));
}));


//# sourceMappingURL=nodename.stately.communications.impl.logging.js.map
