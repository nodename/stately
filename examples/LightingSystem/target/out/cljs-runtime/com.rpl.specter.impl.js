goog.provide('com.rpl.specter.impl');
com.rpl.specter.impl.NONE = new cljs.core.Keyword("com.rpl.specter.impl","NONE","com.rpl.specter.impl/NONE",1085349969);
com.rpl.specter.impl.spy = (function com$rpl$specter$impl$spy(e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["SPY:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0))], 0));

return e;
});
com.rpl.specter.impl.smart_str_STAR_ = (function com$rpl$specter$impl$smart_str_STAR_(o){
if(cljs.core.coll_QMARK_(o)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o], 0));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(o);
}
});
com.rpl.specter.impl.smart_str = (function com$rpl$specter$impl$smart_str(var_args){
var args__5732__auto__ = [];
var len__5726__auto___58017 = arguments.length;
var i__5727__auto___58018 = (0);
while(true){
if((i__5727__auto___58018 < len__5726__auto___58017)){
args__5732__auto__.push((arguments[i__5727__auto___58018]));

var G__58019 = (i__5727__auto___58018 + (1));
i__5727__auto___58018 = G__58019;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.smart_str_STAR_,elems));
}));

(com.rpl.specter.impl.smart_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq55200){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55200));
}));

com.rpl.specter.impl.fast_constantly = (function com$rpl$specter$impl$fast_constantly(v){
return (function() {
var G__58020 = null;
var G__58020__0 = (function (){
return v;
});
var G__58020__1 = (function (a1){
return v;
});
var G__58020__2 = (function (a1,a2){
return v;
});
var G__58020__3 = (function (a1,a2,a3){
return v;
});
var G__58020__4 = (function (a1,a2,a3,a4){
return v;
});
var G__58020__5 = (function (a1,a2,a3,a4,a5){
return v;
});
var G__58020__6 = (function (a1,a2,a3,a4,a5,a6){
return v;
});
var G__58020__7 = (function (a1,a2,a3,a4,a5,a6,a7){
return v;
});
var G__58020__8 = (function (a1,a2,a3,a4,a5,a6,a7,a8){
return v;
});
var G__58020__9 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9){
return v;
});
var G__58020__10 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
return v;
});
var G__58020__11 = (function() { 
var G__58021__delegate = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r){
return v;
};
var G__58021 = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = null;
if (arguments.length > 10) {
var G__58022__i = 0, G__58022__a = new Array(arguments.length -  10);
while (G__58022__i < G__58022__a.length) {G__58022__a[G__58022__i] = arguments[G__58022__i + 10]; ++G__58022__i;}
  r = new cljs.core.IndexedSeq(G__58022__a,0,null);
} 
return G__58021__delegate.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);};
G__58021.cljs$lang$maxFixedArity = 10;
G__58021.cljs$lang$applyTo = (function (arglist__58023){
var a1 = cljs.core.first(arglist__58023);
arglist__58023 = cljs.core.next(arglist__58023);
var a2 = cljs.core.first(arglist__58023);
arglist__58023 = cljs.core.next(arglist__58023);
var a3 = cljs.core.first(arglist__58023);
arglist__58023 = cljs.core.next(arglist__58023);
var a4 = cljs.core.first(arglist__58023);
arglist__58023 = cljs.core.next(arglist__58023);
var a5 = cljs.core.first(arglist__58023);
arglist__58023 = cljs.core.next(arglist__58023);
var a6 = cljs.core.first(arglist__58023);
arglist__58023 = cljs.core.next(arglist__58023);
var a7 = cljs.core.first(arglist__58023);
arglist__58023 = cljs.core.next(arglist__58023);
var a8 = cljs.core.first(arglist__58023);
arglist__58023 = cljs.core.next(arglist__58023);
var a9 = cljs.core.first(arglist__58023);
arglist__58023 = cljs.core.next(arglist__58023);
var a10 = cljs.core.first(arglist__58023);
var r = cljs.core.rest(arglist__58023);
return G__58021__delegate(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);
});
G__58021.cljs$core$IFn$_invoke$arity$variadic = G__58021__delegate;
return G__58021;
})()
;
G__58020 = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = var_args;
switch(arguments.length){
case 0:
return G__58020__0.call(this);
case 1:
return G__58020__1.call(this,a1);
case 2:
return G__58020__2.call(this,a1,a2);
case 3:
return G__58020__3.call(this,a1,a2,a3);
case 4:
return G__58020__4.call(this,a1,a2,a3,a4);
case 5:
return G__58020__5.call(this,a1,a2,a3,a4,a5);
case 6:
return G__58020__6.call(this,a1,a2,a3,a4,a5,a6);
case 7:
return G__58020__7.call(this,a1,a2,a3,a4,a5,a6,a7);
case 8:
return G__58020__8.call(this,a1,a2,a3,a4,a5,a6,a7,a8);
case 9:
return G__58020__9.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9);
case 10:
return G__58020__10.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
default:
var G__58024 = null;
if (arguments.length > 10) {
var G__58025__i = 0, G__58025__a = new Array(arguments.length -  10);
while (G__58025__i < G__58025__a.length) {G__58025__a[G__58025__i] = arguments[G__58025__i + 10]; ++G__58025__i;}
G__58024 = new cljs.core.IndexedSeq(G__58025__a,0,null);
}
return G__58020__11.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10, G__58024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__58020.cljs$lang$maxFixedArity = 10;
G__58020.cljs$lang$applyTo = G__58020__11.cljs$lang$applyTo;
G__58020.cljs$core$IFn$_invoke$arity$0 = G__58020__0;
G__58020.cljs$core$IFn$_invoke$arity$1 = G__58020__1;
G__58020.cljs$core$IFn$_invoke$arity$2 = G__58020__2;
G__58020.cljs$core$IFn$_invoke$arity$3 = G__58020__3;
G__58020.cljs$core$IFn$_invoke$arity$4 = G__58020__4;
G__58020.cljs$core$IFn$_invoke$arity$5 = G__58020__5;
G__58020.cljs$core$IFn$_invoke$arity$6 = G__58020__6;
G__58020.cljs$core$IFn$_invoke$arity$7 = G__58020__7;
G__58020.cljs$core$IFn$_invoke$arity$8 = G__58020__8;
G__58020.cljs$core$IFn$_invoke$arity$9 = G__58020__9;
G__58020.cljs$core$IFn$_invoke$arity$10 = G__58020__10;
G__58020.cljs$core$IFn$_invoke$arity$variadic = G__58020__11.cljs$core$IFn$_invoke$arity$variadic;
return G__58020;
})()
});
com.rpl.specter.impl.cljs_analyzer_macroexpand_1 = (function com$rpl$specter$impl$cljs_analyzer_macroexpand_1(){
return cljs.analyzer.macroexpand_1;
});
com.rpl.specter.impl.clj_macroexpand_all = (function com$rpl$specter$impl$clj_macroexpand_all(form){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("not implemented",cljs.core.PersistentArrayMap.EMPTY);
});
com.rpl.specter.impl.intern_STAR_ = (function com$rpl$specter$impl$intern_STAR_(ns,name,val){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("intern not supported in ClojureScript",cljs.core.PersistentArrayMap.EMPTY);
});
com.rpl.specter.impl.benchmark = (function com$rpl$specter$impl$benchmark(iters,afn){
var start__5606__auto__ = cljs.core.system_time();
var ret__5607__auto__ = (function (){var n__5593__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__5593__auto__)){
(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null, ));

var G__58026 = (_ + (1));
_ = G__58026;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Elapsed time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.system_time() - start__5606__auto__).toFixed((6)))," msecs"].join('')], 0));

return ret__5607__auto__;
});
com.rpl.specter.impl.exec_select_STAR_ = (function com$rpl$specter$impl$exec_select_STAR_(this$,vals,structure,next_fn){
return this$.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4(null, vals,structure,next_fn);
});
com.rpl.specter.impl.exec_transform_STAR_ = (function com$rpl$specter$impl$exec_transform_STAR_(this$,vals,structure,next_fn){
return this$.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4(null, vals,structure,next_fn);
});

/**
 * @interface
 */
com.rpl.specter.impl.PathComposer = function(){};

var com$rpl$specter$impl$PathComposer$do_comp_paths$dyn_58027 = (function (paths){
var x__5350__auto__ = (((paths == null))?null:paths);
var m__5351__auto__ = (com.rpl.specter.impl.do_comp_paths[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(paths) : m__5351__auto__.call(null, paths));
} else {
var m__5349__auto__ = (com.rpl.specter.impl.do_comp_paths["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(paths) : m__5349__auto__.call(null, paths));
} else {
throw cljs.core.missing_protocol("PathComposer.do-comp-paths",paths);
}
}
});
com.rpl.specter.impl.do_comp_paths = (function com$rpl$specter$impl$do_comp_paths(paths){
if((((!((paths == null)))) && ((!((paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1 == null)))))){
return paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1(paths);
} else {
return com$rpl$specter$impl$PathComposer$do_comp_paths$dyn_58027(paths);
}
});

com.rpl.specter.impl.rich_nav_QMARK_ = (function com$rpl$specter$impl$rich_nav_QMARK_(n){
if((!((n == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === n.com$rpl$specter$protocols$RichNavigator$)))){
return true;
} else {
if((!n.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,n);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,n);
}
});
com.rpl.specter.impl.comp_paths_STAR_ = (function com$rpl$specter$impl$comp_paths_STAR_(p){
if(com.rpl.specter.impl.rich_nav_QMARK_(p)){
return p;
} else {
return com.rpl.specter.impl.do_comp_paths(p);
}
});
com.rpl.specter.impl.coerce_object = (function com$rpl$specter$impl$coerce_object(this$){
if(com.rpl.specter.impl.rich_nav_QMARK_(this$)){
return this$;
} else {
if((((!((this$ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.com$rpl$specter$protocols$ImplicitNav$))))?true:(((!this$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.ImplicitNav,this$):false)):cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.ImplicitNav,this$))){
return com.rpl.specter.protocols.implicit_nav(this$);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not a navigator",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this","this",-611633625),this$,new cljs.core.Keyword(null,"type-str","type-str",567774262),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(this$)], 0))], null));

}
}
});

/**
 * @interface
 */
com.rpl.specter.impl.CoercePath = function(){};

var com$rpl$specter$impl$CoercePath$coerce_path$dyn_58028 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (com.rpl.specter.impl.coerce_path["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("CoercePath.coerce-path",this$);
}
}
});
com.rpl.specter.impl.coerce_path = (function com$rpl$specter$impl$coerce_path(this$){
if((((!((this$ == null)))) && ((!((this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 == null)))))){
return this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1(this$);
} else {
return com$rpl$specter$impl$CoercePath$coerce_path$dyn_58028(this$);
}
});

(com.rpl.specter.impl.CoercePath["null"] = true);

(com.rpl.specter.impl.coerce_path["null"] = (function (this$){
return com.rpl.specter.impl.coerce_object(this$);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.do_comp_paths(this$__$1);
}));

(cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
}));

(cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
}));

(cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
}));

(cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
}));

(cljs.core.Subvec.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,this$__$1));
}));

(com.rpl.specter.impl.CoercePath["_"] = true);

(com.rpl.specter.impl.coerce_path["_"] = (function (this$){
return com.rpl.specter.impl.coerce_object(this$);
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl55413 = (function (meta55414){
this.meta55414 = meta55414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl55413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55415,meta55414__$1){
var self__ = this;
var _55415__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl55413(meta55414__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl55413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55415){
var self__ = this;
var _55415__$1 = this;
return self__.meta55414;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl55413.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl55413.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null, vals,structure));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl55413.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null, vals,structure));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl55413.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55414","meta55414",746903891,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl55413.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl55413.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl55413");

(com.rpl.specter.impl.t_com$rpl$specter$impl55413.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl55413");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl55413.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl55413 = (function com$rpl$specter$impl$__GT_t_com$rpl$specter$impl55413(meta55414){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl55413(meta55414));
});


com.rpl.specter.impl.STAY_STAR_ = (new com.rpl.specter.impl.t_com$rpl$specter$impl55413(cljs.core.PersistentArrayMap.EMPTY));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl55451 = (function (nav1,nav2,meta55452){
this.nav1 = nav1;
this.nav2 = nav2;
this.meta55452 = meta55452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl55451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55453,meta55452__$1){
var self__ = this;
var _55453__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl55451(self__.nav1,self__.nav2,meta55452__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl55451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55453){
var self__ = this;
var _55453__$1 = this;
return self__.meta55452;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl55451.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl55451.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_(self__.nav1,vals,structure,(function (vals_next,structure_next){
return com.rpl.specter.impl.exec_select_STAR_(self__.nav2,vals_next,structure_next,next_fn);
}));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl55451.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_(self__.nav1,vals,structure,(function (vals_next,structure_next){
return com.rpl.specter.impl.exec_transform_STAR_(self__.nav2,vals_next,structure_next,next_fn);
}));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl55451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav1","nav1",-228471230,null),new cljs.core.Symbol(null,"nav2","nav2",2108276356,null),new cljs.core.Symbol(null,"meta55452","meta55452",1148848966,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl55451.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl55451.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl55451");

(com.rpl.specter.impl.t_com$rpl$specter$impl55451.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl55451");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl55451.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl55451 = (function com$rpl$specter$impl$__GT_t_com$rpl$specter$impl55451(nav1,nav2,meta55452){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl55451(nav1,nav2,meta55452));
});


com.rpl.specter.impl.combine_two_navs = (function com$rpl$specter$impl$combine_two_navs(nav1,nav2){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl55451(nav1,nav2,cljs.core.PersistentArrayMap.EMPTY));
});
(com.rpl.specter.impl.PathComposer["null"] = true);

(com.rpl.specter.impl.do_comp_paths["null"] = (function (o){
return com.rpl.specter.impl.coerce_path(o);
}));

(com.rpl.specter.impl.PathComposer["_"] = true);

(com.rpl.specter.impl.do_comp_paths["_"] = (function (o){
return com.rpl.specter.impl.coerce_path(o);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1 = (function (navigators){
var navigators__$1 = this;
var coerced = cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.coerce_path,navigators__$1);
if(cljs.core.empty_QMARK_(coerced)){
return com.rpl.specter.impl.STAY_STAR_;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(coerced))){
return cljs.core.first(coerced);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.combine_two_navs,coerced);

}
}
}));

/**
 * @interface
 */
com.rpl.specter.impl.PMutableCell = function(){};

var com$rpl$specter$impl$PMutableCell$set_cell$dyn_58030 = (function (cell,x){
var x__5350__auto__ = (((cell == null))?null:cell);
var m__5351__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(cell,x) : m__5351__auto__.call(null, cell,x));
} else {
var m__5349__auto__ = (com.rpl.specter.impl.set_cell["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(cell,x) : m__5349__auto__.call(null, cell,x));
} else {
throw cljs.core.missing_protocol("PMutableCell.set_cell",cell);
}
}
});
com.rpl.specter.impl.set_cell = (function com$rpl$specter$impl$set_cell(cell,x){
if((((!((cell == null)))) && ((!((cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 == null)))))){
return cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2(cell,x);
} else {
return com$rpl$specter$impl$PMutableCell$set_cell$dyn_58030(cell,x);
}
});


/**
* @constructor
 * @implements {com.rpl.specter.impl.PMutableCell}
*/
com.rpl.specter.impl.MutableCell = (function (q){
this.q = q;
});
(com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return (self__.q = x);
}));

(com.rpl.specter.impl.MutableCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
}));

(com.rpl.specter.impl.MutableCell.cljs$lang$type = true);

(com.rpl.specter.impl.MutableCell.cljs$lang$ctorStr = "com.rpl.specter.impl/MutableCell");

(com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter.impl/MutableCell");
}));

/**
 * Positional factory function for com.rpl.specter.impl/MutableCell.
 */
com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var G__55525 = arguments.length;
switch (G__55525) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
}));

(com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new com.rpl.specter.impl.MutableCell(init));
}));

(com.rpl.specter.impl.mutable_cell.cljs$lang$maxFixedArity = 1);

com.rpl.specter.impl.set_cell_BANG_ = (function com$rpl$specter$impl$set_cell_BANG_(cell,val){
return com.rpl.specter.impl.set_cell(cell,val);
});
com.rpl.specter.impl.get_cell = (function com$rpl$specter$impl$get_cell(cell){
return cell.q;
});
com.rpl.specter.impl.update_cell_BANG_ = (function com$rpl$specter$impl$update_cell_BANG_(cell,afn){
var ret = (function (){var G__55536 = com.rpl.specter.impl.get_cell(cell);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__55536) : afn.call(null, G__55536));
})();
com.rpl.specter.impl.set_cell_BANG_(cell,ret);

return ret;
});
com.rpl.specter.impl.compiled_traverse_with_vals_STAR_ = (function com$rpl$specter$impl$compiled_traverse_with_vals_STAR_(path,result_fn,vals,structure){
return com.rpl.specter.impl.exec_select_STAR_(path,vals,structure,(function (vals__$1,structure__$1){
if((vals__$1 === cljs.core.PersistentVector.EMPTY)){
return (result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(structure__$1) : result_fn.call(null, structure__$1));
} else {
var G__55546 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__$1,structure__$1);
return (result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(G__55546) : result_fn.call(null, G__55546));
}
}));
});
com.rpl.specter.impl.compiled_traverse_STAR_ = (function com$rpl$specter$impl$compiled_traverse_STAR_(path,result_fn,structure){
return com.rpl.specter.impl.compiled_traverse_with_vals_STAR_(path,result_fn,cljs.core.PersistentVector.EMPTY,structure);
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl55551 = (function (apath,structure,meta55552){
this.apath = apath;
this.structure = structure;
this.meta55552 = meta55552;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl55551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55553,meta55552__$1){
var self__ = this;
var _55553__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl55551(self__.apath,self__.structure,meta55552__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl55551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55553){
var self__ = this;
var _55553__$1 = this;
return self__.meta55552;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl55551.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null, afn,(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null, )));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl55551.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
var self__ = this;
var this$__$1 = this;
var cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(start);
com.rpl.specter.impl.compiled_traverse_STAR_(self__.apath,(function (elem){
var curr = com.rpl.specter.impl.get_cell(cell);
var newv = (afn.cljs$core$IFn$_invoke$arity$2 ? afn.cljs$core$IFn$_invoke$arity$2(curr,elem) : afn.call(null, curr,elem));
com.rpl.specter.impl.set_cell_BANG_(cell,newv);

return newv;
}),self__.structure);

return com.rpl.specter.impl.get_cell(cell);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl55551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null),new cljs.core.Symbol(null,"meta55552","meta55552",488845267,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl55551.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl55551.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl55551");

(com.rpl.specter.impl.t_com$rpl$specter$impl55551.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl55551");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl55551.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl55551 = (function com$rpl$specter$impl$__GT_t_com$rpl$specter$impl55551(apath,structure,meta55552){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl55551(apath,structure,meta55552));
});


com.rpl.specter.impl.do_compiled_traverse_STAR_ = (function com$rpl$specter$impl$do_compiled_traverse_STAR_(apath,structure){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl55551(apath,structure,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.call_reduce_interface = (function com$rpl$specter$impl$call_reduce_interface(traverser,afn,start){
return traverser.cljs$core$IReduce$_reduce$arity$3(null, afn,start);
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl55580 = (function (apath,structure,traverser,meta55581){
this.apath = apath;
this.structure = structure;
this.traverser = traverser;
this.meta55581 = meta55581;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl55580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55582,meta55581__$1){
var self__ = this;
var _55582__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl55580(self__.apath,self__.structure,self__.traverser,meta55581__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl55580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55582){
var self__ = this;
var _55582__$1 = this;
return self__.meta55581;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl55580.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null, afn,(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null, )));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl55580.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
var self__ = this;
var this$__$1 = this;
var res = com.rpl.specter.impl.call_reduce_interface(self__.traverser,afn,start);
return cljs.core.unreduced(res);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl55580.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null),new cljs.core.Symbol(null,"traverser","traverser",1631431381,null),new cljs.core.Symbol(null,"meta55581","meta55581",192699578,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl55580.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl55580.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl55580");

(com.rpl.specter.impl.t_com$rpl$specter$impl55580.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl55580");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl55580.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl55580 = (function com$rpl$specter$impl$__GT_t_com$rpl$specter$impl55580(apath,structure,traverser,meta55581){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl55580(apath,structure,traverser,meta55581));
});


com.rpl.specter.impl.do_compiled_traverse = (function com$rpl$specter$impl$do_compiled_traverse(apath,structure){
var traverser = com.rpl.specter.impl.do_compiled_traverse_STAR_(apath,structure);
return (new com.rpl.specter.impl.t_com$rpl$specter$impl55580(apath,structure,traverser,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.compiled_traverse_all_STAR_ = (function com$rpl$specter$impl$compiled_traverse_all_STAR_(path){
return (function (xf){
return (function() {
var G__58034 = null;
var G__58034__0 = (function (){
return (xf.cljs$core$IFn$_invoke$arity$0 ? xf.cljs$core$IFn$_invoke$arity$0() : xf.call(null, ));
});
var G__58034__1 = (function (result){
return (xf.cljs$core$IFn$_invoke$arity$1 ? xf.cljs$core$IFn$_invoke$arity$1(result) : xf.call(null, result));
});
var G__58034__2 = (function (result,input){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,i){
return (xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(r,i) : xf.call(null, r,i));
}),result,com.rpl.specter.impl.do_compiled_traverse_STAR_(path,input));
});
G__58034 = function(result,input){
switch(arguments.length){
case 0:
return G__58034__0.call(this);
case 1:
return G__58034__1.call(this,result);
case 2:
return G__58034__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__58034.cljs$core$IFn$_invoke$arity$0 = G__58034__0;
G__58034.cljs$core$IFn$_invoke$arity$1 = G__58034__1;
G__58034.cljs$core$IFn$_invoke$arity$2 = G__58034__2;
return G__58034;
})()
});
});
com.rpl.specter.impl.compiled_select_STAR_ = (function com$rpl$specter$impl$compiled_select_STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentVector.EMPTY));
var result_fn = (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
return com.rpl.specter.impl.set_cell_BANG_(res,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(curr,structure__$1));
});
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

return cljs.core.persistent_BANG_(com.rpl.specter.impl.get_cell(res));
});
com.rpl.specter.impl.compiled_select_one_STAR_ = (function com$rpl$specter$impl$compiled_select_one_STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var result_fn = (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
if((curr === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.set_cell_BANG_(res,structure__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("More than one element found in structure",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure__$1], null));
}
});
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

var ret = com.rpl.specter.impl.get_cell(res);
if((ret === com.rpl.specter.impl.NONE)){
return null;
} else {
return ret;
}
});
com.rpl.specter.impl.compiled_select_one_BANG__STAR_ = (function com$rpl$specter$impl$compiled_select_one_BANG__STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var result_fn = (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
if((curr === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.set_cell_BANG_(res,structure__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("More than one element found in structure",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure__$1], null));
}
});
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

var ret = com.rpl.specter.impl.get_cell(res);
if((com.rpl.specter.impl.NONE === ret)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Found no elements for select-one!",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));
} else {
}

return ret;
});
com.rpl.specter.impl.compiled_select_any_STAR_ = (function com$rpl$specter$impl$compiled_select_any_STAR_(var_args){
var G__55643 = arguments.length;
switch (G__55643) {
case 2:
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (path,structure){
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3(path,cljs.core.PersistentVector.EMPTY,structure);
}));

(com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (path,vals,structure){
return cljs.core.unreduced(com.rpl.specter.impl.compiled_traverse_with_vals_STAR_(path,cljs.core.reduced,vals,structure));
}));

(com.rpl.specter.impl.compiled_select_any_STAR_.cljs$lang$maxFixedArity = 3);

com.rpl.specter.impl.compiled_select_first_STAR_ = (function com$rpl$specter$impl$compiled_select_first_STAR_(path,structure){
var ret = com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2(path,structure);
if((ret === com.rpl.specter.impl.NONE)){
return null;
} else {
return ret;
}
});
com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_ = (function com$rpl$specter$impl$compiled_selected_any_QMARK__STAR_(path,structure){
return (!((com.rpl.specter.impl.NONE === com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2(path,structure))));
});
com.rpl.specter.impl.terminal_STAR_ = (function com$rpl$specter$impl$terminal_STAR_(afn,vals,structure){
if((vals === cljs.core.PersistentVector.EMPTY)){
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null, structure));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(afn,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals,structure));
}
});
com.rpl.specter.impl.compiled_transform_STAR_ = (function com$rpl$specter$impl$compiled_transform_STAR_(nav,transform_fn,structure){
return com.rpl.specter.impl.exec_transform_STAR_(nav,cljs.core.PersistentVector.EMPTY,structure,(function (vals,structure__$1){
return com.rpl.specter.impl.terminal_STAR_(transform_fn,vals,structure__$1);
}));
});
com.rpl.specter.impl.compiled_vtransform_STAR_ = (function com$rpl$specter$impl$compiled_vtransform_STAR_(nav,transform_fn,structure){
return com.rpl.specter.impl.exec_transform_STAR_(nav,cljs.core.PersistentVector.EMPTY,structure,transform_fn);
});
com.rpl.specter.impl.fn_invocation_QMARK_ = (function com$rpl$specter$impl$fn_invocation_QMARK_(f){
return (((f instanceof cljs.core.LazySeq)) || (cljs.core.list_QMARK_(f)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LocalSym = (function (val,sym,__meta,__extmap,__hash){
this.val = val;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k55665,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__55677 = k55665;
var G__55677__$1 = (((G__55677 instanceof cljs.core.Keyword))?G__55677.fqn:null);
switch (G__55677__$1) {
case "val":
return self__.val;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55665,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__55681){
var vec__55683 = p__55681;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55683,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55683,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LocalSym{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55664){
var self__ = this;
var G__55664__$1 = this;
return (new cljs.core.RecordIter((0),G__55664__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1023826277 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55666,other55667){
var self__ = this;
var this55666__$1 = this;
return (((!((other55667 == null)))) && ((((this55666__$1.constructor === other55667.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55666__$1.val,other55667.val)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55666__$1.sym,other55667.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55666__$1.__extmap,other55667.__extmap)))))))));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k55665){
var self__ = this;
var this__5307__auto____$1 = this;
var G__55736 = k55665;
var G__55736__$1 = (((G__55736 instanceof cljs.core.Keyword))?G__55736.fqn:null);
switch (G__55736__$1) {
case "val":
case "sym":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k55665);

}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__55664){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__55745 = cljs.core.keyword_identical_QMARK_;
var expr__55746 = k__5309__auto__;
if(cljs.core.truth_((pred__55745.cljs$core$IFn$_invoke$arity$2 ? pred__55745.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val","val",128701612),expr__55746) : pred__55745.call(null, new cljs.core.Keyword(null,"val","val",128701612),expr__55746)))){
return (new com.rpl.specter.impl.LocalSym(G__55664,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55745.cljs$core$IFn$_invoke$arity$2 ? pred__55745.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__55746) : pred__55745.call(null, new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__55746)))){
return (new com.rpl.specter.impl.LocalSym(self__.val,G__55664,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__55664),null));
}
}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__55664){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,G__55664,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LocalSym.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
}));

(com.rpl.specter.impl.LocalSym.cljs$lang$type = true);

(com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LocalSym",null,(1),null));
}));

(com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LocalSym");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LocalSym.
 */
com.rpl.specter.impl.__GT_LocalSym = (function com$rpl$specter$impl$__GT_LocalSym(val,sym){
return (new com.rpl.specter.impl.LocalSym(val,sym,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LocalSym, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LocalSym = (function com$rpl$specter$impl$map__GT_LocalSym(G__55671){
var extmap__5342__auto__ = (function (){var G__55771 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__55671,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sym","sym",-1444860305)], 0));
if(cljs.core.record_QMARK_(G__55671)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55771);
} else {
return G__55771;
}
})();
return (new com.rpl.specter.impl.LocalSym(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__55671),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__55671),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.VarUse = (function (val,avar,sym,__meta,__extmap,__hash){
this.val = val;
this.avar = avar;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k55779,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__55787 = k55779;
var G__55787__$1 = (((G__55787 instanceof cljs.core.Keyword))?G__55787.fqn:null);
switch (G__55787__$1) {
case "val":
return self__.val;

break;
case "avar":
return self__.avar;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55779,else__5303__auto__);

}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__55790){
var vec__55791 = p__55790;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55791,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55791,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.VarUse{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avar","avar",1316861611),self__.avar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55778){
var self__ = this;
var G__55778__$1 = this;
return (new cljs.core.RecordIter((0),G__55778__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"avar","avar",1316861611),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1211237282 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55780,other55781){
var self__ = this;
var this55780__$1 = this;
return (((!((other55781 == null)))) && ((((this55780__$1.constructor === other55781.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55780__$1.val,other55781.val)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55780__$1.avar,other55781.avar)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55780__$1.sym,other55781.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55780__$1.__extmap,other55781.__extmap)))))))))));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"avar","avar",1316861611),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k55779){
var self__ = this;
var this__5307__auto____$1 = this;
var G__55822 = k55779;
var G__55822__$1 = (((G__55822 instanceof cljs.core.Keyword))?G__55822.fqn:null);
switch (G__55822__$1) {
case "val":
case "avar":
case "sym":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k55779);

}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__55778){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__55824 = cljs.core.keyword_identical_QMARK_;
var expr__55825 = k__5309__auto__;
if(cljs.core.truth_((pred__55824.cljs$core$IFn$_invoke$arity$2 ? pred__55824.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val","val",128701612),expr__55825) : pred__55824.call(null, new cljs.core.Keyword(null,"val","val",128701612),expr__55825)))){
return (new com.rpl.specter.impl.VarUse(G__55778,self__.avar,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55824.cljs$core$IFn$_invoke$arity$2 ? pred__55824.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"avar","avar",1316861611),expr__55825) : pred__55824.call(null, new cljs.core.Keyword(null,"avar","avar",1316861611),expr__55825)))){
return (new com.rpl.specter.impl.VarUse(self__.val,G__55778,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55824.cljs$core$IFn$_invoke$arity$2 ? pred__55824.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__55825) : pred__55824.call(null, new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__55825)))){
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,G__55778,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__55778),null));
}
}
}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"avar","avar",1316861611),self__.avar,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__55778){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,G__55778,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.VarUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"avar","avar",-1337574158,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
}));

(com.rpl.specter.impl.VarUse.cljs$lang$type = true);

(com.rpl.specter.impl.VarUse.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/VarUse",null,(1),null));
}));

(com.rpl.specter.impl.VarUse.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/VarUse");
}));

/**
 * Positional factory function for com.rpl.specter.impl/VarUse.
 */
com.rpl.specter.impl.__GT_VarUse = (function com$rpl$specter$impl$__GT_VarUse(val,avar,sym){
return (new com.rpl.specter.impl.VarUse(val,avar,sym,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/VarUse, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_VarUse = (function com$rpl$specter$impl$map__GT_VarUse(G__55782){
var extmap__5342__auto__ = (function (){var G__55829 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__55782,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"avar","avar",1316861611),new cljs.core.Keyword(null,"sym","sym",-1444860305)], 0));
if(cljs.core.record_QMARK_(G__55782)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55829);
} else {
return G__55829;
}
})();
return (new com.rpl.specter.impl.VarUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__55782),new cljs.core.Keyword(null,"avar","avar",1316861611).cljs$core$IFn$_invoke$arity$1(G__55782),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__55782),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.SpecialFormUse = (function (val,code,__meta,__extmap,__hash){
this.val = val;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k55831,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__55847 = k55831;
var G__55847__$1 = (((G__55847 instanceof cljs.core.Keyword))?G__55847.fqn:null);
switch (G__55847__$1) {
case "val":
return self__.val;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55831,else__5303__auto__);

}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__55856){
var vec__55859 = p__55856;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55859,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55859,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.SpecialFormUse{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55830){
var self__ = this;
var G__55830__$1 = this;
return (new cljs.core.RecordIter((0),G__55830__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1595666739 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55832,other55833){
var self__ = this;
var this55832__$1 = this;
return (((!((other55833 == null)))) && ((((this55832__$1.constructor === other55833.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55832__$1.val,other55833.val)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55832__$1.code,other55833.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55832__$1.__extmap,other55833.__extmap)))))))));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k55831){
var self__ = this;
var this__5307__auto____$1 = this;
var G__55879 = k55831;
var G__55879__$1 = (((G__55879 instanceof cljs.core.Keyword))?G__55879.fqn:null);
switch (G__55879__$1) {
case "val":
case "code":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k55831);

}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__55830){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__55883 = cljs.core.keyword_identical_QMARK_;
var expr__55884 = k__5309__auto__;
if(cljs.core.truth_((pred__55883.cljs$core$IFn$_invoke$arity$2 ? pred__55883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val","val",128701612),expr__55884) : pred__55883.call(null, new cljs.core.Keyword(null,"val","val",128701612),expr__55884)))){
return (new com.rpl.specter.impl.SpecialFormUse(G__55830,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55883.cljs$core$IFn$_invoke$arity$2 ? pred__55883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),expr__55884) : pred__55883.call(null, new cljs.core.Keyword(null,"code","code",1586293142),expr__55884)))){
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,G__55830,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__55830),null));
}
}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__55830){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,G__55830,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.SpecialFormUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
}));

(com.rpl.specter.impl.SpecialFormUse.cljs$lang$type = true);

(com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/SpecialFormUse",null,(1),null));
}));

(com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/SpecialFormUse");
}));

/**
 * Positional factory function for com.rpl.specter.impl/SpecialFormUse.
 */
com.rpl.specter.impl.__GT_SpecialFormUse = (function com$rpl$specter$impl$__GT_SpecialFormUse(val,code){
return (new com.rpl.specter.impl.SpecialFormUse(val,code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/SpecialFormUse, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_SpecialFormUse = (function com$rpl$specter$impl$map__GT_SpecialFormUse(G__55835){
var extmap__5342__auto__ = (function (){var G__55902 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__55835,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"code","code",1586293142)], 0));
if(cljs.core.record_QMARK_(G__55835)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55902);
} else {
return G__55902;
}
})();
return (new com.rpl.specter.impl.SpecialFormUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__55835),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__55835),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.FnInvocation = (function (op,params,code,__meta,__extmap,__hash){
this.op = op;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k55905,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__55917 = k55905;
var G__55917__$1 = (((G__55917 instanceof cljs.core.Keyword))?G__55917.fqn:null);
switch (G__55917__$1) {
case "op":
return self__.op;

break;
case "params":
return self__.params;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55905,else__5303__auto__);

}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__55923){
var vec__55924 = p__55923;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55924,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55924,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.FnInvocation{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55904){
var self__ = this;
var G__55904__$1 = this;
return (new cljs.core.RecordIter((0),G__55904__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-350872877 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55906,other55907){
var self__ = this;
var this55906__$1 = this;
return (((!((other55907 == null)))) && ((((this55906__$1.constructor === other55907.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55906__$1.op,other55907.op)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55906__$1.params,other55907.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55906__$1.code,other55907.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55906__$1.__extmap,other55907.__extmap)))))))))));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k55905){
var self__ = this;
var this__5307__auto____$1 = this;
var G__55948 = k55905;
var G__55948__$1 = (((G__55948 instanceof cljs.core.Keyword))?G__55948.fqn:null);
switch (G__55948__$1) {
case "op":
case "params":
case "code":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k55905);

}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__55904){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__55950 = cljs.core.keyword_identical_QMARK_;
var expr__55951 = k__5309__auto__;
if(cljs.core.truth_((pred__55950.cljs$core$IFn$_invoke$arity$2 ? pred__55950.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955),expr__55951) : pred__55950.call(null, new cljs.core.Keyword(null,"op","op",-1882987955),expr__55951)))){
return (new com.rpl.specter.impl.FnInvocation(G__55904,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55950.cljs$core$IFn$_invoke$arity$2 ? pred__55950.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__55951) : pred__55950.call(null, new cljs.core.Keyword(null,"params","params",710516235),expr__55951)))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,G__55904,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55950.cljs$core$IFn$_invoke$arity$2 ? pred__55950.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),expr__55951) : pred__55950.call(null, new cljs.core.Keyword(null,"code","code",1586293142),expr__55951)))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,G__55904,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__55904),null));
}
}
}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"op","op",-1882987955),self__.op,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__55904){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,G__55904,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.FnInvocation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
}));

(com.rpl.specter.impl.FnInvocation.cljs$lang$type = true);

(com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/FnInvocation",null,(1),null));
}));

(com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/FnInvocation");
}));

/**
 * Positional factory function for com.rpl.specter.impl/FnInvocation.
 */
com.rpl.specter.impl.__GT_FnInvocation = (function com$rpl$specter$impl$__GT_FnInvocation(op,params,code){
return (new com.rpl.specter.impl.FnInvocation(op,params,code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/FnInvocation, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_FnInvocation = (function com$rpl$specter$impl$map__GT_FnInvocation(G__55910){
var extmap__5342__auto__ = (function (){var G__55971 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__55910,new cljs.core.Keyword(null,"op","op",-1882987955),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], 0));
if(cljs.core.record_QMARK_(G__55910)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55971);
} else {
return G__55971;
}
})();
return (new com.rpl.specter.impl.FnInvocation(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__55910),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__55910),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__55910),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.DynamicVal = (function (code,__meta,__extmap,__hash){
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k55975,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__55993 = k55975;
var G__55993__$1 = (((G__55993 instanceof cljs.core.Keyword))?G__55993.fqn:null);
switch (G__55993__$1) {
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55975,else__5303__auto__);

}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__55996){
var vec__55997 = p__55996;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55997,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55997,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.DynamicVal{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55974){
var self__ = this;
var G__55974__$1 = this;
return (new cljs.core.RecordIter((0),G__55974__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (531988365 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55976,other55977){
var self__ = this;
var this55976__$1 = this;
return (((!((other55977 == null)))) && ((((this55976__$1.constructor === other55977.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55976__$1.code,other55977.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55976__$1.__extmap,other55977.__extmap)))))));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k55975){
var self__ = this;
var this__5307__auto____$1 = this;
var G__56010 = k55975;
var G__56010__$1 = (((G__56010 instanceof cljs.core.Keyword))?G__56010.fqn:null);
switch (G__56010__$1) {
case "code":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k55975);

}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__55974){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__56014 = cljs.core.keyword_identical_QMARK_;
var expr__56015 = k__5309__auto__;
if(cljs.core.truth_((pred__56014.cljs$core$IFn$_invoke$arity$2 ? pred__56014.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),expr__56015) : pred__56014.call(null, new cljs.core.Keyword(null,"code","code",1586293142),expr__56015)))){
return (new com.rpl.specter.impl.DynamicVal(G__55974,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__55974),null));
}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__55974){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,G__55974,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.DynamicVal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
}));

(com.rpl.specter.impl.DynamicVal.cljs$lang$type = true);

(com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicVal",null,(1),null));
}));

(com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/DynamicVal");
}));

/**
 * Positional factory function for com.rpl.specter.impl/DynamicVal.
 */
com.rpl.specter.impl.__GT_DynamicVal = (function com$rpl$specter$impl$__GT_DynamicVal(code){
return (new com.rpl.specter.impl.DynamicVal(code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/DynamicVal, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_DynamicVal = (function com$rpl$specter$impl$map__GT_DynamicVal(G__55979){
var extmap__5342__auto__ = (function (){var G__56032 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55979,new cljs.core.Keyword(null,"code","code",1586293142));
if(cljs.core.record_QMARK_(G__55979)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56032);
} else {
return G__56032;
}
})();
return (new com.rpl.specter.impl.DynamicVal(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__55979),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.DynamicPath = (function (path,__meta,__extmap,__hash){
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k56034,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__56042 = k56034;
var G__56042__$1 = (((G__56042 instanceof cljs.core.Keyword))?G__56042.fqn:null);
switch (G__56042__$1) {
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56034,else__5303__auto__);

}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__56052){
var vec__56054 = p__56052;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56054,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56054,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.DynamicPath{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56033){
var self__ = this;
var G__56033__$1 = this;
return (new cljs.core.RecordIter((0),G__56033__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (297748926 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56035,other56036){
var self__ = this;
var this56035__$1 = this;
return (((!((other56036 == null)))) && ((((this56035__$1.constructor === other56036.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56035__$1.path,other56036.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56035__$1.__extmap,other56036.__extmap)))))));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k56034){
var self__ = this;
var this__5307__auto____$1 = this;
var G__56073 = k56034;
var G__56073__$1 = (((G__56073 instanceof cljs.core.Keyword))?G__56073.fqn:null);
switch (G__56073__$1) {
case "path":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k56034);

}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__56033){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__56076 = cljs.core.keyword_identical_QMARK_;
var expr__56077 = k__5309__auto__;
if(cljs.core.truth_((pred__56076.cljs$core$IFn$_invoke$arity$2 ? pred__56076.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),expr__56077) : pred__56076.call(null, new cljs.core.Keyword(null,"path","path",-188191168),expr__56077)))){
return (new com.rpl.specter.impl.DynamicPath(G__56033,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__56033),null));
}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__56033){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,G__56033,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.DynamicPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
}));

(com.rpl.specter.impl.DynamicPath.cljs$lang$type = true);

(com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicPath",null,(1),null));
}));

(com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/DynamicPath");
}));

/**
 * Positional factory function for com.rpl.specter.impl/DynamicPath.
 */
com.rpl.specter.impl.__GT_DynamicPath = (function com$rpl$specter$impl$__GT_DynamicPath(path){
return (new com.rpl.specter.impl.DynamicPath(path,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/DynamicPath, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_DynamicPath = (function com$rpl$specter$impl$map__GT_DynamicPath(G__56039){
var extmap__5342__auto__ = (function (){var G__56094 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56039,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.record_QMARK_(G__56039)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56094);
} else {
return G__56094;
}
})();
return (new com.rpl.specter.impl.DynamicPath(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__56039),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.DynamicFunction = (function (op,params,code,__meta,__extmap,__hash){
this.op = op;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k56100,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__56108 = k56100;
var G__56108__$1 = (((G__56108 instanceof cljs.core.Keyword))?G__56108.fqn:null);
switch (G__56108__$1) {
case "op":
return self__.op;

break;
case "params":
return self__.params;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56100,else__5303__auto__);

}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__56109){
var vec__56110 = p__56109;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56110,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56110,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.DynamicFunction{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56099){
var self__ = this;
var G__56099__$1 = this;
return (new cljs.core.RecordIter((0),G__56099__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1045900877 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56101,other56102){
var self__ = this;
var this56101__$1 = this;
return (((!((other56102 == null)))) && ((((this56101__$1.constructor === other56102.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56101__$1.op,other56102.op)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56101__$1.params,other56102.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56101__$1.code,other56102.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56101__$1.__extmap,other56102.__extmap)))))))))));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k56100){
var self__ = this;
var this__5307__auto____$1 = this;
var G__56132 = k56100;
var G__56132__$1 = (((G__56132 instanceof cljs.core.Keyword))?G__56132.fqn:null);
switch (G__56132__$1) {
case "op":
case "params":
case "code":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k56100);

}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__56099){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__56133 = cljs.core.keyword_identical_QMARK_;
var expr__56134 = k__5309__auto__;
if(cljs.core.truth_((pred__56133.cljs$core$IFn$_invoke$arity$2 ? pred__56133.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955),expr__56134) : pred__56133.call(null, new cljs.core.Keyword(null,"op","op",-1882987955),expr__56134)))){
return (new com.rpl.specter.impl.DynamicFunction(G__56099,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56133.cljs$core$IFn$_invoke$arity$2 ? pred__56133.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__56134) : pred__56133.call(null, new cljs.core.Keyword(null,"params","params",710516235),expr__56134)))){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,G__56099,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56133.cljs$core$IFn$_invoke$arity$2 ? pred__56133.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),expr__56134) : pred__56133.call(null, new cljs.core.Keyword(null,"code","code",1586293142),expr__56134)))){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,G__56099,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__56099),null));
}
}
}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"op","op",-1882987955),self__.op,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__56099){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,G__56099,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.DynamicFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
}));

(com.rpl.specter.impl.DynamicFunction.cljs$lang$type = true);

(com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicFunction",null,(1),null));
}));

(com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/DynamicFunction");
}));

/**
 * Positional factory function for com.rpl.specter.impl/DynamicFunction.
 */
com.rpl.specter.impl.__GT_DynamicFunction = (function com$rpl$specter$impl$__GT_DynamicFunction(op,params,code){
return (new com.rpl.specter.impl.DynamicFunction(op,params,code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/DynamicFunction, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_DynamicFunction = (function com$rpl$specter$impl$map__GT_DynamicFunction(G__56103){
var extmap__5342__auto__ = (function (){var G__56139 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56103,new cljs.core.Keyword(null,"op","op",-1882987955),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], 0));
if(cljs.core.record_QMARK_(G__56103)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56139);
} else {
return G__56139;
}
})();
return (new com.rpl.specter.impl.DynamicFunction(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__56103),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__56103),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__56103),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

com.rpl.specter.impl.dynamic_param_QMARK_ = (function com$rpl$specter$impl$dynamic_param_QMARK_(o){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([com.rpl.specter.impl.DynamicPath,com.rpl.specter.impl.DynamicFunction,com.rpl.specter.impl.DynamicVal]),cljs.core.type(o));
});
com.rpl.specter.impl.static_path_QMARK_ = (function com$rpl$specter$impl$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.impl.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_(path)));
}
});
com.rpl.specter.impl.late_path = (function com$rpl$specter$impl$late_path(path){
if(com.rpl.specter.impl.static_path_QMARK_(path)){
return com.rpl.specter.impl.comp_paths_STAR_(path);
} else {
return com.rpl.specter.impl.__GT_DynamicPath(path);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.CachedPathInfo = (function (dynamic_QMARK_,precompiled,__meta,__extmap,__hash){
this.dynamic_QMARK_ = dynamic_QMARK_;
this.precompiled = precompiled;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k56147,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__56162 = k56147;
var G__56162__$1 = (((G__56162 instanceof cljs.core.Keyword))?G__56162.fqn:null);
switch (G__56162__$1) {
case "dynamic?":
return self__.dynamic_QMARK_;

break;
case "precompiled":
return self__.precompiled;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56147,else__5303__auto__);

}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__56176){
var vec__56177 = p__56176;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56177,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56177,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.CachedPathInfo{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),self__.dynamic_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56146){
var self__ = this;
var G__56146__$1 = this;
return (new cljs.core.RecordIter((0),G__56146__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (626511117 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56148,other56149){
var self__ = this;
var this56148__$1 = this;
return (((!((other56149 == null)))) && ((((this56148__$1.constructor === other56149.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56148__$1.dynamic_QMARK_,other56149.dynamic_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56148__$1.precompiled,other56149.precompiled)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56148__$1.__extmap,other56149.__extmap)))))))));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k56147){
var self__ = this;
var this__5307__auto____$1 = this;
var G__56233 = k56147;
var G__56233__$1 = (((G__56233 instanceof cljs.core.Keyword))?G__56233.fqn:null);
switch (G__56233__$1) {
case "dynamic?":
case "precompiled":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k56147);

}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__56146){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__56246 = cljs.core.keyword_identical_QMARK_;
var expr__56247 = k__5309__auto__;
if(cljs.core.truth_((pred__56246.cljs$core$IFn$_invoke$arity$2 ? pred__56246.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),expr__56247) : pred__56246.call(null, new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),expr__56247)))){
return (new com.rpl.specter.impl.CachedPathInfo(G__56146,self__.precompiled,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56246.cljs$core$IFn$_invoke$arity$2 ? pred__56246.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),expr__56247) : pred__56246.call(null, new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),expr__56247)))){
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,G__56146,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__56146),null));
}
}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),self__.dynamic_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__56146){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,G__56146,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.CachedPathInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dynamic?","dynamic?",-1973843346,null),new cljs.core.Symbol(null,"precompiled","precompiled",-42622082,null)], null);
}));

(com.rpl.specter.impl.CachedPathInfo.cljs$lang$type = true);

(com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/CachedPathInfo",null,(1),null));
}));

(com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/CachedPathInfo");
}));

/**
 * Positional factory function for com.rpl.specter.impl/CachedPathInfo.
 */
com.rpl.specter.impl.__GT_CachedPathInfo = (function com$rpl$specter$impl$__GT_CachedPathInfo(dynamic_QMARK_,precompiled){
return (new com.rpl.specter.impl.CachedPathInfo(dynamic_QMARK_,precompiled,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/CachedPathInfo, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_CachedPathInfo = (function com$rpl$specter$impl$map__GT_CachedPathInfo(G__56154){
var extmap__5342__auto__ = (function (){var G__56271 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56154,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609)], 0));
if(cljs.core.record_QMARK_(G__56154)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56271);
} else {
return G__56271;
}
})();
return (new com.rpl.specter.impl.CachedPathInfo(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423).cljs$core$IFn$_invoke$arity$1(G__56154),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609).cljs$core$IFn$_invoke$arity$1(G__56154),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

com.rpl.specter.impl.cached_path_info_precompiled = (function com$rpl$specter$impl$cached_path_info_precompiled(c){
return c.precompiled;
});
com.rpl.specter.impl.cached_path_info_dynamic_QMARK_ = (function com$rpl$specter$impl$cached_path_info_dynamic_QMARK_(c){
return c.dynamic_QMARK_;
});
com.rpl.specter.impl.filter_select = (function com$rpl$specter$impl$filter_select(afn,vals,structure,next_fn){
if(cljs.core.truth_((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null, structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null, vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});
com.rpl.specter.impl.filter_transform = (function com$rpl$specter$impl$filter_transform(afn,vals,structure,next_fn){
if(cljs.core.truth_((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null, structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null, vals,structure));
} else {
return structure;
}
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl56288 = (function (afn,meta56289){
this.afn = afn;
this.meta56289 = meta56289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl56288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56290,meta56289__$1){
var self__ = this;
var _56290__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl56288(self__.afn,meta56289__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl56288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56290){
var self__ = this;
var _56290__$1 = this;
return self__.meta56289;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl56288.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl56288.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null, structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null, vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl56288.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null, structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null, vals,structure));
} else {
return structure;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl56288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta56289","meta56289",-412353936,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl56288.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl56288.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl56288");

(com.rpl.specter.impl.t_com$rpl$specter$impl56288.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl56288");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl56288.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl56288 = (function com$rpl$specter$impl$__GT_t_com$rpl$specter$impl56288(afn,meta56289){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl56288(afn,meta56289));
});


com.rpl.specter.impl.pred_STAR_ = (function com$rpl$specter$impl$pred_STAR_(afn){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl56288(afn,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl56315 = (function (afn,meta56316){
this.afn = afn;
this.meta56316 = meta56316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl56315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56317,meta56316__$1){
var self__ = this;
var _56317__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl56315(self__.afn,meta56316__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl56315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56317){
var self__ = this;
var _56317__$1 = this;
return self__.meta56316;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl56315.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl56315.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(vals) : self__.afn.call(null, vals)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null, vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl56315.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(vals) : self__.afn.call(null, vals)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null, vals,structure));
} else {
return structure;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl56315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta56316","meta56316",-707523994,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl56315.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl56315.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl56315");

(com.rpl.specter.impl.t_com$rpl$specter$impl56315.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl56315");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl56315.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl56315 = (function com$rpl$specter$impl$__GT_t_com$rpl$specter$impl56315(afn,meta56316){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl56315(afn,meta56316));
});


com.rpl.specter.impl.collected_QMARK__STAR_ = (function com$rpl$specter$impl$collected_QMARK__STAR_(afn){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl56315(afn,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl56355 = (function (cell,meta56356){
this.cell = cell;
this.meta56356 = meta56356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl56355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56357,meta56356__$1){
var self__ = this;
var _56357__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl56355(self__.cell,meta56356__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl56355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56357){
var self__ = this;
var _56357__$1 = this;
return self__.meta56356;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl56355.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl56355.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_(com.rpl.specter.impl.get_cell(self__.cell),vals,structure,next_fn);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl56355.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_(com.rpl.specter.impl.get_cell(self__.cell),vals,structure,next_fn);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl56355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cell","cell",-1890190685,null),new cljs.core.Symbol(null,"meta56356","meta56356",-441701948,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl56355.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl56355.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl56355");

(com.rpl.specter.impl.t_com$rpl$specter$impl56355.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl56355");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl56355.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl56355 = (function com$rpl$specter$impl$__GT_t_com$rpl$specter$impl56355(cell,meta56356){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl56355(cell,meta56356));
});


com.rpl.specter.impl.cell_nav = (function com$rpl$specter$impl$cell_nav(cell){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl56355(cell,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.local_declarepath = (function com$rpl$specter$impl$local_declarepath(){
var cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.impl.cell_nav(cell),cljs.core.assoc,new cljs.core.Keyword("com.rpl.specter.impl","cell","com.rpl.specter.impl/cell",223913671),cell);
});
com.rpl.specter.impl.providepath_STAR_ = (function com$rpl$specter$impl$providepath_STAR_(declared,compiled_path){
var cell = new cljs.core.Keyword("com.rpl.specter.impl","cell","com.rpl.specter.impl/cell",223913671).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declared));
return com.rpl.specter.impl.set_cell_BANG_(cell,compiled_path);
});
com.rpl.specter.impl.gensyms = (function com$rpl$specter$impl$gensyms(amt){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(amt,cljs.core.gensym));
});
com.rpl.specter.impl.comp_navs = (function com$rpl$specter$impl$comp_navs(var_args){
var G__56589 = arguments.length;
switch (G__56589) {
case 0:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 9:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case 12:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
case 13:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]));

break;
case 14:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case 15:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]));

break;
case 16:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
case 17:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]));

break;
case 18:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]));

break;
case 19:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___58289 = arguments.length;
var i__5727__auto___58290 = (0);
while(true){
if((i__5727__auto___58290 < len__5726__auto___58289)){
args_arr__5751__auto__.push((arguments[i__5727__auto___58290]));

var G__58291 = (i__5727__auto___58290 + (1));
i__5727__auto___58290 = G__58291;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((19) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((19)),(0),null)):null);
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),argseq__5752__auto__);

}
});

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.STAY_STAR_;
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1 = (function (nav1__14613__auto__){
return nav1__14613__auto__;
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2 = (function (nav1__14613__auto__,nav2__14614__auto__){
return com.rpl.specter.impl.combine_two_navs(nav1__14613__auto__,nav2__14614__auto__);
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3 = (function (G__56379,G__56380,G__56381){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__56379,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__56380,G__56381));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4 = (function (G__56382,G__56383,G__56384,G__56385){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__56382,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3(G__56383,G__56384,G__56385));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5 = (function (G__56386,G__56387,G__56388,G__56389,G__56390){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__56386,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4(G__56387,G__56388,G__56389,G__56390));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6 = (function (G__56391,G__56392,G__56393,G__56394,G__56395,G__56396){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__56391,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5(G__56392,G__56393,G__56394,G__56395,G__56396));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7 = (function (G__56397,G__56398,G__56399,G__56400,G__56401,G__56402,G__56403){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__56397,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6(G__56398,G__56399,G__56400,G__56401,G__56402,G__56403));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8 = (function (G__56404,G__56405,G__56406,G__56407,G__56408,G__56409,G__56410,G__56411){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__56404,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7(G__56405,G__56406,G__56407,G__56408,G__56409,G__56410,G__56411));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9 = (function (G__56412,G__56413,G__56414,G__56415,G__56416,G__56417,G__56418,G__56419,G__56420){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__56412,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8(G__56413,G__56414,G__56415,G__56416,G__56417,G__56418,G__56419,G__56420));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10 = (function (G__56421,G__56422,G__56423,G__56424,G__56425,G__56426,G__56427,G__56428,G__56429,G__56430){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__56421,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9(G__56422,G__56423,G__56424,G__56425,G__56426,G__56427,G__56428,G__56429,G__56430));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11 = (function (G__56431,G__56432,G__56433,G__56434,G__56435,G__56436,G__56437,G__56438,G__56439,G__56440,G__56441){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__56431,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10(G__56432,G__56433,G__56434,G__56435,G__56436,G__56437,G__56438,G__56439,G__56440,G__56441));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12 = (function (G__56442,G__56443,G__56444,G__56445,G__56446,G__56447,G__56448,G__56449,G__56450,G__56451,G__56452,G__56453){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__56442,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11(G__56443,G__56444,G__56445,G__56446,G__56447,G__56448,G__56449,G__56450,G__56451,G__56452,G__56453));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13 = (function (G__56454,G__56455,G__56456,G__56457,G__56458,G__56459,G__56460,G__56461,G__56462,G__56463,G__56464,G__56465,G__56466){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__56454,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12(G__56455,G__56456,G__56457,G__56458,G__56459,G__56460,G__56461,G__56462,G__56463,G__56464,G__56465,G__56466));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14 = (function (G__56467,G__56468,G__56469,G__56470,G__56471,G__56472,G__56473,G__56474,G__56475,G__56476,G__56477,G__56478,G__56479,G__56480){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__56467,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13(G__56468,G__56469,G__56470,G__56471,G__56472,G__56473,G__56474,G__56475,G__56476,G__56477,G__56478,G__56479,G__56480));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15 = (function (G__56481,G__56482,G__56483,G__56484,G__56485,G__56486,G__56487,G__56488,G__56489,G__56490,G__56491,G__56492,G__56493,G__56494,G__56495){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__56481,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14(G__56482,G__56483,G__56484,G__56485,G__56486,G__56487,G__56488,G__56489,G__56490,G__56491,G__56492,G__56493,G__56494,G__56495));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16 = (function (G__56496,G__56497,G__56498,G__56499,G__56500,G__56501,G__56502,G__56503,G__56504,G__56505,G__56506,G__56507,G__56508,G__56509,G__56510,G__56511){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__56496,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15(G__56497,G__56498,G__56499,G__56500,G__56501,G__56502,G__56503,G__56504,G__56505,G__56506,G__56507,G__56508,G__56509,G__56510,G__56511));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17 = (function (G__56512,G__56513,G__56514,G__56515,G__56516,G__56517,G__56518,G__56519,G__56520,G__56521,G__56522,G__56523,G__56524,G__56525,G__56526,G__56527,G__56528){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__56512,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16(G__56513,G__56514,G__56515,G__56516,G__56517,G__56518,G__56519,G__56520,G__56521,G__56522,G__56523,G__56524,G__56525,G__56526,G__56527,G__56528));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18 = (function (G__56529,G__56530,G__56531,G__56532,G__56533,G__56534,G__56535,G__56536,G__56537,G__56538,G__56539,G__56540,G__56541,G__56542,G__56543,G__56544,G__56545,G__56546){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__56529,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17(G__56530,G__56531,G__56532,G__56533,G__56534,G__56535,G__56536,G__56537,G__56538,G__56539,G__56540,G__56541,G__56542,G__56543,G__56544,G__56545,G__56546));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19 = (function (G__56547,G__56548,G__56549,G__56550,G__56551,G__56552,G__56553,G__56554,G__56555,G__56556,G__56557,G__56558,G__56559,G__56560,G__56561,G__56562,G__56563,G__56564,G__56565){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__56547,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18(G__56548,G__56549,G__56550,G__56551,G__56552,G__56553,G__56554,G__56555,G__56556,G__56557,G__56558,G__56559,G__56560,G__56561,G__56562,G__56563,G__56564,G__56565));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic = (function (G__56359,G__56360,G__56361,G__56362,G__56363,G__56364,G__56365,G__56366,G__56367,G__56368,G__56369,G__56370,G__56371,G__56372,G__56373,G__56374,G__56375,G__56376,G__56377,rest__14615__auto__){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19(G__56359,G__56360,G__56361,G__56362,G__56363,G__56364,G__56365,G__56366,G__56367,G__56368,G__56369,G__56370,G__56371,G__56372,G__56373,G__56374,G__56375,G__56376,G__56377),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.comp_navs,rest__14615__auto__));
}));

/** @this {Function} */
(com.rpl.specter.impl.comp_navs.cljs$lang$applyTo = (function (seq56569){
var G__56570 = cljs.core.first(seq56569);
var seq56569__$1 = cljs.core.next(seq56569);
var G__56571 = cljs.core.first(seq56569__$1);
var seq56569__$2 = cljs.core.next(seq56569__$1);
var G__56572 = cljs.core.first(seq56569__$2);
var seq56569__$3 = cljs.core.next(seq56569__$2);
var G__56573 = cljs.core.first(seq56569__$3);
var seq56569__$4 = cljs.core.next(seq56569__$3);
var G__56574 = cljs.core.first(seq56569__$4);
var seq56569__$5 = cljs.core.next(seq56569__$4);
var G__56575 = cljs.core.first(seq56569__$5);
var seq56569__$6 = cljs.core.next(seq56569__$5);
var G__56576 = cljs.core.first(seq56569__$6);
var seq56569__$7 = cljs.core.next(seq56569__$6);
var G__56577 = cljs.core.first(seq56569__$7);
var seq56569__$8 = cljs.core.next(seq56569__$7);
var G__56578 = cljs.core.first(seq56569__$8);
var seq56569__$9 = cljs.core.next(seq56569__$8);
var G__56579 = cljs.core.first(seq56569__$9);
var seq56569__$10 = cljs.core.next(seq56569__$9);
var G__56580 = cljs.core.first(seq56569__$10);
var seq56569__$11 = cljs.core.next(seq56569__$10);
var G__56581 = cljs.core.first(seq56569__$11);
var seq56569__$12 = cljs.core.next(seq56569__$11);
var G__56582 = cljs.core.first(seq56569__$12);
var seq56569__$13 = cljs.core.next(seq56569__$12);
var G__56583 = cljs.core.first(seq56569__$13);
var seq56569__$14 = cljs.core.next(seq56569__$13);
var G__56584 = cljs.core.first(seq56569__$14);
var seq56569__$15 = cljs.core.next(seq56569__$14);
var G__56585 = cljs.core.first(seq56569__$15);
var seq56569__$16 = cljs.core.next(seq56569__$15);
var G__56586 = cljs.core.first(seq56569__$16);
var seq56569__$17 = cljs.core.next(seq56569__$16);
var G__56587 = cljs.core.first(seq56569__$17);
var seq56569__$18 = cljs.core.next(seq56569__$17);
var G__56588 = cljs.core.first(seq56569__$18);
var seq56569__$19 = cljs.core.next(seq56569__$18);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56570,G__56571,G__56572,G__56573,G__56574,G__56575,G__56576,G__56577,G__56578,G__56579,G__56580,G__56581,G__56582,G__56583,G__56584,G__56585,G__56586,G__56587,G__56588,seq56569__$19);
}));

(com.rpl.specter.impl.comp_navs.cljs$lang$maxFixedArity = (19));

com.rpl.specter.impl.srange_transform_STAR_ = (function com$rpl$specter$impl$srange_transform_STAR_(structure,start,end,next_fn){
if(typeof structure === 'string'){
var newss = (function (){var G__56606 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,start,end);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__56606) : next_fn.call(null, G__56606));
})();
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,(0),start),cljs.core.str.cljs$core$IFn$_invoke$arity$1(newss),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,end,((structure).length))].join('');
} else {
var structurev = cljs.core.vec(structure);
var newpart = (function (){var G__56607 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,start,end);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__56607) : next_fn.call(null, G__56607));
})();
var res = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,(0),start),newpart,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,end,cljs.core.count(structure))], 0));
if(cljs.core.vector_QMARK_(structure)){
return cljs.core.vec(res);
} else {
return res;
}
}
});
com.rpl.specter.impl.matching_indices = (function com$rpl$specter$impl$matching_indices(aseq,p){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,e){
if(cljs.core.truth_((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(e) : p.call(null, e)))){
return i;
} else {
return null;
}
}),aseq);
});
com.rpl.specter.impl.matching_ranges = (function com$rpl$specter$impl$matching_ranges(aseq,p){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__56608,i){
var vec__56609 = p__56608;
var ranges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56609,(0),null);
var curr_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56609,(1),null);
var curr_last = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56609,(2),null);
var curr = vec__56609;
if((curr_start == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ranges,i,i], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(curr_last + (1)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ranges,curr_start,i], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ranges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_start,(curr_last + (1))], null)),i,i], null);

}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null,null], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.matching_indices(aseq,p),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1)], null))));
});
com.rpl.specter.impl.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$impl$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (structure__$1,p__56612){
var vec__56613 = p__56612;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56613,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56613,(1),null);
return com.rpl.specter.impl.srange_transform_STAR_(structure__$1,s,e,next_fn);
}),structure,cljs.core.reverse(com.rpl.specter.impl.matching_ranges(structure,pred)));
});
com.rpl.specter.impl.codewalk_until = (function com$rpl$specter$impl$codewalk_until(pred,on_match_fn,structure){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure) : pred.call(null, structure)))){
return (on_match_fn.cljs$core$IFn$_invoke$arity$1 ? on_match_fn.cljs$core$IFn$_invoke$arity$1(structure) : on_match_fn.call(null, structure));
} else {
var ret = clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.impl.codewalk_until,pred,on_match_fn),cljs.core.identity,structure);
if(((com.rpl.specter.impl.fn_invocation_QMARK_(structure)) && (com.rpl.specter.impl.fn_invocation_QMARK_(ret)))){
return cljs.core.with_meta(ret,cljs.core.meta(structure));
} else {
return ret;
}
}
});
com.rpl.specter.impl.walk_select = (function com$rpl$specter$impl$walk_select(pred,continue_fn,structure){
var ret = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var walker = (function com$rpl$specter$impl$walk_select_$_this(structure__$1){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure__$1) : pred.call(null, structure__$1)))){
var r = (continue_fn.cljs$core$IFn$_invoke$arity$1 ? continue_fn.cljs$core$IFn$_invoke$arity$1(structure__$1) : continue_fn.call(null, structure__$1));
if((!((r === com.rpl.specter.impl.NONE)))){
com.rpl.specter.impl.set_cell_BANG_(ret,r);
} else {
}

return r;
} else {
return clojure.walk.walk(com$rpl$specter$impl$walk_select_$_this,cljs.core.identity,structure__$1);
}
});
walker(structure);

return com.rpl.specter.impl.get_cell(ret);
});
com.rpl.specter.impl.walk_until = (function com$rpl$specter$impl$walk_until(pred,on_match_fn,structure){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure) : pred.call(null, structure)))){
return (on_match_fn.cljs$core$IFn$_invoke$arity$1 ? on_match_fn.cljs$core$IFn$_invoke$arity$1(structure) : on_match_fn.call(null, structure));
} else {
return clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.impl.walk_until,pred,on_match_fn),cljs.core.identity,structure);
}
});
com.rpl.specter.impl.coerce_nav = (function com$rpl$specter$impl$coerce_nav(o){
if((((!((o == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === o.com$rpl$specter$protocols$RichNavigator$))))?true:(((!o.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,o):false)):cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,o))){
return o;
} else {
if(cljs.core.sequential_QMARK_(o)){
return com.rpl.specter.impl.comp_paths_STAR_(o);
} else {
return com.rpl.specter.protocols.implicit_nav(o);

}
}
});
com.rpl.specter.impl.dynamic_var_QMARK_ = (function com$rpl$specter$impl$dynamic_var_QMARK_(v){
return new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
});
com.rpl.specter.impl.direct_nav_obj = (function com$rpl$specter$impl$direct_nav_obj(o){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(o,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),true,new cljs.core.Keyword(null,"original-obj","original-obj",-1134279620),o], null));
});
com.rpl.specter.impl.maybe_direct_nav = (function com$rpl$specter$impl$maybe_direct_nav(obj,direct_nav_QMARK_){
if(cljs.core.truth_(direct_nav_QMARK_)){
return com.rpl.specter.impl.direct_nav_obj(obj);
} else {
return obj;
}
});
com.rpl.specter.impl.original_obj = (function com$rpl$specter$impl$original_obj(o){
while(true){
var orig = new cljs.core.Keyword(null,"original-obj","original-obj",-1134279620).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(o));
if(cljs.core.truth_(orig)){
var G__58313 = orig;
o = G__58313;
continue;
} else {
return o;
}
break;
}
});
com.rpl.specter.impl.direct_nav_QMARK_ = (function com$rpl$specter$impl$direct_nav_QMARK_(o){
return new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(o));
});
com.rpl.specter.impl.all_static_QMARK_ = (function com$rpl$specter$impl$all_static_QMARK_(params){
return (com.rpl.specter.impl.NONE === com.rpl.specter.impl.walk_select(com.rpl.specter.impl.dynamic_param_QMARK_,cljs.core.identity,params));
});
com.rpl.specter.impl.late_resolved_fn = (function com$rpl$specter$impl$late_resolved_fn(afn){
return (function() { 
var G__58314__delegate = function (args){
if(com.rpl.specter.impl.all_static_QMARK_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(afn,args);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(afn,args,null);
}
};
var G__58314 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58315__i = 0, G__58315__a = new Array(arguments.length -  0);
while (G__58315__i < G__58315__a.length) {G__58315__a[G__58315__i] = arguments[G__58315__i + 0]; ++G__58315__i;}
  args = new cljs.core.IndexedSeq(G__58315__a,0,null);
} 
return G__58314__delegate.call(this,args);};
G__58314.cljs$lang$maxFixedArity = 0;
G__58314.cljs$lang$applyTo = (function (arglist__58316){
var args = cljs.core.seq(arglist__58316);
return G__58314__delegate(args);
});
G__58314.cljs$core$IFn$_invoke$arity$variadic = G__58314__delegate;
return G__58314;
})()
;
});
com.rpl.specter.impl.preserve_map = (function com$rpl$specter$impl$preserve_map(afn,o){
if(((cljs.core.list_QMARK_(o)) || (cljs.core.seq_QMARK_(o)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(afn,o);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(o),cljs.core.map.cljs$core$IFn$_invoke$arity$2(afn,o));
}
});
com.rpl.specter.impl.magic_precompilation_STAR_ = (function com$rpl$specter$impl$magic_precompilation_STAR_(o){
if(cljs.core.sequential_QMARK_(o)){
return com.rpl.specter.impl.preserve_map(com.rpl.specter.impl.magic_precompilation_STAR_,o);
} else {
if((o instanceof com.rpl.specter.impl.VarUse)){
var v = o.avar;
if(cljs.core.truth_((function (){var and__5000__auto__ = v;
if(cljs.core.truth_(and__5000__auto__)){
return com.rpl.specter.impl.dynamic_var_QMARK_(v);
} else {
return and__5000__auto__;
}
})())){
return com.rpl.specter.impl.__GT_DynamicVal(com.rpl.specter.impl.maybe_direct_nav(o.sym,(function (){var or__5002__auto__ = com.rpl.specter.impl.direct_nav_QMARK_(v);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return com.rpl.specter.impl.direct_nav_QMARK_(o.sym);
}
})()));
} else {
return com.rpl.specter.impl.maybe_direct_nav(o.val,(function (){var or__5002__auto__ = (function (){var and__5000__auto__ = v;
if(cljs.core.truth_(and__5000__auto__)){
return com.rpl.specter.impl.direct_nav_QMARK_(v);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = com.rpl.specter.impl.direct_nav_QMARK_(o.sym);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return com.rpl.specter.impl.direct_nav_QMARK_(o.val);
}
}
})());
}
} else {
if((o instanceof com.rpl.specter.impl.LocalSym)){
return com.rpl.specter.impl.__GT_DynamicVal(o.sym);
} else {
if((o instanceof com.rpl.specter.impl.SpecialFormUse)){
return com.rpl.specter.impl.__GT_DynamicVal(o.code);
} else {
if((o instanceof com.rpl.specter.impl.FnInvocation)){
var op = (function (){var G__56660 = o.op;
return (com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1(G__56660) : com.rpl.specter.impl.magic_precompilation_STAR_.call(null, G__56660));
})();
var params = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.magic_precompilation_STAR_,o.params));
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(op));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return com.rpl.specter.impl.all_static_QMARK_(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,op));
}
})())){
var G__56663 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(op,params);
return (com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1(G__56663) : com.rpl.specter.impl.magic_precompilation_STAR_.call(null, G__56663));
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(op,params,o.code);
}
} else {
return o;

}
}
}
}
}
});
com.rpl.specter.impl.static_combine = (function com$rpl$specter$impl$static_combine(var_args){
var G__56671 = arguments.length;
switch (G__56671) {
case 1:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1 = (function (o){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(o,true);
}));

(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2 = (function (o,nav_pos_QMARK_){
if(cljs.core.sequential_QMARK_(o)){
if(cljs.core.truth_(nav_pos_QMARK_)){
var res = com.rpl.specter.impl.continuous_subseqs_transform_STAR_(com.rpl.specter.impl.rich_nav_QMARK_,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.static_combine,cljs.core.flatten(o))),(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.comp_paths_STAR_(s)], null);
}));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(res))){
return cljs.core.first(res);
} else {
return res;
}
} else {
return com.rpl.specter.impl.preserve_map((function (p1__56668_SHARP_){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(p1__56668_SHARP_,false);
}),o);
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
return com.rpl.specter.impl.__GT_DynamicFunction(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(o.op,false),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56669_SHARP_){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(p1__56669_SHARP_,false);
}),o.params)),o.code);
} else {
if((o instanceof com.rpl.specter.impl.DynamicPath)){
return com.rpl.specter.impl.__GT_DynamicPath(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1(o.path));
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
return o;
} else {
if(cljs.core.truth_(nav_pos_QMARK_)){
return com.rpl.specter.impl.coerce_nav(o);
} else {
return o;
}

}
}
}
}
}));

(com.rpl.specter.impl.static_combine.cljs$lang$maxFixedArity = 2);


/**
 * @interface
 */
com.rpl.specter.impl.LateResolve = function(){};

var com$rpl$specter$impl$LateResolve$late_resolve$dyn_58322 = (function (this$,dynamic_params){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (com.rpl.specter.impl.late_resolve[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,dynamic_params) : m__5351__auto__.call(null, this$,dynamic_params));
} else {
var m__5349__auto__ = (com.rpl.specter.impl.late_resolve["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,dynamic_params) : m__5349__auto__.call(null, this$,dynamic_params));
} else {
throw cljs.core.missing_protocol("LateResolve.late-resolve",this$);
}
}
});
com.rpl.specter.impl.late_resolve = (function com$rpl$specter$impl$late_resolve(this$,dynamic_params){
if((((!((this$ == null)))) && ((!((this$.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 == null)))))){
return this$.com$rpl$specter$impl$LateResolve$late_resolve$arity$2(this$,dynamic_params);
} else {
return com$rpl$specter$impl$LateResolve$late_resolve$dyn_58322(this$,dynamic_params);
}
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LocalParam = (function (idx,__meta,__extmap,__hash){
this.idx = idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k56676,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__56685 = k56676;
var G__56685__$1 = (((G__56685 instanceof cljs.core.Keyword))?G__56685.fqn:null);
switch (G__56685__$1) {
case "idx":
return self__.idx;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56676,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__56691){
var vec__56692 = p__56691;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56692,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56692,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dynamic_params,self__.idx);
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LocalParam{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56675){
var self__ = this;
var G__56675__$1 = this;
return (new cljs.core.RecordIter((0),G__56675__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-301692215 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56677,other56678){
var self__ = this;
var this56677__$1 = this;
return (((!((other56678 == null)))) && ((((this56677__$1.constructor === other56678.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56677__$1.idx,other56678.idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56677__$1.__extmap,other56678.__extmap)))))));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k56676){
var self__ = this;
var this__5307__auto____$1 = this;
var G__56699 = k56676;
var G__56699__$1 = (((G__56699 instanceof cljs.core.Keyword))?G__56699.fqn:null);
switch (G__56699__$1) {
case "idx":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k56676);

}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__56675){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__56700 = cljs.core.keyword_identical_QMARK_;
var expr__56701 = k__5309__auto__;
if(cljs.core.truth_((pred__56700.cljs$core$IFn$_invoke$arity$2 ? pred__56700.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"idx","idx",1053688473),expr__56701) : pred__56700.call(null, new cljs.core.Keyword(null,"idx","idx",1053688473),expr__56701)))){
return (new com.rpl.specter.impl.LocalParam(G__56675,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__56675),null));
}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__56675){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,G__56675,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LocalParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
}));

(com.rpl.specter.impl.LocalParam.cljs$lang$type = true);

(com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LocalParam",null,(1),null));
}));

(com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LocalParam");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LocalParam.
 */
com.rpl.specter.impl.__GT_LocalParam = (function com$rpl$specter$impl$__GT_LocalParam(idx){
return (new com.rpl.specter.impl.LocalParam(idx,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LocalParam, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LocalParam = (function com$rpl$specter$impl$map__GT_LocalParam(G__56679){
var extmap__5342__auto__ = (function (){var G__56707 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56679,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(cljs.core.record_QMARK_(G__56679)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56707);
} else {
return G__56707;
}
})();
return (new com.rpl.specter.impl.LocalParam(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(G__56679),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.StaticParam = (function (val,__meta,__extmap,__hash){
this.val = val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k56709,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__56720 = k56709;
var G__56720__$1 = (((G__56720 instanceof cljs.core.Keyword))?G__56720.fqn:null);
switch (G__56720__$1) {
case "val":
return self__.val;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56709,else__5303__auto__);

}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__56721){
var vec__56723 = p__56721;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56723,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56723,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return self__.val;
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.StaticParam{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56708){
var self__ = this;
var G__56708__$1 = this;
return (new cljs.core.RecordIter((0),G__56708__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (787001817 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56710,other56711){
var self__ = this;
var this56710__$1 = this;
return (((!((other56711 == null)))) && ((((this56710__$1.constructor === other56711.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56710__$1.val,other56711.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56710__$1.__extmap,other56711.__extmap)))))));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k56709){
var self__ = this;
var this__5307__auto____$1 = this;
var G__56734 = k56709;
var G__56734__$1 = (((G__56734 instanceof cljs.core.Keyword))?G__56734.fqn:null);
switch (G__56734__$1) {
case "val":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k56709);

}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__56708){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__56735 = cljs.core.keyword_identical_QMARK_;
var expr__56736 = k__5309__auto__;
if(cljs.core.truth_((pred__56735.cljs$core$IFn$_invoke$arity$2 ? pred__56735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val","val",128701612),expr__56736) : pred__56735.call(null, new cljs.core.Keyword(null,"val","val",128701612),expr__56736)))){
return (new com.rpl.specter.impl.StaticParam(G__56708,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__56708),null));
}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__56708){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,G__56708,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.StaticParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(com.rpl.specter.impl.StaticParam.cljs$lang$type = true);

(com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/StaticParam",null,(1),null));
}));

(com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/StaticParam");
}));

/**
 * Positional factory function for com.rpl.specter.impl/StaticParam.
 */
com.rpl.specter.impl.__GT_StaticParam = (function com$rpl$specter$impl$__GT_StaticParam(val){
return (new com.rpl.specter.impl.StaticParam(val,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/StaticParam, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_StaticParam = (function com$rpl$specter$impl$map__GT_StaticParam(G__56714){
var extmap__5342__auto__ = (function (){var G__56739 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56714,new cljs.core.Keyword(null,"val","val",128701612));
if(cljs.core.record_QMARK_(G__56714)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56739);
} else {
return G__56739;
}
})();
return (new com.rpl.specter.impl.StaticParam(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__56714),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn0 = (function (fn,__meta,__extmap,__hash){
this.fn = fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k56771,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__56778 = k56771;
var G__56778__$1 = (((G__56778 instanceof cljs.core.Keyword))?G__56778.fqn:null);
switch (G__56778__$1) {
case "fn":
return self__.fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56771,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__56782){
var vec__56783 = p__56782;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56783,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56783,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14651__auto__,dynamic_params56747){
var self__ = this;
var this__14651__auto____$1 = this;
var fexpr__56786 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params56747);
return (fexpr__56786.cljs$core$IFn$_invoke$arity$0 ? fexpr__56786.cljs$core$IFn$_invoke$arity$0() : fexpr__56786.call(null, ));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LateFn0{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56770){
var self__ = this;
var G__56770__$1 = this;
return (new cljs.core.RecordIter((0),G__56770__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1214220781 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56772,other56773){
var self__ = this;
var this56772__$1 = this;
return (((!((other56773 == null)))) && ((((this56772__$1.constructor === other56773.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56772__$1.fn,other56773.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56772__$1.__extmap,other56773.__extmap)))))));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k56771){
var self__ = this;
var this__5307__auto____$1 = this;
var G__56793 = k56771;
var G__56793__$1 = (((G__56793 instanceof cljs.core.Keyword))?G__56793.fqn:null);
switch (G__56793__$1) {
case "fn":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k56771);

}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__56770){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__56794 = cljs.core.keyword_identical_QMARK_;
var expr__56795 = k__5309__auto__;
if(cljs.core.truth_((pred__56794.cljs$core$IFn$_invoke$arity$2 ? pred__56794.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__56795) : pred__56794.call(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__56795)))){
return (new com.rpl.specter.impl.LateFn0(G__56770,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__56770),null));
}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__56770){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,G__56770,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LateFn0.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null);
}));

(com.rpl.specter.impl.LateFn0.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn0",null,(1),null));
}));

(com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LateFn0");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn0.
 */
com.rpl.specter.impl.__GT_LateFn0 = (function com$rpl$specter$impl$__GT_LateFn0(fn){
return (new com.rpl.specter.impl.LateFn0(fn,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn0, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn0 = (function com$rpl$specter$impl$map__GT_LateFn0(G__56774){
var extmap__5342__auto__ = (function (){var G__56797 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56774,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(cljs.core.record_QMARK_(G__56774)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56797);
} else {
return G__56797;
}
})();
return (new com.rpl.specter.impl.LateFn0(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__56774),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn1 = (function (fn,arg0,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k56799,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__56803 = k56799;
var G__56803__$1 = (((G__56803 instanceof cljs.core.Keyword))?G__56803.fqn:null);
switch (G__56803__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56799,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__56804){
var vec__56805 = p__56804;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56805,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56805,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14651__auto__,dynamic_params56748){
var self__ = this;
var this__14651__auto____$1 = this;
var G__56809 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params56748);
var fexpr__56808 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params56748);
return (fexpr__56808.cljs$core$IFn$_invoke$arity$1 ? fexpr__56808.cljs$core$IFn$_invoke$arity$1(G__56809) : fexpr__56808.call(null, G__56809));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LateFn1{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56798){
var self__ = this;
var G__56798__$1 = this;
return (new cljs.core.RecordIter((0),G__56798__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1315140313 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56800,other56801){
var self__ = this;
var this56800__$1 = this;
return (((!((other56801 == null)))) && ((((this56800__$1.constructor === other56801.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56800__$1.fn,other56801.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56800__$1.arg0,other56801.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56800__$1.__extmap,other56801.__extmap)))))))));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k56799){
var self__ = this;
var this__5307__auto____$1 = this;
var G__56816 = k56799;
var G__56816__$1 = (((G__56816 instanceof cljs.core.Keyword))?G__56816.fqn:null);
switch (G__56816__$1) {
case "fn":
case "arg0":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k56799);

}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__56798){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__56817 = cljs.core.keyword_identical_QMARK_;
var expr__56818 = k__5309__auto__;
if(cljs.core.truth_((pred__56817.cljs$core$IFn$_invoke$arity$2 ? pred__56817.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__56818) : pred__56817.call(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__56818)))){
return (new com.rpl.specter.impl.LateFn1(G__56798,self__.arg0,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56817.cljs$core$IFn$_invoke$arity$2 ? pred__56817.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__56818) : pred__56817.call(null, new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__56818)))){
return (new com.rpl.specter.impl.LateFn1(self__.fn,G__56798,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__56798),null));
}
}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__56798){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,G__56798,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LateFn1.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)], null);
}));

(com.rpl.specter.impl.LateFn1.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn1",null,(1),null));
}));

(com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LateFn1");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn1.
 */
com.rpl.specter.impl.__GT_LateFn1 = (function com$rpl$specter$impl$__GT_LateFn1(fn,arg0){
return (new com.rpl.specter.impl.LateFn1(fn,arg0,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn1, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn1 = (function com$rpl$specter$impl$map__GT_LateFn1(G__56802){
var extmap__5342__auto__ = (function (){var G__56823 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56802,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355)], 0));
if(cljs.core.record_QMARK_(G__56802)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56823);
} else {
return G__56823;
}
})();
return (new com.rpl.specter.impl.LateFn1(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__56802),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__56802),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn2 = (function (fn,arg0,arg1,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k56825,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__56832 = k56825;
var G__56832__$1 = (((G__56832 instanceof cljs.core.Keyword))?G__56832.fqn:null);
switch (G__56832__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56825,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__56843){
var vec__56844 = p__56843;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56844,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56844,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14651__auto__,dynamic_params56749){
var self__ = this;
var this__14651__auto____$1 = this;
var G__56851 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params56749);
var G__56852 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params56749);
var fexpr__56850 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params56749);
return (fexpr__56850.cljs$core$IFn$_invoke$arity$2 ? fexpr__56850.cljs$core$IFn$_invoke$arity$2(G__56851,G__56852) : fexpr__56850.call(null, G__56851,G__56852));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LateFn2{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56824){
var self__ = this;
var G__56824__$1 = this;
return (new cljs.core.RecordIter((0),G__56824__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1833421521 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56826,other56827){
var self__ = this;
var this56826__$1 = this;
return (((!((other56827 == null)))) && ((((this56826__$1.constructor === other56827.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56826__$1.fn,other56827.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56826__$1.arg0,other56827.arg0)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56826__$1.arg1,other56827.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56826__$1.__extmap,other56827.__extmap)))))))))));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k56825){
var self__ = this;
var this__5307__auto____$1 = this;
var G__56862 = k56825;
var G__56862__$1 = (((G__56862 instanceof cljs.core.Keyword))?G__56862.fqn:null);
switch (G__56862__$1) {
case "fn":
case "arg0":
case "arg1":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k56825);

}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__56824){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__56866 = cljs.core.keyword_identical_QMARK_;
var expr__56867 = k__5309__auto__;
if(cljs.core.truth_((pred__56866.cljs$core$IFn$_invoke$arity$2 ? pred__56866.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__56867) : pred__56866.call(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__56867)))){
return (new com.rpl.specter.impl.LateFn2(G__56824,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56866.cljs$core$IFn$_invoke$arity$2 ? pred__56866.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__56867) : pred__56866.call(null, new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__56867)))){
return (new com.rpl.specter.impl.LateFn2(self__.fn,G__56824,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56866.cljs$core$IFn$_invoke$arity$2 ? pred__56866.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__56867) : pred__56866.call(null, new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__56867)))){
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,G__56824,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__56824),null));
}
}
}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__56824){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,G__56824,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LateFn2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null)], null);
}));

(com.rpl.specter.impl.LateFn2.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn2",null,(1),null));
}));

(com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LateFn2");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn2.
 */
com.rpl.specter.impl.__GT_LateFn2 = (function com$rpl$specter$impl$__GT_LateFn2(fn,arg0,arg1){
return (new com.rpl.specter.impl.LateFn2(fn,arg0,arg1,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn2, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn2 = (function com$rpl$specter$impl$map__GT_LateFn2(G__56828){
var extmap__5342__auto__ = (function (){var G__56872 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56828,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358)], 0));
if(cljs.core.record_QMARK_(G__56828)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56872);
} else {
return G__56872;
}
})();
return (new com.rpl.specter.impl.LateFn2(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__56828),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__56828),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__56828),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn3 = (function (fn,arg0,arg1,arg2,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k56874,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__56878 = k56874;
var G__56878__$1 = (((G__56878 instanceof cljs.core.Keyword))?G__56878.fqn:null);
switch (G__56878__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56874,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__56891){
var vec__56892 = p__56891;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56892,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56892,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14651__auto__,dynamic_params56750){
var self__ = this;
var this__14651__auto____$1 = this;
var G__56896 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params56750);
var G__56897 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params56750);
var G__56898 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params56750);
var fexpr__56895 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params56750);
return (fexpr__56895.cljs$core$IFn$_invoke$arity$3 ? fexpr__56895.cljs$core$IFn$_invoke$arity$3(G__56896,G__56897,G__56898) : fexpr__56895.call(null, G__56896,G__56897,G__56898));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LateFn3{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56873){
var self__ = this;
var G__56873__$1 = this;
return (new cljs.core.RecordIter((0),G__56873__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1966076701 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56875,other56876){
var self__ = this;
var this56875__$1 = this;
return (((!((other56876 == null)))) && ((((this56875__$1.constructor === other56876.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56875__$1.fn,other56876.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56875__$1.arg0,other56876.arg0)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56875__$1.arg1,other56876.arg1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56875__$1.arg2,other56876.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56875__$1.__extmap,other56876.__extmap)))))))))))));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k56874){
var self__ = this;
var this__5307__auto____$1 = this;
var G__56915 = k56874;
var G__56915__$1 = (((G__56915 instanceof cljs.core.Keyword))?G__56915.fqn:null);
switch (G__56915__$1) {
case "fn":
case "arg0":
case "arg1":
case "arg2":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k56874);

}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__56873){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__56916 = cljs.core.keyword_identical_QMARK_;
var expr__56917 = k__5309__auto__;
if(cljs.core.truth_((pred__56916.cljs$core$IFn$_invoke$arity$2 ? pred__56916.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__56917) : pred__56916.call(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__56917)))){
return (new com.rpl.specter.impl.LateFn3(G__56873,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56916.cljs$core$IFn$_invoke$arity$2 ? pred__56916.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__56917) : pred__56916.call(null, new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__56917)))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,G__56873,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56916.cljs$core$IFn$_invoke$arity$2 ? pred__56916.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__56917) : pred__56916.call(null, new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__56917)))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,G__56873,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56916.cljs$core$IFn$_invoke$arity$2 ? pred__56916.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__56917) : pred__56916.call(null, new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__56917)))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,G__56873,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__56873),null));
}
}
}
}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__56873){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__56873,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LateFn3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null)], null);
}));

(com.rpl.specter.impl.LateFn3.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn3",null,(1),null));
}));

(com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LateFn3");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn3.
 */
com.rpl.specter.impl.__GT_LateFn3 = (function com$rpl$specter$impl$__GT_LateFn3(fn,arg0,arg1,arg2){
return (new com.rpl.specter.impl.LateFn3(fn,arg0,arg1,arg2,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn3, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn3 = (function com$rpl$specter$impl$map__GT_LateFn3(G__56877){
var extmap__5342__auto__ = (function (){var G__56934 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56877,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917)], 0));
if(cljs.core.record_QMARK_(G__56877)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56934);
} else {
return G__56934;
}
})();
return (new com.rpl.specter.impl.LateFn3(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__56877),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__56877),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__56877),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__56877),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn4 = (function (fn,arg0,arg1,arg2,arg3,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k56936,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__56943 = k56936;
var G__56943__$1 = (((G__56943 instanceof cljs.core.Keyword))?G__56943.fqn:null);
switch (G__56943__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56936,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__56947){
var vec__56948 = p__56947;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56948,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56948,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14651__auto__,dynamic_params56751){
var self__ = this;
var this__14651__auto____$1 = this;
var G__56955 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params56751);
var G__56956 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params56751);
var G__56957 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params56751);
var G__56958 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params56751);
var fexpr__56954 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params56751);
return (fexpr__56954.cljs$core$IFn$_invoke$arity$4 ? fexpr__56954.cljs$core$IFn$_invoke$arity$4(G__56955,G__56956,G__56957,G__56958) : fexpr__56954.call(null, G__56955,G__56956,G__56957,G__56958));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LateFn4{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56935){
var self__ = this;
var G__56935__$1 = this;
return (new cljs.core.RecordIter((0),G__56935__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1293239800 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56937,other56938){
var self__ = this;
var this56937__$1 = this;
return (((!((other56938 == null)))) && ((((this56937__$1.constructor === other56938.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56937__$1.fn,other56938.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56937__$1.arg0,other56938.arg0)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56937__$1.arg1,other56938.arg1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56937__$1.arg2,other56938.arg2)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56937__$1.arg3,other56938.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56937__$1.__extmap,other56938.__extmap)))))))))))))));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k56936){
var self__ = this;
var this__5307__auto____$1 = this;
var G__56971 = k56936;
var G__56971__$1 = (((G__56971 instanceof cljs.core.Keyword))?G__56971.fqn:null);
switch (G__56971__$1) {
case "fn":
case "arg0":
case "arg1":
case "arg2":
case "arg3":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k56936);

}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__56935){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__56972 = cljs.core.keyword_identical_QMARK_;
var expr__56973 = k__5309__auto__;
if(cljs.core.truth_((pred__56972.cljs$core$IFn$_invoke$arity$2 ? pred__56972.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__56973) : pred__56972.call(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__56973)))){
return (new com.rpl.specter.impl.LateFn4(G__56935,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56972.cljs$core$IFn$_invoke$arity$2 ? pred__56972.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__56973) : pred__56972.call(null, new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__56973)))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,G__56935,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56972.cljs$core$IFn$_invoke$arity$2 ? pred__56972.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__56973) : pred__56972.call(null, new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__56973)))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,G__56935,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56972.cljs$core$IFn$_invoke$arity$2 ? pred__56972.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__56973) : pred__56972.call(null, new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__56973)))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,G__56935,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56972.cljs$core$IFn$_invoke$arity$2 ? pred__56972.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__56973) : pred__56972.call(null, new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__56973)))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__56935,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__56935),null));
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__56935){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__56935,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LateFn4.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null)], null);
}));

(com.rpl.specter.impl.LateFn4.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn4",null,(1),null));
}));

(com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LateFn4");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn4.
 */
com.rpl.specter.impl.__GT_LateFn4 = (function com$rpl$specter$impl$__GT_LateFn4(fn,arg0,arg1,arg2,arg3){
return (new com.rpl.specter.impl.LateFn4(fn,arg0,arg1,arg2,arg3,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn4, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn4 = (function com$rpl$specter$impl$map__GT_LateFn4(G__56939){
var extmap__5342__auto__ = (function (){var G__56978 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56939,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496)], 0));
if(cljs.core.record_QMARK_(G__56939)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56978);
} else {
return G__56978;
}
})();
return (new com.rpl.specter.impl.LateFn4(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__56939),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__56939),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__56939),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__56939),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__56939),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn5 = (function (fn,arg0,arg1,arg2,arg3,arg4,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k56983,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__56990 = k56983;
var G__56990__$1 = (((G__56990 instanceof cljs.core.Keyword))?G__56990.fqn:null);
switch (G__56990__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56983,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__56994){
var vec__56995 = p__56994;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56995,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56995,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14651__auto__,dynamic_params56752){
var self__ = this;
var this__14651__auto____$1 = this;
var G__56999 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params56752);
var G__57000 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params56752);
var G__57001 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params56752);
var G__57002 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params56752);
var G__57003 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params56752);
var fexpr__56998 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params56752);
return (fexpr__56998.cljs$core$IFn$_invoke$arity$5 ? fexpr__56998.cljs$core$IFn$_invoke$arity$5(G__56999,G__57000,G__57001,G__57002,G__57003) : fexpr__56998.call(null, G__56999,G__57000,G__57001,G__57002,G__57003));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LateFn5{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56982){
var self__ = this;
var G__56982__$1 = this;
return (new cljs.core.RecordIter((0),G__56982__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-686294298 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56984,other56985){
var self__ = this;
var this56984__$1 = this;
return (((!((other56985 == null)))) && ((((this56984__$1.constructor === other56985.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56984__$1.fn,other56985.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56984__$1.arg0,other56985.arg0)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56984__$1.arg1,other56985.arg1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56984__$1.arg2,other56985.arg2)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56984__$1.arg3,other56985.arg3)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56984__$1.arg4,other56985.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56984__$1.__extmap,other56985.__extmap)))))))))))))))));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k56983){
var self__ = this;
var this__5307__auto____$1 = this;
var G__57026 = k56983;
var G__57026__$1 = (((G__57026 instanceof cljs.core.Keyword))?G__57026.fqn:null);
switch (G__57026__$1) {
case "fn":
case "arg0":
case "arg1":
case "arg2":
case "arg3":
case "arg4":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k56983);

}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__56982){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__57027 = cljs.core.keyword_identical_QMARK_;
var expr__57028 = k__5309__auto__;
if(cljs.core.truth_((pred__57027.cljs$core$IFn$_invoke$arity$2 ? pred__57027.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57028) : pred__57027.call(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57028)))){
return (new com.rpl.specter.impl.LateFn5(G__56982,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57027.cljs$core$IFn$_invoke$arity$2 ? pred__57027.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57028) : pred__57027.call(null, new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57028)))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,G__56982,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57027.cljs$core$IFn$_invoke$arity$2 ? pred__57027.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57028) : pred__57027.call(null, new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57028)))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,G__56982,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57027.cljs$core$IFn$_invoke$arity$2 ? pred__57027.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57028) : pred__57027.call(null, new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57028)))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,G__56982,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57027.cljs$core$IFn$_invoke$arity$2 ? pred__57027.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57028) : pred__57027.call(null, new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57028)))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__56982,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57027.cljs$core$IFn$_invoke$arity$2 ? pred__57027.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57028) : pred__57027.call(null, new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57028)))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__56982,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__56982),null));
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__56982){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__56982,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LateFn5.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null)], null);
}));

(com.rpl.specter.impl.LateFn5.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn5",null,(1),null));
}));

(com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LateFn5");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn5.
 */
com.rpl.specter.impl.__GT_LateFn5 = (function com$rpl$specter$impl$__GT_LateFn5(fn,arg0,arg1,arg2,arg3,arg4){
return (new com.rpl.specter.impl.LateFn5(fn,arg0,arg1,arg2,arg3,arg4,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn5, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn5 = (function com$rpl$specter$impl$map__GT_LateFn5(G__56986){
var extmap__5342__auto__ = (function (){var G__57030 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56986,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004)], 0));
if(cljs.core.record_QMARK_(G__56986)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57030);
} else {
return G__57030;
}
})();
return (new com.rpl.specter.impl.LateFn5(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__56986),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__56986),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__56986),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__56986),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__56986),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__56986),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn6 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k57032,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__57039 = k57032;
var G__57039__$1 = (((G__57039 instanceof cljs.core.Keyword))?G__57039.fqn:null);
switch (G__57039__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57032,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__57043){
var vec__57044 = p__57043;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57044,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57044,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14651__auto__,dynamic_params56753){
var self__ = this;
var this__14651__auto____$1 = this;
var G__57048 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params56753);
var G__57049 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params56753);
var G__57050 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params56753);
var G__57051 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params56753);
var G__57052 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params56753);
var G__57053 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params56753);
var fexpr__57047 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params56753);
return (fexpr__57047.cljs$core$IFn$_invoke$arity$6 ? fexpr__57047.cljs$core$IFn$_invoke$arity$6(G__57048,G__57049,G__57050,G__57051,G__57052,G__57053) : fexpr__57047.call(null, G__57048,G__57049,G__57050,G__57051,G__57052,G__57053));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LateFn6{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57031){
var self__ = this;
var G__57031__$1 = this;
return (new cljs.core.RecordIter((0),G__57031__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1454341741 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57033,other57034){
var self__ = this;
var this57033__$1 = this;
return (((!((other57034 == null)))) && ((((this57033__$1.constructor === other57034.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57033__$1.fn,other57034.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57033__$1.arg0,other57034.arg0)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57033__$1.arg1,other57034.arg1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57033__$1.arg2,other57034.arg2)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57033__$1.arg3,other57034.arg3)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57033__$1.arg4,other57034.arg4)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57033__$1.arg5,other57034.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57033__$1.__extmap,other57034.__extmap)))))))))))))))))));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k57032){
var self__ = this;
var this__5307__auto____$1 = this;
var G__57060 = k57032;
var G__57060__$1 = (((G__57060 instanceof cljs.core.Keyword))?G__57060.fqn:null);
switch (G__57060__$1) {
case "fn":
case "arg0":
case "arg1":
case "arg2":
case "arg3":
case "arg4":
case "arg5":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57032);

}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__57031){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__57061 = cljs.core.keyword_identical_QMARK_;
var expr__57062 = k__5309__auto__;
if(cljs.core.truth_((pred__57061.cljs$core$IFn$_invoke$arity$2 ? pred__57061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57062) : pred__57061.call(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57062)))){
return (new com.rpl.specter.impl.LateFn6(G__57031,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57061.cljs$core$IFn$_invoke$arity$2 ? pred__57061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57062) : pred__57061.call(null, new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57062)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,G__57031,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57061.cljs$core$IFn$_invoke$arity$2 ? pred__57061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57062) : pred__57061.call(null, new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57062)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,G__57031,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57061.cljs$core$IFn$_invoke$arity$2 ? pred__57061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57062) : pred__57061.call(null, new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57062)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,G__57031,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57061.cljs$core$IFn$_invoke$arity$2 ? pred__57061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57062) : pred__57061.call(null, new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57062)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__57031,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57061.cljs$core$IFn$_invoke$arity$2 ? pred__57061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57062) : pred__57061.call(null, new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57062)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__57031,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57061.cljs$core$IFn$_invoke$arity$2 ? pred__57061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57062) : pred__57061.call(null, new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57062)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__57031,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__57031),null));
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__57031){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__57031,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LateFn6.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null)], null);
}));

(com.rpl.specter.impl.LateFn6.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn6",null,(1),null));
}));

(com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LateFn6");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn6.
 */
com.rpl.specter.impl.__GT_LateFn6 = (function com$rpl$specter$impl$__GT_LateFn6(fn,arg0,arg1,arg2,arg3,arg4,arg5){
return (new com.rpl.specter.impl.LateFn6(fn,arg0,arg1,arg2,arg3,arg4,arg5,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn6, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn6 = (function com$rpl$specter$impl$map__GT_LateFn6(G__57035){
var extmap__5342__auto__ = (function (){var G__57070 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57035,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215)], 0));
if(cljs.core.record_QMARK_(G__57035)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57070);
} else {
return G__57070;
}
})();
return (new com.rpl.specter.impl.LateFn6(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__57035),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__57035),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__57035),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__57035),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__57035),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__57035),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__57035),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn7 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k57072,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__57082 = k57072;
var G__57082__$1 = (((G__57082 instanceof cljs.core.Keyword))?G__57082.fqn:null);
switch (G__57082__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57072,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__57083){
var vec__57084 = p__57083;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57084,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57084,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14651__auto__,dynamic_params56754){
var self__ = this;
var this__14651__auto____$1 = this;
var G__57088 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params56754);
var G__57089 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params56754);
var G__57090 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params56754);
var G__57091 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params56754);
var G__57092 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params56754);
var G__57093 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params56754);
var G__57094 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params56754);
var fexpr__57087 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params56754);
return (fexpr__57087.cljs$core$IFn$_invoke$arity$7 ? fexpr__57087.cljs$core$IFn$_invoke$arity$7(G__57088,G__57089,G__57090,G__57091,G__57092,G__57093,G__57094) : fexpr__57087.call(null, G__57088,G__57089,G__57090,G__57091,G__57092,G__57093,G__57094));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LateFn7{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57071){
var self__ = this;
var G__57071__$1 = this;
return (new cljs.core.RecordIter((0),G__57071__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (2042831251 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57073,other57074){
var self__ = this;
var this57073__$1 = this;
return (((!((other57074 == null)))) && ((((this57073__$1.constructor === other57074.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57073__$1.fn,other57074.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57073__$1.arg0,other57074.arg0)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57073__$1.arg1,other57074.arg1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57073__$1.arg2,other57074.arg2)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57073__$1.arg3,other57074.arg3)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57073__$1.arg4,other57074.arg4)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57073__$1.arg5,other57074.arg5)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57073__$1.arg6,other57074.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57073__$1.__extmap,other57074.__extmap)))))))))))))))))))));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k57072){
var self__ = this;
var this__5307__auto____$1 = this;
var G__57098 = k57072;
var G__57098__$1 = (((G__57098 instanceof cljs.core.Keyword))?G__57098.fqn:null);
switch (G__57098__$1) {
case "fn":
case "arg0":
case "arg1":
case "arg2":
case "arg3":
case "arg4":
case "arg5":
case "arg6":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57072);

}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__57071){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__57099 = cljs.core.keyword_identical_QMARK_;
var expr__57100 = k__5309__auto__;
if(cljs.core.truth_((pred__57099.cljs$core$IFn$_invoke$arity$2 ? pred__57099.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57100) : pred__57099.call(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57100)))){
return (new com.rpl.specter.impl.LateFn7(G__57071,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57099.cljs$core$IFn$_invoke$arity$2 ? pred__57099.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57100) : pred__57099.call(null, new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57100)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,G__57071,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57099.cljs$core$IFn$_invoke$arity$2 ? pred__57099.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57100) : pred__57099.call(null, new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57100)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,G__57071,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57099.cljs$core$IFn$_invoke$arity$2 ? pred__57099.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57100) : pred__57099.call(null, new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57100)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,G__57071,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57099.cljs$core$IFn$_invoke$arity$2 ? pred__57099.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57100) : pred__57099.call(null, new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57100)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__57071,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57099.cljs$core$IFn$_invoke$arity$2 ? pred__57099.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57100) : pred__57099.call(null, new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57100)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__57071,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57099.cljs$core$IFn$_invoke$arity$2 ? pred__57099.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57100) : pred__57099.call(null, new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57100)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__57071,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57099.cljs$core$IFn$_invoke$arity$2 ? pred__57099.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57100) : pred__57099.call(null, new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57100)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__57071,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__57071),null));
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__57071){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__57071,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LateFn7.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null)], null);
}));

(com.rpl.specter.impl.LateFn7.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn7",null,(1),null));
}));

(com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LateFn7");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn7.
 */
com.rpl.specter.impl.__GT_LateFn7 = (function com$rpl$specter$impl$__GT_LateFn7(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6){
return (new com.rpl.specter.impl.LateFn7(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn7, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn7 = (function com$rpl$specter$impl$map__GT_LateFn7(G__57078){
var extmap__5342__auto__ = (function (){var G__57142 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57078,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438)], 0));
if(cljs.core.record_QMARK_(G__57078)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57142);
} else {
return G__57142;
}
})();
return (new com.rpl.specter.impl.LateFn7(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__57078),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__57078),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__57078),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__57078),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__57078),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__57078),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__57078),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__57078),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn8 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k57150,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__57157 = k57150;
var G__57157__$1 = (((G__57157 instanceof cljs.core.Keyword))?G__57157.fqn:null);
switch (G__57157__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57150,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__57158){
var vec__57159 = p__57158;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57159,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57159,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14651__auto__,dynamic_params56755){
var self__ = this;
var this__14651__auto____$1 = this;
var G__57163 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params56755);
var G__57164 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params56755);
var G__57165 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params56755);
var G__57166 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params56755);
var G__57167 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params56755);
var G__57168 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params56755);
var G__57169 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params56755);
var G__57170 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params56755);
var fexpr__57162 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params56755);
return (fexpr__57162.cljs$core$IFn$_invoke$arity$8 ? fexpr__57162.cljs$core$IFn$_invoke$arity$8(G__57163,G__57164,G__57165,G__57166,G__57167,G__57168,G__57169,G__57170) : fexpr__57162.call(null, G__57163,G__57164,G__57165,G__57166,G__57167,G__57168,G__57169,G__57170));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LateFn8{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57148){
var self__ = this;
var G__57148__$1 = this;
return (new cljs.core.RecordIter((0),G__57148__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (9 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (170516454 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57151,other57152){
var self__ = this;
var this57151__$1 = this;
return (((!((other57152 == null)))) && ((((this57151__$1.constructor === other57152.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57151__$1.fn,other57152.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57151__$1.arg0,other57152.arg0)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57151__$1.arg1,other57152.arg1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57151__$1.arg2,other57152.arg2)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57151__$1.arg3,other57152.arg3)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57151__$1.arg4,other57152.arg4)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57151__$1.arg5,other57152.arg5)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57151__$1.arg6,other57152.arg6)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57151__$1.arg7,other57152.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57151__$1.__extmap,other57152.__extmap)))))))))))))))))))))));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k57150){
var self__ = this;
var this__5307__auto____$1 = this;
var G__57174 = k57150;
var G__57174__$1 = (((G__57174 instanceof cljs.core.Keyword))?G__57174.fqn:null);
switch (G__57174__$1) {
case "fn":
case "arg0":
case "arg1":
case "arg2":
case "arg3":
case "arg4":
case "arg5":
case "arg6":
case "arg7":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57150);

}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__57148){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__57175 = cljs.core.keyword_identical_QMARK_;
var expr__57176 = k__5309__auto__;
if(cljs.core.truth_((pred__57175.cljs$core$IFn$_invoke$arity$2 ? pred__57175.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57176) : pred__57175.call(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57176)))){
return (new com.rpl.specter.impl.LateFn8(G__57148,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57175.cljs$core$IFn$_invoke$arity$2 ? pred__57175.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57176) : pred__57175.call(null, new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57176)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,G__57148,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57175.cljs$core$IFn$_invoke$arity$2 ? pred__57175.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57176) : pred__57175.call(null, new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57176)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,G__57148,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57175.cljs$core$IFn$_invoke$arity$2 ? pred__57175.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57176) : pred__57175.call(null, new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57176)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,G__57148,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57175.cljs$core$IFn$_invoke$arity$2 ? pred__57175.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57176) : pred__57175.call(null, new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57176)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__57148,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57175.cljs$core$IFn$_invoke$arity$2 ? pred__57175.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57176) : pred__57175.call(null, new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57176)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__57148,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57175.cljs$core$IFn$_invoke$arity$2 ? pred__57175.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57176) : pred__57175.call(null, new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57176)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__57148,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57175.cljs$core$IFn$_invoke$arity$2 ? pred__57175.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57176) : pred__57175.call(null, new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57176)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__57148,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57175.cljs$core$IFn$_invoke$arity$2 ? pred__57175.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57176) : pred__57175.call(null, new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57176)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__57148,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__57148),null));
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__57148){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__57148,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LateFn8.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null)], null);
}));

(com.rpl.specter.impl.LateFn8.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn8",null,(1),null));
}));

(com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LateFn8");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn8.
 */
com.rpl.specter.impl.__GT_LateFn8 = (function com$rpl$specter$impl$__GT_LateFn8(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7){
return (new com.rpl.specter.impl.LateFn8(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn8, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn8 = (function com$rpl$specter$impl$map__GT_LateFn8(G__57156){
var extmap__5342__auto__ = (function (){var G__57187 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57156,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509)], 0));
if(cljs.core.record_QMARK_(G__57156)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57187);
} else {
return G__57187;
}
})();
return (new com.rpl.specter.impl.LateFn8(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__57156),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__57156),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__57156),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__57156),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__57156),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__57156),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__57156),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__57156),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__57156),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn9 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k57189,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__57193 = k57189;
var G__57193__$1 = (((G__57193 instanceof cljs.core.Keyword))?G__57193.fqn:null);
switch (G__57193__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57189,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__57194){
var vec__57195 = p__57194;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57195,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57195,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14651__auto__,dynamic_params56756){
var self__ = this;
var this__14651__auto____$1 = this;
var G__57199 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params56756);
var G__57200 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params56756);
var G__57201 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params56756);
var G__57202 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params56756);
var G__57203 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params56756);
var G__57204 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params56756);
var G__57205 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params56756);
var G__57206 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params56756);
var G__57207 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params56756);
var fexpr__57198 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params56756);
return (fexpr__57198.cljs$core$IFn$_invoke$arity$9 ? fexpr__57198.cljs$core$IFn$_invoke$arity$9(G__57199,G__57200,G__57201,G__57202,G__57203,G__57204,G__57205,G__57206,G__57207) : fexpr__57198.call(null, G__57199,G__57200,G__57201,G__57202,G__57203,G__57204,G__57205,G__57206,G__57207));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LateFn9{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57188){
var self__ = this;
var G__57188__$1 = this;
return (new cljs.core.RecordIter((0),G__57188__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (840896307 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57190,other57191){
var self__ = this;
var this57190__$1 = this;
return (((!((other57191 == null)))) && ((((this57190__$1.constructor === other57191.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57190__$1.fn,other57191.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57190__$1.arg0,other57191.arg0)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57190__$1.arg1,other57191.arg1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57190__$1.arg2,other57191.arg2)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57190__$1.arg3,other57191.arg3)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57190__$1.arg4,other57191.arg4)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57190__$1.arg5,other57191.arg5)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57190__$1.arg6,other57191.arg6)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57190__$1.arg7,other57191.arg7)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57190__$1.arg8,other57191.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57190__$1.__extmap,other57191.__extmap)))))))))))))))))))))))));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k57189){
var self__ = this;
var this__5307__auto____$1 = this;
var G__57222 = k57189;
var G__57222__$1 = (((G__57222 instanceof cljs.core.Keyword))?G__57222.fqn:null);
switch (G__57222__$1) {
case "fn":
case "arg0":
case "arg1":
case "arg2":
case "arg3":
case "arg4":
case "arg5":
case "arg6":
case "arg7":
case "arg8":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57189);

}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__57188){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__57223 = cljs.core.keyword_identical_QMARK_;
var expr__57224 = k__5309__auto__;
if(cljs.core.truth_((pred__57223.cljs$core$IFn$_invoke$arity$2 ? pred__57223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57224) : pred__57223.call(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57224)))){
return (new com.rpl.specter.impl.LateFn9(G__57188,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57223.cljs$core$IFn$_invoke$arity$2 ? pred__57223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57224) : pred__57223.call(null, new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57224)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,G__57188,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57223.cljs$core$IFn$_invoke$arity$2 ? pred__57223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57224) : pred__57223.call(null, new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57224)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,G__57188,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57223.cljs$core$IFn$_invoke$arity$2 ? pred__57223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57224) : pred__57223.call(null, new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57224)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,G__57188,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57223.cljs$core$IFn$_invoke$arity$2 ? pred__57223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57224) : pred__57223.call(null, new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57224)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__57188,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57223.cljs$core$IFn$_invoke$arity$2 ? pred__57223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57224) : pred__57223.call(null, new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57224)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__57188,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57223.cljs$core$IFn$_invoke$arity$2 ? pred__57223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57224) : pred__57223.call(null, new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57224)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__57188,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57223.cljs$core$IFn$_invoke$arity$2 ? pred__57223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57224) : pred__57223.call(null, new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57224)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__57188,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57223.cljs$core$IFn$_invoke$arity$2 ? pred__57223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57224) : pred__57223.call(null, new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57224)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__57188,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57223.cljs$core$IFn$_invoke$arity$2 ? pred__57223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57224) : pred__57223.call(null, new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57224)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__57188,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__57188),null));
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__57188){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__57188,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LateFn9.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null)], null);
}));

(com.rpl.specter.impl.LateFn9.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn9",null,(1),null));
}));

(com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LateFn9");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn9.
 */
com.rpl.specter.impl.__GT_LateFn9 = (function com$rpl$specter$impl$__GT_LateFn9(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8){
return (new com.rpl.specter.impl.LateFn9(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn9, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn9 = (function com$rpl$specter$impl$map__GT_LateFn9(G__57192){
var extmap__5342__auto__ = (function (){var G__57235 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57192,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218)], 0));
if(cljs.core.record_QMARK_(G__57192)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57235);
} else {
return G__57235;
}
})();
return (new com.rpl.specter.impl.LateFn9(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__57192),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__57192),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__57192),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__57192),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__57192),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__57192),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__57192),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__57192),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__57192),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__57192),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn10 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k57237,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__57245 = k57237;
var G__57245__$1 = (((G__57245 instanceof cljs.core.Keyword))?G__57245.fqn:null);
switch (G__57245__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57237,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__57252){
var vec__57253 = p__57252;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57253,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57253,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14651__auto__,dynamic_params56757){
var self__ = this;
var this__14651__auto____$1 = this;
var G__57263 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params56757);
var G__57264 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params56757);
var G__57265 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params56757);
var G__57266 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params56757);
var G__57267 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params56757);
var G__57268 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params56757);
var G__57269 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params56757);
var G__57270 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params56757);
var G__57271 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params56757);
var G__57272 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params56757);
var fexpr__57262 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params56757);
return (fexpr__57262.cljs$core$IFn$_invoke$arity$10 ? fexpr__57262.cljs$core$IFn$_invoke$arity$10(G__57263,G__57264,G__57265,G__57266,G__57267,G__57268,G__57269,G__57270,G__57271,G__57272) : fexpr__57262.call(null, G__57263,G__57264,G__57265,G__57266,G__57267,G__57268,G__57269,G__57270,G__57271,G__57272));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LateFn10{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57236){
var self__ = this;
var G__57236__$1 = this;
return (new cljs.core.RecordIter((0),G__57236__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1353979086 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57238,other57239){
var self__ = this;
var this57238__$1 = this;
return (((!((other57239 == null)))) && ((((this57238__$1.constructor === other57239.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57238__$1.fn,other57239.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57238__$1.arg0,other57239.arg0)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57238__$1.arg1,other57239.arg1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57238__$1.arg2,other57239.arg2)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57238__$1.arg3,other57239.arg3)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57238__$1.arg4,other57239.arg4)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57238__$1.arg5,other57239.arg5)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57238__$1.arg6,other57239.arg6)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57238__$1.arg7,other57239.arg7)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57238__$1.arg8,other57239.arg8)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57238__$1.arg9,other57239.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57238__$1.__extmap,other57239.__extmap)))))))))))))))))))))))))));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k57237){
var self__ = this;
var this__5307__auto____$1 = this;
var G__57289 = k57237;
var G__57289__$1 = (((G__57289 instanceof cljs.core.Keyword))?G__57289.fqn:null);
switch (G__57289__$1) {
case "fn":
case "arg0":
case "arg1":
case "arg2":
case "arg3":
case "arg4":
case "arg5":
case "arg6":
case "arg7":
case "arg8":
case "arg9":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57237);

}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__57236){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__57290 = cljs.core.keyword_identical_QMARK_;
var expr__57291 = k__5309__auto__;
if(cljs.core.truth_((pred__57290.cljs$core$IFn$_invoke$arity$2 ? pred__57290.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57291) : pred__57290.call(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57291)))){
return (new com.rpl.specter.impl.LateFn10(G__57236,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57290.cljs$core$IFn$_invoke$arity$2 ? pred__57290.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57291) : pred__57290.call(null, new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57291)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,G__57236,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57290.cljs$core$IFn$_invoke$arity$2 ? pred__57290.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57291) : pred__57290.call(null, new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57291)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,G__57236,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57290.cljs$core$IFn$_invoke$arity$2 ? pred__57290.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57291) : pred__57290.call(null, new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57291)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,G__57236,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57290.cljs$core$IFn$_invoke$arity$2 ? pred__57290.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57291) : pred__57290.call(null, new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57291)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__57236,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57290.cljs$core$IFn$_invoke$arity$2 ? pred__57290.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57291) : pred__57290.call(null, new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57291)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__57236,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57290.cljs$core$IFn$_invoke$arity$2 ? pred__57290.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57291) : pred__57290.call(null, new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57291)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__57236,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57290.cljs$core$IFn$_invoke$arity$2 ? pred__57290.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57291) : pred__57290.call(null, new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57291)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__57236,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57290.cljs$core$IFn$_invoke$arity$2 ? pred__57290.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57291) : pred__57290.call(null, new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57291)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__57236,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57290.cljs$core$IFn$_invoke$arity$2 ? pred__57290.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57291) : pred__57290.call(null, new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57291)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__57236,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57290.cljs$core$IFn$_invoke$arity$2 ? pred__57290.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__57291) : pred__57290.call(null, new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__57291)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__57236,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__57236),null));
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__57236){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__57236,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LateFn10.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null)], null);
}));

(com.rpl.specter.impl.LateFn10.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn10",null,(1),null));
}));

(com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LateFn10");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn10.
 */
com.rpl.specter.impl.__GT_LateFn10 = (function com$rpl$specter$impl$__GT_LateFn10(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9){
return (new com.rpl.specter.impl.LateFn10(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn10, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn10 = (function com$rpl$specter$impl$map__GT_LateFn10(G__57240){
var extmap__5342__auto__ = (function (){var G__57303 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57240,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905)], 0));
if(cljs.core.record_QMARK_(G__57240)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57303);
} else {
return G__57303;
}
})();
return (new com.rpl.specter.impl.LateFn10(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__57240),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__57240),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__57240),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__57240),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__57240),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__57240),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__57240),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__57240),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__57240),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__57240),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__57240),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn11 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k57308,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__57315 = k57308;
var G__57315__$1 = (((G__57315 instanceof cljs.core.Keyword))?G__57315.fqn:null);
switch (G__57315__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57308,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__57316){
var vec__57317 = p__57316;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57317,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57317,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14651__auto__,dynamic_params56758){
var self__ = this;
var this__14651__auto____$1 = this;
var G__57322 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params56758);
var G__57323 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params56758);
var G__57324 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params56758);
var G__57325 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params56758);
var G__57326 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params56758);
var G__57327 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params56758);
var G__57328 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params56758);
var G__57329 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params56758);
var G__57330 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params56758);
var G__57331 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params56758);
var G__57332 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params56758);
var fexpr__57321 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params56758);
return (fexpr__57321.cljs$core$IFn$_invoke$arity$11 ? fexpr__57321.cljs$core$IFn$_invoke$arity$11(G__57322,G__57323,G__57324,G__57325,G__57326,G__57327,G__57328,G__57329,G__57330,G__57331,G__57332) : fexpr__57321.call(null, G__57322,G__57323,G__57324,G__57325,G__57326,G__57327,G__57328,G__57329,G__57330,G__57331,G__57332));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LateFn11{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57307){
var self__ = this;
var G__57307__$1 = this;
return (new cljs.core.RecordIter((0),G__57307__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (12 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (180129418 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57309,other57310){
var self__ = this;
var this57309__$1 = this;
return (((!((other57310 == null)))) && ((((this57309__$1.constructor === other57310.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57309__$1.fn,other57310.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57309__$1.arg0,other57310.arg0)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57309__$1.arg1,other57310.arg1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57309__$1.arg2,other57310.arg2)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57309__$1.arg3,other57310.arg3)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57309__$1.arg4,other57310.arg4)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57309__$1.arg5,other57310.arg5)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57309__$1.arg6,other57310.arg6)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57309__$1.arg7,other57310.arg7)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57309__$1.arg8,other57310.arg8)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57309__$1.arg9,other57310.arg9)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57309__$1.arg10,other57310.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57309__$1.__extmap,other57310.__extmap)))))))))))))))))))))))))))));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k57308){
var self__ = this;
var this__5307__auto____$1 = this;
var G__57348 = k57308;
var G__57348__$1 = (((G__57348 instanceof cljs.core.Keyword))?G__57348.fqn:null);
switch (G__57348__$1) {
case "fn":
case "arg0":
case "arg1":
case "arg2":
case "arg3":
case "arg4":
case "arg5":
case "arg6":
case "arg7":
case "arg8":
case "arg9":
case "arg10":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57308);

}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__57307){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__57354 = cljs.core.keyword_identical_QMARK_;
var expr__57355 = k__5309__auto__;
if(cljs.core.truth_((pred__57354.cljs$core$IFn$_invoke$arity$2 ? pred__57354.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57355) : pred__57354.call(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57355)))){
return (new com.rpl.specter.impl.LateFn11(G__57307,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57354.cljs$core$IFn$_invoke$arity$2 ? pred__57354.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57355) : pred__57354.call(null, new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57355)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,G__57307,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57354.cljs$core$IFn$_invoke$arity$2 ? pred__57354.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57355) : pred__57354.call(null, new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57355)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,G__57307,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57354.cljs$core$IFn$_invoke$arity$2 ? pred__57354.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57355) : pred__57354.call(null, new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57355)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,G__57307,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57354.cljs$core$IFn$_invoke$arity$2 ? pred__57354.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57355) : pred__57354.call(null, new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57355)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__57307,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57354.cljs$core$IFn$_invoke$arity$2 ? pred__57354.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57355) : pred__57354.call(null, new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57355)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__57307,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57354.cljs$core$IFn$_invoke$arity$2 ? pred__57354.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57355) : pred__57354.call(null, new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57355)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__57307,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57354.cljs$core$IFn$_invoke$arity$2 ? pred__57354.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57355) : pred__57354.call(null, new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57355)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__57307,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57354.cljs$core$IFn$_invoke$arity$2 ? pred__57354.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57355) : pred__57354.call(null, new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57355)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__57307,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57354.cljs$core$IFn$_invoke$arity$2 ? pred__57354.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57355) : pred__57354.call(null, new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57355)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__57307,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57354.cljs$core$IFn$_invoke$arity$2 ? pred__57354.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__57355) : pred__57354.call(null, new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__57355)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__57307,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57354.cljs$core$IFn$_invoke$arity$2 ? pred__57354.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__57355) : pred__57354.call(null, new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__57355)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__57307,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__57307),null));
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__57307){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__57307,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LateFn11.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null)], null);
}));

(com.rpl.specter.impl.LateFn11.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn11",null,(1),null));
}));

(com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LateFn11");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn11.
 */
com.rpl.specter.impl.__GT_LateFn11 = (function com$rpl$specter$impl$__GT_LateFn11(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10){
return (new com.rpl.specter.impl.LateFn11(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn11, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn11 = (function com$rpl$specter$impl$map__GT_LateFn11(G__57314){
var extmap__5342__auto__ = (function (){var G__57370 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57314,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517)], 0));
if(cljs.core.record_QMARK_(G__57314)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57370);
} else {
return G__57370;
}
})();
return (new com.rpl.specter.impl.LateFn11(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__57314),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__57314),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__57314),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__57314),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__57314),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__57314),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__57314),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__57314),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__57314),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__57314),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__57314),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__57314),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn12 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k57372,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__57376 = k57372;
var G__57376__$1 = (((G__57376 instanceof cljs.core.Keyword))?G__57376.fqn:null);
switch (G__57376__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57372,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__57377){
var vec__57378 = p__57377;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57378,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57378,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14651__auto__,dynamic_params56762){
var self__ = this;
var this__14651__auto____$1 = this;
var G__57386 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params56762);
var G__57387 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params56762);
var G__57388 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params56762);
var G__57389 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params56762);
var G__57390 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params56762);
var G__57391 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params56762);
var G__57392 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params56762);
var G__57393 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params56762);
var G__57394 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params56762);
var G__57395 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params56762);
var G__57396 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params56762);
var G__57397 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params56762);
var fexpr__57385 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params56762);
return (fexpr__57385.cljs$core$IFn$_invoke$arity$12 ? fexpr__57385.cljs$core$IFn$_invoke$arity$12(G__57386,G__57387,G__57388,G__57389,G__57390,G__57391,G__57392,G__57393,G__57394,G__57395,G__57396,G__57397) : fexpr__57385.call(null, G__57386,G__57387,G__57388,G__57389,G__57390,G__57391,G__57392,G__57393,G__57394,G__57395,G__57396,G__57397));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LateFn12{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57371){
var self__ = this;
var G__57371__$1 = this;
return (new cljs.core.RecordIter((0),G__57371__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (13 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1789372539 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57373,other57374){
var self__ = this;
var this57373__$1 = this;
return (((!((other57374 == null)))) && ((((this57373__$1.constructor === other57374.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57373__$1.fn,other57374.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57373__$1.arg0,other57374.arg0)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57373__$1.arg1,other57374.arg1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57373__$1.arg2,other57374.arg2)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57373__$1.arg3,other57374.arg3)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57373__$1.arg4,other57374.arg4)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57373__$1.arg5,other57374.arg5)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57373__$1.arg6,other57374.arg6)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57373__$1.arg7,other57374.arg7)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57373__$1.arg8,other57374.arg8)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57373__$1.arg9,other57374.arg9)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57373__$1.arg10,other57374.arg10)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57373__$1.arg11,other57374.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57373__$1.__extmap,other57374.__extmap)))))))))))))))))))))))))))))));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k57372){
var self__ = this;
var this__5307__auto____$1 = this;
var G__57418 = k57372;
var G__57418__$1 = (((G__57418 instanceof cljs.core.Keyword))?G__57418.fqn:null);
switch (G__57418__$1) {
case "fn":
case "arg0":
case "arg1":
case "arg2":
case "arg3":
case "arg4":
case "arg5":
case "arg6":
case "arg7":
case "arg8":
case "arg9":
case "arg10":
case "arg11":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57372);

}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__57371){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__57422 = cljs.core.keyword_identical_QMARK_;
var expr__57423 = k__5309__auto__;
if(cljs.core.truth_((pred__57422.cljs$core$IFn$_invoke$arity$2 ? pred__57422.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57423) : pred__57422.call(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57423)))){
return (new com.rpl.specter.impl.LateFn12(G__57371,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57422.cljs$core$IFn$_invoke$arity$2 ? pred__57422.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57423) : pred__57422.call(null, new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57423)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,G__57371,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57422.cljs$core$IFn$_invoke$arity$2 ? pred__57422.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57423) : pred__57422.call(null, new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57423)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,G__57371,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57422.cljs$core$IFn$_invoke$arity$2 ? pred__57422.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57423) : pred__57422.call(null, new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57423)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,G__57371,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57422.cljs$core$IFn$_invoke$arity$2 ? pred__57422.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57423) : pred__57422.call(null, new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57423)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__57371,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57422.cljs$core$IFn$_invoke$arity$2 ? pred__57422.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57423) : pred__57422.call(null, new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57423)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__57371,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57422.cljs$core$IFn$_invoke$arity$2 ? pred__57422.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57423) : pred__57422.call(null, new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57423)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__57371,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57422.cljs$core$IFn$_invoke$arity$2 ? pred__57422.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57423) : pred__57422.call(null, new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57423)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__57371,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57422.cljs$core$IFn$_invoke$arity$2 ? pred__57422.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57423) : pred__57422.call(null, new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57423)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__57371,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57422.cljs$core$IFn$_invoke$arity$2 ? pred__57422.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57423) : pred__57422.call(null, new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57423)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__57371,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57422.cljs$core$IFn$_invoke$arity$2 ? pred__57422.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__57423) : pred__57422.call(null, new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__57423)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__57371,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57422.cljs$core$IFn$_invoke$arity$2 ? pred__57422.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__57423) : pred__57422.call(null, new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__57423)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__57371,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57422.cljs$core$IFn$_invoke$arity$2 ? pred__57422.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__57423) : pred__57422.call(null, new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__57423)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__57371,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__57371),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__57371){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__57371,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LateFn12.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null)], null);
}));

(com.rpl.specter.impl.LateFn12.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn12",null,(1),null));
}));

(com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LateFn12");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn12.
 */
com.rpl.specter.impl.__GT_LateFn12 = (function com$rpl$specter$impl$__GT_LateFn12(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11){
return (new com.rpl.specter.impl.LateFn12(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn12, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn12 = (function com$rpl$specter$impl$map__GT_LateFn12(G__57375){
var extmap__5342__auto__ = (function (){var G__57438 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57375,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070)], 0));
if(cljs.core.record_QMARK_(G__57375)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57438);
} else {
return G__57438;
}
})();
return (new com.rpl.specter.impl.LateFn12(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__57375),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__57375),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__57375),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__57375),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__57375),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__57375),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__57375),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__57375),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__57375),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__57375),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__57375),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__57375),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__57375),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn13 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k57440,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__57444 = k57440;
var G__57444__$1 = (((G__57444 instanceof cljs.core.Keyword))?G__57444.fqn:null);
switch (G__57444__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57440,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__57445){
var vec__57446 = p__57445;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57446,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57446,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14651__auto__,dynamic_params56763){
var self__ = this;
var this__14651__auto____$1 = this;
var G__57450 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params56763);
var G__57451 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params56763);
var G__57452 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params56763);
var G__57453 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params56763);
var G__57454 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params56763);
var G__57455 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params56763);
var G__57456 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params56763);
var G__57457 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params56763);
var G__57458 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params56763);
var G__57459 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params56763);
var G__57460 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params56763);
var G__57461 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params56763);
var G__57462 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params56763);
var fexpr__57449 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params56763);
return (fexpr__57449.cljs$core$IFn$_invoke$arity$13 ? fexpr__57449.cljs$core$IFn$_invoke$arity$13(G__57450,G__57451,G__57452,G__57453,G__57454,G__57455,G__57456,G__57457,G__57458,G__57459,G__57460,G__57461,G__57462) : fexpr__57449.call(null, G__57450,G__57451,G__57452,G__57453,G__57454,G__57455,G__57456,G__57457,G__57458,G__57459,G__57460,G__57461,G__57462));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LateFn13{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57439){
var self__ = this;
var G__57439__$1 = this;
return (new cljs.core.RecordIter((0),G__57439__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1059049277 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57441,other57442){
var self__ = this;
var this57441__$1 = this;
return (((!((other57442 == null)))) && ((((this57441__$1.constructor === other57442.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57441__$1.fn,other57442.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57441__$1.arg0,other57442.arg0)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57441__$1.arg1,other57442.arg1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57441__$1.arg2,other57442.arg2)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57441__$1.arg3,other57442.arg3)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57441__$1.arg4,other57442.arg4)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57441__$1.arg5,other57442.arg5)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57441__$1.arg6,other57442.arg6)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57441__$1.arg7,other57442.arg7)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57441__$1.arg8,other57442.arg8)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57441__$1.arg9,other57442.arg9)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57441__$1.arg10,other57442.arg10)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57441__$1.arg11,other57442.arg11)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57441__$1.arg12,other57442.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57441__$1.__extmap,other57442.__extmap)))))))))))))))))))))))))))))))));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k57440){
var self__ = this;
var this__5307__auto____$1 = this;
var G__57485 = k57440;
var G__57485__$1 = (((G__57485 instanceof cljs.core.Keyword))?G__57485.fqn:null);
switch (G__57485__$1) {
case "fn":
case "arg0":
case "arg1":
case "arg2":
case "arg3":
case "arg4":
case "arg5":
case "arg6":
case "arg7":
case "arg8":
case "arg9":
case "arg10":
case "arg11":
case "arg12":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57440);

}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__57439){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__57486 = cljs.core.keyword_identical_QMARK_;
var expr__57487 = k__5309__auto__;
if(cljs.core.truth_((pred__57486.cljs$core$IFn$_invoke$arity$2 ? pred__57486.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57487) : pred__57486.call(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57487)))){
return (new com.rpl.specter.impl.LateFn13(G__57439,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57486.cljs$core$IFn$_invoke$arity$2 ? pred__57486.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57487) : pred__57486.call(null, new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57487)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,G__57439,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57486.cljs$core$IFn$_invoke$arity$2 ? pred__57486.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57487) : pred__57486.call(null, new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57487)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,G__57439,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57486.cljs$core$IFn$_invoke$arity$2 ? pred__57486.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57487) : pred__57486.call(null, new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57487)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,G__57439,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57486.cljs$core$IFn$_invoke$arity$2 ? pred__57486.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57487) : pred__57486.call(null, new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57487)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__57439,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57486.cljs$core$IFn$_invoke$arity$2 ? pred__57486.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57487) : pred__57486.call(null, new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57487)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__57439,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57486.cljs$core$IFn$_invoke$arity$2 ? pred__57486.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57487) : pred__57486.call(null, new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57487)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__57439,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57486.cljs$core$IFn$_invoke$arity$2 ? pred__57486.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57487) : pred__57486.call(null, new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57487)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__57439,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57486.cljs$core$IFn$_invoke$arity$2 ? pred__57486.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57487) : pred__57486.call(null, new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57487)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__57439,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57486.cljs$core$IFn$_invoke$arity$2 ? pred__57486.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57487) : pred__57486.call(null, new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57487)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__57439,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57486.cljs$core$IFn$_invoke$arity$2 ? pred__57486.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__57487) : pred__57486.call(null, new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__57487)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__57439,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57486.cljs$core$IFn$_invoke$arity$2 ? pred__57486.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__57487) : pred__57486.call(null, new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__57487)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__57439,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57486.cljs$core$IFn$_invoke$arity$2 ? pred__57486.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__57487) : pred__57486.call(null, new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__57487)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__57439,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57486.cljs$core$IFn$_invoke$arity$2 ? pred__57486.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__57487) : pred__57486.call(null, new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__57487)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__57439,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__57439),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__57439){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__57439,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LateFn13.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null)], null);
}));

(com.rpl.specter.impl.LateFn13.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn13",null,(1),null));
}));

(com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LateFn13");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn13.
 */
com.rpl.specter.impl.__GT_LateFn13 = (function com$rpl$specter$impl$__GT_LateFn13(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12){
return (new com.rpl.specter.impl.LateFn13(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn13, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn13 = (function com$rpl$specter$impl$map__GT_LateFn13(G__57443){
var extmap__5342__auto__ = (function (){var G__57502 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57443,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436)], 0));
if(cljs.core.record_QMARK_(G__57443)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57502);
} else {
return G__57502;
}
})();
return (new com.rpl.specter.impl.LateFn13(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__57443),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__57443),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__57443),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__57443),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__57443),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__57443),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__57443),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__57443),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__57443),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__57443),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__57443),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__57443),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__57443),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__57443),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn14 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k57508,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__57517 = k57508;
var G__57517__$1 = (((G__57517 instanceof cljs.core.Keyword))?G__57517.fqn:null);
switch (G__57517__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57508,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__57518){
var vec__57521 = p__57518;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57521,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57521,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14651__auto__,dynamic_params56764){
var self__ = this;
var this__14651__auto____$1 = this;
var G__57525 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params56764);
var G__57526 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params56764);
var G__57527 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params56764);
var G__57528 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params56764);
var G__57529 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params56764);
var G__57530 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params56764);
var G__57531 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params56764);
var G__57532 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params56764);
var G__57533 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params56764);
var G__57534 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params56764);
var G__57535 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params56764);
var G__57536 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params56764);
var G__57537 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params56764);
var G__57538 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params56764);
var fexpr__57524 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params56764);
return (fexpr__57524.cljs$core$IFn$_invoke$arity$14 ? fexpr__57524.cljs$core$IFn$_invoke$arity$14(G__57525,G__57526,G__57527,G__57528,G__57529,G__57530,G__57531,G__57532,G__57533,G__57534,G__57535,G__57536,G__57537,G__57538) : fexpr__57524.call(null, G__57525,G__57526,G__57527,G__57528,G__57529,G__57530,G__57531,G__57532,G__57533,G__57534,G__57535,G__57536,G__57537,G__57538));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LateFn14{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57507){
var self__ = this;
var G__57507__$1 = this;
return (new cljs.core.RecordIter((0),G__57507__$1,15,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (15 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (448885285 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57509,other57510){
var self__ = this;
var this57509__$1 = this;
return (((!((other57510 == null)))) && ((((this57509__$1.constructor === other57510.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57509__$1.fn,other57510.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57509__$1.arg0,other57510.arg0)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57509__$1.arg1,other57510.arg1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57509__$1.arg2,other57510.arg2)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57509__$1.arg3,other57510.arg3)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57509__$1.arg4,other57510.arg4)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57509__$1.arg5,other57510.arg5)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57509__$1.arg6,other57510.arg6)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57509__$1.arg7,other57510.arg7)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57509__$1.arg8,other57510.arg8)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57509__$1.arg9,other57510.arg9)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57509__$1.arg10,other57510.arg10)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57509__$1.arg11,other57510.arg11)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57509__$1.arg12,other57510.arg12)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57509__$1.arg13,other57510.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57509__$1.__extmap,other57510.__extmap)))))))))))))))))))))))))))))))))));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k57508){
var self__ = this;
var this__5307__auto____$1 = this;
var G__57554 = k57508;
var G__57554__$1 = (((G__57554 instanceof cljs.core.Keyword))?G__57554.fqn:null);
switch (G__57554__$1) {
case "fn":
case "arg0":
case "arg1":
case "arg2":
case "arg3":
case "arg4":
case "arg5":
case "arg6":
case "arg7":
case "arg8":
case "arg9":
case "arg10":
case "arg11":
case "arg12":
case "arg13":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57508);

}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__57507){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__57556 = cljs.core.keyword_identical_QMARK_;
var expr__57557 = k__5309__auto__;
if(cljs.core.truth_((pred__57556.cljs$core$IFn$_invoke$arity$2 ? pred__57556.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57557) : pred__57556.call(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57557)))){
return (new com.rpl.specter.impl.LateFn14(G__57507,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57556.cljs$core$IFn$_invoke$arity$2 ? pred__57556.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57557) : pred__57556.call(null, new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57557)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,G__57507,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57556.cljs$core$IFn$_invoke$arity$2 ? pred__57556.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57557) : pred__57556.call(null, new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57557)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,G__57507,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57556.cljs$core$IFn$_invoke$arity$2 ? pred__57556.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57557) : pred__57556.call(null, new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57557)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,G__57507,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57556.cljs$core$IFn$_invoke$arity$2 ? pred__57556.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57557) : pred__57556.call(null, new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57557)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__57507,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57556.cljs$core$IFn$_invoke$arity$2 ? pred__57556.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57557) : pred__57556.call(null, new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57557)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__57507,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57556.cljs$core$IFn$_invoke$arity$2 ? pred__57556.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57557) : pred__57556.call(null, new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57557)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__57507,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57556.cljs$core$IFn$_invoke$arity$2 ? pred__57556.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57557) : pred__57556.call(null, new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57557)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__57507,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57556.cljs$core$IFn$_invoke$arity$2 ? pred__57556.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57557) : pred__57556.call(null, new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57557)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__57507,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57556.cljs$core$IFn$_invoke$arity$2 ? pred__57556.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57557) : pred__57556.call(null, new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57557)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__57507,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57556.cljs$core$IFn$_invoke$arity$2 ? pred__57556.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__57557) : pred__57556.call(null, new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__57557)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__57507,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57556.cljs$core$IFn$_invoke$arity$2 ? pred__57556.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__57557) : pred__57556.call(null, new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__57557)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__57507,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57556.cljs$core$IFn$_invoke$arity$2 ? pred__57556.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__57557) : pred__57556.call(null, new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__57557)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__57507,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57556.cljs$core$IFn$_invoke$arity$2 ? pred__57556.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__57557) : pred__57556.call(null, new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__57557)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__57507,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57556.cljs$core$IFn$_invoke$arity$2 ? pred__57556.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__57557) : pred__57556.call(null, new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__57557)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__57507,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__57507),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__57507){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__57507,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LateFn14.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null)], null);
}));

(com.rpl.specter.impl.LateFn14.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn14",null,(1),null));
}));

(com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LateFn14");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn14.
 */
com.rpl.specter.impl.__GT_LateFn14 = (function com$rpl$specter$impl$__GT_LateFn14(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13){
return (new com.rpl.specter.impl.LateFn14(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn14, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn14 = (function com$rpl$specter$impl$map__GT_LateFn14(G__57511){
var extmap__5342__auto__ = (function (){var G__57568 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57511,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392)], 0));
if(cljs.core.record_QMARK_(G__57511)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57568);
} else {
return G__57568;
}
})();
return (new com.rpl.specter.impl.LateFn14(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__57511),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__57511),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__57511),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__57511),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__57511),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__57511),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__57511),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__57511),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__57511),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__57511),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__57511),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__57511),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__57511),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__57511),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__57511),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn15 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k57573,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__57587 = k57573;
var G__57587__$1 = (((G__57587 instanceof cljs.core.Keyword))?G__57587.fqn:null);
switch (G__57587__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57573,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__57591){
var vec__57592 = p__57591;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57592,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57592,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14651__auto__,dynamic_params56765){
var self__ = this;
var this__14651__auto____$1 = this;
var G__57600 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params56765);
var G__57601 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params56765);
var G__57602 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params56765);
var G__57603 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params56765);
var G__57604 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params56765);
var G__57605 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params56765);
var G__57606 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params56765);
var G__57607 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params56765);
var G__57608 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params56765);
var G__57609 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params56765);
var G__57610 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params56765);
var G__57611 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params56765);
var G__57612 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params56765);
var G__57613 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params56765);
var G__57614 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params56765);
var fexpr__57599 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params56765);
return (fexpr__57599.cljs$core$IFn$_invoke$arity$15 ? fexpr__57599.cljs$core$IFn$_invoke$arity$15(G__57600,G__57601,G__57602,G__57603,G__57604,G__57605,G__57606,G__57607,G__57608,G__57609,G__57610,G__57611,G__57612,G__57613,G__57614) : fexpr__57599.call(null, G__57600,G__57601,G__57602,G__57603,G__57604,G__57605,G__57606,G__57607,G__57608,G__57609,G__57610,G__57611,G__57612,G__57613,G__57614));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LateFn15{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57572){
var self__ = this;
var G__57572__$1 = this;
return (new cljs.core.RecordIter((0),G__57572__$1,16,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (16 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (553496616 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57574,other57575){
var self__ = this;
var this57574__$1 = this;
return (((!((other57575 == null)))) && ((((this57574__$1.constructor === other57575.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57574__$1.fn,other57575.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57574__$1.arg0,other57575.arg0)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57574__$1.arg1,other57575.arg1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57574__$1.arg2,other57575.arg2)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57574__$1.arg3,other57575.arg3)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57574__$1.arg4,other57575.arg4)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57574__$1.arg5,other57575.arg5)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57574__$1.arg6,other57575.arg6)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57574__$1.arg7,other57575.arg7)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57574__$1.arg8,other57575.arg8)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57574__$1.arg9,other57575.arg9)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57574__$1.arg10,other57575.arg10)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57574__$1.arg11,other57575.arg11)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57574__$1.arg12,other57575.arg12)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57574__$1.arg13,other57575.arg13)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57574__$1.arg14,other57575.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57574__$1.__extmap,other57575.__extmap)))))))))))))))))))))))))))))))))))));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k57573){
var self__ = this;
var this__5307__auto____$1 = this;
var G__57615 = k57573;
var G__57615__$1 = (((G__57615 instanceof cljs.core.Keyword))?G__57615.fqn:null);
switch (G__57615__$1) {
case "fn":
case "arg0":
case "arg1":
case "arg2":
case "arg3":
case "arg4":
case "arg5":
case "arg6":
case "arg7":
case "arg8":
case "arg9":
case "arg10":
case "arg11":
case "arg12":
case "arg13":
case "arg14":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57573);

}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__57572){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__57616 = cljs.core.keyword_identical_QMARK_;
var expr__57617 = k__5309__auto__;
if(cljs.core.truth_((pred__57616.cljs$core$IFn$_invoke$arity$2 ? pred__57616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57617) : pred__57616.call(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57617)))){
return (new com.rpl.specter.impl.LateFn15(G__57572,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57616.cljs$core$IFn$_invoke$arity$2 ? pred__57616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57617) : pred__57616.call(null, new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57617)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,G__57572,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57616.cljs$core$IFn$_invoke$arity$2 ? pred__57616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57617) : pred__57616.call(null, new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57617)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,G__57572,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57616.cljs$core$IFn$_invoke$arity$2 ? pred__57616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57617) : pred__57616.call(null, new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57617)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,G__57572,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57616.cljs$core$IFn$_invoke$arity$2 ? pred__57616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57617) : pred__57616.call(null, new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57617)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__57572,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57616.cljs$core$IFn$_invoke$arity$2 ? pred__57616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57617) : pred__57616.call(null, new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57617)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__57572,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57616.cljs$core$IFn$_invoke$arity$2 ? pred__57616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57617) : pred__57616.call(null, new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57617)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__57572,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57616.cljs$core$IFn$_invoke$arity$2 ? pred__57616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57617) : pred__57616.call(null, new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57617)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__57572,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57616.cljs$core$IFn$_invoke$arity$2 ? pred__57616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57617) : pred__57616.call(null, new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57617)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__57572,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57616.cljs$core$IFn$_invoke$arity$2 ? pred__57616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57617) : pred__57616.call(null, new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57617)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__57572,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57616.cljs$core$IFn$_invoke$arity$2 ? pred__57616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__57617) : pred__57616.call(null, new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__57617)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__57572,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57616.cljs$core$IFn$_invoke$arity$2 ? pred__57616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__57617) : pred__57616.call(null, new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__57617)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__57572,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57616.cljs$core$IFn$_invoke$arity$2 ? pred__57616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__57617) : pred__57616.call(null, new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__57617)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__57572,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57616.cljs$core$IFn$_invoke$arity$2 ? pred__57616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__57617) : pred__57616.call(null, new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__57617)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__57572,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57616.cljs$core$IFn$_invoke$arity$2 ? pred__57616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__57617) : pred__57616.call(null, new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__57617)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__57572,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57616.cljs$core$IFn$_invoke$arity$2 ? pred__57616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__57617) : pred__57616.call(null, new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__57617)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__57572,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__57572),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__57572){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__57572,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LateFn15.getBasis = (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null)], null);
}));

(com.rpl.specter.impl.LateFn15.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn15",null,(1),null));
}));

(com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LateFn15");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn15.
 */
com.rpl.specter.impl.__GT_LateFn15 = (function com$rpl$specter$impl$__GT_LateFn15(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14){
return (new com.rpl.specter.impl.LateFn15(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn15, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn15 = (function com$rpl$specter$impl$map__GT_LateFn15(G__57579){
var extmap__5342__auto__ = (function (){var G__57619 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57579,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778)], 0));
if(cljs.core.record_QMARK_(G__57579)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57619);
} else {
return G__57619;
}
})();
return (new com.rpl.specter.impl.LateFn15(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__57579),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__57579),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__57579),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__57579),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__57579),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__57579),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__57579),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__57579),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__57579),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__57579),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__57579),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__57579),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__57579),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__57579),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__57579),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__57579),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn16 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k57621,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__57628 = k57621;
var G__57628__$1 = (((G__57628 instanceof cljs.core.Keyword))?G__57628.fqn:null);
switch (G__57628__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57621,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__57632){
var vec__57633 = p__57632;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57633,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57633,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14651__auto__,dynamic_params56766){
var self__ = this;
var this__14651__auto____$1 = this;
var G__57639 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params56766);
var G__57640 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params56766);
var G__57641 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params56766);
var G__57642 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params56766);
var G__57643 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params56766);
var G__57644 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params56766);
var G__57645 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params56766);
var G__57646 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params56766);
var G__57647 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params56766);
var G__57648 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params56766);
var G__57649 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params56766);
var G__57650 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params56766);
var G__57651 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params56766);
var G__57652 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params56766);
var G__57653 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params56766);
var G__57654 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params56766);
var fexpr__57638 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params56766);
return (fexpr__57638.cljs$core$IFn$_invoke$arity$16 ? fexpr__57638.cljs$core$IFn$_invoke$arity$16(G__57639,G__57640,G__57641,G__57642,G__57643,G__57644,G__57645,G__57646,G__57647,G__57648,G__57649,G__57650,G__57651,G__57652,G__57653,G__57654) : fexpr__57638.call(null, G__57639,G__57640,G__57641,G__57642,G__57643,G__57644,G__57645,G__57646,G__57647,G__57648,G__57649,G__57650,G__57651,G__57652,G__57653,G__57654));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LateFn16{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57620){
var self__ = this;
var G__57620__$1 = this;
return (new cljs.core.RecordIter((0),G__57620__$1,17,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (17 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-280845773 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57622,other57623){
var self__ = this;
var this57622__$1 = this;
return (((!((other57623 == null)))) && ((((this57622__$1.constructor === other57623.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57622__$1.fn,other57623.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57622__$1.arg0,other57623.arg0)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57622__$1.arg1,other57623.arg1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57622__$1.arg2,other57623.arg2)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57622__$1.arg3,other57623.arg3)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57622__$1.arg4,other57623.arg4)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57622__$1.arg5,other57623.arg5)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57622__$1.arg6,other57623.arg6)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57622__$1.arg7,other57623.arg7)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57622__$1.arg8,other57623.arg8)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57622__$1.arg9,other57623.arg9)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57622__$1.arg10,other57623.arg10)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57622__$1.arg11,other57623.arg11)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57622__$1.arg12,other57623.arg12)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57622__$1.arg13,other57623.arg13)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57622__$1.arg14,other57623.arg14)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57622__$1.arg15,other57623.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57622__$1.__extmap,other57623.__extmap)))))))))))))))))))))))))))))))))))))));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k57621){
var self__ = this;
var this__5307__auto____$1 = this;
var G__57675 = k57621;
var G__57675__$1 = (((G__57675 instanceof cljs.core.Keyword))?G__57675.fqn:null);
switch (G__57675__$1) {
case "fn":
case "arg0":
case "arg1":
case "arg2":
case "arg3":
case "arg4":
case "arg5":
case "arg6":
case "arg7":
case "arg8":
case "arg9":
case "arg10":
case "arg11":
case "arg12":
case "arg13":
case "arg14":
case "arg15":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57621);

}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__57620){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__57676 = cljs.core.keyword_identical_QMARK_;
var expr__57677 = k__5309__auto__;
if(cljs.core.truth_((pred__57676.cljs$core$IFn$_invoke$arity$2 ? pred__57676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57677) : pred__57676.call(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57677)))){
return (new com.rpl.specter.impl.LateFn16(G__57620,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57676.cljs$core$IFn$_invoke$arity$2 ? pred__57676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57677) : pred__57676.call(null, new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57677)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,G__57620,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57676.cljs$core$IFn$_invoke$arity$2 ? pred__57676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57677) : pred__57676.call(null, new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57677)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,G__57620,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57676.cljs$core$IFn$_invoke$arity$2 ? pred__57676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57677) : pred__57676.call(null, new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57677)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,G__57620,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57676.cljs$core$IFn$_invoke$arity$2 ? pred__57676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57677) : pred__57676.call(null, new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57677)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__57620,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57676.cljs$core$IFn$_invoke$arity$2 ? pred__57676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57677) : pred__57676.call(null, new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57677)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__57620,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57676.cljs$core$IFn$_invoke$arity$2 ? pred__57676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57677) : pred__57676.call(null, new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57677)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__57620,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57676.cljs$core$IFn$_invoke$arity$2 ? pred__57676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57677) : pred__57676.call(null, new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57677)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__57620,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57676.cljs$core$IFn$_invoke$arity$2 ? pred__57676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57677) : pred__57676.call(null, new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57677)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__57620,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57676.cljs$core$IFn$_invoke$arity$2 ? pred__57676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57677) : pred__57676.call(null, new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57677)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__57620,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57676.cljs$core$IFn$_invoke$arity$2 ? pred__57676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__57677) : pred__57676.call(null, new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__57677)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__57620,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57676.cljs$core$IFn$_invoke$arity$2 ? pred__57676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__57677) : pred__57676.call(null, new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__57677)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__57620,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57676.cljs$core$IFn$_invoke$arity$2 ? pred__57676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__57677) : pred__57676.call(null, new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__57677)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__57620,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57676.cljs$core$IFn$_invoke$arity$2 ? pred__57676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__57677) : pred__57676.call(null, new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__57677)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__57620,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57676.cljs$core$IFn$_invoke$arity$2 ? pred__57676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__57677) : pred__57676.call(null, new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__57677)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__57620,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57676.cljs$core$IFn$_invoke$arity$2 ? pred__57676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__57677) : pred__57676.call(null, new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__57677)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__57620,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57676.cljs$core$IFn$_invoke$arity$2 ? pred__57676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__57677) : pred__57676.call(null, new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__57677)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__57620,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__57620),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__57620){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__57620,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LateFn16.getBasis = (function (){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null)], null);
}));

(com.rpl.specter.impl.LateFn16.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn16",null,(1),null));
}));

(com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LateFn16");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn16.
 */
com.rpl.specter.impl.__GT_LateFn16 = (function com$rpl$specter$impl$__GT_LateFn16(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15){
return (new com.rpl.specter.impl.LateFn16(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn16, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn16 = (function com$rpl$specter$impl$map__GT_LateFn16(G__57624){
var extmap__5342__auto__ = (function (){var G__57682 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57624,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677)], 0));
if(cljs.core.record_QMARK_(G__57624)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57682);
} else {
return G__57682;
}
})();
return (new com.rpl.specter.impl.LateFn16(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__57624),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__57624),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__57624),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__57624),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__57624),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__57624),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__57624),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__57624),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__57624),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__57624),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__57624),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__57624),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__57624),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__57624),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__57624),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__57624),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__57624),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn17 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k57684,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__57689 = k57684;
var G__57689__$1 = (((G__57689 instanceof cljs.core.Keyword))?G__57689.fqn:null);
switch (G__57689__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57684,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__57690){
var vec__57691 = p__57690;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57691,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57691,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14651__auto__,dynamic_params56767){
var self__ = this;
var this__14651__auto____$1 = this;
var G__57695 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params56767);
var G__57696 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params56767);
var G__57697 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params56767);
var G__57698 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params56767);
var G__57699 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params56767);
var G__57700 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params56767);
var G__57701 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params56767);
var G__57702 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params56767);
var G__57703 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params56767);
var G__57704 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params56767);
var G__57705 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params56767);
var G__57706 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params56767);
var G__57707 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params56767);
var G__57708 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params56767);
var G__57709 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params56767);
var G__57710 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params56767);
var G__57711 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params56767);
var fexpr__57694 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params56767);
return (fexpr__57694.cljs$core$IFn$_invoke$arity$17 ? fexpr__57694.cljs$core$IFn$_invoke$arity$17(G__57695,G__57696,G__57697,G__57698,G__57699,G__57700,G__57701,G__57702,G__57703,G__57704,G__57705,G__57706,G__57707,G__57708,G__57709,G__57710,G__57711) : fexpr__57694.call(null, G__57695,G__57696,G__57697,G__57698,G__57699,G__57700,G__57701,G__57702,G__57703,G__57704,G__57705,G__57706,G__57707,G__57708,G__57709,G__57710,G__57711));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LateFn17{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57683){
var self__ = this;
var G__57683__$1 = this;
return (new cljs.core.RecordIter((0),G__57683__$1,18,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (18 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1493409369 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57685,other57686){
var self__ = this;
var this57685__$1 = this;
return (((!((other57686 == null)))) && ((((this57685__$1.constructor === other57686.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57685__$1.fn,other57686.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57685__$1.arg0,other57686.arg0)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57685__$1.arg1,other57686.arg1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57685__$1.arg2,other57686.arg2)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57685__$1.arg3,other57686.arg3)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57685__$1.arg4,other57686.arg4)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57685__$1.arg5,other57686.arg5)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57685__$1.arg6,other57686.arg6)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57685__$1.arg7,other57686.arg7)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57685__$1.arg8,other57686.arg8)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57685__$1.arg9,other57686.arg9)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57685__$1.arg10,other57686.arg10)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57685__$1.arg11,other57686.arg11)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57685__$1.arg12,other57686.arg12)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57685__$1.arg13,other57686.arg13)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57685__$1.arg14,other57686.arg14)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57685__$1.arg15,other57686.arg15)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57685__$1.arg16,other57686.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57685__$1.__extmap,other57686.__extmap)))))))))))))))))))))))))))))))))))))))));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k57684){
var self__ = this;
var this__5307__auto____$1 = this;
var G__57717 = k57684;
var G__57717__$1 = (((G__57717 instanceof cljs.core.Keyword))?G__57717.fqn:null);
switch (G__57717__$1) {
case "fn":
case "arg0":
case "arg1":
case "arg2":
case "arg3":
case "arg4":
case "arg5":
case "arg6":
case "arg7":
case "arg8":
case "arg9":
case "arg10":
case "arg11":
case "arg12":
case "arg13":
case "arg14":
case "arg15":
case "arg16":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57684);

}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__57683){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__57718 = cljs.core.keyword_identical_QMARK_;
var expr__57719 = k__5309__auto__;
if(cljs.core.truth_((pred__57718.cljs$core$IFn$_invoke$arity$2 ? pred__57718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57719) : pred__57718.call(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57719)))){
return (new com.rpl.specter.impl.LateFn17(G__57683,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57718.cljs$core$IFn$_invoke$arity$2 ? pred__57718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57719) : pred__57718.call(null, new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57719)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,G__57683,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57718.cljs$core$IFn$_invoke$arity$2 ? pred__57718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57719) : pred__57718.call(null, new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57719)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,G__57683,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57718.cljs$core$IFn$_invoke$arity$2 ? pred__57718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57719) : pred__57718.call(null, new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57719)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,G__57683,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57718.cljs$core$IFn$_invoke$arity$2 ? pred__57718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57719) : pred__57718.call(null, new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57719)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__57683,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57718.cljs$core$IFn$_invoke$arity$2 ? pred__57718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57719) : pred__57718.call(null, new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57719)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__57683,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57718.cljs$core$IFn$_invoke$arity$2 ? pred__57718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57719) : pred__57718.call(null, new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57719)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__57683,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57718.cljs$core$IFn$_invoke$arity$2 ? pred__57718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57719) : pred__57718.call(null, new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57719)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__57683,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57718.cljs$core$IFn$_invoke$arity$2 ? pred__57718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57719) : pred__57718.call(null, new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57719)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__57683,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57718.cljs$core$IFn$_invoke$arity$2 ? pred__57718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57719) : pred__57718.call(null, new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57719)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__57683,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57718.cljs$core$IFn$_invoke$arity$2 ? pred__57718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__57719) : pred__57718.call(null, new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__57719)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__57683,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57718.cljs$core$IFn$_invoke$arity$2 ? pred__57718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__57719) : pred__57718.call(null, new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__57719)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__57683,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57718.cljs$core$IFn$_invoke$arity$2 ? pred__57718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__57719) : pred__57718.call(null, new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__57719)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__57683,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57718.cljs$core$IFn$_invoke$arity$2 ? pred__57718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__57719) : pred__57718.call(null, new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__57719)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__57683,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57718.cljs$core$IFn$_invoke$arity$2 ? pred__57718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__57719) : pred__57718.call(null, new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__57719)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__57683,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57718.cljs$core$IFn$_invoke$arity$2 ? pred__57718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__57719) : pred__57718.call(null, new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__57719)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__57683,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57718.cljs$core$IFn$_invoke$arity$2 ? pred__57718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__57719) : pred__57718.call(null, new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__57719)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__57683,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57718.cljs$core$IFn$_invoke$arity$2 ? pred__57718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__57719) : pred__57718.call(null, new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__57719)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__57683,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__57683),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__57683){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__57683,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LateFn17.getBasis = (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null)], null);
}));

(com.rpl.specter.impl.LateFn17.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn17",null,(1),null));
}));

(com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LateFn17");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn17.
 */
com.rpl.specter.impl.__GT_LateFn17 = (function com$rpl$specter$impl$__GT_LateFn17(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16){
return (new com.rpl.specter.impl.LateFn17(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn17, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn17 = (function com$rpl$specter$impl$map__GT_LateFn17(G__57687){
var extmap__5342__auto__ = (function (){var G__57724 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57687,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546)], 0));
if(cljs.core.record_QMARK_(G__57687)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57724);
} else {
return G__57724;
}
})();
return (new com.rpl.specter.impl.LateFn17(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__57687),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__57687),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__57687),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__57687),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__57687),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__57687),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__57687),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__57687),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__57687),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__57687),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__57687),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__57687),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__57687),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__57687),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__57687),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__57687),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__57687),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__57687),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn18 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.arg17 = arg17;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k57726,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__57734 = k57726;
var G__57734__$1 = (((G__57734 instanceof cljs.core.Keyword))?G__57734.fqn:null);
switch (G__57734__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
case "arg17":
return self__.arg17;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57726,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__57737){
var vec__57740 = p__57737;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57740,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57740,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14651__auto__,dynamic_params56768){
var self__ = this;
var this__14651__auto____$1 = this;
var G__57745 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params56768);
var G__57746 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params56768);
var G__57747 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params56768);
var G__57748 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params56768);
var G__57749 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params56768);
var G__57750 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params56768);
var G__57751 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params56768);
var G__57752 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params56768);
var G__57753 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params56768);
var G__57754 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params56768);
var G__57755 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params56768);
var G__57757 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params56768);
var G__57758 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params56768);
var G__57759 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params56768);
var G__57760 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params56768);
var G__57761 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params56768);
var G__57762 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params56768);
var G__57763 = com.rpl.specter.impl.late_resolve(self__.arg17,dynamic_params56768);
var fexpr__57744 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params56768);
return (fexpr__57744.cljs$core$IFn$_invoke$arity$18 ? fexpr__57744.cljs$core$IFn$_invoke$arity$18(G__57745,G__57746,G__57747,G__57748,G__57749,G__57750,G__57751,G__57752,G__57753,G__57754,G__57755,G__57757,G__57758,G__57759,G__57760,G__57761,G__57762,G__57763) : fexpr__57744.call(null, G__57745,G__57746,G__57747,G__57748,G__57749,G__57750,G__57751,G__57752,G__57753,G__57754,G__57755,G__57757,G__57758,G__57759,G__57760,G__57761,G__57762,G__57763));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LateFn18{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57725){
var self__ = this;
var G__57725__$1 = this;
return (new cljs.core.RecordIter((0),G__57725__$1,19,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (19 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (295131237 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57727,other57728){
var self__ = this;
var this57727__$1 = this;
return (((!((other57728 == null)))) && ((((this57727__$1.constructor === other57728.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57727__$1.fn,other57728.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57727__$1.arg0,other57728.arg0)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57727__$1.arg1,other57728.arg1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57727__$1.arg2,other57728.arg2)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57727__$1.arg3,other57728.arg3)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57727__$1.arg4,other57728.arg4)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57727__$1.arg5,other57728.arg5)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57727__$1.arg6,other57728.arg6)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57727__$1.arg7,other57728.arg7)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57727__$1.arg8,other57728.arg8)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57727__$1.arg9,other57728.arg9)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57727__$1.arg10,other57728.arg10)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57727__$1.arg11,other57728.arg11)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57727__$1.arg12,other57728.arg12)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57727__$1.arg13,other57728.arg13)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57727__$1.arg14,other57728.arg14)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57727__$1.arg15,other57728.arg15)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57727__$1.arg16,other57728.arg16)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57727__$1.arg17,other57728.arg17)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57727__$1.__extmap,other57728.__extmap)))))))))))))))))))))))))))))))))))))))))));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k57726){
var self__ = this;
var this__5307__auto____$1 = this;
var G__57806 = k57726;
var G__57806__$1 = (((G__57806 instanceof cljs.core.Keyword))?G__57806.fqn:null);
switch (G__57806__$1) {
case "fn":
case "arg0":
case "arg1":
case "arg2":
case "arg3":
case "arg4":
case "arg5":
case "arg6":
case "arg7":
case "arg8":
case "arg9":
case "arg10":
case "arg11":
case "arg12":
case "arg13":
case "arg14":
case "arg15":
case "arg16":
case "arg17":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57726);

}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__57725){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__57807 = cljs.core.keyword_identical_QMARK_;
var expr__57808 = k__5309__auto__;
if(cljs.core.truth_((pred__57807.cljs$core$IFn$_invoke$arity$2 ? pred__57807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57808) : pred__57807.call(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57808)))){
return (new com.rpl.specter.impl.LateFn18(G__57725,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57807.cljs$core$IFn$_invoke$arity$2 ? pred__57807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57808) : pred__57807.call(null, new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57808)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,G__57725,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57807.cljs$core$IFn$_invoke$arity$2 ? pred__57807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57808) : pred__57807.call(null, new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57808)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,G__57725,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57807.cljs$core$IFn$_invoke$arity$2 ? pred__57807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57808) : pred__57807.call(null, new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57808)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,G__57725,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57807.cljs$core$IFn$_invoke$arity$2 ? pred__57807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57808) : pred__57807.call(null, new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57808)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__57725,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57807.cljs$core$IFn$_invoke$arity$2 ? pred__57807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57808) : pred__57807.call(null, new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57808)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__57725,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57807.cljs$core$IFn$_invoke$arity$2 ? pred__57807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57808) : pred__57807.call(null, new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57808)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__57725,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57807.cljs$core$IFn$_invoke$arity$2 ? pred__57807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57808) : pred__57807.call(null, new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57808)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__57725,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57807.cljs$core$IFn$_invoke$arity$2 ? pred__57807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57808) : pred__57807.call(null, new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57808)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__57725,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57807.cljs$core$IFn$_invoke$arity$2 ? pred__57807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57808) : pred__57807.call(null, new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57808)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__57725,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57807.cljs$core$IFn$_invoke$arity$2 ? pred__57807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__57808) : pred__57807.call(null, new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__57808)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__57725,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57807.cljs$core$IFn$_invoke$arity$2 ? pred__57807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__57808) : pred__57807.call(null, new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__57808)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__57725,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57807.cljs$core$IFn$_invoke$arity$2 ? pred__57807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__57808) : pred__57807.call(null, new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__57808)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__57725,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57807.cljs$core$IFn$_invoke$arity$2 ? pred__57807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__57808) : pred__57807.call(null, new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__57808)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__57725,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57807.cljs$core$IFn$_invoke$arity$2 ? pred__57807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__57808) : pred__57807.call(null, new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__57808)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__57725,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57807.cljs$core$IFn$_invoke$arity$2 ? pred__57807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__57808) : pred__57807.call(null, new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__57808)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__57725,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57807.cljs$core$IFn$_invoke$arity$2 ? pred__57807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__57808) : pred__57807.call(null, new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__57808)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__57725,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57807.cljs$core$IFn$_invoke$arity$2 ? pred__57807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__57808) : pred__57807.call(null, new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__57808)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__57725,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57807.cljs$core$IFn$_invoke$arity$2 ? pred__57807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__57808) : pred__57807.call(null, new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__57808)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__57725,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__57725),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__57725){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__57725,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LateFn18.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null),new cljs.core.Symbol(null,"arg17","arg17",568348045,null)], null);
}));

(com.rpl.specter.impl.LateFn18.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn18",null,(1),null));
}));

(com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LateFn18");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn18.
 */
com.rpl.specter.impl.__GT_LateFn18 = (function com$rpl$specter$impl$__GT_LateFn18(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17){
return (new com.rpl.specter.impl.LateFn18(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn18, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn18 = (function com$rpl$specter$impl$map__GT_LateFn18(G__57729){
var extmap__5342__auto__ = (function (){var G__57819 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57729,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482)], 0));
if(cljs.core.record_QMARK_(G__57729)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57819);
} else {
return G__57819;
}
})();
return (new com.rpl.specter.impl.LateFn18(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__57729),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__57729),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__57729),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__57729),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__57729),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__57729),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__57729),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__57729),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__57729),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__57729),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__57729),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__57729),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__57729),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__57729),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__57729),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__57729),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__57729),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__57729),new cljs.core.Keyword(null,"arg17","arg17",-1072183482).cljs$core$IFn$_invoke$arity$1(G__57729),null,cljs.core.not_empty(extmap__5342__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn19 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.arg17 = arg17;
this.arg18 = arg18;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k57821,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__57832 = k57821;
var G__57832__$1 = (((G__57832 instanceof cljs.core.Keyword))?G__57832.fqn:null);
switch (G__57832__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
case "arg17":
return self__.arg17;

break;
case "arg18":
return self__.arg18;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57821,else__5303__auto__);

}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__57835){
var vec__57836 = p__57835;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57836,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57836,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14651__auto__,dynamic_params56769){
var self__ = this;
var this__14651__auto____$1 = this;
var G__57840 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params56769);
var G__57841 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params56769);
var G__57842 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params56769);
var G__57843 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params56769);
var G__57844 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params56769);
var G__57845 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params56769);
var G__57846 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params56769);
var G__57847 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params56769);
var G__57848 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params56769);
var G__57849 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params56769);
var G__57850 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params56769);
var G__57851 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params56769);
var G__57852 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params56769);
var G__57853 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params56769);
var G__57854 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params56769);
var G__57855 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params56769);
var G__57856 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params56769);
var G__57857 = com.rpl.specter.impl.late_resolve(self__.arg17,dynamic_params56769);
var G__57858 = com.rpl.specter.impl.late_resolve(self__.arg18,dynamic_params56769);
var fexpr__57839 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params56769);
return (fexpr__57839.cljs$core$IFn$_invoke$arity$19 ? fexpr__57839.cljs$core$IFn$_invoke$arity$19(G__57840,G__57841,G__57842,G__57843,G__57844,G__57845,G__57846,G__57847,G__57848,G__57849,G__57850,G__57851,G__57852,G__57853,G__57854,G__57855,G__57856,G__57857,G__57858) : fexpr__57839.call(null, G__57840,G__57841,G__57842,G__57843,G__57844,G__57845,G__57846,G__57847,G__57848,G__57849,G__57850,G__57851,G__57852,G__57853,G__57854,G__57855,G__57856,G__57857,G__57858));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#com.rpl.specter.impl.LateFn19{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg18","arg18",1450507352),self__.arg18],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57820){
var self__ = this;
var G__57820__$1 = this;
return (new cljs.core.RecordIter((0),G__57820__$1,20,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482),new cljs.core.Keyword(null,"arg18","arg18",1450507352)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (20 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (151103363 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57822,other57823){
var self__ = this;
var this57822__$1 = this;
return (((!((other57823 == null)))) && ((((this57822__$1.constructor === other57823.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.fn,other57823.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.arg0,other57823.arg0)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.arg1,other57823.arg1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.arg2,other57823.arg2)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.arg3,other57823.arg3)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.arg4,other57823.arg4)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.arg5,other57823.arg5)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.arg6,other57823.arg6)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.arg7,other57823.arg7)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.arg8,other57823.arg8)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.arg9,other57823.arg9)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.arg10,other57823.arg10)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.arg11,other57823.arg11)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.arg12,other57823.arg12)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.arg13,other57823.arg13)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.arg14,other57823.arg14)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.arg15,other57823.arg15)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.arg16,other57823.arg16)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.arg17,other57823.arg17)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.arg18,other57823.arg18)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57822__$1.__extmap,other57823.__extmap)))))))))))))))))))))))))))))))))))))))))))));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg18","arg18",1450507352),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k57821){
var self__ = this;
var this__5307__auto____$1 = this;
var G__57866 = k57821;
var G__57866__$1 = (((G__57866 instanceof cljs.core.Keyword))?G__57866.fqn:null);
switch (G__57866__$1) {
case "fn":
case "arg0":
case "arg1":
case "arg2":
case "arg3":
case "arg4":
case "arg5":
case "arg6":
case "arg7":
case "arg8":
case "arg9":
case "arg10":
case "arg11":
case "arg12":
case "arg13":
case "arg14":
case "arg15":
case "arg16":
case "arg17":
case "arg18":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57821);

}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__57820){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__57867 = cljs.core.keyword_identical_QMARK_;
var expr__57868 = k__5309__auto__;
if(cljs.core.truth_((pred__57867.cljs$core$IFn$_invoke$arity$2 ? pred__57867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57868) : pred__57867.call(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57868)))){
return (new com.rpl.specter.impl.LateFn19(G__57820,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57867.cljs$core$IFn$_invoke$arity$2 ? pred__57867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57868) : pred__57867.call(null, new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__57868)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,G__57820,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57867.cljs$core$IFn$_invoke$arity$2 ? pred__57867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57868) : pred__57867.call(null, new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__57868)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,G__57820,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57867.cljs$core$IFn$_invoke$arity$2 ? pred__57867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57868) : pred__57867.call(null, new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__57868)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,G__57820,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57867.cljs$core$IFn$_invoke$arity$2 ? pred__57867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57868) : pred__57867.call(null, new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__57868)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__57820,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57867.cljs$core$IFn$_invoke$arity$2 ? pred__57867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57868) : pred__57867.call(null, new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__57868)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__57820,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57867.cljs$core$IFn$_invoke$arity$2 ? pred__57867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57868) : pred__57867.call(null, new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__57868)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__57820,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57867.cljs$core$IFn$_invoke$arity$2 ? pred__57867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57868) : pred__57867.call(null, new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__57868)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__57820,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57867.cljs$core$IFn$_invoke$arity$2 ? pred__57867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57868) : pred__57867.call(null, new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__57868)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__57820,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57867.cljs$core$IFn$_invoke$arity$2 ? pred__57867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57868) : pred__57867.call(null, new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__57868)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__57820,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57867.cljs$core$IFn$_invoke$arity$2 ? pred__57867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__57868) : pred__57867.call(null, new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__57868)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__57820,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57867.cljs$core$IFn$_invoke$arity$2 ? pred__57867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__57868) : pred__57867.call(null, new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__57868)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__57820,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57867.cljs$core$IFn$_invoke$arity$2 ? pred__57867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__57868) : pred__57867.call(null, new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__57868)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__57820,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57867.cljs$core$IFn$_invoke$arity$2 ? pred__57867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__57868) : pred__57867.call(null, new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__57868)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__57820,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57867.cljs$core$IFn$_invoke$arity$2 ? pred__57867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__57868) : pred__57867.call(null, new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__57868)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__57820,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57867.cljs$core$IFn$_invoke$arity$2 ? pred__57867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__57868) : pred__57867.call(null, new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__57868)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__57820,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57867.cljs$core$IFn$_invoke$arity$2 ? pred__57867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__57868) : pred__57867.call(null, new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__57868)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__57820,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57867.cljs$core$IFn$_invoke$arity$2 ? pred__57867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__57868) : pred__57867.call(null, new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__57868)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__57820,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57867.cljs$core$IFn$_invoke$arity$2 ? pred__57867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__57868) : pred__57867.call(null, new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__57868)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__57820,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57867.cljs$core$IFn$_invoke$arity$2 ? pred__57867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg18","arg18",1450507352),expr__57868) : pred__57867.call(null, new cljs.core.Keyword(null,"arg18","arg18",1450507352),expr__57868)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__57820,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__57820),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg18","arg18",1450507352),self__.arg18,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__57820){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,G__57820,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.rpl.specter.impl.LateFn19.getBasis = (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null),new cljs.core.Symbol(null,"arg17","arg17",568348045,null),new cljs.core.Symbol(null,"arg18","arg18",-1203928417,null)], null);
}));

(com.rpl.specter.impl.LateFn19.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn19",null,(1),null));
}));

(com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"com.rpl.specter.impl/LateFn19");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn19.
 */
com.rpl.specter.impl.__GT_LateFn19 = (function com$rpl$specter$impl$__GT_LateFn19(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18){
return (new com.rpl.specter.impl.LateFn19(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn19, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn19 = (function com$rpl$specter$impl$map__GT_LateFn19(G__57824){
var extmap__5342__auto__ = (function (){var G__57884 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57824,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482),new cljs.core.Keyword(null,"arg18","arg18",1450507352)], 0));
if(cljs.core.record_QMARK_(G__57824)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57884);
} else {
return G__57884;
}
})();
return (new com.rpl.specter.impl.LateFn19(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__57824),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__57824),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__57824),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__57824),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__57824),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__57824),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__57824),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__57824),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__57824),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__57824),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__57824),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__57824),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__57824),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__57824),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__57824),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__57824),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__57824),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__57824),new cljs.core.Keyword(null,"arg17","arg17",-1072183482).cljs$core$IFn$_invoke$arity$1(G__57824),new cljs.core.Keyword(null,"arg18","arg18",1450507352).cljs$core$IFn$_invoke$arity$1(G__57824),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


com.rpl.specter.impl.late_fn = (function com$rpl$specter$impl$late_fn(afn57885,args57886){
var G__57887 = cljs.core.count(args57886);
switch (G__57887) {
case (0):
return com.rpl.specter.impl.__GT_LateFn0(afn57885);

break;
case (1):
return com.rpl.specter.impl.__GT_LateFn1(afn57885,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(0)));

break;
case (2):
return com.rpl.specter.impl.__GT_LateFn2(afn57885,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(1)));

break;
case (3):
return com.rpl.specter.impl.__GT_LateFn3(afn57885,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(2)));

break;
case (4):
return com.rpl.specter.impl.__GT_LateFn4(afn57885,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(3)));

break;
case (5):
return com.rpl.specter.impl.__GT_LateFn5(afn57885,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(4)));

break;
case (6):
return com.rpl.specter.impl.__GT_LateFn6(afn57885,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(5)));

break;
case (7):
return com.rpl.specter.impl.__GT_LateFn7(afn57885,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(6)));

break;
case (8):
return com.rpl.specter.impl.__GT_LateFn8(afn57885,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(7)));

break;
case (9):
return com.rpl.specter.impl.__GT_LateFn9(afn57885,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(8)));

break;
case (10):
return com.rpl.specter.impl.__GT_LateFn10(afn57885,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(9)));

break;
case (11):
return com.rpl.specter.impl.__GT_LateFn11(afn57885,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(10)));

break;
case (12):
return com.rpl.specter.impl.__GT_LateFn12(afn57885,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(11)));

break;
case (13):
return com.rpl.specter.impl.__GT_LateFn13(afn57885,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(12)));

break;
case (14):
return com.rpl.specter.impl.__GT_LateFn14(afn57885,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(13)));

break;
case (15):
return com.rpl.specter.impl.__GT_LateFn15(afn57885,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(14)));

break;
case (16):
return com.rpl.specter.impl.__GT_LateFn16(afn57885,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(15)));

break;
case (17):
return com.rpl.specter.impl.__GT_LateFn17(afn57885,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(15)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(16)));

break;
case (18):
return com.rpl.specter.impl.__GT_LateFn18(afn57885,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(15)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(16)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args57886,(17)));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot have late function with more than 18 args",cljs.core.PersistentArrayMap.EMPTY);

}
});
com.rpl.specter.impl.static_fn_code = (function com$rpl$specter$impl$static_fn_code(afn,args){
return com.rpl.specter.impl.late_fn(com.rpl.specter.impl.__GT_StaticParam(afn),args);
});
com.rpl.specter.impl.dynamic_fn_code = (function com$rpl$specter$impl$dynamic_fn_code(afn,args){
return com.rpl.specter.impl.late_fn(afn,args);
});
com.rpl.specter.impl.dynamic_val_code = (function com$rpl$specter$impl$dynamic_val_code(code,possible_params){
var vec__57907 = cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,code)){
return i;
} else {
return null;
}
}),possible_params);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57907,(0),null);
if((i == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not find code in possible params",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"possible-params","possible-params",939515647),possible_params], null));
} else {
}

return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.__GT_LocalParam(i),com.rpl.specter.impl.direct_nav_QMARK_(code));
});
com.rpl.specter.impl.static_val_code = (function com$rpl$specter$impl$static_val_code(o){
return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.__GT_StaticParam(o),com.rpl.specter.impl.direct_nav_QMARK_(o));
});
com.rpl.specter.impl.dynamic__GT_code = (function com$rpl$specter$impl$dynamic__GT_code(o){
return com.rpl.specter.impl.walk_until(com.rpl.specter.impl.dynamic_param_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),o);
});
com.rpl.specter.impl.resolve_arg_code = (function com$rpl$specter$impl$resolve_arg_code(o,possible_params){
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
var op = (function (){var G__57911 = o.op;
var G__57912 = possible_params;
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(G__57911,G__57912) : com.rpl.specter.impl.resolve_arg_code.call(null, G__57911,G__57912));
})();
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57910_SHARP_){
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(p1__57910_SHARP_,possible_params) : com.rpl.specter.impl.resolve_arg_code.call(null, p1__57910_SHARP_,possible_params));
}),o.params);
return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.dynamic_fn_code(com.rpl.specter.impl.original_obj(op),params),com.rpl.specter.impl.direct_nav_QMARK_(o.op));
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
return com.rpl.specter.impl.dynamic_val_code(o.code,possible_params);
} else {
if((o instanceof com.rpl.specter.impl.DynamicPath)){
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(o,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null, o,possible_params));
} else {
if((com.rpl.specter.impl.NONE === com.rpl.specter.impl.walk_select(com.rpl.specter.impl.dynamic_param_QMARK_,cljs.core.identity,o))){
return com.rpl.specter.impl.static_val_code(o);
} else {
var G__57913 = com.rpl.specter.impl.__GT_DynamicVal(com.rpl.specter.impl.dynamic__GT_code(o));
var G__57914 = possible_params;
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(G__57913,G__57914) : com.rpl.specter.impl.resolve_arg_code.call(null, G__57913,G__57914));
}

}
}
}
});
com.rpl.specter.impl.resolve_nav_code = (function com$rpl$specter$impl$resolve_nav_code(o,possible_params){
if((o instanceof com.rpl.specter.impl.DynamicPath)){
var path = o.path;
if(cljs.core.sequential_QMARK_(path)){
var resolved = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57915_SHARP_){
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(p1__57915_SHARP_,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null, p1__57915_SHARP_,possible_params));
}),path));
if(cljs.core.empty_QMARK_(resolved)){
return com.rpl.specter.impl.static_val_code(com.rpl.specter.impl.STAY_STAR_);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(resolved))){
return cljs.core.first(resolved);
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.comp_navs,resolved);

}
}
} else {
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(path,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null, path,possible_params));
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
var code = o.code;
var d = com.rpl.specter.impl.dynamic_val_code(code,possible_params);
if(cljs.core.truth_(com.rpl.specter.impl.direct_nav_QMARK_(code))){
return d;
} else {
if(((cljs.core.set_QMARK_(code)) || (((com.rpl.specter.impl.fn_invocation_QMARK_(code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.first(code))))))){
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.pred_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null));
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.coerce_nav,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null));

}
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
var res = com.rpl.specter.impl.resolve_arg_code(o,possible_params);
if(cljs.core.truth_(com.rpl.specter.impl.direct_nav_QMARK_(res))){
return res;
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.coerce_nav,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
}
} else {
return com.rpl.specter.impl.static_val_code(com.rpl.specter.impl.coerce_nav(o));

}
}
}
});
com.rpl.specter.impl.used_locals = (function com$rpl$specter$impl$used_locals(locals_set,form){
var used_locals_cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk((function (e){
if(cljs.core.contains_QMARK_(locals_set,e)){
return com.rpl.specter.impl.update_cell_BANG_(used_locals_cell,(function (p1__57949_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__57949_SHARP_,e);
}));
} else {
return e;
}
}),form);

return com.rpl.specter.impl.get_cell(used_locals_cell);
});
com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_ = false;
com.rpl.specter.impl.mk_fn_name_strs = (function com$rpl$specter$impl$mk_fn_name_strs(o){
return clojure.walk.postwalk((function (e){
if(cljs.core.fn_QMARK_(e)){
return cljs.core.re_find(/ .*/,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)));
} else {
return e;
}
}),o);
});
com.rpl.specter.impl._STAR_path_compile_files_STAR_ = false;
com.rpl.specter.impl.mk_dynamic_path_maker = (function com$rpl$specter$impl$mk_dynamic_path_maker(resolved_code,ns_str,used_locals_list,possible_params){
if(cljs.core.truth_(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Possible params:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([possible_params], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nProduced dynamic object:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.rpl.specter.impl.mk_fn_name_strs(resolved_code)], 0));

cljs.core.println();
} else {
}

return (function (dynamic_params){
return com.rpl.specter.impl.late_resolve(resolved_code,dynamic_params);
});
});
com.rpl.specter.impl.magic_precompilation = (function com$rpl$specter$impl$magic_precompilation(path,ns_str,used_locals_list,possible_params){
var magic_path = com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.magic_precompilation_STAR_(path));
if(cljs.core.truth_(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Inline caching debug information"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--------------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Input path:",path,"\n"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processed path:",magic_path,"\n"], 0));
} else {
}

if(com.rpl.specter.impl.rich_nav_QMARK_(magic_path)){
if(cljs.core.truth_(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Static result:",magic_path], 0));
} else {
}

return com.rpl.specter.impl.__GT_CachedPathInfo(false,magic_path);
} else {
var maker = com.rpl.specter.impl.mk_dynamic_path_maker(com.rpl.specter.impl.resolve_nav_code(com.rpl.specter.impl.__GT_DynamicPath(magic_path),possible_params),ns_str,used_locals_list,possible_params);
return com.rpl.specter.impl.__GT_CachedPathInfo(true,maker);
}
});
com.rpl.specter.impl.compiled_setval_STAR_ = (function com$rpl$specter$impl$compiled_setval_STAR_(path,val,structure){
return com.rpl.specter.impl.compiled_transform_STAR_(path,com.rpl.specter.impl.fast_constantly(val),structure);
});
com.rpl.specter.impl.compiled_replace_in_STAR_ = (function com$rpl$specter$impl$compiled_replace_in_STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___58696 = arguments.length;
var i__5727__auto___58697 = (0);
while(true){
if((i__5727__auto___58697 < len__5726__auto___58696)){
args__5732__auto__.push((arguments[i__5727__auto___58697]));

var G__58698 = (i__5727__auto___58697 + (1));
i__5727__auto___58697 = G__58698;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__57960){
var map__57961 = p__57960;
var map__57961__$1 = cljs.core.__destructure_map(map__57961);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57961__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.compiled_transform_STAR_(path,(function() { 
var G__58699__delegate = function (args){
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(transform_fn,args);
if(cljs.core.truth_(res)){
var vec__57962 = res;
var ret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57962,(0),null);
var user_ret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57962,(1),null);
com.rpl.specter.impl.set_cell_BANG_(state,(function (){var G__57968 = com.rpl.specter.impl.get_cell(state);
var G__57969 = user_ret;
return (merge_fn.cljs$core$IFn$_invoke$arity$2 ? merge_fn.cljs$core$IFn$_invoke$arity$2(G__57968,G__57969) : merge_fn.call(null, G__57968,G__57969));
})());

return ret;
} else {
return cljs.core.last(args);
}
};
var G__58699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58700__i = 0, G__58700__a = new Array(arguments.length -  0);
while (G__58700__i < G__58700__a.length) {G__58700__a[G__58700__i] = arguments[G__58700__i + 0]; ++G__58700__i;}
  args = new cljs.core.IndexedSeq(G__58700__a,0,null);
} 
return G__58699__delegate.call(this,args);};
G__58699.cljs$lang$maxFixedArity = 0;
G__58699.cljs$lang$applyTo = (function (arglist__58701){
var args = cljs.core.seq(arglist__58701);
return G__58699__delegate(args);
});
G__58699.cljs$core$IFn$_invoke$arity$variadic = G__58699__delegate;
return G__58699;
})()
,structure),com.rpl.specter.impl.get_cell(state)], null);
}));

(com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$applyTo = (function (seq57956){
var G__57957 = cljs.core.first(seq57956);
var seq57956__$1 = cljs.core.next(seq57956);
var G__57958 = cljs.core.first(seq57956__$1);
var seq57956__$2 = cljs.core.next(seq57956__$1);
var G__57959 = cljs.core.first(seq57956__$2);
var seq57956__$3 = cljs.core.next(seq57956__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57957,G__57958,G__57959,seq57956__$3);
}));

com.rpl.specter.impl.multi_transform_error_fn = (function com$rpl$specter$impl$multi_transform_error_fn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___58702 = arguments.length;
var i__5727__auto___58703 = (0);
while(true){
if((i__5727__auto___58703 < len__5726__auto___58702)){
args__5732__auto__.push((arguments[i__5727__auto___58703]));

var G__58704 = (i__5727__auto___58703 + (1));
i__5727__auto___58703 = G__58704;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic = (function (nav){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("All navigation in multi-transform must end in 'terminal' navigators",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav","nav",719540477),nav], null));
}));

(com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$applyTo = (function (seq57972){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57972));
}));

com.rpl.specter.impl.compiled_multi_transform_STAR_ = (function com$rpl$specter$impl$compiled_multi_transform_STAR_(path,structure){
return com.rpl.specter.impl.compiled_transform_STAR_(path,com.rpl.specter.impl.multi_transform_error_fn,structure);
});

//# sourceMappingURL=com.rpl.specter.impl.js.map
