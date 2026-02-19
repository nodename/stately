goog.provide('cljs.user');
cljs.user.show_db = (function cljs$user$show_db(){
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.db.app_db));
});
cljs.user.show_state_tree = (function cljs$user$show_state_tree(){
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.db.app_db),new cljs.core.Keyword(null,"tree","tree",-196312028)));
});
cljs.user.show_active_states = (function cljs$user$show_active_states(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.db.app_db),new cljs.core.Keyword(null,"active-states","active-states",-911704047))], 0));
});

//# sourceMappingURL=cljs.user.js.map
