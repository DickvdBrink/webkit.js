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
H_BASE = parentModule["_malloc"](528 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 528;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore22IDBBackingStoreLevelDBC1ERKN3WTF6StringENS1_10PassOwnPtrINS_15LevelDBDatabaseEEENS5_INS_17LevelDBComparatorEEE;
var __ZN7WebCore22IDBBackingStoreLevelDBD1Ev;
/* memory initializer */ allocate([105,100,98,95,99,109,112,49,0,0,0,0,0,0,0,0,87,101,98,67,111,114,101,46,73,110,100,101,120,101,100,68,66,46,66,97,99,107,105,110,103,83,116,111,114,101,46,37,115,69,114,114,111,114,0,0,87,114,105,116,101,0,0,0,67,111,110,115,105,115,116,101,110,99,121,0,0,0,0,0,82,101,97,100,0,0,0,0,46,105,110,100,101,120,101,100,100,98,46,108,101,118,101,108,100,98,0,0,0,0,0,0,87,101,98,67,111,114,101,46,73,110,100,101,120,101,100,68,66,46,66,97,99,107,105,110,103,83,116,111,114,101,46,79,112,101,110,83,116,97,116,117,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
 var ctlz_i8 = allocate([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_DYNAMIC);
 var cttz_i8 = allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0], "i8", ALLOC_DYNAMIC);
var Math_min = Math.min;
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13) {
  try {
    Module["dynCall_viiiiiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13);
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
function invoke_viiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11) {
  try {
    Module["dynCall_viiiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
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
  var cttz_i8=env.cttz_i8|0;
  var ctlz_i8=env.ctlz_i8|0;
  var __ZTVN7WebCore28IDBBackingStoreCursorLevelDBE=env.__ZTVN7WebCore28IDBBackingStoreCursorLevelDBE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore21ObjectStoreCursorImplE=(H_BASE+280)|0;
  var __ZTVN7WebCore24ObjectStoreKeyCursorImplE=(H_BASE+168)|0;
  var __ZTVN7WebCore21DefaultLevelDBFactoryE=(H_BASE+344)|0;
  var __ZTVN7WebCore15IndexCursorImplE=(H_BASE+440)|0;
  var __ZTVN7WebCore18IndexKeyCursorImplE=(H_BASE+376)|0;
  var __ZTVN7WebCore10ComparatorE=(H_BASE+504)|0;
  var __ZTVN7WebCore22IDBBackingStoreLevelDBE=(H_BASE+232)|0;
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
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var invoke_viiiiiiiiiiiii=env.invoke_viiiiiiiiiiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_viiiiiiiiiii=env.invoke_viiiiiiiiiii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _floor=env._floor;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore22IDBBackingStoreLevelDB15getObjectStoresExPN3WTF7HashMapIxNS_22IDBObjectStoreMetadataENS1_7IntHashIyEENS1_10HashTraitsIxEENS6_IS3_EEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, i130 = 0, i131 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 432 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 128 | 0;
 i22 = i5 + 144 | 0;
 i23 = i5 + 152 | 0;
 i24 = i5 + 160 | 0;
 i25 = i5 + 168 | 0;
 i26 = i5 + 176 | 0;
 i27 = i5 + 184 | 0;
 i28 = i5 + 192 | 0;
 i29 = i5 + 208 | 0;
 i30 = i5 + 216 | 0;
 i31 = i5 + 224 | 0;
 i32 = i5 + 232 | 0;
 i33 = i5 + 240 | 0;
 i34 = i5 + 264 | 0;
 i35 = i5 + 272 | 0;
 i36 = i5 + 280 | 0;
 i37 = i5 + 288 | 0;
 i38 = i5 + 296 | 0;
 i39 = i5 + 304 | 0;
 i40 = i5 + 312 | 0;
 i41 = i5 + 320 | 0;
 i42 = i5 + 328 | 0;
 i43 = i5 + 336 | 0;
 i44 = i5 + 344 | 0;
 i45 = i5 + 416 | 0;
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix17isValidDatabaseIdEx(i2, i3) | 0)) {
  i46 = 0;
  STACKTOP = i5;
  return i46 | 0;
 }
 __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey6encodeExxh(i20, i2, i3, 1, 0, 0);
 __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey12encodeMaxKeyEx(i21, i2, i3);
 __ZN7WebCore15LevelDBDatabase14createIteratorEPKNS_15LevelDBSnapshotE(i22, HEAP32[i1 + 12 >> 2] | 0, 0);
 i47 = i22 | 0;
 i22 = HEAP32[i47 >> 2] | 0;
 HEAP32[i47 >> 2] = 0;
 i47 = HEAP32[(HEAP32[i22 >> 2] | 0) + 16 >> 2] | 0;
 i48 = i20 | 0;
 i49 = HEAP32[i48 >> 2] | 0;
 HEAP32[i23 >> 2] = i49;
 i50 = i20 + 8 | 0;
 HEAP32[i23 + 4 >> 2] = i49 + (HEAP32[i50 >> 2] | 0);
 FUNCTION_TABLE_vii[i47 & 31](i22, i23);
 i23 = i22;
 L4 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] & 31](i22) | 0) {
   i47 = i22;
   i49 = i25 | 0;
   i51 = i21 | 0;
   i52 = i25 + 4 | 0;
   i53 = i21 + 8 | 0;
   i54 = i26 | 0;
   i55 = i27 + 4 | 0;
   i56 = i31 | 0;
   i57 = i32 + 4 | 0;
   i58 = i22;
   i59 = i34 | 0;
   i60 = i35 + 4 | 0;
   i61 = i36 | 0;
   i62 = i37 + 4 | 0;
   i63 = i38 | 0;
   i64 = i39 + 4 | 0;
   i65 = i40 | 0;
   i66 = i41 + 4 | 0;
   i67 = i33 | 0;
   i68 = i33 + 4 | 0;
   i69 = i15 | 0;
   i70 = i14 | 0;
   i71 = i33 + 16 | 0;
   i72 = i33 + 8 | 0;
   i73 = i33 + 12 | 0;
   i74 = i42 | 0;
   i75 = i43 + 4 | 0;
   i76 = i44 | 0;
   i77 = i30 | 0;
   i78 = i44 + 8 | 0;
   i79 = i44 + 16 | 0;
   i80 = i44 + 20 | 0;
   i81 = i44 + 24 | 0;
   i82 = i44 + 28 | 0;
   i83 = i44 + 32 | 0;
   i84 = i44 + 36 | 0;
   i85 = i44 + 40 | 0;
   i86 = i44 + 48 | 0;
   i87 = i86;
   i88 = i4 | 0;
   i89 = i45 + 8 | 0;
   i90 = i45 | 0;
   i91 = i7 | 0;
   i92 = i6 | 0;
   i93 = i9 | 0;
   i94 = i8 | 0;
   i95 = i11 | 0;
   i96 = i10 | 0;
   i97 = i13 | 0;
   i98 = i12 | 0;
   i99 = i17 | 0;
   i100 = i16 | 0;
   i101 = i19 | 0;
   i102 = i18 | 0;
   L6 : while (1) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i47 >> 2] | 0) + 28 >> 2] & 31](i24, i22);
    i103 = HEAP32[i51 >> 2] | 0;
    HEAP32[i49 >> 2] = i103;
    HEAP32[i52 >> 2] = i103 + (HEAP32[i53 >> 2] | 0);
    if ((__ZN7WebCore16IDBLevelDBCoding7compareERKNS_12LevelDBSliceES3_b(i24, i25, 0) | 0) >= 0) {
     i104 = 1;
     break L4;
    }
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i47 >> 2] | 0) + 28 >> 2] & 31](i26, i22);
    i103 = HEAP32[i54 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i47 >> 2] | 0) + 28 >> 2] & 31](i27, i22);
    i105 = HEAP32[i55 >> 2] | 0;
    __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKeyC1Ev(i28);
    __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey6decodeEPKcS3_PS1_(i103, i105, i28) | 0;
    if ((__ZNK7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey12metaDataTypeEv(i28) | 0) << 24 >> 24 == 0) {
     i105 = __ZNK7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey13objectStoreIdEv(i28) | 0;
     i103 = tempRet0;
     HEAP32[i29 >> 2] = i105;
     HEAP32[i29 + 4 >> 2] = i103;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i47 >> 2] | 0) + 32 >> 2] & 31](i31, i22);
     i106 = HEAP32[i56 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i47 >> 2] | 0) + 32 >> 2] & 31](i32, i22);
     __ZN7WebCore16IDBLevelDBCoding12decodeStringEPKcS2_(i30, i106, HEAP32[i57 >> 2] | 0);
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i58 >> 2] | 0) + 20 >> 2] & 31](i22);
     do {
      if (__ZN7WebCoreL31checkObjectStoreAndMetaDataTypeEPKNS_15LevelDBIteratorERKN3WTF6VectorIcLj0ENS3_15CrashOnOverflowEEExx(i22, i21, i105, i103, 1, 0) | 0) {
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i47 >> 2] | 0) + 32 >> 2] & 31](i34, i22);
       i106 = HEAP32[i59 >> 2] | 0;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i47 >> 2] | 0) + 32 >> 2] & 31](i35, i22);
       __ZN7WebCore16IDBLevelDBCoding16decodeIDBKeyPathEPKcS2_(i33, i106, HEAP32[i60 >> 2] | 0);
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i58 >> 2] | 0) + 20 >> 2] & 31](i22);
       L43 : do {
        if (__ZN7WebCoreL31checkObjectStoreAndMetaDataTypeEPKNS_15LevelDBIteratorERKN3WTF6VectorIcLj0ENS3_15CrashOnOverflowEEExx(i22, i21, i105, i103, 2, 0) | 0) {
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i47 >> 2] | 0) + 32 >> 2] & 31](i36, i22);
         i106 = HEAP32[i61 >> 2] | 0;
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i47 >> 2] | 0) + 32 >> 2] & 31](i37, i22);
         i107 = __ZN7WebCore16IDBLevelDBCoding10decodeBoolEPKcS2_(i106, HEAP32[i62 >> 2] | 0) | 0;
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i58 >> 2] | 0) + 20 >> 2] & 31](i22);
         if (!(__ZN7WebCoreL31checkObjectStoreAndMetaDataTypeEPKNS_15LevelDBIteratorERKN3WTF6VectorIcLj0ENS3_15CrashOnOverflowEEExx(i22, i21, i105, i103, 3, 0) | 0)) {
          __ZN3WTF6String6formatEPKcz(i10, H_BASE + 24 | 0, (i108 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i108 >> 2] = H_BASE + 72, i108) | 0);
          STACKTOP = i108;
          __ZNK3WTF6String4utf8ENS_14ConversionModeE(i11, i10, 0);
          i106 = HEAP32[i95 >> 2] | 0;
          if ((i106 | 0) == 0) {
           i109 = 0;
          } else {
           i109 = i106 + 8 | 0;
          }
          __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i109, 7, 22);
          i106 = HEAP32[i95 >> 2] | 0;
          do {
           if ((i106 | 0) != 0) {
            i110 = i106 | 0;
            i111 = (HEAP32[i110 >> 2] | 0) - 1 | 0;
            if ((i111 | 0) == 0) {
             __ZN3WTF8fastFreeEPv(i106);
             break;
            } else {
             HEAP32[i110 >> 2] = i111;
             break;
            }
           }
          } while (0);
          i106 = HEAP32[i96 >> 2] | 0;
          if ((i106 | 0) == 0) {
           i112 = 3;
           break;
          }
          i111 = i106 | 0;
          i110 = (HEAP32[i111 >> 2] | 0) - 2 | 0;
          if ((i110 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i106);
           i112 = 3;
           break;
          } else {
           HEAP32[i111 >> 2] = i110;
           i112 = 3;
           break;
          }
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i58 >> 2] | 0) + 20 >> 2] & 31](i22);
         if (!(__ZN7WebCoreL31checkObjectStoreAndMetaDataTypeEPKNS_15LevelDBIteratorERKN3WTF6VectorIcLj0ENS3_15CrashOnOverflowEEExx(i22, i21, i105, i103, 4, 0) | 0)) {
          __ZN3WTF6String6formatEPKcz(i8, H_BASE + 24 | 0, (i108 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i108 >> 2] = H_BASE + 72, i108) | 0);
          STACKTOP = i108;
          __ZNK3WTF6String4utf8ENS_14ConversionModeE(i9, i8, 0);
          i110 = HEAP32[i93 >> 2] | 0;
          if ((i110 | 0) == 0) {
           i113 = 0;
          } else {
           i113 = i110 + 8 | 0;
          }
          __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i113, 7, 22);
          i110 = HEAP32[i93 >> 2] | 0;
          do {
           if ((i110 | 0) != 0) {
            i111 = i110 | 0;
            i106 = (HEAP32[i111 >> 2] | 0) - 1 | 0;
            if ((i106 | 0) == 0) {
             __ZN3WTF8fastFreeEPv(i110);
             break;
            } else {
             HEAP32[i111 >> 2] = i106;
             break;
            }
           }
          } while (0);
          i110 = HEAP32[i94 >> 2] | 0;
          if ((i110 | 0) == 0) {
           i112 = 3;
           break;
          }
          i106 = i110 | 0;
          i111 = (HEAP32[i106 >> 2] | 0) - 2 | 0;
          if ((i111 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i110);
           i112 = 3;
           break;
          } else {
           HEAP32[i106 >> 2] = i111;
           i112 = 3;
           break;
          }
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i58 >> 2] | 0) + 20 >> 2] & 31](i22);
         if (!(__ZN7WebCoreL31checkObjectStoreAndMetaDataTypeEPKNS_15LevelDBIteratorERKN3WTF6VectorIcLj0ENS3_15CrashOnOverflowEEExx(i22, i21, i105, i103, 5, 0) | 0)) {
          __ZN3WTF6String6formatEPKcz(i6, H_BASE + 24 | 0, (i108 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i108 >> 2] = H_BASE + 72, i108) | 0);
          STACKTOP = i108;
          __ZNK3WTF6String4utf8ENS_14ConversionModeE(i7, i6, 0);
          i111 = HEAP32[i91 >> 2] | 0;
          if ((i111 | 0) == 0) {
           i114 = 0;
          } else {
           i114 = i111 + 8 | 0;
          }
          __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i114, 7, 22);
          i111 = HEAP32[i91 >> 2] | 0;
          do {
           if ((i111 | 0) != 0) {
            i106 = i111 | 0;
            i110 = (HEAP32[i106 >> 2] | 0) - 1 | 0;
            if ((i110 | 0) == 0) {
             __ZN3WTF8fastFreeEPv(i111);
             break;
            } else {
             HEAP32[i106 >> 2] = i110;
             break;
            }
           }
          } while (0);
          i111 = HEAP32[i92 >> 2] | 0;
          if ((i111 | 0) == 0) {
           i112 = 3;
           break;
          }
          i110 = i111 | 0;
          i106 = (HEAP32[i110 >> 2] | 0) - 2 | 0;
          if ((i106 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i111);
           i112 = 3;
           break;
          } else {
           HEAP32[i110 >> 2] = i106;
           i112 = 3;
           break;
          }
         }
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i47 >> 2] | 0) + 32 >> 2] & 31](i38, i22);
         i106 = HEAP32[i63 >> 2] | 0;
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i47 >> 2] | 0) + 32 >> 2] & 31](i39, i22);
         i110 = __ZN7WebCore16IDBLevelDBCoding9decodeIntEPKcS2_(i106, HEAP32[i64 >> 2] | 0) | 0;
         i106 = tempRet0;
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i58 >> 2] | 0) + 20 >> 2] & 31](i22);
         if (__ZN7WebCoreL31checkObjectStoreAndMetaDataTypeEPKNS_15LevelDBIteratorERKN3WTF6VectorIcLj0ENS3_15CrashOnOverflowEEExx(i22, i21, i105, i103, 6, 0) | 0) {
          FUNCTION_TABLE_vii[HEAP32[(HEAP32[i47 >> 2] | 0) + 32 >> 2] & 31](i40, i22);
          i111 = HEAP32[i65 >> 2] | 0;
          FUNCTION_TABLE_vii[HEAP32[(HEAP32[i47 >> 2] | 0) + 32 >> 2] & 31](i41, i22);
          do {
           if (!(__ZN7WebCore16IDBLevelDBCoding10decodeBoolEPKcS2_(i111, HEAP32[i66 >> 2] | 0) | 0)) {
            i115 = HEAP32[i68 >> 2] | 0;
            do {
             if ((HEAP32[i67 >> 2] | 0) == 1) {
              if ((i115 | 0) == 0) {
               HEAP32[i67 >> 2] = 0;
               HEAP32[i68 >> 2] = 0;
               break;
              }
              if ((HEAP32[i115 + 4 >> 2] | 0) == 0) {
               HEAP32[i67 >> 2] = 0;
               HEAP32[i68 >> 2] = 0;
               i116 = 91;
               break;
              }
              __ZN3WTF6String6formatEPKcz(i14, H_BASE + 24 | 0, (i108 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i108 >> 2] = H_BASE + 72, i108) | 0);
              STACKTOP = i108;
              __ZNK3WTF6String4utf8ENS_14ConversionModeE(i15, i14, 0);
              i117 = HEAP32[i69 >> 2] | 0;
              if ((i117 | 0) == 0) {
               i118 = 0;
              } else {
               i118 = i117 + 8 | 0;
              }
              __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i118, 7, 22);
              i117 = HEAP32[i69 >> 2] | 0;
              do {
               if ((i117 | 0) != 0) {
                i119 = i117 | 0;
                i120 = (HEAP32[i119 >> 2] | 0) - 1 | 0;
                if ((i120 | 0) == 0) {
                 __ZN3WTF8fastFreeEPv(i117);
                 break;
                } else {
                 HEAP32[i119 >> 2] = i120;
                 break;
                }
               }
              } while (0);
              i117 = HEAP32[i70 >> 2] | 0;
              if ((i117 | 0) == 0) {
               i112 = 3;
               break L43;
              }
              i120 = i117 | 0;
              i119 = (HEAP32[i120 >> 2] | 0) - 2 | 0;
              if ((i119 | 0) == 0) {
               __ZN3WTF10StringImpl7destroyEPS0_(i117);
               i112 = 3;
               break L43;
              } else {
               HEAP32[i120 >> 2] = i119;
               i112 = 3;
               break L43;
              }
             } else {
              HEAP32[i67 >> 2] = 0;
              HEAP32[i68 >> 2] = 0;
              if ((i115 | 0) != 0) {
               i116 = 91;
              }
             }
            } while (0);
            do {
             if ((i116 | 0) == 91) {
              i116 = 0;
              i119 = i115 | 0;
              i120 = (HEAP32[i119 >> 2] | 0) - 2 | 0;
              if ((i120 | 0) == 0) {
               __ZN3WTF10StringImpl7destroyEPS0_(i115);
               break;
              } else {
               HEAP32[i119 >> 2] = i120;
               break;
              }
             }
            } while (0);
            i115 = HEAP32[i71 >> 2] | 0;
            HEAP32[i71 >> 2] = 0;
            i120 = HEAP32[i72 >> 2] | 0;
            HEAP32[i72 >> 2] = 0;
            HEAP32[i73 >> 2] = 0;
            if ((i115 | 0) != 0) {
             i119 = i120 + (i115 << 2) | 0;
             i115 = i120;
             while (1) {
              i117 = HEAP32[i115 >> 2] | 0;
              do {
               if ((i117 | 0) != 0) {
                i121 = i117 | 0;
                i122 = (HEAP32[i121 >> 2] | 0) - 2 | 0;
                if ((i122 | 0) == 0) {
                 __ZN3WTF10StringImpl7destroyEPS0_(i117);
                 break;
                } else {
                 HEAP32[i121 >> 2] = i122;
                 break;
                }
               }
              } while (0);
              i115 = i115 + 4 | 0;
              if ((i115 | 0) == (i119 | 0)) {
               break;
              }
             }
            }
            if ((i120 | 0) == 0) {
             break;
            }
            __ZN3WTF8fastFreeEPv(i120);
           }
          } while (0);
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i58 >> 2] | 0) + 20 >> 2] & 31](i22);
         }
         if (__ZN7WebCoreL31checkObjectStoreAndMetaDataTypeEPKNS_15LevelDBIteratorERKN3WTF6VectorIcLj0ENS3_15CrashOnOverflowEEExx(i22, i21, i105, i103, 7, 0) | 0) {
          FUNCTION_TABLE_vii[HEAP32[(HEAP32[i47 >> 2] | 0) + 32 >> 2] & 31](i42, i22);
          i111 = HEAP32[i74 >> 2] | 0;
          FUNCTION_TABLE_vii[HEAP32[(HEAP32[i47 >> 2] | 0) + 32 >> 2] & 31](i43, i22);
          __ZN7WebCore16IDBLevelDBCoding9decodeIntEPKcS2_(i111, HEAP32[i75 >> 2] | 0) | 0;
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i58 >> 2] | 0) + 20 >> 2] & 31](i22);
         }
         i111 = HEAP32[i77 >> 2] | 0;
         HEAP32[i76 >> 2] = i111;
         if ((i111 | 0) != 0) {
          i119 = i111 | 0;
          HEAP32[i119 >> 2] = (HEAP32[i119 >> 2] | 0) + 2;
         }
         HEAP32[i78 >> 2] = i105;
         HEAP32[i78 + 4 >> 2] = i103;
         HEAP32[i79 >> 2] = HEAP32[i67 >> 2];
         i119 = HEAP32[i68 >> 2] | 0;
         HEAP32[i80 >> 2] = i119;
         if ((i119 | 0) != 0) {
          i111 = i119 | 0;
          HEAP32[i111 >> 2] = (HEAP32[i111 >> 2] | 0) + 2;
         }
         i111 = HEAP32[i73 >> 2] | 0;
         i119 = HEAP32[i71 >> 2] | 0;
         HEAP32[i81 >> 2] = 0;
         HEAP32[i82 >> 2] = 0;
         HEAP32[i83 >> 2] = i119;
         do {
          if ((i111 | 0) == 0) {
           i123 = i103;
           i124 = i105;
          } else {
           if (i111 >>> 0 > 1073741823 >>> 0) {
            i116 = 112;
            break L6;
           }
           i119 = __ZN3WTF18fastMallocGoodSizeEj(i111 << 2) | 0;
           HEAP32[i82 >> 2] = i119 >>> 2;
           i115 = __ZN3WTF10fastMallocEj(i119) | 0;
           i119 = i115;
           HEAP32[i81 >> 2] = i119;
           if ((i115 | 0) == 0) {
            i123 = i103;
            i124 = i105;
            break;
           }
           i115 = HEAP32[i72 >> 2] | 0;
           i117 = HEAP32[i71 >> 2] | 0;
           i122 = i115 + (i117 << 2) | 0;
           if ((i117 | 0) == 0) {
            i123 = i103;
            i124 = i105;
            break;
           } else {
            i125 = i115;
            i126 = i119;
           }
           while (1) {
            i119 = HEAP32[i125 >> 2] | 0;
            HEAP32[i126 >> 2] = i119;
            if ((i119 | 0) != 0) {
             i115 = i119 | 0;
             HEAP32[i115 >> 2] = (HEAP32[i115 >> 2] | 0) + 2;
            }
            i115 = i125 + 4 | 0;
            if ((i115 | 0) == (i122 | 0)) {
             break;
            } else {
             i125 = i115;
             i126 = i126 + 4 | 0;
            }
           }
           i123 = HEAP32[i29 + 4 >> 2] | 0;
           i124 = HEAP32[i29 >> 2] | 0;
          }
         } while (0);
         HEAP8[i84] = i107 & 1;
         HEAP32[i85 >> 2] = i110;
         HEAP32[i85 + 4 >> 2] = i106;
         _memset(i87 | 0, 0, 20) | 0;
         do {
          if (__ZN7WebCore22IDBBackingStoreLevelDB10getIndexesExxPN3WTF7HashMapIxNS_16IDBIndexMetadataENS1_7IntHashIyEENS1_10HashTraitsIxEENS6_IS3_EEEE(i1, i2, i3, i124, i123, i86) | 0) {
           __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKxRS3_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i45, i88, i29, i44);
           if ((HEAP8[i89] & 1) != 0) {
            i127 = 0;
            break;
           }
           __ZN7WebCore22IDBObjectStoreMetadataaSERKS0_((HEAP32[i90 >> 2] | 0) + 8 | 0, i44) | 0;
           i127 = 0;
          } else {
           i127 = 1;
          }
         } while (0);
         __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i44);
         i112 = i127;
        } else {
         __ZN3WTF6String6formatEPKcz(i12, H_BASE + 24 | 0, (i108 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i108 >> 2] = H_BASE + 72, i108) | 0);
         STACKTOP = i108;
         __ZNK3WTF6String4utf8ENS_14ConversionModeE(i13, i12, 0);
         i106 = HEAP32[i97 >> 2] | 0;
         if ((i106 | 0) == 0) {
          i128 = 0;
         } else {
          i128 = i106 + 8 | 0;
         }
         __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i128, 7, 22);
         i106 = HEAP32[i97 >> 2] | 0;
         do {
          if ((i106 | 0) != 0) {
           i110 = i106 | 0;
           i107 = (HEAP32[i110 >> 2] | 0) - 1 | 0;
           if ((i107 | 0) == 0) {
            __ZN3WTF8fastFreeEPv(i106);
            break;
           } else {
            HEAP32[i110 >> 2] = i107;
            break;
           }
          }
         } while (0);
         i106 = HEAP32[i98 >> 2] | 0;
         if ((i106 | 0) == 0) {
          i112 = 3;
          break;
         }
         i107 = i106 | 0;
         i110 = (HEAP32[i107 >> 2] | 0) - 2 | 0;
         if ((i110 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i106);
          i112 = 3;
          break;
         } else {
          HEAP32[i107 >> 2] = i110;
          i112 = 3;
          break;
         }
        }
       } while (0);
       i110 = HEAP32[i71 >> 2] | 0;
       if ((i110 | 0) != 0) {
        i107 = HEAP32[i72 >> 2] | 0;
        i106 = i107 + (i110 << 2) | 0;
        i110 = i107;
        while (1) {
         i107 = HEAP32[i110 >> 2] | 0;
         do {
          if ((i107 | 0) != 0) {
           i111 = i107 | 0;
           i122 = (HEAP32[i111 >> 2] | 0) - 2 | 0;
           if ((i122 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i107);
            break;
           } else {
            HEAP32[i111 >> 2] = i122;
            break;
           }
          }
         } while (0);
         i110 = i110 + 4 | 0;
         if ((i110 | 0) == (i106 | 0)) {
          break;
         }
        }
        HEAP32[i71 >> 2] = 0;
       }
       i106 = HEAP32[i72 >> 2] | 0;
       if ((i106 | 0) != 0) {
        HEAP32[i72 >> 2] = 0;
        HEAP32[i73 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i106);
       }
       i106 = HEAP32[i68 >> 2] | 0;
       if ((i106 | 0) == 0) {
        i129 = i112;
        break;
       }
       i110 = i106 | 0;
       i107 = (HEAP32[i110 >> 2] | 0) - 2 | 0;
       if ((i107 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i106);
        i129 = i112;
        break;
       } else {
        HEAP32[i110 >> 2] = i107;
        i129 = i112;
        break;
       }
      } else {
       __ZN3WTF6String6formatEPKcz(i16, H_BASE + 24 | 0, (i108 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i108 >> 2] = H_BASE + 72, i108) | 0);
       STACKTOP = i108;
       __ZNK3WTF6String4utf8ENS_14ConversionModeE(i17, i16, 0);
       i107 = HEAP32[i99 >> 2] | 0;
       if ((i107 | 0) == 0) {
        i130 = 0;
       } else {
        i130 = i107 + 8 | 0;
       }
       __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i130, 7, 22);
       i107 = HEAP32[i99 >> 2] | 0;
       do {
        if ((i107 | 0) != 0) {
         i110 = i107 | 0;
         i106 = (HEAP32[i110 >> 2] | 0) - 1 | 0;
         if ((i106 | 0) == 0) {
          __ZN3WTF8fastFreeEPv(i107);
          break;
         } else {
          HEAP32[i110 >> 2] = i106;
          break;
         }
        }
       } while (0);
       i107 = HEAP32[i100 >> 2] | 0;
       if ((i107 | 0) == 0) {
        i129 = 3;
        break;
       }
       i106 = i107 | 0;
       i110 = (HEAP32[i106 >> 2] | 0) - 2 | 0;
       if ((i110 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i107);
        i129 = 3;
        break;
       } else {
        HEAP32[i106 >> 2] = i110;
        i129 = 3;
        break;
       }
      }
     } while (0);
     i105 = HEAP32[i77 >> 2] | 0;
     do {
      if ((i105 | 0) != 0) {
       i103 = i105 | 0;
       i110 = (HEAP32[i103 >> 2] | 0) - 2 | 0;
       if ((i110 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i105);
        break;
       } else {
        HEAP32[i103 >> 2] = i110;
        break;
       }
      }
     } while (0);
     if ((i129 | 0) == 3) {
      i104 = 1;
      break L4;
     } else if ((i129 | 0) != 0) {
      i116 = 142;
      break;
     }
    } else {
     __ZN3WTF6String6formatEPKcz(i18, H_BASE + 24 | 0, (i108 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i108 >> 2] = H_BASE + 72, i108) | 0);
     STACKTOP = i108;
     __ZNK3WTF6String4utf8ENS_14ConversionModeE(i19, i18, 0);
     i105 = HEAP32[i101 >> 2] | 0;
     if ((i105 | 0) == 0) {
      i131 = 0;
     } else {
      i131 = i105 + 8 | 0;
     }
     __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i131, 7, 22);
     i105 = HEAP32[i101 >> 2] | 0;
     do {
      if ((i105 | 0) != 0) {
       i110 = i105 | 0;
       i103 = (HEAP32[i110 >> 2] | 0) - 1 | 0;
       if ((i103 | 0) == 0) {
        __ZN3WTF8fastFreeEPv(i105);
        break;
       } else {
        HEAP32[i110 >> 2] = i103;
        break;
       }
      }
     } while (0);
     i105 = HEAP32[i102 >> 2] | 0;
     do {
      if ((i105 | 0) != 0) {
       i103 = i105 | 0;
       i110 = (HEAP32[i103 >> 2] | 0) - 2 | 0;
       if ((i110 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i105);
        break;
       } else {
        HEAP32[i103 >> 2] = i110;
        break;
       }
      }
     } while (0);
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i58 >> 2] | 0) + 20 >> 2] & 31](i22);
    }
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] & 31](i22) | 0)) {
     i104 = 1;
     break L4;
    }
   }
   if ((i116 | 0) == 112) {
    _WTFCrash();
    return 0;
   } else if ((i116 | 0) == 142) {
    i104 = 0;
    break;
   }
  } else {
   i104 = 1;
  }
 } while (0);
 if ((i22 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 31](i22);
 }
 i22 = i21 + 8 | 0;
 if ((HEAP32[i22 >> 2] | 0) != 0) {
  HEAP32[i22 >> 2] = 0;
 }
 i22 = i21 | 0;
 i116 = HEAP32[i22 >> 2] | 0;
 if ((i116 | 0) != 0) {
  HEAP32[i22 >> 2] = 0;
  HEAP32[i21 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i116);
 }
 if ((HEAP32[i50 >> 2] | 0) != 0) {
  HEAP32[i50 >> 2] = 0;
 }
 i50 = HEAP32[i48 >> 2] | 0;
 if ((i50 | 0) == 0) {
  i46 = i104;
  STACKTOP = i5;
  return i46 | 0;
 }
 HEAP32[i48 >> 2] = 0;
 HEAP32[i20 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i50);
 i46 = i104;
 STACKTOP = i5;
 return i46 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB6createERKN3WTF6StringENS1_10PassOwnPtrINS_15LevelDBDatabaseEEENS5_INS_17LevelDBComparatorEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 464 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 48 | 0;
 i12 = i5 + 64 | 0;
 i13 = i5 + 80 | 0;
 i14 = i5 + 96 | 0;
 i15 = i5 + 104 | 0;
 i16 = i5 + 112 | 0;
 i17 = i5 + 120 | 0;
 i18 = i5 + 128 | 0;
 i19 = i5 + 144 | 0;
 i20 = i5 + 160 | 0;
 i21 = i5 + 168 | 0;
 i22 = i5 + 176 | 0;
 i23 = i5 + 192 | 0;
 i24 = i5 + 208 | 0;
 i25 = i5 + 224 | 0;
 i26 = i5 + 232 | 0;
 i27 = i5 + 240 | 0;
 i28 = i5 + 256 | 0;
 i29 = i5 + 272 | 0;
 i30 = i5 + 288 | 0;
 i31 = i5 + 296 | 0;
 i32 = i5 + 304 | 0;
 i33 = i5 + 312 | 0;
 i34 = i5 + 320 | 0;
 i35 = i5 + 328 | 0;
 i36 = i5 + 336 | 0;
 i37 = i5 + 352 | 0;
 i38 = i5 + 368 | 0;
 i39 = i5 + 376 | 0;
 i40 = i5 + 384 | 0;
 i41 = i5 + 392 | 0;
 i42 = i5 + 400 | 0;
 i43 = i5 + 408 | 0;
 i44 = i5 + 424 | 0;
 i45 = i5 + 432 | 0;
 i46 = i5 + 440 | 0;
 i47 = i5 + 448 | 0;
 i48 = i5 + 456 | 0;
 i49 = __ZN3WTF10fastMallocEj(44) | 0;
 i50 = i49;
 i51 = i3 | 0;
 i3 = HEAP32[i51 >> 2] | 0;
 HEAP32[i51 >> 2] = 0;
 i51 = i4 | 0;
 i4 = HEAP32[i51 >> 2] | 0;
 HEAP32[i51 >> 2] = 0;
 i51 = i49 + 4 | 0;
 HEAP32[i51 >> 2] = 1;
 HEAP32[i49 >> 2] = H_BASE + 240;
 i52 = HEAP32[i2 >> 2] | 0;
 HEAP32[i49 + 8 >> 2] = i52;
 if ((i52 | 0) != 0) {
  i53 = i52 | 0;
  HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 2;
 }
 i53 = i49 + 12 | 0;
 HEAP32[i53 >> 2] = i3;
 HEAP32[i49 + 16 >> 2] = i4;
 i4 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i4 >> 2] = 1;
 HEAP32[i4 + 4 >> 2] = i50;
 HEAP32[i49 + 20 >> 2] = i4;
 _memset(i49 + 24 | 0, 0, 20) | 0;
 i4 = HEAP32[i53 >> 2] | 0;
 i53 = __ZN7WebCore21SerializedScriptValue17wireFormatVersionEv() | 0;
 __ZN7WebCore16IDBLevelDBCoding16SchemaVersionKey6encodeEv(i28);
 __ZN7WebCore16IDBLevelDBCoding14DataVersionKey6encodeEv(i29);
 __ZN7WebCore18LevelDBTransaction6createEPNS_15LevelDBDatabaseE(i30, i4);
 i3 = i30 | 0;
 i30 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP8[i31] = 0;
 i3 = i28 | 0;
 i52 = HEAP32[i3 >> 2] | 0;
 HEAP32[i32 >> 2] = i52;
 i54 = i28 + 8 | 0;
 HEAP32[i32 + 4 >> 2] = i52 + (HEAP32[i54 >> 2] | 0);
 i52 = i27 | 0;
 HEAP32[i52 >> 2] = 0;
 i55 = i27 + 4 | 0;
 HEAP32[i55 >> 2] = 0;
 i56 = i27 + 8 | 0;
 HEAP32[i56 >> 2] = 0;
 do {
  if (__ZN7WebCore18LevelDBTransaction7safeGetERKNS_12LevelDBSliceERN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEERb(i30, i32, i27, i31) | 0) {
   if ((HEAP8[i31] & 1) == 0) {
    i57 = 1;
    i58 = 0;
    i59 = 0;
    break;
   }
   i60 = HEAP32[i52 >> 2] | 0;
   i61 = __ZN7WebCore16IDBLevelDBCoding9decodeIntEPKcS2_(i60, i60 + (HEAP32[i56 >> 2] | 0) | 0) | 0;
   i57 = 1;
   i58 = tempRet0;
   i59 = i61;
  } else {
   i57 = 0;
   i58 = 0;
   i59 = 0;
  }
 } while (0);
 if ((HEAP32[i56 >> 2] | 0) != 0) {
  HEAP32[i56 >> 2] = 0;
 }
 i56 = HEAP32[i52 >> 2] | 0;
 if ((i56 | 0) != 0) {
  HEAP32[i52 >> 2] = 0;
  HEAP32[i55 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i56);
 }
 L14 : do {
  if (i57) {
   L30 : do {
    if ((HEAP8[i31] & 1) == 0) {
     i56 = HEAP32[i3 >> 2] | 0;
     HEAP32[i33 >> 2] = i56;
     HEAP32[i33 + 4 >> 2] = i56 + (HEAP32[i54 >> 2] | 0);
     __ZN7WebCore16IDBLevelDBCoding9encodeIntEx(i24, 2, 0);
     __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i30, i33, i24);
     i56 = i24 + 8 | 0;
     if ((HEAP32[i56 >> 2] | 0) != 0) {
      HEAP32[i56 >> 2] = 0;
     }
     i56 = i24 | 0;
     i55 = HEAP32[i56 >> 2] | 0;
     if ((i55 | 0) != 0) {
      HEAP32[i56 >> 2] = 0;
      HEAP32[i24 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i55);
     }
     i55 = i53;
     i56 = 0;
     i52 = i29 | 0;
     i27 = HEAP32[i52 >> 2] | 0;
     HEAP32[i34 >> 2] = i27;
     i32 = i29 + 8 | 0;
     HEAP32[i34 + 4 >> 2] = i27 + (HEAP32[i32 >> 2] | 0);
     __ZN7WebCore16IDBLevelDBCoding9encodeIntEx(i23, i55, i56);
     __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i30, i34, i23);
     i27 = i23 + 8 | 0;
     if ((HEAP32[i27 >> 2] | 0) != 0) {
      HEAP32[i27 >> 2] = 0;
     }
     i27 = i23 | 0;
     i61 = HEAP32[i27 >> 2] | 0;
     if ((i61 | 0) == 0) {
      i62 = i56;
      i63 = i55;
      i64 = i52;
      i65 = i32;
      break;
     }
     HEAP32[i27 >> 2] = 0;
     HEAP32[i23 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i61);
     i62 = i56;
     i63 = i55;
     i64 = i52;
     i65 = i32;
    } else {
     i32 = 0;
     do {
      if ((i58 | 0) < (i32 | 0) | (i58 | 0) == (i32 | 0) & i59 >>> 0 < 1 >>> 0) {
       i52 = HEAP32[i3 >> 2] | 0;
       HEAP32[i35 >> 2] = i52;
       HEAP32[i35 + 4 >> 2] = i52 + (HEAP32[i54 >> 2] | 0);
       __ZN7WebCore16IDBLevelDBCoding9encodeIntEx(i22, 1, 0);
       __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i30, i35, i22);
       i52 = i22 + 8 | 0;
       if ((HEAP32[i52 >> 2] | 0) != 0) {
        HEAP32[i52 >> 2] = 0;
       }
       i52 = i22 | 0;
       i55 = HEAP32[i52 >> 2] | 0;
       if ((i55 | 0) != 0) {
        HEAP32[i52 >> 2] = 0;
        HEAP32[i22 + 4 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i55);
       }
       __ZN7WebCore16IDBLevelDBCoding15DatabaseNameKey21encodeMinKeyForOriginERKN3WTF6StringE(i36, i2);
       __ZN7WebCore16IDBLevelDBCoding15DatabaseNameKey22encodeStopKeyForOriginERKN3WTF6StringE(i37, i2);
       __ZN7WebCore15LevelDBDatabase14createIteratorEPKNS_15LevelDBSnapshotE(i38, i4, 0);
       i55 = i38 | 0;
       i52 = HEAP32[i55 >> 2] | 0;
       HEAP32[i55 >> 2] = 0;
       i55 = HEAP32[(HEAP32[i52 >> 2] | 0) + 16 >> 2] | 0;
       i56 = i36 | 0;
       i61 = HEAP32[i56 >> 2] | 0;
       HEAP32[i39 >> 2] = i61;
       i27 = i36 + 8 | 0;
       HEAP32[i39 + 4 >> 2] = i61 + (HEAP32[i27 >> 2] | 0);
       FUNCTION_TABLE_vii[i55 & 31](i52, i39);
       i55 = i52;
       L51 : do {
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i55 >> 2] | 0) + 8 >> 2] & 31](i52) | 0) {
         i61 = i52;
         i60 = i41 | 0;
         i66 = i37 | 0;
         i67 = i41 + 4 | 0;
         i68 = i37 + 8 | 0;
         i69 = i18 | 0;
         i70 = i18 + 4 | 0;
         i71 = i18 + 8 | 0;
         i72 = i44 | 0;
         i73 = i43 | 0;
         i74 = i44 + 4 | 0;
         i75 = i43 + 8 | 0;
         i76 = i13 + 8 | 0;
         i77 = i13 | 0;
         i78 = i52;
         i79 = i43 + 4 | 0;
         i80 = i13 + 4 | 0;
         while (1) {
          FUNCTION_TABLE_vii[HEAP32[(HEAP32[i61 >> 2] | 0) + 28 >> 2] & 31](i40, i52);
          i81 = HEAP32[i66 >> 2] | 0;
          HEAP32[i60 >> 2] = i81;
          HEAP32[i67 >> 2] = i81 + (HEAP32[i68 >> 2] | 0);
          if ((__ZN7WebCore16IDBLevelDBCoding7compareERKNS_12LevelDBSliceES3_b(i40, i41, 0) | 0) >= 0) {
           break L51;
          }
          HEAP8[i31] = 0;
          FUNCTION_TABLE_vii[HEAP32[(HEAP32[i61 >> 2] | 0) + 28 >> 2] & 31](i42, i52);
          HEAP32[i69 >> 2] = 0;
          HEAP32[i70 >> 2] = 0;
          HEAP32[i71 >> 2] = 0;
          do {
           if (__ZN7WebCore18LevelDBTransaction7safeGetERKNS_12LevelDBSliceERN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEERb(i30, i42, i18, i31) | 0) {
            if ((HEAP8[i31] & 1) == 0) {
             i82 = 1;
             i83 = 0;
             i84 = 0;
             break;
            }
            i81 = HEAP32[i69 >> 2] | 0;
            i85 = __ZN7WebCore16IDBLevelDBCoding9decodeIntEPKcS2_(i81, i81 + (HEAP32[i71 >> 2] | 0) | 0) | 0;
            i82 = 1;
            i83 = tempRet0;
            i84 = i85;
           } else {
            i82 = 0;
            i83 = 0;
            i84 = 0;
           }
          } while (0);
          if ((HEAP32[i71 >> 2] | 0) != 0) {
           HEAP32[i71 >> 2] = 0;
          }
          i85 = HEAP32[i69 >> 2] | 0;
          if ((i85 | 0) != 0) {
           HEAP32[i69 >> 2] = 0;
           HEAP32[i70 >> 2] = 0;
           __ZN3WTF8fastFreeEPv(i85);
          }
          if (!i82) {
           i86 = 46;
           break;
          }
          if ((HEAP8[i31] & 1) == 0) {
           i86 = 67;
           break;
          }
          __ZN7WebCore16IDBLevelDBCoding19DatabaseMetaDataKey6encodeExNS1_12MetaDataTypeE(i43, i84, i83, 4);
          i85 = HEAP32[i73 >> 2] | 0;
          HEAP32[i72 >> 2] = i85;
          HEAP32[i74 >> 2] = i85 + (HEAP32[i75 >> 2] | 0);
          __ZN7WebCore16IDBLevelDBCoding12encodeVarIntEx(i13, 0, 0);
          __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i30, i44, i13);
          if ((HEAP32[i76 >> 2] | 0) != 0) {
           HEAP32[i76 >> 2] = 0;
          }
          i85 = HEAP32[i77 >> 2] | 0;
          if ((i85 | 0) != 0) {
           HEAP32[i77 >> 2] = 0;
           HEAP32[i80 >> 2] = 0;
           __ZN3WTF8fastFreeEPv(i85);
          }
          if ((HEAP32[i75 >> 2] | 0) != 0) {
           HEAP32[i75 >> 2] = 0;
          }
          i85 = HEAP32[i73 >> 2] | 0;
          if ((i85 | 0) != 0) {
           HEAP32[i73 >> 2] = 0;
           HEAP32[i79 >> 2] = 0;
           __ZN3WTF8fastFreeEPv(i85);
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i78 >> 2] | 0) + 20 >> 2] & 31](i52);
          if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i55 >> 2] | 0) + 8 >> 2] & 31](i52) | 0)) {
           break L51;
          }
         }
         if ((i86 | 0) == 46) {
          __ZN3WTF6String6formatEPKcz(i16, H_BASE + 24 | 0, (i87 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i87 >> 2] = H_BASE + 88, i87) | 0);
          STACKTOP = i87;
          __ZNK3WTF6String4utf8ENS_14ConversionModeE(i17, i16, 0);
          i79 = i17 | 0;
          i73 = HEAP32[i79 >> 2] | 0;
          if ((i73 | 0) == 0) {
           i88 = 0;
          } else {
           i88 = i73 + 8 | 0;
          }
          __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i88, 11, 22);
          i73 = HEAP32[i79 >> 2] | 0;
          do {
           if ((i73 | 0) != 0) {
            i79 = i73 | 0;
            i75 = (HEAP32[i79 >> 2] | 0) - 1 | 0;
            if ((i75 | 0) == 0) {
             __ZN3WTF8fastFreeEPv(i73);
             break;
            } else {
             HEAP32[i79 >> 2] = i75;
             break;
            }
           }
          } while (0);
          i73 = HEAP32[i16 >> 2] | 0;
          do {
           if ((i73 | 0) != 0) {
            i75 = i73 | 0;
            i79 = (HEAP32[i75 >> 2] | 0) - 2 | 0;
            if ((i79 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i73);
             break;
            } else {
             HEAP32[i75 >> 2] = i79;
             break;
            }
           }
          } while (0);
          if ((i52 | 0) != 0) {
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i78 >> 2] | 0) + 4 >> 2] & 31](i52);
          }
          if ((HEAP32[i68 >> 2] | 0) != 0) {
           HEAP32[i68 >> 2] = 0;
          }
          i73 = HEAP32[i66 >> 2] | 0;
          if ((i73 | 0) != 0) {
           HEAP32[i66 >> 2] = 0;
           HEAP32[i37 + 4 >> 2] = 0;
           __ZN3WTF8fastFreeEPv(i73);
          }
          if ((HEAP32[i27 >> 2] | 0) != 0) {
           HEAP32[i27 >> 2] = 0;
          }
          i73 = HEAP32[i56 >> 2] | 0;
          if ((i73 | 0) == 0) {
           i89 = 0;
           break L14;
          }
          HEAP32[i56 >> 2] = 0;
          HEAP32[i36 + 4 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i73);
          i89 = 0;
          break L14;
         } else if ((i86 | 0) == 67) {
          __ZN3WTF6String6formatEPKcz(i14, H_BASE + 24 | 0, (i87 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i87 >> 2] = H_BASE + 72, i87) | 0);
          STACKTOP = i87;
          __ZNK3WTF6String4utf8ENS_14ConversionModeE(i15, i14, 0);
          i73 = i15 | 0;
          i79 = HEAP32[i73 >> 2] | 0;
          if ((i79 | 0) == 0) {
           i90 = 0;
          } else {
           i90 = i79 + 8 | 0;
          }
          __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i90, 11, 22);
          i79 = HEAP32[i73 >> 2] | 0;
          do {
           if ((i79 | 0) != 0) {
            i73 = i79 | 0;
            i75 = (HEAP32[i73 >> 2] | 0) - 1 | 0;
            if ((i75 | 0) == 0) {
             __ZN3WTF8fastFreeEPv(i79);
             break;
            } else {
             HEAP32[i73 >> 2] = i75;
             break;
            }
           }
          } while (0);
          i79 = HEAP32[i14 >> 2] | 0;
          do {
           if ((i79 | 0) != 0) {
            i75 = i79 | 0;
            i73 = (HEAP32[i75 >> 2] | 0) - 2 | 0;
            if ((i73 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i79);
             break;
            } else {
             HEAP32[i75 >> 2] = i73;
             break;
            }
           }
          } while (0);
          if ((i52 | 0) != 0) {
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i78 >> 2] | 0) + 4 >> 2] & 31](i52);
          }
          if ((HEAP32[i68 >> 2] | 0) != 0) {
           HEAP32[i68 >> 2] = 0;
          }
          i79 = HEAP32[i66 >> 2] | 0;
          if ((i79 | 0) != 0) {
           HEAP32[i66 >> 2] = 0;
           HEAP32[i37 + 4 >> 2] = 0;
           __ZN3WTF8fastFreeEPv(i79);
          }
          if ((HEAP32[i27 >> 2] | 0) != 0) {
           HEAP32[i27 >> 2] = 0;
          }
          i79 = HEAP32[i56 >> 2] | 0;
          if ((i79 | 0) == 0) {
           i89 = 0;
           break L14;
          }
          HEAP32[i56 >> 2] = 0;
          HEAP32[i36 + 4 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i79);
          i89 = 0;
          break L14;
         }
        }
       } while (0);
       if ((i52 | 0) != 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i52 >> 2] | 0) + 4 >> 2] & 31](i52);
       }
       i55 = i37 + 8 | 0;
       if ((HEAP32[i55 >> 2] | 0) != 0) {
        HEAP32[i55 >> 2] = 0;
       }
       i55 = i37 | 0;
       i79 = HEAP32[i55 >> 2] | 0;
       if ((i79 | 0) != 0) {
        HEAP32[i55 >> 2] = 0;
        HEAP32[i37 + 4 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i79);
       }
       if ((HEAP32[i27 >> 2] | 0) != 0) {
        HEAP32[i27 >> 2] = 0;
       }
       i79 = HEAP32[i56 >> 2] | 0;
       if ((i79 | 0) == 0) {
        break;
       }
       HEAP32[i56 >> 2] = 0;
       HEAP32[i36 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i79);
      } else {
       i79 = 0;
       if ((i58 | 0) < (i79 | 0) | (i58 | 0) == (i79 | 0) & i59 >>> 0 < 2 >>> 0) {
        break;
       }
       i62 = 0;
       i63 = 0;
       i64 = i29 | 0;
       i65 = i29 + 8 | 0;
       break L30;
      }
     } while (0);
     i32 = HEAP32[i3 >> 2] | 0;
     HEAP32[i45 >> 2] = i32;
     HEAP32[i45 + 4 >> 2] = i32 + (HEAP32[i54 >> 2] | 0);
     __ZN7WebCore16IDBLevelDBCoding9encodeIntEx(i12, 2, 0);
     __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i30, i45, i12);
     i32 = i12 + 8 | 0;
     if ((HEAP32[i32 >> 2] | 0) != 0) {
      HEAP32[i32 >> 2] = 0;
     }
     i32 = i12 | 0;
     i79 = HEAP32[i32 >> 2] | 0;
     if ((i79 | 0) != 0) {
      HEAP32[i32 >> 2] = 0;
      HEAP32[i12 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i79);
     }
     i79 = __ZN7WebCore21SerializedScriptValue17wireFormatVersionEv() | 0;
     i32 = 0;
     i55 = i29 | 0;
     i73 = HEAP32[i55 >> 2] | 0;
     HEAP32[i46 >> 2] = i73;
     i75 = i29 + 8 | 0;
     HEAP32[i46 + 4 >> 2] = i73 + (HEAP32[i75 >> 2] | 0);
     __ZN7WebCore16IDBLevelDBCoding9encodeIntEx(i11, i79, i32);
     __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i30, i46, i11);
     i73 = i11 + 8 | 0;
     if ((HEAP32[i73 >> 2] | 0) != 0) {
      HEAP32[i73 >> 2] = 0;
     }
     i73 = i11 | 0;
     i80 = HEAP32[i73 >> 2] | 0;
     if ((i80 | 0) == 0) {
      i62 = i32;
      i63 = i79;
      i64 = i55;
      i65 = i75;
      break;
     }
     HEAP32[i73 >> 2] = 0;
     HEAP32[i11 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i80);
     i62 = i32;
     i63 = i79;
     i64 = i55;
     i65 = i75;
    }
   } while (0);
   HEAP8[i31] = 0;
   i75 = HEAP32[i64 >> 2] | 0;
   HEAP32[i47 >> 2] = i75;
   HEAP32[i47 + 4 >> 2] = i75 + (HEAP32[i65 >> 2] | 0);
   i75 = i10 | 0;
   HEAP32[i75 >> 2] = 0;
   i55 = i10 + 4 | 0;
   HEAP32[i55 >> 2] = 0;
   i79 = i10 + 8 | 0;
   HEAP32[i79 >> 2] = 0;
   do {
    if (__ZN7WebCore18LevelDBTransaction7safeGetERKNS_12LevelDBSliceERN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEERb(i30, i47, i10, i31) | 0) {
     if ((HEAP8[i31] & 1) == 0) {
      i91 = 1;
      i92 = i62;
      i93 = i63;
      break;
     }
     i32 = HEAP32[i75 >> 2] | 0;
     i80 = __ZN7WebCore16IDBLevelDBCoding9decodeIntEPKcS2_(i32, i32 + (HEAP32[i79 >> 2] | 0) | 0) | 0;
     i91 = 1;
     i92 = tempRet0;
     i93 = i80;
    } else {
     i91 = 0;
     i92 = i62;
     i93 = i63;
    }
   } while (0);
   if ((HEAP32[i79 >> 2] | 0) != 0) {
    HEAP32[i79 >> 2] = 0;
   }
   i80 = HEAP32[i75 >> 2] | 0;
   if ((i80 | 0) != 0) {
    HEAP32[i75 >> 2] = 0;
    HEAP32[i55 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i80);
   }
   if (!i91) {
    __ZN3WTF6String6formatEPKcz(i8, H_BASE + 24 | 0, (i87 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i87 >> 2] = H_BASE + 88, i87) | 0);
    STACKTOP = i87;
    __ZNK3WTF6String4utf8ENS_14ConversionModeE(i9, i8, 0);
    i80 = i9 | 0;
    i32 = HEAP32[i80 >> 2] | 0;
    if ((i32 | 0) == 0) {
     i94 = 0;
    } else {
     i94 = i32 + 8 | 0;
    }
    __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i94, 11, 22);
    i32 = HEAP32[i80 >> 2] | 0;
    do {
     if ((i32 | 0) != 0) {
      i80 = i32 | 0;
      i73 = (HEAP32[i80 >> 2] | 0) - 1 | 0;
      if ((i73 | 0) == 0) {
       __ZN3WTF8fastFreeEPv(i32);
       break;
      } else {
       HEAP32[i80 >> 2] = i73;
       break;
      }
     }
    } while (0);
    i32 = HEAP32[i8 >> 2] | 0;
    if ((i32 | 0) == 0) {
     i89 = 0;
     break;
    }
    i55 = i32 | 0;
    i75 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
    if ((i75 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i32);
     i89 = 0;
     break;
    } else {
     HEAP32[i55 >> 2] = i75;
     i89 = 0;
     break;
    }
   }
   if ((HEAP8[i31] & 1) == 0) {
    __ZN3WTF6String6formatEPKcz(i6, H_BASE + 24 | 0, (i87 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i87 >> 2] = H_BASE + 72, i87) | 0);
    STACKTOP = i87;
    __ZNK3WTF6String4utf8ENS_14ConversionModeE(i7, i6, 0);
    i75 = i7 | 0;
    i55 = HEAP32[i75 >> 2] | 0;
    if ((i55 | 0) == 0) {
     i95 = 0;
    } else {
     i95 = i55 + 8 | 0;
    }
    __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i95, 11, 22);
    i55 = HEAP32[i75 >> 2] | 0;
    do {
     if ((i55 | 0) != 0) {
      i75 = i55 | 0;
      i32 = (HEAP32[i75 >> 2] | 0) - 1 | 0;
      if ((i32 | 0) == 0) {
       __ZN3WTF8fastFreeEPv(i55);
       break;
      } else {
       HEAP32[i75 >> 2] = i32;
       break;
      }
     }
    } while (0);
    i55 = HEAP32[i6 >> 2] | 0;
    if ((i55 | 0) == 0) {
     i89 = 0;
     break;
    }
    i32 = i55 | 0;
    i75 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
    if ((i75 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i55);
     i89 = 0;
     break;
    } else {
     HEAP32[i32 >> 2] = i75;
     i89 = 0;
     break;
    }
   }
   i75 = i53;
   i32 = 0;
   do {
    if ((i92 | 0) < (i32 | 0) | (i92 | 0) == (i32 | 0) & i93 >>> 0 < i75 >>> 0) {
     i55 = HEAP32[i64 >> 2] | 0;
     HEAP32[i48 >> 2] = i55;
     HEAP32[i48 + 4 >> 2] = i55 + (HEAP32[i65 >> 2] | 0);
     __ZN7WebCore16IDBLevelDBCoding9encodeIntEx(i19, i75, i32);
     __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i30, i48, i19);
     i55 = i19 + 8 | 0;
     if ((HEAP32[i55 >> 2] | 0) != 0) {
      HEAP32[i55 >> 2] = 0;
     }
     i55 = i19 | 0;
     i79 = HEAP32[i55 >> 2] | 0;
     if ((i79 | 0) == 0) {
      break;
     }
     HEAP32[i55 >> 2] = 0;
     HEAP32[i19 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i79);
    }
   } while (0);
   if (__ZN7WebCore18LevelDBTransaction6commitEv(i30) | 0) {
    i89 = 1;
    break;
   }
   __ZN3WTF6String6formatEPKcz(i20, H_BASE + 24 | 0, (i87 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i87 >> 2] = H_BASE + 64, i87) | 0);
   STACKTOP = i87;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i21, i20, 0);
   i32 = i21 | 0;
   i75 = HEAP32[i32 >> 2] | 0;
   if ((i75 | 0) == 0) {
    i96 = 0;
   } else {
    i96 = i75 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i96, 11, 22);
   i75 = HEAP32[i32 >> 2] | 0;
   do {
    if ((i75 | 0) != 0) {
     i32 = i75 | 0;
     i79 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     if ((i79 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i75);
      break;
     } else {
      HEAP32[i32 >> 2] = i79;
      break;
     }
    }
   } while (0);
   i75 = HEAP32[i20 >> 2] | 0;
   if ((i75 | 0) == 0) {
    i89 = 0;
    break;
   }
   i79 = i75 | 0;
   i32 = (HEAP32[i79 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i75);
    i89 = 0;
    break;
   } else {
    HEAP32[i79 >> 2] = i32;
    i89 = 0;
    break;
   }
  } else {
   __ZN3WTF6String6formatEPKcz(i25, H_BASE + 24 | 0, (i87 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i87 >> 2] = H_BASE + 88, i87) | 0);
   STACKTOP = i87;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i26, i25, 0);
   i32 = i26 | 0;
   i79 = HEAP32[i32 >> 2] | 0;
   if ((i79 | 0) == 0) {
    i97 = 0;
   } else {
    i97 = i79 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i97, 11, 22);
   i79 = HEAP32[i32 >> 2] | 0;
   do {
    if ((i79 | 0) != 0) {
     i32 = i79 | 0;
     i75 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     if ((i75 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i79);
      break;
     } else {
      HEAP32[i32 >> 2] = i75;
      break;
     }
    }
   } while (0);
   i79 = HEAP32[i25 >> 2] | 0;
   if ((i79 | 0) == 0) {
    i89 = 0;
    break;
   }
   i75 = i79 | 0;
   i32 = (HEAP32[i75 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i79);
    i89 = 0;
    break;
   } else {
    HEAP32[i75 >> 2] = i32;
    i89 = 0;
    break;
   }
  }
 } while (0);
 do {
  if ((i30 | 0) != 0) {
   i25 = i30 | 0;
   i97 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i97 | 0) == 0) {
    __ZN7WebCore18LevelDBTransactionD1Ev(i30);
    __ZN3WTF8fastFreeEPv(i30);
    break;
   } else {
    HEAP32[i25 >> 2] = i97;
    break;
   }
  }
 } while (0);
 i30 = i29 + 8 | 0;
 if ((HEAP32[i30 >> 2] | 0) != 0) {
  HEAP32[i30 >> 2] = 0;
 }
 i30 = i29 | 0;
 i97 = HEAP32[i30 >> 2] | 0;
 if ((i97 | 0) != 0) {
  HEAP32[i30 >> 2] = 0;
  HEAP32[i29 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i97);
 }
 if ((HEAP32[i54 >> 2] | 0) != 0) {
  HEAP32[i54 >> 2] = 0;
 }
 i54 = HEAP32[i3 >> 2] | 0;
 if ((i54 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i28 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i54);
 }
 i54 = i1 | 0;
 if (i89) {
  HEAP32[i54 >> 2] = i50;
  STACKTOP = i5;
  return;
 }
 HEAP32[i54 >> 2] = 0;
 if ((i49 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i54 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
 if ((i54 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i49 >> 2] | 0) + 4 >> 2] & 31](i50);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i51 >> 2] = i54;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore22IDBBackingStoreLevelDB10getIndexesExxPN3WTF7HashMapIxNS_16IDBIndexMetadataENS1_7IntHashIyEENS1_10HashTraitsIxEENS6_IS3_EEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 312 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = i7 + 64 | 0;
 i16 = i7 + 80 | 0;
 i17 = i7 + 88 | 0;
 i18 = i7 + 96 | 0;
 i19 = i7 + 104 | 0;
 i20 = i7 + 112 | 0;
 i21 = i7 + 120 | 0;
 i22 = i7 + 128 | 0;
 i23 = i7 + 152 | 0;
 i24 = i7 + 160 | 0;
 i25 = i7 + 168 | 0;
 i26 = i7 + 176 | 0;
 i27 = i7 + 184 | 0;
 i28 = i7 + 192 | 0;
 i29 = i7 + 200 | 0;
 i30 = i7 + 224 | 0;
 i31 = i7 + 232 | 0;
 i32 = i7 + 240 | 0;
 i33 = i7 + 248 | 0;
 i34 = i7 + 256 | 0;
 i35 = i7 + 296 | 0;
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix17isValidDatabaseIdEx(i2, i3) | 0)) {
  i36 = 0;
  STACKTOP = i7;
  return i36 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix20isValidObjectStoreIdEx(i4, i5) | 0)) {
  i36 = 0;
  STACKTOP = i7;
  return i36 | 0;
 }
 __ZN7WebCore16IDBLevelDBCoding16IndexMetaDataKey6encodeExxxh(i14, i2, i3, i4, i5, 0, 0, 0);
 i37 = _i64Add(i4, i5, 1, 0) | 0;
 __ZN7WebCore16IDBLevelDBCoding16IndexMetaDataKey6encodeExxxh(i15, i2, i3, i37, tempRet0, 0, 0, 0);
 __ZN7WebCore15LevelDBDatabase14createIteratorEPKNS_15LevelDBSnapshotE(i16, HEAP32[i1 + 12 >> 2] | 0, 0);
 i1 = i16 | 0;
 i16 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = HEAP32[(HEAP32[i16 >> 2] | 0) + 16 >> 2] | 0;
 i37 = i14 | 0;
 i3 = HEAP32[i37 >> 2] | 0;
 HEAP32[i17 >> 2] = i3;
 i2 = i14 + 8 | 0;
 HEAP32[i17 + 4 >> 2] = i3 + (HEAP32[i2 >> 2] | 0);
 FUNCTION_TABLE_vii[i1 & 31](i16, i17);
 i17 = i16;
 L7 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] & 31](i16) | 0) {
   i1 = i16;
   i3 = i19 | 0;
   i5 = i15 | 0;
   i4 = i19 + 4 | 0;
   i38 = i15 + 8 | 0;
   i39 = i20 | 0;
   i40 = i21 + 4 | 0;
   i41 = i22 + 16 | 0;
   i42 = i25 | 0;
   i43 = i26 + 4 | 0;
   i44 = i16;
   i45 = i27 | 0;
   i46 = i28 + 4 | 0;
   i47 = i30 | 0;
   i48 = i31 + 4 | 0;
   i49 = i32 | 0;
   i50 = i33 + 4 | 0;
   i51 = i34 | 0;
   i52 = i24 | 0;
   i53 = i34 + 8 | 0;
   i54 = i34 + 16 | 0;
   i55 = i29 | 0;
   i56 = i34 + 20 | 0;
   i57 = i29 + 4 | 0;
   i58 = i29 + 12 | 0;
   i59 = i29 + 16 | 0;
   i60 = i34 + 24 | 0;
   i61 = i34 + 28 | 0;
   i62 = i34 + 32 | 0;
   i63 = i34 + 36 | 0;
   i64 = i34 + 37 | 0;
   i65 = i6 | 0;
   i66 = i35 + 8 | 0;
   i67 = i35 | 0;
   i68 = i29 + 8 | 0;
   i69 = i9 | 0;
   i70 = i8 | 0;
   i71 = i11 | 0;
   i72 = i10 | 0;
   i73 = i13 | 0;
   i74 = i12 | 0;
   L9 : while (1) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 31](i18, i16);
    i75 = HEAP32[i5 >> 2] | 0;
    HEAP32[i3 >> 2] = i75;
    HEAP32[i4 >> 2] = i75 + (HEAP32[i38 >> 2] | 0);
    if ((__ZN7WebCore16IDBLevelDBCoding7compareERKNS_12LevelDBSliceES3_b(i18, i19, 0) | 0) >= 0) {
     i76 = i44;
     i77 = 86;
     break L7;
    }
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 31](i20, i16);
    i75 = HEAP32[i39 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 31](i21, i16);
    i78 = HEAP32[i40 >> 2] | 0;
    __ZN7WebCore16IDBLevelDBCoding16IndexMetaDataKeyC1Ev(i22);
    __ZN7WebCore16IDBLevelDBCoding16IndexMetaDataKey6decodeEPKcS3_PS1_(i75, i78, i22) | 0;
    if ((HEAP8[i41] | 0) == 0) {
     i78 = __ZNK7WebCore16IDBLevelDBCoding16IndexMetaDataKey7indexIdEv(i22) | 0;
     i75 = tempRet0;
     HEAP32[i23 >> 2] = i78;
     HEAP32[i23 + 4 >> 2] = i75;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 31](i25, i16);
     i79 = HEAP32[i42 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 31](i26, i16);
     __ZN7WebCore16IDBLevelDBCoding12decodeStringEPKcS2_(i24, i79, HEAP32[i43 >> 2] | 0);
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i44 >> 2] | 0) + 20 >> 2] & 31](i16);
     do {
      if (__ZN7WebCoreL24checkIndexAndMetaDataKeyEPKNS_15LevelDBIteratorERKN3WTF6VectorIcLj0ENS3_15CrashOnOverflowEEExh(i16, i15, i78, i75, 1) | 0) {
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 31](i27, i16);
       i79 = HEAP32[i45 >> 2] | 0;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 31](i28, i16);
       i80 = __ZN7WebCore16IDBLevelDBCoding10decodeBoolEPKcS2_(i79, HEAP32[i46 >> 2] | 0) | 0;
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i44 >> 2] | 0) + 20 >> 2] & 31](i16);
       if (!(__ZN7WebCoreL24checkIndexAndMetaDataKeyEPKNS_15LevelDBIteratorERKN3WTF6VectorIcLj0ENS3_15CrashOnOverflowEEExh(i16, i15, i78, i75, 2) | 0)) {
        __ZN3WTF6String6formatEPKcz(i8, H_BASE + 24 | 0, (i81 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i81 >> 2] = H_BASE + 72, i81) | 0);
        STACKTOP = i81;
        __ZNK3WTF6String4utf8ENS_14ConversionModeE(i9, i8, 0);
        i79 = HEAP32[i69 >> 2] | 0;
        if ((i79 | 0) == 0) {
         i82 = 0;
        } else {
         i82 = i79 + 8 | 0;
        }
        __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i82, 5, 22);
        i79 = HEAP32[i69 >> 2] | 0;
        do {
         if ((i79 | 0) != 0) {
          i83 = i79 | 0;
          i84 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
          if ((i84 | 0) == 0) {
           __ZN3WTF8fastFreeEPv(i79);
           break;
          } else {
           HEAP32[i83 >> 2] = i84;
           break;
          }
         }
        } while (0);
        i79 = HEAP32[i70 >> 2] | 0;
        if ((i79 | 0) == 0) {
         i85 = 3;
         break;
        }
        i84 = i79 | 0;
        i83 = (HEAP32[i84 >> 2] | 0) - 2 | 0;
        if ((i83 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i79);
         i85 = 3;
         break;
        } else {
         HEAP32[i84 >> 2] = i83;
         i85 = 3;
         break;
        }
       }
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 31](i30, i16);
       i83 = HEAP32[i47 >> 2] | 0;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 31](i31, i16);
       __ZN7WebCore16IDBLevelDBCoding16decodeIDBKeyPathEPKcS2_(i29, i83, HEAP32[i48 >> 2] | 0);
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i44 >> 2] | 0) + 20 >> 2] & 31](i16);
       if (__ZN7WebCoreL24checkIndexAndMetaDataKeyEPKNS_15LevelDBIteratorERKN3WTF6VectorIcLj0ENS3_15CrashOnOverflowEEExh(i16, i15, i78, i75, 3) | 0) {
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 31](i32, i16);
        i83 = HEAP32[i49 >> 2] | 0;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 31](i33, i16);
        i84 = __ZN7WebCore16IDBLevelDBCoding10decodeBoolEPKcS2_(i83, HEAP32[i50 >> 2] | 0) | 0;
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i44 >> 2] | 0) + 20 >> 2] & 31](i16);
        i86 = i84 & 1;
       } else {
        i86 = 0;
       }
       i84 = HEAP32[i52 >> 2] | 0;
       HEAP32[i51 >> 2] = i84;
       if ((i84 | 0) != 0) {
        i83 = i84 | 0;
        HEAP32[i83 >> 2] = (HEAP32[i83 >> 2] | 0) + 2;
       }
       HEAP32[i53 >> 2] = i78;
       HEAP32[i53 + 4 >> 2] = i75;
       HEAP32[i54 >> 2] = HEAP32[i55 >> 2];
       i83 = HEAP32[i57 >> 2] | 0;
       HEAP32[i56 >> 2] = i83;
       if ((i83 | 0) != 0) {
        i84 = i83 | 0;
        HEAP32[i84 >> 2] = (HEAP32[i84 >> 2] | 0) + 2;
       }
       i84 = HEAP32[i58 >> 2] | 0;
       i83 = HEAP32[i59 >> 2] | 0;
       HEAP32[i60 >> 2] = 0;
       HEAP32[i61 >> 2] = 0;
       HEAP32[i62 >> 2] = i83;
       do {
        if ((i84 | 0) != 0) {
         if (i84 >>> 0 > 1073741823 >>> 0) {
          break L9;
         }
         i83 = __ZN3WTF18fastMallocGoodSizeEj(i84 << 2) | 0;
         HEAP32[i61 >> 2] = i83 >>> 2;
         i79 = __ZN3WTF10fastMallocEj(i83) | 0;
         i83 = i79;
         HEAP32[i60 >> 2] = i83;
         if ((i79 | 0) == 0) {
          break;
         }
         i79 = HEAP32[i68 >> 2] | 0;
         i87 = HEAP32[i59 >> 2] | 0;
         i88 = i79 + (i87 << 2) | 0;
         if ((i87 | 0) == 0) {
          break;
         } else {
          i89 = i79;
          i90 = i83;
         }
         while (1) {
          i83 = HEAP32[i89 >> 2] | 0;
          HEAP32[i90 >> 2] = i83;
          if ((i83 | 0) != 0) {
           i79 = i83 | 0;
           HEAP32[i79 >> 2] = (HEAP32[i79 >> 2] | 0) + 2;
          }
          i79 = i89 + 4 | 0;
          if ((i79 | 0) == (i88 | 0)) {
           break;
          } else {
           i89 = i79;
           i90 = i90 + 4 | 0;
          }
         }
        }
       } while (0);
       HEAP8[i63] = i80 & 1;
       HEAP8[i64] = i86;
       __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKxS3_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i35, i65, i23, i34);
       if ((HEAP8[i66] & 1) == 0) {
        i84 = HEAP32[i67 >> 2] | 0;
        i88 = HEAP32[i51 >> 2] | 0;
        HEAP32[i51 >> 2] = 0;
        i79 = i84 + 8 | 0;
        i83 = HEAP32[i79 >> 2] | 0;
        HEAP32[i79 >> 2] = i88;
        do {
         if ((i83 | 0) != 0) {
          i88 = i83 | 0;
          i79 = (HEAP32[i88 >> 2] | 0) - 2 | 0;
          if ((i79 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i83);
           break;
          } else {
           HEAP32[i88 >> 2] = i79;
           break;
          }
         }
        } while (0);
        i83 = HEAP32[i53 + 4 >> 2] | 0;
        i80 = i84 + 16 | 0;
        HEAP32[i80 >> 2] = HEAP32[i53 >> 2];
        HEAP32[i80 + 4 >> 2] = i83;
        HEAP32[i84 + 24 >> 2] = HEAP32[i54 >> 2];
        i83 = HEAP32[i56 >> 2] | 0;
        HEAP32[i56 >> 2] = 0;
        i80 = i84 + 28 | 0;
        i79 = HEAP32[i80 >> 2] | 0;
        HEAP32[i80 >> 2] = i83;
        do {
         if ((i79 | 0) != 0) {
          i83 = i79 | 0;
          i80 = (HEAP32[i83 >> 2] | 0) - 2 | 0;
          if ((i80 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i79);
           break;
          } else {
           HEAP32[i83 >> 2] = i80;
           break;
          }
         }
        } while (0);
        i79 = i84 + 40 | 0;
        i80 = HEAP32[i79 >> 2] | 0;
        HEAP32[i79 >> 2] = HEAP32[i62 >> 2];
        HEAP32[i62 >> 2] = i80;
        i80 = i84 + 32 | 0;
        i79 = HEAP32[i80 >> 2] | 0;
        HEAP32[i80 >> 2] = HEAP32[i60 >> 2];
        HEAP32[i60 >> 2] = i79;
        i79 = i84 + 36 | 0;
        i80 = HEAP32[i79 >> 2] | 0;
        HEAP32[i79 >> 2] = HEAP32[i61 >> 2];
        HEAP32[i61 >> 2] = i80;
        HEAP8[i84 + 44 | 0] = HEAP8[i63] & 1;
        HEAP8[i84 + 45 | 0] = HEAP8[i64] & 1;
       }
       __ZN7WebCore16IDBIndexMetadataD1Ev(i34);
       i80 = HEAP32[i59 >> 2] | 0;
       if ((i80 | 0) != 0) {
        i79 = HEAP32[i68 >> 2] | 0;
        i83 = i79 + (i80 << 2) | 0;
        i80 = i79;
        while (1) {
         i79 = HEAP32[i80 >> 2] | 0;
         do {
          if ((i79 | 0) != 0) {
           i88 = i79 | 0;
           i87 = (HEAP32[i88 >> 2] | 0) - 2 | 0;
           if ((i87 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i79);
            break;
           } else {
            HEAP32[i88 >> 2] = i87;
            break;
           }
          }
         } while (0);
         i80 = i80 + 4 | 0;
         if ((i80 | 0) == (i83 | 0)) {
          break;
         }
        }
        HEAP32[i59 >> 2] = 0;
       }
       i83 = HEAP32[i68 >> 2] | 0;
       if ((i83 | 0) != 0) {
        HEAP32[i68 >> 2] = 0;
        HEAP32[i58 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i83);
       }
       i83 = HEAP32[i57 >> 2] | 0;
       if ((i83 | 0) == 0) {
        i85 = 0;
        break;
       }
       i80 = i83 | 0;
       i84 = (HEAP32[i80 >> 2] | 0) - 2 | 0;
       if ((i84 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i83);
        i85 = 0;
        break;
       } else {
        HEAP32[i80 >> 2] = i84;
        i85 = 0;
        break;
       }
      } else {
       __ZN3WTF6String6formatEPKcz(i10, H_BASE + 24 | 0, (i81 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i81 >> 2] = H_BASE + 72, i81) | 0);
       STACKTOP = i81;
       __ZNK3WTF6String4utf8ENS_14ConversionModeE(i11, i10, 0);
       i84 = HEAP32[i71 >> 2] | 0;
       if ((i84 | 0) == 0) {
        i91 = 0;
       } else {
        i91 = i84 + 8 | 0;
       }
       __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i91, 5, 22);
       i84 = HEAP32[i71 >> 2] | 0;
       do {
        if ((i84 | 0) != 0) {
         i80 = i84 | 0;
         i83 = (HEAP32[i80 >> 2] | 0) - 1 | 0;
         if ((i83 | 0) == 0) {
          __ZN3WTF8fastFreeEPv(i84);
          break;
         } else {
          HEAP32[i80 >> 2] = i83;
          break;
         }
        }
       } while (0);
       i84 = HEAP32[i72 >> 2] | 0;
       if ((i84 | 0) == 0) {
        i85 = 3;
        break;
       }
       i83 = i84 | 0;
       i80 = (HEAP32[i83 >> 2] | 0) - 2 | 0;
       if ((i80 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i84);
        i85 = 3;
        break;
       } else {
        HEAP32[i83 >> 2] = i80;
        i85 = 3;
        break;
       }
      }
     } while (0);
     i75 = HEAP32[i52 >> 2] | 0;
     do {
      if ((i75 | 0) != 0) {
       i78 = i75 | 0;
       i80 = (HEAP32[i78 >> 2] | 0) - 2 | 0;
       if ((i80 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i75);
        break;
       } else {
        HEAP32[i78 >> 2] = i80;
        break;
       }
      }
     } while (0);
     if ((i85 | 0) == 3) {
      i77 = 84;
      break L7;
     }
    } else {
     __ZN3WTF6String6formatEPKcz(i12, H_BASE + 24 | 0, (i81 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i81 >> 2] = H_BASE + 72, i81) | 0);
     STACKTOP = i81;
     __ZNK3WTF6String4utf8ENS_14ConversionModeE(i13, i12, 0);
     i75 = HEAP32[i73 >> 2] | 0;
     if ((i75 | 0) == 0) {
      i92 = 0;
     } else {
      i92 = i75 + 8 | 0;
     }
     __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i92, 5, 22);
     i75 = HEAP32[i73 >> 2] | 0;
     do {
      if ((i75 | 0) != 0) {
       i80 = i75 | 0;
       i78 = (HEAP32[i80 >> 2] | 0) - 1 | 0;
       if ((i78 | 0) == 0) {
        __ZN3WTF8fastFreeEPv(i75);
        break;
       } else {
        HEAP32[i80 >> 2] = i78;
        break;
       }
      }
     } while (0);
     i75 = HEAP32[i74 >> 2] | 0;
     do {
      if ((i75 | 0) != 0) {
       i78 = i75 | 0;
       i80 = (HEAP32[i78 >> 2] | 0) - 2 | 0;
       if ((i80 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i75);
        break;
       } else {
        HEAP32[i78 >> 2] = i80;
        break;
       }
      }
     } while (0);
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i44 >> 2] | 0) + 20 >> 2] & 31](i16);
    }
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] & 31](i16) | 0)) {
     i77 = 84;
     break L7;
    }
   }
   _WTFCrash();
   return 0;
  } else {
   i77 = 84;
  }
 } while (0);
 do {
  if ((i77 | 0) == 84) {
   if ((i16 | 0) == 0) {
    break;
   }
   i76 = i16;
   i77 = 86;
  }
 } while (0);
 if ((i77 | 0) == 86) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i76 >> 2] | 0) + 4 >> 2] & 31](i16);
 }
 i16 = i15 + 8 | 0;
 if ((HEAP32[i16 >> 2] | 0) != 0) {
  HEAP32[i16 >> 2] = 0;
 }
 i16 = i15 | 0;
 i76 = HEAP32[i16 >> 2] | 0;
 if ((i76 | 0) != 0) {
  HEAP32[i16 >> 2] = 0;
  HEAP32[i15 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i76);
 }
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i37 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i36 = 1;
  STACKTOP = i7;
  return i36 | 0;
 }
 HEAP32[i37 >> 2] = 0;
 HEAP32[i14 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i36 = 1;
 STACKTOP = i7;
 return i36 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB17createObjectStoreERNS_33IDBBackingStoreTransactionLevelDBExxRKN3WTF6StringERKNS_10IDBKeyPathEb(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 464 | 0;
 i10 = i1 | 0;
 i11 = i1 + 16 | 0;
 i12 = i1 + 32 | 0;
 i13 = i1 + 48 | 0;
 i14 = i1 + 64 | 0;
 i15 = i1 + 80 | 0;
 i16 = i1 + 96 | 0;
 i17 = i1 + 112 | 0;
 i18 = i1 + 128 | 0;
 i19 = i1 + 144 | 0;
 i20 = i1 + 160 | 0;
 i21 = i1 + 168 | 0;
 i22 = i1 + 176 | 0;
 i23 = i1 + 184 | 0;
 i24 = i1 + 192 | 0;
 i25 = i1 + 208 | 0;
 i26 = i1 + 216 | 0;
 i27 = i1 + 224 | 0;
 i28 = i1 + 240 | 0;
 i29 = i1 + 248 | 0;
 i30 = i1 + 264 | 0;
 i31 = i1 + 280 | 0;
 i32 = i1 + 296 | 0;
 i33 = i1 + 312 | 0;
 i34 = i1 + 328 | 0;
 i35 = i1 + 344 | 0;
 i36 = i1 + 360 | 0;
 i37 = i1 + 376 | 0;
 i38 = i1 + 392 | 0;
 i39 = i1 + 400 | 0;
 i40 = i1 + 408 | 0;
 i41 = i1 + 416 | 0;
 i42 = i1 + 424 | 0;
 i43 = i1 + 432 | 0;
 i44 = i1 + 440 | 0;
 i45 = i1 + 448 | 0;
 i46 = i1 + 456 | 0;
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix17isValidDatabaseIdEx(i3, i4) | 0)) {
  i47 = 0;
  STACKTOP = i1;
  return i47 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix20isValidObjectStoreIdEx(i5, i6) | 0)) {
  i47 = 0;
  STACKTOP = i1;
  return i47 | 0;
 }
 i48 = HEAP32[i2 + 20 >> 2] | 0;
 __ZN7WebCore16IDBLevelDBCoding19DatabaseMetaDataKey6encodeExNS1_12MetaDataTypeE(i27, i3, i4, 3);
 HEAP8[i25] = 0;
 i2 = i27 | 0;
 i49 = HEAP32[i2 >> 2] | 0;
 HEAP32[i26 >> 2] = i49;
 i50 = i27 + 8 | 0;
 HEAP32[i26 + 4 >> 2] = i49 + (HEAP32[i50 >> 2] | 0);
 i49 = i24 | 0;
 HEAP32[i49 >> 2] = 0;
 i51 = i24 + 4 | 0;
 HEAP32[i51 >> 2] = 0;
 i52 = i24 + 8 | 0;
 HEAP32[i52 >> 2] = 0;
 do {
  if (__ZN7WebCore18LevelDBTransaction7safeGetERKNS_12LevelDBSliceERN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEERb(i48, i26, i24, i25) | 0) {
   if ((HEAP8[i25] & 1) == 0) {
    i53 = 1;
    i54 = -1;
    i55 = -1;
    break;
   }
   i56 = HEAP32[i49 >> 2] | 0;
   i57 = __ZN7WebCore16IDBLevelDBCoding9decodeIntEPKcS2_(i56, i56 + (HEAP32[i52 >> 2] | 0) | 0) | 0;
   i53 = 1;
   i54 = tempRet0;
   i55 = i57;
  } else {
   i53 = 0;
   i54 = -1;
   i55 = -1;
  }
 } while (0);
 if ((HEAP32[i52 >> 2] | 0) != 0) {
  HEAP32[i52 >> 2] = 0;
 }
 i52 = HEAP32[i49 >> 2] | 0;
 if ((i52 | 0) != 0) {
  HEAP32[i49 >> 2] = 0;
  HEAP32[i51 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i52);
 }
 do {
  if (i53) {
   i52 = (HEAP8[i25] & 1) == 0;
   i51 = i52 ? 0 : i54;
   if ((i51 | 0) < (i6 | 0) | (i51 | 0) == (i6 | 0) & (i52 ? 0 : i55) >>> 0 < i5 >>> 0) {
    i52 = HEAP32[i2 >> 2] | 0;
    HEAP32[i28 >> 2] = i52;
    HEAP32[i28 + 4 >> 2] = i52 + (HEAP32[i50 >> 2] | 0);
    __ZN7WebCore16IDBLevelDBCoding9encodeIntEx(i19, i5, i6);
    __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i48, i28, i19);
    i52 = i19 + 8 | 0;
    if ((HEAP32[i52 >> 2] | 0) != 0) {
     HEAP32[i52 >> 2] = 0;
    }
    i52 = i19 | 0;
    i51 = HEAP32[i52 >> 2] | 0;
    if ((i51 | 0) == 0) {
     i58 = 1;
     break;
    }
    HEAP32[i52 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i51);
    i58 = 1;
    break;
   }
   __ZN3WTF6String6formatEPKcz(i20, H_BASE + 24 | 0, (i59 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i59 >> 2] = H_BASE + 72, i59) | 0);
   STACKTOP = i59;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i21, i20, 0);
   i51 = i21 | 0;
   i52 = HEAP32[i51 >> 2] | 0;
   if ((i52 | 0) == 0) {
    i60 = 0;
   } else {
    i60 = i52 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i60, 16, 22);
   i52 = HEAP32[i51 >> 2] | 0;
   do {
    if ((i52 | 0) != 0) {
     i51 = i52 | 0;
     i49 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
     if ((i49 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i52);
      break;
     } else {
      HEAP32[i51 >> 2] = i49;
      break;
     }
    }
   } while (0);
   i52 = HEAP32[i20 >> 2] | 0;
   if ((i52 | 0) == 0) {
    i58 = 0;
    break;
   }
   i49 = i52 | 0;
   i51 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
   if ((i51 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i52);
    i58 = 0;
    break;
   } else {
    HEAP32[i49 >> 2] = i51;
    i58 = 0;
    break;
   }
  } else {
   __ZN3WTF6String6formatEPKcz(i22, H_BASE + 24 | 0, (i59 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i59 >> 2] = H_BASE + 88, i59) | 0);
   STACKTOP = i59;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i23, i22, 0);
   i51 = i23 | 0;
   i49 = HEAP32[i51 >> 2] | 0;
   if ((i49 | 0) == 0) {
    i61 = 0;
   } else {
    i61 = i49 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i61, 16, 22);
   i49 = HEAP32[i51 >> 2] | 0;
   do {
    if ((i49 | 0) != 0) {
     i51 = i49 | 0;
     i52 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
     if ((i52 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i49);
      break;
     } else {
      HEAP32[i51 >> 2] = i52;
      break;
     }
    }
   } while (0);
   i49 = HEAP32[i22 >> 2] | 0;
   if ((i49 | 0) == 0) {
    i58 = 0;
    break;
   }
   i52 = i49 | 0;
   i51 = (HEAP32[i52 >> 2] | 0) - 2 | 0;
   if ((i51 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i49);
    i58 = 0;
    break;
   } else {
    HEAP32[i52 >> 2] = i51;
    i58 = 0;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i50 >> 2] | 0) != 0) {
  HEAP32[i50 >> 2] = 0;
 }
 i50 = HEAP32[i2 >> 2] | 0;
 if ((i50 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i27 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i50);
 }
 if (!i58) {
  i47 = 0;
  STACKTOP = i1;
  return i47 | 0;
 }
 __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey6encodeExxh(i29, i3, i4, i5, i6, 0);
 __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey6encodeExxh(i30, i3, i4, i5, i6, 1);
 __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey6encodeExxh(i31, i3, i4, i5, i6, 2);
 __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey6encodeExxh(i32, i3, i4, i5, i6, 3);
 __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey6encodeExxh(i33, i3, i4, i5, i6, 4);
 __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey6encodeExxh(i34, i3, i4, i5, i6, 5);
 __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey6encodeExxh(i35, i3, i4, i5, i6, 6);
 __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey6encodeExxh(i36, i3, i4, i5, i6, 7);
 __ZN7WebCore16IDBLevelDBCoding19ObjectStoreNamesKey6encodeExRKN3WTF6StringE(i37, i3, i4, i7);
 i4 = i29 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i38 >> 2] = i3;
 i58 = i29 + 8 | 0;
 HEAP32[i38 + 4 >> 2] = i3 + (HEAP32[i58 >> 2] | 0);
 __ZN7WebCore16IDBLevelDBCoding12encodeStringERKN3WTF6StringE(i18, i7);
 __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i48, i38, i18);
 i38 = i18 + 8 | 0;
 if ((HEAP32[i38 >> 2] | 0) != 0) {
  HEAP32[i38 >> 2] = 0;
 }
 i38 = i18 | 0;
 i7 = HEAP32[i38 >> 2] | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i38 >> 2] = 0;
  HEAP32[i18 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i7);
 }
 i7 = i30 | 0;
 i18 = HEAP32[i7 >> 2] | 0;
 HEAP32[i39 >> 2] = i18;
 i38 = i30 + 8 | 0;
 HEAP32[i39 + 4 >> 2] = i18 + (HEAP32[i38 >> 2] | 0);
 __ZN7WebCore16IDBLevelDBCoding16encodeIDBKeyPathERKNS_10IDBKeyPathE(i17, i8);
 __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i48, i39, i17);
 i39 = i17 + 8 | 0;
 if ((HEAP32[i39 >> 2] | 0) != 0) {
  HEAP32[i39 >> 2] = 0;
 }
 i39 = i17 | 0;
 i18 = HEAP32[i39 >> 2] | 0;
 if ((i18 | 0) != 0) {
  HEAP32[i39 >> 2] = 0;
  HEAP32[i17 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i18);
 }
 i18 = i31 | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 HEAP32[i40 >> 2] = i17;
 i39 = i31 + 8 | 0;
 HEAP32[i40 + 4 >> 2] = i17 + (HEAP32[i39 >> 2] | 0);
 __ZN7WebCore16IDBLevelDBCoding9encodeIntEx(i16, i9 & 1, 0);
 __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i48, i40, i16);
 i40 = i16 + 8 | 0;
 if ((HEAP32[i40 >> 2] | 0) != 0) {
  HEAP32[i40 >> 2] = 0;
 }
 i40 = i16 | 0;
 i9 = HEAP32[i40 >> 2] | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i40 >> 2] = 0;
  HEAP32[i16 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i9);
 }
 i9 = i32 | 0;
 i16 = HEAP32[i9 >> 2] | 0;
 HEAP32[i41 >> 2] = i16;
 i40 = i32 + 8 | 0;
 HEAP32[i41 + 4 >> 2] = i16 + (HEAP32[i40 >> 2] | 0);
 __ZN7WebCore16IDBLevelDBCoding9encodeIntEx(i15, 0, 0);
 __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i48, i41, i15);
 i41 = i15 + 8 | 0;
 if ((HEAP32[i41 >> 2] | 0) != 0) {
  HEAP32[i41 >> 2] = 0;
 }
 i41 = i15 | 0;
 i16 = HEAP32[i41 >> 2] | 0;
 if ((i16 | 0) != 0) {
  HEAP32[i41 >> 2] = 0;
  HEAP32[i15 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i16);
 }
 i16 = i33 | 0;
 i15 = HEAP32[i16 >> 2] | 0;
 HEAP32[i42 >> 2] = i15;
 i41 = i33 + 8 | 0;
 HEAP32[i42 + 4 >> 2] = i15 + (HEAP32[i41 >> 2] | 0);
 __ZN7WebCore16IDBLevelDBCoding9encodeIntEx(i14, 1, 0);
 __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i48, i42, i14);
 i42 = i14 + 8 | 0;
 if ((HEAP32[i42 >> 2] | 0) != 0) {
  HEAP32[i42 >> 2] = 0;
 }
 i42 = i14 | 0;
 i15 = HEAP32[i42 >> 2] | 0;
 if ((i15 | 0) != 0) {
  HEAP32[i42 >> 2] = 0;
  HEAP32[i14 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i15);
 }
 i15 = i34 | 0;
 i14 = HEAP32[i15 >> 2] | 0;
 HEAP32[i43 >> 2] = i14;
 i42 = i34 + 8 | 0;
 HEAP32[i43 + 4 >> 2] = i14 + (HEAP32[i42 >> 2] | 0);
 __ZN7WebCore16IDBLevelDBCoding9encodeIntEx(i13, 30, 0);
 __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i48, i43, i13);
 i43 = i13 + 8 | 0;
 if ((HEAP32[i43 >> 2] | 0) != 0) {
  HEAP32[i43 >> 2] = 0;
 }
 i43 = i13 | 0;
 i14 = HEAP32[i43 >> 2] | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i43 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i14);
 }
 i14 = i35 | 0;
 i13 = HEAP32[i14 >> 2] | 0;
 HEAP32[i44 >> 2] = i13;
 i43 = i35 + 8 | 0;
 HEAP32[i44 + 4 >> 2] = i13 + (HEAP32[i43 >> 2] | 0);
 __ZN7WebCore16IDBLevelDBCoding10encodeBoolEb(i12, (HEAP32[i8 >> 2] | 0) != 0);
 __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i48, i44, i12);
 i44 = i12 + 8 | 0;
 if ((HEAP32[i44 >> 2] | 0) != 0) {
  HEAP32[i44 >> 2] = 0;
 }
 i44 = i12 | 0;
 i8 = HEAP32[i44 >> 2] | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i44 >> 2] = 0;
  HEAP32[i12 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = i36 | 0;
 i12 = HEAP32[i8 >> 2] | 0;
 HEAP32[i45 >> 2] = i12;
 i44 = i36 + 8 | 0;
 HEAP32[i45 + 4 >> 2] = i12 + (HEAP32[i44 >> 2] | 0);
 __ZN7WebCore16IDBLevelDBCoding9encodeIntEx(i11, 1, 0);
 __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i48, i45, i11);
 i45 = i11 + 8 | 0;
 if ((HEAP32[i45 >> 2] | 0) != 0) {
  HEAP32[i45 >> 2] = 0;
 }
 i45 = i11 | 0;
 i12 = HEAP32[i45 >> 2] | 0;
 if ((i12 | 0) != 0) {
  HEAP32[i45 >> 2] = 0;
  HEAP32[i11 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i12);
 }
 i12 = i37 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 HEAP32[i46 >> 2] = i11;
 i45 = i37 + 8 | 0;
 HEAP32[i46 + 4 >> 2] = i11 + (HEAP32[i45 >> 2] | 0);
 __ZN7WebCore16IDBLevelDBCoding9encodeIntEx(i10, i5, i6);
 __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i48, i46, i10);
 i46 = i10 + 8 | 0;
 if ((HEAP32[i46 >> 2] | 0) != 0) {
  HEAP32[i46 >> 2] = 0;
 }
 i46 = i10 | 0;
 i48 = HEAP32[i46 >> 2] | 0;
 if ((i48 | 0) != 0) {
  HEAP32[i46 >> 2] = 0;
  HEAP32[i10 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i48);
 }
 if ((HEAP32[i45 >> 2] | 0) != 0) {
  HEAP32[i45 >> 2] = 0;
 }
 i45 = HEAP32[i12 >> 2] | 0;
 if ((i45 | 0) != 0) {
  HEAP32[i12 >> 2] = 0;
  HEAP32[i37 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i45);
 }
 if ((HEAP32[i44 >> 2] | 0) != 0) {
  HEAP32[i44 >> 2] = 0;
 }
 i44 = HEAP32[i8 >> 2] | 0;
 if ((i44 | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i36 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i44);
 }
 if ((HEAP32[i43 >> 2] | 0) != 0) {
  HEAP32[i43 >> 2] = 0;
 }
 i43 = HEAP32[i14 >> 2] | 0;
 if ((i43 | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
  HEAP32[i35 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i43);
 }
 if ((HEAP32[i42 >> 2] | 0) != 0) {
  HEAP32[i42 >> 2] = 0;
 }
 i42 = HEAP32[i15 >> 2] | 0;
 if ((i42 | 0) != 0) {
  HEAP32[i15 >> 2] = 0;
  HEAP32[i34 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i42);
 }
 if ((HEAP32[i41 >> 2] | 0) != 0) {
  HEAP32[i41 >> 2] = 0;
 }
 i41 = HEAP32[i16 >> 2] | 0;
 if ((i41 | 0) != 0) {
  HEAP32[i16 >> 2] = 0;
  HEAP32[i33 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i41);
 }
 if ((HEAP32[i40 >> 2] | 0) != 0) {
  HEAP32[i40 >> 2] = 0;
 }
 i40 = HEAP32[i9 >> 2] | 0;
 if ((i40 | 0) != 0) {
  HEAP32[i9 >> 2] = 0;
  HEAP32[i32 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i40);
 }
 if ((HEAP32[i39 >> 2] | 0) != 0) {
  HEAP32[i39 >> 2] = 0;
 }
 i39 = HEAP32[i18 >> 2] | 0;
 if ((i39 | 0) != 0) {
  HEAP32[i18 >> 2] = 0;
  HEAP32[i31 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i39);
 }
 if ((HEAP32[i38 >> 2] | 0) != 0) {
  HEAP32[i38 >> 2] = 0;
 }
 i38 = HEAP32[i7 >> 2] | 0;
 if ((i38 | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i30 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i38);
 }
 if ((HEAP32[i58 >> 2] | 0) != 0) {
  HEAP32[i58 >> 2] = 0;
 }
 i58 = HEAP32[i4 >> 2] | 0;
 if ((i58 | 0) == 0) {
  i47 = 1;
  STACKTOP = i1;
  return i47 | 0;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i29 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i58);
 i47 = 1;
 STACKTOP = i1;
 return i47 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB22getIDBDatabaseMetaDataERKN3WTF6StringEPNS_19IDBDatabaseMetadataERb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 232 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 64 | 0;
 i14 = i5 + 72 | 0;
 i15 = i5 + 80 | 0;
 i16 = i5 + 88 | 0;
 i17 = i5 + 96 | 0;
 i18 = i5 + 112 | 0;
 i19 = i5 + 120 | 0;
 i20 = i5 + 128 | 0;
 i21 = i5 + 136 | 0;
 i22 = i5 + 152 | 0;
 i23 = i5 + 168 | 0;
 i24 = i5 + 176 | 0;
 i25 = i5 + 184 | 0;
 i26 = i5 + 200 | 0;
 i27 = i5 + 208 | 0;
 i28 = i5 + 216 | 0;
 __ZN7WebCore16IDBLevelDBCoding15DatabaseNameKey6encodeERKN3WTF6StringES5_(i22, i1 + 8 | 0, i2);
 HEAP8[i4] = 0;
 i2 = i1 + 12 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i29 = i22 | 0;
 i30 = HEAP32[i29 >> 2] | 0;
 HEAP32[i23 >> 2] = i30;
 i31 = i22 + 8 | 0;
 HEAP32[i23 + 4 >> 2] = i30 + (HEAP32[i31 >> 2] | 0);
 i30 = i3 + 8 | 0;
 i32 = i21 | 0;
 HEAP32[i32 >> 2] = 0;
 i33 = i21 + 4 | 0;
 HEAP32[i33 >> 2] = 0;
 i34 = i21 + 8 | 0;
 HEAP32[i34 >> 2] = 0;
 do {
  if (FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 1](i1, i23, i21, i4, 0) | 0) {
   if ((HEAP8[i4] & 1) == 0) {
    i35 = 1;
    break;
   }
   i36 = HEAP32[i32 >> 2] | 0;
   i37 = __ZN7WebCore16IDBLevelDBCoding9decodeIntEPKcS2_(i36, i36 + (HEAP32[i34 >> 2] | 0) | 0) | 0;
   HEAP32[i30 >> 2] = i37;
   HEAP32[i30 + 4 >> 2] = tempRet0;
   i35 = 1;
  } else {
   i35 = 0;
  }
 } while (0);
 if ((HEAP32[i34 >> 2] | 0) != 0) {
  HEAP32[i34 >> 2] = 0;
 }
 i34 = HEAP32[i32 >> 2] | 0;
 if ((i34 | 0) != 0) {
  HEAP32[i32 >> 2] = 0;
  HEAP32[i33 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i34);
 }
 do {
  if (i35) {
   if ((HEAP8[i4] & 1) == 0) {
    i38 = 1;
    break;
   }
   i34 = HEAP32[i2 >> 2] | 0;
   __ZN7WebCore16IDBLevelDBCoding19DatabaseMetaDataKey6encodeExNS1_12MetaDataTypeE(i25, HEAP32[i30 >> 2] | 0, HEAP32[i30 + 4 >> 2] | 0, 2);
   i33 = i25 | 0;
   i32 = HEAP32[i33 >> 2] | 0;
   HEAP32[i24 >> 2] = i32;
   i21 = i25 + 8 | 0;
   HEAP32[i24 + 4 >> 2] = i32 + (HEAP32[i21 >> 2] | 0);
   i32 = i17 | 0;
   HEAP32[i32 >> 2] = 0;
   i23 = i17 + 4 | 0;
   HEAP32[i23 >> 2] = 0;
   i1 = i17 + 8 | 0;
   HEAP32[i1 >> 2] = 0;
   HEAP8[i4] = 0;
   do {
    if (FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i34 >> 2] | 0) + 8 >> 2] & 1](i34, i24, i17, i4, 0) | 0) {
     if ((HEAP8[i4] & 1) == 0) {
      i39 = 1;
      i40 = 0;
      break;
     }
     i37 = HEAP32[i32 >> 2] | 0;
     __ZN7WebCore16IDBLevelDBCoding12decodeStringEPKcS2_(i18, i37, i37 + (HEAP32[i1 >> 2] | 0) | 0);
     i37 = i18 | 0;
     i36 = HEAP32[i37 >> 2] | 0;
     HEAP32[i37 >> 2] = 0;
     i39 = 1;
     i40 = i36;
    } else {
     i39 = 0;
     i40 = 0;
    }
   } while (0);
   if ((HEAP32[i1 >> 2] | 0) != 0) {
    HEAP32[i1 >> 2] = 0;
   }
   i34 = HEAP32[i32 >> 2] | 0;
   if ((i34 | 0) != 0) {
    HEAP32[i32 >> 2] = 0;
    HEAP32[i23 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i34);
   }
   if ((HEAP32[i21 >> 2] | 0) != 0) {
    HEAP32[i21 >> 2] = 0;
   }
   i34 = HEAP32[i33 >> 2] | 0;
   if ((i34 | 0) != 0) {
    HEAP32[i33 >> 2] = 0;
    HEAP32[i25 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i34);
   }
   do {
    if (i39) {
     if ((HEAP8[i4] & 1) == 0) {
      __ZN3WTF6String6formatEPKcz(i13, H_BASE + 24 | 0, (i41 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i41 >> 2] = H_BASE + 72, i41) | 0);
      STACKTOP = i41;
      __ZNK3WTF6String4utf8ENS_14ConversionModeE(i14, i13, 0);
      i34 = i14 | 0;
      i36 = HEAP32[i34 >> 2] | 0;
      if ((i36 | 0) == 0) {
       i42 = 0;
      } else {
       i42 = i36 + 8 | 0;
      }
      __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i42, 4, 22);
      i36 = HEAP32[i34 >> 2] | 0;
      do {
       if ((i36 | 0) != 0) {
        i34 = i36 | 0;
        i37 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
        if ((i37 | 0) == 0) {
         __ZN3WTF8fastFreeEPv(i36);
         break;
        } else {
         HEAP32[i34 >> 2] = i37;
         break;
        }
       }
      } while (0);
      i36 = HEAP32[i13 >> 2] | 0;
      if ((i36 | 0) == 0) {
       i43 = 0;
       break;
      }
      i37 = i36 | 0;
      i34 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
      if ((i34 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i36);
       i43 = 0;
       break;
      } else {
       HEAP32[i37 >> 2] = i34;
       i43 = 0;
       break;
      }
     }
     i34 = HEAP32[i2 >> 2] | 0;
     __ZN7WebCore16IDBLevelDBCoding19DatabaseMetaDataKey6encodeExNS1_12MetaDataTypeE(i28, HEAP32[i30 >> 2] | 0, HEAP32[i30 + 4 >> 2] | 0, 4);
     i37 = i28 | 0;
     i36 = HEAP32[i37 >> 2] | 0;
     HEAP32[i27 >> 2] = i36;
     i44 = i28 + 8 | 0;
     HEAP32[i27 + 4 >> 2] = i36 + (HEAP32[i44 >> 2] | 0);
     i36 = i12 | 0;
     HEAP32[i36 >> 2] = 0;
     i45 = i12 + 4 | 0;
     HEAP32[i45 >> 2] = 0;
     i46 = i12 + 8 | 0;
     HEAP32[i46 >> 2] = 0;
     do {
      if (FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i34 >> 2] | 0) + 8 >> 2] & 1](i34, i27, i12, i4, 0) | 0) {
       if ((HEAP8[i4] & 1) == 0) {
        i47 = 1;
        break;
       }
       i48 = HEAP32[i36 >> 2] | 0;
       i49 = __ZN7WebCore16IDBLevelDBCoding12decodeVarIntEPKcS2_Rx(i48, i48 + (HEAP32[i46 >> 2] | 0) | 0, i26) | 0;
       HEAP8[i4] = (i49 | 0) == ((HEAP32[i36 >> 2] | 0) + (HEAP32[i46 >> 2] | 0) | 0) | 0;
       i47 = 1;
      } else {
       i47 = 0;
      }
     } while (0);
     if ((HEAP32[i46 >> 2] | 0) != 0) {
      HEAP32[i46 >> 2] = 0;
     }
     i34 = HEAP32[i36 >> 2] | 0;
     if ((i34 | 0) != 0) {
      HEAP32[i36 >> 2] = 0;
      HEAP32[i45 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i34);
     }
     if ((HEAP32[i44 >> 2] | 0) != 0) {
      HEAP32[i44 >> 2] = 0;
     }
     i34 = HEAP32[i37 >> 2] | 0;
     if ((i34 | 0) != 0) {
      HEAP32[i37 >> 2] = 0;
      HEAP32[i28 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i34);
     }
     if (!i47) {
      __ZN3WTF6String6formatEPKcz(i10, H_BASE + 24 | 0, (i41 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i41 >> 2] = H_BASE + 88, i41) | 0);
      STACKTOP = i41;
      __ZNK3WTF6String4utf8ENS_14ConversionModeE(i11, i10, 0);
      i34 = i11 | 0;
      i49 = HEAP32[i34 >> 2] | 0;
      if ((i49 | 0) == 0) {
       i50 = 0;
      } else {
       i50 = i49 + 8 | 0;
      }
      __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i50, 4, 22);
      i49 = HEAP32[i34 >> 2] | 0;
      do {
       if ((i49 | 0) != 0) {
        i34 = i49 | 0;
        i48 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
        if ((i48 | 0) == 0) {
         __ZN3WTF8fastFreeEPv(i49);
         break;
        } else {
         HEAP32[i34 >> 2] = i48;
         break;
        }
       }
      } while (0);
      i49 = HEAP32[i10 >> 2] | 0;
      if ((i49 | 0) == 0) {
       i43 = 0;
       break;
      }
      i37 = i49 | 0;
      i44 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
      if ((i44 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i49);
       i43 = 0;
       break;
      } else {
       HEAP32[i37 >> 2] = i44;
       i43 = 0;
       break;
      }
     }
     if ((HEAP8[i4] & 1) == 0) {
      __ZN3WTF6String6formatEPKcz(i8, H_BASE + 24 | 0, (i41 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i41 >> 2] = H_BASE + 72, i41) | 0);
      STACKTOP = i41;
      __ZNK3WTF6String4utf8ENS_14ConversionModeE(i9, i8, 0);
      i44 = i9 | 0;
      i37 = HEAP32[i44 >> 2] | 0;
      if ((i37 | 0) == 0) {
       i51 = 0;
      } else {
       i51 = i37 + 8 | 0;
      }
      __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i51, 4, 22);
      i37 = HEAP32[i44 >> 2] | 0;
      do {
       if ((i37 | 0) != 0) {
        i44 = i37 | 0;
        i49 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
        if ((i49 | 0) == 0) {
         __ZN3WTF8fastFreeEPv(i37);
         break;
        } else {
         HEAP32[i44 >> 2] = i49;
         break;
        }
       }
      } while (0);
      i37 = HEAP32[i8 >> 2] | 0;
      if ((i37 | 0) == 0) {
       i43 = 0;
       break;
      }
      i49 = i37 | 0;
      i44 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
      if ((i44 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i37);
       i43 = 0;
       break;
      } else {
       HEAP32[i49 >> 2] = i44;
       i43 = 0;
       break;
      }
     }
     i44 = HEAP32[i26 >> 2] | 0;
     i49 = HEAP32[i26 + 4 >> 2] | 0;
     i37 = 0;
     if ((i49 | 0) < (i37 | 0) | (i49 | 0) == (i37 | 0) & i44 >>> 0 < 0 >>> 0) {
      HEAP32[i26 >> 2] = 0;
      HEAP32[i26 + 4 >> 2] = 0;
      i52 = 0;
      i53 = 0;
     } else {
      i52 = i49;
      i53 = i44;
     }
     i44 = i3 + 16 | 0;
     HEAP32[i44 >> 2] = i53;
     HEAP32[i44 + 4 >> 2] = i52;
     if (__ZN7WebCoreL19getMaxObjectStoreIdINS_15LevelDBDatabaseEEEbPT_xRx(HEAP32[i2 >> 2] | 0, HEAP32[i30 >> 2] | 0, HEAP32[i30 + 4 >> 2] | 0, i3 + 24 | 0) | 0) {
      i43 = 1;
      break;
     }
     __ZN3WTF6String6formatEPKcz(i6, H_BASE + 24 | 0, (i41 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i41 >> 2] = H_BASE + 88, i41) | 0);
     STACKTOP = i41;
     __ZNK3WTF6String4utf8ENS_14ConversionModeE(i7, i6, 0);
     i44 = i7 | 0;
     i49 = HEAP32[i44 >> 2] | 0;
     if ((i49 | 0) == 0) {
      i54 = 0;
     } else {
      i54 = i49 + 8 | 0;
     }
     __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i54, 4, 22);
     i49 = HEAP32[i44 >> 2] | 0;
     do {
      if ((i49 | 0) != 0) {
       i44 = i49 | 0;
       i37 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
       if ((i37 | 0) == 0) {
        __ZN3WTF8fastFreeEPv(i49);
        break;
       } else {
        HEAP32[i44 >> 2] = i37;
        break;
       }
      }
     } while (0);
     i49 = HEAP32[i6 >> 2] | 0;
     if ((i49 | 0) == 0) {
      i43 = 0;
      break;
     }
     i37 = i49 | 0;
     i44 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
     if ((i44 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i49);
      i43 = 0;
      break;
     } else {
      HEAP32[i37 >> 2] = i44;
      i43 = 0;
      break;
     }
    } else {
     __ZN3WTF6String6formatEPKcz(i15, H_BASE + 24 | 0, (i41 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i41 >> 2] = H_BASE + 88, i41) | 0);
     STACKTOP = i41;
     __ZNK3WTF6String4utf8ENS_14ConversionModeE(i16, i15, 0);
     i44 = i16 | 0;
     i37 = HEAP32[i44 >> 2] | 0;
     if ((i37 | 0) == 0) {
      i55 = 0;
     } else {
      i55 = i37 + 8 | 0;
     }
     __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i55, 4, 22);
     i37 = HEAP32[i44 >> 2] | 0;
     do {
      if ((i37 | 0) != 0) {
       i44 = i37 | 0;
       i49 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
       if ((i49 | 0) == 0) {
        __ZN3WTF8fastFreeEPv(i37);
        break;
       } else {
        HEAP32[i44 >> 2] = i49;
        break;
       }
      }
     } while (0);
     i37 = HEAP32[i15 >> 2] | 0;
     if ((i37 | 0) == 0) {
      i43 = 0;
      break;
     }
     i49 = i37 | 0;
     i44 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
     if ((i44 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i37);
      i43 = 0;
      break;
     } else {
      HEAP32[i49 >> 2] = i44;
      i43 = 0;
      break;
     }
    }
   } while (0);
   if ((i40 | 0) == 0) {
    i38 = i43;
    break;
   }
   i33 = i40 | 0;
   i21 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i40);
    i38 = i43;
    break;
   } else {
    HEAP32[i33 >> 2] = i21;
    i38 = i43;
    break;
   }
  } else {
   __ZN3WTF6String6formatEPKcz(i19, H_BASE + 24 | 0, (i41 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i41 >> 2] = H_BASE + 88, i41) | 0);
   STACKTOP = i41;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i20, i19, 0);
   i21 = i20 | 0;
   i33 = HEAP32[i21 >> 2] | 0;
   if ((i33 | 0) == 0) {
    i56 = 0;
   } else {
    i56 = i33 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i56, 4, 22);
   i33 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i33 | 0) != 0) {
     i21 = i33 | 0;
     i23 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i33);
      break;
     } else {
      HEAP32[i21 >> 2] = i23;
      break;
     }
    }
   } while (0);
   i33 = HEAP32[i19 >> 2] | 0;
   if ((i33 | 0) == 0) {
    i38 = 0;
    break;
   }
   i23 = i33 | 0;
   i21 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    i38 = 0;
    break;
   } else {
    HEAP32[i23 >> 2] = i21;
    i38 = 0;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i31 >> 2] | 0) != 0) {
  HEAP32[i31 >> 2] = 0;
 }
 i31 = HEAP32[i29 >> 2] | 0;
 if ((i31 | 0) == 0) {
  STACKTOP = i5;
  return i38 | 0;
 }
 HEAP32[i29 >> 2] = 0;
 HEAP32[i22 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i31);
 STACKTOP = i5;
 return i38 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB33getOrEstablishIDBDatabaseMetadataERKN3WTF6StringENSt3__18functionIFvRKNS_19IDBDatabaseMetadataEbEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 288 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 120 | 0;
 i20 = i4 + 128 | 0;
 i21 = i4 + 136 | 0;
 i22 = i4 + 144 | 0;
 i23 = i4 + 152 | 0;
 i24 = i4 + 168 | 0;
 i25 = i4 + 184 | 0;
 i26 = i4 + 192 | 0;
 i27 = i4 + 248 | 0;
 i28 = i4 + 256 | 0;
 i29 = i4 + 264 | 0;
 i30 = i4 + 272 | 0;
 __ZN7WebCore16IDBLevelDBCoding15DatabaseNameKey6encodeERKN3WTF6StringES5_(i24, i1 + 8 | 0, i2);
 HEAP8[i25] = 0;
 i31 = i26 | 0;
 HEAP32[i31 >> 2] = 0;
 i32 = i26 + 8 | 0;
 _memset(i32 | 0, 0, 44) | 0;
 i33 = i1 + 12 | 0;
 i34 = HEAP32[i33 >> 2] | 0;
 i35 = i24 | 0;
 i36 = HEAP32[i35 >> 2] | 0;
 HEAP32[i27 >> 2] = i36;
 i37 = i24 + 8 | 0;
 HEAP32[i27 + 4 >> 2] = i36 + (HEAP32[i37 >> 2] | 0);
 i36 = i23 | 0;
 HEAP32[i36 >> 2] = 0;
 i38 = i23 + 4 | 0;
 HEAP32[i38 >> 2] = 0;
 i39 = i23 + 8 | 0;
 HEAP32[i39 >> 2] = 0;
 do {
  if (FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i34 >> 2] | 0) + 8 >> 2] & 1](i34, i27, i23, i25, 0) | 0) {
   if ((HEAP8[i25] & 1) == 0) {
    i40 = 1;
    break;
   }
   i41 = HEAP32[i36 >> 2] | 0;
   i42 = __ZN7WebCore16IDBLevelDBCoding9decodeIntEPKcS2_(i41, i41 + (HEAP32[i39 >> 2] | 0) | 0) | 0;
   HEAP32[i32 >> 2] = i42;
   HEAP32[i32 + 4 >> 2] = tempRet0;
   i40 = 1;
  } else {
   i40 = 0;
  }
 } while (0);
 if ((HEAP32[i39 >> 2] | 0) != 0) {
  HEAP32[i39 >> 2] = 0;
 }
 i39 = HEAP32[i36 >> 2] | 0;
 if ((i39 | 0) != 0) {
  HEAP32[i36 >> 2] = 0;
  HEAP32[i38 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i39);
 }
 do {
  if (i40) {
   if ((HEAP8[i25] & 1) == 0) {
    i39 = HEAP32[i2 >> 2] | 0;
    if ((i39 | 0) != 0) {
     i38 = i39 | 0;
     HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 2;
    }
    i38 = HEAP32[i31 >> 2] | 0;
    HEAP32[i31 >> 2] = i39;
    do {
     if ((i38 | 0) != 0) {
      i39 = i38 | 0;
      i36 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
      if ((i36 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i38);
       break;
      } else {
       HEAP32[i39 >> 2] = i36;
       break;
      }
     }
    } while (0);
    i38 = i26 + 16 | 0;
    HEAP32[i38 >> 2] = 0;
    HEAP32[i38 + 4 >> 2] = 0;
    HEAP8[i19] = (__ZN7WebCore22IDBBackingStoreLevelDB25createIDBDatabaseMetaDataERNS_19IDBDatabaseMetadataE(i1, i26) | 0) & 1;
    i38 = HEAP32[i3 + 16 >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i38 >> 2] | 0) + 24 >> 2] & 15](i38, i26, i19);
    break;
   }
   i38 = HEAP32[i33 >> 2] | 0;
   __ZN7WebCore16IDBLevelDBCoding19DatabaseMetaDataKey6encodeExNS1_12MetaDataTypeE(i30, HEAP32[i32 >> 2] | 0, HEAP32[i32 + 4 >> 2] | 0, 4);
   i36 = i30 | 0;
   i39 = HEAP32[i36 >> 2] | 0;
   HEAP32[i29 >> 2] = i39;
   i23 = i30 + 8 | 0;
   HEAP32[i29 + 4 >> 2] = i39 + (HEAP32[i23 >> 2] | 0);
   i39 = i18 | 0;
   HEAP32[i39 >> 2] = 0;
   i27 = i18 + 4 | 0;
   HEAP32[i27 >> 2] = 0;
   i34 = i18 + 8 | 0;
   HEAP32[i34 >> 2] = 0;
   do {
    if (FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i38 >> 2] | 0) + 8 >> 2] & 1](i38, i29, i18, i25, 0) | 0) {
     if ((HEAP8[i25] & 1) == 0) {
      i43 = 1;
      break;
     }
     i42 = HEAP32[i39 >> 2] | 0;
     i41 = __ZN7WebCore16IDBLevelDBCoding12decodeVarIntEPKcS2_Rx(i42, i42 + (HEAP32[i34 >> 2] | 0) | 0, i28) | 0;
     HEAP8[i25] = (i41 | 0) == ((HEAP32[i39 >> 2] | 0) + (HEAP32[i34 >> 2] | 0) | 0) | 0;
     i43 = 1;
    } else {
     i43 = 0;
    }
   } while (0);
   if ((HEAP32[i34 >> 2] | 0) != 0) {
    HEAP32[i34 >> 2] = 0;
   }
   i38 = HEAP32[i39 >> 2] | 0;
   if ((i38 | 0) != 0) {
    HEAP32[i39 >> 2] = 0;
    HEAP32[i27 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i38);
   }
   if ((HEAP32[i23 >> 2] | 0) != 0) {
    HEAP32[i23 >> 2] = 0;
   }
   i38 = HEAP32[i36 >> 2] | 0;
   if ((i38 | 0) != 0) {
    HEAP32[i36 >> 2] = 0;
    HEAP32[i30 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i38);
   }
   if (!i43) {
    __ZN3WTF6String6formatEPKcz(i16, H_BASE + 24 | 0, (i44 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i44 >> 2] = H_BASE + 88, i44) | 0);
    STACKTOP = i44;
    __ZNK3WTF6String4utf8ENS_14ConversionModeE(i17, i16, 0);
    i38 = i17 | 0;
    i41 = HEAP32[i38 >> 2] | 0;
    if ((i41 | 0) == 0) {
     i45 = 0;
    } else {
     i45 = i41 + 8 | 0;
    }
    __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i45, 4, 22);
    i41 = HEAP32[i38 >> 2] | 0;
    do {
     if ((i41 | 0) != 0) {
      i38 = i41 | 0;
      i42 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
      if ((i42 | 0) == 0) {
       __ZN3WTF8fastFreeEPv(i41);
       break;
      } else {
       HEAP32[i38 >> 2] = i42;
       break;
      }
     }
    } while (0);
    i41 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i41 | 0) != 0) {
      i36 = i41 | 0;
      i23 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
      if ((i23 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i41);
       break;
      } else {
       HEAP32[i36 >> 2] = i23;
       break;
      }
     }
    } while (0);
    HEAP8[i15] = 0;
    i41 = HEAP32[i3 + 16 >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i41 >> 2] | 0) + 24 >> 2] & 15](i41, i26, i15);
    break;
   }
   if ((HEAP8[i25] & 1) == 0) {
    __ZN3WTF6String6formatEPKcz(i13, H_BASE + 24 | 0, (i44 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i44 >> 2] = H_BASE + 72, i44) | 0);
    STACKTOP = i44;
    __ZNK3WTF6String4utf8ENS_14ConversionModeE(i14, i13, 0);
    i41 = i14 | 0;
    i23 = HEAP32[i41 >> 2] | 0;
    if ((i23 | 0) == 0) {
     i46 = 0;
    } else {
     i46 = i23 + 8 | 0;
    }
    __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i46, 4, 22);
    i23 = HEAP32[i41 >> 2] | 0;
    do {
     if ((i23 | 0) != 0) {
      i41 = i23 | 0;
      i36 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
      if ((i36 | 0) == 0) {
       __ZN3WTF8fastFreeEPv(i23);
       break;
      } else {
       HEAP32[i41 >> 2] = i36;
       break;
      }
     }
    } while (0);
    i23 = HEAP32[i13 >> 2] | 0;
    do {
     if ((i23 | 0) != 0) {
      i36 = i23 | 0;
      i41 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
      if ((i41 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i23);
       break;
      } else {
       HEAP32[i36 >> 2] = i41;
       break;
      }
     }
    } while (0);
    HEAP8[i12] = 0;
    i23 = HEAP32[i3 + 16 >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i23 >> 2] | 0) + 24 >> 2] & 15](i23, i26, i12);
    break;
   }
   i23 = HEAP32[i28 >> 2] | 0;
   i41 = HEAP32[i28 + 4 >> 2] | 0;
   i36 = 0;
   if ((i41 | 0) < (i36 | 0) | (i41 | 0) == (i36 | 0) & i23 >>> 0 < 0 >>> 0) {
    HEAP32[i28 >> 2] = 0;
    HEAP32[i28 + 4 >> 2] = 0;
    i47 = 0;
    i48 = 0;
   } else {
    i47 = i41;
    i48 = i23;
   }
   i23 = i26 + 16 | 0;
   HEAP32[i23 >> 2] = i48;
   HEAP32[i23 + 4 >> 2] = i47;
   if (!(__ZN7WebCoreL19getMaxObjectStoreIdINS_15LevelDBDatabaseEEEbPT_xRx(HEAP32[i33 >> 2] | 0, HEAP32[i32 >> 2] | 0, HEAP32[i32 + 4 >> 2] | 0, i26 + 24 | 0) | 0)) {
    __ZN3WTF6String6formatEPKcz(i10, H_BASE + 24 | 0, (i44 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i44 >> 2] = H_BASE + 88, i44) | 0);
    STACKTOP = i44;
    __ZNK3WTF6String4utf8ENS_14ConversionModeE(i11, i10, 0);
    i23 = i11 | 0;
    i41 = HEAP32[i23 >> 2] | 0;
    if ((i41 | 0) == 0) {
     i49 = 0;
    } else {
     i49 = i41 + 8 | 0;
    }
    __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i49, 4, 22);
    i41 = HEAP32[i23 >> 2] | 0;
    do {
     if ((i41 | 0) != 0) {
      i23 = i41 | 0;
      i36 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
      if ((i36 | 0) == 0) {
       __ZN3WTF8fastFreeEPv(i41);
       break;
      } else {
       HEAP32[i23 >> 2] = i36;
       break;
      }
     }
    } while (0);
    i41 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i41 | 0) != 0) {
      i36 = i41 | 0;
      i23 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
      if ((i23 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i41);
       break;
      } else {
       HEAP32[i36 >> 2] = i23;
       break;
      }
     }
    } while (0);
    HEAP8[i9] = 0;
    i41 = HEAP32[i3 + 16 >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i41 >> 2] | 0) + 24 >> 2] & 15](i41, i26, i9);
    break;
   }
   if (__ZN7WebCore22IDBBackingStoreLevelDB15getObjectStoresExPN3WTF7HashMapIxNS_22IDBObjectStoreMetadataENS1_7IntHashIyEENS1_10HashTraitsIxEENS6_IS3_EEEE(i1, HEAP32[i32 >> 2] | 0, HEAP32[i32 + 4 >> 2] | 0, i26 + 32 | 0) | 0) {
    HEAP8[i5] = 1;
    i41 = HEAP32[i3 + 16 >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i41 >> 2] | 0) + 24 >> 2] & 15](i41, i26, i5);
    break;
   }
   __ZN3WTF6String6formatEPKcz(i7, H_BASE + 24 | 0, (i44 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i44 >> 2] = H_BASE + 88, i44) | 0);
   STACKTOP = i44;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i8, i7, 0);
   i41 = i8 | 0;
   i23 = HEAP32[i41 >> 2] | 0;
   if ((i23 | 0) == 0) {
    i50 = 0;
   } else {
    i50 = i23 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i50, 4, 22);
   i23 = HEAP32[i41 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i41 = i23 | 0;
     i36 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
     if ((i36 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i23);
      break;
     } else {
      HEAP32[i41 >> 2] = i36;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i36 = i23 | 0;
     i41 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
     if ((i41 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i36 >> 2] = i41;
      break;
     }
    }
   } while (0);
   HEAP8[i6] = 0;
   i23 = HEAP32[i3 + 16 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i23 >> 2] | 0) + 24 >> 2] & 15](i23, i26, i6);
  } else {
   __ZN3WTF6String6formatEPKcz(i21, H_BASE + 24 | 0, (i44 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i44 >> 2] = H_BASE + 88, i44) | 0);
   STACKTOP = i44;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i22, i21, 0);
   i23 = i22 | 0;
   i41 = HEAP32[i23 >> 2] | 0;
   if ((i41 | 0) == 0) {
    i51 = 0;
   } else {
    i51 = i41 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i51, 4, 22);
   i41 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i41 | 0) != 0) {
     i23 = i41 | 0;
     i36 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     if ((i36 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i41);
      break;
     } else {
      HEAP32[i23 >> 2] = i36;
      break;
     }
    }
   } while (0);
   i41 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i41 | 0) != 0) {
     i36 = i41 | 0;
     i23 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i41);
      break;
     } else {
      HEAP32[i36 >> 2] = i23;
      break;
     }
    }
   } while (0);
   HEAP8[i20] = 0;
   i41 = HEAP32[i3 + 16 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i41 >> 2] | 0) + 24 >> 2] & 15](i41, i26, i20);
  }
 } while (0);
 i20 = HEAP32[i26 + 32 >> 2] | 0;
 if ((i20 | 0) != 0) {
  i3 = HEAP32[i26 + 36 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i26 = 0;
   while (1) {
    i21 = i20 + (i26 * 80 & -1) | 0;
    if (!((HEAP32[i21 >> 2] | 0) == (-1 | 0) & (HEAP32[i21 + 4 >> 2] | 0) == (-1 | 0))) {
     __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i20 + (i26 * 80 & -1) + 8 | 0);
    }
    i26 = i26 + 1 | 0;
    if ((i26 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i20);
 }
 i20 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i31 = i20 | 0;
   i3 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i31 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i37 >> 2] | 0) != 0) {
  HEAP32[i37 >> 2] = 0;
 }
 i37 = HEAP32[i35 >> 2] | 0;
 if ((i37 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i35 >> 2] = 0;
 HEAP32[i24 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i37);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15IndexCursorImpl14loadCurrentRowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 264 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i2 + 80 | 0;
 i14 = i2 + 136 | 0;
 i15 = i2 + 144 | 0;
 i16 = i2 + 152 | 0;
 i17 = i2 + 160 | 0;
 i18 = i2 + 168 | 0;
 i19 = i2 + 184 | 0;
 i20 = i2 + 200 | 0;
 i21 = i2 + 208 | 0;
 i22 = i2 + 216 | 0;
 i23 = i2 + 224 | 0;
 i24 = i2 + 232 | 0;
 i25 = i2 + 240 | 0;
 i26 = i2 + 256 | 0;
 i27 = i1 + 80 | 0;
 i28 = HEAP32[i27 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i28 >> 2] | 0) + 28 >> 2] & 31](i11, i28);
 i28 = HEAP32[i11 >> 2] | 0;
 i11 = HEAP32[i27 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 28 >> 2] & 31](i12, i11);
 i11 = HEAP32[i12 + 4 >> 2] | 0;
 __ZN7WebCore16IDBLevelDBCoding12IndexDataKeyC1Ev(i13);
 __ZN7WebCore16IDBLevelDBCoding12IndexDataKey6decodeEPKcS3_PS1_(i28, i11, i13) | 0;
 __ZNK7WebCore16IDBLevelDBCoding12IndexDataKey7userKeyEv(i14, i13);
 i11 = i14 | 0;
 i14 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i28 = i1 + 84 | 0;
 i12 = HEAP32[i28 >> 2] | 0;
 HEAP32[i28 >> 2] = i14;
 do {
  if ((i12 | 0) != 0) {
   i14 = i12 | 0;
   i28 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i28 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i12);
    __ZN3WTF8fastFreeEPv(i12);
    break;
   } else {
    HEAP32[i14 >> 2] = i28;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i11 = i12 | 0;
   i28 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i28 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i12);
    __ZN3WTF8fastFreeEPv(i12);
    break;
   } else {
    HEAP32[i11 >> 2] = i28;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i27 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 32 >> 2] & 31](i15, i12);
 i12 = HEAP32[i15 >> 2] | 0;
 i15 = HEAP32[i27 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 32 >> 2] & 31](i16, i15);
 i15 = HEAP32[i16 + 4 >> 2] | 0;
 i16 = __ZN7WebCore16IDBLevelDBCoding12decodeVarIntEPKcS2_Rx(i12, i15, i17) | 0;
 do {
  if ((i16 | 0) == 0) {
   __ZN3WTF6String6formatEPKcz(i9, H_BASE + 24 | 0, (i29 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i29 >> 2] = H_BASE + 88, i29) | 0);
   STACKTOP = i29;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i10, i9, 0);
   i12 = i10 | 0;
   i28 = HEAP32[i12 >> 2] | 0;
   if ((i28 | 0) == 0) {
    i30 = 0;
   } else {
    i30 = i28 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i30, 10, 22);
   i28 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i12 = i28 | 0;
     i11 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i28);
      break;
     } else {
      HEAP32[i12 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i28 = HEAP32[i9 >> 2] | 0;
   if ((i28 | 0) == 0) {
    i31 = 0;
    break;
   }
   i11 = i28 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    i31 = 0;
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    i31 = 0;
    break;
   }
  } else {
   i12 = i1 + 92 | 0;
   if ((__ZN7WebCore16IDBLevelDBCoding12decodeIDBKeyEPKcS2_RN3WTF6RefPtrINS_6IDBKeyEEE(i16, i15, i12) | 0) == 0) {
    __ZN3WTF6String6formatEPKcz(i7, H_BASE + 24 | 0, (i29 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i29 >> 2] = H_BASE + 88, i29) | 0);
    STACKTOP = i29;
    __ZNK3WTF6String4utf8ENS_14ConversionModeE(i8, i7, 0);
    i11 = i8 | 0;
    i28 = HEAP32[i11 >> 2] | 0;
    if ((i28 | 0) == 0) {
     i32 = 0;
    } else {
     i32 = i28 + 8 | 0;
    }
    __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i32, 10, 22);
    i28 = HEAP32[i11 >> 2] | 0;
    do {
     if ((i28 | 0) != 0) {
      i11 = i28 | 0;
      i14 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
      if ((i14 | 0) == 0) {
       __ZN3WTF8fastFreeEPv(i28);
       break;
      } else {
       HEAP32[i11 >> 2] = i14;
       break;
      }
     }
    } while (0);
    i28 = HEAP32[i7 >> 2] | 0;
    if ((i28 | 0) == 0) {
     i31 = 0;
     break;
    }
    i14 = i28 | 0;
    i11 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i28);
     i31 = 0;
     break;
    } else {
     HEAP32[i14 >> 2] = i11;
     i31 = 0;
     break;
    }
   }
   i11 = __ZNK7WebCore16IDBLevelDBCoding12IndexDataKey10databaseIdEv(i13) | 0;
   i14 = tempRet0;
   i28 = __ZNK7WebCore16IDBLevelDBCoding12IndexDataKey13objectStoreIdEv(i13) | 0;
   __ZN7WebCore16IDBLevelDBCoding18ObjectStoreDataKey6encodeExxRKNS_6IDBKeyE(i18, i11, i14, i28, tempRet0, HEAP32[i12 >> 2] | 0);
   i28 = i1 + 108 | 0;
   i14 = i18 + 8 | 0;
   i11 = HEAP32[i28 >> 2] | 0;
   i33 = HEAP32[i14 >> 2] | 0;
   HEAP32[i28 >> 2] = i33;
   HEAP32[i14 >> 2] = i11;
   i34 = i1 + 100 | 0;
   i35 = i18 | 0;
   i36 = HEAP32[i34 >> 2] | 0;
   i37 = HEAP32[i35 >> 2] | 0;
   HEAP32[i34 >> 2] = i37;
   HEAP32[i35 >> 2] = i36;
   i38 = i1 + 104 | 0;
   i39 = i18 + 4 | 0;
   i40 = HEAP32[i38 >> 2] | 0;
   HEAP32[i38 >> 2] = HEAP32[i39 >> 2];
   HEAP32[i39 >> 2] = i40;
   if ((i11 | 0) != 0) {
    HEAP32[i14 >> 2] = 0;
   }
   if ((i36 | 0) == 0) {
    i41 = i37;
    i42 = i33;
   } else {
    HEAP32[i35 >> 2] = 0;
    HEAP32[i39 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i36);
    i41 = HEAP32[i34 >> 2] | 0;
    i42 = HEAP32[i28 >> 2] | 0;
   }
   i28 = i19 | 0;
   HEAP32[i28 >> 2] = 0;
   i34 = i19 + 4 | 0;
   HEAP32[i34 >> 2] = 0;
   i36 = i19 + 8 | 0;
   HEAP32[i36 >> 2] = 0;
   HEAP8[i20] = 0;
   i39 = i1 + 16 | 0;
   i35 = HEAP32[i39 >> 2] | 0;
   HEAP32[i21 >> 2] = i41;
   HEAP32[i21 + 4 >> 2] = i41 + i42;
   do {
    if (__ZN7WebCore18LevelDBTransaction7safeGetERKNS_12LevelDBSliceERN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEERb(i35, i21, i19, i20) | 0) {
     if ((HEAP8[i20] & 1) == 0) {
      i33 = HEAP32[i39 >> 2] | 0;
      i37 = HEAP32[i27 >> 2] | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i37 >> 2] | 0) + 28 >> 2] & 31](i22, i37);
      __ZN7WebCore18LevelDBTransaction6removeERKNS_12LevelDBSliceE(i33, i22);
      i43 = 0;
      break;
     }
     i33 = HEAP32[i28 >> 2] | 0;
     i37 = __ZN7WebCore16IDBLevelDBCoding12decodeVarIntEPKcS2_Rx(i33, i33 + (HEAP32[i36 >> 2] | 0) | 0, i23) | 0;
     if ((i37 | 0) == 0) {
      __ZN3WTF6String6formatEPKcz(i3, H_BASE + 24 | 0, (i29 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i29 >> 2] = H_BASE + 88, i29) | 0);
      STACKTOP = i29;
      __ZNK3WTF6String4utf8ENS_14ConversionModeE(i4, i3, 0);
      i33 = i4 | 0;
      i14 = HEAP32[i33 >> 2] | 0;
      if ((i14 | 0) == 0) {
       i44 = 0;
      } else {
       i44 = i14 + 8 | 0;
      }
      __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i44, 10, 22);
      i14 = HEAP32[i33 >> 2] | 0;
      do {
       if ((i14 | 0) != 0) {
        i33 = i14 | 0;
        i11 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
        if ((i11 | 0) == 0) {
         __ZN3WTF8fastFreeEPv(i14);
         break;
        } else {
         HEAP32[i33 >> 2] = i11;
         break;
        }
       }
      } while (0);
      i14 = HEAP32[i3 >> 2] | 0;
      if ((i14 | 0) == 0) {
       i43 = 0;
       break;
      }
      i11 = i14 | 0;
      i33 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
      if ((i33 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i14);
       i43 = 0;
       break;
      } else {
       HEAP32[i11 >> 2] = i33;
       i43 = 0;
       break;
      }
     }
     if (!((HEAP32[i23 >> 2] | 0) == (HEAP32[i17 >> 2] | 0) & (HEAP32[i23 + 4 >> 2] | 0) == (HEAP32[i17 + 4 >> 2] | 0))) {
      i33 = HEAP32[i39 >> 2] | 0;
      i11 = HEAP32[i27 >> 2] | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 28 >> 2] & 31](i24, i11);
      __ZN7WebCore18LevelDBTransaction6removeERKNS_12LevelDBSliceE(i33, i24);
      i43 = 0;
      break;
     }
     i33 = i25 | 0;
     HEAP32[i33 >> 2] = 0;
     i11 = i25 + 4 | 0;
     HEAP32[i11 >> 2] = 0;
     i14 = i25 + 8 | 0;
     HEAP32[i14 >> 2] = 0;
     __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i25, i37, (HEAP32[i28 >> 2] | 0) + (HEAP32[i36 >> 2] | 0) - i37 | 0);
     __ZN7WebCore12SharedBuffer11adoptVectorERN3WTF6VectorIcLj0ENS1_15CrashOnOverflowEEE(i26, i25);
     i40 = i26 | 0;
     i38 = HEAP32[i40 >> 2] | 0;
     HEAP32[i40 >> 2] = 0;
     i45 = i1 + 96 | 0;
     i46 = HEAP32[i45 >> 2] | 0;
     HEAP32[i45 >> 2] = i38;
     do {
      if ((i46 | 0) != 0) {
       i38 = i46 | 0;
       i45 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
       if ((i45 | 0) == 0) {
        __ZN7WebCore12SharedBufferD1Ev(i46);
        __ZN3WTF8fastFreeEPv(i46);
        break;
       } else {
        HEAP32[i38 >> 2] = i45;
        break;
       }
      }
     } while (0);
     i46 = HEAP32[i40 >> 2] | 0;
     do {
      if ((i46 | 0) != 0) {
       i37 = i46 | 0;
       i45 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
       if ((i45 | 0) == 0) {
        __ZN7WebCore12SharedBufferD1Ev(i46);
        __ZN3WTF8fastFreeEPv(i46);
        break;
       } else {
        HEAP32[i37 >> 2] = i45;
        break;
       }
      }
     } while (0);
     if ((HEAP32[i14 >> 2] | 0) != 0) {
      HEAP32[i14 >> 2] = 0;
     }
     i46 = HEAP32[i33 >> 2] | 0;
     if ((i46 | 0) == 0) {
      i43 = 1;
      break;
     }
     HEAP32[i33 >> 2] = 0;
     HEAP32[i11 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i46);
     i43 = 1;
    } else {
     __ZN3WTF6String6formatEPKcz(i5, H_BASE + 24 | 0, (i29 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i29 >> 2] = H_BASE + 88, i29) | 0);
     STACKTOP = i29;
     __ZNK3WTF6String4utf8ENS_14ConversionModeE(i6, i5, 0);
     i46 = i6 | 0;
     i40 = HEAP32[i46 >> 2] | 0;
     if ((i40 | 0) == 0) {
      i47 = 0;
     } else {
      i47 = i40 + 8 | 0;
     }
     __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i47, 10, 22);
     i40 = HEAP32[i46 >> 2] | 0;
     do {
      if ((i40 | 0) != 0) {
       i46 = i40 | 0;
       i45 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
       if ((i45 | 0) == 0) {
        __ZN3WTF8fastFreeEPv(i40);
        break;
       } else {
        HEAP32[i46 >> 2] = i45;
        break;
       }
      }
     } while (0);
     i40 = HEAP32[i5 >> 2] | 0;
     if ((i40 | 0) == 0) {
      i43 = 0;
      break;
     }
     i11 = i40 | 0;
     i33 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i33 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i40);
      i43 = 0;
      break;
     } else {
      HEAP32[i11 >> 2] = i33;
      i43 = 0;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i36 >> 2] | 0) != 0) {
    HEAP32[i36 >> 2] = 0;
   }
   i39 = HEAP32[i28 >> 2] | 0;
   if ((i39 | 0) == 0) {
    i31 = i43;
    break;
   }
   HEAP32[i28 >> 2] = 0;
   HEAP32[i34 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i39);
   i31 = i43;
  }
 } while (0);
 i43 = i13 + 44 | 0;
 if ((HEAP32[i43 >> 2] | 0) != 0) {
  HEAP32[i43 >> 2] = 0;
 }
 i43 = i13 + 36 | 0;
 i5 = HEAP32[i43 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i43 >> 2] = 0;
  HEAP32[i13 + 40 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = i13 + 32 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = i13 + 24 | 0;
 i43 = HEAP32[i5 >> 2] | 0;
 if ((i43 | 0) == 0) {
  STACKTOP = i2;
  return i31 | 0;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i13 + 28 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i43);
 STACKTOP = i2;
 return i31 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB16makeIndexWritersExxRKNS_22IDBObjectStoreMetadataERNS_6IDBKeyEbRKN3WTF6VectorIxLj0ENS6_15CrashOnOverflowEEERKNS7_INS7_INS6_6RefPtrIS4_EELj0ES8_EELj0ES8_EERNS7_INSC_INS_21IDBIndexWriterLevelDBEEELj0ES8_EEPNS6_6StringERb(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 var i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i15 = i14 | 0;
 i16 = i14 + 24 | 0;
 i17 = i14 + 40 | 0;
 i18 = i14 + 56 | 0;
 HEAP8[i13] = 0;
 _memset(i15 | 0, 0, 20) | 0;
 i19 = i9 + 8 | 0;
 L1 : do {
  if ((HEAP32[i19 >> 2] | 0) != 0) {
   i20 = i10 + 8 | 0;
   i21 = i9 | 0;
   i22 = i10 | 0;
   i23 = i15 | 0;
   i24 = 0;
   while (1) {
    if ((HEAP32[i20 >> 2] | 0) >>> 0 <= i24 >>> 0) {
     break;
    }
    __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIyEENS_7HashMapIxS8_SD_NS_10HashTraitsIxEENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKxRKS8_EENS_18HashTableAddResultINS_17HashTableIteratorIxS9_SB_SD_SJ_SG_EEEEOT0_OT1_(i16, i23, (HEAP32[i21 >> 2] | 0) + (i24 << 3) | 0, (HEAP32[i22 >> 2] | 0) + (i24 * 12 & -1) | 0);
    i24 = i24 + 1 | 0;
    if (i24 >>> 0 >= (HEAP32[i19 >> 2] | 0) >>> 0) {
     break L1;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return 0;
  }
 } while (0);
 i19 = i6 + 48 | 0;
 i16 = HEAP32[i19 >> 2] | 0;
 i10 = i6 + 52 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 i24 = i16 + (i9 * 48 & -1) | 0;
 L8 : do {
  if ((HEAP32[i6 + 60 >> 2] | 0) == 0) {
   i25 = 56;
  } else {
   L10 : do {
    if ((i9 | 0) == 0) {
     i26 = i16;
    } else {
     i22 = i16;
     while (1) {
      i21 = i22 | 0;
      i23 = HEAP32[i21 >> 2] | 0;
      i20 = HEAP32[i21 + 4 >> 2] | 0;
      if (!((i23 | 0) == (-1 | 0) & (i20 | 0) == (-1 | 0) | (i23 | 0) == 0 & (i20 | 0) == 0)) {
       i26 = i22;
       break L10;
      }
      i20 = i22 + 48 | 0;
      if ((i20 | 0) == (i24 | 0)) {
       i25 = 56;
       break L8;
      } else {
       i22 = i20;
      }
     }
    }
   } while (0);
   if ((i26 | 0) == (i24 | 0)) {
    i25 = 56;
    break;
   }
   i22 = i6 + 16 | 0;
   i20 = i17 + 8 | 0;
   i23 = i17 + 4 | 0;
   i21 = i17 | 0;
   i27 = (i7 | 0) == 0;
   i28 = i7 | 0;
   i29 = i1 + 32 | 0;
   i30 = i1 + 24 | 0;
   i31 = _i64Add(~0, ~i2, i2, i3) | 0;
   i32 = tempRet0;
   i33 = (i31 >>> 22 | i32 << 10) ^ i31;
   i31 = (i32 >>> 22 | 0 << 10) ^ i32;
   i32 = _i64Add(i33, i31, ~(i33 << 13 | 0 >>> 19), ~(i31 << 13 | i33 >>> 19)) | 0;
   i33 = tempRet0;
   i31 = ___muldi3((i32 >>> 8 | i33 << 24) ^ i32, (i33 >>> 8 | 0 << 24) ^ i33, 9, 0) | 0;
   i33 = tempRet0;
   i32 = (i31 >>> 15 | i33 << 17) ^ i31;
   i31 = (i33 >>> 15 | 0 << 17) ^ i33;
   i33 = _i64Add(i32, i31, ~(i32 << 27 | 0 >>> 5), ~(i31 << 27 | i32 >>> 5)) | 0;
   i32 = (i33 >>> 31 | tempRet0 << 1) ^ i33;
   i33 = i6 + 8 | 0;
   i31 = i11 + 8 | 0;
   i34 = i11 + 4 | 0;
   i35 = i11 | 0;
   i36 = (i32 >>> 23) + ~i32 | 0;
   i37 = i36 << 12 ^ i36;
   i36 = i37 >>> 7 ^ i37;
   i37 = i36 << 2 ^ i36;
   i36 = i37 >>> 20 ^ i37 | 1;
   i37 = i26;
   i38 = 0;
   L16 : while (1) {
    i39 = i37 + 8 | 0;
    __ZNK3WTF7HashMapIxNS_6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEENS_7IntHashIyEENS_10HashTraitsIxEENSA_IS7_EEE3getERKx(i17, i15, i37 | 0);
    do {
     if (i8) {
      if (!(__ZNK7WebCore10IDBKeyPatheqERKS0_(i37 + 24 | 0, i22) | 0)) {
       break;
      }
      i40 = HEAP32[i20 >> 2] | 0;
      if ((i40 | 0) != (HEAP32[i23 >> 2] | 0)) {
       HEAP32[(HEAP32[i21 >> 2] | 0) + (i40 << 2) >> 2] = i7;
       if (!i27) {
        HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
       }
       HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
       break;
      }
      i41 = i40 + 1 | 0;
      i42 = i41 + (i40 >>> 2) | 0;
      i43 = i42 >>> 0 > 16 >>> 0 ? i42 : 16;
      i42 = i43 >>> 0 > i41 >>> 0 ? i43 : i41;
      do {
       if (i40 >>> 0 < i42 >>> 0) {
        i41 = HEAP32[i21 >> 2] | 0;
        if (i42 >>> 0 > 1073741823 >>> 0) {
         break L16;
        }
        i43 = __ZN3WTF18fastMallocGoodSizeEj(i42 << 2) | 0;
        HEAP32[i23 >> 2] = i43 >>> 2;
        i44 = __ZN3WTF10fastMallocEj(i43) | 0;
        HEAP32[i21 >> 2] = i44;
        i43 = i41;
        _memcpy(i44 | 0, i43 | 0, i40 << 2) | 0;
        if ((i41 | 0) == 0) {
         break;
        }
        if ((HEAP32[i21 >> 2] | 0) == (i41 | 0)) {
         HEAP32[i21 >> 2] = 0;
         HEAP32[i23 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i43);
       }
      } while (0);
      HEAP32[(HEAP32[i21 >> 2] | 0) + (HEAP32[i20 >> 2] << 2) >> 2] = i7;
      if (!i27) {
       HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
      }
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
     }
    } while (0);
    i40 = __ZN3WTF10fastMallocEj(64) | 0;
    i42 = i40;
    __ZN7WebCore21IDBIndexWriterLevelDBC1ERKNS_16IDBIndexMetadataERKN3WTF6VectorINS4_6RefPtrINS_6IDBKeyEEELj0ENS4_15CrashOnOverflowEEE(i42, i39, i17);
    HEAP8[i18] = 0;
    i43 = HEAP32[i29 >> 2] | 0;
    i41 = HEAP32[i30 >> 2] | 0;
    L39 : do {
     if ((i41 | 0) == 0) {
      i45 = 0;
     } else {
      i44 = i43 & i32;
      i46 = i41 + (i44 << 4) | 0;
      i47 = i46 | 0;
      i48 = HEAP32[i47 >> 2] | 0;
      i49 = HEAP32[i47 + 4 >> 2] | 0;
      if ((i48 | 0) == (i2 | 0) & (i49 | 0) == (i3 | 0)) {
       i50 = i46;
      } else {
       i46 = 0;
       i47 = i44;
       i44 = i49;
       i49 = i48;
       while (1) {
        if ((i49 | 0) == 0 & (i44 | 0) == 0) {
         i45 = 0;
         break L39;
        }
        i48 = (i46 | 0) == 0 ? i36 : i46;
        i51 = i48 + i47 & i43;
        i52 = i41 + (i51 << 4) | 0;
        i53 = i52 | 0;
        i54 = HEAP32[i53 >> 2] | 0;
        i55 = HEAP32[i53 + 4 >> 2] | 0;
        if ((i54 | 0) == (i2 | 0) & (i55 | 0) == (i3 | 0)) {
         i50 = i52;
         break;
        } else {
         i46 = i48;
         i47 = i51;
         i44 = i55;
         i49 = i54;
        }
       }
      }
      if ((i50 | 0) == 0) {
       i45 = 0;
       break;
      }
      i45 = HEAP32[i50 + 8 >> 2] | 0;
     }
    } while (0);
    i41 = i37 + 16 | 0;
    do {
     if (__ZNK7WebCore21IDBIndexWriterLevelDB15verifyIndexKeysERNS_22IDBBackingStoreLevelDBERNS_33IDBBackingStoreTransactionLevelDBExxxRbPKNS_6IDBKeyEPN3WTF6StringE(i42, i1, i45, i4, i5, HEAP32[i33 >> 2] | 0, HEAP32[i33 + 4 >> 2] | 0, HEAP32[i41 >> 2] | 0, HEAP32[i41 + 4 >> 2] | 0, i18, i7, i12) | 0) {
      if ((HEAP8[i18] & 1) == 0) {
       i56 = 1;
       i25 = 39;
       break;
      }
      i43 = HEAP32[i31 >> 2] | 0;
      if ((i43 | 0) == (HEAP32[i34 >> 2] | 0)) {
       __ZN3WTF6VectorINS_6RefPtrIN7WebCore21IDBIndexWriterLevelDBEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i11, i43 + 1 | 0);
       HEAP32[(HEAP32[i35 >> 2] | 0) + (HEAP32[i31 >> 2] << 2) >> 2] = i42;
       HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
       i57 = i38;
       i58 = 0;
       break;
      } else {
       HEAP32[(HEAP32[i35 >> 2] | 0) + (i43 << 2) >> 2] = i42;
       HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
       i57 = i38;
       i58 = 0;
       break;
      }
     } else {
      i56 = 0;
      i25 = 39;
     }
    } while (0);
    do {
     if ((i25 | 0) == 39) {
      i25 = 0;
      if ((i40 | 0) == 0) {
       i57 = i56;
       i58 = 1;
       break;
      }
      __ZN3WTF10RefCountedIN7WebCore21IDBIndexWriterLevelDBEE5derefEv(i40);
      i57 = i56;
      i58 = 1;
     }
    } while (0);
    i40 = HEAP32[i20 >> 2] | 0;
    if ((i40 | 0) != 0) {
     i42 = HEAP32[i21 >> 2] | 0;
     i41 = i42 + (i40 << 2) | 0;
     i40 = i42;
     while (1) {
      i42 = HEAP32[i40 >> 2] | 0;
      do {
       if ((i42 | 0) != 0) {
        i43 = i42 | 0;
        i39 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
        if ((i39 | 0) == 0) {
         __ZN7WebCore6IDBKeyD1Ev(i42);
         __ZN3WTF8fastFreeEPv(i42);
         break;
        } else {
         HEAP32[i43 >> 2] = i39;
         break;
        }
       }
      } while (0);
      i40 = i40 + 4 | 0;
      if ((i40 | 0) == (i41 | 0)) {
       break;
      }
     }
     HEAP32[i20 >> 2] = 0;
    }
    i41 = HEAP32[i21 >> 2] | 0;
    if ((i41 | 0) != 0) {
     HEAP32[i21 >> 2] = 0;
     HEAP32[i23 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i41);
    }
    if ((i58 | 0) != 0) {
     i59 = i57;
     break L8;
    }
    i41 = i37 + 48 | 0;
    L74 : do {
     if ((i41 | 0) == (i24 | 0)) {
      i60 = i24;
     } else {
      i40 = i41;
      while (1) {
       i42 = i40 | 0;
       i39 = HEAP32[i42 >> 2] | 0;
       i43 = HEAP32[i42 + 4 >> 2] | 0;
       if (!((i39 | 0) == (-1 | 0) & (i43 | 0) == (-1 | 0) | (i39 | 0) == 0 & (i43 | 0) == 0)) {
        i60 = i40;
        break L74;
       }
       i43 = i40 + 48 | 0;
       if ((i43 | 0) == (i24 | 0)) {
        i60 = i24;
        break;
       } else {
        i40 = i43;
       }
      }
     }
    } while (0);
    if ((i60 | 0) == ((HEAP32[i19 >> 2] | 0) + ((HEAP32[i10 >> 2] | 0) * 48 & -1) | 0)) {
     i25 = 56;
     break L8;
    } else {
     i37 = i60;
     i38 = i57;
    }
   }
   _WTFCrash();
   return 0;
  }
 } while (0);
 if ((i25 | 0) == 56) {
  HEAP8[i13] = 1;
  i59 = 1;
 }
 i13 = HEAP32[i15 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i14;
  return i59 | 0;
 }
 i25 = HEAP32[i15 + 4 >> 2] | 0;
 if ((i25 | 0) > 0) {
  i15 = 0;
  while (1) {
   i57 = i13 + (i15 * 24 & -1) | 0;
   do {
    if (!((HEAP32[i57 >> 2] | 0) == (-1 | 0) & (HEAP32[i57 + 4 >> 2] | 0) == (-1 | 0))) {
     i60 = i13 + (i15 * 24 & -1) + 16 | 0;
     i10 = HEAP32[i60 >> 2] | 0;
     i19 = i13 + (i15 * 24 & -1) + 8 | 0;
     if ((i10 | 0) != 0) {
      i24 = HEAP32[i19 >> 2] | 0;
      i58 = i24 + (i10 << 2) | 0;
      i10 = i24;
      while (1) {
       i24 = HEAP32[i10 >> 2] | 0;
       do {
        if ((i24 | 0) != 0) {
         i56 = i24 | 0;
         i11 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
         if ((i11 | 0) == 0) {
          __ZN7WebCore6IDBKeyD1Ev(i24);
          __ZN3WTF8fastFreeEPv(i24);
          break;
         } else {
          HEAP32[i56 >> 2] = i11;
          break;
         }
        }
       } while (0);
       i10 = i10 + 4 | 0;
       if ((i10 | 0) == (i58 | 0)) {
        break;
       }
      }
      HEAP32[i60 >> 2] = 0;
     }
     i58 = HEAP32[i19 >> 2] | 0;
     if ((i58 | 0) == 0) {
      break;
     }
     HEAP32[i19 >> 2] = 0;
     HEAP32[i13 + (i15 * 24 & -1) + 12 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i58);
    }
   } while (0);
   i15 = i15 + 1 | 0;
   if ((i15 | 0) >= (i25 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i14;
 return i59 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB4openERKNS_14SecurityOriginERKN3WTF6StringES7_PNS_14LevelDBFactoryE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 32 | 0;
 i10 = i6 + 40 | 0;
 i11 = i6 + 48 | 0;
 i12 = i6 + 64 | 0;
 i13 = i6 + 72 | 0;
 i14 = i6 + 88 | 0;
 i15 = i6 + 96 | 0;
 i16 = i6 + 104 | 0;
 i17 = i6 + 112 | 0;
 i18 = i6 + 120 | 0;
 i19 = i6 + 128 | 0;
 i20 = i6 + 136 | 0;
 i21 = i6 + 144 | 0;
 i22 = i6 + 152 | 0;
 i23 = i6 + 160 | 0;
 i24 = i16 | 0;
 i25 = HEAP32[i3 >> 2] | 0;
 HEAP32[i24 >> 2] = i25;
 if ((i25 | 0) != 0) {
  i3 = i25 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = __Znwj(4) | 0;
 HEAP32[i3 >> 2] = H_BASE + 512;
 i25 = i3;
 if (!(__ZNK3WTF6String17containsOnlyASCIIEv(i16) | 0)) {
  __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 120 | 0, 10, 11);
 }
 do {
  if (__ZN7WebCore18makeAllDirectoriesERKN3WTF6StringE(i16) | 0) {
   __ZNK7WebCore14SecurityOrigin18databaseIdentifierEv(i19, i2);
   i3 = i19 | 0;
   i26 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i26 | 0) == 0) {
     i27 = 0;
    } else {
     i28 = i26 | 0;
     i29 = HEAP32[i28 >> 2] | 0;
     i30 = i29 + 2 | 0;
     HEAP32[i28 >> 2] = i29 + 4;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      i27 = i26;
      break;
     } else {
      HEAP32[i28 >> 2] = i30;
      i27 = i26;
      break;
     }
    }
   } while (0);
   i26 = i15 | 0;
   HEAP32[i26 >> 2] = i27;
   i30 = (i27 | 0) == 0;
   if (!i30) {
    i28 = i27 | 0;
    HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i14, i15, H_BASE + 96 | 0);
   i28 = i14 | 0;
   i29 = HEAP32[i28 >> 2] | 0;
   HEAP32[i28 >> 2] = 0;
   i28 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i26 = i28 | 0;
     i31 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i28);
      break;
     } else {
      HEAP32[i26 >> 2] = i31;
      break;
     }
    }
   } while (0);
   if ((i29 | 0) == 0) {
    _WTFCrash();
   }
   i28 = i18 | 0;
   HEAP32[i28 >> 2] = i29;
   __ZN7WebCore24pathByAppendingComponentERKN3WTF6StringES3_(i17, i16, i18);
   i31 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i31 | 0) != 0) {
     i28 = i31 | 0;
     i26 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i26 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i31);
      break;
     } else {
      HEAP32[i28 >> 2] = i26;
      break;
     }
    }
   } while (0);
   do {
    if (!i30) {
     i31 = i27 | 0;
     i29 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
     if ((i29 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i31 >> 2] = i29;
      break;
     }
    }
   } while (0);
   i30 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i29 = i30 | 0;
     i31 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      break;
     } else {
      HEAP32[i29 >> 2] = i31;
      break;
     }
    }
   } while (0);
   i30 = i5;
   FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i30 >> 2] | 0) + 8 >> 2] & 7](i20, i5, i17, i25);
   i3 = i20 | 0;
   i31 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   do {
    if ((i31 | 0) == 0) {
     i32 = 65;
    } else {
     HEAP8[i9] = 0;
     __ZN7WebCore16IDBLevelDBCoding16SchemaVersionKey6encodeEv(i11);
     i3 = i11 | 0;
     i29 = HEAP32[i3 >> 2] | 0;
     HEAP32[i10 >> 2] = i29;
     i26 = i11 + 8 | 0;
     HEAP32[i10 + 4 >> 2] = i29 + (HEAP32[i26 >> 2] | 0);
     i29 = i8 | 0;
     HEAP32[i29 >> 2] = 0;
     i28 = i8 + 4 | 0;
     HEAP32[i28 >> 2] = 0;
     i33 = i8 + 8 | 0;
     HEAP32[i33 >> 2] = 0;
     i34 = i31;
     do {
      if (FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i34 >> 2] | 0) + 8 >> 2] & 1](i31, i10, i8, i9, 0) | 0) {
       if ((HEAP8[i9] & 1) == 0) {
        i35 = 1;
        i36 = 0;
        i37 = 0;
        break;
       }
       i38 = HEAP32[i29 >> 2] | 0;
       i39 = __ZN7WebCore16IDBLevelDBCoding9decodeIntEPKcS2_(i38, i38 + (HEAP32[i33 >> 2] | 0) | 0) | 0;
       i35 = 1;
       i36 = tempRet0;
       i37 = i39;
      } else {
       i35 = 0;
       i36 = 0;
       i37 = 0;
      }
     } while (0);
     if ((HEAP32[i33 >> 2] | 0) != 0) {
      HEAP32[i33 >> 2] = 0;
     }
     i39 = HEAP32[i29 >> 2] | 0;
     if ((i39 | 0) != 0) {
      HEAP32[i29 >> 2] = 0;
      HEAP32[i28 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i39);
     }
     if ((HEAP32[i26 >> 2] | 0) != 0) {
      HEAP32[i26 >> 2] = 0;
     }
     i39 = HEAP32[i3 >> 2] | 0;
     if ((i39 | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
      HEAP32[i11 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i39);
     }
     do {
      if (i35) {
       if ((HEAP8[i9] & 1) == 0) {
        i40 = 1;
        i41 = 1;
        break;
       }
       i39 = 0;
       if ((i36 | 0) > (i39 | 0) | (i36 | 0) == (i39 | 0) & i37 >>> 0 > 2 >>> 0) {
        i40 = 1;
        i41 = 0;
        break;
       }
       i39 = __ZN7WebCore21SerializedScriptValue17wireFormatVersionEv() | 0;
       __ZN7WebCore16IDBLevelDBCoding14DataVersionKey6encodeEv(i13);
       i38 = i13 | 0;
       i42 = HEAP32[i38 >> 2] | 0;
       HEAP32[i12 >> 2] = i42;
       i43 = i13 + 8 | 0;
       HEAP32[i12 + 4 >> 2] = i42 + (HEAP32[i43 >> 2] | 0);
       i42 = i7 | 0;
       HEAP32[i42 >> 2] = 0;
       i44 = i7 + 4 | 0;
       HEAP32[i44 >> 2] = 0;
       i45 = i7 + 8 | 0;
       HEAP32[i45 >> 2] = 0;
       do {
        if (FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i34 >> 2] | 0) + 8 >> 2] & 1](i31, i12, i7, i9, 0) | 0) {
         if ((HEAP8[i9] & 1) == 0) {
          i46 = 1;
          i47 = 0;
          i48 = 0;
          break;
         }
         i49 = HEAP32[i42 >> 2] | 0;
         i50 = __ZN7WebCore16IDBLevelDBCoding9decodeIntEPKcS2_(i49, i49 + (HEAP32[i45 >> 2] | 0) | 0) | 0;
         i46 = 1;
         i47 = tempRet0;
         i48 = i50;
        } else {
         i46 = 0;
         i47 = 0;
         i48 = 0;
        }
       } while (0);
       if ((HEAP32[i45 >> 2] | 0) != 0) {
        HEAP32[i45 >> 2] = 0;
       }
       i50 = HEAP32[i42 >> 2] | 0;
       if ((i50 | 0) != 0) {
        HEAP32[i42 >> 2] = 0;
        HEAP32[i44 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i50);
       }
       if ((HEAP32[i43 >> 2] | 0) != 0) {
        HEAP32[i43 >> 2] = 0;
       }
       i50 = HEAP32[i38 >> 2] | 0;
       if ((i50 | 0) != 0) {
        HEAP32[i38 >> 2] = 0;
        HEAP32[i13 + 4 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i50);
       }
       if (!i46) {
        i40 = 0;
        i41 = 0;
        break;
       }
       if ((HEAP8[i9] & 1) == 0) {
        i40 = 1;
        i41 = 1;
        break;
       }
       i50 = 0;
       i40 = 1;
       i41 = (i47 | 0) <= (i50 | 0) & ((i47 | 0) < (i50 | 0) | i48 >>> 0 <= i39 >>> 0) & 1;
      } else {
       i40 = 0;
       i41 = 0;
      }
     } while (0);
     if (!i40) {
      __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 120 | 0, 7, 11);
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 31](i31);
      i32 = 65;
      break;
     }
     if (i41 << 24 >> 24 == 0) {
      __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 120 | 0, 3, 11);
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 31](i31);
      i32 = 65;
      break;
     } else {
      __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 120 | 0, 1, 11);
      i51 = i31;
      i32 = 70;
      break;
     }
    }
   } while (0);
   do {
    if ((i32 | 0) == 65) {
     if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 7](i5, i17) | 0)) {
      __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 120 | 0, 4, 11);
      HEAP32[i1 >> 2] = 0;
      i52 = i25;
      break;
     }
     FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i30 >> 2] | 0) + 8 >> 2] & 7](i21, i5, i17, i25);
     i31 = i21 | 0;
     i34 = HEAP32[i31 >> 2] | 0;
     HEAP32[i31 >> 2] = 0;
     if ((i34 | 0) == 0) {
      __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 120 | 0, 5, 11);
      HEAP32[i1 >> 2] = 0;
      i52 = i25;
      break;
     } else {
      __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 120 | 0, 6, 11);
      i51 = i34;
      i32 = 70;
      break;
     }
    }
   } while (0);
   do {
    if ((i32 | 0) == 70) {
     i30 = i22 | 0;
     HEAP32[i30 >> 2] = i51;
     i34 = i23 | 0;
     HEAP32[i34 >> 2] = i25;
     __ZN7WebCore22IDBBackingStoreLevelDB6createERKN3WTF6StringENS1_10PassOwnPtrINS_15LevelDBDatabaseEEENS5_INS_17LevelDBComparatorEEE(i1, i4, i22, i23);
     i31 = HEAP32[i34 >> 2] | 0;
     if ((i31 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 31](i31);
     }
     i31 = HEAP32[i30 >> 2] | 0;
     if ((i31 | 0) == 0) {
      i52 = 0;
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 31](i31);
     i52 = 0;
    }
   } while (0);
   i31 = HEAP32[i17 >> 2] | 0;
   if ((i31 | 0) == 0) {
    i53 = i52;
    break;
   }
   i30 = i31 | 0;
   i34 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
   if ((i34 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i31);
    i53 = i52;
    break;
   } else {
    HEAP32[i30 >> 2] = i34;
    i53 = i52;
    break;
   }
  } else {
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 120 | 0, 2, 11);
   HEAP32[i1 >> 2] = 0;
   i53 = i25;
  }
 } while (0);
 if ((i53 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i53 >> 2] | 0) + 4 >> 2] & 31](i53);
 }
 i53 = HEAP32[i24 >> 2] | 0;
 if ((i53 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i24 = i53 | 0;
 i25 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
 if ((i25 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i53);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i24 >> 2] = i25;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore18IndexKeyCursorImpl14loadCurrentRowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 248 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i2 + 80 | 0;
 i14 = i2 + 136 | 0;
 i15 = i2 + 144 | 0;
 i16 = i2 + 152 | 0;
 i17 = i2 + 160 | 0;
 i18 = i2 + 168 | 0;
 i19 = i2 + 176 | 0;
 i20 = i2 + 192 | 0;
 i21 = i2 + 208 | 0;
 i22 = i2 + 216 | 0;
 i23 = i2 + 224 | 0;
 i24 = i2 + 232 | 0;
 i25 = i2 + 240 | 0;
 i26 = i1 + 80 | 0;
 i27 = HEAP32[i26 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 28 >> 2] & 31](i11, i27);
 i27 = HEAP32[i11 >> 2] | 0;
 i11 = HEAP32[i26 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 28 >> 2] & 31](i12, i11);
 i11 = HEAP32[i12 + 4 >> 2] | 0;
 __ZN7WebCore16IDBLevelDBCoding12IndexDataKeyC1Ev(i13);
 __ZN7WebCore16IDBLevelDBCoding12IndexDataKey6decodeEPKcS3_PS1_(i27, i11, i13) | 0;
 __ZNK7WebCore16IDBLevelDBCoding12IndexDataKey7userKeyEv(i14, i13);
 i11 = i14 | 0;
 i14 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i27 = i1 + 84 | 0;
 i12 = HEAP32[i27 >> 2] | 0;
 HEAP32[i27 >> 2] = i14;
 do {
  if ((i12 | 0) != 0) {
   i14 = i12 | 0;
   i27 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i27 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i12);
    __ZN3WTF8fastFreeEPv(i12);
    break;
   } else {
    HEAP32[i14 >> 2] = i27;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i11 = i12 | 0;
   i27 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i27 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i12);
    __ZN3WTF8fastFreeEPv(i12);
    break;
   } else {
    HEAP32[i11 >> 2] = i27;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i26 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 32 >> 2] & 31](i16, i12);
 i12 = HEAP32[i16 >> 2] | 0;
 i16 = HEAP32[i26 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 32 >> 2] & 31](i17, i16);
 i16 = __ZN7WebCore16IDBLevelDBCoding12decodeVarIntEPKcS2_Rx(i12, HEAP32[i17 + 4 >> 2] | 0, i15) | 0;
 do {
  if ((i16 | 0) == 0) {
   __ZN3WTF6String6formatEPKcz(i7, H_BASE + 24 | 0, (i28 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i28 >> 2] = H_BASE + 88, i28) | 0);
   STACKTOP = i28;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i8, i7, 0);
   i17 = i8 | 0;
   i12 = HEAP32[i17 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i29 = 0;
   } else {
    i29 = i12 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i29, 10, 22);
   i12 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i17 = i12 | 0;
     i27 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i12);
      break;
     } else {
      HEAP32[i17 >> 2] = i27;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i7 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i30 = 0;
    break;
   }
   i27 = i12 | 0;
   i17 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    i30 = 0;
    break;
   } else {
    HEAP32[i27 >> 2] = i17;
    i30 = 0;
    break;
   }
  } else {
   i17 = HEAP32[i26 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 32 >> 2] & 31](i18, i17);
   i17 = i1 + 92 | 0;
   if ((__ZN7WebCore16IDBLevelDBCoding12decodeIDBKeyEPKcS2_RN3WTF6RefPtrINS_6IDBKeyEEE(i16, HEAP32[i18 + 4 >> 2] | 0, i17) | 0) == 0) {
    __ZN3WTF6String6formatEPKcz(i5, H_BASE + 24 | 0, (i28 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i28 >> 2] = H_BASE + 88, i28) | 0);
    STACKTOP = i28;
    __ZNK3WTF6String4utf8ENS_14ConversionModeE(i6, i5, 0);
    i27 = i6 | 0;
    i12 = HEAP32[i27 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i31 = 0;
    } else {
     i31 = i12 + 8 | 0;
    }
    __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i31, 10, 22);
    i12 = HEAP32[i27 >> 2] | 0;
    do {
     if ((i12 | 0) != 0) {
      i27 = i12 | 0;
      i11 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i11 | 0) == 0) {
       __ZN3WTF8fastFreeEPv(i12);
       break;
      } else {
       HEAP32[i27 >> 2] = i11;
       break;
      }
     }
    } while (0);
    i12 = HEAP32[i5 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i30 = 0;
     break;
    }
    i11 = i12 | 0;
    i27 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     i30 = 0;
     break;
    } else {
     HEAP32[i11 >> 2] = i27;
     i30 = 0;
     break;
    }
   }
   i27 = __ZNK7WebCore16IDBLevelDBCoding12IndexDataKey10databaseIdEv(i13) | 0;
   i11 = tempRet0;
   i12 = __ZNK7WebCore16IDBLevelDBCoding12IndexDataKey13objectStoreIdEv(i13) | 0;
   __ZN7WebCore16IDBLevelDBCoding18ObjectStoreDataKey6encodeExxRKNS_6IDBKeyE(i19, i27, i11, i12, tempRet0, HEAP32[i17 >> 2] | 0);
   i12 = i20 | 0;
   HEAP32[i12 >> 2] = 0;
   i11 = i20 + 4 | 0;
   HEAP32[i11 >> 2] = 0;
   i27 = i20 + 8 | 0;
   HEAP32[i27 >> 2] = 0;
   HEAP8[i21] = 0;
   i14 = i1 + 16 | 0;
   i32 = HEAP32[i14 >> 2] | 0;
   i33 = i19 | 0;
   i34 = HEAP32[i33 >> 2] | 0;
   HEAP32[i22 >> 2] = i34;
   i35 = i19 + 8 | 0;
   HEAP32[i22 + 4 >> 2] = i34 + (HEAP32[i35 >> 2] | 0);
   do {
    if (__ZN7WebCore18LevelDBTransaction7safeGetERKNS_12LevelDBSliceERN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEERb(i32, i22, i20, i21) | 0) {
     if ((HEAP8[i21] & 1) == 0) {
      i34 = HEAP32[i14 >> 2] | 0;
      i36 = HEAP32[i26 >> 2] | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i36 >> 2] | 0) + 28 >> 2] & 31](i23, i36);
      __ZN7WebCore18LevelDBTransaction6removeERKNS_12LevelDBSliceE(i34, i23);
      i37 = 0;
      break;
     }
     i34 = HEAP32[i12 >> 2] | 0;
     if ((__ZN7WebCore16IDBLevelDBCoding12decodeVarIntEPKcS2_Rx(i34, i34 + (HEAP32[i27 >> 2] | 0) | 0, i24) | 0) != 0) {
      if ((HEAP32[i24 >> 2] | 0) == (HEAP32[i15 >> 2] | 0) & (HEAP32[i24 + 4 >> 2] | 0) == (HEAP32[i15 + 4 >> 2] | 0)) {
       i37 = 1;
       break;
      }
      i34 = HEAP32[i14 >> 2] | 0;
      i36 = HEAP32[i26 >> 2] | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i36 >> 2] | 0) + 28 >> 2] & 31](i25, i36);
      __ZN7WebCore18LevelDBTransaction6removeERKNS_12LevelDBSliceE(i34, i25);
      i37 = 0;
      break;
     }
     __ZN3WTF6String6formatEPKcz(i9, H_BASE + 24 | 0, (i28 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i28 >> 2] = H_BASE + 88, i28) | 0);
     STACKTOP = i28;
     __ZNK3WTF6String4utf8ENS_14ConversionModeE(i10, i9, 0);
     i34 = i10 | 0;
     i36 = HEAP32[i34 >> 2] | 0;
     if ((i36 | 0) == 0) {
      i38 = 0;
     } else {
      i38 = i36 + 8 | 0;
     }
     __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i38, 10, 22);
     i36 = HEAP32[i34 >> 2] | 0;
     do {
      if ((i36 | 0) != 0) {
       i34 = i36 | 0;
       i39 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
       if ((i39 | 0) == 0) {
        __ZN3WTF8fastFreeEPv(i36);
        break;
       } else {
        HEAP32[i34 >> 2] = i39;
        break;
       }
      }
     } while (0);
     i36 = HEAP32[i9 >> 2] | 0;
     if ((i36 | 0) == 0) {
      i37 = 0;
      break;
     }
     i39 = i36 | 0;
     i34 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
     if ((i34 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i36);
      i37 = 0;
      break;
     } else {
      HEAP32[i39 >> 2] = i34;
      i37 = 0;
      break;
     }
    } else {
     __ZN3WTF6String6formatEPKcz(i3, H_BASE + 24 | 0, (i28 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i28 >> 2] = H_BASE + 88, i28) | 0);
     STACKTOP = i28;
     __ZNK3WTF6String4utf8ENS_14ConversionModeE(i4, i3, 0);
     i34 = i4 | 0;
     i39 = HEAP32[i34 >> 2] | 0;
     if ((i39 | 0) == 0) {
      i40 = 0;
     } else {
      i40 = i39 + 8 | 0;
     }
     __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i40, 10, 22);
     i39 = HEAP32[i34 >> 2] | 0;
     do {
      if ((i39 | 0) != 0) {
       i34 = i39 | 0;
       i36 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
       if ((i36 | 0) == 0) {
        __ZN3WTF8fastFreeEPv(i39);
        break;
       } else {
        HEAP32[i34 >> 2] = i36;
        break;
       }
      }
     } while (0);
     i39 = HEAP32[i3 >> 2] | 0;
     if ((i39 | 0) == 0) {
      i37 = 0;
      break;
     }
     i36 = i39 | 0;
     i34 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
     if ((i34 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i39);
      i37 = 0;
      break;
     } else {
      HEAP32[i36 >> 2] = i34;
      i37 = 0;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i27 >> 2] | 0) != 0) {
    HEAP32[i27 >> 2] = 0;
   }
   i14 = HEAP32[i12 >> 2] | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i12 >> 2] = 0;
    HEAP32[i11 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i14);
   }
   if ((HEAP32[i35 >> 2] | 0) != 0) {
    HEAP32[i35 >> 2] = 0;
   }
   i14 = HEAP32[i33 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i30 = i37;
    break;
   }
   HEAP32[i33 >> 2] = 0;
   HEAP32[i19 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i14);
   i30 = i37;
  }
 } while (0);
 i37 = i13 + 44 | 0;
 if ((HEAP32[i37 >> 2] | 0) != 0) {
  HEAP32[i37 >> 2] = 0;
 }
 i37 = i13 + 36 | 0;
 i19 = HEAP32[i37 >> 2] | 0;
 if ((i19 | 0) != 0) {
  HEAP32[i37 >> 2] = 0;
  HEAP32[i13 + 40 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i19);
 }
 i19 = i13 + 32 | 0;
 if ((HEAP32[i19 >> 2] | 0) != 0) {
  HEAP32[i19 >> 2] = 0;
 }
 i19 = i13 + 24 | 0;
 i37 = HEAP32[i19 >> 2] | 0;
 if ((i37 | 0) == 0) {
  STACKTOP = i2;
  return i30 | 0;
 }
 HEAP32[i19 >> 2] = 0;
 HEAP32[i13 + 28 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i37);
 STACKTOP = i2;
 return i30 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB28getKeyGeneratorCurrentNumberERNS_33IDBBackingStoreTransactionLevelDBExxRx(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, d56 = +0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
 i8 = i1 | 0;
 i9 = i1 + 8 | 0;
 i10 = i1 + 16 | 0;
 i11 = i1 + 32 | 0;
 i12 = i1 + 48 | 0;
 i13 = i1 + 56 | 0;
 i14 = i1 + 64 | 0;
 i15 = i1 + 80 | 0;
 i16 = i1 + 96 | 0;
 i17 = i1 + 112 | 0;
 i18 = i1 + 128 | 0;
 i19 = i1 + 136 | 0;
 i20 = i1 + 144 | 0;
 i21 = i1 + 152 | 0;
 i22 = i1 + 160 | 0;
 i23 = i1 + 168 | 0;
 i24 = i1 + 176 | 0;
 i25 = i1 + 192 | 0;
 i26 = i1 + 200 | 0;
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix17isValidDatabaseIdEx(i3, i4) | 0)) {
  i27 = 0;
  STACKTOP = i1;
  return i27 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix20isValidObjectStoreIdEx(i5, i6) | 0)) {
  i27 = 0;
  STACKTOP = i1;
  return i27 | 0;
 }
 i28 = HEAP32[i2 + 20 >> 2] | 0;
 __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey6encodeExxh(i10, i3, i4, i5, i6, 7);
 HEAP32[i7 >> 2] = -1;
 HEAP32[i7 + 4 >> 2] = -1;
 i2 = i11 | 0;
 HEAP32[i2 >> 2] = 0;
 i29 = i11 + 4 | 0;
 HEAP32[i29 >> 2] = 0;
 i30 = i11 + 8 | 0;
 HEAP32[i30 >> 2] = 0;
 HEAP8[i12] = 0;
 i31 = i10 | 0;
 i32 = HEAP32[i31 >> 2] | 0;
 HEAP32[i13 >> 2] = i32;
 i33 = i10 + 8 | 0;
 HEAP32[i13 + 4 >> 2] = i32 + (HEAP32[i33 >> 2] | 0);
 do {
  if (__ZN7WebCore18LevelDBTransaction7safeGetERKNS_12LevelDBSliceERN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEERb(i28, i13, i11, i12) | 0) {
   do {
    if ((HEAP8[i12] & 1) == 0) {
     __ZN7WebCore16IDBLevelDBCoding9minIDBKeyEv(i15);
     __ZN7WebCore16IDBLevelDBCoding18ObjectStoreDataKey6encodeExxN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEE(i14, i3, i4, i5, i6, i15);
     i32 = i15 + 8 | 0;
     if ((HEAP32[i32 >> 2] | 0) != 0) {
      HEAP32[i32 >> 2] = 0;
     }
     i32 = i15 | 0;
     i34 = HEAP32[i32 >> 2] | 0;
     if ((i34 | 0) != 0) {
      HEAP32[i32 >> 2] = 0;
      HEAP32[i15 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i34);
     }
     __ZN7WebCore16IDBLevelDBCoding9maxIDBKeyEv(i17);
     __ZN7WebCore16IDBLevelDBCoding18ObjectStoreDataKey6encodeExxN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEE(i16, i3, i4, i5, i6, i17);
     i34 = i17 + 8 | 0;
     if ((HEAP32[i34 >> 2] | 0) != 0) {
      HEAP32[i34 >> 2] = 0;
     }
     i34 = i17 | 0;
     i32 = HEAP32[i34 >> 2] | 0;
     if ((i32 | 0) != 0) {
      HEAP32[i34 >> 2] = 0;
      HEAP32[i17 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i32);
     }
     __ZN7WebCore18LevelDBTransaction14createIteratorEv(i18, i28);
     i32 = i18 | 0;
     i34 = HEAP32[i32 >> 2] | 0;
     HEAP32[i32 >> 2] = 0;
     i32 = HEAP32[(HEAP32[i34 >> 2] | 0) + 16 >> 2] | 0;
     i35 = i14 | 0;
     i36 = HEAP32[i35 >> 2] | 0;
     HEAP32[i19 >> 2] = i36;
     i37 = i14 + 8 | 0;
     HEAP32[i19 + 4 >> 2] = i36 + (HEAP32[i37 >> 2] | 0);
     FUNCTION_TABLE_vii[i32 & 31](i34, i19);
     i32 = i34;
     L23 : do {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i32 >> 2] | 0) + 8 >> 2] & 31](i34) | 0) {
       i36 = i34;
       i38 = i21 | 0;
       i39 = i16 | 0;
       i40 = i21 + 4 | 0;
       i41 = i16 + 8 | 0;
       i42 = i22 | 0;
       i43 = i23 + 4 | 0;
       i44 = i24 | 0;
       i45 = i24 + 4 | 0;
       i46 = i24 + 8 | 0;
       i47 = i25 | 0;
       i48 = i26 | 0;
       i49 = i34;
       i50 = 0;
       i51 = 0;
       while (1) {
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i36 >> 2] | 0) + 28 >> 2] & 31](i20, i34);
        i52 = HEAP32[i39 >> 2] | 0;
        HEAP32[i38 >> 2] = i52;
        HEAP32[i40 >> 2] = i52 + (HEAP32[i41 >> 2] | 0);
        if ((__ZN7WebCore16IDBLevelDBCoding7compareERKNS_12LevelDBSliceES3_b(i20, i21, 0) | 0) >= 0) {
         break;
        }
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i36 >> 2] | 0) + 28 >> 2] & 31](i22, i34);
        i52 = HEAP32[i42 >> 2] | 0;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i36 >> 2] | 0) + 28 >> 2] & 31](i23, i34);
        i53 = HEAP32[i43 >> 2] | 0;
        HEAP32[i44 >> 2] = 0;
        HEAP32[i45 >> 2] = 0;
        HEAP32[i46 >> 2] = 0;
        __ZN7WebCore16IDBLevelDBCoding18ObjectStoreDataKey6decodeEPKcS3_PS1_(i52, i53, i24) | 0;
        __ZNK7WebCore16IDBLevelDBCoding18ObjectStoreDataKey7userKeyEv(i25, i24);
        i53 = HEAP32[i47 >> 2] | 0;
        i52 = (HEAP32[i53 + 4 >> 2] | 0) == 4;
        do {
         if ((i53 | 0) != 0) {
          i54 = i53 | 0;
          i55 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
          if ((i55 | 0) == 0) {
           __ZN7WebCore6IDBKeyD1Ev(i53);
           __ZN3WTF8fastFreeEPv(i53);
           break;
          } else {
           HEAP32[i54 >> 2] = i55;
           break;
          }
         }
        } while (0);
        if (i52) {
         __ZNK7WebCore16IDBLevelDBCoding18ObjectStoreDataKey7userKeyEv(i26, i24);
         i53 = HEAP32[i48 >> 2] | 0;
         d56 = +HEAPF64[i53 + 24 >> 3];
         i55 = ~~+d56 >>> 0;
         i54 = (tempDouble = +d56, +Math_abs(tempDouble) >= +1 ? tempDouble > +0 ? (Math_min(+Math_floor(tempDouble / +4294967296), +4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / +4294967296) >>> 0 : 0);
         do {
          if ((i53 | 0) != 0) {
           i57 = i53 | 0;
           i58 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
           if ((i58 | 0) == 0) {
            __ZN7WebCore6IDBKeyD1Ev(i53);
            __ZN3WTF8fastFreeEPv(i53);
            break;
           } else {
            HEAP32[i57 >> 2] = i58;
            break;
           }
          }
         } while (0);
         i53 = (i54 | 0) > (i50 | 0) | (i54 | 0) == (i50 | 0) & i55 >>> 0 > i51 >>> 0;
         i59 = i53 ? i54 : i50;
         i60 = i53 ? i55 : i51;
        } else {
         i59 = i50;
         i60 = i51;
        }
        if ((HEAP32[i46 >> 2] | 0) != 0) {
         HEAP32[i46 >> 2] = 0;
        }
        i53 = HEAP32[i44 >> 2] | 0;
        if ((i53 | 0) != 0) {
         HEAP32[i44 >> 2] = 0;
         HEAP32[i45 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i53);
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i49 >> 2] | 0) + 20 >> 2] & 31](i34);
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i32 >> 2] | 0) + 8 >> 2] & 31](i34) | 0) {
         i50 = i59;
         i51 = i60;
        } else {
         i61 = i59;
         i62 = i60;
         i63 = 43;
         break L23;
        }
       }
       i45 = _i64Add(i51, i50, 1, 0) | 0;
       HEAP32[i7 >> 2] = i45;
       HEAP32[i7 + 4 >> 2] = tempRet0;
       i64 = i49;
       i63 = 45;
      } else {
       i61 = 0;
       i62 = 0;
       i63 = 43;
      }
     } while (0);
     do {
      if ((i63 | 0) == 43) {
       i32 = _i64Add(i62, i61, 1, 0) | 0;
       HEAP32[i7 >> 2] = i32;
       HEAP32[i7 + 4 >> 2] = tempRet0;
       if ((i34 | 0) == 0) {
        break;
       }
       i64 = i34;
       i63 = 45;
      }
     } while (0);
     if ((i63 | 0) == 45) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i64 >> 2] | 0) + 4 >> 2] & 31](i34);
     }
     i32 = i16 + 8 | 0;
     if ((HEAP32[i32 >> 2] | 0) != 0) {
      HEAP32[i32 >> 2] = 0;
     }
     i32 = i16 | 0;
     i45 = HEAP32[i32 >> 2] | 0;
     if ((i45 | 0) != 0) {
      HEAP32[i32 >> 2] = 0;
      HEAP32[i16 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i45);
     }
     if ((HEAP32[i37 >> 2] | 0) != 0) {
      HEAP32[i37 >> 2] = 0;
     }
     i45 = HEAP32[i35 >> 2] | 0;
     if ((i45 | 0) == 0) {
      break;
     }
     HEAP32[i35 >> 2] = 0;
     HEAP32[i14 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i45);
    } else {
     i45 = HEAP32[i2 >> 2] | 0;
     i32 = __ZN7WebCore16IDBLevelDBCoding9decodeIntEPKcS2_(i45, i45 + (HEAP32[i30 >> 2] | 0) | 0) | 0;
     HEAP32[i7 >> 2] = i32;
     HEAP32[i7 + 4 >> 2] = tempRet0;
    }
   } while (0);
   i65 = (HEAP32[i7 >> 2] | 0) != 0 | (HEAP32[i7 + 4 >> 2] | 0) != 0;
  } else {
   __ZN3WTF6String6formatEPKcz(i8, H_BASE + 24 | 0, (i32 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i32 >> 2] = H_BASE + 88, i32) | 0);
   STACKTOP = i32;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i9, i8, 0);
   i32 = i9 | 0;
   i45 = HEAP32[i32 >> 2] | 0;
   if ((i45 | 0) == 0) {
    i66 = 0;
   } else {
    i66 = i45 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i66, 6, 22);
   i45 = HEAP32[i32 >> 2] | 0;
   do {
    if ((i45 | 0) != 0) {
     i32 = i45 | 0;
     i44 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     if ((i44 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i45);
      break;
     } else {
      HEAP32[i32 >> 2] = i44;
      break;
     }
    }
   } while (0);
   i45 = HEAP32[i8 >> 2] | 0;
   if ((i45 | 0) == 0) {
    i65 = 0;
    break;
   }
   i44 = i45 | 0;
   i32 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i45);
    i65 = 0;
    break;
   } else {
    HEAP32[i44 >> 2] = i32;
    i65 = 0;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i30 >> 2] | 0) != 0) {
  HEAP32[i30 >> 2] = 0;
 }
 i30 = HEAP32[i2 >> 2] | 0;
 if ((i30 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i29 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i30);
 }
 if ((HEAP32[i33 >> 2] | 0) != 0) {
  HEAP32[i33 >> 2] = 0;
 }
 i33 = HEAP32[i31 >> 2] | 0;
 if ((i33 | 0) == 0) {
  i27 = i65;
  STACKTOP = i1;
  return i27 | 0;
 }
 HEAP32[i31 >> 2] = 0;
 HEAP32[i10 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i33);
 i27 = i65;
 STACKTOP = i1;
 return i27 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB25createIDBDatabaseMetaDataERNS_19IDBDatabaseMetadataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 232 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 56 | 0;
 i10 = i3 + 64 | 0;
 i11 = i3 + 80 | 0;
 i12 = i3 + 88 | 0;
 i13 = i3 + 96 | 0;
 i14 = i3 + 112 | 0;
 i15 = i3 + 120 | 0;
 i16 = i3 + 128 | 0;
 i17 = i3 + 136 | 0;
 i18 = i3 + 152 | 0;
 i19 = i3 + 160 | 0;
 i20 = i3 + 176 | 0;
 i21 = i3 + 184 | 0;
 i22 = i3 + 192 | 0;
 i23 = i3 + 208 | 0;
 i24 = i3 + 216 | 0;
 i25 = i1 + 12 | 0;
 i26 = i2 + 8 | 0;
 __ZN7WebCore18LevelDBTransaction6createEPNS_15LevelDBDatabaseE(i14, HEAP32[i25 >> 2] | 0);
 i27 = i14 | 0;
 i14 = HEAP32[i27 >> 2] | 0;
 HEAP32[i27 >> 2] = 0;
 HEAP32[i26 >> 2] = -1;
 HEAP32[i26 + 4 >> 2] = -1;
 HEAP8[i15] = 0;
 __ZN7WebCore16IDBLevelDBCoding16MaxDatabaseIdKey6encodeEv(i17);
 i27 = i17 | 0;
 i28 = HEAP32[i27 >> 2] | 0;
 HEAP32[i16 >> 2] = i28;
 i29 = i17 + 8 | 0;
 HEAP32[i16 + 4 >> 2] = i28 + (HEAP32[i29 >> 2] | 0);
 i28 = i13 | 0;
 HEAP32[i28 >> 2] = 0;
 i30 = i13 + 4 | 0;
 HEAP32[i30 >> 2] = 0;
 i31 = i13 + 8 | 0;
 HEAP32[i31 >> 2] = 0;
 do {
  if (__ZN7WebCore18LevelDBTransaction7safeGetERKNS_12LevelDBSliceERN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEERb(i14, i16, i13, i15) | 0) {
   if ((HEAP8[i15] & 1) == 0) {
    i32 = 1;
    i33 = 0;
    i34 = 0;
    break;
   }
   i35 = HEAP32[i28 >> 2] | 0;
   i36 = __ZN7WebCore16IDBLevelDBCoding9decodeIntEPKcS2_(i35, i35 + (HEAP32[i31 >> 2] | 0) | 0) | 0;
   i35 = _i64Add(i36, tempRet0, 1, 0) | 0;
   i32 = 1;
   i33 = tempRet0;
   i34 = i35;
  } else {
   i32 = 0;
   i33 = 0;
   i34 = 0;
  }
 } while (0);
 if ((HEAP32[i31 >> 2] | 0) != 0) {
  HEAP32[i31 >> 2] = 0;
 }
 i31 = HEAP32[i28 >> 2] | 0;
 if ((i31 | 0) != 0) {
  HEAP32[i28 >> 2] = 0;
  HEAP32[i30 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i31);
 }
 if ((HEAP32[i29 >> 2] | 0) != 0) {
  HEAP32[i29 >> 2] = 0;
 }
 i29 = HEAP32[i27 >> 2] | 0;
 if ((i29 | 0) != 0) {
  HEAP32[i27 >> 2] = 0;
  HEAP32[i17 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i29);
 }
 do {
  if (i32) {
   i29 = (HEAP8[i15] & 1) == 0;
   i17 = i29 ? 1 : i34;
   i27 = i29 ? 0 : i33;
   __ZN7WebCore16IDBLevelDBCoding16MaxDatabaseIdKey6encodeEv(i19);
   i29 = i19 | 0;
   i31 = HEAP32[i29 >> 2] | 0;
   HEAP32[i18 >> 2] = i31;
   i30 = i19 + 8 | 0;
   HEAP32[i18 + 4 >> 2] = i31 + (HEAP32[i30 >> 2] | 0);
   __ZN7WebCore16IDBLevelDBCoding9encodeIntEx(i10, i17, i27);
   __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i14, i18, i10);
   i31 = i10 + 8 | 0;
   if ((HEAP32[i31 >> 2] | 0) != 0) {
    HEAP32[i31 >> 2] = 0;
   }
   i31 = i10 | 0;
   i28 = HEAP32[i31 >> 2] | 0;
   if ((i28 | 0) != 0) {
    HEAP32[i31 >> 2] = 0;
    HEAP32[i10 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i28);
   }
   if ((HEAP32[i30 >> 2] | 0) != 0) {
    HEAP32[i30 >> 2] = 0;
   }
   i30 = HEAP32[i29 >> 2] | 0;
   if ((i30 | 0) != 0) {
    HEAP32[i29 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i30);
   }
   if (__ZN7WebCore18LevelDBTransaction6commitEv(i14) | 0) {
    HEAP32[i26 >> 2] = i17;
    HEAP32[i26 + 4 >> 2] = i27;
    i37 = 1;
    break;
   }
   __ZN3WTF6String6formatEPKcz(i8, H_BASE + 24 | 0, (i38 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i38 >> 2] = H_BASE + 64, i38) | 0);
   STACKTOP = i38;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i9, i8, 0);
   i27 = i9 | 0;
   i17 = HEAP32[i27 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i39 = 0;
   } else {
    i39 = i17 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i39, 18, 22);
   i17 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i27 = i17 | 0;
     i30 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     if ((i30 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i17);
      break;
     } else {
      HEAP32[i27 >> 2] = i30;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i8 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i37 = 0;
    break;
   }
   i30 = i17 | 0;
   i27 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
   if ((i27 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    i37 = 0;
    break;
   } else {
    HEAP32[i30 >> 2] = i27;
    i37 = 0;
    break;
   }
  } else {
   __ZN3WTF6String6formatEPKcz(i11, H_BASE + 24 | 0, (i38 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i38 >> 2] = H_BASE + 88, i38) | 0);
   STACKTOP = i38;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i12, i11, 0);
   i27 = i12 | 0;
   i30 = HEAP32[i27 >> 2] | 0;
   if ((i30 | 0) == 0) {
    i40 = 0;
   } else {
    i40 = i30 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i40, 18, 22);
   i30 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i27 = i30 | 0;
     i17 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i30);
      break;
     } else {
      HEAP32[i27 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i30 = HEAP32[i11 >> 2] | 0;
   if ((i30 | 0) == 0) {
    i37 = 0;
    break;
   }
   i17 = i30 | 0;
   i27 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i27 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i30);
    i37 = 0;
    break;
   } else {
    HEAP32[i17 >> 2] = i27;
    i37 = 0;
    break;
   }
  }
 } while (0);
 do {
  if ((i14 | 0) != 0) {
   i11 = i14 | 0;
   i40 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i40 | 0) == 0) {
    __ZN7WebCore18LevelDBTransactionD1Ev(i14);
    __ZN3WTF8fastFreeEPv(i14);
    break;
   } else {
    HEAP32[i11 >> 2] = i40;
    break;
   }
  }
 } while (0);
 if (!i37) {
  i41 = 0;
  STACKTOP = i3;
  return i41 | 0;
 }
 __ZN7WebCore18LevelDBTransaction6createEPNS_15LevelDBDatabaseE(i20, HEAP32[i25 >> 2] | 0);
 i25 = i20 | 0;
 i20 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 __ZN7WebCore16IDBLevelDBCoding15DatabaseNameKey6encodeERKN3WTF6StringES5_(i22, i1 + 8 | 0, i2 | 0);
 i1 = i22 | 0;
 i25 = HEAP32[i1 >> 2] | 0;
 HEAP32[i21 >> 2] = i25;
 i37 = i22 + 8 | 0;
 HEAP32[i21 + 4 >> 2] = i25 + (HEAP32[i37 >> 2] | 0);
 __ZN7WebCore16IDBLevelDBCoding9encodeIntEx(i7, HEAP32[i26 >> 2] | 0, HEAP32[i26 + 4 >> 2] | 0);
 __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i20, i21, i7);
 i21 = i7 + 8 | 0;
 if ((HEAP32[i21 >> 2] | 0) != 0) {
  HEAP32[i21 >> 2] = 0;
 }
 i21 = i7 | 0;
 i25 = HEAP32[i21 >> 2] | 0;
 if ((i25 | 0) != 0) {
  HEAP32[i21 >> 2] = 0;
  HEAP32[i7 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i25);
 }
 if ((HEAP32[i37 >> 2] | 0) != 0) {
  HEAP32[i37 >> 2] = 0;
 }
 i37 = HEAP32[i1 >> 2] | 0;
 if ((i37 | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i22 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i37);
 }
 __ZN7WebCore16IDBLevelDBCoding19DatabaseMetaDataKey6encodeExNS1_12MetaDataTypeE(i24, HEAP32[i26 >> 2] | 0, HEAP32[i26 + 4 >> 2] | 0, 4);
 i26 = i24 | 0;
 i37 = HEAP32[i26 >> 2] | 0;
 HEAP32[i23 >> 2] = i37;
 i22 = i24 + 8 | 0;
 HEAP32[i23 + 4 >> 2] = i37 + (HEAP32[i22 >> 2] | 0);
 i37 = i2 + 16 | 0;
 __ZN7WebCore16IDBLevelDBCoding12encodeVarIntEx(i6, HEAP32[i37 >> 2] | 0, HEAP32[i37 + 4 >> 2] | 0);
 __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i20, i23, i6);
 i23 = i6 + 8 | 0;
 if ((HEAP32[i23 >> 2] | 0) != 0) {
  HEAP32[i23 >> 2] = 0;
 }
 i23 = i6 | 0;
 i37 = HEAP32[i23 >> 2] | 0;
 if ((i37 | 0) != 0) {
  HEAP32[i23 >> 2] = 0;
  HEAP32[i6 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i37);
 }
 if ((HEAP32[i22 >> 2] | 0) != 0) {
  HEAP32[i22 >> 2] = 0;
 }
 i22 = HEAP32[i26 >> 2] | 0;
 if ((i22 | 0) != 0) {
  HEAP32[i26 >> 2] = 0;
  HEAP32[i24 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i22);
 }
 do {
  if (__ZN7WebCore18LevelDBTransaction6commitEv(i20) | 0) {
   i42 = 1;
  } else {
   __ZN3WTF6String6formatEPKcz(i4, H_BASE + 24 | 0, (i38 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i38 >> 2] = H_BASE + 64, i38) | 0);
   STACKTOP = i38;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i5, i4, 0);
   i22 = i5 | 0;
   i24 = HEAP32[i22 >> 2] | 0;
   if ((i24 | 0) == 0) {
    i43 = 0;
   } else {
    i43 = i24 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i43, 20, 22);
   i24 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i22 = i24 | 0;
     i26 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i24);
      break;
     } else {
      HEAP32[i22 >> 2] = i26;
      break;
     }
    }
   } while (0);
   i24 = HEAP32[i4 >> 2] | 0;
   if ((i24 | 0) == 0) {
    i42 = 0;
    break;
   }
   i26 = i24 | 0;
   i22 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    i42 = 0;
    break;
   } else {
    HEAP32[i26 >> 2] = i22;
    i42 = 0;
    break;
   }
  }
 } while (0);
 if ((i20 | 0) == 0) {
  i41 = i42;
  STACKTOP = i3;
  return i41 | 0;
 }
 i4 = i20 | 0;
 i43 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i43 | 0) == 0) {
  __ZN7WebCore18LevelDBTransactionD1Ev(i20);
  __ZN3WTF8fastFreeEPv(i20);
  i41 = i42;
  STACKTOP = i3;
  return i41 | 0;
 } else {
  HEAP32[i4 >> 2] = i43;
  i41 = i42;
  STACKTOP = i3;
  return i41 | 0;
 }
 return 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB11createIndexERNS_33IDBBackingStoreTransactionLevelDBExxxRKN3WTF6StringERKNS_10IDBKeyPathEbb(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 var i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 264 | 0;
 i13 = i1 | 0;
 i14 = i1 + 16 | 0;
 i15 = i1 + 32 | 0;
 i16 = i1 + 48 | 0;
 i17 = i1 + 64 | 0;
 i18 = i1 + 80 | 0;
 i19 = i1 + 88 | 0;
 i20 = i1 + 96 | 0;
 i21 = i1 + 104 | 0;
 i22 = i1 + 112 | 0;
 i23 = i1 + 128 | 0;
 i24 = i1 + 144 | 0;
 i25 = i1 + 152 | 0;
 i26 = i1 + 160 | 0;
 i27 = i1 + 168 | 0;
 i28 = i1 + 184 | 0;
 i29 = i1 + 200 | 0;
 i30 = i1 + 216 | 0;
 i31 = i1 + 232 | 0;
 i32 = i1 + 240 | 0;
 i33 = i1 + 248 | 0;
 i34 = i1 + 256 | 0;
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix17isValidDatabaseIdEx(i3, i4) | 0)) {
  i35 = 0;
  STACKTOP = i1;
  return i35 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix20isValidObjectStoreIdEx(i5, i6) | 0)) {
  i35 = 0;
  STACKTOP = i1;
  return i35 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix14isValidIndexIdEx(i7, i8) | 0)) {
  i35 = 0;
  STACKTOP = i1;
  return i35 | 0;
 }
 i36 = HEAP32[i2 + 20 >> 2] | 0;
 __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey6encodeExxh(i23, i3, i4, i5, i6, 5);
 HEAP8[i24] = 0;
 i2 = i23 | 0;
 i37 = HEAP32[i2 >> 2] | 0;
 HEAP32[i25 >> 2] = i37;
 i38 = i23 + 8 | 0;
 HEAP32[i25 + 4 >> 2] = i37 + (HEAP32[i38 >> 2] | 0);
 i37 = i22 | 0;
 HEAP32[i37 >> 2] = 0;
 i39 = i22 + 4 | 0;
 HEAP32[i39 >> 2] = 0;
 i40 = i22 + 8 | 0;
 HEAP32[i40 >> 2] = 0;
 do {
  if (__ZN7WebCore18LevelDBTransaction7safeGetERKNS_12LevelDBSliceERN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEERb(i36, i25, i22, i24) | 0) {
   if ((HEAP8[i24] & 1) == 0) {
    i41 = 1;
    i42 = -1;
    i43 = -1;
    break;
   }
   i44 = HEAP32[i37 >> 2] | 0;
   i45 = __ZN7WebCore16IDBLevelDBCoding9decodeIntEPKcS2_(i44, i44 + (HEAP32[i40 >> 2] | 0) | 0) | 0;
   i41 = 1;
   i42 = tempRet0;
   i43 = i45;
  } else {
   i41 = 0;
   i42 = -1;
   i43 = -1;
  }
 } while (0);
 if ((HEAP32[i40 >> 2] | 0) != 0) {
  HEAP32[i40 >> 2] = 0;
 }
 i40 = HEAP32[i37 >> 2] | 0;
 if ((i40 | 0) != 0) {
  HEAP32[i37 >> 2] = 0;
  HEAP32[i39 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i40);
 }
 do {
  if (i41) {
   i40 = (HEAP8[i24] & 1) == 0;
   i39 = i40 ? 0 : i42;
   if ((i39 | 0) < (i8 | 0) | (i39 | 0) == (i8 | 0) & (i40 ? 30 : i43) >>> 0 < i7 >>> 0) {
    i40 = HEAP32[i2 >> 2] | 0;
    HEAP32[i26 >> 2] = i40;
    HEAP32[i26 + 4 >> 2] = i40 + (HEAP32[i38 >> 2] | 0);
    __ZN7WebCore16IDBLevelDBCoding9encodeIntEx(i17, i7, i8);
    __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i36, i26, i17);
    i40 = i17 + 8 | 0;
    if ((HEAP32[i40 >> 2] | 0) != 0) {
     HEAP32[i40 >> 2] = 0;
    }
    i40 = i17 | 0;
    i39 = HEAP32[i40 >> 2] | 0;
    if ((i39 | 0) == 0) {
     i46 = 1;
     break;
    }
    HEAP32[i40 >> 2] = 0;
    HEAP32[i17 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i39);
    i46 = 1;
    break;
   }
   __ZN3WTF6String6formatEPKcz(i18, H_BASE + 24 | 0, (i47 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i47 >> 2] = H_BASE + 72, i47) | 0);
   STACKTOP = i47;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i19, i18, 0);
   i39 = i19 | 0;
   i40 = HEAP32[i39 >> 2] | 0;
   if ((i40 | 0) == 0) {
    i48 = 0;
   } else {
    i48 = i40 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i48, 17, 22);
   i40 = HEAP32[i39 >> 2] | 0;
   do {
    if ((i40 | 0) != 0) {
     i39 = i40 | 0;
     i37 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
     if ((i37 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i40);
      break;
     } else {
      HEAP32[i39 >> 2] = i37;
      break;
     }
    }
   } while (0);
   i40 = HEAP32[i18 >> 2] | 0;
   if ((i40 | 0) == 0) {
    i46 = 0;
    break;
   }
   i37 = i40 | 0;
   i39 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
   if ((i39 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i40);
    i46 = 0;
    break;
   } else {
    HEAP32[i37 >> 2] = i39;
    i46 = 0;
    break;
   }
  } else {
   __ZN3WTF6String6formatEPKcz(i20, H_BASE + 24 | 0, (i47 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i47 >> 2] = H_BASE + 88, i47) | 0);
   STACKTOP = i47;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i21, i20, 0);
   i39 = i21 | 0;
   i37 = HEAP32[i39 >> 2] | 0;
   if ((i37 | 0) == 0) {
    i49 = 0;
   } else {
    i49 = i37 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i49, 17, 22);
   i37 = HEAP32[i39 >> 2] | 0;
   do {
    if ((i37 | 0) != 0) {
     i39 = i37 | 0;
     i40 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
     if ((i40 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i37);
      break;
     } else {
      HEAP32[i39 >> 2] = i40;
      break;
     }
    }
   } while (0);
   i37 = HEAP32[i20 >> 2] | 0;
   if ((i37 | 0) == 0) {
    i46 = 0;
    break;
   }
   i40 = i37 | 0;
   i39 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
   if ((i39 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i37);
    i46 = 0;
    break;
   } else {
    HEAP32[i40 >> 2] = i39;
    i46 = 0;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i38 >> 2] | 0) != 0) {
  HEAP32[i38 >> 2] = 0;
 }
 i38 = HEAP32[i2 >> 2] | 0;
 if ((i38 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i23 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i38);
 }
 if (!i46) {
  i35 = 0;
  STACKTOP = i1;
  return i35 | 0;
 }
 __ZN7WebCore16IDBLevelDBCoding16IndexMetaDataKey6encodeExxxh(i27, i3, i4, i5, i6, i7, i8, 0);
 __ZN7WebCore16IDBLevelDBCoding16IndexMetaDataKey6encodeExxxh(i28, i3, i4, i5, i6, i7, i8, 1);
 __ZN7WebCore16IDBLevelDBCoding16IndexMetaDataKey6encodeExxxh(i29, i3, i4, i5, i6, i7, i8, 2);
 __ZN7WebCore16IDBLevelDBCoding16IndexMetaDataKey6encodeExxxh(i30, i3, i4, i5, i6, i7, i8, 3);
 i8 = i27 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i31 >> 2] = i7;
 i6 = i27 + 8 | 0;
 HEAP32[i31 + 4 >> 2] = i7 + (HEAP32[i6 >> 2] | 0);
 __ZN7WebCore16IDBLevelDBCoding12encodeStringERKN3WTF6StringE(i16, i9);
 __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i36, i31, i16);
 i31 = i16 + 8 | 0;
 if ((HEAP32[i31 >> 2] | 0) != 0) {
  HEAP32[i31 >> 2] = 0;
 }
 i31 = i16 | 0;
 i9 = HEAP32[i31 >> 2] | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i31 >> 2] = 0;
  HEAP32[i16 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i9);
 }
 i9 = i28 | 0;
 i16 = HEAP32[i9 >> 2] | 0;
 HEAP32[i32 >> 2] = i16;
 i31 = i28 + 8 | 0;
 HEAP32[i32 + 4 >> 2] = i16 + (HEAP32[i31 >> 2] | 0);
 __ZN7WebCore16IDBLevelDBCoding10encodeBoolEb(i15, i11);
 __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i36, i32, i15);
 i32 = i15 + 8 | 0;
 if ((HEAP32[i32 >> 2] | 0) != 0) {
  HEAP32[i32 >> 2] = 0;
 }
 i32 = i15 | 0;
 i11 = HEAP32[i32 >> 2] | 0;
 if ((i11 | 0) != 0) {
  HEAP32[i32 >> 2] = 0;
  HEAP32[i15 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i11);
 }
 i11 = i29 | 0;
 i15 = HEAP32[i11 >> 2] | 0;
 HEAP32[i33 >> 2] = i15;
 i32 = i29 + 8 | 0;
 HEAP32[i33 + 4 >> 2] = i15 + (HEAP32[i32 >> 2] | 0);
 __ZN7WebCore16IDBLevelDBCoding16encodeIDBKeyPathERKNS_10IDBKeyPathE(i14, i10);
 __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i36, i33, i14);
 i33 = i14 + 8 | 0;
 if ((HEAP32[i33 >> 2] | 0) != 0) {
  HEAP32[i33 >> 2] = 0;
 }
 i33 = i14 | 0;
 i10 = HEAP32[i33 >> 2] | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i33 >> 2] = 0;
  HEAP32[i14 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = i30 | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 HEAP32[i34 >> 2] = i14;
 i33 = i30 + 8 | 0;
 HEAP32[i34 + 4 >> 2] = i14 + (HEAP32[i33 >> 2] | 0);
 __ZN7WebCore16IDBLevelDBCoding10encodeBoolEb(i13, i12);
 __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i36, i34, i13);
 i34 = i13 + 8 | 0;
 if ((HEAP32[i34 >> 2] | 0) != 0) {
  HEAP32[i34 >> 2] = 0;
 }
 i34 = i13 | 0;
 i36 = HEAP32[i34 >> 2] | 0;
 if ((i36 | 0) != 0) {
  HEAP32[i34 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i36);
 }
 if ((HEAP32[i33 >> 2] | 0) != 0) {
  HEAP32[i33 >> 2] = 0;
 }
 i33 = HEAP32[i10 >> 2] | 0;
 if ((i33 | 0) != 0) {
  HEAP32[i10 >> 2] = 0;
  HEAP32[i30 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i33);
 }
 if ((HEAP32[i32 >> 2] | 0) != 0) {
  HEAP32[i32 >> 2] = 0;
 }
 i32 = HEAP32[i11 >> 2] | 0;
 if ((i32 | 0) != 0) {
  HEAP32[i11 >> 2] = 0;
  HEAP32[i29 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i32);
 }
 if ((HEAP32[i31 >> 2] | 0) != 0) {
  HEAP32[i31 >> 2] = 0;
 }
 i31 = HEAP32[i9 >> 2] | 0;
 if ((i31 | 0) != 0) {
  HEAP32[i9 >> 2] = 0;
  HEAP32[i28 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i31);
 }
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
 }
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i35 = 1;
  STACKTOP = i1;
  return i35 | 0;
 }
 HEAP32[i8 >> 2] = 0;
 HEAP32[i27 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i6);
 i35 = 1;
 STACKTOP = i1;
 return i35 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB17deleteObjectStoreERNS_33IDBBackingStoreTransactionLevelDBExx(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 216 | 0;
 i7 = i1 | 0;
 i8 = i1 + 8 | 0;
 i9 = i1 + 16 | 0;
 i10 = i1 + 24 | 0;
 i11 = i1 + 32 | 0;
 i12 = i1 + 48 | 0;
 i13 = i1 + 56 | 0;
 i14 = i1 + 64 | 0;
 i15 = i1 + 72 | 0;
 i16 = i1 + 80 | 0;
 i17 = i1 + 96 | 0;
 i18 = i1 + 112 | 0;
 i19 = i1 + 128 | 0;
 i20 = i1 + 136 | 0;
 i21 = i1 + 152 | 0;
 i22 = i1 + 168 | 0;
 i23 = i1 + 184 | 0;
 i24 = i1 + 200 | 0;
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix17isValidDatabaseIdEx(i3, i4) | 0)) {
  i25 = 0;
  STACKTOP = i1;
  return i25 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix20isValidObjectStoreIdEx(i5, i6) | 0)) {
  i25 = 0;
  STACKTOP = i1;
  return i25 | 0;
 }
 i26 = HEAP32[i2 + 20 >> 2] | 0;
 i27 = i13 | 0;
 HEAP32[i27 >> 2] = 0;
 __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey6encodeExxh(i16, i3, i4, i5, i6, 0);
 i28 = i16 | 0;
 i29 = HEAP32[i28 >> 2] | 0;
 HEAP32[i15 >> 2] = i29;
 i30 = i16 + 8 | 0;
 HEAP32[i15 + 4 >> 2] = i29 + (HEAP32[i30 >> 2] | 0);
 i29 = i11 | 0;
 HEAP32[i29 >> 2] = 0;
 i31 = i11 + 4 | 0;
 HEAP32[i31 >> 2] = 0;
 i32 = i11 + 8 | 0;
 HEAP32[i32 >> 2] = 0;
 HEAP8[i14] = 0;
 do {
  if (__ZN7WebCore18LevelDBTransaction7safeGetERKNS_12LevelDBSliceERN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEERb(i26, i15, i11, i14) | 0) {
   if ((HEAP8[i14] & 1) == 0) {
    i33 = 1;
    break;
   }
   i34 = HEAP32[i29 >> 2] | 0;
   __ZN7WebCore16IDBLevelDBCoding12decodeStringEPKcS2_(i12, i34, i34 + (HEAP32[i32 >> 2] | 0) | 0);
   i34 = i12 | 0;
   i35 = HEAP32[i34 >> 2] | 0;
   HEAP32[i34 >> 2] = 0;
   i36 = HEAP32[i27 >> 2] | 0;
   HEAP32[i27 >> 2] = i35;
   do {
    if ((i36 | 0) != 0) {
     i35 = i36 | 0;
     i37 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
     if ((i37 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i36);
      break;
     } else {
      HEAP32[i35 >> 2] = i37;
      break;
     }
    }
   } while (0);
   i36 = HEAP32[i34 >> 2] | 0;
   if ((i36 | 0) == 0) {
    i33 = 1;
    break;
   }
   i37 = i36 | 0;
   i35 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
   if ((i35 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    i33 = 1;
    break;
   } else {
    HEAP32[i37 >> 2] = i35;
    i33 = 1;
    break;
   }
  } else {
   i33 = 0;
  }
 } while (0);
 if ((HEAP32[i32 >> 2] | 0) != 0) {
  HEAP32[i32 >> 2] = 0;
 }
 i32 = HEAP32[i29 >> 2] | 0;
 if ((i32 | 0) != 0) {
  HEAP32[i29 >> 2] = 0;
  HEAP32[i31 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i32);
 }
 if ((HEAP32[i30 >> 2] | 0) != 0) {
  HEAP32[i30 >> 2] = 0;
 }
 i30 = HEAP32[i28 >> 2] | 0;
 if ((i30 | 0) != 0) {
  HEAP32[i28 >> 2] = 0;
  HEAP32[i16 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i30);
 }
 do {
  if (i33) {
   if ((HEAP8[i14] & 1) == 0) {
    __ZN3WTF6String6formatEPKcz(i7, H_BASE + 24 | 0, (i38 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i38 >> 2] = H_BASE + 72, i38) | 0);
    STACKTOP = i38;
    __ZNK3WTF6String4utf8ENS_14ConversionModeE(i8, i7, 0);
    i30 = i8 | 0;
    i16 = HEAP32[i30 >> 2] | 0;
    if ((i16 | 0) == 0) {
     i39 = 0;
    } else {
     i39 = i16 + 8 | 0;
    }
    __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i39, 15, 22);
    i16 = HEAP32[i30 >> 2] | 0;
    do {
     if ((i16 | 0) != 0) {
      i30 = i16 | 0;
      i28 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
      if ((i28 | 0) == 0) {
       __ZN3WTF8fastFreeEPv(i16);
       break;
      } else {
       HEAP32[i30 >> 2] = i28;
       break;
      }
     }
    } while (0);
    i16 = HEAP32[i7 >> 2] | 0;
    if ((i16 | 0) == 0) {
     i40 = 0;
     break;
    }
    i34 = i16 | 0;
    i28 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
    if ((i28 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i16);
     i40 = 0;
     break;
    } else {
     HEAP32[i34 >> 2] = i28;
     i40 = 0;
     break;
    }
   }
   __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey6encodeExxh(i17, i3, i4, i5, i6, 0);
   __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey12encodeMaxKeyExx(i18, i3, i4, i5, i6);
   __ZN7WebCoreL11deleteRangeEPNS_18LevelDBTransactionERKN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEES7_(i26, i17, i18);
   i28 = i18 + 8 | 0;
   if ((HEAP32[i28 >> 2] | 0) != 0) {
    HEAP32[i28 >> 2] = 0;
   }
   i28 = i18 | 0;
   i34 = HEAP32[i28 >> 2] | 0;
   if ((i34 | 0) != 0) {
    HEAP32[i28 >> 2] = 0;
    HEAP32[i18 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i34);
   }
   i34 = i17 + 8 | 0;
   if ((HEAP32[i34 >> 2] | 0) != 0) {
    HEAP32[i34 >> 2] = 0;
   }
   i34 = i17 | 0;
   i28 = HEAP32[i34 >> 2] | 0;
   if ((i28 | 0) != 0) {
    HEAP32[i34 >> 2] = 0;
    HEAP32[i17 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i28);
   }
   __ZN7WebCore16IDBLevelDBCoding19ObjectStoreNamesKey6encodeExRKN3WTF6StringE(i20, i3, i4, i13);
   i28 = i20 | 0;
   i34 = HEAP32[i28 >> 2] | 0;
   HEAP32[i19 >> 2] = i34;
   i16 = i20 + 8 | 0;
   HEAP32[i19 + 4 >> 2] = i34 + (HEAP32[i16 >> 2] | 0);
   __ZN7WebCore18LevelDBTransaction6removeERKNS_12LevelDBSliceE(i26, i19);
   if ((HEAP32[i16 >> 2] | 0) != 0) {
    HEAP32[i16 >> 2] = 0;
   }
   i16 = HEAP32[i28 >> 2] | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i28 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i16);
   }
   __ZN7WebCore16IDBLevelDBCoding16IndexFreeListKey6encodeExxx(i21, i3, i4, i5, i6, 0, 0);
   __ZN7WebCore16IDBLevelDBCoding16IndexFreeListKey12encodeMaxKeyExx(i22, i3, i4, i5, i6);
   __ZN7WebCoreL11deleteRangeEPNS_18LevelDBTransactionERKN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEES7_(i26, i21, i22);
   i16 = i22 + 8 | 0;
   if ((HEAP32[i16 >> 2] | 0) != 0) {
    HEAP32[i16 >> 2] = 0;
   }
   i16 = i22 | 0;
   i28 = HEAP32[i16 >> 2] | 0;
   if ((i28 | 0) != 0) {
    HEAP32[i16 >> 2] = 0;
    HEAP32[i22 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i28);
   }
   i28 = i21 + 8 | 0;
   if ((HEAP32[i28 >> 2] | 0) != 0) {
    HEAP32[i28 >> 2] = 0;
   }
   i28 = i21 | 0;
   i16 = HEAP32[i28 >> 2] | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i28 >> 2] = 0;
    HEAP32[i21 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i16);
   }
   __ZN7WebCore16IDBLevelDBCoding16IndexMetaDataKey6encodeExxxh(i23, i3, i4, i5, i6, 0, 0, 0);
   __ZN7WebCore16IDBLevelDBCoding16IndexMetaDataKey12encodeMaxKeyExx(i24, i3, i4, i5, i6);
   __ZN7WebCoreL11deleteRangeEPNS_18LevelDBTransactionERKN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEES7_(i26, i23, i24);
   i16 = i24 + 8 | 0;
   if ((HEAP32[i16 >> 2] | 0) != 0) {
    HEAP32[i16 >> 2] = 0;
   }
   i16 = i24 | 0;
   i28 = HEAP32[i16 >> 2] | 0;
   if ((i28 | 0) != 0) {
    HEAP32[i16 >> 2] = 0;
    HEAP32[i24 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i28);
   }
   i28 = i23 + 8 | 0;
   if ((HEAP32[i28 >> 2] | 0) != 0) {
    HEAP32[i28 >> 2] = 0;
   }
   i28 = i23 | 0;
   i16 = HEAP32[i28 >> 2] | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i28 >> 2] = 0;
    HEAP32[i23 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i16);
   }
   i40 = __ZN7WebCore22IDBBackingStoreLevelDB16clearObjectStoreERNS_33IDBBackingStoreTransactionLevelDBExx(0, i2, i3, i4, i5, i6) | 0;
  } else {
   __ZN3WTF6String6formatEPKcz(i9, H_BASE + 24 | 0, (i38 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i38 >> 2] = H_BASE + 88, i38) | 0);
   STACKTOP = i38;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i10, i9, 0);
   i16 = i10 | 0;
   i28 = HEAP32[i16 >> 2] | 0;
   if ((i28 | 0) == 0) {
    i41 = 0;
   } else {
    i41 = i28 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i41, 15, 22);
   i28 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i16 = i28 | 0;
     i34 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i34 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i28);
      break;
     } else {
      HEAP32[i16 >> 2] = i34;
      break;
     }
    }
   } while (0);
   i28 = HEAP32[i9 >> 2] | 0;
   if ((i28 | 0) == 0) {
    i40 = 0;
    break;
   }
   i34 = i28 | 0;
   i16 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    i40 = 0;
    break;
   } else {
    HEAP32[i34 >> 2] = i16;
    i40 = 0;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i27 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i25 = i40;
  STACKTOP = i1;
  return i25 | 0;
 }
 i27 = i9 | 0;
 i41 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
 if ((i41 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  i25 = i40;
  STACKTOP = i1;
  return i25 | 0;
 } else {
  HEAP32[i27 >> 2] = i41;
  i25 = i40;
  STACKTOP = i1;
  return i25 | 0;
 }
 return 0;
}
function __ZN7WebCoreL24objectStoreCursorOptionsEPNS_18LevelDBTransactionExxPKNS_11IDBKeyRangeENS_9IndexedDB15CursorDirectionERNS_28IDBBackingStoreCursorLevelDB13CursorOptionsE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i10 = i9 | 0;
 i11 = i9 + 16 | 0;
 i12 = i9 + 32 | 0;
 i13 = i9 + 48 | 0;
 i14 = i9 + 64 | 0;
 i15 = i9 + 80 | 0;
 i16 = i9 + 96 | 0;
 i17 = i9 + 112 | 0;
 i18 = i9 + 120 | 0;
 i19 = i8 | 0;
 HEAP32[i19 >> 2] = i2;
 HEAP32[i19 + 4 >> 2] = i3;
 i19 = i8 + 8 | 0;
 HEAP32[i19 >> 2] = i4;
 HEAP32[i19 + 4 >> 2] = i5;
 do {
  if ((i6 | 0) == 0) {
   i20 = 0;
   i21 = 0;
  } else {
   i19 = HEAP32[i6 + 8 >> 2] | 0;
   do {
    if ((i19 | 0) == 0) {
     i22 = 0;
    } else {
     i23 = i19 | 0;
     i24 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = i24 + 1;
     if ((i24 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i19);
      __ZN3WTF8fastFreeEPv(i19);
      i22 = 1;
      break;
     } else {
      HEAP32[i23 >> 2] = i24;
      i22 = 1;
      break;
     }
    }
   } while (0);
   i19 = HEAP32[i6 + 12 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i20 = i22;
    i21 = 0;
    break;
   }
   i24 = i19 | 0;
   i23 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = i23 + 1;
   if ((i23 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i19);
    __ZN3WTF8fastFreeEPv(i19);
    i20 = i22;
    i21 = 1;
    break;
   } else {
    HEAP32[i24 >> 2] = i23;
    i20 = i22;
    i21 = 1;
    break;
   }
  }
 } while (0);
 if ((i7 | 0) == 1) {
  i22 = i8 + 53 | 0;
  HEAP8[i22] = 1;
  i25 = 1;
  i26 = i22;
 } else {
  i22 = i8 + 53 | 0;
  HEAP8[i22] = (i7 | 0) == 0 | 0;
  i25 = (i7 | 0) == 3 | 0;
  i26 = i22;
 }
 HEAP8[i8 + 54 | 0] = i25;
 i25 = i8 + 24 | 0;
 if (i20) {
  i20 = HEAP32[i6 + 8 >> 2] | 0;
  i22 = (i20 | 0) == 0;
  if (!i22) {
   i7 = i20 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  }
  __ZN7WebCore16IDBLevelDBCoding18ObjectStoreDataKey6encodeExxRKNS_6IDBKeyE(i12, i2, i3, i4, i5, i20);
  i7 = i8 + 32 | 0;
  i23 = i12 + 8 | 0;
  i24 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i23 >> 2];
  HEAP32[i23 >> 2] = i24;
  i7 = i25 | 0;
  i19 = i12 | 0;
  i27 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i19 >> 2];
  HEAP32[i19 >> 2] = i27;
  i7 = i8 + 28 | 0;
  i28 = i12 + 4 | 0;
  i12 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i28 >> 2];
  HEAP32[i28 >> 2] = i12;
  if ((i24 | 0) != 0) {
   HEAP32[i23 >> 2] = 0;
  }
  if ((i27 | 0) != 0) {
   HEAP32[i19 >> 2] = 0;
   HEAP32[i28 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i27);
  }
  do {
   if (!i22) {
    i27 = i20 | 0;
    i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
    if ((i28 | 0) == 0) {
     __ZN7WebCore6IDBKeyD1Ev(i20);
     __ZN3WTF8fastFreeEPv(i20);
     break;
    } else {
     HEAP32[i27 >> 2] = i28;
     break;
    }
   }
  } while (0);
  HEAP8[i8 + 36 | 0] = (HEAP32[i6 + 16 >> 2] | 0) == 0 | 0;
 } else {
  __ZN7WebCore16IDBLevelDBCoding9minIDBKeyEv(i11);
  __ZN7WebCore16IDBLevelDBCoding18ObjectStoreDataKey6encodeExxN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEE(i10, i2, i3, i4, i5, i11);
  i20 = i8 + 32 | 0;
  i22 = i10 + 8 | 0;
  i28 = HEAP32[i20 >> 2] | 0;
  HEAP32[i20 >> 2] = HEAP32[i22 >> 2];
  HEAP32[i22 >> 2] = i28;
  i20 = i25 | 0;
  i25 = i10 | 0;
  i27 = HEAP32[i20 >> 2] | 0;
  HEAP32[i20 >> 2] = HEAP32[i25 >> 2];
  HEAP32[i25 >> 2] = i27;
  i20 = i8 + 28 | 0;
  i19 = i10 + 4 | 0;
  i10 = HEAP32[i20 >> 2] | 0;
  HEAP32[i20 >> 2] = HEAP32[i19 >> 2];
  HEAP32[i19 >> 2] = i10;
  if ((i28 | 0) != 0) {
   HEAP32[i22 >> 2] = 0;
  }
  if ((i27 | 0) != 0) {
   HEAP32[i25 >> 2] = 0;
   HEAP32[i19 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i27);
  }
  i27 = i11 + 8 | 0;
  if ((HEAP32[i27 >> 2] | 0) != 0) {
   HEAP32[i27 >> 2] = 0;
  }
  i27 = i11 | 0;
  i19 = HEAP32[i27 >> 2] | 0;
  if ((i19 | 0) != 0) {
   HEAP32[i27 >> 2] = 0;
   HEAP32[i11 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i19);
  }
  HEAP8[i8 + 36 | 0] = 1;
 }
 i19 = i8 + 40 | 0;
 if (!i21) {
  __ZN7WebCore16IDBLevelDBCoding9maxIDBKeyEv(i14);
  __ZN7WebCore16IDBLevelDBCoding18ObjectStoreDataKey6encodeExxN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEE(i13, i2, i3, i4, i5, i14);
  i21 = i8 + 48 | 0;
  i11 = i13 + 8 | 0;
  i27 = HEAP32[i21 >> 2] | 0;
  HEAP32[i21 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i11 >> 2] = i27;
  i21 = i19 | 0;
  i25 = i13 | 0;
  i22 = HEAP32[i21 >> 2] | 0;
  HEAP32[i21 >> 2] = HEAP32[i25 >> 2];
  HEAP32[i25 >> 2] = i22;
  i21 = i8 + 44 | 0;
  i28 = i13 + 4 | 0;
  i13 = HEAP32[i21 >> 2] | 0;
  HEAP32[i21 >> 2] = HEAP32[i28 >> 2];
  HEAP32[i28 >> 2] = i13;
  if ((i27 | 0) != 0) {
   HEAP32[i11 >> 2] = 0;
  }
  if ((i22 | 0) != 0) {
   HEAP32[i25 >> 2] = 0;
   HEAP32[i28 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i22);
  }
  i22 = i14 + 8 | 0;
  if ((HEAP32[i22 >> 2] | 0) != 0) {
   HEAP32[i22 >> 2] = 0;
  }
  i22 = i14 | 0;
  i28 = HEAP32[i22 >> 2] | 0;
  if ((i28 | 0) != 0) {
   HEAP32[i22 >> 2] = 0;
   HEAP32[i14 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i28);
  }
  if ((HEAP8[i26] & 1) != 0) {
   HEAP8[i8 + 52 | 0] = 1;
   i29 = 1;
   STACKTOP = i9;
   return i29 | 0;
  }
  if (!(__ZN7WebCoreL30findGreatestKeyLessThanOrEqualEPNS_18LevelDBTransactionERKN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEERS5_(i1, i19, i19) | 0)) {
   i29 = 0;
   STACKTOP = i9;
   return i29 | 0;
  }
  HEAP8[i8 + 52 | 0] = 0;
  i29 = 1;
  STACKTOP = i9;
  return i29 | 0;
 }
 i28 = HEAP32[i6 + 12 >> 2] | 0;
 i14 = (i28 | 0) == 0;
 if (!i14) {
  i22 = i28 | 0;
  HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
 }
 __ZN7WebCore16IDBLevelDBCoding18ObjectStoreDataKey6encodeExxRKNS_6IDBKeyE(i15, i2, i3, i4, i5, i28);
 i5 = i8 + 48 | 0;
 i4 = i15 + 8 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i3;
 i2 = i19 | 0;
 i22 = i15 | 0;
 i25 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i22 >> 2];
 HEAP32[i22 >> 2] = i25;
 i11 = i8 + 44 | 0;
 i27 = i15 + 4 | 0;
 i15 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i27 >> 2];
 HEAP32[i27 >> 2] = i15;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 if ((i25 | 0) != 0) {
  HEAP32[i22 >> 2] = 0;
  HEAP32[i27 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i25);
 }
 do {
  if (!i14) {
   i25 = i28 | 0;
   i27 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i27 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i28);
    __ZN3WTF8fastFreeEPv(i28);
    break;
   } else {
    HEAP32[i25 >> 2] = i27;
    break;
   }
  }
 } while (0);
 i28 = i8 + 52 | 0;
 HEAP8[i28] = (HEAP32[i6 + 20 >> 2] | 0) == 0 | 0;
 if ((HEAP8[i26] & 1) != 0) {
  i29 = 1;
  STACKTOP = i9;
  return i29 | 0;
 }
 i26 = i16 | 0;
 HEAP32[i26 >> 2] = 0;
 i6 = i16 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i8 = i16 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 if (!(__ZN7WebCoreL30findGreatestKeyLessThanOrEqualEPNS_18LevelDBTransactionERKN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEERS5_(i1, i19, i16) | 0)) {
  if ((HEAP32[i8 >> 2] | 0) != 0) {
   HEAP32[i8 >> 2] = 0;
  }
  i1 = HEAP32[i26 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i29 = 0;
   STACKTOP = i9;
   return i29 | 0;
  }
  HEAP32[i26 >> 2] = 0;
  HEAP32[i6 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
  i29 = 0;
  STACKTOP = i9;
  return i29 | 0;
 }
 do {
  if ((HEAP8[i28] & 1) != 0) {
   i1 = HEAP32[i26 >> 2] | 0;
   HEAP32[i17 >> 2] = i1;
   HEAP32[i17 + 4 >> 2] = i1 + (HEAP32[i8 >> 2] | 0);
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i18 + 4 >> 2] = i1 + (HEAP32[i5 >> 2] | 0);
   if ((__ZN7WebCore16IDBLevelDBCoding7compareERKNS_12LevelDBSliceES3_b(i17, i18, 1) | 0) >= 0) {
    break;
   }
   HEAP8[i28] = 0;
  }
 } while (0);
 __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEEaSERKS2_(i19, i16) | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
 }
 i8 = HEAP32[i26 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i29 = 1;
  STACKTOP = i9;
  return i29 | 0;
 }
 HEAP32[i26 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i8);
 i29 = 1;
 STACKTOP = i9;
 return i29 | 0;
}
function __ZN7WebCoreL18indexCursorOptionsEPNS_18LevelDBTransactionExxxPKNS_11IDBKeyRangeENS_9IndexedDB15CursorDirectionERNS_28IDBBackingStoreCursorLevelDB13CursorOptionsE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i12 = i11 | 0;
 i13 = i11 + 16 | 0;
 i14 = i11 + 32 | 0;
 i15 = i11 + 48 | 0;
 i16 = i11 + 64 | 0;
 i17 = i11 + 80 | 0;
 i18 = i11 + 88 | 0;
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix17isValidDatabaseIdEx(i2, i3) | 0)) {
  i19 = 0;
  STACKTOP = i11;
  return i19 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix20isValidObjectStoreIdEx(i4, i5) | 0)) {
  i19 = 0;
  STACKTOP = i11;
  return i19 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix14isValidIndexIdEx(i6, i7) | 0)) {
  i19 = 0;
  STACKTOP = i11;
  return i19 | 0;
 }
 i20 = i10 | 0;
 HEAP32[i20 >> 2] = i2;
 HEAP32[i20 + 4 >> 2] = i3;
 i20 = i10 + 8 | 0;
 HEAP32[i20 >> 2] = i4;
 HEAP32[i20 + 4 >> 2] = i5;
 i20 = i10 + 16 | 0;
 HEAP32[i20 >> 2] = i6;
 HEAP32[i20 + 4 >> 2] = i7;
 do {
  if ((i8 | 0) == 0) {
   i21 = 0;
   i22 = 0;
  } else {
   i20 = HEAP32[i8 + 8 >> 2] | 0;
   do {
    if ((i20 | 0) == 0) {
     i23 = 0;
    } else {
     i24 = i20 | 0;
     i25 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = i25 + 1;
     if ((i25 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i20);
      __ZN3WTF8fastFreeEPv(i20);
      i23 = 1;
      break;
     } else {
      HEAP32[i24 >> 2] = i25;
      i23 = 1;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i8 + 12 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i21 = i23;
    i22 = 0;
    break;
   }
   i25 = i20 | 0;
   i24 = HEAP32[i25 >> 2] | 0;
   HEAP32[i25 >> 2] = i24 + 1;
   if ((i24 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i20);
    __ZN3WTF8fastFreeEPv(i20);
    i21 = i23;
    i22 = 1;
    break;
   } else {
    HEAP32[i25 >> 2] = i24;
    i21 = i23;
    i22 = 1;
    break;
   }
  }
 } while (0);
 if ((i9 | 0) == 1) {
  i23 = i10 + 53 | 0;
  HEAP8[i23] = 1;
  i26 = 1;
  i27 = i23;
 } else {
  i23 = i10 + 53 | 0;
  HEAP8[i23] = (i9 | 0) == 0 | 0;
  i26 = (i9 | 0) == 3 | 0;
  i27 = i23;
 }
 HEAP8[i10 + 54 | 0] = i26;
 i26 = i10 + 24 | 0;
 if (i21) {
  i21 = HEAP32[i8 + 8 >> 2] | 0;
  i23 = (i21 | 0) == 0;
  if (!i23) {
   i9 = i21 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  __ZN7WebCore16IDBLevelDBCoding12IndexDataKey6encodeExxxRKNS_6IDBKeyE(i13, i2, i3, i4, i5, i6, i7, i21);
  i9 = i10 + 32 | 0;
  i24 = i13 + 8 | 0;
  i25 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = HEAP32[i24 >> 2];
  HEAP32[i24 >> 2] = i25;
  i9 = i26 | 0;
  i20 = i13 | 0;
  i28 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = HEAP32[i20 >> 2];
  HEAP32[i20 >> 2] = i28;
  i9 = i10 + 28 | 0;
  i29 = i13 + 4 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = HEAP32[i29 >> 2];
  HEAP32[i29 >> 2] = i13;
  if ((i25 | 0) != 0) {
   HEAP32[i24 >> 2] = 0;
  }
  if ((i28 | 0) != 0) {
   HEAP32[i20 >> 2] = 0;
   HEAP32[i29 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i28);
  }
  do {
   if (!i23) {
    i28 = i21 | 0;
    i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
    if ((i29 | 0) == 0) {
     __ZN7WebCore6IDBKeyD1Ev(i21);
     __ZN3WTF8fastFreeEPv(i21);
     break;
    } else {
     HEAP32[i28 >> 2] = i29;
     break;
    }
   }
  } while (0);
  HEAP8[i10 + 36 | 0] = (HEAP32[i8 + 16 >> 2] | 0) == 0 | 0;
 } else {
  __ZN7WebCore16IDBLevelDBCoding12IndexDataKey12encodeMinKeyExxx(i12, i2, i3, i4, i5, i6, i7);
  i21 = i10 + 32 | 0;
  i23 = i12 + 8 | 0;
  i29 = HEAP32[i21 >> 2] | 0;
  HEAP32[i21 >> 2] = HEAP32[i23 >> 2];
  HEAP32[i23 >> 2] = i29;
  i21 = i26 | 0;
  i26 = i12 | 0;
  i28 = HEAP32[i21 >> 2] | 0;
  HEAP32[i21 >> 2] = HEAP32[i26 >> 2];
  HEAP32[i26 >> 2] = i28;
  i21 = i10 + 28 | 0;
  i20 = i12 + 4 | 0;
  i12 = HEAP32[i21 >> 2] | 0;
  HEAP32[i21 >> 2] = HEAP32[i20 >> 2];
  HEAP32[i20 >> 2] = i12;
  if ((i29 | 0) != 0) {
   HEAP32[i23 >> 2] = 0;
  }
  if ((i28 | 0) != 0) {
   HEAP32[i26 >> 2] = 0;
   HEAP32[i20 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i28);
  }
  HEAP8[i10 + 36 | 0] = 0;
 }
 i28 = i10 + 40 | 0;
 if (!i22) {
  __ZN7WebCore16IDBLevelDBCoding12IndexDataKey12encodeMaxKeyExxx(i14, i2, i3, i4, i5, i6, i7);
  i22 = i10 + 48 | 0;
  i20 = i14 + 8 | 0;
  i26 = HEAP32[i22 >> 2] | 0;
  HEAP32[i22 >> 2] = HEAP32[i20 >> 2];
  HEAP32[i20 >> 2] = i26;
  i22 = i28 | 0;
  i23 = i14 | 0;
  i29 = HEAP32[i22 >> 2] | 0;
  HEAP32[i22 >> 2] = HEAP32[i23 >> 2];
  HEAP32[i23 >> 2] = i29;
  i22 = i10 + 44 | 0;
  i12 = i14 + 4 | 0;
  i14 = HEAP32[i22 >> 2] | 0;
  HEAP32[i22 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i12 >> 2] = i14;
  if ((i26 | 0) != 0) {
   HEAP32[i20 >> 2] = 0;
  }
  if ((i29 | 0) != 0) {
   HEAP32[i23 >> 2] = 0;
   HEAP32[i12 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i29);
  }
  i29 = i10 + 52 | 0;
  HEAP8[i29] = 0;
  if ((HEAP8[i27] & 1) != 0) {
   i19 = 1;
   STACKTOP = i11;
   return i19 | 0;
  }
  if (!(__ZN7WebCoreL30findGreatestKeyLessThanOrEqualEPNS_18LevelDBTransactionERKN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEERS5_(i1, i28, i28) | 0)) {
   i19 = 0;
   STACKTOP = i11;
   return i19 | 0;
  }
  HEAP8[i29] = 0;
  i19 = 1;
  STACKTOP = i11;
  return i19 | 0;
 }
 i29 = HEAP32[i8 + 12 >> 2] | 0;
 i27 = (i29 | 0) == 0;
 if (!i27) {
  i12 = i29 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 __ZN7WebCore16IDBLevelDBCoding12IndexDataKey6encodeExxxRKNS_6IDBKeyE(i15, i2, i3, i4, i5, i6, i7, i29);
 i7 = i10 + 48 | 0;
 i6 = i15 + 8 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = i5;
 i4 = i28 | 0;
 i3 = i15 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i3 >> 2] = i2;
 i12 = i10 + 44 | 0;
 i23 = i15 + 4 | 0;
 i15 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i23 >> 2];
 HEAP32[i23 >> 2] = i15;
 if ((i5 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
 }
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i23 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 do {
  if (!i27) {
   i2 = i29 | 0;
   i23 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i29);
    __ZN3WTF8fastFreeEPv(i29);
    break;
   } else {
    HEAP32[i2 >> 2] = i23;
    break;
   }
  }
 } while (0);
 i29 = i10 + 52 | 0;
 HEAP8[i29] = (HEAP32[i8 + 20 >> 2] | 0) == 0 | 0;
 i8 = i16 | 0;
 HEAP32[i8 >> 2] = 0;
 i10 = i16 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i27 = i16 + 8 | 0;
 HEAP32[i27 >> 2] = 0;
 if (!(__ZN7WebCoreL30findGreatestKeyLessThanOrEqualEPNS_18LevelDBTransactionERKN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEERS5_(i1, i28, i16) | 0)) {
  if ((HEAP32[i27 >> 2] | 0) != 0) {
   HEAP32[i27 >> 2] = 0;
  }
  i1 = HEAP32[i8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i19 = 0;
   STACKTOP = i11;
   return i19 | 0;
  }
  HEAP32[i8 >> 2] = 0;
  HEAP32[i10 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
  i19 = 0;
  STACKTOP = i11;
  return i19 | 0;
 }
 do {
  if ((HEAP8[i29] & 1) != 0) {
   i1 = HEAP32[i8 >> 2] | 0;
   HEAP32[i17 >> 2] = i1;
   HEAP32[i17 + 4 >> 2] = i1 + (HEAP32[i27 >> 2] | 0);
   i1 = HEAP32[i4 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i18 + 4 >> 2] = i1 + (HEAP32[i7 >> 2] | 0);
   if ((__ZN7WebCore16IDBLevelDBCoding7compareERKNS_12LevelDBSliceES3_b(i17, i18, 1) | 0) >= 0) {
    break;
   }
   HEAP8[i29] = 0;
  }
 } while (0);
 __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEEaSERKS2_(i28, i16) | 0;
 if ((HEAP32[i27 >> 2] | 0) != 0) {
  HEAP32[i27 >> 2] = 0;
 }
 i27 = HEAP32[i8 >> 2] | 0;
 if ((i27 | 0) == 0) {
  i19 = 1;
  STACKTOP = i11;
  return i19 | 0;
 }
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i27);
 i19 = 1;
 STACKTOP = i11;
 return i19 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB9putRecordERNS_33IDBBackingStoreTransactionLevelDBExxRKNS_6IDBKeyEN3WTF10PassRefPtrINS_12SharedBufferEEEPNS_19IDBRecordIdentifierE(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 200 | 0;
 i10 = i1 | 0;
 i11 = i1 + 16 | 0;
 i12 = i1 + 24 | 0;
 i13 = i1 + 32 | 0;
 i14 = i1 + 48 | 0;
 i15 = i1 + 64 | 0;
 i16 = i1 + 72 | 0;
 i17 = i1 + 80 | 0;
 i18 = i1 + 88 | 0;
 i19 = i1 + 104 | 0;
 i20 = i1 + 120 | 0;
 i21 = i1 + 136 | 0;
 i22 = i1 + 144 | 0;
 i23 = i1 + 160 | 0;
 i24 = i1 + 168 | 0;
 i25 = i1 + 184 | 0;
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix17isValidDatabaseIdEx(i3, i4) | 0)) {
  i26 = 0;
  STACKTOP = i1;
  return i26 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix20isValidObjectStoreIdEx(i5, i6) | 0)) {
  i26 = 0;
  STACKTOP = i1;
  return i26 | 0;
 }
 i27 = HEAP32[i2 + 20 >> 2] | 0;
 __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey6encodeExxh(i14, i3, i4, i5, i6, 4);
 HEAP8[i15] = 0;
 i2 = i14 | 0;
 i28 = HEAP32[i2 >> 2] | 0;
 HEAP32[i16 >> 2] = i28;
 i29 = i14 + 8 | 0;
 HEAP32[i16 + 4 >> 2] = i28 + (HEAP32[i29 >> 2] | 0);
 i28 = i13 | 0;
 HEAP32[i28 >> 2] = 0;
 i30 = i13 + 4 | 0;
 HEAP32[i30 >> 2] = 0;
 i31 = i13 + 8 | 0;
 HEAP32[i31 >> 2] = 0;
 do {
  if (__ZN7WebCore18LevelDBTransaction7safeGetERKNS_12LevelDBSliceERN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEERb(i27, i16, i13, i15) | 0) {
   if ((HEAP8[i15] & 1) == 0) {
    i32 = 1;
    i33 = 0;
    i34 = 0;
    break;
   }
   i35 = HEAP32[i28 >> 2] | 0;
   i36 = __ZN7WebCore16IDBLevelDBCoding9decodeIntEPKcS2_(i35, i35 + (HEAP32[i31 >> 2] | 0) | 0) | 0;
   i35 = _i64Add(i36, tempRet0, 1, 0) | 0;
   i32 = 1;
   i33 = tempRet0;
   i34 = i35;
  } else {
   i32 = 0;
   i33 = 0;
   i34 = 0;
  }
 } while (0);
 if ((HEAP32[i31 >> 2] | 0) != 0) {
  HEAP32[i31 >> 2] = 0;
 }
 i31 = HEAP32[i28 >> 2] | 0;
 if ((i31 | 0) != 0) {
  HEAP32[i28 >> 2] = 0;
  HEAP32[i30 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i31);
 }
 do {
  if (i32) {
   i31 = (HEAP8[i15] & 1) == 0;
   i30 = i31 ? 1 : i34;
   i28 = i31 ? 0 : i33;
   i31 = HEAP32[i2 >> 2] | 0;
   HEAP32[i17 >> 2] = i31;
   HEAP32[i17 + 4 >> 2] = i31 + (HEAP32[i29 >> 2] | 0);
   __ZN7WebCore16IDBLevelDBCoding9encodeIntEx(i10, i30, i28);
   __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i27, i17, i10);
   i31 = i10 + 8 | 0;
   if ((HEAP32[i31 >> 2] | 0) != 0) {
    HEAP32[i31 >> 2] = 0;
   }
   i31 = i10 | 0;
   i13 = HEAP32[i31 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i37 = 1;
    i38 = i28;
    i39 = i30;
    break;
   }
   HEAP32[i31 >> 2] = 0;
   HEAP32[i10 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i13);
   i37 = 1;
   i38 = i28;
   i39 = i30;
  } else {
   __ZN3WTF6String6formatEPKcz(i11, H_BASE + 24 | 0, (i30 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i30 >> 2] = H_BASE + 88, i30) | 0);
   STACKTOP = i30;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i12, i11, 0);
   i30 = i12 | 0;
   i28 = HEAP32[i30 >> 2] | 0;
   if ((i28 | 0) == 0) {
    i40 = 0;
   } else {
    i40 = i28 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i40, 19, 22);
   i28 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i30 = i28 | 0;
     i13 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i28);
      break;
     } else {
      HEAP32[i30 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i28 = HEAP32[i11 >> 2] | 0;
   if ((i28 | 0) == 0) {
    i37 = 0;
    i38 = -1;
    i39 = -1;
    break;
   }
   i13 = i28 | 0;
   i30 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i30 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    i37 = 0;
    i38 = -1;
    i39 = -1;
    break;
   } else {
    HEAP32[i13 >> 2] = i30;
    i37 = 0;
    i38 = -1;
    i39 = -1;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i29 >> 2] | 0) != 0) {
  HEAP32[i29 >> 2] = 0;
 }
 i29 = HEAP32[i2 >> 2] | 0;
 if ((i29 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i14 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i29);
 }
 if (!i37) {
  i26 = 0;
  STACKTOP = i1;
  return i26 | 0;
 }
 __ZN7WebCore16IDBLevelDBCoding18ObjectStoreDataKey6encodeExxRKNS_6IDBKeyE(i18, i3, i4, i5, i6, i7);
 i37 = i19 | 0;
 HEAP32[i37 >> 2] = 0;
 i29 = i19 + 4 | 0;
 HEAP32[i29 >> 2] = 0;
 i14 = i19 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 __ZN7WebCore16IDBLevelDBCoding12encodeVarIntEx(i20, i39, i38);
 i2 = i20 | 0;
 i11 = i20 + 8 | 0;
 __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i19, HEAP32[i2 >> 2] | 0, HEAP32[i11 >> 2] | 0);
 if ((HEAP32[i11 >> 2] | 0) != 0) {
  HEAP32[i11 >> 2] = 0;
 }
 i11 = HEAP32[i2 >> 2] | 0;
 if ((i11 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i20 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i11);
 }
 i11 = i8 | 0;
 i8 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i11 = __ZNK7WebCore12SharedBuffer4dataEv(i8) | 0;
 __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i19, i11, __ZNK7WebCore12SharedBuffer4sizeEv(i8) | 0);
 i11 = i18 | 0;
 i20 = HEAP32[i11 >> 2] | 0;
 HEAP32[i21 >> 2] = i20;
 i2 = i18 + 8 | 0;
 HEAP32[i21 + 4 >> 2] = i20 + (HEAP32[i2 >> 2] | 0);
 __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i27, i21, i19);
 __ZN7WebCore16IDBLevelDBCoding14ExistsEntryKey6encodeExxRKNS_6IDBKeyE(i22, i3, i4, i5, i6, i7);
 i6 = i22 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i23 >> 2] = i5;
 i4 = i22 + 8 | 0;
 HEAP32[i23 + 4 >> 2] = i5 + (HEAP32[i4 >> 2] | 0);
 __ZN7WebCore16IDBLevelDBCoding9encodeIntEx(i24, i39, i38);
 __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i27, i23, i24);
 i23 = i24 + 8 | 0;
 if ((HEAP32[i23 >> 2] | 0) != 0) {
  HEAP32[i23 >> 2] = 0;
 }
 i23 = i24 | 0;
 i27 = HEAP32[i23 >> 2] | 0;
 if ((i27 | 0) != 0) {
  HEAP32[i23 >> 2] = 0;
  HEAP32[i24 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i27);
 }
 __ZN7WebCore16IDBLevelDBCoding12encodeIDBKeyERKNS_6IDBKeyE(i25, i7);
 __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEEaSERKS2_(i9 + 4 | 0, i25) | 0;
 i7 = i9 + 16 | 0;
 HEAP32[i7 >> 2] = i39;
 HEAP32[i7 + 4 >> 2] = i38;
 i38 = i25 + 8 | 0;
 if ((HEAP32[i38 >> 2] | 0) != 0) {
  HEAP32[i38 >> 2] = 0;
 }
 i38 = i25 | 0;
 i7 = HEAP32[i38 >> 2] | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i38 >> 2] = 0;
  HEAP32[i25 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i7);
 }
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i22 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 | 0;
   i22 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i22 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i4 >> 2] = i22;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i14 >> 2] | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
 }
 i14 = HEAP32[i37 >> 2] | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i37 >> 2] = 0;
  HEAP32[i29 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i14);
 }
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i11 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i26 = 1;
  STACKTOP = i1;
  return i26 | 0;
 }
 HEAP32[i11 >> 2] = 0;
 HEAP32[i18 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i26 = 1;
 STACKTOP = i1;
 return i26 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB14findKeyInIndexERNS_33IDBBackingStoreTransactionLevelDBExxxRKNS_6IDBKeyERN3WTF6VectorIcLj0ENS6_15CrashOnOverflowEEERb(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i12 = i1 | 0;
 i13 = i1 + 8 | 0;
 i14 = i1 + 16 | 0;
 i15 = i1 + 24 | 0;
 i16 = i1 + 32 | 0;
 i17 = i1 + 48 | 0;
 i18 = i1 + 64 | 0;
 i19 = i1 + 72 | 0;
 i20 = i1 + 88 | 0;
 i21 = i1 + 96 | 0;
 i22 = i1 + 104 | 0;
 i23 = i1 + 112 | 0;
 i24 = i1 + 120 | 0;
 i25 = i1 + 128 | 0;
 i26 = i1 + 136 | 0;
 i27 = i1 + 144 | 0;
 i28 = i1 + 152 | 0;
 i29 = i1 + 160 | 0;
 HEAP8[i11] = 0;
 i30 = HEAP32[i2 + 20 >> 2] | 0;
 __ZN7WebCore16IDBLevelDBCoding12IndexDataKey6encodeExxxRKNS_6IDBKeyE(i19, i3, i4, i5, i6, i7, i8, i9);
 __ZN7WebCore18LevelDBTransaction14createIteratorEv(i20, i30);
 i9 = i20 | 0;
 i20 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = HEAP32[(HEAP32[i20 >> 2] | 0) + 16 >> 2] | 0;
 i8 = i19 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i21 >> 2] = i7;
 i2 = i19 + 8 | 0;
 HEAP32[i21 + 4 >> 2] = i7 + (HEAP32[i2 >> 2] | 0);
 FUNCTION_TABLE_vii[i9 & 31](i20, i21);
 i21 = i20;
 L1 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] & 31](i20) | 0) {
   i9 = i20;
   i7 = i23 | 0;
   i31 = i23 + 4 | 0;
   i32 = i25 | 0;
   i33 = i26 + 4 | 0;
   i34 = i27 + 4 | 0;
   i35 = i17 | 0;
   i36 = i17 + 4 | 0;
   i37 = i17 + 8 | 0;
   i38 = i18 | 0;
   i39 = i16 | 0;
   i40 = i18 + 4 | 0;
   i41 = i16 + 8 | 0;
   i42 = i20;
   i43 = i16 + 4 | 0;
   i44 = i15 | 0;
   i45 = i14 | 0;
   while (1) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 28 >> 2] & 31](i22, i20);
    i46 = HEAP32[i8 >> 2] | 0;
    HEAP32[i7 >> 2] = i46;
    HEAP32[i31 >> 2] = i46 + (HEAP32[i2 >> 2] | 0);
    if ((__ZN7WebCore16IDBLevelDBCoding7compareERKNS_12LevelDBSliceES3_b(i22, i23, 1) | 0) > 0) {
     i47 = 1;
     break L1;
    }
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 32 >> 2] & 31](i25, i20);
    i46 = HEAP32[i32 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 32 >> 2] & 31](i26, i20);
    i48 = __ZN7WebCore16IDBLevelDBCoding12decodeVarIntEPKcS2_Rx(i46, HEAP32[i33 >> 2] | 0, i24) | 0;
    if ((i48 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 32 >> 2] & 31](i27, i20);
    __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i10, i48, (HEAP32[i34 >> 2] | 0) - i48 | 0);
    HEAP8[i28] = 0;
    i48 = HEAP32[i24 >> 2] | 0;
    i46 = HEAP32[i24 + 4 >> 2] | 0;
    __ZN7WebCore16IDBLevelDBCoding14ExistsEntryKey6encodeExxRKN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEE(i16, i3, i4, i5, i6, i10);
    HEAP32[i35 >> 2] = 0;
    HEAP32[i36 >> 2] = 0;
    HEAP32[i37 >> 2] = 0;
    i49 = HEAP32[i39 >> 2] | 0;
    HEAP32[i38 >> 2] = i49;
    HEAP32[i40 >> 2] = i49 + (HEAP32[i41 >> 2] | 0);
    do {
     if (__ZN7WebCore18LevelDBTransaction7safeGetERKNS_12LevelDBSliceERN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEERb(i30, i18, i17, i28) | 0) {
      if ((HEAP8[i28] & 1) == 0) {
       i50 = 1;
       break;
      }
      i49 = HEAP32[i35 >> 2] | 0;
      i51 = __ZN7WebCore16IDBLevelDBCoding9decodeIntEPKcS2_(i49, i49 + (HEAP32[i37 >> 2] | 0) | 0) | 0;
      HEAP8[i28] = (i51 | 0) == (i48 | 0) & (tempRet0 | 0) == (i46 | 0) & 1;
      i50 = 1;
     } else {
      __ZN3WTF6String6formatEPKcz(i14, H_BASE + 24 | 0, (i52 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i52 >> 2] = H_BASE + 88, i52) | 0);
      STACKTOP = i52;
      __ZNK3WTF6String4utf8ENS_14ConversionModeE(i15, i14, 0);
      i51 = HEAP32[i44 >> 2] | 0;
      if ((i51 | 0) == 0) {
       i53 = 0;
      } else {
       i53 = i51 + 8 | 0;
      }
      __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i53, 14, 22);
      i51 = HEAP32[i44 >> 2] | 0;
      do {
       if ((i51 | 0) != 0) {
        i49 = i51 | 0;
        i54 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
        if ((i54 | 0) == 0) {
         __ZN3WTF8fastFreeEPv(i51);
         break;
        } else {
         HEAP32[i49 >> 2] = i54;
         break;
        }
       }
      } while (0);
      i51 = HEAP32[i45 >> 2] | 0;
      if ((i51 | 0) == 0) {
       i50 = 0;
       break;
      }
      i54 = i51 | 0;
      i49 = (HEAP32[i54 >> 2] | 0) - 2 | 0;
      if ((i49 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i51);
       i50 = 0;
       break;
      } else {
       HEAP32[i54 >> 2] = i49;
       i50 = 0;
       break;
      }
     }
    } while (0);
    if ((HEAP32[i37 >> 2] | 0) != 0) {
     HEAP32[i37 >> 2] = 0;
    }
    i46 = HEAP32[i35 >> 2] | 0;
    if ((i46 | 0) != 0) {
     HEAP32[i35 >> 2] = 0;
     HEAP32[i36 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i46);
    }
    if ((HEAP32[i41 >> 2] | 0) != 0) {
     HEAP32[i41 >> 2] = 0;
    }
    i46 = HEAP32[i39 >> 2] | 0;
    if ((i46 | 0) != 0) {
     HEAP32[i39 >> 2] = 0;
     HEAP32[i43 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i46);
    }
    if (!i50) {
     i47 = 0;
     break L1;
    }
    if ((HEAP8[i28] & 1) != 0) {
     i55 = 39;
     break;
    }
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 28 >> 2] & 31](i29, i20);
    __ZN7WebCore18LevelDBTransaction6removeERKNS_12LevelDBSliceE(i30, i29);
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i42 >> 2] | 0) + 20 >> 2] & 31](i20);
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] & 31](i20) | 0)) {
     i47 = 1;
     break L1;
    }
   }
   if ((i55 | 0) == 39) {
    HEAP8[i11] = 1;
    i47 = 1;
    break;
   }
   __ZN3WTF6String6formatEPKcz(i12, H_BASE + 24 | 0, (i52 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i52 >> 2] = H_BASE + 88, i52) | 0);
   STACKTOP = i52;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i13, i12, 0);
   i42 = i13 | 0;
   i9 = HEAP32[i42 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i56 = 0;
   } else {
    i56 = i9 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i56, 3, 22);
   i9 = HEAP32[i42 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i42 = i9 | 0;
     i43 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
     if ((i43 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i9);
      break;
     } else {
      HEAP32[i42 >> 2] = i43;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i12 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i47 = 0;
    break;
   }
   i43 = i9 | 0;
   i42 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
   if ((i42 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    i47 = 0;
    break;
   } else {
    HEAP32[i43 >> 2] = i42;
    i47 = 0;
    break;
   }
  } else {
   i47 = 1;
  }
 } while (0);
 if ((i20 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 31](i20);
 }
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i1;
  return i47 | 0;
 }
 HEAP32[i8 >> 2] = 0;
 HEAP32[i19 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 STACKTOP = i1;
 return i47 | 0;
}
function __ZN7WebCore21ObjectStoreCursorImpl14loadCurrentRowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 64 | 0;
 i11 = i2 + 72 | 0;
 i12 = i2 + 80 | 0;
 i13 = i2 + 88 | 0;
 i14 = i2 + 96 | 0;
 i15 = i2 + 112 | 0;
 i16 = i2 + 128 | 0;
 i17 = i2 + 136 | 0;
 i18 = i1 + 80 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 28 >> 2] & 31](i7, i19);
 i19 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i18 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 28 >> 2] & 31](i8, i7);
 i7 = HEAP32[i8 + 4 >> 2] | 0;
 i8 = i9 | 0;
 HEAP32[i8 >> 2] = 0;
 i20 = i9 + 4 | 0;
 HEAP32[i20 >> 2] = 0;
 i21 = i9 + 8 | 0;
 HEAP32[i21 >> 2] = 0;
 do {
  if ((__ZN7WebCore16IDBLevelDBCoding18ObjectStoreDataKey6decodeEPKcS3_PS1_(i19, i7, i9) | 0) == 0) {
   __ZN3WTF6String6formatEPKcz(i5, H_BASE + 24 | 0, (i22 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i22 >> 2] = H_BASE + 88, i22) | 0);
   STACKTOP = i22;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i6, i5, 0);
   i23 = i6 | 0;
   i24 = HEAP32[i23 >> 2] | 0;
   if ((i24 | 0) == 0) {
    i25 = 0;
   } else {
    i25 = i24 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i25, 10, 22);
   i24 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i23 = i24 | 0;
     i26 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i24);
      break;
     } else {
      HEAP32[i23 >> 2] = i26;
      break;
     }
    }
   } while (0);
   i24 = HEAP32[i5 >> 2] | 0;
   if ((i24 | 0) == 0) {
    i27 = 0;
    break;
   }
   i26 = i24 | 0;
   i23 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    i27 = 0;
    break;
   } else {
    HEAP32[i26 >> 2] = i23;
    i27 = 0;
    break;
   }
  } else {
   __ZNK7WebCore16IDBLevelDBCoding18ObjectStoreDataKey7userKeyEv(i10, i9);
   i23 = i10 | 0;
   i26 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = 0;
   i24 = i1 + 84 | 0;
   i28 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = i26;
   do {
    if ((i28 | 0) != 0) {
     i26 = i28 | 0;
     i29 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     if ((i29 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i28);
      __ZN3WTF8fastFreeEPv(i28);
      break;
     } else {
      HEAP32[i26 >> 2] = i29;
      break;
     }
    }
   } while (0);
   i28 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i29 = i28 | 0;
     i26 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i28);
      __ZN3WTF8fastFreeEPv(i28);
      break;
     } else {
      HEAP32[i29 >> 2] = i26;
      break;
     }
    }
   } while (0);
   i28 = HEAP32[i18 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i28 >> 2] | 0) + 32 >> 2] & 31](i12, i28);
   i28 = HEAP32[i12 >> 2] | 0;
   i23 = HEAP32[i18 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 32 >> 2] & 31](i13, i23);
   i23 = __ZN7WebCore16IDBLevelDBCoding12decodeVarIntEPKcS2_Rx(i28, HEAP32[i13 + 4 >> 2] | 0, i11) | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF6String6formatEPKcz(i3, H_BASE + 24 | 0, (i22 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i22 >> 2] = H_BASE + 88, i22) | 0);
    STACKTOP = i22;
    __ZNK3WTF6String4utf8ENS_14ConversionModeE(i4, i3, 0);
    i28 = i4 | 0;
    i26 = HEAP32[i28 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i30 = 0;
    } else {
     i30 = i26 + 8 | 0;
    }
    __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i30, 10, 22);
    i26 = HEAP32[i28 >> 2] | 0;
    do {
     if ((i26 | 0) != 0) {
      i28 = i26 | 0;
      i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
      if ((i29 | 0) == 0) {
       __ZN3WTF8fastFreeEPv(i26);
       break;
      } else {
       HEAP32[i28 >> 2] = i29;
       break;
      }
     }
    } while (0);
    i26 = HEAP32[i3 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i27 = 0;
     break;
    }
    i29 = i26 | 0;
    i28 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
    if ((i28 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i26);
     i27 = 0;
     break;
    } else {
     HEAP32[i29 >> 2] = i28;
     i27 = 0;
     break;
    }
   }
   i28 = HEAP32[i1 + 88 >> 2] | 0;
   __ZN7WebCore16IDBLevelDBCoding12encodeIDBKeyERKNS_6IDBKeyE(i14, HEAP32[i24 >> 2] | 0);
   i29 = HEAP32[i11 >> 2] | 0;
   i26 = HEAP32[i11 + 4 >> 2] | 0;
   __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEEaSERKS2_(i28 + 4 | 0, i14) | 0;
   i31 = i28 + 16 | 0;
   HEAP32[i31 >> 2] = i29;
   HEAP32[i31 + 4 >> 2] = i26;
   i26 = i14 + 8 | 0;
   if ((HEAP32[i26 >> 2] | 0) != 0) {
    HEAP32[i26 >> 2] = 0;
   }
   i26 = i14 | 0;
   i31 = HEAP32[i26 >> 2] | 0;
   if ((i31 | 0) != 0) {
    HEAP32[i26 >> 2] = 0;
    HEAP32[i14 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i31);
   }
   i31 = i15 | 0;
   HEAP32[i31 >> 2] = 0;
   i26 = i15 + 4 | 0;
   HEAP32[i26 >> 2] = 0;
   i29 = i15 + 8 | 0;
   HEAP32[i29 >> 2] = 0;
   i28 = HEAP32[i18 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i28 >> 2] | 0) + 32 >> 2] & 31](i16, i28);
   __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i15, i23, (HEAP32[i16 + 4 >> 2] | 0) - i23 | 0);
   __ZN7WebCore12SharedBuffer11adoptVectorERN3WTF6VectorIcLj0ENS1_15CrashOnOverflowEEE(i17, i15);
   i28 = i17 | 0;
   i32 = HEAP32[i28 >> 2] | 0;
   HEAP32[i28 >> 2] = 0;
   i33 = i1 + 92 | 0;
   i34 = HEAP32[i33 >> 2] | 0;
   HEAP32[i33 >> 2] = i32;
   do {
    if ((i34 | 0) != 0) {
     i32 = i34 | 0;
     i33 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     if ((i33 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i34);
      __ZN3WTF8fastFreeEPv(i34);
      break;
     } else {
      HEAP32[i32 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i34 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i34 | 0) != 0) {
     i23 = i34 | 0;
     i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     if ((i24 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i34);
      __ZN3WTF8fastFreeEPv(i34);
      break;
     } else {
      HEAP32[i23 >> 2] = i24;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i29 >> 2] | 0) != 0) {
    HEAP32[i29 >> 2] = 0;
   }
   i34 = HEAP32[i31 >> 2] | 0;
   if ((i34 | 0) == 0) {
    i27 = 1;
    break;
   }
   HEAP32[i31 >> 2] = 0;
   HEAP32[i26 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i34);
   i27 = 1;
  }
 } while (0);
 if ((HEAP32[i21 >> 2] | 0) != 0) {
  HEAP32[i21 >> 2] = 0;
 }
 i21 = HEAP32[i8 >> 2] | 0;
 if ((i21 | 0) == 0) {
  STACKTOP = i2;
  return i27 | 0;
 }
 HEAP32[i8 >> 2] = 0;
 HEAP32[i20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i21);
 STACKTOP = i2;
 return i27 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB14deleteDatabaseERKN3WTF6StringENSt3__18functionIFvbEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 216 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 112 | 0;
 i14 = i4 + 120 | 0;
 i15 = i4 + 136 | 0;
 i16 = i4 + 152 | 0;
 i17 = i4 + 160 | 0;
 i18 = i4 + 168 | 0;
 i19 = i4 + 176 | 0;
 i20 = i4 + 184 | 0;
 i21 = i4 + 192 | 0;
 i22 = i4 + 208 | 0;
 i23 = i1 + 12 | 0;
 __ZN7WebCore27LevelDBWriteOnlyTransaction6createEPNS_15LevelDBDatabaseE(i11, HEAP32[i23 >> 2] | 0);
 i24 = i11 | 0;
 i11 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 i24 = i12 | 0;
 HEAP32[i24 >> 2] = 0;
 i25 = i12 + 8 | 0;
 _memset(i25 | 0, 0, 44) | 0;
 HEAP8[i13] = 0;
 do {
  if (__ZN7WebCore22IDBBackingStoreLevelDB22getIDBDatabaseMetaDataERKN3WTF6StringEPNS_19IDBDatabaseMetadataERb(i1, i2, i12, i13) | 0) {
   if ((HEAP8[i13] & 1) == 0) {
    HEAP8[i9] = 1;
    i26 = HEAP32[i3 + 16 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i26 >> 2] | 0) + 24 >> 2] & 31](i26, i9);
    break;
   }
   i26 = HEAP32[i25 >> 2] | 0;
   i27 = HEAP32[i25 + 4 >> 2] | 0;
   __ZN7WebCore16IDBLevelDBCoding19DatabaseMetaDataKey6encodeExNS1_12MetaDataTypeE(i14, i26, i27, 0);
   i28 = _i64Add(i26, i27, 1, 0) | 0;
   __ZN7WebCore16IDBLevelDBCoding19DatabaseMetaDataKey6encodeExNS1_12MetaDataTypeE(i15, i28, tempRet0, 0);
   __ZN7WebCore15LevelDBDatabase14createIteratorEPKNS_15LevelDBSnapshotE(i16, HEAP32[i23 >> 2] | 0, 0);
   i28 = i16 | 0;
   i27 = HEAP32[i28 >> 2] | 0;
   HEAP32[i28 >> 2] = 0;
   i28 = HEAP32[(HEAP32[i27 >> 2] | 0) + 16 >> 2] | 0;
   i26 = i14 | 0;
   i29 = HEAP32[i26 >> 2] | 0;
   HEAP32[i17 >> 2] = i29;
   i30 = i14 + 8 | 0;
   HEAP32[i17 + 4 >> 2] = i29 + (HEAP32[i30 >> 2] | 0);
   FUNCTION_TABLE_vii[i28 & 31](i27, i17);
   i28 = i27;
   i29 = i27;
   L7 : do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i29 >> 2] | 0) + 8 >> 2] & 31](i27) | 0) {
     i31 = i19 | 0;
     i32 = i15 | 0;
     i33 = i19 + 4 | 0;
     i34 = i15 + 8 | 0;
     i35 = i27;
     while (1) {
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i28 >> 2] | 0) + 28 >> 2] & 31](i18, i27);
      i36 = HEAP32[i32 >> 2] | 0;
      HEAP32[i31 >> 2] = i36;
      HEAP32[i33 >> 2] = i36 + (HEAP32[i34 >> 2] | 0);
      if ((__ZN7WebCore16IDBLevelDBCoding7compareERKNS_12LevelDBSliceES3_b(i18, i19, 0) | 0) >= 0) {
       break L7;
      }
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i28 >> 2] | 0) + 28 >> 2] & 31](i20, i27);
      __ZN7WebCore27LevelDBWriteOnlyTransaction6removeERKNS_12LevelDBSliceE(i11, i20);
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i35 >> 2] | 0) + 20 >> 2] & 31](i27);
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i29 >> 2] | 0) + 8 >> 2] & 31](i27) | 0)) {
       break;
      }
     }
    }
   } while (0);
   __ZN7WebCore16IDBLevelDBCoding15DatabaseNameKey6encodeERKN3WTF6StringES5_(i21, i1 + 8 | 0, i2);
   i29 = i21 | 0;
   i28 = HEAP32[i29 >> 2] | 0;
   HEAP32[i22 >> 2] = i28;
   i35 = i21 + 8 | 0;
   HEAP32[i22 + 4 >> 2] = i28 + (HEAP32[i35 >> 2] | 0);
   __ZN7WebCore27LevelDBWriteOnlyTransaction6removeERKNS_12LevelDBSliceE(i11, i22);
   if (__ZN7WebCore27LevelDBWriteOnlyTransaction6commitEv(i11) | 0) {
    HEAP8[i8] = 1;
    i28 = HEAP32[i3 + 16 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i28 >> 2] | 0) + 24 >> 2] & 31](i28, i8);
   } else {
    __ZN3WTF6String6formatEPKcz(i5, H_BASE + 24 | 0, (i28 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i28 >> 2] = H_BASE + 64, i28) | 0);
    STACKTOP = i28;
    __ZNK3WTF6String4utf8ENS_14ConversionModeE(i6, i5, 0);
    i28 = i6 | 0;
    i34 = HEAP32[i28 >> 2] | 0;
    if ((i34 | 0) == 0) {
     i37 = 0;
    } else {
     i37 = i34 + 8 | 0;
    }
    __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i37, 21, 22);
    i34 = HEAP32[i28 >> 2] | 0;
    do {
     if ((i34 | 0) != 0) {
      i28 = i34 | 0;
      i33 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
      if ((i33 | 0) == 0) {
       __ZN3WTF8fastFreeEPv(i34);
       break;
      } else {
       HEAP32[i28 >> 2] = i33;
       break;
      }
     }
    } while (0);
    i34 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i34 | 0) != 0) {
      i33 = i34 | 0;
      i28 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
      if ((i28 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i34);
       break;
      } else {
       HEAP32[i33 >> 2] = i28;
       break;
      }
     }
    } while (0);
    HEAP8[i7] = 0;
    i34 = HEAP32[i3 + 16 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i34 >> 2] | 0) + 24 >> 2] & 31](i34, i7);
   }
   if ((HEAP32[i35 >> 2] | 0) != 0) {
    HEAP32[i35 >> 2] = 0;
   }
   i34 = HEAP32[i29 >> 2] | 0;
   if ((i34 | 0) != 0) {
    HEAP32[i29 >> 2] = 0;
    HEAP32[i21 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i34);
   }
   if ((i27 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 31](i27);
   }
   i34 = i15 + 8 | 0;
   if ((HEAP32[i34 >> 2] | 0) != 0) {
    HEAP32[i34 >> 2] = 0;
   }
   i34 = i15 | 0;
   i28 = HEAP32[i34 >> 2] | 0;
   if ((i28 | 0) != 0) {
    HEAP32[i34 >> 2] = 0;
    HEAP32[i15 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i28);
   }
   if ((HEAP32[i30 >> 2] | 0) != 0) {
    HEAP32[i30 >> 2] = 0;
   }
   i28 = HEAP32[i26 >> 2] | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   HEAP32[i26 >> 2] = 0;
   HEAP32[i14 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i28);
  } else {
   HEAP8[i10] = 0;
   i28 = HEAP32[i3 + 16 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i28 >> 2] | 0) + 24 >> 2] & 31](i28, i10);
  }
 } while (0);
 i10 = HEAP32[i12 + 32 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i3 = HEAP32[i12 + 36 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i12 = 0;
   while (1) {
    i14 = i10 + (i12 * 80 & -1) | 0;
    if (!((HEAP32[i14 >> 2] | 0) == (-1 | 0) & (HEAP32[i14 + 4 >> 2] | 0) == (-1 | 0))) {
     __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i10 + (i12 * 80 & -1) + 8 | 0);
    }
    i12 = i12 + 1 | 0;
    if ((i12 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i24 = i10 | 0;
   i3 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i24 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore27LevelDBWriteOnlyTransactionD1Ev(i11);
 __ZdlPv(i11);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22IDBBackingStoreLevelDB16getDatabaseNamesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 56 | 0;
 i10 = i3 + 64 | 0;
 i11 = i3 + 72 | 0;
 i12 = i3 + 80 | 0;
 i13 = i3 + 88 | 0;
 i14 = i1 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i1 + 4 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i1 + 8 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i2 + 8 | 0;
 __ZN7WebCore16IDBLevelDBCoding15DatabaseNameKey21encodeMinKeyForOriginERKN3WTF6StringE(i4, i17);
 __ZN7WebCore16IDBLevelDBCoding15DatabaseNameKey22encodeStopKeyForOriginERKN3WTF6StringE(i5, i17);
 __ZN7WebCore15LevelDBDatabase14createIteratorEPKNS_15LevelDBSnapshotE(i6, HEAP32[i2 + 12 >> 2] | 0, 0);
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0;
 i17 = i4 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 HEAP32[i7 >> 2] = i18;
 i19 = i4 + 8 | 0;
 HEAP32[i7 + 4 >> 2] = i18 + (HEAP32[i19 >> 2] | 0);
 FUNCTION_TABLE_vii[i2 & 31](i6, i7);
 i7 = i6;
 L1 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 31](i6) | 0) {
   i2 = i6;
   i18 = i9 | 0;
   i20 = i5 | 0;
   i21 = i9 + 4 | 0;
   i22 = i5 + 8 | 0;
   i23 = i10 | 0;
   i24 = i11 + 4 | 0;
   i25 = i12 | 0;
   i26 = i12 + 4 | 0;
   i27 = i13 | 0;
   i28 = i13;
   i29 = i6;
   i30 = 0;
   i31 = 0;
   while (1) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] & 31](i8, i6);
    i32 = HEAP32[i20 >> 2] | 0;
    HEAP32[i18 >> 2] = i32;
    HEAP32[i21 >> 2] = i32 + (HEAP32[i22 >> 2] | 0);
    if ((__ZN7WebCore16IDBLevelDBCoding7compareERKNS_12LevelDBSliceES3_b(i8, i9, 0) | 0) >= 0) {
     i33 = i29;
     i34 = 28;
     break L1;
    }
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] & 31](i10, i6);
    i32 = HEAP32[i23 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] & 31](i11, i6);
    i35 = HEAP32[i24 >> 2] | 0;
    HEAP32[i25 >> 2] = 0;
    HEAP32[i26 >> 2] = 0;
    __ZN7WebCore16IDBLevelDBCoding15DatabaseNameKey6decodeEPKcS3_PS1_(i32, i35, i12) | 0;
    i35 = HEAP32[i26 >> 2] | 0;
    HEAP32[i27 >> 2] = i35;
    if ((i35 | 0) != 0) {
     i32 = i35 | 0;
     HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 2;
    }
    if ((i30 | 0) == (HEAP32[i15 >> 2] | 0)) {
     i32 = i30 + 1 | 0;
     do {
      if (i31 >>> 0 > i13 >>> 0) {
       i34 = 10;
      } else {
       if ((i31 + (i30 << 2) | 0) >>> 0 <= i13 >>> 0) {
        i34 = 10;
        break;
       }
       __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i32);
       i35 = HEAP32[i14 >> 2] | 0;
       i36 = i35 + (i28 - i31 >> 2 << 2) | 0;
       i37 = i35;
      }
     } while (0);
     if ((i34 | 0) == 10) {
      i34 = 0;
      __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i32);
      i36 = i13;
      i37 = HEAP32[i14 >> 2] | 0;
     }
     i35 = HEAP32[i16 >> 2] | 0;
     i38 = i36 | 0;
     i39 = HEAP32[i38 >> 2] | 0;
     HEAP32[i38 >> 2] = 0;
     HEAP32[i37 + (i35 << 2) >> 2] = i39;
     i40 = i37;
     i41 = i35;
    } else {
     i35 = HEAP32[i27 >> 2] | 0;
     HEAP32[i27 >> 2] = 0;
     HEAP32[i31 + (i30 << 2) >> 2] = i35;
     i40 = i31;
     i41 = i30;
    }
    i35 = i41 + 1 | 0;
    HEAP32[i16 >> 2] = i35;
    i39 = HEAP32[i27 >> 2] | 0;
    do {
     if ((i39 | 0) != 0) {
      i38 = i39 | 0;
      i42 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
      if ((i42 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i39);
       break;
      } else {
       HEAP32[i38 >> 2] = i42;
       break;
      }
     }
    } while (0);
    i39 = HEAP32[i26 >> 2] | 0;
    do {
     if ((i39 | 0) != 0) {
      i32 = i39 | 0;
      i42 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
      if ((i42 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i39);
       break;
      } else {
       HEAP32[i32 >> 2] = i42;
       break;
      }
     }
    } while (0);
    i39 = HEAP32[i25 >> 2] | 0;
    do {
     if ((i39 | 0) != 0) {
      i42 = i39 | 0;
      i32 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
      if ((i32 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i39);
       break;
      } else {
       HEAP32[i42 >> 2] = i32;
       break;
      }
     }
    } while (0);
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 20 >> 2] & 31](i6);
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 31](i6) | 0) {
     i30 = i35;
     i31 = i40;
    } else {
     i34 = 26;
     break;
    }
   }
  } else {
   i34 = 26;
  }
 } while (0);
 do {
  if ((i34 | 0) == 26) {
   if ((i6 | 0) == 0) {
    break;
   }
   i33 = i6;
   i34 = 28;
  }
 } while (0);
 if ((i34 | 0) == 28) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] & 31](i6);
 }
 i6 = i5 + 8 | 0;
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
 }
 i6 = i5 | 0;
 i33 = HEAP32[i6 >> 2] | 0;
 if ((i33 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i5 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i33);
 }
 if ((HEAP32[i19 >> 2] | 0) != 0) {
  HEAP32[i19 >> 2] = 0;
 }
 i19 = HEAP32[i17 >> 2] | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i17 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i19);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKxRS3_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 232 | 0;
 i6 = i5 | 0;
 i7 = i5 + 80 | 0;
 i8 = i5 + 152 | 0;
 i9 = i2 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i12 = 8;
  } else {
   i13 = i11 << 1;
   i12 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i13 | 0) ? i11 : i13;
  }
  __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i2, i12, 0) | 0;
  i14 = HEAP32[i9 >> 2] | 0;
 } else {
  i14 = i10;
 }
 i10 = HEAP32[i2 + 8 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = HEAP32[i3 + 4 >> 2] | 0;
 i11 = _i64Add(i12, i13, ~0, ~i12) | 0;
 i15 = tempRet0;
 i16 = (i11 >>> 22 | i15 << 10) ^ i11;
 i11 = (i15 >>> 22 | 0 << 10) ^ i15;
 i15 = _i64Add(i16, i11, ~(i16 << 13 | 0 >>> 19), ~(i11 << 13 | i16 >>> 19)) | 0;
 i16 = tempRet0;
 i11 = ___muldi3((i15 >>> 8 | i16 << 24) ^ i15, (i16 >>> 8 | 0 << 24) ^ i16, 9, 0) | 0;
 i16 = tempRet0;
 i15 = (i11 >>> 15 | i16 << 17) ^ i11;
 i11 = (i16 >>> 15 | 0 << 17) ^ i16;
 i16 = _i64Add(i15, i11, ~(i15 << 27 | 0 >>> 5), ~(i11 << 27 | i15 >>> 5)) | 0;
 i15 = (i16 >>> 31 | tempRet0 << 1) ^ i16;
 i16 = i15 & i10;
 i11 = i14 + (i16 * 80 & -1) | 0;
 i17 = i11 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = HEAP32[i17 + 4 >> 2] | 0;
 do {
  if ((i18 | 0) == 0 & (i19 | 0) == 0) {
   i20 = i11;
   i21 = 11;
  } else {
   i17 = (i15 >>> 23) + ~i15 | 0;
   i22 = i17 << 12 ^ i17;
   i17 = i22 >>> 7 ^ i22;
   i22 = i17 << 2 ^ i17;
   i17 = i22 >>> 20 ^ i22 | 1;
   i22 = 0;
   i23 = 0;
   i24 = i16;
   i25 = i11;
   i26 = i19;
   i27 = i18;
   while (1) {
    if ((i27 | 0) == (i12 | 0) & (i26 | 0) == (i13 | 0)) {
     i21 = 8;
     break;
    }
    i28 = (i27 | 0) == (-1 | 0) & (i26 | 0) == (-1 | 0) ? i25 : i23;
    i29 = (i22 | 0) == 0 ? i17 : i22;
    i30 = i29 + i24 & i10;
    i31 = i14 + (i30 * 80 & -1) | 0;
    i32 = i31 | 0;
    i33 = HEAP32[i32 >> 2] | 0;
    i34 = HEAP32[i32 + 4 >> 2] | 0;
    if ((i33 | 0) == 0 & (i34 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i22 = i29;
     i23 = i28;
     i24 = i30;
     i25 = i31;
     i26 = i34;
     i27 = i33;
    }
   }
   if ((i21 | 0) == 8) {
    i27 = i14 + ((HEAP32[i2 + 4 >> 2] | 0) * 80 & -1) | 0;
    i26 = i1;
    HEAP32[i26 >> 2] = i25;
    HEAP32[i26 + 4 >> 2] = i27;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i21 | 0) == 10) {
    if ((i28 | 0) == 0) {
     i20 = i31;
     i21 = 11;
     break;
    }
    HEAP32[i7 >> 2] = 0;
    _memset(i7 + 16 | 0, 0, 20) | 0;
    _memset(i7 + 48 | 0, 0, 20) | 0;
    i27 = i6 | 0;
    HEAP32[i27 >> 2] = 0;
    HEAP32[i27 + 4 >> 2] = 0;
    i26 = i6 + 8 | 0;
    __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i26, i7);
    i24 = i8 | 0;
    i23 = HEAP32[i27 + 4 >> 2] | 0;
    HEAP32[i24 >> 2] = HEAP32[i27 >> 2];
    HEAP32[i24 + 4 >> 2] = i23;
    i23 = i8 + 8 | 0;
    __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i23, i26);
    __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i26);
    __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i7);
    i26 = i28 | 0;
    i27 = HEAP32[i24 + 4 >> 2] | 0;
    HEAP32[i26 >> 2] = HEAP32[i24 >> 2];
    HEAP32[i26 + 4 >> 2] = i27;
    __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i28 + 8 | 0, i23);
    __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i23);
    i23 = i2 + 16 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) - 1;
    i35 = i28;
    i36 = HEAP32[i3 + 4 >> 2] | 0;
    i37 = HEAP32[i3 >> 2] | 0;
    i38 = i23;
    break;
   }
  }
 } while (0);
 if ((i21 | 0) == 11) {
  i35 = i20;
  i36 = i13;
  i37 = i12;
  i38 = i2 + 16 | 0;
 }
 i12 = i35 | 0;
 HEAP32[i12 >> 2] = i37;
 HEAP32[i12 + 4 >> 2] = i36;
 __ZN7WebCore22IDBObjectStoreMetadataaSERKS0_(i35 + 8 | 0, i4) | 0;
 i4 = i2 + 12 | 0;
 i36 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i36;
 i4 = i2 + 4 | 0;
 i12 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i38 >> 2] | 0) + i36 << 1 | 0) < (i12 | 0)) {
  i39 = i35;
  i40 = i12;
 } else {
  if ((i12 | 0) == 0) {
   i41 = 8;
  } else {
   i38 = i12 << 1;
   i41 = (i36 * 6 & -1 | 0) < (i38 | 0) ? i12 : i38;
  }
  i38 = __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i2, i41, i35) | 0;
  i39 = i38;
  i40 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i9 >> 2] | 0) + (i40 * 80 & -1) | 0;
 i40 = i1;
 HEAP32[i40 >> 2] = i39;
 HEAP32[i40 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore24ObjectStoreKeyCursorImpl14loadCurrentRowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 64 | 0;
 i11 = i2 + 72 | 0;
 i12 = i2 + 80 | 0;
 i13 = i2 + 88 | 0;
 i14 = i2 + 96 | 0;
 i15 = i1 + 80 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 28 >> 2] & 31](i7, i16);
 i16 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i15 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 28 >> 2] & 31](i8, i7);
 i7 = HEAP32[i8 + 4 >> 2] | 0;
 i8 = i9 | 0;
 HEAP32[i8 >> 2] = 0;
 i17 = i9 + 4 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i9 + 8 | 0;
 HEAP32[i18 >> 2] = 0;
 do {
  if ((__ZN7WebCore16IDBLevelDBCoding18ObjectStoreDataKey6decodeEPKcS3_PS1_(i16, i7, i9) | 0) == 0) {
   __ZN3WTF6String6formatEPKcz(i3, H_BASE + 24 | 0, (i19 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i19 >> 2] = H_BASE + 88, i19) | 0);
   STACKTOP = i19;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i4, i3, 0);
   i20 = i4 | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i22 = 0;
   } else {
    i22 = i21 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i22, 10, 22);
   i21 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i20 = i21 | 0;
     i23 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i21);
      break;
     } else {
      HEAP32[i20 >> 2] = i23;
      break;
     }
    }
   } while (0);
   i21 = HEAP32[i3 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i24 = 0;
    break;
   }
   i23 = i21 | 0;
   i20 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    i24 = 0;
    break;
   } else {
    HEAP32[i23 >> 2] = i20;
    i24 = 0;
    break;
   }
  } else {
   __ZNK7WebCore16IDBLevelDBCoding18ObjectStoreDataKey7userKeyEv(i10, i9);
   i20 = i10 | 0;
   i23 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   i21 = i1 + 84 | 0;
   i25 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = i23;
   do {
    if ((i25 | 0) != 0) {
     i23 = i25 | 0;
     i26 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i25);
      __ZN3WTF8fastFreeEPv(i25);
      break;
     } else {
      HEAP32[i23 >> 2] = i26;
      break;
     }
    }
   } while (0);
   i25 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i26 = i25 | 0;
     i23 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i25);
      __ZN3WTF8fastFreeEPv(i25);
      break;
     } else {
      HEAP32[i26 >> 2] = i23;
      break;
     }
    }
   } while (0);
   i25 = HEAP32[i15 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i25 >> 2] | 0) + 32 >> 2] & 31](i12, i25);
   i25 = HEAP32[i12 >> 2] | 0;
   i20 = HEAP32[i15 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 32 >> 2] & 31](i13, i20);
   if ((__ZN7WebCore16IDBLevelDBCoding12decodeVarIntEPKcS2_Rx(i25, HEAP32[i13 + 4 >> 2] | 0, i11) | 0) != 0) {
    i25 = HEAP32[i1 + 88 >> 2] | 0;
    __ZN7WebCore16IDBLevelDBCoding12encodeIDBKeyERKNS_6IDBKeyE(i14, HEAP32[i21 >> 2] | 0);
    i20 = HEAP32[i11 >> 2] | 0;
    i23 = HEAP32[i11 + 4 >> 2] | 0;
    __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEEaSERKS2_(i25 + 4 | 0, i14) | 0;
    i26 = i25 + 16 | 0;
    HEAP32[i26 >> 2] = i20;
    HEAP32[i26 + 4 >> 2] = i23;
    i23 = i14 + 8 | 0;
    if ((HEAP32[i23 >> 2] | 0) != 0) {
     HEAP32[i23 >> 2] = 0;
    }
    i23 = i14 | 0;
    i26 = HEAP32[i23 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i24 = 1;
     break;
    }
    HEAP32[i23 >> 2] = 0;
    HEAP32[i14 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i26);
    i24 = 1;
    break;
   }
   __ZN3WTF6String6formatEPKcz(i5, H_BASE + 24 | 0, (i19 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i19 >> 2] = H_BASE + 88, i19) | 0);
   STACKTOP = i19;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i6, i5, 0);
   i26 = i6 | 0;
   i23 = HEAP32[i26 >> 2] | 0;
   if ((i23 | 0) == 0) {
    i27 = 0;
   } else {
    i27 = i23 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i27, 10, 22);
   i23 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i26 = i23 | 0;
     i20 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i23);
      break;
     } else {
      HEAP32[i26 >> 2] = i20;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i5 >> 2] | 0;
   if ((i23 | 0) == 0) {
    i24 = 0;
    break;
   }
   i21 = i23 | 0;
   i20 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    i24 = 0;
    break;
   } else {
    HEAP32[i21 >> 2] = i20;
    i24 = 0;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i18 >> 2] | 0) != 0) {
  HEAP32[i18 >> 2] = 0;
 }
 i18 = HEAP32[i8 >> 2] | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i2;
  return i24 | 0;
 }
 HEAP32[i8 >> 2] = 0;
 HEAP32[i17 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i18);
 STACKTOP = i2;
 return i24 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB22keyExistsInObjectStoreERNS_33IDBBackingStoreTransactionLevelDBExxRKNS_6IDBKeyERN3WTF6RefPtrINS_19IDBRecordIdentifierEEE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i9 = i1 | 0;
 i10 = i1 + 8 | 0;
 i11 = i1 + 16 | 0;
 i12 = i1 + 24 | 0;
 i13 = i1 + 40 | 0;
 i14 = i1 + 56 | 0;
 i15 = i1 + 64 | 0;
 i16 = i1 + 72 | 0;
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix17isValidDatabaseIdEx(i3, i4) | 0)) {
  i17 = 0;
  STACKTOP = i1;
  return i17 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix20isValidObjectStoreIdEx(i5, i6) | 0)) {
  i17 = 0;
  STACKTOP = i1;
  return i17 | 0;
 }
 HEAP8[i11] = 0;
 i18 = HEAP32[i2 + 20 >> 2] | 0;
 __ZN7WebCore16IDBLevelDBCoding18ObjectStoreDataKey6encodeExxRKNS_6IDBKeyE(i12, i3, i4, i5, i6, i7);
 i6 = i13 | 0;
 HEAP32[i6 >> 2] = 0;
 i5 = i13 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i4 = i13 + 8 | 0;
 HEAP32[i4 >> 2] = 0;
 i3 = i12 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i14 >> 2] = i2;
 i19 = i12 + 8 | 0;
 HEAP32[i14 + 4 >> 2] = i2 + (HEAP32[i19 >> 2] | 0);
 do {
  if (__ZN7WebCore18LevelDBTransaction7safeGetERKNS_12LevelDBSliceERN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEERb(i18, i14, i13, i11) | 0) {
   if ((HEAP8[i11] & 1) == 0) {
    i20 = 1;
    break;
   }
   i2 = HEAP32[i6 >> 2] | 0;
   if ((__ZN7WebCore16IDBLevelDBCoding12decodeVarIntEPKcS2_Rx(i2, i2 + (HEAP32[i4 >> 2] | 0) | 0, i15) | 0) == 0) {
    i20 = 0;
    break;
   }
   __ZN7WebCore16IDBLevelDBCoding12encodeIDBKeyERKNS_6IDBKeyE(i16, i7);
   i2 = HEAP32[i15 >> 2] | 0;
   i21 = HEAP32[i15 + 4 >> 2] | 0;
   i22 = __ZN3WTF10fastMallocEj(24) | 0;
   i23 = i22;
   HEAP32[i22 >> 2] = 1;
   i24 = i16 + 4 | 0;
   i25 = HEAP32[i24 >> 2] | 0;
   i26 = i16 + 8 | 0;
   i27 = HEAP32[i26 >> 2] | 0;
   i28 = i22 + 4 | 0;
   HEAP32[i28 >> 2] = 0;
   i29 = i22 + 8 | 0;
   HEAP32[i29 >> 2] = 0;
   HEAP32[i22 + 12 >> 2] = i27;
   do {
    if ((i25 | 0) != 0) {
     i27 = __ZN3WTF18fastMallocGoodSizeEj(i25) | 0;
     HEAP32[i29 >> 2] = i27;
     i30 = __ZN3WTF10fastMallocEj(i27) | 0;
     HEAP32[i28 >> 2] = i30;
     if ((i30 | 0) == 0) {
      break;
     }
     _memcpy(i30 | 0, HEAP32[i16 >> 2] | 0, HEAP32[i26 >> 2] | 0) | 0;
    }
   } while (0);
   i28 = i22 + 16 | 0;
   HEAP32[i28 >> 2] = i2;
   HEAP32[i28 + 4 >> 2] = i21;
   i28 = i8 | 0;
   i29 = HEAP32[i28 >> 2] | 0;
   HEAP32[i28 >> 2] = i23;
   do {
    if ((i29 | 0) != 0) {
     i28 = i29 | 0;
     i25 = i29 | 0;
     i30 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     if ((i30 | 0) != 0) {
      HEAP32[i25 >> 2] = i30;
      break;
     }
     i30 = i28 + 12 | 0;
     if ((HEAP32[i30 >> 2] | 0) != 0) {
      HEAP32[i30 >> 2] = 0;
     }
     i30 = i28 + 4 | 0;
     i25 = HEAP32[i30 >> 2] | 0;
     if ((i25 | 0) != 0) {
      HEAP32[i30 >> 2] = 0;
      HEAP32[i28 + 8 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i25);
     }
     __ZN3WTF8fastFreeEPv(i29);
    }
   } while (0);
   if ((HEAP32[i26 >> 2] | 0) != 0) {
    HEAP32[i26 >> 2] = 0;
   }
   i29 = i16 | 0;
   i23 = HEAP32[i29 >> 2] | 0;
   if ((i23 | 0) == 0) {
    i20 = 1;
    break;
   }
   HEAP32[i29 >> 2] = 0;
   HEAP32[i24 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i23);
   i20 = 1;
  } else {
   __ZN3WTF6String6formatEPKcz(i9, H_BASE + 24 | 0, (i23 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i23 >> 2] = H_BASE + 88, i23) | 0);
   STACKTOP = i23;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i10, i9, 0);
   i23 = i10 | 0;
   i29 = HEAP32[i23 >> 2] | 0;
   if ((i29 | 0) == 0) {
    i31 = 0;
   } else {
    i31 = i29 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i31, 9, 22);
   i29 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i23 = i29 | 0;
     i21 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i29);
      break;
     } else {
      HEAP32[i23 >> 2] = i21;
      break;
     }
    }
   } while (0);
   i29 = HEAP32[i9 >> 2] | 0;
   if ((i29 | 0) == 0) {
    i20 = 0;
    break;
   }
   i24 = i29 | 0;
   i26 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i29);
    i20 = 0;
    break;
   } else {
    HEAP32[i24 >> 2] = i26;
    i20 = 0;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i5 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 if ((HEAP32[i19 >> 2] | 0) != 0) {
  HEAP32[i19 >> 2] = 0;
 }
 i19 = HEAP32[i3 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i17 = i20;
  STACKTOP = i1;
  return i17 | 0;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i12 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i19);
 i17 = i20;
 STACKTOP = i1;
 return i17 | 0;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKxS3_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i11 = i9 << 1;
   i10 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i9 : i11;
  }
  __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = HEAP32[i3 + 4 >> 2] | 0;
 i9 = _i64Add(i10, i11, ~0, ~i10) | 0;
 i13 = tempRet0;
 i14 = (i9 >>> 22 | i13 << 10) ^ i9;
 i9 = (i13 >>> 22 | 0 << 10) ^ i13;
 i13 = _i64Add(i14, i9, ~(i14 << 13 | 0 >>> 19), ~(i9 << 13 | i14 >>> 19)) | 0;
 i14 = tempRet0;
 i9 = ___muldi3((i13 >>> 8 | i14 << 24) ^ i13, (i14 >>> 8 | 0 << 24) ^ i14, 9, 0) | 0;
 i14 = tempRet0;
 i13 = (i9 >>> 15 | i14 << 17) ^ i9;
 i9 = (i14 >>> 15 | 0 << 17) ^ i14;
 i14 = _i64Add(i13, i9, ~(i13 << 27 | 0 >>> 5), ~(i9 << 27 | i13 >>> 5)) | 0;
 i13 = (i14 >>> 31 | tempRet0 << 1) ^ i14;
 i14 = i13 & i8;
 i9 = i12 + (i14 * 48 & -1) | 0;
 i15 = i9 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 i17 = HEAP32[i15 + 4 >> 2] | 0;
 do {
  if ((i16 | 0) == 0 & (i17 | 0) == 0) {
   i18 = i9;
   i19 = 11;
  } else {
   i15 = (i13 >>> 23) + ~i13 | 0;
   i20 = i15 << 12 ^ i15;
   i15 = i20 >>> 7 ^ i20;
   i20 = i15 << 2 ^ i15;
   i15 = i20 >>> 20 ^ i20 | 1;
   i20 = 0;
   i21 = 0;
   i22 = i14;
   i23 = i9;
   i24 = i17;
   i25 = i16;
   while (1) {
    if ((i25 | 0) == (i10 | 0) & (i24 | 0) == (i11 | 0)) {
     i19 = 8;
     break;
    }
    i26 = (i25 | 0) == (-1 | 0) & (i24 | 0) == (-1 | 0) ? i23 : i21;
    i27 = (i20 | 0) == 0 ? i15 : i20;
    i28 = i27 + i22 & i8;
    i29 = i12 + (i28 * 48 & -1) | 0;
    i30 = i29 | 0;
    i31 = HEAP32[i30 >> 2] | 0;
    i32 = HEAP32[i30 + 4 >> 2] | 0;
    if ((i31 | 0) == 0 & (i32 | 0) == 0) {
     i19 = 10;
     break;
    } else {
     i20 = i27;
     i21 = i26;
     i22 = i28;
     i23 = i29;
     i24 = i32;
     i25 = i31;
    }
   }
   if ((i19 | 0) == 8) {
    i25 = i12 + ((HEAP32[i2 + 4 >> 2] | 0) * 48 & -1) | 0;
    i24 = i1;
    HEAP32[i24 >> 2] = i23;
    HEAP32[i24 + 4 >> 2] = i25;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i19 | 0) == 10) {
    if ((i26 | 0) == 0) {
     i18 = i29;
     i19 = 11;
     break;
    }
    _memset(i6 + 16 | 0, 0, 16) | 0;
    i25 = i26 | 0;
    HEAP32[i25 >> 2] = 0;
    HEAP32[i25 + 4 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
    HEAP32[i26 + 8 >> 2] = 0;
    HEAP32[i26 + 24 >> 2] = 0;
    HEAP32[i6 + 20 >> 2] = 0;
    _memset(i26 + 28 | 0, 0, 16) | 0;
    HEAP32[i6 + 32 >> 2] = 0;
    HEAP32[i26 + 32 >> 2] = 0;
    HEAP32[i6 + 24 >> 2] = 0;
    HEAP32[i26 + 36 >> 2] = 0;
    HEAP32[i6 + 28 >> 2] = 0;
    HEAP8[i26 + 44 | 0] = 0;
    HEAP8[i26 + 45 | 0] = 0;
    __ZN7WebCore16IDBIndexMetadataD1Ev(i6);
    i25 = i2 + 16 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) - 1;
    i33 = i26;
    i34 = i25;
    break;
   }
  }
 } while (0);
 if ((i19 | 0) == 11) {
  i33 = i18;
  i34 = i2 + 16 | 0;
 }
 __ZN3WTF17HashMapTranslatorINS_7HashMapIxN7WebCore16IDBIndexMetadataENS_7IntHashIyEENS_10HashTraitsIxEENS6_IS3_EEE18KeyValuePairTraitsES5_E9translateINS_12KeyValuePairIxS3_EERKxS3_EEvRT_OT0_OT1_(i33, i3, i4);
 i4 = i2 + 12 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i3;
 i4 = i2 + 4 | 0;
 i18 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i34 >> 2] | 0) + i3 << 1 | 0) < (i18 | 0)) {
  i35 = i33;
  i36 = i18;
 } else {
  if ((i18 | 0) == 0) {
   i37 = 8;
  } else {
   i34 = i18 << 1;
   i37 = (i3 * 6 & -1 | 0) < (i34 | 0) ? i18 : i34;
  }
  i34 = __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i2, i37, i33) | 0;
  i35 = i34;
  i36 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i7 >> 2] | 0) + (i36 * 48 & -1) | 0;
 i36 = i1;
 HEAP32[i36 >> 2] = i35;
 HEAP32[i36 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function ___udivmoddi4(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i6 = i1;
 i7 = i2;
 i8 = i7;
 i9 = i3;
 i10 = i4;
 i11 = i10;
 if ((i8 | 0) == 0) {
  i12 = (i5 | 0) != 0;
  if ((i11 | 0) == 0) {
   if (i12) {
    HEAP32[i5 >> 2] = (i6 >>> 0) % (i9 >>> 0);
    HEAP32[i5 + 4 >> 2] = 0;
   }
   i13 = 0;
   i14 = (i6 >>> 0) / (i9 >>> 0) >>> 0;
   return (tempRet0 = i13, i14) | 0;
  } else {
   if (!i12) {
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   HEAP32[i5 >> 2] = i1 & -1;
   HEAP32[i5 + 4 >> 2] = i2 & 0;
   i13 = 0;
   i14 = 0;
   return (tempRet0 = i13, i14) | 0;
  }
 }
 i12 = (i11 | 0) == 0;
 do {
  if ((i9 | 0) == 0) {
   if (i12) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = (i8 >>> 0) % (i9 >>> 0);
     HEAP32[i5 + 4 >> 2] = 0;
    }
    i13 = 0;
    i14 = (i8 >>> 0) / (i9 >>> 0) >>> 0;
    return (tempRet0 = i13, i14) | 0;
   }
   if ((i6 | 0) == 0) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = 0;
     HEAP32[i5 + 4 >> 2] = (i8 >>> 0) % (i11 >>> 0);
    }
    i13 = 0;
    i14 = (i8 >>> 0) / (i11 >>> 0) >>> 0;
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = i11 - 1 | 0;
   if ((i15 & i11 | 0) == 0) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = i1 & -1;
     HEAP32[i5 + 4 >> 2] = i15 & i8 | i2 & 0;
    }
    i13 = 0;
    i14 = i8 >>> ((_llvm_cttz_i32(i11 | 0) | 0) >>> 0);
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = (_llvm_ctlz_i32(i11 | 0) | 0) - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
   if (i15 >>> 0 <= 30) {
    i16 = i15 + 1 | 0;
    i17 = 31 - i15 | 0;
    i18 = i16;
    i19 = i8 << i17 | i6 >>> (i16 >>> 0);
    i20 = i8 >>> (i16 >>> 0);
    i21 = 0;
    i22 = i6 << i17;
    break;
   }
   if ((i5 | 0) == 0) {
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   HEAP32[i5 >> 2] = i1 & -1;
   HEAP32[i5 + 4 >> 2] = i7 | i2 & 0;
   i13 = 0;
   i14 = 0;
   return (tempRet0 = i13, i14) | 0;
  } else {
   if (!i12) {
    i17 = (_llvm_ctlz_i32(i11 | 0) | 0) - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
    if (i17 >>> 0 <= 31) {
     i16 = i17 + 1 | 0;
     i15 = 31 - i17 | 0;
     i23 = i17 - 31 >> 31;
     i18 = i16;
     i19 = i6 >>> (i16 >>> 0) & i23 | i8 << i15;
     i20 = i8 >>> (i16 >>> 0) & i23;
     i21 = 0;
     i22 = i6 << i15;
     break;
    }
    if ((i5 | 0) == 0) {
     i13 = 0;
     i14 = 0;
     return (tempRet0 = i13, i14) | 0;
    }
    HEAP32[i5 >> 2] = i1 & -1;
    HEAP32[i5 + 4 >> 2] = i7 | i2 & 0;
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = i9 - 1 | 0;
   if ((i15 & i9 | 0) != 0) {
    i23 = (_llvm_ctlz_i32(i9 | 0) | 0) + 33 - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
    i16 = 64 - i23 | 0;
    i17 = 32 - i23 | 0;
    i24 = i17 >> 31;
    i25 = i23 - 32 | 0;
    i26 = i25 >> 31;
    i18 = i23;
    i19 = i17 - 1 >> 31 & i8 >>> (i25 >>> 0) | (i8 << i17 | i6 >>> (i23 >>> 0)) & i26;
    i20 = i26 & i8 >>> (i23 >>> 0);
    i21 = i6 << i16 & i24;
    i22 = (i8 << i16 | i6 >>> (i25 >>> 0)) & i24 | i6 << i17 & i23 - 33 >> 31;
    break;
   }
   if ((i5 | 0) != 0) {
    HEAP32[i5 >> 2] = i15 & i6;
    HEAP32[i5 + 4 >> 2] = 0;
   }
   if ((i9 | 0) == 1) {
    i13 = i7 | i2 & 0;
    i14 = i1 & -1 | 0;
    return (tempRet0 = i13, i14) | 0;
   } else {
    i15 = _llvm_cttz_i32(i9 | 0) | 0;
    i13 = i8 >>> (i15 >>> 0) | 0;
    i14 = i8 << 32 - i15 | i6 >>> (i15 >>> 0) | 0;
    return (tempRet0 = i13, i14) | 0;
   }
  }
 } while (0);
 if ((i18 | 0) == 0) {
  i27 = i22;
  i28 = i21;
  i29 = i20;
  i30 = i19;
  i31 = 0;
  i32 = 0;
 } else {
  i6 = i3 & -1 | 0;
  i3 = i10 | i4 & 0;
  i4 = _i64Add(i6, i3, -1, -1) | 0;
  i10 = tempRet0;
  i8 = i22;
  i22 = i21;
  i21 = i20;
  i20 = i19;
  i19 = i18;
  i18 = 0;
  while (1) {
   i33 = i22 >>> 31 | i8 << 1;
   i34 = i18 | i22 << 1;
   i9 = i20 << 1 | i8 >>> 31 | 0;
   i1 = i20 >>> 31 | i21 << 1 | 0;
   _i64Subtract(i4, i10, i9, i1) | 0;
   i2 = tempRet0;
   i7 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
   i35 = i7 & 1;
   i36 = _i64Subtract(i9, i1, i7 & i6, (((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1) & i3) | 0;
   i37 = tempRet0;
   i2 = i19 - 1 | 0;
   if ((i2 | 0) == 0) {
    break;
   } else {
    i8 = i33;
    i22 = i34;
    i21 = i37;
    i20 = i36;
    i19 = i2;
    i18 = i35;
   }
  }
  i27 = i33;
  i28 = i34;
  i29 = i37;
  i30 = i36;
  i31 = 0;
  i32 = i35;
 }
 i35 = i28;
 i28 = 0;
 if ((i5 | 0) != 0) {
  HEAP32[i5 >> 2] = i30;
  HEAP32[i5 + 4 >> 2] = i29;
 }
 i13 = (i35 | 0) >>> 31 | (i27 | i28) << 1 | (i28 << 1 | i35 >>> 31) & 0 | i31;
 i14 = (i35 << 1 | 0 >>> 31) & -2 | i32;
 return (tempRet0 = i13, i14) | 0;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i11 = i9 << 1;
   i10 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i9 : i11;
  }
  __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i10, i11, ~0, ~i10) | 0;
 i9 = tempRet0;
 i13 = (i3 >>> 22 | i9 << 10) ^ i3;
 i3 = (i9 >>> 22 | 0 << 10) ^ i9;
 i9 = _i64Add(i13, i3, ~(i13 << 13 | 0 >>> 19), ~(i3 << 13 | i13 >>> 19)) | 0;
 i13 = tempRet0;
 i3 = ___muldi3((i9 >>> 8 | i13 << 24) ^ i9, (i13 >>> 8 | 0 << 24) ^ i13, 9, 0) | 0;
 i13 = tempRet0;
 i9 = (i3 >>> 15 | i13 << 17) ^ i3;
 i3 = (i13 >>> 15 | 0 << 17) ^ i13;
 i13 = _i64Add(i9, i3, ~(i9 << 27 | 0 >>> 5), ~(i3 << 27 | i9 >>> 5)) | 0;
 i9 = (i13 >>> 31 | tempRet0 << 1) ^ i13;
 i13 = i9 & i8;
 i3 = i12 + (i13 * 48 & -1) | 0;
 i14 = i3 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = HEAP32[i14 + 4 >> 2] | 0;
 do {
  if ((i15 | 0) == 0 & (i16 | 0) == 0) {
   i17 = i3;
   i18 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i19 = i14 << 12 ^ i14;
   i14 = i19 >>> 7 ^ i19;
   i19 = i14 << 2 ^ i14;
   i14 = i19 >>> 20 ^ i19 | 1;
   i19 = 0;
   i20 = 0;
   i21 = i13;
   i22 = i3;
   i23 = i16;
   i24 = i15;
   while (1) {
    if ((i24 | 0) == (i10 | 0) & (i23 | 0) == (i11 | 0)) {
     i18 = 8;
     break;
    }
    i25 = (i24 | 0) == (-1 | 0) & (i23 | 0) == (-1 | 0) ? i22 : i20;
    i26 = (i19 | 0) == 0 ? i14 : i19;
    i27 = i26 + i21 & i8;
    i28 = i12 + (i27 * 48 & -1) | 0;
    i29 = i28 | 0;
    i30 = HEAP32[i29 >> 2] | 0;
    i31 = HEAP32[i29 + 4 >> 2] | 0;
    if ((i30 | 0) == 0 & (i31 | 0) == 0) {
     i18 = 10;
     break;
    } else {
     i19 = i26;
     i20 = i25;
     i21 = i27;
     i22 = i28;
     i23 = i31;
     i24 = i30;
    }
   }
   if ((i18 | 0) == 10) {
    if ((i25 | 0) == 0) {
     i17 = i28;
     i18 = 11;
     break;
    }
    _memset(i6 + 16 | 0, 0, 16) | 0;
    i24 = i25 | 0;
    HEAP32[i24 >> 2] = 0;
    HEAP32[i24 + 4 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
    HEAP32[i25 + 8 >> 2] = 0;
    HEAP32[i25 + 24 >> 2] = 0;
    HEAP32[i6 + 20 >> 2] = 0;
    _memset(i25 + 28 | 0, 0, 16) | 0;
    HEAP32[i6 + 32 >> 2] = 0;
    HEAP32[i25 + 32 >> 2] = 0;
    HEAP32[i6 + 24 >> 2] = 0;
    HEAP32[i25 + 36 >> 2] = 0;
    HEAP32[i6 + 28 >> 2] = 0;
    HEAP8[i25 + 44 | 0] = 0;
    HEAP8[i25 + 45 | 0] = 0;
    __ZN7WebCore16IDBIndexMetadataD1Ev(i6);
    i24 = i2 + 16 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) - 1;
    i32 = i25;
    i33 = i24;
    break;
   } else if ((i18 | 0) == 8) {
    i24 = i12 + ((HEAP32[i2 + 4 >> 2] | 0) * 48 & -1) | 0;
    i23 = i1;
    HEAP32[i23 >> 2] = i22;
    HEAP32[i23 + 4 >> 2] = i24;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 if ((i18 | 0) == 11) {
  i32 = i17;
  i33 = i2 + 16 | 0;
 }
 i17 = i4 | 0;
 i18 = HEAP32[i17 + 4 >> 2] | 0;
 i12 = i32 | 0;
 HEAP32[i12 >> 2] = HEAP32[i17 >> 2];
 HEAP32[i12 + 4 >> 2] = i18;
 __ZN7WebCore16IDBIndexMetadataaSERKS0_(i32 + 8 | 0, i4 + 8 | 0) | 0;
 i4 = i2 + 12 | 0;
 i18 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i18;
 i4 = i2 + 4 | 0;
 i12 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i33 >> 2] | 0) + i18 << 1 | 0) < (i12 | 0)) {
  i34 = i32;
  i35 = i12;
 } else {
  if ((i12 | 0) == 0) {
   i36 = 8;
  } else {
   i33 = i12 << 1;
   i36 = (i18 * 6 & -1 | 0) < (i33 | 0) ? i12 : i33;
  }
  i33 = __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i2, i36, i32) | 0;
  i34 = i33;
  i35 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i7 >> 2] | 0) + (i35 * 48 & -1) | 0;
 i35 = i1;
 HEAP32[i35 >> 2] = i34;
 HEAP32[i35 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore22IDBBackingStoreLevelDB9getRecordERNS_33IDBBackingStoreTransactionLevelDBExxRKNS_6IDBKeyERN3WTF6VectorIcLj0ENS6_15CrashOnOverflowEEE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i9 = i1 | 0;
 i10 = i1 + 8 | 0;
 i11 = i1 + 16 | 0;
 i12 = i1 + 24 | 0;
 i13 = i1 + 32 | 0;
 i14 = i1 + 48 | 0;
 i15 = i1 + 64 | 0;
 i16 = i1 + 72 | 0;
 i17 = i1 + 80 | 0;
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix17isValidDatabaseIdEx(i3, i4) | 0)) {
  i18 = 0;
  STACKTOP = i1;
  return i18 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix20isValidObjectStoreIdEx(i5, i6) | 0)) {
  i18 = 0;
  STACKTOP = i1;
  return i18 | 0;
 }
 i19 = HEAP32[i2 + 20 >> 2] | 0;
 __ZN7WebCore16IDBLevelDBCoding18ObjectStoreDataKey6encodeExxRKNS_6IDBKeyE(i13, i3, i4, i5, i6, i7);
 i7 = i14 | 0;
 HEAP32[i7 >> 2] = 0;
 i6 = i14 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i5 = i14 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 i4 = i8 + 4 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) != 0) {
   i3 = i8 + 8 | 0;
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
   }
   i3 = i8 | 0;
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   HEAP32[i3 >> 2] = 0;
   HEAP32[i4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 HEAP8[i15] = 0;
 i4 = i13 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i16 >> 2] = i2;
 i3 = i13 + 8 | 0;
 HEAP32[i16 + 4 >> 2] = i2 + (HEAP32[i3 >> 2] | 0);
 do {
  if (__ZN7WebCore18LevelDBTransaction7safeGetERKNS_12LevelDBSliceERN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEERb(i19, i16, i14, i15) | 0) {
   if ((HEAP8[i15] & 1) == 0) {
    i20 = 1;
    break;
   }
   i2 = HEAP32[i7 >> 2] | 0;
   i21 = __ZN7WebCore16IDBLevelDBCoding12decodeVarIntEPKcS2_Rx(i2, i2 + (HEAP32[i5 >> 2] | 0) | 0, i17) | 0;
   if ((i21 | 0) != 0) {
    __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE11appendRangeIPKcEEvT_S6_(i8, i21, (HEAP32[i7 >> 2] | 0) + (HEAP32[i5 >> 2] | 0) | 0);
    i20 = 1;
    break;
   }
   __ZN3WTF6String6formatEPKcz(i9, H_BASE + 24 | 0, (i22 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i22 >> 2] = H_BASE + 88, i22) | 0);
   STACKTOP = i22;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i10, i9, 0);
   i21 = i10 | 0;
   i2 = HEAP32[i21 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i23 = 0;
   } else {
    i23 = i2 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i23, 8, 22);
   i2 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i21 = i2 | 0;
     i24 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i2);
      break;
     } else {
      HEAP32[i21 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i2 = HEAP32[i9 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i20 = 0;
    break;
   }
   i24 = i2 | 0;
   i21 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    i20 = 0;
    break;
   } else {
    HEAP32[i24 >> 2] = i21;
    i20 = 0;
    break;
   }
  } else {
   __ZN3WTF6String6formatEPKcz(i11, H_BASE + 24 | 0, (i22 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i22 >> 2] = H_BASE + 88, i22) | 0);
   STACKTOP = i22;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i12, i11, 0);
   i21 = i12 | 0;
   i24 = HEAP32[i21 >> 2] | 0;
   if ((i24 | 0) == 0) {
    i25 = 0;
   } else {
    i25 = i24 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i25, 8, 22);
   i24 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i21 = i24 | 0;
     i2 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i24);
      break;
     } else {
      HEAP32[i21 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i24 = HEAP32[i11 >> 2] | 0;
   if ((i24 | 0) == 0) {
    i20 = 0;
    break;
   }
   i2 = i24 | 0;
   i21 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    i20 = 0;
    break;
   } else {
    HEAP32[i2 >> 2] = i21;
    i20 = 0;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i6 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i18 = i20;
  STACKTOP = i1;
  return i18 | 0;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 i18 = i20;
 STACKTOP = i1;
 return i18 | 0;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore33IDBBackingStoreTransactionLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKxNS_10PassRefPtrIS4_EEEENS_18HashTableAddResultINS_17HashTableIteratorIxS6_S8_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore33IDBBackingStoreTransactionLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = HEAP32[i3 + 4 >> 2] | 0;
 i7 = _i64Add(i8, i9, ~0, ~i8) | 0;
 i11 = tempRet0;
 i12 = (i7 >>> 22 | i11 << 10) ^ i7;
 i7 = (i11 >>> 22 | 0 << 10) ^ i11;
 i11 = _i64Add(i12, i7, ~(i12 << 13 | 0 >>> 19), ~(i7 << 13 | i12 >>> 19)) | 0;
 i12 = tempRet0;
 i7 = ___muldi3((i11 >>> 8 | i12 << 24) ^ i11, (i12 >>> 8 | 0 << 24) ^ i12, 9, 0) | 0;
 i12 = tempRet0;
 i11 = (i7 >>> 15 | i12 << 17) ^ i7;
 i7 = (i12 >>> 15 | 0 << 17) ^ i12;
 i12 = _i64Add(i11, i7, ~(i11 << 27 | 0 >>> 5), ~(i7 << 27 | i11 >>> 5)) | 0;
 i11 = (i12 >>> 31 | tempRet0 << 1) ^ i12;
 i12 = i11 & i6;
 i7 = i10 + (i12 << 4) | 0;
 i13 = i7 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = HEAP32[i13 + 4 >> 2] | 0;
 do {
  if ((i14 | 0) == 0 & (i15 | 0) == 0) {
   i16 = i7;
   i17 = i9;
   i18 = i8;
  } else {
   i13 = (i11 >>> 23) + ~i11 | 0;
   i19 = i13 << 12 ^ i13;
   i13 = i19 >>> 7 ^ i19;
   i19 = i13 << 2 ^ i13;
   i13 = i19 >>> 20 ^ i19 | 1;
   i19 = 0;
   i20 = 0;
   i21 = i12;
   i22 = i7;
   i23 = i15;
   i24 = i14;
   while (1) {
    if ((i24 | 0) == (i8 | 0) & (i23 | 0) == (i9 | 0)) {
     i25 = 8;
     break;
    }
    i26 = (i24 | 0) == (-1 | 0) & (i23 | 0) == (-1 | 0) ? i22 : i20;
    i27 = (i19 | 0) == 0 ? i13 : i19;
    i28 = i27 + i21 & i6;
    i29 = i10 + (i28 << 4) | 0;
    i30 = i29 | 0;
    i31 = HEAP32[i30 >> 2] | 0;
    i32 = HEAP32[i30 + 4 >> 2] | 0;
    if ((i31 | 0) == 0 & (i32 | 0) == 0) {
     i25 = 10;
     break;
    } else {
     i19 = i27;
     i20 = i26;
     i21 = i28;
     i22 = i29;
     i23 = i32;
     i24 = i31;
    }
   }
   if ((i25 | 0) == 8) {
    i24 = i10 + (HEAP32[i2 + 4 >> 2] << 4) | 0;
    i23 = i1;
    HEAP32[i23 >> 2] = i22;
    HEAP32[i23 + 4 >> 2] = i24;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i25 | 0) == 10) {
    if ((i26 | 0) == 0) {
     i16 = i29;
     i17 = i9;
     i18 = i8;
     break;
    }
    _memset(i26 | 0, 0, 16) | 0;
    i24 = i2 + 16 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) - 1;
    i16 = i26;
    i17 = HEAP32[i3 + 4 >> 2] | 0;
    i18 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 i3 = i16 | 0;
 HEAP32[i3 >> 2] = i18;
 HEAP32[i3 + 4 >> 2] = i17;
 i17 = i4 | 0;
 i4 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 i17 = i16 + 8 | 0;
 i3 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = i4;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i17 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) == 0) {
    __ZN7WebCore33IDBBackingStoreTransactionLevelDBD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i3 = i2 + 12 | 0;
 i17 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i17;
 i3 = i2 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i17 << 1 | 0) < (i4 | 0)) {
  i33 = i16;
  i34 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i35 = 8;
  } else {
   i18 = i4 << 1;
   i35 = (i17 * 6 & -1 | 0) < (i18 | 0) ? i4 : i18;
  }
  i18 = __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore33IDBBackingStoreTransactionLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i35, i16) | 0;
  i33 = i18;
  i34 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i34 << 4) | 0;
 i34 = i1;
 HEAP32[i34 >> 2] = i33;
 HEAP32[i34 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIyEENS_7HashMapIxS8_SD_NS_10HashTraitsIxEENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKxRKS8_EENS_18HashTableAddResultINS_17HashTableIteratorIxS9_SB_SD_SJ_SG_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIyEENS_7HashMapIxS8_SD_NS_10HashTraitsIxEENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = HEAP32[i3 + 4 >> 2] | 0;
 i7 = _i64Add(i8, i9, ~0, ~i8) | 0;
 i11 = tempRet0;
 i12 = (i7 >>> 22 | i11 << 10) ^ i7;
 i7 = (i11 >>> 22 | 0 << 10) ^ i11;
 i11 = _i64Add(i12, i7, ~(i12 << 13 | 0 >>> 19), ~(i7 << 13 | i12 >>> 19)) | 0;
 i12 = tempRet0;
 i7 = ___muldi3((i11 >>> 8 | i12 << 24) ^ i11, (i12 >>> 8 | 0 << 24) ^ i12, 9, 0) | 0;
 i12 = tempRet0;
 i11 = (i7 >>> 15 | i12 << 17) ^ i7;
 i7 = (i12 >>> 15 | 0 << 17) ^ i12;
 i12 = _i64Add(i11, i7, ~(i11 << 27 | 0 >>> 5), ~(i7 << 27 | i11 >>> 5)) | 0;
 i11 = (i12 >>> 31 | tempRet0 << 1) ^ i12;
 i12 = i11 & i6;
 i7 = i10 + (i12 * 24 & -1) | 0;
 i13 = i7 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = HEAP32[i13 + 4 >> 2] | 0;
 do {
  if ((i14 | 0) == 0 & (i15 | 0) == 0) {
   i16 = i7;
   i17 = 11;
  } else {
   i13 = (i11 >>> 23) + ~i11 | 0;
   i18 = i13 << 12 ^ i13;
   i13 = i18 >>> 7 ^ i18;
   i18 = i13 << 2 ^ i13;
   i13 = i18 >>> 20 ^ i18 | 1;
   i18 = 0;
   i19 = 0;
   i20 = i12;
   i21 = i7;
   i22 = i15;
   i23 = i14;
   while (1) {
    if ((i23 | 0) == (i8 | 0) & (i22 | 0) == (i9 | 0)) {
     i17 = 8;
     break;
    }
    i24 = (i23 | 0) == (-1 | 0) & (i22 | 0) == (-1 | 0) ? i21 : i19;
    i25 = (i18 | 0) == 0 ? i13 : i18;
    i26 = i25 + i20 & i6;
    i27 = i10 + (i26 * 24 & -1) | 0;
    i28 = i27 | 0;
    i29 = HEAP32[i28 >> 2] | 0;
    i30 = HEAP32[i28 + 4 >> 2] | 0;
    if ((i29 | 0) == 0 & (i30 | 0) == 0) {
     i17 = 10;
     break;
    } else {
     i18 = i25;
     i19 = i24;
     i20 = i26;
     i21 = i27;
     i22 = i30;
     i23 = i29;
    }
   }
   if ((i17 | 0) == 8) {
    i23 = i10 + ((HEAP32[i2 + 4 >> 2] | 0) * 24 & -1) | 0;
    i22 = i1;
    HEAP32[i22 >> 2] = i21;
    HEAP32[i22 + 4 >> 2] = i23;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i17 | 0) == 10) {
    if ((i24 | 0) == 0) {
     i16 = i27;
     i17 = 11;
     break;
    }
    _memset(i24 | 0, 0, 20) | 0;
    i23 = i2 + 16 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) - 1;
    i31 = i24;
    i32 = HEAP32[i3 + 4 >> 2] | 0;
    i33 = HEAP32[i3 >> 2] | 0;
    i34 = i23;
    break;
   }
  }
 } while (0);
 if ((i17 | 0) == 11) {
  i31 = i16;
  i32 = i9;
  i33 = i8;
  i34 = i2 + 16 | 0;
 }
 i8 = i31 | 0;
 HEAP32[i8 >> 2] = i33;
 HEAP32[i8 + 4 >> 2] = i32;
 __ZN3WTF6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEaSERKS6_(i31 + 8 | 0, i4) | 0;
 i4 = i2 + 12 | 0;
 i32 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i32;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i34 >> 2] | 0) + i32 << 1 | 0) < (i8 | 0)) {
  i35 = i31;
  i36 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i37 = 8;
  } else {
   i34 = i8 << 1;
   i37 = (i32 * 6 & -1 | 0) < (i34 | 0) ? i8 : i34;
  }
  i34 = __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIyEENS_7HashMapIxS8_SD_NS_10HashTraitsIxEENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i37, i31) | 0;
  i35 = i34;
  i36 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i36 * 24 & -1) | 0;
 i36 = i1;
 HEAP32[i36 >> 2] = i35;
 HEAP32[i36 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore22IDBBackingStoreLevelDB15openIndexCursorExRNS_33IDBBackingStoreTransactionLevelDBExxxPKNS_11IDBKeyRangeENS_9IndexedDB15CursorDirectionE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 var i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i14 = i2 | 0;
 i15 = HEAP32[i5 + 20 >> 2] | 0;
 i5 = i14 + 24 | 0;
 HEAP32[i5 >> 2] = 0;
 i16 = i14 + 28 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i14 + 32 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i14 + 40 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = i14 + 44 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = i14 + 48 | 0;
 HEAP32[i20 >> 2] = 0;
 do {
  if (__ZN7WebCoreL18indexCursorOptionsEPNS_18LevelDBTransactionExxxPKNS_11IDBKeyRangeENS_9IndexedDB15CursorDirectionERNS_28IDBBackingStoreCursorLevelDB13CursorOptionsE(i15, i6, i7, i8, i9, i10, i11, i12, i13, i14) | 0) {
   i21 = __ZN3WTF10fastMallocEj(112) | 0;
   i22 = i21 + 4 | 0;
   HEAP32[i22 >> 2] = 1;
   HEAP32[i21 >> 2] = __ZTVN7WebCore28IDBBackingStoreCursorLevelDBE + 8;
   i23 = i21 + 8 | 0;
   HEAP32[i23 >> 2] = i3;
   HEAP32[i23 + 4 >> 2] = i4;
   HEAP32[i21 + 16 >> 2] = i15;
   i23 = i21 + 24 | 0;
   i24 = i14 | 0;
   i25 = HEAP32[i24 + 4 >> 2] | 0;
   HEAP32[i23 >> 2] = HEAP32[i24 >> 2];
   HEAP32[i23 + 4 >> 2] = i25;
   i25 = i21 + 32 | 0;
   i23 = i14 + 8 | 0;
   i24 = HEAP32[i23 + 4 >> 2] | 0;
   HEAP32[i25 >> 2] = HEAP32[i23 >> 2];
   HEAP32[i25 + 4 >> 2] = i24;
   i24 = i21 + 40 | 0;
   i25 = i14 + 16 | 0;
   i23 = HEAP32[i25 + 4 >> 2] | 0;
   HEAP32[i24 >> 2] = HEAP32[i25 >> 2];
   HEAP32[i24 + 4 >> 2] = i23;
   i23 = HEAP32[i16 >> 2] | 0;
   i24 = HEAP32[i17 >> 2] | 0;
   i25 = i21 + 48 | 0;
   HEAP32[i25 >> 2] = 0;
   i26 = i21 + 52 | 0;
   HEAP32[i26 >> 2] = 0;
   HEAP32[i21 + 56 >> 2] = i24;
   do {
    if ((i23 | 0) != 0) {
     i24 = __ZN3WTF18fastMallocGoodSizeEj(i23) | 0;
     HEAP32[i26 >> 2] = i24;
     i27 = __ZN3WTF10fastMallocEj(i24) | 0;
     HEAP32[i25 >> 2] = i27;
     if ((i27 | 0) == 0) {
      break;
     }
     _memcpy(i27 | 0, HEAP32[i5 >> 2] | 0, HEAP32[i17 >> 2] | 0) | 0;
    }
   } while (0);
   HEAP8[i21 + 60 | 0] = HEAP8[i14 + 36 | 0] & 1;
   i25 = HEAP32[i19 >> 2] | 0;
   i26 = HEAP32[i20 >> 2] | 0;
   i23 = i21 + 64 | 0;
   HEAP32[i23 >> 2] = 0;
   i27 = i21 + 68 | 0;
   HEAP32[i27 >> 2] = 0;
   HEAP32[i21 + 72 >> 2] = i26;
   do {
    if ((i25 | 0) != 0) {
     i26 = __ZN3WTF18fastMallocGoodSizeEj(i25) | 0;
     HEAP32[i27 >> 2] = i26;
     i24 = __ZN3WTF10fastMallocEj(i26) | 0;
     HEAP32[i23 >> 2] = i24;
     if ((i24 | 0) == 0) {
      break;
     }
     _memcpy(i24 | 0, HEAP32[i18 >> 2] | 0, HEAP32[i20 >> 2] | 0) | 0;
    }
   } while (0);
   HEAP8[i21 + 76 | 0] = HEAP8[i14 + 52 | 0] & 1;
   HEAP8[i21 + 77 | 0] = HEAP8[i14 + 53 | 0] & 1;
   HEAP8[i21 + 78 | 0] = HEAP8[i14 + 54 | 0] & 1;
   HEAP32[i21 + 80 >> 2] = 0;
   HEAP32[i21 + 84 >> 2] = 0;
   i23 = __ZN3WTF10fastMallocEj(24) | 0;
   HEAP32[i23 >> 2] = 1;
   HEAP32[i23 + 4 >> 2] = 0;
   HEAP32[i23 + 8 >> 2] = 0;
   HEAP32[i23 + 12 >> 2] = 0;
   i27 = i23 + 16 | 0;
   HEAP32[i27 >> 2] = -1;
   HEAP32[i27 + 4 >> 2] = -1;
   HEAP32[i21 + 88 >> 2] = i23;
   HEAP32[i21 >> 2] = H_BASE + 448;
   _memset(i21 + 92 | 0, 0, 20) | 0;
   i23 = i21;
   i27 = i1 | 0;
   if (__ZN7WebCore28IDBBackingStoreCursorLevelDB9firstSeekEv(i23) | 0) {
    HEAP32[i27 >> 2] = i23;
    break;
   }
   HEAP32[i27 >> 2] = 0;
   if ((i21 | 0) == 0) {
    break;
   }
   i27 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i27 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 32 >> 2] & 31](i23);
    break;
   } else {
    HEAP32[i22 >> 2] = i27;
    break;
   }
  } else {
   HEAP32[i1 >> 2] = 0;
  }
 } while (0);
 if ((HEAP32[i20 >> 2] | 0) != 0) {
  HEAP32[i20 >> 2] = 0;
 }
 i20 = HEAP32[i18 >> 2] | 0;
 if ((i20 | 0) != 0) {
  HEAP32[i18 >> 2] = 0;
  HEAP32[i19 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i20);
 }
 if ((HEAP32[i17 >> 2] | 0) != 0) {
  HEAP32[i17 >> 2] = 0;
 }
 i17 = HEAP32[i5 >> 2] | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i16 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i17);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22IDBBackingStoreLevelDB18openIndexKeyCursorExRNS_33IDBBackingStoreTransactionLevelDBExxxPKNS_11IDBKeyRangeENS_9IndexedDB15CursorDirectionE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 var i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i14 = i2 | 0;
 i15 = HEAP32[i5 + 20 >> 2] | 0;
 i5 = i14 + 24 | 0;
 HEAP32[i5 >> 2] = 0;
 i16 = i14 + 28 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i14 + 32 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i14 + 40 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = i14 + 44 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = i14 + 48 | 0;
 HEAP32[i20 >> 2] = 0;
 do {
  if (__ZN7WebCoreL18indexCursorOptionsEPNS_18LevelDBTransactionExxxPKNS_11IDBKeyRangeENS_9IndexedDB15CursorDirectionERNS_28IDBBackingStoreCursorLevelDB13CursorOptionsE(i15, i6, i7, i8, i9, i10, i11, i12, i13, i14) | 0) {
   i21 = __ZN3WTF10fastMallocEj(96) | 0;
   i22 = i21 + 4 | 0;
   HEAP32[i22 >> 2] = 1;
   HEAP32[i21 >> 2] = __ZTVN7WebCore28IDBBackingStoreCursorLevelDBE + 8;
   i23 = i21 + 8 | 0;
   HEAP32[i23 >> 2] = i3;
   HEAP32[i23 + 4 >> 2] = i4;
   HEAP32[i21 + 16 >> 2] = i15;
   i23 = i21 + 24 | 0;
   i24 = i14 | 0;
   i25 = HEAP32[i24 + 4 >> 2] | 0;
   HEAP32[i23 >> 2] = HEAP32[i24 >> 2];
   HEAP32[i23 + 4 >> 2] = i25;
   i25 = i21 + 32 | 0;
   i23 = i14 + 8 | 0;
   i24 = HEAP32[i23 + 4 >> 2] | 0;
   HEAP32[i25 >> 2] = HEAP32[i23 >> 2];
   HEAP32[i25 + 4 >> 2] = i24;
   i24 = i21 + 40 | 0;
   i25 = i14 + 16 | 0;
   i23 = HEAP32[i25 + 4 >> 2] | 0;
   HEAP32[i24 >> 2] = HEAP32[i25 >> 2];
   HEAP32[i24 + 4 >> 2] = i23;
   i23 = HEAP32[i16 >> 2] | 0;
   i24 = HEAP32[i17 >> 2] | 0;
   i25 = i21 + 48 | 0;
   HEAP32[i25 >> 2] = 0;
   i26 = i21 + 52 | 0;
   HEAP32[i26 >> 2] = 0;
   HEAP32[i21 + 56 >> 2] = i24;
   do {
    if ((i23 | 0) != 0) {
     i24 = __ZN3WTF18fastMallocGoodSizeEj(i23) | 0;
     HEAP32[i26 >> 2] = i24;
     i27 = __ZN3WTF10fastMallocEj(i24) | 0;
     HEAP32[i25 >> 2] = i27;
     if ((i27 | 0) == 0) {
      break;
     }
     _memcpy(i27 | 0, HEAP32[i5 >> 2] | 0, HEAP32[i17 >> 2] | 0) | 0;
    }
   } while (0);
   HEAP8[i21 + 60 | 0] = HEAP8[i14 + 36 | 0] & 1;
   i25 = HEAP32[i19 >> 2] | 0;
   i26 = HEAP32[i20 >> 2] | 0;
   i23 = i21 + 64 | 0;
   HEAP32[i23 >> 2] = 0;
   i27 = i21 + 68 | 0;
   HEAP32[i27 >> 2] = 0;
   HEAP32[i21 + 72 >> 2] = i26;
   do {
    if ((i25 | 0) != 0) {
     i26 = __ZN3WTF18fastMallocGoodSizeEj(i25) | 0;
     HEAP32[i27 >> 2] = i26;
     i24 = __ZN3WTF10fastMallocEj(i26) | 0;
     HEAP32[i23 >> 2] = i24;
     if ((i24 | 0) == 0) {
      break;
     }
     _memcpy(i24 | 0, HEAP32[i18 >> 2] | 0, HEAP32[i20 >> 2] | 0) | 0;
    }
   } while (0);
   HEAP8[i21 + 76 | 0] = HEAP8[i14 + 52 | 0] & 1;
   HEAP8[i21 + 77 | 0] = HEAP8[i14 + 53 | 0] & 1;
   HEAP8[i21 + 78 | 0] = HEAP8[i14 + 54 | 0] & 1;
   HEAP32[i21 + 80 >> 2] = 0;
   HEAP32[i21 + 84 >> 2] = 0;
   i23 = __ZN3WTF10fastMallocEj(24) | 0;
   HEAP32[i23 >> 2] = 1;
   HEAP32[i23 + 4 >> 2] = 0;
   HEAP32[i23 + 8 >> 2] = 0;
   HEAP32[i23 + 12 >> 2] = 0;
   i27 = i23 + 16 | 0;
   HEAP32[i27 >> 2] = -1;
   HEAP32[i27 + 4 >> 2] = -1;
   HEAP32[i21 + 88 >> 2] = i23;
   HEAP32[i21 >> 2] = H_BASE + 384;
   HEAP32[i21 + 92 >> 2] = 0;
   i23 = i21;
   i27 = i1 | 0;
   if (__ZN7WebCore28IDBBackingStoreCursorLevelDB9firstSeekEv(i23) | 0) {
    HEAP32[i27 >> 2] = i23;
    break;
   }
   HEAP32[i27 >> 2] = 0;
   if ((i21 | 0) == 0) {
    break;
   }
   i27 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i27 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 32 >> 2] & 31](i23);
    break;
   } else {
    HEAP32[i22 >> 2] = i27;
    break;
   }
  } else {
   HEAP32[i1 >> 2] = 0;
  }
 } while (0);
 if ((HEAP32[i20 >> 2] | 0) != 0) {
  HEAP32[i20 >> 2] = 0;
 }
 i20 = HEAP32[i18 >> 2] | 0;
 if ((i20 | 0) != 0) {
  HEAP32[i18 >> 2] = 0;
  HEAP32[i19 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i20);
 }
 if ((HEAP32[i17 >> 2] | 0) != 0) {
  HEAP32[i17 >> 2] = 0;
 }
 i17 = HEAP32[i5 >> 2] | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i16 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i17);
 STACKTOP = i2;
 return;
}
function __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i9 = (i2 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i10 | 0, i7 | 0) | 0;
 i10 = i11;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i9) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i10 | 0) == 0) {
     i11 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i11 | 0) == 0) {
      i12 = 37;
      break;
     }
     i13 = i11 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
     i14 = i11;
     i15 = 0;
    } else {
     if (i10 >>> 0 > 2147483637 >>> 0) {
      i12 = 37;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i10 << 1) + 20 | 0);
     i11 = i5 | 0;
     i13 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i13 | 0) == 0) {
      i12 = 37;
      break;
     }
     i11 = i13 + 20 | 0;
     HEAP32[i13 >> 2] = 2;
     HEAP32[i13 + 4 >> 2] = i10;
     HEAP32[i13 + 8 >> 2] = i11;
     HEAP32[i13 + 12 >> 2] = 0;
     HEAP32[i13 + 16 >> 2] = 0;
     i14 = i13;
     i15 = i11;
    }
   } while (0);
   if ((i12 | 0) == 37) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i16 = 0;
    } else {
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i18 = 0;
       }
       while (1) {
        HEAP16[i15 + (i18 << 1) >> 1] = HEAP16[i17 + (i18 << 1) >> 1] | 0;
        i18 = i18 + 1 | 0;
        if (i18 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      } else {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i19 = 0;
       }
       while (1) {
        HEAP16[i15 + (i19 << 1) >> 1] = HEAPU8[i17 + i19 | 0] | 0;
        i19 = i19 + 1 | 0;
        if (i19 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i13 = HEAP32[i8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i16 = 0;
      break;
     }
     i16 = HEAP32[i13 + 4 >> 2] | 0;
    }
   } while (0);
   if ((i7 | 0) != 0) {
    i11 = 0;
    while (1) {
     HEAP16[i15 + (i11 + i16 << 1) >> 1] = HEAPU8[i3 + i11 | 0] | 0;
     i11 = i11 + 1 | 0;
     if (i11 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 >> 2] = i14;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i10 | 0) == 0) {
   i14 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i14 | 0) == 0) {
    i12 = 19;
    break;
   }
   i16 = i14 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i20 = i14;
   i21 = 0;
  } else {
   if (i10 >>> 0 > 4294967275 >>> 0) {
    i12 = 19;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i10 + 20 | 0);
   i14 = i6 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i12 = 19;
    break;
   }
   i14 = i16 + 20 | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i10;
   HEAP32[i16 + 8 >> 2] = i14;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 32;
   i20 = i16;
   i21 = i14;
  }
 } while (0);
 if ((i12 | 0) == 19) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i12 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i22 = 0;
  } else {
   i10 = HEAP32[i12 + 4 >> 2] | 0;
   i6 = HEAP32[i12 + 8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i23 = i12;
   } else {
    i14 = 0;
    while (1) {
     HEAP8[i21 + i14 | 0] = HEAP8[i6 + i14 | 0] | 0;
     i14 = i14 + 1 | 0;
     if (i14 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
    i10 = HEAP32[i8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i22 = 0;
     break;
    } else {
     i23 = i10;
    }
   }
   i22 = HEAP32[i23 + 4 >> 2] | 0;
  }
 } while (0);
 _memcpy(i21 + i22 | 0, i3 | 0, i7) | 0;
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22IDBBackingStoreLevelDB21openObjectStoreCursorExRNS_33IDBBackingStoreTransactionLevelDBExxPKNS_11IDBKeyRangeENS_9IndexedDB15CursorDirectionE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i12 = i2 | 0;
 i13 = HEAP32[i5 + 20 >> 2] | 0;
 i5 = i12 + 24 | 0;
 HEAP32[i5 >> 2] = 0;
 i14 = i12 + 28 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i12 + 32 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i12 + 40 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i12 + 44 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i12 + 48 | 0;
 HEAP32[i18 >> 2] = 0;
 do {
  if (__ZN7WebCoreL24objectStoreCursorOptionsEPNS_18LevelDBTransactionExxPKNS_11IDBKeyRangeENS_9IndexedDB15CursorDirectionERNS_28IDBBackingStoreCursorLevelDB13CursorOptionsE(i13, i6, i7, i8, i9, i10, i11, i12) | 0) {
   i19 = __ZN3WTF10fastMallocEj(96) | 0;
   i20 = i19 + 4 | 0;
   HEAP32[i20 >> 2] = 1;
   HEAP32[i19 >> 2] = __ZTVN7WebCore28IDBBackingStoreCursorLevelDBE + 8;
   i21 = i19 + 8 | 0;
   HEAP32[i21 >> 2] = i3;
   HEAP32[i21 + 4 >> 2] = i4;
   HEAP32[i19 + 16 >> 2] = i13;
   i21 = i19 + 24 | 0;
   i22 = i12 | 0;
   i23 = HEAP32[i22 + 4 >> 2] | 0;
   HEAP32[i21 >> 2] = HEAP32[i22 >> 2];
   HEAP32[i21 + 4 >> 2] = i23;
   i23 = i19 + 32 | 0;
   i21 = i12 + 8 | 0;
   i22 = HEAP32[i21 + 4 >> 2] | 0;
   HEAP32[i23 >> 2] = HEAP32[i21 >> 2];
   HEAP32[i23 + 4 >> 2] = i22;
   i22 = i19 + 40 | 0;
   i23 = i12 + 16 | 0;
   i21 = HEAP32[i23 + 4 >> 2] | 0;
   HEAP32[i22 >> 2] = HEAP32[i23 >> 2];
   HEAP32[i22 + 4 >> 2] = i21;
   i21 = HEAP32[i14 >> 2] | 0;
   i22 = HEAP32[i15 >> 2] | 0;
   i23 = i19 + 48 | 0;
   HEAP32[i23 >> 2] = 0;
   i24 = i19 + 52 | 0;
   HEAP32[i24 >> 2] = 0;
   HEAP32[i19 + 56 >> 2] = i22;
   do {
    if ((i21 | 0) != 0) {
     i22 = __ZN3WTF18fastMallocGoodSizeEj(i21) | 0;
     HEAP32[i24 >> 2] = i22;
     i25 = __ZN3WTF10fastMallocEj(i22) | 0;
     HEAP32[i23 >> 2] = i25;
     if ((i25 | 0) == 0) {
      break;
     }
     _memcpy(i25 | 0, HEAP32[i5 >> 2] | 0, HEAP32[i15 >> 2] | 0) | 0;
    }
   } while (0);
   HEAP8[i19 + 60 | 0] = HEAP8[i12 + 36 | 0] & 1;
   i23 = HEAP32[i17 >> 2] | 0;
   i24 = HEAP32[i18 >> 2] | 0;
   i21 = i19 + 64 | 0;
   HEAP32[i21 >> 2] = 0;
   i25 = i19 + 68 | 0;
   HEAP32[i25 >> 2] = 0;
   HEAP32[i19 + 72 >> 2] = i24;
   do {
    if ((i23 | 0) != 0) {
     i24 = __ZN3WTF18fastMallocGoodSizeEj(i23) | 0;
     HEAP32[i25 >> 2] = i24;
     i22 = __ZN3WTF10fastMallocEj(i24) | 0;
     HEAP32[i21 >> 2] = i22;
     if ((i22 | 0) == 0) {
      break;
     }
     _memcpy(i22 | 0, HEAP32[i16 >> 2] | 0, HEAP32[i18 >> 2] | 0) | 0;
    }
   } while (0);
   HEAP8[i19 + 76 | 0] = HEAP8[i12 + 52 | 0] & 1;
   HEAP8[i19 + 77 | 0] = HEAP8[i12 + 53 | 0] & 1;
   HEAP8[i19 + 78 | 0] = HEAP8[i12 + 54 | 0] & 1;
   HEAP32[i19 + 80 >> 2] = 0;
   HEAP32[i19 + 84 >> 2] = 0;
   i21 = __ZN3WTF10fastMallocEj(24) | 0;
   HEAP32[i21 >> 2] = 1;
   HEAP32[i21 + 4 >> 2] = 0;
   HEAP32[i21 + 8 >> 2] = 0;
   HEAP32[i21 + 12 >> 2] = 0;
   i25 = i21 + 16 | 0;
   HEAP32[i25 >> 2] = -1;
   HEAP32[i25 + 4 >> 2] = -1;
   HEAP32[i19 + 88 >> 2] = i21;
   HEAP32[i19 >> 2] = H_BASE + 288;
   HEAP32[i19 + 92 >> 2] = 0;
   i21 = i19;
   i25 = i1 | 0;
   if (__ZN7WebCore28IDBBackingStoreCursorLevelDB9firstSeekEv(i21) | 0) {
    HEAP32[i25 >> 2] = i21;
    break;
   }
   HEAP32[i25 >> 2] = 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i25 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i25 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 32 >> 2] & 31](i21);
    break;
   } else {
    HEAP32[i20 >> 2] = i25;
    break;
   }
  } else {
   HEAP32[i1 >> 2] = 0;
  }
 } while (0);
 if ((HEAP32[i18 >> 2] | 0) != 0) {
  HEAP32[i18 >> 2] = 0;
 }
 i18 = HEAP32[i16 >> 2] | 0;
 if ((i18 | 0) != 0) {
  HEAP32[i16 >> 2] = 0;
  HEAP32[i17 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i18);
 }
 if ((HEAP32[i15 >> 2] | 0) != 0) {
  HEAP32[i15 >> 2] = 0;
 }
 i15 = HEAP32[i5 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i14 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 i7 = __ZN3WTF10fastMallocEj(i2 * 48 & -1) | 0;
 if ((i2 | 0) > 0) {
  i11 = i6 | 0;
  i12 = i6 + 16 | 0;
  i13 = i6 + 20 | 0;
  i14 = i6 + 32 | 0;
  i15 = i6 + 24 | 0;
  i16 = i6 + 28 | 0;
  i17 = 0;
  while (1) {
   _memset(i12 | 0, 0, 16) | 0;
   i18 = i7 + (i17 * 48 & -1) | 0;
   HEAP32[i18 >> 2] = 0;
   HEAP32[i18 + 4 >> 2] = 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i7 + (i17 * 48 & -1) + 8 >> 2] = 0;
   HEAP32[i7 + (i17 * 48 & -1) + 24 >> 2] = 0;
   HEAP32[i13 >> 2] = 0;
   _memset(i7 + (i17 * 48 & -1) + 28 | 0, 0, 16) | 0;
   HEAP32[i14 >> 2] = 0;
   HEAP32[i7 + (i17 * 48 & -1) + 32 >> 2] = 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i7 + (i17 * 48 & -1) + 36 >> 2] = 0;
   HEAP32[i16 >> 2] = 0;
   HEAP8[i7 + (i17 * 48 & -1) + 44 | 0] = 0;
   HEAP8[i7 + (i17 * 48 & -1) + 45 | 0] = 0;
   __ZN7WebCore16IDBIndexMetadataD1Ev(i6);
   i17 = i17 + 1 | 0;
   if ((i17 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i9 >> 2] = i7;
 if ((i8 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i19 = 0;
  i20 = i10;
  __ZN3WTF8fastFreeEPv(i20);
  STACKTOP = i4;
  return i19 | 0;
 }
 i7 = i5 | 0;
 i9 = 0;
 i2 = 0;
 while (1) {
  i17 = i10 + (i9 * 48 & -1) | 0;
  i6 = i17 | 0;
  i16 = HEAP32[i6 >> 2] | 0;
  i15 = HEAP32[i6 + 4 >> 2] | 0;
  if ((i16 | 0) == (-1 | 0) & (i15 | 0) == (-1 | 0) | (i16 | 0) == 0 & (i15 | 0) == 0) {
   i21 = i2;
  } else {
   __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_(i5, i1, i6);
   i15 = HEAP32[i7 >> 2] | 0;
   __ZN7WebCore16IDBIndexMetadataD1Ev(i15 + 8 | 0);
   i16 = i15 | 0;
   i14 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i16 + 4 >> 2] = i14;
   i14 = i10 + (i9 * 48 & -1) + 8 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   HEAP32[i15 + 8 >> 2] = i16;
   i16 = i15 + 16 | 0;
   i14 = i10 + (i9 * 48 & -1) + 16 | 0;
   i6 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i16 + 4 >> 2] = i6;
   HEAP32[i15 + 24 >> 2] = HEAP32[i10 + (i9 * 48 & -1) + 24 >> 2];
   i6 = i10 + (i9 * 48 & -1) + 28 | 0;
   i16 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i15 + 28 >> 2] = i16;
   i16 = i15 + 32 | 0;
   HEAP32[i16 >> 2] = 0;
   i6 = i15 + 36 | 0;
   HEAP32[i6 >> 2] = 0;
   i14 = i15 + 40 | 0;
   HEAP32[i14 >> 2] = 0;
   i13 = i10 + (i9 * 48 & -1) + 40 | 0;
   HEAP32[i14 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i13 >> 2] = 0;
   i13 = i10 + (i9 * 48 & -1) + 32 | 0;
   i14 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i13 >> 2] = i14;
   i14 = i10 + (i9 * 48 & -1) + 36 | 0;
   i13 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i14 >> 2] = i13;
   HEAP8[i15 + 44 | 0] = HEAP8[i10 + (i9 * 48 & -1) + 44 | 0] & 1;
   HEAP8[i15 + 45 | 0] = HEAP8[i10 + (i9 * 48 & -1) + 45 | 0] & 1;
   i21 = (i17 | 0) == (i3 | 0) ? i15 : i2;
  }
  i15 = i9 + 1 | 0;
  if ((i15 | 0) == (i8 | 0)) {
   break;
  } else {
   i9 = i15;
   i2 = i21;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i8 | 0) > 0) {
  i22 = 0;
 } else {
  i19 = i21;
  i20 = i10;
  __ZN3WTF8fastFreeEPv(i20);
  STACKTOP = i4;
  return i19 | 0;
 }
 while (1) {
  i1 = i10 + (i22 * 48 & -1) | 0;
  if (!((HEAP32[i1 >> 2] | 0) == (-1 | 0) & (HEAP32[i1 + 4 >> 2] | 0) == (-1 | 0))) {
   __ZN7WebCore16IDBIndexMetadataD1Ev(i10 + (i22 * 48 & -1) + 8 | 0);
  }
  i1 = i22 + 1 | 0;
  if ((i1 | 0) < (i8 | 0)) {
   i22 = i1;
  } else {
   i19 = i21;
   break;
  }
 }
 i20 = i10;
 __ZN3WTF8fastFreeEPv(i20);
 STACKTOP = i4;
 return i19 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB24openObjectStoreKeyCursorExRNS_33IDBBackingStoreTransactionLevelDBExxPKNS_11IDBKeyRangeENS_9IndexedDB15CursorDirectionE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i12 = i2 | 0;
 i13 = HEAP32[i5 + 20 >> 2] | 0;
 i5 = i12 + 24 | 0;
 HEAP32[i5 >> 2] = 0;
 i14 = i12 + 28 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i12 + 32 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i12 + 40 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i12 + 44 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i12 + 48 | 0;
 HEAP32[i18 >> 2] = 0;
 do {
  if (__ZN7WebCoreL24objectStoreCursorOptionsEPNS_18LevelDBTransactionExxPKNS_11IDBKeyRangeENS_9IndexedDB15CursorDirectionERNS_28IDBBackingStoreCursorLevelDB13CursorOptionsE(i13, i6, i7, i8, i9, i10, i11, i12) | 0) {
   i19 = __ZN3WTF10fastMallocEj(96) | 0;
   i20 = i19 + 4 | 0;
   HEAP32[i20 >> 2] = 1;
   i21 = i19;
   HEAP32[i21 >> 2] = __ZTVN7WebCore28IDBBackingStoreCursorLevelDBE + 8;
   i22 = i19 + 8 | 0;
   HEAP32[i22 >> 2] = i3;
   HEAP32[i22 + 4 >> 2] = i4;
   HEAP32[i19 + 16 >> 2] = i13;
   i22 = i19 + 24 | 0;
   i23 = i12 | 0;
   i24 = HEAP32[i23 + 4 >> 2] | 0;
   HEAP32[i22 >> 2] = HEAP32[i23 >> 2];
   HEAP32[i22 + 4 >> 2] = i24;
   i24 = i19 + 32 | 0;
   i22 = i12 + 8 | 0;
   i23 = HEAP32[i22 + 4 >> 2] | 0;
   HEAP32[i24 >> 2] = HEAP32[i22 >> 2];
   HEAP32[i24 + 4 >> 2] = i23;
   i23 = i19 + 40 | 0;
   i24 = i12 + 16 | 0;
   i22 = HEAP32[i24 + 4 >> 2] | 0;
   HEAP32[i23 >> 2] = HEAP32[i24 >> 2];
   HEAP32[i23 + 4 >> 2] = i22;
   i22 = HEAP32[i14 >> 2] | 0;
   i23 = HEAP32[i15 >> 2] | 0;
   i24 = i19 + 48 | 0;
   HEAP32[i24 >> 2] = 0;
   i25 = i19 + 52 | 0;
   HEAP32[i25 >> 2] = 0;
   HEAP32[i19 + 56 >> 2] = i23;
   do {
    if ((i22 | 0) != 0) {
     i23 = __ZN3WTF18fastMallocGoodSizeEj(i22) | 0;
     HEAP32[i25 >> 2] = i23;
     i26 = __ZN3WTF10fastMallocEj(i23) | 0;
     HEAP32[i24 >> 2] = i26;
     if ((i26 | 0) == 0) {
      break;
     }
     _memcpy(i26 | 0, HEAP32[i5 >> 2] | 0, HEAP32[i15 >> 2] | 0) | 0;
    }
   } while (0);
   HEAP8[i19 + 60 | 0] = HEAP8[i12 + 36 | 0] & 1;
   i24 = HEAP32[i17 >> 2] | 0;
   i25 = HEAP32[i18 >> 2] | 0;
   i22 = i19 + 64 | 0;
   HEAP32[i22 >> 2] = 0;
   i26 = i19 + 68 | 0;
   HEAP32[i26 >> 2] = 0;
   HEAP32[i19 + 72 >> 2] = i25;
   do {
    if ((i24 | 0) != 0) {
     i25 = __ZN3WTF18fastMallocGoodSizeEj(i24) | 0;
     HEAP32[i26 >> 2] = i25;
     i23 = __ZN3WTF10fastMallocEj(i25) | 0;
     HEAP32[i22 >> 2] = i23;
     if ((i23 | 0) == 0) {
      break;
     }
     _memcpy(i23 | 0, HEAP32[i16 >> 2] | 0, HEAP32[i18 >> 2] | 0) | 0;
    }
   } while (0);
   HEAP8[i19 + 76 | 0] = HEAP8[i12 + 52 | 0] & 1;
   HEAP8[i19 + 77 | 0] = HEAP8[i12 + 53 | 0] & 1;
   HEAP8[i19 + 78 | 0] = HEAP8[i12 + 54 | 0] & 1;
   HEAP32[i19 + 80 >> 2] = 0;
   HEAP32[i19 + 84 >> 2] = 0;
   i22 = __ZN3WTF10fastMallocEj(24) | 0;
   HEAP32[i22 >> 2] = 1;
   HEAP32[i22 + 4 >> 2] = 0;
   HEAP32[i22 + 8 >> 2] = 0;
   HEAP32[i22 + 12 >> 2] = 0;
   i26 = i22 + 16 | 0;
   HEAP32[i26 >> 2] = -1;
   HEAP32[i26 + 4 >> 2] = -1;
   HEAP32[i19 + 88 >> 2] = i22;
   HEAP32[i21 >> 2] = H_BASE + 176;
   i22 = i19;
   i26 = i1 | 0;
   if (__ZN7WebCore28IDBBackingStoreCursorLevelDB9firstSeekEv(i22) | 0) {
    HEAP32[i26 >> 2] = i22;
    break;
   }
   HEAP32[i26 >> 2] = 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i26 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 32 >> 2] & 31](i22);
    break;
   } else {
    HEAP32[i20 >> 2] = i26;
    break;
   }
  } else {
   HEAP32[i1 >> 2] = 0;
  }
 } while (0);
 if ((HEAP32[i18 >> 2] | 0) != 0) {
  HEAP32[i18 >> 2] = 0;
 }
 i18 = HEAP32[i16 >> 2] | 0;
 if ((i18 | 0) != 0) {
  HEAP32[i16 >> 2] = 0;
  HEAP32[i17 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i18);
 }
 if ((HEAP32[i15 >> 2] | 0) != 0) {
  HEAP32[i15 >> 2] = 0;
 }
 i15 = HEAP32[i5 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i14 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i2;
 return;
}
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (i4 >>> 0 > i6 >>> 0) {
  i7 = HEAP32[i1 >> 2] | 0;
  i8 = i7 + (i4 << 2) | 0;
  if ((i4 | 0) != (i6 | 0)) {
   i9 = i7 + (i6 << 2) | 0;
   while (1) {
    i7 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i10 = i7 | 0;
      i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i11 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i10 >> 2] = i11;
       break;
      }
     }
    } while (0);
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i8 | 0)) {
     break;
    }
   }
  }
  HEAP32[i3 >> 2] = i6;
  i12 = i6;
 } else {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  do {
   if (i6 >>> 0 > i9 >>> 0) {
    do {
     if ((i9 | 0) != 0) {
      i7 = i1 | 0;
      if ((i4 | 0) != 0) {
       i11 = HEAP32[i7 >> 2] | 0;
       i10 = i11 + (i4 << 2) | 0;
       i13 = i11;
       while (1) {
        i11 = HEAP32[i13 >> 2] | 0;
        do {
         if ((i11 | 0) != 0) {
          i14 = i11 | 0;
          i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
          if ((i15 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i11);
           break;
          } else {
           HEAP32[i14 >> 2] = i15;
           break;
          }
         }
        } while (0);
        i13 = i13 + 4 | 0;
        if ((i13 | 0) == (i10 | 0)) {
         break;
        }
       }
       HEAP32[i3 >> 2] = 0;
      }
      i10 = HEAP32[i7 >> 2] | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      HEAP32[i7 >> 2] = 0;
      HEAP32[i8 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i10);
     }
    } while (0);
    i10 = HEAP32[i5 >> 2] | 0;
    if ((HEAP32[i8 >> 2] | 0) >>> 0 >= i10 >>> 0) {
     break;
    }
    i13 = i1 | 0;
    i11 = HEAP32[i13 >> 2] | 0;
    if (i10 >>> 0 > 1073741823 >>> 0) {
     _WTFCrash();
     return 0;
    }
    i15 = HEAP32[i3 >> 2] | 0;
    i14 = __ZN3WTF18fastMallocGoodSizeEj(i10 << 2) | 0;
    HEAP32[i8 >> 2] = i14 >>> 2;
    i10 = __ZN3WTF10fastMallocEj(i14) | 0;
    HEAP32[i13 >> 2] = i10;
    i14 = i11;
    _memcpy(i10 | 0, i14 | 0, i15 << 2) | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    if ((HEAP32[i13 >> 2] | 0) == (i11 | 0)) {
     HEAP32[i13 >> 2] = 0;
     HEAP32[i8 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i14);
   }
  } while (0);
  i12 = HEAP32[i3 >> 2] | 0;
 }
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i4 = i2 + (i12 << 2) | 0;
 i9 = i1 | 0;
 if ((i12 | 0) == 0) {
  i16 = i2;
  i17 = 0;
 } else {
  i12 = HEAP32[i9 >> 2] | 0;
  i6 = i2;
  while (1) {
   i2 = HEAP32[i6 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i14 = i2 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   }
   i14 = i12 | 0;
   i13 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i2;
   do {
    if ((i13 | 0) != 0) {
     i2 = i13 | 0;
     i14 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i2 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i13 = i6 + 4 | 0;
   if ((i13 | 0) == (i4 | 0)) {
    break;
   } else {
    i12 = i12 + 4 | 0;
    i6 = i13;
   }
  }
  i16 = HEAP32[i8 >> 2] | 0;
  i17 = HEAP32[i3 >> 2] | 0;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 i6 = i16 + (i8 << 2) | 0;
 if ((i17 | 0) == (i8 | 0)) {
  i18 = i17;
 } else {
  i8 = i16 + (i17 << 2) | 0;
  i16 = (HEAP32[i9 >> 2] | 0) + (i17 << 2) | 0;
  while (1) {
   i17 = HEAP32[i8 >> 2] | 0;
   HEAP32[i16 >> 2] = i17;
   if ((i17 | 0) != 0) {
    i9 = i17 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   i9 = i8 + 4 | 0;
   if ((i9 | 0) == (i6 | 0)) {
    break;
   } else {
    i8 = i9;
    i16 = i16 + 4 | 0;
   }
  }
  i18 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i18;
 return i1 | 0;
}
function __ZN7WebCoreL30findGreatestKeyLessThanOrEqualEPNS_18LevelDBTransactionERKN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEERS5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 __ZN7WebCore18LevelDBTransaction14createIteratorEv(i5, i1);
 i1 = i5 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] | 0;
 i14 = i2 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 HEAP32[i6 >> 2] = i15;
 i16 = i2 + 8 | 0;
 HEAP32[i6 + 4 >> 2] = i15 + (HEAP32[i16 >> 2] | 0);
 FUNCTION_TABLE_vii[i1 & 31](i5, i6);
 i6 = i5;
 i1 = i5;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 31](i5) | 0) {
  i17 = 3;
 } else {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i5);
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 31](i5) | 0) {
   i17 = 3;
  } else {
   i18 = 0;
   i17 = 14;
  }
 }
 L3 : do {
  if ((i17 | 0) == 3) {
   i15 = i5;
   i2 = i8 | 0;
   i19 = i8 + 4 | 0;
   while (1) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 28 >> 2] & 31](i7, i5);
    i20 = HEAP32[i14 >> 2] | 0;
    HEAP32[i2 >> 2] = i20;
    HEAP32[i19 >> 2] = i20 + (HEAP32[i16 >> 2] | 0);
    if ((__ZN7WebCore16IDBLevelDBCoding7compareERKNS_12LevelDBSliceES3_b(i7, i8, 1) | 0) <= 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i5);
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 31](i5) | 0)) {
     i21 = 0;
     i22 = i1;
     break L3;
    }
   }
   i19 = i3 + 4 | 0;
   i2 = i9 | 0;
   i20 = i10 + 4 | 0;
   i23 = i11 | 0;
   i24 = i13 | 0;
   i25 = i13 + 4 | 0;
   i26 = i3 + 8 | 0;
   i27 = i3 | 0;
   while (1) {
    do {
     if ((HEAP32[i19 >> 2] | 0) != 0) {
      if ((HEAP32[i26 >> 2] | 0) != 0) {
       HEAP32[i26 >> 2] = 0;
      }
      i28 = HEAP32[i27 >> 2] | 0;
      if ((i28 | 0) == 0) {
       break;
      }
      HEAP32[i27 >> 2] = 0;
      HEAP32[i19 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i28);
     }
    } while (0);
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 28 >> 2] & 31](i9, i5);
    i28 = HEAP32[i2 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 28 >> 2] & 31](i10, i5);
    i29 = HEAP32[i20 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 28 >> 2] & 31](i11, i5);
    __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i3, i28, i29 - (HEAP32[i23 >> 2] | 0) | 0);
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 31](i5);
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 31](i5) | 0)) {
     i18 = 1;
     i17 = 14;
     break L3;
    }
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 28 >> 2] & 31](i12, i5);
    i29 = HEAP32[i14 >> 2] | 0;
    HEAP32[i24 >> 2] = i29;
    HEAP32[i25 >> 2] = i29 + (HEAP32[i16 >> 2] | 0);
    if ((__ZN7WebCore16IDBLevelDBCoding7compareERKNS_12LevelDBSliceES3_b(i12, i13, 1) | 0) != 0) {
     i21 = 1;
     i22 = i1;
     break;
    }
   }
  }
 } while (0);
 do {
  if ((i17 | 0) == 14) {
   if ((i5 | 0) == 0) {
    i30 = i18;
    STACKTOP = i4;
    return i30 | 0;
   } else {
    i21 = i18;
    i22 = i5;
    break;
   }
  }
 } while (0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 31](i5);
 i30 = i21;
 STACKTOP = i4;
 return i30 | 0;
}
function __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i1 + 8 | 0;
 i5 = i2 + 8 | 0;
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i6 + 4 >> 2] = i7;
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i7 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i1 + 20 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i6 = i7 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = HEAP32[i2 + 28 >> 2] | 0;
 i7 = i2 + 32 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 i8 = i1 + 24 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 28 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = i5;
 do {
  if ((i6 | 0) != 0) {
   if (i6 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i5 = __ZN3WTF18fastMallocGoodSizeEj(i6 << 2) | 0;
   HEAP32[i9 >> 2] = i5 >>> 2;
   i10 = __ZN3WTF10fastMallocEj(i5) | 0;
   i5 = i10;
   HEAP32[i8 >> 2] = i5;
   if ((i10 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i2 + 24 >> 2] | 0;
   i11 = HEAP32[i7 >> 2] | 0;
   i12 = i10 + (i11 << 2) | 0;
   if ((i11 | 0) == 0) {
    break;
   } else {
    i13 = i10;
    i14 = i5;
   }
   while (1) {
    i5 = HEAP32[i13 >> 2] | 0;
    HEAP32[i14 >> 2] = i5;
    if ((i5 | 0) != 0) {
     i10 = i5 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
    }
    i10 = i13 + 4 | 0;
    if ((i10 | 0) == (i12 | 0)) {
     break;
    } else {
     i13 = i10;
     i14 = i14 + 4 | 0;
    }
   }
  }
 } while (0);
 HEAP8[i1 + 36 | 0] = HEAP8[i2 + 36 | 0] & 1;
 i14 = i1 + 40 | 0;
 i13 = i2 + 40 | 0;
 i7 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i14 + 4 >> 2] = i7;
 i7 = i1 + 48 | 0;
 i1 = i7 | 0;
 _memset(i7 | 0, 0, 20) | 0;
 i7 = HEAP32[i2 + 48 >> 2] | 0;
 i14 = HEAP32[i2 + 52 >> 2] | 0;
 i13 = i7 + (i14 * 48 & -1) | 0;
 if ((HEAP32[i2 + 60 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 L22 : do {
  if ((i14 | 0) == 0) {
   i15 = i7;
  } else {
   i2 = i7;
   while (1) {
    i8 = i2 | 0;
    i9 = HEAP32[i8 >> 2] | 0;
    i6 = HEAP32[i8 + 4 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) & (i6 | 0) == (-1 | 0) | (i9 | 0) == 0 & (i6 | 0) == 0)) {
     i15 = i2;
     break L22;
    }
    i2 = i2 + 48 | 0;
    if ((i2 | 0) == (i13 | 0)) {
     break;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i15 | 0) == (i13 | 0)) {
  STACKTOP = i3;
  return;
 } else {
  i16 = i15;
 }
 L30 : while (1) {
  __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i4, i1, i16 | 0, i16);
  i15 = i16 + 48 | 0;
  if ((i15 | 0) == (i13 | 0)) {
   i17 = 24;
   break;
  } else {
   i18 = i15;
  }
  while (1) {
   i15 = i18 | 0;
   i7 = HEAP32[i15 >> 2] | 0;
   i14 = HEAP32[i15 + 4 >> 2] | 0;
   if (!((i7 | 0) == (-1 | 0) & (i14 | 0) == (-1 | 0) | (i7 | 0) == 0 & (i14 | 0) == 0)) {
    break;
   }
   i14 = i18 + 48 | 0;
   if ((i14 | 0) == (i13 | 0)) {
    i17 = 28;
    break L30;
   } else {
    i18 = i14;
   }
  }
  if ((i18 | 0) == (i13 | 0)) {
   i17 = 25;
   break;
  } else {
   i16 = i18;
  }
 }
 if ((i17 | 0) == 24) {
  STACKTOP = i3;
  return;
 } else if ((i17 | 0) == 25) {
  STACKTOP = i3;
  return;
 } else if ((i17 | 0) == 28) {
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 240 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 88 | 0;
 i8 = i4 + 160 | 0;
 i9 = i1 + 4 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i1 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 HEAP32[i9 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 i9 = __ZN3WTF10fastMallocEj(i2 * 80 & -1) | 0;
 if ((i2 | 0) > 0) {
  i13 = i7 | 0;
  i14 = i7 + 16 | 0;
  i15 = i7 + 48 | 0;
  i16 = i6 | 0;
  i17 = i6 + 8 | 0;
  i6 = i8 | 0;
  i18 = i8 + 8 | 0;
  i8 = 0;
  while (1) {
   HEAP32[i13 >> 2] = 0;
   _memset(i14 | 0, 0, 20) | 0;
   _memset(i15 | 0, 0, 20) | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i16 + 4 >> 2] = 0;
   __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i17, i7);
   i19 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i6 + 4 >> 2] = i19;
   __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i18, i17);
   __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i17);
   __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i7);
   i19 = i9 + (i8 * 80 & -1) | 0;
   i20 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i19 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i19 + 4 >> 2] = i20;
   __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i9 + (i8 * 80 & -1) + 8 | 0, i18);
   __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i18);
   i8 = i8 + 1 | 0;
   if ((i8 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i11 >> 2] = i9;
 if ((i10 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i21 = 0;
  i22 = i12;
  __ZN3WTF8fastFreeEPv(i22);
  STACKTOP = i4;
  return i21 | 0;
 }
 i9 = i5 | 0;
 i11 = 0;
 i2 = 0;
 while (1) {
  i8 = i12 + (i11 * 80 & -1) | 0;
  i18 = i8 | 0;
  i6 = HEAP32[i18 >> 2] | 0;
  i7 = HEAP32[i18 + 4 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) & (i7 | 0) == (-1 | 0) | (i6 | 0) == 0 & (i7 | 0) == 0) {
   i23 = i2;
  } else {
   __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_(i5, i1, i18);
   i7 = HEAP32[i9 >> 2] | 0;
   i6 = i7 + 8 | 0;
   __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i6);
   i17 = i7 | 0;
   i16 = HEAP32[i18 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i17 + 4 >> 2] = i16;
   __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i6, i12 + (i11 * 80 & -1) + 8 | 0);
   i23 = (i8 | 0) == (i3 | 0) ? i7 : i2;
  }
  i7 = i11 + 1 | 0;
  if ((i7 | 0) == (i10 | 0)) {
   break;
  } else {
   i11 = i7;
   i2 = i23;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i10 | 0) > 0) {
  i24 = 0;
 } else {
  i21 = i23;
  i22 = i12;
  __ZN3WTF8fastFreeEPv(i22);
  STACKTOP = i4;
  return i21 | 0;
 }
 while (1) {
  i1 = i12 + (i24 * 80 & -1) | 0;
  if (!((HEAP32[i1 >> 2] | 0) == (-1 | 0) & (HEAP32[i1 + 4 >> 2] | 0) == (-1 | 0))) {
   __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i12 + (i24 * 80 & -1) + 8 | 0);
  }
  i1 = i24 + 1 | 0;
  if ((i1 | 0) < (i10 | 0)) {
   i24 = i1;
  } else {
   i21 = i23;
   break;
  }
 }
 i22 = i12;
 __ZN3WTF8fastFreeEPv(i22);
 STACKTOP = i4;
 return i21 | 0;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEaSERKS6_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (i4 >>> 0 > i6 >>> 0) {
  i7 = HEAP32[i1 >> 2] | 0;
  i8 = i7 + (i4 << 2) | 0;
  if ((i4 | 0) != (i6 | 0)) {
   i4 = i7 + (i6 << 2) | 0;
   while (1) {
    i7 = HEAP32[i4 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i9 = i7 | 0;
      i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      if ((i10 | 0) == 0) {
       __ZN7WebCore6IDBKeyD1Ev(i7);
       __ZN3WTF8fastFreeEPv(i7);
       break;
      } else {
       HEAP32[i9 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i4 = i4 + 4 | 0;
    if ((i4 | 0) == (i8 | 0)) {
     break;
    }
   }
  }
  HEAP32[i3 >> 2] = i6;
  i11 = i6;
 } else {
  i8 = i1 + 4 | 0;
  do {
   if (i6 >>> 0 > (HEAP32[i8 >> 2] | 0) >>> 0) {
    __ZN3WTF6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i1, 0);
    i4 = HEAP32[i5 >> 2] | 0;
    if ((HEAP32[i8 >> 2] | 0) >>> 0 >= i4 >>> 0) {
     break;
    }
    i7 = i1 | 0;
    i10 = HEAP32[i7 >> 2] | 0;
    if (i4 >>> 0 > 1073741823 >>> 0) {
     _WTFCrash();
     return 0;
    }
    i9 = HEAP32[i3 >> 2] | 0;
    i12 = __ZN3WTF18fastMallocGoodSizeEj(i4 << 2) | 0;
    HEAP32[i8 >> 2] = i12 >>> 2;
    i4 = __ZN3WTF10fastMallocEj(i12) | 0;
    HEAP32[i7 >> 2] = i4;
    i12 = i10;
    _memcpy(i4 | 0, i12 | 0, i9 << 2) | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    if ((HEAP32[i7 >> 2] | 0) == (i10 | 0)) {
     HEAP32[i7 >> 2] = 0;
     HEAP32[i8 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i12);
   }
  } while (0);
  i11 = HEAP32[i3 >> 2] | 0;
 }
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i6 = i2 + (i11 << 2) | 0;
 i12 = i1 | 0;
 if ((i11 | 0) == 0) {
  i13 = i2;
  i14 = 0;
 } else {
  i11 = HEAP32[i12 >> 2] | 0;
  i7 = i2;
  while (1) {
   i2 = HEAP32[i7 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i10 = i2 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   }
   i10 = i11 | 0;
   i9 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i2;
   do {
    if ((i9 | 0) != 0) {
     i2 = i9 | 0;
     i10 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i9);
      __ZN3WTF8fastFreeEPv(i9);
      break;
     } else {
      HEAP32[i2 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i9 = i7 + 4 | 0;
   if ((i9 | 0) == (i6 | 0)) {
    break;
   } else {
    i11 = i11 + 4 | 0;
    i7 = i9;
   }
  }
  i13 = HEAP32[i8 >> 2] | 0;
  i14 = HEAP32[i3 >> 2] | 0;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 i7 = i13 + (i8 << 2) | 0;
 if ((i14 | 0) == (i8 | 0)) {
  i15 = i14;
 } else {
  i8 = i13 + (i14 << 2) | 0;
  i13 = (HEAP32[i12 >> 2] | 0) + (i14 << 2) | 0;
  while (1) {
   i14 = HEAP32[i8 >> 2] | 0;
   HEAP32[i13 >> 2] = i14;
   if ((i14 | 0) != 0) {
    i12 = i14 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
   i12 = i8 + 4 | 0;
   if ((i12 | 0) == (i7 | 0)) {
    break;
   } else {
    i8 = i12;
    i13 = i13 + 4 | 0;
   }
  }
  i15 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i15;
 return i1 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB29removeBackingStoreTransactionEPNS_33IDBBackingStoreTransactionLevelDBE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = i1 + 24 | 0;
 i4 = i2 + 8 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i5 = HEAP32[i4 + 4 >> 2] | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i6 = HEAP32[i1 + 28 >> 2] | 0;
  i7 = i6 << 4 | 0;
  i8 = i6;
  i9 = 0;
 } else {
  i6 = HEAP32[i1 + 32 >> 2] | 0;
  i10 = _i64Add(i2, i5, ~0, ~i2) | 0;
  i11 = tempRet0;
  i12 = (i10 >>> 22 | i11 << 10) ^ i10;
  i10 = (i11 >>> 22 | 0 << 10) ^ i11;
  i11 = _i64Add(i12, i10, ~(i12 << 13 | 0 >>> 19), ~(i10 << 13 | i12 >>> 19)) | 0;
  i12 = tempRet0;
  i10 = ___muldi3((i11 >>> 8 | i12 << 24) ^ i11, (i12 >>> 8 | 0 << 24) ^ i12, 9, 0) | 0;
  i12 = tempRet0;
  i11 = (i10 >>> 15 | i12 << 17) ^ i10;
  i10 = (i12 >>> 15 | 0 << 17) ^ i12;
  i12 = _i64Add(i11, i10, ~(i11 << 27 | 0 >>> 5), ~(i10 << 27 | i11 >>> 5)) | 0;
  i11 = (i12 >>> 31 | tempRet0 << 1) ^ i12;
  i12 = i6 & i11;
  i10 = i4 + (i12 << 4) | 0;
  i13 = i10 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = HEAP32[i13 + 4 >> 2] | 0;
  L4 : do {
   if ((i14 | 0) == (i2 | 0) & (i15 | 0) == (i5 | 0)) {
    i16 = i10;
   } else {
    i13 = (i11 >>> 23) + ~i11 | 0;
    i17 = i13 << 12 ^ i13;
    i13 = i17 >>> 7 ^ i17;
    i17 = i13 << 2 ^ i13;
    i13 = i17 >>> 20 ^ i17 | 1;
    i17 = 0;
    i18 = i12;
    i19 = i15;
    i20 = i14;
    while (1) {
     if ((i20 | 0) == 0 & (i19 | 0) == 0) {
      i16 = 0;
      break L4;
     }
     i21 = (i17 | 0) == 0 ? i13 : i17;
     i22 = i21 + i18 & i6;
     i23 = i4 + (i22 << 4) | 0;
     i24 = i23 | 0;
     i25 = HEAP32[i24 >> 2] | 0;
     i26 = HEAP32[i24 + 4 >> 2] | 0;
     if ((i25 | 0) == (i2 | 0) & (i26 | 0) == (i5 | 0)) {
      i16 = i23;
      break;
     } else {
      i17 = i21;
      i18 = i22;
      i19 = i26;
      i20 = i25;
     }
    }
   }
  } while (0);
  i5 = HEAP32[i1 + 28 >> 2] | 0;
  i7 = (i16 | 0) == 0 ? i4 + (i5 << 4) | 0 : i16;
  i8 = i5;
  i9 = i4;
 }
 if ((i7 | 0) == (i4 + (i8 << 4) | 0)) {
  return;
 }
 i4 = i3 | 0;
 i3 = i1 + 28 | 0;
 if ((i7 | 0) == (i9 + (i8 << 4) | 0)) {
  return;
 }
 i8 = HEAP32[i7 + 8 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore33IDBBackingStoreTransactionLevelDBD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = -1;
 HEAP32[i8 + 4 >> 2] = -1;
 i8 = i1 + 40 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 i8 = i1 + 36 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i1;
 i8 = HEAP32[i3 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i8 | 0) & (i8 | 0) > 8)) {
  return;
 }
 __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore33IDBBackingStoreTransactionLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i4, (i8 | 0) / 2 & -1, 0) | 0;
 return;
}
function __ZN7WebCore22IDBBackingStoreLevelDB11generateKeyERNS_21IDBTransactionBackendExx(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8 | 0;
 i10 = i3 + 184 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = HEAP32[i10 + 4 >> 2] | 0;
 i10 = HEAP32[i2 + 32 >> 2] | 0;
 i12 = HEAP32[i2 + 24 >> 2] | 0;
 i2 = _i64Add(i3, i11, ~0, ~i3) | 0;
 i13 = tempRet0;
 i14 = (i2 >>> 22 | i13 << 10) ^ i2;
 i2 = (i13 >>> 22 | 0 << 10) ^ i13;
 i13 = _i64Add(i14, i2, ~(i14 << 13 | 0 >>> 19), ~(i2 << 13 | i14 >>> 19)) | 0;
 i14 = tempRet0;
 i2 = ___muldi3((i13 >>> 8 | i14 << 24) ^ i13, (i14 >>> 8 | 0 << 24) ^ i14, 9, 0) | 0;
 i14 = tempRet0;
 i13 = (i2 >>> 15 | i14 << 17) ^ i2;
 i2 = (i14 >>> 15 | 0 << 17) ^ i14;
 i14 = _i64Add(i13, i2, ~(i13 << 27 | 0 >>> 5), ~(i2 << 27 | i13 >>> 5)) | 0;
 i13 = (i14 >>> 31 | tempRet0 << 1) ^ i14;
 L1 : do {
  if ((i12 | 0) == 0) {
   i15 = 0;
  } else {
   i14 = i13 & i10;
   i2 = i12 + (i14 << 4) | 0;
   i16 = i2 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   i18 = HEAP32[i16 + 4 >> 2] | 0;
   if ((i17 | 0) == (i3 | 0) & (i18 | 0) == (i11 | 0)) {
    i19 = i2;
   } else {
    i2 = (i13 >>> 23) + ~i13 | 0;
    i16 = i2 << 12 ^ i2;
    i2 = i16 >>> 7 ^ i16;
    i16 = i2 << 2 ^ i2;
    i2 = i16 >>> 20 ^ i16 | 1;
    i16 = 0;
    i20 = i14;
    i14 = i18;
    i18 = i17;
    while (1) {
     if ((i18 | 0) == 0 & (i14 | 0) == 0) {
      i15 = 0;
      break L1;
     }
     i17 = (i16 | 0) == 0 ? i2 : i16;
     i21 = i17 + i20 & i10;
     i22 = i12 + (i21 << 4) | 0;
     i23 = i22 | 0;
     i24 = HEAP32[i23 >> 2] | 0;
     i25 = HEAP32[i23 + 4 >> 2] | 0;
     if ((i24 | 0) == (i3 | 0) & (i25 | 0) == (i11 | 0)) {
      i19 = i22;
      break;
     } else {
      i16 = i17;
      i20 = i21;
      i14 = i25;
      i18 = i24;
     }
    }
   }
   if ((i19 | 0) == 0) {
    i15 = 0;
    break;
   }
   i15 = HEAP32[i19 + 8 >> 2] | 0;
  }
 } while (0);
 if (!(__ZN7WebCore22IDBBackingStoreLevelDB28getKeyGeneratorCurrentNumberERNS_33IDBBackingStoreTransactionLevelDBExxRx(0, i15, i4, i5, i6, i7, i9) | 0)) {
  i7 = __ZN3WTF10fastMallocEj(40) | 0;
  HEAP32[i7 >> 2] = 1;
  _memset(i7 + 4 | 0, 0, 28) | 0;
  HEAP32[i7 + 32 >> 2] = 16;
  HEAP32[i1 >> 2] = i7;
  STACKTOP = i8;
  return;
 }
 i7 = HEAP32[i9 >> 2] | 0;
 i6 = HEAP32[i9 + 4 >> 2] | 0;
 i9 = 2097152;
 if (i6 >>> 0 > i9 >>> 0 | i6 >>> 0 == i9 >>> 0 & i7 >>> 0 > 0 >>> 0) {
  i9 = __ZN3WTF10fastMallocEj(40) | 0;
  HEAP32[i9 >> 2] = 1;
  _memset(i9 + 4 | 0, 0, 28) | 0;
  HEAP32[i9 + 32 >> 2] = 16;
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i8;
  return;
 } else {
  i9 = __ZN3WTF10fastMallocEj(40) | 0;
  HEAP32[i9 >> 2] = 1;
  HEAP32[i9 + 4 >> 2] = 4;
  _memset(i9 + 8 | 0, 0, 16) | 0;
  HEAPF64[i9 + 24 >> 3] = +(i7 >>> 0) + +(i6 | 0) * +4294967296;
  HEAP32[i9 + 32 >> 2] = 24;
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i8;
  return;
 }
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_EaSERKSF_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 _memset(i5 | 0, 0, 20) | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 i8 = i6 + (i7 * 48 & -1) | 0;
 L1 : do {
  if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
   L3 : do {
    if ((i7 | 0) == 0) {
     i9 = i6;
    } else {
     i10 = i6;
     while (1) {
      i11 = i10 | 0;
      i12 = HEAP32[i11 >> 2] | 0;
      i13 = HEAP32[i11 + 4 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) & (i13 | 0) == (-1 | 0) | (i12 | 0) == 0 & (i13 | 0) == 0)) {
       i9 = i10;
       break L3;
      }
      i10 = i10 + 48 | 0;
      if ((i10 | 0) == (i8 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i8 | 0)) {
    break;
   } else {
    i14 = i9;
   }
   while (1) {
    __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i4, i5, i14 | 0, i14);
    i10 = i14 + 48 | 0;
    if ((i10 | 0) == (i8 | 0)) {
     break L1;
    } else {
     i15 = i10;
    }
    while (1) {
     i10 = i15 | 0;
     i13 = HEAP32[i10 >> 2] | 0;
     i12 = HEAP32[i10 + 4 >> 2] | 0;
     if (!((i13 | 0) == (-1 | 0) & (i12 | 0) == (-1 | 0) | (i13 | 0) == 0 & (i12 | 0) == 0)) {
      break;
     }
     i12 = i15 + 48 | 0;
     if ((i12 | 0) == (i8 | 0)) {
      break L1;
     } else {
      i15 = i12;
     }
    }
    if ((i15 | 0) == (i8 | 0)) {
     break;
    } else {
     i14 = i15;
    }
   }
  }
 } while (0);
 i15 = i1 | 0;
 i14 = HEAP32[i15 >> 2] | 0;
 i8 = i5 | 0;
 HEAP32[i15 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i14;
 i8 = i1 + 4 | 0;
 i15 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 4 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i15;
 i4 = i1 + 8 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 i9 = i5 + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = i8;
 i8 = i1 + 12 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 12 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i9;
 i9 = i1 + 16 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i8 = i5 + 16 | 0;
 HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i4;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return i1 | 0;
 }
 if ((i15 | 0) > 0) {
  i4 = 0;
  while (1) {
   i8 = i14 + (i4 * 48 & -1) | 0;
   if (!((HEAP32[i8 >> 2] | 0) == (-1 | 0) & (HEAP32[i8 + 4 >> 2] | 0) == (-1 | 0))) {
    __ZN7WebCore16IDBIndexMetadataD1Ev(i14 + (i4 * 48 & -1) + 8 | 0);
   }
   i4 = i4 + 1 | 0;
   if ((i4 | 0) >= (i15 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i14);
 STACKTOP = i3;
 return i1 | 0;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore33IDBBackingStoreTransactionLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 HEAP32[i8 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 4) | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i10 = 0;
  i11 = i9;
  __ZN3WTF8fastFreeEPv(i11);
  STACKTOP = i4;
  return i10 | 0;
 }
 i2 = i5 | 0;
 i8 = 0;
 i6 = 0;
 while (1) {
  i12 = i9 + (i8 << 4) | 0;
  i13 = i12 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = HEAP32[i13 + 4 >> 2] | 0;
  if ((i14 | 0) == (-1 | 0) & (i15 | 0) == (-1 | 0) | (i14 | 0) == 0 & (i15 | 0) == 0) {
   i16 = i6;
  } else {
   __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore33IDBBackingStoreTransactionLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E16lookupForWritingINS_22IdentityHashTranslatorISA_EExEENSt3__14pairIPS6_bEERKT0_(i5, i1, i13);
   i15 = HEAP32[i2 >> 2] | 0;
   i14 = i15 + 8 | 0;
   i17 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i18 = i17 | 0;
     i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) == 0) {
      __ZN7WebCore33IDBBackingStoreTransactionLevelDBD1Ev(i17);
      __ZN3WTF8fastFreeEPv(i17);
      break;
     } else {
      HEAP32[i18 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i17 = i15 | 0;
   i19 = HEAP32[i13 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i17 + 4 >> 2] = i19;
   i19 = i9 + (i8 << 4) + 8 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   HEAP32[i14 >> 2] = i17;
   i16 = (i12 | 0) == (i3 | 0) ? i15 : i6;
  }
  i17 = i8 + 1 | 0;
  if ((i17 | 0) == (i7 | 0)) {
   break;
  } else {
   i8 = i17;
   i6 = i16;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i7 | 0) > 0) {
  i20 = 0;
 } else {
  i10 = i16;
  i11 = i9;
  __ZN3WTF8fastFreeEPv(i11);
  STACKTOP = i4;
  return i10 | 0;
 }
 while (1) {
  i1 = i9 + (i20 << 4) | 0;
  do {
   if (!((HEAP32[i1 >> 2] | 0) == (-1 | 0) & (HEAP32[i1 + 4 >> 2] | 0) == (-1 | 0))) {
    i6 = HEAP32[i9 + (i20 << 4) + 8 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    i8 = i6 | 0;
    i3 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    if ((i3 | 0) == 0) {
     __ZN7WebCore33IDBBackingStoreTransactionLevelDBD1Ev(i6);
     __ZN3WTF8fastFreeEPv(i6);
     break;
    } else {
     HEAP32[i8 >> 2] = i3;
     break;
    }
   }
  } while (0);
  i1 = i20 + 1 | 0;
  if ((i1 | 0) < (i7 | 0)) {
   i20 = i1;
  } else {
   i10 = i16;
   break;
  }
 }
 i11 = i9;
 __ZN3WTF8fastFreeEPv(i11);
 STACKTOP = i4;
 return i10 | 0;
}
function __ZNK3WTF7HashMapIxNS_6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEENS_7IntHashIyEENS_10HashTraitsIxEENSA_IS7_EEE3getERKx(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i2, i6, ~0, ~i2) | 0;
 i7 = tempRet0;
 i8 = (i3 >>> 22 | i7 << 10) ^ i3;
 i3 = (i7 >>> 22 | 0 << 10) ^ i7;
 i7 = _i64Add(i8, i3, ~(i8 << 13 | 0 >>> 19), ~(i3 << 13 | i8 >>> 19)) | 0;
 i8 = tempRet0;
 i3 = ___muldi3((i7 >>> 8 | i8 << 24) ^ i7, (i8 >>> 8 | 0 << 24) ^ i8, 9, 0) | 0;
 i8 = tempRet0;
 i7 = (i3 >>> 15 | i8 << 17) ^ i3;
 i3 = (i8 >>> 15 | 0 << 17) ^ i8;
 i8 = _i64Add(i7, i3, ~(i7 << 27 | 0 >>> 5), ~(i3 << 27 | i7 >>> 5)) | 0;
 i7 = (i8 >>> 31 | tempRet0 << 1) ^ i8;
 L1 : do {
  if ((i5 | 0) != 0) {
   i8 = i7 & i4;
   i3 = i5 + (i8 * 24 & -1) | 0;
   i9 = i3 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[i9 + 4 >> 2] | 0;
   if ((i10 | 0) == (i2 | 0) & (i11 | 0) == (i6 | 0)) {
    i12 = i3;
   } else {
    i3 = (i7 >>> 23) + ~i7 | 0;
    i9 = i3 << 12 ^ i3;
    i3 = i9 >>> 7 ^ i9;
    i9 = i3 << 2 ^ i3;
    i3 = i9 >>> 20 ^ i9 | 1;
    i9 = 0;
    i13 = i8;
    i8 = i11;
    i11 = i10;
    while (1) {
     if ((i11 | 0) == 0 & (i8 | 0) == 0) {
      break L1;
     }
     i10 = (i9 | 0) == 0 ? i3 : i9;
     i14 = i10 + i13 & i4;
     i15 = i5 + (i14 * 24 & -1) | 0;
     i16 = i15 | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     i18 = HEAP32[i16 + 4 >> 2] | 0;
     if ((i17 | 0) == (i2 | 0) & (i18 | 0) == (i6 | 0)) {
      i12 = i15;
      break;
     } else {
      i9 = i10;
      i13 = i14;
      i8 = i18;
      i11 = i17;
     }
    }
   }
   if ((i12 | 0) == 0) {
    break;
   }
   i11 = HEAP32[i12 + 12 >> 2] | 0;
   i8 = i12 + 16 | 0;
   i13 = HEAP32[i8 >> 2] | 0;
   i9 = i1 | 0;
   HEAP32[i9 >> 2] = 0;
   i3 = i1 + 4 | 0;
   HEAP32[i3 >> 2] = 0;
   HEAP32[i1 + 8 >> 2] = i13;
   if ((i11 | 0) == 0) {
    return;
   }
   if (i11 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i13 = __ZN3WTF18fastMallocGoodSizeEj(i11 << 2) | 0;
   HEAP32[i3 >> 2] = i13 >>> 2;
   i3 = __ZN3WTF10fastMallocEj(i13) | 0;
   i13 = i3;
   HEAP32[i9 >> 2] = i13;
   if ((i3 | 0) == 0) {
    return;
   }
   i3 = HEAP32[i12 + 8 >> 2] | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i8 = i3 + (i9 << 2) | 0;
   if ((i9 | 0) == 0) {
    return;
   } else {
    i19 = i3;
    i20 = i13;
   }
   while (1) {
    i13 = HEAP32[i19 >> 2] | 0;
    HEAP32[i20 >> 2] = i13;
    if ((i13 | 0) != 0) {
     i3 = i13 | 0;
     HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
    }
    i3 = i19 + 4 | 0;
    if ((i3 | 0) == (i8 | 0)) {
     break;
    } else {
     i19 = i3;
     i20 = i20 + 4 | 0;
    }
   }
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIyEENS_7HashMapIxS8_SD_NS_10HashTraitsIxEENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 i4 = __ZN3WTF10fastMallocEj(i2 * 24 & -1) | 0;
 if ((i2 | 0) > 0) {
  i8 = 0;
  while (1) {
   _memset(i4 + (i8 * 24 & -1) | 0, 0, 20) | 0;
   i8 = i8 + 1 | 0;
   if ((i8 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i6 >> 2] = i4;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i9 = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i9 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i4 = i7 + (i11 * 24 & -1) | 0;
  i6 = i4 | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  i8 = HEAP32[i6 + 4 >> 2] | 0;
  if ((i2 | 0) == (-1 | 0) & (i8 | 0) == (-1 | 0) | (i2 | 0) == 0 & (i8 | 0) == 0) {
   i13 = i12;
  } else {
   i8 = __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIyEENS_7HashMapIxS8_SD_NS_10HashTraitsIxEENSF_IS8_EEE18KeyValuePairTraitsESG_E8reinsertEOS9_(i1, i4) | 0;
   i13 = (i4 | 0) == (i3 | 0) ? i8 : i12;
  }
  i8 = i11 + 1 | 0;
  if ((i8 | 0) == (i5 | 0)) {
   break;
  } else {
   i11 = i8;
   i12 = i13;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i14 = 0;
 } else {
  i9 = i13;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i9 | 0;
 }
 while (1) {
  i1 = i7 + (i14 * 24 & -1) | 0;
  do {
   if (!((HEAP32[i1 >> 2] | 0) == (-1 | 0) & (HEAP32[i1 + 4 >> 2] | 0) == (-1 | 0))) {
    i12 = i7 + (i14 * 24 & -1) + 16 | 0;
    i11 = HEAP32[i12 >> 2] | 0;
    i3 = i7 + (i14 * 24 & -1) + 8 | 0;
    if ((i11 | 0) != 0) {
     i8 = HEAP32[i3 >> 2] | 0;
     i4 = i8 + (i11 << 2) | 0;
     i11 = i8;
     while (1) {
      i8 = HEAP32[i11 >> 2] | 0;
      do {
       if ((i8 | 0) != 0) {
        i2 = i8 | 0;
        i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
        if ((i6 | 0) == 0) {
         __ZN7WebCore6IDBKeyD1Ev(i8);
         __ZN3WTF8fastFreeEPv(i8);
         break;
        } else {
         HEAP32[i2 >> 2] = i6;
         break;
        }
       }
      } while (0);
      i11 = i11 + 4 | 0;
      if ((i11 | 0) == (i4 | 0)) {
       break;
      }
     }
     HEAP32[i12 >> 2] = 0;
    }
    i4 = HEAP32[i3 >> 2] | 0;
    if ((i4 | 0) == 0) {
     break;
    }
    HEAP32[i3 >> 2] = 0;
    HEAP32[i7 + (i14 * 24 & -1) + 12 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
  } while (0);
  i1 = i14 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i14 = i1;
  } else {
   i9 = i13;
   break;
  }
 }
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i9 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB21getPrimaryKeyViaIndexERNS_33IDBBackingStoreTransactionLevelDBExxxRKNS_6IDBKeyERN3WTF6RefPtrIS3_EE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i11 = i1 | 0;
 i12 = i1 + 8 | 0;
 i13 = i1 + 16 | 0;
 i14 = i1 + 24 | 0;
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix17isValidDatabaseIdEx(i3, i4) | 0)) {
  i15 = 0;
  STACKTOP = i1;
  return i15 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix20isValidObjectStoreIdEx(i5, i6) | 0)) {
  i15 = 0;
  STACKTOP = i1;
  return i15 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix14isValidIndexIdEx(i7, i8) | 0)) {
  i15 = 0;
  STACKTOP = i1;
  return i15 | 0;
 }
 HEAP8[i13] = 0;
 i16 = i14 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i14 + 4 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i14 + 8 | 0;
 HEAP32[i18 >> 2] = 0;
 do {
  if (__ZN7WebCore22IDBBackingStoreLevelDB14findKeyInIndexERNS_33IDBBackingStoreTransactionLevelDBExxxRKNS_6IDBKeyERN3WTF6VectorIcLj0ENS6_15CrashOnOverflowEEERb(0, i2, i3, i4, i5, i6, i7, i8, i9, i14, i13) | 0) {
   if ((HEAP8[i13] & 1) == 0) {
    i19 = 1;
    break;
   }
   i20 = HEAP32[i16 >> 2] | 0;
   __ZN7WebCore16IDBLevelDBCoding12decodeIDBKeyEPKcS2_RN3WTF6RefPtrINS_6IDBKeyEEE(i20, i20 + (HEAP32[i18 >> 2] | 0) | 0, i10) | 0;
   i19 = 1;
  } else {
   __ZN3WTF6String6formatEPKcz(i11, H_BASE + 24 | 0, (i20 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i20 >> 2] = H_BASE + 88, i20) | 0);
   STACKTOP = i20;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i12, i11, 0);
   i20 = i12 | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i22 = 0;
   } else {
    i22 = i21 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i22, 12, 22);
   i21 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i20 = i21 | 0;
     i23 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i21);
      break;
     } else {
      HEAP32[i20 >> 2] = i23;
      break;
     }
    }
   } while (0);
   i21 = HEAP32[i11 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i19 = 0;
    break;
   }
   i23 = i21 | 0;
   i20 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    i19 = 0;
    break;
   } else {
    HEAP32[i23 >> 2] = i20;
    i19 = 0;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i18 >> 2] | 0) != 0) {
  HEAP32[i18 >> 2] = 0;
 }
 i18 = HEAP32[i16 >> 2] | 0;
 if ((i18 | 0) == 0) {
  i15 = i19;
  STACKTOP = i1;
  return i15 | 0;
 }
 HEAP32[i16 >> 2] = 0;
 HEAP32[i17 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i18);
 i15 = i19;
 STACKTOP = i1;
 return i15 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB16keyExistsInIndexERNS_33IDBBackingStoreTransactionLevelDBExxxRKNS_6IDBKeyERN3WTF6RefPtrIS3_EERb(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i12 = i1 | 0;
 i13 = i1 + 8 | 0;
 i14 = i1 + 16 | 0;
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix17isValidDatabaseIdEx(i3, i4) | 0)) {
  i15 = 0;
  STACKTOP = i1;
  return i15 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix20isValidObjectStoreIdEx(i5, i6) | 0)) {
  i15 = 0;
  STACKTOP = i1;
  return i15 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix14isValidIndexIdEx(i7, i8) | 0)) {
  i15 = 0;
  STACKTOP = i1;
  return i15 | 0;
 }
 HEAP8[i11] = 0;
 i16 = i14 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i14 + 4 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i14 + 8 | 0;
 HEAP32[i18 >> 2] = 0;
 do {
  if (__ZN7WebCore22IDBBackingStoreLevelDB14findKeyInIndexERNS_33IDBBackingStoreTransactionLevelDBExxxRKNS_6IDBKeyERN3WTF6VectorIcLj0ENS6_15CrashOnOverflowEEERb(0, i2, i3, i4, i5, i6, i7, i8, i9, i14, i11) | 0) {
   if ((HEAP8[i11] & 1) == 0) {
    i19 = 1;
    break;
   }
   i20 = HEAP32[i16 >> 2] | 0;
   __ZN7WebCore16IDBLevelDBCoding12decodeIDBKeyEPKcS2_RN3WTF6RefPtrINS_6IDBKeyEEE(i20, i20 + (HEAP32[i18 >> 2] | 0) | 0, i10) | 0;
   i19 = 1;
  } else {
   __ZN3WTF6String6formatEPKcz(i12, H_BASE + 24 | 0, (i20 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i20 >> 2] = H_BASE + 88, i20) | 0);
   STACKTOP = i20;
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i13, i12, 0);
   i20 = i13 | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i22 = 0;
   } else {
    i22 = i21 + 8 | 0;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(i22, 13, 22);
   i21 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i20 = i21 | 0;
     i23 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i21);
      break;
     } else {
      HEAP32[i20 >> 2] = i23;
      break;
     }
    }
   } while (0);
   i21 = HEAP32[i12 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i19 = 0;
    break;
   }
   i23 = i21 | 0;
   i20 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    i19 = 0;
    break;
   } else {
    HEAP32[i23 >> 2] = i20;
    i19 = 0;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i18 >> 2] | 0) != 0) {
  HEAP32[i18 >> 2] = 0;
 }
 i18 = HEAP32[i16 >> 2] | 0;
 if ((i18 | 0) == 0) {
  i15 = i19;
  STACKTOP = i1;
  return i15 | 0;
 }
 HEAP32[i16 >> 2] = 0;
 HEAP32[i17 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i18);
 i15 = i19;
 STACKTOP = i1;
 return i15 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB21putIndexDataForRecordERNS_33IDBBackingStoreTransactionLevelDBExxxRKNS_6IDBKeyEPKNS_19IDBRecordIdentifierE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i11 = i1 | 0;
 i12 = i1 + 16 | 0;
 i13 = i1 + 32 | 0;
 i14 = i1 + 48 | 0;
 i15 = i1 + 64 | 0;
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix17isValidDatabaseIdEx(i3, i4) | 0)) {
  i16 = 0;
  STACKTOP = i1;
  return i16 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix20isValidObjectStoreIdEx(i5, i6) | 0)) {
  i16 = 0;
  STACKTOP = i1;
  return i16 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix14isValidIndexIdEx(i7, i8) | 0)) {
  i16 = 0;
  STACKTOP = i1;
  return i16 | 0;
 }
 i17 = HEAP32[i2 + 20 >> 2] | 0;
 __ZN7WebCore16IDBLevelDBCoding12encodeIDBKeyERKNS_6IDBKeyE(i12, i9);
 i9 = i10 + 4 | 0;
 __ZN7WebCore16IDBLevelDBCoding12IndexDataKey6encodeExxxRKN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEES7_x(i11, i3, i4, i5, i6, i7, i8, i12, i9, 0, 0);
 i8 = i12 + 8 | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
 }
 i8 = i12 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i12 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i7);
 }
 i7 = i13 | 0;
 HEAP32[i7 >> 2] = 0;
 i12 = i13 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 i8 = i13 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 i6 = i10 + 16 | 0;
 __ZN7WebCore16IDBLevelDBCoding12encodeVarIntEx(i14, HEAP32[i6 >> 2] | 0, HEAP32[i6 + 4 >> 2] | 0);
 i6 = i14 | 0;
 i5 = i14 + 8 | 0;
 __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i13, HEAP32[i6 >> 2] | 0, HEAP32[i5 >> 2] | 0);
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i14 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i13, HEAP32[i9 >> 2] | 0, HEAP32[i10 + 12 >> 2] | 0);
 i10 = i11 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i15 >> 2] = i9;
 i5 = i11 + 8 | 0;
 HEAP32[i15 + 4 >> 2] = i9 + (HEAP32[i5 >> 2] | 0);
 __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i17, i15, i13);
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
 }
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i12 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i8);
 }
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i10 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i16 = 1;
  STACKTOP = i1;
  return i16 | 0;
 }
 HEAP32[i10 >> 2] = 0;
 HEAP32[i11 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 i16 = 1;
 STACKTOP = i1;
 return i16 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_viiiiiiiiiii + 2;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_viiiiiiiiiii + 4;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_viiiiiiiiiiiii + 2;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_viiiiiiiiiiiii + 4;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_viiiiiii + 2;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_ii + 10;
}
function __ZN7WebCore22IDBBackingStoreLevelDB12deleteRecordERNS_33IDBBackingStoreTransactionLevelDBExxRKNS_19IDBRecordIdentifierE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i8 = i1 | 0;
 i9 = i1 + 16 | 0;
 i10 = i1 + 32 | 0;
 i11 = i1 + 40 | 0;
 i12 = i1 + 56 | 0;
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix17isValidDatabaseIdEx(i3, i4) | 0)) {
  i13 = 0;
  STACKTOP = i1;
  return i13 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix20isValidObjectStoreIdEx(i5, i6) | 0)) {
  i13 = 0;
  STACKTOP = i1;
  return i13 | 0;
 }
 i14 = HEAP32[i2 + 20 >> 2] | 0;
 i2 = i7 + 4 | 0;
 i15 = HEAP32[i7 + 8 >> 2] | 0;
 i16 = i7 + 12 | 0;
 i7 = HEAP32[i16 >> 2] | 0;
 i17 = i9 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i9 + 4 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = i9 + 8 | 0;
 HEAP32[i19 >> 2] = i7;
 do {
  if ((i15 | 0) != 0) {
   i7 = __ZN3WTF18fastMallocGoodSizeEj(i15) | 0;
   HEAP32[i18 >> 2] = i7;
   i20 = __ZN3WTF10fastMallocEj(i7) | 0;
   HEAP32[i17 >> 2] = i20;
   if ((i20 | 0) == 0) {
    break;
   }
   _memcpy(i20 | 0, HEAP32[i2 >> 2] | 0, HEAP32[i16 >> 2] | 0) | 0;
  }
 } while (0);
 __ZN7WebCore16IDBLevelDBCoding18ObjectStoreDataKey6encodeExxN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEE(i8, i3, i4, i5, i6, i9);
 if ((HEAP32[i19 >> 2] | 0) != 0) {
  HEAP32[i19 >> 2] = 0;
 }
 i19 = HEAP32[i17 >> 2] | 0;
 if ((i19 | 0) != 0) {
  HEAP32[i17 >> 2] = 0;
  HEAP32[i18 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i19);
 }
 i19 = i8 | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 HEAP32[i10 >> 2] = i18;
 i17 = i8 + 8 | 0;
 HEAP32[i10 + 4 >> 2] = i18 + (HEAP32[i17 >> 2] | 0);
 __ZN7WebCore18LevelDBTransaction6removeERKNS_12LevelDBSliceE(i14, i10);
 __ZN7WebCore16IDBLevelDBCoding14ExistsEntryKey6encodeExxRKN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEE(i11, i3, i4, i5, i6, i2);
 i2 = i11 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i12 >> 2] = i6;
 i5 = i11 + 8 | 0;
 HEAP32[i12 + 4 >> 2] = i6 + (HEAP32[i5 >> 2] | 0);
 __ZN7WebCore18LevelDBTransaction6removeERKNS_12LevelDBSliceE(i14, i12);
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i11 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 if ((HEAP32[i17 >> 2] | 0) != 0) {
  HEAP32[i17 >> 2] = 0;
 }
 i17 = HEAP32[i19 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i13 = 1;
  STACKTOP = i1;
  return i13 | 0;
 }
 HEAP32[i19 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i17);
 i13 = 1;
 STACKTOP = i1;
 return i13 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB18updateKeyGeneratorERNS_21IDBTransactionBackendExxRKNS_6IDBKeyEb(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, d25 = +0;
 i9 = i2 + 184 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 i9 = HEAP32[i1 + 32 >> 2] | 0;
 i11 = HEAP32[i1 + 24 >> 2] | 0;
 i1 = _i64Add(i2, i10, ~0, ~i2) | 0;
 i12 = tempRet0;
 i13 = (i1 >>> 22 | i12 << 10) ^ i1;
 i1 = (i12 >>> 22 | 0 << 10) ^ i12;
 i12 = _i64Add(i13, i1, ~(i13 << 13 | 0 >>> 19), ~(i1 << 13 | i13 >>> 19)) | 0;
 i13 = tempRet0;
 i1 = ___muldi3((i12 >>> 8 | i13 << 24) ^ i12, (i13 >>> 8 | 0 << 24) ^ i13, 9, 0) | 0;
 i13 = tempRet0;
 i12 = (i1 >>> 15 | i13 << 17) ^ i1;
 i1 = (i13 >>> 15 | 0 << 17) ^ i13;
 i13 = _i64Add(i12, i1, ~(i12 << 27 | 0 >>> 5), ~(i1 << 27 | i12 >>> 5)) | 0;
 i12 = (i13 >>> 31 | tempRet0 << 1) ^ i13;
 L1 : do {
  if ((i11 | 0) == 0) {
   i14 = 0;
  } else {
   i13 = i12 & i9;
   i1 = i11 + (i13 << 4) | 0;
   i15 = i1 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   i17 = HEAP32[i15 + 4 >> 2] | 0;
   if ((i16 | 0) == (i2 | 0) & (i17 | 0) == (i10 | 0)) {
    i18 = i1;
   } else {
    i1 = (i12 >>> 23) + ~i12 | 0;
    i15 = i1 << 12 ^ i1;
    i1 = i15 >>> 7 ^ i15;
    i15 = i1 << 2 ^ i1;
    i1 = i15 >>> 20 ^ i15 | 1;
    i15 = 0;
    i19 = i13;
    i13 = i17;
    i17 = i16;
    while (1) {
     if ((i17 | 0) == 0 & (i13 | 0) == 0) {
      i14 = 0;
      break L1;
     }
     i16 = (i15 | 0) == 0 ? i1 : i15;
     i20 = i16 + i19 & i9;
     i21 = i11 + (i20 << 4) | 0;
     i22 = i21 | 0;
     i23 = HEAP32[i22 >> 2] | 0;
     i24 = HEAP32[i22 + 4 >> 2] | 0;
     if ((i23 | 0) == (i2 | 0) & (i24 | 0) == (i10 | 0)) {
      i18 = i21;
      break;
     } else {
      i15 = i16;
      i19 = i20;
      i13 = i24;
      i17 = i23;
     }
    }
   }
   if ((i18 | 0) == 0) {
    i14 = 0;
    break;
   }
   i14 = HEAP32[i18 + 8 >> 2] | 0;
  }
 } while (0);
 d25 = +Math_floor(+HEAPF64[i7 + 24 >> 3]);
 i7 = _i64Add(~~+d25 >>> 0, (tempDouble = +d25, +Math_abs(tempDouble) >= +1 ? tempDouble > +0 ? (Math_min(+Math_floor(tempDouble / +4294967296), +4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / +4294967296) >>> 0 : 0), 1, 0) | 0;
 return __ZN7WebCore22IDBBackingStoreLevelDB36maybeUpdateKeyGeneratorCurrentNumberERNS_33IDBBackingStoreTransactionLevelDBExxxb(0, i14, i3, i4, i5, i6, i7, tempRet0, i8) | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB11deleteIndexERNS_33IDBBackingStoreTransactionLevelDBExxx(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i9 = i1 | 0;
 i10 = i1 + 16 | 0;
 i11 = i1 + 32 | 0;
 i12 = i1 + 48 | 0;
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix17isValidDatabaseIdEx(i3, i4) | 0)) {
  i13 = 0;
  STACKTOP = i1;
  return i13 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix20isValidObjectStoreIdEx(i5, i6) | 0)) {
  i13 = 0;
  STACKTOP = i1;
  return i13 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix14isValidIndexIdEx(i7, i8) | 0)) {
  i13 = 0;
  STACKTOP = i1;
  return i13 | 0;
 }
 i14 = HEAP32[i2 + 20 >> 2] | 0;
 __ZN7WebCore16IDBLevelDBCoding16IndexMetaDataKey6encodeExxxh(i9, i3, i4, i5, i6, i7, i8, 0);
 __ZN7WebCore16IDBLevelDBCoding16IndexMetaDataKey12encodeMaxKeyExxx(i10, i3, i4, i5, i6, i7, i8);
 __ZN7WebCoreL11deleteRangeEPNS_18LevelDBTransactionERKN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEES7_(i14, i9, i10);
 __ZN7WebCore16IDBLevelDBCoding12IndexDataKey12encodeMinKeyExxx(i11, i3, i4, i5, i6, i7, i8);
 __ZN7WebCore16IDBLevelDBCoding12IndexDataKey12encodeMaxKeyExxx(i12, i3, i4, i5, i6, i7, i8);
 __ZN7WebCoreL11deleteRangeEPNS_18LevelDBTransactionERKN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEES7_(i14, i11, i12);
 i14 = i12 + 8 | 0;
 if ((HEAP32[i14 >> 2] | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
 }
 i14 = i12 | 0;
 i8 = HEAP32[i14 >> 2] | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
  HEAP32[i12 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = i11 + 8 | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
 }
 i8 = i11 | 0;
 i12 = HEAP32[i8 >> 2] | 0;
 if ((i12 | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i11 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i12);
 }
 i12 = i10 + 8 | 0;
 if ((HEAP32[i12 >> 2] | 0) != 0) {
  HEAP32[i12 >> 2] = 0;
 }
 i12 = i10 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 if ((i11 | 0) != 0) {
  HEAP32[i12 >> 2] = 0;
  HEAP32[i10 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i11);
 }
 i11 = i9 + 8 | 0;
 if ((HEAP32[i11 >> 2] | 0) != 0) {
  HEAP32[i11 >> 2] = 0;
 }
 i11 = i9 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i13 = 1;
  STACKTOP = i1;
  return i13 | 0;
 }
 HEAP32[i11 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i10);
 i13 = 1;
 STACKTOP = i1;
 return i13 | 0;
}
function __ZNK3WTF6String17containsOnlyASCIIEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  i4 = HEAP32[i2 + 8 >> 2] | 0;
  i5 = i4 + (i1 << 1) | 0;
  if ((i4 & 3 | 0) == 0) {
   i6 = 0;
   i7 = i4;
  } else {
   i8 = 0;
   i9 = i4;
   while (1) {
    i4 = HEAPU16[i9 >> 1] | 0 | i8;
    i10 = i9 + 2 | 0;
    if ((i10 & 3 | 0) == 0 | (i10 | 0) == (i5 | 0)) {
     i6 = i4;
     i7 = i10;
     break;
    } else {
     i8 = i4;
     i9 = i10;
    }
   }
  }
  i9 = i5 & -4;
  i8 = i9;
  if (i7 >>> 0 < i8 >>> 0) {
   i10 = (i9 + ~i7 | 0) >>> 2 << 1;
   i9 = i6;
   i4 = i7;
   while (1) {
    i9 = HEAP32[i4 >> 2] | i9;
    i4 = i4 + 4 | 0;
    if (i4 >>> 0 >= i8 >>> 0) {
     break;
    }
   }
   i11 = i9;
   i12 = i7 + (i10 + 2 << 1) | 0;
  } else {
   i11 = i6;
   i12 = i7;
  }
  if ((i12 | 0) == (i5 | 0)) {
   i13 = i11;
  } else {
   i7 = i11;
   i11 = i12;
   while (1) {
    i12 = HEAPU16[i11 >> 1] | 0 | i7;
    i6 = i11 + 2 | 0;
    if ((i6 | 0) == (i5 | 0)) {
     i13 = i12;
     break;
    } else {
     i7 = i12;
     i11 = i6;
    }
   }
  }
  i3 = (i13 & -8323200 | 0) == 0;
  return i3 | 0;
 } else {
  i13 = HEAP32[i2 + 8 >> 2] | 0;
  i2 = i13 + i1 | 0;
  if ((i13 & 3 | 0) == 0) {
   i14 = 0;
   i15 = i13;
  } else {
   i1 = 0;
   i11 = i13;
   while (1) {
    i13 = HEAPU8[i11] | 0 | i1;
    i7 = i11 + 1 | 0;
    if ((i7 & 3 | 0) == 0 | (i7 | 0) == (i2 | 0)) {
     i14 = i13;
     i15 = i7;
     break;
    } else {
     i1 = i13;
     i11 = i7;
    }
   }
  }
  i11 = i2 & -4;
  if (i15 >>> 0 < i11 >>> 0) {
   i1 = i11 + ~i15 + 4 | 0;
   i7 = i14;
   i13 = i15;
   while (1) {
    i7 = HEAP32[i13 >> 2] | i7;
    i13 = i13 + 4 | 0;
    if (i13 >>> 0 >= i11 >>> 0) {
     break;
    }
   }
   i16 = i7;
   i17 = i15 + (i1 & -4) | 0;
  } else {
   i16 = i14;
   i17 = i15;
  }
  if ((i17 | 0) == (i2 | 0)) {
   i18 = i16;
  } else {
   i15 = i16;
   i16 = i17;
   while (1) {
    i17 = HEAPU8[i16] | 0 | i15;
    i14 = i16 + 1 | 0;
    if ((i14 | 0) == (i2 | 0)) {
     i18 = i17;
     break;
    } else {
     i15 = i17;
     i16 = i14;
    }
   }
  }
  i3 = (i18 & -2139062144 | 0) == 0;
  return i3 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIyEENS_7HashMapIxS8_SD_NS_10HashTraitsIxEENSF_IS8_EEE18KeyValuePairTraitsESG_E16lookupForWritingINS_22IdentityHashTranslatorISD_EExEENSt3__14pairIPS9_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i2, i6, ~0, ~i2) | 0;
 i7 = tempRet0;
 i8 = (i3 >>> 22 | i7 << 10) ^ i3;
 i3 = (i7 >>> 22 | 0 << 10) ^ i7;
 i7 = _i64Add(i8, i3, ~(i8 << 13 | 0 >>> 19), ~(i3 << 13 | i8 >>> 19)) | 0;
 i8 = tempRet0;
 i3 = ___muldi3((i7 >>> 8 | i8 << 24) ^ i7, (i8 >>> 8 | 0 << 24) ^ i8, 9, 0) | 0;
 i8 = tempRet0;
 i7 = (i3 >>> 15 | i8 << 17) ^ i3;
 i3 = (i8 >>> 15 | 0 << 17) ^ i8;
 i8 = _i64Add(i7, i3, ~(i7 << 27 | 0 >>> 5), ~(i3 << 27 | i7 >>> 5)) | 0;
 i7 = (i8 >>> 31 | tempRet0 << 1) ^ i8;
 i8 = i7 & i5;
 i3 = i4 + (i8 * 24 & -1) | 0;
 i9 = i3 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 L1 : do {
  if ((i10 | 0) == 0 & (i11 | 0) == 0) {
   i12 = 0;
   i13 = i3;
  } else {
   i9 = (i7 >>> 23) + ~i7 | 0;
   i14 = i9 << 12 ^ i9;
   i9 = i14 >>> 7 ^ i14;
   i14 = i9 << 2 ^ i9;
   i9 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i8;
   i17 = i3;
   i18 = i11;
   i19 = i10;
   while (1) {
    if ((i19 | 0) == (i2 | 0) & (i18 | 0) == (i6 | 0)) {
     break;
    }
    i20 = (i19 | 0) == (-1 | 0) & (i18 | 0) == (-1 | 0) ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i9 : i15;
    i22 = i21 + i16 & i5;
    i23 = i4 + (i22 * 24 & -1) | 0;
    i24 = i23 | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    i26 = HEAP32[i24 + 4 >> 2] | 0;
    if ((i25 | 0) == 0 & (i26 | 0) == 0) {
     i12 = i20;
     i13 = i23;
     break L1;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i26;
     i19 = i25;
    }
   }
   HEAP32[i1 >> 2] = i17;
   HEAP8[i1 + 4 | 0] = 1;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = (i12 | 0) != 0 ? i12 : i13;
 HEAP8[i1 + 4 | 0] = 0;
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore33IDBBackingStoreTransactionLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E16lookupForWritingINS_22IdentityHashTranslatorISA_EExEENSt3__14pairIPS6_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i2, i6, ~0, ~i2) | 0;
 i7 = tempRet0;
 i8 = (i3 >>> 22 | i7 << 10) ^ i3;
 i3 = (i7 >>> 22 | 0 << 10) ^ i7;
 i7 = _i64Add(i8, i3, ~(i8 << 13 | 0 >>> 19), ~(i3 << 13 | i8 >>> 19)) | 0;
 i8 = tempRet0;
 i3 = ___muldi3((i7 >>> 8 | i8 << 24) ^ i7, (i8 >>> 8 | 0 << 24) ^ i8, 9, 0) | 0;
 i8 = tempRet0;
 i7 = (i3 >>> 15 | i8 << 17) ^ i3;
 i3 = (i8 >>> 15 | 0 << 17) ^ i8;
 i8 = _i64Add(i7, i3, ~(i7 << 27 | 0 >>> 5), ~(i3 << 27 | i7 >>> 5)) | 0;
 i7 = (i8 >>> 31 | tempRet0 << 1) ^ i8;
 i8 = i7 & i5;
 i3 = i4 + (i8 << 4) | 0;
 i9 = i3 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 L1 : do {
  if ((i10 | 0) == 0 & (i11 | 0) == 0) {
   i12 = 0;
   i13 = i3;
  } else {
   i9 = (i7 >>> 23) + ~i7 | 0;
   i14 = i9 << 12 ^ i9;
   i9 = i14 >>> 7 ^ i14;
   i14 = i9 << 2 ^ i9;
   i9 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i8;
   i17 = i3;
   i18 = i11;
   i19 = i10;
   while (1) {
    if ((i19 | 0) == (i2 | 0) & (i18 | 0) == (i6 | 0)) {
     break;
    }
    i20 = (i19 | 0) == (-1 | 0) & (i18 | 0) == (-1 | 0) ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i9 : i15;
    i22 = i21 + i16 & i5;
    i23 = i4 + (i22 << 4) | 0;
    i24 = i23 | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    i26 = HEAP32[i24 + 4 >> 2] | 0;
    if ((i25 | 0) == 0 & (i26 | 0) == 0) {
     i12 = i20;
     i13 = i23;
     break L1;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i26;
     i19 = i25;
    }
   }
   HEAP32[i1 >> 2] = i17;
   HEAP8[i1 + 4 | 0] = 1;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = (i12 | 0) != 0 ? i12 : i13;
 HEAP8[i1 + 4 | 0] = 0;
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i2, i6, ~0, ~i2) | 0;
 i7 = tempRet0;
 i8 = (i3 >>> 22 | i7 << 10) ^ i3;
 i3 = (i7 >>> 22 | 0 << 10) ^ i7;
 i7 = _i64Add(i8, i3, ~(i8 << 13 | 0 >>> 19), ~(i3 << 13 | i8 >>> 19)) | 0;
 i8 = tempRet0;
 i3 = ___muldi3((i7 >>> 8 | i8 << 24) ^ i7, (i8 >>> 8 | 0 << 24) ^ i8, 9, 0) | 0;
 i8 = tempRet0;
 i7 = (i3 >>> 15 | i8 << 17) ^ i3;
 i3 = (i8 >>> 15 | 0 << 17) ^ i8;
 i8 = _i64Add(i7, i3, ~(i7 << 27 | 0 >>> 5), ~(i3 << 27 | i7 >>> 5)) | 0;
 i7 = (i8 >>> 31 | tempRet0 << 1) ^ i8;
 i8 = i7 & i5;
 i3 = i4 + (i8 * 80 & -1) | 0;
 i9 = i3 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 L1 : do {
  if ((i10 | 0) == 0 & (i11 | 0) == 0) {
   i12 = 0;
   i13 = i3;
  } else {
   i9 = (i7 >>> 23) + ~i7 | 0;
   i14 = i9 << 12 ^ i9;
   i9 = i14 >>> 7 ^ i14;
   i14 = i9 << 2 ^ i9;
   i9 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i8;
   i17 = i3;
   i18 = i11;
   i19 = i10;
   while (1) {
    if ((i19 | 0) == (i2 | 0) & (i18 | 0) == (i6 | 0)) {
     break;
    }
    i20 = (i19 | 0) == (-1 | 0) & (i18 | 0) == (-1 | 0) ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i9 : i15;
    i22 = i21 + i16 & i5;
    i23 = i4 + (i22 * 80 & -1) | 0;
    i24 = i23 | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    i26 = HEAP32[i24 + 4 >> 2] | 0;
    if ((i25 | 0) == 0 & (i26 | 0) == 0) {
     i12 = i20;
     i13 = i23;
     break L1;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i26;
     i19 = i25;
    }
   }
   HEAP32[i1 >> 2] = i17;
   HEAP8[i1 + 4 | 0] = 1;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = (i12 | 0) != 0 ? i12 : i13;
 HEAP8[i1 + 4 | 0] = 0;
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i2, i6, ~0, ~i2) | 0;
 i7 = tempRet0;
 i8 = (i3 >>> 22 | i7 << 10) ^ i3;
 i3 = (i7 >>> 22 | 0 << 10) ^ i7;
 i7 = _i64Add(i8, i3, ~(i8 << 13 | 0 >>> 19), ~(i3 << 13 | i8 >>> 19)) | 0;
 i8 = tempRet0;
 i3 = ___muldi3((i7 >>> 8 | i8 << 24) ^ i7, (i8 >>> 8 | 0 << 24) ^ i8, 9, 0) | 0;
 i8 = tempRet0;
 i7 = (i3 >>> 15 | i8 << 17) ^ i3;
 i3 = (i8 >>> 15 | 0 << 17) ^ i8;
 i8 = _i64Add(i7, i3, ~(i7 << 27 | 0 >>> 5), ~(i3 << 27 | i7 >>> 5)) | 0;
 i7 = (i8 >>> 31 | tempRet0 << 1) ^ i8;
 i8 = i7 & i5;
 i3 = i4 + (i8 * 48 & -1) | 0;
 i9 = i3 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 L1 : do {
  if ((i10 | 0) == 0 & (i11 | 0) == 0) {
   i12 = 0;
   i13 = i3;
  } else {
   i9 = (i7 >>> 23) + ~i7 | 0;
   i14 = i9 << 12 ^ i9;
   i9 = i14 >>> 7 ^ i14;
   i14 = i9 << 2 ^ i9;
   i9 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i8;
   i17 = i3;
   i18 = i11;
   i19 = i10;
   while (1) {
    if ((i19 | 0) == (i2 | 0) & (i18 | 0) == (i6 | 0)) {
     break;
    }
    i20 = (i19 | 0) == (-1 | 0) & (i18 | 0) == (-1 | 0) ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i9 : i15;
    i22 = i21 + i16 & i5;
    i23 = i4 + (i22 * 48 & -1) | 0;
    i24 = i23 | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    i26 = HEAP32[i24 + 4 >> 2] | 0;
    if ((i25 | 0) == 0 & (i26 | 0) == 0) {
     i12 = i20;
     i13 = i23;
     break L1;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i26;
     i19 = i25;
    }
   }
   HEAP32[i1 >> 2] = i17;
   HEAP8[i1 + 4 | 0] = 1;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = (i12 | 0) != 0 ? i12 : i13;
 HEAP8[i1 + 4 | 0] = 0;
 return;
}
function __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE11appendRangeIPKcEEvT_S6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 if ((i2 | 0) == (i3 | 0)) {
  return;
 }
 i4 = i1 + 8 | 0;
 i5 = i1 + 4 | 0;
 i6 = i1 | 0;
 i1 = i2;
 i2 = HEAP32[i4 >> 2] | 0;
 while (1) {
  if ((i2 | 0) == (HEAP32[i5 >> 2] | 0)) {
   i7 = i2 + 1 | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   do {
    if (i8 >>> 0 > i1 >>> 0) {
     i9 = 7;
    } else {
     if ((i8 + i2 | 0) >>> 0 <= i1 >>> 0) {
      i9 = 7;
      break;
     }
     i10 = i1 - i8 | 0;
     i11 = i7 + (i2 >>> 2) | 0;
     i12 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
     i11 = i12 >>> 0 > i7 >>> 0 ? i12 : i7;
     do {
      if (i2 >>> 0 < i11 >>> 0) {
       i12 = __ZN3WTF18fastMallocGoodSizeEj(i11) | 0;
       HEAP32[i5 >> 2] = i12;
       i13 = __ZN3WTF10fastMallocEj(i12) | 0;
       HEAP32[i6 >> 2] = i13;
       _memcpy(i13 | 0, i8 | 0, i2) | 0;
       if ((i8 | 0) == 0) {
        break;
       }
       if ((HEAP32[i6 >> 2] | 0) == (i8 | 0)) {
        HEAP32[i6 >> 2] = 0;
        HEAP32[i5 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i8);
      }
     } while (0);
     i11 = HEAP32[i6 >> 2] | 0;
     i14 = i11 + i10 | 0;
     i15 = i11;
    }
   } while (0);
   if ((i9 | 0) == 7) {
    i9 = 0;
    i11 = i7 + (i2 >>> 2) | 0;
    i13 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
    i11 = i13 >>> 0 > i7 >>> 0 ? i13 : i7;
    do {
     if (i2 >>> 0 < i11 >>> 0) {
      i13 = __ZN3WTF18fastMallocGoodSizeEj(i11) | 0;
      HEAP32[i5 >> 2] = i13;
      i12 = __ZN3WTF10fastMallocEj(i13) | 0;
      HEAP32[i6 >> 2] = i12;
      _memcpy(i12 | 0, i8 | 0, i2) | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      if ((HEAP32[i6 >> 2] | 0) == (i8 | 0)) {
       HEAP32[i6 >> 2] = 0;
       HEAP32[i5 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i8);
     }
    } while (0);
    i14 = i1;
    i15 = HEAP32[i6 >> 2] | 0;
   }
   HEAP8[i15 + (HEAP32[i4 >> 2] | 0) | 0] = HEAP8[i14] | 0;
  } else {
   HEAP8[(HEAP32[i6 >> 2] | 0) + i2 | 0] = HEAP8[i1] | 0;
  }
  i2 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
  HEAP32[i4 >> 2] = i2;
  i1 = i1 + 1 | 0;
  if ((i1 | 0) == (i3 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore22IDBBackingStoreLevelDB36maybeUpdateKeyGeneratorCurrentNumberERNS_33IDBBackingStoreTransactionLevelDBExxxb(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i10 = i1 | 0;
 i11 = i1 + 16 | 0;
 i12 = i1 + 24 | 0;
 i13 = i1 + 40 | 0;
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix17isValidDatabaseIdEx(i3, i4) | 0)) {
  i14 = 0;
  STACKTOP = i1;
  return i14 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix20isValidObjectStoreIdEx(i5, i6) | 0)) {
  i14 = 0;
  STACKTOP = i1;
  return i14 | 0;
 }
 i15 = HEAP32[i2 + 20 >> 2] | 0;
 do {
  if (i9) {
   if (!(__ZN7WebCore22IDBBackingStoreLevelDB28getKeyGeneratorCurrentNumberERNS_33IDBBackingStoreTransactionLevelDBExxRx(0, i2, i3, i4, i5, i6, i11) | 0)) {
    i14 = 0;
    STACKTOP = i1;
    return i14 | 0;
   }
   i16 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i16 | 0) < (i8 | 0) | (i16 | 0) == (i8 | 0) & (HEAP32[i11 >> 2] | 0) >>> 0 < i7 >>> 0) {
    break;
   } else {
    i14 = 1;
   }
   STACKTOP = i1;
   return i14 | 0;
  }
 } while (0);
 __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey6encodeExxh(i12, i3, i4, i5, i6, 7);
 i6 = i12 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i13 >> 2] = i5;
 i4 = i12 + 8 | 0;
 HEAP32[i13 + 4 >> 2] = i5 + (HEAP32[i4 >> 2] | 0);
 __ZN7WebCore16IDBLevelDBCoding9encodeIntEx(i10, i7, i8);
 __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i15, i13, i10);
 i13 = i10 + 8 | 0;
 if ((HEAP32[i13 >> 2] | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
 }
 i13 = i10 | 0;
 i15 = HEAP32[i13 >> 2] | 0;
 if ((i15 | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
  HEAP32[i10 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i15);
 }
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i14 = 1;
  STACKTOP = i1;
  return i14 | 0;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i12 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 i14 = 1;
 STACKTOP = i1;
 return i14 | 0;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIyEENS_7HashMapIxS8_SD_NS_10HashTraitsIxEENSF_IS8_EEE18KeyValuePairTraitsESG_E8reinsertEOS9_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIyEENS_7HashMapIxS8_SD_NS_10HashTraitsIxEENSF_IS8_EEE18KeyValuePairTraitsESG_E16lookupForWritingINS_22IdentityHashTranslatorISD_EExEENSt3__14pairIPS9_bEERKT0_(i4, i1, i5);
 i1 = HEAP32[i4 >> 2] | 0;
 i4 = i1 + 16 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 i7 = i1 + 8 | 0;
 if ((i6 | 0) != 0) {
  i8 = HEAP32[i7 >> 2] | 0;
  i9 = i8 + (i6 << 2) | 0;
  i6 = i8;
  while (1) {
   i8 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i10 = i8 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i8);
      __ZN3WTF8fastFreeEPv(i8);
      break;
     } else {
      HEAP32[i10 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i6 = i6 + 4 | 0;
   if ((i6 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i12 = i1 + 12 | 0;
 } else {
  HEAP32[i7 >> 2] = 0;
  i6 = i1 + 12 | 0;
  HEAP32[i6 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i9);
  i12 = i6;
 }
 i6 = i1 | 0;
 i9 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i6 + 4 >> 2] = i9;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i4 >> 2] = 0;
 i9 = i2 + 16 | 0;
 HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = 0;
 i9 = i2 + 8 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = i4;
 i4 = i2 + 12 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i2;
 STACKTOP = i3;
 return i1 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDBD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 HEAP32[i1 >> 2] = H_BASE + 240;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 }
 i3 = i1 + 16 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i1 + 28 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i6 = 0;
   while (1) {
    i7 = i4 + (i6 << 4) | 0;
    do {
     if (!((HEAP32[i7 >> 2] | 0) == (-1 | 0) & (HEAP32[i7 + 4 >> 2] | 0) == (-1 | 0))) {
      i8 = HEAP32[i4 + (i6 << 4) + 8 >> 2] | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      i9 = i8 | 0;
      i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      if ((i10 | 0) == 0) {
       __ZN7WebCore33IDBBackingStoreTransactionLevelDBD1Ev(i8);
       __ZN3WTF8fastFreeEPv(i8);
       break;
      } else {
       HEAP32[i9 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i5 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 20 | 0;
 HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] = 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 }
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i1 = i5 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  return;
 } else {
  HEAP32[i1 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore22IDBBackingStoreLevelDBD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 HEAP32[i1 >> 2] = H_BASE + 240;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 }
 i3 = i1 + 16 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i1 + 28 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i6 = 0;
   while (1) {
    i7 = i4 + (i6 << 4) | 0;
    do {
     if (!((HEAP32[i7 >> 2] | 0) == (-1 | 0) & (HEAP32[i7 + 4 >> 2] | 0) == (-1 | 0))) {
      i8 = HEAP32[i4 + (i6 << 4) + 8 >> 2] | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      i9 = i8 | 0;
      i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      if ((i10 | 0) == 0) {
       __ZN7WebCore33IDBBackingStoreTransactionLevelDBD1Ev(i8);
       __ZN3WTF8fastFreeEPv(i8);
       break;
      } else {
       HEAP32[i9 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i5 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 20 | 0;
 HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] = 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 }
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i1 = i5 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  return;
 } else {
  HEAP32[i1 >> 2] = i2;
  return;
 }
}
function __ZN7WebCoreL11deleteRangeEPNS_18LevelDBTransactionERKN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEES7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 __ZN7WebCore18LevelDBTransaction14createIteratorEv(i5, i1);
 i10 = i5 | 0;
 i5 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] | 0;
 i11 = HEAP32[i2 >> 2] | 0;
 HEAP32[i6 >> 2] = i11;
 HEAP32[i6 + 4 >> 2] = i11 + (HEAP32[i2 + 8 >> 2] | 0);
 FUNCTION_TABLE_vii[i10 & 31](i5, i6);
 i6 = i5;
 L1 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 31](i5) | 0) {
   i10 = i5;
   i2 = i8 | 0;
   i11 = i3 | 0;
   i12 = i8 + 4 | 0;
   i13 = i3 + 8 | 0;
   i14 = i5;
   while (1) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 28 >> 2] & 31](i7, i5);
    i15 = HEAP32[i11 >> 2] | 0;
    HEAP32[i2 >> 2] = i15;
    HEAP32[i12 >> 2] = i15 + (HEAP32[i13 >> 2] | 0);
    if ((__ZN7WebCore16IDBLevelDBCoding7compareERKNS_12LevelDBSliceES3_b(i7, i8, 0) | 0) >= 0) {
     i16 = i14;
     break L1;
    }
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 28 >> 2] & 31](i9, i5);
    __ZN7WebCore18LevelDBTransaction6removeERKNS_12LevelDBSliceE(i1, i9);
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 20 >> 2] & 31](i5);
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 31](i5) | 0)) {
     i17 = 5;
     break;
    }
   }
  } else {
   i17 = 5;
  }
 } while (0);
 do {
  if ((i17 | 0) == 5) {
   if ((i5 | 0) == 0) {
    STACKTOP = i4;
    return;
   } else {
    i16 = i5;
    break;
   }
  }
 } while (0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL19getMaxObjectStoreIdINS_15LevelDBDatabaseEEEbPT_xRx(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 __ZN7WebCore16IDBLevelDBCoding19DatabaseMetaDataKey6encodeExNS1_12MetaDataTypeE(i9, i2, i3, 3);
 HEAP32[i4 >> 2] = -1;
 HEAP32[i4 + 4 >> 2] = -1;
 HEAP8[i7] = 0;
 i3 = i9 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i8 >> 2] = i2;
 i10 = i9 + 8 | 0;
 HEAP32[i8 + 4 >> 2] = i2 + (HEAP32[i10 >> 2] | 0);
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = 0;
 i11 = i6 + 4 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i6 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 do {
  if (FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 1](i1, i8, i6, i7, 0) | 0) {
   if ((HEAP8[i7] & 1) == 0) {
    i13 = 1;
    break;
   }
   i14 = HEAP32[i2 >> 2] | 0;
   i15 = __ZN7WebCore16IDBLevelDBCoding9decodeIntEPKcS2_(i14, i14 + (HEAP32[i12 >> 2] | 0) | 0) | 0;
   HEAP32[i4 >> 2] = i15;
   HEAP32[i4 + 4 >> 2] = tempRet0;
   i13 = 1;
  } else {
   i13 = 0;
  }
 } while (0);
 if ((HEAP32[i12 >> 2] | 0) != 0) {
  HEAP32[i12 >> 2] = 0;
 }
 i12 = HEAP32[i2 >> 2] | 0;
 if ((i12 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i11 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i12);
 }
 do {
  if (i13) {
   if ((HEAP8[i7] & 1) != 0) {
    i16 = 1;
    break;
   }
   HEAP32[i4 >> 2] = 0;
   HEAP32[i4 + 4 >> 2] = 0;
   i16 = 1;
  } else {
   i16 = 0;
  }
 } while (0);
 if ((HEAP32[i10 >> 2] | 0) != 0) {
  HEAP32[i10 >> 2] = 0;
 }
 i10 = HEAP32[i3 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return i16 | 0;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i10);
 STACKTOP = i5;
 return i16 | 0;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  return;
 }
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 if (i5 >>> 0 > i2 >>> 0) {
  i1 = HEAP32[i6 >> 2] | 0;
  i7 = i1 + (i5 << 2) | 0;
  if ((i5 | 0) != (i2 | 0)) {
   i8 = i1 + (i2 << 2) | 0;
   while (1) {
    i1 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i1 | 0) != 0) {
      i9 = i1 | 0;
      i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      if ((i10 | 0) == 0) {
       __ZN7WebCore6IDBKeyD1Ev(i1);
       __ZN3WTF8fastFreeEPv(i1);
       break;
      } else {
       HEAP32[i9 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i8 = i8 + 4 | 0;
    if ((i8 | 0) == (i7 | 0)) {
     break;
    }
   }
  }
  HEAP32[i4 >> 2] = i2;
  i11 = i2;
 } else {
  i11 = i5;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 >>> 0 > 1073741823 >>> 0;
   if ((HEAP32[i3 >> 2] | 0) == 0) {
    if (i4) {
     _WTFCrash();
    }
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i7 >>> 2;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    i7 = i8;
    HEAP32[i6 >> 2] = i7;
    if ((i7 | 0) == (i5 | 0)) {
     break;
    }
    _memcpy(i8 | 0, i5 | 0, i11 << 2) | 0;
    break;
   } else {
    if (i4) {
     _WTFCrash();
    }
    i4 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i4 >>> 2;
    HEAP32[i6 >> 2] = __ZN3WTF11fastReallocEPvj(HEAP32[i6 >> 2] | 0, i4) | 0;
    return;
   }
  }
 } while (0);
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i6 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN3WTF17HashMapTranslatorINS_7HashMapIxN7WebCore16IDBIndexMetadataENS_7IntHashIyEENS_10HashTraitsIxEENS6_IS3_EEE18KeyValuePairTraitsES5_E9translateINS_12KeyValuePairIxS3_EERKxS3_EEvRT_OT0_OT1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i5 + 4 >> 2] = i4;
 i4 = i3 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i1 + 8 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i3 + 8 | 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i5 + 4 >> 2] = i4;
 HEAP32[i1 + 24 >> 2] = HEAP32[i3 + 16 >> 2];
 i4 = i3 + 20 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i1 + 28 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 40 | 0;
 i4 = i3 + 32 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i5;
 i5 = i1 + 32 | 0;
 i4 = i3 + 24 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i2;
 i2 = i1 + 36 | 0;
 i4 = i3 + 28 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i5;
 HEAP8[i1 + 44 | 0] = HEAP8[i3 + 36 | 0] & 1;
 HEAP8[i1 + 45 | 0] = HEAP8[i3 + 37 | 0] & 1;
 return;
}
function __ZN7WebCore22IDBBackingStoreLevelDB32establishBackingStoreTransactionEx(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 HEAP32[i5 >> 2] = i2;
 HEAP32[i5 + 4 >> 2] = i3;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN7WebCore33IDBBackingStoreTransactionLevelDBC1ExPNS_22IDBBackingStoreLevelDBE(i8, i2, i3, i1);
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = i8;
 __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore33IDBBackingStoreTransactionLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKxNS_10PassRefPtrIS4_EEEENS_18HashTableAddResultINS_17HashTableIteratorIxS6_S8_SA_SG_SD_EEEEOT0_OT1_(i7, i1 + 24 | 0, i5, i6);
 if ((HEAP8[i7 + 8 | 0] & 1) == 0) {
  i6 = HEAP32[i7 >> 2] | 0;
  i7 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  i5 = i6 + 8 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i7;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i7 = i6 | 0;
  i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) == 0) {
   __ZN7WebCore33IDBBackingStoreTransactionLevelDBD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i7 >> 2] = i5;
   STACKTOP = i4;
   return;
  }
 } else {
  i5 = HEAP32[i3 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i5 | 0;
  i7 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore33IDBBackingStoreTransactionLevelDBD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i3 >> 2] = i7;
   STACKTOP = i4;
   return;
  }
 }
}
function __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 52 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = i2 + (i4 * 48 & -1) | 0;
    if (!((HEAP32[i5 >> 2] | 0) == (-1 | 0) & (HEAP32[i5 + 4 >> 2] | 0) == (-1 | 0))) {
     __ZN7WebCore16IDBIndexMetadataD1Ev(i2 + (i4 * 48 & -1) + 8 | 0);
    }
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 24 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 28 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  return;
 }
}
function __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEEaSERKS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   HEAP32[i3 >> 2] = i6;
  } else {
   i7 = i1 + 4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if (i6 >>> 0 <= i8 >>> 0) {
    break;
   }
   do {
    if ((i8 | 0) == 0) {
     i9 = 0;
    } else {
     if ((i4 | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
     }
     i10 = i1 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     if ((i11 | 0) == 0) {
      i9 = i8;
      break;
     }
     HEAP32[i10 >> 2] = 0;
     HEAP32[i7 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i11);
     i9 = HEAP32[i7 >> 2] | 0;
    }
   } while (0);
   i8 = HEAP32[i5 >> 2] | 0;
   if (i9 >>> 0 >= i8 >>> 0) {
    break;
   }
   i11 = i1 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = __ZN3WTF18fastMallocGoodSizeEj(i8) | 0;
   HEAP32[i7 >> 2] = i13;
   i8 = __ZN3WTF10fastMallocEj(i13) | 0;
   HEAP32[i11 >> 2] = i8;
   _memcpy(i8 | 0, i10 | 0, i12) | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   if ((HEAP32[i11 >> 2] | 0) == (i10 | 0)) {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i10);
  }
 } while (0);
 i9 = i2 | 0;
 i2 = i1 | 0;
 _memmove(HEAP32[i2 >> 2] | 0, HEAP32[i9 >> 2] | 0, HEAP32[i3 >> 2] | 0) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 _memcpy((HEAP32[i2 >> 2] | 0) + i4 | 0, (HEAP32[i9 >> 2] | 0) + i4 | 0, (HEAP32[i5 >> 2] | 0) - i4 | 0) | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 return i1 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB16clearObjectStoreERNS_33IDBBackingStoreTransactionLevelDBExx(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i7 = i1 | 0;
 i8 = i1 + 16 | 0;
 i9 = i1 + 40 | 0;
 i10 = i1 + 56 | 0;
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix17isValidDatabaseIdEx(i3, i4) | 0)) {
  i11 = 0;
  STACKTOP = i1;
  return i11 | 0;
 }
 if (!(__ZN7WebCore16IDBLevelDBCoding9KeyPrefix20isValidObjectStoreIdEx(i5, i6) | 0)) {
  i11 = 0;
  STACKTOP = i1;
  return i11 | 0;
 }
 i12 = HEAP32[i2 + 20 >> 2] | 0;
 __ZN7WebCore16IDBLevelDBCoding9KeyPrefixC1Exx(i8, i3, i4, i5, i6);
 __ZNK7WebCore16IDBLevelDBCoding9KeyPrefix6encodeEv(i7, i8);
 i8 = _i64Add(i5, i6, 1, 0) | 0;
 __ZN7WebCore16IDBLevelDBCoding9KeyPrefixC1Exx(i10, i3, i4, i8, tempRet0);
 __ZNK7WebCore16IDBLevelDBCoding9KeyPrefix6encodeEv(i9, i10);
 __ZN7WebCoreL11deleteRangeEPNS_18LevelDBTransactionERKN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEES7_(i12, i7, i9);
 i12 = i9 + 8 | 0;
 if ((HEAP32[i12 >> 2] | 0) != 0) {
  HEAP32[i12 >> 2] = 0;
 }
 i12 = i9 | 0;
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i12 >> 2] = 0;
  HEAP32[i9 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = i7 + 8 | 0;
 if ((HEAP32[i10 >> 2] | 0) != 0) {
  HEAP32[i10 >> 2] = 0;
 }
 i10 = i7 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i11 = 1;
  STACKTOP = i1;
  return i11 | 0;
 }
 HEAP32[i10 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i9);
 i11 = 1;
 STACKTOP = i1;
 return i11 | 0;
}
function __ZN7WebCoreL31checkObjectStoreAndMetaDataTypeEPKNS_15LevelDBIteratorERKN3WTF6VectorIcLj0ENS3_15CrashOnOverflowEEExx(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 32 | 0;
 i12 = i7 + 40 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 31](i1) | 0)) {
  i13 = 0;
  STACKTOP = i7;
  return i13 | 0;
 }
 i14 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 28 >> 2] & 31](i8, i1);
 i15 = HEAP32[i2 >> 2] | 0;
 HEAP32[i9 >> 2] = i15;
 HEAP32[i9 + 4 >> 2] = i15 + (HEAP32[i2 + 8 >> 2] | 0);
 if ((__ZN7WebCore16IDBLevelDBCoding7compareERKNS_12LevelDBSliceES3_b(i8, i9, 0) | 0) > -1) {
  i13 = 0;
  STACKTOP = i7;
  return i13 | 0;
 }
 __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKeyC1Ev(i10);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 28 >> 2] & 31](i11, i1);
 i9 = HEAP32[i11 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 28 >> 2] & 31](i12, i1);
 __ZN7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey6decodeEPKcS3_PS1_(i9, HEAP32[i12 + 4 >> 2] | 0, i10) | 0;
 i12 = __ZNK7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey13objectStoreIdEv(i10) | 0;
 if (!((i12 | 0) == (i3 | 0) & (tempRet0 | 0) == (i4 | 0))) {
  i13 = 0;
  STACKTOP = i7;
  return i13 | 0;
 }
 i13 = ((__ZNK7WebCore16IDBLevelDBCoding22ObjectStoreMetaDataKey12metaDataTypeEv(i10) | 0) & 255 | 0) == (i5 | 0) & 0 == (i6 | 0);
 STACKTOP = i7;
 return i13 | 0;
}
function __ZN7WebCore22IDBObjectStoreMetadataaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = i2 + 8 | 0;
 i4 = HEAP32[i5 + 4 >> 2] | 0;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = i4;
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i4 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 20 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_(i1 + 24 | 0, i2 + 24 | 0) | 0;
 HEAP8[i1 + 36 | 0] = HEAP8[i2 + 36 | 0] & 1;
 i5 = i2 + 40 | 0;
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 i4 = i1 + 40 | 0;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = i3;
 __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_EaSERKSF_(i1 + 48 | 0, i2 + 48 | 0) | 0;
 return i1 | 0;
}
function __ZN7WebCore28IDBBackingStoreCursorLevelDBD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = __ZTVN7WebCore28IDBBackingStoreCursorLevelDBE + 8;
 i2 = HEAP32[i1 + 88 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 + 12 | 0;
   if ((HEAP32[i5 >> 2] | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
   }
   i5 = i3 + 4 | 0;
   i4 = HEAP32[i5 >> 2] | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
    HEAP32[i3 + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 84 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
 }
 i2 = i1 + 72 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 64 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 68 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 56 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 48 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCoreL24checkIndexAndMetaDataKeyEPKNS_15LevelDBIteratorERKN3WTF6VectorIcLj0ENS3_15CrashOnOverflowEEExh(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 40 | 0;
 i11 = i6 + 48 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 31](i1) | 0)) {
  i12 = 0;
  STACKTOP = i6;
  return i12 | 0;
 }
 i13 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 28 >> 2] & 31](i7, i1);
 i14 = HEAP32[i2 >> 2] | 0;
 HEAP32[i8 >> 2] = i14;
 HEAP32[i8 + 4 >> 2] = i14 + (HEAP32[i2 + 8 >> 2] | 0);
 if ((__ZN7WebCore16IDBLevelDBCoding7compareERKNS_12LevelDBSliceES3_b(i7, i8, 0) | 0) > -1) {
  i12 = 0;
  STACKTOP = i6;
  return i12 | 0;
 }
 __ZN7WebCore16IDBLevelDBCoding16IndexMetaDataKeyC1Ev(i9);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 28 >> 2] & 31](i10, i1);
 i8 = HEAP32[i10 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 28 >> 2] & 31](i11, i1);
 __ZN7WebCore16IDBLevelDBCoding16IndexMetaDataKey6decodeEPKcS3_PS1_(i8, HEAP32[i11 + 4 >> 2] | 0, i9) | 0;
 i11 = __ZNK7WebCore16IDBLevelDBCoding16IndexMetaDataKey7indexIdEv(i9) | 0;
 if (!((i11 | 0) == (i3 | 0) & (tempRet0 | 0) == (i4 | 0))) {
  i12 = 0;
  STACKTOP = i6;
  return i12 | 0;
 }
 i12 = (HEAP8[i9 + 16 | 0] | 0) == i5 << 24 >> 24;
 STACKTOP = i6;
 return i12 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB12openInMemoryERKN3WTF6StringEPNS_14LevelDBFactoryE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = __Znwj(4) | 0;
 HEAP32[i7 >> 2] = H_BASE + 512;
 i8 = i7;
 __ZN7WebCore15LevelDBDatabase12openInMemoryEPKNS_17LevelDBComparatorE(i4, i8);
 i9 = i4 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 120 | 0, 9, 11);
  HEAP32[i1 >> 2] = 0;
  if ((i7 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i8);
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 120 | 0, 0, 11);
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i4;
 i4 = i6 | 0;
 HEAP32[i4 >> 2] = i8;
 __ZN7WebCore22IDBBackingStoreLevelDB6createERKN3WTF6StringENS1_10PassOwnPtrINS_15LevelDBDatabaseEEENS5_INS_17LevelDBComparatorEEE(i1, i2, i5, i6);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 }
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22IDBBackingStoreLevelDB24updateIDBDatabaseVersionERNS_33IDBBackingStoreTransactionLevelDBExy(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i1 | 0;
 i8 = i1 + 16 | 0;
 i9 = i1 + 24 | 0;
 i10 = (i5 | 0) == (-1 | 0) & (i6 | 0) == 2147483647;
 i11 = HEAP32[i2 + 20 >> 2] | 0;
 __ZN7WebCore16IDBLevelDBCoding19DatabaseMetaDataKey6encodeExNS1_12MetaDataTypeE(i9, i3, i4, 4);
 i4 = i9 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i8 >> 2] = i3;
 i2 = i9 + 8 | 0;
 HEAP32[i8 + 4 >> 2] = i3 + (HEAP32[i2 >> 2] | 0);
 __ZN7WebCore16IDBLevelDBCoding12encodeVarIntEx(i7, i10 ? 0 : i5, i10 ? 0 : i6);
 __ZN7WebCore18LevelDBTransaction3putERKNS_12LevelDBSliceERKN3WTF6VectorIcLj0ENS4_15CrashOnOverflowEEE(i11, i8, i7);
 i8 = i7 + 8 | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
 }
 i8 = i7 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 if ((i11 | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i7 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i11);
 }
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i1;
  return 1;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 STACKTOP = i1;
 return 1;
}
function __ZN7WebCore16IDBIndexMetadataaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = i2 + 8 | 0;
 i4 = HEAP32[i5 + 4 >> 2] | 0;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = i4;
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i4 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 20 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_(i1 + 24 | 0, i2 + 24 | 0) | 0;
 HEAP8[i1 + 36 | 0] = HEAP8[i2 + 36 | 0] & 1;
 HEAP8[i1 + 37 | 0] = HEAP8[i2 + 37 | 0] & 1;
 return i1 | 0;
}
function __ZN7WebCore16IDBIndexMetadataD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 24 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 28 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  return;
 }
}
function __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 + i3 | 0;
 i7 = i1 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if (i6 >>> 0 > i8 >>> 0) {
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i10 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   i9 = i10 >>> 0 > i6 >>> 0 ? i10 : i6;
   if (i8 >>> 0 >= i9 >>> 0) {
    break;
   }
   i10 = i1 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = __ZN3WTF18fastMallocGoodSizeEj(i9) | 0;
   HEAP32[i7 >> 2] = i12;
   i9 = __ZN3WTF10fastMallocEj(i12) | 0;
   HEAP32[i10 >> 2] = i9;
   _memcpy(i9 | 0, i11 | 0, i5) | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   if ((HEAP32[i10 >> 2] | 0) == (i11 | 0)) {
    HEAP32[i10 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i11);
  }
 } while (0);
 i7 = HEAP32[i4 >> 2] | 0;
 if (i6 >>> 0 < i7 >>> 0) {
  _WTFCrash();
 }
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i4 >> 2] = i6;
  return;
 } else {
  i13 = 0;
 }
 while (1) {
  HEAP8[i5 + (i13 + i7) | 0] = HEAP8[i2 + i13 | 0] | 0;
  i13 = i13 + 1 | 0;
  if (i13 >>> 0 >= i3 >>> 0) {
   break;
  }
 }
 HEAP32[i4 >> 2] = i6;
 return;
}
function __ZN7WebCore15IndexCursorImpl5cloneEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = __ZN3WTF10fastMallocEj(112) | 0;
 i4 = i3;
 __ZN7WebCore28IDBBackingStoreCursorLevelDBC2EPKS0_(i4, i2);
 HEAP32[i3 >> 2] = H_BASE + 448;
 i5 = HEAP32[i2 + 92 >> 2] | 0;
 HEAP32[i3 + 92 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = HEAP32[i2 + 96 >> 2] | 0;
 HEAP32[i3 + 96 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i2 + 104 >> 2] | 0;
 i6 = i2 + 108 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i3 + 100 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i3 + 104 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i3 + 108 >> 2] = i7;
 if ((i5 | 0) == 0) {
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i4;
  return;
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5) | 0;
 HEAP32[i9 >> 2] = i7;
 i9 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) == 0) {
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i4;
  return;
 }
 _memcpy(i9 | 0, HEAP32[i2 + 100 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
 i10 = i1 | 0;
 HEAP32[i10 >> 2] = i4;
 return;
}
function __ZN7WebCore15IndexCursorImplD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 448;
 i2 = i1 + 108 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 100 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 104 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 96 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 92 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i5 = i1;
  __ZN7WebCore28IDBBackingStoreCursorLevelDBD2Ev(i5);
  return;
 }
 i4 = i3 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore6IDBKeyD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
  i5 = i1;
  __ZN7WebCore28IDBBackingStoreCursorLevelDBD2Ev(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i2;
  i5 = i1;
  __ZN7WebCore28IDBBackingStoreCursorLevelDBD2Ev(i5);
  return;
 }
}
function __ZN3WTF10RefCountedIN7WebCore21IDBIndexWriterLevelDBEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 + 56 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = i1 + 48 | 0;
 i5 = i4;
 if ((i2 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i2 << 2) | 0;
  i2 = i6;
  while (1) {
   i6 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i8 = i6 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i6);
      __ZN3WTF8fastFreeEPv(i6);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i2 = i2 + 4 | 0;
   if ((i2 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 52 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN7WebCore16IDBIndexMetadataD1Ev(i1 + 8 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore21IDBIndexWriterLevelDBEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore22IDBBackingStoreLevelDBC2ERKN3WTF6StringENS1_10PassOwnPtrINS_15LevelDBDatabaseEEENS5_INS_17LevelDBComparatorEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 240;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i3;
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i4;
 i4 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i4 >> 2] = 1;
 HEAP32[i4 + 4 >> 2] = i1;
 HEAP32[i1 + 20 >> 2] = i4;
 _memset(i1 + 24 | 0, 0, 20) | 0;
 return;
}
function __ZN7WebCore22IDBBackingStoreLevelDBC1ERKN3WTF6StringENS1_10PassOwnPtrINS_15LevelDBDatabaseEEENS5_INS_17LevelDBComparatorEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 240;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i3;
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i4;
 i4 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i4 >> 2] = 1;
 HEAP32[i4 + 4 >> 2] = i1;
 HEAP32[i1 + 20 >> 2] = i4;
 _memset(i1 + 24 | 0, 0, 20) | 0;
 return;
}
function ___remdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i8 = ((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i9 = i4 >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i10 = ((i4 | 0) < 0 ? -1 : 0) >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i11 = _i64Subtract(i7 ^ i1, i8 ^ i2, i7, i8) | 0;
 i2 = tempRet0;
 ___udivmoddi4(i11, i2, _i64Subtract(i9 ^ i3, i10 ^ i4, i9, i10) | 0, tempRet0, i6) | 0;
 i10 = _i64Subtract(HEAP32[i6 >> 2] ^ i7, HEAP32[i6 + 4 >> 2] ^ i8, i7, i8) | 0;
 i8 = tempRet0;
 STACKTOP = i5;
 return (tempRet0 = i8, i10) | 0;
}
function ___divdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i6 = ((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i7 = i4 >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i8 = ((i4 | 0) < 0 ? -1 : 0) >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i9 = _i64Subtract(i5 ^ i1, i6 ^ i2, i5, i6) | 0;
 i2 = tempRet0;
 i1 = i7 ^ i5;
 i5 = i8 ^ i6;
 i6 = _i64Subtract((___udivmoddi4(i9, i2, _i64Subtract(i7 ^ i3, i8 ^ i4, i7, i8) | 0, tempRet0, 0) | 0) ^ i1, tempRet0 ^ i5, i1, i5) | 0;
 return (tempRet0 = tempRet0, i6) | 0;
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
function __ZN7WebCore21ObjectStoreCursorImplD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 288;
 i2 = HEAP32[i1 + 92 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore28IDBBackingStoreCursorLevelDBD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZN7WebCore21ObjectStoreCursorImpl5cloneEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = __ZN3WTF10fastMallocEj(96) | 0;
 i4 = i3;
 __ZN7WebCore28IDBBackingStoreCursorLevelDBC2EPKS0_(i4, i2);
 HEAP32[i3 >> 2] = H_BASE + 288;
 i5 = HEAP32[i2 + 92 >> 2] | 0;
 HEAP32[i3 + 92 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i6 = i1 | 0;
  HEAP32[i6 >> 2] = i4;
  return;
 }
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = i4;
 return;
}
function __ZN7WebCore18IndexKeyCursorImplD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 384;
 i2 = HEAP32[i1 + 92 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore28IDBBackingStoreCursorLevelDBD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZN7WebCore18IndexKeyCursorImpl5cloneEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = __ZN3WTF10fastMallocEj(96) | 0;
 i4 = i3;
 __ZN7WebCore28IDBBackingStoreCursorLevelDBC2EPKS0_(i4, i2);
 HEAP32[i3 >> 2] = H_BASE + 384;
 i5 = HEAP32[i2 + 92 >> 2] | 0;
 HEAP32[i3 + 92 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i6 = i1 | 0;
  HEAP32[i6 >> 2] = i4;
  return;
 }
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = i4;
 return;
}
function __ZN7WebCore21ObjectStoreCursorImplD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 288;
 i2 = HEAP32[i1 + 92 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore28IDBBackingStoreCursorLevelDBD2Ev(i1);
 return;
}
function __ZN7WebCore18IndexKeyCursorImplD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 384;
 i2 = HEAP32[i1 + 92 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore28IDBBackingStoreCursorLevelDBD2Ev(i1);
 return;
}
function dynCall_viiiiiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 FUNCTION_TABLE_viiiiiiiiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0, i12 | 0, i13 | 0, i14 | 0);
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
function __ZN7WebCore22IDBBackingStoreLevelDB4openERKNS_14SecurityOriginERKN3WTF6StringES7_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = H_BASE + 352;
 __ZN7WebCore22IDBBackingStoreLevelDB4openERKNS_14SecurityOriginERKN3WTF6StringES7_PNS_14LevelDBFactoryE(i1, i2, i3, i4, i6 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore18IndexKeyCursorImpl9encodeKeyERKNS_6IDBKeyE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = i2 + 24 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 40 | 0;
 __ZN7WebCore16IDBLevelDBCoding12IndexDataKey6encodeExxxRKNS_6IDBKeyE(i1, HEAP32[i4 >> 2] | 0, HEAP32[i4 + 4 >> 2] | 0, HEAP32[i5 >> 2] | 0, HEAP32[i5 + 4 >> 2] | 0, HEAP32[i6 >> 2] | 0, HEAP32[i6 + 4 >> 2] | 0, i3);
 return;
}
function __ZN7WebCore15IndexCursorImpl9encodeKeyERKNS_6IDBKeyE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = i2 + 24 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 40 | 0;
 __ZN7WebCore16IDBLevelDBCoding12IndexDataKey6encodeExxxRKNS_6IDBKeyE(i1, HEAP32[i4 >> 2] | 0, HEAP32[i4 + 4 >> 2] | 0, HEAP32[i5 >> 2] | 0, HEAP32[i5 + 4 >> 2] | 0, HEAP32[i6 >> 2] | 0, HEAP32[i6 + 4 >> 2] | 0, i3);
 return;
}
function ___muldsi3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 & 65535;
 i4 = i2 & 65535;
 i5 = Math_imul(i4, i3) | 0;
 i6 = i1 >>> 16;
 i1 = (i5 >>> 16) + (Math_imul(i4, i6) | 0) | 0;
 i4 = i2 >>> 16;
 i2 = Math_imul(i4, i3) | 0;
 return (tempRet0 = (i1 >>> 16) + (Math_imul(i4, i6) | 0) + (((i1 & 65535) + i2 | 0) >>> 16) | 0, i1 + i2 << 16 | i5 & 65535 | 0) | 0;
}
function dynCall_viiiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 FUNCTION_TABLE_viiiiiiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0, i12 | 0);
}
function _memmove(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i2 | 0) < (i1 | 0) & (i1 | 0) < (i2 + i3 | 0)) {
  i4 = i1;
  i2 = i2 + i3 | 0;
  i1 = i1 + i3 | 0;
  while ((i3 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i2 = i2 - 1 | 0;
   i3 = i3 - 1 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
  }
  i1 = i4;
 } else {
  _memcpy(i1, i2, i3) | 0;
 }
 return i1 | 0;
}
function __ZN7WebCore24ObjectStoreKeyCursorImpl9encodeKeyERKNS_6IDBKeyE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = i2 + 24 | 0;
 i5 = i2 + 32 | 0;
 __ZN7WebCore16IDBLevelDBCoding18ObjectStoreDataKey6encodeExxRKNS_6IDBKeyE(i1, HEAP32[i4 >> 2] | 0, HEAP32[i4 + 4 >> 2] | 0, HEAP32[i5 >> 2] | 0, HEAP32[i5 + 4 >> 2] | 0, i3);
 return;
}
function __ZN7WebCore21ObjectStoreCursorImpl9encodeKeyERKNS_6IDBKeyE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = i2 + 24 | 0;
 i5 = i2 + 32 | 0;
 __ZN7WebCore16IDBLevelDBCoding18ObjectStoreDataKey6encodeExxRKNS_6IDBKeyE(i1, HEAP32[i4 >> 2] | 0, HEAP32[i4 + 4 >> 2] | 0, HEAP32[i5 >> 2] | 0, HEAP32[i5 + 4 >> 2] | 0, i3);
 return;
}
function _llvm_cttz_i32(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP8[cttz_i8 + (i1 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 | 0;
 i2 = HEAP8[cttz_i8 + (i1 >> 8 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 8 | 0;
 i2 = HEAP8[cttz_i8 + (i1 >> 16 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 16 | 0;
 return (HEAP8[cttz_i8 + (i1 >>> 24) | 0] | 0) + 24 | 0;
}
function _llvm_ctlz_i32(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP8[ctlz_i8 + (i1 >>> 24) | 0] | 0;
 if ((i2 | 0) < 8) return i2 | 0;
 i2 = HEAP8[ctlz_i8 + (i1 >> 16 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 8 | 0;
 i2 = HEAP8[ctlz_i8 + (i1 >> 8 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 16 | 0;
 return (HEAP8[ctlz_i8 + (i1 & 255) | 0] | 0) + 24 | 0;
}
function iiii___ZN7WebCore28IDBBackingStoreCursorLevelDB16continueFunctionEPKNS_6IDBKeyENS0_13IteratorStateE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZN7WebCore28IDBBackingStoreCursorLevelDB16continueFunctionEPKNS_6IDBKeyENS0_13IteratorStateE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function ___uremdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 ___udivmoddi4(i1, i2, i3, i4, i6) | 0;
 STACKTOP = i5;
 return (tempRet0 = HEAP32[i6 + 4 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
}
function __ZN7WebCore24ObjectStoreKeyCursorImpl5cloneEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = __ZN3WTF10fastMallocEj(96) | 0;
 i4 = i3;
 __ZN7WebCore28IDBBackingStoreCursorLevelDBC2EPKS0_(i4, i2 | 0);
 HEAP32[i3 >> 2] = H_BASE + 176;
 HEAP32[i1 >> 2] = i4;
 return;
}
function ___muldi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = i1;
 i1 = i3;
 i3 = ___muldsi3(i5, i1) | 0;
 i6 = tempRet0;
 return (tempRet0 = (Math_imul(i2, i1) | 0) + (Math_imul(i4, i5) | 0) + i6 | i6 & 0, i3 & -1 | 0) | 0;
}
function __ZNK7WebCore28IDBBackingStoreCursorLevelDB10primaryKeyEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 84 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore21DefaultLevelDBFactory11openLevelDBERKN3WTF6StringEPKNS_17LevelDBComparatorE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore15LevelDBDatabase4openERKN3WTF6StringEPKNS_17LevelDBComparatorE(i1, i3, i4);
 return;
}
function b2(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 abort(2);
}
function __ZNK7WebCore28IDBBackingStoreCursorLevelDB3keyEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 84 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZNK7WebCore18IndexKeyCursorImpl10primaryKeyEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 92 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZNK7WebCore21ObjectStoreCursorImpl5valueEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 92 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZNK7WebCore15IndexCursorImpl10primaryKeyEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 92 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function dynCall_viiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function __ZNK7WebCore15IndexCursorImpl5valueEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 96 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function _bitshift64Ashr(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 >> i3;
  return i1 >>> i3 | (i2 & (1 << i3) - 1) << 32 - i3;
 }
 tempRet0 = (i2 | 0) < 0 ? -1 : 0;
 return i2 >> i3 - 32 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function _bitshift64Shl(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 << i3 | (i1 & (1 << i3) - 1 << 32 - i3) >>> 32 - i3;
  return i1 << i3;
 }
 tempRet0 = i1 << i3 - 32;
 return 0;
}
function b5(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 abort(5);
}
function _i64Subtract(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i2 - i4 >>> 0;
 i5 = i2 - i4 - (i3 >>> 0 > i1 >>> 0 | 0) >>> 0;
 return (tempRet0 = i5, i1 - i3 >>> 0 | 0) | 0;
}
function _bitshift64Lshr(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 >>> i3;
  return i1 >>> i3 | (i2 & (1 << i3) - 1) << 32 - i3;
 }
 tempRet0 = 0;
 return i2 >>> i3 - 32 | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB12openInMemoryERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22IDBBackingStoreLevelDB12openInMemoryERKN3WTF6StringEPNS_14LevelDBFactoryE(i1, i2, 0);
 return;
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDB16compareIndexKeysERKNS_12LevelDBSliceES3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore16IDBLevelDBCoding7compareERKNS_12LevelDBSliceES3_b(i1, i2, 1) | 0;
}
function __ZNK7WebCore10Comparator7compareERKNS_12LevelDBSliceES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZN7WebCore16IDBLevelDBCoding7compareERKNS_12LevelDBSliceES3_b(i2, i3, 0) | 0;
}
function _i64Add(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i1 + i3 >>> 0;
 return (tempRet0 = i2 + i4 + (i5 >>> 0 < i1 >>> 0 | 0) >>> 0, i5 | 0) | 0;
}
function iii___ZN7WebCore28IDBBackingStoreCursorLevelDB7advanceEm__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore28IDBBackingStoreCursorLevelDB7advanceEm(i1 | 0, i2 | 0) | 0;
}
function ___udivdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = ___udivmoddi4(i1, i2, i3, i4, 0) | 0;
 return (tempRet0 = tempRet0, i5) | 0;
}
function __ZN7WebCore21DefaultLevelDBFactory14destroyLevelDBERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore15LevelDBDatabase7destroyERKN3WTF6StringE(i2) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore24ObjectStoreKeyCursorImplD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore28IDBBackingStoreCursorLevelDBD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore22IDBBackingStoreLevelDBD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22IDBBackingStoreLevelDBD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function b1(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(1);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore15IndexCursorImplD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15IndexCursorImplD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZN7WebCore24ObjectStoreKeyCursorImplD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore28IDBBackingStoreCursorLevelDBD2Ev(i1 | 0);
 return;
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
function __ZNK7WebCore28IDBBackingStoreCursorLevelDB16recordIdentifierEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 88 >> 2] | 0;
}
function b6(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(6);
 return 0;
}
function __ZNK7WebCore24ObjectStoreKeyCursorImpl5valueEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
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
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function __ZNK7WebCore18IndexKeyCursorImpl5valueEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore18IndexKeyCursorImpl16recordIdentifierEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 88 >> 2] | 0;
}
function __ZNK7WebCore15IndexCursorImpl16recordIdentifierEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 88 >> 2] | 0;
}
function __ZN7WebCore15IndexCursorImplD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15IndexCursorImplD2Ev(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function b11(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(11);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZN7WebCore21DefaultLevelDBFactoryD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function b7(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(7);
 return 0;
}
function __ZNK7WebCore10Comparator4nameEv(i1) {
 i1 = i1 | 0;
 return H_BASE + 8 | 0;
}
function __ZN7WebCore10ComparatorD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function b8(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(8);
}
function __ZN7WebCore21DefaultLevelDBFactoryD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b10(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(10);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN7WebCore10ComparatorD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b9() {
 abort(9);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK7WebCore18IndexKeyCursorImpl16recordIdentifierEv,b0,__ZN7WebCore24ObjectStoreKeyCursorImpl14loadCurrentRowEv,b0,__ZN7WebCore15IndexCursorImpl14loadCurrentRowEv,b0,__ZN7WebCore21ObjectStoreCursorImpl14loadCurrentRowEv,b0,__ZNK7WebCore10Comparator4nameEv,b0,__ZNK7WebCore28IDBBackingStoreCursorLevelDB16recordIdentifierEv,b0,__ZN7WebCore18IndexKeyCursorImpl14loadCurrentRowEv,b0,__ZNK7WebCore15IndexCursorImpl16recordIdentifierEv,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_viiiiiii = [b1,b1,__ZN7WebCore22IDBBackingStoreLevelDB11generateKeyERNS_21IDBTransactionBackendExx,b1];
  var FUNCTION_TABLE_viiiiiiiiiiiii = [b2,b2,__ZN7WebCore22IDBBackingStoreLevelDB18openIndexKeyCursorExRNS_33IDBBackingStoreTransactionLevelDBExxxPKNS_11IDBKeyRangeENS_9IndexedDB15CursorDirectionE,b2,__ZN7WebCore22IDBBackingStoreLevelDB15openIndexCursorExRNS_33IDBBackingStoreTransactionLevelDBExxxPKNS_11IDBKeyRangeENS_9IndexedDB15CursorDirectionE,b2,b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore10ComparatorD1Ev,b3,__ZN7WebCore21DefaultLevelDBFactoryD0Ev,b3,__ZN7WebCore22IDBBackingStoreLevelDBD2Ev,b3,__ZN7WebCore21DefaultLevelDBFactoryD1Ev,b3,__ZN7WebCore21ObjectStoreCursorImplD1Ev,b3,__ZN7WebCore15IndexCursorImplD1Ev,b3,__ZN7WebCore21ObjectStoreCursorImplD0Ev,b3,__ZN7WebCore15IndexCursorImplD0Ev,b3,__ZN7WebCore22IDBBackingStoreLevelDBD0Ev,b3,__ZN7WebCore24ObjectStoreKeyCursorImplD1Ev,b3,__ZN7WebCore18IndexKeyCursorImplD0Ev,b3,__ZN7WebCore24ObjectStoreKeyCursorImplD0Ev,b3,__ZN7WebCore18IndexKeyCursorImplD1Ev,b3,__ZN7WebCore10ComparatorD0Ev
  ,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,__ZNK7WebCore28IDBBackingStoreCursorLevelDB10primaryKeyEv,b4,__ZNK7WebCore18IndexKeyCursorImpl5valueEv,b4,__ZN7WebCore21ObjectStoreCursorImpl5cloneEv,b4,__ZNK7WebCore28IDBBackingStoreCursorLevelDB3keyEv,b4,__ZN7WebCore15IndexCursorImpl5cloneEv,b4,__ZN7WebCore18IndexKeyCursorImpl5cloneEv,b4,__ZNK7WebCore21ObjectStoreCursorImpl5valueEv,b4,__ZNK7WebCore24ObjectStoreKeyCursorImpl5valueEv,b4,__ZNK7WebCore15IndexCursorImpl5valueEv,b4,__ZNK7WebCore15IndexCursorImpl10primaryKeyEv,b4,__ZN7WebCore24ObjectStoreKeyCursorImpl5cloneEv,b4,__ZNK7WebCore18IndexKeyCursorImpl10primaryKeyEv,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_viiiiiiiiiii = [b5,b5,__ZN7WebCore22IDBBackingStoreLevelDB24openObjectStoreKeyCursorExRNS_33IDBBackingStoreTransactionLevelDBExxPKNS_11IDBKeyRangeENS_9IndexedDB15CursorDirectionE,b5,__ZN7WebCore22IDBBackingStoreLevelDB21openObjectStoreCursorExRNS_33IDBBackingStoreTransactionLevelDBExxPKNS_11IDBKeyRangeENS_9IndexedDB15CursorDirectionE,b5,b5,b5];
  var FUNCTION_TABLE_iiiiii = [b6,b6];
  var FUNCTION_TABLE_iiii = [b7,b7,__ZNK7WebCore10Comparator7compareERKNS_12LevelDBSliceES3_,b7,iiii___ZN7WebCore28IDBBackingStoreCursorLevelDB16continueFunctionEPKNS_6IDBKeyENS0_13IteratorStateE__wrapper,b7,b7,b7];
  var FUNCTION_TABLE_viii = [b8,b8,__ZN7WebCore21ObjectStoreCursorImpl9encodeKeyERKNS_6IDBKeyE,b8,__ZN7WebCore24ObjectStoreKeyCursorImpl9encodeKeyERKNS_6IDBKeyE,b8,__ZN7WebCore15IndexCursorImpl9encodeKeyERKNS_6IDBKeyE,b8,__ZN7WebCore18IndexKeyCursorImpl9encodeKeyERKNS_6IDBKeyE,b8,b8,b8,b8,b8,b8,b8];
  var FUNCTION_TABLE_v = [b9,b9];
  var FUNCTION_TABLE_iii = [b10,b10,iii___ZN7WebCore28IDBBackingStoreCursorLevelDB7advanceEm__wrapper,b10,__ZN7WebCore21DefaultLevelDBFactory14destroyLevelDBERKN3WTF6StringE,b10,b10,b10];
  var FUNCTION_TABLE_viiii = [b11,b11,__ZN7WebCore21DefaultLevelDBFactory11openLevelDBERKN3WTF6StringEPKNS_17LevelDBComparatorE,b11,__ZN7WebCore22IDBBackingStoreLevelDBC2ERKN3WTF6StringENS1_10PassOwnPtrINS_15LevelDBDatabaseEEENS5_INS_17LevelDBComparatorEEE,b11,b11,b11];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_viiiiiiiiiiiii: dynCall_viiiiiiiiiiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_viiiiiiiiiii: dynCall_viiiiiiiiiii, dynCall_iiiiii: dynCall_iiiiii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_viiiiiiiiiiiii": invoke_viiiiiiiiiiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_viiiiiiiiiii": invoke_viiiiiiiiiii, "invoke_iiiiii": invoke_iiiiii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_floor": _floor, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "cttz_i8": cttz_i8, "ctlz_i8": ctlz_i8, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore28IDBBackingStoreCursorLevelDBE": __ZTVN7WebCore28IDBBackingStoreCursorLevelDBE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
var dynCall_viiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiii"] = asm["dynCall_viiiiiiiiiiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_viiiiiiiiiii = Module["dynCall_viiiiiiiiiii"] = asm["dynCall_viiiiiiiiiii"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
// TODO: strip out parts of this we do not need
//======= begin closure i64 code =======
// Copyright 2009 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * @fileoverview Defines a Long class for representing a 64-bit two's-complement
 * integer value, which faithfully simulates the behavior of a Java "long". This
 * implementation is derived from LongLib in GWT.
 *
 */
var i64Math = (function() { // Emscripten wrapper
  var goog = { math: {} };
  /**
   * Constructs a 64-bit two's-complement integer, given its low and high 32-bit
   * values as *signed* integers.  See the from* functions below for more
   * convenient ways of constructing Longs.
   *
   * The internal representation of a long is the two given signed, 32-bit values.
   * We use 32-bit pieces because these are the size of integers on which
   * Javascript performs bit-operations.  For operations like addition and
   * multiplication, we split each number into 16-bit pieces, which can easily be
   * multiplied within Javascript's floating-point representation without overflow
   * or change in sign.
   *
   * In the algorithms below, we frequently reduce the negative case to the
   * positive case by negating the input(s) and then post-processing the result.
   * Note that we must ALWAYS check specially whether those values are MIN_VALUE
   * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
   * a positive number, it overflows back into a negative).  Not handling this
   * case would often result in infinite recursion.
   *
   * @param {number} low  The low (signed) 32 bits of the long.
   * @param {number} high  The high (signed) 32 bits of the long.
   * @constructor
   */
  goog.math.Long = function(low, high) {
    /**
     * @type {number}
     * @private
     */
    this.low_ = low | 0;  // force into 32 signed bits.
    /**
     * @type {number}
     * @private
     */
    this.high_ = high | 0;  // force into 32 signed bits.
  };
  // NOTE: Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the
  // from* methods on which they depend.
  /**
   * A cache of the Long representations of small integer values.
   * @type {!Object}
   * @private
   */
  goog.math.Long.IntCache_ = {};
  /**
   * Returns a Long representing the given (32-bit) integer value.
   * @param {number} value The 32-bit integer in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromInt = function(value) {
    if (-128 <= value && value < 128) {
      var cachedObj = goog.math.Long.IntCache_[value];
      if (cachedObj) {
        return cachedObj;
      }
    }
    var obj = new goog.math.Long(value | 0, value < 0 ? -1 : 0);
    if (-128 <= value && value < 128) {
      goog.math.Long.IntCache_[value] = obj;
    }
    return obj;
  };
  /**
   * Returns a Long representing the given value, provided that it is a finite
   * number.  Otherwise, zero is returned.
   * @param {number} value The number in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromNumber = function(value) {
    if (isNaN(value) || !isFinite(value)) {
      return goog.math.Long.ZERO;
    } else if (value <= -goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MIN_VALUE;
    } else if (value + 1 >= goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MAX_VALUE;
    } else if (value < 0) {
      return goog.math.Long.fromNumber(-value).negate();
    } else {
      return new goog.math.Long(
          (value % goog.math.Long.TWO_PWR_32_DBL_) | 0,
          (value / goog.math.Long.TWO_PWR_32_DBL_) | 0);
    }
  };
  /**
   * Returns a Long representing the 64-bit integer that comes by concatenating
   * the given high and low bits.  Each is assumed to use 32 bits.
   * @param {number} lowBits The low 32-bits.
   * @param {number} highBits The high 32-bits.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromBits = function(lowBits, highBits) {
    return new goog.math.Long(lowBits, highBits);
  };
  /**
   * Returns a Long representation of the given string, written using the given
   * radix.
   * @param {string} str The textual representation of the Long.
   * @param {number=} opt_radix The radix in which the text is written.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromString = function(str, opt_radix) {
    if (str.length == 0) {
      throw Error('number format error: empty string');
    }
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (str.charAt(0) == '-') {
      return goog.math.Long.fromString(str.substring(1), radix).negate();
    } else if (str.indexOf('-') >= 0) {
      throw Error('number format error: interior "-" character: ' + str);
    }
    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 8));
    var result = goog.math.Long.ZERO;
    for (var i = 0; i < str.length; i += 8) {
      var size = Math.min(8, str.length - i);
      var value = parseInt(str.substring(i, i + size), radix);
      if (size < 8) {
        var power = goog.math.Long.fromNumber(Math.pow(radix, size));
        result = result.multiply(power).add(goog.math.Long.fromNumber(value));
      } else {
        result = result.multiply(radixToPower);
        result = result.add(goog.math.Long.fromNumber(value));
      }
    }
    return result;
  };
  // NOTE: the compiler should inline these constant values below and then remove
  // these variables, so there should be no runtime penalty for these.
  /**
   * Number used repeated below in calculations.  This must appear before the
   * first call to any from* function below.
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_16_DBL_ = 1 << 16;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_24_DBL_ = 1 << 24;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_32_DBL_ =
      goog.math.Long.TWO_PWR_16_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_31_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ / 2;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_48_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_64_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_32_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_63_DBL_ =
      goog.math.Long.TWO_PWR_64_DBL_ / 2;
  /** @type {!goog.math.Long} */
  goog.math.Long.ZERO = goog.math.Long.fromInt(0);
  /** @type {!goog.math.Long} */
  goog.math.Long.ONE = goog.math.Long.fromInt(1);
  /** @type {!goog.math.Long} */
  goog.math.Long.NEG_ONE = goog.math.Long.fromInt(-1);
  /** @type {!goog.math.Long} */
  goog.math.Long.MAX_VALUE =
      goog.math.Long.fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0);
  /** @type {!goog.math.Long} */
  goog.math.Long.MIN_VALUE = goog.math.Long.fromBits(0, 0x80000000 | 0);
  /**
   * @type {!goog.math.Long}
   * @private
   */
  goog.math.Long.TWO_PWR_24_ = goog.math.Long.fromInt(1 << 24);
  /** @return {number} The value, assuming it is a 32-bit integer. */
  goog.math.Long.prototype.toInt = function() {
    return this.low_;
  };
  /** @return {number} The closest floating-point representation to this value. */
  goog.math.Long.prototype.toNumber = function() {
    return this.high_ * goog.math.Long.TWO_PWR_32_DBL_ +
           this.getLowBitsUnsigned();
  };
  /**
   * @param {number=} opt_radix The radix in which the text should be written.
   * @return {string} The textual representation of this value.
   */
  goog.math.Long.prototype.toString = function(opt_radix) {
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (this.isZero()) {
      return '0';
    }
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        // We need to change the Long value before it can be negated, so we remove
        // the bottom-most digit in this base and then recurse to do the rest.
        var radixLong = goog.math.Long.fromNumber(radix);
        var div = this.div(radixLong);
        var rem = div.multiply(radixLong).subtract(this);
        return div.toString(radix) + rem.toInt().toString(radix);
      } else {
        return '-' + this.negate().toString(radix);
      }
    }
    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 6));
    var rem = this;
    var result = '';
    while (true) {
      var remDiv = rem.div(radixToPower);
      var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt();
      var digits = intval.toString(radix);
      rem = remDiv;
      if (rem.isZero()) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = '' + digits + result;
      }
    }
  };
  /** @return {number} The high 32-bits as a signed value. */
  goog.math.Long.prototype.getHighBits = function() {
    return this.high_;
  };
  /** @return {number} The low 32-bits as a signed value. */
  goog.math.Long.prototype.getLowBits = function() {
    return this.low_;
  };
  /** @return {number} The low 32-bits as an unsigned value. */
  goog.math.Long.prototype.getLowBitsUnsigned = function() {
    return (this.low_ >= 0) ?
        this.low_ : goog.math.Long.TWO_PWR_32_DBL_ + this.low_;
  };
  /**
   * @return {number} Returns the number of bits needed to represent the absolute
   *     value of this Long.
   */
  goog.math.Long.prototype.getNumBitsAbs = function() {
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        return 64;
      } else {
        return this.negate().getNumBitsAbs();
      }
    } else {
      var val = this.high_ != 0 ? this.high_ : this.low_;
      for (var bit = 31; bit > 0; bit--) {
        if ((val & (1 << bit)) != 0) {
          break;
        }
      }
      return this.high_ != 0 ? bit + 33 : bit + 1;
    }
  };
  /** @return {boolean} Whether this value is zero. */
  goog.math.Long.prototype.isZero = function() {
    return this.high_ == 0 && this.low_ == 0;
  };
  /** @return {boolean} Whether this value is negative. */
  goog.math.Long.prototype.isNegative = function() {
    return this.high_ < 0;
  };
  /** @return {boolean} Whether this value is odd. */
  goog.math.Long.prototype.isOdd = function() {
    return (this.low_ & 1) == 1;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long equals the other.
   */
  goog.math.Long.prototype.equals = function(other) {
    return (this.high_ == other.high_) && (this.low_ == other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long does not equal the other.
   */
  goog.math.Long.prototype.notEquals = function(other) {
    return (this.high_ != other.high_) || (this.low_ != other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than the other.
   */
  goog.math.Long.prototype.lessThan = function(other) {
    return this.compare(other) < 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than or equal to the other.
   */
  goog.math.Long.prototype.lessThanOrEqual = function(other) {
    return this.compare(other) <= 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than the other.
   */
  goog.math.Long.prototype.greaterThan = function(other) {
    return this.compare(other) > 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than or equal to the other.
   */
  goog.math.Long.prototype.greaterThanOrEqual = function(other) {
    return this.compare(other) >= 0;
  };
  /**
   * Compares this Long with the given one.
   * @param {goog.math.Long} other Long to compare against.
   * @return {number} 0 if they are the same, 1 if the this is greater, and -1
   *     if the given one is greater.
   */
  goog.math.Long.prototype.compare = function(other) {
    if (this.equals(other)) {
      return 0;
    }
    var thisNeg = this.isNegative();
    var otherNeg = other.isNegative();
    if (thisNeg && !otherNeg) {
      return -1;
    }
    if (!thisNeg && otherNeg) {
      return 1;
    }
    // at this point, the signs are the same, so subtraction will not overflow
    if (this.subtract(other).isNegative()) {
      return -1;
    } else {
      return 1;
    }
  };
  /** @return {!goog.math.Long} The negation of this value. */
  goog.math.Long.prototype.negate = function() {
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.MIN_VALUE;
    } else {
      return this.not().add(goog.math.Long.ONE);
    }
  };
  /**
   * Returns the sum of this and the given Long.
   * @param {goog.math.Long} other Long to add to this one.
   * @return {!goog.math.Long} The sum of this and the given Long.
   */
  goog.math.Long.prototype.add = function(other) {
    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns the difference of this and the given Long.
   * @param {goog.math.Long} other Long to subtract from this.
   * @return {!goog.math.Long} The difference of this and the given Long.
   */
  goog.math.Long.prototype.subtract = function(other) {
    return this.add(other.negate());
  };
  /**
   * Returns the product of this and the given long.
   * @param {goog.math.Long} other Long to multiply with this.
   * @return {!goog.math.Long} The product of this and the other.
   */
  goog.math.Long.prototype.multiply = function(other) {
    if (this.isZero()) {
      return goog.math.Long.ZERO;
    } else if (other.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return other.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return this.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().multiply(other.negate());
      } else {
        return this.negate().multiply(other).negate();
      }
    } else if (other.isNegative()) {
      return this.multiply(other.negate()).negate();
    }
    // If both longs are small, use float multiplication
    if (this.lessThan(goog.math.Long.TWO_PWR_24_) &&
        other.lessThan(goog.math.Long.TWO_PWR_24_)) {
      return goog.math.Long.fromNumber(this.toNumber() * other.toNumber());
    }
    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns this Long divided by the given one.
   * @param {goog.math.Long} other Long by which to divide.
   * @return {!goog.math.Long} This Long divided by the given one.
   */
  goog.math.Long.prototype.div = function(other) {
    if (other.isZero()) {
      throw Error('division by zero');
    } else if (this.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      if (other.equals(goog.math.Long.ONE) ||
          other.equals(goog.math.Long.NEG_ONE)) {
        return goog.math.Long.MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
      } else if (other.equals(goog.math.Long.MIN_VALUE)) {
        return goog.math.Long.ONE;
      } else {
        // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
        var halfThis = this.shiftRight(1);
        var approx = halfThis.div(other).shiftLeft(1);
        if (approx.equals(goog.math.Long.ZERO)) {
          return other.isNegative() ? goog.math.Long.ONE : goog.math.Long.NEG_ONE;
        } else {
          var rem = this.subtract(other.multiply(approx));
          var result = approx.add(rem.div(other));
          return result;
        }
      }
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().div(other.negate());
      } else {
        return this.negate().div(other).negate();
      }
    } else if (other.isNegative()) {
      return this.div(other.negate()).negate();
    }
    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    var res = goog.math.Long.ZERO;
    var rem = this;
    while (rem.greaterThanOrEqual(other)) {
      // Approximate the result of division. This may be a little greater or
      // smaller than the actual value.
      var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));
      // We will tweak the approximate result by changing it in the 48-th digit or
      // the smallest non-fractional digit, whichever is larger.
      var log2 = Math.ceil(Math.log(approx) / Math.LN2);
      var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);
      // Decrease the approximation until it is smaller than the remainder.  Note
      // that if it is too large, the product overflows and is negative.
      var approxRes = goog.math.Long.fromNumber(approx);
      var approxRem = approxRes.multiply(other);
      while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
        approx -= delta;
        approxRes = goog.math.Long.fromNumber(approx);
        approxRem = approxRes.multiply(other);
      }
      // We know the answer can't be zero... and actually, zero would cause
      // infinite recursion since we would make no progress.
      if (approxRes.isZero()) {
        approxRes = goog.math.Long.ONE;
      }
      res = res.add(approxRes);
      rem = rem.subtract(approxRem);
    }
    return res;
  };
  /**
   * Returns this Long modulo the given one.
   * @param {goog.math.Long} other Long by which to mod.
   * @return {!goog.math.Long} This Long modulo the given one.
   */
  goog.math.Long.prototype.modulo = function(other) {
    return this.subtract(this.div(other).multiply(other));
  };
  /** @return {!goog.math.Long} The bitwise-NOT of this value. */
  goog.math.Long.prototype.not = function() {
    return goog.math.Long.fromBits(~this.low_, ~this.high_);
  };
  /**
   * Returns the bitwise-AND of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to AND.
   * @return {!goog.math.Long} The bitwise-AND of this and the other.
   */
  goog.math.Long.prototype.and = function(other) {
    return goog.math.Long.fromBits(this.low_ & other.low_,
                                   this.high_ & other.high_);
  };
  /**
   * Returns the bitwise-OR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to OR.
   * @return {!goog.math.Long} The bitwise-OR of this and the other.
   */
  goog.math.Long.prototype.or = function(other) {
    return goog.math.Long.fromBits(this.low_ | other.low_,
                                   this.high_ | other.high_);
  };
  /**
   * Returns the bitwise-XOR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to XOR.
   * @return {!goog.math.Long} The bitwise-XOR of this and the other.
   */
  goog.math.Long.prototype.xor = function(other) {
    return goog.math.Long.fromBits(this.low_ ^ other.low_,
                                   this.high_ ^ other.high_);
  };
  /**
   * Returns this Long with bits shifted to the left by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the left by the given amount.
   */
  goog.math.Long.prototype.shiftLeft = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var low = this.low_;
      if (numBits < 32) {
        var high = this.high_;
        return goog.math.Long.fromBits(
            low << numBits,
            (high << numBits) | (low >>> (32 - numBits)));
      } else {
        return goog.math.Long.fromBits(0, low << (numBits - 32));
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount.
   */
  goog.math.Long.prototype.shiftRight = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >> numBits);
      } else {
        return goog.math.Long.fromBits(
            high >> (numBits - 32),
            high >= 0 ? 0 : -1);
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount, with
   * the new top bits matching the current sign bit.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount, with
   *     zeros placed into the new leading bits.
   */
  goog.math.Long.prototype.shiftRightUnsigned = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >>> numBits);
      } else if (numBits == 32) {
        return goog.math.Long.fromBits(high, 0);
      } else {
        return goog.math.Long.fromBits(high >>> (numBits - 32), 0);
      }
    }
  };
  //======= begin jsbn =======
  var navigator = { appName: 'Modern Browser' }; // polyfill a little
  // Copyright (c) 2005  Tom Wu
  // All Rights Reserved.
  // http://www-cs-students.stanford.edu/~tjw/jsbn/
  /*
   * Copyright (c) 2003-2005  Tom Wu
   * All Rights Reserved.
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND, 
   * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY 
   * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.  
   *
   * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
   * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
   * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
   * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
   * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * In addition, the following condition applies:
   *
   * All redistributions must retain an intact copy of this copyright notice
   * and disclaimer.
   */
  // Basic JavaScript BN library - subset useful for RSA encryption.
  // Bits per digit
  var dbits;
  // JavaScript engine analysis
  var canary = 0xdeadbeefcafe;
  var j_lm = ((canary&0xffffff)==0xefcafe);
  // (public) Constructor
  function BigInteger(a,b,c) {
    if(a != null)
      if("number" == typeof a) this.fromNumber(a,b,c);
      else if(b == null && "string" != typeof a) this.fromString(a,256);
      else this.fromString(a,b);
  }
  // return new, unset BigInteger
  function nbi() { return new BigInteger(null); }
  // am: Compute w_j += (x*this_i), propagate carries,
  // c is initial carry, returns final carry.
  // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
  // We need to select the fastest one that works in this environment.
  // am1: use a single mult and divide to get the high bits,
  // max digit bits should be 26 because
  // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
  function am1(i,x,w,j,c,n) {
    while(--n >= 0) {
      var v = x*this[i++]+w[j]+c;
      c = Math.floor(v/0x4000000);
      w[j++] = v&0x3ffffff;
    }
    return c;
  }
  // am2 avoids a big mult-and-extract completely.
  // Max digit bits should be <= 30 because we do bitwise ops
  // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
  function am2(i,x,w,j,c,n) {
    var xl = x&0x7fff, xh = x>>15;
    while(--n >= 0) {
      var l = this[i]&0x7fff;
      var h = this[i++]>>15;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
      c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
      w[j++] = l&0x3fffffff;
    }
    return c;
  }
  // Alternately, set max digit bits to 28 since some
  // browsers slow down when dealing with 32-bit numbers.
  function am3(i,x,w,j,c,n) {
    var xl = x&0x3fff, xh = x>>14;
    while(--n >= 0) {
      var l = this[i]&0x3fff;
      var h = this[i++]>>14;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x3fff)<<14)+w[j]+c;
      c = (l>>28)+(m>>14)+xh*h;
      w[j++] = l&0xfffffff;
    }
    return c;
  }
  if(j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
    BigInteger.prototype.am = am2;
    dbits = 30;
  }
  else if(j_lm && (navigator.appName != "Netscape")) {
    BigInteger.prototype.am = am1;
    dbits = 26;
  }
  else { // Mozilla/Netscape seems to prefer am3
    BigInteger.prototype.am = am3;
    dbits = 28;
  }
  BigInteger.prototype.DB = dbits;
  BigInteger.prototype.DM = ((1<<dbits)-1);
  BigInteger.prototype.DV = (1<<dbits);
  var BI_FP = 52;
  BigInteger.prototype.FV = Math.pow(2,BI_FP);
  BigInteger.prototype.F1 = BI_FP-dbits;
  BigInteger.prototype.F2 = 2*dbits-BI_FP;
  // Digit conversions
  var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
  var BI_RC = new Array();
  var rr,vv;
  rr = "0".charCodeAt(0);
  for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
  rr = "a".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  rr = "A".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  function int2char(n) { return BI_RM.charAt(n); }
  function intAt(s,i) {
    var c = BI_RC[s.charCodeAt(i)];
    return (c==null)?-1:c;
  }
  // (protected) copy this to r
  function bnpCopyTo(r) {
    for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
    r.t = this.t;
    r.s = this.s;
  }
  // (protected) set from integer value x, -DV <= x < DV
  function bnpFromInt(x) {
    this.t = 1;
    this.s = (x<0)?-1:0;
    if(x > 0) this[0] = x;
    else if(x < -1) this[0] = x+DV;
    else this.t = 0;
  }
  // return bigint initialized to value
  function nbv(i) { var r = nbi(); r.fromInt(i); return r; }
  // (protected) set from string and radix
  function bnpFromString(s,b) {
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 256) k = 8; // byte array
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else { this.fromRadix(s,b); return; }
    this.t = 0;
    this.s = 0;
    var i = s.length, mi = false, sh = 0;
    while(--i >= 0) {
      var x = (k==8)?s[i]&0xff:intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-") mi = true;
        continue;
      }
      mi = false;
      if(sh == 0)
        this[this.t++] = x;
      else if(sh+k > this.DB) {
        this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
        this[this.t++] = (x>>(this.DB-sh));
      }
      else
        this[this.t-1] |= x<<sh;
      sh += k;
      if(sh >= this.DB) sh -= this.DB;
    }
    if(k == 8 && (s[0]&0x80) != 0) {
      this.s = -1;
      if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
    }
    this.clamp();
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) clamp off excess high words
  function bnpClamp() {
    var c = this.s&this.DM;
    while(this.t > 0 && this[this.t-1] == c) --this.t;
  }
  // (public) return string representation in given radix
  function bnToString(b) {
    if(this.s < 0) return "-"+this.negate().toString(b);
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else return this.toRadix(b);
    var km = (1<<k)-1, d, m = false, r = "", i = this.t;
    var p = this.DB-(i*this.DB)%k;
    if(i-- > 0) {
      if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
      while(i >= 0) {
        if(p < k) {
          d = (this[i]&((1<<p)-1))<<(k-p);
          d |= this[--i]>>(p+=this.DB-k);
        }
        else {
          d = (this[i]>>(p-=k))&km;
          if(p <= 0) { p += this.DB; --i; }
        }
        if(d > 0) m = true;
        if(m) r += int2char(d);
      }
    }
    return m?r:"0";
  }
  // (public) -this
  function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }
  // (public) |this|
  function bnAbs() { return (this.s<0)?this.negate():this; }
  // (public) return + if this > a, - if this < a, 0 if equal
  function bnCompareTo(a) {
    var r = this.s-a.s;
    if(r != 0) return r;
    var i = this.t;
    r = i-a.t;
    if(r != 0) return (this.s<0)?-r:r;
    while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
    return 0;
  }
  // returns bit length of the integer x
  function nbits(x) {
    var r = 1, t;
    if((t=x>>>16) != 0) { x = t; r += 16; }
    if((t=x>>8) != 0) { x = t; r += 8; }
    if((t=x>>4) != 0) { x = t; r += 4; }
    if((t=x>>2) != 0) { x = t; r += 2; }
    if((t=x>>1) != 0) { x = t; r += 1; }
    return r;
  }
  // (public) return the number of bits in "this"
  function bnBitLength() {
    if(this.t <= 0) return 0;
    return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
  }
  // (protected) r = this << n*DB
  function bnpDLShiftTo(n,r) {
    var i;
    for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
    for(i = n-1; i >= 0; --i) r[i] = 0;
    r.t = this.t+n;
    r.s = this.s;
  }
  // (protected) r = this >> n*DB
  function bnpDRShiftTo(n,r) {
    for(var i = n; i < this.t; ++i) r[i-n] = this[i];
    r.t = Math.max(this.t-n,0);
    r.s = this.s;
  }
  // (protected) r = this << n
  function bnpLShiftTo(n,r) {
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<cbs)-1;
    var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
    for(i = this.t-1; i >= 0; --i) {
      r[i+ds+1] = (this[i]>>cbs)|c;
      c = (this[i]&bm)<<bs;
    }
    for(i = ds-1; i >= 0; --i) r[i] = 0;
    r[ds] = c;
    r.t = this.t+ds+1;
    r.s = this.s;
    r.clamp();
  }
  // (protected) r = this >> n
  function bnpRShiftTo(n,r) {
    r.s = this.s;
    var ds = Math.floor(n/this.DB);
    if(ds >= this.t) { r.t = 0; return; }
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<bs)-1;
    r[0] = this[ds]>>bs;
    for(var i = ds+1; i < this.t; ++i) {
      r[i-ds-1] |= (this[i]&bm)<<cbs;
      r[i-ds] = this[i]>>bs;
    }
    if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
    r.t = this.t-ds;
    r.clamp();
  }
  // (protected) r = this - a
  function bnpSubTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]-a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c -= a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c -= a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c -= a.s;
    }
    r.s = (c<0)?-1:0;
    if(c < -1) r[i++] = this.DV+c;
    else if(c > 0) r[i++] = c;
    r.t = i;
    r.clamp();
  }
  // (protected) r = this * a, r != this,a (HAC 14.12)
  // "this" should be the larger one if appropriate.
  function bnpMultiplyTo(a,r) {
    var x = this.abs(), y = a.abs();
    var i = x.t;
    r.t = i+y.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
    r.s = 0;
    r.clamp();
    if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
  }
  // (protected) r = this^2, r != this (HAC 14.16)
  function bnpSquareTo(r) {
    var x = this.abs();
    var i = r.t = 2*x.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < x.t-1; ++i) {
      var c = x.am(i,x[i],r,2*i,0,1);
      if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
        r[i+x.t] -= x.DV;
        r[i+x.t+1] = 1;
      }
    }
    if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
    r.s = 0;
    r.clamp();
  }
  // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
  // r != q, this != m.  q or r may be null.
  function bnpDivRemTo(m,q,r) {
    var pm = m.abs();
    if(pm.t <= 0) return;
    var pt = this.abs();
    if(pt.t < pm.t) {
      if(q != null) q.fromInt(0);
      if(r != null) this.copyTo(r);
      return;
    }
    if(r == null) r = nbi();
    var y = nbi(), ts = this.s, ms = m.s;
    var nsh = this.DB-nbits(pm[pm.t-1]);	// normalize modulus
    if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
    else { pm.copyTo(y); pt.copyTo(r); }
    var ys = y.t;
    var y0 = y[ys-1];
    if(y0 == 0) return;
    var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
    var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
    var i = r.t, j = i-ys, t = (q==null)?nbi():q;
    y.dlShiftTo(j,t);
    if(r.compareTo(t) >= 0) {
      r[r.t++] = 1;
      r.subTo(t,r);
    }
    BigInteger.ONE.dlShiftTo(ys,t);
    t.subTo(y,y);	// "negative" y so we can replace sub with am later
    while(y.t < ys) y[y.t++] = 0;
    while(--j >= 0) {
      // Estimate quotient digit
      var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
      if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {	// Try it out
        y.dlShiftTo(j,t);
        r.subTo(t,r);
        while(r[i] < --qd) r.subTo(t,r);
      }
    }
    if(q != null) {
      r.drShiftTo(ys,q);
      if(ts != ms) BigInteger.ZERO.subTo(q,q);
    }
    r.t = ys;
    r.clamp();
    if(nsh > 0) r.rShiftTo(nsh,r);	// Denormalize remainder
    if(ts < 0) BigInteger.ZERO.subTo(r,r);
  }
  // (public) this mod a
  function bnMod(a) {
    var r = nbi();
    this.abs().divRemTo(a,null,r);
    if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
    return r;
  }
  // Modular reduction using "classic" algorithm
  function Classic(m) { this.m = m; }
  function cConvert(x) {
    if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
    else return x;
  }
  function cRevert(x) { return x; }
  function cReduce(x) { x.divRemTo(this.m,null,x); }
  function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  Classic.prototype.convert = cConvert;
  Classic.prototype.revert = cRevert;
  Classic.prototype.reduce = cReduce;
  Classic.prototype.mulTo = cMulTo;
  Classic.prototype.sqrTo = cSqrTo;
  // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
  // justification:
  //         xy == 1 (mod m)
  //         xy =  1+km
  //   xy(2-xy) = (1+km)(1-km)
  // x[y(2-xy)] = 1-k^2m^2
  // x[y(2-xy)] == 1 (mod m^2)
  // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
  // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
  // JS multiply "overflows" differently from C/C++, so care is needed here.
  function bnpInvDigit() {
    if(this.t < 1) return 0;
    var x = this[0];
    if((x&1) == 0) return 0;
    var y = x&3;		// y == 1/x mod 2^2
    y = (y*(2-(x&0xf)*y))&0xf;	// y == 1/x mod 2^4
    y = (y*(2-(x&0xff)*y))&0xff;	// y == 1/x mod 2^8
    y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;	// y == 1/x mod 2^16
    // last step - calculate inverse mod DV directly;
    // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
    y = (y*(2-x*y%this.DV))%this.DV;		// y == 1/x mod 2^dbits
    // we really want the negative inverse, and -DV < y < DV
    return (y>0)?this.DV-y:-y;
  }
  // Montgomery reduction
  function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp&0x7fff;
    this.mph = this.mp>>15;
    this.um = (1<<(m.DB-15))-1;
    this.mt2 = 2*m.t;
  }
  // xR mod m
  function montConvert(x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t,r);
    r.divRemTo(this.m,null,r);
    if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
    return r;
  }
  // x/R mod m
  function montRevert(x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
  }
  // x = x/R mod m (HAC 14.32)
  function montReduce(x) {
    while(x.t <= this.mt2)	// pad x so am has enough room later
      x[x.t++] = 0;
    for(var i = 0; i < this.m.t; ++i) {
      // faster way of calculating u0 = x[i]*mp mod DV
      var j = x[i]&0x7fff;
      var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
      // use am to combine the multiply-shift-add into one call
      j = i+this.m.t;
      x[j] += this.m.am(0,u0,x,i,0,this.m.t);
      // propagate carry
      while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
    }
    x.clamp();
    x.drShiftTo(this.m.t,x);
    if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
  }
  // r = "x^2/R mod m"; x != r
  function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  // r = "xy/R mod m"; x,y != r
  function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  Montgomery.prototype.convert = montConvert;
  Montgomery.prototype.revert = montRevert;
  Montgomery.prototype.reduce = montReduce;
  Montgomery.prototype.mulTo = montMulTo;
  Montgomery.prototype.sqrTo = montSqrTo;
  // (protected) true iff this is even
  function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }
  // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
  function bnpExp(e,z) {
    if(e > 0xffffffff || e < 1) return BigInteger.ONE;
    var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
    g.copyTo(r);
    while(--i >= 0) {
      z.sqrTo(r,r2);
      if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
      else { var t = r; r = r2; r2 = t; }
    }
    return z.revert(r);
  }
  // (public) this^e % m, 0 <= e < 2^32
  function bnModPowInt(e,m) {
    var z;
    if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
    return this.exp(e,z);
  }
  // protected
  BigInteger.prototype.copyTo = bnpCopyTo;
  BigInteger.prototype.fromInt = bnpFromInt;
  BigInteger.prototype.fromString = bnpFromString;
  BigInteger.prototype.clamp = bnpClamp;
  BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
  BigInteger.prototype.drShiftTo = bnpDRShiftTo;
  BigInteger.prototype.lShiftTo = bnpLShiftTo;
  BigInteger.prototype.rShiftTo = bnpRShiftTo;
  BigInteger.prototype.subTo = bnpSubTo;
  BigInteger.prototype.multiplyTo = bnpMultiplyTo;
  BigInteger.prototype.squareTo = bnpSquareTo;
  BigInteger.prototype.divRemTo = bnpDivRemTo;
  BigInteger.prototype.invDigit = bnpInvDigit;
  BigInteger.prototype.isEven = bnpIsEven;
  BigInteger.prototype.exp = bnpExp;
  // public
  BigInteger.prototype.toString = bnToString;
  BigInteger.prototype.negate = bnNegate;
  BigInteger.prototype.abs = bnAbs;
  BigInteger.prototype.compareTo = bnCompareTo;
  BigInteger.prototype.bitLength = bnBitLength;
  BigInteger.prototype.mod = bnMod;
  BigInteger.prototype.modPowInt = bnModPowInt;
  // "constants"
  BigInteger.ZERO = nbv(0);
  BigInteger.ONE = nbv(1);
  // jsbn2 stuff
  // (protected) convert from radix string
  function bnpFromRadix(s,b) {
    this.fromInt(0);
    if(b == null) b = 10;
    var cs = this.chunkSize(b);
    var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
    for(var i = 0; i < s.length; ++i) {
      var x = intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
        continue;
      }
      w = b*w+x;
      if(++j >= cs) {
        this.dMultiply(d);
        this.dAddOffset(w,0);
        j = 0;
        w = 0;
      }
    }
    if(j > 0) {
      this.dMultiply(Math.pow(b,j));
      this.dAddOffset(w,0);
    }
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) return x s.t. r^x < DV
  function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }
  // (public) 0 if this == 0, 1 if this > 0
  function bnSigNum() {
    if(this.s < 0) return -1;
    else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
    else return 1;
  }
  // (protected) this *= n, this >= 0, 1 < n < DV
  function bnpDMultiply(n) {
    this[this.t] = this.am(0,n-1,this,0,0,this.t);
    ++this.t;
    this.clamp();
  }
  // (protected) this += n << w words, this >= 0
  function bnpDAddOffset(n,w) {
    if(n == 0) return;
    while(this.t <= w) this[this.t++] = 0;
    this[w] += n;
    while(this[w] >= this.DV) {
      this[w] -= this.DV;
      if(++w >= this.t) this[this.t++] = 0;
      ++this[w];
    }
  }
  // (protected) convert to radix string
  function bnpToRadix(b) {
    if(b == null) b = 10;
    if(this.signum() == 0 || b < 2 || b > 36) return "0";
    var cs = this.chunkSize(b);
    var a = Math.pow(b,cs);
    var d = nbv(a), y = nbi(), z = nbi(), r = "";
    this.divRemTo(d,y,z);
    while(y.signum() > 0) {
      r = (a+z.intValue()).toString(b).substr(1) + r;
      y.divRemTo(d,y,z);
    }
    return z.intValue().toString(b) + r;
  }
  // (public) return value as integer
  function bnIntValue() {
    if(this.s < 0) {
      if(this.t == 1) return this[0]-this.DV;
      else if(this.t == 0) return -1;
    }
    else if(this.t == 1) return this[0];
    else if(this.t == 0) return 0;
    // assumes 16 < DB < 32
    return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
  }
  // (protected) r = this + a
  function bnpAddTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]+a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c += a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c += a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += a.s;
    }
    r.s = (c<0)?-1:0;
    if(c > 0) r[i++] = c;
    else if(c < -1) r[i++] = this.DV+c;
    r.t = i;
    r.clamp();
  }
  BigInteger.prototype.fromRadix = bnpFromRadix;
  BigInteger.prototype.chunkSize = bnpChunkSize;
  BigInteger.prototype.signum = bnSigNum;
  BigInteger.prototype.dMultiply = bnpDMultiply;
  BigInteger.prototype.dAddOffset = bnpDAddOffset;
  BigInteger.prototype.toRadix = bnpToRadix;
  BigInteger.prototype.intValue = bnIntValue;
  BigInteger.prototype.addTo = bnpAddTo;
  //======= end jsbn =======
  // Emscripten wrapper
  var Wrapper = {
    abs: function(l, h) {
      var x = new goog.math.Long(l, h);
      var ret;
      if (x.isNegative()) {
        ret = x.negate();
      } else {
        ret = x;
      }
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
    },
    ensureTemps: function() {
      if (Wrapper.ensuredTemps) return;
      Wrapper.ensuredTemps = true;
      Wrapper.two32 = new BigInteger();
      Wrapper.two32.fromString('4294967296', 10);
      Wrapper.two64 = new BigInteger();
      Wrapper.two64.fromString('18446744073709551616', 10);
      Wrapper.temp1 = new BigInteger();
      Wrapper.temp2 = new BigInteger();
    },
    lh2bignum: function(l, h) {
      var a = new BigInteger();
      a.fromString(h.toString(), 10);
      var b = new BigInteger();
      a.multiplyTo(Wrapper.two32, b);
      var c = new BigInteger();
      c.fromString(l.toString(), 10);
      var d = new BigInteger();
      c.addTo(b, d);
      return d;
    },
    stringify: function(l, h, unsigned) {
      var ret = new goog.math.Long(l, h).toString();
      if (unsigned && ret[0] == '-') {
        // unsign slowly using jsbn bignums
        Wrapper.ensureTemps();
        var bignum = new BigInteger();
        bignum.fromString(ret, 10);
        ret = new BigInteger();
        Wrapper.two64.addTo(bignum, ret);
        ret = ret.toString(10);
      }
      return ret;
    },
    fromString: function(str, base, min, max, unsigned) {
      Wrapper.ensureTemps();
      var bignum = new BigInteger();
      bignum.fromString(str, base);
      var bigmin = new BigInteger();
      bigmin.fromString(min, 10);
      var bigmax = new BigInteger();
      bigmax.fromString(max, 10);
      if (unsigned && bignum.compareTo(BigInteger.ZERO) < 0) {
        var temp = new BigInteger();
        bignum.addTo(Wrapper.two64, temp);
        bignum = temp;
      }
      var error = false;
      if (bignum.compareTo(bigmin) < 0) {
        bignum = bigmin;
        error = true;
      } else if (bignum.compareTo(bigmax) > 0) {
        bignum = bigmax;
        error = true;
      }
      var ret = goog.math.Long.fromString(bignum.toString()); // min-max checks should have clamped this to a range goog.math.Long can handle well
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
      if (error) throw 'range error';
    }
  };
  return Wrapper;
})();
//======= end closure i64 code =======
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_","__ZN7WebCoreL11deleteRangeEPNS_18LevelDBTransactionERKN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEES7_","__ZN7WebCore18IndexKeyCursorImpl5cloneEv","__ZN7WebCoreL19getMaxObjectStoreIdINS_15LevelDBDatabaseEEEbPT_xRx","__ZN7WebCore15IndexCursorImplD2Ev","__ZN7WebCore21ObjectStoreCursorImplD1Ev","__ZN7WebCoreL24objectStoreCursorOptionsEPNS_18LevelDBTransactionExxPKNS_11IDBKeyRangeENS_9IndexedDB15CursorDirectionERNS_28IDBBackingStoreCursorLevelDB13CursorOptionsE","__ZN7WebCore22IDBBackingStoreLevelDB32establishBackingStoreTransactionEx","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKxS3_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_","_memcpy","__ZN3WTF10RefCountedIN7WebCore21IDBIndexWriterLevelDBEE5derefEv","__ZN7WebCore22IDBBackingStoreLevelDB9putRecordERNS_33IDBBackingStoreTransactionLevelDBExxRKNS_6IDBKeyEN3WTF10PassRefPtrINS_12SharedBufferEEEPNS_19IDBRecordIdentifierE","__ZN7WebCore18IndexKeyCursorImplD0Ev","__ZNK7WebCore10Comparator7compareERKNS_12LevelDBSliceES3_","__ZNK7WebCore10Comparator4nameEv","__ZN7WebCore22IDBBackingStoreLevelDB21openObjectStoreCursorExRNS_33IDBBackingStoreTransactionLevelDBExxPKNS_11IDBKeyRangeENS_9IndexedDB15CursorDirectionE","__ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIyEENS_7HashMapIxS8_SD_NS_10HashTraitsIxEENSF_IS8_EEE18KeyValuePairTraitsESG_E16lookupForWritingINS_22IdentityHashTranslatorISD_EExEENSt3__14pairIPS9_bEERKT0_","__ZN7WebCore22IDBBackingStoreLevelDB18updateKeyGeneratorERNS_21IDBTransactionBackendExxRKNS_6IDBKeyEb","__ZNK7WebCore15IndexCursorImpl10primaryKeyEv","__ZN7WebCore22IDBBackingStoreLevelDB29removeBackingStoreTransactionEPNS_33IDBBackingStoreTransactionLevelDBE","__ZN7WebCore24ObjectStoreKeyCursorImpl5cloneEv","__ZN7WebCore15IndexCursorImpl5cloneEv","__ZNK3WTF7HashMapIxNS_6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEENS_7IntHashIyEENS_10HashTraitsIxEENSA_IS7_EEE3getERKx","__ZN7WebCore21DefaultLevelDBFactory14destroyLevelDBERKN3WTF6StringE","__ZN3WTF17HashMapTranslatorINS_7HashMapIxN7WebCore16IDBIndexMetadataENS_7IntHashIyEENS_10HashTraitsIxEENS6_IS3_EEE18KeyValuePairTraitsES5_E9translateINS_12KeyValuePairIxS3_EERKxS3_EEvRT_OT0_OT1_","__ZNK7WebCore15IndexCursorImpl16recordIdentifierEv","__ZNK7WebCore28IDBBackingStoreCursorLevelDB10primaryKeyEv","__ZN7WebCore22IDBBackingStoreLevelDB21putIndexDataForRecordERNS_33IDBBackingStoreTransactionLevelDBExxxRKNS_6IDBKeyEPKNS_19IDBRecordIdentifierE","__ZN7WebCore22IDBBackingStoreLevelDB15getObjectStoresExPN3WTF7HashMapIxNS_22IDBObjectStoreMetadataENS1_7IntHashIyEENS1_10HashTraitsIxEENS6_IS3_EEEE","__ZN7WebCore28IDBBackingStoreCursorLevelDBD2Ev","__ZN7WebCore21ObjectStoreCursorImpl14loadCurrentRowEv","__ZN7WebCore22IDBBackingStoreLevelDB24updateIDBDatabaseVersionERNS_33IDBBackingStoreTransactionLevelDBExy","__ZN7WebCore22IDBBackingStoreLevelDB16keyExistsInIndexERNS_33IDBBackingStoreTransactionLevelDBExxxRKNS_6IDBKeyERN3WTF6RefPtrIS3_EERb","__ZN7WebCore22IDBBackingStoreLevelDB10getIndexesExxPN3WTF7HashMapIxNS_16IDBIndexMetadataENS1_7IntHashIyEENS1_10HashTraitsIxEENS6_IS3_EEEE","__ZN7WebCore16IDBIndexMetadataD1Ev","__ZN7WebCore22IDBBackingStoreLevelDB16getDatabaseNamesEv","__ZN7WebCore22IDBBackingStoreLevelDB14deleteDatabaseERKN3WTF6StringENSt3__18functionIFvbEEE","__ZNK7WebCore21ObjectStoreCursorImpl5valueEv","__ZN7WebCore22IDBBackingStoreLevelDB6createERKN3WTF6StringENS1_10PassOwnPtrINS_15LevelDBDatabaseEEENS5_INS_17LevelDBComparatorEEE","__ZNK7WebCore18IndexKeyCursorImpl16recordIdentifierEv","__ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore15IndexCursorImplD0Ev","__ZN7WebCoreL18indexCursorOptionsEPNS_18LevelDBTransactionExxxPKNS_11IDBKeyRangeENS_9IndexedDB15CursorDirectionERNS_28IDBBackingStoreCursorLevelDB13CursorOptionsE","__ZN7WebCore22IDBBackingStoreLevelDBD0Ev","__ZN3WTF6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEaSERKS6_","__ZN7WebCore21ObjectStoreCursorImpl9encodeKeyERKNS_6IDBKeyE","__ZN7WebCore22IDBBackingStoreLevelDB25createIDBDatabaseMetaDataERNS_19IDBDatabaseMetadataE","__ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore33IDBBackingStoreTransactionLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E16lookupForWritingINS_22IdentityHashTranslatorISA_EExEENSt3__14pairIPS6_bEERKT0_","__ZN7WebCore15IndexCursorImpl14loadCurrentRowEv","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_EaSERKSF_","__ZN7WebCore22IDBBackingStoreLevelDB9getRecordERNS_33IDBBackingStoreTransactionLevelDBExxRKNS_6IDBKeyERN3WTF6VectorIcLj0ENS6_15CrashOnOverflowEEE","__ZN7WebCore22IDBBackingStoreLevelDB16makeIndexWritersExxRKNS_22IDBObjectStoreMetadataERNS_6IDBKeyEbRKN3WTF6VectorIxLj0ENS6_15CrashOnOverflowEEERKNS7_INS7_INS6_6RefPtrIS4_EELj0ES8_EELj0ES8_EERNS7_INSC_INS_21IDBIndexWriterLevelDBEEELj0ES8_EEPNS6_6StringERb","__ZN7WebCore22IDBBackingStoreLevelDB12deleteRecordERNS_33IDBBackingStoreTransactionLevelDBExxRKNS_19IDBRecordIdentifierE","__ZN7WebCore22IDBBackingStoreLevelDB11generateKeyERNS_21IDBTransactionBackendExx","__ZN7WebCore22IDBBackingStoreLevelDB4openERKNS_14SecurityOriginERKN3WTF6StringES7_PNS_14LevelDBFactoryE","__ZN7WebCore24ObjectStoreKeyCursorImpl9encodeKeyERKNS_6IDBKeyE","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKxRS3_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_","__ZN7WebCore24ObjectStoreKeyCursorImplD0Ev","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_","__ZNK7WebCore24ObjectStoreKeyCursorImpl5valueEv","__ZNK7WebCore28IDBBackingStoreCursorLevelDB16recordIdentifierEv","__ZN7WebCore18IndexKeyCursorImpl9encodeKeyERKNS_6IDBKeyE","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_","__ZN7WebCore18IndexKeyCursorImpl14loadCurrentRowEv","__ZN7WebCoreL24checkIndexAndMetaDataKeyEPKNS_15LevelDBIteratorERKN3WTF6VectorIcLj0ENS3_15CrashOnOverflowEEExh","__ZN7WebCore22IDBBackingStoreLevelDB33getOrEstablishIDBDatabaseMetadataERKN3WTF6StringENSt3__18functionIFvRKNS_19IDBDatabaseMetadataEbEEE","__ZN7WebCoreL30findGreatestKeyLessThanOrEqualEPNS_18LevelDBTransactionERKN3WTF6VectorIcLj0ENS2_15CrashOnOverflowEEERS5_","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_","__ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore33IDBBackingStoreTransactionLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKxNS_10PassRefPtrIS4_EEEENS_18HashTableAddResultINS_17HashTableIteratorIxS6_S8_SA_SG_SD_EEEEOT0_OT1_","__ZNK7WebCore18IndexKeyCursorImpl5valueEv","__ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEEaSERKS2_","__ZN7WebCore21DefaultLevelDBFactoryD1Ev","__ZN7WebCore22IDBBackingStoreLevelDB22getIDBDatabaseMetaDataERKN3WTF6StringEPNS_19IDBDatabaseMetadataERb","__ZNK7WebCore28IDBBackingStoreCursorLevelDB3keyEv","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore22IDBObjectStoreMetadataaSERKS0_","__ZNK3WTF6String17containsOnlyASCIIEv","__ZN7WebCore22IDBBackingStoreLevelDB21getPrimaryKeyViaIndexERNS_33IDBBackingStoreTransactionLevelDBExxxRKNS_6IDBKeyERN3WTF6RefPtrIS3_EE","__ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE11appendRangeIPKcEEvT_S6_","__ZN7WebCore15IndexCursorImplD1Ev","__ZN7WebCore22IDBBackingStoreLevelDB11deleteIndexERNS_33IDBBackingStoreTransactionLevelDBExxx","_memset","__ZN7WebCoreL31checkObjectStoreAndMetaDataTypeEPKNS_15LevelDBIteratorERKN3WTF6VectorIcLj0ENS3_15CrashOnOverflowEEExx","__ZN7WebCore22IDBBackingStoreLevelDB22keyExistsInObjectStoreERNS_33IDBBackingStoreTransactionLevelDBExxRKNS_6IDBKeyERN3WTF6RefPtrINS_19IDBRecordIdentifierEEE","__ZN7WebCore15IndexCursorImpl9encodeKeyERKNS_6IDBKeyE","__ZN7WebCore21DefaultLevelDBFactoryD0Ev","__ZN7WebCore21ObjectStoreCursorImpl5cloneEv","__ZN7WebCore24ObjectStoreKeyCursorImplD1Ev","__ZN7WebCore22IDBObjectStoreMetadataD1Ev","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore22IDBBackingStoreLevelDB36maybeUpdateKeyGeneratorCurrentNumberERNS_33IDBBackingStoreTransactionLevelDBExxxb","__ZNK7WebCore15IndexCursorImpl5valueEv","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_","__ZN7WebCore10ComparatorD1Ev","__ZN7WebCore22IDBBackingStoreLevelDB18openIndexKeyCursorExRNS_33IDBBackingStoreTransactionLevelDBExxxPKNS_11IDBKeyRangeENS_9IndexedDB15CursorDirectionE","__ZN3WTF6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj","__ZN7WebCore21DefaultLevelDBFactory11openLevelDBERKN3WTF6StringEPKNS_17LevelDBComparatorE","__ZN7WebCore22IDBBackingStoreLevelDBD2Ev","__ZN7WebCore22IDBBackingStoreLevelDB28getKeyGeneratorCurrentNumberERNS_33IDBBackingStoreTransactionLevelDBExxRx","__ZN7WebCore22IDBBackingStoreLevelDB14findKeyInIndexERNS_33IDBBackingStoreTransactionLevelDBExxxRKNS_6IDBKeyERN3WTF6VectorIcLj0ENS6_15CrashOnOverflowEEERb","__ZN7WebCore16IDBIndexMetadataaSERKS0_","__ZN7WebCore22IDBBackingStoreLevelDB16clearObjectStoreERNS_33IDBBackingStoreTransactionLevelDBExx","__ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j","__ZN7WebCore21ObjectStoreCursorImplD0Ev","__ZN7WebCore22IDBBackingStoreLevelDB12openInMemoryERKN3WTF6StringE","__ZN7WebCore22IDBBackingStoreLevelDB4openERKNS_14SecurityOriginERKN3WTF6StringES7_","__ZN7WebCore24ObjectStoreKeyCursorImpl14loadCurrentRowEv","__ZN7WebCore22IDBBackingStoreLevelDB15openIndexCursorExRNS_33IDBBackingStoreTransactionLevelDBExxxPKNS_11IDBKeyRangeENS_9IndexedDB15CursorDirectionE","__ZN7WebCore22IDBBackingStoreLevelDB24openObjectStoreKeyCursorExRNS_33IDBBackingStoreTransactionLevelDBExxPKNS_11IDBKeyRangeENS_9IndexedDB15CursorDirectionE","__ZN7WebCore22IDBBackingStoreLevelDB11createIndexERNS_33IDBBackingStoreTransactionLevelDBExxxRKN3WTF6StringERKNS_10IDBKeyPathEbb","__ZN7WebCore22IDBBackingStoreLevelDB16compareIndexKeysERKNS_12LevelDBSliceES3_","__ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore33IDBBackingStoreTransactionLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_","__ZN3WTF6VectorINS_6RefPtrIN7WebCore21IDBIndexWriterLevelDBEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIyEENS_7HashMapIxS8_SD_NS_10HashTraitsIxEENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKxRKS8_EENS_18HashTableAddResultINS_17HashTableIteratorIxS9_SB_SD_SJ_SG_EEEEOT0_OT1_","__ZN7WebCore18IndexKeyCursorImplD1Ev","__ZN7WebCore22IDBBackingStoreLevelDB17deleteObjectStoreERNS_33IDBBackingStoreTransactionLevelDBExx","_memmove","__ZN7WebCore22IDBBackingStoreLevelDB12openInMemoryERKN3WTF6StringEPNS_14LevelDBFactoryE","__ZN7WebCore10ComparatorD0Ev","__ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIyEENS_7HashMapIxS8_SD_NS_10HashTraitsIxEENSF_IS8_EEE18KeyValuePairTraitsESG_E8reinsertEOS9_","__ZN7WebCore22IDBBackingStoreLevelDBC2ERKN3WTF6StringENS1_10PassOwnPtrINS_15LevelDBDatabaseEEENS5_INS_17LevelDBComparatorEEE","__ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIyEENS_7HashMapIxS8_SD_NS_10HashTraitsIxEENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_","__ZNK7WebCore18IndexKeyCursorImpl10primaryKeyEv","__ZN7WebCore22IDBBackingStoreLevelDB17createObjectStoreERNS_33IDBBackingStoreTransactionLevelDBExxRKN3WTF6StringERKNS_10IDBKeyPathEb","_i64Add","_i64Subtract","_bitshift64Shl","_bitshift64Lshr","_bitshift64Ashr","_llvm_ctlz_i32","_llvm_cttz_i32"]
