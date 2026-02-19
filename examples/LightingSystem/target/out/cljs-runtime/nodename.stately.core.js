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
var transform_fn = (function (p1__58726_SHARP_){
return nodename.stately.core.transform_kw(p1__58726_SHARP_,orig_ns,ns);
});
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__19105__auto__ = nodename.stately.core.pathcache58727;
var info__19105__auto____$1 = (((info__19105__auto__ == null))?(function (){var info58728 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(selector,new cljs.core.Symbol(null,"selector","selector",-1891906903,null))], null),"nodename.stately.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selector","selector",-1891906903,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selector","selector",-1891906903,null)], null));
nodename.stately.core.pathcache58727 = info58728;

return info58728;
})():info__19105__auto__);
var precompiled58729 = com.rpl.specter.impl.cached_path_info_precompiled(info__19105__auto____$1);
var dynamic_QMARK___19106__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19105__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19106__auto__)){
var G__58734 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector], null);
return (precompiled58729.cljs$core$IFn$_invoke$arity$1 ? precompiled58729.cljs$core$IFn$_invoke$arity$1(G__58734) : precompiled58729.call(null, G__58734));
} else {
return precompiled58729;
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
return (function (p1__58737_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,nodename.stately.tree.super$(p1__58737_SHARP_));
});})(active,leaves,s))
,cljs.core.rest(active));
var G__58754 = cljs.core.rest(active);
var G__58755 = (cljs.core.truth_(s_has_child_QMARK_)?leaves:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(leaves,s));
active = G__58754;
leaves = G__58755;
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
var G__58756 = nodename.stately.tree.super$(state__$1);
state__$1 = G__58756;
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
var bubble_states = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58739_SHARP_){
return (p1__58739_SHARP_ == null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58738_SHARP_){
return nodename.stately.core.bubble_up(p1__58738_SHARP_,trigger);
}),nodename.stately.core.leaves_of_active())));
var seq__58743 = cljs.core.seq(bubble_states);
var chunk__58744 = null;
var count__58745 = (0);
var i__58746 = (0);
while(true){
if((i__58746 < count__58745)){
var state = chunk__58744.cljs$core$IIndexed$_nth$arity$2(null, i__58746);
var new_event_v_58757 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,trigger], null)], null),cljs.core.rest(event_v)));
nodename.stately.comms.dispatch(new_event_v_58757);


var G__58758 = seq__58743;
var G__58759 = chunk__58744;
var G__58760 = count__58745;
var G__58761 = (i__58746 + (1));
seq__58743 = G__58758;
chunk__58744 = G__58759;
count__58745 = G__58760;
i__58746 = G__58761;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58743);
if(temp__5804__auto__){
var seq__58743__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58743__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__58743__$1);
var G__58762 = cljs.core.chunk_rest(seq__58743__$1);
var G__58763 = c__5525__auto__;
var G__58764 = cljs.core.count(c__5525__auto__);
var G__58765 = (0);
seq__58743 = G__58762;
chunk__58744 = G__58763;
count__58745 = G__58764;
i__58746 = G__58765;
continue;
} else {
var state = cljs.core.first(seq__58743__$1);
var new_event_v_58766 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,trigger], null)], null),cljs.core.rest(event_v)));
nodename.stately.comms.dispatch(new_event_v_58766);


var G__58767 = cljs.core.next(seq__58743__$1);
var G__58768 = null;
var G__58769 = (0);
var G__58770 = (0);
seq__58743 = G__58767;
chunk__58744 = G__58768;
count__58745 = G__58769;
i__58746 = G__58770;
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
var len__5726__auto___58771 = arguments.length;
var i__5727__auto___58772 = (0);
while(true){
if((i__5727__auto___58772 < len__5726__auto___58771)){
args__5732__auto__.push((arguments[i__5727__auto___58772]));

var G__58773 = (i__5727__auto___58772 + (1));
i__5727__auto___58772 = G__58773;
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
(nodename.stately.core.merge_no_clobber.cljs$lang$applyTo = (function (seq58750){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58750));
}));

nodename.stately.core.start_app = (function nodename$stately$core$start_app(middleware,state_machines,root_fsm_key){
nodename.stately.tree.set_state_tree_BANG_(state_machines,root_fsm_key);

var fsms_58774 = cljs.core.vals(state_machines);
var obtain_58775 = (function (prop){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(nodename.stately.core.merge_no_clobber,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58751_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__58751_SHARP_,prop);
}),fsms_58774));
});
var all_actions_58776 = obtain_58775(new cljs.core.Keyword(null,"actions","actions",-812656882));
var all_activities_58777 = obtain_58775(new cljs.core.Keyword(null,"activities","activities",1654844313));
var all_transitions_58778 = obtain_58775(new cljs.core.Keyword(null,"transitions","transitions",-2046216121));
var all_states_58779 = obtain_58775(new cljs.core.Keyword(null,"states","states",1389013542));
var all_start_states_58780 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58752_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__58752_SHARP_,new cljs.core.Keyword(null,"start-state","start-state",2056408421));
}),fsms_58774));
var chart_data_58781 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"all-actions","all-actions",1798816917),all_actions_58776,new cljs.core.Keyword(null,"all-activities","all-activities",48954553),all_activities_58777,new cljs.core.Keyword(null,"all-transitions","all-transitions",1714245168),all_transitions_58778,new cljs.core.Keyword(null,"all-states","all-states",1465146122),all_states_58779,new cljs.core.Keyword(null,"all-start-states","all-start-states",1423270630),all_start_states_58780], null);
nodename.stately.chart.register_statechart(middleware,chart_data_58781);

var app_start_state_58782 = nodename.stately.chart.get_start_state(root_fsm_key,all_start_states_58780);
var active_states_58783 = nodename.stately.chart.enter_state(app_start_state_58782,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,chart_data_58781);
nodename.stately.tree.set_active_states_BANG_(active_states_58783);

return nodename.stately.comms.run_queue();
});

//# sourceMappingURL=nodename.stately.core.js.map
