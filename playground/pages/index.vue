<template>
  <t-card title="表单">
    <t-form>
      <t-form-item label="姓名" name="name" initial-data="TDesign">
        <t-input placeholder="请输入内容" />
      </t-form-item>
      <t-form-item label="手机号码" name="tel" initial-data="123456">
        <t-input placeholder="请输入内容" />
      </t-form-item>
      <t-form-item label="课程" name="course" initial-data="['1']">
        <t-checkbox-group>
          <t-checkbox value="1">
            语文
          </t-checkbox>
          <t-checkbox value="2">
            数学
          </t-checkbox>
          <t-checkbox value="3">
            英语
          </t-checkbox>
          <t-checkbox value="4">
            体育
          </t-checkbox>
        </t-checkbox-group>
      </t-form-item>
    </t-form>
  </t-card>
</template>
