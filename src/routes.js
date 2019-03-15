import React from 'react'
import { Index, Login, About,News } from './containers'
export default () => {
    return (
        {
            path: '/',
            component: Index,
            indexRoute: { compoent: Login},
            childRoutes: [
                {
                    path: 'about',
                    compoent: About
                },
                {
                    path: 'news',
                    compoent: News
                }
            ]
        }
    )
}