<script setup lang="ts">
import { useRouter, RouterView, RouterLink } from "vue-router"
import { onMounted, reactive, toRefs, watch } from "vue";
import { useSystemStore } from '@/stores/system'
// 引入模态框组件
import About from '@/components/modal/About.vue'

const router = useRouter();
const systemStore = useSystemStore();
const data = reactive({
  currentPage: '',
  aboutUsVisible : false,
  settingVisible : false,
  userType: sessionStorage.userType,
  alivePages: ['Me'] as any
})
const { aboutUsVisible, settingVisible } = toRefs(data)

// 打开对话框
const openLLMWindow = () => {
  window.open(`http://8.155.19.142:30044/`);
}
// 退出系统
const quit = () => {
  sessionStorage.clear()
  router.push("/")
}
// 判断是否是当前页
const isCurrentPage = (pageName: string) => {
  return pageName === systemStore.currentPage;
}
const changePage = (pageName: string) => {
  if(!data.alivePages.includes(pageName)) {
    data.alivePages.push(pageName);
  }
  systemStore.currentPage = pageName;
}
</script>

<template>
  <el-row class="experiment-page">
    <!-- 侧边栏 -->
    <el-col :xs="0" :sm="0" :md="1" :lg="1" :xl="1" class="sider-nav">
      <el-scrollbar class="sider-nav-main">
        <!-- Logo -->
        <img src="../assets/img/logo.png" alt="大模型实训平台" class="logo">
        <span class="h-[0.15rem] w-14 bg-gray-200 mb-2 mt-2"></span>
        <!-- 个人信息 学生 -->
        <RouterLink  v-if="data.userType === '1'" class="sider-nav-icon" to="/studentMe" @click="changePage('Me')" :class="{ active: isCurrentPage('Me') }">
          <icon-user  size="33" strokeWidth="3" class="mt-2"/>
          <div class="icon-text">我的</div>
        </RouterLink>
        <!-- 课程信息 学生 -->
        <RouterLink v-if="data.userType === '1'" class="sider-nav-icon" to="/studentClass" @click="changePage('studentClass')" :class="{ active: isCurrentPage('studentClass') }">
          <icon-book  size="33" strokeWidth="3" class="mt-2"/>
          <div class="icon-text">课程</div>
        </RouterLink>
        <!-- 实验平台 学生 -->
        <RouterLink v-if="data.userType === '1'" class="sider-nav-icon" to="/studentExperiment" @click="changePage('studentExperiment')" :class="{ active: isCurrentPage('studentExperiment')}">
          <icon-experiment  size="33" strokeWidth="3" class="mt-2"/>
          <div class="icon-text">实验</div>
        </RouterLink>
        <!-- 与大模型对话 学生 -->
        <div v-if="data.userType === '1'" class="sider-nav-icon" @click="openLLMWindow()">
          <icon-robot size="33" strokeWidth="3" class="mt-2"/>
          <div class="icon-text">对话</div>
        </div>

        <!-- 个人信息 教师 -->
        <RouterLink v-if="data.userType === '2'" class="sider-nav-icon" to="/teacherMe" @click="changePage('Me')"  :class="{ active: isCurrentPage('Me')}">
          <icon-user  size="33" strokeWidth="3" class="mt-2"/>
          <div class="icon-text">我的</div>
        </RouterLink>
        <!-- 课程信息 教师 -->
        <RouterLink v-if="data.userType === '2'" class="sider-nav-icon" to="/teacherClass" @click="changePage('teacherClass')" :class="{ active: isCurrentPage('teacherClass')}">
          <icon-book  size="33" strokeWidth="3" class="mt-2"/>
          <div class="icon-text">课程</div>
        </RouterLink>

        <!-- 个人信息 教务 -->
        <RouterLink v-if="data.userType === '3'" class="sider-nav-icon" to="/adminMe" @click="changePage('Me')" :class="{ active: isCurrentPage('Me') }">
          <icon-user  size="33" strokeWidth="3" class="mt-2"/>
          <div class="icon-text">我的</div>
        </RouterLink>
        <!-- 个人信息 教务 -->
        <RouterLink v-if="data.userType === '3'" class="sider-nav-icon" to="/adminClass" @click="changePage('adminClass')" :class="{ active: isCurrentPage('adminClass') }">
          <icon-home  size="33" strokeWidth="3" class="mt-2"/>
          <div class="icon-text">班级</div>
        </RouterLink>
        <!-- 用户管理 教务 -->
        <RouterLink v-if="data.userType === '3'" class="sider-nav-icon" to="/userManage" @click="changePage('userManage')" :class="{ active: isCurrentPage('userManage') }"> 
          <icon-user-group  size="33" strokeWidth="3" class="mt-2"/>
          <div class="icon-text">用户</div>
        </RouterLink>
        <!-- 教务管理 教务 -->
        <RouterLink v-if="data.userType === '3'" class="sider-nav-icon" to="/educationManage" @click="changePage('educationManage')" :class="{ active: isCurrentPage('educationManage')}">
          <icon-interaction size="33" strokeWidth="3" class="mt-2"/>
          <div class="icon-text">教务</div>
        </RouterLink>
        <!-- 课程管理 教务 -->
        <RouterLink v-if="data.userType === '3'" class="sider-nav-icon" to="/courseManage" @click="changePage('courseManage')" :class="{ active: isCurrentPage('courseManage')}">
          <icon-book size="33" strokeWidth="3" class="mt-2"/>
          <div class="icon-text">课程</div>
        </RouterLink>
        <!-- 课程管理 教务 -->
        <RouterLink v-if="data.userType === '3'" class="sider-nav-icon" to="/examManage" @click="changePage('examManage')" :class="{ active: isCurrentPage('examManage')}">
          <icon-bar-chart size="33" strokeWidth="3" class="mt-2"/>
          <div class="icon-text">考试</div>
        </RouterLink>
        <!-- 实验管理 教务 -->
        <RouterLink v-if="data.userType === '3'" class="sider-nav-icon" to="/experimentManage" @click="changePage('experimentManage')" :class="{ active: isCurrentPage('experimentManage')}">
          <icon-experiment size="33" strokeWidth="3" class="mt-2"/>
          <div class="icon-text">实验</div>
        </RouterLink>

        <!-- 退出 -->
        <div class="sider-nav-icon" @click="quit">
          <icon-export  size="33" strokeWidth="3" class="mt-2"/>
          <div class="icon-text">退出</div>
        </div>
      </el-scrollbar>
    </el-col>

    <el-col :xs="24" :sm="24" :md="23" :lg="23" :xl="23" class="window-main">
      <!-- 主内容区 -->
      <div class="experiment-left-main">
        <RouterView></RouterView>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped>
/* 整体页面设置 */
.experiment-page {
  width: 100vw;
  height: 100vh;
  min-width: 1300px;
  background-color:hsla(221,94%,51%,1);
  background-image:
  radial-gradient(at 12% 50%, hsla(10,21%,87%,0.87) 0px, transparent 50%),
  radial-gradient(at 65% 9%, hsla(12,80%,86%,1) 0px, transparent 50%),
  radial-gradient(at 86% 74%, hsla(12,28%,83%,1) 0px, transparent 50%);
}
/* LOGO大小 */
.logo {
  width: 3vw; /* 根据视口宽度调整 */
  height: auto;
  /* @apply h-10 w-10 mt-1 mb-1; */
}


/* 右侧侧边栏区 */
.sider-nav {
  height: 100%;
  width: 100px;
  box-sizing: border-box;
  @apply flex-col pt-1 pl-2 pr-1 pb-2;
}
.sider-nav-main {
  width: 100%;
  height: 100%;
  position: relative;
  /* box-shadow: 1px 1px 2px #d1d5db; */
  @apply flex flex-col items-center rounded-md;
}
.sider-nav-icon {
  width: 3vw; /* 根据视口宽度调整 */
  height: auto;
  transition: all .2s;
  @apply mb-1 flex flex-col items-center text-white rounded-md;
}
.sider-nav-icon:hover{
  transform: scale(1.2);
}
.active {
  transform: scale(1.2);
}
.icon-text {
  font-size: clamp(0.6rem, 1vw, 0.7rem);
  @apply mt-1 font-medium;
}
.sider-nav-icon-bottom {
  position: absolute;
  bottom: 5px;
  width: 90%;
  transition: all .2s;
  @apply mb-3 flex flex-col items-center text-white rounded-md;
}
.sider-nav-icon-bottom:hover{
  transform: scale(1.2);
}

/* 左侧主页面区 */
.window-main {
  height: 100vh;
  box-sizing: border-box;
  @apply flex-col pt-1 pl-1 pr-2 pb-2;
}
.experiment-left-main {
  /* width: 100%; */
  height: 100%;
  @apply flex flex-col items-center;
}
</style>
