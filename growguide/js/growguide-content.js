// Content data for Dwarven Forged Grow Guide
// This separates the content from the layout for easier editing

const contentData = {
    // Introduction Section
    "intro": `
        <div class="content-header">
            <img src="https://www.dwarvenforged.com/growguide/img/growing-guide.jpg" alt="Dwarven Forged Grow Guide" class="hero-image">
            <h1>DWARVEN FORGED MASTER GROW GUIDE</h1>
            <div class="subtitle">DIGITAL EDITION</div>
        </div>
        
        <div class="intro-text">
            <p>Welcome to the official Dwarven Forged Grow Guide. Like the mythical dwarven smiths who crafted legendary treasures in their mountain forges, we'll help you forge exceptional plants with precision and care. This comprehensive guide will walk you through every stage of the cultivation process - from setting up your grow space to harvesting and enjoying your meticulously crafted herbs.</p>
            <p>Crafted by a collective of passionate cannabis artisans with decades of combined experience, this guide contains the accumulated wisdom of master growers who have perfected their craft through years of careful selection and testing.</p>
        </div>
        
        <p>Select any chapter from the navigation menu to begin your journey into cultivation mastery. Each section provides detailed information and dwarven wisdom to help you become a master grower.</p>
    `,

    // Step 1 Section
    "step1": `
        <h1>Step 1: Choosing Your Forge (Grow Space)</h1>
        
        <p>Just as dwarven smiths carefully selected the perfect cavern for their forge, choosing the right grow space is crucial for cultivating premium herbs. Your grow space is the foundation upon which your entire operation will be built, so take the time to consider your options carefully.</p>
        
        <h3>Space Requirements</h3>
        <p>When selecting your forge, consider the amount of space you have available. You'll need enough room for your plants and all necessary equipment, including grow lights, fans, and ventilation systems. Remember that plants need space to grow both vertically and horizontally, so plan accordingly.</p>
        
        <h3>Location Factors</h3>
        <p>The ideal forge location should be private and easily controlled in terms of temperature, light, and humidity. Basements, spare rooms, and dedicated grow areas work well as they provide good insulation from external environments and can be secured from unwanted attention.</p>
        
        <h3>Preparation</h3>
        <p>Before setting up, thoroughly clean and disinfect the area to remove any potential contaminants like mold or pests. Proper preparation creates a pristine environment for your precious seedlings to thrive.</p>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>For novice crafters, pre-made grow tents offer an excellent starting point. These portable forges come in various sizes and include essential components like ventilation systems, grow lights, and reflective walls to maximize light distribution. They can be easily assembled in any room with access to electricity and provide a controlled environment for forging your botanical treasures.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('intro')">Back to Intro</button>
            <button class="nav-button" onclick="showSection('step2')">Next: Setting Up Your Forge</button>
        </div>
    `,

    // Step 2 Section
    "step2": `
        <h1>Step 2: Setting Up Your Forge</h1>
        
        <p>Now that you've chosen your forge location, it's time to equip it with the tools and systems needed to create the perfect growing environment. Like a dwarven smith arranging their anvils, hammers, and fire pits, you'll need to set up your grow space with precision and care.</p>
        
        <h3>Illumination: The Forge Fire</h3>
        <p>The most critical component of your forge is the lighting system. Several options are available:</p>
        <ul>
            <li><strong>High-Pressure Sodium (HPS) & Metal Halide (MH):</strong> Traditional forge fires that are affordable but emit significant heat</li>
            <li><strong>Light-Emitting Diode (LED):</strong> Modern dwarven technology that produces less heat, uses less energy, but requires a higher initial investment</li>
        </ul>
        
        <h3>Ventilation: The Forge Bellows</h3>
        <p>Proper airflow is essential for temperature control, humidity management, and bringing fresh CO2 to your plants. Position fans to create a gentle breeze throughout your grow space, preventing mold and strengthening plant stems. Consider adding carbon filters to eliminate odors - an important consideration for discreet crafting.</p>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>Modern forges can be equipped with automated systems to control lighting schedules, temperature, and humidity. While convenient, always have backup manual systems in place. As master smiths know, relying solely on enchanted tools can lead to disaster if the magic fails!</p>
        </div>
        
        <h3>Monitoring Systems</h3>
        <p>Install thermometers and hygrometers to track temperature and humidity levels. Regular monitoring allows you to make necessary adjustments to maintain optimal growing conditions. The mark of a master craftsman is attention to detail - check your forge daily!</p>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('step1')">Previous: Choosing Your Forge</button>
            <button class="nav-button" onclick="showSection('step3')">Next: Selecting Your Ore</button>
        </div>
    `,

    // Step 3 Section
    "step3": `
        <h1>Step 3: Selecting Your Ore (Growing Medium)</h1>
        
        <p>Just as dwarven smiths carefully select the finest ores for their metalwork, choosing the right growing medium is crucial for cultivating exceptional plants. Each medium has its own properties that affect water retention, nutrient availability, and root development.</p>
        
        <h3>Soil: The Traditional Ore</h3>
        <p>Soil is the most common and beginner-friendly medium. A high-quality soil mix with good drainage and nutrient content provides an excellent foundation for your plants. Master crafters often enhance basic soil with organic components like worm castings, composted bark, and peat moss to forge a superior growing environment.</p>
        
        <p>For improved drainage and aeration, consider adding materials like perlite or vermiculite to keep the soil light and airy. The benefit of soil is its excellent natural nutrient content and forgiveness for novice growers.</p>
        
        <h3>Hydroponics: The Alchemical Approach</h3>
        <p>For advanced crafters, hydroponics offers a soilless method where plants grow directly in a nutrient-rich water solution. This technique results in faster growth and higher yields as plants can access nutrients more efficiently. However, hydroponic systems require more monitoring and technical knowledge to maintain properly.</p>
        
        <h3>Coco Coir: The Balanced Alloy</h3>
        <p>Made from coconut husks, coco coir provides excellent water retention while maintaining good aeration. It delivers the best qualities of both soil and hydroponics, making it popular among intermediate growers. Coco coir promotes healthy root development and can be enhanced with various nutrients for optimal growth.</p>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>When selecting your growing medium, consider your experience level, available time for maintenance, and growing style. Like a master smith who chooses different metals for different projects, you may find that different growing mediums work better for different strains or growing conditions.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('step2')">Previous: Setting Up Your Forge</button>
            <button class="nav-button" onclick="showSection('step4')">Next: Choosing Your Materials</button>
        </div>
    `,

    // Step 4 Section
    "step4": `
        <h1>Step 4: Choosing Your Materials (Strains)</h1>
        
        <p>Just as dwarven smiths select specific metals for their legendary weapons and artifacts, choosing the right cannabis strain is crucial to your cultivation success. Each strain has unique characteristics, growing requirements, and effects that will determine your final product.</p>
        
        <h3>Seeds vs. Clones</h3>
        <p>You can begin your journey with either seeds or clones:</p>
        <ul>
            <li><strong>Seeds:</strong> Offer genetic diversity and resilience, but with some variability in growth patterns</li>
            <li><strong>Clones:</strong> Cuttings from mature plants that maintain identical genetics to their parent, ensuring consistency but sometimes with less vigor</li>
        </ul>
        
        <h3>Strain Selection Factors</h3>
        <p>When selecting your strain, consider:</p>
        <ul>
            <li><strong>Growing Environment:</strong> Some strains thrive indoors, others outdoors</li>
            <li><strong>Growing Space:</strong> Certain strains grow tall and lanky, others short and bushy</li>
            <li><strong>Experience Level:</strong> Novice crafters should begin with more forgiving, resilient strains</li>
            <li><strong>Flowering Time:</strong> Ranges from 7-12+ weeks depending on genetics</li>
            <li><strong>Desired Effects:</strong> Different strains produce varying effects and potency</li>
        </ul>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>For your first forge, select feminized seeds from reputable breeders like Dwarven Forged to ensure you're working with quality genetics. Beginner-friendly strains like our "Dwarf Hammer" provide resilience and forgiveness while still delivering exceptional results. Remember, even master smiths began with simpler projects before forging legendary artifacts!</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('step3')">Previous: Selecting Your Ore</button>
            <button class="nav-button" onclick="showSection('step5')">Next: Awakening the Seed</button>
        </div>
    `,

    // Step 5 Section
    "step5": `
        <h1>Step 5: Awakening the Seed (Germination)</h1>
        
        <p>Like a dwarven smith breathing life into raw metal through the initial heating, germination awakens the dormant potential within each seed. This crucial first step sets the foundation for the entire growing process.</p>
        
        <h3>The Paper Towel Method</h3>
        <p>One of the most reliable techniques for novice growers is the paper towel method:</p>
        <ol>
            <li>Place seeds between two damp paper towels</li>
            <li>Position them in a warm, dark place (70-80°F or 21-27°C is ideal)</li>
            <li>Check every 12 hours to ensure the paper towels remain damp</li>
            <li>Wait 1-5 days for the seeds to sprout, showing small white taproots</li>
        </ol>
        
        <h3>Direct Soil Planting</h3>
        <p>Another approach is planting directly in your growing medium:</p>
        <ol>
            <li>Pre-moisten your soil or growing medium</li>
            <li>Create a small hole about 1/4 to 1/2 inch (0.6-1.3 cm) deep</li>
            <li>Place the seed in the hole and gently cover</li>
            <li>Keep the area warm and moist until sprouting occurs</li>
        </ol>
        
        <h3>Dealing with Stubborn Seeds</h3>
        <p>Some seeds, like particularly dense ore, require additional techniques to awaken:</p>
        <ul>
            <li>Scarification: Carefully scoring the seed husk with a hobby knife</li>
            <li>Pre-soaking: Placing seeds in distilled water for 24 hours before germination</li>
            <li>Germination enhancers: Special hormones that stimulate sprouting</li>
        </ul>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>Not all seeds will germinate, even with perfect technique. Plant 20-30% more seeds than you need to account for natural losses. Handle germinated seeds with extreme care - like a newly forged blade, they are at their most fragile during this early stage. Use tweezers to transfer sprouted seeds, and always handle them by the seed casing, never the delicate taproot.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('step4')">Previous: Choosing Your Materials</button>
            <button class="nav-button" onclick="showSection('step6')">Next: The First Shaping</button>
        </div>
    `,

    // Step 6 Section
    "step6": `
        <h1>Step 6: The First Shaping (Transplanting)</h1>
        
        <p>After your seeds have successfully germinated, it's time for the first shaping - transplanting your seedlings into their growing containers. Like a dwarven smith moving hot metal from the initial fire to the anvil for shaping, this transfer requires precision and care.</p>
        
        <h3>Selecting Containers</h3>
        <p>Choose containers that provide excellent drainage and appropriate space for root development:</p>
        <ul>
            <li><strong>Fabric Pots:</strong> Allow air pruning of roots, preventing them from becoming root-bound</li>
            <li><strong>Traditional Plastic Pots:</strong> Affordable and effective when drainage holes are adequate</li>
            <li><strong>Terracotta:</strong> Excellent breathability but requires more frequent watering</li>
        </ul>
        <p>Container size should match your plant's growth stage - typically starting in smaller pots (1 quart/1 liter) before transferring to larger final containers (3-5 gallons/11-19 liters) as they mature.</p>
        
        <h3>The Transplanting Process</h3>
        <ol>
            <li>Prepare your new container by filling with pre-moistened growing medium</li>
            <li>Create a hole in the center large enough for your seedling and its root system</li>
            <li>Carefully remove the seedling from its germination medium, supporting it by the stem or seed leaves</li>
            <li>Place the seedling in the hole, ensuring the stem is at the same depth as before</li>
            <li>Gently cover the roots with growing medium and lightly press down</li>
            <li>Water lightly around the base of the plant</li>
        </ol>
        
        <h3>Post-Transplant Care</h3>
        <p>After transplanting, your seedlings will need special attention:</p>
        <ul>
            <li>Maintain higher humidity (65-70%) for the first few days</li>
            <li>Provide gentle, indirect light rather than intense direct light</li>
            <li>Avoid overwatering - moist but not soaked soil is ideal</li>
            <li>Minimize stress by maintaining stable environmental conditions</li>
        </ul>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>Transplant shock is common but can be minimized. Like a newly forged blade that must be tempered gradually, introduce your transplanted seedlings to their new environment slowly. Consider using a diluted seaweed extract solution for watering after transplant - the natural growth hormones help stimulate root development and reduce stress.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('step5')">Previous: Awakening the Seed</button>
            <button class="nav-button" onclick="showSection('step7')">Next: Tempering the Steel</button>
        </div>
    `,

    // Step 7 Section 
    "step7": `
        <h1>Step 7: Tempering the Steel (Vegetative Growth)</h1>
        
        <p>The vegetative growth phase is where your plants develop their structure and strength, much like the tempering process that gives dwarven steel its legendary resilience. During this crucial period, your plants will develop the stems, branches, and leaves that will ultimately support bountiful harvests.</p>
        
        <h3>Lighting Requirements</h3>
        <p>During the vegetative phase, plants require 18 hours of light daily, with 6 hours of darkness (18/6 cycle). Some growers prefer a 20/4 cycle. This extended light period prevents flowering and encourages robust structural growth. Position your lights at the proper distance - too close causes light burn, too far results in stretching and weak stems.</p>
        
        <h3>Environmental Controls</h3>
        <ul>
            <li><strong>Temperature:</strong> Maintain 70-82°F (21-28°C) during light periods, 5-10°F cooler during dark periods</li>
            <li><strong>Humidity:</strong> 60-70% relative humidity is ideal for vegetative growth</li>
            <li><strong>Airflow:</strong> Constant gentle breeze strengthens stems and prevents mold</li>
        </ul>
        
        <h3>Nutritional Requirements</h3>
        <p>During vegetative growth, plants require higher levels of nitrogen (N) compared to phosphorus (P) and potassium (K). Use balanced nutrients specifically formulated for the vegetative stage. Consider both:</p>
        <ul>
            <li><strong>Organic Nutrients:</strong> Derived from natural sources, slower release but more forgiving</li>
            <li><strong>Synthetic Nutrients:</strong> More concentrated and immediately available but easier to over-apply</li>
        </ul>
        
        <h3>Growth Enhancement</h3>
        <p>To maximize potential during this phase:</p>
        <ul>
            <li><strong>Beneficial Microbes:</strong> Add mycorrhizae and beneficial bacteria to enhance root development</li>
            <li><strong>Silicon Supplements:</strong> Strengthen cell walls for more resilient plants</li>
            <li><strong>Regular Inspection:</strong> Monitor for signs of deficiencies, pests, or disease</li>
        </ul>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>The vegetative stage is the time to address any structural issues through training techniques (covered in Step 9). Like a smith who can only shape metal while it's still malleable, you have the greatest influence over your plant's final form during this phase. The time spent in vegetation varies by grower preference and space constraints - typically 2-6 weeks for smaller plants or 4-8 weeks for larger plants. Longer vegetation generally means larger plants and potentially greater yields, but requires more space and resources.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('step6')">Previous: The First Shaping</button>
            <button class="nav-button" onclick="showSection('step8')">Next: Alchemical Nourishment</button>
        </div>
    `,

    // Step 8 Section
    "step8": `
        <h1>Step 8: Alchemical Nourishment (Nutrients & Water Management)</h1>
        
        <p>Just as dwarven smiths use special alchemical mixtures to strengthen and enhance their metals, your plants require precise nutrient formulations to reach their full potential. Mastering nutrient and water management is essential for cultivating premium quality herbs.</p>
        
        <h3>Essential Nutrients</h3>
        <p>Cannabis requires a range of macro and micronutrients:</p>
        <ul>
            <li><strong>Primary Macronutrients:</strong> Nitrogen (N), Phosphorus (P), Potassium (K)</li>
            <li><strong>Secondary Macronutrients:</strong> Calcium (Ca), Magnesium (Mg), Sulfur (S)</li>
            <li><strong>Micronutrients:</strong> Iron (Fe), Zinc (Zn), Manganese (Mn), Copper (Cu), Boron (B), Molybdenum (Mo)</li>
        </ul>
        
        <h3>Nutrient Solutions</h3>
        <p>There are two main approaches to feeding:</p>
        <ul>
            <li><strong>Synthetic Nutrients:</strong> Concentrated, readily available minerals that provide immediate feeding</li>
            <li><strong>Organic Nutrients:</strong> Derived from natural sources like compost, worm castings, bone meal, and bat guano, which are processed by soil microbes before becoming available to plants</li>
        </ul>
        
        <h3>Water Management</h3>
        <p>Proper watering is as important as nutrient balance:</p>
        <ul>
            <li>Water only when the top 1-2 inches of growing medium is dry</li>
            <li>Ensure proper drainage when watering</li>
            <li>Use pH-adjusted water (6.0-6.5 for soil, 5.5-6.0 for hydro/coco)</li>
            <li>Consider water temperature (room temperature is ideal)</li>
        </ul>
        
        <h3>Feeding Schedule</h3>
        <p>Nutrient needs change throughout the growing cycle:</p>
        <ul>
            <li><strong>Seedling Stage:</strong> Minimal to no additional nutrients</li>
            <li><strong>Vegetative Stage:</strong> Higher nitrogen (N), moderate phosphorus (P) and potassium (K)</li>
            <li><strong>Flowering Stage:</strong> Lower nitrogen, higher phosphorus and potassium</li>
            <li><strong>Late Flowering:</strong> Reduced overall nutrients, sometimes followed by a flush</li>
        </ul>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>When it comes to nutrients, less is often more. Like the precise amounts of rare metals added to dwarven alloys, cannabis nutrients should be applied with restraint. Begin at half the manufacturer's recommended strength and increase gradually based on plant response. It's far easier to fix under-feeding than over-feeding. Monitor your plants closely - they will tell you what they need through their appearance and growth patterns.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('step7')">Previous: Tempering the Steel</button>
            <button class="nav-button" onclick="showSection('step9')">Next: Master's Touch</button>
        </div>
    `,

    // Step 9 Section
    "step9": `
        <h1>Step 9: Master's Touch (Training & Pruning)</h1>
        
        <p>Just as a dwarven smith carefully hammers and shapes metal to create intricate designs, training and pruning your plants allows you to control their growth patterns and maximize yields. These techniques represent the artistry of cultivation, where craft transforms into mastery.</p>
        
        <h3>Training Techniques</h3>
        
        <h4>Low-Stress Training (LST)</h4>
        <p>This gentle technique involves carefully bending and securing branches horizontally using soft ties or plant wire. By training branches to grow outward rather than upward, you create a flatter, more even canopy that receives uniform light distribution. LST is perfect for beginners as it minimizes stress while significantly increasing potential bud sites.</p>
        
        <h4>Topping</h4>
        <p>Topping involves cutting off the main growth tip, forcing the plant to develop two new main colas instead of one. This creates a bushier plant with multiple main bud sites rather than a single dominant cola. While more stressful than LST, topping dramatically changes growth structure and increases yield potential.</p>
        
        <h4>Super Cropping</h4>
        <p>This advanced technique involves carefully pinching and slightly crushing the inner tissue of stems to create a controlled injury. The plant responds by strengthening the damaged area, creating a thicker, stronger stem that can support more weight. Additionally, the bent portion allows for a more even canopy and increased light penetration.</p>
        
        <h3>Pruning Techniques</h3>
        
        <h4>Defoliation</h4>
        <p>Selective removal of fan leaves to improve light penetration and air circulation to lower bud sites. This technique should be applied conservatively, as leaves are the plant's energy factories. Focus on removing leaves that shade developing bud sites or those that receive minimal light.</p>
        
        <h4>Lollipopping</h4>
        <p>This technique involves removing growth from the lower portions of the plant, focusing energy on the upper canopy where light is strongest. Like a lollipop with its stick, the plant has a bare lower section and full upper section, maximizing efficiency by eliminating bud sites that would produce only small, airy flowers.</p>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>Approach training and pruning with patience and restraint. Like a master smith who makes each hammer blow count, make your cuts and bends deliberate and purposeful. Give plants time to recover between significant interventions. The best results come from consistent, minor adjustments rather than dramatic, stressful changes. Always use clean, sharp tools to minimize stress and prevent infection.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('step8')">Previous: Alchemical Nourishment</button>
            <button class="nav-button" onclick="showSection('step10')">Next: Crystallizing the Craft</button>
        </div>
    `,

    // Step 10 Section
    "step10": `
        <h1>Step 10: Crystallizing the Craft (Flowering)</h1>
        
        <p>The flowering stage is when your cannabis plants transform from vegetative growth to producing the resinous buds prized by connoisseurs. Like the final heating process where a dwarven smith's metal crystallizes into its ultimate form, flowering is where your plants realize their full genetic potential.</p>
        
        <h3>Initiating Flowering</h3>
        <p>For photoperiod plants, flowering is triggered by changing the light schedule to 12 hours of light and 12 hours of uninterrupted darkness. This mimics the shortening days of late summer/fall, signaling the plant to shift from growth to reproduction.</p>
        
        <h3>The Flowering Timeline</h3>
        <p>The flowering period typically lasts 7-12+ weeks depending on strain genetics:</p>
        <ul>
            <li><strong>Weeks 1-3:</strong> The stretch phase - plants may increase in height by 50-100%</li>
            <li><strong>Weeks 3-4:</strong> First flowers appear, pistils form</li>
            <li><strong>Weeks 4-6:</strong> Buds develop and expand</li>
            <li><strong>Weeks 6-8:</strong> Buds fatten, trichome production increases</li>
            <li><strong>Weeks 8+:</strong> Ripening, trichome maturation, pistil darkening</li>
        </ul>
        
        <h3>Environmental Adjustments</h3>
        <ul>
            <li><strong>Temperature:</strong> 65-80°F (18-26°C) during light periods, 5-10°F cooler during dark</li>
            <li><strong>Humidity:</strong> Gradually decrease from 45-55% early flowering to 35-45% late flowering to prevent mold</li>
            <li><strong>Airflow:</strong> Critical during this stage to prevent bud rot and powdery mildew</li>
        </ul>
        
        <h3>Nutrient Adjustments</h3>
        <p>Flowering plants require different nutritional ratios:</p>
        <ul>
            <li>Reduce nitrogen (N) to prevent excessive leafy growth</li>
            <li>Increase phosphorus (P) and potassium (K) to support bud development</li>
            <li>Consider bloom-specific supplements containing beneficial compounds</li>
            <li>Some growers perform a final "flush" with plain water in the last 7-14 days</li>
        </ul>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>The dark period during flowering must remain completely uninterrupted - even brief light exposure can stress plants and reduce yields. Seal any light leaks in your grow space and avoid entering during the dark cycle. If inspection is necessary, use a green headlamp, as plants are less sensitive to green light spectrum. Support your developing buds with trellises, stakes, or plant support clips (sometimes called "plant yoyos") to prevent branch breakage as they gain weight.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('step9')">Previous: Master's Touch</button>
            <button class="nav-button" onclick="showSection('step11')">Next: Reaping the Rewards</button>
        </div>
    `,

    // Step 11 Section
    "step11": `
        <h1>Step 11: Reaping the Rewards (Harvesting & Curing)</h1>
        
        <p>After months of careful cultivation, the time has come to harvest your craft. Like dwarven smiths admiring their finished masterpieces, harvesting is the culmination of your hard work and dedication. Proper harvesting and curing techniques preserve and enhance the potency, flavor, and quality of your final product.</p>
        
        <h3>Determining Harvest Readiness</h3>
        <p>Harvest timing significantly affects potency and effects. Use these indicators to determine the perfect moment:</p>
        <ul>
            <li><strong>Trichome Observation:</strong> Examine with a jeweler's loupe or digital microscope
                <ul>
                    <li>Clear trichomes: Not ready, lower potency</li>
                    <li>Cloudy/milky trichomes: Peak THC, energetic effects</li>
                    <li>Amber trichomes: More sedative effects, CBD converting to CBN</li>
                    <li>Ideal mix varies by preference, typically 70-90% cloudy with 10-30% amber</li>
                </ul>
            </li>
            <li><strong>Pistil Coloration:</strong> When 70-80% of pistils have darkened and curled inward</li>
            <li><strong>Calyx Swelling:</strong> Calyxes should be full and firm</li>
            <li><strong>Leaf Fading:</strong> Natural reduction in chlorophyll production near harvest</li>
        </ul>
        
        <h3>The Harvesting Process</h3>
        <ol>
            <li>Prepare your workspace with clean tools and drying area</li>
            <li>Stop fertilizing 7-14 days before harvest (optional flush with plain water)</li>
            <li>Harvest in the dark period, just before lights would normally turn on</li>
            <li>Cut whole plants at the base or remove branches individually</li>
            <li>Remove large fan leaves (wet trimming) or leave them for protection (dry trimming)</li>
        </ol>
        
        <h3>Drying Techniques</h3>
        <p>Proper drying preserves terpenes and prevents mold:</p>
        <ul>
            <li>Hang plants upside down in a dark room at 60-70°F (15-21°C) with 45-55% humidity</li>
            <li>Ensure good air circulation but avoid direct fan contact</li>
            <li>Drying should take 7-14 days - too fast loses terpenes, too slow risks mold</li>
            <li>Branches are ready when stems snap rather than bend</li>
        </ul>
        
        <h3>Curing Process</h3>
        <p>Curing is where good herbs become exceptional:</p>
        <ol>
            <li>Once properly dried, trim remaining leaves if dry trimming</li>
            <li>Place buds loosely in airtight glass containers</li>
            <li>"Burp" containers briefly each day during the first two weeks</li>
            <li>Reduce to weekly burping for the next 2-4 weeks</li>
            <li>Store in cool, dark place during curing process</li>
            <li>Full cure takes 4-8 weeks, with noticeable improvements after 2-3 weeks</li>
        </ol>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>Patience during curing is rewarded with superior quality. Like the aging of dwarven spirits, proper curing allows for the breakdown of chlorophyll and the development of complex terpene profiles. Use humidity control packs (58-62%) in your curing jars to maintain optimal moisture levels. Always label your containers with strain and harvest date for reference. The best craftsmen track their process so they can replicate success and learn from each cultivation cycle.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('step10')">Previous: Crystallizing the Craft</button>
            <button class="nav-button" onclick="showSection('step12')">Next: Enjoying Your Craft</button>
        </div>
    `,

    // Step 12 Section
    "step12": `
        <h1>Step 12: Enjoying Your Craft</h1>
        
        <p>The final step in your journey is appreciating and properly storing the fruits of your labor. Like dwarven craftsmen who take pride in their finished artifacts, take time to appreciate what you've created through skill and patience.</p>
        
        <h3>Storage Solutions</h3>
        <p>Proper storage preserves potency, flavor, and aroma:</p>
        <ul>
            <li><strong>Glass Containers:</strong> Mason jars or specialized UV-blocking containers</li>
            <li><strong>Environment:</strong> Cool (60-70°F/15-21°C), dark place away from direct light</li>
            <li><strong>Humidity Control:</strong> Maintain 58-62% relative humidity using control packs</li>
            <li><strong>Organization:</strong> Label containers with strain, harvest date, and any notes on effects</li>
        </ul>
        
        <h3>Consumption Methods</h3>
        <p>There are various ways to enjoy your crafted herbs:</p>
        <ul>
            <li><strong>Traditional Smoking:</strong> Hand-rolled, pipes, water pipes</li>
            <li><strong>Vaporization:</strong> Heating without combustion, preserving terpenes and reducing harmful byproducts</li>
            <li><strong>Edibles:</strong> Infused foods and beverages for longer-lasting effects</li>
            <li><strong>Tinctures:</strong> Alcohol or glycerin extracts for precise dosing</li>
            <li><strong>Topicals:</strong> Creams and balms for localized relief without psychoactive effects</li>
        </ul>
        
        <h3>Responsible Use</h3>
        <p>Like all powerful crafts, cannabis should be respected and used mindfully:</p>
        <ul>
            <li>Start with small amounts, especially with new strains or methods</li>
            <li>Be aware of your local laws and regulations</li>
            <li>Store securely away from children and pets</li>
            <li>Avoid driving or operating heavy machinery under the influence</li>
            <li>Respect those who choose not to partake</li>
        </ul>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>Take pride in your craft and continue to refine your techniques with each cycle. The master dwarf smiths didn't forge legendary artifacts on their first attempt - they learned, improved, and perfected their craft over many years. Keep detailed grow journals to track what works and what doesn't. Share your knowledge with other respectful cultivators, creating a community of master crafters dedicated to quality and excellence.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('step11')">Previous: Reaping the Rewards</button>
            <button class="nav-button" onclick="showSection('legal')">Next: Legal Considerations</button>
        </div>
    `,

    // Legal Section
    "legal": `
        <h1>Legal Considerations</h1>
        
        <p>Before embarking on your cultivation journey, it's essential to understand the legal landscape. Even master dwarven smiths must respect the rules of their mountain kingdoms.</p>
        
        <h3>Know Your Local Laws</h3>
        <p>Cannabis cultivation laws vary widely by location:</p>
        <ul>
            <li>Research current laws in your specific region before beginning</li>
            <li>Be aware that laws can change - stay informed of updates</li>
            <li>Consider both local and national/federal regulations</li>
            <li>Some regions require specific licenses or medical documentation</li>
        </ul>
        
        <h3>Common Restrictions</h3>
        <p>Even in areas where home cultivation is permitted, there are typically restrictions:</p>
        <ul>
            <li>Plant count limitations (often 4-6 plants per household)</li>
            <li>Requirements for secure growing locations not visible to the public</li>
            <li>Restrictions on selling or distributing without proper licensing</li>
            <li>Age restrictions (typically 21+ or 18+ for medical users)</li>
        </ul>
        
        <h3>Additional Considerations</h3>
        <ul>
            <li><strong>Employment Policies:</strong> Some employers prohibit cannabis use regardless of legality</li>
            <li><strong>Rental Agreements:</strong> Landlords may restrict cultivation on their property</li>
            <li><strong>HOA Regulations:</strong> Some housing associations have additional restrictions</li>
            <li><strong>Travel Restrictions:</strong> Never transport cannabis across state or international borders</li>
        </ul>
        
        <div class="tip-box">
            <h4>Dwarven Wisdom:</h4>
            <p>Respect for law is the mark of a true craftsman. Always cultivate responsibly and within the boundaries of your local regulations. Remember that this guide provides educational information only and is not legal advice. Consult with a legal professional for guidance specific to your situation.</p>
        </div>
        
        <div class="nav-buttons">
            <button class="nav-button" onclick="showSection('step12')">Previous: Enjoying Your Craft</button>
            <button class="nav-button" onclick="showSection('intro')">Back to Introduction</button>
        </div>
    `
}