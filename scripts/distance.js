#!/usr/bin/env node

/**
 * Google Maps Road Distance Calculator
 *
 * Usage:
 *   node scripts/distance.js "Piravom, Kerala" "Kochi, Kerala"
 *
 * Requires GOOGLE_MAPS_API_KEY environment variable to be set.
 * Get one at https://console.cloud.google.com/apis/credentials
 */

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

if (!GOOGLE_MAPS_API_KEY) {
  console.error("❌ GOOGLE_MAPS_API_KEY environment variable is not set.");
  console.error("   Set it with: export GOOGLE_MAPS_API_KEY=your_api_key");
  process.exit(1);
}

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error("❌ Please provide two place names.");
  console.error('   Usage: node scripts/distance.js "Place 1" "Place 2"');
  console.error(
    '   Example: node scripts/distance.js "Piravom, Kerala" "Kochi, Kerala"',
  );
  process.exit(1);
}

const [origin, destination] = args;

async function getRoadDistance(origin, destination) {
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${GOOGLE_MAPS_API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.status !== "OK") {
    throw new Error(
      `API error: ${data.status}${data.error_message ? " - " + data.error_message : ""}`,
    );
  }

  if (!data.rows?.[0]?.elements?.[0]) {
    throw new Error("No results returned from the API.");
  }

  const element = data.rows[0].elements[0];

  if (element.status !== "OK") {
    throw new Error(
      `Could not compute distance between "${origin}" and "${destination}" (${element.status}). Try being more specific (e.g. add city/state names).`,
    );
  }

  return {
    origin: data.origin_addresses[0],
    destination: data.destination_addresses[0],
    distanceKm: element.distance.value / 1000,
    distanceText: element.distance.text,
    durationText: element.duration.text,
    durationValue: element.duration.value,
  };
}

getRoadDistance(origin, destination)
  .then((result) => {
    console.log("");
    console.log("  📍 From:        " + result.origin);
    console.log("  🎯 To:          " + result.destination);
    console.log("  ─────────────────────────────");
    console.log("  📏 Distance:    " + result.distanceText);
    console.log("  ⏱  Duration:    " + result.durationText);
    console.log("");
  })
  .catch((err) => {
    console.error("❌ " + err.message);
    process.exit(1);
  });
