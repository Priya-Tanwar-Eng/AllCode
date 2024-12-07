

function automorphic(n) {
	let squared = n * n;
	
    return squared.toString().endsWith(n.toString());
};

console.log (automorphic(25));
