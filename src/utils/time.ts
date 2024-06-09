import { createEvent, createStore } from "effector";

export const setTimeUp = createEvent<boolean>()
export const $timeUp = createStore(false)
.on(setTimeUp, (_,res) => res)