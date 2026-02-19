goog.provide('nodename.stately.tree');
nodename.stately.tree.state_tree = (function nodename$stately$tree$state_tree(state_machines,root_fsm_key){
var component_keys = (function (state_key,fsm){
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"states","states",1389013542).cljs$core$IFn$_invoke$arity$1(fsm),state_key);
return new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state);
});
var component_state_trees = (function (state_key,fsm){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__45853_SHARP_){
return (nodename.stately.tree.state_tree.cljs$core$IFn$_invoke$arity$2 ? nodename.stately.tree.state_tree.cljs$core$IFn$_invoke$arity$2(state_machines,p1__45853_SHARP_) : nodename.stately.tree.state_tree.call(null, state_machines,p1__45853_SHARP_));
}),component_keys(state_key,fsm));
});
var key_and_components = (function (state_key,fsm){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([state_key,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,component_state_trees(state_key,fsm))]);
});
var root_fsm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_machines,root_fsm_key);
var root_fsm_states = new cljs.core.Keyword(null,"states","states",1389013542).cljs$core$IFn$_invoke$arity$1(root_fsm);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([root_fsm_key,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45855_SHARP_){
return key_and_components(p1__45855_SHARP_,root_fsm);
}),cljs.core.keys(root_fsm_states)))]);
});
nodename.stately.tree.parent_links = (function nodename$stately$tree$parent_links(m,root_key){
var ks = cljs.core.keys(m);
var kvs = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(root_key));
var trees = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45861_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__45861_SHARP_);
}),ks);
var sub_kvs = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__45862_SHARP_,p2__45863_SHARP_){
return (nodename.stately.tree.parent_links.cljs$core$IFn$_invoke$arity$2 ? nodename.stately.tree.parent_links.cljs$core$IFn$_invoke$arity$2(p1__45862_SHARP_,p2__45863_SHARP_) : nodename.stately.tree.parent_links.call(null, p1__45862_SHARP_,p2__45863_SHARP_));
}),trees,ks);
return cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(kvs,sub_kvs));
});
nodename.stately.tree.parent_map = (function nodename$stately$tree$parent_map(tree){
var kvs = nodename.stately.tree.parent_links(tree,null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY,kvs);
});
nodename.stately.tree.set_state_tree_BANG_ = (function nodename$stately$tree$set_state_tree_BANG_(state_machines,root_fsm_key){
var tree = nodename.stately.tree.state_tree(state_machines,root_fsm_key);
var parents = nodename.stately.tree.parent_map(tree);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(nodename.stately.comms.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"tree","tree",-196312028),tree,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parents","parents",-2027538891),parents], 0));
});
nodename.stately.tree.tree = (function nodename$stately$tree$tree(){
return new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.comms.app_db));
});
/**
 * Given a state-key, return its superstate;
 *   given an fsm-key, return its super-fsm
 */
nodename.stately.tree.super$ = (function nodename$stately$tree$super(k){
var parent_map = new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.comms.app_db));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(parent_map,k);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(parent_map,p);
});
nodename.stately.tree.active_states = (function nodename$stately$tree$active_states(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodename.stately.comms.app_db),new cljs.core.Keyword(null,"active-states","active-states",-911704047));
});
nodename.stately.tree.set_active_states_BANG_ = (function nodename$stately$tree$set_active_states_BANG_(states){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodename.stately.comms.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"active-states","active-states",-911704047),states);
});
nodename.stately.tree.path_to_root = (function nodename$stately$tree$path_to_root(state_kw){
if((state_kw == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_kw], null),(function (){var G__45911 = nodename.stately.tree.super$(state_kw);
return (nodename.stately.tree.path_to_root.cljs$core$IFn$_invoke$arity$1 ? nodename.stately.tree.path_to_root.cljs$core$IFn$_invoke$arity$1(G__45911) : nodename.stately.tree.path_to_root.call(null, G__45911));
})());
}
});
/**
 * Return states-to-exit and states-to-enter,
 *   which constitute the path from from-state to to-state
 *   via least common ancestor
 */
nodename.stately.tree.lca_path = (function nodename$stately$tree$lca_path(from_state,to_state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"internal","internal",-854870097),to_state)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from_state,to_state)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_state], null)], null);
} else {
var exit_path = cljs.core.reverse(nodename.stately.tree.path_to_root(from_state));
var entrance_path = cljs.core.reverse(nodename.stately.tree.path_to_root(to_state));
var exit = exit_path;
var entrance = entrance_path;
while(true){
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.first(exit);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(exit),cljs.core.first(entrance));
} else {
return and__5000__auto__;
}
})())){
var G__45953 = cljs.core.rest(exit);
var G__45954 = cljs.core.rest(entrance);
exit = G__45953;
entrance = G__45954;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reverse(exit),entrance], null);
}
break;
}

}
}
});

//# sourceMappingURL=nodename.stately.tree.js.map
