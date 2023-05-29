export default {
	randomWorkID: () => {
    return Math.ceil(Math.random() * (9999 -  + 1)) + 1;
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