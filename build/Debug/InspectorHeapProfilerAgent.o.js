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
H_BASE = parentModule["_malloc"](608 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 608;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore26InspectorHeapProfilerAgentC1EPNS_19InstrumentingAgentsEPNS_25PageInjectedScriptManagerE;
var __ZN7WebCore26InspectorHeapProfilerAgentD1Ev;
/* memory initializer */ allocate([116,105,116,108,101,0,0,0,79,98,106,101,99,116,32,119,105,116,104,32,103,105,118,101,110,32,105,100,32,110,111,116,32,102,111,117,110,100,0,0,73,110,115,112,101,99,116,101,100,32,99,111,110,116,101,120,116,32,104,97,115,32,103,111,110,101,0,0,0,0,0,0,70,97,105,108,101,100,32,116,111,32,119,114,97,112,32,111,98,106,101,99,116,0,0,0,79,98,106,101,99,116,32,105,115,32,110,111,116,32,97,118,97,105,108,97,98,108,101,46,32,73,110,115,112,101,99,116,101,100,32,99,111,110,116,101,120,116,32,105,115,32,103,111,110,101,0,0,0,0,0,0,79,98,106,101,99,116,32,105,115,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,73,110,118,97,108,105,100,32,104,101,97,112,32,115,110,97,112,115,104,111,116,32,111,98,106,101,99,116,32,105,100,0,109,97,120,74,83,79,98,106,101,99,116,73,100,0,0,0,111,114,103,46,119,101,98,107,105,116,46,112,114,111,102,105,108,101,115,46,117,115,101,114,45,105,110,105,116,105,97,116,101,100,0,0,0,0,0,0,117,105,100,0,0,0,0,0,80,114,111,102,105,108,101,32,119,97,115,110,39,116,32,102,111,117,110,100,0,0,0,0,72,101,97,112,80,114,111,102,105,108,101,114,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore18InspectorAgentBaseE=(H_BASE+568)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayINS0_12HeapProfiler13ProfileHeaderEEE=(H_BASE+360)|0;
  var __ZTVN7WebCore26InspectorHeapProfilerAgentE=(H_BASE+440)|0;
  var __ZTVN9Inspector18InspectorAgentBaseE=(H_BASE+320)|0;
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
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore26InspectorHeapProfilerAgent23getObjectByHeapObjectIdEPN3WTF6StringERKS2_PS4_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 32 | 0;
 i11 = i6 + 40 | 0;
 i12 = i6 + 64 | 0;
 i13 = i6 + 72 | 0;
 i14 = i6 + 80 | 0;
 i15 = i6 + 88 | 0;
 i16 = __ZNK3WTF6String6toUIntEPb(i3, i7) | 0;
 if ((HEAP8[i7] & 1) == 0) {
  __ZN3WTF6StringC1EPKc(i8, H_BASE + 184 | 0);
  i7 = i8 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  i3 = i2 | 0;
  i17 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i8;
  do {
   if ((i17 | 0) != 0) {
    i8 = i17 | 0;
    i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
    if ((i3 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i17);
     break;
    } else {
     HEAP32[i8 >> 2] = i3;
     break;
    }
   }
  } while (0);
  i17 = HEAP32[i7 >> 2] | 0;
  if ((i17 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  i7 = i17 | 0;
  i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
  if ((i3 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i17);
   STACKTOP = i6;
   return;
  } else {
   HEAP32[i7 >> 2] = i3;
   STACKTOP = i6;
   return;
  }
 }
 __ZN7WebCore14ScriptProfiler20objectByHeapObjectIdEj(i9, i16);
 i16 = i9 | 0;
 i3 = HEAP32[i9 + 4 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i18 = 12;
  } else {
   if ((HEAP32[i3 + 4 >> 2] | 0) == -6) {
    i18 = 12;
    break;
   }
   __ZN9Inspector21InjectedScriptManager17injectedScriptForEPN3JSC9ExecStateE(i11, HEAP32[i1 + 16 >> 2] | 0, HEAP32[i9 + 8 >> 2] | 0);
   i7 = HEAP32[i11 + 12 >> 2] | 0;
   do {
    if ((i7 | 0) == 0) {
     i18 = 22;
    } else {
     if ((HEAP32[i7 + 4 >> 2] | 0) == -6) {
      i18 = 22;
      break;
     }
     do {
      if ((i4 | 0) == 0) {
       __ZN3WTF6StringC1EPKc(i14, H_BASE + 608 | 0);
       i19 = 1;
       i20 = 0;
      } else {
       i17 = HEAP32[i4 >> 2] | 0;
       HEAP32[i14 >> 2] = i17;
       if ((i17 | 0) == 0) {
        i19 = 0;
        i20 = 1;
        break;
       }
       i8 = i17 | 0;
       HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
       i19 = 0;
       i20 = 1;
      }
     } while (0);
     __ZNK9Inspector14InjectedScript10wrapObjectERKN10Deprecated11ScriptValueERKN3WTF6StringEb(i13, i11, i16, i14, 0);
     i8 = i13 | 0;
     i17 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = 0;
     i21 = i5 | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i17;
     do {
      if ((i22 | 0) != 0) {
       i17 = i22 + 4 | 0;
       i23 = i17 | 0;
       i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
       if ((i24 | 0) != 0) {
        HEAP32[i23 >> 2] = i24;
        break;
       }
       i24 = i17 - 4 | 0;
       if ((i24 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 31](i24);
      }
     } while (0);
     i22 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i22 | 0) != 0) {
       i24 = i22 + 4 | 0;
       i17 = i24 | 0;
       i23 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
       if ((i23 | 0) != 0) {
        HEAP32[i17 >> 2] = i23;
        break;
       }
       i23 = i24 - 4 | 0;
       if ((i23 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 31](i23);
      }
     } while (0);
     do {
      if (i19) {
       i22 = HEAP32[i14 >> 2] | 0;
       if ((i22 | 0) == 0) {
        break;
       }
       i8 = i22 | 0;
       i23 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
       if ((i23 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i22);
        break;
       } else {
        HEAP32[i8 >> 2] = i23;
        break;
       }
      }
     } while (0);
     do {
      if (i20) {
       i23 = HEAP32[i14 >> 2] | 0;
       if ((i23 | 0) == 0) {
        break;
       }
       i8 = i23 | 0;
       i22 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
       if ((i22 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i23);
        break;
       } else {
        HEAP32[i8 >> 2] = i22;
        break;
       }
      }
     } while (0);
     if ((HEAP32[i21 >> 2] | 0) != 0) {
      break;
     }
     __ZN3WTF6StringC1EPKc(i15, H_BASE + 80 | 0);
     i22 = i15 | 0;
     i8 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = 0;
     i23 = i2 | 0;
     i24 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = i8;
     do {
      if ((i24 | 0) != 0) {
       i8 = i24 | 0;
       i23 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
       if ((i23 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i24);
        break;
       } else {
        HEAP32[i8 >> 2] = i23;
        break;
       }
      }
     } while (0);
     i24 = HEAP32[i22 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break;
     }
     i21 = i24 | 0;
     i23 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i21 >> 2] = i23;
      break;
     }
    }
   } while (0);
   do {
    if ((i18 | 0) == 22) {
     __ZN3WTF6StringC1EPKc(i12, H_BASE + 104 | 0);
     i7 = i12 | 0;
     i23 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = 0;
     i21 = i2 | 0;
     i24 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i23;
     do {
      if ((i24 | 0) != 0) {
       i23 = i24 | 0;
       i21 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
       if ((i21 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i24);
        break;
       } else {
        HEAP32[i23 >> 2] = i21;
        break;
       }
      }
     } while (0);
     i24 = HEAP32[i7 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break;
     }
     i22 = i24 | 0;
     i21 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i22 >> 2] = i21;
      break;
     }
    }
   } while (0);
   __ZN9Inspector14InjectedScriptD1Ev(i11);
  }
 } while (0);
 do {
  if ((i18 | 0) == 12) {
   __ZN3WTF6StringC1EPKc(i10, H_BASE + 160 | 0);
   i11 = i10 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i15 = i2 | 0;
   i14 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = i12;
   do {
    if ((i14 | 0) != 0) {
     i12 = i14 | 0;
     i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i12 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i14 = HEAP32[i11 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i15 = i14 | 0;
   i12 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i15 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN10Deprecated11ScriptValueD2Ev(i16);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore26InspectorHeapProfilerAgent20createSnapshotHeaderERKNS_18ScriptHeapSnapshotE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i2 = i3 | 0;
 i4 = i3 + 8 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 48 | 0;
 i10 = i3 + 56 | 0;
 i11 = i3 + 64 | 0;
 i12 = i3 + 72 | 0;
 i13 = i3 + 80 | 0;
 i14 = i3 + 88 | 0;
 i15 = i3 + 96 | 0;
 i16 = i3 + 104 | 0;
 __ZN9Inspector15InspectorObject6createEv(i15);
 i17 = HEAP32[i15 >> 2] | 0;
 i15 = i17 | 0;
 HEAP32[i14 >> 2] = H_BASE + 272;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i13, i14);
 __ZN9Inspector19InspectorBasicValue6createEd(i12, +0);
 i14 = i11 | 0;
 i18 = i12 | 0;
 i12 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i14 >> 2] = i12;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i13, i11);
 i11 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i14 = i11 + 4 | 0;
   i12 = i14 | 0;
   i19 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i12 >> 2] = i19;
    break;
   }
   i19 = i14 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 31](i19);
  }
 } while (0);
 i11 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i18 = i11 + 4 | 0;
   i19 = i18 | 0;
   i14 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i19 >> 2] = i14;
    break;
   }
   i14 = i18 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 31](i14);
  }
 } while (0);
 i11 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i13 = i11 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i16, H_BASE + 608 | 0);
 HEAP32[i10 >> 2] = H_BASE + 8;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i16);
 i10 = i7 | 0;
 i11 = i8 | 0;
 i8 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i10 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i9, i7);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 + 4 | 0;
   i8 = i10 | 0;
   i14 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i8 >> 2] = i14;
    break;
   }
   i14 = i10 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 31](i14);
  }
 } while (0);
 i7 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i11 = i7 + 4 | 0;
   i14 = i11 | 0;
   i10 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i14 >> 2] = i10;
    break;
   }
   i10 = i11 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
  }
 } while (0);
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i7 = i17;
 i10 = (i17 | 0) == 0;
 if (!i10) {
  i9 = i17 + 4 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i16 = i9 | 0;
   i11 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i16 >> 2] = i11;
    break;
   }
  }
 } while (0);
 do {
  if (!i10) {
   i9 = i17 + 4 | 0;
   i11 = i9 | 0;
   i16 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i11 >> 2] = i16;
    break;
   }
   i16 = i9 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i16);
  }
 } while (0);
 HEAP32[i6 >> 2] = H_BASE + 216;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i6);
 __ZN9Inspector19InspectorBasicValue6createEd(i4, +0);
 i6 = i2 | 0;
 i17 = i4 | 0;
 i4 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i6 >> 2] = i4;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i5, i2);
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 4 | 0;
   i15 = i6 | 0;
   i4 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i15 >> 2] = i4;
    break;
   }
   i4 = i6 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
  }
 } while (0);
 i2 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i17 = i2 + 4 | 0;
   i4 = i17 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i17 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i20 = i1 | 0;
  HEAP32[i20 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
 i5 = i2 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i20 = i1 | 0;
  HEAP32[i20 >> 2] = i7;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i6;
  i20 = i1 | 0;
  HEAP32[i20 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 8;
  i6 = 0;
 } else {
  i7 = i4 << 1;
  i5 = ((HEAP32[i1 + 12 >> 2] | 0) * 6 & -1 | 0) < (i7 | 0) ? i4 : i7;
  i6 = i4;
 }
 i4 = i1 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i5 = i7 + (i10 << 3) | 0;
  i12 = i5 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = HEAP32[i13 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 11;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 11) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 + 4 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 4 | 0;
     i14 = i13 | 0;
     i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i14 >> 2] = i16;
      break;
     }
     i16 = i13 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i16);
    }
   } while (0);
   i17 = i27 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i16 = i20 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i16 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i20;
   i20 = i7 + (i10 << 3) + 4 | 0;
   i13 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i19 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i27 : i11;
  }
  i13 = i10 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i13;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i28 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i28 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 + 4 | 0;
      i27 = i10 | 0;
      i2 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i2 | 0) != 0) {
       HEAP32[i27 >> 2] = i2;
       break;
      }
      i2 = i10 - 4 | 0;
      if ((i2 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i2 = i11 | 0;
    i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i2 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF13tryMakeStringIPKccNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_T1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = _strlen(i2 | 0) | 0;
 i9 = _llvm_uadd_with_overflow_i32(i8 | 0, 1) | 0;
 i10 = i9;
 i9 = tempRet0;
 i11 = i4 | 0;
 i4 = HEAP32[i11 >> 2] | 0;
 i12 = (i4 | 0) == 0;
 if (i12) {
  i13 = 0;
 } else {
  i13 = HEAP32[i4 + 4 >> 2] | 0;
 }
 i14 = _llvm_uadd_with_overflow_i32(i10 | 0, i13 | 0) | 0;
 i13 = i14;
 if (tempRet0 | i9) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 do {
  if (i12) {
   if ((i13 | 0) == 0) {
    i15 = 9;
   } else {
    i15 = 11;
   }
  } else {
   i9 = (i13 | 0) == 0;
   if ((HEAP32[i4 + 16 >> 2] & 32 | 0) != 0) {
    if (i9) {
     i15 = 9;
     break;
    } else {
     i15 = 11;
     break;
    }
   }
   do {
    if (i9) {
     i14 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i14 | 0) == 0) {
      i15 = 34;
      break;
     }
     i16 = i14 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
     i17 = i14;
     i18 = 0;
    } else {
     if (i13 >>> 0 > 2147483637 >>> 0) {
      i15 = 34;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, (i13 << 1) + 20 | 0);
     i14 = i6 | 0;
     i16 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     if ((i16 | 0) == 0) {
      i15 = 34;
      break;
     }
     i14 = i16 + 20 | 0;
     HEAP32[i16 >> 2] = 2;
     HEAP32[i16 + 4 >> 2] = i13;
     HEAP32[i16 + 8 >> 2] = i14;
     HEAP32[i16 + 12 >> 2] = 0;
     HEAP32[i16 + 16 >> 2] = 0;
     i17 = i16;
     i18 = i14;
    }
   } while (0);
   if ((i15 | 0) == 34) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i5;
    return;
   }
   if ((i8 | 0) != 0) {
    i9 = 0;
    while (1) {
     HEAP16[i18 + (i9 << 1) >> 1] = HEAPU8[i2 + i9 | 0] | 0;
     i9 = i9 + 1 | 0;
     if (i9 >>> 0 >= i8 >>> 0) {
      break;
     }
    }
   }
   HEAP16[i18 + (i8 << 1) >> 1] = i3 & 255;
   i9 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i14 = HEAP32[i9 + 4 >> 2] | 0;
     if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
      i16 = HEAP32[i9 + 8 >> 2] | 0;
      if ((i14 | 0) == 0) {
       break;
      } else {
       i19 = 0;
      }
      while (1) {
       HEAP16[i18 + (i19 + i10 << 1) >> 1] = HEAP16[i16 + (i19 << 1) >> 1] | 0;
       i19 = i19 + 1 | 0;
       if (i19 >>> 0 >= i14 >>> 0) {
        break;
       }
      }
     } else {
      i16 = HEAP32[i9 + 8 >> 2] | 0;
      if ((i14 | 0) == 0) {
       break;
      } else {
       i20 = 0;
      }
      while (1) {
       HEAP16[i18 + (i20 + i10 << 1) >> 1] = HEAPU8[i16 + i20 | 0] | 0;
       i20 = i20 + 1 | 0;
       if (i20 >>> 0 >= i14 >>> 0) {
        break;
       }
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i17;
   STACKTOP = i5;
   return;
  }
 } while (0);
 do {
  if ((i15 | 0) == 9) {
   i17 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i17 | 0) == 0) {
    i15 = 18;
    break;
   }
   i20 = i17 | 0;
   HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
   i21 = i17;
   i22 = 0;
  } else if ((i15 | 0) == 11) {
   if (i13 >>> 0 > 4294967275 >>> 0) {
    i15 = 18;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i7, i13 + 20 | 0);
   i17 = i7 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   if ((i20 | 0) == 0) {
    i15 = 18;
    break;
   }
   i17 = i20 + 20 | 0;
   HEAP32[i20 >> 2] = 2;
   HEAP32[i20 + 4 >> 2] = i13;
   HEAP32[i20 + 8 >> 2] = i17;
   HEAP32[i20 + 12 >> 2] = 0;
   HEAP32[i20 + 16 >> 2] = 32;
   i21 = i20;
   i22 = i17;
  }
 } while (0);
 if ((i15 | 0) == 18) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 _memcpy(i22 | 0, i2 | 0, i8) | 0;
 HEAP8[i22 + i8 | 0] = i3;
 i3 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i11 = HEAP32[i3 + 4 >> 2] | 0;
   i8 = HEAP32[i3 + 8 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   } else {
    i23 = 0;
   }
   while (1) {
    HEAP8[i22 + (i10 + i23) | 0] = HEAP8[i8 + i23 | 0] | 0;
    i23 = i23 + 1 | 0;
    if (i23 >>> 0 >= i11 >>> 0) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i21;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore18ScriptHeapSnapshotEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 << 3) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  if ((i13 | 0) == (-1 | 0) | (i13 | 0) == 0) {
   i14 = i11;
  } else {
   i15 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = i13 + ~(i13 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
    } else {
     i24 = (i17 >>> 23) + ~i17 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i18;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 6;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 6) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i15 = i30 + 4 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i13 = i16 + 4 | 0;
     i20 = i13 | 0;
     i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i20 >> 2] = i19;
      break;
     }
     i19 = i13 - 4 | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 31](i19);
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
   i16 = i7 + (i10 << 3) + 4 | 0;
   i19 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i15 >> 2] = i19;
   i14 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i19 = i10 + 1 | 0;
  if ((i19 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i19;
   i11 = i14;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i36 = 0;
 } else {
  i8 = i14;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i36 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i36 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 + 4 | 0;
    i1 = i11 | 0;
    i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i1 >> 2] = i10;
     break;
    }
    i10 = i11 - 4 | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
   }
  } while (0);
  i2 = i36 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i36 = i2;
  } else {
   i8 = i14;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore26InspectorHeapProfilerAgent15getHeapObjectIdEPN3WTF6StringERKS2_S3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 40 | 0;
 i10 = i5 + 48 | 0;
 __ZN9Inspector21InjectedScriptManager25injectedScriptForObjectIdERKN3WTF6StringE(i6, HEAP32[i1 + 16 >> 2] | 0, i3);
 i1 = HEAP32[i6 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == -6) {
    break;
   }
   __ZNK9Inspector14InjectedScript14findObjectByIdERKN3WTF6StringE(i8, i6, i3);
   i11 = HEAP32[i8 + 4 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i12 = 14;
    } else {
     if ((HEAP32[i11 + 4 >> 2] | 0) == -6) {
      i12 = 14;
      break;
     }
     if (__ZNK10Deprecated11ScriptValue11isUndefinedEv(i8) | 0) {
      i12 = 14;
      break;
     }
     __ZN3WTF6String6numberEj(i10, __ZN7WebCore14ScriptProfiler15getHeapObjectIdERKN10Deprecated11ScriptValueE(i8) | 0);
     i13 = i10 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     i15 = i4 | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = i14;
     do {
      if ((i16 | 0) != 0) {
       i14 = i16 | 0;
       i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
       if ((i15 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i16);
        break;
       } else {
        HEAP32[i14 >> 2] = i15;
        break;
       }
      }
     } while (0);
     i16 = HEAP32[i13 >> 2] | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     i15 = i16 | 0;
     i14 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i15 >> 2] = i14;
      break;
     }
    }
   } while (0);
   do {
    if ((i12 | 0) == 14) {
     __ZN3WTF6StringC1EPKc(i9, H_BASE + 16 | 0);
     i11 = i9 | 0;
     i14 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     i15 = i2 | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = i14;
     do {
      if ((i16 | 0) != 0) {
       i14 = i16 | 0;
       i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
       if ((i15 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i16);
        break;
       } else {
        HEAP32[i14 >> 2] = i15;
        break;
       }
      }
     } while (0);
     i16 = HEAP32[i11 >> 2] | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     i13 = i16 | 0;
     i15 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i13 >> 2] = i15;
      break;
     }
    }
   } while (0);
   __ZN10Deprecated11ScriptValueD1Ev(i8);
   __ZN9Inspector14InjectedScriptD1Ev(i6);
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 48 | 0);
 i8 = i7 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i7;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  __ZN9Inspector14InjectedScriptD1Ev(i6);
  STACKTOP = i5;
  return;
 }
 i8 = i2 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  __ZN9Inspector14InjectedScriptD1Ev(i6);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i8 >> 2] = i9;
  __ZN9Inspector14InjectedScriptD1Ev(i6);
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 + 4 | 0;
   i13 = i4 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i13 >> 2] = i9;
    break;
   }
   i9 = i4 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i9;
 i8 = i2 + 4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, i18) | 0;
  i19 = i4;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore26InspectorHeapProfilerAgent17getProfileHeadersEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_12HeapProfiler13ProfileHeaderEEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 HEAP8[i1 + 52 | 0] = 1;
 i5 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN9Inspector18InspectorArrayBaseC2Ev(i5);
 HEAP32[i5 >> 2] = H_BASE + 368;
 i6 = i3 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i7 = i5 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = i8;
    break;
   }
   i8 = i5 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 i8 = HEAP32[i1 + 36 >> 2] | 0;
 i5 = i3 + (i8 << 3) | 0;
 if ((HEAP32[i1 + 44 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 L11 : do {
  if ((i8 | 0) == 0) {
   i9 = i3;
  } else {
   i1 = i3;
   while (1) {
    i7 = HEAP32[i1 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i9 = i1;
     break L11;
    }
    i1 = i1 + 8 | 0;
    if ((i1 | 0) == (i5 | 0)) {
     break;
    }
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((i9 | 0) == (i5 | 0)) {
  STACKTOP = i2;
  return;
 }
 i3 = i4 | 0;
 i8 = i9;
 L20 : while (1) {
  i9 = HEAP32[i6 >> 2] | 0;
  __ZN7WebCore26InspectorHeapProfilerAgent20createSnapshotHeaderERKNS_18ScriptHeapSnapshotE(i4, 0, HEAP32[i8 + 4 >> 2] | 0);
  i1 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  i7 = i1 | 0;
  i1 = i9 + 12 | 0;
  i10 = i9 + 20 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  if ((i11 | 0) == (HEAP32[i9 + 16 >> 2] | 0)) {
   __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i11 + 1 | 0);
   HEAP32[(HEAP32[i1 >> 2] | 0) + (HEAP32[i10 >> 2] << 2) >> 2] = i7;
  } else {
   HEAP32[(HEAP32[i1 >> 2] | 0) + (i11 << 2) >> 2] = i7;
  }
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i10 = i8 + 8 | 0;
  if ((i10 | 0) == (i5 | 0)) {
   i12 = 23;
   break;
  } else {
   i13 = i10;
  }
  while (1) {
   i10 = HEAP32[i13 >> 2] | 0;
   if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
    break;
   }
   i10 = i13 + 8 | 0;
   if ((i10 | 0) == (i5 | 0)) {
    i12 = 21;
    break L20;
   } else {
    i13 = i10;
   }
  }
  if ((i13 | 0) == (i5 | 0)) {
   i12 = 20;
   break;
  } else {
   i8 = i13;
  }
 }
 if ((i12 | 0) == 20) {
  STACKTOP = i2;
  return;
 } else if ((i12 | 0) == 21) {
  STACKTOP = i2;
  return;
 } else if ((i12 | 0) == 23) {
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore26InspectorHeapProfilerAgent13removeProfileEPN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 HEAP32[i5 >> 2] = i3;
 i6 = i1 + 32 | 0;
 i7 = i6 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i9 = HEAP32[i1 + 40 >> 2] | 0;
 i10 = ~(i3 << 15) + i3 | 0;
 i11 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i11 >>> 6 ^ i11;
 i11 = i10 + ~(i10 << 11) | 0;
 i10 = i11 >>> 16 ^ i11;
 i11 = i9 & i10;
 i12 = i8 + (i11 << 3) | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 L4 : do {
  if ((i13 | 0) == (i3 | 0)) {
   i14 = i12;
  } else {
   i15 = (i10 >>> 23) + ~i10 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = i11;
   i18 = i13;
   while (1) {
    if ((i18 | 0) == 0) {
     break;
    }
    i19 = (i16 | 0) == 0 ? i15 : i16;
    i20 = i19 + i17 & i9;
    i21 = i8 + (i20 << 3) | 0;
    i22 = HEAP32[i21 >> 2] | 0;
    if ((i22 | 0) == (i3 | 0)) {
     i14 = i21;
     break L4;
    } else {
     i16 = i19;
     i17 = i20;
     i18 = i22;
    }
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((i14 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF7HashMapIjNS_6RefPtrIN7WebCore18ScriptHeapSnapshotEEENS_7IntHashIjEENS_10HashTraitsIjEENS7_IS4_EEE4findERKj(i4, i6, i5);
 i5 = HEAP32[i4 >> 2] | 0;
 i4 = i6 | 0;
 i6 = i1 + 36 | 0;
 if ((i5 | 0) == ((HEAP32[i7 >> 2] | 0) + (HEAP32[i6 >> 2] << 3) | 0)) {
  STACKTOP = i2;
  return;
 }
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i14 = i7 + 4 | 0;
   i3 = i14 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i3 >> 2] = i8;
    break;
   }
   i8 = i14 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 48 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 44 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i1;
 i5 = HEAP32[i6 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore18ScriptHeapSnapshotEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i4, (i5 | 0) / 2 & -1, 0) | 0;
 STACKTOP = i2;
 return;
}
function __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i5, i1 + 12 | 0, i2, i3);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = i3 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = i6 + 4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i3;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i6 + 4 | 0;
  i6 = i3 | 0;
  i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i6 >> 2] = i5;
   STACKTOP = i4;
   return;
  }
  i5 = i3 - 4 | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 32 | 0;
 i3 = i1 + 40 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != (HEAP32[i1 + 36 >> 2] | 0)) {
  i1 = HEAP32[i2 >> 2] | 0;
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] = i1;
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i7 = i6 + 1 | 0;
 i1 = i5 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if (i8 >>> 0 > i2 >>> 0) {
   i9 = 13;
  } else {
   if ((i8 + (i6 << 2) | 0) >>> 0 <= i2 >>> 0) {
    i9 = 13;
    break;
   }
   __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
   i10 = HEAP32[i1 >> 2] | 0;
   i11 = i10 + (i2 - i8 >> 2 << 2) | 0;
   i12 = i10;
  }
 } while (0);
 if ((i9 | 0) == 13) {
  __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
  i11 = i2;
  i12 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (HEAP32[i3 >> 2] << 2) >> 2] = i1;
 if ((i1 | 0) != 0) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 328 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_vi + 6;
}
function __ZN7WebCore26InspectorHeapProfilerAgentD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 448;
 HEAP32[i1 + 12 >> 2] = H_BASE + 512;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 76 >> 2] = 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 36 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 + 4 | 0;
      i6 = i7 | 0;
      i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) != 0) {
       HEAP32[i6 >> 2] = i8;
       break;
      }
      i8 = i7 - 4 | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i5 >> 2] = i8;
    break;
   }
   i8 = i4 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 i3 = i1 + 20 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i8 | 0) != 0) {
  __ZdlPv(i8);
 }
 __ZN9Inspector45InspectorHeapProfilerBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 328;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i8 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i8;
  return;
 }
}
function __ZN7WebCore26InspectorHeapProfilerAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 448;
 HEAP32[i1 + 12 >> 2] = H_BASE + 512;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 76 >> 2] = 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 36 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 + 4 | 0;
      i6 = i7 | 0;
      i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) != 0) {
       HEAP32[i6 >> 2] = i8;
       break;
      }
      i8 = i7 - 4 | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i5 >> 2] = i8;
    break;
   }
   i8 = i4 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 i3 = i1 + 20 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i8 | 0) != 0) {
  __ZdlPv(i8);
 }
 __ZN9Inspector45InspectorHeapProfilerBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 328;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i8 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i8;
  return;
 }
}
function __ZN3WTF7HashMapIjNS_6RefPtrIN7WebCore18ScriptHeapSnapshotEEENS_7IntHashIjEENS_10HashTraitsIjEENS7_IS4_EEE4findERKj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] << 3 | 0;
   i6 = i5;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i8 + ~(i8 << 15) | 0;
   i10 = (i9 >>> 10 ^ i9) * 9 & -1;
   i9 = i10 >>> 6 ^ i10;
   i10 = i9 + ~(i9 << 11) | 0;
   i9 = i10 >>> 16 ^ i10;
   i10 = i9 & i5;
   i11 = i4 + (i10 << 3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   L4 : do {
    if ((i12 | 0) == (i8 | 0)) {
     i13 = i11;
    } else {
     i14 = (i9 >>> 23) + ~i9 | 0;
     i15 = i14 << 12 ^ i14;
     i14 = i15 >>> 7 ^ i15;
     i15 = i14 << 2 ^ i14;
     i14 = i15 >>> 20 ^ i15 | 1;
     i15 = 0;
     i16 = i10;
     i17 = i12;
     while (1) {
      if ((i17 | 0) == 0) {
       break;
      }
      i18 = (i15 | 0) == 0 ? i14 : i15;
      i19 = i18 + i16 & i5;
      i20 = i4 + (i19 << 3) | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      if ((i21 | 0) == (i8 | 0)) {
       i13 = i20;
       break L4;
      } else {
       i15 = i18;
       i16 = i19;
       i17 = i21;
      }
     }
     i17 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
     i6 = i17;
     i7 = i17;
     break L1;
    }
   } while (0);
   i8 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
   i6 = (i13 | 0) == 0 ? i8 : i13;
   i7 = i8;
  }
 } while (0);
 i13 = i1;
 HEAP32[i13 >> 2] = i6;
 HEAP32[i13 + 4 >> 2] = i7;
 return;
}
function __ZN7WebCore26InspectorHeapProfilerAgent15getHeapSnapshotEPN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 HEAP32[i5 >> 2] = i3;
 i3 = i1 + 32 | 0;
 __ZN3WTF7HashMapIjNS_6RefPtrIN7WebCore18ScriptHeapSnapshotEEENS_7IntHashIjEENS_10HashTraitsIjEENS7_IS4_EEE4findERKj(i6, i3, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) != ((HEAP32[i3 >> 2] | 0) + (HEAP32[i1 + 36 >> 2] << 3) | 0)) {
  i1 = HEAP32[i5 + 4 >> 2] | 0;
  if ((i1 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i5 = i1 + 4 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i3 + 1;
  i5 = i1 + 4 | 0;
  if ((i3 | 0) != 0) {
   HEAP32[i5 >> 2] = i3;
   STACKTOP = i4;
   return;
  }
  i3 = i5 - 4 | 0;
  if ((i3 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
  STACKTOP = i4;
  return;
 }
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 280 | 0);
 i3 = i7 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i7;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i2 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i3 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore26InspectorHeapProfilerAgent16takeHeapSnapshotEPN3WTF6StringEPKb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i2 = i3 | 0;
 i4 = i3 + 8 | 0;
 i5 = i3 + 16 | 0;
 i6 = i1 + 28 | 0;
 __ZN3WTF6String6numberEj(i5, HEAP32[i6 >> 2] | 0);
 i1 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i8 = i5 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringIPKccNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_T1_(i2, H_BASE + 232 | 0, 46, i4);
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i1 = i4 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i1 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if ((i2 | 0) == 0) {
  _WTFCrash();
 }
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = i2 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore26InspectorHeapProfilerAgent6createEPNS_19InstrumentingAgentsEPNS_25PageInjectedScriptManagerE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = __ZN3WTF10fastMallocEj(56) | 0;
 i8 = i7;
 HEAP32[i6 >> 2] = H_BASE + 304;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i6);
 i6 = i7;
 HEAP32[i6 >> 2] = H_BASE + 328;
 i9 = i5 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 HEAP32[i7 + 4 >> 2] = i5;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i6 >> 2] = H_BASE + 576;
   i10 = i7 + 8 | 0;
   HEAP32[i10 >> 2] = i2;
   i11 = i10;
  } else {
   i10 = i5 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i6 >> 2] = H_BASE + 576;
   i12 = i7 + 8 | 0;
   HEAP32[i12 >> 2] = i2;
   if ((i10 | 0) == 0) {
    i11 = i12;
    break;
   }
   i13 = i10 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    i11 = i12;
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    i11 = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i6 >> 2] = H_BASE + 448;
 HEAP32[i7 + 12 >> 2] = H_BASE + 512;
 HEAP32[i7 + 16 >> 2] = i3;
 HEAP32[i7 + 20 >> 2] = 0;
 HEAP32[i7 + 24 >> 2] = 0;
 HEAP32[i7 + 28 >> 2] = 1;
 _memset(i7 + 32 | 0, 0, 21) | 0;
 HEAP32[(HEAP32[i11 >> 2] | 0) + 76 >> 2] = i8;
 HEAP32[i1 >> 2] = i8;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore26InspectorHeapProfilerAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __Znwj(4) | 0;
 HEAP32[i6 >> 2] = i2;
 i2 = i1 + 20 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i7 | 0) != 0) {
  __ZdlPv(i7);
 }
 __ZN9Inspector38InspectorHeapProfilerBackendDispatcher6createEPNS_26InspectorBackendDispatcherEPNS_45InspectorHeapProfilerBackendDispatcherHandlerE(i5, i3, i1 + 12 | 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i7 = i1 + 24 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i5;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 + 4 | 0;
   i7 = i5 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i7 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i1 + 4 | 0;
 i1 = i3 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
 i6 = i3 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore26InspectorHeapProfilerAgentC2EPNS_19InstrumentingAgentsEPNS_25PageInjectedScriptManagerE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i6 >> 2] = H_BASE + 304;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i6);
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = H_BASE + 328;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i5;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i6 >> 2] = H_BASE + 576;
   i8 = i1 + 8 | 0;
   HEAP32[i8 >> 2] = i2;
   i9 = i8;
  } else {
   i8 = i5 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i6 >> 2] = H_BASE + 576;
   i10 = i1 + 8 | 0;
   HEAP32[i10 >> 2] = i2;
   if ((i8 | 0) == 0) {
    i9 = i10;
    break;
   }
   i11 = i8 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    i9 = i10;
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    i9 = i10;
    break;
   }
  }
 } while (0);
 HEAP32[i6 >> 2] = H_BASE + 448;
 HEAP32[i1 + 12 >> 2] = H_BASE + 512;
 HEAP32[i1 + 16 >> 2] = i3;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 1;
 _memset(i1 + 32 | 0, 0, 21) | 0;
 HEAP32[(HEAP32[i9 >> 2] | 0) + 76 >> 2] = i1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore26InspectorHeapProfilerAgentC1EPNS_19InstrumentingAgentsEPNS_25PageInjectedScriptManagerE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i6 >> 2] = H_BASE + 304;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i6);
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = H_BASE + 328;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i5;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i6 >> 2] = H_BASE + 576;
   i8 = i1 + 8 | 0;
   HEAP32[i8 >> 2] = i2;
   i9 = i8;
  } else {
   i8 = i5 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i6 >> 2] = H_BASE + 576;
   i10 = i1 + 8 | 0;
   HEAP32[i10 >> 2] = i2;
   if ((i8 | 0) == 0) {
    i9 = i10;
    break;
   }
   i11 = i8 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    i9 = i10;
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    i9 = i10;
    break;
   }
  }
 } while (0);
 HEAP32[i6 >> 2] = H_BASE + 448;
 HEAP32[i1 + 12 >> 2] = H_BASE + 512;
 HEAP32[i1 + 16 >> 2] = i3;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 1;
 _memset(i1 + 32 | 0, 0, 21) | 0;
 HEAP32[(HEAP32[i9 >> 2] | 0) + 76 >> 2] = i1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore26InspectorHeapProfilerAgent10resetStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 36 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 + 4 | 0;
      i6 = i7 | 0;
      i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) != 0) {
       HEAP32[i6 >> 2] = i8;
       break;
      }
      i8 = i7 - 4 | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
  _memset(i2 | 0, 0, 16) | 0;
 }
 HEAP32[i1 + 28 >> 2] = 1;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP8[i1 + 52 | 0] & 1) == 0) {
    break;
   }
   if ((HEAP32[i1 + 44 >> 2] | 0) != 0) {
    break;
   }
   __ZN9Inspector39InspectorHeapProfilerFrontendDispatcher13resetProfilesEv(i2);
  }
 } while (0);
 i2 = HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 56 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore18CommandLineAPIHost21clearInspectedObjectsEv(i2);
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 + (i4 >>> 2) | 0;
 i6 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
 i5 = i6 >>> 0 > i2 >>> 0 ? i6 : i2;
 if (i4 >>> 0 >= i5 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 + (i4 >>> 2) | 0;
 i6 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
 i5 = i6 >>> 0 > i2 >>> 0 ? i6 : i2;
 if (i4 >>> 0 >= i5 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore26InspectorHeapProfilerAgent29willDestroyFrontendAndBackendEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZdlPv(i3);
 }
 i3 = i1 + 24 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 HEAP8[i1 + 52 | 0] = 0;
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
function __ZThn12_N7WebCore26InspectorHeapProfilerAgent23getObjectByHeapObjectIdEPN3WTF6StringERKS2_PS4_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore26InspectorHeapProfilerAgent23getObjectByHeapObjectIdEPN3WTF6StringERKS2_PS4_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE(i1 - 56 + 44 | 0, i2, i3, i4, i5);
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
function __ZThn12_N7WebCore26InspectorHeapProfilerAgent17getProfileHeadersEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_12HeapProfiler13ProfileHeaderEEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore26InspectorHeapProfilerAgent17getProfileHeadersEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_12HeapProfiler13ProfileHeaderEEEEE(i1 - 56 + 44 | 0, 0, i3);
 return;
}
function __ZN9Inspector18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 328;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 328;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore26InspectorHeapProfilerAgent21resetFrontendProfilesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP8[i1 + 52 | 0] & 1) == 0) {
  return;
 }
 if ((HEAP32[i1 + 44 >> 2] | 0) != 0) {
  return;
 }
 __ZN9Inspector39InspectorHeapProfilerFrontendDispatcher13resetProfilesEv(i2);
 return;
}
function __ZN9Inspector18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 328;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 328;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZThn12_N7WebCore26InspectorHeapProfilerAgent15getHeapObjectIdEPN3WTF6StringERKS2_S3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore26InspectorHeapProfilerAgent15getHeapObjectIdEPN3WTF6StringERKS2_S3_(i1 - 56 + 44 | 0, i2, i3, i4);
 return;
}
function __ZThn12_N7WebCore26InspectorHeapProfilerAgent16takeHeapSnapshotEPN3WTF6StringEPKb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore26InspectorHeapProfilerAgent16takeHeapSnapshotEPN3WTF6StringEPKb(i1 - 56 + 44 | 0, 0, i3);
 return;
}
function __ZThn12_N7WebCore26InspectorHeapProfilerAgent15getHeapSnapshotEPN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore26InspectorHeapProfilerAgent15getHeapSnapshotEPN3WTF6StringEi(i1 - 56 + 44 | 0, i2, i3);
 return;
}
function __ZThn12_N7WebCore26InspectorHeapProfilerAgent13removeProfileEPN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore26InspectorHeapProfilerAgent13removeProfileEPN3WTF6StringEi(i1 - 56 + 44 | 0, 0, i3);
 return;
}
function iii___ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE(i1 | 0, i2 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE(i1 | 0, i2 | 0);
}
function __ZThn12_N7WebCore26InspectorHeapProfilerAgent13clearProfilesEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore26InspectorHeapProfilerAgent10resetStateEv(i1 - 56 + 44 | 0);
 return;
}
function iii___ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZThn12_N7WebCore26InspectorHeapProfilerAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 56 + 44 | 0;
 __ZN7WebCore26InspectorHeapProfilerAgentD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function iii___ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE(i1 | 0, i2 | 0) | 0;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_12HeapProfiler13ProfileHeaderEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore26InspectorHeapProfilerAgent13clearProfilesEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore26InspectorHeapProfilerAgent10resetStateEv(i1);
 return;
}
function __ZThn12_N7WebCore26InspectorHeapProfilerAgent14collectGarbageEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14ScriptProfiler14collectGarbageEv();
 return;
}
function iii___ZNK9Inspector14InspectorValue9asBooleanEPb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue9asBooleanEPb(i1 | 0, i2 | 0) | 0;
}
function __ZN7WebCore26InspectorHeapProfilerAgent14collectGarbageEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14ScriptProfiler14collectGarbageEv();
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPm__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPm(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPl__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPl(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPj__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPj(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPi(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPd__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPd(i1 | 0, i2 | 0) | 0;
}
function __ZThn12_N7WebCore26InspectorHeapProfilerAgent15hasHeapProfilerEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[i3] = 0;
 return;
}
function vii___ZN9Inspector18InspectorArrayBase7asArrayEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector18InspectorArrayBase7asArrayEv(i1 | 0, i2 | 0);
}
function __ZN7WebCore26InspectorHeapProfilerAgent15hasHeapProfilerEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[i3] = 0;
 return;
}
function vii___ZN9Inspector14InspectorValue8asObjectEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector14InspectorValue8asObjectEv(i1 | 0, i2 | 0);
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_12HeapProfiler13ProfileHeaderEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore26InspectorHeapProfilerAgentD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore26InspectorHeapProfilerAgentD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZThn12_N7WebCore26InspectorHeapProfilerAgentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore26InspectorHeapProfilerAgentD2Ev(i1 - 56 + 44 | 0);
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
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
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
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
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
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
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZN9Inspector18InspectorAgentBase12discardAgentEv(i1) {
 i1 = i1 | 0;
 return;
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
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore26InspectorHeapProfilerAgent23getObjectByHeapObjectIdEPN3WTF6StringERKS2_PS4_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE,b0,__ZThn12_N7WebCore26InspectorHeapProfilerAgent23getObjectByHeapObjectIdEPN3WTF6StringERKS2_PS4_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore26InspectorHeapProfilerAgentD0Ev,b1,__ZN7WebCore26InspectorHeapProfilerAgent29willDestroyFrontendAndBackendEv,b1,__ZN9Inspector18InspectorAgentBase12discardAgentEv,b1,__ZN9Inspector11TypeBuilder5ArrayINS0_12HeapProfiler13ProfileHeaderEED0Ev,b1,__ZN7WebCore26InspectorHeapProfilerAgentD2Ev,b1,__ZN9Inspector18InspectorAgentBaseD0Ev,b1,__ZN9Inspector18InspectorAgentBaseD1Ev,b1,__ZN9Inspector11TypeBuilder5ArrayINS0_12HeapProfiler13ProfileHeaderEED1Ev,b1,__ZN7WebCore18InspectorAgentBaseD0Ev,b1,__ZThn12_N7WebCore26InspectorHeapProfilerAgentD0Ev,b1,__ZN7WebCore18InspectorAgentBaseD1Ev,b1,__ZThn12_N7WebCore26InspectorHeapProfilerAgentD1Ev,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZN9Inspector18InspectorArrayBase7asArrayEv__wrapper,b2,__ZThn12_N7WebCore26InspectorHeapProfilerAgent13clearProfilesEPN3WTF6StringE,b2,__ZThn12_N7WebCore26InspectorHeapProfilerAgent14collectGarbageEPN3WTF6StringE,b2,__ZN7WebCore26InspectorHeapProfilerAgent14collectGarbageEPN3WTF6StringE,b2,vii___ZN9Inspector14InspectorValue8asObjectEv__wrapper,b2,vii___ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE__wrapper,b2,__ZN7WebCore26InspectorHeapProfilerAgent13clearProfilesEPN3WTF6StringE,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZThn12_N7WebCore26InspectorHeapProfilerAgent15getHeapSnapshotEPN3WTF6StringEi,b4,__ZN7WebCore26InspectorHeapProfilerAgent13removeProfileEPN3WTF6StringEi,b4,__ZThn12_N7WebCore26InspectorHeapProfilerAgent15hasHeapProfilerEPN3WTF6StringEPb,b4,__ZN7WebCore26InspectorHeapProfilerAgent15hasHeapProfilerEPN3WTF6StringEPb,b4,__ZN7WebCore26InspectorHeapProfilerAgent16takeHeapSnapshotEPN3WTF6StringEPKb,b4,__ZN7WebCore26InspectorHeapProfilerAgent17getProfileHeadersEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_12HeapProfiler13ProfileHeaderEEEEE,b4,__ZN7WebCore26InspectorHeapProfilerAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE,b4,__ZN7WebCore26InspectorHeapProfilerAgentC2EPNS_19InstrumentingAgentsEPNS_25PageInjectedScriptManagerE,b4,__ZThn12_N7WebCore26InspectorHeapProfilerAgent17getProfileHeadersEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_12HeapProfiler13ProfileHeaderEEEEE,b4,__ZThn12_N7WebCore26InspectorHeapProfilerAgent16takeHeapSnapshotEPN3WTF6StringEPKb,b4,__ZN7WebCore26InspectorHeapProfilerAgent15getHeapSnapshotEPN3WTF6StringEi,b4,__ZThn12_N7WebCore26InspectorHeapProfilerAgent13removeProfileEPN3WTF6StringEi,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5,v____cxa_pure_virtual__wrapper,b5];
  var FUNCTION_TABLE_iii = [b6,b6,iii___ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE__wrapper,b6,iii___ZNK9Inspector14InspectorValue8asNumberEPi__wrapper,b6,iii___ZNK9Inspector14InspectorValue8asNumberEPm__wrapper,b6,iii___ZNK9Inspector14InspectorValue8asNumberEPl__wrapper,b6,iii___ZNK9Inspector14InspectorValue9asBooleanEPb__wrapper,b6,iii___ZNK9Inspector14InspectorValue8asNumberEPd__wrapper,b6,iii___ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE__wrapper,b6,iii___ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE__wrapper,b6,iii___ZNK9Inspector14InspectorValue8asNumberEPj__wrapper,b6,iii___ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE__wrapper,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,__ZN7WebCore26InspectorHeapProfilerAgent15getHeapObjectIdEPN3WTF6StringERKS2_S3_,b7,__ZThn12_N7WebCore26InspectorHeapProfilerAgent15getHeapObjectIdEPN3WTF6StringERKS2_S3_,b7,b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZThn12_N7WebCore26InspectorHeapProfilerAgent15getHeapSnapshotEPN3WTF6StringEi","__ZN7WebCore26InspectorHeapProfilerAgent13removeProfileEPN3WTF6StringEi","__ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore18ScriptHeapSnapshotEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_","__ZN7WebCore26InspectorHeapProfilerAgentD0Ev","__ZThn12_N7WebCore26InspectorHeapProfilerAgent15hasHeapProfilerEPN3WTF6StringEPb","__ZN7WebCore26InspectorHeapProfilerAgent29willDestroyFrontendAndBackendEv","__ZN3WTF13tryMakeStringIPKccNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_T1_","__ZN3WTF7HashMapIjNS_6RefPtrIN7WebCore18ScriptHeapSnapshotEEENS_7IntHashIjEENS_10HashTraitsIjEENS7_IS4_EEE4findERKj","__ZN7WebCore26InspectorHeapProfilerAgent15hasHeapProfilerEPN3WTF6StringEPb","__ZN9Inspector18InspectorAgentBase12discardAgentEv","__ZN7WebCore26InspectorHeapProfilerAgent23getObjectByHeapObjectIdEPN3WTF6StringERKS2_PS4_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE","__ZN9Inspector11TypeBuilder5ArrayINS0_12HeapProfiler13ProfileHeaderEED0Ev","__ZN7WebCore26InspectorHeapProfilerAgent16takeHeapSnapshotEPN3WTF6StringEPKb","__ZN7WebCore26InspectorHeapProfilerAgent17getProfileHeadersEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_12HeapProfiler13ProfileHeaderEEEEE","__ZThn12_N7WebCore26InspectorHeapProfilerAgent13clearProfilesEPN3WTF6StringE","__ZThn12_N7WebCore26InspectorHeapProfilerAgent14collectGarbageEPN3WTF6StringE","__ZN7WebCore26InspectorHeapProfilerAgent14collectGarbageEPN3WTF6StringE","_memcpy","__ZN7WebCore26InspectorHeapProfilerAgent15getHeapObjectIdEPN3WTF6StringERKS2_S3_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore26InspectorHeapProfilerAgent13clearProfilesEPN3WTF6StringE","__ZN7WebCore26InspectorHeapProfilerAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE","__ZN7WebCore26InspectorHeapProfilerAgentC2EPNS_19InstrumentingAgentsEPNS_25PageInjectedScriptManagerE","__ZN7WebCore26InspectorHeapProfilerAgentD2Ev","__ZN7WebCore26InspectorHeapProfilerAgent20createSnapshotHeaderERKNS_18ScriptHeapSnapshotE","__ZN7WebCore18InspectorAgentBaseD1Ev","__ZN9Inspector18InspectorAgentBaseD0Ev","__ZN7WebCore26InspectorHeapProfilerAgent21resetFrontendProfilesEv","__ZN9Inspector18InspectorAgentBaseD1Ev","__ZN9Inspector11TypeBuilder5ArrayINS0_12HeapProfiler13ProfileHeaderEED1Ev","__ZThn12_N7WebCore26InspectorHeapProfilerAgent23getObjectByHeapObjectIdEPN3WTF6StringERKS2_PS4_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE","__ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_","__ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore26InspectorHeapProfilerAgent10resetStateEv","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore18InspectorAgentBaseD0Ev","__ZN7WebCore26InspectorHeapProfilerAgent6createEPNS_19InstrumentingAgentsEPNS_25PageInjectedScriptManagerE","__ZThn12_N7WebCore26InspectorHeapProfilerAgentD0Ev","_memset","_strlen","__ZThn12_N7WebCore26InspectorHeapProfilerAgent16takeHeapSnapshotEPN3WTF6StringEPKb","__ZN7WebCore26InspectorHeapProfilerAgent15getHeapSnapshotEPN3WTF6StringEi","__ZThn12_N7WebCore26InspectorHeapProfilerAgentD1Ev","__ZThn12_N7WebCore26InspectorHeapProfilerAgent15getHeapObjectIdEPN3WTF6StringERKS2_S3_","__ZThn12_N7WebCore26InspectorHeapProfilerAgent13removeProfileEPN3WTF6StringEi","__ZThn12_N7WebCore26InspectorHeapProfilerAgent17getProfileHeadersEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_12HeapProfiler13ProfileHeaderEEEEE"]
