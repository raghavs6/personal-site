export const email = "rsenthilkum6@wisc.edu";

export const links = [
  { label: "GitHub", href: "https://github.com/raghavs6" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/raghavs6/" },
];

export const focusTags = [
  "Distributed systems",
  "ML infrastructure",
  "Useful products",
];

export const experience = [
  {
    org: "University of Virginia",
    datetime: "2026-05",
    dates: "May 2026 – Present",
    role: "Undergraduate Systems Researcher · Remote",
    summary:
      "Proving that a widely used open-source database keeps data correct as it spreads across servers.",
  },
  {
    org: "New York University",
    datetime: "2026-06",
    dates: "Jun – Sep 2026",
    role: "Undergraduate Systems Researcher · Remote",
    summary:
      "Built a fast, fault-tolerant system that lets many computers share and agree on the same stream of data.",
  },
];

export const projects = [
  {
    name: "KVFlow",
    stack: "Go · gRPC · Python",
    href: "https://github.com/raghavs6/KVFlow",
    summary:
      "Adaptive control plane exploring when distributed LLM inference should reuse, transfer, or recompute KV state.",
  },
  {
    name: "Object-storage-native log",
    stack: "Go · Postgres · MinIO",
    href: "https://github.com/raghavs6/object-storage-native-log",
    summary:
      "A Kafka-style append-only log prototype with S3-compatible object storage as the source of truth.",
  },
  {
    name: "Drift",
    stack: "React · FastAPI",
    href: "https://github.com/raghavs6/drift",
    summary:
      "A swipe-based app for finding nearby outdoor experiences that fit your preferences and current conditions.",
  },
];

export const writing: { title: string; status: string }[] = [];
