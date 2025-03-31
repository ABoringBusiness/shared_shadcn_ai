"use strict";
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.ts
var index_exports = {};
__export(index_exports, {
    Button: function() {
        return Button;
    },
    Card: function() {
        return Card;
    },
    CardContent: function() {
        return CardContent;
    },
    CardDescription: function() {
        return CardDescription;
    },
    CardFooter: function() {
        return CardFooter;
    },
    CardHeader: function() {
        return CardHeader;
    },
    CardTitle: function() {
        return CardTitle;
    },
    Collapsible: function() {
        return Collapsible;
    },
    CollapsibleContent: function() {
        return CollapsibleContent2;
    },
    CollapsibleTrigger: function() {
        return CollapsibleTrigger2;
    },
    DropdownMenu: function() {
        return DropdownMenu;
    },
    DropdownMenuCheckboxItem: function() {
        return DropdownMenuCheckboxItem;
    },
    DropdownMenuContent: function() {
        return DropdownMenuContent;
    },
    DropdownMenuGroup: function() {
        return DropdownMenuGroup;
    },
    DropdownMenuItem: function() {
        return DropdownMenuItem;
    },
    DropdownMenuLabel: function() {
        return DropdownMenuLabel;
    },
    DropdownMenuPortal: function() {
        return DropdownMenuPortal;
    },
    DropdownMenuRadioGroup: function() {
        return DropdownMenuRadioGroup;
    },
    DropdownMenuRadioItem: function() {
        return DropdownMenuRadioItem;
    },
    DropdownMenuSeparator: function() {
        return DropdownMenuSeparator;
    },
    DropdownMenuShortcut: function() {
        return DropdownMenuShortcut;
    },
    DropdownMenuSub: function() {
        return DropdownMenuSub;
    },
    DropdownMenuSubContent: function() {
        return DropdownMenuSubContent;
    },
    DropdownMenuSubTrigger: function() {
        return DropdownMenuSubTrigger;
    },
    DropdownMenuTrigger: function() {
        return DropdownMenuTrigger;
    },
    Input: function() {
        return Input;
    },
    Label: function() {
        return Label2;
    },
    LoginForm: function() {
        return LoginForm;
    },
    NavHistory: function() {
        return NavHistory;
    },
    NavListings: function() {
        return NavListings;
    },
    NavMain: function() {
        return NavMain;
    },
    NavSecondary: function() {
        return NavSecondary;
    },
    Navbar: function() {
        return Navbar;
    },
    NavbarWrapper: function() {
        return NavbarWrapper;
    },
    Separator: function() {
        return Separator2;
    },
    Sheet: function() {
        return Sheet;
    },
    SheetClose: function() {
        return SheetClose;
    },
    SheetContent: function() {
        return SheetContent;
    },
    SheetDescription: function() {
        return SheetDescription;
    },
    SheetFooter: function() {
        return SheetFooter;
    },
    SheetHeader: function() {
        return SheetHeader;
    },
    SheetOverlay: function() {
        return SheetOverlay;
    },
    SheetPortal: function() {
        return SheetPortal;
    },
    SheetTitle: function() {
        return SheetTitle;
    },
    SheetTrigger: function() {
        return SheetTrigger;
    },
    Sidebar: function() {
        return Sidebar;
    },
    SidebarContent: function() {
        return SidebarContent;
    },
    SidebarFooter: function() {
        return SidebarFooter;
    },
    SidebarGroup: function() {
        return SidebarGroup;
    },
    SidebarGroupAction: function() {
        return SidebarGroupAction;
    },
    SidebarGroupContent: function() {
        return SidebarGroupContent;
    },
    SidebarGroupLabel: function() {
        return SidebarGroupLabel;
    },
    SidebarHeader: function() {
        return SidebarHeader;
    },
    SidebarInput: function() {
        return SidebarInput;
    },
    SidebarInset: function() {
        return SidebarInset;
    },
    SidebarLeft: function() {
        return SidebarLeft;
    },
    SidebarMenu: function() {
        return SidebarMenu;
    },
    SidebarMenuAction: function() {
        return SidebarMenuAction;
    },
    SidebarMenuBadge: function() {
        return SidebarMenuBadge;
    },
    SidebarMenuButton: function() {
        return SidebarMenuButton;
    },
    SidebarMenuItem: function() {
        return SidebarMenuItem;
    },
    SidebarMenuSkeleton: function() {
        return SidebarMenuSkeleton;
    },
    SidebarMenuSub: function() {
        return SidebarMenuSub;
    },
    SidebarMenuSubButton: function() {
        return SidebarMenuSubButton;
    },
    SidebarMenuSubItem: function() {
        return SidebarMenuSubItem;
    },
    SidebarProvider: function() {
        return SidebarProvider;
    },
    SidebarRail: function() {
        return SidebarRail;
    },
    SidebarSeparator: function() {
        return SidebarSeparator;
    },
    SidebarTrigger: function() {
        return SidebarTrigger;
    },
    Skeleton: function() {
        return Skeleton;
    },
    ThemeToggle: function() {
        return ThemeToggle;
    },
    Tooltip: function() {
        return Tooltip;
    },
    TooltipContent: function() {
        return TooltipContent;
    },
    TooltipProvider: function() {
        return TooltipProvider;
    },
    TooltipTrigger: function() {
        return TooltipTrigger;
    },
    buttonVariants: function() {
        return buttonVariants;
    },
    cn: function() {
        return cn;
    },
    formatDateTime: function() {
        return formatDateTime;
    },
    useIsMobile: function() {
        return useIsMobile;
    },
    useSidebar: function() {
        return useSidebar;
    }
});
module.exports = __toCommonJS(index_exports);
// src/components/navbar/navbar.tsx
var import_react = require("react");
var import_link = __toESM(require("next/link"));
var import_navigation = require("next/navigation");
var import_framer_motion = require("framer-motion");
var import_lucide_react4 = require("lucide-react");
// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
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
var React = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
    var Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, _object_spread({
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
var React2 = __toESM(require("react"));
var SheetPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_class_variance_authority2 = require("class-variance-authority");
var import_lucide_react = require("lucide-react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var Sheet = SheetPrimitive.Root;
var SheetTrigger = SheetPrimitive.Trigger;
var SheetClose = SheetPrimitive.Close;
var SheetPortal = SheetPrimitive.Portal;
var SheetOverlay = React2.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SheetPrimitive.Overlay, _object_spread_props(_object_spread({
        className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)
    }, props), {
        ref: ref
    }));
});
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
var sheetVariants = (0, import_class_variance_authority2.cva)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
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
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(SheetPortal, {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SheetOverlay, {}),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(SheetPrimitive.Content, _object_spread_props(_object_spread({
                ref: ref,
                className: cn(sheetVariants({
                    side: side
                }), className)
            }, props), {
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(SheetPrimitive.Close, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.X, {
                                className: "h-4 w-4"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
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
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", _object_spread({
        className: cn("flex flex-col space-y-2 text-center sm:text-left", className)
    }, props));
};
SheetHeader.displayName = "SheetHeader";
var SheetFooter = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", _object_spread({
        className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)
    }, props));
};
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React2.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SheetPrimitive.Title, _object_spread({
        ref: ref,
        className: cn("text-lg font-semibold text-foreground", className)
    }, props));
});
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React2.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SheetPrimitive.Description, _object_spread({
        ref: ref,
        className: cn("text-sm text-muted-foreground", className)
    }, props));
});
SheetDescription.displayName = SheetPrimitive.Description.displayName;
// src/components/navbar/theme-toggle.tsx
var React4 = __toESM(require("react"));
var import_lucide_react3 = require("lucide-react");
var import_next_themes = require("next-themes");
// src/components/ui/dropdown-menu.tsx
var React3 = __toESM(require("react"));
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime3 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(DropdownMenuPrimitive.SubTrigger, _object_spread_props(_object_spread({
        ref: ref,
        className: cn("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className)
    }, props), {
        children: [
            children,
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.ChevronRight, {
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
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DropdownMenuPrimitive.SubContent, _object_spread({
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
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DropdownMenuPrimitive.Portal, {
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DropdownMenuPrimitive.Content, _object_spread({
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
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DropdownMenuPrimitive.Item, _object_spread({
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
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(DropdownMenuPrimitive.CheckboxItem, _object_spread_props(_object_spread({
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DropdownMenuPrimitive.ItemIndicator, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Check, {
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
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(DropdownMenuPrimitive.RadioItem, _object_spread_props(_object_spread({
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DropdownMenuPrimitive.ItemIndicator, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Circle, {
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
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DropdownMenuPrimitive.Label, _object_spread({
        ref: ref,
        className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)
    }, props));
});
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React3.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DropdownMenuPrimitive.Separator, _object_spread({
        ref: ref,
        className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props));
});
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", _object_spread({
        className: cn("ml-auto text-xs tracking-widest opacity-60", className)
    }, props));
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
// src/components/navbar/theme-toggle.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function ThemeToggle(param) {
    var className = param.className, _param_collapsed = param.collapsed, collapsed = _param_collapsed === void 0 ? false : _param_collapsed;
    var _ref = (0, import_next_themes.useTheme)(), theme = _ref.theme, setTheme = _ref.setTheme;
    var _React4_useState = _sliced_to_array(React4.useState(false), 2), mounted = _React4_useState[0], setMounted = _React4_useState[1];
    React4.useEffect(function() {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    var Icon = theme === "dark" ? import_lucide_react3.Moon : theme === "system" ? import_lucide_react3.Monitor : import_lucide_react3.Sun;
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(DropdownMenu, {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DropdownMenuTrigger, {
                asChild: true,
                children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
                    variant: "ghost",
                    size: "sm",
                    className: "flex justify-center",
                    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, {
                        className: "h-4 w-4"
                    })
                }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Button, {
                    variant: "ghost",
                    size: "sm",
                    className: className,
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, {
                            className: "h-[1.2rem] w-[1.2rem]"
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", {
                            className: "ml-2",
                            children: "Theme"
                        })
                    ]
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(DropdownMenuContent, {
                align: "end",
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(DropdownMenuItem, {
                        onClick: function() {
                            return setTheme("light");
                        },
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Sun, {
                                className: "mr-2 h-4 w-4"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", {
                                children: "Light"
                            }),
                            theme === "light" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Check, {
                                className: "ml-2 h-4 w-4"
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(DropdownMenuItem, {
                        onClick: function() {
                            return setTheme("dark");
                        },
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Moon, {
                                className: "mr-2 h-4 w-4"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", {
                                children: "Dark"
                            }),
                            theme === "dark" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Check, {
                                className: "ml-2 h-4 w-4"
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(DropdownMenuItem, {
                        onClick: function() {
                            return setTheme("system");
                        },
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Monitor, {
                                className: "mr-2 h-4 w-4"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", {
                                children: "System"
                            }),
                            theme === "system" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Check, {
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
var import_next_themes2 = require("next-themes");
var import_image = __toESM(require("next/image"));
var import_jsx_runtime5 = require("react/jsx-runtime");
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
    var _ref = _sliced_to_array((0, import_react.useState)(false), 2), isScrolled = _ref[0], setIsScrolled = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react.useState)(false), 2), isPromptMenuOpen = _ref1[0], setIsPromptMenuOpen = _ref1[1];
    var _ref2 = _sliced_to_array((0, import_react.useState)(false), 2), isLoggedIn = _ref2[0], setIsLoggedIn = _ref2[1];
    var theme = (0, import_next_themes2.useTheme)().theme;
    var promptMenuRef = (0, import_react.useRef)(null);
    var pathname = (0, import_navigation.usePathname)();
    (0, import_react.useEffect)(function() {
        var handleScroll = function() {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return function() {
            return window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    (0, import_react.useEffect)(function() {
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
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("header", {
        className: cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-background/80 backdrop-blur-lg border-b shadow-sm" : "bg-transparent"),
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
            className: "px-4 pr-8",
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                className: "flex h-16 items-center justify-between",
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_link.default, {
                        href: "/",
                        className: "flex items-center space-x-2",
                        children: theme === "light" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_image.default, {
                            src: logoLight,
                            alt: "Logo",
                            width: 100,
                            height: 50
                        }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_image.default, {
                            src: logoDark,
                            alt: "Logo",
                            width: 100,
                            height: 50
                        })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                        className: "hidden md:flex items-center space-x-1",
                        children: [
                            navItems.map(function(item) {
                                return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(NavItem, {
                                    href: item.href,
                                    isActive: pathname === item.href,
                                    children: item.label
                                }, item.href);
                            }),
                            promptMenuComponent && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                                ref: promptMenuRef,
                                className: "relative",
                                children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", {
                                        className: cn("relative px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center", isPromptMenuOpen ? "text-primary" : "text-foreground/70 hover:text-foreground hover:bg-accent"),
                                        onClick: function() {
                                            return setIsPromptMenuOpen(!isPromptMenuOpen);
                                        },
                                        onMouseEnter: function() {
                                            return setIsPromptMenuOpen(true);
                                        },
                                        children: [
                                            "GPT Prompts",
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.ChevronDown, {
                                                className: "ml-1 h-4 w-4"
                                            })
                                        ]
                                    }),
                                    isPromptMenuOpen && promptMenuComponent
                                ]
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            actionButtons || /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, {
                                children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Button, {
                                        variant: "outline",
                                        size: "icon",
                                        onClick: onWriteClick,
                                        className: "hidden md:flex relative group",
                                        "data-write-button": "true",
                                        children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.PenLine, {
                                                className: "h-5 w-5"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                className: "sr-only",
                                                children: "Write"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                className: "absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg",
                                                children: "Prompt Library"
                                            })
                                        ]
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Button, {
                                        variant: "outline",
                                        size: "icon",
                                        className: "relative group",
                                        children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.Phone, {
                                                className: "h-5 w-5"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                className: "sr-only",
                                                children: "Lead Calling"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                className: "absolute -top-2 -right-2 w-4 h-4 bg-destructive rounded-full flex items-center justify-center text-[10px] text-destructive-foreground",
                                                children: "3"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                className: "absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg",
                                                children: "Lead Calling"
                                            })
                                        ]
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Button, {
                                        variant: "outline",
                                        size: "icon",
                                        className: "relative group",
                                        children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.Sofa, {
                                                className: "h-5 w-5"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                className: "sr-only",
                                                children: "Virtual Staging"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                className: "absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg",
                                                children: "Virtual Staging"
                                            })
                                        ]
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Button, {
                                        variant: "outline",
                                        size: "icon",
                                        className: "relative group",
                                        children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.Camera, {
                                                className: "h-5 w-5"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                className: "sr-only",
                                                children: "Headshots"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                className: "absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg",
                                                children: "Headshots"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                                className: "flex pl-8",
                                children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ThemeToggle, {
                                        className: "w-full justify-start",
                                        collapsed: true
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Button, {
                                        variant: "default",
                                        size: "sm",
                                        className: "ml-2 hidden sm:flex items-center gap-1.5",
                                        onClick: handleAuthClick,
                                        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, {
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.LogOut, {
                                                    className: "h-4 w-4"
                                                }),
                                                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                    children: "Log Out"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                                className: "md:hidden",
                                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Sheet, {
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SheetTrigger, {
                                            asChild: true,
                                            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Button, {
                                                variant: "ghost",
                                                size: "icon",
                                                children: [
                                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.Menu, {
                                                        className: "h-5 w-5"
                                                    }),
                                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                        className: "sr-only",
                                                        children: "Menu"
                                                    })
                                                ]
                                            })
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(SheetContent, {
                                            side: "right",
                                            className: "w-[300px] sm:w-[400px]",
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(SheetHeader, {
                                                    children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SheetTitle, {
                                                            children: "Menu"
                                                        }),
                                                        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SheetDescription, {
                                                            children: "Navigate to different sections of the site."
                                                        })
                                                    ]
                                                }),
                                                /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                                                    className: "py-6 space-y-4",
                                                    children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Button, {
                                                            variant: "outline",
                                                            className: "w-full justify-start gap-2",
                                                            onClick: onWriteClick,
                                                            "data-write-button": "true",
                                                            children: [
                                                                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.PenLine, {
                                                                    className: "h-4 w-4"
                                                                }),
                                                                "Prompt Library"
                                                            ]
                                                        }),
                                                        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("nav", {
                                                            className: "flex flex-col space-y-1",
                                                            children: [
                                                                navItems.map(function(item) {
                                                                    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(MobileNavItem, {
                                                                        href: item.href,
                                                                        isActive: pathname === item.href,
                                                                        children: item.label
                                                                    }, item.href);
                                                                }),
                                                                promptMenuComponent && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(MobileNavItem, {
                                                                    href: "/gpt-prompts",
                                                                    isActive: pathname === "/gpt-prompts",
                                                                    children: "GPT Prompts"
                                                                })
                                                            ]
                                                        }),
                                                        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                                                            className: "pt-4 border-t",
                                                            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Button, {
                                                                variant: "default",
                                                                className: "w-full flex items-center justify-center gap-1.5",
                                                                onClick: handleAuthClick,
                                                                children: [
                                                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ThemeToggle, {
                                                                        className: "w-full justify-start",
                                                                        collapsed: true
                                                                    }),
                                                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, {
                                                                        children: [
                                                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.LogOut, {
                                                                                className: "h-4 w-4"
                                                                            }),
                                                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
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
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_link.default, {
        href: href,
        className: cn("relative px-3 py-2 rounded-md text-sm font-medium transition-colors", isActive ? "text-primary" : "text-foreground/70 hover:text-foreground hover:bg-accent"),
        children: [
            children,
            isActive && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_framer_motion.motion.div, {
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
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_link.default, {
        href: href,
        className: cn("flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors", isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"),
        children: children
    });
}
// src/components/navbar/navbar-wrapper.tsx
var import_react2 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
function NavbarWrapper(param) {
    var logoLight = param.logoLight, logoDark = param.logoDark, navItems = param.navItems, actionButtons = param.actionButtons, promptModalComponent = param.promptModalComponent, promptMenuComponent = param.promptMenuComponent;
    var _ref = _sliced_to_array((0, import_react2.useState)(false), 2), isPromptModalOpen = _ref[0], setPromptModalOpen = _ref[1];
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Navbar, {
                onWriteClick: function() {
                    return setPromptModalOpen(true);
                },
                logoLight: logoLight,
                logoDark: logoDark,
                navItems: navItems,
                actionButtons: actionButtons,
                promptMenuComponent: promptMenuComponent
            }),
            promptModalComponent && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
                className: isPromptModalOpen ? "block" : "hidden",
                children: promptModalComponent
            })
        ]
    });
}
// src/components/sidebar/sidebar-left.tsx
var import_image2 = __toESM(require("next/image"));
// src/components/ui/sidebar.tsx
var React9 = __toESM(require("react"));
var import_react_slot2 = require("@radix-ui/react-slot");
var import_class_variance_authority3 = require("class-variance-authority");
// src/components/ui/input.tsx
var React5 = __toESM(require("react"));
var import_jsx_runtime7 = require("react/jsx-runtime");
var Input = React5.forwardRef(function(_param, ref) {
    var className = _param.className, type = _param.type, props = _object_without_properties(_param, [
        "className",
        "type"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", _object_spread({
        type: type,
        className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref
    }, props));
});
Input.displayName = "Input";
// src/components/ui/separator.tsx
var React6 = __toESM(require("react"));
var SeparatorPrimitive = __toESM(require("@radix-ui/react-separator"));
var import_jsx_runtime8 = require("react/jsx-runtime");
var Separator2 = React6.forwardRef(function(_param, ref) {
    var className = _param.className, _param_orientation = _param.orientation, orientation = _param_orientation === void 0 ? "horizontal" : _param_orientation, _param_decorative = _param.decorative, decorative = _param_decorative === void 0 ? true : _param_decorative, props = _object_without_properties(_param, [
        "className",
        "orientation",
        "decorative"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SeparatorPrimitive.Root, _object_spread({
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className)
    }, props));
});
Separator2.displayName = SeparatorPrimitive.Root.displayName;
// src/components/ui/skeleton.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function Skeleton(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", _object_spread({
        className: cn("animate-pulse rounded-md bg-primary/10", className)
    }, props));
}
// src/components/ui/tooltip.tsx
var React7 = __toESM(require("react"));
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"));
var import_jsx_runtime10 = require("react/jsx-runtime");
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React7.forwardRef(function(_param, ref) {
    var className = _param.className, _param_sideOffset = _param.sideOffset, sideOffset = _param_sideOffset === void 0 ? 4 : _param_sideOffset, props = _object_without_properties(_param, [
        "className",
        "sideOffset"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TooltipPrimitive.Portal, {
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TooltipPrimitive.Content, _object_spread({
            ref: ref,
            sideOffset: sideOffset,
            className: cn("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)
        }, props))
    });
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
// src/components/ui/sidebar.tsx
var import_react_icons = require("@radix-ui/react-icons");
// src/hooks/use-mobile.tsx
var React8 = __toESM(require("react"));
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
var import_jsx_runtime11 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SidebarContext.Provider, {
        value: contextValue,
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TooltipProvider, {
            delayDuration: 0,
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", _object_spread_props(_object_spread({
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
        return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", _object_spread_props(_object_spread({
            className: cn("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className),
            ref: ref
        }, props), {
            children: children
        }));
    }
    if (isMobile) {
        return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Sheet, _object_spread_props(_object_spread({
            open: openMobile,
            onOpenChange: setOpenMobile
        }, props), {
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(SheetContent, {
                "data-sidebar": "sidebar",
                "data-mobile": "true",
                className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
                style: {
                    "--sidebar-width": SIDEBAR_WIDTH_MOBILE
                },
                side: side,
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(SheetHeader, {
                        className: "sr-only",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SheetTitle, {
                                children: "Sidebar"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SheetDescription, {
                                children: "Displays the mobile sidebar."
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {
                        className: "flex h-full w-full flex-col",
                        children: children
                    })
                ]
            })
        }));
    }
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", {
        ref: ref,
        className: "group peer hidden text-sidebar-foreground md:block",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {
                className: cn("relative w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]")
            }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", _object_spread_props(_object_spread({
                className: cn("fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex", side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l", className)
            }, props), {
                children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Button, _object_spread_props(_object_spread({
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
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_icons.ViewVerticalIcon, {}),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", {
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", _object_spread({
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("main", _object_spread({
        ref: ref,
        className: cn("relative flex w-full flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow", className)
    }, props));
});
SidebarInset.displayName = "SidebarInset";
var SidebarInput = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Input, _object_spread({
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", _object_spread({
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", _object_spread({
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Separator2, _object_spread({
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", _object_spread({
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", _object_spread({
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
    var Comp = asChild ? import_react_slot2.Slot : "div";
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Comp, _object_spread({
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
    var Comp = asChild ? import_react_slot2.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Comp, _object_spread({
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", _object_spread({
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ul", _object_spread({
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("li", _object_spread({
        ref: ref,
        "data-sidebar": "menu-item",
        className: cn("group/menu-item relative", className)
    }, props));
});
SidebarMenuItem.displayName = "SidebarMenuItem";
var sidebarMenuButtonVariants = (0, import_class_variance_authority3.cva)("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
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
    var Comp = asChild ? import_react_slot2.Slot : "button";
    var _useSidebar = useSidebar(), isMobile = _useSidebar.isMobile, state = _useSidebar.state;
    var button = /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Comp, _object_spread({
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Tooltip, {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TooltipTrigger, {
                asChild: true,
                children: button
            }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TooltipContent, _object_spread({
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
    var Comp = asChild ? import_react_slot2.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Comp, _object_spread({
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", _object_spread({
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", _object_spread_props(_object_spread({
        ref: ref,
        "data-sidebar": "menu-skeleton",
        className: cn("flex h-8 items-center gap-2 rounded-md px-2", className)
    }, props), {
        children: [
            showIcon && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Skeleton, {
                className: "size-4 rounded-md",
                "data-sidebar": "menu-skeleton-icon"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Skeleton, {
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ul", _object_spread({
        ref: ref,
        "data-sidebar": "menu-sub",
        className: cn("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className)
    }, props));
});
SidebarMenuSub.displayName = "SidebarMenuSub";
var SidebarMenuSubItem = React9.forwardRef(function(_param, ref) {
    var props = _extends({}, _object_destructuring_empty(_param));
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("li", _object_spread({
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
    var Comp = asChild ? import_react_slot2.Slot : "a";
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Comp, _object_spread({
        ref: ref,
        "data-sidebar": "menu-sub-button",
        "data-size": size,
        "data-active": isActive,
        className: cn("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size === "sm" && "text-xs", size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className)
    }, props));
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
// src/components/sidebar/nav-main.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function NavMain(param) {
    var items = param.items, maxItems = param.maxItems;
    var displayItems = maxItems ? items.slice(0, maxItems) : items;
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SidebarMenu, {
        children: displayItems.map(function(item) {
            return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SidebarMenuItem, {
                children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SidebarMenuButton, {
                    asChild: true,
                    isActive: item.isActive,
                    className: "py-1.5",
                    children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("a", {
                        href: item.url,
                        title: item.title,
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(item.icon, {
                                className: "h-4 w-4"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", {
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
var import_jsx_runtime13 = require("react/jsx-runtime");
function NavSecondary(_param) {
    var items = _param.items, maxItems = _param.maxItems, props = _object_without_properties(_param, [
        "items",
        "maxItems"
    ]);
    var displayItems = maxItems ? items.slice(0, maxItems) : items;
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarGroup, _object_spread_props(_object_spread({}, props), {
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarGroupContent, {
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarMenu, {
                children: displayItems.map(function(item) {
                    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(SidebarMenuItem, {
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarMenuButton, {
                                asChild: true,
                                className: "py-1.5",
                                children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("a", {
                                    href: item.url,
                                    title: item.title,
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(item.icon, {
                                            className: "h-4 w-4"
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", {
                                            className: "truncate",
                                            children: item.title
                                        })
                                    ]
                                })
                            }),
                            item.badge && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarMenuBadge, {
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
var import_lucide_react5 = require("lucide-react");
var import_react_icons2 = require("@radix-ui/react-icons");
var import_jsx_runtime14 = require("react/jsx-runtime");
function NavHistory(param) {
    var history = param.history, _param_maxItems = param.maxItems, maxItems = _param_maxItems === void 0 ? 5 : _param_maxItems;
    var isMobile = useSidebar().isMobile;
    var displayHistory = history.slice(0, maxItems);
    var remainingCount = Math.max(0, history.length - maxItems);
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(SidebarGroup, {
        className: "group-data-[collapsible=icon]:hidden",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(SidebarGroupLabel, {
                className: "flex justify-between items-center",
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", {
                        children: "History"
                    }),
                    remainingCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                            history.length,
                            " items"
                        ]
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(SidebarMenu, {
                children: [
                    displayHistory.map(function(item) {
                        return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(SidebarMenuItem, {
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SidebarMenuButton, {
                                    asChild: true,
                                    className: "py-1.5",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("a", {
                                        href: item.url,
                                        title: item.name,
                                        children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", {
                                                className: "truncate",
                                                children: item.name
                                            }),
                                            item.date && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", {
                                                className: "ml-auto text-xs text-muted-foreground hidden sm:inline-block",
                                                children: item.date
                                            })
                                        ]
                                    })
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DropdownMenu, {
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DropdownMenuTrigger, {
                                            asChild: true,
                                            children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(SidebarMenuAction, {
                                                showOnHover: true,
                                                children: [
                                                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_icons2.DotsHorizontalIcon, {}),
                                                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", {
                                                        className: "sr-only",
                                                        children: "More"
                                                    })
                                                ]
                                            })
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DropdownMenuContent, {
                                            className: "w-56 rounded-lg",
                                            side: isMobile ? "bottom" : "right",
                                            align: isMobile ? "end" : "start",
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DropdownMenuItem, {
                                                    children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.Clock, {
                                                            className: "text-muted-foreground"
                                                        }),
                                                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", {
                                                            children: "Remove from History"
                                                        })
                                                    ]
                                                }),
                                                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DropdownMenuSeparator, {}),
                                                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DropdownMenuItem, {
                                                    children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.Link, {
                                                            className: "text-muted-foreground"
                                                        }),
                                                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", {
                                                            children: "Copy Link"
                                                        })
                                                    ]
                                                }),
                                                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DropdownMenuItem, {
                                                    children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.ArrowUpRight, {
                                                            className: "text-muted-foreground"
                                                        }),
                                                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", {
                                                            children: "Open in New Tab"
                                                        })
                                                    ]
                                                }),
                                                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DropdownMenuSeparator, {}),
                                                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DropdownMenuItem, {
                                                    children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.Trash2, {
                                                            className: "text-muted-foreground"
                                                        }),
                                                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", {
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
                    remainingCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SidebarMenuItem, {
                        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(SidebarMenuButton, {
                            className: "text-sidebar-foreground/70 py-1.5",
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.ChevronRight, {
                                    className: "h-3.5 w-3.5 mr-2"
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", {
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
var CollapsiblePrimitive = __toESM(require("@radix-ui/react-collapsible"));
var Collapsible = CollapsiblePrimitive.Root;
var CollapsibleTrigger2 = CollapsiblePrimitive.CollapsibleTrigger;
var CollapsibleContent2 = CollapsiblePrimitive.CollapsibleContent;
// src/components/sidebar/nav-listings.tsx
var import_react_icons3 = require("@radix-ui/react-icons");
var import_lucide_react6 = require("lucide-react");
var import_react3 = require("react");
var import_jsx_runtime15 = require("react/jsx-runtime");
function NavListings(param) {
    var listings = param.listings, _param_maxCategories = param.maxCategories, maxCategories = _param_maxCategories === void 0 ? 3 : _param_maxCategories, _param_maxPropertiesPerCategory = param.maxPropertiesPerCategory, maxPropertiesPerCategory = _param_maxPropertiesPerCategory === void 0 ? 3 : _param_maxPropertiesPerCategory;
    var _ref = _sliced_to_array((0, import_react3.useState)([]), 2), expandedCategories = _ref[0], setExpandedCategories = _ref[1];
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
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(SidebarGroup, {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(SidebarGroupLabel, {
                className: "flex justify-between items-center",
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", {
                        children: "Listings"
                    }),
                    remainingCategories > 0 && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                            listings.length,
                            " categories"
                        ]
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SidebarGroupContent, {
                children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(SidebarMenu, {
                    children: [
                        displayListings.map(function(category) {
                            return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Collapsible, {
                                open: expandedCategories.includes(category.name),
                                children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(SidebarMenuItem, {
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SidebarMenuButton, {
                                            asChild: true,
                                            className: "py-1.5",
                                            onClick: function() {
                                                return toggleCategory(category.name);
                                            },
                                            children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("a", {
                                                href: "#",
                                                children: [
                                                    category.icon || /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react6.Building, {
                                                        className: "h-3.5 w-3.5 mr-2 text-muted-foreground"
                                                    }),
                                                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", {
                                                        className: "truncate",
                                                        children: category.name
                                                    }),
                                                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", {
                                                        className: "ml-auto text-xs text-muted-foreground",
                                                        children: category.properties.length
                                                    })
                                                ]
                                            })
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CollapsibleTrigger2, {
                                            asChild: true,
                                            children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SidebarMenuAction, {
                                                className: "left-2 bg-sidebar-accent text-sidebar-accent-foreground data-[state=open]:rotate-90",
                                                showOnHover: true,
                                                onClick: function() {
                                                    return toggleCategory(category.name);
                                                },
                                                children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_icons3.ChevronRightIcon, {})
                                            })
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CollapsibleContent2, {
                                            children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(SidebarMenuSub, {
                                                children: [
                                                    category.properties.slice(0, maxPropertiesPerCategory).map(function(property) {
                                                        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SidebarMenuSubItem, {
                                                            children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SidebarMenuSubButton, {
                                                                asChild: true,
                                                                className: "py-1",
                                                                children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("a", {
                                                                    href: property.url,
                                                                    children: [
                                                                        property.icon || /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react6.Home, {
                                                                            className: "h-3 w-3 mr-2 text-muted-foreground"
                                                                        }),
                                                                        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", {
                                                                            className: "truncate",
                                                                            children: property.name
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }, property.name);
                                                    }),
                                                    category.properties.length > maxPropertiesPerCategory && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SidebarMenuSubItem, {
                                                        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(SidebarMenuSubButton, {
                                                            className: "text-sidebar-foreground/70 py-1",
                                                            children: [
                                                                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_icons3.ChevronRightIcon, {
                                                                    className: "mr-2"
                                                                }),
                                                                /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", {
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
                        remainingCategories > 0 && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SidebarMenuItem, {
                            children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(SidebarMenuButton, {
                                className: "text-sidebar-foreground/70 py-1.5",
                                children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_icons3.ChevronRightIcon, {
                                        className: "mr-2"
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", {
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
var import_jsx_runtime16 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Sidebar, _object_spread_props(_object_spread({
        className: "border-r-0 w-64"
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(SidebarHeader, {
                className: "h-auto py-2",
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", {
                        className: "m-2",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_image2.default, {
                                src: logoLight,
                                alt: "Logo",
                                width: 120,
                                height: 40,
                                className: "dark:hidden"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_image2.default, {
                                src: logoDark,
                                alt: "Logo",
                                width: 120,
                                height: 40,
                                className: "hidden dark:block"
                            })
                        ]
                    }),
                    navMainItems && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(NavMain, {
                        items: navMainItems,
                        maxItems: maxMainItems
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(SidebarContent, {
                className: "overflow-y-auto",
                children: [
                    historyItems && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(NavHistory, {
                        history: historyItems,
                        maxItems: maxHistoryItems
                    }),
                    listingItems && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(NavListings, {
                        listings: listingItems,
                        maxCategories: maxListingCategories,
                        maxPropertiesPerCategory: maxPropertiesPerCategory
                    }),
                    navSecondaryItems && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(NavSecondary, {
                        items: navSecondaryItems,
                        maxItems: maxSecondaryItems,
                        className: "mt-auto"
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(SidebarRail, {})
        ]
    }));
}
// src/components/ui/card.tsx
var React10 = __toESM(require("react"));
var import_jsx_runtime17 = require("react/jsx-runtime");
var Card = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", _object_spread({
        ref: ref,
        className: cn("rounded-xl border bg-card text-card-foreground shadow", className)
    }, props));
});
Card.displayName = "Card";
var CardHeader = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", _object_spread({
        ref: ref,
        className: cn("flex flex-col space-y-1.5 p-6", className)
    }, props));
});
CardHeader.displayName = "CardHeader";
var CardTitle = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", _object_spread({
        ref: ref,
        className: cn("font-semibold leading-none tracking-tight", className)
    }, props));
});
CardTitle.displayName = "CardTitle";
var CardDescription = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", _object_spread({
        ref: ref,
        className: cn("text-sm text-muted-foreground", className)
    }, props));
});
CardDescription.displayName = "CardDescription";
var CardContent = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", _object_spread({
        ref: ref,
        className: cn("p-6 pt-0", className)
    }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", _object_spread({
        ref: ref,
        className: cn("flex items-center p-6 pt-0", className)
    }, props));
});
CardFooter.displayName = "CardFooter";
// src/components/ui/label.tsx
var React11 = __toESM(require("react"));
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_class_variance_authority4 = require("class-variance-authority");
var import_jsx_runtime18 = require("react/jsx-runtime");
var labelVariants = (0, import_class_variance_authority4.cva)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label2 = React11.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(LabelPrimitive.Root, _object_spread({
        ref: ref,
        className: cn(labelVariants(), className)
    }, props));
});
Label2.displayName = LabelPrimitive.Root.displayName;
// src/components/login/login-form.tsx
var import_react4 = require("react");
var import_jsx_runtime19 = require("react/jsx-runtime");
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
    var _ref = _sliced_to_array((0, import_react4.useState)(""), 2), email = _ref[0], setEmail = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react4.useState)(""), 2), password = _ref1[0], setPassword = _ref1[1];
    var _ref2 = _sliced_to_array((0, import_react4.useState)(false), 2), loading = _ref2[0], setLoading = _ref2[1];
    var _ref3 = _sliced_to_array((0, import_react4.useState)(null), 2), error = _ref3[0], setError = _ref3[1];
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
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", _object_spread_props(_object_spread({
        className: cn("flex flex-col gap-6", className)
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Card, {
                className: "overflow-hidden",
                children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(CardContent, {
                    className: "grid p-0 md:grid-cols-2",
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("form", {
                            className: "p-6 md:p-8",
                            onSubmit: handleEmailLogin,
                            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", {
                                className: "flex flex-col gap-6",
                                children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", {
                                        className: "flex flex-col items-center text-center",
                                        children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h1", {
                                                className: "text-2xl font-bold",
                                                children: title
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", {
                                                className: "text-balance text-muted-foreground",
                                                children: subtitle
                                            })
                                        ]
                                    }),
                                    error && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", {
                                        className: "bg-red-50 text-red-600 p-3 rounded-md text-sm",
                                        children: error
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", {
                                        className: "grid gap-2",
                                        children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Label2, {
                                                htmlFor: "email",
                                                children: "Email"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Input, {
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
                                    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", {
                                        className: "grid gap-2",
                                        children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Label2, {
                                                        htmlFor: "password",
                                                        children: "Password"
                                                    }),
                                                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", {
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
                                            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Input, {
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
                                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Button, {
                                        type: "submit",
                                        className: "w-full",
                                        disabled: loading,
                                        children: loading ? "Signing in..." : "Sign in"
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", {
                                        className: "relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", {
                                            className: "relative z-10 bg-background px-2 text-muted-foreground",
                                            children: "Or continue with"
                                        })
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", {
                                        className: "grid grid-cols-1 gap-4",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Button, {
                                            variant: "outline",
                                            className: "w-full",
                                            onClick: handleGoogleLogin,
                                            type: "button",
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 24 24",
                                                    className: "w-5 h-5 mr-2",
                                                    children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("path", {
                                                        d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z",
                                                        fill: "currentColor"
                                                    })
                                                }),
                                                "Continue with Google"
                                            ]
                                        })
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", {
                                        className: "text-center text-sm",
                                        children: [
                                            "Don't have an account?",
                                            " ",
                                            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", {
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
                        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", {
                            className: "relative hidden bg-muted md:block",
                            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("img", {
                                src: backgroundImage,
                                alt: "Image",
                                className: "absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                            })
                        })
                    ]
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", {
                className: "text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary",
                children: [
                    "By clicking continue, you agree to our ",
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", {
                        href: "#",
                        children: "Terms of Service"
                    }),
                    " ",
                    "and ",
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", {
                        href: "#",
                        children: "Privacy Policy"
                    }),
                    "."
                ]
            })
        ]
    }));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Button: Button,
    Card: Card,
    CardContent: CardContent,
    CardDescription: CardDescription,
    CardFooter: CardFooter,
    CardHeader: CardHeader,
    CardTitle: CardTitle,
    Collapsible: Collapsible,
    CollapsibleContent: CollapsibleContent,
    CollapsibleTrigger: CollapsibleTrigger,
    DropdownMenu: DropdownMenu,
    DropdownMenuCheckboxItem: DropdownMenuCheckboxItem,
    DropdownMenuContent: DropdownMenuContent,
    DropdownMenuGroup: DropdownMenuGroup,
    DropdownMenuItem: DropdownMenuItem,
    DropdownMenuLabel: DropdownMenuLabel,
    DropdownMenuPortal: DropdownMenuPortal,
    DropdownMenuRadioGroup: DropdownMenuRadioGroup,
    DropdownMenuRadioItem: DropdownMenuRadioItem,
    DropdownMenuSeparator: DropdownMenuSeparator,
    DropdownMenuShortcut: DropdownMenuShortcut,
    DropdownMenuSub: DropdownMenuSub,
    DropdownMenuSubContent: DropdownMenuSubContent,
    DropdownMenuSubTrigger: DropdownMenuSubTrigger,
    DropdownMenuTrigger: DropdownMenuTrigger,
    Input: Input,
    Label: Label,
    LoginForm: LoginForm,
    NavHistory: NavHistory,
    NavListings: NavListings,
    NavMain: NavMain,
    NavSecondary: NavSecondary,
    Navbar: Navbar,
    NavbarWrapper: NavbarWrapper,
    Separator: Separator,
    Sheet: Sheet,
    SheetClose: SheetClose,
    SheetContent: SheetContent,
    SheetDescription: SheetDescription,
    SheetFooter: SheetFooter,
    SheetHeader: SheetHeader,
    SheetOverlay: SheetOverlay,
    SheetPortal: SheetPortal,
    SheetTitle: SheetTitle,
    SheetTrigger: SheetTrigger,
    Sidebar: Sidebar,
    SidebarContent: SidebarContent,
    SidebarFooter: SidebarFooter,
    SidebarGroup: SidebarGroup,
    SidebarGroupAction: SidebarGroupAction,
    SidebarGroupContent: SidebarGroupContent,
    SidebarGroupLabel: SidebarGroupLabel,
    SidebarHeader: SidebarHeader,
    SidebarInput: SidebarInput,
    SidebarInset: SidebarInset,
    SidebarLeft: SidebarLeft,
    SidebarMenu: SidebarMenu,
    SidebarMenuAction: SidebarMenuAction,
    SidebarMenuBadge: SidebarMenuBadge,
    SidebarMenuButton: SidebarMenuButton,
    SidebarMenuItem: SidebarMenuItem,
    SidebarMenuSkeleton: SidebarMenuSkeleton,
    SidebarMenuSub: SidebarMenuSub,
    SidebarMenuSubButton: SidebarMenuSubButton,
    SidebarMenuSubItem: SidebarMenuSubItem,
    SidebarProvider: SidebarProvider,
    SidebarRail: SidebarRail,
    SidebarSeparator: SidebarSeparator,
    SidebarTrigger: SidebarTrigger,
    Skeleton: Skeleton,
    ThemeToggle: ThemeToggle,
    Tooltip: Tooltip,
    TooltipContent: TooltipContent,
    TooltipProvider: TooltipProvider,
    TooltipTrigger: TooltipTrigger,
    buttonVariants: buttonVariants,
    cn: cn,
    formatDateTime: formatDateTime,
    useIsMobile: useIsMobile,
    useSidebar: useSidebar
});
//# sourceMappingURL=index.js.map