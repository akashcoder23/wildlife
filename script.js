// Set current year in footer
        const yearElement = document.getElementById('year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }

        // Animal Data
        const animals = [
            {
                name: "Lion",
                scientific: "Panthera leo",
                category: "Mammals",
                    image: "images/lion.jpg",
                habitat: "Golden savannas and open woodlands across Sub-Saharan Africa.",
                diet: "Carnivore (zebra, wildebeest, antelope).",
                lifespan: "10-14 years in the wild.",
                fact: "A lion's roar can travel more than 5 miles (8 kilometers) and is used to communicate with the pride.",
                soundType: "roar"
            },
            {
                name: "Tiger",
                scientific: "Panthera tigris",
                category: "Mammals",
                image: "images/tiger.jpg",
                habitat: "Dense forests and grasslands in Asia.",
                diet: "Carnivore (deer, boar, buffalo).",
                lifespan: "8-12 years in the wild.",
                fact: "Each tiger has a unique stripe pattern, and those stripes extend through the skin beneath their fur.",
                soundType: "growl"
            },
            {
                name: "Elephant",
                scientific: "Loxodonta africana",
                category: "Mammals",
                image: "images/elephant.jpg",
                habitat: "Savannas, forests, and river valleys across Africa.",
                diet: "Herbivore (grasses, bark, leaves, fruit).",
                lifespan: "60-70 years in the wild.",
                fact: "Elephants have exceptional memory and strong social bonds. They can recognize family members even after many years apart.",
                soundType: "trumpet"
            },
            {
                name: "Leopard",
                scientific: "Panthera pardus",
                category: "Mammals",
                image: "images/leopard.jpg",
                habitat: "Forests, mountains, and savannas across Africa and Asia.",
                diet: "Carnivore (antelopes, monkeys, small mammals).",
                lifespan: "12-17 years in the wild.",
                fact: "Leopards are exceptional climbers and often stash prey in trees to keep it safe from scavengers.",
                soundType: "growl"
            },
            {
                name: "Jaguar",
                scientific: "Panthera onca",
                category: "Mammals",
                image: "images/jaguar.jpg",
                habitat: "Rainforests, swamps, and riverine forests of Central and South America.",
                diet: "Carnivore (capybaras, caimans, deer).",
                lifespan: "8-12 years in the wild.",
                fact: "Jaguars have the strongest bite of any big cat relative to their size and can pierce turtle shells.",
                soundType: "roar"
            },
            {
                name: "Cheetah",
                scientific: "Acinonyx jubatus",
                category: "Mammals",
                image: "images/cheetah.jpg",
                habitat: "Grasslands and open plains in Africa.",
                diet: "Carnivore (gazelles, impalas, small antelopes).",
                lifespan: "10-12 years in the wild.",
                fact: "The cheetah is the fastest land animal and can accelerate from 0 to 60 mph in just a few seconds.",
                soundType: "growl"
            },
            {
                name: "Wolf",
                scientific: "Canis lupus",
                category: "Mammals",
                image: "images/wolf.jpg",
                habitat: "Forests, tundra, and mountain ranges across the Northern Hemisphere.",
                diet: "Carnivore (deer, elk, moose, smaller mammals).",
                lifespan: "6-8 years in the wild.",
                fact: "A wolf's howl helps coordinate hunting, assemble the pack, and signal territory boundaries.",
                soundType: "howl"
            },
            {
                name: "Fox",
                scientific: "Vulpes vulpes",
                category: "Mammals",
                image: "images/fox.jpg",
                habitat: "Forests, grasslands, mountains, and urban edges.",
                diet: "Omnivore (rodents, birds, fruits, insects).",
                lifespan: "3-5 years in the wild.",
                fact: "Foxes are highly adaptable and use their bushy tails for balance, warmth, and communication.",
                soundType: "howl"
            },
            {
                name: "Bear",
                scientific: "Ursidae",
                category: "Mammals",
                image: "images/bear.jpg",
                habitat: "Forests, mountains, tundra, and coastal regions worldwide.",
                diet: "Omnivore (berries, fish, small mammals, roots).",
                lifespan: "20-30 years in the wild.",
                fact: "Some bear species can run at speeds up to 35 mph despite their large size.",
                soundType: "growl"
            },
            {
                name: "Panda",
                scientific: "Ailuropoda melanoleuca",
                category: "Mammals",
                image: "images/panda.jpg",
                habitat: "Mountain bamboo forests in central China.",
                diet: "Herbivore (98% bamboo, occasionally eggs or small animals).",
                lifespan: "15-20 years in the wild.",
                fact: "Pandas spend up to 14 hours a day eating bamboo and can consume nearly 40 pounds in that time.",
                soundType: "growl"
            },
            {
                name: "Gorilla",
                scientific: "Gorilla beringei",
                category: "Mammals",
                image: "images/gorilla.jpg",
                habitat: "Tropical rainforests of central Africa.",
                diet: "Herbivore (leaves, fruit, stems, bamboo).",
                lifespan: "35-40 years in the wild.",
                fact: "Gorillas use tools and can communicate through a range of vocal sounds and gestures.",
                soundType: "growl"
            },
            {
                name: "Orangutan",
                scientific: "Pongo pygmaeus",
                category: "Mammals",
                image: "images/orangutan.png",
                habitat: "Rainforests of Borneo and Sumatra.",
                diet: "Omnivore (fruit, leaves, insects).",
                lifespan: "30-40 years in the wild.",
                fact: "Orangutans are among the most intelligent primates and build sleeping nests high in the trees.",
                soundType: "growl"
            },
            {
                name: "Zebra",
                scientific: "Equus quagga",
                category: "Mammals",
                image: "images/zebra.jpg",
                habitat: "African savannas and grasslands.",
                diet: "Herbivore (grasses, shoots, leaves).",
                lifespan: "20-25 years in the wild.",
                fact: "A zebra's stripes are unique and help confuse predators while keeping the herd together.",
                soundType: "howl"
            },
            {
                name: "Giraffe",
                scientific: "Giraffa camelopardalis",
                category: "Mammals",
                image: "images/giraffe.jpg",
                habitat: "African savannas and open woodlands.",
                diet: "Herbivore (acacia leaves, twigs, fruit).",
                lifespan: "25-30 years in the wild.",
                fact: "Giraffes have the same number of neck vertebrae as humans—seven—but each one is much larger.",
                soundType: "growl"
            },
            {
                name: "Rhinoceros",
                scientific: "Rhinocerotidae",
                category: "Mammals",
                image: "images/rhinoceros.jpg",
                habitat: "Grasslands, savannas, and forests in Africa and Asia.",
                diet: "Herbivore (grasses, leaves, shoots).",
                lifespan: "35-50 years in the wild.",
                fact: "Rhinos have thick armor-like skin and communicate through grunts, trumpets, and snorts.",
                soundType: "trumpet"
            },
            {
                name: "Eagle",
                scientific: "Haliaeetus leucocephalus",
                category: "Birds",
                image: "images/eagle.jpg",
                habitat: "Cliffs, forests, and lakeshores with access to open water.",
                diet: "Carnivore (fish, small mammals, birds).",
                lifespan: "20-30 years in the wild.",
                fact: "Eagles can spot prey more than a mile away thanks to exceptionally sharp vision.",
                soundType: "screech"
            },
            {
                name: "Owl",
                scientific: "Strigiformes",
                category: "Birds",
                image: "images/owl.jpg",
                habitat: "Woodlands, deserts, tundra, and urban areas worldwide.",
                diet: "Carnivore (rodents, insects, birds).",
                lifespan: "10-26 years depending on species.",
                fact: "Owls are silent hunters with specialized feathers that muffle the sound of flight.",
                soundType: "hoot"
            },
            {
                name: "Peacock",
                scientific: "Pavo cristatus",
                category: "Birds",
                image: "images/peacock.jpg",
                habitat: "Forests, farmlands, and parks in South Asia.",
                diet: "Omnivore (seeds, insects, small reptiles).",
                lifespan: "15-20 years in the wild.",
                fact: "The male peacock's tail feathers display vivid eye patterns used during elaborate courtship rituals.",
                soundType: "screech"
            },
            {
                name: "Penguin",
                scientific: "Spheniscidae",
                category: "Birds",
                image: "images/penguin.jpg",
                habitat: "Antarctic coasts and subantarctic islands.",
                diet: "Carnivore (fish, krill, squid).",
                lifespan: "15-20 years in the wild.",
                fact: "Penguins can stay underwater for more than 20 minutes and have flippers adapted for agile swimming.",
                soundType: "chirp"
            },
            {
                name: "Flamingo",
                scientific: "Phoenicopteridae",
                category: "Birds",
                image: "images/flamingo.jpg",
                habitat: "Shallow lakes, lagoons, and salty wetlands.",
                diet: "Filter feeder (algae, shrimp, crustaceans).",
                lifespan: "20-30 years in the wild.",
                fact: "The pink color of flamingos comes from the pigments in the food they eat.",
                soundType: "screech"
            },
            {
                name: "Swan",
                scientific: "Cygnus",
                category: "Birds",
                image: "images/swan.jpg",
                habitat: "Lakes, rivers, and wetlands across the Northern Hemisphere.",
                diet: "Omnivore (aquatic plants, insects, small fish).",
                lifespan: "20-30 years in the wild.",
                fact: "Swans mate for life and are known for their elegant, synchronized courtship displays.",
                soundType: "screech"
            },
            {
                name: "Parrot",
                scientific: "Psittaciformes",
                category: "Birds",
                image: "images/parrot.jpg",
                habitat: "Tropical forests and woodlands.",
                diet: "Omnivore (seeds, fruit, nuts, nectar).",
                lifespan: "20-80 years depending on species.",
                fact: "Many parrots can mimic human speech and solve complex puzzles using their strong beaks.",
                soundType: "chirp"
            },
            {
                name: "Falcon",
                scientific: "Falco peregrinus",
                category: "Birds",
                image: "images/falcon.jpg",
                habitat: "Open landscapes, cliffs, and cityscapes worldwide.",
                diet: "Carnivore (birds, small mammals).",
                lifespan: "13-20 years in the wild.",
                fact: "Peregrine falcons are the fastest animals on earth, diving at speeds over 200 mph.",
                soundType: "screech"
            },
            {
                name: "Toucan",
                scientific: "Ramphastos toco",
                category: "Birds",
                image: "images/toucan.jpg",
                habitat: "Tropical rainforests of Central and South America.",
                diet: "Omnivore (fruit, insects, small reptiles).",
                lifespan: "15-20 years in the wild.",
                fact: "A toucan's large bill helps regulate body temperature and reach fruit on thin branches.",
                soundType: "screech"
            },
            {
                name: "Kingfisher",
                scientific: "Alcedinidae",
                category: "Birds",
                image: "images/king fisher.jpg",
                habitat: "Rivers, lakes, and wetlands.",
                diet: "Carnivore (fish, insects, crustaceans).",
                lifespan: "6-10 years in the wild.",
                fact: "Kingfishers can hover above water before plunging to catch prey with pinpoint accuracy.",
                soundType: "chirp"
            },
            {
                name: "Crocodile",
                scientific: "Crocodylus niloticus",
                category: "Reptiles",
                image: "images/crocodile.jpg",
                habitat: "Rivers, lakes, and wetlands in tropical regions.",
                diet: "Carnivore (fish, mammals, birds).",
                lifespan: "35-70 years in the wild.",
                fact: "Crocodiles can remain submerged for more than an hour using a special valve to keep water out of their throat.",
                soundType: "growl"
            },
            {
                name: "Alligator",
                scientific: "Alligator mississippiensis",
                category: "Reptiles",
                image: "images/alligator.jpg",
                habitat: "Freshwater swamps, marshes, and rivers.",
                diet: "Carnivore (fish, turtles, birds, mammals).",
                lifespan: "30-50 years in the wild.",
                fact: "Alligators can deliver a bite force of more than 2,000 pounds per square inch.",
                soundType: "growl"
            },
            {
                name: "Cobra",
                scientific: "Naja naja",
                category: "Reptiles",
                image: "images/cobra.jpg",
                habitat: "Forests, grasslands, and agricultural areas in Asia.",
                diet: "Carnivore (rodents, frogs, birds).",
                lifespan: "20 years in the wild.",
                fact: "Cobras can raise the front third of their body upright and spread a hood to appear larger when threatened.",
                soundType: "hiss"
            },
            {
                name: "Python",
                scientific: "Pythonidae",
                category: "Reptiles",
                image: "images/python.jpg",
                habitat: "Tropical forests, grasslands, and swamps.",
                diet: "Carnivore (mammals, birds).",
                lifespan: "20-30 years in the wild.",
                fact: "Pythons kill prey by constriction and can swallow animals much larger than their head.",
                soundType: "hiss"
            },
            {
                name: "Komodo Dragon",
                scientific: "Varanus komodoensis",
                category: "Reptiles",
                image: "images/komodo dragon.jpg",
                habitat: "Islands and dry forests in Indonesia.",
                diet: "Carnivore (deer, pigs, birds).",
                lifespan: "30 years in the wild.",
                fact: "Komodo dragons have venom glands and a powerful bite used to bring down large prey.",
                soundType: "growl"
            },
          
            {
                name: "Chameleon",
                scientific: "Chamaeleonidae",
                category: "Reptiles",
                image: "images/chameleon.jpg",
                habitat: "Forests and shrublands in Africa and Madagascar.",
                diet: "Carnivore (insects, small birds).",
                lifespan: "5-7 years in the wild.",
                fact: "Chameleons can move their eyes independently and change color to communicate or regulate temperature.",
                soundType: "hiss"
            },
            {
                name: "Gecko",
                scientific: "Gekkonidae",
                category: "Reptiles",
                image: "images/gecko.jpg",
                habitat: "Warm forests, deserts, and rocky habitats.",
                diet: "Carnivore (insects, spiders).",
                lifespan: "5-10 years in the wild.",
                fact: "Geckos can climb smooth surfaces using tiny hair-like structures on their feet.",
                soundType: "chirp"
            },
            {
                name: "Dolphin",
                scientific: "Tursiops truncatus",
                category: "Marine Animals",
                image: "images/dolphin.jpg",
                habitat: "Temperate and tropical oceans worldwide.",
                diet: "Carnivore (fish, squid, crustaceans).",
                lifespan: "40-60 years.",
                fact: "Dolphins use echolocation to navigate and hunt, emitting clicks and listening for returning echoes.",
                soundType: "click"
            },
            {
                name: "Blue Whale",
                scientific: "Balaenoptera musculus",
                category: "Marine Animals",
                image: "images/bluewhale.jpg",
                habitat: "Open oceans around the globe.",
                diet: "Carnivore (krill).",
                lifespan: "80-90 years.",
                fact: "Blue whales are the largest animals ever known to have lived, reaching more than 100 feet long.",
                soundType: "screech"
            },
            {
                name: "Orca",
                scientific: "Orcinus orca",
                category: "Marine Animals",
                image: "images/orca.jpg",
                habitat: "Coastal waters and open oceans worldwide.",
                diet: "Carnivore (fish, seals, squid).",
                lifespan: "30-50 years in the wild.",
                fact: "Orcas hunt in coordinated pods and are among the ocean's most powerful predators.",
                soundType: "screech"
            },
            {
                name: "Shark",
                scientific: "Selachimorpha",
                category: "Marine Animals",
                image: "images/shark.jpg",
                habitat: "Oceans and seas worldwide.",
                diet: "Carnivore (fish, marine mammals, crustaceans).",
                lifespan: "20-30 years depending on species.",
                fact: "Sharks have been swimming in the ocean for more than 400 million years, long before dinosaurs existed.",
                soundType: "growl"
            },
            {
                name: "Octopus",
                scientific: "Octopoda",
                category: "Marine Animals",
                image: "images/octopus.jpg",
                habitat: "Coral reefs, ocean floors, and rocky crevices.",
                diet: "Carnivore (crabs, shrimp, fish).",
                lifespan: "1-3 years depending on species.",
                fact: "Octopuses are masters of camouflage and can reshape their body to fit through small gaps.",
                soundType: "click"
            },
            {
                name: "Sea Turtle",
                scientific: "Cheloniidae",
                category: "Marine Animals",
                image: "images/sea turtle.jpg",
                habitat: "Oceans, beaches, and coral reefs.",
                diet: "Omnivore (jellyfish, algae, seagrass).",
                lifespan: "50-100 years.",
                fact: "Sea turtles navigate long distances using the Earth's magnetic field.",
                soundType: "click"
            },
            {
                name: "Seal",
                scientific: "Pinnipedia",
                category: "Marine Animals",
                image: "images/seal.jpg",
                habitat: "Coastal waters and ice edge environments.",
                diet: "Carnivore (fish, squid, crustaceans).",
                lifespan: "25-30 years.",
                fact: "Seals can hold their breath for up to 30 minutes while diving for food.",
                soundType: "growl"
            },
            {
                name: "Walrus",
                scientific: "Odobenus rosmarus",
                category: "Marine Animals",
                image: "images/walrus.jpg",
                habitat: "Arctic seas and ice floes.",
                diet: "Carnivore (mollusks, clams, crustaceans).",
                lifespan: "20-30 years.",
                fact: "Walruses use their long tusks to haul themselves onto ice and to dig for food on the seafloor.",
                soundType: "growl"
            },
            {
                name: "Jellyfish",
                scientific: "Scyphozoa",
                category: "Marine Animals",
                image: "images/jellyfish.jpg",
                habitat: "Open ocean, coastal waters, and deep seas.",
                diet: "Carnivore (plankton, small fish).",
                lifespan: "A few months to a couple of years depending on species.",
                fact: "Jellyfish have no brain, heart, or bones. Their bodies are mostly water.",
                soundType: "click"
            },
            {
                name: "Seahorse",
                scientific: "Hippocampus",
                category: "Marine Animals",
                image: "images/sea horse.jpg",
                habitat: "Seagrass beds, mangroves, and coral reefs.",
                diet: "Carnivore (small crustaceans, plankton).",
                lifespan: "1-5 years in the wild.",
                fact: "Male seahorses carry eggs in a pouch and give birth to fully formed young.",
                soundType: "click"
            },
            {
                name: "Tree Frog",
                scientific: "Hylidae",
                category: "Amphibians",
                image: "images/tree frog.jpg",
                habitat: "Rainforests and wetlands.",
                diet: "Carnivore (insects, spiders).",
                lifespan: "5-10 years in the wild.",
                fact: "Tree frogs use their sticky toe pads to climb vertical surfaces with ease.",
                soundType: "chirp"
            },
            {
                name: "Bullfrog",
                scientific: "Lithobates catesbeianus",
                category: "Amphibians",
                image: "images/bull frog.jpg",
                habitat: "Ponds, lakes, and slow-moving streams.",
                diet: "Carnivore (insects, fish, small mammals).",
                lifespan: "7-10 years in the wild.",
                fact: "Bullfrogs are powerful jumpers and possess a deep, resonant call used to attract mates.",
                soundType: "croak"
            },
            {
                name: "Salamander",
                scientific: "Caudata",
                category: "Amphibians",
                image: "images/salamander.jpg",
                habitat: "Moist forests, streams, and wetlands.",
                diet: "Carnivore (insects, worms, small invertebrates).",
                lifespan: "10-20 years in the wild.",
                fact: "Many salamanders can regenerate lost limbs, a rare ability among vertebrates.",
                soundType: "croak"
            },
            {
                name: "Axolotl",
                scientific: "Ambystoma mexicanum",
                category: "Amphibians",
                image: "images/axolotl.jpg",
                habitat: "Freshwater lakes and canals in Mexico.",
                diet: "Carnivore (worms, insect larvae, small fish).",
                lifespan: "10-15 years in captivity.",
                fact: "Axolotls remain in their larval form throughout life and can regenerate organs and limbs.",
                soundType: "croak"
            },
            {
                name: "Butterfly",
                scientific: "Lepidoptera",
                category: "Insects",
                image: "images/butterfly.jpg",
                habitat: "Meadows, forests, gardens, and wetlands.",
                diet: "Nectar feeder (flowers, sap, fruit juices).",
                lifespan: "A few weeks to several months.",
                fact: "Butterflies taste with their feet and rely on wing coloration for mating and camouflage.",
                soundType: "chirp"
            },
            {
                name: "Honey Bee",
                scientific: "Apis mellifera",
                category: "Insects",
                image: "images/honey bee.jpg",
                habitat: "Meadows, orchards, and gardens worldwide.",
                diet: "Nectar and pollen.",
                lifespan: "4-6 weeks for workers, up to 5 years for queens.",
                fact: "Honey bees communicate the location of food through a precise waggle dance.",
                soundType: "buzz"
            },
            {
                name: "Dragonfly",
                scientific: "Anisoptera",
                category: "Insects",
                image: "images/dragon fly.jpg",
                habitat: "Freshwater ponds, lakes, and wetlands.",
                diet: "Carnivore (mosquitoes, flies, aquatic insects).",
                lifespan: "Several months as adults.",
                fact: "Dragonflies are ancient insects that existed before dinosaurs and can fly in six directions.",
                soundType: "buzz"
            }
        ];

        const categoryButtons = document.querySelectorAll('#category-filters button');
        const searchInput = document.getElementById('searchInput');
        let selectedCategory = 'All Animals';

        function filterAnimals() {
            const searchText = searchInput.value.trim().toLowerCase();
            const filteredAnimals = animals.filter(animal => {
                const matchesCategory = selectedCategory === 'All Animals' || animal.category === selectedCategory;
                const matchesSearch = searchText === '' || animal.name.toLowerCase().includes(searchText) || animal.scientific.toLowerCase().includes(searchText);
                return matchesCategory && matchesSearch;
            });
            renderAnimals(filteredAnimals);
        }

        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                selectedCategory = button.dataset.category;
                categoryButtons.forEach(btn => btn.classList.toggle('active', btn === button));
                filterAnimals();
            });
        });

        searchInput.addEventListener('input', filterAnimals);

        // Render Grid
        const gridContainer = document.getElementById('grid-container');
        let observer = null;

        function renderAnimals(animalList) {

            gridContainer.innerHTML = "";

            if (animalList.length === 0) {
                gridContainer.innerHTML = `
                    <div class="col-span-4 text-center py-12">
                        <h2 class="text-2xl font-bold text-gray-500">
                            No animals found 🦁
                        </h2>
                    </div>
                `;
                return;
            }

            animalList.forEach((animal) => {
                const index = animals.indexOf(animal);

                const card = document.createElement('div');

                card.className =
                'group bg-white rounded-2xl overflow-hidden shadow-apple hover:shadow-apple-hover transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer fade-up';

                card.onclick = () => openModal(index);

                // Use data-src for lazy loading with preload
                card.innerHTML = `
                    <div class="relative aspect-square overflow-hidden bg-gray-100">
                        <img data-src="${animal.image}" alt="${animal.name}" 
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 lazy-img"
                        src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><rect fill='%23f3f4f6' width='400' height='400'/></svg>">

                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>

                    <div class="p-5">
                        <p class="text-[0.6875rem] uppercase tracking-[0.25em] text-apple-blue font-semibold mb-2">${animal.category}</p>
                        <h3 class="text-lg font-semibold text-apple-dark tracking-tight">${animal.name}</h3>

                        <p class="text-sm text-apple-subtext mt-4 flex items-center">
                            <span class="text-apple-blue mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                →
                            </span>
                            Learn more
                        </p>
                    </div>
                `;

                gridContainer.appendChild(card);
                if (observer) observer.observe(card);

            });

            // Setup lazy image loader with preload buffer (500px before visible)
            setupLazyImageLoader();

        }

        function setupLazyImageLoader() {
            const lazyImages = document.querySelectorAll('img.lazy-img');
            
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.dataset.src;
                        if (src) {
                            img.src = src;
                            img.removeAttribute('data-src');
                            img.classList.remove('lazy-img');
                            observer.unobserve(img);
                        }
                    }
                });
            }, {
                root: null,
                rootMargin: '500px',  // Start loading 500px before image enters viewport
                threshold: 0
            });

            lazyImages.forEach(img => imageObserver.observe(img));
        }


        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                selectedCategory = button.dataset.category;
                categoryButtons.forEach(btn => btn.classList.toggle('active', btn === button));
                filterAnimals();
            });
        });

        searchInput.addEventListener('input', filterAnimals);

        // Hero Background Slideshow
        const heroBackground = document.getElementById("heroBackground");

        const backgrounds = [
            "images/bg1.jpg",
            "images/bg2.jpg",
            "images/bg3.jpg",
            "images/bg4.jpg",
            "images/bg5.jpg"
        ];

        let currentBackground = 0;

        setInterval(() => {
            const nextImage = new Image();
            currentBackground = (currentBackground + 1) % backgrounds.length;
            nextImage.src = backgrounds[currentBackground];
            nextImage.onload = () => {
                heroBackground.style.opacity = 0;
                setTimeout(() => {
                    heroBackground.src = nextImage.src;
                    heroBackground.style.opacity = 1;
                }, 300);
            };
        }, 5000);

        // Modal Logic
        const modalContainer = document.getElementById('modal-container');
        const modalOverlay = document.getElementById('modal-overlay');
        const modalContent = document.getElementById('modal-content');
        const closeBtn = document.getElementById('close-modal');
        let currentAnimalIndex = null;

        function openModal(index) {
            currentAnimalIndex = index;
            const animal = animals[index];
            
            // Populate data
            document.getElementById('modal-image').src = animal.image;
            document.getElementById('modal-image').alt = animal.name;
            document.getElementById('modal-title').textContent = animal.name;
            document.getElementById('modal-scientific').textContent = animal.scientific;
            document.getElementById('modal-habitat').textContent = animal.habitat;
            document.getElementById('modal-diet').textContent = animal.diet;
            document.getElementById('modal-category').textContent = animal.category;
            document.getElementById('modal-lifespan').textContent = animal.lifespan;
            document.getElementById('modal-fact').textContent = animal.fact;
            
            // Reset play button
            resetPlayButton();

            // Show modal
            modalContainer.classList.remove('hidden');
            modalContainer.classList.add('flex');
            
            // Small delay to allow display block to apply before animating opacity
            setTimeout(() => {
                modalOverlay.classList.remove('opacity-0');
                modalOverlay.classList.add('opacity-100');
                modalContent.classList.remove('opacity-0', 'scale-95');
                modalContent.classList.add('opacity-100', 'scale-100');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }, 10);
        }

        function closeModal() {
            modalOverlay.classList.remove('opacity-100');
            modalOverlay.classList.add('opacity-0');
            modalContent.classList.remove('opacity-100', 'scale-100');
            modalContent.classList.add('opacity-0', 'scale-95');
            
            setTimeout(() => {
                modalContainer.classList.add('hidden');
                modalContainer.classList.remove('flex');
                document.body.style.overflow = '';
                stopAudio(); // Ensure audio stops when modal closes
            }, 300);
        }

        modalOverlay.addEventListener('click', closeModal);
        closeBtn.addEventListener('click', closeModal);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modalContainer.classList.contains('hidden')) {
                closeModal();
            }
        });

        // Audio Playback Logic
        let isPlaying = false;
        let currentAudio = null;

        const animalAudioMap = {
            lion: 'lion sound.mp3',
            tiger: 'tiger sound.mp3',
            elephant: 'elephant sound.mp3',
            bear: 'bear sound.mp3',
            jaguar: 'jaguar sound.mp3',
            leopard: 'leopard sound.mp3',
            gorilla: 'gorilla sound.mp3',
            fox: 'fox sound.mp3',
            eagle: 'eagle sound.mp3',
            owl: 'owl sound.mp3',
            parrot: 'parrot sound.mp3',
            peacock: 'peacock sound.mp3',
            penguin: 'penguin sound.mp3',
            falcon: 'falcon sound.mp3',
            kingfisher: 'kingfisher sound.mp3',
            bluewhale: 'bluewhale sound.mp3',
            honeybee: 'honeybee sound.mp3',
            bullfrog: 'frog sound.mp3',
            treefrog: 'frog sound.mp3',
            snake: 'snake sound.mp3',
            python: 'snake sound.mp3',
            cobra: 'snake sound.mp3',
            wolf: 'wolf sound.mp3'
        };

        const playBtn = document.getElementById('play-sound-btn');
        const playIcon = playBtn.querySelector('i');
        const playText = document.getElementById('play-text');

        function getAudioFileForAnimal(animal) {
            if (!animal || !animal.name) return null;
            const key = animal.name.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
            const fileName = animalAudioMap[key];
            return fileName ? `audios/${fileName}` : null;
        }

        function stopAudio() {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                currentAudio = null;
            }
            isPlaying = false;
            resetPlayButton();
        }

        function resetPlayButton() {
            playIcon.className = 'fa-solid fa-play text-xs pl-0.5';
            playText.textContent = 'Listen to Call';
        }

        playBtn.addEventListener('click', () => {
            if (!animals[currentAnimalIndex]) return;
            if (isPlaying) {
                stopAudio();
            } else {
                playAnimalSound(animals[currentAnimalIndex]);
            }
        });

        function playAnimalSound(animal) {
            stopAudio();
            const audioFile = getAudioFileForAnimal(animal);
            if (audioFile) {
                playAudioFile(audioFile);
            } else {
                playSynthSound(animal.soundType);
            }
        }

        function playAudioFile(src) {
            currentAudio = new Audio(src);
            currentAudio.volume = 0.9;
            currentAudio.preload = 'auto';
            currentAudio.onended = stopAudio;
            currentAudio.onerror = () => {
                stopAudio();
            };

            currentAudio.play().then(() => {
                isPlaying = true;
                playIcon.className = 'fa-solid fa-stop text-xs';
                playText.textContent = 'Playing...';
            }).catch(() => {
                stopAudio();
            });
        }

        function playSynthSound(type) {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            isPlaying = true;
            playIcon.className = 'fa-solid fa-stop text-xs';
            playText.textContent = 'Playing...';

            const duration = 1.5;
            const now = audioCtx.currentTime;
            const gainNode = audioCtx.createGain();
            gainNode.connect(audioCtx.destination);
            gainNode.gain.setValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(0.5, now + 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);

            const osc = audioCtx.createOscillator();
            osc.connect(gainNode);
            let extras = [];

            switch(type) {
                case 'roar':
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(150, now);
                    osc.frequency.exponentialRampToValueAtTime(40, now + duration);
                    const lfo = audioCtx.createOscillator();
                    lfo.frequency.value = 10;
                    const lfoGain = audioCtx.createGain();
                    lfoGain.gain.value = 20;
                    lfo.connect(lfoGain);
                    lfoGain.connect(osc.frequency);
                    lfo.start(now);
                    lfo.stop(now + duration);
                    extras.push(lfo);
                    break;
                case 'trumpet':
                    osc.type = 'square';
                    osc.frequency.setValueAtTime(400, now);
                    osc.frequency.linearRampToValueAtTime(800, now + 0.5);
                    osc.frequency.linearRampToValueAtTime(300, now + duration);
                    break;
                case 'howl':
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(300, now);
                    osc.frequency.linearRampToValueAtTime(450, now + 0.5);
                    osc.frequency.linearRampToValueAtTime(350, now + duration);
                    break;
                default:
                    osc.type = 'sine';
                    osc.frequency.value = 440;
                    break;
            }

            osc.start(now);
            osc.stop(now + duration);
            extras.forEach(node => node.stop(now + duration));

            setTimeout(() => {
                audioCtx.close();
                stopAudio();
            }, duration * 1000);
        }

        // Scroll Animations (Intersection Observer)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach(element => {
            observer.observe(element);
        });

        // Initial render
        renderAnimals(animals);

        // Navbar blur effect on scroll
        const navbar = document.getElementById('navbar');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.replace('bg-white/70', 'bg-white/90');
                navbar.classList.replace('border-gray-200/50', 'border-gray-200');
            } else {
                navbar.classList.replace('bg-white/90', 'bg-white/70');
                navbar.classList.replace('border-gray-200', 'border-gray-200/50');
            }
        });
