goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61273 = (function (f,blockable,meta61274){
this.f = f;
this.blockable = blockable;
this.meta61274 = meta61274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61275,meta61274__$1){
var self__ = this;
var _61275__$1 = this;
return (new cljs.core.async.t_cljs$core$async61273(self__.f,self__.blockable,meta61274__$1));
}));

(cljs.core.async.t_cljs$core$async61273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61275){
var self__ = this;
var _61275__$1 = this;
return self__.meta61274;
}));

(cljs.core.async.t_cljs$core$async61273.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async61273.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async61273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async61273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta61274","meta61274",-1391804901,null)], null);
}));

(cljs.core.async.t_cljs$core$async61273.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61273");

(cljs.core.async.t_cljs$core$async61273.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async61273");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61273.
 */
cljs.core.async.__GT_t_cljs$core$async61273 = (function cljs$core$async$__GT_t_cljs$core$async61273(f,blockable,meta61274){
return (new cljs.core.async.t_cljs$core$async61273(f,blockable,meta61274));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__61267 = arguments.length;
switch (G__61267) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async61273(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__61284 = arguments.length;
switch (G__61284) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__61298 = arguments.length;
switch (G__61298) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__61307 = arguments.length;
switch (G__61307) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_64190 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_64190) : fn1.call(null, val_64190));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_64190) : fn1.call(null, val_64190));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__61316 = arguments.length;
switch (G__61316) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___64199 = n;
var x_64200 = (0);
while(true){
if((x_64200 < n__5593__auto___64199)){
(a[x_64200] = x_64200);

var G__64201 = (x_64200 + (1));
x_64200 = G__64201;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61338 = (function (flag,meta61339){
this.flag = flag;
this.meta61339 = meta61339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61340,meta61339__$1){
var self__ = this;
var _61340__$1 = this;
return (new cljs.core.async.t_cljs$core$async61338(self__.flag,meta61339__$1));
}));

(cljs.core.async.t_cljs$core$async61338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61340){
var self__ = this;
var _61340__$1 = this;
return self__.meta61339;
}));

(cljs.core.async.t_cljs$core$async61338.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61338.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async61338.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async61338.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async61338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta61339","meta61339",1814845620,null)], null);
}));

(cljs.core.async.t_cljs$core$async61338.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61338");

(cljs.core.async.t_cljs$core$async61338.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async61338");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61338.
 */
cljs.core.async.__GT_t_cljs$core$async61338 = (function cljs$core$async$__GT_t_cljs$core$async61338(flag,meta61339){
return (new cljs.core.async.t_cljs$core$async61338(flag,meta61339));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async61338(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61344 = (function (flag,cb,meta61345){
this.flag = flag;
this.cb = cb;
this.meta61345 = meta61345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61346,meta61345__$1){
var self__ = this;
var _61346__$1 = this;
return (new cljs.core.async.t_cljs$core$async61344(self__.flag,self__.cb,meta61345__$1));
}));

(cljs.core.async.t_cljs$core$async61344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61346){
var self__ = this;
var _61346__$1 = this;
return self__.meta61345;
}));

(cljs.core.async.t_cljs$core$async61344.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async61344.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async61344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async61344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta61345","meta61345",-1343265574,null)], null);
}));

(cljs.core.async.t_cljs$core$async61344.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61344");

(cljs.core.async.t_cljs$core$async61344.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async61344");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61344.
 */
cljs.core.async.__GT_t_cljs$core$async61344 = (function cljs$core$async$__GT_t_cljs$core$async61344(flag,cb,meta61345){
return (new cljs.core.async.t_cljs$core$async61344(flag,cb,meta61345));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async61344(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__61358_SHARP_){
var G__61373 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61358_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__61373) : fret.call(null, G__61373));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__61359_SHARP_){
var G__61374 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61359_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__61374) : fret.call(null, G__61374));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__64222 = (i + (1));
i = G__64222;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___64233 = arguments.length;
var i__5727__auto___64234 = (0);
while(true){
if((i__5727__auto___64234 < len__5726__auto___64233)){
args__5732__auto__.push((arguments[i__5727__auto___64234]));

var G__64239 = (i__5727__auto___64234 + (1));
i__5727__auto___64234 = G__64239;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__61392){
var map__61394 = p__61392;
var map__61394__$1 = cljs.core.__destructure_map(map__61394);
var opts = map__61394__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq61387){
var G__61388 = cljs.core.first(seq61387);
var seq61387__$1 = cljs.core.next(seq61387);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61388,seq61387__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__61410 = arguments.length;
switch (G__61410) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10424__auto___64250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_61450){
var state_val_61451 = (state_61450[(1)]);
if((state_val_61451 === (7))){
var inst_61445 = (state_61450[(2)]);
var state_61450__$1 = state_61450;
var statearr_61455_64251 = state_61450__$1;
(statearr_61455_64251[(2)] = inst_61445);

(statearr_61455_64251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (1))){
var state_61450__$1 = state_61450;
var statearr_61457_64253 = state_61450__$1;
(statearr_61457_64253[(2)] = null);

(statearr_61457_64253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (4))){
var inst_61425 = (state_61450[(7)]);
var inst_61425__$1 = (state_61450[(2)]);
var inst_61426 = (inst_61425__$1 == null);
var state_61450__$1 = (function (){var statearr_61458 = state_61450;
(statearr_61458[(7)] = inst_61425__$1);

return statearr_61458;
})();
if(cljs.core.truth_(inst_61426)){
var statearr_61459_64257 = state_61450__$1;
(statearr_61459_64257[(1)] = (5));

} else {
var statearr_61460_64259 = state_61450__$1;
(statearr_61460_64259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (13))){
var state_61450__$1 = state_61450;
var statearr_61461_64261 = state_61450__$1;
(statearr_61461_64261[(2)] = null);

(statearr_61461_64261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (6))){
var inst_61425 = (state_61450[(7)]);
var state_61450__$1 = state_61450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61450__$1,(11),to,inst_61425);
} else {
if((state_val_61451 === (3))){
var inst_61447 = (state_61450[(2)]);
var state_61450__$1 = state_61450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61450__$1,inst_61447);
} else {
if((state_val_61451 === (12))){
var state_61450__$1 = state_61450;
var statearr_61462_64264 = state_61450__$1;
(statearr_61462_64264[(2)] = null);

(statearr_61462_64264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (2))){
var state_61450__$1 = state_61450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61450__$1,(4),from);
} else {
if((state_val_61451 === (11))){
var inst_61437 = (state_61450[(2)]);
var state_61450__$1 = state_61450;
if(cljs.core.truth_(inst_61437)){
var statearr_61464_64267 = state_61450__$1;
(statearr_61464_64267[(1)] = (12));

} else {
var statearr_61465_64269 = state_61450__$1;
(statearr_61465_64269[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (9))){
var state_61450__$1 = state_61450;
var statearr_61466_64271 = state_61450__$1;
(statearr_61466_64271[(2)] = null);

(statearr_61466_64271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (5))){
var state_61450__$1 = state_61450;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61467_64272 = state_61450__$1;
(statearr_61467_64272[(1)] = (8));

} else {
var statearr_61468_64273 = state_61450__$1;
(statearr_61468_64273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (14))){
var inst_61443 = (state_61450[(2)]);
var state_61450__$1 = state_61450;
var statearr_61469_64274 = state_61450__$1;
(statearr_61469_64274[(2)] = inst_61443);

(statearr_61469_64274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (10))){
var inst_61433 = (state_61450[(2)]);
var state_61450__$1 = state_61450;
var statearr_61473_64277 = state_61450__$1;
(statearr_61473_64277[(2)] = inst_61433);

(statearr_61473_64277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (8))){
var inst_61430 = cljs.core.async.close_BANG_(to);
var state_61450__$1 = state_61450;
var statearr_61474_64278 = state_61450__$1;
(statearr_61474_64278[(2)] = inst_61430);

(statearr_61474_64278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10330__auto__ = null;
var cljs$core$async$state_machine__10330__auto____0 = (function (){
var statearr_61475 = [null,null,null,null,null,null,null,null];
(statearr_61475[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_61475[(1)] = (1));

return statearr_61475;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_61450){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_61450);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e61476){var ex__10333__auto__ = e61476;
var statearr_61477_64280 = state_61450;
(statearr_61477_64280[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_61450[(4)]))){
var statearr_61478_64281 = state_61450;
(statearr_61478_64281[(1)] = cljs.core.first((state_61450[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64282 = state_61450;
state_61450 = G__64282;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_61450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_61450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_61479 = f__10425__auto__();
(statearr_61479[(6)] = c__10424__auto___64250);

return statearr_61479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__61481){
var vec__61482 = p__61481;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61482,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61482,(1),null);
var job = vec__61482;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10424__auto___64288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_61489){
var state_val_61490 = (state_61489[(1)]);
if((state_val_61490 === (1))){
var state_61489__$1 = state_61489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61489__$1,(2),res,v);
} else {
if((state_val_61490 === (2))){
var inst_61486 = (state_61489[(2)]);
var inst_61487 = cljs.core.async.close_BANG_(res);
var state_61489__$1 = (function (){var statearr_61491 = state_61489;
(statearr_61491[(7)] = inst_61486);

return statearr_61491;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61489__$1,inst_61487);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0 = (function (){
var statearr_61492 = [null,null,null,null,null,null,null,null];
(statearr_61492[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__);

(statearr_61492[(1)] = (1));

return statearr_61492;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1 = (function (state_61489){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_61489);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e61493){var ex__10333__auto__ = e61493;
var statearr_61494_64289 = state_61489;
(statearr_61494_64289[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_61489[(4)]))){
var statearr_61495_64290 = state_61489;
(statearr_61495_64290[(1)] = cljs.core.first((state_61489[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64291 = state_61489;
state_61489 = G__64291;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = function(state_61489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1.call(this,state_61489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_61496 = f__10425__auto__();
(statearr_61496[(6)] = c__10424__auto___64288);

return statearr_61496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__61497){
var vec__61500 = p__61497;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61500,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61500,(1),null);
var job = vec__61500;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___64292 = n;
var __64293 = (0);
while(true){
if((__64293 < n__5593__auto___64292)){
var G__61508_64294 = type;
var G__61508_64295__$1 = (((G__61508_64294 instanceof cljs.core.Keyword))?G__61508_64294.fqn:null);
switch (G__61508_64295__$1) {
case "compute":
var c__10424__auto___64300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__64293,c__10424__auto___64300,G__61508_64294,G__61508_64295__$1,n__5593__auto___64292,jobs,results,process__$1,async){
return (function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = ((function (__64293,c__10424__auto___64300,G__61508_64294,G__61508_64295__$1,n__5593__auto___64292,jobs,results,process__$1,async){
return (function (state_61532){
var state_val_61533 = (state_61532[(1)]);
if((state_val_61533 === (1))){
var state_61532__$1 = state_61532;
var statearr_61536_64301 = state_61532__$1;
(statearr_61536_64301[(2)] = null);

(statearr_61536_64301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61533 === (2))){
var state_61532__$1 = state_61532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61532__$1,(4),jobs);
} else {
if((state_val_61533 === (3))){
var inst_61530 = (state_61532[(2)]);
var state_61532__$1 = state_61532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61532__$1,inst_61530);
} else {
if((state_val_61533 === (4))){
var inst_61522 = (state_61532[(2)]);
var inst_61523 = process__$1(inst_61522);
var state_61532__$1 = state_61532;
if(cljs.core.truth_(inst_61523)){
var statearr_61538_64305 = state_61532__$1;
(statearr_61538_64305[(1)] = (5));

} else {
var statearr_61539_64306 = state_61532__$1;
(statearr_61539_64306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61533 === (5))){
var state_61532__$1 = state_61532;
var statearr_61540_64307 = state_61532__$1;
(statearr_61540_64307[(2)] = null);

(statearr_61540_64307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61533 === (6))){
var state_61532__$1 = state_61532;
var statearr_61542_64308 = state_61532__$1;
(statearr_61542_64308[(2)] = null);

(statearr_61542_64308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61533 === (7))){
var inst_61528 = (state_61532[(2)]);
var state_61532__$1 = state_61532;
var statearr_61543_64310 = state_61532__$1;
(statearr_61543_64310[(2)] = inst_61528);

(statearr_61543_64310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__64293,c__10424__auto___64300,G__61508_64294,G__61508_64295__$1,n__5593__auto___64292,jobs,results,process__$1,async))
;
return ((function (__64293,switch__10329__auto__,c__10424__auto___64300,G__61508_64294,G__61508_64295__$1,n__5593__auto___64292,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0 = (function (){
var statearr_61550 = [null,null,null,null,null,null,null];
(statearr_61550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__);

(statearr_61550[(1)] = (1));

return statearr_61550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1 = (function (state_61532){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_61532);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e61554){var ex__10333__auto__ = e61554;
var statearr_61555_64317 = state_61532;
(statearr_61555_64317[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_61532[(4)]))){
var statearr_61557_64318 = state_61532;
(statearr_61557_64318[(1)] = cljs.core.first((state_61532[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64322 = state_61532;
state_61532 = G__64322;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = function(state_61532){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1.call(this,state_61532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__;
})()
;})(__64293,switch__10329__auto__,c__10424__auto___64300,G__61508_64294,G__61508_64295__$1,n__5593__auto___64292,jobs,results,process__$1,async))
})();
var state__10426__auto__ = (function (){var statearr_61559 = f__10425__auto__();
(statearr_61559[(6)] = c__10424__auto___64300);

return statearr_61559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
});})(__64293,c__10424__auto___64300,G__61508_64294,G__61508_64295__$1,n__5593__auto___64292,jobs,results,process__$1,async))
);


break;
case "async":
var c__10424__auto___64323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__64293,c__10424__auto___64323,G__61508_64294,G__61508_64295__$1,n__5593__auto___64292,jobs,results,process__$1,async){
return (function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = ((function (__64293,c__10424__auto___64323,G__61508_64294,G__61508_64295__$1,n__5593__auto___64292,jobs,results,process__$1,async){
return (function (state_61578){
var state_val_61580 = (state_61578[(1)]);
if((state_val_61580 === (1))){
var state_61578__$1 = state_61578;
var statearr_61582_64324 = state_61578__$1;
(statearr_61582_64324[(2)] = null);

(statearr_61582_64324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61580 === (2))){
var state_61578__$1 = state_61578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61578__$1,(4),jobs);
} else {
if((state_val_61580 === (3))){
var inst_61575 = (state_61578[(2)]);
var state_61578__$1 = state_61578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61578__$1,inst_61575);
} else {
if((state_val_61580 === (4))){
var inst_61565 = (state_61578[(2)]);
var inst_61566 = async(inst_61565);
var state_61578__$1 = state_61578;
if(cljs.core.truth_(inst_61566)){
var statearr_61586_64325 = state_61578__$1;
(statearr_61586_64325[(1)] = (5));

} else {
var statearr_61588_64326 = state_61578__$1;
(statearr_61588_64326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61580 === (5))){
var state_61578__$1 = state_61578;
var statearr_61589_64330 = state_61578__$1;
(statearr_61589_64330[(2)] = null);

(statearr_61589_64330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61580 === (6))){
var state_61578__$1 = state_61578;
var statearr_61592_64331 = state_61578__$1;
(statearr_61592_64331[(2)] = null);

(statearr_61592_64331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61580 === (7))){
var inst_61572 = (state_61578[(2)]);
var state_61578__$1 = state_61578;
var statearr_61593_64333 = state_61578__$1;
(statearr_61593_64333[(2)] = inst_61572);

(statearr_61593_64333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__64293,c__10424__auto___64323,G__61508_64294,G__61508_64295__$1,n__5593__auto___64292,jobs,results,process__$1,async))
;
return ((function (__64293,switch__10329__auto__,c__10424__auto___64323,G__61508_64294,G__61508_64295__$1,n__5593__auto___64292,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0 = (function (){
var statearr_61594 = [null,null,null,null,null,null,null];
(statearr_61594[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__);

(statearr_61594[(1)] = (1));

return statearr_61594;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1 = (function (state_61578){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_61578);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e61595){var ex__10333__auto__ = e61595;
var statearr_61596_64337 = state_61578;
(statearr_61596_64337[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_61578[(4)]))){
var statearr_61597_64338 = state_61578;
(statearr_61597_64338[(1)] = cljs.core.first((state_61578[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64339 = state_61578;
state_61578 = G__64339;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = function(state_61578){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1.call(this,state_61578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__;
})()
;})(__64293,switch__10329__auto__,c__10424__auto___64323,G__61508_64294,G__61508_64295__$1,n__5593__auto___64292,jobs,results,process__$1,async))
})();
var state__10426__auto__ = (function (){var statearr_61601 = f__10425__auto__();
(statearr_61601[(6)] = c__10424__auto___64323);

return statearr_61601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
});})(__64293,c__10424__auto___64323,G__61508_64294,G__61508_64295__$1,n__5593__auto___64292,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61508_64295__$1)].join('')));

}

var G__64342 = (__64293 + (1));
__64293 = G__64342;
continue;
} else {
}
break;
}

var c__10424__auto___64344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_61624){
var state_val_61625 = (state_61624[(1)]);
if((state_val_61625 === (7))){
var inst_61620 = (state_61624[(2)]);
var state_61624__$1 = state_61624;
var statearr_61630_64349 = state_61624__$1;
(statearr_61630_64349[(2)] = inst_61620);

(statearr_61630_64349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61625 === (1))){
var state_61624__$1 = state_61624;
var statearr_61632_64350 = state_61624__$1;
(statearr_61632_64350[(2)] = null);

(statearr_61632_64350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61625 === (4))){
var inst_61605 = (state_61624[(7)]);
var inst_61605__$1 = (state_61624[(2)]);
var inst_61606 = (inst_61605__$1 == null);
var state_61624__$1 = (function (){var statearr_61633 = state_61624;
(statearr_61633[(7)] = inst_61605__$1);

return statearr_61633;
})();
if(cljs.core.truth_(inst_61606)){
var statearr_61634_64354 = state_61624__$1;
(statearr_61634_64354[(1)] = (5));

} else {
var statearr_61635_64355 = state_61624__$1;
(statearr_61635_64355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61625 === (6))){
var inst_61605 = (state_61624[(7)]);
var inst_61610 = (state_61624[(8)]);
var inst_61610__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_61611 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61612 = [inst_61605,inst_61610__$1];
var inst_61613 = (new cljs.core.PersistentVector(null,2,(5),inst_61611,inst_61612,null));
var state_61624__$1 = (function (){var statearr_61636 = state_61624;
(statearr_61636[(8)] = inst_61610__$1);

return statearr_61636;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61624__$1,(8),jobs,inst_61613);
} else {
if((state_val_61625 === (3))){
var inst_61622 = (state_61624[(2)]);
var state_61624__$1 = state_61624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61624__$1,inst_61622);
} else {
if((state_val_61625 === (2))){
var state_61624__$1 = state_61624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61624__$1,(4),from);
} else {
if((state_val_61625 === (9))){
var inst_61617 = (state_61624[(2)]);
var state_61624__$1 = (function (){var statearr_61641 = state_61624;
(statearr_61641[(9)] = inst_61617);

return statearr_61641;
})();
var statearr_61643_64363 = state_61624__$1;
(statearr_61643_64363[(2)] = null);

(statearr_61643_64363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61625 === (5))){
var inst_61608 = cljs.core.async.close_BANG_(jobs);
var state_61624__$1 = state_61624;
var statearr_61644_64364 = state_61624__$1;
(statearr_61644_64364[(2)] = inst_61608);

(statearr_61644_64364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61625 === (8))){
var inst_61610 = (state_61624[(8)]);
var inst_61615 = (state_61624[(2)]);
var state_61624__$1 = (function (){var statearr_61649 = state_61624;
(statearr_61649[(10)] = inst_61615);

return statearr_61649;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61624__$1,(9),results,inst_61610);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0 = (function (){
var statearr_61653 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__);

(statearr_61653[(1)] = (1));

return statearr_61653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1 = (function (state_61624){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_61624);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e61656){var ex__10333__auto__ = e61656;
var statearr_61657_64377 = state_61624;
(statearr_61657_64377[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_61624[(4)]))){
var statearr_61658_64378 = state_61624;
(statearr_61658_64378[(1)] = cljs.core.first((state_61624[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64379 = state_61624;
state_61624 = G__64379;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = function(state_61624){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1.call(this,state_61624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_61660 = f__10425__auto__();
(statearr_61660[(6)] = c__10424__auto___64344);

return statearr_61660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


var c__10424__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_61716){
var state_val_61717 = (state_61716[(1)]);
if((state_val_61717 === (7))){
var inst_61711 = (state_61716[(2)]);
var state_61716__$1 = state_61716;
var statearr_61724_64380 = state_61716__$1;
(statearr_61724_64380[(2)] = inst_61711);

(statearr_61724_64380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61717 === (20))){
var state_61716__$1 = state_61716;
var statearr_61725_64381 = state_61716__$1;
(statearr_61725_64381[(2)] = null);

(statearr_61725_64381[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61717 === (1))){
var state_61716__$1 = state_61716;
var statearr_61727_64382 = state_61716__$1;
(statearr_61727_64382[(2)] = null);

(statearr_61727_64382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61717 === (4))){
var inst_61671 = (state_61716[(7)]);
var inst_61671__$1 = (state_61716[(2)]);
var inst_61672 = (inst_61671__$1 == null);
var state_61716__$1 = (function (){var statearr_61732 = state_61716;
(statearr_61732[(7)] = inst_61671__$1);

return statearr_61732;
})();
if(cljs.core.truth_(inst_61672)){
var statearr_61734_64389 = state_61716__$1;
(statearr_61734_64389[(1)] = (5));

} else {
var statearr_61737_64390 = state_61716__$1;
(statearr_61737_64390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61717 === (15))){
var inst_61688 = (state_61716[(8)]);
var state_61716__$1 = state_61716;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61716__$1,(18),to,inst_61688);
} else {
if((state_val_61717 === (21))){
var inst_61706 = (state_61716[(2)]);
var state_61716__$1 = state_61716;
var statearr_61745_64391 = state_61716__$1;
(statearr_61745_64391[(2)] = inst_61706);

(statearr_61745_64391[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61717 === (13))){
var inst_61708 = (state_61716[(2)]);
var state_61716__$1 = (function (){var statearr_61749 = state_61716;
(statearr_61749[(9)] = inst_61708);

return statearr_61749;
})();
var statearr_61750_64402 = state_61716__$1;
(statearr_61750_64402[(2)] = null);

(statearr_61750_64402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61717 === (6))){
var inst_61671 = (state_61716[(7)]);
var state_61716__$1 = state_61716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61716__$1,(11),inst_61671);
} else {
if((state_val_61717 === (17))){
var inst_61700 = (state_61716[(2)]);
var state_61716__$1 = state_61716;
if(cljs.core.truth_(inst_61700)){
var statearr_61754_64408 = state_61716__$1;
(statearr_61754_64408[(1)] = (19));

} else {
var statearr_61756_64409 = state_61716__$1;
(statearr_61756_64409[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61717 === (3))){
var inst_61714 = (state_61716[(2)]);
var state_61716__$1 = state_61716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61716__$1,inst_61714);
} else {
if((state_val_61717 === (12))){
var inst_61682 = (state_61716[(10)]);
var state_61716__$1 = state_61716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61716__$1,(14),inst_61682);
} else {
if((state_val_61717 === (2))){
var state_61716__$1 = state_61716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61716__$1,(4),results);
} else {
if((state_val_61717 === (19))){
var state_61716__$1 = state_61716;
var statearr_61765_64415 = state_61716__$1;
(statearr_61765_64415[(2)] = null);

(statearr_61765_64415[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61717 === (11))){
var inst_61682 = (state_61716[(2)]);
var state_61716__$1 = (function (){var statearr_61769 = state_61716;
(statearr_61769[(10)] = inst_61682);

return statearr_61769;
})();
var statearr_61770_64416 = state_61716__$1;
(statearr_61770_64416[(2)] = null);

(statearr_61770_64416[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61717 === (9))){
var state_61716__$1 = state_61716;
var statearr_61773_64421 = state_61716__$1;
(statearr_61773_64421[(2)] = null);

(statearr_61773_64421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61717 === (5))){
var state_61716__$1 = state_61716;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61778_64423 = state_61716__$1;
(statearr_61778_64423[(1)] = (8));

} else {
var statearr_61779_64424 = state_61716__$1;
(statearr_61779_64424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61717 === (14))){
var inst_61690 = (state_61716[(11)]);
var inst_61688 = (state_61716[(8)]);
var inst_61688__$1 = (state_61716[(2)]);
var inst_61689 = (inst_61688__$1 == null);
var inst_61690__$1 = cljs.core.not(inst_61689);
var state_61716__$1 = (function (){var statearr_61784 = state_61716;
(statearr_61784[(11)] = inst_61690__$1);

(statearr_61784[(8)] = inst_61688__$1);

return statearr_61784;
})();
if(inst_61690__$1){
var statearr_61785_64427 = state_61716__$1;
(statearr_61785_64427[(1)] = (15));

} else {
var statearr_61787_64429 = state_61716__$1;
(statearr_61787_64429[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61717 === (16))){
var inst_61690 = (state_61716[(11)]);
var state_61716__$1 = state_61716;
var statearr_61788_64430 = state_61716__$1;
(statearr_61788_64430[(2)] = inst_61690);

(statearr_61788_64430[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61717 === (10))){
var inst_61679 = (state_61716[(2)]);
var state_61716__$1 = state_61716;
var statearr_61790_64431 = state_61716__$1;
(statearr_61790_64431[(2)] = inst_61679);

(statearr_61790_64431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61717 === (18))){
var inst_61697 = (state_61716[(2)]);
var state_61716__$1 = state_61716;
var statearr_61791_64432 = state_61716__$1;
(statearr_61791_64432[(2)] = inst_61697);

(statearr_61791_64432[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61717 === (8))){
var inst_61676 = cljs.core.async.close_BANG_(to);
var state_61716__$1 = state_61716;
var statearr_61795_64433 = state_61716__$1;
(statearr_61795_64433[(2)] = inst_61676);

(statearr_61795_64433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0 = (function (){
var statearr_61802 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61802[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__);

(statearr_61802[(1)] = (1));

return statearr_61802;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1 = (function (state_61716){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_61716);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e61806){var ex__10333__auto__ = e61806;
var statearr_61809_64438 = state_61716;
(statearr_61809_64438[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_61716[(4)]))){
var statearr_61811_64439 = state_61716;
(statearr_61811_64439[(1)] = cljs.core.first((state_61716[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64440 = state_61716;
state_61716 = G__64440;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = function(state_61716){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1.call(this,state_61716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_61814 = f__10425__auto__();
(statearr_61814[(6)] = c__10424__auto__);

return statearr_61814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));

return c__10424__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__61825 = arguments.length;
switch (G__61825) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__61838 = arguments.length;
switch (G__61838) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__61858 = arguments.length;
switch (G__61858) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__10424__auto___64453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_61889){
var state_val_61890 = (state_61889[(1)]);
if((state_val_61890 === (7))){
var inst_61885 = (state_61889[(2)]);
var state_61889__$1 = state_61889;
var statearr_61892_64454 = state_61889__$1;
(statearr_61892_64454[(2)] = inst_61885);

(statearr_61892_64454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61890 === (1))){
var state_61889__$1 = state_61889;
var statearr_61896_64457 = state_61889__$1;
(statearr_61896_64457[(2)] = null);

(statearr_61896_64457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61890 === (4))){
var inst_61866 = (state_61889[(7)]);
var inst_61866__$1 = (state_61889[(2)]);
var inst_61867 = (inst_61866__$1 == null);
var state_61889__$1 = (function (){var statearr_61897 = state_61889;
(statearr_61897[(7)] = inst_61866__$1);

return statearr_61897;
})();
if(cljs.core.truth_(inst_61867)){
var statearr_61898_64461 = state_61889__$1;
(statearr_61898_64461[(1)] = (5));

} else {
var statearr_61899_64462 = state_61889__$1;
(statearr_61899_64462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61890 === (13))){
var state_61889__$1 = state_61889;
var statearr_61900_64464 = state_61889__$1;
(statearr_61900_64464[(2)] = null);

(statearr_61900_64464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61890 === (6))){
var inst_61866 = (state_61889[(7)]);
var inst_61872 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_61866) : p.call(null, inst_61866));
var state_61889__$1 = state_61889;
if(cljs.core.truth_(inst_61872)){
var statearr_61901_64466 = state_61889__$1;
(statearr_61901_64466[(1)] = (9));

} else {
var statearr_61903_64468 = state_61889__$1;
(statearr_61903_64468[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61890 === (3))){
var inst_61887 = (state_61889[(2)]);
var state_61889__$1 = state_61889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61889__$1,inst_61887);
} else {
if((state_val_61890 === (12))){
var state_61889__$1 = state_61889;
var statearr_61907_64472 = state_61889__$1;
(statearr_61907_64472[(2)] = null);

(statearr_61907_64472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61890 === (2))){
var state_61889__$1 = state_61889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61889__$1,(4),ch);
} else {
if((state_val_61890 === (11))){
var inst_61866 = (state_61889[(7)]);
var inst_61876 = (state_61889[(2)]);
var state_61889__$1 = state_61889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61889__$1,(8),inst_61876,inst_61866);
} else {
if((state_val_61890 === (9))){
var state_61889__$1 = state_61889;
var statearr_61908_64475 = state_61889__$1;
(statearr_61908_64475[(2)] = tc);

(statearr_61908_64475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61890 === (5))){
var inst_61869 = cljs.core.async.close_BANG_(tc);
var inst_61870 = cljs.core.async.close_BANG_(fc);
var state_61889__$1 = (function (){var statearr_61910 = state_61889;
(statearr_61910[(8)] = inst_61869);

return statearr_61910;
})();
var statearr_61912_64476 = state_61889__$1;
(statearr_61912_64476[(2)] = inst_61870);

(statearr_61912_64476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61890 === (14))){
var inst_61883 = (state_61889[(2)]);
var state_61889__$1 = state_61889;
var statearr_61913_64477 = state_61889__$1;
(statearr_61913_64477[(2)] = inst_61883);

(statearr_61913_64477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61890 === (10))){
var state_61889__$1 = state_61889;
var statearr_61914_64480 = state_61889__$1;
(statearr_61914_64480[(2)] = fc);

(statearr_61914_64480[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61890 === (8))){
var inst_61878 = (state_61889[(2)]);
var state_61889__$1 = state_61889;
if(cljs.core.truth_(inst_61878)){
var statearr_61917_64483 = state_61889__$1;
(statearr_61917_64483[(1)] = (12));

} else {
var statearr_61918_64485 = state_61889__$1;
(statearr_61918_64485[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10330__auto__ = null;
var cljs$core$async$state_machine__10330__auto____0 = (function (){
var statearr_61920 = [null,null,null,null,null,null,null,null,null];
(statearr_61920[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_61920[(1)] = (1));

return statearr_61920;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_61889){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_61889);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e61923){var ex__10333__auto__ = e61923;
var statearr_61924_64487 = state_61889;
(statearr_61924_64487[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_61889[(4)]))){
var statearr_61925_64489 = state_61889;
(statearr_61925_64489[(1)] = cljs.core.first((state_61889[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64490 = state_61889;
state_61889 = G__64490;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_61889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_61889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_61930 = f__10425__auto__();
(statearr_61930[(6)] = c__10424__auto___64453);

return statearr_61930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10424__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_61957){
var state_val_61959 = (state_61957[(1)]);
if((state_val_61959 === (7))){
var inst_61953 = (state_61957[(2)]);
var state_61957__$1 = state_61957;
var statearr_61968_64495 = state_61957__$1;
(statearr_61968_64495[(2)] = inst_61953);

(statearr_61968_64495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61959 === (1))){
var inst_61933 = init;
var inst_61935 = inst_61933;
var state_61957__$1 = (function (){var statearr_61969 = state_61957;
(statearr_61969[(7)] = inst_61935);

return statearr_61969;
})();
var statearr_61971_64497 = state_61957__$1;
(statearr_61971_64497[(2)] = null);

(statearr_61971_64497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61959 === (4))){
var inst_61940 = (state_61957[(8)]);
var inst_61940__$1 = (state_61957[(2)]);
var inst_61941 = (inst_61940__$1 == null);
var state_61957__$1 = (function (){var statearr_61975 = state_61957;
(statearr_61975[(8)] = inst_61940__$1);

return statearr_61975;
})();
if(cljs.core.truth_(inst_61941)){
var statearr_61976_64499 = state_61957__$1;
(statearr_61976_64499[(1)] = (5));

} else {
var statearr_61978_64501 = state_61957__$1;
(statearr_61978_64501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61959 === (6))){
var inst_61944 = (state_61957[(9)]);
var inst_61935 = (state_61957[(7)]);
var inst_61940 = (state_61957[(8)]);
var inst_61944__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_61935,inst_61940) : f.call(null, inst_61935,inst_61940));
var inst_61945 = cljs.core.reduced_QMARK_(inst_61944__$1);
var state_61957__$1 = (function (){var statearr_61983 = state_61957;
(statearr_61983[(9)] = inst_61944__$1);

return statearr_61983;
})();
if(inst_61945){
var statearr_61986_64509 = state_61957__$1;
(statearr_61986_64509[(1)] = (8));

} else {
var statearr_61988_64510 = state_61957__$1;
(statearr_61988_64510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61959 === (3))){
var inst_61955 = (state_61957[(2)]);
var state_61957__$1 = state_61957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61957__$1,inst_61955);
} else {
if((state_val_61959 === (2))){
var state_61957__$1 = state_61957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61957__$1,(4),ch);
} else {
if((state_val_61959 === (9))){
var inst_61944 = (state_61957[(9)]);
var inst_61935 = inst_61944;
var state_61957__$1 = (function (){var statearr_61997 = state_61957;
(statearr_61997[(7)] = inst_61935);

return statearr_61997;
})();
var statearr_61998_64522 = state_61957__$1;
(statearr_61998_64522[(2)] = null);

(statearr_61998_64522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61959 === (5))){
var inst_61935 = (state_61957[(7)]);
var state_61957__$1 = state_61957;
var statearr_61999_64523 = state_61957__$1;
(statearr_61999_64523[(2)] = inst_61935);

(statearr_61999_64523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61959 === (10))){
var inst_61951 = (state_61957[(2)]);
var state_61957__$1 = state_61957;
var statearr_62002_64526 = state_61957__$1;
(statearr_62002_64526[(2)] = inst_61951);

(statearr_62002_64526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61959 === (8))){
var inst_61944 = (state_61957[(9)]);
var inst_61947 = cljs.core.deref(inst_61944);
var state_61957__$1 = state_61957;
var statearr_62004_64527 = state_61957__$1;
(statearr_62004_64527[(2)] = inst_61947);

(statearr_62004_64527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__10330__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10330__auto____0 = (function (){
var statearr_62006 = [null,null,null,null,null,null,null,null,null,null];
(statearr_62006[(0)] = cljs$core$async$reduce_$_state_machine__10330__auto__);

(statearr_62006[(1)] = (1));

return statearr_62006;
});
var cljs$core$async$reduce_$_state_machine__10330__auto____1 = (function (state_61957){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_61957);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e62010){var ex__10333__auto__ = e62010;
var statearr_62013_64529 = state_61957;
(statearr_62013_64529[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_61957[(4)]))){
var statearr_62016_64530 = state_61957;
(statearr_62016_64530[(1)] = cljs.core.first((state_61957[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64531 = state_61957;
state_61957 = G__64531;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10330__auto__ = function(state_61957){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10330__auto____1.call(this,state_61957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10330__auto____0;
cljs$core$async$reduce_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10330__auto____1;
return cljs$core$async$reduce_$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_62017 = f__10425__auto__();
(statearr_62017[(6)] = c__10424__auto__);

return statearr_62017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));

return c__10424__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__10424__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_62031){
var state_val_62032 = (state_62031[(1)]);
if((state_val_62032 === (1))){
var inst_62026 = cljs.core.async.reduce(f__$1,init,ch);
var state_62031__$1 = state_62031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62031__$1,(2),inst_62026);
} else {
if((state_val_62032 === (2))){
var inst_62028 = (state_62031[(2)]);
var inst_62029 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_62028) : f__$1.call(null, inst_62028));
var state_62031__$1 = state_62031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62031__$1,inst_62029);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10330__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10330__auto____0 = (function (){
var statearr_62040 = [null,null,null,null,null,null,null];
(statearr_62040[(0)] = cljs$core$async$transduce_$_state_machine__10330__auto__);

(statearr_62040[(1)] = (1));

return statearr_62040;
});
var cljs$core$async$transduce_$_state_machine__10330__auto____1 = (function (state_62031){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_62031);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e62042){var ex__10333__auto__ = e62042;
var statearr_62043_64535 = state_62031;
(statearr_62043_64535[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_62031[(4)]))){
var statearr_62046_64537 = state_62031;
(statearr_62046_64537[(1)] = cljs.core.first((state_62031[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64538 = state_62031;
state_62031 = G__64538;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10330__auto__ = function(state_62031){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10330__auto____1.call(this,state_62031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10330__auto____0;
cljs$core$async$transduce_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10330__auto____1;
return cljs$core$async$transduce_$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_62049 = f__10425__auto__();
(statearr_62049[(6)] = c__10424__auto__);

return statearr_62049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));

return c__10424__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__62053 = arguments.length;
switch (G__62053) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10424__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_62087){
var state_val_62088 = (state_62087[(1)]);
if((state_val_62088 === (7))){
var inst_62067 = (state_62087[(2)]);
var state_62087__$1 = state_62087;
var statearr_62091_64560 = state_62087__$1;
(statearr_62091_64560[(2)] = inst_62067);

(statearr_62091_64560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62088 === (1))){
var inst_62061 = cljs.core.seq(coll);
var inst_62062 = inst_62061;
var state_62087__$1 = (function (){var statearr_62094 = state_62087;
(statearr_62094[(7)] = inst_62062);

return statearr_62094;
})();
var statearr_62097_64566 = state_62087__$1;
(statearr_62097_64566[(2)] = null);

(statearr_62097_64566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62088 === (4))){
var inst_62062 = (state_62087[(7)]);
var inst_62065 = cljs.core.first(inst_62062);
var state_62087__$1 = state_62087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62087__$1,(7),ch,inst_62065);
} else {
if((state_val_62088 === (13))){
var inst_62079 = (state_62087[(2)]);
var state_62087__$1 = state_62087;
var statearr_62098_64568 = state_62087__$1;
(statearr_62098_64568[(2)] = inst_62079);

(statearr_62098_64568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62088 === (6))){
var inst_62070 = (state_62087[(2)]);
var state_62087__$1 = state_62087;
if(cljs.core.truth_(inst_62070)){
var statearr_62102_64572 = state_62087__$1;
(statearr_62102_64572[(1)] = (8));

} else {
var statearr_62105_64573 = state_62087__$1;
(statearr_62105_64573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62088 === (3))){
var inst_62083 = (state_62087[(2)]);
var state_62087__$1 = state_62087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62087__$1,inst_62083);
} else {
if((state_val_62088 === (12))){
var state_62087__$1 = state_62087;
var statearr_62107_64577 = state_62087__$1;
(statearr_62107_64577[(2)] = null);

(statearr_62107_64577[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62088 === (2))){
var inst_62062 = (state_62087[(7)]);
var state_62087__$1 = state_62087;
if(cljs.core.truth_(inst_62062)){
var statearr_62111_64578 = state_62087__$1;
(statearr_62111_64578[(1)] = (4));

} else {
var statearr_62112_64581 = state_62087__$1;
(statearr_62112_64581[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62088 === (11))){
var inst_62076 = cljs.core.async.close_BANG_(ch);
var state_62087__$1 = state_62087;
var statearr_62115_64583 = state_62087__$1;
(statearr_62115_64583[(2)] = inst_62076);

(statearr_62115_64583[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62088 === (9))){
var state_62087__$1 = state_62087;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62120_64589 = state_62087__$1;
(statearr_62120_64589[(1)] = (11));

} else {
var statearr_62121_64592 = state_62087__$1;
(statearr_62121_64592[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62088 === (5))){
var inst_62062 = (state_62087[(7)]);
var state_62087__$1 = state_62087;
var statearr_62124_64594 = state_62087__$1;
(statearr_62124_64594[(2)] = inst_62062);

(statearr_62124_64594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62088 === (10))){
var inst_62081 = (state_62087[(2)]);
var state_62087__$1 = state_62087;
var statearr_62126_64596 = state_62087__$1;
(statearr_62126_64596[(2)] = inst_62081);

(statearr_62126_64596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62088 === (8))){
var inst_62062 = (state_62087[(7)]);
var inst_62072 = cljs.core.next(inst_62062);
var inst_62062__$1 = inst_62072;
var state_62087__$1 = (function (){var statearr_62127 = state_62087;
(statearr_62127[(7)] = inst_62062__$1);

return statearr_62127;
})();
var statearr_62128_64600 = state_62087__$1;
(statearr_62128_64600[(2)] = null);

(statearr_62128_64600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10330__auto__ = null;
var cljs$core$async$state_machine__10330__auto____0 = (function (){
var statearr_62129 = [null,null,null,null,null,null,null,null];
(statearr_62129[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_62129[(1)] = (1));

return statearr_62129;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_62087){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_62087);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e62130){var ex__10333__auto__ = e62130;
var statearr_62131_64602 = state_62087;
(statearr_62131_64602[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_62087[(4)]))){
var statearr_62132_64603 = state_62087;
(statearr_62132_64603[(1)] = cljs.core.first((state_62087[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64607 = state_62087;
state_62087 = G__64607;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_62087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_62087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_62133 = f__10425__auto__();
(statearr_62133[(6)] = c__10424__auto__);

return statearr_62133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));

return c__10424__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__62139 = arguments.length;
switch (G__62139) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_64616 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_64616(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_64622 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_64622(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_64624 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_64624(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_64627 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_64627(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62171 = (function (ch,cs,meta62172){
this.ch = ch;
this.cs = cs;
this.meta62172 = meta62172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62173,meta62172__$1){
var self__ = this;
var _62173__$1 = this;
return (new cljs.core.async.t_cljs$core$async62171(self__.ch,self__.cs,meta62172__$1));
}));

(cljs.core.async.t_cljs$core$async62171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62173){
var self__ = this;
var _62173__$1 = this;
return self__.meta62172;
}));

(cljs.core.async.t_cljs$core$async62171.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62171.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async62171.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62171.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async62171.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async62171.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async62171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta62172","meta62172",-2073035857,null)], null);
}));

(cljs.core.async.t_cljs$core$async62171.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62171");

(cljs.core.async.t_cljs$core$async62171.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async62171");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62171.
 */
cljs.core.async.__GT_t_cljs$core$async62171 = (function cljs$core$async$__GT_t_cljs$core$async62171(ch,cs,meta62172){
return (new cljs.core.async.t_cljs$core$async62171(ch,cs,meta62172));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async62171(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__10424__auto___64644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_62343){
var state_val_62344 = (state_62343[(1)]);
if((state_val_62344 === (7))){
var inst_62337 = (state_62343[(2)]);
var state_62343__$1 = state_62343;
var statearr_62350_64648 = state_62343__$1;
(statearr_62350_64648[(2)] = inst_62337);

(statearr_62350_64648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (20))){
var inst_62228 = (state_62343[(7)]);
var inst_62245 = cljs.core.first(inst_62228);
var inst_62246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62245,(0),null);
var inst_62247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62245,(1),null);
var state_62343__$1 = (function (){var statearr_62352 = state_62343;
(statearr_62352[(8)] = inst_62246);

return statearr_62352;
})();
if(cljs.core.truth_(inst_62247)){
var statearr_62353_64649 = state_62343__$1;
(statearr_62353_64649[(1)] = (22));

} else {
var statearr_62355_64650 = state_62343__$1;
(statearr_62355_64650[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (27))){
var inst_62275 = (state_62343[(9)]);
var inst_62190 = (state_62343[(10)]);
var inst_62282 = (state_62343[(11)]);
var inst_62277 = (state_62343[(12)]);
var inst_62282__$1 = cljs.core._nth(inst_62275,inst_62277);
var inst_62283 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_62282__$1,inst_62190,done);
var state_62343__$1 = (function (){var statearr_62359 = state_62343;
(statearr_62359[(11)] = inst_62282__$1);

return statearr_62359;
})();
if(cljs.core.truth_(inst_62283)){
var statearr_62360_64654 = state_62343__$1;
(statearr_62360_64654[(1)] = (30));

} else {
var statearr_62361_64656 = state_62343__$1;
(statearr_62361_64656[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (1))){
var state_62343__$1 = state_62343;
var statearr_62366_64657 = state_62343__$1;
(statearr_62366_64657[(2)] = null);

(statearr_62366_64657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (24))){
var inst_62228 = (state_62343[(7)]);
var inst_62252 = (state_62343[(2)]);
var inst_62253 = cljs.core.next(inst_62228);
var inst_62202 = inst_62253;
var inst_62203 = null;
var inst_62204 = (0);
var inst_62205 = (0);
var state_62343__$1 = (function (){var statearr_62368 = state_62343;
(statearr_62368[(13)] = inst_62204);

(statearr_62368[(14)] = inst_62205);

(statearr_62368[(15)] = inst_62252);

(statearr_62368[(16)] = inst_62203);

(statearr_62368[(17)] = inst_62202);

return statearr_62368;
})();
var statearr_62369_64659 = state_62343__$1;
(statearr_62369_64659[(2)] = null);

(statearr_62369_64659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (39))){
var state_62343__$1 = state_62343;
var statearr_62373_64660 = state_62343__$1;
(statearr_62373_64660[(2)] = null);

(statearr_62373_64660[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (4))){
var inst_62190 = (state_62343[(10)]);
var inst_62190__$1 = (state_62343[(2)]);
var inst_62192 = (inst_62190__$1 == null);
var state_62343__$1 = (function (){var statearr_62375 = state_62343;
(statearr_62375[(10)] = inst_62190__$1);

return statearr_62375;
})();
if(cljs.core.truth_(inst_62192)){
var statearr_62376_64661 = state_62343__$1;
(statearr_62376_64661[(1)] = (5));

} else {
var statearr_62379_64662 = state_62343__$1;
(statearr_62379_64662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (15))){
var inst_62204 = (state_62343[(13)]);
var inst_62205 = (state_62343[(14)]);
var inst_62203 = (state_62343[(16)]);
var inst_62202 = (state_62343[(17)]);
var inst_62221 = (state_62343[(2)]);
var inst_62223 = (inst_62205 + (1));
var tmp62370 = inst_62204;
var tmp62371 = inst_62203;
var tmp62372 = inst_62202;
var inst_62202__$1 = tmp62372;
var inst_62203__$1 = tmp62371;
var inst_62204__$1 = tmp62370;
var inst_62205__$1 = inst_62223;
var state_62343__$1 = (function (){var statearr_62384 = state_62343;
(statearr_62384[(13)] = inst_62204__$1);

(statearr_62384[(14)] = inst_62205__$1);

(statearr_62384[(18)] = inst_62221);

(statearr_62384[(16)] = inst_62203__$1);

(statearr_62384[(17)] = inst_62202__$1);

return statearr_62384;
})();
var statearr_62385_64667 = state_62343__$1;
(statearr_62385_64667[(2)] = null);

(statearr_62385_64667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (21))){
var inst_62256 = (state_62343[(2)]);
var state_62343__$1 = state_62343;
var statearr_62389_64668 = state_62343__$1;
(statearr_62389_64668[(2)] = inst_62256);

(statearr_62389_64668[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (31))){
var inst_62282 = (state_62343[(11)]);
var inst_62286 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_62282);
var state_62343__$1 = state_62343;
var statearr_62394_64671 = state_62343__$1;
(statearr_62394_64671[(2)] = inst_62286);

(statearr_62394_64671[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (32))){
var inst_62274 = (state_62343[(19)]);
var inst_62275 = (state_62343[(9)]);
var inst_62277 = (state_62343[(12)]);
var inst_62276 = (state_62343[(20)]);
var inst_62288 = (state_62343[(2)]);
var inst_62289 = (inst_62277 + (1));
var tmp62386 = inst_62274;
var tmp62387 = inst_62275;
var tmp62388 = inst_62276;
var inst_62274__$1 = tmp62386;
var inst_62275__$1 = tmp62387;
var inst_62276__$1 = tmp62388;
var inst_62277__$1 = inst_62289;
var state_62343__$1 = (function (){var statearr_62396 = state_62343;
(statearr_62396[(19)] = inst_62274__$1);

(statearr_62396[(9)] = inst_62275__$1);

(statearr_62396[(21)] = inst_62288);

(statearr_62396[(12)] = inst_62277__$1);

(statearr_62396[(20)] = inst_62276__$1);

return statearr_62396;
})();
var statearr_62397_64673 = state_62343__$1;
(statearr_62397_64673[(2)] = null);

(statearr_62397_64673[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (40))){
var inst_62310 = (state_62343[(22)]);
var inst_62314 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_62310);
var state_62343__$1 = state_62343;
var statearr_62401_64676 = state_62343__$1;
(statearr_62401_64676[(2)] = inst_62314);

(statearr_62401_64676[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (33))){
var inst_62293 = (state_62343[(23)]);
var inst_62299 = cljs.core.chunked_seq_QMARK_(inst_62293);
var state_62343__$1 = state_62343;
if(inst_62299){
var statearr_62402_64678 = state_62343__$1;
(statearr_62402_64678[(1)] = (36));

} else {
var statearr_62403_64679 = state_62343__$1;
(statearr_62403_64679[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (13))){
var inst_62214 = (state_62343[(24)]);
var inst_62217 = cljs.core.async.close_BANG_(inst_62214);
var state_62343__$1 = state_62343;
var statearr_62406_64680 = state_62343__$1;
(statearr_62406_64680[(2)] = inst_62217);

(statearr_62406_64680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (22))){
var inst_62246 = (state_62343[(8)]);
var inst_62249 = cljs.core.async.close_BANG_(inst_62246);
var state_62343__$1 = state_62343;
var statearr_62409_64683 = state_62343__$1;
(statearr_62409_64683[(2)] = inst_62249);

(statearr_62409_64683[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (36))){
var inst_62293 = (state_62343[(23)]);
var inst_62303 = cljs.core.chunk_first(inst_62293);
var inst_62304 = cljs.core.chunk_rest(inst_62293);
var inst_62305 = cljs.core.count(inst_62303);
var inst_62274 = inst_62304;
var inst_62275 = inst_62303;
var inst_62276 = inst_62305;
var inst_62277 = (0);
var state_62343__$1 = (function (){var statearr_62420 = state_62343;
(statearr_62420[(19)] = inst_62274);

(statearr_62420[(9)] = inst_62275);

(statearr_62420[(12)] = inst_62277);

(statearr_62420[(20)] = inst_62276);

return statearr_62420;
})();
var statearr_62423_64686 = state_62343__$1;
(statearr_62423_64686[(2)] = null);

(statearr_62423_64686[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (41))){
var inst_62293 = (state_62343[(23)]);
var inst_62316 = (state_62343[(2)]);
var inst_62317 = cljs.core.next(inst_62293);
var inst_62274 = inst_62317;
var inst_62275 = null;
var inst_62276 = (0);
var inst_62277 = (0);
var state_62343__$1 = (function (){var statearr_62425 = state_62343;
(statearr_62425[(19)] = inst_62274);

(statearr_62425[(9)] = inst_62275);

(statearr_62425[(25)] = inst_62316);

(statearr_62425[(12)] = inst_62277);

(statearr_62425[(20)] = inst_62276);

return statearr_62425;
})();
var statearr_62426_64690 = state_62343__$1;
(statearr_62426_64690[(2)] = null);

(statearr_62426_64690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (43))){
var state_62343__$1 = state_62343;
var statearr_62433_64691 = state_62343__$1;
(statearr_62433_64691[(2)] = null);

(statearr_62433_64691[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (29))){
var inst_62325 = (state_62343[(2)]);
var state_62343__$1 = state_62343;
var statearr_62438_64692 = state_62343__$1;
(statearr_62438_64692[(2)] = inst_62325);

(statearr_62438_64692[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (44))){
var inst_62334 = (state_62343[(2)]);
var state_62343__$1 = (function (){var statearr_62443 = state_62343;
(statearr_62443[(26)] = inst_62334);

return statearr_62443;
})();
var statearr_62445_64693 = state_62343__$1;
(statearr_62445_64693[(2)] = null);

(statearr_62445_64693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (6))){
var inst_62266 = (state_62343[(27)]);
var inst_62265 = cljs.core.deref(cs);
var inst_62266__$1 = cljs.core.keys(inst_62265);
var inst_62267 = cljs.core.count(inst_62266__$1);
var inst_62268 = cljs.core.reset_BANG_(dctr,inst_62267);
var inst_62273 = cljs.core.seq(inst_62266__$1);
var inst_62274 = inst_62273;
var inst_62275 = null;
var inst_62276 = (0);
var inst_62277 = (0);
var state_62343__$1 = (function (){var statearr_62447 = state_62343;
(statearr_62447[(19)] = inst_62274);

(statearr_62447[(9)] = inst_62275);

(statearr_62447[(27)] = inst_62266__$1);

(statearr_62447[(28)] = inst_62268);

(statearr_62447[(12)] = inst_62277);

(statearr_62447[(20)] = inst_62276);

return statearr_62447;
})();
var statearr_62451_64695 = state_62343__$1;
(statearr_62451_64695[(2)] = null);

(statearr_62451_64695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (28))){
var inst_62274 = (state_62343[(19)]);
var inst_62293 = (state_62343[(23)]);
var inst_62293__$1 = cljs.core.seq(inst_62274);
var state_62343__$1 = (function (){var statearr_62458 = state_62343;
(statearr_62458[(23)] = inst_62293__$1);

return statearr_62458;
})();
if(inst_62293__$1){
var statearr_62459_64696 = state_62343__$1;
(statearr_62459_64696[(1)] = (33));

} else {
var statearr_62460_64697 = state_62343__$1;
(statearr_62460_64697[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (25))){
var inst_62277 = (state_62343[(12)]);
var inst_62276 = (state_62343[(20)]);
var inst_62279 = (inst_62277 < inst_62276);
var inst_62280 = inst_62279;
var state_62343__$1 = state_62343;
if(cljs.core.truth_(inst_62280)){
var statearr_62461_64698 = state_62343__$1;
(statearr_62461_64698[(1)] = (27));

} else {
var statearr_62462_64699 = state_62343__$1;
(statearr_62462_64699[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (34))){
var state_62343__$1 = state_62343;
var statearr_62466_64702 = state_62343__$1;
(statearr_62466_64702[(2)] = null);

(statearr_62466_64702[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (17))){
var state_62343__$1 = state_62343;
var statearr_62469_64703 = state_62343__$1;
(statearr_62469_64703[(2)] = null);

(statearr_62469_64703[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (3))){
var inst_62339 = (state_62343[(2)]);
var state_62343__$1 = state_62343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62343__$1,inst_62339);
} else {
if((state_val_62344 === (12))){
var inst_62261 = (state_62343[(2)]);
var state_62343__$1 = state_62343;
var statearr_62474_64705 = state_62343__$1;
(statearr_62474_64705[(2)] = inst_62261);

(statearr_62474_64705[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (2))){
var state_62343__$1 = state_62343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62343__$1,(4),ch);
} else {
if((state_val_62344 === (23))){
var state_62343__$1 = state_62343;
var statearr_62479_64706 = state_62343__$1;
(statearr_62479_64706[(2)] = null);

(statearr_62479_64706[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (35))){
var inst_62323 = (state_62343[(2)]);
var state_62343__$1 = state_62343;
var statearr_62480_64707 = state_62343__$1;
(statearr_62480_64707[(2)] = inst_62323);

(statearr_62480_64707[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (19))){
var inst_62228 = (state_62343[(7)]);
var inst_62236 = cljs.core.chunk_first(inst_62228);
var inst_62237 = cljs.core.chunk_rest(inst_62228);
var inst_62238 = cljs.core.count(inst_62236);
var inst_62202 = inst_62237;
var inst_62203 = inst_62236;
var inst_62204 = inst_62238;
var inst_62205 = (0);
var state_62343__$1 = (function (){var statearr_62484 = state_62343;
(statearr_62484[(13)] = inst_62204);

(statearr_62484[(14)] = inst_62205);

(statearr_62484[(16)] = inst_62203);

(statearr_62484[(17)] = inst_62202);

return statearr_62484;
})();
var statearr_62485_64708 = state_62343__$1;
(statearr_62485_64708[(2)] = null);

(statearr_62485_64708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (11))){
var inst_62228 = (state_62343[(7)]);
var inst_62202 = (state_62343[(17)]);
var inst_62228__$1 = cljs.core.seq(inst_62202);
var state_62343__$1 = (function (){var statearr_62492 = state_62343;
(statearr_62492[(7)] = inst_62228__$1);

return statearr_62492;
})();
if(inst_62228__$1){
var statearr_62496_64711 = state_62343__$1;
(statearr_62496_64711[(1)] = (16));

} else {
var statearr_62498_64712 = state_62343__$1;
(statearr_62498_64712[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (9))){
var inst_62263 = (state_62343[(2)]);
var state_62343__$1 = state_62343;
var statearr_62504_64713 = state_62343__$1;
(statearr_62504_64713[(2)] = inst_62263);

(statearr_62504_64713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (5))){
var inst_62199 = cljs.core.deref(cs);
var inst_62200 = cljs.core.seq(inst_62199);
var inst_62202 = inst_62200;
var inst_62203 = null;
var inst_62204 = (0);
var inst_62205 = (0);
var state_62343__$1 = (function (){var statearr_62516 = state_62343;
(statearr_62516[(13)] = inst_62204);

(statearr_62516[(14)] = inst_62205);

(statearr_62516[(16)] = inst_62203);

(statearr_62516[(17)] = inst_62202);

return statearr_62516;
})();
var statearr_62522_64714 = state_62343__$1;
(statearr_62522_64714[(2)] = null);

(statearr_62522_64714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (14))){
var state_62343__$1 = state_62343;
var statearr_62523_64716 = state_62343__$1;
(statearr_62523_64716[(2)] = null);

(statearr_62523_64716[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (45))){
var inst_62331 = (state_62343[(2)]);
var state_62343__$1 = state_62343;
var statearr_62524_64717 = state_62343__$1;
(statearr_62524_64717[(2)] = inst_62331);

(statearr_62524_64717[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (26))){
var inst_62266 = (state_62343[(27)]);
var inst_62327 = (state_62343[(2)]);
var inst_62328 = cljs.core.seq(inst_62266);
var state_62343__$1 = (function (){var statearr_62528 = state_62343;
(statearr_62528[(29)] = inst_62327);

return statearr_62528;
})();
if(inst_62328){
var statearr_62529_64722 = state_62343__$1;
(statearr_62529_64722[(1)] = (42));

} else {
var statearr_62530_64723 = state_62343__$1;
(statearr_62530_64723[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (16))){
var inst_62228 = (state_62343[(7)]);
var inst_62230 = cljs.core.chunked_seq_QMARK_(inst_62228);
var state_62343__$1 = state_62343;
if(inst_62230){
var statearr_62533_64724 = state_62343__$1;
(statearr_62533_64724[(1)] = (19));

} else {
var statearr_62534_64725 = state_62343__$1;
(statearr_62534_64725[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (38))){
var inst_62320 = (state_62343[(2)]);
var state_62343__$1 = state_62343;
var statearr_62537_64726 = state_62343__$1;
(statearr_62537_64726[(2)] = inst_62320);

(statearr_62537_64726[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (30))){
var state_62343__$1 = state_62343;
var statearr_62539_64727 = state_62343__$1;
(statearr_62539_64727[(2)] = null);

(statearr_62539_64727[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (10))){
var inst_62205 = (state_62343[(14)]);
var inst_62203 = (state_62343[(16)]);
var inst_62213 = cljs.core._nth(inst_62203,inst_62205);
var inst_62214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62213,(0),null);
var inst_62215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62213,(1),null);
var state_62343__$1 = (function (){var statearr_62542 = state_62343;
(statearr_62542[(24)] = inst_62214);

return statearr_62542;
})();
if(cljs.core.truth_(inst_62215)){
var statearr_62543_64730 = state_62343__$1;
(statearr_62543_64730[(1)] = (13));

} else {
var statearr_62544_64731 = state_62343__$1;
(statearr_62544_64731[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (18))){
var inst_62259 = (state_62343[(2)]);
var state_62343__$1 = state_62343;
var statearr_62547_64732 = state_62343__$1;
(statearr_62547_64732[(2)] = inst_62259);

(statearr_62547_64732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (42))){
var state_62343__$1 = state_62343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62343__$1,(45),dchan);
} else {
if((state_val_62344 === (37))){
var inst_62190 = (state_62343[(10)]);
var inst_62293 = (state_62343[(23)]);
var inst_62310 = (state_62343[(22)]);
var inst_62310__$1 = cljs.core.first(inst_62293);
var inst_62311 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_62310__$1,inst_62190,done);
var state_62343__$1 = (function (){var statearr_62548 = state_62343;
(statearr_62548[(22)] = inst_62310__$1);

return statearr_62548;
})();
if(cljs.core.truth_(inst_62311)){
var statearr_62549_64733 = state_62343__$1;
(statearr_62549_64733[(1)] = (39));

} else {
var statearr_62550_64734 = state_62343__$1;
(statearr_62550_64734[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62344 === (8))){
var inst_62204 = (state_62343[(13)]);
var inst_62205 = (state_62343[(14)]);
var inst_62207 = (inst_62205 < inst_62204);
var inst_62208 = inst_62207;
var state_62343__$1 = state_62343;
if(cljs.core.truth_(inst_62208)){
var statearr_62551_64735 = state_62343__$1;
(statearr_62551_64735[(1)] = (10));

} else {
var statearr_62552_64736 = state_62343__$1;
(statearr_62552_64736[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__10330__auto__ = null;
var cljs$core$async$mult_$_state_machine__10330__auto____0 = (function (){
var statearr_62558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62558[(0)] = cljs$core$async$mult_$_state_machine__10330__auto__);

(statearr_62558[(1)] = (1));

return statearr_62558;
});
var cljs$core$async$mult_$_state_machine__10330__auto____1 = (function (state_62343){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_62343);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e62559){var ex__10333__auto__ = e62559;
var statearr_62560_64737 = state_62343;
(statearr_62560_64737[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_62343[(4)]))){
var statearr_62561_64738 = state_62343;
(statearr_62561_64738[(1)] = cljs.core.first((state_62343[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64742 = state_62343;
state_62343 = G__64742;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10330__auto__ = function(state_62343){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10330__auto____1.call(this,state_62343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10330__auto____0;
cljs$core$async$mult_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10330__auto____1;
return cljs$core$async$mult_$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_62562 = f__10425__auto__();
(statearr_62562[(6)] = c__10424__auto___64644);

return statearr_62562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__62569 = arguments.length;
switch (G__62569) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_64747 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_64747(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_64748 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_64748(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_64757 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_64757(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_64758 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_64758(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_64762 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_64762(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___64767 = arguments.length;
var i__5727__auto___64768 = (0);
while(true){
if((i__5727__auto___64768 < len__5726__auto___64767)){
args__5732__auto__.push((arguments[i__5727__auto___64768]));

var G__64769 = (i__5727__auto___64768 + (1));
i__5727__auto___64768 = G__64769;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__62628){
var map__62631 = p__62628;
var map__62631__$1 = cljs.core.__destructure_map(map__62631);
var opts = map__62631__$1;
var statearr_62632_64770 = state;
(statearr_62632_64770[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_62633_64771 = state;
(statearr_62633_64771[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_62634_64773 = state;
(statearr_62634_64773[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq62622){
var G__62623 = cljs.core.first(seq62622);
var seq62622__$1 = cljs.core.next(seq62622);
var G__62624 = cljs.core.first(seq62622__$1);
var seq62622__$2 = cljs.core.next(seq62622__$1);
var G__62625 = cljs.core.first(seq62622__$2);
var seq62622__$3 = cljs.core.next(seq62622__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62623,G__62624,G__62625,seq62622__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62645 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta62646){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta62646 = meta62646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62647,meta62646__$1){
var self__ = this;
var _62647__$1 = this;
return (new cljs.core.async.t_cljs$core$async62645(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta62646__$1));
}));

(cljs.core.async.t_cljs$core$async62645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62647){
var self__ = this;
var _62647__$1 = this;
return self__.meta62646;
}));

(cljs.core.async.t_cljs$core$async62645.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62645.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async62645.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62645.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async62645.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async62645.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async62645.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async62645.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async62645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta62646","meta62646",648523368,null)], null);
}));

(cljs.core.async.t_cljs$core$async62645.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62645");

(cljs.core.async.t_cljs$core$async62645.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async62645");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62645.
 */
cljs.core.async.__GT_t_cljs$core$async62645 = (function cljs$core$async$__GT_t_cljs$core$async62645(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta62646){
return (new cljs.core.async.t_cljs$core$async62645(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta62646));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async62645(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__10424__auto___64781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_62744){
var state_val_62745 = (state_62744[(1)]);
if((state_val_62745 === (7))){
var inst_62704 = (state_62744[(2)]);
var state_62744__$1 = state_62744;
if(cljs.core.truth_(inst_62704)){
var statearr_62749_64782 = state_62744__$1;
(statearr_62749_64782[(1)] = (8));

} else {
var statearr_62750_64783 = state_62744__$1;
(statearr_62750_64783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (20))){
var inst_62696 = (state_62744[(7)]);
var state_62744__$1 = state_62744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62744__$1,(23),out,inst_62696);
} else {
if((state_val_62745 === (1))){
var inst_62675 = calc_state();
var inst_62676 = cljs.core.__destructure_map(inst_62675);
var inst_62677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62676,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62676,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62676,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_62680 = inst_62675;
var state_62744__$1 = (function (){var statearr_62752 = state_62744;
(statearr_62752[(8)] = inst_62679);

(statearr_62752[(9)] = inst_62680);

(statearr_62752[(10)] = inst_62678);

(statearr_62752[(11)] = inst_62677);

return statearr_62752;
})();
var statearr_62753_64788 = state_62744__$1;
(statearr_62753_64788[(2)] = null);

(statearr_62753_64788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (24))){
var inst_62685 = (state_62744[(12)]);
var inst_62680 = inst_62685;
var state_62744__$1 = (function (){var statearr_62754 = state_62744;
(statearr_62754[(9)] = inst_62680);

return statearr_62754;
})();
var statearr_62755_64789 = state_62744__$1;
(statearr_62755_64789[(2)] = null);

(statearr_62755_64789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (4))){
var inst_62696 = (state_62744[(7)]);
var inst_62699 = (state_62744[(13)]);
var inst_62695 = (state_62744[(2)]);
var inst_62696__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62695,(0),null);
var inst_62697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62695,(1),null);
var inst_62699__$1 = (inst_62696__$1 == null);
var state_62744__$1 = (function (){var statearr_62756 = state_62744;
(statearr_62756[(7)] = inst_62696__$1);

(statearr_62756[(13)] = inst_62699__$1);

(statearr_62756[(14)] = inst_62697);

return statearr_62756;
})();
if(cljs.core.truth_(inst_62699__$1)){
var statearr_62760_64790 = state_62744__$1;
(statearr_62760_64790[(1)] = (5));

} else {
var statearr_62761_64791 = state_62744__$1;
(statearr_62761_64791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (15))){
var inst_62718 = (state_62744[(15)]);
var inst_62686 = (state_62744[(16)]);
var inst_62718__$1 = cljs.core.empty_QMARK_(inst_62686);
var state_62744__$1 = (function (){var statearr_62769 = state_62744;
(statearr_62769[(15)] = inst_62718__$1);

return statearr_62769;
})();
if(inst_62718__$1){
var statearr_62770_64793 = state_62744__$1;
(statearr_62770_64793[(1)] = (17));

} else {
var statearr_62771_64794 = state_62744__$1;
(statearr_62771_64794[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (21))){
var inst_62685 = (state_62744[(12)]);
var inst_62680 = inst_62685;
var state_62744__$1 = (function (){var statearr_62773 = state_62744;
(statearr_62773[(9)] = inst_62680);

return statearr_62773;
})();
var statearr_62774_64795 = state_62744__$1;
(statearr_62774_64795[(2)] = null);

(statearr_62774_64795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (13))){
var inst_62711 = (state_62744[(2)]);
var inst_62712 = calc_state();
var inst_62680 = inst_62712;
var state_62744__$1 = (function (){var statearr_62775 = state_62744;
(statearr_62775[(9)] = inst_62680);

(statearr_62775[(17)] = inst_62711);

return statearr_62775;
})();
var statearr_62777_64800 = state_62744__$1;
(statearr_62777_64800[(2)] = null);

(statearr_62777_64800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (22))){
var inst_62738 = (state_62744[(2)]);
var state_62744__$1 = state_62744;
var statearr_62780_64801 = state_62744__$1;
(statearr_62780_64801[(2)] = inst_62738);

(statearr_62780_64801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (6))){
var inst_62697 = (state_62744[(14)]);
var inst_62702 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62697,change);
var state_62744__$1 = state_62744;
var statearr_62783_64802 = state_62744__$1;
(statearr_62783_64802[(2)] = inst_62702);

(statearr_62783_64802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (25))){
var state_62744__$1 = state_62744;
var statearr_62788_64803 = state_62744__$1;
(statearr_62788_64803[(2)] = null);

(statearr_62788_64803[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (17))){
var inst_62697 = (state_62744[(14)]);
var inst_62687 = (state_62744[(18)]);
var inst_62720 = (inst_62687.cljs$core$IFn$_invoke$arity$1 ? inst_62687.cljs$core$IFn$_invoke$arity$1(inst_62697) : inst_62687.call(null, inst_62697));
var inst_62721 = cljs.core.not(inst_62720);
var state_62744__$1 = state_62744;
var statearr_62790_64804 = state_62744__$1;
(statearr_62790_64804[(2)] = inst_62721);

(statearr_62790_64804[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (3))){
var inst_62742 = (state_62744[(2)]);
var state_62744__$1 = state_62744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62744__$1,inst_62742);
} else {
if((state_val_62745 === (12))){
var state_62744__$1 = state_62744;
var statearr_62791_64805 = state_62744__$1;
(statearr_62791_64805[(2)] = null);

(statearr_62791_64805[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (2))){
var inst_62680 = (state_62744[(9)]);
var inst_62685 = (state_62744[(12)]);
var inst_62685__$1 = cljs.core.__destructure_map(inst_62680);
var inst_62686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62685__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62685__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62685__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_62744__$1 = (function (){var statearr_62795 = state_62744;
(statearr_62795[(18)] = inst_62687);

(statearr_62795[(16)] = inst_62686);

(statearr_62795[(12)] = inst_62685__$1);

return statearr_62795;
})();
return cljs.core.async.ioc_alts_BANG_(state_62744__$1,(4),inst_62688);
} else {
if((state_val_62745 === (23))){
var inst_62729 = (state_62744[(2)]);
var state_62744__$1 = state_62744;
if(cljs.core.truth_(inst_62729)){
var statearr_62799_64808 = state_62744__$1;
(statearr_62799_64808[(1)] = (24));

} else {
var statearr_62800_64809 = state_62744__$1;
(statearr_62800_64809[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (19))){
var inst_62724 = (state_62744[(2)]);
var state_62744__$1 = state_62744;
var statearr_62801_64810 = state_62744__$1;
(statearr_62801_64810[(2)] = inst_62724);

(statearr_62801_64810[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (11))){
var inst_62697 = (state_62744[(14)]);
var inst_62708 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_62697);
var state_62744__$1 = state_62744;
var statearr_62802_64811 = state_62744__$1;
(statearr_62802_64811[(2)] = inst_62708);

(statearr_62802_64811[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (9))){
var inst_62715 = (state_62744[(19)]);
var inst_62697 = (state_62744[(14)]);
var inst_62686 = (state_62744[(16)]);
var inst_62715__$1 = (inst_62686.cljs$core$IFn$_invoke$arity$1 ? inst_62686.cljs$core$IFn$_invoke$arity$1(inst_62697) : inst_62686.call(null, inst_62697));
var state_62744__$1 = (function (){var statearr_62803 = state_62744;
(statearr_62803[(19)] = inst_62715__$1);

return statearr_62803;
})();
if(cljs.core.truth_(inst_62715__$1)){
var statearr_62804_64812 = state_62744__$1;
(statearr_62804_64812[(1)] = (14));

} else {
var statearr_62805_64813 = state_62744__$1;
(statearr_62805_64813[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (5))){
var inst_62699 = (state_62744[(13)]);
var state_62744__$1 = state_62744;
var statearr_62806_64814 = state_62744__$1;
(statearr_62806_64814[(2)] = inst_62699);

(statearr_62806_64814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (14))){
var inst_62715 = (state_62744[(19)]);
var state_62744__$1 = state_62744;
var statearr_62807_64816 = state_62744__$1;
(statearr_62807_64816[(2)] = inst_62715);

(statearr_62807_64816[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (26))){
var inst_62734 = (state_62744[(2)]);
var state_62744__$1 = state_62744;
var statearr_62808_64818 = state_62744__$1;
(statearr_62808_64818[(2)] = inst_62734);

(statearr_62808_64818[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (16))){
var inst_62726 = (state_62744[(2)]);
var state_62744__$1 = state_62744;
if(cljs.core.truth_(inst_62726)){
var statearr_62809_64821 = state_62744__$1;
(statearr_62809_64821[(1)] = (20));

} else {
var statearr_62810_64822 = state_62744__$1;
(statearr_62810_64822[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (10))){
var inst_62740 = (state_62744[(2)]);
var state_62744__$1 = state_62744;
var statearr_62811_64823 = state_62744__$1;
(statearr_62811_64823[(2)] = inst_62740);

(statearr_62811_64823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (18))){
var inst_62718 = (state_62744[(15)]);
var state_62744__$1 = state_62744;
var statearr_62812_64824 = state_62744__$1;
(statearr_62812_64824[(2)] = inst_62718);

(statearr_62812_64824[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62745 === (8))){
var inst_62696 = (state_62744[(7)]);
var inst_62706 = (inst_62696 == null);
var state_62744__$1 = state_62744;
if(cljs.core.truth_(inst_62706)){
var statearr_62813_64825 = state_62744__$1;
(statearr_62813_64825[(1)] = (11));

} else {
var statearr_62814_64826 = state_62744__$1;
(statearr_62814_64826[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__10330__auto__ = null;
var cljs$core$async$mix_$_state_machine__10330__auto____0 = (function (){
var statearr_62820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62820[(0)] = cljs$core$async$mix_$_state_machine__10330__auto__);

(statearr_62820[(1)] = (1));

return statearr_62820;
});
var cljs$core$async$mix_$_state_machine__10330__auto____1 = (function (state_62744){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_62744);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e62821){var ex__10333__auto__ = e62821;
var statearr_62822_64828 = state_62744;
(statearr_62822_64828[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_62744[(4)]))){
var statearr_62829_64829 = state_62744;
(statearr_62829_64829[(1)] = cljs.core.first((state_62744[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64830 = state_62744;
state_62744 = G__64830;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10330__auto__ = function(state_62744){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10330__auto____1.call(this,state_62744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10330__auto____0;
cljs$core$async$mix_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10330__auto____1;
return cljs$core$async$mix_$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_62830 = f__10425__auto__();
(statearr_62830[(6)] = c__10424__auto___64781);

return statearr_62830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_64832 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_64832(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_64841 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_64841(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_64848 = (function() {
var G__64849 = null;
var G__64849__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__64849__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__64849 = function(p,v){
switch(arguments.length){
case 1:
return G__64849__1.call(this,p);
case 2:
return G__64849__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__64849.cljs$core$IFn$_invoke$arity$1 = G__64849__1;
G__64849.cljs$core$IFn$_invoke$arity$2 = G__64849__2;
return G__64849;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__62855 = arguments.length;
switch (G__62855) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_64848(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_64848(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62868 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta62869){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta62869 = meta62869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62870,meta62869__$1){
var self__ = this;
var _62870__$1 = this;
return (new cljs.core.async.t_cljs$core$async62868(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta62869__$1));
}));

(cljs.core.async.t_cljs$core$async62868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62870){
var self__ = this;
var _62870__$1 = this;
return self__.meta62869;
}));

(cljs.core.async.t_cljs$core$async62868.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62868.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async62868.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62868.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async62868.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async62868.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async62868.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async62868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta62869","meta62869",1213960805,null)], null);
}));

(cljs.core.async.t_cljs$core$async62868.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62868");

(cljs.core.async.t_cljs$core$async62868.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async62868");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62868.
 */
cljs.core.async.__GT_t_cljs$core$async62868 = (function cljs$core$async$__GT_t_cljs$core$async62868(ch,topic_fn,buf_fn,mults,ensure_mult,meta62869){
return (new cljs.core.async.t_cljs$core$async62868(ch,topic_fn,buf_fn,mults,ensure_mult,meta62869));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__62866 = arguments.length;
switch (G__62866) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__62864_SHARP_){
if(cljs.core.truth_((p1__62864_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__62864_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__62864_SHARP_.call(null, topic)))){
return p1__62864_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__62864_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async62868(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__10424__auto___64892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_62987){
var state_val_62988 = (state_62987[(1)]);
if((state_val_62988 === (7))){
var inst_62983 = (state_62987[(2)]);
var state_62987__$1 = state_62987;
var statearr_62990_64894 = state_62987__$1;
(statearr_62990_64894[(2)] = inst_62983);

(statearr_62990_64894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (20))){
var state_62987__$1 = state_62987;
var statearr_62995_64898 = state_62987__$1;
(statearr_62995_64898[(2)] = null);

(statearr_62995_64898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (1))){
var state_62987__$1 = state_62987;
var statearr_62997_64901 = state_62987__$1;
(statearr_62997_64901[(2)] = null);

(statearr_62997_64901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (24))){
var inst_62966 = (state_62987[(7)]);
var inst_62975 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_62966);
var state_62987__$1 = state_62987;
var statearr_63000_64904 = state_62987__$1;
(statearr_63000_64904[(2)] = inst_62975);

(statearr_63000_64904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (4))){
var inst_62912 = (state_62987[(8)]);
var inst_62912__$1 = (state_62987[(2)]);
var inst_62913 = (inst_62912__$1 == null);
var state_62987__$1 = (function (){var statearr_63001 = state_62987;
(statearr_63001[(8)] = inst_62912__$1);

return statearr_63001;
})();
if(cljs.core.truth_(inst_62913)){
var statearr_63003_64909 = state_62987__$1;
(statearr_63003_64909[(1)] = (5));

} else {
var statearr_63004_64910 = state_62987__$1;
(statearr_63004_64910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (15))){
var inst_62960 = (state_62987[(2)]);
var state_62987__$1 = state_62987;
var statearr_63006_64911 = state_62987__$1;
(statearr_63006_64911[(2)] = inst_62960);

(statearr_63006_64911[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (21))){
var inst_62980 = (state_62987[(2)]);
var state_62987__$1 = (function (){var statearr_63007 = state_62987;
(statearr_63007[(9)] = inst_62980);

return statearr_63007;
})();
var statearr_63008_64912 = state_62987__$1;
(statearr_63008_64912[(2)] = null);

(statearr_63008_64912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (13))){
var inst_62941 = (state_62987[(10)]);
var inst_62943 = cljs.core.chunked_seq_QMARK_(inst_62941);
var state_62987__$1 = state_62987;
if(inst_62943){
var statearr_63012_64914 = state_62987__$1;
(statearr_63012_64914[(1)] = (16));

} else {
var statearr_63013_64918 = state_62987__$1;
(statearr_63013_64918[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (22))){
var inst_62972 = (state_62987[(2)]);
var state_62987__$1 = state_62987;
if(cljs.core.truth_(inst_62972)){
var statearr_63015_64920 = state_62987__$1;
(statearr_63015_64920[(1)] = (23));

} else {
var statearr_63016_64922 = state_62987__$1;
(statearr_63016_64922[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (6))){
var inst_62912 = (state_62987[(8)]);
var inst_62968 = (state_62987[(11)]);
var inst_62966 = (state_62987[(7)]);
var inst_62966__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_62912) : topic_fn.call(null, inst_62912));
var inst_62967 = cljs.core.deref(mults);
var inst_62968__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62967,inst_62966__$1);
var state_62987__$1 = (function (){var statearr_63019 = state_62987;
(statearr_63019[(11)] = inst_62968__$1);

(statearr_63019[(7)] = inst_62966__$1);

return statearr_63019;
})();
if(cljs.core.truth_(inst_62968__$1)){
var statearr_63021_64931 = state_62987__$1;
(statearr_63021_64931[(1)] = (19));

} else {
var statearr_63026_64932 = state_62987__$1;
(statearr_63026_64932[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (25))){
var inst_62977 = (state_62987[(2)]);
var state_62987__$1 = state_62987;
var statearr_63027_64933 = state_62987__$1;
(statearr_63027_64933[(2)] = inst_62977);

(statearr_63027_64933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (17))){
var inst_62941 = (state_62987[(10)]);
var inst_62950 = cljs.core.first(inst_62941);
var inst_62951 = cljs.core.async.muxch_STAR_(inst_62950);
var inst_62952 = cljs.core.async.close_BANG_(inst_62951);
var inst_62954 = cljs.core.next(inst_62941);
var inst_62922 = inst_62954;
var inst_62923 = null;
var inst_62924 = (0);
var inst_62925 = (0);
var state_62987__$1 = (function (){var statearr_63029 = state_62987;
(statearr_63029[(12)] = inst_62925);

(statearr_63029[(13)] = inst_62922);

(statearr_63029[(14)] = inst_62952);

(statearr_63029[(15)] = inst_62924);

(statearr_63029[(16)] = inst_62923);

return statearr_63029;
})();
var statearr_63030_64936 = state_62987__$1;
(statearr_63030_64936[(2)] = null);

(statearr_63030_64936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (3))){
var inst_62985 = (state_62987[(2)]);
var state_62987__$1 = state_62987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62987__$1,inst_62985);
} else {
if((state_val_62988 === (12))){
var inst_62962 = (state_62987[(2)]);
var state_62987__$1 = state_62987;
var statearr_63033_64940 = state_62987__$1;
(statearr_63033_64940[(2)] = inst_62962);

(statearr_63033_64940[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (2))){
var state_62987__$1 = state_62987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62987__$1,(4),ch);
} else {
if((state_val_62988 === (23))){
var state_62987__$1 = state_62987;
var statearr_63037_64941 = state_62987__$1;
(statearr_63037_64941[(2)] = null);

(statearr_63037_64941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (19))){
var inst_62912 = (state_62987[(8)]);
var inst_62968 = (state_62987[(11)]);
var inst_62970 = cljs.core.async.muxch_STAR_(inst_62968);
var state_62987__$1 = state_62987;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62987__$1,(22),inst_62970,inst_62912);
} else {
if((state_val_62988 === (11))){
var inst_62941 = (state_62987[(10)]);
var inst_62922 = (state_62987[(13)]);
var inst_62941__$1 = cljs.core.seq(inst_62922);
var state_62987__$1 = (function (){var statearr_63042 = state_62987;
(statearr_63042[(10)] = inst_62941__$1);

return statearr_63042;
})();
if(inst_62941__$1){
var statearr_63044_64942 = state_62987__$1;
(statearr_63044_64942[(1)] = (13));

} else {
var statearr_63045_64943 = state_62987__$1;
(statearr_63045_64943[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (9))){
var inst_62964 = (state_62987[(2)]);
var state_62987__$1 = state_62987;
var statearr_63047_64944 = state_62987__$1;
(statearr_63047_64944[(2)] = inst_62964);

(statearr_63047_64944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (5))){
var inst_62919 = cljs.core.deref(mults);
var inst_62920 = cljs.core.vals(inst_62919);
var inst_62921 = cljs.core.seq(inst_62920);
var inst_62922 = inst_62921;
var inst_62923 = null;
var inst_62924 = (0);
var inst_62925 = (0);
var state_62987__$1 = (function (){var statearr_63052 = state_62987;
(statearr_63052[(12)] = inst_62925);

(statearr_63052[(13)] = inst_62922);

(statearr_63052[(15)] = inst_62924);

(statearr_63052[(16)] = inst_62923);

return statearr_63052;
})();
var statearr_63054_64945 = state_62987__$1;
(statearr_63054_64945[(2)] = null);

(statearr_63054_64945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (14))){
var state_62987__$1 = state_62987;
var statearr_63058_64947 = state_62987__$1;
(statearr_63058_64947[(2)] = null);

(statearr_63058_64947[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (16))){
var inst_62941 = (state_62987[(10)]);
var inst_62945 = cljs.core.chunk_first(inst_62941);
var inst_62946 = cljs.core.chunk_rest(inst_62941);
var inst_62947 = cljs.core.count(inst_62945);
var inst_62922 = inst_62946;
var inst_62923 = inst_62945;
var inst_62924 = inst_62947;
var inst_62925 = (0);
var state_62987__$1 = (function (){var statearr_63061 = state_62987;
(statearr_63061[(12)] = inst_62925);

(statearr_63061[(13)] = inst_62922);

(statearr_63061[(15)] = inst_62924);

(statearr_63061[(16)] = inst_62923);

return statearr_63061;
})();
var statearr_63062_64953 = state_62987__$1;
(statearr_63062_64953[(2)] = null);

(statearr_63062_64953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (10))){
var inst_62925 = (state_62987[(12)]);
var inst_62922 = (state_62987[(13)]);
var inst_62924 = (state_62987[(15)]);
var inst_62923 = (state_62987[(16)]);
var inst_62930 = cljs.core._nth(inst_62923,inst_62925);
var inst_62931 = cljs.core.async.muxch_STAR_(inst_62930);
var inst_62932 = cljs.core.async.close_BANG_(inst_62931);
var inst_62938 = (inst_62925 + (1));
var tmp63055 = inst_62922;
var tmp63056 = inst_62924;
var tmp63057 = inst_62923;
var inst_62922__$1 = tmp63055;
var inst_62923__$1 = tmp63057;
var inst_62924__$1 = tmp63056;
var inst_62925__$1 = inst_62938;
var state_62987__$1 = (function (){var statearr_63068 = state_62987;
(statearr_63068[(12)] = inst_62925__$1);

(statearr_63068[(17)] = inst_62932);

(statearr_63068[(13)] = inst_62922__$1);

(statearr_63068[(15)] = inst_62924__$1);

(statearr_63068[(16)] = inst_62923__$1);

return statearr_63068;
})();
var statearr_63070_64962 = state_62987__$1;
(statearr_63070_64962[(2)] = null);

(statearr_63070_64962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (18))){
var inst_62957 = (state_62987[(2)]);
var state_62987__$1 = state_62987;
var statearr_63074_64964 = state_62987__$1;
(statearr_63074_64964[(2)] = inst_62957);

(statearr_63074_64964[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (8))){
var inst_62925 = (state_62987[(12)]);
var inst_62924 = (state_62987[(15)]);
var inst_62927 = (inst_62925 < inst_62924);
var inst_62928 = inst_62927;
var state_62987__$1 = state_62987;
if(cljs.core.truth_(inst_62928)){
var statearr_63075_64968 = state_62987__$1;
(statearr_63075_64968[(1)] = (10));

} else {
var statearr_63076_64969 = state_62987__$1;
(statearr_63076_64969[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10330__auto__ = null;
var cljs$core$async$state_machine__10330__auto____0 = (function (){
var statearr_63078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63078[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_63078[(1)] = (1));

return statearr_63078;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_62987){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_62987);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e63079){var ex__10333__auto__ = e63079;
var statearr_63081_64975 = state_62987;
(statearr_63081_64975[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_62987[(4)]))){
var statearr_63083_64978 = state_62987;
(statearr_63083_64978[(1)] = cljs.core.first((state_62987[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64979 = state_62987;
state_62987 = G__64979;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_62987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_62987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_63085 = f__10425__auto__();
(statearr_63085[(6)] = c__10424__auto___64892);

return statearr_63085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__63089 = arguments.length;
switch (G__63089) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__63101 = arguments.length;
switch (G__63101) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__63110 = arguments.length;
switch (G__63110) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__10424__auto___65001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_63170){
var state_val_63171 = (state_63170[(1)]);
if((state_val_63171 === (7))){
var state_63170__$1 = state_63170;
var statearr_63172_65002 = state_63170__$1;
(statearr_63172_65002[(2)] = null);

(statearr_63172_65002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63171 === (1))){
var state_63170__$1 = state_63170;
var statearr_63173_65003 = state_63170__$1;
(statearr_63173_65003[(2)] = null);

(statearr_63173_65003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63171 === (4))){
var inst_63126 = (state_63170[(7)]);
var inst_63127 = (state_63170[(8)]);
var inst_63129 = (inst_63127 < inst_63126);
var state_63170__$1 = state_63170;
if(cljs.core.truth_(inst_63129)){
var statearr_63178_65007 = state_63170__$1;
(statearr_63178_65007[(1)] = (6));

} else {
var statearr_63179_65008 = state_63170__$1;
(statearr_63179_65008[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63171 === (15))){
var inst_63155 = (state_63170[(9)]);
var inst_63161 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_63155);
var state_63170__$1 = state_63170;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63170__$1,(17),out,inst_63161);
} else {
if((state_val_63171 === (13))){
var inst_63155 = (state_63170[(9)]);
var inst_63155__$1 = (state_63170[(2)]);
var inst_63156 = cljs.core.some(cljs.core.nil_QMARK_,inst_63155__$1);
var state_63170__$1 = (function (){var statearr_63180 = state_63170;
(statearr_63180[(9)] = inst_63155__$1);

return statearr_63180;
})();
if(cljs.core.truth_(inst_63156)){
var statearr_63181_65012 = state_63170__$1;
(statearr_63181_65012[(1)] = (14));

} else {
var statearr_63182_65013 = state_63170__$1;
(statearr_63182_65013[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63171 === (6))){
var state_63170__$1 = state_63170;
var statearr_63186_65015 = state_63170__$1;
(statearr_63186_65015[(2)] = null);

(statearr_63186_65015[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63171 === (17))){
var inst_63163 = (state_63170[(2)]);
var state_63170__$1 = (function (){var statearr_63188 = state_63170;
(statearr_63188[(10)] = inst_63163);

return statearr_63188;
})();
var statearr_63189_65018 = state_63170__$1;
(statearr_63189_65018[(2)] = null);

(statearr_63189_65018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63171 === (3))){
var inst_63168 = (state_63170[(2)]);
var state_63170__$1 = state_63170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63170__$1,inst_63168);
} else {
if((state_val_63171 === (12))){
var _ = (function (){var statearr_63190 = state_63170;
(statearr_63190[(4)] = cljs.core.rest((state_63170[(4)])));

return statearr_63190;
})();
var state_63170__$1 = state_63170;
var ex63187 = (state_63170__$1[(2)]);
var statearr_63195_65019 = state_63170__$1;
(statearr_63195_65019[(5)] = ex63187);


if((ex63187 instanceof Object)){
var statearr_63196_65020 = state_63170__$1;
(statearr_63196_65020[(1)] = (11));

(statearr_63196_65020[(5)] = null);

} else {
throw ex63187;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63171 === (2))){
var inst_63125 = cljs.core.reset_BANG_(dctr,cnt);
var inst_63126 = cnt;
var inst_63127 = (0);
var state_63170__$1 = (function (){var statearr_63204 = state_63170;
(statearr_63204[(11)] = inst_63125);

(statearr_63204[(7)] = inst_63126);

(statearr_63204[(8)] = inst_63127);

return statearr_63204;
})();
var statearr_63209_65022 = state_63170__$1;
(statearr_63209_65022[(2)] = null);

(statearr_63209_65022[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63171 === (11))){
var inst_63131 = (state_63170[(2)]);
var inst_63132 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_63170__$1 = (function (){var statearr_63210 = state_63170;
(statearr_63210[(12)] = inst_63131);

return statearr_63210;
})();
var statearr_63211_65023 = state_63170__$1;
(statearr_63211_65023[(2)] = inst_63132);

(statearr_63211_65023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63171 === (9))){
var inst_63127 = (state_63170[(8)]);
var _ = (function (){var statearr_63213 = state_63170;
(statearr_63213[(4)] = cljs.core.cons((12),(state_63170[(4)])));

return statearr_63213;
})();
var inst_63138 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_63127) : chs__$1.call(null, inst_63127));
var inst_63142 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_63127) : done.call(null, inst_63127));
var inst_63143 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_63138,inst_63142);
var ___$1 = (function (){var statearr_63214 = state_63170;
(statearr_63214[(4)] = cljs.core.rest((state_63170[(4)])));

return statearr_63214;
})();
var state_63170__$1 = state_63170;
var statearr_63216_65032 = state_63170__$1;
(statearr_63216_65032[(2)] = inst_63143);

(statearr_63216_65032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63171 === (5))){
var inst_63153 = (state_63170[(2)]);
var state_63170__$1 = (function (){var statearr_63227 = state_63170;
(statearr_63227[(13)] = inst_63153);

return statearr_63227;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63170__$1,(13),dchan);
} else {
if((state_val_63171 === (14))){
var inst_63159 = cljs.core.async.close_BANG_(out);
var state_63170__$1 = state_63170;
var statearr_63231_65034 = state_63170__$1;
(statearr_63231_65034[(2)] = inst_63159);

(statearr_63231_65034[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63171 === (16))){
var inst_63166 = (state_63170[(2)]);
var state_63170__$1 = state_63170;
var statearr_63234_65035 = state_63170__$1;
(statearr_63234_65035[(2)] = inst_63166);

(statearr_63234_65035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63171 === (10))){
var inst_63127 = (state_63170[(8)]);
var inst_63146 = (state_63170[(2)]);
var inst_63147 = (inst_63127 + (1));
var inst_63127__$1 = inst_63147;
var state_63170__$1 = (function (){var statearr_63235 = state_63170;
(statearr_63235[(14)] = inst_63146);

(statearr_63235[(8)] = inst_63127__$1);

return statearr_63235;
})();
var statearr_63236_65036 = state_63170__$1;
(statearr_63236_65036[(2)] = null);

(statearr_63236_65036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63171 === (8))){
var inst_63151 = (state_63170[(2)]);
var state_63170__$1 = state_63170;
var statearr_63237_65037 = state_63170__$1;
(statearr_63237_65037[(2)] = inst_63151);

(statearr_63237_65037[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10330__auto__ = null;
var cljs$core$async$state_machine__10330__auto____0 = (function (){
var statearr_63239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63239[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_63239[(1)] = (1));

return statearr_63239;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_63170){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_63170);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e63246){var ex__10333__auto__ = e63246;
var statearr_63247_65046 = state_63170;
(statearr_63247_65046[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_63170[(4)]))){
var statearr_63248_65052 = state_63170;
(statearr_63248_65052[(1)] = cljs.core.first((state_63170[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65053 = state_63170;
state_63170 = G__65053;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_63170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_63170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_63250 = f__10425__auto__();
(statearr_63250[(6)] = c__10424__auto___65001);

return statearr_63250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__63260 = arguments.length;
switch (G__63260) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10424__auto___65057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_63302){
var state_val_63303 = (state_63302[(1)]);
if((state_val_63303 === (7))){
var inst_63275 = (state_63302[(7)]);
var inst_63274 = (state_63302[(8)]);
var inst_63274__$1 = (state_63302[(2)]);
var inst_63275__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63274__$1,(0),null);
var inst_63276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63274__$1,(1),null);
var inst_63277 = (inst_63275__$1 == null);
var state_63302__$1 = (function (){var statearr_63316 = state_63302;
(statearr_63316[(9)] = inst_63276);

(statearr_63316[(7)] = inst_63275__$1);

(statearr_63316[(8)] = inst_63274__$1);

return statearr_63316;
})();
if(cljs.core.truth_(inst_63277)){
var statearr_63317_65065 = state_63302__$1;
(statearr_63317_65065[(1)] = (8));

} else {
var statearr_63318_65066 = state_63302__$1;
(statearr_63318_65066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63303 === (1))){
var inst_63264 = cljs.core.vec(chs);
var inst_63265 = inst_63264;
var state_63302__$1 = (function (){var statearr_63319 = state_63302;
(statearr_63319[(10)] = inst_63265);

return statearr_63319;
})();
var statearr_63320_65072 = state_63302__$1;
(statearr_63320_65072[(2)] = null);

(statearr_63320_65072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63303 === (4))){
var inst_63265 = (state_63302[(10)]);
var state_63302__$1 = state_63302;
return cljs.core.async.ioc_alts_BANG_(state_63302__$1,(7),inst_63265);
} else {
if((state_val_63303 === (6))){
var inst_63291 = (state_63302[(2)]);
var state_63302__$1 = state_63302;
var statearr_63329_65077 = state_63302__$1;
(statearr_63329_65077[(2)] = inst_63291);

(statearr_63329_65077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63303 === (3))){
var inst_63293 = (state_63302[(2)]);
var state_63302__$1 = state_63302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63302__$1,inst_63293);
} else {
if((state_val_63303 === (2))){
var inst_63265 = (state_63302[(10)]);
var inst_63267 = cljs.core.count(inst_63265);
var inst_63268 = (inst_63267 > (0));
var state_63302__$1 = state_63302;
if(cljs.core.truth_(inst_63268)){
var statearr_63336_65080 = state_63302__$1;
(statearr_63336_65080[(1)] = (4));

} else {
var statearr_63337_65082 = state_63302__$1;
(statearr_63337_65082[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63303 === (11))){
var inst_63265 = (state_63302[(10)]);
var inst_63284 = (state_63302[(2)]);
var tmp63331 = inst_63265;
var inst_63265__$1 = tmp63331;
var state_63302__$1 = (function (){var statearr_63342 = state_63302;
(statearr_63342[(10)] = inst_63265__$1);

(statearr_63342[(11)] = inst_63284);

return statearr_63342;
})();
var statearr_63343_65084 = state_63302__$1;
(statearr_63343_65084[(2)] = null);

(statearr_63343_65084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63303 === (9))){
var inst_63275 = (state_63302[(7)]);
var state_63302__$1 = state_63302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63302__$1,(11),out,inst_63275);
} else {
if((state_val_63303 === (5))){
var inst_63289 = cljs.core.async.close_BANG_(out);
var state_63302__$1 = state_63302;
var statearr_63346_65086 = state_63302__$1;
(statearr_63346_65086[(2)] = inst_63289);

(statearr_63346_65086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63303 === (10))){
var inst_63287 = (state_63302[(2)]);
var state_63302__$1 = state_63302;
var statearr_63347_65089 = state_63302__$1;
(statearr_63347_65089[(2)] = inst_63287);

(statearr_63347_65089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63303 === (8))){
var inst_63265 = (state_63302[(10)]);
var inst_63276 = (state_63302[(9)]);
var inst_63275 = (state_63302[(7)]);
var inst_63274 = (state_63302[(8)]);
var inst_63279 = (function (){var cs = inst_63265;
var vec__63270 = inst_63274;
var v = inst_63275;
var c = inst_63276;
return (function (p1__63256_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__63256_SHARP_);
});
})();
var inst_63280 = cljs.core.filterv(inst_63279,inst_63265);
var inst_63265__$1 = inst_63280;
var state_63302__$1 = (function (){var statearr_63351 = state_63302;
(statearr_63351[(10)] = inst_63265__$1);

return statearr_63351;
})();
var statearr_63354_65096 = state_63302__$1;
(statearr_63354_65096[(2)] = null);

(statearr_63354_65096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10330__auto__ = null;
var cljs$core$async$state_machine__10330__auto____0 = (function (){
var statearr_63359 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63359[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_63359[(1)] = (1));

return statearr_63359;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_63302){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_63302);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e63365){var ex__10333__auto__ = e63365;
var statearr_63366_65104 = state_63302;
(statearr_63366_65104[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_63302[(4)]))){
var statearr_63367_65105 = state_63302;
(statearr_63367_65105[(1)] = cljs.core.first((state_63302[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65109 = state_63302;
state_63302 = G__65109;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_63302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_63302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_63371 = f__10425__auto__();
(statearr_63371[(6)] = c__10424__auto___65057);

return statearr_63371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__63386 = arguments.length;
switch (G__63386) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10424__auto___65124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_63415){
var state_val_63416 = (state_63415[(1)]);
if((state_val_63416 === (7))){
var inst_63397 = (state_63415[(7)]);
var inst_63397__$1 = (state_63415[(2)]);
var inst_63398 = (inst_63397__$1 == null);
var inst_63399 = cljs.core.not(inst_63398);
var state_63415__$1 = (function (){var statearr_63417 = state_63415;
(statearr_63417[(7)] = inst_63397__$1);

return statearr_63417;
})();
if(inst_63399){
var statearr_63418_65127 = state_63415__$1;
(statearr_63418_65127[(1)] = (8));

} else {
var statearr_63419_65128 = state_63415__$1;
(statearr_63419_65128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63416 === (1))){
var inst_63392 = (0);
var state_63415__$1 = (function (){var statearr_63422 = state_63415;
(statearr_63422[(8)] = inst_63392);

return statearr_63422;
})();
var statearr_63423_65129 = state_63415__$1;
(statearr_63423_65129[(2)] = null);

(statearr_63423_65129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63416 === (4))){
var state_63415__$1 = state_63415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63415__$1,(7),ch);
} else {
if((state_val_63416 === (6))){
var inst_63410 = (state_63415[(2)]);
var state_63415__$1 = state_63415;
var statearr_63430_65130 = state_63415__$1;
(statearr_63430_65130[(2)] = inst_63410);

(statearr_63430_65130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63416 === (3))){
var inst_63412 = (state_63415[(2)]);
var inst_63413 = cljs.core.async.close_BANG_(out);
var state_63415__$1 = (function (){var statearr_63431 = state_63415;
(statearr_63431[(9)] = inst_63412);

return statearr_63431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63415__$1,inst_63413);
} else {
if((state_val_63416 === (2))){
var inst_63392 = (state_63415[(8)]);
var inst_63394 = (inst_63392 < n);
var state_63415__$1 = state_63415;
if(cljs.core.truth_(inst_63394)){
var statearr_63433_65131 = state_63415__$1;
(statearr_63433_65131[(1)] = (4));

} else {
var statearr_63434_65132 = state_63415__$1;
(statearr_63434_65132[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63416 === (11))){
var inst_63392 = (state_63415[(8)]);
var inst_63402 = (state_63415[(2)]);
var inst_63403 = (inst_63392 + (1));
var inst_63392__$1 = inst_63403;
var state_63415__$1 = (function (){var statearr_63435 = state_63415;
(statearr_63435[(8)] = inst_63392__$1);

(statearr_63435[(10)] = inst_63402);

return statearr_63435;
})();
var statearr_63438_65137 = state_63415__$1;
(statearr_63438_65137[(2)] = null);

(statearr_63438_65137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63416 === (9))){
var state_63415__$1 = state_63415;
var statearr_63439_65138 = state_63415__$1;
(statearr_63439_65138[(2)] = null);

(statearr_63439_65138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63416 === (5))){
var state_63415__$1 = state_63415;
var statearr_63440_65142 = state_63415__$1;
(statearr_63440_65142[(2)] = null);

(statearr_63440_65142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63416 === (10))){
var inst_63407 = (state_63415[(2)]);
var state_63415__$1 = state_63415;
var statearr_63441_65143 = state_63415__$1;
(statearr_63441_65143[(2)] = inst_63407);

(statearr_63441_65143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63416 === (8))){
var inst_63397 = (state_63415[(7)]);
var state_63415__$1 = state_63415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63415__$1,(11),out,inst_63397);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10330__auto__ = null;
var cljs$core$async$state_machine__10330__auto____0 = (function (){
var statearr_63447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63447[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_63447[(1)] = (1));

return statearr_63447;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_63415){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_63415);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e63448){var ex__10333__auto__ = e63448;
var statearr_63449_65147 = state_63415;
(statearr_63449_65147[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_63415[(4)]))){
var statearr_63450_65148 = state_63415;
(statearr_63450_65148[(1)] = cljs.core.first((state_63415[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65149 = state_63415;
state_63415 = G__65149;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_63415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_63415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_63451 = f__10425__auto__();
(statearr_63451[(6)] = c__10424__auto___65124);

return statearr_63451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63464 = (function (f,ch,meta63456,_,fn1,meta63465){
this.f = f;
this.ch = ch;
this.meta63456 = meta63456;
this._ = _;
this.fn1 = fn1;
this.meta63465 = meta63465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63466,meta63465__$1){
var self__ = this;
var _63466__$1 = this;
return (new cljs.core.async.t_cljs$core$async63464(self__.f,self__.ch,self__.meta63456,self__._,self__.fn1,meta63465__$1));
}));

(cljs.core.async.t_cljs$core$async63464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63466){
var self__ = this;
var _63466__$1 = this;
return self__.meta63465;
}));

(cljs.core.async.t_cljs$core$async63464.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63464.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async63464.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async63464.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__63453_SHARP_){
var G__63467 = (((p1__63453_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__63453_SHARP_) : self__.f.call(null, p1__63453_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__63467) : f1.call(null, G__63467));
});
}));

(cljs.core.async.t_cljs$core$async63464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63456","meta63456",1963232283,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async63455","cljs.core.async/t_cljs$core$async63455",237406918,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta63465","meta63465",854842691,null)], null);
}));

(cljs.core.async.t_cljs$core$async63464.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63464");

(cljs.core.async.t_cljs$core$async63464.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async63464");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63464.
 */
cljs.core.async.__GT_t_cljs$core$async63464 = (function cljs$core$async$__GT_t_cljs$core$async63464(f,ch,meta63456,_,fn1,meta63465){
return (new cljs.core.async.t_cljs$core$async63464(f,ch,meta63456,_,fn1,meta63465));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63455 = (function (f,ch,meta63456){
this.f = f;
this.ch = ch;
this.meta63456 = meta63456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63457,meta63456__$1){
var self__ = this;
var _63457__$1 = this;
return (new cljs.core.async.t_cljs$core$async63455(self__.f,self__.ch,meta63456__$1));
}));

(cljs.core.async.t_cljs$core$async63455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63457){
var self__ = this;
var _63457__$1 = this;
return self__.meta63456;
}));

(cljs.core.async.t_cljs$core$async63455.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63455.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63455.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63455.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63455.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async63464(self__.f,self__.ch,self__.meta63456,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__63478 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__63478) : self__.f.call(null, G__63478));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async63455.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63455.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async63455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63456","meta63456",1963232283,null)], null);
}));

(cljs.core.async.t_cljs$core$async63455.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63455");

(cljs.core.async.t_cljs$core$async63455.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async63455");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63455.
 */
cljs.core.async.__GT_t_cljs$core$async63455 = (function cljs$core$async$__GT_t_cljs$core$async63455(f,ch,meta63456){
return (new cljs.core.async.t_cljs$core$async63455(f,ch,meta63456));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async63455(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63498 = (function (f,ch,meta63499){
this.f = f;
this.ch = ch;
this.meta63499 = meta63499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63500,meta63499__$1){
var self__ = this;
var _63500__$1 = this;
return (new cljs.core.async.t_cljs$core$async63498(self__.f,self__.ch,meta63499__$1));
}));

(cljs.core.async.t_cljs$core$async63498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63500){
var self__ = this;
var _63500__$1 = this;
return self__.meta63499;
}));

(cljs.core.async.t_cljs$core$async63498.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63498.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63498.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63498.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async63498.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63498.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async63498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63499","meta63499",-1967044790,null)], null);
}));

(cljs.core.async.t_cljs$core$async63498.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63498");

(cljs.core.async.t_cljs$core$async63498.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async63498");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63498.
 */
cljs.core.async.__GT_t_cljs$core$async63498 = (function cljs$core$async$__GT_t_cljs$core$async63498(f,ch,meta63499){
return (new cljs.core.async.t_cljs$core$async63498(f,ch,meta63499));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async63498(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63537 = (function (p,ch,meta63538){
this.p = p;
this.ch = ch;
this.meta63538 = meta63538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63539,meta63538__$1){
var self__ = this;
var _63539__$1 = this;
return (new cljs.core.async.t_cljs$core$async63537(self__.p,self__.ch,meta63538__$1));
}));

(cljs.core.async.t_cljs$core$async63537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63539){
var self__ = this;
var _63539__$1 = this;
return self__.meta63538;
}));

(cljs.core.async.t_cljs$core$async63537.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63537.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63537.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63537.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63537.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async63537.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63537.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async63537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63538","meta63538",738986155,null)], null);
}));

(cljs.core.async.t_cljs$core$async63537.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63537");

(cljs.core.async.t_cljs$core$async63537.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async63537");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63537.
 */
cljs.core.async.__GT_t_cljs$core$async63537 = (function cljs$core$async$__GT_t_cljs$core$async63537(p,ch,meta63538){
return (new cljs.core.async.t_cljs$core$async63537(p,ch,meta63538));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async63537(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__63595 = arguments.length;
switch (G__63595) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10424__auto___65171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_63617){
var state_val_63618 = (state_63617[(1)]);
if((state_val_63618 === (7))){
var inst_63613 = (state_63617[(2)]);
var state_63617__$1 = state_63617;
var statearr_63619_65172 = state_63617__$1;
(statearr_63619_65172[(2)] = inst_63613);

(statearr_63619_65172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63618 === (1))){
var state_63617__$1 = state_63617;
var statearr_63622_65177 = state_63617__$1;
(statearr_63622_65177[(2)] = null);

(statearr_63622_65177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63618 === (4))){
var inst_63599 = (state_63617[(7)]);
var inst_63599__$1 = (state_63617[(2)]);
var inst_63600 = (inst_63599__$1 == null);
var state_63617__$1 = (function (){var statearr_63623 = state_63617;
(statearr_63623[(7)] = inst_63599__$1);

return statearr_63623;
})();
if(cljs.core.truth_(inst_63600)){
var statearr_63627_65179 = state_63617__$1;
(statearr_63627_65179[(1)] = (5));

} else {
var statearr_63628_65181 = state_63617__$1;
(statearr_63628_65181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63618 === (6))){
var inst_63599 = (state_63617[(7)]);
var inst_63604 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_63599) : p.call(null, inst_63599));
var state_63617__$1 = state_63617;
if(cljs.core.truth_(inst_63604)){
var statearr_63633_65182 = state_63617__$1;
(statearr_63633_65182[(1)] = (8));

} else {
var statearr_63634_65184 = state_63617__$1;
(statearr_63634_65184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63618 === (3))){
var inst_63615 = (state_63617[(2)]);
var state_63617__$1 = state_63617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63617__$1,inst_63615);
} else {
if((state_val_63618 === (2))){
var state_63617__$1 = state_63617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63617__$1,(4),ch);
} else {
if((state_val_63618 === (11))){
var inst_63607 = (state_63617[(2)]);
var state_63617__$1 = state_63617;
var statearr_63636_65185 = state_63617__$1;
(statearr_63636_65185[(2)] = inst_63607);

(statearr_63636_65185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63618 === (9))){
var state_63617__$1 = state_63617;
var statearr_63637_65186 = state_63617__$1;
(statearr_63637_65186[(2)] = null);

(statearr_63637_65186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63618 === (5))){
var inst_63602 = cljs.core.async.close_BANG_(out);
var state_63617__$1 = state_63617;
var statearr_63638_65187 = state_63617__$1;
(statearr_63638_65187[(2)] = inst_63602);

(statearr_63638_65187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63618 === (10))){
var inst_63610 = (state_63617[(2)]);
var state_63617__$1 = (function (){var statearr_63639 = state_63617;
(statearr_63639[(8)] = inst_63610);

return statearr_63639;
})();
var statearr_63640_65189 = state_63617__$1;
(statearr_63640_65189[(2)] = null);

(statearr_63640_65189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63618 === (8))){
var inst_63599 = (state_63617[(7)]);
var state_63617__$1 = state_63617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63617__$1,(11),out,inst_63599);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10330__auto__ = null;
var cljs$core$async$state_machine__10330__auto____0 = (function (){
var statearr_63642 = [null,null,null,null,null,null,null,null,null];
(statearr_63642[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_63642[(1)] = (1));

return statearr_63642;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_63617){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_63617);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e63647){var ex__10333__auto__ = e63647;
var statearr_63648_65191 = state_63617;
(statearr_63648_65191[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_63617[(4)]))){
var statearr_63651_65192 = state_63617;
(statearr_63651_65192[(1)] = cljs.core.first((state_63617[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65197 = state_63617;
state_63617 = G__65197;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_63617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_63617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_63654 = f__10425__auto__();
(statearr_63654[(6)] = c__10424__auto___65171);

return statearr_63654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__63656 = arguments.length;
switch (G__63656) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10424__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_63730){
var state_val_63731 = (state_63730[(1)]);
if((state_val_63731 === (7))){
var inst_63726 = (state_63730[(2)]);
var state_63730__$1 = state_63730;
var statearr_63743_65205 = state_63730__$1;
(statearr_63743_65205[(2)] = inst_63726);

(statearr_63743_65205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63731 === (20))){
var inst_63692 = (state_63730[(7)]);
var inst_63705 = (state_63730[(2)]);
var inst_63706 = cljs.core.next(inst_63692);
var inst_63676 = inst_63706;
var inst_63677 = null;
var inst_63678 = (0);
var inst_63679 = (0);
var state_63730__$1 = (function (){var statearr_63744 = state_63730;
(statearr_63744[(8)] = inst_63678);

(statearr_63744[(9)] = inst_63677);

(statearr_63744[(10)] = inst_63705);

(statearr_63744[(11)] = inst_63679);

(statearr_63744[(12)] = inst_63676);

return statearr_63744;
})();
var statearr_63745_65207 = state_63730__$1;
(statearr_63745_65207[(2)] = null);

(statearr_63745_65207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63731 === (1))){
var state_63730__$1 = state_63730;
var statearr_63749_65208 = state_63730__$1;
(statearr_63749_65208[(2)] = null);

(statearr_63749_65208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63731 === (4))){
var inst_63665 = (state_63730[(13)]);
var inst_63665__$1 = (state_63730[(2)]);
var inst_63666 = (inst_63665__$1 == null);
var state_63730__$1 = (function (){var statearr_63750 = state_63730;
(statearr_63750[(13)] = inst_63665__$1);

return statearr_63750;
})();
if(cljs.core.truth_(inst_63666)){
var statearr_63751_65209 = state_63730__$1;
(statearr_63751_65209[(1)] = (5));

} else {
var statearr_63752_65210 = state_63730__$1;
(statearr_63752_65210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63731 === (15))){
var state_63730__$1 = state_63730;
var statearr_63759_65211 = state_63730__$1;
(statearr_63759_65211[(2)] = null);

(statearr_63759_65211[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63731 === (21))){
var state_63730__$1 = state_63730;
var statearr_63760_65213 = state_63730__$1;
(statearr_63760_65213[(2)] = null);

(statearr_63760_65213[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63731 === (13))){
var inst_63678 = (state_63730[(8)]);
var inst_63677 = (state_63730[(9)]);
var inst_63679 = (state_63730[(11)]);
var inst_63676 = (state_63730[(12)]);
var inst_63686 = (state_63730[(2)]);
var inst_63688 = (inst_63679 + (1));
var tmp63756 = inst_63678;
var tmp63757 = inst_63677;
var tmp63758 = inst_63676;
var inst_63676__$1 = tmp63758;
var inst_63677__$1 = tmp63757;
var inst_63678__$1 = tmp63756;
var inst_63679__$1 = inst_63688;
var state_63730__$1 = (function (){var statearr_63764 = state_63730;
(statearr_63764[(8)] = inst_63678__$1);

(statearr_63764[(9)] = inst_63677__$1);

(statearr_63764[(14)] = inst_63686);

(statearr_63764[(11)] = inst_63679__$1);

(statearr_63764[(12)] = inst_63676__$1);

return statearr_63764;
})();
var statearr_63765_65219 = state_63730__$1;
(statearr_63765_65219[(2)] = null);

(statearr_63765_65219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63731 === (22))){
var state_63730__$1 = state_63730;
var statearr_63768_65220 = state_63730__$1;
(statearr_63768_65220[(2)] = null);

(statearr_63768_65220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63731 === (6))){
var inst_63665 = (state_63730[(13)]);
var inst_63674 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_63665) : f.call(null, inst_63665));
var inst_63675 = cljs.core.seq(inst_63674);
var inst_63676 = inst_63675;
var inst_63677 = null;
var inst_63678 = (0);
var inst_63679 = (0);
var state_63730__$1 = (function (){var statearr_63772 = state_63730;
(statearr_63772[(8)] = inst_63678);

(statearr_63772[(9)] = inst_63677);

(statearr_63772[(11)] = inst_63679);

(statearr_63772[(12)] = inst_63676);

return statearr_63772;
})();
var statearr_63774_65221 = state_63730__$1;
(statearr_63774_65221[(2)] = null);

(statearr_63774_65221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63731 === (17))){
var inst_63692 = (state_63730[(7)]);
var inst_63696 = cljs.core.chunk_first(inst_63692);
var inst_63698 = cljs.core.chunk_rest(inst_63692);
var inst_63699 = cljs.core.count(inst_63696);
var inst_63676 = inst_63698;
var inst_63677 = inst_63696;
var inst_63678 = inst_63699;
var inst_63679 = (0);
var state_63730__$1 = (function (){var statearr_63778 = state_63730;
(statearr_63778[(8)] = inst_63678);

(statearr_63778[(9)] = inst_63677);

(statearr_63778[(11)] = inst_63679);

(statearr_63778[(12)] = inst_63676);

return statearr_63778;
})();
var statearr_63783_65222 = state_63730__$1;
(statearr_63783_65222[(2)] = null);

(statearr_63783_65222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63731 === (3))){
var inst_63728 = (state_63730[(2)]);
var state_63730__$1 = state_63730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63730__$1,inst_63728);
} else {
if((state_val_63731 === (12))){
var inst_63714 = (state_63730[(2)]);
var state_63730__$1 = state_63730;
var statearr_63789_65227 = state_63730__$1;
(statearr_63789_65227[(2)] = inst_63714);

(statearr_63789_65227[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63731 === (2))){
var state_63730__$1 = state_63730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63730__$1,(4),in$);
} else {
if((state_val_63731 === (23))){
var inst_63724 = (state_63730[(2)]);
var state_63730__$1 = state_63730;
var statearr_63790_65228 = state_63730__$1;
(statearr_63790_65228[(2)] = inst_63724);

(statearr_63790_65228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63731 === (19))){
var inst_63709 = (state_63730[(2)]);
var state_63730__$1 = state_63730;
var statearr_63791_65229 = state_63730__$1;
(statearr_63791_65229[(2)] = inst_63709);

(statearr_63791_65229[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63731 === (11))){
var inst_63692 = (state_63730[(7)]);
var inst_63676 = (state_63730[(12)]);
var inst_63692__$1 = cljs.core.seq(inst_63676);
var state_63730__$1 = (function (){var statearr_63793 = state_63730;
(statearr_63793[(7)] = inst_63692__$1);

return statearr_63793;
})();
if(inst_63692__$1){
var statearr_63795_65230 = state_63730__$1;
(statearr_63795_65230[(1)] = (14));

} else {
var statearr_63797_65231 = state_63730__$1;
(statearr_63797_65231[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63731 === (9))){
var inst_63716 = (state_63730[(2)]);
var inst_63718 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_63730__$1 = (function (){var statearr_63799 = state_63730;
(statearr_63799[(15)] = inst_63716);

return statearr_63799;
})();
if(cljs.core.truth_(inst_63718)){
var statearr_63800_65233 = state_63730__$1;
(statearr_63800_65233[(1)] = (21));

} else {
var statearr_63801_65234 = state_63730__$1;
(statearr_63801_65234[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63731 === (5))){
var inst_63668 = cljs.core.async.close_BANG_(out);
var state_63730__$1 = state_63730;
var statearr_63803_65235 = state_63730__$1;
(statearr_63803_65235[(2)] = inst_63668);

(statearr_63803_65235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63731 === (14))){
var inst_63692 = (state_63730[(7)]);
var inst_63694 = cljs.core.chunked_seq_QMARK_(inst_63692);
var state_63730__$1 = state_63730;
if(inst_63694){
var statearr_63804_65239 = state_63730__$1;
(statearr_63804_65239[(1)] = (17));

} else {
var statearr_63805_65240 = state_63730__$1;
(statearr_63805_65240[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63731 === (16))){
var inst_63712 = (state_63730[(2)]);
var state_63730__$1 = state_63730;
var statearr_63806_65241 = state_63730__$1;
(statearr_63806_65241[(2)] = inst_63712);

(statearr_63806_65241[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63731 === (10))){
var inst_63677 = (state_63730[(9)]);
var inst_63679 = (state_63730[(11)]);
var inst_63684 = cljs.core._nth(inst_63677,inst_63679);
var state_63730__$1 = state_63730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63730__$1,(13),out,inst_63684);
} else {
if((state_val_63731 === (18))){
var inst_63692 = (state_63730[(7)]);
var inst_63703 = cljs.core.first(inst_63692);
var state_63730__$1 = state_63730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63730__$1,(20),out,inst_63703);
} else {
if((state_val_63731 === (8))){
var inst_63678 = (state_63730[(8)]);
var inst_63679 = (state_63730[(11)]);
var inst_63681 = (inst_63679 < inst_63678);
var inst_63682 = inst_63681;
var state_63730__$1 = state_63730;
if(cljs.core.truth_(inst_63682)){
var statearr_63809_65246 = state_63730__$1;
(statearr_63809_65246[(1)] = (10));

} else {
var statearr_63810_65247 = state_63730__$1;
(statearr_63810_65247[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____0 = (function (){
var statearr_63812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63812[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__);

(statearr_63812[(1)] = (1));

return statearr_63812;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____1 = (function (state_63730){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_63730);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e63817){var ex__10333__auto__ = e63817;
var statearr_63818_65251 = state_63730;
(statearr_63818_65251[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_63730[(4)]))){
var statearr_63821_65252 = state_63730;
(statearr_63821_65252[(1)] = cljs.core.first((state_63730[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65253 = state_63730;
state_63730 = G__65253;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__ = function(state_63730){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____1.call(this,state_63730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_63823 = f__10425__auto__();
(statearr_63823[(6)] = c__10424__auto__);

return statearr_63823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));

return c__10424__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__63826 = arguments.length;
switch (G__63826) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__63836 = arguments.length;
switch (G__63836) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__63846 = arguments.length;
switch (G__63846) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10424__auto___65263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_63876){
var state_val_63877 = (state_63876[(1)]);
if((state_val_63877 === (7))){
var inst_63867 = (state_63876[(2)]);
var state_63876__$1 = state_63876;
var statearr_63889_65268 = state_63876__$1;
(statearr_63889_65268[(2)] = inst_63867);

(statearr_63889_65268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63877 === (1))){
var inst_63849 = null;
var state_63876__$1 = (function (){var statearr_63890 = state_63876;
(statearr_63890[(7)] = inst_63849);

return statearr_63890;
})();
var statearr_63891_65269 = state_63876__$1;
(statearr_63891_65269[(2)] = null);

(statearr_63891_65269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63877 === (4))){
var inst_63852 = (state_63876[(8)]);
var inst_63852__$1 = (state_63876[(2)]);
var inst_63853 = (inst_63852__$1 == null);
var inst_63854 = cljs.core.not(inst_63853);
var state_63876__$1 = (function (){var statearr_63895 = state_63876;
(statearr_63895[(8)] = inst_63852__$1);

return statearr_63895;
})();
if(inst_63854){
var statearr_63896_65271 = state_63876__$1;
(statearr_63896_65271[(1)] = (5));

} else {
var statearr_63897_65272 = state_63876__$1;
(statearr_63897_65272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63877 === (6))){
var state_63876__$1 = state_63876;
var statearr_63899_65273 = state_63876__$1;
(statearr_63899_65273[(2)] = null);

(statearr_63899_65273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63877 === (3))){
var inst_63869 = (state_63876[(2)]);
var inst_63870 = cljs.core.async.close_BANG_(out);
var state_63876__$1 = (function (){var statearr_63905 = state_63876;
(statearr_63905[(9)] = inst_63869);

return statearr_63905;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63876__$1,inst_63870);
} else {
if((state_val_63877 === (2))){
var state_63876__$1 = state_63876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63876__$1,(4),ch);
} else {
if((state_val_63877 === (11))){
var inst_63852 = (state_63876[(8)]);
var inst_63861 = (state_63876[(2)]);
var inst_63849 = inst_63852;
var state_63876__$1 = (function (){var statearr_63907 = state_63876;
(statearr_63907[(7)] = inst_63849);

(statearr_63907[(10)] = inst_63861);

return statearr_63907;
})();
var statearr_63908_65276 = state_63876__$1;
(statearr_63908_65276[(2)] = null);

(statearr_63908_65276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63877 === (9))){
var inst_63852 = (state_63876[(8)]);
var state_63876__$1 = state_63876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63876__$1,(11),out,inst_63852);
} else {
if((state_val_63877 === (5))){
var inst_63852 = (state_63876[(8)]);
var inst_63849 = (state_63876[(7)]);
var inst_63856 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_63852,inst_63849);
var state_63876__$1 = state_63876;
if(inst_63856){
var statearr_63911_65280 = state_63876__$1;
(statearr_63911_65280[(1)] = (8));

} else {
var statearr_63912_65281 = state_63876__$1;
(statearr_63912_65281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63877 === (10))){
var inst_63864 = (state_63876[(2)]);
var state_63876__$1 = state_63876;
var statearr_63915_65282 = state_63876__$1;
(statearr_63915_65282[(2)] = inst_63864);

(statearr_63915_65282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63877 === (8))){
var inst_63849 = (state_63876[(7)]);
var tmp63910 = inst_63849;
var inst_63849__$1 = tmp63910;
var state_63876__$1 = (function (){var statearr_63920 = state_63876;
(statearr_63920[(7)] = inst_63849__$1);

return statearr_63920;
})();
var statearr_63923_65284 = state_63876__$1;
(statearr_63923_65284[(2)] = null);

(statearr_63923_65284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10330__auto__ = null;
var cljs$core$async$state_machine__10330__auto____0 = (function (){
var statearr_63926 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63926[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_63926[(1)] = (1));

return statearr_63926;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_63876){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_63876);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e63927){var ex__10333__auto__ = e63927;
var statearr_63928_65293 = state_63876;
(statearr_63928_65293[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_63876[(4)]))){
var statearr_63930_65294 = state_63876;
(statearr_63930_65294[(1)] = cljs.core.first((state_63876[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65296 = state_63876;
state_63876 = G__65296;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_63876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_63876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_63933 = f__10425__auto__();
(statearr_63933[(6)] = c__10424__auto___65263);

return statearr_63933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__63942 = arguments.length;
switch (G__63942) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10424__auto___65299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_63982){
var state_val_63983 = (state_63982[(1)]);
if((state_val_63983 === (7))){
var inst_63978 = (state_63982[(2)]);
var state_63982__$1 = state_63982;
var statearr_63984_65305 = state_63982__$1;
(statearr_63984_65305[(2)] = inst_63978);

(statearr_63984_65305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63983 === (1))){
var inst_63945 = (new Array(n));
var inst_63946 = inst_63945;
var inst_63947 = (0);
var state_63982__$1 = (function (){var statearr_63985 = state_63982;
(statearr_63985[(7)] = inst_63947);

(statearr_63985[(8)] = inst_63946);

return statearr_63985;
})();
var statearr_63986_65307 = state_63982__$1;
(statearr_63986_65307[(2)] = null);

(statearr_63986_65307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63983 === (4))){
var inst_63950 = (state_63982[(9)]);
var inst_63950__$1 = (state_63982[(2)]);
var inst_63951 = (inst_63950__$1 == null);
var inst_63952 = cljs.core.not(inst_63951);
var state_63982__$1 = (function (){var statearr_63988 = state_63982;
(statearr_63988[(9)] = inst_63950__$1);

return statearr_63988;
})();
if(inst_63952){
var statearr_63989_65309 = state_63982__$1;
(statearr_63989_65309[(1)] = (5));

} else {
var statearr_63990_65311 = state_63982__$1;
(statearr_63990_65311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63983 === (15))){
var inst_63972 = (state_63982[(2)]);
var state_63982__$1 = state_63982;
var statearr_63991_65312 = state_63982__$1;
(statearr_63991_65312[(2)] = inst_63972);

(statearr_63991_65312[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63983 === (13))){
var state_63982__$1 = state_63982;
var statearr_63992_65313 = state_63982__$1;
(statearr_63992_65313[(2)] = null);

(statearr_63992_65313[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63983 === (6))){
var inst_63947 = (state_63982[(7)]);
var inst_63968 = (inst_63947 > (0));
var state_63982__$1 = state_63982;
if(cljs.core.truth_(inst_63968)){
var statearr_63993_65318 = state_63982__$1;
(statearr_63993_65318[(1)] = (12));

} else {
var statearr_63994_65319 = state_63982__$1;
(statearr_63994_65319[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63983 === (3))){
var inst_63980 = (state_63982[(2)]);
var state_63982__$1 = state_63982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63982__$1,inst_63980);
} else {
if((state_val_63983 === (12))){
var inst_63946 = (state_63982[(8)]);
var inst_63970 = cljs.core.vec(inst_63946);
var state_63982__$1 = state_63982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63982__$1,(15),out,inst_63970);
} else {
if((state_val_63983 === (2))){
var state_63982__$1 = state_63982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63982__$1,(4),ch);
} else {
if((state_val_63983 === (11))){
var inst_63962 = (state_63982[(2)]);
var inst_63963 = (new Array(n));
var inst_63946 = inst_63963;
var inst_63947 = (0);
var state_63982__$1 = (function (){var statearr_64010 = state_63982;
(statearr_64010[(10)] = inst_63962);

(statearr_64010[(7)] = inst_63947);

(statearr_64010[(8)] = inst_63946);

return statearr_64010;
})();
var statearr_64011_65321 = state_63982__$1;
(statearr_64011_65321[(2)] = null);

(statearr_64011_65321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63983 === (9))){
var inst_63946 = (state_63982[(8)]);
var inst_63960 = cljs.core.vec(inst_63946);
var state_63982__$1 = state_63982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63982__$1,(11),out,inst_63960);
} else {
if((state_val_63983 === (5))){
var inst_63947 = (state_63982[(7)]);
var inst_63946 = (state_63982[(8)]);
var inst_63955 = (state_63982[(11)]);
var inst_63950 = (state_63982[(9)]);
var inst_63954 = (inst_63946[inst_63947] = inst_63950);
var inst_63955__$1 = (inst_63947 + (1));
var inst_63956 = (inst_63955__$1 < n);
var state_63982__$1 = (function (){var statearr_64021 = state_63982;
(statearr_64021[(12)] = inst_63954);

(statearr_64021[(11)] = inst_63955__$1);

return statearr_64021;
})();
if(cljs.core.truth_(inst_63956)){
var statearr_64022_65329 = state_63982__$1;
(statearr_64022_65329[(1)] = (8));

} else {
var statearr_64024_65330 = state_63982__$1;
(statearr_64024_65330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63983 === (14))){
var inst_63975 = (state_63982[(2)]);
var inst_63976 = cljs.core.async.close_BANG_(out);
var state_63982__$1 = (function (){var statearr_64027 = state_63982;
(statearr_64027[(13)] = inst_63975);

return statearr_64027;
})();
var statearr_64028_65331 = state_63982__$1;
(statearr_64028_65331[(2)] = inst_63976);

(statearr_64028_65331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63983 === (10))){
var inst_63966 = (state_63982[(2)]);
var state_63982__$1 = state_63982;
var statearr_64029_65332 = state_63982__$1;
(statearr_64029_65332[(2)] = inst_63966);

(statearr_64029_65332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63983 === (8))){
var inst_63946 = (state_63982[(8)]);
var inst_63955 = (state_63982[(11)]);
var tmp64025 = inst_63946;
var inst_63946__$1 = tmp64025;
var inst_63947 = inst_63955;
var state_63982__$1 = (function (){var statearr_64031 = state_63982;
(statearr_64031[(7)] = inst_63947);

(statearr_64031[(8)] = inst_63946__$1);

return statearr_64031;
})();
var statearr_64032_65334 = state_63982__$1;
(statearr_64032_65334[(2)] = null);

(statearr_64032_65334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10330__auto__ = null;
var cljs$core$async$state_machine__10330__auto____0 = (function (){
var statearr_64033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64033[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_64033[(1)] = (1));

return statearr_64033;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_63982){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_63982);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e64034){var ex__10333__auto__ = e64034;
var statearr_64035_65340 = state_63982;
(statearr_64035_65340[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_63982[(4)]))){
var statearr_64036_65341 = state_63982;
(statearr_64036_65341[(1)] = cljs.core.first((state_63982[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65342 = state_63982;
state_63982 = G__65342;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_63982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_63982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_64039 = f__10425__auto__();
(statearr_64039[(6)] = c__10424__auto___65299);

return statearr_64039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__64043 = arguments.length;
switch (G__64043) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10424__auto___65352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_64090){
var state_val_64091 = (state_64090[(1)]);
if((state_val_64091 === (7))){
var inst_64086 = (state_64090[(2)]);
var state_64090__$1 = state_64090;
var statearr_64094_65354 = state_64090__$1;
(statearr_64094_65354[(2)] = inst_64086);

(statearr_64094_65354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64091 === (1))){
var inst_64044 = [];
var inst_64045 = inst_64044;
var inst_64046 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_64090__$1 = (function (){var statearr_64096 = state_64090;
(statearr_64096[(7)] = inst_64045);

(statearr_64096[(8)] = inst_64046);

return statearr_64096;
})();
var statearr_64098_65357 = state_64090__$1;
(statearr_64098_65357[(2)] = null);

(statearr_64098_65357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64091 === (4))){
var inst_64049 = (state_64090[(9)]);
var inst_64049__$1 = (state_64090[(2)]);
var inst_64051 = (inst_64049__$1 == null);
var inst_64052 = cljs.core.not(inst_64051);
var state_64090__$1 = (function (){var statearr_64100 = state_64090;
(statearr_64100[(9)] = inst_64049__$1);

return statearr_64100;
})();
if(inst_64052){
var statearr_64103_65358 = state_64090__$1;
(statearr_64103_65358[(1)] = (5));

} else {
var statearr_64104_65359 = state_64090__$1;
(statearr_64104_65359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64091 === (15))){
var inst_64045 = (state_64090[(7)]);
var inst_64078 = cljs.core.vec(inst_64045);
var state_64090__$1 = state_64090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64090__$1,(18),out,inst_64078);
} else {
if((state_val_64091 === (13))){
var inst_64073 = (state_64090[(2)]);
var state_64090__$1 = state_64090;
var statearr_64107_65362 = state_64090__$1;
(statearr_64107_65362[(2)] = inst_64073);

(statearr_64107_65362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64091 === (6))){
var inst_64045 = (state_64090[(7)]);
var inst_64075 = inst_64045.length;
var inst_64076 = (inst_64075 > (0));
var state_64090__$1 = state_64090;
if(cljs.core.truth_(inst_64076)){
var statearr_64108_65363 = state_64090__$1;
(statearr_64108_65363[(1)] = (15));

} else {
var statearr_64109_65365 = state_64090__$1;
(statearr_64109_65365[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64091 === (17))){
var inst_64083 = (state_64090[(2)]);
var inst_64084 = cljs.core.async.close_BANG_(out);
var state_64090__$1 = (function (){var statearr_64110 = state_64090;
(statearr_64110[(10)] = inst_64083);

return statearr_64110;
})();
var statearr_64111_65367 = state_64090__$1;
(statearr_64111_65367[(2)] = inst_64084);

(statearr_64111_65367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64091 === (3))){
var inst_64088 = (state_64090[(2)]);
var state_64090__$1 = state_64090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64090__$1,inst_64088);
} else {
if((state_val_64091 === (12))){
var inst_64045 = (state_64090[(7)]);
var inst_64066 = cljs.core.vec(inst_64045);
var state_64090__$1 = state_64090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64090__$1,(14),out,inst_64066);
} else {
if((state_val_64091 === (2))){
var state_64090__$1 = state_64090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64090__$1,(4),ch);
} else {
if((state_val_64091 === (11))){
var inst_64045 = (state_64090[(7)]);
var inst_64055 = (state_64090[(11)]);
var inst_64049 = (state_64090[(9)]);
var inst_64063 = inst_64045.push(inst_64049);
var tmp64112 = inst_64045;
var inst_64045__$1 = tmp64112;
var inst_64046 = inst_64055;
var state_64090__$1 = (function (){var statearr_64115 = state_64090;
(statearr_64115[(12)] = inst_64063);

(statearr_64115[(7)] = inst_64045__$1);

(statearr_64115[(8)] = inst_64046);

return statearr_64115;
})();
var statearr_64116_65383 = state_64090__$1;
(statearr_64116_65383[(2)] = null);

(statearr_64116_65383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64091 === (9))){
var inst_64046 = (state_64090[(8)]);
var inst_64059 = cljs.core.keyword_identical_QMARK_(inst_64046,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_64090__$1 = state_64090;
var statearr_64117_65385 = state_64090__$1;
(statearr_64117_65385[(2)] = inst_64059);

(statearr_64117_65385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64091 === (5))){
var inst_64055 = (state_64090[(11)]);
var inst_64049 = (state_64090[(9)]);
var inst_64056 = (state_64090[(13)]);
var inst_64046 = (state_64090[(8)]);
var inst_64055__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_64049) : f.call(null, inst_64049));
var inst_64056__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64055__$1,inst_64046);
var state_64090__$1 = (function (){var statearr_64121 = state_64090;
(statearr_64121[(11)] = inst_64055__$1);

(statearr_64121[(13)] = inst_64056__$1);

return statearr_64121;
})();
if(inst_64056__$1){
var statearr_64122_65393 = state_64090__$1;
(statearr_64122_65393[(1)] = (8));

} else {
var statearr_64123_65394 = state_64090__$1;
(statearr_64123_65394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64091 === (14))){
var inst_64055 = (state_64090[(11)]);
var inst_64049 = (state_64090[(9)]);
var inst_64068 = (state_64090[(2)]);
var inst_64069 = [];
var inst_64070 = inst_64069.push(inst_64049);
var inst_64045 = inst_64069;
var inst_64046 = inst_64055;
var state_64090__$1 = (function (){var statearr_64124 = state_64090;
(statearr_64124[(14)] = inst_64068);

(statearr_64124[(7)] = inst_64045);

(statearr_64124[(15)] = inst_64070);

(statearr_64124[(8)] = inst_64046);

return statearr_64124;
})();
var statearr_64125_65395 = state_64090__$1;
(statearr_64125_65395[(2)] = null);

(statearr_64125_65395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64091 === (16))){
var state_64090__$1 = state_64090;
var statearr_64128_65398 = state_64090__$1;
(statearr_64128_65398[(2)] = null);

(statearr_64128_65398[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64091 === (10))){
var inst_64061 = (state_64090[(2)]);
var state_64090__$1 = state_64090;
if(cljs.core.truth_(inst_64061)){
var statearr_64130_65407 = state_64090__$1;
(statearr_64130_65407[(1)] = (11));

} else {
var statearr_64131_65408 = state_64090__$1;
(statearr_64131_65408[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64091 === (18))){
var inst_64080 = (state_64090[(2)]);
var state_64090__$1 = state_64090;
var statearr_64132_65412 = state_64090__$1;
(statearr_64132_65412[(2)] = inst_64080);

(statearr_64132_65412[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64091 === (8))){
var inst_64056 = (state_64090[(13)]);
var state_64090__$1 = state_64090;
var statearr_64133_65421 = state_64090__$1;
(statearr_64133_65421[(2)] = inst_64056);

(statearr_64133_65421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10330__auto__ = null;
var cljs$core$async$state_machine__10330__auto____0 = (function (){
var statearr_64135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64135[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_64135[(1)] = (1));

return statearr_64135;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_64090){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_64090);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e64137){var ex__10333__auto__ = e64137;
var statearr_64138_65439 = state_64090;
(statearr_64138_65439[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_64090[(4)]))){
var statearr_64139_65440 = state_64090;
(statearr_64139_65440[(1)] = cljs.core.first((state_64090[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65445 = state_64090;
state_64090 = G__65445;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_64090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_64090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_64140 = f__10425__auto__();
(statearr_64140[(6)] = c__10424__auto___65352);

return statearr_64140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
