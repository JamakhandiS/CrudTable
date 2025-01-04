import './polyfills.server.mjs';
import{a as Te,b as Ge,c as Re,f as je,l as Be}from"./chunk-LWQXAAXU.mjs";import{$ as Y,Da as Ae,Ea as Ee,Fa as Fe,Ga as te,H as y,Ha as a,I as V,Ia as u,J as D,Ja as we,K as q,Ka as Ie,La as m,M as _,Ma as ie,Na as d,Oa as A,P as z,Pa as O,Qa as x,Ra as P,S as b,Sa as E,T as N,Ta as k,U as Z,V as h,W as _e,Xa as Se,_ as X,aa as J,ba as K,cb as Ne,ea as Q,fa as M,h as me,hb as ne,ib as Oe,jb as re,ka as ve,m as ge,mb as xe,qa as f,r as ye,ra as l,rb as Pe,sa as Ce,sb as ke,ta as Ve,ua as De,va as ee,wa as be,xa as Me,za as p}from"./chunk-6CCMM3FU.mjs";import{a as c,b as g}from"./chunk-VVCT4QZE.mjs";var Xe=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(l(ee),l(Q))}}static{this.\u0275dir=h({type:i})}}return i})(),vt=(()=>{class i extends Xe{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=K(i)))(r||i)}})()}static{this.\u0275dir=h({type:i,features:[p]})}}return i})(),Ye=new _("");var Ct={provide:Ye,useExisting:V(()=>L),multi:!0};function Vt(){let i=re()?re().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Dt=new _(""),L=(()=>{class i extends Xe{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Vt())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(l(ee),l(Q),l(Dt,8))}}static{this.\u0275dir=h({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&m("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[E([Ct]),p]})}}return i})();function bt(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}var se=new _(""),Je=new _("");function Mt(i){return bt(i.value)?{required:!0}:null}function Ue(i){return null}function Ke(i){return i!=null}function Qe(i){return Se(i)?me(i):i}function et(i){let e={};return i.forEach(t=>{e=t!=null?c(c({},e),t):e}),Object.keys(e).length===0?null:e}function tt(i,e){return e.map(t=>t(i))}function At(i){return!i.validate}function it(i){return i.map(e=>At(e)?e:t=>e.validate(t))}function Et(i){if(!i)return null;let e=i.filter(Ke);return e.length==0?null:function(t){return et(tt(t,e))}}function ae(i){return i!=null?Et(it(i)):null}function Ft(i){if(!i)return null;let e=i.filter(Ke);return e.length==0?null:function(t){let n=tt(t,e).map(Qe);return ye(n).pipe(ge(et))}}function le(i){return i!=null?Ft(it(i)):null}function He(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function wt(i){return i._rawValidators}function It(i){return i._rawAsyncValidators}function oe(i){return i?Array.isArray(i)?i:[i]:[]}function G(i,e){return Array.isArray(i)?i.includes(e):i===e}function Le(i,e){let t=oe(e);return oe(i).forEach(r=>{G(t,r)||t.push(r)}),t}function We(i,e){return oe(e).filter(t=>!G(i,t))}var R=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ae(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=le(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},C=class extends R{get formDirective(){return null}get path(){return null}},S=class extends R{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},j=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},St={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Vi=g(c({},St),{"[class.ng-submitted]":"isSubmitted"}),nt=(()=>{class i extends j{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(l(S,2))}}static{this.\u0275dir=h({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&te("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[p]})}}return i})(),rt=(()=>{class i extends j{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(l(C,10))}}static{this.\u0275dir=h({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&te("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[p]})}}return i})();var F="VALID",T="INVALID",v="PENDING",w="DISABLED";function ot(i){return(W(i)?i.validators:i)||null}function Nt(i){return Array.isArray(i)?ae(i):i||null}function st(i,e){return(W(e)?e.asyncValidators:i)||null}function Ot(i){return Array.isArray(i)?le(i):i||null}function W(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function xt(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new y(1e3,"");if(!n[t])throw new y(1001,"")}function Pt(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new y(1002,"")})}var B=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===F}get invalid(){return this.status===T}get pending(){return this.status==v}get disabled(){return this.status===w}get enabled(){return this.status!==w}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Le(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Le(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(We(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(We(e,this._rawAsyncValidators))}hasValidator(e){return G(this._rawValidators,e)}hasAsyncValidator(e){return G(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=v,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=w,this.errors=null,this._forEachChild(n=>{n.disable(g(c({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(g(c({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(n=>{n.enable(g(c({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(g(c({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===v)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator=!0;let t=Qe(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new M,this.statusChanges=new M}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?T:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(T)?T:F}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){W(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Nt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ot(this._rawAsyncValidators)}},U=class extends B{constructor(e,t,n){super(ot(t),st(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){Pt(this,!0,e),Object.keys(e).forEach(n=>{xt(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,o)=>{n=t(n,r,o)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ue=new _("CallSetDisabledState",{providedIn:"root",factory:()=>de}),de="always";function kt(i,e){return[...e.path,i]}function at(i,e,t=de){lt(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),Gt(i,e),jt(i,e),Rt(i,e),Tt(i,e)}function $e(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Tt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function lt(i,e){let t=wt(i);e.validator!==null?i.setValidators(He(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=It(i);e.asyncValidator!==null?i.setAsyncValidators(He(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();$e(e._rawValidators,r),$e(e._rawAsyncValidators,r)}function Gt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&ut(i,e)})}function Rt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&ut(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function ut(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function jt(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Bt(i,e){i==null,lt(i,e)}function Ut(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Ht(i){return Object.getPrototypeOf(i.constructor)===vt}function Lt(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Wt(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(o=>{o.constructor===L?t=o:Ht(o)?n=o:r=o}),r||n||t||null}var $t={provide:C,useExisting:V(()=>ce)},I=Promise.resolve(),ce=(()=>{class i extends C{constructor(t,n,r){super(),this.callSetDisabledState=r,this.submitted=!1,this._directives=new Set,this.ngSubmit=new M,this.form=new U({},ae(t),le(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){I.then(()=>{let n=this._findContainer(t.path);t.control=n.registerControl(t.name,t.control),at(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){I.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){I.then(()=>{let n=this._findContainer(t.path),r=new U({});Bt(r,t),n.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){I.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,n){I.then(()=>{this.form.get(t.path).setValue(n)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,Lt(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static{this.\u0275fac=function(n){return new(n||i)(l(se,10),l(Je,10),l(ue,8))}}static{this.\u0275dir=h({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&m("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[b.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[E([$t]),p]})}}return i})();function qe(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function ze(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var qt=class extends B{constructor(e=null,t,n){super(ot(t),st(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),W(t)&&(t.nonNullable||t.initialValueIsDefault)&&(ze(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){qe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){qe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ze(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var zt={provide:S,useExisting:V(()=>he)},Ze=Promise.resolve(),he=(()=>{class i extends S{constructor(t,n,r,o,s,$){super(),this._changeDetectorRef=s,this.callSetDisabledState=$,this.control=new qt,this._registered=!1,this.name="",this.update=new M,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Wt(this,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Ut(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){at(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Ze.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&ne(n);Ze.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?kt(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(l(C,9),l(se,10),l(Je,10),l(Ye,10),l(Ne,8),l(ue,8))}}static{this.\u0275dir=h({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[b.None,"disabled","isDisabled"],model:[b.None,"ngModel","model"],options:[b.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[E([zt]),p,X]})}}return i})(),dt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=h({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var Zt=(()=>{class i{constructor(){this._validator=Ue}ngOnChanges(t){if(this.inputName in t){let n=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):Ue,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=h({type:i,features:[X]})}}return i})();var Xt={provide:se,useExisting:V(()=>fe),multi:!0};var fe=(()=>{class i extends Zt{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=ne,this.createValidator=t=>Mt}enabled(t){return t}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=K(i)))(r||i)}})()}static{this.\u0275dir=h({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,r){n&2&&Ee("required",r._enabled?"":null)},inputs:{required:"required"},features:[E([Xt]),p]})}}return i})();var Yt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=Z({type:i})}static{this.\u0275inj=q({})}}return i})();var ct=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:ue,useValue:t.callSetDisabledState??de}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=Z({type:i})}static{this.\u0275inj=q({imports:[Yt]})}}return i})();var ht=(()=>{class i{constructor(){this.employees=[{id:1,name:"Shraddha Jamakhandi",position:"Developer",department:"IT"},{id:2,name:"Shreya",position:"Designer",department:"UX/UI"}]}getEmployees(){return this.employees}addEmployee(t){this.employees.push(t)}updateEmployee(t){let n=this.employees.findIndex(r=>r.id===t.id);n!==-1&&(this.employees[n]=t)}deleteEmployee(t){this.employees=this.employees.filter(n=>n.id!==t)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function Qt(i,e){if(i&1){let t=Ie();a(0,"tr")(1,"td"),d(2),u(),a(3,"td"),d(4),u(),a(5,"td"),d(6),u(),a(7,"td")(8,"button",10),m("click",function(){let r=Y(t).$implicit,o=ie();return J(o.editEmployee(r))}),d(9,"Edit"),u(),a(10,"button",10),m("click",function(){let r=Y(t).$implicit,o=ie();return J(o.deleteEmployee(r.id))}),d(11,"Delete"),u()()()}if(i&2){let t=e.$implicit;f(2),A(t.name),f(2),A(t.position),f(2),A(t.department)}}var ft=(()=>{class i{constructor(t){this.dataService=t,this.employees=[],this.isEditing=!1,this.currentEmployee={id:0,name:"",position:"",department:""},this.employees=this.dataService.getEmployees()}addEmployee(){this.currentEmployee.id?(this.dataService.updateEmployee(c({},this.currentEmployee)),this.isEditing=!1):(this.currentEmployee.id=Math.max(...this.employees.map(t=>t.id),0)+1,this.dataService.addEmployee(c({},this.currentEmployee))),this.currentEmployee={id:0,name:"",position:"",department:""},this.employees=this.dataService.getEmployees()}editEmployee(t){this.currentEmployee=c({},t),this.isEditing=!0}deleteEmployee(t){this.dataService.deleteEmployee(t),this.employees=this.dataService.getEmployees()}static{this.\u0275fac=function(n){return new(n||i)(l(ht))}}static{this.\u0275cmp=N({type:i,selectors:[["app-crud-table"]],standalone:!0,features:[k],decls:31,vars:5,consts:[[1,"container"],[3,"submit"],["for","name"],["id","name","required","","name","name",3,"ngModelChange","ngModel"],["for","position"],["id","position","required","","name","position",3,"ngModelChange","ngModel"],["for","department"],["id","department","required","","name","department",3,"ngModelChange","ngModel"],["type","submit"],[4,"ngFor","ngForOf"],["type","button",1,"b1",3,"click"]],template:function(n,r){n&1&&(a(0,"div",0)(1,"h1"),d(2,"Employee Management"),u(),a(3,"form",1),m("submit",function(){return r.addEmployee()}),a(4,"div")(5,"label",2),d(6,"Name:"),u(),a(7,"input",3),P("ngModelChange",function(s){return x(r.currentEmployee.name,s)||(r.currentEmployee.name=s),s}),u()(),a(8,"div")(9,"label",4),d(10,"Position:"),u(),a(11,"input",5),P("ngModelChange",function(s){return x(r.currentEmployee.position,s)||(r.currentEmployee.position=s),s}),u()(),a(12,"div")(13,"label",6),d(14,"Department:"),u(),a(15,"input",7),P("ngModelChange",function(s){return x(r.currentEmployee.department,s)||(r.currentEmployee.department=s),s}),u()(),a(16,"button",8),d(17),u()(),a(18,"table")(19,"thead")(20,"tr")(21,"th"),d(22,"Name"),u(),a(23,"th"),d(24,"Position"),u(),a(25,"th"),d(26,"Department"),u(),a(27,"th"),d(28,"Actions"),u()()(),a(29,"tbody"),Ae(30,Qt,12,3,"tr",9),u()()()),n&2&&(f(7),O("ngModel",r.currentEmployee.name),f(4),O("ngModel",r.currentEmployee.position),f(4),O("ngModel",r.currentEmployee.department),f(2),A(r.isEditing?"Update":"Add"),f(13),Fe("ngForOf",r.employees))},dependencies:[ct,dt,L,nt,rt,fe,he,ce,ke,Pe],styles:["h1[_ngcontent-%COMP%]{color:#013941;text-align:center;margin:1rem;padding:2rem}form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:20px}form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex:1;min-width:200px;display:flex;flex-direction:column}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:600;margin-bottom:5px;font-size:1rem;color:#013941}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:10px;border:1px solid #9c9c9c;border-radius:5px;font-size:1rem;background-color:#fff;transition:border-color .3s ease}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover{background-color:#f7f7f7}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#013941;outline:none}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:28px 0 5px;padding:10px 15px;background-color:#013941;color:#fff;border:none;border-radius:5px;cursor:pointer;font-size:1rem;font-weight:600;transition:background-color .3s ease}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#021931be}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-top:20px;background-color:#ffffffbe;border-radius:8px;overflow:hidden;box-shadow:0 4px 6px #0000001a}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:1px solid #f0e9e9;padding:12px;margin:20px;text-align:left}th[_ngcontent-%COMP%]{background-color:#013941;color:#fff;font-weight:200}tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background-color:#fafafa}.b1[_ngcontent-%COMP%]{color:#fff;background-color:#013941;padding:0 20px;margin-left:5px;border-radius:5px;margin-right:10px}.b1[_ngcontent-%COMP%]:hover{background-color:#013841d5}@media (max-width: 768px){form[_ngcontent-%COMP%]{flex-direction:column}}"]})}}return i})();var pt=(()=>{class i{constructor(){this.title="crud-table-app"}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=N({type:i,selectors:[["app-root"]],standalone:!0,features:[k],decls:1,vars:0,template:function(n,r){n&1&&we(0,"app-crud-table")},dependencies:[ft]})}}return i})();var mt=[];var ei="@",ti=(()=>{class i{constructor(t,n,r,o,s){this.doc=t,this.delegate=n,this.zone=r,this.animationType=o,this.moduleImpl=s,this._rendererFactoryPromise=null,this.scheduler=z(Ve,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-EJ27DNWX.mjs")).catch(n=>{throw new y(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:r})=>{this._engine=n(this.animationType,this.doc,this.scheduler);let o=new r(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(t,n){let r=this.delegate.createRenderer(t,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new pe(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let $=s.createRenderer(t,n);o.use($)}).catch(s=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(n){Ce()}}static{this.\u0275prov=D({token:i,factory:i.\u0275fac})}}return i})(),pe=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,n,r){this.delegate.insertBefore(e,t,n,r)}removeChild(e,t,n){this.delegate.removeChild(e,t,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,r){this.delegate.setAttribute(e,t,n,r)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,r){this.delegate.setStyle(e,t,n,r)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,n)),this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(e,t,n)),this.delegate.listen(e,t,n)}shouldReplay(e){return this.replay!==null&&e.startsWith(ei)}};function gt(i="animations"){return be("NgAsyncAnimations"),_e([{provide:De,useFactory:(e,t,n)=>new ti(e,t,n,i),deps:[xe,Te,Me]},{provide:ve,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var yt={providers:[Be(mt),Re(),gt()]};var ii={providers:[je()]},_t=Oe(yt,ii);var ni=()=>Ge(pt,_t),Xi=ni;export{Xi as a};
