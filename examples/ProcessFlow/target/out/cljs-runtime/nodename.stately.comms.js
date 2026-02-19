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
var fexpr__45704 = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.comms.comms));
return (fexpr__45704.cljs$core$IFn$_invoke$arity$1 ? fexpr__45704.cljs$core$IFn$_invoke$arity$1(event_v) : fexpr__45704.call(null, event_v));
});
nodename.stately.comms.run_queue = (function nodename$stately$comms$run_queue(){
var fexpr__45709 = new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.comms.comms));
return (fexpr__45709.cljs$core$IFn$_invoke$arity$0 ? fexpr__45709.cljs$core$IFn$_invoke$arity$0() : fexpr__45709.call(null, ));
});
nodename.stately.comms.register_handler = (function nodename$stately$comms$register_handler(var_args){
var G__45712 = arguments.length;
switch (G__45712) {
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
var fexpr__45721 = new cljs.core.Keyword(null,"register-handler","register-handler",628654776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.comms.comms));
return (fexpr__45721.cljs$core$IFn$_invoke$arity$2 ? fexpr__45721.cljs$core$IFn$_invoke$arity$2(id,handler) : fexpr__45721.call(null, id,handler));
}));

(nodename.stately.comms.register_handler.cljs$core$IFn$_invoke$arity$3 = (function (id,middleware,handler){
var fexpr__45729 = new cljs.core.Keyword(null,"register-handler","register-handler",628654776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.comms.comms));
return (fexpr__45729.cljs$core$IFn$_invoke$arity$3 ? fexpr__45729.cljs$core$IFn$_invoke$arity$3(id,middleware,handler) : fexpr__45729.call(null, id,middleware,handler));
}));

(nodename.stately.comms.register_handler.cljs$lang$maxFixedArity = 3);

nodename.stately.comms.lookup_handler = (function nodename$stately$comms$lookup_handler(event_id){
var fexpr__45751 = new cljs.core.Keyword(null,"lookup-handler","lookup-handler",-72721902).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.comms.comms));
return (fexpr__45751.cljs$core$IFn$_invoke$arity$1 ? fexpr__45751.cljs$core$IFn$_invoke$arity$1(event_id) : fexpr__45751.call(null, event_id));
});
nodename.stately.comms.log = (function nodename$stately$comms$log(var_args){
var args__5732__auto__ = [];
var len__5726__auto___45820 = arguments.length;
var i__5727__auto___45821 = (0);
while(true){
if((i__5727__auto___45821 < len__5726__auto___45820)){
args__5732__auto__.push((arguments[i__5727__auto___45821]));

var G__45822 = (i__5727__auto___45821 + (1));
i__5727__auto___45821 = G__45822;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.comms.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.comms.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__45765 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null);
var fexpr__45764 = new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.comms.comms));
return (fexpr__45764.cljs$core$IFn$_invoke$arity$1 ? fexpr__45764.cljs$core$IFn$_invoke$arity$1(G__45765) : fexpr__45764.call(null, G__45765));
}));

(nodename.stately.comms.log.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.comms.log.cljs$lang$applyTo = (function (seq45755){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45755));
}));

nodename.stately.comms.warn = (function nodename$stately$comms$warn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___45827 = arguments.length;
var i__5727__auto___45828 = (0);
while(true){
if((i__5727__auto___45828 < len__5726__auto___45827)){
args__5732__auto__.push((arguments[i__5727__auto___45828]));

var G__45829 = (i__5727__auto___45828 + (1));
i__5727__auto___45828 = G__45829;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.comms.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.comms.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__45784 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null);
var fexpr__45783 = new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.comms.comms));
return (fexpr__45783.cljs$core$IFn$_invoke$arity$1 ? fexpr__45783.cljs$core$IFn$_invoke$arity$1(G__45784) : fexpr__45783.call(null, G__45784));
}));

(nodename.stately.comms.warn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.comms.warn.cljs$lang$applyTo = (function (seq45773){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45773));
}));

nodename.stately.comms.error = (function nodename$stately$comms$error(var_args){
var args__5732__auto__ = [];
var len__5726__auto___45831 = arguments.length;
var i__5727__auto___45832 = (0);
while(true){
if((i__5727__auto___45832 < len__5726__auto___45831)){
args__5732__auto__.push((arguments[i__5727__auto___45832]));

var G__45833 = (i__5727__auto___45832 + (1));
i__5727__auto___45832 = G__45833;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return nodename.stately.comms.error.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(nodename.stately.comms.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__45796 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null);
var fexpr__45795 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nodename.stately.comms.comms));
return (fexpr__45795.cljs$core$IFn$_invoke$arity$1 ? fexpr__45795.cljs$core$IFn$_invoke$arity$1(G__45796) : fexpr__45795.call(null, G__45796));
}));

(nodename.stately.comms.error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nodename.stately.comms.error.cljs$lang$applyTo = (function (seq45789){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45789));
}));


//# sourceMappingURL=nodename.stately.comms.js.map
