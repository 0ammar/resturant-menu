export const seedCategories = [
  { name: "Shawarma", nameAr: "شاورما" },
  { name: "Snack Meals", nameAr: "وجبات السناكات" },
  { name: "Burgers", nameAr: "برغر" },
  { name: "Broasted Chicken", nameAr: "دجاج بروستد" },
  { name: "Grilled Dishes", nameAr: "المشاوي" },
  { name: "Rice Platters", nameAr: "أطباق الأرز" },
  { name: "Sandwiches", nameAr: "ساندويشات" },
  { name: "Arayes", nameAr: "عرايس" },
  { name: "Sides & Appetizers", nameAr: "مقبلات" },
  { name: "Beverages", nameAr: "مشروبات" },
  { name: "Family Meals", nameAr: "وجبات عائلية" },
  { name: "Special Combos", nameAr: "وجبات كومبو" },
];

export const seedProducts = [
  // 1. Shawarma (Category 0)
  { 
    name: "Classic Shawarma Sandwich", 
    nameAr: "ساندويش شاورما عادي", 
    description: "Traditional 70g shawarma wrap with tender marinated meat, fresh vegetables, and our signature garlic sauce in soft Arabic bread", 
    descriptionAr: "شاورما تقليدية 70 غرام مع لحم متبل طري وخضار طازجة وصلصة الثوم المميزة في خبز عربي طري", 
    price: 0.70, 
    categoryIndex: 0,
    image: "/uploads/1.png"
  },
  { 
    name: "Large Shawarma Sandwich", 
    nameAr: "ساندويش شاورما كبير", 
    description: "Generous 120g shawarma wrap loaded with premium meat, crispy vegetables, pickles, and tahini sauce wrapped in fresh Arabic bread", 
    descriptionAr: "لفة شاورما كبيرة 120 غرام محملة باللحم الممتاز والخضار المقرمشة والمخللات وصلصة الطحينة في خبز عربي طازج", 
    price: 1.30, 
    categoryIndex: 0,
    image: "/uploads/2.png"
  },
  { 
    name: "French Bread Shawarma with Cheese", 
    nameAr: "شاورما خبز فرنسي مع جبنة", 
    description: "Delicious shawarma wrapped in crispy French baguette, topped with melted cheese, fresh vegetables, and special sauce", 
    descriptionAr: "شاورما لذيذة ملفوفة في خبز فرنسي مقرمش، مغطاة بالجبن الذائب والخضار الطازجة والصلصة الخاصة", 
    price: 1.50, 
    categoryIndex: 0,
    image: "/uploads/3.png"
  },
  { 
    name: "Al-Noor Shawarma Meal", 
    nameAr: "وجبة شاورما النور", 
    description: "Complete meal featuring our signature shawarma with crispy fries, fresh salad, pickles, and hot sauce served in a convenient box", 
    descriptionAr: "وجبة كاملة تتميز بشاورما مميزة مع بطاطس مقرمشة وسلطة طازجة ومخللات وصوص حار في علبة مريحة", 
    price: 2.20, 
    categoryIndex: 0,
    image: "/uploads/4.png"
  },
  { 
    name: "Super Shawarma Meal", 
    nameAr: "وجبة شاورما سوبر", 
    description: "Upgraded meal with extra shawarma meat, generous portion of golden fries, mixed appetizers, garlic sauce, and hot sauce", 
    descriptionAr: "وجبة محسنة مع لحم شاورما إضافي، حصة كبيرة من البطاطس الذهبية، مقبلات مشكلة، صلصة ثوم وصوص حار", 
    price: 2.85, 
    categoryIndex: 0,
    image: "/uploads/5.png"
  },
  { 
    name: "Double Shawarma Meal", 
    nameAr: "وجبة شاورما دبل", 
    description: "Double portion of premium shawarma meat with extra fries, coleslaw, pickles, tahini, and hot sauce - perfect for big appetites", 
    descriptionAr: "حصة مضاعفة من لحم الشاورما الممتاز مع بطاطس إضافية وكول سلو ومخللات وطحينة وصوص حار - مثالية للشهية الكبيرة", 
    price: 3.45, 
    categoryIndex: 0,
    image: "/uploads/6.png"
  },
  { 
    name: "Triple Shawarma Meal", 
    nameAr: "وجبة شاورما تربل", 
    description: "Triple serving of succulent shawarma with abundant fries, full appetizer selection, and premium sauces - a feast for shawarma lovers", 
    descriptionAr: "حصة ثلاثية من الشاورما الشهية مع بطاطس وفيرة ومجموعة مقبلات كاملة وصلصات فاخرة - وليمة لعشاق الشاورما", 
    price: 4.75, 
    categoryIndex: 0,
    image: "/uploads/7.png"
  },
  { 
    name: "French Extra Shawarma Meal", 
    nameAr: "وجبة شاورما إكسترا فرنسي", 
    description: "Extra large French bread shawarma loaded with cheese, premium meat, crispy fries, fresh vegetables, and hot sauce", 
    descriptionAr: "شاورما خبز فرنسي إكسترا كبيرة محملة بالجبن واللحم الممتاز والبطاطس المقرمشة والخضار الطازجة والصوص الحار", 
    price: 2.50, 
    categoryIndex: 0,
    image: "/uploads/8.png"
  },
  { 
    name: "Double French Extra Meal", 
    nameAr: "وجبة إكسترا فرنسي دبل", 
    description: "Double portion of French bread shawarma with melted cheese, double meat serving, extra fries, and complete appetizers", 
    descriptionAr: "حصة مضاعفة من شاورما الخبز الفرنسي مع الجبن الذائب وحصة مضاعفة من اللحم وبطاطس إضافية ومقبلات كاملة", 
    price: 4.00, 
    categoryIndex: 0,
    image: "/uploads/9.png"
  },
  { 
    name: "Halabi Style Shawarma", 
    nameAr: "شاورما حلبي", 
    description: "Authentic Aleppo-style shawarma with special spice blend, pomegranate molasses, crispy fries, and traditional Syrian sides", 
    descriptionAr: "شاورما حلبية أصيلة بمزيج التوابل الخاص ودبس الرمان والبطاطس المقرمشة والمقبلات السورية التقليدية", 
    price: 3.75, 
    categoryIndex: 0,
    image: "/uploads/10.png"
  },
  { 
    name: "Italian Style Shawarma", 
    nameAr: "شاورما إيطالي", 
    description: "Fusion shawarma with Italian herbs, mozzarella cheese, sun-dried tomatoes, golden fries, and basil-infused sauce", 
    descriptionAr: "شاورما فيوجن بالأعشاب الإيطالية وجبن الموزاريلا والطماطم المجففة والبطاطس الذهبية وصلصة الريحان", 
    price: 3.75, 
    categoryIndex: 0,
    image: "/uploads/11.png"
  },
  { 
    name: "Half Kilo Plain Shawarma", 
    nameAr: "نصف كيلو شاورما سادة", 
    description: "Premium 500g of freshly sliced shawarma meat, perfectly seasoned and grilled - ideal for sharing or meal prep", 
    descriptionAr: "500 غرام من لحم الشاورما الممتاز المقطع طازجاً والمتبل بشكل مثالي والمشوي - مثالي للمشاركة أو تحضير الوجبات", 
    price: 5.00, 
    categoryIndex: 0,
    image: "/uploads/12.png"
  },
  { 
    name: "Full Kilo Plain Shawarma", 
    nameAr: "كيلو شاورما سادة", 
    description: "Full kilogram of our finest shawarma meat, marinated in traditional spices and slow-roasted to perfection", 
    descriptionAr: "كيلوغرام كامل من أفضل لحم شاورما لدينا، متبل بالتوابل التقليدية ومشوي ببطء للكمال", 
    price: 10.00, 
    categoryIndex: 0,
    image: "/uploads/13.png"
  },

  // 2. Snack Meals (Category 1)
  { 
    name: "Zinger Snack Meal", 
    nameAr: "وجبة زنجر", 
    description: "Crispy 200g zinger chicken strips with golden fries, fresh coleslaw, and our signature hot sauce in a meal box", 
    descriptionAr: "شرائح دجاج زنجر مقرمشة 200 غرام مع بطاطس ذهبية وكول سلو طازج وصوصنا الحار المميز في علبة وجبة", 
    price: 2.75, 
    categoryIndex: 1,
    image: "/uploads/14.png"
  },
  { 
    name: "Double Zinger Meal", 
    nameAr: "وجبة زنجر دبل", 
    description: "Double portion of crispy zinger strips (400g), loaded fries, mixed appetizers, garlic dip, and spicy hot sauce", 
    descriptionAr: "حصة مضاعفة من شرائح الزنجر المقرمشة (400 غرام)، بطاطس محملة، مقبلات مشكلة، غموس ثوم وصوص حار", 
    price: 3.85, 
    categoryIndex: 1,
    image: "/uploads/15.png"
  },
  { 
    name: "Fajita Snack Meal", 
    nameAr: "وجبة فاهيتا", 
    description: "Tender 200g chicken fajita with sautéed peppers and onions, seasoned fries, and zesty hot sauce", 
    descriptionAr: "فاهيتا دجاج طرية 200 غرام مع فلفل وبصل مقلي، بطاطس متبلة وصوص حار منعش", 
    price: 2.75, 
    categoryIndex: 1,
    image: "/uploads/16.png"
  },
  { 
    name: "Double Fajita Meal", 
    nameAr: "وجبة فاهيتا دبل", 
    description: "Generous 400g serving of marinated fajita chicken with colorful vegetables, crispy fries, and hot sauce", 
    descriptionAr: "حصة كبيرة 400 غرام من دجاج الفاهيتا المتبل مع خضار ملونة وبطاطس مقرمشة وصوص حار", 
    price: 3.85, 
    categoryIndex: 1,
    image: "/uploads/17.png"
  },
  { 
    name: "Mix Fajita Zinger Meal", 
    nameAr: "وجبة مكس فاهيتا وزنجر", 
    description: "Best of both worlds - 200g fajita chicken and 200g crispy zinger with fries, salad, and signature hot sauce", 
    descriptionAr: "أفضل ما في العالمين - 200 غرام فاهيتا و200 غرام زنجر مقرمش مع بطاطس وسلطة وصوص حار مميز", 
    price: 3.85, 
    categoryIndex: 1,
    image: "/uploads/18.png"
  },
  { 
    name: "Beef Steak Meal", 
    nameAr: "وجبة ستيك لحمة", 
    description: "Juicy 200g grilled beef steak with seasoned fries, grilled vegetables, and spicy hot sauce", 
    descriptionAr: "ستيك لحم بقري مشوي شهي 200 غرام مع بطاطس متبلة وخضار مشوية وصوص حار", 
    price: 2.75, 
    categoryIndex: 1,
    image: "/uploads/19.png"
  },
  { 
    name: "Double Beef Steak Meal", 
    nameAr: "وجبة ستيك لحمة دبل", 
    description: "Premium 400g beef steak perfectly grilled, served with extra fries, mixed vegetables, and hot sauce", 
    descriptionAr: "ستيك لحم بقري ممتاز 400 غرام مشوي بشكل مثالي، يقدم مع بطاطس إضافية وخضار مشكلة وصوص حار", 
    price: 3.85, 
    categoryIndex: 1,
    image: "/uploads/20.png"
  },
  { 
    name: "Chicken Steak Meal", 
    nameAr: "وجبة ستيك دجاج", 
    description: "Tender 200g grilled chicken breast steak with herb seasoning, golden fries, and tangy hot sauce", 
    descriptionAr: "ستيك صدر دجاج مشوي طري 200 غرام بتتبيلة الأعشاب والبطاطس الذهبية وصوص حار لذيذ", 
    price: 2.75, 
    categoryIndex: 1,
    image: "/uploads/21.png"
  },
  { 
    name: "Double Chicken Steak Meal", 
    nameAr: "وجبة ستيك دجاج دبل", 
    description: "Double serving of grilled chicken steak (400g), loaded fries, fresh salad, and spicy hot sauce", 
    descriptionAr: "حصة مضاعفة من ستيك الدجاج المشوي (400 غرام)، بطاطس محملة، سلطة طازجة وصوص حار", 
    price: 3.85, 
    categoryIndex: 1,
    image: "/uploads/22.png"
  },
  { 
    name: "Creamy Chicken Meal", 
    nameAr: "وجبة دجاج بالكريمة", 
    description: "Succulent 200g chicken in rich cream sauce with mushrooms, crispy fries, and signature hot sauce", 
    descriptionAr: "دجاج شهي 200 غرام بصلصة كريمة غنية مع فطر وبطاطس مقرمشة وصوص حار مميز", 
    price: 2.85, 
    categoryIndex: 1,
    image: "/uploads/23.png"
  },
  { 
    name: "Double Creamy Chicken Meal", 
    nameAr: "وجبة دجاج بالكريمة دبل", 
    description: "Generous 400g portion of chicken in creamy mushroom sauce, extra fries, salad, and hot sauce", 
    descriptionAr: "حصة كبيرة 400 غرام من الدجاج بصلصة الفطر الكريمية، بطاطس إضافية، سلطة وصوص حار", 
    price: 3.85, 
    categoryIndex: 1,
    image: "/uploads/24.png"
  },
  { 
    name: "Mexican Chicken Meal", 
    nameAr: "وجبة مكسيكي", 
    description: "Spicy 200g Mexican-style chicken with peppers, jalapeños, seasoned fries, and fiery hot sauce", 
    descriptionAr: "دجاج مكسيكي حار 200 غرام مع فلفل وهالابينو وبطاطس متبلة وصوص حار ناري", 
    price: 2.75, 
    categoryIndex: 1,
    image: "/uploads/25.png"
  },
  { 
    name: "Double Mexican Meal", 
    nameAr: "وجبة مكسيكي دبل", 
    description: "Double portion of zesty Mexican chicken (400g) with extra vegetables, loaded fries, and hot sauce", 
    descriptionAr: "حصة مضاعفة من الدجاج المكسيكي اللذيذ (400 غرام) مع خضار إضافية وبطاطس محملة وصوص حار", 
    price: 3.75, 
    categoryIndex: 1,
    image: "/uploads/26.png"
  },
  { 
    name: "Creamy Zinger Meal", 
    nameAr: "وجبة زنجر بالكريمة", 
    description: "Crispy 200g zinger strips in creamy sauce with mushrooms, golden fries, and signature hot sauce", 
    descriptionAr: "شرائح زنجر مقرمشة 200 غرام بصلصة كريمية مع فطر وبطاطس ذهبية وصوص حار مميز", 
    price: 2.85, 
    categoryIndex: 1,
    image: "/uploads/6.png"
  },
  { 
    name: "Double Creamy Zinger Meal", 
    nameAr: "وجبة زنجر بالكريمة دبل", 
    description: "Double helping of creamy zinger strips (400g), loaded fries, coleslaw, and spicy hot sauce", 
    descriptionAr: "حصة مضاعفة من شرائح الزنجر بالكريمة (400 غرام)، بطاطس محملة، كول سلو وصوص حار", 
    price: 4.00, 
    categoryIndex: 1,
    image: "/uploads/9.png"
  },
  { 
    name: "Philadelphia Meal", 
    nameAr: "وجبة فيلادلفيا", 
    description: "Special 200g Philadelphia-style chicken with cream cheese, vegetables, crispy fries, and hot sauce", 
    descriptionAr: "دجاج فيلادلفيا المميز 200 غرام مع جبن كريمي وخضار وبطاطس مقرمشة وصوص حار", 
    price: 2.85, 
    categoryIndex: 1,
    image: "/uploads/1.png"
  },
  { 
    name: "Alfredo Meal", 
    nameAr: "وجبة الفريدو", 
    description: "Creamy Alfredo chicken with rich parmesan sauce, pasta, golden fries, and signature hot sauce", 
    descriptionAr: "دجاج ألفريدو الكريمي مع صلصة بارميزان غنية وباستا وبطاطس ذهبية وصوص حار مميز", 
    price: 2.85, 
    categoryIndex: 1,
    image: "/uploads/2.png"
  },
  { 
    name: "Italian Zinger Meal", 
    nameAr: "وجبة إيطالي زنجر", 
    description: "Italian-seasoned zinger with herbs, mozzarella, sun-dried tomatoes, fries, and hot sauce", 
    descriptionAr: "زنجر إيطالي متبل بالأعشاب وموزاريلا وطماطم مجففة وبطاطس وصوص حار", 
    price: 4.00, 
    categoryIndex: 1,
    image: "/uploads/3.png"
  },
  { 
    name: "Italian Fajita Meal", 
    nameAr: "وجبة إيطالي فاهيتا", 
    description: "Italian-style fajita with basil pesto, fresh vegetables, golden fries, and spicy hot sauce", 
    descriptionAr: "فاهيتا إيطالية مع بيستو الريحان وخضار طازجة وبطاطس ذهبية وصوص حار", 
    price: 4.00, 
    categoryIndex: 1,
    image: "/uploads/4.png"
  },

  // 3. Burgers (Category 2)
  { 
    name: "Classic Beef Burger", 
    nameAr: "برغر لحمة", 
    description: "Juicy beef patty with fresh lettuce, tomatoes, onions, pickles, and our special burger sauce in a soft bun", 
    descriptionAr: "قرص لحم بقري شهي مع خس طازج وطماطم وبصل ومخللات وصلصة البرغر الخاصة في خبز طري", 
    price: 1.10, 
    categoryIndex: 2,
    image: "/uploads/5.png"
  },
  { 
    name: "Chicken Escalope Burger", 
    nameAr: "برغر سكالوب", 
    description: "Crispy breaded chicken escalope with lettuce, tomatoes, garlic sauce, and pickles in a sesame bun", 
    descriptionAr: "سكالوب دجاج مقرمش مع خس وطماطم وصلصة ثوم ومخللات في خبز بالسمسم", 
    price: 1.10, 
    categoryIndex: 2,
    image: "/uploads/6.png"
  },
  { 
    name: "Double Chicken Burger with Cheese", 
    nameAr: "برغر دجاج دبل مع جبنة", 
    description: "Two grilled chicken patties topped with melted cheese, fresh vegetables, and creamy sauce", 
    descriptionAr: "قرصان من الدجاج المشوي مغطاة بالجبن الذائب والخضار الطازجة والصلصة الكريمية", 
    price: 2.00, 
    categoryIndex: 2,
    image: "/uploads/7.png"
  },
  { 
    name: "Double Beef Burger with Cheese", 
    nameAr: "برغر لحمة دبل مع جبنة", 
    description: "Double beef patties loaded with cheddar cheese, lettuce, tomatoes, onions, and special sauce", 
    descriptionAr: "قرصان لحم بقري محملان بجبن الشيدر والخس والطماطم والبصل والصلصة الخاصة", 
    price: 2.00, 
    categoryIndex: 2,
    image: "/uploads/8.png"
  },
  { 
    name: "Beef Burger Meal", 
    nameAr: "وجبة برغر لحمة", 
    description: "Complete meal with beef burger, crispy golden fries, fresh coleslaw, and signature hot sauce", 
    descriptionAr: "وجبة كاملة مع برغر لحم وبطاطس ذهبية مقرمشة وكول سلو طازج وصوص حار مميز", 
    price: 2.50, 
    categoryIndex: 2,
    image: "/uploads/9.png"
  },
  { 
    name: "Escalope Burger Meal", 
    nameAr: "وجبة برغر سكالوب", 
    description: "Escalope burger meal with loaded fries, mixed appetizers, garlic dip, and hot sauce", 
    descriptionAr: "وجبة برغر سكالوب مع بطاطس محملة ومقبلات مشكلة وغموس ثوم وصوص حار", 
    price: 2.50, 
    categoryIndex: 2,
    image: "/uploads/10.png"
  },
  { 
    name: "Double Beef Burger Meal", 
    nameAr: "وجبة برغر لحمة دبل", 
    description: "Hearty meal featuring double beef burger with cheese, extra fries, salad, and spicy hot sauce", 
    descriptionAr: "وجبة دسمة تحتوي على برغر لحم مضاعف مع جبن وبطاطس إضافية وسلطة وصوص حار", 
    price: 3.25, 
    categoryIndex: 2,
    image: "/uploads/11.png"
  },
  { 
    name: "Double Escalope Meal", 
    nameAr: "وجبة سكالوب دبل", 
    description: "Double escalope burger meal with generous fries, complete appetizers, and signature sauces", 
    descriptionAr: "وجبة برغر سكالوب مضاعفة مع بطاطس كبيرة ومقبلات كاملة وصلصات مميزة", 
    price: 3.25, 
    categoryIndex: 2,
    image: "/uploads/12.png"
  },
  { 
    name: "Mixed Double Burger Meal", 
    nameAr: "وجبة برغر مكس دبل", 
    description: "Ultimate combo with beef and chicken patties, melted cheese, loaded fries, and hot sauce", 
    descriptionAr: "كومبو مثالي مع قرص لحم ودجاج وجبن ذائب وبطاطس محملة وصوص حار", 
    price: 3.25, 
    categoryIndex: 2,
    image: "/uploads/13.png"
  },

  // 4. Broasted Chicken (Category 3)
  { 
    name: "4 Pieces Broasted Meal", 
    nameAr: "4 قطع بروستد", 
    description: "Four pieces of crispy golden broasted chicken served with seasoned fries, coleslaw, garlic dip, and pickles", 
    descriptionAr: "أربع قطع من الدجاج البروستد الذهبي المقرمش تقدم مع بطاطس متبلة وكول سلو وغموس ثوم ومخللات", 
    price: 3.50, 
    categoryIndex: 3,
    image: "/uploads/14.png"
  },
  { 
    name: "8 Pieces Broasted Meal", 
    nameAr: "8 قطع بروستد", 
    description: "Eight pieces of perfectly seasoned broasted chicken with generous fries, mixed appetizers, and sauces", 
    descriptionAr: "ثماني قطع من الدجاج البروستد المتبل بشكل مثالي مع بطاطس كبيرة ومقبلات مشكلة وصلصات", 
    price: 6.50, 
    categoryIndex: 3,
    image: "/uploads/15.png"
  },
  { 
    name: "12 Pieces Broasted Meal", 
    nameAr: "12 قطعة بروستد", 
    description: "Twelve crispy broasted chicken pieces with loaded fries, complete appetizers, and variety of sauces", 
    descriptionAr: "اثنتا عشرة قطعة دجاج بروستد مقرمش مع بطاطس محملة ومقبلات كاملة ومجموعة متنوعة من الصلصات", 
    price: 10.00, 
    categoryIndex: 3,
    image: "/uploads/16.png"
  },
  { 
    name: "16 Pieces Broasted Meal", 
    nameAr: "16 قطعة بروستد", 
    description: "Sixteen pieces of golden broasted chicken with extra fries, full appetizer platter, and premium sauces", 
    descriptionAr: "ستة عشر قطعة دجاج بروستد ذهبي مع بطاطس إضافية وطبق مقبلات كامل وصلصات فاخرة", 
    price: 13.00, 
    categoryIndex: 3,
    image: "/uploads/17.png"
  },
  { 
    name: "20 Pieces Family Broasted", 
    nameAr: "20 قطعة بروستد عائلي", 
    description: "Family feast with twenty broasted pieces, family-size Pepsi, abundant fries, and complete appetizers", 
    descriptionAr: "وليمة عائلية مع عشرين قطعة بروستد وببسي عائلي وبطاطس وفيرة ومقبلات كاملة", 
    price: 16.50, 
    categoryIndex: 3,
    image: "/uploads/18.png"
  },
  { 
    name: "4 Pieces Plain Broasted", 
    nameAr: "4 قطع بروستد سادة", 
    description: "Four pieces of plain broasted chicken - perfect for adding to your meal or enjoying as is", 
    descriptionAr: "أربع قطع دجاج بروستد سادة - مثالية للإضافة إلى وجبتك أو الاستمتاع بها كما هي", 
    price: 2.50, 
    categoryIndex: 3,
    image: "/uploads/19.png"
  },
  { 
    name: "8 Pieces Plain Broasted", 
    nameAr: "8 قطع بروستد سادة", 
    description: "Eight pieces of plain crispy broasted chicken without sides - great for parties and gatherings", 
    descriptionAr: "ثماني قطع دجاج بروستد مقرمش سادة بدون إضافات - رائعة للحفلات والتجمعات", 
    price: 4.70, 
    categoryIndex: 3,
    image: "/uploads/20.png"
  },
  { 
    name: "Crispy Chicken Meal", 
    nameAr: "وجبة كرسبي", 
    description: "Extra crispy chicken pieces with signature seasoning, golden fries, coleslaw, and special sauce", 
    descriptionAr: "قطع دجاج مقرمشة للغاية بتتبيلة مميزة وبطاطس ذهبية وكول سلو وصلصة خاصة", 
    price: 3.00, 
    categoryIndex: 3,
    image: "/uploads/21.png"
  },
  { 
    name: "Whole Rotisserie Chicken", 
    nameAr: "دجاجة شواية كاملة", 
    description: "Whole rotisserie chicken perfectly roasted with herbs and spices - tender and juicy inside, crispy outside", 
    descriptionAr: "دجاجة شواية كاملة مشوية بشكل مثالي بالأعشاب والتوابل - طرية وشهية من الداخل، مقرمشة من الخارج", 
    price: 4.20, 
    categoryIndex: 3,
    image: "/uploads/22.png"
  },
  { 
    name: "Half Rotisserie Chicken", 
    nameAr: "نصف دجاجة شواية", 
    description: "Half rotisserie chicken with golden crispy skin and tender meat - perfectly portioned for one", 
    descriptionAr: "نصف دجاجة شواية بجلد ذهبي مقرمش ولحم طري - حصة مثالية لشخص واحد", 
    price: 2.25, 
    categoryIndex: 3,
    image: "/uploads/23.png"
  },

  // 5. Grilled Dishes (Category 4)
  { 
    name: "Whole Tikka Chicken", 
    nameAr: "دجاجة تكا كاملة", 
    description: "Whole chicken marinated in special tikka spices, grilled to perfection with smoky char and aromatic flavors", 
    descriptionAr: "دجاجة كاملة متبلة بتوابل التكا الخاصة، مشوية بشكل مثالي مع نكهة دخانية وعطرية", 
    price: 6.00, 
    categoryIndex: 4,
    image: "/uploads/24.png"
  },
  { 
    name: "Half Tikka Chicken", 
    nameAr: "نصف دجاجة تكا", 
    description: "Half tikka chicken with authentic spice blend, grilled over charcoal for that authentic smoky taste", 
    descriptionAr: "نصف دجاجة تكا بمزيج التوابل الأصلي، مشوية على الفحم لتلك النكهة الدخانية الأصيلة", 
    price: 3.50, 
    categoryIndex: 4,
    image: "/uploads/25.png"
  },
  { 
    name: "Mixed Grill Kilo", 
    nameAr: "كيلو مشاوي مشكل", 
    description: "Full kilo of assorted grilled meats including kebab, shish, and chicken - a complete grilled feast", 
    descriptionAr: "كيلو كامل من اللحوم المشوية المتنوعة بما في ذلك الكباب والشيش والدجاج - وليمة مشوية كاملة", 
    price: 14.00, 
    categoryIndex: 4,
    image: "/uploads/26.png"
  },
  { 
    name: "Half Kilo Mixed Grill", 
    nameAr: "نصف كيلو مشاوي مشكل", 
    description: "Half kilo selection of our finest grilled meats, perfectly seasoned and charcoal-grilled", 
    descriptionAr: "نصف كيلو مختارات من أفضل اللحوم المشوية لدينا، متبلة بشكل مثالي ومشوية على الفحم", 
    price: 7.00, 
    categoryIndex: 4,
    image: "/uploads/6.png"
  },
  { 
    name: "Shaqaf Kilo", 
    nameAr: "كيلو شقف", 
    description: "Full kilo of tender shaqaf (meat slices) marinated and grilled with special spices", 
    descriptionAr: "كيلو كامل من الشقف الطري (شرائح اللحم) المتبلة والمشوية بتوابل خاصة", 
    price: 14.00, 
    categoryIndex: 4,
    image: "/uploads/9.png"
  },
  { 
    name: "Half Kilo Shaqaf", 
    nameAr: "نصف كيلو شقف", 
    description: "Half kilo of flavorful shaqaf meat, grilled to perfection with aromatic herbs", 
    descriptionAr: "نصف كيلو من لحم الشقف اللذيذ، مشوي بشكل مثالي مع الأعشاب العطرية", 
    price: 7.00, 
    categoryIndex: 4,
    image: "/uploads/1.png"
  },
  { 
    name: "Kebab Kilo", 
    nameAr: "كيلو كباب", 
    description: "Full kilo of hand-rolled kebab made with premium minced meat and traditional spices", 
    descriptionAr: "كيلو كامل من الكباب المحضر يدوياً من لحم مفروم ممتاز وتوابل تقليدية", 
    price: 14.00, 
    categoryIndex: 4,
    image: "/uploads/2.png"
  },
  { 
    name: "Half Kilo Kebab", 
    nameAr: "نصف كيلو كباب", 
    description: "Half kilo of succulent kebab skewers, charcoal-grilled for authentic smoky flavor", 
    descriptionAr: "نصف كيلو من أسياخ الكباب الشهية، مشوية على الفحم للحصول على نكهة دخانية أصيلة", 
    price: 7.00, 
    categoryIndex: 4,
    image: "/uploads/3.png"
  },
  { 
    name: "Shish Kilo", 
    nameAr: "كيلو شيش", 
    description: "Full kilo of tender shish kebab cubes, marinated in special blend and perfectly grilled", 
    descriptionAr: "كيلو كامل من مكعبات الشيش الطرية، متبلة بمزيج خاص ومشوية بشكل مثالي", 
    price: 12.00, 
    categoryIndex: 4,
    image: "/uploads/4.png"
  },
  { 
    name: "Half Kilo Shish", 
    nameAr: "نصف كيلو شيش", 
    description: "Half kilo of marinated shish meat cubes, grilled over charcoal for maximum flavor", 
    descriptionAr: "نصف كيلو من مكعبات لحم الشيش المتبل، مشوية على الفحم للحصول على أقصى نكهة", 
    price: 6.00, 
    categoryIndex: 4,
    image: "/uploads/5.png"
  },
  { 
    name: "Chicken Wings Kilo", 
    nameAr: "كيلو جوانح", 
    description: "Full kilo of juicy chicken wings marinated and grilled, perfect for sharing", 
    descriptionAr: "كيلو كامل من أجنحة الدجاج الشهية المتبلة والمشوية، مثالية للمشاركة", 
    price: 5.00, 
    categoryIndex: 4,
    image: "/uploads/6.png"
  },
  { 
    name: "Half Kilo Chicken Wings", 
    nameAr: "نصف كيلو جوانح", 
    description: "Half kilo of grilled chicken wings with crispy skin and tender meat", 
    descriptionAr: "نصف كيلو من أجنحة الدجاج المشوية بجلد مقرمش ولحم طري", 
    price: 3.00, 
    categoryIndex: 4,
    image: "/uploads/7.png"
  },

  // 6. Rice Platters (Category 5)
  { 
    name: "Kabsa Rice", 
    nameAr: "كبسة", 
    description: "Traditional Saudi kabsa rice with aromatic spices, tender meat, and mixed nuts - a Middle Eastern classic", 
    descriptionAr: "أرز الكبسة السعودية التقليدية مع التوابل العطرية واللحم الطري والمكسرات المشكلة - كلاسيكية شرق أوسطية", 
    price: 8.00, 
    categoryIndex: 5,
    image: "/uploads/8.png"
  },
  { 
    name: "Mandi Rice", 
    nameAr: "مندي", 
    description: "Authentic Yemeni mandi with fragrant basmati rice and perfectly cooked meat with special spice blend", 
    descriptionAr: "مندي يمني أصيل مع أرز بسمتي عطري ولحم مطبوخ بشكل مثالي مع مزيج التوابل الخاص", 
    price: 8.00, 
    categoryIndex: 5,
    image: "/uploads/9.png"
  },
  { 
    name: "Mexican Rice", 
    nameAr: "مكسيكي", 
    description: "Spicy Mexican-style rice with colorful vegetables, seasoned chicken, and zesty flavors", 
    descriptionAr: "أرز مكسيكي حار مع خضار ملونة ودجاج متبل ونكهات منعشة", 
    price: 8.00, 
    categoryIndex: 5,
    image: "/uploads/10.png"
  },
  { 
    name: "Zurbian Rice", 
    nameAr: "زربيان", 
    description: "Yemeni zurbian rice with aromatic spices, tender meat, and rich flavorful broth", 
    descriptionAr: "أرز زربيان يمني مع التوابل العطرية واللحم الطري والمرق الغني بالنكهة", 
    price: 8.00, 
    categoryIndex: 5,
    image: "/uploads/11.png"
  },
  { 
    name: "1 Kilo Rice with Whole Rotisserie", 
    nameAr: "كيلو رز مع دجاجة شواية", 
    description: "One kilo of seasoned rice served with a whole rotisserie chicken - perfect family meal", 
    descriptionAr: "كيلو من الأرز المتبل يقدم مع دجاجة شواية كاملة - وجبة عائلية مثالية", 
    price: 8.00, 
    categoryIndex: 5,
    image: "/uploads/12.png"
  },
  { 
    name: "2 Kilo Rice with 1.5 Rotisserie", 
    nameAr: "2 كيلو رز مع دجاجة ونصف شواية", 
    description: "Two kilos of rice with one and half rotisserie chickens - ideal for larger gatherings", 
    descriptionAr: "كيلوان من الأرز مع دجاجة ونصف شواية - مثالية للتجمعات الأكبر", 
    price: 12.00, 
    categoryIndex: 5,
    image: "/uploads/13.png"
  },
  { 
    name: "2 Kilo Rice with 2 Rotisserie", 
    nameAr: "2 كيلو رز مع دجاجتين شواية", 
    description: "Two kilos of aromatic rice with two whole rotisserie chickens - feast for the whole family", 
    descriptionAr: "كيلوان من الأرز العطري مع دجاجتين شواية كاملتين - وليمة لجميع أفراد العائلة", 
    price: 15.00, 
    categoryIndex: 5,
    image: "/uploads/14.png"
  },
  { 
    name: "3 Kilo Rice with 3 Rotisserie", 
    nameAr: "3 كيلو رز مع 3 دجاجات شواية", 
    description: "Three kilos of rice with three rotisserie chickens - ultimate family feast platter", 
    descriptionAr: "ثلاثة كيلوات من الأرز مع ثلاث دجاجات شواية - طبق وليمة عائلية نهائي", 
    price: 20.00, 
    categoryIndex: 5,
    image: "/uploads/15.png"
  },
  { 
    name: "Rice with Whole Charcoal Tikka", 
    nameAr: "رز مع دجاجة فحم تكا", 
    description: "Fragrant rice served with whole charcoal-grilled tikka chicken infused with smoky flavor", 
    descriptionAr: "أرز عطري يقدم مع دجاجة تكا مشوية على الفحم بالكامل منقوعة بالنكهة الدخانية", 
    price: 8.00, 
    categoryIndex: 5,
    image: "/uploads/16.png"
  },
  { 
    name: "Rice with 1.5 Charcoal Chicken", 
    nameAr: "رز مع دجاجة ونصف فحم", 
    description: "Generous rice platter with one and half charcoal-grilled chickens for authentic taste", 
    descriptionAr: "طبق أرز كبير مع دجاجة ونصف مشوية على الفحم للحصول على طعم أصيل", 
    price: 13.00, 
    categoryIndex: 5,
    image: "/uploads/17.png"
  },
  { 
    name: "Rice with 2 Charcoal Chickens", 
    nameAr: "رز مع دجاجتين فحم", 
    description: "Premium rice dish with two whole charcoal-grilled chickens for maximum smoky flavor", 
    descriptionAr: "طبق أرز فاخر مع دجاجتين كاملتين مشويتين على الفحم للحصول على أقصى نكهة دخانية", 
    price: 16.00, 
    categoryIndex: 5,
    image: "/uploads/18.png"
  },
  { 
    name: "Rice with 3 Rotisserie Chickens", 
    nameAr: "رز مع 3 دجاجات شواية", 
    description: "Large rice platter with three rotisserie chickens - perfect for big family celebrations", 
    descriptionAr: "طبق أرز كبير مع ثلاث دجاجات شواية - مثالي للاحتفالات العائلية الكبيرة", 
    price: 21.00, 
    categoryIndex: 5,
    image: "/uploads/19.png"
  },
  { 
    name: "Rice with Half Rotisserie", 
    nameAr: "وجبة رز مع نصف شواية", 
    description: "Individual portion of seasoned rice with half rotisserie chicken - perfect single meal", 
    descriptionAr: "حصة فردية من الأرز المتبل مع نصف دجاجة شواية - وجبة فردية مثالية", 
    price: 3.50, 
    categoryIndex: 5,
    image: "/uploads/20.png"
  },
  { 
    name: "Large Rice Plate", 
    nameAr: "صحن رز كبير", 
    description: "Large serving of flavorful rice as a side dish or base for your favorite protein", 
    descriptionAr: "حصة كبيرة من الأرز اللذيذ كطبق جانبي أو قاعدة لبروتينك المفضل", 
    price: 2.00, 
    categoryIndex: 5,
    image: "/uploads/21.png"
  },
  { 
    name: "Regular Rice Plate", 
    nameAr: "صحن رز", 
    description: "Regular portion of aromatic rice, perfect accompaniment to any main dish", 
    descriptionAr: "حصة عادية من الأرز العطري، مرافق مثالي لأي طبق رئيسي", 
    price: 1.00, 
    categoryIndex: 5,
    image: "/uploads/22.png"
  },
  { 
    name: "1 Kilo Mansaf", 
    nameAr: "كيلو منسف", 
    description: "Traditional Jordanian mansaf with tender meat, yogurt sauce, and rice - authentic recipe", 
    descriptionAr: "منسف أردني تقليدي مع لحم طري وصلصة اللبن والأرز - وصفة أصيلة", 
    price: 14.00, 
    categoryIndex: 5,
    image: "/uploads/23.png"
  },
  { 
    name: "2 Kilo Mansaf", 
    nameAr: "2 كيلو منسف", 
    description: "Two kilos of traditional mansaf with generous meat portions and rich yogurt sauce", 
    descriptionAr: "كيلوان من المنسف التقليدي مع حصص لحم كبيرة وصلصة لبن غنية", 
    price: 9.00, 
    categoryIndex: 5,
    image: "/uploads/24.png"
  },
  { 
    name: "3 Kilo Mansaf", 
    nameAr: "3 كيلو منسف", 
    description: "Three kilos of authentic mansaf - perfect for large gatherings and special occasions", 
    descriptionAr: "ثلاثة كيلوات من المنسف الأصيل - مثالي للتجمعات الكبيرة والمناسبات الخاصة", 
    price: 38.00, 
    categoryIndex: 5,
    image: "/uploads/25.png"
  },
  { 
    name: "Mansaf with Meat Meal", 
    nameAr: "وجبة منسف مع لحمة", 
    description: "Individual mansaf meal with tender meat pieces, rice, and authentic yogurt sauce", 
    descriptionAr: "وجبة منسف فردية مع قطع لحم طرية وأرز وصلصة لبن أصيلة", 
    price: 4.50, 
    categoryIndex: 5,
    image: "/uploads/26.png"
  },

  // 7. Sandwiches (Category 6)
  { 
    name: "Zinger Wrap with Cheese & Turkey", 
    nameAr: "ساندويش زنجر شراك", 
    description: "Crispy 200g zinger chicken wrapped in fresh saj bread with melted cheese, turkey slices, and special sauce", 
    descriptionAr: "دجاج زنجر مقرمش 200 غرام ملفوف في خبز صاج طازج مع جبن ذائب وشرائح تيركي وصلصة خاصة", 
    price: 1.75, 
    categoryIndex: 6,
    image: "/uploads/6.png"
  },
  { 
    name: "Zinger French Bread with Cheese", 
    nameAr: "ساندويش زنجر فرنسي", 
    description: "Crispy zinger in French baguette with melted cheese, turkey, lettuce, and creamy sauce", 
    descriptionAr: "زنجر مقرمش في خبز فرنسي مع جبن ذائب وتيركي وخس وصلصة كريمية", 
    price: 1.75, 
    categoryIndex: 6,
    image: "/uploads/9.png"
  },
  { 
    name: "Fajita Wrap with Cheese & Mushroom", 
    nameAr: "ساندويش فاهيتا شراك", 
    description: "Tender fajita chicken in saj wrap with mozzarella cheese, sautéed mushrooms, and vegetables", 
    descriptionAr: "دجاج فاهيتا طري في لفة صاج مع جبن موزاريلا وفطر مقلي وخضار", 
    price: 1.75, 
    categoryIndex: 6,
    image: "/uploads/1.png"
  },
  { 
    name: "Fajita French Bread", 
    nameAr: "ساندويش فاهيتا فرنسي", 
    description: "Marinated fajita chicken in French bread with mozzarella, mushrooms, and peppers", 
    descriptionAr: "دجاج فاهيتا متبل في خبز فرنسي مع موزاريلا وفطر وفلفل", 
    price: 1.75, 
    categoryIndex: 6,
    image: "/uploads/2.png"
  },
  { 
    name: "Mexican Chicken Sandwich", 
    nameAr: "ساندويش مكسيكي", 
    description: "Spicy Mexican chicken with cheese, mozzarella, jalapeños, and zesty sauce", 
    descriptionAr: "دجاج مكسيكي حار مع جبن وموزاريلا وهالابينو وصلصة منعشة", 
    price: 1.75, 
    categoryIndex: 6,
    image: "/uploads/3.png"
  },
  { 
    name: "Beef Steak Sandwich", 
    nameAr: "ساندويش ستيك لحمة", 
    description: "Grilled beef steak sandwich with melted cheese, sautéed mushrooms, and special sauce", 
    descriptionAr: "ساندويش ستيك لحم مشوي مع جبن ذائب وفطر مقلي وصلصة خاصة", 
    price: 1.75, 
    categoryIndex: 6,
    image: "/uploads/4.png"
  },
  { 
    name: "Creamy Chicken Sandwich", 
    nameAr: "ساندويش دجاج بكريمة", 
    description: "Chicken in rich cream sauce with cheese, mushrooms, and fresh vegetables", 
    descriptionAr: "دجاج بصلصة كريمة غنية مع جبن وفطر وخضار طازجة", 
    price: 1.85, 
    categoryIndex: 6,
    image: "/uploads/5.png"
  },
  { 
    name: "Chicken Steak Sandwich", 
    nameAr: "ساندويش ستيك دجاج", 
    description: "Grilled chicken steak with melted cheese, mushrooms, and signature sauce", 
    descriptionAr: "ستيك دجاج مشوي مع جبن ذائب وفطر وصلصة مميزة", 
    price: 1.75, 
    categoryIndex: 6,
    image: "/uploads/6.png"
  },
  { 
    name: "Creamy Zinger Sandwich", 
    nameAr: "ساندويش زنجر بالكريمة", 
    description: "Crispy zinger strips in creamy sauce with cheese, turkey, and fresh ingredients", 
    descriptionAr: "شرائح زنجر مقرمشة بصلصة كريمية مع جبن وتيركي ومكونات طازجة", 
    price: 1.85, 
    categoryIndex: 6,
    image: "/uploads/7.png"
  },
  { 
    name: "Potato Wrap", 
    nameAr: "ساندويش بطاطا شراك", 
    description: "Crispy seasoned potato fries wrapped in fresh saj bread with vegetables and sauce", 
    descriptionAr: "بطاطس مقلية متبلة مقرمشة ملفوفة في خبز صاج طازج مع خضار وصلصة", 
    price: 0.75, 
    categoryIndex: 6,
    image: "/uploads/8.png"
  },
  { 
    name: "Potato French Bread", 
    nameAr: "ساندويش بطاطا فرنسي", 
    description: "Golden fries in French baguette with cheese, vegetables, and special dressing", 
    descriptionAr: "بطاطس ذهبية في خبز فرنسي مع جبن وخضار وصلصة خاصة", 
    price: 0.75, 
    categoryIndex: 6,
    image: "/uploads/9.png"
  },
  { 
    name: "Italian Style Sandwich", 
    nameAr: "ساندويش إيطالي", 
    description: "Italian-seasoned chicken with cheese, mushrooms, herbs, and Italian dressing", 
    descriptionAr: "دجاج متبل إيطالي مع جبن وفطر وأعشاب وصلصة إيطالية", 
    price: 1.75, 
    categoryIndex: 6,
    image: "/uploads/10.png"
  },
  { 
    name: "Philadelphia Sandwich", 
    nameAr: "ساندويش فيلادلفيا", 
    description: "Philadelphia-style chicken with cream cheese, turkey, and special sauce", 
    descriptionAr: "دجاج فيلادلفيا مع جبن كريمي وتيركي وصلصة خاصة", 
    price: 1.75, 
    categoryIndex: 6,
    image: "/uploads/11.png"
  },
  { 
    name: "Tender Chicken Sandwich", 
    nameAr: "ساندويش تندر", 
    description: "Crispy chicken tenders with cheese, turkey slices, and signature sauce", 
    descriptionAr: "شرائح دجاج تندر مقرمشة مع جبن وشرائح تيركي وصلصة مميزة", 
    price: 1.75, 
    categoryIndex: 6,
    image: "/uploads/12.png"
  },
  { 
    name: "Creamy Tender Sandwich", 
    nameAr: "ساندويش تندر بالكريمة", 
    description: "Chicken tenders in cream sauce with cheese, turkey, and fresh vegetables", 
    descriptionAr: "شرائح تندر بصلصة كريمية مع جبن وتيركي وخضار طازجة", 
    price: 1.85, 
    categoryIndex: 6,
    image: "/uploads/13.png"
  },
  { 
    name: "Alfredo Sandwich", 
    nameAr: "ساندويش الفريدو", 
    description: "Chicken in rich Alfredo sauce with parmesan cheese and Italian herbs", 
    descriptionAr: "دجاج بصلصة ألفريدو الغنية مع جبن بارميزان وأعشاب إيطالية", 
    price: 1.85, 
    categoryIndex: 6,
    image: "/uploads/14.png"
  },
  { 
    name: "Challenger Sandwich", 
    nameAr: "ساندويش شالنجر", 
    description: "Ultimate challenge sandwich loaded with chicken, cheese, vegetables, and multiple sauces", 
    descriptionAr: "ساندويش التحدي النهائي محمل بالدجاج والجبن والخضار وصلصات متعددة", 
    price: 4.50, 
    categoryIndex: 6,
    image: "/uploads/15.png"
  },
  { 
    name: "Toast Shawarma Meal", 
    nameAr: "وجبة شاورما توست", 
    description: "Shawarma in toasted bread with cheese, vegetables, fries, and hot sauce", 
    descriptionAr: "شاورما في خبز محمص مع جبن وخضار وبطاطس وصوص حار", 
    price: 2.50, 
    categoryIndex: 6,
    image: "/uploads/16.png"
  },
  { 
    name: "Super Toast Meal", 
    nameAr: "وجبة توست سوبر", 
    description: "Extra loaded toast shawarma with double meat, cheese, and complete sides", 
    descriptionAr: "توست شاورما محمل إضافي مع لحم مضاعف وجبن وجوانب كاملة", 
    price: 2.90, 
    categoryIndex: 6,
    image: "/uploads/17.png"
  },
  { 
    name: "Double Toast Meal", 
    nameAr: "وجبة توست دبل", 
    description: "Double portion toast shawarma with abundant fries, appetizers, and hot sauce", 
    descriptionAr: "توست شاورما حصة مضاعفة مع بطاطس وفيرة ومقبلات وصوص حار", 
    price: 3.50, 
    categoryIndex: 6,
    image: "/uploads/18.png"
  },
  { 
    name: "Prize Regular Meal", 
    nameAr: "وجبة برايز عادي", 
    description: "Special prize meal with shawarma, fries, appetizers, and beverage", 
    descriptionAr: "وجبة برايز خاصة مع شاورما وبطاطس ومقبلات ومشروب", 
    price: 2.50, 
    categoryIndex: 6,
    image: "/uploads/19.png"
  },
  { 
    name: "Prize Super Meal", 
    nameAr: "وجبة برايز سوبر", 
    description: "Upgraded prize meal with extra meat, loaded fries, and complete appetizers", 
    descriptionAr: "وجبة برايز محسنة مع لحم إضافي وبطاطس محملة ومقبلات كاملة", 
    price: 3.00, 
    categoryIndex: 6,
    image: "/uploads/20.png"
  },
  { 
    name: "Prize Double Meal", 
    nameAr: "وجبة برايز دبل", 
    description: "Double prize meal with generous portions of everything plus beverage", 
    descriptionAr: "وجبة برايز مضاعفة مع حصص كبيرة من كل شيء بالإضافة إلى المشروب", 
    price: 3.50, 
    categoryIndex: 6,
    image: "/uploads/21.png"
  },

  // 8. Arayes (Category 7)
  { 
    name: "Arayes Platter", 
    nameAr: "عرايس", 
    description: "Traditional grilled stuffed bread with seasoned meat mixture - authentic Middle Eastern favorite", 
    descriptionAr: "خبز محشو مشوي تقليدي بخليط اللحم المتبل - المفضل الشرق أوسطي الأصيل", 
    price: 0.75, 
    categoryIndex: 7,
    image: "/uploads/22.png"
  },
  { 
    name: "Shaqaf Sandwich", 
    nameAr: "ساندويش شقف", 
    description: "Grilled shaqaf meat slices in fresh bread with vegetables and tahini sauce", 
    descriptionAr: "شرائح لحم شقف مشوية في خبز طازج مع خضار وصلصة طحينة", 
    price: 1.75, 
    categoryIndex: 7,
    image: "/uploads/23.png"
  },
  { 
    name: "Kebab Sandwich", 
    nameAr: "ساندويش كباب", 
    description: "Freshly grilled kebab skewers wrapped with vegetables, pickles, and special sauce", 
    descriptionAr: "أسياخ كباب مشوية طازجة ملفوفة مع خضار ومخللات وصلصة خاصة", 
    price: 1.75, 
    categoryIndex: 7,
    image: "/uploads/24.png"
  },
  { 
    name: "Shish Sandwich", 
    nameAr: "ساندويش شيش", 
    description: "Tender shish meat cubes grilled to perfection with fresh vegetables and tahini", 
    descriptionAr: "مكعبات لحم شيش طرية مشوية بشكل مثالي مع خضار طازجة وطحينة", 
    price: 1.50, 
    categoryIndex: 7,
    image: "/uploads/25.png"
  },

  // 9. Sides & Appetizers (Category 8)
  { 
    name: "Spiced Fries", 
    nameAr: "بطاطا مبهرة", 
    description: "Crispy golden fries seasoned with our special spice blend", 
    descriptionAr: "بطاطس ذهبية مقرمشة متبلة بمزيج التوابل الخاص", 
    price: 0.50, 
    categoryIndex: 8,
    image: "/uploads/26.png"
  },
  { 
    name: "Matrix Sauce", 
    nameAr: "ماتركس", 
    description: "Our signature Matrix sauce - perfect complement to any meal", 
    descriptionAr: "صلصة ماتركس المميزة - مكمل مثالي لأي وجبة", 
    price: 0.30, 
    categoryIndex: 8,
    image: "/uploads/6.png"
  },
  { 
    name: "Mixed Pickles", 
    nameAr: "مخلل مشكل", 
    description: "Assorted pickled vegetables for a tangy side", 
    descriptionAr: "خضار مخللة متنوعة لجانب لاذع", 
    price: 0.50, 
    categoryIndex: 8,
    image: "/uploads/9.png"
  },
  { 
    name: "Yogurt Ayran", 
    nameAr: "لبن عيران", 
    description: "Refreshing traditional yogurt drink", 
    descriptionAr: "مشروب لبن تقليدي منعش", 
    price: 0.50, 
    categoryIndex: 8,
    image: "/uploads/1.png"
  },
  { 
    name: "Garlic Dip", 
    nameAr: "صحن ثوم", 
    description: "Creamy garlic sauce perfect for dipping", 
    descriptionAr: "صلصة ثوم كريمية مثالية للغمس", 
    price: 0.50, 
    categoryIndex: 8,
    image: "/uploads/2.png"
  },
  { 
    name: "Extra Cheese Addition", 
    nameAr: "إضافة تشير على الشاورما", 
    description: "Add extra melted cheese to your shawarma", 
    descriptionAr: "أضف جبن ذائب إضافي لشاورما الخاصة بك", 
    price: 0.15, 
    categoryIndex: 8,
    image: "/uploads/3.png"
  },
  { 
    name: "Large Shanina", 
    nameAr: "شنينة كبير", 
    description: "Large portion of refreshing shanina drink", 
    descriptionAr: "حصة كبيرة من مشروب الشنينة المنعش", 
    price: 1.00, 
    categoryIndex: 8,
    image: "/uploads/4.png"
  },
  { 
    name: "Small Americana Box", 
    nameAr: "علبة أمريكانا صغير", 
    description: "Small box of appetizers and sides", 
    descriptionAr: "علبة صغيرة من المقبلات والجوانب", 
    price: 0.35, 
    categoryIndex: 8,
    image: "/uploads/5.png"
  },
  { 
    name: "Large Matrix", 
    nameAr: "ماتركس كبير", 
    description: "Large serving of our signature Matrix sauce", 
    descriptionAr: "حصة كبيرة من صلصة ماتركس المميزة", 
    price: 0.60, 
    categoryIndex: 8,
    image: "/uploads/6.png"
  },
  { 
    name: "Hummus", 
    nameAr: "حمص", 
    description: "Creamy chickpea dip with tahini and olive oil", 
    descriptionAr: "غموس حمص كريمي مع طحينة وزيت زيتون", 
    price: 1.00, 
    categoryIndex: 8,
    image: "/uploads/7.png"
  },
  { 
    name: "Matrix Liter", 
    nameAr: "ماتركس لتر", 
    description: "One liter of Matrix sauce for sharing", 
    descriptionAr: "لتر واحد من صلصة ماتركس للمشاركة", 
    price: 0.75, 
    categoryIndex: 8,
    image: "/uploads/8.png"
  },
  { 
    name: "Mutabal", 
    nameAr: "متبل", 
    description: "Smoky grilled eggplant dip with tahini", 
    descriptionAr: "غموس باذنجان مشوي دخاني مع طحينة", 
    price: 1.00, 
    categoryIndex: 8,
    image: "/uploads/9.png"
  },
  { 
    name: "Matrix 1.5 Liter", 
    nameAr: "ماتركس لتر ونص", 
    description: "Family-size 1.5 liter Matrix sauce", 
    descriptionAr: "صلصة ماتركس عائلية 1.5 لتر", 
    price: 1.00, 
    categoryIndex: 8,
    image: "/uploads/10.png"
  },

  // 10. Beverages (Category 9)
  { 
    name: "Coca Cola", 
    nameAr: "كوكا كولا", 
    description: "Classic refreshing Coca Cola", 
    descriptionAr: "كوكا كولا منعشة كلاسيكية", 
    price: 0.50, 
    categoryIndex: 9,
    image: "/uploads/11.png"
  },
  { 
    name: "Pepsi", 
    nameAr: "بيبسي", 
    description: "Refreshing Pepsi cola", 
    descriptionAr: "كولا بيبسي منعشة", 
    price: 0.50, 
    categoryIndex: 9,
    image: "/uploads/12.png"
  },
  { 
    name: "Sprite", 
    nameAr: "سبرايت", 
    description: "Crisp lemon-lime soda", 
    descriptionAr: "صودا ليمون مقرمشة", 
    price: 0.50, 
    categoryIndex: 9,
    image: "/uploads/13.png"
  },
  { 
    name: "Fanta Orange", 
    nameAr: "فانتا برتقال", 
    description: "Sweet orange flavored soda", 
    descriptionAr: "صودا بنكهة البرتقال الحلوة", 
    price: 0.50, 
    categoryIndex: 9,
    image: "/uploads/14.png"
  },
  { 
    name: "Bottled Water", 
    nameAr: "ماء", 
    description: "Pure bottled drinking water", 
    descriptionAr: "مياه شرب معبأة نقية", 
    price: 0.30, 
    categoryIndex: 9,
    image: "/uploads/15.png"
  },
  { 
    name: "Fresh Orange Juice", 
    nameAr: "عصير برتقال طازج", 
    description: "Freshly squeezed orange juice", 
    descriptionAr: "عصير برتقال طازج معصور", 
    price: 1.50, 
    categoryIndex: 9,
    image: "/uploads/16.png"
  },
  { 
    name: "Fresh Lemonade", 
    nameAr: "ليمونادة طازجة", 
    description: "Homemade fresh lemonade", 
    descriptionAr: "ليمونادة طازجة منزلية", 
    price: 1.00, 
    categoryIndex: 9,
    image: "/uploads/17.png"
  },

  // 11. Family Meals (Category 10)
  { 
    name: "Family Shawarma Meal", 
    nameAr: "وجبة شاورما عائلية", 
    description: "Family-size shawarma meal with 1 liter Matrix, generous portions for the whole family", 
    descriptionAr: "وجبة شاورما عائلية مع لتر ماتركس، حصص كبيرة لجميع أفراد العائلة", 
    price: 11.00, 
    categoryIndex: 10,
    image: "/uploads/18.png"
  },
  { 
    name: "Jumbo Family Shawarma", 
    nameAr: "وجبة شاورما عائلية جامبو", 
    description: "Extra large family meal with 2 liters Matrix, perfect for big gatherings", 
    descriptionAr: "وجبة عائلية كبيرة جداً مع 2 لتر ماتركس، مثالية للتجمعات الكبيرة", 
    price: 17.00, 
    categoryIndex: 10,
    image: "/uploads/19.png"
  },
  { 
    name: "Americana Family Meal", 
    nameAr: "وجبة عائلية أمريكانا", 
    description: "American-style family shawarma with 1 liter Matrix and complete sides", 
    descriptionAr: "شاورما عائلية بالطريقة الأمريكية مع لتر ماتركس وجوانب كاملة", 
    price: 11.50, 
    categoryIndex: 10,
    image: "/uploads/20.png"
  },
  { 
    name: "Jumbo Americana Family", 
    nameAr: "وجبة عائلية جامبو أمريكانا", 
    description: "Extra large Americana family meal with 2 liters Matrix and abundant portions", 
    descriptionAr: "وجبة أمريكانا عائلية كبيرة جداً مع 2 لتر ماتركس وحصص وفيرة", 
    price: 18.00, 
    categoryIndex: 10,
    image: "/uploads/21.png"
  },
  { 
    name: "Savings Family Meal", 
    nameAr: "وجبة التوفير", 
    description: "Value family meal with appetizers - great taste, great price", 
    descriptionAr: "وجبة عائلية مقتصدة مع مقبلات - طعم رائع، سعر رائع", 
    price: 7.50, 
    categoryIndex: 10,
    image: "/uploads/22.png"
  },
  { 
    name: "Half Kilo with Sides", 
    nameAr: "نصف كيلو شاورما مع مقبلات", 
    description: "Half kilo shawarma with complete appetizers and fries", 
    descriptionAr: "نصف كيلو شاورما مع مقبلات كاملة وبطاطس", 
    price: 6.00, 
    categoryIndex: 10,
    image: "/uploads/23.png"
  },
  { 
    name: "Full Kilo with Sides", 
    nameAr: "كيلو شاورما مع مقبلات", 
    description: "Full kilo shawarma with appetizers and fries - perfect for parties", 
    descriptionAr: "كيلو كامل شاورما مع مقبلات وبطاطس - مثالي للحفلات", 
    price: 12.00, 
    categoryIndex: 10,
    image: "/uploads/24.png"
  },

  // 12. Special Combos (Category 11)
  { 
    name: "Potato Crispy Chicken Box", 
    nameAr: "بوكس بطاطا دجاج كرسبي", 
    description: "Special combo box with crispy chicken and seasoned fries", 
    descriptionAr: "علبة كومبو خاصة مع دجاج مقرمش وبطاطس متبلة", 
    price: 2.75, 
    categoryIndex: 11,
    image: "/uploads/25.png"
  },
  { 
    name: "Potato Zinger Box", 
    nameAr: "بوكس بطاطا مع زنجر", 
    description: "Combo box with spicy or mild zinger and golden fries", 
    descriptionAr: "علبة كومبو مع زنجر حار أو عادي وبطاطس ذهبية", 
    price: 2.75, 
    categoryIndex: 11,
    image: "/uploads/26.png"
  },
  { 
    name: "Shawarma Meal No Fries", 
    nameAr: "وجبة شاورما عادي بدون بطاطا", 
    description: "Regular shawarma meal with appetizers, no fries included", 
    descriptionAr: "وجبة شاورما عادية مع مقبلات، بدون بطاطس", 
    price: 1.40, 
    categoryIndex: 11,
    image: "/uploads/6.png"
  },
  { 
    name: "Super Shawarma No Fries", 
    nameAr: "وجبة شاورما سوبر بدون بطاطا", 
    description: "Super shawarma meal with extra meat and appetizers, no fries", 
    descriptionAr: "وجبة شاورما سوبر مع لحم إضافي ومقبلات، بدون بطاطس", 
    price: 2.20, 
    categoryIndex: 11,
    image: "/uploads/9.png"
  },
];