import { notFound } from 'next/navigation';

export default function CatchAllPage() {
  // Any unmatched route will render the app-level not-found UI
  notFound();
}
