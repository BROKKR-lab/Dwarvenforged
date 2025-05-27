// Content data for Dwarven Forged Spider Mite Guide
const spiderMiteContentData = {
    // Introduction Section
    "intro": `
        <div class="content-header">
            <img src="https://www.dwarvenforged.com/spidermiteguide/img/spider-mite-warfare-hero.jpg" alt="Dwarven Forged Spider Mite Guide" class="hero-image">
            <h1>DWARVEN FORGED SPIDER MITE GUIDE</h1>
            <div class="subtitle">DEFEATING THE TINY DESTROYERS</div>
        </div>
        
        <div class="intro-text">
            <p>Spider mites are the most feared pest in cannabis cultivation - microscopic destroyers capable of devastating entire crops in days. Unlike larger pests, these tiny arachnids multiply at frightening speed and can destroy your plants from within before you even notice their presence.</p>
            <p>This specialized warfare guide provides proven strategies to prevent, identify, and eliminate spider mites from your cultivation operation using time-tested dwarven tactics.</p>
        </div>
        
        <p>Master the art of spider mite warfare through systematic prevention, early detection, and decisive action. Each section provides battle-tested techniques from growers who have faced these microscopic enemies and emerged victorious.</p>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>Spider mites can go from 10 to 100,000 in two months. Prevention and early detection aren't optional - they're survival.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('enemy')">Next: Know Your Enemy</button>
        </div>
    `,

    // Know Your Enemy Section
    "enemy": `
        <h1>Know Your Enemy</h1>
        
        <p>Spider mites are not insects - they're arachnids related to spiders and ticks. Understanding their biology is crucial to defeating them.</p>
        
        <h3>Physical Characteristics</h3>
        <ul>
            <li><strong>Size:</strong> Less than 1mm (0.04 inches) - barely visible to naked eye</li>
            <li><strong>Color:</strong> Green, brown, or red depending on species and diet</li>
            <li><strong>Legs:</strong> 8 legs as adults (6 as larvae)</li>
            <li><strong>Webbing:</strong> Produce fine silk webs for protection</li>
        </ul>
        
        <h3>The Lifecycle Threat</h3>
        <div class="lifecycle-display">
            <div class="lifecycle-stage">
                <h4>Egg Stage</h4>
                <p>Tiny transparent spheres laid on leaf undersides. Hatch in 3-5 days in ideal conditions.</p>
            </div>
            <div class="lifecycle-stage">
                <h4>Larva Stage</h4>
                <p>6-legged, colorless. Feeds immediately upon hatching. Lasts 2-4 days.</p>
            </div>
            <div class="lifecycle-stage">
                <h4>Nymph Stages</h4>
                <p>Two nymph stages with 8 legs. Rapid feeding and growth. 2-4 days each.</p>
            </div>
            <div class="lifecycle-stage">
                <h4>Adult Stage</h4>
                <p>Reproducing adults. Females lay 100+ eggs over 2-4 week lifespan.</p>
            </div>
        </div>
        
        <h3>Why They're So Dangerous</h3>
        <ul>
            <li><strong>Explosive Reproduction:</strong> Complete lifecycle in 5-20 days depending on temperature</li>
            <li><strong>Ideal Conditions:</strong> Thrive in warm (80°F+), dry (under 50% humidity) conditions</li>
            <li><strong>Hidden Feeding:</strong> Live on leaf undersides, protected by webbing</li>
            <li><strong>Cell Damage:</strong> Pierce cells to suck contents, causing permanent damage</li>
        </ul>
        
        <div class="danger-box">
            <h4>🚨 The Cannabis Specialist</h4>
            <p>Some spider mite populations have adapted specifically to cannabis, making them extremely difficult to eliminate. These "borg" mites can develop resistance to treatments and survive conditions that kill other mites.</p>
        </div>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>If you can see spider mites with your naked eye, you already have millions in your grow room. Act immediately.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('intro')">Previous: Introduction</button>
            <button class="nav-button" onclick="showSection('identification')">Next: Identification & Detection</button>
        </div>
    `,

    // Identification Section
    "identification": `
        <h1>Identification & Detection</h1>
        
        <p>Early detection is your most powerful weapon. By the time damage is obvious, you're fighting a massive infestation.</p>
        
        <h3>Early Warning Signs</h3>
        <ul>
            <li><strong>Tiny Spots:</strong> Small yellow or white stippling on leaf surfaces</li>
            <li><strong>Fine Webbing:</strong> Silky threads on leaves, stems, and growing tips</li>
            <li><strong>Leaf Bronzing:</strong> Leaves take on bronze or yellow discoloration</li>
            <li><strong>Microscopic Movement:</strong> Tiny moving dots on leaf undersides</li>
        </ul>
        
        <h3>Damage Progression</h3>
        <table class="treatment-table">
            <thead>
                <tr>
                    <th>Stage</th>
                    <th>Symptoms</th>
                    <th>Action Required</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Early (Days 1-7)</td>
                    <td>Few tiny spots, minimal webbing</td>
                    <td>Immediate treatment - high success rate</td>
                </tr>
                <tr>
                    <td>Moderate (Days 7-14)</td>
                    <td>Visible stippling, light webbing</td>
                    <td>Aggressive treatment required</td>
                </tr>
                <tr>
                    <td>Heavy (Days 14+)</td>
                    <td>Extensive webbing, leaf yellowing</td>
                    <td>Emergency protocols, consider plant removal</td>
                </tr>
                <tr>
                    <td>Severe (Days 21+)</td>
                    <td>Leaf death, plant stress</td>
                    <td>Crop loss likely, prevent spread</td>
                </tr>
            </tbody>
        </table>
        
        <h3>Detection Tools</h3>
        <ul>
            <li><strong>Magnifying Glass:</strong> 10x minimum for visual inspection</li>
            <li><strong>Digital Microscope:</strong> USB microscopes for detailed examination</li>
            <li><strong>White Paper Test:</strong> Shake leaves over white paper to see mites</li>
            <li><strong>Sticky Traps:</strong> Yellow traps catch flying adult males</li>
        </ul>
        
        <h3>Inspection Protocol</h3>
        <ol>
            <li><strong>Daily Visual:</strong> Check plants during daily routine</li>
            <li><strong>Weekly Magnified:</strong> Detailed inspection with magnification</li>
            <li><strong>Focus Areas:</strong> Lower leaves, inner canopy, stressed plants</li>
            <li><strong>Environmental Check:</strong> Monitor temperature and humidity</li>
        </ol>
        
        <div class="warning-box">
            <h4>⚠️ Species Identification</h4>
            <p>Two-spotted spider mites (most common), broad mites, and russet mites all require different treatment approaches. Proper identification determines treatment success.</p>
        </div>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>The best time to find spider mites is before they find your plants. Daily inspection is your early warning system.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('enemy')">Previous: Know Your Enemy</button>
            <button class="nav-button" onclick="showSection('prevention')">Next: Fortress Defense</button>
        </div>
    `,

    // Prevention Section
    "prevention": `
        <h1>Fortress Defense</h1>
        
        <p>Prevention is your primary defense against spider mites. A properly designed prevention system makes infestation nearly impossible.</p>
        
        <h3>Entry Point Control</h3>
        <ul>
            <li><strong>Filtered Air:</strong> HEPA filters on all air intakes</li>
            <li><strong>Quarantine Protocol:</strong> 2-3 week isolation for all new plants</li>
            <li><strong>Clone Screening:</strong> Inspect all clones with magnification</li>
            <li><strong>Personnel Hygiene:</strong> Clean clothes, hand washing, shoe covers</li>
        </ul>
        
        <h3>Facility Design</h3>
        <ul>
            <li><strong>Plant Spacing:</strong> Adequate space prevents mite movement between plants</li>
            <li><strong>Air Circulation:</strong> Constant airflow disrupts mite establishment</li>
            <li><strong>Clean Surfaces:</strong> Remove debris and dust regularly</li>
            <li><strong>Isolation Barriers:</strong> Physical separation between growing areas</li>
        </ul>
        
        <h3>Genetic Considerations</h3>
        <ul>
            <li><strong>Seed vs. Clone:</strong> Seeds never carry mites, clones often do</li>
            <li><strong>Source Verification:</strong> Only acquire genetics from clean facilities</li>
            <li><strong>Mother Plant Protection:</strong> Isolate and monitor breeding stock</li>
            <li><strong>Resistant Strains:</strong> Some genetics show natural mite resistance</li>
        </ul>
        
        <h3>Preventive Treatments</h3>
        <ul>
            <li><strong>Weekly Sprays:</strong> Rotate neem oil, insecticidal soap, essential oils</li>
            <li><strong>Predatory Mites:</strong> Establish beneficial populations before problems</li>
            <li><strong>Plant Health:</strong> Strong plants resist mite damage better</li>
            <li><strong>Environmental Control:</strong> Maintain conditions hostile to mites</li>
        </ul>
        
        <div class="success-box">
            <h4>✅ Clean Room Protocols</h4>
            <ul>
                <li>Change clothes before entering grow areas</li>
                <li>Wash hands and use hand sanitizer</li>
                <li>Never visit other grows before your own</li>
                <li>Keep pets out of growing areas</li>
                <li>Disinfect tools between plants</li>
            </ul>
        </div>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>The most common source of spider mites is infected clones. If you must use clones, quarantine them for 3 weeks and inspect daily with magnification.</p>
       </div>
       
       <div class="nav-buttons">
           <button class="nav-button" onclick="showSection('identification')">Previous: Identification & Detection</button>
           <button class="nav-button" onclick="showSection('environmental')">Next: Environmental Warfare</button>
       </div>
   `,

   // Environmental Section
   "environmental": `
       <h1>Environmental Warfare</h1>
       
       <p>Spider mites have specific environmental preferences. Control their environment to control their population.</p>
       
       <h3>Temperature Control</h3>
       <ul>
           <li><strong>Mite Preference:</strong> 80-90°F (27-32°C) for rapid reproduction</li>
           <li><strong>Optimal Cannabis:</strong> 75-80°F (24-27°C) - still allows mites but slows them</li>
           <li><strong>Mite Suppression:</strong> Below 70°F (21°C) significantly slows reproduction</li>
           <li><strong>Lethal Temperatures:</strong> Above 104°F (40°C) or below 50°F (10°C)</li>
       </ul>
       
       <h3>Humidity Management</h3>
       <ul>
           <li><strong>Mite Paradise:</strong> Below 50% humidity</li>
           <li><strong>Mite Suppression:</strong> 55-65% humidity slows reproduction</li>
           <li><strong>Beneficial Zone:</strong> 60-70% favors predatory mites over spider mites</li>
           <li><strong>Balance Point:</strong> Find sweet spot that helps plants but hurts mites</li>
       </ul>
       
       <h3>Air Movement Strategy</h3>
       <ul>
           <li><strong>Constant Circulation:</strong> Mites hate windy conditions</li>
           <li><strong>Gentle Breeze:</strong> Strong enough to disrupt mites, gentle on plants</li>
           <li><strong>No Dead Zones:</strong> Stagnant air creates mite havens</li>
           <li><strong>Leaf Surface Movement:</strong> Keep leaf surfaces moving</li>
       </ul>
       
       <h3>Light Spectrum Effects</h3>
       <ul>
           <li><strong>UV-B Light:</strong> Can stress mites and trigger plant defenses</li>
           <li><strong>Full Spectrum:</strong> Healthy plants resist mite damage better</li>
           <li><strong>Light Intensity:</strong> Stressed plants from poor lighting attract mites</li>
       </ul>
       
       <div class="success-box">
           <h4>✅ Anti-Mite Environment</h4>
           <ul>
               <li>Temperature: 70-75°F (21-24°C)</li>
               <li>Humidity: 60-65% RH</li>
               <li>Air movement: Constant gentle circulation</li>
               <li>Clean surfaces: No dust or debris</li>
           </ul>
       </div>
       
       <div class="tip-box">
           <h4>Dwarven Wisdom:</h4>
           <p>Spider mites love the same conditions that stress cannabis plants. Optimize for plant health, not mite comfort.</p>
       </div>
       
       <div class="nav-buttons">
           <button class="nav-button" onclick="showSection('prevention')">Previous: Fortress Defense</button>
           <button class="nav-button" onclick="showSection('organic')">Next: Organic Arsenal</button>
       </div>
   `,

   // Organic Arsenal Section
   "organic": `
       <h1>Organic Arsenal</h1>
       
       <p>Organic treatments provide safe, effective spider mite control without harmful residues.</p>
       
       <h3>Neem Oil - The Multi-Tool</h3>
       <ul>
           <li><strong>Active Compounds:</strong> Azadirachtin disrupts mite reproduction</li>
           <li><strong>Application:</strong> 1-2 tbsp per quart + 1 tsp soap</li>
           <li><strong>Timing:</strong> Lights-off only to prevent burn</li>
           <li><strong>Coverage:</strong> Focus on leaf undersides where mites hide</li>
       </ul>
       
       <h3>Essential Oil Blends</h3>
       <ul>
           <li><strong>Rosemary Oil:</strong> Paralyzes mites' nervous system</li>
           <li><strong>Peppermint Oil:</strong> Repels and kills on contact</li>
           <li><strong>Clove Oil:</strong> Contact killer, strong repellent</li>
           <li><strong>Application:</strong> 0.1-0.5% concentration with surfactant</li>
       </ul>
       
       <h3>Insecticidal Soap</h3>
       <ul>
           <li><strong>How it Works:</strong> Suffocates mites by coating their bodies</li>
           <li><strong>Safety:</strong> Non-toxic to plants and humans</li>
           <li><strong>Application:</strong> Must contact mites directly to be effective</li>
           <li><strong>Frequency:</strong> Every 3 days to break lifecycle</li>
       </ul>
       
       <h3>Horticultural Oils</h3>
       <ul>
           <li><strong>Petroleum-based:</strong> Superior Oil, Year-Round Oil</li>
           <li><strong>Plant-based:</strong> Canola, soybean, cottonseed oil</li>
           <li><strong>Application Rate:</strong> 1-2% concentration</li>
           <li><strong>Timing:</strong> Cool temperatures, lights-off period</li>
       </ul>
       
       <h3>Treatment Schedule</h3>
       <table class="treatment-table">
           <thead>
               <tr>
                   <th>Day</th>
                   <th>Treatment</th>
                   <th>Target</th>
               </tr>
           </thead>
           <tbody>
               <tr>
                   <td>1</td>
                   <td>Neem oil spray</td>
                   <td>Adults and nymphs</td>
               </tr>
               <tr>
                   <td>4</td>
                   <td>Insecticidal soap</td>
                   <td>Newly hatched larvae</td>
               </tr>
               <tr>
                   <td>7</td>
                   <td>Essential oil blend</td>
                   <td>Surviving adults</td>
               </tr>
               <tr>
                   <td>10</td>
                   <td>Horticultural oil</td>
                   <td>Next generation eggs</td>
               </tr>
           </tbody>
       </table>
       
       <div class="warning-box">
           <h4>⚠️ Application Guidelines</h4>
           <p>Always apply treatments with lights off and fans off for 3-4 hours. Test on small area first. Never mix multiple oil-based products.</p>
       </div>
       
       <div class="tip-box">
           <h4>Dwarven Wisdom:</h4>
           <p>Rotate treatments to prevent resistance. Mites adapt quickly to repeated use of the same product.</p>
       </div>
       
       <div class="nav-buttons">
           <button class="nav-button" onclick="showSection('environmental')">Previous: Environmental Warfare</button>
           <button class="nav-button" onclick="showSection('biological')">Next: Predator Army</button>
       </div>
   `,

   // Biological Section
   "biological": `
       <h1>Predator Army</h1>
       
       <p>Deploy nature's own spider mite hunters to establish long-term population control.</p>
       
       <h3>Predatory Mites - The Elite Forces</h3>
       
       <h4>Phytoseiulus persimilis</h4>
       <ul>
           <li><strong>Specialty:</strong> Spider mite specialist, extremely effective</li>
           <li><strong>Hunting Style:</strong> Actively seeks out spider mite colonies</li>
           <li><strong>Reproduction:</strong> Faster reproduction than spider mites</li>
           <li><strong>Environment:</strong> Prefers higher humidity (60%+)</li>
       </ul>
       
       <h4>Neoseiulus californicus</h4>
       <ul>
           <li><strong>Versatility:</strong> Survives without prey, eats pollen</li>
           <li><strong>Tolerance:</strong> Wide temperature range (50-95°F)</li>
           <li><strong>Persistence:</strong> Establishes long-term populations</li>
           <li><strong>Application:</strong> Excellent for prevention</li>
       </ul>
       
       <h4>Amblyseius swirskii</h4>
       <ul>
           <li><strong>Multi-target:</strong> Eats spider mites, thrips, whiteflies</li>
           <li><strong>Survivability:</strong> Can survive on plant pollen</li>
           <li><strong>Temperature:</strong> Performs well in warmer conditions</li>
       </ul>
       
       <h3>Other Beneficial Predators</h3>
       <ul>
           <li><strong>Ladybugs:</strong> Eat mites and their eggs</li>
           <li><strong>Lacewing Larvae:</strong> Voracious mite predators</li>
           <li><strong>Minute Pirate Bugs:</strong> Fast-moving generalist predators</li>
           <li><strong>Predatory Thrips:</strong> Hunt mites in tight spaces</li>
       </ul>
       
       <h3>Release Strategy</h3>
       <ul>
           <li><strong>Preventive Releases:</strong> Before mite problems appear</li>
           <li><strong>Curative Releases:</strong> Higher numbers for active infestations</li>
           <li><strong>Multiple Species:</strong> Different predators for different conditions</li>
           <li><strong>Sustained Releases:</strong> Weekly releases for 3-4 weeks</li>
       </ul>
       
       <h3>Supporting Predator Success</h3>
       <ul>
           <li><strong>Humidity:</strong> 60-70% RH favors predatory mites</li>
           <li><strong>Avoid Pesticides:</strong> Most pesticides kill beneficial insects</li>
           <li><strong>Pollen Sources:</strong> Provide alternative food sources</li>
           <li><strong>Shelter:</strong> Rough surfaces and plant debris for hiding</li>
       </ul>
       
       <div class="success-box">
           <h4>✅ Biological Control Success</h4>
           <ul>
               <li>Release predators before spider mite establishment</li>
               <li>Maintain environmental conditions favoring predators</li>
               <li>Monitor predator establishment and effectiveness</li>
               <li>Supplement with compatible organic treatments</li>
           </ul>
       </div>
       
       <div class="tip-box">
           <h4>Dwarven Wisdom:</h4>
           <p>Predatory mites are your long-term insurance policy. They work 24/7 hunting spider mites so you don't have to.</p>
       </div>
       
       <div class="nav-buttons">
           <button class="nav-button" onclick="showSection('organic')">Previous: Organic Arsenal</button>
           <button class="nav-button" onclick="showSection('treatment')">Next: Treatment Protocols</button>
       </div>
   `,

   // Treatment Section
   "treatment": `
       <h1>Treatment Protocols</h1>
       
       <p>When spider mites establish, systematic treatment protocols can eliminate them before crop damage occurs.</p>
       
       <h3>Early Stage Treatment (First Week)</h3>
       <ol>
           <li><strong>Immediate Isolation:</strong> Separate affected plants</li>
           <li><strong>Physical Removal:</strong> Wash plants with water spray</li>
           <li><strong>Neem Oil Treatment:</strong> 2 tbsp/quart every 3 days</li>
           <li><strong>Environmental Adjustment:</strong> Increase humidity, improve airflow</li>
       </ol>
       
       <h3>Moderate Infestation Protocol</h3>
       <ul>
           <li><strong>Day 1:</strong> Thorough water wash + neem oil spray</li>
           <li><strong>Day 3:</strong> Insecticidal soap application</li>
           <li><strong>Day 6:</strong> Essential oil blend treatment</li>
           <li><strong>Day 9:</strong> Predatory mite release</li>
           <li><strong>Day 12:</strong> Follow-up neem oil application</li>
       </ul>
       
       <h3>Heavy Infestation Emergency</h3>
       <ul>
           <li><strong>Plant Triage:</strong> Remove heavily infested plants</li>
           <li><strong>Aggressive Washing:</strong> High-pressure water rinse</li>
           <li><strong>Daily Treatments:</strong> Alternate spray applications</li>
           <li><strong>Environmental Shock:</strong> Drop temperature, raise humidity</li>
           <li><strong>Predator Flood:</strong> Massive beneficial insect releases</li>
       </ul>
       
       <h3>Application Techniques</h3>
       <ul>
           <li><strong>Complete Coverage:</strong> Top and bottom of all leaves</li>
           <li><strong>Pressure Settings:</strong> Fine mist to penetrate webbing</li>
           <li><strong>Timing:</strong> Lights-off period, cool temperatures</li>
           <li><strong>Penetration:</strong> Move leaves to reach protected areas</li>
       </ul>
       
       <h3>Monitoring Treatment Success</h3>
       <table class="treatment-table">
           <thead>
               <tr>
                   <th>Timeline</th>
                   <th>Success Indicators</th>
                   <th>Failure Signs</th>
               </tr>
           </thead>
           <tbody>
               <tr>
                   <td>3 Days</td>
                   <td>Reduced mite movement</td>
                   <td>Continued feeding damage</td>
               </tr>
               <tr>
                   <td>1 Week</td>
                   <td>No new stippling</td>
                   <td>Spreading damage</td>
               </tr>
               <tr>
                   <td>2 Weeks</td>
                   <td>Webbing disappearing</td>
                   <td>New webbing formation</td>
               </tr>
               <tr>
                   <td>3 Weeks</td>
                   <td>No mites visible</td>
                   <td>Population rebound</td>
               </tr>
           </tbody>
       </table>
       
       <div class="warning-box">
           <h4>⚠️ Treatment Resistance</h4>
           <p>Spider mites develop resistance quickly. If treatments aren't working after 1 week, switch to different active ingredients immediately.</p>
       </div>
       
       <div class="tip-box">
           <h4>Dwarven Wisdom:</h4>
           <p>Treat the entire growing area, not just affected plants. Mites travel on air currents and can reinfest cleaned plants within hours.</p>
       </div>
       
       <div class="nav-buttons">
           <button class="nav-button" onclick="showSection('biological')">Previous: Predator Army</button>
           <button class="nav-button" onclick="showSection('emergency')">Next: Crisis Response</button>
       </div>
   `,

   // Emergency Section
   "emergency": `
       <h1>Crisis Response</h1>
       
       <p>When spider mites reach crisis levels, immediate decisive action determines whether you save the crop or lose everything.</p>
       
       <h3>Crisis Recognition</h3>
       <p>You're in crisis when:</p>
       <ul>
           <li>Visible webbing covers growing tips</li>
           <li>Leaves are yellowing and dropping</li>
           <li>Mites visible without magnification</li>
           <li>Multiple plants affected simultaneously</li>
       </ul>
       
       <h3>Immediate Response (First 24 Hours)</h3>
       <ol>
           <li><strong>Stop the Spread:</strong> Isolate all affected plants immediately</li>
           <li><strong>Environmental Shock:</strong> Drop temperature 10°F, raise humidity to 70%</li>
           <li><strong>Physical Removal:</strong> Wash all plants with strong water spray</li>
           <li><strong>Emergency Treatment:</strong> Apply strongest organic treatment available</li>
       </ol>
       
       <h3>Triage Decision Making</h3>
       <table class="treatment-table">
           <thead>
               <tr>
                   <th>Plant Condition</th>
                   <th>Webbing Level</th>
                   <th>Action</th>
               </tr>
           </thead>
           <tbody>
               <tr>
                   <td>Minimal damage</td>
                   <td>No visible webbing</td>
                   <td>Aggressive treatment</td>
               </tr>
               <tr>
                   <td>Moderate damage</td>
                   <td>Light webbing</td>
                   <td>Intensive protocol</td>
               </tr>
               <tr>
                   <td>Heavy damage</td>
                   <td>Extensive webbing</td>
                   <td>Consider removal</td>
               </tr>
               <tr>
                   <td>Severe damage</td>
                   <td>Webbing on buds</td>
                   <td>Immediate removal</td>
               </tr>
           </tbody>
       </table>
       
       <h3>Salvage Operations</h3>
       <ul>
           <li><strong>Leaf Removal:</strong> Cut off heavily infested leaves in sealed bags</li>
           <li><strong>Plant Sacrifice:</strong> Remove plants that threaten others</li>
           <li><strong>Quarantine Expansion:</strong> Isolate suspected plants</li>
           <li><strong>Treatment Intensity:</strong> Daily applications until control achieved</li>
       </ul>
       
       <h3>Emergency Environmental Controls</h3>
       <ul>
           <li><strong>Temperature Drop:</strong> 65-70°F to slow reproduction</li>
           <li><strong>Humidity Spike:</strong> 70-80% RH to stress mites</li>
           <li><strong>Air Movement:</strong> Maximum safe fan speed</li>
           <li><strong>Light Adjustment:</strong> Reduce intensity to lower temperature</li>
       </ul>
       
       <h3>When to Cut Losses</h3>
       <ul>
           <li>Webbing on 75%+ of plants</li>
           <li>Flowering plants with bud contamination</li>
           <li>Multiple treatment failures</li>
           <li>Economic analysis favors restart</li>
       </ul>
       
       <div class="danger-box">
           <h4>🚨 Total Facility Shutdown</h4>
           <p>If mites are throughout your facility with heavy webbing on buds, consider complete shutdown and sterilization. Sometimes strategic retreat prevents total loss.</p>
       </div>
       
       <div class="tip-box">
           <h4>Dwarven Wisdom:</h4>
           <p>In crisis, speed matters more than perfection. Act decisively - you can refine tactics later if you still have plants to save.</p>
       </div>
       
       <div class="nav-buttons">
           <button class="nav-button" onclick="showSection('treatment')">Previous: Treatment Protocols</button>
           <button class="nav-button" onclick="showSection('cleanup')">Next: Forge Purification</button>
       </div>
   `,

   // Cleanup Section
   "cleanup": `
       <h1>Forge Purification</h1>
       
       <p>After spider mite infestation, your facility is contaminated with eggs and mites that can survive for weeks. Complete purification prevents reinfection.</p>
       
       <h3>Immediate Cleanup</h3>
       <ul>
           <li><strong>Plant Material Removal:</strong> All infected plants in sealed bags</li>
           <li><strong>Surface Cleaning:</strong> Vacuum all surfaces with HEPA filter</li>
           <li><strong>Debris Elimination:</strong> Remove all dead leaves and plant matter</li>
           <li><strong>Equipment Cleaning:</strong> Disinfect all tools and equipment</li>
       </ul>
       
       <h3>Deep Cleaning Protocol</h3>
       <ol>
           <li><strong>Vacuuming:</strong> HEPA vacuum all surfaces, cracks, crevices</li>
           <li><strong>Washing:</strong> Scrub with detergent solution</li>
           <li><strong>Disinfection:</strong> Apply alcohol or hydrogen peroxide</li>
           <li><strong>Drying:</strong> Complete drying before plant reintroduction</li>
       </ol>
       
       <h3>Environmental Purification</h3>
       <ul>
           <li><strong>Temperature Treatment:</strong> Heat room to 110°F+ for 4 hours</li>
           <li><strong>Humidity Shock:</strong> 90%+ humidity for 24 hours</li>
           <li><strong>Air Filtration:</strong> Run HEPA filters continuously</li>
           <li><strong>UV Treatment:</strong> UV-C lights for surface sterilization</li>
       </ul>
       
       <h3>HVAC System Cleaning</h3>
       <ul>
           <li><strong>Filter Replacement:</strong> Replace all air filters</li>
           <li><strong>Duct Cleaning:</strong> Professional cleaning if heavily infested</li>
           <li><strong>Fan Cleaning:</strong> Disassemble and clean all fans</li>
           <li><strong>System Testing:</strong> Verify proper operation</li>
       </ul>
       
       <h3>Verification Testing</h3>
       <ul>
           <li><strong>Visual Inspection:</strong> No mites or webbing visible</li>
           <li><strong>Indicator Plants:</strong> Susceptible plants as test subjects</li>
           <li><strong>Monitoring Period:</strong> 2-3 weeks before full restart</li>
           <li><strong>Sticky Traps:</strong> Monitor for flying adult males</li>
       </ul>
       
       <h3>Equipment Replacement</h3>
       <ul>
           <li><strong>Growing Medium:</strong> Replace all soil, coco, rockwool</li>
           <li><strong>Fabric Pots:</strong> Difficult to clean completely</li>
           <li><strong>Tubing/Lines:</strong> Replace hydroponic lines</li>
           <li><strong>Filters:</strong> All air and water filters</li>
       </ul>
       
       <div class="warning-box">
           <h4>⚠️ Hidden Survivors</h4>
           <p>Spider mites can survive in cracks, under equipment, and in HVAC systems. Incomplete cleaning leads to rapid reinfection.</p>
       </div>
       
       <div class="tip-box">
           <h4>Dwarven Wisdom:</h4>
           <p>Cleaning costs more than prevention but less than repeated infestations. Do it once, do it right.</p>
       </div>
       
       <div class="nav-buttons">
           <button class="nav-button" onclick="showSection('emergency')">Previous: Crisis Response</button>
           <button class="nav-button" onclick="showSection('recovery')">Next: Recovery & Prevention</button>
       </div>
   `,

   // Recovery Section
   "recovery": `
       <h1>Recovery & Prevention</h1>
       
       <p>Recovery from spider mite infestation requires systematic restart with enhanced prevention protocols.</p>
       
       <h3>Restart Planning</h3>
       <ul>
           <li><strong>Facility Assessment:</strong> Verify complete decontamination</li>
           <li><strong>System Upgrades:</strong> Improve weak points identified during outbreak</li>
           <li><strong>Prevention Enhancement:</strong> Implement stronger protocols</li>
           <li><strong>Staff Training:</strong> Update procedures based on lessons learned</li>
       </ul>
       
       <h3>Gradual Restart Protocol</h3>
       
       <h4>Phase 1: Test Phase (Weeks 1-2)</h4>
       <ul>
           <li>Start with 10-20% normal capacity</li>
           <li>Use highly susceptible indicator plants</li>
           <li>Daily inspections with magnification</li>
           <li>Immediate response protocols ready</li>
       </ul>
       
       <h4>Phase 2: Expansion (Weeks 3-4)</h4>
       <ul>
           <li>Increase to 50% capacity if no mites detected</li>
           <li>Continue intensive monitoring</li>
           <li>Begin preventive biological control</li>
           <li>Test all systems under partial load</li>
       </ul>
       
       <h4>Phase 3: Full Operation (Week 5+)</h4>
       <ul>
           <li>Return to full capacity</li>
           <li>Standard monitoring routines</li>
           <li>Continuous improvement mindset</li>
           <li>Enhanced prevention protocols</li>
       </ul>
       
       <h3>Enhanced Prevention Program</h3>
       <ul>
           <li><strong>Stricter Quarantine:</strong> 3-4 weeks for all new genetics</li>
           <li><strong>Regular Predator Releases:</strong> Monthly beneficial insect applications</li>
           <li><strong>Environmental Monitoring:</strong> Continuous temperature and humidity logging</li>
           <li><strong>Weekly Inspections:</strong> Systematic plant-by-plant examination</li>
       </ul>
       
       <h3>Genetic Strategy</h3>
       <ul>
           <li><strong>Seed Priority:</strong> Use seeds instead of clones when possible</li>
           <li><strong>Source Diversification:</strong> Multiple clean genetic sources</li>
           <li><strong>Resistance Breeding:</strong> Select for mite-resistant traits</li>
           <li><strong>Mother Plant Isolation:</strong> Ultra-clean mother room protocols</li>
       </ul>
       
       <h3>Long-term Monitoring</h3>
       <ul>
           <li><strong>Sticky Trap Network:</strong> Yellow traps throughout facility</li>
           <li><strong>Regular Sampling:</strong> Weekly leaf inspections</li>
           <li><strong>Environmental Alerts:</strong> Automated warnings for mite-favorable conditions</li>
           <li><strong>Staff Training:</strong> Ongoing education on mite identification</li>
       </ul>
       
       <div class="success-box">
           <h4>✅ Recovery Success Indicators</h4>
           <ul>
               <li>3+ months without mite detection</li>
               <li>Healthy predator populations established</li>
               <li>Consistent environmental controls</li>
               <li>Staff confidence in identification and response</li>
           </ul>
       </div>
       
       <div class="tip-box">
           <h4>Dwarven Wisdom:</h4>
           <p>Recovery is opportunity to build better defenses. Don't just restart - restart stronger than before.</p>
       </div>
       
       <div class="nav-buttons">
           <button class="nav-button" onclick="showSection('cleanup')">Previous: Forge Purification</button>
           <button class="nav-button" onclick="showSection('mastery')">Next: Mite Mastery</button>
       </div>
   `,

   // Mastery Section
   "mastery": `
       <h1>Mite Mastery</h1>
       
       <p>True spider mite mastery combines prevention, detection, and response into a comprehensive defense system that keeps your cultivation mite-free.</p>
       
       <h3>The Master's Checklist</h3>
       
       <h4>Prevention Mastery</h4>
       <ul>
           <li>✓ Clean room protocols strictly followed</li>
           <li>✓ All genetics quarantined and tested</li>
           <li>✓ Environmental conditions optimized against mites</li>
           <li>✓ Preventive biological control established</li>
           <li>✓ Weekly organic prevention treatments</li>
       </ul>
       
       <h4>Detection Mastery</h4>
       <ul>
           <li>✓ Daily visual inspections routine</li>
           <li>✓ Weekly magnified examinations</li>
           <li>✓ Sticky trap monitoring system</li>
           <li>✓ Environmental monitoring alerts</li>
           <li>✓ Staff trained in early identification</li>
       </ul>
       
       <h4>Response Mastery</h4>
       <ul>
           <li>✓ Treatment protocols documented and tested</li>
           <li>✓ Emergency response procedures ready</li>
           <li>✓ Treatment materials always in stock</li>
           <li>✓ Predatory mites available on short notice</li>
           <li>✓ Facility decontamination procedures proven</li>
       </ul>
       
       <h3>Advanced Techniques</h3>
       <ul>
           <li><strong>Integrated Pest Management:</strong> Multiple control methods working together</li>
           <li><strong>Predictive Modeling:</strong> Environmental data predicts mite risk</li>
           <li><strong>Biological Banking:</strong> Maintain beneficial predator colonies</li>
           <li><strong>Genetic Selection:</strong> Breed for natural mite resistance</li>
       </ul>
       
       <h3>Mastery Indicators</h3>
       <ul>
           <li>12+ months without spider mite detection</li>
           <li>Healthy predator populations self-sustaining</li>
           <li>Staff can identify mites at first glance</li>
           <li>Environmental controls automated and reliable</li>
           <li>Treatment response time under 2 hours</li>
       </ul>
       
       <h3>Sharing Knowledge</h3>
       <ul>
           <li><strong>Document Successes:</strong> Record what works for your situation</li>
           <li><strong>Learn from Failures:</strong> Analyze every outbreak for lessons</li>
           <li><strong>Community Support:</strong> Share knowledge with other growers</li>
           <li><strong>Continuous Improvement:</strong> Always refining and upgrading</li>
       </ul>
       
       <div class="success-box">
           <h4>✅ The Master's Advantage</h4>
           <p>Masters don't just prevent spider mites - they create environments where mites cannot survive while cannabis thrives. This is the ultimate goal of mite mastery.</p>
       </div>
       
       <div class="tip-box">
           <h4>Dwarven Wisdom:</h4>
           <p>True mastery means never having to use emergency protocols because prevention never fails. Build systems so robust that mites simply cannot establish.</p>
       </div>
       
       <p><strong>Remember:</strong> Spider mites are a manageable threat when you understand their biology, control their environment, and maintain constant vigilance. Master these principles and your cultivation will remain mite-free.</p>
       
       <div class="nav-buttons">
           <button class="nav-button" onclick="showSection('recovery')">Previous: Recovery & Prevention</button>
           <button class="nav-button" onclick="showSection('intro')">Back to Introduction</button>
       </div>
   `
};
