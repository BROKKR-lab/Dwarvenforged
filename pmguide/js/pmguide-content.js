// Content data for Dwarven Forged PM Guide
const pmContentData = {
    // Introduction Section
    "intro": `
        <div class="content-header">
            <img src="https://www.dwarvenforged.com/pmguide/img/pm-warfare-hero.jpg" alt="Dwarven Forged PM Guide" class="hero-image">
            <h1>DWARVEN FORGED PM WARFARE GUIDE</h1>
            <div class="subtitle">CONQUERING THE INVISIBLE ENEMY</div>
        </div>
        
        <div class="intro-text">
            <p>Powdery mildew (PM) is the silent destroyer that has plagued cannabis cultivators since the dawn of indoor growing. Unlike other fungal enemies, PM thrives in the exact conditions we create for our plants and can devastate months of work in mere days.</p>
            <p>This specialized warfare guide provides proven strategies to prevent, identify, and eliminate powdery mildew from your cultivation operation.</p>
        </div>
        
        <p>Select any chapter from the navigation menu to master the art of PM warfare. Each section provides battle-tested techniques from master growers who have faced and conquered this invisible enemy.</p>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>Prevention is always easier than cure. Master the preventive arts first - most PM battles are won before they begin.</p>
        </div>
    `,

    // Know Your Enemy Section  
    "enemy": `
        <h1>Know Your Enemy</h1>
        
        <p>PM is unlike other grow room fungi. It doesn't need standing water and thrives in our ideal growing conditions.</p>
        
        <h3>Why PM is Deadly</h3>
        <ul>
            <li><strong>No Water Needed:</strong> Activates with brief humidity spikes (55-60%)</li>
            <li><strong>Perfect Temperature:</strong> Loves 68-77°F - exactly our grow temps</li>
            <li><strong>Deep Penetration:</strong> Embeds in leaf tissue where sprays can't reach</li>
            <li><strong>Rapid Spread:</strong> New spores every 72 hours under good conditions</li>
        </ul>
        
        <h3>Identification</h3>
        <ul>
            <li>White powdery coating on leaves</li>
            <li>Circular expanding spots</li>
            <li>Sweet, musty odor</li>
            <li>Yellowing around infection sites</li>
        </ul>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>PM dies at sustained temperatures above 95°F for 12+ hours. Use this weakness to your advantage.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('intro')">Previous: Introduction</button>
            <button class="nav-button" onclick="showSection('fortress')">Next: Fortifying the Forge</button>
        </div>
    `,

    // Fortifying the Forge Section
    "fortress": `
        <h1>Fortifying the Forge</h1>
        
        <p>Environmental control is your primary weapon against PM. Create conditions where PM cannot establish.</p>
        
        <h3>Temperature Control</h3>
        <ul>
            <li><strong>Optimal Range:</strong> 75-82°F during lights on</li>
            <li><strong>Night Temps:</strong> 5-10°F cooler than day</li>
            <li><strong>Kill Protocol:</strong> 95°F+ for 12 hours when possible</li>
        </ul>
        
        <h3>Humidity Management</h3>
        <ul>
            <li><strong>Vegetative:</strong> 50-60% RH maximum</li>
            <li><strong>Flowering:</strong> 40-50% RH</li>
            <li><strong>Critical:</strong> Avoid humidity swings</li>
        </ul>
        
        <h3>Air Circulation</h3>
        <ul>
            <li>Constant 13 mph gentle breeze</li>
            <li>No dead air zones anywhere</li>
            <li>Fresh air exchange every 1-3 minutes</li>
            <li>HEPA filtration on all incoming air</li>
        </ul>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>Environmental controls are your first line of defense. Get these right and PM struggles to establish.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('enemy')">Previous: Know Your Enemy</button>
            <button class="nav-button" onclick="showSection('genetics')">Next: Bloodline Protection</button>
        </div>
    `,

    // Genetics Section
    "genetics": `
        <h1>Bloodline Protection</h1>
        
        <p>Protecting your genetic library from PM contamination is crucial for long-term success.</p>
        
        <h3>Incoming Genetics Protocol</h3>
        <ul>
            <li><strong>Visual Inspection:</strong> Examine under magnification</li>
            <li><strong>Quarantine:</strong> 30-day minimum isolation</li>
            <li><strong>Laboratory Testing:</strong> PCR testing for PM presence</li>
            <li><strong>Chemical Screening:</strong> Test for banned fungicides</li>
        </ul>
        
        <h3>Mother Plant Protection</h3>
        <ul>
            <li>Separate mother room from production</li>
            <li>Weekly preventive treatments</li>
            <li>Daily visual inspections</li>
            <li>Environmental controls: 75-80°F, 45-55% RH</li>
        </ul>
        
        <h3>Resistant Genetics</h3>
        <ul>
            <li><strong>Sativa Dominance:</strong> Generally more PM resistant</li>
            <li><strong>Outdoor Genetics:</strong> Natural resistance bred in</li>
            <li><strong>Open Structure:</strong> Good airflow characteristics</li>
        </ul>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>Contaminated genetics can reinfect even the cleanest facility. Guard your bloodlines like precious metals.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('fortress')">Previous: Fortifying the Forge</button>
            <button class="nav-button" onclick="showSection('detection')">Next: Early Warning Systems</button>
        </div>
    `,

    // Detection Section
    "detection": `
        <h1>Early Warning Systems</h1>
        
        <p>Early detection is the difference between easy treatment and crop disaster.</p>
        
        <h3>Daily Inspection Routine</h3>
        <ul>
            <li><strong>Morning:</strong> Environmental conditions check</li>
            <li><strong>Midday:</strong> General plant health assessment</li>
            <li><strong>Evening:</strong> Detailed leaf inspection with magnification</li>
        </ul>
        
        <h3>High-Risk Areas</h3>
        <ul>
            <li><strong>Lower Canopy:</strong> Reduced light and airflow</li>
            <li><strong>Dense Foliage:</strong> Overlapping fan leaves</li>
            <li><strong>New Growth:</strong> Tender tissue most susceptible</li>
            <li><strong>Stressed Plants:</strong> Weakened natural defenses</li>
        </ul>
        
        <h3>Detection Tools</h3>
        <ul>
            <li>10x-20x magnifying glass</li>
            <li>UV flashlight (some PM fluoresces)</li>
            <li>Digital microscope for detailed examination</li>
        </ul>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>By the time PM is easily visible, it's already everywhere. Daily magnified inspections catch it early.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('genetics')">Previous: Bloodline Protection</button>
            <button class="nav-button" onclick="showSection('prevention')">Next: Preventive Measures</button>
        </div>
    `,

    // Prevention Section  
    "prevention": `
        <h1>Preventive Measures</h1>
        
        <p>Prevention combines environmental control with cultural practices and strategic treatments.</p>
        
        <h3>Cultural Controls</h3>
        <ul>
            <li><strong>Plant Spacing:</strong> 18-24 inches between mature plants</li>
            <li><strong>Canopy Management:</strong> Remove excess foliage for airflow</li>
            <li><strong>Cleanliness:</strong> Weekly surface cleaning, immediate debris removal</li>
            <li><strong>Tool Sterilization:</strong> Clean between plants and rooms</li>
        </ul>
        
        <h3>Weekly Prevention Schedule</h3>
        <ul>
            <li><strong>Week 1:</strong> Potassium bicarbonate (1 tsp/quart)</li>
            <li><strong>Week 2:</strong> Neem oil (1-2 tbsp/quart)</li>
            <li><strong>Week 3:</strong> Compost tea with beneficial microbes</li>
            <li><strong>Week 4:</strong> Milk spray (40% milk/60% water)</li>
        </ul>
        
        <h3>Personnel Protocols</h3>
        <ul>
            <li>Decontamination area for changing clothes</li>
            <li>Hand washing before entering grow areas</li>
            <li>Clean to dirty workflow (visit clean areas first)</li>
        </ul>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>Weekly preventive sprays cost pennies. PM treatment costs dollars. Prevention pays.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('detection')">Previous: Early Warning Systems</button>
            <button class="nav-button" onclick="showSection('organic')">Next: Organic Arsenal</button>
        </div>
    `,

    // Organic Arsenal Section
    "organic": `
        <h1>Organic Arsenal</h1>
        
        <p>When prevention fails, organic treatments provide safe, effective PM elimination.</p>
        
        <h3>Potassium Bicarbonate - The pH Warrior</h3>
        <ul>
            <li><strong>How it works:</strong> Raises leaf pH above PM tolerance</li>
            <li><strong>Prevention:</strong> 1 tsp/quart weekly</li>
            <li><strong>Early infection:</strong> 1.5 tsp/quart every 3 days</li>
            <li><strong>Heavy infection:</strong> 2 tsp/quart every 2 days</li>
        </ul>
        
        <h3>Plant Oils - Physical Barriers</h3>
        <ul>
            <li><strong>Neem Oil:</strong> 1-2 tbsp/quart + 1 tsp soap</li>
            <li><strong>Jojoba Oil:</strong> Most effective, 45ml/gallon</li>
            <li><strong>Application:</strong> Lights-off only, complete coverage</li>
        </ul>
        
        <h3>Natural Remedies</h3>
        <ul>
            <li><strong>Milk Spray:</strong> 40% milk/60% water, apply in morning</li>
            <li><strong>Baking Soda:</strong> 1/2 tsp/quart (emergency backup)</li>
            <li><strong>Essential Oils:</strong> Thyme, cinnamon at 0.1-0.5%</li>
        </ul>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>Rotate treatments to prevent resistance. Never use the same product twice in a row.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('prevention')">Previous: Preventive Measures</button>
            <button class="nav-button" onclick="showSection('biological')">Next: Biological Warfare</button>
        </div>
    `,

    // Biological Warfare Section
    "biological": `
        <h1>Biological Warfare</h1>
        
        <p>Harness beneficial microorganisms to outcompete and eliminate PM naturally.</p>
        
        <h3>Bacterial Allies</h3>
        <ul>
            <li><strong>Bacillus subtilis:</strong> Produces natural antibiotics</li>
            <li><strong>Bacillus pumilus:</strong> Excellent leaf colonization</li>
            <li><strong>Pseudomonas fluorescens:</strong> Competes for iron and nutrients</li>
        </ul>
        
        <h3>Fungal Warriors</h3>
        <ul>
            <li><strong>Trichoderma species:</strong> Aggressive competitors</li>
            <li><strong>Ampelomyces quisqualis:</strong> Parasitizes PM directly</li>
        </ul>
        
        <h3>Compost Tea - The Microbial Brew</h3>
        <ul>
            <li><strong>Recipe:</strong> 2-4 cups quality compost per 5 gallons</li>
            <li><strong>Nutrients:</strong> 2-4 tbsp molasses, 1-2 tbsp kelp meal</li>
            <li><strong>Brewing:</strong> 24-48 hours with constant aeration</li>
            <li><strong>Application:</strong> Use within 4 hours of brewing</li>
        </ul>
        
        <h3>Application Strategy</h3>
        <ul>
            <li>Weekly foliar applications for prevention</li>
            <li>Soil drenches to establish root zone populations</li>
            <li>Combine with organic treatments for enhanced effect</li>
        </ul>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>Build diverse microbial armies. No single species handles all situations, but communities create resilient ecosystems.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('organic')">Previous: Organic Arsenal</button>
            <button class="nav-button" onclick="showSection('emergency')">Next: Crisis Management</button>
        </div>
    `,

    // Emergency Section
    "emergency": `
        <h1>Crisis Management</h1>
        
        <p>When PM breaks through defenses, immediate crisis protocols can save your crop.</p>
        
        <h3>Crisis Recognition</h3>
        <p>PM crisis exists when:</p>
        <ul>
            <li>Multiple plants infected</li>
            <li>Visible PM covers >10% of any plant</li>
            <li>Infections in multiple rooms</li>
        </ul>
        
        <h3>Immediate Response (First 24 Hours)</h3>
        <ol>
            <li><strong>Facility Lockdown:</strong> Restrict access</li>
            <li><strong>Complete Survey:</strong> Document all infections</li>
            <li><strong>Triage Plants:</strong> Categorize by infection severity</li>
            <li><strong>Isolation:</strong> Prevent spread to clean areas</li>
        </ol>
        
        <h3>Aggressive Treatment Protocol</h3>
        <ul>
            <li><strong>Day 1:</strong> Potassium bicarbonate at max concentration</li>
            <li><strong>Day 2:</strong> Oil treatment (neem or jojoba)</li>
            <li><strong>Day 3:</strong> Biological agents</li>
            <li><strong>Day 4:</strong> Hydrogen peroxide contact treatment</li>
            <li><strong>Repeat cycle</strong> with increased intensity</li>
        </ul>
        
        <h3>When to Cut Losses</h3>
        <ul>
            <li>>75% of plants affected</li>
            <li>Late flowering with heavy infection</li>
            <li>Multiple treatment failures</li>
            <li>Economic analysis favors restart</li>
        </ul>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>Sometimes tactical retreat saves the war. Know when to sacrifice battles to win the campaign.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('biological')">Previous: Biological Warfare</button>
            <button class="nav-button" onclick="showSection('decontamination')">Next: Forge Cleansing</button>
        </div>
    `,

    // Decontamination Section
    "decontamination": `
        <h1>Forge Cleansing</h1>
        
        <p>After PM outbreak, thorough decontamination prevents reinfection. PM spores survive 6+ months on surfaces.</p>
        
        <h3>Immediate Cleanup</h3>
        <ul>
            <li><strong>Remove infected material:</strong> Bag and dispose, never compost</li>
            <li><strong>HEPA vacuum:</strong> Remove loose spores from surfaces</li>
            <li><strong>Detergent wash:</strong> Scrub all surfaces thoroughly</li>
            <li><strong>Tool sterilization:</strong> Disinfect all equipment</li>
        </ul>
        
        <h3>Disinfection Protocol</h3>
        <ul>
            <li><strong>Hydrogen peroxide:</strong> 3-10% on hard surfaces</li>
            <li><strong>Bleach solution:</strong> 1% on non-metal surfaces</li>
            <li><strong>70% alcohol:</strong> Electronics and sensitive equipment</li>
            <li><strong>Contact time:</strong> 10-15 minutes minimum</li>
        </ul>
        
        <h3>HVAC Decontamination</h3>
        <ul>
            <li><strong>Replace all filters:</strong> PM accumulates heavily</li>
            <li><strong>Clean ductwork:</strong> Professional cleaning if needed</li>
            <li><strong>Disinfect coils:</strong> Air handler components</li>
            <li><strong>System testing:</strong> Verify proper operation</li>
        </ul>
        
        <h3>Verification</h3>
        <ul>
            <li>Visual inspection - no contamination visible</li>
            <li>Air sampling for laboratory analysis</li>
            <li>Surface swab testing</li>
            <li>Test plants before full restart</li>
        </ul>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>Incomplete cleanup causes reinfection within weeks. Over-clean rather than start over.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('emergency')">Previous: Crisis Management</button>
            <button class="nav-button" onclick="showSection('advanced')">Next: Advanced Tactics</button>
        </div>
    `,

    // Advanced Tactics Section
    "advanced": `
        <h1>Advanced Tactics</h1>
        
        <p>Cutting-edge techniques for maximum PM control and prevention.</p>
        
        <h3>Induced Systemic Resistance (ISR)</h3>
        <ul>
            <li><strong>Phosphite compounds:</strong> Trigger 21-day resistance periods</li>
            <li><strong>Plant extracts:</strong> Reynoutria sachalinensis activates immunity</li>
            <li><strong>Beneficial microbes:</strong> Certain bacteria activate plant defenses</li>
            <li><strong>Application:</strong> Every 2-3 weeks for continuous protection</li>
        </ul>
        
        <h3>Environmental Precision</h3>
        <ul>
            <li><strong>VPD Management:</strong> Optimize vapor pressure deficit</li>
            <li><strong>Microclimate Control:</strong> Eliminate PM-friendly zones</li>
            <li><strong>Predictive Systems:</strong> AI-powered risk assessment</li>
        </ul>
        
        <h3>UV Applications</h3>
        <ul>
            <li><strong>UV-B (280-315nm):</strong> Stimulates plant defenses</li>
            <li><strong>UV-C (200-280nm):</strong> Kills airborne spores</li>
            <li><strong>Integrated systems:</strong> UV built into grow lights</li>
        </ul>
        
        <h3>Heat Treatment</h3>
        <ul>
            <li><strong>Temperature:</strong> 95-100°F for 12-24 hours</li>
            <li><strong>Plant stage:</strong> Most effective during vegetation</li>
            <li><strong>Monitoring:</strong> Watch for plant stress</li>
            <li><strong>Recovery:</strong> 3-5 days normal conditions after</li>
        </ul>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>Advanced tactics enhance basics, never replace them. Master environmental controls first.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('decontamination')">Previous: Forge Cleansing</button>
            <button class="nav-button" onclick="showSection('recovery')">Next: Recovery Protocols</button>
        </div>
    `,

    // Recovery Protocols Section
    "recovery": `
        <h1>Recovery Protocols</h1>
        
        <p>Systematic restart after PM outbreak builds stronger, more resilient operations.</p>
        
        <h3>Restart Planning</h3>
        <ul>
            <li><strong>Infrastructure assessment:</strong> Evaluate all systems</li>
            <li><strong>Genetic sourcing:</strong> Acquire clean genetics</li>
            <li><strong>Timeline development:</strong> Realistic recovery schedule</li>
            <li><strong>Upgrade opportunities:</strong> Improve weak points</li>
        </ul>
        
        <h3>Staged Restart</h3>
        
        <h4>Phase 1: Proof of Concept (Weeks 1-4)</h4>
        <ul>
            <li>Start with 10-20% capacity</li>
            <li>Use PM-susceptible indicator plants</li>
            <li>Daily inspections and monitoring</li>
            <li>Immediate response protocols ready</li>
        </ul>
        
        <h4>Phase 2: Controlled Expansion (Weeks 5-8)</h4>
        <ul>
            <li>Increase to 50% capacity if successful</li>
            <li>Test all systems under load</li>
            <li>Refine protocols based on learnings</li>
            <li>Train staff on new procedures</li>
        </ul>
        
        <h4>Phase 3: Full Production (Weeks 9+)</h4>
        <ul>
            <li>Return to full capacity</li>
            <li>Standard monitoring routines</li>
            <li>Performance optimization</li>
            <li>Continuous improvement mindset</li>
        </ul>
        
        <h3>Enhanced Prevention</h3>
        <ul>
            <li>Improved environmental controls</li>
            <li>Enhanced genetic screening</li>
            <li>Advanced detection systems</li>
            <li>Redundant backup systems</li>
        </ul>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>Recovery is opportunity. Build back better, stronger, and more resilient than before.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('advanced')">Previous: Advanced Tactics</button>
            <button class="nav-button" onclick="showSection('intro')">Back to Introduction</button>
        </div>
    `
};
