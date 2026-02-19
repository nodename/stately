goog.provide('nodename.stately.communications.re_frame_api');
nodename.stately.communications.re_frame_api.dispatch = re_frame.core.dispatch;
nodename.stately.communications.re_frame_api.run_queue = (function nodename$stately$communications$re_frame_api$run_queue(){
return cljs.core.List.EMPTY;
});
nodename.stately.communications.re_frame_api.register_handler = re_frame.core.reg_event_db;
nodename.stately.communications.re_frame_api.lookup_handler = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.get_handler,new cljs.core.Keyword(null,"event","event",301435442));
nodename.stately.communications.re_frame_api.log = (function nodename$stately$communications$re_frame_api$log(p1__45609_SHARP_){
return console.log(p1__45609_SHARP_);
});
nodename.stately.communications.re_frame_api.warn = (function nodename$stately$communications$re_frame_api$warn(p1__45611_SHARP_){
return console.warn(p1__45611_SHARP_);
});
nodename.stately.communications.re_frame_api.error = (function nodename$stately$communications$re_frame_api$error(p1__45613_SHARP_){
return console.error(p1__45613_SHARP_);
});
nodename.stately.communications.re_frame_api.app_db = re_frame.db.app_db;

//# sourceMappingURL=nodename.stately.communications.re_frame_api.js.map
