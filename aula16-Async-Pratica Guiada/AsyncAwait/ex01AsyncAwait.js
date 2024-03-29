// 14/07/2021

function func1(numero) {
	return new Promise(resolve=> {
		setTimeout(() => resolve(100 + numero),1000)
	})
}

function func2(numero) {
	return new Promise(resolve=> {
		setTimeout(() => resolve(200 + numero),1000)
	})
}

function func3(numero) {
	return new Promise(resolve=> {
		setTimeout(() => resolve(300 + numero),1000)
	})
}

async function minhaAsyncFunction() {
	var numero = await func1(10);
	console.log('soma 100 + número');
	console.log('func1... '+numero);
	
	numero = await func2(numero);
	console.log('soma 200 + número');
	console.log('func2... '+numero);

	var result = await func3(numero);
	console.log('soma 300 + número');
	console.log('func3... '+numero);

	console.log(result);
}
minhaAsyncFunction();