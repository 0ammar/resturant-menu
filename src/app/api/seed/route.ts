import { NextResponse } from 'next/server';
import { store } from '@/lib/store';
import { seedCategories, seedProducts } from '@/lib/seedData';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    
    // حماية بكلمة سر بسيطة
    if (password !== 'seed123') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // حذف البيانات الموجودة أولاً (اختياري)
    const existingCategories = await store.getCategories();
    const existingProducts = await store.getProducts();
    
    console.log(`Found ${existingCategories.length} categories and ${existingProducts.length} products`);

    // إضافة Categories
    const createdCategories = [];
    for (const cat of seedCategories) {
      const created = await store.createCategory(cat);
      createdCategories.push(created);
      console.log(`Created category: ${created.name}`);
    }

    // إضافة Products
    let createdProducts = 0;
    for (const product of seedProducts) {
      const categoryId = createdCategories[product.categoryIndex].id;
      
      await store.createProduct({
        name: product.name,
        nameAr: product.nameAr,
        description: product.description,
        descriptionAr: product.descriptionAr,
        price: product.price,
        image: product.image,
        categoryId,
      });
      
      createdProducts++;
    }

    console.log(`Seeding completed: ${createdCategories.length} categories, ${createdProducts} products`);

    return NextResponse.json({
      success: true,
      message: `Added ${createdCategories.length} categories and ${createdProducts} products`,
      categories: createdCategories.length,
      products: createdProducts,
    });

  } catch (error: any) {
    console.error('Seed error:', error);
    return NextResponse.json(
      { error: 'Seeding failed', details: error.message },
      { status: 500 }
    );
  }
}