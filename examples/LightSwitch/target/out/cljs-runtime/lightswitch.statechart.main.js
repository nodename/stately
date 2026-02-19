goog.provide('lightswitch.statechart.main');
if((typeof lightswitch !== 'undefined') && (typeof lightswitch.statechart !== 'undefined') && (typeof lightswitch.statechart.main !== 'undefined') && (typeof lightswitch.statechart.main.state_machines !== 'undefined')){
} else {
lightswitch.statechart.main.state_machines = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"light","light",1918998747),lightswitch.statechart.app.light], null);
}
if((typeof lightswitch !== 'undefined') && (typeof lightswitch.statechart !== 'undefined') && (typeof lightswitch.statechart.main !== 'undefined') && (typeof lightswitch.statechart.main.middleware !== 'undefined')){
} else {
lightswitch.statechart.main.middleware = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
}
lightswitch.statechart.main.start_app = (function lightswitch$statechart$main$start_app(){
return nodename.stately.core.start_app(lightswitch.statechart.main.middleware,lightswitch.statechart.main.state_machines,new cljs.core.Keyword(null,"light","light",1918998747));
});

//# sourceMappingURL=lightswitch.statechart.main.js.map
