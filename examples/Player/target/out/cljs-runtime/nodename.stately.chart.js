goog.provide('nodename.stately.chart');
/**
 * return modified set of active states
 */
nodename.stately.chart.set_active = (function nodename$stately$chart$set_active(active_states,state_key,yesno){
var fexpr__64836 = (cljs.core.truth_(yesno)?cljs.core.conj:cljs.core.disj);
return (fexpr__64836.cljs$core$IFn$_invoke$arity$2 ? fexpr__64836.cljs$core$IFn$_invoke$arity$2(active_states,state_key) : fexpr__64836.call(null, active_states,state_key));
});
nodename.stately.chart.active_state = (function nodename$stately$chart$active_state(fsm,active_states){
if(cljs.core.truth_(fsm)){
return cljs.core.some((function (p1__64843_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p1__64843_SHARP_),cljs.core.name(fsm))){
return p1__64843_SHARP_;
} else {
return null;
}
}),active_states);
} else {
return null;
}
});
nodename.stately.chart.register_action_handlers = (function nodename$stately$chart$register_action_handlers(middleware,p__64856){
var map__64857 = p__64856;
var map__64857__$1 = cljs.core.__destructure_map(map__64857);
var chart_data = map__64857__$1;
var all_actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64857__$1,new cljs.core.Keyword(null,"all-actions","all-actions",1798816917));
var seq__64861 = cljs.core.seq(all_actions);
var chunk__64862 = null;
var count__64863 = (0);
var i__64864 = (0);
while(true){
if((i__64864 < count__64863)){
var vec__64895 = chunk__64862.cljs$core$IIndexed$_nth$arity$2(null, i__64864);
var trigger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64895,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64895,(1),null);
var handler_65506 = ((cljs.core.fn_QMARK_(action))?action:((function (seq__64861,chunk__64862,count__64863,i__64864,vec__64895,trigger,action,map__64857,map__64857__$1,chart_data,all_actions){
return (function (db,values){
var G__64906 = db;
var G__64907 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(action),values);
var fexpr__64905 = cljs.core.first(action);
return (fexpr__64905.cljs$core$IFn$_invoke$arity$2 ? fexpr__64905.cljs$core$IFn$_invoke$arity$2(G__64906,G__64907) : fexpr__64905.call(null, G__64906,G__64907));
});})(seq__64861,chunk__64862,count__64863,i__64864,vec__64895,trigger,action,map__64857,map__64857__$1,chart_data,all_actions))
);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger,middleware,handler_65506);


var G__65507 = seq__64861;
var G__65508 = chunk__64862;
var G__65509 = count__64863;
var G__65510 = (i__64864 + (1));
seq__64861 = G__65507;
chunk__64862 = G__65508;
count__64863 = G__65509;
i__64864 = G__65510;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64861);
if(temp__5804__auto__){
var seq__64861__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64861__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__64861__$1);
var G__65513 = cljs.core.chunk_rest(seq__64861__$1);
var G__65514 = c__5525__auto__;
var G__65515 = cljs.core.count(c__5525__auto__);
var G__65516 = (0);
seq__64861 = G__65513;
chunk__64862 = G__65514;
count__64863 = G__65515;
i__64864 = G__65516;
continue;
} else {
var vec__64915 = cljs.core.first(seq__64861__$1);
var trigger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64915,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64915,(1),null);
var handler_65517 = ((cljs.core.fn_QMARK_(action))?action:((function (seq__64861,chunk__64862,count__64863,i__64864,vec__64915,trigger,action,seq__64861__$1,temp__5804__auto__,map__64857,map__64857__$1,chart_data,all_actions){
return (function (db,values){
var G__64924 = db;
var G__64925 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(action),values);
var fexpr__64923 = cljs.core.first(action);
return (fexpr__64923.cljs$core$IFn$_invoke$arity$2 ? fexpr__64923.cljs$core$IFn$_invoke$arity$2(G__64924,G__64925) : fexpr__64923.call(null, G__64924,G__64925));
});})(seq__64861,chunk__64862,count__64863,i__64864,vec__64915,trigger,action,seq__64861__$1,temp__5804__auto__,map__64857,map__64857__$1,chart_data,all_actions))
);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger,middleware,handler_65517);


var G__65525 = cljs.core.next(seq__64861__$1);
var G__65526 = null;
var G__65527 = (0);
var G__65528 = (0);
seq__64861 = G__65525;
chunk__64862 = G__65526;
count__64863 = G__65527;
i__64864 = G__65528;
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
nodename.stately.chart.register_activity_handlers = (function nodename$stately$chart$register_activity_handlers(middleware,p__64946){
var map__64948 = p__64946;
var map__64948__$1 = cljs.core.__destructure_map(map__64948);
var chart_data = map__64948__$1;
var all_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64948__$1,new cljs.core.Keyword(null,"all-states","all-states",1465146122));
var all_activities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64948__$1,new cljs.core.Keyword(null,"all-activities","all-activities",48954553));
var seq__64949 = cljs.core.seq(all_states);
var chunk__64950 = null;
var count__64951 = (0);
var i__64952 = (0);
while(true){
if((i__64952 < count__64951)){
var vec__65110 = chunk__64950.cljs$core$IIndexed$_nth$arity$2(null, i__64952);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65110,(0),null);
var state_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65110,(1),null);
var map__65116_65533 = state_data;
var map__65116_65534__$1 = cljs.core.__destructure_map(map__65116_65533);
var activities_65535 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65116_65534__$1,new cljs.core.Keyword(null,"activities","activities",1654844313),cljs.core.PersistentVector.EMPTY);
var seq__65117_65536 = cljs.core.seq(activities_65535);
var chunk__65118_65537 = null;
var count__65119_65538 = (0);
var i__65120_65539 = (0);
while(true){
if((i__65120_65539 < count__65119_65538)){
var activity_65540 = chunk__65118_65537.cljs$core$IIndexed$_nth$arity$2(null, i__65120_65539);
var map__65150_65541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_activities,activity_65540);
var map__65150_65542__$1 = cljs.core.__destructure_map(map__65150_65541);
var start_65543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65150_65542__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop_65544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65150_65542__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(start_65543)){
var trigger_65546 = nodename.stately.chart.start_action(activity_65540);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_65546,middleware,((function (seq__65117_65536,chunk__65118_65537,count__65119_65538,i__65120_65539,seq__64949,chunk__64950,count__64951,i__64952,trigger_65546,map__65150_65541,map__65150_65542__$1,start_65543,stop_65544,activity_65540,map__65116_65533,map__65116_65534__$1,activities_65535,vec__65110,_,state_data,map__64948,map__64948__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(start_65543);

return db;
});})(seq__65117_65536,chunk__65118_65537,count__65119_65538,i__65120_65539,seq__64949,chunk__64950,count__64951,i__64952,trigger_65546,map__65150_65541,map__65150_65542__$1,start_65543,stop_65544,activity_65540,map__65116_65533,map__65116_65534__$1,activities_65535,vec__65110,_,state_data,map__64948,map__64948__$1,chart_data,all_states,all_activities))
);
} else {
}

if(cljs.core.truth_(stop_65544)){
var trigger_65548 = nodename.stately.chart.stop_action(activity_65540);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_65548,middleware,((function (seq__65117_65536,chunk__65118_65537,count__65119_65538,i__65120_65539,seq__64949,chunk__64950,count__64951,i__64952,trigger_65548,map__65150_65541,map__65150_65542__$1,start_65543,stop_65544,activity_65540,map__65116_65533,map__65116_65534__$1,activities_65535,vec__65110,_,state_data,map__64948,map__64948__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(stop_65544);

return db;
});})(seq__65117_65536,chunk__65118_65537,count__65119_65538,i__65120_65539,seq__64949,chunk__64950,count__64951,i__64952,trigger_65548,map__65150_65541,map__65150_65542__$1,start_65543,stop_65544,activity_65540,map__65116_65533,map__65116_65534__$1,activities_65535,vec__65110,_,state_data,map__64948,map__64948__$1,chart_data,all_states,all_activities))
);
} else {
}


var G__65550 = seq__65117_65536;
var G__65551 = chunk__65118_65537;
var G__65552 = count__65119_65538;
var G__65553 = (i__65120_65539 + (1));
seq__65117_65536 = G__65550;
chunk__65118_65537 = G__65551;
count__65119_65538 = G__65552;
i__65120_65539 = G__65553;
continue;
} else {
var temp__5804__auto___65554 = cljs.core.seq(seq__65117_65536);
if(temp__5804__auto___65554){
var seq__65117_65555__$1 = temp__5804__auto___65554;
if(cljs.core.chunked_seq_QMARK_(seq__65117_65555__$1)){
var c__5525__auto___65556 = cljs.core.chunk_first(seq__65117_65555__$1);
var G__65557 = cljs.core.chunk_rest(seq__65117_65555__$1);
var G__65558 = c__5525__auto___65556;
var G__65559 = cljs.core.count(c__5525__auto___65556);
var G__65560 = (0);
seq__65117_65536 = G__65557;
chunk__65118_65537 = G__65558;
count__65119_65538 = G__65559;
i__65120_65539 = G__65560;
continue;
} else {
var activity_65562 = cljs.core.first(seq__65117_65555__$1);
var map__65155_65566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_activities,activity_65562);
var map__65155_65567__$1 = cljs.core.__destructure_map(map__65155_65566);
var start_65568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65155_65567__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop_65569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65155_65567__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(start_65568)){
var trigger_65571 = nodename.stately.chart.start_action(activity_65562);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_65571,middleware,((function (seq__65117_65536,chunk__65118_65537,count__65119_65538,i__65120_65539,seq__64949,chunk__64950,count__64951,i__64952,trigger_65571,map__65155_65566,map__65155_65567__$1,start_65568,stop_65569,activity_65562,seq__65117_65555__$1,temp__5804__auto___65554,map__65116_65533,map__65116_65534__$1,activities_65535,vec__65110,_,state_data,map__64948,map__64948__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(start_65568);

return db;
});})(seq__65117_65536,chunk__65118_65537,count__65119_65538,i__65120_65539,seq__64949,chunk__64950,count__64951,i__64952,trigger_65571,map__65155_65566,map__65155_65567__$1,start_65568,stop_65569,activity_65562,seq__65117_65555__$1,temp__5804__auto___65554,map__65116_65533,map__65116_65534__$1,activities_65535,vec__65110,_,state_data,map__64948,map__64948__$1,chart_data,all_states,all_activities))
);
} else {
}

if(cljs.core.truth_(stop_65569)){
var trigger_65576 = nodename.stately.chart.stop_action(activity_65562);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_65576,middleware,((function (seq__65117_65536,chunk__65118_65537,count__65119_65538,i__65120_65539,seq__64949,chunk__64950,count__64951,i__64952,trigger_65576,map__65155_65566,map__65155_65567__$1,start_65568,stop_65569,activity_65562,seq__65117_65555__$1,temp__5804__auto___65554,map__65116_65533,map__65116_65534__$1,activities_65535,vec__65110,_,state_data,map__64948,map__64948__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(stop_65569);

return db;
});})(seq__65117_65536,chunk__65118_65537,count__65119_65538,i__65120_65539,seq__64949,chunk__64950,count__64951,i__64952,trigger_65576,map__65155_65566,map__65155_65567__$1,start_65568,stop_65569,activity_65562,seq__65117_65555__$1,temp__5804__auto___65554,map__65116_65533,map__65116_65534__$1,activities_65535,vec__65110,_,state_data,map__64948,map__64948__$1,chart_data,all_states,all_activities))
);
} else {
}


var G__65577 = cljs.core.next(seq__65117_65555__$1);
var G__65578 = null;
var G__65579 = (0);
var G__65580 = (0);
seq__65117_65536 = G__65577;
chunk__65118_65537 = G__65578;
count__65119_65538 = G__65579;
i__65120_65539 = G__65580;
continue;
}
} else {
}
}
break;
}


var G__65581 = seq__64949;
var G__65582 = chunk__64950;
var G__65583 = count__64951;
var G__65584 = (i__64952 + (1));
seq__64949 = G__65581;
chunk__64950 = G__65582;
count__64951 = G__65583;
i__64952 = G__65584;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64949);
if(temp__5804__auto__){
var seq__64949__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64949__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__64949__$1);
var G__65585 = cljs.core.chunk_rest(seq__64949__$1);
var G__65586 = c__5525__auto__;
var G__65587 = cljs.core.count(c__5525__auto__);
var G__65588 = (0);
seq__64949 = G__65585;
chunk__64950 = G__65586;
count__64951 = G__65587;
i__64952 = G__65588;
continue;
} else {
var vec__65160 = cljs.core.first(seq__64949__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65160,(0),null);
var state_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65160,(1),null);
var map__65163_65589 = state_data;
var map__65163_65590__$1 = cljs.core.__destructure_map(map__65163_65589);
var activities_65591 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65163_65590__$1,new cljs.core.Keyword(null,"activities","activities",1654844313),cljs.core.PersistentVector.EMPTY);
var seq__65164_65592 = cljs.core.seq(activities_65591);
var chunk__65165_65593 = null;
var count__65166_65594 = (0);
var i__65167_65595 = (0);
while(true){
if((i__65167_65595 < count__65166_65594)){
var activity_65596 = chunk__65165_65593.cljs$core$IIndexed$_nth$arity$2(null, i__65167_65595);
var map__65188_65597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_activities,activity_65596);
var map__65188_65598__$1 = cljs.core.__destructure_map(map__65188_65597);
var start_65599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65188_65598__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop_65600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65188_65598__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(start_65599)){
var trigger_65601 = nodename.stately.chart.start_action(activity_65596);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_65601,middleware,((function (seq__65164_65592,chunk__65165_65593,count__65166_65594,i__65167_65595,seq__64949,chunk__64950,count__64951,i__64952,trigger_65601,map__65188_65597,map__65188_65598__$1,start_65599,stop_65600,activity_65596,map__65163_65589,map__65163_65590__$1,activities_65591,vec__65160,_,state_data,seq__64949__$1,temp__5804__auto__,map__64948,map__64948__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(start_65599);

return db;
});})(seq__65164_65592,chunk__65165_65593,count__65166_65594,i__65167_65595,seq__64949,chunk__64950,count__64951,i__64952,trigger_65601,map__65188_65597,map__65188_65598__$1,start_65599,stop_65600,activity_65596,map__65163_65589,map__65163_65590__$1,activities_65591,vec__65160,_,state_data,seq__64949__$1,temp__5804__auto__,map__64948,map__64948__$1,chart_data,all_states,all_activities))
);
} else {
}

if(cljs.core.truth_(stop_65600)){
var trigger_65602 = nodename.stately.chart.stop_action(activity_65596);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_65602,middleware,((function (seq__65164_65592,chunk__65165_65593,count__65166_65594,i__65167_65595,seq__64949,chunk__64950,count__64951,i__64952,trigger_65602,map__65188_65597,map__65188_65598__$1,start_65599,stop_65600,activity_65596,map__65163_65589,map__65163_65590__$1,activities_65591,vec__65160,_,state_data,seq__64949__$1,temp__5804__auto__,map__64948,map__64948__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(stop_65600);

return db;
});})(seq__65164_65592,chunk__65165_65593,count__65166_65594,i__65167_65595,seq__64949,chunk__64950,count__64951,i__64952,trigger_65602,map__65188_65597,map__65188_65598__$1,start_65599,stop_65600,activity_65596,map__65163_65589,map__65163_65590__$1,activities_65591,vec__65160,_,state_data,seq__64949__$1,temp__5804__auto__,map__64948,map__64948__$1,chart_data,all_states,all_activities))
);
} else {
}


var G__65603 = seq__65164_65592;
var G__65604 = chunk__65165_65593;
var G__65605 = count__65166_65594;
var G__65606 = (i__65167_65595 + (1));
seq__65164_65592 = G__65603;
chunk__65165_65593 = G__65604;
count__65166_65594 = G__65605;
i__65167_65595 = G__65606;
continue;
} else {
var temp__5804__auto___65608__$1 = cljs.core.seq(seq__65164_65592);
if(temp__5804__auto___65608__$1){
var seq__65164_65609__$1 = temp__5804__auto___65608__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65164_65609__$1)){
var c__5525__auto___65610 = cljs.core.chunk_first(seq__65164_65609__$1);
var G__65611 = cljs.core.chunk_rest(seq__65164_65609__$1);
var G__65612 = c__5525__auto___65610;
var G__65613 = cljs.core.count(c__5525__auto___65610);
var G__65614 = (0);
seq__65164_65592 = G__65611;
chunk__65165_65593 = G__65612;
count__65166_65594 = G__65613;
i__65167_65595 = G__65614;
continue;
} else {
var activity_65615 = cljs.core.first(seq__65164_65609__$1);
var map__65204_65616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_activities,activity_65615);
var map__65204_65617__$1 = cljs.core.__destructure_map(map__65204_65616);
var start_65618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65204_65617__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop_65619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65204_65617__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(start_65618)){
var trigger_65620 = nodename.stately.chart.start_action(activity_65615);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_65620,middleware,((function (seq__65164_65592,chunk__65165_65593,count__65166_65594,i__65167_65595,seq__64949,chunk__64950,count__64951,i__64952,trigger_65620,map__65204_65616,map__65204_65617__$1,start_65618,stop_65619,activity_65615,seq__65164_65609__$1,temp__5804__auto___65608__$1,map__65163_65589,map__65163_65590__$1,activities_65591,vec__65160,_,state_data,seq__64949__$1,temp__5804__auto__,map__64948,map__64948__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(start_65618);

return db;
});})(seq__65164_65592,chunk__65165_65593,count__65166_65594,i__65167_65595,seq__64949,chunk__64950,count__64951,i__64952,trigger_65620,map__65204_65616,map__65204_65617__$1,start_65618,stop_65619,activity_65615,seq__65164_65609__$1,temp__5804__auto___65608__$1,map__65163_65589,map__65163_65590__$1,activities_65591,vec__65160,_,state_data,seq__64949__$1,temp__5804__auto__,map__64948,map__64948__$1,chart_data,all_states,all_activities))
);
} else {
}

if(cljs.core.truth_(stop_65619)){
var trigger_65621 = nodename.stately.chart.stop_action(activity_65615);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_65621,middleware,((function (seq__65164_65592,chunk__65165_65593,count__65166_65594,i__65167_65595,seq__64949,chunk__64950,count__64951,i__64952,trigger_65621,map__65204_65616,map__65204_65617__$1,start_65618,stop_65619,activity_65615,seq__65164_65609__$1,temp__5804__auto___65608__$1,map__65163_65589,map__65163_65590__$1,activities_65591,vec__65160,_,state_data,seq__64949__$1,temp__5804__auto__,map__64948,map__64948__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(stop_65619);

return db;
});})(seq__65164_65592,chunk__65165_65593,count__65166_65594,i__65167_65595,seq__64949,chunk__64950,count__64951,i__64952,trigger_65621,map__65204_65616,map__65204_65617__$1,start_65618,stop_65619,activity_65615,seq__65164_65609__$1,temp__5804__auto___65608__$1,map__65163_65589,map__65163_65590__$1,activities_65591,vec__65160,_,state_data,seq__64949__$1,temp__5804__auto__,map__64948,map__64948__$1,chart_data,all_states,all_activities))
);
} else {
}


var G__65622 = cljs.core.next(seq__65164_65609__$1);
var G__65623 = null;
var G__65624 = (0);
var G__65625 = (0);
seq__65164_65592 = G__65622;
chunk__65165_65593 = G__65623;
count__65166_65594 = G__65624;
i__65167_65595 = G__65625;
continue;
}
} else {
}
}
break;
}


var G__65626 = cljs.core.next(seq__64949__$1);
var G__65627 = null;
var G__65628 = (0);
var G__65629 = (0);
seq__64949 = G__65626;
chunk__64950 = G__65627;
count__64951 = G__65628;
i__64952 = G__65629;
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
var active_substates = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65214_SHARP_){
return nodename.stately.chart.active_state(p1__65214_SHARP_,active_states);
}),components);
var subcomponents = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65218_SHARP_){
return (nodename.stately.chart.active_subcomponents.cljs$core$IFn$_invoke$arity$3 ? nodename.stately.chart.active_subcomponents.cljs$core$IFn$_invoke$arity$3(p1__65218_SHARP_,all_states,active_states) : nodename.stately.chart.active_subcomponents.call(null, p1__65218_SHARP_,all_states,active_states));
}),active_substates);
return cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(subcomponents,components));
});
nodename.stately.chart.stop_activities = (function nodename$stately$chart$stop_activities(state_data){
var actions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(nodename.stately.chart.stop_action,new cljs.core.Keyword(null,"activities","activities",1654844313).cljs$core$IFn$_invoke$arity$1(state_data));
var seq__65223 = cljs.core.seq(actions);
var chunk__65224 = null;
var count__65225 = (0);
var i__65226 = (0);
while(true){
if((i__65226 < count__65225)){
var action = chunk__65224.cljs$core$IIndexed$_nth$arity$2(null, i__65226);
nodename.stately.comms.dispatch(action);


var G__65632 = seq__65223;
var G__65633 = chunk__65224;
var G__65634 = count__65225;
var G__65635 = (i__65226 + (1));
seq__65223 = G__65632;
chunk__65224 = G__65633;
count__65225 = G__65634;
i__65226 = G__65635;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65223);
if(temp__5804__auto__){
var seq__65223__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65223__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__65223__$1);
var G__65640 = cljs.core.chunk_rest(seq__65223__$1);
var G__65641 = c__5525__auto__;
var G__65642 = cljs.core.count(c__5525__auto__);
var G__65643 = (0);
seq__65223 = G__65640;
chunk__65224 = G__65641;
count__65225 = G__65642;
i__65226 = G__65643;
continue;
} else {
var action = cljs.core.first(seq__65223__$1);
nodename.stately.comms.dispatch(action);


var G__65644 = cljs.core.next(seq__65223__$1);
var G__65645 = null;
var G__65646 = (0);
var G__65647 = (0);
seq__65223 = G__65644;
chunk__65224 = G__65645;
count__65225 = G__65646;
i__65226 = G__65647;
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
var seq__65242 = cljs.core.seq(actions);
var chunk__65243 = null;
var count__65244 = (0);
var i__65245 = (0);
while(true){
if((i__65245 < count__65244)){
var action = chunk__65243.cljs$core$IIndexed$_nth$arity$2(null, i__65245);
nodename.stately.comms.dispatch(action);


var G__65648 = seq__65242;
var G__65649 = chunk__65243;
var G__65650 = count__65244;
var G__65651 = (i__65245 + (1));
seq__65242 = G__65648;
chunk__65243 = G__65649;
count__65244 = G__65650;
i__65245 = G__65651;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65242);
if(temp__5804__auto__){
var seq__65242__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65242__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__65242__$1);
var G__65652 = cljs.core.chunk_rest(seq__65242__$1);
var G__65653 = c__5525__auto__;
var G__65654 = cljs.core.count(c__5525__auto__);
var G__65655 = (0);
seq__65242 = G__65652;
chunk__65243 = G__65653;
count__65244 = G__65654;
i__65245 = G__65655;
continue;
} else {
var action = cljs.core.first(seq__65242__$1);
nodename.stately.comms.dispatch(action);


var G__65656 = cljs.core.next(seq__65242__$1);
var G__65657 = null;
var G__65658 = (0);
var G__65659 = (0);
seq__65242 = G__65656;
chunk__65243 = G__65657;
count__65244 = G__65658;
i__65245 = G__65659;
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
return cljs.core.some((function (p1__65275_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p1__65275_SHARP_),cljs.core.name(fsm_key))){
return p1__65275_SHARP_;
} else {
return null;
}
}),all_start_states);
});
nodename.stately.chart.perform_entry_actions = (function nodename$stately$chart$perform_entry_actions(state_data,values){
var actions = new cljs.core.Keyword(null,"entry-actions","entry-actions",493602529).cljs$core$IFn$_invoke$arity$1(state_data);
var seq__65285 = cljs.core.seq(actions);
var chunk__65286 = null;
var count__65287 = (0);
var i__65288 = (0);
while(true){
if((i__65288 < count__65287)){
var action = chunk__65286.cljs$core$IIndexed$_nth$arity$2(null, i__65288);
nodename.stately.comms.dispatch(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(action,values)));


var G__65661 = seq__65285;
var G__65662 = chunk__65286;
var G__65663 = count__65287;
var G__65664 = (i__65288 + (1));
seq__65285 = G__65661;
chunk__65286 = G__65662;
count__65287 = G__65663;
i__65288 = G__65664;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65285);
if(temp__5804__auto__){
var seq__65285__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65285__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__65285__$1);
var G__65665 = cljs.core.chunk_rest(seq__65285__$1);
var G__65666 = c__5525__auto__;
var G__65667 = cljs.core.count(c__5525__auto__);
var G__65668 = (0);
seq__65285 = G__65665;
chunk__65286 = G__65666;
count__65287 = G__65667;
i__65288 = G__65668;
continue;
} else {
var action = cljs.core.first(seq__65285__$1);
nodename.stately.comms.dispatch(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(action,values)));


var G__65670 = cljs.core.next(seq__65285__$1);
var G__65671 = null;
var G__65672 = (0);
var G__65673 = (0);
seq__65285 = G__65670;
chunk__65286 = G__65671;
count__65287 = G__65672;
i__65288 = G__65673;
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
var seq__65314 = cljs.core.seq(actions);
var chunk__65315 = null;
var count__65316 = (0);
var i__65317 = (0);
while(true){
if((i__65317 < count__65316)){
var action = chunk__65315.cljs$core$IIndexed$_nth$arity$2(null, i__65317);
nodename.stately.comms.dispatch(action);


var G__65675 = seq__65314;
var G__65676 = chunk__65315;
var G__65677 = count__65316;
var G__65678 = (i__65317 + (1));
seq__65314 = G__65675;
chunk__65315 = G__65676;
count__65316 = G__65677;
i__65317 = G__65678;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65314);
if(temp__5804__auto__){
var seq__65314__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65314__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__65314__$1);
var G__65683 = cljs.core.chunk_rest(seq__65314__$1);
var G__65684 = c__5525__auto__;
var G__65685 = cljs.core.count(c__5525__auto__);
var G__65686 = (0);
seq__65314 = G__65683;
chunk__65315 = G__65684;
count__65316 = G__65685;
i__65317 = G__65686;
continue;
} else {
var action = cljs.core.first(seq__65314__$1);
nodename.stately.comms.dispatch(action);


var G__65688 = cljs.core.next(seq__65314__$1);
var G__65689 = null;
var G__65690 = (0);
var G__65691 = (0);
seq__65314 = G__65688;
chunk__65315 = G__65689;
count__65316 = G__65690;
i__65317 = G__65691;
continue;
}
} else {
return null;
}
}
break;
}
});
nodename.stately.chart.enter_components_start_states = (function nodename$stately$chart$enter_components_start_states(state,active_states,p__65335){
var map__65339 = p__65335;
var map__65339__$1 = cljs.core.__destructure_map(map__65339);
var chart_data = map__65339__$1;
var all_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65339__$1,new cljs.core.Keyword(null,"all-states","all-states",1465146122));
var all_start_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65339__$1,new cljs.core.Keyword(null,"all-start-states","all-start-states",1423270630));
var state_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_states,state);
var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_data,new cljs.core.Keyword(null,"components","components",-1073188942));
var f = (function (active_states__$1,component){
var start_state = nodename.stately.chart.get_start_state(component,all_start_states);
if(cljs.core.truth_(start_state)){
var G__65345 = start_state;
var G__65346 = cljs.core.PersistentVector.EMPTY;
var G__65347 = active_states__$1;
var G__65348 = chart_data;
return (nodename.stately.chart.enter_state.cljs$core$IFn$_invoke$arity$4 ? nodename.stately.chart.enter_state.cljs$core$IFn$_invoke$arity$4(G__65345,G__65346,G__65347,G__65348) : nodename.stately.chart.enter_state.call(null, G__65345,G__65346,G__65347,G__65348));
} else {
return active_states__$1;
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,active_states,components);
});
nodename.stately.chart.enter_state = (function nodename$stately$chart$enter_state(state,values,active_states,p__65355){
var map__65356 = p__65355;
var map__65356__$1 = cljs.core.__destructure_map(map__65356);
var chart_data = map__65356__$1;
var all_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65356__$1,new cljs.core.Keyword(null,"all-states","all-states",1465146122));
var state_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_states,state);
var active_states__$1 = nodename.stately.chart.set_active(active_states,state,true);
nodename.stately.chart.perform_entry_actions(state_data,values);

nodename.stately.chart.start_activities(state_data);

return nodename.stately.chart.enter_components_start_states(state,active_states__$1,chart_data);
});
nodename.stately.chart.make_transition_handler = (function nodename$stately$chart$make_transition_handler(state_and_trigger,transition,p__65368){
var map__65369 = p__65368;
var map__65369__$1 = cljs.core.__destructure_map(map__65369);
var chart_data = map__65369__$1;
var all_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65369__$1,new cljs.core.Keyword(null,"all-states","all-states",1465146122));
return (function() { 
var nodename$stately$chart$make_transition_handler_$_handler__delegate = function (db,p__65371){
var vec__65376 = p__65371;
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65376,(0),null);
var vec__65379 = state_and_trigger;
var current_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65379,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65379,(1),null);
var map__65382 = transition;
var map__65382__$1 = cljs.core.__destructure_map(map__65382);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65382__$1,new cljs.core.Keyword(null,"condition","condition",1668437652),cljs.core.constantly(true));
if(cljs.core.not((condition.cljs$core$IFn$_invoke$arity$2 ? condition.cljs$core$IFn$_invoke$arity$2(db,values) : condition.call(null, db,values)))){
nodename.stately.chart.show_condition_not_met(state_and_trigger,current_state,condition);

return db;
} else {
var map__65388 = transition;
var map__65388__$1 = cljs.core.__destructure_map(map__65388);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65388__$1,new cljs.core.Keyword(null,"target","target",253001721));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65388__$1,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.PersistentVector.EMPTY);
var target__$1 = ((cljs.core.fn_QMARK_(target))?(target.cljs$core$IFn$_invoke$arity$2 ? target.cljs$core$IFn$_invoke$arity$2(db,values) : target.call(null, db,values)):target);
var vec__65389 = nodename.stately.tree.lca_path(current_state,target__$1);
var exit_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65389,(0),null);
var entry_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65389,(1),null);
var actions__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65361_SHARP_){
if(cljs.core.truth_(values)){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__65361_SHARP_,values));
} else {
return p1__65361_SHARP_;
}
}),actions);
var active_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"active-states","active-states",-911704047));
var active_states__$1 = nodename.stately.chart.exit_state(cljs.core.last(exit_path),all_states,active_states);
var active_states__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (active_states__$2,state){
return nodename.stately.chart.enter_state(state,values,active_states__$2,chart_data);
}),active_states__$1,entry_path);
var seq__65399_65703 = cljs.core.seq(actions__$1);
var chunk__65400_65704 = null;
var count__65401_65705 = (0);
var i__65402_65706 = (0);
while(true){
if((i__65402_65706 < count__65401_65705)){
var action_65707 = chunk__65400_65704.cljs$core$IIndexed$_nth$arity$2(null, i__65402_65706);
nodename.stately.comms.dispatch(action_65707);


var G__65708 = seq__65399_65703;
var G__65709 = chunk__65400_65704;
var G__65710 = count__65401_65705;
var G__65711 = (i__65402_65706 + (1));
seq__65399_65703 = G__65708;
chunk__65400_65704 = G__65709;
count__65401_65705 = G__65710;
i__65402_65706 = G__65711;
continue;
} else {
var temp__5804__auto___65712 = cljs.core.seq(seq__65399_65703);
if(temp__5804__auto___65712){
var seq__65399_65713__$1 = temp__5804__auto___65712;
if(cljs.core.chunked_seq_QMARK_(seq__65399_65713__$1)){
var c__5525__auto___65715 = cljs.core.chunk_first(seq__65399_65713__$1);
var G__65716 = cljs.core.chunk_rest(seq__65399_65713__$1);
var G__65717 = c__5525__auto___65715;
var G__65718 = cljs.core.count(c__5525__auto___65715);
var G__65719 = (0);
seq__65399_65703 = G__65716;
chunk__65400_65704 = G__65717;
count__65401_65705 = G__65718;
i__65402_65706 = G__65719;
continue;
} else {
var action_65721 = cljs.core.first(seq__65399_65713__$1);
nodename.stately.comms.dispatch(action_65721);


var G__65722 = cljs.core.next(seq__65399_65713__$1);
var G__65723 = null;
var G__65724 = (0);
var G__65725 = (0);
seq__65399_65703 = G__65722;
chunk__65400_65704 = G__65723;
count__65401_65705 = G__65724;
i__65402_65706 = G__65725;
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
var p__65371 = null;
if (arguments.length > 1) {
var G__65726__i = 0, G__65726__a = new Array(arguments.length -  1);
while (G__65726__i < G__65726__a.length) {G__65726__a[G__65726__i] = arguments[G__65726__i + 1]; ++G__65726__i;}
  p__65371 = new cljs.core.IndexedSeq(G__65726__a,0,null);
} 
return nodename$stately$chart$make_transition_handler_$_handler__delegate.call(this,db,p__65371);};
nodename$stately$chart$make_transition_handler_$_handler.cljs$lang$maxFixedArity = 1;
nodename$stately$chart$make_transition_handler_$_handler.cljs$lang$applyTo = (function (arglist__65727){
var db = cljs.core.first(arglist__65727);
var p__65371 = cljs.core.rest(arglist__65727);
return nodename$stately$chart$make_transition_handler_$_handler__delegate(db,p__65371);
});
nodename$stately$chart$make_transition_handler_$_handler.cljs$core$IFn$_invoke$arity$variadic = nodename$stately$chart$make_transition_handler_$_handler__delegate;
return nodename$stately$chart$make_transition_handler_$_handler;
})()
;
});
nodename.stately.chart.register_transition_handlers = (function nodename$stately$chart$register_transition_handlers(middleware,p__65464){
var map__65465 = p__65464;
var map__65465__$1 = cljs.core.__destructure_map(map__65465);
var chart_data = map__65465__$1;
var all_transitions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65465__$1,new cljs.core.Keyword(null,"all-transitions","all-transitions",1714245168));
var seq__65466 = cljs.core.seq(all_transitions);
var chunk__65467 = null;
var count__65468 = (0);
var i__65469 = (0);
while(true){
if((i__65469 < count__65468)){
var vec__65481 = chunk__65467.cljs$core$IIndexed$_nth$arity$2(null, i__65469);
var trigger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65481,(0),null);
var transition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65481,(1),null);
var handler_65730 = nodename.stately.chart.make_transition_handler(trigger,transition,chart_data);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger,middleware,handler_65730);


var G__65731 = seq__65466;
var G__65732 = chunk__65467;
var G__65733 = count__65468;
var G__65734 = (i__65469 + (1));
seq__65466 = G__65731;
chunk__65467 = G__65732;
count__65468 = G__65733;
i__65469 = G__65734;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65466);
if(temp__5804__auto__){
var seq__65466__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65466__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__65466__$1);
var G__65735 = cljs.core.chunk_rest(seq__65466__$1);
var G__65736 = c__5525__auto__;
var G__65737 = cljs.core.count(c__5525__auto__);
var G__65738 = (0);
seq__65466 = G__65735;
chunk__65467 = G__65736;
count__65468 = G__65737;
i__65469 = G__65738;
continue;
} else {
var vec__65486 = cljs.core.first(seq__65466__$1);
var trigger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65486,(0),null);
var transition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65486,(1),null);
var handler_65739 = nodename.stately.chart.make_transition_handler(trigger,transition,chart_data);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger,middleware,handler_65739);


var G__65740 = cljs.core.next(seq__65466__$1);
var G__65741 = null;
var G__65742 = (0);
var G__65743 = (0);
seq__65466 = G__65740;
chunk__65467 = G__65741;
count__65468 = G__65742;
i__65469 = G__65743;
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
