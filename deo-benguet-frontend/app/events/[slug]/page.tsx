import { events } from "../../../data/event";
import { notFound } from "next/navigation";
import { EventDetailClient } from "./EventDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function EventDetail({ params }: Props) {
  const { slug } = await params;
  const event = events.find(e => e.slug === slug);

  if (!event) return notFound();

  return <EventDetailClient event={event} />;
}