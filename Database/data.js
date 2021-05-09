const productsData = [
  {
    id: 1,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/30-10-20/5f9c04edf03c5.jpg",
    name:
      "Kittos Sunfish Chicken & Twirls Cat Treat, Buy 4 Get 1 Offer (35 GM)",
    price: 396,
    oldPrice: 495,
    rating: 4.0,
    reviews: 666,
    inStock: true,
    fastDelivery: true,
    description: `Kittos Sunfish and Chicken Twirls Cat Treat is an ideal treat for your fur babies as the product is an assortment of Fish (40%), Chicken (57.3%), and other ingredients. It also includes 45 percent protein, a good percentage of Fat, Ash and Fibre needed to fulfill the daily requirements.
`,
    shortDescription: ``,
    petType: "cats",
    category: "treat",
    brand: "kittos"
  },
  {
    id: 2,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/28-03-21/605fa45695814.jpg",
    name: "Pedigree Chicken & Vegetables Dry Dog Food",
    price: 540,
    oldPrice: 540,
    rating: 4.5,
    reviews: 113,
    inStock: true,
    fastDelivery: true,
    description: `Pedigree Chicken & Vegetables Adult Dry Dog Food is a wholesome meal, packed with essential nutrients vital to the healthy growth of your pet. The natural goodness of cereals, soybean, carrots, peas & milk blend into a tasty treat for your little one. It assures healthier and a shinier coat, strong muscles, good digestive health, healthy bones and teeth and a stronger immune system. Pedigree Chicken & Vegetables Adult Dry Dog Food contains special mix of fatty acids for healthy skin and coat. The optimum ca:p quantitative relation and levels square measure for the sturdy teeth and bones. Superior digestion ensures optimum digestion of nutrients. Vitamins and minerals within the food square measure for sturdy system. Proteins provide your dog sturdy muscles. The high-quality meat proteins help give the dog the energy he needs to enjoy a good game of fetch with his favourite ball.`,
    shortDescription: `Suitable For Adult Dogs Of All Breed
    Contains Essential Vitamins & Minerals To Boost The Overall Immune System
    Provides Healthier & Shinier Coat
    High Quality Ingredients For Greater Taste
    Fibre Promotes Good Digestion Ensuring A High Nutrient Absorption
    Calcium Keep The Bones And Teeth Healthy & Strong
    Rich In Protein To Build Good Muscle Mass & To Heal Damaged Tissues`,
    petType: "dogs",
    category: "food",
    brand: "pedigree"
  },
  {
    id: 3,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/21-08-20/5f3f83571e6cc.jpg",
    name:
      "Pedigree Pro Starter Puppy & Mother Dry Dog Food (3-12 weeks)(1.2 KG)",
    price: 460,
    oldPrice: 500,
    rating: 4,
    reviews: 133,
    inStock: true,
    fastDelivery: false,
    description: `Pedigree Mother and Pup Starter meals for mother and pup delivers expert nutrition to pregnant/ lactating mothers and 3-12 weeks old puppies. This dog food is suitable for all dog breeds and is a perfect to give your pets. For pups, it helps in keeping their immune system strong and intact since they have a delicate immune system and are prone to infections and loose stools. Since pups tend to gain 5-10% of their body weight upto 12 weeks, this product also ensures optimal growth and nutrition. It is an energy dense dog food as it contains prebiotics for digestive health. It is also enriched with Colostrum that strengthens immunity and digestive system in delicate new pups, and essential nutrients to maximize growth potential, making it an ideal food for dogs. Pedigree Pro Starter Dog Food (Mother and Puppy) provides instant energy for lactating mothers and ensures digestive health.`,
    shortDescription: `Suitable For Puppies Between 3 To 12 Weeks Of Age
    Suitable For Lactating & Pregnant Mothers
    Prebiotics (MOS) To Help With Digestive Health
    To Puppies As Well As Lactating Mother, You Can Serve It After Making It Moist With Water
    32% Protein Content - Very Healthy For Puppies & Pregnant Mothers
    Dry Dog Food For All Breeds
    After The Weaning Age Of Puppy Ends, You Can Serve Puppy Food Till Their Adult Age`,
    petType: "dogs",
    category: "food",
    brand: "pedigree"
  },
  {
    id: 4,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/12-03-21/604b36897f15e.jpg",
    name: "Whiskas Chicken in Gravy Wet Cat Food (85 gm x 12 Pouches)",
    price: 420,
    oldPrice: 420,
    rating: 4.0,
    reviews: 306,
    inStock: false,
    fastDelivery: true,
    description: `Product Features

    Complete Nutrition: Whiskas Chicken in Gravy Wet Cat Food is a complete meal for cats for maintaining a healthy and well balanced diet.
    
    Highly Palatable: Whiskas Chicken in Gravy Wet Cat Food is a composition of tuna and other ingredients in jelly form which makes it highly palatable even for fussy eaters.
    
    Balanced Diet: Each Whiskas Chicken in Gravy Wet Cat Food pouch contains 100% complete and balanced cat food with meaty pieces to help you provide care for your cat.
    
    Maintains Urinary Tract Health: Whiskas Chicken in Gravy Wet Cat Food helps in maintaining urinary tract health of cats.
    
    Strengthens The Immunity: Whiskas Chicken in Gravy Wet Cat Food contains a broad range of added vitamins, minerals and antioxidants which strengthen the vitals, teeth, fur, skin, immunity and overall health of your pet cat.


    Growing cats require a diet that not only maintains their fur, skin and vitals but also provides them with essentials that enable them to live a healthy long life. With decades of experience in understanding ‘what’s best for a cat’, Whiskas is a 100% nutritionally balanced, complete meal. For every life stage of your cat, Whiskas has a specially formulated recipe with a range of wet and dry meals & flavors to support healthy and strong growth.
    Whiskas Wet Cat Food provides complete nutrition for your pet cats. It is an irresistible cat food for your special furry friend.     `,
    shortDescription: `Complete & Balanced Nutrition For Adult Cats
    Provides Moisture And Nourishment
    Blended With Calcium, Phosphorus, Proteins, Antioxidants, Vitamins & Minerals
    High Quality Protein & Ingredients
    Maintain Fur, Heart, Weight, Skin, Teeth, Muscles, Bones & Overall Immunity`,
    petType: "cats",
    category: "food",
    brand: "whiskas"
  },
  {
    id: 5,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/28-03-21/605fc29a30ba0.jpg",
    name:
      "Chip Chops Dog Treat (Roast Duck Slice) Buy 4 Get 1 Offer(Pack Of 5)",
    price: 797,
    oldPrice: 995,
    rating: 4,
    reviews: 303,
    inStock: false,
    fastDelivery: true,
    description: `Chip Chops Dog Treat Roast Duck is a tasty treat packed with the nutritional goodness of bananas and made with good quality protein-rich duck. Chip Chops Dog Treat Roast Duck is carefully prepared to provide a pure, tasty and easily digestible snack filled with nutritional benefits for your dog’s health. It contains no added sugar and empty calories which helps maintain weight. These dog treats are made with fresh meat and packed with proteins to promote a healthier and shinier coat. Dog treats are a great way to keep your pooch motivated and encouraged to learn. Keep rewarding your dog while training, it will help reinforce good behavior. Chip Chops Dog Treat Roast Duck is made with balanced nutrients and provides a variety of health benefits for your pets well-being. It is suitable for feeding as a snack, rewarding for good behavior and to show your pet love with some indulgent pampering!

    Store in a cool, dry place and avoid exposure to direct sunlight.`,
    shortDescription: `Suitable For Dogs Of All Breeds, 3 Months & Older
    Improves Bone Strength & Immunity
    Highly Nutritious & Optimum Healthy Formula
    Use It As A Snack Or A Treat For Training & Reinforcing Good Behavior
    Easily Digestible Dog Snack
    Natural & Delicious Taste
    Helps Sustain Healthy Skin & Shiny Coat
    No Added Sugar, No Empty Calories`,
    petType: "dogs",
    category: "treat",
    brand: "chip chops"
  },
  {
    id: 6,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/19-08-20/5f3cfeb97ccda.jpg",
    name: "Trixie Classic H Shaped Dog Harness (Red)(S-M)",
    price: 325,
    oldPrice: 325,
    rating: 4.0,
    reviews: 603,
    inStock: true,
    fastDelivery: false,
    description: `Trixie classic harness for dogs has an 'H' design which means that the shape of the harness makes putting on and taking off the harness very easy, your pet can just step into it and the snap buckle ensures a secure fit. The harness is made from durable high-quality nylon and is fully adjustable so you can ensure comfort for your pet.

    Great as an alternative to a collar and lead when walking your pet, reducing the strain put on your pets neck when or if they pull, distributing this force around their torso instead.
    .
    `,
    shortDescription: `• Made of high-quality nylon material
    • This harness for dogs has a unique 'H' shape
    • Fully adjustable chest and belly straps
    • Extra thick to provide full support and comfort
    • Helps in controlling your dog while walking
    • Secure closure`,
    petType: "dogs",
    category: "accessories",
    brand: "trixie"
  },
  {
    id: 7,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/24-09-20/5f6c61db45c5b.jpg",
    name: "Pedigree Pro Dog Food Active Adult Large Breeds (18months+)(3 KG)",
    price: 880,
    oldPrice: 1000,
    rating: 4.2,
    reviews: 213,
    inStock: true,
    fastDelivery: true,
    description: `Active dogs need special nutrition. If you parent a powerhouse of energy, you need to be providing them with enough nutrition to sustain and grow in a healthy manner. Pedigree Pro Dog Food for Active Adult Dogs helps your dog be alert and agile. It also keeps their muscles strong and helps with making up for daily muscle wear and tear. Your active, working, sporting, gestating or lactating dog can get their nutritional fill through the food. Pedigree Pro Dog Food For Active Adult Dogs is a special formulation which provides balanced nutrition and high energy to your dog. Pedigree Pro Dog Food For Active Adult Dogs is perfect for active dogs like a working or sporting dog and pregnant or lactating dogs, who have a more than usual need for energy. Healthy fats supply energy to their bodies and protein assists in maintaining lean and sturdy muscles. Strengthening the defense mechanism of the dog, Pedigree Pro Dog Food For Active Adult Dogs also supports the digestive system of the body by adding prebiotics in the food. Omega fatty acids take care of the health of the skin and coat of your dog. Its superior antioxidant formula neutralizes free radicals present in the body thereby boosting the overall immunity.`,
    shortDescription: `Dog Food For Adult Dogs Of Large Breeds Above 18 Months Of Age
    Ideal For Dogs From 18 Months Onwards
    High Quality Ingredients For Greater Taste & Healthier Digestion
    Proteins & Omega Fatty Acids Provide Energy, Agility & Alertness
    Natural Anti-Oxidants Help Reduce Stress & Protein Builds Strong Muscles
    Prebiotics (MOS) Help Suppot Digestive Health In Dogs
    Suitable For Golden Retriever, German Shephard, Labrador, Dobermann & St.Bernard`,
    petType: "dogs",
    category: "food",
    brand: "pedigree"
  },
  {
    id: 8,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/28-03-21/605fc358a96a7.jpg",
    name:
      "Chip Chops Dog Treat Chicken & Calcium Bone 3 months+ (70g) (Pack of 1)",
    price: 189,
    oldPrice: 199,
    rating: 4,
    reviews: 303,
    inStock: true,
    fastDelivery: true,
    description: `Chip Chops Dog Treat Chicken & Calcium Bone is a tasty treat packed with the nutritional goodness of bananas and made with good quality protein-rich chicken. Chip Chops Dog Treat Chicken & Calcium Bone is carefully prepared to provide a pure, tasty and easily digestible snack filled with nutritional benefits for your dog’s health. It contains no added sugar and empty calories which helps maintain weight. These dog treats are made with fresh meat and packed with proteins to promote a healthier and shinier coat. Dog treats are a great way to keep your pooch motivated and encouraged to learn. Keep rewarding your dog while training, it will help reinforce good behavior. Chip Chops Dog Treat Chicken & Calcium Bone is made with balanced nutrients and provides a variety of health benefits for your pets well-being. It is suitable for feeding as a snack, rewarding for good behavior and to show your pet love with some indulgent pampering!

    Store in a cool, dry place and avoid exposure to direct sunlight.`,
    shortDescription: `Suitable For Dogs Of All Breeds, 3 Months & Older
    Improves Bone Strength & Immunity
    Highly Nutritious & Optimum Healthy Formula
    Use It As A Snack Or A Treat For Training & Reinforcing Good Behavior
    Easily Digestible Dog Snack
    Natural & Delicious Taste
    Helps Sustain Healthy Skin & Shiny Coat
    No Added Sugar, No Empty Calories`,
    petType: "dogs",
    category: "treat",
    brand: "chip chops"
  },
  {
    id: 9,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/products/28-05-19/5ced6a42f1796.jpg",
    name:
      "PetSutra Rope Ball Toy for Chewing and Teething, for Dogs & Puppies ( Color May Vary Rope Ball)",
    price: 209,
    oldPrice: 209,
    rating: 4.5,
    reviews: 303,
    inStock: true,
    fastDelivery: true,
    description: `What breeds of dogs can play with these toys?

    Different Toys are for different breed of toys.
    
    Small Breeds: 2-Knot Tug Toy, Rope Ball & Orbit Ball Tugger Medium.
    Medium Breeds: 3-Knot Tug Toy, Rope Ball, Figure 8 Medium, Orbit Ball Tugger Medium & Knotted Rope Toy with Handle.
    Large Breeds: 5-Knot Tug Toy, Figure 8 Large, Orbit Ball Tugger Large & Knotted Rope Toy with Handle.
    
    Are these toys safe for my dogs?
    
    Petsutra Rope Chew Toys are absolutely safe for small dogs and puppies. It is not uncommon for dogs to grow attached to these toys and carry them around in their mouths and even enjoy cuddling up next to the toy at night. For puppies, the rope chew toys are actually highly beneficial in preventing them from chewing on furniture and shoes when they are teething.
    
    Do my dogs really need a rope toy?
    
    Although your pet dog (or dogs) doesn’t exactly need Petsutra Rope Toys to survive, there are many physical and mental benefits to having these charming and durable chew toys in your home. They provide your pet with exercise, amusement and more. Rope toys reduce destructive behavior from chewing, helps clean your dog’s teeth preventing dental disease and entertain your pet while you are gone.
    `,
    shortDescription: `PetSutra Rope Ball Dog Toy is an ideal and evergreen toy for your small, medium and large breed puppies and adult dogs. The ball is tough and durable and is made of natural cotton rope; hence, even in case of swallowing its' fibers, the dog is safe. Play the favourite game of 'Fetch' with this rope ball toy, to keep your dog playful and active.`,
    petType: "dogs",
    category: "toys",
    brand: "petsutra"
  },
  {
    id: 10,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/08-01-21/5ff816142b75b.jpg",
    name: "PetSutra 7 in 1 Dog Toy Combo for Puppies & Small Breeds Dogs",
    price: 649,
    oldPrice: 999,
    rating: 4,
    reviews: 303,
    inStock: true,
    fastDelivery: false,
    description: `PetSutra Dog Toy Combo 7 in 1 for Puppies & Small Breeds Dogs

    Which breed/size of dogs can play with these toys?
    
    Different Toys for different breeds/sizes of dogs.
    
    Small & Medium Breed Dogs like Shih Tzu, Beagle, Boxer, Lhasa Apso, Cocker Spaniel, Dachshund, Pug, Indies & other similar breeds
    
    Are these toys safe for my dogs?
    
    Petsutra Rope Chew Toys are absolutely safe for small dogs and puppies. It is not uncommon for dogs to grow attached to these toys and carry them around in their mouths and even enjoy cuddling up next to the toy at night. For puppies, the rope chew toys are actually highly beneficial in preventing them from chewing on furniture and shoes when they are teething.
    
    Do my dogs really need a rope toy?
    
    Although your pet dog (or dogs) doesn’t exactly need Petsutra Rope Toys to survive, however, there are many physical and mental benefits to having these charming and durable chew toys in your home. They provide your pet with exercise, amusement and more. Rope toys reduce destructive behavior from chewing, helps clean your dog’s teeth preventing dental disease and entertain your pet while you are gone.
    
    How long will the rope toys last?
    
    The life of PetSutra Rope Toys depends on many factors including the size and breed of the dogs playing with the toy, how often it is being chewed on and in what environments. The durable cotton material twisted tightly helps prevent wear and tear such as fraying and ripping and ultimately prolongs the toy’s life. As long as the cotton ropes are not left outside in the rain for days or chewed on constantly by very large dogs, then the rope toys should last you for months of fun and enjoyment.`,
    shortDescription: `7 in 1 Dog Rope Toy Combo
    Ideal Toy Chewing & Teething
    Apt for puppies or small sized breeds
    Rope toys made of natural cotton
    Chemical free, No Harmful coloring
    Safe toys for dogs & puppies`,
    petType: "dogs",
    category: "toys",
    brand: "petsutra"
  },
  {
    id: 11,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/14-08-20/5f364d35a7b5f.png",
    name: "PetSutra Durable Rope Training Leash for Dogs (Orange)(15 MM)",
    price: 225,
    oldPrice: 349,
    rating: 4.9,
    reviews: 500,
    inStock: true,
    fastDelivery: true,
    description: `Make the outdoor activities of your pooch even more fun with PetSutra Rope Leash. This leash is strong and durable that does not get stretched when your pooch pulls it hard. Made with cotton rope and jute, this leash also prevents rope burns on the hands of pet parents during any fun exercise.
    This rope leash is 5.4 feet long and is handmade right here in India with the utmost attention given to every detail, by skillful artisans. This leash contains heavy-duty brass clasp that connects to the collar or harness. This leash comes in various colours that gives it a stylish look.
    This would be the softest dog leash you've ever felt and are very soft on your hands, while providing you with a strong grip, and also ensures its durability. So whether you're on the road, in the park, or on the beach, you can guide your dog knowing that you have the most reliable leash available.
    
    Weatherproof
    
    Great for every weather condition, these dog leashes won't rot, freeze or break. They're also not susceptible to UV damage and works great during outdoor activities. If you like strolling around the neighbourhood or taking your hunting dog with you deep in the woods - this is the leash for you.
    
    Specifications
    
    Made from natural cotton rope & jute
    - 5.4 Feet Long
    - Strong Brass Hook
    - Multiple Colour Options
    `,
    shortDescription: `Rope Leash for Dogs
    Strong & Durable
    5.4 Feet Long
    Refer to the Size Chart Below
    Find the Right Size Depending on the Breed & Lifestage`,
    petType: "dogs",
    category: "accessories",
    brand: "petsutra"
  },
  {
    id: 12,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/products/28-05-19/5ced4c625de44.jpg",
    name: "PetSutra Rubber Stud Spiked Ball for Dogs & Puppies, 3 Inch",
    price: 285,
    oldPrice: 285,
    rating: 3.9,
    reviews: 403,
    inStock: false,
    fastDelivery: true,
    description: `• BRIGHT & COLORFUL: The PetSutra Rubber Stud Spiked Ball comes in a bright and colorful red color.
    • FUN TOY FOR EXERCISING: A fun way for your dog to exercise. Play Fetch game with your dog all day.
    • DURABLE: A Durable toy that your dog will enjoy playing and chewing.
    • COMFORTABLE WAY TO CLEAN DOG’S TEETH: Not only is the attractive and charming PetSutra Rubber Stud Spiked Ball fun and addictive, it is also a great way to help prevent dental diseases in your canine companion. By allowing your dogs to chew, they will inadvertently be flossing their gums and cleaning their teeth, while they play and chew with their new favorite toy. It prevents tartar & plaque buildup.
    • SCENTED: The PetSutra Rubber Stud Spiked Ball has a unique scent that will keep your dog attracted to it. We won’t wonder if it becomes your dog’s favorite toy.
    
    Comes in a bright & colorful red color, the PetSutra Rubber Stud Spiked Ball might soon become your dog’s favorite toy. Made from safe, long-lasting natural rubber, the tough toy studded ball and it is an ideal toy for all breeds of dog.
    `,
    shortDescription: `PetSutra Ball Dog Toy is an ideal and evergreen toy for your small, medium and large breed puppies and adult dogs. The ball is tough and durable. Play the favourite game of 'Fetch', to keep your dog playful and active.`,
    petType: "dogs",
    category: "toys",
    brand: "petsutra"
  },
  {
    id: 13,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/08-03-21/6045f8df3255f.jpg",
    name: "Bio-Groom So-Gentle Hypo-Allergenic Tear-Free Shampoo (355 ml)",
    price: 1350,
    oldPrice: 1350,
    rating: 4.5,
    reviews: 803,
    inStock: true,
    fastDelivery: true,
    description: `Premium Quality: Bio-Groom So-Gentle is tested to ensure tear free and extreme mildness by in-vitro methods, a non-animal testing procedure.

    Cleanses Efficiently: Bio-Groom So-Gentle cleans completely and effortlessly without stripping natural protective oils from the skin and coat.
    
    Natural Formula: Bio-Groom So-Gentle is made with Natural Coconut Oil Cleansers which gives the coat a beautiful healthy sheen as it cleans. The cleansers derived from regrowable and 100% biodegradable sources of Coconut Oil and Palm kernel oil.
    
    100% Safe: Bio-Groom So-Gentle Hypo-Allergenic Tear-Free Shampoo is safe for dogs, puppies, cats and kittens. It can be used with topical flea and tick treatments.
    
    Maintains pH Balance: Bio-Groom So-Gentle helps maintain pH balance, rinses out fast and completely.`,
    shortDescription: `Suitable For Dogs Prone To Allergies And Skin Infections
    Rinses Quickly And Completely
    Tear Free Shampoo Leaves No Irritating Residue
    Contains Coconut, Palm Kernel, And Corn Oils Derived From Renewable And Biodegradable Sources
    Safe To Use With Topical Flea And Tick Treatments`,
    petType: "dogs",
    category: "grooming",
    brand: "bio-groom"
  },
  {
    id: 14,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/19-08-20/5f3d59d5a9955.jpg",
    name: "Trixie Monogram Dog Collar Cotton Webbing",
    price: 599,
    oldPrice: 700,
    rating: 4.5,
    reviews: 603,
    inStock: true,
    fastDelivery: false,
    description: `Trixie classic harness for dogs has an 'H' design which means that the shape of the harness makes putting on and taking off the harness very easy, your pet can just step into it and the snap buckle ensures a secure fit. The harness is made from durable high-quality nylon and is fully adjustable so you can ensure comfort for your pet.

    Great as an alternative to a collar and lead when walking your pet, reducing the strain put on your pets neck when or if they pull, distributing this force around their torso instead.
    .
    `,
    shortDescription: `90% Cotton and 10% Poly Fibre : Our luxury dog collars are made with 90% cotton and 10% poly fibre and are light weight, rustic & great for everyday wear.

    Size Check is Important : The collars are available in three sizes, that are: Small, Medium and Large. Please measure your pooch before purchasing.
    
    Comfort is top priority : Softy padded for comfort, these collars give optimum control to the walker while keeping the dog totally comfortable.
    
    Washable :Hand-wash with mild soap, flat dry. Do not use brush
    The perfect collar set fo allergic to nylon and leather, made with nickle free hardware. Poochmate's new cotton webbing collars & leashes are made with 90% cotton and 10% poly fibre and are lightweight, rustic & great for everyday wear.

Quick-dry if the dog gets wet. Lightweight, great for everyday use. Nonallergenic as its made of 90% woven cotton, safe for dogs with sensitive skin. `,
    petType: "dogs",
    category: "accessories",
    brand: "trixie"
  },
  {
    id: 15,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/19-08-20/5f3d468f1f9f0.jpg",
    name: "Trixie Set of 6 Puppy Collars (Dark Colours) (S-M) (17-25 cm)",
    price: 460,
    oldPrice: 700,
    rating: 4.5,
    reviews: 603,
    inStock: true,
    fastDelivery: false,
    description: `• MADE WITH SOFT NYLON- Trixie puppy collars are essentials for puppies. These collars are made with soft nylon are comfy for the new ones.
    • DURABLE & TEAR PROOF- These sturdy collars is very durable, tear proof and soft on your puppy’s skin.
    • EASY TO CLEAN- Trixie puppy collars are smell-proof, waterproof and easier to clean than regular collars.
    • FULLY ADJUSTABLE- This collar is fully adjustable; you can adjust the size according to the neck of your pooch so that they feel comfortable during their outdoor activities.
    • COLLAR SIZE- These collars fit neck sizes from 17cm up to 25cm.
    `,
    shortDescription: `Trixie set of 6 Puppy Collars is a must have for the new ones. These collars are made up of soft nylon and are fully adjustable. Available in two colours sets Dark and Light.`,
    petType: "dogs",
    category: "accessories",
    brand: "trixie"
  },
  {
    id: 16,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/17-07-20/5f11db68de500.jpg",
    name: "Bio-groom Waterless Bath Dog Shampoo 236ML",
    price: 975,
    oldPrice: 1075,
    rating: 4.5,
    reviews: 803,
    inStock: true,
    fastDelivery: true,
    description: `No Rinse Shampoo- Bio-Groom Waterless Dog Shampoo is a short-cut and a mess-free way to give a dry bath to dogs, when bathing is not possible.

    Maintains Ph Balance- This shampoo is made with all natural products and contains no harmful chemicals, it helps in maintaining the PH balance of dogs.
    
    For Fluffy & Fresh Coat- This waterless shampoo is easy to use and leaves a fluffy and fresh coat of pooches with a mild fragrance.
    
    Safe To Use With Other Treatments- This shampoo is safe to use with topical flea and tick treatments and is recommended by the top breeders and professional groomers worldwide.
    
    Bio-Groom Waterless Bath Dog Shampoo is a No Rinse, Mess-Free grooming product, which is designed for dogs, when bathing is not practical.`,
    shortDescription: `Bio-Groom Waterless Dog Shampoo is a short-cut to a bath for dogs, who don’t enjoy this part of grooming. This shampoo is made with all natural products and contains no harmful chemicals, it helps in maintaining the pH balance of dogs. This shampoo is safe to use with topical tick and flea treatments. This waterless shampoo is easy to use and leaves a fluffy and fresh coat of felines. This waterless shampoo is easy to use and leaves a fluffy and fresh coat of pooches with a mild fragrance.`,
    petType: "dogs",
    category: "grooming",
    brand: "bio-groom"
  },
  {
    id: 17,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/20-08-20/5f3e1c7d2b668.jpg",
    name: "Himalaya Erina Coat Cleanser for Dogs & Cats 450 ml",
    price: 385,
    oldPrice: 410,
    rating: 4.0,
    reviews: 611,
    inStock: true,
    fastDelivery: true,
    description: `Controls Dandruff Likes a Pro: This coat cleanser from Himalaya is grooming product that cleans the dandruff from the coat like a pro.

    Improves Skin Hygiene: Its antiseptic and antibacterial cleansing that eliminates germs and improves overall skin hygiene
    
    Eliminates Foul Odour : This cleanser for dogs and cats contains natural deodorisers that eliminates foul odour
    
    Removes Bacterial Infection : Erina protects the body against commonly found pathogens that cause itching and bacterial infections
    
    Ayurvedic Properties : Each ml contains- Tailaparni 9mg, Vacha 8 mg, Sarapunkha 6.5 mg, Nimba 6.5 mg
    
    Erina controls ectoparasites (external parasites) like ticks, fleas and lice in pets. Its antimicrobial and antifungal actions, prevent skin infections and improves the overall condition of the skin.

Wet the pet's body thoroughly with water. Apply the required quantity of shampoo and rub thoroughly into the hair root to obtain a lather.
`,
    shortDescription: `Prevents dandruff on your pet’s skin and hair coat.
    This cat be used for dogs as well as cats
    Erina's deodorizing properties eliminate foul odor.
    Key ingredient, ‘Neem in relieves itching, redness and irritation.
    Improves immunity against skin infections.
    Natural and Herbal Product`,
    petType: "dogs",
    category: "grooming",
    brand: "himalaya"
  },
  {
    id: 18,
    image:
      "https://www.pupkart.com/Products/pet-Dog/Accessories/pupProducts/pr2482_1_small.jpg",
    name: "Dog Hoodie Lazy Dog For Medium And Large Dogs S26",
    price: 1150,
    oldPrice: 2000,
    rating: 4.0,
    reviews: 611,
    inStock: true,
    fastDelivery: true,
    description: `Dimensions-
    Length: 24 inch
    Width:  14 inch
    
    Suitable for the Pet having torso less then or equal to 28 inch
    
    1) This Dog Hoodie is best for Winters.
    
    2) Comfortable and stylish dog hoodie for your lovable pet.
    
    3) Best suited for Dog Winter Wears
`,
    shortDescription: ``,
    petType: "dogs",
    category: "clothing",
    brand: "canes venatici"
  },
  {
    id: 19,
    image:
      "https://www.pupkart.com/Products/pet-Dog/Accessories/pupProducts/pr1815_1_small.jpg",
    name: "Imported Dog Jacket Black Blue Small S20",
    price: 1440,
    oldPrice: 1440,
    rating: 4.5,
    reviews: 551,
    inStock: true,
    fastDelivery: true,
    description: `Dimensions-
    Length: 20 inch
    Width: 10 inch
    
    Suitable for the Pet having torso less then or equal to 28 inch
    
    1) This Dog Hoodie is best for Winters.
    
    2) Comfortable and stylish dog hoodie for your lovable pet.
    
    3) Best suited for Dog Winter Wears
`,
    shortDescription: ``,
    petType: "dogs",
    category: "clothing",
    brand: "canes venatici"
  },
  {
    id: 20,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/13-08-20/5f3541abb2db7.png",
    name: "Whiskas Junior Ocean Fish Dry Kitten Food (1.1 Kg)",
    price: 345,
    oldPrice: 385,
    rating: 4.0,
    reviews: 666,
    inStock: true,
    fastDelivery: true,
    description: `Highly Palatable- This food contains high quality of tuna that improves the taste and makes the meal highly palatable.

    Boosts Strength - This Cat Food contains high quality protein that provides strength and boots the muscle mass.
    
    Improves Vision- It improves the eyesight of the feline since it contains Vitamin A.
    
    Maintains A Healthy Heart- Vitamin E and Taurine help in keeping the heart healthy and build a strong defence mechanism.
    
    Regulates Brain Functioning- Essential fatty acids like Omega 3 and Omega 6 regulates brain functioning, gives a beautiful skin and a shiny coat.
    
    Whiskas Pocket Tuna Cat Food contains high-quality tuna and keeps your adult cat healthy and active. It improves the eyesight of the cat since it contains Vitamin A. Vitamin E and Taurine maintain good cardiac health.
`,
    shortDescription: `Whiskas Junior Ocean Fish Dry Kitten Food is made with high-quality ingredients, contains vitamins minerals, calcium and protein for the early growth of your feline friend.`,
    petType: "cats",
    category: "food",
    brand: "whiskas"
  },
  {
    id: 21,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/03-09-20/5f50d3dd90628.jpg",
    name: "Kittos Cat Treats Salmon Rings packs, 35g each(Pack Of 3)",
    price: 325,
    oldPrice: 360,
    rating: 4.0,
    reviews: 666,
    inStock: true,
    fastDelivery: true,
    description: `Kittos Salmon Rings Cat Treat is an ideal treat for your fur babies as the product is an assortment of Salmon (71%), Chicken (25%), and other ingredients. It also includes 30 percent protein, a good percentage of Fat, Ash and Fibre needed to fulfill the daily requirements.

    Kittos Cat Treats comes in five different flavors including Sunfish & Chicken Twirls, Chicken Jerky Strips, Snapper Jerky Strips, Salmon Rings, Tuna Jerky Strips, that is a perfect treat for cats.
    
    Features-
    --Fish content 40 percent and chicken content 57 percent
    --Rich in proteins
    --Highly digestible
    --No added sugar
`,
    shortDescription: `Suitable for kittens and adult cats of all breeds
    Apt amount of Fibre for good digestions
    Natural Flavor and no added sugar
    Salmon 70%, Chicken 25%, Sorbitol 2%, Starch 2%
    High 30% protein content to suffice protein dietary needs
    Serve daily`,
    petType: "cats",
    category: "treat",
    brand: "kittos"
  },
  {
    id: 22,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/14-03-21/604e4bdfd71a2.jpg",
    name: "PetSutra Cat Toy Jute Ball (Multicolor)",
    price: 150,
    oldPrice: 349,
    rating: 4.5,
    reviews: 333,
    inStock: true,
    fastDelivery: false,
    description: `Safe Material: Material of PetSutra Cat Toy Jute Ball is completely natural and safe for your feline to play.

    Suitable for All Ages: PetSutra Cat Toy Jute Ball is apt for all ages and breeds of cats and kittens.
    
    Attractive: PetSutra Cat Toy Jute Ball is made of natural jute, sized 2.5 inches.
    
    Unique Rattling Sound: PetSutra Cat Toy Jute Ball makes a soft rattling sound when shaken and played with.
    
    Durable: The product is a result of high-quality materials that is durable enough to stand bites and paw scratches of the cats.
`,
    shortDescription: `PetSutra Cat Toy Jute Ball is an interactive toy that will keep your feline friend busy for hours. With safe material and attractive price, this is a must for your Cat. - Lightweight Cat Toy For Playing`,
    petType: "cats",
    category: "toys",
    brand: "petsutra"
  },
  {
    id: 23,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/19-08-20/5f3d4b3a35c76.jpg",
    name: "Trixie Two Balls on Sisal Rope Cat Toy (With Bell)",
    price: 150,
    oldPrice: 150,
    rating: 3.8,
    reviews: 253,
    inStock: false,
    fastDelivery: true,
    description: `• APT FOR FRISKY FELINE- Trixie Two Balls on Sisal Rope is a toy apt for frisky felines. It comes with a bell inside the balls that adds up entertainment.

    • NON-TOXIC - This toy for cats is made with Sisal rope, a fibre made from the sisal plant that makes it non-toxic and safe for your felines.
    
    • BRINGS OUT NATURAL HUNTING INSTINCTS- This toy comes with two balls that act as a teaser and brings out the natural instincts of hunting in cats.
    
    • FITS IN THE MOUTH- This cat toy fits in the mouth of your feline easily and helps in removing tartar and plaque from the teeth.
    
    • COMFORTABLE & DURABLE- This plaything is made of Sisal Rope which is both comfortable and durable for cats to play for a 14long time.
`,
    shortDescription: `Trixie Two Balls on Sisal Rope is a toy apt for frisky felines, comes with a bell inside the balls that adds up entertainment. It is non-toxic and safe for your felines. This toy fits in the mouth of feline easily and helps in removing tartar and plaque from the teeths. This plaything is both comfortable and durable for cats to play for a 14 long time.`,
    petType: "cats",
    category: "toys",
    brand: "trixie"
  },
  {
    id: 24,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/17-07-20/5f11e62da13ab.jpg",
    name: "PetSutra 3-Storey Cat Toy (Multicolor)",
    price: 349,
    oldPrice: 349,
    rating: 3.5,
    reviews: 653,
    inStock: true,
    fastDelivery: true,
    description: `• Interactive Toy - PetSutra Cat Playing 3-Storey Toy is the interactive and playful thing that will keep your feline engaged for hours.
    • Pet Safe - This toy is made with eco-friendly materials that make it safe for pets. The plastic is non-toxic so, this toy is 100 percent free from any kind of danger.
    • Fights Boredom and Anxiety: The toy will keep your cat happily engaged for long hours and will also help in fighting boredom, and anxiety pets usually face.
    • Suitable for all ages- The toy is suitable for cats of all ages and sizes.
    • Portable & Heavy-duty- The toy is made with high-quality plastic that makes it a heavy-duty product. Also, this toy is portable and light enough to be carried everywhere your cat wants to play.
    
    Petsutra 3-Storey Cat toy has a circular base, a spinning ball inside the circle and a mouse attached with spring. This is an apt toy for a cat with the natural instinct of catching a mouse. Your cat will love to bat the inner ball around the circle trying to get it out!
`,
    shortDescription: `PetSutra Cat Playing 3-Storey Toy is the interactive and playful thing that will keep your feline engaged for hours. This toy is made with eco-friendly materials, the nontoxic plastic makes it a 100% harm free for the feline. It will help in fighting boredom, and anxiety pets usually face. This toy is portable and light enough to be carried everywhere your cat wants to play.`,
    petType: "cats",
    category: "toys",
    brand: "petsutra"
  },
  {
    id: 25,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/03-02-20/5e3846b9ad263.jpg",
    name: "PetSutra Cat Collar, Faux Leather, Purple",
    price: 169,
    oldPrice: 169,
    rating: 3.5,
    reviews: 653,
    inStock: true,
    fastDelivery: true,
    description: `• Handcrafted: We are dedicated to quality, Every collar is handmade and hand-stitched. The inside of the collar is softly padded and protects your cats neck from rubbing and irritation.

    • Single Piece Leather: Every PetSutra collar is made with a Single Piece of Leather which doesn't let the leather break or crack even with rough usage.
    
    • Durable & Fashionable Collar: The cat collar is made up of superior quality to provide maximum comfort to Cats & Kittens it's completely safe and non-toxic and therefore does not harm the cat and it's very gentle on the cat's skin.
    
    • High-Quality Brass Buckle: The silver buckle is made of brass which will withstand any weather condition or rough and tough usage.
    
    • Adjustable Design: PetSutra Cat Collar is suitable for any stage of their lives, from a young kitten to a senior. This Cat Collar is adjustable for neck size.
    
    
    PetSutra brings to your beloved kitties a range of High Quality and Fashionable Cat Collars
    The hallmark of PetSutra cat collars: Durability, Comfort and Style.
    Made from Genuine Leather, we want your pooches to stand out from the pack
    PetSutra Cat Collars are handcrafted with a lot of love and affection.
`,
    shortDescription: `We are dedicated to quality, Every collar is handmade and hand-stitched. The inside of collar is softly padded and protects your cat's neck from rubbing and irritation. Every collar is made up of a single piece of leather. it's completely safe and non-toxic and therefore does not harm the cat and it's very gentle on the cat's skin. `,
    petType: "cats",
    category: "accessories",
    brand: "petsutra"
  },
  {
    id: 26,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/26-07-20/5f1d1b73583cc.jpg",
    name: "PetSutra Catbury Beautiful Feline Print Cat Bow Tie (Pink)",
    price: 299,
    oldPrice: 299,
    rating: 3.9,
    reviews: 653,
    inStock: true,
    fastDelivery: true,
    description: `Why should Dogs have all the fun? When your little beauty queen can also flaunt their style!

    Mutt of Course presents Catbury Cat Bow Tie in beautiful pink colour and unique cat print that will make your kitty look dressed to kill!...Haha…just kidding!
    
    This Bow-Tie is a must-have accessory for all the dapper and fashionista cats as this bow tie adds a stylish touch to any event.
    
    This bow-tie is crafted with love and is made of high-quality cotton fabric and comes with a snap-buckle which is easy to wear and an adjuster to fit according to the neck size.
    
    Features
    
    Made of 100% Cotton, Suitable for all cats
    
    Easy to wear with adjuster and snap on buckle
    
    An awesome accessory for your kitty or for gifting purposes
    
    Wash delicate cycle or hand wash with cold water
`,
    shortDescription: `PetSutra presents Catbury Cat Bow Tie in beautiful pink colour and unique cat print that will make your kitty look dressed to kill!...Haha…just kidding!`,
    petType: "cats",
    category: "accessories",
    brand: "petsutra"
  },
  {
    id: 27,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/10-02-21/60241d6ae5997.jpg",
    name: "Trixie Cat Katzen-Shampoo (250 ml)",
    price: 275,
    oldPrice: 295,
    rating: 3.9,
    reviews: 653,
    inStock: true,
    fastDelivery: false,
    description: `Cleans & Softens: Trixie Cat Shampoo cleanses and softens dry skin. It also helps in deep conditioning of the skin and fur.

    Premium Quality: Trixie Cat Shampoo is made with highest quality ingredients which contain skin-moisturizing properties for deep cleaning.
    
    Regular Use: Trixie Cat Shampoo is gentle enough for even weekly use in cats who may need frequent bathing.
    
    Suitability: Trixie Cat Shampoo is a mild shampoo, made with camomile extracts which is pH balanced especially created for all types of cats and kittens.
    
    100% Safe: Trixie Cat Shampoo is free of fragrances, colorants and harsh chemicals. It's been specially formulated as a tear free shampoo to avoid irritation in eyes. It is safe to use on cats 6 weeks and older.
    
`,
    shortDescription: `Suitable For Cats & Kittens Older Than 6 Weeks
    Shampoo For Short-Haired Cats
    Eases Combing With Its Anti-Tangling Effects
    Gives The Hair Coat A Luxuriant & Silky Shine`,
    petType: "cats",
    category: "grooming",
    brand: "trixie"
  },
  {
    id: 28,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/products/28-03-19/5c9c6ecc3e846.jpg",
    name: "Bio-Groom Klean Kitty Waterless Shampoo 235 ML",
    price: 975,
    oldPrice: 1075,
    rating: 3.9,
    reviews: 653,
    inStock: false,
    fastDelivery: false,
    description: `--NO RINSE SHAMPOO- Bio-Groom Klean Kitty Waterless Shampoo is a short-cut to a bath for cats, who don’t enjoy this part of grooming.
    --MAINTAINS PH BALANCE- This shampoo is made with all natural products and contains no harmful chemicals, it helps in maintaining the PH balance of cats.
    --FOR FLUFFY & FRESH COAT- This waterless shampoo is easy to use and leaves a fluffy and fresh coat of felines.
    --SAFE TO USE WITH OTHER TREATMENTS- This shampoo is safe to use with topical flea and tick treatments and is recommended by the top breeders and professional groomers worldwide.
    
    Bio-Groom Klean Kitty Waterless Shampoo is a No Rinse, Mess-Free grooming product, which is designed for those cats who don’t enjoy taking bath.
    This product is an assortment of natural sources like coconut & palm kernel oils and contains lavender fragrance that gives a fresh and fluffy coat and maintains PH balance of the skin.
    This product is safe to use with other treatments like tick and flea treatment, this shampoo is recommended by the top breeders and professional groomers worldwide.
    
`,
    shortDescription: `Bio-Groom Klean Kitty Waterless Shampoo is a short-cut to a bath for cats, who don’t enjoy this part of grooming. This shampoo is made with all natural products and contains no harmful chemicals, it helps in maintaining the pH balance of cats. `,
    petType: "cats",
    category: "grooming",
    brand: "bio-groom"
  },
  {
    id: 29,
    image:
      "https://petsutra.s3.ap-south-1.amazonaws.com/app/uploads/products/28-03-19/5c9c6e8773810.jpg",
    name: "Bio-Groom Purrfect White Cat Conditioning Shampoo 235 ML",
    price: 1100,
    oldPrice: 1225,
    rating: 4.5,
    reviews: 433,
    inStock: true,
    fastDelivery: false,
    description: `--Apt for Cats of White & Light-Coloured Coat- Bio-Groom Purrfect White Cat Conditioning Shampoo is made with a unique formula which is apt for felines of white and light-coloured coat.
    --Enriched with Protein- This shampoo has a coconut oil base that makes it rich in protein which removes dryness of the skin and provides natural lustre and shine.
    --Adds Pearlescent Sparkle to The Cat- This shampoo is made with a special formula that contains pearlescent brighteners that creates sparkling accents and a rich lustrous sheen.
    --Bleach-Free Shampoo- This shampoo is rich and foamy, it has a neutral pH and is non-bleaching that controls matting, tangling and fly-away hair.
    --Paraben & Dye-Free- This shampoo is an assortment of 100% biodegradable sources of coconut, sodium coco sulphate, vegetable glycerine, soy protein, etc. and it is free from parabens and artificial dyes.
    
    Bio-Groom Purrfect White Cat Conditioning Shampoo is a grooming product apt for cats of white and light-colored coat.
    
    This shampoo has a coconut oil base which makes it rich in protein that removes dryness of the skin and provides natural luster and shine. This shampoo is made with a special formula that contains pearlescent brighteners that creates sparkling accents and a rich lustrous sheen. It also contains 100% biodegradable sources of coconut, sodium coco sulphate, vegetable glycerine, soy protein, etc. and it is free from parabens and artificial dyes, this is why it is recommended by the professional groomers and top breeders worldwide.
    
`,
    shortDescription: `Bio-Groom Purrfect White Cat Conditioning Shampoo is made with a unique formula which is apt for felines of white and light-coloured coat. This shampoo has a coconut oil base that makes it rich in protein which removes dryness of the skin and provides natural lustre and shine.`,
    petType: "cats",
    category: "grooming",
    brand: "bio-groom"
  }
];

module.exports = {productsData}