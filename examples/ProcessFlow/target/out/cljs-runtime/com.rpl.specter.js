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
var G__49286__delegate = function (args){
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
var G__49286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49287__i = 0, G__49287__a = new Array(arguments.length -  0);
while (G__49287__i < G__49287__a.length) {G__49287__a[G__49287__i] = arguments[G__49287__i + 0]; ++G__49287__i;}
  args = new cljs.core.IndexedSeq(G__49287__a,0,null);
} 
return G__49286__delegate.call(this,args);};
G__49286.cljs$lang$maxFixedArity = 0;
G__49286.cljs$lang$applyTo = (function (arglist__49288){
var args = cljs.core.seq(arglist__49288);
return G__49286__delegate(args);
});
G__49286.cljs$core$IFn$_invoke$arity$variadic = G__49286__delegate;
return G__49286;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49289 = arguments.length;
var i__5727__auto___49290 = (0);
while(true){
if((i__5727__auto___49290 < len__5726__auto___49289)){
args__5732__auto__.push((arguments[i__5727__auto___49290]));

var G__49291 = (i__5727__auto___49290 + (1));
i__5727__auto___49290 = G__49291;
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
(com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq48912){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48912));
}));

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__48915 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__48916 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__48915,G__48916) : com.rpl.specter.compiled_select.call(null, G__48915,G__48916));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__48919 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__48920 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__48919,G__48920) : com.rpl.specter.compiled_select_one.call(null, G__48919,G__48920));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__48923 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__48924 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__48923,G__48924) : com.rpl.specter.compiled_select_one_BANG_.call(null, G__48923,G__48924));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__48927 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__48928 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__48927,G__48928) : com.rpl.specter.compiled_select_first.call(null, G__48927,G__48928));
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
var G__48930 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__48931 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__48930,G__48931) : com.rpl.specter.compiled_select_any.call(null, G__48930,G__48931));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__48932 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__48933 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__48932,G__48933) : com.rpl.specter.compiled_selected_any_QMARK_.call(null, G__48932,G__48933));
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
var G__48934 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__48935 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__48934,G__48935) : com.rpl.specter.compiled_traverse.call(null, G__48934,G__48935));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__48938 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__48938) : com.rpl.specter.compiled_traverse_all.call(null, G__48938));
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
var G__48939 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__48940 = transform_fn;
var G__48941 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__48939,G__48940,G__48941) : com.rpl.specter.compiled_transform.call(null, G__48939,G__48940,G__48941));
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
var G__48942 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__48943 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__48942,G__48943) : com.rpl.specter.compiled_multi_transform.call(null, G__48942,G__48943));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__48945 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__48946 = val;
var G__48947 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__48945,G__48946,G__48947) : com.rpl.specter.compiled_setval.call(null, G__48945,G__48946,G__48947));
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
var len__5726__auto___49296 = arguments.length;
var i__5727__auto___49297 = (0);
while(true){
if((i__5727__auto___49297 < len__5726__auto___49296)){
args__5732__auto__.push((arguments[i__5727__auto___49297]));

var G__49298 = (i__5727__auto___49297 + (1));
i__5727__auto___49297 = G__49298;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__48952){
var map__48953 = p__48952;
var map__48953__$1 = cljs.core.__destructure_map(map__48953);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48953__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var G__48954 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__48955 = transform_fn;
var G__48956 = structure;
var G__48957 = new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341);
var G__48958 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__48954,G__48955,G__48956,G__48957,G__48958) : com.rpl.specter.compiled_replace_in.call(null, G__48954,G__48955,G__48956,G__48957,G__48958));
}));

(com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq48948){
var G__48949 = cljs.core.first(seq48948);
var seq48948__$1 = cljs.core.next(seq48948);
var G__48950 = cljs.core.first(seq48948__$1);
var seq48948__$2 = cljs.core.next(seq48948__$1);
var G__48951 = cljs.core.first(seq48948__$2);
var seq48948__$3 = cljs.core.next(seq48948__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48949,G__48950,G__48951,seq48948__$3);
}));

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
com.rpl.specter.eachnav = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (navfn){
var latenavfn = (com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1(navfn) : com.rpl.specter.late_resolved_fn.call(null, navfn));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__49300__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__49300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49301__i = 0, G__49301__a = new Array(arguments.length -  0);
while (G__49301__i < G__49301__a.length) {G__49301__a[G__49301__i] = arguments[G__49301__i + 0]; ++G__49301__i;}
  args = new cljs.core.IndexedSeq(G__49301__a,0,null);
} 
return G__49300__delegate.call(this,args);};
G__49300.cljs$lang$maxFixedArity = 0;
G__49300.cljs$lang$applyTo = (function (arglist__49302){
var args = cljs.core.seq(arglist__49302);
return G__49300__delegate(args);
});
G__49300.cljs$core$IFn$_invoke$arity$variadic = G__49300__delegate;
return G__49300;
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
com.rpl.specter.t_com$rpl$specter48961 = (function (meta48962){
this.meta48962 = meta48962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter48961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48963,meta48962__$1){
var self__ = this;
var _48963__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter48961(meta48962__$1));
}));

(com.rpl.specter.t_com$rpl$specter48961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48963){
var self__ = this;
var _48963__$1 = this;
return self__.meta48962;
}));

(com.rpl.specter.t_com$rpl$specter48961.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter48961.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter48961.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return structure;
}));

(com.rpl.specter.t_com$rpl$specter48961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48962","meta48962",662806971,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter48961.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter48961.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter48961");

(com.rpl.specter.t_com$rpl$specter48961.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter48961");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter48961.
 */
com.rpl.specter.__GT_t_com$rpl$specter48961 = (function com$rpl$specter$__GT_t_com$rpl$specter48961(meta48962){
return (new com.rpl.specter.t_com$rpl$specter48961(meta48962));
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
com.rpl.specter.STOP = (new com.rpl.specter.t_com$rpl$specter48961(null));
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
com.rpl.specter.t_com$rpl$specter48966 = (function (afn,meta48967){
this.afn = afn;
this.meta48967 = meta48967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter48966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48968,meta48967__$1){
var self__ = this;
var _48968__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter48966(self__.afn,meta48967__$1));
}));

(com.rpl.specter.t_com$rpl$specter48966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48968){
var self__ = this;
var _48968__$1 = this;
return self__.meta48967;
}));

(com.rpl.specter.t_com$rpl$specter48966.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter48966.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter48966.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter48966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta48967","meta48967",-1970640453,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter48966.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter48966.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter48966");

(com.rpl.specter.t_com$rpl$specter48966.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter48966");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter48966.
 */
com.rpl.specter.__GT_t_com$rpl$specter48966 = (function com$rpl$specter$__GT_t_com$rpl$specter48966(afn,meta48967){
return (new com.rpl.specter.t_com$rpl$specter48966(afn,meta48967));
});


/**
 * Defines an endpoint in the navigation the transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter48966(afn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter48969 = (function (afn,meta48970){
this.afn = afn;
this.meta48970 = meta48970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter48969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48971,meta48970__$1){
var self__ = this;
var _48971__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter48969(self__.afn,meta48970__$1));
}));

(com.rpl.specter.t_com$rpl$specter48969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48971){
var self__ = this;
var _48971__$1 = this;
return self__.meta48970;
}));

(com.rpl.specter.t_com$rpl$specter48969.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter48969.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter48969.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null, vals,structure));
}));

(com.rpl.specter.t_com$rpl$specter48969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta48970","meta48970",-184677669,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter48969.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter48969.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter48969");

(com.rpl.specter.t_com$rpl$specter48969.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter48969");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter48969.
 */
com.rpl.specter.__GT_t_com$rpl$specter48969 = (function com$rpl$specter$__GT_t_com$rpl$specter48969(afn,meta48970){
return (new com.rpl.specter.t_com$rpl$specter48969(afn,meta48970));
});


/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter48969(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__48973 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__48973) : com.rpl.specter.terminal.call(null, G__48973));
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter48974 = (function (meta48975){
this.meta48975 = meta48975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter48974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48976,meta48975__$1){
var self__ = this;
var _48976__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter48974(meta48975__$1));
}));

(com.rpl.specter.t_com$rpl$specter48974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48976){
var self__ = this;
var _48976__$1 = this;
return self__.meta48975;
}));

(com.rpl.specter.t_com$rpl$specter48974.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter48974.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter48974.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.all_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter48974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48975","meta48975",-1249853874,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter48974.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter48974.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter48974");

(com.rpl.specter.t_com$rpl$specter48974.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter48974");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter48974.
 */
com.rpl.specter.__GT_t_com$rpl$specter48974 = (function com$rpl$specter$__GT_t_com$rpl$specter48974(meta48975){
return (new com.rpl.specter.t_com$rpl$specter48974(meta48975));
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
com.rpl.specter.ALL = (new com.rpl.specter.t_com$rpl$specter48974(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter48978 = (function (meta48979){
this.meta48979 = meta48979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter48978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48980,meta48979__$1){
var self__ = this;
var _48980__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter48978(meta48979__$1));
}));

(com.rpl.specter.t_com$rpl$specter48978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48980){
var self__ = this;
var _48980__$1 = this;
return self__.meta48979;
}));

(com.rpl.specter.t_com$rpl$specter48978.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter48978.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter48978.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter48978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48979","meta48979",1831168563,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter48978.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter48978.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter48978");

(com.rpl.specter.t_com$rpl$specter48978.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter48978");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter48978.
 */
com.rpl.specter.__GT_t_com$rpl$specter48978 = (function com$rpl$specter$__GT_t_com$rpl$specter48978(meta48979){
return (new com.rpl.specter.t_com$rpl$specter48978(meta48979));
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
com.rpl.specter.ALL_WITH_META = (new com.rpl.specter.t_com$rpl$specter48978(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter48982 = (function (meta48983){
this.meta48983 = meta48983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter48982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48984,meta48983__$1){
var self__ = this;
var _48984__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter48982(meta48983__$1));
}));

(com.rpl.specter.t_com$rpl$specter48982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48984){
var self__ = this;
var _48984__$1 = this;
return self__.meta48983;
}));

(com.rpl.specter.t_com$rpl$specter48982.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter48982.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter48982.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter48982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48983","meta48983",2138222862,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter48982.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter48982.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter48982");

(com.rpl.specter.t_com$rpl$specter48982.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter48982");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter48982.
 */
com.rpl.specter.__GT_t_com$rpl$specter48982 = (function com$rpl$specter$__GT_t_com$rpl$specter48982(meta48983){
return (new com.rpl.specter.t_com$rpl$specter48982(meta48983));
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
com.rpl.specter.MAP_VALS = (new com.rpl.specter.t_com$rpl$specter48982(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter48986 = (function (meta48987){
this.meta48987 = meta48987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter48986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48988,meta48987__$1){
var self__ = this;
var _48988__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter48986(meta48987__$1));
}));

(com.rpl.specter.t_com$rpl$specter48986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48988){
var self__ = this;
var _48988__$1 = this;
return self__.meta48987;
}));

(com.rpl.specter.t_com$rpl$specter48986.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter48986.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter48986.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter48986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48987","meta48987",302747082,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter48986.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter48986.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter48986");

(com.rpl.specter.t_com$rpl$specter48986.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter48986");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter48986.
 */
com.rpl.specter.__GT_t_com$rpl$specter48986 = (function com$rpl$specter$__GT_t_com$rpl$specter48986(meta48987){
return (new com.rpl.specter.t_com$rpl$specter48986(meta48987));
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
com.rpl.specter.MAP_KEYS = (new com.rpl.specter.t_com$rpl$specter48986(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter48990 = (function (meta48991){
this.meta48991 = meta48991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter48990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48992,meta48991__$1){
var self__ = this;
var _48992__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter48990(meta48991__$1));
}));

(com.rpl.specter.t_com$rpl$specter48990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48992){
var self__ = this;
var _48992__$1 = this;
return self__.meta48991;
}));

(com.rpl.specter.t_com$rpl$specter48990.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter48990.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__48993 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,structure);
var G__48994 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__48993,G__48994) : next_fn__19097__auto__.call(null, G__48993,G__48994));
}));

(com.rpl.specter.t_com$rpl$specter48990.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__48995 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,structure);
var G__48996 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__48995,G__48996) : next_fn__19097__auto__.call(null, G__48995,G__48996));
}));

(com.rpl.specter.t_com$rpl$specter48990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48991","meta48991",1471519031,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter48990.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter48990.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter48990");

(com.rpl.specter.t_com$rpl$specter48990.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter48990");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter48990.
 */
com.rpl.specter.__GT_t_com$rpl$specter48990 = (function com$rpl$specter$__GT_t_com$rpl$specter48990(meta48991){
return (new com.rpl.specter.t_com$rpl$specter48990(meta48991));
});


com.rpl.specter.VAL = (new com.rpl.specter.t_com$rpl$specter48990(null));
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
com.rpl.specter.t_com$rpl$specter49002 = (function (start_index_fn,end_index_fn,meta49003){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta49003 = meta49003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49004,meta49003__$1){
var self__ = this;
var _49004__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49002(self__.start_index_fn,self__.end_index_fn,meta49003__$1));
}));

(com.rpl.specter.t_com$rpl$specter49002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49004){
var self__ = this;
var _49004__$1 = this;
return self__.meta49003;
}));

(com.rpl.specter.t_com$rpl$specter49002.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49002.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null, structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter49002.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null, structure));
var G__49005 = structure;
var G__49006 = s;
var G__49007 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__49008 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__49005,G__49006,G__49007,G__49008) : com.rpl.specter.navs.srange_transform.call(null, G__49005,G__49006,G__49007,G__49008));
}));

(com.rpl.specter.t_com$rpl$specter49002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta49003","meta49003",-934597556,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49002.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49002.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49002");

(com.rpl.specter.t_com$rpl$specter49002.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49002");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49002.
 */
com.rpl.specter.__GT_t_com$rpl$specter49002 = (function com$rpl$specter$__GT_t_com$rpl$specter49002(start_index_fn,end_index_fn,meta49003){
return (new com.rpl.specter.t_com$rpl$specter49002(start_index_fn,end_index_fn,meta49003));
});




com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null, structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null, structure));
var G__48998 = structure;
var G__48999 = s;
var G__49000 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__49001 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__48998,G__48999,G__49000,G__49001) : com.rpl.specter.navs.srange_transform.call(null, G__48998,G__48999,G__49000,G__49001));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
return (new com.rpl.specter.t_com$rpl$specter49002(start_index_fn,end_index_fn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49010 = (function (start,end,meta49011){
this.start = start;
this.end = end;
this.meta49011 = meta49011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49012,meta49011__$1){
var self__ = this;
var _49012__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49010(self__.start,self__.end,meta49011__$1));
}));

(com.rpl.specter.t_com$rpl$specter49010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49012){
var self__ = this;
var _49012__$1 = this;
return self__.meta49011;
}));

(com.rpl.specter.t_com$rpl$specter49010.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49010.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter49010.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null, structure,self__.start,self__.end,next_fn));
}));

(com.rpl.specter.t_com$rpl$specter49010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta49011","meta49011",-1333878664,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49010.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49010.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49010");

(com.rpl.specter.t_com$rpl$specter49010.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49010");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49010.
 */
com.rpl.specter.__GT_t_com$rpl$specter49010 = (function com$rpl$specter$__GT_t_com$rpl$specter49010(start,end,meta49011){
return (new com.rpl.specter.t_com$rpl$specter49010(start,end,meta49011));
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
return (new com.rpl.specter.t_com$rpl$specter49010(start,end,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49018 = (function (pred,meta49019){
this.pred = pred;
this.meta49019 = meta49019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49020,meta49019__$1){
var self__ = this;
var _49020__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49018(self__.pred,meta49019__$1));
}));

(com.rpl.specter.t_com$rpl$specter49018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49020){
var self__ = this;
var _49020__$1 = this;
return self__.meta49019;
}));

(com.rpl.specter.t_com$rpl$specter49018.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49018.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14598__auto__,p__49021){
var vec__49023 = p__49021;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49023,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49023,(1),null);
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

(com.rpl.specter.t_com$rpl$specter49018.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter49018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta49019","meta49019",229996529,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49018.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49018.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49018");

(com.rpl.specter.t_com$rpl$specter49018.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49018");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49018.
 */
com.rpl.specter.__GT_t_com$rpl$specter49018 = (function com$rpl$specter$__GT_t_com$rpl$specter49018(pred,meta49019){
return (new com.rpl.specter.t_com$rpl$specter49018(pred,meta49019));
});




com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14598__auto__,p__49014){
var vec__49015 = p__49014;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49015,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49015,(1),null);
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
return (new com.rpl.specter.t_com$rpl$specter49018(pred,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49028 = (function (meta49029){
this.meta49029 = meta49029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49030,meta49029__$1){
var self__ = this;
var _49030__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49028(meta49029__$1));
}));

(com.rpl.specter.t_com$rpl$specter49028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49030){
var self__ = this;
var _49030__$1 = this;
return self__.meta49029;
}));

(com.rpl.specter.t_com$rpl$specter49028.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49028.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter49028.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter49028.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49029","meta49029",-1893810837,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49028.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49028.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49028");

(com.rpl.specter.t_com$rpl$specter49028.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49028");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49028.
 */
com.rpl.specter.__GT_t_com$rpl$specter49028 = (function com$rpl$specter$__GT_t_com$rpl$specter49028(meta49029){
return (new com.rpl.specter.t_com$rpl$specter49028(meta49029));
});




com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__49026 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__49026) : next_fn.call(null, G__49026));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null, ""))),structure].join('');
} else {
var to_prepend = (function (){var G__49027 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__49027) : next_fn.call(null, G__49027));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (new com.rpl.specter.t_com$rpl$specter49028(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49034 = (function (meta49035){
this.meta49035 = meta49035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49036,meta49035__$1){
var self__ = this;
var _49036__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49034(meta49035__$1));
}));

(com.rpl.specter.t_com$rpl$specter49034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49036){
var self__ = this;
var _49036__$1 = this;
return self__.meta49035;
}));

(com.rpl.specter.t_com$rpl$specter49034.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49034.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter49034.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter49034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49035","meta49035",1471521163,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49034.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49034.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49034");

(com.rpl.specter.t_com$rpl$specter49034.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49034");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49034.
 */
com.rpl.specter.__GT_t_com$rpl$specter49034 = (function com$rpl$specter$__GT_t_com$rpl$specter49034(meta49035){
return (new com.rpl.specter.t_com$rpl$specter49034(meta49035));
});




com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__49032 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__49032) : next_fn.call(null, G__49032));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null, "")))].join('');
} else {
var to_append = (function (){var G__49033 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__49033) : next_fn.call(null, G__49033));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (new com.rpl.specter.t_com$rpl$specter49034(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49038 = (function (meta49039){
this.meta49039 = meta49039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49040,meta49039__$1){
var self__ = this;
var _49040__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49038(meta49039__$1));
}));

(com.rpl.specter.t_com$rpl$specter49038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49040){
var self__ = this;
var _49040__$1 = this;
return self__.meta49039;
}));

(com.rpl.specter.t_com$rpl$specter49038.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49038.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter49038.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter49038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49039","meta49039",-1012327117,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49038.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49038.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49038");

(com.rpl.specter.t_com$rpl$specter49038.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49038");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49038.
 */
com.rpl.specter.__GT_t_com$rpl$specter49038 = (function com$rpl$specter$__GT_t_com$rpl$specter49038(meta49039){
return (new com.rpl.specter.t_com$rpl$specter49038(meta49039));
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
com.rpl.specter.NONE_ELEM = (new com.rpl.specter.t_com$rpl$specter49038(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49042 = (function (meta49043){
this.meta49043 = meta49043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49044,meta49043__$1){
var self__ = this;
var _49044__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49042(meta49043__$1));
}));

(com.rpl.specter.t_com$rpl$specter49042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49044){
var self__ = this;
var _49044__$1 = this;
return self__.meta49043;
}));

(com.rpl.specter.t_com$rpl$specter49042.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49042.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter49042.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter49042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49043","meta49043",-745599738,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49042.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49042.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49042");

(com.rpl.specter.t_com$rpl$specter49042.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49042");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49042.
 */
com.rpl.specter.__GT_t_com$rpl$specter49042 = (function com$rpl$specter$__GT_t_com$rpl$specter49042(meta49043){
return (new com.rpl.specter.t_com$rpl$specter49042(meta49043));
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
com.rpl.specter.BEFORE_ELEM = (new com.rpl.specter.t_com$rpl$specter49042(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49046 = (function (meta49047){
this.meta49047 = meta49047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49048,meta49047__$1){
var self__ = this;
var _49048__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49046(meta49047__$1));
}));

(com.rpl.specter.t_com$rpl$specter49046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49048){
var self__ = this;
var _49048__$1 = this;
return self__.meta49047;
}));

(com.rpl.specter.t_com$rpl$specter49046.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49046.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter49046.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter49046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49047","meta49047",-149709993,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49046.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49046.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49046");

(com.rpl.specter.t_com$rpl$specter49046.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49046");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49046.
 */
com.rpl.specter.__GT_t_com$rpl$specter49046 = (function com$rpl$specter$__GT_t_com$rpl$specter49046(meta49047){
return (new com.rpl.specter.t_com$rpl$specter49046(meta49047));
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
com.rpl.specter.AFTER_ELEM = (new com.rpl.specter.t_com$rpl$specter49046(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49050 = (function (aset,meta49051){
this.aset = aset;
this.meta49051 = meta49051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49052,meta49051__$1){
var self__ = this;
var _49052__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49050(self__.aset,meta49051__$1));
}));

(com.rpl.specter.t_com$rpl$specter49050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49052){
var self__ = this;
var _49052__$1 = this;
return self__.meta49051;
}));

(com.rpl.specter.t_com$rpl$specter49050.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49050.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
}));

(com.rpl.specter.t_com$rpl$specter49050.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
}));

(com.rpl.specter.t_com$rpl$specter49050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta49051","meta49051",-957170056,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49050.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49050.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49050");

(com.rpl.specter.t_com$rpl$specter49050.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49050");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49050.
 */
com.rpl.specter.__GT_t_com$rpl$specter49050 = (function com$rpl$specter$__GT_t_com$rpl$specter49050(aset,meta49051){
return (new com.rpl.specter.t_com$rpl$specter49050(aset,meta49051));
});




com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__49049 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__49049) : next_fn.call(null, G__49049));
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
return (new com.rpl.specter.t_com$rpl$specter49050(aset,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49055 = (function (m_keys,meta49056){
this.m_keys = m_keys;
this.meta49056 = meta49056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49057,meta49056__$1){
var self__ = this;
var _49057__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49055(self__.m_keys,meta49056__$1));
}));

(com.rpl.specter.t_com$rpl$specter49055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49057){
var self__ = this;
var _49057__$1 = this;
return self__.meta49056;
}));

(com.rpl.specter.t_com$rpl$specter49055.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49055.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
}));

(com.rpl.specter.t_com$rpl$specter49055.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
}));

(com.rpl.specter.t_com$rpl$specter49055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta49056","meta49056",962595682,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49055.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49055.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49055");

(com.rpl.specter.t_com$rpl$specter49055.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49055");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49055.
 */
com.rpl.specter.__GT_t_com$rpl$specter49055 = (function com$rpl$specter$__GT_t_com$rpl$specter49055(m_keys,meta49056){
return (new com.rpl.specter.t_com$rpl$specter49055(m_keys,meta49056));
});




com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__49054 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__49054) : next_fn.call(null, G__49054));
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
return (new com.rpl.specter.t_com$rpl$specter49055(m_keys,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49059 = (function (path,late,meta49060){
this.path = path;
this.late = late;
this.meta49060 = meta49060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49061,meta49060__$1){
var self__ = this;
var _49061__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49059(self__.path,self__.late,meta49060__$1));
}));

(com.rpl.specter.t_com$rpl$specter49059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49061){
var self__ = this;
var _49061__$1 = this;
return self__.meta49060;
}));

(com.rpl.specter.t_com$rpl$specter49059.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49059.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null, self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter49059.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null, self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(transformed));
var G__49062 = self__.late;
var G__49063 = (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});
var G__49064 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__49062,G__49063,G__49064) : com.rpl.specter.compiled_transform.call(null, G__49062,G__49063,G__49064));
}));

(com.rpl.specter.t_com$rpl$specter49059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta49060","meta49060",-1462183503,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49059.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49059.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49059");

(com.rpl.specter.t_com$rpl$specter49059.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49059");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49059.
 */
com.rpl.specter.__GT_t_com$rpl$specter49059 = (function com$rpl$specter$__GT_t_com$rpl$specter49059(path,late,meta49060){
return (new com.rpl.specter.t_com$rpl$specter49059(path,late,meta49060));
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
var G__49335__delegate = function (path){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter49059(path,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
};
var G__49335 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__49336__i = 0, G__49336__a = new Array(arguments.length -  0);
while (G__49336__i < G__49336__a.length) {G__49336__a[G__49336__i] = arguments[G__49336__i + 0]; ++G__49336__i;}
  path = new cljs.core.IndexedSeq(G__49336__a,0,null);
} 
return G__49335__delegate.call(this,path);};
G__49335.cljs$lang$maxFixedArity = 0;
G__49335.cljs$lang$applyTo = (function (arglist__49337){
var path = cljs.core.seq(arglist__49337);
return G__49335__delegate(path);
});
G__49335.cljs$core$IFn$_invoke$arity$variadic = G__49335__delegate;
return G__49335;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49066 = (function (key,meta49067){
this.key = key;
this.meta49067 = meta49067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49068,meta49067__$1){
var self__ = this;
var _49068__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49066(self__.key,meta49067__$1));
}));

(com.rpl.specter.t_com$rpl$specter49066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49068){
var self__ = this;
var _49068__$1 = this;
return self__.meta49067;
}));

(com.rpl.specter.t_com$rpl$specter49066.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49066.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null, vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter49066.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

(com.rpl.specter.t_com$rpl$specter49066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta49067","meta49067",-1087224175,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49066.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49066.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49066");

(com.rpl.specter.t_com$rpl$specter49066.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49066");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49066.
 */
com.rpl.specter.__GT_t_com$rpl$specter49066 = (function com$rpl$specter$__GT_t_com$rpl$specter49066(key,meta49067){
return (new com.rpl.specter.t_com$rpl$specter49066(key,meta49067));
});


/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
return (new com.rpl.specter.t_com$rpl$specter49066(key,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49069 = (function (elem,meta49070){
this.elem = elem;
this.meta49070 = meta49070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49071,meta49070__$1){
var self__ = this;
var _49071__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49069(self__.elem,meta49070__$1));
}));

(com.rpl.specter.t_com$rpl$specter49069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49071){
var self__ = this;
var _49071__$1 = this;
return self__.meta49070;
}));

(com.rpl.specter.t_com$rpl$specter49069.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49069.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null, vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter49069.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

(com.rpl.specter.t_com$rpl$specter49069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta49070","meta49070",1751727406,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49069.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49069.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49069");

(com.rpl.specter.t_com$rpl$specter49069.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49069");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49069.
 */
com.rpl.specter.__GT_t_com$rpl$specter49069 = (function com$rpl$specter$__GT_t_com$rpl$specter49069(elem,meta49070){
return (new com.rpl.specter.t_com$rpl$specter49069(elem,meta49070));
});


/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
return (new com.rpl.specter.t_com$rpl$specter49069(elem,null));
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
com.rpl.specter.t_com$rpl$specter49072 = (function (index,meta49073){
this.index = index;
this.meta49073 = meta49073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49074,meta49073__$1){
var self__ = this;
var _49074__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49072(self__.index,meta49073__$1));
}));

(com.rpl.specter.t_com$rpl$specter49072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49074){
var self__ = this;
var _49074__$1 = this;
return self__.meta49073;
}));

(com.rpl.specter.t_com$rpl$specter49072.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49072.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter49072.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null, vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.navs.insert_before_idx(structure,self__.index,v);
}
}));

(com.rpl.specter.t_com$rpl$specter49072.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta49073","meta49073",-1070583025,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49072.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49072.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49072");

(com.rpl.specter.t_com$rpl$specter49072.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49072");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49072.
 */
com.rpl.specter.__GT_t_com$rpl$specter49072 = (function com$rpl$specter$__GT_t_com$rpl$specter49072(index,meta49073){
return (new com.rpl.specter.t_com$rpl$specter49072(index,meta49073));
});


/**
 * Navigates to the empty space between the index and the prior index. For select
 *        navigates to NONE, and transforms to non-NONE insert at that position.
 */
com.rpl.specter.before_index = com.rpl.specter.impl.direct_nav_obj((function (index){
return (new com.rpl.specter.t_com$rpl$specter49072(index,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49076 = (function (i,meta49077){
this.i = i;
this.meta49077 = meta49077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49078,meta49077__$1){
var self__ = this;
var _49078__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49076(self__.i,meta49077__$1));
}));

(com.rpl.specter.t_com$rpl$specter49076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49078){
var self__ = this;
var _49078__$1 = this;
return self__.meta49077;
}));

(com.rpl.specter.t_com$rpl$specter49076.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49076.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null, vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter49076.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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
var G__49338 = (j - (1));
var G__49339 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__49338;
s = G__49339;
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
var G__49340 = (j + (1));
var G__49341 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__49340;
s = G__49341;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache49079;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info49080 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"com/rpl/specter.cljc",15,1,1006,1009,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache49079 = info49080;

return info49080;
})():info__19105__auto__);
var precompiled49081 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__49083 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled49081.cljs$core$IFn$_invoke$arity$1 ? precompiled49081.cljs$core$IFn$_invoke$arity$1(G__49083) : precompiled49081.call(null, G__49083));
} else {
return precompiled49081;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache49084;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info49085 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,1001,1003,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache49084 = info49085;

return info49085;
})():info__19105__auto__);
var precompiled49086 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__49087 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled49086.cljs$core$IFn$_invoke$arity$1 ? precompiled49086.cljs$core$IFn$_invoke$arity$1(G__49087) : precompiled49086.call(null, G__49087));
} else {
return precompiled49086;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter49076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta49077","meta49077",-772286646,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49076.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49076.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49076");

(com.rpl.specter.t_com$rpl$specter49076.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49076");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49076.
 */
com.rpl.specter.__GT_t_com$rpl$specter49076 = (function com$rpl$specter$__GT_t_com$rpl$specter49076(i,meta49077){
return (new com.rpl.specter.t_com$rpl$specter49076(i,meta49077));
});


/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
return (new com.rpl.specter.t_com$rpl$specter49076(i,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49108 = (function (start,meta49109){
this.start = start;
this.meta49109 = meta49109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49110,meta49109__$1){
var self__ = this;
var _49110__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49108(self__.start,meta49109__$1));
}));

(com.rpl.specter.t_com$rpl$specter49108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49110){
var self__ = this;
var _49110__$1 = this;
return self__.meta49109;
}));

(com.rpl.specter.t_com$rpl$specter49108.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49108.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter49108.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__49112 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49112,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49112,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache49115;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info49116 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,717,720,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__49088_SHARP_){
return (p1__49088_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49088#","p1__49088#",-2055556644,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__49088#","p1__49088#",-2055556644,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__49089_SHARP_){
return (p1__49089_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49089#","p1__49089#",-1964411335,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__49089#","p1__49089#",-1964411335,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49088#","p1__49088#",-2055556644,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__49088#","p1__49088#",-2055556644,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49089#","p1__49089#",-1964411335,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__49089#","p1__49089#",-1964411335,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49088#","p1__49088#",-2055556644,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__49088#","p1__49088#",-2055556644,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49089#","p1__49089#",-1964411335,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__49089#","p1__49089#",-1964411335,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache49115 = info49116;

return info49116;
})():info__19105__auto__);
var precompiled49117 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__49118 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__49088_SHARP_){
return (p1__49088_SHARP_ >= (curri + (1)));
}),(function (p1__49089_SHARP_){
return (p1__49089_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__49088_SHARP_){
return (p1__49088_SHARP_ >= (curri + (1)));
}),(function (p1__49089_SHARP_){
return (p1__49089_SHARP_ <= newi);
})], null);
return (precompiled49117.cljs$core$IFn$_invoke$arity$1 ? precompiled49117.cljs$core$IFn$_invoke$arity$1(G__49118) : precompiled49117.call(null, G__49118));
} else {
return precompiled49117;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache49119;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info49120 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,1020,1023,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache49119 = info49120;

return info49120;
})():info__19105__auto__);
var precompiled49121 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__49122 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled49121.cljs$core$IFn$_invoke$arity$1 ? precompiled49121.cljs$core$IFn$_invoke$arity$1(G__49122) : precompiled49121.call(null, G__49122));
} else {
return precompiled49121;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache49123;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info49124 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,1001,1003,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache49123 = info49124;

return info49124;
})():info__19105__auto__);
var precompiled49125 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__49126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled49125.cljs$core$IFn$_invoke$arity$1 ? precompiled49125.cljs$core$IFn$_invoke$arity$1(G__49126) : precompiled49125.call(null, G__49126));
} else {
return precompiled49125;
}
})(),newe,s));
}),structure,structure);
}));

(com.rpl.specter.t_com$rpl$specter49108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta49109","meta49109",1744441042,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49108.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49108.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49108");

(com.rpl.specter.t_com$rpl$specter49108.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49108");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49108.
 */
com.rpl.specter.__GT_t_com$rpl$specter49108 = (function com$rpl$specter$__GT_t_com$rpl$specter49108(start,meta49109){
return (new com.rpl.specter.t_com$rpl$specter49108(start,meta49109));
});




com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14598__auto__,e){
var ret__14599__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__49090 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__49090) : next_fn.call(null, G__49090));
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
var vec__49091 = (function (){var G__49094 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__49094) : next_fn.call(null, G__49094));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49091,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49091,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache49096;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info49097 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,717,720,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__49088_SHARP_){
return (p1__49088_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49088#","p1__49088#",-2055556644,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__49088#","p1__49088#",-2055556644,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__49089_SHARP_){
return (p1__49089_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49089#","p1__49089#",-1964411335,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__49089#","p1__49089#",-1964411335,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49088#","p1__49088#",-2055556644,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__49088#","p1__49088#",-2055556644,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49089#","p1__49089#",-1964411335,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__49089#","p1__49089#",-1964411335,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49088#","p1__49088#",-2055556644,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__49088#","p1__49088#",-2055556644,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49089#","p1__49089#",-1964411335,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__49089#","p1__49089#",-1964411335,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache49096 = info49097;

return info49097;
})():info__19105__auto__);
var precompiled49098 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__49099 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__49088_SHARP_){
return (p1__49088_SHARP_ >= (curri + (1)));
}),(function (p1__49089_SHARP_){
return (p1__49089_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__49088_SHARP_){
return (p1__49088_SHARP_ >= (curri + (1)));
}),(function (p1__49089_SHARP_){
return (p1__49089_SHARP_ <= newi);
})], null);
return (precompiled49098.cljs$core$IFn$_invoke$arity$1 ? precompiled49098.cljs$core$IFn$_invoke$arity$1(G__49099) : precompiled49098.call(null, G__49099));
} else {
return precompiled49098;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache49100;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info49101 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,1020,1023,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache49100 = info49101;

return info49101;
})():info__19105__auto__);
var precompiled49102 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__49103 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled49102.cljs$core$IFn$_invoke$arity$1 ? precompiled49102.cljs$core$IFn$_invoke$arity$1(G__49103) : precompiled49102.call(null, G__49103));
} else {
return precompiled49102;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache49104;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info49105 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,1001,1003,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache49104 = info49105;

return info49105;
})():info__19105__auto__);
var precompiled49106 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__49107 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled49106.cljs$core$IFn$_invoke$arity$1 ? precompiled49106.cljs$core$IFn$_invoke$arity$1(G__49107) : precompiled49106.call(null, G__49107));
} else {
return precompiled49106;
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
return (new com.rpl.specter.t_com$rpl$specter49108(start,null));
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
com.rpl.specter.t_com$rpl$specter49128 = (function (afn,meta49129){
this.afn = afn;
this.meta49129 = meta49129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49130,meta49129__$1){
var self__ = this;
var _49130__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49128(self__.afn,meta49129__$1));
}));

(com.rpl.specter.t_com$rpl$specter49128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49130){
var self__ = this;
var _49130__$1 = this;
return self__.meta49129;
}));

(com.rpl.specter.t_com$rpl$specter49128.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49128.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__49131 = vals;
var G__49132 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null, structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__49131,G__49132) : next_fn.call(null, G__49131,G__49132));
}));

(com.rpl.specter.t_com$rpl$specter49128.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__49133 = vals;
var G__49134 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null, structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__49133,G__49134) : next_fn.call(null, G__49133,G__49134));
}));

(com.rpl.specter.t_com$rpl$specter49128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta49129","meta49129",-465645212,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49128.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49128.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49128");

(com.rpl.specter.t_com$rpl$specter49128.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49128");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49128.
 */
com.rpl.specter.__GT_t_com$rpl$specter49128 = (function com$rpl$specter$__GT_t_com$rpl$specter49128(afn,meta49129){
return (new com.rpl.specter.t_com$rpl$specter49128(afn,meta49129));
});


/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter49128(afn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49138 = (function (parse_fn,unparse_fn,meta49139){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta49139 = meta49139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49140,meta49139__$1){
var self__ = this;
var _49140__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49138(self__.parse_fn,self__.unparse_fn,meta49139__$1));
}));

(com.rpl.specter.t_com$rpl$specter49138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49140){
var self__ = this;
var _49140__$1 = this;
return self__.meta49139;
}));

(com.rpl.specter.t_com$rpl$specter49138.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49138.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null, structure)));
}));

(com.rpl.specter.t_com$rpl$specter49138.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var G__49141 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null, structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__49141) : self__.unparse_fn.call(null, G__49141));
}));

(com.rpl.specter.t_com$rpl$specter49138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta49139","meta49139",359780309,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49138.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49138.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49138");

(com.rpl.specter.t_com$rpl$specter49138.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49138");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49138.
 */
com.rpl.specter.__GT_t_com$rpl$specter49138 = (function com$rpl$specter$__GT_t_com$rpl$specter49138(parse_fn,unparse_fn,meta49139){
return (new com.rpl.specter.t_com$rpl$specter49138(parse_fn,unparse_fn,meta49139));
});




com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__49135 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null, structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__49135) : next_fn.call(null, G__49135));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__49136 = (function (){var G__49137 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null, structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__49137) : next_fn.call(null, G__49137));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__49136) : unparse_fn.call(null, G__49136));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
return (new com.rpl.specter.t_com$rpl$specter49138(parse_fn,unparse_fn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49144 = (function (meta49145){
this.meta49145 = meta49145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49146,meta49145__$1){
var self__ = this;
var _49146__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49144(meta49145__$1));
}));

(com.rpl.specter.t_com$rpl$specter49144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49146){
var self__ = this;
var _49146__$1 = this;
return self__.meta49145;
}));

(com.rpl.specter.t_com$rpl$specter49144.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49144.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.deref(structure));
}));

(com.rpl.specter.t_com$rpl$specter49144.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
}));

(com.rpl.specter.t_com$rpl$specter49144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49145","meta49145",-81531178,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49144.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49144.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49144");

(com.rpl.specter.t_com$rpl$specter49144.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49144");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49144.
 */
com.rpl.specter.__GT_t_com$rpl$specter49144 = (function com$rpl$specter$__GT_t_com$rpl$specter49144(meta49145){
return (new com.rpl.specter.t_com$rpl$specter49144(meta49145));
});




com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__49143 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__49143) : next_fn.call(null, G__49143));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (new com.rpl.specter.t_com$rpl$specter49144(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49148 = (function (re,meta49149){
this.re = re;
this.meta49149 = meta49149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49150,meta49149__$1){
var self__ = this;
var _49150__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49148(self__.re,meta49149__$1));
}));

(com.rpl.specter.t_com$rpl$specter49148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49150){
var self__ = this;
var _49150__$1 = this;
return self__.meta49149;
}));

(com.rpl.specter.t_com$rpl$specter49148.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49148.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter49148.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return clojure.string.replace(structure,self__.re,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter49148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta49149","meta49149",288459191,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49148.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49148.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49148");

(com.rpl.specter.t_com$rpl$specter49148.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49148");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49148.
 */
com.rpl.specter.__GT_t_com$rpl$specter49148 = (function com$rpl$specter$__GT_t_com$rpl$specter49148(re,meta49149){
return (new com.rpl.specter.t_com$rpl$specter49148(re,meta49149));
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
return (new com.rpl.specter.t_com$rpl$specter49148(re,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49153 = (function (path,temp__5802__auto__,late,meta49154){
this.path = path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late = late;
this.meta49154 = meta49154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49155,meta49154__$1){
var self__ = this;
var _49155__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49153(self__.path,self__.temp__5802__auto__,self__.late,meta49154__$1));
}));

(com.rpl.specter.t_com$rpl$specter49153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49155){
var self__ = this;
var _49155__$1 = this;
return self__.meta49154;
}));

(com.rpl.specter.t_com$rpl$specter49153.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49153.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__49151_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__49151_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter49153.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__49152_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__49152_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter49153.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta49154","meta49154",1230483093,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49153.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49153.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49153");

(com.rpl.specter.t_com$rpl$specter49153.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49153");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49153.
 */
com.rpl.specter.__GT_t_com$rpl$specter49153 = (function com$rpl$specter$__GT_t_com$rpl$specter49153(path,temp__5802__auto__,late,meta49154){
return (new com.rpl.specter.t_com$rpl$specter49153(path,temp__5802__auto__,late,meta49154));
});


/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__49342__delegate = function (path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
return afn;
} else {
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter49153(path,temp__5802__auto__,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
}
};
var G__49342 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__49343__i = 0, G__49343__a = new Array(arguments.length -  0);
while (G__49343__i < G__49343__a.length) {G__49343__a[G__49343__i] = arguments[G__49343__i + 0]; ++G__49343__i;}
  path = new cljs.core.IndexedSeq(G__49343__a,0,null);
} 
return G__49342__delegate.call(this,path);};
G__49342.cljs$lang$maxFixedArity = 0;
G__49342.cljs$lang$applyTo = (function (arglist__49344){
var path = cljs.core.seq(arglist__49344);
return G__49342__delegate(path);
});
G__49342.cljs$core$IFn$_invoke$arity$variadic = G__49342__delegate;
return G__49342;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49159 = (function (path,temp__5802__auto__,late,meta49160){
this.path = path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late = late;
this.meta49160 = meta49160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49161,meta49160__$1){
var self__ = this;
var _49161__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49159(self__.path,self__.temp__5802__auto__,self__.late,meta49160__$1));
}));

(com.rpl.specter.t_com$rpl$specter49159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49161){
var self__ = this;
var _49161__$1 = this;
return self__.meta49160;
}));

(com.rpl.specter.t_com$rpl$specter49159.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49159.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__49156_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__49156_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter49159.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__49158_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__49158_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter49159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta49160","meta49160",-914862863,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49159.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49159.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49159");

(com.rpl.specter.t_com$rpl$specter49159.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49159");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49159.
 */
com.rpl.specter.__GT_t_com$rpl$specter49159 = (function com$rpl$specter$__GT_t_com$rpl$specter49159(path,temp__5802__auto__,late,meta49160){
return (new com.rpl.specter.t_com$rpl$specter49159(path,temp__5802__auto__,late,meta49160));
});


com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__49345__delegate = function (path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null, s)));
});
} else {
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter49159(path,temp__5802__auto__,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
}
};
var G__49345 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__49346__i = 0, G__49346__a = new Array(arguments.length -  0);
while (G__49346__i < G__49346__a.length) {G__49346__a[G__49346__i] = arguments[G__49346__i + 0]; ++G__49346__i;}
  path = new cljs.core.IndexedSeq(G__49346__a,0,null);
} 
return G__49345__delegate.call(this,path);};
G__49345.cljs$lang$maxFixedArity = 0;
G__49345.cljs$lang$applyTo = (function (arglist__49347){
var path = cljs.core.seq(arglist__49347);
return G__49345__delegate(path);
});
G__49345.cljs$core$IFn$_invoke$arity$variadic = G__49345__delegate;
return G__49345;
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
var G__49348__delegate = function (path){
var G__49162 = com.rpl.specter.ALL;
var G__49163 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null, path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__49162,G__49163) : com.rpl.specter.subselect.call(null, G__49162,G__49163));
};
var G__49348 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__49349__i = 0, G__49349__a = new Array(arguments.length -  0);
while (G__49349__i < G__49349__a.length) {G__49349__a[G__49349__i] = arguments[G__49349__i + 0]; ++G__49349__i;}
  path = new cljs.core.IndexedSeq(G__49349__a,0,null);
} 
return G__49348__delegate.call(this,path);};
G__49348.cljs$lang$maxFixedArity = 0;
G__49348.cljs$lang$applyTo = (function (arglist__49350){
var path = cljs.core.seq(arglist__49350);
return G__49348__delegate(path);
});
G__49348.cljs$core$IFn$_invoke$arity$variadic = G__49348__delegate;
return G__49348;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49164 = (function (path,update_fn,late,late_fn,meta49165){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta49165 = meta49165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49166,meta49165__$1){
var self__ = this;
var _49166__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49164(self__.path,self__.update_fn,self__.late,self__.late_fn,meta49165__$1));
}));

(com.rpl.specter.t_com$rpl$specter49164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49166){
var self__ = this;
var _49166__$1 = this;
return self__.meta49165;
}));

(com.rpl.specter.t_com$rpl$specter49164.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49164.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null, self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter49164.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null, self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter49164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta49165","meta49165",-950439273,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49164.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49164.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49164");

(com.rpl.specter.t_com$rpl$specter49164.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49164");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49164.
 */
com.rpl.specter.__GT_t_com$rpl$specter49164 = (function com$rpl$specter$__GT_t_com$rpl$specter49164(path,update_fn,late,late_fn,meta49165){
return (new com.rpl.specter.t_com$rpl$specter49164(path,update_fn,late,late_fn,meta49165));
});


/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
return (new com.rpl.specter.t_com$rpl$specter49164(path,update_fn,late,late_fn,null));
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
com.rpl.specter.t_com$rpl$specter49168 = (function (path,reduce_fn,late,late_fn,meta49169){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta49169 = meta49169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49170,meta49169__$1){
var self__ = this;
var _49170__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49168(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta49169__$1));
}));

(com.rpl.specter.t_com$rpl$specter49168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49170){
var self__ = this;
var _49170__$1 = this;
return self__.meta49169;
}));

(com.rpl.specter.t_com$rpl$specter49168.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49168.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null, self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter49168.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null, self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter49168.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta49169","meta49169",1837721213,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49168.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49168.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49168");

(com.rpl.specter.t_com$rpl$specter49168.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49168");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49168.
 */
com.rpl.specter.__GT_t_com$rpl$specter49168 = (function com$rpl$specter$__GT_t_com$rpl$specter49168(path,reduce_fn,late,late_fn,meta49169){
return (new com.rpl.specter.t_com$rpl$specter49168(path,reduce_fn,late,late_fn,meta49169));
});


/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
return (new com.rpl.specter.t_com$rpl$specter49168(path,reduce_fn,late,late_fn,null));
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
var G__49172 = (function (p1__49171_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__49171_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__49172) : com.rpl.specter.pred.call(null, G__49172));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__49174 = (function (p1__49173_SHARP_){
return (p1__49173_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__49174) : com.rpl.specter.pred.call(null, G__49174));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__49176 = (function (p1__49175_SHARP_){
return (p1__49175_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__49176) : com.rpl.specter.pred.call(null, G__49176));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__49179 = (function (p1__49177_SHARP_){
return (p1__49177_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__49179) : com.rpl.specter.pred.call(null, G__49179));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__49181 = (function (p1__49180_SHARP_){
return (p1__49180_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__49181) : com.rpl.specter.pred.call(null, G__49181));
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
com.rpl.specter.t_com$rpl$specter49184 = (function (v,meta49185){
this.v = v;
this.meta49185 = meta49185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49186,meta49185__$1){
var self__ = this;
var _49186__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49184(self__.v,meta49185__$1));
}));

(com.rpl.specter.t_com$rpl$specter49184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49186){
var self__ = this;
var _49186__$1 = this;
return self__.meta49185;
}));

(com.rpl.specter.t_com$rpl$specter49184.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49184.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter49184.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter49184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta49185","meta49185",1325718994,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49184.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49184.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49184");

(com.rpl.specter.t_com$rpl$specter49184.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49184");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49184.
 */
com.rpl.specter.__GT_t_com$rpl$specter49184 = (function com$rpl$specter$__GT_t_com$rpl$specter49184(v,meta49185){
return (new com.rpl.specter.t_com$rpl$specter49184(v,meta49185));
});




com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
var G__49182 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__49182) : next_fn.call(null, G__49182));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__49183 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__49183) : next_fn.call(null, G__49183));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
return (new com.rpl.specter.t_com$rpl$specter49184(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__49188 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__49188) : com.rpl.specter.nil__GT_val.call(null, G__49188));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__49189 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__49189) : com.rpl.specter.nil__GT_val.call(null, G__49189));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__49190 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__49190) : com.rpl.specter.nil__GT_val.call(null, G__49190));
})();

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49193 = (function (meta49194){
this.meta49194 = meta49194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49195,meta49194__$1){
var self__ = this;
var _49195__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49193(meta49194__$1));
}));

(com.rpl.specter.t_com$rpl$specter49193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49195){
var self__ = this;
var _49195__$1 = this;
return self__.meta49194;
}));

(com.rpl.specter.t_com$rpl$specter49193.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49193.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.meta(structure));
}));

(com.rpl.specter.t_com$rpl$specter49193.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
}));

(com.rpl.specter.t_com$rpl$specter49193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49194","meta49194",-79376093,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49193.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49193.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49193");

(com.rpl.specter.t_com$rpl$specter49193.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49193");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49193.
 */
com.rpl.specter.__GT_t_com$rpl$specter49193 = (function com$rpl$specter$__GT_t_com$rpl$specter49193(meta49194){
return (new com.rpl.specter.t_com$rpl$specter49193(meta49194));
});




com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__49191 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__49191) : next_fn.call(null, G__49191));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__49192 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__49192) : next_fn.call(null, G__49192));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (new com.rpl.specter.t_com$rpl$specter49193(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49198 = (function (meta49199){
this.meta49199 = meta49199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49200,meta49199__$1){
var self__ = this;
var _49200__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49198(meta49199__$1));
}));

(com.rpl.specter.t_com$rpl$specter49198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49200){
var self__ = this;
var _49200__$1 = this;
return self__.meta49199;
}));

(com.rpl.specter.t_com$rpl$specter49198.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49198.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.name(structure));
}));

(com.rpl.specter.t_com$rpl$specter49198.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter49198.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49199","meta49199",594247433,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49198.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49198.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49198");

(com.rpl.specter.t_com$rpl$specter49198.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49198");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49198.
 */
com.rpl.specter.__GT_t_com$rpl$specter49198 = (function com$rpl$specter$__GT_t_com$rpl$specter49198(meta49199){
return (new com.rpl.specter.t_com$rpl$specter49198(meta49199));
});




com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__49196 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__49196) : next_fn.call(null, G__49196));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__49197 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__49197) : next_fn.call(null, G__49197));
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
com.rpl.specter.NAME = (new com.rpl.specter.t_com$rpl$specter49198(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49203 = (function (meta49204){
this.meta49204 = meta49204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49205,meta49204__$1){
var self__ = this;
var _49205__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49203(meta49204__$1));
}));

(com.rpl.specter.t_com$rpl$specter49203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49205){
var self__ = this;
var _49205__$1 = this;
return self__.meta49204;
}));

(com.rpl.specter.t_com$rpl$specter49203.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49203.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.namespace(structure));
}));

(com.rpl.specter.t_com$rpl$specter49203.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter49203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49204","meta49204",81769120,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49203.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49203.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49203");

(com.rpl.specter.t_com$rpl$specter49203.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49203");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49203.
 */
com.rpl.specter.__GT_t_com$rpl$specter49203 = (function com$rpl$specter$__GT_t_com$rpl$specter49203(meta49204){
return (new com.rpl.specter.t_com$rpl$specter49203(meta49204));
});




com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__49201 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__49201) : next_fn.call(null, G__49201));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__49202 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__49202) : next_fn.call(null, G__49202));
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
com.rpl.specter.NAMESPACE = (new com.rpl.specter.t_com$rpl$specter49203(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49207 = (function (path,late,meta49208){
this.path = path;
this.late = late;
this.meta49208 = meta49208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49209,meta49208__$1){
var self__ = this;
var _49209__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49207(self__.path,self__.late,meta49208__$1));
}));

(com.rpl.specter.t_com$rpl$specter49207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49209){
var self__ = this;
var _49209__$1 = this;
return self__.meta49208;
}));

(com.rpl.specter.t_com$rpl$specter49207.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49207.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__49210 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null, self__.late,structure)));
var G__49211 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__49210,G__49211) : next_fn__19097__auto__.call(null, G__49210,G__49211));
}));

(com.rpl.specter.t_com$rpl$specter49207.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__49212 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null, self__.late,structure)));
var G__49213 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__49212,G__49213) : next_fn__19097__auto__.call(null, G__49212,G__49213));
}));

(com.rpl.specter.t_com$rpl$specter49207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta49208","meta49208",783540913,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49207.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49207.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49207");

(com.rpl.specter.t_com$rpl$specter49207.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49207");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49207.
 */
com.rpl.specter.__GT_t_com$rpl$specter49207 = (function com$rpl$specter$__GT_t_com$rpl$specter49207(path,late,meta49208){
return (new com.rpl.specter.t_com$rpl$specter49207(path,late,meta49208));
});


com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__49351__delegate = function (path){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter49207(path,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
};
var G__49351 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__49352__i = 0, G__49352__a = new Array(arguments.length -  0);
while (G__49352__i < G__49352__a.length) {G__49352__a[G__49352__i] = arguments[G__49352__i + 0]; ++G__49352__i;}
  path = new cljs.core.IndexedSeq(G__49352__a,0,null);
} 
return G__49351__delegate.call(this,path);};
G__49351.cljs$lang$maxFixedArity = 0;
G__49351.cljs$lang$applyTo = (function (arglist__49353){
var path = cljs.core.seq(arglist__49353);
return G__49351__delegate(path);
});
G__49351.cljs$core$IFn$_invoke$arity$variadic = G__49351__delegate;
return G__49351;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49214 = (function (path,late,meta49215){
this.path = path;
this.late = late;
this.meta49215 = meta49215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49216,meta49215__$1){
var self__ = this;
var _49216__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49214(self__.path,self__.late,meta49215__$1));
}));

(com.rpl.specter.t_com$rpl$specter49214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49216){
var self__ = this;
var _49216__$1 = this;
return self__.meta49215;
}));

(com.rpl.specter.t_com$rpl$specter49214.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49214.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__49217 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null, self__.late,structure)));
var G__49218 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__49217,G__49218) : next_fn__19097__auto__.call(null, G__49217,G__49218));
}));

(com.rpl.specter.t_com$rpl$specter49214.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__49219 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null, self__.late,structure)));
var G__49220 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__49219,G__49220) : next_fn__19097__auto__.call(null, G__49219,G__49220));
}));

(com.rpl.specter.t_com$rpl$specter49214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta49215","meta49215",-964865862,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49214.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49214.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49214");

(com.rpl.specter.t_com$rpl$specter49214.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49214");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49214.
 */
com.rpl.specter.__GT_t_com$rpl$specter49214 = (function com$rpl$specter$__GT_t_com$rpl$specter49214(path,late,meta49215){
return (new com.rpl.specter.t_com$rpl$specter49214(path,late,meta49215));
});


com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__49354__delegate = function (path){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter49214(path,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
};
var G__49354 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__49355__i = 0, G__49355__a = new Array(arguments.length -  0);
while (G__49355__i < G__49355__a.length) {G__49355__a[G__49355__i] = arguments[G__49355__i + 0]; ++G__49355__i;}
  path = new cljs.core.IndexedSeq(G__49355__a,0,null);
} 
return G__49354__delegate.call(this,path);};
G__49354.cljs$lang$maxFixedArity = 0;
G__49354.cljs$lang$applyTo = (function (arglist__49356){
var path = cljs.core.seq(arglist__49356);
return G__49354__delegate(path);
});
G__49354.cljs$core$IFn$_invoke$arity$variadic = G__49354__delegate;
return G__49354;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49221 = (function (val,meta49222){
this.val = val;
this.meta49222 = meta49222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49223,meta49222__$1){
var self__ = this;
var _49223__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49221(self__.val,meta49222__$1));
}));

(com.rpl.specter.t_com$rpl$specter49221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49223){
var self__ = this;
var _49223__$1 = this;
return self__.meta49222;
}));

(com.rpl.specter.t_com$rpl$specter49221.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49221.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__49224 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,self__.val);
var G__49225 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__49224,G__49225) : next_fn__19097__auto__.call(null, G__49224,G__49225));
}));

(com.rpl.specter.t_com$rpl$specter49221.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__49226 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,self__.val);
var G__49227 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__49226,G__49227) : next_fn__19097__auto__.call(null, G__49226,G__49227));
}));

(com.rpl.specter.t_com$rpl$specter49221.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta49222","meta49222",-1033345827,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49221.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49221.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49221");

(com.rpl.specter.t_com$rpl$specter49221.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49221");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49221.
 */
com.rpl.specter.__GT_t_com$rpl$specter49221 = (function com$rpl$specter$__GT_t_com$rpl$specter49221(val,meta49222){
return (new com.rpl.specter.t_com$rpl$specter49221(val,meta49222));
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
return (new com.rpl.specter.t_com$rpl$specter49221(val,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49228 = (function (path,late,meta49229){
this.path = path;
this.late = late;
this.meta49229 = meta49229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49230,meta49229__$1){
var self__ = this;
var _49230__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49228(self__.path,self__.late,meta49229__$1));
}));

(com.rpl.specter.t_com$rpl$specter49228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49230){
var self__ = this;
var _49230__$1 = this;
return self__.meta49229;
}));

(com.rpl.specter.t_com$rpl$specter49228.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49228.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null, vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter49228.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null, vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter49228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta49229","meta49229",-1821812184,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49228.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49228.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49228");

(com.rpl.specter.t_com$rpl$specter49228.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49228");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49228.
 */
com.rpl.specter.__GT_t_com$rpl$specter49228 = (function com$rpl$specter$__GT_t_com$rpl$specter49228(path,late,meta49229){
return (new com.rpl.specter.t_com$rpl$specter49228(path,late,meta49229));
});


com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__49357__delegate = function (path){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter49228(path,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
};
var G__49357 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__49358__i = 0, G__49358__a = new Array(arguments.length -  0);
while (G__49358__i < G__49358__a.length) {G__49358__a[G__49358__i] = arguments[G__49358__i + 0]; ++G__49358__i;}
  path = new cljs.core.IndexedSeq(G__49358__a,0,null);
} 
return G__49357__delegate.call(this,path);};
G__49357.cljs$lang$maxFixedArity = 0;
G__49357.cljs$lang$applyTo = (function (arglist__49359){
var path = cljs.core.seq(arglist__49359);
return G__49357__delegate(path);
});
G__49357.cljs$core$IFn$_invoke$arity$variadic = G__49357__delegate;
return G__49357;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49239 = (function (meta49240){
this.meta49240 = meta49240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49241,meta49240__$1){
var self__ = this;
var _49241__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49239(meta49240__$1));
}));

(com.rpl.specter.t_com$rpl$specter49239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49241){
var self__ = this;
var _49241__$1 = this;
return self__.meta49240;
}));

(com.rpl.specter.t_com$rpl$specter49239.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49239.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__49245 = cljs.core.PersistentVector.EMPTY;
var G__49246 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__49245,G__49246) : next_fn.call(null, G__49245,G__49246));
}));

(com.rpl.specter.t_com$rpl$specter49239.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__49247 = cljs.core.PersistentVector.EMPTY;
var G__49248 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__49247,G__49248) : next_fn.call(null, G__49247,G__49248));
}));

(com.rpl.specter.t_com$rpl$specter49239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49240","meta49240",699723207,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49239.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49239.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49239");

(com.rpl.specter.t_com$rpl$specter49239.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49239");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49239.
 */
com.rpl.specter.__GT_t_com$rpl$specter49239 = (function com$rpl$specter$__GT_t_com$rpl$specter49239(meta49240){
return (new com.rpl.specter.t_com$rpl$specter49239(meta49240));
});


/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (new com.rpl.specter.t_com$rpl$specter49239(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49251 = (function (cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta49252){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5802__auto__ = temp__5802__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta49252 = meta49252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49253,meta49252__$1){
var self__ = this;
var _49253__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49251(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5802__auto__,self__.afn,self__.late_then,self__.late_else,meta49252__$1));
}));

(com.rpl.specter.t_com$rpl$specter49251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49253){
var self__ = this;
var _49253__$1 = this;
return self__.meta49252;
}));

(com.rpl.specter.t_com$rpl$specter49251.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49251.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter49251.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter49251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta49252","meta49252",-839257052,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49251.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49251.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49251");

(com.rpl.specter.t_com$rpl$specter49251.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49251");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49251.
 */
com.rpl.specter.__GT_t_com$rpl$specter49251 = (function com$rpl$specter$__GT_t_com$rpl$specter49251(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta49252){
return (new com.rpl.specter.t_com$rpl$specter49251(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta49252));
});



/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49254 = (function (cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta49255){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta49255 = meta49255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49256,meta49255__$1){
var self__ = this;
var _49256__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49254(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5802__auto__,self__.late_cond,self__.late_then,self__.late_else,meta49255__$1));
}));

(com.rpl.specter.t_com$rpl$specter49254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49256){
var self__ = this;
var _49256__$1 = this;
return self__.meta49255;
}));

(com.rpl.specter.t_com$rpl$specter49254.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49254.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,(function (p1__49249_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__49249_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter49254.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,(function (p1__49250_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__49250_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter49254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta49255","meta49255",1932230650,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49254.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49254.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49254");

(com.rpl.specter.t_com$rpl$specter49254.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49254");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49254.
 */
com.rpl.specter.__GT_t_com$rpl$specter49254 = (function com$rpl$specter$__GT_t_com$rpl$specter49254(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta49255){
return (new com.rpl.specter.t_com$rpl$specter49254(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta49255));
});


/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__49360 = null;
var G__49360__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null, cond_p,then_path,com.rpl.specter.STOP));
});
var G__49360__3 = (function (cond_p,then_path,else_path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_then,late_else){
return (new com.rpl.specter.t_com$rpl$specter49251(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null, then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null, else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
} else {
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_cond,late_then,late_else){
return (new com.rpl.specter.t_com$rpl$specter49254(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null, cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null, then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null, else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
}
});
G__49360 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__49360__2.call(this,cond_p,then_path);
case 3:
return G__49360__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49360.cljs$core$IFn$_invoke$arity$2 = G__49360__2;
G__49360.cljs$core$IFn$_invoke$arity$3 = G__49360__3;
return G__49360;
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
var G__49361__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,p__49257){
var vec__49258 = p__49257;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49258,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49258,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null, tester,apath,p));
}),com.rpl.specter.STOP,pairs);
};
var G__49361 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__49362__i = 0, G__49362__a = new Array(arguments.length -  0);
while (G__49362__i < G__49362__a.length) {G__49362__a[G__49362__i] = arguments[G__49362__i + 0]; ++G__49362__i;}
  conds = new cljs.core.IndexedSeq(G__49362__a,0,null);
} 
return G__49361__delegate.call(this,conds);};
G__49361.cljs$lang$maxFixedArity = 0;
G__49361.cljs$lang$applyTo = (function (arglist__49363){
var conds = cljs.core.seq(arglist__49363);
return G__49361__delegate(conds);
});
G__49361.cljs$core$IFn$_invoke$arity$variadic = G__49361__delegate;
return G__49361;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter49261 = (function (path1,path2,late1,late2,meta49262){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta49262 = meta49262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter49261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49263,meta49262__$1){
var self__ = this;
var _49263__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter49261(self__.path1,self__.path2,self__.late1,self__.late2,meta49262__$1));
}));

(com.rpl.specter.t_com$rpl$specter49261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49263){
var self__ = this;
var _49263__$1 = this;
return self__.meta49262;
}));

(com.rpl.specter.t_com$rpl$specter49261.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter49261.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

(com.rpl.specter.t_com$rpl$specter49261.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter49261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta49262","meta49262",-1579746573,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter49261.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter49261.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter49261");

(com.rpl.specter.t_com$rpl$specter49261.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter49261");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter49261.
 */
com.rpl.specter.__GT_t_com$rpl$specter49261 = (function com$rpl$specter$__GT_t_com$rpl$specter49261(path1,path2,late1,late2,meta49262){
return (new com.rpl.specter.t_com$rpl$specter49261(path1,path2,late1,late2,meta49262));
});


/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__49364 = null;
var G__49364__0 = (function (){
return com.rpl.specter.STAY;
});
var G__49364__1 = (function (path){
return path;
});
var G__49364__2 = (function (path1,path2){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
return (new com.rpl.specter.t_com$rpl$specter49261(path1,path2,late1,late2,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null, path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null, path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
});
var G__49364__3 = (function() { 
var G__49365__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null, path1,path2)),paths);
};
var G__49365 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__49366__i = 0, G__49366__a = new Array(arguments.length -  2);
while (G__49366__i < G__49366__a.length) {G__49366__a[G__49366__i] = arguments[G__49366__i + 2]; ++G__49366__i;}
  paths = new cljs.core.IndexedSeq(G__49366__a,0,null);
} 
return G__49365__delegate.call(this,path1,path2,paths);};
G__49365.cljs$lang$maxFixedArity = 2;
G__49365.cljs$lang$applyTo = (function (arglist__49367){
var path1 = cljs.core.first(arglist__49367);
arglist__49367 = cljs.core.next(arglist__49367);
var path2 = cljs.core.first(arglist__49367);
var paths = cljs.core.rest(arglist__49367);
return G__49365__delegate(path1,path2,paths);
});
G__49365.cljs$core$IFn$_invoke$arity$variadic = G__49365__delegate;
return G__49365;
})()
;
G__49364 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__49364__0.call(this);
case 1:
return G__49364__1.call(this,path1);
case 2:
return G__49364__2.call(this,path1,path2);
default:
var G__49368 = null;
if (arguments.length > 2) {
var G__49369__i = 0, G__49369__a = new Array(arguments.length -  2);
while (G__49369__i < G__49369__a.length) {G__49369__a[G__49369__i] = arguments[G__49369__i + 2]; ++G__49369__i;}
G__49368 = new cljs.core.IndexedSeq(G__49369__a,0,null);
}
return G__49364__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__49368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49364.cljs$lang$maxFixedArity = 2;
G__49364.cljs$lang$applyTo = G__49364__3.cljs$lang$applyTo;
G__49364.cljs$core$IFn$_invoke$arity$0 = G__49364__0;
G__49364.cljs$core$IFn$_invoke$arity$1 = G__49364__1;
G__49364.cljs$core$IFn$_invoke$arity$2 = G__49364__2;
G__49364.cljs$core$IFn$_invoke$arity$variadic = G__49364__3.cljs$core$IFn$_invoke$arity$variadic;
return G__49364;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__49370__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null, com.rpl.specter.STAY,path));
};
var G__49370 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__49371__i = 0, G__49371__a = new Array(arguments.length -  0);
while (G__49371__i < G__49371__a.length) {G__49371__a[G__49371__i] = arguments[G__49371__i + 0]; ++G__49371__i;}
  path = new cljs.core.IndexedSeq(G__49371__a,0,null);
} 
return G__49370__delegate.call(this,path);};
G__49370.cljs$lang$maxFixedArity = 0;
G__49370.cljs$lang$applyTo = (function (arglist__49372){
var path = cljs.core.seq(arglist__49372);
return G__49370__delegate(path);
});
G__49370.cljs$core$IFn$_invoke$arity$variadic = G__49370__delegate;
return G__49370;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__49373__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null, path,com.rpl.specter.STAY));
};
var G__49373 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__49374__i = 0, G__49374__a = new Array(arguments.length -  0);
while (G__49374__i < G__49374__a.length) {G__49374__a[G__49374__i] = arguments[G__49374__i + 0]; ++G__49374__i;}
  path = new cljs.core.IndexedSeq(G__49374__a,0,null);
} 
return G__49373__delegate.call(this,path);};
G__49373.cljs$lang$maxFixedArity = 0;
G__49373.cljs$lang$applyTo = (function (arglist__49375){
var path = cljs.core.seq(arglist__49375);
return G__49373__delegate(path);
});
G__49373.cljs$core$IFn$_invoke$arity$variadic = G__49373__delegate;
return G__49373;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__19105__auto__ = com.rpl.specter.pathcache49268;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info49269 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),1432,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1212,1216,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,682,684,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2181,2181,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,717,720,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache49268 = info49269;

return info49269;
})():info__19105__auto__);
var precompiled49270 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__49271 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled49270.cljs$core$IFn$_invoke$arity$1 ? precompiled49270.cljs$core$IFn$_invoke$arity$1(G__49271) : precompiled49270.call(null, G__49271));
} else {
return precompiled49270;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__19105__auto__ = com.rpl.specter.pathcache49272;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info49273 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),1432,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1212,1216,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,682,684,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2181,2181,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"com/rpl/specter.cljc",16,1,727,729,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache49272 = info49273;

return info49273;
})():info__19105__auto__);
var precompiled49274 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__49275 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled49274.cljs$core$IFn$_invoke$arity$1 ? precompiled49274.cljs$core$IFn$_invoke$arity$1(G__49275) : precompiled49274.call(null, G__49275));
} else {
return precompiled49274;
}
})());

return p;
}));
var empty__GT_NONE_49376 = (function (){var G__49276 = cljs.core.empty_QMARK_;
var G__49277 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__49276,G__49277) : com.rpl.specter.if_path.call(null, G__49276,G__49277));
})();
var compact_STAR__49377 = (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_49376) : com.rpl.specter.multi_path.call(null, nav,empty__GT_NONE_49376));
});
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__49378__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__49377,path);
};
var G__49378 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__49379__i = 0, G__49379__a = new Array(arguments.length -  0);
while (G__49379__i < G__49379__a.length) {G__49379__a[G__49379__i] = arguments[G__49379__i + 0]; ++G__49379__i;}
  path = new cljs.core.IndexedSeq(G__49379__a,0,null);
} 
return G__49378__delegate.call(this,path);};
G__49378.cljs$lang$maxFixedArity = 0;
G__49378.cljs$lang$applyTo = (function (arglist__49380){
var path = cljs.core.seq(arglist__49380);
return G__49378__delegate(path);
});
G__49378.cljs$core$IFn$_invoke$arity$variadic = G__49378__delegate;
return G__49378;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=com.rpl.specter.js.map
