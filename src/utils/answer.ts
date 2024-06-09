import { createEvent, createStore } from "effector";


export const setPickedAnswer = createEvent<string[] | string | null>()
export const $pickedAnswer = createStore<string[] | string | null>(null)
.on(setPickedAnswer, ( _, res) => res)