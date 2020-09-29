export default class BookstoreService {
	
	data = [
		{ id: 1,
		  title: 'Witcher I',
		  author: 'Andrzej Sapkowski',
		  price: 34,
		  coverImage: 'https://www.thirdeditions.com/en/1178-thickbox_default/the-rise-of-the-witcher-a-new-rpg-king.jpg'},
		{ id: 2,
		  title: 'Witcher II',
		  author: 'Andrzej Sapkowski',
		  price: 55,
		  coverImage: 'https://www.thirdeditions.com/en/1178-thickbox_default/the-rise-of-the-witcher-a-new-rpg-king.jpg' }
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