goog.provide('nodename.stately.comms');
nodename.stately.comms.re_frame_comms = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),nodename.stately.communications.re_frame_api.dispatch,new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"register-handler","register-handler",628654776),nodename.stately.communications.re_frame_api.register_handler,new cljs.core.Keyword(null,"lookup-handler","lookup-handler",-72721902),nodename.stately.communications.re_frame_api.lookup_handler,new cljs.core.Keyword(null,"log","log",-1595516004),nodename.stately.communications.re_frame_api.log,new cljs.core.Keyword(null,"warn","warn",-436710552),nodename.stately.communications.re_frame_api.warn,new cljs.core.Keyword(null,"error","error",-978969032),nodename.stately.communications.re_frame_api.error,new cljs.core.Keyword(null,"app-db","app-db",865606302),nodename.stately.communications.re_frame_api.app_db], null);
nodename.stately.comms.standalone_comms = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),nodename.stately.communications.standalone_api.dispatch,new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027),nodename.stately.communications.standalone_api.run_queue,new cljs.core.Keyword(null,"register-handler","register-handler",628654776),nodename.stately.communications.standalone_api.register_handler,new cljs.core.Keyword(null,"lookup-handler","lookup-handler",-72721902),nodename.stately.communications.standalone_api.lookup_handler,new cljs.core.Keyword(null,"log","log",-1595516004),nodename.stately.communications.standalone_api.log,new cljs.core.Keyword(null,"warn","warn",-436710552),nodename.stately.communications.standalone_api.warn,new cljs.core.Keyword(null,"error","error",-978969032),nodename.stately.communications.standalone_api.error,new cljs.core.Keyword(null,"app-db","app-db",865606302),nodename.stately.communications.standalone_api.app_db], null);
nodename.stately.comms.comms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(nodename.stately.comms.standalone_comms);
nodename.stately.comms.app_db = new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.comms.comms));
/**
 * Change the set (subset?) of comms functions used by stately.
 *   'new-comms' should be a map which looks like default-comms
 */
nodename.stately.comms.set_comms_BANG_ = (function nodename$stately$comms$set_comms_BANG_(new_comms){
if(cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_comms)),cljs.core.set(cljs.core.keys(nodename.stately.comms.standalone_comms))))){
} else {
throw (new Error(["Assert failed: ","Unknown keys in new-comms","\n","(empty? (difference (set (keys new-comms)) (set (keys standalone-comms))))"].join('')));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nodename.stately.comms.comms,cljs.core.merge,new_comms);

return (
nodename.stately.comms.app_db = new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.comms.comms)))
;
});
nodename.stately.comms.set_re_frame_comms_BANG_ = (function nodename$stately$comms$set_re_frame_comms_BANG_(){
return nodename.stately.comms.set_comms_BANG_(nodename.stately.comms.re_frame_comms);
});
nodename.stately.comms.set_standalone_comms_BANG_ = (function nodename$stately$comms$set_standalone_comms_BANG_(){
return nodename.stately.comms.set_comms_BANG_(nodename.stately.comms.standalone_comms);
});
nodename.stately.comms.use_re_frame_BANG_ = (function nodename$stately$comms$use_re_frame_BANG_(yesno){
if(cljs.core.truth_(yesno)){
return nodename.stately.comms.set_re_frame_comms_BANG_();
} else {
return nodename.stately.comms.set_standalone_comms_BANG_();
}
});
nodename.stately.comms.dispatch = (function nodename$stately$comms$dispatch(event_v){
var fexpr__55383 = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.comms.comms));
return (fexpr__55383.cljs$core$IFn$_invoke$arity$1 ? fexpr__55383.cljs$core$IFn$_invoke$arity$1(event_v) : fexpr__55383.call(null, event_v));
});
nodename.stately.comms.run_queue = (function nodename$stately$comms$run_queue(){
var fexpr__55390 = new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.comms.comms));
return (fexpr__55390.cljs$core$IFn$_invoke$arity$0 ? fexpr__55390.cljs$core$IFn$_invoke$arity$0() : fexpr__55390.call(null, ));
});
nodename.stately.comms.register_handler = (function nodename$stately$comms$register_handler(var_args){
var G__55395 = arguments.length;
switch (G__55395) {
case 2:
return nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
var fexpr__55404 = new cljs.core.Keyword(null,"register-handler","register-handler",628654776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.comms.comms));
return (fexpr__55404.cljs$core$IFn$_invoke$arity$2 ? fexpr__55404.cljs$core$IFn$_invoke$arity$2(id,handler) : fexpr__55404.call(null, id,handler));
}));

(nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3 = (function (id,middleware,handler){
var fexpr__55408 = new cljs.core.Keyword(null,"register-handler","register-handler",628654776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.comms.comms));
return (fexpr__55408.cljs$core$IFn$_invoke$arity$3 ? fexpr__55408.cljs$core$IFn$_invoke$arity$3(id,middleware,handler) : fexpr__55408.call(null, id,middleware,handler));
}));

(nodename.stately.comms.register_handler.cljs$lang$maxFixedArity = 3);

nodename.stately.comms.lookup_handler = (function nodename$stately$comms$lookup_handler(event_id){
var fexpr__55421 = new cljs.core.Keyword(null,"lookup-handler","lookup-handler",-72721902).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.comms.comms));
return (fexpr__55421.cljs$core$IFn$_invoke$arity$1 ? fexpr__55421.cljs$core$IFn$_invoke$arity$1(event_id) : fexpr__55421.call(null, event_id));
});
nodename.stately.comms.log = (function nodename$stately$comms$log(var_args){
var args__5732__auto__ = [];
var len__5726__auto___55512 = arguments.length;
var i__5727__auto___55513 = (0);
while(true){
if((i__5727__auto___55513 < len__5726__auto___55512)){
args__5732__auto__.push((arguments[i__5727__auto___55513]));

var G__55517 = (i__5727__auto___55513 + (1));
i__5727__auto___55513 = G__55517;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.comms.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.comms.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__55438 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null);
var fexpr__55437 = new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.comms.comms));
return (fexpr__55437.cljs$core$IFn$_invoke$arity$1 ? fexpr__55437.cljs$core$IFn$_invoke$arity$1(G__55438) : fexpr__55437.call(null, G__55438));
}));

(nodename.stately.comms.log.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.comms.log.cljs$lang$applyTo = (function (seq55428){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55428));
}));

nodename.stately.comms.warn = (function nodename$stately$comms$warn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___55518 = arguments.length;
var i__5727__auto___55519 = (0);
while(true){
if((i__5727__auto___55519 < len__5726__auto___55518)){
args__5732__auto__.push((arguments[i__5727__auto___55519]));

var G__55520 = (i__5727__auto___55519 + (1));
i__5727__auto___55519 = G__55520;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.comms.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.comms.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__55459 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null);
var fexpr__55458 = new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.comms.comms));
return (fexpr__55458.cljs$core$IFn$_invoke$arity$1 ? fexpr__55458.cljs$core$IFn$_invoke$arity$1(G__55459) : fexpr__55458.call(null, G__55459));
}));

(nodename.stately.comms.warn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.comms.warn.cljs$lang$applyTo = (function (seq55444){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55444));
}));

nodename.stately.comms.error = (function nodename$stately$comms$error(var_args){
var args__5732__auto__ = [];
var len__5726__auto___55521 = arguments.length;
var i__5727__auto___55522 = (0);
while(true){
if((i__5727__auto___55522 < len__5726__auto___55521)){
args__5732__auto__.push((arguments[i__5727__auto___55522]));

var G__55523 = (i__5727__auto___55522 + (1));
i__5727__auto___55522 = G__55523;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.comms.error.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.comms.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__55488 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null);
var fexpr__55487 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.comms.comms));
return (fexpr__55487.cljs$core$IFn$_invoke$arity$1 ? fexpr__55487.cljs$core$IFn$_invoke$arity$1(G__55488) : fexpr__55487.call(null, G__55488));
}));

(nodename.stately.comms.error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.comms.error.cljs$lang$applyTo = (function (seq55472){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55472));
}));


//# sourceMappingURL=nodename.stately.comms.js.map
