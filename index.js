const objectName = {
    name: "test",
    age: 21,
    country: "Earth",
    
}
for (const key in objectName) {
    if (objectName.hasOwnProperty.call(objectName, key)) {
        console.log (`${key}: ${objectName[key]}`);
        
    }
}
