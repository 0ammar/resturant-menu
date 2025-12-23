import IntroScreen from './IntroScreen';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Menu',
  description: 'Experience fine dining at its best',
};

export default function HomePage() {
  return <IntroScreen />;
}