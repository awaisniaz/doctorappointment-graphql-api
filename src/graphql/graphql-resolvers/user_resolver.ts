export const user_resolver = {
    Query: {
        login: async (parent: any, args: any, context: any) => {
            console.log(args?.input?.email)
            return { email: "awaisniaz", username: "Awaisniaz", name: "Usman" }

        }
    },
    Mutation: {
        createUser: async (parent: any, args: any, context: any) => {
            console.log(args?.input?.email)
            return { email: "awaisniaz", username: "Awaisniaz", name: "Usman" }

        }
    }
}