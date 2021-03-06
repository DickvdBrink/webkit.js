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
H_BASE = parentModule["_malloc"](40 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 40;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore18HTMLNameCollectionC1ERNS_8DocumentENS_14CollectionTypeERKN3WTF12AtomicStringE;
var __ZN7WebCore18HTMLNameCollectionD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
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
  var __ZN7WebCore9HTMLNames6imgTagE=env.__ZN7WebCore9HTMLNames6imgTagE|0;
  var __ZN7WebCore9HTMLNames8embedTagE=env.__ZN7WebCore9HTMLNames8embedTagE|0;
  var __ZN7WebCore9HTMLNames9iframeTagE=env.__ZN7WebCore9HTMLNames9iframeTagE|0;
  var __ZN7WebCore9HTMLNames7formTagE=env.__ZN7WebCore9HTMLNames7formTagE|0;
  var __ZN7WebCore9HTMLNames9objectTagE=env.__ZN7WebCore9HTMLNames9objectTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore9HTMLNames8nameAttrE=env.__ZN7WebCore9HTMLNames8nameAttrE|0;
  var __ZN7WebCore9HTMLNames9appletTagE=env.__ZN7WebCore9HTMLNames9appletTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore18HTMLNameCollectionE=(H_BASE+8)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore22DocumentNameCollection11nodeMatchesEPNS_7ElementEPKN3WTF16AtomicStringImplE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
 i3 = (HEAP32[i1 + 12 >> 2] & 16 | 0) == 0;
 if (i3) {
  i4 = HEAP32[i1 + 44 >> 2] | 0;
  i5 = 4;
 } else {
  i6 = HEAP32[i1 + 44 >> 2] | 0;
  if ((HEAP32[i6 + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 >> 2] | 0)) {
   i4 = i6;
   i5 = 4;
  }
 }
 do {
  if ((i5 | 0) == 4) {
   i6 = HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
   i7 = HEAP32[i4 + 12 >> 2] | 0;
   if ((i7 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
    if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
   if ((i7 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
    if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames9appletTagE >> 2] | 0;
   do {
    if ((i4 | 0) != (i6 | 0)) {
     if ((i7 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
      if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
       break;
      }
     }
     i8 = HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0;
     do {
      if ((i4 | 0) != (i8 | 0)) {
       if ((i7 | 0) == (HEAP32[i8 + 12 >> 2] | 0)) {
        if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i8 + 16 >> 2] | 0)) {
         break;
        }
       }
       if (i3) {
        i9 = 0;
        return i9 | 0;
       }
       if ((i7 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
        i9 = 0;
        return i9 | 0;
       }
       i10 = HEAP32[i1 + 48 >> 2] | 0;
       i11 = (i10 | 0) == 0;
       L30 : do {
        if (i11) {
         i12 = __ZN3WTF8nullAtomE;
        } else {
         i13 = HEAP32[i10 + 4 >> 2] | 0;
         if ((i13 & 268435456 | 0) == 0) {
          i12 = __ZN3WTF8nullAtomE;
          break;
         }
         if ((i13 & 1 | 0) == 0) {
          i14 = i13 >>> 1 & 134217727;
          i15 = i10 + 20 | 0;
         } else {
          i13 = i10 + 24 | 0;
          i14 = HEAP32[i13 + 8 >> 2] | 0;
          i15 = HEAP32[i13 >> 2] | 0;
         }
         if ((i14 | 0) == 0) {
          i12 = __ZN3WTF8nullAtomE;
          break;
         }
         i13 = HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0;
         i16 = i13 + 12 | 0;
         i17 = i13 + 16 | 0;
         i18 = 0;
         while (1) {
          i19 = i15 + (i18 << 3) | 0;
          i20 = HEAP32[i19 >> 2] | 0;
          if ((i20 | 0) == (i13 | 0)) {
           break;
          }
          if ((HEAP32[i20 + 12 >> 2] | 0) == (HEAP32[i16 >> 2] | 0)) {
           if ((HEAP32[i20 + 16 >> 2] | 0) == (HEAP32[i17 >> 2] | 0)) {
            break;
           }
          }
          i20 = i18 + 1 | 0;
          if (i20 >>> 0 < i14 >>> 0) {
           i18 = i20;
          } else {
           i12 = __ZN3WTF8nullAtomE;
           break L30;
          }
         }
         i12 = (i19 | 0) == 0 ? __ZN3WTF8nullAtomE : i15 + (i18 << 3) + 4 | 0;
        }
       } while (0);
       if ((HEAP32[i12 >> 2] | 0) == (i2 | 0)) {
        i9 = 1;
        return i9 | 0;
       }
       L49 : do {
        if (i11) {
         i21 = __ZN3WTF8nullAtomE;
        } else {
         if ((HEAP32[i10 + 16 >> 2] | 0) == 0) {
          i21 = __ZN3WTF8nullAtomE;
          break;
         }
         i17 = HEAP32[i10 + 4 >> 2] | 0;
         if ((i17 & 1 | 0) == 0) {
          i22 = i17 >>> 1 & 134217727;
          i23 = i10 + 20 | 0;
         } else {
          i17 = i10 + 24 | 0;
          i22 = HEAP32[i17 + 8 >> 2] | 0;
          i23 = HEAP32[i17 >> 2] | 0;
         }
         if ((i22 | 0) == 0) {
          i21 = __ZN3WTF8nullAtomE;
          break;
         }
         i17 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0;
         i16 = i17 + 12 | 0;
         i13 = i17 + 16 | 0;
         i20 = 0;
         while (1) {
          i24 = i23 + (i20 << 3) | 0;
          i25 = HEAP32[i24 >> 2] | 0;
          if ((i25 | 0) == (i17 | 0)) {
           break;
          }
          if ((HEAP32[i25 + 12 >> 2] | 0) == (HEAP32[i16 >> 2] | 0)) {
           if ((HEAP32[i25 + 16 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
            break;
           }
          }
          i25 = i20 + 1 | 0;
          if (i25 >>> 0 < i22 >>> 0) {
           i20 = i25;
          } else {
           i21 = __ZN3WTF8nullAtomE;
           break L49;
          }
         }
         i21 = (i24 | 0) == 0 ? __ZN3WTF8nullAtomE : i23 + (i20 << 3) + 4 | 0;
        }
       } while (0);
       if ((HEAP32[i21 >> 2] | 0) != (i2 | 0) | i11) {
        i9 = 0;
        return i9 | 0;
       }
       i9 = (HEAP32[i10 + 4 >> 2] & 268435456 | 0) != 0;
       return i9 | 0;
      }
     } while (0);
     i8 = HEAP32[i1 + 48 >> 2] | 0;
     i13 = (i8 | 0) == 0;
     L70 : do {
      if (i13) {
       i26 = __ZN3WTF8nullAtomE;
      } else {
       i16 = HEAP32[i8 + 4 >> 2] | 0;
       if ((i16 & 268435456 | 0) == 0) {
        i26 = __ZN3WTF8nullAtomE;
        break;
       }
       if ((i16 & 1 | 0) == 0) {
        i27 = i16 >>> 1 & 134217727;
        i28 = i8 + 20 | 0;
       } else {
        i16 = i8 + 24 | 0;
        i27 = HEAP32[i16 + 8 >> 2] | 0;
        i28 = HEAP32[i16 >> 2] | 0;
       }
       if ((i27 | 0) == 0) {
        i26 = __ZN3WTF8nullAtomE;
        break;
       }
       i16 = HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0;
       i17 = i16 + 12 | 0;
       i18 = i16 + 16 | 0;
       i25 = 0;
       while (1) {
        i29 = i28 + (i25 << 3) | 0;
        i30 = HEAP32[i29 >> 2] | 0;
        if ((i30 | 0) == (i16 | 0)) {
         break;
        }
        if ((HEAP32[i30 + 12 >> 2] | 0) == (HEAP32[i17 >> 2] | 0)) {
         if ((HEAP32[i30 + 16 >> 2] | 0) == (HEAP32[i18 >> 2] | 0)) {
          break;
         }
        }
        i30 = i25 + 1 | 0;
        if (i30 >>> 0 < i27 >>> 0) {
         i25 = i30;
        } else {
         i26 = __ZN3WTF8nullAtomE;
         break L70;
        }
       }
       i26 = (i29 | 0) == 0 ? __ZN3WTF8nullAtomE : i28 + (i25 << 3) + 4 | 0;
      }
     } while (0);
     do {
      if ((HEAP32[i26 >> 2] | 0) != (i2 | 0)) {
       L88 : do {
        if (i13) {
         i31 = __ZN3WTF8nullAtomE;
        } else {
         if ((HEAP32[i8 + 16 >> 2] | 0) == 0) {
          i31 = __ZN3WTF8nullAtomE;
          break;
         }
         i18 = HEAP32[i8 + 4 >> 2] | 0;
         if ((i18 & 1 | 0) == 0) {
          i32 = i18 >>> 1 & 134217727;
          i33 = i8 + 20 | 0;
         } else {
          i18 = i8 + 24 | 0;
          i32 = HEAP32[i18 + 8 >> 2] | 0;
          i33 = HEAP32[i18 >> 2] | 0;
         }
         if ((i32 | 0) == 0) {
          i31 = __ZN3WTF8nullAtomE;
          break;
         }
         i18 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0;
         i17 = i18 + 12 | 0;
         i16 = i18 + 16 | 0;
         i10 = 0;
         while (1) {
          i34 = i33 + (i10 << 3) | 0;
          i11 = HEAP32[i34 >> 2] | 0;
          if ((i11 | 0) == (i18 | 0)) {
           break;
          }
          if ((HEAP32[i11 + 12 >> 2] | 0) == (HEAP32[i17 >> 2] | 0)) {
           if ((HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i16 >> 2] | 0)) {
            break;
           }
          }
          i11 = i10 + 1 | 0;
          if (i11 >>> 0 < i32 >>> 0) {
           i10 = i11;
          } else {
           i31 = __ZN3WTF8nullAtomE;
           break L88;
          }
         }
         i31 = (i34 | 0) == 0 ? __ZN3WTF8nullAtomE : i33 + (i10 << 3) + 4 | 0;
        }
       } while (0);
       if ((HEAP32[i31 >> 2] | 0) == (i2 | 0)) {
        break;
       } else {
        i9 = 0;
       }
       return i9 | 0;
      }
     } while (0);
     i9 = (HEAP8[i1 + 388 | 0] & 1) != 0;
     return i9 | 0;
    }
   } while (0);
   i7 = HEAP32[i1 + 48 >> 2] | 0;
   i6 = (i7 | 0) == 0;
   L108 : do {
    if (i6) {
     i35 = __ZN3WTF8nullAtomE;
    } else {
     i8 = HEAP32[i7 + 4 >> 2] | 0;
     if ((i8 & 268435456 | 0) == 0) {
      i35 = __ZN3WTF8nullAtomE;
      break;
     }
     if ((i8 & 1 | 0) == 0) {
      i36 = i8 >>> 1 & 134217727;
      i37 = i7 + 20 | 0;
     } else {
      i8 = i7 + 24 | 0;
      i36 = HEAP32[i8 + 8 >> 2] | 0;
      i37 = HEAP32[i8 >> 2] | 0;
     }
     if ((i36 | 0) == 0) {
      i35 = __ZN3WTF8nullAtomE;
      break;
     }
     i8 = HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0;
     i13 = i8 + 12 | 0;
     i25 = i8 + 16 | 0;
     i16 = 0;
     while (1) {
      i38 = i37 + (i16 << 3) | 0;
      i17 = HEAP32[i38 >> 2] | 0;
      if ((i17 | 0) == (i8 | 0)) {
       break;
      }
      if ((HEAP32[i17 + 12 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
       if ((HEAP32[i17 + 16 >> 2] | 0) == (HEAP32[i25 >> 2] | 0)) {
        break;
       }
      }
      i17 = i16 + 1 | 0;
      if (i17 >>> 0 < i36 >>> 0) {
       i16 = i17;
      } else {
       i35 = __ZN3WTF8nullAtomE;
       break L108;
      }
     }
     i35 = (i38 | 0) == 0 ? __ZN3WTF8nullAtomE : i37 + (i16 << 3) + 4 | 0;
    }
   } while (0);
   if ((HEAP32[i35 >> 2] | 0) == (i2 | 0)) {
    i9 = 1;
    return i9 | 0;
   }
   L127 : do {
    if (i6) {
     i39 = __ZN3WTF8nullAtomE;
    } else {
     if ((HEAP32[i7 + 16 >> 2] | 0) == 0) {
      i39 = __ZN3WTF8nullAtomE;
      break;
     }
     i25 = HEAP32[i7 + 4 >> 2] | 0;
     if ((i25 & 1 | 0) == 0) {
      i40 = i25 >>> 1 & 134217727;
      i41 = i7 + 20 | 0;
     } else {
      i25 = i7 + 24 | 0;
      i40 = HEAP32[i25 + 8 >> 2] | 0;
      i41 = HEAP32[i25 >> 2] | 0;
     }
     if ((i40 | 0) == 0) {
      i39 = __ZN3WTF8nullAtomE;
      break;
     }
     i25 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0;
     i13 = i25 + 12 | 0;
     i8 = i25 + 16 | 0;
     i17 = 0;
     while (1) {
      i42 = i41 + (i17 << 3) | 0;
      i18 = HEAP32[i42 >> 2] | 0;
      if ((i18 | 0) == (i25 | 0)) {
       break;
      }
      if ((HEAP32[i18 + 12 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
       if ((HEAP32[i18 + 16 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
        break;
       }
      }
      i18 = i17 + 1 | 0;
      if (i18 >>> 0 < i40 >>> 0) {
       i17 = i18;
      } else {
       i39 = __ZN3WTF8nullAtomE;
       break L127;
      }
     }
     i39 = (i42 | 0) == 0 ? __ZN3WTF8nullAtomE : i41 + (i17 << 3) + 4 | 0;
    }
   } while (0);
   i9 = (HEAP32[i39 >> 2] | 0) == (i2 | 0);
   return i9 | 0;
  }
 } while (0);
 i39 = HEAP32[i1 + 48 >> 2] | 0;
 L145 : do {
  if ((i39 | 0) == 0) {
   i43 = __ZN3WTF8nullAtomE;
  } else {
   i1 = HEAP32[i39 + 4 >> 2] | 0;
   if ((i1 & 268435456 | 0) == 0) {
    i43 = __ZN3WTF8nullAtomE;
    break;
   }
   if ((i1 & 1 | 0) == 0) {
    i44 = i1 >>> 1 & 134217727;
    i45 = i39 + 20 | 0;
   } else {
    i1 = i39 + 24 | 0;
    i44 = HEAP32[i1 + 8 >> 2] | 0;
    i45 = HEAP32[i1 >> 2] | 0;
   }
   if ((i44 | 0) == 0) {
    i43 = __ZN3WTF8nullAtomE;
    break;
   }
   i1 = HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0;
   i41 = i1 + 12 | 0;
   i42 = i1 + 16 | 0;
   i40 = 0;
   while (1) {
    i46 = i45 + (i40 << 3) | 0;
    i35 = HEAP32[i46 >> 2] | 0;
    if ((i35 | 0) == (i1 | 0)) {
     break;
    }
    if ((HEAP32[i35 + 12 >> 2] | 0) == (HEAP32[i41 >> 2] | 0)) {
     if ((HEAP32[i35 + 16 >> 2] | 0) == (HEAP32[i42 >> 2] | 0)) {
      break;
     }
    }
    i35 = i40 + 1 | 0;
    if (i35 >>> 0 < i44 >>> 0) {
     i40 = i35;
    } else {
     i43 = __ZN3WTF8nullAtomE;
     break L145;
    }
   }
   i43 = (i46 | 0) == 0 ? __ZN3WTF8nullAtomE : i45 + (i40 << 3) + 4 | 0;
  }
 } while (0);
 i9 = (HEAP32[i43 >> 2] | 0) == (i2 | 0);
 return i9 | 0;
}
function __ZN7WebCore20WindowNameCollection11nodeMatchesEPNS_7ElementEPKN3WTF16AtomicStringImplE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] & 16 | 0) == 0) {
   i3 = HEAP32[i1 + 44 >> 2] | 0;
   i4 = 5;
  } else {
   i5 = HEAP32[i1 + 44 >> 2] | 0;
   i6 = HEAP32[i5 + 12 >> 2] | 0;
   if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i4 = 14;
    break;
   }
   if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i4 = 14;
   } else {
    i3 = i5;
    i4 = 5;
   }
  }
 } while (0);
 do {
  if ((i4 | 0) == 5) {
   i5 = HEAP32[__ZN7WebCore9HTMLNames9appletTagE >> 2] | 0;
   if ((i3 | 0) == (i5 | 0)) {
    i4 = 14;
    break;
   }
   i6 = HEAP32[i3 + 12 >> 2] | 0;
   if ((i6 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
    if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
     i4 = 14;
     break;
    }
   }
   i5 = HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0;
   if ((i3 | 0) == (i5 | 0)) {
    i4 = 14;
    break;
   }
   if ((i6 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
    if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
     i4 = 14;
     break;
    }
   }
   i5 = HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0;
   if ((i3 | 0) == (i5 | 0)) {
    i4 = 14;
    break;
   }
   if ((i6 | 0) != (HEAP32[i5 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i4 = 14;
   }
  }
 } while (0);
 do {
  if ((i4 | 0) == 14) {
   i3 = HEAP32[i1 + 48 >> 2] | 0;
   L19 : do {
    if ((i3 | 0) == 0) {
     i7 = __ZN3WTF8nullAtomE;
    } else {
     i5 = HEAP32[i3 + 4 >> 2] | 0;
     if ((i5 & 268435456 | 0) == 0) {
      i7 = __ZN3WTF8nullAtomE;
      break;
     }
     if ((i5 & 1 | 0) == 0) {
      i8 = i5 >>> 1 & 134217727;
      i9 = i3 + 20 | 0;
     } else {
      i5 = i3 + 24 | 0;
      i8 = HEAP32[i5 + 8 >> 2] | 0;
      i9 = HEAP32[i5 >> 2] | 0;
     }
     if ((i8 | 0) == 0) {
      i7 = __ZN3WTF8nullAtomE;
      break;
     }
     i5 = HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0;
     i6 = i5 + 12 | 0;
     i10 = i5 + 16 | 0;
     i11 = 0;
     while (1) {
      i12 = i9 + (i11 << 3) | 0;
      i13 = HEAP32[i12 >> 2] | 0;
      if ((i13 | 0) == (i5 | 0)) {
       break;
      }
      if ((HEAP32[i13 + 12 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
       if ((HEAP32[i13 + 16 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
        break;
       }
      }
      i13 = i11 + 1 | 0;
      if (i13 >>> 0 < i8 >>> 0) {
       i11 = i13;
      } else {
       i7 = __ZN3WTF8nullAtomE;
       break L19;
      }
     }
     i7 = (i12 | 0) == 0 ? __ZN3WTF8nullAtomE : i9 + (i11 << 3) + 4 | 0;
    }
   } while (0);
   if ((HEAP32[i7 >> 2] | 0) == (i2 | 0)) {
    i14 = 1;
   } else {
    break;
   }
   return i14 | 0;
  }
 } while (0);
 i7 = HEAP32[i1 + 48 >> 2] | 0;
 L37 : do {
  if ((i7 | 0) == 0) {
   i15 = __ZN3WTF8nullAtomE;
  } else {
   if ((HEAP32[i7 + 16 >> 2] | 0) == 0) {
    i15 = __ZN3WTF8nullAtomE;
    break;
   }
   i9 = HEAP32[i7 + 4 >> 2] | 0;
   if ((i9 & 1 | 0) == 0) {
    i16 = i9 >>> 1 & 134217727;
    i17 = i7 + 20 | 0;
   } else {
    i9 = i7 + 24 | 0;
    i16 = HEAP32[i9 + 8 >> 2] | 0;
    i17 = HEAP32[i9 >> 2] | 0;
   }
   if ((i16 | 0) == 0) {
    i15 = __ZN3WTF8nullAtomE;
    break;
   }
   i9 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0;
   i12 = i9 + 12 | 0;
   i8 = i9 + 16 | 0;
   i4 = 0;
   while (1) {
    i18 = i17 + (i4 << 3) | 0;
    i3 = HEAP32[i18 >> 2] | 0;
    if ((i3 | 0) == (i9 | 0)) {
     break;
    }
    if ((HEAP32[i3 + 12 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
     if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
      break;
     }
    }
    i3 = i4 + 1 | 0;
    if (i3 >>> 0 < i16 >>> 0) {
     i4 = i3;
    } else {
     i15 = __ZN3WTF8nullAtomE;
     break L37;
    }
   }
   i15 = (i18 | 0) == 0 ? __ZN3WTF8nullAtomE : i17 + (i4 << 3) + 4 | 0;
  }
 } while (0);
 i14 = (HEAP32[i15 >> 2] | 0) == (i2 | 0);
 return i14 | 0;
}
function __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 * 12 & -1) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7 | 0;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 * 12 & -1) | 0;
  i12 = i2 | 0;
  i13 = HEAP8[i12] | 0;
  if ((i13 << 24 >> 24 | 0) == 0) {
   i14 = HEAP32[i7 + (i10 * 12 & -1) + 4 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i15 = i11;
   } else {
    i16 = i14;
    i17 = 6;
   }
  } else if ((i13 << 24 >> 24 | 0) == (-1 | 0)) {
   i15 = i11;
  } else {
   i16 = HEAP32[i7 + (i10 * 12 & -1) + 4 >> 2] | 0;
   i17 = 6;
  }
  if ((i17 | 0) == 6) {
   i17 = 0;
   i14 = HEAP32[i6 >> 2] | 0;
   i18 = HEAP32[i4 >> 2] | 0;
   i19 = i7 + (i10 * 12 & -1) + 4 | 0;
   i20 = (i13 & 255) + ((HEAP32[i16 + 16 >> 2] | 0) >>> 7) | 0;
   i21 = (i20 >>> 23) + ~i20 | 0;
   i22 = i21 << 12 ^ i21;
   i21 = i22 >>> 7 ^ i22;
   i22 = i21 << 2 ^ i21;
   i21 = i22 >>> 20 ^ i22 | 1;
   i22 = i20;
   i20 = 0;
   i23 = 0;
   L11 : while (1) {
    i24 = i22 & i18;
    i25 = i14 + (i24 * 12 & -1) | 0;
    i26 = HEAP8[i25 | 0] | 0;
    if ((i26 << 24 >> 24 | 0) == 0) {
     if ((HEAP32[i14 + (i24 * 12 & -1) + 4 >> 2] | 0) == 0) {
      i17 = 9;
      break;
     } else {
      i17 = 10;
     }
    } else if ((i26 << 24 >> 24 | 0) == (-1 | 0)) {
     i27 = i25;
    } else {
     i17 = 10;
    }
    do {
     if ((i17 | 0) == 10) {
      i17 = 0;
      if (i26 << 24 >> 24 != i13 << 24 >> 24) {
       i27 = i23;
       break;
      }
      if ((HEAP32[i14 + (i24 * 12 & -1) + 4 >> 2] | 0) == (i16 | 0)) {
       i28 = i25;
       break L11;
      } else {
       i27 = i23;
      }
     }
    } while (0);
    i26 = (i20 | 0) == 0 ? i21 : i20;
    i22 = i26 + i24 | 0;
    i20 = i26;
    i23 = i27;
   }
   if ((i17 | 0) == 9) {
    i17 = 0;
    i28 = (i23 | 0) != 0 ? i23 : i25;
   }
   i20 = i28 + 4 | 0;
   i22 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i21 = i22 | 0;
     i14 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i21 >> 2] = i14;
      break;
     }
    }
   } while (0);
   HEAP8[i28 | 0] = HEAP8[i12] | 0;
   i22 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   HEAP32[i20 >> 2] = i22;
   HEAP32[i28 + 8 >> 2] = HEAP32[i7 + (i10 * 12 & -1) + 8 >> 2];
   i15 = (i2 | 0) == (i3 | 0) ? i28 : i11;
  }
  i22 = i10 + 1 | 0;
  if ((i22 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i22;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i29 = 0;
 } else {
  i8 = i15;
  i9 = i7 | 0;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP8[i7 + (i29 * 12 & -1) | 0] | 0) != -1) {
    i1 = HEAP32[i7 + (i29 * 12 & -1) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 | 0;
    i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i11 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i2 = i29 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i29 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7 | 0;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore17NodeListsNodeData22removeCachedCollectionEPNS_14HTMLCollectionERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = i1 + 80 | 0;
 if (((HEAP32[i1 + 20 >> 2] | 0) + ((HEAP32[i1 >> 2] | 0) != 0) + ((HEAP32[i1 + 4 >> 2] | 0) != 0) + (HEAP32[i1 + 40 >> 2] | 0) + (HEAP32[i1 + 60 >> 2] | 0) + (HEAP32[i4 >> 2] | 0) | 0) == 1) {
  __ZN7WebCore4Node14clearNodeListsEv(HEAP32[i2 + 12 >> 2] | 0);
  return;
 }
 i5 = i1 + 68 | 0;
 i6 = (HEAP32[i2 + 32 >> 2] | 0) >>> 8 & 31;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  i7 = i2 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = HEAP32[i1 + 72 >> 2] | 0;
  i9 = i8 * 12 & -1 | 0;
  i10 = 0;
  i11 = i8;
 } else {
  i8 = HEAP32[i1 + 76 >> 2] | 0;
  i12 = ((HEAP32[i2 + 16 >> 2] | 0) >>> 7) + (i6 & 255) | 0;
  i13 = (i12 >>> 23) + ~i12 | 0;
  i14 = i13 << 12 ^ i13;
  i13 = i14 >>> 7 ^ i14;
  i14 = i13 << 2 ^ i13;
  i13 = i14 >>> 20 ^ i14 | 1;
  i14 = i12;
  i12 = 0;
  L11 : while (1) {
   i15 = i14 & i8;
   i16 = i7 + (i15 * 12 & -1) | 0;
   i17 = HEAP8[i16 | 0] | 0;
   if ((i17 << 24 >> 24 | 0) == 0) {
    if ((HEAP32[i7 + (i15 * 12 & -1) + 4 >> 2] | 0) == 0) {
     i18 = 0;
     break;
    } else {
     i19 = 10;
    }
   } else if ((i17 << 24 >> 24 | 0) != (-1 | 0)) {
    i19 = 10;
   }
   do {
    if ((i19 | 0) == 10) {
     i19 = 0;
     if (i17 << 24 >> 24 != i6 << 24 >> 24) {
      break;
     }
     if ((HEAP32[i7 + (i15 * 12 & -1) + 4 >> 2] | 0) == (i2 | 0)) {
      i18 = i16;
      break L11;
     }
    }
   } while (0);
   i16 = (i12 | 0) == 0 ? i13 : i12;
   i14 = i16 + i15 | 0;
   i12 = i16;
  }
  i12 = HEAP32[i1 + 72 >> 2] | 0;
  i9 = (i18 | 0) == 0 ? i7 + (i12 * 12 & -1) | 0 : i18;
  i10 = i7;
  i11 = i12;
 }
 i12 = i5 | 0;
 i5 = i1 + 72 | 0;
 do {
  if ((i9 | 0) != (i10 + (i11 * 12 & -1) | 0)) {
   i7 = HEAP32[i9 + 4 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i18 = i7 | 0;
     i14 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i18 >> 2] = i14;
      break;
     }
    }
   } while (0);
   HEAP8[i9 | 0] = -1;
   i7 = i1 + 84 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i7;
   i15 = HEAP32[i5 >> 2] | 0;
   if (!((i7 * 6 & -1 | 0) < (i15 | 0) & (i15 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_(i12, (i15 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 if (i3) {
  return;
 }
 i3 = i2 | 0;
 i12 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i12 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i3 >> 2] = i12;
  return;
 }
}
function __ZN7WebCore22DocumentNameCollection31nodeMatchesIfNameAttributeMatchEPNS_7ElementE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = (HEAP32[i1 + 12 >> 2] & 16 | 0) == 0;
 do {
  if (i2) {
   i3 = HEAP32[i1 + 44 >> 2] | 0;
  } else {
   i4 = HEAP32[i1 + 44 >> 2] | 0;
   if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i5 = 1;
   } else {
    i3 = i4;
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i4 = HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0;
 if ((i3 | 0) == (i4 | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 i6 = HEAP32[i3 + 12 >> 2] | 0;
 do {
  if ((i6 | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
   if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
    i5 = 1;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i4 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
 if ((i3 | 0) == (i4 | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 do {
  if ((i6 | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
   if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
    i5 = 1;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i4 = HEAP32[__ZN7WebCore9HTMLNames9appletTagE >> 2] | 0;
 if ((i3 | 0) == (i4 | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 do {
  if ((i6 | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
   if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
    i5 = 1;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i4 = HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0;
 do {
  if ((i3 | 0) == (i4 | 0)) {
   i7 = 16;
  } else {
   if ((i6 | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
    if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
     i7 = 16;
     break;
    }
   }
   if (i2) {
    i5 = 0;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 do {
  if ((i7 | 0) == 16) {
   i4 = (HEAP8[i1 + 388 | 0] & 1) != 0;
   if (i4 | i2) {
    i5 = i4;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i5 = (i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0);
 return i5 | 0;
}
function __ZN7WebCore20WindowNameCollection31nodeMatchesIfNameAttributeMatchEPNS_7ElementE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] & 16 | 0) == 0) {
   i3 = HEAP32[i1 + 44 >> 2] | 0;
  } else {
   if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i4 = 1;
    return i4 | 0;
   }
   i5 = HEAP32[i2 + 44 >> 2] | 0;
   if ((HEAP32[i5 + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i4 = 1;
   } else {
    i3 = i5;
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore9HTMLNames9appletTagE >> 2] | 0;
 if ((i3 | 0) == (i2 | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 i1 = HEAP32[i3 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0;
 if ((i3 | 0) == (i2 | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 do {
  if ((i1 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0;
 if ((i3 | 0) == (i2 | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i1 | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
 return i4 | 0;
}
function __ZN7WebCore22DocumentNameCollection29nodeMatchesIfIdAttributeMatchEPNS_7ElementE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i3 = HEAP32[__ZN7WebCore9HTMLNames9appletTagE >> 2] | 0;
 if ((i2 | 0) == (i3 | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 i5 = HEAP32[i2 + 12 >> 2] | 0;
 do {
  if ((i5 | 0) == (HEAP32[i3 + 12 >> 2] | 0)) {
   if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i3 = HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0;
 do {
  if ((i2 | 0) == (i3 | 0)) {
   i6 = 7;
  } else {
   if ((i5 | 0) != (HEAP32[i3 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
    i6 = 7;
   }
  }
 } while (0);
 do {
  if ((i6 | 0) == 7) {
   if ((HEAP8[i1 + 388 | 0] & 1) == 0) {
    break;
   } else {
    i4 = 1;
   }
   return i4 | 0;
  }
 } while (0);
 if ((HEAP32[i1 + 12 >> 2] & 16 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((i5 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[i5 + 4 >> 2] & 268435456 | 0) != 0;
 return i4 | 0;
}
function __ZN7WebCore18HTMLNameCollectionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 | 0;
 i3 = i1 + 76 | 0;
 __ZN7WebCore17NodeListsNodeData22removeCachedCollectionEPNS_14HTMLCollectionERKN3WTF12AtomicStringE(__ZN7WebCore4Node9nodeListsEv(HEAP32[i1 + 12 >> 2] | 0) | 0, i2, i3);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore14HTMLCollectionD2Ev(i2);
  return;
 }
 i3 = i1 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  __ZN7WebCore14HTMLCollectionD2Ev(i2);
  return;
 } else {
  HEAP32[i3 >> 2] = i4;
  __ZN7WebCore14HTMLCollectionD2Ev(i2);
  return;
 }
}
function __ZN7WebCore18HTMLNameCollectionD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 | 0;
 i3 = i1 + 76 | 0;
 __ZN7WebCore17NodeListsNodeData22removeCachedCollectionEPNS_14HTMLCollectionERKN3WTF12AtomicStringE(__ZN7WebCore4Node9nodeListsEv(HEAP32[i1 + 12 >> 2] | 0) | 0, i2, i3);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore14HTMLCollectionD2Ev(i2);
  return;
 }
 i3 = i1 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  __ZN7WebCore14HTMLCollectionD2Ev(i2);
  return;
 } else {
  HEAP32[i3 >> 2] = i4;
  __ZN7WebCore14HTMLCollectionD2Ev(i2);
  return;
 }
}
function __ZN7WebCore18HTMLNameCollectionD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 | 0;
 i3 = i1 + 76 | 0;
 __ZN7WebCore17NodeListsNodeData22removeCachedCollectionEPNS_14HTMLCollectionERKN3WTF12AtomicStringE(__ZN7WebCore4Node9nodeListsEv(HEAP32[i1 + 12 >> 2] | 0) | 0, i2, i3);
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN7WebCore14HTMLCollectionD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
function __ZN7WebCore18HTMLNameCollectionC2ERNS_8DocumentENS_14CollectionTypeERKN3WTF12AtomicStringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore14HTMLCollectionC2ERNS_13ContainerNodeENS_14CollectionTypeENS0_20ElementTraversalTypeE(i1 | 0, i2 | 0, i3, 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 76 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore18HTMLNameCollectionC1ERNS_8DocumentENS_14CollectionTypeERKN3WTF12AtomicStringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore14HTMLCollectionC2ERNS_13ContainerNodeENS_14CollectionTypeENS0_20ElementTraversalTypeE(i1 | 0, i2 | 0, i3, 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 76 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
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
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_iii + 2;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function iii___ZNK7WebCore14HTMLCollection9namedItemERKN3WTF12AtomicStringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore14HTMLCollection9namedItemERKN3WTF12AtomicStringE(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vi___ZNK7WebCore14HTMLCollection15updateNameCacheEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZNK7WebCore14HTMLCollection15updateNameCacheEv(i1 | 0);
}
function vi___ZNK7WebCore14HTMLCollection15invalidateCacheEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZNK7WebCore14HTMLCollection15invalidateCacheEv(i1 | 0);
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
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
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
function __ZNK7WebCore14HTMLCollection18customElementAfterEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b4(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(4);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b2() {
 abort(2);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore18HTMLNameCollectionD2Ev,b0,vi___ZNK7WebCore14HTMLCollection15updateNameCacheEv__wrapper,b0,vi___ZNK7WebCore14HTMLCollection15invalidateCacheEv__wrapper,b0,__ZN7WebCore18HTMLNameCollectionD0Ev,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_v = [b2,b2];
  var FUNCTION_TABLE_iii = [b3,b3,__ZNK7WebCore14HTMLCollection18customElementAfterEPNS_7ElementE,b3,iii___ZNK7WebCore14HTMLCollection9namedItemERKN3WTF12AtomicStringE__wrapper,b3,b3,b3];
  var FUNCTION_TABLE_viiii = [b4,b4,__ZN7WebCore18HTMLNameCollectionC2ERNS_8DocumentENS_14CollectionTypeERKN3WTF12AtomicStringE,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames6imgTagE": __ZN7WebCore9HTMLNames6imgTagE, "__ZN7WebCore9HTMLNames8embedTagE": __ZN7WebCore9HTMLNames8embedTagE, "__ZN7WebCore9HTMLNames9iframeTagE": __ZN7WebCore9HTMLNames9iframeTagE, "__ZN7WebCore9HTMLNames7formTagE": __ZN7WebCore9HTMLNames7formTagE, "__ZN7WebCore9HTMLNames9objectTagE": __ZN7WebCore9HTMLNames9objectTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore9HTMLNames8nameAttrE": __ZN7WebCore9HTMLNames8nameAttrE, "__ZN7WebCore9HTMLNames9appletTagE": __ZN7WebCore9HTMLNames9appletTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore20WindowNameCollection31nodeMatchesIfNameAttributeMatchEPNS_7ElementE","_strlen","__ZN7WebCore22DocumentNameCollection31nodeMatchesIfNameAttributeMatchEPNS_7ElementE","__ZN7WebCore17NodeListsNodeData22removeCachedCollectionEPNS_14HTMLCollectionERKN3WTF12AtomicStringE","__ZNK7WebCore14HTMLCollection18customElementAfterEPNS_7ElementE","__ZN7WebCore20WindowNameCollection11nodeMatchesEPNS_7ElementEPKN3WTF16AtomicStringImplE","_memset","__ZN7WebCore18HTMLNameCollectionD2Ev","_memcpy","__ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_","__ZN7WebCore22DocumentNameCollection29nodeMatchesIfIdAttributeMatchEPNS_7ElementE","__ZN7WebCore18HTMLNameCollectionD0Ev","__ZN7WebCore22DocumentNameCollection11nodeMatchesEPNS_7ElementEPKN3WTF16AtomicStringImplE","__ZN7WebCore18HTMLNameCollectionC2ERNS_8DocumentENS_14CollectionTypeERKN3WTF12AtomicStringE"]
