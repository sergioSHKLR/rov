# ROV Maintainer Training Curriculum

Self-contained Progressive Web App (single HTML file) for self-led refresher and practical skills training aimed at ROV (Remotely Operated Vehicle) maintainer / technician roles.

## Curriculum (32 curated lessons)

- **Module 1: Soldering** — IPC-J-STD-001 techniques, terminals, SMD/fine-pitch (John Gammell)
- **Module 2: Board Rework** — PCB pad/trace reconstruction, milling, IPC-7711/7721 (Circuit Technology Center, Mr SolderFix)
- **Module 3: Hydraulics & Control** — Relays, servo/proportional valves, Swagelok/Parker/JIC fittings, pressure valves, compensators, diagnostics (LunchBox Sessions, Swagelok, Parker, Tecnadyne)
- **Module 4: Fiber Optics** — Stripping, cleaving, splicing, OTDR (Fiber Instrument Sales)

## Features

- YouTube embeds (nocookie) with offline notice
- Progress tracking & completion checkboxes (localStorage)
- Per-lesson technician bench notes (auto-saved)
- Module filters + search
- Keyboard shortcuts (N/P/M/ /)
- PWA installable, offline-capable for notes/progress
- Export/Import progress + notes as JSON
- Download self-contained HTML

## Suitability for ROV Maintainer Career Path

Strong practical refresher for the hands-on skills most relevant to ROV electronics, hydraulic interconnects, and fiber tethers:

- Aligns closely with the practical portions of IMCA R010 Modules 4–6 (electrical/electronic systems, mechanical/hydraulic) and fiber-optic elements of control systems.
- IPC soldering and board rework are high-value for subsea electronics pods and repair.
- Tube fitting assembly (Swagelok, Parker, JIC) and hydraulic valve/compensator knowledge map directly to ROV HPU and manipulator maintenance.
- Fiber stripping/cleaving/splicing/OTDR is essential for umbilical and tether work.

**Limitations** (does not replace formal requirements):
- Theory-only on full electrical schematics, HV safety systems, complete hydraulic circuit design, LARS, lifting operations, and offshore HSEQ (see IMCA R002/R010 full modules).
- No substitute for IMCA-approved introductory course, offshore medical, BOSIET/survival training, manufacturer-specific system training, or progressive logbook hours under IMCA C005 (R04 → R03).
- Best used by candidates with existing technical foundation (e.g., Navy ET, electronics, industrial maintenance) as a self-led skills sharpener before or between formal ROV courses and offshore trips.

Navy Electronics Technician background is a recognized relevant entry pathway into ROV roles.

## Usage

Open `index.html` in any modern browser. Progress and notes persist in localStorage. Install as PWA for standalone use. Videos require network; notes/progress do not.

## License

Curriculum videos remain property of their original creators. This wrapper is for personal training use.
