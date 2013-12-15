console.wrong=function(e){if(e){var n=e.name,m=e.message,s='\u2009';console.error((n && n!="Error"?'Exception'+s+'#'+n:'Error'+s)+(m?':'+s+m:e))}};
//
//
function RunMe(){
 var Default={alias:'MyID'};
 function my(p){return p?(RunMe[p]||Default[p]):false};

 var w=window, d=w.document, alias=my('alias'), e=w[alias];

 function isFunction(x){return typeof x=='function'};
 function areSameFunction(a,b){var f=isFunction,s=String;return f(a)&&f(b)?s(a)==s(b):0};

 var Make={
	Obj:function(p,c){return Object.create(c||null,p||{})},
	Event:function(s){var e=new Event(s?s:'');e.informing=function(o){var r=1,p='dispatchEvent';if(o&&o[p]){return o[p](e)}};return e},
	Exception:function(n,m){throw(this.Obj({'name':{value:n},'message':{value:m}}))}//,...
 };



 function happen(x){var r,e=Make.Event(x).informing(d);if(e){r=1}else{r=0;console.warn(x)}};

 function script(){var diff=2};

 function recall(o){var t=o.timeStamp;console.log(RunMe.again,'re-called',t?'@'+t:'t?')};

 function Build(v){
	 var s='creation',n=my('alias'),o=w[n]=script;
	 o.created=Make.Event(s).timeStamp;
	 d.addEventListener(n,recall,0);
	 RunMe.again=n;
	 console.info(n,v);
	 return o;
 };

 try{//Check
	if(e){//already exist...
	 if(areSameFunction(e,script)){//equal
		happen(RunMe.again)
	 }else{//different!
		var i,j=1;while(1){i=String(alias+j);e=w[i];if(!e){break}else if(areSameFunction(e,script)){i=0;break};j++};
		if(i){RunMe.alias=i;e=Build('relocate')};
	 };
	}else{//make!
	 e=Build('exnovo');Object.freeze(e);console.dir(e);
	};
 }catch(fault){
  console.wrong(fault);
 };
};
//
