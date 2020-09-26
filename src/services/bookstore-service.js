export default class BookstoreService {
    getBooks() {
        return [
            { id: 1,
              title: 'Witcher I',
              author: 'Andrzej Sapkowski',
              price: 34,
              coverImage: 'https://lh3.googleusercontent.com/proxy/PR2KIenhTGRThbjeLNpXof_bI4WkfQ8nRxvdcBSCxj8Ljcp5Ei5_c2K6fumsY_gZNn2bei1YW7OmqvweEWnvKE9RcmXWob9xG33ZlHXaMO4z540Tao_woZszZagFOki8'},
            { id: 2,
              title: 'Witcher II',
              author: 'Andrzej Sapkowski',
              price: 55,
              coverImage: 'https://lh3.googleusercontent.com/proxy/PR2KIenhTGRThbjeLNpXof_bI4WkfQ8nRxvdcBSCxj8Ljcp5Ei5_c2K6fumsY_gZNn2bei1YW7OmqvweEWnvKE9RcmXWob9xG33ZlHXaMO4z540Tao_woZszZagFOki8' },
        ];
    }
}