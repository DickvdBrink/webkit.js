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
var __ZN7WebCore10TreeWalkerC1EN3WTF10PassRefPtrINS_4NodeEEEjNS2_INS_10NodeFilterEEEb;
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
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore10TreeWalker12previousNodeEPN3JSC9ExecStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = i1 + 24 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
 } else {
  i6 = i4 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  i5 = i4;
 }
 i4 = i1 + 8 | 0;
 i1 = i4 | 0;
 i6 = (i2 | 0) == 0;
 i7 = i2 + 16 | 0;
 i8 = (i2 | 0) != 0;
 i9 = i5;
 L4 : while (1) {
  i5 = HEAP32[i1 >> 2] | 0;
  if ((i9 | 0) == (i5 | 0)) {
   i10 = i9;
   i11 = 51;
   break;
  }
  i12 = HEAP32[i9 + 24 >> 2] | 0;
  if ((i12 | 0) == 0) {
   i13 = i9;
   i14 = i5;
  } else {
   i5 = i9;
   i15 = i12;
   while (1) {
    i12 = i15 + 8 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
    do {
     if ((i5 | 0) != 0) {
      i12 = i5 + 8 | 0;
      i16 = i12 | 0;
      i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
      HEAP32[i16 >> 2] = i17;
      if ((i17 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
     }
    } while (0);
    i12 = __ZNK7WebCore16NodeIteratorBase10acceptNodeEPN3JSC9ExecStateEPNS_4NodeE(i4, i2, i15) | 0;
    if (i8) {
     i17 = (HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
      i10 = i15;
      i11 = 51;
      break L4;
     }
    }
    L18 : do {
     if (i12 << 16 >> 16 == 2) {
      i18 = i15;
     } else {
      L20 : do {
       if (i8) {
        i17 = i12;
        i16 = i15;
        while (1) {
         if ((HEAP32[i16 + 12 >> 2] & 2 | 0) == 0) {
          i19 = i16;
          i20 = i17;
          break L20;
         }
         i21 = HEAP32[i16 + 40 >> 2] | 0;
         if ((i21 | 0) == 0) {
          i19 = i16;
          i20 = i17;
          break L20;
         }
         i22 = i21 + 8 | 0;
         HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
         do {
          if ((i16 | 0) != 0) {
           i22 = i16 + 8 | 0;
           i23 = i22 | 0;
           i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
           HEAP32[i23 >> 2] = i24;
           if ((i24 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
          }
         } while (0);
         i22 = __ZNK7WebCore16NodeIteratorBase10acceptNodeEPN3JSC9ExecStateEPNS_4NodeE(i4, i2, i21) | 0;
         i24 = (HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
         if (!((HEAP32[i24 >> 2] & 0 | 0) == 0 & (HEAP32[i24 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
          i10 = i21;
          i11 = 51;
          break L4;
         }
         if (i22 << 16 >> 16 == 2) {
          i18 = i21;
          break L18;
         } else {
          i17 = i22;
          i16 = i21;
         }
        }
       } else {
        i16 = i12;
        i17 = i15;
        while (1) {
         if ((HEAP32[i17 + 12 >> 2] & 2 | 0) == 0) {
          i19 = i17;
          i20 = i16;
          break L20;
         }
         i22 = HEAP32[i17 + 40 >> 2] | 0;
         if ((i22 | 0) == 0) {
          i19 = i17;
          i20 = i16;
          break L20;
         }
         i24 = i22 + 8 | 0;
         HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
         do {
          if ((i17 | 0) != 0) {
           i24 = i17 + 8 | 0;
           i23 = i24 | 0;
           i25 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
           HEAP32[i23 >> 2] = i25;
           if ((i25 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
          }
         } while (0);
         i21 = __ZNK7WebCore16NodeIteratorBase10acceptNodeEPN3JSC9ExecStateEPNS_4NodeE(i4, 0, i22) | 0;
         if (i21 << 16 >> 16 == 2) {
          i18 = i22;
          break L18;
         } else {
          i16 = i21;
          i17 = i22;
         }
        }
       }
      } while (0);
      if (i20 << 16 >> 16 == 1) {
       i11 = 31;
       break L4;
      } else {
       i18 = i19;
      }
     }
    } while (0);
    i12 = HEAP32[i18 + 24 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    } else {
     i5 = i18;
     i15 = i12;
    }
   }
   i13 = i18;
   i14 = HEAP32[i1 >> 2] | 0;
  }
  if ((i13 | 0) == (i14 | 0)) {
   i10 = i14;
   i11 = 51;
   break;
  }
  i15 = HEAP32[i13 + 16 >> 2] | 0;
  if ((i15 | 0) == 0) {
   i10 = i13;
   i11 = 51;
   break;
  }
  i26 = i15 | 0;
  i5 = i15 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  do {
   if ((i13 | 0) != 0) {
    i5 = i13 + 8 | 0;
    i15 = i5 | 0;
    i12 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    HEAP32[i15 >> 2] = i12;
    if ((i12 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
   }
  } while (0);
  i5 = __ZNK7WebCore16NodeIteratorBase10acceptNodeEPN3JSC9ExecStateEPNS_4NodeE(i4, i2, i26) | 0;
  if (!i6) {
   i12 = (HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i12 >> 2] & 0 | 0) == 0 & (HEAP32[i12 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i10 = i26;
    i11 = 51;
    break;
   }
  }
  if (i5 << 16 >> 16 == 1) {
   i11 = 46;
   break;
  } else {
   i9 = i26;
  }
 }
 if ((i11 | 0) == 46) {
  i9 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i26;
  do {
   if ((i9 | 0) != 0) {
    i26 = i9 + 8 | 0;
    i7 = i26 | 0;
    i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    HEAP32[i7 >> 2] = i6;
    if ((i6 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
   }
  } while (0);
  i27 = HEAP32[i3 >> 2] | 0;
  return i27 | 0;
 } else if ((i11 | 0) == 51) {
  if ((i10 | 0) == 0) {
   i27 = 0;
   return i27 | 0;
  }
  i9 = i10 + 8 | 0;
  i10 = i9 | 0;
  i26 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  HEAP32[i10 >> 2] = i26;
  if ((i26 | 0) >= 1) {
   i27 = 0;
   return i27 | 0;
  }
  if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
   i27 = 0;
   return i27 | 0;
  }
  __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  i27 = 0;
  return i27 | 0;
 } else if ((i11 | 0) == 31) {
  i11 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i19;
  do {
   if ((i11 | 0) != 0) {
    i19 = i11 + 8 | 0;
    i9 = i19 | 0;
    i26 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    HEAP32[i9 >> 2] = i26;
    if ((i26 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
   }
  } while (0);
  i27 = HEAP32[i3 >> 2] | 0;
  return i27 | 0;
 }
 return 0;
}
function __ZN7WebCore10TreeWalker15previousSiblingEPN3JSC9ExecStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = i1 + 24 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = i4 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = i1 + 8 | 0;
 i1 = i5 | 0;
 L4 : do {
  if ((i4 | 0) == (HEAP32[i1 >> 2] | 0)) {
   i6 = 0;
   i7 = i4;
   i8 = 44;
  } else {
   i9 = (i2 | 0) == 0;
   i10 = i2 + 16 | 0;
   i11 = i4;
   L6 : while (1) {
    i12 = HEAP32[i11 + 24 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i13 = i11;
    } else {
     i14 = i12 + 8 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
     i15 = i11;
     i16 = i12;
     while (1) {
      i12 = __ZNK7WebCore16NodeIteratorBase10acceptNodeEPN3JSC9ExecStateEPNS_4NodeE(i5, i2, i16) | 0;
      if (!i9) {
       i14 = (HEAP32[(HEAP32[i10 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i14 >> 2] & 0 | 0) == 0 & (HEAP32[i14 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i8 = 29;
        break L6;
       }
      }
      i14 = i12 << 16 >> 16;
      do {
       if ((i14 | 0) == 1) {
        i8 = 10;
        break L6;
       } else if ((i14 | 0) == 3) {
        if ((HEAP32[i16 + 12 >> 2] & 2 | 0) == 0) {
         i8 = 24;
         break;
        }
        i12 = HEAP32[i16 + 40 >> 2] | 0;
        if ((i12 | 0) == 0) {
         i8 = 24;
         break;
        }
        i17 = i12 + 8 | 0;
        HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
        i17 = i16 + 8 | 0;
        i18 = i17 - 8 | 0;
        i19 = i17 | 0;
        i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
        HEAP32[i19 >> 2] = i20;
        do {
         if ((i20 | 0) < 1) {
          if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i18);
         }
        } while (0);
        i18 = i12 + 8 | 0;
        HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
        if ((i15 | 0) == 0) {
         i21 = i12;
         i22 = i12;
         break;
        }
        i18 = i15 + 8 | 0;
        i17 = i18 | 0;
        i20 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
        HEAP32[i17 >> 2] = i20;
        if ((i20 | 0) >= 1) {
         i21 = i12;
         i22 = i12;
         break;
        }
        if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
         i21 = i12;
         i22 = i12;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
        i21 = i12;
        i22 = i12;
       } else {
        i8 = 24;
       }
      } while (0);
      do {
       if ((i8 | 0) == 24) {
        i8 = 0;
        i14 = HEAP32[i16 + 24 >> 2] | 0;
        if ((i14 | 0) != 0) {
         i18 = i14 + 8 | 0;
         HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
        }
        i18 = i16 + 8 | 0;
        i20 = i18 | 0;
        i17 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
        HEAP32[i20 >> 2] = i17;
        if ((i17 | 0) >= 1) {
         i21 = i14;
         i22 = i15;
         break;
        }
        if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
         i21 = i14;
         i22 = i15;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
        i21 = i14;
        i22 = i15;
       }
      } while (0);
      if ((i21 | 0) == 0) {
       i13 = i22;
       break;
      } else {
       i15 = i22;
       i16 = i21;
      }
     }
    }
    i14 = HEAP32[i13 + 16 >> 2] | 0;
    i18 = i14 | 0;
    i17 = (i14 | 0) == 0;
    if (!i17) {
     i20 = i14 + 8 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
    }
    i20 = i13 + 8 | 0;
    i14 = i20 - 8 | 0;
    i19 = i20 | 0;
    i23 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
    HEAP32[i19 >> 2] = i23;
    do {
     if ((i23 | 0) < 1) {
      if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i14);
     }
    } while (0);
    if (i17) {
     i24 = 0;
     i8 = 49;
     break;
    }
    if ((i18 | 0) == (HEAP32[i1 >> 2] | 0)) {
     i25 = i18;
     i26 = 0;
     break L4;
    }
    i14 = __ZNK7WebCore16NodeIteratorBase10acceptNodeEPN3JSC9ExecStateEPNS_4NodeE(i5, i2, i18) | 0;
    if (i9) {
     if (i14 << 16 >> 16 == 1) {
      i6 = 0;
      i7 = i18;
      i8 = 44;
      break L4;
     } else {
      i11 = i18;
      continue;
     }
    } else {
     i20 = (HEAP32[(HEAP32[i10 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if ((HEAP32[i20 >> 2] & 0 | 0) != 0 | (HEAP32[i20 + 4 >> 2] & -1 | 0) != (-6 | 0) | i14 << 16 >> 16 == 1) {
      i6 = 0;
      i7 = i18;
      i8 = 44;
      break L4;
     } else {
      i11 = i18;
      continue;
     }
    }
   }
   if ((i8 | 0) == 10) {
    i11 = HEAP32[i3 >> 2] | 0;
    HEAP32[i3 >> 2] = i16;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 + 8 | 0;
      i9 = i10 | 0;
      i14 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      HEAP32[i9 >> 2] = i14;
      if ((i14 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
     }
    } while (0);
    i6 = HEAP32[i3 >> 2] | 0;
    i7 = i15;
    i8 = 44;
    break;
   } else if ((i8 | 0) == 29) {
    if ((i16 | 0) == 0) {
     i6 = 0;
     i7 = i15;
     i8 = 44;
     break;
    }
    i11 = i16 + 8 | 0;
    i10 = i11 | 0;
    i14 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
    HEAP32[i10 >> 2] = i14;
    if ((i14 | 0) >= 1) {
     i6 = 0;
     i7 = i15;
     i8 = 44;
     break;
    }
    if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
     i6 = 0;
     i7 = i15;
     i8 = 44;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
    i6 = 0;
    i7 = i15;
    i8 = 44;
    break;
   } else if ((i8 | 0) == 49) {
    return i24 | 0;
   }
  }
 } while (0);
 do {
  if ((i8 | 0) == 44) {
   if ((i7 | 0) == 0) {
    i24 = i6;
   } else {
    i25 = i7;
    i26 = i6;
    break;
   }
   return i24 | 0;
  }
 } while (0);
 i6 = i25 + 8 | 0;
 i25 = i6 | 0;
 i7 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
 HEAP32[i25 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  i24 = i26;
  return i24 | 0;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  i24 = i26;
  return i24 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 i24 = i26;
 return i24 | 0;
}
function __ZN7WebCore10TreeWalker11nextSiblingEPN3JSC9ExecStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = i1 + 24 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = i4 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = i1 + 8 | 0;
 i1 = i5 | 0;
 L4 : do {
  if ((i4 | 0) == (HEAP32[i1 >> 2] | 0)) {
   i6 = 0;
   i7 = i4;
   i8 = 44;
  } else {
   i9 = (i2 | 0) == 0;
   i10 = i2 + 16 | 0;
   i11 = i4;
   L6 : while (1) {
    i12 = HEAP32[i11 + 28 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i13 = i11;
    } else {
     i14 = i12 + 8 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
     i15 = i11;
     i16 = i12;
     while (1) {
      i12 = __ZNK7WebCore16NodeIteratorBase10acceptNodeEPN3JSC9ExecStateEPNS_4NodeE(i5, i2, i16) | 0;
      if (!i9) {
       i14 = (HEAP32[(HEAP32[i10 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i14 >> 2] & 0 | 0) == 0 & (HEAP32[i14 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i8 = 29;
        break L6;
       }
      }
      i14 = i12 << 16 >> 16;
      do {
       if ((i14 | 0) == 1) {
        i8 = 10;
        break L6;
       } else if ((i14 | 0) == 3) {
        if ((HEAP32[i16 + 12 >> 2] & 2 | 0) == 0) {
         i8 = 24;
         break;
        }
        i12 = HEAP32[i16 + 36 >> 2] | 0;
        if ((i12 | 0) == 0) {
         i8 = 24;
         break;
        }
        i17 = i12 + 8 | 0;
        HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
        i17 = i16 + 8 | 0;
        i18 = i17 - 8 | 0;
        i19 = i17 | 0;
        i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
        HEAP32[i19 >> 2] = i20;
        do {
         if ((i20 | 0) < 1) {
          if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i18);
         }
        } while (0);
        i18 = i12 + 8 | 0;
        HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
        if ((i15 | 0) == 0) {
         i21 = i12;
         i22 = i12;
         break;
        }
        i18 = i15 + 8 | 0;
        i17 = i18 | 0;
        i20 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
        HEAP32[i17 >> 2] = i20;
        if ((i20 | 0) >= 1) {
         i21 = i12;
         i22 = i12;
         break;
        }
        if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
         i21 = i12;
         i22 = i12;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
        i21 = i12;
        i22 = i12;
       } else {
        i8 = 24;
       }
      } while (0);
      do {
       if ((i8 | 0) == 24) {
        i8 = 0;
        i14 = HEAP32[i16 + 28 >> 2] | 0;
        if ((i14 | 0) != 0) {
         i18 = i14 + 8 | 0;
         HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
        }
        i18 = i16 + 8 | 0;
        i20 = i18 | 0;
        i17 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
        HEAP32[i20 >> 2] = i17;
        if ((i17 | 0) >= 1) {
         i21 = i14;
         i22 = i15;
         break;
        }
        if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
         i21 = i14;
         i22 = i15;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
        i21 = i14;
        i22 = i15;
       }
      } while (0);
      if ((i21 | 0) == 0) {
       i13 = i22;
       break;
      } else {
       i15 = i22;
       i16 = i21;
      }
     }
    }
    i14 = HEAP32[i13 + 16 >> 2] | 0;
    i18 = i14 | 0;
    i17 = (i14 | 0) == 0;
    if (!i17) {
     i20 = i14 + 8 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
    }
    i20 = i13 + 8 | 0;
    i14 = i20 - 8 | 0;
    i19 = i20 | 0;
    i23 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
    HEAP32[i19 >> 2] = i23;
    do {
     if ((i23 | 0) < 1) {
      if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i14);
     }
    } while (0);
    if (i17) {
     i24 = 0;
     i8 = 49;
     break;
    }
    if ((i18 | 0) == (HEAP32[i1 >> 2] | 0)) {
     i25 = i18;
     i26 = 0;
     break L4;
    }
    i14 = __ZNK7WebCore16NodeIteratorBase10acceptNodeEPN3JSC9ExecStateEPNS_4NodeE(i5, i2, i18) | 0;
    if (i9) {
     if (i14 << 16 >> 16 == 1) {
      i6 = 0;
      i7 = i18;
      i8 = 44;
      break L4;
     } else {
      i11 = i18;
      continue;
     }
    } else {
     i20 = (HEAP32[(HEAP32[i10 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if ((HEAP32[i20 >> 2] & 0 | 0) != 0 | (HEAP32[i20 + 4 >> 2] & -1 | 0) != (-6 | 0) | i14 << 16 >> 16 == 1) {
      i6 = 0;
      i7 = i18;
      i8 = 44;
      break L4;
     } else {
      i11 = i18;
      continue;
     }
    }
   }
   if ((i8 | 0) == 10) {
    i11 = HEAP32[i3 >> 2] | 0;
    HEAP32[i3 >> 2] = i16;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 + 8 | 0;
      i9 = i10 | 0;
      i14 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      HEAP32[i9 >> 2] = i14;
      if ((i14 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
     }
    } while (0);
    i6 = HEAP32[i3 >> 2] | 0;
    i7 = i15;
    i8 = 44;
    break;
   } else if ((i8 | 0) == 29) {
    if ((i16 | 0) == 0) {
     i6 = 0;
     i7 = i15;
     i8 = 44;
     break;
    }
    i11 = i16 + 8 | 0;
    i10 = i11 | 0;
    i14 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
    HEAP32[i10 >> 2] = i14;
    if ((i14 | 0) >= 1) {
     i6 = 0;
     i7 = i15;
     i8 = 44;
     break;
    }
    if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
     i6 = 0;
     i7 = i15;
     i8 = 44;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
    i6 = 0;
    i7 = i15;
    i8 = 44;
    break;
   } else if ((i8 | 0) == 49) {
    return i24 | 0;
   }
  }
 } while (0);
 do {
  if ((i8 | 0) == 44) {
   if ((i7 | 0) == 0) {
    i24 = i6;
   } else {
    i25 = i7;
    i26 = i6;
    break;
   }
   return i24 | 0;
  }
 } while (0);
 i6 = i25 + 8 | 0;
 i25 = i6 | 0;
 i7 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
 HEAP32[i25 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  i24 = i26;
  return i24 | 0;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  i24 = i26;
  return i24 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 i24 = i26;
 return i24 | 0;
}
function __ZN7WebCore10TreeWalker8nextNodeEPN3JSC9ExecStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = i1 + 24 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
 } else {
  i6 = i4 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  i5 = i4;
 }
 i4 = i1 + 8 | 0;
 i1 = (i2 | 0) == 0;
 i6 = i2 + 16 | 0;
 i7 = i4 | 0;
 i8 = i5;
 L4 : while (1) {
  do {
   if ((HEAP32[i8 + 12 >> 2] & 2 | 0) == 0) {
    i9 = i8;
   } else {
    i10 = HEAP32[i8 + 36 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i9 = i8;
     break;
    }
    i5 = i10 + 8 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
    do {
     if ((i8 | 0) != 0) {
      i5 = i8 + 8 | 0;
      i11 = i5 | 0;
      i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
      HEAP32[i11 >> 2] = i12;
      if ((i12 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
     }
    } while (0);
    i5 = __ZNK7WebCore16NodeIteratorBase10acceptNodeEPN3JSC9ExecStateEPNS_4NodeE(i4, i2, i10) | 0;
    if (!i1) {
     i12 = (HEAP32[(HEAP32[i6 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if (!((HEAP32[i12 >> 2] & 0 | 0) == 0 & (HEAP32[i12 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
      i13 = i10;
      i14 = 33;
      break L4;
     }
    }
    if ((i5 << 16 >> 16 | 0) == 1) {
     i14 = 13;
     break L4;
    } else if ((i5 << 16 >> 16 | 0) == 2) {
     i9 = i10;
    } else {
     i8 = i10;
     continue L4;
    }
   }
  } while (0);
  while (1) {
   i5 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) == (i5 | 0)) {
    i13 = i9;
    i14 = 33;
    break L4;
   }
   i12 = HEAP32[i9 + 28 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i11 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i9, i5) | 0;
    if ((i11 | 0) == 0) {
     i13 = i9;
     i14 = 33;
     break L4;
    } else {
     i15 = i11;
    }
   } else {
    i15 = i12;
   }
   i12 = i15 + 8 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   do {
    if ((i9 | 0) != 0) {
     i12 = i9 + 8 | 0;
     i11 = i12 | 0;
     i5 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     HEAP32[i11 >> 2] = i5;
     if ((i5 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    }
   } while (0);
   i12 = __ZNK7WebCore16NodeIteratorBase10acceptNodeEPN3JSC9ExecStateEPNS_4NodeE(i4, i2, i15) | 0;
   if (!i1) {
    i5 = (HEAP32[(HEAP32[i6 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i5 >> 2] & 0 | 0) == 0 & (HEAP32[i5 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i13 = i15;
     i14 = 33;
     break L4;
    }
   }
   if ((i12 << 16 >> 16 | 0) == 3) {
    i8 = i15;
    continue L4;
   } else if ((i12 << 16 >> 16 | 0) == 1) {
    i14 = 28;
    break L4;
   } else {
    i9 = i15;
   }
  }
 }
 if ((i14 | 0) == 13) {
  i9 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i10;
  do {
   if ((i9 | 0) != 0) {
    i10 = i9 + 8 | 0;
    i8 = i10 | 0;
    i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    HEAP32[i8 >> 2] = i6;
    if ((i6 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
   }
  } while (0);
  i16 = HEAP32[i3 >> 2] | 0;
  return i16 | 0;
 } else if ((i14 | 0) == 33) {
  if ((i13 | 0) == 0) {
   i16 = 0;
   return i16 | 0;
  }
  i9 = i13 + 8 | 0;
  i13 = i9 | 0;
  i10 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
  HEAP32[i13 >> 2] = i10;
  if ((i10 | 0) >= 1) {
   i16 = 0;
   return i16 | 0;
  }
  if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
   i16 = 0;
   return i16 | 0;
  }
  __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  i16 = 0;
  return i16 | 0;
 } else if ((i14 | 0) == 28) {
  i14 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i15;
  do {
   if ((i14 | 0) != 0) {
    i15 = i14 + 8 | 0;
    i9 = i15 | 0;
    i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    HEAP32[i9 >> 2] = i10;
    if ((i10 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
   }
  } while (0);
  i16 = HEAP32[i3 >> 2] | 0;
  return i16 | 0;
 }
 return 0;
}
function __ZN7WebCore10TreeWalker10firstChildEPN3JSC9ExecStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = i1 + 24 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i4 + 12 >> 2] & 2 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i6 = HEAP32[i4 + 36 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i4 = i6 + 8 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = i1 + 8 | 0;
 i1 = (i2 | 0) == 0;
 i7 = i4 | 0;
 i8 = i2 + 16 | 0;
 i9 = i6;
 L7 : while (1) {
  i6 = __ZNK7WebCore16NodeIteratorBase10acceptNodeEPN3JSC9ExecStateEPNS_4NodeE(i4, i2, i9) | 0;
  if (!i1) {
   i10 = (HEAP32[(HEAP32[i8 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i10 >> 2] & 0 | 0) == 0 & (HEAP32[i10 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i11 = i9;
    i12 = 30;
    break;
   }
  }
  i10 = i6 << 16 >> 16;
  do {
   if ((i10 | 0) == 3) {
    if ((HEAP32[i9 + 12 >> 2] & 2 | 0) == 0) {
     i13 = i9;
     break;
    }
    i6 = HEAP32[i9 + 36 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i13 = i9;
     break;
    }
    i14 = i6 + 8 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
    i14 = i9 + 8 | 0;
    i15 = i14 - 8 | 0;
    i16 = i14 | 0;
    i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
    HEAP32[i16 >> 2] = i17;
    do {
     if ((i17 | 0) < 1) {
      if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i15);
     }
    } while (0);
    if ((i6 | 0) == 0) {
     i5 = 0;
     i12 = 36;
     break L7;
    } else {
     i9 = i6;
     continue L7;
    }
   } else if ((i10 | 0) == 1) {
    i12 = 7;
    break L7;
   } else {
    i13 = i9;
   }
  } while (0);
  while (1) {
   i18 = HEAP32[i13 + 28 >> 2] | 0;
   if ((i18 | 0) != 0) {
    break;
   }
   i10 = HEAP32[i13 + 16 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i19 = i13;
    break L7;
   }
   i15 = i10 | 0;
   if ((i15 | 0) == (HEAP32[i7 >> 2] | 0)) {
    i11 = i13;
    i12 = 30;
    break L7;
   }
   if ((i15 | 0) == (HEAP32[i3 >> 2] | 0)) {
    i11 = i13;
    i12 = 30;
    break L7;
   }
   i14 = i10 + 8 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   if ((i13 | 0) == 0) {
    i13 = i15;
    continue;
   }
   i14 = i13 + 8 | 0;
   i10 = i14 | 0;
   i17 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    i13 = i15;
    continue;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    i13 = i15;
    continue;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
   i13 = i15;
  }
  i15 = i18 + 8 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  if ((i13 | 0) == 0) {
   i9 = i18;
   continue;
  }
  i15 = i13 + 8 | 0;
  i14 = i15 | 0;
  i17 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
  HEAP32[i14 >> 2] = i17;
  if ((i17 | 0) >= 1) {
   i9 = i18;
   continue;
  }
  if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
   i9 = i18;
   continue;
  }
  __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  i9 = i18;
 }
 do {
  if ((i12 | 0) == 30) {
   if ((i11 | 0) == 0) {
    i5 = 0;
   } else {
    i19 = i11;
    break;
   }
   return i5 | 0;
  } else if ((i12 | 0) == 7) {
   i18 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i9;
   do {
    if ((i18 | 0) != 0) {
     i13 = i18 + 8 | 0;
     i7 = i13 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     HEAP32[i7 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
    }
   } while (0);
   i5 = HEAP32[i3 >> 2] | 0;
   return i5 | 0;
  } else if ((i12 | 0) == 36) {
   return i5 | 0;
  }
 } while (0);
 i12 = i19 + 8 | 0;
 i19 = i12 | 0;
 i3 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
 HEAP32[i19 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
 i5 = 0;
 return i5 | 0;
}
function __ZN7WebCore10TreeWalker9lastChildEPN3JSC9ExecStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = i1 + 24 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i4 + 12 >> 2] & 2 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i6 = HEAP32[i4 + 40 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i4 = i6 + 8 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = i1 + 8 | 0;
 i1 = (i2 | 0) == 0;
 i7 = i4 | 0;
 i8 = i2 + 16 | 0;
 i9 = i6;
 L7 : while (1) {
  i6 = __ZNK7WebCore16NodeIteratorBase10acceptNodeEPN3JSC9ExecStateEPNS_4NodeE(i4, i2, i9) | 0;
  if (!i1) {
   i10 = (HEAP32[(HEAP32[i8 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i10 >> 2] & 0 | 0) == 0 & (HEAP32[i10 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i11 = i9;
    i12 = 30;
    break;
   }
  }
  i10 = i6 << 16 >> 16;
  do {
   if ((i10 | 0) == 1) {
    i12 = 7;
    break L7;
   } else if ((i10 | 0) == 3) {
    if ((HEAP32[i9 + 12 >> 2] & 2 | 0) == 0) {
     i13 = i9;
     break;
    }
    i6 = HEAP32[i9 + 40 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i13 = i9;
     break;
    }
    i14 = i6 + 8 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
    i14 = i9 + 8 | 0;
    i15 = i14 - 8 | 0;
    i16 = i14 | 0;
    i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
    HEAP32[i16 >> 2] = i17;
    do {
     if ((i17 | 0) < 1) {
      if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i15);
     }
    } while (0);
    if ((i6 | 0) == 0) {
     i5 = 0;
     i12 = 39;
     break L7;
    } else {
     i9 = i6;
     continue L7;
    }
   } else {
    i13 = i9;
   }
  } while (0);
  while (1) {
   i18 = HEAP32[i13 + 24 >> 2] | 0;
   if ((i18 | 0) != 0) {
    break;
   }
   i10 = HEAP32[i13 + 16 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i19 = i13;
    break L7;
   }
   i15 = i10 | 0;
   if ((i15 | 0) == (HEAP32[i7 >> 2] | 0)) {
    i11 = i13;
    i12 = 30;
    break L7;
   }
   if ((i15 | 0) == (HEAP32[i3 >> 2] | 0)) {
    i11 = i13;
    i12 = 30;
    break L7;
   }
   i14 = i10 + 8 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   if ((i13 | 0) == 0) {
    i13 = i15;
    continue;
   }
   i14 = i13 + 8 | 0;
   i10 = i14 | 0;
   i17 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    i13 = i15;
    continue;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    i13 = i15;
    continue;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
   i13 = i15;
  }
  i15 = i18 + 8 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  if ((i13 | 0) == 0) {
   i9 = i18;
   continue;
  }
  i15 = i13 + 8 | 0;
  i14 = i15 | 0;
  i17 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
  HEAP32[i14 >> 2] = i17;
  if ((i17 | 0) >= 1) {
   i9 = i18;
   continue;
  }
  if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
   i9 = i18;
   continue;
  }
  __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  i9 = i18;
 }
 do {
  if ((i12 | 0) == 30) {
   if ((i11 | 0) == 0) {
    i5 = 0;
   } else {
    i19 = i11;
    break;
   }
   return i5 | 0;
  } else if ((i12 | 0) == 7) {
   i18 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i9;
   do {
    if ((i18 | 0) != 0) {
     i13 = i18 + 8 | 0;
     i7 = i13 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     HEAP32[i7 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
    }
   } while (0);
   i5 = HEAP32[i3 >> 2] | 0;
   return i5 | 0;
  } else if ((i12 | 0) == 39) {
   return i5 | 0;
  }
 } while (0);
 i12 = i19 + 8 | 0;
 i19 = i12 | 0;
 i3 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
 HEAP32[i19 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
 i5 = 0;
 return i5 | 0;
}
function __ZN7WebCore10TreeWalker10parentNodeEPN3JSC9ExecStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = i1 + 24 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
 } else {
  i6 = i4 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  i5 = i4;
 }
 i4 = i1 + 8 | 0;
 i1 = i4 | 0;
 i6 = i2 + 16 | 0;
 L4 : do {
  if ((i2 | 0) == 0) {
   i7 = i5;
   while (1) {
    if ((i7 | 0) == (HEAP32[i1 >> 2] | 0)) {
     i8 = i7;
     break L4;
    }
    i9 = HEAP32[i7 + 16 >> 2] | 0;
    i10 = i9 | 0;
    i11 = (i9 | 0) == 0;
    if (!i11) {
     i12 = i9 + 8 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
    }
    do {
     if ((i7 | 0) != 0) {
      i12 = i7 + 8 | 0;
      i9 = i12 | 0;
      i13 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      HEAP32[i9 >> 2] = i13;
      if ((i13 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
     }
    } while (0);
    if (i11) {
     i14 = 0;
     break;
    }
    if ((__ZNK7WebCore16NodeIteratorBase10acceptNodeEPN3JSC9ExecStateEPNS_4NodeE(i4, 0, i10) | 0) << 16 >> 16 == 1) {
     i15 = i10;
     i16 = 23;
     break L4;
    } else {
     i7 = i10;
    }
   }
   return i14 | 0;
  } else {
   i7 = i5;
   while (1) {
    if ((i7 | 0) == (HEAP32[i1 >> 2] | 0)) {
     i8 = i7;
     break L4;
    }
    i12 = HEAP32[i7 + 16 >> 2] | 0;
    i13 = i12 | 0;
    i9 = (i12 | 0) == 0;
    if (!i9) {
     i17 = i12 + 8 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    }
    do {
     if ((i7 | 0) != 0) {
      i17 = i7 + 8 | 0;
      i12 = i17 | 0;
      i18 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
      HEAP32[i12 >> 2] = i18;
      if ((i18 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
     }
    } while (0);
    if (i9) {
     i14 = 0;
     break;
    }
    i10 = __ZNK7WebCore16NodeIteratorBase10acceptNodeEPN3JSC9ExecStateEPNS_4NodeE(i4, i2, i13) | 0;
    i11 = (HEAP32[(HEAP32[i6 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i11 >> 2] & 0 | 0) == 0 & (HEAP32[i11 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i8 = i13;
     break L4;
    }
    if (i10 << 16 >> 16 == 1) {
     i15 = i13;
     i16 = 23;
     break L4;
    } else {
     i7 = i13;
    }
   }
   return i14 | 0;
  }
 } while (0);
 if ((i16 | 0) == 23) {
  i16 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i15;
  do {
   if ((i16 | 0) != 0) {
    i15 = i16 + 8 | 0;
    i6 = i15 | 0;
    i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    HEAP32[i6 >> 2] = i2;
    if ((i2 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
   }
  } while (0);
  i14 = HEAP32[i3 >> 2] | 0;
  return i14 | 0;
 }
 if ((i8 | 0) == 0) {
  i14 = 0;
  return i14 | 0;
 }
 i3 = i8 + 8 | 0;
 i8 = i3 | 0;
 i16 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i16;
 if ((i16 | 0) >= 1) {
  i14 = 0;
  return i14 | 0;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i14 = 0;
  return i14 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i14 = 0;
 return i14 | 0;
}
function __ZN7WebCore10TreeWalkerC2EN3WTF10PassRefPtrINS_4NodeEEEjNS2_INS_10NodeFilterEEEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 i9 = i1 + 8 | 0;
 i10 = i7 | 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 i2 = i8 | 0;
 i11 = i4 | 0;
 i4 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i2 >> 2] = i4;
 __ZN7WebCore16NodeIteratorBaseC2EN3WTF10PassRefPtrINS_4NodeEEEjNS2_INS_10NodeFilterEEEb(i9, i7, i3, i8, i5);
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i2 >> 2] = i8;
    break;
   }
   i8 = HEAP32[i5 + 4 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i2 = i8 + 4 | 0;
     i3 = i2 | 0;
     i7 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) != 0) {
      HEAP32[i3 >> 2] = i7;
      break;
     }
     i7 = i2 - 4 | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i8 = i10 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i9 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = i5;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i1 = i5 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore10TreeWalkerC1EN3WTF10PassRefPtrINS_4NodeEEEjNS2_INS_10NodeFilterEEEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 i9 = i1 + 8 | 0;
 i10 = i7 | 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 i2 = i8 | 0;
 i11 = i4 | 0;
 i4 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i2 >> 2] = i4;
 __ZN7WebCore16NodeIteratorBaseC2EN3WTF10PassRefPtrINS_4NodeEEEjNS2_INS_10NodeFilterEEEb(i9, i7, i3, i8, i5);
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i2 >> 2] = i8;
    break;
   }
   i8 = HEAP32[i5 + 4 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i2 = i8 + 4 | 0;
     i3 = i2 | 0;
     i7 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) != 0) {
      HEAP32[i3 >> 2] = i7;
      break;
     }
     i7 = i2 - 4 | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i8 = i10 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i9 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = i5;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i1 = i5 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore10TreeWalker14setCurrentNodeEN3WTF10PassRefPtrINS_4NodeEEERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i3 >> 2] = 9;
  return;
 }
 HEAP32[i4 >> 2] = 0;
 i4 = i1 + 24 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 8 | 0;
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
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
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
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
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
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
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b3() {
 abort(3);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore10TreeWalkerC2EN3WTF10PassRefPtrINS_4NodeEEEjNS2_INS_10NodeFilterEEEb,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore10TreeWalker14setCurrentNodeEN3WTF10PassRefPtrINS_4NodeEEERi","__ZN7WebCore10TreeWalker8nextNodeEPN3JSC9ExecStateE","__ZN7WebCore10TreeWalker15previousSiblingEPN3JSC9ExecStateE","__ZN7WebCore10TreeWalkerC2EN3WTF10PassRefPtrINS_4NodeEEEjNS2_INS_10NodeFilterEEEb","_memset","__ZN7WebCore10TreeWalker10firstChildEPN3JSC9ExecStateE","_memcpy","__ZN7WebCore10TreeWalker12previousNodeEPN3JSC9ExecStateE","__ZN7WebCore10TreeWalker10parentNodeEPN3JSC9ExecStateE","__ZN7WebCore10TreeWalker9lastChildEPN3JSC9ExecStateE","__ZN7WebCore10TreeWalker11nextSiblingEPN3JSC9ExecStateE"]
