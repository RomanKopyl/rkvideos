import { ImageSourcePropType } from "react-native"

export interface VideoData {
    id?: string
    title?: string
    videoUrl?: string
}

export interface Poster {
    id?: string
    title?: string
    imageUrl?: ImageSourcePropType
    message?: string
}

export interface Banner {
    imageUrl?: ImageSourcePropType
    title?: string
    editor?: string
    genre?: string
}

export interface ContinueWatching {
    poster: ImageSourcePropType
    title: string
    subTitle: string
}

export type DataType = 'banner' | 'section' | 'continue';
export type SectionType = 'trendingNow' | 'topRomance';

export interface DataConfig {
    type?: DataType
    subType?: SectionType
    title?: string
}

export interface Config {
    data?: DataConfig[]
}

export interface ContinueVideo {
    videoId: string,
    time: number
}
