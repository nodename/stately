goog.provide('nodename.stately.chart');
/**
 * return modified set of active states
 */
nodename.stately.chart.set_active = (function nodename$stately$chart$set_active(active_states,state_key,yesno){
var fexpr__36838 = (cljs.core.truth_(yesno)?cljs.core.conj:cljs.core.disj);
return (fexpr__36838.cljs$core$IFn$_invoke$arity$2 ? fexpr__36838.cljs$core$IFn$_invoke$arity$2(active_states,state_key) : fexpr__36838.call(null, active_states,state_key));
});
nodename.stately.chart.active_state = (function nodename$stately$chart$active_state(fsm,active_states){
if(cljs.core.truth_(fsm)){
return cljs.core.some((function (p1__36842_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p1__36842_SHARP_),cljs.core.name(fsm))){
return p1__36842_SHARP_;
} else {
return null;
}
}),active_states);
} else {
return null;
}
});
nodename.stately.chart.register_action_handlers = (function nodename$stately$chart$register_action_handlers(middleware,p__36852){
var map__36853 = p__36852;
var map__36853__$1 = cljs.core.__destructure_map(map__36853);
var chart_data = map__36853__$1;
var all_actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36853__$1,new cljs.core.Keyword(null,"all-actions","all-actions",1798816917));
var seq__36854 = cljs.core.seq(all_actions);
var chunk__36855 = null;
var count__36856 = (0);
var i__36857 = (0);
while(true){
if((i__36857 < count__36856)){
var vec__36894 = chunk__36855.cljs$core$IIndexed$_nth$arity$2(null, i__36857);
var trigger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36894,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36894,(1),null);
var handler_37258 = ((cljs.core.fn_QMARK_(action))?action:((function (seq__36854,chunk__36855,count__36856,i__36857,vec__36894,trigger,action,map__36853,map__36853__$1,chart_data,all_actions){
return (function (db,values){
var G__36898 = db;
var G__36899 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(action),values);
var fexpr__36897 = cljs.core.first(action);
return (fexpr__36897.cljs$core$IFn$_invoke$arity$2 ? fexpr__36897.cljs$core$IFn$_invoke$arity$2(G__36898,G__36899) : fexpr__36897.call(null, G__36898,G__36899));
});})(seq__36854,chunk__36855,count__36856,i__36857,vec__36894,trigger,action,map__36853,map__36853__$1,chart_data,all_actions))
);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger,middleware,handler_37258);


var G__37259 = seq__36854;
var G__37260 = chunk__36855;
var G__37261 = count__36856;
var G__37262 = (i__36857 + (1));
seq__36854 = G__37259;
chunk__36855 = G__37260;
count__36856 = G__37261;
i__36857 = G__37262;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36854);
if(temp__5804__auto__){
var seq__36854__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36854__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36854__$1);
var G__37263 = cljs.core.chunk_rest(seq__36854__$1);
var G__37264 = c__5525__auto__;
var G__37265 = cljs.core.count(c__5525__auto__);
var G__37266 = (0);
seq__36854 = G__37263;
chunk__36855 = G__37264;
count__36856 = G__37265;
i__36857 = G__37266;
continue;
} else {
var vec__36901 = cljs.core.first(seq__36854__$1);
var trigger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36901,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36901,(1),null);
var handler_37267 = ((cljs.core.fn_QMARK_(action))?action:((function (seq__36854,chunk__36855,count__36856,i__36857,vec__36901,trigger,action,seq__36854__$1,temp__5804__auto__,map__36853,map__36853__$1,chart_data,all_actions){
return (function (db,values){
var G__36908 = db;
var G__36909 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(action),values);
var fexpr__36907 = cljs.core.first(action);
return (fexpr__36907.cljs$core$IFn$_invoke$arity$2 ? fexpr__36907.cljs$core$IFn$_invoke$arity$2(G__36908,G__36909) : fexpr__36907.call(null, G__36908,G__36909));
});})(seq__36854,chunk__36855,count__36856,i__36857,vec__36901,trigger,action,seq__36854__$1,temp__5804__auto__,map__36853,map__36853__$1,chart_data,all_actions))
);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger,middleware,handler_37267);


var G__37268 = cljs.core.next(seq__36854__$1);
var G__37269 = null;
var G__37270 = (0);
var G__37271 = (0);
seq__36854 = G__37268;
chunk__36855 = G__37269;
count__36856 = G__37270;
i__36857 = G__37271;
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
nodename.stately.chart.register_activity_handlers = (function nodename$stately$chart$register_activity_handlers(middleware,p__36925){
var map__36926 = p__36925;
var map__36926__$1 = cljs.core.__destructure_map(map__36926);
var chart_data = map__36926__$1;
var all_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36926__$1,new cljs.core.Keyword(null,"all-states","all-states",1465146122));
var all_activities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36926__$1,new cljs.core.Keyword(null,"all-activities","all-activities",48954553));
var seq__36927 = cljs.core.seq(all_states);
var chunk__36928 = null;
var count__36929 = (0);
var i__36930 = (0);
while(true){
if((i__36930 < count__36929)){
var vec__36984 = chunk__36928.cljs$core$IIndexed$_nth$arity$2(null, i__36930);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36984,(0),null);
var state_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36984,(1),null);
var map__36988_37275 = state_data;
var map__36988_37276__$1 = cljs.core.__destructure_map(map__36988_37275);
var activities_37277 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36988_37276__$1,new cljs.core.Keyword(null,"activities","activities",1654844313),cljs.core.PersistentVector.EMPTY);
var seq__36989_37278 = cljs.core.seq(activities_37277);
var chunk__36990_37279 = null;
var count__36991_37280 = (0);
var i__36992_37281 = (0);
while(true){
if((i__36992_37281 < count__36991_37280)){
var activity_37282 = chunk__36990_37279.cljs$core$IIndexed$_nth$arity$2(null, i__36992_37281);
var map__37003_37283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_activities,activity_37282);
var map__37003_37284__$1 = cljs.core.__destructure_map(map__37003_37283);
var start_37285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37003_37284__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop_37286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37003_37284__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(start_37285)){
var trigger_37287 = nodename.stately.chart.start_action(activity_37282);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_37287,middleware,((function (seq__36989_37278,chunk__36990_37279,count__36991_37280,i__36992_37281,seq__36927,chunk__36928,count__36929,i__36930,trigger_37287,map__37003_37283,map__37003_37284__$1,start_37285,stop_37286,activity_37282,map__36988_37275,map__36988_37276__$1,activities_37277,vec__36984,_,state_data,map__36926,map__36926__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(start_37285);

return db;
});})(seq__36989_37278,chunk__36990_37279,count__36991_37280,i__36992_37281,seq__36927,chunk__36928,count__36929,i__36930,trigger_37287,map__37003_37283,map__37003_37284__$1,start_37285,stop_37286,activity_37282,map__36988_37275,map__36988_37276__$1,activities_37277,vec__36984,_,state_data,map__36926,map__36926__$1,chart_data,all_states,all_activities))
);
} else {
}

if(cljs.core.truth_(stop_37286)){
var trigger_37289 = nodename.stately.chart.stop_action(activity_37282);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_37289,middleware,((function (seq__36989_37278,chunk__36990_37279,count__36991_37280,i__36992_37281,seq__36927,chunk__36928,count__36929,i__36930,trigger_37289,map__37003_37283,map__37003_37284__$1,start_37285,stop_37286,activity_37282,map__36988_37275,map__36988_37276__$1,activities_37277,vec__36984,_,state_data,map__36926,map__36926__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(stop_37286);

return db;
});})(seq__36989_37278,chunk__36990_37279,count__36991_37280,i__36992_37281,seq__36927,chunk__36928,count__36929,i__36930,trigger_37289,map__37003_37283,map__37003_37284__$1,start_37285,stop_37286,activity_37282,map__36988_37275,map__36988_37276__$1,activities_37277,vec__36984,_,state_data,map__36926,map__36926__$1,chart_data,all_states,all_activities))
);
} else {
}


var G__37290 = seq__36989_37278;
var G__37291 = chunk__36990_37279;
var G__37292 = count__36991_37280;
var G__37293 = (i__36992_37281 + (1));
seq__36989_37278 = G__37290;
chunk__36990_37279 = G__37291;
count__36991_37280 = G__37292;
i__36992_37281 = G__37293;
continue;
} else {
var temp__5804__auto___37294 = cljs.core.seq(seq__36989_37278);
if(temp__5804__auto___37294){
var seq__36989_37295__$1 = temp__5804__auto___37294;
if(cljs.core.chunked_seq_QMARK_(seq__36989_37295__$1)){
var c__5525__auto___37296 = cljs.core.chunk_first(seq__36989_37295__$1);
var G__37297 = cljs.core.chunk_rest(seq__36989_37295__$1);
var G__37298 = c__5525__auto___37296;
var G__37299 = cljs.core.count(c__5525__auto___37296);
var G__37300 = (0);
seq__36989_37278 = G__37297;
chunk__36990_37279 = G__37298;
count__36991_37280 = G__37299;
i__36992_37281 = G__37300;
continue;
} else {
var activity_37301 = cljs.core.first(seq__36989_37295__$1);
var map__37015_37302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_activities,activity_37301);
var map__37015_37303__$1 = cljs.core.__destructure_map(map__37015_37302);
var start_37304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37015_37303__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop_37305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37015_37303__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(start_37304)){
var trigger_37306 = nodename.stately.chart.start_action(activity_37301);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_37306,middleware,((function (seq__36989_37278,chunk__36990_37279,count__36991_37280,i__36992_37281,seq__36927,chunk__36928,count__36929,i__36930,trigger_37306,map__37015_37302,map__37015_37303__$1,start_37304,stop_37305,activity_37301,seq__36989_37295__$1,temp__5804__auto___37294,map__36988_37275,map__36988_37276__$1,activities_37277,vec__36984,_,state_data,map__36926,map__36926__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(start_37304);

return db;
});})(seq__36989_37278,chunk__36990_37279,count__36991_37280,i__36992_37281,seq__36927,chunk__36928,count__36929,i__36930,trigger_37306,map__37015_37302,map__37015_37303__$1,start_37304,stop_37305,activity_37301,seq__36989_37295__$1,temp__5804__auto___37294,map__36988_37275,map__36988_37276__$1,activities_37277,vec__36984,_,state_data,map__36926,map__36926__$1,chart_data,all_states,all_activities))
);
} else {
}

if(cljs.core.truth_(stop_37305)){
var trigger_37308 = nodename.stately.chart.stop_action(activity_37301);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_37308,middleware,((function (seq__36989_37278,chunk__36990_37279,count__36991_37280,i__36992_37281,seq__36927,chunk__36928,count__36929,i__36930,trigger_37308,map__37015_37302,map__37015_37303__$1,start_37304,stop_37305,activity_37301,seq__36989_37295__$1,temp__5804__auto___37294,map__36988_37275,map__36988_37276__$1,activities_37277,vec__36984,_,state_data,map__36926,map__36926__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(stop_37305);

return db;
});})(seq__36989_37278,chunk__36990_37279,count__36991_37280,i__36992_37281,seq__36927,chunk__36928,count__36929,i__36930,trigger_37308,map__37015_37302,map__37015_37303__$1,start_37304,stop_37305,activity_37301,seq__36989_37295__$1,temp__5804__auto___37294,map__36988_37275,map__36988_37276__$1,activities_37277,vec__36984,_,state_data,map__36926,map__36926__$1,chart_data,all_states,all_activities))
);
} else {
}


var G__37309 = cljs.core.next(seq__36989_37295__$1);
var G__37310 = null;
var G__37311 = (0);
var G__37312 = (0);
seq__36989_37278 = G__37309;
chunk__36990_37279 = G__37310;
count__36991_37280 = G__37311;
i__36992_37281 = G__37312;
continue;
}
} else {
}
}
break;
}


var G__37313 = seq__36927;
var G__37314 = chunk__36928;
var G__37315 = count__36929;
var G__37316 = (i__36930 + (1));
seq__36927 = G__37313;
chunk__36928 = G__37314;
count__36929 = G__37315;
i__36930 = G__37316;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36927);
if(temp__5804__auto__){
var seq__36927__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36927__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36927__$1);
var G__37317 = cljs.core.chunk_rest(seq__36927__$1);
var G__37318 = c__5525__auto__;
var G__37319 = cljs.core.count(c__5525__auto__);
var G__37320 = (0);
seq__36927 = G__37317;
chunk__36928 = G__37318;
count__36929 = G__37319;
i__36930 = G__37320;
continue;
} else {
var vec__37026 = cljs.core.first(seq__36927__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37026,(0),null);
var state_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37026,(1),null);
var map__37033_37321 = state_data;
var map__37033_37322__$1 = cljs.core.__destructure_map(map__37033_37321);
var activities_37323 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37033_37322__$1,new cljs.core.Keyword(null,"activities","activities",1654844313),cljs.core.PersistentVector.EMPTY);
var seq__37034_37324 = cljs.core.seq(activities_37323);
var chunk__37035_37325 = null;
var count__37036_37326 = (0);
var i__37037_37327 = (0);
while(true){
if((i__37037_37327 < count__37036_37326)){
var activity_37328 = chunk__37035_37325.cljs$core$IIndexed$_nth$arity$2(null, i__37037_37327);
var map__37050_37329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_activities,activity_37328);
var map__37050_37330__$1 = cljs.core.__destructure_map(map__37050_37329);
var start_37331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37050_37330__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop_37332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37050_37330__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(start_37331)){
var trigger_37335 = nodename.stately.chart.start_action(activity_37328);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_37335,middleware,((function (seq__37034_37324,chunk__37035_37325,count__37036_37326,i__37037_37327,seq__36927,chunk__36928,count__36929,i__36930,trigger_37335,map__37050_37329,map__37050_37330__$1,start_37331,stop_37332,activity_37328,map__37033_37321,map__37033_37322__$1,activities_37323,vec__37026,_,state_data,seq__36927__$1,temp__5804__auto__,map__36926,map__36926__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(start_37331);

return db;
});})(seq__37034_37324,chunk__37035_37325,count__37036_37326,i__37037_37327,seq__36927,chunk__36928,count__36929,i__36930,trigger_37335,map__37050_37329,map__37050_37330__$1,start_37331,stop_37332,activity_37328,map__37033_37321,map__37033_37322__$1,activities_37323,vec__37026,_,state_data,seq__36927__$1,temp__5804__auto__,map__36926,map__36926__$1,chart_data,all_states,all_activities))
);
} else {
}

if(cljs.core.truth_(stop_37332)){
var trigger_37339 = nodename.stately.chart.stop_action(activity_37328);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_37339,middleware,((function (seq__37034_37324,chunk__37035_37325,count__37036_37326,i__37037_37327,seq__36927,chunk__36928,count__36929,i__36930,trigger_37339,map__37050_37329,map__37050_37330__$1,start_37331,stop_37332,activity_37328,map__37033_37321,map__37033_37322__$1,activities_37323,vec__37026,_,state_data,seq__36927__$1,temp__5804__auto__,map__36926,map__36926__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(stop_37332);

return db;
});})(seq__37034_37324,chunk__37035_37325,count__37036_37326,i__37037_37327,seq__36927,chunk__36928,count__36929,i__36930,trigger_37339,map__37050_37329,map__37050_37330__$1,start_37331,stop_37332,activity_37328,map__37033_37321,map__37033_37322__$1,activities_37323,vec__37026,_,state_data,seq__36927__$1,temp__5804__auto__,map__36926,map__36926__$1,chart_data,all_states,all_activities))
);
} else {
}


var G__37340 = seq__37034_37324;
var G__37341 = chunk__37035_37325;
var G__37342 = count__37036_37326;
var G__37343 = (i__37037_37327 + (1));
seq__37034_37324 = G__37340;
chunk__37035_37325 = G__37341;
count__37036_37326 = G__37342;
i__37037_37327 = G__37343;
continue;
} else {
var temp__5804__auto___37344__$1 = cljs.core.seq(seq__37034_37324);
if(temp__5804__auto___37344__$1){
var seq__37034_37345__$1 = temp__5804__auto___37344__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37034_37345__$1)){
var c__5525__auto___37346 = cljs.core.chunk_first(seq__37034_37345__$1);
var G__37347 = cljs.core.chunk_rest(seq__37034_37345__$1);
var G__37348 = c__5525__auto___37346;
var G__37349 = cljs.core.count(c__5525__auto___37346);
var G__37350 = (0);
seq__37034_37324 = G__37347;
chunk__37035_37325 = G__37348;
count__37036_37326 = G__37349;
i__37037_37327 = G__37350;
continue;
} else {
var activity_37351 = cljs.core.first(seq__37034_37345__$1);
var map__37056_37352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_activities,activity_37351);
var map__37056_37353__$1 = cljs.core.__destructure_map(map__37056_37352);
var start_37354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37056_37353__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop_37355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37056_37353__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(start_37354)){
var trigger_37356 = nodename.stately.chart.start_action(activity_37351);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_37356,middleware,((function (seq__37034_37324,chunk__37035_37325,count__37036_37326,i__37037_37327,seq__36927,chunk__36928,count__36929,i__36930,trigger_37356,map__37056_37352,map__37056_37353__$1,start_37354,stop_37355,activity_37351,seq__37034_37345__$1,temp__5804__auto___37344__$1,map__37033_37321,map__37033_37322__$1,activities_37323,vec__37026,_,state_data,seq__36927__$1,temp__5804__auto__,map__36926,map__36926__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(start_37354);

return db;
});})(seq__37034_37324,chunk__37035_37325,count__37036_37326,i__37037_37327,seq__36927,chunk__36928,count__36929,i__36930,trigger_37356,map__37056_37352,map__37056_37353__$1,start_37354,stop_37355,activity_37351,seq__37034_37345__$1,temp__5804__auto___37344__$1,map__37033_37321,map__37033_37322__$1,activities_37323,vec__37026,_,state_data,seq__36927__$1,temp__5804__auto__,map__36926,map__36926__$1,chart_data,all_states,all_activities))
);
} else {
}

if(cljs.core.truth_(stop_37355)){
var trigger_37357 = nodename.stately.chart.stop_action(activity_37351);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger_37357,middleware,((function (seq__37034_37324,chunk__37035_37325,count__37036_37326,i__37037_37327,seq__36927,chunk__36928,count__36929,i__36930,trigger_37357,map__37056_37352,map__37056_37353__$1,start_37354,stop_37355,activity_37351,seq__37034_37345__$1,temp__5804__auto___37344__$1,map__37033_37321,map__37033_37322__$1,activities_37323,vec__37026,_,state_data,seq__36927__$1,temp__5804__auto__,map__36926,map__36926__$1,chart_data,all_states,all_activities){
return (function (db){
nodename.stately.comms.dispatch(stop_37355);

return db;
});})(seq__37034_37324,chunk__37035_37325,count__37036_37326,i__37037_37327,seq__36927,chunk__36928,count__36929,i__36930,trigger_37357,map__37056_37352,map__37056_37353__$1,start_37354,stop_37355,activity_37351,seq__37034_37345__$1,temp__5804__auto___37344__$1,map__37033_37321,map__37033_37322__$1,activities_37323,vec__37026,_,state_data,seq__36927__$1,temp__5804__auto__,map__36926,map__36926__$1,chart_data,all_states,all_activities))
);
} else {
}


var G__37359 = cljs.core.next(seq__37034_37345__$1);
var G__37360 = null;
var G__37361 = (0);
var G__37362 = (0);
seq__37034_37324 = G__37359;
chunk__37035_37325 = G__37360;
count__37036_37326 = G__37361;
i__37037_37327 = G__37362;
continue;
}
} else {
}
}
break;
}


var G__37363 = cljs.core.next(seq__36927__$1);
var G__37364 = null;
var G__37365 = (0);
var G__37366 = (0);
seq__36927 = G__37363;
chunk__36928 = G__37364;
count__36929 = G__37365;
i__36930 = G__37366;
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
var active_substates = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37108_SHARP_){
return nodename.stately.chart.active_state(p1__37108_SHARP_,active_states);
}),components);
var subcomponents = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37110_SHARP_){
return (nodename.stately.chart.active_subcomponents.cljs$core$IFn$_invoke$arity$3 ? nodename.stately.chart.active_subcomponents.cljs$core$IFn$_invoke$arity$3(p1__37110_SHARP_,all_states,active_states) : nodename.stately.chart.active_subcomponents.call(null, p1__37110_SHARP_,all_states,active_states));
}),active_substates);
return cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(subcomponents,components));
});
nodename.stately.chart.stop_activities = (function nodename$stately$chart$stop_activities(state_data){
var actions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(nodename.stately.chart.stop_action,new cljs.core.Keyword(null,"activities","activities",1654844313).cljs$core$IFn$_invoke$arity$1(state_data));
var seq__37119 = cljs.core.seq(actions);
var chunk__37122 = null;
var count__37123 = (0);
var i__37124 = (0);
while(true){
if((i__37124 < count__37123)){
var action = chunk__37122.cljs$core$IIndexed$_nth$arity$2(null, i__37124);
nodename.stately.comms.dispatch(action);


var G__37372 = seq__37119;
var G__37373 = chunk__37122;
var G__37374 = count__37123;
var G__37375 = (i__37124 + (1));
seq__37119 = G__37372;
chunk__37122 = G__37373;
count__37123 = G__37374;
i__37124 = G__37375;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37119);
if(temp__5804__auto__){
var seq__37119__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37119__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37119__$1);
var G__37379 = cljs.core.chunk_rest(seq__37119__$1);
var G__37380 = c__5525__auto__;
var G__37381 = cljs.core.count(c__5525__auto__);
var G__37382 = (0);
seq__37119 = G__37379;
chunk__37122 = G__37380;
count__37123 = G__37381;
i__37124 = G__37382;
continue;
} else {
var action = cljs.core.first(seq__37119__$1);
nodename.stately.comms.dispatch(action);


var G__37387 = cljs.core.next(seq__37119__$1);
var G__37388 = null;
var G__37389 = (0);
var G__37390 = (0);
seq__37119 = G__37387;
chunk__37122 = G__37388;
count__37123 = G__37389;
i__37124 = G__37390;
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
var seq__37137 = cljs.core.seq(actions);
var chunk__37138 = null;
var count__37139 = (0);
var i__37140 = (0);
while(true){
if((i__37140 < count__37139)){
var action = chunk__37138.cljs$core$IIndexed$_nth$arity$2(null, i__37140);
nodename.stately.comms.dispatch(action);


var G__37391 = seq__37137;
var G__37392 = chunk__37138;
var G__37394 = count__37139;
var G__37396 = (i__37140 + (1));
seq__37137 = G__37391;
chunk__37138 = G__37392;
count__37139 = G__37394;
i__37140 = G__37396;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37137);
if(temp__5804__auto__){
var seq__37137__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37137__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37137__$1);
var G__37397 = cljs.core.chunk_rest(seq__37137__$1);
var G__37398 = c__5525__auto__;
var G__37399 = cljs.core.count(c__5525__auto__);
var G__37400 = (0);
seq__37137 = G__37397;
chunk__37138 = G__37398;
count__37139 = G__37399;
i__37140 = G__37400;
continue;
} else {
var action = cljs.core.first(seq__37137__$1);
nodename.stately.comms.dispatch(action);


var G__37401 = cljs.core.next(seq__37137__$1);
var G__37402 = null;
var G__37403 = (0);
var G__37404 = (0);
seq__37137 = G__37401;
chunk__37138 = G__37402;
count__37139 = G__37403;
i__37140 = G__37404;
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
return cljs.core.some((function (p1__37154_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p1__37154_SHARP_),cljs.core.name(fsm_key))){
return p1__37154_SHARP_;
} else {
return null;
}
}),all_start_states);
});
nodename.stately.chart.perform_entry_actions = (function nodename$stately$chart$perform_entry_actions(state_data,values){
var actions = new cljs.core.Keyword(null,"entry-actions","entry-actions",493602529).cljs$core$IFn$_invoke$arity$1(state_data);
var seq__37156 = cljs.core.seq(actions);
var chunk__37157 = null;
var count__37158 = (0);
var i__37159 = (0);
while(true){
if((i__37159 < count__37158)){
var action = chunk__37157.cljs$core$IIndexed$_nth$arity$2(null, i__37159);
nodename.stately.comms.dispatch(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(action,values)));


var G__37419 = seq__37156;
var G__37420 = chunk__37157;
var G__37421 = count__37158;
var G__37422 = (i__37159 + (1));
seq__37156 = G__37419;
chunk__37157 = G__37420;
count__37158 = G__37421;
i__37159 = G__37422;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37156);
if(temp__5804__auto__){
var seq__37156__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37156__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37156__$1);
var G__37424 = cljs.core.chunk_rest(seq__37156__$1);
var G__37425 = c__5525__auto__;
var G__37426 = cljs.core.count(c__5525__auto__);
var G__37427 = (0);
seq__37156 = G__37424;
chunk__37157 = G__37425;
count__37158 = G__37426;
i__37159 = G__37427;
continue;
} else {
var action = cljs.core.first(seq__37156__$1);
nodename.stately.comms.dispatch(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(action,values)));


var G__37428 = cljs.core.next(seq__37156__$1);
var G__37429 = null;
var G__37430 = (0);
var G__37431 = (0);
seq__37156 = G__37428;
chunk__37157 = G__37429;
count__37158 = G__37430;
i__37159 = G__37431;
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
var seq__37175 = cljs.core.seq(actions);
var chunk__37176 = null;
var count__37177 = (0);
var i__37178 = (0);
while(true){
if((i__37178 < count__37177)){
var action = chunk__37176.cljs$core$IIndexed$_nth$arity$2(null, i__37178);
nodename.stately.comms.dispatch(action);


var G__37432 = seq__37175;
var G__37433 = chunk__37176;
var G__37434 = count__37177;
var G__37435 = (i__37178 + (1));
seq__37175 = G__37432;
chunk__37176 = G__37433;
count__37177 = G__37434;
i__37178 = G__37435;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37175);
if(temp__5804__auto__){
var seq__37175__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37175__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37175__$1);
var G__37436 = cljs.core.chunk_rest(seq__37175__$1);
var G__37437 = c__5525__auto__;
var G__37438 = cljs.core.count(c__5525__auto__);
var G__37439 = (0);
seq__37175 = G__37436;
chunk__37176 = G__37437;
count__37177 = G__37438;
i__37178 = G__37439;
continue;
} else {
var action = cljs.core.first(seq__37175__$1);
nodename.stately.comms.dispatch(action);


var G__37440 = cljs.core.next(seq__37175__$1);
var G__37441 = null;
var G__37442 = (0);
var G__37443 = (0);
seq__37175 = G__37440;
chunk__37176 = G__37441;
count__37177 = G__37442;
i__37178 = G__37443;
continue;
}
} else {
return null;
}
}
break;
}
});
nodename.stately.chart.enter_components_start_states = (function nodename$stately$chart$enter_components_start_states(state,active_states,p__37187){
var map__37188 = p__37187;
var map__37188__$1 = cljs.core.__destructure_map(map__37188);
var chart_data = map__37188__$1;
var all_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37188__$1,new cljs.core.Keyword(null,"all-states","all-states",1465146122));
var all_start_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37188__$1,new cljs.core.Keyword(null,"all-start-states","all-start-states",1423270630));
var state_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_states,state);
var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_data,new cljs.core.Keyword(null,"components","components",-1073188942));
var f = (function (active_states__$1,component){
var start_state = nodename.stately.chart.get_start_state(component,all_start_states);
if(cljs.core.truth_(start_state)){
var G__37190 = start_state;
var G__37191 = cljs.core.PersistentVector.EMPTY;
var G__37192 = active_states__$1;
var G__37193 = chart_data;
return (nodename.stately.chart.enter_state.cljs$core$IFn$_invoke$arity$4 ? nodename.stately.chart.enter_state.cljs$core$IFn$_invoke$arity$4(G__37190,G__37191,G__37192,G__37193) : nodename.stately.chart.enter_state.call(null, G__37190,G__37191,G__37192,G__37193));
} else {
return active_states__$1;
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,active_states,components);
});
nodename.stately.chart.enter_state = (function nodename$stately$chart$enter_state(state,values,active_states,p__37198){
var map__37200 = p__37198;
var map__37200__$1 = cljs.core.__destructure_map(map__37200);
var chart_data = map__37200__$1;
var all_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37200__$1,new cljs.core.Keyword(null,"all-states","all-states",1465146122));
var state_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_states,state);
var active_states__$1 = nodename.stately.chart.set_active(active_states,state,true);
nodename.stately.chart.perform_entry_actions(state_data,values);

nodename.stately.chart.start_activities(state_data);

return nodename.stately.chart.enter_components_start_states(state,active_states__$1,chart_data);
});
nodename.stately.chart.make_transition_handler = (function nodename$stately$chart$make_transition_handler(state_and_trigger,transition,p__37203){
var map__37204 = p__37203;
var map__37204__$1 = cljs.core.__destructure_map(map__37204);
var chart_data = map__37204__$1;
var all_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37204__$1,new cljs.core.Keyword(null,"all-states","all-states",1465146122));
return (function() { 
var nodename$stately$chart$make_transition_handler_$_handler__delegate = function (db,p__37205){
var vec__37206 = p__37205;
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37206,(0),null);
var vec__37209 = state_and_trigger;
var current_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37209,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37209,(1),null);
var map__37212 = transition;
var map__37212__$1 = cljs.core.__destructure_map(map__37212);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37212__$1,new cljs.core.Keyword(null,"condition","condition",1668437652),cljs.core.constantly(true));
if(cljs.core.not((condition.cljs$core$IFn$_invoke$arity$2 ? condition.cljs$core$IFn$_invoke$arity$2(db,values) : condition.call(null, db,values)))){
nodename.stately.chart.show_condition_not_met(state_and_trigger,current_state,condition);

return db;
} else {
var map__37221 = transition;
var map__37221__$1 = cljs.core.__destructure_map(map__37221);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37221__$1,new cljs.core.Keyword(null,"target","target",253001721));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37221__$1,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.PersistentVector.EMPTY);
var target__$1 = ((cljs.core.fn_QMARK_(target))?(target.cljs$core$IFn$_invoke$arity$2 ? target.cljs$core$IFn$_invoke$arity$2(db,values) : target.call(null, db,values)):target);
var vec__37222 = nodename.stately.tree.lca_path(current_state,target__$1);
var exit_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37222,(0),null);
var entry_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37222,(1),null);
var actions__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37201_SHARP_){
if(cljs.core.truth_(values)){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__37201_SHARP_,values));
} else {
return p1__37201_SHARP_;
}
}),actions);
var active_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"active-states","active-states",-911704047));
var active_states__$1 = nodename.stately.chart.exit_state(cljs.core.last(exit_path),all_states,active_states);
var active_states__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (active_states__$2,state){
return nodename.stately.chart.enter_state(state,values,active_states__$2,chart_data);
}),active_states__$1,entry_path);
var seq__37225_37655 = cljs.core.seq(actions__$1);
var chunk__37226_37656 = null;
var count__37227_37657 = (0);
var i__37228_37658 = (0);
while(true){
if((i__37228_37658 < count__37227_37657)){
var action_37659 = chunk__37226_37656.cljs$core$IIndexed$_nth$arity$2(null, i__37228_37658);
nodename.stately.comms.dispatch(action_37659);


var G__37660 = seq__37225_37655;
var G__37661 = chunk__37226_37656;
var G__37662 = count__37227_37657;
var G__37663 = (i__37228_37658 + (1));
seq__37225_37655 = G__37660;
chunk__37226_37656 = G__37661;
count__37227_37657 = G__37662;
i__37228_37658 = G__37663;
continue;
} else {
var temp__5804__auto___37664 = cljs.core.seq(seq__37225_37655);
if(temp__5804__auto___37664){
var seq__37225_37665__$1 = temp__5804__auto___37664;
if(cljs.core.chunked_seq_QMARK_(seq__37225_37665__$1)){
var c__5525__auto___37666 = cljs.core.chunk_first(seq__37225_37665__$1);
var G__37667 = cljs.core.chunk_rest(seq__37225_37665__$1);
var G__37668 = c__5525__auto___37666;
var G__37669 = cljs.core.count(c__5525__auto___37666);
var G__37670 = (0);
seq__37225_37655 = G__37667;
chunk__37226_37656 = G__37668;
count__37227_37657 = G__37669;
i__37228_37658 = G__37670;
continue;
} else {
var action_37671 = cljs.core.first(seq__37225_37665__$1);
nodename.stately.comms.dispatch(action_37671);


var G__37672 = cljs.core.next(seq__37225_37665__$1);
var G__37673 = null;
var G__37674 = (0);
var G__37675 = (0);
seq__37225_37655 = G__37672;
chunk__37226_37656 = G__37673;
count__37227_37657 = G__37674;
i__37228_37658 = G__37675;
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
var p__37205 = null;
if (arguments.length > 1) {
var G__37676__i = 0, G__37676__a = new Array(arguments.length -  1);
while (G__37676__i < G__37676__a.length) {G__37676__a[G__37676__i] = arguments[G__37676__i + 1]; ++G__37676__i;}
  p__37205 = new cljs.core.IndexedSeq(G__37676__a,0,null);
} 
return nodename$stately$chart$make_transition_handler_$_handler__delegate.call(this,db,p__37205);};
nodename$stately$chart$make_transition_handler_$_handler.cljs$lang$maxFixedArity = 1;
nodename$stately$chart$make_transition_handler_$_handler.cljs$lang$applyTo = (function (arglist__37677){
var db = cljs.core.first(arglist__37677);
var p__37205 = cljs.core.rest(arglist__37677);
return nodename$stately$chart$make_transition_handler_$_handler__delegate(db,p__37205);
});
nodename$stately$chart$make_transition_handler_$_handler.cljs$core$IFn$_invoke$arity$variadic = nodename$stately$chart$make_transition_handler_$_handler__delegate;
return nodename$stately$chart$make_transition_handler_$_handler;
})()
;
});
nodename.stately.chart.register_transition_handlers = (function nodename$stately$chart$register_transition_handlers(middleware,p__37229){
var map__37230 = p__37229;
var map__37230__$1 = cljs.core.__destructure_map(map__37230);
var chart_data = map__37230__$1;
var all_transitions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37230__$1,new cljs.core.Keyword(null,"all-transitions","all-transitions",1714245168));
var seq__37231 = cljs.core.seq(all_transitions);
var chunk__37232 = null;
var count__37233 = (0);
var i__37234 = (0);
while(true){
if((i__37234 < count__37233)){
var vec__37242 = chunk__37232.cljs$core$IIndexed$_nth$arity$2(null, i__37234);
var trigger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37242,(0),null);
var transition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37242,(1),null);
var handler_37681 = nodename.stately.chart.make_transition_handler(trigger,transition,chart_data);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger,middleware,handler_37681);


var G__37682 = seq__37231;
var G__37683 = chunk__37232;
var G__37684 = count__37233;
var G__37685 = (i__37234 + (1));
seq__37231 = G__37682;
chunk__37232 = G__37683;
count__37233 = G__37684;
i__37234 = G__37685;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37231);
if(temp__5804__auto__){
var seq__37231__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37231__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37231__$1);
var G__37686 = cljs.core.chunk_rest(seq__37231__$1);
var G__37687 = c__5525__auto__;
var G__37688 = cljs.core.count(c__5525__auto__);
var G__37689 = (0);
seq__37231 = G__37686;
chunk__37232 = G__37687;
count__37233 = G__37688;
i__37234 = G__37689;
continue;
} else {
var vec__37251 = cljs.core.first(seq__37231__$1);
var trigger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37251,(0),null);
var transition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37251,(1),null);
var handler_37690 = nodename.stately.chart.make_transition_handler(trigger,transition,chart_data);
nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3(trigger,middleware,handler_37690);


var G__37691 = cljs.core.next(seq__37231__$1);
var G__37692 = null;
var G__37693 = (0);
var G__37694 = (0);
seq__37231 = G__37691;
chunk__37232 = G__37692;
count__37233 = G__37693;
i__37234 = G__37694;
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
