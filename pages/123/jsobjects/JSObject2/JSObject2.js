export default {
	myVar1: [],
	myVar2: {},
	search_my_orders: () => {
		return(select_user_data.data)},
	gender: () => {
		return(select_gender.data)
	},
	run: async () => {
		try {
			const {email} = jsonwebtoken.verify(appsmith.store.token, 'secret');
			return email;
		}
		catch(error){			
		}
	},
	logOut: () => {
		return removeValue('token')
			.then(() => navigateTo('login2'));
	},
	runid: async () => {
		try {
			const {email} = jsonwebtoken.verify(appsmith.store.token, 'secret');
			return Query1.run()
		}
		catch(error){			
		}
	},
}