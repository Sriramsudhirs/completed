import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BGRemoval.in - Free AI Background Removal Tool',
  description: 'Remove image backgrounds instantly with our AI-powered tool. Free, fast, and no signup required.',
};

export default function Page() {
  return <LandingPage />;
}