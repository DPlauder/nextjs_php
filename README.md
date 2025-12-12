**Projektübersicht**

- **Typ:** Next.js 14 (App Router) mit TypeScript und Tailwind CSS
- **Ziel:** Moderne, performante Frontend-App mit klarer Struktur und einfacher Erweiterbarkeit
- **Status:** Lokale Entwicklung lauffähig; Produktion via statischem Build oder Plattform-Deploy (z. B. Vercel)

**Hauptfeatures**

- **App Router:** Klare Seiten- und Layout-Struktur unter [src/app](src/app)
- **TypeScript:** Typensicherheit und bessere DX
- **Tailwind CSS:** Utility-first Styling mit konfigurierbaren Themes
- **Konfigurationsdateien:** Zentrale Kontrolle über Build, TS und Tailwind

**Technischer Stack**

- **Runtime:** Node.js (Empfehlung: v18+)
- **Framework:** Next.js
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS, PostCSS
- **Paketmanager:** npm (alternativ yarn/pnpm/bun)

**Inhalt & Struktur**

- [config.ts](config.ts): Projektweite Konfiguration oder Konstanten
- [next.config.ts](next.config.ts): Next.js Build-/Runtime-Konfiguration
- [package.json](package.json): Abhängigkeiten und Skripte
- [postcss.config.js](postcss.config.js), [postcss.config.mjs](postcss.config.mjs): PostCSS/Tailwind Pipeline
- [tailwind.config.ts](tailwind.config.ts): Tailwind-Theming und Plugins
- [tsconfig.json](tsconfig.json): TypeScript-Compiler-Optionen
- [public](public): Statische Assets (Bilder, Favicons, etc.)
- [src/app/globals.css](src/app/globals.css): globale Styles
- [src/app/layout.tsx](src/app/layout.tsx): Root-Layout der App
- [src/app/page.tsx](src/app/page.tsx): Startseite (falls genutzt)
- [src/app/home/layout.tsx](src/app/home/layout.tsx): Layout für den "home"-Bereich
- [src/app/home/page.tsx](src/app/home/page.tsx): Seite für den "home"-Bereich

**Voraussetzungen**

- Installiertes **Node.js** (v18 oder höher empfohlen)
- Ein Paketmanager (z. B. **npm**)
- Optional: **Git**, **VS Code** mit passenden Extensions (ESLint, Tailwind CSS IntelliSense)

**Installation**

1. Abhängigkeiten installieren:

```bash
npm install
```

2. Entwicklung starten (Hot Reload):

```bash
npm run dev
```

3. App öffnen:

```
http://localhost:3000
```

**Build & Produktion**

- Produktionsbuild erstellen:

```bash
npm run build
```

- Produktion lokal starten:

```bash
npm run start
```

- Typische Deploy-Ziele: **Vercel**, **Netlify**, eigener Node-Server.
  - Für Vercel: Repository verbinden, `build`-Command nutzen, Umgebungsvariablen im Projekt-Settings setzen.

**NPM-Skripte**

- `dev`: Startet den Next.js-Entwicklungsserver mit Hot Reload
- `build`: Erstellt einen optimierten Produktionsbuild
- `start`: Startet den Produktionsserver
- Weitere Skripte können in [package.json](package.json) ergänzt werden (z. B. `lint`, `format`).

**Tailwind CSS**

- Globale Styles in [src/app/globals.css](src/app/globals.css)
- Tailwind-Konfiguration in [tailwind.config.ts](tailwind.config.ts)
- PostCSS-Pipeline über [postcss.config.js](postcss.config.js) oder [postcss.config.mjs](postcss.config.mjs)
- Beispiel-Nutzung in Komponenten/Pages mittels Utility-Klassen (z. B. `flex`, `grid`, `text-gray-700`)

**App Router Hinweise**

- Root-Layout: [src/app/layout.tsx](src/app/layout.tsx)
- Seiten: [src/app/page.tsx](src/app/page.tsx) und Bereichsseiten wie [src/app/home/page.tsx](src/app/home/page.tsx)
- Bereichs-Layout: [src/app/home/layout.tsx](src/app/home/layout.tsx)
- Globale Styles werden einmalig über das Root-Layout eingebunden

**Konfiguration & Umgebungsvariablen**

- Next.js Konfiguration in [next.config.ts](next.config.ts)
- TypeScript Optionen in [tsconfig.json](tsconfig.json)
- Tailwind Optionen in [tailwind.config.ts](tailwind.config.ts)
- Umgebungsvariablen per `.env.local` (nicht eingecheckt):
  - Beispiel:

```bash
# .env.local
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

    - `NEXT_PUBLIC_`-Variablen sind im Browser verfügbar; andere nur Server-seitig.

**HTTP-/API-Aufrufe**

- Falls eine Ressourcen-basierte API genutzt wird: Übergabe einer Ressource via Query oder Pfad, z. B. `?ressource=category`
- Beispiel (Development): `http://localhost:3000?ressource=category`
- Implementierungshinweise:
  - Client-Fetch via `fetch()` mit Basis-URL aus `NEXT_PUBLIC_API_BASE_URL`
  - Serverseitig: Route-Handler im App Router unter `src/app/api/...` (falls vorhanden) oder externe API konsumieren

**Projektstruktur (Kurzüberblick)**

- `public/`: Statische Dateien, direkt über `/` erreichbar (z. B. `/favicon.ico`)
- `src/app/`: App Router Wurzel mit Seiten und Layouts
  - `globals.css`: Globale Styles
  - `layout.tsx`: Root-Layout
  - `page.tsx`: Standard-Startseite
  - `home/`: Bereich mit eigenem Layout und Page

**Entwicklungs-Workflow**

- Änderungen an Seiten/Layouts: direkt in [src/app](src/app)
- Styles: Utility-Klassen in JSX oder globale Anpassungen in [src/app/globals.css](src/app/globals.css)
- Konfigurationen: Anpassen der jeweiligen Datei (Next, TS, Tailwind)
- Optional: Linting/Formatting-Skripte in [package.json](package.json) ergänzen

**Troubleshooting**

- Abhängigkeiten neu installieren:

```bash
rm -rf node_modules package-lock.json
npm install
```

- Next/Tailwind Cache-Probleme: Dev-Server stoppen, erneut `npm run dev` starten
- Windows-Pfade/Schreibrechte: VS Code als Benutzer mit ausreichenden Rechten starten
- Port belegt: `PORT=3001 npm run dev` (alternativ Ports in der Umgebung setzen)

**Hinweise**

- Der Ordnername deutet ggf. auf PHP hin, im aktuellen Projektkontext ist jedoch eine Next.js-Frontend-App vorhanden. Eine serverseitige PHP-Integration ist hier nicht dokumentiert.

**Lizenz**

- Proprietär oder projektbezogen; falls benötigt, hier ergänzen.
