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
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_64152){
var state_val_64153 = (state_64152[(1)]);
if((state_val_64153 === (1))){
var state_64152__$1 = state_64152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64152__$1,(2),nodename.stately.communications.impl.router.event_queue);
} else {
if((state_val_64153 === (2))){
var inst_64148 = (state_64152[(2)]);
var inst_64149 = nodename.stately.communications.impl.handlers.handle(inst_64148);
var inst_64150 = nodename.stately.communications.impl.router.requestAnimationFrame(nodename$stately$communications$impl$router$run_queue_$_tick);
var state_64152__$1 = (function (){var statearr_64154 = state_64152;
(statearr_64154[(7)] = inst_64149);

return statearr_64154;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64152__$1,inst_64150);
} else {
return null;
}
}
});
return (function() {
var nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto__ = null;
var nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto____0 = (function (){
var statearr_64155 = [null,null,null,null,null,null,null,null];
(statearr_64155[(0)] = nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto__);

(statearr_64155[(1)] = (1));

return statearr_64155;
});
var nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto____1 = (function (state_64152){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_64152);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e64156){var ex__10333__auto__ = e64156;
var statearr_64157_64178 = state_64152;
(statearr_64157_64178[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_64152[(4)]))){
var statearr_64158_64179 = state_64152;
(statearr_64158_64179[(1)] = cljs.core.first((state_64152[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64180 = state_64152;
state_64152 = G__64180;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto__ = function(state_64152){
switch(arguments.length){
case 0:
return nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto____0.call(this);
case 1:
return nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto____1.call(this,state_64152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto____0;
nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto____1;
return nodename$stately$communications$impl$router$run_queue_$_tick_$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_64162 = f__10425__auto__();
(statearr_64162[(6)] = c__10424__auto__);

return statearr_64162;
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
