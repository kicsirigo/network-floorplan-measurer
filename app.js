const PDF_WORKER_URL = './vendor/pdf.worker.min.mjs';
if (window.pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = PDF_WORKER_URL;
}

const i18n = {
        en: {
            themeDark: "Dark", themeLight: "Light",
            titleMenu: "Menu", titleTheme: "Toggle Theme", titleLayers: "Toggle Cable/Device Visibility", titleGrid: "Toggle Snap to Grid",
            titleZoomIn: "Zoom In", titleZoomOut: "Zoom Out", titleZoomReset: "Reset View", titleClose: "Close",
            btnLayers: "Layers", btnGrid: "Grid",
            swDeviceName: "Name:", swDeviceNamePh: "Device name", swPorts: "Ports:",
            swEditorPlaceholder: "Click a port to configure it.",
            swPortTitle: "Port {0}",
            swPortLabel: "Port label", swPortLabelPh: "e.g. PC-01",
            swVlan: "VLAN", swMode: "Mode",
            swModeAccess: "Access", swModeTrunk: "Trunk", swModeUplink: "Uplink",
            swConnectedTo: "Connected to", swConnPh: "e.g. PP-1 port 3",
            swNotes: "Notes", swNotesPh: "optional notes",
            swClearPort: "Clear Port", swSaveClose: "Save & Close",
            swRackInfo: "This is a rack cabinet. Switch to Drag mode (D) and drag any edge or corner of the rack on the map to resize it.",
            btnScale: "Scale", btnSetScale: "Confirm", btnDrag: "Drag", btnSelect: "Select", btnMeasure: "Draw Cables", btnWireway: "Wire-way",
            btnNewCable: "New Cable", btnNewWireway: "New Wire-way", btnConnect: "Connect", btnDelete: "Delete", selectPort: "Select Port", btnUndo: "Undo", btnClear: "Clear All", btnExport: "Export PDF", btnExportPlan: "Save .plan",
            btnAutosave: "Auto-save", titleAutosave: "Toggle Auto-save to Browser Storage",
            btnWipeStorage: "Wipe Saved", titleWipeStorage: "Wipe saved browser data and reset floorplan",
            confirmWipeStorage: "Remove the floorplan and all saved data from browser storage?",
            sideTitle: "Devices",
            statScaleInvalid: "Invalid value. Try again!",
            promptMeter: "How many meters is this line in reality? (e.g. 12.34)",
            confirmClear: "Are you sure you want to clear all data (cables & devices)?",
            alertNoImgPlan: "This plan file does not contain a floorplan image. Please upload the corresponding floorplan image (PDF or Image) now.",
            alertJsonErr: "Error loading JSON data",
            alertFileTooLarge: "File is too large (max 20 MB).",
            alertUnsupportedFile: "Unsupported file type. Use PNG, JPEG, WebP, GIF, BMP, PDF, or .plan/.json.",
            alertInvalidImg: "Invalid or disallowed floorplan image source in plan file.",
            alertPdfErr: "Failed to render PDF floorplan.",
            alertPdfFileProto: "PDF loading requires opening the app via a local HTTP server (e.g. python3 -m http.server) instead of file://.",
            textActive: "Active (#{0})", textTotal: "Total",
            ctxRename: "Rename", ctxDelete: "Delete Device", ctxDeletePoint: "Delete Point",
            promptRename: "Enter a new name for this device:"
        },
        hu: {
            themeDark: "Sötét", themeLight: "Világos",
            titleMenu: "Menü", titleTheme: "Téma váltása", titleLayers: "Rétegek elrejtése/mutatása", titleGrid: "Rácshoz illesztés",
            titleZoomIn: "Nagyítás", titleZoomOut: "Kicsinyítés", titleZoomReset: "Nézet visszaállítása", titleClose: "Bezárás",
            btnLayers: "Rétegek", btnGrid: "Rács",
            swDeviceName: "Név:", swDeviceNamePh: "Eszköz neve", swPorts: "Portok:",
            swEditorPlaceholder: "Kattints egy portra a konfiguráláshoz.",
            swPortTitle: "Port {0}",
            swPortLabel: "Port címke", swPortLabelPh: "pl. PC-01",
            swVlan: "VLAN", swMode: "Mód",
            swModeAccess: "Access", swModeTrunk: "Trunk", swModeUplink: "Uplink",
            swConnectedTo: "Csatlakoztatva", swConnPh: "pl. PP-1 port 3",
            swNotes: "Megjegyzés", swNotesPh: "opcionális megjegyzés",
            swClearPort: "Port törlése", swSaveClose: "Mentés és bezárás",
            swRackInfo: "Ez egy rack szekrény. Válts Mozgatás módba (D), és húzd a szekrény bármelyik szélét vagy sarkát az átméretezéshez.",
            btnScale: "Méretarány", btnSetScale: "Véglegesítés", btnDrag: "Mozgatás", btnSelect: "Kijelölés", btnMeasure: "Kábelezés", btnWireway: "Nyomvonal",
            btnNewCable: "Új kábel", btnNewWireway: "Új nyomvonal", btnConnect: "Összekötés", btnDelete: "Törlés", selectPort: "Válassz Portot", btnUndo: "Vissza", btnClear: "Minden törlése", btnExport: "PDF Export", btnExportPlan: "Mentés .plan",
            btnAutosave: "Automatikus mentés", titleAutosave: "Automatikus böngésző-mentés be/ki",
            btnWipeStorage: "Mentés törlése", titleWipeStorage: "Böngészőben tárolt adatok és alaprajz teljes törlése",
            confirmWipeStorage: "Törlöd az alaprajzot és az összes böngészőben tárolt adatot?",
            sideTitle: "Eszközök",
            statScaleInvalid: "Érvénytelen érték. Próbáld újra!",
            promptMeter: "Hány méter ez a szakasz a valóságban? (Pl. 12.34)",
            confirmClear: "Biztosan törölsz minden kábelt és eszközt?",
            alertNoImgPlan: "Ez a tervfájl nem tartalmaz alaprajz képet. Kérlek töltsd fel a hozzá tartozó alaprajzot (PDF vagy kép).",
            alertJsonErr: "Hiba a JSON adat betöltésekor",
            alertFileTooLarge: "A fájl túl nagy (max. 20 MB).",
            alertUnsupportedFile: "Nem támogatott fájltípus. Használj PNG, JPEG, WebP, GIF, BMP, PDF vagy .plan/.json fájlt.",
            alertInvalidImg: "Érvénytelen vagy nem engedélyezett alaprajz képforrás a tervfájlban.",
            alertPdfErr: "Nem sikerült megjeleníteni a PDF alaprajzot.",
            alertPdfFileProto: "A PDF betöltéséhez nyisd meg az alkalmazást helyi HTTP szerverről (pl. python3 -m http.server), ne közvetlenül file://-ról.",
            textActive: "Aktuális (#{0})", textTotal: "Összesen",
            ctxRename: "Átnevezés", ctxDelete: "Eszköz Törlése", ctxDeletePoint: "Pont Törlése",
            promptRename: "Add meg az eszköz új nevét:"
        }
    };

    let lang = 'en';
    let theme = 'light';
    function t(key, arg1 = "") {
        const val = i18n[lang][key];
        return val !== undefined ? val.replace("{0}", arg1) : key;
    }

    const MAX_FILE_BYTES = 20 * 1024 * 1024;
    const MAX_PORT_COUNT = 128;
    const MAX_DEVICES = 1000;
    const MAX_CABLES = 2000;
    const MAX_WIREWAYS = 1000;
    const MAX_POINTS_PER_PATH = 2000;
    const MAX_PDF_CANVAS_DIM = 4096;
    const VALID_DEVICE_TYPES = new Set(['router', 'switch', 'patch', 'ap', 'pc', 'rack']);
    const VALID_PORT_MODES = new Set(['access', 'trunk', 'uplink']);
    const ALLOWED_IMAGE_MIMES = new Set(['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/bmp']);
    const ALLOWED_IMAGE_EXTS = /\.(png|jpe?g|webp|gif|bmp)$/i;
    const SAFE_IMAGE_DATA_URL = /^data:image\/(png|jpeg|jpg|webp|gif|bmp);base64,[A-Za-z0-9+/=\s]+$/i;
    const FORBIDDEN_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

    function genId() {
        return (window.crypto && typeof window.crypto.randomUUID === 'function')
            ? window.crypto.randomUUID()
            : Math.random().toString(36).slice(2, 11);
    }

    function isSafeRasterDataUrl(src) {
        return typeof src === 'string' && src.length <= 25 * 1024 * 1024 && SAFE_IMAGE_DATA_URL.test(src);
    }

    function clampPortCount(val, fallback) {
        const n = parseInt(val, 10);
        if (!Number.isFinite(n) || n < 1) return fallback;
        return Math.min(MAX_PORT_COUNT, n);
    }

    function sanitizePoint(p) {
        if (!p || typeof p !== 'object') return null;
        const x = Number(p.x), y = Number(p.y);
        return (Number.isFinite(x) && Number.isFinite(y)) ? { x, y } : null;
    }

    function sanitizePoints(arr) {
        if (!Array.isArray(arr)) return [];
        const out = [];
        const limit = Math.min(arr.length, MAX_POINTS_PER_PATH);
        for (let i = 0; i < limit; i++) {
            const pt = sanitizePoint(arr[i]);
            if (pt) out.push(pt);
        }
        return out;
    }

    function sanitizePorts(rawPorts) {
        const clean = Object.create(null);
        if (!rawPorts || typeof rawPorts !== 'object' || Array.isArray(rawPorts)) return {};
        const keys = Object.keys(rawPorts);
        const hasZeroIndexed = Object.hasOwn(rawPorts, '0') && rawPorts['0'] !== undefined;
        for (const k of keys) {
            if (FORBIDDEN_KEYS.has(k)) continue;
            const rawNum = parseInt(k, 10);
            if (!Number.isFinite(rawNum)) continue;
            const portNum = hasZeroIndexed ? rawNum + 1 : rawNum;
            if (portNum < 1 || portNum > MAX_PORT_COUNT) continue;
            const src = rawPorts[k];
            if (!src || typeof src !== 'object') continue;
            const entry = {};
            if (typeof src.label === 'string' && src.label.trim()) entry.label = src.label.trim().slice(0, 128);
            const vlan = parseInt(src.vlan, 10);
            if (Number.isFinite(vlan) && vlan >= 1 && vlan <= 4094) entry.vlan = vlan;
            if (typeof src.mode === 'string' && VALID_PORT_MODES.has(src.mode)) entry.mode = src.mode;
            if (typeof src.conn === 'string' && src.conn.trim()) entry.conn = src.conn.trim().slice(0, 128);
            if (typeof src.notes === 'string' && src.notes.trim()) entry.notes = src.notes.trim().slice(0, 256);
            if (Object.keys(entry).length > 0) clean[portNum] = entry;
        }
        return Object.assign({}, clean);
    }

    function sanitizeDevice(d) {
        if (!d || typeof d !== 'object') return null;
        const x = Number(d.x), y = Number(d.y);
        if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
        let type = typeof d.type === 'string' ? d.type : 'pc';
        if (type === 'patchpanel') type = 'patch';
        if (!VALID_DEVICE_TYPES.has(type)) type = 'pc';
        const clean = {
            id: (typeof d.id === 'string' && d.id.trim() && !FORBIDDEN_KEYS.has(d.id.trim())) ? d.id.trim().slice(0, 64) : genId(),
            type,
            x,
            y,
            name: (typeof d.name === 'string' && d.name.trim()) ? d.name.trim().slice(0, 128) : null
        };
        if (d.portCount !== undefined) {
            clean.portCount = clampPortCount(d.portCount, getDefaultPortCount(type));
        }
        if (d.ports && typeof d.ports === 'object') {
            clean.ports = sanitizePorts(d.ports);
        }
        if (type === 'rack') {
            const w = Number(d.width), h = Number(d.height);
            if (Number.isFinite(w)) clean.width = Math.max(30, Math.min(2000, w));
            if (Number.isFinite(h)) clean.height = Math.max(30, Math.min(2000, h));
        }
        return clean;
    }

    function sanitizeCable(c) {
        if (Array.isArray(c)) {
            return { type: 'default', points: sanitizePoints(c) };
        }
        if (!c || typeof c !== 'object') return null;
        const type = (typeof c.type === 'string' && c.type.trim() && !FORBIDDEN_KEYS.has(c.type))
            ? c.type.trim().slice(0, 32)
            : 'default';
        const clean = { type, points: sanitizePoints(c.points) };
        if (typeof c.fromDev === 'string' && typeof c.toDev === 'string') {
            clean.fromDev = c.fromDev.slice(0, 64);
            clean.toDev = c.toDev.slice(0, 64);
            const fp = parseInt(c.fromPort, 10), tp = parseInt(c.toPort, 10);
            if (Number.isFinite(fp) && fp >= 1 && fp <= MAX_PORT_COUNT) clean.fromPort = fp;
            if (Number.isFinite(tp) && tp >= 1 && tp <= MAX_PORT_COUNT) clean.toPort = tp;
        }
        return clean;
    }

    const ICON_MOON = '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>';
    const ICON_SUN = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
    const ICON_EYE = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
    const ICON_EYE_OFF = '<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';

    const btnScale = document.getElementById('btn-scale'), btnSetScale = document.getElementById('btn-set-scale');
    const btnDrag = document.getElementById('btn-drag'), btnSelect = document.getElementById('btn-multi-select');
    const btnMeasure = document.getElementById('btn-measure'), btnNewCable = document.getElementById('btn-new-cable'), btnConnect = document.getElementById('btn-connect'), btnDelete = document.getElementById('btn-delete'), selectCableType = document.getElementById('cable-type-select');
    const btnWireway = document.getElementById('btn-wireway'), btnNewWireway = document.getElementById('btn-new-wireway');
    const CABLE_TYPES = Object.assign(Object.create(null), { 'default': { color: '#f5bde6', name: 'Default' }, 'cat5e': { color: '#8aadf4', name: 'Cat5e' }, 'cat6': { color: '#a6da95', name: 'Cat6' }, 'cat6a': { color: '#c6a0f6', name: 'Cat6a' }, 'fiber': { color: '#f5a97f', name: 'Fiber' }, 'power': { color: '#ed8796', name: 'Power' } });
    const btnUndo = document.getElementById('btn-undo'), btnClear = document.getElementById('btn-clear');
    const btnExport = document.getElementById('btn-export'), btnExportPlan = document.getElementById('btn-export-plan');
    const measurements = document.getElementById('measurements'), canvasContainer = document.getElementById('canvas-container');
    const canvas = document.getElementById('canvas'), ctx = canvas.getContext('2d');
    const contextMenu = document.getElementById('context-menu');

    const deviceColors = Object.assign(Object.create(null), { router: '#c6a0f6', switch: '#8bd5ca', patch: '#f5bde6', ap: '#eed49f', pc: '#8caaee', rack: '#7c7f93' });
    const deviceShortnames = Object.assign(Object.create(null), { router: 'RT', switch: 'SW', patch: 'PP', ap: 'AP', pc: 'PC', rack: 'RACK' });

    const STORAGE_KEY = 'measurer_workspace';
    const STORAGE_IMG_KEY = 'measurer_workspace_img';
    let img = new Image();
    let mode = 'none', connectState = { devA: null, portA: null, points: [] }, scalePoints = [], cables = [{ type: 'cat6', points: [] }], devices = [], actionHistory = [], redoHistory = [];
    const MAX_HISTORY = 100;
    let pendingDragSnapshot = null;
    let modalOpenSnapshot = null;
    let modalDirty = false;
    let autoSaveEnabled = true;
    let autoSaveTimer = null;
    let redrawRafId = null;
    let cachedCanvasBg = '#ccd0da';
    let lastMeasurementsKey = null;
    let wireways = [{ points: [] }];
    let activeCableIndex = 0, activeWirewayIndex = 0, pixelsPerMeter = null;
    let showLayers = true, snapToGrid = false;
    let gridOffsetX = 0, gridOffsetY = 0;

    let cameraX = 0, cameraY = 0, zoom = 1, isPanning = false, panStartX = 0, panStartY = 0;
    let isPanningGrid = false, gridPanStartX = 0, gridPanStartY = 0;
    let draggedPoint = null, activePlaceDevice = null, activeContextMenuTarget = null, hasDragged = false;
    let dragOffsetX = 0, dragOffsetY = 0;
    let lastPinchDistance = null;
    let lastPinchCenter = null;
    let selectedDeviceIds = new Set(), selectionBox = null, selectionStartPos = null, selectedDeviceOrigPositions = Object.create(null), wStartPos = null;
    let pendingPlanData = null;
    let lastMouseWorldPos = null;
    let canvasCssW = 0, canvasCssH = 0, canvasDpr = 1;

    function cloneData(obj) {
        return typeof structuredClone === 'function' ? structuredClone(obj) : JSON.parse(JSON.stringify(obj));
    }

    function scheduleRedraw() {
        if (redrawRafId !== null) return;
        redrawRafId = requestAnimationFrame(() => {
            redrawRafId = null;
            redraw();
        });
    }

    // --- UNDO / REDO SNAPSHOT HELPERS ---
    function captureStateSnapshot() {
        return cloneData({
            scalePoints,
            cables,
            devices,
            wireways,
            pixelsPerMeter,
            activeCableIndex,
            activeWirewayIndex
        });
    }

    function updateUndoButton() {
        btnUndo.disabled = actionHistory.length === 0;
    }

    function pushUndoSnapshot(snapshot) {
        const snap = snapshot || captureStateSnapshot();
        actionHistory.push(snap);
        if (actionHistory.length > MAX_HISTORY) {
            actionHistory.shift();
        }
        redoHistory = [];
        updateUndoButton();
    }

    function restoreStateSnapshot(snap) {
        scalePoints = cloneData(snap.scalePoints || []);
        cables = cloneData(snap.cables || [{ type: selectCableType.value || 'cat6', points: [] }]);
        if (cables.length === 0) cables.push({ type: selectCableType.value || 'cat6', points: [] });
        devices = cloneData(snap.devices || []);
        wireways = cloneData(snap.wireways || [{ points: [] }]);
        if (wireways.length === 0) wireways.push({ points: [] });
        pixelsPerMeter = snap.pixelsPerMeter ?? null;
        activeCableIndex = Math.max(0, Math.min(snap.activeCableIndex ?? (cables.length - 1), cables.length - 1));
        activeWirewayIndex = Math.max(0, Math.min(snap.activeWirewayIndex ?? (wireways.length - 1), wireways.length - 1));
        selectedDeviceIds.clear();
        btnSetScale.disabled = !(scalePoints.length === 2 && pixelsPerMeter === null);
        updateUndoButton();
    }

    // --- SMART CABLE PORT CLEANUP ---
    function clearPortConnIfMatch(devId, portNum) {
        const dev = devices.find(d => d.id === devId);
        if (!dev || !dev.ports || !dev.ports[portNum]) return;
        const cfg = dev.ports[portNum];
        delete cfg.conn;
        const hasOtherConfig = !!(cfg.label || cfg.vlan || cfg.notes || (cfg.mode && cfg.mode !== 'access'));
        if (!hasOtherConfig) {
            delete dev.ports[portNum];
        }
    }

    function clearSmartCablePortConnections(cableObj) {
        if (!cableObj || !('fromDev' in cableObj)) return;
        if (cableObj.fromDev && cableObj.fromPort !== undefined) {
            clearPortConnIfMatch(cableObj.fromDev, cableObj.fromPort);
        }
        if (cableObj.toDev && cableObj.toPort !== undefined) {
            clearPortConnIfMatch(cableObj.toDev, cableObj.toPort);
        }
    }

    function removeDeviceAndLinks(devId) {
        selectedDeviceIds.delete(devId);
        cables.forEach(c => {
            if (c.fromDev === devId || c.toDev === devId) {
                clearSmartCablePortConnections(c);
            }
        });
        cables = cables.filter(c => c.fromDev !== devId && c.toDev !== devId);
        if (cables.length === 0) {
            cables.push({ type: selectCableType.value || 'cat6', points: [] });
        }
        activeCableIndex = Math.min(activeCableIndex, cables.length - 1);
        devices = devices.filter(d => d.id !== devId);
    }

    // --- MÓDVÁLTÁS ---
    const MODE_BUTTONS = Object.assign(Object.create(null), {
        scale: btnScale,
        drag: btnDrag,
        select: btnSelect,
        measure: btnMeasure,
        wireway: btnWireway,
        connect: btnConnect,
        delete: btnDelete
    });

    function setMode(newMode) {
        mode = newMode;
        Object.values(MODE_BUTTONS).forEach(b => b.classList.remove('active'));
        btnNewCable.classList.remove('active');
        btnNewWireway.classList.remove('active');
        canvasContainer.classList.remove('delete-mode', 'drag-mode', 'select-mode');
        canvasContainer.style.cursor = '';

        if (activePlaceDevice) {
            activePlaceDevice = null;
            document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active-place'));
        }
        if (newMode !== 'select') {
            selectedDeviceIds.clear();
        }
        if (newMode !== 'connect') {
            connectState = { devA: null, portA: null, points: [] };
            hidePortPopup();
        }

        if (MODE_BUTTONS[newMode]) {
            MODE_BUTTONS[newMode].classList.add('active');
        }
        if (newMode === 'delete') canvasContainer.classList.add('delete-mode');
        else if (newMode === 'drag') canvasContainer.classList.add('drag-mode');
        else if (newMode === 'select') canvasContainer.classList.add('select-mode');
    }

    // --- TÉMA ÉS NYELV ---
    function updateThemeUI() {
        document.body.setAttribute('data-theme', theme);
        document.getElementById('theme-text').innerText = theme === 'light' ? t('themeDark') : t('themeLight');
        document.getElementById('theme-icon').innerHTML = theme === 'light' ? ICON_MOON : ICON_SUN;
        cachedCanvasBg = getComputedStyle(document.body).getPropertyValue('--canvas-bg').trim() || '#ccd0da';
    }

    document.getElementById('btn-theme').addEventListener('click', () => {
        theme = theme === 'light' ? 'dark' : 'light';
        updateThemeUI();
        redraw();
    });

    function updateLanguageUI() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.innerText = t(el.getAttribute('data-i18n'));
        });
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            el.title = t(el.getAttribute('data-i18n-title'));
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
        });
        updateThemeUI();
        if (swSelectedPort !== null) {
            document.getElementById('sw-port-editor-title').textContent = t('swPortTitle', swSelectedPort);
        }
        if (switchModalDevice && switchModalDevice.type === 'rack') {
            document.getElementById('sw-rack-info').textContent = t('swRackInfo');
        }
        redraw();
    }
    document.getElementById('lang-select').addEventListener('change', e => { lang = e.target.value; updateLanguageUI(); });

    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.addEventListener('click', () => {
            if (!img.src) return;
            if (activePlaceDevice === item.dataset.type) {
                activePlaceDevice = null;
                item.classList.remove('active-place');
            } else {
                setMode('none');
                activePlaceDevice = item.dataset.type;
                item.classList.add('active-place');
            }
        });
    });

    // --- FÁJL BETÖLTÉS ÉS GOMBOK ---
    function resizeCanvas() {
        canvasCssW = canvasContainer.clientWidth || 1;
        canvasCssH = canvasContainer.clientHeight || 1;
        canvasDpr = Math.min(window.devicePixelRatio || 1, 3);
        canvas.width = Math.round(canvasCssW * canvasDpr);
        canvas.height = Math.round(canvasCssH * canvasDpr);
        redraw();
    }
    window.addEventListener('resize', resizeCanvas);

    function restoreState(data, resetCamera) {
        if (!data || typeof data !== 'object' || Array.isArray(data)) return;
        scalePoints = sanitizePoints(data.scalePoints).slice(0, 2);
        const rawCables = Array.isArray(data.cables) ? data.cables.slice(0, MAX_CABLES) : [{ type: 'cat6', points: [] }];
        cables = rawCables.map(sanitizeCable).filter(Boolean);
        if (cables.length === 0) cables.push({ type: 'cat6', points: [] });

        const rawDevices = Array.isArray(data.devices) ? data.devices.slice(0, MAX_DEVICES) : [];
        devices = rawDevices.map(sanitizeDevice).filter(Boolean);

        const ppm = Number(data.pixelsPerMeter);
        pixelsPerMeter = (Number.isFinite(ppm) && ppm > 0) ? ppm : null;
        gridOffsetX = Number.isFinite(Number(data.gridOffsetX)) ? Number(data.gridOffsetX) : 0;
        gridOffsetY = Number.isFinite(Number(data.gridOffsetY)) ? Number(data.gridOffsetY) : 0;
        activeCableIndex = cables.length - 1;

        const rawWireways = Array.isArray(data.wireways) ? data.wireways.slice(0, MAX_WIREWAYS) : [{ points: [] }];
        wireways = rawWireways.map(w => ({ points: sanitizePoints(w && w.points) }));
        if (wireways.length === 0) wireways.push({ points: [] });
        activeWirewayIndex = wireways.length - 1;

        actionHistory = [];
        redoHistory = [];
        btnScale.disabled = false; btnExport.disabled = false; btnExportPlan.disabled = false;
        btnSetScale.disabled = !(scalePoints.length === 2 && pixelsPerMeter === null);
        btnMeasure.disabled = btnNewCable.disabled = btnConnect.disabled = btnDelete.disabled = btnClear.disabled = selectCableType.disabled = btnDrag.disabled = btnSelect.disabled = btnWireway.disabled = btnNewWireway.disabled = false;
        updateUndoButton();
        if (resetCamera && img.width > 0 && img.height > 0) {
            const zVal = Number(data.zoom);
            zoom = (Number.isFinite(zVal) && zVal >= 0.05 && zVal <= 15) ? zVal : Math.min(canvasCssW / img.width, canvasCssH / img.height) * 0.95;
            const cxVal = Number(data.cameraX), cyVal = Number(data.cameraY);
            cameraX = Number.isFinite(cxVal) ? cxVal : (canvasCssW - img.width * zoom) / 2;
            cameraY = Number.isFinite(cyVal) ? cyVal : (canvasCssH - img.height * zoom) / 2;
        }
        redraw();
    }

    function handleFileLoad(file) {
        if (!file) return;
        if (file.size > MAX_FILE_BYTES) {
            alert(t('alertFileTooLarge'));
            return;
        }
        const reader = new FileReader();
        const nameLower = (file.name || '').toLowerCase();
        if (nameLower.endsWith('.json') || nameLower.endsWith('.plan')) {
            reader.onload = ev => {
                try {
                    const data = JSON.parse(ev.target.result);
                    if (!data || typeof data !== 'object' || Array.isArray(data)) {
                        throw new Error('Invalid plan');
                    }
                    if (data.imgSrc !== undefined && data.imgSrc !== null) {
                        if (!isSafeRasterDataUrl(data.imgSrc)) {
                            alert(t('alertInvalidImg'));
                            return;
                        }
                        img.onload = () => { resizeCanvas(); restoreState(data, true); saveFloorplanImage(); autoSave(); };
                        img.src = data.imgSrc;
                    } else if (img.src) {
                        restoreState(data, false);
                        autoSave();
                    } else {
                        pendingPlanData = data;
                        alert(t('alertNoImgPlan'));
                    }
                } catch (err) { alert(t('alertJsonErr')); }
            };
            reader.readAsText(file);
        } else if (file.type === 'application/pdf' || nameLower.endsWith('.pdf')) {
            if (!window.pdfjsLib) {
                alert(t(window.location.protocol === 'file:' ? 'alertPdfFileProto' : 'alertPdfErr'));
                return;
            }
            pdfjsLib.GlobalWorkerOptions.workerSrc = PDF_WORKER_URL;
            reader.onload = event => {
                let pdfDoc = null;
                const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(event.target.result), isEvalSupported: false });
                loadingTask.promise
                    .then(pdf => {
                        pdfDoc = pdf;
                        return pdf.getPage(1);
                    })
                    .then(page => {
                        const baseVp = page.getViewport({ scale: 1.0 });
                        const safeScale = Math.min(2.0, MAX_PDF_CANVAS_DIM / Math.max(1, baseVp.width), MAX_PDF_CANVAS_DIM / Math.max(1, baseVp.height));
                        const vp = page.getViewport({ scale: safeScale });
                        const tc = document.createElement('canvas'), tctx = tc.getContext('2d');
                        tc.width = Math.max(1, Math.round(vp.width));
                        tc.height = Math.max(1, Math.round(vp.height));
                        return page.render({ canvasContext: tctx, viewport: vp }).promise.then(() => loadImageData(tc.toDataURL('image/png')));
                    })
                    .catch(err => {
                        console.error('PDF render failed:', err);
                        alert(t('alertPdfErr'));
                    })
                    .finally(() => {
                        if (pdfDoc && typeof pdfDoc.cleanup === 'function') pdfDoc.cleanup();
                        if (loadingTask && typeof loadingTask.destroy === 'function') loadingTask.destroy();
                    });
            };
            reader.readAsArrayBuffer(file);
        } else if (ALLOWED_IMAGE_MIMES.has(file.type) || (!file.type && ALLOWED_IMAGE_EXTS.test(nameLower))) {
            reader.onload = ev => loadImageData(ev.target.result);
            reader.readAsDataURL(file);
        } else {
            alert(t('alertUnsupportedFile'));
        }
    }

    document.getElementById('upload').addEventListener('change', e => {
        const file = e.target.files[0]; if (!file) return;
        handleFileLoad(file);
    });

    window.addEventListener('dragover', e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    });

    window.addEventListener('drop', e => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) handleFileLoad(file);
    });

    function loadImageData(src) {
        if (!isSafeRasterDataUrl(src)) {
            alert(t('alertInvalidImg'));
            return;
        }
        img.onload = () => {
            resizeCanvas();
            if (pendingPlanData) {
                restoreState(pendingPlanData, true);
                pendingPlanData = null;
            } else {
                scalePoints = []; cables = [{ type: selectCableType.value || 'cat6', points: [] }]; devices = []; wireways = [{ points: [] }]; actionHistory = []; redoHistory = []; activeCableIndex = 0; activeWirewayIndex = 0; pixelsPerMeter = null; setMode('none');
                zoom = Math.min(canvasCssW / img.width, canvasCssH / img.height) * 0.95;
                cameraX = (canvasCssW - img.width * zoom) / 2; cameraY = (canvasCssH - img.height * zoom) / 2;
                btnScale.disabled = false; btnExport.disabled = false; btnExportPlan.disabled = false;
                btnSetScale.disabled = true;
                btnMeasure.disabled = btnNewCable.disabled = btnConnect.disabled = btnDelete.disabled = btnClear.disabled = selectCableType.disabled = btnDrag.disabled = btnSelect.disabled = btnWireway.disabled = btnNewWireway.disabled = false;
                updateUndoButton();
            }
            redraw();
            saveFloorplanImage();
            autoSave();
        }; img.src = src;
    }

    // --- ZOOM ÉS EGÉR KOORDINÁTÁK ---
    canvasContainer.addEventListener('wheel', e => {
        if (!img.src) return;
        e.preventDefault();
        const zFactor = e.deltaY > 0 ? 0.9 : 1.1;
        const r = canvas.getBoundingClientRect(), mx = e.clientX - r.left, my = e.clientY - r.top;
        const wx = (mx - cameraX) / zoom, wy = (my - cameraY) / zoom;
        zoom = Math.max(0.05, Math.min(zoom * zFactor, 15));
        cameraX = mx - wx * zoom; cameraY = my - wy * zoom; 
        scheduleRedraw();
    }, {passive: false});

    function getWorldPos(e) {
        const r = canvas.getBoundingClientRect(), cx = e.clientX || (e.touches && e.touches[0].clientX) || 0, cy = e.clientY || (e.touches && e.touches[0].clientY) || 0;
        return { x: ((cx - r.left) - cameraX) / zoom, y: ((cy - r.top) - cameraY) / zoom };
    }

    function computeDeviceLayout() {
        const rackBuckets = new Map();
        for (let i = 0; i < devices.length; i++) {
            const d = devices[i];
            if (d.type !== 'rack') continue;
            const key = `${Math.round(d.x)},${Math.round(d.y)}`;
            let list = rackBuckets.get(key);
            if (!list) { list = []; rackBuckets.set(key, list); }
            list.push(d);
        }

        const nonRackBuckets = new Map();
        const drawPosByIndex = new Array(devices.length);
        const drawPosById = new Map();
        const stackedRackByIndex = new Array(devices.length);

        for (let i = 0; i < devices.length; i++) {
            const d = devices[i];
            if (d.type === 'rack') {
                const pos = { x: d.x, y: d.y };
                drawPosByIndex[i] = pos;
                drawPosById.set(d.id, pos);
                stackedRackByIndex[i] = null;
                continue;
            }

            const bx = Math.round(d.x), by = Math.round(d.y);
            let stackedRack = null;
            for (let ox = -1; ox <= 1 && !stackedRack; ox++) {
                for (let oy = -1; oy <= 1 && !stackedRack; oy++) {
                    const cand = rackBuckets.get(`${bx + ox},${by + oy}`);
                    if (!cand) continue;
                    for (let j = 0; j < cand.length; j++) {
                        if (Math.abs(cand[j].x - d.x) < 1 && Math.abs(cand[j].y - d.y) < 1) {
                            stackedRack = cand[j];
                            break;
                        }
                    }
                }
            }

            let stackIndex = 0;
            for (let ox = -1; ox <= 1; ox++) {
                for (let oy = -1; oy <= 1; oy++) {
                    const prev = nonRackBuckets.get(`${bx + ox},${by + oy}`);
                    if (!prev) continue;
                    for (let j = 0; j < prev.length; j++) {
                        if (Math.abs(prev[j].x - d.x) < 1 && Math.abs(prev[j].y - d.y) < 1) {
                            stackIndex++;
                        }
                    }
                }
            }

            const ownKey = `${bx},${by}`;
            let ownList = nonRackBuckets.get(ownKey);
            if (!ownList) { ownList = []; nonRackBuckets.set(ownKey, ownList); }
            ownList.push(d);

            const pos = stackedRack
                ? { x: d.x, y: d.y - (stackedRack.height || 110) / 2 + 15 + (stackIndex * 16) }
                : { x: d.x, y: d.y + (stackIndex * 20) / zoom };

            drawPosByIndex[i] = pos;
            drawPosById.set(d.id, pos);
            stackedRackByIndex[i] = stackedRack;
        }

        return { drawPosByIndex, drawPosById, stackedRackByIndex };
    }

    function findStackedRack(d) {
        if (!d || d.type === 'rack') return null;
        return devices.find(r => r.type === 'rack' && Math.abs(r.x - d.x) < 1 && Math.abs(r.y - d.y) < 1) || null;
    }

    function getDeviceDrawPos(index) {
        const d = devices[index];
        if (!d) return { x: 0, y: 0 };
        if (d.type === 'rack') return { x: d.x, y: d.y };

        const stackedRack = findStackedRack(d);
        let stackIndex = 0;
        for (let i = 0; i < index; i++) {
            if (devices[i].type !== 'rack' && Math.abs(devices[i].x - d.x) < 1 && Math.abs(devices[i].y - d.y) < 1) {
                stackIndex++;
            }
        }
        if (stackedRack) {
            const rh = stackedRack.height || 110;
            return { x: d.x, y: d.y - rh/2 + 15 + (stackIndex * 16) };
        }
        return { x: d.x, y: d.y + (stackIndex * 20) / zoom };
    }

    function getDeviceDrawPosById(id) {
        const idx = devices.findIndex(d => d.id === id);
        return idx === -1 ? null : getDeviceDrawPos(idx);
    }

    function getCablePoints(cableObj) {
        if (!('fromDev' in cableObj)) return cableObj.points;
        const p1 = getDeviceDrawPosById(cableObj.fromDev);
        const p2 = getDeviceDrawPosById(cableObj.toDev);
        return (p1 && p2) ? [p1, ...cableObj.points, p2] : null;
    }

    function getRackEdgeHit(wPos) {
        const threshold = 10 / zoom;
        for (let i = devices.length - 1; i >= 0; i--) {
            const d = devices[i];
            if (d.type !== 'rack') continue;
            const pos = getDeviceDrawPos(i);
            const rw = d.width || 50, rh = d.height || 110;
            const left = pos.x - rw/2, right = pos.x + rw/2;
            const top = pos.y - rh/2, bottom = pos.y + rh/2;
            if (wPos.x < left - threshold || wPos.x > right + threshold || wPos.y < top - threshold || wPos.y > bottom + threshold) continue;
            const edges = {
                left: Math.abs(wPos.x - left) < threshold,
                right: Math.abs(wPos.x - right) < threshold,
                top: Math.abs(wPos.y - top) < threshold,
                bottom: Math.abs(wPos.y - bottom) < threshold
            };
            if (edges.left || edges.right || edges.top || edges.bottom) {
                return {
                    index: i,
                    edges,
                    fixed: {
                        x: edges.left ? right : (edges.right ? left : null),
                        y: edges.top ? bottom : (edges.bottom ? top : null)
                    }
                };
            }
        }
        return null;
    }

    function getResizeCursor(edges) {
        if ((edges.left && edges.top) || (edges.right && edges.bottom)) return 'nwse-resize';
        if ((edges.right && edges.top) || (edges.left && edges.bottom)) return 'nesw-resize';
        if (edges.left || edges.right) return 'ew-resize';
        if (edges.top || edges.bottom) return 'ns-resize';
        return '';
    }

    function deleteTarget(target) {
        if (!target) return;
        pushUndoSnapshot();
        if (target.type === 'device') {
            removeDeviceAndLinks(devices[target.index].id);
        } else if (target.type === 'cable') {
            cables[target.cableIndex].points.splice(target.index, 1);
            if (cables[target.cableIndex].points.length === 0 && !('fromDev' in cables[target.cableIndex])) {
                cables.splice(target.cableIndex, 1);
                if (cables.length === 0) cables.push({ type: selectCableType.value || 'cat6', points: [] });
                activeCableIndex = cables.length - 1;
            }
        } else if (target.type === 'wireway') {
            wireways[target.wirewayIndex].points.splice(target.index, 1);
            if (wireways[target.wirewayIndex].points.length === 0) {
                wireways.splice(target.wirewayIndex, 1);
                if (wireways.length === 0) wireways.push({ points: [] });
                activeWirewayIndex = wireways.length - 1;
            }
        } else if (target.type === 'scale') {
            scalePoints.splice(target.index, 1);
            pixelsPerMeter = null;
            btnSetScale.disabled = true;
            setMode('scale');
        }
        redraw();
        autoSave();
    }

    function findHoveredPoint(wPos) {
        const hit = 18 / zoom;
        
        // 1. menet: Minden más eszköz keresése (nem rack)
        for (let i = devices.length - 1; i >= 0; i--) {
            const d = devices[i];
            if (d.type === 'rack') continue;
            
            const pos = getDeviceDrawPos(i);
            const stackedRack = findStackedRack(d);
            if (stackedRack) {
                const rw = stackedRack.width || 50;
                const uw = rw - 10;
                const uh = 14;
                if (wPos.x >= pos.x - uw/2 && wPos.x <= pos.x + uw/2 && wPos.y >= pos.y - uh/2 && wPos.y <= pos.y + uh/2) {
                    return { array: devices, index: i, type: 'device' };
                }
            } else if (Math.hypot(pos.x - wPos.x, pos.y - wPos.y) < hit) {
                return { array: devices, index: i, type: 'device' };
            }
        }
        
        // 2. menet: Csak a rack szekrények keresése
        for (let i = devices.length - 1; i >= 0; i--) {
            const d = devices[i];
            if (d.type !== 'rack') continue;
            
            const pos = getDeviceDrawPos(i);
            const rw = d.width || 50;
            const rh = d.height || 110;
            if (wPos.x >= pos.x - rw/2 && wPos.x <= pos.x + rw/2 && wPos.y >= pos.y - rh/2 && wPos.y <= pos.y + rh/2) {
                return { array: devices, index: i, type: 'device' };
            }
            if (Math.hypot(pos.x - wPos.x, pos.y - wPos.y) < hit) return { array: devices, index: i, type: 'device' };
        }
        for (let i = 0; i < scalePoints.length; i++) if (Math.hypot(scalePoints[i].x - wPos.x, scalePoints[i].y - wPos.y) < hit) return { array: scalePoints, index: i, type: 'scale' };
        for (let c = cables.length - 1; c >= 0; c--) for (let i = 0; i < cables[c].points.length; i++) if (Math.hypot(cables[c].points[i].x - wPos.x, cables[c].points[i].y - wPos.y) < hit) return { array: cables[c].points, index: i, type: 'cable', cableIndex: c };
        for (let w = wireways.length - 1; w >= 0; w--) for (let i = 0; i < wireways[w].points.length; i++) if (Math.hypot(wireways[w].points[i].x - wPos.x, wireways[w].points[i].y - wPos.y) < hit) return { array: wireways[w].points, index: i, type: 'wireway', wirewayIndex: w };
        return null;
    }

    // --- CONTEXT MENU (JOBB KLIKK) ---
    window.addEventListener('contextmenu', e => {
        e.preventDefault(); 
        contextMenu.style.display = 'none';
        if (!img.src || !e.target.closest('#canvas-container') || hasDragged) return;

        const hov = findHoveredPoint(getWorldPos(e));
        activeContextMenuTarget = hov;

        document.getElementById('ctx-rename').style.display = 'none';
        document.getElementById('ctx-delete-device').style.display = 'none';
        document.getElementById('ctx-delete-point').style.display = 'none';

        if (hov && hov.type === 'device') {
            document.getElementById('ctx-rename').style.display = 'flex';
            document.getElementById('ctx-delete-device').style.display = 'flex';
        } else if (hov && (hov.type === 'cable' || hov.type === 'scale' || hov.type === 'wireway')) {
            document.getElementById('ctx-delete-point').style.display = 'flex';
        }
        
        contextMenu.style.display = 'flex';
        contextMenu.style.left = e.clientX + 'px';
        contextMenu.style.top = e.clientY + 'px';
    });

    window.addEventListener('click', e => {
        if (!e.target.closest('#context-menu')) contextMenu.style.display = 'none';
    });

    function renameDevice(d) {
        const newName = prompt(t('promptRename'), d.name || deviceShortnames[d.type]);
        if (newName !== null) {
            const normalized = newName.trim() === "" ? null : newName.trim();
            if (d.name !== normalized) {
                pushUndoSnapshot();
                d.name = normalized;
                redraw();
                autoSave();
            }
        }
    }

    document.getElementById('ctx-rename').addEventListener('click', () => {
        contextMenu.style.display = 'none';
        if (activeContextMenuTarget && activeContextMenuTarget.type === 'device') {
            renameDevice(devices[activeContextMenuTarget.index]);
        }
    });

    document.getElementById('ctx-delete-device').addEventListener('click', () => {
        contextMenu.style.display = 'none';
        if (activeContextMenuTarget && activeContextMenuTarget.type === 'device') {
            deleteTarget(activeContextMenuTarget);
        }
    });

    document.getElementById('ctx-delete-point').addEventListener('click', () => {
        contextMenu.style.display = 'none';
        deleteTarget(activeContextMenuTarget);
    });

    document.getElementById('ctx-undo').addEventListener('click', () => {
        contextMenu.style.display = 'none';
        if (!btnUndo.disabled) btnUndo.dispatchEvent(new MouseEvent('click'));
    });

    // --- KEYBOARD SHORTCUTS ---
    window.addEventListener('keydown', e => {
        const tag = e.target.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.target.isContentEditable) {
            return;
        }

        // Alt + O / O: Open layout
        const isAltO = e.altKey && e.key.toLowerCase() === 'o';
        const isKeyO = e.key.toLowerCase() === 'o' && !e.ctrlKey && !e.metaKey && !e.altKey;
        if (isAltO || isKeyO) {
            e.preventDefault();
            const uploadBtn = document.getElementById('upload');
            if (uploadBtn) uploadBtn.click();
            return;
        }

        // Ctrl + Z: Undo
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
            e.preventDefault();
            if (!btnUndo.disabled) btnUndo.click();
            return;
        }

        // Ctrl + Y: Redo
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') {
            e.preventDefault();
            performRedo();
            return;
        }

        // F2: Rename device
        if (e.key === 'F2') {
            e.preventDefault();
            if (activeContextMenuTarget && activeContextMenuTarget.type === 'device') {
                renameDevice(devices[activeContextMenuTarget.index]);
            } else if (mode === 'select' && selectedDeviceIds.size === 1) {
                const id = [...selectedDeviceIds][0];
                const d = devices.find(x => x.id === id);
                if (d) renameDevice(d);
            }
            return;
        }

        // Escape: clear modes/selections
        if (e.key === 'Escape' || e.key === 'Esc') {
            e.preventDefault();
            if (activePlaceDevice || mode !== 'none' || selectedDeviceIds.size > 0) {
                setMode('none');
            }
            redraw();
            return;
        }

        // Mode Keys: S, D, V, M, N, C, E, W, Q
        const MODE_SHORTCUTS = Object.assign(Object.create(null), {
            s: btnScale, d: btnDrag, v: btnSelect, m: btnMeasure,
            n: btnNewCable, c: btnConnect, e: btnDelete, w: btnWireway, q: btnNewWireway
        });
        const shortcutBtn = MODE_SHORTCUTS[e.key.toLowerCase()];
        if (shortcutBtn) {
            e.preventDefault();
            if (!shortcutBtn.disabled) shortcutBtn.click();
        } else if (e.key === 'Delete' || e.key === 'Backspace') {
            if (mode === 'connect' && connectState.devA && connectState.points && connectState.points.length > 0) {
                e.preventDefault();
                connectState.points.pop();
                redraw();
            } else if (selectedDeviceIds.size > 0) {
                e.preventDefault();
                deleteSelectedDevices();
            } else if (mode === 'delete' && activeContextMenuTarget) {
                e.preventDefault();
                deleteTarget(activeContextMenuTarget);
            }
        }
    });

    // --- SWITCH PANEL LOGIC ---
    let switchModalDevice = null;
    let swSelectedPort = null;

    function getDefaultPortCount(type) {
        if (type === 'switch' || type === 'patch' || type === 'patchpanel') return 24;
        if (type === 'router') return 4;
        return 1;
    }

    function getDeviceTitle(type) {
        const titles = Object.assign(Object.create(null), { patch: 'Patch Panel', patchpanel: 'Patch Panel', rack: 'Rack Cabinet' });
        if (Object.hasOwn(titles, type)) return titles[type];
        const safeType = VALID_DEVICE_TYPES.has(type) ? type : 'pc';
        return safeType.charAt(0).toUpperCase() + safeType.slice(1);
    }

    function openSwitchModal(device) {
        modalOpenSnapshot = captureStateSnapshot();
        modalDirty = false;
        switchModalDevice = device;
        if (!device.ports) device.ports = {};
        device.portCount = clampPortCount(device.portCount, getDefaultPortCount(device.type));
        swSelectedPort = null;
        
        document.getElementById('sw-device-name').value = device.name || '';
        const titleType = getDeviceTitle(device.type);
        
        const iconType = device.type === 'patchpanel' ? 'patch' : (VALID_DEVICE_TYPES.has(device.type) ? device.type : 'pc');
        const sideIcon = document.querySelector(`.sidebar-item[data-type="${iconType}"] svg`);
        const modalIconEl = document.getElementById('sw-modal-icon');
        if (sideIcon && modalIconEl) {
            const cloned = sideIcon.cloneNode(true);
            cloned.id = 'sw-modal-icon';
            cloned.removeAttribute('style');
            modalIconEl.replaceWith(cloned);
        }
        
        if (device.type === 'rack') {
            document.getElementById('sw-modal-title').textContent = device.name || titleType;
            document.getElementById('sw-f-port-count').parentElement.style.display = 'none';
            document.getElementById('sw-faceplate').style.display = 'none';
            document.getElementById('sw-editor-placeholder').style.display = 'none';
            document.getElementById('sw-port-editor').style.display = 'none';
            const rackInfo = document.getElementById('sw-rack-info');
            rackInfo.textContent = t('swRackInfo');
            rackInfo.style.display = 'block';
            document.getElementById('sw-btn-clear-port').style.display = 'none';
            document.getElementById('switch-modal-overlay').classList.add('open');
            return;
        } else {
            document.getElementById('sw-f-port-count').parentElement.style.display = 'flex';
            document.getElementById('sw-faceplate').style.display = 'block';
            document.getElementById('sw-rack-info').style.display = 'none';
            document.getElementById('sw-btn-clear-port').style.display = 'inline-flex';
        }

        document.getElementById('sw-modal-title').textContent = device.name || titleType;
        document.getElementById('sw-f-port-count').value = device.portCount;
        
        buildSwitchFaceplate(device);
        showSwEditor(null);
        document.getElementById('switch-modal-overlay').classList.add('open');
    }

    function buildSwitchFaceplate(device) {
        const portCount = device.portCount;
        const ledRow = document.getElementById('sw-port-leds');
        ledRow.innerHTML = '';
        for (let p = 1; p <= portCount; p++) {
            const led = document.createElement('div');
            led.className = 'sw-port-led';
            led.textContent = p;
            led.dataset.port = p;
            const cfg = device.ports[p];
            if (cfg && (cfg.label || cfg.vlan || cfg.conn || (cfg.mode && cfg.mode !== 'access'))) led.classList.add('has-config');
            led.addEventListener('click', () => selectSwPort(p, device));
            ledRow.appendChild(led);
        }
    }

    function selectSwPort(portNum, device) {
        swSelectedPort = portNum;
        document.querySelectorAll('.sw-port-led').forEach(el => el.classList.toggle('selected', +el.dataset.port === portNum));
        showSwEditor(portNum, device);
    }

    // [id, stateKey, defaultVal]
    const SW_FIELDS = [
        ['sw-f-label', 'label', ''],
        ['sw-f-vlan',  'vlan',  ''],
        ['sw-f-mode',  'mode',  'access'],
        ['sw-f-conn',  'conn',  ''],
        ['sw-f-notes', 'notes', '']
    ];

    function showSwEditor(portNum, device) {
        const ph = document.getElementById('sw-editor-placeholder');
        const ed = document.getElementById('sw-port-editor');
        if (portNum === null) { ph.style.display = ''; ed.style.display = 'none'; return; }
        ph.style.display = 'none'; ed.style.display = 'block';
        const cfg = (device || switchModalDevice).ports[portNum] || {};
        document.getElementById('sw-port-editor-title').textContent = t('swPortTitle', portNum);
        SW_FIELDS.forEach(([id, key, def]) => { document.getElementById(id).value = cfg[key] ?? def; });
    }

    function saveCurrentPortFields() {
        if (swSelectedPort === null || !switchModalDevice) return;
        const cfg = {};
        SW_FIELDS.forEach(([id, key]) => { cfg[key] = document.getElementById(id).value; });
        cfg.vlan = parseInt(cfg.vlan) || null;
        if (typeof cfg.label === 'string') cfg.label = cfg.label.trim();
        if (typeof cfg.conn  === 'string') cfg.conn  = cfg.conn.trim();
        if (typeof cfg.notes === 'string') cfg.notes = cfg.notes.trim();
        const isConfigured = !!(cfg.label || cfg.vlan || cfg.conn || cfg.notes || (cfg.mode && cfg.mode !== 'access'));
        const prev = switchModalDevice.ports[swSelectedPort];
        const changed = isConfigured
            ? (!prev || prev.label !== cfg.label || prev.vlan !== cfg.vlan || prev.mode !== cfg.mode || prev.conn !== cfg.conn || prev.notes !== cfg.notes)
            : !!prev;
        if (changed) modalDirty = true;
        if (isConfigured) { switchModalDevice.ports[swSelectedPort] = cfg; }
        else { delete switchModalDevice.ports[swSelectedPort]; }
        const ledEl = document.querySelector(`.sw-port-led[data-port="${swSelectedPort}"]`);
        if (ledEl) ledEl.classList.toggle('has-config', isConfigured);
    }

    function closeSwModal() {
        saveCurrentPortFields();
        if (modalDirty && modalOpenSnapshot) {
            pushUndoSnapshot(modalOpenSnapshot);
        }
        modalOpenSnapshot = null;
        modalDirty = false;
        switchModalDevice = null;
        swSelectedPort = null;
        document.getElementById('switch-modal-overlay').classList.remove('open');
        autoSave(); redraw();
    }
    document.getElementById('switch-modal-close').addEventListener('click', closeSwModal);
    document.getElementById('sw-btn-save').addEventListener('click', closeSwModal);
    document.getElementById('sw-f-port-count').addEventListener('change', e => {
        if (!switchModalDevice) return;
        const count = clampPortCount(e.target.value, 1);
        e.target.value = count;
        if (switchModalDevice.portCount !== count) {
            modalDirty = true;
            switchModalDevice.portCount = count;
            scheduleAutoSave();
        }
        buildSwitchFaceplate(switchModalDevice);
        if (swSelectedPort > count) showSwEditor(null);
    });

    const handleDeviceNameChange = e => {
        if (!switchModalDevice) return;
        const val = e.target.value.trim();
        const nextName = val === '' ? null : val;
        if (switchModalDevice.name !== nextName) {
            modalDirty = true;
            switchModalDevice.name = nextName;
            document.getElementById('sw-modal-title').textContent = switchModalDevice.name || getDeviceTitle(switchModalDevice.type);
            scheduleRedraw();
            scheduleAutoSave();
        }
    };
    document.getElementById('sw-device-name').addEventListener('input', handleDeviceNameChange);
    document.getElementById('sw-device-name').addEventListener('change', handleDeviceNameChange);

    document.getElementById('sw-btn-clear-port').addEventListener('click', () => {
        if (swSelectedPort === null || !switchModalDevice) return;
        if (switchModalDevice.ports[swSelectedPort]) modalDirty = true;
        delete switchModalDevice.ports[swSelectedPort];
        showSwEditor(swSelectedPort, switchModalDevice);
        buildSwitchFaceplate(switchModalDevice);
        scheduleAutoSave();
    });

    SW_FIELDS.forEach(([id]) => {
        const el = document.getElementById(id);
        const save = () => {
            if (swSelectedPort !== null) {
                saveCurrentPortFields();
                scheduleAutoSave();
            }
        };
        el.addEventListener('input', save);
        el.addEventListener('change', save);
    });

    // Close on overlay backdrop click
    document.getElementById('switch-modal-overlay').addEventListener('click', e => {
        if (e.target === document.getElementById('switch-modal-overlay')) {
            closeSwModal();
        }
    });

    // --- EGÉR ÉS ÉRINTŐ ESEMÉNYEK ---
    function handleStart(e, isTouch) {
        if (!img.src || contextMenu.style.display === 'flex') return;
        const wPos = getWorldPos(e), hov = findHoveredPoint(wPos), btn = isTouch ? 0 : e.button;
        hasDragged = false;

        if (e.shiftKey && img.src) {
            isPanningGrid = true;
            const clientX = isTouch ? e.touches[0].clientX : e.clientX;
            const clientY = isTouch ? e.touches[0].clientY : e.clientY;
            gridPanStartX = clientX - gridOffsetX * zoom;
            gridPanStartY = clientY - gridOffsetY * zoom;
            return;
        }

        if (mode === 'connect') {
            if (hov && hov.type === 'device') {
                showPortPopup(hov.index, wPos.x, wPos.y);
            } else if (connectState.devA) {
                connectState.points = connectState.points || [];
                connectState.points.push(applyGridSnap(wPos));
                redraw();
            } else {
                hidePortPopup();
            }
            return;
        }

        if (mode === 'delete') {
            if (hov) {
                deleteTarget(hov);
            } else {
                for (let c = cables.length - 1; c >= 0; c--) {
                    const cableObj = cables[c];
                    const fullCable = getCablePoints(cableObj) || cableObj.points;
                    for (let i = 1; i < fullCable.length; i++) {
                        if (distToSegment(wPos, fullCable[i-1], fullCable[i]) < 10 / zoom) {
                            pushUndoSnapshot();
                            clearSmartCablePortConnections(cableObj);
                            cables.splice(c, 1);
                            if (cables.length === 0) cables.push({ type: selectCableType.value || 'cat6', points: [] });
                            activeCableIndex = cables.length - 1;
                            redraw();
                            autoSave();
                            return;
                        }
                    }
                }
                for (let w = wireways.length - 1; w >= 0; w--) {
                    const points = wireways[w].points;
                    for (let i = 1; i < points.length; i++) {
                        if (distToSegment(wPos, points[i-1], points[i]) < 10 / zoom) {
                            pushUndoSnapshot();
                            wireways.splice(w, 1);
                            if (wireways.length === 0) wireways.push({ points: [] });
                            activeWirewayIndex = wireways.length - 1;
                            redraw();
                            autoSave();
                            return;
                        }
                    }
                }
            }
            return;
        }

        if (mode === 'select' && btn === 0) {
            if (hov && hov.type === 'device') {
                const clickedDev = devices[hov.index];
                if (!selectedDeviceIds.has(clickedDev.id)) {
                    if (!e.shiftKey && !e.ctrlKey) {
                        selectedDeviceIds.clear();
                    }
                    selectedDeviceIds.add(clickedDev.id);
                } else {
                    if (e.shiftKey || e.ctrlKey) {
                        selectedDeviceIds.delete(clickedDev.id);
                        redraw();
                        return;
                    }
                }
                
                pendingDragSnapshot = captureStateSnapshot();
                draggedPoint = { type: 'multi-move' };
                wStartPos = wPos;
                selectedDeviceOrigPositions = Object.create(null);
                selectedDeviceIds.forEach(id => {
                    const dev = devices.find(x => x.id === id);
                    if (dev) {
                        selectedDeviceOrigPositions[id] = { x: dev.x, y: dev.y };
                    }
                });
                redraw();
                return;
            } else {
                if (!e.shiftKey && !e.ctrlKey) {
                    selectedDeviceIds.clear();
                }
                draggedPoint = { type: 'selection-marquee' };
                selectionStartPos = wPos;
                selectionBox = { x1: wPos.x, y1: wPos.y, x2: wPos.x, y2: wPos.y };
                redraw();
                return;
            }
        }

        if (btn === 2 || btn === 1 || (btn === 0 && e.ctrlKey && mode !== 'select') || (!hov && mode === 'none' && !activePlaceDevice)) {
            isPanning = true; panStartX = (isTouch ? e.touches[0].clientX : e.clientX) - cameraX; panStartY = (isTouch ? e.touches[0].clientY : e.clientY) - cameraY;
            return;
        }

        // In measure/scale mode, don't intercept device clicks — let them add points normally.
        if (mode === 'drag' && btn === 0) {
            const rackHit = getRackEdgeHit(wPos);
            if (rackHit) {
                pendingDragSnapshot = captureStateSnapshot();
                draggedPoint = { type: 'rack-resize', ...rackHit };
                redraw();
                return;
            }
        }

        // In measure/scale mode, don't intercept device clicks — let them add points normally.
        // Grab devices/cables as draggedPoints if in 'drag' mode (or scale points in scale mode).
        // Also grab devices in 'none' mode for click/tap to open switch modal (but no movement).
        if (hov) {
            let canDragOrSelect = (mode === 'drag') || 
                                  (mode === 'scale' && hov.type === 'scale') || 
                                  (hov.type === 'device' && mode === 'none');
            
            if (canDragOrSelect && !((hov.type === 'device' && mode !== 'none' && mode !== 'drag') || activePlaceDevice)) {
                pendingDragSnapshot = captureStateSnapshot();
                draggedPoint = hov;
                const hovPos = hov.type === 'device' ? getDeviceDrawPos(hov.index) : hov.array[hov.index];
                dragOffsetX = hovPos.x - wPos.x;
                dragOffsetY = hovPos.y - wPos.y;
                if (hov.type === 'cable') { 
                    activeCableIndex = hov.cableIndex; 
                }
                if (hov.type === 'wireway') {
                    activeWirewayIndex = hov.wirewayIndex;
                }
                redraw();
                return;
            }
        } else if (mode === 'drag') {
            for (let c = cables.length - 1; c >= 0; c--) {
                const cableObj = cables[c];
                const fullCable = getCablePoints(cableObj) || cableObj.points;
                for (let i = 1; i < fullCable.length; i++) {
                    if (distToSegment(wPos, fullCable[i-1], fullCable[i]) < 10 / zoom) {
                        pushUndoSnapshot();
                        const insertIdx = ('fromDev' in cableObj) ? i - 1 : i;
                        cableObj.points.splice(insertIdx, 0, {x: wPos.x, y: wPos.y});
                        draggedPoint = { array: cableObj.points, index: insertIdx, type: 'cable', cableIndex: c };
                        activeCableIndex = c;
                        redraw();
                        autoSave();
                        return;
                    }
                }
            }
            for (let w = wireways.length - 1; w >= 0; w--) {
                let wirewayObj = wireways[w];
                let points = wirewayObj.points;
                for (let i = 1; i < points.length; i++) {
                    const p1 = points[i-1], p2 = points[i];
                    if (distToSegment(wPos, p1, p2) < 10 / zoom) {
                        pushUndoSnapshot();
                        wirewayObj.points.splice(i, 0, {x: wPos.x, y: wPos.y});
                        draggedPoint = { array: wirewayObj.points, index: i, type: 'wireway', wirewayIndex: w };
                        activeWirewayIndex = w;
                        redraw();
                        autoSave();
                        return;
                    }
                }
            }
        }

        if (activePlaceDevice && btn === 0) {
            pushUndoSnapshot();
            let p = applyGridSnap(wPos);
            devices.push({ id: genId(), type: activePlaceDevice, x: p.x, y: p.y, name: null });
            redraw();
            autoSave();
            return;
        }
        
        if (mode === 'scale' && scalePoints.length < 2) {
            pushUndoSnapshot();
            scalePoints.push(applyGridSnap(wPos));
            if (scalePoints.length === 2) btnSetScale.disabled = false;
            redraw();
            autoSave();
        } 
        else if (mode === 'measure') {
            pushUndoSnapshot();
            cables[activeCableIndex].points.push(applyGridSnap(wPos));
            btnNewCable.classList.remove('active');
            redraw();
            autoSave();
        }
        else if (mode === 'wireway') {
            pushUndoSnapshot();
            wireways[activeWirewayIndex].points.push(applyGridSnap(wPos));
            btnNewWireway.classList.remove('active');
            redraw();
            autoSave();
        }
    }

    function handleMove(e, isTouch) {
        if (!img.src) return;
        const wPos = getWorldPos(e);
        lastMouseWorldPos = wPos;

        if (isPanningGrid) {
            hasDragged = true;
            const clientX = isTouch ? e.touches[0].clientX : e.clientX;
            const clientY = isTouch ? e.touches[0].clientY : e.clientY;
            gridOffsetX = (clientX - gridPanStartX) / zoom;
            gridOffsetY = (clientY - gridPanStartY) / zoom;
            scheduleRedraw();
            return;
        }

        if (isPanning) { 
            hasDragged = true;
            cameraX = (isTouch ? e.touches[0].clientX : e.clientX) - panStartX; cameraY = (isTouch ? e.touches[0].clientY : e.clientY) - panStartY; scheduleRedraw(); return; 
        }
        
        if (draggedPoint) {
            if (draggedPoint.type === 'selection-marquee') {
                hasDragged = true;
                let rawPos = getWorldPos(e);
                selectionBox = { x1: selectionStartPos.x, y1: selectionStartPos.y, x2: rawPos.x, y2: rawPos.y };
                
                if (!e.shiftKey && !e.ctrlKey) {
                    selectedDeviceIds.clear();
                }
                const xMin = Math.min(selectionBox.x1, selectionBox.x2);
                const xMax = Math.max(selectionBox.x1, selectionBox.x2);
                const yMin = Math.min(selectionBox.y1, selectionBox.y2);
                const yMax = Math.max(selectionBox.y1, selectionBox.y2);
                devices.forEach(d => {
                    if (d.x >= xMin && d.x <= xMax && d.y >= yMin && d.y <= yMax) {
                        selectedDeviceIds.add(d.id);
                    }
                });
                scheduleRedraw();
                return;
            }
            if (draggedPoint.type === 'multi-move') {
                hasDragged = true;
                canvasContainer.classList.add('grabbing');
                let rawPos = getWorldPos(e);
                if (isTouch) {
                    rawPos.y -= 40 / zoom;
                }
                const dx = rawPos.x - wStartPos.x;
                const dy = rawPos.y - wStartPos.y;
                
                selectedDeviceIds.forEach(id => {
                    const dev = devices.find(x => x.id === id);
                    if (dev && selectedDeviceOrigPositions[id]) {
                        const orig = selectedDeviceOrigPositions[id];
                        const pos = applyGridSnap({ x: orig.x + dx, y: orig.y + dy });
                        dev.x = pos.x;
                        dev.y = pos.y;
                    }
                });
                scheduleRedraw();
                return;
            }

            if (draggedPoint.type === 'rack-resize') {
                hasDragged = true;
                let rawPos = getWorldPos(e);
                if (isTouch) {
                    rawPos.y -= 40 / zoom;
                }
                let pos = applyGridSnap(rawPos);
                const d = devices[draggedPoint.index];
                const edges = draggedPoint.edges;
                const fixed = draggedPoint.fixed;
                
                canvasContainer.style.cursor = getResizeCursor(edges);
                canvasContainer.classList.add('grabbing');
                
                if (edges.left) {
                    const newLeft = pos.x;
                    const newWidth = Math.max(30, fixed.x - newLeft);
                    d.width = newWidth;
                    d.x = fixed.x - newWidth / 2;
                } else if (edges.right) {
                    const newRight = pos.x;
                    const newWidth = Math.max(30, newRight - fixed.x);
                    d.width = newWidth;
                    d.x = fixed.x + newWidth / 2;
                }
                
                if (edges.top) {
                    const newTop = pos.y;
                    const newHeight = Math.max(30, fixed.y - newTop);
                    d.height = newHeight;
                    d.y = fixed.y - newHeight / 2;
                } else if (edges.bottom) {
                    const newBottom = pos.y;
                    const newHeight = Math.max(30, newBottom - fixed.y);
                    d.height = newHeight;
                    d.y = fixed.y + newHeight / 2;
                }
                
                scheduleRedraw();
                return;
            }

            let canDrag = (mode === 'drag') || (mode === 'scale' && draggedPoint.type === 'scale');
            if (canDrag) {
                hasDragged = true;
                canvasContainer.classList.add('grabbing');
                let rawPos = getWorldPos(e);
                
                // Offset point above finger on touch devices to improve visibility
                if (isTouch) {
                    rawPos.y -= 40 / zoom;
                }
                
                rawPos.x += dragOffsetX;
                rawPos.y += dragOffsetY;
                
                let pos = applyGridSnap(rawPos);
                
                if (draggedPoint.type === 'cable') {
                    pos = getSnappedPos(pos);
                }
                draggedPoint.array[draggedPoint.index].x = pos.x; 
                draggedPoint.array[draggedPoint.index].y = pos.y;
                if (draggedPoint.type === 'scale' && pixelsPerMeter) { pixelsPerMeter = null; mode = 'scale'; btnScale.classList.add('active'); btnSetScale.disabled = false; }
                scheduleRedraw();
            }
        } else if (mode === 'drag') {
            const rackHit = getRackEdgeHit(wPos);
            canvasContainer.style.cursor = rackHit ? getResizeCursor(rackHit.edges) : '';
        } else if (mode === 'connect' && connectState.devA) {
            scheduleRedraw();
        }
    }

    function handleEnd() {
        isPanning = false;
        isPanningGrid = false;
        canvasContainer.classList.remove('grabbing');
        
        if (mode === 'select') {
            if (draggedPoint) {
                if (draggedPoint.type === 'selection-marquee') {
                    selectionBox = null;
                    selectionStartPos = null;
                }
                if (draggedPoint.type === 'multi-move' && hasDragged) {
                    if (pendingDragSnapshot) {
                        pushUndoSnapshot(pendingDragSnapshot);
                    }
                    autoSave();
                } else if (hasDragged) {
                    autoSave();
                }
            }
            draggedPoint = null;
            pendingDragSnapshot = null;
            redraw();
            return;
        }
        
        // Single click (no drag) on a device → open device modal
        if (draggedPoint && !hasDragged && draggedPoint.type === 'device' && !activePlaceDevice && mode === 'none') {
            const dev = devices[draggedPoint.index];
            draggedPoint = null;
            pendingDragSnapshot = null;
            redraw();
            openSwitchModal(dev);
            return;
        }
        if (hasDragged && pendingDragSnapshot) {
            pushUndoSnapshot(pendingDragSnapshot);
        }
        if (draggedPoint || hasDragged) autoSave();
        draggedPoint = null;
        pendingDragSnapshot = null;
        redraw();
    }

    canvasContainer.addEventListener('mousedown', e => handleStart(e, false));
    canvasContainer.addEventListener('mousemove', e => handleMove(e, false));
    window.addEventListener('mouseup', handleEnd);

    // Single-click on a switch device opens the switch panel modal (handled in handleEnd)

    canvasContainer.addEventListener('touchstart', e => { 
        if(e.touches.length === 1) {
            e.preventDefault(); 
            handleStart(e, true); 
        } else if (e.touches.length === 2) {
            e.preventDefault();
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            lastPinchDistance = Math.hypot(dx, dy);
            lastPinchCenter = {
                x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
                y: (e.touches[0].clientY + e.touches[1].clientY) / 2
            };
            isPanning = false; 
        }
    }, {passive: false});

    canvasContainer.addEventListener('touchmove', e => { 
        if(e.touches.length === 1) {
            e.preventDefault(); 
            handleMove(e, true); 
        } else if (e.touches.length === 2 && lastPinchDistance) {
            e.preventDefault();
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            const dist = Math.hypot(dx, dy);
            const zFactor = dist / lastPinchDistance;
            
            const r = canvas.getBoundingClientRect();
            const currentCenter = {
                x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
                y: (e.touches[0].clientY + e.touches[1].clientY) / 2
            };

            const mxPrev = lastPinchCenter.x - r.left;
            const myPrev = lastPinchCenter.y - r.top;
            
            const wx = (mxPrev - cameraX) / zoom;
            const wy = (myPrev - cameraY) / zoom;
            
            const newZoom = Math.max(0.05, Math.min(zoom * zFactor, 15));
            
            const mxCurr = currentCenter.x - r.left;
            const myCurr = currentCenter.y - r.top;

            cameraX = mxCurr - wx * newZoom;
            cameraY = myCurr - wy * newZoom;
            zoom = newZoom;

            lastPinchDistance = dist;
            lastPinchCenter = currentCenter;
            
            scheduleRedraw();
        }
    }, {passive: false});

    window.addEventListener('touchend', e => { 
        if (e.touches.length < 2) {
            lastPinchDistance = null;
            lastPinchCenter = null;
        }
        if (e.touches.length === 0) {
            handleEnd(); 
        }
    });

    function applyGridSnap(pos) {
        if (!snapToGrid) return pos;
        const gridSize = 20;
        return {
            x: Math.round((pos.x - gridOffsetX) / gridSize) * gridSize + gridOffsetX,
            y: Math.round((pos.y - gridOffsetY) / gridSize) * gridSize + gridOffsetY
        };
    }

    // Snapping helper
    function getSnappedPos(pos) {
        const snapDist = 15 / zoom;
        for (let i = devices.length - 1; i >= 0; i--) {
            const dPos = getDeviceDrawPos(i);
            if (Math.hypot(dPos.x - pos.x, dPos.y - pos.y) < snapDist) return { x: dPos.x, y: dPos.y };
        }
        for (let s of scalePoints) {
            if (Math.hypot(s.x - pos.x, s.y - pos.y) < snapDist) return { x: s.x, y: s.y };
        }
        return pos;
    }

    // Auto-save logic
    function saveFloorplanImage() {
        if (!autoSaveEnabled || !img.src) return;
        try {
            if (img.src.length < 1500000) {
                localStorage.setItem(STORAGE_IMG_KEY, img.src);
            } else {
                localStorage.removeItem(STORAGE_IMG_KEY);
            }
        } catch (err) {
            console.warn('Image auto-save failed:', err);
        }
    }

    function autoSave() {
        if (autoSaveTimer !== null) {
            clearTimeout(autoSaveTimer);
            autoSaveTimer = null;
        }
        if (!autoSaveEnabled || !img.src) return;
        const data = { scalePoints, cables, devices, wireways, pixelsPerMeter, zoom, cameraX, cameraY, gridOffsetX, gridOffsetY };
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (err) {
            console.warn('Auto-save failed (storage quota or unavailable):', err);
        }
    }

    function scheduleAutoSave() {
        if (!autoSaveEnabled || !img.src) return;
        if (autoSaveTimer !== null) clearTimeout(autoSaveTimer);
        autoSaveTimer = setTimeout(() => {
            autoSaveTimer = null;
            autoSave();
        }, 350);
    }

    window.addEventListener('beforeunload', () => {
        if (autoSaveTimer !== null) autoSave();
    });

    // Gombok logika & UNDO
    btnSetScale.addEventListener('click', () => {
        if (scalePoints.length !== 2) return;
        const val = prompt(t('promptMeter'));
        if (val) {
            const parsed = parseFloat(val.replace(',', '.'));
            if (!isNaN(parsed) && parsed > 0) {
                pushUndoSnapshot();
                pixelsPerMeter = Math.hypot(scalePoints[1].x - scalePoints[0].x, scalePoints[1].y - scalePoints[0].y) / parsed;
                btnSetScale.disabled = true;
                setMode('none');
                btnMeasure.disabled = btnNewCable.disabled = btnConnect.disabled = btnDelete.disabled = btnClear.disabled = selectCableType.disabled = btnDrag.disabled = btnSelect.disabled = btnWireway.disabled = btnNewWireway.disabled = false;
                updateUndoButton();
                redraw();
                autoSave();
            } else {
                alert(t('statScaleInvalid'));
            }
        }
    });

    btnScale.addEventListener('click', () => {
        if (scalePoints.length > 0 || pixelsPerMeter !== null) pushUndoSnapshot();
        scalePoints = [];
        pixelsPerMeter = null;
        btnSetScale.disabled = true;
        setMode('scale');
        redraw();
    });

    btnMeasure.addEventListener('click', () => {
        setMode('measure');
        redraw();
    });

    btnNewCable.addEventListener('click', () => {
        setMode('measure');
        if (cables[activeCableIndex].points.length > 0) {
            pushUndoSnapshot();
            cables.push({ type: selectCableType.value || 'cat6', points: [] });
            activeCableIndex = cables.length - 1;
            btnNewCable.classList.add('active');
            autoSave();
        }
        redraw();
    });

    btnConnect.addEventListener('click', () => {
        setMode('connect');
        connectState = { devA: null, portA: null, points: [] };
        redraw();
    });

    btnDelete.addEventListener('click', () => {
        if (mode === 'select') {
            if (selectedDeviceIds.size > 0) {
                deleteSelectedDevices();
            }
            return;
        }
        setMode(mode === 'delete' ? 'none' : 'delete');
        redraw();
    });

    btnDrag.addEventListener('click', () => {
        setMode(mode === 'drag' ? 'none' : 'drag');
        redraw();
    });

    btnSelect.addEventListener('click', () => {
        setMode(mode === 'select' ? 'none' : 'select');
        redraw();
    });

    btnWireway.addEventListener('click', () => {
        setMode(mode === 'wireway' ? 'none' : 'wireway');
        redraw();
    });

    btnNewWireway.addEventListener('click', () => {
        setMode('wireway');
        if (wireways[activeWirewayIndex].points.length > 0) {
            pushUndoSnapshot();
            wireways.push({ points: [] });
            activeWirewayIndex = wireways.length - 1;
            btnNewWireway.classList.add('active');
            autoSave();
        }
        redraw();
    });

    function deleteSelectedDevices() {
        if (selectedDeviceIds.size === 0) return;
        pushUndoSnapshot();
        const idsToDelete = [...selectedDeviceIds];
        idsToDelete.forEach(devId => removeDeviceAndLinks(devId));
        selectedDeviceIds.clear();
        redraw();
        autoSave();
    }

    // Globális Undo
    btnUndo.addEventListener('click', () => {
        if (actionHistory.length === 0) return;
        redoHistory.push(captureStateSnapshot());
        const prevState = actionHistory.pop();
        restoreStateSnapshot(prevState);
        redraw();
        autoSave();
    });

    // Globális Redo
    function performRedo() {
        if (redoHistory.length === 0) return;
        actionHistory.push(captureStateSnapshot());
        const nextState = redoHistory.pop();
        restoreStateSnapshot(nextState);
        redraw();
        autoSave();
    }

    btnClear.addEventListener('click', () => {
        if (confirm(t('confirmClear'))) {
            pushUndoSnapshot();
            scalePoints = [];
            cables = [{ type: selectCableType.value || 'cat6', points: [] }];
            devices = [];
            wireways = [{ points: [] }];
            activeCableIndex = 0;
            activeWirewayIndex = 0;
            pixelsPerMeter = null;
            gridOffsetX = 0;
            gridOffsetY = 0;
            selectedDeviceIds.clear();
            btnSetScale.disabled = true;
            redraw();
            autoSave();
        }
    });

    btnExportPlan.addEventListener('click', () => {
        if (!img.src) return;
        const data = { scalePoints, cables, devices, wireways, pixelsPerMeter, zoom, cameraX, cameraY, gridOffsetX, gridOffsetY };
        data.imgSrc = img.src;
        const jsonStr = JSON.stringify(data);
        const blob = new Blob([jsonStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "workspace.plan";
        a.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    });

    btnExport.addEventListener('click', () => {
        if (!img.src) return;
        const prevMode = mode;
        mode = 'export';
        redraw();
        
        try {
            const { jsPDF } = window.jspdf;
            const pdfW = canvasCssW || canvas.width;
            const pdfH = canvasCssH || canvas.height;
            const orientation = pdfW > pdfH ? 'landscape' : 'portrait';
            const pdf = new jsPDF({
                orientation: orientation,
                unit: 'px',
                format: [pdfW, pdfH]
            });
            const imgData = canvas.toDataURL('image/jpeg', 0.95);
            pdf.addImage(imgData, 'JPEG', 0, 0, pdfW, pdfH);
            pdf.save('floorplan_measured.pdf');
        } catch (e) {
            console.error("PDF export failed, falling back to PNG", e);
            const link = document.createElement('a');
            link.download = 'floorplan_measured.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }
        
        mode = prevMode;
        redraw();
    });

    document.getElementById('btn-wipe-storage').addEventListener('click', () => {
        if (!confirm(t('confirmWipeStorage'))) return;
        if (autoSaveTimer !== null) {
            clearTimeout(autoSaveTimer);
            autoSaveTimer = null;
        }
        try {
            localStorage.removeItem(STORAGE_KEY);
            localStorage.removeItem(STORAGE_IMG_KEY);
        } catch (err) { console.warn(err); }
        img = new Image();
        scalePoints = [];
        cables = [{ type: selectCableType.value || 'cat6', points: [] }];
        devices = [];
        wireways = [{ points: [] }];
        actionHistory = [];
        redoHistory = [];
        activeCableIndex = 0;
        activeWirewayIndex = 0;
        pixelsPerMeter = null;
        gridOffsetX = 0;
        gridOffsetY = 0;
        pendingPlanData = null;
        setMode('none');
        btnScale.disabled = true;
        btnSetScale.disabled = true;
        btnExport.disabled = true;
        btnExportPlan.disabled = true;
        btnClear.disabled = true;
        updateUndoButton();
        document.getElementById('upload').value = '';
        redraw();
    });

    document.getElementById('btn-autosave').addEventListener('click', (e) => {
        autoSaveEnabled = !autoSaveEnabled;
        e.currentTarget.classList.toggle('active', autoSaveEnabled);
        if (!autoSaveEnabled) {
            if (autoSaveTimer !== null) {
                clearTimeout(autoSaveTimer);
                autoSaveTimer = null;
            }
        } else if (img.src) {
            saveFloorplanImage();
            autoSave();
        }
    });

    document.getElementById('btn-toggle-layers').addEventListener('click', () => {
        showLayers = !showLayers;
        document.getElementById('layers-icon').innerHTML = showLayers ? ICON_EYE : ICON_EYE_OFF;
        redraw();
    });

    document.getElementById('btn-snap-grid').addEventListener('click', (e) => {
        snapToGrid = !snapToGrid;
        e.currentTarget.classList.toggle('active', snapToGrid);
        redraw();
    });

    document.getElementById('btn-zoom-in').addEventListener('click', () => {
        if (!img.src) return;
        zoom = Math.min(zoom * 1.2, 15);
        redraw();
        autoSave();
    });

    document.getElementById('btn-zoom-out').addEventListener('click', () => {
        if (!img.src) return;
        zoom = Math.max(zoom * 0.8, 0.05);
        redraw();
        autoSave();
    });

    document.getElementById('btn-zoom-reset').addEventListener('click', () => {
        if (!img.src) return;
        zoom = Math.min(canvasCssW / img.width, canvasCssH / img.height) * 0.95;
        cameraX = (canvasCssW - img.width * zoom) / 2;
        cameraY = (canvasCssH - img.height * zoom) / 2;
        redraw();
        autoSave();
    });

    // --- RAJZOLÓ MOTOR ---
    function redraw() {
        if (!canvas) return;
        if (redrawRafId !== null) {
            cancelAnimationFrame(redrawRafId);
            redrawRafId = null;
        }
        ctx.setTransform(canvasDpr, 0, 0, canvasDpr, 0, 0);
        ctx.clearRect(0, 0, canvasCssW, canvasCssH);
        
        ctx.fillStyle = cachedCanvasBg;
        ctx.fillRect(0, 0, canvasCssW, canvasCssH);

        const isExport = (mode === 'export');
        const layout = computeDeviceLayout();

        // Kamera transzformáció megnyitása (alaprajz + térbeli objektumok)
        ctx.save();
        ctx.translate(cameraX, cameraY);
        ctx.scale(zoom, zoom);

        if (img.src) {
            ctx.drawImage(img, 0, 0);
        }

        if (snapToGrid && !isExport && img.src) {
            ctx.save();
            ctx.strokeStyle = 'rgba(120, 120, 120, 0.4)';
            ctx.lineWidth = 1 / zoom;
            const gridSize = 20;
            const dx = ((gridOffsetX % gridSize) + gridSize) % gridSize;
            const dy = ((gridOffsetY % gridSize) + gridSize) % gridSize;
            const viewLeft = Math.max(0, -cameraX / zoom);
            const viewRight = Math.min(img.width, (canvasCssW - cameraX) / zoom);
            const viewTop = Math.max(0, -cameraY / zoom);
            const viewBottom = Math.min(img.height, (canvasCssH - cameraY) / zoom);
            if (viewLeft <= viewRight && viewTop <= viewBottom) {
                const startX = dx + Math.max(0, Math.floor((viewLeft - dx) / gridSize)) * gridSize;
                const startY = dy + Math.max(0, Math.floor((viewTop - dy) / gridSize)) * gridSize;
                ctx.beginPath();
                for (let x = startX; x <= viewRight; x += gridSize) { ctx.moveTo(x, viewTop); ctx.lineTo(x, viewBottom); }
                for (let y = startY; y <= viewBottom; y += gridSize) { ctx.moveTo(viewLeft, y); ctx.lineTo(viewRight, y); }
                ctx.stroke();
            }
            ctx.restore();
        }

        // Méretarány vonalak rajzolása
        if (scalePoints.length > 0) {
            ctx.strokeStyle = '#1e66f5'; ctx.lineWidth = 4 / zoom; ctx.fillStyle = 'white';
            if (scalePoints.length === 2) { ctx.beginPath(); ctx.moveTo(scalePoints[0].x, scalePoints[0].y); ctx.lineTo(scalePoints[1].x, scalePoints[1].y); ctx.stroke(); }
            scalePoints.forEach((p, i) => { ctx.globalAlpha = draggedPoint && hasDragged && draggedPoint.type === 'scale' && draggedPoint.index === i && !isExport ? 0.4 : 1.0; ctx.beginPath(); ctx.arc(p.x, p.y, 8 / zoom, 0, 2*Math.PI); ctx.fill(); ctx.stroke(); ctx.globalAlpha = 1.0; });
        }

        let totalMeters = 0, activeLen = 0;
        const typeLengths = pixelsPerMeter ? Object.create(null) : null;

        if (showLayers) {
            // Rajzoljuk le a nyomvonalakat (wireways) legelőször, hogy a kábelek és eszközök rákerüljenek
            wireways.forEach((wirewayObj, wIndex) => {
                let points = wirewayObj.points;
                if (points.length === 0) return;

                // 1. Vastag külső szürke vonal
                ctx.strokeStyle = '#7c7f93'; 
                ctx.lineWidth = (wIndex === activeWirewayIndex && mode === 'wireway' ? 10 : 8) / zoom;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                ctx.beginPath();
                ctx.moveTo(points[0].x, points[0].y);
                for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y);
                ctx.stroke();

                // 2. Belső fehér szaggatott vonal csatorna kinézethez
                ctx.strokeStyle = '#f4f4f7';
                ctx.lineWidth = 2 / zoom;
                ctx.setLineDash([6, 6]);
                ctx.beginPath();
                ctx.moveTo(points[0].x, points[0].y);
                for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y);
                ctx.stroke();
                ctx.setLineDash([]); // reset line dash

                // Pontok/húzókák kirajzolása wireway vagy drag módban
                if (mode === 'wireway' || mode === 'drag') {
                    points.forEach((p, i) => {
                        ctx.globalAlpha = draggedPoint && hasDragged && draggedPoint.type === 'wireway' && draggedPoint.wirewayIndex === wIndex && draggedPoint.index === i && !isExport ? 0.4 : 1.0;
                        ctx.strokeStyle = '#7c7f93';
                        ctx.lineWidth = 2 / zoom;
                        ctx.fillStyle = wIndex === activeWirewayIndex && mode === 'wireway' ? '#a6da95' : 'white';
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, (wIndex === activeWirewayIndex && mode === 'wireway' ? 6 : 4) / zoom, 0, 2*Math.PI);
                        ctx.fill();
                        ctx.stroke();
                        ctx.globalAlpha = 1.0;
                    });
                }
            });

            // Kábelek rajzolása + hossz-számítás egyetlen menetben
            cables.forEach((cableObj, cIndex) => {
                const isSmart = ('fromDev' in cableObj);
                let cable = cableObj.points;
                if (isSmart) {
                    const p1 = layout.drawPosById.get(cableObj.fromDev);
                    const p2 = layout.drawPosById.get(cableObj.toDev);
                    if (!p1 || !p2) return;
                    cable = [p1, ...cableObj.points, p2];
                }
                if (cable.length === 0) return;

                if (pixelsPerMeter) {
                    const cType = cableObj.type || 'default';
                    if (!Object.hasOwn(typeLengths, cType)) typeLengths[cType] = 0;
                    for (let i = 1; i < cable.length; i++) {
                        const seg = Math.hypot(cable[i].x - cable[i - 1].x, cable[i].y - cable[i - 1].y) / pixelsPerMeter;
                        totalMeters += seg;
                        typeLengths[cType] += seg;
                        if (cIndex === activeCableIndex) activeLen += seg;
                    }
                }

                const typeColor = Object.hasOwn(CABLE_TYPES, cableObj.type) ? CABLE_TYPES[cableObj.type].color : '#f5bde6';
                ctx.strokeStyle = typeColor; ctx.lineWidth = (cIndex === activeCableIndex ? 5 : 3) / zoom; ctx.fillStyle = 'white';
                ctx.beginPath(); ctx.moveTo(cable[0].x, cable[0].y);
                for (let i = 1; i < cable.length; i++) ctx.lineTo(cable[i].x, cable[i].y); ctx.stroke();
                
                if (!isSmart) {
                    cable.forEach((p, i) => { ctx.globalAlpha = draggedPoint && hasDragged && draggedPoint.type === 'cable' && draggedPoint.cableIndex === cIndex && draggedPoint.index === i && !isExport ? 0.4 : 1.0; ctx.beginPath(); ctx.arc(p.x, p.y, (cIndex === activeCableIndex ? 6 : 4) / zoom, 0, 2*Math.PI); ctx.fill(); ctx.stroke(); ctx.globalAlpha = 1.0; });
                } else {
                    cableObj.points.forEach((p, i) => { ctx.globalAlpha = draggedPoint && hasDragged && draggedPoint.type === 'cable' && draggedPoint.cableIndex === cIndex && draggedPoint.index === i && !isExport ? 0.4 : 1.0; ctx.beginPath(); ctx.arc(p.x, p.y, (cIndex === activeCableIndex ? 6 : 4) / zoom, 0, 2*Math.PI); ctx.fill(); ctx.stroke(); ctx.globalAlpha = 1.0; });
                }
            });

            // Connect mode preview path
            if (mode === 'connect' && connectState.devA && lastMouseWorldPos) {
                const devAPos = layout.drawPosById.get(connectState.devA);
                if (devAPos) {
                    ctx.strokeStyle = '#a6da95';
                    ctx.lineWidth = 4 / zoom;
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';
                    ctx.setLineDash([4, 4]);
                    ctx.beginPath();
                    ctx.moveTo(devAPos.x, devAPos.y);
                    const pts = connectState.points || [];
                    pts.forEach(p => ctx.lineTo(p.x, p.y));
                    ctx.lineTo(lastMouseWorldPos.x, lastMouseWorldPos.y);
                    ctx.stroke();
                    ctx.setLineDash([]);
                    
                    pts.forEach(p => {
                        ctx.strokeStyle = '#a6da95';
                        ctx.fillStyle = 'white';
                        ctx.lineWidth = 2 / zoom;
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, 4 / zoom, 0, 2*Math.PI);
                        ctx.fill();
                        ctx.stroke();
                    });
                }
            }

            // Eszközök rajzolása
            const drawDevice = (d, i) => {
                const pos = layout.drawPosByIndex[i];
                ctx.save(); ctx.translate(pos.x, pos.y);
                let color = Object.hasOwn(deviceColors, d.type) ? deviceColors[d.type] : '#8aadf4';
                const shortLabel = d.name || (Object.hasOwn(deviceShortnames, d.type) ? deviceShortnames[d.type] : 'DEV');
                const radius = 15 / zoom;

                let isCurrentDragged = draggedPoint && hasDragged && draggedPoint.index === i;
                let draggedType = draggedPoint ? draggedPoint.type : '';
                ctx.globalAlpha = isCurrentDragged && (draggedType === 'device' || draggedType === 'rack-resize') && !isExport ? 0.4 : 1.0;
                
                const stackedRack = layout.stackedRackByIndex[i];

                if (d.type === 'rack') {
                    const rw = d.width || 50;
                    const rh = d.height || 110;
                    
                    if (selectedDeviceIds.has(d.id)) {
                        ctx.strokeStyle = 'rgba(30, 102, 245, 0.4)';
                        ctx.lineWidth = 6 / zoom;
                        ctx.beginPath();
                        ctx.roundRect(-rw/2 - 3/zoom, -rh/2 - 3/zoom, rw + 6/zoom, rh + 6/zoom, 4 / zoom);
                        ctx.stroke();
                    }

                    ctx.fillStyle = theme === 'light' ? '#e6e9ef' : '#1e2030';
                    ctx.strokeStyle = '#494d64';
                    ctx.lineWidth = 3 / zoom;
                    ctx.beginPath();
                    ctx.roundRect(-rw/2, -rh/2, rw, rh, 4 / zoom);
                    ctx.fill();
                    ctx.stroke();

                    ctx.strokeStyle = '#bcc0cc';
                    ctx.lineWidth = 1.5 / zoom;
                    ctx.beginPath();
                    ctx.moveTo(-rw/2 + 4/zoom, -rh/2); ctx.lineTo(-rw/2 + 4/zoom, rh/2);
                    ctx.moveTo(rw/2 - 4/zoom, -rh/2); ctx.lineTo(rw/2 - 4/zoom, rh/2);
                    ctx.stroke();

                    ctx.fillStyle = theme === 'light' ? '#4c4f69' : '#cad3f5';
                    ctx.font = `bold ${10 / zoom}px 'Segoe UI', sans-serif`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    ctx.fillText(shortLabel, 0, -rh/2 - 2/zoom);

                    if (mode === 'drag' && !isExport) {
                        ctx.strokeStyle = '#1e66f5';
                        ctx.lineWidth = 1 / zoom;
                        ctx.setLineDash([4 / zoom, 4 / zoom]);
                        ctx.beginPath();
                        ctx.roundRect(-rw/2 - 2/zoom, -rh/2 - 2/zoom, rw + 4/zoom, rh + 4/zoom, 4 / zoom);
                        ctx.stroke();
                        ctx.setLineDash([]);
                    }
                } else if (stackedRack) {
                    const rw = stackedRack.width || 50;
                    const uw = rw - 10;
                    const uh = 14;

                    if (selectedDeviceIds.has(d.id)) {
                        ctx.strokeStyle = 'rgba(30, 102, 245, 0.4)';
                        ctx.lineWidth = 4 / zoom;
                        ctx.beginPath();
                        ctx.roundRect(-uw/2 - 2/zoom, -uh/2 - 2/zoom, uw + 4/zoom, uh + 4/zoom, 2 / zoom);
                        ctx.stroke();
                    }

                    ctx.fillStyle = color;
                    ctx.strokeStyle = theme === 'light' ? '#4c4f69' : '#11111b';
                    ctx.lineWidth = 1.5 / zoom;

                    ctx.beginPath();
                    ctx.roundRect(-uw/2, -uh/2, uw, uh, 2 / zoom);
                    ctx.fill();
                    ctx.stroke();

                    ctx.fillStyle = '#bcc0cc';
                    ctx.beginPath();
                    ctx.arc(-uw/2 - 2/zoom, 0, 1/zoom, 0, 2*Math.PI);
                    ctx.arc(uw/2 + 2/zoom, 0, 1/zoom, 0, 2*Math.PI);
                    ctx.fill();

                    ctx.fillStyle = '#11111b';
                    ctx.font = `bold ${9 / zoom}px 'Segoe UI', sans-serif`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(shortLabel, 0, 0.5 / zoom);
                } else {
                    if (selectedDeviceIds.has(d.id)) {
                        ctx.strokeStyle = 'rgba(30, 102, 245, 0.4)';
                        ctx.lineWidth = 6 / zoom;
                        ctx.beginPath();
                        ctx.arc(0, 0, radius + 3/zoom, 0, 2 * Math.PI);
                        ctx.stroke();
                    }

                    ctx.fillStyle = color;
                    ctx.strokeStyle = theme === 'light' ? '#ffffff' : '#11111b';
                    ctx.lineWidth = 2.5 / zoom;
                    
                    ctx.beginPath();
                    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
                    ctx.fill(); 
                    ctx.stroke();

                    ctx.fillStyle = '#11111b'; 
                    ctx.font = `bold ${11 / zoom}px 'Segoe UI', sans-serif`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(shortLabel, 0, 0.5 / zoom);
                }

                ctx.restore();
            };

            devices.forEach((d, i) => {
                if (d.type === 'rack') drawDevice(d, i);
            });
            devices.forEach((d, i) => {
                if (d.type !== 'rack') drawDevice(d, i);
            });

            if (mode === 'select' && selectionBox) {
                const x = Math.min(selectionBox.x1, selectionBox.x2);
                const y = Math.min(selectionBox.y1, selectionBox.y2);
                const w = Math.abs(selectionBox.x2 - selectionBox.x1);
                const h = Math.abs(selectionBox.y2 - selectionBox.y1);
                
                ctx.fillStyle = 'rgba(30, 102, 245, 0.15)';
                ctx.strokeStyle = '#1e66f5';
                ctx.lineWidth = 1.5 / zoom;
                ctx.beginPath();
                ctx.rect(x, y, w, h);
                ctx.fill();
                ctx.stroke();
            }
        } else if (pixelsPerMeter) {
            cables.forEach((cableObj, cIndex) => {
                let cable = cableObj.points;
                if ('fromDev' in cableObj) {
                    const p1 = layout.drawPosById.get(cableObj.fromDev);
                    const p2 = layout.drawPosById.get(cableObj.toDev);
                    if (!p1 || !p2) return;
                    cable = [p1, ...cableObj.points, p2];
                }
                const cType = cableObj.type || 'default';
                if (!Object.hasOwn(typeLengths, cType)) typeLengths[cType] = 0;
                for (let i = 1; i < cable.length; i++) {
                    const seg = Math.hypot(cable[i].x - cable[i - 1].x, cable[i].y - cable[i - 1].y) / pixelsPerMeter;
                    totalMeters += seg;
                    typeLengths[cType] += seg;
                    if (cIndex === activeCableIndex) activeLen += seg;
                }
            });
        }

        // Close camera transform
        ctx.restore();

        // Update measurements DOM only when values or language actually change
        if (pixelsPerMeter) {
            const activeKeys = Object.keys(typeLengths).filter(k => typeLengths[k] > 0);
            const measKey = `${lang}|${activeCableIndex}|${activeLen.toFixed(2)}|${totalMeters.toFixed(2)}|${activeKeys.map(k => k + ':' + typeLengths[k].toFixed(2)).join(',')}`;
            if (measKey !== lastMeasurementsKey) {
                lastMeasurementsKey = measKey;
                const makeMetricSpan = (colorVar, labelText, valueText) => {
                    const span = document.createElement('span');
                    span.style.color = colorVar;
                    span.style.marginRight = '15px';
                    span.appendChild(document.createTextNode(labelText + ': '));
                    const b = document.createElement('b');
                    b.textContent = valueText;
                    span.appendChild(b);
                    return span;
                };

                const typesWrap = document.createElement('span');
                typesWrap.style.fontSize = '0.85em';
                typesWrap.appendChild(document.createTextNode('('));
                activeKeys.forEach((k, idx) => {
                    if (idx > 0) typesWrap.appendChild(document.createTextNode(' | '));
                    const spec = Object.hasOwn(CABLE_TYPES, k) ? CABLE_TYPES[k] : null;
                    const sp = document.createElement('span');
                    sp.style.color = spec ? spec.color : '#f5bde6';
                    sp.textContent = `${spec ? spec.name : k}: ${typeLengths[k].toFixed(2)}m`;
                    typesWrap.appendChild(sp);
                });
                typesWrap.appendChild(document.createTextNode(')'));

                measurements.replaceChildren(
                    makeMetricSpan('var(--danger)', t('textActive', activeCableIndex + 1), `${activeLen.toFixed(2)} m`),
                    makeMetricSpan('var(--success)', t('textTotal'), `${totalMeters.toFixed(2)} m`),
                    typesWrap
                );
            }
        } else if (lastMeasurementsKey !== '') {
            lastMeasurementsKey = '';
            measurements.replaceChildren();
        }
    }

    function loadSavedWorkspace() {
        try {
            const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
            if (!data || typeof data !== 'object' || Array.isArray(data)) return;
            const storedImg = localStorage.getItem(STORAGE_IMG_KEY) || data.imgSrc;
            if (storedImg && isSafeRasterDataUrl(storedImg)) {
                img.onload = () => { resizeCanvas(); restoreState(data, true); };
                img.src = storedImg;
            } else {
                restoreState(data, false);
            }
        } catch (e) {
            console.error('Error loading saved workspace', e);
        }
    }

    // Call load on startup
    resizeCanvas();
    loadSavedWorkspace();
    updateLanguageUI();
    document.getElementById('btn-mobile-menu').addEventListener('click', () => {
        document.getElementById('controls').classList.toggle('open');
    });

    document.querySelectorAll('#controls button').forEach(btn => {
        btn.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                document.getElementById('controls').classList.remove('open');
            }
        });
    });

    // Smart Connections Popup
    const portPopup = document.getElementById('port-selector-popup');
    const portPopupGrid = document.getElementById('port-popup-grid');
    
    function showPortPopup(devIndex, wx, wy) {
        const dev = devices[devIndex];
        if (!dev.id) dev.id = genId();
        if (!dev.ports) dev.ports = {};
        dev.portCount = clampPortCount(dev.portCount, getDefaultPortCount(dev.type));
        
        portPopupGrid.innerHTML = '';
        for (let i = 1; i <= dev.portCount; i++) {
            const p = dev.ports[i] || {};
            const btn = document.createElement('div');
            btn.className = 'port-popup-btn' + (p.conn ? ' used' : '');
            btn.innerText = i;
            btn.onclick = () => {
                if (p.conn) return; // already used
                hidePortPopup();
                if (!connectState.devA) {
                    connectState.devA = dev.id;
                    connectState.portA = i;
                    connectState.points = [];
                } else {
                    if (connectState.devA === dev.id) return; // same device
                    pushUndoSnapshot();
                    // Create smart cable
                    cables.push({
                        type: selectCableType.value || 'cat6',
                        fromDev: connectState.devA, fromPort: connectState.portA,
                        toDev: dev.id, toPort: i,
                        points: connectState.points || []
                    });
                    // Update connection strings
                    const dA = devices.find(d => d.id === connectState.devA);
                    if (!dev.ports[i]) dev.ports[i] = {};
                    if (dA) {
                        if (!dA.ports[connectState.portA]) dA.ports[connectState.portA] = {};
                        dA.ports[connectState.portA].conn = `${dev.type.toUpperCase()} port ${i}`;
                    }
                    dev.ports[i].conn = `${dA ? dA.type.toUpperCase() : '?'} port ${connectState.portA}`;
                    setMode('none');
                    redraw(); autoSave();
                }
            };
            portPopupGrid.appendChild(btn);
        }
        // Position relative to viewport using canvas bounding rect
        const rect = canvas.getBoundingClientRect();
        let cx = rect.left + wx * zoom + cameraX;
        let cy = rect.top + wy * zoom + cameraY;
        portPopup.classList.add('open');
        const popupW = portPopup.offsetWidth || 270;
        const popupH = portPopup.offsetHeight || 200;
        cx = Math.max(8, Math.min(cx, window.innerWidth - popupW - 8));
        cy = Math.max(8, Math.min(cy, window.innerHeight - popupH - 8));
        portPopup.style.left = cx + 'px';
        portPopup.style.top = cy + 'px';
    }

    function hidePortPopup() { portPopup.classList.remove('open'); }
    
    // Hide popup on canvas move/pan
    canvas.addEventListener('mousedown', () => { if(mode !== 'connect') hidePortPopup(); });

function distToSegment(p, v, w) {
    const l2 = (w.x - v.x)**2 + (w.y - v.y)**2;
    if (l2 == 0) return Math.hypot(p.x - v.x, p.y - v.y);
    let t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(p.x - (v.x + t * (w.x - v.x)), p.y - (v.y + t * (w.y - v.y)));
}
