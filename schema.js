const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql')

//Temporary hardcoded data

const customers = [
    {id:'1', name:'john doe', email:'jdoe@gmail.com', age:35},
    {id:'2', name:'steve smith', email:'ssmith@gmail.com', age:35},
    {id:'3', name:'neil cones', email:'conesinmecaar@gmail.com', age:26},
]

//Customer Type
const CustomerType = new GraphQLObjectType({
    name:'Customer',
    fields:() =>({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLString},
    })
})

//Root Query
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        customer:{
            type:CustomerType,
            args:{
                id:{type:GraphQLString}            
            },
            resolve(parentValue, args){
                for(let i = 0; i < customers.length; i++){
                    if(customers[i].id == args.id){
                        return customers[i];
                    }
                }
            }
        }
    }

})

module.exports = new GraphQLSchema({
    query: RootQuery
})