class User{
    constructor(id){
        this.id = id;
    }
}
class UserRepository{
    constructor(){
        this.userList=[]
    }
    addUser(user){
        this.userList.unshift(user)
    }
    getUser(userId){
        return this.userList.find(item => item.id === userId) || {};
    }
    getOrderedUsers(){
        const result  = this.userList.map(item => item);
        return result.sort(item);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              () => item.id);
    }
}