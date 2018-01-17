export class User {
    id: number;
    name: String;
    userName: String;
    password: String;
    createdAt: String;
    updatedAt: String;

    constructor(id?: number, name?: String, userName?: String, password?: String, createdAt?: String, updateAt?: String) {
        this.id = id;
        this.name = name;
        this.userName = userName;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updateAt;
    }

    //constructor(){}
}