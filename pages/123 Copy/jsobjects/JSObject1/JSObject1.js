export default {
	myVar1: [],
	myVar2: {},
	search_my_orders: () => {
			return(select_user_data.data)},
	userid: () => {
						try{
			const {email} = jsonwebtoken.verify(appsmith.store.token, 'secret');
			return email;
		}catch{
			
		}
		},
	gender: () => {
		return(select_gender.data)
	},
	run: async () => {
		try{
			const {email} = jsonwebtoken.verify(appsmith.store.token, 'secret');
			return email;
		}
		catch(error){
			
		}
	},
 runid: async () => {
		try{
			const {id} = jsonwebtoken.verify(appsmith.store.token, 'secret1');
			return id;
		}
		catch(error){
			
		}
	},
	logOut: () => {
		return removeValue('token')
		.then(() => navigateTo('login2'));
	},
	myFunction: async () => {
		const query = "SELECT firstname FROM teachers.user_data LIMIT 1"; 
const result = await select_user_data1.run(query);
const value = result[0].firstname; "firstname" 

return value;
}
}