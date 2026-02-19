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

var _STAR_always_update_STAR__orig_val__10562 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__10563 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__10563);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )),container,(function (){
var _STAR_always_update_STAR__orig_val__10566 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__10567 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__10567);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null, ));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__10566);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__10562);
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
var G__10580 = arguments.length;
switch (G__10580) {
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

var vec__10587 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10587,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10587,(1),null);
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

var seq__10610_10671 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__10611_10672 = null;
var count__10612_10673 = (0);
var i__10613_10674 = (0);
while(true){
if((i__10613_10674 < count__10612_10673)){
var vec__10632_10675 = chunk__10611_10672.cljs$core$IIndexed$_nth$arity$2(null, i__10613_10674);
var container_10676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10632_10675,(0),null);
var comp_10677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10632_10675,(1),null);
reagent.dom.re_render_component(comp_10677,container_10676);


var G__10681 = seq__10610_10671;
var G__10682 = chunk__10611_10672;
var G__10683 = count__10612_10673;
var G__10685 = (i__10613_10674 + (1));
seq__10610_10671 = G__10681;
chunk__10611_10672 = G__10682;
count__10612_10673 = G__10683;
i__10613_10674 = G__10685;
continue;
} else {
var temp__5804__auto___10686 = cljs.core.seq(seq__10610_10671);
if(temp__5804__auto___10686){
var seq__10610_10687__$1 = temp__5804__auto___10686;
if(cljs.core.chunked_seq_QMARK_(seq__10610_10687__$1)){
var c__5525__auto___10688 = cljs.core.chunk_first(seq__10610_10687__$1);
var G__10690 = cljs.core.chunk_rest(seq__10610_10687__$1);
var G__10691 = c__5525__auto___10688;
var G__10692 = cljs.core.count(c__5525__auto___10688);
var G__10693 = (0);
seq__10610_10671 = G__10690;
chunk__10611_10672 = G__10691;
count__10612_10673 = G__10692;
i__10613_10674 = G__10693;
continue;
} else {
var vec__10636_10695 = cljs.core.first(seq__10610_10687__$1);
var container_10696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10636_10695,(0),null);
var comp_10697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10636_10695,(1),null);
reagent.dom.re_render_component(comp_10697,container_10696);


var G__10698 = cljs.core.next(seq__10610_10687__$1);
var G__10699 = null;
var G__10700 = (0);
var G__10701 = (0);
seq__10610_10671 = G__10698;
chunk__10611_10672 = G__10699;
count__10612_10673 = G__10700;
i__10613_10674 = G__10701;
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
