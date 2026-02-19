goog.provide('player.statechart.main');
if((typeof player !== 'undefined') && (typeof player.statechart !== 'undefined') && (typeof player.statechart.main !== 'undefined') && (typeof player.statechart.main.state_machines !== 'undefined')){
} else {
player.statechart.main.state_machines = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player","player",-97687400),player.statechart.app.player,new cljs.core.Keyword(null,"track","track",195787487),player.statechart.app.track,new cljs.core.Keyword(null,"volume","volume",1900330799),player.statechart.app.volume], null);
}
if((typeof player !== 'undefined') && (typeof player.statechart !== 'undefined') && (typeof player.statechart.main !== 'undefined') && (typeof player.statechart.main.middleware !== 'undefined')){
} else {
player.statechart.main.middleware = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
}
player.statechart.main.start_app = (function player$statechart$main$start_app(){
return nodename.stately.core.start_app(player.statechart.main.middleware,player.statechart.main.state_machines,new cljs.core.Keyword(null,"player","player",-97687400));
});

//# sourceMappingURL=player.statechart.main.js.map
