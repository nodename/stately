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
cljs.core.async.t_cljs$core$async42205 = (function (f,blockable,meta42206){
this.f = f;
this.blockable = blockable;
this.meta42206 = meta42206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42207,meta42206__$1){
var self__ = this;
var _42207__$1 = this;
return (new cljs.core.async.t_cljs$core$async42205(self__.f,self__.blockable,meta42206__$1));
}));

(cljs.core.async.t_cljs$core$async42205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42207){
var self__ = this;
var _42207__$1 = this;
return self__.meta42206;
}));

(cljs.core.async.t_cljs$core$async42205.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42205.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42206","meta42206",2025664032,null)], null);
}));

(cljs.core.async.t_cljs$core$async42205.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42205");

(cljs.core.async.t_cljs$core$async42205.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async42205");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42205.
 */
cljs.core.async.__GT_t_cljs$core$async42205 = (function cljs$core$async$__GT_t_cljs$core$async42205(f,blockable,meta42206){
return (new cljs.core.async.t_cljs$core$async42205(f,blockable,meta42206));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42195 = arguments.length;
switch (G__42195) {
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
return (new cljs.core.async.t_cljs$core$async42205(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42258 = arguments.length;
switch (G__42258) {
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
var G__42274 = arguments.length;
switch (G__42274) {
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
var G__42292 = arguments.length;
switch (G__42292) {
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
var val_45322 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45322) : fn1.call(null, val_45322));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45322) : fn1.call(null, val_45322));
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
var G__42309 = arguments.length;
switch (G__42309) {
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
var n__5593__auto___45327 = n;
var x_45328 = (0);
while(true){
if((x_45328 < n__5593__auto___45327)){
(a[x_45328] = x_45328);

var G__45329 = (x_45328 + (1));
x_45328 = G__45329;
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
cljs.core.async.t_cljs$core$async42342 = (function (flag,meta42343){
this.flag = flag;
this.meta42343 = meta42343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42344,meta42343__$1){
var self__ = this;
var _42344__$1 = this;
return (new cljs.core.async.t_cljs$core$async42342(self__.flag,meta42343__$1));
}));

(cljs.core.async.t_cljs$core$async42342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42344){
var self__ = this;
var _42344__$1 = this;
return self__.meta42343;
}));

(cljs.core.async.t_cljs$core$async42342.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42342.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42343","meta42343",-894622236,null)], null);
}));

(cljs.core.async.t_cljs$core$async42342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42342");

(cljs.core.async.t_cljs$core$async42342.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async42342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42342.
 */
cljs.core.async.__GT_t_cljs$core$async42342 = (function cljs$core$async$__GT_t_cljs$core$async42342(flag,meta42343){
return (new cljs.core.async.t_cljs$core$async42342(flag,meta42343));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async42342(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42354 = (function (flag,cb,meta42355){
this.flag = flag;
this.cb = cb;
this.meta42355 = meta42355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42356,meta42355__$1){
var self__ = this;
var _42356__$1 = this;
return (new cljs.core.async.t_cljs$core$async42354(self__.flag,self__.cb,meta42355__$1));
}));

(cljs.core.async.t_cljs$core$async42354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42356){
var self__ = this;
var _42356__$1 = this;
return self__.meta42355;
}));

(cljs.core.async.t_cljs$core$async42354.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42354.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42354.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42354.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42355","meta42355",802693630,null)], null);
}));

(cljs.core.async.t_cljs$core$async42354.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42354");

(cljs.core.async.t_cljs$core$async42354.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async42354");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42354.
 */
cljs.core.async.__GT_t_cljs$core$async42354 = (function cljs$core$async$__GT_t_cljs$core$async42354(flag,cb,meta42355){
return (new cljs.core.async.t_cljs$core$async42354(flag,cb,meta42355));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async42354(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42375_SHARP_){
var G__42387 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42375_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42387) : fret.call(null, G__42387));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42376_SHARP_){
var G__42388 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42376_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42388) : fret.call(null, G__42388));
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
var G__45344 = (i + (1));
i = G__45344;
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
var len__5726__auto___45346 = arguments.length;
var i__5727__auto___45347 = (0);
while(true){
if((i__5727__auto___45347 < len__5726__auto___45346)){
args__5732__auto__.push((arguments[i__5727__auto___45347]));

var G__45349 = (i__5727__auto___45347 + (1));
i__5727__auto___45347 = G__45349;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42432){
var map__42433 = p__42432;
var map__42433__$1 = cljs.core.__destructure_map(map__42433);
var opts = map__42433__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42427){
var G__42428 = cljs.core.first(seq42427);
var seq42427__$1 = cljs.core.next(seq42427);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42428,seq42427__$1);
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
var G__42437 = arguments.length;
switch (G__42437) {
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
var c__10424__auto___45351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_42463){
var state_val_42464 = (state_42463[(1)]);
if((state_val_42464 === (7))){
var inst_42459 = (state_42463[(2)]);
var state_42463__$1 = state_42463;
var statearr_42468_45352 = state_42463__$1;
(statearr_42468_45352[(2)] = inst_42459);

(statearr_42468_45352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42464 === (1))){
var state_42463__$1 = state_42463;
var statearr_42469_45353 = state_42463__$1;
(statearr_42469_45353[(2)] = null);

(statearr_42469_45353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42464 === (4))){
var inst_42442 = (state_42463[(7)]);
var inst_42442__$1 = (state_42463[(2)]);
var inst_42443 = (inst_42442__$1 == null);
var state_42463__$1 = (function (){var statearr_42470 = state_42463;
(statearr_42470[(7)] = inst_42442__$1);

return statearr_42470;
})();
if(cljs.core.truth_(inst_42443)){
var statearr_42471_45355 = state_42463__$1;
(statearr_42471_45355[(1)] = (5));

} else {
var statearr_42472_45357 = state_42463__$1;
(statearr_42472_45357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42464 === (13))){
var state_42463__$1 = state_42463;
var statearr_42476_45358 = state_42463__$1;
(statearr_42476_45358[(2)] = null);

(statearr_42476_45358[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42464 === (6))){
var inst_42442 = (state_42463[(7)]);
var state_42463__$1 = state_42463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42463__$1,(11),to,inst_42442);
} else {
if((state_val_42464 === (3))){
var inst_42461 = (state_42463[(2)]);
var state_42463__$1 = state_42463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42463__$1,inst_42461);
} else {
if((state_val_42464 === (12))){
var state_42463__$1 = state_42463;
var statearr_42480_45359 = state_42463__$1;
(statearr_42480_45359[(2)] = null);

(statearr_42480_45359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42464 === (2))){
var state_42463__$1 = state_42463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42463__$1,(4),from);
} else {
if((state_val_42464 === (11))){
var inst_42452 = (state_42463[(2)]);
var state_42463__$1 = state_42463;
if(cljs.core.truth_(inst_42452)){
var statearr_42482_45361 = state_42463__$1;
(statearr_42482_45361[(1)] = (12));

} else {
var statearr_42483_45362 = state_42463__$1;
(statearr_42483_45362[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42464 === (9))){
var state_42463__$1 = state_42463;
var statearr_42485_45363 = state_42463__$1;
(statearr_42485_45363[(2)] = null);

(statearr_42485_45363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42464 === (5))){
var state_42463__$1 = state_42463;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42486_45364 = state_42463__$1;
(statearr_42486_45364[(1)] = (8));

} else {
var statearr_42487_45365 = state_42463__$1;
(statearr_42487_45365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42464 === (14))){
var inst_42457 = (state_42463[(2)]);
var state_42463__$1 = state_42463;
var statearr_42488_45366 = state_42463__$1;
(statearr_42488_45366[(2)] = inst_42457);

(statearr_42488_45366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42464 === (10))){
var inst_42449 = (state_42463[(2)]);
var state_42463__$1 = state_42463;
var statearr_42489_45367 = state_42463__$1;
(statearr_42489_45367[(2)] = inst_42449);

(statearr_42489_45367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42464 === (8))){
var inst_42446 = cljs.core.async.close_BANG_(to);
var state_42463__$1 = state_42463;
var statearr_42490_45368 = state_42463__$1;
(statearr_42490_45368[(2)] = inst_42446);

(statearr_42490_45368[(1)] = (10));


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
var statearr_42491 = [null,null,null,null,null,null,null,null];
(statearr_42491[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_42491[(1)] = (1));

return statearr_42491;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_42463){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_42463);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e42492){var ex__10333__auto__ = e42492;
var statearr_42493_45369 = state_42463;
(statearr_42493_45369[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_42463[(4)]))){
var statearr_42494_45370 = state_42463;
(statearr_42494_45370[(1)] = cljs.core.first((state_42463[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45371 = state_42463;
state_42463 = G__45371;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_42463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_42463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_42495 = f__10425__auto__();
(statearr_42495[(6)] = c__10424__auto___45351);

return statearr_42495;
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
var process__$1 = (function (p__42497){
var vec__42498 = p__42497;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42498,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42498,(1),null);
var job = vec__42498;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10424__auto___45377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_42506){
var state_val_42507 = (state_42506[(1)]);
if((state_val_42507 === (1))){
var state_42506__$1 = state_42506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42506__$1,(2),res,v);
} else {
if((state_val_42507 === (2))){
var inst_42502 = (state_42506[(2)]);
var inst_42503 = cljs.core.async.close_BANG_(res);
var state_42506__$1 = (function (){var statearr_42513 = state_42506;
(statearr_42513[(7)] = inst_42502);

return statearr_42513;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42506__$1,inst_42503);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0 = (function (){
var statearr_42519 = [null,null,null,null,null,null,null,null];
(statearr_42519[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__);

(statearr_42519[(1)] = (1));

return statearr_42519;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1 = (function (state_42506){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_42506);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e42521){var ex__10333__auto__ = e42521;
var statearr_42522_45384 = state_42506;
(statearr_42522_45384[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_42506[(4)]))){
var statearr_42524_45386 = state_42506;
(statearr_42524_45386[(1)] = cljs.core.first((state_42506[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45387 = state_42506;
state_42506 = G__45387;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = function(state_42506){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1.call(this,state_42506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_42527 = f__10425__auto__();
(statearr_42527[(6)] = c__10424__auto___45377);

return statearr_42527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__42529){
var vec__42530 = p__42529;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42530,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42530,(1),null);
var job = vec__42530;
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
var n__5593__auto___45388 = n;
var __45389 = (0);
while(true){
if((__45389 < n__5593__auto___45388)){
var G__42534_45390 = type;
var G__42534_45391__$1 = (((G__42534_45390 instanceof cljs.core.Keyword))?G__42534_45390.fqn:null);
switch (G__42534_45391__$1) {
case "compute":
var c__10424__auto___45393 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45389,c__10424__auto___45393,G__42534_45390,G__42534_45391__$1,n__5593__auto___45388,jobs,results,process__$1,async){
return (function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = ((function (__45389,c__10424__auto___45393,G__42534_45390,G__42534_45391__$1,n__5593__auto___45388,jobs,results,process__$1,async){
return (function (state_42551){
var state_val_42552 = (state_42551[(1)]);
if((state_val_42552 === (1))){
var state_42551__$1 = state_42551;
var statearr_42556_45394 = state_42551__$1;
(statearr_42556_45394[(2)] = null);

(statearr_42556_45394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (2))){
var state_42551__$1 = state_42551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42551__$1,(4),jobs);
} else {
if((state_val_42552 === (3))){
var inst_42548 = (state_42551[(2)]);
var state_42551__$1 = state_42551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42551__$1,inst_42548);
} else {
if((state_val_42552 === (4))){
var inst_42540 = (state_42551[(2)]);
var inst_42541 = process__$1(inst_42540);
var state_42551__$1 = state_42551;
if(cljs.core.truth_(inst_42541)){
var statearr_42559_45396 = state_42551__$1;
(statearr_42559_45396[(1)] = (5));

} else {
var statearr_42560_45397 = state_42551__$1;
(statearr_42560_45397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (5))){
var state_42551__$1 = state_42551;
var statearr_42561_45398 = state_42551__$1;
(statearr_42561_45398[(2)] = null);

(statearr_42561_45398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (6))){
var state_42551__$1 = state_42551;
var statearr_42563_45399 = state_42551__$1;
(statearr_42563_45399[(2)] = null);

(statearr_42563_45399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (7))){
var inst_42546 = (state_42551[(2)]);
var state_42551__$1 = state_42551;
var statearr_42565_45400 = state_42551__$1;
(statearr_42565_45400[(2)] = inst_42546);

(statearr_42565_45400[(1)] = (3));


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
});})(__45389,c__10424__auto___45393,G__42534_45390,G__42534_45391__$1,n__5593__auto___45388,jobs,results,process__$1,async))
;
return ((function (__45389,switch__10329__auto__,c__10424__auto___45393,G__42534_45390,G__42534_45391__$1,n__5593__auto___45388,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0 = (function (){
var statearr_42567 = [null,null,null,null,null,null,null];
(statearr_42567[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__);

(statearr_42567[(1)] = (1));

return statearr_42567;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1 = (function (state_42551){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_42551);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e42568){var ex__10333__auto__ = e42568;
var statearr_42569_45401 = state_42551;
(statearr_42569_45401[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_42551[(4)]))){
var statearr_42570_45403 = state_42551;
(statearr_42570_45403[(1)] = cljs.core.first((state_42551[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45404 = state_42551;
state_42551 = G__45404;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = function(state_42551){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1.call(this,state_42551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__;
})()
;})(__45389,switch__10329__auto__,c__10424__auto___45393,G__42534_45390,G__42534_45391__$1,n__5593__auto___45388,jobs,results,process__$1,async))
})();
var state__10426__auto__ = (function (){var statearr_42571 = f__10425__auto__();
(statearr_42571[(6)] = c__10424__auto___45393);

return statearr_42571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
});})(__45389,c__10424__auto___45393,G__42534_45390,G__42534_45391__$1,n__5593__auto___45388,jobs,results,process__$1,async))
);


break;
case "async":
var c__10424__auto___45405 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45389,c__10424__auto___45405,G__42534_45390,G__42534_45391__$1,n__5593__auto___45388,jobs,results,process__$1,async){
return (function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = ((function (__45389,c__10424__auto___45405,G__42534_45390,G__42534_45391__$1,n__5593__auto___45388,jobs,results,process__$1,async){
return (function (state_42588){
var state_val_42589 = (state_42588[(1)]);
if((state_val_42589 === (1))){
var state_42588__$1 = state_42588;
var statearr_42592_45406 = state_42588__$1;
(statearr_42592_45406[(2)] = null);

(statearr_42592_45406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42589 === (2))){
var state_42588__$1 = state_42588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42588__$1,(4),jobs);
} else {
if((state_val_42589 === (3))){
var inst_42586 = (state_42588[(2)]);
var state_42588__$1 = state_42588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42588__$1,inst_42586);
} else {
if((state_val_42589 === (4))){
var inst_42578 = (state_42588[(2)]);
var inst_42579 = async(inst_42578);
var state_42588__$1 = state_42588;
if(cljs.core.truth_(inst_42579)){
var statearr_42594_45407 = state_42588__$1;
(statearr_42594_45407[(1)] = (5));

} else {
var statearr_42595_45408 = state_42588__$1;
(statearr_42595_45408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42589 === (5))){
var state_42588__$1 = state_42588;
var statearr_42599_45409 = state_42588__$1;
(statearr_42599_45409[(2)] = null);

(statearr_42599_45409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42589 === (6))){
var state_42588__$1 = state_42588;
var statearr_42603_45411 = state_42588__$1;
(statearr_42603_45411[(2)] = null);

(statearr_42603_45411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42589 === (7))){
var inst_42584 = (state_42588[(2)]);
var state_42588__$1 = state_42588;
var statearr_42605_45413 = state_42588__$1;
(statearr_42605_45413[(2)] = inst_42584);

(statearr_42605_45413[(1)] = (3));


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
});})(__45389,c__10424__auto___45405,G__42534_45390,G__42534_45391__$1,n__5593__auto___45388,jobs,results,process__$1,async))
;
return ((function (__45389,switch__10329__auto__,c__10424__auto___45405,G__42534_45390,G__42534_45391__$1,n__5593__auto___45388,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0 = (function (){
var statearr_42607 = [null,null,null,null,null,null,null];
(statearr_42607[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__);

(statearr_42607[(1)] = (1));

return statearr_42607;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1 = (function (state_42588){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_42588);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e42608){var ex__10333__auto__ = e42608;
var statearr_42609_45418 = state_42588;
(statearr_42609_45418[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_42588[(4)]))){
var statearr_42610_45419 = state_42588;
(statearr_42610_45419[(1)] = cljs.core.first((state_42588[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45420 = state_42588;
state_42588 = G__45420;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = function(state_42588){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1.call(this,state_42588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__;
})()
;})(__45389,switch__10329__auto__,c__10424__auto___45405,G__42534_45390,G__42534_45391__$1,n__5593__auto___45388,jobs,results,process__$1,async))
})();
var state__10426__auto__ = (function (){var statearr_42611 = f__10425__auto__();
(statearr_42611[(6)] = c__10424__auto___45405);

return statearr_42611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
});})(__45389,c__10424__auto___45405,G__42534_45390,G__42534_45391__$1,n__5593__auto___45388,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42534_45391__$1)].join('')));

}

var G__45426 = (__45389 + (1));
__45389 = G__45426;
continue;
} else {
}
break;
}

var c__10424__auto___45427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_42633){
var state_val_42634 = (state_42633[(1)]);
if((state_val_42634 === (7))){
var inst_42629 = (state_42633[(2)]);
var state_42633__$1 = state_42633;
var statearr_42641_45432 = state_42633__$1;
(statearr_42641_45432[(2)] = inst_42629);

(statearr_42641_45432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (1))){
var state_42633__$1 = state_42633;
var statearr_42642_45433 = state_42633__$1;
(statearr_42642_45433[(2)] = null);

(statearr_42642_45433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (4))){
var inst_42614 = (state_42633[(7)]);
var inst_42614__$1 = (state_42633[(2)]);
var inst_42615 = (inst_42614__$1 == null);
var state_42633__$1 = (function (){var statearr_42647 = state_42633;
(statearr_42647[(7)] = inst_42614__$1);

return statearr_42647;
})();
if(cljs.core.truth_(inst_42615)){
var statearr_42649_45434 = state_42633__$1;
(statearr_42649_45434[(1)] = (5));

} else {
var statearr_42651_45435 = state_42633__$1;
(statearr_42651_45435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (6))){
var inst_42614 = (state_42633[(7)]);
var inst_42619 = (state_42633[(8)]);
var inst_42619__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42620 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42621 = [inst_42614,inst_42619__$1];
var inst_42622 = (new cljs.core.PersistentVector(null,2,(5),inst_42620,inst_42621,null));
var state_42633__$1 = (function (){var statearr_42652 = state_42633;
(statearr_42652[(8)] = inst_42619__$1);

return statearr_42652;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42633__$1,(8),jobs,inst_42622);
} else {
if((state_val_42634 === (3))){
var inst_42631 = (state_42633[(2)]);
var state_42633__$1 = state_42633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42633__$1,inst_42631);
} else {
if((state_val_42634 === (2))){
var state_42633__$1 = state_42633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42633__$1,(4),from);
} else {
if((state_val_42634 === (9))){
var inst_42626 = (state_42633[(2)]);
var state_42633__$1 = (function (){var statearr_42659 = state_42633;
(statearr_42659[(9)] = inst_42626);

return statearr_42659;
})();
var statearr_42660_45436 = state_42633__$1;
(statearr_42660_45436[(2)] = null);

(statearr_42660_45436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (5))){
var inst_42617 = cljs.core.async.close_BANG_(jobs);
var state_42633__$1 = state_42633;
var statearr_42665_45437 = state_42633__$1;
(statearr_42665_45437[(2)] = inst_42617);

(statearr_42665_45437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (8))){
var inst_42619 = (state_42633[(8)]);
var inst_42624 = (state_42633[(2)]);
var state_42633__$1 = (function (){var statearr_42668 = state_42633;
(statearr_42668[(10)] = inst_42624);

return statearr_42668;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42633__$1,(9),results,inst_42619);
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
var statearr_42671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__);

(statearr_42671[(1)] = (1));

return statearr_42671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1 = (function (state_42633){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_42633);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e42675){var ex__10333__auto__ = e42675;
var statearr_42676_45438 = state_42633;
(statearr_42676_45438[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_42633[(4)]))){
var statearr_42677_45439 = state_42633;
(statearr_42677_45439[(1)] = cljs.core.first((state_42633[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45447 = state_42633;
state_42633 = G__45447;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = function(state_42633){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1.call(this,state_42633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_42680 = f__10425__auto__();
(statearr_42680[(6)] = c__10424__auto___45427);

return statearr_42680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


var c__10424__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_42722){
var state_val_42723 = (state_42722[(1)]);
if((state_val_42723 === (7))){
var inst_42718 = (state_42722[(2)]);
var state_42722__$1 = state_42722;
var statearr_42730_45452 = state_42722__$1;
(statearr_42730_45452[(2)] = inst_42718);

(statearr_42730_45452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (20))){
var state_42722__$1 = state_42722;
var statearr_42733_45455 = state_42722__$1;
(statearr_42733_45455[(2)] = null);

(statearr_42733_45455[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (1))){
var state_42722__$1 = state_42722;
var statearr_42735_45456 = state_42722__$1;
(statearr_42735_45456[(2)] = null);

(statearr_42735_45456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (4))){
var inst_42687 = (state_42722[(7)]);
var inst_42687__$1 = (state_42722[(2)]);
var inst_42688 = (inst_42687__$1 == null);
var state_42722__$1 = (function (){var statearr_42736 = state_42722;
(statearr_42736[(7)] = inst_42687__$1);

return statearr_42736;
})();
if(cljs.core.truth_(inst_42688)){
var statearr_42737_45461 = state_42722__$1;
(statearr_42737_45461[(1)] = (5));

} else {
var statearr_42738_45462 = state_42722__$1;
(statearr_42738_45462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (15))){
var inst_42700 = (state_42722[(8)]);
var state_42722__$1 = state_42722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42722__$1,(18),to,inst_42700);
} else {
if((state_val_42723 === (21))){
var inst_42713 = (state_42722[(2)]);
var state_42722__$1 = state_42722;
var statearr_42739_45467 = state_42722__$1;
(statearr_42739_45467[(2)] = inst_42713);

(statearr_42739_45467[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (13))){
var inst_42715 = (state_42722[(2)]);
var state_42722__$1 = (function (){var statearr_42741 = state_42722;
(statearr_42741[(9)] = inst_42715);

return statearr_42741;
})();
var statearr_42744_45471 = state_42722__$1;
(statearr_42744_45471[(2)] = null);

(statearr_42744_45471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (6))){
var inst_42687 = (state_42722[(7)]);
var state_42722__$1 = state_42722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42722__$1,(11),inst_42687);
} else {
if((state_val_42723 === (17))){
var inst_42708 = (state_42722[(2)]);
var state_42722__$1 = state_42722;
if(cljs.core.truth_(inst_42708)){
var statearr_42746_45472 = state_42722__$1;
(statearr_42746_45472[(1)] = (19));

} else {
var statearr_42750_45473 = state_42722__$1;
(statearr_42750_45473[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (3))){
var inst_42720 = (state_42722[(2)]);
var state_42722__$1 = state_42722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42722__$1,inst_42720);
} else {
if((state_val_42723 === (12))){
var inst_42697 = (state_42722[(10)]);
var state_42722__$1 = state_42722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42722__$1,(14),inst_42697);
} else {
if((state_val_42723 === (2))){
var state_42722__$1 = state_42722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42722__$1,(4),results);
} else {
if((state_val_42723 === (19))){
var state_42722__$1 = state_42722;
var statearr_42760_45475 = state_42722__$1;
(statearr_42760_45475[(2)] = null);

(statearr_42760_45475[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (11))){
var inst_42697 = (state_42722[(2)]);
var state_42722__$1 = (function (){var statearr_42761 = state_42722;
(statearr_42761[(10)] = inst_42697);

return statearr_42761;
})();
var statearr_42766_45476 = state_42722__$1;
(statearr_42766_45476[(2)] = null);

(statearr_42766_45476[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (9))){
var state_42722__$1 = state_42722;
var statearr_42767_45477 = state_42722__$1;
(statearr_42767_45477[(2)] = null);

(statearr_42767_45477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (5))){
var state_42722__$1 = state_42722;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42770_45478 = state_42722__$1;
(statearr_42770_45478[(1)] = (8));

} else {
var statearr_42773_45479 = state_42722__$1;
(statearr_42773_45479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (14))){
var inst_42700 = (state_42722[(8)]);
var inst_42702 = (state_42722[(11)]);
var inst_42700__$1 = (state_42722[(2)]);
var inst_42701 = (inst_42700__$1 == null);
var inst_42702__$1 = cljs.core.not(inst_42701);
var state_42722__$1 = (function (){var statearr_42777 = state_42722;
(statearr_42777[(8)] = inst_42700__$1);

(statearr_42777[(11)] = inst_42702__$1);

return statearr_42777;
})();
if(inst_42702__$1){
var statearr_42778_45480 = state_42722__$1;
(statearr_42778_45480[(1)] = (15));

} else {
var statearr_42779_45483 = state_42722__$1;
(statearr_42779_45483[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (16))){
var inst_42702 = (state_42722[(11)]);
var state_42722__$1 = state_42722;
var statearr_42781_45484 = state_42722__$1;
(statearr_42781_45484[(2)] = inst_42702);

(statearr_42781_45484[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (10))){
var inst_42694 = (state_42722[(2)]);
var state_42722__$1 = state_42722;
var statearr_42785_45485 = state_42722__$1;
(statearr_42785_45485[(2)] = inst_42694);

(statearr_42785_45485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (18))){
var inst_42705 = (state_42722[(2)]);
var state_42722__$1 = state_42722;
var statearr_42786_45488 = state_42722__$1;
(statearr_42786_45488[(2)] = inst_42705);

(statearr_42786_45488[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (8))){
var inst_42691 = cljs.core.async.close_BANG_(to);
var state_42722__$1 = state_42722;
var statearr_42790_45489 = state_42722__$1;
(statearr_42790_45489[(2)] = inst_42691);

(statearr_42790_45489[(1)] = (10));


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
var statearr_42795 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42795[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__);

(statearr_42795[(1)] = (1));

return statearr_42795;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1 = (function (state_42722){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_42722);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e42796){var ex__10333__auto__ = e42796;
var statearr_42797_45495 = state_42722;
(statearr_42797_45495[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_42722[(4)]))){
var statearr_42798_45496 = state_42722;
(statearr_42798_45496[(1)] = cljs.core.first((state_42722[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45499 = state_42722;
state_42722 = G__45499;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = function(state_42722){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1.call(this,state_42722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_42799 = f__10425__auto__();
(statearr_42799[(6)] = c__10424__auto__);

return statearr_42799;
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
var G__42801 = arguments.length;
switch (G__42801) {
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
var G__42807 = arguments.length;
switch (G__42807) {
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
var G__42813 = arguments.length;
switch (G__42813) {
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
var c__10424__auto___45514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_42839){
var state_val_42840 = (state_42839[(1)]);
if((state_val_42840 === (7))){
var inst_42835 = (state_42839[(2)]);
var state_42839__$1 = state_42839;
var statearr_42841_45517 = state_42839__$1;
(statearr_42841_45517[(2)] = inst_42835);

(statearr_42841_45517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42840 === (1))){
var state_42839__$1 = state_42839;
var statearr_42843_45518 = state_42839__$1;
(statearr_42843_45518[(2)] = null);

(statearr_42843_45518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42840 === (4))){
var inst_42816 = (state_42839[(7)]);
var inst_42816__$1 = (state_42839[(2)]);
var inst_42817 = (inst_42816__$1 == null);
var state_42839__$1 = (function (){var statearr_42847 = state_42839;
(statearr_42847[(7)] = inst_42816__$1);

return statearr_42847;
})();
if(cljs.core.truth_(inst_42817)){
var statearr_42848_45520 = state_42839__$1;
(statearr_42848_45520[(1)] = (5));

} else {
var statearr_42849_45521 = state_42839__$1;
(statearr_42849_45521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42840 === (13))){
var state_42839__$1 = state_42839;
var statearr_42850_45522 = state_42839__$1;
(statearr_42850_45522[(2)] = null);

(statearr_42850_45522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42840 === (6))){
var inst_42816 = (state_42839[(7)]);
var inst_42822 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42816) : p.call(null, inst_42816));
var state_42839__$1 = state_42839;
if(cljs.core.truth_(inst_42822)){
var statearr_42851_45523 = state_42839__$1;
(statearr_42851_45523[(1)] = (9));

} else {
var statearr_42852_45524 = state_42839__$1;
(statearr_42852_45524[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42840 === (3))){
var inst_42837 = (state_42839[(2)]);
var state_42839__$1 = state_42839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42839__$1,inst_42837);
} else {
if((state_val_42840 === (12))){
var state_42839__$1 = state_42839;
var statearr_42854_45525 = state_42839__$1;
(statearr_42854_45525[(2)] = null);

(statearr_42854_45525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42840 === (2))){
var state_42839__$1 = state_42839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42839__$1,(4),ch);
} else {
if((state_val_42840 === (11))){
var inst_42816 = (state_42839[(7)]);
var inst_42826 = (state_42839[(2)]);
var state_42839__$1 = state_42839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42839__$1,(8),inst_42826,inst_42816);
} else {
if((state_val_42840 === (9))){
var state_42839__$1 = state_42839;
var statearr_42855_45528 = state_42839__$1;
(statearr_42855_45528[(2)] = tc);

(statearr_42855_45528[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42840 === (5))){
var inst_42819 = cljs.core.async.close_BANG_(tc);
var inst_42820 = cljs.core.async.close_BANG_(fc);
var state_42839__$1 = (function (){var statearr_42856 = state_42839;
(statearr_42856[(8)] = inst_42819);

return statearr_42856;
})();
var statearr_42857_45529 = state_42839__$1;
(statearr_42857_45529[(2)] = inst_42820);

(statearr_42857_45529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42840 === (14))){
var inst_42833 = (state_42839[(2)]);
var state_42839__$1 = state_42839;
var statearr_42859_45530 = state_42839__$1;
(statearr_42859_45530[(2)] = inst_42833);

(statearr_42859_45530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42840 === (10))){
var state_42839__$1 = state_42839;
var statearr_42861_45533 = state_42839__$1;
(statearr_42861_45533[(2)] = fc);

(statearr_42861_45533[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42840 === (8))){
var inst_42828 = (state_42839[(2)]);
var state_42839__$1 = state_42839;
if(cljs.core.truth_(inst_42828)){
var statearr_42863_45534 = state_42839__$1;
(statearr_42863_45534[(1)] = (12));

} else {
var statearr_42865_45535 = state_42839__$1;
(statearr_42865_45535[(1)] = (13));

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
var statearr_42869 = [null,null,null,null,null,null,null,null,null];
(statearr_42869[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_42869[(1)] = (1));

return statearr_42869;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_42839){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_42839);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e42870){var ex__10333__auto__ = e42870;
var statearr_42871_45537 = state_42839;
(statearr_42871_45537[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_42839[(4)]))){
var statearr_42872_45538 = state_42839;
(statearr_42872_45538[(1)] = cljs.core.first((state_42839[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45539 = state_42839;
state_42839 = G__45539;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_42839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_42839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_42875 = f__10425__auto__();
(statearr_42875[(6)] = c__10424__auto___45514);

return statearr_42875;
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
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_42897){
var state_val_42898 = (state_42897[(1)]);
if((state_val_42898 === (7))){
var inst_42893 = (state_42897[(2)]);
var state_42897__$1 = state_42897;
var statearr_42901_45547 = state_42897__$1;
(statearr_42901_45547[(2)] = inst_42893);

(statearr_42901_45547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42898 === (1))){
var inst_42876 = init;
var inst_42877 = inst_42876;
var state_42897__$1 = (function (){var statearr_42904 = state_42897;
(statearr_42904[(7)] = inst_42877);

return statearr_42904;
})();
var statearr_42905_45550 = state_42897__$1;
(statearr_42905_45550[(2)] = null);

(statearr_42905_45550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42898 === (4))){
var inst_42880 = (state_42897[(8)]);
var inst_42880__$1 = (state_42897[(2)]);
var inst_42881 = (inst_42880__$1 == null);
var state_42897__$1 = (function (){var statearr_42907 = state_42897;
(statearr_42907[(8)] = inst_42880__$1);

return statearr_42907;
})();
if(cljs.core.truth_(inst_42881)){
var statearr_42908_45552 = state_42897__$1;
(statearr_42908_45552[(1)] = (5));

} else {
var statearr_42909_45553 = state_42897__$1;
(statearr_42909_45553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42898 === (6))){
var inst_42884 = (state_42897[(9)]);
var inst_42880 = (state_42897[(8)]);
var inst_42877 = (state_42897[(7)]);
var inst_42884__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_42877,inst_42880) : f.call(null, inst_42877,inst_42880));
var inst_42885 = cljs.core.reduced_QMARK_(inst_42884__$1);
var state_42897__$1 = (function (){var statearr_42910 = state_42897;
(statearr_42910[(9)] = inst_42884__$1);

return statearr_42910;
})();
if(inst_42885){
var statearr_42911_45558 = state_42897__$1;
(statearr_42911_45558[(1)] = (8));

} else {
var statearr_42912_45559 = state_42897__$1;
(statearr_42912_45559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42898 === (3))){
var inst_42895 = (state_42897[(2)]);
var state_42897__$1 = state_42897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42897__$1,inst_42895);
} else {
if((state_val_42898 === (2))){
var state_42897__$1 = state_42897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42897__$1,(4),ch);
} else {
if((state_val_42898 === (9))){
var inst_42884 = (state_42897[(9)]);
var inst_42877 = inst_42884;
var state_42897__$1 = (function (){var statearr_42913 = state_42897;
(statearr_42913[(7)] = inst_42877);

return statearr_42913;
})();
var statearr_42915_45560 = state_42897__$1;
(statearr_42915_45560[(2)] = null);

(statearr_42915_45560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42898 === (5))){
var inst_42877 = (state_42897[(7)]);
var state_42897__$1 = state_42897;
var statearr_42919_45561 = state_42897__$1;
(statearr_42919_45561[(2)] = inst_42877);

(statearr_42919_45561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42898 === (10))){
var inst_42891 = (state_42897[(2)]);
var state_42897__$1 = state_42897;
var statearr_42920_45562 = state_42897__$1;
(statearr_42920_45562[(2)] = inst_42891);

(statearr_42920_45562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42898 === (8))){
var inst_42884 = (state_42897[(9)]);
var inst_42887 = cljs.core.deref(inst_42884);
var state_42897__$1 = state_42897;
var statearr_42921_45563 = state_42897__$1;
(statearr_42921_45563[(2)] = inst_42887);

(statearr_42921_45563[(1)] = (10));


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
var statearr_42922 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42922[(0)] = cljs$core$async$reduce_$_state_machine__10330__auto__);

(statearr_42922[(1)] = (1));

return statearr_42922;
});
var cljs$core$async$reduce_$_state_machine__10330__auto____1 = (function (state_42897){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_42897);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e42923){var ex__10333__auto__ = e42923;
var statearr_42924_45570 = state_42897;
(statearr_42924_45570[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_42897[(4)]))){
var statearr_42925_45572 = state_42897;
(statearr_42925_45572[(1)] = cljs.core.first((state_42897[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45573 = state_42897;
state_42897 = G__45573;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10330__auto__ = function(state_42897){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10330__auto____1.call(this,state_42897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10330__auto____0;
cljs$core$async$reduce_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10330__auto____1;
return cljs$core$async$reduce_$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_42927 = f__10425__auto__();
(statearr_42927[(6)] = c__10424__auto__);

return statearr_42927;
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
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_42936){
var state_val_42937 = (state_42936[(1)]);
if((state_val_42937 === (1))){
var inst_42931 = cljs.core.async.reduce(f__$1,init,ch);
var state_42936__$1 = state_42936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42936__$1,(2),inst_42931);
} else {
if((state_val_42937 === (2))){
var inst_42933 = (state_42936[(2)]);
var inst_42934 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_42933) : f__$1.call(null, inst_42933));
var state_42936__$1 = state_42936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42936__$1,inst_42934);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10330__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10330__auto____0 = (function (){
var statearr_42940 = [null,null,null,null,null,null,null];
(statearr_42940[(0)] = cljs$core$async$transduce_$_state_machine__10330__auto__);

(statearr_42940[(1)] = (1));

return statearr_42940;
});
var cljs$core$async$transduce_$_state_machine__10330__auto____1 = (function (state_42936){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_42936);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e42942){var ex__10333__auto__ = e42942;
var statearr_42943_45577 = state_42936;
(statearr_42943_45577[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_42936[(4)]))){
var statearr_42944_45578 = state_42936;
(statearr_42944_45578[(1)] = cljs.core.first((state_42936[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45579 = state_42936;
state_42936 = G__45579;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10330__auto__ = function(state_42936){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10330__auto____1.call(this,state_42936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10330__auto____0;
cljs$core$async$transduce_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10330__auto____1;
return cljs$core$async$transduce_$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_42945 = f__10425__auto__();
(statearr_42945[(6)] = c__10424__auto__);

return statearr_42945;
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
var G__42947 = arguments.length;
switch (G__42947) {
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
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_42982){
var state_val_42983 = (state_42982[(1)]);
if((state_val_42983 === (7))){
var inst_42964 = (state_42982[(2)]);
var state_42982__$1 = state_42982;
var statearr_42989_45585 = state_42982__$1;
(statearr_42989_45585[(2)] = inst_42964);

(statearr_42989_45585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42983 === (1))){
var inst_42957 = cljs.core.seq(coll);
var inst_42958 = inst_42957;
var state_42982__$1 = (function (){var statearr_42990 = state_42982;
(statearr_42990[(7)] = inst_42958);

return statearr_42990;
})();
var statearr_42992_45590 = state_42982__$1;
(statearr_42992_45590[(2)] = null);

(statearr_42992_45590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42983 === (4))){
var inst_42958 = (state_42982[(7)]);
var inst_42962 = cljs.core.first(inst_42958);
var state_42982__$1 = state_42982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42982__$1,(7),ch,inst_42962);
} else {
if((state_val_42983 === (13))){
var inst_42976 = (state_42982[(2)]);
var state_42982__$1 = state_42982;
var statearr_42998_45592 = state_42982__$1;
(statearr_42998_45592[(2)] = inst_42976);

(statearr_42998_45592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42983 === (6))){
var inst_42967 = (state_42982[(2)]);
var state_42982__$1 = state_42982;
if(cljs.core.truth_(inst_42967)){
var statearr_43000_45593 = state_42982__$1;
(statearr_43000_45593[(1)] = (8));

} else {
var statearr_43003_45594 = state_42982__$1;
(statearr_43003_45594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42983 === (3))){
var inst_42980 = (state_42982[(2)]);
var state_42982__$1 = state_42982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42982__$1,inst_42980);
} else {
if((state_val_42983 === (12))){
var state_42982__$1 = state_42982;
var statearr_43008_45597 = state_42982__$1;
(statearr_43008_45597[(2)] = null);

(statearr_43008_45597[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42983 === (2))){
var inst_42958 = (state_42982[(7)]);
var state_42982__$1 = state_42982;
if(cljs.core.truth_(inst_42958)){
var statearr_43009_45598 = state_42982__$1;
(statearr_43009_45598[(1)] = (4));

} else {
var statearr_43012_45599 = state_42982__$1;
(statearr_43012_45599[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42983 === (11))){
var inst_42973 = cljs.core.async.close_BANG_(ch);
var state_42982__$1 = state_42982;
var statearr_43014_45600 = state_42982__$1;
(statearr_43014_45600[(2)] = inst_42973);

(statearr_43014_45600[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42983 === (9))){
var state_42982__$1 = state_42982;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43015_45605 = state_42982__$1;
(statearr_43015_45605[(1)] = (11));

} else {
var statearr_43018_45606 = state_42982__$1;
(statearr_43018_45606[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42983 === (5))){
var inst_42958 = (state_42982[(7)]);
var state_42982__$1 = state_42982;
var statearr_43022_45608 = state_42982__$1;
(statearr_43022_45608[(2)] = inst_42958);

(statearr_43022_45608[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42983 === (10))){
var inst_42978 = (state_42982[(2)]);
var state_42982__$1 = state_42982;
var statearr_43024_45610 = state_42982__$1;
(statearr_43024_45610[(2)] = inst_42978);

(statearr_43024_45610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42983 === (8))){
var inst_42958 = (state_42982[(7)]);
var inst_42969 = cljs.core.next(inst_42958);
var inst_42958__$1 = inst_42969;
var state_42982__$1 = (function (){var statearr_43027 = state_42982;
(statearr_43027[(7)] = inst_42958__$1);

return statearr_43027;
})();
var statearr_43028_45612 = state_42982__$1;
(statearr_43028_45612[(2)] = null);

(statearr_43028_45612[(1)] = (2));


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
var statearr_43040 = [null,null,null,null,null,null,null,null];
(statearr_43040[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_43040[(1)] = (1));

return statearr_43040;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_42982){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_42982);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e43043){var ex__10333__auto__ = e43043;
var statearr_43044_45614 = state_42982;
(statearr_43044_45614[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_42982[(4)]))){
var statearr_43047_45615 = state_42982;
(statearr_43047_45615[(1)] = cljs.core.first((state_42982[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45616 = state_42982;
state_42982 = G__45616;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_42982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_42982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_43053 = f__10425__auto__();
(statearr_43053[(6)] = c__10424__auto__);

return statearr_43053;
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
var G__43062 = arguments.length;
switch (G__43062) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_45628 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_45628(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_45636 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_45636(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_45642 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_45642(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_45644 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_45644(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43099 = (function (ch,cs,meta43100){
this.ch = ch;
this.cs = cs;
this.meta43100 = meta43100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43101,meta43100__$1){
var self__ = this;
var _43101__$1 = this;
return (new cljs.core.async.t_cljs$core$async43099(self__.ch,self__.cs,meta43100__$1));
}));

(cljs.core.async.t_cljs$core$async43099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43101){
var self__ = this;
var _43101__$1 = this;
return self__.meta43100;
}));

(cljs.core.async.t_cljs$core$async43099.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43099.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43099.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43099.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43099.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43099.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43100","meta43100",1095231840,null)], null);
}));

(cljs.core.async.t_cljs$core$async43099.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43099");

(cljs.core.async.t_cljs$core$async43099.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async43099");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43099.
 */
cljs.core.async.__GT_t_cljs$core$async43099 = (function cljs$core$async$__GT_t_cljs$core$async43099(ch,cs,meta43100){
return (new cljs.core.async.t_cljs$core$async43099(ch,cs,meta43100));
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
var m = (new cljs.core.async.t_cljs$core$async43099(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__10424__auto___45662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_43289){
var state_val_43290 = (state_43289[(1)]);
if((state_val_43290 === (7))){
var inst_43281 = (state_43289[(2)]);
var state_43289__$1 = state_43289;
var statearr_43294_45663 = state_43289__$1;
(statearr_43294_45663[(2)] = inst_43281);

(statearr_43294_45663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (20))){
var inst_43170 = (state_43289[(7)]);
var inst_43183 = cljs.core.first(inst_43170);
var inst_43184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43183,(0),null);
var inst_43186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43183,(1),null);
var state_43289__$1 = (function (){var statearr_43296 = state_43289;
(statearr_43296[(8)] = inst_43184);

return statearr_43296;
})();
if(cljs.core.truth_(inst_43186)){
var statearr_43297_45664 = state_43289__$1;
(statearr_43297_45664[(1)] = (22));

} else {
var statearr_43298_45665 = state_43289__$1;
(statearr_43298_45665[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (27))){
var inst_43226 = (state_43289[(9)]);
var inst_43135 = (state_43289[(10)]);
var inst_43219 = (state_43289[(11)]);
var inst_43221 = (state_43289[(12)]);
var inst_43226__$1 = cljs.core._nth(inst_43219,inst_43221);
var inst_43227 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43226__$1,inst_43135,done);
var state_43289__$1 = (function (){var statearr_43299 = state_43289;
(statearr_43299[(9)] = inst_43226__$1);

return statearr_43299;
})();
if(cljs.core.truth_(inst_43227)){
var statearr_43300_45673 = state_43289__$1;
(statearr_43300_45673[(1)] = (30));

} else {
var statearr_43301_45674 = state_43289__$1;
(statearr_43301_45674[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (1))){
var state_43289__$1 = state_43289;
var statearr_43302_45675 = state_43289__$1;
(statearr_43302_45675[(2)] = null);

(statearr_43302_45675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (24))){
var inst_43170 = (state_43289[(7)]);
var inst_43193 = (state_43289[(2)]);
var inst_43194 = cljs.core.next(inst_43170);
var inst_43144 = inst_43194;
var inst_43145 = null;
var inst_43146 = (0);
var inst_43147 = (0);
var state_43289__$1 = (function (){var statearr_43307 = state_43289;
(statearr_43307[(13)] = inst_43147);

(statearr_43307[(14)] = inst_43193);

(statearr_43307[(15)] = inst_43146);

(statearr_43307[(16)] = inst_43145);

(statearr_43307[(17)] = inst_43144);

return statearr_43307;
})();
var statearr_43308_45677 = state_43289__$1;
(statearr_43308_45677[(2)] = null);

(statearr_43308_45677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (39))){
var state_43289__$1 = state_43289;
var statearr_43312_45680 = state_43289__$1;
(statearr_43312_45680[(2)] = null);

(statearr_43312_45680[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (4))){
var inst_43135 = (state_43289[(10)]);
var inst_43135__$1 = (state_43289[(2)]);
var inst_43136 = (inst_43135__$1 == null);
var state_43289__$1 = (function (){var statearr_43313 = state_43289;
(statearr_43313[(10)] = inst_43135__$1);

return statearr_43313;
})();
if(cljs.core.truth_(inst_43136)){
var statearr_43314_45685 = state_43289__$1;
(statearr_43314_45685[(1)] = (5));

} else {
var statearr_43315_45686 = state_43289__$1;
(statearr_43315_45686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (15))){
var inst_43147 = (state_43289[(13)]);
var inst_43146 = (state_43289[(15)]);
var inst_43145 = (state_43289[(16)]);
var inst_43144 = (state_43289[(17)]);
var inst_43165 = (state_43289[(2)]);
var inst_43166 = (inst_43147 + (1));
var tmp43309 = inst_43146;
var tmp43310 = inst_43145;
var tmp43311 = inst_43144;
var inst_43144__$1 = tmp43311;
var inst_43145__$1 = tmp43310;
var inst_43146__$1 = tmp43309;
var inst_43147__$1 = inst_43166;
var state_43289__$1 = (function (){var statearr_43316 = state_43289;
(statearr_43316[(13)] = inst_43147__$1);

(statearr_43316[(18)] = inst_43165);

(statearr_43316[(15)] = inst_43146__$1);

(statearr_43316[(16)] = inst_43145__$1);

(statearr_43316[(17)] = inst_43144__$1);

return statearr_43316;
})();
var statearr_43318_45693 = state_43289__$1;
(statearr_43318_45693[(2)] = null);

(statearr_43318_45693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (21))){
var inst_43197 = (state_43289[(2)]);
var state_43289__$1 = state_43289;
var statearr_43325_45694 = state_43289__$1;
(statearr_43325_45694[(2)] = inst_43197);

(statearr_43325_45694[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (31))){
var inst_43226 = (state_43289[(9)]);
var inst_43230 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_43226);
var state_43289__$1 = state_43289;
var statearr_43326_45697 = state_43289__$1;
(statearr_43326_45697[(2)] = inst_43230);

(statearr_43326_45697[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (32))){
var inst_43218 = (state_43289[(19)]);
var inst_43219 = (state_43289[(11)]);
var inst_43221 = (state_43289[(12)]);
var inst_43220 = (state_43289[(20)]);
var inst_43232 = (state_43289[(2)]);
var inst_43233 = (inst_43221 + (1));
var tmp43321 = inst_43218;
var tmp43322 = inst_43219;
var tmp43323 = inst_43220;
var inst_43218__$1 = tmp43321;
var inst_43219__$1 = tmp43322;
var inst_43220__$1 = tmp43323;
var inst_43221__$1 = inst_43233;
var state_43289__$1 = (function (){var statearr_43327 = state_43289;
(statearr_43327[(19)] = inst_43218__$1);

(statearr_43327[(21)] = inst_43232);

(statearr_43327[(11)] = inst_43219__$1);

(statearr_43327[(12)] = inst_43221__$1);

(statearr_43327[(20)] = inst_43220__$1);

return statearr_43327;
})();
var statearr_43328_45699 = state_43289__$1;
(statearr_43328_45699[(2)] = null);

(statearr_43328_45699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (40))){
var inst_43245 = (state_43289[(22)]);
var inst_43253 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_43245);
var state_43289__$1 = state_43289;
var statearr_43329_45702 = state_43289__$1;
(statearr_43329_45702[(2)] = inst_43253);

(statearr_43329_45702[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (33))){
var inst_43236 = (state_43289[(23)]);
var inst_43238 = cljs.core.chunked_seq_QMARK_(inst_43236);
var state_43289__$1 = state_43289;
if(inst_43238){
var statearr_43330_45703 = state_43289__$1;
(statearr_43330_45703[(1)] = (36));

} else {
var statearr_43331_45705 = state_43289__$1;
(statearr_43331_45705[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (13))){
var inst_43159 = (state_43289[(24)]);
var inst_43162 = cljs.core.async.close_BANG_(inst_43159);
var state_43289__$1 = state_43289;
var statearr_43332_45706 = state_43289__$1;
(statearr_43332_45706[(2)] = inst_43162);

(statearr_43332_45706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (22))){
var inst_43184 = (state_43289[(8)]);
var inst_43190 = cljs.core.async.close_BANG_(inst_43184);
var state_43289__$1 = state_43289;
var statearr_43334_45708 = state_43289__$1;
(statearr_43334_45708[(2)] = inst_43190);

(statearr_43334_45708[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (36))){
var inst_43236 = (state_43289[(23)]);
var inst_43240 = cljs.core.chunk_first(inst_43236);
var inst_43241 = cljs.core.chunk_rest(inst_43236);
var inst_43242 = cljs.core.count(inst_43240);
var inst_43218 = inst_43241;
var inst_43219 = inst_43240;
var inst_43220 = inst_43242;
var inst_43221 = (0);
var state_43289__$1 = (function (){var statearr_43336 = state_43289;
(statearr_43336[(19)] = inst_43218);

(statearr_43336[(11)] = inst_43219);

(statearr_43336[(12)] = inst_43221);

(statearr_43336[(20)] = inst_43220);

return statearr_43336;
})();
var statearr_43337_45710 = state_43289__$1;
(statearr_43337_45710[(2)] = null);

(statearr_43337_45710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (41))){
var inst_43236 = (state_43289[(23)]);
var inst_43255 = (state_43289[(2)]);
var inst_43257 = cljs.core.next(inst_43236);
var inst_43218 = inst_43257;
var inst_43219 = null;
var inst_43220 = (0);
var inst_43221 = (0);
var state_43289__$1 = (function (){var statearr_43342 = state_43289;
(statearr_43342[(19)] = inst_43218);

(statearr_43342[(11)] = inst_43219);

(statearr_43342[(12)] = inst_43221);

(statearr_43342[(20)] = inst_43220);

(statearr_43342[(25)] = inst_43255);

return statearr_43342;
})();
var statearr_43343_45713 = state_43289__$1;
(statearr_43343_45713[(2)] = null);

(statearr_43343_45713[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (43))){
var state_43289__$1 = state_43289;
var statearr_43345_45717 = state_43289__$1;
(statearr_43345_45717[(2)] = null);

(statearr_43345_45717[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (29))){
var inst_43265 = (state_43289[(2)]);
var state_43289__$1 = state_43289;
var statearr_43349_45718 = state_43289__$1;
(statearr_43349_45718[(2)] = inst_43265);

(statearr_43349_45718[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (44))){
var inst_43278 = (state_43289[(2)]);
var state_43289__$1 = (function (){var statearr_43350 = state_43289;
(statearr_43350[(26)] = inst_43278);

return statearr_43350;
})();
var statearr_43351_45719 = state_43289__$1;
(statearr_43351_45719[(2)] = null);

(statearr_43351_45719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (6))){
var inst_43210 = (state_43289[(27)]);
var inst_43209 = cljs.core.deref(cs);
var inst_43210__$1 = cljs.core.keys(inst_43209);
var inst_43211 = cljs.core.count(inst_43210__$1);
var inst_43212 = cljs.core.reset_BANG_(dctr,inst_43211);
var inst_43217 = cljs.core.seq(inst_43210__$1);
var inst_43218 = inst_43217;
var inst_43219 = null;
var inst_43220 = (0);
var inst_43221 = (0);
var state_43289__$1 = (function (){var statearr_43357 = state_43289;
(statearr_43357[(28)] = inst_43212);

(statearr_43357[(19)] = inst_43218);

(statearr_43357[(11)] = inst_43219);

(statearr_43357[(12)] = inst_43221);

(statearr_43357[(27)] = inst_43210__$1);

(statearr_43357[(20)] = inst_43220);

return statearr_43357;
})();
var statearr_43360_45735 = state_43289__$1;
(statearr_43360_45735[(2)] = null);

(statearr_43360_45735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (28))){
var inst_43218 = (state_43289[(19)]);
var inst_43236 = (state_43289[(23)]);
var inst_43236__$1 = cljs.core.seq(inst_43218);
var state_43289__$1 = (function (){var statearr_43361 = state_43289;
(statearr_43361[(23)] = inst_43236__$1);

return statearr_43361;
})();
if(inst_43236__$1){
var statearr_43362_45744 = state_43289__$1;
(statearr_43362_45744[(1)] = (33));

} else {
var statearr_43363_45746 = state_43289__$1;
(statearr_43363_45746[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (25))){
var inst_43221 = (state_43289[(12)]);
var inst_43220 = (state_43289[(20)]);
var inst_43223 = (inst_43221 < inst_43220);
var inst_43224 = inst_43223;
var state_43289__$1 = state_43289;
if(cljs.core.truth_(inst_43224)){
var statearr_43366_45752 = state_43289__$1;
(statearr_43366_45752[(1)] = (27));

} else {
var statearr_43367_45753 = state_43289__$1;
(statearr_43367_45753[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (34))){
var state_43289__$1 = state_43289;
var statearr_43370_45756 = state_43289__$1;
(statearr_43370_45756[(2)] = null);

(statearr_43370_45756[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (17))){
var state_43289__$1 = state_43289;
var statearr_43373_45757 = state_43289__$1;
(statearr_43373_45757[(2)] = null);

(statearr_43373_45757[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (3))){
var inst_43283 = (state_43289[(2)]);
var state_43289__$1 = state_43289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43289__$1,inst_43283);
} else {
if((state_val_43290 === (12))){
var inst_43202 = (state_43289[(2)]);
var state_43289__$1 = state_43289;
var statearr_43374_45758 = state_43289__$1;
(statearr_43374_45758[(2)] = inst_43202);

(statearr_43374_45758[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (2))){
var state_43289__$1 = state_43289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43289__$1,(4),ch);
} else {
if((state_val_43290 === (23))){
var state_43289__$1 = state_43289;
var statearr_43375_45762 = state_43289__$1;
(statearr_43375_45762[(2)] = null);

(statearr_43375_45762[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (35))){
var inst_43263 = (state_43289[(2)]);
var state_43289__$1 = state_43289;
var statearr_43377_45763 = state_43289__$1;
(statearr_43377_45763[(2)] = inst_43263);

(statearr_43377_45763[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (19))){
var inst_43170 = (state_43289[(7)]);
var inst_43175 = cljs.core.chunk_first(inst_43170);
var inst_43176 = cljs.core.chunk_rest(inst_43170);
var inst_43177 = cljs.core.count(inst_43175);
var inst_43144 = inst_43176;
var inst_43145 = inst_43175;
var inst_43146 = inst_43177;
var inst_43147 = (0);
var state_43289__$1 = (function (){var statearr_43385 = state_43289;
(statearr_43385[(13)] = inst_43147);

(statearr_43385[(15)] = inst_43146);

(statearr_43385[(16)] = inst_43145);

(statearr_43385[(17)] = inst_43144);

return statearr_43385;
})();
var statearr_43387_45769 = state_43289__$1;
(statearr_43387_45769[(2)] = null);

(statearr_43387_45769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (11))){
var inst_43170 = (state_43289[(7)]);
var inst_43144 = (state_43289[(17)]);
var inst_43170__$1 = cljs.core.seq(inst_43144);
var state_43289__$1 = (function (){var statearr_43391 = state_43289;
(statearr_43391[(7)] = inst_43170__$1);

return statearr_43391;
})();
if(inst_43170__$1){
var statearr_43393_45770 = state_43289__$1;
(statearr_43393_45770[(1)] = (16));

} else {
var statearr_43394_45774 = state_43289__$1;
(statearr_43394_45774[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (9))){
var inst_43204 = (state_43289[(2)]);
var state_43289__$1 = state_43289;
var statearr_43399_45775 = state_43289__$1;
(statearr_43399_45775[(2)] = inst_43204);

(statearr_43399_45775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (5))){
var inst_43142 = cljs.core.deref(cs);
var inst_43143 = cljs.core.seq(inst_43142);
var inst_43144 = inst_43143;
var inst_43145 = null;
var inst_43146 = (0);
var inst_43147 = (0);
var state_43289__$1 = (function (){var statearr_43401 = state_43289;
(statearr_43401[(13)] = inst_43147);

(statearr_43401[(15)] = inst_43146);

(statearr_43401[(16)] = inst_43145);

(statearr_43401[(17)] = inst_43144);

return statearr_43401;
})();
var statearr_43404_45780 = state_43289__$1;
(statearr_43404_45780[(2)] = null);

(statearr_43404_45780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (14))){
var state_43289__$1 = state_43289;
var statearr_43408_45781 = state_43289__$1;
(statearr_43408_45781[(2)] = null);

(statearr_43408_45781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (45))){
var inst_43275 = (state_43289[(2)]);
var state_43289__$1 = state_43289;
var statearr_43409_45782 = state_43289__$1;
(statearr_43409_45782[(2)] = inst_43275);

(statearr_43409_45782[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (26))){
var inst_43210 = (state_43289[(27)]);
var inst_43267 = (state_43289[(2)]);
var inst_43272 = cljs.core.seq(inst_43210);
var state_43289__$1 = (function (){var statearr_43410 = state_43289;
(statearr_43410[(29)] = inst_43267);

return statearr_43410;
})();
if(inst_43272){
var statearr_43412_45785 = state_43289__$1;
(statearr_43412_45785[(1)] = (42));

} else {
var statearr_43413_45786 = state_43289__$1;
(statearr_43413_45786[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (16))){
var inst_43170 = (state_43289[(7)]);
var inst_43173 = cljs.core.chunked_seq_QMARK_(inst_43170);
var state_43289__$1 = state_43289;
if(inst_43173){
var statearr_43418_45787 = state_43289__$1;
(statearr_43418_45787[(1)] = (19));

} else {
var statearr_43419_45788 = state_43289__$1;
(statearr_43419_45788[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (38))){
var inst_43260 = (state_43289[(2)]);
var state_43289__$1 = state_43289;
var statearr_43420_45790 = state_43289__$1;
(statearr_43420_45790[(2)] = inst_43260);

(statearr_43420_45790[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (30))){
var state_43289__$1 = state_43289;
var statearr_43421_45791 = state_43289__$1;
(statearr_43421_45791[(2)] = null);

(statearr_43421_45791[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (10))){
var inst_43147 = (state_43289[(13)]);
var inst_43145 = (state_43289[(16)]);
var inst_43158 = cljs.core._nth(inst_43145,inst_43147);
var inst_43159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43158,(0),null);
var inst_43160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43158,(1),null);
var state_43289__$1 = (function (){var statearr_43429 = state_43289;
(statearr_43429[(24)] = inst_43159);

return statearr_43429;
})();
if(cljs.core.truth_(inst_43160)){
var statearr_43432_45792 = state_43289__$1;
(statearr_43432_45792[(1)] = (13));

} else {
var statearr_43434_45793 = state_43289__$1;
(statearr_43434_45793[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (18))){
var inst_43200 = (state_43289[(2)]);
var state_43289__$1 = state_43289;
var statearr_43435_45794 = state_43289__$1;
(statearr_43435_45794[(2)] = inst_43200);

(statearr_43435_45794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (42))){
var state_43289__$1 = state_43289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43289__$1,(45),dchan);
} else {
if((state_val_43290 === (37))){
var inst_43135 = (state_43289[(10)]);
var inst_43245 = (state_43289[(22)]);
var inst_43236 = (state_43289[(23)]);
var inst_43245__$1 = cljs.core.first(inst_43236);
var inst_43250 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43245__$1,inst_43135,done);
var state_43289__$1 = (function (){var statearr_43438 = state_43289;
(statearr_43438[(22)] = inst_43245__$1);

return statearr_43438;
})();
if(cljs.core.truth_(inst_43250)){
var statearr_43439_45798 = state_43289__$1;
(statearr_43439_45798[(1)] = (39));

} else {
var statearr_43440_45799 = state_43289__$1;
(statearr_43440_45799[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (8))){
var inst_43147 = (state_43289[(13)]);
var inst_43146 = (state_43289[(15)]);
var inst_43151 = (inst_43147 < inst_43146);
var inst_43152 = inst_43151;
var state_43289__$1 = state_43289;
if(cljs.core.truth_(inst_43152)){
var statearr_43442_45801 = state_43289__$1;
(statearr_43442_45801[(1)] = (10));

} else {
var statearr_43443_45802 = state_43289__$1;
(statearr_43443_45802[(1)] = (11));

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
var statearr_43449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43449[(0)] = cljs$core$async$mult_$_state_machine__10330__auto__);

(statearr_43449[(1)] = (1));

return statearr_43449;
});
var cljs$core$async$mult_$_state_machine__10330__auto____1 = (function (state_43289){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_43289);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e43453){var ex__10333__auto__ = e43453;
var statearr_43455_45806 = state_43289;
(statearr_43455_45806[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_43289[(4)]))){
var statearr_43457_45809 = state_43289;
(statearr_43457_45809[(1)] = cljs.core.first((state_43289[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45810 = state_43289;
state_43289 = G__45810;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10330__auto__ = function(state_43289){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10330__auto____1.call(this,state_43289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10330__auto____0;
cljs$core$async$mult_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10330__auto____1;
return cljs$core$async$mult_$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_43464 = f__10425__auto__();
(statearr_43464[(6)] = c__10424__auto___45662);

return statearr_43464;
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
var G__43473 = arguments.length;
switch (G__43473) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_45813 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_45813(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_45817 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_45817(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_45823 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_45823(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_45830 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_45830(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_45834 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_45834(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___45836 = arguments.length;
var i__5727__auto___45837 = (0);
while(true){
if((i__5727__auto___45837 < len__5726__auto___45836)){
args__5732__auto__.push((arguments[i__5727__auto___45837]));

var G__45841 = (i__5727__auto___45837 + (1));
i__5727__auto___45837 = G__45841;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43539){
var map__43540 = p__43539;
var map__43540__$1 = cljs.core.__destructure_map(map__43540);
var opts = map__43540__$1;
var statearr_43544_45842 = state;
(statearr_43544_45842[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_43550_45843 = state;
(statearr_43550_45843[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_43551_45844 = state;
(statearr_43551_45844[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43523){
var G__43524 = cljs.core.first(seq43523);
var seq43523__$1 = cljs.core.next(seq43523);
var G__43525 = cljs.core.first(seq43523__$1);
var seq43523__$2 = cljs.core.next(seq43523__$1);
var G__43526 = cljs.core.first(seq43523__$2);
var seq43523__$3 = cljs.core.next(seq43523__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43524,G__43525,G__43526,seq43523__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43572 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43573){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43573 = meta43573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43574,meta43573__$1){
var self__ = this;
var _43574__$1 = this;
return (new cljs.core.async.t_cljs$core$async43572(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43573__$1));
}));

(cljs.core.async.t_cljs$core$async43572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43574){
var self__ = this;
var _43574__$1 = this;
return self__.meta43573;
}));

(cljs.core.async.t_cljs$core$async43572.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43572.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async43572.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43572.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async43572.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async43572.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async43572.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async43572.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async43572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43573","meta43573",253711676,null)], null);
}));

(cljs.core.async.t_cljs$core$async43572.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43572");

(cljs.core.async.t_cljs$core$async43572.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async43572");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43572.
 */
cljs.core.async.__GT_t_cljs$core$async43572 = (function cljs$core$async$__GT_t_cljs$core$async43572(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43573){
return (new cljs.core.async.t_cljs$core$async43572(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43573));
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
var m = (new cljs.core.async.t_cljs$core$async43572(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__10424__auto___45860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_43687){
var state_val_43688 = (state_43687[(1)]);
if((state_val_43688 === (7))){
var inst_43645 = (state_43687[(2)]);
var state_43687__$1 = state_43687;
if(cljs.core.truth_(inst_43645)){
var statearr_43692_45865 = state_43687__$1;
(statearr_43692_45865[(1)] = (8));

} else {
var statearr_43693_45869 = state_43687__$1;
(statearr_43693_45869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (20))){
var inst_43635 = (state_43687[(7)]);
var state_43687__$1 = state_43687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43687__$1,(23),out,inst_43635);
} else {
if((state_val_43688 === (1))){
var inst_43618 = calc_state();
var inst_43619 = cljs.core.__destructure_map(inst_43618);
var inst_43620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43619,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43619,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43619,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43623 = inst_43618;
var state_43687__$1 = (function (){var statearr_43696 = state_43687;
(statearr_43696[(8)] = inst_43621);

(statearr_43696[(9)] = inst_43622);

(statearr_43696[(10)] = inst_43623);

(statearr_43696[(11)] = inst_43620);

return statearr_43696;
})();
var statearr_43697_45871 = state_43687__$1;
(statearr_43697_45871[(2)] = null);

(statearr_43697_45871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (24))){
var inst_43626 = (state_43687[(12)]);
var inst_43623 = inst_43626;
var state_43687__$1 = (function (){var statearr_43698 = state_43687;
(statearr_43698[(10)] = inst_43623);

return statearr_43698;
})();
var statearr_43700_45875 = state_43687__$1;
(statearr_43700_45875[(2)] = null);

(statearr_43700_45875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (4))){
var inst_43635 = (state_43687[(7)]);
var inst_43638 = (state_43687[(13)]);
var inst_43634 = (state_43687[(2)]);
var inst_43635__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43634,(0),null);
var inst_43637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43634,(1),null);
var inst_43638__$1 = (inst_43635__$1 == null);
var state_43687__$1 = (function (){var statearr_43706 = state_43687;
(statearr_43706[(7)] = inst_43635__$1);

(statearr_43706[(14)] = inst_43637);

(statearr_43706[(13)] = inst_43638__$1);

return statearr_43706;
})();
if(cljs.core.truth_(inst_43638__$1)){
var statearr_43707_45878 = state_43687__$1;
(statearr_43707_45878[(1)] = (5));

} else {
var statearr_43708_45879 = state_43687__$1;
(statearr_43708_45879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (15))){
var inst_43661 = (state_43687[(15)]);
var inst_43627 = (state_43687[(16)]);
var inst_43661__$1 = cljs.core.empty_QMARK_(inst_43627);
var state_43687__$1 = (function (){var statearr_43710 = state_43687;
(statearr_43710[(15)] = inst_43661__$1);

return statearr_43710;
})();
if(inst_43661__$1){
var statearr_43711_45882 = state_43687__$1;
(statearr_43711_45882[(1)] = (17));

} else {
var statearr_43713_45884 = state_43687__$1;
(statearr_43713_45884[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (21))){
var inst_43626 = (state_43687[(12)]);
var inst_43623 = inst_43626;
var state_43687__$1 = (function (){var statearr_43714 = state_43687;
(statearr_43714[(10)] = inst_43623);

return statearr_43714;
})();
var statearr_43715_45886 = state_43687__$1;
(statearr_43715_45886[(2)] = null);

(statearr_43715_45886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (13))){
var inst_43653 = (state_43687[(2)]);
var inst_43654 = calc_state();
var inst_43623 = inst_43654;
var state_43687__$1 = (function (){var statearr_43718 = state_43687;
(statearr_43718[(17)] = inst_43653);

(statearr_43718[(10)] = inst_43623);

return statearr_43718;
})();
var statearr_43723_45890 = state_43687__$1;
(statearr_43723_45890[(2)] = null);

(statearr_43723_45890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (22))){
var inst_43681 = (state_43687[(2)]);
var state_43687__$1 = state_43687;
var statearr_43725_45893 = state_43687__$1;
(statearr_43725_45893[(2)] = inst_43681);

(statearr_43725_45893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (6))){
var inst_43637 = (state_43687[(14)]);
var inst_43643 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43637,change);
var state_43687__$1 = state_43687;
var statearr_43727_45894 = state_43687__$1;
(statearr_43727_45894[(2)] = inst_43643);

(statearr_43727_45894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (25))){
var state_43687__$1 = state_43687;
var statearr_43728_45895 = state_43687__$1;
(statearr_43728_45895[(2)] = null);

(statearr_43728_45895[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (17))){
var inst_43637 = (state_43687[(14)]);
var inst_43628 = (state_43687[(18)]);
var inst_43663 = (inst_43628.cljs$core$IFn$_invoke$arity$1 ? inst_43628.cljs$core$IFn$_invoke$arity$1(inst_43637) : inst_43628.call(null, inst_43637));
var inst_43664 = cljs.core.not(inst_43663);
var state_43687__$1 = state_43687;
var statearr_43729_45896 = state_43687__$1;
(statearr_43729_45896[(2)] = inst_43664);

(statearr_43729_45896[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (3))){
var inst_43685 = (state_43687[(2)]);
var state_43687__$1 = state_43687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43687__$1,inst_43685);
} else {
if((state_val_43688 === (12))){
var state_43687__$1 = state_43687;
var statearr_43731_45898 = state_43687__$1;
(statearr_43731_45898[(2)] = null);

(statearr_43731_45898[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (2))){
var inst_43626 = (state_43687[(12)]);
var inst_43623 = (state_43687[(10)]);
var inst_43626__$1 = cljs.core.__destructure_map(inst_43623);
var inst_43627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43626__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43626__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43626__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43687__$1 = (function (){var statearr_43734 = state_43687;
(statearr_43734[(18)] = inst_43628);

(statearr_43734[(12)] = inst_43626__$1);

(statearr_43734[(16)] = inst_43627);

return statearr_43734;
})();
return cljs.core.async.ioc_alts_BANG_(state_43687__$1,(4),inst_43629);
} else {
if((state_val_43688 === (23))){
var inst_43672 = (state_43687[(2)]);
var state_43687__$1 = state_43687;
if(cljs.core.truth_(inst_43672)){
var statearr_43735_45907 = state_43687__$1;
(statearr_43735_45907[(1)] = (24));

} else {
var statearr_43737_45908 = state_43687__$1;
(statearr_43737_45908[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (19))){
var inst_43667 = (state_43687[(2)]);
var state_43687__$1 = state_43687;
var statearr_43738_45909 = state_43687__$1;
(statearr_43738_45909[(2)] = inst_43667);

(statearr_43738_45909[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (11))){
var inst_43637 = (state_43687[(14)]);
var inst_43650 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43637);
var state_43687__$1 = state_43687;
var statearr_43740_45910 = state_43687__$1;
(statearr_43740_45910[(2)] = inst_43650);

(statearr_43740_45910[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (9))){
var inst_43637 = (state_43687[(14)]);
var inst_43658 = (state_43687[(19)]);
var inst_43627 = (state_43687[(16)]);
var inst_43658__$1 = (inst_43627.cljs$core$IFn$_invoke$arity$1 ? inst_43627.cljs$core$IFn$_invoke$arity$1(inst_43637) : inst_43627.call(null, inst_43637));
var state_43687__$1 = (function (){var statearr_43744 = state_43687;
(statearr_43744[(19)] = inst_43658__$1);

return statearr_43744;
})();
if(cljs.core.truth_(inst_43658__$1)){
var statearr_43745_45912 = state_43687__$1;
(statearr_43745_45912[(1)] = (14));

} else {
var statearr_43746_45913 = state_43687__$1;
(statearr_43746_45913[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (5))){
var inst_43638 = (state_43687[(13)]);
var state_43687__$1 = state_43687;
var statearr_43751_45915 = state_43687__$1;
(statearr_43751_45915[(2)] = inst_43638);

(statearr_43751_45915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (14))){
var inst_43658 = (state_43687[(19)]);
var state_43687__$1 = state_43687;
var statearr_43752_45916 = state_43687__$1;
(statearr_43752_45916[(2)] = inst_43658);

(statearr_43752_45916[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (26))){
var inst_43677 = (state_43687[(2)]);
var state_43687__$1 = state_43687;
var statearr_43753_45919 = state_43687__$1;
(statearr_43753_45919[(2)] = inst_43677);

(statearr_43753_45919[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (16))){
var inst_43669 = (state_43687[(2)]);
var state_43687__$1 = state_43687;
if(cljs.core.truth_(inst_43669)){
var statearr_43754_45922 = state_43687__$1;
(statearr_43754_45922[(1)] = (20));

} else {
var statearr_43755_45923 = state_43687__$1;
(statearr_43755_45923[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (10))){
var inst_43683 = (state_43687[(2)]);
var state_43687__$1 = state_43687;
var statearr_43757_45925 = state_43687__$1;
(statearr_43757_45925[(2)] = inst_43683);

(statearr_43757_45925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (18))){
var inst_43661 = (state_43687[(15)]);
var state_43687__$1 = state_43687;
var statearr_43758_45926 = state_43687__$1;
(statearr_43758_45926[(2)] = inst_43661);

(statearr_43758_45926[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (8))){
var inst_43635 = (state_43687[(7)]);
var inst_43648 = (inst_43635 == null);
var state_43687__$1 = state_43687;
if(cljs.core.truth_(inst_43648)){
var statearr_43759_45927 = state_43687__$1;
(statearr_43759_45927[(1)] = (11));

} else {
var statearr_43760_45928 = state_43687__$1;
(statearr_43760_45928[(1)] = (12));

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
var statearr_43762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43762[(0)] = cljs$core$async$mix_$_state_machine__10330__auto__);

(statearr_43762[(1)] = (1));

return statearr_43762;
});
var cljs$core$async$mix_$_state_machine__10330__auto____1 = (function (state_43687){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_43687);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e43765){var ex__10333__auto__ = e43765;
var statearr_43766_45932 = state_43687;
(statearr_43766_45932[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_43687[(4)]))){
var statearr_43767_45933 = state_43687;
(statearr_43767_45933[(1)] = cljs.core.first((state_43687[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45936 = state_43687;
state_43687 = G__45936;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10330__auto__ = function(state_43687){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10330__auto____1.call(this,state_43687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10330__auto____0;
cljs$core$async$mix_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10330__auto____1;
return cljs$core$async$mix_$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_43773 = f__10425__auto__();
(statearr_43773[(6)] = c__10424__auto___45860);

return statearr_43773;
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

var cljs$core$async$Pub$sub_STAR_$dyn_45939 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_45939(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_45950 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_45950(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_45951 = (function() {
var G__45952 = null;
var G__45952__1 = (function (p){
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
var G__45952__2 = (function (p,v){
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
G__45952 = function(p,v){
switch(arguments.length){
case 1:
return G__45952__1.call(this,p);
case 2:
return G__45952__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45952.cljs$core$IFn$_invoke$arity$1 = G__45952__1;
G__45952.cljs$core$IFn$_invoke$arity$2 = G__45952__2;
return G__45952;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43812 = arguments.length;
switch (G__43812) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45951(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45951(p,v);
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
cljs.core.async.t_cljs$core$async43837 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43838){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43838 = meta43838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43839,meta43838__$1){
var self__ = this;
var _43839__$1 = this;
return (new cljs.core.async.t_cljs$core$async43837(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43838__$1));
}));

(cljs.core.async.t_cljs$core$async43837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43839){
var self__ = this;
var _43839__$1 = this;
return self__.meta43838;
}));

(cljs.core.async.t_cljs$core$async43837.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43837.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43837.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43837.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async43837.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async43837.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async43837.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async43837.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43838","meta43838",-1077798642,null)], null);
}));

(cljs.core.async.t_cljs$core$async43837.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43837");

(cljs.core.async.t_cljs$core$async43837.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async43837");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43837.
 */
cljs.core.async.__GT_t_cljs$core$async43837 = (function cljs$core$async$__GT_t_cljs$core$async43837(ch,topic_fn,buf_fn,mults,ensure_mult,meta43838){
return (new cljs.core.async.t_cljs$core$async43837(ch,topic_fn,buf_fn,mults,ensure_mult,meta43838));
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
var G__43827 = arguments.length;
switch (G__43827) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__43818_SHARP_){
if(cljs.core.truth_((p1__43818_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43818_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43818_SHARP_.call(null, topic)))){
return p1__43818_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43818_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async43837(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__10424__auto___45974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_43940){
var state_val_43941 = (state_43940[(1)]);
if((state_val_43941 === (7))){
var inst_43936 = (state_43940[(2)]);
var state_43940__$1 = state_43940;
var statearr_43944_45976 = state_43940__$1;
(statearr_43944_45976[(2)] = inst_43936);

(statearr_43944_45976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (20))){
var state_43940__$1 = state_43940;
var statearr_43947_45981 = state_43940__$1;
(statearr_43947_45981[(2)] = null);

(statearr_43947_45981[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (1))){
var state_43940__$1 = state_43940;
var statearr_43948_45986 = state_43940__$1;
(statearr_43948_45986[(2)] = null);

(statearr_43948_45986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (24))){
var inst_43919 = (state_43940[(7)]);
var inst_43928 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43919);
var state_43940__$1 = state_43940;
var statearr_43950_45987 = state_43940__$1;
(statearr_43950_45987[(2)] = inst_43928);

(statearr_43950_45987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (4))){
var inst_43867 = (state_43940[(8)]);
var inst_43867__$1 = (state_43940[(2)]);
var inst_43868 = (inst_43867__$1 == null);
var state_43940__$1 = (function (){var statearr_43952 = state_43940;
(statearr_43952[(8)] = inst_43867__$1);

return statearr_43952;
})();
if(cljs.core.truth_(inst_43868)){
var statearr_43953_45988 = state_43940__$1;
(statearr_43953_45988[(1)] = (5));

} else {
var statearr_43957_45989 = state_43940__$1;
(statearr_43957_45989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (15))){
var inst_43913 = (state_43940[(2)]);
var state_43940__$1 = state_43940;
var statearr_43961_45990 = state_43940__$1;
(statearr_43961_45990[(2)] = inst_43913);

(statearr_43961_45990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (21))){
var inst_43933 = (state_43940[(2)]);
var state_43940__$1 = (function (){var statearr_43965 = state_43940;
(statearr_43965[(9)] = inst_43933);

return statearr_43965;
})();
var statearr_43966_45991 = state_43940__$1;
(statearr_43966_45991[(2)] = null);

(statearr_43966_45991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (13))){
var inst_43895 = (state_43940[(10)]);
var inst_43897 = cljs.core.chunked_seq_QMARK_(inst_43895);
var state_43940__$1 = state_43940;
if(inst_43897){
var statearr_43967_45995 = state_43940__$1;
(statearr_43967_45995[(1)] = (16));

} else {
var statearr_43968_45996 = state_43940__$1;
(statearr_43968_45996[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (22))){
var inst_43925 = (state_43940[(2)]);
var state_43940__$1 = state_43940;
if(cljs.core.truth_(inst_43925)){
var statearr_43969_45997 = state_43940__$1;
(statearr_43969_45997[(1)] = (23));

} else {
var statearr_43973_45998 = state_43940__$1;
(statearr_43973_45998[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (6))){
var inst_43867 = (state_43940[(8)]);
var inst_43919 = (state_43940[(7)]);
var inst_43921 = (state_43940[(11)]);
var inst_43919__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43867) : topic_fn.call(null, inst_43867));
var inst_43920 = cljs.core.deref(mults);
var inst_43921__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43920,inst_43919__$1);
var state_43940__$1 = (function (){var statearr_43977 = state_43940;
(statearr_43977[(7)] = inst_43919__$1);

(statearr_43977[(11)] = inst_43921__$1);

return statearr_43977;
})();
if(cljs.core.truth_(inst_43921__$1)){
var statearr_43978_45999 = state_43940__$1;
(statearr_43978_45999[(1)] = (19));

} else {
var statearr_43979_46000 = state_43940__$1;
(statearr_43979_46000[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (25))){
var inst_43930 = (state_43940[(2)]);
var state_43940__$1 = state_43940;
var statearr_43981_46001 = state_43940__$1;
(statearr_43981_46001[(2)] = inst_43930);

(statearr_43981_46001[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (17))){
var inst_43895 = (state_43940[(10)]);
var inst_43904 = cljs.core.first(inst_43895);
var inst_43905 = cljs.core.async.muxch_STAR_(inst_43904);
var inst_43906 = cljs.core.async.close_BANG_(inst_43905);
var inst_43907 = cljs.core.next(inst_43895);
var inst_43877 = inst_43907;
var inst_43878 = null;
var inst_43879 = (0);
var inst_43880 = (0);
var state_43940__$1 = (function (){var statearr_43982 = state_43940;
(statearr_43982[(12)] = inst_43880);

(statearr_43982[(13)] = inst_43878);

(statearr_43982[(14)] = inst_43877);

(statearr_43982[(15)] = inst_43879);

(statearr_43982[(16)] = inst_43906);

return statearr_43982;
})();
var statearr_43983_46002 = state_43940__$1;
(statearr_43983_46002[(2)] = null);

(statearr_43983_46002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (3))){
var inst_43938 = (state_43940[(2)]);
var state_43940__$1 = state_43940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43940__$1,inst_43938);
} else {
if((state_val_43941 === (12))){
var inst_43915 = (state_43940[(2)]);
var state_43940__$1 = state_43940;
var statearr_43984_46007 = state_43940__$1;
(statearr_43984_46007[(2)] = inst_43915);

(statearr_43984_46007[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (2))){
var state_43940__$1 = state_43940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43940__$1,(4),ch);
} else {
if((state_val_43941 === (23))){
var state_43940__$1 = state_43940;
var statearr_43988_46008 = state_43940__$1;
(statearr_43988_46008[(2)] = null);

(statearr_43988_46008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (19))){
var inst_43867 = (state_43940[(8)]);
var inst_43921 = (state_43940[(11)]);
var inst_43923 = cljs.core.async.muxch_STAR_(inst_43921);
var state_43940__$1 = state_43940;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43940__$1,(22),inst_43923,inst_43867);
} else {
if((state_val_43941 === (11))){
var inst_43895 = (state_43940[(10)]);
var inst_43877 = (state_43940[(14)]);
var inst_43895__$1 = cljs.core.seq(inst_43877);
var state_43940__$1 = (function (){var statearr_43991 = state_43940;
(statearr_43991[(10)] = inst_43895__$1);

return statearr_43991;
})();
if(inst_43895__$1){
var statearr_43992_46012 = state_43940__$1;
(statearr_43992_46012[(1)] = (13));

} else {
var statearr_43993_46013 = state_43940__$1;
(statearr_43993_46013[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (9))){
var inst_43917 = (state_43940[(2)]);
var state_43940__$1 = state_43940;
var statearr_43996_46015 = state_43940__$1;
(statearr_43996_46015[(2)] = inst_43917);

(statearr_43996_46015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (5))){
var inst_43874 = cljs.core.deref(mults);
var inst_43875 = cljs.core.vals(inst_43874);
var inst_43876 = cljs.core.seq(inst_43875);
var inst_43877 = inst_43876;
var inst_43878 = null;
var inst_43879 = (0);
var inst_43880 = (0);
var state_43940__$1 = (function (){var statearr_44002 = state_43940;
(statearr_44002[(12)] = inst_43880);

(statearr_44002[(13)] = inst_43878);

(statearr_44002[(14)] = inst_43877);

(statearr_44002[(15)] = inst_43879);

return statearr_44002;
})();
var statearr_44003_46016 = state_43940__$1;
(statearr_44003_46016[(2)] = null);

(statearr_44003_46016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (14))){
var state_43940__$1 = state_43940;
var statearr_44008_46017 = state_43940__$1;
(statearr_44008_46017[(2)] = null);

(statearr_44008_46017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (16))){
var inst_43895 = (state_43940[(10)]);
var inst_43899 = cljs.core.chunk_first(inst_43895);
var inst_43900 = cljs.core.chunk_rest(inst_43895);
var inst_43901 = cljs.core.count(inst_43899);
var inst_43877 = inst_43900;
var inst_43878 = inst_43899;
var inst_43879 = inst_43901;
var inst_43880 = (0);
var state_43940__$1 = (function (){var statearr_44010 = state_43940;
(statearr_44010[(12)] = inst_43880);

(statearr_44010[(13)] = inst_43878);

(statearr_44010[(14)] = inst_43877);

(statearr_44010[(15)] = inst_43879);

return statearr_44010;
})();
var statearr_44011_46019 = state_43940__$1;
(statearr_44011_46019[(2)] = null);

(statearr_44011_46019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (10))){
var inst_43880 = (state_43940[(12)]);
var inst_43878 = (state_43940[(13)]);
var inst_43877 = (state_43940[(14)]);
var inst_43879 = (state_43940[(15)]);
var inst_43887 = cljs.core._nth(inst_43878,inst_43880);
var inst_43890 = cljs.core.async.muxch_STAR_(inst_43887);
var inst_43891 = cljs.core.async.close_BANG_(inst_43890);
var inst_43892 = (inst_43880 + (1));
var tmp44004 = inst_43878;
var tmp44005 = inst_43877;
var tmp44006 = inst_43879;
var inst_43877__$1 = tmp44005;
var inst_43878__$1 = tmp44004;
var inst_43879__$1 = tmp44006;
var inst_43880__$1 = inst_43892;
var state_43940__$1 = (function (){var statearr_44012 = state_43940;
(statearr_44012[(12)] = inst_43880__$1);

(statearr_44012[(13)] = inst_43878__$1);

(statearr_44012[(17)] = inst_43891);

(statearr_44012[(14)] = inst_43877__$1);

(statearr_44012[(15)] = inst_43879__$1);

return statearr_44012;
})();
var statearr_44013_46024 = state_43940__$1;
(statearr_44013_46024[(2)] = null);

(statearr_44013_46024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (18))){
var inst_43910 = (state_43940[(2)]);
var state_43940__$1 = state_43940;
var statearr_44014_46033 = state_43940__$1;
(statearr_44014_46033[(2)] = inst_43910);

(statearr_44014_46033[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43941 === (8))){
var inst_43880 = (state_43940[(12)]);
var inst_43879 = (state_43940[(15)]);
var inst_43884 = (inst_43880 < inst_43879);
var inst_43885 = inst_43884;
var state_43940__$1 = state_43940;
if(cljs.core.truth_(inst_43885)){
var statearr_44015_46038 = state_43940__$1;
(statearr_44015_46038[(1)] = (10));

} else {
var statearr_44016_46039 = state_43940__$1;
(statearr_44016_46039[(1)] = (11));

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
var statearr_44017 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44017[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_44017[(1)] = (1));

return statearr_44017;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_43940){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_43940);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e44022){var ex__10333__auto__ = e44022;
var statearr_44023_46040 = state_43940;
(statearr_44023_46040[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_43940[(4)]))){
var statearr_44024_46041 = state_43940;
(statearr_44024_46041[(1)] = cljs.core.first((state_43940[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46042 = state_43940;
state_43940 = G__46042;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_43940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_43940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_44025 = f__10425__auto__();
(statearr_44025[(6)] = c__10424__auto___45974);

return statearr_44025;
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
var G__44034 = arguments.length;
switch (G__44034) {
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
var G__44043 = arguments.length;
switch (G__44043) {
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
var G__44051 = arguments.length;
switch (G__44051) {
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
var c__10424__auto___46062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_44100){
var state_val_44101 = (state_44100[(1)]);
if((state_val_44101 === (7))){
var state_44100__$1 = state_44100;
var statearr_44109_46064 = state_44100__$1;
(statearr_44109_46064[(2)] = null);

(statearr_44109_46064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (1))){
var state_44100__$1 = state_44100;
var statearr_44113_46066 = state_44100__$1;
(statearr_44113_46066[(2)] = null);

(statearr_44113_46066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (4))){
var inst_44056 = (state_44100[(7)]);
var inst_44057 = (state_44100[(8)]);
var inst_44062 = (inst_44057 < inst_44056);
var state_44100__$1 = state_44100;
if(cljs.core.truth_(inst_44062)){
var statearr_44114_46068 = state_44100__$1;
(statearr_44114_46068[(1)] = (6));

} else {
var statearr_44117_46069 = state_44100__$1;
(statearr_44117_46069[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (15))){
var inst_44085 = (state_44100[(9)]);
var inst_44090 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44085);
var state_44100__$1 = state_44100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44100__$1,(17),out,inst_44090);
} else {
if((state_val_44101 === (13))){
var inst_44085 = (state_44100[(9)]);
var inst_44085__$1 = (state_44100[(2)]);
var inst_44086 = cljs.core.some(cljs.core.nil_QMARK_,inst_44085__$1);
var state_44100__$1 = (function (){var statearr_44119 = state_44100;
(statearr_44119[(9)] = inst_44085__$1);

return statearr_44119;
})();
if(cljs.core.truth_(inst_44086)){
var statearr_44120_46073 = state_44100__$1;
(statearr_44120_46073[(1)] = (14));

} else {
var statearr_44122_46074 = state_44100__$1;
(statearr_44122_46074[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (6))){
var state_44100__$1 = state_44100;
var statearr_44125_46075 = state_44100__$1;
(statearr_44125_46075[(2)] = null);

(statearr_44125_46075[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (17))){
var inst_44092 = (state_44100[(2)]);
var state_44100__$1 = (function (){var statearr_44129 = state_44100;
(statearr_44129[(10)] = inst_44092);

return statearr_44129;
})();
var statearr_44130_46081 = state_44100__$1;
(statearr_44130_46081[(2)] = null);

(statearr_44130_46081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (3))){
var inst_44098 = (state_44100[(2)]);
var state_44100__$1 = state_44100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44100__$1,inst_44098);
} else {
if((state_val_44101 === (12))){
var _ = (function (){var statearr_44134 = state_44100;
(statearr_44134[(4)] = cljs.core.rest((state_44100[(4)])));

return statearr_44134;
})();
var state_44100__$1 = state_44100;
var ex44128 = (state_44100__$1[(2)]);
var statearr_44135_46090 = state_44100__$1;
(statearr_44135_46090[(5)] = ex44128);


if((ex44128 instanceof Object)){
var statearr_44140_46091 = state_44100__$1;
(statearr_44140_46091[(1)] = (11));

(statearr_44140_46091[(5)] = null);

} else {
throw ex44128;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (2))){
var inst_44055 = cljs.core.reset_BANG_(dctr,cnt);
var inst_44056 = cnt;
var inst_44057 = (0);
var state_44100__$1 = (function (){var statearr_44141 = state_44100;
(statearr_44141[(7)] = inst_44056);

(statearr_44141[(11)] = inst_44055);

(statearr_44141[(8)] = inst_44057);

return statearr_44141;
})();
var statearr_44144_46102 = state_44100__$1;
(statearr_44144_46102[(2)] = null);

(statearr_44144_46102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (11))){
var inst_44064 = (state_44100[(2)]);
var inst_44065 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_44100__$1 = (function (){var statearr_44145 = state_44100;
(statearr_44145[(12)] = inst_44064);

return statearr_44145;
})();
var statearr_44146_46104 = state_44100__$1;
(statearr_44146_46104[(2)] = inst_44065);

(statearr_44146_46104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (9))){
var inst_44057 = (state_44100[(8)]);
var _ = (function (){var statearr_44152 = state_44100;
(statearr_44152[(4)] = cljs.core.cons((12),(state_44100[(4)])));

return statearr_44152;
})();
var inst_44071 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44057) : chs__$1.call(null, inst_44057));
var inst_44072 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44057) : done.call(null, inst_44057));
var inst_44073 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44071,inst_44072);
var ___$1 = (function (){var statearr_44153 = state_44100;
(statearr_44153[(4)] = cljs.core.rest((state_44100[(4)])));

return statearr_44153;
})();
var state_44100__$1 = state_44100;
var statearr_44154_46114 = state_44100__$1;
(statearr_44154_46114[(2)] = inst_44073);

(statearr_44154_46114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (5))){
var inst_44083 = (state_44100[(2)]);
var state_44100__$1 = (function (){var statearr_44156 = state_44100;
(statearr_44156[(13)] = inst_44083);

return statearr_44156;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44100__$1,(13),dchan);
} else {
if((state_val_44101 === (14))){
var inst_44088 = cljs.core.async.close_BANG_(out);
var state_44100__$1 = state_44100;
var statearr_44157_46115 = state_44100__$1;
(statearr_44157_46115[(2)] = inst_44088);

(statearr_44157_46115[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (16))){
var inst_44096 = (state_44100[(2)]);
var state_44100__$1 = state_44100;
var statearr_44158_46119 = state_44100__$1;
(statearr_44158_46119[(2)] = inst_44096);

(statearr_44158_46119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (10))){
var inst_44057 = (state_44100[(8)]);
var inst_44076 = (state_44100[(2)]);
var inst_44077 = (inst_44057 + (1));
var inst_44057__$1 = inst_44077;
var state_44100__$1 = (function (){var statearr_44159 = state_44100;
(statearr_44159[(8)] = inst_44057__$1);

(statearr_44159[(14)] = inst_44076);

return statearr_44159;
})();
var statearr_44160_46120 = state_44100__$1;
(statearr_44160_46120[(2)] = null);

(statearr_44160_46120[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (8))){
var inst_44081 = (state_44100[(2)]);
var state_44100__$1 = state_44100;
var statearr_44168_46124 = state_44100__$1;
(statearr_44168_46124[(2)] = inst_44081);

(statearr_44168_46124[(1)] = (5));


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
var statearr_44193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44193[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_44193[(1)] = (1));

return statearr_44193;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_44100){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_44100);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e44194){var ex__10333__auto__ = e44194;
var statearr_44195_46134 = state_44100;
(statearr_44195_46134[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_44100[(4)]))){
var statearr_44196_46135 = state_44100;
(statearr_44196_46135[(1)] = cljs.core.first((state_44100[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46136 = state_44100;
state_44100 = G__46136;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_44100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_44100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_44197 = f__10425__auto__();
(statearr_44197[(6)] = c__10424__auto___46062);

return statearr_44197;
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
var G__44205 = arguments.length;
switch (G__44205) {
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
var c__10424__auto___46144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_44246){
var state_val_44247 = (state_44246[(1)]);
if((state_val_44247 === (7))){
var inst_44220 = (state_44246[(7)]);
var inst_44221 = (state_44246[(8)]);
var inst_44220__$1 = (state_44246[(2)]);
var inst_44221__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44220__$1,(0),null);
var inst_44222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44220__$1,(1),null);
var inst_44223 = (inst_44221__$1 == null);
var state_44246__$1 = (function (){var statearr_44250 = state_44246;
(statearr_44250[(7)] = inst_44220__$1);

(statearr_44250[(8)] = inst_44221__$1);

(statearr_44250[(9)] = inst_44222);

return statearr_44250;
})();
if(cljs.core.truth_(inst_44223)){
var statearr_44253_46148 = state_44246__$1;
(statearr_44253_46148[(1)] = (8));

} else {
var statearr_44254_46149 = state_44246__$1;
(statearr_44254_46149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44247 === (1))){
var inst_44209 = cljs.core.vec(chs);
var inst_44210 = inst_44209;
var state_44246__$1 = (function (){var statearr_44256 = state_44246;
(statearr_44256[(10)] = inst_44210);

return statearr_44256;
})();
var statearr_44258_46150 = state_44246__$1;
(statearr_44258_46150[(2)] = null);

(statearr_44258_46150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44247 === (4))){
var inst_44210 = (state_44246[(10)]);
var state_44246__$1 = state_44246;
return cljs.core.async.ioc_alts_BANG_(state_44246__$1,(7),inst_44210);
} else {
if((state_val_44247 === (6))){
var inst_44241 = (state_44246[(2)]);
var state_44246__$1 = state_44246;
var statearr_44261_46152 = state_44246__$1;
(statearr_44261_46152[(2)] = inst_44241);

(statearr_44261_46152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44247 === (3))){
var inst_44243 = (state_44246[(2)]);
var state_44246__$1 = state_44246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44246__$1,inst_44243);
} else {
if((state_val_44247 === (2))){
var inst_44210 = (state_44246[(10)]);
var inst_44213 = cljs.core.count(inst_44210);
var inst_44214 = (inst_44213 > (0));
var state_44246__$1 = state_44246;
if(cljs.core.truth_(inst_44214)){
var statearr_44268_46154 = state_44246__$1;
(statearr_44268_46154[(1)] = (4));

} else {
var statearr_44269_46155 = state_44246__$1;
(statearr_44269_46155[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44247 === (11))){
var inst_44210 = (state_44246[(10)]);
var inst_44234 = (state_44246[(2)]);
var tmp44264 = inst_44210;
var inst_44210__$1 = tmp44264;
var state_44246__$1 = (function (){var statearr_44271 = state_44246;
(statearr_44271[(10)] = inst_44210__$1);

(statearr_44271[(11)] = inst_44234);

return statearr_44271;
})();
var statearr_44272_46156 = state_44246__$1;
(statearr_44272_46156[(2)] = null);

(statearr_44272_46156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44247 === (9))){
var inst_44221 = (state_44246[(8)]);
var state_44246__$1 = state_44246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44246__$1,(11),out,inst_44221);
} else {
if((state_val_44247 === (5))){
var inst_44239 = cljs.core.async.close_BANG_(out);
var state_44246__$1 = state_44246;
var statearr_44278_46160 = state_44246__$1;
(statearr_44278_46160[(2)] = inst_44239);

(statearr_44278_46160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44247 === (10))){
var inst_44237 = (state_44246[(2)]);
var state_44246__$1 = state_44246;
var statearr_44282_46161 = state_44246__$1;
(statearr_44282_46161[(2)] = inst_44237);

(statearr_44282_46161[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44247 === (8))){
var inst_44220 = (state_44246[(7)]);
var inst_44210 = (state_44246[(10)]);
var inst_44221 = (state_44246[(8)]);
var inst_44222 = (state_44246[(9)]);
var inst_44229 = (function (){var cs = inst_44210;
var vec__44216 = inst_44220;
var v = inst_44221;
var c = inst_44222;
return (function (p1__44200_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44200_SHARP_);
});
})();
var inst_44230 = cljs.core.filterv(inst_44229,inst_44210);
var inst_44210__$1 = inst_44230;
var state_44246__$1 = (function (){var statearr_44285 = state_44246;
(statearr_44285[(10)] = inst_44210__$1);

return statearr_44285;
})();
var statearr_44286_46172 = state_44246__$1;
(statearr_44286_46172[(2)] = null);

(statearr_44286_46172[(1)] = (2));


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
var statearr_44288 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44288[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_44288[(1)] = (1));

return statearr_44288;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_44246){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_44246);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e44291){var ex__10333__auto__ = e44291;
var statearr_44293_46178 = state_44246;
(statearr_44293_46178[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_44246[(4)]))){
var statearr_44295_46179 = state_44246;
(statearr_44295_46179[(1)] = cljs.core.first((state_44246[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46184 = state_44246;
state_44246 = G__46184;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_44246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_44246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_44297 = f__10425__auto__();
(statearr_44297[(6)] = c__10424__auto___46144);

return statearr_44297;
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
var G__44300 = arguments.length;
switch (G__44300) {
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
var c__10424__auto___46188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_44333){
var state_val_44334 = (state_44333[(1)]);
if((state_val_44334 === (7))){
var inst_44311 = (state_44333[(7)]);
var inst_44311__$1 = (state_44333[(2)]);
var inst_44314 = (inst_44311__$1 == null);
var inst_44315 = cljs.core.not(inst_44314);
var state_44333__$1 = (function (){var statearr_44343 = state_44333;
(statearr_44343[(7)] = inst_44311__$1);

return statearr_44343;
})();
if(inst_44315){
var statearr_44345_46189 = state_44333__$1;
(statearr_44345_46189[(1)] = (8));

} else {
var statearr_44348_46190 = state_44333__$1;
(statearr_44348_46190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44334 === (1))){
var inst_44306 = (0);
var state_44333__$1 = (function (){var statearr_44354 = state_44333;
(statearr_44354[(8)] = inst_44306);

return statearr_44354;
})();
var statearr_44355_46191 = state_44333__$1;
(statearr_44355_46191[(2)] = null);

(statearr_44355_46191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44334 === (4))){
var state_44333__$1 = state_44333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44333__$1,(7),ch);
} else {
if((state_val_44334 === (6))){
var inst_44327 = (state_44333[(2)]);
var state_44333__$1 = state_44333;
var statearr_44362_46192 = state_44333__$1;
(statearr_44362_46192[(2)] = inst_44327);

(statearr_44362_46192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44334 === (3))){
var inst_44329 = (state_44333[(2)]);
var inst_44330 = cljs.core.async.close_BANG_(out);
var state_44333__$1 = (function (){var statearr_44365 = state_44333;
(statearr_44365[(9)] = inst_44329);

return statearr_44365;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44333__$1,inst_44330);
} else {
if((state_val_44334 === (2))){
var inst_44306 = (state_44333[(8)]);
var inst_44308 = (inst_44306 < n);
var state_44333__$1 = state_44333;
if(cljs.core.truth_(inst_44308)){
var statearr_44370_46195 = state_44333__$1;
(statearr_44370_46195[(1)] = (4));

} else {
var statearr_44375_46199 = state_44333__$1;
(statearr_44375_46199[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44334 === (11))){
var inst_44306 = (state_44333[(8)]);
var inst_44318 = (state_44333[(2)]);
var inst_44320 = (inst_44306 + (1));
var inst_44306__$1 = inst_44320;
var state_44333__$1 = (function (){var statearr_44379 = state_44333;
(statearr_44379[(10)] = inst_44318);

(statearr_44379[(8)] = inst_44306__$1);

return statearr_44379;
})();
var statearr_44381_46200 = state_44333__$1;
(statearr_44381_46200[(2)] = null);

(statearr_44381_46200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44334 === (9))){
var state_44333__$1 = state_44333;
var statearr_44382_46202 = state_44333__$1;
(statearr_44382_46202[(2)] = null);

(statearr_44382_46202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44334 === (5))){
var state_44333__$1 = state_44333;
var statearr_44387_46205 = state_44333__$1;
(statearr_44387_46205[(2)] = null);

(statearr_44387_46205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44334 === (10))){
var inst_44324 = (state_44333[(2)]);
var state_44333__$1 = state_44333;
var statearr_44391_46208 = state_44333__$1;
(statearr_44391_46208[(2)] = inst_44324);

(statearr_44391_46208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44334 === (8))){
var inst_44311 = (state_44333[(7)]);
var state_44333__$1 = state_44333;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44333__$1,(11),out,inst_44311);
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
var statearr_44397 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44397[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_44397[(1)] = (1));

return statearr_44397;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_44333){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_44333);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e44401){var ex__10333__auto__ = e44401;
var statearr_44404_46210 = state_44333;
(statearr_44404_46210[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_44333[(4)]))){
var statearr_44406_46211 = state_44333;
(statearr_44406_46211[(1)] = cljs.core.first((state_44333[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46212 = state_44333;
state_44333 = G__46212;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_44333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_44333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_44407 = f__10425__auto__();
(statearr_44407[(6)] = c__10424__auto___46188);

return statearr_44407;
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
cljs.core.async.t_cljs$core$async44435 = (function (f,ch,meta44424,_,fn1,meta44436){
this.f = f;
this.ch = ch;
this.meta44424 = meta44424;
this._ = _;
this.fn1 = fn1;
this.meta44436 = meta44436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44437,meta44436__$1){
var self__ = this;
var _44437__$1 = this;
return (new cljs.core.async.t_cljs$core$async44435(self__.f,self__.ch,self__.meta44424,self__._,self__.fn1,meta44436__$1));
}));

(cljs.core.async.t_cljs$core$async44435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44437){
var self__ = this;
var _44437__$1 = this;
return self__.meta44436;
}));

(cljs.core.async.t_cljs$core$async44435.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async44435.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__44415_SHARP_){
var G__44444 = (((p1__44415_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__44415_SHARP_) : self__.f.call(null, p1__44415_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__44444) : f1.call(null, G__44444));
});
}));

(cljs.core.async.t_cljs$core$async44435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44424","meta44424",-1068611837,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44423","cljs.core.async/t_cljs$core$async44423",-290791075,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44436","meta44436",2046398976,null)], null);
}));

(cljs.core.async.t_cljs$core$async44435.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44435");

(cljs.core.async.t_cljs$core$async44435.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async44435");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44435.
 */
cljs.core.async.__GT_t_cljs$core$async44435 = (function cljs$core$async$__GT_t_cljs$core$async44435(f,ch,meta44424,_,fn1,meta44436){
return (new cljs.core.async.t_cljs$core$async44435(f,ch,meta44424,_,fn1,meta44436));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44423 = (function (f,ch,meta44424){
this.f = f;
this.ch = ch;
this.meta44424 = meta44424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44425,meta44424__$1){
var self__ = this;
var _44425__$1 = this;
return (new cljs.core.async.t_cljs$core$async44423(self__.f,self__.ch,meta44424__$1));
}));

(cljs.core.async.t_cljs$core$async44423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44425){
var self__ = this;
var _44425__$1 = this;
return self__.meta44424;
}));

(cljs.core.async.t_cljs$core$async44423.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44423.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44423.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44423.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44423.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async44435(self__.f,self__.ch,self__.meta44424,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__44460 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__44460) : self__.f.call(null, G__44460));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async44423.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44423.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async44423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44424","meta44424",-1068611837,null)], null);
}));

(cljs.core.async.t_cljs$core$async44423.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44423");

(cljs.core.async.t_cljs$core$async44423.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async44423");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44423.
 */
cljs.core.async.__GT_t_cljs$core$async44423 = (function cljs$core$async$__GT_t_cljs$core$async44423(f,ch,meta44424){
return (new cljs.core.async.t_cljs$core$async44423(f,ch,meta44424));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async44423(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44483 = (function (f,ch,meta44484){
this.f = f;
this.ch = ch;
this.meta44484 = meta44484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44485,meta44484__$1){
var self__ = this;
var _44485__$1 = this;
return (new cljs.core.async.t_cljs$core$async44483(self__.f,self__.ch,meta44484__$1));
}));

(cljs.core.async.t_cljs$core$async44483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44485){
var self__ = this;
var _44485__$1 = this;
return self__.meta44484;
}));

(cljs.core.async.t_cljs$core$async44483.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44483.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44483.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44483.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44483.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44483.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async44483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44484","meta44484",111132171,null)], null);
}));

(cljs.core.async.t_cljs$core$async44483.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44483");

(cljs.core.async.t_cljs$core$async44483.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async44483");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44483.
 */
cljs.core.async.__GT_t_cljs$core$async44483 = (function cljs$core$async$__GT_t_cljs$core$async44483(f,ch,meta44484){
return (new cljs.core.async.t_cljs$core$async44483(f,ch,meta44484));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async44483(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44513 = (function (p,ch,meta44514){
this.p = p;
this.ch = ch;
this.meta44514 = meta44514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44515,meta44514__$1){
var self__ = this;
var _44515__$1 = this;
return (new cljs.core.async.t_cljs$core$async44513(self__.p,self__.ch,meta44514__$1));
}));

(cljs.core.async.t_cljs$core$async44513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44515){
var self__ = this;
var _44515__$1 = this;
return self__.meta44514;
}));

(cljs.core.async.t_cljs$core$async44513.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44513.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44513.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44513.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44513.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44513.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44513.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async44513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44514","meta44514",-112563847,null)], null);
}));

(cljs.core.async.t_cljs$core$async44513.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44513");

(cljs.core.async.t_cljs$core$async44513.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async44513");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44513.
 */
cljs.core.async.__GT_t_cljs$core$async44513 = (function cljs$core$async$__GT_t_cljs$core$async44513(p,ch,meta44514){
return (new cljs.core.async.t_cljs$core$async44513(p,ch,meta44514));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async44513(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44548 = arguments.length;
switch (G__44548) {
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
var c__10424__auto___46221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_44578){
var state_val_44579 = (state_44578[(1)]);
if((state_val_44579 === (7))){
var inst_44574 = (state_44578[(2)]);
var state_44578__$1 = state_44578;
var statearr_44586_46225 = state_44578__$1;
(statearr_44586_46225[(2)] = inst_44574);

(statearr_44586_46225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44579 === (1))){
var state_44578__$1 = state_44578;
var statearr_44587_46226 = state_44578__$1;
(statearr_44587_46226[(2)] = null);

(statearr_44587_46226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44579 === (4))){
var inst_44560 = (state_44578[(7)]);
var inst_44560__$1 = (state_44578[(2)]);
var inst_44561 = (inst_44560__$1 == null);
var state_44578__$1 = (function (){var statearr_44589 = state_44578;
(statearr_44589[(7)] = inst_44560__$1);

return statearr_44589;
})();
if(cljs.core.truth_(inst_44561)){
var statearr_44591_46232 = state_44578__$1;
(statearr_44591_46232[(1)] = (5));

} else {
var statearr_44592_46233 = state_44578__$1;
(statearr_44592_46233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44579 === (6))){
var inst_44560 = (state_44578[(7)]);
var inst_44565 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44560) : p.call(null, inst_44560));
var state_44578__$1 = state_44578;
if(cljs.core.truth_(inst_44565)){
var statearr_44593_46234 = state_44578__$1;
(statearr_44593_46234[(1)] = (8));

} else {
var statearr_44594_46235 = state_44578__$1;
(statearr_44594_46235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44579 === (3))){
var inst_44576 = (state_44578[(2)]);
var state_44578__$1 = state_44578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44578__$1,inst_44576);
} else {
if((state_val_44579 === (2))){
var state_44578__$1 = state_44578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44578__$1,(4),ch);
} else {
if((state_val_44579 === (11))){
var inst_44568 = (state_44578[(2)]);
var state_44578__$1 = state_44578;
var statearr_44602_46237 = state_44578__$1;
(statearr_44602_46237[(2)] = inst_44568);

(statearr_44602_46237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44579 === (9))){
var state_44578__$1 = state_44578;
var statearr_44612_46238 = state_44578__$1;
(statearr_44612_46238[(2)] = null);

(statearr_44612_46238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44579 === (5))){
var inst_44563 = cljs.core.async.close_BANG_(out);
var state_44578__$1 = state_44578;
var statearr_44619_46240 = state_44578__$1;
(statearr_44619_46240[(2)] = inst_44563);

(statearr_44619_46240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44579 === (10))){
var inst_44571 = (state_44578[(2)]);
var state_44578__$1 = (function (){var statearr_44623 = state_44578;
(statearr_44623[(8)] = inst_44571);

return statearr_44623;
})();
var statearr_44628_46241 = state_44578__$1;
(statearr_44628_46241[(2)] = null);

(statearr_44628_46241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44579 === (8))){
var inst_44560 = (state_44578[(7)]);
var state_44578__$1 = state_44578;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44578__$1,(11),out,inst_44560);
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
var statearr_44639 = [null,null,null,null,null,null,null,null,null];
(statearr_44639[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_44639[(1)] = (1));

return statearr_44639;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_44578){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_44578);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e44648){var ex__10333__auto__ = e44648;
var statearr_44649_46245 = state_44578;
(statearr_44649_46245[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_44578[(4)]))){
var statearr_44650_46246 = state_44578;
(statearr_44650_46246[(1)] = cljs.core.first((state_44578[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46247 = state_44578;
state_44578 = G__46247;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_44578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_44578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_44663 = f__10425__auto__();
(statearr_44663[(6)] = c__10424__auto___46221);

return statearr_44663;
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
var G__44677 = arguments.length;
switch (G__44677) {
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
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_44775){
var state_val_44776 = (state_44775[(1)]);
if((state_val_44776 === (7))){
var inst_44771 = (state_44775[(2)]);
var state_44775__$1 = state_44775;
var statearr_44783_46250 = state_44775__$1;
(statearr_44783_46250[(2)] = inst_44771);

(statearr_44783_46250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44776 === (20))){
var inst_44741 = (state_44775[(7)]);
var inst_44752 = (state_44775[(2)]);
var inst_44753 = cljs.core.next(inst_44741);
var inst_44725 = inst_44753;
var inst_44726 = null;
var inst_44727 = (0);
var inst_44728 = (0);
var state_44775__$1 = (function (){var statearr_44784 = state_44775;
(statearr_44784[(8)] = inst_44728);

(statearr_44784[(9)] = inst_44752);

(statearr_44784[(10)] = inst_44727);

(statearr_44784[(11)] = inst_44726);

(statearr_44784[(12)] = inst_44725);

return statearr_44784;
})();
var statearr_44785_46251 = state_44775__$1;
(statearr_44785_46251[(2)] = null);

(statearr_44785_46251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44776 === (1))){
var state_44775__$1 = state_44775;
var statearr_44786_46252 = state_44775__$1;
(statearr_44786_46252[(2)] = null);

(statearr_44786_46252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44776 === (4))){
var inst_44712 = (state_44775[(13)]);
var inst_44712__$1 = (state_44775[(2)]);
var inst_44713 = (inst_44712__$1 == null);
var state_44775__$1 = (function (){var statearr_44787 = state_44775;
(statearr_44787[(13)] = inst_44712__$1);

return statearr_44787;
})();
if(cljs.core.truth_(inst_44713)){
var statearr_44788_46253 = state_44775__$1;
(statearr_44788_46253[(1)] = (5));

} else {
var statearr_44789_46254 = state_44775__$1;
(statearr_44789_46254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44776 === (15))){
var state_44775__$1 = state_44775;
var statearr_44793_46255 = state_44775__$1;
(statearr_44793_46255[(2)] = null);

(statearr_44793_46255[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44776 === (21))){
var state_44775__$1 = state_44775;
var statearr_44794_46256 = state_44775__$1;
(statearr_44794_46256[(2)] = null);

(statearr_44794_46256[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44776 === (13))){
var inst_44728 = (state_44775[(8)]);
var inst_44727 = (state_44775[(10)]);
var inst_44726 = (state_44775[(11)]);
var inst_44725 = (state_44775[(12)]);
var inst_44737 = (state_44775[(2)]);
var inst_44738 = (inst_44728 + (1));
var tmp44790 = inst_44727;
var tmp44791 = inst_44726;
var tmp44792 = inst_44725;
var inst_44725__$1 = tmp44792;
var inst_44726__$1 = tmp44791;
var inst_44727__$1 = tmp44790;
var inst_44728__$1 = inst_44738;
var state_44775__$1 = (function (){var statearr_44798 = state_44775;
(statearr_44798[(8)] = inst_44728__$1);

(statearr_44798[(14)] = inst_44737);

(statearr_44798[(10)] = inst_44727__$1);

(statearr_44798[(11)] = inst_44726__$1);

(statearr_44798[(12)] = inst_44725__$1);

return statearr_44798;
})();
var statearr_44802_46259 = state_44775__$1;
(statearr_44802_46259[(2)] = null);

(statearr_44802_46259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44776 === (22))){
var state_44775__$1 = state_44775;
var statearr_44803_46260 = state_44775__$1;
(statearr_44803_46260[(2)] = null);

(statearr_44803_46260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44776 === (6))){
var inst_44712 = (state_44775[(13)]);
var inst_44723 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44712) : f.call(null, inst_44712));
var inst_44724 = cljs.core.seq(inst_44723);
var inst_44725 = inst_44724;
var inst_44726 = null;
var inst_44727 = (0);
var inst_44728 = (0);
var state_44775__$1 = (function (){var statearr_44804 = state_44775;
(statearr_44804[(8)] = inst_44728);

(statearr_44804[(10)] = inst_44727);

(statearr_44804[(11)] = inst_44726);

(statearr_44804[(12)] = inst_44725);

return statearr_44804;
})();
var statearr_44805_46264 = state_44775__$1;
(statearr_44805_46264[(2)] = null);

(statearr_44805_46264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44776 === (17))){
var inst_44741 = (state_44775[(7)]);
var inst_44745 = cljs.core.chunk_first(inst_44741);
var inst_44746 = cljs.core.chunk_rest(inst_44741);
var inst_44747 = cljs.core.count(inst_44745);
var inst_44725 = inst_44746;
var inst_44726 = inst_44745;
var inst_44727 = inst_44747;
var inst_44728 = (0);
var state_44775__$1 = (function (){var statearr_44806 = state_44775;
(statearr_44806[(8)] = inst_44728);

(statearr_44806[(10)] = inst_44727);

(statearr_44806[(11)] = inst_44726);

(statearr_44806[(12)] = inst_44725);

return statearr_44806;
})();
var statearr_44807_46265 = state_44775__$1;
(statearr_44807_46265[(2)] = null);

(statearr_44807_46265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44776 === (3))){
var inst_44773 = (state_44775[(2)]);
var state_44775__$1 = state_44775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44775__$1,inst_44773);
} else {
if((state_val_44776 === (12))){
var inst_44761 = (state_44775[(2)]);
var state_44775__$1 = state_44775;
var statearr_44812_46266 = state_44775__$1;
(statearr_44812_46266[(2)] = inst_44761);

(statearr_44812_46266[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44776 === (2))){
var state_44775__$1 = state_44775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44775__$1,(4),in$);
} else {
if((state_val_44776 === (23))){
var inst_44769 = (state_44775[(2)]);
var state_44775__$1 = state_44775;
var statearr_44816_46267 = state_44775__$1;
(statearr_44816_46267[(2)] = inst_44769);

(statearr_44816_46267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44776 === (19))){
var inst_44756 = (state_44775[(2)]);
var state_44775__$1 = state_44775;
var statearr_44817_46268 = state_44775__$1;
(statearr_44817_46268[(2)] = inst_44756);

(statearr_44817_46268[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44776 === (11))){
var inst_44741 = (state_44775[(7)]);
var inst_44725 = (state_44775[(12)]);
var inst_44741__$1 = cljs.core.seq(inst_44725);
var state_44775__$1 = (function (){var statearr_44818 = state_44775;
(statearr_44818[(7)] = inst_44741__$1);

return statearr_44818;
})();
if(inst_44741__$1){
var statearr_44819_46271 = state_44775__$1;
(statearr_44819_46271[(1)] = (14));

} else {
var statearr_44820_46272 = state_44775__$1;
(statearr_44820_46272[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44776 === (9))){
var inst_44763 = (state_44775[(2)]);
var inst_44764 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44775__$1 = (function (){var statearr_44822 = state_44775;
(statearr_44822[(15)] = inst_44763);

return statearr_44822;
})();
if(cljs.core.truth_(inst_44764)){
var statearr_44826_46275 = state_44775__$1;
(statearr_44826_46275[(1)] = (21));

} else {
var statearr_44827_46277 = state_44775__$1;
(statearr_44827_46277[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44776 === (5))){
var inst_44717 = cljs.core.async.close_BANG_(out);
var state_44775__$1 = state_44775;
var statearr_44828_46278 = state_44775__$1;
(statearr_44828_46278[(2)] = inst_44717);

(statearr_44828_46278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44776 === (14))){
var inst_44741 = (state_44775[(7)]);
var inst_44743 = cljs.core.chunked_seq_QMARK_(inst_44741);
var state_44775__$1 = state_44775;
if(inst_44743){
var statearr_44829_46279 = state_44775__$1;
(statearr_44829_46279[(1)] = (17));

} else {
var statearr_44830_46280 = state_44775__$1;
(statearr_44830_46280[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44776 === (16))){
var inst_44759 = (state_44775[(2)]);
var state_44775__$1 = state_44775;
var statearr_44831_46281 = state_44775__$1;
(statearr_44831_46281[(2)] = inst_44759);

(statearr_44831_46281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44776 === (10))){
var inst_44728 = (state_44775[(8)]);
var inst_44726 = (state_44775[(11)]);
var inst_44735 = cljs.core._nth(inst_44726,inst_44728);
var state_44775__$1 = state_44775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44775__$1,(13),out,inst_44735);
} else {
if((state_val_44776 === (18))){
var inst_44741 = (state_44775[(7)]);
var inst_44750 = cljs.core.first(inst_44741);
var state_44775__$1 = state_44775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44775__$1,(20),out,inst_44750);
} else {
if((state_val_44776 === (8))){
var inst_44728 = (state_44775[(8)]);
var inst_44727 = (state_44775[(10)]);
var inst_44732 = (inst_44728 < inst_44727);
var inst_44733 = inst_44732;
var state_44775__$1 = state_44775;
if(cljs.core.truth_(inst_44733)){
var statearr_44834_46282 = state_44775__$1;
(statearr_44834_46282[(1)] = (10));

} else {
var statearr_44836_46283 = state_44775__$1;
(statearr_44836_46283[(1)] = (11));

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
var statearr_44839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44839[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__);

(statearr_44839[(1)] = (1));

return statearr_44839;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____1 = (function (state_44775){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_44775);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e44840){var ex__10333__auto__ = e44840;
var statearr_44841_46288 = state_44775;
(statearr_44841_46288[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_44775[(4)]))){
var statearr_44843_46290 = state_44775;
(statearr_44843_46290[(1)] = cljs.core.first((state_44775[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46297 = state_44775;
state_44775 = G__46297;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__ = function(state_44775){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____1.call(this,state_44775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_44846 = f__10425__auto__();
(statearr_44846[(6)] = c__10424__auto__);

return statearr_44846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));

return c__10424__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44854 = arguments.length;
switch (G__44854) {
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
var G__44865 = arguments.length;
switch (G__44865) {
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
var G__44890 = arguments.length;
switch (G__44890) {
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
var c__10424__auto___46310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_44920){
var state_val_44921 = (state_44920[(1)]);
if((state_val_44921 === (7))){
var inst_44915 = (state_44920[(2)]);
var state_44920__$1 = state_44920;
var statearr_44934_46311 = state_44920__$1;
(statearr_44934_46311[(2)] = inst_44915);

(statearr_44934_46311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (1))){
var inst_44896 = null;
var state_44920__$1 = (function (){var statearr_44938 = state_44920;
(statearr_44938[(7)] = inst_44896);

return statearr_44938;
})();
var statearr_44939_46313 = state_44920__$1;
(statearr_44939_46313[(2)] = null);

(statearr_44939_46313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (4))){
var inst_44899 = (state_44920[(8)]);
var inst_44899__$1 = (state_44920[(2)]);
var inst_44900 = (inst_44899__$1 == null);
var inst_44901 = cljs.core.not(inst_44900);
var state_44920__$1 = (function (){var statearr_44940 = state_44920;
(statearr_44940[(8)] = inst_44899__$1);

return statearr_44940;
})();
if(inst_44901){
var statearr_44942_46316 = state_44920__$1;
(statearr_44942_46316[(1)] = (5));

} else {
var statearr_44948_46317 = state_44920__$1;
(statearr_44948_46317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (6))){
var state_44920__$1 = state_44920;
var statearr_44953_46318 = state_44920__$1;
(statearr_44953_46318[(2)] = null);

(statearr_44953_46318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (3))){
var inst_44917 = (state_44920[(2)]);
var inst_44918 = cljs.core.async.close_BANG_(out);
var state_44920__$1 = (function (){var statearr_44958 = state_44920;
(statearr_44958[(9)] = inst_44917);

return statearr_44958;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44920__$1,inst_44918);
} else {
if((state_val_44921 === (2))){
var state_44920__$1 = state_44920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44920__$1,(4),ch);
} else {
if((state_val_44921 === (11))){
var inst_44899 = (state_44920[(8)]);
var inst_44909 = (state_44920[(2)]);
var inst_44896 = inst_44899;
var state_44920__$1 = (function (){var statearr_44959 = state_44920;
(statearr_44959[(7)] = inst_44896);

(statearr_44959[(10)] = inst_44909);

return statearr_44959;
})();
var statearr_44960_46319 = state_44920__$1;
(statearr_44960_46319[(2)] = null);

(statearr_44960_46319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (9))){
var inst_44899 = (state_44920[(8)]);
var state_44920__$1 = state_44920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44920__$1,(11),out,inst_44899);
} else {
if((state_val_44921 === (5))){
var inst_44899 = (state_44920[(8)]);
var inst_44896 = (state_44920[(7)]);
var inst_44903 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44899,inst_44896);
var state_44920__$1 = state_44920;
if(inst_44903){
var statearr_44964_46322 = state_44920__$1;
(statearr_44964_46322[(1)] = (8));

} else {
var statearr_44965_46326 = state_44920__$1;
(statearr_44965_46326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (10))){
var inst_44912 = (state_44920[(2)]);
var state_44920__$1 = state_44920;
var statearr_44966_46328 = state_44920__$1;
(statearr_44966_46328[(2)] = inst_44912);

(statearr_44966_46328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (8))){
var inst_44896 = (state_44920[(7)]);
var tmp44963 = inst_44896;
var inst_44896__$1 = tmp44963;
var state_44920__$1 = (function (){var statearr_44967 = state_44920;
(statearr_44967[(7)] = inst_44896__$1);

return statearr_44967;
})();
var statearr_44968_46330 = state_44920__$1;
(statearr_44968_46330[(2)] = null);

(statearr_44968_46330[(1)] = (2));


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
var statearr_44973 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44973[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_44973[(1)] = (1));

return statearr_44973;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_44920){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_44920);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e44980){var ex__10333__auto__ = e44980;
var statearr_44983_46333 = state_44920;
(statearr_44983_46333[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_44920[(4)]))){
var statearr_44985_46334 = state_44920;
(statearr_44985_46334[(1)] = cljs.core.first((state_44920[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46335 = state_44920;
state_44920 = G__46335;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_44920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_44920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_44991 = f__10425__auto__();
(statearr_44991[(6)] = c__10424__auto___46310);

return statearr_44991;
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
var G__45001 = arguments.length;
switch (G__45001) {
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
var c__10424__auto___46341 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_45043){
var state_val_45044 = (state_45043[(1)]);
if((state_val_45044 === (7))){
var inst_45039 = (state_45043[(2)]);
var state_45043__$1 = state_45043;
var statearr_45050_46342 = state_45043__$1;
(statearr_45050_46342[(2)] = inst_45039);

(statearr_45050_46342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45044 === (1))){
var inst_45003 = (new Array(n));
var inst_45004 = inst_45003;
var inst_45005 = (0);
var state_45043__$1 = (function (){var statearr_45058 = state_45043;
(statearr_45058[(7)] = inst_45005);

(statearr_45058[(8)] = inst_45004);

return statearr_45058;
})();
var statearr_45059_46343 = state_45043__$1;
(statearr_45059_46343[(2)] = null);

(statearr_45059_46343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45044 === (4))){
var inst_45008 = (state_45043[(9)]);
var inst_45008__$1 = (state_45043[(2)]);
var inst_45010 = (inst_45008__$1 == null);
var inst_45011 = cljs.core.not(inst_45010);
var state_45043__$1 = (function (){var statearr_45061 = state_45043;
(statearr_45061[(9)] = inst_45008__$1);

return statearr_45061;
})();
if(inst_45011){
var statearr_45062_46345 = state_45043__$1;
(statearr_45062_46345[(1)] = (5));

} else {
var statearr_45063_46347 = state_45043__$1;
(statearr_45063_46347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45044 === (15))){
var inst_45033 = (state_45043[(2)]);
var state_45043__$1 = state_45043;
var statearr_45066_46349 = state_45043__$1;
(statearr_45066_46349[(2)] = inst_45033);

(statearr_45066_46349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45044 === (13))){
var state_45043__$1 = state_45043;
var statearr_45067_46350 = state_45043__$1;
(statearr_45067_46350[(2)] = null);

(statearr_45067_46350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45044 === (6))){
var inst_45005 = (state_45043[(7)]);
var inst_45029 = (inst_45005 > (0));
var state_45043__$1 = state_45043;
if(cljs.core.truth_(inst_45029)){
var statearr_45070_46351 = state_45043__$1;
(statearr_45070_46351[(1)] = (12));

} else {
var statearr_45071_46352 = state_45043__$1;
(statearr_45071_46352[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45044 === (3))){
var inst_45041 = (state_45043[(2)]);
var state_45043__$1 = state_45043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45043__$1,inst_45041);
} else {
if((state_val_45044 === (12))){
var inst_45004 = (state_45043[(8)]);
var inst_45031 = cljs.core.vec(inst_45004);
var state_45043__$1 = state_45043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45043__$1,(15),out,inst_45031);
} else {
if((state_val_45044 === (2))){
var state_45043__$1 = state_45043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45043__$1,(4),ch);
} else {
if((state_val_45044 === (11))){
var inst_45022 = (state_45043[(2)]);
var inst_45023 = (new Array(n));
var inst_45004 = inst_45023;
var inst_45005 = (0);
var state_45043__$1 = (function (){var statearr_45076 = state_45043;
(statearr_45076[(7)] = inst_45005);

(statearr_45076[(8)] = inst_45004);

(statearr_45076[(10)] = inst_45022);

return statearr_45076;
})();
var statearr_45078_46354 = state_45043__$1;
(statearr_45078_46354[(2)] = null);

(statearr_45078_46354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45044 === (9))){
var inst_45004 = (state_45043[(8)]);
var inst_45020 = cljs.core.vec(inst_45004);
var state_45043__$1 = state_45043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45043__$1,(11),out,inst_45020);
} else {
if((state_val_45044 === (5))){
var inst_45005 = (state_45043[(7)]);
var inst_45004 = (state_45043[(8)]);
var inst_45008 = (state_45043[(9)]);
var inst_45015 = (state_45043[(11)]);
var inst_45014 = (inst_45004[inst_45005] = inst_45008);
var inst_45015__$1 = (inst_45005 + (1));
var inst_45016 = (inst_45015__$1 < n);
var state_45043__$1 = (function (){var statearr_45081 = state_45043;
(statearr_45081[(11)] = inst_45015__$1);

(statearr_45081[(12)] = inst_45014);

return statearr_45081;
})();
if(cljs.core.truth_(inst_45016)){
var statearr_45084_46355 = state_45043__$1;
(statearr_45084_46355[(1)] = (8));

} else {
var statearr_45086_46357 = state_45043__$1;
(statearr_45086_46357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45044 === (14))){
var inst_45036 = (state_45043[(2)]);
var inst_45037 = cljs.core.async.close_BANG_(out);
var state_45043__$1 = (function (){var statearr_45090 = state_45043;
(statearr_45090[(13)] = inst_45036);

return statearr_45090;
})();
var statearr_45092_46358 = state_45043__$1;
(statearr_45092_46358[(2)] = inst_45037);

(statearr_45092_46358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45044 === (10))){
var inst_45026 = (state_45043[(2)]);
var state_45043__$1 = state_45043;
var statearr_45093_46360 = state_45043__$1;
(statearr_45093_46360[(2)] = inst_45026);

(statearr_45093_46360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45044 === (8))){
var inst_45004 = (state_45043[(8)]);
var inst_45015 = (state_45043[(11)]);
var tmp45088 = inst_45004;
var inst_45004__$1 = tmp45088;
var inst_45005 = inst_45015;
var state_45043__$1 = (function (){var statearr_45094 = state_45043;
(statearr_45094[(7)] = inst_45005);

(statearr_45094[(8)] = inst_45004__$1);

return statearr_45094;
})();
var statearr_45095_46364 = state_45043__$1;
(statearr_45095_46364[(2)] = null);

(statearr_45095_46364[(1)] = (2));


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
var statearr_45098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45098[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_45098[(1)] = (1));

return statearr_45098;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_45043){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_45043);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e45100){var ex__10333__auto__ = e45100;
var statearr_45101_46370 = state_45043;
(statearr_45101_46370[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_45043[(4)]))){
var statearr_45102_46371 = state_45043;
(statearr_45102_46371[(1)] = cljs.core.first((state_45043[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46372 = state_45043;
state_45043 = G__46372;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_45043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_45043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_45114 = f__10425__auto__();
(statearr_45114[(6)] = c__10424__auto___46341);

return statearr_45114;
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
var G__45130 = arguments.length;
switch (G__45130) {
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
var c__10424__auto___46375 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_45183){
var state_val_45184 = (state_45183[(1)]);
if((state_val_45184 === (7))){
var inst_45178 = (state_45183[(2)]);
var state_45183__$1 = state_45183;
var statearr_45187_46376 = state_45183__$1;
(statearr_45187_46376[(2)] = inst_45178);

(statearr_45187_46376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45184 === (1))){
var inst_45137 = [];
var inst_45138 = inst_45137;
var inst_45139 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45183__$1 = (function (){var statearr_45188 = state_45183;
(statearr_45188[(7)] = inst_45139);

(statearr_45188[(8)] = inst_45138);

return statearr_45188;
})();
var statearr_45190_46379 = state_45183__$1;
(statearr_45190_46379[(2)] = null);

(statearr_45190_46379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45184 === (4))){
var inst_45143 = (state_45183[(9)]);
var inst_45143__$1 = (state_45183[(2)]);
var inst_45144 = (inst_45143__$1 == null);
var inst_45145 = cljs.core.not(inst_45144);
var state_45183__$1 = (function (){var statearr_45191 = state_45183;
(statearr_45191[(9)] = inst_45143__$1);

return statearr_45191;
})();
if(inst_45145){
var statearr_45192_46381 = state_45183__$1;
(statearr_45192_46381[(1)] = (5));

} else {
var statearr_45193_46382 = state_45183__$1;
(statearr_45193_46382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45184 === (15))){
var inst_45138 = (state_45183[(8)]);
var inst_45170 = cljs.core.vec(inst_45138);
var state_45183__$1 = state_45183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45183__$1,(18),out,inst_45170);
} else {
if((state_val_45184 === (13))){
var inst_45165 = (state_45183[(2)]);
var state_45183__$1 = state_45183;
var statearr_45196_46383 = state_45183__$1;
(statearr_45196_46383[(2)] = inst_45165);

(statearr_45196_46383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45184 === (6))){
var inst_45138 = (state_45183[(8)]);
var inst_45167 = inst_45138.length;
var inst_45168 = (inst_45167 > (0));
var state_45183__$1 = state_45183;
if(cljs.core.truth_(inst_45168)){
var statearr_45197_46384 = state_45183__$1;
(statearr_45197_46384[(1)] = (15));

} else {
var statearr_45198_46386 = state_45183__$1;
(statearr_45198_46386[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45184 === (17))){
var inst_45175 = (state_45183[(2)]);
var inst_45176 = cljs.core.async.close_BANG_(out);
var state_45183__$1 = (function (){var statearr_45199 = state_45183;
(statearr_45199[(10)] = inst_45175);

return statearr_45199;
})();
var statearr_45200_46387 = state_45183__$1;
(statearr_45200_46387[(2)] = inst_45176);

(statearr_45200_46387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45184 === (3))){
var inst_45180 = (state_45183[(2)]);
var state_45183__$1 = state_45183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45183__$1,inst_45180);
} else {
if((state_val_45184 === (12))){
var inst_45138 = (state_45183[(8)]);
var inst_45158 = cljs.core.vec(inst_45138);
var state_45183__$1 = state_45183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45183__$1,(14),out,inst_45158);
} else {
if((state_val_45184 === (2))){
var state_45183__$1 = state_45183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45183__$1,(4),ch);
} else {
if((state_val_45184 === (11))){
var inst_45138 = (state_45183[(8)]);
var inst_45143 = (state_45183[(9)]);
var inst_45147 = (state_45183[(11)]);
var inst_45155 = inst_45138.push(inst_45143);
var tmp45201 = inst_45138;
var inst_45138__$1 = tmp45201;
var inst_45139 = inst_45147;
var state_45183__$1 = (function (){var statearr_45204 = state_45183;
(statearr_45204[(7)] = inst_45139);

(statearr_45204[(8)] = inst_45138__$1);

(statearr_45204[(12)] = inst_45155);

return statearr_45204;
})();
var statearr_45205_46389 = state_45183__$1;
(statearr_45205_46389[(2)] = null);

(statearr_45205_46389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45184 === (9))){
var inst_45139 = (state_45183[(7)]);
var inst_45151 = cljs.core.keyword_identical_QMARK_(inst_45139,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_45183__$1 = state_45183;
var statearr_45206_46393 = state_45183__$1;
(statearr_45206_46393[(2)] = inst_45151);

(statearr_45206_46393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45184 === (5))){
var inst_45139 = (state_45183[(7)]);
var inst_45143 = (state_45183[(9)]);
var inst_45148 = (state_45183[(13)]);
var inst_45147 = (state_45183[(11)]);
var inst_45147__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45143) : f.call(null, inst_45143));
var inst_45148__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45147__$1,inst_45139);
var state_45183__$1 = (function (){var statearr_45211 = state_45183;
(statearr_45211[(13)] = inst_45148__$1);

(statearr_45211[(11)] = inst_45147__$1);

return statearr_45211;
})();
if(inst_45148__$1){
var statearr_45217_46395 = state_45183__$1;
(statearr_45217_46395[(1)] = (8));

} else {
var statearr_45219_46396 = state_45183__$1;
(statearr_45219_46396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45184 === (14))){
var inst_45143 = (state_45183[(9)]);
var inst_45147 = (state_45183[(11)]);
var inst_45160 = (state_45183[(2)]);
var inst_45161 = [];
var inst_45162 = inst_45161.push(inst_45143);
var inst_45138 = inst_45161;
var inst_45139 = inst_45147;
var state_45183__$1 = (function (){var statearr_45226 = state_45183;
(statearr_45226[(7)] = inst_45139);

(statearr_45226[(14)] = inst_45162);

(statearr_45226[(8)] = inst_45138);

(statearr_45226[(15)] = inst_45160);

return statearr_45226;
})();
var statearr_45227_46403 = state_45183__$1;
(statearr_45227_46403[(2)] = null);

(statearr_45227_46403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45184 === (16))){
var state_45183__$1 = state_45183;
var statearr_45230_46404 = state_45183__$1;
(statearr_45230_46404[(2)] = null);

(statearr_45230_46404[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45184 === (10))){
var inst_45153 = (state_45183[(2)]);
var state_45183__$1 = state_45183;
if(cljs.core.truth_(inst_45153)){
var statearr_45231_46405 = state_45183__$1;
(statearr_45231_46405[(1)] = (11));

} else {
var statearr_45232_46406 = state_45183__$1;
(statearr_45232_46406[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45184 === (18))){
var inst_45172 = (state_45183[(2)]);
var state_45183__$1 = state_45183;
var statearr_45233_46407 = state_45183__$1;
(statearr_45233_46407[(2)] = inst_45172);

(statearr_45233_46407[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45184 === (8))){
var inst_45148 = (state_45183[(13)]);
var state_45183__$1 = state_45183;
var statearr_45234_46409 = state_45183__$1;
(statearr_45234_46409[(2)] = inst_45148);

(statearr_45234_46409[(1)] = (10));


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
var statearr_45237 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45237[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_45237[(1)] = (1));

return statearr_45237;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_45183){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_45183);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e45238){var ex__10333__auto__ = e45238;
var statearr_45239_46412 = state_45183;
(statearr_45239_46412[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_45183[(4)]))){
var statearr_45240_46413 = state_45183;
(statearr_45240_46413[(1)] = cljs.core.first((state_45183[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46414 = state_45183;
state_45183 = G__46414;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_45183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_45183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_45241 = f__10425__auto__();
(statearr_45241[(6)] = c__10424__auto___46375);

return statearr_45241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
