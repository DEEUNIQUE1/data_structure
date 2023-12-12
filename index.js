// Problem 1: Finding the Sum of Distinct Elements in Two Sets
function sumOfDistinctElements(set1, set2) {
    let distinctElementsSum = 0;

    // Loop through elements of set1
    for (let element of set1) {
        if (!set2.includes(element)) {
            distinctElementsSum += element;
        }
    }

    // Loop through elements of set2
    for (let element of set2) {
        if (!set1.includes(element)) {
            distinctElementsSum += element;
        }
    }

    return distinctElementsSum;
}

// Problem 2: Checking Orthogonality of Vectors using Dot Product
function dotProduct(v1, v2) {
    // Assuming v1 and v2 are arrays representing vectors
    let result = 0;
    for (let i = 0; i < v1.length; i++) {
        result += v1[i] * v2[i];
    }
    return result;
}

function areVectorsOrthogonal(vectors) {
    const n = vectors.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Check if the dot product is zero (vectors are orthogonal)
            if (dotProduct(vectors[i], vectors[j]) === 0) {
                console.log(`Vectors ${vectors[i]} and ${vectors[j]} are orthogonal.`);
            } else {
                console.log(`Vectors ${vectors[i]} and ${vectors[j]} are not orthogonal.`);
            }
        }
    }
}

// Example usage for both problems
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = sumOfDistinctElements(set1, set2);
console.log("Problem 1 Output:", result);  // Output: 13 (distinct elements 4, 7, 2)

const vectors = [[1, 0, 0], [0, 1, 0], [0, 0, 1], [1, 1, 0]];
areVectorsOrthogonal(vectors);
