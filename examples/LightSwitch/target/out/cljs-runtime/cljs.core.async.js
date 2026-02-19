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
cljs.core.async.t_cljs$core$async32733 = (function (f,blockable,meta32734){
this.f = f;
this.blockable = blockable;
this.meta32734 = meta32734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32735,meta32734__$1){
var self__ = this;
var _32735__$1 = this;
return (new cljs.core.async.t_cljs$core$async32733(self__.f,self__.blockable,meta32734__$1));
}));

(cljs.core.async.t_cljs$core$async32733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32735){
var self__ = this;
var _32735__$1 = this;
return self__.meta32734;
}));

(cljs.core.async.t_cljs$core$async32733.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32733.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32733.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32733.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32734","meta32734",-1393431258,null)], null);
}));

(cljs.core.async.t_cljs$core$async32733.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32733.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32733");

(cljs.core.async.t_cljs$core$async32733.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32733");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32733.
 */
cljs.core.async.__GT_t_cljs$core$async32733 = (function cljs$core$async$__GT_t_cljs$core$async32733(f,blockable,meta32734){
return (new cljs.core.async.t_cljs$core$async32733(f,blockable,meta32734));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32731 = arguments.length;
switch (G__32731) {
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
return (new cljs.core.async.t_cljs$core$async32733(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32760 = arguments.length;
switch (G__32760) {
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
var G__32773 = arguments.length;
switch (G__32773) {
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
var G__32789 = arguments.length;
switch (G__32789) {
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
var val_35714 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35714) : fn1.call(null, val_35714));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35714) : fn1.call(null, val_35714));
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
var G__32810 = arguments.length;
switch (G__32810) {
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
var n__5593__auto___35721 = n;
var x_35722 = (0);
while(true){
if((x_35722 < n__5593__auto___35721)){
(a[x_35722] = x_35722);

var G__35723 = (x_35722 + (1));
x_35722 = G__35723;
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
cljs.core.async.t_cljs$core$async32834 = (function (flag,meta32835){
this.flag = flag;
this.meta32835 = meta32835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32836,meta32835__$1){
var self__ = this;
var _32836__$1 = this;
return (new cljs.core.async.t_cljs$core$async32834(self__.flag,meta32835__$1));
}));

(cljs.core.async.t_cljs$core$async32834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32836){
var self__ = this;
var _32836__$1 = this;
return self__.meta32835;
}));

(cljs.core.async.t_cljs$core$async32834.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32834.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32834.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32834.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32835","meta32835",-1325066514,null)], null);
}));

(cljs.core.async.t_cljs$core$async32834.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32834");

(cljs.core.async.t_cljs$core$async32834.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32834");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32834.
 */
cljs.core.async.__GT_t_cljs$core$async32834 = (function cljs$core$async$__GT_t_cljs$core$async32834(flag,meta32835){
return (new cljs.core.async.t_cljs$core$async32834(flag,meta32835));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async32834(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32850 = (function (flag,cb,meta32851){
this.flag = flag;
this.cb = cb;
this.meta32851 = meta32851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32852,meta32851__$1){
var self__ = this;
var _32852__$1 = this;
return (new cljs.core.async.t_cljs$core$async32850(self__.flag,self__.cb,meta32851__$1));
}));

(cljs.core.async.t_cljs$core$async32850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32852){
var self__ = this;
var _32852__$1 = this;
return self__.meta32851;
}));

(cljs.core.async.t_cljs$core$async32850.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32850.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32850.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32850.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32851","meta32851",1354096046,null)], null);
}));

(cljs.core.async.t_cljs$core$async32850.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32850");

(cljs.core.async.t_cljs$core$async32850.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32850");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32850.
 */
cljs.core.async.__GT_t_cljs$core$async32850 = (function cljs$core$async$__GT_t_cljs$core$async32850(flag,cb,meta32851){
return (new cljs.core.async.t_cljs$core$async32850(flag,cb,meta32851));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async32850(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32862_SHARP_){
var G__32868 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32862_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32868) : fret.call(null, G__32868));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32863_SHARP_){
var G__32872 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32863_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32872) : fret.call(null, G__32872));
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
var G__35732 = (i + (1));
i = G__35732;
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
var len__5726__auto___35738 = arguments.length;
var i__5727__auto___35739 = (0);
while(true){
if((i__5727__auto___35739 < len__5726__auto___35738)){
args__5732__auto__.push((arguments[i__5727__auto___35739]));

var G__35741 = (i__5727__auto___35739 + (1));
i__5727__auto___35739 = G__35741;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32880){
var map__32881 = p__32880;
var map__32881__$1 = cljs.core.__destructure_map(map__32881);
var opts = map__32881__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32878){
var G__32879 = cljs.core.first(seq32878);
var seq32878__$1 = cljs.core.next(seq32878);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32879,seq32878__$1);
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
var G__32899 = arguments.length;
switch (G__32899) {
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
var c__10424__auto___35749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_32930){
var state_val_32931 = (state_32930[(1)]);
if((state_val_32931 === (7))){
var inst_32926 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
var statearr_32932_35751 = state_32930__$1;
(statearr_32932_35751[(2)] = inst_32926);

(statearr_32932_35751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (1))){
var state_32930__$1 = state_32930;
var statearr_32936_35752 = state_32930__$1;
(statearr_32936_35752[(2)] = null);

(statearr_32936_35752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (4))){
var inst_32907 = (state_32930[(7)]);
var inst_32907__$1 = (state_32930[(2)]);
var inst_32909 = (inst_32907__$1 == null);
var state_32930__$1 = (function (){var statearr_32938 = state_32930;
(statearr_32938[(7)] = inst_32907__$1);

return statearr_32938;
})();
if(cljs.core.truth_(inst_32909)){
var statearr_32939_35753 = state_32930__$1;
(statearr_32939_35753[(1)] = (5));

} else {
var statearr_32940_35754 = state_32930__$1;
(statearr_32940_35754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (13))){
var state_32930__$1 = state_32930;
var statearr_32941_35755 = state_32930__$1;
(statearr_32941_35755[(2)] = null);

(statearr_32941_35755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (6))){
var inst_32907 = (state_32930[(7)]);
var state_32930__$1 = state_32930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32930__$1,(11),to,inst_32907);
} else {
if((state_val_32931 === (3))){
var inst_32928 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32930__$1,inst_32928);
} else {
if((state_val_32931 === (12))){
var state_32930__$1 = state_32930;
var statearr_32945_35756 = state_32930__$1;
(statearr_32945_35756[(2)] = null);

(statearr_32945_35756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (2))){
var state_32930__$1 = state_32930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32930__$1,(4),from);
} else {
if((state_val_32931 === (11))){
var inst_32919 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
if(cljs.core.truth_(inst_32919)){
var statearr_32946_35757 = state_32930__$1;
(statearr_32946_35757[(1)] = (12));

} else {
var statearr_32947_35758 = state_32930__$1;
(statearr_32947_35758[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (9))){
var state_32930__$1 = state_32930;
var statearr_32948_35759 = state_32930__$1;
(statearr_32948_35759[(2)] = null);

(statearr_32948_35759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (5))){
var state_32930__$1 = state_32930;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32950_35761 = state_32930__$1;
(statearr_32950_35761[(1)] = (8));

} else {
var statearr_32952_35762 = state_32930__$1;
(statearr_32952_35762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (14))){
var inst_32924 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
var statearr_32955_35763 = state_32930__$1;
(statearr_32955_35763[(2)] = inst_32924);

(statearr_32955_35763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (10))){
var inst_32916 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
var statearr_32956_35764 = state_32930__$1;
(statearr_32956_35764[(2)] = inst_32916);

(statearr_32956_35764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (8))){
var inst_32913 = cljs.core.async.close_BANG_(to);
var state_32930__$1 = state_32930;
var statearr_32957_35765 = state_32930__$1;
(statearr_32957_35765[(2)] = inst_32913);

(statearr_32957_35765[(1)] = (10));


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
var statearr_32961 = [null,null,null,null,null,null,null,null];
(statearr_32961[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_32961[(1)] = (1));

return statearr_32961;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_32930){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_32930);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e32962){var ex__10333__auto__ = e32962;
var statearr_32963_35768 = state_32930;
(statearr_32963_35768[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_32930[(4)]))){
var statearr_32965_35769 = state_32930;
(statearr_32965_35769[(1)] = cljs.core.first((state_32930[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35772 = state_32930;
state_32930 = G__35772;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_32930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_32930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_32968 = f__10425__auto__();
(statearr_32968[(6)] = c__10424__auto___35749);

return statearr_32968;
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
var process__$1 = (function (p__32988){
var vec__32989 = p__32988;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32989,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32989,(1),null);
var job = vec__32989;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10424__auto___35775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_33012){
var state_val_33013 = (state_33012[(1)]);
if((state_val_33013 === (1))){
var state_33012__$1 = state_33012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33012__$1,(2),res,v);
} else {
if((state_val_33013 === (2))){
var inst_33007 = (state_33012[(2)]);
var inst_33009 = cljs.core.async.close_BANG_(res);
var state_33012__$1 = (function (){var statearr_33030 = state_33012;
(statearr_33030[(7)] = inst_33007);

return statearr_33030;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33012__$1,inst_33009);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0 = (function (){
var statearr_33031 = [null,null,null,null,null,null,null,null];
(statearr_33031[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__);

(statearr_33031[(1)] = (1));

return statearr_33031;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1 = (function (state_33012){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_33012);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e33032){var ex__10333__auto__ = e33032;
var statearr_33033_35779 = state_33012;
(statearr_33033_35779[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_33012[(4)]))){
var statearr_33034_35781 = state_33012;
(statearr_33034_35781[(1)] = cljs.core.first((state_33012[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35782 = state_33012;
state_33012 = G__35782;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = function(state_33012){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1.call(this,state_33012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_33035 = f__10425__auto__();
(statearr_33035[(6)] = c__10424__auto___35775);

return statearr_33035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33036){
var vec__33038 = p__33036;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33038,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33038,(1),null);
var job = vec__33038;
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
var n__5593__auto___35783 = n;
var __35784 = (0);
while(true){
if((__35784 < n__5593__auto___35783)){
var G__33042_35786 = type;
var G__33042_35787__$1 = (((G__33042_35786 instanceof cljs.core.Keyword))?G__33042_35786.fqn:null);
switch (G__33042_35787__$1) {
case "compute":
var c__10424__auto___35789 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35784,c__10424__auto___35789,G__33042_35786,G__33042_35787__$1,n__5593__auto___35783,jobs,results,process__$1,async){
return (function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = ((function (__35784,c__10424__auto___35789,G__33042_35786,G__33042_35787__$1,n__5593__auto___35783,jobs,results,process__$1,async){
return (function (state_33055){
var state_val_33056 = (state_33055[(1)]);
if((state_val_33056 === (1))){
var state_33055__$1 = state_33055;
var statearr_33057_35790 = state_33055__$1;
(statearr_33057_35790[(2)] = null);

(statearr_33057_35790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (2))){
var state_33055__$1 = state_33055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33055__$1,(4),jobs);
} else {
if((state_val_33056 === (3))){
var inst_33053 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33055__$1,inst_33053);
} else {
if((state_val_33056 === (4))){
var inst_33045 = (state_33055[(2)]);
var inst_33046 = process__$1(inst_33045);
var state_33055__$1 = state_33055;
if(cljs.core.truth_(inst_33046)){
var statearr_33061_35793 = state_33055__$1;
(statearr_33061_35793[(1)] = (5));

} else {
var statearr_33063_35794 = state_33055__$1;
(statearr_33063_35794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (5))){
var state_33055__$1 = state_33055;
var statearr_33066_35795 = state_33055__$1;
(statearr_33066_35795[(2)] = null);

(statearr_33066_35795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (6))){
var state_33055__$1 = state_33055;
var statearr_33068_35796 = state_33055__$1;
(statearr_33068_35796[(2)] = null);

(statearr_33068_35796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (7))){
var inst_33051 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
var statearr_33070_35797 = state_33055__$1;
(statearr_33070_35797[(2)] = inst_33051);

(statearr_33070_35797[(1)] = (3));


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
});})(__35784,c__10424__auto___35789,G__33042_35786,G__33042_35787__$1,n__5593__auto___35783,jobs,results,process__$1,async))
;
return ((function (__35784,switch__10329__auto__,c__10424__auto___35789,G__33042_35786,G__33042_35787__$1,n__5593__auto___35783,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0 = (function (){
var statearr_33072 = [null,null,null,null,null,null,null];
(statearr_33072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__);

(statearr_33072[(1)] = (1));

return statearr_33072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1 = (function (state_33055){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_33055);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e33073){var ex__10333__auto__ = e33073;
var statearr_33074_35799 = state_33055;
(statearr_33074_35799[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_33055[(4)]))){
var statearr_33075_35800 = state_33055;
(statearr_33075_35800[(1)] = cljs.core.first((state_33055[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35802 = state_33055;
state_33055 = G__35802;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = function(state_33055){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1.call(this,state_33055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__;
})()
;})(__35784,switch__10329__auto__,c__10424__auto___35789,G__33042_35786,G__33042_35787__$1,n__5593__auto___35783,jobs,results,process__$1,async))
})();
var state__10426__auto__ = (function (){var statearr_33076 = f__10425__auto__();
(statearr_33076[(6)] = c__10424__auto___35789);

return statearr_33076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
});})(__35784,c__10424__auto___35789,G__33042_35786,G__33042_35787__$1,n__5593__auto___35783,jobs,results,process__$1,async))
);


break;
case "async":
var c__10424__auto___35803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35784,c__10424__auto___35803,G__33042_35786,G__33042_35787__$1,n__5593__auto___35783,jobs,results,process__$1,async){
return (function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = ((function (__35784,c__10424__auto___35803,G__33042_35786,G__33042_35787__$1,n__5593__auto___35783,jobs,results,process__$1,async){
return (function (state_33089){
var state_val_33090 = (state_33089[(1)]);
if((state_val_33090 === (1))){
var state_33089__$1 = state_33089;
var statearr_33093_35804 = state_33089__$1;
(statearr_33093_35804[(2)] = null);

(statearr_33093_35804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (2))){
var state_33089__$1 = state_33089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33089__$1,(4),jobs);
} else {
if((state_val_33090 === (3))){
var inst_33087 = (state_33089[(2)]);
var state_33089__$1 = state_33089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33089__$1,inst_33087);
} else {
if((state_val_33090 === (4))){
var inst_33079 = (state_33089[(2)]);
var inst_33080 = async(inst_33079);
var state_33089__$1 = state_33089;
if(cljs.core.truth_(inst_33080)){
var statearr_33094_35806 = state_33089__$1;
(statearr_33094_35806[(1)] = (5));

} else {
var statearr_33095_35808 = state_33089__$1;
(statearr_33095_35808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (5))){
var state_33089__$1 = state_33089;
var statearr_33096_35809 = state_33089__$1;
(statearr_33096_35809[(2)] = null);

(statearr_33096_35809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (6))){
var state_33089__$1 = state_33089;
var statearr_33097_35811 = state_33089__$1;
(statearr_33097_35811[(2)] = null);

(statearr_33097_35811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (7))){
var inst_33085 = (state_33089[(2)]);
var state_33089__$1 = state_33089;
var statearr_33098_35812 = state_33089__$1;
(statearr_33098_35812[(2)] = inst_33085);

(statearr_33098_35812[(1)] = (3));


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
});})(__35784,c__10424__auto___35803,G__33042_35786,G__33042_35787__$1,n__5593__auto___35783,jobs,results,process__$1,async))
;
return ((function (__35784,switch__10329__auto__,c__10424__auto___35803,G__33042_35786,G__33042_35787__$1,n__5593__auto___35783,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0 = (function (){
var statearr_33100 = [null,null,null,null,null,null,null];
(statearr_33100[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__);

(statearr_33100[(1)] = (1));

return statearr_33100;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1 = (function (state_33089){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_33089);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e33101){var ex__10333__auto__ = e33101;
var statearr_33102_35814 = state_33089;
(statearr_33102_35814[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_33089[(4)]))){
var statearr_33104_35815 = state_33089;
(statearr_33104_35815[(1)] = cljs.core.first((state_33089[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35816 = state_33089;
state_33089 = G__35816;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = function(state_33089){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1.call(this,state_33089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__;
})()
;})(__35784,switch__10329__auto__,c__10424__auto___35803,G__33042_35786,G__33042_35787__$1,n__5593__auto___35783,jobs,results,process__$1,async))
})();
var state__10426__auto__ = (function (){var statearr_33105 = f__10425__auto__();
(statearr_33105[(6)] = c__10424__auto___35803);

return statearr_33105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
});})(__35784,c__10424__auto___35803,G__33042_35786,G__33042_35787__$1,n__5593__auto___35783,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33042_35787__$1)].join('')));

}

var G__35817 = (__35784 + (1));
__35784 = G__35817;
continue;
} else {
}
break;
}

var c__10424__auto___35818 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_33130){
var state_val_33131 = (state_33130[(1)]);
if((state_val_33131 === (7))){
var inst_33126 = (state_33130[(2)]);
var state_33130__$1 = state_33130;
var statearr_33133_35819 = state_33130__$1;
(statearr_33133_35819[(2)] = inst_33126);

(statearr_33133_35819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (1))){
var state_33130__$1 = state_33130;
var statearr_33135_35820 = state_33130__$1;
(statearr_33135_35820[(2)] = null);

(statearr_33135_35820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (4))){
var inst_33110 = (state_33130[(7)]);
var inst_33110__$1 = (state_33130[(2)]);
var inst_33111 = (inst_33110__$1 == null);
var state_33130__$1 = (function (){var statearr_33136 = state_33130;
(statearr_33136[(7)] = inst_33110__$1);

return statearr_33136;
})();
if(cljs.core.truth_(inst_33111)){
var statearr_33137_35822 = state_33130__$1;
(statearr_33137_35822[(1)] = (5));

} else {
var statearr_33138_35825 = state_33130__$1;
(statearr_33138_35825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (6))){
var inst_33115 = (state_33130[(8)]);
var inst_33110 = (state_33130[(7)]);
var inst_33115__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33117 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33118 = [inst_33110,inst_33115__$1];
var inst_33119 = (new cljs.core.PersistentVector(null,2,(5),inst_33117,inst_33118,null));
var state_33130__$1 = (function (){var statearr_33139 = state_33130;
(statearr_33139[(8)] = inst_33115__$1);

return statearr_33139;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33130__$1,(8),jobs,inst_33119);
} else {
if((state_val_33131 === (3))){
var inst_33128 = (state_33130[(2)]);
var state_33130__$1 = state_33130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33130__$1,inst_33128);
} else {
if((state_val_33131 === (2))){
var state_33130__$1 = state_33130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33130__$1,(4),from);
} else {
if((state_val_33131 === (9))){
var inst_33123 = (state_33130[(2)]);
var state_33130__$1 = (function (){var statearr_33140 = state_33130;
(statearr_33140[(9)] = inst_33123);

return statearr_33140;
})();
var statearr_33141_35826 = state_33130__$1;
(statearr_33141_35826[(2)] = null);

(statearr_33141_35826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (5))){
var inst_33113 = cljs.core.async.close_BANG_(jobs);
var state_33130__$1 = state_33130;
var statearr_33143_35827 = state_33130__$1;
(statearr_33143_35827[(2)] = inst_33113);

(statearr_33143_35827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (8))){
var inst_33115 = (state_33130[(8)]);
var inst_33121 = (state_33130[(2)]);
var state_33130__$1 = (function (){var statearr_33147 = state_33130;
(statearr_33147[(10)] = inst_33121);

return statearr_33147;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33130__$1,(9),results,inst_33115);
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
var statearr_33150 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33150[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__);

(statearr_33150[(1)] = (1));

return statearr_33150;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1 = (function (state_33130){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_33130);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e33151){var ex__10333__auto__ = e33151;
var statearr_33152_35829 = state_33130;
(statearr_33152_35829[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_33130[(4)]))){
var statearr_33153_35830 = state_33130;
(statearr_33153_35830[(1)] = cljs.core.first((state_33130[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35831 = state_33130;
state_33130 = G__35831;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = function(state_33130){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1.call(this,state_33130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_33154 = f__10425__auto__();
(statearr_33154[(6)] = c__10424__auto___35818);

return statearr_33154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


var c__10424__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_33193){
var state_val_33196 = (state_33193[(1)]);
if((state_val_33196 === (7))){
var inst_33189 = (state_33193[(2)]);
var state_33193__$1 = state_33193;
var statearr_33205_35832 = state_33193__$1;
(statearr_33205_35832[(2)] = inst_33189);

(statearr_33205_35832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (20))){
var state_33193__$1 = state_33193;
var statearr_33207_35833 = state_33193__$1;
(statearr_33207_35833[(2)] = null);

(statearr_33207_35833[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (1))){
var state_33193__$1 = state_33193;
var statearr_33208_35834 = state_33193__$1;
(statearr_33208_35834[(2)] = null);

(statearr_33208_35834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (4))){
var inst_33157 = (state_33193[(7)]);
var inst_33157__$1 = (state_33193[(2)]);
var inst_33158 = (inst_33157__$1 == null);
var state_33193__$1 = (function (){var statearr_33215 = state_33193;
(statearr_33215[(7)] = inst_33157__$1);

return statearr_33215;
})();
if(cljs.core.truth_(inst_33158)){
var statearr_33216_35835 = state_33193__$1;
(statearr_33216_35835[(1)] = (5));

} else {
var statearr_33217_35836 = state_33193__$1;
(statearr_33217_35836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (15))){
var inst_33170 = (state_33193[(8)]);
var state_33193__$1 = state_33193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33193__$1,(18),to,inst_33170);
} else {
if((state_val_33196 === (21))){
var inst_33183 = (state_33193[(2)]);
var state_33193__$1 = state_33193;
var statearr_33224_35837 = state_33193__$1;
(statearr_33224_35837[(2)] = inst_33183);

(statearr_33224_35837[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (13))){
var inst_33185 = (state_33193[(2)]);
var state_33193__$1 = (function (){var statearr_33227 = state_33193;
(statearr_33227[(9)] = inst_33185);

return statearr_33227;
})();
var statearr_33230_35838 = state_33193__$1;
(statearr_33230_35838[(2)] = null);

(statearr_33230_35838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (6))){
var inst_33157 = (state_33193[(7)]);
var state_33193__$1 = state_33193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33193__$1,(11),inst_33157);
} else {
if((state_val_33196 === (17))){
var inst_33178 = (state_33193[(2)]);
var state_33193__$1 = state_33193;
if(cljs.core.truth_(inst_33178)){
var statearr_33235_35839 = state_33193__$1;
(statearr_33235_35839[(1)] = (19));

} else {
var statearr_33236_35840 = state_33193__$1;
(statearr_33236_35840[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (3))){
var inst_33191 = (state_33193[(2)]);
var state_33193__$1 = state_33193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33193__$1,inst_33191);
} else {
if((state_val_33196 === (12))){
var inst_33167 = (state_33193[(10)]);
var state_33193__$1 = state_33193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33193__$1,(14),inst_33167);
} else {
if((state_val_33196 === (2))){
var state_33193__$1 = state_33193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33193__$1,(4),results);
} else {
if((state_val_33196 === (19))){
var state_33193__$1 = state_33193;
var statearr_33240_35841 = state_33193__$1;
(statearr_33240_35841[(2)] = null);

(statearr_33240_35841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (11))){
var inst_33167 = (state_33193[(2)]);
var state_33193__$1 = (function (){var statearr_33241 = state_33193;
(statearr_33241[(10)] = inst_33167);

return statearr_33241;
})();
var statearr_33242_35843 = state_33193__$1;
(statearr_33242_35843[(2)] = null);

(statearr_33242_35843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (9))){
var state_33193__$1 = state_33193;
var statearr_33244_35844 = state_33193__$1;
(statearr_33244_35844[(2)] = null);

(statearr_33244_35844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (5))){
var state_33193__$1 = state_33193;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33247_35846 = state_33193__$1;
(statearr_33247_35846[(1)] = (8));

} else {
var statearr_33249_35847 = state_33193__$1;
(statearr_33249_35847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (14))){
var inst_33172 = (state_33193[(11)]);
var inst_33170 = (state_33193[(8)]);
var inst_33170__$1 = (state_33193[(2)]);
var inst_33171 = (inst_33170__$1 == null);
var inst_33172__$1 = cljs.core.not(inst_33171);
var state_33193__$1 = (function (){var statearr_33250 = state_33193;
(statearr_33250[(11)] = inst_33172__$1);

(statearr_33250[(8)] = inst_33170__$1);

return statearr_33250;
})();
if(inst_33172__$1){
var statearr_33251_35848 = state_33193__$1;
(statearr_33251_35848[(1)] = (15));

} else {
var statearr_33252_35849 = state_33193__$1;
(statearr_33252_35849[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (16))){
var inst_33172 = (state_33193[(11)]);
var state_33193__$1 = state_33193;
var statearr_33253_35850 = state_33193__$1;
(statearr_33253_35850[(2)] = inst_33172);

(statearr_33253_35850[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (10))){
var inst_33164 = (state_33193[(2)]);
var state_33193__$1 = state_33193;
var statearr_33254_35851 = state_33193__$1;
(statearr_33254_35851[(2)] = inst_33164);

(statearr_33254_35851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (18))){
var inst_33175 = (state_33193[(2)]);
var state_33193__$1 = state_33193;
var statearr_33255_35852 = state_33193__$1;
(statearr_33255_35852[(2)] = inst_33175);

(statearr_33255_35852[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (8))){
var inst_33161 = cljs.core.async.close_BANG_(to);
var state_33193__$1 = state_33193;
var statearr_33257_35853 = state_33193__$1;
(statearr_33257_35853[(2)] = inst_33161);

(statearr_33257_35853[(1)] = (10));


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
var statearr_33261 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33261[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__);

(statearr_33261[(1)] = (1));

return statearr_33261;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1 = (function (state_33193){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_33193);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e33266){var ex__10333__auto__ = e33266;
var statearr_33267_35854 = state_33193;
(statearr_33267_35854[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_33193[(4)]))){
var statearr_33268_35859 = state_33193;
(statearr_33268_35859[(1)] = cljs.core.first((state_33193[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35864 = state_33193;
state_33193 = G__35864;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__ = function(state_33193){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1.call(this,state_33193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_33273 = f__10425__auto__();
(statearr_33273[(6)] = c__10424__auto__);

return statearr_33273;
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
var G__33279 = arguments.length;
switch (G__33279) {
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
var G__33299 = arguments.length;
switch (G__33299) {
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
var G__33301 = arguments.length;
switch (G__33301) {
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
var c__10424__auto___35902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_33328){
var state_val_33329 = (state_33328[(1)]);
if((state_val_33329 === (7))){
var inst_33324 = (state_33328[(2)]);
var state_33328__$1 = state_33328;
var statearr_33331_35903 = state_33328__$1;
(statearr_33331_35903[(2)] = inst_33324);

(statearr_33331_35903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (1))){
var state_33328__$1 = state_33328;
var statearr_33332_35905 = state_33328__$1;
(statearr_33332_35905[(2)] = null);

(statearr_33332_35905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (4))){
var inst_33305 = (state_33328[(7)]);
var inst_33305__$1 = (state_33328[(2)]);
var inst_33306 = (inst_33305__$1 == null);
var state_33328__$1 = (function (){var statearr_33333 = state_33328;
(statearr_33333[(7)] = inst_33305__$1);

return statearr_33333;
})();
if(cljs.core.truth_(inst_33306)){
var statearr_33337_35906 = state_33328__$1;
(statearr_33337_35906[(1)] = (5));

} else {
var statearr_33338_35908 = state_33328__$1;
(statearr_33338_35908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (13))){
var state_33328__$1 = state_33328;
var statearr_33339_35909 = state_33328__$1;
(statearr_33339_35909[(2)] = null);

(statearr_33339_35909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (6))){
var inst_33305 = (state_33328[(7)]);
var inst_33311 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33305) : p.call(null, inst_33305));
var state_33328__$1 = state_33328;
if(cljs.core.truth_(inst_33311)){
var statearr_33340_35910 = state_33328__$1;
(statearr_33340_35910[(1)] = (9));

} else {
var statearr_33341_35911 = state_33328__$1;
(statearr_33341_35911[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (3))){
var inst_33326 = (state_33328[(2)]);
var state_33328__$1 = state_33328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33328__$1,inst_33326);
} else {
if((state_val_33329 === (12))){
var state_33328__$1 = state_33328;
var statearr_33343_35912 = state_33328__$1;
(statearr_33343_35912[(2)] = null);

(statearr_33343_35912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (2))){
var state_33328__$1 = state_33328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33328__$1,(4),ch);
} else {
if((state_val_33329 === (11))){
var inst_33305 = (state_33328[(7)]);
var inst_33315 = (state_33328[(2)]);
var state_33328__$1 = state_33328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33328__$1,(8),inst_33315,inst_33305);
} else {
if((state_val_33329 === (9))){
var state_33328__$1 = state_33328;
var statearr_33344_35914 = state_33328__$1;
(statearr_33344_35914[(2)] = tc);

(statearr_33344_35914[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (5))){
var inst_33308 = cljs.core.async.close_BANG_(tc);
var inst_33309 = cljs.core.async.close_BANG_(fc);
var state_33328__$1 = (function (){var statearr_33345 = state_33328;
(statearr_33345[(8)] = inst_33308);

return statearr_33345;
})();
var statearr_33346_35917 = state_33328__$1;
(statearr_33346_35917[(2)] = inst_33309);

(statearr_33346_35917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (14))){
var inst_33322 = (state_33328[(2)]);
var state_33328__$1 = state_33328;
var statearr_33347_35918 = state_33328__$1;
(statearr_33347_35918[(2)] = inst_33322);

(statearr_33347_35918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (10))){
var state_33328__$1 = state_33328;
var statearr_33348_35919 = state_33328__$1;
(statearr_33348_35919[(2)] = fc);

(statearr_33348_35919[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (8))){
var inst_33317 = (state_33328[(2)]);
var state_33328__$1 = state_33328;
if(cljs.core.truth_(inst_33317)){
var statearr_33349_35920 = state_33328__$1;
(statearr_33349_35920[(1)] = (12));

} else {
var statearr_33350_35921 = state_33328__$1;
(statearr_33350_35921[(1)] = (13));

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
var statearr_33351 = [null,null,null,null,null,null,null,null,null];
(statearr_33351[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_33351[(1)] = (1));

return statearr_33351;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_33328){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_33328);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e33352){var ex__10333__auto__ = e33352;
var statearr_33353_35922 = state_33328;
(statearr_33353_35922[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_33328[(4)]))){
var statearr_33354_35923 = state_33328;
(statearr_33354_35923[(1)] = cljs.core.first((state_33328[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35924 = state_33328;
state_33328 = G__35924;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_33328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_33328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_33355 = f__10425__auto__();
(statearr_33355[(6)] = c__10424__auto___35902);

return statearr_33355;
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
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_33377){
var state_val_33378 = (state_33377[(1)]);
if((state_val_33378 === (7))){
var inst_33373 = (state_33377[(2)]);
var state_33377__$1 = state_33377;
var statearr_33379_35928 = state_33377__$1;
(statearr_33379_35928[(2)] = inst_33373);

(statearr_33379_35928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (1))){
var inst_33356 = init;
var inst_33357 = inst_33356;
var state_33377__$1 = (function (){var statearr_33380 = state_33377;
(statearr_33380[(7)] = inst_33357);

return statearr_33380;
})();
var statearr_33381_35929 = state_33377__$1;
(statearr_33381_35929[(2)] = null);

(statearr_33381_35929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (4))){
var inst_33360 = (state_33377[(8)]);
var inst_33360__$1 = (state_33377[(2)]);
var inst_33361 = (inst_33360__$1 == null);
var state_33377__$1 = (function (){var statearr_33383 = state_33377;
(statearr_33383[(8)] = inst_33360__$1);

return statearr_33383;
})();
if(cljs.core.truth_(inst_33361)){
var statearr_33386_35932 = state_33377__$1;
(statearr_33386_35932[(1)] = (5));

} else {
var statearr_33387_35933 = state_33377__$1;
(statearr_33387_35933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (6))){
var inst_33360 = (state_33377[(8)]);
var inst_33364 = (state_33377[(9)]);
var inst_33357 = (state_33377[(7)]);
var inst_33364__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33357,inst_33360) : f.call(null, inst_33357,inst_33360));
var inst_33365 = cljs.core.reduced_QMARK_(inst_33364__$1);
var state_33377__$1 = (function (){var statearr_33388 = state_33377;
(statearr_33388[(9)] = inst_33364__$1);

return statearr_33388;
})();
if(inst_33365){
var statearr_33389_35935 = state_33377__$1;
(statearr_33389_35935[(1)] = (8));

} else {
var statearr_33390_35936 = state_33377__$1;
(statearr_33390_35936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (3))){
var inst_33375 = (state_33377[(2)]);
var state_33377__$1 = state_33377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33377__$1,inst_33375);
} else {
if((state_val_33378 === (2))){
var state_33377__$1 = state_33377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33377__$1,(4),ch);
} else {
if((state_val_33378 === (9))){
var inst_33364 = (state_33377[(9)]);
var inst_33357 = inst_33364;
var state_33377__$1 = (function (){var statearr_33396 = state_33377;
(statearr_33396[(7)] = inst_33357);

return statearr_33396;
})();
var statearr_33398_35937 = state_33377__$1;
(statearr_33398_35937[(2)] = null);

(statearr_33398_35937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (5))){
var inst_33357 = (state_33377[(7)]);
var state_33377__$1 = state_33377;
var statearr_33399_35939 = state_33377__$1;
(statearr_33399_35939[(2)] = inst_33357);

(statearr_33399_35939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (10))){
var inst_33371 = (state_33377[(2)]);
var state_33377__$1 = state_33377;
var statearr_33407_35940 = state_33377__$1;
(statearr_33407_35940[(2)] = inst_33371);

(statearr_33407_35940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (8))){
var inst_33364 = (state_33377[(9)]);
var inst_33367 = cljs.core.deref(inst_33364);
var state_33377__$1 = state_33377;
var statearr_33413_35941 = state_33377__$1;
(statearr_33413_35941[(2)] = inst_33367);

(statearr_33413_35941[(1)] = (10));


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
var statearr_33414 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33414[(0)] = cljs$core$async$reduce_$_state_machine__10330__auto__);

(statearr_33414[(1)] = (1));

return statearr_33414;
});
var cljs$core$async$reduce_$_state_machine__10330__auto____1 = (function (state_33377){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_33377);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e33415){var ex__10333__auto__ = e33415;
var statearr_33416_35944 = state_33377;
(statearr_33416_35944[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_33377[(4)]))){
var statearr_33417_35945 = state_33377;
(statearr_33417_35945[(1)] = cljs.core.first((state_33377[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35946 = state_33377;
state_33377 = G__35946;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10330__auto__ = function(state_33377){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10330__auto____1.call(this,state_33377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10330__auto____0;
cljs$core$async$reduce_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10330__auto____1;
return cljs$core$async$reduce_$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_33420 = f__10425__auto__();
(statearr_33420[(6)] = c__10424__auto__);

return statearr_33420;
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
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_33430){
var state_val_33431 = (state_33430[(1)]);
if((state_val_33431 === (1))){
var inst_33425 = cljs.core.async.reduce(f__$1,init,ch);
var state_33430__$1 = state_33430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33430__$1,(2),inst_33425);
} else {
if((state_val_33431 === (2))){
var inst_33427 = (state_33430[(2)]);
var inst_33428 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33427) : f__$1.call(null, inst_33427));
var state_33430__$1 = state_33430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33430__$1,inst_33428);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10330__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10330__auto____0 = (function (){
var statearr_33440 = [null,null,null,null,null,null,null];
(statearr_33440[(0)] = cljs$core$async$transduce_$_state_machine__10330__auto__);

(statearr_33440[(1)] = (1));

return statearr_33440;
});
var cljs$core$async$transduce_$_state_machine__10330__auto____1 = (function (state_33430){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_33430);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e33441){var ex__10333__auto__ = e33441;
var statearr_33442_35949 = state_33430;
(statearr_33442_35949[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_33430[(4)]))){
var statearr_33443_35950 = state_33430;
(statearr_33443_35950[(1)] = cljs.core.first((state_33430[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35951 = state_33430;
state_33430 = G__35951;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10330__auto__ = function(state_33430){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10330__auto____1.call(this,state_33430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10330__auto____0;
cljs$core$async$transduce_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10330__auto____1;
return cljs$core$async$transduce_$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_33448 = f__10425__auto__();
(statearr_33448[(6)] = c__10424__auto__);

return statearr_33448;
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
var G__33452 = arguments.length;
switch (G__33452) {
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
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_33486){
var state_val_33487 = (state_33486[(1)]);
if((state_val_33487 === (7))){
var inst_33468 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
var statearr_33489_35953 = state_33486__$1;
(statearr_33489_35953[(2)] = inst_33468);

(statearr_33489_35953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (1))){
var inst_33462 = cljs.core.seq(coll);
var inst_33463 = inst_33462;
var state_33486__$1 = (function (){var statearr_33490 = state_33486;
(statearr_33490[(7)] = inst_33463);

return statearr_33490;
})();
var statearr_33491_35954 = state_33486__$1;
(statearr_33491_35954[(2)] = null);

(statearr_33491_35954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (4))){
var inst_33463 = (state_33486[(7)]);
var inst_33466 = cljs.core.first(inst_33463);
var state_33486__$1 = state_33486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33486__$1,(7),ch,inst_33466);
} else {
if((state_val_33487 === (13))){
var inst_33480 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
var statearr_33492_35956 = state_33486__$1;
(statearr_33492_35956[(2)] = inst_33480);

(statearr_33492_35956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (6))){
var inst_33471 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
if(cljs.core.truth_(inst_33471)){
var statearr_33493_35957 = state_33486__$1;
(statearr_33493_35957[(1)] = (8));

} else {
var statearr_33494_35958 = state_33486__$1;
(statearr_33494_35958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (3))){
var inst_33484 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33486__$1,inst_33484);
} else {
if((state_val_33487 === (12))){
var state_33486__$1 = state_33486;
var statearr_33495_35963 = state_33486__$1;
(statearr_33495_35963[(2)] = null);

(statearr_33495_35963[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (2))){
var inst_33463 = (state_33486[(7)]);
var state_33486__$1 = state_33486;
if(cljs.core.truth_(inst_33463)){
var statearr_33496_35964 = state_33486__$1;
(statearr_33496_35964[(1)] = (4));

} else {
var statearr_33497_35965 = state_33486__$1;
(statearr_33497_35965[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (11))){
var inst_33477 = cljs.core.async.close_BANG_(ch);
var state_33486__$1 = state_33486;
var statearr_33498_35966 = state_33486__$1;
(statearr_33498_35966[(2)] = inst_33477);

(statearr_33498_35966[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (9))){
var state_33486__$1 = state_33486;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33499_35967 = state_33486__$1;
(statearr_33499_35967[(1)] = (11));

} else {
var statearr_33500_35968 = state_33486__$1;
(statearr_33500_35968[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (5))){
var inst_33463 = (state_33486[(7)]);
var state_33486__$1 = state_33486;
var statearr_33501_35969 = state_33486__$1;
(statearr_33501_35969[(2)] = inst_33463);

(statearr_33501_35969[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (10))){
var inst_33482 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
var statearr_33502_35973 = state_33486__$1;
(statearr_33502_35973[(2)] = inst_33482);

(statearr_33502_35973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (8))){
var inst_33463 = (state_33486[(7)]);
var inst_33473 = cljs.core.next(inst_33463);
var inst_33463__$1 = inst_33473;
var state_33486__$1 = (function (){var statearr_33503 = state_33486;
(statearr_33503[(7)] = inst_33463__$1);

return statearr_33503;
})();
var statearr_33504_35974 = state_33486__$1;
(statearr_33504_35974[(2)] = null);

(statearr_33504_35974[(1)] = (2));


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
var statearr_33505 = [null,null,null,null,null,null,null,null];
(statearr_33505[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_33505[(1)] = (1));

return statearr_33505;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_33486){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_33486);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e33506){var ex__10333__auto__ = e33506;
var statearr_33507_35975 = state_33486;
(statearr_33507_35975[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_33486[(4)]))){
var statearr_33508_35976 = state_33486;
(statearr_33508_35976[(1)] = cljs.core.first((state_33486[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35977 = state_33486;
state_33486 = G__35977;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_33486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_33486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_33510 = f__10425__auto__();
(statearr_33510[(6)] = c__10424__auto__);

return statearr_33510;
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
var G__33520 = arguments.length;
switch (G__33520) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_35982 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_35982(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35990 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_35990(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35991 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_35991(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35995 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_35995(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33564 = (function (ch,cs,meta33565){
this.ch = ch;
this.cs = cs;
this.meta33565 = meta33565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33566,meta33565__$1){
var self__ = this;
var _33566__$1 = this;
return (new cljs.core.async.t_cljs$core$async33564(self__.ch,self__.cs,meta33565__$1));
}));

(cljs.core.async.t_cljs$core$async33564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33566){
var self__ = this;
var _33566__$1 = this;
return self__.meta33565;
}));

(cljs.core.async.t_cljs$core$async33564.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33564.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33564.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33564.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33564.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33564.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33565","meta33565",948198882,null)], null);
}));

(cljs.core.async.t_cljs$core$async33564.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33564");

(cljs.core.async.t_cljs$core$async33564.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33564");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33564.
 */
cljs.core.async.__GT_t_cljs$core$async33564 = (function cljs$core$async$__GT_t_cljs$core$async33564(ch,cs,meta33565){
return (new cljs.core.async.t_cljs$core$async33564(ch,cs,meta33565));
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
var m = (new cljs.core.async.t_cljs$core$async33564(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__10424__auto___36004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_33745){
var state_val_33746 = (state_33745[(1)]);
if((state_val_33746 === (7))){
var inst_33740 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33750_36006 = state_33745__$1;
(statearr_33750_36006[(2)] = inst_33740);

(statearr_33750_36006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (20))){
var inst_33635 = (state_33745[(7)]);
var inst_33650 = cljs.core.first(inst_33635);
var inst_33651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33650,(0),null);
var inst_33652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33650,(1),null);
var state_33745__$1 = (function (){var statearr_33755 = state_33745;
(statearr_33755[(8)] = inst_33651);

return statearr_33755;
})();
if(cljs.core.truth_(inst_33652)){
var statearr_33757_36015 = state_33745__$1;
(statearr_33757_36015[(1)] = (22));

} else {
var statearr_33758_36016 = state_33745__$1;
(statearr_33758_36016[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (27))){
var inst_33685 = (state_33745[(9)]);
var inst_33692 = (state_33745[(10)]);
var inst_33683 = (state_33745[(11)]);
var inst_33602 = (state_33745[(12)]);
var inst_33692__$1 = cljs.core._nth(inst_33683,inst_33685);
var inst_33694 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33692__$1,inst_33602,done);
var state_33745__$1 = (function (){var statearr_33760 = state_33745;
(statearr_33760[(10)] = inst_33692__$1);

return statearr_33760;
})();
if(cljs.core.truth_(inst_33694)){
var statearr_33761_36021 = state_33745__$1;
(statearr_33761_36021[(1)] = (30));

} else {
var statearr_33763_36022 = state_33745__$1;
(statearr_33763_36022[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (1))){
var state_33745__$1 = state_33745;
var statearr_33765_36023 = state_33745__$1;
(statearr_33765_36023[(2)] = null);

(statearr_33765_36023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (24))){
var inst_33635 = (state_33745[(7)]);
var inst_33657 = (state_33745[(2)]);
var inst_33658 = cljs.core.next(inst_33635);
var inst_33612 = inst_33658;
var inst_33613 = null;
var inst_33614 = (0);
var inst_33615 = (0);
var state_33745__$1 = (function (){var statearr_33769 = state_33745;
(statearr_33769[(13)] = inst_33614);

(statearr_33769[(14)] = inst_33615);

(statearr_33769[(15)] = inst_33657);

(statearr_33769[(16)] = inst_33613);

(statearr_33769[(17)] = inst_33612);

return statearr_33769;
})();
var statearr_33770_36024 = state_33745__$1;
(statearr_33770_36024[(2)] = null);

(statearr_33770_36024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (39))){
var state_33745__$1 = state_33745;
var statearr_33775_36031 = state_33745__$1;
(statearr_33775_36031[(2)] = null);

(statearr_33775_36031[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (4))){
var inst_33602 = (state_33745[(12)]);
var inst_33602__$1 = (state_33745[(2)]);
var inst_33603 = (inst_33602__$1 == null);
var state_33745__$1 = (function (){var statearr_33779 = state_33745;
(statearr_33779[(12)] = inst_33602__$1);

return statearr_33779;
})();
if(cljs.core.truth_(inst_33603)){
var statearr_33780_36033 = state_33745__$1;
(statearr_33780_36033[(1)] = (5));

} else {
var statearr_33781_36035 = state_33745__$1;
(statearr_33781_36035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (15))){
var inst_33614 = (state_33745[(13)]);
var inst_33615 = (state_33745[(14)]);
var inst_33613 = (state_33745[(16)]);
var inst_33612 = (state_33745[(17)]);
var inst_33631 = (state_33745[(2)]);
var inst_33632 = (inst_33615 + (1));
var tmp33772 = inst_33614;
var tmp33773 = inst_33613;
var tmp33774 = inst_33612;
var inst_33612__$1 = tmp33774;
var inst_33613__$1 = tmp33773;
var inst_33614__$1 = tmp33772;
var inst_33615__$1 = inst_33632;
var state_33745__$1 = (function (){var statearr_33785 = state_33745;
(statearr_33785[(13)] = inst_33614__$1);

(statearr_33785[(14)] = inst_33615__$1);

(statearr_33785[(16)] = inst_33613__$1);

(statearr_33785[(17)] = inst_33612__$1);

(statearr_33785[(18)] = inst_33631);

return statearr_33785;
})();
var statearr_33786_36038 = state_33745__$1;
(statearr_33786_36038[(2)] = null);

(statearr_33786_36038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (21))){
var inst_33663 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33791_36045 = state_33745__$1;
(statearr_33791_36045[(2)] = inst_33663);

(statearr_33791_36045[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (31))){
var inst_33692 = (state_33745[(10)]);
var inst_33697 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_33692);
var state_33745__$1 = state_33745;
var statearr_33792_36046 = state_33745__$1;
(statearr_33792_36046[(2)] = inst_33697);

(statearr_33792_36046[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (32))){
var inst_33682 = (state_33745[(19)]);
var inst_33685 = (state_33745[(9)]);
var inst_33683 = (state_33745[(11)]);
var inst_33684 = (state_33745[(20)]);
var inst_33699 = (state_33745[(2)]);
var inst_33700 = (inst_33685 + (1));
var tmp33788 = inst_33682;
var tmp33789 = inst_33683;
var tmp33790 = inst_33684;
var inst_33682__$1 = tmp33788;
var inst_33683__$1 = tmp33789;
var inst_33684__$1 = tmp33790;
var inst_33685__$1 = inst_33700;
var state_33745__$1 = (function (){var statearr_33793 = state_33745;
(statearr_33793[(19)] = inst_33682__$1);

(statearr_33793[(21)] = inst_33699);

(statearr_33793[(9)] = inst_33685__$1);

(statearr_33793[(11)] = inst_33683__$1);

(statearr_33793[(20)] = inst_33684__$1);

return statearr_33793;
})();
var statearr_33796_36051 = state_33745__$1;
(statearr_33796_36051[(2)] = null);

(statearr_33796_36051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (40))){
var inst_33713 = (state_33745[(22)]);
var inst_33717 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_33713);
var state_33745__$1 = state_33745;
var statearr_33798_36052 = state_33745__$1;
(statearr_33798_36052[(2)] = inst_33717);

(statearr_33798_36052[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (33))){
var inst_33703 = (state_33745[(23)]);
var inst_33705 = cljs.core.chunked_seq_QMARK_(inst_33703);
var state_33745__$1 = state_33745;
if(inst_33705){
var statearr_33799_36053 = state_33745__$1;
(statearr_33799_36053[(1)] = (36));

} else {
var statearr_33800_36054 = state_33745__$1;
(statearr_33800_36054[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (13))){
var inst_33625 = (state_33745[(24)]);
var inst_33628 = cljs.core.async.close_BANG_(inst_33625);
var state_33745__$1 = state_33745;
var statearr_33803_36055 = state_33745__$1;
(statearr_33803_36055[(2)] = inst_33628);

(statearr_33803_36055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (22))){
var inst_33651 = (state_33745[(8)]);
var inst_33654 = cljs.core.async.close_BANG_(inst_33651);
var state_33745__$1 = state_33745;
var statearr_33808_36056 = state_33745__$1;
(statearr_33808_36056[(2)] = inst_33654);

(statearr_33808_36056[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (36))){
var inst_33703 = (state_33745[(23)]);
var inst_33707 = cljs.core.chunk_first(inst_33703);
var inst_33708 = cljs.core.chunk_rest(inst_33703);
var inst_33709 = cljs.core.count(inst_33707);
var inst_33682 = inst_33708;
var inst_33683 = inst_33707;
var inst_33684 = inst_33709;
var inst_33685 = (0);
var state_33745__$1 = (function (){var statearr_33812 = state_33745;
(statearr_33812[(19)] = inst_33682);

(statearr_33812[(9)] = inst_33685);

(statearr_33812[(11)] = inst_33683);

(statearr_33812[(20)] = inst_33684);

return statearr_33812;
})();
var statearr_33814_36057 = state_33745__$1;
(statearr_33814_36057[(2)] = null);

(statearr_33814_36057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (41))){
var inst_33703 = (state_33745[(23)]);
var inst_33719 = (state_33745[(2)]);
var inst_33720 = cljs.core.next(inst_33703);
var inst_33682 = inst_33720;
var inst_33683 = null;
var inst_33684 = (0);
var inst_33685 = (0);
var state_33745__$1 = (function (){var statearr_33817 = state_33745;
(statearr_33817[(25)] = inst_33719);

(statearr_33817[(19)] = inst_33682);

(statearr_33817[(9)] = inst_33685);

(statearr_33817[(11)] = inst_33683);

(statearr_33817[(20)] = inst_33684);

return statearr_33817;
})();
var statearr_33819_36064 = state_33745__$1;
(statearr_33819_36064[(2)] = null);

(statearr_33819_36064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (43))){
var state_33745__$1 = state_33745;
var statearr_33820_36065 = state_33745__$1;
(statearr_33820_36065[(2)] = null);

(statearr_33820_36065[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (29))){
var inst_33728 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33822_36066 = state_33745__$1;
(statearr_33822_36066[(2)] = inst_33728);

(statearr_33822_36066[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (44))){
var inst_33737 = (state_33745[(2)]);
var state_33745__$1 = (function (){var statearr_33824 = state_33745;
(statearr_33824[(26)] = inst_33737);

return statearr_33824;
})();
var statearr_33825_36067 = state_33745__$1;
(statearr_33825_36067[(2)] = null);

(statearr_33825_36067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (6))){
var inst_33673 = (state_33745[(27)]);
var inst_33672 = cljs.core.deref(cs);
var inst_33673__$1 = cljs.core.keys(inst_33672);
var inst_33674 = cljs.core.count(inst_33673__$1);
var inst_33675 = cljs.core.reset_BANG_(dctr,inst_33674);
var inst_33681 = cljs.core.seq(inst_33673__$1);
var inst_33682 = inst_33681;
var inst_33683 = null;
var inst_33684 = (0);
var inst_33685 = (0);
var state_33745__$1 = (function (){var statearr_33835 = state_33745;
(statearr_33835[(19)] = inst_33682);

(statearr_33835[(9)] = inst_33685);

(statearr_33835[(28)] = inst_33675);

(statearr_33835[(27)] = inst_33673__$1);

(statearr_33835[(11)] = inst_33683);

(statearr_33835[(20)] = inst_33684);

return statearr_33835;
})();
var statearr_33836_36076 = state_33745__$1;
(statearr_33836_36076[(2)] = null);

(statearr_33836_36076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (28))){
var inst_33682 = (state_33745[(19)]);
var inst_33703 = (state_33745[(23)]);
var inst_33703__$1 = cljs.core.seq(inst_33682);
var state_33745__$1 = (function (){var statearr_33841 = state_33745;
(statearr_33841[(23)] = inst_33703__$1);

return statearr_33841;
})();
if(inst_33703__$1){
var statearr_33842_36077 = state_33745__$1;
(statearr_33842_36077[(1)] = (33));

} else {
var statearr_33843_36078 = state_33745__$1;
(statearr_33843_36078[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (25))){
var inst_33685 = (state_33745[(9)]);
var inst_33684 = (state_33745[(20)]);
var inst_33689 = (inst_33685 < inst_33684);
var inst_33690 = inst_33689;
var state_33745__$1 = state_33745;
if(cljs.core.truth_(inst_33690)){
var statearr_33844_36079 = state_33745__$1;
(statearr_33844_36079[(1)] = (27));

} else {
var statearr_33845_36082 = state_33745__$1;
(statearr_33845_36082[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (34))){
var state_33745__$1 = state_33745;
var statearr_33847_36083 = state_33745__$1;
(statearr_33847_36083[(2)] = null);

(statearr_33847_36083[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (17))){
var state_33745__$1 = state_33745;
var statearr_33853_36084 = state_33745__$1;
(statearr_33853_36084[(2)] = null);

(statearr_33853_36084[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (3))){
var inst_33742 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33745__$1,inst_33742);
} else {
if((state_val_33746 === (12))){
var inst_33668 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33857_36087 = state_33745__$1;
(statearr_33857_36087[(2)] = inst_33668);

(statearr_33857_36087[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (2))){
var state_33745__$1 = state_33745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33745__$1,(4),ch);
} else {
if((state_val_33746 === (23))){
var state_33745__$1 = state_33745;
var statearr_33864_36092 = state_33745__$1;
(statearr_33864_36092[(2)] = null);

(statearr_33864_36092[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (35))){
var inst_33726 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33869_36093 = state_33745__$1;
(statearr_33869_36093[(2)] = inst_33726);

(statearr_33869_36093[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (19))){
var inst_33635 = (state_33745[(7)]);
var inst_33640 = cljs.core.chunk_first(inst_33635);
var inst_33641 = cljs.core.chunk_rest(inst_33635);
var inst_33642 = cljs.core.count(inst_33640);
var inst_33612 = inst_33641;
var inst_33613 = inst_33640;
var inst_33614 = inst_33642;
var inst_33615 = (0);
var state_33745__$1 = (function (){var statearr_33870 = state_33745;
(statearr_33870[(13)] = inst_33614);

(statearr_33870[(14)] = inst_33615);

(statearr_33870[(16)] = inst_33613);

(statearr_33870[(17)] = inst_33612);

return statearr_33870;
})();
var statearr_33872_36094 = state_33745__$1;
(statearr_33872_36094[(2)] = null);

(statearr_33872_36094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (11))){
var inst_33635 = (state_33745[(7)]);
var inst_33612 = (state_33745[(17)]);
var inst_33635__$1 = cljs.core.seq(inst_33612);
var state_33745__$1 = (function (){var statearr_33876 = state_33745;
(statearr_33876[(7)] = inst_33635__$1);

return statearr_33876;
})();
if(inst_33635__$1){
var statearr_33877_36095 = state_33745__$1;
(statearr_33877_36095[(1)] = (16));

} else {
var statearr_33878_36096 = state_33745__$1;
(statearr_33878_36096[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (9))){
var inst_33670 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33883_36097 = state_33745__$1;
(statearr_33883_36097[(2)] = inst_33670);

(statearr_33883_36097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (5))){
var inst_33610 = cljs.core.deref(cs);
var inst_33611 = cljs.core.seq(inst_33610);
var inst_33612 = inst_33611;
var inst_33613 = null;
var inst_33614 = (0);
var inst_33615 = (0);
var state_33745__$1 = (function (){var statearr_33887 = state_33745;
(statearr_33887[(13)] = inst_33614);

(statearr_33887[(14)] = inst_33615);

(statearr_33887[(16)] = inst_33613);

(statearr_33887[(17)] = inst_33612);

return statearr_33887;
})();
var statearr_33891_36108 = state_33745__$1;
(statearr_33891_36108[(2)] = null);

(statearr_33891_36108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (14))){
var state_33745__$1 = state_33745;
var statearr_33892_36112 = state_33745__$1;
(statearr_33892_36112[(2)] = null);

(statearr_33892_36112[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (45))){
var inst_33734 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33896_36113 = state_33745__$1;
(statearr_33896_36113[(2)] = inst_33734);

(statearr_33896_36113[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (26))){
var inst_33673 = (state_33745[(27)]);
var inst_33730 = (state_33745[(2)]);
var inst_33731 = cljs.core.seq(inst_33673);
var state_33745__$1 = (function (){var statearr_33897 = state_33745;
(statearr_33897[(29)] = inst_33730);

return statearr_33897;
})();
if(inst_33731){
var statearr_33898_36114 = state_33745__$1;
(statearr_33898_36114[(1)] = (42));

} else {
var statearr_33901_36115 = state_33745__$1;
(statearr_33901_36115[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (16))){
var inst_33635 = (state_33745[(7)]);
var inst_33638 = cljs.core.chunked_seq_QMARK_(inst_33635);
var state_33745__$1 = state_33745;
if(inst_33638){
var statearr_33903_36119 = state_33745__$1;
(statearr_33903_36119[(1)] = (19));

} else {
var statearr_33904_36120 = state_33745__$1;
(statearr_33904_36120[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (38))){
var inst_33723 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33906_36121 = state_33745__$1;
(statearr_33906_36121[(2)] = inst_33723);

(statearr_33906_36121[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (30))){
var state_33745__$1 = state_33745;
var statearr_33907_36122 = state_33745__$1;
(statearr_33907_36122[(2)] = null);

(statearr_33907_36122[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (10))){
var inst_33615 = (state_33745[(14)]);
var inst_33613 = (state_33745[(16)]);
var inst_33624 = cljs.core._nth(inst_33613,inst_33615);
var inst_33625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33624,(0),null);
var inst_33626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33624,(1),null);
var state_33745__$1 = (function (){var statearr_33912 = state_33745;
(statearr_33912[(24)] = inst_33625);

return statearr_33912;
})();
if(cljs.core.truth_(inst_33626)){
var statearr_33913_36123 = state_33745__$1;
(statearr_33913_36123[(1)] = (13));

} else {
var statearr_33915_36125 = state_33745__$1;
(statearr_33915_36125[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (18))){
var inst_33666 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33918_36127 = state_33745__$1;
(statearr_33918_36127[(2)] = inst_33666);

(statearr_33918_36127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (42))){
var state_33745__$1 = state_33745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33745__$1,(45),dchan);
} else {
if((state_val_33746 === (37))){
var inst_33713 = (state_33745[(22)]);
var inst_33703 = (state_33745[(23)]);
var inst_33602 = (state_33745[(12)]);
var inst_33713__$1 = cljs.core.first(inst_33703);
var inst_33714 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33713__$1,inst_33602,done);
var state_33745__$1 = (function (){var statearr_33919 = state_33745;
(statearr_33919[(22)] = inst_33713__$1);

return statearr_33919;
})();
if(cljs.core.truth_(inst_33714)){
var statearr_33920_36131 = state_33745__$1;
(statearr_33920_36131[(1)] = (39));

} else {
var statearr_33923_36132 = state_33745__$1;
(statearr_33923_36132[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (8))){
var inst_33614 = (state_33745[(13)]);
var inst_33615 = (state_33745[(14)]);
var inst_33617 = (inst_33615 < inst_33614);
var inst_33618 = inst_33617;
var state_33745__$1 = state_33745;
if(cljs.core.truth_(inst_33618)){
var statearr_33925_36135 = state_33745__$1;
(statearr_33925_36135[(1)] = (10));

} else {
var statearr_33926_36136 = state_33745__$1;
(statearr_33926_36136[(1)] = (11));

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
var statearr_33927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33927[(0)] = cljs$core$async$mult_$_state_machine__10330__auto__);

(statearr_33927[(1)] = (1));

return statearr_33927;
});
var cljs$core$async$mult_$_state_machine__10330__auto____1 = (function (state_33745){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_33745);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e33928){var ex__10333__auto__ = e33928;
var statearr_33929_36139 = state_33745;
(statearr_33929_36139[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_33745[(4)]))){
var statearr_33930_36141 = state_33745;
(statearr_33930_36141[(1)] = cljs.core.first((state_33745[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36142 = state_33745;
state_33745 = G__36142;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10330__auto__ = function(state_33745){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10330__auto____1.call(this,state_33745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10330__auto____0;
cljs$core$async$mult_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10330__auto____1;
return cljs$core$async$mult_$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_33931 = f__10425__auto__();
(statearr_33931[(6)] = c__10424__auto___36004);

return statearr_33931;
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
var G__33935 = arguments.length;
switch (G__33935) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_36144 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_36144(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36149 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_36149(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36153 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36153(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36159 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_36159(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36163 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36163(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___36167 = arguments.length;
var i__5727__auto___36168 = (0);
while(true){
if((i__5727__auto___36168 < len__5726__auto___36167)){
args__5732__auto__.push((arguments[i__5727__auto___36168]));

var G__36169 = (i__5727__auto___36168 + (1));
i__5727__auto___36168 = G__36169;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33989){
var map__33990 = p__33989;
var map__33990__$1 = cljs.core.__destructure_map(map__33990);
var opts = map__33990__$1;
var statearr_33991_36170 = state;
(statearr_33991_36170[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33993_36171 = state;
(statearr_33993_36171[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_33994_36172 = state;
(statearr_33994_36172[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33983){
var G__33984 = cljs.core.first(seq33983);
var seq33983__$1 = cljs.core.next(seq33983);
var G__33985 = cljs.core.first(seq33983__$1);
var seq33983__$2 = cljs.core.next(seq33983__$1);
var G__33986 = cljs.core.first(seq33983__$2);
var seq33983__$3 = cljs.core.next(seq33983__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33984,G__33985,G__33986,seq33983__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34008 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34009){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34009 = meta34009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34010,meta34009__$1){
var self__ = this;
var _34010__$1 = this;
return (new cljs.core.async.t_cljs$core$async34008(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34009__$1));
}));

(cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34010){
var self__ = this;
var _34010__$1 = this;
return self__.meta34009;
}));

(cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async34008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34009","meta34009",-6026221,null)], null);
}));

(cljs.core.async.t_cljs$core$async34008.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34008");

(cljs.core.async.t_cljs$core$async34008.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34008");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34008.
 */
cljs.core.async.__GT_t_cljs$core$async34008 = (function cljs$core$async$__GT_t_cljs$core$async34008(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34009){
return (new cljs.core.async.t_cljs$core$async34008(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34009));
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
var m = (new cljs.core.async.t_cljs$core$async34008(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__10424__auto___36181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_34097){
var state_val_34099 = (state_34097[(1)]);
if((state_val_34099 === (7))){
var inst_34057 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
if(cljs.core.truth_(inst_34057)){
var statearr_34102_36182 = state_34097__$1;
(statearr_34102_36182[(1)] = (8));

} else {
var statearr_34104_36183 = state_34097__$1;
(statearr_34104_36183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (20))){
var inst_34049 = (state_34097[(7)]);
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34097__$1,(23),out,inst_34049);
} else {
if((state_val_34099 === (1))){
var inst_34027 = calc_state();
var inst_34028 = cljs.core.__destructure_map(inst_34027);
var inst_34029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34028,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34028,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34028,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34032 = inst_34027;
var state_34097__$1 = (function (){var statearr_34108 = state_34097;
(statearr_34108[(8)] = inst_34032);

(statearr_34108[(9)] = inst_34029);

(statearr_34108[(10)] = inst_34030);

(statearr_34108[(11)] = inst_34031);

return statearr_34108;
})();
var statearr_34110_36184 = state_34097__$1;
(statearr_34110_36184[(2)] = null);

(statearr_34110_36184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (24))){
var inst_34037 = (state_34097[(12)]);
var inst_34032 = inst_34037;
var state_34097__$1 = (function (){var statearr_34112 = state_34097;
(statearr_34112[(8)] = inst_34032);

return statearr_34112;
})();
var statearr_34115_36185 = state_34097__$1;
(statearr_34115_36185[(2)] = null);

(statearr_34115_36185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (4))){
var inst_34052 = (state_34097[(13)]);
var inst_34049 = (state_34097[(7)]);
var inst_34048 = (state_34097[(2)]);
var inst_34049__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34048,(0),null);
var inst_34050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34048,(1),null);
var inst_34052__$1 = (inst_34049__$1 == null);
var state_34097__$1 = (function (){var statearr_34117 = state_34097;
(statearr_34117[(13)] = inst_34052__$1);

(statearr_34117[(7)] = inst_34049__$1);

(statearr_34117[(14)] = inst_34050);

return statearr_34117;
})();
if(cljs.core.truth_(inst_34052__$1)){
var statearr_34118_36188 = state_34097__$1;
(statearr_34118_36188[(1)] = (5));

} else {
var statearr_34119_36190 = state_34097__$1;
(statearr_34119_36190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (15))){
var inst_34071 = (state_34097[(15)]);
var inst_34038 = (state_34097[(16)]);
var inst_34071__$1 = cljs.core.empty_QMARK_(inst_34038);
var state_34097__$1 = (function (){var statearr_34120 = state_34097;
(statearr_34120[(15)] = inst_34071__$1);

return statearr_34120;
})();
if(inst_34071__$1){
var statearr_34123_36191 = state_34097__$1;
(statearr_34123_36191[(1)] = (17));

} else {
var statearr_34124_36194 = state_34097__$1;
(statearr_34124_36194[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (21))){
var inst_34037 = (state_34097[(12)]);
var inst_34032 = inst_34037;
var state_34097__$1 = (function (){var statearr_34126 = state_34097;
(statearr_34126[(8)] = inst_34032);

return statearr_34126;
})();
var statearr_34127_36197 = state_34097__$1;
(statearr_34127_36197[(2)] = null);

(statearr_34127_36197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (13))){
var inst_34064 = (state_34097[(2)]);
var inst_34065 = calc_state();
var inst_34032 = inst_34065;
var state_34097__$1 = (function (){var statearr_34133 = state_34097;
(statearr_34133[(17)] = inst_34064);

(statearr_34133[(8)] = inst_34032);

return statearr_34133;
})();
var statearr_34134_36199 = state_34097__$1;
(statearr_34134_36199[(2)] = null);

(statearr_34134_36199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (22))){
var inst_34091 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34135_36200 = state_34097__$1;
(statearr_34135_36200[(2)] = inst_34091);

(statearr_34135_36200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (6))){
var inst_34050 = (state_34097[(14)]);
var inst_34055 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34050,change);
var state_34097__$1 = state_34097;
var statearr_34137_36204 = state_34097__$1;
(statearr_34137_36204[(2)] = inst_34055);

(statearr_34137_36204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (25))){
var state_34097__$1 = state_34097;
var statearr_34140_36206 = state_34097__$1;
(statearr_34140_36206[(2)] = null);

(statearr_34140_36206[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (17))){
var inst_34039 = (state_34097[(18)]);
var inst_34050 = (state_34097[(14)]);
var inst_34073 = (inst_34039.cljs$core$IFn$_invoke$arity$1 ? inst_34039.cljs$core$IFn$_invoke$arity$1(inst_34050) : inst_34039.call(null, inst_34050));
var inst_34074 = cljs.core.not(inst_34073);
var state_34097__$1 = state_34097;
var statearr_34142_36210 = state_34097__$1;
(statearr_34142_36210[(2)] = inst_34074);

(statearr_34142_36210[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (3))){
var inst_34095 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34097__$1,inst_34095);
} else {
if((state_val_34099 === (12))){
var state_34097__$1 = state_34097;
var statearr_34145_36211 = state_34097__$1;
(statearr_34145_36211[(2)] = null);

(statearr_34145_36211[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (2))){
var inst_34032 = (state_34097[(8)]);
var inst_34037 = (state_34097[(12)]);
var inst_34037__$1 = cljs.core.__destructure_map(inst_34032);
var inst_34038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34037__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34037__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34037__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34097__$1 = (function (){var statearr_34146 = state_34097;
(statearr_34146[(18)] = inst_34039);

(statearr_34146[(12)] = inst_34037__$1);

(statearr_34146[(16)] = inst_34038);

return statearr_34146;
})();
return cljs.core.async.ioc_alts_BANG_(state_34097__$1,(4),inst_34040);
} else {
if((state_val_34099 === (23))){
var inst_34082 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
if(cljs.core.truth_(inst_34082)){
var statearr_34147_36214 = state_34097__$1;
(statearr_34147_36214[(1)] = (24));

} else {
var statearr_34148_36215 = state_34097__$1;
(statearr_34148_36215[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (19))){
var inst_34077 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34151_36218 = state_34097__$1;
(statearr_34151_36218[(2)] = inst_34077);

(statearr_34151_36218[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (11))){
var inst_34050 = (state_34097[(14)]);
var inst_34061 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34050);
var state_34097__$1 = state_34097;
var statearr_34152_36219 = state_34097__$1;
(statearr_34152_36219[(2)] = inst_34061);

(statearr_34152_36219[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (9))){
var inst_34068 = (state_34097[(19)]);
var inst_34050 = (state_34097[(14)]);
var inst_34038 = (state_34097[(16)]);
var inst_34068__$1 = (inst_34038.cljs$core$IFn$_invoke$arity$1 ? inst_34038.cljs$core$IFn$_invoke$arity$1(inst_34050) : inst_34038.call(null, inst_34050));
var state_34097__$1 = (function (){var statearr_34157 = state_34097;
(statearr_34157[(19)] = inst_34068__$1);

return statearr_34157;
})();
if(cljs.core.truth_(inst_34068__$1)){
var statearr_34160_36221 = state_34097__$1;
(statearr_34160_36221[(1)] = (14));

} else {
var statearr_34161_36222 = state_34097__$1;
(statearr_34161_36222[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (5))){
var inst_34052 = (state_34097[(13)]);
var state_34097__$1 = state_34097;
var statearr_34163_36227 = state_34097__$1;
(statearr_34163_36227[(2)] = inst_34052);

(statearr_34163_36227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (14))){
var inst_34068 = (state_34097[(19)]);
var state_34097__$1 = state_34097;
var statearr_34164_36228 = state_34097__$1;
(statearr_34164_36228[(2)] = inst_34068);

(statearr_34164_36228[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (26))){
var inst_34087 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34166_36229 = state_34097__$1;
(statearr_34166_36229[(2)] = inst_34087);

(statearr_34166_36229[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (16))){
var inst_34079 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
if(cljs.core.truth_(inst_34079)){
var statearr_34170_36230 = state_34097__$1;
(statearr_34170_36230[(1)] = (20));

} else {
var statearr_34171_36231 = state_34097__$1;
(statearr_34171_36231[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (10))){
var inst_34093 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34172_36232 = state_34097__$1;
(statearr_34172_36232[(2)] = inst_34093);

(statearr_34172_36232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (18))){
var inst_34071 = (state_34097[(15)]);
var state_34097__$1 = state_34097;
var statearr_34173_36236 = state_34097__$1;
(statearr_34173_36236[(2)] = inst_34071);

(statearr_34173_36236[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (8))){
var inst_34049 = (state_34097[(7)]);
var inst_34059 = (inst_34049 == null);
var state_34097__$1 = state_34097;
if(cljs.core.truth_(inst_34059)){
var statearr_34174_36237 = state_34097__$1;
(statearr_34174_36237[(1)] = (11));

} else {
var statearr_34176_36242 = state_34097__$1;
(statearr_34176_36242[(1)] = (12));

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
var statearr_34178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34178[(0)] = cljs$core$async$mix_$_state_machine__10330__auto__);

(statearr_34178[(1)] = (1));

return statearr_34178;
});
var cljs$core$async$mix_$_state_machine__10330__auto____1 = (function (state_34097){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_34097);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e34180){var ex__10333__auto__ = e34180;
var statearr_34182_36251 = state_34097;
(statearr_34182_36251[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_34097[(4)]))){
var statearr_34183_36252 = state_34097;
(statearr_34183_36252[(1)] = cljs.core.first((state_34097[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36253 = state_34097;
state_34097 = G__36253;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10330__auto__ = function(state_34097){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10330__auto____1.call(this,state_34097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10330__auto____0;
cljs$core$async$mix_$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10330__auto____1;
return cljs$core$async$mix_$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_34184 = f__10425__auto__();
(statearr_34184[(6)] = c__10424__auto___36181);

return statearr_34184;
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

var cljs$core$async$Pub$sub_STAR_$dyn_36260 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_36260(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36263 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_36263(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36267 = (function() {
var G__36270 = null;
var G__36270__1 = (function (p){
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
var G__36270__2 = (function (p,v){
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
G__36270 = function(p,v){
switch(arguments.length){
case 1:
return G__36270__1.call(this,p);
case 2:
return G__36270__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36270.cljs$core$IFn$_invoke$arity$1 = G__36270__1;
G__36270.cljs$core$IFn$_invoke$arity$2 = G__36270__2;
return G__36270;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34232 = arguments.length;
switch (G__34232) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36267(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36267(p,v);
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
cljs.core.async.t_cljs$core$async34273 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34274){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34274 = meta34274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34275,meta34274__$1){
var self__ = this;
var _34275__$1 = this;
return (new cljs.core.async.t_cljs$core$async34273(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34274__$1));
}));

(cljs.core.async.t_cljs$core$async34273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34275){
var self__ = this;
var _34275__$1 = this;
return self__.meta34274;
}));

(cljs.core.async.t_cljs$core$async34273.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34273.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34273.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34273.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34273.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async34273.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34273.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34274","meta34274",-1742852949,null)], null);
}));

(cljs.core.async.t_cljs$core$async34273.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34273");

(cljs.core.async.t_cljs$core$async34273.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34273");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34273.
 */
cljs.core.async.__GT_t_cljs$core$async34273 = (function cljs$core$async$__GT_t_cljs$core$async34273(ch,topic_fn,buf_fn,mults,ensure_mult,meta34274){
return (new cljs.core.async.t_cljs$core$async34273(ch,topic_fn,buf_fn,mults,ensure_mult,meta34274));
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
var G__34243 = arguments.length;
switch (G__34243) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34237_SHARP_){
if(cljs.core.truth_((p1__34237_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34237_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34237_SHARP_.call(null, topic)))){
return p1__34237_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34237_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async34273(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__10424__auto___36301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_34376){
var state_val_34377 = (state_34376[(1)]);
if((state_val_34377 === (7))){
var inst_34371 = (state_34376[(2)]);
var state_34376__$1 = state_34376;
var statearr_34383_36302 = state_34376__$1;
(statearr_34383_36302[(2)] = inst_34371);

(statearr_34383_36302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (20))){
var state_34376__$1 = state_34376;
var statearr_34384_36307 = state_34376__$1;
(statearr_34384_36307[(2)] = null);

(statearr_34384_36307[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (1))){
var state_34376__$1 = state_34376;
var statearr_34385_36308 = state_34376__$1;
(statearr_34385_36308[(2)] = null);

(statearr_34385_36308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (24))){
var inst_34354 = (state_34376[(7)]);
var inst_34363 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34354);
var state_34376__$1 = state_34376;
var statearr_34388_36309 = state_34376__$1;
(statearr_34388_36309[(2)] = inst_34363);

(statearr_34388_36309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (4))){
var inst_34305 = (state_34376[(8)]);
var inst_34305__$1 = (state_34376[(2)]);
var inst_34306 = (inst_34305__$1 == null);
var state_34376__$1 = (function (){var statearr_34389 = state_34376;
(statearr_34389[(8)] = inst_34305__$1);

return statearr_34389;
})();
if(cljs.core.truth_(inst_34306)){
var statearr_34390_36311 = state_34376__$1;
(statearr_34390_36311[(1)] = (5));

} else {
var statearr_34391_36312 = state_34376__$1;
(statearr_34391_36312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (15))){
var inst_34348 = (state_34376[(2)]);
var state_34376__$1 = state_34376;
var statearr_34393_36313 = state_34376__$1;
(statearr_34393_36313[(2)] = inst_34348);

(statearr_34393_36313[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (21))){
var inst_34368 = (state_34376[(2)]);
var state_34376__$1 = (function (){var statearr_34394 = state_34376;
(statearr_34394[(9)] = inst_34368);

return statearr_34394;
})();
var statearr_34396_36314 = state_34376__$1;
(statearr_34396_36314[(2)] = null);

(statearr_34396_36314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (13))){
var inst_34329 = (state_34376[(10)]);
var inst_34332 = cljs.core.chunked_seq_QMARK_(inst_34329);
var state_34376__$1 = state_34376;
if(inst_34332){
var statearr_34397_36315 = state_34376__$1;
(statearr_34397_36315[(1)] = (16));

} else {
var statearr_34398_36316 = state_34376__$1;
(statearr_34398_36316[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (22))){
var inst_34360 = (state_34376[(2)]);
var state_34376__$1 = state_34376;
if(cljs.core.truth_(inst_34360)){
var statearr_34399_36317 = state_34376__$1;
(statearr_34399_36317[(1)] = (23));

} else {
var statearr_34400_36318 = state_34376__$1;
(statearr_34400_36318[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (6))){
var inst_34305 = (state_34376[(8)]);
var inst_34356 = (state_34376[(11)]);
var inst_34354 = (state_34376[(7)]);
var inst_34354__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34305) : topic_fn.call(null, inst_34305));
var inst_34355 = cljs.core.deref(mults);
var inst_34356__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34355,inst_34354__$1);
var state_34376__$1 = (function (){var statearr_34401 = state_34376;
(statearr_34401[(11)] = inst_34356__$1);

(statearr_34401[(7)] = inst_34354__$1);

return statearr_34401;
})();
if(cljs.core.truth_(inst_34356__$1)){
var statearr_34402_36321 = state_34376__$1;
(statearr_34402_36321[(1)] = (19));

} else {
var statearr_34403_36322 = state_34376__$1;
(statearr_34403_36322[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (25))){
var inst_34365 = (state_34376[(2)]);
var state_34376__$1 = state_34376;
var statearr_34406_36323 = state_34376__$1;
(statearr_34406_36323[(2)] = inst_34365);

(statearr_34406_36323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (17))){
var inst_34329 = (state_34376[(10)]);
var inst_34339 = cljs.core.first(inst_34329);
var inst_34340 = cljs.core.async.muxch_STAR_(inst_34339);
var inst_34341 = cljs.core.async.close_BANG_(inst_34340);
var inst_34342 = cljs.core.next(inst_34329);
var inst_34315 = inst_34342;
var inst_34316 = null;
var inst_34317 = (0);
var inst_34318 = (0);
var state_34376__$1 = (function (){var statearr_34410 = state_34376;
(statearr_34410[(12)] = inst_34315);

(statearr_34410[(13)] = inst_34317);

(statearr_34410[(14)] = inst_34341);

(statearr_34410[(15)] = inst_34318);

(statearr_34410[(16)] = inst_34316);

return statearr_34410;
})();
var statearr_34411_36326 = state_34376__$1;
(statearr_34411_36326[(2)] = null);

(statearr_34411_36326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (3))){
var inst_34373 = (state_34376[(2)]);
var state_34376__$1 = state_34376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34376__$1,inst_34373);
} else {
if((state_val_34377 === (12))){
var inst_34350 = (state_34376[(2)]);
var state_34376__$1 = state_34376;
var statearr_34415_36331 = state_34376__$1;
(statearr_34415_36331[(2)] = inst_34350);

(statearr_34415_36331[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (2))){
var state_34376__$1 = state_34376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34376__$1,(4),ch);
} else {
if((state_val_34377 === (23))){
var state_34376__$1 = state_34376;
var statearr_34416_36334 = state_34376__$1;
(statearr_34416_36334[(2)] = null);

(statearr_34416_36334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (19))){
var inst_34305 = (state_34376[(8)]);
var inst_34356 = (state_34376[(11)]);
var inst_34358 = cljs.core.async.muxch_STAR_(inst_34356);
var state_34376__$1 = state_34376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34376__$1,(22),inst_34358,inst_34305);
} else {
if((state_val_34377 === (11))){
var inst_34315 = (state_34376[(12)]);
var inst_34329 = (state_34376[(10)]);
var inst_34329__$1 = cljs.core.seq(inst_34315);
var state_34376__$1 = (function (){var statearr_34419 = state_34376;
(statearr_34419[(10)] = inst_34329__$1);

return statearr_34419;
})();
if(inst_34329__$1){
var statearr_34422_36337 = state_34376__$1;
(statearr_34422_36337[(1)] = (13));

} else {
var statearr_34423_36339 = state_34376__$1;
(statearr_34423_36339[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (9))){
var inst_34352 = (state_34376[(2)]);
var state_34376__$1 = state_34376;
var statearr_34428_36340 = state_34376__$1;
(statearr_34428_36340[(2)] = inst_34352);

(statearr_34428_36340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (5))){
var inst_34312 = cljs.core.deref(mults);
var inst_34313 = cljs.core.vals(inst_34312);
var inst_34314 = cljs.core.seq(inst_34313);
var inst_34315 = inst_34314;
var inst_34316 = null;
var inst_34317 = (0);
var inst_34318 = (0);
var state_34376__$1 = (function (){var statearr_34429 = state_34376;
(statearr_34429[(12)] = inst_34315);

(statearr_34429[(13)] = inst_34317);

(statearr_34429[(15)] = inst_34318);

(statearr_34429[(16)] = inst_34316);

return statearr_34429;
})();
var statearr_34430_36344 = state_34376__$1;
(statearr_34430_36344[(2)] = null);

(statearr_34430_36344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (14))){
var state_34376__$1 = state_34376;
var statearr_34434_36346 = state_34376__$1;
(statearr_34434_36346[(2)] = null);

(statearr_34434_36346[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (16))){
var inst_34329 = (state_34376[(10)]);
var inst_34334 = cljs.core.chunk_first(inst_34329);
var inst_34335 = cljs.core.chunk_rest(inst_34329);
var inst_34336 = cljs.core.count(inst_34334);
var inst_34315 = inst_34335;
var inst_34316 = inst_34334;
var inst_34317 = inst_34336;
var inst_34318 = (0);
var state_34376__$1 = (function (){var statearr_34435 = state_34376;
(statearr_34435[(12)] = inst_34315);

(statearr_34435[(13)] = inst_34317);

(statearr_34435[(15)] = inst_34318);

(statearr_34435[(16)] = inst_34316);

return statearr_34435;
})();
var statearr_34436_36348 = state_34376__$1;
(statearr_34436_36348[(2)] = null);

(statearr_34436_36348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (10))){
var inst_34315 = (state_34376[(12)]);
var inst_34317 = (state_34376[(13)]);
var inst_34318 = (state_34376[(15)]);
var inst_34316 = (state_34376[(16)]);
var inst_34323 = cljs.core._nth(inst_34316,inst_34318);
var inst_34324 = cljs.core.async.muxch_STAR_(inst_34323);
var inst_34325 = cljs.core.async.close_BANG_(inst_34324);
var inst_34326 = (inst_34318 + (1));
var tmp34431 = inst_34315;
var tmp34432 = inst_34317;
var tmp34433 = inst_34316;
var inst_34315__$1 = tmp34431;
var inst_34316__$1 = tmp34433;
var inst_34317__$1 = tmp34432;
var inst_34318__$1 = inst_34326;
var state_34376__$1 = (function (){var statearr_34437 = state_34376;
(statearr_34437[(12)] = inst_34315__$1);

(statearr_34437[(13)] = inst_34317__$1);

(statearr_34437[(15)] = inst_34318__$1);

(statearr_34437[(17)] = inst_34325);

(statearr_34437[(16)] = inst_34316__$1);

return statearr_34437;
})();
var statearr_34439_36353 = state_34376__$1;
(statearr_34439_36353[(2)] = null);

(statearr_34439_36353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (18))){
var inst_34345 = (state_34376[(2)]);
var state_34376__$1 = state_34376;
var statearr_34441_36354 = state_34376__$1;
(statearr_34441_36354[(2)] = inst_34345);

(statearr_34441_36354[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34377 === (8))){
var inst_34317 = (state_34376[(13)]);
var inst_34318 = (state_34376[(15)]);
var inst_34320 = (inst_34318 < inst_34317);
var inst_34321 = inst_34320;
var state_34376__$1 = state_34376;
if(cljs.core.truth_(inst_34321)){
var statearr_34442_36355 = state_34376__$1;
(statearr_34442_36355[(1)] = (10));

} else {
var statearr_34443_36356 = state_34376__$1;
(statearr_34443_36356[(1)] = (11));

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
var statearr_34445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34445[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_34445[(1)] = (1));

return statearr_34445;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_34376){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_34376);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e34448){var ex__10333__auto__ = e34448;
var statearr_34449_36359 = state_34376;
(statearr_34449_36359[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_34376[(4)]))){
var statearr_34451_36360 = state_34376;
(statearr_34451_36360[(1)] = cljs.core.first((state_34376[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36361 = state_34376;
state_34376 = G__36361;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_34376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_34376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_34452 = f__10425__auto__();
(statearr_34452[(6)] = c__10424__auto___36301);

return statearr_34452;
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
var G__34465 = arguments.length;
switch (G__34465) {
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
var G__34473 = arguments.length;
switch (G__34473) {
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
var G__34480 = arguments.length;
switch (G__34480) {
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
var c__10424__auto___36376 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_34536){
var state_val_34537 = (state_34536[(1)]);
if((state_val_34537 === (7))){
var state_34536__$1 = state_34536;
var statearr_34538_36379 = state_34536__$1;
(statearr_34538_36379[(2)] = null);

(statearr_34538_36379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (1))){
var state_34536__$1 = state_34536;
var statearr_34540_36381 = state_34536__$1;
(statearr_34540_36381[(2)] = null);

(statearr_34540_36381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (4))){
var inst_34497 = (state_34536[(7)]);
var inst_34496 = (state_34536[(8)]);
var inst_34499 = (inst_34497 < inst_34496);
var state_34536__$1 = state_34536;
if(cljs.core.truth_(inst_34499)){
var statearr_34544_36382 = state_34536__$1;
(statearr_34544_36382[(1)] = (6));

} else {
var statearr_34545_36383 = state_34536__$1;
(statearr_34545_36383[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (15))){
var inst_34522 = (state_34536[(9)]);
var inst_34527 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34522);
var state_34536__$1 = state_34536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34536__$1,(17),out,inst_34527);
} else {
if((state_val_34537 === (13))){
var inst_34522 = (state_34536[(9)]);
var inst_34522__$1 = (state_34536[(2)]);
var inst_34523 = cljs.core.some(cljs.core.nil_QMARK_,inst_34522__$1);
var state_34536__$1 = (function (){var statearr_34547 = state_34536;
(statearr_34547[(9)] = inst_34522__$1);

return statearr_34547;
})();
if(cljs.core.truth_(inst_34523)){
var statearr_34548_36384 = state_34536__$1;
(statearr_34548_36384[(1)] = (14));

} else {
var statearr_34549_36385 = state_34536__$1;
(statearr_34549_36385[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (6))){
var state_34536__$1 = state_34536;
var statearr_34550_36386 = state_34536__$1;
(statearr_34550_36386[(2)] = null);

(statearr_34550_36386[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (17))){
var inst_34529 = (state_34536[(2)]);
var state_34536__$1 = (function (){var statearr_34556 = state_34536;
(statearr_34556[(10)] = inst_34529);

return statearr_34556;
})();
var statearr_34557_36389 = state_34536__$1;
(statearr_34557_36389[(2)] = null);

(statearr_34557_36389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (3))){
var inst_34534 = (state_34536[(2)]);
var state_34536__$1 = state_34536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34536__$1,inst_34534);
} else {
if((state_val_34537 === (12))){
var _ = (function (){var statearr_34560 = state_34536;
(statearr_34560[(4)] = cljs.core.rest((state_34536[(4)])));

return statearr_34560;
})();
var state_34536__$1 = state_34536;
var ex34555 = (state_34536__$1[(2)]);
var statearr_34561_36395 = state_34536__$1;
(statearr_34561_36395[(5)] = ex34555);


if((ex34555 instanceof Object)){
var statearr_34562_36396 = state_34536__$1;
(statearr_34562_36396[(1)] = (11));

(statearr_34562_36396[(5)] = null);

} else {
throw ex34555;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (2))){
var inst_34495 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34496 = cnt;
var inst_34497 = (0);
var state_34536__$1 = (function (){var statearr_34564 = state_34536;
(statearr_34564[(7)] = inst_34497);

(statearr_34564[(11)] = inst_34495);

(statearr_34564[(8)] = inst_34496);

return statearr_34564;
})();
var statearr_34567_36398 = state_34536__$1;
(statearr_34567_36398[(2)] = null);

(statearr_34567_36398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (11))){
var inst_34501 = (state_34536[(2)]);
var inst_34502 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34536__$1 = (function (){var statearr_34569 = state_34536;
(statearr_34569[(12)] = inst_34501);

return statearr_34569;
})();
var statearr_34570_36399 = state_34536__$1;
(statearr_34570_36399[(2)] = inst_34502);

(statearr_34570_36399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (9))){
var inst_34497 = (state_34536[(7)]);
var _ = (function (){var statearr_34574 = state_34536;
(statearr_34574[(4)] = cljs.core.cons((12),(state_34536[(4)])));

return statearr_34574;
})();
var inst_34508 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34497) : chs__$1.call(null, inst_34497));
var inst_34509 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34497) : done.call(null, inst_34497));
var inst_34510 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34508,inst_34509);
var ___$1 = (function (){var statearr_34576 = state_34536;
(statearr_34576[(4)] = cljs.core.rest((state_34536[(4)])));

return statearr_34576;
})();
var state_34536__$1 = state_34536;
var statearr_34579_36401 = state_34536__$1;
(statearr_34579_36401[(2)] = inst_34510);

(statearr_34579_36401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (5))){
var inst_34520 = (state_34536[(2)]);
var state_34536__$1 = (function (){var statearr_34582 = state_34536;
(statearr_34582[(13)] = inst_34520);

return statearr_34582;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34536__$1,(13),dchan);
} else {
if((state_val_34537 === (14))){
var inst_34525 = cljs.core.async.close_BANG_(out);
var state_34536__$1 = state_34536;
var statearr_34583_36403 = state_34536__$1;
(statearr_34583_36403[(2)] = inst_34525);

(statearr_34583_36403[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (16))){
var inst_34532 = (state_34536[(2)]);
var state_34536__$1 = state_34536;
var statearr_34584_36405 = state_34536__$1;
(statearr_34584_36405[(2)] = inst_34532);

(statearr_34584_36405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (10))){
var inst_34497 = (state_34536[(7)]);
var inst_34513 = (state_34536[(2)]);
var inst_34514 = (inst_34497 + (1));
var inst_34497__$1 = inst_34514;
var state_34536__$1 = (function (){var statearr_34585 = state_34536;
(statearr_34585[(14)] = inst_34513);

(statearr_34585[(7)] = inst_34497__$1);

return statearr_34585;
})();
var statearr_34586_36410 = state_34536__$1;
(statearr_34586_36410[(2)] = null);

(statearr_34586_36410[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (8))){
var inst_34518 = (state_34536[(2)]);
var state_34536__$1 = state_34536;
var statearr_34588_36412 = state_34536__$1;
(statearr_34588_36412[(2)] = inst_34518);

(statearr_34588_36412[(1)] = (5));


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
var statearr_34591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34591[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_34591[(1)] = (1));

return statearr_34591;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_34536){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_34536);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e34592){var ex__10333__auto__ = e34592;
var statearr_34593_36415 = state_34536;
(statearr_34593_36415[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_34536[(4)]))){
var statearr_34594_36418 = state_34536;
(statearr_34594_36418[(1)] = cljs.core.first((state_34536[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36422 = state_34536;
state_34536 = G__36422;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_34536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_34536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_34595 = f__10425__auto__();
(statearr_34595[(6)] = c__10424__auto___36376);

return statearr_34595;
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
var G__34601 = arguments.length;
switch (G__34601) {
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
var c__10424__auto___36428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_34645){
var state_val_34646 = (state_34645[(1)]);
if((state_val_34646 === (7))){
var inst_34617 = (state_34645[(7)]);
var inst_34618 = (state_34645[(8)]);
var inst_34617__$1 = (state_34645[(2)]);
var inst_34618__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34617__$1,(0),null);
var inst_34619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34617__$1,(1),null);
var inst_34620 = (inst_34618__$1 == null);
var state_34645__$1 = (function (){var statearr_34649 = state_34645;
(statearr_34649[(9)] = inst_34619);

(statearr_34649[(7)] = inst_34617__$1);

(statearr_34649[(8)] = inst_34618__$1);

return statearr_34649;
})();
if(cljs.core.truth_(inst_34620)){
var statearr_34650_36430 = state_34645__$1;
(statearr_34650_36430[(1)] = (8));

} else {
var statearr_34651_36431 = state_34645__$1;
(statearr_34651_36431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (1))){
var inst_34607 = cljs.core.vec(chs);
var inst_34608 = inst_34607;
var state_34645__$1 = (function (){var statearr_34656 = state_34645;
(statearr_34656[(10)] = inst_34608);

return statearr_34656;
})();
var statearr_34658_36435 = state_34645__$1;
(statearr_34658_36435[(2)] = null);

(statearr_34658_36435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (4))){
var inst_34608 = (state_34645[(10)]);
var state_34645__$1 = state_34645;
return cljs.core.async.ioc_alts_BANG_(state_34645__$1,(7),inst_34608);
} else {
if((state_val_34646 === (6))){
var inst_34637 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34663_36436 = state_34645__$1;
(statearr_34663_36436[(2)] = inst_34637);

(statearr_34663_36436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (3))){
var inst_34639 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34645__$1,inst_34639);
} else {
if((state_val_34646 === (2))){
var inst_34608 = (state_34645[(10)]);
var inst_34610 = cljs.core.count(inst_34608);
var inst_34611 = (inst_34610 > (0));
var state_34645__$1 = state_34645;
if(cljs.core.truth_(inst_34611)){
var statearr_34666_36441 = state_34645__$1;
(statearr_34666_36441[(1)] = (4));

} else {
var statearr_34667_36442 = state_34645__$1;
(statearr_34667_36442[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (11))){
var inst_34608 = (state_34645[(10)]);
var inst_34627 = (state_34645[(2)]);
var tmp34664 = inst_34608;
var inst_34608__$1 = tmp34664;
var state_34645__$1 = (function (){var statearr_34669 = state_34645;
(statearr_34669[(11)] = inst_34627);

(statearr_34669[(10)] = inst_34608__$1);

return statearr_34669;
})();
var statearr_34670_36443 = state_34645__$1;
(statearr_34670_36443[(2)] = null);

(statearr_34670_36443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (9))){
var inst_34618 = (state_34645[(8)]);
var state_34645__$1 = state_34645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34645__$1,(11),out,inst_34618);
} else {
if((state_val_34646 === (5))){
var inst_34635 = cljs.core.async.close_BANG_(out);
var state_34645__$1 = state_34645;
var statearr_34672_36446 = state_34645__$1;
(statearr_34672_36446[(2)] = inst_34635);

(statearr_34672_36446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (10))){
var inst_34632 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34675_36450 = state_34645__$1;
(statearr_34675_36450[(2)] = inst_34632);

(statearr_34675_36450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (8))){
var inst_34619 = (state_34645[(9)]);
var inst_34617 = (state_34645[(7)]);
var inst_34608 = (state_34645[(10)]);
var inst_34618 = (state_34645[(8)]);
var inst_34622 = (function (){var cs = inst_34608;
var vec__34613 = inst_34617;
var v = inst_34618;
var c = inst_34619;
return (function (p1__34598_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34598_SHARP_);
});
})();
var inst_34623 = cljs.core.filterv(inst_34622,inst_34608);
var inst_34608__$1 = inst_34623;
var state_34645__$1 = (function (){var statearr_34679 = state_34645;
(statearr_34679[(10)] = inst_34608__$1);

return statearr_34679;
})();
var statearr_34680_36455 = state_34645__$1;
(statearr_34680_36455[(2)] = null);

(statearr_34680_36455[(1)] = (2));


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
var statearr_34686 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34686[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_34686[(1)] = (1));

return statearr_34686;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_34645){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_34645);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e34690){var ex__10333__auto__ = e34690;
var statearr_34691_36458 = state_34645;
(statearr_34691_36458[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_34645[(4)]))){
var statearr_34694_36459 = state_34645;
(statearr_34694_36459[(1)] = cljs.core.first((state_34645[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36460 = state_34645;
state_34645 = G__36460;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_34645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_34645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_34696 = f__10425__auto__();
(statearr_34696[(6)] = c__10424__auto___36428);

return statearr_34696;
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
var G__34704 = arguments.length;
switch (G__34704) {
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
var c__10424__auto___36464 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_34729){
var state_val_34730 = (state_34729[(1)]);
if((state_val_34730 === (7))){
var inst_34710 = (state_34729[(7)]);
var inst_34710__$1 = (state_34729[(2)]);
var inst_34711 = (inst_34710__$1 == null);
var inst_34712 = cljs.core.not(inst_34711);
var state_34729__$1 = (function (){var statearr_34732 = state_34729;
(statearr_34732[(7)] = inst_34710__$1);

return statearr_34732;
})();
if(inst_34712){
var statearr_34733_36468 = state_34729__$1;
(statearr_34733_36468[(1)] = (8));

} else {
var statearr_34734_36469 = state_34729__$1;
(statearr_34734_36469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34730 === (1))){
var inst_34705 = (0);
var state_34729__$1 = (function (){var statearr_34736 = state_34729;
(statearr_34736[(8)] = inst_34705);

return statearr_34736;
})();
var statearr_34737_36470 = state_34729__$1;
(statearr_34737_36470[(2)] = null);

(statearr_34737_36470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34730 === (4))){
var state_34729__$1 = state_34729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34729__$1,(7),ch);
} else {
if((state_val_34730 === (6))){
var inst_34723 = (state_34729[(2)]);
var state_34729__$1 = state_34729;
var statearr_34739_36471 = state_34729__$1;
(statearr_34739_36471[(2)] = inst_34723);

(statearr_34739_36471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34730 === (3))){
var inst_34725 = (state_34729[(2)]);
var inst_34726 = cljs.core.async.close_BANG_(out);
var state_34729__$1 = (function (){var statearr_34743 = state_34729;
(statearr_34743[(9)] = inst_34725);

return statearr_34743;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34729__$1,inst_34726);
} else {
if((state_val_34730 === (2))){
var inst_34705 = (state_34729[(8)]);
var inst_34707 = (inst_34705 < n);
var state_34729__$1 = state_34729;
if(cljs.core.truth_(inst_34707)){
var statearr_34744_36474 = state_34729__$1;
(statearr_34744_36474[(1)] = (4));

} else {
var statearr_34746_36476 = state_34729__$1;
(statearr_34746_36476[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34730 === (11))){
var inst_34705 = (state_34729[(8)]);
var inst_34715 = (state_34729[(2)]);
var inst_34716 = (inst_34705 + (1));
var inst_34705__$1 = inst_34716;
var state_34729__$1 = (function (){var statearr_34747 = state_34729;
(statearr_34747[(10)] = inst_34715);

(statearr_34747[(8)] = inst_34705__$1);

return statearr_34747;
})();
var statearr_34748_36477 = state_34729__$1;
(statearr_34748_36477[(2)] = null);

(statearr_34748_36477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34730 === (9))){
var state_34729__$1 = state_34729;
var statearr_34753_36478 = state_34729__$1;
(statearr_34753_36478[(2)] = null);

(statearr_34753_36478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34730 === (5))){
var state_34729__$1 = state_34729;
var statearr_34754_36479 = state_34729__$1;
(statearr_34754_36479[(2)] = null);

(statearr_34754_36479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34730 === (10))){
var inst_34720 = (state_34729[(2)]);
var state_34729__$1 = state_34729;
var statearr_34755_36480 = state_34729__$1;
(statearr_34755_36480[(2)] = inst_34720);

(statearr_34755_36480[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34730 === (8))){
var inst_34710 = (state_34729[(7)]);
var state_34729__$1 = state_34729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34729__$1,(11),out,inst_34710);
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
var statearr_34757 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34757[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_34757[(1)] = (1));

return statearr_34757;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_34729){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_34729);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e34758){var ex__10333__auto__ = e34758;
var statearr_34759_36484 = state_34729;
(statearr_34759_36484[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_34729[(4)]))){
var statearr_34760_36486 = state_34729;
(statearr_34760_36486[(1)] = cljs.core.first((state_34729[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36487 = state_34729;
state_34729 = G__36487;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_34729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_34729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_34762 = f__10425__auto__();
(statearr_34762[(6)] = c__10424__auto___36464);

return statearr_34762;
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
cljs.core.async.t_cljs$core$async34783 = (function (f,ch,meta34772,_,fn1,meta34784){
this.f = f;
this.ch = ch;
this.meta34772 = meta34772;
this._ = _;
this.fn1 = fn1;
this.meta34784 = meta34784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34785,meta34784__$1){
var self__ = this;
var _34785__$1 = this;
return (new cljs.core.async.t_cljs$core$async34783(self__.f,self__.ch,self__.meta34772,self__._,self__.fn1,meta34784__$1));
}));

(cljs.core.async.t_cljs$core$async34783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34785){
var self__ = this;
var _34785__$1 = this;
return self__.meta34784;
}));

(cljs.core.async.t_cljs$core$async34783.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34783.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34783.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34783.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34769_SHARP_){
var G__34789 = (((p1__34769_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34769_SHARP_) : self__.f.call(null, p1__34769_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34789) : f1.call(null, G__34789));
});
}));

(cljs.core.async.t_cljs$core$async34783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34772","meta34772",1619906237,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34771","cljs.core.async/t_cljs$core$async34771",-2085043026,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34784","meta34784",1027744036,null)], null);
}));

(cljs.core.async.t_cljs$core$async34783.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34783");

(cljs.core.async.t_cljs$core$async34783.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34783");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34783.
 */
cljs.core.async.__GT_t_cljs$core$async34783 = (function cljs$core$async$__GT_t_cljs$core$async34783(f,ch,meta34772,_,fn1,meta34784){
return (new cljs.core.async.t_cljs$core$async34783(f,ch,meta34772,_,fn1,meta34784));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34771 = (function (f,ch,meta34772){
this.f = f;
this.ch = ch;
this.meta34772 = meta34772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34773,meta34772__$1){
var self__ = this;
var _34773__$1 = this;
return (new cljs.core.async.t_cljs$core$async34771(self__.f,self__.ch,meta34772__$1));
}));

(cljs.core.async.t_cljs$core$async34771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34773){
var self__ = this;
var _34773__$1 = this;
return self__.meta34772;
}));

(cljs.core.async.t_cljs$core$async34771.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34771.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34771.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34771.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34771.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async34783(self__.f,self__.ch,self__.meta34772,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34790 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34790) : self__.f.call(null, G__34790));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34771.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34771.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34772","meta34772",1619906237,null)], null);
}));

(cljs.core.async.t_cljs$core$async34771.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34771");

(cljs.core.async.t_cljs$core$async34771.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34771");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34771.
 */
cljs.core.async.__GT_t_cljs$core$async34771 = (function cljs$core$async$__GT_t_cljs$core$async34771(f,ch,meta34772){
return (new cljs.core.async.t_cljs$core$async34771(f,ch,meta34772));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34771(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34799 = (function (f,ch,meta34800){
this.f = f;
this.ch = ch;
this.meta34800 = meta34800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34801,meta34800__$1){
var self__ = this;
var _34801__$1 = this;
return (new cljs.core.async.t_cljs$core$async34799(self__.f,self__.ch,meta34800__$1));
}));

(cljs.core.async.t_cljs$core$async34799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34801){
var self__ = this;
var _34801__$1 = this;
return self__.meta34800;
}));

(cljs.core.async.t_cljs$core$async34799.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34799.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34799.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34799.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34799.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34799.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34800","meta34800",-1057724962,null)], null);
}));

(cljs.core.async.t_cljs$core$async34799.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34799");

(cljs.core.async.t_cljs$core$async34799.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34799");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34799.
 */
cljs.core.async.__GT_t_cljs$core$async34799 = (function cljs$core$async$__GT_t_cljs$core$async34799(f,ch,meta34800){
return (new cljs.core.async.t_cljs$core$async34799(f,ch,meta34800));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34799(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34814 = (function (p,ch,meta34815){
this.p = p;
this.ch = ch;
this.meta34815 = meta34815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34816,meta34815__$1){
var self__ = this;
var _34816__$1 = this;
return (new cljs.core.async.t_cljs$core$async34814(self__.p,self__.ch,meta34815__$1));
}));

(cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34816){
var self__ = this;
var _34816__$1 = this;
return self__.meta34815;
}));

(cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34814.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34815","meta34815",817768174,null)], null);
}));

(cljs.core.async.t_cljs$core$async34814.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34814");

(cljs.core.async.t_cljs$core$async34814.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34814");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34814.
 */
cljs.core.async.__GT_t_cljs$core$async34814 = (function cljs$core$async$__GT_t_cljs$core$async34814(p,ch,meta34815){
return (new cljs.core.async.t_cljs$core$async34814(p,ch,meta34815));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34814(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34847 = arguments.length;
switch (G__34847) {
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
var c__10424__auto___36536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_34874){
var state_val_34875 = (state_34874[(1)]);
if((state_val_34875 === (7))){
var inst_34870 = (state_34874[(2)]);
var state_34874__$1 = state_34874;
var statearr_34879_36538 = state_34874__$1;
(statearr_34879_36538[(2)] = inst_34870);

(statearr_34879_36538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (1))){
var state_34874__$1 = state_34874;
var statearr_34880_36541 = state_34874__$1;
(statearr_34880_36541[(2)] = null);

(statearr_34880_36541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (4))){
var inst_34856 = (state_34874[(7)]);
var inst_34856__$1 = (state_34874[(2)]);
var inst_34857 = (inst_34856__$1 == null);
var state_34874__$1 = (function (){var statearr_34881 = state_34874;
(statearr_34881[(7)] = inst_34856__$1);

return statearr_34881;
})();
if(cljs.core.truth_(inst_34857)){
var statearr_34884_36544 = state_34874__$1;
(statearr_34884_36544[(1)] = (5));

} else {
var statearr_34885_36545 = state_34874__$1;
(statearr_34885_36545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (6))){
var inst_34856 = (state_34874[(7)]);
var inst_34861 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34856) : p.call(null, inst_34856));
var state_34874__$1 = state_34874;
if(cljs.core.truth_(inst_34861)){
var statearr_34887_36547 = state_34874__$1;
(statearr_34887_36547[(1)] = (8));

} else {
var statearr_34889_36548 = state_34874__$1;
(statearr_34889_36548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (3))){
var inst_34872 = (state_34874[(2)]);
var state_34874__$1 = state_34874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34874__$1,inst_34872);
} else {
if((state_val_34875 === (2))){
var state_34874__$1 = state_34874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34874__$1,(4),ch);
} else {
if((state_val_34875 === (11))){
var inst_34864 = (state_34874[(2)]);
var state_34874__$1 = state_34874;
var statearr_34897_36550 = state_34874__$1;
(statearr_34897_36550[(2)] = inst_34864);

(statearr_34897_36550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (9))){
var state_34874__$1 = state_34874;
var statearr_34898_36551 = state_34874__$1;
(statearr_34898_36551[(2)] = null);

(statearr_34898_36551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (5))){
var inst_34859 = cljs.core.async.close_BANG_(out);
var state_34874__$1 = state_34874;
var statearr_34900_36553 = state_34874__$1;
(statearr_34900_36553[(2)] = inst_34859);

(statearr_34900_36553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (10))){
var inst_34867 = (state_34874[(2)]);
var state_34874__$1 = (function (){var statearr_34902 = state_34874;
(statearr_34902[(8)] = inst_34867);

return statearr_34902;
})();
var statearr_34903_36554 = state_34874__$1;
(statearr_34903_36554[(2)] = null);

(statearr_34903_36554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (8))){
var inst_34856 = (state_34874[(7)]);
var state_34874__$1 = state_34874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34874__$1,(11),out,inst_34856);
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
var statearr_34906 = [null,null,null,null,null,null,null,null,null];
(statearr_34906[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_34906[(1)] = (1));

return statearr_34906;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_34874){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_34874);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e34907){var ex__10333__auto__ = e34907;
var statearr_34909_36563 = state_34874;
(statearr_34909_36563[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_34874[(4)]))){
var statearr_34912_36564 = state_34874;
(statearr_34912_36564[(1)] = cljs.core.first((state_34874[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36567 = state_34874;
state_34874 = G__36567;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_34874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_34874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_34916 = f__10425__auto__();
(statearr_34916[(6)] = c__10424__auto___36536);

return statearr_34916;
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
var G__34921 = arguments.length;
switch (G__34921) {
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
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_34997){
var state_val_34999 = (state_34997[(1)]);
if((state_val_34999 === (7))){
var inst_34993 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
var statearr_35005_36571 = state_34997__$1;
(statearr_35005_36571[(2)] = inst_34993);

(statearr_35005_36571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (20))){
var inst_34960 = (state_34997[(7)]);
var inst_34973 = (state_34997[(2)]);
var inst_34975 = cljs.core.next(inst_34960);
var inst_34940 = inst_34975;
var inst_34941 = null;
var inst_34942 = (0);
var inst_34943 = (0);
var state_34997__$1 = (function (){var statearr_35008 = state_34997;
(statearr_35008[(8)] = inst_34941);

(statearr_35008[(9)] = inst_34940);

(statearr_35008[(10)] = inst_34942);

(statearr_35008[(11)] = inst_34973);

(statearr_35008[(12)] = inst_34943);

return statearr_35008;
})();
var statearr_35013_36576 = state_34997__$1;
(statearr_35013_36576[(2)] = null);

(statearr_35013_36576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (1))){
var state_34997__$1 = state_34997;
var statearr_35014_36579 = state_34997__$1;
(statearr_35014_36579[(2)] = null);

(statearr_35014_36579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (4))){
var inst_34929 = (state_34997[(13)]);
var inst_34929__$1 = (state_34997[(2)]);
var inst_34930 = (inst_34929__$1 == null);
var state_34997__$1 = (function (){var statearr_35015 = state_34997;
(statearr_35015[(13)] = inst_34929__$1);

return statearr_35015;
})();
if(cljs.core.truth_(inst_34930)){
var statearr_35016_36583 = state_34997__$1;
(statearr_35016_36583[(1)] = (5));

} else {
var statearr_35017_36586 = state_34997__$1;
(statearr_35017_36586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (15))){
var state_34997__$1 = state_34997;
var statearr_35021_36589 = state_34997__$1;
(statearr_35021_36589[(2)] = null);

(statearr_35021_36589[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (21))){
var state_34997__$1 = state_34997;
var statearr_35023_36590 = state_34997__$1;
(statearr_35023_36590[(2)] = null);

(statearr_35023_36590[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (13))){
var inst_34941 = (state_34997[(8)]);
var inst_34940 = (state_34997[(9)]);
var inst_34942 = (state_34997[(10)]);
var inst_34943 = (state_34997[(12)]);
var inst_34954 = (state_34997[(2)]);
var inst_34957 = (inst_34943 + (1));
var tmp35018 = inst_34941;
var tmp35019 = inst_34940;
var tmp35020 = inst_34942;
var inst_34940__$1 = tmp35019;
var inst_34941__$1 = tmp35018;
var inst_34942__$1 = tmp35020;
var inst_34943__$1 = inst_34957;
var state_34997__$1 = (function (){var statearr_35027 = state_34997;
(statearr_35027[(8)] = inst_34941__$1);

(statearr_35027[(9)] = inst_34940__$1);

(statearr_35027[(10)] = inst_34942__$1);

(statearr_35027[(14)] = inst_34954);

(statearr_35027[(12)] = inst_34943__$1);

return statearr_35027;
})();
var statearr_35028_36593 = state_34997__$1;
(statearr_35028_36593[(2)] = null);

(statearr_35028_36593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (22))){
var state_34997__$1 = state_34997;
var statearr_35033_36594 = state_34997__$1;
(statearr_35033_36594[(2)] = null);

(statearr_35033_36594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (6))){
var inst_34929 = (state_34997[(13)]);
var inst_34938 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34929) : f.call(null, inst_34929));
var inst_34939 = cljs.core.seq(inst_34938);
var inst_34940 = inst_34939;
var inst_34941 = null;
var inst_34942 = (0);
var inst_34943 = (0);
var state_34997__$1 = (function (){var statearr_35034 = state_34997;
(statearr_35034[(8)] = inst_34941);

(statearr_35034[(9)] = inst_34940);

(statearr_35034[(10)] = inst_34942);

(statearr_35034[(12)] = inst_34943);

return statearr_35034;
})();
var statearr_35036_36595 = state_34997__$1;
(statearr_35036_36595[(2)] = null);

(statearr_35036_36595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (17))){
var inst_34960 = (state_34997[(7)]);
var inst_34964 = cljs.core.chunk_first(inst_34960);
var inst_34965 = cljs.core.chunk_rest(inst_34960);
var inst_34966 = cljs.core.count(inst_34964);
var inst_34940 = inst_34965;
var inst_34941 = inst_34964;
var inst_34942 = inst_34966;
var inst_34943 = (0);
var state_34997__$1 = (function (){var statearr_35039 = state_34997;
(statearr_35039[(8)] = inst_34941);

(statearr_35039[(9)] = inst_34940);

(statearr_35039[(10)] = inst_34942);

(statearr_35039[(12)] = inst_34943);

return statearr_35039;
})();
var statearr_35042_36603 = state_34997__$1;
(statearr_35042_36603[(2)] = null);

(statearr_35042_36603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (3))){
var inst_34995 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34997__$1,inst_34995);
} else {
if((state_val_34999 === (12))){
var inst_34983 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
var statearr_35046_36604 = state_34997__$1;
(statearr_35046_36604[(2)] = inst_34983);

(statearr_35046_36604[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (2))){
var state_34997__$1 = state_34997;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34997__$1,(4),in$);
} else {
if((state_val_34999 === (23))){
var inst_34991 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
var statearr_35049_36605 = state_34997__$1;
(statearr_35049_36605[(2)] = inst_34991);

(statearr_35049_36605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (19))){
var inst_34978 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
var statearr_35053_36606 = state_34997__$1;
(statearr_35053_36606[(2)] = inst_34978);

(statearr_35053_36606[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (11))){
var inst_34940 = (state_34997[(9)]);
var inst_34960 = (state_34997[(7)]);
var inst_34960__$1 = cljs.core.seq(inst_34940);
var state_34997__$1 = (function (){var statearr_35058 = state_34997;
(statearr_35058[(7)] = inst_34960__$1);

return statearr_35058;
})();
if(inst_34960__$1){
var statearr_35059_36607 = state_34997__$1;
(statearr_35059_36607[(1)] = (14));

} else {
var statearr_35061_36609 = state_34997__$1;
(statearr_35061_36609[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (9))){
var inst_34985 = (state_34997[(2)]);
var inst_34986 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34997__$1 = (function (){var statearr_35064 = state_34997;
(statearr_35064[(15)] = inst_34985);

return statearr_35064;
})();
if(cljs.core.truth_(inst_34986)){
var statearr_35065_36610 = state_34997__$1;
(statearr_35065_36610[(1)] = (21));

} else {
var statearr_35066_36612 = state_34997__$1;
(statearr_35066_36612[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (5))){
var inst_34932 = cljs.core.async.close_BANG_(out);
var state_34997__$1 = state_34997;
var statearr_35071_36613 = state_34997__$1;
(statearr_35071_36613[(2)] = inst_34932);

(statearr_35071_36613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (14))){
var inst_34960 = (state_34997[(7)]);
var inst_34962 = cljs.core.chunked_seq_QMARK_(inst_34960);
var state_34997__$1 = state_34997;
if(inst_34962){
var statearr_35072_36614 = state_34997__$1;
(statearr_35072_36614[(1)] = (17));

} else {
var statearr_35073_36615 = state_34997__$1;
(statearr_35073_36615[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (16))){
var inst_34981 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
var statearr_35074_36616 = state_34997__$1;
(statearr_35074_36616[(2)] = inst_34981);

(statearr_35074_36616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (10))){
var inst_34941 = (state_34997[(8)]);
var inst_34943 = (state_34997[(12)]);
var inst_34951 = cljs.core._nth(inst_34941,inst_34943);
var state_34997__$1 = state_34997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34997__$1,(13),out,inst_34951);
} else {
if((state_val_34999 === (18))){
var inst_34960 = (state_34997[(7)]);
var inst_34971 = cljs.core.first(inst_34960);
var state_34997__$1 = state_34997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34997__$1,(20),out,inst_34971);
} else {
if((state_val_34999 === (8))){
var inst_34942 = (state_34997[(10)]);
var inst_34943 = (state_34997[(12)]);
var inst_34947 = (inst_34943 < inst_34942);
var inst_34948 = inst_34947;
var state_34997__$1 = state_34997;
if(cljs.core.truth_(inst_34948)){
var statearr_35076_36618 = state_34997__$1;
(statearr_35076_36618[(1)] = (10));

} else {
var statearr_35077_36620 = state_34997__$1;
(statearr_35077_36620[(1)] = (11));

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
var statearr_35078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35078[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__);

(statearr_35078[(1)] = (1));

return statearr_35078;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____1 = (function (state_34997){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_34997);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e35080){var ex__10333__auto__ = e35080;
var statearr_35082_36621 = state_34997;
(statearr_35082_36621[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_34997[(4)]))){
var statearr_35083_36622 = state_34997;
(statearr_35083_36622[(1)] = cljs.core.first((state_34997[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36623 = state_34997;
state_34997 = G__36623;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__ = function(state_34997){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____1.call(this,state_34997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10330__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_35084 = f__10425__auto__();
(statearr_35084[(6)] = c__10424__auto__);

return statearr_35084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));

return c__10424__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35086 = arguments.length;
switch (G__35086) {
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
var G__35094 = arguments.length;
switch (G__35094) {
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
var G__35114 = arguments.length;
switch (G__35114) {
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
var c__10424__auto___36638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_35145){
var state_val_35147 = (state_35145[(1)]);
if((state_val_35147 === (7))){
var inst_35140 = (state_35145[(2)]);
var state_35145__$1 = state_35145;
var statearr_35153_36640 = state_35145__$1;
(statearr_35153_36640[(2)] = inst_35140);

(statearr_35153_36640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35147 === (1))){
var inst_35119 = null;
var state_35145__$1 = (function (){var statearr_35156 = state_35145;
(statearr_35156[(7)] = inst_35119);

return statearr_35156;
})();
var statearr_35157_36645 = state_35145__$1;
(statearr_35157_36645[(2)] = null);

(statearr_35157_36645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35147 === (4))){
var inst_35125 = (state_35145[(8)]);
var inst_35125__$1 = (state_35145[(2)]);
var inst_35126 = (inst_35125__$1 == null);
var inst_35127 = cljs.core.not(inst_35126);
var state_35145__$1 = (function (){var statearr_35159 = state_35145;
(statearr_35159[(8)] = inst_35125__$1);

return statearr_35159;
})();
if(inst_35127){
var statearr_35160_36654 = state_35145__$1;
(statearr_35160_36654[(1)] = (5));

} else {
var statearr_35161_36655 = state_35145__$1;
(statearr_35161_36655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35147 === (6))){
var state_35145__$1 = state_35145;
var statearr_35163_36656 = state_35145__$1;
(statearr_35163_36656[(2)] = null);

(statearr_35163_36656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35147 === (3))){
var inst_35142 = (state_35145[(2)]);
var inst_35143 = cljs.core.async.close_BANG_(out);
var state_35145__$1 = (function (){var statearr_35168 = state_35145;
(statearr_35168[(9)] = inst_35142);

return statearr_35168;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35145__$1,inst_35143);
} else {
if((state_val_35147 === (2))){
var state_35145__$1 = state_35145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35145__$1,(4),ch);
} else {
if((state_val_35147 === (11))){
var inst_35125 = (state_35145[(8)]);
var inst_35134 = (state_35145[(2)]);
var inst_35119 = inst_35125;
var state_35145__$1 = (function (){var statearr_35178 = state_35145;
(statearr_35178[(10)] = inst_35134);

(statearr_35178[(7)] = inst_35119);

return statearr_35178;
})();
var statearr_35180_36667 = state_35145__$1;
(statearr_35180_36667[(2)] = null);

(statearr_35180_36667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35147 === (9))){
var inst_35125 = (state_35145[(8)]);
var state_35145__$1 = state_35145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35145__$1,(11),out,inst_35125);
} else {
if((state_val_35147 === (5))){
var inst_35119 = (state_35145[(7)]);
var inst_35125 = (state_35145[(8)]);
var inst_35129 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35125,inst_35119);
var state_35145__$1 = state_35145;
if(inst_35129){
var statearr_35184_36671 = state_35145__$1;
(statearr_35184_36671[(1)] = (8));

} else {
var statearr_35185_36672 = state_35145__$1;
(statearr_35185_36672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35147 === (10))){
var inst_35137 = (state_35145[(2)]);
var state_35145__$1 = state_35145;
var statearr_35190_36673 = state_35145__$1;
(statearr_35190_36673[(2)] = inst_35137);

(statearr_35190_36673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35147 === (8))){
var inst_35119 = (state_35145[(7)]);
var tmp35183 = inst_35119;
var inst_35119__$1 = tmp35183;
var state_35145__$1 = (function (){var statearr_35198 = state_35145;
(statearr_35198[(7)] = inst_35119__$1);

return statearr_35198;
})();
var statearr_35200_36674 = state_35145__$1;
(statearr_35200_36674[(2)] = null);

(statearr_35200_36674[(1)] = (2));


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
var statearr_35206 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35206[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_35206[(1)] = (1));

return statearr_35206;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_35145){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_35145);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e35207){var ex__10333__auto__ = e35207;
var statearr_35208_36677 = state_35145;
(statearr_35208_36677[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_35145[(4)]))){
var statearr_35210_36680 = state_35145;
(statearr_35210_36680[(1)] = cljs.core.first((state_35145[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36687 = state_35145;
state_35145 = G__36687;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_35145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_35145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_35219 = f__10425__auto__();
(statearr_35219[(6)] = c__10424__auto___36638);

return statearr_35219;
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
var G__35229 = arguments.length;
switch (G__35229) {
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
var c__10424__auto___36696 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_35288){
var state_val_35289 = (state_35288[(1)]);
if((state_val_35289 === (7))){
var inst_35275 = (state_35288[(2)]);
var state_35288__$1 = state_35288;
var statearr_35290_36698 = state_35288__$1;
(statearr_35290_36698[(2)] = inst_35275);

(statearr_35290_36698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35289 === (1))){
var inst_35236 = (new Array(n));
var inst_35237 = inst_35236;
var inst_35238 = (0);
var state_35288__$1 = (function (){var statearr_35297 = state_35288;
(statearr_35297[(7)] = inst_35238);

(statearr_35297[(8)] = inst_35237);

return statearr_35297;
})();
var statearr_35298_36701 = state_35288__$1;
(statearr_35298_36701[(2)] = null);

(statearr_35298_36701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35289 === (4))){
var inst_35241 = (state_35288[(9)]);
var inst_35241__$1 = (state_35288[(2)]);
var inst_35242 = (inst_35241__$1 == null);
var inst_35243 = cljs.core.not(inst_35242);
var state_35288__$1 = (function (){var statearr_35299 = state_35288;
(statearr_35299[(9)] = inst_35241__$1);

return statearr_35299;
})();
if(inst_35243){
var statearr_35301_36706 = state_35288__$1;
(statearr_35301_36706[(1)] = (5));

} else {
var statearr_35305_36709 = state_35288__$1;
(statearr_35305_36709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35289 === (15))){
var inst_35265 = (state_35288[(2)]);
var state_35288__$1 = state_35288;
var statearr_35306_36710 = state_35288__$1;
(statearr_35306_36710[(2)] = inst_35265);

(statearr_35306_36710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35289 === (13))){
var state_35288__$1 = state_35288;
var statearr_35307_36711 = state_35288__$1;
(statearr_35307_36711[(2)] = null);

(statearr_35307_36711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35289 === (6))){
var inst_35238 = (state_35288[(7)]);
var inst_35261 = (inst_35238 > (0));
var state_35288__$1 = state_35288;
if(cljs.core.truth_(inst_35261)){
var statearr_35309_36718 = state_35288__$1;
(statearr_35309_36718[(1)] = (12));

} else {
var statearr_35315_36722 = state_35288__$1;
(statearr_35315_36722[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35289 === (3))){
var inst_35278 = (state_35288[(2)]);
var state_35288__$1 = state_35288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35288__$1,inst_35278);
} else {
if((state_val_35289 === (12))){
var inst_35237 = (state_35288[(8)]);
var inst_35263 = cljs.core.vec(inst_35237);
var state_35288__$1 = state_35288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35288__$1,(15),out,inst_35263);
} else {
if((state_val_35289 === (2))){
var state_35288__$1 = state_35288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35288__$1,(4),ch);
} else {
if((state_val_35289 === (11))){
var inst_35254 = (state_35288[(2)]);
var inst_35255 = (new Array(n));
var inst_35237 = inst_35255;
var inst_35238 = (0);
var state_35288__$1 = (function (){var statearr_35329 = state_35288;
(statearr_35329[(7)] = inst_35238);

(statearr_35329[(8)] = inst_35237);

(statearr_35329[(10)] = inst_35254);

return statearr_35329;
})();
var statearr_35330_36730 = state_35288__$1;
(statearr_35330_36730[(2)] = null);

(statearr_35330_36730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35289 === (9))){
var inst_35237 = (state_35288[(8)]);
var inst_35252 = cljs.core.vec(inst_35237);
var state_35288__$1 = state_35288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35288__$1,(11),out,inst_35252);
} else {
if((state_val_35289 === (5))){
var inst_35238 = (state_35288[(7)]);
var inst_35247 = (state_35288[(11)]);
var inst_35241 = (state_35288[(9)]);
var inst_35237 = (state_35288[(8)]);
var inst_35245 = (inst_35237[inst_35238] = inst_35241);
var inst_35247__$1 = (inst_35238 + (1));
var inst_35248 = (inst_35247__$1 < n);
var state_35288__$1 = (function (){var statearr_35339 = state_35288;
(statearr_35339[(11)] = inst_35247__$1);

(statearr_35339[(12)] = inst_35245);

return statearr_35339;
})();
if(cljs.core.truth_(inst_35248)){
var statearr_35340_36731 = state_35288__$1;
(statearr_35340_36731[(1)] = (8));

} else {
var statearr_35341_36732 = state_35288__$1;
(statearr_35341_36732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35289 === (14))){
var inst_35268 = (state_35288[(2)]);
var inst_35270 = cljs.core.async.close_BANG_(out);
var state_35288__$1 = (function (){var statearr_35347 = state_35288;
(statearr_35347[(13)] = inst_35268);

return statearr_35347;
})();
var statearr_35348_36733 = state_35288__$1;
(statearr_35348_36733[(2)] = inst_35270);

(statearr_35348_36733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35289 === (10))){
var inst_35259 = (state_35288[(2)]);
var state_35288__$1 = state_35288;
var statearr_35349_36734 = state_35288__$1;
(statearr_35349_36734[(2)] = inst_35259);

(statearr_35349_36734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35289 === (8))){
var inst_35247 = (state_35288[(11)]);
var inst_35237 = (state_35288[(8)]);
var tmp35342 = inst_35237;
var inst_35237__$1 = tmp35342;
var inst_35238 = inst_35247;
var state_35288__$1 = (function (){var statearr_35350 = state_35288;
(statearr_35350[(7)] = inst_35238);

(statearr_35350[(8)] = inst_35237__$1);

return statearr_35350;
})();
var statearr_35351_36736 = state_35288__$1;
(statearr_35351_36736[(2)] = null);

(statearr_35351_36736[(1)] = (2));


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
var statearr_35353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35353[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_35353[(1)] = (1));

return statearr_35353;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_35288){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_35288);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e35354){var ex__10333__auto__ = e35354;
var statearr_35355_36740 = state_35288;
(statearr_35355_36740[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_35288[(4)]))){
var statearr_35356_36741 = state_35288;
(statearr_35356_36741[(1)] = cljs.core.first((state_35288[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36742 = state_35288;
state_35288 = G__36742;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_35288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_35288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_35361 = f__10425__auto__();
(statearr_35361[(6)] = c__10424__auto___36696);

return statearr_35361;
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
var G__35368 = arguments.length;
switch (G__35368) {
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
var c__10424__auto___36751 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10425__auto__ = (function (){var switch__10329__auto__ = (function (state_35426){
var state_val_35427 = (state_35426[(1)]);
if((state_val_35427 === (7))){
var inst_35422 = (state_35426[(2)]);
var state_35426__$1 = state_35426;
var statearr_35440_36755 = state_35426__$1;
(statearr_35440_36755[(2)] = inst_35422);

(statearr_35440_36755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35427 === (1))){
var inst_35378 = [];
var inst_35379 = inst_35378;
var inst_35380 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35426__$1 = (function (){var statearr_35441 = state_35426;
(statearr_35441[(7)] = inst_35379);

(statearr_35441[(8)] = inst_35380);

return statearr_35441;
})();
var statearr_35442_36759 = state_35426__$1;
(statearr_35442_36759[(2)] = null);

(statearr_35442_36759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35427 === (4))){
var inst_35383 = (state_35426[(9)]);
var inst_35383__$1 = (state_35426[(2)]);
var inst_35384 = (inst_35383__$1 == null);
var inst_35385 = cljs.core.not(inst_35384);
var state_35426__$1 = (function (){var statearr_35443 = state_35426;
(statearr_35443[(9)] = inst_35383__$1);

return statearr_35443;
})();
if(inst_35385){
var statearr_35447_36762 = state_35426__$1;
(statearr_35447_36762[(1)] = (5));

} else {
var statearr_35448_36763 = state_35426__$1;
(statearr_35448_36763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35427 === (15))){
var inst_35379 = (state_35426[(7)]);
var inst_35414 = cljs.core.vec(inst_35379);
var state_35426__$1 = state_35426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35426__$1,(18),out,inst_35414);
} else {
if((state_val_35427 === (13))){
var inst_35408 = (state_35426[(2)]);
var state_35426__$1 = state_35426;
var statearr_35453_36767 = state_35426__$1;
(statearr_35453_36767[(2)] = inst_35408);

(statearr_35453_36767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35427 === (6))){
var inst_35379 = (state_35426[(7)]);
var inst_35411 = inst_35379.length;
var inst_35412 = (inst_35411 > (0));
var state_35426__$1 = state_35426;
if(cljs.core.truth_(inst_35412)){
var statearr_35454_36768 = state_35426__$1;
(statearr_35454_36768[(1)] = (15));

} else {
var statearr_35455_36769 = state_35426__$1;
(statearr_35455_36769[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35427 === (17))){
var inst_35419 = (state_35426[(2)]);
var inst_35420 = cljs.core.async.close_BANG_(out);
var state_35426__$1 = (function (){var statearr_35456 = state_35426;
(statearr_35456[(10)] = inst_35419);

return statearr_35456;
})();
var statearr_35457_36770 = state_35426__$1;
(statearr_35457_36770[(2)] = inst_35420);

(statearr_35457_36770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35427 === (3))){
var inst_35424 = (state_35426[(2)]);
var state_35426__$1 = state_35426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35426__$1,inst_35424);
} else {
if((state_val_35427 === (12))){
var inst_35379 = (state_35426[(7)]);
var inst_35401 = cljs.core.vec(inst_35379);
var state_35426__$1 = state_35426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35426__$1,(14),out,inst_35401);
} else {
if((state_val_35427 === (2))){
var state_35426__$1 = state_35426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35426__$1,(4),ch);
} else {
if((state_val_35427 === (11))){
var inst_35383 = (state_35426[(9)]);
var inst_35379 = (state_35426[(7)]);
var inst_35387 = (state_35426[(11)]);
var inst_35398 = inst_35379.push(inst_35383);
var tmp35458 = inst_35379;
var inst_35379__$1 = tmp35458;
var inst_35380 = inst_35387;
var state_35426__$1 = (function (){var statearr_35461 = state_35426;
(statearr_35461[(7)] = inst_35379__$1);

(statearr_35461[(12)] = inst_35398);

(statearr_35461[(8)] = inst_35380);

return statearr_35461;
})();
var statearr_35466_36776 = state_35426__$1;
(statearr_35466_36776[(2)] = null);

(statearr_35466_36776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35427 === (9))){
var inst_35380 = (state_35426[(8)]);
var inst_35394 = cljs.core.keyword_identical_QMARK_(inst_35380,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35426__$1 = state_35426;
var statearr_35474_36781 = state_35426__$1;
(statearr_35474_36781[(2)] = inst_35394);

(statearr_35474_36781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35427 === (5))){
var inst_35383 = (state_35426[(9)]);
var inst_35391 = (state_35426[(13)]);
var inst_35387 = (state_35426[(11)]);
var inst_35380 = (state_35426[(8)]);
var inst_35387__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35383) : f.call(null, inst_35383));
var inst_35391__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35387__$1,inst_35380);
var state_35426__$1 = (function (){var statearr_35486 = state_35426;
(statearr_35486[(13)] = inst_35391__$1);

(statearr_35486[(11)] = inst_35387__$1);

return statearr_35486;
})();
if(inst_35391__$1){
var statearr_35487_36791 = state_35426__$1;
(statearr_35487_36791[(1)] = (8));

} else {
var statearr_35490_36792 = state_35426__$1;
(statearr_35490_36792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35427 === (14))){
var inst_35383 = (state_35426[(9)]);
var inst_35387 = (state_35426[(11)]);
var inst_35403 = (state_35426[(2)]);
var inst_35404 = [];
var inst_35405 = inst_35404.push(inst_35383);
var inst_35379 = inst_35404;
var inst_35380 = inst_35387;
var state_35426__$1 = (function (){var statearr_35491 = state_35426;
(statearr_35491[(14)] = inst_35403);

(statearr_35491[(7)] = inst_35379);

(statearr_35491[(15)] = inst_35405);

(statearr_35491[(8)] = inst_35380);

return statearr_35491;
})();
var statearr_35492_36794 = state_35426__$1;
(statearr_35492_36794[(2)] = null);

(statearr_35492_36794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35427 === (16))){
var state_35426__$1 = state_35426;
var statearr_35493_36797 = state_35426__$1;
(statearr_35493_36797[(2)] = null);

(statearr_35493_36797[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35427 === (10))){
var inst_35396 = (state_35426[(2)]);
var state_35426__$1 = state_35426;
if(cljs.core.truth_(inst_35396)){
var statearr_35494_36798 = state_35426__$1;
(statearr_35494_36798[(1)] = (11));

} else {
var statearr_35498_36799 = state_35426__$1;
(statearr_35498_36799[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35427 === (18))){
var inst_35416 = (state_35426[(2)]);
var state_35426__$1 = state_35426;
var statearr_35500_36800 = state_35426__$1;
(statearr_35500_36800[(2)] = inst_35416);

(statearr_35500_36800[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35427 === (8))){
var inst_35391 = (state_35426[(13)]);
var state_35426__$1 = state_35426;
var statearr_35503_36801 = state_35426__$1;
(statearr_35503_36801[(2)] = inst_35391);

(statearr_35503_36801[(1)] = (10));


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
var statearr_35514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35514[(0)] = cljs$core$async$state_machine__10330__auto__);

(statearr_35514[(1)] = (1));

return statearr_35514;
});
var cljs$core$async$state_machine__10330__auto____1 = (function (state_35426){
while(true){
var ret_value__10331__auto__ = (function (){try{while(true){
var result__10332__auto__ = switch__10329__auto__(state_35426);
if(cljs.core.keyword_identical_QMARK_(result__10332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10332__auto__;
}
break;
}
}catch (e35525){var ex__10333__auto__ = e35525;
var statearr_35526_36806 = state_35426;
(statearr_35526_36806[(2)] = ex__10333__auto__);


if(cljs.core.seq((state_35426[(4)]))){
var statearr_35529_36807 = state_35426;
(statearr_35529_36807[(1)] = cljs.core.first((state_35426[(4)])));

} else {
throw ex__10333__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36808 = state_35426;
state_35426 = G__36808;
continue;
} else {
return ret_value__10331__auto__;
}
break;
}
});
cljs$core$async$state_machine__10330__auto__ = function(state_35426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10330__auto____1.call(this,state_35426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10330__auto____0;
cljs$core$async$state_machine__10330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10330__auto____1;
return cljs$core$async$state_machine__10330__auto__;
})()
})();
var state__10426__auto__ = (function (){var statearr_35543 = f__10425__auto__();
(statearr_35543[(6)] = c__10424__auto___36751);

return statearr_35543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10426__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
