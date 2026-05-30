---
layout: layouts/base.njk
title: About Piravom
description: Discover Piravom — a historic town in Ernakulam district, Kerala, known for its scenic landscapes, cultural heritage, and vibrant community.
permalink: "/about/"
---

<main class="mx-auto max-w-7xl px-4 py-8">

    <!-- Hero -->
    {% from "components/page-hero.njk" import pageHero %}
    {{ pageHero(title, description) }}

    <!-- Overview Section -->
    <section class="mx-auto max-w-4xl">

        <div class="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-sm">
            <div class="aspect-[21/9] w-full bg-gradient-to-br from-indigo-100 to-blue-200 overflow-hidden">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Piravom_Kerala_Town.jpg/1280px-Piravom_Kerala_Town.jpg"
                    alt="Piravom town view"
                    class="h-full w-full object-cover"
                    onerror="this.style.display='none'"
                />
            </div>
            <div class="p-8">
                <h2 class="text-3xl font-bold text-gray-900">Welcome to Piravom</h2>
                <p class="mt-4 text-lg text-gray-600 leading-relaxed">
                    Piravom is a picturesque municipal town located in the Ernakulam district of Kerala, India. Nestled on the banks of the Muvattupuzha River, it serves as a major commercial and cultural hub for the surrounding panchayats. Known for its lush green landscapes, historic churches and temples, and a thriving local economy, Piravom beautifully blends tradition with modernity.
                </p>
            </div>
        </div>

        <!-- Quick Facts Grid -->
        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p class="text-xs font-semibold uppercase tracking-wide text-gray-500">District</p>
                <p class="mt-1 text-lg font-bold text-gray-900">Ernakulam</p>
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p class="text-xs font-semibold uppercase tracking-wide text-gray-500">Population</p>
                <p class="mt-1 text-lg font-bold text-gray-900">~25,000</p>
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p class="text-xs font-semibold uppercase tracking-wide text-gray-500">Elevation</p>
                <p class="mt-1 text-lg font-bold text-gray-900">7 m (23 ft)</p>
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p class="text-xs font-semibold uppercase tracking-wide text-gray-500">Area</p>
                <p class="mt-1 text-lg font-bold text-gray-900">17.43 km²</p>
            </div>
        </div>

        <!-- Geography & Location -->
        <div class="mt-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 class="text-2xl font-bold text-gray-900">📍 Geography &amp; Location</h3>
            <p class="mt-4 text-gray-600 leading-relaxed">
                Piravom is strategically located about 20 km southeast of Kochi (Cochin) and roughly 12 km from
                the KSEB Nagar area. It lies at the crossroads of the Ernakulam – Kottayam district border,
                making it an important transit point for travellers heading towards the hill stations of
                Idukki and Munnar. The town is surrounded by rolling hills, rubber plantations, coconut groves,
                and paddy fields.
            </p>
            <div class="mt-6 grid gap-4 sm:grid-cols-3">
                <div class="rounded-xl bg-gray-50 p-4">
                    <p class="text-sm font-semibold text-gray-500">Kochi (Cochin)</p>
                    <p class="text-xl font-bold text-indigo-600">20 km</p>
                    <p class="text-xs text-gray-400">North-West</p>
                </div>
                <div class="rounded-xl bg-gray-50 p-4">
                    <p class="text-sm font-semibold text-gray-500">Kottayam</p>
                    <p class="text-xl font-bold text-indigo-600">32 km</p>
                    <p class="text-xs text-gray-400">South-East</p>
                </div>
                <div class="rounded-xl bg-gray-50 p-4">
                    <p class="text-sm font-semibold text-gray-500">Munnar</p>
                    <p class="text-xl font-bold text-indigo-600">90 km</p>
                    <p class="text-xs text-gray-400">East</p>
                </div>
            </div>
        </div>

        <!-- History -->
        <div class="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 class="text-2xl font-bold text-gray-900">📜 History &amp; Heritage</h3>
            <p class="mt-4 text-gray-600 leading-relaxed">
                Piravom has a rich history dating back centuries. The region was once part of the
                <strong class="text-gray-900">Kingdom of Travancore</strong> and later the
                <strong class="text-gray-900">Princely State of Cochin</strong>. Its name is believed to be
                derived from "Piravum" meaning "that which is born" — referencing its origin as a settlement
                that grew around the riverbanks.
            </p>
            <p class="mt-4 text-gray-600 leading-relaxed">
                The town is home to several historically significant religious sites, including the
                <strong class="text-gray-900">Pazhoor Padippura</strong> (ancient stone-built entrance),
                the <strong class="text-gray-900">Magi Church</strong> (one of the oldest Catholic churches
                in the region), and numerous temples that showcase traditional Kerala architecture.
            </p>
        </div>

        <!-- Culture & Demographics -->
        <div class="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 class="text-2xl font-bold text-gray-900">🙏 Culture &amp; Community</h3>
            <p class="mt-4 text-gray-600 leading-relaxed">
                Piravom is a vibrant mosaic of cultures, with a harmonious mix of Hindu, Christian, and
                Muslim communities. The town is known for its grand festival celebrations — the
                <strong class="text-gray-900">Piravom Church Feast</strong> (Feast of St. Mary),
                temple <em>poorams</em>, and <em>padayani</em> performances draw visitors from across
                the district.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
                <span class="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">Malayalam</span>
                <span class="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">English</span>
                <span class="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">Hindi</span>
                <span class="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">Tamil</span>
            </div>
        </div>

        <!-- Economy -->
        <div class="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 class="text-2xl font-bold text-gray-900">🏪 Economy &amp; Commerce</h3>
            <p class="mt-4 text-gray-600 leading-relaxed">
                Piravom serves as a major commercial centre for nearby villages. The town's economy is
                driven by:
            </p>
            <div class="mt-4 grid gap-4 sm:grid-cols-2">
                <div class="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                    <span class="mt-1 text-xl">🌴</span>
                    <div>
                        <p class="font-semibold text-gray-900">Agriculture</p>
                        <p class="text-sm text-gray-500">Rubber, coconut, arecanut, tapioca</p>
                    </div>
                </div>
                <div class="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                    <span class="mt-1 text-xl">🏪</span>
                    <div>
                        <p class="font-semibold text-gray-900">Retail &amp; Trade</p>
                        <p class="text-sm text-gray-500">Shops, textiles, groceries &amp; more</p>
                    </div>
                </div>
                <div class="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                    <span class="mt-1 text-xl">🏦</span>
                    <div>
                        <p class="font-semibold text-gray-900">Banking &amp; Finance</p>
                        <p class="text-sm text-gray-500">Multiple nationalised &amp; co-op banks</p>
                    </div>
                </div>
                <div class="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                    <span class="mt-1 text-xl">🚚</span>
                    <div>
                        <p class="font-semibold text-gray-900">Transport &amp; Logistics</p>
                        <p class="text-sm text-gray-500">Key transit hub for goods &amp; people</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tourism -->
        <div class="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 class="text-2xl font-bold text-gray-900">🏞️ Tourism &amp; Landmarks</h3>
            <p class="mt-4 text-gray-600 leading-relaxed">
                Piravom and its surroundings offer a variety of attractions for nature lovers and pilgrims alike:
            </p>
            <div class="mt-6 space-y-4">
                <div class="flex items-start gap-4 border-b border-gray-100 pb-4">
                    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-lg">🌊</span>
                    <div>
                        <p class="font-semibold text-gray-900">Areekkal Waterfalls</p>
                        <p class="text-sm text-gray-500">A scenic waterfall amidst lush greenery, 10.8 km from town.</p>
                    </div>
                </div>
                <div class="flex items-start gap-4 border-b border-gray-100 pb-4">
                    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-lg">🌉</span>
                    <div>
                        <p class="font-semibold text-gray-900">Pazhoor Hanging Bridge</p>
                        <p class="text-sm text-gray-500">A suspension bridge over the Muvattupuzha River with stunning views.</p>
                    </div>
                </div>
                <div class="flex items-start gap-4 border-b border-gray-100 pb-4">
                    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-lg">⛰️</span>
                    <div>
                        <p class="font-semibold text-gray-900">Mandalam Mount &amp; Koorumala</p>
                        <p class="text-sm text-gray-500">Hilltop viewpoints offering panoramic vistas of the region.</p>
                    </div>
                </div>
                <div class="flex items-start gap-4">
                    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-lg">⛪</span>
                    <div>
                        <p class="font-semibold text-gray-900">Magi Church &amp; Pazhoor Padippura</p>
                        <p class="text-sm text-gray-500">Centuries-old religious sites with architectural beauty.</p>
                    </div>
                </div>
            </div>
            <div class="mt-6">
                <a href="/attractions/" class="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
                    Explore All Attractions
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>

        <!-- Transportation -->
        <div class="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 class="text-2xl font-bold text-gray-900">🚌 Transportation</h3>
            <p class="mt-4 text-gray-600 leading-relaxed">
                Piravom is well-connected by road. The <strong class="text-gray-900">Main Central (MC) Road</strong>
                (SH-1) passes through the town, linking it to Ernakulam, Kottayam, and beyond. Frequent
                <strong class="text-gray-900">KSRTC</strong> and private bus services operate from the
                Piravom bus stand, connecting to major cities and nearby towns. The nearest railway stations
                are at <strong class="text-gray-900">Ernakulam</strong> (20 km) and
                <strong class="text-gray-900">Kottayam</strong> (32 km), and the nearest airport is
                <strong class="text-gray-900">Cochin International Airport</strong> (COK) at Nedumbassery,
                approximately 30 km away.
            </p>
            <div class="mt-6">
                <a href="/bus-timing/" class="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
                    View Bus Timings
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>

        <!-- Education -->
        <div class="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 class="text-2xl font-bold text-gray-900">🎓 Education</h3>
            <p class="mt-4 text-gray-600 leading-relaxed">
                Piravom is home to several well-regarded educational institutions, including
                <strong class="text-gray-900">St. Joseph's Higher Secondary School</strong>,
                <strong class="text-gray-900">N.S.S. Higher Secondary School</strong>, and
                <strong class="text-gray-900">Magi Carmel Higher Secondary School</strong>.
                The town also hosts engineering and arts colleges in its vicinity, making it a
                small but significant educational hub in the region.
            </p>
        </div>

    </section>



</main>
