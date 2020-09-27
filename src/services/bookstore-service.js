export default class BookstoreService {
	
	data = [
		{ id: 1,
		  title: 'Witcher I',
		  author: 'Andrzej Sapkowski',
		  price: 34,
		  coverImage: 'https://lh3.googleusercontent.com/proxy/NG4X1fKHXrLymL8EoOI_2AJF3grWN8WKTVp91otfO-l-lJSLj55qs1p0Uu7W8dPuZ5aW2PxRxvUYFBYB8V_CBgdNsMRso3tY1bOPMsS7gf91m3SMhgBl4u61QpUfM0_0'},
		{ id: 2,
		  title: 'Witcher II',
		  author: 'Andrzej Sapkowski',
		  price: 55,
		  coverImage: 'https://lh3.googleusercontent.com/proxy/NG4X1fKHXrLymL8EoOI_2AJF3grWN8WKTVp91otfO-l-lJSLj55qs1p0Uu7W8dPuZ5aW2PxRxvUYFBYB8V_CBgdNsMRso3tY1bOPMsS7gf91m3SMhgBl4u61QpUfM0_0' }
	];

	getBooks() {
        return new Promise((resolve, reject) => {
			setTimeout(() => {
				// reject(new Error('something went wrong'));
				resolve(this.data);
			}, 700);
		});	
    }
}