const mongoose = require('mongoose');
const models = require("./src/models/schema");
 // Adjust the path to your models file

// Connect to MongoDB
mongoose.connect('mongodb+srv://uthra:MyfirstDB@cluster0.deteayb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Database connected!'))
  .catch(err => console.error('Database connection error:', err));

// Sample data for each model
const sampleUsers = [
    { firstname: 'John', lastname: 'Doe', username: 'john_doe', email: 'john@example.com', password: 'password123' },
    { firstname: 'Jane', lastname: 'Smith', username: 'jane_smith', email: 'jane@example.com', password: 'password123' },
    // Add 8 more sample users...
];

const sampleCategories = [
    { category: 'Fruits & Vegetables', description: 'Fresh fruits and vegetables' },
    { category: 'Dairy & Eggs', description: 'Milk, cheese, yogurt, and eggs' },
    { category: 'Bakery', description: 'Freshly baked bread, cakes, and pastries' },
    { category: 'Beverages', description: 'Soft drinks, juices, and water' },
    { category: 'Snacks', description: 'Chips, cookies, and other snack items' }
];

const sampleProducts = [
    // Fruits & Vegetables
    { productname: 'Apple', description: 'Fresh red apples', price: 2.5, image: 'https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Fruits & Vegetables', countInStock: 100, rating: 4.5 },
    { productname: 'Banana', description: 'Ripe yellow bananas', price: 1.2, image: 'https://images.pexels.com/photos/47305/bananas-banana-shrub-fruits-yellow-47305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Fruits & Vegetables', countInStock: 150, rating: 4.6 },
    { productname: 'Carrot', description: 'Organic carrots', price: 1.5, image: 'https://images.pexels.com/photos/73640/pexels-photo-73640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Fruits & Vegetables', countInStock: 80, rating: 4.3 },
    { productname: 'Broccoli', description: 'Fresh green broccoli', price: 2.8, image: 'https://images.pexels.com/photos/3872433/pexels-photo-3872433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Fruits & Vegetables', countInStock: 60, rating: 4.4 },
    { productname: 'Spinach', description: 'Leafy spinach', price: 1.7, image: 'https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Fruits & Vegetables', countInStock: 90, rating: 4.2 },

    // Dairy & Eggs
    { productname: 'Whole Milk', description: '1 gallon of whole milk', price: 3.5, image: 'https://images.pexels.com/photos/5946717/pexels-photo-5946717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Dairy & Eggs', countInStock: 50, rating: 4.7 },
    { productname: 'Cheddar Cheese', description: 'Aged cheddar cheese block', price: 4.0, image: 'https://images.pexels.com/photos/6004240/pexels-photo-6004240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Dairy & Eggs', countInStock: 40, rating: 4.8 },
    { productname: 'Greek Yogurt', description: 'Plain Greek yogurt', price: 2.0, image: 'https://images.pexels.com/photos/5946069/pexels-photo-5946069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Dairy & Eggs', countInStock: 70, rating: 4.5 },
    { productname: 'Butter', description: 'Salted butter stick', price: 1.8, image: 'https://images.unsplash.com/photo-1603596311044-f19158b61f28?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Dairy & Eggs', countInStock: 60, rating: 4.6 },
    { productname: 'Eggs', description: 'One dozen large eggs', price: 3.0, image: 'https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Dairy & Eggs', countInStock: 100, rating: 4.9 },

    // Bakery
    { productname: 'Whole Wheat Bread', description: 'Freshly baked whole wheat bread', price: 2.5, image: 'https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Bakery', countInStock: 30, rating: 4.5 },
    { productname: 'Croissant', description: 'Buttery and flaky croissant', price: 1.5, image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Bakery', countInStock: 40, rating: 4.7 },
    { productname: 'Blueberry Muffin', description: 'Muffin with fresh blueberries', price: 2.0, image: 'https://images.pexels.com/photos/556829/pexels-photo-556829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Bakery', countInStock: 25, rating: 4.6 },
    { productname: 'Bagel', description: 'Plain bagel', price: 1.2, image: 'https://images.pexels.com/photos/3957500/pexels-photo-3957500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Bakery', countInStock: 50, rating: 4.4 },
    { productname: 'Chocolate Cake', description: 'Rich and moist chocolate cake', price: 3.5, image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Bakery', countInStock: 20, rating: 4.8 },

    // Beverages
    { productname: 'Orange Juice', description: 'Freshly squeezed orange juice', price: 2.5, image: 'https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-refreshing-citrus-158053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Beverages', countInStock: 70, rating: 4.6 },
    { productname: 'Green Tea', description: 'Box of green tea bags', price: 4.0, image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Beverages', countInStock: 50, rating: 4.3 },
    { productname: 'Sparkling Water', description: 'Bottle of sparkling water', price: 1.5, image: 'https://media.istockphoto.com/id/451992561/photo/pouring-mineral-water-in-the-glass.jpg?s=1024x1024&w=is&k=20&c=3GdwJwkXc7Qxx-8mJ-0qctUOsOfFzrxN84s74V6ESHk=', category: 'Beverages', countInStock: 80, rating: 4.2 },
    { productname: 'Cola', description: 'Can of cola', price: 1.0, image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Beverages', countInStock: 90, rating: 4.1 },
    { productname: 'Lemonade', description: 'Refreshing lemonade', price: 2.2, image: 'https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Beverages', countInStock: 60, rating: 4.5 },

    // Snacks
    { productname: 'Potato Chips', description: 'Crispy salted potato chips', price: 1.5, image: 'https://media.istockphoto.com/id/527905022/photo/potato-chips.jpg?s=612x612&w=is&k=20&c=o7CPTSCwfYn2ZX2G5zTbNd7PoeNREdq4WqSX84-GIys=', category: 'Snacks', countInStock: 100, rating: 4.2 },
    { productname: 'Chocolate Bar', description: 'Milk chocolate bar', price: 1.0, image: 'https://images.pexels.com/photos/6167332/pexels-photo-6167332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Snacks', countInStock: 120, rating: 4.8 },
    { productname: 'Trail Mix', description: 'Nut and dried fruit mix', price: 3.0, image: 'https://plus.unsplash.com/premium_photo-1668677227454-213252229b73?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Snacks', countInStock: 50, rating: 4.4 },
    { productname: 'Popcorn', description: 'Buttered popcorn', price: 2.0, image: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Snacks', countInStock: 70, rating: 4.6 },
    { productname: 'Granola Bar', description: 'Healthy granola bar', price: 1.8, image: 'https://plus.unsplash.com/premium_photo-1664392029345-eba492b172d8?q=80&w=1044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Snacks', countInStock: 90, rating: 4.7 }
];


const sampleAddToCart = [
    { userId: 'userId1', productId: 'productId1', quantity: 2 },
    { userId: 'userId2', productId: 'productId2', quantity: 1 },
    // Add 8 more sample cart items...
];

const sampleOrders = [
    { firstname: 'John', lastname: 'Doe', user: 'userId1', phone: '1234567890', productId: 'productId1', productName: 'Laptop', quantity: '1', price: '999', status: 'Pending', paymentMethod: 'Credit Card', address: '123 Main St' },
    { firstname: 'Jane', lastname: 'Smith', user: 'userId2', phone: '0987654321', productId: 'productId2', productName: 'Book', quantity: '2', price: '30', status: 'Confirmed', paymentMethod: 'PayPal', address: '456 Oak St' },
    // Add 8 more sample orders...
];

const samplePayments = [
    { user: 'userId1', name: 'John Doe', order: 'orderId1', amount: 999, paymentMethod: 'Credit Card', deliveryStatus: 'Processing', status: 'Pending' },
    { user: 'userId2', name: 'Jane Smith', order: 'orderId2', amount: 30, paymentMethod: 'PayPal', deliveryStatus: 'Delivered', status: 'Success' },
    // Add 8 more sample payments...
];

const sampleFeedback = [
    { user: 'userId1', message: 'Great service!', createdAt: new Date() },
    { user: 'userId2', message: 'Loved the product!', createdAt: new Date() },
    // Add 8 more feedbacks...
];

// Function to insert sample data
const insertData = async () => {
    try {
        // Clear existing data
        await models.Users.deleteMany();
        await models.Category.deleteMany();
        await models.Product.deleteMany();
        await models.AddToCart.deleteMany();
        await models.Order.deleteMany();
        await models.Payment.deleteMany();
        await models.Feedback.deleteMany();

        // Insert new sample data
        await models.Users.insertMany(sampleUsers);
        await models.Category.insertMany(sampleCategories);
        await models.Product.insertMany(sampleProducts);
        await models.AddToCart.insertMany(sampleAddToCart);
        await models.Order.insertMany(sampleOrders);
        await models.Payment.insertMany(samplePayments);
        await models.Feedback.insertMany(sampleFeedback);

        console.log('Data inserted successfully!');
    } catch (error) {
        console.error('Error inserting data:', error);
    } finally {
        mongoose.connection.close();
    }
};

// Run the function to insert data
insertData();
