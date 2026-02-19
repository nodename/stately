goog.provide('player_web.statechart.main');
if((typeof player_web !== 'undefined') && (typeof player_web.statechart !== 'undefined') && (typeof player_web.statechart.main !== 'undefined') && (typeof player_web.statechart.main.state_machines !== 'undefined')){
} else {
player_web.statechart.main.state_machines = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player","player",-97687400),player_web.statechart.app.player,new cljs.core.Keyword(null,"track","track",195787487),player_web.statechart.app.track,new cljs.core.Keyword(null,"volume","volume",1900330799),player_web.statechart.app.volume], null);
}
if((typeof player_web !== 'undefined') && (typeof player_web.statechart !== 'undefined') && (typeof player_web.statechart.main !== 'undefined') && (typeof player_web.statechart.main.middleware !== 'undefined')){
} else {
player_web.statechart.main.middleware = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
}
player_web.statechart.main.start_app = (function player_web$statechart$main$start_app(){
return nodename.stately.core.start_app(player_web.statechart.main.middleware,player_web.statechart.main.state_machines,new cljs.core.Keyword(null,"player","player",-97687400));
});

//# sourceMappingURL=player_web.statechart.main.js.map
