export type memberType = {
    name: string,
    discriminator: string,
    id: number,
    icon: string,
    bio: string,
    status: string,
    story: null
}

export type communityType = {
    name: string,
    id: number,
    members: memberType[] | null,
    icon: string,
}