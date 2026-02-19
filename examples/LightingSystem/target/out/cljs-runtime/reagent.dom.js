goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

if((typeof module$node_modules$react_dom$index !== 'undefined') && (typeof module$node_modules$react_dom$index.unmountComponentAtNode !== 'undefined')){
} else {
console.warn("react-dom/unmountComponentAtNode function doesn't exist, you are likely trying to use the old DOM api with React 19. Use reagent.dom.client instead.");
}

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
if((typeof module$node_modules$react_dom$index !== 'undefined') && (typeof module$node_modules$react_dom$index.render !== 'undefined')){
} else {
console.warn("react-dom/render function doesn't exist, you are likely trying to use the old DOM api with React 19. Use reagent.dom.client instead.");
}

var _STAR_always_update_STAR__orig_val__10591 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__10592 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__10592);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )),container,(function (){
var _STAR_always_update_STAR__orig_val__10596 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__10597 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__10597);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null, ));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__10596);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__10591);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * NOTE: Usable only with React 18 or older. React 19 doesn't provide
 *   react-dom/render function.
 * 
 *   Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__10607 = arguments.length;
switch (G__10607) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__10617 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10617,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10617,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__10631_10725 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__10632_10726 = null;
var count__10633_10727 = (0);
var i__10634_10728 = (0);
while(true){
if((i__10634_10728 < count__10633_10727)){
var vec__10657_10729 = chunk__10632_10726.cljs$core$IIndexed$_nth$arity$2(null, i__10634_10728);
var container_10730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10657_10729,(0),null);
var comp_10731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10657_10729,(1),null);
reagent.dom.re_render_component(comp_10731,container_10730);


var G__10732 = seq__10631_10725;
var G__10733 = chunk__10632_10726;
var G__10734 = count__10633_10727;
var G__10735 = (i__10634_10728 + (1));
seq__10631_10725 = G__10732;
chunk__10632_10726 = G__10733;
count__10633_10727 = G__10734;
i__10634_10728 = G__10735;
continue;
} else {
var temp__5804__auto___10741 = cljs.core.seq(seq__10631_10725);
if(temp__5804__auto___10741){
var seq__10631_10742__$1 = temp__5804__auto___10741;
if(cljs.core.chunked_seq_QMARK_(seq__10631_10742__$1)){
var c__5525__auto___10743 = cljs.core.chunk_first(seq__10631_10742__$1);
var G__10746 = cljs.core.chunk_rest(seq__10631_10742__$1);
var G__10747 = c__5525__auto___10743;
var G__10748 = cljs.core.count(c__5525__auto___10743);
var G__10749 = (0);
seq__10631_10725 = G__10746;
chunk__10632_10726 = G__10747;
count__10633_10727 = G__10748;
i__10634_10728 = G__10749;
continue;
} else {
var vec__10684_10750 = cljs.core.first(seq__10631_10742__$1);
var container_10751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10684_10750,(0),null);
var comp_10752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10684_10750,(1),null);
reagent.dom.re_render_component(comp_10752,container_10751);


var G__10754 = cljs.core.next(seq__10631_10742__$1);
var G__10755 = null;
var G__10756 = (0);
var G__10757 = (0);
seq__10631_10725 = G__10754;
chunk__10632_10726 = G__10755;
count__10633_10727 = G__10756;
i__10634_10728 = G__10757;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
