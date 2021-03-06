// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;
  Module.cleanups = [];
  var H_BASE = 0;
  // Each module has its own stack
  var STACKTOP = parentModule['_malloc'](TOTAL_STACK);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + TOTAL_STACK;
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported
    parentModule['_free'](H_BASE);
  });
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
H_BASE = parentModule["_malloc"](168 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 168;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore12FEDropShadowC1EPNS_6FilterEffffRKNS_5ColorEf;
/* memory initializer */ allocate([93,10,0,0,0,0,0,0,34,32,102,108,111,111,100,45,111,112,97,99,105,116,121,61,34,0,0,0,0,0,0,0,34,32,102,108,111,111,100,45,99,111,108,111,114,61,34,0,34,32,100,121,61,34,0,0,34,32,100,120,61,34,0,0,44,32,0,0,0,0,0,0,32,115,116,100,68,101,118,105,97,116,105,111,110,61,34,0,91,102,101,68,114,111,112,83,104,97,100,111,119,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiffffif(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  try {
    Module["dynCall_viiffffif"](index,a1,a2,a3,a4,a5,a6,a7,a8);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_fif(index,a1,a2) {
  try {
    return Module["dynCall_fif"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore12FEDropShadowE=(H_BASE+112)|0;
  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var abort=env.abort;
  var assert=env.assert;
  var asmPrintInt=env.asmPrintInt;
  var asmPrintFloat=env.asmPrintFloat;
  var Math_min=env.min;
  var invoke_ii=env.invoke_ii;
  var invoke_viiffffif=env.invoke_viiffffif;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_fif=env.invoke_fif;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12FEDropShadow21platformApplySoftwareEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, d31 = +0, d32 = +0, i33 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 48 | 0;
 i8 = i2 + 64 | 0;
 i9 = i2 + 80 | 0;
 i10 = i2 + 160 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = i15;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i19 = i18 | 0;
 i20 = i18;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i22 = i21;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i24 = i23;
 i25 = i1 | 0;
 i26 = __ZNK7WebCore12FilterEffect11inputEffectEj(i25, 0) | 0;
 i27 = __ZN7WebCore12FilterEffect23createImageBufferResultEv(i25) | 0;
 if ((i27 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i28 = i10 | 0;
 i29 = HEAP32[i1 + 68 >> 2] | 0;
 i30 = i29;
 d31 = +FUNCTION_TABLE_fif[HEAP32[(HEAP32[i30 >> 2] | 0) + 12 >> 2] & 1](i29, +HEAPF32[i1 + 120 >> 2]);
 d32 = +FUNCTION_TABLE_fif[HEAP32[(HEAP32[i30 >> 2] | 0) + 16 >> 2] & 1](i29, +HEAPF32[i1 + 124 >> 2]);
 HEAPF32[i3 >> 2] = d31;
 HEAPF32[i3 + 4 >> 2] = d32;
 d32 = +FUNCTION_TABLE_fif[HEAP32[(HEAP32[i30 >> 2] | 0) + 12 >> 2] & 1](i29, +HEAPF32[i1 + 128 >> 2]);
 d31 = +FUNCTION_TABLE_fif[HEAP32[(HEAP32[i30 >> 2] | 0) + 16 >> 2] & 1](i29, +HEAPF32[i1 + 132 >> 2]);
 HEAPF32[i4 >> 2] = d32;
 HEAPF32[i4 + 4 >> 2] = d31;
 i29 = i7;
 i30 = i26 + 36 | 0;
 HEAP32[i29 >> 2] = HEAP32[i30 >> 2];
 HEAP32[i29 + 4 >> 2] = HEAP32[i30 + 4 >> 2];
 HEAP32[i29 + 8 >> 2] = HEAP32[i30 + 8 >> 2];
 HEAP32[i29 + 12 >> 2] = HEAP32[i30 + 12 >> 2];
 __ZNK7WebCore12FilterEffect25drawingRegionOfInputImageERKNS_7IntRectE(i6, i25, i7);
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i5, i6);
 i6 = i8;
 i7 = i5;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 i7 = i8 | 0;
 HEAPF32[i7 >> 2] = d32 + +HEAPF32[i7 >> 2];
 i7 = i8 + 4 | 0;
 HEAPF32[i7 >> 2] = d31 + +HEAPF32[i7 >> 2];
 i7 = __ZN7WebCore12FilterEffect13asImageBufferEv(i26) | 0;
 i26 = __ZNK7WebCore11ImageBuffer7contextEv(i27) | 0;
 __ZN7WebCore15GraphicsContext8setAlphaEf(i26, +HEAPF32[i1 + 144 >> 2]);
 __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_9FloatRectE(i26, i7, 0, i8);
 __ZN7WebCore15GraphicsContext8setAlphaEf(i26, +1);
 i8 = i1 + 136 | 0;
 __ZN7WebCore10ShadowBlurC1ERKNS_9FloatSizeES3_RKNS_5ColorENS_10ColorSpaceE(i9, i3, i4, i8, 0);
 HEAP32[i28 >> 2] = 0;
 HEAP32[i28 + 4 >> 2] = 0;
 i28 = i10 + 8 | 0;
 i10 = i27 + 112 | 0;
 i4 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i28 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i28 + 4 >> 2] = i4;
 __ZNK7WebCore11ImageBuffer25getPremultipliedImageDataERKNS_7IntRectENS0_16CoordinateSystemE(i12, i27, i11, 0);
 i4 = i12 | 0;
 i12 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = HEAP32[i12 + 16 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i33 = 0;
  } else {
   if ((HEAP32[i4 + 12 >> 2] | 0) == 0) {
    i33 = 0;
    break;
   }
   i33 = HEAP32[i12 + 8 >> 2] | 0;
  }
 } while (0);
 i4 = HEAP32[i28 >> 2] | 0;
 i10 = HEAP32[i28 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 HEAP32[i13 + 4 >> 2] = i10;
 __ZN7WebCore10ShadowBlur14blurLayerImageEPhRKNS_7IntSizeEi(i9, i33, i14, i4 << 2);
 i4 = HEAP32[i28 + 4 >> 2] | 0;
 HEAP32[i15 >> 2] = HEAP32[i28 >> 2];
 HEAP32[i15 + 4 >> 2] = i4;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i17 + 4 >> 2] = 0;
 __ZN7WebCore11ImageBuffer12putByteArrayENS_8MultiplyEPN3JSC21GenericTypedArrayViewINS2_19Uint8ClampedAdaptorEEERKNS_7IntSizeERKNS_7IntRectERKNS_8IntPointENS0_16CoordinateSystemE(i27, 0, i12, i16, i11, i17, 0);
 __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i26, 3, 0);
 i17 = i1 + 44 | 0;
 i1 = HEAP32[i17 + 4 >> 2] | 0;
 HEAP32[i23 >> 2] = HEAP32[i17 >> 2];
 HEAP32[i23 + 4 >> 2] = i1;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i22, i24);
 HEAP32[i19 >> 2] = 0;
 HEAP32[i19 + 4 >> 2] = 0;
 i19 = i18 + 8 | 0;
 i18 = HEAP32[i21 + 4 >> 2] | 0;
 HEAP32[i19 >> 2] = HEAP32[i21 >> 2];
 HEAP32[i19 + 4 >> 2] = i18;
 __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i26, i20, i8, 0);
 __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i26, 6, 0);
 __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_9FloatRectE(__ZNK7WebCore11ImageBuffer7contextEv(i27) | 0, i7, 0, i5);
 if ((i12 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i12 + 4 | 0;
 i12 = i5 | 0;
 i7 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i12 >> 2] = i7;
  STACKTOP = i2;
  return;
 }
 i7 = i5 - 4 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] & 15](i7);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12FEDropShadow26determineAbsolutePaintRectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 48 | 0;
 i7 = i2 + 56 | 0;
 i8 = i2 + 64 | 0;
 i9 = i2 + 80 | 0;
 i10 = i2 + 96 | 0;
 i11 = HEAP32[i1 + 68 >> 2] | 0;
 i12 = i4;
 i13 = (__ZNK7WebCore12FilterEffect11inputEffectEj(i1 | 0, 0) | 0) + 36 | 0;
 HEAP32[i12 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i12 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 HEAP32[i12 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
 HEAP32[i12 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i3, i4);
 i4 = i5;
 i13 = i3;
 HEAP32[i4 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
 i13 = i11;
 d14 = +FUNCTION_TABLE_fif[HEAP32[(HEAP32[i13 >> 2] | 0) + 12 >> 2] & 1](i11, +HEAPF32[i1 + 128 >> 2]);
 d15 = +FUNCTION_TABLE_fif[HEAP32[(HEAP32[i13 >> 2] | 0) + 16 >> 2] & 1](i11, +HEAPF32[i1 + 132 >> 2]);
 i13 = i5 | 0;
 HEAPF32[i13 >> 2] = d14 + +HEAPF32[i13 >> 2];
 i13 = i5 + 4 | 0;
 HEAPF32[i13 >> 2] = d15 + +HEAPF32[i13 >> 2];
 __ZN7WebCore9FloatRect5uniteERKS0_(i3, i5);
 HEAP32[i6 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore14FEGaussianBlur19calculateKernelSizeEPNS_6FilterERjS3_ff(i11, i6, i7, +HEAPF32[i1 + 120 >> 2], +HEAPF32[i1 + 124 >> 2]);
 d15 = +(((HEAP32[i6 >> 2] | 0) * 3 & -1) >>> 0 >>> 0) * +.5;
 i6 = i3 | 0;
 HEAPF32[i6 >> 2] = +HEAPF32[i6 >> 2] - d15;
 i6 = i3 + 8 | 0;
 HEAPF32[i6 >> 2] = d15 + (+HEAPF32[i6 >> 2] + d15);
 d15 = +(((HEAP32[i7 >> 2] | 0) * 3 & -1) >>> 0 >>> 0) * +.5;
 i7 = i3 + 4 | 0;
 HEAPF32[i7 >> 2] = +HEAPF32[i7 >> 2] - d15;
 i7 = i3 + 12 | 0;
 HEAPF32[i7 >> 2] = d15 + (+HEAPF32[i7 >> 2] + d15);
 i7 = i1 + 52 | 0;
 if ((HEAP8[i1 + 108 | 0] & 1) == 0) {
  i6 = i9;
  i11 = i7;
  HEAP32[i6 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i6 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
  HEAP32[i6 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
  HEAP32[i6 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
  __ZN7WebCore9FloatRect5uniteERKS0_(i3, i9);
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i10, i3);
  i16 = i1 + 36 | 0;
  i17 = i16;
  i18 = i10;
  HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
  HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
  HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
  HEAP32[i17 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
  STACKTOP = i2;
  return;
 } else {
  i9 = i8;
  i11 = i7;
  HEAP32[i9 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
  __ZN7WebCore9FloatRect9intersectERKS0_(i3, i8);
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i10, i3);
  i16 = i1 + 36 | 0;
  i17 = i16;
  i18 = i10;
  HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
  HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
  HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
  HEAP32[i17 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
  STACKTOP = i2;
  return;
 }
}
function __ZNK7WebCore12FEDropShadow22externalRepresentationERNS_10TextStreamEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3);
 __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 96 | 0) | 0;
 i6 = i1 | 0;
 __ZNK7WebCore12FilterEffect22externalRepresentationERNS_10TextStreamEi(i6, i2, 0) | 0;
 i7 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 80 | 0) | 0;
 i8 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i7, +HEAPF32[i1 + 120 >> 2]) | 0, H_BASE + 72 | 0) | 0;
 i7 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i8, +HEAPF32[i1 + 124 >> 2]) | 0, H_BASE + 64 | 0) | 0;
 i8 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i7, +HEAPF32[i1 + 128 >> 2]) | 0, H_BASE + 56 | 0) | 0;
 i7 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i8, +HEAPF32[i1 + 132 >> 2]) | 0, H_BASE + 40 | 0) | 0;
 __ZNK7WebCore5Color23nameForRenderTreeAsTextEv(i5, i1 + 136 | 0);
 i8 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsERKN3WTF6StringE(i7, i5) | 0, H_BASE + 16 | 0) | 0;
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i8, +HEAPF32[i1 + 144 >> 2]) | 0, H_BASE + 8 | 0) | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i5 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i1 = __ZNK7WebCore12FilterEffect11inputEffectEj(i6, 0) | 0;
 FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 3](i1, i2, i3 + 1 | 0) | 0;
 STACKTOP = i4;
 return i2 | 0;
}
function __ZN7WebCore12FEDropShadow6createEPNS_6FilterEffffRKNS_5ColorEf(i1, i2, d3, d4, d5, d6, i7, d8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 i7 = i7 | 0;
 d8 = +d8;
 var i9 = 0, i10 = 0;
 i9 = __ZN3WTF10fastMallocEj(148) | 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i9, i2);
 HEAP32[i9 >> 2] = H_BASE + 120;
 HEAPF32[i9 + 120 >> 2] = d3;
 HEAPF32[i9 + 124 >> 2] = d4;
 HEAPF32[i9 + 128 >> 2] = d5;
 HEAPF32[i9 + 132 >> 2] = d6;
 i2 = i7;
 i7 = i9 + 136 | 0;
 i10 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i7 + 4 >> 2] = i10;
 HEAPF32[i9 + 144 >> 2] = d8;
 HEAP32[i1 >> 2] = i9;
 return;
}
function __ZN7WebCore12FEDropShadowC2EPNS_6FilterEffffRKNS_5ColorEf(i1, i2, d3, d4, d5, d6, i7, d8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 i7 = i7 | 0;
 d8 = +d8;
 var i9 = 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 120;
 HEAPF32[i1 + 120 >> 2] = d3;
 HEAPF32[i1 + 124 >> 2] = d4;
 HEAPF32[i1 + 128 >> 2] = d5;
 HEAPF32[i1 + 132 >> 2] = d6;
 i2 = i7;
 i7 = i1 + 136 | 0;
 i9 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i7 + 4 >> 2] = i9;
 HEAPF32[i1 + 144 >> 2] = d8;
 return;
}
function __ZN7WebCore12FEDropShadowC1EPNS_6FilterEffffRKNS_5ColorEf(i1, i2, d3, d4, d5, d6, i7, d8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 i7 = i7 | 0;
 d8 = +d8;
 var i9 = 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 120;
 HEAPF32[i1 + 120 >> 2] = d3;
 HEAPF32[i1 + 124 >> 2] = d4;
 HEAPF32[i1 + 128 >> 2] = d5;
 HEAPF32[i1 + 132 >> 2] = d6;
 i2 = i7;
 i7 = i1 + 136 | 0;
 i9 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i7 + 4 >> 2] = i9;
 HEAPF32[i1 + 144 >> 2] = d8;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 4;
}
function _memset(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + i3 | 0;
 if ((i3 | 0) >= 20) {
  i2 = i2 & 255;
  i5 = i1 & 3;
  i6 = i2 | i2 << 8 | i2 << 16 | i2 << 24;
  i7 = i4 & ~3;
  if (i5) {
   i5 = i1 + 4 - i5 | 0;
   while ((i1 | 0) < (i5 | 0)) {
    HEAP8[i1] = i2;
    i1 = i1 + 1 | 0;
   }
  }
  while ((i1 | 0) < (i7 | 0)) {
   HEAP32[i1 >> 2] = i6;
   i1 = i1 + 4 | 0;
  }
 }
 while ((i1 | 0) < (i4 | 0)) {
  HEAP8[i1] = i2;
  i1 = i1 + 1 | 0;
 }
 return i1 - i3 | 0;
}
function _memcpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 | 0;
 if ((i1 & 3) == (i2 & 3)) {
  while (i1 & 3) {
   if ((i3 | 0) == 0) return i4 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
   i1 = i1 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = i3 - 1 | 0;
  }
  while ((i3 | 0) >= 4) {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i1 = i1 + 4 | 0;
   i2 = i2 + 4 | 0;
   i3 = i3 - 4 | 0;
  }
 }
 while ((i3 | 0) > 0) {
  HEAP8[i1] = HEAP8[i2] | 0;
  i1 = i1 + 1 | 0;
  i2 = i2 + 1 | 0;
  i3 = i3 - 1 | 0;
 }
 return i4 | 0;
}
function copyTempDouble(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
 HEAP8[tempDoublePtr + 4 | 0] = HEAP8[i1 + 4 | 0];
 HEAP8[tempDoublePtr + 5 | 0] = HEAP8[i1 + 5 | 0];
 HEAP8[tempDoublePtr + 6 | 0] = HEAP8[i1 + 6 | 0];
 HEAP8[tempDoublePtr + 7 | 0] = HEAP8[i1 + 7 | 0];
}
function dynCall_viiffffif(i1, i2, i3, d4, d5, d6, d7, i8, d9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 i8 = i8 | 0;
 d9 = +d9;
 FUNCTION_TABLE_viiffffif[i1 & 3](i2 | 0, i3 | 0, +d4, +d5, +d6, +d7, i8 | 0, +d9);
}
function __ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12FilterEffect25transformResultColorSpaceENS_10ColorSpaceE(i2, HEAP32[i1 + 112 >> 2] | 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function b1(i1, i2, d3, d4, d5, d6, i7, d8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 i7 = i7 | 0;
 d8 = +d8;
 abort(1);
}
function __ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 112 >> 2] = i2;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 116 >> 2] = i2;
 return;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore12FEDropShadowD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12FilterEffectD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (HEAP8[i2] | 0) {
  i2 = i2 + 1 | 0;
 }
 return i2 - i1 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_fif(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_fif[i1 & 1](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function __ZN7WebCore12FEDropShadowD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12FilterEffectD2Ev(i1 | 0);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
 return 0;
}
function __ZNK7WebCore12FilterEffect16filterEffectTypeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function __ZN7WebCore12FEDropShadow4dumpEv(i1) {
 i1 = i1 | 0;
 return;
}
function b5(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(5);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function setTempRet9(i1) {
 i1 = i1 | 0;
 tempRet9 = i1;
}
function setTempRet8(i1) {
 i1 = i1 | 0;
 tempRet8 = i1;
}
function setTempRet7(i1) {
 i1 = i1 | 0;
 tempRet7 = i1;
}
function setTempRet6(i1) {
 i1 = i1 | 0;
 tempRet6 = i1;
}
function setTempRet5(i1) {
 i1 = i1 | 0;
 tempRet5 = i1;
}
function setTempRet4(i1) {
 i1 = i1 | 0;
 tempRet4 = i1;
}
function setTempRet3(i1) {
 i1 = i1 | 0;
 tempRet3 = i1;
}
function setTempRet2(i1) {
 i1 = i1 | 0;
 tempRet2 = i1;
}
function setTempRet1(i1) {
 i1 = i1 | 0;
 tempRet1 = i1;
}
function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK7WebCore12FilterEffect16filterEffectTypeEv,b0,__ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv,b0,b0,b0];
  var FUNCTION_TABLE_viiffffif = [b1,b1,__ZN7WebCore12FEDropShadowC2EPNS_6FilterEffffRKNS_5ColorEf,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore12FEDropShadow4dumpEv,b2,__ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv,b2,__ZN7WebCore12FEDropShadow21platformApplySoftwareEv,b2,__ZN7WebCore12FEDropShadow26determineAbsolutePaintRectEv,b2,__ZN7WebCore12FEDropShadowD1Ev,b2,__ZN7WebCore12FEDropShadowD0Ev,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE,b3,__ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE,b3,b3,b3];
  var FUNCTION_TABLE_iiii = [b4,b4,__ZNK7WebCore12FEDropShadow22externalRepresentationERNS_10TextStreamEi,b4];
  var FUNCTION_TABLE_fif = [b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,__ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i,b6];
  var FUNCTION_TABLE_v = [b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_viiffffif: dynCall_viiffffif, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiii: dynCall_iiii, dynCall_fif: dynCall_fif, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_viiffffif": invoke_viiffffif, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiii": invoke_iiii, "invoke_fif": invoke_fif, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiffffif = Module["dynCall_viiffffif"] = asm["dynCall_viiffffif"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_fif = Module["dynCall_fif"] = asm["dynCall_fif"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore12FilterEffect16filterEffectTypeEv","__ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE","_strlen","__ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv","__ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i","__ZN7WebCore12FEDropShadow21platformApplySoftwareEv","__ZN7WebCore12FEDropShadow26determineAbsolutePaintRectEv","_memset","__ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv","__ZN7WebCore12FEDropShadow6createEPNS_6FilterEffffRKNS_5ColorEf","_memcpy","__ZN7WebCore12FEDropShadowC2EPNS_6FilterEffffRKNS_5ColorEf","__ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE","__ZNK7WebCore12FEDropShadow22externalRepresentationERNS_10TextStreamEi","__ZN7WebCore12FEDropShadow4dumpEv","__ZN7WebCore12FEDropShadowD1Ev","__ZN7WebCore12FEDropShadowD0Ev"]
