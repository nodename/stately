goog.provide('processflow_web.statechart.main');
if((typeof processflow_web !== 'undefined') && (typeof processflow_web.statechart !== 'undefined') && (typeof processflow_web.statechart.main !== 'undefined') && (typeof processflow_web.statechart.main.state_machines !== 'undefined')){
} else {
processflow_web.statechart.main.state_machines = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"process","process",1643192938),processflow_web.statechart.app.process], null);
}
if((typeof processflow_web !== 'undefined') && (typeof processflow_web.statechart !== 'undefined') && (typeof processflow_web.statechart.main !== 'undefined') && (typeof processflow_web.statechart.main.middleware !== 'undefined')){
} else {
processflow_web.statechart.main.middleware = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
}
processflow_web.statechart.main.start_app = (function processflow_web$statechart$main$start_app(){
return nodename.stately.core.start_app(processflow_web.statechart.main.middleware,processflow_web.statechart.main.state_machines,new cljs.core.Keyword(null,"process","process",1643192938));
});

//# sourceMappingURL=processflow_web.statechart.main.js.map
