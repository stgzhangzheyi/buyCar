const night = state=> {
let so=[];

let bb=state.shopData;
bb.forEach(item =>{
	let con=item;
	so.push(con);

})
return so;

}
const moon =state=>{
	let because=[];
	let cc=state.productsData;
	cc.forEach(item=>{
		let can=item.sm;
		because.push(can);
	})
	return because;
}

export {night,moon}