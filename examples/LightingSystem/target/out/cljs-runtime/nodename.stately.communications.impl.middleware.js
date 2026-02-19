goog.provide('nodename.stately.communications.impl.middleware');
/**
 * Acts as an adaptor, allowing handlers to be writen as pure functions.
 *   The re-frame router passes the `app-db` atom as the first parameter to any handler.
 *   This middleware adapts that atom to be the value within the atom.
 *   If you strip away the error/efficiency checks, this middleware is doing:
 *   (reset! app-db (handler @app-db event-vec))
 *   You don't have to use this middleware directly. It is automatically applied to
 *   your handler's middleware when you use "register-handler".
 *   In fact, the only way to by-pass automatic use of "pure" in your middleware
 *   is to use the low level registration function "re-frame.handlers/register-handler-base"
 */
nodename.stately.communications.impl.middleware.pure = (function nodename$stately$communications$impl$middleware$pure(handler){
return (function nodename$stately$communications$impl$middleware$pure_$_pure_handler(app_db,event_vec){
var db = cljs.core.deref(app_db);
var new_db = (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(db,event_vec) : handler.call(null, db,event_vec));
if((new_db == null)){
return nodename.stately.communications.impl.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["your pure handler returned nil. It should return the new db state."], 0));
} else {
if((!((db === new_db)))){
return cljs.core.reset_BANG_(app_db,new_db);
} else {
return null;
}
}
});
});

//# sourceMappingURL=nodename.stately.communications.impl.middleware.js.map
