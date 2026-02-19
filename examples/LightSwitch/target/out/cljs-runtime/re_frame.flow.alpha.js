goog.provide('re_frame.flow.alpha');
re_frame.flow.alpha.db_path_QMARK_ = cljs.core.vector_QMARK_;
re_frame.flow.alpha.flow_QMARK_ = cljs.core.map_QMARK_;
re_frame.flow.alpha.flow_LT___QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,new cljs.core.Keyword("re-frame.flow.alpha","flow<-","re-frame.flow.alpha/flow<-",1540916150));
re_frame.flow.alpha.flows = re_frame.interop.ratom(cljs.core.PersistentArrayMap.EMPTY);
re_frame.flow.alpha.flow_states = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
re_frame.flow.alpha.input_ids = (function re_frame$flow$alpha$input_ids(p__35541){
var map__35542 = p__35541;
var map__35542__$1 = cljs.core.__destructure_map(map__35542);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35542__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var live_inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35542__$1,new cljs.core.Keyword(null,"live-inputs","live-inputs",1350889395));
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(re_frame.flow.alpha.db_path_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__35534_SHARP_){
var or__5002__auto__ = new cljs.core.Keyword("re-frame.flow.alpha","flow<-","re-frame.flow.alpha/flow<-",1540916150).cljs$core$IFn$_invoke$arity$1(p1__35534_SHARP_);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return p1__35534_SHARP_;
}
}))),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(inputs),cljs.core.vals(live_inputs)))));
});
re_frame.flow.alpha.topsort = (function re_frame$flow$alpha$topsort(flows){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(flows,cljs.core.reverse(re_frame.utils.topsort_kahn(re_frame.utils.remove_orphans(re_frame.utils.map_vals(re_frame.flow.alpha.input_ids,flows)))));
});
re_frame.flow.alpha.topsort_STAR_ = re_frame.utils.memoize_one(re_frame.flow.alpha.topsort);
re_frame.flow.alpha.default$ = (function re_frame$flow$alpha$default(id){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"path","path",-188191168),((cljs.core.sequential_QMARK_(id))?cljs.core.vec(id):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)),new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.constantly(true),new cljs.core.Keyword(null,"live?","live?",-1539352230),cljs.core.constantly(true),new cljs.core.Keyword(null,"live-inputs","live-inputs",1350889395),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"cleanup","cleanup",1045776959),re_frame.utils.deep_dissoc], null);
});
re_frame.flow.alpha.stale_in_flows = (function re_frame$flow$alpha$stale_in_flows(flows,p__35575){
var map__35576 = p__35575;
var map__35576__$1 = cljs.core.__destructure_map(map__35576);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35576__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
return cljs.core.reduce_kv((function (m,k,p__35584){
var map__35585 = p__35584;
var map__35585__$1 = cljs.core.__destructure_map(map__35585);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35585__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var G__35586 = m;
if(cljs.core.contains_QMARK_(cljs.core.set(cljs.core.vals(inputs)),path)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35586,k,path);
} else {
return G__35586;
}
}),cljs.core.PersistentArrayMap.EMPTY,flows);
});
re_frame.flow.alpha.stale_out_flows = (function re_frame$flow$alpha$stale_out_flows(flows,p__35600){
var map__35601 = p__35600;
var map__35601__$1 = cljs.core.__destructure_map(map__35601);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35601__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.reduce_kv((function (m,k,p__35611){
var map__35612 = p__35611;
var map__35612__$1 = cljs.core.__destructure_map(map__35612);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35612__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var bad_inputs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([path]),cljs.core.val)),inputs);
var G__35618 = m;
if(cljs.core.seq(bad_inputs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35618,k,bad_inputs);
} else {
return G__35618;
}
}),cljs.core.PersistentArrayMap.EMPTY,flows);
});
re_frame.flow.alpha.validate_inputs = (function re_frame$flow$alpha$validate_inputs(p__35632){
var map__35633 = p__35632;
var map__35633__$1 = cljs.core.__destructure_map(map__35633);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35633__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var seq__35634 = cljs.core.seq(inputs);
var chunk__35636 = null;
var count__35637 = (0);
var i__35638 = (0);
while(true){
if((i__35638 < count__35637)){
var vec__35655 = chunk__35636.cljs$core$IIndexed$_nth$arity$2(null, i__35638);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35655,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35655,(1),null);
if(cljs.core.not(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.db_path_QMARK_,re_frame.flow.alpha.flow_LT___QMARK_)(input))){
throw (new Error("bad input"));


var G__35855 = seq__35634;
var G__35856 = chunk__35636;
var G__35857 = count__35637;
var G__35858 = (i__35638 + (1));
seq__35634 = G__35855;
chunk__35636 = G__35856;
count__35637 = G__35857;
i__35638 = G__35858;
continue;
} else {
var G__35860 = seq__35634;
var G__35861 = chunk__35636;
var G__35862 = count__35637;
var G__35863 = (i__35638 + (1));
seq__35634 = G__35860;
chunk__35636 = G__35861;
count__35637 = G__35862;
i__35638 = G__35863;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35634);
if(temp__5804__auto__){
var seq__35634__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35634__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35634__$1);
var G__35866 = cljs.core.chunk_rest(seq__35634__$1);
var G__35867 = c__5525__auto__;
var G__35868 = cljs.core.count(c__5525__auto__);
var G__35869 = (0);
seq__35634 = G__35866;
chunk__35636 = G__35867;
count__35637 = G__35868;
i__35638 = G__35869;
continue;
} else {
var vec__35661 = cljs.core.first(seq__35634__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35661,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35661,(1),null);
if(cljs.core.not(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.db_path_QMARK_,re_frame.flow.alpha.flow_LT___QMARK_)(input))){
throw (new Error("bad input"));


var G__35872 = cljs.core.next(seq__35634__$1);
var G__35873 = null;
var G__35874 = (0);
var G__35875 = (0);
seq__35634 = G__35872;
chunk__35636 = G__35873;
count__35637 = G__35874;
i__35638 = G__35875;
continue;
} else {
var G__35879 = cljs.core.next(seq__35634__$1);
var G__35880 = null;
var G__35881 = (0);
var G__35882 = (0);
seq__35634 = G__35879;
chunk__35636 = G__35880;
count__35637 = G__35881;
i__35638 = G__35882;
continue;
}
}
} else {
return null;
}
}
break;
}
});
re_frame.flow.alpha.warn_stale_dependencies = (function re_frame$flow$alpha$warn_stale_dependencies(flows,new_flow){
var ins = re_frame.flow.alpha.stale_in_flows(flows,new_flow);
var outs = re_frame.flow.alpha.stale_out_flows(flows,new_flow);
var warn_ins = (function (p__35670){
var vec__35672 = p__35670;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35672,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35672,(1),null);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["- Input",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"matches the output path of",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),".\n","  For an explicit dependency, change it to (re-frame/flow<-",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),")."].join(''),"\n"], null);
});
var warn_outs = (function (p__35676){
var vec__35677 = p__35676;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35677,(0),null);
var inputs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35677,(1),null);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__35680){
var vec__35683 = p__35680;
var input_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35683,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35683,(1),null);
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["- Output",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new_flow)),"matches the input",cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_id),"of the flow",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),".\n"].join(''),"  For an explicit dependency, change that input to","(re-frame/flow<-",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_flow)),")."].join(''),"\n"], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inputs], 0));
});
var warnings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(warn_ins,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ins], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(warn_outs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([outs], 0)));
if(cljs.core.seq(warnings)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(re_frame.loggers.console,new cljs.core.Keyword(null,"warn","warn",-436710552),"Warning: You called `reg-flow` with the flow",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_flow)),"but this created stale dependencies.\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Your flows may not evaluate in the correct order.\n",warnings], 0));
} else {
return null;
}
});
re_frame.flow.alpha.reg_flow = (function re_frame$flow$alpha$reg_flow(var_args){
var G__35697 = arguments.length;
switch (G__35697) {
case 2:
return re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$2 = (function (k,m){
return re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"id","id",-1388402092),k));
}));

(re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1 = (function (m){
re_frame.flow.alpha.validate_inputs(m);

re_frame.flow.alpha.warn_stale_dependencies(cljs.core.deref(re_frame.flow.alpha.flows),m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frame.flow.alpha.flow_states,cljs.core.update,new cljs.core.Keyword("re-frame.flow.alpha","registered","re-frame.flow.alpha/registered",1321658162),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m)], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.flow.alpha.flows,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m),cljs.core.with_meta(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_frame.flow.alpha.default$(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m)),m], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-frame.flow.alpha","ref","re-frame.flow.alpha/ref",854314016),reagent.ratom.make_reaction((function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.db.app_db),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(m));
}))], null)));
}));

(re_frame.flow.alpha.reg_flow.cljs$lang$maxFixedArity = 2);

re_frame.flow.alpha.clear_flow = (function re_frame$flow$alpha$clear_flow(var_args){
var G__35719 = arguments.length;
switch (G__35719) {
case 0:
return re_frame.flow.alpha.clear_flow.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.flow.alpha.clear_flow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.flow.alpha.clear_flow.cljs$core$IFn$_invoke$arity$0 = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.flows,cljs.core.empty);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frame.flow.alpha.flow_states,cljs.core.update,new cljs.core.Keyword("re-frame.flow.alpha","cleared","re-frame.flow.alpha/cleared",234911327),cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(re_frame.flow.alpha.flows)], 0));
}));

(re_frame.flow.alpha.clear_flow.cljs$core$IFn$_invoke$arity$1 = (function (id){
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.flow.alpha.flows),id);
if(cljs.core.truth_(temp__5804__auto__)){
var flow = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.flow.alpha.flows,cljs.core.dissoc,id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frame.flow.alpha.flow_states,cljs.core.update,new cljs.core.Keyword("re-frame.flow.alpha","cleared","re-frame.flow.alpha/cleared",234911327),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(flow),flow], 0));
} else {
return null;
}
}));

(re_frame.flow.alpha.clear_flow.cljs$lang$maxFixedArity = 1);

re_frame.flow.alpha.flow_LT__ = (function re_frame$flow$alpha$flow_LT__(id){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-frame.flow.alpha","flow<-","re-frame.flow.alpha/flow<-",1540916150),id], null);
});
re_frame.flow.alpha.flow_fx_ids = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clear-flow","clear-flow",2086400997),null,new cljs.core.Keyword(null,"reg-flow","reg-flow",-1365926178),null], null), null);
re_frame.flow.alpha.do_effect = (function re_frame$flow$alpha$do_effect(p__35724){
var vec__35727 = p__35724;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35727,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35727,(1),null);
var handler = (function (){var G__35731 = k;
var G__35731__$1 = (((G__35731 instanceof cljs.core.Keyword))?G__35731.fqn:null);
switch (G__35731__$1) {
case "reg-flow":
return re_frame.flow.alpha.reg_flow;

break;
case "clear-flow":
return re_frame.flow.alpha.clear_flow;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35731__$1)].join('')));

}
})();
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(v) : handler.call(null, v));
});
re_frame.flow.alpha.remove_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.flow_fx_ids,cljs.core.first));
re_frame.flow.alpha.dissoc_fx = (function re_frame$flow$alpha$dissoc_fx(p1__35737_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__35737_SHARP_,re_frame.flow.alpha.flow_fx_ids);
});
re_frame.flow.alpha.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-flow-fx","do-flow-fx",528807066),new cljs.core.Keyword(null,"after","after",594996914),(function (p__35743){
var map__35744 = p__35743;
var map__35744__$1 = cljs.core.__destructure_map(map__35744);
var ctx = map__35744__$1;
var map__35745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35744__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var map__35745__$1 = cljs.core.__destructure_map(map__35745);
var effects = map__35745__$1;
var fx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35745__$1,new cljs.core.Keyword(null,"fx","fx",-1237829572));
var flow_fx = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.select_keys(effects,re_frame.flow.alpha.flow_fx_ids),cljs.core.filterv(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.flow_fx_ids,cljs.core.first),fx));
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.do_effect,flow_fx));

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"fx","fx",-1237829572)], null),re_frame.flow.alpha.remove_fx),new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.flow.alpha.dissoc_fx);
})], null)], 0));
re_frame.flow.alpha.resolve_input = (function re_frame$flow$alpha$resolve_input(db,flows,input){
if(cljs.core.vector_QMARK_(input)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,input);
} else {
var G__35750 = input;
var G__35750__$1 = (((G__35750 == null))?null:new cljs.core.Keyword("re-frame.flow.alpha","flow<-","re-frame.flow.alpha/flow<-",1540916150).cljs$core$IFn$_invoke$arity$1(G__35750));
var G__35750__$2 = (((G__35750__$1 == null))?null:(flows.cljs$core$IFn$_invoke$arity$1 ? flows.cljs$core$IFn$_invoke$arity$1(G__35750__$1) : flows.call(null, G__35750__$1)));
var G__35750__$3 = (((G__35750__$2 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__35750__$2));
if((G__35750__$3 == null)){
return null;
} else {
return (re_frame.flow.alpha.resolve_input.cljs$core$IFn$_invoke$arity$3 ? re_frame.flow.alpha.resolve_input.cljs$core$IFn$_invoke$arity$3(db,flows,G__35750__$3) : re_frame.flow.alpha.resolve_input.call(null, db,flows,G__35750__$3));
}
}
});
re_frame.flow.alpha.resolve_inputs = (function re_frame$flow$alpha$resolve_inputs(db,flows,inputs){
if(cljs.core.empty_QMARK_(inputs)){
return db;
} else {
return re_frame.utils.map_vals(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_frame.flow.alpha.resolve_input,db,flows),inputs);
}
});
re_frame.flow.alpha.run = (function re_frame$flow$alpha$run(ctx,p__35766){
var map__35767 = p__35766;
var map__35767__$1 = cljs.core.__destructure_map(map__35767);
var flow = map__35767__$1;
var live_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35767__$1,new cljs.core.Keyword(null,"live?","live?",-1539352230));
var cleanup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35767__$1,new cljs.core.Keyword(null,"cleanup","cleanup",1045776959));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35767__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cleared_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35767__$1,new cljs.core.Keyword("re-frame.flow.alpha","cleared?","re-frame.flow.alpha/cleared?",1524733548));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35767__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var flow_fx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35767__$1,new cljs.core.Keyword(null,"fx","fx",-1237829572));
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35767__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var live_inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35767__$1,new cljs.core.Keyword(null,"live-inputs","live-inputs",1350889395));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35767__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var new_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword("re-frame.flow.alpha","registered","re-frame.flow.alpha/registered",1321658162).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.flow.alpha.flow_states)),id);
var old_db = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"db","db",993250759));
var db = (function (){var or__5002__auto__ = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return old_db;
}
})();
var fx = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"fx","fx",-1237829572));
var id__GT_old_in = re_frame.flow.alpha.resolve_inputs(old_db,new cljs.core.Keyword(null,"flows","flows",-1369576628).cljs$core$IFn$_invoke$arity$1(ctx),inputs);
var id__GT_in = re_frame.flow.alpha.resolve_inputs(db,new cljs.core.Keyword(null,"flows","flows",-1369576628).cljs$core$IFn$_invoke$arity$1(ctx),inputs);
var dirty_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id__GT_in,id__GT_old_in);
var id__GT_old_live_in = re_frame.flow.alpha.resolve_inputs(old_db,new cljs.core.Keyword(null,"flows","flows",-1369576628).cljs$core$IFn$_invoke$arity$1(ctx),live_inputs);
var id__GT_live_in = re_frame.flow.alpha.resolve_inputs(db,new cljs.core.Keyword(null,"flows","flows",-1369576628).cljs$core$IFn$_invoke$arity$1(ctx),live_inputs);
var old_output = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_db,path);
var bardo = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((new_QMARK_)?new cljs.core.Keyword(null,"registered","registered",-388600037):(cljs.core.truth_((function (){var G__35776 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(id__GT_old_live_in,new cljs.core.Keyword(null,"db","db",993250759),old_db);
return (live_QMARK_.cljs$core$IFn$_invoke$arity$1 ? live_QMARK_.cljs$core$IFn$_invoke$arity$1(G__35776) : live_QMARK_.call(null, G__35776));
})())?new cljs.core.Keyword(null,"live","live",-1610148039):new cljs.core.Keyword(null,"dead","dead",-1946604091)
)),(cljs.core.truth_(cleared_QMARK_)?new cljs.core.Keyword(null,"cleared","cleared",-1267667336):(cljs.core.truth_((function (){var G__35777 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(id__GT_live_in,new cljs.core.Keyword(null,"db","db",993250759),db);
return (live_QMARK_.cljs$core$IFn$_invoke$arity$1 ? live_QMARK_.cljs$core$IFn$_invoke$arity$1(G__35777) : live_QMARK_.call(null, G__35777));
})())?new cljs.core.Keyword(null,"live","live",-1610148039):new cljs.core.Keyword(null,"dead","dead",-1946604091)
))], null);
var new_db = (function (){var G__35778 = bardo;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"live","live",-1610148039),new cljs.core.Keyword(null,"live","live",-1610148039)], null),G__35778)){
var G__35780 = db;
if(dirty_QMARK_){
return cljs.core.assoc_in(G__35780,path,(output.cljs$core$IFn$_invoke$arity$3 ? output.cljs$core$IFn$_invoke$arity$3(id__GT_in,id__GT_old_in,old_output) : output.call(null, id__GT_in,id__GT_old_in,old_output)));
} else {
return G__35780;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"live","live",-1610148039),new cljs.core.Keyword(null,"dead","dead",-1946604091)], null),G__35778)){
return (cleanup.cljs$core$IFn$_invoke$arity$2 ? cleanup.cljs$core$IFn$_invoke$arity$2(db,path) : cleanup.call(null, db,path));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dead","dead",-1946604091),new cljs.core.Keyword(null,"live","live",-1610148039)], null),G__35778)){
return cljs.core.assoc_in(db,path,(output.cljs$core$IFn$_invoke$arity$3 ? output.cljs$core$IFn$_invoke$arity$3(id__GT_in,id__GT_old_in,old_output) : output.call(null, id__GT_in,id__GT_old_in,old_output)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registered","registered",-388600037),new cljs.core.Keyword(null,"live","live",-1610148039)], null),G__35778)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frame.flow.alpha.flow_states,cljs.core.update,new cljs.core.Keyword("re-frame.flow.alpha","registered","re-frame.flow.alpha/registered",1321658162),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));

return cljs.core.assoc_in(db,path,(output.cljs$core$IFn$_invoke$arity$3 ? output.cljs$core$IFn$_invoke$arity$3(id__GT_in,id__GT_old_in,old_output) : output.call(null, id__GT_in,id__GT_old_in,old_output)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"live","live",-1610148039),new cljs.core.Keyword(null,"cleared","cleared",-1267667336)], null),G__35778)){
return (cleanup.cljs$core$IFn$_invoke$arity$2 ? cleanup.cljs$core$IFn$_invoke$arity$2(db,path) : cleanup.call(null, db,path));
} else {
return null;

}
}
}
}
}
})();
var new_fx = (cljs.core.truth_(flow_fx)?(function (){var G__35785 = bardo;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"live","live",-1610148039),new cljs.core.Keyword(null,"live","live",-1610148039)], null),G__35785)){
if(dirty_QMARK_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fx,(flow_fx.cljs$core$IFn$_invoke$arity$3 ? flow_fx.cljs$core$IFn$_invoke$arity$3(id__GT_in,id__GT_old_in,old_output) : flow_fx.call(null, id__GT_in,id__GT_old_in,old_output)));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dead","dead",-1946604091),new cljs.core.Keyword(null,"live","live",-1610148039)], null),G__35785)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fx,(flow_fx.cljs$core$IFn$_invoke$arity$3 ? flow_fx.cljs$core$IFn$_invoke$arity$3(id__GT_in,id__GT_old_in,old_output) : flow_fx.call(null, id__GT_in,id__GT_old_in,old_output)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registered","registered",-388600037),new cljs.core.Keyword(null,"live","live",-1610148039)], null),G__35785)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fx,(flow_fx.cljs$core$IFn$_invoke$arity$3 ? flow_fx.cljs$core$IFn$_invoke$arity$3(id__GT_in,id__GT_old_in,old_output) : flow_fx.call(null, id__GT_in,id__GT_old_in,old_output)));
} else {
return null;

}
}
}
})():null);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__35791 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__35792 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"flow-spec","flow-spec",-119790292),flow,new cljs.core.Keyword(null,"transition","transition",765692007),bardo,new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"new-db","new-db",1305352401),new_db,new cljs.core.Keyword(null,"id->in","id->in",-693826300),id__GT_in,new cljs.core.Keyword(null,"id->old-in","id->old-in",-504402935),id__GT_old_in,new cljs.core.Keyword(null,"id->live-in","id->live-in",998532194),id__GT_live_in,new cljs.core.Keyword(null,"id->old-live-in","id->old-live-in",992766074),id__GT_old_live_in], null)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__35792);

try{try{var G__35798 = ctx;
var G__35798__$1 = (cljs.core.truth_(new_db)?re_frame.interceptor.assoc_effect(G__35798,new cljs.core.Keyword(null,"db","db",993250759),new_db):G__35798);
if(cljs.core.truth_(new_fx)){
return re_frame.interceptor.assoc_effect(G__35798__$1,new cljs.core.Keyword(null,"fx","fx",-1237829572),new_fx);
} else {
return G__35798__$1;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12884__auto___35988 = re_frame.interop.now();
var duration__12885__auto___35989 = (end__12884__auto___35988 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12885__auto___35989,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12884__auto___35988);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__35791);
}} else {
var G__35801 = ctx;
var G__35801__$1 = (cljs.core.truth_(new_db)?re_frame.interceptor.assoc_effect(G__35801,new cljs.core.Keyword(null,"db","db",993250759),new_db):G__35801);
if(cljs.core.truth_(new_fx)){
return re_frame.interceptor.assoc_effect(G__35801__$1,new cljs.core.Keyword(null,"fx","fx",-1237829572),new_fx);
} else {
return G__35801__$1;
}
}
});
re_frame.flow.alpha.with_cleared = (function re_frame$flow$alpha$with_cleared(m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update_vals(new cljs.core.Keyword("re-frame.flow.alpha","cleared","re-frame.flow.alpha/cleared",234911327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.flow.alpha.flow_states)),(function (p1__35805_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35805_SHARP_,new cljs.core.Keyword("re-frame.flow.alpha","cleared?","re-frame.flow.alpha/cleared?",1524733548),true);
})),m], 0));
});
re_frame.flow.alpha.interceptor = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.Keyword(null,"after","after",594996914),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (ctx){
var all_flows = re_frame.flow.alpha.with_cleared(cljs.core.deref(re_frame.flow.alpha.flows));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.flow.alpha.flow_states,cljs.core.dissoc,new cljs.core.Keyword("re-frame.flow.alpha","cleared","re-frame.flow.alpha/cleared",234911327));

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frame.flow.alpha.run,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"flows","flows",-1369576628),all_flows),re_frame.flow.alpha.topsort_STAR_(all_flows));
}),(function (p__35821){
var map__35823 = p__35821;
var map__35823__$1 = cljs.core.__destructure_map(map__35823);
var ctx = map__35823__$1;
var map__35824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35823__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var map__35824__$1 = cljs.core.__destructure_map(map__35824);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35824__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("re-frame","pre-flow-db","re-frame/pre-flow-db",1774332137),db);
}))], null)], 0));

//# sourceMappingURL=re_frame.flow.alpha.js.map
