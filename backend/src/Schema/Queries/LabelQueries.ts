import {GraphQLList, GraphQLString} from "graphql";
import {LabelEntity} from "../../Entities/LabelEntity";
import {LabelType} from "../TypeDefs/LabelType";
import {TrackingType} from "../TypeDefs/TrackingType";
import {TrackingEntity} from "../../Entities/TrackingEntity";

//Queries => Read only

export const GET_ALL_LABELS = {
    type: new GraphQLList(LabelType),
    resolve() {
        return LabelEntity.find();
    },
};
export const GET_ALL_LABELS_BY_TASKID = {
    type: new GraphQLList(LabelType),
    args: {
        taskid: {type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const {taskid} = args;
        return LabelEntity.find({
            where: {taskid: taskid},
        });
    },
};