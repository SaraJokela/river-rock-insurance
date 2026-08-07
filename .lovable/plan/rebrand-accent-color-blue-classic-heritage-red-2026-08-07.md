# Rebrand Accent Color: Blue → Classic Heritage Red

## Goal
Swap the site's accent color from the current bright blue (`#1E8BC3` / `hsl(201 72% 44%)`) to a Classic Heritage Red. The deep indigo-navy primary stays unchanged — this is an accent-only change.

## New accent tokens (HSL, for `src/index.css`)

```
--accent: 352 64% 40%;          /* #B01E2E  — main accent (buttons, icons, highlights) */
--accent-foreground: 0 0% 100%;
--ring: 352 64% 40%;            /* focus ring follows accent */
```

The `hover:bg-accent/90` utility already used across components continues to work (it darkens the accent slightly). `--accent` stays the single source of truth.

## Files to change

1. **`src/index.css`** — update `--accent` and `--ring` in both `:root` and `.dark` blocks.
2. **`tailwind.config.ts`** — no change needed; `accent` already maps to `hsl(var(--accent))`. Confirm only.

No component files need editing — every accent use references the `accent` / `text-accent` / `bg-accent` / `border-accent` semantic tokens, so changing the CSS variable propagates everywhere automatically.

## What stays the same
- Deep indigo-navy primary (`#23214D`) — unchanged.
- TopBar dark primary background — unchanged.
- Font (Montserrat), layout, all component markup — unchanged.
- Only the accent hue/saturation/lightness values change.

## Verification
- Build passes (no new class names introduced).
- Visual check via Playwright: hero CTA button, nav logo circle, "Licensed CA Agent" check icons, location card icons, and footer links all render in heritage red rather than blue.
- Confirm hover/active states still read as red and maintain contrast against the warm off-white background.

## Out of scope
- No full rebrand of the navy primary.
- No new components, layout, or content changes.
- No copywriting or SEO changes.
