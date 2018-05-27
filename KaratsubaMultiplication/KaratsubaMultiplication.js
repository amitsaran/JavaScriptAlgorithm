function karatsubaMultiplication(x, y){
	let n = Math.min(('' + x).length, ('' + y).length)
	if(n == 1){
		return x * y;
	}
	let tenpowhalfn = Math.pow(10, parseInt(n / 2));
	let tenpown = Math.pow(10, 2 * parseInt(n / 2));

	let a = parseInt(x / tenpowhalfn);
	let b = x % tenpowhalfn;
	let c = parseInt(y / tenpowhalfn);
	let d = y % tenpowhalfn;

	var ac = karatsubaMultiplication(a, c);
	var bd = karatsubaMultiplication(b, d);
	var ad_plus_bc = karatsubaMultiplication(a+b, c+d) - ac - bd;
	return tenpown * ac + tenpowhalfn * ad_plus_bc + bd;
}

module.exports = karatsubaMultiplication;
