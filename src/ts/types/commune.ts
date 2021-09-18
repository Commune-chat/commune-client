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


type appColors = {
    background: string,
    main: string,
    fontColor: string,
    navFontHover: string,
}

export type theme = {
    colors: appColors,
    font: number,
}