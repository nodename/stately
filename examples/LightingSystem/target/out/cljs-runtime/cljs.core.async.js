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
cljs.core.async.t_cljs$core$async51885 = (function (f,blockable,meta51886){
this.f = f;
this.blockable = blockable;
this.meta51886 = meta51886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51887,meta51886__$1){
var self__ = this;
var _51887__$1 = this;
return (new cljs.core.async.t_cljs$core$async51885(self__.f,self__.blockable,meta51886__$1));
}));

(cljs.core.async.t_cljs$core$async51885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51887){
var self__ = this;
var _51887__$1 = this;
return self__.meta51886;
}));

(cljs.core.async.t_cljs$core$async51885.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51885.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51885.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async51885.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async51885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta51886","meta51886",-389157135,null)], null);
}));

(cljs.core.async.t_cljs$core$async51885.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51885");

(cljs.core.async.t_cljs$core$async51885.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async51885");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51885.
 */
cljs.core.async.__GT_t_cljs$core$async51885 = (function cljs$core$async$__GT_t_cljs$core$async51885(f,blockable,meta51886){
return (new cljs.core.async.t_cljs$core$async51885(f,blockable,meta51886));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__51882 = arguments.length;
switch (G__51882) {
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
return (new cljs.core.async.t_cljs$core$async51885(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__51908 = arguments.length;
switch (G__51908) {
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
var G__51920 = arguments.length;
switch (G__51920) {
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
var G__51932 = arguments.length;
switch (G__51932) {
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
var val_54873 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_54873) : fn1.call(null, val_54873));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_54873) : fn1.call(null, val_54873));
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
var G__51938 = arguments.length;
switch (G__51938) {
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
var n__5593__auto___54890 = n;
var x_54892 = (0);
while(true){
if((x_54892 < n__5593__auto___54890)){
(a[x_54892] = x_54892);

var G__54893 = (x_54892 + (1));
x_54892 = G__54893;
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
cljs.core.async.t_cljs$core$async51958 = (function (flag,meta51959){
this.flag = flag;
this.meta51959 = meta51959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51960,meta51959__$1){
var self__ = this;
var _51960__$1 = this;
return (new cljs.core.async.t_cljs$core$async51958(self__.flag,meta51959__$1));
}));

(cljs.core.async.t_cljs$core$async51958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51960){
var self__ = this;
var _51960__$1 = this;
return self__.meta51959;
}));

(cljs.core.async.t_cljs$core$async51958.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51958.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async51958.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51958.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async51958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta51959","meta51959",-14814988,null)], null);
}));

(cljs.core.async.t_cljs$core$async51958.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51958");

(cljs.core.async.t_cljs$core$async51958.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async51958");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51958.
 */
cljs.core.async.__GT_t_cljs$core$async51958 = (function cljs$core$async$__GT_t_cljs$core$async51958(flag,meta51959){
return (new cljs.core.async.t_cljs$core$async51958(flag,meta51959));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async51958(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51974 = (function (flag,cb,meta51975){
this.flag = flag;
this.cb = cb;
this.meta51975 = meta51975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51976,meta51975__$1){
var self__ = this;
var _51976__$1 = this;
return (new cljs.core.async.t_cljs$core$async51974(self__.flag,self__.cb,meta51975__$1));
}));

(cljs.core.async.t_cljs$core$async51974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51976){
var self__ = this;
var _51976__$1 = this;
return self__.meta51975;
}));

(cljs.core.async.t_cljs$core$async51974.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51974.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async51974.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51974.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async51974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta51975","meta51975",-1079301877,null)], null);
}));

(cljs.core.async.t_cljs$core$async51974.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51974");

(cljs.core.async.t_cljs$core$async51974.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async51974");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51974.
 */
cljs.core.async.__GT_t_cljs$core$async51974 = (function cljs$core$async$__GT_t_cljs$core$async51974(flag,cb,meta51975){
return (new cljs.core.async.t_cljs$core$async51974(flag,cb,meta51975));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async51974(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__51994_SHARP_){
var G__52001 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51994_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__52001) : fret.call(null, G__52001));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51995_SHARP_){
var G__52002 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51995_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__52002) : fret.call(null, G__52002));
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
var G__54912 = (i + (1));
i = G__54912;
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
var len__5726__auto___54914 = arguments.length;
var i__5727__auto___54915 = (0);
while(true){
if((i__5727__auto___54915 < len__5726__auto___54914)){
args__5732__auto__.push((arguments[i__5727__auto___54915]));

var G__54919 = (i__5727__auto___54915 + (1));
i__5727__auto___54915 = G__54919;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__52016){
var map__52018 = p__52016;
var map__52018__$1 = cljs.core.__destructure_map(map__52018);
var opts = map__52018__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq52013){
var G__52014 = cljs.core.first(seq52013);
var seq52013__$1 = cljs.core.next(seq52013);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52014,seq52013__$1);
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
var G__52030 = arguments.length;
switch (G__52030) {
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
var c__10424__auto___54921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_52061){
var state_val_52062 = (state_52061[(1)]);
if((state_val_52062 === (7))){
var inst_52057 = (state_52061[(2)]);
var state_52061__$1 = state_52061;
var statearr_52068_54926 = state_52061__$1;
(statearr_52068_54926[(2)] = inst_52057);

(statearr_52068_54926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52062 === (1))){
var state_52061__$1 = state_52061;
var statearr_52070_54927 = state_52061__$1;
(statearr_52070_54927[(2)] = null);

(statearr_52070_54927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52062 === (4))){
var inst_52040 = (state_52061[(7)]);
var inst_52040__$1 = (state_52061[(2)]);
var inst_52041 = (inst_52040__$1 == null);
var state_52061__$1 = (function (){var statearr_52073 = state_52061;
(statearr_52073[(7)] = inst_52040__$1);

return statearr_52073;
})();
if(cljs.core.truth_(inst_52041)){
var statearr_52074_54934 = state_52061__$1;
(statearr_52074_54934[(1)] = (5));

} else {
var statearr_52075_54935 = state_52061__$1;
(statearr_52075_54935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52062 === (13))){
var state_52061__$1 = state_52061;
var statearr_52076_54940 = state_52061__$1;
(statearr_52076_54940[(2)] = null);

(statearr_52076_54940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52062 === (6))){
var inst_52040 = (state_52061[(7)]);
var state_52061__$1 = state_52061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52061__$1,(11),to,inst_52040);
} else {
if((state_val_52062 === (3))){
var inst_52059 = (state_52061[(2)]);
var state_52061__$1 = state_52061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52061__$1,inst_52059);
} else {
if((state_val_52062 === (12))){
var state_52061__$1 = state_52061;
var statearr_52078_54941 = state_52061__$1;
(statearr_52078_54941[(2)] = null);

(statearr_52078_54941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52062 === (2))){
var state_52061__$1 = state_52061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52061__$1,(4),from);
} else {
if((state_val_52062 === (11))){
var inst_52050 = (state_52061[(2)]);
var state_52061__$1 = state_52061;
if(cljs.core.truth_(inst_52050)){
var statearr_52083_54942 = state_52061__$1;
(statearr_52083_54942[(1)] = (12));

} else {
var statearr_52084_54943 = state_52061__$1;
(statearr_52084_54943[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52062 === (9))){
var state_52061__$1 = state_52061;
var statearr_52085_54944 = state_52061__$1;
(statearr_52085_54944[(2)] = null);

(statearr_52085_54944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52062 === (5))){
var state_52061__$1 = state_52061;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52087_54945 = state_52061__$1;
(statearr_52087_54945[(1)] = (8));

} else {
var statearr_52090_54946 = state_52061__$1;
(statearr_52090_54946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52062 === (14))){
var inst_52055 = (state_52061[(2)]);
var state_52061__$1 = state_52061;
var statearr_52093_54947 = state_52061__$1;
(statearr_52093_54947[(2)] = inst_52055);

(statearr_52093_54947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52062 === (10))){
var inst_52047 = (state_52061[(2)]);
var state_52061__$1 = state_52061;
var statearr_52095_54949 = state_52061__$1;
(statearr_52095_54949[(2)] = inst_52047);

(statearr_52095_54949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52062 === (8))){
var inst_52044 = cljs.core.async.close_BANG_(to);
var state_52061__$1 = state_52061;
var statearr_52096_54950 = state_52061__$1;
(statearr_52096_54950[(2)] = inst_52044);

(statearr_52096_54950[(1)] = (10));


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
var statearr_52100 = [null,null,null,null,null,null,null,null];
(statearr_52100[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_52100[(1)] = (1));

return statearr_52100;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_52061){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_52061);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e52103){var ex__10333__auto__ = e52103;
var statearr_52104_54952 = state_52061;
(statearr_52104_54952[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_52061[(4)]))){
var statearr_52106_54954 = state_52061;
(statearr_52106_54954[(1)] = cljs.core.first((state_52061[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54956 = state_52061;
state_52061 = G__54956;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_52061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_52061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_52107 = f__10425__auto__();
(statearr_52107[(6)] = c__10424__auto___54921);

return statearr_52107;
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
var process__$1 = (function (p__52115){
var vec__52116 = p__52115;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52116,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52116,(1),null);
var job = vec__52116;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10424__auto___54959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_52124){
var state_val_52125 = (state_52124[(1)]);
if((state_val_52125 === (1))){
var state_52124__$1 = state_52124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52124__$1,(2),res,v);
} else {
if((state_val_52125 === (2))){
var inst_52120 = (state_52124[(2)]);
var inst_52121 = cljs.core.async.close_BANG_(res);
var state_52124__$1 = (function (){var statearr_52128 = state_52124;
(statearr_52128[(7)] = inst_52120);

return statearr_52128;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52124__$1,inst_52121);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0 = (function (){
var statearr_52130 = [null,null,null,null,null,null,null,null];
(statearr_52130[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__);

(statearr_52130[(1)] = (1));

return statearr_52130;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1 = (function (state_52124){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_52124);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e52132){var ex__10333__auto__ = e52132;
var statearr_52133_54963 = state_52124;
(statearr_52133_54963[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_52124[(4)]))){
var statearr_52134_54964 = state_52124;
(statearr_52134_54964[(1)] = cljs.core.first((state_52124[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54967 = state_52124;
state_52124 = G__54967;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = function(state_52124){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1.call(this,state_52124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_52135 = f__10425__auto__();
(statearr_52135[(6)] = c__10424__auto___54959);

return statearr_52135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__52139){
var vec__52141 = p__52139;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52141,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52141,(1),null);
var job = vec__52141;
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
var n__5593__auto___54969 = n;
var __54970 = (0);
while(true){
if((__54970 < n__5593__auto___54969)){
var G__52144_54971 = type;
var G__52144_54972__$1 = (((G__52144_54971 instanceof cljs.core.Keyword))?G__52144_54971.fqn:null);
switch (G__52144_54972__$1) {
case "compute":
var c__10424__auto___54974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__54970,c__10424__auto___54974,G__52144_54971,G__52144_54972__$1,n__5593__auto___54969,jobs,results,process__$1,async){
return (function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = ((function (__54970,c__10424__auto___54974,G__52144_54971,G__52144_54972__$1,n__5593__auto___54969,jobs,results,process__$1,async){
return (function (state_52157){
var state_val_52158 = (state_52157[(1)]);
if((state_val_52158 === (1))){
var state_52157__$1 = state_52157;
var statearr_52163_54980 = state_52157__$1;
(statearr_52163_54980[(2)] = null);

(statearr_52163_54980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52158 === (2))){
var state_52157__$1 = state_52157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52157__$1,(4),jobs);
} else {
if((state_val_52158 === (3))){
var inst_52155 = (state_52157[(2)]);
var state_52157__$1 = state_52157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52157__$1,inst_52155);
} else {
if((state_val_52158 === (4))){
var inst_52147 = (state_52157[(2)]);
var inst_52148 = process__$1(inst_52147);
var state_52157__$1 = state_52157;
if(cljs.core.truth_(inst_52148)){
var statearr_52172_54983 = state_52157__$1;
(statearr_52172_54983[(1)] = (5));

} else {
var statearr_52173_54984 = state_52157__$1;
(statearr_52173_54984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52158 === (5))){
var state_52157__$1 = state_52157;
var statearr_52174_54986 = state_52157__$1;
(statearr_52174_54986[(2)] = null);

(statearr_52174_54986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52158 === (6))){
var state_52157__$1 = state_52157;
var statearr_52175_54989 = state_52157__$1;
(statearr_52175_54989[(2)] = null);

(statearr_52175_54989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52158 === (7))){
var inst_52153 = (state_52157[(2)]);
var state_52157__$1 = state_52157;
var statearr_52176_54990 = state_52157__$1;
(statearr_52176_54990[(2)] = inst_52153);

(statearr_52176_54990[(1)] = (3));


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
});})(__54970,c__10424__auto___54974,G__52144_54971,G__52144_54972__$1,n__5593__auto___54969,jobs,results,process__$1,async))
;
return ((function (__54970,switch__10329__auto__,c__10424__auto___54974,G__52144_54971,G__52144_54972__$1,n__5593__auto___54969,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0 = (function (){
var statearr_52178 = [null,null,null,null,null,null,null];
(statearr_52178[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__);

(statearr_52178[(1)] = (1));

return statearr_52178;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1 = (function (state_52157){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_52157);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e52182){var ex__10333__auto__ = e52182;
var statearr_52183_54994 = state_52157;
(statearr_52183_54994[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_52157[(4)]))){
var statearr_52184_54995 = state_52157;
(statearr_52184_54995[(1)] = cljs.core.first((state_52157[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54996 = state_52157;
state_52157 = G__54996;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = function(state_52157){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1.call(this,state_52157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__;
})()
;})(__54970,switch__10329__auto__,c__10424__auto___54974,G__52144_54971,G__52144_54972__$1,n__5593__auto___54969,jobs,results,process__$1,async))
})();
var state__10426__auto__ = (function (){var statearr_52185 = f__10425__auto__();
(statearr_52185[(6)] = c__10424__auto___54974);

return statearr_52185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
});})(__54970,c__10424__auto___54974,G__52144_54971,G__52144_54972__$1,n__5593__auto___54969,jobs,results,process__$1,async))
);


break;
case "async":
var c__10424__auto___54997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__54970,c__10424__auto___54997,G__52144_54971,G__52144_54972__$1,n__5593__auto___54969,jobs,results,process__$1,async){
return (function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = ((function (__54970,c__10424__auto___54997,G__52144_54971,G__52144_54972__$1,n__5593__auto___54969,jobs,results,process__$1,async){
return (function (state_52198){
var state_val_52199 = (state_52198[(1)]);
if((state_val_52199 === (1))){
var state_52198__$1 = state_52198;
var statearr_52201_55001 = state_52198__$1;
(statearr_52201_55001[(2)] = null);

(statearr_52201_55001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (2))){
var state_52198__$1 = state_52198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52198__$1,(4),jobs);
} else {
if((state_val_52199 === (3))){
var inst_52196 = (state_52198[(2)]);
var state_52198__$1 = state_52198;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52198__$1,inst_52196);
} else {
if((state_val_52199 === (4))){
var inst_52188 = (state_52198[(2)]);
var inst_52189 = async(inst_52188);
var state_52198__$1 = state_52198;
if(cljs.core.truth_(inst_52189)){
var statearr_52203_55003 = state_52198__$1;
(statearr_52203_55003[(1)] = (5));

} else {
var statearr_52204_55004 = state_52198__$1;
(statearr_52204_55004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (5))){
var state_52198__$1 = state_52198;
var statearr_52206_55006 = state_52198__$1;
(statearr_52206_55006[(2)] = null);

(statearr_52206_55006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (6))){
var state_52198__$1 = state_52198;
var statearr_52209_55007 = state_52198__$1;
(statearr_52209_55007[(2)] = null);

(statearr_52209_55007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (7))){
var inst_52194 = (state_52198[(2)]);
var state_52198__$1 = state_52198;
var statearr_52210_55011 = state_52198__$1;
(statearr_52210_55011[(2)] = inst_52194);

(statearr_52210_55011[(1)] = (3));


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
});})(__54970,c__10424__auto___54997,G__52144_54971,G__52144_54972__$1,n__5593__auto___54969,jobs,results,process__$1,async))
;
return ((function (__54970,switch__10329__auto__,c__10424__auto___54997,G__52144_54971,G__52144_54972__$1,n__5593__auto___54969,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0 = (function (){
var statearr_52211 = [null,null,null,null,null,null,null];
(statearr_52211[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__);

(statearr_52211[(1)] = (1));

return statearr_52211;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1 = (function (state_52198){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_52198);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e52212){var ex__10333__auto__ = e52212;
var statearr_52213_55018 = state_52198;
(statearr_52213_55018[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_52198[(4)]))){
var statearr_52214_55019 = state_52198;
(statearr_52214_55019[(1)] = cljs.core.first((state_52198[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55020 = state_52198;
state_52198 = G__55020;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = function(state_52198){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1.call(this,state_52198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__;
})()
;})(__54970,switch__10329__auto__,c__10424__auto___54997,G__52144_54971,G__52144_54972__$1,n__5593__auto___54969,jobs,results,process__$1,async))
})();
var state__10426__auto__ = (function (){var statearr_52218 = f__10425__auto__();
(statearr_52218[(6)] = c__10424__auto___54997);

return statearr_52218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
});})(__54970,c__10424__auto___54997,G__52144_54971,G__52144_54972__$1,n__5593__auto___54969,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52144_54972__$1)].join('')));

}

var G__55021 = (__54970 + (1));
__54970 = G__55021;
continue;
} else {
}
break;
}

var c__10424__auto___55022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_52241){
var state_val_52242 = (state_52241[(1)]);
if((state_val_52242 === (7))){
var inst_52237 = (state_52241[(2)]);
var state_52241__$1 = state_52241;
var statearr_52246_55023 = state_52241__$1;
(statearr_52246_55023[(2)] = inst_52237);

(statearr_52246_55023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52242 === (1))){
var state_52241__$1 = state_52241;
var statearr_52247_55025 = state_52241__$1;
(statearr_52247_55025[(2)] = null);

(statearr_52247_55025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52242 === (4))){
var inst_52221 = (state_52241[(7)]);
var inst_52221__$1 = (state_52241[(2)]);
var inst_52222 = (inst_52221__$1 == null);
var state_52241__$1 = (function (){var statearr_52248 = state_52241;
(statearr_52248[(7)] = inst_52221__$1);

return statearr_52248;
})();
if(cljs.core.truth_(inst_52222)){
var statearr_52250_55027 = state_52241__$1;
(statearr_52250_55027[(1)] = (5));

} else {
var statearr_52251_55028 = state_52241__$1;
(statearr_52251_55028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52242 === (6))){
var inst_52226 = (state_52241[(8)]);
var inst_52221 = (state_52241[(7)]);
var inst_52226__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_52227 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52228 = [inst_52221,inst_52226__$1];
var inst_52229 = (new cljs.core.PersistentVector(null,2,(5),inst_52227,inst_52228,null));
var state_52241__$1 = (function (){var statearr_52252 = state_52241;
(statearr_52252[(8)] = inst_52226__$1);

return statearr_52252;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52241__$1,(8),jobs,inst_52229);
} else {
if((state_val_52242 === (3))){
var inst_52239 = (state_52241[(2)]);
var state_52241__$1 = state_52241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52241__$1,inst_52239);
} else {
if((state_val_52242 === (2))){
var state_52241__$1 = state_52241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52241__$1,(4),from);
} else {
if((state_val_52242 === (9))){
var inst_52233 = (state_52241[(2)]);
var state_52241__$1 = (function (){var statearr_52253 = state_52241;
(statearr_52253[(9)] = inst_52233);

return statearr_52253;
})();
var statearr_52254_55029 = state_52241__$1;
(statearr_52254_55029[(2)] = null);

(statearr_52254_55029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52242 === (5))){
var inst_52224 = cljs.core.async.close_BANG_(jobs);
var state_52241__$1 = state_52241;
var statearr_52255_55031 = state_52241__$1;
(statearr_52255_55031[(2)] = inst_52224);

(statearr_52255_55031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52242 === (8))){
var inst_52226 = (state_52241[(8)]);
var inst_52231 = (state_52241[(2)]);
var state_52241__$1 = (function (){var statearr_52256 = state_52241;
(statearr_52256[(10)] = inst_52231);

return statearr_52256;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52241__$1,(9),results,inst_52226);
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
var statearr_52257 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52257[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__);

(statearr_52257[(1)] = (1));

return statearr_52257;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1 = (function (state_52241){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_52241);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e52258){var ex__10333__auto__ = e52258;
var statearr_52259_55033 = state_52241;
(statearr_52259_55033[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_52241[(4)]))){
var statearr_52260_55034 = state_52241;
(statearr_52260_55034[(1)] = cljs.core.first((state_52241[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55035 = state_52241;
state_52241 = G__55035;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = function(state_52241){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1.call(this,state_52241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_52261 = f__10425__auto__();
(statearr_52261[(6)] = c__10424__auto___55022);

return statearr_52261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


var c__10424__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_52302){
var state_val_52303 = (state_52302[(1)]);
if((state_val_52303 === (7))){
var inst_52298 = (state_52302[(2)]);
var state_52302__$1 = state_52302;
var statearr_52309_55037 = state_52302__$1;
(statearr_52309_55037[(2)] = inst_52298);

(statearr_52309_55037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52303 === (20))){
var state_52302__$1 = state_52302;
var statearr_52310_55038 = state_52302__$1;
(statearr_52310_55038[(2)] = null);

(statearr_52310_55038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52303 === (1))){
var state_52302__$1 = state_52302;
var statearr_52311_55039 = state_52302__$1;
(statearr_52311_55039[(2)] = null);

(statearr_52311_55039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52303 === (4))){
var inst_52266 = (state_52302[(7)]);
var inst_52266__$1 = (state_52302[(2)]);
var inst_52267 = (inst_52266__$1 == null);
var state_52302__$1 = (function (){var statearr_52314 = state_52302;
(statearr_52314[(7)] = inst_52266__$1);

return statearr_52314;
})();
if(cljs.core.truth_(inst_52267)){
var statearr_52316_55040 = state_52302__$1;
(statearr_52316_55040[(1)] = (5));

} else {
var statearr_52318_55041 = state_52302__$1;
(statearr_52318_55041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52303 === (15))){
var inst_52280 = (state_52302[(8)]);
var state_52302__$1 = state_52302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52302__$1,(18),to,inst_52280);
} else {
if((state_val_52303 === (21))){
var inst_52293 = (state_52302[(2)]);
var state_52302__$1 = state_52302;
var statearr_52319_55043 = state_52302__$1;
(statearr_52319_55043[(2)] = inst_52293);

(statearr_52319_55043[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52303 === (13))){
var inst_52295 = (state_52302[(2)]);
var state_52302__$1 = (function (){var statearr_52320 = state_52302;
(statearr_52320[(9)] = inst_52295);

return statearr_52320;
})();
var statearr_52321_55044 = state_52302__$1;
(statearr_52321_55044[(2)] = null);

(statearr_52321_55044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52303 === (6))){
var inst_52266 = (state_52302[(7)]);
var state_52302__$1 = state_52302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52302__$1,(11),inst_52266);
} else {
if((state_val_52303 === (17))){
var inst_52288 = (state_52302[(2)]);
var state_52302__$1 = state_52302;
if(cljs.core.truth_(inst_52288)){
var statearr_52326_55046 = state_52302__$1;
(statearr_52326_55046[(1)] = (19));

} else {
var statearr_52327_55047 = state_52302__$1;
(statearr_52327_55047[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52303 === (3))){
var inst_52300 = (state_52302[(2)]);
var state_52302__$1 = state_52302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52302__$1,inst_52300);
} else {
if((state_val_52303 === (12))){
var inst_52277 = (state_52302[(10)]);
var state_52302__$1 = state_52302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52302__$1,(14),inst_52277);
} else {
if((state_val_52303 === (2))){
var state_52302__$1 = state_52302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52302__$1,(4),results);
} else {
if((state_val_52303 === (19))){
var state_52302__$1 = state_52302;
var statearr_52332_55048 = state_52302__$1;
(statearr_52332_55048[(2)] = null);

(statearr_52332_55048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52303 === (11))){
var inst_52277 = (state_52302[(2)]);
var state_52302__$1 = (function (){var statearr_52333 = state_52302;
(statearr_52333[(10)] = inst_52277);

return statearr_52333;
})();
var statearr_52334_55049 = state_52302__$1;
(statearr_52334_55049[(2)] = null);

(statearr_52334_55049[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52303 === (9))){
var state_52302__$1 = state_52302;
var statearr_52335_55050 = state_52302__$1;
(statearr_52335_55050[(2)] = null);

(statearr_52335_55050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52303 === (5))){
var state_52302__$1 = state_52302;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52337_55051 = state_52302__$1;
(statearr_52337_55051[(1)] = (8));

} else {
var statearr_52339_55052 = state_52302__$1;
(statearr_52339_55052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52303 === (14))){
var inst_52280 = (state_52302[(8)]);
var inst_52282 = (state_52302[(11)]);
var inst_52280__$1 = (state_52302[(2)]);
var inst_52281 = (inst_52280__$1 == null);
var inst_52282__$1 = cljs.core.not(inst_52281);
var state_52302__$1 = (function (){var statearr_52343 = state_52302;
(statearr_52343[(8)] = inst_52280__$1);

(statearr_52343[(11)] = inst_52282__$1);

return statearr_52343;
})();
if(inst_52282__$1){
var statearr_52344_55053 = state_52302__$1;
(statearr_52344_55053[(1)] = (15));

} else {
var statearr_52345_55054 = state_52302__$1;
(statearr_52345_55054[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52303 === (16))){
var inst_52282 = (state_52302[(11)]);
var state_52302__$1 = state_52302;
var statearr_52346_55055 = state_52302__$1;
(statearr_52346_55055[(2)] = inst_52282);

(statearr_52346_55055[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52303 === (10))){
var inst_52274 = (state_52302[(2)]);
var state_52302__$1 = state_52302;
var statearr_52347_55056 = state_52302__$1;
(statearr_52347_55056[(2)] = inst_52274);

(statearr_52347_55056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52303 === (18))){
var inst_52285 = (state_52302[(2)]);
var state_52302__$1 = state_52302;
var statearr_52348_55060 = state_52302__$1;
(statearr_52348_55060[(2)] = inst_52285);

(statearr_52348_55060[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52303 === (8))){
var inst_52271 = cljs.core.async.close_BANG_(to);
var state_52302__$1 = state_52302;
var statearr_52349_55063 = state_52302__$1;
(statearr_52349_55063[(2)] = inst_52271);

(statearr_52349_55063[(1)] = (10));


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
var statearr_52351 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52351[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__);

(statearr_52351[(1)] = (1));

return statearr_52351;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1 = (function (state_52302){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_52302);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e52354){var ex__10333__auto__ = e52354;
var statearr_52357_55075 = state_52302;
(statearr_52357_55075[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_52302[(4)]))){
var statearr_52358_55078 = state_52302;
(statearr_52358_55078[(1)] = cljs.core.first((state_52302[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55081 = state_52302;
state_52302 = G__55081;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = function(state_52302){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1.call(this,state_52302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_52359 = f__10425__auto__();
(statearr_52359[(6)] = c__10424__auto__);

return statearr_52359;
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
var G__52366 = arguments.length;
switch (G__52366) {
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
var G__52380 = arguments.length;
switch (G__52380) {
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
var G__52393 = arguments.length;
switch (G__52393) {
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
var c__10424__auto___55093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_52436){
var state_val_52437 = (state_52436[(1)]);
if((state_val_52437 === (7))){
var inst_52430 = (state_52436[(2)]);
var state_52436__$1 = state_52436;
var statearr_52440_55095 = state_52436__$1;
(statearr_52440_55095[(2)] = inst_52430);

(statearr_52440_55095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52437 === (1))){
var state_52436__$1 = state_52436;
var statearr_52441_55096 = state_52436__$1;
(statearr_52441_55096[(2)] = null);

(statearr_52441_55096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52437 === (4))){
var inst_52408 = (state_52436[(7)]);
var inst_52408__$1 = (state_52436[(2)]);
var inst_52411 = (inst_52408__$1 == null);
var state_52436__$1 = (function (){var statearr_52443 = state_52436;
(statearr_52443[(7)] = inst_52408__$1);

return statearr_52443;
})();
if(cljs.core.truth_(inst_52411)){
var statearr_52444_55097 = state_52436__$1;
(statearr_52444_55097[(1)] = (5));

} else {
var statearr_52445_55098 = state_52436__$1;
(statearr_52445_55098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52437 === (13))){
var state_52436__$1 = state_52436;
var statearr_52448_55100 = state_52436__$1;
(statearr_52448_55100[(2)] = null);

(statearr_52448_55100[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52437 === (6))){
var inst_52408 = (state_52436[(7)]);
var inst_52417 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52408) : p.call(null, inst_52408));
var state_52436__$1 = state_52436;
if(cljs.core.truth_(inst_52417)){
var statearr_52453_55102 = state_52436__$1;
(statearr_52453_55102[(1)] = (9));

} else {
var statearr_52454_55103 = state_52436__$1;
(statearr_52454_55103[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52437 === (3))){
var inst_52432 = (state_52436[(2)]);
var state_52436__$1 = state_52436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52436__$1,inst_52432);
} else {
if((state_val_52437 === (12))){
var state_52436__$1 = state_52436;
var statearr_52457_55104 = state_52436__$1;
(statearr_52457_55104[(2)] = null);

(statearr_52457_55104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52437 === (2))){
var state_52436__$1 = state_52436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52436__$1,(4),ch);
} else {
if((state_val_52437 === (11))){
var inst_52408 = (state_52436[(7)]);
var inst_52421 = (state_52436[(2)]);
var state_52436__$1 = state_52436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52436__$1,(8),inst_52421,inst_52408);
} else {
if((state_val_52437 === (9))){
var state_52436__$1 = state_52436;
var statearr_52459_55107 = state_52436__$1;
(statearr_52459_55107[(2)] = tc);

(statearr_52459_55107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52437 === (5))){
var inst_52414 = cljs.core.async.close_BANG_(tc);
var inst_52415 = cljs.core.async.close_BANG_(fc);
var state_52436__$1 = (function (){var statearr_52463 = state_52436;
(statearr_52463[(8)] = inst_52414);

return statearr_52463;
})();
var statearr_52465_55108 = state_52436__$1;
(statearr_52465_55108[(2)] = inst_52415);

(statearr_52465_55108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52437 === (14))){
var inst_52428 = (state_52436[(2)]);
var state_52436__$1 = state_52436;
var statearr_52468_55109 = state_52436__$1;
(statearr_52468_55109[(2)] = inst_52428);

(statearr_52468_55109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52437 === (10))){
var state_52436__$1 = state_52436;
var statearr_52472_55110 = state_52436__$1;
(statearr_52472_55110[(2)] = fc);

(statearr_52472_55110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52437 === (8))){
var inst_52423 = (state_52436[(2)]);
var state_52436__$1 = state_52436;
if(cljs.core.truth_(inst_52423)){
var statearr_52473_55113 = state_52436__$1;
(statearr_52473_55113[(1)] = (12));

} else {
var statearr_52475_55114 = state_52436__$1;
(statearr_52475_55114[(1)] = (13));

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
var statearr_52481 = [null,null,null,null,null,null,null,null,null];
(statearr_52481[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_52481[(1)] = (1));

return statearr_52481;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_52436){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_52436);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e52482){var ex__10333__auto__ = e52482;
var statearr_52483_55116 = state_52436;
(statearr_52483_55116[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_52436[(4)]))){
var statearr_52486_55118 = state_52436;
(statearr_52486_55118[(1)] = cljs.core.first((state_52436[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55120 = state_52436;
state_52436 = G__55120;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_52436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_52436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_52488 = f__10425__auto__();
(statearr_52488[(6)] = c__10424__auto___55093);

return statearr_52488;
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
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_52512){
var state_val_52513 = (state_52512[(1)]);
if((state_val_52513 === (7))){
var inst_52508 = (state_52512[(2)]);
var state_52512__$1 = state_52512;
var statearr_52518_55121 = state_52512__$1;
(statearr_52518_55121[(2)] = inst_52508);

(statearr_52518_55121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52513 === (1))){
var inst_52491 = init;
var inst_52492 = inst_52491;
var state_52512__$1 = (function (){var statearr_52519 = state_52512;
(statearr_52519[(7)] = inst_52492);

return statearr_52519;
})();
var statearr_52520_55126 = state_52512__$1;
(statearr_52520_55126[(2)] = null);

(statearr_52520_55126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52513 === (4))){
var inst_52495 = (state_52512[(8)]);
var inst_52495__$1 = (state_52512[(2)]);
var inst_52496 = (inst_52495__$1 == null);
var state_52512__$1 = (function (){var statearr_52521 = state_52512;
(statearr_52521[(8)] = inst_52495__$1);

return statearr_52521;
})();
if(cljs.core.truth_(inst_52496)){
var statearr_52523_55130 = state_52512__$1;
(statearr_52523_55130[(1)] = (5));

} else {
var statearr_52524_55131 = state_52512__$1;
(statearr_52524_55131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52513 === (6))){
var inst_52499 = (state_52512[(9)]);
var inst_52495 = (state_52512[(8)]);
var inst_52492 = (state_52512[(7)]);
var inst_52499__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_52492,inst_52495) : f.call(null, inst_52492,inst_52495));
var inst_52500 = cljs.core.reduced_QMARK_(inst_52499__$1);
var state_52512__$1 = (function (){var statearr_52526 = state_52512;
(statearr_52526[(9)] = inst_52499__$1);

return statearr_52526;
})();
if(inst_52500){
var statearr_52527_55137 = state_52512__$1;
(statearr_52527_55137[(1)] = (8));

} else {
var statearr_52528_55138 = state_52512__$1;
(statearr_52528_55138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52513 === (3))){
var inst_52510 = (state_52512[(2)]);
var state_52512__$1 = state_52512;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52512__$1,inst_52510);
} else {
if((state_val_52513 === (2))){
var state_52512__$1 = state_52512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52512__$1,(4),ch);
} else {
if((state_val_52513 === (9))){
var inst_52499 = (state_52512[(9)]);
var inst_52492 = inst_52499;
var state_52512__$1 = (function (){var statearr_52531 = state_52512;
(statearr_52531[(7)] = inst_52492);

return statearr_52531;
})();
var statearr_52533_55142 = state_52512__$1;
(statearr_52533_55142[(2)] = null);

(statearr_52533_55142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52513 === (5))){
var inst_52492 = (state_52512[(7)]);
var state_52512__$1 = state_52512;
var statearr_52534_55143 = state_52512__$1;
(statearr_52534_55143[(2)] = inst_52492);

(statearr_52534_55143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52513 === (10))){
var inst_52506 = (state_52512[(2)]);
var state_52512__$1 = state_52512;
var statearr_52537_55148 = state_52512__$1;
(statearr_52537_55148[(2)] = inst_52506);

(statearr_52537_55148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52513 === (8))){
var inst_52499 = (state_52512[(9)]);
var inst_52502 = cljs.core.deref(inst_52499);
var state_52512__$1 = state_52512;
var statearr_52539_55149 = state_52512__$1;
(statearr_52539_55149[(2)] = inst_52502);

(statearr_52539_55149[(1)] = (10));


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
var statearr_52541 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52541[(0)] = cljs$core$async$reduce_$_state_machine__10330__auto__);

(statearr_52541[(1)] = (1));

return statearr_52541;
});
var cljs$core$async$reduce_$_state_machine__10330__auto____1 = (function (state_52512){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_52512);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e52542){var ex__10333__auto__ = e52542;
var statearr_52543_55157 = state_52512;
(statearr_52543_55157[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_52512[(4)]))){
var statearr_52546_55160 = state_52512;
(statearr_52546_55160[(1)] = cljs.core.first((state_52512[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55161 = state_52512;
state_52512 = G__55161;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10330__auto__ = function(state_52512){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10330__auto____1.call(this,state_52512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10330__auto____0;
cljs$core$async$reduce_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10330__auto____1;
return cljs$core$async$reduce_$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_52549 = f__10425__auto__();
(statearr_52549[(6)] = c__10424__auto__);

return statearr_52549;
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
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_52559){
var state_val_52560 = (state_52559[(1)]);
if((state_val_52560 === (1))){
var inst_52554 = cljs.core.async.reduce(f__$1,init,ch);
var state_52559__$1 = state_52559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52559__$1,(2),inst_52554);
} else {
if((state_val_52560 === (2))){
var inst_52556 = (state_52559[(2)]);
var inst_52557 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_52556) : f__$1.call(null, inst_52556));
var state_52559__$1 = state_52559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52559__$1,inst_52557);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10330__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10330__auto____0 = (function (){
var statearr_52561 = [null,null,null,null,null,null,null];
(statearr_52561[(0)] = cljs$core$async$transduce_$_state_machine__10330__auto__);

(statearr_52561[(1)] = (1));

return statearr_52561;
});
var cljs$core$async$transduce_$_state_machine__10330__auto____1 = (function (state_52559){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_52559);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e52562){var ex__10333__auto__ = e52562;
var statearr_52564_55170 = state_52559;
(statearr_52564_55170[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_52559[(4)]))){
var statearr_52565_55172 = state_52559;
(statearr_52565_55172[(1)] = cljs.core.first((state_52559[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55175 = state_52559;
state_52559 = G__55175;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10330__auto__ = function(state_52559){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10330__auto____1.call(this,state_52559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10330__auto____0;
cljs$core$async$transduce_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10330__auto____1;
return cljs$core$async$transduce_$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_52567 = f__10425__auto__();
(statearr_52567[(6)] = c__10424__auto__);

return statearr_52567;
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
var G__52574 = arguments.length;
switch (G__52574) {
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
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_52605){
var state_val_52606 = (state_52605[(1)]);
if((state_val_52606 === (7))){
var inst_52587 = (state_52605[(2)]);
var state_52605__$1 = state_52605;
var statearr_52608_55186 = state_52605__$1;
(statearr_52608_55186[(2)] = inst_52587);

(statearr_52608_55186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52606 === (1))){
var inst_52581 = cljs.core.seq(coll);
var inst_52582 = inst_52581;
var state_52605__$1 = (function (){var statearr_52609 = state_52605;
(statearr_52609[(7)] = inst_52582);

return statearr_52609;
})();
var statearr_52610_55188 = state_52605__$1;
(statearr_52610_55188[(2)] = null);

(statearr_52610_55188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52606 === (4))){
var inst_52582 = (state_52605[(7)]);
var inst_52585 = cljs.core.first(inst_52582);
var state_52605__$1 = state_52605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52605__$1,(7),ch,inst_52585);
} else {
if((state_val_52606 === (13))){
var inst_52599 = (state_52605[(2)]);
var state_52605__$1 = state_52605;
var statearr_52617_55189 = state_52605__$1;
(statearr_52617_55189[(2)] = inst_52599);

(statearr_52617_55189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52606 === (6))){
var inst_52590 = (state_52605[(2)]);
var state_52605__$1 = state_52605;
if(cljs.core.truth_(inst_52590)){
var statearr_52618_55196 = state_52605__$1;
(statearr_52618_55196[(1)] = (8));

} else {
var statearr_52619_55197 = state_52605__$1;
(statearr_52619_55197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52606 === (3))){
var inst_52603 = (state_52605[(2)]);
var state_52605__$1 = state_52605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52605__$1,inst_52603);
} else {
if((state_val_52606 === (12))){
var state_52605__$1 = state_52605;
var statearr_52622_55199 = state_52605__$1;
(statearr_52622_55199[(2)] = null);

(statearr_52622_55199[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52606 === (2))){
var inst_52582 = (state_52605[(7)]);
var state_52605__$1 = state_52605;
if(cljs.core.truth_(inst_52582)){
var statearr_52623_55201 = state_52605__$1;
(statearr_52623_55201[(1)] = (4));

} else {
var statearr_52624_55202 = state_52605__$1;
(statearr_52624_55202[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52606 === (11))){
var inst_52596 = cljs.core.async.close_BANG_(ch);
var state_52605__$1 = state_52605;
var statearr_52627_55209 = state_52605__$1;
(statearr_52627_55209[(2)] = inst_52596);

(statearr_52627_55209[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52606 === (9))){
var state_52605__$1 = state_52605;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52628_55210 = state_52605__$1;
(statearr_52628_55210[(1)] = (11));

} else {
var statearr_52629_55211 = state_52605__$1;
(statearr_52629_55211[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52606 === (5))){
var inst_52582 = (state_52605[(7)]);
var state_52605__$1 = state_52605;
var statearr_52630_55214 = state_52605__$1;
(statearr_52630_55214[(2)] = inst_52582);

(statearr_52630_55214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52606 === (10))){
var inst_52601 = (state_52605[(2)]);
var state_52605__$1 = state_52605;
var statearr_52631_55220 = state_52605__$1;
(statearr_52631_55220[(2)] = inst_52601);

(statearr_52631_55220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52606 === (8))){
var inst_52582 = (state_52605[(7)]);
var inst_52592 = cljs.core.next(inst_52582);
var inst_52582__$1 = inst_52592;
var state_52605__$1 = (function (){var statearr_52635 = state_52605;
(statearr_52635[(7)] = inst_52582__$1);

return statearr_52635;
})();
var statearr_52637_55221 = state_52605__$1;
(statearr_52637_55221[(2)] = null);

(statearr_52637_55221[(1)] = (2));


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
var statearr_52642 = [null,null,null,null,null,null,null,null];
(statearr_52642[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_52642[(1)] = (1));

return statearr_52642;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_52605){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_52605);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e52643){var ex__10333__auto__ = e52643;
var statearr_52644_55223 = state_52605;
(statearr_52644_55223[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_52605[(4)]))){
var statearr_52645_55229 = state_52605;
(statearr_52645_55229[(1)] = cljs.core.first((state_52605[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55239 = state_52605;
state_52605 = G__55239;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_52605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_52605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_52646 = f__10425__auto__();
(statearr_52646[(6)] = c__10424__auto__);

return statearr_52646;
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
var G__52652 = arguments.length;
switch (G__52652) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_55282 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_55282(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_55289 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_55289(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_55298 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_55298(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_55302 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_55302(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52679 = (function (ch,cs,meta52680){
this.ch = ch;
this.cs = cs;
this.meta52680 = meta52680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52681,meta52680__$1){
var self__ = this;
var _52681__$1 = this;
return (new cljs.core.async.t_cljs$core$async52679(self__.ch,self__.cs,meta52680__$1));
}));

(cljs.core.async.t_cljs$core$async52679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52681){
var self__ = this;
var _52681__$1 = this;
return self__.meta52680;
}));

(cljs.core.async.t_cljs$core$async52679.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52679.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async52679.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52679.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async52679.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async52679.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async52679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta52680","meta52680",-983468001,null)], null);
}));

(cljs.core.async.t_cljs$core$async52679.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52679");

(cljs.core.async.t_cljs$core$async52679.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async52679");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52679.
 */
cljs.core.async.__GT_t_cljs$core$async52679 = (function cljs$core$async$__GT_t_cljs$core$async52679(ch,cs,meta52680){
return (new cljs.core.async.t_cljs$core$async52679(ch,cs,meta52680));
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
var m = (new cljs.core.async.t_cljs$core$async52679(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__10424__auto___55316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_52829){
var state_val_52830 = (state_52829[(1)]);
if((state_val_52830 === (7))){
var inst_52825 = (state_52829[(2)]);
var state_52829__$1 = state_52829;
var statearr_52835_55317 = state_52829__$1;
(statearr_52835_55317[(2)] = inst_52825);

(statearr_52835_55317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (20))){
var inst_52729 = (state_52829[(7)]);
var inst_52741 = cljs.core.first(inst_52729);
var inst_52742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52741,(0),null);
var inst_52743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52741,(1),null);
var state_52829__$1 = (function (){var statearr_52836 = state_52829;
(statearr_52836[(8)] = inst_52742);

return statearr_52836;
})();
if(cljs.core.truth_(inst_52743)){
var statearr_52837_55318 = state_52829__$1;
(statearr_52837_55318[(1)] = (22));

} else {
var statearr_52838_55319 = state_52829__$1;
(statearr_52838_55319[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (27))){
var inst_52779 = (state_52829[(9)]);
var inst_52695 = (state_52829[(10)]);
var inst_52772 = (state_52829[(11)]);
var inst_52774 = (state_52829[(12)]);
var inst_52779__$1 = cljs.core._nth(inst_52772,inst_52774);
var inst_52780 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52779__$1,inst_52695,done);
var state_52829__$1 = (function (){var statearr_52840 = state_52829;
(statearr_52840[(9)] = inst_52779__$1);

return statearr_52840;
})();
if(cljs.core.truth_(inst_52780)){
var statearr_52841_55323 = state_52829__$1;
(statearr_52841_55323[(1)] = (30));

} else {
var statearr_52844_55324 = state_52829__$1;
(statearr_52844_55324[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (1))){
var state_52829__$1 = state_52829;
var statearr_52846_55326 = state_52829__$1;
(statearr_52846_55326[(2)] = null);

(statearr_52846_55326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (24))){
var inst_52729 = (state_52829[(7)]);
var inst_52748 = (state_52829[(2)]);
var inst_52749 = cljs.core.next(inst_52729);
var inst_52707 = inst_52749;
var inst_52708 = null;
var inst_52709 = (0);
var inst_52710 = (0);
var state_52829__$1 = (function (){var statearr_52847 = state_52829;
(statearr_52847[(13)] = inst_52709);

(statearr_52847[(14)] = inst_52748);

(statearr_52847[(15)] = inst_52707);

(statearr_52847[(16)] = inst_52708);

(statearr_52847[(17)] = inst_52710);

return statearr_52847;
})();
var statearr_52848_55328 = state_52829__$1;
(statearr_52848_55328[(2)] = null);

(statearr_52848_55328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (39))){
var state_52829__$1 = state_52829;
var statearr_52852_55333 = state_52829__$1;
(statearr_52852_55333[(2)] = null);

(statearr_52852_55333[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (4))){
var inst_52695 = (state_52829[(10)]);
var inst_52695__$1 = (state_52829[(2)]);
var inst_52698 = (inst_52695__$1 == null);
var state_52829__$1 = (function (){var statearr_52854 = state_52829;
(statearr_52854[(10)] = inst_52695__$1);

return statearr_52854;
})();
if(cljs.core.truth_(inst_52698)){
var statearr_52855_55335 = state_52829__$1;
(statearr_52855_55335[(1)] = (5));

} else {
var statearr_52856_55337 = state_52829__$1;
(statearr_52856_55337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (15))){
var inst_52709 = (state_52829[(13)]);
var inst_52707 = (state_52829[(15)]);
var inst_52708 = (state_52829[(16)]);
var inst_52710 = (state_52829[(17)]);
var inst_52725 = (state_52829[(2)]);
var inst_52726 = (inst_52710 + (1));
var tmp52849 = inst_52709;
var tmp52850 = inst_52707;
var tmp52851 = inst_52708;
var inst_52707__$1 = tmp52850;
var inst_52708__$1 = tmp52851;
var inst_52709__$1 = tmp52849;
var inst_52710__$1 = inst_52726;
var state_52829__$1 = (function (){var statearr_52858 = state_52829;
(statearr_52858[(18)] = inst_52725);

(statearr_52858[(13)] = inst_52709__$1);

(statearr_52858[(15)] = inst_52707__$1);

(statearr_52858[(16)] = inst_52708__$1);

(statearr_52858[(17)] = inst_52710__$1);

return statearr_52858;
})();
var statearr_52859_55341 = state_52829__$1;
(statearr_52859_55341[(2)] = null);

(statearr_52859_55341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (21))){
var inst_52752 = (state_52829[(2)]);
var state_52829__$1 = state_52829;
var statearr_52866_55342 = state_52829__$1;
(statearr_52866_55342[(2)] = inst_52752);

(statearr_52866_55342[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (31))){
var inst_52779 = (state_52829[(9)]);
var inst_52783 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_52779);
var state_52829__$1 = state_52829;
var statearr_52867_55345 = state_52829__$1;
(statearr_52867_55345[(2)] = inst_52783);

(statearr_52867_55345[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (32))){
var inst_52772 = (state_52829[(11)]);
var inst_52771 = (state_52829[(19)]);
var inst_52773 = (state_52829[(20)]);
var inst_52774 = (state_52829[(12)]);
var inst_52785 = (state_52829[(2)]);
var inst_52786 = (inst_52774 + (1));
var tmp52860 = inst_52772;
var tmp52861 = inst_52771;
var tmp52862 = inst_52773;
var inst_52771__$1 = tmp52861;
var inst_52772__$1 = tmp52860;
var inst_52773__$1 = tmp52862;
var inst_52774__$1 = inst_52786;
var state_52829__$1 = (function (){var statearr_52871 = state_52829;
(statearr_52871[(11)] = inst_52772__$1);

(statearr_52871[(19)] = inst_52771__$1);

(statearr_52871[(20)] = inst_52773__$1);

(statearr_52871[(12)] = inst_52774__$1);

(statearr_52871[(21)] = inst_52785);

return statearr_52871;
})();
var statearr_52874_55348 = state_52829__$1;
(statearr_52874_55348[(2)] = null);

(statearr_52874_55348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (40))){
var inst_52798 = (state_52829[(22)]);
var inst_52802 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_52798);
var state_52829__$1 = state_52829;
var statearr_52875_55350 = state_52829__$1;
(statearr_52875_55350[(2)] = inst_52802);

(statearr_52875_55350[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (33))){
var inst_52789 = (state_52829[(23)]);
var inst_52791 = cljs.core.chunked_seq_QMARK_(inst_52789);
var state_52829__$1 = state_52829;
if(inst_52791){
var statearr_52876_55351 = state_52829__$1;
(statearr_52876_55351[(1)] = (36));

} else {
var statearr_52877_55352 = state_52829__$1;
(statearr_52877_55352[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (13))){
var inst_52719 = (state_52829[(24)]);
var inst_52722 = cljs.core.async.close_BANG_(inst_52719);
var state_52829__$1 = state_52829;
var statearr_52878_55353 = state_52829__$1;
(statearr_52878_55353[(2)] = inst_52722);

(statearr_52878_55353[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (22))){
var inst_52742 = (state_52829[(8)]);
var inst_52745 = cljs.core.async.close_BANG_(inst_52742);
var state_52829__$1 = state_52829;
var statearr_52880_55354 = state_52829__$1;
(statearr_52880_55354[(2)] = inst_52745);

(statearr_52880_55354[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (36))){
var inst_52789 = (state_52829[(23)]);
var inst_52793 = cljs.core.chunk_first(inst_52789);
var inst_52794 = cljs.core.chunk_rest(inst_52789);
var inst_52795 = cljs.core.count(inst_52793);
var inst_52771 = inst_52794;
var inst_52772 = inst_52793;
var inst_52773 = inst_52795;
var inst_52774 = (0);
var state_52829__$1 = (function (){var statearr_52881 = state_52829;
(statearr_52881[(11)] = inst_52772);

(statearr_52881[(19)] = inst_52771);

(statearr_52881[(20)] = inst_52773);

(statearr_52881[(12)] = inst_52774);

return statearr_52881;
})();
var statearr_52883_55360 = state_52829__$1;
(statearr_52883_55360[(2)] = null);

(statearr_52883_55360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (41))){
var inst_52789 = (state_52829[(23)]);
var inst_52804 = (state_52829[(2)]);
var inst_52805 = cljs.core.next(inst_52789);
var inst_52771 = inst_52805;
var inst_52772 = null;
var inst_52773 = (0);
var inst_52774 = (0);
var state_52829__$1 = (function (){var statearr_52889 = state_52829;
(statearr_52889[(11)] = inst_52772);

(statearr_52889[(19)] = inst_52771);

(statearr_52889[(20)] = inst_52773);

(statearr_52889[(25)] = inst_52804);

(statearr_52889[(12)] = inst_52774);

return statearr_52889;
})();
var statearr_52890_55363 = state_52829__$1;
(statearr_52890_55363[(2)] = null);

(statearr_52890_55363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (43))){
var state_52829__$1 = state_52829;
var statearr_52891_55364 = state_52829__$1;
(statearr_52891_55364[(2)] = null);

(statearr_52891_55364[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (29))){
var inst_52813 = (state_52829[(2)]);
var state_52829__$1 = state_52829;
var statearr_52892_55366 = state_52829__$1;
(statearr_52892_55366[(2)] = inst_52813);

(statearr_52892_55366[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (44))){
var inst_52822 = (state_52829[(2)]);
var state_52829__$1 = (function (){var statearr_52896 = state_52829;
(statearr_52896[(26)] = inst_52822);

return statearr_52896;
})();
var statearr_52898_55367 = state_52829__$1;
(statearr_52898_55367[(2)] = null);

(statearr_52898_55367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (6))){
var inst_52763 = (state_52829[(27)]);
var inst_52762 = cljs.core.deref(cs);
var inst_52763__$1 = cljs.core.keys(inst_52762);
var inst_52764 = cljs.core.count(inst_52763__$1);
var inst_52765 = cljs.core.reset_BANG_(dctr,inst_52764);
var inst_52770 = cljs.core.seq(inst_52763__$1);
var inst_52771 = inst_52770;
var inst_52772 = null;
var inst_52773 = (0);
var inst_52774 = (0);
var state_52829__$1 = (function (){var statearr_52903 = state_52829;
(statearr_52903[(11)] = inst_52772);

(statearr_52903[(19)] = inst_52771);

(statearr_52903[(20)] = inst_52773);

(statearr_52903[(27)] = inst_52763__$1);

(statearr_52903[(28)] = inst_52765);

(statearr_52903[(12)] = inst_52774);

return statearr_52903;
})();
var statearr_52905_55371 = state_52829__$1;
(statearr_52905_55371[(2)] = null);

(statearr_52905_55371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (28))){
var inst_52771 = (state_52829[(19)]);
var inst_52789 = (state_52829[(23)]);
var inst_52789__$1 = cljs.core.seq(inst_52771);
var state_52829__$1 = (function (){var statearr_52906 = state_52829;
(statearr_52906[(23)] = inst_52789__$1);

return statearr_52906;
})();
if(inst_52789__$1){
var statearr_52907_55372 = state_52829__$1;
(statearr_52907_55372[(1)] = (33));

} else {
var statearr_52908_55373 = state_52829__$1;
(statearr_52908_55373[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (25))){
var inst_52773 = (state_52829[(20)]);
var inst_52774 = (state_52829[(12)]);
var inst_52776 = (inst_52774 < inst_52773);
var inst_52777 = inst_52776;
var state_52829__$1 = state_52829;
if(cljs.core.truth_(inst_52777)){
var statearr_52911_55375 = state_52829__$1;
(statearr_52911_55375[(1)] = (27));

} else {
var statearr_52915_55376 = state_52829__$1;
(statearr_52915_55376[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (34))){
var state_52829__$1 = state_52829;
var statearr_52919_55377 = state_52829__$1;
(statearr_52919_55377[(2)] = null);

(statearr_52919_55377[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (17))){
var state_52829__$1 = state_52829;
var statearr_52920_55380 = state_52829__$1;
(statearr_52920_55380[(2)] = null);

(statearr_52920_55380[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (3))){
var inst_52827 = (state_52829[(2)]);
var state_52829__$1 = state_52829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52829__$1,inst_52827);
} else {
if((state_val_52830 === (12))){
var inst_52757 = (state_52829[(2)]);
var state_52829__$1 = state_52829;
var statearr_52921_55381 = state_52829__$1;
(statearr_52921_55381[(2)] = inst_52757);

(statearr_52921_55381[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (2))){
var state_52829__$1 = state_52829;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52829__$1,(4),ch);
} else {
if((state_val_52830 === (23))){
var state_52829__$1 = state_52829;
var statearr_52926_55384 = state_52829__$1;
(statearr_52926_55384[(2)] = null);

(statearr_52926_55384[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (35))){
var inst_52811 = (state_52829[(2)]);
var state_52829__$1 = state_52829;
var statearr_52927_55387 = state_52829__$1;
(statearr_52927_55387[(2)] = inst_52811);

(statearr_52927_55387[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (19))){
var inst_52729 = (state_52829[(7)]);
var inst_52733 = cljs.core.chunk_first(inst_52729);
var inst_52734 = cljs.core.chunk_rest(inst_52729);
var inst_52735 = cljs.core.count(inst_52733);
var inst_52707 = inst_52734;
var inst_52708 = inst_52733;
var inst_52709 = inst_52735;
var inst_52710 = (0);
var state_52829__$1 = (function (){var statearr_52932 = state_52829;
(statearr_52932[(13)] = inst_52709);

(statearr_52932[(15)] = inst_52707);

(statearr_52932[(16)] = inst_52708);

(statearr_52932[(17)] = inst_52710);

return statearr_52932;
})();
var statearr_52938_55392 = state_52829__$1;
(statearr_52938_55392[(2)] = null);

(statearr_52938_55392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (11))){
var inst_52729 = (state_52829[(7)]);
var inst_52707 = (state_52829[(15)]);
var inst_52729__$1 = cljs.core.seq(inst_52707);
var state_52829__$1 = (function (){var statearr_52939 = state_52829;
(statearr_52939[(7)] = inst_52729__$1);

return statearr_52939;
})();
if(inst_52729__$1){
var statearr_52940_55394 = state_52829__$1;
(statearr_52940_55394[(1)] = (16));

} else {
var statearr_52941_55396 = state_52829__$1;
(statearr_52941_55396[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (9))){
var inst_52759 = (state_52829[(2)]);
var state_52829__$1 = state_52829;
var statearr_52942_55399 = state_52829__$1;
(statearr_52942_55399[(2)] = inst_52759);

(statearr_52942_55399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (5))){
var inst_52705 = cljs.core.deref(cs);
var inst_52706 = cljs.core.seq(inst_52705);
var inst_52707 = inst_52706;
var inst_52708 = null;
var inst_52709 = (0);
var inst_52710 = (0);
var state_52829__$1 = (function (){var statearr_52946 = state_52829;
(statearr_52946[(13)] = inst_52709);

(statearr_52946[(15)] = inst_52707);

(statearr_52946[(16)] = inst_52708);

(statearr_52946[(17)] = inst_52710);

return statearr_52946;
})();
var statearr_52947_55403 = state_52829__$1;
(statearr_52947_55403[(2)] = null);

(statearr_52947_55403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (14))){
var state_52829__$1 = state_52829;
var statearr_52950_55405 = state_52829__$1;
(statearr_52950_55405[(2)] = null);

(statearr_52950_55405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (45))){
var inst_52819 = (state_52829[(2)]);
var state_52829__$1 = state_52829;
var statearr_52953_55407 = state_52829__$1;
(statearr_52953_55407[(2)] = inst_52819);

(statearr_52953_55407[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (26))){
var inst_52763 = (state_52829[(27)]);
var inst_52815 = (state_52829[(2)]);
var inst_52816 = cljs.core.seq(inst_52763);
var state_52829__$1 = (function (){var statearr_52954 = state_52829;
(statearr_52954[(29)] = inst_52815);

return statearr_52954;
})();
if(inst_52816){
var statearr_52955_55412 = state_52829__$1;
(statearr_52955_55412[(1)] = (42));

} else {
var statearr_52956_55416 = state_52829__$1;
(statearr_52956_55416[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (16))){
var inst_52729 = (state_52829[(7)]);
var inst_52731 = cljs.core.chunked_seq_QMARK_(inst_52729);
var state_52829__$1 = state_52829;
if(inst_52731){
var statearr_52962_55417 = state_52829__$1;
(statearr_52962_55417[(1)] = (19));

} else {
var statearr_52964_55420 = state_52829__$1;
(statearr_52964_55420[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (38))){
var inst_52808 = (state_52829[(2)]);
var state_52829__$1 = state_52829;
var statearr_52965_55425 = state_52829__$1;
(statearr_52965_55425[(2)] = inst_52808);

(statearr_52965_55425[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (30))){
var state_52829__$1 = state_52829;
var statearr_52967_55427 = state_52829__$1;
(statearr_52967_55427[(2)] = null);

(statearr_52967_55427[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (10))){
var inst_52708 = (state_52829[(16)]);
var inst_52710 = (state_52829[(17)]);
var inst_52718 = cljs.core._nth(inst_52708,inst_52710);
var inst_52719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52718,(0),null);
var inst_52720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52718,(1),null);
var state_52829__$1 = (function (){var statearr_52969 = state_52829;
(statearr_52969[(24)] = inst_52719);

return statearr_52969;
})();
if(cljs.core.truth_(inst_52720)){
var statearr_52970_55430 = state_52829__$1;
(statearr_52970_55430[(1)] = (13));

} else {
var statearr_52971_55431 = state_52829__$1;
(statearr_52971_55431[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (18))){
var inst_52755 = (state_52829[(2)]);
var state_52829__$1 = state_52829;
var statearr_52974_55433 = state_52829__$1;
(statearr_52974_55433[(2)] = inst_52755);

(statearr_52974_55433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (42))){
var state_52829__$1 = state_52829;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52829__$1,(45),dchan);
} else {
if((state_val_52830 === (37))){
var inst_52798 = (state_52829[(22)]);
var inst_52695 = (state_52829[(10)]);
var inst_52789 = (state_52829[(23)]);
var inst_52798__$1 = cljs.core.first(inst_52789);
var inst_52799 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52798__$1,inst_52695,done);
var state_52829__$1 = (function (){var statearr_52978 = state_52829;
(statearr_52978[(22)] = inst_52798__$1);

return statearr_52978;
})();
if(cljs.core.truth_(inst_52799)){
var statearr_52979_55439 = state_52829__$1;
(statearr_52979_55439[(1)] = (39));

} else {
var statearr_52982_55440 = state_52829__$1;
(statearr_52982_55440[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52830 === (8))){
var inst_52709 = (state_52829[(13)]);
var inst_52710 = (state_52829[(17)]);
var inst_52712 = (inst_52710 < inst_52709);
var inst_52713 = inst_52712;
var state_52829__$1 = state_52829;
if(cljs.core.truth_(inst_52713)){
var statearr_52987_55442 = state_52829__$1;
(statearr_52987_55442[(1)] = (10));

} else {
var statearr_52988_55443 = state_52829__$1;
(statearr_52988_55443[(1)] = (11));

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
var statearr_52991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52991[(0)] = cljs$core$async$mult_$_state_machine__10330__auto__);

(statearr_52991[(1)] = (1));

return statearr_52991;
});
var cljs$core$async$mult_$_state_machine__10330__auto____1 = (function (state_52829){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_52829);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e52992){var ex__10333__auto__ = e52992;
var statearr_52993_55445 = state_52829;
(statearr_52993_55445[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_52829[(4)]))){
var statearr_52994_55447 = state_52829;
(statearr_52994_55447[(1)] = cljs.core.first((state_52829[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55450 = state_52829;
state_52829 = G__55450;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10330__auto__ = function(state_52829){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10330__auto____1.call(this,state_52829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10330__auto____0;
cljs$core$async$mult_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10330__auto____1;
return cljs$core$async$mult_$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_52995 = f__10425__auto__();
(statearr_52995[(6)] = c__10424__auto___55316);

return statearr_52995;
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
var G__52997 = arguments.length;
switch (G__52997) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_55467 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_55467(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_55485 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_55485(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_55489 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_55489(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_55495 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_55495(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_55502 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_55502(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___55503 = arguments.length;
var i__5727__auto___55504 = (0);
while(true){
if((i__5727__auto___55504 < len__5726__auto___55503)){
args__5732__auto__.push((arguments[i__5727__auto___55504]));

var G__55505 = (i__5727__auto___55504 + (1));
i__5727__auto___55504 = G__55505;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__53022){
var map__53023 = p__53022;
var map__53023__$1 = cljs.core.__destructure_map(map__53023);
var opts = map__53023__$1;
var statearr_53024_55507 = state;
(statearr_53024_55507[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_53025_55509 = state;
(statearr_53025_55509[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_53026_55510 = state;
(statearr_53026_55510[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq53016){
var G__53017 = cljs.core.first(seq53016);
var seq53016__$1 = cljs.core.next(seq53016);
var G__53018 = cljs.core.first(seq53016__$1);
var seq53016__$2 = cljs.core.next(seq53016__$1);
var G__53019 = cljs.core.first(seq53016__$2);
var seq53016__$3 = cljs.core.next(seq53016__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53017,G__53018,G__53019,seq53016__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53031 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta53032){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta53032 = meta53032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53033,meta53032__$1){
var self__ = this;
var _53033__$1 = this;
return (new cljs.core.async.t_cljs$core$async53031(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta53032__$1));
}));

(cljs.core.async.t_cljs$core$async53031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53033){
var self__ = this;
var _53033__$1 = this;
return self__.meta53032;
}));

(cljs.core.async.t_cljs$core$async53031.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53031.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async53031.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53031.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async53031.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async53031.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async53031.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async53031.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async53031.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta53032","meta53032",728342578,null)], null);
}));

(cljs.core.async.t_cljs$core$async53031.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53031.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53031");

(cljs.core.async.t_cljs$core$async53031.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async53031");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53031.
 */
cljs.core.async.__GT_t_cljs$core$async53031 = (function cljs$core$async$__GT_t_cljs$core$async53031(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta53032){
return (new cljs.core.async.t_cljs$core$async53031(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta53032));
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
var m = (new cljs.core.async.t_cljs$core$async53031(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__10424__auto___55528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_53114){
var state_val_53115 = (state_53114[(1)]);
if((state_val_53115 === (7))){
var inst_53074 = (state_53114[(2)]);
var state_53114__$1 = state_53114;
if(cljs.core.truth_(inst_53074)){
var statearr_53129_55529 = state_53114__$1;
(statearr_53129_55529[(1)] = (8));

} else {
var statearr_53130_55530 = state_53114__$1;
(statearr_53130_55530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (20))){
var inst_53067 = (state_53114[(7)]);
var state_53114__$1 = state_53114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53114__$1,(23),out,inst_53067);
} else {
if((state_val_53115 === (1))){
var inst_53048 = calc_state();
var inst_53049 = cljs.core.__destructure_map(inst_53048);
var inst_53050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53049,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53049,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53049,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_53055 = inst_53048;
var state_53114__$1 = (function (){var statearr_53133 = state_53114;
(statearr_53133[(8)] = inst_53054);

(statearr_53133[(9)] = inst_53052);

(statearr_53133[(10)] = inst_53055);

(statearr_53133[(11)] = inst_53050);

return statearr_53133;
})();
var statearr_53136_55531 = state_53114__$1;
(statearr_53136_55531[(2)] = null);

(statearr_53136_55531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (24))){
var inst_53058 = (state_53114[(12)]);
var inst_53055 = inst_53058;
var state_53114__$1 = (function (){var statearr_53138 = state_53114;
(statearr_53138[(10)] = inst_53055);

return statearr_53138;
})();
var statearr_53140_55532 = state_53114__$1;
(statearr_53140_55532[(2)] = null);

(statearr_53140_55532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (4))){
var inst_53067 = (state_53114[(7)]);
var inst_53069 = (state_53114[(13)]);
var inst_53066 = (state_53114[(2)]);
var inst_53067__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53066,(0),null);
var inst_53068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53066,(1),null);
var inst_53069__$1 = (inst_53067__$1 == null);
var state_53114__$1 = (function (){var statearr_53143 = state_53114;
(statearr_53143[(14)] = inst_53068);

(statearr_53143[(7)] = inst_53067__$1);

(statearr_53143[(13)] = inst_53069__$1);

return statearr_53143;
})();
if(cljs.core.truth_(inst_53069__$1)){
var statearr_53148_55537 = state_53114__$1;
(statearr_53148_55537[(1)] = (5));

} else {
var statearr_53149_55538 = state_53114__$1;
(statearr_53149_55538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (15))){
var inst_53088 = (state_53114[(15)]);
var inst_53059 = (state_53114[(16)]);
var inst_53088__$1 = cljs.core.empty_QMARK_(inst_53059);
var state_53114__$1 = (function (){var statearr_53150 = state_53114;
(statearr_53150[(15)] = inst_53088__$1);

return statearr_53150;
})();
if(inst_53088__$1){
var statearr_53152_55539 = state_53114__$1;
(statearr_53152_55539[(1)] = (17));

} else {
var statearr_53153_55542 = state_53114__$1;
(statearr_53153_55542[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (21))){
var inst_53058 = (state_53114[(12)]);
var inst_53055 = inst_53058;
var state_53114__$1 = (function (){var statearr_53154 = state_53114;
(statearr_53154[(10)] = inst_53055);

return statearr_53154;
})();
var statearr_53155_55543 = state_53114__$1;
(statearr_53155_55543[(2)] = null);

(statearr_53155_55543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (13))){
var inst_53081 = (state_53114[(2)]);
var inst_53082 = calc_state();
var inst_53055 = inst_53082;
var state_53114__$1 = (function (){var statearr_53156 = state_53114;
(statearr_53156[(10)] = inst_53055);

(statearr_53156[(17)] = inst_53081);

return statearr_53156;
})();
var statearr_53157_55544 = state_53114__$1;
(statearr_53157_55544[(2)] = null);

(statearr_53157_55544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (22))){
var inst_53108 = (state_53114[(2)]);
var state_53114__$1 = state_53114;
var statearr_53159_55545 = state_53114__$1;
(statearr_53159_55545[(2)] = inst_53108);

(statearr_53159_55545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (6))){
var inst_53068 = (state_53114[(14)]);
var inst_53072 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53068,change);
var state_53114__$1 = state_53114;
var statearr_53160_55547 = state_53114__$1;
(statearr_53160_55547[(2)] = inst_53072);

(statearr_53160_55547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (25))){
var state_53114__$1 = state_53114;
var statearr_53163_55548 = state_53114__$1;
(statearr_53163_55548[(2)] = null);

(statearr_53163_55548[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (17))){
var inst_53068 = (state_53114[(14)]);
var inst_53060 = (state_53114[(18)]);
var inst_53090 = (inst_53060.cljs$core$IFn$_invoke$arity$1 ? inst_53060.cljs$core$IFn$_invoke$arity$1(inst_53068) : inst_53060.call(null, inst_53068));
var inst_53091 = cljs.core.not(inst_53090);
var state_53114__$1 = state_53114;
var statearr_53164_55549 = state_53114__$1;
(statearr_53164_55549[(2)] = inst_53091);

(statearr_53164_55549[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (3))){
var inst_53112 = (state_53114[(2)]);
var state_53114__$1 = state_53114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53114__$1,inst_53112);
} else {
if((state_val_53115 === (12))){
var state_53114__$1 = state_53114;
var statearr_53172_55550 = state_53114__$1;
(statearr_53172_55550[(2)] = null);

(statearr_53172_55550[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (2))){
var inst_53058 = (state_53114[(12)]);
var inst_53055 = (state_53114[(10)]);
var inst_53058__$1 = cljs.core.__destructure_map(inst_53055);
var inst_53059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53058__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53058__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53058__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_53114__$1 = (function (){var statearr_53175 = state_53114;
(statearr_53175[(12)] = inst_53058__$1);

(statearr_53175[(18)] = inst_53060);

(statearr_53175[(16)] = inst_53059);

return statearr_53175;
})();
return cljs.core.async.ioc_alts_BANG_(state_53114__$1,(4),inst_53061);
} else {
if((state_val_53115 === (23))){
var inst_53099 = (state_53114[(2)]);
var state_53114__$1 = state_53114;
if(cljs.core.truth_(inst_53099)){
var statearr_53178_55554 = state_53114__$1;
(statearr_53178_55554[(1)] = (24));

} else {
var statearr_53179_55555 = state_53114__$1;
(statearr_53179_55555[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (19))){
var inst_53094 = (state_53114[(2)]);
var state_53114__$1 = state_53114;
var statearr_53182_55557 = state_53114__$1;
(statearr_53182_55557[(2)] = inst_53094);

(statearr_53182_55557[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (11))){
var inst_53068 = (state_53114[(14)]);
var inst_53078 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_53068);
var state_53114__$1 = state_53114;
var statearr_53186_55558 = state_53114__$1;
(statearr_53186_55558[(2)] = inst_53078);

(statearr_53186_55558[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (9))){
var inst_53068 = (state_53114[(14)]);
var inst_53085 = (state_53114[(19)]);
var inst_53059 = (state_53114[(16)]);
var inst_53085__$1 = (inst_53059.cljs$core$IFn$_invoke$arity$1 ? inst_53059.cljs$core$IFn$_invoke$arity$1(inst_53068) : inst_53059.call(null, inst_53068));
var state_53114__$1 = (function (){var statearr_53187 = state_53114;
(statearr_53187[(19)] = inst_53085__$1);

return statearr_53187;
})();
if(cljs.core.truth_(inst_53085__$1)){
var statearr_53188_55563 = state_53114__$1;
(statearr_53188_55563[(1)] = (14));

} else {
var statearr_53189_55564 = state_53114__$1;
(statearr_53189_55564[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (5))){
var inst_53069 = (state_53114[(13)]);
var state_53114__$1 = state_53114;
var statearr_53191_55565 = state_53114__$1;
(statearr_53191_55565[(2)] = inst_53069);

(statearr_53191_55565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (14))){
var inst_53085 = (state_53114[(19)]);
var state_53114__$1 = state_53114;
var statearr_53193_55566 = state_53114__$1;
(statearr_53193_55566[(2)] = inst_53085);

(statearr_53193_55566[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (26))){
var inst_53104 = (state_53114[(2)]);
var state_53114__$1 = state_53114;
var statearr_53194_55567 = state_53114__$1;
(statearr_53194_55567[(2)] = inst_53104);

(statearr_53194_55567[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (16))){
var inst_53096 = (state_53114[(2)]);
var state_53114__$1 = state_53114;
if(cljs.core.truth_(inst_53096)){
var statearr_53199_55568 = state_53114__$1;
(statearr_53199_55568[(1)] = (20));

} else {
var statearr_53203_55569 = state_53114__$1;
(statearr_53203_55569[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (10))){
var inst_53110 = (state_53114[(2)]);
var state_53114__$1 = state_53114;
var statearr_53206_55570 = state_53114__$1;
(statearr_53206_55570[(2)] = inst_53110);

(statearr_53206_55570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (18))){
var inst_53088 = (state_53114[(15)]);
var state_53114__$1 = state_53114;
var statearr_53210_55572 = state_53114__$1;
(statearr_53210_55572[(2)] = inst_53088);

(statearr_53210_55572[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (8))){
var inst_53067 = (state_53114[(7)]);
var inst_53076 = (inst_53067 == null);
var state_53114__$1 = state_53114;
if(cljs.core.truth_(inst_53076)){
var statearr_53212_55573 = state_53114__$1;
(statearr_53212_55573[(1)] = (11));

} else {
var statearr_53213_55574 = state_53114__$1;
(statearr_53213_55574[(1)] = (12));

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
var statearr_53226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53226[(0)] = cljs$core$async$mix_$_state_machine__10330__auto__);

(statearr_53226[(1)] = (1));

return statearr_53226;
});
var cljs$core$async$mix_$_state_machine__10330__auto____1 = (function (state_53114){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_53114);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e53227){var ex__10333__auto__ = e53227;
var statearr_53228_55575 = state_53114;
(statearr_53228_55575[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_53114[(4)]))){
var statearr_53232_55576 = state_53114;
(statearr_53232_55576[(1)] = cljs.core.first((state_53114[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55577 = state_53114;
state_53114 = G__55577;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10330__auto__ = function(state_53114){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10330__auto____1.call(this,state_53114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10330__auto____0;
cljs$core$async$mix_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10330__auto____1;
return cljs$core$async$mix_$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_53238 = f__10425__auto__();
(statearr_53238[(6)] = c__10424__auto___55528);

return statearr_53238;
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

var cljs$core$async$Pub$sub_STAR_$dyn_55579 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_55579(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_55585 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_55585(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_55588 = (function() {
var G__55589 = null;
var G__55589__1 = (function (p){
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
var G__55589__2 = (function (p,v){
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
G__55589 = function(p,v){
switch(arguments.length){
case 1:
return G__55589__1.call(this,p);
case 2:
return G__55589__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55589.cljs$core$IFn$_invoke$arity$1 = G__55589__1;
G__55589.cljs$core$IFn$_invoke$arity$2 = G__55589__2;
return G__55589;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__53318 = arguments.length;
switch (G__53318) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_55588(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_55588(p,v);
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
cljs.core.async.t_cljs$core$async53345 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta53346){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta53346 = meta53346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53347,meta53346__$1){
var self__ = this;
var _53347__$1 = this;
return (new cljs.core.async.t_cljs$core$async53345(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta53346__$1));
}));

(cljs.core.async.t_cljs$core$async53345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53347){
var self__ = this;
var _53347__$1 = this;
return self__.meta53346;
}));

(cljs.core.async.t_cljs$core$async53345.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53345.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async53345.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53345.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async53345.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async53345.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async53345.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async53345.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta53346","meta53346",105359415,null)], null);
}));

(cljs.core.async.t_cljs$core$async53345.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53345.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53345");

(cljs.core.async.t_cljs$core$async53345.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async53345");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53345.
 */
cljs.core.async.__GT_t_cljs$core$async53345 = (function cljs$core$async$__GT_t_cljs$core$async53345(ch,topic_fn,buf_fn,mults,ensure_mult,meta53346){
return (new cljs.core.async.t_cljs$core$async53345(ch,topic_fn,buf_fn,mults,ensure_mult,meta53346));
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
var G__53339 = arguments.length;
switch (G__53339) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__53330_SHARP_){
if(cljs.core.truth_((p1__53330_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__53330_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__53330_SHARP_.call(null, topic)))){
return p1__53330_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__53330_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async53345(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__10424__auto___55599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_53434){
var state_val_53435 = (state_53434[(1)]);
if((state_val_53435 === (7))){
var inst_53430 = (state_53434[(2)]);
var state_53434__$1 = state_53434;
var statearr_53441_55600 = state_53434__$1;
(statearr_53441_55600[(2)] = inst_53430);

(statearr_53441_55600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (20))){
var state_53434__$1 = state_53434;
var statearr_53449_55603 = state_53434__$1;
(statearr_53449_55603[(2)] = null);

(statearr_53449_55603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (1))){
var state_53434__$1 = state_53434;
var statearr_53453_55604 = state_53434__$1;
(statearr_53453_55604[(2)] = null);

(statearr_53453_55604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (24))){
var inst_53413 = (state_53434[(7)]);
var inst_53422 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_53413);
var state_53434__$1 = state_53434;
var statearr_53454_55609 = state_53434__$1;
(statearr_53454_55609[(2)] = inst_53422);

(statearr_53454_55609[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (4))){
var inst_53361 = (state_53434[(8)]);
var inst_53361__$1 = (state_53434[(2)]);
var inst_53362 = (inst_53361__$1 == null);
var state_53434__$1 = (function (){var statearr_53458 = state_53434;
(statearr_53458[(8)] = inst_53361__$1);

return statearr_53458;
})();
if(cljs.core.truth_(inst_53362)){
var statearr_53459_55611 = state_53434__$1;
(statearr_53459_55611[(1)] = (5));

} else {
var statearr_53460_55612 = state_53434__$1;
(statearr_53460_55612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (15))){
var inst_53407 = (state_53434[(2)]);
var state_53434__$1 = state_53434;
var statearr_53468_55613 = state_53434__$1;
(statearr_53468_55613[(2)] = inst_53407);

(statearr_53468_55613[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (21))){
var inst_53427 = (state_53434[(2)]);
var state_53434__$1 = (function (){var statearr_53471 = state_53434;
(statearr_53471[(9)] = inst_53427);

return statearr_53471;
})();
var statearr_53476_55616 = state_53434__$1;
(statearr_53476_55616[(2)] = null);

(statearr_53476_55616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (13))){
var inst_53389 = (state_53434[(10)]);
var inst_53391 = cljs.core.chunked_seq_QMARK_(inst_53389);
var state_53434__$1 = state_53434;
if(inst_53391){
var statearr_53480_55618 = state_53434__$1;
(statearr_53480_55618[(1)] = (16));

} else {
var statearr_53481_55622 = state_53434__$1;
(statearr_53481_55622[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (22))){
var inst_53419 = (state_53434[(2)]);
var state_53434__$1 = state_53434;
if(cljs.core.truth_(inst_53419)){
var statearr_53482_55623 = state_53434__$1;
(statearr_53482_55623[(1)] = (23));

} else {
var statearr_53483_55624 = state_53434__$1;
(statearr_53483_55624[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (6))){
var inst_53413 = (state_53434[(7)]);
var inst_53361 = (state_53434[(8)]);
var inst_53415 = (state_53434[(11)]);
var inst_53413__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_53361) : topic_fn.call(null, inst_53361));
var inst_53414 = cljs.core.deref(mults);
var inst_53415__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53414,inst_53413__$1);
var state_53434__$1 = (function (){var statearr_53484 = state_53434;
(statearr_53484[(7)] = inst_53413__$1);

(statearr_53484[(11)] = inst_53415__$1);

return statearr_53484;
})();
if(cljs.core.truth_(inst_53415__$1)){
var statearr_53485_55634 = state_53434__$1;
(statearr_53485_55634[(1)] = (19));

} else {
var statearr_53486_55635 = state_53434__$1;
(statearr_53486_55635[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (25))){
var inst_53424 = (state_53434[(2)]);
var state_53434__$1 = state_53434;
var statearr_53491_55641 = state_53434__$1;
(statearr_53491_55641[(2)] = inst_53424);

(statearr_53491_55641[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (17))){
var inst_53389 = (state_53434[(10)]);
var inst_53398 = cljs.core.first(inst_53389);
var inst_53399 = cljs.core.async.muxch_STAR_(inst_53398);
var inst_53400 = cljs.core.async.close_BANG_(inst_53399);
var inst_53401 = cljs.core.next(inst_53389);
var inst_53371 = inst_53401;
var inst_53372 = null;
var inst_53373 = (0);
var inst_53374 = (0);
var state_53434__$1 = (function (){var statearr_53498 = state_53434;
(statearr_53498[(12)] = inst_53400);

(statearr_53498[(13)] = inst_53372);

(statearr_53498[(14)] = inst_53371);

(statearr_53498[(15)] = inst_53373);

(statearr_53498[(16)] = inst_53374);

return statearr_53498;
})();
var statearr_53501_55644 = state_53434__$1;
(statearr_53501_55644[(2)] = null);

(statearr_53501_55644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (3))){
var inst_53432 = (state_53434[(2)]);
var state_53434__$1 = state_53434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53434__$1,inst_53432);
} else {
if((state_val_53435 === (12))){
var inst_53409 = (state_53434[(2)]);
var state_53434__$1 = state_53434;
var statearr_53503_55645 = state_53434__$1;
(statearr_53503_55645[(2)] = inst_53409);

(statearr_53503_55645[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (2))){
var state_53434__$1 = state_53434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53434__$1,(4),ch);
} else {
if((state_val_53435 === (23))){
var state_53434__$1 = state_53434;
var statearr_53506_55646 = state_53434__$1;
(statearr_53506_55646[(2)] = null);

(statearr_53506_55646[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (19))){
var inst_53361 = (state_53434[(8)]);
var inst_53415 = (state_53434[(11)]);
var inst_53417 = cljs.core.async.muxch_STAR_(inst_53415);
var state_53434__$1 = state_53434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53434__$1,(22),inst_53417,inst_53361);
} else {
if((state_val_53435 === (11))){
var inst_53371 = (state_53434[(14)]);
var inst_53389 = (state_53434[(10)]);
var inst_53389__$1 = cljs.core.seq(inst_53371);
var state_53434__$1 = (function (){var statearr_53511 = state_53434;
(statearr_53511[(10)] = inst_53389__$1);

return statearr_53511;
})();
if(inst_53389__$1){
var statearr_53512_55647 = state_53434__$1;
(statearr_53512_55647[(1)] = (13));

} else {
var statearr_53513_55648 = state_53434__$1;
(statearr_53513_55648[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (9))){
var inst_53411 = (state_53434[(2)]);
var state_53434__$1 = state_53434;
var statearr_53514_55649 = state_53434__$1;
(statearr_53514_55649[(2)] = inst_53411);

(statearr_53514_55649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (5))){
var inst_53368 = cljs.core.deref(mults);
var inst_53369 = cljs.core.vals(inst_53368);
var inst_53370 = cljs.core.seq(inst_53369);
var inst_53371 = inst_53370;
var inst_53372 = null;
var inst_53373 = (0);
var inst_53374 = (0);
var state_53434__$1 = (function (){var statearr_53517 = state_53434;
(statearr_53517[(13)] = inst_53372);

(statearr_53517[(14)] = inst_53371);

(statearr_53517[(15)] = inst_53373);

(statearr_53517[(16)] = inst_53374);

return statearr_53517;
})();
var statearr_53518_55652 = state_53434__$1;
(statearr_53518_55652[(2)] = null);

(statearr_53518_55652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (14))){
var state_53434__$1 = state_53434;
var statearr_53522_55654 = state_53434__$1;
(statearr_53522_55654[(2)] = null);

(statearr_53522_55654[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (16))){
var inst_53389 = (state_53434[(10)]);
var inst_53393 = cljs.core.chunk_first(inst_53389);
var inst_53394 = cljs.core.chunk_rest(inst_53389);
var inst_53395 = cljs.core.count(inst_53393);
var inst_53371 = inst_53394;
var inst_53372 = inst_53393;
var inst_53373 = inst_53395;
var inst_53374 = (0);
var state_53434__$1 = (function (){var statearr_53526 = state_53434;
(statearr_53526[(13)] = inst_53372);

(statearr_53526[(14)] = inst_53371);

(statearr_53526[(15)] = inst_53373);

(statearr_53526[(16)] = inst_53374);

return statearr_53526;
})();
var statearr_53528_55655 = state_53434__$1;
(statearr_53528_55655[(2)] = null);

(statearr_53528_55655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (10))){
var inst_53372 = (state_53434[(13)]);
var inst_53371 = (state_53434[(14)]);
var inst_53373 = (state_53434[(15)]);
var inst_53374 = (state_53434[(16)]);
var inst_53383 = cljs.core._nth(inst_53372,inst_53374);
var inst_53384 = cljs.core.async.muxch_STAR_(inst_53383);
var inst_53385 = cljs.core.async.close_BANG_(inst_53384);
var inst_53386 = (inst_53374 + (1));
var tmp53519 = inst_53372;
var tmp53520 = inst_53371;
var tmp53521 = inst_53373;
var inst_53371__$1 = tmp53520;
var inst_53372__$1 = tmp53519;
var inst_53373__$1 = tmp53521;
var inst_53374__$1 = inst_53386;
var state_53434__$1 = (function (){var statearr_53531 = state_53434;
(statearr_53531[(17)] = inst_53385);

(statearr_53531[(13)] = inst_53372__$1);

(statearr_53531[(14)] = inst_53371__$1);

(statearr_53531[(15)] = inst_53373__$1);

(statearr_53531[(16)] = inst_53374__$1);

return statearr_53531;
})();
var statearr_53532_55657 = state_53434__$1;
(statearr_53532_55657[(2)] = null);

(statearr_53532_55657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (18))){
var inst_53404 = (state_53434[(2)]);
var state_53434__$1 = state_53434;
var statearr_53533_55658 = state_53434__$1;
(statearr_53533_55658[(2)] = inst_53404);

(statearr_53533_55658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53435 === (8))){
var inst_53373 = (state_53434[(15)]);
var inst_53374 = (state_53434[(16)]);
var inst_53380 = (inst_53374 < inst_53373);
var inst_53381 = inst_53380;
var state_53434__$1 = state_53434;
if(cljs.core.truth_(inst_53381)){
var statearr_53536_55659 = state_53434__$1;
(statearr_53536_55659[(1)] = (10));

} else {
var statearr_53537_55660 = state_53434__$1;
(statearr_53537_55660[(1)] = (11));

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
var statearr_53538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53538[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_53538[(1)] = (1));

return statearr_53538;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_53434){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_53434);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e53539){var ex__10333__auto__ = e53539;
var statearr_53540_55661 = state_53434;
(statearr_53540_55661[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_53434[(4)]))){
var statearr_53543_55662 = state_53434;
(statearr_53543_55662[(1)] = cljs.core.first((state_53434[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55663 = state_53434;
state_53434 = G__55663;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_53434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_53434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_53545 = f__10425__auto__();
(statearr_53545[(6)] = c__10424__auto___55599);

return statearr_53545;
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
var G__53548 = arguments.length;
switch (G__53548) {
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
var G__53555 = arguments.length;
switch (G__53555) {
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
var G__53568 = arguments.length;
switch (G__53568) {
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
var c__10424__auto___55678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_53631){
var state_val_53632 = (state_53631[(1)]);
if((state_val_53632 === (7))){
var state_53631__$1 = state_53631;
var statearr_53634_55679 = state_53631__$1;
(statearr_53634_55679[(2)] = null);

(statearr_53634_55679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53632 === (1))){
var state_53631__$1 = state_53631;
var statearr_53639_55680 = state_53631__$1;
(statearr_53639_55680[(2)] = null);

(statearr_53639_55680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53632 === (4))){
var inst_53583 = (state_53631[(7)]);
var inst_53585 = (state_53631[(8)]);
var inst_53590 = (inst_53585 < inst_53583);
var state_53631__$1 = state_53631;
if(cljs.core.truth_(inst_53590)){
var statearr_53651_55682 = state_53631__$1;
(statearr_53651_55682[(1)] = (6));

} else {
var statearr_53652_55686 = state_53631__$1;
(statearr_53652_55686[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53632 === (15))){
var inst_53613 = (state_53631[(9)]);
var inst_53620 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_53613);
var state_53631__$1 = state_53631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53631__$1,(17),out,inst_53620);
} else {
if((state_val_53632 === (13))){
var inst_53613 = (state_53631[(9)]);
var inst_53613__$1 = (state_53631[(2)]);
var inst_53614 = cljs.core.some(cljs.core.nil_QMARK_,inst_53613__$1);
var state_53631__$1 = (function (){var statearr_53657 = state_53631;
(statearr_53657[(9)] = inst_53613__$1);

return statearr_53657;
})();
if(cljs.core.truth_(inst_53614)){
var statearr_53658_55687 = state_53631__$1;
(statearr_53658_55687[(1)] = (14));

} else {
var statearr_53659_55688 = state_53631__$1;
(statearr_53659_55688[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53632 === (6))){
var state_53631__$1 = state_53631;
var statearr_53662_55689 = state_53631__$1;
(statearr_53662_55689[(2)] = null);

(statearr_53662_55689[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53632 === (17))){
var inst_53622 = (state_53631[(2)]);
var state_53631__$1 = (function (){var statearr_53666 = state_53631;
(statearr_53666[(10)] = inst_53622);

return statearr_53666;
})();
var statearr_53673_55691 = state_53631__$1;
(statearr_53673_55691[(2)] = null);

(statearr_53673_55691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53632 === (3))){
var inst_53627 = (state_53631[(2)]);
var state_53631__$1 = state_53631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53631__$1,inst_53627);
} else {
if((state_val_53632 === (12))){
var _ = (function (){var statearr_53677 = state_53631;
(statearr_53677[(4)] = cljs.core.rest((state_53631[(4)])));

return statearr_53677;
})();
var state_53631__$1 = state_53631;
var ex53665 = (state_53631__$1[(2)]);
var statearr_53678_55693 = state_53631__$1;
(statearr_53678_55693[(5)] = ex53665);


if((ex53665 instanceof Object)){
var statearr_53681_55694 = state_53631__$1;
(statearr_53681_55694[(1)] = (11));

(statearr_53681_55694[(5)] = null);

} else {
throw ex53665;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53632 === (2))){
var inst_53582 = cljs.core.reset_BANG_(dctr,cnt);
var inst_53583 = cnt;
var inst_53585 = (0);
var state_53631__$1 = (function (){var statearr_53689 = state_53631;
(statearr_53689[(7)] = inst_53583);

(statearr_53689[(11)] = inst_53582);

(statearr_53689[(8)] = inst_53585);

return statearr_53689;
})();
var statearr_53691_55696 = state_53631__$1;
(statearr_53691_55696[(2)] = null);

(statearr_53691_55696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53632 === (11))){
var inst_53592 = (state_53631[(2)]);
var inst_53593 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_53631__$1 = (function (){var statearr_53695 = state_53631;
(statearr_53695[(12)] = inst_53592);

return statearr_53695;
})();
var statearr_53698_55697 = state_53631__$1;
(statearr_53698_55697[(2)] = inst_53593);

(statearr_53698_55697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53632 === (9))){
var inst_53585 = (state_53631[(8)]);
var _ = (function (){var statearr_53702 = state_53631;
(statearr_53702[(4)] = cljs.core.cons((12),(state_53631[(4)])));

return statearr_53702;
})();
var inst_53599 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_53585) : chs__$1.call(null, inst_53585));
var inst_53600 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_53585) : done.call(null, inst_53585));
var inst_53601 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_53599,inst_53600);
var ___$1 = (function (){var statearr_53706 = state_53631;
(statearr_53706[(4)] = cljs.core.rest((state_53631[(4)])));

return statearr_53706;
})();
var state_53631__$1 = state_53631;
var statearr_53707_55707 = state_53631__$1;
(statearr_53707_55707[(2)] = inst_53601);

(statearr_53707_55707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53632 === (5))){
var inst_53611 = (state_53631[(2)]);
var state_53631__$1 = (function (){var statearr_53710 = state_53631;
(statearr_53710[(13)] = inst_53611);

return statearr_53710;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53631__$1,(13),dchan);
} else {
if((state_val_53632 === (14))){
var inst_53617 = cljs.core.async.close_BANG_(out);
var state_53631__$1 = state_53631;
var statearr_53714_55711 = state_53631__$1;
(statearr_53714_55711[(2)] = inst_53617);

(statearr_53714_55711[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53632 === (16))){
var inst_53625 = (state_53631[(2)]);
var state_53631__$1 = state_53631;
var statearr_53720_55712 = state_53631__$1;
(statearr_53720_55712[(2)] = inst_53625);

(statearr_53720_55712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53632 === (10))){
var inst_53585 = (state_53631[(8)]);
var inst_53604 = (state_53631[(2)]);
var inst_53605 = (inst_53585 + (1));
var inst_53585__$1 = inst_53605;
var state_53631__$1 = (function (){var statearr_53722 = state_53631;
(statearr_53722[(14)] = inst_53604);

(statearr_53722[(8)] = inst_53585__$1);

return statearr_53722;
})();
var statearr_53723_55720 = state_53631__$1;
(statearr_53723_55720[(2)] = null);

(statearr_53723_55720[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53632 === (8))){
var inst_53609 = (state_53631[(2)]);
var state_53631__$1 = state_53631;
var statearr_53724_55721 = state_53631__$1;
(statearr_53724_55721[(2)] = inst_53609);

(statearr_53724_55721[(1)] = (5));


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
var statearr_53728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53728[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_53728[(1)] = (1));

return statearr_53728;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_53631){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_53631);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e53731){var ex__10333__auto__ = e53731;
var statearr_53733_55726 = state_53631;
(statearr_53733_55726[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_53631[(4)]))){
var statearr_53734_55730 = state_53631;
(statearr_53734_55730[(1)] = cljs.core.first((state_53631[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55731 = state_53631;
state_53631 = G__55731;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_53631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_53631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_53738 = f__10425__auto__();
(statearr_53738[(6)] = c__10424__auto___55678);

return statearr_53738;
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
var G__53748 = arguments.length;
switch (G__53748) {
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
var c__10424__auto___55737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_53787){
var state_val_53788 = (state_53787[(1)]);
if((state_val_53788 === (7))){
var inst_53767 = (state_53787[(7)]);
var inst_53766 = (state_53787[(8)]);
var inst_53766__$1 = (state_53787[(2)]);
var inst_53767__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53766__$1,(0),null);
var inst_53768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53766__$1,(1),null);
var inst_53769 = (inst_53767__$1 == null);
var state_53787__$1 = (function (){var statearr_53789 = state_53787;
(statearr_53789[(7)] = inst_53767__$1);

(statearr_53789[(9)] = inst_53768);

(statearr_53789[(8)] = inst_53766__$1);

return statearr_53789;
})();
if(cljs.core.truth_(inst_53769)){
var statearr_53790_55748 = state_53787__$1;
(statearr_53790_55748[(1)] = (8));

} else {
var statearr_53791_55749 = state_53787__$1;
(statearr_53791_55749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53788 === (1))){
var inst_53756 = cljs.core.vec(chs);
var inst_53757 = inst_53756;
var state_53787__$1 = (function (){var statearr_53792 = state_53787;
(statearr_53792[(10)] = inst_53757);

return statearr_53792;
})();
var statearr_53793_55750 = state_53787__$1;
(statearr_53793_55750[(2)] = null);

(statearr_53793_55750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53788 === (4))){
var inst_53757 = (state_53787[(10)]);
var state_53787__$1 = state_53787;
return cljs.core.async.ioc_alts_BANG_(state_53787__$1,(7),inst_53757);
} else {
if((state_val_53788 === (6))){
var inst_53783 = (state_53787[(2)]);
var state_53787__$1 = state_53787;
var statearr_53808_55755 = state_53787__$1;
(statearr_53808_55755[(2)] = inst_53783);

(statearr_53808_55755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53788 === (3))){
var inst_53785 = (state_53787[(2)]);
var state_53787__$1 = state_53787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53787__$1,inst_53785);
} else {
if((state_val_53788 === (2))){
var inst_53757 = (state_53787[(10)]);
var inst_53759 = cljs.core.count(inst_53757);
var inst_53760 = (inst_53759 > (0));
var state_53787__$1 = state_53787;
if(cljs.core.truth_(inst_53760)){
var statearr_53821_55756 = state_53787__$1;
(statearr_53821_55756[(1)] = (4));

} else {
var statearr_53822_55757 = state_53787__$1;
(statearr_53822_55757[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53788 === (11))){
var inst_53757 = (state_53787[(10)]);
var inst_53776 = (state_53787[(2)]);
var tmp53816 = inst_53757;
var inst_53757__$1 = tmp53816;
var state_53787__$1 = (function (){var statearr_53823 = state_53787;
(statearr_53823[(10)] = inst_53757__$1);

(statearr_53823[(11)] = inst_53776);

return statearr_53823;
})();
var statearr_53826_55758 = state_53787__$1;
(statearr_53826_55758[(2)] = null);

(statearr_53826_55758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53788 === (9))){
var inst_53767 = (state_53787[(7)]);
var state_53787__$1 = state_53787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53787__$1,(11),out,inst_53767);
} else {
if((state_val_53788 === (5))){
var inst_53781 = cljs.core.async.close_BANG_(out);
var state_53787__$1 = state_53787;
var statearr_53828_55761 = state_53787__$1;
(statearr_53828_55761[(2)] = inst_53781);

(statearr_53828_55761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53788 === (10))){
var inst_53779 = (state_53787[(2)]);
var state_53787__$1 = state_53787;
var statearr_53830_55766 = state_53787__$1;
(statearr_53830_55766[(2)] = inst_53779);

(statearr_53830_55766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53788 === (8))){
var inst_53757 = (state_53787[(10)]);
var inst_53767 = (state_53787[(7)]);
var inst_53768 = (state_53787[(9)]);
var inst_53766 = (state_53787[(8)]);
var inst_53771 = (function (){var cs = inst_53757;
var vec__53762 = inst_53766;
var v = inst_53767;
var c = inst_53768;
return (function (p1__53741_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__53741_SHARP_);
});
})();
var inst_53772 = cljs.core.filterv(inst_53771,inst_53757);
var inst_53757__$1 = inst_53772;
var state_53787__$1 = (function (){var statearr_53832 = state_53787;
(statearr_53832[(10)] = inst_53757__$1);

return statearr_53832;
})();
var statearr_53833_55777 = state_53787__$1;
(statearr_53833_55777[(2)] = null);

(statearr_53833_55777[(1)] = (2));


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
var statearr_53838 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53838[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_53838[(1)] = (1));

return statearr_53838;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_53787){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_53787);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e53840){var ex__10333__auto__ = e53840;
var statearr_53842_55783 = state_53787;
(statearr_53842_55783[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_53787[(4)]))){
var statearr_53843_55784 = state_53787;
(statearr_53843_55784[(1)] = cljs.core.first((state_53787[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55785 = state_53787;
state_53787 = G__55785;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_53787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_53787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_53846 = f__10425__auto__();
(statearr_53846[(6)] = c__10424__auto___55737);

return statearr_53846;
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
var G__53851 = arguments.length;
switch (G__53851) {
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
var c__10424__auto___55789 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_53882){
var state_val_53883 = (state_53882[(1)]);
if((state_val_53883 === (7))){
var inst_53862 = (state_53882[(7)]);
var inst_53862__$1 = (state_53882[(2)]);
var inst_53863 = (inst_53862__$1 == null);
var inst_53864 = cljs.core.not(inst_53863);
var state_53882__$1 = (function (){var statearr_53889 = state_53882;
(statearr_53889[(7)] = inst_53862__$1);

return statearr_53889;
})();
if(inst_53864){
var statearr_53891_55794 = state_53882__$1;
(statearr_53891_55794[(1)] = (8));

} else {
var statearr_53892_55796 = state_53882__$1;
(statearr_53892_55796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (1))){
var inst_53857 = (0);
var state_53882__$1 = (function (){var statearr_53893 = state_53882;
(statearr_53893[(8)] = inst_53857);

return statearr_53893;
})();
var statearr_53894_55797 = state_53882__$1;
(statearr_53894_55797[(2)] = null);

(statearr_53894_55797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (4))){
var state_53882__$1 = state_53882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53882__$1,(7),ch);
} else {
if((state_val_53883 === (6))){
var inst_53877 = (state_53882[(2)]);
var state_53882__$1 = state_53882;
var statearr_53897_55798 = state_53882__$1;
(statearr_53897_55798[(2)] = inst_53877);

(statearr_53897_55798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (3))){
var inst_53879 = (state_53882[(2)]);
var inst_53880 = cljs.core.async.close_BANG_(out);
var state_53882__$1 = (function (){var statearr_53899 = state_53882;
(statearr_53899[(9)] = inst_53879);

return statearr_53899;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53882__$1,inst_53880);
} else {
if((state_val_53883 === (2))){
var inst_53857 = (state_53882[(8)]);
var inst_53859 = (inst_53857 < n);
var state_53882__$1 = state_53882;
if(cljs.core.truth_(inst_53859)){
var statearr_53900_55799 = state_53882__$1;
(statearr_53900_55799[(1)] = (4));

} else {
var statearr_53901_55800 = state_53882__$1;
(statearr_53901_55800[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (11))){
var inst_53857 = (state_53882[(8)]);
var inst_53867 = (state_53882[(2)]);
var inst_53870 = (inst_53857 + (1));
var inst_53857__$1 = inst_53870;
var state_53882__$1 = (function (){var statearr_53903 = state_53882;
(statearr_53903[(8)] = inst_53857__$1);

(statearr_53903[(10)] = inst_53867);

return statearr_53903;
})();
var statearr_53904_55802 = state_53882__$1;
(statearr_53904_55802[(2)] = null);

(statearr_53904_55802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (9))){
var state_53882__$1 = state_53882;
var statearr_53908_55803 = state_53882__$1;
(statearr_53908_55803[(2)] = null);

(statearr_53908_55803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (5))){
var state_53882__$1 = state_53882;
var statearr_53909_55804 = state_53882__$1;
(statearr_53909_55804[(2)] = null);

(statearr_53909_55804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (10))){
var inst_53874 = (state_53882[(2)]);
var state_53882__$1 = state_53882;
var statearr_53910_55805 = state_53882__$1;
(statearr_53910_55805[(2)] = inst_53874);

(statearr_53910_55805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (8))){
var inst_53862 = (state_53882[(7)]);
var state_53882__$1 = state_53882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53882__$1,(11),out,inst_53862);
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
var statearr_53914 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53914[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_53914[(1)] = (1));

return statearr_53914;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_53882){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_53882);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e53915){var ex__10333__auto__ = e53915;
var statearr_53916_55810 = state_53882;
(statearr_53916_55810[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_53882[(4)]))){
var statearr_53917_55812 = state_53882;
(statearr_53917_55812[(1)] = cljs.core.first((state_53882[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55817 = state_53882;
state_53882 = G__55817;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_53882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_53882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_53918 = f__10425__auto__();
(statearr_53918[(6)] = c__10424__auto___55789);

return statearr_53918;
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
cljs.core.async.t_cljs$core$async53934 = (function (f,ch,meta53924,_,fn1,meta53935){
this.f = f;
this.ch = ch;
this.meta53924 = meta53924;
this._ = _;
this.fn1 = fn1;
this.meta53935 = meta53935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53936,meta53935__$1){
var self__ = this;
var _53936__$1 = this;
return (new cljs.core.async.t_cljs$core$async53934(self__.f,self__.ch,self__.meta53924,self__._,self__.fn1,meta53935__$1));
}));

(cljs.core.async.t_cljs$core$async53934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53936){
var self__ = this;
var _53936__$1 = this;
return self__.meta53935;
}));

(cljs.core.async.t_cljs$core$async53934.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async53934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async53934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__53921_SHARP_){
var G__53938 = (((p1__53921_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__53921_SHARP_) : self__.f.call(null, p1__53921_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__53938) : f1.call(null, G__53938));
});
}));

(cljs.core.async.t_cljs$core$async53934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53924","meta53924",595706841,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async53923","cljs.core.async/t_cljs$core$async53923",-1816393968,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta53935","meta53935",1178170157,null)], null);
}));

(cljs.core.async.t_cljs$core$async53934.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53934");

(cljs.core.async.t_cljs$core$async53934.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async53934");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53934.
 */
cljs.core.async.__GT_t_cljs$core$async53934 = (function cljs$core$async$__GT_t_cljs$core$async53934(f,ch,meta53924,_,fn1,meta53935){
return (new cljs.core.async.t_cljs$core$async53934(f,ch,meta53924,_,fn1,meta53935));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53923 = (function (f,ch,meta53924){
this.f = f;
this.ch = ch;
this.meta53924 = meta53924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53925,meta53924__$1){
var self__ = this;
var _53925__$1 = this;
return (new cljs.core.async.t_cljs$core$async53923(self__.f,self__.ch,meta53924__$1));
}));

(cljs.core.async.t_cljs$core$async53923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53925){
var self__ = this;
var _53925__$1 = this;
return self__.meta53924;
}));

(cljs.core.async.t_cljs$core$async53923.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53923.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53923.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53923.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53923.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async53934(self__.f,self__.ch,self__.meta53924,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__53942 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__53942) : self__.f.call(null, G__53942));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async53923.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53923.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async53923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53924","meta53924",595706841,null)], null);
}));

(cljs.core.async.t_cljs$core$async53923.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53923");

(cljs.core.async.t_cljs$core$async53923.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async53923");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53923.
 */
cljs.core.async.__GT_t_cljs$core$async53923 = (function cljs$core$async$__GT_t_cljs$core$async53923(f,ch,meta53924){
return (new cljs.core.async.t_cljs$core$async53923(f,ch,meta53924));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async53923(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53957 = (function (f,ch,meta53958){
this.f = f;
this.ch = ch;
this.meta53958 = meta53958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53959,meta53958__$1){
var self__ = this;
var _53959__$1 = this;
return (new cljs.core.async.t_cljs$core$async53957(self__.f,self__.ch,meta53958__$1));
}));

(cljs.core.async.t_cljs$core$async53957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53959){
var self__ = this;
var _53959__$1 = this;
return self__.meta53958;
}));

(cljs.core.async.t_cljs$core$async53957.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53957.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53957.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53957.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async53957.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53957.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async53957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53958","meta53958",115922331,null)], null);
}));

(cljs.core.async.t_cljs$core$async53957.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53957");

(cljs.core.async.t_cljs$core$async53957.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async53957");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53957.
 */
cljs.core.async.__GT_t_cljs$core$async53957 = (function cljs$core$async$__GT_t_cljs$core$async53957(f,ch,meta53958){
return (new cljs.core.async.t_cljs$core$async53957(f,ch,meta53958));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async53957(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53971 = (function (p,ch,meta53972){
this.p = p;
this.ch = ch;
this.meta53972 = meta53972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53973,meta53972__$1){
var self__ = this;
var _53973__$1 = this;
return (new cljs.core.async.t_cljs$core$async53971(self__.p,self__.ch,meta53972__$1));
}));

(cljs.core.async.t_cljs$core$async53971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53973){
var self__ = this;
var _53973__$1 = this;
return self__.meta53972;
}));

(cljs.core.async.t_cljs$core$async53971.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53971.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53971.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53971.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53971.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async53971.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53971.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async53971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53972","meta53972",-1822485000,null)], null);
}));

(cljs.core.async.t_cljs$core$async53971.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53971");

(cljs.core.async.t_cljs$core$async53971.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async53971");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53971.
 */
cljs.core.async.__GT_t_cljs$core$async53971 = (function cljs$core$async$__GT_t_cljs$core$async53971(p,ch,meta53972){
return (new cljs.core.async.t_cljs$core$async53971(p,ch,meta53972));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async53971(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__53995 = arguments.length;
switch (G__53995) {
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
var c__10424__auto___55841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_54021){
var state_val_54022 = (state_54021[(1)]);
if((state_val_54022 === (7))){
var inst_54017 = (state_54021[(2)]);
var state_54021__$1 = state_54021;
var statearr_54027_55846 = state_54021__$1;
(statearr_54027_55846[(2)] = inst_54017);

(statearr_54027_55846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54022 === (1))){
var state_54021__$1 = state_54021;
var statearr_54030_55849 = state_54021__$1;
(statearr_54030_55849[(2)] = null);

(statearr_54030_55849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54022 === (4))){
var inst_54003 = (state_54021[(7)]);
var inst_54003__$1 = (state_54021[(2)]);
var inst_54004 = (inst_54003__$1 == null);
var state_54021__$1 = (function (){var statearr_54032 = state_54021;
(statearr_54032[(7)] = inst_54003__$1);

return statearr_54032;
})();
if(cljs.core.truth_(inst_54004)){
var statearr_54035_55850 = state_54021__$1;
(statearr_54035_55850[(1)] = (5));

} else {
var statearr_54038_55851 = state_54021__$1;
(statearr_54038_55851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54022 === (6))){
var inst_54003 = (state_54021[(7)]);
var inst_54008 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_54003) : p.call(null, inst_54003));
var state_54021__$1 = state_54021;
if(cljs.core.truth_(inst_54008)){
var statearr_54041_55857 = state_54021__$1;
(statearr_54041_55857[(1)] = (8));

} else {
var statearr_54043_55858 = state_54021__$1;
(statearr_54043_55858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54022 === (3))){
var inst_54019 = (state_54021[(2)]);
var state_54021__$1 = state_54021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54021__$1,inst_54019);
} else {
if((state_val_54022 === (2))){
var state_54021__$1 = state_54021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54021__$1,(4),ch);
} else {
if((state_val_54022 === (11))){
var inst_54011 = (state_54021[(2)]);
var state_54021__$1 = state_54021;
var statearr_54046_55863 = state_54021__$1;
(statearr_54046_55863[(2)] = inst_54011);

(statearr_54046_55863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54022 === (9))){
var state_54021__$1 = state_54021;
var statearr_54047_55864 = state_54021__$1;
(statearr_54047_55864[(2)] = null);

(statearr_54047_55864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54022 === (5))){
var inst_54006 = cljs.core.async.close_BANG_(out);
var state_54021__$1 = state_54021;
var statearr_54049_55865 = state_54021__$1;
(statearr_54049_55865[(2)] = inst_54006);

(statearr_54049_55865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54022 === (10))){
var inst_54014 = (state_54021[(2)]);
var state_54021__$1 = (function (){var statearr_54051 = state_54021;
(statearr_54051[(8)] = inst_54014);

return statearr_54051;
})();
var statearr_54052_55867 = state_54021__$1;
(statearr_54052_55867[(2)] = null);

(statearr_54052_55867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54022 === (8))){
var inst_54003 = (state_54021[(7)]);
var state_54021__$1 = state_54021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54021__$1,(11),out,inst_54003);
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
var statearr_54054 = [null,null,null,null,null,null,null,null,null];
(statearr_54054[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_54054[(1)] = (1));

return statearr_54054;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_54021){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_54021);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e54055){var ex__10333__auto__ = e54055;
var statearr_54056_55869 = state_54021;
(statearr_54056_55869[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_54021[(4)]))){
var statearr_54060_55870 = state_54021;
(statearr_54060_55870[(1)] = cljs.core.first((state_54021[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55871 = state_54021;
state_54021 = G__55871;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_54021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_54021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_54061 = f__10425__auto__();
(statearr_54061[(6)] = c__10424__auto___55841);

return statearr_54061;
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
var G__54073 = arguments.length;
switch (G__54073) {
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
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_54164){
var state_val_54165 = (state_54164[(1)]);
if((state_val_54165 === (7))){
var inst_54155 = (state_54164[(2)]);
var state_54164__$1 = state_54164;
var statearr_54172_55878 = state_54164__$1;
(statearr_54172_55878[(2)] = inst_54155);

(statearr_54172_55878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54165 === (20))){
var inst_54124 = (state_54164[(7)]);
var inst_54135 = (state_54164[(2)]);
var inst_54136 = cljs.core.next(inst_54124);
var inst_54109 = inst_54136;
var inst_54110 = null;
var inst_54111 = (0);
var inst_54112 = (0);
var state_54164__$1 = (function (){var statearr_54176 = state_54164;
(statearr_54176[(8)] = inst_54109);

(statearr_54176[(9)] = inst_54111);

(statearr_54176[(10)] = inst_54135);

(statearr_54176[(11)] = inst_54110);

(statearr_54176[(12)] = inst_54112);

return statearr_54176;
})();
var statearr_54181_55880 = state_54164__$1;
(statearr_54181_55880[(2)] = null);

(statearr_54181_55880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54165 === (1))){
var state_54164__$1 = state_54164;
var statearr_54182_55882 = state_54164__$1;
(statearr_54182_55882[(2)] = null);

(statearr_54182_55882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54165 === (4))){
var inst_54095 = (state_54164[(13)]);
var inst_54095__$1 = (state_54164[(2)]);
var inst_54096 = (inst_54095__$1 == null);
var state_54164__$1 = (function (){var statearr_54184 = state_54164;
(statearr_54184[(13)] = inst_54095__$1);

return statearr_54184;
})();
if(cljs.core.truth_(inst_54096)){
var statearr_54186_55886 = state_54164__$1;
(statearr_54186_55886[(1)] = (5));

} else {
var statearr_54191_55887 = state_54164__$1;
(statearr_54191_55887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54165 === (15))){
var state_54164__$1 = state_54164;
var statearr_54196_55888 = state_54164__$1;
(statearr_54196_55888[(2)] = null);

(statearr_54196_55888[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54165 === (21))){
var state_54164__$1 = state_54164;
var statearr_54197_55889 = state_54164__$1;
(statearr_54197_55889[(2)] = null);

(statearr_54197_55889[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54165 === (13))){
var inst_54109 = (state_54164[(8)]);
var inst_54111 = (state_54164[(9)]);
var inst_54110 = (state_54164[(11)]);
var inst_54112 = (state_54164[(12)]);
var inst_54119 = (state_54164[(2)]);
var inst_54120 = (inst_54112 + (1));
var tmp54193 = inst_54109;
var tmp54194 = inst_54111;
var tmp54195 = inst_54110;
var inst_54109__$1 = tmp54193;
var inst_54110__$1 = tmp54195;
var inst_54111__$1 = tmp54194;
var inst_54112__$1 = inst_54120;
var state_54164__$1 = (function (){var statearr_54202 = state_54164;
(statearr_54202[(8)] = inst_54109__$1);

(statearr_54202[(9)] = inst_54111__$1);

(statearr_54202[(11)] = inst_54110__$1);

(statearr_54202[(14)] = inst_54119);

(statearr_54202[(12)] = inst_54112__$1);

return statearr_54202;
})();
var statearr_54205_55890 = state_54164__$1;
(statearr_54205_55890[(2)] = null);

(statearr_54205_55890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54165 === (22))){
var state_54164__$1 = state_54164;
var statearr_54207_55891 = state_54164__$1;
(statearr_54207_55891[(2)] = null);

(statearr_54207_55891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54165 === (6))){
var inst_54095 = (state_54164[(13)]);
var inst_54107 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_54095) : f.call(null, inst_54095));
var inst_54108 = cljs.core.seq(inst_54107);
var inst_54109 = inst_54108;
var inst_54110 = null;
var inst_54111 = (0);
var inst_54112 = (0);
var state_54164__$1 = (function (){var statearr_54209 = state_54164;
(statearr_54209[(8)] = inst_54109);

(statearr_54209[(9)] = inst_54111);

(statearr_54209[(11)] = inst_54110);

(statearr_54209[(12)] = inst_54112);

return statearr_54209;
})();
var statearr_54210_55900 = state_54164__$1;
(statearr_54210_55900[(2)] = null);

(statearr_54210_55900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54165 === (17))){
var inst_54124 = (state_54164[(7)]);
var inst_54128 = cljs.core.chunk_first(inst_54124);
var inst_54129 = cljs.core.chunk_rest(inst_54124);
var inst_54130 = cljs.core.count(inst_54128);
var inst_54109 = inst_54129;
var inst_54110 = inst_54128;
var inst_54111 = inst_54130;
var inst_54112 = (0);
var state_54164__$1 = (function (){var statearr_54215 = state_54164;
(statearr_54215[(8)] = inst_54109);

(statearr_54215[(9)] = inst_54111);

(statearr_54215[(11)] = inst_54110);

(statearr_54215[(12)] = inst_54112);

return statearr_54215;
})();
var statearr_54216_55903 = state_54164__$1;
(statearr_54216_55903[(2)] = null);

(statearr_54216_55903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54165 === (3))){
var inst_54158 = (state_54164[(2)]);
var state_54164__$1 = state_54164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54164__$1,inst_54158);
} else {
if((state_val_54165 === (12))){
var inst_54144 = (state_54164[(2)]);
var state_54164__$1 = state_54164;
var statearr_54222_55908 = state_54164__$1;
(statearr_54222_55908[(2)] = inst_54144);

(statearr_54222_55908[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54165 === (2))){
var state_54164__$1 = state_54164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54164__$1,(4),in$);
} else {
if((state_val_54165 === (23))){
var inst_54153 = (state_54164[(2)]);
var state_54164__$1 = state_54164;
var statearr_54231_55909 = state_54164__$1;
(statearr_54231_55909[(2)] = inst_54153);

(statearr_54231_55909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54165 === (19))){
var inst_54139 = (state_54164[(2)]);
var state_54164__$1 = state_54164;
var statearr_54232_55911 = state_54164__$1;
(statearr_54232_55911[(2)] = inst_54139);

(statearr_54232_55911[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54165 === (11))){
var inst_54124 = (state_54164[(7)]);
var inst_54109 = (state_54164[(8)]);
var inst_54124__$1 = cljs.core.seq(inst_54109);
var state_54164__$1 = (function (){var statearr_54235 = state_54164;
(statearr_54235[(7)] = inst_54124__$1);

return statearr_54235;
})();
if(inst_54124__$1){
var statearr_54236_55912 = state_54164__$1;
(statearr_54236_55912[(1)] = (14));

} else {
var statearr_54237_55913 = state_54164__$1;
(statearr_54237_55913[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54165 === (9))){
var inst_54146 = (state_54164[(2)]);
var inst_54147 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_54164__$1 = (function (){var statearr_54243 = state_54164;
(statearr_54243[(15)] = inst_54146);

return statearr_54243;
})();
if(cljs.core.truth_(inst_54147)){
var statearr_54247_55915 = state_54164__$1;
(statearr_54247_55915[(1)] = (21));

} else {
var statearr_54248_55916 = state_54164__$1;
(statearr_54248_55916[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54165 === (5))){
var inst_54098 = cljs.core.async.close_BANG_(out);
var state_54164__$1 = state_54164;
var statearr_54250_55918 = state_54164__$1;
(statearr_54250_55918[(2)] = inst_54098);

(statearr_54250_55918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54165 === (14))){
var inst_54124 = (state_54164[(7)]);
var inst_54126 = cljs.core.chunked_seq_QMARK_(inst_54124);
var state_54164__$1 = state_54164;
if(inst_54126){
var statearr_54253_55920 = state_54164__$1;
(statearr_54253_55920[(1)] = (17));

} else {
var statearr_54257_55921 = state_54164__$1;
(statearr_54257_55921[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54165 === (16))){
var inst_54142 = (state_54164[(2)]);
var state_54164__$1 = state_54164;
var statearr_54258_55922 = state_54164__$1;
(statearr_54258_55922[(2)] = inst_54142);

(statearr_54258_55922[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54165 === (10))){
var inst_54110 = (state_54164[(11)]);
var inst_54112 = (state_54164[(12)]);
var inst_54117 = cljs.core._nth(inst_54110,inst_54112);
var state_54164__$1 = state_54164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54164__$1,(13),out,inst_54117);
} else {
if((state_val_54165 === (18))){
var inst_54124 = (state_54164[(7)]);
var inst_54133 = cljs.core.first(inst_54124);
var state_54164__$1 = state_54164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54164__$1,(20),out,inst_54133);
} else {
if((state_val_54165 === (8))){
var inst_54111 = (state_54164[(9)]);
var inst_54112 = (state_54164[(12)]);
var inst_54114 = (inst_54112 < inst_54111);
var inst_54115 = inst_54114;
var state_54164__$1 = state_54164;
if(cljs.core.truth_(inst_54115)){
var statearr_54263_55931 = state_54164__$1;
(statearr_54263_55931[(1)] = (10));

} else {
var statearr_54264_55932 = state_54164__$1;
(statearr_54264_55932[(1)] = (11));

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
var statearr_54265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54265[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__);

(statearr_54265[(1)] = (1));

return statearr_54265;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____1 = (function (state_54164){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_54164);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e54269){var ex__10333__auto__ = e54269;
var statearr_54270_55933 = state_54164;
(statearr_54270_55933[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_54164[(4)]))){
var statearr_54273_55934 = state_54164;
(statearr_54273_55934[(1)] = cljs.core.first((state_54164[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55935 = state_54164;
state_54164 = G__55935;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__ = function(state_54164){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____1.call(this,state_54164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_54280 = f__10425__auto__();
(statearr_54280[(6)] = c__10424__auto__);

return statearr_54280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));

return c__10424__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__54300 = arguments.length;
switch (G__54300) {
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
var G__54309 = arguments.length;
switch (G__54309) {
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
var G__54316 = arguments.length;
switch (G__54316) {
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
var c__10424__auto___55940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_54348){
var state_val_54349 = (state_54348[(1)]);
if((state_val_54349 === (7))){
var inst_54339 = (state_54348[(2)]);
var state_54348__$1 = state_54348;
var statearr_54357_55941 = state_54348__$1;
(statearr_54357_55941[(2)] = inst_54339);

(statearr_54357_55941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54349 === (1))){
var inst_54317 = null;
var state_54348__$1 = (function (){var statearr_54358 = state_54348;
(statearr_54358[(7)] = inst_54317);

return statearr_54358;
})();
var statearr_54359_55943 = state_54348__$1;
(statearr_54359_55943[(2)] = null);

(statearr_54359_55943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54349 === (4))){
var inst_54320 = (state_54348[(8)]);
var inst_54320__$1 = (state_54348[(2)]);
var inst_54325 = (inst_54320__$1 == null);
var inst_54326 = cljs.core.not(inst_54325);
var state_54348__$1 = (function (){var statearr_54360 = state_54348;
(statearr_54360[(8)] = inst_54320__$1);

return statearr_54360;
})();
if(inst_54326){
var statearr_54362_55944 = state_54348__$1;
(statearr_54362_55944[(1)] = (5));

} else {
var statearr_54363_55945 = state_54348__$1;
(statearr_54363_55945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54349 === (6))){
var state_54348__$1 = state_54348;
var statearr_54364_55949 = state_54348__$1;
(statearr_54364_55949[(2)] = null);

(statearr_54364_55949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54349 === (3))){
var inst_54341 = (state_54348[(2)]);
var inst_54342 = cljs.core.async.close_BANG_(out);
var state_54348__$1 = (function (){var statearr_54366 = state_54348;
(statearr_54366[(9)] = inst_54341);

return statearr_54366;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54348__$1,inst_54342);
} else {
if((state_val_54349 === (2))){
var state_54348__$1 = state_54348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54348__$1,(4),ch);
} else {
if((state_val_54349 === (11))){
var inst_54320 = (state_54348[(8)]);
var inst_54333 = (state_54348[(2)]);
var inst_54317 = inst_54320;
var state_54348__$1 = (function (){var statearr_54371 = state_54348;
(statearr_54371[(10)] = inst_54333);

(statearr_54371[(7)] = inst_54317);

return statearr_54371;
})();
var statearr_54372_55953 = state_54348__$1;
(statearr_54372_55953[(2)] = null);

(statearr_54372_55953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54349 === (9))){
var inst_54320 = (state_54348[(8)]);
var state_54348__$1 = state_54348;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54348__$1,(11),out,inst_54320);
} else {
if((state_val_54349 === (5))){
var inst_54320 = (state_54348[(8)]);
var inst_54317 = (state_54348[(7)]);
var inst_54328 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54320,inst_54317);
var state_54348__$1 = state_54348;
if(inst_54328){
var statearr_54389_55954 = state_54348__$1;
(statearr_54389_55954[(1)] = (8));

} else {
var statearr_54390_55955 = state_54348__$1;
(statearr_54390_55955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54349 === (10))){
var inst_54336 = (state_54348[(2)]);
var state_54348__$1 = state_54348;
var statearr_54397_55958 = state_54348__$1;
(statearr_54397_55958[(2)] = inst_54336);

(statearr_54397_55958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54349 === (8))){
var inst_54317 = (state_54348[(7)]);
var tmp54379 = inst_54317;
var inst_54317__$1 = tmp54379;
var state_54348__$1 = (function (){var statearr_54401 = state_54348;
(statearr_54401[(7)] = inst_54317__$1);

return statearr_54401;
})();
var statearr_54404_55961 = state_54348__$1;
(statearr_54404_55961[(2)] = null);

(statearr_54404_55961[(1)] = (2));


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
var statearr_54420 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54420[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_54420[(1)] = (1));

return statearr_54420;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_54348){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_54348);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e54426){var ex__10333__auto__ = e54426;
var statearr_54429_55967 = state_54348;
(statearr_54429_55967[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_54348[(4)]))){
var statearr_54431_55968 = state_54348;
(statearr_54431_55968[(1)] = cljs.core.first((state_54348[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55969 = state_54348;
state_54348 = G__55969;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_54348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_54348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_54447 = f__10425__auto__();
(statearr_54447[(6)] = c__10424__auto___55940);

return statearr_54447;
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
var G__54471 = arguments.length;
switch (G__54471) {
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
var c__10424__auto___55973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_54542){
var state_val_54543 = (state_54542[(1)]);
if((state_val_54543 === (7))){
var inst_54537 = (state_54542[(2)]);
var state_54542__$1 = state_54542;
var statearr_54546_55978 = state_54542__$1;
(statearr_54546_55978[(2)] = inst_54537);

(statearr_54546_55978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54543 === (1))){
var inst_54499 = (new Array(n));
var inst_54500 = inst_54499;
var inst_54501 = (0);
var state_54542__$1 = (function (){var statearr_54549 = state_54542;
(statearr_54549[(7)] = inst_54500);

(statearr_54549[(8)] = inst_54501);

return statearr_54549;
})();
var statearr_54552_55980 = state_54542__$1;
(statearr_54552_55980[(2)] = null);

(statearr_54552_55980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54543 === (4))){
var inst_54505 = (state_54542[(9)]);
var inst_54505__$1 = (state_54542[(2)]);
var inst_54506 = (inst_54505__$1 == null);
var inst_54507 = cljs.core.not(inst_54506);
var state_54542__$1 = (function (){var statearr_54556 = state_54542;
(statearr_54556[(9)] = inst_54505__$1);

return statearr_54556;
})();
if(inst_54507){
var statearr_54557_55985 = state_54542__$1;
(statearr_54557_55985[(1)] = (5));

} else {
var statearr_54559_55986 = state_54542__$1;
(statearr_54559_55986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54543 === (15))){
var inst_54531 = (state_54542[(2)]);
var state_54542__$1 = state_54542;
var statearr_54564_55987 = state_54542__$1;
(statearr_54564_55987[(2)] = inst_54531);

(statearr_54564_55987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54543 === (13))){
var state_54542__$1 = state_54542;
var statearr_54566_55992 = state_54542__$1;
(statearr_54566_55992[(2)] = null);

(statearr_54566_55992[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54543 === (6))){
var inst_54501 = (state_54542[(8)]);
var inst_54527 = (inst_54501 > (0));
var state_54542__$1 = state_54542;
if(cljs.core.truth_(inst_54527)){
var statearr_54567_55994 = state_54542__$1;
(statearr_54567_55994[(1)] = (12));

} else {
var statearr_54568_55995 = state_54542__$1;
(statearr_54568_55995[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54543 === (3))){
var inst_54539 = (state_54542[(2)]);
var state_54542__$1 = state_54542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54542__$1,inst_54539);
} else {
if((state_val_54543 === (12))){
var inst_54500 = (state_54542[(7)]);
var inst_54529 = cljs.core.vec(inst_54500);
var state_54542__$1 = state_54542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54542__$1,(15),out,inst_54529);
} else {
if((state_val_54543 === (2))){
var state_54542__$1 = state_54542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54542__$1,(4),ch);
} else {
if((state_val_54543 === (11))){
var inst_54520 = (state_54542[(2)]);
var inst_54521 = (new Array(n));
var inst_54500 = inst_54521;
var inst_54501 = (0);
var state_54542__$1 = (function (){var statearr_54575 = state_54542;
(statearr_54575[(10)] = inst_54520);

(statearr_54575[(7)] = inst_54500);

(statearr_54575[(8)] = inst_54501);

return statearr_54575;
})();
var statearr_54576_56000 = state_54542__$1;
(statearr_54576_56000[(2)] = null);

(statearr_54576_56000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54543 === (9))){
var inst_54500 = (state_54542[(7)]);
var inst_54518 = cljs.core.vec(inst_54500);
var state_54542__$1 = state_54542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54542__$1,(11),out,inst_54518);
} else {
if((state_val_54543 === (5))){
var inst_54500 = (state_54542[(7)]);
var inst_54512 = (state_54542[(11)]);
var inst_54505 = (state_54542[(9)]);
var inst_54501 = (state_54542[(8)]);
var inst_54511 = (inst_54500[inst_54501] = inst_54505);
var inst_54512__$1 = (inst_54501 + (1));
var inst_54513 = (inst_54512__$1 < n);
var state_54542__$1 = (function (){var statearr_54577 = state_54542;
(statearr_54577[(12)] = inst_54511);

(statearr_54577[(11)] = inst_54512__$1);

return statearr_54577;
})();
if(cljs.core.truth_(inst_54513)){
var statearr_54578_56001 = state_54542__$1;
(statearr_54578_56001[(1)] = (8));

} else {
var statearr_54579_56002 = state_54542__$1;
(statearr_54579_56002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54543 === (14))){
var inst_54534 = (state_54542[(2)]);
var inst_54535 = cljs.core.async.close_BANG_(out);
var state_54542__$1 = (function (){var statearr_54582 = state_54542;
(statearr_54582[(13)] = inst_54534);

return statearr_54582;
})();
var statearr_54583_56003 = state_54542__$1;
(statearr_54583_56003[(2)] = inst_54535);

(statearr_54583_56003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54543 === (10))){
var inst_54525 = (state_54542[(2)]);
var state_54542__$1 = state_54542;
var statearr_54586_56004 = state_54542__$1;
(statearr_54586_56004[(2)] = inst_54525);

(statearr_54586_56004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54543 === (8))){
var inst_54500 = (state_54542[(7)]);
var inst_54512 = (state_54542[(11)]);
var tmp54580 = inst_54500;
var inst_54500__$1 = tmp54580;
var inst_54501 = inst_54512;
var state_54542__$1 = (function (){var statearr_54587 = state_54542;
(statearr_54587[(7)] = inst_54500__$1);

(statearr_54587[(8)] = inst_54501);

return statearr_54587;
})();
var statearr_54588_56005 = state_54542__$1;
(statearr_54588_56005[(2)] = null);

(statearr_54588_56005[(1)] = (2));


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
var statearr_54592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54592[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_54592[(1)] = (1));

return statearr_54592;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_54542){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_54542);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e54594){var ex__10333__auto__ = e54594;
var statearr_54595_56006 = state_54542;
(statearr_54595_56006[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_54542[(4)]))){
var statearr_54596_56007 = state_54542;
(statearr_54596_56007[(1)] = cljs.core.first((state_54542[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56008 = state_54542;
state_54542 = G__56008;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_54542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_54542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_54597 = f__10425__auto__();
(statearr_54597[(6)] = c__10424__auto___55973);

return statearr_54597;
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
var G__54605 = arguments.length;
switch (G__54605) {
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
var c__10424__auto___56011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_54673){
var state_val_54674 = (state_54673[(1)]);
if((state_val_54674 === (7))){
var inst_54669 = (state_54673[(2)]);
var state_54673__$1 = state_54673;
var statearr_54682_56013 = state_54673__$1;
(statearr_54682_56013[(2)] = inst_54669);

(statearr_54682_56013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (1))){
var inst_54612 = [];
var inst_54613 = inst_54612;
var inst_54614 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_54673__$1 = (function (){var statearr_54683 = state_54673;
(statearr_54683[(7)] = inst_54614);

(statearr_54683[(8)] = inst_54613);

return statearr_54683;
})();
var statearr_54687_56017 = state_54673__$1;
(statearr_54687_56017[(2)] = null);

(statearr_54687_56017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (4))){
var inst_54618 = (state_54673[(9)]);
var inst_54618__$1 = (state_54673[(2)]);
var inst_54619 = (inst_54618__$1 == null);
var inst_54620 = cljs.core.not(inst_54619);
var state_54673__$1 = (function (){var statearr_54689 = state_54673;
(statearr_54689[(9)] = inst_54618__$1);

return statearr_54689;
})();
if(inst_54620){
var statearr_54690_56018 = state_54673__$1;
(statearr_54690_56018[(1)] = (5));

} else {
var statearr_54691_56019 = state_54673__$1;
(statearr_54691_56019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (15))){
var inst_54613 = (state_54673[(8)]);
var inst_54661 = cljs.core.vec(inst_54613);
var state_54673__$1 = state_54673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54673__$1,(18),out,inst_54661);
} else {
if((state_val_54674 === (13))){
var inst_54656 = (state_54673[(2)]);
var state_54673__$1 = state_54673;
var statearr_54697_56025 = state_54673__$1;
(statearr_54697_56025[(2)] = inst_54656);

(statearr_54697_56025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (6))){
var inst_54613 = (state_54673[(8)]);
var inst_54658 = inst_54613.length;
var inst_54659 = (inst_54658 > (0));
var state_54673__$1 = state_54673;
if(cljs.core.truth_(inst_54659)){
var statearr_54702_56026 = state_54673__$1;
(statearr_54702_56026[(1)] = (15));

} else {
var statearr_54703_56027 = state_54673__$1;
(statearr_54703_56027[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (17))){
var inst_54666 = (state_54673[(2)]);
var inst_54667 = cljs.core.async.close_BANG_(out);
var state_54673__$1 = (function (){var statearr_54708 = state_54673;
(statearr_54708[(10)] = inst_54666);

return statearr_54708;
})();
var statearr_54709_56031 = state_54673__$1;
(statearr_54709_56031[(2)] = inst_54667);

(statearr_54709_56031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (3))){
var inst_54671 = (state_54673[(2)]);
var state_54673__$1 = state_54673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54673__$1,inst_54671);
} else {
if((state_val_54674 === (12))){
var inst_54613 = (state_54673[(8)]);
var inst_54643 = cljs.core.vec(inst_54613);
var state_54673__$1 = state_54673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54673__$1,(14),out,inst_54643);
} else {
if((state_val_54674 === (2))){
var state_54673__$1 = state_54673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54673__$1,(4),ch);
} else {
if((state_val_54674 === (11))){
var inst_54618 = (state_54673[(9)]);
var inst_54623 = (state_54673[(11)]);
var inst_54613 = (state_54673[(8)]);
var inst_54640 = inst_54613.push(inst_54618);
var tmp54710 = inst_54613;
var inst_54613__$1 = tmp54710;
var inst_54614 = inst_54623;
var state_54673__$1 = (function (){var statearr_54717 = state_54673;
(statearr_54717[(7)] = inst_54614);

(statearr_54717[(8)] = inst_54613__$1);

(statearr_54717[(12)] = inst_54640);

return statearr_54717;
})();
var statearr_54718_56037 = state_54673__$1;
(statearr_54718_56037[(2)] = null);

(statearr_54718_56037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (9))){
var inst_54614 = (state_54673[(7)]);
var inst_54630 = cljs.core.keyword_identical_QMARK_(inst_54614,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_54673__$1 = state_54673;
var statearr_54720_56038 = state_54673__$1;
(statearr_54720_56038[(2)] = inst_54630);

(statearr_54720_56038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (5))){
var inst_54614 = (state_54673[(7)]);
var inst_54618 = (state_54673[(9)]);
var inst_54623 = (state_54673[(11)]);
var inst_54627 = (state_54673[(13)]);
var inst_54623__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_54618) : f.call(null, inst_54618));
var inst_54627__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54623__$1,inst_54614);
var state_54673__$1 = (function (){var statearr_54724 = state_54673;
(statearr_54724[(11)] = inst_54623__$1);

(statearr_54724[(13)] = inst_54627__$1);

return statearr_54724;
})();
if(inst_54627__$1){
var statearr_54725_56040 = state_54673__$1;
(statearr_54725_56040[(1)] = (8));

} else {
var statearr_54726_56041 = state_54673__$1;
(statearr_54726_56041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (14))){
var inst_54618 = (state_54673[(9)]);
var inst_54623 = (state_54673[(11)]);
var inst_54645 = (state_54673[(2)]);
var inst_54652 = [];
var inst_54653 = inst_54652.push(inst_54618);
var inst_54613 = inst_54652;
var inst_54614 = inst_54623;
var state_54673__$1 = (function (){var statearr_54727 = state_54673;
(statearr_54727[(7)] = inst_54614);

(statearr_54727[(14)] = inst_54653);

(statearr_54727[(15)] = inst_54645);

(statearr_54727[(8)] = inst_54613);

return statearr_54727;
})();
var statearr_54730_56043 = state_54673__$1;
(statearr_54730_56043[(2)] = null);

(statearr_54730_56043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (16))){
var state_54673__$1 = state_54673;
var statearr_54731_56048 = state_54673__$1;
(statearr_54731_56048[(2)] = null);

(statearr_54731_56048[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (10))){
var inst_54632 = (state_54673[(2)]);
var state_54673__$1 = state_54673;
if(cljs.core.truth_(inst_54632)){
var statearr_54733_56049 = state_54673__$1;
(statearr_54733_56049[(1)] = (11));

} else {
var statearr_54737_56050 = state_54673__$1;
(statearr_54737_56050[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (18))){
var inst_54663 = (state_54673[(2)]);
var state_54673__$1 = state_54673;
var statearr_54742_56051 = state_54673__$1;
(statearr_54742_56051[(2)] = inst_54663);

(statearr_54742_56051[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (8))){
var inst_54627 = (state_54673[(13)]);
var state_54673__$1 = state_54673;
var statearr_54743_56053 = state_54673__$1;
(statearr_54743_56053[(2)] = inst_54627);

(statearr_54743_56053[(1)] = (10));


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
var statearr_54748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54748[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_54748[(1)] = (1));

return statearr_54748;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_54673){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_54673);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e54751){var ex__10333__auto__ = e54751;
var statearr_54752_56058 = state_54673;
(statearr_54752_56058[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_54673[(4)]))){
var statearr_54753_56059 = state_54673;
(statearr_54753_56059[(1)] = cljs.core.first((state_54673[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56060 = state_54673;
state_54673 = G__56060;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_54673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_54673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_54758 = f__10425__auto__();
(statearr_54758[(6)] = c__10424__auto___56011);

return statearr_54758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
