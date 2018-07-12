goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__26671){
var vec__26672 = p__26671;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26672,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26672,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__26685 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26685,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26685,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26685,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__26694 = arguments.length;
switch (G__26694) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4024__auto__ = cljs.core.count(a);
var y__4025__auto__ = cljs.core.count(b);
return ((x__4024__auto__ > y__4025__auto__) ? x__4024__auto__ : y__4025__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4230__auto__ = (((x == null))?null:x);
var m__4231__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4231__auto__.call(null,x));
} else {
var m__4231__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4231__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4230__auto__ = (((a == null))?null:a);
var m__4231__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4231__auto__.call(null,a,b));
} else {
var m__4231__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4231__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__26723_26762 = clojure.data.equality_partition;
var G__26724_26763 = "null";
var G__26725_26764 = ((function (G__26723_26762,G__26724_26763){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26723_26762,G__26724_26763))
;
goog.object.set(G__26723_26762,G__26724_26763,G__26725_26764);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__26728_26765 = clojure.data.equality_partition;
var G__26729_26766 = "string";
var G__26730_26767 = ((function (G__26728_26765,G__26729_26766){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26728_26765,G__26729_26766))
;
goog.object.set(G__26728_26765,G__26729_26766,G__26730_26767);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__26733_26770 = clojure.data.equality_partition;
var G__26734_26771 = "number";
var G__26735_26772 = ((function (G__26733_26770,G__26734_26771){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26733_26770,G__26734_26771))
;
goog.object.set(G__26733_26770,G__26734_26771,G__26735_26772);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__26736_26776 = clojure.data.equality_partition;
var G__26737_26777 = "array";
var G__26738_26778 = ((function (G__26736_26776,G__26737_26777){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__26736_26776,G__26737_26777))
;
goog.object.set(G__26736_26776,G__26737_26777,G__26738_26778);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__26739_26780 = clojure.data.equality_partition;
var G__26740_26781 = "function";
var G__26741_26782 = ((function (G__26739_26780,G__26740_26781){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26739_26780,G__26740_26781))
;
goog.object.set(G__26739_26780,G__26740_26781,G__26741_26782);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__26746_26784 = clojure.data.equality_partition;
var G__26747_26785 = "boolean";
var G__26748_26786 = ((function (G__26746_26784,G__26747_26785){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26746_26784,G__26747_26785))
;
goog.object.set(G__26746_26784,G__26747_26785,G__26748_26786);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__26749_26789 = clojure.data.equality_partition;
var G__26750_26790 = "_";
var G__26751_26791 = ((function (G__26749_26789,G__26750_26790){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__26749_26789,G__26750_26790))
;
goog.object.set(G__26749_26789,G__26750_26790,G__26751_26791);
goog.object.set(clojure.data.Diff,"null",true);

var G__26795_26834 = clojure.data.diff_similar;
var G__26796_26835 = "null";
var G__26797_26836 = ((function (G__26795_26834,G__26796_26835){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26795_26834,G__26796_26835))
;
goog.object.set(G__26795_26834,G__26796_26835,G__26797_26836);

goog.object.set(clojure.data.Diff,"string",true);

var G__26801_26839 = clojure.data.diff_similar;
var G__26802_26840 = "string";
var G__26803_26841 = ((function (G__26801_26839,G__26802_26840){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26801_26839,G__26802_26840))
;
goog.object.set(G__26801_26839,G__26802_26840,G__26803_26841);

goog.object.set(clojure.data.Diff,"number",true);

var G__26805_26843 = clojure.data.diff_similar;
var G__26806_26844 = "number";
var G__26807_26845 = ((function (G__26805_26843,G__26806_26844){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26805_26843,G__26806_26844))
;
goog.object.set(G__26805_26843,G__26806_26844,G__26807_26845);

goog.object.set(clojure.data.Diff,"array",true);

var G__26810_26846 = clojure.data.diff_similar;
var G__26811_26847 = "array";
var G__26812_26848 = ((function (G__26810_26846,G__26811_26847){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__26810_26846,G__26811_26847))
;
goog.object.set(G__26810_26846,G__26811_26847,G__26812_26848);

goog.object.set(clojure.data.Diff,"function",true);

var G__26815_26853 = clojure.data.diff_similar;
var G__26816_26854 = "function";
var G__26817_26855 = ((function (G__26815_26853,G__26816_26854){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26815_26853,G__26816_26854))
;
goog.object.set(G__26815_26853,G__26816_26854,G__26817_26855);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__26819_26856 = clojure.data.diff_similar;
var G__26820_26857 = "boolean";
var G__26821_26858 = ((function (G__26819_26856,G__26820_26857){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26819_26856,G__26820_26857))
;
goog.object.set(G__26819_26856,G__26820_26857,G__26821_26858);

goog.object.set(clojure.data.Diff,"_",true);

var G__26824_26861 = clojure.data.diff_similar;
var G__26825_26862 = "_";
var G__26826_26863 = ((function (G__26824_26861,G__26825_26862){
return (function (a,b){
var fexpr__26830 = (function (){var G__26831 = clojure.data.equality_partition(a);
var G__26831__$1 = (((G__26831 instanceof cljs.core.Keyword))?G__26831.fqn:null);
switch (G__26831__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26831__$1)].join('')));

}
})();
return (fexpr__26830.cljs$core$IFn$_invoke$arity$2 ? fexpr__26830.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__26830.call(null,a,b));
});})(G__26824_26861,G__26825_26862))
;
goog.object.set(G__26824_26861,G__26825_26862,G__26826_26863);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
