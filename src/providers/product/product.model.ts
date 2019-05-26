class Product {

    constructor(
        public userEmail: string,
        public locationId: number,
        public date: string,
        public name:string,
        public platform:string,
        public genre: string,
        public description: string,
        public status: string,
        public images: string,
        public exchangeFor: number,
        public likes: string,
        public disLikes: string,
        public matches: string,
        ){}
    }

export { Product }