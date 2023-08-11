<template>
  <t-layout>
    <t-aside>
      <t-menu theme="light" value="dashboard" style="margin-right: 50px" height="550px">
        <template #logo>
          <img width="136" class="logo" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo">
        </template>
        <t-menu-item value="dashboard">
          <template #icon>
            <DashboardIcon />
          </template>
          仪表盘
        </t-menu-item>
        <t-menu-item value="resource">
          <template #icon>
            <ServerIcon />
          </template> 
          资源列表
        </t-menu-item>
        <t-menu-item value="root">
          <template #icon>
            <RootListIcon />
          </template>
          根目录
        </t-menu-item>
        <t-menu-item value="control-platform">
          <template #icon>
            <ControlPlatformIcon />
          </template>
          调度平台
        </t-menu-item>
        <t-menu-item value="precise-monitor">
          <template #icon>
            <PreciseMonitorIcon />
          </template>
          调度平台
        </t-menu-item>
        <t-menu-item value="mail">
          <template #icon>
            <MailIcon />
          </template>
          消息区
        </t-menu-item>
        <t-menu-item value="user-circle">
          <template #icon>
            <UserCircleIcon />
          </template>
          个人中心
        </t-menu-item>
        <t-menu-item value="play-circle">
          <template #icon>
            <PlayCircleIcon />
          </template>
          视频区
        </t-menu-item>
        <t-menu-item value="edit1">
          <template #icon>
            <Edit1Icon />
          </template>
          资源编辑
        </t-menu-item>
      </t-menu>
    </t-aside>
    <t-layout>
      <t-content>
        <div>
          <slot />
        </div>
      </t-content>
      <t-footer>Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights Reserved</t-footer>
    </t-layout>
  </t-layout>
</template>
  