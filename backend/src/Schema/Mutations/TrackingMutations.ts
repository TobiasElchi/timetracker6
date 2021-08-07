import {GraphQLID, GraphQLString} from "graphql";
import {MessageType} from "../TypeDefs/Messages";
import {TrackingEntity} from "../../Entities/TrackingEntity";
import {TrackingType} from "../TypeDefs/TrackingType";

//Mutations => Create,Update,Delete
export const CREATE_TRACKING = {
    type: TrackingType,
    args: {
        description: {type: GraphQLString},
        taskid: {type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const {description, taskid} = args;
        const timeElapsed = Date.now()
        const currentTime = new Date(timeElapsed).toUTCString()
        await TrackingEntity.insert({
            description,
            taskid,
            timestampCreated: currentTime,
            timestampUpdated: currentTime,
            starttime: "not started",
            endtime: "not ended",
            timeSpent: "0"
        });
        return args;
    },
};

export const UPDATE_TRACKING_DESCRIPTION = {
    type: MessageType,
    args: {
        description: {type: GraphQLString},
        id: {type: GraphQLID},
        timestampUpdated: {type: GraphQLString},
    },
    async resolve(parent: any, args: any) {
        const {description, id} = args;
        const tracking = await TrackingEntity.findOne({id: id});
        if (!tracking) {
            throw new Error("TRACKING NOT FOUND");
        }
        const trackingID = tracking?.id;
        await TrackingEntity.update({id: id}, {description: description});
        //Automatically update the timestamp
        const timeElapsed = Date.now()
        const currentTime = new Date(timeElapsed).toUTCString()
        await TrackingEntity.update({id: id}, {timestampUpdated: currentTime});
        await TrackingEntity.update({id: id}, {description: description});
        return {successful: true, message: "TRACKING DESCRIPTION UPDATED"};
    },
};

export const UPDATE_TRACKING_STARTTIME = {
    type: MessageType,
    args: {
        id: {type: GraphQLID},
        timestampUpdated: {type: GraphQLString},
        starttime: {type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const {id} = args;
        const tracking = await TrackingEntity.findOne({id: id});
        if (!tracking) {
            throw new Error("TRACKING NOT FOUND");
        }
        const trackingID = tracking?.id;
        //Automatically update the timestamp
        const timeElapsed = Date.now()
        const currentTime = new Date(timeElapsed).toUTCString()
        await TrackingEntity.update({id: id}, {timestampUpdated: currentTime});
        await TrackingEntity.update({id: id}, {starttime: currentTime});
        return {successful: true, message: "TRACKING STARTTIME UPDATED"};
    },
};
export const UPDATE_TRACKING_ENDTIME = {
    type: MessageType,
    args: {
        id: {type: GraphQLID},
        timestampUpdated: {type: GraphQLString},
        endtime: {type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const {id} = args;
        const tracking = await TrackingEntity.findOne({id: id});
        if (!tracking) {
            throw new Error("TRACKING NOT FOUND");
        }
        const trackingID = tracking?.id;
        //Automatically update the timestamp
        const timeElapsed = Date.now()
        const currentTime = new Date(timeElapsed).toUTCString()
        await TrackingEntity.update({id: id}, {timestampUpdated: currentTime});
        await TrackingEntity.update({id: id}, {endtime: currentTime});
        return {successful: true, message: "TRACKING ENDTIME UPDATED"};
    },
};

export const DELETE_TRACKING = {
    type: MessageType,
    args: {
        id: {type: GraphQLID},
    },
    async resolve(parent: any, args: any) {
        const id = args.id;
        await TrackingEntity.delete(id);
        return {successful: true, message: "TRACKING DELETED"};
    },
};

export const UPDATE_TRACKING_TASKID = {
    type: MessageType,
    args: {
        taskid: {type: GraphQLString},
        trackingid: {type: GraphQLID},
        timestampUpdated: {type: GraphQLString},
    },
    async resolve(parent: any, args: any) {
        const {taskid, trackingid} = args;
        const tracking = await TrackingEntity.findOne({id: trackingid});
        if (!tracking) {
            throw new Error("TRACKING NOT FOUND");
        }
        await TrackingEntity.update({id: trackingid}, {taskid: taskid});

        //Automatically update the timestamp
        const timeElapsed = Date.now()
        const currentTime = new Date(timeElapsed).toUTCString()
        await TrackingEntity.update({id: trackingid}, {timestampUpdated: currentTime});
        await TrackingEntity.update({id: trackingid}, {taskid: taskid});
        return {successful: true, message: "TRACKING TASKID UPDATED"};
    },
};
