goog.provide('nodename.stately.chart');
/**
 * return modified set of active states
 */
nodename.stately.chart.set_active = (function nodename$stately$chart$set_active(active_states,state_key,yesno){
var fexpr__55690 = (cljs.core.truth_(yesno)?cljs.core.conj:cljs.core.disj);
return (fexpr__55690.cljs$core$IFn$_invoke$arity$2 ? fexpr__55690.cljs$core$IFn$_invoke$arity$2(active_states,state_key) : fexpr__55690.call(null, active_states,state_key));
});
nodename.stately.chart.active_state = (function nodename$stately$chart$active_state(fsm,active_states){
if(cljs.core.truth_(fsm)){
return cljs.core.some((function (p1__55692_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p1__55692_SHARP_),cljs.core.name(fsm))){
return p1__55692_SHARP_;
} else {
return null;
}
}),active_states);
} else {
return null;
}
});
nodename.stately.chart.register_action_handlers = (function nodename$stately$chart$register_action_handlers(middleware,p__55698){
var map__55699 = p__55698;
var map__55699__$1 = cljs.core.__destructure_map(map__55699);
var chart_data = map__55699__$1;
var all_actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55699__$1,new cljs.core.Keyword(null,"all-actions","all-actions",1798816917));
var seq__55700 = cljs.core.seq(all_actions);
var chunk__55701 = null;
var count__55702 = (0);
var i__55703 = (0);
while(true){
if((i__55703 < count__55702)){
var vec__55727 = chunk__55701.cljs$core$IIndexed$_nth$arity$2(null, i__55703);
var trigger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55727,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55727,(1),null);
var handler_56141 = ((cljs.core.fn_QMARK_(action))?action:((function (seq__55700,chunk__55701,count__55702,i__55703,vec__55727,trigger,action,map__55699,map__55699__$1,chart_data,all_actions){
return (function (db,values){
var G__55733 = db;
var G__55734 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(action),values);
var fexpr__55732 = cljs.core.first(action);
return (fexpr__55732.cljs$core$IFn$_invoke$arity$2 ? fexpr__55732.cljs$core$IFn$_invoke$arity$2(G__55733,G__55734) : fexpr__55732.call(null, G__55733,G__55734));
});})(seq__55700,chunk__55701,count__55702,i__55703,vec__55727,trigger,action,map__55699,map__55699__$1,chart_data,all_actions))
);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger,middleware,handler_56141);


var G__56142 = seq__55700;
var G__56143 = chunk__55701;
var G__56144 = count__55702;
var G__56145 = (i__55703 + (1));
seq__55700 = G__56142;
chunk__55701 = G__56143;
count__55702 = G__56144;
i__55703 = G__56145;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__55700);
if(temp__5804__auto__){
var seq__55700__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55700__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__55700__$1);
var G__56150 = cljs.core.chunk_rest(seq__55700__$1);
var G__56151 = c__5525__auto__;
var G__56152 = cljs.core.count(c__5525__auto__);
var G__56153 = (0);
seq__55700 = G__56150;
chunk__55701 = G__56151;
count__55702 = G__56152;
i__55703 = G__56153;
continue;
} else {
var vec__55738 = cljs.core.first(seq__55700__$1);
var trigger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55738,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55738,(1),null);
var handler_56155 = ((cljs.core.fn_QMARK_(action))?action:((function (seq__55700,chunk__55701,count__55702,i__55703,vec__55738,trigger,action,seq__55700__$1,temp__5804__auto__,map__55699,map__55699__$1,chart_data,all_actions){
return (function (db,values){
var G__55743 = db;
var G__55744 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(action),values);
var fexpr__55742 = cljs.core.first(action);
return (fexpr__55742.cljs$core$IFn$_invoke$arity$2 ? fexpr__55742.cljs$core$IFn$_invoke$arity$2(G__55743,G__55744) : fexpr__55742.call(null, G__55743,G__55744));
});})(seq__55700,chunk__55701,count__55702,i__55703,vec__55738,trigger,action,seq__55700__$1,temp__5804__auto__,map__55699,map__55699__$1,chart_data,all_actions))
);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger,middleware,handler_56155);


var G__56156 = cljs.core.next(seq__55700__$1);
var G__56157 = null;
var G__56158 = (0);
var G__56159 = (0);
seq__55700 = G__56156;
chunk__55701 = G__56157;
count__55702 = G__56158;
i__55703 = G__56159;
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
nodename.stately.chart.register_activity_handlers = (function nodename$stately$chart$register_activity_handlers(middleware,p__55759){
var map__55760 = p__55759;
var map__55760__$1 = cljs.core.__destructure_map(map__55760);
var chart_data = map__55760__$1;
var all_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55760__$1,new cljs.core.Keyword(null,"all-states","all-states",1465146122));
var all_activities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55760__$1,new cljs.core.Keyword(null,"all-activities","all-activities",48954553));
var seq__55762 = cljs.core.seq(all_states);
var chunk__55763 = null;
var count__55764 = (0);
var i__55765 = (0);
while(true){
if((i__55765 < count__55764)){
var vec__55837 = chunk__55763.cljs$core$IIndexed$_nth$arity$2(null, i__55765);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55837,(0),null);
var state_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55837,(1),null);
var map__55840_56164 = state_data;
var map__55840_56165__$1 = cljs.core.__destructure_map(map__55840_56164);
var activities_56166 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55840_56165__$1,new cljs.core.Keyword(null,"activities","activities",1654844313),cljs.core.PersistentVector.EMPTY);
var seq__55842_56167 = cljs.core.seq(activities_56166);
var chunk__55843_56168 = null;
var count__55844_56169 = (0);
var i__55845_56170 = (0);
while(true){
if((i__55845_56170 < count__55844_56169)){
var activity_56171 = chunk__55843_56168.cljs$core$IIndexed$_nth$arity$2(null, i__55845_56170);
var map__55872_56172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_activities,activity_56171);
var map__55872_56173__$1 = cljs.core.__destructure_map(map__55872_56172);
var start_56174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55872_56173__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop_56175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55872_56173__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(start_56174)){
var trigger_56180 = nodename.stately.chart.start_action(activity_56171);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_56180,middleware,((function (seq__55842_56167,chunk__55843_56168,count__55844_56169,i__55845_56170,seq__55762,chunk__55763,count__55764,i__55765,trigger_56180,map__55872_56172,map__55872_56173__$1,start_56174,stop_56175,activity_56171,map__55840_56164,map__55840_56165__$1,activities_56166,vec__55837,_,state_data,map__55760,map__55760__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(start_56174);

return db;
});})(seq__55842_56167,chunk__55843_56168,count__55844_56169,i__55845_56170,seq__55762,chunk__55763,count__55764,i__55765,trigger_56180,map__55872_56172,map__55872_56173__$1,start_56174,stop_56175,activity_56171,map__55840_56164,map__55840_56165__$1,activities_56166,vec__55837,_,state_data,map__55760,map__55760__$1,chart_data,all_states,all_activities))
);
} else {
}

if(cljs.core.truth_(stop_56175)){
var trigger_56181 = nodename.stately.chart.stop_action(activity_56171);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_56181,middleware,((function (seq__55842_56167,chunk__55843_56168,count__55844_56169,i__55845_56170,seq__55762,chunk__55763,count__55764,i__55765,trigger_56181,map__55872_56172,map__55872_56173__$1,start_56174,stop_56175,activity_56171,map__55840_56164,map__55840_56165__$1,activities_56166,vec__55837,_,state_data,map__55760,map__55760__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(stop_56175);

return db;
});})(seq__55842_56167,chunk__55843_56168,count__55844_56169,i__55845_56170,seq__55762,chunk__55763,count__55764,i__55765,trigger_56181,map__55872_56172,map__55872_56173__$1,start_56174,stop_56175,activity_56171,map__55840_56164,map__55840_56165__$1,activities_56166,vec__55837,_,state_data,map__55760,map__55760__$1,chart_data,all_states,all_activities))
);
} else {
}


var G__56182 = seq__55842_56167;
var G__56183 = chunk__55843_56168;
var G__56184 = count__55844_56169;
var G__56185 = (i__55845_56170 + (1));
seq__55842_56167 = G__56182;
chunk__55843_56168 = G__56183;
count__55844_56169 = G__56184;
i__55845_56170 = G__56185;
continue;
} else {
var temp__5804__auto___56186 = cljs.core.seq(seq__55842_56167);
if(temp__5804__auto___56186){
var seq__55842_56187__$1 = temp__5804__auto___56186;
if(cljs.core.chunked_seq_QMARK_(seq__55842_56187__$1)){
var c__5525__auto___56188 = cljs.core.chunk_first(seq__55842_56187__$1);
var G__56189 = cljs.core.chunk_rest(seq__55842_56187__$1);
var G__56190 = c__5525__auto___56188;
var G__56191 = cljs.core.count(c__5525__auto___56188);
var G__56192 = (0);
seq__55842_56167 = G__56189;
chunk__55843_56168 = G__56190;
count__55844_56169 = G__56191;
i__55845_56170 = G__56192;
continue;
} else {
var activity_56193 = cljs.core.first(seq__55842_56187__$1);
var map__55881_56194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_activities,activity_56193);
var map__55881_56195__$1 = cljs.core.__destructure_map(map__55881_56194);
var start_56196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55881_56195__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop_56197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55881_56195__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(start_56196)){
var trigger_56198 = nodename.stately.chart.start_action(activity_56193);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_56198,middleware,((function (seq__55842_56167,chunk__55843_56168,count__55844_56169,i__55845_56170,seq__55762,chunk__55763,count__55764,i__55765,trigger_56198,map__55881_56194,map__55881_56195__$1,start_56196,stop_56197,activity_56193,seq__55842_56187__$1,temp__5804__auto___56186,map__55840_56164,map__55840_56165__$1,activities_56166,vec__55837,_,state_data,map__55760,map__55760__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(start_56196);

return db;
});})(seq__55842_56167,chunk__55843_56168,count__55844_56169,i__55845_56170,seq__55762,chunk__55763,count__55764,i__55765,trigger_56198,map__55881_56194,map__55881_56195__$1,start_56196,stop_56197,activity_56193,seq__55842_56187__$1,temp__5804__auto___56186,map__55840_56164,map__55840_56165__$1,activities_56166,vec__55837,_,state_data,map__55760,map__55760__$1,chart_data,all_states,all_activities))
);
} else {
}

if(cljs.core.truth_(stop_56197)){
var trigger_56199 = nodename.stately.chart.stop_action(activity_56193);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_56199,middleware,((function (seq__55842_56167,chunk__55843_56168,count__55844_56169,i__55845_56170,seq__55762,chunk__55763,count__55764,i__55765,trigger_56199,map__55881_56194,map__55881_56195__$1,start_56196,stop_56197,activity_56193,seq__55842_56187__$1,temp__5804__auto___56186,map__55840_56164,map__55840_56165__$1,activities_56166,vec__55837,_,state_data,map__55760,map__55760__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(stop_56197);

return db;
});})(seq__55842_56167,chunk__55843_56168,count__55844_56169,i__55845_56170,seq__55762,chunk__55763,count__55764,i__55765,trigger_56199,map__55881_56194,map__55881_56195__$1,start_56196,stop_56197,activity_56193,seq__55842_56187__$1,temp__5804__auto___56186,map__55840_56164,map__55840_56165__$1,activities_56166,vec__55837,_,state_data,map__55760,map__55760__$1,chart_data,all_states,all_activities))
);
} else {
}


var G__56200 = cljs.core.next(seq__55842_56187__$1);
var G__56201 = null;
var G__56202 = (0);
var G__56203 = (0);
seq__55842_56167 = G__56200;
chunk__55843_56168 = G__56201;
count__55844_56169 = G__56202;
i__55845_56170 = G__56203;
continue;
}
} else {
}
}
break;
}


var G__56204 = seq__55762;
var G__56205 = chunk__55763;
var G__56206 = count__55764;
var G__56207 = (i__55765 + (1));
seq__55762 = G__56204;
chunk__55763 = G__56205;
count__55764 = G__56206;
i__55765 = G__56207;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__55762);
if(temp__5804__auto__){
var seq__55762__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55762__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__55762__$1);
var G__56208 = cljs.core.chunk_rest(seq__55762__$1);
var G__56209 = c__5525__auto__;
var G__56210 = cljs.core.count(c__5525__auto__);
var G__56211 = (0);
seq__55762 = G__56208;
chunk__55763 = G__56209;
count__55764 = G__56210;
i__55765 = G__56211;
continue;
} else {
var vec__55892 = cljs.core.first(seq__55762__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55892,(0),null);
var state_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55892,(1),null);
var map__55895_56212 = state_data;
var map__55895_56213__$1 = cljs.core.__destructure_map(map__55895_56212);
var activities_56216 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55895_56213__$1,new cljs.core.Keyword(null,"activities","activities",1654844313),cljs.core.PersistentVector.EMPTY);
var seq__55896_56218 = cljs.core.seq(activities_56216);
var chunk__55897_56219 = null;
var count__55898_56220 = (0);
var i__55899_56221 = (0);
while(true){
if((i__55899_56221 < count__55898_56220)){
var activity_56222 = chunk__55897_56219.cljs$core$IIndexed$_nth$arity$2(null, i__55899_56221);
var map__55930_56223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_activities,activity_56222);
var map__55930_56224__$1 = cljs.core.__destructure_map(map__55930_56223);
var start_56225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55930_56224__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop_56226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55930_56224__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(start_56225)){
var trigger_56227 = nodename.stately.chart.start_action(activity_56222);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_56227,middleware,((function (seq__55896_56218,chunk__55897_56219,count__55898_56220,i__55899_56221,seq__55762,chunk__55763,count__55764,i__55765,trigger_56227,map__55930_56223,map__55930_56224__$1,start_56225,stop_56226,activity_56222,map__55895_56212,map__55895_56213__$1,activities_56216,vec__55892,_,state_data,seq__55762__$1,temp__5804__auto__,map__55760,map__55760__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(start_56225);

return db;
});})(seq__55896_56218,chunk__55897_56219,count__55898_56220,i__55899_56221,seq__55762,chunk__55763,count__55764,i__55765,trigger_56227,map__55930_56223,map__55930_56224__$1,start_56225,stop_56226,activity_56222,map__55895_56212,map__55895_56213__$1,activities_56216,vec__55892,_,state_data,seq__55762__$1,temp__5804__auto__,map__55760,map__55760__$1,chart_data,all_states,all_activities))
);
} else {
}

if(cljs.core.truth_(stop_56226)){
var trigger_56228 = nodename.stately.chart.stop_action(activity_56222);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_56228,middleware,((function (seq__55896_56218,chunk__55897_56219,count__55898_56220,i__55899_56221,seq__55762,chunk__55763,count__55764,i__55765,trigger_56228,map__55930_56223,map__55930_56224__$1,start_56225,stop_56226,activity_56222,map__55895_56212,map__55895_56213__$1,activities_56216,vec__55892,_,state_data,seq__55762__$1,temp__5804__auto__,map__55760,map__55760__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(stop_56226);

return db;
});})(seq__55896_56218,chunk__55897_56219,count__55898_56220,i__55899_56221,seq__55762,chunk__55763,count__55764,i__55765,trigger_56228,map__55930_56223,map__55930_56224__$1,start_56225,stop_56226,activity_56222,map__55895_56212,map__55895_56213__$1,activities_56216,vec__55892,_,state_data,seq__55762__$1,temp__5804__auto__,map__55760,map__55760__$1,chart_data,all_states,all_activities))
);
} else {
}


var G__56229 = seq__55896_56218;
var G__56230 = chunk__55897_56219;
var G__56231 = count__55898_56220;
var G__56232 = (i__55899_56221 + (1));
seq__55896_56218 = G__56229;
chunk__55897_56219 = G__56230;
count__55898_56220 = G__56231;
i__55899_56221 = G__56232;
continue;
} else {
var temp__5804__auto___56234__$1 = cljs.core.seq(seq__55896_56218);
if(temp__5804__auto___56234__$1){
var seq__55896_56235__$1 = temp__5804__auto___56234__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55896_56235__$1)){
var c__5525__auto___56236 = cljs.core.chunk_first(seq__55896_56235__$1);
var G__56237 = cljs.core.chunk_rest(seq__55896_56235__$1);
var G__56238 = c__5525__auto___56236;
var G__56239 = cljs.core.count(c__5525__auto___56236);
var G__56240 = (0);
seq__55896_56218 = G__56237;
chunk__55897_56219 = G__56238;
count__55898_56220 = G__56239;
i__55899_56221 = G__56240;
continue;
} else {
var activity_56241 = cljs.core.first(seq__55896_56235__$1);
var map__55937_56242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_activities,activity_56241);
var map__55937_56243__$1 = cljs.core.__destructure_map(map__55937_56242);
var start_56244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55937_56243__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop_56245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55937_56243__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(start_56244)){
var trigger_56249 = nodename.stately.chart.start_action(activity_56241);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_56249,middleware,((function (seq__55896_56218,chunk__55897_56219,count__55898_56220,i__55899_56221,seq__55762,chunk__55763,count__55764,i__55765,trigger_56249,map__55937_56242,map__55937_56243__$1,start_56244,stop_56245,activity_56241,seq__55896_56235__$1,temp__5804__auto___56234__$1,map__55895_56212,map__55895_56213__$1,activities_56216,vec__55892,_,state_data,seq__55762__$1,temp__5804__auto__,map__55760,map__55760__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(start_56244);

return db;
});})(seq__55896_56218,chunk__55897_56219,count__55898_56220,i__55899_56221,seq__55762,chunk__55763,count__55764,i__55765,trigger_56249,map__55937_56242,map__55937_56243__$1,start_56244,stop_56245,activity_56241,seq__55896_56235__$1,temp__5804__auto___56234__$1,map__55895_56212,map__55895_56213__$1,activities_56216,vec__55892,_,state_data,seq__55762__$1,temp__5804__auto__,map__55760,map__55760__$1,chart_data,all_states,all_activities))
);
} else {
}

if(cljs.core.truth_(stop_56245)){
var trigger_56250 = nodename.stately.chart.stop_action(activity_56241);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_56250,middleware,((function (seq__55896_56218,chunk__55897_56219,count__55898_56220,i__55899_56221,seq__55762,chunk__55763,count__55764,i__55765,trigger_56250,map__55937_56242,map__55937_56243__$1,start_56244,stop_56245,activity_56241,seq__55896_56235__$1,temp__5804__auto___56234__$1,map__55895_56212,map__55895_56213__$1,activities_56216,vec__55892,_,state_data,seq__55762__$1,temp__5804__auto__,map__55760,map__55760__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(stop_56245);

return db;
});})(seq__55896_56218,chunk__55897_56219,count__55898_56220,i__55899_56221,seq__55762,chunk__55763,count__55764,i__55765,trigger_56250,map__55937_56242,map__55937_56243__$1,start_56244,stop_56245,activity_56241,seq__55896_56235__$1,temp__5804__auto___56234__$1,map__55895_56212,map__55895_56213__$1,activities_56216,vec__55892,_,state_data,seq__55762__$1,temp__5804__auto__,map__55760,map__55760__$1,chart_data,all_states,all_activities))
);
} else {
}


var G__56251 = cljs.core.next(seq__55896_56235__$1);
var G__56252 = null;
var G__56253 = (0);
var G__56254 = (0);
seq__55896_56218 = G__56251;
chunk__55897_56219 = G__56252;
count__55898_56220 = G__56253;
i__55899_56221 = G__56254;
continue;
}
} else {
}
}
break;
}


var G__56255 = cljs.core.next(seq__55762__$1);
var G__56256 = null;
var G__56257 = (0);
var G__56258 = (0);
seq__55762 = G__56255;
chunk__55763 = G__56256;
count__55764 = G__56257;
i__55765 = G__56258;
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
var active_substates = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55946_SHARP_){
return nodename.stately.chart.active_state(p1__55946_SHARP_,active_states);
}),components);
var subcomponents = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55947_SHARP_){
return (nodename.stately.chart.active_subcomponents.cljs$core$IFn$_invoke$arity$3 ? nodename.stately.chart.active_subcomponents.cljs$core$IFn$_invoke$arity$3(p1__55947_SHARP_,all_states,active_states) : nodename.stately.chart.active_subcomponents.call(null, p1__55947_SHARP_,all_states,active_states));
}),active_substates);
return cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(subcomponents,components));
});
nodename.stately.chart.stop_activities = (function nodename$stately$chart$stop_activities(state_data){
var actions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(nodename.stately.chart.stop_action,new cljs.core.Keyword(null,"activities","activities",1654844313).cljs$core$IFn$_invoke$arity$1(state_data));
var seq__55962 = cljs.core.seq(actions);
var chunk__55963 = null;
var count__55964 = (0);
var i__55965 = (0);
while(true){
if((i__55965 < count__55964)){
var action = chunk__55963.cljs$core$IIndexed$_nth$arity$2(null, i__55965);
nodename.stately.comms.dispatch(action);


var G__56263 = seq__55962;
var G__56264 = chunk__55963;
var G__56265 = count__55964;
var G__56266 = (i__55965 + (1));
seq__55962 = G__56263;
chunk__55963 = G__56264;
count__55964 = G__56265;
i__55965 = G__56266;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__55962);
if(temp__5804__auto__){
var seq__55962__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55962__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__55962__$1);
var G__56267 = cljs.core.chunk_rest(seq__55962__$1);
var G__56268 = c__5525__auto__;
var G__56269 = cljs.core.count(c__5525__auto__);
var G__56270 = (0);
seq__55962 = G__56267;
chunk__55963 = G__56268;
count__55964 = G__56269;
i__55965 = G__56270;
continue;
} else {
var action = cljs.core.first(seq__55962__$1);
nodename.stately.comms.dispatch(action);


var G__56272 = cljs.core.next(seq__55962__$1);
var G__56273 = null;
var G__56274 = (0);
var G__56275 = (0);
seq__55962 = G__56272;
chunk__55963 = G__56273;
count__55964 = G__56274;
i__55965 = G__56275;
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
var seq__55988 = cljs.core.seq(actions);
var chunk__55989 = null;
var count__55990 = (0);
var i__55991 = (0);
while(true){
if((i__55991 < count__55990)){
var action = chunk__55989.cljs$core$IIndexed$_nth$arity$2(null, i__55991);
nodename.stately.comms.dispatch(action);


var G__56276 = seq__55988;
var G__56277 = chunk__55989;
var G__56278 = count__55990;
var G__56279 = (i__55991 + (1));
seq__55988 = G__56276;
chunk__55989 = G__56277;
count__55990 = G__56278;
i__55991 = G__56279;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__55988);
if(temp__5804__auto__){
var seq__55988__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55988__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__55988__$1);
var G__56280 = cljs.core.chunk_rest(seq__55988__$1);
var G__56281 = c__5525__auto__;
var G__56282 = cljs.core.count(c__5525__auto__);
var G__56283 = (0);
seq__55988 = G__56280;
chunk__55989 = G__56281;
count__55990 = G__56282;
i__55991 = G__56283;
continue;
} else {
var action = cljs.core.first(seq__55988__$1);
nodename.stately.comms.dispatch(action);


var G__56284 = cljs.core.next(seq__55988__$1);
var G__56285 = null;
var G__56286 = (0);
var G__56287 = (0);
seq__55988 = G__56284;
chunk__55989 = G__56285;
count__55990 = G__56286;
i__55991 = G__56287;
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
return cljs.core.some((function (p1__56012_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p1__56012_SHARP_),cljs.core.name(fsm_key))){
return p1__56012_SHARP_;
} else {
return null;
}
}),all_start_states);
});
nodename.stately.chart.perform_entry_actions = (function nodename$stately$chart$perform_entry_actions(state_data,values){
var actions = new cljs.core.Keyword(null,"entry-actions","entry-actions",493602529).cljs$core$IFn$_invoke$arity$1(state_data);
var seq__56021 = cljs.core.seq(actions);
var chunk__56022 = null;
var count__56023 = (0);
var i__56024 = (0);
while(true){
if((i__56024 < count__56023)){
var action = chunk__56022.cljs$core$IIndexed$_nth$arity$2(null, i__56024);
nodename.stately.comms.dispatch(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(action,values)));


var G__56291 = seq__56021;
var G__56292 = chunk__56022;
var G__56293 = count__56023;
var G__56294 = (i__56024 + (1));
seq__56021 = G__56291;
chunk__56022 = G__56292;
count__56023 = G__56293;
i__56024 = G__56294;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56021);
if(temp__5804__auto__){
var seq__56021__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56021__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__56021__$1);
var G__56295 = cljs.core.chunk_rest(seq__56021__$1);
var G__56296 = c__5525__auto__;
var G__56297 = cljs.core.count(c__5525__auto__);
var G__56298 = (0);
seq__56021 = G__56295;
chunk__56022 = G__56296;
count__56023 = G__56297;
i__56024 = G__56298;
continue;
} else {
var action = cljs.core.first(seq__56021__$1);
nodename.stately.comms.dispatch(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(action,values)));


var G__56299 = cljs.core.next(seq__56021__$1);
var G__56300 = null;
var G__56301 = (0);
var G__56302 = (0);
seq__56021 = G__56299;
chunk__56022 = G__56300;
count__56023 = G__56301;
i__56024 = G__56302;
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
var seq__56044 = cljs.core.seq(actions);
var chunk__56045 = null;
var count__56046 = (0);
var i__56047 = (0);
while(true){
if((i__56047 < count__56046)){
var action = chunk__56045.cljs$core$IIndexed$_nth$arity$2(null, i__56047);
nodename.stately.comms.dispatch(action);


var G__56303 = seq__56044;
var G__56304 = chunk__56045;
var G__56305 = count__56046;
var G__56306 = (i__56047 + (1));
seq__56044 = G__56303;
chunk__56045 = G__56304;
count__56046 = G__56305;
i__56047 = G__56306;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56044);
if(temp__5804__auto__){
var seq__56044__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56044__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__56044__$1);
var G__56307 = cljs.core.chunk_rest(seq__56044__$1);
var G__56308 = c__5525__auto__;
var G__56309 = cljs.core.count(c__5525__auto__);
var G__56310 = (0);
seq__56044 = G__56307;
chunk__56045 = G__56308;
count__56046 = G__56309;
i__56047 = G__56310;
continue;
} else {
var action = cljs.core.first(seq__56044__$1);
nodename.stately.comms.dispatch(action);


var G__56311 = cljs.core.next(seq__56044__$1);
var G__56312 = null;
var G__56313 = (0);
var G__56314 = (0);
seq__56044 = G__56311;
chunk__56045 = G__56312;
count__56046 = G__56313;
i__56047 = G__56314;
continue;
}
} else {
return null;
}
}
break;
}
});
nodename.stately.chart.enter_components_start_states = (function nodename$stately$chart$enter_components_start_states(state,active_states,p__56061){
var map__56064 = p__56061;
var map__56064__$1 = cljs.core.__destructure_map(map__56064);
var chart_data = map__56064__$1;
var all_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56064__$1,new cljs.core.Keyword(null,"all-states","all-states",1465146122));
var all_start_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56064__$1,new cljs.core.Keyword(null,"all-start-states","all-start-states",1423270630));
var state_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_states,state);
var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_data,new cljs.core.Keyword(null,"components","components",-1073188942));
var f = (function (active_states__$1,component){
var start_state = nodename.stately.chart.get_start_state(component,all_start_states);
if(cljs.core.truth_(start_state)){
var G__56068 = start_state;
var G__56069 = cljs.core.PersistentVector.EMPTY;
var G__56070 = active_states__$1;
var G__56071 = chart_data;
return (nodename.stately.chart.enter_state.cljs$core$IFn$_invoke$arity$4 ? nodename.stately.chart.enter_state.cljs$core$IFn$_invoke$arity$4(G__56068,G__56069,G__56070,G__56071) : nodename.stately.chart.enter_state.call(null, G__56068,G__56069,G__56070,G__56071));
} else {
return active_states__$1;
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,active_states,components);
});
nodename.stately.chart.enter_state = (function nodename$stately$chart$enter_state(state,values,active_states,p__56072){
var map__56075 = p__56072;
var map__56075__$1 = cljs.core.__destructure_map(map__56075);
var chart_data = map__56075__$1;
var all_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56075__$1,new cljs.core.Keyword(null,"all-states","all-states",1465146122));
var state_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_states,state);
var active_states__$1 = nodename.stately.chart.set_active(active_states,state,true);
nodename.stately.chart.perform_entry_actions(state_data,values);

nodename.stately.chart.start_activities(state_data);

return nodename.stately.chart.enter_components_start_states(state,active_states__$1,chart_data);
});
nodename.stately.chart.make_transition_handler = (function nodename$stately$chart$make_transition_handler(state_and_trigger,transition,p__56084){
var map__56085 = p__56084;
var map__56085__$1 = cljs.core.__destructure_map(map__56085);
var chart_data = map__56085__$1;
var all_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56085__$1,new cljs.core.Keyword(null,"all-states","all-states",1465146122));
return (function() { 
var nodename$stately$chart$make_transition_handler_$_handler__delegate = function (db,p__56086){
var vec__56087 = p__56086;
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56087,(0),null);
var vec__56090 = state_and_trigger;
var current_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56090,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56090,(1),null);
var map__56093 = transition;
var map__56093__$1 = cljs.core.__destructure_map(map__56093);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56093__$1,new cljs.core.Keyword(null,"condition","condition",1668437652),cljs.core.constantly(true));
if(cljs.core.not((condition.cljs$core$IFn$_invoke$arity$2 ? condition.cljs$core$IFn$_invoke$arity$2(db,values) : condition.call(null, db,values)))){
nodename.stately.chart.show_condition_not_met(state_and_trigger,current_state,condition);

return db;
} else {
var map__56095 = transition;
var map__56095__$1 = cljs.core.__destructure_map(map__56095);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56095__$1,new cljs.core.Keyword(null,"target","target",253001721));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56095__$1,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.PersistentVector.EMPTY);
var target__$1 = ((cljs.core.fn_QMARK_(target))?(target.cljs$core$IFn$_invoke$arity$2 ? target.cljs$core$IFn$_invoke$arity$2(db,values) : target.call(null, db,values)):target);
var vec__56096 = nodename.stately.tree.lca_path(current_state,target__$1);
var exit_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56096,(0),null);
var entry_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56096,(1),null);
var actions__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56079_SHARP_){
if(cljs.core.truth_(values)){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__56079_SHARP_,values));
} else {
return p1__56079_SHARP_;
}
}),actions);
var active_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"active-states","active-states",-911704047));
var active_states__$1 = nodename.stately.chart.exit_state(cljs.core.last(exit_path),all_states,active_states);
var active_states__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (active_states__$2,state){
return nodename.stately.chart.enter_state(state,values,active_states__$2,chart_data);
}),active_states__$1,entry_path);
var seq__56104_56318 = cljs.core.seq(actions__$1);
var chunk__56105_56319 = null;
var count__56106_56320 = (0);
var i__56107_56321 = (0);
while(true){
if((i__56107_56321 < count__56106_56320)){
var action_56322 = chunk__56105_56319.cljs$core$IIndexed$_nth$arity$2(null, i__56107_56321);
nodename.stately.comms.dispatch(action_56322);


var G__56323 = seq__56104_56318;
var G__56324 = chunk__56105_56319;
var G__56325 = count__56106_56320;
var G__56326 = (i__56107_56321 + (1));
seq__56104_56318 = G__56323;
chunk__56105_56319 = G__56324;
count__56106_56320 = G__56325;
i__56107_56321 = G__56326;
continue;
} else {
var temp__5804__auto___56327 = cljs.core.seq(seq__56104_56318);
if(temp__5804__auto___56327){
var seq__56104_56328__$1 = temp__5804__auto___56327;
if(cljs.core.chunked_seq_QMARK_(seq__56104_56328__$1)){
var c__5525__auto___56329 = cljs.core.chunk_first(seq__56104_56328__$1);
var G__56330 = cljs.core.chunk_rest(seq__56104_56328__$1);
var G__56331 = c__5525__auto___56329;
var G__56332 = cljs.core.count(c__5525__auto___56329);
var G__56333 = (0);
seq__56104_56318 = G__56330;
chunk__56105_56319 = G__56331;
count__56106_56320 = G__56332;
i__56107_56321 = G__56333;
continue;
} else {
var action_56334 = cljs.core.first(seq__56104_56328__$1);
nodename.stately.comms.dispatch(action_56334);


var G__56335 = cljs.core.next(seq__56104_56328__$1);
var G__56336 = null;
var G__56337 = (0);
var G__56338 = (0);
seq__56104_56318 = G__56335;
chunk__56105_56319 = G__56336;
count__56106_56320 = G__56337;
i__56107_56321 = G__56338;
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
var p__56086 = null;
if (arguments.length > 1) {
var G__56339__i = 0, G__56339__a = new Array(arguments.length -  1);
while (G__56339__i < G__56339__a.length) {G__56339__a[G__56339__i] = arguments[G__56339__i + 1]; ++G__56339__i;}
  p__56086 = new cljs.core.IndexedSeq(G__56339__a,0,null);
} 
return nodename$stately$chart$make_transition_handler_$_handler__delegate.call(this,db,p__56086);};
nodename$stately$chart$make_transition_handler_$_handler.cljs$lang$maxFixedArity = 1;
nodename$stately$chart$make_transition_handler_$_handler.cljs$lang$applyTo = (function (arglist__56340){
var db = cljs.core.first(arglist__56340);
var p__56086 = cljs.core.rest(arglist__56340);
return nodename$stately$chart$make_transition_handler_$_handler__delegate(db,p__56086);
});
nodename$stately$chart$make_transition_handler_$_handler.cljs$core$IFn$_invoke$arity$variadic = nodename$stately$chart$make_transition_handler_$_handler__delegate;
return nodename$stately$chart$make_transition_handler_$_handler;
})()
;
});
nodename.stately.chart.register_transition_handlers = (function nodename$stately$chart$register_transition_handlers(middleware,p__56113){
var map__56114 = p__56113;
var map__56114__$1 = cljs.core.__destructure_map(map__56114);
var chart_data = map__56114__$1;
var all_transitions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56114__$1,new cljs.core.Keyword(null,"all-transitions","all-transitions",1714245168));
var seq__56115 = cljs.core.seq(all_transitions);
var chunk__56116 = null;
var count__56117 = (0);
var i__56118 = (0);
while(true){
if((i__56118 < count__56117)){
var vec__56129 = chunk__56116.cljs$core$IIndexed$_nth$arity$2(null, i__56118);
var trigger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56129,(0),null);
var transition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56129,(1),null);
var handler_56341 = nodename.stately.chart.make_transition_handler(trigger,transition,chart_data);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger,middleware,handler_56341);


var G__56342 = seq__56115;
var G__56343 = chunk__56116;
var G__56344 = count__56117;
var G__56345 = (i__56118 + (1));
seq__56115 = G__56342;
chunk__56116 = G__56343;
count__56117 = G__56344;
i__56118 = G__56345;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56115);
if(temp__5804__auto__){
var seq__56115__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56115__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__56115__$1);
var G__56346 = cljs.core.chunk_rest(seq__56115__$1);
var G__56347 = c__5525__auto__;
var G__56348 = cljs.core.count(c__5525__auto__);
var G__56349 = (0);
seq__56115 = G__56346;
chunk__56116 = G__56347;
count__56117 = G__56348;
i__56118 = G__56349;
continue;
} else {
var vec__56136 = cljs.core.first(seq__56115__$1);
var trigger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56136,(0),null);
var transition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56136,(1),null);
var handler_56350 = nodename.stately.chart.make_transition_handler(trigger,transition,chart_data);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger,middleware,handler_56350);


var G__56351 = cljs.core.next(seq__56115__$1);
var G__56352 = null;
var G__56353 = (0);
var G__56354 = (0);
seq__56115 = G__56351;
chunk__56116 = G__56352;
count__56117 = G__56353;
i__56118 = G__56354;
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
