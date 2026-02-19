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
var G__39830__delegate = function (args){
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
var G__39830 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39831__i = 0, G__39831__a = new Array(arguments.length -  0);
while (G__39831__i < G__39831__a.length) {G__39831__a[G__39831__i] = arguments[G__39831__i + 0]; ++G__39831__i;}
  args = new cljs.core.IndexedSeq(G__39831__a,0,null);
} 
return G__39830__delegate.call(this,args);};
G__39830.cljs$lang$maxFixedArity = 0;
G__39830.cljs$lang$applyTo = (function (arglist__39832){
var args = cljs.core.seq(arglist__39832);
return G__39830__delegate(args);
});
G__39830.cljs$core$IFn$_invoke$arity$variadic = G__39830__delegate;
return G__39830;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__5732__auto__ = [];
var len__5726__auto___39833 = arguments.length;
var i__5727__auto___39834 = (0);
while(true){
if((i__5727__auto___39834 < len__5726__auto___39833)){
args__5732__auto__.push((arguments[i__5727__auto___39834]));

var G__39835 = (i__5727__auto___39834 + (1));
i__5727__auto___39834 = G__39835;
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
(com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq39468){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39468));
}));

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__39471 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__39472 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__39471,G__39472) : com.rpl.specter.compiled_select.call(null, G__39471,G__39472));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__39474 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__39475 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__39474,G__39475) : com.rpl.specter.compiled_select_one.call(null, G__39474,G__39475));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__39477 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__39478 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__39477,G__39478) : com.rpl.specter.compiled_select_one_BANG_.call(null, G__39477,G__39478));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__39480 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__39481 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__39480,G__39481) : com.rpl.specter.compiled_select_first.call(null, G__39480,G__39481));
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
var G__39482 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__39483 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__39482,G__39483) : com.rpl.specter.compiled_select_any.call(null, G__39482,G__39483));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__39484 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__39485 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__39484,G__39485) : com.rpl.specter.compiled_selected_any_QMARK_.call(null, G__39484,G__39485));
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
var G__39488 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__39489 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__39488,G__39489) : com.rpl.specter.compiled_traverse.call(null, G__39488,G__39489));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__39491 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__39491) : com.rpl.specter.compiled_traverse_all.call(null, G__39491));
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
var G__39493 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__39494 = transform_fn;
var G__39495 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__39493,G__39494,G__39495) : com.rpl.specter.compiled_transform.call(null, G__39493,G__39494,G__39495));
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
var G__39497 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__39498 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__39497,G__39498) : com.rpl.specter.compiled_multi_transform.call(null, G__39497,G__39498));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__39500 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__39501 = val;
var G__39502 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__39500,G__39501,G__39502) : com.rpl.specter.compiled_setval.call(null, G__39500,G__39501,G__39502));
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
var len__5726__auto___39842 = arguments.length;
var i__5727__auto___39843 = (0);
while(true){
if((i__5727__auto___39843 < len__5726__auto___39842)){
args__5732__auto__.push((arguments[i__5727__auto___39843]));

var G__39844 = (i__5727__auto___39843 + (1));
i__5727__auto___39843 = G__39844;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__39509){
var map__39510 = p__39509;
var map__39510__$1 = cljs.core.__destructure_map(map__39510);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39510__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var G__39511 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__39512 = transform_fn;
var G__39513 = structure;
var G__39514 = new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341);
var G__39515 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__39511,G__39512,G__39513,G__39514,G__39515) : com.rpl.specter.compiled_replace_in.call(null, G__39511,G__39512,G__39513,G__39514,G__39515));
}));

(com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq39505){
var G__39506 = cljs.core.first(seq39505);
var seq39505__$1 = cljs.core.next(seq39505);
var G__39507 = cljs.core.first(seq39505__$1);
var seq39505__$2 = cljs.core.next(seq39505__$1);
var G__39508 = cljs.core.first(seq39505__$2);
var seq39505__$3 = cljs.core.next(seq39505__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39506,G__39507,G__39508,seq39505__$3);
}));

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
com.rpl.specter.eachnav = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (navfn){
var latenavfn = (com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1(navfn) : com.rpl.specter.late_resolved_fn.call(null, navfn));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__39845__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__39845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39846__i = 0, G__39846__a = new Array(arguments.length -  0);
while (G__39846__i < G__39846__a.length) {G__39846__a[G__39846__i] = arguments[G__39846__i + 0]; ++G__39846__i;}
  args = new cljs.core.IndexedSeq(G__39846__a,0,null);
} 
return G__39845__delegate.call(this,args);};
G__39845.cljs$lang$maxFixedArity = 0;
G__39845.cljs$lang$applyTo = (function (arglist__39847){
var args = cljs.core.seq(arglist__39847);
return G__39845__delegate(args);
});
G__39845.cljs$core$IFn$_invoke$arity$variadic = G__39845__delegate;
return G__39845;
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
com.rpl.specter.t_com$rpl$specter39518 = (function (meta39519){
this.meta39519 = meta39519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39520,meta39519__$1){
var self__ = this;
var _39520__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39518(meta39519__$1));
}));

(com.rpl.specter.t_com$rpl$specter39518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39520){
var self__ = this;
var _39520__$1 = this;
return self__.meta39519;
}));

(com.rpl.specter.t_com$rpl$specter39518.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39518.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter39518.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return structure;
}));

(com.rpl.specter.t_com$rpl$specter39518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39519","meta39519",1247755418,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39518.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39518.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39518");

(com.rpl.specter.t_com$rpl$specter39518.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39518");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39518.
 */
com.rpl.specter.__GT_t_com$rpl$specter39518 = (function com$rpl$specter$__GT_t_com$rpl$specter39518(meta39519){
return (new com.rpl.specter.t_com$rpl$specter39518(meta39519));
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
com.rpl.specter.STOP = (new com.rpl.specter.t_com$rpl$specter39518(null));
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
com.rpl.specter.t_com$rpl$specter39521 = (function (afn,meta39522){
this.afn = afn;
this.meta39522 = meta39522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39523,meta39522__$1){
var self__ = this;
var _39523__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39521(self__.afn,meta39522__$1));
}));

(com.rpl.specter.t_com$rpl$specter39521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39523){
var self__ = this;
var _39523__$1 = this;
return self__.meta39522;
}));

(com.rpl.specter.t_com$rpl$specter39521.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39521.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter39521.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter39521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta39522","meta39522",1088653848,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39521.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39521.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39521");

(com.rpl.specter.t_com$rpl$specter39521.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39521");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39521.
 */
com.rpl.specter.__GT_t_com$rpl$specter39521 = (function com$rpl$specter$__GT_t_com$rpl$specter39521(afn,meta39522){
return (new com.rpl.specter.t_com$rpl$specter39521(afn,meta39522));
});


/**
 * Defines an endpoint in the navigation the transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter39521(afn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39525 = (function (afn,meta39526){
this.afn = afn;
this.meta39526 = meta39526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39527,meta39526__$1){
var self__ = this;
var _39527__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39525(self__.afn,meta39526__$1));
}));

(com.rpl.specter.t_com$rpl$specter39525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39527){
var self__ = this;
var _39527__$1 = this;
return self__.meta39526;
}));

(com.rpl.specter.t_com$rpl$specter39525.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39525.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter39525.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null, vals,structure));
}));

(com.rpl.specter.t_com$rpl$specter39525.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta39526","meta39526",-2099981690,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39525.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39525.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39525");

(com.rpl.specter.t_com$rpl$specter39525.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39525");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39525.
 */
com.rpl.specter.__GT_t_com$rpl$specter39525 = (function com$rpl$specter$__GT_t_com$rpl$specter39525(afn,meta39526){
return (new com.rpl.specter.t_com$rpl$specter39525(afn,meta39526));
});


/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter39525(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__39530 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__39530) : com.rpl.specter.terminal.call(null, G__39530));
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39532 = (function (meta39533){
this.meta39533 = meta39533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39534,meta39533__$1){
var self__ = this;
var _39534__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39532(meta39533__$1));
}));

(com.rpl.specter.t_com$rpl$specter39532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39534){
var self__ = this;
var _39534__$1 = this;
return self__.meta39533;
}));

(com.rpl.specter.t_com$rpl$specter39532.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39532.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39532.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.all_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39533","meta39533",-1642728494,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39532.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39532.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39532");

(com.rpl.specter.t_com$rpl$specter39532.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39532");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39532.
 */
com.rpl.specter.__GT_t_com$rpl$specter39532 = (function com$rpl$specter$__GT_t_com$rpl$specter39532(meta39533){
return (new com.rpl.specter.t_com$rpl$specter39532(meta39533));
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
com.rpl.specter.ALL = (new com.rpl.specter.t_com$rpl$specter39532(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39536 = (function (meta39537){
this.meta39537 = meta39537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39538,meta39537__$1){
var self__ = this;
var _39538__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39536(meta39537__$1));
}));

(com.rpl.specter.t_com$rpl$specter39536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39538){
var self__ = this;
var _39538__$1 = this;
return self__.meta39537;
}));

(com.rpl.specter.t_com$rpl$specter39536.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39536.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39536.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter39536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39537","meta39537",1854548334,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39536.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39536.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39536");

(com.rpl.specter.t_com$rpl$specter39536.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39536");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39536.
 */
com.rpl.specter.__GT_t_com$rpl$specter39536 = (function com$rpl$specter$__GT_t_com$rpl$specter39536(meta39537){
return (new com.rpl.specter.t_com$rpl$specter39536(meta39537));
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
com.rpl.specter.ALL_WITH_META = (new com.rpl.specter.t_com$rpl$specter39536(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39540 = (function (meta39541){
this.meta39541 = meta39541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39542,meta39541__$1){
var self__ = this;
var _39542__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39540(meta39541__$1));
}));

(com.rpl.specter.t_com$rpl$specter39540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39542){
var self__ = this;
var _39542__$1 = this;
return self__.meta39541;
}));

(com.rpl.specter.t_com$rpl$specter39540.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39540.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter39540.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39541","meta39541",2052888713,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39540.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39540.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39540");

(com.rpl.specter.t_com$rpl$specter39540.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39540");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39540.
 */
com.rpl.specter.__GT_t_com$rpl$specter39540 = (function com$rpl$specter$__GT_t_com$rpl$specter39540(meta39541){
return (new com.rpl.specter.t_com$rpl$specter39540(meta39541));
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
com.rpl.specter.MAP_VALS = (new com.rpl.specter.t_com$rpl$specter39540(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39544 = (function (meta39545){
this.meta39545 = meta39545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39546,meta39545__$1){
var self__ = this;
var _39546__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39544(meta39545__$1));
}));

(com.rpl.specter.t_com$rpl$specter39544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39546){
var self__ = this;
var _39546__$1 = this;
return self__.meta39545;
}));

(com.rpl.specter.t_com$rpl$specter39544.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39544.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter39544.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39545","meta39545",1625037213,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39544.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39544.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39544");

(com.rpl.specter.t_com$rpl$specter39544.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39544");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39544.
 */
com.rpl.specter.__GT_t_com$rpl$specter39544 = (function com$rpl$specter$__GT_t_com$rpl$specter39544(meta39545){
return (new com.rpl.specter.t_com$rpl$specter39544(meta39545));
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
com.rpl.specter.MAP_KEYS = (new com.rpl.specter.t_com$rpl$specter39544(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39548 = (function (meta39549){
this.meta39549 = meta39549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39550,meta39549__$1){
var self__ = this;
var _39550__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39548(meta39549__$1));
}));

(com.rpl.specter.t_com$rpl$specter39548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39550){
var self__ = this;
var _39550__$1 = this;
return self__.meta39549;
}));

(com.rpl.specter.t_com$rpl$specter39548.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39548.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__39551 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,structure);
var G__39552 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__39551,G__39552) : next_fn__19097__auto__.call(null, G__39551,G__39552));
}));

(com.rpl.specter.t_com$rpl$specter39548.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__39553 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,structure);
var G__39554 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__39553,G__39554) : next_fn__19097__auto__.call(null, G__39553,G__39554));
}));

(com.rpl.specter.t_com$rpl$specter39548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39549","meta39549",-947146275,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39548.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39548.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39548");

(com.rpl.specter.t_com$rpl$specter39548.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39548");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39548.
 */
com.rpl.specter.__GT_t_com$rpl$specter39548 = (function com$rpl$specter$__GT_t_com$rpl$specter39548(meta39549){
return (new com.rpl.specter.t_com$rpl$specter39548(meta39549));
});


com.rpl.specter.VAL = (new com.rpl.specter.t_com$rpl$specter39548(null));
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
com.rpl.specter.t_com$rpl$specter39560 = (function (start_index_fn,end_index_fn,meta39561){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta39561 = meta39561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39562,meta39561__$1){
var self__ = this;
var _39562__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39560(self__.start_index_fn,self__.end_index_fn,meta39561__$1));
}));

(com.rpl.specter.t_com$rpl$specter39560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39562){
var self__ = this;
var _39562__$1 = this;
return self__.meta39561;
}));

(com.rpl.specter.t_com$rpl$specter39560.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39560.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null, structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39560.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null, structure));
var G__39563 = structure;
var G__39564 = s;
var G__39565 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__39566 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__39563,G__39564,G__39565,G__39566) : com.rpl.specter.navs.srange_transform.call(null, G__39563,G__39564,G__39565,G__39566));
}));

(com.rpl.specter.t_com$rpl$specter39560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta39561","meta39561",1936271425,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39560.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39560.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39560");

(com.rpl.specter.t_com$rpl$specter39560.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39560");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39560.
 */
com.rpl.specter.__GT_t_com$rpl$specter39560 = (function com$rpl$specter$__GT_t_com$rpl$specter39560(start_index_fn,end_index_fn,meta39561){
return (new com.rpl.specter.t_com$rpl$specter39560(start_index_fn,end_index_fn,meta39561));
});




com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null, structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null, structure));
var G__39555 = structure;
var G__39556 = s;
var G__39557 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__39558 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__39555,G__39556,G__39557,G__39558) : com.rpl.specter.navs.srange_transform.call(null, G__39555,G__39556,G__39557,G__39558));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
return (new com.rpl.specter.t_com$rpl$specter39560(start_index_fn,end_index_fn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39567 = (function (start,end,meta39568){
this.start = start;
this.end = end;
this.meta39568 = meta39568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39569,meta39568__$1){
var self__ = this;
var _39569__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39567(self__.start,self__.end,meta39568__$1));
}));

(com.rpl.specter.t_com$rpl$specter39567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39569){
var self__ = this;
var _39569__$1 = this;
return self__.meta39568;
}));

(com.rpl.specter.t_com$rpl$specter39567.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39567.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39567.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null, structure,self__.start,self__.end,next_fn));
}));

(com.rpl.specter.t_com$rpl$specter39567.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta39568","meta39568",227341902,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39567.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39567.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39567");

(com.rpl.specter.t_com$rpl$specter39567.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39567");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39567.
 */
com.rpl.specter.__GT_t_com$rpl$specter39567 = (function com$rpl$specter$__GT_t_com$rpl$specter39567(start,end,meta39568){
return (new com.rpl.specter.t_com$rpl$specter39567(start,end,meta39568));
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
return (new com.rpl.specter.t_com$rpl$specter39567(start,end,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39575 = (function (pred,meta39576){
this.pred = pred;
this.meta39576 = meta39576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39577,meta39576__$1){
var self__ = this;
var _39577__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39575(self__.pred,meta39576__$1));
}));

(com.rpl.specter.t_com$rpl$specter39575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39577){
var self__ = this;
var _39577__$1 = this;
return self__.meta39576;
}));

(com.rpl.specter.t_com$rpl$specter39575.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39575.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14598__auto__,p__39579){
var vec__39580 = p__39579;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39580,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39580,(1),null);
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

(com.rpl.specter.t_com$rpl$specter39575.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta39576","meta39576",-359002204,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39575.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39575.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39575");

(com.rpl.specter.t_com$rpl$specter39575.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39575");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39575.
 */
com.rpl.specter.__GT_t_com$rpl$specter39575 = (function com$rpl$specter$__GT_t_com$rpl$specter39575(pred,meta39576){
return (new com.rpl.specter.t_com$rpl$specter39575(pred,meta39576));
});




com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14598__auto__,p__39571){
var vec__39572 = p__39571;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39572,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39572,(1),null);
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
return (new com.rpl.specter.t_com$rpl$specter39575(pred,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39585 = (function (meta39586){
this.meta39586 = meta39586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39587,meta39586__$1){
var self__ = this;
var _39587__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39585(meta39586__$1));
}));

(com.rpl.specter.t_com$rpl$specter39585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39587){
var self__ = this;
var _39587__$1 = this;
return self__.meta39586;
}));

(com.rpl.specter.t_com$rpl$specter39585.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39585.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter39585.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter39585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39586","meta39586",770740877,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39585.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39585.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39585");

(com.rpl.specter.t_com$rpl$specter39585.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39585");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39585.
 */
com.rpl.specter.__GT_t_com$rpl$specter39585 = (function com$rpl$specter$__GT_t_com$rpl$specter39585(meta39586){
return (new com.rpl.specter.t_com$rpl$specter39585(meta39586));
});




com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__39583 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__39583) : next_fn.call(null, G__39583));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null, ""))),structure].join('');
} else {
var to_prepend = (function (){var G__39584 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__39584) : next_fn.call(null, G__39584));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (new com.rpl.specter.t_com$rpl$specter39585(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39591 = (function (meta39592){
this.meta39592 = meta39592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39593,meta39592__$1){
var self__ = this;
var _39593__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39591(meta39592__$1));
}));

(com.rpl.specter.t_com$rpl$specter39591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39593){
var self__ = this;
var _39593__$1 = this;
return self__.meta39592;
}));

(com.rpl.specter.t_com$rpl$specter39591.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39591.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter39591.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter39591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39592","meta39592",200969448,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39591.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39591.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39591");

(com.rpl.specter.t_com$rpl$specter39591.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39591");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39591.
 */
com.rpl.specter.__GT_t_com$rpl$specter39591 = (function com$rpl$specter$__GT_t_com$rpl$specter39591(meta39592){
return (new com.rpl.specter.t_com$rpl$specter39591(meta39592));
});




com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__39589 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__39589) : next_fn.call(null, G__39589));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null, "")))].join('');
} else {
var to_append = (function (){var G__39590 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__39590) : next_fn.call(null, G__39590));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (new com.rpl.specter.t_com$rpl$specter39591(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39595 = (function (meta39596){
this.meta39596 = meta39596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39597,meta39596__$1){
var self__ = this;
var _39597__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39595(meta39596__$1));
}));

(com.rpl.specter.t_com$rpl$specter39595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39597){
var self__ = this;
var _39597__$1 = this;
return self__.meta39596;
}));

(com.rpl.specter.t_com$rpl$specter39595.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39595.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter39595.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter39595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39596","meta39596",-1511348038,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39595.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39595.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39595");

(com.rpl.specter.t_com$rpl$specter39595.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39595");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39595.
 */
com.rpl.specter.__GT_t_com$rpl$specter39595 = (function com$rpl$specter$__GT_t_com$rpl$specter39595(meta39596){
return (new com.rpl.specter.t_com$rpl$specter39595(meta39596));
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
com.rpl.specter.NONE_ELEM = (new com.rpl.specter.t_com$rpl$specter39595(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39599 = (function (meta39600){
this.meta39600 = meta39600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39601,meta39600__$1){
var self__ = this;
var _39601__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39599(meta39600__$1));
}));

(com.rpl.specter.t_com$rpl$specter39599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39601){
var self__ = this;
var _39601__$1 = this;
return self__.meta39600;
}));

(com.rpl.specter.t_com$rpl$specter39599.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39599.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter39599.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter39599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39600","meta39600",917379637,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39599.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39599.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39599");

(com.rpl.specter.t_com$rpl$specter39599.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39599");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39599.
 */
com.rpl.specter.__GT_t_com$rpl$specter39599 = (function com$rpl$specter$__GT_t_com$rpl$specter39599(meta39600){
return (new com.rpl.specter.t_com$rpl$specter39599(meta39600));
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
com.rpl.specter.BEFORE_ELEM = (new com.rpl.specter.t_com$rpl$specter39599(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39602 = (function (meta39603){
this.meta39603 = meta39603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39604,meta39603__$1){
var self__ = this;
var _39604__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39602(meta39603__$1));
}));

(com.rpl.specter.t_com$rpl$specter39602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39604){
var self__ = this;
var _39604__$1 = this;
return self__.meta39603;
}));

(com.rpl.specter.t_com$rpl$specter39602.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39602.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter39602.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter39602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39603","meta39603",978208243,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39602.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39602.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39602");

(com.rpl.specter.t_com$rpl$specter39602.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39602");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39602.
 */
com.rpl.specter.__GT_t_com$rpl$specter39602 = (function com$rpl$specter$__GT_t_com$rpl$specter39602(meta39603){
return (new com.rpl.specter.t_com$rpl$specter39602(meta39603));
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
com.rpl.specter.AFTER_ELEM = (new com.rpl.specter.t_com$rpl$specter39602(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39607 = (function (aset,meta39608){
this.aset = aset;
this.meta39608 = meta39608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39609,meta39608__$1){
var self__ = this;
var _39609__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39607(self__.aset,meta39608__$1));
}));

(com.rpl.specter.t_com$rpl$specter39607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39609){
var self__ = this;
var _39609__$1 = this;
return self__.meta39608;
}));

(com.rpl.specter.t_com$rpl$specter39607.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39607.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
}));

(com.rpl.specter.t_com$rpl$specter39607.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
}));

(com.rpl.specter.t_com$rpl$specter39607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta39608","meta39608",1175175264,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39607.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39607.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39607");

(com.rpl.specter.t_com$rpl$specter39607.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39607");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39607.
 */
com.rpl.specter.__GT_t_com$rpl$specter39607 = (function com$rpl$specter$__GT_t_com$rpl$specter39607(aset,meta39608){
return (new com.rpl.specter.t_com$rpl$specter39607(aset,meta39608));
});




com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__39606 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__39606) : next_fn.call(null, G__39606));
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
return (new com.rpl.specter.t_com$rpl$specter39607(aset,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39612 = (function (m_keys,meta39613){
this.m_keys = m_keys;
this.meta39613 = meta39613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39614,meta39613__$1){
var self__ = this;
var _39614__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39612(self__.m_keys,meta39613__$1));
}));

(com.rpl.specter.t_com$rpl$specter39612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39614){
var self__ = this;
var _39614__$1 = this;
return self__.meta39613;
}));

(com.rpl.specter.t_com$rpl$specter39612.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39612.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
}));

(com.rpl.specter.t_com$rpl$specter39612.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
}));

(com.rpl.specter.t_com$rpl$specter39612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta39613","meta39613",-608648641,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39612.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39612.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39612");

(com.rpl.specter.t_com$rpl$specter39612.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39612");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39612.
 */
com.rpl.specter.__GT_t_com$rpl$specter39612 = (function com$rpl$specter$__GT_t_com$rpl$specter39612(m_keys,meta39613){
return (new com.rpl.specter.t_com$rpl$specter39612(m_keys,meta39613));
});




com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__39611 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__39611) : next_fn.call(null, G__39611));
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
return (new com.rpl.specter.t_com$rpl$specter39612(m_keys,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39615 = (function (path,late,meta39616){
this.path = path;
this.late = late;
this.meta39616 = meta39616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39617,meta39616__$1){
var self__ = this;
var _39617__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39615(self__.path,self__.late,meta39616__$1));
}));

(com.rpl.specter.t_com$rpl$specter39615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39617){
var self__ = this;
var _39617__$1 = this;
return self__.meta39616;
}));

(com.rpl.specter.t_com$rpl$specter39615.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39615.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null, self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter39615.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null, self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(transformed));
var G__39619 = self__.late;
var G__39620 = (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});
var G__39621 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__39619,G__39620,G__39621) : com.rpl.specter.compiled_transform.call(null, G__39619,G__39620,G__39621));
}));

(com.rpl.specter.t_com$rpl$specter39615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta39616","meta39616",-578947850,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39615.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39615.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39615");

(com.rpl.specter.t_com$rpl$specter39615.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39615");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39615.
 */
com.rpl.specter.__GT_t_com$rpl$specter39615 = (function com$rpl$specter$__GT_t_com$rpl$specter39615(path,late,meta39616){
return (new com.rpl.specter.t_com$rpl$specter39615(path,late,meta39616));
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
var G__39887__delegate = function (path){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter39615(path,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
};
var G__39887 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39888__i = 0, G__39888__a = new Array(arguments.length -  0);
while (G__39888__i < G__39888__a.length) {G__39888__a[G__39888__i] = arguments[G__39888__i + 0]; ++G__39888__i;}
  path = new cljs.core.IndexedSeq(G__39888__a,0,null);
} 
return G__39887__delegate.call(this,path);};
G__39887.cljs$lang$maxFixedArity = 0;
G__39887.cljs$lang$applyTo = (function (arglist__39889){
var path = cljs.core.seq(arglist__39889);
return G__39887__delegate(path);
});
G__39887.cljs$core$IFn$_invoke$arity$variadic = G__39887__delegate;
return G__39887;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39622 = (function (key,meta39623){
this.key = key;
this.meta39623 = meta39623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39624,meta39623__$1){
var self__ = this;
var _39624__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39622(self__.key,meta39623__$1));
}));

(com.rpl.specter.t_com$rpl$specter39622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39624){
var self__ = this;
var _39624__$1 = this;
return self__.meta39623;
}));

(com.rpl.specter.t_com$rpl$specter39622.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39622.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null, vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter39622.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

(com.rpl.specter.t_com$rpl$specter39622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta39623","meta39623",107419943,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39622.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39622.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39622");

(com.rpl.specter.t_com$rpl$specter39622.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39622");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39622.
 */
com.rpl.specter.__GT_t_com$rpl$specter39622 = (function com$rpl$specter$__GT_t_com$rpl$specter39622(key,meta39623){
return (new com.rpl.specter.t_com$rpl$specter39622(key,meta39623));
});


/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
return (new com.rpl.specter.t_com$rpl$specter39622(key,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39626 = (function (elem,meta39627){
this.elem = elem;
this.meta39627 = meta39627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39628,meta39627__$1){
var self__ = this;
var _39628__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39626(self__.elem,meta39627__$1));
}));

(com.rpl.specter.t_com$rpl$specter39626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39628){
var self__ = this;
var _39628__$1 = this;
return self__.meta39627;
}));

(com.rpl.specter.t_com$rpl$specter39626.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39626.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null, vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter39626.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

(com.rpl.specter.t_com$rpl$specter39626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta39627","meta39627",-2058651936,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39626.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39626.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39626");

(com.rpl.specter.t_com$rpl$specter39626.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39626");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39626.
 */
com.rpl.specter.__GT_t_com$rpl$specter39626 = (function com$rpl$specter$__GT_t_com$rpl$specter39626(elem,meta39627){
return (new com.rpl.specter.t_com$rpl$specter39626(elem,meta39627));
});


/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
return (new com.rpl.specter.t_com$rpl$specter39626(elem,null));
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
com.rpl.specter.t_com$rpl$specter39629 = (function (index,meta39630){
this.index = index;
this.meta39630 = meta39630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39631,meta39630__$1){
var self__ = this;
var _39631__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39629(self__.index,meta39630__$1));
}));

(com.rpl.specter.t_com$rpl$specter39629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39631){
var self__ = this;
var _39631__$1 = this;
return self__.meta39630;
}));

(com.rpl.specter.t_com$rpl$specter39629.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39629.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter39629.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null, vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.navs.insert_before_idx(structure,self__.index,v);
}
}));

(com.rpl.specter.t_com$rpl$specter39629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta39630","meta39630",-1473999928,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39629.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39629.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39629");

(com.rpl.specter.t_com$rpl$specter39629.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39629");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39629.
 */
com.rpl.specter.__GT_t_com$rpl$specter39629 = (function com$rpl$specter$__GT_t_com$rpl$specter39629(index,meta39630){
return (new com.rpl.specter.t_com$rpl$specter39629(index,meta39630));
});


/**
 * Navigates to the empty space between the index and the prior index. For select
 *        navigates to NONE, and transforms to non-NONE insert at that position.
 */
com.rpl.specter.before_index = com.rpl.specter.impl.direct_nav_obj((function (index){
return (new com.rpl.specter.t_com$rpl$specter39629(index,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39632 = (function (i,meta39633){
this.i = i;
this.meta39633 = meta39633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39634,meta39633__$1){
var self__ = this;
var _39634__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39632(self__.i,meta39633__$1));
}));

(com.rpl.specter.t_com$rpl$specter39632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39634){
var self__ = this;
var _39634__$1 = this;
return self__.meta39633;
}));

(com.rpl.specter.t_com$rpl$specter39632.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39632.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null, vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter39632.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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
var G__39890 = (j - (1));
var G__39891 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__39890;
s = G__39891;
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
var G__39892 = (j + (1));
var G__39893 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__39892;
s = G__39893;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache39636;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info39637 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"com/rpl/specter.cljc",15,1,1006,1009,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache39636 = info39637;

return info39637;
})():info__19105__auto__);
var precompiled39638 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__39639 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled39638.cljs$core$IFn$_invoke$arity$1 ? precompiled39638.cljs$core$IFn$_invoke$arity$1(G__39639) : precompiled39638.call(null, G__39639));
} else {
return precompiled39638;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache39640;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info39641 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,1001,1003,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache39640 = info39641;

return info39641;
})():info__19105__auto__);
var precompiled39642 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__39643 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled39642.cljs$core$IFn$_invoke$arity$1 ? precompiled39642.cljs$core$IFn$_invoke$arity$1(G__39643) : precompiled39642.call(null, G__39643));
} else {
return precompiled39642;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter39632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta39633","meta39633",-1991234639,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39632.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39632.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39632");

(com.rpl.specter.t_com$rpl$specter39632.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39632");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39632.
 */
com.rpl.specter.__GT_t_com$rpl$specter39632 = (function com$rpl$specter$__GT_t_com$rpl$specter39632(i,meta39633){
return (new com.rpl.specter.t_com$rpl$specter39632(i,meta39633));
});


/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
return (new com.rpl.specter.t_com$rpl$specter39632(i,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39664 = (function (start,meta39665){
this.start = start;
this.meta39665 = meta39665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39666,meta39665__$1){
var self__ = this;
var _39666__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39664(self__.start,meta39665__$1));
}));

(com.rpl.specter.t_com$rpl$specter39664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39666){
var self__ = this;
var _39666__$1 = this;
return self__.meta39665;
}));

(com.rpl.specter.t_com$rpl$specter39664.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39664.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter39664.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__39668 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39668,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39668,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache39671;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info39672 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,717,720,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__39644_SHARP_){
return (p1__39644_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39644#","p1__39644#",519006478,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__39644#","p1__39644#",519006478,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__39645_SHARP_){
return (p1__39645_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39645#","p1__39645#",-1980373083,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__39645#","p1__39645#",-1980373083,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39644#","p1__39644#",519006478,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__39644#","p1__39644#",519006478,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39645#","p1__39645#",-1980373083,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__39645#","p1__39645#",-1980373083,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39644#","p1__39644#",519006478,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__39644#","p1__39644#",519006478,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39645#","p1__39645#",-1980373083,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__39645#","p1__39645#",-1980373083,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache39671 = info39672;

return info39672;
})():info__19105__auto__);
var precompiled39673 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__39674 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__39644_SHARP_){
return (p1__39644_SHARP_ >= (curri + (1)));
}),(function (p1__39645_SHARP_){
return (p1__39645_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__39644_SHARP_){
return (p1__39644_SHARP_ >= (curri + (1)));
}),(function (p1__39645_SHARP_){
return (p1__39645_SHARP_ <= newi);
})], null);
return (precompiled39673.cljs$core$IFn$_invoke$arity$1 ? precompiled39673.cljs$core$IFn$_invoke$arity$1(G__39674) : precompiled39673.call(null, G__39674));
} else {
return precompiled39673;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache39675;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info39676 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,1020,1023,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache39675 = info39676;

return info39676;
})():info__19105__auto__);
var precompiled39677 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__39678 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled39677.cljs$core$IFn$_invoke$arity$1 ? precompiled39677.cljs$core$IFn$_invoke$arity$1(G__39678) : precompiled39677.call(null, G__39678));
} else {
return precompiled39677;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache39679;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info39680 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,1001,1003,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache39679 = info39680;

return info39680;
})():info__19105__auto__);
var precompiled39681 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__39682 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled39681.cljs$core$IFn$_invoke$arity$1 ? precompiled39681.cljs$core$IFn$_invoke$arity$1(G__39682) : precompiled39681.call(null, G__39682));
} else {
return precompiled39681;
}
})(),newe,s));
}),structure,structure);
}));

(com.rpl.specter.t_com$rpl$specter39664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta39665","meta39665",-1195603162,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39664.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39664.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39664");

(com.rpl.specter.t_com$rpl$specter39664.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39664");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39664.
 */
com.rpl.specter.__GT_t_com$rpl$specter39664 = (function com$rpl$specter$__GT_t_com$rpl$specter39664(start,meta39665){
return (new com.rpl.specter.t_com$rpl$specter39664(start,meta39665));
});




com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14598__auto__,e){
var ret__14599__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__39647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__39647) : next_fn.call(null, G__39647));
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
var vec__39648 = (function (){var G__39651 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__39651) : next_fn.call(null, G__39651));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39648,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39648,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache39652;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info39653 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,717,720,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__39644_SHARP_){
return (p1__39644_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39644#","p1__39644#",519006478,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__39644#","p1__39644#",519006478,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__39645_SHARP_){
return (p1__39645_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39645#","p1__39645#",-1980373083,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__39645#","p1__39645#",-1980373083,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39644#","p1__39644#",519006478,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__39644#","p1__39644#",519006478,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39645#","p1__39645#",-1980373083,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__39645#","p1__39645#",-1980373083,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39644#","p1__39644#",519006478,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__39644#","p1__39644#",519006478,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39645#","p1__39645#",-1980373083,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__39645#","p1__39645#",-1980373083,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache39652 = info39653;

return info39653;
})():info__19105__auto__);
var precompiled39654 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__39655 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__39644_SHARP_){
return (p1__39644_SHARP_ >= (curri + (1)));
}),(function (p1__39645_SHARP_){
return (p1__39645_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__39644_SHARP_){
return (p1__39644_SHARP_ >= (curri + (1)));
}),(function (p1__39645_SHARP_){
return (p1__39645_SHARP_ <= newi);
})], null);
return (precompiled39654.cljs$core$IFn$_invoke$arity$1 ? precompiled39654.cljs$core$IFn$_invoke$arity$1(G__39655) : precompiled39654.call(null, G__39655));
} else {
return precompiled39654;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache39656;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info39657 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,1020,1023,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache39656 = info39657;

return info39657;
})():info__19105__auto__);
var precompiled39658 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__39659 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled39658.cljs$core$IFn$_invoke$arity$1 ? precompiled39658.cljs$core$IFn$_invoke$arity$1(G__39659) : precompiled39658.call(null, G__39659));
} else {
return precompiled39658;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache39660;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info39661 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,1001,1003,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache39660 = info39661;

return info39661;
})():info__19105__auto__);
var precompiled39662 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__39663 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled39662.cljs$core$IFn$_invoke$arity$1 ? precompiled39662.cljs$core$IFn$_invoke$arity$1(G__39663) : precompiled39662.call(null, G__39663));
} else {
return precompiled39662;
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
return (new com.rpl.specter.t_com$rpl$specter39664(start,null));
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
com.rpl.specter.t_com$rpl$specter39684 = (function (afn,meta39685){
this.afn = afn;
this.meta39685 = meta39685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39686,meta39685__$1){
var self__ = this;
var _39686__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39684(self__.afn,meta39685__$1));
}));

(com.rpl.specter.t_com$rpl$specter39684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39686){
var self__ = this;
var _39686__$1 = this;
return self__.meta39685;
}));

(com.rpl.specter.t_com$rpl$specter39684.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39684.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__39687 = vals;
var G__39688 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null, structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__39687,G__39688) : next_fn.call(null, G__39687,G__39688));
}));

(com.rpl.specter.t_com$rpl$specter39684.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__39689 = vals;
var G__39690 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null, structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__39689,G__39690) : next_fn.call(null, G__39689,G__39690));
}));

(com.rpl.specter.t_com$rpl$specter39684.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta39685","meta39685",849582892,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39684.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39684.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39684");

(com.rpl.specter.t_com$rpl$specter39684.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39684");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39684.
 */
com.rpl.specter.__GT_t_com$rpl$specter39684 = (function com$rpl$specter$__GT_t_com$rpl$specter39684(afn,meta39685){
return (new com.rpl.specter.t_com$rpl$specter39684(afn,meta39685));
});


/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter39684(afn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39694 = (function (parse_fn,unparse_fn,meta39695){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta39695 = meta39695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39696,meta39695__$1){
var self__ = this;
var _39696__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39694(self__.parse_fn,self__.unparse_fn,meta39695__$1));
}));

(com.rpl.specter.t_com$rpl$specter39694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39696){
var self__ = this;
var _39696__$1 = this;
return self__.meta39695;
}));

(com.rpl.specter.t_com$rpl$specter39694.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39694.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null, structure)));
}));

(com.rpl.specter.t_com$rpl$specter39694.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var G__39697 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null, structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__39697) : self__.unparse_fn.call(null, G__39697));
}));

(com.rpl.specter.t_com$rpl$specter39694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta39695","meta39695",722104318,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39694.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39694.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39694");

(com.rpl.specter.t_com$rpl$specter39694.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39694");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39694.
 */
com.rpl.specter.__GT_t_com$rpl$specter39694 = (function com$rpl$specter$__GT_t_com$rpl$specter39694(parse_fn,unparse_fn,meta39695){
return (new com.rpl.specter.t_com$rpl$specter39694(parse_fn,unparse_fn,meta39695));
});




com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__39691 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null, structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__39691) : next_fn.call(null, G__39691));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__39692 = (function (){var G__39693 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null, structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__39693) : next_fn.call(null, G__39693));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__39692) : unparse_fn.call(null, G__39692));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
return (new com.rpl.specter.t_com$rpl$specter39694(parse_fn,unparse_fn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39700 = (function (meta39701){
this.meta39701 = meta39701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39702,meta39701__$1){
var self__ = this;
var _39702__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39700(meta39701__$1));
}));

(com.rpl.specter.t_com$rpl$specter39700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39702){
var self__ = this;
var _39702__$1 = this;
return self__.meta39701;
}));

(com.rpl.specter.t_com$rpl$specter39700.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39700.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.deref(structure));
}));

(com.rpl.specter.t_com$rpl$specter39700.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
}));

(com.rpl.specter.t_com$rpl$specter39700.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39701","meta39701",-2032017633,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39700.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39700.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39700");

(com.rpl.specter.t_com$rpl$specter39700.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39700");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39700.
 */
com.rpl.specter.__GT_t_com$rpl$specter39700 = (function com$rpl$specter$__GT_t_com$rpl$specter39700(meta39701){
return (new com.rpl.specter.t_com$rpl$specter39700(meta39701));
});




com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__39699 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__39699) : next_fn.call(null, G__39699));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (new com.rpl.specter.t_com$rpl$specter39700(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39703 = (function (re,meta39704){
this.re = re;
this.meta39704 = meta39704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39705,meta39704__$1){
var self__ = this;
var _39705__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39703(self__.re,meta39704__$1));
}));

(com.rpl.specter.t_com$rpl$specter39703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39705){
var self__ = this;
var _39705__$1 = this;
return self__.meta39704;
}));

(com.rpl.specter.t_com$rpl$specter39703.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39703.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter39703.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return clojure.string.replace(structure,self__.re,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta39704","meta39704",-257051433,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39703.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39703.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39703");

(com.rpl.specter.t_com$rpl$specter39703.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39703");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39703.
 */
com.rpl.specter.__GT_t_com$rpl$specter39703 = (function com$rpl$specter$__GT_t_com$rpl$specter39703(re,meta39704){
return (new com.rpl.specter.t_com$rpl$specter39703(re,meta39704));
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
return (new com.rpl.specter.t_com$rpl$specter39703(re,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39709 = (function (path,temp__5802__auto__,late,meta39710){
this.path = path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late = late;
this.meta39710 = meta39710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39711,meta39710__$1){
var self__ = this;
var _39711__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39709(self__.path,self__.temp__5802__auto__,self__.late,meta39710__$1));
}));

(com.rpl.specter.t_com$rpl$specter39709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39711){
var self__ = this;
var _39711__$1 = this;
return self__.meta39710;
}));

(com.rpl.specter.t_com$rpl$specter39709.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39709.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__39707_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__39707_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39709.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__39708_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__39708_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta39710","meta39710",1254821857,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39709.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39709.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39709");

(com.rpl.specter.t_com$rpl$specter39709.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39709");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39709.
 */
com.rpl.specter.__GT_t_com$rpl$specter39709 = (function com$rpl$specter$__GT_t_com$rpl$specter39709(path,temp__5802__auto__,late,meta39710){
return (new com.rpl.specter.t_com$rpl$specter39709(path,temp__5802__auto__,late,meta39710));
});


/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__39894__delegate = function (path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
return afn;
} else {
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter39709(path,temp__5802__auto__,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
}
};
var G__39894 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39895__i = 0, G__39895__a = new Array(arguments.length -  0);
while (G__39895__i < G__39895__a.length) {G__39895__a[G__39895__i] = arguments[G__39895__i + 0]; ++G__39895__i;}
  path = new cljs.core.IndexedSeq(G__39895__a,0,null);
} 
return G__39894__delegate.call(this,path);};
G__39894.cljs$lang$maxFixedArity = 0;
G__39894.cljs$lang$applyTo = (function (arglist__39896){
var path = cljs.core.seq(arglist__39896);
return G__39894__delegate(path);
});
G__39894.cljs$core$IFn$_invoke$arity$variadic = G__39894__delegate;
return G__39894;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39714 = (function (path,temp__5802__auto__,late,meta39715){
this.path = path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late = late;
this.meta39715 = meta39715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39716,meta39715__$1){
var self__ = this;
var _39716__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39714(self__.path,self__.temp__5802__auto__,self__.late,meta39715__$1));
}));

(com.rpl.specter.t_com$rpl$specter39714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39716){
var self__ = this;
var _39716__$1 = this;
return self__.meta39715;
}));

(com.rpl.specter.t_com$rpl$specter39714.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39714.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__39712_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__39712_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39714.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__39713_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__39713_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta39715","meta39715",-247166475,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39714.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39714.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39714");

(com.rpl.specter.t_com$rpl$specter39714.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39714");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39714.
 */
com.rpl.specter.__GT_t_com$rpl$specter39714 = (function com$rpl$specter$__GT_t_com$rpl$specter39714(path,temp__5802__auto__,late,meta39715){
return (new com.rpl.specter.t_com$rpl$specter39714(path,temp__5802__auto__,late,meta39715));
});


com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__39897__delegate = function (path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null, s)));
});
} else {
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter39714(path,temp__5802__auto__,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
}
};
var G__39897 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39898__i = 0, G__39898__a = new Array(arguments.length -  0);
while (G__39898__i < G__39898__a.length) {G__39898__a[G__39898__i] = arguments[G__39898__i + 0]; ++G__39898__i;}
  path = new cljs.core.IndexedSeq(G__39898__a,0,null);
} 
return G__39897__delegate.call(this,path);};
G__39897.cljs$lang$maxFixedArity = 0;
G__39897.cljs$lang$applyTo = (function (arglist__39899){
var path = cljs.core.seq(arglist__39899);
return G__39897__delegate(path);
});
G__39897.cljs$core$IFn$_invoke$arity$variadic = G__39897__delegate;
return G__39897;
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
var G__39900__delegate = function (path){
var G__39718 = com.rpl.specter.ALL;
var G__39719 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null, path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__39718,G__39719) : com.rpl.specter.subselect.call(null, G__39718,G__39719));
};
var G__39900 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39901__i = 0, G__39901__a = new Array(arguments.length -  0);
while (G__39901__i < G__39901__a.length) {G__39901__a[G__39901__i] = arguments[G__39901__i + 0]; ++G__39901__i;}
  path = new cljs.core.IndexedSeq(G__39901__a,0,null);
} 
return G__39900__delegate.call(this,path);};
G__39900.cljs$lang$maxFixedArity = 0;
G__39900.cljs$lang$applyTo = (function (arglist__39902){
var path = cljs.core.seq(arglist__39902);
return G__39900__delegate(path);
});
G__39900.cljs$core$IFn$_invoke$arity$variadic = G__39900__delegate;
return G__39900;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39720 = (function (path,update_fn,late,late_fn,meta39721){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta39721 = meta39721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39722,meta39721__$1){
var self__ = this;
var _39722__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39720(self__.path,self__.update_fn,self__.late,self__.late_fn,meta39721__$1));
}));

(com.rpl.specter.t_com$rpl$specter39720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39722){
var self__ = this;
var _39722__$1 = this;
return self__.meta39721;
}));

(com.rpl.specter.t_com$rpl$specter39720.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39720.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null, self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter39720.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null, self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter39720.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta39721","meta39721",157554659,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39720.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39720.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39720");

(com.rpl.specter.t_com$rpl$specter39720.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39720");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39720.
 */
com.rpl.specter.__GT_t_com$rpl$specter39720 = (function com$rpl$specter$__GT_t_com$rpl$specter39720(path,update_fn,late,late_fn,meta39721){
return (new com.rpl.specter.t_com$rpl$specter39720(path,update_fn,late,late_fn,meta39721));
});


/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
return (new com.rpl.specter.t_com$rpl$specter39720(path,update_fn,late,late_fn,null));
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
com.rpl.specter.t_com$rpl$specter39723 = (function (path,reduce_fn,late,late_fn,meta39724){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta39724 = meta39724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39725,meta39724__$1){
var self__ = this;
var _39725__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39723(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta39724__$1));
}));

(com.rpl.specter.t_com$rpl$specter39723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39725){
var self__ = this;
var _39725__$1 = this;
return self__.meta39724;
}));

(com.rpl.specter.t_com$rpl$specter39723.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39723.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null, self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter39723.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null, self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter39723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta39724","meta39724",1309739051,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39723.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39723.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39723");

(com.rpl.specter.t_com$rpl$specter39723.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39723");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39723.
 */
com.rpl.specter.__GT_t_com$rpl$specter39723 = (function com$rpl$specter$__GT_t_com$rpl$specter39723(path,reduce_fn,late,late_fn,meta39724){
return (new com.rpl.specter.t_com$rpl$specter39723(path,reduce_fn,late,late_fn,meta39724));
});


/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
return (new com.rpl.specter.t_com$rpl$specter39723(path,reduce_fn,late,late_fn,null));
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
var G__39733 = (function (p1__39731_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__39731_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__39733) : com.rpl.specter.pred.call(null, G__39733));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__39738 = (function (p1__39736_SHARP_){
return (p1__39736_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__39738) : com.rpl.specter.pred.call(null, G__39738));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__39740 = (function (p1__39739_SHARP_){
return (p1__39739_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__39740) : com.rpl.specter.pred.call(null, G__39740));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__39742 = (function (p1__39741_SHARP_){
return (p1__39741_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__39742) : com.rpl.specter.pred.call(null, G__39742));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__39744 = (function (p1__39743_SHARP_){
return (p1__39743_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__39744) : com.rpl.specter.pred.call(null, G__39744));
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
com.rpl.specter.t_com$rpl$specter39747 = (function (v,meta39748){
this.v = v;
this.meta39748 = meta39748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39749,meta39748__$1){
var self__ = this;
var _39749__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39747(self__.v,meta39748__$1));
}));

(com.rpl.specter.t_com$rpl$specter39747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39749){
var self__ = this;
var _39749__$1 = this;
return self__.meta39748;
}));

(com.rpl.specter.t_com$rpl$specter39747.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39747.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter39747.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter39747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta39748","meta39748",1176129051,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39747.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39747.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39747");

(com.rpl.specter.t_com$rpl$specter39747.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39747");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39747.
 */
com.rpl.specter.__GT_t_com$rpl$specter39747 = (function com$rpl$specter$__GT_t_com$rpl$specter39747(v,meta39748){
return (new com.rpl.specter.t_com$rpl$specter39747(v,meta39748));
});




com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
var G__39745 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__39745) : next_fn.call(null, G__39745));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__39746 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__39746) : next_fn.call(null, G__39746));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
return (new com.rpl.specter.t_com$rpl$specter39747(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__39750 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__39750) : com.rpl.specter.nil__GT_val.call(null, G__39750));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__39751 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__39751) : com.rpl.specter.nil__GT_val.call(null, G__39751));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__39752 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__39752) : com.rpl.specter.nil__GT_val.call(null, G__39752));
})();

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39755 = (function (meta39756){
this.meta39756 = meta39756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39757,meta39756__$1){
var self__ = this;
var _39757__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39755(meta39756__$1));
}));

(com.rpl.specter.t_com$rpl$specter39755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39757){
var self__ = this;
var _39757__$1 = this;
return self__.meta39756;
}));

(com.rpl.specter.t_com$rpl$specter39755.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39755.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.meta(structure));
}));

(com.rpl.specter.t_com$rpl$specter39755.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
}));

(com.rpl.specter.t_com$rpl$specter39755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39756","meta39756",-1069586500,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39755.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39755.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39755");

(com.rpl.specter.t_com$rpl$specter39755.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39755");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39755.
 */
com.rpl.specter.__GT_t_com$rpl$specter39755 = (function com$rpl$specter$__GT_t_com$rpl$specter39755(meta39756){
return (new com.rpl.specter.t_com$rpl$specter39755(meta39756));
});




com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__39753 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__39753) : next_fn.call(null, G__39753));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__39754 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__39754) : next_fn.call(null, G__39754));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (new com.rpl.specter.t_com$rpl$specter39755(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39760 = (function (meta39761){
this.meta39761 = meta39761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39762,meta39761__$1){
var self__ = this;
var _39762__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39760(meta39761__$1));
}));

(com.rpl.specter.t_com$rpl$specter39760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39762){
var self__ = this;
var _39762__$1 = this;
return self__.meta39761;
}));

(com.rpl.specter.t_com$rpl$specter39760.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39760.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.name(structure));
}));

(com.rpl.specter.t_com$rpl$specter39760.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter39760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39761","meta39761",1278682470,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39760.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39760.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39760");

(com.rpl.specter.t_com$rpl$specter39760.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39760");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39760.
 */
com.rpl.specter.__GT_t_com$rpl$specter39760 = (function com$rpl$specter$__GT_t_com$rpl$specter39760(meta39761){
return (new com.rpl.specter.t_com$rpl$specter39760(meta39761));
});




com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__39758 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__39758) : next_fn.call(null, G__39758));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__39759 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__39759) : next_fn.call(null, G__39759));
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
com.rpl.specter.NAME = (new com.rpl.specter.t_com$rpl$specter39760(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39765 = (function (meta39766){
this.meta39766 = meta39766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39767,meta39766__$1){
var self__ = this;
var _39767__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39765(meta39766__$1));
}));

(com.rpl.specter.t_com$rpl$specter39765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39767){
var self__ = this;
var _39767__$1 = this;
return self__.meta39766;
}));

(com.rpl.specter.t_com$rpl$specter39765.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39765.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.namespace(structure));
}));

(com.rpl.specter.t_com$rpl$specter39765.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter39765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39766","meta39766",-231366776,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39765.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39765.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39765");

(com.rpl.specter.t_com$rpl$specter39765.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39765");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39765.
 */
com.rpl.specter.__GT_t_com$rpl$specter39765 = (function com$rpl$specter$__GT_t_com$rpl$specter39765(meta39766){
return (new com.rpl.specter.t_com$rpl$specter39765(meta39766));
});




com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__39763 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__39763) : next_fn.call(null, G__39763));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__39764 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__39764) : next_fn.call(null, G__39764));
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
com.rpl.specter.NAMESPACE = (new com.rpl.specter.t_com$rpl$specter39765(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39768 = (function (path,late,meta39769){
this.path = path;
this.late = late;
this.meta39769 = meta39769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39770,meta39769__$1){
var self__ = this;
var _39770__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39768(self__.path,self__.late,meta39769__$1));
}));

(com.rpl.specter.t_com$rpl$specter39768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39770){
var self__ = this;
var _39770__$1 = this;
return self__.meta39769;
}));

(com.rpl.specter.t_com$rpl$specter39768.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39768.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__39771 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null, self__.late,structure)));
var G__39772 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__39771,G__39772) : next_fn__19097__auto__.call(null, G__39771,G__39772));
}));

(com.rpl.specter.t_com$rpl$specter39768.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__39773 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null, self__.late,structure)));
var G__39774 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__39773,G__39774) : next_fn__19097__auto__.call(null, G__39773,G__39774));
}));

(com.rpl.specter.t_com$rpl$specter39768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta39769","meta39769",1388953665,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39768.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39768.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39768");

(com.rpl.specter.t_com$rpl$specter39768.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39768");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39768.
 */
com.rpl.specter.__GT_t_com$rpl$specter39768 = (function com$rpl$specter$__GT_t_com$rpl$specter39768(path,late,meta39769){
return (new com.rpl.specter.t_com$rpl$specter39768(path,late,meta39769));
});


com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__39903__delegate = function (path){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter39768(path,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
};
var G__39903 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39904__i = 0, G__39904__a = new Array(arguments.length -  0);
while (G__39904__i < G__39904__a.length) {G__39904__a[G__39904__i] = arguments[G__39904__i + 0]; ++G__39904__i;}
  path = new cljs.core.IndexedSeq(G__39904__a,0,null);
} 
return G__39903__delegate.call(this,path);};
G__39903.cljs$lang$maxFixedArity = 0;
G__39903.cljs$lang$applyTo = (function (arglist__39905){
var path = cljs.core.seq(arglist__39905);
return G__39903__delegate(path);
});
G__39903.cljs$core$IFn$_invoke$arity$variadic = G__39903__delegate;
return G__39903;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39775 = (function (path,late,meta39776){
this.path = path;
this.late = late;
this.meta39776 = meta39776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39777,meta39776__$1){
var self__ = this;
var _39777__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39775(self__.path,self__.late,meta39776__$1));
}));

(com.rpl.specter.t_com$rpl$specter39775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39777){
var self__ = this;
var _39777__$1 = this;
return self__.meta39776;
}));

(com.rpl.specter.t_com$rpl$specter39775.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39775.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__39778 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null, self__.late,structure)));
var G__39779 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__39778,G__39779) : next_fn__19097__auto__.call(null, G__39778,G__39779));
}));

(com.rpl.specter.t_com$rpl$specter39775.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__39780 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null, self__.late,structure)));
var G__39781 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__39780,G__39781) : next_fn__19097__auto__.call(null, G__39780,G__39781));
}));

(com.rpl.specter.t_com$rpl$specter39775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta39776","meta39776",2131301839,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39775.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39775.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39775");

(com.rpl.specter.t_com$rpl$specter39775.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39775");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39775.
 */
com.rpl.specter.__GT_t_com$rpl$specter39775 = (function com$rpl$specter$__GT_t_com$rpl$specter39775(path,late,meta39776){
return (new com.rpl.specter.t_com$rpl$specter39775(path,late,meta39776));
});


com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__39906__delegate = function (path){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter39775(path,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
};
var G__39906 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39907__i = 0, G__39907__a = new Array(arguments.length -  0);
while (G__39907__i < G__39907__a.length) {G__39907__a[G__39907__i] = arguments[G__39907__i + 0]; ++G__39907__i;}
  path = new cljs.core.IndexedSeq(G__39907__a,0,null);
} 
return G__39906__delegate.call(this,path);};
G__39906.cljs$lang$maxFixedArity = 0;
G__39906.cljs$lang$applyTo = (function (arglist__39908){
var path = cljs.core.seq(arglist__39908);
return G__39906__delegate(path);
});
G__39906.cljs$core$IFn$_invoke$arity$variadic = G__39906__delegate;
return G__39906;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39782 = (function (val,meta39783){
this.val = val;
this.meta39783 = meta39783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39784,meta39783__$1){
var self__ = this;
var _39784__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39782(self__.val,meta39783__$1));
}));

(com.rpl.specter.t_com$rpl$specter39782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39784){
var self__ = this;
var _39784__$1 = this;
return self__.meta39783;
}));

(com.rpl.specter.t_com$rpl$specter39782.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39782.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__39785 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,self__.val);
var G__39786 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__39785,G__39786) : next_fn__19097__auto__.call(null, G__39785,G__39786));
}));

(com.rpl.specter.t_com$rpl$specter39782.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__39787 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,self__.val);
var G__39788 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__39787,G__39788) : next_fn__19097__auto__.call(null, G__39787,G__39788));
}));

(com.rpl.specter.t_com$rpl$specter39782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta39783","meta39783",1299587487,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39782.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39782.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39782");

(com.rpl.specter.t_com$rpl$specter39782.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39782");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39782.
 */
com.rpl.specter.__GT_t_com$rpl$specter39782 = (function com$rpl$specter$__GT_t_com$rpl$specter39782(val,meta39783){
return (new com.rpl.specter.t_com$rpl$specter39782(val,meta39783));
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
return (new com.rpl.specter.t_com$rpl$specter39782(val,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39789 = (function (path,late,meta39790){
this.path = path;
this.late = late;
this.meta39790 = meta39790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39791,meta39790__$1){
var self__ = this;
var _39791__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39789(self__.path,self__.late,meta39790__$1));
}));

(com.rpl.specter.t_com$rpl$specter39789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39791){
var self__ = this;
var _39791__$1 = this;
return self__.meta39790;
}));

(com.rpl.specter.t_com$rpl$specter39789.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39789.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null, vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter39789.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null, vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter39789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta39790","meta39790",680317132,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39789.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39789.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39789");

(com.rpl.specter.t_com$rpl$specter39789.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39789");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39789.
 */
com.rpl.specter.__GT_t_com$rpl$specter39789 = (function com$rpl$specter$__GT_t_com$rpl$specter39789(path,late,meta39790){
return (new com.rpl.specter.t_com$rpl$specter39789(path,late,meta39790));
});


com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__39909__delegate = function (path){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter39789(path,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
};
var G__39909 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39910__i = 0, G__39910__a = new Array(arguments.length -  0);
while (G__39910__i < G__39910__a.length) {G__39910__a[G__39910__i] = arguments[G__39910__i + 0]; ++G__39910__i;}
  path = new cljs.core.IndexedSeq(G__39910__a,0,null);
} 
return G__39909__delegate.call(this,path);};
G__39909.cljs$lang$maxFixedArity = 0;
G__39909.cljs$lang$applyTo = (function (arglist__39911){
var path = cljs.core.seq(arglist__39911);
return G__39909__delegate(path);
});
G__39909.cljs$core$IFn$_invoke$arity$variadic = G__39909__delegate;
return G__39909;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39794 = (function (meta39795){
this.meta39795 = meta39795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39796,meta39795__$1){
var self__ = this;
var _39796__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39794(meta39795__$1));
}));

(com.rpl.specter.t_com$rpl$specter39794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39796){
var self__ = this;
var _39796__$1 = this;
return self__.meta39795;
}));

(com.rpl.specter.t_com$rpl$specter39794.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39794.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__39797 = cljs.core.PersistentVector.EMPTY;
var G__39798 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__39797,G__39798) : next_fn.call(null, G__39797,G__39798));
}));

(com.rpl.specter.t_com$rpl$specter39794.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__39799 = cljs.core.PersistentVector.EMPTY;
var G__39800 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__39799,G__39800) : next_fn.call(null, G__39799,G__39800));
}));

(com.rpl.specter.t_com$rpl$specter39794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39795","meta39795",-1333662013,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39794.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39794.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39794");

(com.rpl.specter.t_com$rpl$specter39794.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39794");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39794.
 */
com.rpl.specter.__GT_t_com$rpl$specter39794 = (function com$rpl$specter$__GT_t_com$rpl$specter39794(meta39795){
return (new com.rpl.specter.t_com$rpl$specter39794(meta39795));
});


/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (new com.rpl.specter.t_com$rpl$specter39794(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39803 = (function (cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta39804){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5802__auto__ = temp__5802__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta39804 = meta39804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39805,meta39804__$1){
var self__ = this;
var _39805__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39803(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5802__auto__,self__.afn,self__.late_then,self__.late_else,meta39804__$1));
}));

(com.rpl.specter.t_com$rpl$specter39803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39805){
var self__ = this;
var _39805__$1 = this;
return self__.meta39804;
}));

(com.rpl.specter.t_com$rpl$specter39803.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39803.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter39803.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter39803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta39804","meta39804",-1256963653,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39803.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39803.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39803");

(com.rpl.specter.t_com$rpl$specter39803.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39803");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39803.
 */
com.rpl.specter.__GT_t_com$rpl$specter39803 = (function com$rpl$specter$__GT_t_com$rpl$specter39803(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta39804){
return (new com.rpl.specter.t_com$rpl$specter39803(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta39804));
});



/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39806 = (function (cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta39807){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta39807 = meta39807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39808,meta39807__$1){
var self__ = this;
var _39808__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39806(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5802__auto__,self__.late_cond,self__.late_then,self__.late_else,meta39807__$1));
}));

(com.rpl.specter.t_com$rpl$specter39806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39808){
var self__ = this;
var _39808__$1 = this;
return self__.meta39807;
}));

(com.rpl.specter.t_com$rpl$specter39806.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39806.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,(function (p1__39801_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__39801_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter39806.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,(function (p1__39802_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__39802_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter39806.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta39807","meta39807",-1545001068,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39806.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39806.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39806");

(com.rpl.specter.t_com$rpl$specter39806.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39806");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39806.
 */
com.rpl.specter.__GT_t_com$rpl$specter39806 = (function com$rpl$specter$__GT_t_com$rpl$specter39806(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta39807){
return (new com.rpl.specter.t_com$rpl$specter39806(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta39807));
});


/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__39912 = null;
var G__39912__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null, cond_p,then_path,com.rpl.specter.STOP));
});
var G__39912__3 = (function (cond_p,then_path,else_path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_then,late_else){
return (new com.rpl.specter.t_com$rpl$specter39803(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null, then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null, else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
} else {
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_cond,late_then,late_else){
return (new com.rpl.specter.t_com$rpl$specter39806(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null, cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null, then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null, else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
}
});
G__39912 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__39912__2.call(this,cond_p,then_path);
case 3:
return G__39912__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39912.cljs$core$IFn$_invoke$arity$2 = G__39912__2;
G__39912.cljs$core$IFn$_invoke$arity$3 = G__39912__3;
return G__39912;
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
var G__39913__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,p__39809){
var vec__39810 = p__39809;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39810,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39810,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null, tester,apath,p));
}),com.rpl.specter.STOP,pairs);
};
var G__39913 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__39914__i = 0, G__39914__a = new Array(arguments.length -  0);
while (G__39914__i < G__39914__a.length) {G__39914__a[G__39914__i] = arguments[G__39914__i + 0]; ++G__39914__i;}
  conds = new cljs.core.IndexedSeq(G__39914__a,0,null);
} 
return G__39913__delegate.call(this,conds);};
G__39913.cljs$lang$maxFixedArity = 0;
G__39913.cljs$lang$applyTo = (function (arglist__39915){
var conds = cljs.core.seq(arglist__39915);
return G__39913__delegate(conds);
});
G__39913.cljs$core$IFn$_invoke$arity$variadic = G__39913__delegate;
return G__39913;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39813 = (function (path1,path2,late1,late2,meta39814){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta39814 = meta39814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39815,meta39814__$1){
var self__ = this;
var _39815__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39813(self__.path1,self__.path2,self__.late1,self__.late2,meta39814__$1));
}));

(com.rpl.specter.t_com$rpl$specter39813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39815){
var self__ = this;
var _39815__$1 = this;
return self__.meta39814;
}));

(com.rpl.specter.t_com$rpl$specter39813.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39813.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

(com.rpl.specter.t_com$rpl$specter39813.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta39814","meta39814",576060137,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39813.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39813.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39813");

(com.rpl.specter.t_com$rpl$specter39813.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter39813");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39813.
 */
com.rpl.specter.__GT_t_com$rpl$specter39813 = (function com$rpl$specter$__GT_t_com$rpl$specter39813(path1,path2,late1,late2,meta39814){
return (new com.rpl.specter.t_com$rpl$specter39813(path1,path2,late1,late2,meta39814));
});


/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__39916 = null;
var G__39916__0 = (function (){
return com.rpl.specter.STAY;
});
var G__39916__1 = (function (path){
return path;
});
var G__39916__2 = (function (path1,path2){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
return (new com.rpl.specter.t_com$rpl$specter39813(path1,path2,late1,late2,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null, path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null, path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
});
var G__39916__3 = (function() { 
var G__39917__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null, path1,path2)),paths);
};
var G__39917 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__39918__i = 0, G__39918__a = new Array(arguments.length -  2);
while (G__39918__i < G__39918__a.length) {G__39918__a[G__39918__i] = arguments[G__39918__i + 2]; ++G__39918__i;}
  paths = new cljs.core.IndexedSeq(G__39918__a,0,null);
} 
return G__39917__delegate.call(this,path1,path2,paths);};
G__39917.cljs$lang$maxFixedArity = 2;
G__39917.cljs$lang$applyTo = (function (arglist__39919){
var path1 = cljs.core.first(arglist__39919);
arglist__39919 = cljs.core.next(arglist__39919);
var path2 = cljs.core.first(arglist__39919);
var paths = cljs.core.rest(arglist__39919);
return G__39917__delegate(path1,path2,paths);
});
G__39917.cljs$core$IFn$_invoke$arity$variadic = G__39917__delegate;
return G__39917;
})()
;
G__39916 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__39916__0.call(this);
case 1:
return G__39916__1.call(this,path1);
case 2:
return G__39916__2.call(this,path1,path2);
default:
var G__39920 = null;
if (arguments.length > 2) {
var G__39921__i = 0, G__39921__a = new Array(arguments.length -  2);
while (G__39921__i < G__39921__a.length) {G__39921__a[G__39921__i] = arguments[G__39921__i + 2]; ++G__39921__i;}
G__39920 = new cljs.core.IndexedSeq(G__39921__a,0,null);
}
return G__39916__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__39920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39916.cljs$lang$maxFixedArity = 2;
G__39916.cljs$lang$applyTo = G__39916__3.cljs$lang$applyTo;
G__39916.cljs$core$IFn$_invoke$arity$0 = G__39916__0;
G__39916.cljs$core$IFn$_invoke$arity$1 = G__39916__1;
G__39916.cljs$core$IFn$_invoke$arity$2 = G__39916__2;
G__39916.cljs$core$IFn$_invoke$arity$variadic = G__39916__3.cljs$core$IFn$_invoke$arity$variadic;
return G__39916;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__39922__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null, com.rpl.specter.STAY,path));
};
var G__39922 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39923__i = 0, G__39923__a = new Array(arguments.length -  0);
while (G__39923__i < G__39923__a.length) {G__39923__a[G__39923__i] = arguments[G__39923__i + 0]; ++G__39923__i;}
  path = new cljs.core.IndexedSeq(G__39923__a,0,null);
} 
return G__39922__delegate.call(this,path);};
G__39922.cljs$lang$maxFixedArity = 0;
G__39922.cljs$lang$applyTo = (function (arglist__39924){
var path = cljs.core.seq(arglist__39924);
return G__39922__delegate(path);
});
G__39922.cljs$core$IFn$_invoke$arity$variadic = G__39922__delegate;
return G__39922;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__39925__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null, path,com.rpl.specter.STAY));
};
var G__39925 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39926__i = 0, G__39926__a = new Array(arguments.length -  0);
while (G__39926__i < G__39926__a.length) {G__39926__a[G__39926__i] = arguments[G__39926__i + 0]; ++G__39926__i;}
  path = new cljs.core.IndexedSeq(G__39926__a,0,null);
} 
return G__39925__delegate.call(this,path);};
G__39925.cljs$lang$maxFixedArity = 0;
G__39925.cljs$lang$applyTo = (function (arglist__39927){
var path = cljs.core.seq(arglist__39927);
return G__39925__delegate(path);
});
G__39925.cljs$core$IFn$_invoke$arity$variadic = G__39925__delegate;
return G__39925;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__19105__auto__ = com.rpl.specter.pathcache39820;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info39821 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),1432,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1212,1216,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,682,684,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2181,2181,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,717,720,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache39820 = info39821;

return info39821;
})():info__19105__auto__);
var precompiled39822 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__39823 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled39822.cljs$core$IFn$_invoke$arity$1 ? precompiled39822.cljs$core$IFn$_invoke$arity$1(G__39823) : precompiled39822.call(null, G__39823));
} else {
return precompiled39822;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__19105__auto__ = com.rpl.specter.pathcache39824;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info39825 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),1432,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1212,1216,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,682,684,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2181,2181,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"com/rpl/specter.cljc",16,1,727,729,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache39824 = info39825;

return info39825;
})():info__19105__auto__);
var precompiled39826 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__39827 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled39826.cljs$core$IFn$_invoke$arity$1 ? precompiled39826.cljs$core$IFn$_invoke$arity$1(G__39827) : precompiled39826.call(null, G__39827));
} else {
return precompiled39826;
}
})());

return p;
}));
var empty__GT_NONE_39928 = (function (){var G__39828 = cljs.core.empty_QMARK_;
var G__39829 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__39828,G__39829) : com.rpl.specter.if_path.call(null, G__39828,G__39829));
})();
var compact_STAR__39929 = (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_39928) : com.rpl.specter.multi_path.call(null, nav,empty__GT_NONE_39928));
});
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__39930__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__39929,path);
};
var G__39930 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39931__i = 0, G__39931__a = new Array(arguments.length -  0);
while (G__39931__i < G__39931__a.length) {G__39931__a[G__39931__i] = arguments[G__39931__i + 0]; ++G__39931__i;}
  path = new cljs.core.IndexedSeq(G__39931__a,0,null);
} 
return G__39930__delegate.call(this,path);};
G__39930.cljs$lang$maxFixedArity = 0;
G__39930.cljs$lang$applyTo = (function (arglist__39932){
var path = cljs.core.seq(arglist__39932);
return G__39930__delegate(path);
});
G__39930.cljs$core$IFn$_invoke$arity$variadic = G__39930__delegate;
return G__39930;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=com.rpl.specter.js.map
