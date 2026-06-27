"use client";

// Render dispatch for the in-progress composer. The attempt page passes a
// SANITIZED payload (answer keys stripped server-side) and never branches on task
// type itself — the GoetheComposer handles every Goethe task family.

export { GoetheComposer } from "@/components/goethe/GoetheComposer";
