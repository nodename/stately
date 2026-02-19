goog.provide('lightingsystem_web.ui.app');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"active-states","active-states",-911704047),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"active-states","active-states",-911704047).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"brightness","brightness",1067055820),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"brightness","brightness",1067055820).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
lightingsystem_web.ui.app.small_button_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null);
lightingsystem_web.ui.app.bulb = (function lightingsystem_web$ui$app$bulb(brightness){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["center",(((brightness > (0)))?["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((brightness * 0.4)),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((brightness * 0.2)),"px rgba(255,220,80,0.8)"].join(''):null),(((brightness > (0)))?"#333":"#aaa"),"14px","all 0.4s ease","120px",["rgba(255, 220, 80, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((brightness / (100))),")"].join(''),"center","flex","3px solid #ccc","50%","120px","24px auto"])], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(brightness),"%"].join('')], null);
});
lightingsystem_web.ui.app.btn = (function lightingsystem_web$ui$app$btn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11258 = arguments.length;
var i__5727__auto___11259 = (0);
while(true){
if((i__5727__auto___11259 < len__5726__auto___11258)){
args__5732__auto__.push((arguments[i__5727__auto___11259]));

var G__11260 = (i__5727__auto___11259 + (1));
i__5727__auto___11259 = G__11260;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return lightingsystem_web.ui.app.btn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(lightingsystem_web.ui.app.btn.cljs$core$IFn$_invoke$arity$variadic = (function (label,event,p__11253){
var vec__11254 = p__11253;
var map__11257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11254,(0),null);
var map__11257__$1 = cljs.core.__destructure_map(map__11257);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11257__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return nodename.stately.core.dispatch_transition(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 16px",new cljs.core.Keyword(null,"margin","margin",-995903681),"4px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(disabled_QMARK_)?"default":"pointer"),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(disabled_QMARK_)?"#ddd":"#444"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(disabled_QMARK_)?"#aaa":"white")], null)], null),label], null);
}));

(lightingsystem_web.ui.app.btn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(lightingsystem_web.ui.app.btn.cljs$lang$applyTo = (function (seq11250){
var G__11251 = cljs.core.first(seq11250);
var seq11250__$1 = cljs.core.next(seq11250);
var G__11252 = cljs.core.first(seq11250__$1);
var seq11250__$2 = cljs.core.next(seq11250__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11251,G__11252,seq11250__$2);
}));

lightingsystem_web.ui.app.app_screen = (function lightingsystem_web$ui$app$app_screen(){
var active = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-states","active-states",-911704047)], null));
var brightness = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brightness","brightness",1067055820)], null));
return (function (){
var manual_QMARK_ = cljs.core.contains_QMARK_(cljs.core.deref(active),new cljs.core.Keyword("lighting","manual","lighting/manual",985253396));
var motion_sensing_QMARK_ = cljs.core.contains_QMARK_(cljs.core.deref(active),new cljs.core.Keyword("lighting","motion-sensing","lighting/motion-sensing",-1810206076));
var manual_on_QMARK_ = cljs.core.contains_QMARK_(cljs.core.deref(active),new cljs.core.Keyword("manual","on","manual/on",-891157806));
var motion_active_QMARK_ = cljs.core.contains_QMARK_(cljs.core.deref(active),new cljs.core.Keyword("motion","active","motion/active",815715838));
var br = (function (){var or__5002__auto__ = cljs.core.deref(brightness);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"340px",new cljs.core.Keyword(null,"margin","margin",-995903681),"40px auto",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Lighting System"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightingsystem_web.ui.app.bulb,br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"18px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0 4px",new cljs.core.Keyword(null,"color","color",1011675173),(((br > (0)))?"#c8a000":"#999")], null)], null),(((br > (0)))?"ON":"OFF")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px",new cljs.core.Keyword(null,"color","color",1011675173),"#666",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px"], null)], null),["Brightness: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(br),"%"].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"#f5f5f5",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"padding","padding",1660304693),"16px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px",new cljs.core.Keyword(null,"color","color",1011675173),"#888",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),"Mode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"12px"], null)], null),((manual_QMARK_)?"Manual":((motion_sensing_QMARK_)?"Motion Sensing":null))], null),((manual_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightingsystem_web.ui.app.btn,"Toggle Light",new cljs.core.Keyword(null,"toggle","toggle",1291842030)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightingsystem_web.ui.app.btn,"Change Brightness",new cljs.core.Keyword(null,"change-brightness","change-brightness",169006747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(!(manual_on_QMARK_))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightingsystem_web.ui.app.btn,"Switch to Motion Sensing",new cljs.core.Keyword(null,"switch-to-motion","switch-to-motion",78251000)], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightingsystem_web.ui.app.btn,"Simulate Motion",new cljs.core.Keyword(null,"motion-detected","motion-detected",1127054770),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),motion_active_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"color","color",1011675173),"#888",new cljs.core.Keyword(null,"margin","margin",-995903681),"6px 0"], null)], null),((motion_active_QMARK_)?"Light will turn off after 5 seconds":"Waiting for motion...")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightingsystem_web.ui.app.btn,"Switch to Manual",new cljs.core.Keyword(null,"switch-to-manual","switch-to-manual",-1952921967)], null)], null))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"8px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),lightingsystem_web.ui.app.small_button_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(nodename.stately.tree.tree());
})], null),"statechart"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),lightingsystem_web.ui.app.small_button_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(nodename.stately.comms.app_db),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"active-states","active-states",-911704047),new cljs.core.Keyword(null,"parents","parents",-2027538891)], 0)));
})], null),"db"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),lightingsystem_web.ui.app.small_button_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.user.show_active_states], null),"active states"], null)], null)], null);
});
});

//# sourceMappingURL=lightingsystem_web.ui.app.js.map
