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
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore16RenderedPositionC1ERKNS_15VisiblePositionE;
var __ZN7WebCore16RenderedPositionC1ERKNS_8PositionENS_9EAffinityE;
/* no memory initializer */
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
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
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
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore16RenderedPosition24atRightBoundaryOfBidiRunENS0_20ShouldMatchBidiLevelEh(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i7 = i1 + 8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i5 + 32 >> 2] & 4 | 0) == 0) {
  i10 = FUNCTION_TABLE_ii[HEAP32[i9 + 92 >> 2] & 1](i5) | 0;
 } else {
  i10 = FUNCTION_TABLE_ii[HEAP32[i9 + 88 >> 2] & 1](i5) | 0;
 }
 if ((i8 | 0) == (i10 | 0)) {
  if ((i2 | 0) == 1) {
   i10 = i1 + 16 | 0;
   i8 = HEAP32[i10 >> 2] | 0;
   if ((i8 | 0) == 1) {
    i5 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(HEAP32[i4 >> 2] | 0) | 0;
    HEAP32[i10 >> 2] = i5;
    i11 = i5;
   } else {
    i11 = i8;
   }
   i8 = i11;
   if ((i8 | 0) == 1) {
    i5 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(HEAP32[i4 >> 2] | 0) | 0;
    HEAP32[i10 >> 2] = i5;
    i12 = i5;
   } else if ((i8 | 0) == 0) {
    i6 = 1;
    return i6 | 0;
   } else {
    i12 = i11;
   }
   i6 = ((HEAP32[i12 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < ((HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0;
   return i6 | 0;
  }
  i12 = HEAP32[i4 >> 2] | 0;
  if (((HEAP32[i12 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < (i3 & 255) >>> 0) {
   i6 = 0;
   return i6 | 0;
  }
  i11 = i1 + 16 | 0;
  i8 = HEAP32[i11 >> 2] | 0;
  if ((i8 | 0) == 1) {
   i5 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(i12) | 0;
   HEAP32[i11 >> 2] = i5;
   i13 = i5;
  } else {
   i13 = i8;
  }
  i8 = i13;
  if ((i8 | 0) == 1) {
   i5 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(HEAP32[i4 >> 2] | 0) | 0;
   HEAP32[i11 >> 2] = i5;
   i14 = i5;
  } else if ((i8 | 0) == 0) {
   i6 = 1;
   return i6 | 0;
  } else {
   i14 = i13;
  }
  i6 = ((HEAP32[i14 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < (i3 & 255) >>> 0;
  return i6 | 0;
 }
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i13 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i14 >> 2] | 0;
 if ((HEAP32[i14 + 32 >> 2] & 4 | 0) == 0) {
  i15 = FUNCTION_TABLE_ii[HEAP32[i7 + 88 >> 2] & 1](i14) | 0;
 } else {
  i15 = FUNCTION_TABLE_ii[HEAP32[i7 + 92 >> 2] & 1](i14) | 0;
 }
 if ((i13 | 0) != (i15 | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i15 = i1 + 12 | 0;
 i1 = HEAP32[i15 >> 2] | 0;
 if ((i1 | 0) == 1) {
  i13 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(HEAP32[i4 >> 2] | 0) | 0;
  HEAP32[i15 >> 2] = i13;
  i16 = i13;
 } else {
  i16 = i1;
 }
 i1 = (i16 | 0) != 0;
 if ((i2 | 0) == 1) {
  if (!i1) {
   i6 = 0;
   return i6 | 0;
  }
  i2 = HEAP32[i4 >> 2] | 0;
  i13 = (HEAP32[i2 + 32 >> 2] | 0) >>> 2 & 63;
  if ((i16 | 0) == 1) {
   i14 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(i2) | 0;
   HEAP32[i15 >> 2] = i14;
   i17 = i14;
  } else {
   i17 = i16;
  }
  i6 = (i13 & 255) >>> 0 < ((HEAP32[i17 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0;
  return i6 | 0;
 }
 if (!i1) {
  i6 = 0;
  return i6 | 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i1 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 >= (i3 & 255) >>> 0) {
  i6 = 0;
  return i6 | 0;
 }
 if ((i16 | 0) == 1) {
  i4 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(i1) | 0;
  HEAP32[i15 >> 2] = i4;
  i18 = i4;
 } else {
  i18 = i16;
 }
 i6 = ((HEAP32[i18 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 >= (i3 & 255) >>> 0;
 return i6 | 0;
}
function __ZNK7WebCore16RenderedPosition23atLeftBoundaryOfBidiRunENS0_20ShouldMatchBidiLevelEh(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i7 = i1 + 8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i5 + 32 >> 2] & 4 | 0) == 0) {
  i10 = FUNCTION_TABLE_ii[HEAP32[i9 + 88 >> 2] & 1](i5) | 0;
 } else {
  i10 = FUNCTION_TABLE_ii[HEAP32[i9 + 92 >> 2] & 1](i5) | 0;
 }
 if ((i8 | 0) == (i10 | 0)) {
  if ((i2 | 0) == 1) {
   i10 = i1 + 12 | 0;
   i8 = HEAP32[i10 >> 2] | 0;
   if ((i8 | 0) == 1) {
    i5 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(HEAP32[i4 >> 2] | 0) | 0;
    HEAP32[i10 >> 2] = i5;
    i11 = i5;
   } else {
    i11 = i8;
   }
   i8 = i11;
   if ((i8 | 0) == 1) {
    i5 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(HEAP32[i4 >> 2] | 0) | 0;
    HEAP32[i10 >> 2] = i5;
    i12 = i5;
   } else if ((i8 | 0) == 0) {
    i6 = 1;
    return i6 | 0;
   } else {
    i12 = i11;
   }
   i6 = ((HEAP32[i12 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < ((HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0;
   return i6 | 0;
  }
  i12 = HEAP32[i4 >> 2] | 0;
  if (((HEAP32[i12 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < (i3 & 255) >>> 0) {
   i6 = 0;
   return i6 | 0;
  }
  i11 = i1 + 12 | 0;
  i8 = HEAP32[i11 >> 2] | 0;
  if ((i8 | 0) == 1) {
   i5 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(i12) | 0;
   HEAP32[i11 >> 2] = i5;
   i13 = i5;
  } else {
   i13 = i8;
  }
  i8 = i13;
  if ((i8 | 0) == 1) {
   i5 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(HEAP32[i4 >> 2] | 0) | 0;
   HEAP32[i11 >> 2] = i5;
   i14 = i5;
  } else if ((i8 | 0) == 0) {
   i6 = 1;
   return i6 | 0;
  } else {
   i14 = i13;
  }
  i6 = ((HEAP32[i14 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < (i3 & 255) >>> 0;
  return i6 | 0;
 }
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i13 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i14 >> 2] | 0;
 if ((HEAP32[i14 + 32 >> 2] & 4 | 0) == 0) {
  i15 = FUNCTION_TABLE_ii[HEAP32[i7 + 92 >> 2] & 1](i14) | 0;
 } else {
  i15 = FUNCTION_TABLE_ii[HEAP32[i7 + 88 >> 2] & 1](i14) | 0;
 }
 if ((i13 | 0) != (i15 | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i15 = i1 + 16 | 0;
 i1 = HEAP32[i15 >> 2] | 0;
 if ((i1 | 0) == 1) {
  i13 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(HEAP32[i4 >> 2] | 0) | 0;
  HEAP32[i15 >> 2] = i13;
  i16 = i13;
 } else {
  i16 = i1;
 }
 i1 = (i16 | 0) != 0;
 if ((i2 | 0) == 1) {
  if (!i1) {
   i6 = 0;
   return i6 | 0;
  }
  i2 = HEAP32[i4 >> 2] | 0;
  i13 = (HEAP32[i2 + 32 >> 2] | 0) >>> 2 & 63;
  if ((i16 | 0) == 1) {
   i14 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(i2) | 0;
   HEAP32[i15 >> 2] = i14;
   i17 = i14;
  } else {
   i17 = i16;
  }
  i6 = (i13 & 255) >>> 0 < ((HEAP32[i17 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0;
  return i6 | 0;
 }
 if (!i1) {
  i6 = 0;
  return i6 | 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i1 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 >= (i3 & 255) >>> 0) {
  i6 = 0;
  return i6 | 0;
 }
 if ((i16 | 0) == 1) {
  i4 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(i1) | 0;
  HEAP32[i15 >> 2] = i4;
  i18 = i4;
 } else {
  i18 = i16;
 }
 i6 = ((HEAP32[i18 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 >= (i3 & 255) >>> 0;
 return i6 | 0;
}
function __ZNK7WebCore16RenderedPosition32positionAtRightBoundaryOfBiDiRunEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i2 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i10 = i2 + 8 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = HEAP32[i9 >> 2] | 0;
   if ((HEAP32[i9 + 32 >> 2] & 4 | 0) == 0) {
    i13 = FUNCTION_TABLE_ii[HEAP32[i12 + 92 >> 2] & 1](i9) | 0;
   } else {
    i13 = FUNCTION_TABLE_ii[HEAP32[i12 + 88 >> 2] & 1](i9) | 0;
   }
   if ((i11 | 0) != (i13 | 0)) {
    break;
   }
   i11 = HEAP32[i2 >> 2] | 0;
   do {
    if ((HEAP32[i11 + 20 >> 2] & 128 | 0) == 0) {
     i12 = HEAP32[i11 + 4 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i14 = 0;
      break;
     }
     i15 = i12 + 8 | 0;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
     i14 = i12;
    } else {
     i14 = 0;
    }
   } while (0);
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = i6 | 0;
   HEAP32[i12 >> 2] = i14;
   HEAP32[i7 >> 2] = i11;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i1, i6, i7);
   i11 = HEAP32[i12 >> 2] | 0;
   if ((i11 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i12 = i11 + 8 | 0;
   i11 = i12 | 0;
   i15 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i7 = i2 + 12 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) == 1) {
  i6 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(HEAP32[i8 >> 2] | 0) | 0;
  HEAP32[i7 >> 2] = i6;
  i16 = i6;
 } else {
  i16 = i2;
 }
 i2 = HEAP32[i16 + 16 >> 2] | 0;
 do {
  if ((HEAP32[i2 + 20 >> 2] & 128 | 0) == 0) {
   i6 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i17 = 0;
    i18 = i16;
    break;
   }
   i14 = i6 + 8 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   i17 = i6;
   i18 = HEAP32[i7 >> 2] | 0;
  } else {
   i17 = 0;
   i18 = i16;
  }
 } while (0);
 if ((i18 | 0) == 1) {
  i16 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(HEAP32[i8 >> 2] | 0) | 0;
  HEAP32[i7 >> 2] = i16;
  i19 = i16;
 } else {
  i19 = i18;
 }
 i18 = HEAP32[i19 >> 2] | 0;
 if ((HEAP32[i19 + 32 >> 2] & 4 | 0) == 0) {
  i20 = FUNCTION_TABLE_ii[HEAP32[i18 + 92 >> 2] & 1](i19) | 0;
 } else {
  i20 = FUNCTION_TABLE_ii[HEAP32[i18 + 88 >> 2] & 1](i19) | 0;
 }
 i19 = i4 | 0;
 HEAP32[i19 >> 2] = i17;
 HEAP32[i5 >> 2] = i20;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i1, i4, i5);
 i5 = HEAP32[i19 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i19 = i5 + 8 | 0;
 i5 = i19 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore16RenderedPosition31positionAtLeftBoundaryOfBiDiRunEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i2 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i10 = i2 + 8 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = HEAP32[i9 >> 2] | 0;
   if ((HEAP32[i9 + 32 >> 2] & 4 | 0) == 0) {
    i13 = FUNCTION_TABLE_ii[HEAP32[i12 + 88 >> 2] & 1](i9) | 0;
   } else {
    i13 = FUNCTION_TABLE_ii[HEAP32[i12 + 92 >> 2] & 1](i9) | 0;
   }
   if ((i11 | 0) != (i13 | 0)) {
    break;
   }
   i11 = HEAP32[i2 >> 2] | 0;
   do {
    if ((HEAP32[i11 + 20 >> 2] & 128 | 0) == 0) {
     i12 = HEAP32[i11 + 4 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i14 = 0;
      break;
     }
     i15 = i12 + 8 | 0;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
     i14 = i12;
    } else {
     i14 = 0;
    }
   } while (0);
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = i6 | 0;
   HEAP32[i12 >> 2] = i14;
   HEAP32[i7 >> 2] = i11;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i1, i6, i7);
   i11 = HEAP32[i12 >> 2] | 0;
   if ((i11 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i12 = i11 + 8 | 0;
   i11 = i12 | 0;
   i15 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i7 = i2 + 16 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) == 1) {
  i6 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(HEAP32[i8 >> 2] | 0) | 0;
  HEAP32[i7 >> 2] = i6;
  i16 = i6;
 } else {
  i16 = i2;
 }
 i2 = HEAP32[i16 + 16 >> 2] | 0;
 do {
  if ((HEAP32[i2 + 20 >> 2] & 128 | 0) == 0) {
   i6 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i17 = 0;
    i18 = i16;
    break;
   }
   i14 = i6 + 8 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   i17 = i6;
   i18 = HEAP32[i7 >> 2] | 0;
  } else {
   i17 = 0;
   i18 = i16;
  }
 } while (0);
 if ((i18 | 0) == 1) {
  i16 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(HEAP32[i8 >> 2] | 0) | 0;
  HEAP32[i7 >> 2] = i16;
  i19 = i16;
 } else {
  i19 = i18;
 }
 i18 = HEAP32[i19 >> 2] | 0;
 if ((HEAP32[i19 + 32 >> 2] & 4 | 0) == 0) {
  i20 = FUNCTION_TABLE_ii[HEAP32[i18 + 88 >> 2] & 1](i19) | 0;
 } else {
  i20 = FUNCTION_TABLE_ii[HEAP32[i18 + 92 >> 2] & 1](i19) | 0;
 }
 i19 = i4 | 0;
 HEAP32[i19 >> 2] = i17;
 HEAP32[i5 >> 2] = i20;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i1, i4, i5);
 i5 = HEAP32[i19 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i19 = i5 + 8 | 0;
 i5 = i19 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16RenderedPositionC2ERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 1;
 HEAP32[i1 + 16 >> 2] = 1;
 i1 = i2 | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityERPNS_9InlineBoxERi(i2 | 0, HEAP32[i2 + 12 >> 2] | 0, i6, i7);
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i5 >> 2] = HEAP32[i7 + 16 >> 2];
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 HEAP32[i7 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i1 = i4 + 8 | 0;
  i8 = 0;
  i9 = i1;
  i10 = i1;
 } else {
  i1 = i6 + 8 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  i1 = i4 + 8 | 0;
  i6 = i1;
  i8 = HEAP32[i6 >> 2] & -8;
  i9 = i1;
  i10 = i6;
 }
 HEAP32[i4 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i8 | i6 & 7;
 HEAP32[i10 >> 2] = i2;
 HEAP8[i9] = i2 & 255 & -9 | i6 & 8;
 i6 = HEAP32[i10 >> 2] & 7;
 do {
  if ((i6 | 0) == 0) {
   i10 = __ZNK7WebCore8Position24computeNodeAfterPositionEv(i4) | 0;
   if ((i10 | 0) != 0) {
    i2 = i10 + 32 | 0;
    if ((HEAP32[i10 + 12 >> 2] & 2048 | 0) == 0) {
     i11 = i2 | 0;
    } else {
     i11 = HEAP32[i2 >> 2] | 0;
    }
    if ((HEAP32[i11 >> 2] | 0) != 0) {
     i12 = i10;
     i13 = 19;
     break;
    }
   }
   i10 = HEAP32[i7 >> 2] | 0;
   if ((HEAP32[i10 + 12 >> 2] & 2 | 0) == 0) {
    i13 = 24;
    break;
   }
   i12 = HEAP32[i10 + 40 >> 2] | 0;
   i13 = 19;
  } else if ((i6 | 0) == 3) {
   i10 = HEAP32[i7 >> 2] | 0;
   if ((HEAP32[i10 + 12 >> 2] & 2 | 0) == 0) {
    i13 = 24;
    break;
   }
   i12 = HEAP32[i10 + 36 >> 2] | 0;
   i13 = 19;
  } else if ((i6 | 0) == 4) {
   i10 = HEAP32[i7 >> 2] | 0;
   if ((HEAP32[i10 + 12 >> 2] & 2 | 0) == 0) {
    i13 = 24;
    break;
   }
   i12 = HEAP32[i10 + 40 >> 2] | 0;
   i13 = 19;
  } else {
   i13 = 24;
  }
 } while (0);
 do {
  if ((i13 | 0) == 19) {
   if ((i12 | 0) == 0) {
    i13 = 24;
    break;
   }
   i6 = HEAP32[i12 + 12 >> 2] | 0;
   i11 = i12 + 32 | 0;
   if ((i6 & 2048 | 0) == 0) {
    i14 = i11 | 0;
   } else {
    i14 = HEAP32[i11 >> 2] | 0;
   }
   if ((HEAP32[i14 >> 2] | 0) == 0) {
    i13 = 24;
   } else {
    i15 = i12;
    i16 = i6;
   }
  }
 } while (0);
 if ((i13 | 0) == 24) {
  i13 = HEAP32[i7 >> 2] | 0;
  i15 = i13;
  i16 = HEAP32[i13 + 12 >> 2] | 0;
 }
 i13 = i15 + 32 | 0;
 if ((i16 & 2048 | 0) == 0) {
  i17 = i13 | 0;
 } else {
  i17 = HEAP32[i13 >> 2] | 0;
 }
 HEAP32[i5 >> 2] = HEAP32[i17 >> 2];
 i17 = HEAP32[i7 >> 2] | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i17 + 8 | 0;
 i17 = i7 | 0;
 i5 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 HEAP32[i17 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16RenderedPositionC1ERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 1;
 HEAP32[i1 + 16 >> 2] = 1;
 i1 = i2 | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityERPNS_9InlineBoxERi(i2 | 0, HEAP32[i2 + 12 >> 2] | 0, i6, i7);
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i5 >> 2] = HEAP32[i7 + 16 >> 2];
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 HEAP32[i7 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i1 = i4 + 8 | 0;
  i8 = 0;
  i9 = i1;
  i10 = i1;
 } else {
  i1 = i6 + 8 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  i1 = i4 + 8 | 0;
  i6 = i1;
  i8 = HEAP32[i6 >> 2] & -8;
  i9 = i1;
  i10 = i6;
 }
 HEAP32[i4 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i8 | i6 & 7;
 HEAP32[i10 >> 2] = i2;
 HEAP8[i9] = i2 & 255 & -9 | i6 & 8;
 i6 = HEAP32[i10 >> 2] & 7;
 do {
  if ((i6 | 0) == 0) {
   i10 = __ZNK7WebCore8Position24computeNodeAfterPositionEv(i4) | 0;
   if ((i10 | 0) != 0) {
    i2 = i10 + 32 | 0;
    if ((HEAP32[i10 + 12 >> 2] & 2048 | 0) == 0) {
     i11 = i2 | 0;
    } else {
     i11 = HEAP32[i2 >> 2] | 0;
    }
    if ((HEAP32[i11 >> 2] | 0) != 0) {
     i12 = i10;
     i13 = 19;
     break;
    }
   }
   i10 = HEAP32[i7 >> 2] | 0;
   if ((HEAP32[i10 + 12 >> 2] & 2 | 0) == 0) {
    i13 = 24;
    break;
   }
   i12 = HEAP32[i10 + 40 >> 2] | 0;
   i13 = 19;
  } else if ((i6 | 0) == 3) {
   i10 = HEAP32[i7 >> 2] | 0;
   if ((HEAP32[i10 + 12 >> 2] & 2 | 0) == 0) {
    i13 = 24;
    break;
   }
   i12 = HEAP32[i10 + 36 >> 2] | 0;
   i13 = 19;
  } else if ((i6 | 0) == 4) {
   i10 = HEAP32[i7 >> 2] | 0;
   if ((HEAP32[i10 + 12 >> 2] & 2 | 0) == 0) {
    i13 = 24;
    break;
   }
   i12 = HEAP32[i10 + 40 >> 2] | 0;
   i13 = 19;
  } else {
   i13 = 24;
  }
 } while (0);
 do {
  if ((i13 | 0) == 19) {
   if ((i12 | 0) == 0) {
    i13 = 24;
    break;
   }
   i6 = HEAP32[i12 + 12 >> 2] | 0;
   i11 = i12 + 32 | 0;
   if ((i6 & 2048 | 0) == 0) {
    i14 = i11 | 0;
   } else {
    i14 = HEAP32[i11 >> 2] | 0;
   }
   if ((HEAP32[i14 >> 2] | 0) == 0) {
    i13 = 24;
   } else {
    i15 = i12;
    i16 = i6;
   }
  }
 } while (0);
 if ((i13 | 0) == 24) {
  i13 = HEAP32[i7 >> 2] | 0;
  i15 = i13;
  i16 = HEAP32[i13 + 12 >> 2] | 0;
 }
 i13 = i15 + 32 | 0;
 if ((i16 & 2048 | 0) == 0) {
  i17 = i13 | 0;
 } else {
  i17 = HEAP32[i13 >> 2] | 0;
 }
 HEAP32[i5 >> 2] = HEAP32[i17 >> 2];
 i17 = HEAP32[i7 >> 2] | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i17 + 8 | 0;
 i17 = i7 | 0;
 i5 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 HEAP32[i17 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore16RenderedPosition12isEquivalentERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((HEAP32[i1 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
   if ((i3 | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) == (HEAP32[i2 + 8 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i5 = i1 + 4 | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i6 = i1 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i3 + 32 >> 2] & 4 | 0) == 0) {
  i9 = FUNCTION_TABLE_ii[HEAP32[i8 + 88 >> 2] & 1](i3) | 0;
 } else {
  i9 = FUNCTION_TABLE_ii[HEAP32[i8 + 92 >> 2] & 1](i3) | 0;
 }
 do {
  if ((i7 | 0) == (i9 | 0)) {
   i3 = i2 + 4 | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i2 + 8 >> 2] | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   if ((HEAP32[i8 + 32 >> 2] & 4 | 0) == 0) {
    i12 = FUNCTION_TABLE_ii[HEAP32[i11 + 92 >> 2] & 1](i8) | 0;
   } else {
    i12 = FUNCTION_TABLE_ii[HEAP32[i11 + 88 >> 2] & 1](i8) | 0;
   }
   if ((i10 | 0) != (i12 | 0)) {
    break;
   }
   i10 = i1 + 12 | 0;
   i8 = HEAP32[i10 >> 2] | 0;
   if ((i8 | 0) == 1) {
    i11 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(HEAP32[i5 >> 2] | 0) | 0;
    HEAP32[i10 >> 2] = i11;
    i13 = i11;
   } else {
    i13 = i8;
   }
   if ((i13 | 0) == (HEAP32[i3 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i13 = HEAP32[i5 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i12 = HEAP32[i6 >> 2] | 0;
 i6 = HEAP32[i13 >> 2] | 0;
 if ((HEAP32[i13 + 32 >> 2] & 4 | 0) == 0) {
  i14 = FUNCTION_TABLE_ii[HEAP32[i6 + 92 >> 2] & 1](i13) | 0;
 } else {
  i14 = FUNCTION_TABLE_ii[HEAP32[i6 + 88 >> 2] & 1](i13) | 0;
 }
 if ((i12 | 0) != (i14 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i14 = i2 + 4 | 0;
 i12 = HEAP32[i14 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i13 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 if ((HEAP32[i12 + 32 >> 2] & 4 | 0) == 0) {
  i15 = FUNCTION_TABLE_ii[HEAP32[i2 + 88 >> 2] & 1](i12) | 0;
 } else {
  i15 = FUNCTION_TABLE_ii[HEAP32[i2 + 92 >> 2] & 1](i12) | 0;
 }
 if ((i13 | 0) != (i15 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i15 = i1 + 16 | 0;
 i1 = HEAP32[i15 >> 2] | 0;
 if ((i1 | 0) == 1) {
  i13 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(HEAP32[i5 >> 2] | 0) | 0;
  HEAP32[i15 >> 2] = i13;
  i16 = i13;
 } else {
  i16 = i1;
 }
 i4 = (i16 | 0) == (HEAP32[i14 >> 2] | 0);
 return i4 | 0;
}
function __ZN7WebCore28renderObjectContainsPositionEPNS_12RenderObjectERKNS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[i2 + 8 >> 2] & 7;
 do {
  if ((i3 | 0) == 4) {
   i4 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i4 + 12 >> 2] & 2 | 0) == 0) {
    i5 = 18;
    break;
   }
   i6 = HEAP32[i4 + 40 >> 2] | 0;
   i5 = 13;
  } else if ((i3 | 0) == 0) {
   i4 = __ZNK7WebCore8Position24computeNodeAfterPositionEv(i2) | 0;
   if ((i4 | 0) != 0) {
    i7 = i4 + 32 | 0;
    if ((HEAP32[i4 + 12 >> 2] & 2048 | 0) == 0) {
     i8 = i7 | 0;
    } else {
     i8 = HEAP32[i7 >> 2] | 0;
    }
    if ((HEAP32[i8 >> 2] | 0) != 0) {
     i6 = i4;
     i5 = 13;
     break;
    }
   }
   i4 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i4 + 12 >> 2] & 2 | 0) == 0) {
    i5 = 18;
    break;
   }
   i6 = HEAP32[i4 + 40 >> 2] | 0;
   i5 = 13;
  } else if ((i3 | 0) == 3) {
   i4 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i4 + 12 >> 2] & 2 | 0) == 0) {
    i5 = 18;
    break;
   }
   i6 = HEAP32[i4 + 36 >> 2] | 0;
   i5 = 13;
  } else {
   i5 = 18;
  }
 } while (0);
 do {
  if ((i5 | 0) == 13) {
   if ((i6 | 0) == 0) {
    i5 = 18;
    break;
   }
   i3 = HEAP32[i6 + 12 >> 2] | 0;
   i8 = i6 + 32 | 0;
   if ((i3 & 2048 | 0) == 0) {
    i9 = i8 | 0;
   } else {
    i9 = HEAP32[i8 >> 2] | 0;
   }
   if ((HEAP32[i9 >> 2] | 0) == 0) {
    i5 = 18;
   } else {
    i10 = i6;
    i11 = i3;
   }
  }
 } while (0);
 if ((i5 | 0) == 18) {
  i6 = HEAP32[i2 >> 2] | 0;
  i10 = i6;
  i11 = HEAP32[i6 + 12 >> 2] | 0;
 }
 i6 = i10 + 32 | 0;
 if ((i11 & 2048 | 0) == 0) {
  i12 = i6 | 0;
 } else {
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i12 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i13 = 0;
  return i13 | 0;
 } else {
  i14 = i6;
 }
 while (1) {
  if ((HEAP32[i14 + 20 >> 2] & 128 | 0) != 0) {
   i13 = 0;
   i5 = 29;
   break;
  }
  if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
   i13 = 0;
   i5 = 31;
   break;
  }
  if ((i14 | 0) == (i1 | 0)) {
   i13 = 1;
   i5 = 32;
   break;
  }
  i6 = HEAP32[i14 + 8 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i13 = 0;
   i5 = 30;
   break;
  } else {
   i14 = i6 | 0;
  }
 }
 if ((i5 | 0) == 29) {
  return i13 | 0;
 } else if ((i5 | 0) == 30) {
  return i13 | 0;
 } else if ((i5 | 0) == 31) {
  return i13 | 0;
 } else if ((i5 | 0) == 32) {
  return i13 | 0;
 }
 return 0;
}
function __ZNK7WebCore16RenderedPosition12absoluteRectEPNS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, d21 = +0, d22 = +0, d23 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = i12 | 0;
 i14 = i12;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i16 = i2 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 if ((i17 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i4;
  return;
 }
 i18 = i6 | 0;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i17 >> 2] | 0) + 544 >> 2] & 1](i8, i17, HEAP32[i2 + 4 >> 2] | 0, HEAP32[i2 + 8 >> 2] | 0, i3);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i7, i8);
 i8 = HEAP32[i18 >> 2] | 0;
 i3 = HEAP32[i18 + 4 >> 2] | 0;
 i18 = 1;
 do {
  if ((i8 | 0) == 0 & (i3 >>> 0 < i18 >>> 0 | i3 >>> 0 == i18 >>> 0 & i8 >>> 0 < 0 >>> 0)) {
   i2 = i6 + 8 | 0;
   i17 = HEAP32[i2 >> 2] | 0;
   i19 = HEAP32[i2 + 4 >> 2] | 0;
   i2 = 1;
   if (!((i17 | 0) == 0 & (i19 >>> 0 < i2 >>> 0 | i19 >>> 0 == i2 >>> 0 & i17 >>> 0 < 0 >>> 0))) {
    break;
   }
   _memset(i1 | 0, 0, 16) | 0;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i6 = HEAP32[i16 >> 2] | 0;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i14, i7);
 i7 = HEAP32[i13 >> 2] | 0;
 i16 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = i7;
 HEAP32[i10 + 4 >> 2] = i16;
 d20 = (HEAP32[tempDoublePtr >> 2] = i7, +HEAPF32[tempDoublePtr >> 2]);
 d21 = d20 + +HEAPF32[i12 + 8 >> 2];
 d22 = +HEAPF32[i14 + 4 >> 2];
 HEAPF32[i9 + 8 >> 2] = d21;
 HEAPF32[i11 + 12 >> 2] = d22;
 d23 = d22 + +HEAPF32[i14 + 12 >> 2];
 HEAPF32[i9 + 16 >> 2] = d21;
 HEAPF32[i11 + 20 >> 2] = d23;
 HEAPF32[i9 + 24 >> 2] = d20;
 HEAPF32[i11 + 28 >> 2] = d23;
 __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i15, i6, i11, 0, 0, 0);
 __ZNK7WebCore9FloatQuad11boundingBoxEv(i5, i15);
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i1, i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore16RenderedPositionC2ERKNS_8PositionENS_9EAffinityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 1;
 HEAP32[i1 + 16 >> 2] = 1;
 i1 = i2 | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  return;
 }
 __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityERPNS_9InlineBoxERi(i2, i3, i5, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i4 >> 2] = HEAP32[i6 + 16 >> 2];
  return;
 }
 i6 = HEAP32[i2 + 8 >> 2] & 7;
 do {
  if ((i6 | 0) == 0) {
   i5 = __ZNK7WebCore8Position24computeNodeAfterPositionEv(i2) | 0;
   if ((i5 | 0) != 0) {
    i3 = i5 + 32 | 0;
    if ((HEAP32[i5 + 12 >> 2] & 2048 | 0) == 0) {
     i7 = i3 | 0;
    } else {
     i7 = HEAP32[i3 >> 2] | 0;
    }
    if ((HEAP32[i7 >> 2] | 0) != 0) {
     i8 = i5;
     i9 = 16;
     break;
    }
   }
   i5 = HEAP32[i1 >> 2] | 0;
   if ((HEAP32[i5 + 12 >> 2] & 2 | 0) == 0) {
    i9 = 21;
    break;
   }
   i8 = HEAP32[i5 + 40 >> 2] | 0;
   i9 = 16;
  } else if ((i6 | 0) == 3) {
   i5 = HEAP32[i1 >> 2] | 0;
   if ((HEAP32[i5 + 12 >> 2] & 2 | 0) == 0) {
    i9 = 21;
    break;
   }
   i8 = HEAP32[i5 + 36 >> 2] | 0;
   i9 = 16;
  } else if ((i6 | 0) == 4) {
   i5 = HEAP32[i1 >> 2] | 0;
   if ((HEAP32[i5 + 12 >> 2] & 2 | 0) == 0) {
    i9 = 21;
    break;
   }
   i8 = HEAP32[i5 + 40 >> 2] | 0;
   i9 = 16;
  } else {
   i9 = 21;
  }
 } while (0);
 do {
  if ((i9 | 0) == 16) {
   if ((i8 | 0) == 0) {
    i9 = 21;
    break;
   }
   i6 = HEAP32[i8 + 12 >> 2] | 0;
   i7 = i8 + 32 | 0;
   if ((i6 & 2048 | 0) == 0) {
    i10 = i7 | 0;
   } else {
    i10 = HEAP32[i7 >> 2] | 0;
   }
   if ((HEAP32[i10 >> 2] | 0) == 0) {
    i9 = 21;
   } else {
    i11 = i8;
    i12 = i6;
   }
  }
 } while (0);
 if ((i9 | 0) == 21) {
  i9 = HEAP32[i1 >> 2] | 0;
  i11 = i9;
  i12 = HEAP32[i9 + 12 >> 2] | 0;
 }
 i9 = i11 + 32 | 0;
 if ((i12 & 2048 | 0) == 0) {
  i13 = i9 | 0;
 } else {
  i13 = HEAP32[i9 >> 2] | 0;
 }
 HEAP32[i4 >> 2] = HEAP32[i13 >> 2];
 return;
}
function __ZN7WebCore16RenderedPositionC1ERKNS_8PositionENS_9EAffinityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 1;
 HEAP32[i1 + 16 >> 2] = 1;
 i1 = i2 | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  return;
 }
 __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityERPNS_9InlineBoxERi(i2, i3, i5, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i4 >> 2] = HEAP32[i6 + 16 >> 2];
  return;
 }
 i6 = HEAP32[i2 + 8 >> 2] & 7;
 do {
  if ((i6 | 0) == 0) {
   i5 = __ZNK7WebCore8Position24computeNodeAfterPositionEv(i2) | 0;
   if ((i5 | 0) != 0) {
    i3 = i5 + 32 | 0;
    if ((HEAP32[i5 + 12 >> 2] & 2048 | 0) == 0) {
     i7 = i3 | 0;
    } else {
     i7 = HEAP32[i3 >> 2] | 0;
    }
    if ((HEAP32[i7 >> 2] | 0) != 0) {
     i8 = i5;
     i9 = 16;
     break;
    }
   }
   i5 = HEAP32[i1 >> 2] | 0;
   if ((HEAP32[i5 + 12 >> 2] & 2 | 0) == 0) {
    i9 = 21;
    break;
   }
   i8 = HEAP32[i5 + 40 >> 2] | 0;
   i9 = 16;
  } else if ((i6 | 0) == 3) {
   i5 = HEAP32[i1 >> 2] | 0;
   if ((HEAP32[i5 + 12 >> 2] & 2 | 0) == 0) {
    i9 = 21;
    break;
   }
   i8 = HEAP32[i5 + 36 >> 2] | 0;
   i9 = 16;
  } else if ((i6 | 0) == 4) {
   i5 = HEAP32[i1 >> 2] | 0;
   if ((HEAP32[i5 + 12 >> 2] & 2 | 0) == 0) {
    i9 = 21;
    break;
   }
   i8 = HEAP32[i5 + 40 >> 2] | 0;
   i9 = 16;
  } else {
   i9 = 21;
  }
 } while (0);
 do {
  if ((i9 | 0) == 16) {
   if ((i8 | 0) == 0) {
    i9 = 21;
    break;
   }
   i6 = HEAP32[i8 + 12 >> 2] | 0;
   i7 = i8 + 32 | 0;
   if ((i6 & 2048 | 0) == 0) {
    i10 = i7 | 0;
   } else {
    i10 = HEAP32[i7 >> 2] | 0;
   }
   if ((HEAP32[i10 >> 2] | 0) == 0) {
    i9 = 21;
   } else {
    i11 = i8;
    i12 = i6;
   }
  }
 } while (0);
 if ((i9 | 0) == 21) {
  i9 = HEAP32[i1 >> 2] | 0;
  i11 = i9;
  i12 = HEAP32[i9 + 12 >> 2] | 0;
 }
 i9 = i11 + 32 | 0;
 if ((i12 & 2048 | 0) == 0) {
  i13 = i9 | 0;
 } else {
  i13 = HEAP32[i9 >> 2] | 0;
 }
 HEAP32[i4 >> 2] = HEAP32[i13 >> 2];
 return;
}
function __ZN7WebCore16RenderedPosition22rightBoundaryOfBidiRunEh(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if (((HEAP32[i4 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < (i3 & 255) >>> 0) {
    break;
   } else {
    i5 = i4;
   }
   while (1) {
    i2 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(i5) | 0;
    if ((i2 | 0) == 0) {
     break;
    }
    if (((HEAP32[i2 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < (i3 & 255) >>> 0) {
     break;
    } else {
     i5 = i2;
    }
   }
   i2 = HEAP32[i5 + 16 >> 2] | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   if ((HEAP32[i5 + 32 >> 2] & 4 | 0) == 0) {
    i7 = FUNCTION_TABLE_ii[HEAP32[i6 + 92 >> 2] & 1](i5) | 0;
   } else {
    i7 = FUNCTION_TABLE_ii[HEAP32[i6 + 88 >> 2] & 1](i5) | 0;
   }
   HEAP32[i1 >> 2] = i2;
   HEAP32[i1 + 4 >> 2] = i5;
   HEAP32[i1 + 8 >> 2] = i7;
   HEAP32[i1 + 12 >> 2] = 1;
   HEAP32[i1 + 16 >> 2] = 1;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 1;
 HEAP32[i1 + 16 >> 2] = 1;
 return;
}
function __ZN7WebCore16RenderedPosition21leftBoundaryOfBidiRunEh(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if (((HEAP32[i4 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < (i3 & 255) >>> 0) {
    break;
   } else {
    i5 = i4;
   }
   while (1) {
    i2 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(i5) | 0;
    if ((i2 | 0) == 0) {
     break;
    }
    if (((HEAP32[i2 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < (i3 & 255) >>> 0) {
     break;
    } else {
     i5 = i2;
    }
   }
   i2 = HEAP32[i5 + 16 >> 2] | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   if ((HEAP32[i5 + 32 >> 2] & 4 | 0) == 0) {
    i7 = FUNCTION_TABLE_ii[HEAP32[i6 + 88 >> 2] & 1](i5) | 0;
   } else {
    i7 = FUNCTION_TABLE_ii[HEAP32[i6 + 92 >> 2] & 1](i5) | 0;
   }
   HEAP32[i1 >> 2] = i2;
   HEAP32[i1 + 4 >> 2] = i5;
   HEAP32[i1 + 8 >> 2] = i7;
   HEAP32[i1 + 12 >> 2] = 1;
   HEAP32[i1 + 16 >> 2] = 1;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 1;
 HEAP32[i1 + 16 >> 2] = 1;
 return;
}
function __ZNK7WebCore16RenderedPosition16bidiLevelOnRightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i3 + 32 >> 2] & 4 | 0) == 0) {
  i7 = FUNCTION_TABLE_ii[HEAP32[i6 + 92 >> 2] & 1](i3) | 0;
 } else {
  i7 = FUNCTION_TABLE_ii[HEAP32[i6 + 88 >> 2] & 1](i3) | 0;
 }
 do {
  if ((i5 | 0) == (i7 | 0)) {
   i3 = i1 + 16 | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) != 1) {
    i8 = i6;
    break;
   }
   i6 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(HEAP32[i2 >> 2] | 0) | 0;
   HEAP32[i3 >> 2] = i6;
   i8 = i6;
  } else {
   i8 = HEAP32[i2 >> 2] | 0;
  }
 } while (0);
 if ((i8 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[i8 + 32 >> 2] | 0) >>> 2 & 63;
 return i4 | 0;
}
function __ZNK7WebCore16RenderedPosition15bidiLevelOnLeftEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i3 + 32 >> 2] & 4 | 0) == 0) {
  i7 = FUNCTION_TABLE_ii[HEAP32[i6 + 88 >> 2] & 1](i3) | 0;
 } else {
  i7 = FUNCTION_TABLE_ii[HEAP32[i6 + 92 >> 2] & 1](i3) | 0;
 }
 do {
  if ((i5 | 0) == (i7 | 0)) {
   i3 = i1 + 12 | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) != 1) {
    i8 = i6;
    break;
   }
   i6 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(HEAP32[i2 >> 2] | 0) | 0;
   HEAP32[i3 >> 2] = i6;
   i8 = i6;
  } else {
   i8 = HEAP32[i2 >> 2] | 0;
  }
 } while (0);
 if ((i8 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[i8 + 32 >> 2] | 0) >>> 2 & 63;
 return i4 | 0;
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
function __ZNK7WebCore16RenderedPosition13prevLeafChildEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 1) {
  i4 = i3;
  return i4 | 0;
 }
 i3 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
 HEAP32[i2 >> 2] = i3;
 i4 = i3;
 return i4 | 0;
}
function __ZNK7WebCore16RenderedPosition13nextLeafChildEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 1) {
  i4 = i3;
  return i4 | 0;
 }
 i3 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
 HEAP32[i2 >> 2] = i3;
 i4 = i3;
 return i4 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b5() {
 abort(5);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore16RenderedPositionC2ERKNS_15VisiblePositionE,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore16RenderedPositionC2ERKNS_8PositionENS_9EAffinityE,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore16RenderedPosition12absoluteRectEPNS_10LayoutUnitE","__ZNK7WebCore16RenderedPosition13prevLeafChildEv","__ZNK7WebCore16RenderedPosition32positionAtRightBoundaryOfBiDiRunEv","__ZNK7WebCore16RenderedPosition13nextLeafChildEv","__ZNK7WebCore16RenderedPosition23atLeftBoundaryOfBidiRunENS0_20ShouldMatchBidiLevelEh","__ZNK7WebCore16RenderedPosition24atRightBoundaryOfBidiRunENS0_20ShouldMatchBidiLevelEh","__ZN7WebCore16RenderedPosition22rightBoundaryOfBidiRunEh","_memset","__ZNK7WebCore16RenderedPosition12isEquivalentERKS0_","__ZNK7WebCore16RenderedPosition16bidiLevelOnRightEv","__ZN7WebCore28renderObjectContainsPositionEPNS_12RenderObjectERKNS_8PositionE","__ZN7WebCore16RenderedPositionC2ERKNS_15VisiblePositionE","_memcpy","_strlen","__ZNK7WebCore16RenderedPosition31positionAtLeftBoundaryOfBiDiRunEv","__ZN7WebCore16RenderedPosition21leftBoundaryOfBidiRunEh","__ZNK7WebCore16RenderedPosition15bidiLevelOnLeftEv","__ZN7WebCore16RenderedPositionC2ERKNS_8PositionENS_9EAffinityE"]
