goog.provide('lightswitch_web.statechart.main');
if((typeof lightswitch_web !== 'undefined') && (typeof lightswitch_web.statechart !== 'undefined') && (typeof lightswitch_web.statechart.main !== 'undefined') && (typeof lightswitch_web.statechart.main.state_machines !== 'undefined')){
} else {
lightswitch_web.statechart.main.state_machines = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"light","light",1918998747),lightswitch_web.statechart.app.light], null);
}
if((typeof lightswitch_web !== 'undefined') && (typeof lightswitch_web.statechart !== 'undefined') && (typeof lightswitch_web.statechart.main !== 'undefined') && (typeof lightswitch_web.statechart.main.middleware !== 'undefined')){
} else {
lightswitch_web.statechart.main.middleware = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
}
lightswitch_web.statechart.main.start_app = (function lightswitch_web$statechart$main$start_app(){
return nodename.stately.core.start_app(lightswitch_web.statechart.main.middleware,lightswitch_web.statechart.main.state_machines,new cljs.core.Keyword(null,"light","light",1918998747));
});

//# sourceMappingURL=lightswitch_web.statechart.main.js.map
