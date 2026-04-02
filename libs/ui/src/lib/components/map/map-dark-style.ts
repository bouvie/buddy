// Dark map style aligned with k9 design tokens
// --k9-color-bg: #060E20 | --k9-color-surface: #192540
// --k9-color-text-muted: #C4C8C0 | --k9-color-primary: #BACBB8

export const MAP_DARK_STYLE: google.maps.MapTypeStyle[] = [
  { elementType: 'geometry', stylers: [{ color: '#060E20' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#060E20' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#C4C8C0' }] },

  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#192540' }, { visibility: 'on' }],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#C4C8C0' }],
  },

  {
    featureType: 'poi',
    stylers: [{ visibility: 'off' }],
  },

  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#192540' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#0D1A30' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#8A9196' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#253A5E' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#192540' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#BACBB8' }],
  },

  {
    featureType: 'transit',
    stylers: [{ visibility: 'off' }],
  },

  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#0D1A30' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#5A6B7E' }],
  },

  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{ color: '#0B1628' }],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [{ color: '#0F1F35' }],
  },
];
