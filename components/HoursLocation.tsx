"use client";

import { useEffect, useState } from "react";
import { Clock, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function isOpenNow(): boolean {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const time = now.getHours() * 60 + now.getMinutes();

  // Find the appropriate hours entry
  const todayHours = day === 0 ? BUSINESS.hours[1] : BUSINESS.hours[0];

  const [openHour, openMin] = todayHours.open.split(":").map(Number);
  const [closeHour, closeMin] = todayHours.close.split(":").map(Number);

  const openTime = openHour * 60 + openMin;
  const closeTime = closeHour * 60 + closeMin;

  return time >= openTime && time < closeTime;
}

export default function HoursLocation() {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setIsOpen(isOpenNow());
  }, []);

  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.mapQuery)}`;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Store Hours
          {isOpen !== null && (
            <Badge variant={isOpen ? "default" : "secondary"}>
              {isOpen ? "Open Now" : "Closed"}
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-2">
          {BUSINESS.hours.map((entry, i) => (
            <div
              key={i}
              className="flex justify-between text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0"
            >
              <span className="text-white/60">{entry.day}</span>
              <span className="font-medium">
                {entry.open} – {entry.close}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-white/10">
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="h-5 w-5 text-white/60 mt-0.5" />
            <address className="not-italic text-sm">
              <p className="font-medium">{BUSINESS.addressLine}</p>
              <p className="text-white/60">
                {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postalCode}
              </p>
            </address>
          </div>
          <Button asChild className="w-full" variant="outline">
            <a href={directionsHref} target="_blank" rel="noopener noreferrer">
              <MapPin className="mr-2 h-4 w-4" />
              Get Directions
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
