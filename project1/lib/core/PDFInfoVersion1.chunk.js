/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[13],{380:function(Ca,ua,x){function pa(ea){ea.Aa();ea.advance();var fa=ea.current.textContent;ea.Pa();return fa}function la(ea){var fa=[];for(ea.Aa();ea.advance();){var ja=ea.Fa();"field"===ja?fa.push(String(ea.ea("name"))):Object(e.j)("unrecognised field list element: "+ja)}ea.Pa();return fa}function ka(ea,fa){return fa?"false"!==ea:"true"===ea}function ha(ea,fa){var ja=ea.Fa();switch(ja){case "javascript":return{name:"JavaScript",
javascript:ea.current.textContent};case "uri":return{name:"URI",uri:ea.ea("uri")};case "goto":ja=null;ea.Aa();if(ea.advance()){var na=ea.ea("fit");ja={page:ea.ea("page"),fit:na};if("0"===ja.page)Object(e.j)("null page encountered in dest");else switch(fa=fa(Number(ja.page)),na){case "Fit":case "FitB":break;case "FitH":case "FitBH":ja.top=fa.la({x:0,y:ea.ea("top")||0}).y;break;case "FitV":case "FitBV":ja.left=fa.la({x:ea.ea("left")||0,y:0}).x;break;case "FitR":na=fa.la({x:ea.ea("left")||0,y:ea.ea("top")||
0});fa=fa.la({x:ea.ea("right")||0,y:ea.ea("bottom")||0});fa=new y.d(na.x,na.y,fa.x,fa.y);ja.top=fa.y1;ja.left=fa.x1;ja.bottom=fa.y2;ja.right=fa.x2;break;case "XYZ":na=fa.la({x:ea.ea("left")||0,y:ea.ea("top")||0});ja.top=na.y;ja.left=na.x;ja.zoom=ea.ea("zoom")||0;break;default:Object(e.j)("unknown dest fit: "+na)}ja={name:"GoTo",dest:ja}}else Object(e.j)("missing dest in GoTo action");ea.Pa();return ja;case "submit-form":ja={name:"SubmitForm",url:ea.ea("url"),format:ea.ea("format"),method:ea.ea("method")||
"POST",exclude:ka(ea.ea("exclude"),!1)};fa=ea.ea("flags");ja.flags=fa?fa.split(" "):[];for(ea.Aa();ea.advance();)switch(fa=ea.Fa(),fa){case "fields":ja.fields=la(ea);break;default:Object(e.j)("unrecognised submit-form child: "+fa)}ea.Pa();return ja;case "reset-form":ja={name:"ResetForm",exclude:ka(ea.ea("exclude"),!1)};for(ea.Aa();ea.advance();)switch(fa=ea.Fa(),fa){case "fields":ja.fields=la(ea);break;default:Object(e.j)("unrecognised reset-form child: "+fa)}ea.Pa();return ja;case "hide":ja={name:"Hide",
hide:ka(ea.ea("hide"),!0)};for(ea.Aa();ea.advance();)switch(fa=ea.Fa(),fa){case "fields":ja.fields=la(ea);break;default:Object(e.j)("unrecognised hide child: "+fa)}ea.Pa();return ja;case "named":return{name:"Named",action:ea.ea("name")};default:Object(e.j)("Encountered unexpected action type: "+ja)}return null}function da(ea,fa,ja){var na={};for(ea.Aa();ea.advance();){var ma=ea.Fa();switch(ma){case "action":ma=ea.ea("trigger");if(fa?-1!==fa.indexOf(ma):1){na[ma]=[];for(ea.Aa();ea.advance();){var qa=
ha(ea,ja);Object(n.isNull)(qa)||na[ma].push(qa)}ea.Pa()}else Object(e.j)("encountered unexpected trigger on field: "+ma);break;default:Object(e.j)("encountered unknown action child: "+ma)}}ea.Pa();return na}function z(ea){return new ba.a(ea.ea("r")||0,ea.ea("g")||0,ea.ea("b")||0,ea.ea("a")||1)}function r(ea,fa){var ja=ea.ea("name"),na=ea.ea("type")||"Type1",ma=ea.ea("size"),qa=fa.la({x:0,y:0});ma=fa.la({x:Number(ma),y:0});fa=qa.x-ma.x;qa=qa.y-ma.y;ja={name:ja,type:na,size:Math.sqrt(fa*fa+qa*qa)||
0,strokeColor:[0,0,0],fillColor:[0,0,0]};for(ea.Aa();ea.advance();)switch(na=ea.Fa(),na){case "stroke-color":ja.strokeColor=z(ea);break;case "fill-color":ja.fillColor=z(ea);break;default:Object(e.j)("unrecognised font child: "+na)}ea.Pa();return ja}function w(ea){var fa=[];for(ea.Aa();ea.advance();){var ja=ea.Fa();switch(ja){case "option":ja=fa;var na=ja.push;var ma=ea;ma={value:ma.ea("value"),displayValue:ma.ea("display-value")||void 0};na.call(ja,ma);break;default:Object(e.j)("unrecognised options child: "+
ja)}}ea.Pa();return fa}function h(ea,fa){var ja=ea.ea("name"),na={type:ea.ea("type"),quadding:ea.ea("quadding")||"Left-justified",maxLen:ea.ea("max-len")||-1},ma=ea.ea("flags");Object(n.isString)(ma)&&(na.flags=ma.split(" "));for(ea.Aa();ea.advance();)switch(ma=ea.Fa(),ma){case "actions":na.actions=da(ea,["C","F","K","V"],function(){return fa});break;case "default-value":na.defaultValue=pa(ea);break;case "font":na.font=r(ea,fa);break;case "options":na.options=w(ea);break;default:Object(e.j)("unknown field child: "+
ma)}ea.Pa();return new window.Annotations.ga.na(ja,na)}function a(ea,fa){switch(ea.type){case "Tx":try{if(Object(ia.c)(ea.actions))return new f.a.DatePickerWidgetAnnotation(ea,fa)}catch(ja){Object(e.j)(ja)}return new f.a.TextWidgetAnnotation(ea,fa);case "Ch":return ea.flags.get(ca.WidgetFlags.COMBO)?new f.a.ChoiceWidgetAnnotation(ea,fa):new f.a.ListWidgetAnnotation(ea,fa);case "Btn":return ea.flags.get(ca.WidgetFlags.PUSH_BUTTON)?new f.a.PushButtonWidgetAnnotation(ea,fa):ea.flags.get(ca.WidgetFlags.RADIO)?
new f.a.RadioButtonWidgetAnnotation(ea,fa):new f.a.CheckButtonWidgetAnnotation(ea,fa);case "Sig":return new f.a.SignatureWidgetAnnotation(ea,fa);default:Object(e.j)("Unrecognised field type: "+ea.type)}return null}function b(ea,fa,ja,na){var ma=[],qa={};ea.Aa();var ra=[],ta={},va=[];Object(aa.a)(function(){if(ea.advance()){var sa=ea.Fa();switch(sa){case "calculation-order":ra="calculation-order"===ea.Fa()?la(ea):[];break;case "document-actions":ta=da(ea,["Init","Open"],fa);break;case "pages":sa=[];
for(ea.Aa();ea.advance();){var Da=ea.Fa();switch(Da){case "page":Da=sa;var Ja=Da.push,Oa=ea,Ia=fa,Fa={number:Oa.ea("number")};for(Oa.Aa();Oa.advance();){var Pa=Oa.Fa();switch(Pa){case "actions":Fa.actions=da(Oa,["O","C"],Ia);break;default:Object(e.j)("unrecognised page child: "+Pa)}}Oa.Pa();Ja.call(Da,Fa);break;default:Object(e.j)("unrecognised page child: "+Da)}}ea.Pa();va=sa;break;case "field":Da=h(ea,fa(1));qa[Da.name]=Da;break;case "widget":sa={border:{style:"Solid",width:1},backgroundColor:[],
fieldName:ea.ea("field"),page:ea.ea("page"),index:ea.ea("index")||0,rotation:ea.ea("rotation")||0,flags:[],isImporting:!0};(Da=ea.ea("appearance"))&&(sa.appearance=Da);(Da=ea.ea("flags"))&&(sa.flags=Da.split(" "));for(ea.Aa();ea.advance();)switch(Da=ea.Fa(),Da){case "rect":Ja=ea;Oa=fa(Number(sa.page));Da=Oa.la({x:Ja.ea("x1")||0,y:Ja.ea("y1")||0});Ja=Oa.la({x:Ja.ea("x2")||0,y:Ja.ea("y2")||0});Da=new y.d(Da.x,Da.y,Ja.x,Ja.y);Da.normalize();sa.rect={x1:Da.x1,y1:Da.y1,x2:Da.x2,y2:Da.y2};break;case "border":Da=
ea;Ja={style:Da.ea("style")||"Solid",width:Da.ea("width")||1,color:[0,0,0]};for(Da.Aa();Da.advance();)switch(Oa=Da.Fa(),Oa){case "color":Ja.color=z(Da);break;default:Object(e.j)("unrecognised border child: "+Oa)}Da.Pa();sa.border=Ja;break;case "background-color":sa.backgroundColor=z(ea);break;case "actions":sa.actions=da(ea,"E X D U Fo Bl PO PC PV PI".split(" "),fa);break;case "appearances":Da=ea;Ja=Object(ia.b)(sa,"appearances");for(Da.Aa();Da.advance();)if(Oa=Da.Fa(),"appearance"===Oa){Oa=Da.ea("name");
Ia=Object(ia.b)(Ja,Oa);Oa=Da;for(Oa.Aa();Oa.advance();)switch(Fa=Oa.Fa(),Fa){case "Normal":Object(ia.b)(Ia,"Normal").data=Oa.current.textContent;break;default:Object(e.j)("unexpected appearance state: ",Fa)}Oa.Pa()}else Object(e.j)("unexpected appearances child: "+Oa);Da.Pa();break;case "extra":Da=ea;Ja=fa;Oa={};for(Da.Aa();Da.advance();)switch(Ia=Da.Fa(),Ia){case "font":Oa.font=r(Da,Ja(1));break;default:Object(e.j)("unrecognised extra child: "+Ia)}Da.Pa();Da=Oa;Da.font&&(sa.font=Da.font);break;case "captions":Ja=
ea;Da={};(Oa=Ja.ea("Normal"))&&(Da.Normal=Oa);(Oa=Ja.ea("Rollover"))&&(Da.Rollover=Oa);(Ja=Ja.ea("Down"))&&(Da.Down=Ja);sa.captions=Da;break;default:Object(e.j)("unrecognised widget child: "+Da)}ea.Pa();(Da=qa[sa.fieldName])?(sa=a(Da,sa),ma.push(sa)):Object(e.j)("ignoring widget with no corresponding field data: "+sa.fieldName);break;default:Object(e.j)("Unknown element encountered in PDFInfo: "+sa)}return!0}return!1},function(){ea.Pa();ja({calculationOrder:ra,widgets:ma,fields:qa,documentActions:ta,
pages:va,custom:[]})},na)}x.r(ua);x.d(ua,"parse",function(){return b});var e=x(1),n=x(0);x.n(n);var f=x(105),y=x(3),ba=x(14),aa=x(18),ia=x(89),ca=x(29)}}]);}).call(this || window)