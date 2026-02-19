goog.provide('lightingsystem_web.statechart.main');
if((typeof lightingsystem_web !== 'undefined') && (typeof lightingsystem_web.statechart !== 'undefined') && (typeof lightingsystem_web.statechart.main !== 'undefined') && (typeof lightingsystem_web.statechart.main.state_machines !== 'undefined')){
} else {
lightingsystem_web.statechart.main.state_machines = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lighting","lighting",562618055),lightingsystem_web.statechart.app.lighting,new cljs.core.Keyword(null,"manual","manual",-237370608),lightingsystem_web.statechart.app.manual,new cljs.core.Keyword(null,"motion","motion",36831425),lightingsystem_web.statechart.app.motion], null);
}
if((typeof lightingsystem_web !== 'undefined') && (typeof lightingsystem_web.statechart !== 'undefined') && (typeof lightingsystem_web.statechart.main !== 'undefined') && (typeof lightingsystem_web.statechart.main.middleware !== 'undefined')){
} else {
lightingsystem_web.statechart.main.middleware = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
}
lightingsystem_web.statechart.main.start_app = (function lightingsystem_web$statechart$main$start_app(){
return nodename.stately.core.start_app(lightingsystem_web.statechart.main.middleware,lightingsystem_web.statechart.main.state_machines,new cljs.core.Keyword(null,"lighting","lighting",562618055));
});

//# sourceMappingURL=lightingsystem_web.statechart.main.js.map
