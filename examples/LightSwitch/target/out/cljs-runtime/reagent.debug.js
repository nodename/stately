goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__31986__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31987__i = 0, G__31987__a = new Array(arguments.length -  0);
while (G__31987__i < G__31987__a.length) {G__31987__a[G__31987__i] = arguments[G__31987__i + 0]; ++G__31987__i;}
  args = new cljs.core.IndexedSeq(G__31987__a,0,null);
} 
return G__31986__delegate.call(this,args);};
G__31986.cljs$lang$maxFixedArity = 0;
G__31986.cljs$lang$applyTo = (function (arglist__31988){
var args = cljs.core.seq(arglist__31988);
return G__31986__delegate(args);
});
G__31986.cljs$core$IFn$_invoke$arity$variadic = G__31986__delegate;
return G__31986;
})()
);

(o.error = (function() { 
var G__31989__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31989 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31990__i = 0, G__31990__a = new Array(arguments.length -  0);
while (G__31990__i < G__31990__a.length) {G__31990__a[G__31990__i] = arguments[G__31990__i + 0]; ++G__31990__i;}
  args = new cljs.core.IndexedSeq(G__31990__a,0,null);
} 
return G__31989__delegate.call(this,args);};
G__31989.cljs$lang$maxFixedArity = 0;
G__31989.cljs$lang$applyTo = (function (arglist__31991){
var args = cljs.core.seq(arglist__31991);
return G__31989__delegate(args);
});
G__31989.cljs$core$IFn$_invoke$arity$variadic = G__31989__delegate;
return G__31989;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
