import type { ServiceLocaleData } from "./types";

const data: ServiceLocaleData = {
  ui: {
    hubEyebrow: "— SERVICES INDEX",
    hubTitleTop: "WHAT",
    hubTitleBottom: "we do",
    hubIntro:
      "CLAMOA is a fashion PR agency based in Apgujeong, Seoul, integrating everything from Korean celebrity seeding to global distribution expansion across 8 core service lines.",
    hubMetaTitle: "SERVICES — Full Fashion PR Service Lineup | CLAMOA",
    hubMetaDescription:
      "CLAMOA's 8 fashion PR services — celebrity seeding, stylist relations, PPL, influencer PR, editorial & viral PR, offline events, brand ambassadors, and global expansion.",
    fitLabel: "01 — FIT",
    fitTitle: "Who this is for",
    processLabel: "02 — PROCESS",
    processTitle: "How CLAMOA runs it",
    outputLabel: "03 — OUTPUT",
    outputTitle: "What you get",
    faqLabel: "04 — FAQ",
    faqTitle: "Frequently asked questions",
    stepWord: "STEP",
    home: "Home",
    allServices: "All Services",
    ctaEyebrow: "— LET'S TALK",
    ctaTitle: "PR built for your brand,\nlet's start with CLAMOA.",
    ctaButton: "Request a consultation",
  },
  services: {
    "celebrity-seeding": {
      slug: "celebrity-seeding",
      no: "01",
      eyebrow: "01 — CELEBRITY SEEDING",
      title: "SHOWROOM\nCELEBRITY PR",
      cardTitle: "Celebrity Seeding",
      cardSubtitle: "SHOWROOM CELEBRITY PR",
      cardDesc:
        "Build brand awareness and content assets through actor, idol, and on-air celebrity styling exposure.",
      definition:
        "Showroom PR displays a brand's product in a showroom and connects it, through a stylist network, to wear and exposure by actors, idols, and other celebrities. CLAMOA runs the full process end to end — from showroom display tailored to a brand's mood and target, to stylist-led seeding and returns, celebrity wear monitoring, and clipping data management.",
      fitFor: [
        "Brands needing fast awareness right after launch",
        "Brands looking to boost image and buzz through celebrity wear",
        "Brands that need celebrity content for viral use on SNS and online channels",
        "Brands preparing for global expansion that need K-celebrity references",
      ],
      processIntro: "Brief through reporting, results are tracked at every step.",
      steps: [
        {
          title: "Celebrity guideline setup",
          desc: "We analyze the brand's mood, target, and positioning to set guidelines for celebrities with strong brand fit.",
        },
        {
          title: "Product registration & showroom display",
          desc: "Each product's RFID data is registered for integrated management via our in-house SaaS, RINK, then displayed in the showroom.",
        },
        {
          title: "Stylist pitching",
          desc: "We pitch on- and offline to stylists matching the brand's target, driving active pickups and celebrity wear.",
        },
        {
          title: "Clipping & reporting",
          desc: "We capture styling, track media exposure, and deliver organized data and reports through RINK.",
        },
      ],
      deliverables: [
        "Archive of celebrity wear and exposure clippings",
        "Wear history data by celebrity and by product",
        "Stylist pickup and product preference data",
        "Pickup and wear-rate data by product",
        "Weekly seeding and celebrity exposure performance reports",
      ],
      faqs: [
        {
          q: "Which brands does celebrity seeding work best for?",
          a: "It's especially effective for brands needing awareness right after launch, brands wanting to boost buzz through celebrity wear, and brands preparing for global expansion that need K-celebrity references.",
        },
        {
          q: "How is the seeding fee structured?",
          a: "It runs on a monthly agency fee tied to showroom placement; there is no extra charge per celebrity wear instance.",
        },
        {
          q: "Is celebrity wear guaranteed?",
          a: "Because showroom seeding depends on stylist pickups and actual wear, we cannot guarantee that any specific celebrity will wear the product.",
        },
        {
          q: "Can exposure material be reused afterward?",
          a: "Since a celebrity's likeness and name rights require separate agreement with their agency, you must notify your account manager in advance if you want to reuse seeding exposure material for advertising or other secondary use.",
        },
        {
          q: "What's the minimum contract term?",
          a: "The minimum term for celebrity showroom PR is 6 months. Building stylist awareness of the brand and product, and converting ongoing pitching into actual wear, takes sustained operation over time.",
        },
      ],
      metaTitle: "Showroom Celebrity PR — Fashion PR | CLAMOA",
      metaDescription:
        "Showroom PR displays product and connects it via stylists to celebrity wear. CLAMOA covers guidelines, pitching, monitoring, and clipping reports.",
    },
    "stylist-relations": {
      slug: "stylist-relations",
      no: "02",
      eyebrow: "02 — STYLIST RELATIONS",
      title: "STYLIST\nRELATIONS",
      cardTitle: "Stylist Relations",
      cardSubtitle: "STYLIST RELATIONS",
      cardDesc:
        "Build an always-on pickup environment through an Apgujeong showroom-based stylist network.",
      definition:
        "Stylist relations create an environment where stylists working across broadcast, editorial, and artist styling can review and pick up brand product at any time, steadily increasing exposure opportunities. CLAMOA operates this out of our Apgujeong showroom.",
      fitFor: [
        "Contemporary brands that need consistent celebrity styling exposure",
        "Brands that need seasonal lookbook and new-arrival distribution",
        "Brands looking to increase frequency across broadcast, editorial, and music videos",
        "New or overseas brands that lack existing stylist connections",
      ],
      processIntro: "Brief through reporting, results are tracked at every step.",
      steps: [
        {
          title: "Showroom placement & inventory",
          desc: "Seasonal product is curated and displayed at our Apgujeong showroom and run as pickup-ready inventory.",
        },
        {
          title: "Stylist previews",
          desc: "We share new-arrival previews and lookbooks with key stylists and assistants.",
        },
        {
          title: "Pickup & return management",
          desc: "We manage the full lifecycle — pickup scheduling, look pairing, and return, cleaning, and restoration.",
        },
        {
          title: "Exposure tracking",
          desc: "Pickup history and actual wear by stylist are logged and tracked in RINK.",
        },
      ],
      deliverables: [
        "Seasonal showroom placement operations",
        "Stylist previews and lookbook distribution",
        "Pickup and return logistics",
        "Pickup and exposure reports by stylist",
        "Inventory and damage management reports",
      ],
      faqs: [
        {
          q: "How is stylist relations different from celebrity seeding?",
          a: "Celebrity seeding is a campaign targeting specific celebrities or exposure moments, while stylist relations builds the standing infrastructure that keeps stylists picking up product on an ongoing basis.",
        },
        {
          q: "What's the unit for showroom placement?",
          a: "It's typically run seasonally (quarterly), with inventory refreshed on the pace of new arrivals.",
        },
        {
          q: "How is damage to picked-up items handled?",
          a: "We apply condition checks and insurance guidance at pickup and return, following pre-agreed settlement terms if damage occurs.",
        },
        {
          q: "Which stylists are we connected with?",
          a: "Our network includes active stylists and assistant pools working across broadcast, editorial, music videos, and artist styling.",
        },
      ],
      metaTitle: "Stylist Relations — Fashion PR | CLAMOA",
      metaDescription:
        "Stylist relations builds an always-on pickup environment for broadcast and editorial stylists via CLAMOA's Apgujeong showroom network.",
    },
    "ppl-content-placement": {
      slug: "ppl-content-placement",
      no: "03",
      eyebrow: "03 — SNS / YOUTUBE PPL",
      title: "SNS / YOUTUBE\nPPL",
      cardTitle: "PPL & Content Placement",
      cardSubtitle: "SNS / YOUTUBE PPL",
      cardDesc:
        "Design natural product placement across dramas, variety shows, music videos, and web content.",
      definition:
        "SNS / YouTube PPL builds awareness and interest by placing brand product naturally within influencer and celebrity SNS and YouTube content. CLAMOA manages the whole process — from finding the right fit, to outreach, content execution, and publishing.",
      fitFor: [
        "Brands looking to expand mainstream awareness quickly",
        "Brands that need natural exposure through influencers or celebrities aligned with their image",
        "Brands wanting to spotlight a specific product or hero item",
        "Brands aiming to create buzz around a new launch or key marketing moment",
      ],
      processIntro:
        "From selecting the right influencer, celebrity, and channel to publishing content, we run the entire process.",
      steps: [
        {
          title: "Influencer/celebrity & channel matching",
          desc: "We select influencers, celebrities, and channels aligned with the brand's target and product.",
        },
        {
          title: "Outreach & terms negotiation",
          desc: "We negotiate details such as channel, content format, upload schedule, and fees.",
        },
        {
          title: "Product delivery & content production",
          desc: "We coordinate product delivery and shoot schedules, sharing guidelines and any must-include requests.",
        },
        {
          title: "Publishing & results wrap-up",
          desc: "We confirm publication and compile the final results and published content.",
        },
      ],
      deliverables: [
        "Terms by channel",
        "Content guidelines",
        "Archive of published content",
        "Final results wrap-up report",
      ],
      faqs: [
        {
          q: "How is SNS / YouTube PPL different from showroom seeding?",
          a: "SNS / YouTube PPL is a paid arrangement where content exposure is negotiated with influencers or celebrities in advance, while showroom seeding relies on stylist pickups to generate natural celebrity wear and exposure.",
        },
        {
          q: "How is pricing determined?",
          a: "Pricing varies by the influencer's or celebrity's profile, channel size, content type, and exposure format; final costs are confirmed after discussion before the project begins.",
        },
        {
          q: "Can published content be reused later?",
          a: "Yes, secondary use is possible, with additional cost depending on channel, duration, and scope. Usage terms and cost are finalized in advance.",
        },
      ],
      metaTitle: "SNS / YouTube PPL — Fashion PR | CLAMOA",
      metaDescription:
        "SNS / YouTube PPL places brand product naturally in influencer and celebrity content. CLAMOA runs matching, outreach, and publishing end to end.",
    },
    "influencer-pr": {
      slug: "influencer-pr",
      no: "04",
      eyebrow: "04 — INFLUENCER PR",
      title: "INFLUENCER\nPR",
      cardTitle: "Influencer PR",
      cardSubtitle: "INFLUENCER PR",
      cardDesc: "Curate influencers matched to your brand mood and run integrated campaigns.",
      definition:
        "Influencer PR curates fashion influencers matched to a brand's mood and target, running seeding, content, and campaigns together to build awareness and drive conversion at the same time.",
      fitFor: [
        "D2C brands growing primarily through digital channels",
        "Brands wanting to build a styling reference library quickly",
        "Brands that need content volume around a new-arrival launch",
        "Brands with a clearly defined target persona",
      ],
      processIntro: "Brief through reporting, results are tracked at every step.",
      steps: [
        {
          title: "Influencer curation",
          desc: "We propose an influencer pool matched to the brand's mood and target.",
        },
        {
          title: "Seeding & content brief",
          desc: "We deliver product seeding, key messaging, and shoot guidelines.",
        },
        {
          title: "Publishing, content check & revision requests",
          desc: "After content is published, we check for guideline gaps and request fixes where needed.",
        },
        {
          title: "Results report",
          desc: "We compile all executed content and key exposure results into a consolidated report.",
        },
      ],
      deliverables: [
        "Influencer shortlist matched to the brand's target",
        "Archive of published content",
        "Content guidelines",
        "Consolidated results report",
      ],
      faqs: [
        {
          q: "Micro or mega influencers — which is better?",
          a: "It depends on the campaign goal. Mega influencers tend to drive awareness, while micro and niche influencers can be more effective for conversion.",
        },
        {
          q: "What's the scope of content usage rights?",
          a: "Standard SNS posting plus reposting rights on brand channels are typically negotiated; advertising use is arranged as a separate option.",
        },
        {
          q: "What's the minimum campaign size?",
          a: "We recommend starting with a pool of 5–10 influencers for a single-season campaign.",
        },
      ],
      metaTitle: "Influencer PR — Fashion PR | CLAMOA",
      metaDescription:
        "Influencer PR curates fashion influencers matched to your brand mood and runs seeding, content, and campaigns for awareness and conversion.",
    },
    "editorial-viral-pr": {
      slug: "editorial-viral-pr",
      no: "05",
      eyebrow: "05 — EDITORIAL & VIRAL PR",
      title: "EDITORIAL\n& VIRAL",
      cardTitle: "Editorial & Viral PR",
      cardSubtitle: "EDITORIAL & VIRAL PR",
      cardDesc: "Plan and distribute magazine editorials, digital editorials, and viral content.",
      definition:
        "Editorial & viral PR plans, produces, and distributes magazine editorials, digital editorials, and viral SNS content, building both a brand's aesthetic assets and its buzz at the same time.",
      fitFor: [
        "Brands that need to reinforce their mood and world view",
        "Brands looking for a fresh take on a new collection's editorial",
        "Brands wanting to generate buzz on search and SNS",
      ],
      processIntro: "Brief through reporting, results are tracked at every step.",
      steps: [
        {
          title: "Theme & outlet planning",
          desc: "We set the concept and outlet list to match the season's mood and each outlet's tone.",
        },
        {
          title: "Production",
          desc: "We assemble the shoot team, styling, and location, and produce the editorial and content.",
        },
        {
          title: "Publishing & viral distribution",
          desc: "Content rolls out in stages across magazines, digital outlets, and SNS.",
        },
        {
          title: "Reporting",
          desc: "We compile publishing outlets, exposure, and secondary citations.",
        },
      ],
      deliverables: [
        "Editorial shoot and digital content",
        "Magazine and digital outlet placements",
        "Viral SNS content",
        "Exposure and distribution report",
      ],
      faqs: [
        {
          q: "What's the difference between an ad shoot and an editorial shoot?",
          a: "Ads center on the brand's own message, while editorials build the brand into an outlet's own seasonal theme.",
        },
        {
          q: "What are the content usage rights?",
          a: "This depends on outlet policy; brand-channel use is typically allowed after a set period.",
        },
        {
          q: "How is the viral piece designed?",
          a: "Alongside the editorial shots, we produce SNS-friendly cuts, reels, and short-form clips for a multi-stage rollout.",
        },
      ],
      metaTitle: "Editorial & Viral PR — Fashion PR | CLAMOA",
      metaDescription:
        "Editorial & viral PR plans and distributes magazine editorials, digital editorials, and viral content to build brand image and buzz.",
    },
    "offline-event-pr": {
      slug: "offline-event-pr",
      no: "06",
      eyebrow: "06 — OFFLINE EVENT PR",
      title: "OFFLINE\nEVENT",
      cardTitle: "Offline Event PR",
      cardSubtitle: "OFFLINE EVENT PR",
      cardDesc:
        "Design offline brand experiences — pop-ups, showroom press days, launch parties, and more.",
      definition:
        "Offline event PR plans and runs offline brand experiences — pop-up stores, showroom press days, launch parties — and connects them to magazine, celebrity, influencer, and SNS exposure.",
      fitFor: [
        "Brands preparing a flagship store opening or pop-up event",
        "Brands ahead of a new product or collection launch",
        "Brands looking to host a press, celebrity, or buyer-facing brand event",
      ],
      processIntro:
        "Matched to the event's purpose and target, we run everything from celebrity booking to RSVP and photo-wall operations.",
      steps: [
        {
          title: "Guest list selection",
          desc: "We build a shortlist of celebrities, press, and influencers matched to the event's purpose and the brand's target.",
        },
        {
          title: "Celebrity booking & RSVP management",
          desc: "We book and invite celebrities, confirm influencer attendance, and manage RSVPs.",
        },
        {
          title: "Photo wall & on-site operations",
          desc: "We manage photo-wall shoots and on-site flow for attending celebrities and handle key guest relations.",
        },
        {
          title: "Attendance results wrap-up",
          desc: "We compile the final attendee list and key on-site results into the event report.",
        },
      ],
      deliverables: [
        "Celebrity, press, and influencer invite list",
        "Final attendee list",
        "Photo wall and on-site operations summary",
        "Final post-event results report",
      ],
      faqs: [
        {
          q: "How is event scale determined?",
          a: "We design for a range of roughly 50–300 attendees based on target headcount, media exposure goals, and budget.",
        },
        {
          q: "Can celebrity exposure material be reused afterward?",
          a: "Secondary use is possible, but requires separate agreement depending on channel, duration, and scope, and may incur additional cost.",
        },
        {
          q: "Is it possible without a venue?",
          a: "A venue is required to run the event; if you don't have one, we can help source a showroom or separate pop-up space. We can also work within existing event spaces, such as department-store pop-ups.",
        },
      ],
      metaTitle: "Offline Event PR — Fashion PR | CLAMOA",
      metaDescription:
        "Offline event PR designs pop-ups, showroom press days, and launch parties, connecting them to media, celebrity, and influencer exposure.",
    },
    "brand-ambassador": {
      slug: "brand-ambassador",
      no: "07",
      eyebrow: "07 — BRAND AMBASSADOR",
      title: "BRAND\nAMBASSADOR",
      cardTitle: "Brand Ambassador Campaign",
      cardSubtitle: "BRAND AMBASSADOR CAMPAIGN",
      cardDesc: "Match long-term celebrity and artist ambassadors and run their campaigns.",
      definition:
        "A brand ambassador campaign partners with a celebrity or artist for a set term, running lookbook and campaign shoots, brand event appearances, and artist SNS posts to steadily build brand image and awareness.",
      fitFor: [
        "Brands wanting a celebrity or artist with strong brand fit as their face",
        "Brands aiming to pair global expansion with K-celebrity equity",
        "Brands wanting to strengthen awareness and image through sustained celebrity exposure over time",
      ],
      processIntro:
        "From matching brand and artist to contracting, campaign shoots, and activity management, we run the full process.",
      steps: [
        {
          title: "Candidate matching",
          desc: "We propose an ambassador shortlist matched to the brand's mood and target market.",
        },
        {
          title: "Contract & terms negotiation",
          desc: "We negotiate and finalize contract term, fee, scope of activity, and exclusivity terms.",
        },
        {
          title: "Campaign production",
          desc: "We assemble the shoot crew and coordinate scheduling, running lookbook and campaign shoots on a quarterly or seasonal basis.",
        },
        {
          title: "Ambassador activity management",
          desc: "Within the contracted scope, we coordinate and manage SNS posts, event appearances, and other ambassador activity.",
        },
      ],
      deliverables: [
        "Lookbook and campaign shoot deliverables",
        "Campaign video content",
        "Artist SNS post content",
        "Deliverables from contracted ambassador activities, including event appearances",
      ],
      faqs: [
        {
          q: "How is this different from seeding?",
          a: "Seeding is one-off exposure, while an ambassador role is an exclusive, long-term partnership for the length of the contract.",
        },
        {
          q: "How long is a typical contract term?",
          a: "6 months to a year is common, aligned to the season and market-entry timeline.",
        },
        {
          q: "Can it be used globally?",
          a: "Yes — when rights are negotiated, we can build in usage terms for Japan, Taiwan, China, and other markets.",
        },
      ],
      metaTitle: "Brand Ambassador Campaign — Fashion PR | CLAMOA",
      metaDescription:
        "Brand ambassador campaigns pair celebrities and artists with brands for long-term shoots, events, and SNS activity that build image over time.",
    },
    "global-expansion": {
    regionsTitle: "REGIONS WE COVER",
    regions: [
      { flag: "JP", title: "JAPAN", desc: "Select-shop placement in Tokyo and Osaka, Japanese magazine and influencer PR, pop-up operations." },
      { flag: "TW", title: "TAIWAN", desc: "Distribution through Taipei concept stores, local KOL collaborations, Hallyu-linked campaigns." },
      { flag: "CN", title: "CHINA", desc: "Xiaohongshu content, wanghong live commerce, Tmall and Tmall Global seller matching." },
    ],
      slug: "global-expansion",
      no: "08",
      eyebrow: "08 — GLOBAL EXPANSION",
      title: "GLOBAL\nEXPANSION",
      cardTitle: "Global Expansion",
      cardSubtitle: "GLOBAL EXPANSION",
      cardDesc:
        "Connect brands to Japanese select shops, Taiwanese boutiques, and China's Xiaohongshu and livestream commerce.",
      definition:
        "Global expansion is a business support service that connects Korean fashion brands with local distribution and marketing across Asian markets such as Japan, Taiwan, and China. CLAMOA supports everything from placement in overseas select shops and boutiques to Xiaohongshu marketing and wanghong livestream commerce matching, tailored to each brand and market.",
      fitFor: [
        "Brands preparing to enter Asian markets such as Japan, Taiwan, or China",
        "Brands seeking placement in new overseas select shops or boutiques",
        "Brands looking to expand overseas sales channels and build a stable distribution base",
        "Brands wanting to raise awareness through local marketing channels like Xiaohongshu and wanghong",
      ],
      processIntro:
        "We set the right overseas distribution and marketing direction for the brand and target market, then run execution against each channel's terms.",
      steps: [
        {
          title: "Set market direction & channels",
          desc: "Matched to the target country and the brand's profile, we set the right approach — boutique placement, overseas distribution, Xiaohongshu marketing, or wanghong livestream commerce.",
        },
        {
          title: "Wholesale materials & placement",
          desc: "For boutique and overseas channel placement, we receive a line sheet with wholesale pricing, and after buyer review, proceed with placement via purchase order (PO).",
        },
        {
          title: "Local partner & marketing matching",
          desc: "We match with local buyers, distributors, and wanghong; wanghong livestream commerce moves forward with detailed terms only once a suitable partner match is confirmed.",
        },
        {
          title: "Agree channel operating model",
          desc: "For local marketing like Xiaohongshu, we set the operating model — monthly retainer or per-project — based on brand goals and budget, then execute.",
        },
      ],
      deliverablesTitle: "Expected impact",
      deliverables: [
        "Entry into overseas distribution channels and expanded sales touchpoints",
        "Diversified sales channels through placement in local select shops and boutiques",
        "Brand awareness built through local channels like Xiaohongshu and wanghong",
        "Country-specific distribution and marketing partners securing a base for overseas expansion",
        "Ongoing growth in overseas distribution and sales opportunities",
      ],
      faqs: [
        {
          q: "How does overseas distribution work?",
          a: "We pitch local buyers and distribution channels using the brand's wholesale line sheet, then, once terms are agreed with an interested channel, proceed with placement and ordering based on purchase orders (PO).",
        },
        {
          q: "How do Xiaohongshu marketing and wanghong livestream commerce work?",
          a: "Xiaohongshu marketing turns celebrity-wear material into ongoing content archives, or sources local content through seeding to Chinese influencers. Wanghong livestream commerce moves forward once a suitable wanghong match is confirmed — a line sheet is shared, wholesale pricing and terms are agreed, and product ships against the resulting orders.",
        },
        {
          q: "How does boutique placement work?",
          a: "A local buyer reviews the brand's line sheet and places orders for the products they want, typically run as an outright wholesale-priced purchase.",
        },
        {
          q: "Do you also handle overseas master distribution?",
          a: "We typically start with a small test order to gauge local response, and once sales performance and market potential are confirmed, we can move forward to negotiate a master distribution agreement.",
        },
      ],
      metaTitle: "Global Expansion — Fashion PR | CLAMOA",
      metaDescription:
        "Global expansion connects Korean fashion brands to Asian markets — overseas boutique placement, Xiaohongshu marketing, and wanghong livestream commerce.",
    },
  },
};

export default data;
