class Product {

    constructor(
        public id: string,
        public userEmail: string,
        public locationId: number,
        public date: string,
        public name:string,
        public platform:string,
        public genre: string,
        public description: string,
        public status: string,
        public images,
        public exchangeFor,
        public likes,
        public disLikes,
        public matches
        ){}
    }

export { Product }