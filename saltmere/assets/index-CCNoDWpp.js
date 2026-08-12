(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _o="171",Dh=0,qo=1,Ih=2,pl=1,Lh=2,Nn=3,ii=0,He=1,gn=2,ei=0,$i=1,Yo=2,Zo=3,$o=4,Uh=5,_i=100,Nh=101,Fh=102,Oh=103,kh=104,Bh=200,zh=201,Hh=202,Vh=203,Ta=204,Aa=205,Gh=206,Wh=207,Xh=208,qh=209,Yh=210,Zh=211,$h=212,Kh=213,jh=214,Ra=0,Ca=1,Pa=2,Qi=3,Da=4,Ia=5,La=6,Ua=7,ml=0,Jh=1,Qh=2,ni=0,td=1,ed=2,nd=3,gl=4,id=5,sd=6,rd=7,_l=300,ts=301,es=302,Na=303,Fa=304,Er=306,wi=1e3,yi=1001,Oa=1002,xn=1003,ad=1004,Us=1005,Xe=1006,Nr=1007,Mi=1008,Vn=1009,xl=1010,vl=1011,Ss=1012,xo=1013,bi=1014,kn=1015,bs=1016,vo=1017,yo=1018,ns=1020,yl=35902,Ml=1021,Sl=1022,an=1023,wl=1024,bl=1025,Ki=1026,is=1027,El=1028,Mo=1029,Tl=1030,So=1031,wo=1033,hr=33776,dr=33777,ur=33778,fr=33779,ka=35840,Ba=35841,za=35842,Ha=35843,Va=36196,Ga=37492,Wa=37496,Xa=37808,qa=37809,Ya=37810,Za=37811,$a=37812,Ka=37813,ja=37814,Ja=37815,Qa=37816,to=37817,eo=37818,no=37819,io=37820,so=37821,pr=36492,ro=36494,ao=36495,Al=36283,oo=36284,co=36285,lo=36286,od=3200,cd=3201,Rl=0,ld=1,Jn="",Ee="srgb",ss="srgb-linear",vr="linear",re="srgb",Ti=7680,Ko=519,hd=512,dd=513,ud=514,Cl=515,fd=516,pd=517,md=518,gd=519,jo=35044,Jo="300 es",Bn=2e3,yr=2001;class os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fr=Math.PI/180,Mr=180/Math.PI;function Es(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Xt(i,t,e){return Math.max(t,Math.min(e,i))}function _d(i,t){return(i%t+t)%t}function Or(i,t,e){return(1-e)*i+e*t}function us(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,s,r,a,o,c,l){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],S=s[1],b=s[4],M=s[7],D=s[2],A=s[5],T=s[8];return r[0]=a*_+o*S+c*D,r[3]=a*m+o*b+c*A,r[6]=a*f+o*M+c*T,r[1]=l*_+h*S+d*D,r[4]=l*m+h*b+d*A,r[7]=l*f+h*M+d*T,r[2]=u*_+p*S+g*D,r[5]=u*m+p*b+g*A,r[8]=u*f+p*M+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,p=l*r-a*c,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=u*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(kr.makeScale(t,e)),this}rotate(t){return this.premultiply(kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new Ut;function Pl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xd(){const i=ws("canvas");return i.style.display="block",i}const Qo={};function Gi(i){i in Qo||(Qo[i]=!0,console.warn(i))}function vd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function yd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Md(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const tc=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ec=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sd(){const i={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===re&&(s.r=zn(s.r),s.g=zn(s.g),s.b=zn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?vr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ss]:{primaries:t,whitePoint:n,transfer:vr,toXYZ:tc,fromXYZ:ec,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:t,whitePoint:n,transfer:re,toXYZ:tc,fromXYZ:ec,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),i}const ee=Sd();function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ai;class wd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ai===void 0&&(Ai=ws("canvas")),Ai.width=t.width,Ai.height=t.height;const n=Ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ws("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zn(e[n]/255)*255):e[n]=zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bd=0;class Dl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Es(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Br(s[a].image)):r.push(Br(s[a]))}else r=Br(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ed=0;class Oe extends os{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=yi,s=yi,r=Xe,a=Mi,o=an,c=Vn,l=Oe.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Es(),this.name="",this.source=new Dl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_l)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wi:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case Oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wi:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case Oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=_l;Oe.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,M=(p+1)/2,D=(f+1)/2,A=(h+u)/4,T=(d+_)/4,C=(g+m)/4;return b>M&&b>D?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=T/n):M>D?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=C/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=T/r,s=C/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-_)/S,this.z=(u-h)/S,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Td extends os{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Dl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends Td{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Il extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ad extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ts{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const u=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==u||l!==p||h!==g){let m=1-o;const f=c*u+l*p+h*g+d*_,S=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const D=Math.sqrt(b),A=Math.atan2(D,f*S);m=Math.sin(m*A)/D,o=Math.sin(o*A)/D}const M=o*S;if(c=c*m+u*M,l=l*m+p*M,h=h*m+g*M,d=d*m+_*M,m===1-o){const D=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=D,l*=D,h*=D,d*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*p-l*u,t[e+1]=c*g+h*u+l*d-o*p,t[e+2]=l*g+h*p+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zr.copy(this).projectOnVector(t),this.sub(zr)}reflect(t){return this.sub(zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zr=new I,nc=new Ts;class As{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),Fs.subVectors(this.max,fs),Ri.subVectors(t.a,fs),Ci.subVectors(t.b,fs),Pi.subVectors(t.c,fs),Xn.subVectors(Ci,Ri),qn.subVectors(Pi,Ci),ci.subVectors(Ri,Pi);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-ci.z,ci.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,ci.z,0,-ci.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-ci.y,ci.x,0];return!Hr(e,Ri,Ci,Pi,Fs)||(e=[1,0,0,0,1,0,0,0,1],!Hr(e,Ri,Ci,Pi,Fs))?!1:(Os.crossVectors(Xn,qn),e=[Os.x,Os.y,Os.z],Hr(e,Ri,Ci,Pi,Fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pn=[new I,new I,new I,new I,new I,new I,new I,new I],dn=new I,Ns=new As,Ri=new I,Ci=new I,Pi=new I,Xn=new I,qn=new I,ci=new I,fs=new I,Fs=new I,Os=new I,li=new I;function Hr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){li.fromArray(i,r);const o=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),c=t.dot(li),l=e.dot(li),h=n.dot(li);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Rd=new As,ps=new I,Vr=new I;class Tr{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);const e=ps.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(Vr)),this.expandByPoint(ps.copy(t.center).sub(Vr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new I,Gr=new I,ks=new I,Yn=new I,Wr=new I,Bs=new I,Xr=new I;class Ll{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Gr.copy(t).add(e).multiplyScalar(.5),ks.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(Gr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ks),o=Yn.dot(this.direction),c=-Yn.dot(ks),l=Yn.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Gr).addScaledVector(ks,u),p}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,s,r){Wr.subVectors(e,t),Bs.subVectors(n,t),Xr.crossVectors(Wr,Bs);let a=this.direction.dot(Xr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,t);const c=o*this.direction.dot(Bs.crossVectors(Yn,Bs));if(c<0)return null;const l=o*this.direction.dot(Wr.cross(Yn));if(l<0||c+l>a)return null;const h=-o*Yn.dot(Xr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,s,r,a,o,c,l,h,d,u,p,g,_,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,u,p,g,_,m)}set(t,e,n,s,r,a,o,c,l,h,d,u,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),a=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,p=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=u-_*l,e[9]=-o*c,e[2]=_-u*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,p=c*d,g=l*h,_=l*d;e[0]=u+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,p=c*d,g=l*h,_=l*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,p=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cd,t,Pd)}lookAt(t,e,n){const s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Zn.crossVectors(n,Je),Zn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Zn.crossVectors(n,Je)),Zn.normalize(),zs.crossVectors(Je,Zn),s[0]=Zn.x,s[4]=zs.x,s[8]=Je.x,s[1]=Zn.y,s[5]=zs.y,s[9]=Je.y,s[2]=Zn.z,s[6]=zs.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],S=n[3],b=n[7],M=n[11],D=n[15],A=s[0],T=s[4],C=s[8],w=s[12],v=s[1],R=s[5],z=s[9],k=s[13],G=s[2],Y=s[6],W=s[10],j=s[14],H=s[3],rt=s[7],ut=s[11],vt=s[15];return r[0]=a*A+o*v+c*G+l*H,r[4]=a*T+o*R+c*Y+l*rt,r[8]=a*C+o*z+c*W+l*ut,r[12]=a*w+o*k+c*j+l*vt,r[1]=h*A+d*v+u*G+p*H,r[5]=h*T+d*R+u*Y+p*rt,r[9]=h*C+d*z+u*W+p*ut,r[13]=h*w+d*k+u*j+p*vt,r[2]=g*A+_*v+m*G+f*H,r[6]=g*T+_*R+m*Y+f*rt,r[10]=g*C+_*z+m*W+f*ut,r[14]=g*w+_*k+m*j+f*vt,r[3]=S*A+b*v+M*G+D*H,r[7]=S*T+b*R+M*Y+D*rt,r[11]=S*C+b*z+M*W+D*ut,r[15]=S*w+b*k+M*j+D*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*d-s*l*d-r*o*u+n*l*u+s*o*p-n*c*p)+_*(+e*c*p-e*l*u+r*a*u-s*a*p+s*l*h-r*c*h)+m*(+e*l*d-e*o*p-r*a*d+n*a*p+r*o*h-n*l*h)+f*(-s*o*h-e*c*d+e*o*u+s*a*d-n*a*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],S=d*m*l-_*u*l+_*c*p-o*m*p-d*c*f+o*u*f,b=g*u*l-h*m*l-g*c*p+a*m*p+h*c*f-a*u*f,M=h*_*l-g*d*l+g*o*p-a*_*p-h*o*f+a*d*f,D=g*d*c-h*_*c-g*o*u+a*_*u+h*o*m-a*d*m,A=e*S+n*b+s*M+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=S*T,t[1]=(_*u*r-d*m*r-_*s*p+n*m*p+d*s*f-n*u*f)*T,t[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*f+n*c*f)*T,t[3]=(d*c*r-o*u*r-d*s*l+n*u*l+o*s*p-n*c*p)*T,t[4]=b*T,t[5]=(h*m*r-g*u*r+g*s*p-e*m*p-h*s*f+e*u*f)*T,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*f-e*c*f)*T,t[7]=(a*u*r-h*c*r+h*s*l-e*u*l-a*s*p+e*c*p)*T,t[8]=M*T,t[9]=(g*d*r-h*_*r-g*n*p+e*_*p+h*n*f-e*d*f)*T,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*f+e*o*f)*T,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*p-e*o*p)*T,t[12]=D*T,t[13]=(h*_*s-g*d*s+g*n*u-e*_*u-h*n*m+e*d*m)*T,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*m-e*o*m)*T,t[15]=(a*d*s-h*o*s+h*n*c-e*d*c-a*n*u+e*o*u)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,p=r*h,g=r*d,_=a*h,m=a*d,f=o*d,S=c*l,b=c*h,M=c*d,D=n.x,A=n.y,T=n.z;return s[0]=(1-(_+f))*D,s[1]=(p+M)*D,s[2]=(g-b)*D,s[3]=0,s[4]=(p-M)*A,s[5]=(1-(u+f))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(g+b)*T,s[9]=(m-S)*T,s[10]=(1-(u+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Di.set(s[0],s[1],s[2]).length();const a=Di.set(s[4],s[5],s[6]).length(),o=Di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);const l=1/r,h=1/a,d=1/o;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,e.setFromRotationMatrix(un),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Bn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let p,g;if(o===Bn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===yr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Bn){const c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(a-r),u=(e+t)*l,p=(n+s)*h;let g,_;if(o===Bn)g=(a+r)*d,_=-2*d;else if(o===yr)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new I,un=new fe,Cd=new I(0,0,0),Pd=new I(1,1,1),Zn=new I,zs=new I,Je=new I,ic=new fe,sc=new Ts;class En{constructor(t=0,e=0,n=0,s=En.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ic.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ic,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sc.setFromEuler(this),this.setFromQuaternion(sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class Ul{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Dd=0;const rc=new I,Ii=new Ts,In=new fe,Hs=new I,ms=new I,Id=new I,Ld=new Ts,ac=new I(1,0,0),oc=new I(0,1,0),cc=new I(0,0,1),lc={type:"added"},Ud={type:"removed"},Li={type:"childadded",child:null},qr={type:"childremoved",child:null};class be extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new I,e=new En,n=new Ts,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Ut}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(ac,t)}rotateY(t){return this.rotateOnAxis(oc,t)}rotateZ(t){return this.rotateOnAxis(cc,t)}translateOnAxis(t,e){return rc.copy(t).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ac,t)}translateY(t){return this.translateOnAxis(oc,t)}translateZ(t){return this.translateOnAxis(cc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hs.copy(t):Hs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(ms,Hs,this.up):In.lookAt(Hs,ms,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(In),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lc),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ud),qr.child=t,this.dispatchEvent(qr),qr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lc),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,Id),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Ld,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}be.DEFAULT_UP=new I(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new I,Ln=new I,Yr=new I,Un=new I,Ui=new I,Ni=new I,hc=new I,Zr=new I,$r=new I,Kr=new I,jr=new ae,Jr=new ae,Qr=new ae;class _n{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),fn.subVectors(t,e),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){fn.subVectors(s,e),Ln.subVectors(n,e),Yr.subVectors(t,e);const a=fn.dot(fn),o=fn.dot(Ln),c=fn.dot(Yr),l=Ln.dot(Ln),h=Ln.dot(Yr),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Un.x),c.addScaledVector(a,Un.y),c.addScaledVector(o,Un.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return jr.setScalar(0),Jr.setScalar(0),Qr.setScalar(0),jr.fromBufferAttribute(t,e),Jr.fromBufferAttribute(t,n),Qr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(jr,r.x),a.addScaledVector(Jr,r.y),a.addScaledVector(Qr,r.z),a}static isFrontFacing(t,e,n,s){return fn.subVectors(n,e),Ln.subVectors(t,e),fn.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),fn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return _n.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ui.subVectors(s,n),Ni.subVectors(r,n),Zr.subVectors(t,n);const c=Ui.dot(Zr),l=Ni.dot(Zr);if(c<=0&&l<=0)return e.copy(n);$r.subVectors(t,s);const h=Ui.dot($r),d=Ni.dot($r);if(h>=0&&d<=h)return e.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ui,a);Kr.subVectors(t,r);const p=Ui.dot(Kr),g=Ni.dot(Kr);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Ni,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return hc.subVectors(r,s),o=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(hc,o);const f=1/(m+_+u);return a=_*f,o=u*f,e.copy(n).addScaledVector(Ui,a).addScaledVector(Ni,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function ta(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=_d(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ta(a,r,t+1/3),this.g=ta(a,r,t),this.b=ta(a,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const n=Nl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return ee.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Xt(Ue.r*255,0,255))*65536+Math.round(Xt(Ue.g*255,0,255))*256+Math.round(Xt(Ue.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,s=Ue.g,r=Ue.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Ee){ee.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,s=Ue.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(Vs);const n=Or($n.h,Vs.h,e),s=Or($n.s,Vs.s,e),r=Or($n.l,Vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new kt;kt.NAMES=Nl;let Nd=0;class cs extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=$i,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=Aa,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ko,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==Aa&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ko&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rs extends cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new I,Gs=new Bt;class vn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jo,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gs.fromBufferAttribute(this,e),Gs.applyMatrix3(t),this.setXY(e,Gs.x,Gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=us(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=us(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=us(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=us(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jo&&(t.usage=this.usage),t}}class Fl extends vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ol extends vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends vn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Fd=0;const rn=new fe,ea=new be,Fi=new I,Qe=new As,gs=new As,Re=new I;class cn extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pl(t)?Ol:Fl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return ea.lookAt(t),ea.updateMatrix(),this.applyMatrix4(ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ce(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(Qe.min,gs.min),Qe.expandByPoint(Re),Re.addVectors(Qe.max,gs.max),Qe.expandByPoint(Re)):(Qe.expandByPoint(gs.min),Qe.expandByPoint(gs.max))}Qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Re.fromBufferAttribute(o,l),c&&(Fi.fromBufferAttribute(t,l),Re.add(Fi)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new I,c[C]=new I;const l=new I,h=new I,d=new I,u=new Bt,p=new Bt,g=new Bt,_=new I,m=new I;function f(C,w,v){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,v),u.fromBufferAttribute(r,C),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,v),h.sub(l),d.sub(l),p.sub(u),g.sub(u);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),o[C].add(_),o[w].add(_),o[v].add(_),c[C].add(m),c[w].add(m),c[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let C=0,w=S.length;C<w;++C){const v=S[C],R=v.start,z=v.count;for(let k=R,G=R+z;k<G;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const b=new I,M=new I,D=new I,A=new I;function T(C){D.fromBufferAttribute(s,C),A.copy(D);const w=o[C];b.copy(w),b.sub(D.multiplyScalar(D.dot(w))).normalize(),M.crossVectors(A,w);const R=M.dot(c[C])<0?-1:1;a.setXYZW(C,b.x,b.y,b.z,R)}for(let C=0,w=S.length;C<w;++C){const v=S[C],R=v.start,z=v.count;for(let k=R,G=R+z;k<G;k+=3)T(t.getX(k+0)),T(t.getX(k+1)),T(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,d=new I;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new vn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new cn,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dc=new fe,hi=new Ll,Ws=new Tr,uc=new I,Xs=new I,qs=new I,Ys=new I,na=new I,Zs=new I,fc=new I,$s=new I;class Pt extends be{constructor(t=new cn,e=new Rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Zs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(na.fromBufferAttribute(d,t),a?Zs.addScaledVector(na,h):Zs.addScaledVector(na.sub(e),h))}e.add(Zs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),hi.copy(t.ray).recast(t.near),!(Ws.containsPoint(hi.origin)===!1&&(hi.intersectSphere(Ws,uc)===null||hi.origin.distanceToSquared(uc)>(t.far-t.near)**2))&&(dc.copy(r).invert(),hi.copy(t.ray).applyMatrix4(dc),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,D=b;M<D;M+=3){const A=o.getX(M),T=o.getX(M+1),C=o.getX(M+2);s=Ks(this,f,t,n,l,h,d,A,T,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const S=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);s=Ks(this,a,t,n,l,h,d,S,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,D=b;M<D;M+=3){const A=M,T=M+1,C=M+2;s=Ks(this,f,t,n,l,h,d,A,T,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const S=m,b=m+1,M=m+2;s=Ks(this,a,t,n,l,h,d,S,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Od(i,t,e,n,s,r,a,o){let c;if(t.side===He?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===ii,o),c===null)return null;$s.copy(o),$s.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo($s);return l<e.near||l>e.far?null:{distance:l,point:$s.clone(),object:i}}function Ks(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Xs),i.getVertexPosition(c,qs),i.getVertexPosition(l,Ys);const h=Od(i,t,e,n,Xs,qs,Ys,fc);if(h){const d=new I;_n.getBarycoord(fc,Xs,qs,Ys,d),s&&(h.uv=_n.getInterpolatedAttribute(s,o,c,l,d,new Bt)),r&&(h.uv1=_n.getInterpolatedAttribute(r,o,c,l,d,new Bt)),a&&(h.normal=_n.getInterpolatedAttribute(a,o,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new I,materialIndex:0};_n.getNormal(Xs,qs,Ys,u.normal),h.face=u,h.barycoord=d}return h}class $e extends cn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(d,2));function g(_,m,f,S,b,M,D,A,T,C,w){const v=M/T,R=D/C,z=M/2,k=D/2,G=A/2,Y=T+1,W=C+1;let j=0,H=0;const rt=new I;for(let ut=0;ut<W;ut++){const vt=ut*R-k;for(let Ht=0;Ht<Y;Ht++){const oe=Ht*v-z;rt[_]=oe*S,rt[m]=vt*b,rt[f]=G,l.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[f]=A>0?1:-1,h.push(rt.x,rt.y,rt.z),d.push(Ht/T),d.push(1-ut/C),j+=1}}for(let ut=0;ut<C;ut++)for(let vt=0;vt<T;vt++){const Ht=u+vt+Y*ut,oe=u+vt+Y*(ut+1),q=u+(vt+1)+Y*(ut+1),et=u+(vt+1)+Y*ut;c.push(Ht,oe,et),c.push(oe,q,et),H+=6}o.addGroup(p,H,w),p+=H,u+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function rs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ze(i){const t={};for(let e=0;e<i.length;e++){const n=rs(i[e]);for(const s in n)t[s]=n[s]}return t}function kd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Bd={clone:rs,merge:ze};var zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zd,this.fragmentShader=Hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=kd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Bl extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new I,pc=new Bt,mc=new Bt;class We extends Bl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,pc,mc),e.subVectors(mc,pc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Oi=-90,ki=1;class Vd extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new We(Oi,ki,t,e);s.layers=this.layers,this.add(s);const r=new We(Oi,ki,t,e);r.layers=this.layers,this.add(r);const a=new We(Oi,ki,t,e);a.layers=this.layers,this.add(a);const o=new We(Oi,ki,t,e);o.layers=this.layers,this.add(o);const c=new We(Oi,ki,t,e);c.layers=this.layers,this.add(c);const l=new We(Oi,ki,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zl extends Oe{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ts,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gd extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new zl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $e(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:ei});r.uniforms.tEquirect.value=e;const a=new Pt(s,r),o=e.minFilter;return e.minFilter===Mi&&(e.minFilter=Xe),new Vd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class bo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new bo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Hl extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ia=new I,Wd=new I,Xd=new Ut;class mi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ia.subVectors(n,e).cross(Wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ia),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Xd.getNormalMatrix(t),s=this.coplanarPoint(ia).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Tr,js=new I;class Eo{constructor(t=new mi,e=new mi,n=new mi,s=new mi,r=new mi,a=new mi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],S=s[13],b=s[14],M=s[15];if(n[0].setComponents(c-r,u-l,m-p,M-f).normalize(),n[1].setComponents(c+r,u+l,m+p,M+f).normalize(),n[2].setComponents(c+a,u+h,m+g,M+S).normalize(),n[3].setComponents(c-a,u-h,m-g,M-S).normalize(),n[4].setComponents(c-o,u-d,m-_,M-b).normalize(),e===Bn)n[5].setComponents(c+o,u+d,m+_,M+b).normalize();else if(e===yr)n[5].setComponents(o,d,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(js.x=s.normal.x>0?t.max.x:t.min.x,js.y=s.normal.y>0?t.max.y:t.min.y,js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vl extends cs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Sr=new I,wr=new I,gc=new fe,_s=new Ll,Js=new Tr,sa=new I,_c=new I;class qd extends be{constructor(t=new cn,e=new Vl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Sr.fromBufferAttribute(e,s-1),wr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Sr.distanceTo(wr);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(s),Js.radius+=r,t.ray.intersectsSphere(Js)===!1)return;gc.copy(s).invert(),_s.copy(t.ray).applyMatrix4(gc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const f=h.getX(_),S=h.getX(_+1),b=Qs(this,t,_s,c,f,S);b&&e.push(b)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=Qs(this,t,_s,c,_,m);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const f=Qs(this,t,_s,c,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=Qs(this,t,_s,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Qs(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Sr.fromBufferAttribute(a,s),wr.fromBufferAttribute(a,r),e.distanceSqToSegment(Sr,wr,sa,_c)>n)return;sa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(sa);if(!(c<t.near||c>t.far))return{distance:c,point:_c.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const xc=new I,vc=new I;class Yd extends qd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)xc.fromBufferAttribute(e,s),vc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xc.distanceTo(vc);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qt extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ls extends Oe{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gl extends Oe{constructor(t,e,n,s,r,a,o,c,l,h=Ki){if(h!==Ki&&h!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ki&&(n=bi),n===void 0&&h===is&&(n=ns),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:xn,this.minFilter=c!==void 0?c:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Mn extends cn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],p=[];let g=0;const _=[],m=n/2;let f=0;S(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ce(d,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(p,2));function S(){const M=new I,D=new I;let A=0;const T=(e-t)/n;for(let C=0;C<=r;C++){const w=[],v=C/r,R=v*(e-t)+t;for(let z=0;z<=s;z++){const k=z/s,G=k*c+o,Y=Math.sin(G),W=Math.cos(G);D.x=R*Y,D.y=-v*n+m,D.z=R*W,d.push(D.x,D.y,D.z),M.set(Y,T,W).normalize(),u.push(M.x,M.y,M.z),p.push(k,1-v),w.push(g++)}_.push(w)}for(let C=0;C<s;C++)for(let w=0;w<r;w++){const v=_[w][C],R=_[w+1][C],z=_[w+1][C+1],k=_[w][C+1];(t>0||w!==0)&&(h.push(v,R,k),A+=3),(e>0||w!==r-1)&&(h.push(R,z,k),A+=3)}l.addGroup(f,A,0),f+=A}function b(M){const D=g,A=new Bt,T=new I;let C=0;const w=M===!0?t:e,v=M===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*v,0),u.push(0,v,0),p.push(.5,.5),g++;const R=g;for(let z=0;z<=s;z++){const G=z/s*c+o,Y=Math.cos(G),W=Math.sin(G);T.x=w*W,T.y=m*v,T.z=w*Y,d.push(T.x,T.y,T.z),u.push(0,v,0),A.x=Y*.5+.5,A.y=W*.5*v+.5,p.push(A.x,A.y),g++}for(let z=0;z<s;z++){const k=D+z,G=R+z;M===!0?h.push(G,G+1,k):h.push(G+1,G,k),C+=3}l.addGroup(f,C,M===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class To extends Mn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new To(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ar extends cn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(r.slice(),3)),this.setAttribute("uv",new Ce(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const b=new I,M=new I,D=new I;for(let A=0;A<e.length;A+=3)p(e[A+0],b),p(e[A+1],M),p(e[A+2],D),c(b,M,D,S)}function c(S,b,M,D){const A=D+1,T=[];for(let C=0;C<=A;C++){T[C]=[];const w=S.clone().lerp(M,C/A),v=b.clone().lerp(M,C/A),R=A-C;for(let z=0;z<=R;z++)z===0&&C===A?T[C][z]=w:T[C][z]=w.clone().lerp(v,z/R)}for(let C=0;C<A;C++)for(let w=0;w<2*(A-C)-1;w++){const v=Math.floor(w/2);w%2===0?(u(T[C][v+1]),u(T[C+1][v]),u(T[C][v])):(u(T[C][v+1]),u(T[C+1][v+1]),u(T[C+1][v]))}}function l(S){const b=new I;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(S),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function h(){const S=new I;for(let b=0;b<r.length;b+=3){S.x=r[b+0],S.y=r[b+1],S.z=r[b+2];const M=m(S)/2/Math.PI+.5,D=f(S)/Math.PI+.5;a.push(M,1-D)}g(),d()}function d(){for(let S=0;S<a.length;S+=6){const b=a[S+0],M=a[S+2],D=a[S+4],A=Math.max(b,M,D),T=Math.min(b,M,D);A>.9&&T<.1&&(b<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),D<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function p(S,b){const M=S*3;b.x=t[M+0],b.y=t[M+1],b.z=t[M+2]}function g(){const S=new I,b=new I,M=new I,D=new I,A=new Bt,T=new Bt,C=new Bt;for(let w=0,v=0;w<r.length;w+=9,v+=6){S.set(r[w+0],r[w+1],r[w+2]),b.set(r[w+3],r[w+4],r[w+5]),M.set(r[w+6],r[w+7],r[w+8]),A.set(a[v+0],a[v+1]),T.set(a[v+2],a[v+3]),C.set(a[v+4],a[v+5]),D.copy(S).add(b).add(M).divideScalar(3);const R=m(D);_(A,v+0,S,R),_(T,v+2,b,R),_(C,v+4,M,R)}}function _(S,b,M,D){D<0&&S.x===1&&(a[b]=S.x-1),M.x===0&&M.z===0&&(a[b]=D/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.vertices,t.indices,t.radius,t.details)}}class Ao extends Ar{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ao(t.radius,t.detail)}}class Ro extends Ar{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ro(t.radius,t.detail)}}class on extends cn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,u=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const S=f*u-a;for(let b=0;b<l;b++){const M=b*d-r;g.push(M,-S,0),_.push(0,0,1),m.push(b/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<o;S++){const b=S+l*f,M=S+l*(f+1),D=S+1+l*(f+1),A=S+1+l*f;p.push(b,M,A),p.push(M,D,A)}this.setIndex(p),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.width,t.height,t.widthSegments,t.heightSegments)}}class Wn extends cn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new I,u=new I,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const S=[],b=f/n;let M=0;f===0&&a===0?M=.5/e:f===n&&c===Math.PI&&(M=-.5/e);for(let D=0;D<=e;D++){const A=D/e;d.x=-t*Math.cos(s+A*r)*Math.sin(a+b*o),d.y=t*Math.cos(a+b*o),d.z=t*Math.sin(s+A*r)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(A+M,1-b),S.push(l++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){const b=h[f][S+1],M=h[f][S],D=h[f+1][S],A=h[f+1][S+1];(f!==0||a>0)&&p.push(b,M,A),(f!==n-1||c<Math.PI)&&p.push(M,D,A)}this.setIndex(p),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Kt extends cs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zd extends cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $d extends cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Kd{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const jd=new Kd;class Co{constructor(t){this.manager=t!==void 0?t:jd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Co.DEFAULT_MATERIAL_NAME="__DEFAULT";class Jd extends Co{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=yc.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=ws("img");function c(){h(),yc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(d){h(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Qd extends Co{constructor(t){super(t)}load(t,e,n,s){const r=new Oe,a=new Jd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Rr extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ra=new fe,Mc=new I,Sc=new I;class Po{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Mc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mc),Sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sc),e.updateMatrixWorld(),ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class tu extends Po{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Mr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class eu extends Rr{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new tu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const wc=new fe,xs=new I,aa=new I;class nu extends Po{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Bt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xs.setFromMatrixPosition(t.matrixWorld),n.position.copy(xs),aa.copy(n.position),aa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(aa),n.updateMatrixWorld(),s.makeTranslation(-xs.x,-xs.y,-xs.z),wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc)}}class Wl extends Rr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new nu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Do extends Bl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class iu extends Po{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mr extends Rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new iu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Xl extends Rr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class su extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}function bc(i,t,e,n){const s=ru(n);switch(e){case Ml:return i*t;case wl:return i*t;case bl:return i*t*2;case El:return i*t/s.components*s.byteLength;case Mo:return i*t/s.components*s.byteLength;case Tl:return i*t*2/s.components*s.byteLength;case So:return i*t*2/s.components*s.byteLength;case Sl:return i*t*3/s.components*s.byteLength;case an:return i*t*4/s.components*s.byteLength;case wo:return i*t*4/s.components*s.byteLength;case hr:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ur:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:case Ha:return Math.max(i,16)*Math.max(t,8)/4;case ka:case za:return Math.max(i,8)*Math.max(t,8)/2;case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case to:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case eo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case so:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pr:case ro:case ao:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Al:case oo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case co:case lo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ru(i){switch(i){case Vn:case xl:return{byteLength:1,components:1};case Ss:case vl:case bs:return{byteLength:2,components:1};case vo:case yo:return{byteLength:2,components:4};case bi:case xo:case kn:return{byteLength:4,components:1};case yl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_o}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_o);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ql(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function au(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var ou=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_u=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Pu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Du=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Iu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ou="gl_FragColor = linearToOutputTexel( gl_FragColor );",ku=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$u=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ku=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ju=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ju=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ef=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,af=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,of=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,df=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ff=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_f=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Df=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,If=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ff=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Of=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ep=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,np=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ap=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ip=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Op=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:ou,alphahash_pars_fragment:cu,alphamap_fragment:lu,alphamap_pars_fragment:hu,alphatest_fragment:du,alphatest_pars_fragment:uu,aomap_fragment:fu,aomap_pars_fragment:pu,batching_pars_vertex:mu,batching_vertex:gu,begin_vertex:_u,beginnormal_vertex:xu,bsdfs:vu,iridescence_fragment:yu,bumpmap_pars_fragment:Mu,clipping_planes_fragment:Su,clipping_planes_pars_fragment:wu,clipping_planes_pars_vertex:bu,clipping_planes_vertex:Eu,color_fragment:Tu,color_pars_fragment:Au,color_pars_vertex:Ru,color_vertex:Cu,common:Pu,cube_uv_reflection_fragment:Du,defaultnormal_vertex:Iu,displacementmap_pars_vertex:Lu,displacementmap_vertex:Uu,emissivemap_fragment:Nu,emissivemap_pars_fragment:Fu,colorspace_fragment:Ou,colorspace_pars_fragment:ku,envmap_fragment:Bu,envmap_common_pars_fragment:zu,envmap_pars_fragment:Hu,envmap_pars_vertex:Vu,envmap_physical_pars_fragment:Qu,envmap_vertex:Gu,fog_vertex:Wu,fog_pars_vertex:Xu,fog_fragment:qu,fog_pars_fragment:Yu,gradientmap_pars_fragment:Zu,lightmap_pars_fragment:$u,lights_lambert_fragment:Ku,lights_lambert_pars_fragment:ju,lights_pars_begin:Ju,lights_toon_fragment:tf,lights_toon_pars_fragment:ef,lights_phong_fragment:nf,lights_phong_pars_fragment:sf,lights_physical_fragment:rf,lights_physical_pars_fragment:af,lights_fragment_begin:of,lights_fragment_maps:cf,lights_fragment_end:lf,logdepthbuf_fragment:hf,logdepthbuf_pars_fragment:df,logdepthbuf_pars_vertex:uf,logdepthbuf_vertex:ff,map_fragment:pf,map_pars_fragment:mf,map_particle_fragment:gf,map_particle_pars_fragment:_f,metalnessmap_fragment:xf,metalnessmap_pars_fragment:vf,morphinstance_vertex:yf,morphcolor_vertex:Mf,morphnormal_vertex:Sf,morphtarget_pars_vertex:wf,morphtarget_vertex:bf,normal_fragment_begin:Ef,normal_fragment_maps:Tf,normal_pars_fragment:Af,normal_pars_vertex:Rf,normal_vertex:Cf,normalmap_pars_fragment:Pf,clearcoat_normal_fragment_begin:Df,clearcoat_normal_fragment_maps:If,clearcoat_pars_fragment:Lf,iridescence_pars_fragment:Uf,opaque_fragment:Nf,packing:Ff,premultiplied_alpha_fragment:Of,project_vertex:kf,dithering_fragment:Bf,dithering_pars_fragment:zf,roughnessmap_fragment:Hf,roughnessmap_pars_fragment:Vf,shadowmap_pars_fragment:Gf,shadowmap_pars_vertex:Wf,shadowmap_vertex:Xf,shadowmask_pars_fragment:qf,skinbase_vertex:Yf,skinning_pars_vertex:Zf,skinning_vertex:$f,skinnormal_vertex:Kf,specularmap_fragment:jf,specularmap_pars_fragment:Jf,tonemapping_fragment:Qf,tonemapping_pars_fragment:tp,transmission_fragment:ep,transmission_pars_fragment:np,uv_pars_fragment:ip,uv_pars_vertex:sp,uv_vertex:rp,worldpos_vertex:ap,background_vert:op,background_frag:cp,backgroundCube_vert:lp,backgroundCube_frag:hp,cube_vert:dp,cube_frag:up,depth_vert:fp,depth_frag:pp,distanceRGBA_vert:mp,distanceRGBA_frag:gp,equirect_vert:_p,equirect_frag:xp,linedashed_vert:vp,linedashed_frag:yp,meshbasic_vert:Mp,meshbasic_frag:Sp,meshlambert_vert:wp,meshlambert_frag:bp,meshmatcap_vert:Ep,meshmatcap_frag:Tp,meshnormal_vert:Ap,meshnormal_frag:Rp,meshphong_vert:Cp,meshphong_frag:Pp,meshphysical_vert:Dp,meshphysical_frag:Ip,meshtoon_vert:Lp,meshtoon_frag:Up,points_vert:Np,points_frag:Fp,shadow_vert:Op,shadow_frag:kp,sprite_vert:Bp,sprite_frag:zp},nt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},wn={basic:{uniforms:ze([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:ze([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:ze([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:ze([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:ze([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:ze([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:ze([nt.points,nt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:ze([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:ze([nt.common,nt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:ze([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:ze([nt.sprite,nt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:ze([nt.common,nt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:ze([nt.lights,nt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};wn.physical={uniforms:ze([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const tr={r:0,b:0,g:0},ui=new En,Hp=new fe;function Vp(i,t,e,n,s,r,a){const o=new kt(0);let c=r===!0?0:1,l,h,d=null,u=0,p=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function _(b){let M=!1;const D=g(b);D===null?f(o,c):D&&D.isColor&&(f(D,1),M=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,M){const D=g(M);D&&(D.isCubeTexture||D.mapping===Er)?(h===void 0&&(h=new Pt(new $e(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:rs(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ui.copy(M.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hp.makeRotationFromEuler(ui)),h.material.toneMapped=ee.getTransfer(D.colorSpace)!==re,(d!==D||u!==D.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=D,u=D.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new Pt(new on(2,2),new Gn({name:"BackgroundMaterial",uniforms:rs(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ee.getTransfer(D.colorSpace)!==re,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||u!==D.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=D,u=D.version,p=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,M){b.getRGB(tr,kl(i)),n.buffers.color.setClear(tr.r,tr.g,tr.b,M,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),c=M,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(o,c)},render:_,addToRenderList:m,dispose:S}}function Gp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(v,R,z,k,G){let Y=!1;const W=d(k,z,R);r!==W&&(r=W,l(r.object)),Y=p(v,k,z,G),Y&&g(v,k,z,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(v,R,z,k),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function d(v,R,z){const k=z.wireframe===!0;let G=n[v.id];G===void 0&&(G={},n[v.id]=G);let Y=G[R.id];Y===void 0&&(Y={},G[R.id]=Y);let W=Y[k];return W===void 0&&(W=u(c()),Y[k]=W),W}function u(v){const R=[],z=[],k=[];for(let G=0;G<e;G++)R[G]=0,z[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:k,object:v,attributes:{},index:null}}function p(v,R,z,k){const G=r.attributes,Y=R.attributes;let W=0;const j=z.getAttributes();for(const H in j)if(j[H].location>=0){const ut=G[H];let vt=Y[H];if(vt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(vt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(vt=v.instanceColor)),ut===void 0||ut.attribute!==vt||vt&&ut.data!==vt.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function g(v,R,z,k){const G={},Y=R.attributes;let W=0;const j=z.getAttributes();for(const H in j)if(j[H].location>=0){let ut=Y[H];ut===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor));const vt={};vt.attribute=ut,ut&&ut.data&&(vt.data=ut.data),G[H]=vt,W++}r.attributes=G,r.attributesNum=W,r.index=k}function _(){const v=r.newAttributes;for(let R=0,z=v.length;R<z;R++)v[R]=0}function m(v){f(v,0)}function f(v,R){const z=r.newAttributes,k=r.enabledAttributes,G=r.attributeDivisors;z[v]=1,k[v]===0&&(i.enableVertexAttribArray(v),k[v]=1),G[v]!==R&&(i.vertexAttribDivisor(v,R),G[v]=R)}function S(){const v=r.newAttributes,R=r.enabledAttributes;for(let z=0,k=R.length;z<k;z++)R[z]!==v[z]&&(i.disableVertexAttribArray(z),R[z]=0)}function b(v,R,z,k,G,Y,W){W===!0?i.vertexAttribIPointer(v,R,z,G,Y):i.vertexAttribPointer(v,R,z,k,G,Y)}function M(v,R,z,k){_();const G=k.attributes,Y=z.getAttributes(),W=R.defaultAttributeValues;for(const j in Y){const H=Y[j];if(H.location>=0){let rt=G[j];if(rt===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor)),rt!==void 0){const ut=rt.normalized,vt=rt.itemSize,Ht=t.get(rt);if(Ht===void 0)continue;const oe=Ht.buffer,q=Ht.type,et=Ht.bytesPerElement,_t=q===i.INT||q===i.UNSIGNED_INT||rt.gpuType===xo;if(rt.isInterleavedBufferAttribute){const at=rt.data,Et=at.stride,Dt=rt.offset;if(at.isInstancedInterleavedBuffer){for(let Vt=0;Vt<H.locationSize;Vt++)f(H.location+Vt,at.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Vt=0;Vt<H.locationSize;Vt++)m(H.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let Vt=0;Vt<H.locationSize;Vt++)b(H.location+Vt,vt/H.locationSize,q,ut,Et*et,(Dt+vt/H.locationSize*Vt)*et,_t)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<H.locationSize;at++)f(H.location+at,rt.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<H.locationSize;at++)m(H.location+at);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let at=0;at<H.locationSize;at++)b(H.location+at,vt/H.locationSize,q,ut,vt*et,vt/H.locationSize*at*et,_t)}}else if(W!==void 0){const ut=W[j];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(H.location,ut);break;case 3:i.vertexAttrib3fv(H.location,ut);break;case 4:i.vertexAttrib4fv(H.location,ut);break;default:i.vertexAttrib1fv(H.location,ut)}}}}S()}function D(){C();for(const v in n){const R=n[v];for(const z in R){const k=R[z];for(const G in k)h(k[G].object),delete k[G];delete R[z]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const z in R){const k=R[z];for(const G in k)h(k[G].object),delete k[G];delete R[z]}delete n[v.id]}function T(v){for(const R in n){const z=n[R];if(z[v.id]===void 0)continue;const k=z[v.id];for(const G in k)h(k[G].object),delete k[G];delete z[v.id]}}function C(){w(),a=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Wp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function c(l,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Xp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==an&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Vn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==kn&&!C)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:D,maxSamples:A}}function qp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new mi,o=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const S=r?0:n,b=S*4;let M=f.clippingState||null;c.value=M,M=h(g,u,b,p);for(let D=0;D!==b;++D)M[D]=e[D];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,M=p;b!==_;++b,M+=4)a.copy(d[b]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Yp(i){let t=new WeakMap;function e(a,o){return o===Na?a.mapping=ts:o===Fa&&(a.mapping=es),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Na||o===Fa)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Gd(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Xi=4,Ec=[.125,.215,.35,.446,.526,.582],xi=20,oa=new Do,Tc=new kt;let ca=null,la=0,ha=0,da=!1;const gi=(1+Math.sqrt(5))/2,Bi=1/gi,Ac=[new I(-gi,Bi,0),new I(gi,Bi,0),new I(-Bi,0,gi),new I(Bi,0,gi),new I(0,gi,-Bi),new I(0,gi,Bi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Rc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ca=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ca,la,ha),this._renderer.xr.enabled=da,t.scissorTest=!1,er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ts||t.mapping===es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ca=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:bs,format:an,colorSpace:ss,depthBuffer:!1},s=Cc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zp(r)),this._blurMaterial=$p(r,t,e)}return s}_compileMaterial(t){const e=new Pt(this._lodPlanes[0],t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,n,s){const o=new We(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Tc),h.toneMapping=ni,h.autoClear=!1;const p=new Rs({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new Pt(new $e,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Tc),_=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):S===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const b=this._cubeSize;er(s,S*b,f>2?b:0,b,b),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ts||t.mapping===es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Pt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;er(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,oa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ac[(s-r-1)%Ac.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Pt(this._lodPlanes[s],l),u=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*xi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):xi;m>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const f=[];let S=0;for(let T=0;T<xi;++T){const C=T/_,w=Math.exp(-C*C/2);f.push(w),T===0?S+=w:T<m&&(S+=2*w)}for(let T=0;T<f.length;T++)f[T]=f[T]/S;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const M=this._sizeLods[s],D=3*M*(s>b-Xi?s-b+Xi:0),A=4*(this._cubeSize-M);er(e,D,A,3*M,2*M),c.setRenderTarget(e),c.render(d,oa)}}function Zp(i){const t=[],e=[],n=[];let s=i;const r=i-Xi+1+Ec.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Xi?c=Ec[a-i+Xi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,S=new Float32Array(_*g*p),b=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,C=A>2?0:-1,w=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];S.set(w,_*g*A),b.set(u,m*g*A);const v=[A,A,A,A,A,A];M.set(v,f*g*A)}const D=new cn;D.setAttribute("position",new vn(S,_)),D.setAttribute("uv",new vn(b,m)),D.setAttribute("faceIndex",new vn(M,f)),t.push(D),s>Xi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cc(i,t,e){const n=new si(i,t,e);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function er(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function $p(i,t,e){const n=new Float32Array(xi),s=new I(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Pc(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Dc(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Io(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Na||c===Fa,h=c===ts||c===es;if(l||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Rc(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Rc(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function jp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Gi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Jp(i,t,e,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const p in u)t.update(u[p],i.ARRAY_BUFFER)}function l(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let b=0,M=S.length;b<M;b+=3){const D=S[b+0],A=S[b+1],T=S[b+2];u.push(D,A,A,T,T,D)}}else if(g!==void 0){const S=g.array;_=g.version;for(let b=0,M=S.length/3-1;b<M;b+=3){const D=b+0,A=b+1,T=b+2;u.push(D,A,A,T,T,D)}}else return;const m=new(Pl(u)?Ol:Fl)(u,1);m.version=_;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Qp(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,p){i.drawElements(n,p,r,u*a),e.update(p,n,1)}function l(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,u*a,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function d(u,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)l(u[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,_,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S]*_[S];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function tm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function em(i,t,e){const n=new WeakMap,s=new ae;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let v=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var p=v;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let D=o.attributes.position.count*M,A=1;D>t.maxTextureSize&&(A=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const T=new Float32Array(D*A*4*d),C=new Il(T,D,A,d);C.type=kn,C.needsUpdate=!0;const w=M*4;for(let R=0;R<d;R++){const z=f[R],k=S[R],G=b[R],Y=D*A*4*R;for(let W=0;W<z.count;W++){const j=W*w;g===!0&&(s.fromBufferAttribute(z,W),T[Y+j+0]=s.x,T[Y+j+1]=s.y,T[Y+j+2]=s.z,T[Y+j+3]=0),_===!0&&(s.fromBufferAttribute(k,W),T[Y+j+4]=s.x,T[Y+j+5]=s.y,T[Y+j+6]=s.z,T[Y+j+7]=0),m===!0&&(s.fromBufferAttribute(G,W),T[Y+j+8]=s.x,T[Y+j+9]=s.y,T[Y+j+10]=s.z,T[Y+j+11]=G.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new Bt(D,A)},n.set(o,u),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function nm(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}const Yl=new Oe,Ic=new Gl(1,1),Zl=new Il,$l=new Ad,Kl=new zl,Lc=[],Uc=[],Nc=new Float32Array(16),Fc=new Float32Array(9),Oc=new Float32Array(4);function hs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Lc[s];if(r===void 0&&(r=new Float32Array(s),Lc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cr(i,t){let e=Uc[t];e===void 0&&(e=new Int32Array(t),Uc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function im(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function om(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Oc.set(n),i.uniformMatrix2fv(this.addr,!1,Oc),Ae(e,n)}}function cm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Fc.set(n),i.uniformMatrix3fv(this.addr,!1,Fc),Ae(e,n)}}function lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Nc.set(n),i.uniformMatrix4fv(this.addr,!1,Nc),Ae(e,n)}}function hm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function pm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function xm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ic.compareFunction=Cl,r=Ic):r=Yl,e.setTexture2D(t||r,s)}function vm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$l,s)}function ym(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Kl,s)}function Mm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zl,s)}function Sm(i){switch(i){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return am;case 35674:return om;case 35675:return cm;case 35676:return lm;case 5124:case 35670:return hm;case 35667:case 35671:return dm;case 35668:case 35672:return um;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Mm}}function wm(i,t){i.uniform1fv(this.addr,t)}function bm(i,t){const e=hs(t,this.size,2);i.uniform2fv(this.addr,e)}function Em(i,t){const e=hs(t,this.size,3);i.uniform3fv(this.addr,e)}function Tm(i,t){const e=hs(t,this.size,4);i.uniform4fv(this.addr,e)}function Am(i,t){const e=hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Rm(i,t){const e=hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Cm(i,t){const e=hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Pm(i,t){i.uniform1iv(this.addr,t)}function Dm(i,t){i.uniform2iv(this.addr,t)}function Im(i,t){i.uniform3iv(this.addr,t)}function Lm(i,t){i.uniform4iv(this.addr,t)}function Um(i,t){i.uniform1uiv(this.addr,t)}function Nm(i,t){i.uniform2uiv(this.addr,t)}function Fm(i,t){i.uniform3uiv(this.addr,t)}function Om(i,t){i.uniform4uiv(this.addr,t)}function km(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Yl,r[a])}function Bm(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||$l,r[a])}function zm(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Kl,r[a])}function Hm(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Zl,r[a])}function Vm(i){switch(i){case 5126:return wm;case 35664:return bm;case 35665:return Em;case 35666:return Tm;case 35674:return Am;case 35675:return Rm;case 35676:return Cm;case 5124:case 35670:return Pm;case 35667:case 35671:return Dm;case 35668:case 35672:return Im;case 35669:case 35673:return Lm;case 5125:return Um;case 36294:return Nm;case 36295:return Fm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return Hm}}class Gm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sm(e.type)}}class Wm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vm(e.type)}}class Xm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function kc(i,t){i.seq.push(t),i.map[t.id]=t}function qm(i,t,e){const n=i.name,s=n.length;for(ua.lastIndex=0;;){const r=ua.exec(n),a=ua.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){kc(e,l===void 0?new Gm(o,i,t):new Wm(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Xm(o),kc(e,d)),e=d}}}class gr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);qm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Bc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ym=37297;let Zm=0;function $m(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const zc=new Ut;function Km(i){ee._getMatrix(zc,ee.workingColorSpace,i);const t=`mat3( ${zc.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case vr:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Hc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+$m(i.getShaderSource(t),a)}else return s}function jm(i,t){const e=Km(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Jm(i,t){let e;switch(t){case td:e="Linear";break;case ed:e="Reinhard";break;case nd:e="Cineon";break;case gl:e="ACESFilmic";break;case sd:e="AgX";break;case rd:e="Neutral";break;case id:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const nr=new I;function Qm(){ee.getLuminanceCoefficients(nr);const i=nr.x.toFixed(4),t=nr.y.toFixed(4),e=nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function e0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function n0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ys(i){return i!==""}function Vc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const i0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(i){return i.replace(i0,r0)}const s0=new Map;function r0(i,t){let e=Ft[t];if(e===void 0){const n=s0.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ho(e)}const a0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wc(i){return i.replace(a0,o0)}function o0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function c0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function l0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ts:case es:t="ENVMAP_TYPE_CUBE";break;case Er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function h0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case es:t="ENVMAP_MODE_REFRACTION";break}return t}function d0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ml:t="ENVMAP_BLENDING_MULTIPLY";break;case Jh:t="ENVMAP_BLENDING_MIX";break;case Qh:t="ENVMAP_BLENDING_ADD";break}return t}function u0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function f0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=c0(e),l=l0(e),h=h0(e),d=d0(e),u=u0(e),p=t0(e),g=e0(r),_=s.createProgram();let m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ys).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ys).join(`
`),f.length>0&&(f+=`
`)):(m=[Xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),f=[Xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?Ft.tonemapping_pars_fragment:"",e.toneMapping!==ni?Jm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,jm("linearToOutputTexel",e.outputColorSpace),Qm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ys).join(`
`)),a=ho(a),a=Vc(a,e),a=Gc(a,e),o=ho(o),o=Vc(o,e),o=Gc(o,e),a=Wc(a),o=Wc(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=S+m+a,M=S+f+o,D=Bc(s,s.VERTEX_SHADER,b),A=Bc(s,s.FRAGMENT_SHADER,M);s.attachShader(_,D),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(R){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(D).trim(),G=s.getShaderInfoLog(A).trim();let Y=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,A);else{const j=Hc(s,D,"vertex"),H=Hc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+j+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||G==="")&&(W=!1);W&&(R.diagnostics={runnable:Y,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:f}})}s.deleteShader(D),s.deleteShader(A),C=new gr(s,_),w=n0(s,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Ym)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=A,this}let p0=0;class m0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new g0(t),e.set(t,n)),n}}class g0{constructor(t){this.id=p0++,this.code=t,this.usedTimes=0}}function _0(i,t,e,n,s,r,a){const o=new Ul,c=new m0,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,v,R,z,k){const G=z.fog,Y=k.geometry,W=w.isMeshStandardMaterial?z.environment:null,j=(w.isMeshStandardMaterial?e:t).get(w.envMap||W),H=j&&j.mapping===Er?j.image.height:null,rt=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const ut=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,vt=ut!==void 0?ut.length:0;let Ht=0;Y.morphAttributes.position!==void 0&&(Ht=1),Y.morphAttributes.normal!==void 0&&(Ht=2),Y.morphAttributes.color!==void 0&&(Ht=3);let oe,q,et,_t;if(rt){const se=wn[rt];oe=se.vertexShader,q=se.fragmentShader}else oe=w.vertexShader,q=w.fragmentShader,c.update(w),et=c.getVertexShaderID(w),_t=c.getFragmentShaderID(w);const at=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Dt=k.isInstancedMesh===!0,Vt=k.isBatchedMesh===!0,pe=!!w.map,jt=!!w.matcap,ye=!!j,P=!!w.aoMap,en=!!w.lightMap,Yt=!!w.bumpMap,Zt=!!w.normalMap,yt=!!w.displacementMap,le=!!w.emissiveMap,Mt=!!w.metalnessMap,E=!!w.roughnessMap,x=w.anisotropy>0,F=w.clearcoat>0,Z=w.dispersion>0,J=w.iridescence>0,X=w.sheen>0,xt=w.transmission>0,ot=x&&!!w.anisotropyMap,ft=F&&!!w.clearcoatMap,Jt=F&&!!w.clearcoatNormalMap,tt=F&&!!w.clearcoatRoughnessMap,pt=J&&!!w.iridescenceMap,bt=J&&!!w.iridescenceThicknessMap,At=X&&!!w.sheenColorMap,mt=X&&!!w.sheenRoughnessMap,$t=!!w.specularMap,Nt=!!w.specularColorMap,ce=!!w.specularIntensityMap,L=xt&&!!w.transmissionMap,it=xt&&!!w.thicknessMap,V=!!w.gradientMap,$=!!w.alphaMap,lt=w.alphaTest>0,ct=!!w.alphaHash,Lt=!!w.extensions;let ge=ni;w.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ge=i.toneMapping);const Ie={shaderID:rt,shaderType:w.type,shaderName:w.name,vertexShader:oe,fragmentShader:q,defines:w.defines,customVertexShaderID:et,customFragmentShaderID:_t,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Vt,batchingColor:Vt&&k._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&k.instanceColor!==null,instancingMorph:Dt&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ss,alphaToCoverage:!!w.alphaToCoverage,map:pe,matcap:jt,envMap:ye,envMapMode:ye&&j.mapping,envMapCubeUVHeight:H,aoMap:P,lightMap:en,bumpMap:Yt,normalMap:Zt,displacementMap:u&&yt,emissiveMap:le,normalMapObjectSpace:Zt&&w.normalMapType===ld,normalMapTangentSpace:Zt&&w.normalMapType===Rl,metalnessMap:Mt,roughnessMap:E,anisotropy:x,anisotropyMap:ot,clearcoat:F,clearcoatMap:ft,clearcoatNormalMap:Jt,clearcoatRoughnessMap:tt,dispersion:Z,iridescence:J,iridescenceMap:pt,iridescenceThicknessMap:bt,sheen:X,sheenColorMap:At,sheenRoughnessMap:mt,specularMap:$t,specularColorMap:Nt,specularIntensityMap:ce,transmission:xt,transmissionMap:L,thicknessMap:it,gradientMap:V,opaque:w.transparent===!1&&w.blending===$i&&w.alphaToCoverage===!1,alphaMap:$,alphaTest:lt,alphaHash:ct,combine:w.combine,mapUv:pe&&_(w.map.channel),aoMapUv:P&&_(w.aoMap.channel),lightMapUv:en&&_(w.lightMap.channel),bumpMapUv:Yt&&_(w.bumpMap.channel),normalMapUv:Zt&&_(w.normalMap.channel),displacementMapUv:yt&&_(w.displacementMap.channel),emissiveMapUv:le&&_(w.emissiveMap.channel),metalnessMapUv:Mt&&_(w.metalnessMap.channel),roughnessMapUv:E&&_(w.roughnessMap.channel),anisotropyMapUv:ot&&_(w.anisotropyMap.channel),clearcoatMapUv:ft&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:At&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(w.sheenRoughnessMap.channel),specularMapUv:$t&&_(w.specularMap.channel),specularColorMapUv:Nt&&_(w.specularColorMap.channel),specularIntensityMapUv:ce&&_(w.specularIntensityMap.channel),transmissionMapUv:L&&_(w.transmissionMap.channel),thicknessMapUv:it&&_(w.thicknessMap.channel),alphaMapUv:$&&_(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Zt||x),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(pe||$),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Et,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Ht,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:pe&&w.map.isVideoTexture===!0&&ee.getTransfer(w.map.colorSpace)===re,decodeVideoTextureEmissive:le&&w.emissiveMap.isVideoTexture===!0&&ee.getTransfer(w.emissiveMap.colorSpace)===re,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===gn,flipSided:w.side===He,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Lt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&w.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function f(w){const v=[];if(w.shaderID?v.push(w.shaderID):(v.push(w.customVertexShaderID),v.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)v.push(R),v.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(S(v,w),b(v,w),v.push(i.outputColorSpace)),v.push(w.customProgramCacheKey),v.join()}function S(w,v){w.push(v.precision),w.push(v.outputColorSpace),w.push(v.envMapMode),w.push(v.envMapCubeUVHeight),w.push(v.mapUv),w.push(v.alphaMapUv),w.push(v.lightMapUv),w.push(v.aoMapUv),w.push(v.bumpMapUv),w.push(v.normalMapUv),w.push(v.displacementMapUv),w.push(v.emissiveMapUv),w.push(v.metalnessMapUv),w.push(v.roughnessMapUv),w.push(v.anisotropyMapUv),w.push(v.clearcoatMapUv),w.push(v.clearcoatNormalMapUv),w.push(v.clearcoatRoughnessMapUv),w.push(v.iridescenceMapUv),w.push(v.iridescenceThicknessMapUv),w.push(v.sheenColorMapUv),w.push(v.sheenRoughnessMapUv),w.push(v.specularMapUv),w.push(v.specularColorMapUv),w.push(v.specularIntensityMapUv),w.push(v.transmissionMapUv),w.push(v.thicknessMapUv),w.push(v.combine),w.push(v.fogExp2),w.push(v.sizeAttenuation),w.push(v.morphTargetsCount),w.push(v.morphAttributeCount),w.push(v.numDirLights),w.push(v.numPointLights),w.push(v.numSpotLights),w.push(v.numSpotLightMaps),w.push(v.numHemiLights),w.push(v.numRectAreaLights),w.push(v.numDirLightShadows),w.push(v.numPointLightShadows),w.push(v.numSpotLightShadows),w.push(v.numSpotLightShadowsWithMaps),w.push(v.numLightProbes),w.push(v.shadowMapType),w.push(v.toneMapping),w.push(v.numClippingPlanes),w.push(v.numClipIntersection),w.push(v.depthPacking)}function b(w,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),w.push(o.mask)}function M(w){const v=g[w.type];let R;if(v){const z=wn[v];R=Bd.clone(z.uniforms)}else R=w.uniforms;return R}function D(w,v){let R;for(let z=0,k=h.length;z<k;z++){const G=h[z];if(G.cacheKey===v){R=G,++R.usedTimes;break}}return R===void 0&&(R=new f0(i,v,w,r),h.push(R)),R}function A(w){if(--w.usedTimes===0){const v=h.indexOf(w);h[v]=h[h.length-1],h.pop(),w.destroy()}}function T(w){c.remove(w)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:D,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:C}}function x0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function v0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function qc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,u,p,g,_,m){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),t++,f}function o(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(d,u){e.length>1&&e.sort(d||v0),n.length>1&&n.sort(u||qc),s.length>1&&s.sort(u||qc)}function h(){for(let d=t,u=i.length;d<u;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function y0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Yc,i.set(n,[a])):s>=r.length?(a=new Yc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function M0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new kt};break;case"SpotLight":e={position:new I,direction:new I,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function S0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let w0=0;function b0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function E0(i){const t=new M0,e=S0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new fe,a=new fe;function o(l){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,S=0,b=0,M=0,D=0,A=0,T=0;l.sort(b0);for(let w=0,v=l.length;w<v;w++){const R=l[w],z=R.color,k=R.intensity,G=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=z.r*k,d+=z.g*k,u+=z.b*k;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],k);T++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=R.shadow.matrix,S++}n.directional[p]=W,p++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(z).multiplyScalar(k),W.distance=G,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[_]=W;const j=R.shadow;if(R.map&&(n.spotLightMap[D]=R.map,D++,j.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=j.matrix,R.castShadow){const H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=Y,M++}_++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(z).multiplyScalar(k),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=W,m++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const j=R.shadow,H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=W,g++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(k),W.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[f]=W,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==S||C.numPointShadows!==b||C.numSpotShadows!==M||C.numSpotMaps!==D||C.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+D-A,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=S,C.numPointShadows=b,C.numSpotShadows=M,C.numSpotMaps=D,C.numLightProbes=T,n.version=w0++)}function c(l,h){let d=0,u=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){const b=l[f];if(b.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(b.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Zc(i){const t=new E0(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function T0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Zc(i),t.set(s,[o])):r>=a.length?(o=new Zc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const A0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function C0(i,t,e){let n=new Eo;const s=new Bt,r=new Bt,a=new ae,o=new Zd({depthPacking:cd}),c=new $d,l={},h=e.maxTextureSize,d={[ii]:He,[He]:ii,[gn]:gn},u=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:A0,fragmentShader:R0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new cn;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pl;let f=this.type;this.render=function(A,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=i.getRenderTarget(),v=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ei),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=f!==Nn&&this.type===Nn,G=f===Nn&&this.type!==Nn;for(let Y=0,W=A.length;Y<W;Y++){const j=A[Y],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const rt=H.getFrameExtents();if(s.multiply(rt),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,H.mapSize.y=r.y)),H.map===null||k===!0||G===!0){const vt=this.type!==Nn?{minFilter:xn,magFilter:xn}:{};H.map!==null&&H.map.dispose(),H.map=new si(s.x,s.y,vt),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ut=H.getViewportCount();for(let vt=0;vt<ut;vt++){const Ht=H.getViewport(vt);a.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),z.viewport(a),H.updateMatrices(j,vt),n=H.getFrustum(),M(T,C,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===Nn&&S(H,C),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(w,v,R)};function S(A,T){const C=t.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new si(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,C,u,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,C,p,_,null)}function b(A,T,C,w){let v=null;const R=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)v=R;else if(v=C.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=v.uuid,k=T.uuid;let G=l[z];G===void 0&&(G={},l[z]=G);let Y=G[k];Y===void 0&&(Y=v.clone(),G[k]=Y,T.addEventListener("dispose",D)),v=Y}if(v.visible=T.visible,v.wireframe=T.wireframe,w===Nn?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:d[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const z=i.properties.get(v);z.light=C}return v}function M(A,T,C,w,v){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Nn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const k=t.update(A),G=A.material;if(Array.isArray(G)){const Y=k.groups;for(let W=0,j=Y.length;W<j;W++){const H=Y[W],rt=G[H.materialIndex];if(rt&&rt.visible){const ut=b(A,rt,w,v);A.onBeforeShadow(i,A,T,C,k,ut,H),i.renderBufferDirect(C,null,k,ut,A,H),A.onAfterShadow(i,A,T,C,k,ut,H)}}}else if(G.visible){const Y=b(A,G,w,v);A.onBeforeShadow(i,A,T,C,k,Y,null),i.renderBufferDirect(C,null,k,Y,A,null),A.onAfterShadow(i,A,T,C,k,Y,null)}}const z=A.children;for(let k=0,G=z.length;k<G;k++)M(z[k],T,C,w,v)}function D(A){A.target.removeEventListener("dispose",D);for(const C in l){const w=l[C],v=A.target.uuid;v in w&&(w[v].dispose(),delete w[v])}}}const P0={[Ra]:Ca,[Pa]:La,[Da]:Ua,[Qi]:Ia,[Ca]:Ra,[La]:Pa,[Ua]:Da,[Ia]:Qi};function D0(i,t){function e(){let L=!1;const it=new ae;let V=null;const $=new ae(0,0,0,0);return{setMask:function(lt){V!==lt&&!L&&(i.colorMask(lt,lt,lt,lt),V=lt)},setLocked:function(lt){L=lt},setClear:function(lt,ct,Lt,ge,Ie){Ie===!0&&(lt*=ge,ct*=ge,Lt*=ge),it.set(lt,ct,Lt,ge),$.equals(it)===!1&&(i.clearColor(lt,ct,Lt,ge),$.copy(it))},reset:function(){L=!1,V=null,$.set(-1,0,0,0)}}}function n(){let L=!1,it=!1,V=null,$=null,lt=null;return{setReversed:function(ct){if(it!==ct){const Lt=t.get("EXT_clip_control");it?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const ge=lt;lt=null,this.setClear(ge)}it=ct},getReversed:function(){return it},setTest:function(ct){ct?at(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(ct){V!==ct&&!L&&(i.depthMask(ct),V=ct)},setFunc:function(ct){if(it&&(ct=P0[ct]),$!==ct){switch(ct){case Ra:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Pa:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case Da:i.depthFunc(i.EQUAL);break;case Ia:i.depthFunc(i.GEQUAL);break;case La:i.depthFunc(i.GREATER);break;case Ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ct}},setLocked:function(ct){L=ct},setClear:function(ct){lt!==ct&&(it&&(ct=1-ct),i.clearDepth(ct),lt=ct)},reset:function(){L=!1,V=null,$=null,lt=null,it=!1}}}function s(){let L=!1,it=null,V=null,$=null,lt=null,ct=null,Lt=null,ge=null,Ie=null;return{setTest:function(se){L||(se?at(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(se){it!==se&&!L&&(i.stencilMask(se),it=se)},setFunc:function(se,ln,Cn){(V!==se||$!==ln||lt!==Cn)&&(i.stencilFunc(se,ln,Cn),V=se,$=ln,lt=Cn)},setOp:function(se,ln,Cn){(ct!==se||Lt!==ln||ge!==Cn)&&(i.stencilOp(se,ln,Cn),ct=se,Lt=ln,ge=Cn)},setLocked:function(se){L=se},setClear:function(se){Ie!==se&&(i.clearStencil(se),Ie=se)},reset:function(){L=!1,it=null,V=null,$=null,lt=null,ct=null,Lt=null,ge=null,Ie=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,S=null,b=null,M=null,D=null,A=null,T=new kt(0,0,0),C=0,w=!1,v=null,R=null,z=null,k=null,G=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=j>=2);let rt=null,ut={};const vt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),oe=new ae().fromArray(vt),q=new ae().fromArray(Ht);function et(L,it,V,$){const lt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(L,ct),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<V;Lt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(it+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ct}const _t={};_t[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(Qi),Yt(!1),Zt(qo),at(i.CULL_FACE),P(ei);function at(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Et(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Dt(L,it){return d[L]!==it?(i.bindFramebuffer(L,it),d[L]=it,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=it),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Vt(L,it){let V=p,$=!1;if(L){V=u.get(it),V===void 0&&(V=[],u.set(it,V));const lt=L.textures;if(V.length!==lt.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Lt=lt.length;ct<Lt;ct++)V[ct]=i.COLOR_ATTACHMENT0+ct;V.length=lt.length,$=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,$=!0);$&&i.drawBuffers(V)}function pe(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const jt={[_i]:i.FUNC_ADD,[Nh]:i.FUNC_SUBTRACT,[Fh]:i.FUNC_REVERSE_SUBTRACT};jt[Oh]=i.MIN,jt[kh]=i.MAX;const ye={[Bh]:i.ZERO,[zh]:i.ONE,[Hh]:i.SRC_COLOR,[Ta]:i.SRC_ALPHA,[Yh]:i.SRC_ALPHA_SATURATE,[Xh]:i.DST_COLOR,[Gh]:i.DST_ALPHA,[Vh]:i.ONE_MINUS_SRC_COLOR,[Aa]:i.ONE_MINUS_SRC_ALPHA,[qh]:i.ONE_MINUS_DST_COLOR,[Wh]:i.ONE_MINUS_DST_ALPHA,[Zh]:i.CONSTANT_COLOR,[$h]:i.ONE_MINUS_CONSTANT_COLOR,[Kh]:i.CONSTANT_ALPHA,[jh]:i.ONE_MINUS_CONSTANT_ALPHA};function P(L,it,V,$,lt,ct,Lt,ge,Ie,se){if(L===ei){_===!0&&(Et(i.BLEND),_=!1);return}if(_===!1&&(at(i.BLEND),_=!0),L!==Uh){if(L!==m||se!==w){if((f!==_i||M!==_i)&&(i.blendEquation(i.FUNC_ADD),f=_i,M=_i),se)switch(L){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yo:i.blendFunc(i.ONE,i.ONE);break;case Zo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $o:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $o:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,b=null,D=null,A=null,T.set(0,0,0),C=0,m=L,w=se}return}lt=lt||it,ct=ct||V,Lt=Lt||$,(it!==f||lt!==M)&&(i.blendEquationSeparate(jt[it],jt[lt]),f=it,M=lt),(V!==S||$!==b||ct!==D||Lt!==A)&&(i.blendFuncSeparate(ye[V],ye[$],ye[ct],ye[Lt]),S=V,b=$,D=ct,A=Lt),(ge.equals(T)===!1||Ie!==C)&&(i.blendColor(ge.r,ge.g,ge.b,Ie),T.copy(ge),C=Ie),m=L,w=!1}function en(L,it){L.side===gn?Et(i.CULL_FACE):at(i.CULL_FACE);let V=L.side===He;it&&(V=!V),Yt(V),L.blending===$i&&L.transparent===!1?P(ei):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const $=L.stencilWrite;o.setTest($),$&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),le(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(L){v!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),v=L)}function Zt(L){L!==Dh?(at(i.CULL_FACE),L!==R&&(L===qo?i.cullFace(i.BACK):L===Ih?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),R=L}function yt(L){L!==z&&(W&&i.lineWidth(L),z=L)}function le(L,it,V){L?(at(i.POLYGON_OFFSET_FILL),(k!==it||G!==V)&&(i.polygonOffset(it,V),k=it,G=V)):Et(i.POLYGON_OFFSET_FILL)}function Mt(L){L?at(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function E(L){L===void 0&&(L=i.TEXTURE0+Y-1),rt!==L&&(i.activeTexture(L),rt=L)}function x(L,it,V){V===void 0&&(rt===null?V=i.TEXTURE0+Y-1:V=rt);let $=ut[V];$===void 0&&($={type:void 0,texture:void 0},ut[V]=$),($.type!==L||$.texture!==it)&&(rt!==V&&(i.activeTexture(V),rt=V),i.bindTexture(L,it||_t[L]),$.type=L,$.texture=it)}function F(){const L=ut[rt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(L){oe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),oe.copy(L))}function mt(L){q.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function $t(L,it){let V=l.get(it);V===void 0&&(V=new WeakMap,l.set(it,V));let $=V.get(L);$===void 0&&($=i.getUniformBlockIndex(it,L.name),V.set(L,$))}function Nt(L,it){const $=l.get(it).get(L);c.get(it)!==$&&(i.uniformBlockBinding(it,$,L.__bindingPointIndex),c.set(it,$))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},rt=null,ut={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,S=null,b=null,M=null,D=null,A=null,T=new kt(0,0,0),C=0,w=!1,v=null,R=null,z=null,k=null,G=null,oe.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Et,bindFramebuffer:Dt,drawBuffers:Vt,useProgram:pe,setBlending:P,setMaterial:en,setFlipSided:Yt,setCullFace:Zt,setLineWidth:yt,setPolygonOffset:le,setScissorTest:Mt,activeTexture:E,bindTexture:x,unbindTexture:F,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:pt,texImage3D:bt,updateUBOMapping:$t,uniformBlockBinding:Nt,texStorage2D:Jt,texStorage3D:tt,texSubImage2D:X,texSubImage3D:xt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:At,viewport:mt,reset:ce}}function I0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Bt,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return p?new OffscreenCanvas(E,x):ws("canvas")}function _(E,x,F){let Z=1;const J=Mt(E);if((J.width>F||J.height>F)&&(Z=F/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const X=Math.floor(Z*J.width),xt=Math.floor(Z*J.height);d===void 0&&(d=g(X,xt));const ot=x?g(X,xt):d;return ot.width=X,ot.height=xt,ot.getContext("2d").drawImage(E,0,0,X,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+xt+")."),ot}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,x,F,Z,J=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=x;if(x===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),x===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),x===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),x===i.RGBA){const xt=J?vr:ee.getTransfer(Z);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=xt===re?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function M(E,x){let F;return E?x===null||x===bi||x===ns?F=i.DEPTH24_STENCIL8:x===kn?F=i.DEPTH32F_STENCIL8:x===Ss&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===bi||x===ns?F=i.DEPTH_COMPONENT24:x===kn?F=i.DEPTH_COMPONENT32F:x===Ss&&(F=i.DEPTH_COMPONENT16),F}function D(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==xn&&E.minFilter!==Xe?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function A(E){const x=E.target;x.removeEventListener("dispose",A),C(x),x.isVideoTexture&&h.delete(x)}function T(E){const x=E.target;x.removeEventListener("dispose",T),v(x)}function C(E){const x=n.get(E);if(x.__webglInit===void 0)return;const F=E.source,Z=u.get(F);if(Z){const J=Z[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(E),Object.keys(Z).length===0&&u.delete(F)}n.remove(E)}function w(E){const x=n.get(E);i.deleteTexture(x.__webglTexture);const F=E.source,Z=u.get(F);delete Z[x.__cacheKey],a.memory.textures--}function v(E){const x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let J=0;J<x.__webglFramebuffer[Z].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[Z][J]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=E.textures;for(let Z=0,J=F.length;Z<J;Z++){const X=n.get(F[Z]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[Z])}n.remove(E)}let R=0;function z(){R=0}function k(){const E=R;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),R+=1,E}function G(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function Y(E,x){const F=n.get(E);if(E.isVideoTexture&&yt(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,E,x);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function W(E,x){const F=n.get(E);if(E.version>0&&F.__version!==E.version){q(F,E,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function j(E,x){const F=n.get(E);if(E.version>0&&F.__version!==E.version){q(F,E,x);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function H(E,x){const F=n.get(E);if(E.version>0&&F.__version!==E.version){et(F,E,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}const rt={[wi]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[Oa]:i.MIRRORED_REPEAT},ut={[xn]:i.NEAREST,[ad]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[Nr]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},vt={[hd]:i.NEVER,[gd]:i.ALWAYS,[dd]:i.LESS,[Cl]:i.LEQUAL,[ud]:i.EQUAL,[md]:i.GEQUAL,[fd]:i.GREATER,[pd]:i.NOTEQUAL};function Ht(E,x){if(x.type===kn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Xe||x.magFilter===Nr||x.magFilter===Us||x.magFilter===Mi||x.minFilter===Xe||x.minFilter===Nr||x.minFilter===Us||x.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,rt[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,rt[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,rt[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ut[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ut[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,vt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===xn||x.minFilter!==Us&&x.minFilter!==Mi||x.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function oe(E,x){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",A));const Z=x.source;let J=u.get(Z);J===void 0&&(J={},u.set(Z,J));const X=G(x);if(X!==E.__cacheKey){J[X]===void 0&&(J[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[X].usedTimes++;const xt=J[E.__cacheKey];xt!==void 0&&(J[E.__cacheKey].usedTimes--,xt.usedTimes===0&&w(x)),E.__cacheKey=X,E.__webglTexture=J[X].texture}return F}function q(E,x,F){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);const J=oe(E,x),X=x.source;e.bindTexture(Z,E.__webglTexture,i.TEXTURE0+F);const xt=n.get(X);if(X.version!==xt.__version||J===!0){e.activeTexture(i.TEXTURE0+F);const ot=ee.getPrimaries(ee.workingColorSpace),ft=x.colorSpace===Jn?null:ee.getPrimaries(x.colorSpace),Jt=x.colorSpace===Jn||ot===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let tt=_(x.image,!1,s.maxTextureSize);tt=le(x,tt);const pt=r.convert(x.format,x.colorSpace),bt=r.convert(x.type);let At=b(x.internalFormat,pt,bt,x.colorSpace,x.isVideoTexture);Ht(Z,x);let mt;const $t=x.mipmaps,Nt=x.isVideoTexture!==!0,ce=xt.__version===void 0||J===!0,L=X.dataReady,it=D(x,tt);if(x.isDepthTexture)At=M(x.format===is,x.type),ce&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,At,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,At,tt.width,tt.height,0,pt,bt,null));else if(x.isDataTexture)if($t.length>0){Nt&&ce&&e.texStorage2D(i.TEXTURE_2D,it,At,$t[0].width,$t[0].height);for(let V=0,$=$t.length;V<$;V++)mt=$t[V],Nt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,mt.width,mt.height,pt,bt,mt.data):e.texImage2D(i.TEXTURE_2D,V,At,mt.width,mt.height,0,pt,bt,mt.data);x.generateMipmaps=!1}else Nt?(ce&&e.texStorage2D(i.TEXTURE_2D,it,At,tt.width,tt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,pt,bt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,At,tt.width,tt.height,0,pt,bt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Nt&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,At,$t[0].width,$t[0].height,tt.depth);for(let V=0,$=$t.length;V<$;V++)if(mt=$t[V],x.format!==an)if(pt!==null)if(Nt){if(L)if(x.layerUpdates.size>0){const lt=bc(mt.width,mt.height,x.format,x.type);for(const ct of x.layerUpdates){const Lt=mt.data.subarray(ct*lt/mt.data.BYTES_PER_ELEMENT,(ct+1)*lt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ct,mt.width,mt.height,1,pt,Lt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,mt.width,mt.height,tt.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,At,mt.width,mt.height,tt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,mt.width,mt.height,tt.depth,pt,bt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,At,mt.width,mt.height,tt.depth,0,pt,bt,mt.data)}else{Nt&&ce&&e.texStorage2D(i.TEXTURE_2D,it,At,$t[0].width,$t[0].height);for(let V=0,$=$t.length;V<$;V++)mt=$t[V],x.format!==an?pt!==null?Nt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,At,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,mt.width,mt.height,pt,bt,mt.data):e.texImage2D(i.TEXTURE_2D,V,At,mt.width,mt.height,0,pt,bt,mt.data)}else if(x.isDataArrayTexture)if(Nt){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,At,tt.width,tt.height,tt.depth),L)if(x.layerUpdates.size>0){const V=bc(tt.width,tt.height,x.format,x.type);for(const $ of x.layerUpdates){const lt=tt.data.subarray($*V/tt.data.BYTES_PER_ELEMENT,($+1)*V/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,pt,bt,lt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,bt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,tt.width,tt.height,tt.depth,0,pt,bt,tt.data);else if(x.isData3DTexture)Nt?(ce&&e.texStorage3D(i.TEXTURE_3D,it,At,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,bt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,At,tt.width,tt.height,tt.depth,0,pt,bt,tt.data);else if(x.isFramebufferTexture){if(ce)if(Nt)e.texStorage2D(i.TEXTURE_2D,it,At,tt.width,tt.height);else{let V=tt.width,$=tt.height;for(let lt=0;lt<it;lt++)e.texImage2D(i.TEXTURE_2D,lt,At,V,$,0,pt,bt,null),V>>=1,$>>=1}}else if($t.length>0){if(Nt&&ce){const V=Mt($t[0]);e.texStorage2D(i.TEXTURE_2D,it,At,V.width,V.height)}for(let V=0,$=$t.length;V<$;V++)mt=$t[V],Nt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,pt,bt,mt):e.texImage2D(i.TEXTURE_2D,V,At,pt,bt,mt);x.generateMipmaps=!1}else if(Nt){if(ce){const V=Mt(tt);e.texStorage2D(i.TEXTURE_2D,it,At,V.width,V.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,bt,tt)}else e.texImage2D(i.TEXTURE_2D,0,At,pt,bt,tt);m(x)&&f(Z),xt.__version=X.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function et(E,x,F){if(x.image.length!==6)return;const Z=oe(E,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const X=n.get(J);if(J.version!==X.__version||Z===!0){e.activeTexture(i.TEXTURE0+F);const xt=ee.getPrimaries(ee.workingColorSpace),ot=x.colorSpace===Jn?null:ee.getPrimaries(x.colorSpace),ft=x.colorSpace===Jn||xt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Jt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,pt=[];for(let $=0;$<6;$++)!Jt&&!tt?pt[$]=_(x.image[$],!0,s.maxCubemapSize):pt[$]=tt?x.image[$].image:x.image[$],pt[$]=le(x,pt[$]);const bt=pt[0],At=r.convert(x.format,x.colorSpace),mt=r.convert(x.type),$t=b(x.internalFormat,At,mt,x.colorSpace),Nt=x.isVideoTexture!==!0,ce=X.__version===void 0||Z===!0,L=J.dataReady;let it=D(x,bt);Ht(i.TEXTURE_CUBE_MAP,x);let V;if(Jt){Nt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,$t,bt.width,bt.height);for(let $=0;$<6;$++){V=pt[$].mipmaps;for(let lt=0;lt<V.length;lt++){const ct=V[lt];x.format!==an?At!==null?Nt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,0,0,ct.width,ct.height,At,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,$t,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,0,0,ct.width,ct.height,At,mt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,$t,ct.width,ct.height,0,At,mt,ct.data)}}}else{if(V=x.mipmaps,Nt&&ce){V.length>0&&it++;const $=Mt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,$t,$.width,$.height)}for(let $=0;$<6;$++)if(tt){Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pt[$].width,pt[$].height,At,mt,pt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,$t,pt[$].width,pt[$].height,0,At,mt,pt[$].data);for(let lt=0;lt<V.length;lt++){const Lt=V[lt].image[$].image;Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,0,0,Lt.width,Lt.height,At,mt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,$t,Lt.width,Lt.height,0,At,mt,Lt.data)}}else{Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,At,mt,pt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,$t,At,mt,pt[$]);for(let lt=0;lt<V.length;lt++){const ct=V[lt];Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,0,0,At,mt,ct.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,$t,At,mt,ct.image[$])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),X.__version=J.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function _t(E,x,F,Z,J,X){const xt=r.convert(F.format,F.colorSpace),ot=r.convert(F.type),ft=b(F.internalFormat,xt,ot,F.colorSpace),Jt=n.get(x),tt=n.get(F);if(tt.__renderTarget=x,!Jt.__hasExternalTextures){const pt=Math.max(1,x.width>>X),bt=Math.max(1,x.height>>X);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,X,ft,pt,bt,x.depth,0,xt,ot,null):e.texImage2D(J,X,ft,pt,bt,0,xt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Zt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,J,tt.__webglTexture,0,Yt(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,J,tt.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(E,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){const Z=x.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,X=M(x.stencilBuffer,J),xt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Yt(x);Zt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,X,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,X,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,E)}else{const Z=x.textures;for(let J=0;J<Z.length;J++){const X=Z[J],xt=r.convert(X.format,X.colorSpace),ot=r.convert(X.type),ft=b(X.internalFormat,xt,ot,X.colorSpace),Jt=Yt(x);F&&Zt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,ft,x.width,x.height):Zt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,ft,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ft,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const J=Z.__webglTexture,X=Yt(x);if(x.depthTexture.format===Ki)Zt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(x.depthTexture.format===is)Zt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Dt(E){const x=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const Z=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=Z}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Et(x.__webglFramebuffer,E)}else if(F){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),at(x.__webglDepthbuffer[Z],E,!1);else{const J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),at(x.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(E,x,F){const Z=n.get(E);x!==void 0&&_t(Z.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Dt(E)}function pe(E){const x=E.texture,F=n.get(E),Z=n.get(x);E.addEventListener("dispose",T);const J=E.textures,X=E.isWebGLCubeRenderTarget===!0,xt=J.length>1;if(xt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let ft=0;ft<x.mipmaps.length;ft++)F.__webglFramebuffer[ot][ft]=i.createFramebuffer()}else F.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)F.__webglFramebuffer[ot]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(xt)for(let ot=0,ft=J.length;ot<ft;ot++){const Jt=n.get(J[ot]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Zt(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){const ft=J[ot];F.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);const Jt=r.convert(ft.format,ft.colorSpace),tt=r.convert(ft.type),pt=b(ft.internalFormat,Jt,tt,ft.colorSpace,E.isXRRenderTarget===!0),bt=Yt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,pt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),at(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)_t(F.__webglFramebuffer[ot][ft],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else _t(F.__webglFramebuffer[ot],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(x)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ot=0,ft=J.length;ot<ft;ot++){const Jt=J[ot],tt=n.get(Jt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Ht(i.TEXTURE_2D,Jt),_t(F.__webglFramebuffer,E,Jt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),m(Jt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ot=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),Ht(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)_t(F.__webglFramebuffer[ft],E,x,i.COLOR_ATTACHMENT0,ot,ft);else _t(F.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,ot,0);m(x)&&f(ot),e.unbindTexture()}E.depthBuffer&&Dt(E)}function jt(E){const x=E.textures;for(let F=0,Z=x.length;F<Z;F++){const J=x[F];if(m(J)){const X=S(E),xt=n.get(J).__webglTexture;e.bindTexture(X,xt),f(X),e.unbindTexture()}}}const ye=[],P=[];function en(E){if(E.samples>0){if(Zt(E)===!1){const x=E.textures,F=E.width,Z=E.height;let J=i.COLOR_BUFFER_BIT;const X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(E),ot=x.length>1;if(ot)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ft]);const Jt=n.get(x[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,F,Z,0,0,F,Z,J,i.NEAREST),c===!0&&(ye.length=0,P.length=0,ye.push(i.COLOR_ATTACHMENT0+ft),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ye.push(X),P.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ft]);const Jt=n.get(x[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Yt(E){return Math.min(s.maxSamples,E.samples)}function Zt(E){const x=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function yt(E){const x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function le(E,x){const F=E.colorSpace,Z=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==ss&&F!==Jn&&(ee.getTransfer(F)===re?(Z!==an||J!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Mt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=Vt,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Zt}function L0(i,t){function e(n,s=Jn){let r;const a=ee.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xl)return i.BYTE;if(n===vl)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===xo)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===bs)return i.HALF_FLOAT;if(n===Ml)return i.ALPHA;if(n===Sl)return i.RGB;if(n===an)return i.RGBA;if(n===wl)return i.LUMINANCE;if(n===bl)return i.LUMINANCE_ALPHA;if(n===Ki)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===El)return i.RED;if(n===Mo)return i.RED_INTEGER;if(n===Tl)return i.RG;if(n===So)return i.RG_INTEGER;if(n===wo)return i.RGBA_INTEGER;if(n===hr||n===dr||n===ur||n===fr)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ka||n===Ba||n===za||n===Ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Ga||n===Wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Va||n===Ga)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ka||n===ja||n===Ja||n===Qa||n===to||n===eo||n===no||n===io||n===so)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ka)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ja)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===to)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===no)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===io)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===so)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pr||n===ro||n===ao)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pr)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Al||n===oo||n===co||n===lo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===pr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===co)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const U0={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(U0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const N0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class O0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Gn({vertexShader:N0,fragmentShader:F0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k0 extends os{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null;const _=new O0,m=e.getContextAttributes();let f=null,S=null;const b=[],M=[],D=new Bt;let A=null;const T=new We;T.viewport=new ae;const C=new We;C.viewport=new ae;const w=[T,C],v=new su;let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=b[q];return et===void 0&&(et=new fa,b[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=b[q];return et===void 0&&(et=new fa,b[q]=et),et.getGripSpace()},this.getHand=function(q){let et=b[q];return et===void 0&&(et=new fa,b[q]=et),et.getHandSpace()};function k(q){const et=M.indexOf(q.inputSource);if(et===-1)return;const _t=b[et];_t!==void 0&&(_t.update(q.inputSource,q.frame,l||a),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Y);for(let q=0;q<b.length;q++){const et=M[q];et!==null&&(M[q]=null,b[q].disconnect(et))}R=null,z=null,_.reset(),t.setRenderTarget(f),p=null,u=null,d=null,s=null,S=null,oe.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new si(p.framebufferWidth,p.framebufferHeight,{format:an,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,_t=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?is:Ki,_t=m.stencil?ns:bi);const Et={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Et),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new si(u.textureWidth,u.textureHeight,{format:an,type:Vn,depthTexture:new Gl(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(q){for(let et=0;et<q.removed.length;et++){const _t=q.removed[et],at=M.indexOf(_t);at>=0&&(M[at]=null,b[at].disconnect(_t))}for(let et=0;et<q.added.length;et++){const _t=q.added[et];let at=M.indexOf(_t);if(at===-1){for(let Dt=0;Dt<b.length;Dt++)if(Dt>=M.length){M.push(_t),at=Dt;break}else if(M[Dt]===null){M[Dt]=_t,at=Dt;break}if(at===-1)break}const Et=b[at];Et&&Et.connect(_t)}}const W=new I,j=new I;function H(q,et,_t){W.setFromMatrixPosition(et.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);const at=W.distanceTo(j),Et=et.projectionMatrix.elements,Dt=_t.projectionMatrix.elements,Vt=Et[14]/(Et[10]-1),pe=Et[14]/(Et[10]+1),jt=(Et[9]+1)/Et[5],ye=(Et[9]-1)/Et[5],P=(Et[8]-1)/Et[0],en=(Dt[8]+1)/Dt[0],Yt=Vt*P,Zt=Vt*en,yt=at/(-P+en),le=yt*-P;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(le),q.translateZ(yt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Et[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Mt=Vt+yt,E=pe+yt,x=Yt-le,F=Zt+(at-le),Z=jt*pe/E*Mt,J=ye*pe/E*Mt;q.projectionMatrix.makePerspective(x,F,Z,J,Mt,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function rt(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let et=q.near,_t=q.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),v.near=C.near=T.near=et,v.far=C.far=T.far=_t,(R!==v.near||z!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,z=v.far),T.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,v.layers.mask=T.layers.mask|C.layers.mask;const at=q.parent,Et=v.cameras;rt(v,at);for(let Dt=0;Dt<Et.length;Dt++)rt(Et[Dt],at);Et.length===2?H(v,T,C):v.projectionMatrix.copy(T.projectionMatrix),ut(q,v,at)};function ut(q,et,_t){_t===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Mr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(q){c=q,u!==null&&(u.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let vt=null;function Ht(q,et){if(h=et.getViewerPose(l||a),g=et,h!==null){const _t=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let at=!1;_t.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let Dt=0;Dt<_t.length;Dt++){const Vt=_t[Dt];let pe=null;if(p!==null)pe=p.getViewport(Vt);else{const ye=d.getViewSubImage(u,Vt);pe=ye.viewport,Dt===0&&(t.setRenderTargetTextures(S,ye.colorTexture,u.ignoreDepthValues?void 0:ye.depthStencilTexture),t.setRenderTarget(S))}let jt=w[Dt];jt===void 0&&(jt=new We,jt.layers.enable(Dt),jt.viewport=new ae,w[Dt]=jt),jt.matrix.fromArray(Vt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Vt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(pe.x,pe.y,pe.width,pe.height),Dt===0&&(v.matrix.copy(jt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(jt)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const Dt=d.getDepthInformation(_t[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,s.renderState)}}for(let _t=0;_t<b.length;_t++){const at=M[_t],Et=b[_t];at!==null&&Et!==void 0&&Et.update(at,et,l||a)}vt&&vt(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const oe=new ql;oe.setAnimationLoop(Ht),this.setAnimationLoop=function(q){vt=q},this.dispose=function(){}}}const fi=new En,B0=new fe;function z0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,kl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,b,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,S,b):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===He&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===He&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=t.get(f),b=S.envMap,M=S.envMapRotation;b&&(m.envMap.value=b,fi.copy(M),fi.x*=-1,fi.y*=-1,fi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4(B0.makeRotationFromEuler(fi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===He&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function H0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){const M=b.program;n.uniformBlockBinding(S,M)}function l(S,b){let M=s[S.id];M===void 0&&(g(S),M=h(S),s[S.id]=M,S.addEventListener("dispose",m));const D=b.program;n.updateUBOMapping(S,D);const A=t.render.frame;r[S.id]!==A&&(u(S),r[S.id]=A)}function h(S){const b=d();S.__bindingPointIndex=b;const M=i.createBuffer(),D=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,D,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const b=s[S.id],M=S.uniforms,D=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,T=M.length;A<T;A++){const C=Array.isArray(M[A])?M[A]:[M[A]];for(let w=0,v=C.length;w<v;w++){const R=C[w];if(p(R,A,w,D)===!0){const z=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let G=0;for(let Y=0;Y<k.length;Y++){const W=k[Y],j=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,z+G,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,b,M,D){const A=S.value,T=b+"_"+M;if(D[T]===void 0)return typeof A=="number"||typeof A=="boolean"?D[T]=A:D[T]=A.clone(),!0;{const C=D[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return D[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(S){const b=S.uniforms;let M=0;const D=16;for(let T=0,C=b.length;T<C;T++){const w=Array.isArray(b[T])?b[T]:[b[T]];for(let v=0,R=w.length;v<R;v++){const z=w[v],k=Array.isArray(z.value)?z.value:[z.value];for(let G=0,Y=k.length;G<Y;G++){const W=k[G],j=_(W),H=M%D,rt=H%j.boundary,ut=H+rt;M+=rt,ut!==0&&D-ut<j.storage&&(M+=D-ut),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=j.storage}}}const A=M%D;return A>0&&(M+=D-A),S.__size=M,S.__cache={},this}function _(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){const b=S.target;b.removeEventListener("dispose",m);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}class V0{constructor(t={}){const{canvas:e=xd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const S=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this.toneMapping=ni,this.toneMappingExposure=1;const M=this;let D=!1,A=0,T=0,C=null,w=-1,v=null;const R=new ae,z=new ae;let k=null;const G=new kt(0);let Y=0,W=e.width,j=e.height,H=1,rt=null,ut=null;const vt=new ae(0,0,W,j),Ht=new ae(0,0,W,j);let oe=!1;const q=new Eo;let et=!1,_t=!1;const at=new fe,Et=new fe,Dt=new I,Vt=new ae,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function ye(){return C===null?H:1}let P=n;function en(y,U){return e.getContext(y,U)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_o}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),P===null){const U="webgl2";if(P=en(U,y),P===null)throw en(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Yt,Zt,yt,le,Mt,E,x,F,Z,J,X,xt,ot,ft,Jt,tt,pt,bt,At,mt,$t,Nt,ce,L;function it(){Yt=new jp(P),Yt.init(),Nt=new L0(P,Yt),Zt=new Xp(P,Yt,t,Nt),yt=new D0(P,Yt),Zt.reverseDepthBuffer&&u&&yt.buffers.depth.setReversed(!0),le=new tm(P),Mt=new x0,E=new I0(P,Yt,yt,Mt,Zt,Nt,le),x=new Yp(M),F=new Kp(M),Z=new au(P),ce=new Gp(P,Z),J=new Jp(P,Z,le,ce),X=new nm(P,J,Z,le),At=new em(P,Zt,E),tt=new qp(Mt),xt=new _0(M,x,F,Yt,Zt,ce,tt),ot=new z0(M,Mt),ft=new y0,Jt=new T0(Yt),bt=new Vp(M,x,F,yt,X,p,c),pt=new C0(M,X,Zt),L=new H0(P,le,Zt,yt),mt=new Wp(P,Yt,le),$t=new Qp(P,Yt,le),le.programs=xt.programs,M.capabilities=Zt,M.extensions=Yt,M.properties=Mt,M.renderLists=ft,M.shadowMap=pt,M.state=yt,M.info=le}it();const V=new k0(M,P);this.xr=V,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=Yt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Yt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(W,j,!1))},this.getSize=function(y){return y.set(W,j)},this.setSize=function(y,U,O=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,j=U,e.width=Math.floor(y*H),e.height=Math.floor(U*H),O===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(W*H,j*H).floor()},this.setDrawingBufferSize=function(y,U,O){W=y,j=U,H=O,e.width=Math.floor(y*O),e.height=Math.floor(U*O),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(vt)},this.setViewport=function(y,U,O,B){y.isVector4?vt.set(y.x,y.y,y.z,y.w):vt.set(y,U,O,B),yt.viewport(R.copy(vt).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(Ht)},this.setScissor=function(y,U,O,B){y.isVector4?Ht.set(y.x,y.y,y.z,y.w):Ht.set(y,U,O,B),yt.scissor(z.copy(Ht).multiplyScalar(H).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(y){yt.setScissorTest(oe=y)},this.setOpaqueSort=function(y){rt=y},this.setTransparentSort=function(y){ut=y},this.getClearColor=function(y){return y.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(y=!0,U=!0,O=!0){let B=0;if(y){let N=!1;if(C!==null){const Q=C.texture.format;N=Q===wo||Q===So||Q===Mo}if(N){const Q=C.texture.type,st=Q===Vn||Q===bi||Q===Ss||Q===ns||Q===vo||Q===yo,ht=bt.getClearColor(),gt=bt.getClearAlpha(),Rt=ht.r,Ct=ht.g,St=ht.b;st?(g[0]=Rt,g[1]=Ct,g[2]=St,g[3]=gt,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Rt,_[1]=Ct,_[2]=St,_[3]=gt,P.clearBufferiv(P.COLOR,0,_))}else B|=P.COLOR_BUFFER_BIT}U&&(B|=P.DEPTH_BUFFER_BIT),O&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),bt.dispose(),ft.dispose(),Jt.dispose(),Mt.dispose(),x.dispose(),F.dispose(),X.dispose(),ce.dispose(),L.dispose(),xt.dispose(),V.dispose(),V.removeEventListener("sessionstart",Bo),V.removeEventListener("sessionend",zo),ai.stop()};function $(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const y=le.autoReset,U=pt.enabled,O=pt.autoUpdate,B=pt.needsUpdate,N=pt.type;it(),le.autoReset=y,pt.enabled=U,pt.autoUpdate=O,pt.needsUpdate=B,pt.type=N}function ct(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Lt(y){const U=y.target;U.removeEventListener("dispose",Lt),ge(U)}function ge(y){Ie(y),Mt.remove(y)}function Ie(y){const U=Mt.get(y).programs;U!==void 0&&(U.forEach(function(O){xt.releaseProgram(O)}),y.isShaderMaterial&&xt.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,O,B,N,Q){U===null&&(U=pe);const st=N.isMesh&&N.matrixWorld.determinant()<0,ht=Th(y,U,O,B,N);yt.setMaterial(B,st);let gt=O.index,Rt=1;if(B.wireframe===!0){if(gt=J.getWireframeAttribute(O),gt===void 0)return;Rt=2}const Ct=O.drawRange,St=O.attributes.position;let Qt=Ct.start*Rt,ne=(Ct.start+Ct.count)*Rt;Q!==null&&(Qt=Math.max(Qt,Q.start*Rt),ne=Math.min(ne,(Q.start+Q.count)*Rt)),gt!==null?(Qt=Math.max(Qt,0),ne=Math.min(ne,gt.count)):St!=null&&(Qt=Math.max(Qt,0),ne=Math.min(ne,St.count));const Se=ne-Qt;if(Se<0||Se===1/0)return;ce.setup(N,B,ht,O,gt);let _e,te=mt;if(gt!==null&&(_e=Z.get(gt),te=$t,te.setIndex(_e)),N.isMesh)B.wireframe===!0?(yt.setLineWidth(B.wireframeLinewidth*ye()),te.setMode(P.LINES)):te.setMode(P.TRIANGLES);else if(N.isLine){let wt=B.linewidth;wt===void 0&&(wt=1),yt.setLineWidth(wt*ye()),N.isLineSegments?te.setMode(P.LINES):N.isLineLoop?te.setMode(P.LINE_LOOP):te.setMode(P.LINE_STRIP)}else N.isPoints?te.setMode(P.POINTS):N.isSprite&&te.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)te.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))te.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const wt=N._multiDrawStarts,Pe=N._multiDrawCounts,ie=N._multiDrawCount,hn=gt?Z.get(gt).bytesPerElement:1,Ei=Mt.get(B).currentProgram.getUniforms();for(let je=0;je<ie;je++)Ei.setValue(P,"_gl_DrawID",je),te.render(wt[je]/hn,Pe[je])}else if(N.isInstancedMesh)te.renderInstances(Qt,Se,N.count);else if(O.isInstancedBufferGeometry){const wt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Pe=Math.min(O.instanceCount,wt);te.renderInstances(Qt,Se,Pe)}else te.render(Qt,Se)};function se(y,U,O){y.transparent===!0&&y.side===gn&&y.forceSinglePass===!1?(y.side=He,y.needsUpdate=!0,Ls(y,U,O),y.side=ii,y.needsUpdate=!0,Ls(y,U,O),y.side=gn):Ls(y,U,O)}this.compile=function(y,U,O=null){O===null&&(O=y),f=Jt.get(O),f.init(U),b.push(f),O.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),y!==O&&y.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const B=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let st=0;st<Q.length;st++){const ht=Q[st];se(ht,O,N),B.add(ht)}else se(Q,O,N),B.add(Q)}),b.pop(),f=null,B},this.compileAsync=function(y,U,O=null){const B=this.compile(y,U,O);return new Promise(N=>{function Q(){if(B.forEach(function(st){Mt.get(st).currentProgram.isReady()&&B.delete(st)}),B.size===0){N(y);return}setTimeout(Q,10)}Yt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let ln=null;function Cn(y){ln&&ln(y)}function Bo(){ai.stop()}function zo(){ai.start()}const ai=new ql;ai.setAnimationLoop(Cn),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(y){ln=y,V.setAnimationLoop(y),y===null?ai.stop():ai.start()},V.addEventListener("sessionstart",Bo),V.addEventListener("sessionend",zo),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,U,C),f=Jt.get(y,b.length),f.init(U),b.push(f),Et.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Et),_t=this.localClippingEnabled,et=tt.init(this.clippingPlanes,_t),m=ft.get(y,S.length),m.init(),S.push(m),V.enabled===!0&&V.isPresenting===!0){const Q=M.xr.getDepthSensingMesh();Q!==null&&Lr(Q,U,-1/0,M.sortObjects)}Lr(y,U,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(rt,ut),jt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,jt&&bt.addToRenderList(m,y),this.info.render.frame++,et===!0&&tt.beginShadows();const O=f.state.shadowsArray;pt.render(O,y,U),et===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){const Q=U.cameras;if(N.length>0)for(let st=0,ht=Q.length;st<ht;st++){const gt=Q[st];Vo(B,N,y,gt)}jt&&bt.render(y);for(let st=0,ht=Q.length;st<ht;st++){const gt=Q[st];Ho(m,y,gt,gt.viewport)}}else N.length>0&&Vo(B,N,y,U),jt&&bt.render(y),Ho(m,y,U);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(M,y,U),ce.resetDefaultState(),w=-1,v=null,b.pop(),b.length>0?(f=b[b.length-1],et===!0&&tt.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Lr(y,U,O,B){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||q.intersectsSprite(y)){B&&Vt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Et);const st=X.update(y),ht=y.material;ht.visible&&m.push(y,st,ht,O,Vt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||q.intersectsObject(y))){const st=X.update(y),ht=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Vt.copy(y.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Vt.copy(st.boundingSphere.center)),Vt.applyMatrix4(y.matrixWorld).applyMatrix4(Et)),Array.isArray(ht)){const gt=st.groups;for(let Rt=0,Ct=gt.length;Rt<Ct;Rt++){const St=gt[Rt],Qt=ht[St.materialIndex];Qt&&Qt.visible&&m.push(y,st,Qt,O,Vt.z,St)}}else ht.visible&&m.push(y,st,ht,O,Vt.z,null)}}const Q=y.children;for(let st=0,ht=Q.length;st<ht;st++)Lr(Q[st],U,O,B)}function Ho(y,U,O,B){const N=y.opaque,Q=y.transmissive,st=y.transparent;f.setupLightsView(O),et===!0&&tt.setGlobalState(M.clippingPlanes,O),B&&yt.viewport(R.copy(B)),N.length>0&&Is(N,U,O),Q.length>0&&Is(Q,U,O),st.length>0&&Is(st,U,O),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Vo(y,U,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new si(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?bs:Vn,minFilter:Mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const Q=f.state.transmissionRenderTarget[B.id],st=B.viewport||R;Q.setSize(st.z,st.w);const ht=M.getRenderTarget();M.setRenderTarget(Q),M.getClearColor(G),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),jt&&bt.render(O);const gt=M.toneMapping;M.toneMapping=ni;const Rt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),et===!0&&tt.setGlobalState(M.clippingPlanes,B),Is(y,O,B),E.updateMultisampleRenderTarget(Q),E.updateRenderTargetMipmap(Q),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let St=0,Qt=U.length;St<Qt;St++){const ne=U[St],Se=ne.object,_e=ne.geometry,te=ne.material,wt=ne.group;if(te.side===gn&&Se.layers.test(B.layers)){const Pe=te.side;te.side=He,te.needsUpdate=!0,Go(Se,O,B,_e,te,wt),te.side=Pe,te.needsUpdate=!0,Ct=!0}}Ct===!0&&(E.updateMultisampleRenderTarget(Q),E.updateRenderTargetMipmap(Q))}M.setRenderTarget(ht),M.setClearColor(G,Y),Rt!==void 0&&(B.viewport=Rt),M.toneMapping=gt}function Is(y,U,O){const B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,Q=y.length;N<Q;N++){const st=y[N],ht=st.object,gt=st.geometry,Rt=B===null?st.material:B,Ct=st.group;ht.layers.test(O.layers)&&Go(ht,U,O,gt,Rt,Ct)}}function Go(y,U,O,B,N,Q){y.onBeforeRender(M,U,O,B,N,Q),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(M,U,O,B,y,Q),N.transparent===!0&&N.side===gn&&N.forceSinglePass===!1?(N.side=He,N.needsUpdate=!0,M.renderBufferDirect(O,U,B,N,y,Q),N.side=ii,N.needsUpdate=!0,M.renderBufferDirect(O,U,B,N,y,Q),N.side=gn):M.renderBufferDirect(O,U,B,N,y,Q),y.onAfterRender(M,U,O,B,N,Q)}function Ls(y,U,O){U.isScene!==!0&&(U=pe);const B=Mt.get(y),N=f.state.lights,Q=f.state.shadowsArray,st=N.state.version,ht=xt.getParameters(y,N.state,Q,U,O),gt=xt.getProgramCacheKey(ht);let Rt=B.programs;B.environment=y.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(y.isMeshStandardMaterial?F:x).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Rt===void 0&&(y.addEventListener("dispose",Lt),Rt=new Map,B.programs=Rt);let Ct=Rt.get(gt);if(Ct!==void 0){if(B.currentProgram===Ct&&B.lightsStateVersion===st)return Xo(y,ht),Ct}else ht.uniforms=xt.getUniforms(y),y.onBeforeCompile(ht,M),Ct=xt.acquireProgram(ht,gt),Rt.set(gt,Ct),B.uniforms=ht.uniforms;const St=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(St.clippingPlanes=tt.uniform),Xo(y,ht),B.needsLights=Rh(y),B.lightsStateVersion=st,B.needsLights&&(St.ambientLightColor.value=N.state.ambient,St.lightProbe.value=N.state.probe,St.directionalLights.value=N.state.directional,St.directionalLightShadows.value=N.state.directionalShadow,St.spotLights.value=N.state.spot,St.spotLightShadows.value=N.state.spotShadow,St.rectAreaLights.value=N.state.rectArea,St.ltc_1.value=N.state.rectAreaLTC1,St.ltc_2.value=N.state.rectAreaLTC2,St.pointLights.value=N.state.point,St.pointLightShadows.value=N.state.pointShadow,St.hemisphereLights.value=N.state.hemi,St.directionalShadowMap.value=N.state.directionalShadowMap,St.directionalShadowMatrix.value=N.state.directionalShadowMatrix,St.spotShadowMap.value=N.state.spotShadowMap,St.spotLightMatrix.value=N.state.spotLightMatrix,St.spotLightMap.value=N.state.spotLightMap,St.pointShadowMap.value=N.state.pointShadowMap,St.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Ct,B.uniformsList=null,Ct}function Wo(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=gr.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Xo(y,U){const O=Mt.get(y);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Th(y,U,O,B,N){U.isScene!==!0&&(U=pe),E.resetTextureUnits();const Q=U.fog,st=B.isMeshStandardMaterial?U.environment:null,ht=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ss,gt=(B.isMeshStandardMaterial?F:x).get(B.envMap||st),Rt=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ct=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),St=!!O.morphAttributes.position,Qt=!!O.morphAttributes.normal,ne=!!O.morphAttributes.color;let Se=ni;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Se=M.toneMapping);const _e=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,te=_e!==void 0?_e.length:0,wt=Mt.get(B),Pe=f.state.lights;if(et===!0&&(_t===!0||y!==v)){const Be=y===v&&B.id===w;tt.setState(B,y,Be)}let ie=!1;B.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Pe.state.version||wt.outputColorSpace!==ht||N.isBatchedMesh&&wt.batching===!1||!N.isBatchedMesh&&wt.batching===!0||N.isBatchedMesh&&wt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&wt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&wt.instancing===!1||!N.isInstancedMesh&&wt.instancing===!0||N.isSkinnedMesh&&wt.skinning===!1||!N.isSkinnedMesh&&wt.skinning===!0||N.isInstancedMesh&&wt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&wt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&wt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&wt.instancingMorph===!1&&N.morphTexture!==null||wt.envMap!==gt||B.fog===!0&&wt.fog!==Q||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==tt.numPlanes||wt.numIntersection!==tt.numIntersection)||wt.vertexAlphas!==Rt||wt.vertexTangents!==Ct||wt.morphTargets!==St||wt.morphNormals!==Qt||wt.morphColors!==ne||wt.toneMapping!==Se||wt.morphTargetsCount!==te)&&(ie=!0):(ie=!0,wt.__version=B.version);let hn=wt.currentProgram;ie===!0&&(hn=Ls(B,U,N));let Ei=!1,je=!1,ds=!1;const de=hn.getUniforms(),nn=wt.uniforms;if(yt.useProgram(hn.program)&&(Ei=!0,je=!0,ds=!0),B.id!==w&&(w=B.id,je=!0),Ei||v!==y){yt.buffers.depth.getReversed()?(at.copy(y.projectionMatrix),yd(at),Md(at),de.setValue(P,"projectionMatrix",at)):de.setValue(P,"projectionMatrix",y.projectionMatrix),de.setValue(P,"viewMatrix",y.matrixWorldInverse);const Ve=de.map.cameraPosition;Ve!==void 0&&Ve.setValue(P,Dt.setFromMatrixPosition(y.matrixWorld)),Zt.logarithmicDepthBuffer&&de.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&de.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,je=!0,ds=!0)}if(N.isSkinnedMesh){de.setOptional(P,N,"bindMatrix"),de.setOptional(P,N,"bindMatrixInverse");const Be=N.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),de.setValue(P,"boneTexture",Be.boneTexture,E))}N.isBatchedMesh&&(de.setOptional(P,N,"batchingTexture"),de.setValue(P,"batchingTexture",N._matricesTexture,E),de.setOptional(P,N,"batchingIdTexture"),de.setValue(P,"batchingIdTexture",N._indirectTexture,E),de.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&de.setValue(P,"batchingColorTexture",N._colorsTexture,E));const sn=O.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&At.update(N,O,hn),(je||wt.receiveShadow!==N.receiveShadow)&&(wt.receiveShadow=N.receiveShadow,de.setValue(P,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(nn.envMap.value=gt,nn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(nn.envMapIntensity.value=U.environmentIntensity),je&&(de.setValue(P,"toneMappingExposure",M.toneMappingExposure),wt.needsLights&&Ah(nn,ds),Q&&B.fog===!0&&ot.refreshFogUniforms(nn,Q),ot.refreshMaterialUniforms(nn,B,H,j,f.state.transmissionRenderTarget[y.id]),gr.upload(P,Wo(wt),nn,E)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(gr.upload(P,Wo(wt),nn,E),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&de.setValue(P,"center",N.center),de.setValue(P,"modelViewMatrix",N.modelViewMatrix),de.setValue(P,"normalMatrix",N.normalMatrix),de.setValue(P,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Be=B.uniformsGroups;for(let Ve=0,Ur=Be.length;Ve<Ur;Ve++){const oi=Be[Ve];L.update(oi,hn),L.bind(oi,hn)}}return hn}function Ah(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Rh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,U,O){Mt.get(y.texture).__webglTexture=U,Mt.get(y.depthTexture).__webglTexture=O;const B=Mt.get(y);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const O=Mt.get(y);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,O=0){C=y,A=U,T=O;let B=!0,N=null,Q=!1,st=!1;if(y){const gt=Mt.get(y);if(gt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(P.FRAMEBUFFER,null),B=!1;else if(gt.__webglFramebuffer===void 0)E.setupRenderTarget(y);else if(gt.__hasExternalTextures)E.rebindTextures(y,Mt.get(y.texture).__webglTexture,Mt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const St=y.depthTexture;if(gt.__boundDepthTexture!==St){if(St!==null&&Mt.has(St)&&(y.width!==St.image.width||y.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(y)}}const Rt=y.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(st=!0);const Ct=Mt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ct[U])?N=Ct[U][O]:N=Ct[U],Q=!0):y.samples>0&&E.useMultisampledRTT(y)===!1?N=Mt.get(y).__webglMultisampledFramebuffer:Array.isArray(Ct)?N=Ct[O]:N=Ct,R.copy(y.viewport),z.copy(y.scissor),k=y.scissorTest}else R.copy(vt).multiplyScalar(H).floor(),z.copy(Ht).multiplyScalar(H).floor(),k=oe;if(yt.bindFramebuffer(P.FRAMEBUFFER,N)&&B&&yt.drawBuffers(y,N),yt.viewport(R),yt.scissor(z),yt.setScissorTest(k),Q){const gt=Mt.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,gt.__webglTexture,O)}else if(st){const gt=Mt.get(y.texture),Rt=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,gt.__webglTexture,O||0,Rt)}w=-1},this.readRenderTargetPixels=function(y,U,O,B,N,Q,st){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&st!==void 0&&(ht=ht[st]),ht){yt.bindFramebuffer(P.FRAMEBUFFER,ht);try{const gt=y.texture,Rt=gt.format,Ct=gt.type;if(!Zt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-B&&O>=0&&O<=y.height-N&&P.readPixels(U,O,B,N,Nt.convert(Rt),Nt.convert(Ct),Q)}finally{const gt=C!==null?Mt.get(C).__webglFramebuffer:null;yt.bindFramebuffer(P.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(y,U,O,B,N,Q,st){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&st!==void 0&&(ht=ht[st]),ht){const gt=y.texture,Rt=gt.format,Ct=gt.type;if(!Zt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-B&&O>=0&&O<=y.height-N){yt.bindFramebuffer(P.FRAMEBUFFER,ht);const St=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,St),P.bufferData(P.PIXEL_PACK_BUFFER,Q.byteLength,P.STREAM_READ),P.readPixels(U,O,B,N,Nt.convert(Rt),Nt.convert(Ct),0);const Qt=C!==null?Mt.get(C).__webglFramebuffer:null;yt.bindFramebuffer(P.FRAMEBUFFER,Qt);const ne=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await vd(P,ne,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,St),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Q),P.deleteBuffer(St),P.deleteSync(ne),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,U=null,O=0){y.isTexture!==!0&&(Gi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);const B=Math.pow(2,-O),N=Math.floor(y.image.width*B),Q=Math.floor(y.image.height*B),st=U!==null?U.x:0,ht=U!==null?U.y:0;E.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,O,0,0,st,ht,N,Q),yt.unbindTexture()};const Ch=P.createFramebuffer(),Ph=P.createFramebuffer();this.copyTextureToTexture=function(y,U,O=null,B=null,N=0,Q=null){y.isTexture!==!0&&(Gi("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,y=arguments[1],U=arguments[2],Q=arguments[3]||0,O=null),Q===null&&(N!==0?(Gi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let st,ht,gt,Rt,Ct,St,Qt,ne,Se;const _e=y.isCompressedTexture?y.mipmaps[Q]:y.image;if(O!==null)st=O.max.x-O.min.x,ht=O.max.y-O.min.y,gt=O.isBox3?O.max.z-O.min.z:1,Rt=O.min.x,Ct=O.min.y,St=O.isBox3?O.min.z:0;else{const sn=Math.pow(2,-N);st=Math.floor(_e.width*sn),ht=Math.floor(_e.height*sn),y.isDataArrayTexture?gt=_e.depth:y.isData3DTexture?gt=Math.floor(_e.depth*sn):gt=1,Rt=0,Ct=0,St=0}B!==null?(Qt=B.x,ne=B.y,Se=B.z):(Qt=0,ne=0,Se=0);const te=Nt.convert(U.format),wt=Nt.convert(U.type);let Pe;U.isData3DTexture?(E.setTexture3D(U,0),Pe=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),Pe=P.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),Pe=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const ie=P.getParameter(P.UNPACK_ROW_LENGTH),hn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ei=P.getParameter(P.UNPACK_SKIP_PIXELS),je=P.getParameter(P.UNPACK_SKIP_ROWS),ds=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,_e.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_e.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Rt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ct),P.pixelStorei(P.UNPACK_SKIP_IMAGES,St);const de=y.isDataArrayTexture||y.isData3DTexture,nn=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const sn=Mt.get(y),Be=Mt.get(U),Ve=Mt.get(sn.__renderTarget),Ur=Mt.get(Be.__renderTarget);yt.bindFramebuffer(P.READ_FRAMEBUFFER,Ve.__webglFramebuffer),yt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ur.__webglFramebuffer);for(let oi=0;oi<gt;oi++)de&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mt.get(y).__webglTexture,N,St+oi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mt.get(U).__webglTexture,Q,Se+oi)),P.blitFramebuffer(Rt,Ct,st,ht,Qt,ne,st,ht,P.DEPTH_BUFFER_BIT,P.NEAREST);yt.bindFramebuffer(P.READ_FRAMEBUFFER,null),yt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||y.isRenderTargetTexture||Mt.has(y)){const sn=Mt.get(y),Be=Mt.get(U);yt.bindFramebuffer(P.READ_FRAMEBUFFER,Ch),yt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ph);for(let Ve=0;Ve<gt;Ve++)de?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,sn.__webglTexture,N,St+Ve):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,sn.__webglTexture,N),nn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Be.__webglTexture,Q,Se+Ve):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Be.__webglTexture,Q),N!==0?P.blitFramebuffer(Rt,Ct,st,ht,Qt,ne,st,ht,P.COLOR_BUFFER_BIT,P.NEAREST):nn?P.copyTexSubImage3D(Pe,Q,Qt,ne,Se+Ve,Rt,Ct,st,ht):P.copyTexSubImage2D(Pe,Q,Qt,ne,Rt,Ct,st,ht);yt.bindFramebuffer(P.READ_FRAMEBUFFER,null),yt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else nn?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Pe,Q,Qt,ne,Se,st,ht,gt,te,wt,_e.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Pe,Q,Qt,ne,Se,st,ht,gt,te,_e.data):P.texSubImage3D(Pe,Q,Qt,ne,Se,st,ht,gt,te,wt,_e):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Q,Qt,ne,st,ht,te,wt,_e.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Q,Qt,ne,_e.width,_e.height,te,_e.data):P.texSubImage2D(P.TEXTURE_2D,Q,Qt,ne,st,ht,te,wt,_e);P.pixelStorei(P.UNPACK_ROW_LENGTH,ie),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,hn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ei),P.pixelStorei(P.UNPACK_SKIP_ROWS,je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ds),Q===0&&U.generateMipmaps&&P.generateMipmap(Pe),yt.unbindTexture()},this.copyTextureToTexture3D=function(y,U,O=null,B=null,N=0){return y.isTexture!==!0&&(Gi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,y=arguments[2],U=arguments[3],N=arguments[4]||0),Gi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,U,O,B,N)},this.initRenderTarget=function(y){Mt.get(y).__webglFramebuffer===void 0&&E.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),yt.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,yt.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class G0{constructor(t){this.dom=t,this.keys=new Set,this.locked=!1,this.mode="drag",this.lockFailed=!1,this.onModeChange=null,this.mouseDX=0,this.mouseDY=0,this._pressed=new Set,this._dragging=!1,this._lastX=null,this._lastY=null,window.addEventListener("keydown",e=>{e.repeat||(["KeyW","KeyA","KeyS","KeyD","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),this.keys.add(e.code),this._pressed.add(e.code))}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>{this.keys.clear(),this._dragging=!1}),window.addEventListener("mousemove",e=>{if(this.locked){this.mouseDX+=e.movementX||0,this.mouseDY+=e.movementY||0;return}this._dragging&&(this._lastX!==null&&(this.mouseDX+=e.clientX-this._lastX,this.mouseDY+=e.clientY-this._lastY),this._lastX=e.clientX,this._lastY=e.clientY)}),this.dom.addEventListener("mousedown",e=>{this.locked||(this._dragging=!0,this._lastX=e.clientX,this._lastY=e.clientY)}),window.addEventListener("mouseup",()=>{this._dragging=!1,this._lastX=null,this._lastY=null}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.dom,this._setMode(this.locked?"locked":"drag"),this.locked||this.keys.clear()}),document.addEventListener("pointerlockerror",()=>{this.lockFailed=!0,this._setMode("drag")})}_setMode(t){var e;this.mode!==t&&(this.mode=t,(e=this.onModeChange)==null||e.call(this,t))}async requestLock(){if(!this.dom.requestPointerLock)return this.lockFailed=!0,this._setMode("drag"),!1;try{const t=this.dom.requestPointerLock({unadjustedMovement:!1});return t&&typeof t.then=="function"&&await t,!0}catch{return this.lockFailed=!0,this._setMode("drag"),!1}}down(t){return this.keys.has(t)}consumePress(t){return this._pressed.has(t)?(this._pressed.delete(t),!0):!1}keyboardLook(){let t=0,e=0;return this.down("ArrowLeft")&&(t+=1),this.down("ArrowRight")&&(t-=1),this.down("ArrowUp")&&(e+=1),this.down("ArrowDown")&&(e-=1),{yaw:t,pitch:e}}endFrame(){this.mouseDX=0,this.mouseDY=0,this._pressed.clear()}}const ke=3.2,Pr=.18,uo=2.15,br=.95,jl=2.15,Cs=[{id:"hall",name:"Entrance Hall",rect:[9,0,15,7],tone:"formal"},{id:"dining",name:"Dining Room",rect:[0,0,9,6],tone:"formal"},{id:"morning",name:"Morning Room",rect:[15,0,22,6],tone:"formal"},{id:"drawing",name:"Drawing Room",rect:[0,6,9,13],tone:"formal"},{id:"library",name:"Library",rect:[15,6,22,13],tone:"formal"},{id:"stairhall",name:"Stair Hall",rect:[9,7,15,13],tone:"formal"},{id:"svccorr",name:"Service Corridor",rect:[0,13,22,15],tone:"cold"},{id:"kitchen",name:"Kitchen",rect:[15,15,22,21],tone:"service"},{id:"scullery",name:"Scullery",rect:[11,15,15,19],tone:"service"},{id:"larder",name:"Larder",rect:[11,19,15,21],tone:"service"},{id:"servants",name:"Servants' Hall",rect:[4,15,11,21],tone:"cold"},{id:"backstair",name:"Back Stair",rect:[0,15,4,19],tone:"cold"},{id:"bootroom",name:"Boot Room",rect:[0,19,4,21],tone:"cold"}],Jl=[{id:"front",axis:"x",c:0,a:11.5,b:12.45,kind:"door"},{id:"service_entrance",axis:"x",c:21,a:1.2,b:2.15,kind:"door"},{id:"hall_dining",axis:"z",c:9,a:2.5,b:3.45,kind:"door"},{id:"hall_morning",axis:"z",c:15,a:2.5,b:3.45,kind:"door"},{id:"hall_stair",axis:"x",c:7,a:11.3,b:12.65,kind:"arch"},{id:"dining_drawing",axis:"x",c:6,a:3,b:3.95,kind:"door"},{id:"morning_library",axis:"x",c:6,a:18,b:18.95,kind:"door"},{id:"stair_drawing",axis:"z",c:9,a:9,b:9.95,kind:"door"},{id:"stair_library",axis:"z",c:15,a:9,b:9.95,kind:"door"},{id:"baize",axis:"x",c:13,a:11.5,b:12.45,kind:"door"},{id:"drawing_svc",axis:"x",c:13,a:3,b:3.95,kind:"door"},{id:"library_svc",axis:"x",c:13,a:18,b:18.95,kind:"door"},{id:"svc_kitchen",axis:"x",c:15,a:17.5,b:18.45,kind:"door"},{id:"svc_scullery",axis:"x",c:15,a:12.4,b:13.35,kind:"door"},{id:"svc_servants",axis:"x",c:15,a:6.5,b:7.45,kind:"door"},{id:"svc_backstair",axis:"x",c:15,a:1.2,b:2.15,kind:"door"},{id:"kitchen_scullery",axis:"z",c:15,a:16.4,b:17.35,kind:"arch"},{id:"scullery_larder",axis:"x",c:19,a:12.4,b:13.35,kind:"arch"},{id:"servants_backstair",axis:"z",c:4,a:16,b:16.95,kind:"door"},{id:"backstair_boot",axis:"x",c:19,a:1.2,b:2.15,kind:"door"},{id:"w_dining_n1",axis:"x",c:0,a:2,b:3.4,kind:"window"},{id:"w_dining_n2",axis:"x",c:0,a:5.4,b:6.8,kind:"window"},{id:"w_hall_n1",axis:"x",c:0,a:9.7,b:10.7,kind:"window"},{id:"w_hall_n2",axis:"x",c:0,a:13.3,b:14.3,kind:"window"},{id:"w_morning_n1",axis:"x",c:0,a:16.4,b:17.8,kind:"window"},{id:"w_morning_n2",axis:"x",c:0,a:19,b:20.4,kind:"window"},{id:"w_dining_w",axis:"z",c:0,a:2,b:3.4,kind:"window"},{id:"w_drawing_w1",axis:"z",c:0,a:7.4,b:8.8,kind:"window"},{id:"w_drawing_w2",axis:"z",c:0,a:10.3,b:11.7,kind:"window"},{id:"w_morning_e",axis:"z",c:22,a:2,b:3.4,kind:"window"},{id:"w_library_e1",axis:"z",c:22,a:7.4,b:8.8,kind:"window"},{id:"w_library_e2",axis:"z",c:22,a:10.3,b:11.7,kind:"window"},{id:"w_kitchen_e",axis:"z",c:22,a:16.5,b:17.9,kind:"window"},{id:"w_kitchen_s",axis:"x",c:21,a:17,b:18.6,kind:"window"},{id:"w_larder_s",axis:"x",c:21,a:12.2,b:13.4,kind:"window"},{id:"w_servants_s",axis:"x",c:21,a:6,b:7.6,kind:"window"}],W0=[{id:"l_hall",room:"hall",pos:[12,2.75,3.2],color:16764826,intensity:44,on:!0},{id:"l_dining",room:"dining",pos:[4.5,2.75,3],color:16763278,intensity:36,on:!1},{id:"l_morning",room:"morning",pos:[18.5,2.75,3],color:16763278,intensity:32,on:!1},{id:"l_drawing",room:"drawing",pos:[4.5,2.75,9.5],color:16763278,intensity:38,on:!1},{id:"l_library",room:"library",pos:[18.5,2.75,9.5],color:16177582,intensity:30,on:!1},{id:"l_stairhall",room:"stairhall",pos:[12,2.8,10],color:16048320,intensity:26,on:!1},{id:"l_svc_w",room:"svccorr",pos:[5,2.85,14],color:15786692,intensity:20,on:!1},{id:"l_svc_e",room:"svccorr",pos:[17,2.85,14],color:15786692,intensity:20,on:!1},{id:"l_kitchen",room:"kitchen",pos:[18.5,2.75,18],color:16769976,intensity:42,on:!1},{id:"l_scullery",room:"scullery",pos:[13,2.75,17],color:15654331,intensity:22,on:!1},{id:"l_servants",room:"servants",pos:[7.5,2.75,18],color:15916468,intensity:26,on:!1},{id:"l_backstair",room:"backstair",pos:[2,2.75,17],color:15258800,intensity:18,on:!1}],bn=ke,Ql=[{id:"landing",name:"Landing",rect:[9,7,15,13],tone:"formal"},{id:"bath",name:"Bathroom",rect:[9,0,12,7],tone:"service"},{id:"linen",name:"Linen Store",rect:[12,0,15,7],tone:"cold"},{id:"bed_mara",name:"Bedroom",rect:[0,0,9,6],tone:"formal"},{id:"bed_tobias",name:"Bedroom",rect:[15,0,22,6],tone:"formal"},{id:"bed_elinor",name:"Bedroom",rect:[0,6,9,13],tone:"formal"},{id:"bed_spare",name:"Bedroom",rect:[15,6,22,13],tone:"formal"},{id:"treatment",name:"Treatment Corridor",rect:[0,13,22,15],tone:"cold"},{id:"svc_bed_a",name:"Servant's Room",rect:[15,15,22,21],tone:"cold"},{id:"svc_bed_b",name:"Servant's Room",rect:[11,15,15,21],tone:"cold"},{id:"svc_bed_c",name:"Servant's Room",rect:[4,15,11,21],tone:"cold"},{id:"upper_stair",name:"Back Landing",rect:[0,15,4,21],tone:"cold"}],X0=[{id:"f1_land_bath",axis:"x",c:7,a:10,b:10.95,kind:"door"},{id:"f1_land_linen",axis:"x",c:7,a:13,b:13.95,kind:"door"},{id:"f1_bath_linen",axis:"z",c:12,a:2,b:2.95,kind:"door"},{id:"f1_land_west",axis:"z",c:9,a:11.2,b:12.15,kind:"door"},{id:"f1_land_east",axis:"z",c:15,a:11.2,b:12.15,kind:"door"},{id:"f1_mara_bath",axis:"x",c:6,a:3,b:3.95,kind:"door"},{id:"f1_tobias_spare",axis:"x",c:6,a:18,b:18.95,kind:"door"},{id:"f1_land_treat",axis:"x",c:13,a:9.6,b:10.55,kind:"door"},{id:"f1_elinor_treat",axis:"x",c:13,a:3,b:3.95,kind:"door"},{id:"f1_spare_treat",axis:"x",c:13,a:18,b:18.95,kind:"door"},{id:"f1_treat_a",axis:"x",c:15,a:17.5,b:18.45,kind:"door"},{id:"f1_treat_b",axis:"x",c:15,a:12.4,b:13.35,kind:"door"},{id:"f1_treat_c",axis:"x",c:15,a:6.5,b:7.45,kind:"door"},{id:"f1_treat_stair",axis:"x",c:15,a:1.2,b:2.15,kind:"arch"},{id:"f1_w_mara_n",axis:"x",c:0,a:2,b:3.4,kind:"window"},{id:"f1_w_mara_n2",axis:"x",c:0,a:5.4,b:6.8,kind:"window"},{id:"f1_w_bath_n",axis:"x",c:0,a:10,b:11,kind:"window"},{id:"f1_w_tobias_n",axis:"x",c:0,a:16.4,b:17.8,kind:"window"},{id:"f1_w_tobias_n2",axis:"x",c:0,a:19,b:20.4,kind:"window"},{id:"f1_w_mara_w",axis:"z",c:0,a:2,b:3.4,kind:"window"},{id:"f1_w_elinor_w",axis:"z",c:0,a:8,b:9.4,kind:"window"},{id:"f1_w_tobias_e",axis:"z",c:22,a:2,b:3.4,kind:"window"},{id:"f1_w_spare_e",axis:"z",c:22,a:8,b:9.4,kind:"window"},{id:"f1_w_svca_s",axis:"x",c:21,a:17,b:18.4,kind:"window"},{id:"f1_w_svcc_s",axis:"x",c:21,a:6,b:7.4,kind:"window"}],q0=[{id:"f1_l_landing",room:"landing",pos:[12,2.75,10.5],color:16048320,intensity:28,on:!1},{id:"f1_l_mara",room:"bed_mara",pos:[4.5,2.75,3],color:16763278,intensity:30,on:!1},{id:"f1_l_tobias",room:"bed_tobias",pos:[18.5,2.75,3],color:16763278,intensity:30,on:!1},{id:"f1_l_elinor",room:"bed_elinor",pos:[4.5,2.75,9.5],color:16763278,intensity:28,on:!1},{id:"f1_l_spare",room:"bed_spare",pos:[18.5,2.75,9.5],color:16177582,intensity:26,on:!1},{id:"f1_l_bath",room:"bath",pos:[10.5,2.75,3.5],color:15658717,intensity:24,on:!1},{id:"f1_l_treat_w",room:"treatment",pos:[5,2.85,14],color:15260864,intensity:16,on:!1},{id:"f1_l_treat_e",room:"treatment",pos:[17,2.85,14],color:15260864,intensity:16,on:!1},{id:"f1_l_svca",room:"svc_bed_a",pos:[18.5,2.75,18],color:15916468,intensity:20,on:!1},{id:"f1_l_svcc",room:"svc_bed_c",pos:[7.5,2.75,18],color:15916468,intensity:20,on:!1}],th=[{id:"attic_stair",name:"Attic Stair",rect:[0,15,4,21],tone:"cold"},{id:"attic_corr",name:"Attic Passage",rect:[0,13,22,15],tone:"cold"},{id:"attic_west",name:"Box Room",rect:[4,15,12,21],tone:"cold"},{id:"attic_east",name:"Tank Room",rect:[12,15,22,21],tone:"cold"}],Y0=[{id:"f2_stair_corr",axis:"x",c:15,a:1.2,b:2.15,kind:"arch"},{id:"f2_corr_west",axis:"x",c:15,a:7,b:7.95,kind:"door"},{id:"f2_corr_east",axis:"x",c:15,a:16.5,b:17.45,kind:"door"},{id:"f2_west_east",axis:"z",c:12,a:17,b:17.95,kind:"door"},{id:"f2_w_west_s",axis:"x",c:21,a:6,b:7.2,kind:"window"},{id:"f2_w_east_s",axis:"x",c:21,a:16,b:17.2,kind:"window"},{id:"f2_w_corr_n",axis:"x",c:13,a:9.6,b:10.8,kind:"window"},{id:"f2_w_east_e",axis:"z",c:22,a:17,b:18.2,kind:"window"}],Z0=[{id:"f2_l_stair",room:"attic_stair",pos:[2,2.6,18],color:15258800,intensity:14,on:!1},{id:"f2_l_corr",room:"attic_corr",pos:[11,2.7,14],color:15260864,intensity:14,on:!1},{id:"f2_l_west",room:"attic_west",pos:[8,2.6,18],color:15785148,intensity:18,on:!1},{id:"f2_l_east",room:"attic_east",pos:[17,2.6,18],color:15127214,intensity:16,on:!1}];function Lo({centreX:i,centreZ:t,width:e,fromY:n,steps:s=16,rise:r=.2,going:a=.24}){return{centreX:i,centreZ:t,width:e,fromY:n,steps:s,rise:r,going:a,get run(){return this.steps*this.going},get bottomZ(){return this.centreZ+this.run/2},get topZ(){return this.centreZ-this.run/2},get minX(){return this.centreX-this.width/2},get maxX(){return this.centreX+this.width/2},get toY(){return this.fromY+bn}}}const eh=[{id:"cellar_stair",name:"Cellar Stair",rect:[0,15,4,21],tone:"service"},{id:"cellar",name:"Cellar",rect:[4,15,12,21],tone:"service"},{id:"pump_room",name:"Pump Room",rect:[12,15,17,21],tone:"service"},{id:"cistern",name:"The Cistern",rect:[17,15,22,21],tone:"service"}],$0=[{id:"b1_stair_cellar",axis:"z",c:4,a:19.2,b:20.4,kind:"arch"},{id:"b1_cellar_pump",axis:"z",c:12,a:17,b:17.95,kind:"door"},{id:"b1_pump_cistern",axis:"z",c:17,a:17,b:17.95,kind:"door"}],K0=[{id:"b1_l_stair",room:"cellar_stair",pos:[2,2.4,17],color:14206108,intensity:12,on:!1},{id:"b1_l_cellar",room:"cellar",pos:[8,2.4,18],color:14206108,intensity:14,on:!1},{id:"b1_l_pump",room:"pump_room",pos:[14.5,2.4,18],color:13351060,intensity:12,on:!1},{id:"b1_l_cistern",room:"cistern",pos:[19.5,2.4,18],color:12174528,intensity:10,on:!1}],tn={x:19.5,z:18.4,w:1.5,d:1.5},Ji=Lo({centreX:12,centreZ:9.95,width:1.05,fromY:0}),qi=Lo({centreX:2,centreZ:18,width:.88,fromY:bn}),qe=Lo({centreX:.78,centreZ:17.48,width:.92,fromY:-bn,steps:13,rise:.2462,going:.22}),j0=[Ji,qi,qe];function J0(i,t,e){return t>=i.minX-.06&&t<=i.maxX+.06&&e>=i.topZ-.1&&e<=i.bottomZ+.35}function Q0(i,t){const e=(i.bottomZ-t)/i.run;return i.fromY+Math.max(0,Math.min(1,e))*bn}function Uo(i,t,e){for(const n of i){const[s,r,a,o]=n.rect;if(t>=s&&t<=a&&e>=r&&e<=o)return n}return null}function nh(i,t){return Uo(Ql,i,t)}function ih(i,t){return Uo(th,i,t)}function sh(i,t){return Uo(eh,i,t)}const rh=[sh,as,nh,ih];function Yi(i,t,e){for(const s of j0)if(J0(s,i,t)&&!(e<s.fromY-.6||e>s.toY+.6))return Q0(s,t);const n=Math.max(-1,Math.min(2,Math.round(e/bn)));return rh[n+1](i,t)?n*bn:null}const pa={x:11.97,z:1.3,yaw:Math.PI},vi={minX:-.4,maxX:22.4,minZ:-.4,maxZ:21.4};function as(i,t){for(const e of Cs){const[n,s,r,a]=e.rect;if(i>=n&&i<=r&&t>=s&&t<=a)return e}return null}function ah(i,t){const e=vi;return i>e.minX&&i<e.maxX&&t>e.minZ&&t<e.maxZ}const ma=1.66,tg=1.02,ga=.3,eg=.34,ng=1.9,ig=3.5,sg=1.05;class rg{constructor(t,e,n){this.camera=t,this.input=e,this.colliders=n,this.pos=new I(pa.x,ma,pa.z),this.feetY=0,this.vel=new Bt(0,0),this.yaw=pa.yaw,this.pitch=0,this.height=ma,this.crouching=!1,this.sprinting=!1,this.stamina=1,this.staminaHold=0,this.bob=0,this.bobAmount=0,this.flinch=0,this.flinchT=0,this.flinchAmt=0,this.flinchYaw=0,this.flinchPitch=0,this.fear=0,this.distanceWalked=0,this.frozen=!1,this.sensitivity=.0021,this.torch=null}get noise(){return this.vel.length()<.15?0:this.crouching?.12:this.sprinting?1:.4}update(t){this._look(t),this._move(t),this._updateReaction(t),this._breath(t),this._applyCamera(t)}_look(t){const{input:e}=this;this.yaw-=e.mouseDX*this.sensitivity,this.pitch-=e.mouseDY*this.sensitivity;const n=e.keyboardLook();this.yaw+=n.yaw*1.9*t,this.pitch+=n.pitch*1.3*t;const s=Math.PI/2-.04;this.pitch=Math.max(-s,Math.min(s,this.pitch))}_move(t){const{input:e}=this;let n=0,s=0;this.frozen||(e.down("KeyW")&&(s+=1),e.down("KeyS")&&(s-=1),e.down("KeyD")&&(n+=1),e.down("KeyA")&&(n-=1)),e.consumePress("KeyC")&&(this.crouching=!this.crouching);const r=e.down("ShiftLeft")||e.down("ShiftRight");this.sprinting=r&&!this.crouching&&this.stamina>.08&&(n||s),this.sprinting&&(this.crouching=!1);const a=this.crouching?tg:ma;this.height+=(a-this.height)*Math.min(1,t*9);let o=ng;this.crouching?o=sg:this.sprinting&&(o=ig);const c=Math.hypot(n,s)||1,l=new Bt(-Math.sin(this.yaw),-Math.cos(this.yaw)),h=new Bt(Math.cos(this.yaw),-Math.sin(this.yaw)),d=new Bt((l.x*s+h.x*n)/c*o,(l.y*s+h.y*n)/c*o),u=n||s?11:14;this.vel.lerp(d,Math.min(1,u*t)),this.vel.lengthSq()<1e-5&&this.vel.set(0,0);const p=this.vel.x*t,g=this.vel.y*t;this.distanceWalked+=Math.hypot(p,g),this._slide(p,g),this._settleOnFloor(t)}_settleOnFloor(t){const e=Yi(this.pos.x,this.pos.z,this.feetY);if(e===null)return;const n=e-this.feetY;n>eg||(this.feetY+=n*Math.min(1,t*12),Math.abs(e-this.feetY)<.004&&(this.feetY=e),this.pos.y=this.feetY+this.height)}_slide(t,e){this.pos.x+=t,this._resolveAxis("x"),this.pos.z+=e,this._resolveAxis("z")}_resolveAxis(t){const e=this.feetY+this.height;for(const n of this.colliders){if(n.door&&n.door.angle>.45||n.minY!==void 0&&(n.maxY<=this.feetY+.1||n.minY>=e))continue;const s=Math.max(n.minX,Math.min(this.pos.x,n.maxX)),r=Math.max(n.minZ,Math.min(this.pos.z,n.maxZ)),a=this.pos.x-s,o=this.pos.z-r,c=a*a+o*o;if(c>=ga*ga||c===0)continue;const l=Math.sqrt(c),h=ga-l;t==="x"?(this.pos.x+=a/l*h,this.vel.x=0):(this.pos.z+=o/l*h,this.vel.y=0)}}_breath(t){this.sprinting?(this.stamina=Math.max(0,this.stamina-t*.19),this.staminaHold=0):(this.staminaHold+=t,this.staminaHold>1.6&&(this.stamina=Math.min(1,this.stamina+t*.12)))}startle(t=.6,e=null){const n=Math.max(0,Math.min(1,t));this.flinch=Math.max(this.flinch,n),this.flinchT=0,this.fear=Math.min(1,this.fear+n*.85);let s=(Math.random()-.5)*.5;if(e){const a=Math.atan2(e.x-this.pos.x,e.z-this.pos.z);let o=(this.yaw-Math.PI-a+Math.PI*3)%(Math.PI*2)-Math.PI;s=Math.sign(o||1)*(.16+.22*n)}this.flinchYaw=s,this.flinchPitch=-(.1+.16*n);const r=this.forward();this.vel.x-=r.x*1.5*n,this.vel.y-=r.z*1.5*n}_updateReaction(t){if(this.flinch>0){this.flinchT+=t;const e=this.flinchT,n=e<.09?e/.09:Math.max(0,1-(e-.09)/(.55+this.flinch*.5));this.flinchAmt=n*this.flinch,n<=0&&(this.flinch=0,this.flinchAmt=0)}this.fear=Math.max(0,this.fear-t*.035)}_applyCamera(t){const e=this.vel.length(),n=e>.2?this.sprinting?.055:.028:0;this.bobAmount+=(n-this.bobAmount)*Math.min(1,t*6),this.bob+=t*e*(this.sprinting?8.5:6.5);const s=Math.sin(this.bob)*this.bobAmount,r=Math.cos(this.bob*.5)*this.bobAmount*.18,a=this.flinchAmt,o=this.fear*.006,c=o*Math.sin(this.bob*11+1.7),l=o*Math.sin(this.bob*13);this.camera.position.set(this.pos.x,this.feetY+this.height+s,this.pos.z),this.camera.rotation.set(0,0,0),this.camera.rotateY(this.yaw+this.flinchYaw*a+c),this.camera.rotateX(this.pitch+this.flinchPitch*a+l),this.camera.rotateZ(r+this.flinchYaw*a*.5)}forward(){return new I(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}isLookingAt(t,e=.72){return new I().subVectors(t,this.camera.position).normalize().dot(this.forward())>e}}class ag{constructor(){this.ctx=null,this.master=null,this.ambientGain=null,this.listener=null,this.ready=!1,this.noiseBuffer=null}init(){this.ready||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.limiter=this.ctx.createDynamicsCompressor(),this.limiter.threshold.value=-1,this.limiter.knee.value=3,this.limiter.ratio.value=3.5,this.limiter.attack.value=.003,this.limiter.release.value=.25,this.limiter.connect(this.ctx.destination),this.master=this.ctx.createGain(),this.master.gain.value=1,this.master.connect(this.limiter),this.ambientGain=this.ctx.createGain(),this.ambientGain.gain.value=1,this.ambientGain.connect(this.master),this.listener=this.ctx.listener,this.noiseBuffer=this._makeNoise(4),this._startWind(),this._startSeaAndRoom(),this.ready=!0,this._loadSamples())}_loadSamples(){this.samples={},this.sampleInfo={};const t={cryWoman:"cry_woman.ogg",cryWoman2:"cry_woman2.ogg",cryMale:"cry_male.ogg",screamWoman:"scream_woman.mp3",rightBehindYou:"right_behind_you.mp3",yameteKudasai:"yamete_kudasai.mp3",doorOpen:"door_open.mp3",doorClose:"door_close.mp3",doorCreak:"door_creak.mp3",doorSlam:"door_slam.mp3",ambientHouse:"ambient_house.mp3",moanAttic:"moan_attic.mp3",whisperMara1:"whisper_mara1.m4a",whisperMara2:"whisper_mara2.m4a",whisperPaint1:"whisper_paint1.m4a",whisperPaint2:"whisper_paint2.m4a",whisperFemale:"whisper_female.mp3",whisperCreepy:"whisper_creepy.mp3",vocalFry1:"vocal_fry1.m4a",vocalFry2:"vocal_fry2.m4a",girlLaugh:"girl_laugh.mp3",cryLoud:"cry_loud.mp3",jumpscare:"jumpscare.mp3"},e="/saltmere/audio/";for(const[n,s]of Object.entries(t))fetch(e+s).then(r=>r.ok?r.arrayBuffer():Promise.reject(r.status)).then(r=>this.ctx.decodeAudioData(r)).then(r=>{this.samples[n]=r,this.sampleInfo[n]=this._analyseSample(r)}).catch(()=>{})}_analyseSample(t){const e=t.getChannelData(0);let n=0;for(let h=0;h<e.length;h++){const d=Math.abs(e[h]);d>n&&(n=d)}const s=Math.floor(t.sampleRate*.5),r=[];let a=0;const o=[];for(let h=0;h+s<e.length;h+=s){let d=0;for(let p=h;p<h+s;p++)d+=e[p]*e[p];const u=Math.sqrt(d/s);o.push({t:h/t.sampleRate,r:u}),u>a&&(a=u)}let c=0;for(const h of o)h.r>a*.45&&(r.push(h.t),c+=h.r);const l=r.length?c/r.length:a;return{peak:n,loudRms:l,norm:l>.005?Math.max(.3,Math.min(6,.26/l)):1,loudOffsets:r.length?r:[0]}}loudOffset(t){var n;const e=(n=this.sampleInfo)==null?void 0:n[t];return e?e.loudOffsets[Math.floor(Math.random()*e.loudOffsets.length)]:0}hasSample(t){var e;return!!((e=this.samples)!=null&&e[t])}playSample(t,{x:e=0,y:n=1.4,z:s=0,gain:r=1,rate:a=1,offset:o=0,duration:c,fadeIn:l=.02,when:h=0}={}){var f,S,b;const d=(f=this.samples)==null?void 0:f[t];if(!this.ready||!d)return null;const u=this.ctx.currentTime+h,p=this.ctx.createBufferSource();p.buffer=d,p.playbackRate.value=a;const g=((b=(S=this.sampleInfo)==null?void 0:S[t])==null?void 0:b.norm)??1,_=this.ctx.createGain();_.gain.setValueAtTime(1e-4,u),_.gain.linearRampToValueAtTime(r*g,u+Math.max(.005,l)),p.connect(_).connect(this._panner(e,n,s)).connect(this.master);const m=c??d.duration/a-o;return p.start(u,o,Math.max(.05,m)),{src:p,gain:_,startsAt:u}}playOneOf(t,e={}){const n=t.filter(r=>this.hasSample(r));if(!n.length)return null;let s=n[Math.floor(Math.random()*n.length)];return n.length>1&&s===this._lastOneOf&&(s=n[(n.indexOf(s)+1)%n.length]),this._lastOneOf=s,this.playSample(s,e)}startBed(t,e=.12){if(!this.ready||!this.hasSample(t))return null;if(this._beds??(this._beds=new Map),this._beds.has(t))return this._beds.get(t);const n=this.ctx.createBufferSource();n.buffer=this.samples[t],n.loop=!0;const s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,this.ctx.currentTime),s.gain.linearRampToValueAtTime(e,this.ctx.currentTime+3),n.connect(s).connect(this.master),n.start(this.ctx.currentTime+.05);const r={src:n,gain:s,target:e};return this._beds.set(t,r),r}setBedGain(t,e,n=1.5){var a;const s=(a=this._beds)==null?void 0:a.get(t);if(!s)return;const r=this.ctx.currentTime;s.gain.gain.cancelScheduledValues(r),s.gain.gain.setValueAtTime(Math.max(1e-4,s.gain.gain.value),r),s.gain.gain.linearRampToValueAtTime(Math.max(1e-4,e),r+n),s.target=e}resume(){var t;((t=this.ctx)==null?void 0:t.state)==="suspended"&&this.ctx.resume()}_makeNoise(t){const e=Math.floor(this.ctx.sampleRate*t),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0);for(let r=0;r<e;r++)s[r]=Math.random()*2-1;return n}_startWind(){const t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer,t.loop=!0;const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=320,e.Q.value=.4;const n=this.ctx.createGain();n.gain.value=.095,t.connect(e).connect(n).connect(this.ambientGain),t.start();const s=this.ctx.createOscillator();s.frequency.value=.055;const r=this.ctx.createGain();r.gain.value=.07,s.connect(r).connect(n.gain),s.start(),this.wind={gain:n,lp:e}}_startSeaAndRoom(){const t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer,t.loop=!0;const e=this.ctx.createBiquadFilter();e.type="bandpass",e.frequency.value=180,e.Q.value=.7;const n=this.ctx.createGain();n.gain.value=.065,t.connect(e).connect(n).connect(this.ambientGain),t.start();const s=this.ctx.createOscillator();s.frequency.value=.09;const r=this.ctx.createGain();r.gain.value=.05,s.connect(r).connect(n.gain),s.start(),this.sea={gain:n}}duck(t=0,e=1.2){if(!this.ready)return;const n=this.ambientGain.gain;n.cancelScheduledValues(this.ctx.currentTime),n.setValueAtTime(n.value,this.ctx.currentTime),n.linearRampToValueAtTime(t,this.ctx.currentTime+e)}_panner(t,e,n){const s=this.ctx.createPanner();return s.panningModel="HRTF",s.distanceModel="inverse",s.refDistance=6,s.maxDistance=60,s.rolloffFactor=.6,s.positionX.value=t,s.positionY.value=e,s.positionZ.value=n,s}setListener(t,e,n={x:0,y:1,z:0}){if(!this.ready)return;const s=this.listener,r=this.ctx.currentTime;s.positionX?(s.positionX.setValueAtTime(t.x,r),s.positionY.setValueAtTime(t.y,r),s.positionZ.setValueAtTime(t.z,r),s.forwardX.setValueAtTime(e.x,r),s.forwardY.setValueAtTime(e.y,r),s.forwardZ.setValueAtTime(e.z,r),s.upX.setValueAtTime(n.x,r),s.upY.setValueAtTime(n.y,r),s.upZ.setValueAtTime(n.z,r)):(s.setPosition(t.x,t.y,t.z),s.setOrientation(e.x,e.y,e.z,n.x,n.y,n.z))}burst({x:t=0,y:e=1,z:n=0,freq:s=400,q:r=1.2,gain:a=.3,attack:o=.004,decay:c=.16,type:l="bandpass"}){if(!this.ready)return;const h=this.ctx.createBufferSource();h.buffer=this.noiseBuffer,h.loop=!0;const d=this.ctx.createBiquadFilter();d.type=l,d.frequency.value=s,d.Q.value=r;const u=this.ctx.createGain(),p=this.ctx.currentTime;u.gain.setValueAtTime(0,p),u.gain.linearRampToValueAtTime(a,p+o),u.gain.exponentialRampToValueAtTime(1e-4,p+o+c),h.connect(d).connect(u).connect(this._panner(t,e,n)).connect(this.master),h.start(),h.stop(p+o+c+.05)}footstep(t,e,{crouched:n=!1,running:s=!1,hard:r=!1}={}){const a=r?900:260+Math.random()*90,o=n?.14:s?.34:.22;this.burst({x:t,y:.1,z:e,freq:a,q:1,gain:o,decay:r?.1:.13}),!n&&Math.random()<.35&&this.burst({x:t,y:.1,z:e,freq:90+Math.random()*60,q:3.5,gain:o*.5,decay:.22})}creak(t,e,n,s=1){if(!this.ready)return;const r=this.ctx.createOscillator();r.type="sawtooth";const a=55+Math.random()*70,o=this.ctx.currentTime,c=.5+Math.random()*.9;r.frequency.setValueAtTime(a,o),r.frequency.linearRampToValueAtTime(a*(1.1+Math.random()*.5),o+c);const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=700;const h=this.ctx.createGain();h.gain.setValueAtTime(0,o),h.gain.linearRampToValueAtTime(.2*s,o+c*.3),h.gain.exponentialRampToValueAtTime(1e-4,o+c),r.connect(l).connect(h).connect(this._panner(t,e,n)).connect(this.master),r.start(o),r.stop(o+c+.05)}knock(t,e,n,s=3,r=1.9){if(this.ready)for(let a=0;a<s;a++)setTimeout(()=>{const o=this.ctx.currentTime,c=this._panner(t,e,n),l=this.ctx.createGain();l.gain.value=r,l.connect(c).connect(this.master);const h=this.ctx.createOscillator();h.type="sine",h.frequency.setValueAtTime(196,o),h.frequency.exponentialRampToValueAtTime(58,o+.16);const d=this.ctx.createGain();d.gain.setValueAtTime(.9,o),d.gain.exponentialRampToValueAtTime(1e-4,o+.2),h.connect(d).connect(l),h.start(o),h.stop(o+.26);const u=this.ctx.createBufferSource();u.buffer=this.noiseBuffer;const p=this.ctx.createBiquadFilter();p.type="highpass",p.frequency.value=900;const g=this.ctx.createGain();g.gain.setValueAtTime(.55,o),g.gain.exponentialRampToValueAtTime(1e-4,o+.055),u.connect(p).connect(g).connect(l),u.start(o),u.stop(o+.1);const _=this.ctx.createOscillator();_.type="triangle",_.frequency.value=88+Math.random()*26;const m=this.ctx.createGain();m.gain.setValueAtTime(.5,o),m.gain.exponentialRampToValueAtTime(1e-4,o+.34),_.connect(m).connect(l),_.start(o),_.stop(o+.4)},a*(330+Math.random()*120))}breath(t,e,n,{inhale:s=!0,gain:r=.7}={}){if(!this.ready)return;const a=this.ctx.createBufferSource();a.buffer=this.noiseBuffer;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.value=s?620:380,o.Q.value=.9;const c=this.ctx.createGain(),l=this.ctx.currentTime,h=1.1+Math.random()*.5;c.gain.setValueAtTime(0,l),c.gain.linearRampToValueAtTime(r,l+h*.45),c.gain.linearRampToValueAtTime(1e-4,l+h),a.connect(o).connect(c).connect(this._panner(t,e,n)).connect(this.master),a.start(l),a.stop(l+h+.05)}crying(t,e,n,{sobs:s=5,gain:r=2,voice:a="girl"}={}){if(!this.ready)return;const o=this.hasSample("cryWoman2")&&Math.random()<.5?"cryWoman2":"cryWoman";if(this.hasSample(o)){const p=a==="girl"?1.28+Math.random()*.2:.92+Math.random()*.14,g=this.samples[o],_=Math.min(g.duration/p,.9+s*.45),m=Math.min(this.loudOffset(o),Math.max(0,g.duration-_*p-.2));this.playSample(o,{x:t,y:e,z:n,gain:r*2.2,rate:p,offset:m,duration:_,fadeIn:.08});return}const c=a==="woman"?{f0:235,formants:[[560,7,1],[1720,9,.6],[2810,11,.3]],breath:1500}:{f0:355,formants:[[680,8,1],[2180,10,.62],[3400,12,.34]],breath:2100},l=this.ctx.currentTime,h=this._panner(t,e,n),d=this.ctx.createGain();d.gain.value=r,d.connect(h).connect(this.master);let u=l;for(let p=0;p<s;p++){const g=.26+Math.random()*.22,_=.13+Math.random()*.09,m=this.ctx.createBufferSource();m.buffer=this.noiseBuffer;const f=this.ctx.createBiquadFilter();f.type="bandpass",f.frequency.setValueAtTime(c.breath*.6,u),f.frequency.linearRampToValueAtTime(c.breath,u+_),f.Q.value=.8;const S=this.ctx.createGain();S.gain.setValueAtTime(1e-4,u),S.gain.linearRampToValueAtTime(.3,u+_*.7),S.gain.exponentialRampToValueAtTime(1e-4,u+_),m.connect(f).connect(S).connect(d),m.start(u),m.stop(u+_+.02);const b=u+_,M=this.ctx.createGain(),D=.55+Math.random()*.45;M.gain.setValueAtTime(1e-4,b),M.gain.linearRampToValueAtTime(D,b+.045),M.gain.exponentialRampToValueAtTime(1e-4,b+g),M.connect(d);const A=[];for(const[G,Y,W]of c.formants){const j=this.ctx.createBiquadFilter();j.type="bandpass",j.frequency.value=G,j.Q.value=Y;const H=this.ctx.createGain();H.gain.value=W,j.connect(H).connect(M),A.push(j)}const T=this.ctx.createOscillator();T.type="sawtooth";const C=c.f0*(.9+Math.random()*.28);T.frequency.setValueAtTime(C*1.14,b),T.frequency.exponentialRampToValueAtTime(C*.82,b+g);const w=this.ctx.createBiquadFilter();w.type="lowpass",w.frequency.value=3600,w.Q.value=.5,T.connect(w);for(const G of A)w.connect(G);const v=this.ctx.createBufferSource();v.buffer=this.noiseBuffer;const R=this.ctx.createBiquadFilter();R.type="bandpass",R.frequency.value=c.breath,R.Q.value=.7;const z=this.ctx.createGain();z.gain.setValueAtTime(.1,b),z.gain.exponentialRampToValueAtTime(1e-4,b+g),v.connect(R).connect(z).connect(M),v.start(b),v.stop(b+g+.02),T.start(b),T.stop(b+g+.02);const k=.16+Math.random()*.26+(Math.random()<.22?.45:0);u=b+g+k}}stomp(t,e,n,s=2.2){if(!this.ready)return;const r=this.ctx.currentTime,a=this.ctx.createGain();a.gain.value=s,a.connect(this._panner(t,e,n)).connect(this.master);const o=this.ctx.createOscillator();o.type="sine",o.frequency.setValueAtTime(132,r),o.frequency.exponentialRampToValueAtTime(38,r+.24);const c=this.ctx.createGain();c.gain.setValueAtTime(1,r),c.gain.exponentialRampToValueAtTime(1e-4,r+.34),o.connect(c).connect(a),o.start(r),o.stop(r+.4);const l=this.ctx.createOscillator();l.type="triangle",l.frequency.value=74+Math.random()*22;const h=this.ctx.createGain();h.gain.setValueAtTime(.6,r),h.gain.exponentialRampToValueAtTime(1e-4,r+.5),l.connect(h).connect(a),l.start(r),l.stop(r+.55);const d=this.ctx.createBufferSource();d.buffer=this.noiseBuffer;const u=this.ctx.createBiquadFilter();u.type="highpass",u.frequency.value=600;const p=this.ctx.createGain();p.gain.setValueAtTime(.5,r),p.gain.exponentialRampToValueAtTime(1e-4,r+.09),d.connect(u).connect(p).connect(a),d.start(r),d.stop(r+.14)}littleFeet(t,e,n,s,{steps:r=9,gain:a=.85,onArrive:o}={}){if(!this.ready)return;const c=.235;for(let l=0;l<r;l++){const h=l/(r-1),d=t+(n-t)*h,u=e+(s-e)*h;setTimeout(()=>{this.burst({x:d,y:.08,z:u,freq:620+Math.random()*260,q:1.6,gain:a,decay:.07})},l*c*1e3)}o&&setTimeout(o,r*c*1e3+120)}whisper(t,e,n,{gain:s=.6,duration:r=1.8}={}){if(!this.ready)return;const a=this.ctx.currentTime,o=this.ctx.createBufferSource();o.buffer=this.noiseBuffer,o.loop=!0;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(600,a),c.Q.value=6;const l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(1700,a),l.Q.value=8;const h=4+Math.floor(Math.random()*4);for(let u=0;u<h;u++){const p=a+r/h*u;c.frequency.linearRampToValueAtTime(420+Math.random()*380,p),l.frequency.linearRampToValueAtTime(1300+Math.random()*900,p)}const d=this.ctx.createGain();d.gain.setValueAtTime(0,a),d.gain.linearRampToValueAtTime(s,a+.25),d.gain.setValueAtTime(s,a+r-.4),d.gain.linearRampToValueAtTime(1e-4,a+r),o.connect(c).connect(l).connect(d).connect(this._panner(t,e,n)).connect(this.master),o.start(a),o.stop(a+r+.1)}scream(t,e,n,s=2.6){if(!this.ready)return;if(this.hasSample("screamWoman")){this.playSample("screamWoman",{x:t,y:e,z:n,gain:s*.85,rate:.94+Math.random()*.14,fadeIn:.005}),this.burst({x:t,y:e,z:n,freq:74,q:1,gain:s*.5,decay:.5,type:"lowpass"});return}const r=this.ctx.currentTime,a=1.9,o=this._panner(t,e,n),c=this.ctx.createGain();c.gain.setValueAtTime(0,r),c.gain.linearRampToValueAtTime(s,r+.06),c.gain.setValueAtTime(s,r+a*.62),c.gain.exponentialRampToValueAtTime(1e-4,r+a),c.connect(o).connect(this.master);const l=this.ctx.createWaveShaper(),h=new Float32Array(1024);for(let f=0;f<1024;f++){const S=f/512-1;h[f]=Math.tanh(S*5.5)*.85}l.curve=h,l.oversample="4x",l.connect(c);for(const[f,S,b]of[[820,9,1],[1250,11,.72],[2650,13,.45]]){const M=this.ctx.createBiquadFilter();M.type="bandpass",M.frequency.value=f,M.Q.value=S;const D=this.ctx.createGain();D.gain.value=b,M.connect(D).connect(l),this[`_fmt${f}`]=M}const d=f=>{for(const S of[820,1250,2650])f.connect(this[`_fmt${S}`])},u=this.ctx.createOscillator();u.frequency.setValueAtTime(5.2,r),u.frequency.linearRampToValueAtTime(8.4,r+a);const p=this.ctx.createGain();p.gain.setValueAtTime(7,r),p.gain.linearRampToValueAtTime(38,r+a*.75),u.connect(p),u.start(r),u.stop(r+a+.1);for(const f of[0,11]){const S=this.ctx.createOscillator();S.type="sawtooth",S.detune.value=f,S.frequency.setValueAtTime(300,r),S.frequency.exponentialRampToValueAtTime(1180,r+.13),S.frequency.linearRampToValueAtTime(1010,r+a*.55),S.frequency.exponentialRampToValueAtTime(1420,r+a*.66),S.frequency.exponentialRampToValueAtTime(360,r+a),p.connect(S.frequency),d(S),S.start(r),S.stop(r+a+.1)}const g=this.ctx.createBufferSource();g.buffer=this.noiseBuffer,g.loop=!0;const _=this.ctx.createBiquadFilter();_.type="bandpass",_.frequency.setValueAtTime(1400,r),_.frequency.linearRampToValueAtTime(2900,r+a*.7),_.Q.value=1.1;const m=this.ctx.createGain();m.gain.setValueAtTime(1e-4,r),m.gain.linearRampToValueAtTime(.42,r+a*.6),m.gain.exponentialRampToValueAtTime(1e-4,r+a),g.connect(_).connect(m).connect(l),g.start(r),g.stop(r+a+.1),this.burst({x:t,y:e,z:n,freq:74,q:1,gain:s*.5,decay:.5,type:"lowpass"})}_screamLegacy(t,e,n,s=.8){if(!this.ready)return;const r=this.ctx.currentTime,a=1.1,o=this.ctx.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(340,r),o.frequency.exponentialRampToValueAtTime(1250,r+.14),o.frequency.exponentialRampToValueAtTime(480,r+a);const c=this.ctx.createWaveShaper(),l=new Float32Array(256);for(let u=0;u<256;u++){const p=u/128-1;l[u]=Math.tanh(p*4)}c.curve=l;const h=this.ctx.createBiquadFilter();h.type="bandpass",h.frequency.value=1400,h.Q.value=1.4;const d=this.ctx.createGain();d.gain.setValueAtTime(0,r),d.gain.linearRampToValueAtTime(s,r+.05),d.gain.exponentialRampToValueAtTime(1e-4,r+a),o.connect(c).connect(h).connect(d).connect(this._panner(t,e,n)).connect(this.master),o.start(r),o.stop(r+a+.1)}stepsAbove(t,e,n=6,s=.52,r=1,a=0){for(let o=0;o<n;o++)setTimeout(()=>{this.burst({x:t+r*o*.7,y:3.2,z:e+a*o*.7,freq:120,q:2,gain:.85,decay:.2,type:"lowpass"})},o*s*1e3)}}const It=new Map;function Ke(i=512){const t=document.createElement("canvas");return t.width=i,t.height=i,t}function ri(i,t,e=.5,n=90){for(let s=0;s<220;s++){const r=n*(.4+Math.random()*1.6),a=Math.random()*t,o=Math.random()*t,c=Math.random()*.05*e,l=i.createRadialGradient(a,o,0,a,o,r);l.addColorStop(0,`rgba(28,22,16,${c})`),l.addColorStop(1,"rgba(28,22,16,0)"),i.fillStyle=l,i.beginPath(),i.arc(a,o,r,0,Math.PI*2),i.fill()}}function Tn(i,t,e=12){const n=i.getImageData(0,0,t,t),s=n.data;for(let r=0;r<s.length;r+=4){const a=(Math.random()-.5)*e;s[r]+=a,s[r+1]+=a,s[r+2]+=a}i.putImageData(n,0,0)}function An(i,t=[1,1]){const e=new ls(i);return e.wrapS=e.wrapT=wi,e.repeat.set(t[0],t[1]),e.anisotropy=8,e.colorSpace=Ee,e}function og({base:i="#8d7f66",stripe:t="#7b6d54",dado:e="#4d4034"}={}){const n=`stripe:${i}:${t}:${e}`;if(It.has(n))return It.get(n);const s=512,r=Ke(s),a=r.getContext("2d");a.fillStyle=i,a.fillRect(0,0,s,s);const o=26;a.fillStyle=t;for(let d=0;d<s;d+=o*2)a.fillRect(d,0,o,s);a.fillStyle="rgba(255,250,235,0.05)";for(let d=18;d<s;d+=46)for(let u=13;u<s;u+=o*2)a.beginPath(),a.ellipse(u+o,d,5,8,0,0,Math.PI*2),a.fill();const c=s*.66;a.fillStyle=e,a.fillRect(0,c,s,s-c),a.fillStyle="rgba(0,0,0,0.35)",a.fillRect(0,c-6,s,6),a.fillStyle="rgba(255,240,215,0.10)",a.fillRect(0,c-10,s,4),a.fillStyle="#3a3028",a.fillRect(0,s-26,s,26),ri(a,s,.9);const l=a.createLinearGradient(0,s,0,s*.55);l.addColorStop(0,"rgba(38,30,20,0.55)"),l.addColorStop(1,"rgba(38,30,20,0)"),a.fillStyle=l,a.fillRect(0,0,s,s),Tn(a,s,10);const h=An(r,[1,1]);return It.set(n,h),h}function cg({base:i="#8a8578",tint:t="#6f6a5d"}={}){const e=`plaster:${i}`;if(It.has(e))return It.get(e);const n=512,s=Ke(n),r=s.getContext("2d");r.fillStyle=i,r.fillRect(0,0,n,n);for(let o=0;o<140;o++){r.fillStyle=`rgba(${Math.random()<.5?"120,114,100":"150,144,130"},${Math.random()*.06})`;const c=Math.random()*n,l=Math.random()*n;r.beginPath(),r.ellipse(c,l,30+Math.random()*70,12+Math.random()*30,Math.random()*Math.PI,0,Math.PI*2),r.fill()}r.strokeStyle="rgba(40,34,26,0.30)";for(let o=0;o<7;o++){r.lineWidth=.6+Math.random(),r.beginPath();let c=Math.random()*n,l=Math.random()*n;r.moveTo(c,l);for(let h=0;h<9;h++)c+=(Math.random()-.5)*60,l+=Math.random()*40,r.lineTo(c,l);r.stroke()}r.fillStyle="#3a3028",r.fillRect(0,n-20,n,20),ri(r,n,1.1),Tn(r,n,9);const a=An(s,[1,1]);return It.set(e,a),a}function lg(){if(It.has("brick"))return It.get("brick");const i=512,t=Ke(i),e=t.getContext("2d");e.fillStyle="#6e6f68",e.fillRect(0,0,i,i);const n=64,s=32;for(let a=0,o=0;o<i;o+=s,a++){const c=a%2?n/2:0;for(let l=-n;l<i+n;l+=n){const h=118+Math.random()*22;e.fillStyle=`rgb(${h},${h-2},${h-10})`,e.fillRect(l+c+1.5,o+1.5,n-3,s-3),e.fillStyle="rgba(255,255,245,0.10)",e.fillRect(l+c+1.5,o+1.5,n-3,4)}}ri(e,i,1.4,60),Tn(e,i,8);const r=An(t,[1,1]);return It.set("brick",r),r}function hg({base:i="#4a3524",dark:t="#3a2819"}={}){const e=`boards:${i}`;if(It.has(e))return It.get(e);const n=512,s=Ke(n),r=s.getContext("2d");r.fillStyle=i,r.fillRect(0,0,n,n);const a=58;for(let c=0;c<n;c+=a){const l=.82+Math.random()*.36;r.fillStyle=`rgba(${Math.round(74*l)},${Math.round(53*l)},${Math.round(36*l)},1)`,r.fillRect(c,0,a-2,n),r.strokeStyle="rgba(28,18,10,0.22)";for(let d=0;d<16;d++){r.lineWidth=.5+Math.random(),r.beginPath();const u=c+Math.random()*a;r.moveTo(u,0);for(let p=0;p<n;p+=42)r.lineTo(u+(Math.random()-.5)*5,p);r.stroke()}r.fillStyle=t,r.fillRect(c+a-2,0,2,n);const h=Math.floor(Math.random()*3)*170+60;r.fillStyle="rgba(20,12,6,0.7)",r.fillRect(c,h,a-2,2)}ri(r,n,1.2,70),Tn(r,n,11);const o=An(s,[1,1]);return It.set(e,o),o}function dg(){if(It.has("tile"))return It.get("tile");const i=512,t=Ke(i),e=t.getContext("2d"),n="#5c3a30",s="#2b2622",r=8,a=i/r;for(let c=0;c<r;c++)for(let l=0;l<r;l++)e.fillStyle=(l+c)%2?n:s,e.fillRect(l*a,c*a,a,a),e.fillStyle="rgba(0,0,0,0.18)",e.fillRect(l*a,c*a,a,2),e.fillRect(l*a,c*a,2,a);ri(e,i,1.5,80),Tn(e,i,10);const o=An(t,[1,1]);return It.set("tile",o),o}function ug(){if(It.has("ceil"))return It.get("ceil");const i=512,t=Ke(i),e=t.getContext("2d");e.fillStyle="#7d786c",e.fillRect(0,0,i,i);for(let s=0;s<90;s++){e.fillStyle=`rgba(60,52,40,${Math.random()*.05})`;const r=Math.random()*i,a=Math.random()*i;e.beginPath(),e.ellipse(r,a,40+Math.random()*90,20+Math.random()*50,Math.random()*3,0,Math.PI*2),e.fill()}for(let s=0;s<3;s++){const r=Math.random()*i,a=Math.random()*i,o=e.createRadialGradient(r,a,4,r,a,70+Math.random()*60);o.addColorStop(0,"rgba(92,72,44,0.30)"),o.addColorStop(.7,"rgba(92,72,44,0.10)"),o.addColorStop(1,"rgba(92,72,44,0)"),e.fillStyle=o,e.fillRect(0,0,i,i)}Tn(e,i,8);const n=An(t,[1,1]);return It.set("ceil",n),n}function fo(i=.55){const t=`timber:${i}`;if(It.has(t))return It.get(t);const e=256,n=Ke(e),s=n.getContext("2d"),r=Math.round(84*i),a=Math.round(58*i),o=Math.round(36*i);s.fillStyle=`rgb(${r},${a},${o})`,s.fillRect(0,0,e,e),s.strokeStyle="rgba(20,12,6,0.28)";for(let l=0;l<40;l++){s.lineWidth=.4+Math.random()*1.4,s.beginPath();const h=Math.random()*e;s.moveTo(h,0);for(let d=0;d<e;d+=30)s.lineTo(h+(Math.random()-.5)*7,d);s.stroke()}ri(s,e,.7,40),Tn(s,e,7);const c=An(n,[1,1]);return It.set(t,c),c}function fg({base:i="#4a2f2c",motif:t="#6b4a3a"}={}){const e=`carpet:${i}`;if(It.has(e))return It.get(e);const n=512,s=Ke(n),r=s.getContext("2d");r.fillStyle=i,r.fillRect(0,0,n,n),r.strokeStyle=t,r.lineWidth=18,r.strokeRect(28,28,n-56,n-56),r.lineWidth=4,r.strokeStyle="rgba(200,175,140,0.25)",r.strokeRect(52,52,n-104,n-104);for(let o=96;o<n-80;o+=84)for(let c=96;c<n-80;c+=84){r.fillStyle="rgba(190,160,120,0.16)",r.beginPath();for(let l=0;l<8;l++){const h=l/8*Math.PI*2;r.ellipse(c+Math.cos(h)*13,o+Math.sin(h)*13,8,5,h,0,Math.PI*2)}r.fill()}ri(r,n,1.6,80),Tn(r,n,9);const a=An(s,[1,1]);return It.set(e,a),a}const $c=[{coat:"#1d1a16",skin:"#b8a486",defect:"scratched"},{coat:"#211a14",skin:"#ab9878",defect:"hands"},{coat:"#191b1a",skin:"#c0ad8e",defect:"second_face"},{coat:"#241c15",skin:"#b2a084",defect:"mouth"},{coat:"#2a2119",skin:"#c6b494",defect:"child"},{coat:"#1b1714",skin:"#b5a184",defect:"neck"},{coat:"#141312",skin:"#a89778",defect:"mirror"}],No=9,pg={2:"scratched",5:"smeared",7:"watched"};function oh(i=0){const t=`real:${i}`;if(It.has(t))return It.get(t);const e=512,n=Ke(e),s=n.getContext("2d");s.fillStyle="#191510",s.fillRect(0,0,e,e);const r=new ls(n);r.colorSpace=Ee,r.anisotropy=8,It.set(t,r);const a=i%No,o=new Image;return o.onload=()=>{s.drawImage(o,0,0,e,e),mg(s,e,pg[a]),Dr(s,e),r.needsUpdate=!0},o.onerror=()=>{const c=gg(i);c.image&&(s.drawImage(c.image,0,0,e,e),r.needsUpdate=!0)},o.src=`/saltmere/portraits/portrait_${String(a).padStart(2,"0")}.jpg`,r}function mg(i,t,e){if(!e)return;const n=t*.5,s=t*.36;if(e==="scratched"){for(let r=0;r<26;r++){i.strokeStyle=`rgba(214,203,180,${.45+Math.random()*.5})`,i.lineWidth=1+Math.random()*3.4,i.beginPath();const a=n-t*.16+Math.random()*t*.32,o=s-t*.05+Math.random()*t*.06;i.moveTo(a,o),i.lineTo(a+(Math.random()-.5)*t*.12,o+(Math.random()-.5)*t*.05),i.stroke()}i.fillStyle="rgba(0,0,0,0.25)",i.beginPath(),i.ellipse(n,s,t*.19,t*.05,0,0,Math.PI*2),i.fill()}if(e==="smeared"){const r=i.getImageData(0,0,i.canvas.width,i.canvas.height),a=i.canvas.width,o=Math.floor(s-t*.12),c=Math.floor(s+t*.16),l=r.data;for(let h=o;h<c;h++){const d=Math.round(Math.sin((h-o)/(c-o)*Math.PI)*26);if(!d)continue;const u=new Uint8ClampedArray(l.buffer,h*a*4,a*4),p=u.slice();for(let g=0;g<a;g++){const _=Math.min(a-1,Math.max(0,g-d));u[g*4]=p[_*4],u[g*4+1]=p[_*4+1],u[g*4+2]=p[_*4+2]}}i.putImageData(r,0,0)}if(e==="watched"){i.save(),i.globalAlpha=.55;const r=t*.79,a=t*.4;i.fillStyle="rgba(10,9,7,0.95)",i.beginPath(),i.ellipse(r,a,t*.075,t*.095,0,0,Math.PI*2),i.ellipse(r,a+t*.24,t*.13,t*.19,0,0,Math.PI*2),i.fill(),i.globalAlpha=.3,i.fillStyle="#b6a98c",i.beginPath(),i.ellipse(r-t*.026,a-t*.012,t*.009,t*.006,0,0,Math.PI*2),i.ellipse(r+t*.026,a-t*.012,t*.009,t*.006,0,0,Math.PI*2),i.fill(),i.restore()}}function Dr(i,t){i.strokeStyle="rgba(8,6,4,0.22)";for(let n=0;n<90;n++){i.lineWidth=.4,i.beginPath();let s=Math.random()*t,r=Math.random()*t;i.moveTo(s,r);for(let a=0;a<4;a++)s+=(Math.random()-.5)*28,r+=(Math.random()-.5)*28,i.lineTo(s,r);i.stroke()}const e=i.createRadialGradient(t*.46,t*.4,t*.18,t/2,t/2,t*.78);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(.72,"rgba(20,13,4,0.30)"),e.addColorStop(1,"rgba(0,0,0,0.66)"),i.fillStyle=e,i.fillRect(0,0,t,t)}function gg(i=0){const t=`oil:${i}`;if(It.has(t))return It.get(t);const e=320,n=Ke(e),s=n.getContext("2d"),r=$c[i%$c.length],a=r.skin;s.fillStyle="#17130d",s.fillRect(0,0,e,e);const o=s.createRadialGradient(e*.32,e*.24,8,e*.5,e*.5,e*.85);o.addColorStop(0,"#4b4132"),o.addColorStop(.5,"#2a2419"),o.addColorStop(1,"#100d09"),s.fillStyle=o,s.fillRect(0,0,e,e);const c=r.defect==="child",l=c?e*.46:e*.4,h=c?e*.13:e*.145,d=e*.5;s.fillStyle=r.coat,s.beginPath(),s.ellipse(d,e*1.02,e*(c?.3:.36),e*.42,0,0,Math.PI*2),s.fill(),s.fillStyle="rgba(212,200,172,0.30)",s.beginPath(),s.ellipse(d,l+h*1.55,h*.72,h*.26,0,0,Math.PI*2),s.fill();const u=(_,m,f,S=0,b=1)=>{s.save(),s.globalAlpha=b,s.translate(_,m),s.rotate(S);const M=s.createRadialGradient(-f*.25,-f*.3,2,0,0,f*1.5);M.addColorStop(0,a),M.addColorStop(.62,_a(a,.58)),M.addColorStop(1,"rgba(24,20,14,0)"),s.fillStyle=M,s.beginPath(),s.ellipse(0,0,f,f*1.28,0,0,Math.PI*2),s.fill(),s.fillStyle="rgba(16,12,8,0.72)",s.beginPath(),s.ellipse(-f*.38,-f*.16,f*.19,f*.11,0,0,Math.PI*2),s.ellipse(f*.38,-f*.16,f*.19,f*.11,0,0,Math.PI*2),s.fill(),s.strokeStyle="rgba(30,22,14,0.4)",s.lineWidth=f*.06,s.beginPath(),s.moveTo(0,-f*.05),s.lineTo(0,f*.3),s.stroke(),s.beginPath(),s.moveTo(-f*.24,f*.56),s.lineTo(f*.24,f*.56),s.stroke(),s.restore()};if(r.defect==="second_face"&&(u(d+h*1.5,l+h*.5,h*.82,.1,.5),s.fillStyle="rgba(30,26,18,0.62)",s.beginPath(),s.ellipse(d+h*1.6,l+h*.6,h*1,h*1.3,0,0,Math.PI*2),s.fill()),r.defect==="mirror"&&(s.strokeStyle="rgba(150,124,68,0.5)",s.lineWidth=5,s.strokeRect(e*.6,e*.14,e*.3,e*.34),s.fillStyle="rgba(38,34,26,0.85)",s.fillRect(e*.6,e*.14,e*.3,e*.34),s.fillStyle="rgba(90,74,50,0.55)",s.fillRect(e*.7,e*.28,e*.09,e*.16),s.fillRect(e*.7,e*.24,e*.09,e*.04)),u(d,l,h,r.defect==="neck"?.3:0),r.defect==="neck"&&(s.fillStyle=_a(a,.44),s.beginPath(),s.ellipse(d+h*.34,l+h*1.18,h*.3,h*.52,.34,0,Math.PI*2),s.fill()),r.defect==="hands")for(const[_,m,f]of[[d-h*.75,e*.86,-.3],[d+h*.15,e*.88,.1],[d+h*.95,e*.85,.4]])s.save(),s.translate(_,m),s.rotate(f),s.fillStyle=_a(a,.72),s.beginPath(),s.ellipse(0,0,h*.42,h*.26,0,0,Math.PI*2),s.fill(),s.restore();if(r.defect==="mouth"&&(s.strokeStyle="rgba(126,74,66,0.34)",s.lineWidth=3,s.beginPath(),s.arc(d,l+h*.3,h*.52,.35,Math.PI-.35),s.stroke(),s.fillStyle="rgba(52,44,32,0.55)",s.beginPath(),s.ellipse(d,l+h*.56,h*.62,h*.3,0,0,Math.PI*2),s.fill()),r.defect==="child"&&(s.fillStyle="rgba(46,38,26,0.9)",s.fillRect(e*.7,e*.52,e*.22,e*.3),s.fillStyle="rgba(20,16,10,0.75)",s.beginPath(),s.ellipse(e*.81,e*.56,e*.085,e*.028,0,0,Math.PI*2),s.fill()),r.defect==="scratched"){s.strokeStyle="#d8cdb4";for(let _=0;_<16;_++){s.lineWidth=1+Math.random()*2.6,s.globalAlpha=.5+Math.random()*.5,s.beginPath();const m=d+(Math.random()<.5?-1:1)*h*.38;s.moveTo(m-16+Math.random()*32,l-h*.34+Math.random()*h*.34),s.lineTo(m-16+Math.random()*32,l+Math.random()*h*.2),s.stroke()}s.globalAlpha=1}s.strokeStyle="rgba(8,6,4,0.34)";for(let _=0;_<110;_++){s.lineWidth=.4,s.beginPath();let m=Math.random()*e,f=Math.random()*e;s.moveTo(m,f);for(let S=0;S<4;S++)m+=(Math.random()-.5)*26,f+=(Math.random()-.5)*26,s.lineTo(m,f);s.stroke()}const p=s.createRadialGradient(e*.45,e*.4,e*.16,e/2,e/2,e*.78);p.addColorStop(0,"rgba(0,0,0,0)"),p.addColorStop(.7,"rgba(18,12,4,0.34)"),p.addColorStop(1,"rgba(0,0,0,0.72)"),s.fillStyle=p,s.fillRect(0,0,e,e),Tn(s,e,7);const g=An(n,[1,1]);return It.set(t,g),g}function _a(i,t){const e=parseInt(i.slice(1),16),n=Math.round((e>>16&255)*t),s=Math.round((e>>8&255)*t),r=Math.round((e&255)*t);return`rgb(${n},${s},${r})`}function ch({weeping:i=!1}={}){const t=i?"christ_weeping":"christ";if(It.has(t))return It.get(t);const e=512,n=Ke(e),s=n.getContext("2d");s.fillStyle="#0e0b07",s.fillRect(0,0,e,e);const r=new ls(n);r.colorSpace=Ee,r.anisotropy=8,It.set(t,r);const a=new Image;return a.onload=()=>{s.drawImage(a,0,0,e,e),i&&_g(s,e),Dr(s,e),r.needsUpdate=!0},a.src="/saltmere/portraits/christ.jpg",r}function _g(i,t){const e=[{x:t*.435,y:t*.415},{x:t*.59,y:t*.405}];for(const n of e){const s=t*(.3+Math.random()*.16),r=i.createLinearGradient(n.x,n.y,n.x,n.y+s);r.addColorStop(0,"rgba(38,10,8,0.90)"),r.addColorStop(.45,"rgba(52,14,10,0.70)"),r.addColorStop(1,"rgba(28,8,6,0)"),i.strokeStyle=r,i.lineWidth=t*.014,i.lineCap="round",i.beginPath(),i.moveTo(n.x,n.y);let a=n.x;for(let o=1;o<=6;o++)a+=(Math.random()-.45)*t*.012,i.lineTo(a,n.y+s/6*o);i.stroke(),i.fillStyle="rgba(46,12,9,0.85)",i.beginPath(),i.ellipse(a,n.y+s,t*.011,t*.016,0,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(190,150,140,0.16)",i.lineWidth=t*.004,i.beginPath(),i.moveTo(n.x-t*.002,n.y+t*.02),i.lineTo(a-t*.002,n.y+s*.9),i.stroke()}}function xg(i=0){const t=`woken:${i}`;if(It.has(t))return It.get(t);const e=512,n=Ke(e),s=n.getContext("2d");s.fillStyle="#0d0a07",s.fillRect(0,0,e,e);const r=new ls(n);r.colorSpace=Ee,It.set(t,r);const a=i%No,o=new Image;return o.onload=()=>{const l=e*1.55,h=e*1.55;s.drawImage(o,(e-l)/2,(e-h)/2-e*.12,l,h);const d=e*.5,u=e*.34;s.fillStyle="#000",s.beginPath(),s.ellipse(d-e*.075,u,e*.045,e*.058,0,0,Math.PI*2),s.ellipse(d+e*.075,u,e*.045,e*.058,0,0,Math.PI*2),s.fill(),s.beginPath(),s.ellipse(d,u+e*.2,e*.062,e*.125,0,0,Math.PI*2),s.fill();for(const[p,g,_]of[[d-e*.075,u,e*.1],[d+e*.075,u,e*.1],[d,u+e*.2,e*.16]]){const m=s.createRadialGradient(p,g,2,p,g,_);m.addColorStop(0,"rgba(0,0,0,0.9)"),m.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=m,s.beginPath(),s.arc(p,g,_,0,Math.PI*2),s.fill()}Dr(s,e),r.needsUpdate=!0},o.src=`/saltmere/portraits/portrait_${String(a).padStart(2,"0")}.jpg`,r}function vg(i=0){const t=`stitched:${i}`;if(It.has(t))return It.get(t);const e=512,n=Ke(e),s=n.getContext("2d");s.fillStyle="#0d0a07",s.fillRect(0,0,e,e);const r=new ls(n);r.colorSpace=Ee,It.set(t,r);const a=i%No,o=new Image;return o.onload=()=>{s.drawImage(o,0,0,e,e);const c=e*.5,l=e*.335,h=e*.075,d=e*.052,u=e*.02;for(const p of[c-h,c+h]){s.fillStyle="rgba(28,20,14,0.92)",s.beginPath(),s.ellipse(p,l,d,u,0,0,Math.PI*2),s.fill(),s.strokeStyle="rgba(12,8,5,0.75)",s.lineWidth=Math.max(1,e*.0035),s.beginPath(),s.moveTo(p-d,l+u*.35),s.quadraticCurveTo(p,l+u*1.3,p+d,l+u*.35),s.stroke();const g=5;s.lineWidth=Math.max(1,e*.0042);for(let _=0;_<g;_++){const m=(_+.5)/g,f=p-d+m*d*2,S=u*2.1;s.strokeStyle="rgba(214,201,178,0.88)";const b=Math.sin(_*12.9+i)*.22;s.beginPath(),s.moveTo(f-S*.3+b,l-S*.5),s.lineTo(f+S*.3+b,l+S*.5),s.stroke(),s.strokeStyle="rgba(20,14,9,0.55)",s.beginPath(),s.moveTo(f-S*.3+b,l-S*.5+1.5),s.lineTo(f+S*.3+b,l+S*.5+1.5),s.stroke(),s.fillStyle="rgba(14,9,6,0.8)",s.beginPath(),s.arc(f-S*.3+b,l-S*.5,e*.0035,0,Math.PI*2),s.arc(f+S*.3+b,l+S*.5,e*.0035,0,Math.PI*2),s.fill()}}Dr(s,e),r.needsUpdate=!0},o.src=`/saltmere/portraits/portrait_${String(a).padStart(2,"0")}.jpg`,r}function yg(){if(It.has("sheet"))return It.get("sheet");const i=256,t=Ke(i),e=t.getContext("2d");e.fillStyle="#9a9384",e.fillRect(0,0,i,i);for(let s=0;s<200;s++)e.fillStyle=`rgba(${Math.random()<.5?"120,114,100":"170,164,150"},${Math.random()*.1})`,e.fillRect(Math.random()*i,Math.random()*i,2+Math.random()*40,1+Math.random()*3);ri(e,i,1,50),Tn(e,i,10);const n=An(t,[1,1]);return It.set("sheet",n),n}const Si=1e-4;function Mg(i){const t=Sg(),e=[],n=[],s=[],r=new qt;r.name="house",i.add(r),ir(r,t,e,n,s,{rooms:Cs,openings:Jl,lightDefs:W0,baseY:0,roomLookup:as,level:0}),ir(r,t,e,n,s,{rooms:Ql,openings:X0,lightDefs:q0,baseY:bn,roomLookup:nh,level:1}),ir(r,t,e,n,s,{rooms:eh,openings:$0,lightDefs:K0,baseY:-bn,roomLookup:sh,level:-1}),ir(r,t,e,n,s,{rooms:th,openings:Y0,lightDefs:Z0,baseY:bn*2,roomLookup:ih,level:2});for(const a of n)e.push(a.blocker);return{group:r,colliders:e,doors:n,lights:s,materials:t}}function ir(i,t,e,n,s,r){Ag(i,t,r),Cg(i,t,e,n,r),kg(i,s,r)}function Sg(){return{wall:new Kt({map:og(),roughness:.95,metalness:0}),wallCold:new Kt({map:cg(),roughness:.97,metalness:0}),wallService:new Kt({map:lg(),roughness:.55,metalness:0}),ceiling:new Kt({map:ug(),roughness:.99}),door:new Kt({map:fo(.5),roughness:.7}),glass:new Kt({color:1186598,roughness:.06,metalness:.2,transparent:!0,opacity:.2,side:gn})}}function wg(i,t,e,n,s=1.15){const r=i.attributes.uv,a=n/s;for(let o=0;o<r.count;o++){const c=r.getX(o),l=r.getY(o);r.setXY(o,c*a,(t+l*e)/ke)}r.needsUpdate=!0}const lh={hall:{wall:"wall",floor:"tile"},dining:{wall:"wall",floor:"boards"},morning:{wall:"wall",floor:"boards"},drawing:{wall:"wall",floor:"boards"},library:{wall:"wall",floor:"boards"},stairhall:{wall:"wall",floor:"boards"},svccorr:{wall:"wallCold",floor:"tile"},kitchen:{wall:"wallService",floor:"tile"},scullery:{wall:"wallService",floor:"tile"},larder:{wall:"wallService",floor:"tile"},servants:{wall:"wallCold",floor:"boards"},backstair:{wall:"wallCold",floor:"boards"},bootroom:{wall:"wallCold",floor:"tile"},cellar_stair:{wall:"wallService",floor:"tile"},cellar:{wall:"wallService",floor:"tile"},pump_room:{wall:"wallService",floor:"tile"},cistern:{wall:"wallService",floor:"tile"},landing:{wall:"wall",floor:"boards"},bath:{wall:"wallService",floor:"tile"},linen:{wall:"wallCold",floor:"boards"},bed_mara:{wall:"wall",floor:"boards"},bed_tobias:{wall:"wall",floor:"boards"},bed_elinor:{wall:"wall",floor:"boards"},bed_spare:{wall:"wall",floor:"boards"},treatment:{wall:"wallCold",floor:"boards"},svc_bed_a:{wall:"wallCold",floor:"boards"},svc_bed_b:{wall:"wallCold",floor:"boards"},svc_bed_c:{wall:"wallCold",floor:"boards"},upper_stair:{wall:"wallCold",floor:"boards"}};function bg(i){var l;const t=((l=lh[i.id])==null?void 0:l.floor)??"boards",[e,n,s,r]=i.rect,a=s-e,o=r-n,c=t==="tile"?dg().clone():hg().clone();return c.needsUpdate=!0,c.wrapS=c.wrapT=wi,c.repeat.set(t==="tile"?a/1.6:a/1.4,t==="tile"?o/1.6:o/2.2),new Kt({map:c,roughness:t==="tile"?.55:.86,metalness:0})}function hh(i){return{minX:i.minX-.1,maxX:i.maxX+.1,minZ:i.topZ-.15,maxZ:i.topZ+2.6}}const dh=hh(Ji),uh=hh(qi),fh={minX:qe.minX-.12,maxX:qe.maxX+.12,minZ:qe.topZ-.06,maxZ:19.05},Eg={landing:dh,attic_stair:uh,backstair:fh},Tg={stairhall:dh,upper_stair:uh,cellar_stair:fh};function Kc(i,t){const[e,n,s,r]=i;if(!t||t.maxX<=e||t.minX>=s||t.maxZ<=n||t.minZ>=r)return[[e,n,s,r]];const a=Math.max(e,t.minX),o=Math.min(s,t.maxX),c=Math.max(n,t.minZ),l=Math.min(r,t.maxZ);return[[e,n,s,c],[e,l,s,r],[e,c,a,l],[o,c,s,l]].filter(([h,d,u,p])=>u-h>.01&&p-d>.01)}function Ag(i,t,e){const{rooms:n,baseY:s}=e;for(const r of n){const a=bg(r),o=Eg[r.id]??null;for(const[h,d,u,p]of Kc(r.rect,o)){const g=u-h,_=p-d,m=new Pt(new on(g,_),a);m.rotation.x=-Math.PI/2,m.position.set((h+u)/2,s,(d+p)/2),m.receiveShadow=!0,m.userData.room=r.id,i.add(m)}const c=t.ceiling.clone();c.map=t.ceiling.map.clone(),c.map.needsUpdate=!0,c.map.wrapS=c.map.wrapT=wi;const l=Tg[r.id]??null;for(const[h,d,u,p]of Kc(r.rect,l)){const g=u-h,_=p-d,m=c.clone();m.map=c.map.clone(),m.map.needsUpdate=!0,m.map.wrapS=m.map.wrapT=wi,m.map.repeat.set(g/3,_/3);const f=new Pt(new on(g,_),m);f.rotation.x=Math.PI/2,f.position.set((h+u)/2,s+ke,(d+p)/2),f.receiveShadow=!0,i.add(f)}}}function Rg(i){const t=new Map,e=(n,s,r,a)=>{const o=`${n}:${s.toFixed(3)}`;t.has(o)||t.set(o,{axis:n,c:s,intervals:[]}),t.get(o).intervals.push([Math.min(r,a),Math.max(r,a)])};for(const n of i){const[s,r,a,o]=n.rect;e("x",r,s,a),e("x",o,s,a),e("z",s,r,o),e("z",a,r,o)}for(const n of t.values()){n.intervals.sort((r,a)=>r[0]-a[0]);const s=[];for(const r of n.intervals){const a=s[s.length-1];a&&r[0]<=a[1]+Si?a[1]=Math.max(a[1],r[1]):s.push([r[0],r[1]])}n.intervals=s}return[...t.values()]}function Cg(i,t,e,n,s){const r=Rg(s.rooms);for(const a of r){const o=s.openings.filter(c=>c.axis===a.axis&&Math.abs(c.c-a.c)<.001).sort((c,l)=>c.a-l.a);for(const[c,l]of a.intervals){const h=o.filter(u=>u.a>=c-Si&&u.b<=l+Si);let d=c;for(const u of h)u.a-d>Si&&Ms(i,t,e,a,d,u.a,0,ke,s),Pg(i,t,e,n,a,u,s),d=u.b;l-d>Si&&Ms(i,t,e,a,d,l,0,ke,s)}}}function Pg(i,t,e,n,s,r,a){r.kind==="window"?(Ms(i,t,e,s,r.a,r.b,0,br,a),Ms(i,t,e,s,r.a,r.b,jl,ke,a),Lg(i,t,s,r,a)):(Ms(i,t,e,s,r.a,r.b,uo,ke,a),r.kind==="door"&&n.push(Ug(i,t,s,r,a)))}function Ms(i,t,e,n,s,r,a,o,c){const l=r-s,h=o-a;if(l<=Si||h<=Si)return;const d=Pr,u=n.axis==="x"?new $e(l,h,d):new $e(d,h,l);wg(u,a,h,l);const p=new Pt(u,t[Dg(n,s,r,c)]),g=(s+r)/2,_=c.baseY+a+h/2;n.axis==="x"?p.position.set(g,_,n.c):p.position.set(n.c,_,g),p.castShadow=!0,p.receiveShadow=!0,i.add(p),a<1.6&&e.push(Ig(n,s,r,c))}function Dg(i,t,e,n){const s=(t+e)/2,r=Pr/2+.06,a=n.roomLookup,c=(i.axis==="x"?[a(s,i.c-r),a(s,i.c+r)]:[a(i.c-r,s),a(i.c+r,s)]).filter(Boolean).map(l=>{var h;return((h=lh[l.id])==null?void 0:h.wall)??"wall"});return c.length?c.includes("wallService")?"wallService":c.includes("wallCold")&&c.length===1?"wallCold":c[0]:"wall"}function Ig(i,t,e,n){const s=Pr/2,r=i.axis==="x"?{minX:t,maxX:e,minZ:i.c-s,maxZ:i.c+s}:{minX:i.c-s,maxX:i.c+s,minZ:t,maxZ:e};return r.minY=n.baseY,r.maxY=n.baseY+ke,r}function Lg(i,t,e,n,s){const r=n.b-n.a,a=jl-br,o=new Pt(new on(r,a),t.glass),c=(n.a+n.b)/2,l=s.baseY+br+a/2;e.axis==="x"?o.position.set(c,l,e.c):(o.position.set(e.c,l,c),o.rotation.y=Math.PI/2),o.userData.window=n.id,i.add(o)}function Ug(i,t,e,n,s){const r=n.b-n.a,a=new be;e.axis==="x"?a.position.set(n.a,s.baseY,e.c):a.position.set(e.c,s.baseY,n.a),i.add(a);const o=new Pt(new $e(r,uo,.05),t.door);o.position.set(r/2,uo/2,0),o.castShadow=!0,a.add(o);const c=e.axis==="z"?-Math.PI/2:0;a.rotation.y=c;const l=e.axis==="x"?(n.a+n.b)/2:e.c,h=e.axis==="x"?e.c:(n.a+n.b)/2,d=Pr/2,u=e.axis==="x"?{minX:n.a,maxX:n.b,minZ:e.c-d,maxZ:e.c+d}:{minX:e.c-d,maxX:e.c+d,minZ:n.a,maxZ:n.b};u.minY=s.baseY,u.maxY=s.baseY+ke;const p={id:n.id,pivot:a,leaf:o,blocker:u,baseYaw:c,level:s.level,center:new I(l,s.baseY+1.2,h),locked:!!n.locked,angle:0,target:0,swing:-Math.PI*.52,speed:2.2};return u.door=p,p}function Ng(i,t){for(const e of i){const n=e.target-e.angle;if(Math.abs(n)<.001){e.angle!==e.target&&(e.angle=e.target,e.pivot.rotation.y=e.baseYaw+e.angle*e.swing);continue}e.angle+=Math.sign(n)*Math.min(e.speed*t,Math.abs(n)),e.pivot.rotation.y=e.baseYaw+e.angle*e.swing}}const Fg=new Wn(.06,8,6),xa=new Map;function Og(i){return xa.has(i)||xa.set(i,new Rs({color:i})),xa.get(i)}function kg(i,t,e){for(const n of e.lightDefs){const s=new Wl(n.color,n.on?n.intensity:0,9,2);s.position.set(n.pos[0],e.baseY+n.pos[1],n.pos[2]),s.castShadow=!1;const r=new Pt(Fg,Og(n.color));r.position.copy(s.position),r.visible=n.on,i.add(r),t.push({id:n.id,room:n.room,level:e.level,light:s,bulb:r,baseIntensity:n.intensity,on:n.on,flicker:0})}}const Bg=6,ph=9;function zg(i){const t=[];for(let e=0;e<Bg;e++){const n=new Wl(16777215,0,ph,2);n.castShadow=!1,i.add(n),t.push(n)}return t}const sr=[];function Hg(i,t,e){sr.length=0;for(const n of t){if(n.light.intensity<=0)continue;const r=n.light.position.distanceTo(e);r>ph+2||sr.push({f:n,d:r})}sr.sort((n,s)=>n.d-s.d);for(let n=0;n<i.length;n++){const s=i[n],r=sr[n];if(!r){s.intensity=0;continue}s.position.copy(r.f.light.position),s.color.copy(r.f.light.color),s.intensity=r.f.light.intensity,s.distance=r.f.light.distance,s.decay=r.f.light.decay}}const dt={};function Vg(){dt.timberDark=new Kt({map:fo(.42),roughness:.72}),dt.timberMid=new Kt({map:fo(.62),roughness:.78}),dt.sheet=new Kt({map:yg(),roughness:.95}),dt.fabric=new Kt({color:4864818,roughness:.98}),dt.brass=new Kt({color:7232044,roughness:.42,metalness:.75}),dt.iron=new Kt({color:2367774,roughness:.66,metalness:.5}),dt.porcelain=new Kt({color:12170923,roughness:.3}),dt.paper=new Kt({color:11049854,roughness:.95}),dt.glassDim=new Kt({color:2830131,roughness:.1,metalness:.3,transparent:!0,opacity:.5})}const zt=(i,t,e,n)=>new Pt(new $e(i,t,e),n),Fe=(i,t,e,n,s=10)=>new Pt(new Mn(i,t,e,s),n);function Gg(i,t,e){const n=new I;i.getWorldPosition(n);const s=i.rotation.y,r=Math.abs(Math.cos(s))*t+Math.abs(Math.sin(s))*e,a=Math.abs(Math.sin(s))*t+Math.abs(Math.cos(s))*e;return{minX:n.x-r/2,maxX:n.x+r/2,minZ:n.z-a/2,maxZ:n.z+a/2,minY:n.y,maxY:n.y+2}}function zi(i,t,e={}){const n=fg(e).clone();n.needsUpdate=!0;const s=new Kt({map:n,roughness:.99}),r=new Pt(new $e(i,.02,t),s);r.position.y=.01,r.receiveShadow=!0;const a=new qt;return a.add(r),a}function Hi(i=1.6,t=.9,e=.76){const n=new qt,s=zt(i,.06,t,dt.timberDark);s.position.y=e,n.add(s);const r=.045;for(const a of[-1,1])for(const o of[-1,1]){const c=Fe(r,r,e,dt.timberDark,8);c.position.set(a*(i/2-.12),e/2,o*(t/2-.12)),n.add(c)}return n.userData.footprint=[i,t],n}function rr(){const i=new qt,t=zt(.44,.05,.44,dt.timberMid);t.position.y=.45,i.add(t);const e=zt(.44,.55,.05,dt.timberMid);e.position.set(0,.74,-.2),i.add(e);for(const n of[-1,1])for(const s of[-1,1]){const r=zt(.045,.45,.045,dt.timberMid);r.position.set(n*.18,.225,s*.18),i.add(r)}return i.userData.footprint=[.5,.5],i}function jc(i,t,e){const n=new qt,s=zt(i,t,e,dt.sheet);s.position.y=t/2,n.add(s);const r=new Pt(new Wn(Math.max(i,e)*.55,12,8,0,Math.PI*2,0,Math.PI/2),dt.sheet);return r.scale.set(1,.35,e/Math.max(i,e)),r.position.y=t,n.add(r),n.userData.footprint=[i*1.1,e*1.1],n}function va(){const i=new qt,t=zt(.86,.42,.84,dt.fabric);t.position.y=.21,i.add(t);const e=zt(.86,.62,.18,dt.fabric);e.position.set(0,.62,-.33),i.add(e);for(const n of[-1,1]){const s=zt(.16,.24,.84,dt.fabric);s.position.set(n*.35,.54,0),i.add(s)}return i.userData.footprint=[.9,.9],i}function Vi(i=1.5,t=.92,e=.5){const n=new qt,s=zt(i,t,e,dt.timberDark);s.position.y=t/2,n.add(s);for(let r=0;r<3;r++){const a=Fe(.018,.018,.1,dt.brass,6);a.rotation.z=Math.PI/2,a.position.set(-i/2+.3+r*(i-.6)/2,t*.62,e/2+.02),n.add(a)}return n.userData.footprint=[i,e],n}function ar(i=1,t=1.9,e=.32){const n=new qt,s=zt(i,t,e,dt.timberDark);s.position.y=t/2,n.add(s);for(let r=1;r<=4;r++){const a=zt(i-.08,.22,e-.08,dt.paper);a.position.set((Math.random()-.5)*.06,t/5*r,.02),a.material=new Kt({color:new kt().setHSL(.08+Math.random()*.05,.22,.16+Math.random()*.1),roughness:.95}),n.add(a)}return n.userData.footprint=[i,e],n}function Wg(){const i=new qt,t=zt(.42,2,.28,dt.timberDark);t.position.y=1,i.add(t);const e=Fe(.15,.15,.03,dt.porcelain,16);e.rotation.x=Math.PI/2,e.position.set(0,1.72,.15),i.add(e);const n=zt(.5,.12,.34,dt.timberDark);return n.position.y=2.02,i.add(n),i.userData.footprint=[.5,.34],i}function Xg(i=6,t=.42){const e=new qt,n=Fe(.015,.015,.5,dt.brass,6);n.position.y=.25,e.add(n);const s=new Pt(new Wn(.09,10,8),dt.brass);e.add(s);for(let r=0;r<i;r++){const a=r/i*Math.PI*2,o=Fe(.012,.012,t,dt.brass,6);o.rotation.z=Math.PI/2,o.rotation.y=-a,o.position.set(Math.cos(a)*t/2,.02,Math.sin(a)*t/2),e.add(o);const c=Fe(.05,.03,.06,dt.brass,8);c.position.set(Math.cos(a)*t,.06,Math.sin(a)*t),e.add(c);const l=Fe(.02,.022,.14,dt.porcelain,8);l.position.set(Math.cos(a)*t,.16,Math.sin(a)*t),e.add(l)}for(let r=0;r<i*3;r++){const a=r/(i*3)*Math.PI*2,o=new Pt(new Ro(.028),dt.glassDim);o.position.set(Math.cos(a)*t*.72,-.1-Math.random()*.08,Math.sin(a)*t*.72),e.add(o)}return e}function qg(i,t,e){const n=new qt,s=zt(i+.09,t+.09,.05,dt.brass);n.add(s);const r=new Kt({map:oh(e),roughness:.85}),a=new Pt(new on(i,t),r);return a.position.z=.031,n.add(a),n.userData.art=a,n.userData.seed=e,n.userData.isPainting=!0,n}function Yg(i=.34){const t=new qt,e=.035,n=zt(e,i,.022,dt.timberDark);t.add(n);const s=zt(i*.58,e,.022,dt.timberDark);s.position.y=i*.17,t.add(s);const r=zt(i*.16,i*.3,.012,dt.brass);return r.position.set(0,i*.1,.016),t.add(r),t.userData.isCross=!0,t}function Zg(i=.44,t=.56){const e=new qt,n=zt(i+.1,t+.1,.05,dt.timberDark);e.add(n);const s=new Pt(new on(i,t),new Kt({map:ch(),roughness:.86}));return s.position.z=.031,e.add(s),e.userData.art=s,e.userData.isChrist=!0,e}function $g(){const i=new qt,t=zt(1.3,.92,.68,dt.iron);t.position.y=.46,i.add(t);for(const n of[-.3,.3]){const s=zt(.5,.42,.04,dt.iron);s.position.set(n,.42,.36),i.add(s);const r=Fe(.015,.015,.34,dt.brass,6);r.rotation.z=Math.PI/2,r.position.set(n,.42,.4),i.add(r)}const e=Fe(.09,.09,1.9,dt.iron,10);return e.position.set(0,1.85,-.25),i.add(e),i.userData.footprint=[1.35,.72],i}function Jc(){const i=new qt,t=zt(.72,.42,.5,dt.porcelain);t.position.y=.72,i.add(t);const e=zt(.62,.3,.4,new Kt({color:2763302,roughness:.6}));e.position.y=.84,i.add(e);for(const s of[-1,1]){const r=zt(.07,.52,.07,dt.iron);r.position.set(s*.28,.26,0),i.add(r)}const n=Fe(.018,.018,.3,dt.brass,6);return n.position.set(0,1.05,-.24),i.add(n),i.userData.footprint=[.76,.54],i}function Qc(i=.6){const t=new qt,e=zt(i,i*.8,i*.75,dt.timberMid);return e.position.y=i*.4,t.add(e),t.userData.footprint=[i,i*.75],t}function tl(){const i=new qt,t=Fe(.03,.04,1.8,dt.timberDark,8);t.position.y=.9,i.add(t);const e=Fe(.22,.24,.05,dt.timberDark,12);e.position.y=.025,i.add(e);for(let s=0;s<4;s++){const r=s/4*Math.PI*2,a=Fe(.012,.012,.16,dt.brass,6);a.rotation.z=Math.PI/2,a.rotation.y=-r,a.position.set(Math.cos(r)*.08,1.66,Math.sin(r)*.08),i.add(a)}const n=zt(.34,.86,.16,dt.fabric);return n.position.set(.1,1.18,.02),i.add(n),i.userData.footprint=[.5,.5],i}function ya(i=Ji,{grand:t=!0}={}){const{steps:e,width:n,rise:s,going:r}=i,a=new qt,o=r*e,c=o/2,l=.9;for(let u=0;u<e;u++){const p=c-r*u,g=s*(u+1),_=zt(n,.045,r+.025,dt.timberDark);_.position.set(0,g,p+.012),a.add(_);const m=zt(n,s,.022,dt.timberMid);if(m.position.set(0,g-s/2,p-r/2),a.add(m),t)for(const f of[-r*.28,r*.22]){const S=Fe(.014,.018,l-.06,dt.timberMid,6);S.position.set(n/2-.06,g+(l-.06)/2,p+f),a.add(S)}}const h=Math.atan2(s*e,o),d=Math.hypot(o,s*e);for(const u of[-1,1]){const p=zt(.05,.34,d+.12,dt.timberDark);p.position.set(u*(n/2+.025),s*e*.5-.12,0),p.rotation.x=h,a.add(p)}if(t){const u=zt(.065,.05,d,dt.timberDark);u.position.set(n/2-.06,s*e*.5+l,0),u.rotation.x=h,a.add(u);const p=Fe(.06,.07,1.15,dt.timberDark,8);p.position.set(n/2-.06,.575,c+.06),a.add(p);const g=new Pt(new Wn(.065,10,8),dt.timberDark);g.position.set(n/2-.06,1.18,c+.06),a.add(g)}else{const u=zt(.05,.04,d,dt.timberMid);u.position.set(n/2-.03,s*e*.5+.86,0),u.rotation.x=h,a.add(u)}return a}function Kg(i,t,e,n){const s=(l,h,d,u=0,p=0)=>{l.position.set(h,p,d),l.rotation.y=u,l.traverse(_=>{_.isMesh&&(_.castShadow=!0,_.receiveShadow=!0)}),i.add(l);const g=l.userData.footprint;return g&&t.push(Gg(l,g[0],g[1])),l},r=(l,h,d,u,p,g,_=1.6)=>{const m=qg(l,h,d);return m.position.set(u,_,p),m.rotation.y=g,i.add(m),e.push(m),m};s(zi(2.6,3.6,{base:"#3f2a28",motif:"#5e4034"}),12,3.5),s(Wg(),14.5,5.8,-Math.PI/2),s(tl(),9.6,.9,0),s(Vi(1.2,.86,.42),13.9,.45,0),r(.7,.9,1,9.11,5,Math.PI/2),r(.6,.75,3,14.89,1.5,-Math.PI/2);const a=Zg();a.position.set(10.1,1.72,6.88),a.rotation.y=Math.PI,i.add(a),e.push(a);const o=(l,h,d,u)=>{const p=Yg();p.position.set(l,h,d),p.rotation.y=u,i.add(p),n.push(p)};o(10.9,1.95,6.88,Math.PI),o(13.1,1.95,6.88,Math.PI),o(9.11,1.9,1.6,Math.PI/2),o(4.5,1.95,5.89,Math.PI),o(15.11,1.9,4.4,Math.PI/2),o(11.6,1.85,13.11,0),o(7.5,1.85,15.11,0),s(zi(4.4,3.4,{base:"#3a2c26",motif:"#5c4132"}),4.5,3.2),s(Hi(2.4,1.2,.76),4.5,3.2);for(const[l,h,d]of[[-1.6,0,Math.PI/2],[1.6,0,-Math.PI/2],[-.6,-1,0],[.6,-1,0],[-.6,1,Math.PI],[.6,1,Math.PI]])s(rr(),4.5+l,3.2+h,d);s(Vi(1.7,.95,.5),7,5.6,0),r(1.1,.8,0,4.5,.11,0,1.8),s(zi(3.6,3,{base:"#463028",motif:"#6a4c38"}),18.6,3),s(Hi(1,.6,.5),18.6,3),s(va(),16.8,4.6,2.4),s(va(),20.4,4.4,-2.4),s(Vi(1.5,.9,.5),21.5,5,-Math.PI/2),r(.8,1,5,18.6,.11,0,1.75),s(zi(5,4,{base:"#463028",motif:"#6a4c38"}),4.5,9.5),s(jc(2.1,.8,1),2,8.9,.15),s(jc(.95,.85,.95),7,11.4,-.4),s(va(),7.2,7.6,-.6),s(Hi(1.1,.7,.5),4.5,9.5),s(ar(1.2,1.9,.32),6.6,12.6,Math.PI),r(.9,1.1,7,.11,9.5,Math.PI/2,1.7),s(zi(3,2.4,{base:"#3b2a24",motif:"#5a3f30"}),18.5,9.6),s(Hi(1.5,.8,.76),18.5,9.5),s(rr(),18.5,10.7,Math.PI),s(ar(1.2,1.9,.32),21.5,9.5,-Math.PI/2),s(ar(1.2,1.9,.32),16.5,12.6,Math.PI),s(ar(1.2,1.9,.32),20.5,12.6,Math.PI),r(.65,.8,9,15.11,11.6,Math.PI/2,1.65),s(ya(Ji),Ji.centreX,Ji.centreZ,0),s(ya(qe,{grand:!1}),qe.centreX,qe.centreZ,0,qe.fromY);{const l=new Kt({color:1842719,roughness:.72,metalness:.6}),h=new Kt({color:462096,roughness:.08,metalness:.5}),d=-ke,u=new Pt(new on(tn.w,tn.d),h);u.rotation.x=-Math.PI/2,u.position.set(tn.x,d-.55,tn.z),i.add(u);const p=zt(tn.w+.34,.14,tn.d+.34,dt.iron);p.position.set(tn.x,d+.07,tn.z),i.add(p);for(let m=0;m<7;m++){const f=zt(.045,.05,tn.d,l);f.position.set(tn.x-tn.w/2+.11+m*(tn.w-.22)/6,d+.13,tn.z),i.add(f)}const g=Fe(.28,.3,1.5,dt.iron,12);g.position.set(14.5,d+.75,19.4),i.add(g);const _=zt(.16,.16,5.4,dt.iron);_.position.set(14.5,d+1.8,17.4),i.add(_);for(const[m,f]of[[6.5,17],[9,19.4],[7.4,20.2]])s(Qc(.62),m,f,Math.random(),d)}s(ya(qi,{grand:!1}),qi.centreX,qi.centreZ,0,qi.fromY),s(Vi(1,.8,.4),10.8,7.7,Math.PI/2),r(.7,.95,11,9.11,11.4,Math.PI/2,1.7),s(zi(19,1.2,{base:"#3b2a24",motif:"#4e382c"}),11,14);const c=zt(3,ke-.1,.05,new Kt({color:8090728,roughness:.99}));c.position.set(8,(ke-.1)/2,13.1),i.add(c),r(.5,.62,13,16,13.11,0,1.62),s($g(),16.2,20.4,Math.PI),s(Hi(1.8,.9,.78),19,18),s(rr(),19,19.3,Math.PI),s(rr(),17.7,18,Math.PI/2),s(Vi(1.6,1,.45),20,15.6,0),s(Jc(),21.4,19.6,-Math.PI/2),s(Jc(),11.6,17.5,Math.PI/2),s(Qc(.55),14.2,18.4,.2);for(let l=0;l<3;l++){const h=zt(.36,.05,1.6,dt.timberMid);h.position.set(11.32,.75+l*.52,20),i.add(h)}s(Hi(2.6,1,.76),7.5,18),s(zt(2.2,.42,.34,dt.timberMid),7.5,17.1,0,.21),s(zt(2.2,.42,.34,dt.timberMid),7.5,18.9,0,.21),s(Vi(1.6,1.05,.45),10.4,16.6,-Math.PI/2),s(zt(1.2,.42,.4,dt.timberMid),3.3,20.3,-Math.PI/2,.21),s(tl(),3.5,19.3,0)}function jg(i){Vg();const t=new qt;t.name="props",i.add(t);const e=[],n=[],s=[];Kg(t,e,n,s);const r=Xg();return r.position.set(12,ke-.62,3.2),t.add(r),{group:t,colliders:e,paintings:n,crosses:s,chandelier:r,mats:dt}}const Jg=-1.6,Qg=ke+.4;function t_(i){const t=new qt;t.name="exterior",i.add(t);const e=e_(t),n=i_(t);r_(t);const s=o_(t),r=c_(t);return{group:t,sky:e,sea:n,causeway:s,rain:r,tide:0,update(a,o,c){s_(n,c),h_(r,a,o),this.tide=Math.min(1,c/2400),s.position.y=-.05-this.tide*.85}}}function e_(i){const t=new Wn(260,32,20),e=new Gn({side:He,depthWrite:!1,uniforms:{topColor:{value:new kt(659224)},midColor:{value:new kt(1910838)},bottomColor:{value:new kt(2896698)}},vertexShader:`
			varying vec3 vPos;
			void main() {
				vPos = position;
				gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
			}
		`,fragmentShader:`
			uniform vec3 topColor;
			uniform vec3 midColor;
			uniform vec3 bottomColor;
			varying vec3 vPos;
			void main() {
				float h = normalize(vPos).y;
				vec3 c = mix(bottomColor, midColor, smoothstep(-0.25, 0.18, h));
				c = mix(c, topColor, smoothstep(0.12, 0.75, h));
				gl_FragColor = vec4(c, 1.0);
			}
		`}),n=new Pt(t,e);return n.position.set(10,0,7),i.add(n),n}function mh({extent:i,extentX:t=i,extentZ:e=i,hole:n}){const[s,r,a,o]=n;return[[-t,-e,t,r],[-t,o,t,e],[-t,r,s,o],[a,r,t,o]].filter(([c,l,h,d])=>h-c>.01&&d-l>.01)}function gh(i){const{segmentSize:t}=i,e=mh(i),n=[];for(const[s,r,a,o]of e){const c=a-s,l=o-r,h=new on(c,l,Math.max(1,Math.round(c/t)),Math.max(1,Math.round(l/t)));h.rotateX(-Math.PI/2),h.translate(s+c/2,0,r+l/2),n.push(h)}return n}const n_=[-27,-22.5,29,29.5];function i_(i){const t=new Kt({color:857373,roughness:.22,metalness:.55});return gh({extent:210,hole:n_,segmentSize:9.5}).map(s=>{const r=new Pt(s,t);return r.position.set(10,Jg,7),i.add(r),r.userData.base=Float32Array.from(s.attributes.position.array),r})}function s_(i,t){for(const e of i){const n=e.geometry.attributes.position,s=e.userData.base;for(let r=0;r<n.count;r++){const a=s[r*3],o=s[r*3+2],c=Math.sin(a*.09+t*.7)*.16+Math.sin(o*.13-t*.5)*.13+Math.sin((a+o)*.05+t*.31)*.22;n.setY(r,c)}n.needsUpdate=!0,e.userData.n=(e.userData.n||0)+1,e.userData.n%4===0&&e.geometry.computeVertexNormals()}}function r_(i){const t=new Kt({color:2829096,roughness:.97}),e=new Kt({color:2764578,roughness:.99}),n=11,s=10.5,r=[vi.minX-n,vi.minZ-s,vi.maxX-n,vi.maxZ-s];for(const[c,l,h,d]of mh({extentX:28,extentZ:26,hole:r})){const u=h-c,p=d-l,g=new Pt(new $e(u,3.2,p),t);g.position.set(n+c+u/2,-1.72,s+l+p/2),g.receiveShadow=!0,i.add(g)}const a=vi,o=[a.minX-n,a.minZ-s,a.maxX-n,a.maxZ-s];for(const c of gh({extentX:28,extentZ:26,hole:o,segmentSize:28})){const l=new Pt(c,e);l.position.set(n,-.11,s),l.receiveShadow=!0,i.add(l)}for(let c=0;c<70;c++){const l=Math.random()*Math.PI*2,h=24+Math.random()*8,d=.5+Math.random()*2.4,u=new Pt(new Ao(d,0),t);u.position.set(n+Math.cos(l)*h,-1.2-Math.random()*.9,s+Math.sin(l)*h*.9),u.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),i.add(u)}for(let c=0;c<8;c++){const l=-6+Math.random()*34,h=-8-Math.random()*6;i.add(a_(l,h,t))}for(let c=0;c<4;c++){const l=new Pt(new $e(.44,.7,.1),t);l.position.set(27.5+c*.9,.35,16),l.rotation.y=(Math.random()-.5)*.16,l.rotation.z=(Math.random()-.5)*.06,i.add(l)}}function a_(i,t,e){const n=new qt,s=3+Math.random()*2.5,r=new Pt(new Mn(.06,.16,s,6),e);r.position.y=s/2,r.rotation.z=.14+Math.random()*.16,n.add(r);for(let a=0;a<5;a++){const o=.7+Math.random()*1.3,c=new Pt(new Mn(.02,.05,o,5),e);c.position.y=s*(.55+Math.random()*.4),c.rotation.z=(Math.random()-.5)*2.2,c.rotation.x=(Math.random()-.5)*1.6,n.add(c)}return n.position.set(i,0,t),n}function o_(i){const t=new Kt({color:3355180,roughness:.95}),e=new Pt(new $e(4.5,.5,130),t);e.position.set(11.97,-.05,-80),i.add(e);const n=new Kt({color:1973272,roughness:.9});for(let s=0;s<24;s++){const r=new Pt(new Mn(.07,.09,1.7,6),n);r.position.set(11.97+(s%2?2.5:-2.5),.6,-18-s*5),r.rotation.z=(Math.random()-.5)*.12,i.add(r)}return e}function c_(i){const n=new Float32Array(15600),s=new Float32Array(2600),r=new Float32Array(2600);for(let l=0;l<2600;l++){const h=(Math.random()-.5)*60,d=Math.random()*28,u=(Math.random()-.5)*60,p=.28+Math.random()*.45;n[l*6]=h,n[l*6+1]=d,n[l*6+2]=u,n[l*6+3]=h+.06,n[l*6+4]=d+p,n[l*6+5]=u,s[l]=14+Math.random()*12,r[l]=p}const a=new cn;a.setAttribute("position",new vn(n,3));const o=new Vl({color:9414333,transparent:!0,opacity:.22,depthWrite:!1}),c=new Yd(a,o);return c.frustumCulled=!1,i.add(c),c.userData={speeds:s,lengths:r,spread:60},c}function l_(i,t,e,n,s,r){let a,o;for(let l=0;l<8&&(a=s.x+(Math.random()-.5)*r,o=s.z+(Math.random()-.5)*r,!!ah(a,o));l++)a=void 0;a===void 0&&(a=vi.maxX+4+Math.random()*20,o=s.z+(Math.random()-.5)*r);const c=24+Math.random()*6;i[t]=a,i[t+1]=c,i[t+2]=o,i[t+3]=a+.06,i[t+4]=c+n[e],i[t+5]=o}function h_(i,t,e){const n=i.geometry.attributes.position,{speeds:s,lengths:r,spread:a}=i.userData,o=n.array;for(let c=0;c<s.length;c++){const l=c*6,h=s[c]*t;o[l+1]-=h,o[l+4]-=h;const d=o[l+1],u=ah(o[l],o[l+2]);(d<-2.5||u&&d<Qg)&&l_(o,l,c,r,e,a)}n.needsUpdate=!0}const Ma=(i,t=8,e=12)=>{const n=(r,a)=>Cs.filter(o=>{const[c,l,h,d]=o.rect,u=Math.hypot((c+h)/2-i.player.pos.x,(l+d)/2-i.player.pos.z);return u>r&&u<=a});let s=n(t,e);return s.length||(s=n(t*.6,e*1.8)),s.length?s[Math.floor(Math.random()*s.length)]:null},Sa=i=>{const[t,e,n,s]=i.rect;return{x:(t+n)/2,z:(e+s)/2}},po=[{id:"settle_creak",category:"auditory",intensity:.08,weight:10,phase:[1,5],cooldown:20,purpose:"Baseline. Teaches the player that the house makes noise, so that later noise is ambiguous.",run(i){const t=Ma(i,4,12)??Cs[0],e=Sa(t);i.audio.creak(e.x,2.4,e.z,.8+Math.random()*.6)}},{id:"steps_above",category:"auditory",intensity:.32,weight:6,phase:[2,5],cooldown:28,purpose:"The first genuinely unexplainable thing: there is no one on the first floor.",can:i=>i.player.vel.length()<.4,run(i){const t=i.player.pos,e=Math.random()<.5?1:-1;i.audio.stepsAbove(t.x-e*2,t.z,5+Math.floor(Math.random()*4),.5,e,0),i.hud.say("Someone is upstairs.",4.2)}},{id:"door_drift",category:"environmental",intensity:.24,weight:7,phase:[2,5],cooldown:20,behind:!0,purpose:"The player will remember closing it. That memory is the scare, not the door.",can:i=>i.doorsBehindPlayer().length>0,run(i){var n;const t=i.doorsBehindPlayer(),e=t[Math.floor(Math.random()*t.length)];e.speed=.32,e.target=.8,i.audio.playSample("doorCreak",{x:e.center.x,y:1.4,z:e.center.z,gain:1.1,fadeIn:.05}),(n=i.after)==null||n.call(i,4.5,()=>{e.speed=.28,e.target=0})}},{id:"light_flicker",category:"environmental",intensity:.18,weight:6,phase:[2,5],cooldown:20,purpose:"Cheap in isolation; valuable because it makes the player distrust the lights they rely on.",can:i=>i.lightsOn().length>0,run(i){const t=i.lightsOn(),e=t[Math.floor(Math.random()*t.length)];e.flicker=.9+Math.random()*1.4}},{id:"far_knock",category:"auditory",intensity:.3,weight:5,phase:[2,5],cooldown:33,purpose:"Three knocks. Deliberate, patient, and from a room she has already cleared.",run(i){const t=Ma(i,5,11);if(!t)return;const e=Sa(t);i.audio.knock(e.x,1.3,e.z,3,2.2)}},{id:"silence",category:"atmosphere",intensity:.22,weight:4,phase:[2,5],cooldown:320,purpose:"Removes the ambient bed entirely. Nothing happens. That is the point.",run(i){i.audio.duck(0,2.4),i.after(9+Math.random()*7,()=>i.audio.duck(1,4.5))}},{id:"light_on_alone",category:"environmental",intensity:.34,weight:5,phase:[3,5],cooldown:36,behind:!0,purpose:"A light comes on in a room she has not entered. Someone is ahead of her.",can:i=>i.lightsOff().length>0,run(i){const t=i.lightsOff().filter(n=>!i.playerCanSee(n.light.position));if(!t.length)return;const e=t[Math.floor(Math.random()*t.length)];i.setLight(e,!0),i.audio.burst({x:e.light.position.x,y:2.4,z:e.light.position.z,freq:1800,q:4,gain:.09,decay:.05})}},{id:"breath_in_dark",category:"auditory",intensity:.46,weight:4,phase:[3,5],cooldown:48,purpose:"Someone is holding their breath in this room. Then it continues after she leaves.",can:i=>i.roomIsDark()&&i.player.vel.length()<.3,run(i){const t=i.player.pos,e=i.player.forward(),n=t.x-e.x*1.3,s=t.z-e.z*1.3;i.audio.breath(n,1.5,s,{gain:.85}),i.after(2.6,()=>i.audio.breath(n,1.5,s,{inhale:!1,gain:.7}))}},{id:"door_slam_far",category:"environmental",intensity:.44,weight:3,phase:[3,5],cooldown:60,purpose:"The house asserting itself. Loud, distant, and unmistakably an action.",can:i=>i.doorsBehindPlayer(6).length>0,run(i){const t=i.doorsBehindPlayer(6),e=t[Math.floor(Math.random()*t.length)];e.speed=9,e.target=0,i.audio.playSample("doorSlam",{x:e.center.x,y:1.2,z:e.center.z,gain:1,fadeIn:.002}),i.hud.say("That was a door. Upstairs.",3.4)}},{id:"crying_far",category:"auditory",intensity:.38,weight:9,phase:[1,5],cooldown:20,purpose:"A child crying somewhere in a house with no child in it. Deniable exactly once.",run(i){const t=Ma(i,4.5,10);if(!t)return;const e=Sa(t);i.audio.crying(e.x,1,e.z,{sobs:4+Math.floor(Math.random()*3),gain:2})}},{id:"crying_stops",category:"auditory",intensity:.5,weight:6,phase:[2,5],cooldown:36,purpose:"The crying is in the next room. It stops the moment she moves toward it.",can:i=>i.player.vel.length()<.3,run(i){const t=i.player.pos,e=i.player.forward(),n=t.x+e.x*6,s=t.z+e.z*6;i.audio.crying(n,.9,s,{sobs:7,gain:2.4}),i.hud.say("That is a child.",3.6)}},{id:"little_feet",category:"nearby",intensity:.58,weight:4,phase:[3,5],cooldown:78,purpose:"Small running feet close from behind and stop within touching distance. Nothing follows. That is the whole scare.",can:i=>i.player.vel.length()<.6,run(i){const t=i.player.pos,e=i.player.forward(),n=t.x-e.x*7,s=t.z-e.z*7,r=t.x-e.x*.7,a=t.z-e.z*.7;i.audio.littleFeet(n,s,r,a,{steps:10,gain:.9,onArrive:()=>{i.hud.say("Something stopped behind me.",3.8)}})}},{id:"stomp_above",category:"auditory",intensity:.54,weight:3,phase:[3,5],cooldown:84,purpose:"Three deliberate stamps directly overhead. Adult weight. It wants to be heard.",run(i){const t=i.player.pos;for(let e=0;e<3;e++)i.after(e*.85,()=>i.audio.stomp(t.x,3.4,t.z,2.6));i.hud.say("Directly above me.",3.4)}},{id:"portrait_whisper",category:"auditory",intensity:.34,weight:5,phase:[2,5],cooldown:39,purpose:"A painting whispers when she is close enough to read the brushwork. No words — the player writes them.",can:i=>!!i.nearestPainting(2.6),run(i){const t=i.nearestPainting(2.6);if(!t)return;const e=t.getWorldPosition(new t.position.constructor);i.audio.whisper(e.x,e.y,e.z,{gain:.65,duration:1.6+Math.random()})}},{id:"ear_breath",category:"nearby",intensity:.55,weight:6,phase:[2,5],cooldown:50,trigger:i=>i.stillFor>5.5&&i.darkFor>4,purpose:"She stopped moving in the dark to listen. Something breathes directly into her ear — not across the room, AT her. Punishes the exact act of listening carefully.",run(i){const t=i.player.pos,e=i.player.forward(),n=Math.random()<.5?1:-1,s=t.x-e.x*.3-e.z*.2*n,r=t.z-e.z*.3+e.x*.2*n;i.audio.breath(s,t.y-.05,r,{gain:1.6}),i.after(1.5,()=>i.audio.breath(s,t.y-.05,r,{inhale:!1,gain:1.3})),i.hud.say("That was against my ear.",3.6)}},{id:"charge",category:"major",intensity:.98,weight:8,phase:[3,5],cooldown:200,trigger:i=>i.justTurnedAround&&i.darkFor>2.5,purpose:"THE big one. She whips round in the dark and the bent-necked woman is already coming — fast, silent, straight at her — and is gone before she arrives. The only event in the game that closes distance.",can:i=>!i.figureBusy()&&i.player.feetY>-1,run(i){i.runCharge()}},{id:"door_slam_face",category:"environmental",intensity:.62,weight:7,phase:[2,5],cooldown:55,trigger:i=>!!i.approachedDoor,purpose:"She walks at a door and it shuts in her face. A threshold is the most loaded object in a horror house; this makes the house refuse her one.",run(i){const t=i.triggers.approachedDoor;t&&(t.speed=14,t.target=0,i.audio.playSample("doorSlam",{x:t.center.x,y:1.2,z:t.center.z,gain:2,fadeIn:.001}),i.shakeCamera(.075,.45))}},{id:"lights_chase",category:"environmental",intensity:.72,weight:6,phase:[3,5],cooldown:120,trigger:i=>i.isCorridor&&i.movingFor>3.5,purpose:"Walking a corridor, the lights go out one at a time BEHIND her, in order, catching up. Nothing is chasing her; the dark is.",can:i=>i.lightsOn().length>=2,run(i){const t=i.player.pos;i.lightsOn().map(n=>({l:n,d:n.light.position.distanceTo(t)})).sort((n,s)=>s.d-n.d).forEach((n,s)=>{i.after(s*.42,()=>{i.setLight(n.l,!1),i.audio.burst({x:n.l.light.position.x,y:2.4,z:n.l.light.position.z,freq:1700,q:5,gain:.5,decay:.06})})}),i.hud.say("They are going out behind me.",3.8)}},{id:"doors_cascade",category:"major",intensity:.86,weight:5,phase:[4,5],cooldown:210,trigger:i=>i.isCorridor&&i.dwellFor>2.5,purpose:"Every door along the corridor slams in sequence, coming toward her, ending with the nearest. The house closing itself up around her.",can:i=>i.doorsOnLevel().length>=3,run(i){const t=i.player.pos,e=i.doorsOnLevel().map(n=>({d:n,dist:n.center.distanceTo(t)})).sort((n,s)=>s.dist-n.dist).slice(0,6);e.forEach((n,s)=>{i.after(s*.3,()=>{n.d.speed=16,n.d.target=0,i.audio.burst({x:n.d.center.x,y:1.2,z:n.d.center.z,freq:100,q:1.3,gain:2,decay:.35}),s===e.length-1&&i.shakeCamera(.09,.5)})})}},{id:"ceiling_crawl",category:"auditory",intensity:.6,weight:6,phase:[3,5],cooldown:90,trigger:i=>i.stillFor>4&&i.level<2,purpose:"Something drags itself across the ceiling directly above her, from one side of the room to the other. Weight, and too many limbs.",run(i){const t=i.player.pos,e=Math.random()<.5?1:-1;for(let n=0;n<7;n++)i.after(n*.26,()=>{i.audio.burst({x:t.x+e*(n-3)*.9,y:t.y+1.6,z:t.z+(Math.random()-.5)*.6,freq:150+Math.random()*90,q:2,gain:.85,decay:.22,type:"lowpass"})});i.hud.say("It is on the ceiling.",3.6)}},{id:"figure_sprints_past",category:"apparition",intensity:.7,weight:7,phase:[3,5],cooldown:80,trigger:i=>!!i.enteredRoom&&i.movingFor>.5,purpose:"The instant she enters a room, something crosses the far end of it at a sprint and is gone. Too fast to identify — which is the point.",can:i=>!i.figureBusy(),run(i){i.runSprintPast()}},{id:"room_darkens",category:"environmental",intensity:.5,weight:6,phase:[2,5],cooldown:70,trigger:i=>i.litFor>9&&i.dwellFor>7,purpose:"She has been comfortable in a lit room for a while. The lamp does not go out — it DIMS, slowly, over several seconds, while she watches.",can:i=>!!i.triggers.nearestLitLight(6),run(i){const t=i.triggers.nearestLitLight(6);t&&(t.dimming=4.5,i.hud.say("It is getting darker in here.",4))}},{id:"cornered",category:"major",intensity:.8,weight:7,phase:[3,5],cooldown:150,trigger:i=>!!i.enteredRoom&&i.isDeadEnd,purpose:"She walks into a room with one door. It shuts behind her, the light goes, and for three seconds there is no way out. Then it opens again.",run(i){const e=i.doorsBehindPlayer(.5).sort((s,r)=>s.center.distanceTo(i.player.pos)-r.center.distanceTo(i.player.pos))[0];e&&(e.speed=13,e.target=0,i.audio.burst({x:e.center.x,y:1.2,z:e.center.z,freq:100,q:1.3,gain:2.3,decay:.4}));const n=i.lightsOn();for(const s of n)i.setLight(s,!1);i.shakeCamera(.07,.6),i.hud.say("The door. Behind me.",3.4),i.after(3.4,()=>{for(const s of n)i.setLight(s,!0);e&&(e.speed=1.4,e.target=1)})}},{id:"name_whisper",category:"auditory",intensity:.58,weight:6,phase:[2,5],cooldown:65,trigger:i=>i.revisited&&i.movingFor>.4,purpose:"Coming back into a room she has already cleared, something says her name from just behind her shoulder. It knows who she is.",run(i){const t=i.player.pos,e=i.player.forward();i.audio.playOneOf(["whisperMara1","whisperMara2"],{x:t.x-e.x*.9,y:t.y-.1,z:t.z-e.z*.9,gain:1.4,fadeIn:.04}),i.hud.say("That was my name. Something in here knows my name.",4.2)}},{id:"sprint_pursuit",category:"nearby",intensity:.76,weight:7,phase:[3,5],cooldown:95,trigger:i=>i.sprintingFor>1.8,purpose:"She ran. Something runs after her — heavy, gaining, right behind — and stops the moment she stops. Running is supposed to be the safe option.",run(i){const t=i.player.pos,e=i.player.forward();for(let n=0;n<9;n++)i.after(n*.19,()=>{const s=5.5-n*.55;i.audio.footstep(t.x-e.x*s,t.z-e.z*s,{running:!0})});i.after(1.9,()=>i.hud.say("It stopped when I stopped.",3.6))}},{id:"waiting_on_return",category:"apparition",intensity:.88,weight:6,phase:[3,5],cooldown:170,trigger:i=>i.revisited&&i.dwellFor>1.2,purpose:"She comes back to a room she has already been in, and something is standing in it — not hiding, not moving. Waiting. It was not there the first time, and she knows that for certain.",can:i=>i.canPlaceFigure(4,9),run(i){i.placeFigure({kind:"bentneck",minDist:4,maxDist:9,vanishOnLook:!1,hold:4.5}),i.audio.creak(i.player.pos.x,2.5,i.player.pos.z,1.4)}},{id:"figure_down_corridor",category:"apparition",intensity:.44,weight:9,phase:[2,5],cooldown:40,purpose:"Someone standing at the far end of the room, facing her. She looks away or walks toward it and it is not there. Never approaches.",can:i=>i.canPlaceFigure(7,16),run(i){i.placeFigure({kind:"standing",minDist:7,maxDist:16,vanishOnLook:!0})}},{id:"figure_in_doorway",category:"apparition",intensity:.55,weight:7,phase:[2,5],cooldown:55,purpose:"Filling a doorway she has to go through. Gone by the time she reaches it.",can:i=>i.canPlaceFigure(3.5,9),run(i){i.placeFigure({kind:"listener",minDist:3.5,maxDist:9,vanishOnLook:!0})}},{id:"figure_behind",category:"apparition",intensity:.66,weight:8,phase:[2,5],cooldown:75,purpose:"Placed directly behind her, close, and it does NOT vanish — it waits until she turns round. The corridor figure teaches her they disappear; this one breaks that rule once she has learned it.",can:i=>i.canPlaceFigure(2.2,3.4),run(i){i.placeFigure({kind:"bentneck",behind:!0,minDist:2.2,maxDist:3.4,vanishOnLook:!1,hold:3.2})}},{id:"child_at_distance",category:"apparition",intensity:.5,weight:7,phase:[2,5],cooldown:55,purpose:"A child standing perfectly still, watching. The Remainder, long before she is named.",can:i=>i.canPlaceFigure(6,14),run(i){i.placeFigure({kind:"child",minDist:6,maxDist:14,vanishOnLook:!0})}},{id:"picture_changes",category:"visual",intensity:.5,weight:5,phase:[3,5],cooldown:45,behind:!0,purpose:"A portrait she has already looked at is different when she comes back. It only ever changes while unobserved, so she can never catch it — she can only notice afterwards, and doubt herself.",can:i=>i.canAlterPicture(),run(i){i.alterPicture()}},{id:"christ_weeps",category:"visual",intensity:.62,weight:3,phase:[3,5],cooldown:99999,purpose:"The one comforting object in the house starts crying. Not while she watches — she has to come back to it.",can:i=>i.canWeep(),run(i){i.makeChristWeep()}},{id:"wall_knock_close",category:"auditory",intensity:.36,weight:7,phase:[2,5],cooldown:25,purpose:"Knocking from inside the wall she is standing next to. Close, not distant.",run(i){const t=i.player.pos,e=i.player.forward(),n=Math.random()<.5?1:-1,s=t.x-e.z*1.5*n,r=t.z+e.x*1.5*n;i.audio.knock(s,1.3,r,2+Math.floor(Math.random()*3),2.8)}},{id:"wall_knock_answer",category:"auditory",intensity:.52,weight:3,phase:[3,5],cooldown:72,purpose:"Three knocks, a pause, then three more from somewhere else. Something in the house is answering something else in the house.",run(i){const t=i.player.pos;i.audio.knock(t.x+2,1.3,t.z,3,2.8),i.after(2.8,()=>i.audio.knock(t.x-6,1.3,t.z+4,3,2)),i.hud.say("Something answered it.",3.6)}},{id:"torch_flicker",category:"environmental",intensity:.3,weight:6,phase:[2,5],cooldown:28,purpose:"Her own torch stutters. The one thing she brought with her is not reliable either.",can:i=>i.torchOn(),run(i){i.flickerTorch(1+Math.random()*1.8)}},{id:"light_dies",category:"environmental",intensity:.4,weight:5,phase:[2,5],cooldown:33,purpose:"A lamp she switched on goes out by itself. She will go and switch it back on.",can:i=>i.lightsOn().length>0,run(i){const t=i.lightsOn(),e=t[Math.floor(Math.random()*t.length)];i.setLight(e,!1),i.audio.burst({x:e.light.position.x,y:2.4,z:e.light.position.z,freq:1600,q:5,gain:.1,decay:.06})}},{id:"chorus_of_women",category:"major",intensity:.92,weight:3,phase:[3,5],cooldown:260,purpose:"One woman crying, then two, then eight, from every direction and closing in — then every light dies at once and it stops dead. Four seconds of nothing. Then the lights come back one by one and the house is exactly as it was. The swell is the scare; the blackout is the release.",can:i=>!i.chorusBusy()&&!i.blackoutBusy()&&i.hasCrySamples(),run(i){i.runChorus()}},{id:"blackout_reveal",category:"major",intensity:.88,weight:2,phase:[3,5],cooldown:240,purpose:"Everything dies, including her torch. Four seconds of nothing. Then the light comes back on a bent-necked woman a metre and a half away, who opens her mouth, waits, and then retreats rather than attacks.",can:i=>!i.blackoutBusy()&&i.player.vel.length()<1.2&&i.player.feetY>-1,run(i){i.runBlackoutReveal()}},{id:"painting_wakes",category:"major",intensity:.95,weight:1,phase:[4,5],cooldown:999999,purpose:"The set piece. A shadow flees the torch beam into a portrait, the portrait comes alive, and she blacks out. When she comes round the room is exactly as it was — which is worse.",can:i=>!!i.nearestPainting(4.5)&&i.torchOn(),run(i){i.runPaintingSetPiece()}},{id:"lights_all_out",category:"major",intensity:.72,weight:2,phase:[3,5],cooldown:127,purpose:"Takes away the one resource she trusts. Recovery is slow and deliberate.",can:i=>i.lightsOn().length>=2,run(i){for(const t of i.lightsOn())i.setLight(t,!1);i.audio.burst({x:i.player.pos.x,y:2.5,z:i.player.pos.z,freq:70,q:1,gain:.42,decay:.9}),i.hud.say("The lights are gone.",3.6)}},{id:"portraits_stitched",category:"major",intensity:.68,weight:5,phase:[2,5],cooldown:999999,purpose:"Every portrait she has looked at has had its eyes closed and sewn shut, all at once, behind her back. She has already learned that pictures change here — this is the house going further and telling her it does not want to be looked at.",can:i=>i.canStitchPortraits(),run(i){i.stitchPortraits()}},{id:"caught_in_beam",category:"apparition",intensity:.74,weight:8,phase:[3,5],cooldown:85,purpose:"She sweeps the torch across a wall in a black room and the woman is on it for a sixth of a second. No fade in, no retreat, no scream — just there and then not. Because the torch is what revealed her, the player is left unsure whether the light found something or did something, and every wall they sweep afterwards is a question.",trigger:i=>i.torchOn&&i.unlitFor>3.5&&i.movingFor>.6,can:i=>i.canBeamFlash(),run(i){i.runBeamFlash()}},{id:"right_behind_you",category:"apparition",intensity:1,weight:6,phase:[4,5],cooldown:9999,purpose:"The single scripted peak. Takes her feet away, puts something behind her that does not leave when looked at, and screams. Every other apparition has taught her that they vanish when observed. This one does not.",ownReaction:!0,can:i=>i.canRightBehind()&&i.roomIsDark(),run(i){i.runRightBehind()}},{id:"yamete",category:"auditory",intensity:.3,weight:.4,phase:[4,5],cooldown:9999,purpose:"An out-of-place voice clip. It is funny, which is why it is weighted at almost nothing and locked to one firing — a joke that repeats stops the player taking any of the rest of it seriously.",can:i=>i.canYamete()&&i.roomIsDark(),run(i){i.runYamete()}}];Object.fromEntries(po.map(i=>[i.id,i]));const mo={unsettled:{id:"unsettled",label:"Unsettled",blurb:"Atmosphere and story. Nothing lunges at you.",rate:.55,gap:1.7,ceiling:.58,startle:.55,loud:.45,girlWait:1.35,girlFloor:4,bigSetPieces:!1},haunted:{id:"haunted",label:"Haunted",blurb:"The house is against you. The old balance, eased off.",rate:.85,gap:1.15,ceiling:.85,startle:.85,loud:.8,girlWait:1.1,girlFloor:2.4,bigSetPieces:!0},saltmere:{id:"saltmere",label:"Saltmere",blurb:"Everything, sooner, and closer. As intended.",rate:1.25,gap:.8,ceiling:1,startle:1,loud:1,girlWait:.78,girlFloor:1.6,bigSetPieces:!0}},Ye={...mo.haunted};function d_(i){const t=mo[i]??mo.haunted;return Object.assign(Ye,t),Ye}const wa={rest:[8,18],buildup:[18,38],peak:[14,34],relax:[9,20]},u_={1:.16,2:.34,3:.52,4:.78,5:1},f_=.55,p_=2,ba=i=>i[0]+Math.random()*(i[1]-i[0]);class m_{constructor(t){this.ctx=t,this.elapsed=0,this.escalation=0,this.tier=1,this.state="rest",this.stateTime=0,this.stateDuration=ba(wa.rest),this.eventsThisCycle=0,this.pressure=0,this.fatigue=0,this.lastFireAt=-999,this.cooldowns=new Map,this.history=[],this.timers=[],this.roomsVisited=new Set,this.currentRoom=null,this.roomTime=0,this.minSecondsBeforeAnything=75,this.minRoomsBeforeAnything=3,this.fallbackArmSeconds=240,this.triggerGap=9,this.notesRead=0,this.armedByReading=!1}after(t,e){this.timers.push({at:this.elapsed+t,fn:e})}readUrgency(){return 1+this.notesRead*.125}noteRead(){this.notesRead+=1,this.escalation=Math.min(1,this.escalation+.16),this.fatigue=Math.max(0,this.fatigue-.45),this._updateEscalation(),this.armedByReading=!0,this.state="buildup",this.stateTime=0,this.stateDuration=ba(wa.buildup),this.pressure=0;const t=4+Math.random()*11;this.after(t,()=>{if(this.elapsed-this.lastFireAt<6)return;const e=this._select();e&&this._fire(e)})}update(t){this.elapsed+=t;for(let a=this.timers.length-1;a>=0;a--)this.elapsed>=this.timers[a].at&&this.timers.splice(a,1)[0].fn();if(this._trackExploration(t),this._updateEscalation(),this._advanceCycle(t),!this._armed()||this._considerTriggers()||this.state!=="buildup"&&this.state!=="peak")return;const e=this.ctx.player.vel.length()<.4?1.35:1,n=this.state==="peak"?3.4:1;if(this.pressure+=t*.068*e*n*this.readUrgency()*Ye.rate,this.fatigue=Math.max(0,this.fatigue-t*.02*this.readUrgency()),this.pressure<1)return;const s=1/this.readUrgency(),r=(this.state==="peak"?4:11)*s*Ye.gap;this.elapsed-this.lastFireAt<r||this._considerFiring()}_armed(){return this.notesRead<p_?!1:this.armedByReading?!0:this.elapsed>=this.minSecondsBeforeAnything&&this.roomsVisited.size>=this.minRoomsBeforeAnything||this.elapsed>=this.fallbackArmSeconds}_trackExploration(t){const e=as(this.ctx.player.pos.x,this.ctx.player.pos.z),n=(e==null?void 0:e.id)??null;n!==this.currentRoom?(this.currentRoom=n,this.roomTime=0,n&&this.roomsVisited.add(n)):this.roomTime+=t}_updateEscalation(){var l,h,d,u;const t=((h=(l=this.ctx).progress)==null?void 0:h.call(l))??{notesRead:0,notesTotal:1},e=this.roomsVisited.size/Cs.length,n=t.notesTotal?t.notesRead/t.notesTotal:0,s=Math.min(1,this.elapsed/900),r=Math.min(1,this.ctx.player.distanceWalked/700),a=Math.min(1,(t.darkDebt??0)/240),o=e*.3+n*.22+s*.24+r*.08+a*.16;this.escalation=Math.max(this.escalation,Math.min(1,o));const c=Math.min(5,1+Math.floor(this.escalation*4.999));c!==this.tier&&(this.tier=c,(u=(d=this.ctx).onTierChange)==null||u.call(d,c))}_advanceCycle(t){var e;this.stateTime+=t,!(this.stateTime<this.stateDuration)&&(this.stateTime=0,this.state==="rest"?(this.state="buildup",this.eventsThisCycle=0):this.state==="buildup"?this.state=this.eventsThisCycle>0&&Math.random()<.72?"peak":"rest":this.state==="peak"?(this.state="relax",(e=this.ctx.audio)==null||e.duck(1,4)):this.state="rest",this.stateDuration=ba(wa[this.state]),(this.state==="rest"||this.state==="relax")&&(this.stateDuration/=this.readUrgency()))}_considerTriggers(){const t=this.ctx.triggers;if(!t||this.elapsed-this.lastFireAt<this.triggerGap*Ye.gap)return!1;let e=null;for(const n of po){if(!n.trigger||this.tier<n.phase[0])continue;const s=this.cooldowns.get(n.id)??-999;this.elapsed-s<n.cooldown/this.readUrgency()||n.trigger(t,this.ctx)&&(n.can&&!n.can(this.ctx)||this.history[this.history.length-1]!==n.id&&(!e||n.intensity>e.intensity)&&(e=n))}return e?(this._fire(e),!0):!1}_considerFiring(){const t=this.elapsed-this.lastFireAt,e=this.state==="peak"?.12:Math.max(.1,.58-t/300);if(Math.random()<e){this.pressure-=.3;return}const n=this._select();if(!n){this.pressure-=.2;return}this._fire(n)}_select(){const t=this.ctx,e=[],n=Math.min(u_[this.tier]??1,1.05-this.fatigue,Ye.ceiling),s=this.state==="peak"?n*.92:Math.min(n*.55,.1+g_(this.elapsed-this.lastFireAt));for(const a of po){if(this.tier<a.phase[0]||a.intensity>n)continue;const o=this.cooldowns.get(a.id)??-999;if(this.elapsed-o<a.cooldown||a.can&&!a.can(t)||this.history[this.history.length-1]===a.id)continue;let c=a.weight/(1+Math.abs(a.intensity-s)*2.4);this.history.slice(-3).includes(a.id)&&(c*=.25),c>0&&e.push({h:a,w:c})}if(!e.length)return null;let r=Math.random()*e.reduce((a,o)=>a+o.w,0);for(const a of e)if(r-=a.w,r<=0)return a.h;return e[e.length-1].h}_fire(t){var e,n;t.run(this.ctx),t.intensity>=f_&&!t.ownReaction&&((n=(e=this.ctx).startle)==null||n.call(e,Math.min(1,t.intensity))),this.lastFireAt=this.elapsed,this.cooldowns.set(t.id,this.elapsed),this.history.push(t.id),this.history.length>24&&this.history.shift(),this.eventsThisCycle+=1,this.fatigue=Math.min(1,this.fatigue+t.intensity*.8),this.pressure=0}}function g_(i){return Math.min(.5,i/320)}const __=new Set(["larder","bootroom","wc","linen","attic_east","scullery","backstair","pump_room"]),x_=new Set(["svccorr","treatment","attic_corr","hall","stairhall","landing"]);class v_{constructor({player:t,house:e,torchState:n}){this.player=t,this.house=e,this.torchState=n,this.stillFor=0,this.movingFor=0,this.darkFor=0,this.litFor=0,this.sprintingFor=0,this.dwellFor=0,this.unlitFor=0,this.torchOn=!1,this.roomId=null,this.roomVisits=new Map,this.enteredRoom=null,this.revisited=!1,this.sinceEnter=999,this.ENTER_WINDOW=1.6,this.justTurnedAround=!1,this._lastYaw=t.yaw,this._yawAccum=0,this._yawWindow=0,this._doorWasNear=!1,this.approachedDoor=null}get room(){return this.roomId}get isCorridor(){return x_.has(this.roomId)}get isDeadEnd(){return __.has(this.roomId)}get level(){return Math.max(-1,Math.min(2,Math.round(this.player.feetY/bn)))}get inDark(){if(this.torchState.on)return!1;const t=this.player.pos;for(const e of this.house.lights)if(e.on&&e.light.position.distanceTo(t)<7)return!1;return!0}get roomUnlit(){const t=this.player.pos;for(const e of this.house.lights)if(e.on&&e.light.position.distanceTo(t)<7)return!1;return!0}nearestLitLight(t=6){let e=null,n=t;for(const s of this.house.lights){if(!s.on)continue;const r=s.light.position.distanceTo(this.player.pos);r<n&&(e=s,n=r)}return e}doorAhead(t=3.2){const e=this.player.forward();let n=null,s=t;for(const r of this.house.doors){const a=r.center.distanceTo(this.player.pos);a>s||Math.abs(r.center.y-this.player.feetY-1.2)>1.6||r.center.clone().sub(this.player.pos).normalize().dot(e)<.75||(n=r,s=a)}return n}update(t){const e=this.player;e.vel.length()<.25?(this.stillFor+=t,this.movingFor=0):(this.movingFor+=t,this.stillFor=0),this.sprintingFor=e.sprinting?this.sprintingFor+t:0,this.inDark?(this.darkFor+=t,this.litFor=0):(this.litFor+=t,this.darkFor=0),this.unlitFor=this.roomUnlit?(this.unlitFor??0)+t:0,this.torchOn=this.torchState.on;let s=e.yaw-this._lastYaw;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;this._lastYaw=e.yaw,this._yawWindow+=t,Math.sign(s)!==Math.sign(this._yawAccum)&&Math.abs(s)>.001&&(this._yawAccum=0),this._yawAccum+=s,this._yawWindow>1.4&&(this._yawWindow=0,this._yawAccum=0),this.justTurnedAround=Math.abs(this._yawAccum)>1.8,this.justTurnedAround&&(this._yawAccum=0);const a=(rh[this.level+1]??as)(e.pos.x,e.pos.z),o=(a==null?void 0:a.id)??null;if(this.sinceEnter+=t,o!==this.roomId)if(this.roomId=o,this.dwellFor=0,o){const l=(this.roomVisits.get(o)??0)+1;this.roomVisits.set(o,l),this.enteredRoom=o,this.revisited=l>1,this.sinceEnter=0}else this.enteredRoom=null,this.revisited=!1;else this.dwellFor+=t;this.sinceEnter>this.ENTER_WINDOW&&(this.enteredRoom=null,this.revisited=!1);const c=this.doorAhead();this.approachedDoor=c&&!this._doorWasNear?c:null,this._doorWasNear=!!c}}const Wt={flesh:new Kt({color:9343638,roughness:.92,metalness:0}),cloth:new Kt({color:1382171,roughness:1,metalness:0}),hair:new Kt({color:526604,roughness:1,metalness:0}),shadow:new Rs({color:0,fog:!1})},ve=(i,t,e,n,s=10)=>new Pt(new Mn(i,t,e,s),n),mn=(i,t,e=12,n=10)=>new Pt(new Wn(i,e,n),t);function y_(i,t,e,n,s=0){const r=new qt,a=i/2,o=ve(t,t*.82,a,n,8);o.position.y=-a/2,r.add(o);const c=new qt;c.position.y=-a,c.rotation.x=s,r.add(c);const l=ve(t*.82,e,a,n,8);return l.position.y=-a/2,c.add(l),r}function _h(){const i=new qt,t=2.02,e=new qt;for(const m of[-1,1]){const f=ve(.062,.052,.9,Wt.cloth,8);f.position.set(m*.088,.45,0),e.add(f)}i.add(e);const n=ve(.155,.255,1,Wt.cloth,16);n.position.y=.5,i.add(n);for(let m=0;m<12;m++){const f=m/12*Math.PI*2,S=new Pt(new To(.035,.1+Math.random()*.1,4),Wt.cloth);S.position.set(Math.cos(f)*.245,.045,Math.sin(f)*.245),S.rotation.x=Math.PI,i.add(S)}const s=ve(.115,.155,.22,Wt.cloth,12);s.position.y=1.1,i.add(s);const r=ve(.165,.115,.42,Wt.cloth,12);r.position.y=1.42,i.add(r);const a=mn(.2,Wt.cloth,14,10);a.scale.set(1.05,.42,.62),a.position.y=1.64,i.add(a);const o=new qt;o.position.set(0,1.66,0),o.rotation.z=-1.24,o.rotation.x=.14,i.add(o);const c=ve(.05,.064,.34,Wt.flesh,10);c.position.y=.17,o.add(c);const l=new qt;l.position.y=.34,o.add(l);const h=mn(.115,Wt.flesh,16,14);h.scale.set(.95,1.16,1),l.add(h);const d=mn(.078,Wt.flesh,10,8);d.scale.set(.92,.7,.98),d.position.set(0,-.082,.048),l.add(d);const u=mn(.128,Wt.hair,16,12);u.position.y=.016,l.add(u);const p=new I;l.updateWorldMatrix(!0,!1),l.getWorldPosition(p),i.updateWorldMatrix(!0,!1);const g=i.worldToLocal(p.clone()),_=new qt;_.position.copy(g),i.add(_);for(let m=0;m<30;m++){const f=m/30*Math.PI*2,S=.055+Math.random()*.065,b=.46+Math.random()*.4,M=ve(.014,.006,b,Wt.hair,5);M.position.set(Math.cos(f)*S,-b/2-.02,Math.sin(f)*S),M.rotation.z=Math.cos(f)*.09,M.rotation.x=Math.sin(f)*.09,_.add(M)}for(const m of[-1,1]){const f=ve(.058,.044,.52,Wt.cloth,8);f.position.set(m*.185,1.38,.015),f.rotation.z=m*.055,i.add(f);const S=ve(.04,.03,.56,Wt.flesh,8);S.position.set(m*.205,.86,.03),S.rotation.z=m*.035,i.add(S);const b=mn(.046,Wt.flesh,10,8);b.scale.set(.62,1.55,.44),b.position.set(m*.215,.5,.035),i.add(b)}for(const m of[-1,1]){const f=mn(.06,Wt.flesh,8,6);f.scale.set(.7,.4,1.3),f.position.set(m*.088,.034,.05),i.add(f)}return i.traverse(m=>{m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0)}),i.userData.height=t,i.userData.headPivot=l,i.userData.neckPivot=o,i.userData.hair=_,i}function M_(){const i=new qt,t=1.24;for(const l of[-1,1]){const h=ve(.045,.038,.52,Wt.flesh,8);h.position.set(l*.062,.26,0),i.add(h)}const e=ve(.115,.175,.56,Wt.cloth,14);e.position.y=.5,i.add(e);const n=ve(.095,.115,.14,Wt.cloth,10);n.position.y=.85,i.add(n);const s=ve(.115,.095,.22,Wt.cloth,10);s.position.y=1.02,i.add(s);const r=mn(.125,Wt.cloth,12,8);r.scale.set(1.05,.44,.66),r.position.y=1.115,i.add(r);const a=ve(.036,.042,.075,Wt.flesh,8);a.position.set(0,1.145,.022),i.add(a);const o=mn(.103,Wt.flesh,14,12);o.scale.set(.96,1.1,1),o.position.set(0,1.245,.052),i.add(o);const c=mn(.114,Wt.hair,14,12);c.position.set(0,1.255,.048),i.add(c);for(let l=0;l<18;l++){const h=l/18*Math.PI*2,d=.05+Math.random()*.05,u=.22+Math.random()*.16,p=ve(.012,.005,u,Wt.hair,5);p.position.set(Math.cos(h)*d,1.25-u/2-.015,Math.sin(h)*d+.048),p.rotation.z=Math.cos(h)*.07,i.add(p)}for(const l of[-1,1]){const h=ve(.04,.032,.3,Wt.cloth,8);h.position.set(l*.118,.96,.012),i.add(h);const d=ve(.029,.022,.34,Wt.flesh,8);d.position.set(l*.124,.64,.02),i.add(d);const u=mn(.032,Wt.flesh,8,6);u.scale.set(.6,1.5,.44),u.position.set(l*.128,.43,.022),i.add(u)}return i.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0)}),i.userData.height=t,i}function S_(){const i=new qt,t=1.94,e=new Pt(new Mn(.24,.3,t*.58,14,1,!1,Math.PI*.18,Math.PI*1.64),Wt.cloth);e.position.y=t*.4,i.add(e);const n=new Pt(new Mn(.235,.245,t*.22,14,1,!1,Math.PI*.18,Math.PI*1.64),Wt.cloth);n.position.y=t*.79,i.add(n);const s=new Pt(new Wn(.115,14,12,Math.PI*.32,Math.PI*1.36),Wt.hair);s.position.y=t*.945,s.rotation.z=.26,i.add(s);const r=ve(.1,.115,.075,Wt.flesh,12);r.position.y=t*.875,i.add(r);for(const a of[-1,1]){const o=y_(t*.48,.052,.038,Wt.cloth,.05);o.position.set(a*.235,t*.8,-.02),i.add(o)}return i.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),i.userData.height=t,i}function w_(){const i=new qt,t=ve(.1,.14,.92,Wt.shadow,8);t.rotation.x=Math.PI/2,t.position.set(0,.3,0),i.add(t);const e=mn(.115,Wt.shadow,10,8);e.scale.set(1,.78,1.25),e.position.set(0,.24,.5),i.add(e);for(const n of[-1,1])for(const[s,r,a]of[[.34,.62,.3],[-.3,.58,.27]]){const o=ve(.036,.03,r,Wt.shadow,6);o.position.set(n*a*.55,.3+r/2-.06,s),o.rotation.z=n*-.55,i.add(o);const c=ve(.03,.02,r*.95,Wt.shadow,6);c.position.set(n*a,.3+r*.35,s*.85),c.rotation.z=n*.72,i.add(c)}return i.userData.height=.72,i}const b_={bentneck:_h,remainder:M_,listener:S_,crawler:w_};function E_(i){return(b_[i]??_h)()}const T_={bentneck:2.02,remainder:1.3,listener:1.94,crawler:.72},A_={standing:"remainder",bentneck:"bentneck",crawling:"crawler",listener:"listener",child:"remainder"};class Ze{constructor(t,e="standing",n=1.8){var c,l,h;this.kind=e;const s=A_[e]??"remainder",r=(c=Ze.sprites)==null?void 0:c[s];this.height=T_[s]??n;const a=((l=r==null?void 0:r.userData)==null?void 0:l.aspect)??.5;this.pad=((h=r==null?void 0:r.userData)==null?void 0:h.pad)??1.16;const o=this.height*a*this.pad;this.material=new Rs({map:r??null,color:r?16777215:0,transparent:!0,opacity:0,depthWrite:!1,side:gn,fog:!1,toneMapped:!1}),this.mesh=new Pt(new on(o,this.height*this.pad),this.material),this.mesh.renderOrder=6,this.mesh.visible=!1,t.add(this.mesh),this.baseY=0,this.jitterPhase=Math.random()*100}static setSprites(t){Ze.sprites=t}set opacityAll(t){this.material.opacity=t}showAt(t,e,n=.95,s=0){this.baseY=s,this.mesh.position.set(t,s+this.height*this.pad/2,e),this.material.opacity=n,this.mesh.visible=!0}hide(){this.mesh.visible=!1,this.material.opacity=0}moveTo(t,e){this.mesh.position.x=t,this.mesh.position.z=e}faceCamera(t){if(!this.mesh.visible)return;const e=t.position;this.mesh.rotation.y=Math.atan2(e.x-this.mesh.position.x,e.z-this.mesh.position.z)}update(t,e=0){if(!this.mesh.visible)return;const n=e+this.jitterPhase;this.mesh.position.y=this.baseY+this.height*this.pad/2+Math.sin(n*11)*.005,this.mesh.rotation.z=Math.sin(n*7.3)*.005}dispose(t){t.remove(this.mesh),this.mesh.geometry.dispose(),this.material.dispose()}}class R_{constructor({scene:t,camera:e,audio:n,hud:s,player:r,torchState:a,house:o,setLight:c}){this.scene=t,this.camera=e,this.audio=n,this.hud=s,this.player=r,this.torchState=a,this.house=o,this.setLight=c,this.active=!1,this.phase=null,this.t=0,this.figure=null,this.restore=[],this.shake=0}start(){if(!this.active){this.active=!0,this.phase="dark",this.t=0,this.restore=this.house.lights.filter(t=>t.on);for(const t of this.restore)this.setLight(t,!1);this.torchWasOn=this.torchState.on,this.torchState.on=!1,this.torchState.forcedOff=!0,this.audio.burst({x:this.player.pos.x,y:2.6,z:this.player.pos.z,freq:68,q:1,gain:1.4,decay:.8,type:"lowpass"}),this.audio.duck(0,.8)}}update(t){var e,n;if(this.active){if(this.t+=t,this.phase==="dark"){this.t>4.2&&this._reveal();return}if(this.phase==="reveal"){(e=this.figure)==null||e.faceCamera(this.camera),(n=this.figure)==null||n.update(t,this.t),this.shake=Math.max(0,.055*(1-this.t/2.4)),this.t>2.4&&(this.phase="withdraw",this.t=0);return}if(this.phase==="withdraw"){const s=Math.min(1,this.t/2.2),r=this.player.forward(),a=1.5+s*5.5;this.figure.baseY=this.player.feetY+s*.9,this.figure.showAt(this.player.pos.x+r.x*a,this.player.pos.z+r.z*a,.95*(1-s),this.figure.baseY),this.figure.faceCamera(this.camera),this.shake=0,s>=1&&this._end()}}}_reveal(){this.phase="reveal",this.t=0;const t=this.player.forward(),e=this.player.pos.x+t.x*1.5,n=this.player.pos.z+t.z*1.5;this.figure=new Ze(this.scene,"bentneck"),this.figure.showAt(e,n,.95,this.player.feetY),this.figure.faceCamera(this.camera),this.torchState.forcedOff=!1,this.torchState.on=!0;const s=this.figure.mesh.position;this.audio.breath(s.x,1.5,s.z,{gain:.9}),this.hud.say("She is not breathing out.",3.4)}_end(){var t;(t=this.figure)==null||t.dispose(this.scene),this.figure=null;for(const e of this.restore)this.setLight(e,!0);this.restore=[],this.torchState.on=this.torchWasOn,this.torchState.forcedOff=!1,this.audio.duck(1,5),this.active=!1,this.phase=null,this.shake=0}}class C_{constructor({audio:t,hud:e,player:n,house:s,setLight:r,after:a}){this.audio=t,this.hud=e,this.player=n,this.house=s,this.setLight=r,this.after=a,this.active=!1,this.phase=null,this.t=0,this.voices=[],this.restore=[]}start(){this.active||(this.active=!0,this.phase="swell",this.t=0,this.nextVoiceAt=0,this.voiceCount=0,this.voices=[],this.audio.duck(.35,2),this.hud.say("Someone is crying.",3.2))}_addVoice(){const t=this.player.pos,e=Math.random()*Math.PI*2,n=9-this.voiceCount*1.1+Math.random()*3,s=t.x+Math.cos(e)*n,r=t.z+Math.sin(e)*n,a=.78+Math.random()*.55,o=.5+this.voiceCount*.22,c=Math.random()<.5?"cryWoman":"cryWoman2",l=this.audio.playSample(c,{x:s,y:1.3,z:r,gain:o,rate:a,fadeIn:1.4});l&&this.voices.push(l),this.voiceCount+=1}update(t){if(this.active){if(this.t+=t,this.phase==="swell"){this.t>=this.nextVoiceAt&&this.voiceCount<8&&(this._addVoice(),this.nextVoiceAt=this.t+Math.max(.5,1.7-this.voiceCount*.16)),this.voiceCount>=4&&!this._warned&&(this._warned=!0,this.hud.say("They are all crying.",3.4)),this.t>11.5&&this._blackout();return}this.phase==="black"&&this.t>4.6&&this._restore()}}_blackout(){var t;this.phase="black",this.t=0;for(const e of this.voices)try{e.src.stop()}catch{}this.voices=[],this.restore=this.house.lights.filter(e=>e.on);for(const e of this.restore)this.setLight(e,!1);this.audio.burst({x:this.player.pos.x,y:2.4,z:this.player.pos.z,freq:52,q:.9,gain:2.6,decay:1.5,type:"lowpass"}),this.audio.duck(0,.35),this.torchWasOn=(t=this.player.torch)==null?void 0:t.on,this.player.torch&&(this.player.torch.on=!1,this.player.torch.forcedOff=!0)}_restore(){this.restore.forEach((e,n)=>{this.after(.35*n,()=>this.setLight(e,!0))});const t=.35*this.restore.length;this.player.torch&&(this.player.torch.forcedOff=!1,this.player.torch.on=this.torchWasOn),this.after(t+.2,()=>{this.audio.duck(1,4),this.hud.say("Nothing. As if none of it happened.",4.5)}),this.restore=[],this.active=!1,this.phase=null,this._warned=!1}}class P_{constructor({scene:t,camera:e,audio:n,hud:s,player:r,after:a}){this.scene=t,this.camera=e,this.audio=n,this.hud=s,this.player=r,this.after=a,this.active=!1,this.shadow=null,this.painting=null,this.originalMap=null,this.armed=!1}start(t){if(this.active)return;this.active=!0,this.painting=t;const e=t.getWorldPosition(new I),n=this.player.pos,s=this.player.forward(),r=new I(-s.z,0,s.x);let a=0,o=0;for(const c of Math.random()<.5?[-1,1]:[1,-1])if(a=n.x+s.x*1.1+r.x*2.3*c,o=n.z+s.z*1.1+r.z*2.3*c,as(a,o))break;as(a,o)||(a=n.x+s.x*1.2,o=n.z+s.z*1.2),this.shadow=new Ze(this.scene,"crawling"),this.shadow.showAt(a,o,0,this.player.feetY),this._tween={t:0,from:new I(a,0,o),to:e,phase:"appear"},this.audio.duck(.15,1.2),this.hud.say("There is something on the floor.",3.2)}update(t){if(!this.active||!this._tween)return;const e=this._tween;if(e.t+=t,e.phase==="appear"){this.shadow.material.opacity=Math.min(.9,e.t*1.6),this.shadow.faceCamera(this.camera),e.t>1.4&&(e.phase="flee",e.t=0);return}if(e.phase==="flee"){const n=Math.min(1,e.t/1.5),s=n*n;this.shadow.moveTo(e.from.x+(e.to.x-e.from.x)*s,e.from.z+(e.to.z-e.from.z)*s),this.shadow.mesh.scale.setScalar(1-s*.75),this.shadow.material.opacity=.9*(1-s*.9),this.shadow.faceCamera(this.camera),n>=1&&(this.shadow.hide(),e.phase="waiting",e.t=0,this.armed=!0,this.audio.duck(0,2),this.hud.say("It went into the picture.",3.4));return}if(e.phase==="waiting"){(this.painting.getWorldPosition(new I).distanceTo(this.player.pos)<2||e.t>75)&&this._wake();return}e.phase==="black"&&e.t>2.6&&this._recover()}_wake(){const t=this._tween;t.phase="black",t.t=0,this.armed=!1;const e=this.painting.userData.art;this.originalMap=e.material.map,e.material.map=xg(this.painting.userData.seed??0),e.material.emissive=new kt(2234898),e.material.needsUpdate=!0;const n=this.painting.getWorldPosition(new I);this.audio.scream(n.x,n.y,n.z,2.8),this.after(.28,()=>this.hud.fade(1,.18)),this.player.frozen=!0}_recover(){var e;const t=this.painting.userData.art;t.material.map=this.originalMap,t.material.emissive=new kt(0),t.material.needsUpdate=!0,this.hud.fade(0,2.4),this.player.frozen=!1,this.audio.duck(1,5),this.after(2,()=>this.hud.say("Nothing. It is exactly as it was.",5)),(e=this.shadow)==null||e.dispose(this.scene),this.shadow=null,this._tween=null,this.active=!1}}class D_{constructor({scene:t,camera:e,audio:n,hud:s,player:r,house:a,setLight:o,after:c}){Object.assign(this,{scene:t,camera:e,audio:n,hud:s,player:r,house:a,setLight:o,after:c}),this.active=!1,this.done=!1,this.phase=null,this.t=0,this.figure=null,this.choiceMade=null}get awaitingChoice(){return this.active&&this.phase==="offer"}start(){if(this.active||this.done)return;this.active=!0,this.phase="arrive",this.t=0;for(const r of this.house.lights)this.setLight(r,!1);this.audio.duck(0,2.5),this.hud.say("There is someone standing on the other side of the grate.",5);const t=this.player.pos,e=this.player.forward();this.figure=new Ze(this.scene,"child"),this.figure.showAt(t.x+e.x*5.2,t.z+e.z*5.2,0,this.player.feetY),this.figure.faceCamera(this.camera);const n=this.figure.mesh.position.x,s=this.figure.mesh.position.z;this.audio.playSample("jumpscare",{x:n,y:this.player.feetY+1,z:s,gain:1.5,duration:3,fadeIn:.002}),this.audio.playSample("whisperFemale",{x:n,y:this.player.feetY+1,z:s,gain:1,offset:1.5,fadeIn:.6})}update(t){var e;if(this.active){if(this.t+=t,(e=this.figure)==null||e.faceCamera(this.camera),this.phase==="arrive"){this.figure.material.opacity=Math.min(.95,this.t*.5),this.t>4.5&&(this.phase="approach",this.t=0,this.hud.say("She is not coming at me. She is just coming.",5));return}if(this.phase==="approach"){const n=Math.min(1,this.t/9),s=this.player.pos,r=this.player.forward(),a=5.2-n*3.9;this.figure.showAt(s.x+r.x*a,s.z+r.z*a,.95,this.player.feetY),n>=1&&(this.phase="offer",this.t=0,this.hud.say("She is holding her hands out. She has been waiting.",6));return}if(this.phase==="offer"){this.t>90&&this.choose("refuse");return}this.phase==="ending"&&this.t>3.2&&!this._shown&&(this._shown=!0,this.hud.showEnding(L_[this.choiceMade]))}}choose(t){if(this.phase==="offer")if(this.choiceMade=t,this.phase="ending",this.t=0,this.player.frozen=!0,t==="remember"){const e=this.player.pos,n=this.player.forward();this.figure.showAt(e.x+n.x*.5,e.z+n.z*.5,.98,this.player.feetY),this.audio.playSample("cryWoman",{x:e.x,y:e.y,z:e.z,gain:2.4,rate:1.3,fadeIn:.2}),this.hud.fadeWhite(1,2.6)}else t==="trade"?(this.audio.breath(this.player.pos.x,this.player.pos.y,this.player.pos.z,{gain:1.4}),this.hud.fade(1,3)):(this.figure.hide(),this.audio.duck(1,6),this.hud.fade(1,3))}}const pi={length:28.76,screamAt:25.95,screamPeak:27,startAt:0};class I_{constructor({scene:t,camera:e,audio:n,hud:s,player:r,startle:a}){this.scene=t,this.camera=e,this.audio=n,this.hud=s,this.player=r,this.startle=a,this.active=!1,this.done=!1,this.shake=0,this.t=0,this.figure=null,this.src=null,this.reacted=!1}start(){if(this.active||!this.audio.hasSample("rightBehindYou"))return;this.active=!0,this.t=0,this.shake=0,this.reacted=!1,this.player.frozen=!0;const t=this.player.pos,e=this.player.forward();this.figure=new Ze(this.scene,"bentneck"),this.figure.showAt(t.x-e.x*1.5,t.z-e.z*1.5,0,this.player.feetY),this.figure.faceCamera(this.camera),this.src=this.audio.playSample("rightBehindYou",{x:t.x,y:t.y,z:t.z,gain:1.5,offset:pi.startAt,fadeIn:.35}),this.hud.say("She cannot move her feet.",3.2)}update(t){var r;if(!this.active)return;this.t+=t;const e=pi.screamAt-pi.startAt,n=pi.screamPeak-pi.startAt,s=pi.length-pi.startAt;if(this.figure){const a=Math.min(.92,this.t*.5);this.figure.material.opacity=a,this.figure.update(t,this.t),this.figure.faceCamera(this.camera);const c=1.5-Math.max(0,Math.min(1,(this.t-(e-3))/3))*.75,l=this.player.pos,h=this.player.forward();this.figure.showAt(l.x-h.x*c,l.z-h.z*c,a,this.figure.baseY),this.figure.faceCamera(this.camera)}!this.reacted&&this.t>=e&&(this.reacted=!0,(r=this.startle)==null||r.call(this,1,this.figure?this.figure.mesh.position:null)),this.t<e?this.shake=0:this.t<n?this.shake=.02+.11*((this.t-e)/Math.max(.01,n-e)):this.t<s?this.shake=.13*Math.max(0,1-(this.t-n)/Math.max(.01,s-n)):this.shake=0,this.t>=s&&this._finish()}_finish(){this.active=!1,this.done=!0,this.shake=0,this.player.frozen=!1,this.figure&&(this.figure.dispose(this.scene),this.figure=null),this.src=null,this.hud.say("Her feet come back.",2.6)}}const L_={remember:{title:"REMEMBER",body:`She walks into you and there is no impact, because there was never
anything there to hit.

Twenty-seven years arrive at once. His name. The cold of the bars. Four minutes.
The exact moment your hands opened.

You come up the cellar steps carrying all of it, and the house is quiet behind
you — not watching, not waiting. Empty. There is nothing left in it, because you
took the last thing out.

The causeway is clear. You are eight years old and thirty-four years old and
you have a brother, and he has been dead since March 1998, and you are the only
person alive who knows it.`},refuse:{title:"REFUSE",body:`You turn around and you walk up the stairs, and she does not follow,
because she never once has.

The tide is going out. The survey is incomplete. You will file it that way, the
same as the last two times, and you will not be able to say why.

From the causeway the house looks like a house.

There is a small figure at an upstairs window, and you do not look at it, and
by the time you reach the mainland you have already forgotten there was one.

The estate will write to you again. The contract will be dated the fourth.`},trade:{title:"TRADE",body:`You give her something else instead. You do not choose what — that
is not how it works down here — you simply stop holding one thing so that she
can have it, and the room takes it.

You do not know what it was. You will never know. That is the whole mechanism.

The causeway floods at four. You do not go down to it.

There is a caretaker's office on the ground floor with a kettle in it, and a
family plot outside with four headstones, and the fourth one has no name on it
yet.

You are not frightened any more. You are just here.`}},me={w:512,h:1024};let vs=null;function U_(i){if(vs)return vs;vs={};const t=["bentneck","remainder","listener","crawler"];for(const e of t)vs[e]=N_(i,e);return vs}function xh(i,t,e){new Qd().load(e,n=>{var s,r;n.colorSpace=Ee,n.minFilter=Xe,n.magFilter=Xe,n.generateMipmaps=!1,n.premultiplyAlpha=!1,n.userData={aspect:(((s=n.image)==null?void 0:s.width)??1)/(((r=n.image)==null?void 0:r.height)??1),pad:1,real:!0},i[t]=n},void 0,()=>{})}function N_(i,t){const e=E_(t),n=e.userData.height??1.9,s=new Hl;s.add(e);const a=n*(1+.14)/2,o=a*(me.w/me.h),c=new Do(-o,o,a,-a,.01,40);c.position.set(0,n/2,8),c.lookAt(0,n/2,0);const l=new mr(10466504,3.6);l.position.set(-4,4,-3),s.add(l);const h=new mr(8229032,2.2);h.position.set(4,2.5,-2.5),s.add(h);const d=new mr(12168342,1.15);d.position.set(.6,-.4,5),s.add(d),s.add(new Xl(3489868,.9));const u=new si(me.w,me.h,{minFilter:Xe,magFilter:Xe,format:an}),p=i.getRenderTarget(),g=i.getClearAlpha();i.setRenderTarget(u),i.setClearColor(0,0),i.clear(!0,!0,!0),i.render(s,c);const _=new Uint8Array(me.w*me.h*4);return i.readRenderTargetPixels(u,0,0,me.w,me.h,_),i.setRenderTarget(p),i.setClearAlpha(g),u.dispose(),e.traverse(m=>{m.isMesh&&(m.geometry.dispose(),m.material.dispose&&m.material.dispose())}),F_(_,t)}function F_(i,t){const e=document.createElement("canvas");e.width=me.w,e.height=me.h;const n=e.getContext("2d"),s=n.createImageData(me.w,me.h);for(let l=0;l<me.h;l++){const h=(me.h-1-l)*me.w*4,d=l*me.w*4;for(let u=0;u<me.w*4;u++)s.data[d+u]=i[h+u]}n.putImageData(s,0,0);const r=document.createElement("canvas");r.width=me.w,r.height=me.h;const a=r.getContext("2d");a.filter="blur(1.6px)",a.drawImage(e,0,0),a.filter="none",a.globalAlpha=.75,a.drawImage(e,0,0);const o=a.getImageData(0,0,me.w,me.h);for(let l=0;l<o.data.length;l+=4){if(o.data[l+3]<6)continue;const h=(Math.random()-.5)*26;o.data[l]+=h,o.data[l+1]+=h,o.data[l+2]+=h}a.putImageData(o,0,0);const c=new ls(r);return c.colorSpace=Ee,c.anisotropy=4,c.needsUpdate=!0,c.userData={kind:t,aspect:me.w/me.h},c}const On=[{id:"n_contract",room:"hall",pos:[13.9,.92,.45],title:"Instruction to record",hand:"typed",body:`NORTHUMBERLAND ESTATES (DISPOSALS) LTD
Ref: NE/DIS/4471-C

Property:   SALTMERE HOUSE, Saltmere Point
Status:     Condemned. Demolition approved.
Surveyor:   M. Deverell

Measure every room. Photograph everything.

Cross the causeway at low water only. You are responsible for your
own tide times.

The sub-basement is not covered by our insurance. Do not go down
there. The hatch was sealed by the last tenant and it stays sealed.`,afterword:"There is a stamp in the corner. I have not looked at it properly."},{id:"n_elinor_1",room:"kitchen",pos:[19,.82,18],title:"Note left out for the milkman",hand:"cursive",body:`No milk Thurs please — away overnight.

2 pints the other days as usual. If the boy's out the front he'll take
it in, he likes being given a job.

E. Deverell`,afterword:"The boy."},{id:"n_decorator",room:"bed_mara",pos:[4.5,3.26,3],title:"Decorator’s docket",hand:"typed",body:`HAYLOCK & SON — PAINTERS

Job:  front bedroom, 1st floor. Two coats.

Note for the lady of the house, as asked —

We can put a third coat on if you want, but it will keep coming
through in a cold room. The pencil has gone into the plaster, not just
the paper.

Honest answer, it is cheaper to leave it and hang something over it.`,afterword:"There is something under the paint in this room."},{id:"n_march",room:"scullery",pos:[11.6,.95,17.5],title:"Torn from a diary",hand:"cursive",body:`Went down again.

When the tide comes in, water comes up through the floor of the lower
room. Not a trickle. It comes UP, out of the floor.

There is an iron grate over the shaft. It does not lock. There is no
fitting on it for a lock at all.

Told them both. Told them both twice. Told M again at tea and she made
that face at me.

She is eight.`},{id:"n_last",room:"backstair",pos:[3.1,.06,16.4],title:"Written on the back of a photograph",hand:"cursive",body:`Both of them on the wall by the boathouse, squinting.

She does not ask about him.

Not once, not in four months. I left his coat on the hook in the hall
for a fortnight to see what she would do. She walked past it every
single day.`,afterword:"There are three people in this photograph."},{id:"n_ambrey_final",pinned:!0,room:"pump_room",pos:[14.5,-2.94,17.4],title:"Loose page, undated",hand:"cursive",body:`I have worked it out and I will not write down how.

Nothing is destroyed. What we take out of a patient does not fade and
does not go anywhere. It stays in the room where it was taken. All of
it.

And it does not get older the way we do. It stays exactly the age it
was when it was made.

After some years it begins to want the person it came out of.`},{id:"n_elinor_confession",pinned:!0,room:"cellar",pos:[8,-2.94,18],title:"The eleventh of March",hand:"cursive",body:`Tobias is dead. He was six. It took about four minutes and I was in
the kitchen for two of them.

The water came up through the cistern faster than the grate could pass
it. He went under.

Marianne was lying on the grate with both her arms through the bars,
holding on to him.

She is eight years old. She held on. Then she could not hold on any
longer, and she let go.

She has not said one word since.

I know what the doctor did in these rooms. I could take this out of
her tonight.`},{id:"n_after",pinned:!0,room:"cellar",pos:[6.2,-2.94,20],title:"Four months later",hand:"cursive",body:`It worked.

She is happy. There is no gap in her. I keep feeling for the edge of
it and there is not one.

But I did not destroy it. I never had any way to destroy it. I only
moved it. And I know exactly where I put it, because I did it in the
lower room, and every page that man wrote says it stays where it is
made.

So there is a girl down there who is my daughter. She is eight. She is
going to be eight for as long as this house is standing.`,afterword:"She left one of them in a room and drove away with the other one."},{id:"n_the_stamp",pinned:!0,room:"cistern",pos:[18.2,-2.94,16.2],title:"Instruction history",hand:"typed",body:`SALTMERE HOUSE — INSTRUCTION HISTORY
Printed for file. Not to be issued to contractor.

  4471-A    M. Deverell    closed, no report received
  4471-B    M. Deverell    closed, no report received
  4471-C    M. Deverell    current

Engaged on this address three times. Fee paid in full on each
occasion. No report has ever been received.`,afterword:"I have been here before. Twice. I do not remember either of them."}],el=["n_contract","n_elinor_1","n_decorator","n_march","n_last","n_ambrey_final","n_elinor_confession","n_after","n_the_stamp"],O_=4;On.filter(i=>!i.pinned).length;On.sort((i,t)=>el.indexOf(i.id)-el.indexOf(t.id));On.forEach((i,t)=>{i.number=t+1});class k_{constructor({hud:t,onRead:e}){this.hud=t,this.onRead=e,this.read=new Set,this.open=null,this.root=document.createElement("div"),this.root.id="note-reader",this.root.innerHTML=`
			<div class="nr-scrim"></div>
			<div class="nr-panel">
				<div class="nr-hand"></div>
				<div class="nr-transcript">
					<div class="nr-num"></div>
					<h2></h2>
					<pre></pre>
					<div class="nr-after"></div>
					<div class="nr-found"></div>
					<div class="nr-close">Press <b>E</b> or <b>Esc</b> to put it back</div>
				</div>
			</div>
		`,document.body.appendChild(this.root),this.handEl=this.root.querySelector(".nr-hand"),this.numEl=this.root.querySelector(".nr-num"),this.titleEl=this.root.querySelector(".nr-transcript h2"),this.bodyEl=this.root.querySelector(".nr-transcript pre"),this.afterEl=this.root.querySelector(".nr-after"),this.foundEl=this.root.querySelector(".nr-found"),this._onKey=n=>{this.open&&(n.code==="Escape"||n.code==="KeyE")&&(n.preventDefault(),this.close())},window.addEventListener("keydown",this._onKey)}get readCount(){return this.read.size}get total(){return On.length}isOpen(){return!!this.open}nextInSequence(){return On.find(t=>!t.pinned&&!this.read.has(t.id))??null}showForActor(t){if(!t.assigned){const e=On.find(s=>s.pinned&&s.id===t.homeNoteId&&!this.read.has(s.id)),n=this.read.size>=O_;if(t.assigned=n&&e?e:this.nextInSequence(),!t.assigned)return}this.show(t.assigned,t.homeRoom)}show(t,e=null){var s;this.open=t;const n=!this.read.has(t.id);this.read.add(t.id),this.showAfterword=t.afterword?e===null||e===t.room:!1,this.handEl.textContent=t.body,this.handEl.className=`nr-hand hand-${t.hand}`,this.numEl.textContent=`№ ${String(t.number).padStart(2,"0")} of ${On.length}`,this.titleEl.textContent=t.title,this.bodyEl.textContent=t.body,this.afterEl.textContent=this.showAfterword?t.afterword:"",this.afterEl.style.display=this.showAfterword?"block":"none",this.foundEl.textContent=`${this.read.size} of ${On.length} found`,this.root.classList.add("on"),n&&((s=this.onRead)==null||s.call(this,t))}close(){this.root.classList.remove("on"),this.open=null}}const Ea=[{text:"My name is Mara Deverell. My job is to look at old buildings before they are knocked down.",hold:5.4},{text:"I measure the rooms. I take photographs. I write down what the building was, so there is a record of it after it is gone.",hold:6.8},{text:"This one is called Saltmere House. It stands on a small island off the coast of Northumberland.",hold:5.8},{text:"One road joins the island to the mainland. The sea covers that road for six hours out of every twelve. While it is covered, nobody can leave.",hold:7.4},{text:"I took this job because I knew the address. I lived in this house when I was eight years old. We were here for eleven months.",hold:7},{text:"I do not remember any of it. Not one single day. My mother never talked about it, and I never thought to ask her.",hold:6.6},{text:"The tide turns at four. I have six hours inside.",hold:4.4},{text:"SALTMERE",hold:4.4,title:!0}];class B_{constructor({onFinish:t,audio:e}){this.onFinish=t,this.audio=e,this.finished=!1,this.index=0,this.timer=0,this.root=document.createElement("div"),this.root.id="cutscene",this.root.innerHTML=`
			<div class="cs-bg"></div>
			<div class="cs-text"></div>
			<div class="cs-skip">Press <b>Esc</b> or <b>Space</b> to skip</div>
		`,document.body.appendChild(this.root),this.bg=this.root.querySelector(".cs-bg"),this.textEl=this.root.querySelector(".cs-text"),this.skipEl=this.root.querySelector(".cs-skip"),this._onKey=n=>{this.finished||(n.code==="Escape"||n.code==="Space"||n.code==="Enter")&&(n.preventDefault(),this.skip())},window.addEventListener("keydown",this._onKey),this.root.addEventListener("click",()=>this.skip()),this._show(0)}_show(t){var n;const e=Ea[t];e&&(this.textEl.className="cs-text"+(e.title?" cs-title":""),this.textEl.textContent=e.text,this.textEl.classList.remove("on"),this.textEl.offsetWidth,this.textEl.classList.add("on"),e.title&&((n=this.audio)!=null&&n.ready)&&this.audio.burst({x:0,y:1,z:-2,freq:58,q:1.2,gain:.3,decay:2.6,type:"lowpass"}))}update(t){if(this.finished)return;this.timer+=t;const e=Ea[this.index];e&&(this.timer>e.hold-.9&&this.textEl.classList.remove("on"),this.timer>=e.hold&&(this.timer=0,this.index+=1,this.index>=Ea.length?this._finish():this._show(this.index)),this.index>=1&&this.skipEl.classList.add("faded"))}skip(){this.finished||this._finish(!0)}_finish(t=!1){var e;this.finished=!0,window.removeEventListener("keydown",this._onKey),this.root.classList.add("done"),setTimeout(()=>this.root.remove(),t?400:2e3),(e=this.onFinish)==null||e.call(this,t)}}const nl={terrified:["What was that. What the hell was that.","That was not in my head. That was not in my head.","Okay. Okay. Breathe. Just breathe.","Something is in here with me.","I am not staying in this house. I am not staying in here.","I saw it. I know I saw it.","Get out. Get out get out get out."],unease:["I think I am going out of my mind.","This house feels awake.","Nobody has lived here in twenty years. It does not feel empty.","I have surveyed forty buildings. None of them watched me back.","I keep hearing myself walk, and it is not always me.","My hands will not stay still.","I should have taken the other contract.","There is something wrong with the air in here.","I do not remember any of this. I should remember some of this."],girlFirst:["There is a little girl in here. There is a child in this house."],girlSpeak:["Hello? Who are you?","What do you want from me?","I am not going to hurt you. I promise.","Are you on your own in here?","Please. Just tell me your name.","Wait. Do not go.","Why do you keep looking at me like that?","How long have you been in here?"],girlGone:["She was right there.","Where did she go?","That was a child. That was a child standing there."],dark:["I cannot see anything down here.","I do not like this.","There is somebody breathing in this room."]},z_={terrified:14,unease:95,girlFirst:0,girlSpeak:22,girlGone:40,dark:55};class H_{constructor({hud:t}){this.hud=t,this.t=0,this.lastAny=-999,this.lastBank={},this.pools={},this.nextUnease=150+Math.random()*180}_draw(t){let e=this.pools[t];if(!e||!e.length){e=nl[t].slice();for(let n=e.length-1;n>0;n--){const s=Math.floor(Math.random()*(n+1));[e[n],e[s]]=[e[s],e[n]]}this.pools[t]=e}return e.pop()}say(t,{force:e=!1}={}){if(!nl[t])return!1;if(!e){if(this.t-this.lastAny<5)return!1;const s=z_[t]??30;if(this.t-(this.lastBank[t]??-999)<s)return!1}const n=this._draw(t);return n?(this.lastAny=this.t,this.lastBank[t]=this.t,this.hud.say(n,3.4+n.length*.035),!0):!1}hasSaid(t){return this.lastBank[t]!==void 0}update(t){this.t+=t,this.nextUnease-=t,this.nextUnease<=0&&(this.nextUnease=150+Math.random()*210,this.say("unease"))}}const V_=11,G_=10.5,il=-.11,sl=Jl.filter(i=>i.kind==="window").map(i=>{const t=i.axis==="x",e=t?(i.a+i.b)/2:i.c,n=t?i.c:(i.a+i.b)/2;return{id:i.id,x:e,z:n,nx:t?0:Math.sign(i.c-V_)||1,nz:t?Math.sign(i.c-G_)||-1:0,tx:t?1:0,tz:t?0:1,halfWidth:Math.abs(i.b-i.a)/2}}),rl=[12,9.5,7.5,6,4.5,3.2,2.4,1.8];class W_{constructor({scene:t,camera:e,player:n,audio:s,voice:r,findSpot:a,isDark:o}){this.scene=t,this.camera=e,this.player=n,this.audio=s,this.voice=r,this.findSpot=a,this.isDark=o??(()=>!0),this.fig=null,this.visible=!1,this.enabled=!1,this.sightings=0,this.t=0,this.stateT=0,this.seenThisAppearance=!1,this.unseenFor=0,this.window=null,this.slip=0,this.slipDir=null,this.nextAppear=(12+Math.random()*18)*Ye.girlWait}enable(){this.enabled=!0}get stage(){return Math.min(rl.length-1,this.sightings)}get wantDistance(){return Math.max(Ye.girlFloor,rl[this.stage])}_watched(){if(!this.visible||!this.fig)return!1;const t=this.fig.mesh.position;return this.player.isLookingAt(new I(t.x,t.y,t.z),.55)}_distance(){if(!this.fig)return 1/0;const t=this.fig.mesh.position;return Math.hypot(t.x-this.player.pos.x,t.z-this.player.pos.z)}appearAtWindow(){if(this.visible||!sl.length||this.player.feetY>1||this.player.feetY<-1)return!1;const t=sl.filter(a=>{const o=Math.hypot(a.x-this.player.pos.x,a.z-this.player.pos.z);return o>4&&o<15});if(!t.length)return!1;const e=t[Math.floor(Math.random()*t.length)],n=1.9,s=e.x+e.nx*n,r=e.z+e.nz*n;return this.fig||(this.fig=new Ze(this.scene,"child")),this.fig.showAt(s,r,0,il),this.fig.faceCamera(this.camera),this.visible=!0,this.window=e,this.slip=0,this.stateT=0,this.seenThisAppearance=!1,this.unseenFor=0,this.audio.playSample("whisperFemale",{x:s,y:il+br,z:r,gain:.42,offset:Math.random()*8,duration:5,fadeIn:.6}),!0}_slipAside(t){const e=this.window;this.fig.mesh.position;const n=this.slipDir??(this.slipDir=Math.random()<.5?-1:1),s=1.9;this.slip+=t*s,this.fig.moveTo(e.x+e.nx*1.9+e.tx*n*this.slip,e.z+e.nz*1.9+e.tz*n*this.slip),this.fig.faceCamera(this.camera),this.slip>e.halfWidth+1.1&&(this.slipDir=null,this._leave(this.seenThisAppearance))}appear({behind:t=!1}={}){if(this.visible)return!1;const e=this.wantDistance,n=this.findSpot(e*.75,e*1.25,t);return n?(this.fig||(this.fig=new Ze(this.scene,"child")),this.fig.showAt(n.x,n.z,0,n.y),this.fig.faceCamera(this.camera),this.visible=!0,this.stateT=0,this.seenThisAppearance=!1,this.unseenFor=0,this.audio.playSample("whisperFemale",{x:n.x,y:n.y+1,z:n.z,gain:.75,offset:Math.random()*8,duration:4.5,fadeIn:.3}),Math.random()<.45&&this.audio.playSample("girlLaugh",{x:n.x,y:n.y+1,z:n.z,gain:.5,offset:Math.random()*14,duration:2.6,fadeIn:.1}),e<=4.5&&this.audio.playSample("jumpscare",{x:n.x,y:n.y+1,z:n.z,gain:1.3,duration:2.4,fadeIn:.002}),!0):!1}_leave(t){var e;this.visible=!1,this.window=null,this.slip=0,(e=this.fig)==null||e.hide(),this.stateT=0,this.nextAppear=((t?22:40)+Math.random()*(t?34:45))*Ye.girlWait,t&&this.voice.say("girlGone")}update(t){if(this.t+=t,!this.enabled)return;if(!this.visible){this.nextAppear-=t,this.nextAppear<=0&&((Math.random()<.35?this.appearAtWindow()||this.appear({behind:!1}):this.appear({behind:Math.random()<.25}))||(this.nextAppear=4));return}if(this.stateT+=t,this.window){const r=this.window,a=Math.min(.9,this.stateT*.8);if(this.fig.material.opacity=a,this.fig.update(t,this.t),this.fig.faceCamera(this.camera),this.slip>0){this._slipAside(t);return}const o=Math.hypot(r.x-this.player.pos.x,r.z-this.player.pos.z),c=this._watched();if(c&&!this.seenThisAppearance&&this.stateT>.4&&(this.seenThisAppearance=!0,this.sightings+=1,this.sightings===1?this.voice.say("girlFirst",{force:!0}):this.voice.say("girlSpeak")),o<3.4){this._slipAside(t);return}this.unseenFor=c?0:this.unseenFor+t,(this.unseenFor>7||this.stateT>26)&&(this.window=null,this._leave(this.seenThisAppearance));return}const e=this._watched(),n=this._distance(),s=Math.min(.94,this.stateT*.9);if(this.fig.material.opacity=s,this.fig.update(t,this.t),this.fig.faceCamera(this.camera),e){this.unseenFor=0,!this.seenThisAppearance&&this.stateT>.35&&(this.seenThisAppearance=!0,this.sightings+=1,this.sightings===1?this.voice.say("girlFirst",{force:!0}):this.voice.say("girlSpeak")),n<1.5&&this._leave(!0);return}if(this.unseenFor+=t,this.unseenFor>6.5){this._leave(this.seenThisAppearance);return}if(this.isDark()&&this.unseenFor>.45&&this.seenThisAppearance){const r=this.fig.mesh.position,a=Math.max(Ye.girlFloor,this.wantDistance*.55);if(n>a){const o=this.player.pos.x-r.x,c=this.player.pos.z-r.z,l=Math.hypot(o,c)||1,h=Math.min(n-a,t*2.4);this.fig.moveTo(r.x+o/l*h,r.z+c/l*h)}}}dispose(){this.fig&&(this.fig.dispose(this.scene),this.fig=null),this.visible=!1}}class X_{constructor(){this.promptEl=document.getElementById("prompt"),this.subtitleEl=document.getElementById("subtitle"),this.fadeEl=document.getElementById("fade"),this.titleEl=document.getElementById("title"),this.subtitleUntil=0,this.now=0}update(t){this.now+=t,this.subtitleUntil&&this.now>this.subtitleUntil&&(this.subtitleEl.classList.remove("on"),this.subtitleUntil=0)}prompt(t){t?(this.promptEl.textContent=t,this.promptEl.classList.add("on")):this.promptEl.classList.remove("on")}say(t,e=4){this.subtitleEl.textContent=t,this.subtitleEl.classList.add("on"),this.subtitleUntil=this.now+e}fade(t,e=1.6){this.fadeEl.style.transition=`opacity ${e}s ease`,this.fadeEl.style.opacity=String(t)}fadeWhite(t,e=2){this.whiteEl||(this.whiteEl=document.createElement("div"),this.whiteEl.style.cssText="position:absolute;inset:0;background:#e8e4da;opacity:0;pointer-events:none;",this.fadeEl.parentNode.appendChild(this.whiteEl)),this.whiteEl.style.transition=`opacity ${e}s ease`,this.whiteEl.style.opacity=String(t)}showEnding(t){const e=document.createElement("div");e.id="ending",e.innerHTML=`<h1>${t.title}</h1><pre>${t.body}</pre><div class="e-end">SALTMERE</div>`,document.body.appendChild(e),requestAnimationFrame(()=>e.classList.add("on"))}hideTitle(){this.titleEl.classList.add("hidden")}}const Rn=new V0({antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0});Rn.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Rn.setSize(window.innerWidth,window.innerHeight);Rn.toneMapping=gl;Rn.toneMappingExposure=.85;document.body.appendChild(Rn.domElement);const he=new Hl;he.background=new kt(329482);he.fog=new bo(461585,.013);const ue=new We(72,window.innerWidth/window.innerHeight,.08,500);ue.rotation.order="YXZ";he.add(new Xl(2766404,.26));const vh=new mr(9414340,.9);vh.position.set(6,14,-18);he.add(vh);const Fo=U_(Rn);Ze.setSprites(Fo);const yh="/saltmere/apparitions/";xh(Fo,"bentneck",yh+"bentneck.png");xh(Fo,"remainder",yh+"girl.png");const Me=Mg(he),Qn=jg(he),q_=t_(he),Y_=zg(he);Me.colliders.push(...Qn.colliders);const Z_=4,$_=5,Wi={minX:qe.minX-.05,maxX:qe.maxX+.05,minZ:qe.topZ-.05,maxZ:qe.bottomZ+.05,minY:-.1,maxY:ke};Me.colliders.push(Wi);let al=!0,ol=!1;function K_(){if(!al)return;if(Hn.readCount>=Z_){const e=Me.colliders.indexOf(Wi);e>=0&&Me.colliders.splice(e,1),al=!1,Ot.creak(qe.minX+.4,1.2,qe.topZ,1),Gt.say("The boards over the cellar steps have come away.",5);return}const i=K.pos.x>Wi.minX-1.4&&K.pos.x<Wi.maxX+1.4,t=K.pos.z>Wi.minZ-1.4&&K.pos.z<Wi.maxZ+1.4;i&&t&&K.feetY>-1&&(Gt.prompt("Boarded over"),ol||(ol=!0,Gt.say("It is dark down there. I should check the other rooms first.",5)))}const De=new G0(Rn.domElement),K=new rg(ue,De,Me.colliders),Gt=new X_,Ot=new ag,Ps=new H_({hud:Gt}),Ds=new eu(16773332,0,16,Math.PI/7.2,.45,1.4);Ds.position.set(0,0,0);Ds.target.position.set(0,0,-1);ue.add(Ds);ue.add(Ds.target);he.add(ue);const j_=360,Tt={on:!1,intensity:0,battery:1,spares:1,drain:!0,dead:!1};K.torch=Tt;const Sn={unlitFor:0,debt:0,vig:0},cl=document.getElementById("dark-vig"),xe={player:K,audio:Ot,hud:Gt,scene:he,house:Me,after:(i,t)=>yn.after(i,t),lightsOn:()=>Me.lights.filter(i=>i.on),lightsOff:()=>Me.lights.filter(i=>!i.on),setLight(i,t){i.on=t,i.light.intensity=t?i.baseIntensity:0,i.bulb.visible=t},playerCanSee(i){return K.isLookingAt(i,.55)},roomIsDark(){if(Tt.on)return!1;const i=K.pos;for(const t of Me.lights)if(t.on&&t.light.position.distanceTo(i)<8)return!1;return!0},doorsBehindPlayer(i=3.5){return Me.doors.filter(t=>t.center.distanceTo(K.pos)<i?!1:!K.isLookingAt(t.center,.35))},torchOn:()=>Tt.on,startle(i,t=null){const e=i*Ye.startle;K.startle(e,t),e>=.7&&yn.after(1.1,()=>Ps.say("terrified")),Ot.breath(K.pos.x,K.pos.y,K.pos.z,{inhale:!0,gain:(.5+e*.5)*Ye.loud})},progress:()=>({notesRead:Hn.readCount,notesTotal:Hn.total,darkDebt:Sn.debt}),unlitFor:()=>Sn.unlitFor,nearestPainting(i=3){let t=null,e=i;const n=new I;for(const s of Qn.paintings){s.getWorldPosition(n);const r=n.distanceTo(K.pos);r<e&&K.isLookingAt(n,.3)&&(t=s,e=r)}return t},runPaintingSetPiece(){const i=xe.nearestPainting(4.5);i&&Sh.start(i)},runBlackoutReveal(){Zi.start()},runChorus(){_r.start()},runRightBehind(){ti.start()},canRightBehind:()=>Ye.bigSetPieces&&!ti.active&&!ti.done&&!Ne&&!Zi.active&&!_r.active&&K.feetY>-1&&!pn.active&&!pn.done&&Ot.hasSample("rightBehindYou"),runYamete(){if(!Ot.hasSample("yameteKudasai"))return;const i=K.pos,t=K.forward();Ot.playSample("yameteKudasai",{x:i.x-t.x*2,y:i.y,z:i.z-t.z*2,gain:.9,fadeIn:.05})},canYamete:()=>Ot.hasSample("yameteKudasai"),chorusBusy:()=>_r.active,hasCrySamples:()=>Ot.hasSample("cryWoman")||Ot.hasSample("cryWoman2"),blackoutBusy:()=>Zi.active,flickerTorch(i){Tt.flicker=i},shakeCamera(i,t){jn.amp=i,jn.left=t},figureBusy:()=>!!Ne,doorsOnLevel(){return Me.doors.filter(i=>Math.abs(i.center.y-K.feetY-1.2)<1.8)},runCharge(){if(Ne)return;const i=K.forward(),t=K.pos.x+i.x*4.4,e=K.pos.z+i.z*4.4,n=Yi(t,e,K.feetY);if(n===null)return;const s=new Ze(he,"bentneck");s.showAt(t,e,.95,n),s.faceCamera(ue),Ne={fig:s,vanishOnLook:!1,hold:0,age:0,fade:.95,seen:!0,leaving:!1,charge:{from:4.4,to:.85,dur:.85,t:0}},Ot.playSample("screamWoman",{x:t,y:n+1.4,z:e,gain:2.4,rate:1.05,fadeIn:.004}),xe.shakeCamera(.1,1),xe.startle(1,new I(t,n+1.4,e)),Gt.say("It is already moving.",3)},beamWallPoint(i=2.4,t=8.5){const e=K.forward(),n=ue.position;for(let s=i;s<=t;s+=.25){const r=n.x+e.x*s,a=n.y+e.y*s,o=n.z+e.z*s;for(const c of Me.colliders){if(c.door||c.minY!==void 0&&(a<c.minY||a>c.maxY)||r<c.minX||r>c.maxX||o<c.minZ||o>c.maxZ)continue;const l=.42;return{x:r-e.x*l,z:o-e.z*l,dist:s}}}return null},canBeamFlash(){return!Ye.bigSetPieces||Ne||Zi.active||ti.active||!Tt.on?!1:!!xe.beamWallPoint()},runBeamFlash(){if(Ne)return;const i=xe.beamWallPoint();if(!i)return;const t=Yi(i.x,i.z,K.feetY);if(t===null)return;const e=new Ze(he,"bentneck");e.showAt(i.x,i.z,.96,t),e.faceCamera(ue),Ne={fig:e,vanishOnLook:!1,hold:0,age:0,fade:.96,seen:!0,leaving:!1,flash:{left:.16}},Ot.burst({x:K.pos.x,y:K.pos.y,z:K.pos.z,freq:1900,q:3,gain:.05,decay:.05}),xe.startle(.8,new I(i.x,t+1.4,i.z))},runSprintPast(){if(Ne)return;const i=K.forward(),t=new I(-i.z,0,i.x),e=7.5,n=K.pos.x+i.x*e,s=K.pos.z+i.z*e,r=Math.random()<.5?-1:1,a=n+t.x*4.5*r,o=s+t.z*4.5*r,c=Yi(a,o,K.feetY)??Yi(n,s,K.feetY);if(c===null)return;const l=new Ze(he,Math.random()<.5?"standing":"listener");l.showAt(a,o,.9,c),Ne={fig:l,vanishOnLook:!1,hold:0,age:0,fade:.9,seen:!0,leaving:!1,dash:{fromX:a,fromZ:o,toX:n-t.x*4.5*r,toZ:s-t.z*4.5*r,dur:.55,t:0}};for(let h=0;h<4;h++)yn.after(h*.12,()=>Ot.footstep(a,o,{running:!0}))},canPlaceFigure(i,t){return!Ne&&!!go(i,t,!1)},placeFigure({kind:i="standing",minDist:t=6,maxDist:e=14,behind:n=!1,vanishOnLook:s=!0,hold:r=0}={}){if(Ne)return;const a=go(t,e,n);if(!a)return;const o=new Ze(he,i);o.showAt(a.x,a.z,0,a.y),o.faceCamera(ue),Ne={fig:o,vanishOnLook:s,hold:r,age:0,fade:0,seen:!1,leaving:!1},Math.random()<.5&&Ot.creak(a.x,1,a.z,.7)},_alterableP(){const i=new I;return Qn.paintings.filter(t=>!t.userData.seen||t.userData.altered||t.userData.isChrist?!1:(t.getWorldPosition(i),!K.isLookingAt(i,.2)||i.distanceTo(K.pos)>14))},canAlterPicture(){return xe._alterableP().length>0},alterPicture(){const i=xe._alterableP();if(!i.length)return;const t=i[Math.floor(Math.random()*i.length)],e=t.userData.art,n=(t.userData.seed+3+Math.floor(Math.random()*4))%9;e.material.map=oh(n),e.material.needsUpdate=!0,t.userData.seed=n,t.userData.altered=!0},_stitchable(){if(Hn.readCount<$_)return[];const i=new I;return Qn.paintings.filter(t=>{const e=t.userData;return!e.seen||e.stitched||e.isChrist?!1:(t.getWorldPosition(i),!K.isLookingAt(i,.2)||i.distanceTo(K.pos)>13)})},canStitchPortraits:()=>xe._stitchable().length>0,stitchPortraits(){const i=xe._stitchable();if(i.length){for(const t of i){const e=t.userData;e.art.material.map=vg(e.seed??0),e.art.material.needsUpdate=!0,e.stitched=!0}xe.startle(.6),Gt.say("Their eyes have been sewn shut. All of them.",5)}},canWeep(){const i=Qn.paintings.find(e=>e.userData.isChrist);if(!i||i.userData.weeping||!i.userData.seen)return!1;const t=i.getWorldPosition(new I);return!K.isLookingAt(t,.2)||t.distanceTo(K.pos)>12},makeChristWeep(){const i=Qn.paintings.find(t=>t.userData.isChrist);i&&(i.userData.art.material.map=ch({weeping:!0}),i.userData.art.material.needsUpdate=!0,i.userData.weeping=!0)},onPhaseChange(i){}},Oo=new v_({player:K,house:Me,torchState:Tt});xe.triggers=Oo;const yn=new m_(xe),Hn=new k_({hud:Gt,onRead:()=>{yn.noteRead(),Hn.readCount>=2&&wh.enable()}}),ko=[];{const i=new Kt({color:13221797,roughness:.95});for(const t of On){const e=new Pt(new $e(.21,.006,.29),i);e.position.set(t.pos[0],t.pos[1],t.pos[2]),e.rotation.y=(Math.random()-.5)*.7,e.castShadow=!0,he.add(e),ko.push({homeRoom:t.room,homeNoteId:t.id,assigned:null,mesh:e,pos:e.position})}}const J_=[{pos:[20.6,.72,17.4],room:"kitchen"},{pos:[2.6,.62,12.2],room:"drawing"},{pos:[11.2,3.92,13.6],room:"treatment"},{pos:[8.4,7.12,18.2],room:"attic_west"},{pos:[7.2,-2.62,19.2],room:"cellar"}],Mh=[];{const i=new Kt({color:9075278,roughness:.55,metalness:.6}),t=new Mn(.017,.017,.05,10);for(const e of J_){const n=new Pt(t,i);n.position.set(e.pos[0],e.pos[1],e.pos[2]),n.rotation.z=Math.PI/2,n.rotation.y=Math.random()*Math.PI,he.add(n),Mh.push({mesh:n,pos:n.position,taken:!1})}}function Q_(i=2){let t=null,e=i;for(const n of Mh){if(n.taken)continue;const s=n.pos.distanceTo(K.pos);s<e&&K.isLookingAt(n.pos,.4)&&(t=n,e=s)}return t}const Sh=new P_({scene:he,camera:ue,audio:Ot,hud:Gt,player:K,after:(i,t)=>yn.after(i,t)}),_r=new C_({audio:Ot,hud:Gt,player:K,house:Me,setLight:(i,t)=>xe.setLight(i,t),after:(i,t)=>yn.after(i,t)}),pn=new D_({scene:he,camera:ue,audio:Ot,hud:Gt,player:K,house:Me,setLight:(i,t)=>xe.setLight(i,t),after:(i,t)=>yn.after(i,t)}),wh=new W_({scene:he,camera:ue,player:K,audio:Ot,voice:Ps,findSpot:(i,t,e)=>go(i,t,e),isDark:()=>xe.roomIsDark()}),ti=new I_({scene:he,camera:ue,audio:Ot,hud:Gt,player:K,startle:(i,t)=>xe.startle(i,t)}),Zi=new R_({scene:he,camera:ue,audio:Ot,hud:Gt,player:K,torchState:Tt,house:Me,setLight:(i,t)=>xe.setLight(i,t)});function tx(i=1.9){let t=null,e=i;for(const n of Me.doors){const s=n.center.distanceTo(K.pos);s<e&&K.isLookingAt(n.center,.62)&&(t=n,e=s)}return t}function ex(i=1.6){let t=null,e=i;for(const n of Me.lights){if(!nx(n.light.position))continue;const s=Math.hypot(n.light.position.x-K.pos.x,n.light.position.z-K.pos.z);s<e&&(t=n,e=s)}return t}function nx(i){return Math.abs(i.y-K.feetY)<2.8}function ix(i){for(const t of ko)if(!t.assigned&&t.homeRoom===i)return t;return null}function sx(i=2.6){let t=null,e=i;for(const n of ko){const s=n.pos.distanceTo(K.pos);s<e&&K.isLookingAt(n.pos,.45)&&(t=n,e=s)}return t}function rx(){if(pn.active)return;if(ti.active){Gt.prompt("");return}if(Hn.isOpen()){Gt.prompt(""),De.consumePress("KeyE")&&Hn.close();return}const i=Q_();if(i&&Tt.drain){Gt.prompt("Take the cell"),De.consumePress("KeyE")&&(i.taken=!0,he.remove(i.mesh),Tt.spares+=1,Ot.burst({x:K.pos.x,y:1.1,z:K.pos.z,freq:2e3,q:5,gain:.08,decay:.05}),Gt.say(`A spare cell. ${Tt.spares} now.`,3.2));return}const t=sx();if(t){Gt.prompt(t.assigned?"Read again":"Read"),De.consumePress("KeyE")&&(Hn.showForActor(t),Ot.burst({x:K.pos.x,y:1.2,z:K.pos.z,freq:2600,q:2.5,gain:.06,decay:.12}));return}const e=tx();if(e){if(Gt.prompt(e.locked?"Locked":e.target>.5?"Close":"Open"),De.consumePress("KeyE")&&!e.locked){e.speed=2.2;const s=e.target<=.5;e.target=s?1:0,Ot.playSample(s?"doorOpen":"doorClose",{x:e.center.x,y:1.4,z:e.center.z,gain:.85,fadeIn:.005})}return}const n=ex();if(n){Gt.prompt(n.on?"Switch off":"Switch on"),De.consumePress("KeyE")&&(xe.setLight(n,!n.on),Ot.burst({x:n.light.position.x,y:1.2,z:n.light.position.z,freq:2400,q:5,gain:.1,decay:.04}));return}Gt.prompt("")}let or=0;function ax(i){if(K.vel.length()<.2){or=.6;return}const e=K.crouching?.95:K.sprinting?.34:.54;or+=i,or>=e&&(or=0,Ot.footstep(K.pos.x,K.pos.z,{crouched:K.crouching,running:K.sprinting}))}function ox(i){if(De.consumePress("KeyF")&&!Tt.forcedOff&&(Tt.dead&&Tt.battery<=0?Gt.say("The cell is flat. There is nothing left in it.",3.2):(Tt.on=!Tt.on,Ot.burst({x:K.pos.x,y:1.4,z:K.pos.z,freq:3e3,q:6,gain:.07,decay:.03}))),De.consumePress("KeyR")&&lx(),Tt.drain&&Tt.on&&!Tt.dead){const s=Tt.battery;Tt.battery=Math.max(0,s-i/j_);for(const[r,a]of cx)s>r&&Tt.battery<=r&&Gt.say(a,4);Tt.battery<=0&&(Tt.on=!1,Tt.dead=!0,Ot.burst({x:K.pos.x,y:1.4,z:K.pos.z,freq:900,q:3,gain:.1,decay:.1}),Ps.say("dark"))}const t=Tt.battery;let e=1;Tt.drain&&(t<.1?e=.3+Math.random()*(t<.04?.25:.45):t<.25&&(e=.58+(t-.1)/.15*.42));let n=Tt.on?38*e:0;if(Tt.flicker>0){Tt.flicker-=i;const s=Math.random();n=Tt.on?38*e*(s<.3?s*.25:.7+s*.35):0,Tt.flicker<=0&&(Tt.flicker=0)}Tt.intensity+=(n-Tt.intensity)*Math.min(1,i*22),Ds.intensity=Tt.intensity}const cx=[[.35,"The beam is going yellow."],[.15,"This is nearly out. I need the spare."],[.05,"No. No, not now."]];function lx(){if(Tt.drain){if(Tt.battery>.92){Gt.say("This one is still good.",2.4);return}if(Tt.spares<=0){Gt.say("I have no spare cells left.",3);return}Tt.spares-=1,Tt.battery=1,Tt.dead=!1,Ot.burst({x:K.pos.x,y:1.3,z:K.pos.z,freq:2200,q:7,gain:.1,decay:.04}),yn.after(.28,()=>Ot.burst({x:K.pos.x,y:1.3,z:K.pos.z,freq:1700,q:7,gain:.12,decay:.05})),Gt.say(`Fresh cell in. ${Tt.spares} left.`,3)}}function hx(i){xe.roomIsDark()?(Sn.unlitFor+=i,Sn.debt+=i):Sn.unlitFor=Math.max(0,Sn.unlitFor-i*2.2);const e=Math.min(.82,Sn.unlitFor/40);Sn.vig+=(e-Sn.vig)*Math.min(1,i*.9),cl&&(cl.style.opacity=Sn.vig.toFixed(3))}let Ne=null;function go(i,t,e){const n=K.forward();for(let s=0;s<40;s++){const r=i+Math.random()*(t-i),a=e?.7:1,o=(Math.random()-.5)*a,c=e?-1:1,l=n.x*c*Math.cos(o)-n.z*c*Math.sin(o),h=n.z*c*Math.cos(o)+n.x*c*Math.sin(o),d=K.pos.x+l*r,u=K.pos.z+h*r,p=Yi(d,u,K.feetY);if(p!==null&&!(Math.abs(p-K.feetY)>.4))return{x:d,z:u,y:p}}return null}function dx(i){if(!Ne)return;const t=Ne,e=t.fig;if(t.age+=i,e.faceCamera(ue),e.update(i,t.age),t.flash){t.flash.left-=i,e.material.opacity=.96,t.flash.left<=0&&(e.dispose(he),Ne=null);return}const n=e.mesh.position,s=Math.hypot(n.x-K.pos.x,n.z-K.pos.z),r=K.isLookingAt(new I(n.x,n.y+1.2,n.z),.55);if(t.charge){t.charge.t+=i;const a=Math.min(1,t.charge.t/t.charge.dur),o=a*a,c=K.forward(),l=t.charge.from+(t.charge.to-t.charge.from)*o;if(e.showAt(K.pos.x+c.x*l,K.pos.z+c.z*l,.95,e.baseY),e.faceCamera(ue),a>=1&&(t.leaving=!0),a>=1&&(t.fade=.95),!t.leaving)return}if(t.dash){t.dash.t+=i;const a=Math.min(1,t.dash.t/t.dash.dur);if(e.showAt(t.dash.fromX+(t.dash.toX-t.dash.fromX)*a,t.dash.fromZ+(t.dash.toZ-t.dash.fromZ)*a,.9,e.baseY),e.faceCamera(ue),a>=1&&(t.leaving=!0),!t.leaving)return}if(t.leaving){t.fade-=i*(t.charge||t.dash?5.5:1.05),t.retreat=(t.retreat??0)+i,t.cried||(t.cried=!0,Ot.playSample("cryLoud",{x:n.x,y:n.y,z:n.z,gain:2.2,fadeIn:.12}));const a=n.x-K.pos.x,o=n.z-K.pos.z,c=Math.hypot(a,o)||1,l=2.2+t.retreat*2.4;e.mesh.position.set(n.x+a/c*l*i,e.baseY+e.height*e.pad/2,n.z+o/c*l*i),e.faceCamera(ue)}else{t.fade=Math.min(1,t.fade+i*3.2),r&&(t.seen=!0);const a=t.seen&&!r,o=s<2.6,c=t.age>(t.hold>0?t.hold+6:14);t.vanishOnLook&&(a||o||c)&&(t.leaving=!0),!t.vanishOnLook&&t.seen&&t.age>t.hold&&(t.leaving=!0),!t.vanishOnLook&&c&&(t.leaving=!0)}e.material.opacity=Math.max(0,Math.min(.95,t.fade)),t.leaving&&t.fade<=0&&(e.dispose(he),Ne=null)}const Fn=new I;function ux(){for(const i of Qn.paintings)i.userData.seen||(i.getWorldPosition(Fn),Fn.distanceTo(K.pos)<4.5&&K.isLookingAt(Fn,.75)&&(i.userData.seen=!0))}let ll=!1;function fx(i){const t=yn.tier;if(!(t<2))for(const e of Qn.paintings){const n=e.userData;if(n.whisperCooldown=Math.max(0,(n.whisperCooldown??0)-i),e.getWorldPosition(Fn),!(Fn.distanceTo(K.pos)<2.4&&K.isLookingAt(Fn,.8))){n.dwell=0;continue}if(n.dwell=(n.dwell??0)+i,n.dwell<1.4||n.whisperCooldown>0||(n.dwell=0,n.whisperCooldown=22+Math.random()*40,n.mute===void 0&&(n.mute=Math.random()<.35),n.mute))continue;const a=.62+t*.1;Ot.playOneOf(["whisperPaint1","whisperPaint2","whisperCreepy"],{x:Fn.x,y:Fn.y,z:Fn.z,gain:a,fadeIn:.25,offset:Math.random()*2.5,duration:2.2+t*.5}),ll||(ll=!0,Gt.say("There are whispers coming out of these paintings.",4.6))}}function px(i){for(const t of Me.lights){if(t.dimming>0){t.dimming-=i;const e=Math.max(0,t.dimming/4.5);t.light.intensity=t.baseIntensity*e*e,t.dimming<=0&&(t.dimming=0,xe.setLight(t,!1));continue}if(t.flicker>0){t.flicker-=i;const e=Math.random();t.light.intensity=t.on?t.baseIntensity*(e<.35?e*.4:.8+e*.3):0,t.flicker<=0&&(t.light.intensity=t.on?t.baseIntensity:0)}}}const mx=5;let hl=!1;function gx(i){if(!pn.done&&!pn.active&&Oo.roomId==="cistern"){const t=ix("cistern");Hn.readCount<mx?hl||(hl=!0,Gt.say("There is nothing down here she understands yet.",4)):t||(pn.start(),yn.triggerGap=99999)}pn.update(i),pn.awaitingChoice&&(Gt.prompt("E — take it back    ·    T — give something else    ·    Esc — walk away"),De.consumePress("KeyE")?pn.choose("remember"):De.consumePress("KeyT")?pn.choose("trade"):De.consumePress("Escape")&&pn.choose("refuse"))}const jn={amp:0,left:0};let cr=0;function _x(i){jn.left>0&&(jn.left-=i,jn.left<=0&&(jn.amp=0));const t=Math.max(Zi.shake??0,ti.shake??0,jn.left>0?jn.amp:0);t<=0||(cr+=i,ue.position.x+=Math.sin(cr*47)*t*.5,ue.position.y+=Math.sin(cr*61)*t,ue.rotateZ(Math.sin(cr*39)*t*.35))}function xx(){const i=K.forward();Ot.setListener(K.pos,i)}let dl=!1,lr=70+Math.random()*90;function vx(i){if(!Ot.ready||(lr-=i,lr>0))return;const t=xe.roomIsDark(),e=K.feetY<-.4&&K.feetY>-3.1,n=K.feetY<-1;if(!t&&!e&&!n){lr=18;return}lr=(e?26:85)+Math.random()*70;const s=K.forward(),r=Math.random()<.5?-1:1,a=-s.z*r*2.2,o=s.x*r*2.2;Ot.playOneOf(["vocalFry1","vocalFry2"],{x:K.pos.x+a,y:K.pos.y-.1,z:K.pos.z+o,gain:e?1.15:.9,offset:Math.random()*2.5,duration:3.2,fadeIn:.15}),t&&Ps.say("dark")}function yx(){if(!Ot.ready)return;dl||(dl=!0,Ot.startBed("ambientHouse",.11),Ot.startBed("moanAttic",1e-4));const i=K.feetY>ke*1.5;Ot.setBedGain("moanAttic",i?.2:1e-4,2.5)}let ul=performance.now(),Ir=!1,fl=0,xr=null;function Mx(i){fl+=i,q_.update(i,K.pos,fl),Hg(Y_,Me.lights,K.pos),xr&&!xr.finished?xr.update(i):Ir&&(K.update(i),ox(i),hx(i),ax(i),Ng(Me.doors,i),px(i),xx(),yx(),vx(i),rx(),K_(),ux(),fx(i),Oo.update(i),dx(i),Sh.update(i),Zi.update(i),_r.update(i),ti.update(i),gx(i),_x(i),Ps.update(i),wh.update(i),ti.active||yn.update(i)),Gt.update(i),De.endFrame(),Rn.render(he,ue)}function bh(i){requestAnimationFrame(bh);const t=Math.min(.05,(i-ul)/1e3);ul=i,Mx(t)}requestAnimationFrame(bh);De.onModeChange=i=>{i==="drag"&&Ir&&Gt.say("Hold the left mouse button to look around. Arrow keys also work.",7)};async function Sx(i){var t;d_(Eh),Tt.drain=i!=="infinite",Tt.drain||(Tt.battery=1,Tt.dead=!1),Ot.init(),Ot.resume(),Gt.hideTitle(),(t=window.__stopTitleFX)==null||t.call(window),xr=new B_({audio:Ot,onFinish:async()=>{Gt.fade(0,3),Ir=!0,(!await De.requestLock()||De.lockFailed)&&Gt.say("Hold the left mouse button to look around. Arrow keys also work.",7),setTimeout(()=>Gt.say("Six hours, then the causeway goes under.",5.5),4e3),setTimeout(()=>Gt.say("Start at the front and work back. Same as always.",5.5),14e3),Tt.drain&&setTimeout(()=>Gt.say("One cell in the torch and one spare. R changes it.",5.5),24e3)}})}let Eh="haunted";for(const i of document.querySelectorAll("#fear .fl"))i.addEventListener("click",t=>{t.stopPropagation(),Eh=i.dataset.fear;for(const e of document.querySelectorAll("#fear .fl"))e.classList.toggle("sel",e===i)});for(const i of document.querySelectorAll("#modes .mode"))i.addEventListener("click",t=>{t.stopPropagation(),Sx(i.dataset.mode)});Rn.domElement.addEventListener("click",()=>{Ir&&!De.locked&&De.requestLock()});window.addEventListener("resize",()=>{ue.aspect=window.innerWidth/window.innerHeight,ue.updateProjectionMatrix(),Rn.setSize(window.innerWidth,window.innerHeight)});
