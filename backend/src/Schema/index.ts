import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_LABELS } from "./Queries/LabelQueries";
import {
  CREATE_LABEL,
  DELETE_LABEL,
  UPDATE_LABELNAME,
} from "./Mutations/LabelMutations";
import {GET_ALL_TASKS} from "./Queries/TaskQueries";
import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK_DESCRIPTION,
  UPDATE_TASKNAME
} from "./Mutations/TaskMutations";
import {GET_ALL_TRACKINGS} from "./Queries/TrackingQueries";
import {
  CREATE_TRACKING,
  DELETE_TRACKING,
  UPDATE_TRACKING_DESCRIPTION, UPDATE_TRACKING_EDNDTIME,
  UPDATE_TRACKING_STARTTIME
} from "./Mutations/TrackingMutations";

//Main query for startup
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllLabels: GET_ALL_LABELS,
    getAllTasks: GET_ALL_TASKS,
    getAllTrackings: GET_ALL_TRACKINGS,
  },
});

//List of all available mutations
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    deleteLabel: DELETE_LABEL,
    createLabel: CREATE_LABEL,
    updateLabelName: UPDATE_LABELNAME,
    
    deleteTask: DELETE_TASK,
    updateTaskDescription: UPDATE_TASK_DESCRIPTION,
    updateTaskName: UPDATE_TASKNAME,
    createTask: CREATE_TASK,

    deleteTracking: DELETE_TRACKING,
    updateTrackingDescription: UPDATE_TRACKING_DESCRIPTION,
    updateTrackingStarttime: UPDATE_TRACKING_STARTTIME,
    updateTrackingEndtime: UPDATE_TRACKING_EDNDTIME,
    createTracking: CREATE_TRACKING,
    
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
