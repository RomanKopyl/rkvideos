import { Config } from "./data/interfaces";

export const HOME_SCREEN_CONFIG = 'home_screen_config';
export const CONTINUE_WATCHING_VIDEO = 'contiue_watching_video';
export const VIDEO_COLLECTION = 'videos';

export const DATA = {
    banner: {
        type: 'banner',
        data: [
            {
                imageUrl: require('./images/headerImage.png'),
                title: 'Lethal Limits',
                editor: 'Dustin\'s Gamble',
                genre: 'Romance'
            },
            {
                imageUrl: require('./images/headerImage.png'),
                title: 'Lethal Limits',
                editor: 'Dustin\'s Gamble',
                genre: 'Romance'
            },
            {
                imageUrl: require('./images/headerImage.png'),
                title: 'Lethal Limits',
                editor: 'Dustin\'s Gamble',
                genre: 'Romance'
            }
        ],
    },
    continue: {
        type: 'continue',
        title: 'Continue Watching',
        // data: {
        //     poster: require('./images/currentMoviePoser.png'),
        //     title: 'Boss With Benefits',
        //     subTitle: 'Kelly Nite',
        // },
    },
    trendingNow: {
        type: 'section',
        title: 'Trending Now',
        data: [
            {
                title: 'Wolfstate chronicles: Alaska, Texas',
                imageUrl: require('./images/bookCover1.png')
            },
            {
                title: 'Beautiful Revenge',
                imageUrl: require('./images/bookCover2.png'),
                message: 'COMING 2 july'
            },
            {
                title: 'Sin De Rella',
                imageUrl: require('./images/bookCover3.png'),
                message: 'COMING 2 july'
            }
        ],
    },
    topRomance: {
        type: 'section',
        title: 'Top Romance',
        data: [
            {
                title: 'Alpha\'s Detective',
                imageUrl: require('./images/bookCover4.png')
            },
            {
                title: 'Trained for Seduction',
                imageUrl: require('./images/bookCover5.png'),
                message: 'COMING 2 july'
            },
            {
                title: 'Crescent',
                imageUrl: require('./images/bookCover6.png'),
                message: 'COMING 2 july'
            }
        ]
    }
};


export const gradientDataTop = [
    'rgba(0, 0, 0, 1)',
    'rgba(0, 0, 0, 0.99)',
    'rgba(0, 0, 0, 0.96)',
    'rgba(0, 0, 0, 0.92)',
    'rgba(0, 0, 0, 0.85)',
    'rgba(0, 0, 0, 0.77)',
    'rgba(0, 0, 0, 0.67)',
    'rgba(0, 0, 0, 0.56)',
    'rgba(0, 0, 0, 0.44)',
    'rgba(0, 0, 0, 0.33)',
    'rgba(0, 0, 0, 0.23)',
    'rgba(0, 0, 0, 0.15)',
    'rgba(0, 0, 0, 0.08)',
    'rgba(0, 0, 0, 0.04)',
    'rgba(0, 0, 0, 0.01)',
    'rgba(0, 0, 0, 0)'
]

export const reverseGradientData = [...gradientDataTop].reverse();




export const JSON_DATA: Config = {
    data: [
        {
            type: 'banner'
        },
        {
            type: 'continue',
            title: 'Continue Watching'
        },
        {
            type: 'section',
            subType: 'trendingNow',
            title: 'Trending Now'
        },
        {
            type: 'section',
            subType: 'topRomance',
            title: 'Top Romance'
        }
    ]
}