/** A singleton class that handles the initialization of the exported main and demo modules. */
export class Mod {
    /** @type {Object | null} A reference to the main WASM module export. */
    static "__#1@#main": any | null;
    /** Initializes and stores the WASM module export. */
    static initMain(): Promise<void>;
    static get main(): any;
}
/** [Auto] Access to the ImGui enums & flags. */
export const ImEnum: Readonly<{
    /** [Auto] Flags for ImGui::Begin() */
    WindowFlags: {
        None: number;
        /** Disable title-bar */
        NoTitleBar: number;
        /** Disable user resizing with the lower-right grip */
        NoResize: number;
        /** Disable user moving the window */
        NoMove: number;
        /** Disable scrollbars (window can still scroll with mouse or programmatically) */
        NoScrollbar: number;
        /** Disable user vertically scrolling with mouse wheel. On child window, mouse wheel will be forwarded to the parent unless NoScrollbar is also set. */
        NoScrollWithMouse: number;
        /** Disable user collapsing window by double-clicking on it. Also referred to as Window Menu Button (e.g. within a docking node). */
        NoCollapse: number;
        /** Resize every window to its content every frame */
        AlwaysAutoResize: number;
        /** Disable drawing background color (WindowBg, etc.) and outside border. Similar as using SetNextWindowBgAlpha(0.0f). */
        NoBackground: number;
        /** Never load\/save settings in .ini file */
        NoSavedSettings: number;
        /** Disable catching mouse, hovering test with pass through. */
        NoMouseInputs: number;
        /** Has a menu-bar */
        MenuBar: number;
        /** Allow horizontal scrollbar to appear (off by default). You may use SetNextWindowContentSize(ImVec2(width,0.0f)); prior to calling Begin() to specify width. Read code in imgui_demo in the "Horizontal Scrolling" section. */
        HorizontalScrollbar: number;
        /** Disable taking focus when transitioning from hidden to visible state */
        NoFocusOnAppearing: number;
        /** Disable bringing window to front when taking focus (e.g. clicking on it or programmatically giving it focus) */
        NoBringToFrontOnFocus: number;
        /** Always show vertical scrollbar (even if ContentSize.y < Size.y) */
        AlwaysVerticalScrollbar: number;
        /** Always show horizontal scrollbar (even if ContentSize.x < Size.x) */
        AlwaysHorizontalScrollbar: number;
        /** No keyboard\/gamepad navigation within the window */
        NoNavInputs: number;
        /** No focusing toward this window with keyboard\/gamepad navigation (e.g. skipped by CTRL+TAB) */
        NoNavFocus: number;
        /** Display a dot next to the title. When used in a tab\/docking context, tab is selected when clicking the X + closure is not assumed (will wait for user to stop submitting the tab). Otherwise closure is assumed when pressing the X, so if you keep submitting the tab may reappear at end of tab bar. */
        UnsavedDocument: number;
        /** Disable docking of this window */
        NoDocking: number;
        NoNav: number;
        NoDecoration: number;
        NoInputs: number;
    };
    /** [Auto] Flags for ImGui::BeginChild() */
    ChildFlags: {
        None: number;
        /** Show an outer border and enable WindowPadding. (IMPORTANT: this is always == 1 == true for legacy reason) */
        Borders: number;
        /** Pad with style.WindowPadding even if no border are drawn (no padding by default for non-bordered child windows because it makes more sense) */
        AlwaysUseWindowPadding: number;
        /** Allow resize from right border (layout direction). Enable .ini saving (unless ImGuiWindowFlags_NoSavedSettings passed to window flags) */
        ResizeX: number;
        /** Allow resize from bottom border (layout direction). " */
        ResizeY: number;
        /** Enable auto-resizing width. Read "IMPORTANT: Size measurement" details above. */
        AutoResizeX: number;
        /** Enable auto-resizing height. Read "IMPORTANT: Size measurement" details above. */
        AutoResizeY: number;
        /** Combined with AutoResizeX\/AutoResizeY. Always measure size even when child is hidden, always return true, always disable clipping optimization! NOT RECOMMENDED. */
        AlwaysAutoResize: number;
        /** Style the child window like a framed item: use FrameBg, FrameRounding, FrameBorderSize, FramePadding instead of ChildBg, ChildRounding, ChildBorderSize, WindowPadding. */
        FrameStyle: number;
        /** [BETA] Share focus scope, allow keyboard\/gamepad navigation to cross over parent border to this child or between sibling child windows. */
        NavFlattened: number;
    };
    /** [Auto] Flags for ImGui::PushItemFlag() */
    ItemFlags: {
        /** (Default) */
        None: number;
        /** false    \/\/ Disable keyboard tabbing. This is a "lighter" version of ImGuiItemFlags_NoNav. */
        NoTabStop: number;
        /** false    \/\/ Disable any form of focusing (keyboard\/gamepad directional navigation and SetKeyboardFocusHere() calls). */
        NoNav: number;
        /** false    \/\/ Disable item being a candidate for default focus (e.g. used by title bar items). */
        NoNavDefaultFocus: number;
        /** false    \/\/ Any button-like behavior will have repeat mode enabled (based on io.KeyRepeatDelay and io.KeyRepeatRate values). Note that you can also call IsItemActive() after any button to tell if it is being held. */
        ButtonRepeat: number;
        /** true     \/\/ MenuItem()\/Selectable() automatically close their parent popup window. */
        AutoClosePopups: number;
        /** false    \/\/ Allow submitting an item with the same identifier as an item already submitted this frame without triggering a warning tooltip if io.ConfigDebugHighlightIdConflicts is set. */
        AllowDuplicateId: number;
    };
    /** [Auto] Flags for ImGui::InputText() */
    InputTextFlags: {
        None: number;
        /** Allow 0123456789.+-*\/ */
        CharsDecimal: number;
        /** Allow 0123456789ABCDEFabcdef */
        CharsHexadecimal: number;
        /** Allow 0123456789.+-*\/eE (Scientific notation input) */
        CharsScientific: number;
        /** Turn a..z into A..Z */
        CharsUppercase: number;
        /** Filter out spaces, tabs */
        CharsNoBlank: number;
        /** Pressing TAB input a '\t' character into the text field */
        AllowTabInput: number;
        /** Return 'true' when Enter is pressed (as opposed to every time the value was modified). Consider using IsItemDeactivatedAfterEdit() instead! */
        EnterReturnsTrue: number;
        /** Escape key clears content if not empty, and deactivate otherwise (contrast to default behavior of Escape to revert) */
        EscapeClearsAll: number;
        /** In multi-line mode, validate with Enter, add new line with Ctrl+Enter (default is opposite: validate with Ctrl+Enter, add line with Enter). */
        CtrlEnterForNewLine: number;
        /** Read-only mode */
        ReadOnly: number;
        /** Password mode, display all characters as '*', disable copy */
        Password: number;
        /** Overwrite mode */
        AlwaysOverwrite: number;
        /** Select entire text when first taking mouse focus */
        AutoSelectAll: number;
        /** InputFloat(), InputInt(), InputScalar() etc. only: parse empty string as zero value. */
        ParseEmptyRefVal: number;
        /** InputFloat(), InputInt(), InputScalar() etc. only: when value is zero, do not display it. Generally used with ImGuiInputTextFlags_ParseEmptyRefVal. */
        DisplayEmptyRefVal: number;
        /** Disable following the cursor horizontally */
        NoHorizontalScroll: number;
        /** Disable undo\/redo. Note that input text owns the text data while active, if you want to provide your own undo\/redo stack you need e.g. to call ClearActiveID(). */
        NoUndoRedo: number;
        /** When text doesn't fit, elide left side to ensure right side stays visible. Useful for path\/filenames. Single-line only! */
        ElideLeft: number;
        /** Callback on pressing TAB (for completion handling) */
        CallbackCompletion: number;
        /** Callback on pressing Up\/Down arrows (for history handling) */
        CallbackHistory: number;
        /** Callback on each iteration. User code may query cursor position, modify text buffer. */
        CallbackAlways: number;
        /** Callback on character inputs to replace or discard them. Modify 'EventChar' to replace or discard, or return 1 in callback to discard. */
        CallbackCharFilter: number;
        /** Callback on buffer capacity changes request (beyond 'buf_size' parameter value), allowing the string to grow. Notify when the string wants to be resized (for string types which hold a cache of their Size). You will be provided a new BufSize in the callback and NEED to honor it. (see misc\/cpp\/imgui_stdlib.h for an example of using this) */
        CallbackResize: number;
        /** Callback on any edit. Note that InputText() already returns true on edit + you can always use IsItemEdited(). The callback is useful to manipulate the underlying buffer while focus is active. */
        CallbackEdit: number;
    };
    /** [Auto] Flags for ImGui::TreeNodeEx(), ImGui::CollapsingHeader*() */
    TreeNodeFlags: {
        None: number;
        /** Draw as selected */
        Selected: number;
        /** Draw frame with background (e.g. for CollapsingHeader) */
        Framed: number;
        /** Hit testing to allow subsequent widgets to overlap this one */
        AllowOverlap: number;
        /** Don't do a TreePush() when open (e.g. for CollapsingHeader) = no extra indent nor pushing on ID stack */
        NoTreePushOnOpen: number;
        /** Don't automatically and temporarily open node when Logging is active (by default logging will automatically open tree nodes) */
        NoAutoOpenOnLog: number;
        /** Default node to be open */
        DefaultOpen: number;
        /** Open on double-click instead of simple click (default for multi-select unless any _OpenOnXXX behavior is set explicitly). Both behaviors may be combined. */
        OpenOnDoubleClick: number;
        /** Open when clicking on the arrow part (default for multi-select unless any _OpenOnXXX behavior is set explicitly). Both behaviors may be combined. */
        OpenOnArrow: number;
        /** No collapsing, no arrow (use as a convenience for leaf nodes). */
        Leaf: number;
        /** Display a bullet instead of arrow. IMPORTANT: node can still be marked open\/close if you don't set the _Leaf flag! */
        Bullet: number;
        /** Use FramePadding (even for an unframed text node) to vertically align text baseline to regular widget height. Equivalent to calling AlignTextToFramePadding() before the node. */
        FramePadding: number;
        /** Extend hit box to the right-most edge, even if not framed. This is not the default in order to allow adding other items on the same line without using AllowOverlap mode. */
        SpanAvailWidth: number;
        /** Extend hit box to the left-most and right-most edges (cover the indent area). */
        SpanFullWidth: number;
        /** Narrow hit box + narrow hovering highlight, will only cover the label text. */
        SpanLabelWidth: number;
        /** Frame will span all columns of its container table (label will still fit in current column) */
        SpanAllColumns: number;
        /** Label will span all columns of its container table */
        LabelSpanAllColumns: number;
        /** (WIP) Nav: left direction may move to this TreeNode() from any of its child (items submitted between TreeNode and TreePop) */
        NavLeftJumpsBackHere: number;
        CollapsingHeader: number;
    };
    /** [Auto] Flags for OpenPopup*(), BeginPopupContext*(), IsPopupOpen() functions. */
    PopupFlags: {
        None: number;
        /** For BeginPopupContext*(): open on Left Mouse release. Guaranteed to always be == 0 (same as ImGuiMouseButton_Left) */
        MouseButtonLeft: number;
        /** For BeginPopupContext*(): open on Right Mouse release. Guaranteed to always be == 1 (same as ImGuiMouseButton_Right) */
        MouseButtonRight: number;
        /** For BeginPopupContext*(): open on Middle Mouse release. Guaranteed to always be == 2 (same as ImGuiMouseButton_Middle) */
        MouseButtonMiddle: number;
        /** For OpenPopup*(), BeginPopupContext*(): don't reopen same popup if already open (won't reposition, won't reinitialize navigation) */
        NoReopen: number;
        /** For OpenPopup*(), BeginPopupContext*(): don't open if there's already a popup at the same level of the popup stack */
        NoOpenOverExistingPopup: number;
        /** For BeginPopupContextWindow(): don't return true when hovering items, only when hovering empty space */
        NoOpenOverItems: number;
        /** For IsPopupOpen(): ignore the ImGuiID parameter and test for any popup. */
        AnyPopupId: number;
        /** For IsPopupOpen(): search\/test at any level of the popup stack (default test in the current level) */
        AnyPopupLevel: number;
        AnyPopup: number;
    };
    /** [Auto] Flags for ImGui::Selectable() */
    SelectableFlags: {
        None: number;
        /** Clicking this doesn't close parent popup window (overrides ImGuiItemFlags_AutoClosePopups) */
        NoAutoClosePopups: number;
        /** Frame will span all columns of its container table (text will still fit in current column) */
        SpanAllColumns: number;
        /** Generate press events on double clicks too */
        AllowDoubleClick: number;
        /** Cannot be selected, display grayed out text */
        Disabled: number;
        /** (WIP) Hit testing to allow subsequent widgets to overlap this one */
        AllowOverlap: number;
        /** Make the item be displayed as if it is hovered */
        Highlight: number;
    };
    /** [Auto] Flags for ImGui::BeginCombo() */
    ComboFlags: {
        None: number;
        /** Align the popup toward the left by default */
        PopupAlignLeft: number;
        /** Max ~4 items visible. Tip: If you want your combo popup to be a specific size you can use SetNextWindowSizeConstraints() prior to calling BeginCombo() */
        HeightSmall: number;
        /** Max ~8 items visible (default) */
        HeightRegular: number;
        /** Max ~20 items visible */
        HeightLarge: number;
        /** As many fitting items as possible */
        HeightLargest: number;
        /** Display on the preview box without the square arrow button */
        NoArrowButton: number;
        /** Display only a square arrow button */
        NoPreview: number;
        /** Width dynamically calculated from preview contents */
        WidthFitPreview: number;
    };
    /** [Auto] Flags for ImGui::BeginTabBar() */
    TabBarFlags: {
        None: number;
        /** Allow manually dragging tabs to re-order them + New tabs are appended at the end of list */
        Reorderable: number;
        /** Automatically select new tabs when they appear */
        AutoSelectNewTabs: number;
        /** Disable buttons to open the tab list popup */
        TabListPopupButton: number;
        /** Disable behavior of closing tabs (that are submitted with p_open != NULL) with middle mouse button. You may handle this behavior manually on user's side with if (IsItemHovered() && IsMouseClicked(2)) *p_open = false. */
        NoCloseWithMiddleMouseButton: number;
        /** Disable scrolling buttons (apply when fitting policy is ImGuiTabBarFlags_FittingPolicyScroll) */
        NoTabListScrollingButtons: number;
        /** Disable tooltips when hovering a tab */
        NoTooltip: number;
        /** Draw selected overline markers over selected tab */
        DrawSelectedOverline: number;
        /** Resize tabs when they don't fit */
        FittingPolicyResizeDown: number;
        /** Add scroll buttons when tabs don't fit */
        FittingPolicyScroll: number;
    };
    /** [Auto] Flags for ImGui::BeginTabItem() */
    TabItemFlags: {
        None: number;
        /** Display a dot next to the title + set ImGuiTabItemFlags_NoAssumedClosure. */
        UnsavedDocument: number;
        /** Trigger flag to programmatically make the tab selected when calling BeginTabItem() */
        SetSelected: number;
        /** Disable behavior of closing tabs (that are submitted with p_open != NULL) with middle mouse button. You may handle this behavior manually on user's side with if (IsItemHovered() && IsMouseClicked(2)) *p_open = false. */
        NoCloseWithMiddleMouseButton: number;
        /** Don't call PushID()\/PopID() on BeginTabItem()\/EndTabItem() */
        NoPushId: number;
        /** Disable tooltip for the given tab */
        NoTooltip: number;
        /** Disable reordering this tab or having another tab cross over this tab */
        NoReorder: number;
        /** Enforce the tab position to the left of the tab bar (after the tab list popup button) */
        Leading: number;
        /** Enforce the tab position to the right of the tab bar (before the scrolling buttons) */
        Trailing: number;
        /** Tab is selected when trying to close + closure is not immediately assumed (will wait for user to stop submitting the tab). Otherwise closure is assumed when pressing the X, so if you keep submitting the tab may reappear at end of tab bar. */
        NoAssumedClosure: number;
    };
    /** [Auto] Flags for ImGui::IsWindowFocused() */
    FocusedFlags: {
        None: number;
        /** Return true if any children of the window is focused */
        ChildWindows: number;
        /** Test from root window (top most parent of the current hierarchy) */
        RootWindow: number;
        /** Return true if any window is focused. Important: If you are trying to tell how to dispatch your low-level inputs, do NOT use this. Use 'io.WantCaptureMouse' instead! Please read the FAQ! */
        AnyWindow: number;
        /** Do not consider popup hierarchy (do not treat popup emitter as parent of popup) (when used with _ChildWindows or _RootWindow) */
        NoPopupHierarchy: number;
        /** Consider docking hierarchy (treat dockspace host as parent of docked window) (when used with _ChildWindows or _RootWindow) */
        DockHierarchy: number;
        RootAndChildWindows: number;
    };
    /** [Auto] Flags for ImGui::IsItemHovered(), ImGui::IsWindowHovered() */
    HoveredFlags: {
        /** Return true if directly over the item\/window, not obstructed by another window, not obstructed by an active popup or modal blocking inputs under them. */
        None: number;
        /** IsWindowHovered() only: Return true if any children of the window is hovered */
        ChildWindows: number;
        /** IsWindowHovered() only: Test from root window (top most parent of the current hierarchy) */
        RootWindow: number;
        /** IsWindowHovered() only: Return true if any window is hovered */
        AnyWindow: number;
        /** IsWindowHovered() only: Do not consider popup hierarchy (do not treat popup emitter as parent of popup) (when used with _ChildWindows or _RootWindow) */
        NoPopupHierarchy: number;
        /** IsWindowHovered() only: Consider docking hierarchy (treat dockspace host as parent of docked window) (when used with _ChildWindows or _RootWindow) */
        DockHierarchy: number;
        /** Return true even if a popup window is normally blocking access to this item\/window */
        AllowWhenBlockedByPopup: number;
        /** Return true even if an active item is blocking access to this item\/window. Useful for Drag and Drop patterns. */
        AllowWhenBlockedByActiveItem: number;
        /** IsItemHovered() only: Return true even if the item uses AllowOverlap mode and is overlapped by another hoverable item. */
        AllowWhenOverlappedByItem: number;
        /** IsItemHovered() only: Return true even if the position is obstructed or overlapped by another window. */
        AllowWhenOverlappedByWindow: number;
        /** IsItemHovered() only: Return true even if the item is disabled */
        AllowWhenDisabled: number;
        /** IsItemHovered() only: Disable using keyboard\/gamepad navigation state when active, always query mouse */
        NoNavOverride: number;
        AllowWhenOverlapped: number;
        RectOnly: number;
        RootAndChildWindows: number;
        /** Shortcut for standard flags when using IsItemHovered() + SetTooltip() sequence. */
        ForTooltip: number;
        /** Require mouse to be stationary for style.HoverStationaryDelay (~0.15 sec) _at least one time_. After this, can move on same item\/window. Using the stationary test tends to reduces the need for a long delay. */
        Stationary: number;
        /** IsItemHovered() only: Return true immediately (default). As this is the default you generally ignore this. */
        DelayNone: number;
        /** IsItemHovered() only: Return true after style.HoverDelayShort elapsed (~0.15 sec) (shared between items) + requires mouse to be stationary for style.HoverStationaryDelay (once per item). */
        DelayShort: number;
        /** IsItemHovered() only: Return true after style.HoverDelayNormal elapsed (~0.40 sec) (shared between items) + requires mouse to be stationary for style.HoverStationaryDelay (once per item). */
        DelayNormal: number;
        /** IsItemHovered() only: Disable shared delay system where moving from one item to the next keeps the previous timer for a short time (standard for tooltips with long delays) */
        NoSharedDelay: number;
    };
    /** [Auto] Flags for ImGui::DockSpace(), shared\/inherited by child nodes. */
    DockNodeFlags: {
        None: number;
        /**       \/\/ Don't display the dockspace node but keep it alive. Windows docked into this dockspace node won't be undocked. */
        KeepAliveOnly: number;
        /**       \/\/ Disable docking over the Central Node, which will be always kept empty. */
        NoDockingOverCentralNode: number;
        /**       \/\/ Enable passthru dockspace: 1) DockSpace() will render a ImGuiCol_WindowBg background covering everything excepted the Central Node when empty. Meaning the host window should probably use SetNextWindowBgAlpha(0.0f) prior to Begin() when using this. 2) When Central Node is empty: let inputs pass-through + won't display a DockingEmptyBg background. See demo for details. */
        PassthruCentralNode: number;
        /**       \/\/ Disable other windows\/nodes from splitting this node. */
        NoDockingSplit: number;
        /** Saved \/\/ Disable resizing node using the splitter\/separators. Useful with programmatically setup dockspaces. */
        NoResize: number;
        /**       \/\/ Tab bar will automatically hide when there is a single window in the dock node. */
        AutoHideTabBar: number;
        /**       \/\/ Disable undocking this node. */
        NoUndocking: number;
    };
    /** [Auto] Flags for ImGui::BeginDragDropSource(), ImGui::AcceptDragDropPayload() */
    DragDropFlags: {
        None: number;
        /** Disable preview tooltip. By default, a successful call to BeginDragDropSource opens a tooltip so you can display a preview or description of the source contents. This flag disables this behavior. */
        SourceNoPreviewTooltip: number;
        /** By default, when dragging we clear data so that IsItemHovered() will return false, to avoid subsequent user code submitting tooltips. This flag disables this behavior so you can still call IsItemHovered() on the source item. */
        SourceNoDisableHover: number;
        /** Disable the behavior that allows to open tree nodes and collapsing header by holding over them while dragging a source item. */
        SourceNoHoldToOpenOthers: number;
        /** Allow items such as Text(), Image() that have no unique identifier to be used as drag source, by manufacturing a temporary identifier based on their window-relative position. This is extremely unusual within the dear imgui ecosystem and so we made it explicit. */
        SourceAllowNullID: number;
        /** External source (from outside of dear imgui), won't attempt to read current item\/window info. Will always return true. Only one Extern source can be active simultaneously. */
        SourceExtern: number;
        /** Automatically expire the payload if the source cease to be submitted (otherwise payloads are persisting while being dragged) */
        PayloadAutoExpire: number;
        /** Hint to specify that the payload may not be copied outside current dear imgui context. */
        PayloadNoCrossContext: number;
        /** Hint to specify that the payload may not be copied outside current process. */
        PayloadNoCrossProcess: number;
        /** AcceptDragDropPayload() will returns true even before the mouse button is released. You can then call IsDelivery() to test if the payload needs to be delivered. */
        AcceptBeforeDelivery: number;
        /** Do not draw the default highlight rectangle when hovering over target. */
        AcceptNoDrawDefaultRect: number;
        /** Request hiding the BeginDragDropSource tooltip from the BeginDragDropTarget site. */
        AcceptNoPreviewTooltip: number;
        /** For peeking ahead and inspecting the payload before delivery. */
        AcceptPeekOnly: number;
    };
    /** [Auto] A primary data type */
    DataType: {
        /** signed char \/ char (with sensible compilers) */
        S8: number;
        /** unsigned char */
        U8: number;
        /** short */
        S16: number;
        /** unsigned short */
        U16: number;
        /** int */
        S32: number;
        /** unsigned int */
        U32: number;
        /** long long \/ __int64 */
        S64: number;
        /** unsigned long long \/ unsigned __int64 */
        U64: number;
        /** float */
        Float: number;
        /** double */
        Double: number;
        /** bool (provided for user convenience, not supported by scalar widgets) */
        Bool: number;
        /** char* (provided for user convenience, not supported by scalar widgets) */
        String: number;
        COUNT: number;
    };
    /** [Auto] A cardinal direction */
    Dir: {
        _None: number;
        _Left: number;
        _Right: number;
        _Up: number;
        _Down: number;
        _COUNT: number;
    };
    /** [Auto] A sorting direction */
    SortDirection: {
        _None: number;
        /** Ascending = 0->9, A->Z etc. */
        _Ascending: number;
        /** Descending = 9->0, Z->A etc. */
        _Descending: number;
    };
    /** [Auto] A key identifier (ImGuiKey_XXX or ImGuiMod_XXX value): can represent Keyboard, Mouse and Gamepad values. */
    Key: {
        _None: number;
        /** First valid key value (other than 0) */
        _NamedKey_BEGIN: number;
        /** == ImGuiKey_NamedKey_BEGIN */
        _Tab: number;
        _LeftArrow: number;
        _RightArrow: number;
        _UpArrow: number;
        _DownArrow: number;
        _PageUp: number;
        _PageDown: number;
        _Home: number;
        _End: number;
        _Insert: number;
        _Delete: number;
        _Backspace: number;
        _Space: number;
        _Enter: number;
        _Escape: number;
        _LeftCtrl: number;
        _LeftShift: number;
        _LeftAlt: number;
        _LeftSuper: number;
        _RightCtrl: number;
        _RightShift: number;
        _RightAlt: number;
        _RightSuper: number;
        _Menu: number;
        _0: number;
        _1: number;
        _2: number;
        _3: number;
        _4: number;
        _5: number;
        _6: number;
        _7: number;
        _8: number;
        _9: number;
        _A: number;
        _B: number;
        _C: number;
        _D: number;
        _E: number;
        _F: number;
        _G: number;
        _H: number;
        _I: number;
        _J: number;
        _K: number;
        _L: number;
        _M: number;
        _N: number;
        _O: number;
        _P: number;
        _Q: number;
        _R: number;
        _S: number;
        _T: number;
        _U: number;
        _V: number;
        _W: number;
        _X: number;
        _Y: number;
        _Z: number;
        _F1: number;
        _F2: number;
        _F3: number;
        _F4: number;
        _F5: number;
        _F6: number;
        _F7: number;
        _F8: number;
        _F9: number;
        _F10: number;
        _F11: number;
        _F12: number;
        _F13: number;
        _F14: number;
        _F15: number;
        _F16: number;
        _F17: number;
        _F18: number;
        _F19: number;
        _F20: number;
        _F21: number;
        _F22: number;
        _F23: number;
        _F24: number;
        /** ' */
        _Apostrophe: number;
        /** , */
        _Comma: number;
        /** - */
        _Minus: number;
        /** . */
        _Period: number;
        /** \/ */
        _Slash: number;
        /** ; */
        _Semicolon: number;
        /** = */
        _Equal: number;
        /** [ */
        _LeftBracket: number;
        /** \ (this text inhibit multiline comment caused by backslash) */
        _Backslash: number;
        /** ] */
        _RightBracket: number;
        /** ` */
        _GraveAccent: number;
        _CapsLock: number;
        _ScrollLock: number;
        _NumLock: number;
        _PrintScreen: number;
        _Pause: number;
        _Keypad0: number;
        _Keypad1: number;
        _Keypad2: number;
        _Keypad3: number;
        _Keypad4: number;
        _Keypad5: number;
        _Keypad6: number;
        _Keypad7: number;
        _Keypad8: number;
        _Keypad9: number;
        _KeypadDecimal: number;
        _KeypadDivide: number;
        _KeypadMultiply: number;
        _KeypadSubtract: number;
        _KeypadAdd: number;
        _KeypadEnter: number;
        _KeypadEqual: number;
        /** Available on some keyboard\/mouses. Often referred as "Browser Back" */
        _AppBack: number;
        _AppForward: number;
        /** Menu (Xbox)      + (Switch)   Start\/Options (PS) */
        _GamepadStart: number;
        /** View (Xbox)      - (Switch)   Share (PS) */
        _GamepadBack: number;
        /** X (Xbox)         Y (Switch)   Square (PS)        \/\/ Tap: Toggle Menu. Hold: Windowing mode (Focus\/Move\/Resize windows) */
        _GamepadFaceLeft: number;
        /** B (Xbox)         A (Switch)   Circle (PS)        \/\/ Cancel \/ Close \/ Exit */
        _GamepadFaceRight: number;
        /** Y (Xbox)         X (Switch)   Triangle (PS)      \/\/ Text Input \/ On-screen Keyboard */
        _GamepadFaceUp: number;
        /** A (Xbox)         B (Switch)   Cross (PS)         \/\/ Activate \/ Open \/ Toggle \/ Tweak */
        _GamepadFaceDown: number;
        /** D-pad Left                                       \/\/ Move \/ Tweak \/ Resize Window (in Windowing mode) */
        _GamepadDpadLeft: number;
        /** D-pad Right                                      \/\/ Move \/ Tweak \/ Resize Window (in Windowing mode) */
        _GamepadDpadRight: number;
        /** D-pad Up                                         \/\/ Move \/ Tweak \/ Resize Window (in Windowing mode) */
        _GamepadDpadUp: number;
        /** D-pad Down                                       \/\/ Move \/ Tweak \/ Resize Window (in Windowing mode) */
        _GamepadDpadDown: number;
        /** L Bumper (Xbox)  L (Switch)   L1 (PS)            \/\/ Tweak Slower \/ Focus Previous (in Windowing mode) */
        _GamepadL1: number;
        /** R Bumper (Xbox)  R (Switch)   R1 (PS)            \/\/ Tweak Faster \/ Focus Next (in Windowing mode) */
        _GamepadR1: number;
        /** L Trig. (Xbox)   ZL (Switch)  L2 (PS) [Analog] */
        _GamepadL2: number;
        /** R Trig. (Xbox)   ZR (Switch)  R2 (PS) [Analog] */
        _GamepadR2: number;
        /** L Stick (Xbox)   L3 (Switch)  L3 (PS) */
        _GamepadL3: number;
        /** R Stick (Xbox)   R3 (Switch)  R3 (PS) */
        _GamepadR3: number;
        /** [Analog]                                         \/\/ Move Window (in Windowing mode) */
        _GamepadLStickLeft: number;
        /** [Analog]                                         \/\/ Move Window (in Windowing mode) */
        _GamepadLStickRight: number;
        /** [Analog]                                         \/\/ Move Window (in Windowing mode) */
        _GamepadLStickUp: number;
        /** [Analog]                                         \/\/ Move Window (in Windowing mode) */
        _GamepadLStickDown: number;
        /** [Analog] */
        _GamepadRStickLeft: number;
        /** [Analog] */
        _GamepadRStickRight: number;
        /** [Analog] */
        _GamepadRStickUp: number;
        /** [Analog] */
        _GamepadRStickDown: number;
        _MouseLeft: number;
        _MouseRight: number;
        _MouseMiddle: number;
        _MouseX1: number;
        _MouseX2: number;
        _MouseWheelX: number;
        _MouseWheelY: number;
        ImGuiMod_None: number;
        /** Ctrl (non-macOS), Cmd (macOS) */
        ImGuiMod_Ctrl: number;
        /** Shift */
        ImGuiMod_Shift: number;
        /** Option\/Menu */
        ImGuiMod_Alt: number;
        /** Windows\/Super (non-macOS), Ctrl (macOS) */
        ImGuiMod_Super: number;
    };
    /** [Auto] Flags for Shortcut(), SetNextItemShortcut(), */
    InputFlags: {
        None: number;
        /** Enable repeat. Return true on successive repeats. Default for legacy IsKeyPressed(). NOT Default for legacy IsMouseClicked(). MUST BE == 1. */
        Repeat: number;
        /** Route to active item only. */
        RouteActive: number;
        /** Route to windows in the focus stack (DEFAULT). Deep-most focused window takes inputs. Active item takes inputs over deep-most focused window. */
        RouteFocused: number;
        /** Global route (unless a focused window or active item registered the route). */
        RouteGlobal: number;
        /** Do not register route, poll keys directly. */
        RouteAlways: number;
        /** Option: global route: higher priority than focused route (unless active item in focused route). */
        RouteOverFocused: number;
        /** Option: global route: higher priority than active item. Unlikely you need to use that: will interfere with every active items, e.g. CTRL+A registered by InputText will be overridden by this. May not be fully honored as user\/internal code is likely to always assume they can access keys when active. */
        RouteOverActive: number;
        /** Option: global route: will not be applied if underlying background\/void is focused (== no Dear ImGui windows are focused). Useful for overlay applications. */
        RouteUnlessBgFocused: number;
        /** Option: route evaluated from the point of view of root window rather than current window. */
        RouteFromRootWindow: number;
        /** Automatically display a tooltip when hovering item [BETA] Unsure of right api (opt-in\/opt-out) */
        Tooltip: number;
    };
    /** [Auto] Configuration flags stored in io.ConfigFlags. Set by user\/application. */
    ConfigFlags: {
        None: number;
        /** Master keyboard navigation enable flag. Enable full Tabbing + directional arrows + space\/enter to activate. */
        NavEnableKeyboard: number;
        /** Master gamepad navigation enable flag. Backend also needs to set ImGuiBackendFlags_HasGamepad. */
        NavEnableGamepad: number;
        /** Instruct dear imgui to disable mouse inputs and interactions. */
        NoMouse: number;
        /** Instruct backend to not alter mouse cursor shape and visibility. Use if the backend cursor changes are interfering with yours and you don't want to use SetMouseCursor() to change mouse cursor. You may want to honor requests from imgui by reading GetMouseCursor() yourself instead. */
        NoMouseCursorChange: number;
        /** Instruct dear imgui to disable keyboard inputs and interactions. This is done by ignoring keyboard events and clearing existing states. */
        NoKeyboard: number;
        /** Docking enable flags. */
        DockingEnable: number;
        /** Viewport enable flags (require both ImGuiBackendFlags_PlatformHasViewports + ImGuiBackendFlags_RendererHasViewports set by the respective backends) */
        ViewportsEnable: number;
        /** [BETA: Don't use] FIXME-DPI: Reposition and resize imgui windows when the DpiScale of a viewport changed (mostly useful for the main viewport hosting other window). Note that resizing the main window itself is up to your application. */
        DpiEnableScaleViewports: number;
        /** [BETA: Don't use] FIXME-DPI: Request bitmap-scaled fonts to match DpiScale. This is a very low-quality workaround. The correct way to handle DPI is _currently_ to replace the atlas and\/or fonts in the Platform_OnChangedViewport callback, but this is all early work in progress. */
        DpiEnableScaleFonts: number;
        /** Application is SRGB-aware. */
        IsSRGB: number;
        /** Application is using a touch screen instead of a mouse. */
        IsTouchScreen: number;
    };
    /** [Auto] Backend capabilities flags stored in io.BackendFlags. Set by imgui_impl_xxx or custom backend. */
    BackendFlags: {
        None: number;
        /** Backend Platform supports gamepad and currently has one connected. */
        HasGamepad: number;
        /** Backend Platform supports honoring GetMouseCursor() value to change the OS cursor shape. */
        HasMouseCursors: number;
        /** Backend Platform supports io.WantSetMousePos requests to reposition the OS mouse position (only used if io.ConfigNavMoveSetMousePos is set). */
        HasSetMousePos: number;
        /** Backend Renderer supports ImDrawCmd::VtxOffset. This enables output of large meshes (64K+ vertices) while still using 16-bit indices. */
        RendererHasVtxOffset: number;
        /** Backend Platform supports multiple viewports. */
        PlatformHasViewports: number;
        /** Backend Platform supports calling io.AddMouseViewportEvent() with the viewport under the mouse. IF POSSIBLE, ignore viewports with the ImGuiViewportFlags_NoInputs flag (Win32 backend, GLFW 3.30+ backend can do this, SDL backend cannot). If this cannot be done, Dear ImGui needs to use a flawed heuristic to find the viewport under. */
        HasMouseHoveredViewport: number;
        /** Backend Renderer supports multiple viewports. */
        RendererHasViewports: number;
    };
    /** [Auto] Enumeration for PushStyleColor() \/ PopStyleColor() */
    Col: {
        Text: number;
        TextDisabled: number;
        /** Background of normal windows */
        WindowBg: number;
        /** Background of child windows */
        ChildBg: number;
        /** Background of popups, menus, tooltips windows */
        PopupBg: number;
        Border: number;
        BorderShadow: number;
        /** Background of checkbox, radio button, plot, slider, text input */
        FrameBg: number;
        FrameBgHovered: number;
        FrameBgActive: number;
        /** Title bar */
        TitleBg: number;
        /** Title bar when focused */
        TitleBgActive: number;
        /** Title bar when collapsed */
        TitleBgCollapsed: number;
        MenuBarBg: number;
        ScrollbarBg: number;
        ScrollbarGrab: number;
        ScrollbarGrabHovered: number;
        ScrollbarGrabActive: number;
        /** Checkbox tick and RadioButton circle */
        CheckMark: number;
        SliderGrab: number;
        SliderGrabActive: number;
        Button: number;
        ButtonHovered: number;
        ButtonActive: number;
        /** Header* colors are used for CollapsingHeader, TreeNode, Selectable, MenuItem */
        Header: number;
        HeaderHovered: number;
        HeaderActive: number;
        Separator: number;
        SeparatorHovered: number;
        SeparatorActive: number;
        /** Resize grip in lower-right and lower-left corners of windows. */
        ResizeGrip: number;
        ResizeGripHovered: number;
        ResizeGripActive: number;
        /** Tab background, when hovered */
        TabHovered: number;
        /** Tab background, when tab-bar is focused & tab is unselected */
        Tab: number;
        /** Tab background, when tab-bar is focused & tab is selected */
        TabSelected: number;
        /** Tab horizontal overline, when tab-bar is focused & tab is selected */
        TabSelectedOverline: number;
        /** Tab background, when tab-bar is unfocused & tab is unselected */
        TabDimmed: number;
        /** Tab background, when tab-bar is unfocused & tab is selected */
        TabDimmedSelected: number;
        /** .horizontal overline, when tab-bar is unfocused & tab is selected */
        TabDimmedSelectedOverline: number;
        /** Preview overlay color when about to docking something */
        DockingPreview: number;
        /** Background color for empty node (e.g. CentralNode with no window docked into it) */
        DockingEmptyBg: number;
        PlotLines: number;
        PlotLinesHovered: number;
        PlotHistogram: number;
        PlotHistogramHovered: number;
        /** Table header background */
        TableHeaderBg: number;
        /** Table outer and header borders (prefer using Alpha=1.0 here) */
        TableBorderStrong: number;
        /** Table inner borders (prefer using Alpha=1.0 here) */
        TableBorderLight: number;
        /** Table row background (even rows) */
        TableRowBg: number;
        /** Table row background (odd rows) */
        TableRowBgAlt: number;
        /** Hyperlink color */
        TextLink: number;
        TextSelectedBg: number;
        /** Rectangle highlighting a drop target */
        DragDropTarget: number;
        /** Color of keyboard\/gamepad navigation cursor\/rectangle, when visible */
        NavCursor: number;
        /** Highlight window when using CTRL+TAB */
        NavWindowingHighlight: number;
        /** Darken\/colorize entire screen behind the CTRL+TAB window list, when active */
        NavWindowingDimBg: number;
        /** Darken\/colorize entire screen behind a modal window, when one is active */
        ModalWindowDimBg: number;
        COUNT: number;
    };
    /** [Auto] Enumeration for PushStyleVar() \/ PopStyleVar() to temporarily modify the ImGuiStyle structure. */
    StyleVar: {
        /** float     Alpha */
        Alpha: number;
        /** float     DisabledAlpha */
        DisabledAlpha: number;
        /** ImVec2    WindowPadding */
        WindowPadding: number;
        /** float     WindowRounding */
        WindowRounding: number;
        /** float     WindowBorderSize */
        WindowBorderSize: number;
        /** ImVec2    WindowMinSize */
        WindowMinSize: number;
        /** ImVec2    WindowTitleAlign */
        WindowTitleAlign: number;
        /** float     ChildRounding */
        ChildRounding: number;
        /** float     ChildBorderSize */
        ChildBorderSize: number;
        /** float     PopupRounding */
        PopupRounding: number;
        /** float     PopupBorderSize */
        PopupBorderSize: number;
        /** ImVec2    FramePadding */
        FramePadding: number;
        /** float     FrameRounding */
        FrameRounding: number;
        /** float     FrameBorderSize */
        FrameBorderSize: number;
        /** ImVec2    ItemSpacing */
        ItemSpacing: number;
        /** ImVec2    ItemInnerSpacing */
        ItemInnerSpacing: number;
        /** float     IndentSpacing */
        IndentSpacing: number;
        /** ImVec2    CellPadding */
        CellPadding: number;
        /** float     ScrollbarSize */
        ScrollbarSize: number;
        /** float     ScrollbarRounding */
        ScrollbarRounding: number;
        /** float     GrabMinSize */
        GrabMinSize: number;
        /** float     GrabRounding */
        GrabRounding: number;
        /** float     TabRounding */
        TabRounding: number;
        /** float     TabBorderSize */
        TabBorderSize: number;
        /** float     TabBarBorderSize */
        TabBarBorderSize: number;
        /** float     TabBarOverlineSize */
        TabBarOverlineSize: number;
        /** float     TableAngledHeadersAngle */
        TableAngledHeadersAngle: number;
        /** ImVec2  TableAngledHeadersTextAlign */
        TableAngledHeadersTextAlign: number;
        /** ImVec2    ButtonTextAlign */
        ButtonTextAlign: number;
        /** ImVec2    SelectableTextAlign */
        SelectableTextAlign: number;
        /** float     SeparatorTextBorderSize */
        SeparatorTextBorderSize: number;
        /** ImVec2    SeparatorTextAlign */
        SeparatorTextAlign: number;
        /** ImVec2    SeparatorTextPadding */
        SeparatorTextPadding: number;
        /** float     DockingSeparatorSize */
        DockingSeparatorSize: number;
        COUNT: number;
    };
    /** [Auto] Flags for InvisibleButton() [extended in imgui_internal.h] */
    ButtonFlags: {
        None: number;
        /** React on left mouse button (default) */
        MouseButtonLeft: number;
        /** React on right mouse button */
        MouseButtonRight: number;
        /** React on center mouse button */
        MouseButtonMiddle: number;
        /** InvisibleButton(): do not disable navigation\/tabbing. Otherwise disabled by default. */
        EnableNav: number;
    };
    /** [Auto] Flags for ColorEdit3() \/ ColorEdit4() \/ ColorPicker3() \/ ColorPicker4() \/ ColorButton() */
    ColorEditFlags: {
        None: number;
        /**              \/\/ ColorEdit, ColorPicker, ColorButton: ignore Alpha component (will only read 3 components from the input pointer). */
        NoAlpha: number;
        /**              \/\/ ColorEdit: disable picker when clicking on color square. */
        NoPicker: number;
        /**              \/\/ ColorEdit: disable toggling options menu when right-clicking on inputs\/small preview. */
        NoOptions: number;
        /**              \/\/ ColorEdit, ColorPicker: disable color square preview next to the inputs. (e.g. to show only the inputs) */
        NoSmallPreview: number;
        /**              \/\/ ColorEdit, ColorPicker: disable inputs sliders\/text widgets (e.g. to show only the small preview color square). */
        NoInputs: number;
        /**              \/\/ ColorEdit, ColorPicker, ColorButton: disable tooltip when hovering the preview. */
        NoTooltip: number;
        /**              \/\/ ColorEdit, ColorPicker: disable display of inline text label (the label is still forwarded to the tooltip and picker). */
        NoLabel: number;
        /**              \/\/ ColorPicker: disable bigger color preview on right side of the picker, use small color square preview instead. */
        NoSidePreview: number;
        /**              \/\/ ColorEdit: disable drag and drop target. ColorButton: disable drag and drop source. */
        NoDragDrop: number;
        /**              \/\/ ColorButton: disable border (which is enforced by default) */
        NoBorder: number;
        /**              \/\/ ColorEdit, ColorPicker: show vertical alpha bar\/gradient in picker. */
        AlphaBar: number;
        /**              \/\/ ColorEdit, ColorPicker, ColorButton: display preview as a transparent color over a checkerboard, instead of opaque. */
        AlphaPreview: number;
        /**              \/\/ ColorEdit, ColorPicker, ColorButton: display half opaque \/ half checkerboard, instead of opaque. */
        AlphaPreviewHalf: number;
        /**              \/\/ (WIP) ColorEdit: Currently only disable 0.0f..1.0f limits in RGBA edition (note: you probably want to use ImGuiColorEditFlags_Float flag as well). */
        HDR: number;
        /** [Display]    \/\/ ColorEdit: override _display_ type among RGB\/HSV\/Hex. ColorPicker: select any combination using one or more of RGB\/HSV\/Hex. */
        DisplayRGB: number;
        /** [Display]    \/\/ " */
        DisplayHSV: number;
        /** [Display]    \/\/ " */
        DisplayHex: number;
        /** [DataType]   \/\/ ColorEdit, ColorPicker, ColorButton: _display_ values formatted as 0..255. */
        Uint8: number;
        /** [DataType]   \/\/ ColorEdit, ColorPicker, ColorButton: _display_ values formatted as 0.0f..1.0f floats instead of 0..255 integers. No round-trip of value via integers. */
        Float: number;
        /** [Picker]     \/\/ ColorPicker: bar for Hue, rectangle for Sat\/Value. */
        PickerHueBar: number;
        /** [Picker]     \/\/ ColorPicker: wheel for Hue, triangle for Sat\/Value. */
        PickerHueWheel: number;
        /** [Input]      \/\/ ColorEdit, ColorPicker: input and output data in RGB format. */
        InputRGB: number;
        /** [Input]      \/\/ ColorEdit, ColorPicker: input and output data in HSV format. */
        InputHSV: number;
    };
    /** [Auto] Flags for DragFloat(), DragInt(), SliderFloat(), SliderInt() etc. */
    SliderFlags: {
        None: number;
        /** Make the widget logarithmic (linear otherwise). Consider using ImGuiSliderFlags_NoRoundToFormat with this if using a format-string with small amount of digits. */
        Logarithmic: number;
        /** Disable rounding underlying value to match precision of the display format string (e.g. %.3f values are rounded to those 3 digits). */
        NoRoundToFormat: number;
        /** Disable CTRL+Click or Enter key allowing to input text directly into the widget. */
        NoInput: number;
        /** Enable wrapping around from max to min and from min to max. Only supported by DragXXX() functions for now. */
        WrapAround: number;
        /** Clamp value to min\/max bounds when input manually with CTRL+Click. By default CTRL+Click allows going out of bounds. */
        ClampOnInput: number;
        /** Clamp even if min==max==0.0f. Otherwise due to legacy reason DragXXX functions don't clamp with those values. When your clamping limits are dynamic you almost always want to use it. */
        ClampZeroRange: number;
        /** Disable keyboard modifiers altering tweak speed. Useful if you want to alter tweak speed yourself based on your own logic. */
        NoSpeedTweaks: number;
        AlwaysClamp: number;
    };
    /** [Auto] Identify a mouse button. */
    MouseButton: {
        Left: number;
        Right: number;
        Middle: number;
        COUNT: number;
    };
    /** [Auto] Enumeration for GetMouseCursor() */
    MouseCursor: {
        None: number;
        Arrow: number;
        /** When hovering over InputText, etc. */
        TextInput: number;
        /** (Unused by Dear ImGui functions) */
        ResizeAll: number;
        /** When hovering over a horizontal border */
        ResizeNS: number;
        /** When hovering over a vertical border or a column */
        ResizeEW: number;
        /** When hovering over the bottom-left corner of a window */
        ResizeNESW: number;
        /** When hovering over the bottom-right corner of a window */
        ResizeNWSE: number;
        /** (Unused by Dear ImGui functions. Use for e.g. hyperlinks) */
        Hand: number;
        /** When hovering something with disallowed interaction. Usually a crossed circle. */
        NotAllowed: number;
        COUNT: number;
    };
    /** [Auto] Enumeration for AddMouseSourceEvent() actual source of Mouse Input data. */
    MouseSource: {
        /** Input is coming from an actual mouse. */
        _Mouse: number;
        /** Input is coming from a touch screen (no hovering prior to initial press, less precise initial press aiming, dual-axis wheeling possible). */
        _TouchScreen: number;
        /** Input is coming from a pressure\/magnetic pen (often used in conjunction with high-sampling rates). */
        _Pen: number;
        _COUNT: number;
    };
    /** [Auto] Enumeration for ImGui::SetNextWindow***(), SetWindow***(), SetNextItem***() functions */
    Cond: {
        /** No condition (always set the variable), same as _Always */
        None: number;
        /** No condition (always set the variable), same as _None */
        Always: number;
        /** Set the variable once per runtime session (only the first call will succeed) */
        Once: number;
        /** Set the variable if the object\/window has no persistently saved data (no entry in .ini file) */
        FirstUseEver: number;
        /** Set the variable if the object\/window is appearing after being hidden\/inactive (or the first time) */
        Appearing: number;
    };
    /** [Auto] Flags for ImGui::BeginTable() */
    TableFlags: {
        None: number;
        /** Enable resizing columns. */
        Resizable: number;
        /** Enable reordering columns in header row (need calling TableSetupColumn() + TableHeadersRow() to display headers) */
        Reorderable: number;
        /** Enable hiding\/disabling columns in context menu. */
        Hideable: number;
        /** Enable sorting. Call TableGetSortSpecs() to obtain sort specs. Also see ImGuiTableFlags_SortMulti and ImGuiTableFlags_SortTristate. */
        Sortable: number;
        /** Disable persisting columns order, width and sort settings in the .ini file. */
        NoSavedSettings: number;
        /** Right-click on columns body\/contents will display table context menu. By default it is available in TableHeadersRow(). */
        ContextMenuInBody: number;
        /** Set each RowBg color with ImGuiCol_TableRowBg or ImGuiCol_TableRowBgAlt (equivalent of calling TableSetBgColor with ImGuiTableBgFlags_RowBg0 on each row manually) */
        RowBg: number;
        /** Draw horizontal borders between rows. */
        BordersInnerH: number;
        /** Draw horizontal borders at the top and bottom. */
        BordersOuterH: number;
        /** Draw vertical borders between columns. */
        BordersInnerV: number;
        /** Draw vertical borders on the left and right sides. */
        BordersOuterV: number;
        /** Draw horizontal borders. */
        BordersH: number;
        /** Draw vertical borders. */
        BordersV: number;
        /** Draw inner borders. */
        BordersInner: number;
        /** Draw outer borders. */
        BordersOuter: number;
        /** Draw all borders. */
        Borders: number;
        /** [ALPHA] Disable vertical borders in columns Body (borders will always appear in Headers). -> May move to style */
        NoBordersInBody: number;
        /** [ALPHA] Disable vertical borders in columns Body until hovered for resize (borders will always appear in Headers). -> May move to style */
        NoBordersInBodyUntilResize: number;
        /** Columns default to _WidthFixed or _WidthAuto (if resizable or not resizable), matching contents width. */
        SizingFixedFit: number;
        /** Columns default to _WidthFixed or _WidthAuto (if resizable or not resizable), matching the maximum contents width of all columns. Implicitly enable ImGuiTableFlags_NoKeepColumnsVisible. */
        SizingFixedSame: number;
        /** Columns default to _WidthStretch with default weights proportional to each columns contents widths. */
        SizingStretchProp: number;
        /** Columns default to _WidthStretch with default weights all equal, unless overridden by TableSetupColumn(). */
        SizingStretchSame: number;
        /** Make outer width auto-fit to columns, overriding outer_size.x value. Only available when ScrollX\/ScrollY are disabled and Stretch columns are not used. */
        NoHostExtendX: number;
        /** Make outer height stop exactly at outer_size.y (prevent auto-extending table past the limit). Only available when ScrollX\/ScrollY are disabled. Data below the limit will be clipped and not visible. */
        NoHostExtendY: number;
        /** Disable keeping column always minimally visible when ScrollX is off and table gets too small. Not recommended if columns are resizable. */
        NoKeepColumnsVisible: number;
        /** Disable distributing remainder width to stretched columns (width allocation on a 100-wide table with 3 columns: Without this flag: 33,33,34. With this flag: 33,33,33). With larger number of columns, resizing will appear to be less smooth. */
        PreciseWidths: number;
        /** Disable clipping rectangle for every individual columns (reduce draw command count, items will be able to overflow into other columns). Generally incompatible with TableSetupScrollFreeze(). */
        NoClip: number;
        /** Default if BordersOuterV is on. Enable outermost padding. Generally desirable if you have headers. */
        PadOuterX: number;
        /** Default if BordersOuterV is off. Disable outermost padding. */
        NoPadOuterX: number;
        /** Disable inner padding between columns (double inner padding if BordersOuterV is on, single inner padding if BordersOuterV is off). */
        NoPadInnerX: number;
        /** Enable horizontal scrolling. Require 'outer_size' parameter of BeginTable() to specify the container size. Changes default sizing policy. Because this creates a child window, ScrollY is currently generally recommended when using ScrollX. */
        ScrollX: number;
        /** Enable vertical scrolling. Require 'outer_size' parameter of BeginTable() to specify the container size. */
        ScrollY: number;
        /** Hold shift when clicking headers to sort on multiple column. TableGetSortSpecs() may return specs where (SpecsCount > 1). */
        SortMulti: number;
        /** Allow no sorting, disable default sorting. TableGetSortSpecs() may return specs where (SpecsCount == 0). */
        SortTristate: number;
        /** Highlight column headers when hovered (may evolve into a fuller highlight) */
        HighlightHoveredColumn: number;
    };
    /** [Auto] Flags for ImGui::TableSetupColumn() */
    TableColumnFlags: {
        None: number;
        /** Overriding\/master disable flag: hide column, won't show in context menu (unlike calling TableSetColumnEnabled() which manipulates the user accessible state) */
        Disabled: number;
        /** Default as a hidden\/disabled column. */
        DefaultHide: number;
        /** Default as a sorting column. */
        DefaultSort: number;
        /** Column will stretch. Preferable with horizontal scrolling disabled (default if table sizing policy is _SizingStretchSame or _SizingStretchProp). */
        WidthStretch: number;
        /** Column will not stretch. Preferable with horizontal scrolling enabled (default if table sizing policy is _SizingFixedFit and table is resizable). */
        WidthFixed: number;
        /** Disable manual resizing. */
        NoResize: number;
        /** Disable manual reordering this column, this will also prevent other columns from crossing over this column. */
        NoReorder: number;
        /** Disable ability to hide\/disable this column. */
        NoHide: number;
        /** Disable clipping for this column (all NoClip columns will render in a same draw command). */
        NoClip: number;
        /** Disable ability to sort on this field (even if ImGuiTableFlags_Sortable is set on the table). */
        NoSort: number;
        /** Disable ability to sort in the ascending direction. */
        NoSortAscending: number;
        /** Disable ability to sort in the descending direction. */
        NoSortDescending: number;
        /** TableHeadersRow() will submit an empty label for this column. Convenient for some small columns. Name will still appear in context menu or in angled headers. You may append into this cell by calling TableSetColumnIndex() right after the TableHeadersRow() call. */
        NoHeaderLabel: number;
        /** Disable header text width contribution to automatic column width. */
        NoHeaderWidth: number;
        /** Make the initial sort direction Ascending when first sorting on this column (default). */
        PreferSortAscending: number;
        /** Make the initial sort direction Descending when first sorting on this column. */
        PreferSortDescending: number;
        /** Use current Indent value when entering cell (default for column 0). */
        IndentEnable: number;
        /** Ignore current Indent value when entering cell (default for columns > 0). Indentation changes _within_ the cell will still be honored. */
        IndentDisable: number;
        /** TableHeadersRow() will submit an angled header row for this column. Note this will add an extra row. */
        AngledHeader: number;
        /** Status: is enabled == not hidden by user\/api (referred to as "Hide" in _DefaultHide and _NoHide) flags. */
        IsEnabled: number;
        /** Status: is visible == is enabled AND not clipped by scrolling. */
        IsVisible: number;
        /** Status: is currently part of the sort specs */
        IsSorted: number;
        /** Status: is hovered by mouse */
        IsHovered: number;
    };
    /** [Auto] Flags for ImGui::TableNextRow() */
    TableRowFlags: {
        None: number;
        /** Identify header row (set default background color + width of its contents accounted differently for auto column width) */
        Headers: number;
    };
    /** [Auto] Enum for ImGui::TableSetBgColor() */
    TableBgTarget: {
        None: number;
        /** Set row background color 0 (generally used for background, automatically set when ImGuiTableFlags_RowBg is used) */
        RowBg0: number;
        /** Set row background color 1 (generally used for selection marking) */
        RowBg1: number;
        /** Set cell background color (top-most color) */
        CellBg: number;
    };
    /** [Auto] Flags for BeginMultiSelect() */
    MultiSelectFlags: {
        None: number;
        /** Disable selecting more than one item. This is available to allow single-selection code to share same code\/logic if desired. It essentially disables the main purpose of BeginMultiSelect() tho! */
        SingleSelect: number;
        /** Disable CTRL+A shortcut to select all. */
        NoSelectAll: number;
        /** Disable Shift+selection mouse\/keyboard support (useful for unordered 2D selection). With BoxSelect is also ensure contiguous SetRange requests are not combined into one. This allows not handling interpolation in SetRange requests. */
        NoRangeSelect: number;
        /** Disable selecting items when navigating (useful for e.g. supporting range-select in a list of checkboxes). */
        NoAutoSelect: number;
        /** Disable clearing selection when navigating or selecting another one (generally used with ImGuiMultiSelectFlags_NoAutoSelect. useful for e.g. supporting range-select in a list of checkboxes). */
        NoAutoClear: number;
        /** Disable clearing selection when clicking\/selecting an already selected item. */
        NoAutoClearOnReselect: number;
        /** Enable box-selection with same width and same x pos items (e.g. full row Selectable()). Box-selection works better with little bit of spacing between items hit-box in order to be able to aim at empty space. */
        BoxSelect1d: number;
        /** Enable box-selection with varying width or varying x pos items support (e.g. different width labels, or 2D layout\/grid). This is slower: alters clipping logic so that e.g. horizontal movements will update selection of normally clipped items. */
        BoxSelect2d: number;
        /** Disable scrolling when box-selecting near edges of scope. */
        BoxSelectNoScroll: number;
        /** Clear selection when pressing Escape while scope is focused. */
        ClearOnEscape: number;
        /** Clear selection when clicking on empty location within scope. */
        ClearOnClickVoid: number;
        /** Scope for _BoxSelect and _ClearOnClickVoid is whole window (Default). Use if BeginMultiSelect() covers a whole window or used a single time in same window. */
        ScopeWindow: number;
        /** Scope for _BoxSelect and _ClearOnClickVoid is rectangle encompassing BeginMultiSelect()\/EndMultiSelect(). Use if BeginMultiSelect() is called multiple times in same window. */
        ScopeRect: number;
        /** Apply selection on mouse down when clicking on unselected item. (Default) */
        SelectOnClick: number;
        /** Apply selection on mouse release when clicking an unselected item. Allow dragging an unselected item without altering selection. */
        SelectOnClickRelease: number;
        /** [Temporary] Enable navigation wrapping on X axis. Provided as a convenience because we don't have a design for the general Nav API for this yet. When the more general feature be public we may obsolete this flag in favor of new one. */
        NavWrapX: number;
    };
    /** [Auto] Selection request type */
    SelectionRequestType: {
        _None: number;
        /** Request app to clear selection (if Selected==false) or select all items (if Selected==true). We cannot set RangeFirstItem\/RangeLastItem as its contents is entirely up to user (not necessarily an index) */
        _SetAll: number;
        /** Request app to select\/unselect [RangeFirstItem..RangeLastItem] items (inclusive) based on value of Selected. Only EndMultiSelect() request this, app code can read after BeginMultiSelect() and it will always be false. */
        _SetRange: number;
    };
    /** [Auto] Flags for ImDrawList functions */
    ImDrawFlags: {
        None: number;
        /** PathStroke(), AddPolyline(): specify that shape should be closed (Important: this is always == 1 for legacy reason) */
        Closed: number;
        /** AddRect(), AddRectFilled(), PathRect(): enable rounding top-left corner only (when rounding > 0.0f, we default to all corners). Was 0x01. */
        RoundCornersTopLeft: number;
        /** AddRect(), AddRectFilled(), PathRect(): enable rounding top-right corner only (when rounding > 0.0f, we default to all corners). Was 0x02. */
        RoundCornersTopRight: number;
        /** AddRect(), AddRectFilled(), PathRect(): enable rounding bottom-left corner only (when rounding > 0.0f, we default to all corners). Was 0x04. */
        RoundCornersBottomLeft: number;
        /** AddRect(), AddRectFilled(), PathRect(): enable rounding bottom-right corner only (when rounding > 0.0f, we default to all corners). Wax 0x08. */
        RoundCornersBottomRight: number;
        /** AddRect(), AddRectFilled(), PathRect(): disable rounding on all corners (when rounding > 0.0f). This is NOT zero, NOT an implicit flag! */
        RoundCornersNone: number;
        RoundCornersTop: number;
        RoundCornersBottom: number;
        RoundCornersLeft: number;
        RoundCornersRight: number;
        RoundCornersAll: number;
    };
    /** [Auto] Flags for ImDrawList instance. Those are set automatically by ImGui:: functions from ImGuiIO settings, and generally not manipulated directly. */
    ImDrawListFlags: {
        None: number;
        /** Enable anti-aliased lines\/borders (*2 the number of triangles for 1.0f wide line or lines thin enough to be drawn using textures, otherwise *3 the number of triangles) */
        AntiAliasedLines: number;
        /** Enable anti-aliased lines\/borders using textures when possible. Require backend to render with bilinear filtering (NOT point\/nearest filtering). */
        AntiAliasedLinesUseTex: number;
        /** Enable anti-aliased edge around filled shapes (rounded rectangles, circles). */
        AntiAliasedFill: number;
        /** Can emit 'VtxOffset > 0' to allow large meshes. Set when 'ImGuiBackendFlags_RendererHasVtxOffset' is enabled. */
        AllowVtxOffset: number;
    };
    /** [Auto] Flags for ImFontAtlas build */
    ImFontAtlasFlags: {
        None: number;
        /** Don't round the height to next power of two */
        NoPowerOfTwoHeight: number;
        /** Don't build software mouse cursors into the atlas (save a little texture memory) */
        NoMouseCursors: number;
        /** Don't build thick line textures into the atlas (save a little texture memory, allow support for point\/nearest filtering). The AntiAliasedLinesUseTex features uses them, otherwise they will be rendered using polygons (more expensive for CPU\/GPU). */
        NoBakedLines: number;
    };
    /** [Auto] Flags stored in ImGuiViewport::Flags, giving indications to the platform backends. */
    ViewportFlags: {
        None: number;
        /** Represent a Platform Window */
        IsPlatformWindow: number;
        /** Represent a Platform Monitor (unused yet) */
        IsPlatformMonitor: number;
        /** Platform Window: Is created\/managed by the user application? (rather than our backend) */
        OwnedByApp: number;
        /** Platform Window: Disable platform decorations: title bar, borders, etc. (generally set all windows, but if ImGuiConfigFlags_ViewportsDecoration is set we only set this on popups\/tooltips) */
        NoDecoration: number;
        /** Platform Window: Disable platform task bar icon (generally set on popups\/tooltips, or all windows if ImGuiConfigFlags_ViewportsNoTaskBarIcon is set) */
        NoTaskBarIcon: number;
        /** Platform Window: Don't take focus when created. */
        NoFocusOnAppearing: number;
        /** Platform Window: Don't take focus when clicked on. */
        NoFocusOnClick: number;
        /** Platform Window: Make mouse pass through so we can drag this window while peaking behind it. */
        NoInputs: number;
        /** Platform Window: Renderer doesn't need to clear the framebuffer ahead (because we will fill it entirely). */
        NoRendererClear: number;
        /** Platform Window: Avoid merging this window into another host window. This can only be set via ImGuiWindowClass viewport flags override (because we need to now ahead if we are going to create a viewport in the first place!). */
        NoAutoMerge: number;
        /** Platform Window: Display on top (for tooltips only). */
        TopMost: number;
        /** Viewport can host multiple imgui windows (secondary viewports are associated to a single window). \/\/ FIXME: In practice there's still probably code making the assumption that this is always and only on the MainViewport. Will fix once we add support for "no main viewport". */
        CanHostOtherWindows: number;
        /** Platform Window: Window is minimized, can skip render. When minimized we tend to avoid using the viewport pos\/size for clipping window or testing if they are contained in the viewport. */
        IsMinimized: number;
        /** Platform Window: Window is focused (last call to Platform_GetWindowFocus() returned true) */
        IsFocused: number;
    };
}>;
/** @typedef {number} ImGuiID [Auto] */
/** @typedef {number} ImS8 [Auto] */
/** @typedef {number} ImU8 [Auto] */
/** @typedef {number} ImS16 [Auto] */
/** @typedef {number} ImU16 [Auto] */
/** @typedef {number} ImS32 [Auto] */
/** @typedef {number} ImU32 [Auto] */
/** @typedef {BigInt} ImS64 [Auto] */
/** @typedef {BigInt} ImU64 [Auto] */
/** @typedef {number} ImGuiDir [Auto] */
/** @typedef {number} ImGuiKey [Auto] */
/** @typedef {number} ImGuiMouseSource [Auto] */
/** @typedef {number} ImGuiSortDirection [Auto] */
/** @typedef {number} ImGuiCol [Auto] */
/** @typedef {number} ImGuiCond [Auto] */
/** @typedef {number} ImGuiDataType [Auto] */
/** @typedef {number} ImGuiMouseButton [Auto] */
/** @typedef {number} ImGuiMouseCursor [Auto] */
/** @typedef {number} ImGuiStyleVar [Auto] */
/** @typedef {number} ImGuiTableBgTarget [Auto] */
/** @typedef {number} ImDrawFlags [Auto] */
/** @typedef {number} ImDrawListFlags [Auto] */
/** @typedef {number} ImFontAtlasFlags [Auto] */
/** @typedef {number} ImGuiBackendFlags [Auto] */
/** @typedef {number} ImGuiButtonFlags [Auto] */
/** @typedef {number} ImGuiChildFlags [Auto] */
/** @typedef {number} ImGuiColorEditFlags [Auto] */
/** @typedef {number} ImGuiConfigFlags [Auto] */
/** @typedef {number} ImGuiComboFlags [Auto] */
/** @typedef {number} ImGuiDockNodeFlags [Auto] */
/** @typedef {number} ImGuiDragDropFlags [Auto] */
/** @typedef {number} ImGuiFocusedFlags [Auto] */
/** @typedef {number} ImGuiHoveredFlags [Auto] */
/** @typedef {number} ImGuiInputFlags [Auto] */
/** @typedef {number} ImGuiInputTextFlags [Auto] */
/** @typedef {number} ImGuiItemFlags [Auto] */
/** @typedef {number} ImGuiKeyChord [Auto] */
/** @typedef {number} ImGuiPopupFlags [Auto] */
/** @typedef {number} ImGuiMultiSelectFlags [Auto] */
/** @typedef {number} ImGuiSelectableFlags [Auto] */
/** @typedef {number} ImGuiSliderFlags [Auto] */
/** @typedef {number} ImGuiTabBarFlags [Auto] */
/** @typedef {number} ImGuiTabItemFlags [Auto] */
/** @typedef {number} ImGuiTableFlags [Auto] */
/** @typedef {number} ImGuiTableColumnFlags [Auto] */
/** @typedef {number} ImGuiTableRowFlags [Auto] */
/** @typedef {number} ImGuiTreeNodeFlags [Auto] */
/** @typedef {number} ImGuiViewportFlags [Auto] */
/** @typedef {number} ImGuiWindowFlags [Auto] */
/** @typedef {BigInt} ImTextureID [Auto] */
/** @typedef {number} ImDrawIdx [Auto] */
/** @typedef {number} ImWchar32 [Auto] */
/** @typedef {number} ImWchar16 [Auto] */
/** @typedef {number} ImWchar [Auto] */
/** @typedef {number} ImWchar [Auto] */
/** @typedef {BigInt} ImGuiSelectionUserData [Auto] */
/** [Auto] Data shared among multiple draw lists (typically owned by parent ImGui context, but you may create one yourself) */
export class ImDrawListSharedData extends StructBinding {
    constructor();
}
/** [Auto] Dear ImGui context (opaque structure, unless including imgui_internal.h) */
export class ImGuiContext extends StructBinding {
    constructor();
}
/** [Auto] ImVec2: 2D vector used to store positions, sizes etc. */
export class ImVec2 extends StructBinding {
    /** @param {number} x @param {number} y */
    constructor(x?: number, y?: number);
    set x(v: number);
    /** @type {number}  */
    get x(): number;
    set y(v: number);
    /** @type {number}  */
    get y(): number;
}
/** [Auto] ImVec4: 4D vector used to store clipping rectangles, colors etc. */
export class ImVec4 extends StructBinding {
    /** @param {number} x @param {number} y @param {number} z @param {number} w */
    constructor(x?: number, y?: number, z?: number, w?: number);
    set x(v: number);
    /** @type {number}  */
    get x(): number;
    set y(v: number);
    /** @type {number}  */
    get y(): number;
    set z(v: number);
    /** @type {number}  */
    get z(): number;
    set w(v: number);
    /** @type {number}  */
    get w(): number;
}
/** [Auto] Sorting specifications for a table (often handling sort specs for a single column, occasionally more) */
export class ImGuiTableSortSpecs extends StructBinding {
    constructor();
}
/** [Auto] Sorting specification for one column of a table (sizeof == 12 bytes) */
export class ImGuiTableColumnSortSpecs extends StructBinding {
    constructor();
}
/** [Auto] Runtime data for styling/colors. */
export class ImGuiStyle extends StructBinding {
    constructor();
    set Alpha(v: number);
    /** @type {number} Global alpha applies to everything in Dear ImGui. */
    get Alpha(): number;
    set DisabledAlpha(v: number);
    /** @type {number} Additional alpha multiplier applied by BeginDisabled(). Multiply over current value of Alpha. */
    get DisabledAlpha(): number;
    set WindowPadding(v: ImVec2);
    /** @type {ImVec2} Padding within a window. */
    get WindowPadding(): ImVec2;
    set WindowRounding(v: number);
    /** @type {number} Radius of window corners rounding. Set to 0.0f to have rectangular windows. Large values tend to lead to variety of artifacts and are not recommended. */
    get WindowRounding(): number;
    set WindowBorderSize(v: number);
    /** @type {number} Thickness of border around windows. Generally set to 0.0f or 1.0f. (Other values are not well tested and more CPU\/GPU costly). */
    get WindowBorderSize(): number;
    set WindowMinSize(v: ImVec2);
    /** @type {ImVec2} Minimum window size. This is a global setting. If you want to constrain individual windows, use SetNextWindowSizeConstraints(). */
    get WindowMinSize(): ImVec2;
    set WindowTitleAlign(v: ImVec2);
    /** @type {ImVec2} Alignment for title bar text. Defaults to (0.0f,0.5f) for left-aligned,vertically centered. */
    get WindowTitleAlign(): ImVec2;
    set WindowMenuButtonPosition(v: ImGuiDir);
    /** @type {ImGuiDir} Side of the collapsing\/docking button in the title bar (None\/Left\/Right). Defaults to ImGuiDir_Left. */
    get WindowMenuButtonPosition(): ImGuiDir;
    set ChildRounding(v: number);
    /** @type {number} Radius of child window corners rounding. Set to 0.0f to have rectangular windows. */
    get ChildRounding(): number;
    set ChildBorderSize(v: number);
    /** @type {number} Thickness of border around child windows. Generally set to 0.0f or 1.0f. (Other values are not well tested and more CPU\/GPU costly). */
    get ChildBorderSize(): number;
    set PopupRounding(v: number);
    /** @type {number} Radius of popup window corners rounding. (Note that tooltip windows use WindowRounding) */
    get PopupRounding(): number;
    set PopupBorderSize(v: number);
    /** @type {number} Thickness of border around popup\/tooltip windows. Generally set to 0.0f or 1.0f. (Other values are not well tested and more CPU\/GPU costly). */
    get PopupBorderSize(): number;
    set FramePadding(v: ImVec2);
    /** @type {ImVec2} Padding within a framed rectangle (used by most widgets). */
    get FramePadding(): ImVec2;
    set FrameRounding(v: number);
    /** @type {number} Radius of frame corners rounding. Set to 0.0f to have rectangular frame (used by most widgets). */
    get FrameRounding(): number;
    set FrameBorderSize(v: number);
    /** @type {number} Thickness of border around frames. Generally set to 0.0f or 1.0f. (Other values are not well tested and more CPU\/GPU costly). */
    get FrameBorderSize(): number;
    set ItemSpacing(v: ImVec2);
    /** @type {ImVec2} Horizontal and vertical spacing between widgets\/lines. */
    get ItemSpacing(): ImVec2;
    set ItemInnerSpacing(v: ImVec2);
    /** @type {ImVec2} Horizontal and vertical spacing between within elements of a composed widget (e.g. a slider and its label). */
    get ItemInnerSpacing(): ImVec2;
    set CellPadding(v: ImVec2);
    /** @type {ImVec2} Padding within a table cell. Cellpadding.x is locked for entire table. CellPadding.y may be altered between different rows. */
    get CellPadding(): ImVec2;
    set TouchExtraPadding(v: ImVec2);
    /** @type {ImVec2} Expand reactive bounding box for touch-based system where touch position is not accurate enough. Unfortunately we don't sort widgets so priority on overlap will always be given to the first widget. So don't grow this too much! */
    get TouchExtraPadding(): ImVec2;
    set IndentSpacing(v: number);
    /** @type {number} Horizontal indentation when e.g. entering a tree node. Generally == (FontSize + FramePadding.x*2). */
    get IndentSpacing(): number;
    set ColumnsMinSpacing(v: number);
    /** @type {number} Minimum horizontal spacing between two columns. Preferably > (FramePadding.x + 1). */
    get ColumnsMinSpacing(): number;
    set ScrollbarSize(v: number);
    /** @type {number} Width of the vertical scrollbar, Height of the horizontal scrollbar. */
    get ScrollbarSize(): number;
    set ScrollbarRounding(v: number);
    /** @type {number} Radius of grab corners for scrollbar. */
    get ScrollbarRounding(): number;
    set GrabMinSize(v: number);
    /** @type {number} Minimum width\/height of a grab box for slider\/scrollbar. */
    get GrabMinSize(): number;
    set GrabRounding(v: number);
    /** @type {number} Radius of grabs corners rounding. Set to 0.0f to have rectangular slider grabs. */
    get GrabRounding(): number;
    set LogSliderDeadzone(v: number);
    /** @type {number} The size in pixels of the dead-zone around zero on logarithmic sliders that cross zero. */
    get LogSliderDeadzone(): number;
    set TabRounding(v: number);
    /** @type {number} Radius of upper corners of a tab. Set to 0.0f to have rectangular tabs. */
    get TabRounding(): number;
    set TabBorderSize(v: number);
    /** @type {number} Thickness of border around tabs. */
    get TabBorderSize(): number;
    set TabMinWidthForCloseButton(v: number);
    /** @type {number} Minimum width for close button to appear on an unselected tab when hovered. Set to 0.0f to always show when hovering, set to FLT_MAX to never show close button unless selected. */
    get TabMinWidthForCloseButton(): number;
    set TabBarBorderSize(v: number);
    /** @type {number} Thickness of tab-bar separator, which takes on the tab active color to denote focus. */
    get TabBarBorderSize(): number;
    set TabBarOverlineSize(v: number);
    /** @type {number} Thickness of tab-bar overline, which highlights the selected tab-bar. */
    get TabBarOverlineSize(): number;
    set TableAngledHeadersAngle(v: number);
    /** @type {number} Angle of angled headers (supported values range from -50.0f degrees to +50.0f degrees). */
    get TableAngledHeadersAngle(): number;
    set TableAngledHeadersTextAlign(v: ImVec2);
    /** @type {ImVec2} Alignment of angled headers within the cell */
    get TableAngledHeadersTextAlign(): ImVec2;
    set ColorButtonPosition(v: ImGuiDir);
    /** @type {ImGuiDir} Side of the color button in the ColorEdit4 widget (left\/right). Defaults to ImGuiDir_Right. */
    get ColorButtonPosition(): ImGuiDir;
    set ButtonTextAlign(v: ImVec2);
    /** @type {ImVec2} Alignment of button text when button is larger than text. Defaults to (0.5f, 0.5f) (centered). */
    get ButtonTextAlign(): ImVec2;
    set SelectableTextAlign(v: ImVec2);
    /** @type {ImVec2} Alignment of selectable text. Defaults to (0.0f, 0.0f) (top-left aligned). It's generally important to keep this left-aligned if you want to lay multiple items on a same line. */
    get SelectableTextAlign(): ImVec2;
    set SeparatorTextBorderSize(v: number);
    /** @type {number} Thickness of border in SeparatorText() */
    get SeparatorTextBorderSize(): number;
    set SeparatorTextAlign(v: ImVec2);
    /** @type {ImVec2} Alignment of text within the separator. Defaults to (0.0f, 0.5f) (left aligned, center). */
    get SeparatorTextAlign(): ImVec2;
    set SeparatorTextPadding(v: ImVec2);
    /** @type {ImVec2} Horizontal offset of text from each edge of the separator + spacing on other axis. Generally small values. .y is recommended to be == FramePadding.y. */
    get SeparatorTextPadding(): ImVec2;
    set DisplayWindowPadding(v: ImVec2);
    /** @type {ImVec2} Apply to regular windows: amount which we enforce to keep visible when moving near edges of your screen. */
    get DisplayWindowPadding(): ImVec2;
    set DisplaySafeAreaPadding(v: ImVec2);
    /** @type {ImVec2} Apply to every windows, menus, popups, tooltips: amount where we avoid displaying contents. Adjust if you cannot see the edges of your screen (e.g. on a TV where scaling has not been configured). */
    get DisplaySafeAreaPadding(): ImVec2;
    set DockingSeparatorSize(v: number);
    /** @type {number} Thickness of resizing border between docked windows */
    get DockingSeparatorSize(): number;
    set MouseCursorScale(v: number);
    /** @type {number} Scale software rendered mouse cursor (when io.MouseDrawCursor is enabled). We apply per-monitor DPI scaling over this scale. May be removed later. */
    get MouseCursorScale(): number;
    set AntiAliasedLines(v: boolean);
    /** @type {boolean} Enable anti-aliased lines\/borders. Disable if you are really tight on CPU\/GPU. Latched at the beginning of the frame (copied to ImDrawList). */
    get AntiAliasedLines(): boolean;
    set AntiAliasedLinesUseTex(v: boolean);
    /** @type {boolean} Enable anti-aliased lines\/borders using textures where possible. Require backend to render with bilinear filtering (NOT point\/nearest filtering). Latched at the beginning of the frame (copied to ImDrawList). */
    get AntiAliasedLinesUseTex(): boolean;
    set AntiAliasedFill(v: boolean);
    /** @type {boolean} Enable anti-aliased edges around filled shapes (rounded rectangles, circles, etc.). Disable if you are really tight on CPU\/GPU. Latched at the beginning of the frame (copied to ImDrawList). */
    get AntiAliasedFill(): boolean;
    set CurveTessellationTol(v: number);
    /** @type {number} Tessellation tolerance when using PathBezierCurveTo() without a specific number of segments. Decrease for highly tessellated curves (higher quality, more polygons), increase to reduce quality. */
    get CurveTessellationTol(): number;
    set CircleTessellationMaxError(v: number);
    /** @type {number} Maximum error (in pixels) allowed when using AddCircle()\/AddCircleFilled() or drawing rounded corner rectangles with no explicit segment count specified. Decrease for higher quality but more geometry. */
    get CircleTessellationMaxError(): number;
    set HoverStationaryDelay(v: number);
    /** @type {number} Delay for IsItemHovered(ImGuiHoveredFlags_Stationary). Time required to consider mouse stationary. */
    get HoverStationaryDelay(): number;
    set HoverDelayShort(v: number);
    /** @type {number} Delay for IsItemHovered(ImGuiHoveredFlags_DelayShort). Usually used along with HoverStationaryDelay. */
    get HoverDelayShort(): number;
    set HoverDelayNormal(v: number);
    /** @type {number} Delay for IsItemHovered(ImGuiHoveredFlags_DelayNormal). " */
    get HoverDelayNormal(): number;
    set HoverFlagsForTooltipMouse(v: ImGuiHoveredFlags);
    /** @type {ImGuiHoveredFlags} Default flags when using IsItemHovered(ImGuiHoveredFlags_ForTooltip) or BeginItemTooltip()\/SetItemTooltip() while using mouse. */
    get HoverFlagsForTooltipMouse(): ImGuiHoveredFlags;
    set HoverFlagsForTooltipNav(v: ImGuiHoveredFlags);
    /** @type {ImGuiHoveredFlags} Default flags when using IsItemHovered(ImGuiHoveredFlags_ForTooltip) or BeginItemTooltip()\/SetItemTooltip() while using keyboard\/gamepad. */
    get HoverFlagsForTooltipNav(): ImGuiHoveredFlags;
    /**
     * [Auto]
     * @param {number} scale_factor
     * @returns {void}
     */
    ScaleAllSizes(scale_factor: number): void;
}
/** [Auto] Main configuration and I/O between your application and ImGui. */
export class ImGuiIO extends StructBinding {
    constructor();
    set ConfigFlags(v: ImGuiConfigFlags);
    /** @type {ImGuiConfigFlags} = 0              \/\/ See ImGuiConfigFlags_ enum. Set by user\/application. Keyboard\/Gamepad navigation options, etc. */
    get ConfigFlags(): ImGuiConfigFlags;
    set BackendFlags(v: ImGuiBackendFlags);
    /** @type {ImGuiBackendFlags} = 0              \/\/ See ImGuiBackendFlags_ enum. Set by backend (imgui_impl_xxx files or custom backend) to communicate features supported by the backend. */
    get BackendFlags(): ImGuiBackendFlags;
    set DisplaySize(v: ImVec2);
    /** @type {ImVec2} <unset>          \/\/ Main display size, in pixels (generally == GetMainViewport()->Size). May change every frame. */
    get DisplaySize(): ImVec2;
    set DeltaTime(v: number);
    /** @type {number} = 1.0f\/60.0f     \/\/ Time elapsed since last frame, in seconds. May change every frame. */
    get DeltaTime(): number;
    set IniSavingRate(v: number);
    /** @type {number} = 5.0f           \/\/ Minimum time between saving positions\/sizes to .ini file, in seconds. */
    get IniSavingRate(): number;
    set Fonts(v: ImFontAtlas);
    /** @type {ImFontAtlas} <auto>           \/\/ Font atlas: load, rasterize and pack one or more fonts into a single texture. */
    get Fonts(): ImFontAtlas;
    set FontGlobalScale(v: number);
    /** @type {number} = 1.0f           \/\/ Global scale all fonts */
    get FontGlobalScale(): number;
    set FontAllowUserScaling(v: boolean);
    /** @type {boolean} = false          \/\/ [OBSOLETE] Allow user scaling text of individual window with CTRL+Wheel. */
    get FontAllowUserScaling(): boolean;
    set FontDefault(v: ImFont);
    /** @type {ImFont} = NULL           \/\/ Font to use on NewFrame(). Use NULL to uses Fonts->Fonts[0]. */
    get FontDefault(): ImFont;
    set DisplayFramebufferScale(v: ImVec2);
    /** @type {ImVec2} = (1, 1)         \/\/ For retina display or other situations where window coordinates are different from framebuffer coordinates. This generally ends up in ImDrawData::FramebufferScale. */
    get DisplayFramebufferScale(): ImVec2;
    set ConfigNavSwapGamepadButtons(v: boolean);
    /** @type {boolean} = false          \/\/ Swap Activate<>Cancel (A<>B) buttons, matching typical "Nintendo\/Japanese style" gamepad layout. */
    get ConfigNavSwapGamepadButtons(): boolean;
    set ConfigNavMoveSetMousePos(v: boolean);
    /** @type {boolean} = false          \/\/ Directional\/tabbing navigation teleports the mouse cursor. May be useful on TV\/console systems where moving a virtual mouse is difficult. Will update io.MousePos and set io.WantSetMousePos=true. */
    get ConfigNavMoveSetMousePos(): boolean;
    set ConfigNavCaptureKeyboard(v: boolean);
    /** @type {boolean} = true           \/\/ Sets io.WantCaptureKeyboard when io.NavActive is set. */
    get ConfigNavCaptureKeyboard(): boolean;
    set ConfigNavEscapeClearFocusItem(v: boolean);
    /** @type {boolean} = true           \/\/ Pressing Escape can clear focused item + navigation id\/highlight. Set to false if you want to always keep highlight on. */
    get ConfigNavEscapeClearFocusItem(): boolean;
    set ConfigNavEscapeClearFocusWindow(v: boolean);
    /** @type {boolean} = false          \/\/ Pressing Escape can clear focused window as well (super set of io.ConfigNavEscapeClearFocusItem). */
    get ConfigNavEscapeClearFocusWindow(): boolean;
    set ConfigNavCursorVisibleAuto(v: boolean);
    /** @type {boolean} = true           \/\/ Using directional navigation key makes the cursor visible. Mouse click hides the cursor. */
    get ConfigNavCursorVisibleAuto(): boolean;
    set ConfigNavCursorVisibleAlways(v: boolean);
    /** @type {boolean} = false          \/\/ Navigation cursor is always visible. */
    get ConfigNavCursorVisibleAlways(): boolean;
    set ConfigDockingNoSplit(v: boolean);
    /** @type {boolean} = false          \/\/ Simplified docking mode: disable window splitting, so docking is limited to merging multiple windows together into tab-bars. */
    get ConfigDockingNoSplit(): boolean;
    set ConfigDockingWithShift(v: boolean);
    /** @type {boolean} = false          \/\/ Enable docking with holding Shift key (reduce visual noise, allows dropping in wider space) */
    get ConfigDockingWithShift(): boolean;
    set ConfigDockingAlwaysTabBar(v: boolean);
    /** @type {boolean} = false          \/\/ [BETA] [FIXME: This currently creates regression with auto-sizing and general overhead] Make every single floating window display within a docking node. */
    get ConfigDockingAlwaysTabBar(): boolean;
    set ConfigDockingTransparentPayload(v: boolean);
    /** @type {boolean} = false          \/\/ [BETA] Make window or viewport transparent when docking and only display docking boxes on the target viewport. Useful if rendering of multiple viewport cannot be synced. Best used with ConfigViewportsNoAutoMerge. */
    get ConfigDockingTransparentPayload(): boolean;
    set ConfigViewportsNoAutoMerge(v: boolean);
    /** @type {boolean} = false;         \/\/ Set to make all floating imgui windows always create their own viewport. Otherwise, they are merged into the main host viewports when overlapping it. May also set ImGuiViewportFlags_NoAutoMerge on individual viewport. */
    get ConfigViewportsNoAutoMerge(): boolean;
    set ConfigViewportsNoTaskBarIcon(v: boolean);
    /** @type {boolean} = false          \/\/ Disable default OS task bar icon flag for secondary viewports. When a viewport doesn't want a task bar icon, ImGuiViewportFlags_NoTaskBarIcon will be set on it. */
    get ConfigViewportsNoTaskBarIcon(): boolean;
    set ConfigViewportsNoDecoration(v: boolean);
    /** @type {boolean} = true           \/\/ Disable default OS window decoration flag for secondary viewports. When a viewport doesn't want window decorations, ImGuiViewportFlags_NoDecoration will be set on it. Enabling decoration can create subsequent issues at OS levels (e.g. minimum window size). */
    get ConfigViewportsNoDecoration(): boolean;
    set ConfigViewportsNoDefaultParent(v: boolean);
    /** @type {boolean} = false          \/\/ Disable default OS parenting to main viewport for secondary viewports. By default, viewports are marked with ParentViewportId = <main_viewport>, expecting the platform backend to setup a parent\/child relationship between the OS windows (some backend may ignore this). Set to true if you want the default to be 0, then all viewports will be top-level OS windows. */
    get ConfigViewportsNoDefaultParent(): boolean;
    set MouseDrawCursor(v: boolean);
    /** @type {boolean} = false          \/\/ Request ImGui to draw a mouse cursor for you (if you are on a platform without a mouse cursor). Cannot be easily renamed to 'io.ConfigXXX' because this is frequently used by backend implementations. */
    get MouseDrawCursor(): boolean;
    set ConfigMacOSXBehaviors(v: boolean);
    /** @type {boolean} = defined(__APPLE__) \/\/ Swap Cmd<>Ctrl keys + OS X style text editing cursor movement using Alt instead of Ctrl, Shortcuts using Cmd\/Super instead of Ctrl, Line\/Text Start and End using Cmd+Arrows instead of Home\/End, Double click selects by word instead of selecting whole text, Multi-selection in lists uses Cmd\/Super instead of Ctrl. */
    get ConfigMacOSXBehaviors(): boolean;
    set ConfigInputTrickleEventQueue(v: boolean);
    /** @type {boolean} = true           \/\/ Enable input queue trickling: some types of events submitted during the same frame (e.g. button down + up) will be spread over multiple frames, improving interactions with low framerates. */
    get ConfigInputTrickleEventQueue(): boolean;
    set ConfigInputTextCursorBlink(v: boolean);
    /** @type {boolean} = true           \/\/ Enable blinking cursor (optional as some users consider it to be distracting). */
    get ConfigInputTextCursorBlink(): boolean;
    set ConfigInputTextEnterKeepActive(v: boolean);
    /** @type {boolean} = false          \/\/ [BETA] Pressing Enter will keep item active and select contents (single-line only). */
    get ConfigInputTextEnterKeepActive(): boolean;
    set ConfigDragClickToInputText(v: boolean);
    /** @type {boolean} = false          \/\/ [BETA] Enable turning DragXXX widgets into text input with a simple mouse click-release (without moving). Not desirable on devices without a keyboard. */
    get ConfigDragClickToInputText(): boolean;
    set ConfigWindowsResizeFromEdges(v: boolean);
    /** @type {boolean} = true           \/\/ Enable resizing of windows from their edges and from the lower-left corner. This requires ImGuiBackendFlags_HasMouseCursors for better mouse cursor feedback. (This used to be a per-window ImGuiWindowFlags_ResizeFromAnySide flag) */
    get ConfigWindowsResizeFromEdges(): boolean;
    set ConfigWindowsMoveFromTitleBarOnly(v: boolean);
    /** @type {boolean} = false      \/\/ Enable allowing to move windows only when clicking on their title bar. Does not apply to windows without a title bar. */
    get ConfigWindowsMoveFromTitleBarOnly(): boolean;
    set ConfigWindowsCopyContentsWithCtrlC(v: boolean);
    /** @type {boolean} = false      \/\/ [EXPERIMENTAL] CTRL+C copy the contents of focused window into the clipboard. Experimental because: (1) has known issues with nested Begin\/End pairs (2) text output quality varies (3) text output is in submission order rather than spatial order. */
    get ConfigWindowsCopyContentsWithCtrlC(): boolean;
    set ConfigScrollbarScrollByPage(v: boolean);
    /** @type {boolean} = true           \/\/ Enable scrolling page by page when clicking outside the scrollbar grab. When disabled, always scroll to clicked location. When enabled, Shift+Click scrolls to clicked location. */
    get ConfigScrollbarScrollByPage(): boolean;
    set ConfigMemoryCompactTimer(v: number);
    /** @type {number} = 60.0f          \/\/ Timer (in seconds) to free transient windows\/tables memory buffers when unused. Set to -1.0f to disable. */
    get ConfigMemoryCompactTimer(): number;
    set MouseDoubleClickTime(v: number);
    /** @type {number} = 0.30f          \/\/ Time for a double-click, in seconds. */
    get MouseDoubleClickTime(): number;
    set MouseDoubleClickMaxDist(v: number);
    /** @type {number} = 6.0f           \/\/ Distance threshold to stay in to validate a double-click, in pixels. */
    get MouseDoubleClickMaxDist(): number;
    set MouseDragThreshold(v: number);
    /** @type {number} = 6.0f           \/\/ Distance threshold before considering we are dragging. */
    get MouseDragThreshold(): number;
    set KeyRepeatDelay(v: number);
    /** @type {number} = 0.275f         \/\/ When holding a key\/button, time before it starts repeating, in seconds (for buttons in Repeat mode, etc.). */
    get KeyRepeatDelay(): number;
    set KeyRepeatRate(v: number);
    /** @type {number} = 0.050f         \/\/ When holding a key\/button, rate at which it repeats, in seconds. */
    get KeyRepeatRate(): number;
    set ConfigErrorRecovery(v: boolean);
    /** @type {boolean} = true       \/\/ Enable error recovery support. Some errors won't be detected and lead to direct crashes if recovery is disabled. */
    get ConfigErrorRecovery(): boolean;
    set ConfigErrorRecoveryEnableAssert(v: boolean);
    /** @type {boolean} = true       \/\/ Enable asserts on recoverable error. By default call IM_ASSERT() when returning from a failing IM_ASSERT_USER_ERROR() */
    get ConfigErrorRecoveryEnableAssert(): boolean;
    set ConfigErrorRecoveryEnableDebugLog(v: boolean);
    /** @type {boolean} = true       \/\/ Enable debug log output on recoverable errors. */
    get ConfigErrorRecoveryEnableDebugLog(): boolean;
    set ConfigErrorRecoveryEnableTooltip(v: boolean);
    /** @type {boolean} = true       \/\/ Enable tooltip on recoverable errors. The tooltip include a way to enable asserts if they were disabled. */
    get ConfigErrorRecoveryEnableTooltip(): boolean;
    set ConfigDebugIsDebuggerPresent(v: boolean);
    /** @type {boolean} = false          \/\/ Enable various tools calling IM_DEBUG_BREAK(). */
    get ConfigDebugIsDebuggerPresent(): boolean;
    set ConfigDebugHighlightIdConflicts(v: boolean);
    /** @type {boolean} = true           \/\/ Highlight and show an error message when multiple items have conflicting identifiers. */
    get ConfigDebugHighlightIdConflicts(): boolean;
    set ConfigDebugBeginReturnValueOnce(v: boolean);
    /** @type {boolean} = false          \/\/ First-time calls to Begin()\/BeginChild() will return false. NEEDS TO BE SET AT APPLICATION BOOT TIME if you don't want to miss windows. */
    get ConfigDebugBeginReturnValueOnce(): boolean;
    set ConfigDebugBeginReturnValueLoop(v: boolean);
    /** @type {boolean} = false          \/\/ Some calls to Begin()\/BeginChild() will return false. Will cycle through window depths then repeat. Suggested use: add "io.ConfigDebugBeginReturnValue = io.KeyShift" in your main loop then occasionally press SHIFT. Windows should be flickering while running. */
    get ConfigDebugBeginReturnValueLoop(): boolean;
    set ConfigDebugIgnoreFocusLoss(v: boolean);
    /** @type {boolean} = false          \/\/ Ignore io.AddFocusEvent(false), consequently not calling io.ClearInputKeys()\/io.ClearInputMouse() in input processing. */
    get ConfigDebugIgnoreFocusLoss(): boolean;
    set ConfigDebugIniSettings(v: boolean);
    /** @type {boolean} = false          \/\/ Save .ini data with extra comments (particularly helpful for Docking, but makes saving slower) */
    get ConfigDebugIniSettings(): boolean;
    set WantCaptureMouse(v: boolean);
    /** @type {boolean} Set when Dear ImGui will use mouse inputs, in this case do not dispatch them to your main game\/application (either way, always pass on mouse inputs to imgui). (e.g. unclicked mouse is hovering over an imgui window, widget is active, mouse was clicked over an imgui window, etc.). */
    get WantCaptureMouse(): boolean;
    set WantCaptureKeyboard(v: boolean);
    /** @type {boolean} Set when Dear ImGui will use keyboard inputs, in this case do not dispatch them to your main game\/application (either way, always pass keyboard inputs to imgui). (e.g. InputText active, or an imgui window is focused and navigation is enabled, etc.). */
    get WantCaptureKeyboard(): boolean;
    set WantTextInput(v: boolean);
    /** @type {boolean} Mobile\/console: when set, you may display an on-screen keyboard. This is set by Dear ImGui when it wants textual keyboard input to happen (e.g. when a InputText widget is active). */
    get WantTextInput(): boolean;
    set WantSetMousePos(v: boolean);
    /** @type {boolean} MousePos has been altered, backend should reposition mouse on next frame. Rarely used! Set only when io.ConfigNavMoveSetMousePos is enabled. */
    get WantSetMousePos(): boolean;
    set WantSaveIniSettings(v: boolean);
    /** @type {boolean} When manual .ini load\/save is active (io.IniFilename == NULL), this will be set to notify your application that you can call SaveIniSettingsToMemory() and save yourself. Important: clear io.WantSaveIniSettings yourself after saving! */
    get WantSaveIniSettings(): boolean;
    set NavActive(v: boolean);
    /** @type {boolean} Keyboard\/Gamepad navigation is currently allowed (will handle ImGuiKey_NavXXX events) = a window is focused and it doesn't use the ImGuiWindowFlags_NoNavInputs flag. */
    get NavActive(): boolean;
    set NavVisible(v: boolean);
    /** @type {boolean} Keyboard\/Gamepad navigation highlight is visible and allowed (will handle ImGuiKey_NavXXX events). */
    get NavVisible(): boolean;
    set Framerate(v: number);
    /** @type {number} Estimate of application framerate (rolling average over 60 frames, based on io.DeltaTime), in frame per second. Solely for convenience. Slow applications may not want to use a moving average or may want to reset underlying buffers occasionally. */
    get Framerate(): number;
    set MetricsRenderVertices(v: number);
    /** @type {number} Vertices output during last call to Render() */
    get MetricsRenderVertices(): number;
    set MetricsRenderIndices(v: number);
    /** @type {number} Indices output during last call to Render() = number of triangles * 3 */
    get MetricsRenderIndices(): number;
    set MetricsRenderWindows(v: number);
    /** @type {number} Number of visible windows */
    get MetricsRenderWindows(): number;
    set MetricsActiveWindows(v: number);
    /** @type {number} Number of active windows */
    get MetricsActiveWindows(): number;
    set MouseDelta(v: ImVec2);
    /** @type {ImVec2} Mouse delta. Note that this is zero if either current or previous position are invalid (-FLT_MAX,-FLT_MAX), so a disappearing\/reappearing mouse won't have a huge delta. */
    get MouseDelta(): ImVec2;
    set Ctx(v: ImGuiContext);
    /** @type {ImGuiContext} Parent UI context (needs to be set explicitly by parent). */
    get Ctx(): ImGuiContext;
    set MousePos(v: ImVec2);
    /** @type {ImVec2} Mouse position, in pixels. Set to ImVec2(-FLT_MAX, -FLT_MAX) if mouse is unavailable (on another screen, etc.) */
    get MousePos(): ImVec2;
    set MouseWheel(v: number);
    /** @type {number} Mouse wheel Vertical: 1 unit scrolls about 5 lines text. >0 scrolls Up, <0 scrolls Down. Hold SHIFT to turn vertical scroll into horizontal scroll. */
    get MouseWheel(): number;
    set MouseWheelH(v: number);
    /** @type {number} Mouse wheel Horizontal. >0 scrolls Left, <0 scrolls Right. Most users don't have a mouse with a horizontal wheel, may not be filled by all backends. */
    get MouseWheelH(): number;
    set MouseSource(v: ImGuiMouseSource);
    /** @type {ImGuiMouseSource} Mouse actual input peripheral (Mouse\/TouchScreen\/Pen). */
    get MouseSource(): ImGuiMouseSource;
    set MouseHoveredViewport(v: ImGuiID);
    /** @type {ImGuiID} (Optional) Modify using io.AddMouseViewportEvent(). With multi-viewports: viewport the OS mouse is hovering. If possible _IGNORING_ viewports with the ImGuiViewportFlags_NoInputs flag is much better (few backends can handle that). Set io.BackendFlags |= ImGuiBackendFlags_HasMouseHoveredViewport if you can provide this info. If you don't imgui will infer the value using the rectangles and last focused time of the viewports it knows about (ignoring other OS windows). */
    get MouseHoveredViewport(): ImGuiID;
    set KeyCtrl(v: boolean);
    /** @type {boolean} Keyboard modifier down: Control */
    get KeyCtrl(): boolean;
    set KeyShift(v: boolean);
    /** @type {boolean} Keyboard modifier down: Shift */
    get KeyShift(): boolean;
    set KeyAlt(v: boolean);
    /** @type {boolean} Keyboard modifier down: Alt */
    get KeyAlt(): boolean;
    set KeySuper(v: boolean);
    /** @type {boolean} Keyboard modifier down: Cmd\/Super\/Windows */
    get KeySuper(): boolean;
    set KeyMods(v: ImGuiKeyChord);
    /** @type {ImGuiKeyChord} Key mods flags (any of ImGuiMod_Ctrl\/ImGuiMod_Shift\/ImGuiMod_Alt\/ImGuiMod_Super flags, same as io.KeyCtrl\/KeyShift\/KeyAlt\/KeySuper but merged into flags. Read-only, updated by NewFrame() */
    get KeyMods(): ImGuiKeyChord;
    set WantCaptureMouseUnlessPopupClose(v: boolean);
    /** @type {boolean} Alternative to WantCaptureMouse: (WantCaptureMouse == true && WantCaptureMouseUnlessPopupClose == false) when a click over void is expected to close a popup. */
    get WantCaptureMouseUnlessPopupClose(): boolean;
    set MousePosPrev(v: ImVec2);
    /** @type {ImVec2} Previous mouse position (note that MouseDelta is not necessary == MousePos-MousePosPrev, in case either position is invalid) */
    get MousePosPrev(): ImVec2;
    /**
     * [Auto] Queue a new key down\/up event. Key should be "translated" (as in, generally ImGuiKey_A matches the key end-user would use to emit an 'A' character)
     * @param {ImGuiKey} key
     * @param {boolean} down
     * @returns {void}
     */
    AddKeyEvent(key: ImGuiKey, down: boolean): void;
    /**
     * [Auto] Queue a new key down\/up event for analog values (e.g. ImGuiKey_Gamepad_ values). Dead-zones should be handled by the backend.
     * @param {ImGuiKey} key
     * @param {boolean} down
     * @param {number} v
     * @returns {void}
     */
    AddKeyAnalogEvent(key: ImGuiKey, down: boolean, v: number): void;
    /**
     * [Auto] Queue a mouse position update. Use -FLT_MAX,-FLT_MAX to signify no mouse (e.g. app not focused and not hovered)
     * @param {number} x
     * @param {number} y
     * @returns {void}
     */
    AddMousePosEvent(x: number, y: number): void;
    /**
     * [Auto] Queue a mouse button change
     * @param {number} button
     * @param {boolean} down
     * @returns {void}
     */
    AddMouseButtonEvent(button: number, down: boolean): void;
    /**
     * [Auto] Queue a mouse wheel update. wheel_y<0: scroll down, wheel_y>0: scroll up, wheel_x<0: scroll right, wheel_x>0: scroll left.
     * @param {number} wheel_x
     * @param {number} wheel_y
     * @returns {void}
     */
    AddMouseWheelEvent(wheel_x: number, wheel_y: number): void;
    /**
     * [Auto] Queue a mouse source change (Mouse\/TouchScreen\/Pen)
     * @param {ImGuiMouseSource} source
     * @returns {void}
     */
    AddMouseSourceEvent(source: ImGuiMouseSource): void;
    /**
     * [Auto] Queue a mouse hovered viewport. Requires backend to set ImGuiBackendFlags_HasMouseHoveredViewport to call this (for multi-viewport support).
     * @param {ImGuiID} id
     * @returns {void}
     */
    AddMouseViewportEvent(id: ImGuiID): void;
    /**
     * [Auto] Queue a gain\/loss of focus for the application (generally based on OS\/platform focus of your window)
     * @param {boolean} focused
     * @returns {void}
     */
    AddFocusEvent(focused: boolean): void;
    /**
     * [Auto] Queue a new character input
     * @param {number} c
     * @returns {void}
     */
    AddInputCharacter(c: number): void;
    /**
     * [Auto] Queue a new character input from a UTF-16 character, it can be a surrogate
     * @param {ImWchar16} c
     * @returns {void}
     */
    AddInputCharacterUTF16(c: ImWchar16): void;
    /**
     * [Auto] Queue a new characters input from a UTF-8 string
     * @param {string} str
     * @returns {void}
     */
    AddInputCharactersUTF8(str: string): void;
    /**
     * [Auto] Implied native_legacy_index = -1
     * @param {ImGuiKey} key
     * @param {number} native_keycode
     * @param {number} native_scancode
     * @returns {void}
     */
    SetKeyEventNativeData(key: ImGuiKey, native_keycode: number, native_scancode: number): void;
    /**
     * [Auto] Set master flag for accepting key\/mouse\/text events (default to true). Useful if you have native dialog boxes that are interrupting your application loop\/refresh, and you want to disable events being queued while your app is frozen.
     * @param {boolean} accepting_events
     * @returns {void}
     */
    SetAppAcceptingEvents(accepting_events: boolean): void;
    /**
     * [Auto] Clear all incoming events.
     * @returns {void}
     */
    ClearEventsQueue(): void;
    /**
     * [Auto] Clear current keyboard\/gamepad state + current frame text input buffer. Equivalent to releasing all keys\/buttons.
     * @returns {void}
     */
    ClearInputKeys(): void;
    /**
     * [Auto] Clear current mouse state.
     * @returns {void}
     */
    ClearInputMouse(): void;
}
/** [Auto] Main IO structure returned by BeginMultiSelect()\/EndMultiSelect(). */
export class ImGuiMultiSelectIO extends StructBinding {
    constructor();
}
/** [Auto] Draw command list */
export class ImDrawList extends StructBinding {
    constructor();
}
/** [Auto] All draw data to render a Dear ImGui frame */
export class ImDrawData extends StructBinding {
    constructor();
}
/** [Auto]  */
export class ImFontConfig extends StructBinding {
    constructor();
}
/** [Auto] Load and rasterize multiple TTF\/OTF fonts into a same texture. The font atlas will build a single texture holding: */
export class ImFontAtlas extends StructBinding {
    constructor();
}
/** [Auto] Font runtime data and rendering */
export class ImFont extends StructBinding {
    constructor();
}
export namespace ImGui {
    function CreateContext(shared_font_atlas?: ImFontAtlas): ImGuiContext;
    function DestroyContext(ctx?: ImGuiContext): void;
    function GetCurrentContext(): ImGuiContext;
    function SetCurrentContext(ctx: ImGuiContext): void;
    function GetIO(): ImGuiIO;
    function GetPlatformIO(): ImGuiPlatformIO;
    function GetStyle(): ImGuiStyle;
    function NewFrame(): void;
    function EndFrame(): void;
    function Render(): void;
    function GetDrawData(): ImDrawData;
    function ShowDemoWindow(p_open?: bool): void;
    function ShowMetricsWindow(p_open?: bool): void;
    function ShowDebugLogWindow(p_open?: bool): void;
    function ShowIDStackToolWindow(p_open?: bool): void;
    function ShowAboutWindow(p_open?: bool): void;
    function ShowStyleEditor(ref?: ImGuiStyle): void;
    function ShowStyleSelector(label: string): boolean;
    function ShowFontSelector(label: string): void;
    function ShowUserGuide(): void;
    function GetVersion(): string;
    function StyleColorsDark(dst?: ImGuiStyle): void;
    function StyleColorsLight(dst?: ImGuiStyle): void;
    function StyleColorsClassic(dst?: ImGuiStyle): void;
    function Begin(name: string, p_open?: bool, flags?: ImGuiWindowFlags): boolean;
    function End(): void;
    function BeginChild(str_id: string, size?: ImVec2, child_flags?: ImGuiChildFlags, window_flags?: ImGuiWindowFlags): boolean;
    function EndChild(): void;
    function IsWindowAppearing(): boolean;
    function IsWindowCollapsed(): boolean;
    function IsWindowFocused(flags?: ImGuiFocusedFlags): boolean;
    function IsWindowHovered(flags?: ImGuiHoveredFlags): boolean;
    function GetWindowDrawList(): ImDrawList;
    function GetWindowDpiScale(): number;
    function GetWindowPos(): ImVec2;
    function GetWindowSize(): ImVec2;
    function GetWindowWidth(): number;
    function GetWindowHeight(): number;
    function GetWindowViewport(): ImGuiViewport;
    function SetNextWindowPos(pos: ImVec2, cond?: ImGuiCond, pivot?: ImVec2): void;
    function SetNextWindowSize(size: ImVec2, cond?: ImGuiCond): void;
    function SetNextWindowContentSize(size: ImVec2): void;
    function SetNextWindowCollapsed(collapsed: boolean, cond?: ImGuiCond): void;
    function SetNextWindowFocus(): void;
    function SetNextWindowScroll(scroll: ImVec2): void;
    function SetNextWindowBgAlpha(alpha: number): void;
    function SetNextWindowViewport(viewport_id: ImGuiID): void;
    function SetWindowPos(pos: ImVec2, cond?: ImGuiCond): void;
    function SetWindowSize(size: ImVec2, cond?: ImGuiCond): void;
    function SetWindowCollapsed(collapsed: boolean, cond?: ImGuiCond): void;
    function SetWindowFocus(): void;
    function SetWindowFontScale(scale: number): void;
    function GetScrollX(): number;
    function GetScrollY(): number;
    function SetScrollX(scroll_x: number): void;
    function SetScrollY(scroll_y: number): void;
    function GetScrollMaxX(): number;
    function GetScrollMaxY(): number;
    function SetScrollHereX(center_x_ratio?: number): void;
    function SetScrollHereY(center_y_ratio?: number): void;
    function SetScrollFromPosX(local_x: number, center_x_ratio?: number): void;
    function SetScrollFromPosY(local_y: number, center_y_ratio?: number): void;
    function PushFont(font: ImFont): void;
    function PopFont(): void;
    function PushStyleColor(idx: ImGuiCol, col: ImU32): void;
    function PopStyleColor(count?: number): void;
    function PushStyleVar(idx: ImGuiStyleVar, val: number): void;
    function PushStyleVarX(idx: ImGuiStyleVar, val_x: number): void;
    function PushStyleVarY(idx: ImGuiStyleVar, val_y: number): void;
    function PopStyleVar(count?: number): void;
    function PushItemFlag(option: ImGuiItemFlags, enabled: boolean): void;
    function PopItemFlag(): void;
    function PushItemWidth(item_width: number): void;
    function PopItemWidth(): void;
    function SetNextItemWidth(item_width: number): void;
    function CalcItemWidth(): number;
    function PushTextWrapPos(wrap_local_pos_x?: number): void;
    function PopTextWrapPos(): void;
    function GetFont(): ImFont;
    function GetFontSize(): number;
    function GetFontTexUvWhitePixel(): ImVec2;
    function GetStyleColorVec4(idx: ImGuiCol): ImVec4;
    function GetCursorScreenPos(): ImVec2;
    function SetCursorScreenPos(pos: ImVec2): void;
    function GetContentRegionAvail(): ImVec2;
    function GetCursorPos(): ImVec2;
    function GetCursorPosX(): number;
    function GetCursorPosY(): number;
    function SetCursorPos(local_pos: ImVec2): void;
    function SetCursorPosX(local_x: number): void;
    function SetCursorPosY(local_y: number): void;
    function GetCursorStartPos(): ImVec2;
    function Separator(): void;
    function SameLine(offset_from_start_x?: number, spacing?: number): void;
    function NewLine(): void;
    function Spacing(): void;
    function Dummy(size: ImVec2): void;
    function Indent(indent_w?: number): void;
    function Unindent(indent_w?: number): void;
    function BeginGroup(): void;
    function EndGroup(): void;
    function AlignTextToFramePadding(): void;
    function GetTextLineHeight(): number;
    function GetTextLineHeightWithSpacing(): number;
    function GetFrameHeight(): number;
    function GetFrameHeightWithSpacing(): number;
    function PushID(str_id: string): void;
    function PopID(): void;
    function GetID(str_id: string): ImGuiID;
    function Text(fmt: string): void;
    function TextColored(col: ImVec4, fmt: string): void;
    function TextDisabled(fmt: string): void;
    function TextWrapped(fmt: string): void;
    function LabelText(label: string, fmt: string): void;
    function BulletText(fmt: string): void;
    function SeparatorText(label: string): void;
    function Button(label: string, size?: ImVec2): boolean;
    function SmallButton(label: string): boolean;
    function InvisibleButton(str_id: string, size: ImVec2, flags?: ImGuiButtonFlags): boolean;
    function ArrowButton(str_id: string, dir: ImGuiDir): boolean;
    function Checkbox(label: string, v: bool): boolean;
    function RadioButton(label: string, active: boolean): boolean;
    function ProgressBar(fraction: number, size_arg?: ImVec2, overlay?: string): void;
    function Bullet(): void;
    function TextLink(label: string): boolean;
    function TextLinkOpenURL(label: string, url?: string): void;
    function BeginCombo(label: string, preview_value: string, flags?: ImGuiComboFlags): boolean;
    function EndCombo(): void;
    function DragFloat(label: string, v: float, v_speed?: number, v_min?: number, v_max?: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    function DragFloat2(label: string, v: float[2], v_speed?: number, v_min?: number, v_max?: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    function DragFloat3(label: string, v: float[3], v_speed?: number, v_min?: number, v_max?: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    function DragFloat4(label: string, v: float[4], v_speed?: number, v_min?: number, v_max?: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    function DragFloatRange2(label: string, v_current_min: float, v_current_max: float, v_speed?: number, v_min?: number, v_max?: number, format?: string, format_max?: string, flags?: ImGuiSliderFlags): boolean;
    function DragInt2(label: string, v: int[2], v_speed?: number, v_min?: number, v_max?: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    function DragInt3(label: string, v: int[3], v_speed?: number, v_min?: number, v_max?: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    function DragInt4(label: string, v: int[4], v_speed?: number, v_min?: number, v_max?: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    function DragIntRange2(label: string, v_current_min: int, v_current_max: int, v_speed?: number, v_min?: number, v_max?: number, format?: string, format_max?: string, flags?: ImGuiSliderFlags): boolean;
    function SliderFloat(label: string, v: float, v_min: number, v_max: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    function SliderFloat2(label: string, v: float[2], v_min: number, v_max: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    function SliderFloat3(label: string, v: float[3], v_min: number, v_max: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    function SliderFloat4(label: string, v: float[4], v_min: number, v_max: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    function SliderAngle(label: string, v_rad: float, v_degrees_min?: number, v_degrees_max?: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    function SliderInt2(label: string, v: int[2], v_min: number, v_max: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    function SliderInt3(label: string, v: int[3], v_min: number, v_max: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    function SliderInt4(label: string, v: int[4], v_min: number, v_max: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    function VSliderFloat(label: string, size: ImVec2, v: float, v_min: number, v_max: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    function InputText(label: string, buf: char, buf_size: size_t, flags?: ImGuiInputTextFlags, callback?: ImGuiInputTextCallback, user_data?: void): boolean;
    function InputTextMultiline(label: string, buf: char, buf_size: size_t, size?: ImVec2, flags?: ImGuiInputTextFlags, callback?: ImGuiInputTextCallback, user_data?: void): boolean;
    function InputTextWithHint(label: string, hint: string, buf: char, buf_size: size_t, flags?: ImGuiInputTextFlags, callback?: ImGuiInputTextCallback, user_data?: void): boolean;
    function InputFloat(label: string, v: float, step?: number, step_fast?: number, format?: string, flags?: ImGuiInputTextFlags): boolean;
    function InputFloat2(label: string, v: float[2], format?: string, flags?: ImGuiInputTextFlags): boolean;
    function InputFloat3(label: string, v: float[3], format?: string, flags?: ImGuiInputTextFlags): boolean;
    function InputFloat4(label: string, v: float[4], format?: string, flags?: ImGuiInputTextFlags): boolean;
    function InputInt2(label: string, v: int[2], flags?: ImGuiInputTextFlags): boolean;
    function InputInt3(label: string, v: int[3], flags?: ImGuiInputTextFlags): boolean;
    function InputInt4(label: string, v: int[4], flags?: ImGuiInputTextFlags): boolean;
    function InputDouble(label: string, v: double, step?: number, step_fast?: number, format?: string, flags?: ImGuiInputTextFlags): boolean;
    function ColorEdit3(label: string, col: float[3], flags?: ImGuiColorEditFlags): boolean;
    function ColorEdit4(label: string, col: float[4], flags?: ImGuiColorEditFlags): boolean;
    function ColorPicker3(label: string, col: float[3], flags?: ImGuiColorEditFlags): boolean;
    function ColorPicker4(label: string, col: float[4], flags?: ImGuiColorEditFlags, ref_col?: float): boolean;
    function ColorButton(desc_id: string, col: ImVec4, flags?: ImGuiColorEditFlags, size?: ImVec2): boolean;
    function SetColorEditOptions(flags: ImGuiColorEditFlags): void;
    function TreeNode(label: string, flags?: ImGuiTreeNodeFlags): boolean;
    function TreePush(str_id: string): void;
    function TreePop(): void;
    function GetTreeNodeToLabelSpacing(): number;
    function CollapsingHeader(label: string, flags?: ImGuiTreeNodeFlags): boolean;
    function SetNextItemOpen(is_open: boolean, cond?: ImGuiCond): void;
    function Selectable(label: string, selected?: boolean, flags?: ImGuiSelectableFlags, size?: ImVec2): boolean;
    function BeginMultiSelect(flags: ImGuiMultiSelectFlags, selection_size?: number, items_count?: number): ImGuiMultiSelectIO;
    function EndMultiSelect(): ImGuiMultiSelectIO;
    function SetNextItemSelectionUserData(selection_user_data: ImGuiSelectionUserData): void;
    function IsItemToggledSelection(): boolean;
    function BeginListBox(label: string, size?: ImVec2): boolean;
    function EndListBox(): void;
    function PlotLines(label: string, values: float, values_count: number, values_offset?: number, overlay_text?: string, scale_min?: number, scale_max?: number, graph_size?: ImVec2): void;
    function PlotHistogram(label: string, values: float, values_count: number, values_offset?: number, overlay_text?: string, scale_min?: number, scale_max?: number, graph_size?: ImVec2): void;
    function BeginMenuBar(): boolean;
    function EndMenuBar(): void;
    function BeginMainMenuBar(): boolean;
    function EndMainMenuBar(): void;
    function BeginMenu(label: string, enabled?: boolean): boolean;
    function EndMenu(): void;
    function MenuItem(label: string, shortcut?: string, selected?: boolean, enabled?: boolean): boolean;
    function BeginTooltip(): boolean;
    function EndTooltip(): void;
    function SetTooltip(fmt: string): void;
    function BeginItemTooltip(): boolean;
    function SetItemTooltip(fmt: string): void;
    function BeginPopup(str_id: string, flags?: ImGuiWindowFlags): boolean;
    function BeginPopupModal(name: string, p_open?: bool, flags?: ImGuiWindowFlags): boolean;
    function EndPopup(): void;
    function OpenPopup(str_id: string, popup_flags?: ImGuiPopupFlags): void;
    function OpenPopupOnItemClick(str_id?: string, popup_flags?: ImGuiPopupFlags): void;
    function CloseCurrentPopup(): void;
    function BeginPopupContextItem(str_id?: string, popup_flags?: ImGuiPopupFlags): boolean;
    function BeginPopupContextWindow(str_id?: string, popup_flags?: ImGuiPopupFlags): boolean;
    function BeginPopupContextVoid(str_id?: string, popup_flags?: ImGuiPopupFlags): boolean;
    function IsPopupOpen(str_id: string, flags?: ImGuiPopupFlags): boolean;
    function BeginTable(str_id: string, columns: number, flags?: ImGuiTableFlags, outer_size?: ImVec2, inner_width?: number): boolean;
    function EndTable(): void;
    function TableNextRow(row_flags?: ImGuiTableRowFlags, min_row_height?: number): void;
    function TableNextColumn(): boolean;
    function TableSetColumnIndex(column_n: number): boolean;
    function TableSetupColumn(label: string, flags?: ImGuiTableColumnFlags, init_width_or_weight?: number, user_id?: ImGuiID): void;
    function TableSetupScrollFreeze(cols: number, rows: number): void;
    function TableHeader(label: string): void;
    function TableHeadersRow(): void;
    function TableAngledHeadersRow(): void;
    function TableGetSortSpecs(): ImGuiTableSortSpecs;
    function TableGetColumnCount(): number;
    function TableGetColumnIndex(): number;
    function TableGetRowIndex(): number;
    function TableGetColumnName(column_n?: number): string;
    function TableGetColumnFlags(column_n?: number): ImGuiTableColumnFlags;
    function TableSetColumnEnabled(column_n: number, v: boolean): void;
    function TableGetHoveredColumn(): number;
    function TableSetBgColor(target: ImGuiTableBgTarget, color: ImU32, column_n?: number): void;
    function Columns(count?: number, id?: string, borders?: boolean): void;
    function NextColumn(): void;
    function GetColumnIndex(): number;
    function GetColumnWidth(column_index?: number): number;
    function SetColumnWidth(column_index: number, width: number): void;
    function GetColumnOffset(column_index?: number): number;
    function SetColumnOffset(column_index: number, offset_x: number): void;
    function GetColumnsCount(): number;
    function BeginTabBar(str_id: string, flags?: ImGuiTabBarFlags): boolean;
    function EndTabBar(): void;
    function BeginTabItem(label: string, p_open?: bool, flags?: ImGuiTabItemFlags): boolean;
    function EndTabItem(): void;
    function TabItemButton(label: string, flags?: ImGuiTabItemFlags): boolean;
    function SetTabItemClosed(tab_or_docked_window_label: string): void;
    function DockSpace(dockspace_id: ImGuiID, size?: ImVec2, flags?: ImGuiDockNodeFlags, window_class?: ImGuiWindowClass): ImGuiID;
    function DockSpaceOverViewport(dockspace_id?: ImGuiID, viewport?: ImGuiViewport, flags?: ImGuiDockNodeFlags, window_class?: ImGuiWindowClass): ImGuiID;
    function SetNextWindowClass(window_class: ImGuiWindowClass): void;
    function IsWindowDocked(): boolean;
    function BeginDisabled(disabled?: boolean): void;
    function EndDisabled(): void;
    function PushClipRect(clip_rect_min: ImVec2, clip_rect_max: ImVec2, intersect_with_current_clip_rect: boolean): void;
    function PopClipRect(): void;
    function SetItemDefaultFocus(): void;
    function SetKeyboardFocusHere(offset?: number): void;
    function SetNavCursorVisible(visible: boolean): void;
    function SetNextItemAllowOverlap(): void;
    function IsItemHovered(flags?: ImGuiHoveredFlags): boolean;
    function IsItemActive(): boolean;
    function IsItemFocused(): boolean;
    function IsItemClicked(mouse_button?: ImGuiMouseButton): boolean;
    function IsItemVisible(): boolean;
    function IsItemEdited(): boolean;
    function IsItemActivated(): boolean;
    function IsItemDeactivated(): boolean;
    function IsItemDeactivatedAfterEdit(): boolean;
    function IsItemToggledOpen(): boolean;
    function IsAnyItemHovered(): boolean;
    function IsAnyItemActive(): boolean;
    function IsAnyItemFocused(): boolean;
    function GetItemRectMin(): ImVec2;
    function GetItemRectMax(): ImVec2;
    function GetItemRectSize(): ImVec2;
    function GetMainViewport(): ImGuiViewport;
    function GetBackgroundDrawList(viewport?: ImGuiViewport): ImDrawList;
    function GetForegroundDrawList(viewport?: ImGuiViewport): ImDrawList;
    function IsRectVisibleBySize(size: ImVec2): boolean;
    function IsRectVisible(rect_min: ImVec2, rect_max: ImVec2): boolean;
    function GetTime(): number;
    function GetFrameCount(): number;
    function GetDrawListSharedData(): ImDrawListSharedData;
    function GetStyleColorName(idx: ImGuiCol): string;
    function SetStateStorage(storage: ImGuiStorage): void;
    function GetStateStorage(): ImGuiStorage;
    function CalcTextSize(text: string, text_end?: string, hide_text_after_double_hash?: boolean, wrap_width?: number): ImVec2;
    function IsKeyDown(key: ImGuiKey): boolean;
    function IsKeyPressed(key: ImGuiKey, repeat?: boolean): boolean;
    function IsKeyReleased(key: ImGuiKey): boolean;
    function IsKeyChordPressed(key_chord: ImGuiKeyChord): boolean;
    function GetKeyPressedAmount(key: ImGuiKey, repeat_delay: number, rate: number): number;
    function GetKeyName(key: ImGuiKey): string;
    function SetNextFrameWantCaptureKeyboard(want_capture_keyboard: boolean): void;
    function Shortcut(key_chord: ImGuiKeyChord, flags?: ImGuiInputFlags): boolean;
    function SetNextItemShortcut(key_chord: ImGuiKeyChord, flags?: ImGuiInputFlags): void;
    function SetItemKeyOwner(key: ImGuiKey): void;
    function IsMouseDown(button: ImGuiMouseButton): boolean;
    function IsMouseClicked(button: ImGuiMouseButton, repeat?: boolean): boolean;
    function IsMouseReleased(button: ImGuiMouseButton): boolean;
    function IsMouseDoubleClicked(button: ImGuiMouseButton): boolean;
    function GetMouseClickedCount(button: ImGuiMouseButton): number;
    function IsMouseHoveringRect(r_min: ImVec2, r_max: ImVec2, clip?: boolean): boolean;
    function IsMousePosValid(mouse_pos?: ImVec2): boolean;
    function IsAnyMouseDown(): boolean;
    function GetMousePos(): ImVec2;
    function GetMousePosOnOpeningCurrentPopup(): ImVec2;
    function IsMouseDragging(button: ImGuiMouseButton, lock_threshold?: number): boolean;
    function GetMouseDragDelta(button?: ImGuiMouseButton, lock_threshold?: number): ImVec2;
    function ResetMouseDragDelta(button?: ImGuiMouseButton): void;
    function GetMouseCursor(): ImGuiMouseCursor;
    function SetMouseCursor(cursor_type: ImGuiMouseCursor): void;
    function SetNextFrameWantCaptureMouse(want_capture_mouse: boolean): void;
    function GetClipboardText(): string;
    function SetClipboardText(text: string): void;
    function UpdatePlatformWindows(): void;
}
export namespace ImGuiImplOpenGL3 {
    export function Init(): boolean;
    export function Shutdown(): void;
    export function NewFrame_1(): void;
    export { NewFrame_1 as NewFrame };
    export function RenderDrawData(draw_data: ImDrawData): void;
}
export namespace ImGuiImplWeb {
    export function Init_1(canvas: HTMLCanvasElement): Promise<void>;
    export { Init_1 as Init };
    export function SetupIO(canvas: HTMLCanvasElement): void;
    export function BeginRender(): void;
    export function EndRender(): void;
    export function LoadFont(font: string): Promise<void>;
    export function LoadImage(image: HTMLImageElement): ImTextureID;
}
/**
 * [Auto]
 */
export type ImGuiID = number;
/**
 * [Auto]
 */
export type ImS8 = number;
/**
 * [Auto]
 */
export type ImU8 = number;
/**
 * [Auto]
 */
export type ImS16 = number;
/**
 * [Auto]
 */
export type ImU16 = number;
/**
 * [Auto]
 */
export type ImS32 = number;
/**
 * [Auto]
 */
export type ImU32 = number;
/**
 * [Auto]
 */
export type ImS64 = BigInt;
/**
 * [Auto]
 */
export type ImU64 = BigInt;
/**
 * [Auto]
 */
export type ImGuiDir = number;
/**
 * [Auto]
 */
export type ImGuiKey = number;
/**
 * [Auto]
 */
export type ImGuiMouseSource = number;
/**
 * [Auto]
 */
export type ImGuiSortDirection = number;
/**
 * [Auto]
 */
export type ImGuiCol = number;
/**
 * [Auto]
 */
export type ImGuiCond = number;
/**
 * [Auto]
 */
export type ImGuiDataType = number;
/**
 * [Auto]
 */
export type ImGuiMouseButton = number;
/**
 * [Auto]
 */
export type ImGuiMouseCursor = number;
/**
 * [Auto]
 */
export type ImGuiStyleVar = number;
/**
 * [Auto]
 */
export type ImGuiTableBgTarget = number;
/**
 * [Auto]
 */
export type ImDrawFlags = number;
/**
 * [Auto]
 */
export type ImDrawListFlags = number;
/**
 * [Auto]
 */
export type ImFontAtlasFlags = number;
/**
 * [Auto]
 */
export type ImGuiBackendFlags = number;
/**
 * [Auto]
 */
export type ImGuiButtonFlags = number;
/**
 * [Auto]
 */
export type ImGuiChildFlags = number;
/**
 * [Auto]
 */
export type ImGuiColorEditFlags = number;
/**
 * [Auto]
 */
export type ImGuiConfigFlags = number;
/**
 * [Auto]
 */
export type ImGuiComboFlags = number;
/**
 * [Auto]
 */
export type ImGuiDockNodeFlags = number;
/**
 * [Auto]
 */
export type ImGuiDragDropFlags = number;
/**
 * [Auto]
 */
export type ImGuiFocusedFlags = number;
/**
 * [Auto]
 */
export type ImGuiHoveredFlags = number;
/**
 * [Auto]
 */
export type ImGuiInputFlags = number;
/**
 * [Auto]
 */
export type ImGuiInputTextFlags = number;
/**
 * [Auto]
 */
export type ImGuiItemFlags = number;
/**
 * [Auto]
 */
export type ImGuiKeyChord = number;
/**
 * [Auto]
 */
export type ImGuiPopupFlags = number;
/**
 * [Auto]
 */
export type ImGuiMultiSelectFlags = number;
/**
 * [Auto]
 */
export type ImGuiSelectableFlags = number;
/**
 * [Auto]
 */
export type ImGuiSliderFlags = number;
/**
 * [Auto]
 */
export type ImGuiTabBarFlags = number;
/**
 * [Auto]
 */
export type ImGuiTabItemFlags = number;
/**
 * [Auto]
 */
export type ImGuiTableFlags = number;
/**
 * [Auto]
 */
export type ImGuiTableColumnFlags = number;
/**
 * [Auto]
 */
export type ImGuiTableRowFlags = number;
/**
 * [Auto]
 */
export type ImGuiTreeNodeFlags = number;
/**
 * [Auto]
 */
export type ImGuiViewportFlags = number;
/**
 * [Auto]
 */
export type ImGuiWindowFlags = number;
/**
 * [Auto]
 */
export type ImTextureID = BigInt;
/**
 * [Auto]
 */
export type ImDrawIdx = number;
/**
 * [Auto]
 */
export type ImWchar32 = number;
/**
 * [Auto]
 */
export type ImWchar16 = number;
/**
 * [Auto]
 */
export type ImWchar = number;
/**
 * [Auto]
 */
export type ImGuiSelectionUserData = BigInt;
/** A class that wraps a reference to an ImGui struct. */
declare class StructBinding {
    /**
     * Wraps a reference to a C++ object with a new StructBinding instance.
     * @param {Object} ref
     * @returns {StructBinding}
     */
    static wrap(ref: any): StructBinding;
    /**
     * Constructs a new C++ object from the WASM module export.
     * @param {string} name
     */
    constructor(name: string);
    /**
     * Accesses the underlying C++ object.
     * @returns {Object}
     */
    unwrap(): any;
    #private;
}
export {};
