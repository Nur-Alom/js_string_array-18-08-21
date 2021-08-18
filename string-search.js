const products = [
    'Dell hardcore i29 200GB Laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with black camera',
    'Dell 1x59 Lenovo commercial yoga laptop',
    'Lg supernova laptop',
    'HTC low price phone',
    'Dell purple color phone with laptop'
];

const searching = 'dell';

// indexOf

const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
console.log(output);

for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}
console.log(output);

// starts with.
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);


