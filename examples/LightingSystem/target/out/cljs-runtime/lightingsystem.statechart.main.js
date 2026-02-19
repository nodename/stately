goog.provide('lightingsystem.statechart.main');
if((typeof lightingsystem !== 'undefined') && (typeof lightingsystem.statechart !== 'undefined') && (typeof lightingsystem.statechart.main !== 'undefined') && (typeof lightingsystem.statechart.main.state_machines !== 'undefined')){
} else {
lightingsystem.statechart.main.state_machines = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lighting","lighting",562618055),lightingsystem.statechart.app.lighting,new cljs.core.Keyword(null,"manual","manual",-237370608),lightingsystem.statechart.app.manual,new cljs.core.Keyword(null,"motion","motion",36831425),lightingsystem.statechart.app.motion], null);
}
if((typeof lightingsystem !== 'undefined') && (typeof lightingsystem.statechart !== 'undefined') && (typeof lightingsystem.statechart.main !== 'undefined') && (typeof lightingsystem.statechart.main.middleware !== 'undefined')){
} else {
lightingsystem.statechart.main.middleware = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
}
lightingsystem.statechart.main.start_app = (function lightingsystem$statechart$main$start_app(){
return nodename.stately.core.start_app(lightingsystem.statechart.main.middleware,lightingsystem.statechart.main.state_machines,new cljs.core.Keyword(null,"lighting","lighting",562618055));
});

//# sourceMappingURL=lightingsystem.statechart.main.js.map
