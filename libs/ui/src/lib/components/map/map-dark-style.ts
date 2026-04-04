// Dark map style — immersive K9 design system integration
//
// Philosophy: the map blends into the app UI
//   Canvas / buildings  → --k10-color-bg (#0F1419)        fade into the app background
//   Local roads         → --k10-color-border (#434842)    subtle greenish presence
//   Highways            → --k10-color-primary (#BACBB8)   sage green arteries that pop
//   Water               → --k10-color-surface-deep (#0A0F13)  depth contrast
//   Nature / parks      → --k10-color-surface (#1B2025)   slightly lighter than canvas

export const MAP_DARK_STYLE: google.maps.MapTypeStyle[] = [
  // ── Base canvas ────────────────────────────────────────────────────────────
  { elementType: 'geometry', stylers: [{ color: '#0F1419' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#0F1419' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#C4C8C0' }] },

  // ── Administrative ─────────────────────────────────────────────────────────
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#434842' }, { visibility: 'on' }],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#8E928B' }],
  },

  // ── POI ────────────────────────────────────────────────────────────────────
  {
    featureType: 'poi',
    stylers: [{ visibility: 'off' }],
  },

  // ── Roads — local (subtle, border tone) ────────────────────────────────────
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#434842' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#0F1419' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#8E928B' }],
  },

  // ── Roads — highway (primary sage green) ───────────────────────────────────
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#BACBB8' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#0F1419' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#263427' }],
  },

  // ── Transit ────────────────────────────────────────────────────────────────
  {
    featureType: 'transit',
    stylers: [{ visibility: 'off' }],
  },

  // ── Water ──────────────────────────────────────────────────────────────────
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#0A0F13' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#8E928B' }],
  },

  // ── Landscape ──────────────────────────────────────────────────────────────
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{ color: '#0F1419' }],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [{ color: '#1B2025' }],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry',
    stylers: [{ color: '#0F1419' }],
  },
];
