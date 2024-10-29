import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Window from '@/views/Window.vue'
import Me from '@/views/Me.vue'
import TeacherMe from '@/views/TeacherMe.vue'
// 课程
import Course from '@/views/course/index.vue'
import TeacherCourse from '@/views/course/TeacherCourse.vue'
import ManageCourse from '@/views/course/ManageCourse.vue'
// 实验
import Experiment from '@/views/experiment/index.vue'
import ExperimentConduct from '@/views/experiment/ExperimentConduct.vue'
import TeachExperiment from '@/views/experiment/TeachExperiment.vue'
// 课程报告
import StuCourseReport from '@/views/course/StuCourseReport.vue'
// 考试
import ClassExam from '@/views/exam/ClassExam.vue'
import ExamResult from '@/views/exam/ExamResult.vue'
import ExamPaperDetail from '@/views/exam/ExamPaperDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'newlogin',
      component: Login
    },
    {
      path: '/window',
      name: 'window',
      component: Window,
      children: [
        {
          path: '/experiment',
          name: 'experiment',
          component: Experiment
        },
        {
          path: '/experimentConduct',
          name: 'experimentConduct',
          component: ExperimentConduct
        },
        {
          path: '/teachExperiment',
          name: 'teachExperiment',
          component: TeachExperiment
        },
        {
          path: '/stuCourseReport',
          name: 'stuCourseReport',
          component: StuCourseReport
        },
        {
          path: '/me',
          name: 'me',
          component: Me
        },
        {
          path: '/teacherMe',
          name: 'teacherMe',
          component: TeacherMe
        },
        {
          path: '/course',
          name: 'course',
          component: Course
        },
        {
          path: '/teacherCourse',
          name: 'teacherCourse',
          component: TeacherCourse
        },
        {
          path: '/manageCourse',          
          name: 'manageCourse',
          component: ManageCourse
        },
        {
          path: '/classExam',          
          name: 'classExam',
          component: ClassExam
        },
        {
          path: '/examResult',          
          name: 'examResult',
          component:ExamResult
        },
        {
          path: '/examPaperDetail',          
          name: 'examPaperDetail',
          component: ExamPaperDetail
        }
      ]
    }
  ]
})

export default router
