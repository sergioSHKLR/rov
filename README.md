# ROV Maintainer Training Curriculum

Self-contained Progressive Web App (single HTML file) for self-led refresher and practical skills training aimed at ROV (Remotely Operated Vehicle) maintainer / technician roles.

## Curriculum (42 curated lessons)

- **Module 1: Soldering** — IPC-J-STD-001 techniques, terminals, SMD/fine-pitch (John Gammell)
- **Module 2: Board Rework** — PCB pad/trace reconstruction, milling, IPC-7711/7721
- **Module 3: Hydraulics & Control** — Relays, servo/proportional valves, Swagelok/Parker/JIC fittings, pressure valves, compensators
- **Module 4: Fiber Optics** — Stripping, cleaving, splicing, OTDR
- **Module 5: Electrical & Safety** — HV isolation & proving dead (MTCS), LOTO procedures, insulation resistance / Megger testing
- **Module 6: Hydraulic Schematics** — HPU, valve section, and cylinder schematic reading (LunchBox Sessions)
- **Module 7: LARS & HSEQ** — Launch & Recovery Systems (A-frame/winch), Permit to Work (PTW), Toolbox Talks

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

Expanded to close major gaps relative to IMCA R010 / R002:

- Practical interconnect and repair (soldering, board work, fittings, fiber) remain core.
- New coverage of HV isolation (aligned with IMCA R005 concepts), LOTO, insulation resistance testing, full hydraulic schematic reading, LARS mechanical awareness, and basic PTW/TBT/HSEQ.
- Still complementary to formal IMCA-approved introductory training, offshore medical, BOSIET, manufacturer-specific systems, and logbook progression under C005.
- High value for candidates with existing technical foundation (Navy ET, electronics, industrial maintenance).

## Usage

Open `index.html` in any modern browser. Progress and notes persist in localStorage. Install as PWA for standalone use. Videos require network; notes/progress do not.

## License

Curriculum videos remain property of their original creators. This wrapper is for personal training use.
