const DATABASE = {
  items: [
    {
      id: "is-ww2-invasion-of-poland-1939",
      meta: {
        title: "Invasion of Poland (1939)",
        subtitle: "The Campaign that Opened World War II in Europe",
        blurb: "Germany and the USSR partition Poland; war in Europe begins.",
        tags: ["europe", "western-front", "land", "1939"]
      },
      content: {
        summary: "On 1 September 1939, Germany invaded Poland from the west, north, and south; on 17 September, the USSR invaded from the east under the terms of the Molotov–Ribbentrop Pact. Rapid German mechanized thrusts, close air support, and encirclements overwhelmed Polish defenses despite stubborn resistance at places like Westerplatte, the Bzura, and Warsaw. By early October, organized Polish resistance had collapsed and Germany and the Soviet Union partitioned the country, triggering Britain and France’s declarations of war on Germany and the start of WWII in Europe.",
        context: [
          "<strong>German Aim:</strong> Destroy Poland quickly to secure eastern flank and reclaim territory lost after WWI.",
          "<strong>Soviet Aim:</strong> Occupy eastern Poland according to the secret protocol of the German–Soviet pact.",
          "<strong>Allied Position:</strong> Britain and France guaranteed Polish borders but could only wage a limited “Phoney War” in the west in 1939."
        ],
        forces: [
          "<strong>Germany:</strong> Army Groups North (Fedor von Bock) and South (Gerd von Rundstedt); key panzer leaders included Heinz Guderian and Walther von Reichenau; Luftwaffe under Albert Kesselring/Alexander Löhr in theater.",
          "<strong>Poland:</strong> Commander-in-Chief Marshal Edward Rydz-Śmigły; armies deployed forward along borders with limited reserves; Polish Air Force dispersed to reserve fields.",
          "<strong>USSR:</strong> Fronts under Mikhail Kovalyov and others entered from Belarus and Ukraine on 17 September, sealing Poland’s fate."
        ],
        timeline: [
          { label: "1 Sep", text: "Germany attacks; Gleiwitz incident used as pretext. Stukas and panzers spearhead breakthroughs." },
          { label: "1–7 Sep", text: "Battles along the borders; defense of Westerplatte in Danzig lasts seven days." },
          { label: "8–9 Sep", text: "German forces reach outskirts of Warsaw; Lodz falls." },
          { label: "9–19 Sep — Battle of the Bzura", text: "Largest Polish counteroffensive temporarily disrupts German plans but is encircled." },
          { label: "17 Sep", text: "Soviet invasion from the east; Polish high command orders withdrawal to Romania/Hungary for reorganization." },
          { label: "28 Sep", text: "Warsaw surrenders after heavy bombardment; German–Soviet Boundary Treaty signed." },
          { label: "2 Oct", text: "Hel Peninsula capitulates; last organized resistance ends by 6 Oct (Battle of Kock)." }
        ],
        turningPoints: [
          "<strong>Operational Shock:</strong> Combined-arms breakthroughs and air superiority shattered forward Polish deployments.",
          "<strong>Soviet Entry:</strong> 17 September closed escape routes and eliminated hope of a prolonged defense.",
          "<strong>Encirclements:</strong> Rapid pincer movements isolated armies west of the Vistula and around Warsaw."
        ],
        outcomes: [
          "<strong>Partition:</strong> Germany annexed western/central regions; USSR annexed eastern Poland; widespread repression followed.",
          "<strong>Allied War:</strong> Britain and France declared war on Germany (3 Sep), transforming the crisis into a European war.",
          "<strong>Polish Continuity:</strong> Government-in-exile formed; Polish forces later fought with Allies in multiple theaters."
        ],
        significance: [
          "<strong>Blitzkrieg Prototype:</strong> Demonstrated the speed and coordination of modern mechanized warfare and close air support.",
          "<strong>Geopolitical Shock:</strong> Revealed the reality of German–Soviet collaboration and the fragility of interwar borders.",
          "<strong>Human Cost:</strong> Civilian casualties, mass deportations, and atrocities foreshadowed the Eastern Front’s brutality."
        ],
        sources: [
          "<strong>Primary:</strong> German OKH/OKW war diaries; Polish operational reports; Soviet documents; diplomatic communiqués; contemporary press.",
          "<strong>Secondary:</strong> Steven Zaloga, <em>Poland 1939</em>; Roger Moorhouse, <em>Poland 1939: The Outbreak of World War II</em>; Williamson Murray & Allan Millett, <em>A War to Be Won</em>."
        ]
      }
    },
    {
      id: "is-ww2-battle-of-france-1940",
      meta: {
        title: "Battle of France (1940)",
        subtitle: "The Blitzkrieg that Shattered the Western Front",
        blurb: "Blitzkrieg through the Low Countries; fall of France.",
        tags: ["europe", "western-front", "land", "1940", "turning-point"]
      },
      content: {
        summary: "Ending the 'Phoney War,' Germany launched a stunning offensive in May 1940. While Army Group B drew Allied forces into Belgium, Army Group A executed the 'Manstein Plan,' driving armored columns through the dense Ardennes forest. This 'Sickle Cut' isolated the Allied armies in the north, leading to the evacuation at Dunkirk. With the best Allied units removed from the continent, German forces turned south, overwhelming remaining French resistance. France signed an armistice on 22 June, leaving Britain to stand alone.",
        context: [
          "<strong>The Phoney War:</strong> Following the fall of Poland, months of inactivity on the Western Front lulled Allies into reliance on the Maginot Line.",
          "<strong>Dyle Plan:</strong> The Allied strategy was to advance into Belgium to stop the Germans at the Dyle River, assuming the Ardennes was impassable to tanks.",
          "<strong>German Strategy:</strong> Shifted from the original Schlieffen-like plan to Manstein's bold proposal for a piercing thrust through the center."
        ],
        forces: [
          "<strong>Germany:</strong> 136 divisions. Key commanders: Gerd von Rundstedt, Ewald von Kleist, Erwin Rommel (7th Panzer). Dominant Luftwaffe air superiority.",
          "<strong>Allies:</strong> 144 divisions (French, British BEF, Belgian, Dutch). Commander-in-Chief Maurice Gamelin. Superior tank numbers but poor doctrine and communications.",
          "<strong>Technology:</strong> German Panzer III/IVs concentrated in divisions vs. French Char B1s dispersed in infantry support roles."
        ],
        timeline: [
          { label: "10 May", text: "German invasion of Netherlands, Belgium, and Luxembourg. Allies advance north as planned." },
          { label: "13-14 May", text: "Guderian's XIX Panzer Corps crosses the Meuse at Sedan; the decisive breakthrough." },
          { label: "15 May", text: "Dutch surrender. French reserves fail to contain the Panzer corridor." },
          { label: "20 May", text: "German tanks reach the English Channel at Abbeville, cutting off the BEF and French First Army." },
          { label: "26 May - 4 Jun", text: "Operation Dynamo: Over 338,000 Allied troops evacuated from Dunkirk." },
          { label: "5 Jun", text: "Case Red: German forces turn south to destroy remaining French armies." },
          { label: "14 Jun", text: "Paris falls; declared an open city to avoid destruction." },
          { label: "22 Jun", text: "Armistice signed at Compiègne in the same railway carriage used for the 1918 armistice." }
        ],
        turningPoints: [
          "<strong>The Sedan Breakthrough:</strong> Crossing the Meuse faster than French doctrine deemed possible unhinged the entire Allied defensive line.",
          "<strong>The Halt Order:</strong> Hitler's pause outside Dunkirk (24 May) allowed the Allies to organize a defensive perimeter for evacuation.",
          "<strong>Air Superiority:</strong> The Luftwaffe decimated Allied air power early, allowing Stukas to operate as flying artillery."
        ],
        outcomes: [
          "<strong>Occupation:</strong> Northern and Western France occupied; Vichy regime established in the south under Pétain.",
          "<strong>Britain Isolated:</strong> The UK remained the sole major power fighting Germany, leading to the Battle of Britain.",
          "<strong>Blitzkrieg Legend:</strong> The speed of victory convinced German leadership of their invincibility, influencing the decision to invade Russia."
        ],
        significance: [
          "<strong>End of Trench Warfare:</strong> Proved that mobility and combined arms had rendered static defenses like the Maginot Line obsolete.",
          "<strong>Geopolitical Shift:</strong> The rapid collapse of a perceived superpower (France) shocked the world and spurred US rearmament.",
          "<strong>Strategic Depth:</strong> Germany gained Atlantic ports for U-boats, intensifying the Battle of the Atlantic."
        ],
        sources: [
          "<strong>Primary:</strong> Rommel's <em>The Rommel Papers</em>; Marc Bloch, <em>Strange Defeat</em>; General Halder's Diaries.",
          "<strong>Secondary:</strong> Karl-Heinz Frieser, <em>The Blitzkrieg Legend</em>; Julian Jackson, <em>The Fall of France</em>; Alistair Horne, <em>To Lose a Battle</em>."
        ]
      }
    }
  ]
};
