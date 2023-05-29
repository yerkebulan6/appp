export default {
	myVar1: [],
	myVar2: {},
	search_my_orders: () => {
			return(Query2.data.filter(user => user.lastname))
	},
	auth_user: () => {
		
	
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