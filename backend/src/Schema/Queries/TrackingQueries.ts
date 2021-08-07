import {GraphQLList, GraphQLString} from "graphql";
import {TrackingEntity} from "../../Entities/TrackingEntity";
import {TrackingType} from "../TypeDefs/TrackingType";

//Queries => Read only

export const GET_ALL_TRACKINGS = {
    type: new GraphQLList(TrackingType),
    resolve() {
        return TrackingEntity.find();
    },
};

export const GET_ALL_TRACKINGS_BY_TASKID = {
    type: new GraphQLList(TrackingType),
    args: {
        taskid: {type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const {taskid} = args;
        return TrackingEntity.find({
            where: {taskid: taskid},
        });
    },
};
