goog.provide('nodename.stately.communications.standalone_api');
nodename.stately.communications.standalone_api.dispatch = nodename.stately.communications.impl.router.dispatch;
nodename.stately.communications.standalone_api.run_queue = nodename.stately.communications.impl.router.run_queue;
nodename.stately.communications.standalone_api.register_handler = (function nodename$stately$communications$standalone_api$register_handler(var_args){
var G__64191 = arguments.length;
switch (G__64191) {
case 2:
return nodename.stately.communications.standalone_api.register_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nodename.stately.communications.standalone_api.register_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nodename.stately.communications.standalone_api.register_handler.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return nodename.stately.communications.impl.handlers.register_base.cljs$core$IFn$_invoke$arity$3(id,nodename.stately.communications.impl.middleware.pure,handler);
}));

(nodename.stately.communications.standalone_api.register_handler.cljs$core$IFn$_invoke$arity$3 = (function (id,middleware,handler){
return nodename.stately.communications.impl.handlers.register_base.cljs$core$IFn$_invoke$arity$3(id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nodename.stately.communications.impl.middleware.pure,middleware], null),handler);
}));

(nodename.stately.communications.standalone_api.register_handler.cljs$lang$maxFixedArity = 3);

nodename.stately.communications.standalone_api.lookup_handler = nodename.stately.communications.impl.handlers.lookup_handler;
nodename.stately.communications.standalone_api.log = nodename.stately.communications.impl.logging.log;
nodename.stately.communications.standalone_api.warn = nodename.stately.communications.impl.logging.warn;
nodename.stately.communications.standalone_api.error = nodename.stately.communications.impl.logging.error;
nodename.stately.communications.standalone_api.app_db = nodename.stately.communications.impl.db.app_db;

//# sourceMappingURL=nodename.stately.communications.standalone_api.js.map
