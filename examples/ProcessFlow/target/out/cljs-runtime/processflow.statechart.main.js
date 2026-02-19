goog.provide('processflow.statechart.main');
if((typeof processflow !== 'undefined') && (typeof processflow.statechart !== 'undefined') && (typeof processflow.statechart.main !== 'undefined') && (typeof processflow.statechart.main.state_machines !== 'undefined')){
} else {
processflow.statechart.main.state_machines = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"process","process",1643192938),processflow.statechart.app.process], null);
}
if((typeof processflow !== 'undefined') && (typeof processflow.statechart !== 'undefined') && (typeof processflow.statechart.main !== 'undefined') && (typeof processflow.statechart.main.middleware !== 'undefined')){
} else {
processflow.statechart.main.middleware = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
}
processflow.statechart.main.start_app = (function processflow$statechart$main$start_app(){
return nodename.stately.core.start_app(processflow.statechart.main.middleware,processflow.statechart.main.state_machines,new cljs.core.Keyword(null,"process","process",1643192938));
});

//# sourceMappingURL=processflow.statechart.main.js.map
