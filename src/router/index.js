import Home from '../views/Home'
import PersonalCenter from '../views/PersonalCenter'
import KnowledgeGraph from '../views/KnowledgeGraph'
import Chat from '../views/Chat'
import Login from '../views/Login'
import Course from '../views/Course'
import CourseIntro from '../views/Course/components/CourseIntro'
import CourseMaterial from '../views/Course/components/CourseMaterial'
import CourseChat from '../views/Course/components/CourseChat'
import CourseGraph from '../views/Course/components/CourseGraph'
import Interaction from '../views/Course/components/Interaction'
import Register from '../views/Register'
import Settings from '../views/Settings'
import PersonalInfo from '../views/Settings/components/PersonalInfo'
import ChangePwd from '../views/Settings/components/ChangePwd'
import Account from '../views/Settings/components/Account'
import CourseRecommend from '../views/Course/components/Recommend'
import CourseTask from '../views/Course/components/Task'
import Suggestion from '../views/Suggestion'

const routes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/personalCenter",
        element: <PersonalCenter/>
    },
    {
        path: "/knowledgeGraph",
        element: <KnowledgeGraph/>
    },
    {
        path: "/chat",
        element: <Chat/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/suggestion',
        element: <Suggestion/>
    },
    {
        path: '/settings',
        element: <Settings/>,
        children: [
            {
                path: '/settings/personalInfo',
                element: <PersonalInfo/>
            },
            {
                path: '/settings/changePwd',
                element: <ChangePwd/>
            },
            {
                path: '/settings/account',
                element: <Account/>
            }
        ]
    },
    {
        path: "/course",
        element: <Course/>,
        children: [
            {
                path: "/course/intro",
                element: <CourseIntro/>
            },
            {
                path: "/course/task",
                element: <CourseTask/>
            },
            {
                path: "/course/material",
                element: <CourseMaterial/>
            },
            {
                path: '/course/graph',
                element: <CourseGraph/>
            },
            {
                path: '/course/interaction',
                element: <Interaction/>
            },
            {
                path: '/course/chat',
                element: <CourseChat/>
            },
            {
                path: '/course/recommend',
                element: <CourseRecommend/>
            }
        ]
    }
]

export default routes