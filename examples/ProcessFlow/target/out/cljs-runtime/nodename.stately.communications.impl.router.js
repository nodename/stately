goog.provide('nodename.stately.communications.impl.router');
nodename.stately.communications.impl.router.event_queue = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
/**
 * Cross-browser wrapper for requestAnimationFrame
 */
nodename.stately.communications.impl.router.requestAnimationFrame = (function nodename$stately$communications$impl$router$requestAnimationFrame(callback){
if(cljs.core.truth_(window.requestAnimationFrame)){
return window.requestAnimationFrame(callback);
} else {
if(cljs.core.truth_(window.webkitRequestAnimationFrame)){
return window.webkitRequestAnimiationFrame(callback);
} else {
if(cljs.core.truth_(window.mozRequestAnimationFrame)){
return window.mozRequestAnimationFrame(callback);
} else {
if(cljs.core.truth_(window.msRequestAnimationFrame)){
return window.msRequestAnimationFrame(callback);
} else {
return null;
}
}
}
}
});
nodename.stately.communications.impl.router.run_queue = (function nodename$stately$communications$impl$router$run_queue(){
var tick = (function nodename$stately$communications$impl$router$run_queue_$_tick(){
var c__10424__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_45288){
var state_val_45289 = (state_45288[(1)]);
if((state_val_45289 === (1))){
var state_45288__$1 = state_45288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45288__$1,(2),nodename.stately.communications.impl.router.event_queue);
} else {
if((state_val_45289 === (2))){
var inst_45284 = (state_45288[(2)]);
var inst_45285 = nodename.stately.communications.impl.handlers.handle(inst_45284);
var inst_45286 = nodename.stately.communications.impl.router.requestAnimationFrame(nodename$stately$communications$impl$router$run_queue_$_tick);
var state_45288__$1 = (function (){var statearr_45292 = state_45288;
(statearr_45292[(7)] = inst_45285);

return statearr_45292;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45288__$1,inst_45286);
} else {
return null;
}
}
});
return (function() {
var nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto__ = null;
var nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto____0 = (function (){
var statearr_45293 = [null,null,null,null,null,null,null,null];
(statearr_45293[(0)] = nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto__);

(statearr_45293[(1)] = (1));

return statearr_45293;
});
var nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto____1 = (function (state_45288){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_45288);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e45295){var ex__10333__auto__ = e45295;
var statearr_45296_45303 = state_45288;
(statearr_45296_45303[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_45288[(4)]))){
var statearr_45298_45304 = state_45288;
(statearr_45298_45304[(1)] = cljs.core.first((state_45288[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45305 = state_45288;
state_45288 = G__45305;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto__ = function(state_45288){
switch(arguments.length){
case 0:
return nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto____0.call(this);
case 1:
return nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto____1.call(this,state_45288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto____0;
nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto____1;
return nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_45299 = f__10425__auto__();
(statearr_45299[(6)] = c__10424__auto__);

return statearr_45299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));

return c__10424__auto__;
});
return tick();
});
nodename.stately.communications.impl.router.dispatch = (function nodename$stately$communications$impl$router$dispatch(event_v){
if((event_v == null)){
nodename.stately.communications.impl.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"dispatch\" is ignoring a nil event."], 0));
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(nodename.stately.communications.impl.router.event_queue,event_v);
}

return null;
});

//# sourceMappingURL=nodename.stately.communications.impl.router.js.map
