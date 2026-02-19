goog.provide('nodename.stately.core');
nodename.stately.core.get_ns = (function nodename$stately$core$get_ns(fsm){
return cljs.core.namespace(cljs.core.first(cljs.core.keys(new cljs.core.Keyword(null,"states","states",1389013542).cljs$core$IFn$_invoke$arity$1(fsm))));
});
nodename.stately.core.transform_kw = (function nodename$stately$core$transform_kw(kw,orig_ns,ns){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(kw),orig_ns)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.name(kw));
} else {
return kw;
}
});
/**
 * Make a copy of fsm, replacing its namespace in every keyword with ns
 */
nodename.stately.core.clone_fsm = (function nodename$stately$core$clone_fsm(fsm,ns){
var selector = (com.rpl.specter.walker.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.walker.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_) : com.rpl.specter.walker.call(null, cljs.core.keyword_QMARK_));
var orig_ns = nodename.stately.core.get_ns(fsm);
var transform_fn = (function (p1__39836_SHARP_){
return nodename.stately.core.transform_kw(p1__39836_SHARP_,orig_ns,ns);
});
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__19105__auto__ = nodename.stately.core.pathcache39837;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info39838 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(selector,new cljs.core.Symbol(null,"selector","selector",-1891906903,null))], null),"nodename.stately.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selector","selector",-1891906903,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selector","selector",-1891906903,null)], null));
nodename.stately.core.pathcache39837 = info39838;

return info39838;
})():info__19105__auto__);
var precompiled39839 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__39840 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector], null);
return (precompiled39839.cljs$core$IFn$_invoke$arity$1 ? precompiled39839.cljs$core$IFn$_invoke$arity$1(G__39840) : precompiled39839.call(null, G__39840));
} else {
return precompiled39839;
}
})(),transform_fn,fsm);
});
/**
 * Currently active states that have no currently active child states
 */
nodename.stately.core.leaves_of_active = (function nodename$stately$core$leaves_of_active(){
var active = nodename.stately.tree.active_states();
var leaves = cljs.core.PersistentVector.EMPTY;
while(true){
var s = cljs.core.first(active);
if((s == null)){
return leaves;
} else {
var s_has_child_QMARK_ = cljs.core.some(((function (active,leaves,s){
return (function (p1__39841_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,nodename.stately.tree.super$(p1__39841_SHARP_));
});})(active,leaves,s))
,cljs.core.rest(active));
var G__39857 = cljs.core.rest(active);
var G__39858 = (cljs.core.truth_(s_has_child_QMARK_)?leaves:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(leaves,s));
active = G__39857;
leaves = G__39858;
continue;
}
break;
}
});
/**
 * Find first ancestor state for which the transition key [state trigger] is registered
 */
nodename.stately.core.bubble_up = (function nodename$stately$core$bubble_up(state,trigger){
var state__$1 = state;
while(true){
if(cljs.core.truth_((function (){var or__5002__auto__ = (state__$1 == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return nodename.stately.comms.lookup_handler(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,trigger], null));
}
})())){
return state__$1;
} else {
var G__39859 = nodename.stately.tree.super$(state__$1);
state__$1 = G__39859;
continue;
}
break;
}
});
/**
 * Bubble up the state hierarchy from the leaf active states
 *   to states that implement the transition, and dispatch
 */
nodename.stately.core.dispatch_transition = (function nodename$stately$core$dispatch_transition(event_v){
var trigger = cljs.core.first(event_v);
var bubble_states = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39849_SHARP_){
return (p1__39849_SHARP_ == null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39848_SHARP_){
return nodename.stately.core.bubble_up(p1__39848_SHARP_,trigger);
}),nodename.stately.core.leaves_of_active())));
var seq__39850 = cljs.core.seq(bubble_states);
var chunk__39851 = null;
var count__39852 = (0);
var i__39853 = (0);
while(true){
if((i__39853 < count__39852)){
var state = chunk__39851.cljs$core$IIndexed$_nth$arity$2(null, i__39853);
var new_event_v_39860 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,trigger], null)], null),cljs.core.rest(event_v)));
nodename.stately.comms.dispatch(new_event_v_39860);


var G__39861 = seq__39850;
var G__39862 = chunk__39851;
var G__39863 = count__39852;
var G__39864 = (i__39853 + (1));
seq__39850 = G__39861;
chunk__39851 = G__39862;
count__39852 = G__39863;
i__39853 = G__39864;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39850);
if(temp__5804__auto__){
var seq__39850__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39850__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__39850__$1);
var G__39865 = cljs.core.chunk_rest(seq__39850__$1);
var G__39866 = c__5525__auto__;
var G__39867 = cljs.core.count(c__5525__auto__);
var G__39868 = (0);
seq__39850 = G__39865;
chunk__39851 = G__39866;
count__39852 = G__39867;
i__39853 = G__39868;
continue;
} else {
var state = cljs.core.first(seq__39850__$1);
var new_event_v_39869 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,trigger], null)], null),cljs.core.rest(event_v)));
nodename.stately.comms.dispatch(new_event_v_39869);


var G__39870 = cljs.core.next(seq__39850__$1);
var G__39871 = null;
var G__39872 = (0);
var G__39873 = (0);
seq__39850 = G__39870;
chunk__39851 = G__39871;
count__39852 = G__39872;
i__39853 = G__39873;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Merge the maps but go nuts if a key is repeated
 */
nodename.stately.core.merge_no_clobber = (function nodename$stately$core$merge_no_clobber(var_args){
var args__5732__auto__ = [];
var len__5726__auto___39874 = arguments.length;
var i__5727__auto___39875 = (0);
while(true){
if((i__5727__auto___39875 < len__5726__auto___39874)){
args__5732__auto__.push((arguments[i__5727__auto___39875]));

var G__39876 = (i__5727__auto___39875 + (1));
i__5727__auto___39875 = G__39876;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.core.merge_no_clobber.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.core.merge_no_clobber.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var f = (function (val0,val1){
return nodename.stately.comms.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Clobbering a handler! ",val0," ",val1], 0));
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,f,maps);
}));

(nodename.stately.core.merge_no_clobber.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.core.merge_no_clobber.cljs$lang$applyTo = (function (seq39854){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39854));
}));

nodename.stately.core.start_app = (function nodename$stately$core$start_app(middleware,state_machines,root_fsm_key){
nodename.stately.tree.set_state_tree_BANG_(state_machines,root_fsm_key);

var fsms_39877 = cljs.core.vals(state_machines);
var obtain_39878 = (function (prop){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(nodename.stately.core.merge_no_clobber,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39855_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__39855_SHARP_,prop);
}),fsms_39877));
});
var all_actions_39879 = obtain_39878(new cljs.core.Keyword(null,"actions","actions",-812656882));
var all_activities_39880 = obtain_39878(new cljs.core.Keyword(null,"activities","activities",1654844313));
var all_transitions_39881 = obtain_39878(new cljs.core.Keyword(null,"transitions","transitions",-2046216121));
var all_states_39882 = obtain_39878(new cljs.core.Keyword(null,"states","states",1389013542));
var all_start_states_39883 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39856_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__39856_SHARP_,new cljs.core.Keyword(null,"start-state","start-state",2056408421));
}),fsms_39877));
var chart_data_39884 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"all-actions","all-actions",1798816917),all_actions_39879,new cljs.core.Keyword(null,"all-activities","all-activities",48954553),all_activities_39880,new cljs.core.Keyword(null,"all-transitions","all-transitions",1714245168),all_transitions_39881,new cljs.core.Keyword(null,"all-states","all-states",1465146122),all_states_39882,new cljs.core.Keyword(null,"all-start-states","all-start-states",1423270630),all_start_states_39883], null);
nodename.stately.chart.register_statechart(middleware,chart_data_39884);

var app_start_state_39885 = nodename.stately.chart.get_start_state(root_fsm_key,all_start_states_39883);
var active_states_39886 = nodename.stately.chart.enter_state(app_start_state_39885,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,chart_data_39884);
nodename.stately.tree.set_active_states_BANG_(active_states_39886);

return nodename.stately.comms.run_queue();
});

//# sourceMappingURL=nodename.stately.core.js.map
