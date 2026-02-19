goog.provide('player_web.ui.app');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"active-states","active-states",-911704047),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"active-states","active-states",-911704047).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"volume","volume",1900330799),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"volume","volume",1900330799).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
player_web.ui.app.small_button_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null);
player_web.ui.app.btn = (function player_web$ui$app$btn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11095 = arguments.length;
var i__5727__auto___11096 = (0);
while(true){
if((i__5727__auto___11096 < len__5726__auto___11095)){
args__5732__auto__.push((arguments[i__5727__auto___11096]));

var G__11097 = (i__5727__auto___11096 + (1));
i__5727__auto___11096 = G__11097;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return player_web.ui.app.btn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(player_web.ui.app.btn.cljs$core$IFn$_invoke$arity$variadic = (function (label,event,p__11090){
var vec__11091 = p__11090;
var map__11094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11091,(0),null);
var map__11094__$1 = cljs.core.__destructure_map(map__11094);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11094__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return nodename.stately.core.dispatch_transition(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 20px",new cljs.core.Keyword(null,"margin","margin",-995903681),"4px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"15px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(disabled_QMARK_)?"default":"pointer"),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(disabled_QMARK_)?"#ddd":"#444"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(disabled_QMARK_)?"#aaa":"white")], null)], null),label], null);
}));

(player_web.ui.app.btn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(player_web.ui.app.btn.cljs$lang$applyTo = (function (seq11087){
var G__11088 = cljs.core.first(seq11087);
var seq11087__$1 = cljs.core.next(seq11087);
var G__11089 = cljs.core.first(seq11087__$1);
var seq11087__$2 = cljs.core.next(seq11087__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11088,G__11089,seq11087__$2);
}));

player_web.ui.app.app_screen = (function player_web$ui$app$app_screen(){
var active = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-states","active-states",-911704047)], null));
var volume = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"volume","volume",1900330799)], null));
return (function (){
var playing_QMARK_ = cljs.core.contains_QMARK_(cljs.core.deref(active),new cljs.core.Keyword("track","playing","track/playing",429137860));
var vol = (function (){var or__5002__auto__ = cljs.core.deref(volume);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (100);
}
})();
var muted_QMARK_ = (vol === (0));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"320px",new cljs.core.Keyword(null,"margin","margin",-995903681),"60px auto",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Player"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"72px",new cljs.core.Keyword(null,"margin","margin",-995903681),"16px 0",new cljs.core.Keyword(null,"color","color",1011675173),((playing_QMARK_)?"#1db954":"#aaa")], null)], null),((playing_QMARK_)?"\u25B6":"\u23F8")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0 4px",new cljs.core.Keyword(null,"color","color",1011675173),"#333"], null)], null),((playing_QMARK_)?"Playing":"Paused")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"color","color",1011675173),"#666",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"24px"], null)], null),((muted_QMARK_)?"\uD83D\uDD07 Muted":["\uD83D\uDD0A Volume: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vol),"%"].join(''))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((playing_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [player_web.ui.app.btn,"Stop",new cljs.core.Keyword(null,"stop","stop",-2140911342)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [player_web.ui.app.btn,"Play",new cljs.core.Keyword(null,"play","play",-580418022)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [player_web.ui.app.btn,((muted_QMARK_)?"\uD83D\uDD07 Muted":["\uD83D\uDD0A ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vol),"% \u25B6"].join('')),new cljs.core.Keyword(null,"cycle-volume","cycle-volume",-488044769)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"24px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),player_web.ui.app.small_button_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(nodename.stately.tree.tree());
})], null),"statechart"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),player_web.ui.app.small_button_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(nodename.stately.comms.app_db),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"active-states","active-states",-911704047),new cljs.core.Keyword(null,"parents","parents",-2027538891)], 0)));
})], null),"db"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),player_web.ui.app.small_button_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.user.show_active_states], null),"active states"], null)], null)], null);
});
});

//# sourceMappingURL=player_web.ui.app.js.map
