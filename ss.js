Set.prototype.union = (otherSet) =>
{ 
let unionSet = new Set(); 
for (let elem of this) 
{ 
unionSet.add(elem); 
} 
for(let elem of otherSet) 
unionSet.add(elem); 
return unionSet; 
} 

let set1 = new Set([10, 20, 30, 40, 50]); 
let set2 = new Set([40, 50, 60, 70, 80]); 

let unionSet = set1.union(set2); 
console.log(unionSet.values()); 