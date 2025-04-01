// src/components/navbar/navbar.tsx
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_destructuring_empty(o) {
    if (o === null || o === void 0) throw new TypeError("Cannot destructure " + o);
    return o;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import { useState as useState2, useEffect as useEffect2, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { PenLine, Phone, Menu, Sofa, Camera, ChevronDown, LogOut } from "lucide-react";
// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return twMerge(clsx(inputs));
}
function formatDateTime(date) {
    if (!date) return "N/A";
    var d = typeof date === "string" ? new Date(date) : date;
    return d.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });
}
// src/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { jsx } from "react/jsx-runtime";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
var Button = React.forwardRef(function(_param, ref) {
    var className = _param.className, variant = _param.variant, size = _param.size, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size",
        "asChild"
    ]);
    var Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, _object_spread({
        className: cn(buttonVariants({
            variant: variant,
            size: size,
            className: className
        })),
        ref: ref
    }, props));
});
Button.displayName = "Button";
// src/components/ui/sheet.tsx
import * as React2 from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva as cva2 } from "class-variance-authority";
import { X } from "lucide-react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Sheet = SheetPrimitive.Root;
var SheetTrigger = SheetPrimitive.Trigger;
var SheetClose = SheetPrimitive.Close;
var SheetPortal = SheetPrimitive.Portal;
var SheetOverlay = React2.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx2(SheetPrimitive.Overlay, _object_spread_props(_object_spread({
        className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)
    }, props), {
        ref: ref
    }));
});
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
var sheetVariants = cva2("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
});
var SheetContent = React2.forwardRef(function(_param, ref) {
    var _param_side = _param.side, side = _param_side === void 0 ? "right" : _param_side, className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "side",
        "className",
        "children"
    ]);
    return /* @__PURE__ */ jsxs(SheetPortal, {
        children: [
            /* @__PURE__ */ jsx2(SheetOverlay, {}),
            /* @__PURE__ */ jsxs(SheetPrimitive.Content, _object_spread_props(_object_spread({
                ref: ref,
                className: cn(sheetVariants({
                    side: side
                }), className)
            }, props), {
                children: [
                    /* @__PURE__ */ jsxs(SheetPrimitive.Close, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [
                            /* @__PURE__ */ jsx2(X, {
                                className: "h-4 w-4"
                            }),
                            /* @__PURE__ */ jsx2("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    }),
                    children
                ]
            }))
        ]
    });
});
SheetContent.displayName = SheetPrimitive.Content.displayName;
var SheetHeader = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx2("div", _object_spread({
        className: cn("flex flex-col space-y-2 text-center sm:text-left", className)
    }, props));
};
SheetHeader.displayName = "SheetHeader";
var SheetFooter = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx2("div", _object_spread({
        className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)
    }, props));
};
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React2.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx2(SheetPrimitive.Title, _object_spread({
        ref: ref,
        className: cn("text-lg font-semibold text-foreground", className)
    }, props));
});
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React2.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx2(SheetPrimitive.Description, _object_spread({
        ref: ref,
        className: cn("text-sm text-muted-foreground", className)
    }, props));
});
SheetDescription.displayName = SheetPrimitive.Description.displayName;
// src/components/navbar/theme-toggle.tsx
import * as React4 from "react";
import { Moon, Sun, Monitor, Check as Check2 } from "lucide-react";
import { useTheme } from "next-themes";
// src/components/ui/dropdown-menu.tsx
import * as React3 from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React3.forwardRef(function(_param, ref) {
    var className = _param.className, inset = _param.inset, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "inset",
        "children"
    ]);
    return /* @__PURE__ */ jsxs2(DropdownMenuPrimitive.SubTrigger, _object_spread_props(_object_spread({
        ref: ref,
        className: cn("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className)
    }, props), {
        children: [
            children,
            /* @__PURE__ */ jsx3(ChevronRight, {
                className: "ml-auto"
            })
        ]
    }));
});
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React3.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx3(DropdownMenuPrimitive.SubContent, _object_spread({
        ref: ref,
        className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)
    }, props));
});
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React3.forwardRef(function(_param, ref) {
    var className = _param.className, _param_sideOffset = _param.sideOffset, sideOffset = _param_sideOffset === void 0 ? 4 : _param_sideOffset, props = _object_without_properties(_param, [
        "className",
        "sideOffset"
    ]);
    return /* @__PURE__ */ jsx3(DropdownMenuPrimitive.Portal, {
        children: /* @__PURE__ */ jsx3(DropdownMenuPrimitive.Content, _object_spread({
            ref: ref,
            sideOffset: sideOffset,
            className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)
        }, props))
    });
});
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React3.forwardRef(function(_param, ref) {
    var className = _param.className, inset = _param.inset, props = _object_without_properties(_param, [
        "className",
        "inset"
    ]);
    return /* @__PURE__ */ jsx3(DropdownMenuPrimitive.Item, _object_spread({
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className)
    }, props));
});
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React3.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, checked = _param.checked, props = _object_without_properties(_param, [
        "className",
        "children",
        "checked"
    ]);
    return /* @__PURE__ */ jsxs2(DropdownMenuPrimitive.CheckboxItem, _object_spread_props(_object_spread({
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked
    }, props), {
        children: [
            /* @__PURE__ */ jsx3("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /* @__PURE__ */ jsx3(DropdownMenuPrimitive.ItemIndicator, {
                    children: /* @__PURE__ */ jsx3(Check, {
                        className: "h-4 w-4"
                    })
                })
            }),
            children
        ]
    }));
});
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React3.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ jsxs2(DropdownMenuPrimitive.RadioItem, _object_spread_props(_object_spread({
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
    }, props), {
        children: [
            /* @__PURE__ */ jsx3("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /* @__PURE__ */ jsx3(DropdownMenuPrimitive.ItemIndicator, {
                    children: /* @__PURE__ */ jsx3(Circle, {
                        className: "h-2 w-2 fill-current"
                    })
                })
            }),
            children
        ]
    }));
});
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React3.forwardRef(function(_param, ref) {
    var className = _param.className, inset = _param.inset, props = _object_without_properties(_param, [
        "className",
        "inset"
    ]);
    return /* @__PURE__ */ jsx3(DropdownMenuPrimitive.Label, _object_spread({
        ref: ref,
        className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)
    }, props));
});
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React3.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx3(DropdownMenuPrimitive.Separator, _object_spread({
        ref: ref,
        className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props));
});
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx3("span", _object_spread({
        className: cn("ml-auto text-xs tracking-widest opacity-60", className)
    }, props));
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
// src/components/navbar/theme-toggle.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function ThemeToggle(param) {
    var className = param.className, _param_collapsed = param.collapsed, collapsed = _param_collapsed === void 0 ? false : _param_collapsed;
    var _useTheme = useTheme(), theme = _useTheme.theme, setTheme = _useTheme.setTheme;
    var _React4_useState = _sliced_to_array(React4.useState(false), 2), mounted = _React4_useState[0], setMounted = _React4_useState[1];
    React4.useEffect(function() {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    var Icon = theme === "dark" ? Moon : theme === "system" ? Monitor : Sun;
    return /* @__PURE__ */ jsxs3(DropdownMenu, {
        children: [
            /* @__PURE__ */ jsx4(DropdownMenuTrigger, {
                asChild: true,
                children: collapsed ? /* @__PURE__ */ jsx4(Button, {
                    variant: "ghost",
                    size: "sm",
                    className: "flex justify-center",
                    children: /* @__PURE__ */ jsx4(Icon, {
                        className: "h-4 w-4"
                    })
                }) : /* @__PURE__ */ jsxs3(Button, {
                    variant: "ghost",
                    size: "sm",
                    className: className,
                    children: [
                        /* @__PURE__ */ jsx4(Icon, {
                            className: "h-[1.2rem] w-[1.2rem]"
                        }),
                        /* @__PURE__ */ jsx4("span", {
                            className: "ml-2",
                            children: "Theme"
                        })
                    ]
                })
            }),
            /* @__PURE__ */ jsxs3(DropdownMenuContent, {
                align: "end",
                children: [
                    /* @__PURE__ */ jsxs3(DropdownMenuItem, {
                        onClick: function() {
                            return setTheme("light");
                        },
                        children: [
                            /* @__PURE__ */ jsx4(Sun, {
                                className: "mr-2 h-4 w-4"
                            }),
                            /* @__PURE__ */ jsx4("span", {
                                children: "Light"
                            }),
                            theme === "light" && /* @__PURE__ */ jsx4(Check2, {
                                className: "ml-2 h-4 w-4"
                            })
                        ]
                    }),
                    /* @__PURE__ */ jsxs3(DropdownMenuItem, {
                        onClick: function() {
                            return setTheme("dark");
                        },
                        children: [
                            /* @__PURE__ */ jsx4(Moon, {
                                className: "mr-2 h-4 w-4"
                            }),
                            /* @__PURE__ */ jsx4("span", {
                                children: "Dark"
                            }),
                            theme === "dark" && /* @__PURE__ */ jsx4(Check2, {
                                className: "ml-2 h-4 w-4"
                            })
                        ]
                    }),
                    /* @__PURE__ */ jsxs3(DropdownMenuItem, {
                        onClick: function() {
                            return setTheme("system");
                        },
                        children: [
                            /* @__PURE__ */ jsx4(Monitor, {
                                className: "mr-2 h-4 w-4"
                            }),
                            /* @__PURE__ */ jsx4("span", {
                                children: "System"
                            }),
                            theme === "system" && /* @__PURE__ */ jsx4(Check2, {
                                className: "ml-2 h-4 w-4"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
// src/components/navbar/navbar.tsx
import { useTheme as useTheme2 } from "next-themes";
import Image from "next/image";
import { Fragment, jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function Navbar(param) {
    var onSelectPrompt = param.onSelectPrompt, onWriteClick = param.onWriteClick, _param_logoLight = param.logoLight, logoLight = _param_logoLight === void 0 ? "/REVA - dark.svg" : _param_logoLight, _param_logoDark = param.logoDark, logoDark = _param_logoDark === void 0 ? "/reVA.svg" : _param_logoDark, _param_navItems = param.navItems, navItems = _param_navItems === void 0 ? [
        {
            href: "/",
            label: "Home"
        },
        {
            href: "/about",
            label: "About"
        },
        {
            href: "/services",
            label: "Services"
        },
        {
            href: "/contact",
            label: "Contact"
        }
    ] : _param_navItems, actionButtons = param.actionButtons, promptMenuComponent = param.promptMenuComponent;
    var _useState2 = _sliced_to_array(useState2(false), 2), isScrolled = _useState2[0], setIsScrolled = _useState2[1];
    var _useState21 = _sliced_to_array(useState2(false), 2), isPromptMenuOpen = _useState21[0], setIsPromptMenuOpen = _useState21[1];
    var _useState22 = _sliced_to_array(useState2(false), 2), isLoggedIn = _useState22[0], setIsLoggedIn = _useState22[1];
    var theme = useTheme2().theme;
    var promptMenuRef = useRef(null);
    var pathname = usePathname();
    useEffect2(function() {
        var handleScroll = function() {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return function() {
            return window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect2(function() {
        var handleClickOutside = function(event) {
            if (promptMenuRef.current && !promptMenuRef.current.contains(event.target)) {
                setIsPromptMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function() {
            return document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    var handlePromptSelect = function(prompt) {
        if (onSelectPrompt) {
            onSelectPrompt(prompt);
            setIsPromptMenuOpen(false);
        }
    };
    var handleAuthClick = function() {
        setIsLoggedIn(!isLoggedIn);
    };
    return /* @__PURE__ */ jsx5("header", {
        className: cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-background/80 backdrop-blur-lg border-b shadow-sm" : "bg-transparent"),
        children: /* @__PURE__ */ jsx5("div", {
            className: "px-4 pr-8",
            children: /* @__PURE__ */ jsxs4("div", {
                className: "flex h-16 items-center justify-between",
                children: [
                    /* @__PURE__ */ jsx5(Link, {
                        href: "/",
                        className: "flex items-center space-x-2",
                        children: theme === "light" ? /* @__PURE__ */ jsx5(Image, {
                            src: logoLight,
                            alt: "Logo",
                            width: 100,
                            height: 50
                        }) : /* @__PURE__ */ jsx5(Image, {
                            src: logoDark,
                            alt: "Logo",
                            width: 100,
                            height: 50
                        })
                    }),
                    /* @__PURE__ */ jsxs4("div", {
                        className: "hidden md:flex items-center space-x-1",
                        children: [
                            navItems.map(function(item) {
                                return /* @__PURE__ */ jsx5(NavItem, {
                                    href: item.href,
                                    isActive: pathname === item.href,
                                    children: item.label
                                }, item.href);
                            }),
                            promptMenuComponent && /* @__PURE__ */ jsxs4("div", {
                                ref: promptMenuRef,
                                className: "relative",
                                children: [
                                    /* @__PURE__ */ jsxs4("button", {
                                        className: cn("relative px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center", isPromptMenuOpen ? "text-primary" : "text-foreground/70 hover:text-foreground hover:bg-accent"),
                                        onClick: function() {
                                            return setIsPromptMenuOpen(!isPromptMenuOpen);
                                        },
                                        onMouseEnter: function() {
                                            return setIsPromptMenuOpen(true);
                                        },
                                        children: [
                                            "GPT Prompts",
                                            /* @__PURE__ */ jsx5(ChevronDown, {
                                                className: "ml-1 h-4 w-4"
                                            })
                                        ]
                                    }),
                                    isPromptMenuOpen && promptMenuComponent
                                ]
                            })
                        ]
                    }),
                    /* @__PURE__ */ jsxs4("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            actionButtons || /* @__PURE__ */ jsxs4(Fragment, {
                                children: [
                                    /* @__PURE__ */ jsxs4(Button, {
                                        variant: "outline",
                                        size: "icon",
                                        onClick: onWriteClick,
                                        className: "hidden md:flex relative group",
                                        "data-write-button": "true",
                                        children: [
                                            /* @__PURE__ */ jsx5(PenLine, {
                                                className: "h-5 w-5"
                                            }),
                                            /* @__PURE__ */ jsx5("span", {
                                                className: "sr-only",
                                                children: "Write"
                                            }),
                                            /* @__PURE__ */ jsx5("span", {
                                                className: "absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg",
                                                children: "Prompt Library"
                                            })
                                        ]
                                    }),
                                    /* @__PURE__ */ jsxs4(Button, {
                                        variant: "outline",
                                        size: "icon",
                                        className: "relative group",
                                        children: [
                                            /* @__PURE__ */ jsx5(Phone, {
                                                className: "h-5 w-5"
                                            }),
                                            /* @__PURE__ */ jsx5("span", {
                                                className: "sr-only",
                                                children: "Lead Calling"
                                            }),
                                            /* @__PURE__ */ jsx5("span", {
                                                className: "absolute -top-2 -right-2 w-4 h-4 bg-destructive rounded-full flex items-center justify-center text-[10px] text-destructive-foreground",
                                                children: "3"
                                            }),
                                            /* @__PURE__ */ jsx5("span", {
                                                className: "absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg",
                                                children: "Lead Calling"
                                            })
                                        ]
                                    }),
                                    /* @__PURE__ */ jsxs4(Button, {
                                        variant: "outline",
                                        size: "icon",
                                        className: "relative group",
                                        children: [
                                            /* @__PURE__ */ jsx5(Sofa, {
                                                className: "h-5 w-5"
                                            }),
                                            /* @__PURE__ */ jsx5("span", {
                                                className: "sr-only",
                                                children: "Virtual Staging"
                                            }),
                                            /* @__PURE__ */ jsx5("span", {
                                                className: "absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg",
                                                children: "Virtual Staging"
                                            })
                                        ]
                                    }),
                                    /* @__PURE__ */ jsxs4(Button, {
                                        variant: "outline",
                                        size: "icon",
                                        className: "relative group",
                                        children: [
                                            /* @__PURE__ */ jsx5(Camera, {
                                                className: "h-5 w-5"
                                            }),
                                            /* @__PURE__ */ jsx5("span", {
                                                className: "sr-only",
                                                children: "Headshots"
                                            }),
                                            /* @__PURE__ */ jsx5("span", {
                                                className: "absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg",
                                                children: "Headshots"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /* @__PURE__ */ jsxs4("div", {
                                className: "flex pl-8",
                                children: [
                                    /* @__PURE__ */ jsx5(ThemeToggle, {
                                        className: "w-full justify-start",
                                        collapsed: true
                                    }),
                                    /* @__PURE__ */ jsx5(Button, {
                                        variant: "default",
                                        size: "sm",
                                        className: "ml-2 hidden sm:flex items-center gap-1.5",
                                        onClick: handleAuthClick,
                                        children: /* @__PURE__ */ jsxs4(Fragment, {
                                            children: [
                                                /* @__PURE__ */ jsx5(LogOut, {
                                                    className: "h-4 w-4"
                                                }),
                                                /* @__PURE__ */ jsx5("span", {
                                                    children: "Log Out"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /* @__PURE__ */ jsx5("div", {
                                className: "md:hidden",
                                children: /* @__PURE__ */ jsxs4(Sheet, {
                                    children: [
                                        /* @__PURE__ */ jsx5(SheetTrigger, {
                                            asChild: true,
                                            children: /* @__PURE__ */ jsxs4(Button, {
                                                variant: "ghost",
                                                size: "icon",
                                                children: [
                                                    /* @__PURE__ */ jsx5(Menu, {
                                                        className: "h-5 w-5"
                                                    }),
                                                    /* @__PURE__ */ jsx5("span", {
                                                        className: "sr-only",
                                                        children: "Menu"
                                                    })
                                                ]
                                            })
                                        }),
                                        /* @__PURE__ */ jsxs4(SheetContent, {
                                            side: "right",
                                            className: "w-[300px] sm:w-[400px]",
                                            children: [
                                                /* @__PURE__ */ jsxs4(SheetHeader, {
                                                    children: [
                                                        /* @__PURE__ */ jsx5(SheetTitle, {
                                                            children: "Menu"
                                                        }),
                                                        /* @__PURE__ */ jsx5(SheetDescription, {
                                                            children: "Navigate to different sections of the site."
                                                        })
                                                    ]
                                                }),
                                                /* @__PURE__ */ jsxs4("div", {
                                                    className: "py-6 space-y-4",
                                                    children: [
                                                        /* @__PURE__ */ jsxs4(Button, {
                                                            variant: "outline",
                                                            className: "w-full justify-start gap-2",
                                                            onClick: onWriteClick,
                                                            "data-write-button": "true",
                                                            children: [
                                                                /* @__PURE__ */ jsx5(PenLine, {
                                                                    className: "h-4 w-4"
                                                                }),
                                                                "Prompt Library"
                                                            ]
                                                        }),
                                                        /* @__PURE__ */ jsxs4("nav", {
                                                            className: "flex flex-col space-y-1",
                                                            children: [
                                                                navItems.map(function(item) {
                                                                    return /* @__PURE__ */ jsx5(MobileNavItem, {
                                                                        href: item.href,
                                                                        isActive: pathname === item.href,
                                                                        children: item.label
                                                                    }, item.href);
                                                                }),
                                                                promptMenuComponent && /* @__PURE__ */ jsx5(MobileNavItem, {
                                                                    href: "/gpt-prompts",
                                                                    isActive: pathname === "/gpt-prompts",
                                                                    children: "GPT Prompts"
                                                                })
                                                            ]
                                                        }),
                                                        /* @__PURE__ */ jsx5("div", {
                                                            className: "pt-4 border-t",
                                                            children: /* @__PURE__ */ jsxs4(Button, {
                                                                variant: "default",
                                                                className: "w-full flex items-center justify-center gap-1.5",
                                                                onClick: handleAuthClick,
                                                                children: [
                                                                    /* @__PURE__ */ jsx5(ThemeToggle, {
                                                                        className: "w-full justify-start",
                                                                        collapsed: true
                                                                    }),
                                                                    /* @__PURE__ */ jsxs4(Fragment, {
                                                                        children: [
                                                                            /* @__PURE__ */ jsx5(LogOut, {
                                                                                className: "h-4 w-4"
                                                                            }),
                                                                            /* @__PURE__ */ jsx5("span", {
                                                                                children: "Log Out"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
function NavItem(param) {
    var href = param.href, isActive = param.isActive, children = param.children;
    return /* @__PURE__ */ jsxs4(Link, {
        href: href,
        className: cn("relative px-3 py-2 rounded-md text-sm font-medium transition-colors", isActive ? "text-primary" : "text-foreground/70 hover:text-foreground hover:bg-accent"),
        children: [
            children,
            isActive && /* @__PURE__ */ jsx5(motion.div, {
                className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary",
                layoutId: "navbar-indicator",
                transition: {
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.6
                }
            })
        ]
    });
}
function MobileNavItem(param) {
    var href = param.href, isActive = param.isActive, children = param.children;
    return /* @__PURE__ */ jsx5(Link, {
        href: href,
        className: cn("flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors", isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"),
        children: children
    });
}
// src/components/navbar/navbar-wrapper.tsx
import { useState as useState3 } from "react";
import { Fragment as Fragment2, jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function NavbarWrapper(param) {
    var logoLight = param.logoLight, logoDark = param.logoDark, navItems = param.navItems, actionButtons = param.actionButtons, promptModalComponent = param.promptModalComponent, promptMenuComponent = param.promptMenuComponent;
    var _useState3 = _sliced_to_array(useState3(false), 2), isPromptModalOpen = _useState3[0], setPromptModalOpen = _useState3[1];
    return /* @__PURE__ */ jsxs5(Fragment2, {
        children: [
            /* @__PURE__ */ jsx6(Navbar, {
                onWriteClick: function() {
                    return setPromptModalOpen(true);
                },
                logoLight: logoLight,
                logoDark: logoDark,
                navItems: navItems,
                actionButtons: actionButtons,
                promptMenuComponent: promptMenuComponent
            }),
            promptModalComponent && /* @__PURE__ */ jsx6("div", {
                className: isPromptModalOpen ? "block" : "hidden",
                children: promptModalComponent
            })
        ]
    });
}
// src/components/sidebar/sidebar-left.tsx
import Image2 from "next/image";
// src/components/ui/sidebar.tsx
import * as React9 from "react";
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { cva as cva3 } from "class-variance-authority";
// src/components/ui/input.tsx
import * as React5 from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var Input = React5.forwardRef(function(_param, ref) {
    var className = _param.className, type = _param.type, props = _object_without_properties(_param, [
        "className",
        "type"
    ]);
    return /* @__PURE__ */ jsx7("input", _object_spread({
        type: type,
        className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref
    }, props));
});
Input.displayName = "Input";
// src/components/ui/separator.tsx
import * as React6 from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { jsx as jsx8 } from "react/jsx-runtime";
var Separator2 = React6.forwardRef(function(_param, ref) {
    var className = _param.className, _param_orientation = _param.orientation, orientation = _param_orientation === void 0 ? "horizontal" : _param_orientation, _param_decorative = _param.decorative, decorative = _param_decorative === void 0 ? true : _param_decorative, props = _object_without_properties(_param, [
        "className",
        "orientation",
        "decorative"
    ]);
    return /* @__PURE__ */ jsx8(SeparatorPrimitive.Root, _object_spread({
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className)
    }, props));
});
Separator2.displayName = SeparatorPrimitive.Root.displayName;
// src/components/ui/skeleton.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
function Skeleton(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx9("div", _object_spread({
        className: cn("animate-pulse rounded-md bg-primary/10", className)
    }, props));
}
// src/components/ui/tooltip.tsx
import * as React7 from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { jsx as jsx10 } from "react/jsx-runtime";
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React7.forwardRef(function(_param, ref) {
    var className = _param.className, _param_sideOffset = _param.sideOffset, sideOffset = _param_sideOffset === void 0 ? 4 : _param_sideOffset, props = _object_without_properties(_param, [
        "className",
        "sideOffset"
    ]);
    return /* @__PURE__ */ jsx10(TooltipPrimitive.Portal, {
        children: /* @__PURE__ */ jsx10(TooltipPrimitive.Content, _object_spread({
            ref: ref,
            sideOffset: sideOffset,
            className: cn("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)
        }, props))
    });
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
// src/components/ui/sidebar.tsx
import { ViewVerticalIcon } from "@radix-ui/react-icons";
// src/hooks/use-mobile.tsx
import * as React8 from "react";
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    var _React8_useState = _sliced_to_array(React8.useState(void 0), 2), isMobile = _React8_useState[0], setIsMobile = _React8_useState[1];
    React8.useEffect(function() {
        var mql = window.matchMedia("(max-width: ".concat(MOBILE_BREAKPOINT - 1, "px)"));
        var onChange = function() {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener("change", onChange);
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        return function() {
            return mql.removeEventListener("change", onChange);
        };
    }, []);
    return !!isMobile;
}
// src/components/ui/sidebar.tsx
import { jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React9.createContext(null);
function useSidebar() {
    var context = React9.useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider.");
    }
    return context;
}
var SidebarProvider = React9.forwardRef(function(_param, ref) {
    var _param_defaultOpen = _param.defaultOpen, defaultOpen = _param_defaultOpen === void 0 ? true : _param_defaultOpen, openProp = _param.open, setOpenProp = _param.onOpenChange, className = _param.className, style = _param.style, children = _param.children, props = _object_without_properties(_param, [
        "defaultOpen",
        "open",
        "onOpenChange",
        "className",
        "style",
        "children"
    ]);
    var isMobile = useIsMobile();
    var _React9_useState = _sliced_to_array(React9.useState(false), 2), openMobile = _React9_useState[0], setOpenMobile = _React9_useState[1];
    var _React9_useState1 = _sliced_to_array(React9.useState(defaultOpen), 2), _open = _React9_useState1[0], _setOpen = _React9_useState1[1];
    var open = openProp !== null && openProp !== void 0 ? openProp : _open;
    var setOpen = React9.useCallback(function(value) {
        var openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
            setOpenProp(openState);
        } else {
            _setOpen(openState);
        }
        document.cookie = "".concat(SIDEBAR_COOKIE_NAME, "=").concat(openState, "; path=/; max-age=").concat(SIDEBAR_COOKIE_MAX_AGE);
    }, [
        setOpenProp,
        open
    ]);
    var toggleSidebar = React9.useCallback(function() {
        return isMobile ? setOpenMobile(function(open2) {
            return !open2;
        }) : setOpen(function(open2) {
            return !open2;
        });
    }, [
        isMobile,
        setOpen,
        setOpenMobile
    ]);
    React9.useEffect(function() {
        var handleKeyDown = function(event) {
            if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                toggleSidebar();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return function() {
            return window.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        toggleSidebar
    ]);
    var state = open ? "expanded" : "collapsed";
    var contextValue = React9.useMemo(function() {
        return {
            state: state,
            open: open,
            setOpen: setOpen,
            isMobile: isMobile,
            openMobile: openMobile,
            setOpenMobile: setOpenMobile,
            toggleSidebar: toggleSidebar
        };
    }, [
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar
    ]);
    return /* @__PURE__ */ jsx11(SidebarContext.Provider, {
        value: contextValue,
        children: /* @__PURE__ */ jsx11(TooltipProvider, {
            delayDuration: 0,
            children: /* @__PURE__ */ jsx11("div", _object_spread_props(_object_spread({
                style: _object_spread({
                    "--sidebar-width": SIDEBAR_WIDTH,
                    "--sidebar-width-icon": SIDEBAR_WIDTH_ICON
                }, style),
                className: cn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className),
                ref: ref
            }, props), {
                children: children
            }))
        })
    });
});
SidebarProvider.displayName = "SidebarProvider";
var Sidebar = React9.forwardRef(function(_param, ref) {
    var _param_side = _param.side, side = _param_side === void 0 ? "left" : _param_side, _param_variant = _param.variant, variant = _param_variant === void 0 ? "sidebar" : _param_variant, _param_collapsible = _param.collapsible, collapsible = _param_collapsible === void 0 ? "offcanvas" : _param_collapsible, className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "side",
        "variant",
        "collapsible",
        "className",
        "children"
    ]);
    var _useSidebar = useSidebar(), isMobile = _useSidebar.isMobile, state = _useSidebar.state, openMobile = _useSidebar.openMobile, setOpenMobile = _useSidebar.setOpenMobile;
    if (collapsible === "none") {
        return /* @__PURE__ */ jsx11("div", _object_spread_props(_object_spread({
            className: cn("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className),
            ref: ref
        }, props), {
            children: children
        }));
    }
    if (isMobile) {
        return /* @__PURE__ */ jsx11(Sheet, _object_spread_props(_object_spread({
            open: openMobile,
            onOpenChange: setOpenMobile
        }, props), {
            children: /* @__PURE__ */ jsxs6(SheetContent, {
                "data-sidebar": "sidebar",
                "data-mobile": "true",
                className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
                style: {
                    "--sidebar-width": SIDEBAR_WIDTH_MOBILE
                },
                side: side,
                children: [
                    /* @__PURE__ */ jsxs6(SheetHeader, {
                        className: "sr-only",
                        children: [
                            /* @__PURE__ */ jsx11(SheetTitle, {
                                children: "Sidebar"
                            }),
                            /* @__PURE__ */ jsx11(SheetDescription, {
                                children: "Displays the mobile sidebar."
                            })
                        ]
                    }),
                    /* @__PURE__ */ jsx11("div", {
                        className: "flex h-full w-full flex-col",
                        children: children
                    })
                ]
            })
        }));
    }
    return /* @__PURE__ */ jsxs6("div", {
        ref: ref,
        className: "group peer hidden text-sidebar-foreground md:block",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        children: [
            /* @__PURE__ */ jsx11("div", {
                className: cn("relative w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]")
            }),
            /* @__PURE__ */ jsx11("div", _object_spread_props(_object_spread({
                className: cn("fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex", side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l", className)
            }, props), {
                children: /* @__PURE__ */ jsx11("div", {
                    "data-sidebar": "sidebar",
                    className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                    children: children
                })
            }))
        ]
    });
});
Sidebar.displayName = "Sidebar";
var SidebarTrigger = React9.forwardRef(function(_param, ref) {
    var className = _param.className, onClick = _param.onClick, props = _object_without_properties(_param, [
        "className",
        "onClick"
    ]);
    var toggleSidebar = useSidebar().toggleSidebar;
    return /* @__PURE__ */ jsxs6(Button, _object_spread_props(_object_spread({
        ref: ref,
        "data-sidebar": "trigger",
        variant: "ghost",
        size: "icon",
        className: cn("h-7 w-7", className),
        onClick: function(event) {
            onClick === null || onClick === void 0 ? void 0 : onClick(event);
            toggleSidebar();
        }
    }, props), {
        children: [
            /* @__PURE__ */ jsx11(ViewVerticalIcon, {}),
            /* @__PURE__ */ jsx11("span", {
                className: "sr-only",
                children: "Toggle Sidebar"
            })
        ]
    }));
});
SidebarTrigger.displayName = "SidebarTrigger";
var SidebarRail = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    var toggleSidebar = useSidebar().toggleSidebar;
    return /* @__PURE__ */ jsx11("button", _object_spread({
        ref: ref,
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: toggleSidebar,
        title: "Toggle Sidebar",
        className: cn("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex", "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className)
    }, props));
});
SidebarRail.displayName = "SidebarRail";
var SidebarInset = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx11("main", _object_spread({
        ref: ref,
        className: cn("relative flex w-full flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow", className)
    }, props));
});
SidebarInset.displayName = "SidebarInset";
var SidebarInput = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx11(Input, _object_spread({
        ref: ref,
        "data-sidebar": "input",
        className: cn("h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring", className)
    }, props));
});
SidebarInput.displayName = "SidebarInput";
var SidebarHeader = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx11("div", _object_spread({
        ref: ref,
        "data-sidebar": "header",
        className: cn("flex flex-col gap-2 p-2", className)
    }, props));
});
SidebarHeader.displayName = "SidebarHeader";
var SidebarFooter = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx11("div", _object_spread({
        ref: ref,
        "data-sidebar": "footer",
        className: cn("flex flex-col gap-2 p-2", className)
    }, props));
});
SidebarFooter.displayName = "SidebarFooter";
var SidebarSeparator = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx11(Separator2, _object_spread({
        ref: ref,
        "data-sidebar": "separator",
        className: cn("mx-2 w-auto bg-sidebar-border", className)
    }, props));
});
SidebarSeparator.displayName = "SidebarSeparator";
var SidebarContent = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx11("div", _object_spread({
        ref: ref,
        "data-sidebar": "content",
        className: cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className)
    }, props));
});
SidebarContent.displayName = "SidebarContent";
var SidebarGroup = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx11("div", _object_spread({
        ref: ref,
        "data-sidebar": "group",
        className: cn("relative flex w-full min-w-0 flex-col p-2", className)
    }, props));
});
SidebarGroup.displayName = "SidebarGroup";
var SidebarGroupLabel = React9.forwardRef(function(_param, ref) {
    var className = _param.className, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, props = _object_without_properties(_param, [
        "className",
        "asChild"
    ]);
    var Comp = asChild ? Slot2 : "div";
    return /* @__PURE__ */ jsx11(Comp, _object_spread({
        ref: ref,
        "data-sidebar": "group-label",
        className: cn("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className)
    }, props));
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
var SidebarGroupAction = React9.forwardRef(function(_param, ref) {
    var className = _param.className, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, props = _object_without_properties(_param, [
        "className",
        "asChild"
    ]);
    var Comp = asChild ? Slot2 : "button";
    return /* @__PURE__ */ jsx11(Comp, _object_spread({
        ref: ref,
        "data-sidebar": "group-action",
        className: cn("absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden", "group-data-[collapsible=icon]:hidden", className)
    }, props));
});
SidebarGroupAction.displayName = "SidebarGroupAction";
var SidebarGroupContent = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx11("div", _object_spread({
        ref: ref,
        "data-sidebar": "group-content",
        className: cn("w-full text-sm", className)
    }, props));
});
SidebarGroupContent.displayName = "SidebarGroupContent";
var SidebarMenu = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx11("ul", _object_spread({
        ref: ref,
        "data-sidebar": "menu",
        className: cn("flex w-full min-w-0 flex-col gap-1", className)
    }, props));
});
SidebarMenu.displayName = "SidebarMenu";
var SidebarMenuItem = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx11("li", _object_spread({
        ref: ref,
        "data-sidebar": "menu-item",
        className: cn("group/menu-item relative", className)
    }, props));
});
SidebarMenuItem.displayName = "SidebarMenuItem";
var sidebarMenuButtonVariants = cva3("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
    variants: {
        variant: {
            default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
        },
        size: {
            default: "h-8 text-sm",
            sm: "h-7 text-xs",
            lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
var SidebarMenuButton = React9.forwardRef(function(_param, ref) {
    var _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, _param_isActive = _param.isActive, isActive = _param_isActive === void 0 ? false : _param_isActive, _param_variant = _param.variant, variant = _param_variant === void 0 ? "default" : _param_variant, _param_size = _param.size, size = _param_size === void 0 ? "default" : _param_size, tooltip = _param.tooltip, className = _param.className, props = _object_without_properties(_param, [
        "asChild",
        "isActive",
        "variant",
        "size",
        "tooltip",
        "className"
    ]);
    var Comp = asChild ? Slot2 : "button";
    var _useSidebar = useSidebar(), isMobile = _useSidebar.isMobile, state = _useSidebar.state;
    var button = /* @__PURE__ */ jsx11(Comp, _object_spread({
        ref: ref,
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: cn(sidebarMenuButtonVariants({
            variant: variant,
            size: size
        }), className)
    }, props));
    if (!tooltip) {
        return button;
    }
    if (typeof tooltip === "string") {
        tooltip = {
            children: tooltip
        };
    }
    return /* @__PURE__ */ jsxs6(Tooltip, {
        children: [
            /* @__PURE__ */ jsx11(TooltipTrigger, {
                asChild: true,
                children: button
            }),
            /* @__PURE__ */ jsx11(TooltipContent, _object_spread({
                side: "right",
                align: "center",
                hidden: state !== "collapsed" || isMobile
            }, tooltip))
        ]
    });
});
SidebarMenuButton.displayName = "SidebarMenuButton";
var SidebarMenuAction = React9.forwardRef(function(_param, ref) {
    var className = _param.className, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, _param_showOnHover = _param.showOnHover, showOnHover = _param_showOnHover === void 0 ? false : _param_showOnHover, props = _object_without_properties(_param, [
        "className",
        "asChild",
        "showOnHover"
    ]);
    var Comp = asChild ? Slot2 : "button";
    return /* @__PURE__ */ jsx11(Comp, _object_spread({
        ref: ref,
        "data-sidebar": "menu-action",
        className: cn("absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0", // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0", className)
    }, props));
});
SidebarMenuAction.displayName = "SidebarMenuAction";
var SidebarMenuBadge = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx11("div", _object_spread({
        ref: ref,
        "data-sidebar": "menu-badge",
        className: cn("pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className)
    }, props));
});
SidebarMenuBadge.displayName = "SidebarMenuBadge";
var SidebarMenuSkeleton = React9.forwardRef(function(_param, ref) {
    var className = _param.className, _param_showIcon = _param.showIcon, showIcon = _param_showIcon === void 0 ? false : _param_showIcon, props = _object_without_properties(_param, [
        "className",
        "showIcon"
    ]);
    var width = React9.useMemo(function() {
        return "".concat(Math.floor(Math.random() * 40) + 50, "%");
    }, []);
    return /* @__PURE__ */ jsxs6("div", _object_spread_props(_object_spread({
        ref: ref,
        "data-sidebar": "menu-skeleton",
        className: cn("flex h-8 items-center gap-2 rounded-md px-2", className)
    }, props), {
        children: [
            showIcon && /* @__PURE__ */ jsx11(Skeleton, {
                className: "size-4 rounded-md",
                "data-sidebar": "menu-skeleton-icon"
            }),
            /* @__PURE__ */ jsx11(Skeleton, {
                className: "h-4 max-w-[--skeleton-width] flex-1",
                "data-sidebar": "menu-skeleton-text",
                style: {
                    "--skeleton-width": width
                }
            })
        ]
    }));
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
var SidebarMenuSub = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx11("ul", _object_spread({
        ref: ref,
        "data-sidebar": "menu-sub",
        className: cn("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className)
    }, props));
});
SidebarMenuSub.displayName = "SidebarMenuSub";
var SidebarMenuSubItem = React9.forwardRef(function(_param, ref) {
    var props = _extends({}, _object_destructuring_empty(_param));
    return /* @__PURE__ */ jsx11("li", _object_spread({
        ref: ref
    }, props));
});
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
var SidebarMenuSubButton = React9.forwardRef(function(_param, ref) {
    var _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, _param_size = _param.size, size = _param_size === void 0 ? "md" : _param_size, isActive = _param.isActive, className = _param.className, props = _object_without_properties(_param, [
        "asChild",
        "size",
        "isActive",
        "className"
    ]);
    var Comp = asChild ? Slot2 : "a";
    return /* @__PURE__ */ jsx11(Comp, _object_spread({
        ref: ref,
        "data-sidebar": "menu-sub-button",
        "data-size": size,
        "data-active": isActive,
        className: cn("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size === "sm" && "text-xs", size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className)
    }, props));
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
// src/components/sidebar/nav-main.tsx
import { jsx as jsx12, jsxs as jsxs7 } from "react/jsx-runtime";
function NavMain(param) {
    var items = param.items, maxItems = param.maxItems;
    var displayItems = maxItems ? items.slice(0, maxItems) : items;
    return /* @__PURE__ */ jsx12(SidebarMenu, {
        children: displayItems.map(function(item) {
            return /* @__PURE__ */ jsx12(SidebarMenuItem, {
                children: /* @__PURE__ */ jsx12(SidebarMenuButton, {
                    asChild: true,
                    isActive: item.isActive,
                    className: "py-1.5",
                    children: /* @__PURE__ */ jsxs7("a", {
                        href: item.url,
                        title: item.title,
                        children: [
                            /* @__PURE__ */ jsx12(item.icon, {
                                className: "h-4 w-4"
                            }),
                            /* @__PURE__ */ jsx12("span", {
                                className: "truncate",
                                children: item.title
                            })
                        ]
                    })
                })
            }, item.title);
        })
    });
}
// src/components/sidebar/nav-secondary.tsx
import { jsx as jsx13, jsxs as jsxs8 } from "react/jsx-runtime";
function NavSecondary(_param) {
    var items = _param.items, maxItems = _param.maxItems, props = _object_without_properties(_param, [
        "items",
        "maxItems"
    ]);
    var displayItems = maxItems ? items.slice(0, maxItems) : items;
    return /* @__PURE__ */ jsx13(SidebarGroup, _object_spread_props(_object_spread({}, props), {
        children: /* @__PURE__ */ jsx13(SidebarGroupContent, {
            children: /* @__PURE__ */ jsx13(SidebarMenu, {
                children: displayItems.map(function(item) {
                    return /* @__PURE__ */ jsxs8(SidebarMenuItem, {
                        children: [
                            /* @__PURE__ */ jsx13(SidebarMenuButton, {
                                asChild: true,
                                className: "py-1.5",
                                children: /* @__PURE__ */ jsxs8("a", {
                                    href: item.url,
                                    title: item.title,
                                    children: [
                                        /* @__PURE__ */ jsx13(item.icon, {
                                            className: "h-4 w-4"
                                        }),
                                        /* @__PURE__ */ jsx13("span", {
                                            className: "truncate",
                                            children: item.title
                                        })
                                    ]
                                })
                            }),
                            item.badge && /* @__PURE__ */ jsx13(SidebarMenuBadge, {
                                children: item.badge
                            })
                        ]
                    }, item.title);
                })
            })
        })
    }));
}
// src/components/sidebar/nav-history.tsx
import { ArrowUpRight, Link as Link2, Clock, Trash2, ChevronRight as ChevronRight2 } from "lucide-react";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { jsx as jsx14, jsxs as jsxs9 } from "react/jsx-runtime";
function NavHistory(param) {
    var history = param.history, _param_maxItems = param.maxItems, maxItems = _param_maxItems === void 0 ? 5 : _param_maxItems;
    var isMobile = useSidebar().isMobile;
    var displayHistory = history.slice(0, maxItems);
    var remainingCount = Math.max(0, history.length - maxItems);
    return /* @__PURE__ */ jsxs9(SidebarGroup, {
        className: "group-data-[collapsible=icon]:hidden",
        children: [
            /* @__PURE__ */ jsxs9(SidebarGroupLabel, {
                className: "flex justify-between items-center",
                children: [
                    /* @__PURE__ */ jsx14("span", {
                        children: "History"
                    }),
                    remainingCount > 0 && /* @__PURE__ */ jsxs9("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                            history.length,
                            " items"
                        ]
                    })
                ]
            }),
            /* @__PURE__ */ jsxs9(SidebarMenu, {
                children: [
                    displayHistory.map(function(item) {
                        return /* @__PURE__ */ jsxs9(SidebarMenuItem, {
                            children: [
                                /* @__PURE__ */ jsx14(SidebarMenuButton, {
                                    asChild: true,
                                    className: "py-1.5",
                                    children: /* @__PURE__ */ jsxs9("a", {
                                        href: item.url,
                                        title: item.name,
                                        children: [
                                            /* @__PURE__ */ jsx14("span", {
                                                className: "truncate",
                                                children: item.name
                                            }),
                                            item.date && /* @__PURE__ */ jsx14("span", {
                                                className: "ml-auto text-xs text-muted-foreground hidden sm:inline-block",
                                                children: item.date
                                            })
                                        ]
                                    })
                                }),
                                /* @__PURE__ */ jsxs9(DropdownMenu, {
                                    children: [
                                        /* @__PURE__ */ jsx14(DropdownMenuTrigger, {
                                            asChild: true,
                                            children: /* @__PURE__ */ jsxs9(SidebarMenuAction, {
                                                showOnHover: true,
                                                children: [
                                                    /* @__PURE__ */ jsx14(DotsHorizontalIcon, {}),
                                                    /* @__PURE__ */ jsx14("span", {
                                                        className: "sr-only",
                                                        children: "More"
                                                    })
                                                ]
                                            })
                                        }),
                                        /* @__PURE__ */ jsxs9(DropdownMenuContent, {
                                            className: "w-56 rounded-lg",
                                            side: isMobile ? "bottom" : "right",
                                            align: isMobile ? "end" : "start",
                                            children: [
                                                /* @__PURE__ */ jsxs9(DropdownMenuItem, {
                                                    children: [
                                                        /* @__PURE__ */ jsx14(Clock, {
                                                            className: "text-muted-foreground"
                                                        }),
                                                        /* @__PURE__ */ jsx14("span", {
                                                            children: "Remove from History"
                                                        })
                                                    ]
                                                }),
                                                /* @__PURE__ */ jsx14(DropdownMenuSeparator, {}),
                                                /* @__PURE__ */ jsxs9(DropdownMenuItem, {
                                                    children: [
                                                        /* @__PURE__ */ jsx14(Link2, {
                                                            className: "text-muted-foreground"
                                                        }),
                                                        /* @__PURE__ */ jsx14("span", {
                                                            children: "Copy Link"
                                                        })
                                                    ]
                                                }),
                                                /* @__PURE__ */ jsxs9(DropdownMenuItem, {
                                                    children: [
                                                        /* @__PURE__ */ jsx14(ArrowUpRight, {
                                                            className: "text-muted-foreground"
                                                        }),
                                                        /* @__PURE__ */ jsx14("span", {
                                                            children: "Open in New Tab"
                                                        })
                                                    ]
                                                }),
                                                /* @__PURE__ */ jsx14(DropdownMenuSeparator, {}),
                                                /* @__PURE__ */ jsxs9(DropdownMenuItem, {
                                                    children: [
                                                        /* @__PURE__ */ jsx14(Trash2, {
                                                            className: "text-muted-foreground"
                                                        }),
                                                        /* @__PURE__ */ jsx14("span", {
                                                            children: "Delete"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, item.name);
                    }),
                    remainingCount > 0 && /* @__PURE__ */ jsx14(SidebarMenuItem, {
                        children: /* @__PURE__ */ jsxs9(SidebarMenuButton, {
                            className: "text-sidebar-foreground/70 py-1.5",
                            children: [
                                /* @__PURE__ */ jsx14(ChevronRight2, {
                                    className: "h-3.5 w-3.5 mr-2"
                                }),
                                /* @__PURE__ */ jsxs9("span", {
                                    children: [
                                        "View ",
                                        remainingCount,
                                        " more"
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
// src/components/ui/collapsible.tsx
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
var Collapsible = CollapsiblePrimitive.Root;
var CollapsibleTrigger2 = CollapsiblePrimitive.CollapsibleTrigger;
var CollapsibleContent2 = CollapsiblePrimitive.CollapsibleContent;
// src/components/sidebar/nav-listings.tsx
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Home, Building } from "lucide-react";
import { useState as useState6 } from "react";
import { jsx as jsx15, jsxs as jsxs10 } from "react/jsx-runtime";
function NavListings(param) {
    var listings = param.listings, _param_maxCategories = param.maxCategories, maxCategories = _param_maxCategories === void 0 ? 3 : _param_maxCategories, _param_maxPropertiesPerCategory = param.maxPropertiesPerCategory, maxPropertiesPerCategory = _param_maxPropertiesPerCategory === void 0 ? 3 : _param_maxPropertiesPerCategory;
    var _useState6 = _sliced_to_array(useState6([]), 2), expandedCategories = _useState6[0], setExpandedCategories = _useState6[1];
    var toggleCategory = function(categoryName) {
        setExpandedCategories(function(prev) {
            return prev.includes(categoryName) ? prev.filter(function(name) {
                return name !== categoryName;
            }) : _to_consumable_array(prev).concat([
                categoryName
            ]);
        });
    };
    var displayListings = listings.slice(0, maxCategories);
    var remainingCategories = Math.max(0, listings.length - maxCategories);
    return /* @__PURE__ */ jsxs10(SidebarGroup, {
        children: [
            /* @__PURE__ */ jsxs10(SidebarGroupLabel, {
                className: "flex justify-between items-center",
                children: [
                    /* @__PURE__ */ jsx15("span", {
                        children: "Listings"
                    }),
                    remainingCategories > 0 && /* @__PURE__ */ jsxs10("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                            listings.length,
                            " categories"
                        ]
                    })
                ]
            }),
            /* @__PURE__ */ jsx15(SidebarGroupContent, {
                children: /* @__PURE__ */ jsxs10(SidebarMenu, {
                    children: [
                        displayListings.map(function(category) {
                            return /* @__PURE__ */ jsx15(Collapsible, {
                                open: expandedCategories.includes(category.name),
                                children: /* @__PURE__ */ jsxs10(SidebarMenuItem, {
                                    children: [
                                        /* @__PURE__ */ jsx15(SidebarMenuButton, {
                                            asChild: true,
                                            className: "py-1.5",
                                            onClick: function() {
                                                return toggleCategory(category.name);
                                            },
                                            children: /* @__PURE__ */ jsxs10("a", {
                                                href: "#",
                                                children: [
                                                    category.icon || /* @__PURE__ */ jsx15(Building, {
                                                        className: "h-3.5 w-3.5 mr-2 text-muted-foreground"
                                                    }),
                                                    /* @__PURE__ */ jsx15("span", {
                                                        className: "truncate",
                                                        children: category.name
                                                    }),
                                                    /* @__PURE__ */ jsx15("span", {
                                                        className: "ml-auto text-xs text-muted-foreground",
                                                        children: category.properties.length
                                                    })
                                                ]
                                            })
                                        }),
                                        /* @__PURE__ */ jsx15(CollapsibleTrigger2, {
                                            asChild: true,
                                            children: /* @__PURE__ */ jsx15(SidebarMenuAction, {
                                                className: "left-2 bg-sidebar-accent text-sidebar-accent-foreground data-[state=open]:rotate-90",
                                                showOnHover: true,
                                                onClick: function() {
                                                    return toggleCategory(category.name);
                                                },
                                                children: /* @__PURE__ */ jsx15(ChevronRightIcon, {})
                                            })
                                        }),
                                        /* @__PURE__ */ jsx15(CollapsibleContent2, {
                                            children: /* @__PURE__ */ jsxs10(SidebarMenuSub, {
                                                children: [
                                                    category.properties.slice(0, maxPropertiesPerCategory).map(function(property) {
                                                        return /* @__PURE__ */ jsx15(SidebarMenuSubItem, {
                                                            children: /* @__PURE__ */ jsx15(SidebarMenuSubButton, {
                                                                asChild: true,
                                                                className: "py-1",
                                                                children: /* @__PURE__ */ jsxs10("a", {
                                                                    href: property.url,
                                                                    children: [
                                                                        property.icon || /* @__PURE__ */ jsx15(Home, {
                                                                            className: "h-3 w-3 mr-2 text-muted-foreground"
                                                                        }),
                                                                        /* @__PURE__ */ jsx15("span", {
                                                                            className: "truncate",
                                                                            children: property.name
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }, property.name);
                                                    }),
                                                    category.properties.length > maxPropertiesPerCategory && /* @__PURE__ */ jsx15(SidebarMenuSubItem, {
                                                        children: /* @__PURE__ */ jsxs10(SidebarMenuSubButton, {
                                                            className: "text-sidebar-foreground/70 py-1",
                                                            children: [
                                                                /* @__PURE__ */ jsx15(ChevronRightIcon, {
                                                                    className: "mr-2"
                                                                }),
                                                                /* @__PURE__ */ jsxs10("span", {
                                                                    children: [
                                                                        "View",
                                                                        " ",
                                                                        category.properties.length - maxPropertiesPerCategory,
                                                                        " ",
                                                                        "more"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }, category.name);
                        }),
                        remainingCategories > 0 && /* @__PURE__ */ jsx15(SidebarMenuItem, {
                            children: /* @__PURE__ */ jsxs10(SidebarMenuButton, {
                                className: "text-sidebar-foreground/70 py-1.5",
                                children: [
                                    /* @__PURE__ */ jsx15(ChevronRightIcon, {
                                        className: "mr-2"
                                    }),
                                    /* @__PURE__ */ jsxs10("span", {
                                        children: [
                                            "View ",
                                            remainingCategories,
                                            " more categories"
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}
// src/components/sidebar/sidebar-left.tsx
import { jsx as jsx16, jsxs as jsxs11 } from "react/jsx-runtime";
function SidebarLeft(_param) {
    var _param_logoLight = _param.logoLight, logoLight = _param_logoLight === void 0 ? "/logo.svg" : _param_logoLight, _param_logoDark = _param.logoDark, logoDark = _param_logoDark === void 0 ? "/logo-dark.svg" : _param_logoDark, navMainItems = _param.navMainItems, navSecondaryItems = _param.navSecondaryItems, historyItems = _param.historyItems, listingItems = _param.listingItems, _param_maxMainItems = _param.maxMainItems, maxMainItems = _param_maxMainItems === void 0 ? 6 : _param_maxMainItems, _param_maxSecondaryItems = _param.maxSecondaryItems, maxSecondaryItems = _param_maxSecondaryItems === void 0 ? 4 : _param_maxSecondaryItems, _param_maxHistoryItems = _param.maxHistoryItems, maxHistoryItems = _param_maxHistoryItems === void 0 ? 4 : _param_maxHistoryItems, _param_maxListingCategories = _param.maxListingCategories, maxListingCategories = _param_maxListingCategories === void 0 ? 3 : _param_maxListingCategories, _param_maxPropertiesPerCategory = _param.maxPropertiesPerCategory, maxPropertiesPerCategory = _param_maxPropertiesPerCategory === void 0 ? 2 : _param_maxPropertiesPerCategory, props = _object_without_properties(_param, [
        "logoLight",
        "logoDark",
        "navMainItems",
        "navSecondaryItems",
        "historyItems",
        "listingItems",
        "maxMainItems",
        "maxSecondaryItems",
        "maxHistoryItems",
        "maxListingCategories",
        "maxPropertiesPerCategory"
    ]);
    return /* @__PURE__ */ jsxs11(Sidebar, _object_spread_props(_object_spread({
        className: "border-r-0 w-64"
    }, props), {
        children: [
            /* @__PURE__ */ jsxs11(SidebarHeader, {
                className: "h-auto py-2",
                children: [
                    /* @__PURE__ */ jsxs11("div", {
                        className: "m-2",
                        children: [
                            /* @__PURE__ */ jsx16(Image2, {
                                src: logoLight,
                                alt: "Logo",
                                width: 120,
                                height: 40,
                                className: "dark:hidden"
                            }),
                            /* @__PURE__ */ jsx16(Image2, {
                                src: logoDark,
                                alt: "Logo",
                                width: 120,
                                height: 40,
                                className: "hidden dark:block"
                            })
                        ]
                    }),
                    navMainItems && /* @__PURE__ */ jsx16(NavMain, {
                        items: navMainItems,
                        maxItems: maxMainItems
                    })
                ]
            }),
            /* @__PURE__ */ jsxs11(SidebarContent, {
                className: "overflow-y-auto",
                children: [
                    historyItems && /* @__PURE__ */ jsx16(NavHistory, {
                        history: historyItems,
                        maxItems: maxHistoryItems
                    }),
                    listingItems && /* @__PURE__ */ jsx16(NavListings, {
                        listings: listingItems,
                        maxCategories: maxListingCategories,
                        maxPropertiesPerCategory: maxPropertiesPerCategory
                    }),
                    navSecondaryItems && /* @__PURE__ */ jsx16(NavSecondary, {
                        items: navSecondaryItems,
                        maxItems: maxSecondaryItems,
                        className: "mt-auto"
                    })
                ]
            }),
            /* @__PURE__ */ jsx16(SidebarRail, {})
        ]
    }));
}
// src/components/ui/card.tsx
import * as React10 from "react";
import { jsx as jsx17 } from "react/jsx-runtime";
var Card = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx17("div", _object_spread({
        ref: ref,
        className: cn("rounded-xl border bg-card text-card-foreground shadow", className)
    }, props));
});
Card.displayName = "Card";
var CardHeader = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx17("div", _object_spread({
        ref: ref,
        className: cn("flex flex-col space-y-1.5 p-6", className)
    }, props));
});
CardHeader.displayName = "CardHeader";
var CardTitle = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx17("div", _object_spread({
        ref: ref,
        className: cn("font-semibold leading-none tracking-tight", className)
    }, props));
});
CardTitle.displayName = "CardTitle";
var CardDescription = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx17("div", _object_spread({
        ref: ref,
        className: cn("text-sm text-muted-foreground", className)
    }, props));
});
CardDescription.displayName = "CardDescription";
var CardContent = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx17("div", _object_spread({
        ref: ref,
        className: cn("p-6 pt-0", className)
    }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx17("div", _object_spread({
        ref: ref,
        className: cn("flex items-center p-6 pt-0", className)
    }, props));
});
CardFooter.displayName = "CardFooter";
// src/components/ui/label.tsx
import * as React11 from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva as cva4 } from "class-variance-authority";
import { jsx as jsx18 } from "react/jsx-runtime";
var labelVariants = cva4("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label2 = React11.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx18(LabelPrimitive.Root, _object_spread({
        ref: ref,
        className: cn(labelVariants(), className)
    }, props));
});
Label2.displayName = LabelPrimitive.Root.displayName;
// src/components/login/login-form.tsx
import { useState as useState7 } from "react";
import { jsx as jsx19, jsxs as jsxs12 } from "react/jsx-runtime";
function LoginForm(_param) {
    var className = _param.className, onEmailLogin = _param.onEmailLogin, onGoogleLogin = _param.onGoogleLogin, onForgotPassword = _param.onForgotPassword, onSignUp = _param.onSignUp, _param_backgroundImage = _param.backgroundImage, backgroundImage = _param_backgroundImage === void 0 ? "/pic.avif" : _param_backgroundImage, _param_title = _param.title, title = _param_title === void 0 ? "Welcome back" : _param_title, _param_subtitle = _param.subtitle, subtitle = _param_subtitle === void 0 ? "Login to your account" : _param_subtitle, props = _object_without_properties(_param, [
        "className",
        "onEmailLogin",
        "onGoogleLogin",
        "onForgotPassword",
        "onSignUp",
        "backgroundImage",
        "title",
        "subtitle"
    ]);
    var _useState7 = _sliced_to_array(useState7(""), 2), email = _useState7[0], setEmail = _useState7[1];
    var _useState71 = _sliced_to_array(useState7(""), 2), password = _useState71[0], setPassword = _useState71[1];
    var _useState72 = _sliced_to_array(useState7(false), 2), loading = _useState72[0], setLoading = _useState72[1];
    var _useState73 = _sliced_to_array(useState7(null), 2), error = _useState73[0], setError = _useState73[1];
    var handleEmailLogin = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(e) {
            var error2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        e.preventDefault();
                        if (!onEmailLogin) return [
                            2
                        ];
                        setLoading(true);
                        setError(null);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            4,
                            5
                        ]);
                        return [
                            4,
                            onEmailLogin(email, password)
                        ];
                    case 2:
                        _state.sent();
                        return [
                            3,
                            5
                        ];
                    case 3:
                        error2 = _state.sent();
                        setError(error2.message || "An error occurred during login");
                        return [
                            3,
                            5
                        ];
                    case 4:
                        setLoading(false);
                        return [
                            7
                        ];
                    case 5:
                        return [
                            2
                        ];
                }
            });
        });
        return function handleEmailLogin(e) {
            return _ref.apply(this, arguments);
        };
    }();
    var handleGoogleLogin = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function() {
            var error2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!onGoogleLogin) return [
                            2
                        ];
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            onGoogleLogin()
                        ];
                    case 2:
                        _state.sent();
                        return [
                            3,
                            4
                        ];
                    case 3:
                        error2 = _state.sent();
                        setError(error2.message || "An error occurred during Google login");
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        });
        return function handleGoogleLogin() {
            return _ref.apply(this, arguments);
        };
    }();
    return /* @__PURE__ */ jsxs12("div", _object_spread_props(_object_spread({
        className: cn("flex flex-col gap-6", className)
    }, props), {
        children: [
            /* @__PURE__ */ jsx19(Card, {
                className: "overflow-hidden",
                children: /* @__PURE__ */ jsxs12(CardContent, {
                    className: "grid p-0 md:grid-cols-2",
                    children: [
                        /* @__PURE__ */ jsx19("form", {
                            className: "p-6 md:p-8",
                            onSubmit: handleEmailLogin,
                            children: /* @__PURE__ */ jsxs12("div", {
                                className: "flex flex-col gap-6",
                                children: [
                                    /* @__PURE__ */ jsxs12("div", {
                                        className: "flex flex-col items-center text-center",
                                        children: [
                                            /* @__PURE__ */ jsx19("h1", {
                                                className: "text-2xl font-bold",
                                                children: title
                                            }),
                                            /* @__PURE__ */ jsx19("p", {
                                                className: "text-balance text-muted-foreground",
                                                children: subtitle
                                            })
                                        ]
                                    }),
                                    error && /* @__PURE__ */ jsx19("div", {
                                        className: "bg-red-50 text-red-600 p-3 rounded-md text-sm",
                                        children: error
                                    }),
                                    /* @__PURE__ */ jsxs12("div", {
                                        className: "grid gap-2",
                                        children: [
                                            /* @__PURE__ */ jsx19(Label2, {
                                                htmlFor: "email",
                                                children: "Email"
                                            }),
                                            /* @__PURE__ */ jsx19(Input, {
                                                id: "email",
                                                type: "email",
                                                placeholder: "m@example.com",
                                                required: true,
                                                value: email,
                                                onChange: function(e) {
                                                    return setEmail(e.target.value);
                                                }
                                            })
                                        ]
                                    }),
                                    /* @__PURE__ */ jsxs12("div", {
                                        className: "grid gap-2",
                                        children: [
                                            /* @__PURE__ */ jsxs12("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /* @__PURE__ */ jsx19(Label2, {
                                                        htmlFor: "password",
                                                        children: "Password"
                                                    }),
                                                    /* @__PURE__ */ jsx19("a", {
                                                        href: "#",
                                                        className: "ml-auto text-sm underline-offset-2 hover:underline",
                                                        onClick: function(e) {
                                                            e.preventDefault();
                                                            onForgotPassword === null || onForgotPassword === void 0 ? void 0 : onForgotPassword();
                                                        },
                                                        children: "Forgot your password?"
                                                    })
                                                ]
                                            }),
                                            /* @__PURE__ */ jsx19(Input, {
                                                id: "password",
                                                type: "password",
                                                required: true,
                                                value: password,
                                                onChange: function(e) {
                                                    return setPassword(e.target.value);
                                                }
                                            })
                                        ]
                                    }),
                                    /* @__PURE__ */ jsx19(Button, {
                                        type: "submit",
                                        className: "w-full",
                                        disabled: loading,
                                        children: loading ? "Signing in..." : "Sign in"
                                    }),
                                    /* @__PURE__ */ jsx19("div", {
                                        className: "relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border",
                                        children: /* @__PURE__ */ jsx19("span", {
                                            className: "relative z-10 bg-background px-2 text-muted-foreground",
                                            children: "Or continue with"
                                        })
                                    }),
                                    /* @__PURE__ */ jsx19("div", {
                                        className: "grid grid-cols-1 gap-4",
                                        children: /* @__PURE__ */ jsxs12(Button, {
                                            variant: "outline",
                                            className: "w-full",
                                            onClick: handleGoogleLogin,
                                            type: "button",
                                            children: [
                                                /* @__PURE__ */ jsx19("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 24 24",
                                                    className: "w-5 h-5 mr-2",
                                                    children: /* @__PURE__ */ jsx19("path", {
                                                        d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z",
                                                        fill: "currentColor"
                                                    })
                                                }),
                                                "Continue with Google"
                                            ]
                                        })
                                    }),
                                    /* @__PURE__ */ jsxs12("div", {
                                        className: "text-center text-sm",
                                        children: [
                                            "Don't have an account?",
                                            " ",
                                            /* @__PURE__ */ jsx19("a", {
                                                href: "#",
                                                className: "underline underline-offset-4",
                                                onClick: function(e) {
                                                    e.preventDefault();
                                                    onSignUp === null || onSignUp === void 0 ? void 0 : onSignUp();
                                                },
                                                children: "Sign up"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /* @__PURE__ */ jsx19("div", {
                            className: "relative hidden bg-muted md:block",
                            children: /* @__PURE__ */ jsx19("img", {
                                src: backgroundImage,
                                alt: "Image",
                                className: "absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                            })
                        })
                    ]
                })
            }),
            /* @__PURE__ */ jsxs12("div", {
                className: "text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary",
                children: [
                    "By clicking continue, you agree to our ",
                    /* @__PURE__ */ jsx19("a", {
                        href: "#",
                        children: "Terms of Service"
                    }),
                    " ",
                    "and ",
                    /* @__PURE__ */ jsx19("a", {
                        href: "#",
                        children: "Privacy Policy"
                    }),
                    "."
                ]
            })
        ]
    }));
}
// src/components/login/login-modal.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
function LoginModal(props) {
    var showLoginModal = props.showLoginModal, restProps = _object_without_properties(props, [
        "showLoginModal"
    ]);
    if (!showLoginModal) {
        return null;
    }
    return /* @__PURE__ */ jsx20("div", {
        className: "fixed top-0 left-0 w-screen flex flex-col items-center justify-center h-screen backdrop-blur-md z-50",
        children: /* @__PURE__ */ jsx20(LoginForm, _object_spread({}, restProps))
    });
}
// src/components/reva-navbar/reva-navbar.tsx
import * as React14 from "react";
import Link5 from "next/link";
import { usePathname as usePathname2 } from "next/navigation";
import { Bell, Camera as Camera2, ChevronDown as ChevronDown2, LogOut as LogOut2, Menu as Menu2, MessageSquare, Moon as Moon2, PenLine as PenLine2, Phone as Phone2, Search, Settings, Sofa as Sofa2, Sun as Sun2, User, Wallet, X as X2 } from "lucide-react";
// src/components/ui/navigation-menu.tsx
import * as React12 from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva as cva5 } from "class-variance-authority";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { jsx as jsx21, jsxs as jsxs13 } from "react/jsx-runtime";
var NavigationMenu = React12.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ jsxs13(NavigationMenuPrimitive.Root, _object_spread_props(_object_spread({
        ref: ref,
        className: cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)
    }, props), {
        children: [
            children,
            /* @__PURE__ */ jsx21(NavigationMenuViewport, {})
        ]
    }));
});
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
var NavigationMenuList = React12.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx21(NavigationMenuPrimitive.List, _object_spread({
        ref: ref,
        className: cn("group flex flex-1 list-none items-center justify-center space-x-1", className)
    }, props));
});
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive.Item;
var navigationMenuTriggerStyle = cva5("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent");
var NavigationMenuTrigger = React12.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ jsxs13(NavigationMenuPrimitive.Trigger, _object_spread_props(_object_spread({
        ref: ref,
        className: cn(navigationMenuTriggerStyle(), "group", className)
    }, props), {
        children: [
            children,
            " ",
            /* @__PURE__ */ jsx21(ChevronDownIcon, {
                className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
                "aria-hidden": "true"
            })
        ]
    }));
});
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
var NavigationMenuContent = React12.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx21(NavigationMenuPrimitive.Content, _object_spread({
        ref: ref,
        className: cn("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", className)
    }, props));
});
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive.Link;
var NavigationMenuViewport = React12.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx21("div", {
        className: cn("absolute left-0 top-full flex justify-center"),
        children: /* @__PURE__ */ jsx21(NavigationMenuPrimitive.Viewport, _object_spread({
            className: cn("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", className),
            ref: ref
        }, props))
    });
});
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
var NavigationMenuIndicator = React12.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx21(NavigationMenuPrimitive.Indicator, _object_spread_props(_object_spread({
        ref: ref,
        className: cn("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", className)
    }, props), {
        children: /* @__PURE__ */ jsx21("div", {
            className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"
        })
    }));
});
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;
// src/components/ui/avatar.tsx
import * as React13 from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { jsx as jsx22 } from "react/jsx-runtime";
var Avatar = React13.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx22(AvatarPrimitive.Root, _object_spread({
        ref: ref,
        className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)
    }, props));
});
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React13.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx22(AvatarPrimitive.Image, _object_spread({
        ref: ref,
        className: cn("aspect-square h-full w-full", className)
    }, props));
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React13.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ jsx22(AvatarPrimitive.Fallback, _object_spread({
        ref: ref,
        className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)
    }, props));
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
// src/components/ui/badge.tsx
import { cva as cva6 } from "class-variance-authority";
import { jsx as jsx23 } from "react/jsx-runtime";
var badgeVariants = cva6("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(_param) {
    var className = _param.className, variant = _param.variant, props = _object_without_properties(_param, [
        "className",
        "variant"
    ]);
    return /* @__PURE__ */ jsx23("div", _object_spread({
        className: cn(badgeVariants({
            variant: variant
        }), className)
    }, props));
}
// src/components/reva-navbar/reva-logo-dark.tsx
import { useTheme as useTheme3 } from "next-themes";
import Image4 from "next/image";
import Link4 from "next/link";
import { jsx as jsx24 } from "react/jsx-runtime";
function RevaLogo() {
    var resolvedTheme = useTheme3().resolvedTheme;
    var isDarkTheme = resolvedTheme === "dark";
    return /* @__PURE__ */ jsx24(Link4, {
        href: "/",
        className: "flex items-center",
        children: isDarkTheme ? /* @__PURE__ */ jsx24(Image4, {
            src: "/images/reva-logo-dark.svg",
            alt: "REVA",
            width: 100,
            height: 30,
            className: "h-8 w-auto",
            priority: true
        }) : /* @__PURE__ */ jsx24(Image4, {
            src: "/images/reva-logo.png",
            alt: "REVA",
            width: 100,
            height: 30,
            className: "h-8 w-auto",
            priority: true
        })
    });
}
// src/components/reva-navbar/reva-navbar.tsx
import { jsx as jsx25, jsxs as jsxs14 } from "react/jsx-runtime";
function RevaNavbar(param) {
    var logo = param.logo, _param_items = param.items, items = _param_items === void 0 ? defaultNavItems : _param_items, _param_showSearch = param.showSearch, showSearch = _param_showSearch === void 0 ? false : _param_showSearch, _param_showThemeToggle = param.showThemeToggle, showThemeToggle = _param_showThemeToggle === void 0 ? true : _param_showThemeToggle, _param_showLanguageSelector = param.showLanguageSelector, showLanguageSelector = _param_showLanguageSelector === void 0 ? false : _param_showLanguageSelector, _param_showUserMenu = param.showUserMenu, showUserMenu = _param_showUserMenu === void 0 ? true : _param_showUserMenu, _param_showBalance = param.showBalance, showBalance = _param_showBalance === void 0 ? false : _param_showBalance, _param_showCreateButton = param.showCreateButton, showCreateButton = _param_showCreateButton === void 0 ? false : _param_showCreateButton, _param_showNotifications = param.showNotifications, showNotifications = _param_showNotifications === void 0 ? false : _param_showNotifications, _param_showMessages = param.showMessages, showMessages = _param_showMessages === void 0 ? false : _param_showMessages, _param_balance = param.balance, balance = _param_balance === void 0 ? 0 : _param_balance, user = param.user, _param_languages = param.languages, languages = _param_languages === void 0 ? {
        current: "Eng",
        options: [
            {
                label: "English",
                value: "en"
            },
            {
                label: "Fran\xE7ais",
                value: "fr"
            },
            {
                label: "Espa\xF1ol",
                value: "es"
            }
        ]
    } : _param_languages, onThemeToggle = param.onThemeToggle, onLanguageChange = param.onLanguageChange, onLogout = param.onLogout, onSearch = param.onSearch, className = param.className, _param_isDark = param.isDark, isDark = _param_isDark === void 0 ? false : _param_isDark;
    var pathname = usePathname2();
    var _React14_useState = _sliced_to_array(React14.useState(false), 2), isSearchOpen = _React14_useState[0], setIsSearchOpen = _React14_useState[1];
    var _React14_useState1 = _sliced_to_array(React14.useState(""), 2), searchQuery = _React14_useState1[0], setSearchQuery = _React14_useState1[1];
    var handleSearch = function(e) {
        e.preventDefault();
        if (onSearch) {
            onSearch(searchQuery);
        }
        setIsSearchOpen(false);
    };
    return /* @__PURE__ */ jsx25("header", {
        className: cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className),
        children: /* @__PURE__ */ jsxs14("div", {
            className: "container flex h-16 items-center",
            children: [
                /* @__PURE__ */ jsxs14(Sheet, {
                    children: [
                        /* @__PURE__ */ jsx25(SheetTrigger, {
                            asChild: true,
                            children: /* @__PURE__ */ jsxs14(Button, {
                                variant: "ghost",
                                size: "icon",
                                className: "mr-2 md:hidden",
                                children: [
                                    /* @__PURE__ */ jsx25(Menu2, {
                                        className: "h-5 w-5"
                                    }),
                                    /* @__PURE__ */ jsx25("span", {
                                        className: "sr-only",
                                        children: "Toggle menu"
                                    })
                                ]
                            })
                        }),
                        /* @__PURE__ */ jsxs14(SheetContent, {
                            side: "left",
                            className: "pr-0",
                            children: [
                                /* @__PURE__ */ jsx25("div", {
                                    className: "px-7",
                                    children: logo || /* @__PURE__ */ jsx25(RevaLogo, {})
                                }),
                                /* @__PURE__ */ jsx25("div", {
                                    className: "mt-8 flex flex-col gap-4",
                                    children: items.map(function(item, index) {
                                        return /* @__PURE__ */ jsx25(MobileNavItem2, {
                                            item: item,
                                            pathname: pathname
                                        }, index);
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /* @__PURE__ */ jsx25("div", {
                    className: "mr-4 hidden md:flex",
                    children: logo || /* @__PURE__ */ jsx25(RevaLogo, {})
                }),
                /* @__PURE__ */ jsx25("div", {
                    className: "hidden md:flex",
                    children: /* @__PURE__ */ jsx25(NavigationMenu, {
                        children: /* @__PURE__ */ jsx25(NavigationMenuList, {
                            children: items.map(function(item, index) {
                                return /* @__PURE__ */ jsx25(NavbarItem, {
                                    item: item,
                                    pathname: pathname
                                }, index);
                            })
                        })
                    })
                }),
                /* @__PURE__ */ jsxs14("div", {
                    className: "flex flex-1 items-center justify-end gap-2",
                    children: [
                        /* @__PURE__ */ jsxs14("div", {
                            className: "hidden md:flex items-center gap-2 mr-2",
                            children: [
                                /* @__PURE__ */ jsxs14(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    children: [
                                        /* @__PURE__ */ jsx25(Camera2, {
                                            className: "h-5 w-5"
                                        }),
                                        /* @__PURE__ */ jsx25("span", {
                                            className: "sr-only",
                                            children: "Camera"
                                        })
                                    ]
                                }),
                                /* @__PURE__ */ jsxs14(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    children: [
                                        /* @__PURE__ */ jsx25(Sofa2, {
                                            className: "h-5 w-5"
                                        }),
                                        /* @__PURE__ */ jsx25("span", {
                                            className: "sr-only",
                                            children: "Room"
                                        })
                                    ]
                                }),
                                /* @__PURE__ */ jsxs14(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    children: [
                                        /* @__PURE__ */ jsx25(Phone2, {
                                            className: "h-5 w-5"
                                        }),
                                        /* @__PURE__ */ jsx25("span", {
                                            className: "sr-only",
                                            children: "Phone"
                                        })
                                    ]
                                }),
                                /* @__PURE__ */ jsxs14(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    children: [
                                        /* @__PURE__ */ jsx25(PenLine2, {
                                            className: "h-5 w-5"
                                        }),
                                        /* @__PURE__ */ jsx25("span", {
                                            className: "sr-only",
                                            children: "Pen"
                                        })
                                    ]
                                })
                            ]
                        }),
                        showSearch && /* @__PURE__ */ jsx25("div", {
                            className: "relative hidden md:flex",
                            children: isSearchOpen ? /* @__PURE__ */ jsxs14("form", {
                                onSubmit: handleSearch,
                                className: "relative",
                                children: [
                                    /* @__PURE__ */ jsx25(Input, {
                                        type: "search",
                                        placeholder: "Search...",
                                        className: "h-9 w-[200px] lg:w-[300px]",
                                        value: searchQuery,
                                        onChange: function(e) {
                                            return setSearchQuery(e.target.value);
                                        }
                                    }),
                                    /* @__PURE__ */ jsxs14(Button, {
                                        type: "button",
                                        variant: "ghost",
                                        size: "icon",
                                        className: "absolute right-0 top-0",
                                        onClick: function() {
                                            return setIsSearchOpen(false);
                                        },
                                        children: [
                                            /* @__PURE__ */ jsx25(X2, {
                                                className: "h-4 w-4"
                                            }),
                                            /* @__PURE__ */ jsx25("span", {
                                                className: "sr-only",
                                                children: "Close search"
                                            })
                                        ]
                                    })
                                ]
                            }) : /* @__PURE__ */ jsxs14(Button, {
                                variant: "ghost",
                                size: "icon",
                                onClick: function() {
                                    return setIsSearchOpen(true);
                                },
                                children: [
                                    /* @__PURE__ */ jsx25(Search, {
                                        className: "h-5 w-5"
                                    }),
                                    /* @__PURE__ */ jsx25("span", {
                                        className: "sr-only",
                                        children: "Search"
                                    })
                                ]
                            })
                        }),
                        showLanguageSelector && /* @__PURE__ */ jsxs14(DropdownMenu, {
                            children: [
                                /* @__PURE__ */ jsx25(DropdownMenuTrigger, {
                                    asChild: true,
                                    children: /* @__PURE__ */ jsxs14(Button, {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "gap-1 text-sm font-medium",
                                        children: [
                                            languages.current,
                                            /* @__PURE__ */ jsx25(ChevronDown2, {
                                                className: "h-4 w-4"
                                            })
                                        ]
                                    })
                                }),
                                /* @__PURE__ */ jsx25(DropdownMenuContent, {
                                    align: "end",
                                    children: languages.options.map(function(language) {
                                        return /* @__PURE__ */ jsx25(DropdownMenuItem, {
                                            onClick: function() {
                                                return onLanguageChange === null || onLanguageChange === void 0 ? void 0 : onLanguageChange(language.value);
                                            },
                                            children: language.label
                                        }, language.value);
                                    })
                                })
                            ]
                        }),
                        showThemeToggle && /* @__PURE__ */ jsxs14(DropdownMenu, {
                            children: [
                                /* @__PURE__ */ jsx25(DropdownMenuTrigger, {
                                    asChild: true,
                                    children: /* @__PURE__ */ jsxs14(Button, {
                                        variant: "ghost",
                                        size: "icon",
                                        children: [
                                            isDark ? /* @__PURE__ */ jsx25(Sun2, {
                                                className: "h-5 w-5"
                                            }) : /* @__PURE__ */ jsx25(Moon2, {
                                                className: "h-5 w-5"
                                            }),
                                            /* @__PURE__ */ jsx25("span", {
                                                className: "sr-only",
                                                children: "Toggle theme"
                                            })
                                        ]
                                    })
                                }),
                                /* @__PURE__ */ jsxs14(DropdownMenuContent, {
                                    align: "end",
                                    children: [
                                        /* @__PURE__ */ jsxs14(DropdownMenuItem, {
                                            onClick: function() {
                                                return onThemeToggle === null || onThemeToggle === void 0 ? void 0 : onThemeToggle("light");
                                            },
                                            children: [
                                                /* @__PURE__ */ jsx25(Sun2, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Light"
                                            ]
                                        }),
                                        /* @__PURE__ */ jsxs14(DropdownMenuItem, {
                                            onClick: function() {
                                                return onThemeToggle === null || onThemeToggle === void 0 ? void 0 : onThemeToggle("dark");
                                            },
                                            children: [
                                                /* @__PURE__ */ jsx25(Moon2, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Dark"
                                            ]
                                        }),
                                        /* @__PURE__ */ jsxs14(DropdownMenuItem, {
                                            onClick: function() {
                                                return onThemeToggle === null || onThemeToggle === void 0 ? void 0 : onThemeToggle("system");
                                            },
                                            children: [
                                                /* @__PURE__ */ jsx25(Settings, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "System"
                                            ]
                                        }),
                                        /* @__PURE__ */ jsxs14(DropdownMenuItem, {
                                            onClick: function() {
                                                return onThemeToggle === null || onThemeToggle === void 0 ? void 0 : onThemeToggle("contrast");
                                            },
                                            children: [
                                                /* @__PURE__ */ jsx25(Bell, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "High Contrast"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        showNotifications && /* @__PURE__ */ jsxs14(Button, {
                            variant: "ghost",
                            size: "icon",
                            children: [
                                /* @__PURE__ */ jsx25(Bell, {
                                    className: "h-5 w-5"
                                }),
                                /* @__PURE__ */ jsx25("span", {
                                    className: "sr-only",
                                    children: "Notifications"
                                })
                            ]
                        }),
                        showMessages && /* @__PURE__ */ jsxs14(Button, {
                            variant: "ghost",
                            size: "icon",
                            className: "relative",
                            children: [
                                /* @__PURE__ */ jsx25(MessageSquare, {
                                    className: "h-5 w-5"
                                }),
                                /* @__PURE__ */ jsx25(Badge, {
                                    className: "absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center",
                                    children: "3"
                                }),
                                /* @__PURE__ */ jsx25("span", {
                                    className: "sr-only",
                                    children: "Messages"
                                })
                            ]
                        }),
                        showBalance && /* @__PURE__ */ jsxs14("div", {
                            className: "hidden items-center gap-2 md:flex",
                            children: [
                                /* @__PURE__ */ jsx25(Wallet, {
                                    className: "h-4 w-4"
                                }),
                                /* @__PURE__ */ jsxs14("span", {
                                    className: cn("text-sm font-medium", balance < 0 ? "text-destructive" : ""),
                                    children: [
                                        balance > 0 ? "+" : "",
                                        balance.toLocaleString()
                                    ]
                                })
                            ]
                        }),
                        showCreateButton && /* @__PURE__ */ jsx25(Button, {
                            className: "bg-black hover:bg-black/90 text-white",
                            children: "Create"
                        }),
                        showUserMenu && user && /* @__PURE__ */ jsxs14(DropdownMenu, {
                            children: [
                                /* @__PURE__ */ jsx25(DropdownMenuTrigger, {
                                    asChild: true,
                                    children: /* @__PURE__ */ jsx25(Button, {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "rounded-full",
                                        children: /* @__PURE__ */ jsxs14(Avatar, {
                                            className: "h-8 w-8",
                                            children: [
                                                /* @__PURE__ */ jsx25(AvatarImage, {
                                                    src: user.image,
                                                    alt: user.name || "User"
                                                }),
                                                /* @__PURE__ */ jsx25(AvatarFallback, {
                                                    children: user.initials || "U"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /* @__PURE__ */ jsxs14(DropdownMenuContent, {
                                    align: "end",
                                    children: [
                                        /* @__PURE__ */ jsxs14(DropdownMenuLabel, {
                                            children: [
                                                user.name && /* @__PURE__ */ jsx25("p", {
                                                    children: user.name
                                                }),
                                                user.email && /* @__PURE__ */ jsx25("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: user.email
                                                })
                                            ]
                                        }),
                                        /* @__PURE__ */ jsx25(DropdownMenuSeparator, {}),
                                        /* @__PURE__ */ jsxs14(DropdownMenuItem, {
                                            children: [
                                                /* @__PURE__ */ jsx25(User, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Profile"
                                            ]
                                        }),
                                        /* @__PURE__ */ jsxs14(DropdownMenuItem, {
                                            children: [
                                                /* @__PURE__ */ jsx25(Settings, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Settings"
                                            ]
                                        }),
                                        /* @__PURE__ */ jsx25(DropdownMenuSeparator, {}),
                                        /* @__PURE__ */ jsxs14(DropdownMenuItem, {
                                            onClick: onLogout,
                                            children: [
                                                /* @__PURE__ */ jsx25(LogOut2, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Log out"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function NavbarItem(param) {
    var item = param.item, pathname = param.pathname;
    if (item.children) {
        return /* @__PURE__ */ jsxs14(NavigationMenuItem, {
            children: [
                /* @__PURE__ */ jsx25(NavigationMenuTrigger, {
                    children: item.title
                }),
                /* @__PURE__ */ jsx25(NavigationMenuContent, {
                    children: /* @__PURE__ */ jsx25("ul", {
                        className: "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]",
                        children: item.children.map(function(child) {
                            return /* @__PURE__ */ jsx25("li", {
                                className: "row-span-3",
                                children: /* @__PURE__ */ jsx25(NavigationMenuLink, {
                                    asChild: true,
                                    children: /* @__PURE__ */ jsxs14(Link5, {
                                        href: child.href || "#",
                                        className: "flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",
                                        children: [
                                            child.icon,
                                            /* @__PURE__ */ jsx25("div", {
                                                className: "mb-2 mt-4 text-lg font-medium",
                                                children: child.title
                                            }),
                                            /* @__PURE__ */ jsx25("p", {
                                                className: "text-sm leading-tight text-muted-foreground",
                                                children: child.description
                                            })
                                        ]
                                    })
                                })
                            }, child.title);
                        })
                    })
                })
            ]
        });
    }
    return /* @__PURE__ */ jsx25(NavigationMenuItem, {
        children: /* @__PURE__ */ jsx25(Link5, {
            href: item.href || "#",
            legacyBehavior: true,
            passHref: true,
            children: /* @__PURE__ */ jsx25(NavigationMenuLink, {
                className: cn(navigationMenuTriggerStyle(), pathname === item.href && "bg-accent text-accent-foreground", item.disabled && "cursor-not-allowed opacity-60"),
                children: item.title
            })
        })
    });
}
function MobileNavItem2(param) {
    var item = param.item, pathname = param.pathname;
    var _React14_useState = _sliced_to_array(React14.useState(false), 2), isOpen = _React14_useState[0], setIsOpen = _React14_useState[1];
    if (item.children) {
        return /* @__PURE__ */ jsxs14("div", {
            className: "flex flex-col",
            children: [
                /* @__PURE__ */ jsxs14("button", {
                    className: "flex items-center justify-between py-2 text-base font-medium",
                    onClick: function() {
                        return setIsOpen(!isOpen);
                    },
                    children: [
                        item.title,
                        /* @__PURE__ */ jsx25(ChevronDown2, {
                            className: cn("h-4 w-4 transition-transform", isOpen && "rotate-180")
                        })
                    ]
                }),
                isOpen && /* @__PURE__ */ jsx25("div", {
                    className: "ml-4 mt-2 flex flex-col gap-2",
                    children: item.children.map(function(child) {
                        return /* @__PURE__ */ jsx25(Link5, {
                            href: child.href || "#",
                            className: cn("py-2 text-sm", pathname === child.href && "font-medium text-primary", child.disabled && "cursor-not-allowed opacity-60"),
                            children: child.title
                        }, child.title);
                    })
                })
            ]
        });
    }
    return /* @__PURE__ */ jsx25(Link5, {
        href: item.href || "#",
        className: cn("py-2 text-base font-medium", pathname === item.href && "text-primary", item.disabled && "cursor-not-allowed opacity-60"),
        children: item.title
    });
}
var defaultNavItems = [
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Pricing",
        href: "/pricing"
    },
    {
        title: "Contact",
        href: "/contact"
    }
];
// src/components/new-navbar/new-navbar.tsx
import * as React15 from "react";
import Link7 from "next/link";
import { usePathname as usePathname3 } from "next/navigation";
import { Bell as Bell2, Camera as Camera3, ChevronDown as ChevronDown3, LogOut as LogOut3, Menu as Menu3, MessageSquare as MessageSquare2, Moon as Moon3, PenLine as PenLine3, Phone as Phone3, Search as Search2, Settings as Settings2, Sofa as Sofa3, Sun as Sun3, User as User2, Wallet as Wallet2, Glasses } from "lucide-react";
// src/components/new-navbar/reva-logo-dark.tsx
import { useTheme as useTheme4 } from "next-themes";
import Image5 from "next/image";
import Link6 from "next/link";
import { jsx as jsx26 } from "react/jsx-runtime";
function RevaLogo2() {
    var resolvedTheme = useTheme4().resolvedTheme;
    var isDarkTheme = resolvedTheme === "dark";
    return /* @__PURE__ */ jsx26(Link6, {
        href: "/",
        className: "flex items-center",
        children: isDarkTheme ? /* @__PURE__ */ jsx26(Image5, {
            src: "/images/reva-logo.svg",
            alt: "REVA",
            width: 141,
            height: 27,
            className: "h-5 w-auto",
            priority: true
        }) : /* @__PURE__ */ jsx26(Image5, {
            src: "/images/reva-logo-dark.svg",
            alt: "REVA",
            width: 160,
            height: 31,
            className: "h-5 w-auto",
            priority: true
        })
    });
}
// src/components/new-navbar/new-navbar.tsx
import { jsx as jsx27, jsxs as jsxs15 } from "react/jsx-runtime";
function NewNavbar(param) {
    var logo = param.logo, _param_items = param.items, items = _param_items === void 0 ? defaultNavItems2 : _param_items, _param_showSearch = param.showSearch, showSearch = _param_showSearch === void 0 ? false : _param_showSearch, _param_showThemeToggle = param.showThemeToggle, showThemeToggle = _param_showThemeToggle === void 0 ? true : _param_showThemeToggle, _param_showLanguageSelector = param.showLanguageSelector, showLanguageSelector = _param_showLanguageSelector === void 0 ? false : _param_showLanguageSelector, _param_showUserMenu = param.showUserMenu, showUserMenu = _param_showUserMenu === void 0 ? true : _param_showUserMenu, _param_showBalance = param.showBalance, showBalance = _param_showBalance === void 0 ? false : _param_showBalance, _param_showCreateButton = param.showCreateButton, showCreateButton = _param_showCreateButton === void 0 ? false : _param_showCreateButton, _param_showNotifications = param.showNotifications, showNotifications = _param_showNotifications === void 0 ? false : _param_showNotifications, _param_showMessages = param.showMessages, showMessages = _param_showMessages === void 0 ? false : _param_showMessages, _param_balance = param.balance, balance = _param_balance === void 0 ? 0 : _param_balance, user = param.user, _param_languages = param.languages, languages = _param_languages === void 0 ? {
        current: "Eng",
        options: [
            {
                label: "English",
                value: "en"
            },
            {
                label: "Fran\xE7ais",
                value: "fr"
            },
            {
                label: "Espa\xF1ol",
                value: "es"
            }
        ]
    } : _param_languages, onThemeToggle = param.onThemeToggle, onLanguageChange = param.onLanguageChange, onLogout = param.onLogout, onSearch = param.onSearch, className = param.className, _param_isDark = param.isDark, isDark = _param_isDark === void 0 ? false : _param_isDark, _param_iconLinks = param.iconLinks, iconLinks = _param_iconLinks === void 0 ? {} : _param_iconLinks, _param_openLinksInNewTab = param.openLinksInNewTab, openLinksInNewTab = _param_openLinksInNewTab === void 0 ? true : _param_openLinksInNewTab;
    var pathname = usePathname3();
    var _React15_useState = _sliced_to_array(React15.useState(false), 2), isSearchOpen = _React15_useState[0], setIsSearchOpen = _React15_useState[1];
    var _React15_useState1 = _sliced_to_array(React15.useState(""), 2), searchQuery = _React15_useState1[0], setSearchQuery = _React15_useState1[1];
    var handleSearch = function(e) {
        e.preventDefault();
        if (onSearch) {
            onSearch(searchQuery);
        }
        setIsSearchOpen(false);
    };
    return /* @__PURE__ */ jsx27("header", {
        className: cn("fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg shadow-sm navbar-glass", className),
        children: /* @__PURE__ */ jsxs15("div", {
            className: "flex p-4 justify-between w-full h-16 items-center",
            children: [
                /* @__PURE__ */ jsxs15(Sheet, {
                    children: [
                        /* @__PURE__ */ jsx27(SheetTrigger, {
                            asChild: true,
                            children: /* @__PURE__ */ jsxs15(Button, {
                                variant: "ghost",
                                size: "icon",
                                className: "mr-2 md:hidden",
                                children: [
                                    /* @__PURE__ */ jsx27(Menu3, {
                                        className: "h-5 w-5"
                                    }),
                                    /* @__PURE__ */ jsx27("span", {
                                        className: "sr-only",
                                        children: "Toggle menu"
                                    })
                                ]
                            })
                        }),
                        /* @__PURE__ */ jsxs15(SheetContent, {
                            side: "left",
                            className: "pr-0",
                            children: [
                                /* @__PURE__ */ jsx27("div", {
                                    className: "px-7",
                                    children: logo || /* @__PURE__ */ jsx27(RevaLogo2, {})
                                }),
                                /* @__PURE__ */ jsx27("div", {
                                    className: "mt-8 flex flex-col gap-4",
                                    children: items.map(function(item, index) {
                                        return /* @__PURE__ */ jsx27(MobileNavItem3, {
                                            item: item,
                                            pathname: pathname
                                        }, index);
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /* @__PURE__ */ jsx27("div", {
                    className: "mr-4 hidden md:flex",
                    children: logo || /* @__PURE__ */ jsx27(RevaLogo2, {})
                }),
                /* @__PURE__ */ jsx27("div", {
                    className: "hidden md:flex",
                    children: /* @__PURE__ */ jsx27(NavigationMenu, {
                        children: /* @__PURE__ */ jsx27(NavigationMenuList, {
                            children: items.map(function(item, index) {
                                return /* @__PURE__ */ jsx27(NavbarItem2, {
                                    item: item,
                                    pathname: pathname
                                }, index);
                            })
                        })
                    })
                }),
                /* @__PURE__ */ jsxs15("div", {
                    className: "flex items-center justify-end gap-2",
                    children: [
                        /* @__PURE__ */ jsxs15("div", {
                            className: "hidden md:flex items-center gap-2 mr-2",
                            children: [
                                /* @__PURE__ */ jsxs15(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: function() {
                                        return window.open(iconLinks.camera || "https://photo.reva.now/create?flow=sid", openLinksInNewTab ? "_blank" : "_self");
                                    },
                                    className: "relative group",
                                    children: [
                                        /* @__PURE__ */ jsx27(Camera3, {
                                            className: "h-5 w-5"
                                        }),
                                        /* @__PURE__ */ jsx27("span", {
                                            className: "sr-only",
                                            children: "Camera"
                                        }),
                                        /* @__PURE__ */ jsx27("span", {
                                            className: "absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50",
                                            children: "Headshots"
                                        })
                                    ]
                                }),
                                /* @__PURE__ */ jsxs15(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: function() {
                                        return window.open(iconLinks.room || "https://photo.reva.now/home-ai", openLinksInNewTab ? "_blank" : "_self");
                                    },
                                    className: "relative group",
                                    children: [
                                        /* @__PURE__ */ jsx27(Sofa3, {
                                            className: "h-5 w-5"
                                        }),
                                        /* @__PURE__ */ jsx27("span", {
                                            className: "sr-only",
                                            children: "Room"
                                        }),
                                        /* @__PURE__ */ jsx27("span", {
                                            className: "absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50",
                                            children: "Virtual Staging"
                                        })
                                    ]
                                }),
                                /* @__PURE__ */ jsxs15(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: function() {
                                        return window.open(iconLinks.phone || "https://call.reva.now", openLinksInNewTab ? "_blank" : "_self");
                                    },
                                    className: "relative group",
                                    children: [
                                        /* @__PURE__ */ jsx27(Phone3, {
                                            className: "h-5 w-5"
                                        }),
                                        /* @__PURE__ */ jsx27("span", {
                                            className: "sr-only",
                                            children: "Phone"
                                        }),
                                        /* @__PURE__ */ jsx27("span", {
                                            className: "absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50",
                                            children: "Lead Calling"
                                        })
                                    ]
                                }),
                                iconLinks.pen ? /* @__PURE__ */ jsxs15(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: function() {
                                        return window.open(iconLinks.pen, openLinksInNewTab ? "_blank" : "_self");
                                    },
                                    className: "relative group",
                                    children: [
                                        /* @__PURE__ */ jsx27(PenLine3, {
                                            className: "h-5 w-5"
                                        }),
                                        /* @__PURE__ */ jsx27("span", {
                                            className: "sr-only",
                                            children: "Pen"
                                        }),
                                        /* @__PURE__ */ jsx27("span", {
                                            className: "absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50",
                                            children: "Prompt Library"
                                        })
                                    ]
                                }) : /* @__PURE__ */ jsxs15(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "relative group",
                                    children: [
                                        /* @__PURE__ */ jsx27(PenLine3, {
                                            className: "h-5 w-5"
                                        }),
                                        /* @__PURE__ */ jsx27("span", {
                                            className: "sr-only",
                                            children: "Pen"
                                        }),
                                        /* @__PURE__ */ jsx27("span", {
                                            className: "absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50",
                                            children: "Prompt Library"
                                        })
                                    ]
                                })
                            ]
                        }),
                        showSearch && /* @__PURE__ */ jsx27("div", {
                            className: "relative hidden md:flex",
                            children: /* @__PURE__ */ jsxs15(Button, {
                                variant: "ghost",
                                size: "icon",
                                onClick: function() {
                                    return window.open(iconLinks.search || "https://stage.reva.now", openLinksInNewTab ? "_blank" : "_self");
                                },
                                className: "relative group",
                                children: [
                                    /* @__PURE__ */ jsx27(Search2, {
                                        className: "h-5 w-5"
                                    }),
                                    /* @__PURE__ */ jsx27("span", {
                                        className: "sr-only",
                                        children: "Search"
                                    }),
                                    /* @__PURE__ */ jsx27("span", {
                                        className: "absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50",
                                        children: "Search"
                                    })
                                ]
                            })
                        }),
                        showLanguageSelector && /* @__PURE__ */ jsxs15(DropdownMenu, {
                            children: [
                                /* @__PURE__ */ jsx27(DropdownMenuTrigger, {
                                    asChild: true,
                                    children: /* @__PURE__ */ jsxs15(Button, {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "gap-1 text-sm font-medium",
                                        children: [
                                            languages.current,
                                            /* @__PURE__ */ jsx27(ChevronDown3, {
                                                className: "h-4 w-4"
                                            })
                                        ]
                                    })
                                }),
                                /* @__PURE__ */ jsx27(DropdownMenuContent, {
                                    align: "end",
                                    children: languages.options.map(function(language) {
                                        return /* @__PURE__ */ jsx27(DropdownMenuItem, {
                                            onClick: function() {
                                                return onLanguageChange === null || onLanguageChange === void 0 ? void 0 : onLanguageChange(language.value);
                                            },
                                            children: language.label
                                        }, language.value);
                                    })
                                })
                            ]
                        }),
                        showThemeToggle && /* @__PURE__ */ jsxs15(DropdownMenu, {
                            children: [
                                /* @__PURE__ */ jsx27(DropdownMenuTrigger, {
                                    asChild: true,
                                    children: /* @__PURE__ */ jsxs15(Button, {
                                        variant: "ghost",
                                        size: "icon",
                                        children: [
                                            isDark ? /* @__PURE__ */ jsx27(Sun3, {
                                                className: "h-5 w-5"
                                            }) : /* @__PURE__ */ jsx27(Moon3, {
                                                className: "h-5 w-5"
                                            }),
                                            /* @__PURE__ */ jsx27("span", {
                                                className: "sr-only",
                                                children: "Toggle theme"
                                            })
                                        ]
                                    })
                                }),
                                /* @__PURE__ */ jsxs15(DropdownMenuContent, {
                                    align: "end",
                                    children: [
                                        /* @__PURE__ */ jsxs15(DropdownMenuItem, {
                                            onClick: function() {
                                                return onThemeToggle === null || onThemeToggle === void 0 ? void 0 : onThemeToggle("light");
                                            },
                                            children: [
                                                /* @__PURE__ */ jsx27(Sun3, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Light"
                                            ]
                                        }),
                                        /* @__PURE__ */ jsxs15(DropdownMenuItem, {
                                            onClick: function() {
                                                return onThemeToggle === null || onThemeToggle === void 0 ? void 0 : onThemeToggle("dark");
                                            },
                                            children: [
                                                /* @__PURE__ */ jsx27(Moon3, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Dark"
                                            ]
                                        }),
                                        /* @__PURE__ */ jsxs15(DropdownMenuItem, {
                                            onClick: function() {
                                                return onThemeToggle === null || onThemeToggle === void 0 ? void 0 : onThemeToggle("glass");
                                            },
                                            children: [
                                                /* @__PURE__ */ jsx27(Glasses, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Glass"
                                            ]
                                        }),
                                        /* @__PURE__ */ jsxs15(DropdownMenuItem, {
                                            onClick: function() {
                                                return onThemeToggle === null || onThemeToggle === void 0 ? void 0 : onThemeToggle("system");
                                            },
                                            children: [
                                                /* @__PURE__ */ jsx27(Settings2, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "System"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        showNotifications && /* @__PURE__ */ jsxs15(Button, {
                            variant: "ghost",
                            size: "icon",
                            children: [
                                /* @__PURE__ */ jsx27(Bell2, {
                                    className: "h-5 w-5"
                                }),
                                /* @__PURE__ */ jsx27("span", {
                                    className: "sr-only",
                                    children: "Notifications"
                                })
                            ]
                        }),
                        showMessages && /* @__PURE__ */ jsxs15(Button, {
                            variant: "ghost",
                            size: "icon",
                            className: "relative",
                            children: [
                                /* @__PURE__ */ jsx27(MessageSquare2, {
                                    className: "h-5 w-5"
                                }),
                                /* @__PURE__ */ jsx27(Badge, {
                                    className: "absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center",
                                    children: "3"
                                }),
                                /* @__PURE__ */ jsx27("span", {
                                    className: "sr-only",
                                    children: "Messages"
                                })
                            ]
                        }),
                        showBalance && /* @__PURE__ */ jsxs15("div", {
                            className: "hidden items-center gap-2 md:flex",
                            children: [
                                /* @__PURE__ */ jsx27(Wallet2, {
                                    className: "h-4 w-4"
                                }),
                                /* @__PURE__ */ jsxs15("span", {
                                    className: "text-sm font-medium text-green-600",
                                    children: [
                                        "+",
                                        balance.toLocaleString()
                                    ]
                                })
                            ]
                        }),
                        showCreateButton && /* @__PURE__ */ jsx27(Button, {
                            className: "bg-black hover:bg-black/90 text-white",
                            children: "Create"
                        }),
                        showUserMenu && user && /* @__PURE__ */ jsxs15(DropdownMenu, {
                            children: [
                                /* @__PURE__ */ jsx27(DropdownMenuTrigger, {
                                    asChild: true,
                                    children: /* @__PURE__ */ jsx27(Button, {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "rounded-full",
                                        children: /* @__PURE__ */ jsxs15(Avatar, {
                                            className: "h-8 w-8",
                                            children: [
                                                /* @__PURE__ */ jsx27(AvatarImage, {
                                                    src: user.image,
                                                    alt: user.name || "User"
                                                }),
                                                /* @__PURE__ */ jsx27(AvatarFallback, {
                                                    children: user.initials || "U"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /* @__PURE__ */ jsxs15(DropdownMenuContent, {
                                    align: "end",
                                    children: [
                                        /* @__PURE__ */ jsxs15(DropdownMenuLabel, {
                                            children: [
                                                user.name && /* @__PURE__ */ jsx27("p", {
                                                    children: user.name
                                                }),
                                                user.email && /* @__PURE__ */ jsx27("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: user.email
                                                })
                                            ]
                                        }),
                                        /* @__PURE__ */ jsx27(DropdownMenuSeparator, {}),
                                        /* @__PURE__ */ jsxs15(DropdownMenuItem, {
                                            children: [
                                                /* @__PURE__ */ jsx27(User2, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Profile"
                                            ]
                                        }),
                                        /* @__PURE__ */ jsxs15(DropdownMenuItem, {
                                            children: [
                                                /* @__PURE__ */ jsx27(Settings2, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Settings"
                                            ]
                                        }),
                                        /* @__PURE__ */ jsx27(DropdownMenuSeparator, {}),
                                        /* @__PURE__ */ jsxs15(DropdownMenuItem, {
                                            onClick: onLogout,
                                            children: [
                                                /* @__PURE__ */ jsx27(LogOut3, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Log out"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /* @__PURE__ */ jsxs15(Button, {
                            variant: "ghost",
                            size: "icon",
                            className: "ml-2",
                            onClick: onLogout,
                            children: [
                                /* @__PURE__ */ jsx27(LogOut3, {
                                    className: "h-5 w-5"
                                }),
                                /* @__PURE__ */ jsx27("span", {
                                    className: "sr-only",
                                    children: "Logout"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function NavbarItem2(param) {
    var item = param.item, pathname = param.pathname;
    if (item.children) {
        return /* @__PURE__ */ jsxs15(NavigationMenuItem, {
            children: [
                /* @__PURE__ */ jsx27(NavigationMenuTrigger, {
                    children: item.title
                }),
                /* @__PURE__ */ jsx27(NavigationMenuContent, {
                    children: /* @__PURE__ */ jsx27("ul", {
                        className: "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]",
                        children: item.children.map(function(child) {
                            return /* @__PURE__ */ jsx27("li", {
                                className: "row-span-3",
                                children: /* @__PURE__ */ jsx27(NavigationMenuLink, {
                                    asChild: true,
                                    children: /* @__PURE__ */ jsxs15(Link7, {
                                        href: child.href || "#",
                                        className: "flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",
                                        children: [
                                            child.icon,
                                            /* @__PURE__ */ jsx27("div", {
                                                className: "mb-2 mt-4 text-lg font-medium",
                                                children: child.title
                                            }),
                                            /* @__PURE__ */ jsx27("p", {
                                                className: "text-sm leading-tight text-muted-foreground",
                                                children: child.description
                                            })
                                        ]
                                    })
                                })
                            }, child.title);
                        })
                    })
                })
            ]
        });
    }
    return /* @__PURE__ */ jsx27(NavigationMenuItem, {
        children: /* @__PURE__ */ jsx27(Link7, {
            href: item.disabled ? "#" : item.href || "#",
            className: cn(navigationMenuTriggerStyle(), "text-sm font-medium", item.disabled && "cursor-not-allowed opacity-60", pathname === item.href && "text-foreground font-semibold"),
            children: item.title
        })
    });
}
function MobileNavItem3(param) {
    var item = param.item, pathname = param.pathname;
    var _React15_useState = _sliced_to_array(React15.useState(false), 2), isOpen = _React15_useState[0], setIsOpen = _React15_useState[1];
    if (item.children) {
        return /* @__PURE__ */ jsxs15("div", {
            className: "px-7",
            children: [
                /* @__PURE__ */ jsxs15("button", {
                    className: "flex w-full items-center justify-between py-2 text-sm font-medium",
                    onClick: function() {
                        return setIsOpen(!isOpen);
                    },
                    children: [
                        item.title,
                        /* @__PURE__ */ jsx27(ChevronDown3, {
                            className: cn("h-4 w-4 transition-transform", isOpen ? "rotate-180" : "")
                        })
                    ]
                }),
                isOpen && /* @__PURE__ */ jsx27("div", {
                    className: "mt-2 space-y-2 pl-4",
                    children: item.children.map(function(child) {
                        return /* @__PURE__ */ jsx27(Link7, {
                            href: child.disabled ? "#" : child.href || "#",
                            className: cn("block py-2 text-sm", child.disabled && "cursor-not-allowed opacity-60", pathname === child.href && "font-semibold"),
                            children: child.title
                        }, child.title);
                    })
                })
            ]
        });
    }
    return /* @__PURE__ */ jsx27(Link7, {
        href: item.disabled ? "#" : item.href || "#",
        className: cn("block px-7 py-2 text-sm font-medium", item.disabled && "cursor-not-allowed opacity-60", pathname === item.href && "font-semibold"),
        children: item.title
    });
}
var defaultNavItems2 = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Features",
        children: [
            {
                title: "Feature 1",
                href: "/features/feature-1",
                description: "This is feature 1"
            },
            {
                title: "Feature 2",
                href: "/features/feature-2",
                description: "This is feature 2"
            }
        ]
    },
    {
        title: "Pricing",
        href: "/pricing"
    },
    {
        title: "About",
        href: "/about"
    }
];
// src/components/new-navbar/ai-assistant.tsx
import * as React16 from "react";
import { Bot, X as X4, Minimize2, Maximize2, Send } from "lucide-react";
import { Fragment as Fragment3, jsx as jsx28, jsxs as jsxs16 } from "react/jsx-runtime";
function AiAssistant() {
    var _React16_useState = _sliced_to_array(React16.useState(false), 2), isOpen = _React16_useState[0], setIsOpen = _React16_useState[1];
    var _React16_useState1 = _sliced_to_array(React16.useState(false), 2), isMinimized = _React16_useState1[0], setIsMinimized = _React16_useState1[1];
    var _React16_useState2 = _sliced_to_array(React16.useState(""), 2), input = _React16_useState2[0], setInput = _React16_useState2[1];
    var _React16_useState3 = _sliced_to_array(React16.useState([
        {
            id: "1",
            content: "Hello! How can I help you today?",
            role: "assistant",
            timestamp: /* @__PURE__ */ new Date()
        }
    ]), 2), messages = _React16_useState3[0], setMessages = _React16_useState3[1];
    var messagesEndRef = React16.useRef(null);
    var scrollToBottom = function() {
        var _messagesEndRef_current;
        (_messagesEndRef_current = messagesEndRef.current) === null || _messagesEndRef_current === void 0 ? void 0 : _messagesEndRef_current.scrollIntoView({
            behavior: "smooth"
        });
    };
    React16.useEffect(function() {
        if (isOpen && !isMinimized) {
            scrollToBottom();
        }
    }, [
        messages,
        isOpen,
        isMinimized
    ]);
    var handleSendMessage = function(e) {
        e.preventDefault();
        if (!input.trim()) return;
        var userMessage = {
            id: Date.now().toString(),
            content: input,
            role: "user",
            timestamp: /* @__PURE__ */ new Date()
        };
        setMessages(function(prev) {
            return _to_consumable_array(prev).concat([
                userMessage
            ]);
        });
        setInput("");
        setTimeout(function() {
            var assistantMessage = {
                id: (Date.now() + 1).toString(),
                content: "I'm your AI assistant. I'm here to help with any questions about REVA.",
                role: "assistant",
                timestamp: /* @__PURE__ */ new Date()
            };
            setMessages(function(prev) {
                return _to_consumable_array(prev).concat([
                    assistantMessage
                ]);
            });
        }, 1e3);
    };
    return /* @__PURE__ */ jsxs16("div", {
        className: "fixed bottom-4 right-4 z-50 flex flex-col items-end",
        children: [
            isOpen && /* @__PURE__ */ jsxs16("div", {
                className: cn("mb-2 w-80 rounded-lg border bg-background shadow-lg transition-all duration-200 ease-in-out", isMinimized ? "h-14" : "h-96"),
                children: [
                    /* @__PURE__ */ jsxs16("div", {
                        className: "flex items-center justify-between border-b p-3",
                        children: [
                            /* @__PURE__ */ jsxs16("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /* @__PURE__ */ jsx28(Avatar, {
                                        className: "h-6 w-6",
                                        children: /* @__PURE__ */ jsx28(AvatarFallback, {
                                            className: "bg-primary text-primary-foreground",
                                            children: "AI"
                                        })
                                    }),
                                    /* @__PURE__ */ jsx28("span", {
                                        className: "font-medium",
                                        children: "REVA Assistant"
                                    })
                                ]
                            }),
                            /* @__PURE__ */ jsxs16("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /* @__PURE__ */ jsx28(Button, {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "h-6 w-6",
                                        onClick: function() {
                                            return setIsMinimized(!isMinimized);
                                        },
                                        children: isMinimized ? /* @__PURE__ */ jsx28(Maximize2, {
                                            className: "h-4 w-4"
                                        }) : /* @__PURE__ */ jsx28(Minimize2, {
                                            className: "h-4 w-4"
                                        })
                                    }),
                                    /* @__PURE__ */ jsx28(Button, {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "h-6 w-6",
                                        onClick: function() {
                                            return setIsOpen(false);
                                        },
                                        children: /* @__PURE__ */ jsx28(X4, {
                                            className: "h-4 w-4"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    !isMinimized && /* @__PURE__ */ jsxs16(Fragment3, {
                        children: [
                            /* @__PURE__ */ jsxs16("div", {
                                className: "flex-1 overflow-y-auto p-3 h-[calc(100%-7rem)]",
                                children: [
                                    messages.map(function(message) {
                                        return /* @__PURE__ */ jsx28("div", {
                                            className: cn("mb-3 max-w-[80%] rounded-lg p-3", message.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"),
                                            children: message.content
                                        }, message.id);
                                    }),
                                    /* @__PURE__ */ jsx28("div", {
                                        ref: messagesEndRef
                                    })
                                ]
                            }),
                            /* @__PURE__ */ jsx28("form", {
                                onSubmit: handleSendMessage,
                                className: "border-t p-3",
                                children: /* @__PURE__ */ jsxs16("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /* @__PURE__ */ jsx28(Input, {
                                            placeholder: "Type a message...",
                                            value: input,
                                            onChange: function(e) {
                                                return setInput(e.target.value);
                                            },
                                            className: "flex-1"
                                        }),
                                        /* @__PURE__ */ jsx28(Button, {
                                            type: "submit",
                                            size: "icon",
                                            className: "bg-primary",
                                            children: /* @__PURE__ */ jsx28(Send, {
                                                className: "h-4 w-4"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /* @__PURE__ */ jsx28(Button, {
                onClick: function() {
                    return setIsOpen(!isOpen);
                },
                className: "h-12 w-12 rounded-full bg-primary shadow-lg",
                children: /* @__PURE__ */ jsx28(Bot, {
                    className: "h-6 w-6"
                })
            })
        ]
    });
}
// src/components/new-navbar/theme-provider.tsx
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { jsx as jsx29 } from "react/jsx-runtime";
function ThemeProvider(_param) {
    var children = _param.children, props = _object_without_properties(_param, [
        "children"
    ]);
    return /* @__PURE__ */ jsx29(NextThemesProvider, _object_spread_props(_object_spread({}, props), {
        themes: [
            "light",
            "dark",
            "system",
            "glass"
        ],
        children: children
    }));
}
// src/components/new-navbar/theme-toggle.tsx
import { Moon as Moon4, Sun as Sun4 } from "lucide-react";
import { useTheme as useTheme5 } from "next-themes";
import { jsx as jsx30, jsxs as jsxs17 } from "react/jsx-runtime";
function ThemeToggle2() {
    var setTheme = useTheme5().setTheme;
    return /* @__PURE__ */ jsxs17(DropdownMenu, {
        children: [
            /* @__PURE__ */ jsx30(DropdownMenuTrigger, {
                asChild: true,
                children: /* @__PURE__ */ jsxs17(Button, {
                    variant: "ghost",
                    size: "icon",
                    children: [
                        /* @__PURE__ */ jsx30(Sun4, {
                            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                        }),
                        /* @__PURE__ */ jsx30(Moon4, {
                            className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                        }),
                        /* @__PURE__ */ jsx30("span", {
                            className: "sr-only",
                            children: "Toggle theme"
                        })
                    ]
                })
            }),
            /* @__PURE__ */ jsxs17(DropdownMenuContent, {
                align: "end",
                children: [
                    /* @__PURE__ */ jsx30(DropdownMenuItem, {
                        onClick: function() {
                            return setTheme("light");
                        },
                        children: "Light"
                    }),
                    /* @__PURE__ */ jsx30(DropdownMenuItem, {
                        onClick: function() {
                            return setTheme("dark");
                        },
                        children: "Dark"
                    }),
                    /* @__PURE__ */ jsx30(DropdownMenuItem, {
                        onClick: function() {
                            return setTheme("system");
                        },
                        children: "System"
                    })
                ]
            })
        ]
    });
}
export { AiAssistant, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Collapsible, CollapsibleContent2 as CollapsibleContent, CollapsibleTrigger2 as CollapsibleTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Input, Label2 as Label, LoginForm, LoginModal, NavHistory, NavListings, NavMain, NavSecondary, Navbar, NavbarWrapper, NewNavbar, RevaLogo2 as RevaLogo, RevaNavbar, Separator2 as Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarLeft, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, Skeleton, ThemeProvider, ThemeToggle2 as ThemeToggle, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, buttonVariants, cn, formatDateTime, useIsMobile, useSidebar };
//# sourceMappingURL=index.mjs.map