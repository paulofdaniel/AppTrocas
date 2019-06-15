class User {

    constructor(
        public email: string,
        public name: string,
        public locationId: number,
        public stateId: number,
        public rate: number,
        public chats
        ){}
    }

export { User }