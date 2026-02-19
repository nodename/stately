goog.provide('com.rpl.specter');
com.rpl.specter.static_path_QMARK_ = (function com$rpl$specter$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_(path)));
}
});
com.rpl.specter.wrap_dynamic_nav = (function com$rpl$specter$wrap_dynamic_nav(f){
return (function() { 
var G__58730__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
if(((cljs.core.sequential_QMARK_(ret)) && (com.rpl.specter.static_path_QMARK_(ret)))){
return com.rpl.specter.impl.comp_paths_STAR_(ret);
} else {
if(((cljs.core.sequential_QMARK_(ret)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ret))))){
return cljs.core.first(ret);
} else {
return ret;

}
}
};
var G__58730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58731__i = 0, G__58731__a = new Array(arguments.length -  0);
while (G__58731__i < G__58731__a.length) {G__58731__a[G__58731__i] = arguments[G__58731__i + 0]; ++G__58731__i;}
  args = new cljs.core.IndexedSeq(G__58731__a,0,null);
} 
return G__58730__delegate.call(this,args);};
G__58730.cljs$lang$maxFixedArity = 0;
G__58730.cljs$lang$applyTo = (function (arglist__58732){
var args = cljs.core.seq(arglist__58732);
return G__58730__delegate(args);
});
G__58730.cljs$core$IFn$_invoke$arity$variadic = G__58730__delegate;
return G__58730;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__5732__auto__ = [];
var len__5726__auto___58733 = arguments.length;
var i__5727__auto___58735 = (0);
while(true){
if((i__5727__auto___58735 < len__5726__auto___58733)){
args__5732__auto__.push((arguments[i__5727__auto___58735]));

var G__58736 = (i__5727__auto___58735 + (1));
i__5727__auto___58735 = G__58736;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_(cljs.core.vec(apath));
}));

(com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq58353){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58353));
}));

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__58355 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__58356 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__58355,G__58356) : com.rpl.specter.compiled_select.call(null, G__58355,G__58356));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__58357 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__58358 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__58357,G__58358) : com.rpl.specter.compiled_select_one.call(null, G__58357,G__58358));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__58361 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__58362 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__58361,G__58362) : com.rpl.specter.compiled_select_one_BANG_.call(null, G__58361,G__58362));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__58364 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__58365 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__58364,G__58365) : com.rpl.specter.compiled_select_first.call(null, G__58364,G__58365));
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
var G__58367 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__58368 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__58367,G__58368) : com.rpl.specter.compiled_select_any.call(null, G__58367,G__58368));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__58370 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__58371 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__58370,G__58371) : com.rpl.specter.compiled_selected_any_QMARK_.call(null, G__58370,G__58371));
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
var G__58373 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__58374 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__58373,G__58374) : com.rpl.specter.compiled_traverse.call(null, G__58373,G__58374));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__58375 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__58375) : com.rpl.specter.compiled_traverse_all.call(null, G__58375));
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Version of vtransform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_vtransform = com.rpl.specter.impl.compiled_vtransform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
var G__58377 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__58378 = transform_fn;
var G__58379 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__58377,G__58378,G__58379) : com.rpl.specter.compiled_transform.call(null, G__58377,G__58378,G__58379));
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal` or `vterminal`. Error is thrown if navigation finishes
 * at a non-terminal navigator. `terminal-val` is a wrapper around `terminal` and is
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
var G__58381 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__58382 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__58381,G__58382) : com.rpl.specter.compiled_multi_transform.call(null, G__58381,G__58382));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__58385 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__58386 = val;
var G__58387 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__58385,G__58386,G__58387) : com.rpl.specter.compiled_setval.call(null, G__58385,G__58386,G__58387));
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___58740 = arguments.length;
var i__5727__auto___58741 = (0);
while(true){
if((i__5727__auto___58741 < len__5726__auto___58740)){
args__5732__auto__.push((arguments[i__5727__auto___58741]));

var G__58742 = (i__5727__auto___58741 + (1));
i__5727__auto___58741 = G__58742;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__58395){
var map__58396 = p__58395;
var map__58396__$1 = cljs.core.__destructure_map(map__58396);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58396__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var G__58397 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__58398 = transform_fn;
var G__58399 = structure;
var G__58400 = new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341);
var G__58401 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__58397,G__58398,G__58399,G__58400,G__58401) : com.rpl.specter.compiled_replace_in.call(null, G__58397,G__58398,G__58399,G__58400,G__58401));
}));

(com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq58389){
var G__58390 = cljs.core.first(seq58389);
var seq58389__$1 = cljs.core.next(seq58389);
var G__58391 = cljs.core.first(seq58389__$1);
var seq58389__$2 = cljs.core.next(seq58389__$1);
var G__58392 = cljs.core.first(seq58389__$2);
var seq58389__$3 = cljs.core.next(seq58389__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58390,G__58391,G__58392,seq58389__$3);
}));

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
com.rpl.specter.eachnav = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (navfn){
var latenavfn = (com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1(navfn) : com.rpl.specter.late_resolved_fn.call(null, navfn));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__58747__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__58747 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58748__i = 0, G__58748__a = new Array(arguments.length -  0);
while (G__58748__i < G__58748__a.length) {G__58748__a[G__58748__i] = arguments[G__58748__i + 0]; ++G__58748__i;}
  args = new cljs.core.IndexedSeq(G__58748__a,0,null);
} 
return G__58747__delegate.call(this,args);};
G__58747.cljs$lang$maxFixedArity = 0;
G__58747.cljs$lang$applyTo = (function (arglist__58749){
var args = cljs.core.seq(arglist__58749);
return G__58747__delegate(args);
});
G__58747.cljs$core$IFn$_invoke$arity$variadic = G__58747__delegate;
return G__58747;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.local_declarepath = com.rpl.specter.impl.local_declarepath;

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58404 = (function (meta58405){
this.meta58405 = meta58405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58406,meta58405__$1){
var self__ = this;
var _58406__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58404(meta58405__$1));
}));

(com.rpl.specter.t_com$rpl$specter58404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58406){
var self__ = this;
var _58406__$1 = this;
return self__.meta58405;
}));

(com.rpl.specter.t_com$rpl$specter58404.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58404.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter58404.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return structure;
}));

(com.rpl.specter.t_com$rpl$specter58404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58405","meta58405",-714362040,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58404.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58404.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58404");

(com.rpl.specter.t_com$rpl$specter58404.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58404");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58404.
 */
com.rpl.specter.__GT_t_com$rpl$specter58404 = (function com$rpl$specter$__GT_t_com$rpl$specter58404(meta58405){
return (new com.rpl.specter.t_com$rpl$specter58404(meta58405));
});




com.rpl.specter.STOP_select_STAR_ = (function com$rpl$specter$STOP_select_STAR_(structure,next_fn){
return com.rpl.specter.NONE;
});

com.rpl.specter.STOP_transform_STAR_ = (function com$rpl$specter$STOP_transform_STAR_(structure,next_fn){
return structure;
});

/**
 * Stops navigation at this point. For selection returns nothing and for
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = (new com.rpl.specter.t_com$rpl$specter58404(null));
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.STAY_STAR_;

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58408 = (function (afn,meta58409){
this.afn = afn;
this.meta58409 = meta58409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58410,meta58409__$1){
var self__ = this;
var _58410__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58408(self__.afn,meta58409__$1));
}));

(com.rpl.specter.t_com$rpl$specter58408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58410){
var self__ = this;
var _58410__$1 = this;
return self__.meta58409;
}));

(com.rpl.specter.t_com$rpl$specter58408.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58408.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter58408.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter58408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta58409","meta58409",1988686827,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58408.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58408.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58408");

(com.rpl.specter.t_com$rpl$specter58408.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58408");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58408.
 */
com.rpl.specter.__GT_t_com$rpl$specter58408 = (function com$rpl$specter$__GT_t_com$rpl$specter58408(afn,meta58409){
return (new com.rpl.specter.t_com$rpl$specter58408(afn,meta58409));
});


/**
 * Defines an endpoint in the navigation the transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter58408(afn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58412 = (function (afn,meta58413){
this.afn = afn;
this.meta58413 = meta58413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58414,meta58413__$1){
var self__ = this;
var _58414__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58412(self__.afn,meta58413__$1));
}));

(com.rpl.specter.t_com$rpl$specter58412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58414){
var self__ = this;
var _58414__$1 = this;
return self__.meta58413;
}));

(com.rpl.specter.t_com$rpl$specter58412.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58412.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter58412.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null, vals,structure));
}));

(com.rpl.specter.t_com$rpl$specter58412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta58413","meta58413",882817318,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58412.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58412.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58412");

(com.rpl.specter.t_com$rpl$specter58412.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58412");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58412.
 */
com.rpl.specter.__GT_t_com$rpl$specter58412 = (function com$rpl$specter$__GT_t_com$rpl$specter58412(afn,meta58413){
return (new com.rpl.specter.t_com$rpl$specter58412(afn,meta58413));
});


/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter58412(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__58417 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__58417) : com.rpl.specter.terminal.call(null, G__58417));
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58419 = (function (meta58420){
this.meta58420 = meta58420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58421,meta58420__$1){
var self__ = this;
var _58421__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58419(meta58420__$1));
}));

(com.rpl.specter.t_com$rpl$specter58419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58421){
var self__ = this;
var _58421__$1 = this;
return self__.meta58420;
}));

(com.rpl.specter.t_com$rpl$specter58419.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58419.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58419.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.all_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58420","meta58420",-445104496,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58419.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58419.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58419");

(com.rpl.specter.t_com$rpl$specter58419.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58419");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58419.
 */
com.rpl.specter.__GT_t_com$rpl$specter58419 = (function com$rpl$specter$__GT_t_com$rpl$specter58419(meta58420){
return (new com.rpl.specter.t_com$rpl$specter58419(meta58420));
});




com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (new com.rpl.specter.t_com$rpl$specter58419(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58424 = (function (meta58425){
this.meta58425 = meta58425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58426,meta58425__$1){
var self__ = this;
var _58426__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58424(meta58425__$1));
}));

(com.rpl.specter.t_com$rpl$specter58424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58426){
var self__ = this;
var _58426__$1 = this;
return self__.meta58425;
}));

(com.rpl.specter.t_com$rpl$specter58424.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58424.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58424.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
}));

(com.rpl.specter.t_com$rpl$specter58424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58425","meta58425",-1604959507,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58424.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58424.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58424");

(com.rpl.specter.t_com$rpl$specter58424.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58424");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58424.
 */
com.rpl.specter.__GT_t_com$rpl$specter58424 = (function com$rpl$specter$__GT_t_com$rpl$specter58424(meta58425){
return (new com.rpl.specter.t_com$rpl$specter58424(meta58425));
});




com.rpl.specter.ALL_WITH_META_select_STAR_ = (function com$rpl$specter$ALL_WITH_META_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_WITH_META_transform_STAR_ = (function com$rpl$specter$ALL_WITH_META_transform_STAR_(structure,next_fn){
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

/**
 * Same as ALL, except maintains metadata on the structure.
 */
com.rpl.specter.ALL_WITH_META = (new com.rpl.specter.t_com$rpl$specter58424(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58427 = (function (meta58428){
this.meta58428 = meta58428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58429,meta58428__$1){
var self__ = this;
var _58429__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58427(meta58428__$1));
}));

(com.rpl.specter.t_com$rpl$specter58427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58429){
var self__ = this;
var _58429__$1 = this;
return self__.meta58428;
}));

(com.rpl.specter.t_com$rpl$specter58427.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58427.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14598__auto__,v){
var ret__14599__auto__ = next_fn(v);
if((ret__14599__auto__ === com.rpl.specter.NONE)){
return curr__14598__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__14599__auto__)){
return cljs.core.reduced(ret__14599__auto__);
} else {
return ret__14599__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
}));

(com.rpl.specter.t_com$rpl$specter58427.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58428","meta58428",-451735894,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58427.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58427.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58427");

(com.rpl.specter.t_com$rpl$specter58427.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58427");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58427.
 */
com.rpl.specter.__GT_t_com$rpl$specter58427 = (function com$rpl$specter$__GT_t_com$rpl$specter58427(meta58428){
return (new com.rpl.specter.t_com$rpl$specter58427(meta58428));
});




com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14598__auto__,v){
var ret__14599__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null, v));
if((ret__14599__auto__ === com.rpl.specter.NONE)){
return curr__14598__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__14599__auto__)){
return cljs.core.reduced(ret__14599__auto__);
} else {
return ret__14599__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (new com.rpl.specter.t_com$rpl$specter58427(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58432 = (function (meta58433){
this.meta58433 = meta58433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58434,meta58433__$1){
var self__ = this;
var _58434__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58432(meta58433__$1));
}));

(com.rpl.specter.t_com$rpl$specter58432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58434){
var self__ = this;
var _58434__$1 = this;
return self__.meta58433;
}));

(com.rpl.specter.t_com$rpl$specter58432.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58432.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14598__auto__,k){
var ret__14599__auto__ = next_fn(k);
if((ret__14599__auto__ === com.rpl.specter.NONE)){
return curr__14598__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__14599__auto__)){
return cljs.core.reduced(ret__14599__auto__);
} else {
return ret__14599__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
}));

(com.rpl.specter.t_com$rpl$specter58432.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58433","meta58433",-250314413,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58432.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58432.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58432");

(com.rpl.specter.t_com$rpl$specter58432.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58432");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58432.
 */
com.rpl.specter.__GT_t_com$rpl$specter58432 = (function com$rpl$specter$__GT_t_com$rpl$specter58432(meta58433){
return (new com.rpl.specter.t_com$rpl$specter58432(meta58433));
});




com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14598__auto__,k){
var ret__14599__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null, k));
if((ret__14599__auto__ === com.rpl.specter.NONE)){
return curr__14598__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__14599__auto__)){
return cljs.core.reduced(ret__14599__auto__);
} else {
return ret__14599__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
});

com.rpl.specter.MAP_KEYS_transform_STAR_ = (function com$rpl$specter$MAP_KEYS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

/**
 * Navigate to each key of the map. This is more efficient than
 *        navigating via [ALL FIRST]
 */
com.rpl.specter.MAP_KEYS = (new com.rpl.specter.t_com$rpl$specter58432(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58436 = (function (meta58437){
this.meta58437 = meta58437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58438,meta58437__$1){
var self__ = this;
var _58438__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58436(meta58437__$1));
}));

(com.rpl.specter.t_com$rpl$specter58436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58438){
var self__ = this;
var _58438__$1 = this;
return self__.meta58437;
}));

(com.rpl.specter.t_com$rpl$specter58436.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58436.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__58439 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,structure);
var G__58440 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__58439,G__58440) : next_fn__19097__auto__.call(null, G__58439,G__58440));
}));

(com.rpl.specter.t_com$rpl$specter58436.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__58441 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,structure);
var G__58442 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__58441,G__58442) : next_fn__19097__auto__.call(null, G__58441,G__58442));
}));

(com.rpl.specter.t_com$rpl$specter58436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58437","meta58437",-1989653524,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58436.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58436.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58436");

(com.rpl.specter.t_com$rpl$specter58436.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58436");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58436.
 */
com.rpl.specter.__GT_t_com$rpl$specter58436 = (function com$rpl$specter$__GT_t_com$rpl$specter58436(meta58437){
return (new com.rpl.specter.t_com$rpl$specter58436(meta58437));
});


com.rpl.specter.VAL = (new com.rpl.specter.t_com$rpl$specter58436(null));
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last) : com.rpl.specter.navs.PosNavigator.call(null, com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last));
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first) : com.rpl.specter.navs.PosNavigator.call(null, com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58448 = (function (start_index_fn,end_index_fn,meta58449){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta58449 = meta58449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58450,meta58449__$1){
var self__ = this;
var _58450__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58448(self__.start_index_fn,self__.end_index_fn,meta58449__$1));
}));

(com.rpl.specter.t_com$rpl$specter58448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58450){
var self__ = this;
var _58450__$1 = this;
return self__.meta58449;
}));

(com.rpl.specter.t_com$rpl$specter58448.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58448.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null, structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58448.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null, structure));
var G__58451 = structure;
var G__58452 = s;
var G__58453 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__58454 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__58451,G__58452,G__58453,G__58454) : com.rpl.specter.navs.srange_transform.call(null, G__58451,G__58452,G__58453,G__58454));
}));

(com.rpl.specter.t_com$rpl$specter58448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta58449","meta58449",-1063454905,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58448.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58448.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58448");

(com.rpl.specter.t_com$rpl$specter58448.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58448");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58448.
 */
com.rpl.specter.__GT_t_com$rpl$specter58448 = (function com$rpl$specter$__GT_t_com$rpl$specter58448(start_index_fn,end_index_fn,meta58449){
return (new com.rpl.specter.t_com$rpl$specter58448(start_index_fn,end_index_fn,meta58449));
});




com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null, structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null, structure));
var G__58444 = structure;
var G__58445 = s;
var G__58446 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__58447 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__58444,G__58445,G__58446,G__58447) : com.rpl.specter.navs.srange_transform.call(null, G__58444,G__58445,G__58446,G__58447));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
return (new com.rpl.specter.t_com$rpl$specter58448(start_index_fn,end_index_fn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58456 = (function (start,end,meta58457){
this.start = start;
this.end = end;
this.meta58457 = meta58457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58458,meta58457__$1){
var self__ = this;
var _58458__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58456(self__.start,self__.end,meta58457__$1));
}));

(com.rpl.specter.t_com$rpl$specter58456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58458){
var self__ = this;
var _58458__$1 = this;
return self__.meta58457;
}));

(com.rpl.specter.t_com$rpl$specter58456.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58456.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58456.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null, structure,self__.start,self__.end,next_fn));
}));

(com.rpl.specter.t_com$rpl$specter58456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta58457","meta58457",1133909334,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58456.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58456.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58456");

(com.rpl.specter.t_com$rpl$specter58456.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58456");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58456.
 */
com.rpl.specter.__GT_t_com$rpl$specter58456 = (function com$rpl$specter$__GT_t_com$rpl$specter58456(start,end,meta58457){
return (new com.rpl.specter.t_com$rpl$specter58456(start,end,meta58457));
});




com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select(structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,start,end,next_fn) : com.rpl.specter.navs.srange_transform.call(null, structure,start,end,next_fn));
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj((function (start,end){
return (new com.rpl.specter.t_com$rpl$specter58456(start,end,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58464 = (function (pred,meta58465){
this.pred = pred;
this.meta58465 = meta58465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58466,meta58465__$1){
var self__ = this;
var _58466__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58464(self__.pred,meta58465__$1));
}));

(com.rpl.specter.t_com$rpl$specter58464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58466){
var self__ = this;
var _58466__$1 = this;
return self__.meta58465;
}));

(com.rpl.specter.t_com$rpl$specter58464.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58464.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14598__auto__,p__58467){
var vec__58468 = p__58467;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58468,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58468,(1),null);
var ret__14599__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__14599__auto__ === com.rpl.specter.NONE)){
return curr__14598__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__14599__auto__)){
return cljs.core.reduced(ret__14599__auto__);
} else {
return ret__14599__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,self__.pred));
}));

(com.rpl.specter.t_com$rpl$specter58464.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta58465","meta58465",-794713573,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58464.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58464.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58464");

(com.rpl.specter.t_com$rpl$specter58464.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58464");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58464.
 */
com.rpl.specter.__GT_t_com$rpl$specter58464 = (function com$rpl$specter$__GT_t_com$rpl$specter58464(pred,meta58465){
return (new com.rpl.specter.t_com$rpl$specter58464(pred,meta58465));
});




com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14598__auto__,p__58460){
var vec__58461 = p__58460;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58461,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58461,(1),null);
var ret__14599__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__14599__auto__ === com.rpl.specter.NONE)){
return curr__14598__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__14599__auto__)){
return cljs.core.reduced(ret__14599__auto__);
} else {
return ret__14599__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj((function (pred){
return (new com.rpl.specter.t_com$rpl$specter58464(pred,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58474 = (function (meta58475){
this.meta58475 = meta58475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58476,meta58475__$1){
var self__ = this;
var _58476__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58474(meta58475__$1));
}));

(com.rpl.specter.t_com$rpl$specter58474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58476){
var self__ = this;
var _58476__$1 = this;
return self__.meta58475;
}));

(com.rpl.specter.t_com$rpl$specter58474.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58474.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter58474.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn("")),structure].join('');
} else {
var to_prepend = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
}));

(com.rpl.specter.t_com$rpl$specter58474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58475","meta58475",-1473908599,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58474.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58474.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58474");

(com.rpl.specter.t_com$rpl$specter58474.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58474");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58474.
 */
com.rpl.specter.__GT_t_com$rpl$specter58474 = (function com$rpl$specter$__GT_t_com$rpl$specter58474(meta58475){
return (new com.rpl.specter.t_com$rpl$specter58474(meta58475));
});




com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__58472 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58472) : next_fn.call(null, G__58472));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null, ""))),structure].join('');
} else {
var to_prepend = (function (){var G__58473 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58473) : next_fn.call(null, G__58473));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (new com.rpl.specter.t_com$rpl$specter58474(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58480 = (function (meta58481){
this.meta58481 = meta58481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58482,meta58481__$1){
var self__ = this;
var _58482__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58480(meta58481__$1));
}));

(com.rpl.specter.t_com$rpl$specter58480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58482){
var self__ = this;
var _58482__$1 = this;
return self__.meta58481;
}));

(com.rpl.specter.t_com$rpl$specter58480.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58480.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter58480.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn(""))].join('');
} else {
var to_append = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all(structure,to_append);
}
}));

(com.rpl.specter.t_com$rpl$specter58480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58481","meta58481",-1586089814,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58480.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58480.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58480");

(com.rpl.specter.t_com$rpl$specter58480.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58480");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58480.
 */
com.rpl.specter.__GT_t_com$rpl$specter58480 = (function com$rpl$specter$__GT_t_com$rpl$specter58480(meta58481){
return (new com.rpl.specter.t_com$rpl$specter58480(meta58481));
});




com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__58478 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58478) : next_fn.call(null, G__58478));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null, "")))].join('');
} else {
var to_append = (function (){var G__58479 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58479) : next_fn.call(null, G__58479));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (new com.rpl.specter.t_com$rpl$specter58480(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58484 = (function (meta58485){
this.meta58485 = meta58485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58486,meta58485__$1){
var self__ = this;
var _58486__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58484(meta58485__$1));
}));

(com.rpl.specter.t_com$rpl$specter58484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58486){
var self__ = this;
var _58486__$1 = this;
return self__.meta58485;
}));

(com.rpl.specter.t_com$rpl$specter58484.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58484.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter58484.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
}));

(com.rpl.specter.t_com$rpl$specter58484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58485","meta58485",553578342,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58484.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58484.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58484");

(com.rpl.specter.t_com$rpl$specter58484.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58484");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58484.
 */
com.rpl.specter.__GT_t_com$rpl$specter58484 = (function com$rpl$specter$__GT_t_com$rpl$specter58484(meta58485){
return (new com.rpl.specter.t_com$rpl$specter58484(meta58485));
});




com.rpl.specter.NONE_ELEM_select_STAR_ = (function com$rpl$specter$NONE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null, com.rpl.specter.NONE));
});

com.rpl.specter.NONE_ELEM_transform_STAR_ = (function com$rpl$specter$NONE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null, com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
});

/**
 * Navigate to 'void' elem in the set.
 *        For transformations - if result is not `NONE`,
 *        then add that value to the set.
 */
com.rpl.specter.NONE_ELEM = (new com.rpl.specter.t_com$rpl$specter58484(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58488 = (function (meta58489){
this.meta58489 = meta58489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58490,meta58489__$1){
var self__ = this;
var _58490__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58488(meta58489__$1));
}));

(com.rpl.specter.t_com$rpl$specter58488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58490){
var self__ = this;
var _58490__$1 = this;
return self__.meta58489;
}));

(com.rpl.specter.t_com$rpl$specter58488.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58488.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter58488.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter58488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58489","meta58489",992996661,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58488.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58488.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58488");

(com.rpl.specter.t_com$rpl$specter58488.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58488");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58488.
 */
com.rpl.specter.__GT_t_com$rpl$specter58488 = (function com$rpl$specter$__GT_t_com$rpl$specter58488(meta58489){
return (new com.rpl.specter.t_com$rpl$specter58488(meta58489));
});




com.rpl.specter.BEFORE_ELEM_select_STAR_ = (function com$rpl$specter$BEFORE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null, com.rpl.specter.NONE));
});

com.rpl.specter.BEFORE_ELEM_transform_STAR_ = (function com$rpl$specter$BEFORE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null, com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
});

/**
 * Navigate to 'void' element before the sequence.
 *        For transformations – if result is not `NONE`,
 *        then prepend that value.
 */
com.rpl.specter.BEFORE_ELEM = (new com.rpl.specter.t_com$rpl$specter58488(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58492 = (function (meta58493){
this.meta58493 = meta58493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58494,meta58493__$1){
var self__ = this;
var _58494__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58492(meta58493__$1));
}));

(com.rpl.specter.t_com$rpl$specter58492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58494){
var self__ = this;
var _58494__$1 = this;
return self__.meta58493;
}));

(com.rpl.specter.t_com$rpl$specter58492.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58492.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter58492.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter58492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58493","meta58493",-1807266540,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58492.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58492.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58492");

(com.rpl.specter.t_com$rpl$specter58492.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58492");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58492.
 */
com.rpl.specter.__GT_t_com$rpl$specter58492 = (function com$rpl$specter$__GT_t_com$rpl$specter58492(meta58493){
return (new com.rpl.specter.t_com$rpl$specter58492(meta58493));
});




com.rpl.specter.AFTER_ELEM_select_STAR_ = (function com$rpl$specter$AFTER_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null, com.rpl.specter.NONE));
});

com.rpl.specter.AFTER_ELEM_transform_STAR_ = (function com$rpl$specter$AFTER_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null, com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
});

/**
 * Navigate to 'void' element after the sequence.
 *        For transformations – if result is not `NONE`,
 *        then append that value.
 */
com.rpl.specter.AFTER_ELEM = (new com.rpl.specter.t_com$rpl$specter58492(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58497 = (function (aset,meta58498){
this.aset = aset;
this.meta58498 = meta58498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58499,meta58498__$1){
var self__ = this;
var _58499__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58497(self__.aset,meta58498__$1));
}));

(com.rpl.specter.t_com$rpl$specter58497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58499){
var self__ = this;
var _58499__$1 = this;
return self__.meta58498;
}));

(com.rpl.specter.t_com$rpl$specter58497.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58497.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
}));

(com.rpl.specter.t_com$rpl$specter58497.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
}));

(com.rpl.specter.t_com$rpl$specter58497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta58498","meta58498",1187064979,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58497.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58497.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58497");

(com.rpl.specter.t_com$rpl$specter58497.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58497");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58497.
 */
com.rpl.specter.__GT_t_com$rpl$specter58497 = (function com$rpl$specter$__GT_t_com$rpl$specter58497(aset,meta58498){
return (new com.rpl.specter.t_com$rpl$specter58497(aset,meta58498));
});




com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__58495 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58495) : next_fn.call(null, G__58495));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
var newset = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(subset) : next_fn.call(null, subset));
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj((function (aset){
return (new com.rpl.specter.t_com$rpl$specter58497(aset,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58501 = (function (m_keys,meta58502){
this.m_keys = m_keys;
this.meta58502 = meta58502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58503,meta58502__$1){
var self__ = this;
var _58503__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58501(self__.m_keys,meta58502__$1));
}));

(com.rpl.specter.t_com$rpl$specter58501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58503){
var self__ = this;
var _58503__$1 = this;
return self__.meta58502;
}));

(com.rpl.specter.t_com$rpl$specter58501.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58501.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
}));

(com.rpl.specter.t_com$rpl$specter58501.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
}));

(com.rpl.specter.t_com$rpl$specter58501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta58502","meta58502",1902770403,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58501.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58501.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58501");

(com.rpl.specter.t_com$rpl$specter58501.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58501");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58501.
 */
com.rpl.specter.__GT_t_com$rpl$specter58501 = (function com$rpl$specter$__GT_t_com$rpl$specter58501(m_keys,meta58502){
return (new com.rpl.specter.t_com$rpl$specter58501(m_keys,meta58502));
});




com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__58500 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58500) : next_fn.call(null, G__58500));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys(structure,m_keys);
var newmap = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(submap) : next_fn.call(null, submap));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,m_keys),newmap], 0));
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj((function (m_keys){
return (new com.rpl.specter.t_com$rpl$specter58501(m_keys,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58505 = (function (path,late,meta58506){
this.path = path;
this.late = late;
this.meta58506 = meta58506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58507,meta58506__$1){
var self__ = this;
var _58507__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58505(self__.path,self__.late,meta58506__$1));
}));

(com.rpl.specter.t_com$rpl$specter58505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58507){
var self__ = this;
var _58507__$1 = this;
return self__.meta58506;
}));

(com.rpl.specter.t_com$rpl$specter58505.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58505.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null, self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter58505.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null, self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(transformed));
var G__58508 = self__.late;
var G__58509 = (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});
var G__58510 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__58508,G__58509,G__58510) : com.rpl.specter.compiled_transform.call(null, G__58508,G__58509,G__58510));
}));

(com.rpl.specter.t_com$rpl$specter58505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta58506","meta58506",1915445770,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58505.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58505.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58505");

(com.rpl.specter.t_com$rpl$specter58505.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58505");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58505.
 */
com.rpl.specter.__GT_t_com$rpl$specter58505 = (function com$rpl$specter$__GT_t_com$rpl$specter58505(path,late,meta58506){
return (new com.rpl.specter.t_com$rpl$specter58505(path,late,meta58506));
});


/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 * 
 *   If transformed sequence is smaller than input sequence, missing entries
 *   will be filled in with NONE, triggering removal if supported by that navigator.
 * 
 *   Value collection (e.g. collect, collect-one) may not be used in the subpath.
 */
com.rpl.specter.subselect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__58795__delegate = function (path){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter58505(path,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
};
var G__58795 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__58796__i = 0, G__58796__a = new Array(arguments.length -  0);
while (G__58796__i < G__58796__a.length) {G__58796__a[G__58796__i] = arguments[G__58796__i + 0]; ++G__58796__i;}
  path = new cljs.core.IndexedSeq(G__58796__a,0,null);
} 
return G__58795__delegate.call(this,path);};
G__58795.cljs$lang$maxFixedArity = 0;
G__58795.cljs$lang$applyTo = (function (arglist__58797){
var path = cljs.core.seq(arglist__58797);
return G__58795__delegate(path);
});
G__58795.cljs$core$IFn$_invoke$arity$variadic = G__58795__delegate;
return G__58795;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58511 = (function (key,meta58512){
this.key = key;
this.meta58512 = meta58512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58513,meta58512__$1){
var self__ = this;
var _58513__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58511(self__.key,meta58512__$1));
}));

(com.rpl.specter.t_com$rpl$specter58511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58513){
var self__ = this;
var _58513__$1 = this;
return self__.meta58512;
}));

(com.rpl.specter.t_com$rpl$specter58511.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58511.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null, vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter58511.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
var newkey = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null, vals,self__.key));
var dissoced = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(structure,self__.key);
if((com.rpl.specter.NONE === newkey)){
return dissoced;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dissoced,newkey,cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.key));
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter58511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta58512","meta58512",-124164406,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58511.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58511.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58511");

(com.rpl.specter.t_com$rpl$specter58511.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58511");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58511.
 */
com.rpl.specter.__GT_t_com$rpl$specter58511 = (function com$rpl$specter$__GT_t_com$rpl$specter58511(key,meta58512){
return (new com.rpl.specter.t_com$rpl$specter58511(key,meta58512));
});


/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
return (new com.rpl.specter.t_com$rpl$specter58511(key,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58515 = (function (elem,meta58516){
this.elem = elem;
this.meta58516 = meta58516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58517,meta58516__$1){
var self__ = this;
var _58517__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58515(self__.elem,meta58516__$1));
}));

(com.rpl.specter.t_com$rpl$specter58515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58517){
var self__ = this;
var _58517__$1 = this;
return self__.meta58516;
}));

(com.rpl.specter.t_com$rpl$specter58515.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58515.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null, vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter58515.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
var newelem = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null, vals,self__.elem));
var removed = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(structure,self__.elem);
if((com.rpl.specter.NONE === newelem)){
return removed;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(removed,newelem);
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter58515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta58516","meta58516",1126783611,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58515.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58515.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58515");

(com.rpl.specter.t_com$rpl$specter58515.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58515");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58515.
 */
com.rpl.specter.__GT_t_com$rpl$specter58515 = (function com$rpl$specter$__GT_t_com$rpl$specter58515(elem,meta58516){
return (new com.rpl.specter.t_com$rpl$specter58515(elem,meta58516));
});


/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
return (new com.rpl.specter.t_com$rpl$specter58515(elem,null));
}));
/**
 * Navigate to the specified keys one after another. If navigate to NONE,
 *           that element is removed from the map or vector.
 */
com.rpl.specter.keypath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.keypath_STAR_) : com.rpl.specter.eachnav.call(null, com.rpl.specter.navs.keypath_STAR_));
/**
 * Navigate to the specified keys one after another, only if they exist
 *           in the data structure. If navigate to NONE, that element is removed
 *           from the map or vector.
 */
com.rpl.specter.must = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.must_STAR_) : com.rpl.specter.eachnav.call(null, com.rpl.specter.navs.must_STAR_));
/**
 * Navigate to the specified indices one after another. If navigate to
 *          NONE, that element is removed from the sequence.
 */
com.rpl.specter.nthpath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.nthpath_STAR_) : com.rpl.specter.eachnav.call(null, com.rpl.specter.navs.nthpath_STAR_));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58519 = (function (index,meta58520){
this.index = index;
this.meta58520 = meta58520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58521,meta58520__$1){
var self__ = this;
var _58521__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58519(self__.index,meta58520__$1));
}));

(com.rpl.specter.t_com$rpl$specter58519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58521){
var self__ = this;
var _58521__$1 = this;
return self__.meta58520;
}));

(com.rpl.specter.t_com$rpl$specter58519.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58519.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter58519.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null, vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.navs.insert_before_idx(structure,self__.index,v);
}
}));

(com.rpl.specter.t_com$rpl$specter58519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta58520","meta58520",-94123057,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58519.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58519.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58519");

(com.rpl.specter.t_com$rpl$specter58519.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58519");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58519.
 */
com.rpl.specter.__GT_t_com$rpl$specter58519 = (function com$rpl$specter$__GT_t_com$rpl$specter58519(index,meta58520){
return (new com.rpl.specter.t_com$rpl$specter58519(index,meta58520));
});


/**
 * Navigates to the empty space between the index and the prior index. For select
 *        navigates to NONE, and transforms to non-NONE insert at that position.
 */
com.rpl.specter.before_index = com.rpl.specter.impl.direct_nav_obj((function (index){
return (new com.rpl.specter.t_com$rpl$specter58519(index,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58522 = (function (i,meta58523){
this.i = i;
this.meta58523 = meta58523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58524,meta58523__$1){
var self__ = this;
var _58524__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58522(self__.i,meta58523__$1));
}));

(com.rpl.specter.t_com$rpl$specter58522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58524){
var self__ = this;
var _58524__$1 = this;
return self__.meta58523;
}));

(com.rpl.specter.t_com$rpl$specter58522.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58522.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null, vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter58522.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
var newi = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null, vals,self__.i));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(newi,self__.i)){
return structure;
} else {
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
if(cljs.core.vector_QMARK_(structure)){
var shifted = (((newi < self__.i))?(function (){var j = (self__.i - (1));
var s = structure;
while(true){
if((j < newi)){
return s;
} else {
var G__58798 = (j - (1));
var G__58799 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__58798;
s = G__58799;
continue;
}
break;
}
})():(function (){var j = (self__.i + (1));
var s = structure;
while(true){
if((j > newi)){
return s;
} else {
var G__58800 = (j + (1));
var G__58801 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__58800;
s = G__58801;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache58526;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info58527 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"com/rpl/specter.cljc",15,1,1006,1009,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache58526 = info58527;

return info58527;
})():info__19105__auto__);
var precompiled58528 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__58529 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled58528.cljs$core$IFn$_invoke$arity$1 ? precompiled58528.cljs$core$IFn$_invoke$arity$1(G__58529) : precompiled58528.call(null, G__58529));
} else {
return precompiled58528;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache58530;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info58531 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,1001,1003,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache58530 = info58531;

return info58531;
})():info__19105__auto__);
var precompiled58532 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__58533 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled58532.cljs$core$IFn$_invoke$arity$1 ? precompiled58532.cljs$core$IFn$_invoke$arity$1(G__58533) : precompiled58532.call(null, G__58533));
} else {
return precompiled58532;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter58522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta58523","meta58523",1152969458,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58522.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58522.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58522");

(com.rpl.specter.t_com$rpl$specter58522.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58522");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58522.
 */
com.rpl.specter.__GT_t_com$rpl$specter58522 = (function com$rpl$specter$__GT_t_com$rpl$specter58522(i,meta58523){
return (new com.rpl.specter.t_com$rpl$specter58522(i,meta58523));
});


/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
return (new com.rpl.specter.t_com$rpl$specter58522(i,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58554 = (function (start,meta58555){
this.start = start;
this.meta58555 = meta58555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58556,meta58555__$1){
var self__ = this;
var _58556__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58554(self__.start,meta58555__$1));
}));

(com.rpl.specter.t_com$rpl$specter58554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58556){
var self__ = this;
var _58556__$1 = this;
return self__.meta58555;
}));

(com.rpl.specter.t_com$rpl$specter58554.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58554.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((self__.start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14598__auto__,e){
var ret__14599__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

return next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null));
})()
;
if((ret__14599__auto__ === com.rpl.specter.NONE)){
return curr__14598__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__14599__auto__)){
return cljs.core.reduced(ret__14599__auto__);
} else {
return ret__14599__auto__;
}
}
}),com.rpl.specter.NONE,structure);
}));

(com.rpl.specter.t_com$rpl$specter58554.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__58557 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58557,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58557,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache58560;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info58561 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,717,720,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__58534_SHARP_){
return (p1__58534_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58534#","p1__58534#",-232773469,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__58534#","p1__58534#",-232773469,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__58535_SHARP_){
return (p1__58535_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58535#","p1__58535#",1172687681,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__58535#","p1__58535#",1172687681,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58534#","p1__58534#",-232773469,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__58534#","p1__58534#",-232773469,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58535#","p1__58535#",1172687681,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__58535#","p1__58535#",1172687681,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58534#","p1__58534#",-232773469,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__58534#","p1__58534#",-232773469,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58535#","p1__58535#",1172687681,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__58535#","p1__58535#",1172687681,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache58560 = info58561;

return info58561;
})():info__19105__auto__);
var precompiled58562 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__58563 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__58534_SHARP_){
return (p1__58534_SHARP_ >= (curri + (1)));
}),(function (p1__58535_SHARP_){
return (p1__58535_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__58534_SHARP_){
return (p1__58534_SHARP_ >= (curri + (1)));
}),(function (p1__58535_SHARP_){
return (p1__58535_SHARP_ <= newi);
})], null);
return (precompiled58562.cljs$core$IFn$_invoke$arity$1 ? precompiled58562.cljs$core$IFn$_invoke$arity$1(G__58563) : precompiled58562.call(null, G__58563));
} else {
return precompiled58562;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache58564;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info58565 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,1020,1023,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache58564 = info58565;

return info58565;
})():info__19105__auto__);
var precompiled58566 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__58567 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled58566.cljs$core$IFn$_invoke$arity$1 ? precompiled58566.cljs$core$IFn$_invoke$arity$1(G__58567) : precompiled58566.call(null, G__58567));
} else {
return precompiled58566;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache58569;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info58570 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,1001,1003,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache58569 = info58570;

return info58570;
})():info__19105__auto__);
var precompiled58571 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__58572 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled58571.cljs$core$IFn$_invoke$arity$1 ? precompiled58571.cljs$core$IFn$_invoke$arity$1(G__58572) : precompiled58571.call(null, G__58572));
} else {
return precompiled58571;
}
})(),newe,s));
}),structure,structure);
}));

(com.rpl.specter.t_com$rpl$specter58554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta58555","meta58555",-946541302,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58554.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58554.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58554");

(com.rpl.specter.t_com$rpl$specter58554.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58554");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58554.
 */
com.rpl.specter.__GT_t_com$rpl$specter58554 = (function com$rpl$specter$__GT_t_com$rpl$specter58554(start,meta58555){
return (new com.rpl.specter.t_com$rpl$specter58554(start,meta58555));
});




com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14598__auto__,e){
var ret__14599__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__58536 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58536) : next_fn.call(null, G__58536));
})()
;
if((ret__14599__auto__ === com.rpl.specter.NONE)){
return curr__14598__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__14599__auto__)){
return cljs.core.reduced(ret__14599__auto__);
} else {
return ret__14599__auto__;
}
}
}),com.rpl.specter.NONE,structure);
});

com.rpl.specter.indexed_vals_transform_STAR_ = (function com$rpl$specter$indexed_vals_transform_STAR_(start,structure,next_fn){
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__58537 = (function (){var G__58540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58540) : next_fn.call(null, G__58540));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58537,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58537,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache58541;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info58542 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,717,720,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__58534_SHARP_){
return (p1__58534_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58534#","p1__58534#",-232773469,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__58534#","p1__58534#",-232773469,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__58535_SHARP_){
return (p1__58535_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58535#","p1__58535#",1172687681,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__58535#","p1__58535#",1172687681,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58534#","p1__58534#",-232773469,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__58534#","p1__58534#",-232773469,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58535#","p1__58535#",1172687681,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__58535#","p1__58535#",1172687681,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58534#","p1__58534#",-232773469,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__58534#","p1__58534#",-232773469,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58535#","p1__58535#",1172687681,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__58535#","p1__58535#",1172687681,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache58541 = info58542;

return info58542;
})():info__19105__auto__);
var precompiled58543 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__58544 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__58534_SHARP_){
return (p1__58534_SHARP_ >= (curri + (1)));
}),(function (p1__58535_SHARP_){
return (p1__58535_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__58534_SHARP_){
return (p1__58534_SHARP_ >= (curri + (1)));
}),(function (p1__58535_SHARP_){
return (p1__58535_SHARP_ <= newi);
})], null);
return (precompiled58543.cljs$core$IFn$_invoke$arity$1 ? precompiled58543.cljs$core$IFn$_invoke$arity$1(G__58544) : precompiled58543.call(null, G__58544));
} else {
return precompiled58543;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache58546;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info58547 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,1020,1023,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache58546 = info58547;

return info58547;
})():info__19105__auto__);
var precompiled58548 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__58549 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled58548.cljs$core$IFn$_invoke$arity$1 ? precompiled58548.cljs$core$IFn$_invoke$arity$1(G__58549) : precompiled58548.call(null, G__58549));
} else {
return precompiled58548;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache58550;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info58551 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,1001,1003,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache58550 = info58551;

return info58551;
})():info__19105__auto__);
var precompiled58552 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__58553 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled58552.cljs$core$IFn$_invoke$arity$1 ? precompiled58552.cljs$core$IFn$_invoke$arity$1(G__58553) : precompiled58552.call(null, G__58553));
} else {
return precompiled58552;
}
})(),newe,s));
}),structure,structure);
});

/**
 * Navigate to [index elem] pairs for each element in a sequence. The sequence will be indexed
 *        starting from `start`. Changing index in transform has same effect as `index-nav`. Indices seen
 *        during transform take into account any shifting from prior sequence elements changing indices.
 */
com.rpl.specter.indexed_vals = com.rpl.specter.impl.direct_nav_obj((function (start){
return (new com.rpl.specter.t_com$rpl$specter58554(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = (com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1((0)) : com.rpl.specter.indexed_vals.call(null, (0)));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58573 = (function (afn,meta58574){
this.afn = afn;
this.meta58574 = meta58574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58575,meta58574__$1){
var self__ = this;
var _58575__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58573(self__.afn,meta58574__$1));
}));

(com.rpl.specter.t_com$rpl$specter58573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58575){
var self__ = this;
var _58575__$1 = this;
return self__.meta58574;
}));

(com.rpl.specter.t_com$rpl$specter58573.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58573.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__58576 = vals;
var G__58577 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null, structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__58576,G__58577) : next_fn.call(null, G__58576,G__58577));
}));

(com.rpl.specter.t_com$rpl$specter58573.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__58578 = vals;
var G__58579 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null, structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__58578,G__58579) : next_fn.call(null, G__58578,G__58579));
}));

(com.rpl.specter.t_com$rpl$specter58573.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta58574","meta58574",-754628958,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58573.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58573.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58573");

(com.rpl.specter.t_com$rpl$specter58573.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58573");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58573.
 */
com.rpl.specter.__GT_t_com$rpl$specter58573 = (function com$rpl$specter$__GT_t_com$rpl$specter58573(afn,meta58574){
return (new com.rpl.specter.t_com$rpl$specter58573(afn,meta58574));
});


/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter58573(afn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58584 = (function (parse_fn,unparse_fn,meta58585){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta58585 = meta58585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58586,meta58585__$1){
var self__ = this;
var _58586__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58584(self__.parse_fn,self__.unparse_fn,meta58585__$1));
}));

(com.rpl.specter.t_com$rpl$specter58584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58586){
var self__ = this;
var _58586__$1 = this;
return self__.meta58585;
}));

(com.rpl.specter.t_com$rpl$specter58584.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58584.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null, structure)));
}));

(com.rpl.specter.t_com$rpl$specter58584.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var G__58587 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null, structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__58587) : self__.unparse_fn.call(null, G__58587));
}));

(com.rpl.specter.t_com$rpl$specter58584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta58585","meta58585",99788944,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58584.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58584.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58584");

(com.rpl.specter.t_com$rpl$specter58584.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58584");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58584.
 */
com.rpl.specter.__GT_t_com$rpl$specter58584 = (function com$rpl$specter$__GT_t_com$rpl$specter58584(parse_fn,unparse_fn,meta58585){
return (new com.rpl.specter.t_com$rpl$specter58584(parse_fn,unparse_fn,meta58585));
});




com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__58581 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null, structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58581) : next_fn.call(null, G__58581));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__58582 = (function (){var G__58583 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null, structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58583) : next_fn.call(null, G__58583));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__58582) : unparse_fn.call(null, G__58582));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
return (new com.rpl.specter.t_com$rpl$specter58584(parse_fn,unparse_fn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58589 = (function (meta58590){
this.meta58590 = meta58590;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58591,meta58590__$1){
var self__ = this;
var _58591__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58589(meta58590__$1));
}));

(com.rpl.specter.t_com$rpl$specter58589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58591){
var self__ = this;
var _58591__$1 = this;
return self__.meta58590;
}));

(com.rpl.specter.t_com$rpl$specter58589.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58589.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.deref(structure));
}));

(com.rpl.specter.t_com$rpl$specter58589.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
}));

(com.rpl.specter.t_com$rpl$specter58589.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58590","meta58590",1247279901,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58589.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58589.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58589");

(com.rpl.specter.t_com$rpl$specter58589.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58589");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58589.
 */
com.rpl.specter.__GT_t_com$rpl$specter58589 = (function com$rpl$specter$__GT_t_com$rpl$specter58589(meta58590){
return (new com.rpl.specter.t_com$rpl$specter58589(meta58590));
});




com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__58588 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58588) : next_fn.call(null, G__58588));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (new com.rpl.specter.t_com$rpl$specter58589(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58593 = (function (re,meta58594){
this.re = re;
this.meta58594 = meta58594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58595,meta58594__$1){
var self__ = this;
var _58595__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58593(self__.re,meta58594__$1));
}));

(com.rpl.specter.t_com$rpl$specter58593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58595){
var self__ = this;
var _58595__$1 = this;
return self__.meta58594;
}));

(com.rpl.specter.t_com$rpl$specter58593.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58593.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14598__auto__,s){
var ret__14599__auto__ = next_fn(s);
if((ret__14599__auto__ === com.rpl.specter.NONE)){
return curr__14598__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__14599__auto__)){
return cljs.core.reduced(ret__14599__auto__);
} else {
return ret__14599__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(self__.re,structure));
}));

(com.rpl.specter.t_com$rpl$specter58593.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return clojure.string.replace(structure,self__.re,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta58594","meta58594",383915912,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58593.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58593.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58593");

(com.rpl.specter.t_com$rpl$specter58593.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58593");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58593.
 */
com.rpl.specter.__GT_t_com$rpl$specter58593 = (function com$rpl$specter$__GT_t_com$rpl$specter58593(re,meta58594){
return (new com.rpl.specter.t_com$rpl$specter58593(re,meta58594));
});




com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14598__auto__,s){
var ret__14599__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(s) : next_fn.call(null, s));
if((ret__14599__auto__ === com.rpl.specter.NONE)){
return curr__14598__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__14599__auto__)){
return cljs.core.reduced(ret__14599__auto__);
} else {
return ret__14599__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace(structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj((function (re){
return (new com.rpl.specter.t_com$rpl$specter58593(re,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58599 = (function (path,temp__5802__auto__,late,meta58600){
this.path = path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late = late;
this.meta58600 = meta58600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58601,meta58600__$1){
var self__ = this;
var _58601__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58599(self__.path,self__.temp__5802__auto__,self__.late,meta58600__$1));
}));

(com.rpl.specter.t_com$rpl$specter58599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58601){
var self__ = this;
var _58601__$1 = this;
return self__.meta58600;
}));

(com.rpl.specter.t_com$rpl$specter58599.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58599.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__58597_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__58597_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58599.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__58598_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__58598_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta58600","meta58600",-265152104,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58599.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58599.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58599");

(com.rpl.specter.t_com$rpl$specter58599.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58599");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58599.
 */
com.rpl.specter.__GT_t_com$rpl$specter58599 = (function com$rpl$specter$__GT_t_com$rpl$specter58599(path,temp__5802__auto__,late,meta58600){
return (new com.rpl.specter.t_com$rpl$specter58599(path,temp__5802__auto__,late,meta58600));
});


/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__58802__delegate = function (path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
return afn;
} else {
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter58599(path,temp__5802__auto__,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
}
};
var G__58802 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__58803__i = 0, G__58803__a = new Array(arguments.length -  0);
while (G__58803__i < G__58803__a.length) {G__58803__a[G__58803__i] = arguments[G__58803__i + 0]; ++G__58803__i;}
  path = new cljs.core.IndexedSeq(G__58803__a,0,null);
} 
return G__58802__delegate.call(this,path);};
G__58802.cljs$lang$maxFixedArity = 0;
G__58802.cljs$lang$applyTo = (function (arglist__58804){
var path = cljs.core.seq(arglist__58804);
return G__58802__delegate(path);
});
G__58802.cljs$core$IFn$_invoke$arity$variadic = G__58802__delegate;
return G__58802;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58604 = (function (path,temp__5802__auto__,late,meta58605){
this.path = path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late = late;
this.meta58605 = meta58605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58606,meta58605__$1){
var self__ = this;
var _58606__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58604(self__.path,self__.temp__5802__auto__,self__.late,meta58605__$1));
}));

(com.rpl.specter.t_com$rpl$specter58604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58606){
var self__ = this;
var _58606__$1 = this;
return self__.meta58605;
}));

(com.rpl.specter.t_com$rpl$specter58604.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58604.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__58602_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__58602_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58604.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__58603_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__58603_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta58605","meta58605",2045944905,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58604.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58604.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58604");

(com.rpl.specter.t_com$rpl$specter58604.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58604");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58604.
 */
com.rpl.specter.__GT_t_com$rpl$specter58604 = (function com$rpl$specter$__GT_t_com$rpl$specter58604(path,temp__5802__auto__,late,meta58605){
return (new com.rpl.specter.t_com$rpl$specter58604(path,temp__5802__auto__,late,meta58605));
});


com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__58805__delegate = function (path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null, s)));
});
} else {
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter58604(path,temp__5802__auto__,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
}
};
var G__58805 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__58806__i = 0, G__58806__a = new Array(arguments.length -  0);
while (G__58806__i < G__58806__a.length) {G__58806__a[G__58806__i] = arguments[G__58806__i + 0]; ++G__58806__i;}
  path = new cljs.core.IndexedSeq(G__58806__a,0,null);
} 
return G__58805__delegate.call(this,path);};
G__58805.cljs$lang$maxFixedArity = 0;
G__58805.cljs$lang$applyTo = (function (arglist__58807){
var path = cljs.core.seq(arglist__58807);
return G__58805__delegate(path);
});
G__58805.cljs$core$IFn$_invoke$arity$variadic = G__58805__delegate;
return G__58805;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 *   For transformation: `NONE` entries in the result sequence cause corresponding entries in
 *   input to be removed. A result sequence smaller than the input sequence is equivalent to
 *   padding the result sequence with `NONE` at the end until the same size as the input.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__58808__delegate = function (path){
var G__58608 = com.rpl.specter.ALL;
var G__58609 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null, path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__58608,G__58609) : com.rpl.specter.subselect.call(null, G__58608,G__58609));
};
var G__58808 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__58809__i = 0, G__58809__a = new Array(arguments.length -  0);
while (G__58809__i < G__58809__a.length) {G__58809__a[G__58809__i] = arguments[G__58809__i + 0]; ++G__58809__i;}
  path = new cljs.core.IndexedSeq(G__58809__a,0,null);
} 
return G__58808__delegate.call(this,path);};
G__58808.cljs$lang$maxFixedArity = 0;
G__58808.cljs$lang$applyTo = (function (arglist__58810){
var path = cljs.core.seq(arglist__58810);
return G__58808__delegate(path);
});
G__58808.cljs$core$IFn$_invoke$arity$variadic = G__58808__delegate;
return G__58808;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58610 = (function (path,update_fn,late,late_fn,meta58611){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta58611 = meta58611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58612,meta58611__$1){
var self__ = this;
var _58612__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58610(self__.path,self__.update_fn,self__.late,self__.late_fn,meta58611__$1));
}));

(com.rpl.specter.t_com$rpl$specter58610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58612){
var self__ = this;
var _58612__$1 = this;
return self__.meta58611;
}));

(com.rpl.specter.t_com$rpl$specter58610.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58610.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null, self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter58610.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null, self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter58610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta58611","meta58611",-687063138,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58610.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58610.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58610");

(com.rpl.specter.t_com$rpl$specter58610.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58610");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58610.
 */
com.rpl.specter.__GT_t_com$rpl$specter58610 = (function com$rpl$specter$__GT_t_com$rpl$specter58610(path,update_fn,late,late_fn,meta58611){
return (new com.rpl.specter.t_com$rpl$specter58610(path,update_fn,late,late_fn,meta58611));
});


/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
return (new com.rpl.specter.t_com$rpl$specter58610(path,update_fn,late,late_fn,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path)),update_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58613 = (function (path,reduce_fn,late,late_fn,meta58614){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta58614 = meta58614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58615,meta58614__$1){
var self__ = this;
var _58615__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58613(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta58614__$1));
}));

(com.rpl.specter.t_com$rpl$specter58613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58615){
var self__ = this;
var _58615__$1 = this;
return self__.meta58614;
}));

(com.rpl.specter.t_com$rpl$specter58613.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58613.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null, self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter58613.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null, self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter58613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta58614","meta58614",1983024559,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58613.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58613.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58613");

(com.rpl.specter.t_com$rpl$specter58613.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58613");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58613.
 */
com.rpl.specter.__GT_t_com$rpl$specter58613 = (function com$rpl$specter$__GT_t_com$rpl$specter58613(path,reduce_fn,late,late_fn,meta58614){
return (new com.rpl.specter.t_com$rpl$specter58613(path,reduce_fn,late,late_fn,meta58614));
});


/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
return (new com.rpl.specter.t_com$rpl$specter58613(path,reduce_fn,late,late_fn,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path)),reduce_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
var G__58618 = (function (p1__58617_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__58617_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__58618) : com.rpl.specter.pred.call(null, G__58618));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__58620 = (function (p1__58619_SHARP_){
return (p1__58619_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__58620) : com.rpl.specter.pred.call(null, G__58620));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__58622 = (function (p1__58621_SHARP_){
return (p1__58621_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__58622) : com.rpl.specter.pred.call(null, G__58622));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__58624 = (function (p1__58623_SHARP_){
return (p1__58623_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__58624) : com.rpl.specter.pred.call(null, G__58624));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__58626 = (function (p1__58625_SHARP_){
return (p1__58625_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__58626) : com.rpl.specter.pred.call(null, G__58626));
});
(com.rpl.specter.protocols.ImplicitNav["null"] = true);

(com.rpl.specter.protocols.implicit_nav["null"] = (function (this$){
return com.rpl.specter.STAY;
}));
(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null, this$__$1));
}));
(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null, this$__$1));
}));
(com.rpl.specter.protocols.ImplicitNav["string"] = true);

(com.rpl.specter.protocols.implicit_nav["string"] = (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null, this$));
}));
(com.rpl.specter.protocols.ImplicitNav["number"] = true);

(com.rpl.specter.protocols.implicit_nav["number"] = (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null, this$));
}));
(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null, this$__$1));
}));
(com.rpl.specter.protocols.ImplicitNav["boolean"] = true);

(com.rpl.specter.protocols.implicit_nav["boolean"] = (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null, this$));
}));
(com.rpl.specter.protocols.ImplicitNav["function"] = true);

(com.rpl.specter.protocols.implicit_nav["function"] = (function (this$){
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.pred.call(null, this$));
}));
(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.pred.call(null, this$__$1));
}));
(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.regex_nav.call(null, this$__$1));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58630 = (function (v,meta58631){
this.v = v;
this.meta58631 = meta58631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58632,meta58631__$1){
var self__ = this;
var _58632__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58630(self__.v,meta58631__$1));
}));

(com.rpl.specter.t_com$rpl$specter58630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58632){
var self__ = this;
var _58632__$1 = this;
return self__.meta58631;
}));

(com.rpl.specter.t_com$rpl$specter58630.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58630.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter58630.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter58630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta58631","meta58631",-265042318,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58630.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58630.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58630");

(com.rpl.specter.t_com$rpl$specter58630.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58630");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58630.
 */
com.rpl.specter.__GT_t_com$rpl$specter58630 = (function com$rpl$specter$__GT_t_com$rpl$specter58630(v,meta58631){
return (new com.rpl.specter.t_com$rpl$specter58630(v,meta58631));
});




com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
var G__58628 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58628) : next_fn.call(null, G__58628));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__58629 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58629) : next_fn.call(null, G__58629));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
return (new com.rpl.specter.t_com$rpl$specter58630(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__58634 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__58634) : com.rpl.specter.nil__GT_val.call(null, G__58634));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__58635 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__58635) : com.rpl.specter.nil__GT_val.call(null, G__58635));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__58636 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__58636) : com.rpl.specter.nil__GT_val.call(null, G__58636));
})();

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58639 = (function (meta58640){
this.meta58640 = meta58640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58641,meta58640__$1){
var self__ = this;
var _58641__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58639(meta58640__$1));
}));

(com.rpl.specter.t_com$rpl$specter58639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58641){
var self__ = this;
var _58641__$1 = this;
return self__.meta58640;
}));

(com.rpl.specter.t_com$rpl$specter58639.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58639.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.meta(structure));
}));

(com.rpl.specter.t_com$rpl$specter58639.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
}));

(com.rpl.specter.t_com$rpl$specter58639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58640","meta58640",-386081385,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58639.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58639.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58639");

(com.rpl.specter.t_com$rpl$specter58639.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58639");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58639.
 */
com.rpl.specter.__GT_t_com$rpl$specter58639 = (function com$rpl$specter$__GT_t_com$rpl$specter58639(meta58640){
return (new com.rpl.specter.t_com$rpl$specter58639(meta58640));
});




com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__58637 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58637) : next_fn.call(null, G__58637));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__58638 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58638) : next_fn.call(null, G__58638));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (new com.rpl.specter.t_com$rpl$specter58639(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58644 = (function (meta58645){
this.meta58645 = meta58645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58646,meta58645__$1){
var self__ = this;
var _58646__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58644(meta58645__$1));
}));

(com.rpl.specter.t_com$rpl$specter58644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58646){
var self__ = this;
var _58646__$1 = this;
return self__.meta58645;
}));

(com.rpl.specter.t_com$rpl$specter58644.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58644.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.name(structure));
}));

(com.rpl.specter.t_com$rpl$specter58644.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var new_name = next_fn(cljs.core.name(structure));
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("NAME can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
}));

(com.rpl.specter.t_com$rpl$specter58644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58645","meta58645",206878536,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58644.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58644.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58644");

(com.rpl.specter.t_com$rpl$specter58644.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58644");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58644.
 */
com.rpl.specter.__GT_t_com$rpl$specter58644 = (function com$rpl$specter$__GT_t_com$rpl$specter58644(meta58645){
return (new com.rpl.specter.t_com$rpl$specter58644(meta58645));
});




com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__58642 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58642) : next_fn.call(null, G__58642));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__58643 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58643) : next_fn.call(null, G__58643));
})();
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("NAME can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
});

/**
 * Navigates to the name portion of the keyword or symbol
 */
com.rpl.specter.NAME = (new com.rpl.specter.t_com$rpl$specter58644(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58650 = (function (meta58651){
this.meta58651 = meta58651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58652,meta58651__$1){
var self__ = this;
var _58652__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58650(meta58651__$1));
}));

(com.rpl.specter.t_com$rpl$specter58650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58652){
var self__ = this;
var _58652__$1 = this;
return self__.meta58651;
}));

(com.rpl.specter.t_com$rpl$specter58650.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58650.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.namespace(structure));
}));

(com.rpl.specter.t_com$rpl$specter58650.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var name = cljs.core.name(structure);
var new_ns = next_fn(cljs.core.namespace(structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("NAMESPACE can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
}));

(com.rpl.specter.t_com$rpl$specter58650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58651","meta58651",1241365303,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58650.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58650.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58650");

(com.rpl.specter.t_com$rpl$specter58650.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58650");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58650.
 */
com.rpl.specter.__GT_t_com$rpl$specter58650 = (function com$rpl$specter$__GT_t_com$rpl$specter58650(meta58651){
return (new com.rpl.specter.t_com$rpl$specter58650(meta58651));
});




com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__58648 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58648) : next_fn.call(null, G__58648));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__58649 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58649) : next_fn.call(null, G__58649));
})();
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("NAMESPACE can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
});

/**
 * Navigates to the namespace portion of the keyword or symbol
 */
com.rpl.specter.NAMESPACE = (new com.rpl.specter.t_com$rpl$specter58650(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58653 = (function (path,late,meta58654){
this.path = path;
this.late = late;
this.meta58654 = meta58654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58655,meta58654__$1){
var self__ = this;
var _58655__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58653(self__.path,self__.late,meta58654__$1));
}));

(com.rpl.specter.t_com$rpl$specter58653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58655){
var self__ = this;
var _58655__$1 = this;
return self__.meta58654;
}));

(com.rpl.specter.t_com$rpl$specter58653.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58653.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__58657 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null, self__.late,structure)));
var G__58658 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__58657,G__58658) : next_fn__19097__auto__.call(null, G__58657,G__58658));
}));

(com.rpl.specter.t_com$rpl$specter58653.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__58659 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null, self__.late,structure)));
var G__58660 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__58659,G__58660) : next_fn__19097__auto__.call(null, G__58659,G__58660));
}));

(com.rpl.specter.t_com$rpl$specter58653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta58654","meta58654",-878435168,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58653.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58653.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58653");

(com.rpl.specter.t_com$rpl$specter58653.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58653");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58653.
 */
com.rpl.specter.__GT_t_com$rpl$specter58653 = (function com$rpl$specter$__GT_t_com$rpl$specter58653(path,late,meta58654){
return (new com.rpl.specter.t_com$rpl$specter58653(path,late,meta58654));
});


com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__58811__delegate = function (path){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter58653(path,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
};
var G__58811 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__58812__i = 0, G__58812__a = new Array(arguments.length -  0);
while (G__58812__i < G__58812__a.length) {G__58812__a[G__58812__i] = arguments[G__58812__i + 0]; ++G__58812__i;}
  path = new cljs.core.IndexedSeq(G__58812__a,0,null);
} 
return G__58811__delegate.call(this,path);};
G__58811.cljs$lang$maxFixedArity = 0;
G__58811.cljs$lang$applyTo = (function (arglist__58813){
var path = cljs.core.seq(arglist__58813);
return G__58811__delegate(path);
});
G__58811.cljs$core$IFn$_invoke$arity$variadic = G__58811__delegate;
return G__58811;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58661 = (function (path,late,meta58662){
this.path = path;
this.late = late;
this.meta58662 = meta58662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58663,meta58662__$1){
var self__ = this;
var _58663__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58661(self__.path,self__.late,meta58662__$1));
}));

(com.rpl.specter.t_com$rpl$specter58661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58663){
var self__ = this;
var _58663__$1 = this;
return self__.meta58662;
}));

(com.rpl.specter.t_com$rpl$specter58661.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58661.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__58664 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null, self__.late,structure)));
var G__58665 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__58664,G__58665) : next_fn__19097__auto__.call(null, G__58664,G__58665));
}));

(com.rpl.specter.t_com$rpl$specter58661.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__58666 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null, self__.late,structure)));
var G__58667 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__58666,G__58667) : next_fn__19097__auto__.call(null, G__58666,G__58667));
}));

(com.rpl.specter.t_com$rpl$specter58661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta58662","meta58662",-1872398591,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58661.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58661.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58661");

(com.rpl.specter.t_com$rpl$specter58661.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58661");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58661.
 */
com.rpl.specter.__GT_t_com$rpl$specter58661 = (function com$rpl$specter$__GT_t_com$rpl$specter58661(path,late,meta58662){
return (new com.rpl.specter.t_com$rpl$specter58661(path,late,meta58662));
});


com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__58814__delegate = function (path){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter58661(path,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
};
var G__58814 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__58815__i = 0, G__58815__a = new Array(arguments.length -  0);
while (G__58815__i < G__58815__a.length) {G__58815__a[G__58815__i] = arguments[G__58815__i + 0]; ++G__58815__i;}
  path = new cljs.core.IndexedSeq(G__58815__a,0,null);
} 
return G__58814__delegate.call(this,path);};
G__58814.cljs$lang$maxFixedArity = 0;
G__58814.cljs$lang$applyTo = (function (arglist__58816){
var path = cljs.core.seq(arglist__58816);
return G__58814__delegate(path);
});
G__58814.cljs$core$IFn$_invoke$arity$variadic = G__58814__delegate;
return G__58814;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58668 = (function (val,meta58669){
this.val = val;
this.meta58669 = meta58669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58670,meta58669__$1){
var self__ = this;
var _58670__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58668(self__.val,meta58669__$1));
}));

(com.rpl.specter.t_com$rpl$specter58668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58670){
var self__ = this;
var _58670__$1 = this;
return self__.meta58669;
}));

(com.rpl.specter.t_com$rpl$specter58668.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58668.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__58671 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,self__.val);
var G__58672 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__58671,G__58672) : next_fn__19097__auto__.call(null, G__58671,G__58672));
}));

(com.rpl.specter.t_com$rpl$specter58668.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__58673 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,self__.val);
var G__58674 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__58673,G__58674) : next_fn__19097__auto__.call(null, G__58673,G__58674));
}));

(com.rpl.specter.t_com$rpl$specter58668.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta58669","meta58669",-895992347,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58668.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58668.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58668");

(com.rpl.specter.t_com$rpl$specter58668.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58668");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58668.
 */
com.rpl.specter.__GT_t_com$rpl$specter58668 = (function com$rpl$specter$__GT_t_com$rpl$specter58668(val,meta58669){
return (new com.rpl.specter.t_com$rpl$specter58668(val,meta58669));
});


/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj((function (val){
return (new com.rpl.specter.t_com$rpl$specter58668(val,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58675 = (function (path,late,meta58676){
this.path = path;
this.late = late;
this.meta58676 = meta58676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58677,meta58676__$1){
var self__ = this;
var _58677__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58675(self__.path,self__.late,meta58676__$1));
}));

(com.rpl.specter.t_com$rpl$specter58675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58677){
var self__ = this;
var _58677__$1 = this;
return self__.meta58676;
}));

(com.rpl.specter.t_com$rpl$specter58675.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58675.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null, vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter58675.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null, vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter58675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta58676","meta58676",-972414581,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58675.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58675.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58675");

(com.rpl.specter.t_com$rpl$specter58675.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58675");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58675.
 */
com.rpl.specter.__GT_t_com$rpl$specter58675 = (function com$rpl$specter$__GT_t_com$rpl$specter58675(path,late,meta58676){
return (new com.rpl.specter.t_com$rpl$specter58675(path,late,meta58676));
});


com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__58817__delegate = function (path){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter58675(path,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
};
var G__58817 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__58818__i = 0, G__58818__a = new Array(arguments.length -  0);
while (G__58818__i < G__58818__a.length) {G__58818__a[G__58818__i] = arguments[G__58818__i + 0]; ++G__58818__i;}
  path = new cljs.core.IndexedSeq(G__58818__a,0,null);
} 
return G__58817__delegate.call(this,path);};
G__58817.cljs$lang$maxFixedArity = 0;
G__58817.cljs$lang$applyTo = (function (arglist__58819){
var path = cljs.core.seq(arglist__58819);
return G__58817__delegate(path);
});
G__58817.cljs$core$IFn$_invoke$arity$variadic = G__58817__delegate;
return G__58817;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58681 = (function (meta58682){
this.meta58682 = meta58682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58683,meta58682__$1){
var self__ = this;
var _58683__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58681(meta58682__$1));
}));

(com.rpl.specter.t_com$rpl$specter58681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58683){
var self__ = this;
var _58683__$1 = this;
return self__.meta58682;
}));

(com.rpl.specter.t_com$rpl$specter58681.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58681.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__58684 = cljs.core.PersistentVector.EMPTY;
var G__58685 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__58684,G__58685) : next_fn.call(null, G__58684,G__58685));
}));

(com.rpl.specter.t_com$rpl$specter58681.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__58686 = cljs.core.PersistentVector.EMPTY;
var G__58687 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__58686,G__58687) : next_fn.call(null, G__58686,G__58687));
}));

(com.rpl.specter.t_com$rpl$specter58681.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58682","meta58682",-1818911368,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58681.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58681.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58681");

(com.rpl.specter.t_com$rpl$specter58681.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58681");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58681.
 */
com.rpl.specter.__GT_t_com$rpl$specter58681 = (function com$rpl$specter$__GT_t_com$rpl$specter58681(meta58682){
return (new com.rpl.specter.t_com$rpl$specter58681(meta58682));
});


/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (new com.rpl.specter.t_com$rpl$specter58681(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58690 = (function (cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta58691){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5802__auto__ = temp__5802__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta58691 = meta58691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58692,meta58691__$1){
var self__ = this;
var _58692__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58690(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5802__auto__,self__.afn,self__.late_then,self__.late_else,meta58691__$1));
}));

(com.rpl.specter.t_com$rpl$specter58690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58692){
var self__ = this;
var _58692__$1 = this;
return self__.meta58691;
}));

(com.rpl.specter.t_com$rpl$specter58690.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58690.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter58690.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter58690.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta58691","meta58691",-1174145880,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58690.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58690.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58690");

(com.rpl.specter.t_com$rpl$specter58690.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58690");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58690.
 */
com.rpl.specter.__GT_t_com$rpl$specter58690 = (function com$rpl$specter$__GT_t_com$rpl$specter58690(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta58691){
return (new com.rpl.specter.t_com$rpl$specter58690(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta58691));
});



/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58693 = (function (cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta58694){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta58694 = meta58694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58695,meta58694__$1){
var self__ = this;
var _58695__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58693(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5802__auto__,self__.late_cond,self__.late_then,self__.late_else,meta58694__$1));
}));

(com.rpl.specter.t_com$rpl$specter58693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58695){
var self__ = this;
var _58695__$1 = this;
return self__.meta58694;
}));

(com.rpl.specter.t_com$rpl$specter58693.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58693.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,(function (p1__58688_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__58688_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter58693.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,(function (p1__58689_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__58689_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter58693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta58694","meta58694",642240904,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58693.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58693.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58693");

(com.rpl.specter.t_com$rpl$specter58693.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58693");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58693.
 */
com.rpl.specter.__GT_t_com$rpl$specter58693 = (function com$rpl$specter$__GT_t_com$rpl$specter58693(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta58694){
return (new com.rpl.specter.t_com$rpl$specter58693(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta58694));
});


/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__58820 = null;
var G__58820__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null, cond_p,then_path,com.rpl.specter.STOP));
});
var G__58820__3 = (function (cond_p,then_path,else_path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_then,late_else){
return (new com.rpl.specter.t_com$rpl$specter58690(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null, then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null, else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
} else {
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_cond,late_then,late_else){
return (new com.rpl.specter.t_com$rpl$specter58693(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null, cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null, then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null, else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
}
});
G__58820 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__58820__2.call(this,cond_p,then_path);
case 3:
return G__58820__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__58820.cljs$core$IFn$_invoke$arity$2 = G__58820__2;
G__58820.cljs$core$IFn$_invoke$arity$3 = G__58820__3;
return G__58820;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__58821__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,p__58705){
var vec__58706 = p__58705;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58706,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58706,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null, tester,apath,p));
}),com.rpl.specter.STOP,pairs);
};
var G__58821 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__58822__i = 0, G__58822__a = new Array(arguments.length -  0);
while (G__58822__i < G__58822__a.length) {G__58822__a[G__58822__i] = arguments[G__58822__i + 0]; ++G__58822__i;}
  conds = new cljs.core.IndexedSeq(G__58822__a,0,null);
} 
return G__58821__delegate.call(this,conds);};
G__58821.cljs$lang$maxFixedArity = 0;
G__58821.cljs$lang$applyTo = (function (arglist__58823){
var conds = cljs.core.seq(arglist__58823);
return G__58821__delegate(conds);
});
G__58821.cljs$core$IFn$_invoke$arity$variadic = G__58821__delegate;
return G__58821;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58709 = (function (path1,path2,late1,late2,meta58710){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta58710 = meta58710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58711,meta58710__$1){
var self__ = this;
var _58711__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58709(self__.path1,self__.path2,self__.late1,self__.late2,meta58710__$1));
}));

(com.rpl.specter.t_com$rpl$specter58709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58711){
var self__ = this;
var _58711__$1 = this;
return self__.meta58710;
}));

(com.rpl.specter.t_com$rpl$specter58709.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58709.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_(self__.late1,vals,structure,next_fn);
if(cljs.core.reduced_QMARK_(res1)){
return res1;
} else {
var res2 = com.rpl.specter.protocols.select_STAR_(self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res1)){
return res2;
} else {
return res1;
}
}
}));

(com.rpl.specter.t_com$rpl$specter58709.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta58710","meta58710",-2080671998,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58709.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58709.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58709");

(com.rpl.specter.t_com$rpl$specter58709.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter58709");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58709.
 */
com.rpl.specter.__GT_t_com$rpl$specter58709 = (function com$rpl$specter$__GT_t_com$rpl$specter58709(path1,path2,late1,late2,meta58710){
return (new com.rpl.specter.t_com$rpl$specter58709(path1,path2,late1,late2,meta58710));
});


/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__58824 = null;
var G__58824__0 = (function (){
return com.rpl.specter.STAY;
});
var G__58824__1 = (function (path){
return path;
});
var G__58824__2 = (function (path1,path2){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
return (new com.rpl.specter.t_com$rpl$specter58709(path1,path2,late1,late2,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null, path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null, path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
});
var G__58824__3 = (function() { 
var G__58825__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null, path1,path2)),paths);
};
var G__58825 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__58826__i = 0, G__58826__a = new Array(arguments.length -  2);
while (G__58826__i < G__58826__a.length) {G__58826__a[G__58826__i] = arguments[G__58826__i + 2]; ++G__58826__i;}
  paths = new cljs.core.IndexedSeq(G__58826__a,0,null);
} 
return G__58825__delegate.call(this,path1,path2,paths);};
G__58825.cljs$lang$maxFixedArity = 2;
G__58825.cljs$lang$applyTo = (function (arglist__58827){
var path1 = cljs.core.first(arglist__58827);
arglist__58827 = cljs.core.next(arglist__58827);
var path2 = cljs.core.first(arglist__58827);
var paths = cljs.core.rest(arglist__58827);
return G__58825__delegate(path1,path2,paths);
});
G__58825.cljs$core$IFn$_invoke$arity$variadic = G__58825__delegate;
return G__58825;
})()
;
G__58824 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__58824__0.call(this);
case 1:
return G__58824__1.call(this,path1);
case 2:
return G__58824__2.call(this,path1,path2);
default:
var G__58828 = null;
if (arguments.length > 2) {
var G__58829__i = 0, G__58829__a = new Array(arguments.length -  2);
while (G__58829__i < G__58829__a.length) {G__58829__a[G__58829__i] = arguments[G__58829__i + 2]; ++G__58829__i;}
G__58828 = new cljs.core.IndexedSeq(G__58829__a,0,null);
}
return G__58824__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__58828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__58824.cljs$lang$maxFixedArity = 2;
G__58824.cljs$lang$applyTo = G__58824__3.cljs$lang$applyTo;
G__58824.cljs$core$IFn$_invoke$arity$0 = G__58824__0;
G__58824.cljs$core$IFn$_invoke$arity$1 = G__58824__1;
G__58824.cljs$core$IFn$_invoke$arity$2 = G__58824__2;
G__58824.cljs$core$IFn$_invoke$arity$variadic = G__58824__3.cljs$core$IFn$_invoke$arity$variadic;
return G__58824;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__58830__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null, com.rpl.specter.STAY,path));
};
var G__58830 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__58831__i = 0, G__58831__a = new Array(arguments.length -  0);
while (G__58831__i < G__58831__a.length) {G__58831__a[G__58831__i] = arguments[G__58831__i + 0]; ++G__58831__i;}
  path = new cljs.core.IndexedSeq(G__58831__a,0,null);
} 
return G__58830__delegate.call(this,path);};
G__58830.cljs$lang$maxFixedArity = 0;
G__58830.cljs$lang$applyTo = (function (arglist__58832){
var path = cljs.core.seq(arglist__58832);
return G__58830__delegate(path);
});
G__58830.cljs$core$IFn$_invoke$arity$variadic = G__58830__delegate;
return G__58830;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__58833__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null, path,com.rpl.specter.STAY));
};
var G__58833 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__58834__i = 0, G__58834__a = new Array(arguments.length -  0);
while (G__58834__i < G__58834__a.length) {G__58834__a[G__58834__i] = arguments[G__58834__i + 0]; ++G__58834__i;}
  path = new cljs.core.IndexedSeq(G__58834__a,0,null);
} 
return G__58833__delegate.call(this,path);};
G__58833.cljs$lang$maxFixedArity = 0;
G__58833.cljs$lang$applyTo = (function (arglist__58835){
var path = cljs.core.seq(arglist__58835);
return G__58833__delegate(path);
});
G__58833.cljs$core$IFn$_invoke$arity$variadic = G__58833__delegate;
return G__58833;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__19105__auto__ = com.rpl.specter.pathcache58716;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info58717 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),1432,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1212,1216,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,682,684,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2181,2181,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,717,720,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache58716 = info58717;

return info58717;
})():info__19105__auto__);
var precompiled58718 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__58719 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled58718.cljs$core$IFn$_invoke$arity$1 ? precompiled58718.cljs$core$IFn$_invoke$arity$1(G__58719) : precompiled58718.call(null, G__58719));
} else {
return precompiled58718;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__19105__auto__ = com.rpl.specter.pathcache58720;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info58721 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),1432,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1212,1216,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,682,684,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2181,2181,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"com/rpl/specter.cljc",16,1,727,729,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache58720 = info58721;

return info58721;
})():info__19105__auto__);
var precompiled58722 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__58723 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled58722.cljs$core$IFn$_invoke$arity$1 ? precompiled58722.cljs$core$IFn$_invoke$arity$1(G__58723) : precompiled58722.call(null, G__58723));
} else {
return precompiled58722;
}
})());

return p;
}));
var empty__GT_NONE_58836 = (function (){var G__58724 = cljs.core.empty_QMARK_;
var G__58725 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__58724,G__58725) : com.rpl.specter.if_path.call(null, G__58724,G__58725));
})();
var compact_STAR__58837 = (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_58836) : com.rpl.specter.multi_path.call(null, nav,empty__GT_NONE_58836));
});
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__58838__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__58837,path);
};
var G__58838 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__58839__i = 0, G__58839__a = new Array(arguments.length -  0);
while (G__58839__i < G__58839__a.length) {G__58839__a[G__58839__i] = arguments[G__58839__i + 0]; ++G__58839__i;}
  path = new cljs.core.IndexedSeq(G__58839__a,0,null);
} 
return G__58838__delegate.call(this,path);};
G__58838.cljs$lang$maxFixedArity = 0;
G__58838.cljs$lang$applyTo = (function (arglist__58840){
var path = cljs.core.seq(arglist__58840);
return G__58838__delegate(path);
});
G__58838.cljs$core$IFn$_invoke$arity$variadic = G__58838__delegate;
return G__58838;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=com.rpl.specter.js.map
