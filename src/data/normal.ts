import { communityType, memberType } from "src/ts/types/commune";

let testmember1: memberType = {
    name: "matt36",
    discriminator: "0036",
    id: 0,
    icon: "icon",
    bio: "creator",
    status: "online",
    story: null
}
export let testcard1: communityType = {
    name: "Study Group",
    id: 1,
    members: [testmember1],
    icon: "icon",
}