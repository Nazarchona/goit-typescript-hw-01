interface Address {
    city: string;
    country: string;
}

interface UserInfo {
    name: string;
    age: number; // Додано властивість 'age'
    email: string;
    address?: Address;
}




const mango: User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const poly: User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};
