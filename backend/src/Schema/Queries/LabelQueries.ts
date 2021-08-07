import {GraphQLList} from "graphql";
import {LabelEntity} from "../../Entities/LabelEntity";
import {LabelType} from "../TypeDefs/LabelType";

//Queries => Read only

export const GET_ALL_LABELS = {
    type: new GraphQLList(LabelType),
    resolve() {
        return LabelEntity.find();
    },
};
