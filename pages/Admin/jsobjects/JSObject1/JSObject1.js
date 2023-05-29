export default {
	myVar1: [],
	myVar2: {},
	
	clear: () => {
		storeValue('hoursSum',null);
		storeValue('completedCount',null);
		storeValue('equipmentStats',null);
	},
	
	search: () => {
		if(selectAgent.selectedOptionValue.length==0){
			return Query1.data
		}
		else{
			return(Query1.data.filter(user => user.city==(selectAgent.selectedOptionLabel)))
		}
	},
	
	totalHoursCalc: async() => {
		let sum = 0
		if(selectAgent.selectedOptionValue.length == 0)
	  sum = select_work_ordersPage.data.reduce((accumulator, object) => {
    return accumulator + object.hours;
}, 0);
		else 
			sum = select_work_ordersAgentPage.data.reduce((accumulator, object) => {
  return accumulator + object.hours;
}, 0);
			 storeValue('hoursSum',sum);

	},

	completedCalc: async() => {	
		await select_work_ordersPage.run()
		await select_work_ordersAgentPage.run()
		let count = 0

		if(selectAgent.selectedOptionValue.length == 0)
	  count = (select_work_ordersPage.data.filter((item) => item.completed == "Yes")).length;
		else 
		count = (select_work_ordersAgentPage.data.filter((item) => item.completed == "Yes")).length;

 storeValue('completedCount',count);
	},
	
	equipChart: async() => {
			await Query1.run()
		await Query2.run()
		let chartData
		if(selectAgent.selectedOptionValue.length == 0)
	  chartData = Query1.data.map((gen) => {return {x: gen.city, y: gen.count }})

		else 
		chartData = Query2.data.map((gen) => {return {x: gen.city, y: gen.count }})

    storeValue('equipmentStats',chartData);
		console.log(appsmith.store.equipmentStats)
	},
		run: async () => {
		try{
			const {email} = jsonwebtoken.verify(appsmith.store.token, 'secret');
			return email;
		}
		catch(error){
			
		}
	},
	logOut: () => {
		return removeValue('token')
		.then(() => navigateTo('login2'));
	}
	
}