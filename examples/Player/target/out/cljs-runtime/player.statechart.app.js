goog.provide('player.statechart.app');
if((typeof player !== 'undefined') && (typeof player.statechart !== 'undefined') && (typeof player.statechart.app !== 'undefined') && (typeof player.statechart.app.player !== 'undefined')){
} else {
player.statechart.app.player = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-state","start-state",2056408421),new cljs.core.Keyword("player","active","player/active",901968627),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("player","active","player/active",901968627),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"track","track",195787487),new cljs.core.Keyword(null,"volume","volume",1900330799)], null)], null)], null)], null);
}
if((typeof player !== 'undefined') && (typeof player.statechart !== 'undefined') && (typeof player.statechart.app !== 'undefined') && (typeof player.statechart.app.track !== 'undefined')){
} else {
player.statechart.app.track = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-state","start-state",2056408421),new cljs.core.Keyword("track","paused","track/paused",-1685720818),new cljs.core.Keyword(null,"transitions","transitions",-2046216121),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("track","paused","track/paused",-1685720818),new cljs.core.Keyword(null,"play","play",-580418022)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("track","playing","track/playing",429137860)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("track","playing","track/playing",429137860),new cljs.core.Keyword(null,"stop","stop",-2140911342)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("track","paused","track/paused",-1685720818)], null)]),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("track","paused","track/paused",-1685720818),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("track","playing","track/playing",429137860),cljs.core.PersistentArrayMap.EMPTY], null)], null);
}
player.statechart.app.volume_levels = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10),(20),(30),(40),(50),(60),(70),(80),(90),(100)], null);
if((typeof player !== 'undefined') && (typeof player.statechart !== 'undefined') && (typeof player.statechart.app !== 'undefined') && (typeof player.statechart.app.volume !== 'undefined')){
} else {
player.statechart.app.volume = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-initial-volume","set-initial-volume",-1664058721),(function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"volume","volume",1900330799),(100));
}),new cljs.core.Keyword(null,"cycle-volume","cycle-volume",-488044769),(function (db){
var current = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"volume","volume",1900330799).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (100);
}
})();
var next = cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__67074_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__67074_SHARP_,current);
}),cljs.core.cycle(player.statechart.app.volume_levels)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"volume","volume",1900330799),(function (){var or__5002__auto__ = next;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})());
})], null),new cljs.core.Keyword(null,"start-state","start-state",2056408421),new cljs.core.Keyword("volume","active","volume/active",525794970),new cljs.core.Keyword(null,"transitions","transitions",-2046216121),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("volume","active","volume/active",525794970),new cljs.core.Keyword(null,"cycle-volume","cycle-volume",-488044769)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cycle-volume","cycle-volume",-488044769)], null)], null)], null)]),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("volume","active","volume/active",525794970),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entry-actions","entry-actions",493602529),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-initial-volume","set-initial-volume",-1664058721)], null)], null)], null)], null)], null);
}

//# sourceMappingURL=player.statechart.app.js.map
