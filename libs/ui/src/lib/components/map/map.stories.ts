import { applicationConfig, Meta, StoryObj } from '@storybook/angular';

import { MapComponent } from './map.component';
import { GOOGLE_MAPS_API_KEY } from './map.types';

const PARIS: google.maps.LatLngLiteral = { lat: 48.8566, lng: 2.3522 };

const SAMPLE_MARKERS = [
  { lat: 48.8584, lng: 2.2945, title: 'Tour Eiffel', infoContent: 'Monument emblématique de Paris' },
  { lat: 48.8606, lng: 2.3376, title: 'Musée du Louvre', infoContent: 'Plus grand musée du monde' },
  { lat: 48.8738, lng: 2.295, title: 'Arc de Triomphe', infoContent: 'Place Charles de Gaulle' },
];

const meta: Meta<MapComponent> = {
  title: 'Design System / Components / Map',
  component: MapComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'k9-dark' },
  },
  decorators: [
    applicationConfig({
      providers: [
        { provide: GOOGLE_MAPS_API_KEY, useValue: '' },
      ],
    }),
  ],
  argTypes: {
    center: { control: 'object', description: 'Centre de la carte { lat, lng }' },
    zoom: { control: { type: 'range', min: 1, max: 20, step: 1 }, description: 'Niveau de zoom (1–20)' },
    markers: { control: 'object', description: 'Liste de marqueurs MapMarkerData[]' },
    height: { control: 'text', description: 'Hauteur CSS du conteneur (ex: 400px, 50vh)' },
  },
  args: {
    center: PARIS,
    zoom: 12,
    markers: [],
    height: '400px',
  },
};

export default meta;
type Story = StoryObj<MapComponent>;

export const Default: Story = {};

export const WithMarkers: Story = {
  args: {
    markers: SAMPLE_MARKERS,
    zoom: 13,
  },
};

export const WithInfoWindow: Story = {
  args: {
    markers: [
      {
        lat: 48.8584,
        lng: 2.2945,
        title: 'Tour Eiffel',
        infoContent: 'Cliquez pour afficher les infos',
      },
    ],
    center: { lat: 48.8584, lng: 2.2945 },
    zoom: 15,
  },
};

export const TallMap: Story = {
  args: {
    markers: SAMPLE_MARKERS,
    height: '600px',
    zoom: 12,
  },
};
