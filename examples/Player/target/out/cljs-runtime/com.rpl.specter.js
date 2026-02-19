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
var G__68188__delegate = function (args){
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
var G__68188 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68189__i = 0, G__68189__a = new Array(arguments.length -  0);
while (G__68189__i < G__68189__a.length) {G__68189__a[G__68189__i] = arguments[G__68189__i + 0]; ++G__68189__i;}
  args = new cljs.core.IndexedSeq(G__68189__a,0,null);
} 
return G__68188__delegate.call(this,args);};
G__68188.cljs$lang$maxFixedArity = 0;
G__68188.cljs$lang$applyTo = (function (arglist__68190){
var args = cljs.core.seq(arglist__68190);
return G__68188__delegate(args);
});
G__68188.cljs$core$IFn$_invoke$arity$variadic = G__68188__delegate;
return G__68188;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__5732__auto__ = [];
var len__5726__auto___68191 = arguments.length;
var i__5727__auto___68192 = (0);
while(true){
if((i__5727__auto___68192 < len__5726__auto___68191)){
args__5732__auto__.push((arguments[i__5727__auto___68192]));

var G__68193 = (i__5727__auto___68192 + (1));
i__5727__auto___68192 = G__68193;
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
(com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq67826){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67826));
}));

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__67830 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__67831 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__67830,G__67831) : com.rpl.specter.compiled_select.call(null, G__67830,G__67831));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__67833 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__67834 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__67833,G__67834) : com.rpl.specter.compiled_select_one.call(null, G__67833,G__67834));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__67835 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__67836 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__67835,G__67836) : com.rpl.specter.compiled_select_one_BANG_.call(null, G__67835,G__67836));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__67837 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__67838 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__67837,G__67838) : com.rpl.specter.compiled_select_first.call(null, G__67837,G__67838));
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
var G__67839 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__67840 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__67839,G__67840) : com.rpl.specter.compiled_select_any.call(null, G__67839,G__67840));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__67842 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__67843 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__67842,G__67843) : com.rpl.specter.compiled_selected_any_QMARK_.call(null, G__67842,G__67843));
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
var G__67844 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__67845 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__67844,G__67845) : com.rpl.specter.compiled_traverse.call(null, G__67844,G__67845));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__67847 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__67847) : com.rpl.specter.compiled_traverse_all.call(null, G__67847));
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
var G__67849 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__67850 = transform_fn;
var G__67851 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__67849,G__67850,G__67851) : com.rpl.specter.compiled_transform.call(null, G__67849,G__67850,G__67851));
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
var G__67854 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__67855 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__67854,G__67855) : com.rpl.specter.compiled_multi_transform.call(null, G__67854,G__67855));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__67857 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__67858 = val;
var G__67859 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__67857,G__67858,G__67859) : com.rpl.specter.compiled_setval.call(null, G__67857,G__67858,G__67859));
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
var len__5726__auto___68199 = arguments.length;
var i__5727__auto___68200 = (0);
while(true){
if((i__5727__auto___68200 < len__5726__auto___68199)){
args__5732__auto__.push((arguments[i__5727__auto___68200]));

var G__68201 = (i__5727__auto___68200 + (1));
i__5727__auto___68200 = G__68201;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__67865){
var map__67866 = p__67865;
var map__67866__$1 = cljs.core.__destructure_map(map__67866);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67866__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var G__67867 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__67868 = transform_fn;
var G__67869 = structure;
var G__67870 = new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341);
var G__67871 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__67867,G__67868,G__67869,G__67870,G__67871) : com.rpl.specter.compiled_replace_in.call(null, G__67867,G__67868,G__67869,G__67870,G__67871));
}));

(com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq67861){
var G__67862 = cljs.core.first(seq67861);
var seq67861__$1 = cljs.core.next(seq67861);
var G__67863 = cljs.core.first(seq67861__$1);
var seq67861__$2 = cljs.core.next(seq67861__$1);
var G__67864 = cljs.core.first(seq67861__$2);
var seq67861__$3 = cljs.core.next(seq67861__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67862,G__67863,G__67864,seq67861__$3);
}));

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
com.rpl.specter.eachnav = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (navfn){
var latenavfn = (com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1(navfn) : com.rpl.specter.late_resolved_fn.call(null, navfn));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__68202__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__68202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68203__i = 0, G__68203__a = new Array(arguments.length -  0);
while (G__68203__i < G__68203__a.length) {G__68203__a[G__68203__i] = arguments[G__68203__i + 0]; ++G__68203__i;}
  args = new cljs.core.IndexedSeq(G__68203__a,0,null);
} 
return G__68202__delegate.call(this,args);};
G__68202.cljs$lang$maxFixedArity = 0;
G__68202.cljs$lang$applyTo = (function (arglist__68204){
var args = cljs.core.seq(arglist__68204);
return G__68202__delegate(args);
});
G__68202.cljs$core$IFn$_invoke$arity$variadic = G__68202__delegate;
return G__68202;
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
com.rpl.specter.t_com$rpl$specter67874 = (function (meta67875){
this.meta67875 = meta67875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67876,meta67875__$1){
var self__ = this;
var _67876__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67874(meta67875__$1));
}));

(com.rpl.specter.t_com$rpl$specter67874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67876){
var self__ = this;
var _67876__$1 = this;
return self__.meta67875;
}));

(com.rpl.specter.t_com$rpl$specter67874.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67874.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter67874.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return structure;
}));

(com.rpl.specter.t_com$rpl$specter67874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67875","meta67875",-963656631,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67874.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67874.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67874");

(com.rpl.specter.t_com$rpl$specter67874.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67874");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67874.
 */
com.rpl.specter.__GT_t_com$rpl$specter67874 = (function com$rpl$specter$__GT_t_com$rpl$specter67874(meta67875){
return (new com.rpl.specter.t_com$rpl$specter67874(meta67875));
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
com.rpl.specter.STOP = (new com.rpl.specter.t_com$rpl$specter67874(null));
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
com.rpl.specter.t_com$rpl$specter67877 = (function (afn,meta67878){
this.afn = afn;
this.meta67878 = meta67878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67879,meta67878__$1){
var self__ = this;
var _67879__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67877(self__.afn,meta67878__$1));
}));

(com.rpl.specter.t_com$rpl$specter67877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67879){
var self__ = this;
var _67879__$1 = this;
return self__.meta67878;
}));

(com.rpl.specter.t_com$rpl$specter67877.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67877.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter67877.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter67877.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta67878","meta67878",-1026571778,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67877.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67877.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67877");

(com.rpl.specter.t_com$rpl$specter67877.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67877");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67877.
 */
com.rpl.specter.__GT_t_com$rpl$specter67877 = (function com$rpl$specter$__GT_t_com$rpl$specter67877(afn,meta67878){
return (new com.rpl.specter.t_com$rpl$specter67877(afn,meta67878));
});


/**
 * Defines an endpoint in the navigation the transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter67877(afn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67881 = (function (afn,meta67882){
this.afn = afn;
this.meta67882 = meta67882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67883,meta67882__$1){
var self__ = this;
var _67883__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67881(self__.afn,meta67882__$1));
}));

(com.rpl.specter.t_com$rpl$specter67881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67883){
var self__ = this;
var _67883__$1 = this;
return self__.meta67882;
}));

(com.rpl.specter.t_com$rpl$specter67881.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67881.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter67881.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null, vals,structure));
}));

(com.rpl.specter.t_com$rpl$specter67881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta67882","meta67882",835219190,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67881.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67881.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67881");

(com.rpl.specter.t_com$rpl$specter67881.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67881");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67881.
 */
com.rpl.specter.__GT_t_com$rpl$specter67881 = (function com$rpl$specter$__GT_t_com$rpl$specter67881(afn,meta67882){
return (new com.rpl.specter.t_com$rpl$specter67881(afn,meta67882));
});


/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter67881(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__67884 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__67884) : com.rpl.specter.terminal.call(null, G__67884));
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67886 = (function (meta67887){
this.meta67887 = meta67887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67888,meta67887__$1){
var self__ = this;
var _67888__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67886(meta67887__$1));
}));

(com.rpl.specter.t_com$rpl$specter67886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67888){
var self__ = this;
var _67888__$1 = this;
return self__.meta67887;
}));

(com.rpl.specter.t_com$rpl$specter67886.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67886.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter67886.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.all_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter67886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67887","meta67887",-2025904708,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67886.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67886.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67886");

(com.rpl.specter.t_com$rpl$specter67886.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67886");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67886.
 */
com.rpl.specter.__GT_t_com$rpl$specter67886 = (function com$rpl$specter$__GT_t_com$rpl$specter67886(meta67887){
return (new com.rpl.specter.t_com$rpl$specter67886(meta67887));
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
com.rpl.specter.ALL = (new com.rpl.specter.t_com$rpl$specter67886(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67891 = (function (meta67892){
this.meta67892 = meta67892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67893,meta67892__$1){
var self__ = this;
var _67893__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67891(meta67892__$1));
}));

(com.rpl.specter.t_com$rpl$specter67891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67893){
var self__ = this;
var _67893__$1 = this;
return self__.meta67892;
}));

(com.rpl.specter.t_com$rpl$specter67891.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67891.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter67891.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter67891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67892","meta67892",-182614768,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67891.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67891.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67891");

(com.rpl.specter.t_com$rpl$specter67891.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67891");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67891.
 */
com.rpl.specter.__GT_t_com$rpl$specter67891 = (function com$rpl$specter$__GT_t_com$rpl$specter67891(meta67892){
return (new com.rpl.specter.t_com$rpl$specter67891(meta67892));
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
com.rpl.specter.ALL_WITH_META = (new com.rpl.specter.t_com$rpl$specter67891(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67895 = (function (meta67896){
this.meta67896 = meta67896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67897,meta67896__$1){
var self__ = this;
var _67897__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67895(meta67896__$1));
}));

(com.rpl.specter.t_com$rpl$specter67895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67897){
var self__ = this;
var _67897__$1 = this;
return self__.meta67896;
}));

(com.rpl.specter.t_com$rpl$specter67895.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67895.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter67895.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter67895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67896","meta67896",-1839293692,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67895.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67895.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67895");

(com.rpl.specter.t_com$rpl$specter67895.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67895");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67895.
 */
com.rpl.specter.__GT_t_com$rpl$specter67895 = (function com$rpl$specter$__GT_t_com$rpl$specter67895(meta67896){
return (new com.rpl.specter.t_com$rpl$specter67895(meta67896));
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
com.rpl.specter.MAP_VALS = (new com.rpl.specter.t_com$rpl$specter67895(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67898 = (function (meta67899){
this.meta67899 = meta67899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67900,meta67899__$1){
var self__ = this;
var _67900__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67898(meta67899__$1));
}));

(com.rpl.specter.t_com$rpl$specter67898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67900){
var self__ = this;
var _67900__$1 = this;
return self__.meta67899;
}));

(com.rpl.specter.t_com$rpl$specter67898.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67898.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter67898.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter67898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67899","meta67899",-189948270,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67898.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67898.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67898");

(com.rpl.specter.t_com$rpl$specter67898.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67898");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67898.
 */
com.rpl.specter.__GT_t_com$rpl$specter67898 = (function com$rpl$specter$__GT_t_com$rpl$specter67898(meta67899){
return (new com.rpl.specter.t_com$rpl$specter67898(meta67899));
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
com.rpl.specter.MAP_KEYS = (new com.rpl.specter.t_com$rpl$specter67898(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67902 = (function (meta67903){
this.meta67903 = meta67903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67904,meta67903__$1){
var self__ = this;
var _67904__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67902(meta67903__$1));
}));

(com.rpl.specter.t_com$rpl$specter67902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67904){
var self__ = this;
var _67904__$1 = this;
return self__.meta67903;
}));

(com.rpl.specter.t_com$rpl$specter67902.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67902.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__67905 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,structure);
var G__67906 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__67905,G__67906) : next_fn__19097__auto__.call(null, G__67905,G__67906));
}));

(com.rpl.specter.t_com$rpl$specter67902.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__67907 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,structure);
var G__67908 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__67907,G__67908) : next_fn__19097__auto__.call(null, G__67907,G__67908));
}));

(com.rpl.specter.t_com$rpl$specter67902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67903","meta67903",-1372786410,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67902.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67902.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67902");

(com.rpl.specter.t_com$rpl$specter67902.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67902");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67902.
 */
com.rpl.specter.__GT_t_com$rpl$specter67902 = (function com$rpl$specter$__GT_t_com$rpl$specter67902(meta67903){
return (new com.rpl.specter.t_com$rpl$specter67902(meta67903));
});


com.rpl.specter.VAL = (new com.rpl.specter.t_com$rpl$specter67902(null));
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
com.rpl.specter.t_com$rpl$specter67914 = (function (start_index_fn,end_index_fn,meta67915){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta67915 = meta67915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67916,meta67915__$1){
var self__ = this;
var _67916__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67914(self__.start_index_fn,self__.end_index_fn,meta67915__$1));
}));

(com.rpl.specter.t_com$rpl$specter67914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67916){
var self__ = this;
var _67916__$1 = this;
return self__.meta67915;
}));

(com.rpl.specter.t_com$rpl$specter67914.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67914.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null, structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter67914.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null, structure));
var G__67917 = structure;
var G__67918 = s;
var G__67919 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__67920 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__67917,G__67918,G__67919,G__67920) : com.rpl.specter.navs.srange_transform.call(null, G__67917,G__67918,G__67919,G__67920));
}));

(com.rpl.specter.t_com$rpl$specter67914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta67915","meta67915",142229091,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67914.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67914.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67914");

(com.rpl.specter.t_com$rpl$specter67914.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67914");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67914.
 */
com.rpl.specter.__GT_t_com$rpl$specter67914 = (function com$rpl$specter$__GT_t_com$rpl$specter67914(start_index_fn,end_index_fn,meta67915){
return (new com.rpl.specter.t_com$rpl$specter67914(start_index_fn,end_index_fn,meta67915));
});




com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null, structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null, structure));
var G__67910 = structure;
var G__67911 = s;
var G__67912 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__67913 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__67910,G__67911,G__67912,G__67913) : com.rpl.specter.navs.srange_transform.call(null, G__67910,G__67911,G__67912,G__67913));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
return (new com.rpl.specter.t_com$rpl$specter67914(start_index_fn,end_index_fn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67921 = (function (start,end,meta67922){
this.start = start;
this.end = end;
this.meta67922 = meta67922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67923,meta67922__$1){
var self__ = this;
var _67923__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67921(self__.start,self__.end,meta67922__$1));
}));

(com.rpl.specter.t_com$rpl$specter67921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67923){
var self__ = this;
var _67923__$1 = this;
return self__.meta67922;
}));

(com.rpl.specter.t_com$rpl$specter67921.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67921.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter67921.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null, structure,self__.start,self__.end,next_fn));
}));

(com.rpl.specter.t_com$rpl$specter67921.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta67922","meta67922",-1001943442,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67921.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67921.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67921");

(com.rpl.specter.t_com$rpl$specter67921.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67921");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67921.
 */
com.rpl.specter.__GT_t_com$rpl$specter67921 = (function com$rpl$specter$__GT_t_com$rpl$specter67921(start,end,meta67922){
return (new com.rpl.specter.t_com$rpl$specter67921(start,end,meta67922));
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
return (new com.rpl.specter.t_com$rpl$specter67921(start,end,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67929 = (function (pred,meta67930){
this.pred = pred;
this.meta67930 = meta67930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67931,meta67930__$1){
var self__ = this;
var _67931__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67929(self__.pred,meta67930__$1));
}));

(com.rpl.specter.t_com$rpl$specter67929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67931){
var self__ = this;
var _67931__$1 = this;
return self__.meta67930;
}));

(com.rpl.specter.t_com$rpl$specter67929.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67929.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14598__auto__,p__67932){
var vec__67933 = p__67932;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67933,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67933,(1),null);
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

(com.rpl.specter.t_com$rpl$specter67929.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter67929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta67930","meta67930",445201192,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67929.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67929.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67929");

(com.rpl.specter.t_com$rpl$specter67929.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67929");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67929.
 */
com.rpl.specter.__GT_t_com$rpl$specter67929 = (function com$rpl$specter$__GT_t_com$rpl$specter67929(pred,meta67930){
return (new com.rpl.specter.t_com$rpl$specter67929(pred,meta67930));
});




com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14598__auto__,p__67925){
var vec__67926 = p__67925;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67926,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67926,(1),null);
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
return (new com.rpl.specter.t_com$rpl$specter67929(pred,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67939 = (function (meta67940){
this.meta67940 = meta67940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67941,meta67940__$1){
var self__ = this;
var _67941__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67939(meta67940__$1));
}));

(com.rpl.specter.t_com$rpl$specter67939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67941){
var self__ = this;
var _67941__$1 = this;
return self__.meta67940;
}));

(com.rpl.specter.t_com$rpl$specter67939.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67939.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter67939.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter67939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67940","meta67940",1128472490,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67939.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67939.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67939");

(com.rpl.specter.t_com$rpl$specter67939.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67939");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67939.
 */
com.rpl.specter.__GT_t_com$rpl$specter67939 = (function com$rpl$specter$__GT_t_com$rpl$specter67939(meta67940){
return (new com.rpl.specter.t_com$rpl$specter67939(meta67940));
});




com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__67937 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__67937) : next_fn.call(null, G__67937));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null, ""))),structure].join('');
} else {
var to_prepend = (function (){var G__67938 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__67938) : next_fn.call(null, G__67938));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (new com.rpl.specter.t_com$rpl$specter67939(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67944 = (function (meta67945){
this.meta67945 = meta67945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67946,meta67945__$1){
var self__ = this;
var _67946__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67944(meta67945__$1));
}));

(com.rpl.specter.t_com$rpl$specter67944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67946){
var self__ = this;
var _67946__$1 = this;
return self__.meta67945;
}));

(com.rpl.specter.t_com$rpl$specter67944.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67944.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter67944.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter67944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67945","meta67945",-159616113,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67944.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67944.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67944");

(com.rpl.specter.t_com$rpl$specter67944.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67944");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67944.
 */
com.rpl.specter.__GT_t_com$rpl$specter67944 = (function com$rpl$specter$__GT_t_com$rpl$specter67944(meta67945){
return (new com.rpl.specter.t_com$rpl$specter67944(meta67945));
});




com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__67942 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__67942) : next_fn.call(null, G__67942));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null, "")))].join('');
} else {
var to_append = (function (){var G__67943 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__67943) : next_fn.call(null, G__67943));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (new com.rpl.specter.t_com$rpl$specter67944(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67948 = (function (meta67949){
this.meta67949 = meta67949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67950,meta67949__$1){
var self__ = this;
var _67950__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67948(meta67949__$1));
}));

(com.rpl.specter.t_com$rpl$specter67948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67950){
var self__ = this;
var _67950__$1 = this;
return self__.meta67949;
}));

(com.rpl.specter.t_com$rpl$specter67948.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67948.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter67948.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter67948.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67949","meta67949",426932830,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67948.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67948.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67948");

(com.rpl.specter.t_com$rpl$specter67948.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67948");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67948.
 */
com.rpl.specter.__GT_t_com$rpl$specter67948 = (function com$rpl$specter$__GT_t_com$rpl$specter67948(meta67949){
return (new com.rpl.specter.t_com$rpl$specter67948(meta67949));
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
com.rpl.specter.NONE_ELEM = (new com.rpl.specter.t_com$rpl$specter67948(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67951 = (function (meta67952){
this.meta67952 = meta67952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67953,meta67952__$1){
var self__ = this;
var _67953__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67951(meta67952__$1));
}));

(com.rpl.specter.t_com$rpl$specter67951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67953){
var self__ = this;
var _67953__$1 = this;
return self__.meta67952;
}));

(com.rpl.specter.t_com$rpl$specter67951.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67951.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter67951.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter67951.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67952","meta67952",595618974,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67951.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67951.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67951");

(com.rpl.specter.t_com$rpl$specter67951.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67951");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67951.
 */
com.rpl.specter.__GT_t_com$rpl$specter67951 = (function com$rpl$specter$__GT_t_com$rpl$specter67951(meta67952){
return (new com.rpl.specter.t_com$rpl$specter67951(meta67952));
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
com.rpl.specter.BEFORE_ELEM = (new com.rpl.specter.t_com$rpl$specter67951(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67955 = (function (meta67956){
this.meta67956 = meta67956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67957,meta67956__$1){
var self__ = this;
var _67957__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67955(meta67956__$1));
}));

(com.rpl.specter.t_com$rpl$specter67955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67957){
var self__ = this;
var _67957__$1 = this;
return self__.meta67956;
}));

(com.rpl.specter.t_com$rpl$specter67955.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67955.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter67955.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter67955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67956","meta67956",-157172295,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67955.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67955.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67955");

(com.rpl.specter.t_com$rpl$specter67955.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67955");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67955.
 */
com.rpl.specter.__GT_t_com$rpl$specter67955 = (function com$rpl$specter$__GT_t_com$rpl$specter67955(meta67956){
return (new com.rpl.specter.t_com$rpl$specter67955(meta67956));
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
com.rpl.specter.AFTER_ELEM = (new com.rpl.specter.t_com$rpl$specter67955(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67959 = (function (aset,meta67960){
this.aset = aset;
this.meta67960 = meta67960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67961,meta67960__$1){
var self__ = this;
var _67961__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67959(self__.aset,meta67960__$1));
}));

(com.rpl.specter.t_com$rpl$specter67959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67961){
var self__ = this;
var _67961__$1 = this;
return self__.meta67960;
}));

(com.rpl.specter.t_com$rpl$specter67959.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67959.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
}));

(com.rpl.specter.t_com$rpl$specter67959.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
}));

(com.rpl.specter.t_com$rpl$specter67959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta67960","meta67960",-1648234486,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67959.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67959.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67959");

(com.rpl.specter.t_com$rpl$specter67959.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67959");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67959.
 */
com.rpl.specter.__GT_t_com$rpl$specter67959 = (function com$rpl$specter$__GT_t_com$rpl$specter67959(aset,meta67960){
return (new com.rpl.specter.t_com$rpl$specter67959(aset,meta67960));
});




com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__67958 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__67958) : next_fn.call(null, G__67958));
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
return (new com.rpl.specter.t_com$rpl$specter67959(aset,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67964 = (function (m_keys,meta67965){
this.m_keys = m_keys;
this.meta67965 = meta67965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67966,meta67965__$1){
var self__ = this;
var _67966__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67964(self__.m_keys,meta67965__$1));
}));

(com.rpl.specter.t_com$rpl$specter67964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67966){
var self__ = this;
var _67966__$1 = this;
return self__.meta67965;
}));

(com.rpl.specter.t_com$rpl$specter67964.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67964.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
}));

(com.rpl.specter.t_com$rpl$specter67964.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
}));

(com.rpl.specter.t_com$rpl$specter67964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta67965","meta67965",757636143,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67964.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67964.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67964");

(com.rpl.specter.t_com$rpl$specter67964.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67964");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67964.
 */
com.rpl.specter.__GT_t_com$rpl$specter67964 = (function com$rpl$specter$__GT_t_com$rpl$specter67964(m_keys,meta67965){
return (new com.rpl.specter.t_com$rpl$specter67964(m_keys,meta67965));
});




com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__67963 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__67963) : next_fn.call(null, G__67963));
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
return (new com.rpl.specter.t_com$rpl$specter67964(m_keys,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67968 = (function (path,late,meta67969){
this.path = path;
this.late = late;
this.meta67969 = meta67969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67970,meta67969__$1){
var self__ = this;
var _67970__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67968(self__.path,self__.late,meta67969__$1));
}));

(com.rpl.specter.t_com$rpl$specter67968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67970){
var self__ = this;
var _67970__$1 = this;
return self__.meta67969;
}));

(com.rpl.specter.t_com$rpl$specter67968.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67968.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null, self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter67968.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null, self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(transformed));
var G__67971 = self__.late;
var G__67972 = (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});
var G__67973 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__67971,G__67972,G__67973) : com.rpl.specter.compiled_transform.call(null, G__67971,G__67972,G__67973));
}));

(com.rpl.specter.t_com$rpl$specter67968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta67969","meta67969",100504417,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67968.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67968.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67968");

(com.rpl.specter.t_com$rpl$specter67968.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67968");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67968.
 */
com.rpl.specter.__GT_t_com$rpl$specter67968 = (function com$rpl$specter$__GT_t_com$rpl$specter67968(path,late,meta67969){
return (new com.rpl.specter.t_com$rpl$specter67968(path,late,meta67969));
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
var G__68252__delegate = function (path){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter67968(path,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
};
var G__68252 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__68253__i = 0, G__68253__a = new Array(arguments.length -  0);
while (G__68253__i < G__68253__a.length) {G__68253__a[G__68253__i] = arguments[G__68253__i + 0]; ++G__68253__i;}
  path = new cljs.core.IndexedSeq(G__68253__a,0,null);
} 
return G__68252__delegate.call(this,path);};
G__68252.cljs$lang$maxFixedArity = 0;
G__68252.cljs$lang$applyTo = (function (arglist__68254){
var path = cljs.core.seq(arglist__68254);
return G__68252__delegate(path);
});
G__68252.cljs$core$IFn$_invoke$arity$variadic = G__68252__delegate;
return G__68252;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67975 = (function (key,meta67976){
this.key = key;
this.meta67976 = meta67976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67977,meta67976__$1){
var self__ = this;
var _67977__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67975(self__.key,meta67976__$1));
}));

(com.rpl.specter.t_com$rpl$specter67975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67977){
var self__ = this;
var _67977__$1 = this;
return self__.meta67976;
}));

(com.rpl.specter.t_com$rpl$specter67975.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67975.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null, vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter67975.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

(com.rpl.specter.t_com$rpl$specter67975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta67976","meta67976",-1241532498,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67975.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67975.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67975");

(com.rpl.specter.t_com$rpl$specter67975.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67975");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67975.
 */
com.rpl.specter.__GT_t_com$rpl$specter67975 = (function com$rpl$specter$__GT_t_com$rpl$specter67975(key,meta67976){
return (new com.rpl.specter.t_com$rpl$specter67975(key,meta67976));
});


/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
return (new com.rpl.specter.t_com$rpl$specter67975(key,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67978 = (function (elem,meta67979){
this.elem = elem;
this.meta67979 = meta67979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67980,meta67979__$1){
var self__ = this;
var _67980__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67978(self__.elem,meta67979__$1));
}));

(com.rpl.specter.t_com$rpl$specter67978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67980){
var self__ = this;
var _67980__$1 = this;
return self__.meta67979;
}));

(com.rpl.specter.t_com$rpl$specter67978.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67978.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null, vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter67978.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

(com.rpl.specter.t_com$rpl$specter67978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta67979","meta67979",2028258369,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67978.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67978.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67978");

(com.rpl.specter.t_com$rpl$specter67978.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67978");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67978.
 */
com.rpl.specter.__GT_t_com$rpl$specter67978 = (function com$rpl$specter$__GT_t_com$rpl$specter67978(elem,meta67979){
return (new com.rpl.specter.t_com$rpl$specter67978(elem,meta67979));
});


/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
return (new com.rpl.specter.t_com$rpl$specter67978(elem,null));
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
com.rpl.specter.t_com$rpl$specter67982 = (function (index,meta67983){
this.index = index;
this.meta67983 = meta67983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67984,meta67983__$1){
var self__ = this;
var _67984__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67982(self__.index,meta67983__$1));
}));

(com.rpl.specter.t_com$rpl$specter67982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67984){
var self__ = this;
var _67984__$1 = this;
return self__.meta67983;
}));

(com.rpl.specter.t_com$rpl$specter67982.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67982.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter67982.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null, vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.navs.insert_before_idx(structure,self__.index,v);
}
}));

(com.rpl.specter.t_com$rpl$specter67982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta67983","meta67983",1063258431,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67982.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67982.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67982");

(com.rpl.specter.t_com$rpl$specter67982.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67982");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67982.
 */
com.rpl.specter.__GT_t_com$rpl$specter67982 = (function com$rpl$specter$__GT_t_com$rpl$specter67982(index,meta67983){
return (new com.rpl.specter.t_com$rpl$specter67982(index,meta67983));
});


/**
 * Navigates to the empty space between the index and the prior index. For select
 *        navigates to NONE, and transforms to non-NONE insert at that position.
 */
com.rpl.specter.before_index = com.rpl.specter.impl.direct_nav_obj((function (index){
return (new com.rpl.specter.t_com$rpl$specter67982(index,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter67985 = (function (i,meta67986){
this.i = i;
this.meta67986 = meta67986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter67985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67987,meta67986__$1){
var self__ = this;
var _67987__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter67985(self__.i,meta67986__$1));
}));

(com.rpl.specter.t_com$rpl$specter67985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67987){
var self__ = this;
var _67987__$1 = this;
return self__.meta67986;
}));

(com.rpl.specter.t_com$rpl$specter67985.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter67985.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null, vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter67985.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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
var G__68258 = (j - (1));
var G__68259 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__68258;
s = G__68259;
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
var G__68260 = (j + (1));
var G__68261 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__68260;
s = G__68261;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache67989;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info67990 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"com/rpl/specter.cljc",15,1,1006,1009,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache67989 = info67990;

return info67990;
})():info__19105__auto__);
var precompiled67991 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__67992 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled67991.cljs$core$IFn$_invoke$arity$1 ? precompiled67991.cljs$core$IFn$_invoke$arity$1(G__67992) : precompiled67991.call(null, G__67992));
} else {
return precompiled67991;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache67993;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info67994 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,1001,1003,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache67993 = info67994;

return info67994;
})():info__19105__auto__);
var precompiled67995 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__67996 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled67995.cljs$core$IFn$_invoke$arity$1 ? precompiled67995.cljs$core$IFn$_invoke$arity$1(G__67996) : precompiled67995.call(null, G__67996));
} else {
return precompiled67995;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter67985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta67986","meta67986",693811094,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter67985.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter67985.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter67985");

(com.rpl.specter.t_com$rpl$specter67985.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter67985");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter67985.
 */
com.rpl.specter.__GT_t_com$rpl$specter67985 = (function com$rpl$specter$__GT_t_com$rpl$specter67985(i,meta67986){
return (new com.rpl.specter.t_com$rpl$specter67985(i,meta67986));
});


/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
return (new com.rpl.specter.t_com$rpl$specter67985(i,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68018 = (function (start,meta68019){
this.start = start;
this.meta68019 = meta68019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68020,meta68019__$1){
var self__ = this;
var _68020__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68018(self__.start,meta68019__$1));
}));

(com.rpl.specter.t_com$rpl$specter68018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68020){
var self__ = this;
var _68020__$1 = this;
return self__.meta68019;
}));

(com.rpl.specter.t_com$rpl$specter68018.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68018.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter68018.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__68021 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68021,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68021,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache68024;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info68025 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,717,720,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__67998_SHARP_){
return (p1__67998_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__67998#","p1__67998#",-1656976132,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__67998#","p1__67998#",-1656976132,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__67999_SHARP_){
return (p1__67999_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__67999#","p1__67999#",-493846737,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__67999#","p1__67999#",-493846737,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__67998#","p1__67998#",-1656976132,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__67998#","p1__67998#",-1656976132,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__67999#","p1__67999#",-493846737,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__67999#","p1__67999#",-493846737,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__67998#","p1__67998#",-1656976132,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__67998#","p1__67998#",-1656976132,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__67999#","p1__67999#",-493846737,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__67999#","p1__67999#",-493846737,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache68024 = info68025;

return info68025;
})():info__19105__auto__);
var precompiled68026 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__68027 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__67998_SHARP_){
return (p1__67998_SHARP_ >= (curri + (1)));
}),(function (p1__67999_SHARP_){
return (p1__67999_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__67998_SHARP_){
return (p1__67998_SHARP_ >= (curri + (1)));
}),(function (p1__67999_SHARP_){
return (p1__67999_SHARP_ <= newi);
})], null);
return (precompiled68026.cljs$core$IFn$_invoke$arity$1 ? precompiled68026.cljs$core$IFn$_invoke$arity$1(G__68027) : precompiled68026.call(null, G__68027));
} else {
return precompiled68026;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache68028;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info68029 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,1020,1023,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache68028 = info68029;

return info68029;
})():info__19105__auto__);
var precompiled68030 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__68032 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled68030.cljs$core$IFn$_invoke$arity$1 ? precompiled68030.cljs$core$IFn$_invoke$arity$1(G__68032) : precompiled68030.call(null, G__68032));
} else {
return precompiled68030;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache68033;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info68034 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,1001,1003,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache68033 = info68034;

return info68034;
})():info__19105__auto__);
var precompiled68035 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__68036 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled68035.cljs$core$IFn$_invoke$arity$1 ? precompiled68035.cljs$core$IFn$_invoke$arity$1(G__68036) : precompiled68035.call(null, G__68036));
} else {
return precompiled68035;
}
})(),newe,s));
}),structure,structure);
}));

(com.rpl.specter.t_com$rpl$specter68018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta68019","meta68019",-1977510457,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68018.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68018.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68018");

(com.rpl.specter.t_com$rpl$specter68018.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68018");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68018.
 */
com.rpl.specter.__GT_t_com$rpl$specter68018 = (function com$rpl$specter$__GT_t_com$rpl$specter68018(start,meta68019){
return (new com.rpl.specter.t_com$rpl$specter68018(start,meta68019));
});




com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14598__auto__,e){
var ret__14599__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__68000 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68000) : next_fn.call(null, G__68000));
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
var vec__68001 = (function (){var G__68004 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68004) : next_fn.call(null, G__68004));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68001,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68001,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache68005;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info68006 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,717,720,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__67998_SHARP_){
return (p1__67998_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__67998#","p1__67998#",-1656976132,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__67998#","p1__67998#",-1656976132,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__67999_SHARP_){
return (p1__67999_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__67999#","p1__67999#",-493846737,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__67999#","p1__67999#",-493846737,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__67998#","p1__67998#",-1656976132,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__67998#","p1__67998#",-1656976132,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__67999#","p1__67999#",-493846737,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__67999#","p1__67999#",-493846737,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__67998#","p1__67998#",-1656976132,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__67998#","p1__67998#",-1656976132,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__67999#","p1__67999#",-493846737,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__67999#","p1__67999#",-493846737,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache68005 = info68006;

return info68006;
})():info__19105__auto__);
var precompiled68007 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__68008 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__67998_SHARP_){
return (p1__67998_SHARP_ >= (curri + (1)));
}),(function (p1__67999_SHARP_){
return (p1__67999_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__67998_SHARP_){
return (p1__67998_SHARP_ >= (curri + (1)));
}),(function (p1__67999_SHARP_){
return (p1__67999_SHARP_ <= newi);
})], null);
return (precompiled68007.cljs$core$IFn$_invoke$arity$1 ? precompiled68007.cljs$core$IFn$_invoke$arity$1(G__68008) : precompiled68007.call(null, G__68008));
} else {
return precompiled68007;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache68009;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info68010 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,1020,1023,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache68009 = info68010;

return info68010;
})():info__19105__auto__);
var precompiled68011 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__68012 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled68011.cljs$core$IFn$_invoke$arity$1 ? precompiled68011.cljs$core$IFn$_invoke$arity$1(G__68012) : precompiled68011.call(null, G__68012));
} else {
return precompiled68011;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19105__auto__ = com.rpl.specter.pathcache68013;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info68014 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,1001,1003,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache68013 = info68014;

return info68014;
})():info__19105__auto__);
var precompiled68015 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__68016 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled68015.cljs$core$IFn$_invoke$arity$1 ? precompiled68015.cljs$core$IFn$_invoke$arity$1(G__68016) : precompiled68015.call(null, G__68016));
} else {
return precompiled68015;
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
return (new com.rpl.specter.t_com$rpl$specter68018(start,null));
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
com.rpl.specter.t_com$rpl$specter68037 = (function (afn,meta68038){
this.afn = afn;
this.meta68038 = meta68038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68039,meta68038__$1){
var self__ = this;
var _68039__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68037(self__.afn,meta68038__$1));
}));

(com.rpl.specter.t_com$rpl$specter68037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68039){
var self__ = this;
var _68039__$1 = this;
return self__.meta68038;
}));

(com.rpl.specter.t_com$rpl$specter68037.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68037.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__68040 = vals;
var G__68041 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null, structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__68040,G__68041) : next_fn.call(null, G__68040,G__68041));
}));

(com.rpl.specter.t_com$rpl$specter68037.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__68042 = vals;
var G__68043 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null, structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__68042,G__68043) : next_fn.call(null, G__68042,G__68043));
}));

(com.rpl.specter.t_com$rpl$specter68037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta68038","meta68038",1609833361,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68037.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68037.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68037");

(com.rpl.specter.t_com$rpl$specter68037.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68037");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68037.
 */
com.rpl.specter.__GT_t_com$rpl$specter68037 = (function com$rpl$specter$__GT_t_com$rpl$specter68037(afn,meta68038){
return (new com.rpl.specter.t_com$rpl$specter68037(afn,meta68038));
});


/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter68037(afn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68047 = (function (parse_fn,unparse_fn,meta68048){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta68048 = meta68048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68049,meta68048__$1){
var self__ = this;
var _68049__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68047(self__.parse_fn,self__.unparse_fn,meta68048__$1));
}));

(com.rpl.specter.t_com$rpl$specter68047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68049){
var self__ = this;
var _68049__$1 = this;
return self__.meta68048;
}));

(com.rpl.specter.t_com$rpl$specter68047.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68047.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null, structure)));
}));

(com.rpl.specter.t_com$rpl$specter68047.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
var G__68051 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null, structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__68051) : self__.unparse_fn.call(null, G__68051));
}));

(com.rpl.specter.t_com$rpl$specter68047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta68048","meta68048",-2045529365,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68047.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68047.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68047");

(com.rpl.specter.t_com$rpl$specter68047.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68047");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68047.
 */
com.rpl.specter.__GT_t_com$rpl$specter68047 = (function com$rpl$specter$__GT_t_com$rpl$specter68047(parse_fn,unparse_fn,meta68048){
return (new com.rpl.specter.t_com$rpl$specter68047(parse_fn,unparse_fn,meta68048));
});




com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__68044 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null, structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68044) : next_fn.call(null, G__68044));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__68045 = (function (){var G__68046 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null, structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68046) : next_fn.call(null, G__68046));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__68045) : unparse_fn.call(null, G__68045));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
return (new com.rpl.specter.t_com$rpl$specter68047(parse_fn,unparse_fn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68053 = (function (meta68054){
this.meta68054 = meta68054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68055,meta68054__$1){
var self__ = this;
var _68055__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68053(meta68054__$1));
}));

(com.rpl.specter.t_com$rpl$specter68053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68055){
var self__ = this;
var _68055__$1 = this;
return self__.meta68054;
}));

(com.rpl.specter.t_com$rpl$specter68053.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68053.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.deref(structure));
}));

(com.rpl.specter.t_com$rpl$specter68053.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
}));

(com.rpl.specter.t_com$rpl$specter68053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68054","meta68054",968926317,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68053.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68053.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68053");

(com.rpl.specter.t_com$rpl$specter68053.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68053");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68053.
 */
com.rpl.specter.__GT_t_com$rpl$specter68053 = (function com$rpl$specter$__GT_t_com$rpl$specter68053(meta68054){
return (new com.rpl.specter.t_com$rpl$specter68053(meta68054));
});




com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__68052 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68052) : next_fn.call(null, G__68052));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (new com.rpl.specter.t_com$rpl$specter68053(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68057 = (function (re,meta68058){
this.re = re;
this.meta68058 = meta68058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68059,meta68058__$1){
var self__ = this;
var _68059__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68057(self__.re,meta68058__$1));
}));

(com.rpl.specter.t_com$rpl$specter68057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68059){
var self__ = this;
var _68059__$1 = this;
return self__.meta68058;
}));

(com.rpl.specter.t_com$rpl$specter68057.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68057.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter68057.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return clojure.string.replace(structure,self__.re,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter68057.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta68058","meta68058",-1795487287,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68057.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68057.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68057");

(com.rpl.specter.t_com$rpl$specter68057.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68057");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68057.
 */
com.rpl.specter.__GT_t_com$rpl$specter68057 = (function com$rpl$specter$__GT_t_com$rpl$specter68057(re,meta68058){
return (new com.rpl.specter.t_com$rpl$specter68057(re,meta68058));
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
return (new com.rpl.specter.t_com$rpl$specter68057(re,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68062 = (function (path,temp__5802__auto__,late,meta68063){
this.path = path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late = late;
this.meta68063 = meta68063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68064,meta68063__$1){
var self__ = this;
var _68064__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68062(self__.path,self__.temp__5802__auto__,self__.late,meta68063__$1));
}));

(com.rpl.specter.t_com$rpl$specter68062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68064){
var self__ = this;
var _68064__$1 = this;
return self__.meta68063;
}));

(com.rpl.specter.t_com$rpl$specter68062.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68062.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__68060_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__68060_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter68062.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__68061_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__68061_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter68062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta68063","meta68063",-1057202106,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68062.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68062.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68062");

(com.rpl.specter.t_com$rpl$specter68062.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68062");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68062.
 */
com.rpl.specter.__GT_t_com$rpl$specter68062 = (function com$rpl$specter$__GT_t_com$rpl$specter68062(path,temp__5802__auto__,late,meta68063){
return (new com.rpl.specter.t_com$rpl$specter68062(path,temp__5802__auto__,late,meta68063));
});


/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__68262__delegate = function (path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
return afn;
} else {
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter68062(path,temp__5802__auto__,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
}
};
var G__68262 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__68263__i = 0, G__68263__a = new Array(arguments.length -  0);
while (G__68263__i < G__68263__a.length) {G__68263__a[G__68263__i] = arguments[G__68263__i + 0]; ++G__68263__i;}
  path = new cljs.core.IndexedSeq(G__68263__a,0,null);
} 
return G__68262__delegate.call(this,path);};
G__68262.cljs$lang$maxFixedArity = 0;
G__68262.cljs$lang$applyTo = (function (arglist__68264){
var path = cljs.core.seq(arglist__68264);
return G__68262__delegate(path);
});
G__68262.cljs$core$IFn$_invoke$arity$variadic = G__68262__delegate;
return G__68262;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68068 = (function (path,temp__5802__auto__,late,meta68069){
this.path = path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late = late;
this.meta68069 = meta68069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68070,meta68069__$1){
var self__ = this;
var _68070__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68068(self__.path,self__.temp__5802__auto__,self__.late,meta68069__$1));
}));

(com.rpl.specter.t_com$rpl$specter68068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68070){
var self__ = this;
var _68070__$1 = this;
return self__.meta68069;
}));

(com.rpl.specter.t_com$rpl$specter68068.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68068.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__68066_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__68066_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter68068.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__68067_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__68067_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter68068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta68069","meta68069",-2125137240,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68068.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68068.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68068");

(com.rpl.specter.t_com$rpl$specter68068.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68068");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68068.
 */
com.rpl.specter.__GT_t_com$rpl$specter68068 = (function com$rpl$specter$__GT_t_com$rpl$specter68068(path,temp__5802__auto__,late,meta68069){
return (new com.rpl.specter.t_com$rpl$specter68068(path,temp__5802__auto__,late,meta68069));
});


com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__68265__delegate = function (path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null, s)));
});
} else {
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter68068(path,temp__5802__auto__,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
}
};
var G__68265 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__68266__i = 0, G__68266__a = new Array(arguments.length -  0);
while (G__68266__i < G__68266__a.length) {G__68266__a[G__68266__i] = arguments[G__68266__i + 0]; ++G__68266__i;}
  path = new cljs.core.IndexedSeq(G__68266__a,0,null);
} 
return G__68265__delegate.call(this,path);};
G__68265.cljs$lang$maxFixedArity = 0;
G__68265.cljs$lang$applyTo = (function (arglist__68267){
var path = cljs.core.seq(arglist__68267);
return G__68265__delegate(path);
});
G__68265.cljs$core$IFn$_invoke$arity$variadic = G__68265__delegate;
return G__68265;
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
var G__68268__delegate = function (path){
var G__68071 = com.rpl.specter.ALL;
var G__68072 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null, path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__68071,G__68072) : com.rpl.specter.subselect.call(null, G__68071,G__68072));
};
var G__68268 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__68269__i = 0, G__68269__a = new Array(arguments.length -  0);
while (G__68269__i < G__68269__a.length) {G__68269__a[G__68269__i] = arguments[G__68269__i + 0]; ++G__68269__i;}
  path = new cljs.core.IndexedSeq(G__68269__a,0,null);
} 
return G__68268__delegate.call(this,path);};
G__68268.cljs$lang$maxFixedArity = 0;
G__68268.cljs$lang$applyTo = (function (arglist__68270){
var path = cljs.core.seq(arglist__68270);
return G__68268__delegate(path);
});
G__68268.cljs$core$IFn$_invoke$arity$variadic = G__68268__delegate;
return G__68268;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68073 = (function (path,update_fn,late,late_fn,meta68074){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta68074 = meta68074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68075,meta68074__$1){
var self__ = this;
var _68075__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68073(self__.path,self__.update_fn,self__.late,self__.late_fn,meta68074__$1));
}));

(com.rpl.specter.t_com$rpl$specter68073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68075){
var self__ = this;
var _68075__$1 = this;
return self__.meta68074;
}));

(com.rpl.specter.t_com$rpl$specter68073.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68073.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null, self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter68073.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null, self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter68073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta68074","meta68074",-1206770607,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68073.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68073.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68073");

(com.rpl.specter.t_com$rpl$specter68073.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68073");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68073.
 */
com.rpl.specter.__GT_t_com$rpl$specter68073 = (function com$rpl$specter$__GT_t_com$rpl$specter68073(path,update_fn,late,late_fn,meta68074){
return (new com.rpl.specter.t_com$rpl$specter68073(path,update_fn,late,late_fn,meta68074));
});


/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
return (new com.rpl.specter.t_com$rpl$specter68073(path,update_fn,late,late_fn,null));
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
com.rpl.specter.t_com$rpl$specter68077 = (function (path,reduce_fn,late,late_fn,meta68078){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta68078 = meta68078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68079,meta68078__$1){
var self__ = this;
var _68079__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68077(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta68078__$1));
}));

(com.rpl.specter.t_com$rpl$specter68077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68079){
var self__ = this;
var _68079__$1 = this;
return self__.meta68078;
}));

(com.rpl.specter.t_com$rpl$specter68077.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68077.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null, self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter68077.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null, self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter68077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta68078","meta68078",-1905363278,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68077.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68077.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68077");

(com.rpl.specter.t_com$rpl$specter68077.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68077");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68077.
 */
com.rpl.specter.__GT_t_com$rpl$specter68077 = (function com$rpl$specter$__GT_t_com$rpl$specter68077(path,reduce_fn,late,late_fn,meta68078){
return (new com.rpl.specter.t_com$rpl$specter68077(path,reduce_fn,late,late_fn,meta68078));
});


/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
return (new com.rpl.specter.t_com$rpl$specter68077(path,reduce_fn,late,late_fn,null));
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
var G__68082 = (function (p1__68081_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__68081_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__68082) : com.rpl.specter.pred.call(null, G__68082));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__68084 = (function (p1__68083_SHARP_){
return (p1__68083_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__68084) : com.rpl.specter.pred.call(null, G__68084));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__68086 = (function (p1__68085_SHARP_){
return (p1__68085_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__68086) : com.rpl.specter.pred.call(null, G__68086));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__68088 = (function (p1__68087_SHARP_){
return (p1__68087_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__68088) : com.rpl.specter.pred.call(null, G__68088));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__68090 = (function (p1__68089_SHARP_){
return (p1__68089_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__68090) : com.rpl.specter.pred.call(null, G__68090));
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
com.rpl.specter.t_com$rpl$specter68094 = (function (v,meta68095){
this.v = v;
this.meta68095 = meta68095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68096,meta68095__$1){
var self__ = this;
var _68096__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68094(self__.v,meta68095__$1));
}));

(com.rpl.specter.t_com$rpl$specter68094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68096){
var self__ = this;
var _68096__$1 = this;
return self__.meta68095;
}));

(com.rpl.specter.t_com$rpl$specter68094.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68094.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter68094.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter68094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta68095","meta68095",543316095,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68094.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68094.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68094");

(com.rpl.specter.t_com$rpl$specter68094.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68094");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68094.
 */
com.rpl.specter.__GT_t_com$rpl$specter68094 = (function com$rpl$specter$__GT_t_com$rpl$specter68094(v,meta68095){
return (new com.rpl.specter.t_com$rpl$specter68094(v,meta68095));
});




com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
var G__68091 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68091) : next_fn.call(null, G__68091));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__68092 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68092) : next_fn.call(null, G__68092));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
return (new com.rpl.specter.t_com$rpl$specter68094(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__68097 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__68097) : com.rpl.specter.nil__GT_val.call(null, G__68097));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__68098 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__68098) : com.rpl.specter.nil__GT_val.call(null, G__68098));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__68099 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__68099) : com.rpl.specter.nil__GT_val.call(null, G__68099));
})();

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68102 = (function (meta68103){
this.meta68103 = meta68103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68104,meta68103__$1){
var self__ = this;
var _68104__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68102(meta68103__$1));
}));

(com.rpl.specter.t_com$rpl$specter68102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68104){
var self__ = this;
var _68104__$1 = this;
return self__.meta68103;
}));

(com.rpl.specter.t_com$rpl$specter68102.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68102.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.meta(structure));
}));

(com.rpl.specter.t_com$rpl$specter68102.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
}));

(com.rpl.specter.t_com$rpl$specter68102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68103","meta68103",1428769782,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68102.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68102.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68102");

(com.rpl.specter.t_com$rpl$specter68102.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68102");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68102.
 */
com.rpl.specter.__GT_t_com$rpl$specter68102 = (function com$rpl$specter$__GT_t_com$rpl$specter68102(meta68103){
return (new com.rpl.specter.t_com$rpl$specter68102(meta68103));
});




com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__68100 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68100) : next_fn.call(null, G__68100));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__68101 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68101) : next_fn.call(null, G__68101));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (new com.rpl.specter.t_com$rpl$specter68102(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68108 = (function (meta68109){
this.meta68109 = meta68109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68110,meta68109__$1){
var self__ = this;
var _68110__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68108(meta68109__$1));
}));

(com.rpl.specter.t_com$rpl$specter68108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68110){
var self__ = this;
var _68110__$1 = this;
return self__.meta68109;
}));

(com.rpl.specter.t_com$rpl$specter68108.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68108.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.name(structure));
}));

(com.rpl.specter.t_com$rpl$specter68108.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter68108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68109","meta68109",1707463695,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68108.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68108.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68108");

(com.rpl.specter.t_com$rpl$specter68108.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68108");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68108.
 */
com.rpl.specter.__GT_t_com$rpl$specter68108 = (function com$rpl$specter$__GT_t_com$rpl$specter68108(meta68109){
return (new com.rpl.specter.t_com$rpl$specter68108(meta68109));
});




com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__68106 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68106) : next_fn.call(null, G__68106));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__68107 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68107) : next_fn.call(null, G__68107));
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
com.rpl.specter.NAME = (new com.rpl.specter.t_com$rpl$specter68108(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68113 = (function (meta68114){
this.meta68114 = meta68114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68115,meta68114__$1){
var self__ = this;
var _68115__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68113(meta68114__$1));
}));

(com.rpl.specter.t_com$rpl$specter68113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68115){
var self__ = this;
var _68115__$1 = this;
return self__.meta68114;
}));

(com.rpl.specter.t_com$rpl$specter68113.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68113.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
var self__ = this;
var this__18412__auto____$1 = this;
var next_fn = (function (s__18415__auto__){
return (next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__18414__auto__.cljs$core$IFn$_invoke$arity$2(vals__18413__auto__,s__18415__auto__) : next_fn__18414__auto__.call(null, vals__18413__auto__,s__18415__auto__));
});
return next_fn(cljs.core.namespace(structure));
}));

(com.rpl.specter.t_com$rpl$specter68113.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18412__auto__,vals__18413__auto__,structure,next_fn__18414__auto__){
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

(com.rpl.specter.t_com$rpl$specter68113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68114","meta68114",1889485417,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68113.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68113.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68113");

(com.rpl.specter.t_com$rpl$specter68113.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68113");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68113.
 */
com.rpl.specter.__GT_t_com$rpl$specter68113 = (function com$rpl$specter$__GT_t_com$rpl$specter68113(meta68114){
return (new com.rpl.specter.t_com$rpl$specter68113(meta68114));
});




com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__68111 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68111) : next_fn.call(null, G__68111));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__68112 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__68112) : next_fn.call(null, G__68112));
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
com.rpl.specter.NAMESPACE = (new com.rpl.specter.t_com$rpl$specter68113(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68125 = (function (path,late,meta68126){
this.path = path;
this.late = late;
this.meta68126 = meta68126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68127,meta68126__$1){
var self__ = this;
var _68127__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68125(self__.path,self__.late,meta68126__$1));
}));

(com.rpl.specter.t_com$rpl$specter68125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68127){
var self__ = this;
var _68127__$1 = this;
return self__.meta68126;
}));

(com.rpl.specter.t_com$rpl$specter68125.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68125.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__68128 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null, self__.late,structure)));
var G__68129 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__68128,G__68129) : next_fn__19097__auto__.call(null, G__68128,G__68129));
}));

(com.rpl.specter.t_com$rpl$specter68125.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__68130 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null, self__.late,structure)));
var G__68131 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__68130,G__68131) : next_fn__19097__auto__.call(null, G__68130,G__68131));
}));

(com.rpl.specter.t_com$rpl$specter68125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta68126","meta68126",-1430319058,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68125.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68125.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68125");

(com.rpl.specter.t_com$rpl$specter68125.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68125");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68125.
 */
com.rpl.specter.__GT_t_com$rpl$specter68125 = (function com$rpl$specter$__GT_t_com$rpl$specter68125(path,late,meta68126){
return (new com.rpl.specter.t_com$rpl$specter68125(path,late,meta68126));
});


com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__68271__delegate = function (path){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter68125(path,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
};
var G__68271 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__68272__i = 0, G__68272__a = new Array(arguments.length -  0);
while (G__68272__i < G__68272__a.length) {G__68272__a[G__68272__i] = arguments[G__68272__i + 0]; ++G__68272__i;}
  path = new cljs.core.IndexedSeq(G__68272__a,0,null);
} 
return G__68271__delegate.call(this,path);};
G__68271.cljs$lang$maxFixedArity = 0;
G__68271.cljs$lang$applyTo = (function (arglist__68273){
var path = cljs.core.seq(arglist__68273);
return G__68271__delegate(path);
});
G__68271.cljs$core$IFn$_invoke$arity$variadic = G__68271__delegate;
return G__68271;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68132 = (function (path,late,meta68133){
this.path = path;
this.late = late;
this.meta68133 = meta68133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68134,meta68133__$1){
var self__ = this;
var _68134__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68132(self__.path,self__.late,meta68133__$1));
}));

(com.rpl.specter.t_com$rpl$specter68132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68134){
var self__ = this;
var _68134__$1 = this;
return self__.meta68133;
}));

(com.rpl.specter.t_com$rpl$specter68132.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68132.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__68135 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null, self__.late,structure)));
var G__68136 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__68135,G__68136) : next_fn__19097__auto__.call(null, G__68135,G__68136));
}));

(com.rpl.specter.t_com$rpl$specter68132.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__68137 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null, self__.late,structure)));
var G__68138 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__68137,G__68138) : next_fn__19097__auto__.call(null, G__68137,G__68138));
}));

(com.rpl.specter.t_com$rpl$specter68132.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta68133","meta68133",-2135828943,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68132.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68132.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68132");

(com.rpl.specter.t_com$rpl$specter68132.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68132");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68132.
 */
com.rpl.specter.__GT_t_com$rpl$specter68132 = (function com$rpl$specter$__GT_t_com$rpl$specter68132(path,late,meta68133){
return (new com.rpl.specter.t_com$rpl$specter68132(path,late,meta68133));
});


com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__68274__delegate = function (path){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter68132(path,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
};
var G__68274 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__68275__i = 0, G__68275__a = new Array(arguments.length -  0);
while (G__68275__i < G__68275__a.length) {G__68275__a[G__68275__i] = arguments[G__68275__i + 0]; ++G__68275__i;}
  path = new cljs.core.IndexedSeq(G__68275__a,0,null);
} 
return G__68274__delegate.call(this,path);};
G__68274.cljs$lang$maxFixedArity = 0;
G__68274.cljs$lang$applyTo = (function (arglist__68276){
var path = cljs.core.seq(arglist__68276);
return G__68274__delegate(path);
});
G__68274.cljs$core$IFn$_invoke$arity$variadic = G__68274__delegate;
return G__68274;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68139 = (function (val,meta68140){
this.val = val;
this.meta68140 = meta68140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68141,meta68140__$1){
var self__ = this;
var _68141__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68139(self__.val,meta68140__$1));
}));

(com.rpl.specter.t_com$rpl$specter68139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68141){
var self__ = this;
var _68141__$1 = this;
return self__.meta68140;
}));

(com.rpl.specter.t_com$rpl$specter68139.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68139.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__68142 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,self__.val);
var G__68143 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__68142,G__68143) : next_fn__19097__auto__.call(null, G__68142,G__68143));
}));

(com.rpl.specter.t_com$rpl$specter68139.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19095__auto__,vals__19096__auto__,structure,next_fn__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var G__68144 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19096__auto__,self__.val);
var G__68145 = structure;
return (next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19097__auto__.cljs$core$IFn$_invoke$arity$2(G__68144,G__68145) : next_fn__19097__auto__.call(null, G__68144,G__68145));
}));

(com.rpl.specter.t_com$rpl$specter68139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta68140","meta68140",1556478814,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68139.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68139.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68139");

(com.rpl.specter.t_com$rpl$specter68139.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68139");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68139.
 */
com.rpl.specter.__GT_t_com$rpl$specter68139 = (function com$rpl$specter$__GT_t_com$rpl$specter68139(val,meta68140){
return (new com.rpl.specter.t_com$rpl$specter68139(val,meta68140));
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
return (new com.rpl.specter.t_com$rpl$specter68139(val,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68146 = (function (path,late,meta68147){
this.path = path;
this.late = late;
this.meta68147 = meta68147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68148,meta68147__$1){
var self__ = this;
var _68148__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68146(self__.path,self__.late,meta68147__$1));
}));

(com.rpl.specter.t_com$rpl$specter68146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68148){
var self__ = this;
var _68148__$1 = this;
return self__.meta68147;
}));

(com.rpl.specter.t_com$rpl$specter68146.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68146.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null, vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter68146.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null, vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter68146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta68147","meta68147",-80288719,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68146.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68146.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68146");

(com.rpl.specter.t_com$rpl$specter68146.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68146");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68146.
 */
com.rpl.specter.__GT_t_com$rpl$specter68146 = (function com$rpl$specter$__GT_t_com$rpl$specter68146(path,late,meta68147){
return (new com.rpl.specter.t_com$rpl$specter68146(path,late,meta68147));
});


com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__68277__delegate = function (path){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter68146(path,late,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null, path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
};
var G__68277 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__68278__i = 0, G__68278__a = new Array(arguments.length -  0);
while (G__68278__i < G__68278__a.length) {G__68278__a[G__68278__i] = arguments[G__68278__i + 0]; ++G__68278__i;}
  path = new cljs.core.IndexedSeq(G__68278__a,0,null);
} 
return G__68277__delegate.call(this,path);};
G__68277.cljs$lang$maxFixedArity = 0;
G__68277.cljs$lang$applyTo = (function (arglist__68279){
var path = cljs.core.seq(arglist__68279);
return G__68277__delegate(path);
});
G__68277.cljs$core$IFn$_invoke$arity$variadic = G__68277__delegate;
return G__68277;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68151 = (function (meta68152){
this.meta68152 = meta68152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68153,meta68152__$1){
var self__ = this;
var _68153__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68151(meta68152__$1));
}));

(com.rpl.specter.t_com$rpl$specter68151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68153){
var self__ = this;
var _68153__$1 = this;
return self__.meta68152;
}));

(com.rpl.specter.t_com$rpl$specter68151.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68151.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__68154 = cljs.core.PersistentVector.EMPTY;
var G__68155 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__68154,G__68155) : next_fn.call(null, G__68154,G__68155));
}));

(com.rpl.specter.t_com$rpl$specter68151.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__68156 = cljs.core.PersistentVector.EMPTY;
var G__68157 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__68156,G__68157) : next_fn.call(null, G__68156,G__68157));
}));

(com.rpl.specter.t_com$rpl$specter68151.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68152","meta68152",-817347738,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68151.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68151.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68151");

(com.rpl.specter.t_com$rpl$specter68151.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68151");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68151.
 */
com.rpl.specter.__GT_t_com$rpl$specter68151 = (function com$rpl$specter$__GT_t_com$rpl$specter68151(meta68152){
return (new com.rpl.specter.t_com$rpl$specter68151(meta68152));
});


/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (new com.rpl.specter.t_com$rpl$specter68151(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68160 = (function (cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta68161){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5802__auto__ = temp__5802__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta68161 = meta68161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68162,meta68161__$1){
var self__ = this;
var _68162__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68160(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5802__auto__,self__.afn,self__.late_then,self__.late_else,meta68161__$1));
}));

(com.rpl.specter.t_com$rpl$specter68160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68162){
var self__ = this;
var _68162__$1 = this;
return self__.meta68161;
}));

(com.rpl.specter.t_com$rpl$specter68160.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68160.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter68160.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter68160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta68161","meta68161",659976680,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68160.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68160.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68160");

(com.rpl.specter.t_com$rpl$specter68160.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68160");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68160.
 */
com.rpl.specter.__GT_t_com$rpl$specter68160 = (function com$rpl$specter$__GT_t_com$rpl$specter68160(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta68161){
return (new com.rpl.specter.t_com$rpl$specter68160(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta68161));
});



/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68163 = (function (cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta68164){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta68164 = meta68164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68165,meta68164__$1){
var self__ = this;
var _68165__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68163(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5802__auto__,self__.late_cond,self__.late_then,self__.late_else,meta68164__$1));
}));

(com.rpl.specter.t_com$rpl$specter68163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68165){
var self__ = this;
var _68165__$1 = this;
return self__.meta68164;
}));

(com.rpl.specter.t_com$rpl$specter68163.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68163.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,(function (p1__68158_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__68158_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter68163.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,(function (p1__68159_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__68159_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter68163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta68164","meta68164",374235861,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68163.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68163.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68163");

(com.rpl.specter.t_com$rpl$specter68163.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68163");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68163.
 */
com.rpl.specter.__GT_t_com$rpl$specter68163 = (function com$rpl$specter$__GT_t_com$rpl$specter68163(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta68164){
return (new com.rpl.specter.t_com$rpl$specter68163(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta68164));
});


/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__68280 = null;
var G__68280__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null, cond_p,then_path,com.rpl.specter.STOP));
});
var G__68280__3 = (function (cond_p,then_path,else_path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_then,late_else){
return (new com.rpl.specter.t_com$rpl$specter68160(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null, then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null, else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
} else {
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_cond,late_then,late_else){
return (new com.rpl.specter.t_com$rpl$specter68163(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null, cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null, then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null, else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
}
});
G__68280 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__68280__2.call(this,cond_p,then_path);
case 3:
return G__68280__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__68280.cljs$core$IFn$_invoke$arity$2 = G__68280__2;
G__68280.cljs$core$IFn$_invoke$arity$3 = G__68280__3;
return G__68280;
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
var G__68281__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,p__68166){
var vec__68167 = p__68166;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68167,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68167,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null, tester,apath,p));
}),com.rpl.specter.STOP,pairs);
};
var G__68281 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__68282__i = 0, G__68282__a = new Array(arguments.length -  0);
while (G__68282__i < G__68282__a.length) {G__68282__a[G__68282__i] = arguments[G__68282__i + 0]; ++G__68282__i;}
  conds = new cljs.core.IndexedSeq(G__68282__a,0,null);
} 
return G__68281__delegate.call(this,conds);};
G__68281.cljs$lang$maxFixedArity = 0;
G__68281.cljs$lang$applyTo = (function (arglist__68283){
var conds = cljs.core.seq(arglist__68283);
return G__68281__delegate(conds);
});
G__68281.cljs$core$IFn$_invoke$arity$variadic = G__68281__delegate;
return G__68281;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter68170 = (function (path1,path2,late1,late2,meta68171){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta68171 = meta68171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter68170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68172,meta68171__$1){
var self__ = this;
var _68172__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter68170(self__.path1,self__.path2,self__.late1,self__.late2,meta68171__$1));
}));

(com.rpl.specter.t_com$rpl$specter68170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68172){
var self__ = this;
var _68172__$1 = this;
return self__.meta68171;
}));

(com.rpl.specter.t_com$rpl$specter68170.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter68170.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

(com.rpl.specter.t_com$rpl$specter68170.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter68170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta68171","meta68171",-222513396,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter68170.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter68170.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter68170");

(com.rpl.specter.t_com$rpl$specter68170.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"com.rpl.specter/t_com$rpl$specter68170");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter68170.
 */
com.rpl.specter.__GT_t_com$rpl$specter68170 = (function com$rpl$specter$__GT_t_com$rpl$specter68170(path1,path2,late1,late2,meta68171){
return (new com.rpl.specter.t_com$rpl$specter68170(path1,path2,late1,late2,meta68171));
});


/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__68284 = null;
var G__68284__0 = (function (){
return com.rpl.specter.STAY;
});
var G__68284__1 = (function (path){
return path;
});
var G__68284__2 = (function (path1,path2){
var builder__19098__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
return (new com.rpl.specter.t_com$rpl$specter68170(path1,path2,late1,late2,null));
}));
var curr_params__19099__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null, path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null, path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19099__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19098__auto__,curr_params__19099__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19098__auto__,curr_params__19099__auto__,null);
}
});
var G__68284__3 = (function() { 
var G__68285__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null, path1,path2)),paths);
};
var G__68285 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__68286__i = 0, G__68286__a = new Array(arguments.length -  2);
while (G__68286__i < G__68286__a.length) {G__68286__a[G__68286__i] = arguments[G__68286__i + 2]; ++G__68286__i;}
  paths = new cljs.core.IndexedSeq(G__68286__a,0,null);
} 
return G__68285__delegate.call(this,path1,path2,paths);};
G__68285.cljs$lang$maxFixedArity = 2;
G__68285.cljs$lang$applyTo = (function (arglist__68287){
var path1 = cljs.core.first(arglist__68287);
arglist__68287 = cljs.core.next(arglist__68287);
var path2 = cljs.core.first(arglist__68287);
var paths = cljs.core.rest(arglist__68287);
return G__68285__delegate(path1,path2,paths);
});
G__68285.cljs$core$IFn$_invoke$arity$variadic = G__68285__delegate;
return G__68285;
})()
;
G__68284 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__68284__0.call(this);
case 1:
return G__68284__1.call(this,path1);
case 2:
return G__68284__2.call(this,path1,path2);
default:
var G__68288 = null;
if (arguments.length > 2) {
var G__68289__i = 0, G__68289__a = new Array(arguments.length -  2);
while (G__68289__i < G__68289__a.length) {G__68289__a[G__68289__i] = arguments[G__68289__i + 2]; ++G__68289__i;}
G__68288 = new cljs.core.IndexedSeq(G__68289__a,0,null);
}
return G__68284__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__68288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__68284.cljs$lang$maxFixedArity = 2;
G__68284.cljs$lang$applyTo = G__68284__3.cljs$lang$applyTo;
G__68284.cljs$core$IFn$_invoke$arity$0 = G__68284__0;
G__68284.cljs$core$IFn$_invoke$arity$1 = G__68284__1;
G__68284.cljs$core$IFn$_invoke$arity$2 = G__68284__2;
G__68284.cljs$core$IFn$_invoke$arity$variadic = G__68284__3.cljs$core$IFn$_invoke$arity$variadic;
return G__68284;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__68290__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null, com.rpl.specter.STAY,path));
};
var G__68290 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__68291__i = 0, G__68291__a = new Array(arguments.length -  0);
while (G__68291__i < G__68291__a.length) {G__68291__a[G__68291__i] = arguments[G__68291__i + 0]; ++G__68291__i;}
  path = new cljs.core.IndexedSeq(G__68291__a,0,null);
} 
return G__68290__delegate.call(this,path);};
G__68290.cljs$lang$maxFixedArity = 0;
G__68290.cljs$lang$applyTo = (function (arglist__68292){
var path = cljs.core.seq(arglist__68292);
return G__68290__delegate(path);
});
G__68290.cljs$core$IFn$_invoke$arity$variadic = G__68290__delegate;
return G__68290;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__68293__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null, path,com.rpl.specter.STAY));
};
var G__68293 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__68294__i = 0, G__68294__a = new Array(arguments.length -  0);
while (G__68294__i < G__68294__a.length) {G__68294__a[G__68294__i] = arguments[G__68294__i + 0]; ++G__68294__i;}
  path = new cljs.core.IndexedSeq(G__68294__a,0,null);
} 
return G__68293__delegate.call(this,path);};
G__68293.cljs$lang$maxFixedArity = 0;
G__68293.cljs$lang$applyTo = (function (arglist__68295){
var path = cljs.core.seq(arglist__68295);
return G__68293__delegate(path);
});
G__68293.cljs$core$IFn$_invoke$arity$variadic = G__68293__delegate;
return G__68293;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__19105__auto__ = com.rpl.specter.pathcache68177;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info68178 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),1432,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1212,1216,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,682,684,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2181,2181,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,717,720,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache68177 = info68178;

return info68178;
})():info__19105__auto__);
var precompiled68179 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__68180 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled68179.cljs$core$IFn$_invoke$arity$1 ? precompiled68179.cljs$core$IFn$_invoke$arity$1(G__68180) : precompiled68179.call(null, G__68180));
} else {
return precompiled68179;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__19105__auto__ = com.rpl.specter.pathcache68181;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info68182 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),1432,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1212,1216,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,682,684,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2181,2181,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"com/rpl/specter.cljc",16,1,727,729,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache68181 = info68182;

return info68182;
})():info__19105__auto__);
var precompiled68183 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__68184 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled68183.cljs$core$IFn$_invoke$arity$1 ? precompiled68183.cljs$core$IFn$_invoke$arity$1(G__68184) : precompiled68183.call(null, G__68184));
} else {
return precompiled68183;
}
})());

return p;
}));
var empty__GT_NONE_68296 = (function (){var G__68185 = cljs.core.empty_QMARK_;
var G__68186 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__68185,G__68186) : com.rpl.specter.if_path.call(null, G__68185,G__68186));
})();
var compact_STAR__68297 = (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_68296) : com.rpl.specter.multi_path.call(null, nav,empty__GT_NONE_68296));
});
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__68298__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__68297,path);
};
var G__68298 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__68299__i = 0, G__68299__a = new Array(arguments.length -  0);
while (G__68299__i < G__68299__a.length) {G__68299__a[G__68299__i] = arguments[G__68299__i + 0]; ++G__68299__i;}
  path = new cljs.core.IndexedSeq(G__68299__a,0,null);
} 
return G__68298__delegate.call(this,path);};
G__68298.cljs$lang$maxFixedArity = 0;
G__68298.cljs$lang$applyTo = (function (arglist__68300){
var path = cljs.core.seq(arglist__68300);
return G__68298__delegate(path);
});
G__68298.cljs$core$IFn$_invoke$arity$variadic = G__68298__delegate;
return G__68298;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=com.rpl.specter.js.map
