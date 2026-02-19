goog.provide('nodename.stately.chart');
/**
 * return modified set of active states
 */
nodename.stately.chart.set_active = (function nodename$stately$chart$set_active(active_states,state_key,yesno){
var fexpr__46060 = (cljs.core.truth_(yesno)?cljs.core.conj:cljs.core.disj);
return (fexpr__46060.cljs$core$IFn$_invoke$arity$2 ? fexpr__46060.cljs$core$IFn$_invoke$arity$2(active_states,state_key) : fexpr__46060.call(null, active_states,state_key));
});
nodename.stately.chart.active_state = (function nodename$stately$chart$active_state(fsm,active_states){
if(cljs.core.truth_(fsm)){
return cljs.core.some((function (p1__46061_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p1__46061_SHARP_),cljs.core.name(fsm))){
return p1__46061_SHARP_;
} else {
return null;
}
}),active_states);
} else {
return null;
}
});
nodename.stately.chart.register_action_handlers = (function nodename$stately$chart$register_action_handlers(middleware,p__46076){
var map__46078 = p__46076;
var map__46078__$1 = cljs.core.__destructure_map(map__46078);
var chart_data = map__46078__$1;
var all_actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46078__$1,new cljs.core.Keyword(null,"all-actions","all-actions",1798816917));
var seq__46083 = cljs.core.seq(all_actions);
var chunk__46084 = null;
var count__46085 = (0);
var i__46086 = (0);
while(true){
if((i__46086 < count__46085)){
var vec__46121 = chunk__46084.cljs$core$IIndexed$_nth$arity$2(null, i__46086);
var trigger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46121,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46121,(1),null);
var handler_46642 = ((cljs.core.fn_QMARK_(action))?action:((function (seq__46083,chunk__46084,count__46085,i__46086,vec__46121,trigger,action,map__46078,map__46078__$1,chart_data,all_actions){
return (function (db,values){
var G__46129 = db;
var G__46130 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(action),values);
var fexpr__46128 = cljs.core.first(action);
return (fexpr__46128.cljs$core$IFn$_invoke$arity$2 ? fexpr__46128.cljs$core$IFn$_invoke$arity$2(G__46129,G__46130) : fexpr__46128.call(null, G__46129,G__46130));
});})(seq__46083,chunk__46084,count__46085,i__46086,vec__46121,trigger,action,map__46078,map__46078__$1,chart_data,all_actions))
);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger,middleware,handler_46642);


var G__46646 = seq__46083;
var G__46647 = chunk__46084;
var G__46648 = count__46085;
var G__46649 = (i__46086 + (1));
seq__46083 = G__46646;
chunk__46084 = G__46647;
count__46085 = G__46648;
i__46086 = G__46649;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46083);
if(temp__5804__auto__){
var seq__46083__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46083__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__46083__$1);
var G__46650 = cljs.core.chunk_rest(seq__46083__$1);
var G__46651 = c__5525__auto__;
var G__46652 = cljs.core.count(c__5525__auto__);
var G__46653 = (0);
seq__46083 = G__46650;
chunk__46084 = G__46651;
count__46085 = G__46652;
i__46086 = G__46653;
continue;
} else {
var vec__46141 = cljs.core.first(seq__46083__$1);
var trigger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46141,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46141,(1),null);
var handler_46654 = ((cljs.core.fn_QMARK_(action))?action:((function (seq__46083,chunk__46084,count__46085,i__46086,vec__46141,trigger,action,seq__46083__$1,temp__5804__auto__,map__46078,map__46078__$1,chart_data,all_actions){
return (function (db,values){
var G__46146 = db;
var G__46147 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(action),values);
var fexpr__46145 = cljs.core.first(action);
return (fexpr__46145.cljs$core$IFn$_invoke$arity$2 ? fexpr__46145.cljs$core$IFn$_invoke$arity$2(G__46146,G__46147) : fexpr__46145.call(null, G__46146,G__46147));
});})(seq__46083,chunk__46084,count__46085,i__46086,vec__46141,trigger,action,seq__46083__$1,temp__5804__auto__,map__46078,map__46078__$1,chart_data,all_actions))
);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger,middleware,handler_46654);


var G__46657 = cljs.core.next(seq__46083__$1);
var G__46658 = null;
var G__46659 = (0);
var G__46660 = (0);
seq__46083 = G__46657;
chunk__46084 = G__46658;
count__46085 = G__46659;
i__46086 = G__46660;
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
 * Create an action keyword for starting an activity
 */
nodename.stately.chart.start_action = (function nodename$stately$chart$start_action(activity){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(activity),[cljs.core.name(activity),".START-ACTION"].join(''));
});
/**
 * Create an action keyword for stopping an activity
 */
nodename.stately.chart.stop_action = (function nodename$stately$chart$stop_action(activity){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(activity),[cljs.core.name(activity),".STOP-ACTION"].join(''));
});
nodename.stately.chart.register_activity_handlers = (function nodename$stately$chart$register_activity_handlers(middleware,p__46166){
var map__46167 = p__46166;
var map__46167__$1 = cljs.core.__destructure_map(map__46167);
var chart_data = map__46167__$1;
var all_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46167__$1,new cljs.core.Keyword(null,"all-states","all-states",1465146122));
var all_activities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46167__$1,new cljs.core.Keyword(null,"all-activities","all-activities",48954553));
var seq__46168 = cljs.core.seq(all_states);
var chunk__46169 = null;
var count__46170 = (0);
var i__46171 = (0);
while(true){
if((i__46171 < count__46170)){
var vec__46284 = chunk__46169.cljs$core$IIndexed$_nth$arity$2(null, i__46171);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46284,(0),null);
var state_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46284,(1),null);
var map__46287_46662 = state_data;
var map__46287_46663__$1 = cljs.core.__destructure_map(map__46287_46662);
var activities_46664 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46287_46663__$1,new cljs.core.Keyword(null,"activities","activities",1654844313),cljs.core.PersistentVector.EMPTY);
var seq__46291_46665 = cljs.core.seq(activities_46664);
var chunk__46292_46666 = null;
var count__46293_46667 = (0);
var i__46294_46668 = (0);
while(true){
if((i__46294_46668 < count__46293_46667)){
var activity_46669 = chunk__46292_46666.cljs$core$IIndexed$_nth$arity$2(null, i__46294_46668);
var map__46332_46670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_activities,activity_46669);
var map__46332_46671__$1 = cljs.core.__destructure_map(map__46332_46670);
var start_46672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46332_46671__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop_46673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46332_46671__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(start_46672)){
var trigger_46674 = nodename.stately.chart.start_action(activity_46669);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_46674,middleware,((function (seq__46291_46665,chunk__46292_46666,count__46293_46667,i__46294_46668,seq__46168,chunk__46169,count__46170,i__46171,trigger_46674,map__46332_46670,map__46332_46671__$1,start_46672,stop_46673,activity_46669,map__46287_46662,map__46287_46663__$1,activities_46664,vec__46284,_,state_data,map__46167,map__46167__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(start_46672);

return db;
});})(seq__46291_46665,chunk__46292_46666,count__46293_46667,i__46294_46668,seq__46168,chunk__46169,count__46170,i__46171,trigger_46674,map__46332_46670,map__46332_46671__$1,start_46672,stop_46673,activity_46669,map__46287_46662,map__46287_46663__$1,activities_46664,vec__46284,_,state_data,map__46167,map__46167__$1,chart_data,all_states,all_activities))
);
} else {
}

if(cljs.core.truth_(stop_46673)){
var trigger_46675 = nodename.stately.chart.stop_action(activity_46669);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_46675,middleware,((function (seq__46291_46665,chunk__46292_46666,count__46293_46667,i__46294_46668,seq__46168,chunk__46169,count__46170,i__46171,trigger_46675,map__46332_46670,map__46332_46671__$1,start_46672,stop_46673,activity_46669,map__46287_46662,map__46287_46663__$1,activities_46664,vec__46284,_,state_data,map__46167,map__46167__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(stop_46673);

return db;
});})(seq__46291_46665,chunk__46292_46666,count__46293_46667,i__46294_46668,seq__46168,chunk__46169,count__46170,i__46171,trigger_46675,map__46332_46670,map__46332_46671__$1,start_46672,stop_46673,activity_46669,map__46287_46662,map__46287_46663__$1,activities_46664,vec__46284,_,state_data,map__46167,map__46167__$1,chart_data,all_states,all_activities))
);
} else {
}


var G__46677 = seq__46291_46665;
var G__46678 = chunk__46292_46666;
var G__46679 = count__46293_46667;
var G__46680 = (i__46294_46668 + (1));
seq__46291_46665 = G__46677;
chunk__46292_46666 = G__46678;
count__46293_46667 = G__46679;
i__46294_46668 = G__46680;
continue;
} else {
var temp__5804__auto___46681 = cljs.core.seq(seq__46291_46665);
if(temp__5804__auto___46681){
var seq__46291_46682__$1 = temp__5804__auto___46681;
if(cljs.core.chunked_seq_QMARK_(seq__46291_46682__$1)){
var c__5525__auto___46683 = cljs.core.chunk_first(seq__46291_46682__$1);
var G__46684 = cljs.core.chunk_rest(seq__46291_46682__$1);
var G__46685 = c__5525__auto___46683;
var G__46686 = cljs.core.count(c__5525__auto___46683);
var G__46687 = (0);
seq__46291_46665 = G__46684;
chunk__46292_46666 = G__46685;
count__46293_46667 = G__46686;
i__46294_46668 = G__46687;
continue;
} else {
var activity_46688 = cljs.core.first(seq__46291_46682__$1);
var map__46348_46689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_activities,activity_46688);
var map__46348_46690__$1 = cljs.core.__destructure_map(map__46348_46689);
var start_46691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46348_46690__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop_46692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46348_46690__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(start_46691)){
var trigger_46697 = nodename.stately.chart.start_action(activity_46688);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_46697,middleware,((function (seq__46291_46665,chunk__46292_46666,count__46293_46667,i__46294_46668,seq__46168,chunk__46169,count__46170,i__46171,trigger_46697,map__46348_46689,map__46348_46690__$1,start_46691,stop_46692,activity_46688,seq__46291_46682__$1,temp__5804__auto___46681,map__46287_46662,map__46287_46663__$1,activities_46664,vec__46284,_,state_data,map__46167,map__46167__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(start_46691);

return db;
});})(seq__46291_46665,chunk__46292_46666,count__46293_46667,i__46294_46668,seq__46168,chunk__46169,count__46170,i__46171,trigger_46697,map__46348_46689,map__46348_46690__$1,start_46691,stop_46692,activity_46688,seq__46291_46682__$1,temp__5804__auto___46681,map__46287_46662,map__46287_46663__$1,activities_46664,vec__46284,_,state_data,map__46167,map__46167__$1,chart_data,all_states,all_activities))
);
} else {
}

if(cljs.core.truth_(stop_46692)){
var trigger_46698 = nodename.stately.chart.stop_action(activity_46688);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_46698,middleware,((function (seq__46291_46665,chunk__46292_46666,count__46293_46667,i__46294_46668,seq__46168,chunk__46169,count__46170,i__46171,trigger_46698,map__46348_46689,map__46348_46690__$1,start_46691,stop_46692,activity_46688,seq__46291_46682__$1,temp__5804__auto___46681,map__46287_46662,map__46287_46663__$1,activities_46664,vec__46284,_,state_data,map__46167,map__46167__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(stop_46692);

return db;
});})(seq__46291_46665,chunk__46292_46666,count__46293_46667,i__46294_46668,seq__46168,chunk__46169,count__46170,i__46171,trigger_46698,map__46348_46689,map__46348_46690__$1,start_46691,stop_46692,activity_46688,seq__46291_46682__$1,temp__5804__auto___46681,map__46287_46662,map__46287_46663__$1,activities_46664,vec__46284,_,state_data,map__46167,map__46167__$1,chart_data,all_states,all_activities))
);
} else {
}


var G__46700 = cljs.core.next(seq__46291_46682__$1);
var G__46701 = null;
var G__46702 = (0);
var G__46703 = (0);
seq__46291_46665 = G__46700;
chunk__46292_46666 = G__46701;
count__46293_46667 = G__46702;
i__46294_46668 = G__46703;
continue;
}
} else {
}
}
break;
}


var G__46704 = seq__46168;
var G__46705 = chunk__46169;
var G__46706 = count__46170;
var G__46707 = (i__46171 + (1));
seq__46168 = G__46704;
chunk__46169 = G__46705;
count__46170 = G__46706;
i__46171 = G__46707;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46168);
if(temp__5804__auto__){
var seq__46168__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46168__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__46168__$1);
var G__46708 = cljs.core.chunk_rest(seq__46168__$1);
var G__46709 = c__5525__auto__;
var G__46710 = cljs.core.count(c__5525__auto__);
var G__46711 = (0);
seq__46168 = G__46708;
chunk__46169 = G__46709;
count__46170 = G__46710;
i__46171 = G__46711;
continue;
} else {
var vec__46361 = cljs.core.first(seq__46168__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46361,(0),null);
var state_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46361,(1),null);
var map__46365_46715 = state_data;
var map__46365_46716__$1 = cljs.core.__destructure_map(map__46365_46715);
var activities_46717 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46365_46716__$1,new cljs.core.Keyword(null,"activities","activities",1654844313),cljs.core.PersistentVector.EMPTY);
var seq__46366_46718 = cljs.core.seq(activities_46717);
var chunk__46367_46719 = null;
var count__46368_46720 = (0);
var i__46369_46721 = (0);
while(true){
if((i__46369_46721 < count__46368_46720)){
var activity_46722 = chunk__46367_46719.cljs$core$IIndexed$_nth$arity$2(null, i__46369_46721);
var map__46397_46723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_activities,activity_46722);
var map__46397_46724__$1 = cljs.core.__destructure_map(map__46397_46723);
var start_46725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46397_46724__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop_46726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46397_46724__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(start_46725)){
var trigger_46727 = nodename.stately.chart.start_action(activity_46722);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_46727,middleware,((function (seq__46366_46718,chunk__46367_46719,count__46368_46720,i__46369_46721,seq__46168,chunk__46169,count__46170,i__46171,trigger_46727,map__46397_46723,map__46397_46724__$1,start_46725,stop_46726,activity_46722,map__46365_46715,map__46365_46716__$1,activities_46717,vec__46361,_,state_data,seq__46168__$1,temp__5804__auto__,map__46167,map__46167__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(start_46725);

return db;
});})(seq__46366_46718,chunk__46367_46719,count__46368_46720,i__46369_46721,seq__46168,chunk__46169,count__46170,i__46171,trigger_46727,map__46397_46723,map__46397_46724__$1,start_46725,stop_46726,activity_46722,map__46365_46715,map__46365_46716__$1,activities_46717,vec__46361,_,state_data,seq__46168__$1,temp__5804__auto__,map__46167,map__46167__$1,chart_data,all_states,all_activities))
);
} else {
}

if(cljs.core.truth_(stop_46726)){
var trigger_46729 = nodename.stately.chart.stop_action(activity_46722);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_46729,middleware,((function (seq__46366_46718,chunk__46367_46719,count__46368_46720,i__46369_46721,seq__46168,chunk__46169,count__46170,i__46171,trigger_46729,map__46397_46723,map__46397_46724__$1,start_46725,stop_46726,activity_46722,map__46365_46715,map__46365_46716__$1,activities_46717,vec__46361,_,state_data,seq__46168__$1,temp__5804__auto__,map__46167,map__46167__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(stop_46726);

return db;
});})(seq__46366_46718,chunk__46367_46719,count__46368_46720,i__46369_46721,seq__46168,chunk__46169,count__46170,i__46171,trigger_46729,map__46397_46723,map__46397_46724__$1,start_46725,stop_46726,activity_46722,map__46365_46715,map__46365_46716__$1,activities_46717,vec__46361,_,state_data,seq__46168__$1,temp__5804__auto__,map__46167,map__46167__$1,chart_data,all_states,all_activities))
);
} else {
}


var G__46730 = seq__46366_46718;
var G__46731 = chunk__46367_46719;
var G__46732 = count__46368_46720;
var G__46733 = (i__46369_46721 + (1));
seq__46366_46718 = G__46730;
chunk__46367_46719 = G__46731;
count__46368_46720 = G__46732;
i__46369_46721 = G__46733;
continue;
} else {
var temp__5804__auto___46734__$1 = cljs.core.seq(seq__46366_46718);
if(temp__5804__auto___46734__$1){
var seq__46366_46735__$1 = temp__5804__auto___46734__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46366_46735__$1)){
var c__5525__auto___46736 = cljs.core.chunk_first(seq__46366_46735__$1);
var G__46738 = cljs.core.chunk_rest(seq__46366_46735__$1);
var G__46739 = c__5525__auto___46736;
var G__46740 = cljs.core.count(c__5525__auto___46736);
var G__46741 = (0);
seq__46366_46718 = G__46738;
chunk__46367_46719 = G__46739;
count__46368_46720 = G__46740;
i__46369_46721 = G__46741;
continue;
} else {
var activity_46742 = cljs.core.first(seq__46366_46735__$1);
var map__46415_46746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_activities,activity_46742);
var map__46415_46747__$1 = cljs.core.__destructure_map(map__46415_46746);
var start_46748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46415_46747__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop_46749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46415_46747__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(start_46748)){
var trigger_46750 = nodename.stately.chart.start_action(activity_46742);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_46750,middleware,((function (seq__46366_46718,chunk__46367_46719,count__46368_46720,i__46369_46721,seq__46168,chunk__46169,count__46170,i__46171,trigger_46750,map__46415_46746,map__46415_46747__$1,start_46748,stop_46749,activity_46742,seq__46366_46735__$1,temp__5804__auto___46734__$1,map__46365_46715,map__46365_46716__$1,activities_46717,vec__46361,_,state_data,seq__46168__$1,temp__5804__auto__,map__46167,map__46167__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(start_46748);

return db;
});})(seq__46366_46718,chunk__46367_46719,count__46368_46720,i__46369_46721,seq__46168,chunk__46169,count__46170,i__46171,trigger_46750,map__46415_46746,map__46415_46747__$1,start_46748,stop_46749,activity_46742,seq__46366_46735__$1,temp__5804__auto___46734__$1,map__46365_46715,map__46365_46716__$1,activities_46717,vec__46361,_,state_data,seq__46168__$1,temp__5804__auto__,map__46167,map__46167__$1,chart_data,all_states,all_activities))
);
} else {
}

if(cljs.core.truth_(stop_46749)){
var trigger_46751 = nodename.stately.chart.stop_action(activity_46742);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_46751,middleware,((function (seq__46366_46718,chunk__46367_46719,count__46368_46720,i__46369_46721,seq__46168,chunk__46169,count__46170,i__46171,trigger_46751,map__46415_46746,map__46415_46747__$1,start_46748,stop_46749,activity_46742,seq__46366_46735__$1,temp__5804__auto___46734__$1,map__46365_46715,map__46365_46716__$1,activities_46717,vec__46361,_,state_data,seq__46168__$1,temp__5804__auto__,map__46167,map__46167__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(stop_46749);

return db;
});})(seq__46366_46718,chunk__46367_46719,count__46368_46720,i__46369_46721,seq__46168,chunk__46169,count__46170,i__46171,trigger_46751,map__46415_46746,map__46415_46747__$1,start_46748,stop_46749,activity_46742,seq__46366_46735__$1,temp__5804__auto___46734__$1,map__46365_46715,map__46365_46716__$1,activities_46717,vec__46361,_,state_data,seq__46168__$1,temp__5804__auto__,map__46167,map__46167__$1,chart_data,all_states,all_activities))
);
} else {
}


var G__46752 = cljs.core.next(seq__46366_46735__$1);
var G__46753 = null;
var G__46754 = (0);
var G__46755 = (0);
seq__46366_46718 = G__46752;
chunk__46367_46719 = G__46753;
count__46368_46720 = G__46754;
i__46369_46721 = G__46755;
continue;
}
} else {
}
}
break;
}


var G__46756 = cljs.core.next(seq__46168__$1);
var G__46757 = null;
var G__46758 = (0);
var G__46759 = (0);
seq__46168 = G__46756;
chunk__46169 = G__46757;
count__46170 = G__46758;
i__46171 = G__46759;
continue;
}
} else {
return null;
}
}
break;
}
});
nodename.stately.chart.show_condition_not_met = (function nodename$stately$chart$show_condition_not_met(trigger,current_state,condition){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Transition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)," in state ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_state)," failed condition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(condition)].join('')], 0));
});
/**
 * all active subcomponents of a state, leaves first
 */
nodename.stately.chart.active_subcomponents = (function nodename$stately$chart$active_subcomponents(state,all_states,active_states){
var state_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_states,state);
var components = new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state_data);
var active_substates = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46425_SHARP_){
return nodename.stately.chart.active_state(p1__46425_SHARP_,active_states);
}),components);
var subcomponents = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46426_SHARP_){
return (nodename.stately.chart.active_subcomponents.cljs$core$IFn$_invoke$arity$3 ? nodename.stately.chart.active_subcomponents.cljs$core$IFn$_invoke$arity$3(p1__46426_SHARP_,all_states,active_states) : nodename.stately.chart.active_subcomponents.call(null, p1__46426_SHARP_,all_states,active_states));
}),active_substates);
return cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(subcomponents,components));
});
nodename.stately.chart.stop_activities = (function nodename$stately$chart$stop_activities(state_data){
var actions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(nodename.stately.chart.stop_action,new cljs.core.Keyword(null,"activities","activities",1654844313).cljs$core$IFn$_invoke$arity$1(state_data));
var seq__46443 = cljs.core.seq(actions);
var chunk__46444 = null;
var count__46445 = (0);
var i__46446 = (0);
while(true){
if((i__46446 < count__46445)){
var action = chunk__46444.cljs$core$IIndexed$_nth$arity$2(null, i__46446);
nodename.stately.comms.dispatch(action);


var G__46764 = seq__46443;
var G__46765 = chunk__46444;
var G__46766 = count__46445;
var G__46767 = (i__46446 + (1));
seq__46443 = G__46764;
chunk__46444 = G__46765;
count__46445 = G__46766;
i__46446 = G__46767;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46443);
if(temp__5804__auto__){
var seq__46443__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46443__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__46443__$1);
var G__46768 = cljs.core.chunk_rest(seq__46443__$1);
var G__46769 = c__5525__auto__;
var G__46770 = cljs.core.count(c__5525__auto__);
var G__46771 = (0);
seq__46443 = G__46768;
chunk__46444 = G__46769;
count__46445 = G__46770;
i__46446 = G__46771;
continue;
} else {
var action = cljs.core.first(seq__46443__$1);
nodename.stately.comms.dispatch(action);


var G__46772 = cljs.core.next(seq__46443__$1);
var G__46773 = null;
var G__46774 = (0);
var G__46775 = (0);
seq__46443 = G__46772;
chunk__46444 = G__46773;
count__46445 = G__46774;
i__46446 = G__46775;
continue;
}
} else {
return null;
}
}
break;
}
});
nodename.stately.chart.perform_exit_actions = (function nodename$stately$chart$perform_exit_actions(state_data){
var actions = new cljs.core.Keyword(null,"exit-actions","exit-actions",1787573758).cljs$core$IFn$_invoke$arity$1(state_data);
var seq__46497 = cljs.core.seq(actions);
var chunk__46498 = null;
var count__46499 = (0);
var i__46500 = (0);
while(true){
if((i__46500 < count__46499)){
var action = chunk__46498.cljs$core$IIndexed$_nth$arity$2(null, i__46500);
nodename.stately.comms.dispatch(action);


var G__46776 = seq__46497;
var G__46777 = chunk__46498;
var G__46778 = count__46499;
var G__46779 = (i__46500 + (1));
seq__46497 = G__46776;
chunk__46498 = G__46777;
count__46499 = G__46778;
i__46500 = G__46779;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46497);
if(temp__5804__auto__){
var seq__46497__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46497__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__46497__$1);
var G__46780 = cljs.core.chunk_rest(seq__46497__$1);
var G__46781 = c__5525__auto__;
var G__46782 = cljs.core.count(c__5525__auto__);
var G__46783 = (0);
seq__46497 = G__46780;
chunk__46498 = G__46781;
count__46499 = G__46782;
i__46500 = G__46783;
continue;
} else {
var action = cljs.core.first(seq__46497__$1);
nodename.stately.comms.dispatch(action);


var G__46784 = cljs.core.next(seq__46497__$1);
var G__46785 = null;
var G__46786 = (0);
var G__46787 = (0);
seq__46497 = G__46784;
chunk__46498 = G__46785;
count__46499 = G__46786;
i__46500 = G__46787;
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
 * Exit active states of all subcomponents of state, starting from the leaves
 */
nodename.stately.chart.exit_all_substates = (function nodename$stately$chart$exit_all_substates(state,all_states,active_states){
var components = nodename.stately.chart.active_subcomponents(state,all_states,active_states);
var f = (function (active_states__$1,component){
var substate = nodename.stately.chart.active_state(component,active_states__$1);
if(cljs.core.truth_(substate)){
return (nodename.stately.chart.exit_state.cljs$core$IFn$_invoke$arity$3 ? nodename.stately.chart.exit_state.cljs$core$IFn$_invoke$arity$3(substate,all_states,active_states__$1) : nodename.stately.chart.exit_state.call(null, substate,all_states,active_states__$1));
} else {
return active_states__$1;
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,active_states,components);
});
nodename.stately.chart.exit_state = (function nodename$stately$chart$exit_state(state,all_states,active_states){
var state_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_states,state);
var active_states__$1 = nodename.stately.chart.exit_all_substates(state,all_states,active_states);
nodename.stately.chart.stop_activities(state_data);

nodename.stately.chart.perform_exit_actions(state_data);

return nodename.stately.chart.set_active(active_states__$1,state,false);
});
nodename.stately.chart.get_start_state = (function nodename$stately$chart$get_start_state(fsm_key,all_start_states){
return cljs.core.some((function (p1__46518_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p1__46518_SHARP_),cljs.core.name(fsm_key))){
return p1__46518_SHARP_;
} else {
return null;
}
}),all_start_states);
});
nodename.stately.chart.perform_entry_actions = (function nodename$stately$chart$perform_entry_actions(state_data,values){
var actions = new cljs.core.Keyword(null,"entry-actions","entry-actions",493602529).cljs$core$IFn$_invoke$arity$1(state_data);
var seq__46520 = cljs.core.seq(actions);
var chunk__46521 = null;
var count__46522 = (0);
var i__46523 = (0);
while(true){
if((i__46523 < count__46522)){
var action = chunk__46521.cljs$core$IIndexed$_nth$arity$2(null, i__46523);
nodename.stately.comms.dispatch(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(action,values)));


var G__46788 = seq__46520;
var G__46789 = chunk__46521;
var G__46790 = count__46522;
var G__46791 = (i__46523 + (1));
seq__46520 = G__46788;
chunk__46521 = G__46789;
count__46522 = G__46790;
i__46523 = G__46791;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46520);
if(temp__5804__auto__){
var seq__46520__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46520__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__46520__$1);
var G__46792 = cljs.core.chunk_rest(seq__46520__$1);
var G__46793 = c__5525__auto__;
var G__46794 = cljs.core.count(c__5525__auto__);
var G__46795 = (0);
seq__46520 = G__46792;
chunk__46521 = G__46793;
count__46522 = G__46794;
i__46523 = G__46795;
continue;
} else {
var action = cljs.core.first(seq__46520__$1);
nodename.stately.comms.dispatch(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(action,values)));


var G__46796 = cljs.core.next(seq__46520__$1);
var G__46797 = null;
var G__46798 = (0);
var G__46799 = (0);
seq__46520 = G__46796;
chunk__46521 = G__46797;
count__46522 = G__46798;
i__46523 = G__46799;
continue;
}
} else {
return null;
}
}
break;
}
});
nodename.stately.chart.start_activities = (function nodename$stately$chart$start_activities(state_data){
var actions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(nodename.stately.chart.start_action,new cljs.core.Keyword(null,"activities","activities",1654844313).cljs$core$IFn$_invoke$arity$1(state_data));
var seq__46539 = cljs.core.seq(actions);
var chunk__46540 = null;
var count__46541 = (0);
var i__46542 = (0);
while(true){
if((i__46542 < count__46541)){
var action = chunk__46540.cljs$core$IIndexed$_nth$arity$2(null, i__46542);
nodename.stately.comms.dispatch(action);


var G__46800 = seq__46539;
var G__46801 = chunk__46540;
var G__46802 = count__46541;
var G__46803 = (i__46542 + (1));
seq__46539 = G__46800;
chunk__46540 = G__46801;
count__46541 = G__46802;
i__46542 = G__46803;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46539);
if(temp__5804__auto__){
var seq__46539__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46539__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__46539__$1);
var G__46805 = cljs.core.chunk_rest(seq__46539__$1);
var G__46806 = c__5525__auto__;
var G__46807 = cljs.core.count(c__5525__auto__);
var G__46808 = (0);
seq__46539 = G__46805;
chunk__46540 = G__46806;
count__46541 = G__46807;
i__46542 = G__46808;
continue;
} else {
var action = cljs.core.first(seq__46539__$1);
nodename.stately.comms.dispatch(action);


var G__46809 = cljs.core.next(seq__46539__$1);
var G__46810 = null;
var G__46811 = (0);
var G__46812 = (0);
seq__46539 = G__46809;
chunk__46540 = G__46810;
count__46541 = G__46811;
i__46542 = G__46812;
continue;
}
} else {
return null;
}
}
break;
}
});
nodename.stately.chart.enter_components_start_states = (function nodename$stately$chart$enter_components_start_states(state,active_states,p__46558){
var map__46559 = p__46558;
var map__46559__$1 = cljs.core.__destructure_map(map__46559);
var chart_data = map__46559__$1;
var all_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46559__$1,new cljs.core.Keyword(null,"all-states","all-states",1465146122));
var all_start_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46559__$1,new cljs.core.Keyword(null,"all-start-states","all-start-states",1423270630));
var state_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_states,state);
var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_data,new cljs.core.Keyword(null,"components","components",-1073188942));
var f = (function (active_states__$1,component){
var start_state = nodename.stately.chart.get_start_state(component,all_start_states);
if(cljs.core.truth_(start_state)){
var G__46561 = start_state;
var G__46562 = cljs.core.PersistentVector.EMPTY;
var G__46563 = active_states__$1;
var G__46564 = chart_data;
return (nodename.stately.chart.enter_state.cljs$core$IFn$_invoke$arity$4 ? nodename.stately.chart.enter_state.cljs$core$IFn$_invoke$arity$4(G__46561,G__46562,G__46563,G__46564) : nodename.stately.chart.enter_state.call(null, G__46561,G__46562,G__46563,G__46564));
} else {
return active_states__$1;
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,active_states,components);
});
nodename.stately.chart.enter_state = (function nodename$stately$chart$enter_state(state,values,active_states,p__46568){
var map__46569 = p__46568;
var map__46569__$1 = cljs.core.__destructure_map(map__46569);
var chart_data = map__46569__$1;
var all_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46569__$1,new cljs.core.Keyword(null,"all-states","all-states",1465146122));
var state_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_states,state);
var active_states__$1 = nodename.stately.chart.set_active(active_states,state,true);
nodename.stately.chart.perform_entry_actions(state_data,values);

nodename.stately.chart.start_activities(state_data);

return nodename.stately.chart.enter_components_start_states(state,active_states__$1,chart_data);
});
nodename.stately.chart.make_transition_handler = (function nodename$stately$chart$make_transition_handler(state_and_trigger,transition,p__46579){
var map__46580 = p__46579;
var map__46580__$1 = cljs.core.__destructure_map(map__46580);
var chart_data = map__46580__$1;
var all_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46580__$1,new cljs.core.Keyword(null,"all-states","all-states",1465146122));
return (function() { 
var nodename$stately$chart$make_transition_handler_$_handler__delegate = function (db,p__46582){
var vec__46583 = p__46582;
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46583,(0),null);
var vec__46586 = state_and_trigger;
var current_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46586,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46586,(1),null);
var map__46590 = transition;
var map__46590__$1 = cljs.core.__destructure_map(map__46590);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46590__$1,new cljs.core.Keyword(null,"condition","condition",1668437652),cljs.core.constantly(true));
if(cljs.core.not((condition.cljs$core$IFn$_invoke$arity$2 ? condition.cljs$core$IFn$_invoke$arity$2(db,values) : condition.call(null, db,values)))){
nodename.stately.chart.show_condition_not_met(state_and_trigger,current_state,condition);

return db;
} else {
var map__46591 = transition;
var map__46591__$1 = cljs.core.__destructure_map(map__46591);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46591__$1,new cljs.core.Keyword(null,"target","target",253001721));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46591__$1,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.PersistentVector.EMPTY);
var target__$1 = ((cljs.core.fn_QMARK_(target))?(target.cljs$core$IFn$_invoke$arity$2 ? target.cljs$core$IFn$_invoke$arity$2(db,values) : target.call(null, db,values)):target);
var vec__46592 = nodename.stately.tree.lca_path(current_state,target__$1);
var exit_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46592,(0),null);
var entry_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46592,(1),null);
var actions__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46571_SHARP_){
if(cljs.core.truth_(values)){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__46571_SHARP_,values));
} else {
return p1__46571_SHARP_;
}
}),actions);
var active_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"active-states","active-states",-911704047));
var active_states__$1 = nodename.stately.chart.exit_state(cljs.core.last(exit_path),all_states,active_states);
var active_states__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (active_states__$2,state){
return nodename.stately.chart.enter_state(state,values,active_states__$2,chart_data);
}),active_states__$1,entry_path);
var seq__46597_46816 = cljs.core.seq(actions__$1);
var chunk__46598_46817 = null;
var count__46599_46818 = (0);
var i__46600_46819 = (0);
while(true){
if((i__46600_46819 < count__46599_46818)){
var action_46820 = chunk__46598_46817.cljs$core$IIndexed$_nth$arity$2(null, i__46600_46819);
nodename.stately.comms.dispatch(action_46820);


var G__46821 = seq__46597_46816;
var G__46822 = chunk__46598_46817;
var G__46823 = count__46599_46818;
var G__46824 = (i__46600_46819 + (1));
seq__46597_46816 = G__46821;
chunk__46598_46817 = G__46822;
count__46599_46818 = G__46823;
i__46600_46819 = G__46824;
continue;
} else {
var temp__5804__auto___46825 = cljs.core.seq(seq__46597_46816);
if(temp__5804__auto___46825){
var seq__46597_46826__$1 = temp__5804__auto___46825;
if(cljs.core.chunked_seq_QMARK_(seq__46597_46826__$1)){
var c__5525__auto___46827 = cljs.core.chunk_first(seq__46597_46826__$1);
var G__46828 = cljs.core.chunk_rest(seq__46597_46826__$1);
var G__46829 = c__5525__auto___46827;
var G__46830 = cljs.core.count(c__5525__auto___46827);
var G__46831 = (0);
seq__46597_46816 = G__46828;
chunk__46598_46817 = G__46829;
count__46599_46818 = G__46830;
i__46600_46819 = G__46831;
continue;
} else {
var action_46832 = cljs.core.first(seq__46597_46826__$1);
nodename.stately.comms.dispatch(action_46832);


var G__46833 = cljs.core.next(seq__46597_46826__$1);
var G__46834 = null;
var G__46835 = (0);
var G__46836 = (0);
seq__46597_46816 = G__46833;
chunk__46598_46817 = G__46834;
count__46599_46818 = G__46835;
i__46600_46819 = G__46836;
continue;
}
} else {
}
}
break;
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-states","active-states",-911704047),active_states__$2);
}
};
var nodename$stately$chart$make_transition_handler_$_handler = function (db,var_args){
var p__46582 = null;
if (arguments.length > 1) {
var G__46837__i = 0, G__46837__a = new Array(arguments.length -  1);
while (G__46837__i < G__46837__a.length) {G__46837__a[G__46837__i] = arguments[G__46837__i + 1]; ++G__46837__i;}
  p__46582 = new cljs.core.IndexedSeq(G__46837__a,0,null);
} 
return nodename$stately$chart$make_transition_handler_$_handler__delegate.call(this,db,p__46582);};
nodename$stately$chart$make_transition_handler_$_handler.cljs$lang$maxFixedArity = 1;
nodename$stately$chart$make_transition_handler_$_handler.cljs$lang$applyTo = (function (arglist__46838){
var db = cljs.core.first(arglist__46838);
var p__46582 = cljs.core.rest(arglist__46838);
return nodename$stately$chart$make_transition_handler_$_handler__delegate(db,p__46582);
});
nodename$stately$chart$make_transition_handler_$_handler.cljs$core$IFn$_invoke$arity$variadic = nodename$stately$chart$make_transition_handler_$_handler__delegate;
return nodename$stately$chart$make_transition_handler_$_handler;
})()
;
});
nodename.stately.chart.register_transition_handlers = (function nodename$stately$chart$register_transition_handlers(middleware,p__46611){
var map__46613 = p__46611;
var map__46613__$1 = cljs.core.__destructure_map(map__46613);
var chart_data = map__46613__$1;
var all_transitions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46613__$1,new cljs.core.Keyword(null,"all-transitions","all-transitions",1714245168));
var seq__46615 = cljs.core.seq(all_transitions);
var chunk__46616 = null;
var count__46617 = (0);
var i__46618 = (0);
while(true){
if((i__46618 < count__46617)){
var vec__46634 = chunk__46616.cljs$core$IIndexed$_nth$arity$2(null, i__46618);
var trigger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46634,(0),null);
var transition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46634,(1),null);
var handler_46840 = nodename.stately.chart.make_transition_handler(trigger,transition,chart_data);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger,middleware,handler_46840);


var G__46841 = seq__46615;
var G__46842 = chunk__46616;
var G__46843 = count__46617;
var G__46844 = (i__46618 + (1));
seq__46615 = G__46841;
chunk__46616 = G__46842;
count__46617 = G__46843;
i__46618 = G__46844;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46615);
if(temp__5804__auto__){
var seq__46615__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46615__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__46615__$1);
var G__46845 = cljs.core.chunk_rest(seq__46615__$1);
var G__46846 = c__5525__auto__;
var G__46847 = cljs.core.count(c__5525__auto__);
var G__46848 = (0);
seq__46615 = G__46845;
chunk__46616 = G__46846;
count__46617 = G__46847;
i__46618 = G__46848;
continue;
} else {
var vec__46637 = cljs.core.first(seq__46615__$1);
var trigger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46637,(0),null);
var transition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46637,(1),null);
var handler_46849 = nodename.stately.chart.make_transition_handler(trigger,transition,chart_data);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger,middleware,handler_46849);


var G__46850 = cljs.core.next(seq__46615__$1);
var G__46851 = null;
var G__46852 = (0);
var G__46853 = (0);
seq__46615 = G__46850;
chunk__46616 = G__46851;
count__46617 = G__46852;
i__46618 = G__46853;
continue;
}
} else {
return null;
}
}
break;
}
});
nodename.stately.chart.register_statechart = (function nodename$stately$chart$register_statechart(middleware,chart_data){
nodename.stately.chart.register_action_handlers(middleware,chart_data);

nodename.stately.chart.register_activity_handlers(middleware,chart_data);

return nodename.stately.chart.register_transition_handlers(middleware,chart_data);
});

//# sourceMappingURL=nodename.stately.chart.js.map
